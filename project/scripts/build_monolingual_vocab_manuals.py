#!/usr/bin/env python3
"""
Generator script for COSYlanguages Monolingual A0-A1 Interactive Web Edition Vocabulary Manuals.
Builds self-contained vocabulary manuals across 9 target languages:
1. lessico-italiano (Italian)
2. vocabulario-espanol (Spanish)
3. deutscher-wortschatz (German)
4. vocabulario-portugues (Portuguese)
5. tatar-teli-leksikasy (Tatar)
6. bashqort-tele-leksikahy (Bashkir)
7. chavash-leksiki (Chuvash)
8. hayots-lezvi-barapashar (Armenian)
9. qartuli-leqsika (Georgian)
"""

import os
import json

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

SHARED_CSS = """/* COSYlanguages Monolingual Vocabulary Manual CSS */
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --bg: #faf9f6;
  --card-bg: #ffffff;
  --text: #1c1c1e;
  --subtext: #636366;
  --border: #e5e5ea;
  --brand-blue: #3562e0;
  --brand-green: #1c8f56;
}
body { margin: 0; padding: 0; font-family: var(--font-sans); background: var(--bg); color: var(--text); line-height: 1.5; }
.topbar { background: var(--card-bg); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 100; }
.topbar-inner { max-width: 1000px; margin: 0 auto; padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; }
.brand { text-decoration: none; color: var(--text); font-weight: 700; display: flex; align-items: center; gap: 8px; }
.brand-mark { background: var(--brand-blue); color: white; padding: 2px 6px; border-radius: 4px; font-size: 14px; }
.topbar-nav { display: flex; gap: 12px; }
.topbar-nav a { text-decoration: none; color: var(--subtext); font-size: 14px; padding: 4px 8px; border-radius: 4px; }
.topbar-nav a.active, .topbar-nav a:hover { background: rgba(0,0,0,0.05); color: var(--text); }
.hero { background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%); padding: 48px 20px 32px; border-bottom: 1px solid var(--border); text-align: center; }
.hero h1 { font-size: 36px; margin: 12px 0; }
.lead { font-size: 18px; color: var(--subtext); max-width: 700px; margin: 0 auto 32px; }
.container { max-width: 900px; margin: 0 auto; padding: 24px 20px; }
.page-head { margin-bottom: 32px; }
.eyebrow { font-size: 13px; text-transform: uppercase; color: var(--subtext); letter-spacing: 0.05em; }
.subtitle { color: var(--subtext); font-size: 16px; margin-top: 4px; }
.rule { border: 0; border-top: 1px solid var(--border); margin: 24px 0; }
.search-box { width: 100%; padding: 12px 16px; border: 1px solid var(--border); border-radius: 8px; font-size: 16px; margin-bottom: 24px; box-sizing: border-box; }
.flashcard-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.flashcard { background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 20px; cursor: pointer; transition: transform 0.15s; }
.flashcard:hover { transform: translateY(-2px); }
.flashcard .word { font-size: 20px; font-weight: 700; color: var(--brand-blue); }
.flashcard .definition { display: none; margin-top: 8px; font-size: 15px; color: var(--text); }
.flashcard .example { display: none; margin-top: 6px; font-size: 13px; color: var(--subtext); font-style: italic; }
.flashcard.flipped .definition, .flashcard.flipped .example { display: block; }
.parts-grid, .topic-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin: 24px 0; }
.part-card, .topic-card { display: block; background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--text); transition: transform 0.15s; }
.part-card:hover, .topic-card:hover { transform: translateY(-2px); }
.stripe { height: 4px; border-radius: 2px; margin-bottom: 12px; }
.part-card h2, .topic-card .ttl { margin: 4px 0 8px; font-size: 18px; }
.part-card p, .topic-card .sub { font-size: 14px; color: var(--subtext); margin: 0; }
.checklist { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; padding: 20px; margin: 24px 0; }
.check-item { display: flex; align-items: center; gap: 10px; margin: 10px 0; cursor: pointer; }
.quiz-panel { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; padding: 20px; margin: 24px 0; }
.qitem { margin: 16px 0; }
.qopts { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.qopt { background: var(--bg); border: 1px solid var(--border); border-radius: 6px; padding: 8px 14px; cursor: pointer; font-size: 14px; }
.qopt.correct { background: #e6f4ea; border-color: var(--brand-green); color: var(--brand-green); font-weight: 600; }
.qopt.wrong { background: #fce8e6; border-color: #a3195b; color: #a3195b; }
.qexplain { display: none; margin-top: 6px; font-size: 13px; color: var(--subtext); }
.pager { display: flex; justify-content: space-between; margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--border); }
.pager a { text-decoration: none; color: var(--brand-blue); font-weight: 600; }
footer.site { border-top: 1px solid var(--border); background: var(--card-bg); padding: 32px 20px; text-align: center; color: var(--subtext); font-size: 14px; margin-top: 48px; }
footer.site a { color: var(--brand-blue); text-decoration: none; }
"""

SHARED_JS = """// COSYlanguages Monolingual Vocabulary Manual Engine
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });

  const searchInput = document.getElementById('vocab-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.flashcard').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? 'block' : 'none';
      });
    });
  }

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

UI_VOCAB_STRINGS = {
    "it": {
        "search_ph": "Cerca vocabolo...",
        "check_title": "🎯 Autovalutazione lessicale",
        "quiz_title": "Quiz lessicale",
        "reset": "Ripristina"
    },
    "es": {
        "search_ph": "Buscar vocabulario...",
        "check_title": "🎯 Autoevaluación de vocabulario",
        "quiz_title": "Cuestionario de vocabulario",
        "reset": "Reiniciar"
    },
    "de": {
        "search_ph": "Wortschatz suchen...",
        "check_title": "🎯 Wortschatz-Selbsttest",
        "quiz_title": "Wortschatz-Quiz",
        "reset": "Zurücksetzen"
    },
    "pt": {
        "search_ph": "Pesquisar vocabulário...",
        "check_title": "🎯 Autoavaliação de vocabulário",
        "quiz_title": "Questionário de vocabulário",
        "reset": "Reiniciar"
    },
    "tt": {
        "search_ph": "Сүзләрне эзләү...",
        "check_title": "🎯 Сүзлеклекне тикшерү",
        "quiz_title": "Сүзлеклек викторинасы",
        "reset": "Яңадан башлау"
    },
    "ba": {
        "search_ph": "Һүҙҙәрҙе эҙләү...",
        "check_title": "🎯 Һүҙлеклекте тикшереү",
        "quiz_title": "Һүҙлеклек викторинаһы",
        "reset": "Яңынан башлау"
    },
    "cv": {
        "search_ph": "Сăмахсене шыраву...",
        "check_title": "🎯 Сăмахлăха тĕрĕслени",
        "quiz_title": "Сăмахлăх викторини",
        "reset": "Татах каялла"
    },
    "hy": {
        "search_ph": "Փնտրել բառապաշար...",
        "check_title": "🎯 Բառապաշարի ինքնաստուգում",
        "quiz_title": "Բառապաշարի հարցաշար",
        "reset": "Վերասկսել"
    },
    "ka": {
        "search_ph": "ძებნა ლექსიკონში...",
        "check_title": "🎯 ლექსიკის თვითშემოწმება",
        "quiz_title": "ლექსიკური ქვიზი",
        "reset": "გადატვირთვა"
    }
}

MANUALS_VOCAB = [
    {
        "dir": "lessico-italiano",
        "title": "Lessico italiano (A0–A1)",
        "nav_title": "Lessico italiano",
        "lang": "it",
        "lead": "Il manuale interattivo di lessico italiano COSYlanguages: moduli tematici, flashcard interattive, ricerca rapida e quiz.",
        "back_link": "Torna al sito COSYlanguages",
        "sections": [
            {
                "id": "modulo-1",
                "file": "modulo-1.html",
                "title": "Modulo 1 · Persone e relazioni",
                "subtitle": "Saluti, dati personali, corpo ed emozioni",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "la-famiglia",
                        "title": "La famiglia",
                        "subtitle": "I membri della famiglia e i parenti",
                        "page_num": 1,
                        "words": [
                            {
                                "word": "la madre",
                                "def": "s.f. · genitore femminile",
                                "ex": "Mia madre si chiama Maria."
                            },
                            {
                                "word": "il padre",
                                "def": "s.m. · genitore maschile",
                                "ex": "Mio padre lavora a Roma."
                            },
                            {
                                "word": "il fratello",
                                "def": "s.m. · figlio degli stessi genitori",
                                "ex": "Ho un fratello maggiore."
                            },
                            {
                                "word": "la sorella",
                                "def": "s.f. · figlia degli stessi genitori",
                                "ex": "Mia sorella studia all'università."
                            }
                        ],
                        "check_items": [
                            "Riconoscere i nomi dei familiari principali",
                            "Usare i vocaboli della famiglia nelle frasi quotidiane"
                        ],
                        "quiz": [
                            {
                                "q": "Come si chiama la figlia degli stessi genitori?",
                                "opts": [
                                    "la madre",
                                    "la sorella",
                                    "la zia"
                                ],
                                "correct": 1,
                                "explain": "La sorella è la figlia degli stessi genitori."
                            }
                        ]
                    },
                    {
                        "slug": "saluti-e-presentazioni",
                        "title": "Saluti e presentazioni",
                        "subtitle": "Formule per salutare e presentarsi",
                        "page_num": 2,
                        "words": [
                            {
                                "word": "ciao",
                                "def": "escl. · saluto informale di arrivo o partenza",
                                "ex": "Ciao Marco, come stai?"
                            },
                            {
                                "word": "buongiorno",
                                "def": "s.m./escl. · saluto formale mattutino",
                                "ex": "Buongiorno Professore, come sta?"
                            },
                            {
                                "word": "arrivederci",
                                "def": "escl. · formula di congedo formale",
                                "ex": "Arrivederci e buona giornata!"
                            },
                            {
                                "word": "piacere",
                                "def": "s.m. · espressione per presentarsi a qualcuno",
                                "ex": "Piacere di conoscerti, mi chiamo Elena."
                            }
                        ],
                        "check_items": [
                            "Distinguere i saluti formali e informali",
                            "Presentarsi con il proprio nome"
                        ],
                        "quiz": [
                            {
                                "q": "Quale saluto si usa di mattina in un contesto formale?",
                                "opts": [
                                    "Buongiorno",
                                    "Ciao",
                                    "Buonanotte"
                                ],
                                "correct": 0,
                                "explain": "«Buongiorno» è il saluto formale usato durante la prima parte della giornata."
                            }
                        ]
                    },
                    {
                        "slug": "dati-personali",
                        "title": "Dati personali",
                        "subtitle": "Nome, età, origine e nazionalità",
                        "page_num": 3,
                        "words": [
                            {
                                "word": "il nome",
                                "def": "s.m. · identificativo personale di una persona",
                                "ex": "Il mio nome è Paolo."
                            },
                            {
                                "word": "l'età",
                                "def": "s.f. · numero di anni di vita (<a href=\"../../grammatica-italiana/topics/singolare-plurale.html\">invariabile al plurale</a>)",
                                "ex": "Ho venticinque anni di età."
                            },
                            {
                                "word": "la nazionalità",
                                "def": "s.f. · appartenenza a uno Stato",
                                "ex": "La sua nazionalità è italiana."
                            },
                            {
                                "word": "abitare",
                                "def": "v.intr. · risiedere in un luogo (<a href=\"../../grammatica-italiana/topics/presente-regolare.html\">presente regolare</a>)",
                                "ex": "Abito a Milano con la mia famiglia."
                            }
                        ],
                        "check_items": [
                            "Comunicare il proprio nome ed età",
                            "Esprimere la propria nazionalità"
                        ],
                        "quiz": [
                            {
                                "q": "Quale verbo indica la residenza in una città?",
                                "opts": [
                                    "abitare",
                                    "chiamarsi",
                                    "avere"
                                ],
                                "correct": 0,
                                "explain": "«Abitare» significa risiedere in un luogo."
                            }
                        ]
                    },
                    {
                        "slug": "i-numeri",
                        "title": "I numeri",
                        "subtitle": "I numeri cardinali da 0 a 100",
                        "page_num": 4,
                        "words": [
                            {
                                "word": "uno",
                                "def": "num.card. · prima unità numerica",
                                "ex": "Ho un solo gatto a casa."
                            },
                            {
                                "word": "dieci",
                                "def": "num.card. · numero che segue il nove",
                                "ex": "Ci sono dieci studenti in classe."
                            },
                            {
                                "word": "cento",
                                "def": "num.card. · numero pari a dieci decine",
                                "ex": "Questo libro ha cento pagine."
                            },
                            {
                                "word": "il numero",
                                "def": "s.m. · valore matematico o di conto",
                                "ex": "Qual è il tuo numero di telefono?"
                            }
                        ],
                        "check_items": [
                            "Contare da 1 a 20 in italiano",
                            "Fornire un numero di telefono"
                        ],
                        "quiz": [
                            {
                                "q": "Cosa viene dopo il numero nove?",
                                "opts": [
                                    "dieci",
                                    "otto",
                                    "cento"
                                ],
                                "correct": 0,
                                "explain": "«Dieci» segue immediatamente il nove."
                            }
                        ]
                    },
                    {
                        "slug": "il-corpo-umano",
                        "title": "Il corpo umano",
                        "subtitle": "Le parti del corpo e del viso",
                        "page_num": 5,
                        "words": [
                            {
                                "word": "la testa",
                                "def": "s.f. · parte superiore del corpo umano",
                                "ex": "Oggi mi fa male la testa."
                            },
                            {
                                "word": "la mano",
                                "def": "s.f. · estremità del braccio (<a href=\"../../grammatica-italiana/topics/genere-nomi.html\">femminile in -o</a>)",
                                "ex": "Lavo le mani prima di mangiare."
                            },
                            {
                                "word": "il braccio",
                                "def": "s.m. · arto superiore (<a href=\"../../grammatica-italiana/topics/singolare-plurale.html\">plurale irregolare: le braccia</a>)",
                                "ex": "Ha un dolore al braccio destro."
                            },
                            {
                                "word": "l'occhio",
                                "def": "s.m. · organo della vista",
                                "ex": "Ha gli occhi azzurri."
                            }
                        ],
                        "check_items": [
                            "Nomeare le parti principali del viso e del corpo",
                            "Descrivere problemi fisici semplici"
                        ],
                        "quiz": [
                            {
                                "q": "Qual è il plurale di «il braccio»?",
                                "opts": [
                                    "le braccia",
                                    "i bracci",
                                    "le braccie"
                                ],
                                "correct": 0,
                                "explain": "«Il braccio» fa al plurale «le braccia»."
                            }
                        ]
                    },
                    {
                        "slug": "sentimenti-ed-emozioni",
                        "title": "Sentimenti ed emozioni",
                        "subtitle": "Stati d'animo e sensazioni fisiche",
                        "page_num": 6,
                        "words": [
                            {
                                "word": "felice",
                                "def": "agg. · che prova gioia e contentezza",
                                "ex": "Sono molto felice di vederti."
                            },
                            {
                                "word": "triste",
                                "def": "agg. · che sente malinconia o dolore morale",
                                "ex": "Luca è triste per la partenza dell'amico."
                            },
                            {
                                "word": "stanco",
                                "def": "agg. · privo di energie fisiche o mentali",
                                "ex": "Dopo il lavoro sono stanco."
                            },
                            {
                                "word": "la paura",
                                "def": "s.f. · emozione provata di fronte a un pericolo",
                                "ex": "Ho paura dei cani grandi."
                            }
                        ],
                        "check_items": [
                            "Esprimere il proprio stato d'animo",
                            "Descrivere come si sente un'altra persona"
                        ],
                        "quiz": [
                            {
                                "q": "Qual è il contrario di «felice»?",
                                "opts": [
                                    "triste",
                                    "stanco",
                                    "calmo"
                                ],
                                "correct": 0,
                                "explain": "«Triste» è il contrario di «felice»."
                            }
                        ]
                    },
                    {
                        "slug": "i-colori",
                        "title": "I colori",
                        "subtitle": "I colori principali e le loro sfumature",
                        "page_num": 7,
                        "words": [
                            {
                                "word": "rosso",
                                "def": "agg./s.m. · colore del fuoco e del sangue (<a href=\"../../grammatica-italiana/topics/aggettivi-qualificativi.html\">concorda in genere e numero</a>)",
                                "ex": "La macchina rossa è di Giovanni."
                            },
                            {
                                "word": "blu",
                                "def": "agg./s.m. · colore del cielo sereno (invariabile)",
                                "ex": "Indossa una camicia blu."
                            },
                            {
                                "word": "verde",
                                "def": "agg./s.m. · colore dell'erba e delle foglie",
                                "ex": "La mela verde è acerba."
                            },
                            {
                                "word": "bianco",
                                "def": "agg./s.m. · colore della neve",
                                "ex": "La casa ha le pareti bianche."
                            }
                        ],
                        "check_items": [
                            "Identificare i colori primari",
                            "Usare gli aggettivi di colore con l'accordo corretto"
                        ],
                        "quiz": [
                            {
                                "q": "Di che colore è la neve?",
                                "opts": [
                                    "bianco",
                                    "nero",
                                    "rosso"
                                ],
                                "correct": 0,
                                "explain": "La neve è tradizionalmente di colore bianco."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-2",
                "file": "modulo-2.html",
                "title": "Modulo 2 · Casa e vita quotidiana",
                "subtitle": "Abitazione, abbigliamento, orari e cucina",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "la-casa-e-i-mobili",
                        "title": "La casa e i mobili",
                        "subtitle": "Stanze, arredi e oggetti domestici",
                        "page_num": 8,
                        "words": [
                            {
                                "word": "la cucina",
                                "def": "s.f. · stanza dove si preparano i pasti",
                                "ex": "La cucina è luminosa e spaziosa."
                            },
                            {
                                "word": "il tavolo",
                                "def": "s.m. · mobile con un piano orizzontale e gambe",
                                "ex": "I piatti sono sul tavolo."
                            },
                            {
                                "word": "la sedia",
                                "def": "s.f. · mobile per sedersi",
                                "ex": "Ci sono quattro sedie intorno al tavolo."
                            },
                            {
                                "word": "il letto",
                                "def": "s.m. · mobile destinato al riposo e al sonno",
                                "ex": "Vado a dormire nel mio letto."
                            }
                        ],
                        "check_items": [
                            "Nomeare le stanze della casa",
                            "Descrivere l'arredamento essenziale"
                        ],
                        "quiz": [
                            {
                                "q": "In quale stanza si cucina il cibo?",
                                "opts": [
                                    "la cucina",
                                    "il bagno",
                                    "la camera"
                                ],
                                "correct": 0,
                                "explain": "Il cibo si prepara in cucina."
                            }
                        ]
                    },
                    {
                        "slug": "abbigliamento-e-accessori",
                        "title": "Abbigliamento e accessori",
                        "subtitle": "Capi di vestiario e accessori personali",
                        "page_num": 9,
                        "words": [
                            {
                                "word": "la maglietta",
                                "def": "s.f. · capo d'abbigliamento leggero a maniche corte",
                                "ex": "In estate indosso sempre una maglietta."
                            },
                            {
                                "word": "i pantaloni",
                                "def": "s.m.pl. · capo d'abbigliamento per la parte inferiore del corpo",
                                "ex": "I pantaloni neri sono molto eleganti."
                            },
                            {
                                "word": "le scarpe",
                                "def": "s.f.pl. · calzature per proteggere i piedi",
                                "ex": "Compro un paio di scarpe nuove."
                            },
                            {
                                "word": "la giacca",
                                "def": "s.f. · indumento da indossare sopra la camicia",
                                "ex": "Metti la giacca perché fa freddo."
                            }
                        ],
                        "check_items": [
                            "Riconoscere i capi di vestiario di base",
                            "Descrivere come è vestita una persona"
                        ],
                        "quiz": [
                            {
                                "q": "Cosa si mette ai piedi?",
                                "opts": [
                                    "le scarpe",
                                    "la giacca",
                                    "il cappello"
                                ],
                                "correct": 0,
                                "explain": "Le scarpe si indossano ai piedi."
                            }
                        ]
                    },
                    {
                        "slug": "orario-e-routine-giornaliera",
                        "title": "Orario e routine giornaliera",
                        "subtitle": "Espressioni temporali e azioni quotidiane",
                        "page_num": 10,
                        "words": [
                            {
                                "word": "l'ora",
                                "def": "s.f. · unità di misura del tempo (60 minuti)",
                                "ex": "Che ora è in questo momento?"
                            },
                            {
                                "word": "svegliarsi",
                                "def": "v.rifl. · interrompere il sonno al mattino",
                                "ex": "Mi sveglio ogni giorno alle sette."
                            },
                            {
                                "word": "la mattina",
                                "def": "s.f. · prima parte della giornata",
                                "ex": "La mattina prendo un caffè caldo."
                            },
                            {
                                "word": "la sera",
                                "def": "s.f. · parte del giorno tra il pomeriggio e la notte",
                                "ex": "La sera guardo la televisione."
                            }
                        ],
                        "check_items": [
                            "Chiedere ed esprimere l'ora",
                            "Raccontare le azioni principali della giornata"
                        ],
                        "quiz": [
                            {
                                "q": "Quale parola indica la prima parte della giornata?",
                                "opts": [
                                    "la mattina",
                                    "la sera",
                                    "la notte"
                                ],
                                "correct": 0,
                                "explain": "La mattina è la parte del giorno in cui ci si sveglia."
                            }
                        ]
                    },
                    {
                        "slug": "pasti-e-cucina",
                        "title": "Pasti e cucina",
                        "subtitle": "I pasti del giorno e le azioni di cucina",
                        "page_num": 11,
                        "words": [
                            {
                                "word": "la colazione",
                                "def": "s.f. · primo pasto del mattino",
                                "ex": "Faccio colazione con latte e biscotti."
                            },
                            {
                                "word": "il pranzo",
                                "def": "s.m. · pasto principale di metà giornata",
                                "ex": "Il pranzo è servito alle ore tredici."
                            },
                            {
                                "word": "la cena",
                                "def": "s.f. · pasto della sera",
                                "ex": "Prepariamo la cena per gli ospiti."
                            },
                            {
                                "word": "cucinare",
                                "def": "v.tr. · preparare gli alimenti con la cottura (<a href=\"../../grammatica-italiana/topics/presente-regolare.html\">verbo in -are</a>)",
                                "ex": "Mi piace cucinare la pasta fresca."
                            }
                        ],
                        "check_items": [
                            "Nomeare i tre pasti della giornata",
                            "Usare i verbi legati alla preparazione del cibo"
                        ],
                        "quiz": [
                            {
                                "q": "Come si chiama il primo pasto della giornata?",
                                "opts": [
                                    "la colazione",
                                    "il pranzo",
                                    "la cena"
                                ],
                                "correct": 0,
                                "explain": "La colazione è il primo pasto al mattino."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-3",
                "file": "modulo-3.html",
                "title": "Modulo 3 · Cibo, ristoranti e tempo libero",
                "subtitle": "Alimentazione, ordinazioni, acquisti e svago",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "cibo-e-bevande",
                        "title": "Cibo e bevande",
                        "subtitle": "Alimenti di base e bevande comuni",
                        "page_num": 12,
                        "words": [
                            {
                                "word": "il pane",
                                "def": "s.m. · alimento di base a base di farina e acqua",
                                "ex": "Compro il pane fresco ogni mattina."
                            },
                            {
                                "word": "l'acqua",
                                "def": "s.f. · bevanda essenziale per la vita",
                                "ex": "Bevo un bicchiere d'acqua naturale."
                            },
                            {
                                "word": "il formaggio",
                                "def": "s.m. · prodotto derivato dal latte",
                                "ex": "Il formaggio italiano è famoso nel mondo."
                            },
                            {
                                "word": "la frutta",
                                "def": "s.f. · insieme di frutti edibili",
                                "ex": "Mangiamo la frutta dopo pranzo."
                            }
                        ],
                        "check_items": [
                            "Identificare i cibi essenziali",
                            "Chiedere da bere o da mangiare"
                        ],
                        "quiz": [
                            {
                                "q": "Quale bevanda è essenziale e naturale?",
                                "opts": [
                                    "l'acqua",
                                    "il vino",
                                    "il caffè"
                                ],
                                "correct": 0,
                                "explain": "L'acqua è la bevanda fondamentale per la vita."
                            }
                        ]
                    },
                    {
                        "slug": "ristorante-e-caffe",
                        "title": "Ristorante e caffè",
                        "subtitle": "Ordinare cibo e chiedere il conto",
                        "page_num": 13,
                        "words": [
                            {
                                "word": "il menu",
                                "def": "s.m. · lista dei piatti e delle bevande (<a href=\"../../grammatica-italiana/topics/singolare-plurale.html\">invariabile</a>)",
                                "ex": "Possiamo avere il menu, per favore?"
                            },
                            {
                                "word": "il cameriere",
                                "def": "s.m. · persona che serve ai tavoli",
                                "ex": "Il cameriere porta il caffè."
                            },
                            {
                                "word": "il conto",
                                "def": "s.m. · somma totale da pagare per il pasto",
                                "ex": "Chiediamo il conto al cameriere."
                            },
                            {
                                "word": "ordinare",
                                "def": "v.tr. · richiedere cibi o bevande al ristorante",
                                "ex": "Vorrei ordinare una pizza margherita."
                            }
                        ],
                        "check_items": [
                            "Chiedere il menu e ordinare un piatto",
                            "Richiedere il conto al ristorante"
                        ],
                        "quiz": [
                            {
                                "q": "Cosa si chiede prima di pagare al ristorante?",
                                "opts": [
                                    "il conto",
                                    "il menu",
                                    "il tavolo"
                                ],
                                "correct": 0,
                                "explain": "Il conto indica la somma finale da pagare."
                            }
                        ]
                    },
                    {
                        "slug": "acquisti-e-denaro",
                        "title": "Acquisti e denaro",
                        "subtitle": "Vocabolario per fare la spesa e pagare",
                        "page_num": 14,
                        "words": [
                            {
                                "word": "il prezzo",
                                "def": "s.m. · costo monetario di un bene o servizio",
                                "ex": "Qual è il prezzo di questa borsa?"
                            },
                            {
                                "word": "l'euro",
                                "def": "s.m. · valuta ufficiale utilizzata in Italia",
                                "ex": "Questo libro costa dieci euro."
                            },
                            {
                                "word": "comprare",
                                "def": "v.tr. · acquistare un oggetto pagando un prezzo",
                                "ex": "Vado al mercato per comprare le mele."
                            },
                            {
                                "word": "il negozio",
                                "def": "s.m. · locale commerciale per la vendita",
                                "ex": "Il negozio di abbigliamento è aperto."
                            }
                        ],
                        "check_items": [
                            "Domandare quanto costa un oggetto",
                            "Utilizzare i termini relativi al denaro"
                        ],
                        "quiz": [
                            {
                                "q": "Qual è la moneta usata in Italia?",
                                "opts": [
                                    "l'euro",
                                    "il dollaro",
                                    "la sterlina"
                                ],
                                "correct": 0,
                                "explain": "L'euro è la valuta ufficiale in Italia."
                            }
                        ]
                    },
                    {
                        "slug": "tempo-libero-e-hobby",
                        "title": "Tempo libero e hobby",
                        "subtitle": "Attività ricreative, sport e passatempi",
                        "page_num": 15,
                        "words": [
                            {
                                "word": "lo sport",
                                "def": "s.m. · attività fisica di svago o competizione (<a href=\"../../grammatica-italiana/topics/articoli-determinativi.html\">articolo 'lo'</a>)",
                                "ex": "Faccio molto sport nel fine settimana."
                            },
                            {
                                "word": "leggere",
                                "def": "v.tr. · scorrere un testo e comprenderne il significato",
                                "ex": "Mi piace leggere libri di storia."
                            },
                            {
                                "word": "la musica",
                                "def": "s.f. · arte dei suoni e melodie",
                                "ex": "Ascolto la musica classica alla radio."
                            },
                            {
                                "word": "il cinema",
                                "def": "s.m. · luogo dove si guardano i film",
                                "ex": "Sabato sera andiamo al cinema."
                            }
                        ],
                        "check_items": [
                            "Parlare delle proprie passioni e hobby",
                            "Esprimere ciò che si ama fare nel tempo libero"
                        ],
                        "quiz": [
                            {
                                "q": "Quale articolo determinativo si usa con «sport»?",
                                "opts": [
                                    "lo",
                                    "il",
                                    "la"
                                ],
                                "correct": 0,
                                "explain": "«Sport» comincia con 's' impura e vuole l'articolo «lo»."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-4",
                "file": "modulo-4.html",
                "title": "Modulo 4 · Città, trasporti e lavoro",
                "subtitle": "Viaggi, indicazioni, professioni e studio",
                "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "trasporti-e-viaggi",
                        "title": "Trasporti e viaggi",
                        "subtitle": "Mezzi di trasporto e vocaboli di viaggio",
                        "page_num": 16,
                        "words": [
                            {
                                "word": "il treno",
                                "def": "s.m. · mezzo di trasporto ferroviario",
                                "ex": "Prendo il treno per andare a Firenze."
                            },
                            {
                                "word": "l'autobus",
                                "def": "s.m. · veicolo pubblico per il trasporto cittadino",
                                "ex": "L'autobus arriva alla fermata."
                            },
                            {
                                "word": "il biglietto",
                                "def": "s.m. · documento per viaggiare o entrare in un luogo",
                                "ex": "Ho comprato un biglietto di andata e ritorno."
                            },
                            {
                                "word": "la stazione",
                                "def": "s.f. · luogo dove partono e arrivano i treni",
                                "ex": "La stazione si trova in centro."
                            }
                        ],
                        "check_items": [
                            "Nomeare i principali mezzi di trasporto",
                            "Chiedere e acquistare un biglietto"
                        ],
                        "quiz": [
                            {
                                "q": "Dove si va per prendere un treno?",
                                "opts": [
                                    "la stazione",
                                    "l'aeroporto",
                                    "la fermata"
                                ],
                                "correct": 0,
                                "explain": "I treni partono e arrivano alla stazione."
                            }
                        ]
                    },
                    {
                        "slug": "indicazioni-e-luoghi-in-citta",
                        "title": "Indicazioni e luoghi in città",
                        "subtitle": "Orientamento urbano e punti di interesse",
                        "page_num": 17,
                        "words": [
                            {
                                "word": "la piazza",
                                "def": "s.f. · spazio aperto ed pubblico della città",
                                "ex": "Ci vediamo nella piazza principale."
                            },
                            {
                                "word": "la strada",
                                "def": "s.f. · via pubblica percorribile da pedoni e veicoli",
                                "ex": "La farmacia è in questa strada."
                            },
                            {
                                "word": "a destra",
                                "def": "loc.avv. · in direzione del lato destro",
                                "ex": "Gira a destra dopo il semaforo."
                            },
                            {
                                "word": "a sinistra",
                                "def": "loc.avv. · in direzione del lato sinistro",
                                "ex": "Il museo si trova a sinistra."
                            }
                        ],
                        "check_items": [
                            "Chiedere indicazioni stradali",
                            "Comprendere dove si trova un luogo urbano"
                        ],
                        "quiz": [
                            {
                                "q": "Qual è il contrario di «a destra»?",
                                "opts": [
                                    "a sinistra",
                                    "dritto",
                                    "vicino"
                                ],
                                "correct": 0,
                                "explain": "«A sinistra» è l'opposto di «a destra»."
                            }
                        ]
                    },
                    {
                        "slug": "mestieri-e-professioni",
                        "title": "Mestieri e professioni",
                        "subtitle": "Lavori e occupazioni lavorative",
                        "page_num": 18,
                        "words": [
                            {
                                "word": "il medico",
                                "def": "s.m. · professionista della medicina e della salute",
                                "ex": "Il medico visita il paziente."
                            },
                            {
                                "word": "l'insegnante",
                                "def": "s.m./f. · persona che insegna nelle scuole",
                                "ex": "L'insegnante spiega la lezione di lingua."
                            },
                            {
                                "word": "l'operaio",
                                "def": "s.m. · lavoratore manuale nelle fabbriche",
                                "ex": "Mio zio lavora come operaio."
                            },
                            {
                                "word": "il lavoro",
                                "def": "s.m. · attività lavorativa svolta per professione",
                                "ex": "Ccerco un lavoro stimolante."
                            }
                        ],
                        "check_items": [
                            "Dire qual è il proprio lavoro",
                            "Riconoscere i nomi delle professioni comuni"
                        ],
                        "quiz": [
                            {
                                "q": "Chi cura le persone malate?",
                                "opts": [
                                    "il medico",
                                    "l'insegnante",
                                    "il cuoco"
                                ],
                                "correct": 0,
                                "explain": "Il medico si occupa della salute dei pazienti."
                            }
                        ]
                    },
                    {
                        "slug": "scuola-e-oggetti-di-classe",
                        "title": "Scuola e oggetti di classe",
                        "subtitle": "Ambiente scolastico e materiale per lo studio",
                        "page_num": 19,
                        "words": [
                            {
                                "word": "il libro",
                                "def": "s.m. · opera stampata composta da fogli rilegati",
                                "ex": "Apro il libro alla pagina venti."
                            },
                            {
                                "word": "la penna",
                                "def": "s.f. · strumento per scrivere a inchiostro",
                                "ex": "Scrivo gli appunti con la penna blu."
                            },
                            {
                                "word": "il quaderno",
                                "def": "s.m. · fascicolo di fogli bianchi per scrivere",
                                "ex": "Ho comprato un quaderno a quadretti."
                            },
                            {
                                "word": "la classe",
                                "def": "s.f. · stanza o gruppo di studenti a scuola",
                                "ex": "La classe di italiano è molto attiva."
                            }
                        ],
                        "check_items": [
                            "Identificare gli oggetti scolastici da banco",
                            "Chiedere in prestito una penna o un libro"
                        ],
                        "quiz": [
                            {
                                "q": "Cosa si usa per scrivere gli appunti?",
                                "opts": [
                                    "la penna",
                                    "la sedia",
                                    "la finestra"
                                ],
                                "correct": 0,
                                "explain": "La penna è lo strumento base per scrivere."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-5",
                "file": "modulo-5.html",
                "title": "Modulo 5 · Salute, tecnologia e ambiente",
                "subtitle": "Benessere, meteo, dispositivi e connettivi",
                "stripe": "#a3195b",
                "topics": [
                    {
                        "slug": "salute-e-farmacia",
                        "title": "Salute e farmacia",
                        "subtitle": "Sintomi, farmaci e consulti medici",
                        "page_num": 20,
                        "words": [
                            {
                                "word": "il dolore",
                                "def": "s.m. · sensazione di sofferenza fisica",
                                "ex": "Sento un dolore forte alla schiena."
                            },
                            {
                                "word": "la farmacia",
                                "def": "s.f. · negozio in cui si vendono i medicinali",
                                "ex": "Compro lo sciroppo in farmacia."
                            },
                            {
                                "word": "la febbre",
                                "def": "s.f. · aumento della temperatura corporea",
                                "ex": "Ho la febbre a trentotto."
                            },
                            {
                                "word": "la medicina",
                                "def": "s.f. · farmaco o rimedio per curare una malattia",
                                "ex": "Prendo questa medicina dopo i pasti."
                            }
                        ],
                        "check_items": [
                            "Descrivere un sintomo di malessere al dottore",
                            "Chiedere un farmaco in farmacia"
                        ],
                        "quiz": [
                            {
                                "q": "Dove si acquistano le medicine?",
                                "opts": [
                                    "in farmacia",
                                    "in libreria",
                                    "al cinema"
                                ],
                                "correct": 0,
                                "explain": "La farmacia è il luogo deputato alla vendita dei farmaci."
                            }
                        ]
                    },
                    {
                        "slug": "tempo-e-stagioni",
                        "title": "Tempo e stagioni",
                        "subtitle": "Condizioni meteorologiche e periodo dell'anno",
                        "page_num": 21,
                        "words": [
                            {
                                "word": "il sole",
                                "def": "s.m. · stella al centro del sistema solare",
                                "ex": "Oggi c'è un bellissimo sole."
                            },
                            {
                                "word": "la pioggia",
                                "def": "s.f. · precipitazione d'acqua dalle nuvole",
                                "ex": "Prendi l'ombrello perché c'è la pioggia."
                            },
                            {
                                "word": "l'estate",
                                "def": "s.f. · la stagione più calda dell'anno",
                                "ex": "In estate andiamo sempre al mare."
                            },
                            {
                                "word": "l'inverno",
                                "def": "s.m. · la stagione più fredda dell'anno",
                                "ex": "In inverno nevica in montagna."
                            }
                        ],
                        "check_items": [
                            "Parlare del tempo meteorologico",
                            "Conoscere le quattro stagioni dell'anno"
                        ],
                        "quiz": [
                            {
                                "q": "Qual è la stagione più calda?",
                                "opts": [
                                    "l'estate",
                                    "l'inverno",
                                    "l'autunno"
                                ],
                                "correct": 0,
                                "explain": "L'estate presenta le temperature più elevate dell'anno."
                            }
                        ]
                    },
                    {
                        "slug": "tecnologia-e-telefono",
                        "title": "Tecnologia e telefono",
                        "subtitle": "Dispositivi digitali, internet e chiamate",
                        "page_num": 22,
                        "words": [
                            {
                                "word": "il telefono",
                                "def": "s.m. · apparecchio per comunicare a distanza",
                                "ex": "Rispondo al telefono che squilla."
                            },
                            {
                                "word": "il computer",
                                "def": "s.m. · dispositivo elettronico per elaborare dati (<a href=\"../../grammatica-italiana/topics/singolare-plurale.html\">invariabile</a>)",
                                "ex": "Uso il computer per lavorare ogni giorno."
                            },
                            {
                                "word": "il messaggio",
                                "def": "s.m. · testo breve inviato tramite telefono o internet",
                                "ex": "Ti mando un messaggio appena arrivo."
                            },
                            {
                                "word": "chiamare",
                                "def": "v.tr. · telefonare a qualcuno o pronunciare il nome",
                                "ex": "Posso chiamarti più tardi?"
                            }
                        ],
                        "check_items": [
                            "Parlare di dispositivi elettronici",
                            "Inviare un messaggio o telefonare"
                        ],
                        "quiz": [
                            {
                                "q": "Come si chiama un breve testo scritto inviato sullo smartphone?",
                                "opts": [
                                    "il messaggio",
                                    "il libro",
                                    "il quadro"
                                ],
                                "correct": 0,
                                "explain": "Un messaggio è un testo inviato via telefono o internet."
                            }
                        ]
                    },
                    {
                        "slug": "parole-di-collegamento-e-domande",
                        "title": "Parole di collegamento e domande",
                        "subtitle": "Congiunzioni, preposizioni e pronomi interrogativi",
                        "page_num": 23,
                        "words": [
                            {
                                "word": "chi",
                                "def": "pron.interr. · richiede l'identità di una persona (<a href=\"../../grammatica-italiana/topics/interrogativi.html\">vedi grammatica</a>)",
                                "ex": "Chi è quella persona alla porta?"
                            },
                            {
                                "word": "dove",
                                "def": "avv.interr. · richiede il luogo",
                                "ex": "Dove si trova la stazione dei treni?"
                            },
                            {
                                "word": "perché",
                                "def": "cong./avv. · introduce una causa o una domanda",
                                "ex": "Perché non vieni alla festa?"
                            },
                            {
                                "word": "ma",
                                "def": "cong. · introduce una contrapposizione",
                                "ex": "Vorrei uscire, ma piove molto."
                            }
                        ],
                        "check_items": [
                            "Formulare domande con 'chi', 'dove', 'perché'",
                            "Usare le congiunzioni semplici per unire le frasi"
                        ],
                        "quiz": [
                            {
                                "q": "Quale parola si usa per chiedere un luogo?",
                                "opts": [
                                    "dove",
                                    "chi",
                                    "quando"
                                ],
                                "correct": 0,
                                "explain": "«Dove» si riferisce a luoghi e posizioni."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-6",
                "file": "modulo-6.html",
                "title": "Modulo 6 · Verbi e pronuncia",
                "subtitle": "Azione di base e regole fonetiche",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "verbi-principali-a1",
                        "title": "Verbi principali A1",
                        "subtitle": "I verbi più usati nella comunicazione iniziale",
                        "page_num": 24,
                        "words": [
                            {
                                "word": "essere",
                                "def": "v.aus. · verbo fondamentale dell'esistenza (<a href=\"../../grammatica-italiana/topics/essere-avere.html\">coniugazione irregolare</a>)",
                                "ex": "Io sono italiano e studio a Roma."
                            },
                            {
                                "word": "avere",
                                "def": "v.aus. · verbo che indica possesso o sensazioni (<a href=\"../../grammatica-italiana/topics/essere-avere.html\">coniugazione irregolare</a>)",
                                "ex": "Ho due fratelli ed ho molta fame."
                            },
                            {
                                "word": "fare",
                                "def": "v.tr. · compiere un'azione o un'attività",
                                "ex": "Cosa fai questo fine settimana?"
                            },
                            {
                                "word": "andare",
                                "def": "v.intr. · spostarsi verso un luogo",
                                "ex": "Andiamo al mare insieme sabato."
                            }
                        ],
                        "check_items": [
                            "Coniugare 'essere' e 'avere' al presente",
                            "Utilizzare i verbi d'azione di base"
                        ],
                        "quiz": [
                            {
                                "q": "Quale verbo esprime possesso?",
                                "opts": [
                                    "avere",
                                    "essere",
                                    "andare"
                                ],
                                "correct": 0,
                                "explain": "«Avere» indica possesso o stato fisico (es. avere fame)."
                            }
                        ]
                    },
                    {
                        "slug": "basi-di-pronuncia",
                        "title": "Basi di pronuncia",
                        "subtitle": "Fonetica italiana e suoni particolari",
                        "page_num": 25,
                        "words": [
                            {
                                "word": "il suono",
                                "def": "s.m. · la sensazione acustica di una lettera o parola",
                                "ex": "Il suono di 'c' cambia davanti ad 'e' ed 'i'."
                            },
                            {
                                "word": "l'accento",
                                "def": "s.m. · l'intensità vocale su una sillaba",
                                "ex": "La parola 'caffè' ha l'accento grafico sull'ultima lettera."
                            },
                            {
                                "word": "la vocale",
                                "def": "s.f. · suono fonetico aperto (a, e, i, o, u)",
                                "ex": "La lingua italiana ha cinque lettere vocali."
                            },
                            {
                                "word": "la consonante",
                                "def": "s.f. · suono articolato con ostruzione dell'aria",
                                "ex": "La lettera 'b' è una consonante."
                            }
                        ],
                        "check_items": [
                            "Riconoscere i suoni dolci e duri di C e G",
                            "Pronunciare correttamente le parole accentate"
                        ],
                        "quiz": [
                            {
                                "q": "Quante lettere vocali ha l'alfabeto italiano?",
                                "opts": [
                                    "cinque",
                                    "sette",
                                    "dieci"
                                ],
                                "correct": 0,
                                "explain": "Le lettere vocali grafiche dell'italiano sono 5: a, e, i, o, u."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "dir": "vocabulario-espanol",
        "title": "Vocabulario español (A0–A1)",
        "nav_title": "Vocabulario español",
        "lang": "es",
        "lead": "El manual interactivo de vocabulario español COSYlanguages: módulos temáticos, tarjetas interactivas y ejercicios.",
        "back_link": "Volver a COSYlanguages",
        "sections": [
            {
                "id": "modulo-1",
                "file": "modulo-1.html",
                "title": "Módulo 1 · La familia y la gente",
                "subtitle": "Relaciones familiares, saludos, datos personales y cuerpo",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "la-familia",
                        "title": "La familia",
                        "subtitle": "Los miembros de la familia",
                        "page_num": 1,
                        "words": [
                            {
                                "word": "la madre",
                                "def": "s.f. · progenitora femenina",
                                "ex": "Mi madre es muy amable."
                            },
                            {
                                "word": "el padre",
                                "def": "s.m. · progenitor masculino",
                                "ex": "Mi padre trabaja en Madrid."
                            },
                            {
                                "word": "el hermano",
                                "def": "s.m. · hijo de los mismos padres",
                                "ex": "Tengo un hermano menor."
                            },
                            {
                                "word": "la hermana",
                                "def": "s.f. · hija de los mismos padres",
                                "ex": "Mi hermana vive en Sevilla."
                            }
                        ],
                        "check_items": [
                            "Identificar los términos de la familia",
                            "Presentar a los miembros de la familia"
                        ],
                        "quiz": [
                            {
                                "q": "¿Cómo se llama el hijo de los mismos padres?",
                                "opts": [
                                    "el hermano",
                                    "el tío",
                                    "el abuelo"
                                ],
                                "correct": 0,
                                "explain": "El hermano es el hijo de los mismos padres."
                            }
                        ]
                    },
                    {
                        "slug": "saludos-y-presentaciones",
                        "title": "Saludos y presentaciones",
                        "subtitle": "Fórmulas corteses y saludos cotidianos",
                        "page_num": 2,
                        "words": [
                            {
                                "word": "hola",
                                "def": "interj. · saludo informal para iniciar una conversación",
                                "ex": "¡Hola! ¿Cómo estás hoy?"
                            },
                            {
                                "word": "buenos días",
                                "def": "expr. · saludo formal por la mañana",
                                "ex": "Buenos días, Señor Gómez."
                            },
                            {
                                "word": "adiós",
                                "def": "interj. · despedida formal o definitiva",
                                "ex": "Hasta mañana, ¡adiós!"
                            },
                            {
                                "word": "mucho gusto",
                                "def": "expr. · expresión al conocer a una persona",
                                "ex": "Soy Carmen, mucho gusto."
                            }
                        ],
                        "check_items": [
                            "Saludar según el momento del día",
                            "Presentarse a sí mismo en español"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué se dice al conocer a alguien nuevo?",
                                "opts": [
                                    "Mucho gusto",
                                    "Buenas noches",
                                    "De nada"
                                ],
                                "correct": 0,
                                "explain": "«Mucho gusto» es la fórmula habitual de presentación."
                            }
                        ]
                    },
                    {
                        "slug": "datos-personales",
                        "title": "Datos personales",
                        "subtitle": "Nombre, edad, profesión y origen",
                        "page_num": 3,
                        "words": [
                            {
                                "word": "el nombre",
                                "def": "s.m. · palabra que identifica a una persona",
                                "ex": "Mi nombre es Alejandro."
                            },
                            {
                                "word": "la edad",
                                "def": "s.f. · tiempo vivido por una persona",
                                "ex": "Tengo veinte años de edad."
                            },
                            {
                                "word": "la nacionalidad",
                                "def": "s.f. · vínculo jurídico con un país",
                                "ex": "Su nacionalidad es chilena."
                            },
                            {
                                "word": "vivir",
                                "def": "v.intr. · residir en un lugar determinado (<a href=\"../../gramatica-espanola/topics/presente-indicativo.html\">verbo regular -ir</a>)",
                                "ex": "Vivo en Barcelona desde hace dos años."
                            }
                        ],
                        "check_items": [
                            "Expresar el nombre y la nacionalidad",
                            "Decir cuántos años tienes"
                        ],
                        "quiz": [
                            {
                                "q": "¿Con qué verbo se expresa la residencia?",
                                "opts": [
                                    "vivir",
                                    "llamarse",
                                    "ser"
                                ],
                                "correct": 0,
                                "explain": "«Vivir» indica el lugar de residencia."
                            }
                        ]
                    },
                    {
                        "slug": "los-numeros",
                        "title": "Los números",
                        "subtitle": "Números cardinales del 0 al 100",
                        "page_num": 4,
                        "words": [
                            {
                                "word": "uno",
                                "def": "num.card. · primera unidad numérica",
                                "ex": "Solo queda un billete disponible."
                            },
                            {
                                "word": "diez",
                                "def": "num.card. · número posterior al nueve",
                                "ex": "Tengo diez libros en mi mochila."
                            },
                            {
                                "word": "cien",
                                "def": "num.card. · cantidad equivalente a diez decenas",
                                "ex": "Cuesta cien euros en total."
                            },
                            {
                                "word": "el número",
                                "def": "s.m. · cifra o valor numérico",
                                "ex": "Escribe tu número de teléfono aquí."
                            }
                        ],
                        "check_items": [
                            "Contar del 1 al 20 en español",
                            "Comprender números en conversaciones sencillas"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué número precede al diez?",
                                "opts": [
                                    "nueve",
                                    "ocho",
                                    "once"
                                ],
                                "correct": 0,
                                "explain": "El número nueve está justo antes del diez."
                            }
                        ]
                    },
                    {
                        "slug": "el-cuerpo-humano",
                        "title": "El cuerpo humano",
                        "subtitle": "Partes de la cabeza y el cuerpo",
                        "page_num": 5,
                        "words": [
                            {
                                "word": "la cabeza",
                                "def": "s.f. · parte superior del cuerpo",
                                "ex": "Me duele la cabeza por el cansancio."
                            },
                            {
                                "word": "la mano",
                                "def": "s.f. · extremidad del brazo (<a href=\"../../grammatica-espanola/topics/genero-sustantivos.html\">sustantivo femenino en -o</a>)",
                                "ex": "Lávate las manos antes de comer."
                            },
                            {
                                "word": "el brazo",
                                "def": "s.m. · extremidad superior del cuerpo",
                                "ex": "Tiene un brazo roto."
                            },
                            {
                                "word": "el ojo",
                                "def": "s.m. · órgano de la visión",
                                "ex": "Tiene los ojos de color verde."
                            }
                        ],
                        "check_items": [
                            "Nombrar las partes principales del cuerpo",
                            "Expresar molestias o dolores simples"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué parte del cuerpo termina en dedos?",
                                "opts": [
                                    "la mano",
                                    "la cabeza",
                                    "la oreja"
                                ],
                                "correct": 0,
                                "explain": "La mano tiene cinco dedos."
                            }
                        ]
                    },
                    {
                        "slug": "sentimientos-y-emociones",
                        "title": "Sentimientos y emociones",
                        "subtitle": "Estados de ánimo y sensaciones",
                        "page_num": 6,
                        "words": [
                            {
                                "word": "feliz",
                                "def": "adj. · que siente alegría y satisfacción",
                                "ex": "Estoy muy feliz por las noticias."
                            },
                            {
                                "word": "triste",
                                "def": "adj. · que siente pena o aflicción",
                                "ex": "La película es muy triste."
                            },
                            {
                                "word": "cansado",
                                "def": "adj. · que necesita descanso físico o mental",
                                "ex": "Estoy cansado después del trabajo."
                            },
                            {
                                "word": "el miedo",
                                "def": "s.m. · sensación de inquietud ante un peligro",
                                "ex": "El niño tiene miedo a la oscuridad."
                            }
                        ],
                        "check_items": [
                            "Describir el estado emocional propio",
                            "Usar 'estar' con adjetivos de emoción (<a href=\"../../gramatica-espanola/topics/ser-vs-estar.html\">ser vs estar</a>)"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué adjetivo significa tener ganas de dormir?",
                                "opts": [
                                    "cansado",
                                    "contento",
                                    "enfadado"
                                ],
                                "correct": 0,
                                "explain": "Estar cansado implica falta de energía o sueño."
                            }
                        ]
                    },
                    {
                        "slug": "los-colores",
                        "title": "Los colores",
                        "subtitle": "Paleta de colores y adjetivos",
                        "page_num": 7,
                        "words": [
                            {
                                "word": "rojo",
                                "def": "adj./s.m. · color de la sangre y los tomates",
                                "ex": "Lleva un vestido rojo muy bonito."
                            },
                            {
                                "word": "azul",
                                "def": "adj./s.m. · color del cielo sin nubes",
                                "ex": "El mar es azul profundo."
                            },
                            {
                                "word": "verde",
                                "def": "adj./s.m. · color de las hojas y campos",
                                "ex": "Las manzanas verdes son ácidas."
                            },
                            {
                                "word": "blanco",
                                "def": "adj./s.m. · color de la nieve fresca",
                                "ex": "La pared está pintada de blanco."
                            }
                        ],
                        "check_items": [
                            "Identificar los colores básicos",
                            "Hacer concordar el color con el sustantivo"
                        ],
                        "quiz": [
                            {
                                "q": "¿De qué color es la hierba del campo?",
                                "opts": [
                                    "verde",
                                    "rojo",
                                    "amarillo"
                                ],
                                "correct": 0,
                                "explain": "La hierba sana es de color verde."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-2",
                "file": "modulo-2.html",
                "title": "Módulo 2 · Vivienda y rutina diaria",
                "subtitle": "El hogar, la ropa, las horas y la cocina",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "la-casa-y-los-muebles",
                        "title": "La casa y los muebles",
                        "subtitle": "Habitaciones y objetos del hogar",
                        "page_num": 8,
                        "words": [
                            {
                                "word": "la cocina",
                                "def": "s.f. · espacio dedicado a cocinar alimentos",
                                "ex": "La cocina tiene electrodomésticos nuevos."
                            },
                            {
                                "word": "la mesa",
                                "def": "s.f. · mueble llano sostenido por patas",
                                "ex": "Pon los platos sobre la mesa."
                            },
                            {
                                "word": "la silla",
                                "def": "s.f. · mueble con respaldo para sentarse",
                                "ex": "Hay cuatro sillas en el comedor."
                            },
                            {
                                "word": "la cama",
                                "def": "s.f. · mueble acolchado para dormir",
                                "ex": "Me acuesto en la cama temprano."
                            }
                        ],
                        "check_items": [
                            "Mencionar las habitaciones de la vivienda",
                            "Describir muebles básicos"
                        ],
                        "quiz": [
                            {
                                "q": "¿En qué mueble nos acostamos para dormir?",
                                "opts": [
                                    "la cama",
                                    "la mesa",
                                    "la silla"
                                ],
                                "correct": 0,
                                "explain": "La cama es el mueble diseñado para dormir."
                            }
                        ]
                    },
                    {
                        "slug": "ropa-y-accesorios",
                        "title": "Ropa y accesorios",
                        "subtitle": "Prendas de vestir y complementos",
                        "page_num": 9,
                        "words": [
                            {
                                "word": "la camiseta",
                                "def": "s.f. · prenda interior o informal sin cuello",
                                "ex": "Llevo una camiseta blanca."
                            },
                            {
                                "word": "los pantalones",
                                "def": "s.m.pl. · prenda que cubre desde la cintura",
                                "ex": "Compré unos pantalones azules."
                            },
                            {
                                "word": "los zapatos",
                                "def": "s.m.pl. · calzado para proteger los pies",
                                "ex": "Mis zapatos nuevos son muy cómodos."
                            },
                            {
                                "word": "la chaqueta",
                                "def": "s.f. · prenda exterior de vestir con mangas",
                                "ex": "Ponte la chaqueta si tienes frío."
                            }
                        ],
                        "check_items": [
                            "Reconocer las prendas principales",
                            "Hablar de la ropa que se lleva puesta"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué prenda se usa en los pies?",
                                "opts": [
                                    "los zapatos",
                                    "la camiseta",
                                    "el sombrero"
                                ],
                                "correct": 0,
                                "explain": "Los zapatos cubren y protegen los pies."
                            }
                        ]
                    },
                    {
                        "slug": "horario-y-rutina-diaria",
                        "title": "Horario y rutina diaria",
                        "subtitle": "La hora y acciones cotidianas",
                        "page_num": 10,
                        "words": [
                            {
                                "word": "la hora",
                                "def": "s.f. · medida de tiempo equivalente a 60 minutos",
                                "ex": "¿Qué hora es en este momento?"
                            },
                            {
                                "word": "despertarse",
                                "def": "v.ref. · dejar de estar dormido al amanecer",
                                "ex": "Me despierto a las siete de la mañana."
                            },
                            {
                                "word": "la mañana",
                                "def": "s.f. · tiempo comprendido desde el amanecer",
                                "ex": "Por la mañana tomo un café bien caliente."
                            },
                            {
                                "word": "la tarde",
                                "def": "s.f. · período entre el mediodía y el anochecer",
                                "ex": "Estudio español por la tarde."
                            }
                        ],
                        "check_items": [
                            "Decir y preguntar la hora",
                            "Explicar la rutina matutina"
                        ],
                        "quiz": [
                            {
                                "q": "¿En qué período del día amanece?",
                                "opts": [
                                    "la mañana",
                                    "la noche",
                                    "la tarde"
                                ],
                                "correct": 0,
                                "explain": "El comienzo del día transcurre por la mañana."
                            }
                        ]
                    },
                    {
                        "slug": "comidas-y-cocina",
                        "title": "Comidas y cocina",
                        "subtitle": "Pastos diarios y verbos culinarios",
                        "page_num": 11,
                        "words": [
                            {
                                "word": "el desayuno",
                                "def": "s.m. · primera comida que se toma en el día",
                                "ex": "El desayuno incluye tostadas y zumo."
                            },
                            {
                                "word": "el almuerzo",
                                "def": "s.m. · comida principal del mediodía",
                                "ex": "Tomamos el almuerzo a las dos de la tarde."
                            },
                            {
                                "word": "la cena",
                                "def": "s.f. · comida que se hace por la noche",
                                "ex": "La cena consiste en una sopa ligera."
                            },
                            {
                                "word": "cocinar",
                                "def": "v.tr. · preparar los alimentos hirviendo o guisando",
                                "ex": "Me encanta cocinar paella el domingo."
                            }
                        ],
                        "check_items": [
                            "Distinguir las tres comidas del día",
                            "Expresar gustos sobre cocinar"
                        ],
                        "quiz": [
                            {
                                "q": "¿Cómo se llama la última comida del día?",
                                "opts": [
                                    "la cena",
                                    "el desayuno",
                                    "el almuerzo"
                                ],
                                "correct": 0,
                                "explain": "La cena se toma al final del día por la noche."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-3",
                "file": "modulo-3.html",
                "title": "Módulo 3 · Alimentos, ocio y compras",
                "subtitle": "Comida, restaurantes, tiendas y pasatiempos",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "comida-y-bebidas",
                        "title": "Comida y bebidas",
                        "subtitle": "Ingredientes y bebidas de consumo diario",
                        "page_num": 12,
                        "words": [
                            {
                                "word": "el pan",
                                "def": "s.m. · alimento básico horneado de harina y agua",
                                "ex": "El pan recién hecho huele muy bien."
                            },
                            {
                                "word": "el agua",
                                "def": "s.f. · líquido incoloro vital para el cuerpo (<a href=\"../../gramatica-espanola/topics/articulos-definidos.html\">usa artículo 'el' en singular</a>)",
                                "ex": "Bebo un vaso de agua fresca."
                            },
                            {
                                "word": "el queso",
                                "def": "s.m. · producto sólido obtenido de la leche",
                                "ex": "El queso manchego es excelente."
                            },
                            {
                                "word": "la fruta",
                                "def": "s.f. · frutos comestibles de plantas o árboles",
                                "ex": "Comer fruta fresca es saludable."
                            }
                        ],
                        "check_items": [
                            "Nombrar alimentos de consumo habitual",
                            "Usar el artículo correcto con 'agua'"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué artículo singular acompaña a 'agua'?",
                                "opts": [
                                    "el",
                                    "la",
                                    "los"
                                ],
                                "correct": 0,
                                "explain": "'Agua' lleva el artículo 'el' por razones de fonética."
                            }
                        ]
                    },
                    {
                        "slug": "restaurante-y-cafe",
                        "title": "Restaurante y café",
                        "subtitle": "Pedir platos y pagar en establecimientos",
                        "page_num": 13,
                        "words": [
                            {
                                "word": "la carta",
                                "def": "s.f. · lista de platos y precios del restaurante",
                                "ex": "¿Nos trae la carta, por favor?"
                            },
                            {
                                "word": "el camarero",
                                "def": "s.m. · persona que atiende a los clientes",
                                "ex": "El camarero tomó nota del pedido."
                            },
                            {
                                "word": "la cuenta",
                                "def": "s.f. · resumen del importe a pagar",
                                "ex": "¿Nos da la cuenta cuando pueda?"
                            },
                            {
                                "word": "pedir",
                                "def": "v.tr. · solicitar comida o bebida al servicio",
                                "ex": "Voy a pedir un pescado a la plancha."
                            }
                        ],
                        "check_items": [
                            "Solicitar la carta y la cuenta educadamente",
                            "Pedir comida en un bar o café"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué se solicita para abonar la comida consumida?",
                                "opts": [
                                    "la cuenta",
                                    "la carta",
                                    "la servilleta"
                                ],
                                "correct": 0,
                                "explain": "La cuenta refleja la suma total a pagar."
                            }
                        ]
                    },
                    {
                        "slug": "compras-y-dinero",
                        "title": "Compras y dinero",
                        "subtitle": "Tiendas, precios y operaciones monetarias",
                        "page_num": 14,
                        "words": [
                            {
                                "word": "el precio",
                                "def": "s.m. · cantidad de dinero que cuesta algo",
                                "ex": "El precio de esta chaqueta es bajo."
                            },
                            {
                                "word": "el euro",
                                "def": "s.m. · moneda oficial usada en España",
                                "ex": "Este café cuesta dos euros."
                            },
                            {
                                "word": "comprar",
                                "def": "v.tr. · adquirir bienes a cambio de dinero",
                                "ex": "Quiero comprar fruta en el mercado."
                            },
                            {
                                "word": "la tienda",
                                "def": "s.f. · establecimiento donde se venden productos",
                                "ex": "La tienda abre a las diez."
                            }
                        ],
                        "check_items": [
                            "Preguntar '¿cuánto cuesta?'",
                            "Conocer vocabulario básico de comercios"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué verbo indica adquirir un objeto con dinero?",
                                "opts": [
                                    "comprar",
                                    "vender",
                                    "regalar"
                                ],
                                "correct": 0,
                                "explain": "Comprar significa pagar dinero por un objeto."
                            }
                        ]
                    },
                    {
                        "slug": "tiempo-libre-y-hobbies",
                        "title": "Tiempo libre y hobbies",
                        "subtitle": "Deportes, aficiones e intereses",
                        "page_num": 15,
                        "words": [
                            {
                                "word": "el deporte",
                                "def": "s.m. · actividad física de ejercicio y recreo",
                                "ex": "Hago deporte tres veces por semana."
                            },
                            {
                                "word": "leer",
                                "def": "v.tr. · interpretar las letras de un texto",
                                "ex": "Me gusta leer novelas históricas."
                            },
                            {
                                "word": "la música",
                                "def": "s.f. · combinación armoniosa de sonidos",
                                "ex": "Escucho música mientras estudio."
                            },
                            {
                                "word": "el cine",
                                "def": "s.m. · sala de proyección de películas",
                                "ex": "Vamos al cine los fines de semana."
                            }
                        ],
                        "check_items": [
                            "Expresar aficiones usando el verbo gustar",
                            "Nombrar actividades de ocio"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué palabra se refiere a la actividad física reglada?",
                                "opts": [
                                    "el deporte",
                                    "la siesta",
                                    "el trabajo"
                                ],
                                "correct": 0,
                                "explain": "El deporte implica ejercicio o juego físico."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-4",
                "file": "modulo-4.html",
                "title": "Módulo 4 · Ciudad, viajes y trabajo",
                "subtitle": "Transportes, direcciones, profesiones y aula",
                "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "transportes-y-viajes",
                        "title": "Transportes y viajes",
                        "subtitle": "Medios de transporte y billetes",
                        "page_num": 16,
                        "words": [
                            {
                                "word": "el tren",
                                "def": "s.m. · vehículo sobre raíles para pasajeros",
                                "ex": "El tren sale a las ocho puntualmente."
                            },
                            {
                                "word": "el autobús",
                                "def": "s.m. · vehículo público urbano e interurbano",
                                "ex": "Tomo el autobús para ir al centro."
                            },
                            {
                                "word": "el billete",
                                "def": "s.m. · documento impreso para viajar",
                                "ex": "Compré un billete de ida y vuelta."
                            },
                            {
                                "word": "la estación",
                                "def": "s.f. · parada principal de trenes o autobuses",
                                "ex": "La estación de trenes está cerca."
                            }
                        ],
                        "check_items": [
                            "Mencionar medios de transporte urbano",
                            "Comprar un billete de transporte"
                        ],
                        "quiz": [
                            {
                                "q": "¿Dónde paran los trenes para subir pasajeros?",
                                "opts": [
                                    "la estación",
                                    "el puerto",
                                    "el garaje"
                                ],
                                "correct": 0,
                                "explain": "La estación es el lugar de llegada y salida de trenes."
                            }
                        ]
                    },
                    {
                        "slug": "direcciones-y-lugares",
                        "title": "Direcciones y lugares",
                        "subtitle": "Orientación urbana y puntos de referencia",
                        "page_num": 17,
                        "words": [
                            {
                                "word": "la plaza",
                                "def": "s.f. · espacio abierto rodeado de edificios",
                                "ex": "Quedamos en la plaza mayor."
                            },
                            {
                                "word": "la calle",
                                "def": "s.f. · vía pública en una población",
                                "ex": "Camino por esta calle peatonal."
                            },
                            {
                                "word": "a la derecha",
                                "def": "expr. · situado hacia el lado derecho",
                                "ex": "Gira a la derecha en el cruce."
                            },
                            {
                                "word": "a la izquierda",
                                "def": "expr. · situado hacia el lado izquierdo",
                                "ex": "El banco está a la izquierda."
                            }
                        ],
                        "check_items": [
                            "Pedir indicaciones en la ciudad",
                            "Comprender 'derecha' e 'izquierda'"
                        ],
                        "quiz": [
                            {
                                "q": "¿Cuál es la dirección contraria a 'la derecha'?",
                                "opts": [
                                    "la izquierda",
                                    "recto",
                                    "arriba"
                                ],
                                "correct": 0,
                                "explain": "La izquierda es la orientación opuesta a la derecha."
                            }
                        ]
                    },
                    {
                        "slug": "profesiones-y-trabajos",
                        "title": "Profesiones y trabajos",
                        "subtitle": "Oficios y ocupaciones del ámbito laboral",
                        "page_num": 18,
                        "words": [
                            {
                                "word": "el médico",
                                "def": "s.m. · profesional que ejerce la medicina",
                                "ex": "El médico atiende a los enfermos."
                            },
                            {
                                "word": "el profesor",
                                "def": "s.m. · persona que imparte enseñanza",
                                "ex": "El profesor explica la lección en clase."
                            },
                            {
                                "word": "el camarero",
                                "def": "s.m. · empleado que sirve en restaurantes",
                                "ex": "El camarero nos recomendó el plato."
                            },
                            {
                                "word": "el trabajo",
                                "def": "s.m. · actividad remunerada u oficio",
                                "ex": "Busco un trabajo a tiempo parcial."
                            }
                        ],
                        "check_items": [
                            "Mencionar la profesión propia",
                            "Identificar empleos comunes"
                        ],
                        "quiz": [
                            {
                                "q": "¿Quién se dedica a la enseñanza escolar?",
                                "opts": [
                                    "el profesor",
                                    "el médico",
                                    "el piloto"
                                ],
                                "correct": 0,
                                "explain": "El profesor imparte materias y enseñanza."
                            }
                        ]
                    },
                    {
                        "slug": "escuela-y-objetos-de-clase",
                        "title": "Escuela y objetos de clase",
                        "subtitle": "Material escolar y entorno de estudio",
                        "page_num": 19,
                        "words": [
                            {
                                "word": "el libro",
                                "def": "s.m. · obra impresa o manuscrita encuadernada",
                                "ex": "Leo un libro de gramática."
                            },
                            {
                                "word": "el bolígrafo",
                                "def": "s.m. · instrumento para escribir con tinta",
                                "ex": "¿Me prestas un bolígrafo rojo?"
                            },
                            {
                                "word": "el cuaderno",
                                "def": "s.m. · hojas de papel unidas para tomar notas",
                                "ex": "Escribo los deberes en el cuaderno."
                            },
                            {
                                "word": "la clase",
                                "def": "s.f. · aula o grupo de alumnos que estudian",
                                "ex": "La clase de español empieza ahora."
                            }
                        ],
                        "check_items": [
                            "Identificar materiales del aula",
                            "Pedir prestado un útil escolar"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué útil sirve para tomar notas en papel?",
                                "opts": [
                                    "el bolígrafo",
                                    "la silla",
                                    "el borrador"
                                ],
                                "correct": 0,
                                "explain": "El bolígrafo permite escribir sobre papel."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-5",
                "file": "modulo-5.html",
                "title": "Módulo 5 · Salud, clima y tecnología",
                "subtitle": "Farmacia, tiempo, medios digitales y conectores",
                "stripe": "#a3195b",
                "topics": [
                    {
                        "slug": "salud-y-farmacia",
                        "title": "Salud y farmacia",
                        "subtitle": "Síntomas, medicinas y consultas de salud",
                        "page_num": 20,
                        "words": [
                            {
                                "word": "el dolor",
                                "def": "s.m. · sensación molesta o aflictiva de una parte del cuerpo",
                                "ex": "Siento un dolor de garganta fuerte."
                            },
                            {
                                "word": "la farmacia",
                                "def": "s.f. · establecimiento donde se venden medicamentos",
                                "ex": "Compro las medicinas en la farmacia."
                            },
                            {
                                "word": "la fiebre",
                                "def": "s.f. · elevación de la temperatura corporal",
                                "ex": "Tiene fiebre alta y debe descansar."
                            },
                            {
                                "word": "la medicina",
                                "def": "s.f. · sustancia curativa para enfermedades",
                                "ex": "Toma esta medicina dos veces al día."
                            }
                        ],
                        "check_items": [
                            "Explicar un dolor físico común",
                            "Pedir un medicamento básico en la farmacia"
                        ],
                        "quiz": [
                            {
                                "q": "¿Dónde se venden los jarabes y medicamentos?",
                                "opts": [
                                    "la farmacia",
                                    "el cine",
                                    "la panadería"
                                ],
                                "correct": 0,
                                "explain": "Las farmacias expenden productos farmacéuticos."
                            }
                        ]
                    },
                    {
                        "slug": "tiempo-y-estaciones",
                        "title": "Tiempo y estaciones",
                        "subtitle": "El clima y las cuatro estaciones del año",
                        "page_num": 21,
                        "words": [
                            {
                                "word": "el sol",
                                "def": "s.m. · estrella luminosa central de nuestro sistema",
                                "ex": "Hoy hace mucho sol y calor."
                            },
                            {
                                "word": "la lluvia",
                                "def": "s.f. · agua que cae de las nubes",
                                "ex": "La lluvia cae torrencialmente."
                            },
                            {
                                "word": "el verano",
                                "def": "s.m. · época más calurosa del año",
                                "ex": "En verano vamos de vacaciones."
                            },
                            {
                                "word": "el invierno",
                                "def": "s.m. · época más fría del año",
                                "ex": "En invierno hace bastante frío."
                            }
                        ],
                        "check_items": [
                            "Describir el tiempo atmosférico",
                            "Mencionar las estaciones del año"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué estación es la más fría?",
                                "opts": [
                                    "el invierno",
                                    "el verano",
                                    "la primavera"
                                ],
                                "correct": 0,
                                "explain": "El invierno se caracteriza por sus bajas temperaturas."
                            }
                        ]
                    },
                    {
                        "slug": "tecnologia-y-telefono",
                        "title": "Tecnología y teléfono",
                        "subtitle": "Dispositivos móviles, mensajes e internet",
                        "page_num": 22,
                        "words": [
                            {
                                "word": "el teléfono",
                                "def": "s.m. · aparato para comunicarse a distancia",
                                "ex": "Suena el teléfono móvil."
                            },
                            {
                                "word": "el ordenador",
                                "def": "s.m. · computadora personal electrónica",
                                "ex": "Trabajo con mi ordenador portátil."
                            },
                            {
                                "word": "el mensaje",
                                "def": "s.m. · recado o texto breve enviado",
                                "ex": "Envié un mensaje de texto."
                            },
                            {
                                "word": "llamar",
                                "def": "v.tr. · establecer comunicación telefónica",
                                "ex": "Te voy a llamar por teléfono luego."
                            }
                        ],
                        "check_items": [
                            "Nombrar aparatos electrónicos cotidianos",
                            "Enviar mensajes y realizar llamadas"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué aparato usamos para navegar por internet o redactar textos?",
                                "opts": [
                                    "el ordenador",
                                    "el tenedor",
                                    "el espejo"
                                ],
                                "correct": 0,
                                "explain": "El ordenador es un sistema informático de procesamiento."
                            }
                        ]
                    },
                    {
                        "slug": "palabras-de-enlace-y-preguntas",
                        "title": "Palabras de enlace y preguntas",
                        "subtitle": "Conectores lógicos y pronombres interrogativos",
                        "page_num": 23,
                        "words": [
                            {
                                "word": "quién",
                                "def": "pron.interr. · pregunta por la identidad de alguien",
                                "ex": "¿Quién es la persona de la foto?"
                            },
                            {
                                "word": "dónde",
                                "def": "adv.interr. · pregunta por el lugar",
                                "ex": "¿Dónde está la biblioteca pública?"
                            },
                            {
                                "word": "porque",
                                "def": "conj. · introduce la causa o motivo",
                                "ex": "No voy porque estoy cansado."
                            },
                            {
                                "word": "pero",
                                "def": "conj. · contrapone una idea a otra previa",
                                "ex": "Es caro pero de buena calidad."
                            }
                        ],
                        "check_items": [
                            "Formular preguntas con tilde interrogativa",
                            "Unir oraciones simples con conectores"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué palabra introduce la razón de un hecho?",
                                "opts": [
                                    "porque",
                                    "dónde",
                                    "quién"
                                ],
                                "correct": 0,
                                "explain": "«Porque» explica la causa de algo."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-6",
                "file": "modulo-6.html",
                "title": "Módulo 6 · Verbos y pronunciación",
                "subtitle": "Verbos clave A1 y reglas de fonética",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "verbos-principales-a1",
                        "title": "Verbos principales A1",
                        "subtitle": "Acciones esenciales para la comunicación",
                        "page_num": 24,
                        "words": [
                            {
                                "word": "ser",
                                "def": "v.cop. · define identidad o cualidades permanentes (<a href=\"../../gramatica-espanola/topics/ser-vs-estar.html\">verbo irregular</a>)",
                                "ex": "Yo soy estudiante de español."
                            },
                            {
                                "word": "estar",
                                "def": "v.cop. · expresa estado temporal o ubicación (<a href=\"../../gramatica-espanola/topics/ser-vs-estar.html\">verbo irregular</a>)",
                                "ex": "Estoy en casa muy tranquilo."
                            },
                            {
                                "word": "tener",
                                "def": "v.tr. · poseer o experimentar sensaciones",
                                "ex": "Tengo dos hermanos y mucha sed."
                            },
                            {
                                "word": "hacer",
                                "def": "v.tr. · realizar una tarea o acción",
                                "ex": "¿Qué haces durante las vacaciones?"
                            }
                        ],
                        "check_items": [
                            "Usar correctamente los verbos ser, estar y tener",
                            "Expresar acciones cotidianas"
                        ],
                        "quiz": [
                            {
                                "q": "¿Qué verbo indica ubicación o estado temporal?",
                                "opts": [
                                    "estar",
                                    "ser",
                                    "hacer"
                                ],
                                "correct": 0,
                                "explain": "«Estar» expresa localización y estados pasajeros."
                            }
                        ]
                    },
                    {
                        "slug": "bases-de-pronunciacion",
                        "title": "Bases de pronunciación",
                        "subtitle": "Sonidos de las letras y acentuación",
                        "page_num": 25,
                        "words": [
                            {
                                "word": "el sonido",
                                "def": "s.m. · efecto acústico producido por la voz",
                                "ex": "El sonido de la 'r' en español es fuerte."
                            },
                            {
                                "word": "el acento",
                                "def": "s.m. · tilde o intensidad fónica en una sílaba",
                                "ex": "La palabra 'café' lleva acento gráfico."
                            },
                            {
                                "word": "la vocal",
                                "def": "s.f. · sonido sin obstrucción del aire (a, e, i, o, u)",
                                "ex": "En español hay cinco vocales claras."
                            },
                            {
                                "word": "la consonante",
                                "def": "s.f. · sonido producido con cierre del tracto vocal",
                                "ex": "La letra 'm' es una consonante bilabial."
                            }
                        ],
                        "check_items": [
                            "Pronunciar las cinco vocales con claridad",
                            "Identificar palabras con tilde gráfica"
                        ],
                        "quiz": [
                            {
                                "q": "¿Cuántas vocales tiene la lengua española?",
                                "opts": [
                                    "cinco",
                                    "seis",
                                    "siete"
                                ],
                                "correct": 0,
                                "explain": "El español cuenta con cinco vocales: a, e, i, o, u."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "dir": "deutscher-wortschatz",
        "title": "Deutscher Wortschatz (A0–A1)",
        "nav_title": "Deutscher Wortschatz",
        "lang": "de",
        "lead": "Das interaktive Handbuch des deutschen Wortschatzes COSYlanguages: Themenmodule, Lernkarten und Übungen.",
        "back_link": "Zurück zu COSYlanguages",
        "sections": [
            {
                "id": "modul-1",
                "file": "modul-1.html",
                "title": "Modul 1 · Familie und Personen",
                "subtitle": "Familienmitglieder, Begrüßungen, Angaben und Körper",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "die-familie",
                        "title": "Die Familie",
                        "subtitle": "Wichtige Familienmitglieder",
                        "page_num": 1,
                        "words": [
                            {
                                "word": "die Mutter",
                                "def": "Subst. f. · weiblicher Elternteil (<a href=\"../../deutsche-grammatik/topics/artikel-und-genus.html\">Artikel die</a>)",
                                "ex": "Meine Mutter wohnt in Berlin."
                            },
                            {
                                "word": "der Vater",
                                "def": "Subst. m. · männlicher Elternteil (<a href=\"../../deutsche-grammatik/topics/artikel-und-genus.html\">Artikel der</a>)",
                                "ex": "Mein Vater arbeitet viel."
                            },
                            {
                                "word": "der Bruder",
                                "def": "Subst. m. · männliches Geschwisterkind",
                                "ex": "Ich habe einen Bruder."
                            },
                            {
                                "word": "die Schwester",
                                "def": "Subst. f. · weibliches Geschwisterkind",
                                "ex": "Meine Schwester studiert."
                            }
                        ],
                        "check_items": [
                            "Namen der Familienmitglieder kennen",
                            "Sätze über die Familie bilden"
                        ],
                        "quiz": [
                            {
                                "q": "Wie heißt der männliche Elternteil?",
                                "opts": [
                                    "der Vater",
                                    "der Bruder",
                                    "der Onkel"
                                ],
                                "correct": 0,
                                "explain": "Der Vater ist der männliche Elternteil."
                            }
                        ]
                    },
                    {
                        "slug": "begruessung-und-vorstellung",
                        "title": "Begrüßung und Vorstellung",
                        "subtitle": "Höflichkeitsformeln und Begrüßungen",
                        "page_num": 2,
                        "words": [
                            {
                                "word": "hallo",
                                "def": "Interj. · informelle Begrüßung unter Bekannten",
                                "ex": "Hallo Julia! Wie geht es dir?"
                            },
                            {
                                "word": "guten Tag",
                                "def": "Expr. · formelle Begrüßung am Tag",
                                "ex": "Guten Tag, Frau Müller."
                            },
                            {
                                "word": "auf Wiedersehen",
                                "def": "Expr. · formeller Abschiedsgruß",
                                "ex": "Auf Wiedersehen und einen schönen Tag!"
                            },
                            {
                                "word": "freut mich",
                                "def": "Expr. · Höflichkeitsformel beim Kennenlernen",
                                "ex": "Ich bin Thomas. Freut mich!"
                            }
                        ],
                        "check_items": [
                            "Zwischen formeller und informeller Begrüßung unterscheiden",
                            "Sich selbst vorstellen"
                        ],
                        "quiz": [
                            {
                                "q": "Welche Begrüßung nutzt man tagsüber in einem Büro?",
                                "opts": [
                                    "Guten Tag",
                                    "Tschüss",
                                    "Gute Nacht"
                                ],
                                "correct": 0,
                                "explain": "«Guten Tag» ist die höfliche formelle Tagesbegrüßung."
                            }
                        ]
                    },
                    {
                        "slug": "persoenliche-angaben",
                        "title": "Persönliche Angaben",
                        "subtitle": "Name, Alter, Herkunft und Wohnort",
                        "page_num": 3,
                        "words": [
                            {
                                "word": "der Name",
                                "def": "Subst. m. · Bezeichnung einer Person",
                                "ex": "Mein Name ist Lukas."
                            },
                            {
                                "word": "das Alter",
                                "def": "Subst. n. · Anzahl der Lebensjahre",
                                "ex": "Mein Alter ist dreißig Jahre."
                            },
                            {
                                "word": "die Staatsangehörigkeit",
                                "def": "Subst. f. · rechtliche Zugehörigkeit zu einem Staat",
                                "ex": "Sie hat die deutsche Staatsangehörigkeit."
                            },
                            {
                                "word": "wohnen",
                                "def": "Verb · an einem Ort seinen Wohnsitz haben (<a href=\"../../deutsche-grammatik/topics/praesens-regelmaessig.html\">regelmäßiges Verb</a>)",
                                "ex": "Ich wohne in München."
                            }
                        ],
                        "check_items": [
                            "Name und Alter angeben",
                            "Wohnort und Herkunft beschreiben"
                        ],
                        "quiz": [
                            {
                                "q": "Welches Verb drückt den Wohnort aus?",
                                "opts": [
                                    "wohnen",
                                    "heißen",
                                    "kommen"
                                ],
                                "correct": 0,
                                "explain": "«Wohnen» bezeichnet den Ort des Wohnsitzes."
                            }
                        ]
                    },
                    {
                        "slug": "die-zahlen",
                        "title": "Die Zahlen",
                        "subtitle": "Grundzahlen von 0 bis 100",
                        "page_num": 4,
                        "words": [
                            {
                                "word": "eins",
                                "def": "Zahlwort · erste Zahleneinheit",
                                "ex": "Ich möchte bitte eins bestellen."
                            },
                            {
                                "word": "zehn",
                                "def": "Zahlwort · Zahl nach der Neun",
                                "ex": "Es sind zehn Kinder in der Gruppe."
                            },
                            {
                                "word": "hundert",
                                "def": "Zahlwort · Anzahl von zehn Zehnern",
                                "ex": "Das Buch hat genau hundert Seiten."
                            },
                            {
                                "word": "die Zahl",
                                "def": "Subst. f. · mathematischer Wert",
                                "ex": "Welche Zahl steht an der Tafel?"
                            }
                        ],
                        "check_items": [
                            "Von 1 bis 20 auf Deutsch zählen",
                            "Telefonnummern verstehen und nennen"
                        ],
                        "quiz": [
                            {
                                "q": "Welche Zahl folgt auf die Neun?",
                                "opts": [
                                    "zehn",
                                    "acht",
                                    "zwölf"
                                ],
                                "correct": 0,
                                "explain": "Zehn kommt direkt nach der Neun."
                            }
                        ]
                    },
                    {
                        "slug": "der-menschliche-koerper",
                        "title": "Der menschliche Körper",
                        "subtitle": "Körperteile und Gesicht",
                        "page_num": 5,
                        "words": [
                            {
                                "word": "der Kopf",
                                "def": "Subst. m. · oberster Teil des Körpers",
                                "ex": "Mein Kopf tut mir heute weh."
                            },
                            {
                                "word": "die Hand",
                                "def": "Subst. f. · Greiforgan am Ende des Arms",
                                "ex": "Er wäscht sich die Hände."
                            },
                            {
                                "word": "der Arm",
                                "def": "Subst. m. · oberes Körperglied",
                                "ex": "Der linke Arm schmerzt etwas."
                            },
                            {
                                "word": "das Auge",
                                "def": "Subst. n. · Sehorgan des Menschen",
                                "ex": "Sie hat blaue Augen."
                            }
                        ],
                        "check_items": [
                            "Wichtige Körperteile benennen",
                            "Einfache gesundheitliche Beschwerden nennen"
                        ],
                        "quiz": [
                            {
                                "q": "Was befindet sich am Ende des Arms?",
                                "opts": [
                                    "die Hand",
                                    "der Fuß",
                                    "das Ohr"
                                ],
                                "correct": 0,
                                "explain": "Die Hand ist das Greiforgan am Arm."
                            }
                        ]
                    },
                    {
                        "slug": "gefuehle-und-emotionen",
                        "title": "Gefühle und Emotionen",
                        "subtitle": "Gemütszustände und Empfindungen",
                        "page_num": 6,
                        "words": [
                            {
                                "word": "glücklich",
                                "def": "Adj. · voller Freude und Zufriedenheit",
                                "ex": "Wir sind sehr glücklich zusammen."
                            },
                            {
                                "word": "traurig",
                                "def": "Adj. · von Niedergeschlagenheit erfüllt",
                                "ex": "Der Junge ist traurig wegen des Regens."
                            },
                            {
                                "word": "müde",
                                "def": "Adj. · Krafteinbuße verspürend, schlafbedürftig",
                                "ex": "Nach der Arbeit bin ich müde."
                            },
                            {
                                "word": "die Angst",
                                "def": "Subst. f. · Gefühl der Bedrohung",
                                "ex": "Er hat keine Angst vor Hunden."
                            }
                        ],
                        "check_items": [
                            "Stimmungen ausdrücken",
                            "Zustände mit 'sein' beschreiben (<a href=\"../../deutsche-grammatik/topics/sein-und-haben.html\">sein und haben</a>)"
                        ],
                        "quiz": [
                            {
                                "q": "Welches Wort ist das Gegenteil von 'glücklich'?",
                                "opts": [
                                    "traurig",
                                    "müde",
                                    "ruhig"
                                ],
                                "correct": 0,
                                "explain": "«Traurig» bezeichnet das Gegenteil von glücklich."
                            }
                        ]
                    },
                    {
                        "slug": "die-farben",
                        "title": "Die Farben",
                        "subtitle": "Grundfarben und Farbbezeichnungen",
                        "page_num": 7,
                        "words": [
                            {
                                "word": "rot",
                                "def": "Adj./Subst. n. · Farbe der Erdbeere oder des Feuers",
                                "ex": "Das rote Auto fährt schnell."
                            },
                            {
                                "word": "blau",
                                "def": "Adj./Subst. n. · Farbe des klaren Himmels",
                                "ex": "Der Himmel ist heute strahlend blau."
                            },
                            {
                                "word": "grün",
                                "def": "Adj./Subst. n. · Farbe des frischen Grases",
                                "ex": "Die Blätter im Frühling sind grün."
                            },
                            {
                                "word": "weiß",
                                "def": "Adj./Subst. n. · Farbe des reinen Schnees",
                                "ex": "Das Hemd ist sauber und weiß."
                            }
                        ],
                        "check_items": [
                            "Farben von Gegenständen nennen",
                            "Farb-Adjektive verwenden"
                        ],
                        "quiz": [
                            {
                                "q": "Welche Farbe hat frisches Gras?",
                                "opts": [
                                    "grün",
                                    "rot",
                                    "schwarz"
                                ],
                                "correct": 0,
                                "explain": "Gras ist typischerweise grün."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modul-2",
                "file": "modul-2.html",
                "title": "Modul 2 · Wohnen und Alltag",
                "subtitle": "Wohnung, Kleidung, Uhrzeit und Küche",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "haus-und-moebel",
                        "title": "Haus und Möbel",
                        "subtitle": "Räume und Einrichtungsgegenstände",
                        "page_num": 8,
                        "words": [
                            {
                                "word": "die Küche",
                                "def": "Subst. f. · Raum zum Kochen und Zubereiten",
                                "ex": "Die Küche ist modern eingerichtet."
                            },
                            {
                                "word": "der Tisch",
                                "def": "Subst. m. · Möbelstück mit einer Tischplatte",
                                "ex": "Das Essen steht auf dem Tisch."
                            },
                            {
                                "word": "der Stuhl",
                                "def": "Subst. m. · Sitzmöbel mit Rückenlehne",
                                "ex": "Am Tisch stehen vier Stühle."
                            },
                            {
                                "word": "das Bett",
                                "def": "Subst. n. · Möbelstück zum Schlafen",
                                "ex": "Das Bett ist sehr bequem."
                            }
                        ],
                        "check_items": [
                            "Räume einer Wohnung aufzählen",
                            "Möbelstücke im Zimmer benennen"
                        ],
                        "quiz": [
                            {
                                "q": "In welchem Raum wird das Essen gekocht?",
                                "opts": [
                                    "die Küche",
                                    "das Bad",
                                    "der Flur"
                                ],
                                "correct": 0,
                                "explain": "Mahlzeiten bereitet man in der Küche zu."
                            }
                        ]
                    },
                    {
                        "slug": "kleidung-und-accessoires",
                        "title": "Kleidung und Accessoires",
                        "subtitle": "Bekleidungsstücke und Zubehör",
                        "page_num": 9,
                        "words": [
                            {
                                "word": "das T-Shirt",
                                "def": "Subst. n. · kurzärmeliges Oberteil",
                                "ex": "Im Sommer trage ich ein T-Shirt."
                            },
                            {
                                "word": "die Hose",
                                "def": "Subst. f. · Kleidungsstück für die Beine",
                                "ex": "Die schwarze Hose passt gut."
                            },
                            {
                                "word": "der Schuh",
                                "def": "Subst. m. · Fußbekleidung zum Gehen",
                                "ex": "Ich ziehe meine Schuhe an."
                            },
                            {
                                "word": "die Jacke",
                                "def": "Subst. f. · warme Oberbekleidung",
                                "ex": "Nimm die Jacke mit, es ist kalt."
                            }
                        ],
                        "check_items": [
                            "Alltagskleidung benennen",
                            "Beschreiben, was jemand trägt"
                        ],
                        "quiz": [
                            {
                                "q": "Was zieht man an den Füßen an?",
                                "opts": [
                                    "der Schuh",
                                    "die Jacke",
                                    "der Mütze"
                                ],
                                "correct": 0,
                                "explain": "Schuhe trägt man an den Füßen."
                            }
                        ]
                    },
                    {
                        "slug": "uhrzeit-und-tagesablauf",
                        "title": "Uhrzeit und Tagesablauf",
                        "subtitle": "Zeitangaben und tägliche Handlungen",
                        "page_num": 10,
                        "words": [
                            {
                                "word": "die Uhrzeit",
                                "def": "Subst. f. · bestimmte Zeit des Tages",
                                "ex": "Wie viel Uhr ist es jetzt?"
                            },
                            {
                                "word": "aufstehen",
                                "def": "Verb · morgens das Bett verlassen",
                                "ex": "Ich stehe um sechs Uhr auf."
                            },
                            {
                                "word": "der Morgen",
                                "def": "Subst. m. · Beginn des Tages",
                                "ex": "Am Morgen trinke ich gerne Tee."
                            },
                            {
                                "word": "der Abend",
                                "def": "Subst. m. · Tageszeit vor der Nacht",
                                "ex": "Am Abend lese ich ein Buch."
                            }
                        ],
                        "check_items": [
                            "Nach der Uhrzeit fragen",
                            "Tagesabläufe beschreiben"
                        ],
                        "quiz": [
                            {
                                "q": "Welche Tageszeit kommt vor dem Nachmittag?",
                                "opts": [
                                    "der Morgen",
                                    "der Abend",
                                    "die Nacht"
                                ],
                                "correct": 0,
                                "explain": "Der Morgen ist der Beginn des Tages."
                            }
                        ]
                    },
                    {
                        "slug": "mahlzeiten-und-kochen",
                        "title": "Mahlzeiten und Kochen",
                        "subtitle": "Tagesmahlzeiten und Zubereitung",
                        "page_num": 11,
                        "words": [
                            {
                                "word": "das Frühstück",
                                "def": "Subst. n. · erste Mahlzeit des Tages",
                                "ex": "Das Frühstück gibt es um acht Uhr."
                            },
                            {
                                "word": "das Mittagessen",
                                "def": "Subst. n. · warme Mahlzeit am Mittag",
                                "ex": "Das Mittagessen schmeckt hervorragend."
                            },
                            {
                                "word": "das Abendessen",
                                "def": "Subst. n. · letzte Mahlzeit am Tag",
                                "ex": "Zum Abendessen essen wir Brot und Käse."
                            },
                            {
                                "word": "kochen",
                                "def": "Verb · Speisen zubereiten (<a href=\"../../deutsche-grammatik/topics/praesens-regelmaessig.html\">regelmäßig</a>)",
                                "ex": "Er kocht gerne Suppe am Wochenende."
                            }
                        ],
                        "check_items": [
                            "Die drei Hauptmahlzeiten benennen",
                            "Verben rund ums Kochen verwenden"
                        ],
                        "quiz": [
                            {
                                "q": "Wie heißt die erste Mahlzeit am Morgen?",
                                "opts": [
                                    "das Frühstück",
                                    "das Mittagessen",
                                    "das Abendessen"
                                ],
                                "correct": 0,
                                "explain": "Das Frühstück nimmt man morgens ein."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modul-3",
                "file": "modul-3.html",
                "title": "Modul 3 · Essen, Freizeit und Einkaufen",
                "subtitle": "Lebensmittel, Gastronomie, Geschäfte und Hobbys",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "essen-und-getraenke",
                        "title": "Essen und Getränke",
                        "subtitle": "Grundnahrungsmittel und Getränke",
                        "page_num": 12,
                        "words": [
                            {
                                "word": "das Brot",
                                "def": "Subst. n. · gebackenes Grundnahrungsmittel",
                                "ex": "Ich kaufe frisches Brot beim Bäcker."
                            },
                            {
                                "word": "das Wasser",
                                "def": "Subst. n. · lebenswichtige Flüssigkeit",
                                "ex": "Ein Glas kaltes Wasser bitte."
                            },
                            {
                                "word": "der Käse",
                                "def": "Subst. m. · Milchprodukt in fester Form",
                                "ex": "Der Käse kommt aus der Schweiz."
                            },
                            {
                                "word": "das Obst",
                                "def": "Subst. n. · essbare Früchte",
                                "ex": "Obst ist gesund und enthält Vitamine."
                            }
                        ],
                        "check_items": [
                            "Lebensmittel des täglichen Bedarfs benennen",
                            "Ein Getränk bestellen"
                        ],
                        "quiz": [
                            {
                                "q": "Welches Getränk ist transparent und lebensnotwendig?",
                                "opts": [
                                    "das Wasser",
                                    "der Kaffee",
                                    "der Saft"
                                ],
                                "correct": 0,
                                "explain": "Wasser ist die grundlegende Lebensflüssigkeit."
                            }
                        ]
                    },
                    {
                        "slug": "im-restaurant-und-cafe",
                        "title": "Im Restaurant und Café",
                        "subtitle": "Bestellen und Bezahlen in der Gastronomie",
                        "page_num": 13,
                        "words": [
                            {
                                "word": "die Speisekarte",
                                "def": "Subst. f. · Liste aller Gerichte und Preise",
                                "ex": "Können wir bitte die Speisekarte haben?"
                            },
                            {
                                "word": "der Kellner",
                                "def": "Subst. m. · Bedienung im Gastgewerbe",
                                "ex": "Der Kellner bringt das Essen."
                            },
                            {
                                "word": "die Rechnung",
                                "def": "Subst. f. · Zahlungsaufstellung nach dem Essen",
                                "ex": "Wir möchten bitte bezahlen, die Rechnung bitte."
                            },
                            {
                                "word": "bestellen",
                                "def": "Verb · Speisen oder Getränke anfordern",
                                "ex": "Ich bestelle einen Salat und ein Mineralwasser."
                            }
                        ],
                        "check_items": [
                            "Die Speisekarte verlangen",
                            "Höflich bezahlen und bestellen"
                        ],
                        "quiz": [
                            {
                                "q": "Was fordert man an, um den Gesamtbetrag zu zahlen?",
                                "opts": [
                                    "die Rechnung",
                                    "die Speisekarte",
                                    "die Gabel"
                                ],
                                "correct": 0,
                                "explain": "Die Rechnung zeigt die zu zahlende Summe."
                            }
                        ]
                    },
                    {
                        "slug": "einkaufen-und-geld",
                        "title": "Einkaufen und Geld",
                        "subtitle": "Geschäfte, Preise und Zahlungsmittel",
                        "page_num": 14,
                        "words": [
                            {
                                "word": "der Preis",
                                "def": "Subst. m. · Geldbetrag für eine Ware",
                                "ex": "Der Preis ist sehr günstig."
                            },
                            {
                                "word": "der Euro",
                                "def": "Subst. m. · Währung in Deutschland und Österreich",
                                "ex": "Das macht zusammen fünfzig Euro."
                            },
                            {
                                "word": "kaufen",
                                "def": "Verb · eine Ware gegen Geld erwerben",
                                "ex": "Ich kaufe ein neues Buch."
                            },
                            {
                                "word": "das Geschäft",
                                "def": "Subst. n. · Laden zum Einkaufen",
                                "ex": "Das Geschäft schließt um zwanzig Uhr."
                            }
                        ],
                        "check_items": [
                            "Fragen 'Wie viel kostet das?'",
                            "Preise auf Deutsch verstehen"
                        ],
                        "quiz": [
                            {
                                "q": "Welche Währung gilt in Deutschland?",
                                "opts": [
                                    "der Euro",
                                    "der Dollar",
                                    "das Pfund"
                                ],
                                "correct": 0,
                                "explain": "Der Euro ist die offizielle Währung."
                            }
                        ]
                    },
                    {
                        "slug": "freizeit-und-hobbys",
                        "title": "Freizeit und Hobbys",
                        "subtitle": "Sport, Interessen und Unterhaltung",
                        "page_num": 15,
                        "words": [
                            {
                                "word": "der Sport",
                                "def": "Subst. m. · körperliche Betätigung",
                                "ex": "Ich treibe regelmäßig Sport."
                            },
                            {
                                "word": "lesen",
                                "def": "Verb · Texte gedanklich erfassen",
                                "ex": "In meiner Freizeit lese ich viel."
                            },
                            {
                                "word": "die Musik",
                                "def": "Subst. f. · Tonkunst und Ausübung von Melodien",
                                "ex": "Sie hört gerne klassische Musik."
                            },
                            {
                                "word": "das Kino",
                                "def": "Subst. n. · Ort zur Filmvorführung",
                                "ex": "Gehen wir heute Abend ins Kino?"
                            }
                        ],
                        "check_items": [
                            "Über eigene Hobbys sprechen",
                            "Vorlieben ausdrücken"
                        ],
                        "quiz": [
                            {
                                "q": "Was macht man mit einem Buch?",
                                "opts": [
                                    "lesen",
                                    "kochen",
                                    "tanzen"
                                ],
                                "correct": 0,
                                "explain": "Bücher werden gelesen."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modul-4",
                "file": "modul-4.html",
                "title": "Modul 4 · Stadt, Reisen und Arbeit",
                "subtitle": "Verkehr, Orientierung, Berufe und Schule",
                "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "verkehrsmittel-und-reisen",
                        "title": "Verkehrsmittel und Reisen",
                        "subtitle": "Öffentlicher Verkehr und Fahrkarten",
                        "page_num": 16,
                        "words": [
                            {
                                "word": "der Zug",
                                "def": "Subst. m. · Schienenfahrzeug für Personen",
                                "ex": "Der Zug fährt pünktlich ab."
                            },
                            {
                                "word": "der Bus",
                                "def": "Subst. m. · öffentliches Straßenfahrzeug",
                                "ex": "Ich nehme den Bus zur Arbeit."
                            },
                            {
                                "word": "die Fahrkarte",
                                "def": "Subst. f. · Ticket für den Transport",
                                "ex": "Zeigen Sie bitte Ihre Fahrkarte."
                            },
                            {
                                "word": "der Bahnhof",
                                "def": "Subst. m. · Station für Züge",
                                "ex": "Der Bahnhof liegt im Stadtzentrum."
                            }
                        ],
                        "check_items": [
                            "Verkehrsmittel benennen",
                            "Eine Fahrkarte am Schalter kaufen"
                        ],
                        "quiz": [
                            {
                                "q": "Wo kommen Züge an und fahren ab?",
                                "opts": [
                                    "der Bahnhof",
                                    "die Haltestelle",
                                    "der Hafen"
                                ],
                                "correct": 0,
                                "explain": "Züge fahren am Bahnhof ab."
                            }
                        ]
                    },
                    {
                        "slug": "wegbeschreibung-und-orte",
                        "title": "Wegbeschreibung und Orte",
                        "subtitle": "Orientierung in der Stadt",
                        "page_num": 17,
                        "words": [
                            {
                                "word": "der Platz",
                                "def": "Subst. m. · freie Fläche in einer Stadt",
                                "ex": "Wir treffen uns auf dem Marktplatz."
                            },
                            {
                                "word": "die Straße",
                                "def": "Subst. f. · Fahrbahn für Fahrzeuge und Fußgänger",
                                "ex": "Überqueren Sie hier die Straße."
                            },
                            {
                                "word": "rechts",
                                "def": "Adv. · zur rechten Seite hin",
                                "ex": "Biegen Sie nach rechts ab."
                            },
                            {
                                "word": "links",
                                "def": "Adv. · zur linken Seite hin",
                                "ex": "Das Museum ist auf der linken Seite."
                            }
                        ],
                        "check_items": [
                            "Nach dem Weg fragen",
                            "Richtungsangaben verstehen"
                        ],
                        "quiz": [
                            {
                                "q": "Was ist das Gegenteil von 'rechts'?",
                                "opts": [
                                    "links",
                                    "geradeaus",
                                    "oben"
                                ],
                                "correct": 0,
                                "explain": "«Links» ist die gegensätzliche Richtung von rechts."
                            }
                        ]
                    },
                    {
                        "slug": "berufe-und-arbeit",
                        "title": "Berufe und Arbeit",
                        "subtitle": "Tätigkeiten und Arbeitswelt",
                        "page_num": 18,
                        "words": [
                            {
                                "word": "der Arzt",
                                "def": "Subst. m. · Heilkundiger zur Medizin",
                                "ex": "Der Arzt untersucht den Patienten."
                            },
                            {
                                "word": "der Lehrer",
                                "def": "Subst. m. · Person im Schuldienst",
                                "ex": "Der Lehrer erklärt die Aufgabe."
                            },
                            {
                                "word": "der Kellner",
                                "def": "Subst. m. · Servicekraft im Lokal",
                                "ex": "Der Kellner bringt die Getränke."
                            },
                            {
                                "word": "die Arbeit",
                                "def": "Subst. f. · berufliche Tätigkeit",
                                "ex": "Die Arbeit beginnt um acht Uhr."
                            }
                        ],
                        "check_items": [
                            "Den eigenen Beruf nennen",
                            "Berufsbezeichnungen verstehen"
                        ],
                        "quiz": [
                            {
                                "q": "Wer unterrichtet Schüler in der Schule?",
                                "opts": [
                                    "der Lehrer",
                                    "der Arzt",
                                    "der Bäcker"
                                ],
                                "correct": 0,
                                "explain": "Der Lehrer unterrichtet in der Schule."
                            }
                        ]
                    },
                    {
                        "slug": "schule-und-unterrichtsgegenstaende",
                        "title": "Schule und Unterrichtsgegenstände",
                        "subtitle": "Schulbedarf und Unterricht",
                        "page_num": 19,
                        "words": [
                            {
                                "word": "das Buch",
                                "def": "Subst. n. · bedrucktes Werk mit Seiten",
                                "ex": "Das Buch liegt auf dem Schreibtisch."
                            },
                            {
                                "word": "der Stift",
                                "def": "Subst. m. · Schreibgerät mit Tinte oder Mine",
                                "ex": "Ich schreibe mit einem Stift."
                            },
                            {
                                "word": "das Heft",
                                "def": "Subst. n. · Schreibheft für Notizen",
                                "ex": "Schreiben Sie das ins Heft."
                            },
                            {
                                "word": "die Klasse",
                                "def": "Subst. f. · Schülergruppe im Raum",
                                "ex": "Die Klasse hört aufmerksam zu."
                            }
                        ],
                        "check_items": [
                            "Schulmaterialien benennen",
                            "Um ein Schreibgerät bitten"
                        ],
                        "quiz": [
                            {
                                "q": "Womit schreibt man auf Papier?",
                                "opts": [
                                    "der Stift",
                                    "der Stuhl",
                                    "die Tafel"
                                ],
                                "correct": 0,
                                "explain": "Ein Stift dient zum Schreiben."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modul-5",
                "file": "modul-5.html",
                "title": "Modul 5 · Gesundheit, Wetter und Kommunikation",
                "subtitle": "Apotheke, Klima, Medien und Bindewörter",
                "stripe": "#a3195b",
                "topics": [
                    {
                        "slug": "gesundheit-und-apotheke",
                        "title": "Gesundheit und Apotheke",
                        "subtitle": "Krankheit, Beschwerden und Medizin",
                        "page_num": 20,
                        "words": [
                            {
                                "word": "der Schmerz",
                                "def": "Subst. m. · unangenehme Empfindung im Körper",
                                "ex": "Ich habe starke Schmerzen im Rücken."
                            },
                            {
                                "word": "die Apotheke",
                                "def": "Subst. f. · Geschäft für Arzneimittel",
                                "ex": "Die Apotheke hat auch nachts geöffnet."
                            },
                            {
                                "word": "das Fieber",
                                "def": "Subst. n. · erhöhte Körpertemperatur",
                                "ex": "Er hat hohes Fieber und bleibt im Bett."
                            },
                            {
                                "word": "die Medizin",
                                "def": "Subst. f. · Heilmittel gegen Krankheit",
                                "ex": "Nehmen Sie diese Medizin regelmäßig."
                            }
                        ],
                        "check_items": [
                            "Symptome beim Arzt nennen",
                            "Medikamente in der Apotheke verlangen"
                        ],
                        "quiz": [
                            {
                                "q": "Wo kauft man Schmerzmittel?",
                                "opts": [
                                    "die Apotheke",
                                    "die Bäckerei",
                                    "die Tankstelle"
                                ],
                                "correct": 0,
                                "explain": "Medikamente bekommt man in der Apotheke."
                            }
                        ]
                    },
                    {
                        "slug": "wetter-und-jahreszeiten",
                        "title": "Wetter und Jahreszeiten",
                        "subtitle": "Witterung und Jahresabschnitte",
                        "page_num": 21,
                        "words": [
                            {
                                "word": "die Sonne",
                                "def": "Subst. f. · leuchtender Himmelskörper",
                                "ex": "Die Sonne scheint den ganzen Tag."
                            },
                            {
                                "word": "der Regen",
                                "def": "Subst. m. · Niederschlag von Wassertropfen",
                                "ex": "Der Regen wässert die Pflanzen."
                            },
                            {
                                "word": "der Sommer",
                                "def": "Subst. m. · wärmste Jahreszeit",
                                "ex": "Im Sommer fahren wir ans Meer."
                            },
                            {
                                "word": "der Winter",
                                "def": "Subst. m. · kälteste Jahreszeit",
                                "ex": "Im Winter schneit es oft."
                            }
                        ],
                        "check_items": [
                            "Das Wetter beschreiben",
                            "Die vier Jahreszeiten kennen"
                        ],
                        "quiz": [
                            {
                                "q": "In welcher Jahreszeit schneit es meistens?",
                                "opts": [
                                    "der Winter",
                                    "der Sommer",
                                    "der Frühling"
                                ],
                                "correct": 0,
                                "explain": "Der Winter ist die kälteste Jahreszeit mit Schnee."
                            }
                        ]
                    },
                    {
                        "slug": "technologie-und-telefon",
                        "title": "Technologie und Telefon",
                        "subtitle": "Elektronische Geräte und Kommunikation",
                        "page_num": 22,
                        "words": [
                            {
                                "word": "das Telefon",
                                "def": "Subst. n. · Fernsprechgerät",
                                "ex": "Das Telefon klingelt im Büro."
                            },
                            {
                                "word": "der Computer",
                                "def": "Subst. m. · elektronischer Rechner",
                                "ex": "Ich arbeite jeden Tag am Computer."
                            },
                            {
                                "word": "die Nachricht",
                                "def": "Subst. f. · kurze Mitteilung",
                                "ex": "Ich habe eine Nachricht geschrieben."
                            },
                            {
                                "word": "anrufen",
                                "def": "Verb · telefonischen Kontakt aufnehmen",
                                "ex": "Kannst du mich später anrufen?"
                            }
                        ],
                        "check_items": [
                            "Geräte benennen",
                            "Eine Nachricht verfassen oder anrufen"
                        ],
                        "quiz": [
                            {
                                "q": "Welches Gerät nutzt man zur Datenverarbeitung?",
                                "opts": [
                                    "der Computer",
                                    "der Kühlschrank",
                                    "der Herd"
                                ],
                                "correct": 0,
                                "explain": "Ein Computer dient der Datenverarbeitung."
                            }
                        ]
                    },
                    {
                        "slug": "bindewoerter-und-fragewoerter",
                        "title": "Bindewörter und Fragewörter",
                        "subtitle": "Konnektoren und Interrogativpronomen",
                        "page_num": 23,
                        "words": [
                            {
                                "word": "wer",
                                "def": "Fragewort · fragt nach Personen",
                                "ex": "Wer ist der neue Kollege?"
                            },
                            {
                                "word": "wo",
                                "def": "Fragewort · fragt nach Orten",
                                "ex": "Wo steht der Bus?"
                            },
                            {
                                "word": "weil",
                                "def": "Konjunktion · begründet eine Aussage",
                                "ex": "Ich bleibe zu Hause, weil ich krank bin."
                            },
                            {
                                "word": "aber",
                                "def": "Konjunktion · drückt einen Gegensatz aus",
                                "ex": "Das Buch ist alt, aber sehr gut."
                            }
                        ],
                        "check_items": [
                            "Fragen mit W-Wörtern stellen",
                            "Sätze mit 'weil' oder 'aber' verbinden"
                        ],
                        "quiz": [
                            {
                                "q": "Mit welchem Fragewort fragt man nach Personen?",
                                "opts": [
                                    "wer",
                                    "wo",
                                    "wann"
                                ],
                                "correct": 0,
                                "explain": "«Wer» richtet sich an Personen."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modul-6",
                "file": "modul-6.html",
                "title": "Modul 6 · Verben und Aussprache",
                "subtitle": "A1-Grundverben und Lautlehre",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "wichtige-a1-verben",
                        "title": "Wichtige A1-Verben",
                        "subtitle": "Zentrale Aktionsverben für Anfänger",
                        "page_num": 24,
                        "words": [
                            {
                                "word": "sein",
                                "def": "Verb · Hilfsverb des Daseins (<a href=\"../../deutsche-grammatik/topics/sein-und-haben.html\">unregelmäßig</a>)",
                                "ex": "Ich bin Student in Berlin."
                            },
                            {
                                "word": "haben",
                                "def": "Verb · Hilfsverb des Besitzes (<a href=\"../../deutsche-grammatik/topics/sein-und-haben.html\">unregelmäßig</a>)",
                                "ex": "Wir haben heute viel Zeit."
                            },
                            {
                                "word": "machen",
                                "def": "Verb · eine Tätigkeit ausführen (<a href=\"../../deutsche-grammatik/topics/praesens-regelmaessig.html\">regelmäßig</a>)",
                                "ex": "Was machst du in den Ferien?"
                            },
                            {
                                "word": "gehen",
                                "def": "Verb · sich zu Fuß fortbewegen",
                                "ex": "Ich gehe jeden Tag spazieren."
                            }
                        ],
                        "check_items": [
                            "'sein' und 'haben' im Präsens konjugieren",
                            "Grundlegende Verben im Alltag verwenden"
                        ],
                        "quiz": [
                            {
                                "q": "Welches Verb drückt Besitz aus?",
                                "opts": [
                                    "haben",
                                    "sein",
                                    "gehen"
                                ],
                                "correct": 0,
                                "explain": "«Haben» steht für Besitz oder Merkmale."
                            }
                        ]
                    },
                    {
                        "slug": "aussprache-grundlagen",
                        "title": "Aussprache-Grundlagen",
                        "subtitle": "Laute, Umlaute und Betonung",
                        "page_num": 25,
                        "words": [
                            {
                                "word": "der Laut",
                                "def": "Subst. m. · kleinste akustische Einheit der Sprache",
                                "ex": "Der Laut 'ch' wird weich ausgesprochen."
                            },
                            {
                                "word": "der Umlaut",
                                "def": "Subst. m. · Vokalveränderung (ä, ö, ü)",
                                "ex": "Die Wörter 'Köpfe' und 'Türen' enthalten Umlaute."
                            },
                            {
                                "word": "der Vokal",
                                "def": "Subst. m. · Selbstlaut (a, e, i, o, u)",
                                "ex": "Das Deutsche kennt fünf einfache Vokale."
                            },
                            {
                                "word": "der Konsonant",
                                "def": "Subst. m. · Mitlaut (b, c, d, f...)",
                                "ex": "Der Buchstabe 'k' ist ein Konsonant."
                            }
                        ],
                        "check_items": [
                            "Die Umlaute ä, ö, ü korrekt aussprechen",
                            "Unterschiede zwischen Vokalen und Konsonanten kennen"
                        ],
                        "quiz": [
                            {
                                "q": "Welche Buchstabengruppe umfasst ä, ö und ü?",
                                "opts": [
                                    "die Umlaute",
                                    "die Diphthonge",
                                    "die Zahlen"
                                ],
                                "correct": 0,
                                "explain": "ä, ö und ü heißen Umlaute."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "dir": "vocabulario-portugues",
        "title": "Vocabulário português (A0–A1)",
        "nav_title": "Vocabulário português",
        "lang": "pt",
        "lead": "O manual interativo de vocabulário português COSYlanguages: módulos temáticos, cartões interativos e exercícios.",
        "back_link": "Voltar para COSYlanguages",
        "sections": [
            {
                "id": "modulo-1",
                "file": "modulo-1.html",
                "title": "Módulo 1 · Família e pessoas",
                "subtitle": "Relações familiares, saudações, dados e corpo",
                "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "a-familia",
                        "title": "A família",
                        "subtitle": "Os membros da família",
                        "page_num": 1,
                        "words": [
                            {
                                "word": "a mãe",
                                "def": "s.f. · progenitora feminina",
                                "ex": "A minha mãe vive em Lisboa."
                            },
                            {
                                "word": "o pai",
                                "def": "s.m. · progenitor masculino",
                                "ex": "O meu pai gosta de ler."
                            },
                            {
                                "word": "o irmão",
                                "def": "s.m. · filho dos mesmos pais",
                                "ex": "Tenho um irmão mais velho."
                            },
                            {
                                "word": "a irmã",
                                "def": "s.f. · filha dos mesmos pais",
                                "ex": "A minha irmã trabalha no Porto."
                            }
                        ],
                        "check_items": [
                            "Nomear os membros da família",
                            "Usar o vocabulário familiar em frases"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é a palavra para o progenitor masculino?",
                                "opts": [
                                    "o pai",
                                    "o irmão",
                                    "o tio"
                                ],
                                "correct": 0,
                                "explain": "O pai é o progenitor masculino."
                            }
                        ]
                    },
                    {
                        "slug": "saudacoes-e-apresentacoes",
                        "title": "Saudações e apresentações",
                        "subtitle": "Fórmulas para saudar e se apresentar",
                        "page_num": 2,
                        "words": [
                            {
                                "word": "olá",
                                "def": "interj. · saudação informal de chegada",
                                "ex": "Olá João! Como estás?"
                            },
                            {
                                "word": "bom dia",
                                "def": "expr. · saudação formal durante a manhã",
                                "ex": "Bom dia, Senhor Professor."
                            },
                            {
                                "word": "adeus",
                                "def": "interj. · despedida formal",
                                "ex": "Adeus e até amanhã!"
                            },
                            {
                                "word": "prazer",
                                "def": "s.m. · expressão usada ao conhecer alguém",
                                "ex": "Muito prazer em conhecê-lo."
                            }
                        ],
                        "check_items": [
                            "Diferenciar saudações formais e informais",
                            "Apresentar-se a outra pessoa"
                        ],
                        "quiz": [
                            {
                                "q": "Que expressão se usa ao conhecer alguém pela primeira vez?",
                                "opts": [
                                    "prazer",
                                    "obrigado",
                                    "boa noite"
                                ],
                                "correct": 0,
                                "explain": "«Prazer» exprime cortesia no primeiro contacto."
                            }
                        ]
                    },
                    {
                        "slug": "dados-pessoais",
                        "title": "Dados pessoais",
                        "subtitle": "Nome, idade, nacionalidade e residência",
                        "page_num": 3,
                        "words": [
                            {
                                "word": "o nome",
                                "def": "s.m. · identificador individual de uma pessoa",
                                "ex": "O meu nome é Miguel."
                            },
                            {
                                "word": "a idade",
                                "def": "s.f. · número de anos vividos",
                                "ex": "Tenho vinte e cinco anos de idade."
                            },
                            {
                                "word": "a nacionalidade",
                                "def": "s.f. · vínculo de pertença a um país",
                                "ex": "Ela tem nacionalidade portuguesa."
                            },
                            {
                                "word": "morar",
                                "def": "v.intr. · residir num determinado local (<a href=\"../../gramatica-portuguesa/topics/presente-do-indicativo.html\">verbo regular -ar</a>)",
                                "ex": "Moro em Coimbra atualmente."
                            }
                        ],
                        "check_items": [
                            "Dizer o próprio nome e idade",
                            "Indicar a nacionalidade e onde mora"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é o verbo que significa residir num sítio?",
                                "opts": [
                                    "morar",
                                    "chamar-se",
                                    "ser"
                                ],
                                "correct": 0,
                                "explain": "«Morar» refere-se à residência."
                            }
                        ]
                    },
                    {
                        "slug": "os-numeros",
                        "title": "Os números",
                        "subtitle": "Números cardinais de 0 a 100",
                        "page_num": 4,
                        "words": [
                            {
                                "word": "um",
                                "def": "num.card. · primeira unidade numérica",
                                "ex": "Tenho apenas um bilhete."
                            },
                            {
                                "word": "dez",
                                "def": "num.card. · número a seguir ao nove",
                                "ex": "Há dez pessoas na sala."
                            },
                            {
                                "word": "cem",
                                "def": "num.card. · valor equivalente a dez dezenas",
                                "ex": "O livro tem cem páginas."
                            },
                            {
                                "word": "o número",
                                "def": "s.m. · valor matemático ou quantidade",
                                "ex": "Qual é o teu número de telefone?"
                            }
                        ],
                        "check_items": [
                            "Contar de 1 a 20 em português",
                            "Reconhecer números em contextos diários"
                        ],
                        "quiz": [
                            {
                                "q": "Que número vem logo a seguir ao nove?",
                                "opts": [
                                    "dez",
                                    "oito",
                                    "onze"
                                ],
                                "correct": 0,
                                "explain": "Dez é o número seguinte ao nove."
                            }
                        ]
                    },
                    {
                        "slug": "o-corpo-humano",
                        "title": "O corpo humano",
                        "subtitle": "Partes do corpo e da cabeça",
                        "page_num": 5,
                        "words": [
                            {
                                "word": "a cabeça",
                                "def": "s.f. · parte superior do corpo",
                                "ex": "Estou com dor de cabeça."
                            },
                            {
                                "word": "a mão",
                                "def": "s.f. · extremidade do braço (<a href=\"../../gramatica-portuguesa/topics/genero-dos-substantivos.html\">substantivo feminino terminado em -ão</a>)",
                                "ex": "Lava as mãos antes de comer."
                            },
                            {
                                "word": "o braço",
                                "def": "s.m. · membro superior do corpo",
                                "ex": "Ele tem o braço partido."
                            },
                            {
                                "word": "o olho",
                                "def": "s.m. · órgão da visão",
                                "ex": "Ela tem olhos castanhos."
                            }
                        ],
                        "check_items": [
                            "Identificar as principais partes do corpo",
                            "Expressar dores simples"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é o órgão responsável pela visão?",
                                "opts": [
                                    "o olho",
                                    "a orelha",
                                    "a mão"
                                ],
                                "correct": 0,
                                "explain": "Os olhos são os órgãos da visão."
                            }
                        ]
                    },
                    {
                        "slug": "sentimentos-e-emocoes",
                        "title": "Sentimentos e emoções",
                        "subtitle": "Estados de ânimo e sensações físicas",
                        "page_num": 6,
                        "words": [
                            {
                                "word": "feliz",
                                "def": "adj. · que sente alegria e satisfação",
                                "ex": "Estou muito feliz por estar aqui."
                            },
                            {
                                "word": "triste",
                                "def": "adj. · que sente desgosto ou pena",
                                "ex": "O filme é bastante triste."
                            },
                            {
                                "word": "cansado",
                                "def": "adj. · com falta de energia física",
                                "ex": "Depois do trabalho fico cansado."
                            },
                            {
                                "word": "o medo",
                                "def": "s.m. · sensação de receio perante o perigo",
                                "ex": "Ele tem medo do escuro."
                            }
                        ],
                        "check_items": [
                            "Descrever o próprio estado emocional",
                            "Usar 'estar' com adjetivos de emoção (<a href=\"../../gramatica-portuguesa/topics/ser-vs-estar.html\">ser vs estar</a>)"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é o oposto de 'feliz'?",
                                "opts": [
                                    "triste",
                                    "contente",
                                    "calmo"
                                ],
                                "correct": 0,
                                "explain": "«Triste» exprime a emoção contrária a feliz."
                            }
                        ]
                    },
                    {
                        "slug": "as-cores",
                        "title": "As cores",
                        "subtitle": "Cores principais e adjetivos",
                        "page_num": 7,
                        "words": [
                            {
                                "word": "vermelho",
                                "def": "adj./s.m. · cor do sangue e do morango",
                                "ex": "O carro vermelho é do meu pai."
                            },
                            {
                                "word": "azul",
                                "def": "adj./s.m. · cor do céu limpo",
                                "ex": "O mar está muito azul hoje."
                            },
                            {
                                "word": "verde",
                                "def": "adj./s.m. · cor da relva e das plantas",
                                "ex": "As folhas das árvores são verdes."
                            },
                            {
                                "word": "branco",
                                "def": "adj./s.m. · cor da neve",
                                "ex": "A parede da sala é branca."
                            }
                        ],
                        "check_items": [
                            "Identificar cores primárias",
                            "Fazer a concordância das cores com os nomes"
                        ],
                        "quiz": [
                            {
                                "q": "De que cor é o céu num dia limpo?",
                                "opts": [
                                    "azul",
                                    "vermelho",
                                    "preto"
                                ],
                                "correct": 0,
                                "explain": "O céu limpo é de cor azul."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-2",
                "file": "modulo-2.html",
                "title": "Módulo 2 · Casa e rotina diária",
                "subtitle": "Habitação, vestuário, horários e cozinha",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "a-casa-e-os-moveis",
                        "title": "A casa e os móveis",
                        "subtitle": "Divisões da casa e mobiliário",
                        "page_num": 8,
                        "words": [
                            {
                                "word": "a cozinha",
                                "def": "s.f. · divisão destinada à preparação de alimentos",
                                "ex": "A cozinha é ampla e moderna."
                            },
                            {
                                "word": "a mesa",
                                "def": "s.f. · móvel plano com pés de apoio",
                                "ex": "Coloca os pratos sobre a mesa."
                            },
                            {
                                "word": "a cadeira",
                                "def": "s.f. · móvel individual para sentar",
                                "ex": "Há quatro cadeiras na sala."
                            },
                            {
                                "word": "a cama",
                                "def": "s.f. · móvel próprio para dormir",
                                "ex": "Deito-me na cama às dez horas."
                            }
                        ],
                        "check_items": [
                            "Listar as divisões da casa",
                            "Nomear móveis essenciais"
                        ],
                        "quiz": [
                            {
                                "q": "Em que divisão se preparam as refeições?",
                                "opts": [
                                    "a cozinha",
                                    "o casa de banho",
                                    "o quarto"
                                ],
                                "correct": 0,
                                "explain": "As refeições preparam-se na cozinha."
                            }
                        ]
                    },
                    {
                        "slug": "vestuario-e-acessorios",
                        "title": "Vestuário e acessórios",
                        "subtitle": "Peças de roupa e complementos",
                        "page_num": 9,
                        "words": [
                            {
                                "word": "a t-shirt",
                                "def": "s.f. · peça de roupa leve de mangas curtas",
                                "ex": "Uso uma t-shirt no verão."
                            },
                            {
                                "word": "as calças",
                                "def": "s.f.pl. · peça de vestuário para a parte inferior",
                                "ex": "Comprei umas calças pretas."
                            },
                            {
                                "word": "os sapatos",
                                "def": "s.m.pl. · calçado para proteger os pés",
                                "ex": "Os meus sapatos são confortáveis."
                            },
                            {
                                "word": "o casaco",
                                "def": "s.m. · peça quente de vestuário exterior",
                                "ex": "Veste o casaco porque está frio."
                            }
                        ],
                        "check_items": [
                            "Reconhecer vestuário comum",
                            "Descrever o vestuário de uma pessoa"
                        ],
                        "quiz": [
                            {
                                "q": "Que peça se calça nos pés?",
                                "opts": [
                                    "os sapatos",
                                    "o casaco",
                                    "o chapéu"
                                ],
                                "correct": 0,
                                "explain": "Os sapatos utilizam-se nos pés."
                            }
                        ]
                    },
                    {
                        "slug": "horas-e-rotina-diaria",
                        "title": "Horas e rotina diária",
                        "subtitle": "Indicação do tempo e ações diárias",
                        "page_num": 10,
                        "words": [
                            {
                                "word": "a hora",
                                "def": "s.f. · unidade de tempo de 60 minutos",
                                "ex": "Que horas são neste momento?"
                            },
                            {
                                "word": "acordar",
                                "def": "v.intr. · deixar de dormir de manhã",
                                "ex": "Acordo todos os dias às sete da manhã."
                            },
                            {
                                "word": "a manhã",
                                "def": "s.f. · período inicial do dia",
                                "ex": "De manhã tomo um café forte."
                            },
                            {
                                "word": "a tarde",
                                "def": "s.f. · período entre o meio-dia e o anoitecer",
                                "ex": "Trabalho durante a tarde."
                            }
                        ],
                        "check_items": [
                            "Perguntar e dizer as horas",
                            "Explicar a rotina da manhã"
                        ],
                        "quiz": [
                            {
                                "q": "Que palavra designa a primeira parte do dia?",
                                "opts": [
                                    "a manhã",
                                    "a noite",
                                    "a tarde"
                                ],
                                "correct": 0,
                                "explain": "A manhã é o início do dia."
                            }
                        ]
                    },
                    {
                        "slug": "refeicoes-e-cozinha",
                        "title": "Refeições e cozinha",
                        "subtitle": "Refeições diárias e verbos de culinária",
                        "page_num": 11,
                        "words": [
                            {
                                "word": "o pequeno-almoço",
                                "def": "s.m. · primeira refeição do dia",
                                "ex": "Tomo o pequeno-almoço às oito da manhã."
                            },
                            {
                                "word": "o almoço",
                                "def": "s.m. · refeição principal do meio-dia",
                                "ex": "O almoço está servido na mesa."
                            },
                            {
                                "word": "o jantar",
                                "def": "s.m. · refeição que se faz à noite",
                                "ex": "Preparamos um jantar especial."
                            },
                            {
                                "word": "cozinhar",
                                "def": "v.tr. · preparar alimentos ao lume",
                                "ex": "Gosto de cozinhar pratos tradicionais."
                            }
                        ],
                        "check_items": [
                            "Distinguir as refeições do dia",
                            "Utilizar verbos relacionados com comida"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é a refeição tomada ao meio-dia?",
                                "opts": [
                                    "o almoço",
                                    "o pequeno-almoço",
                                    "o jantar"
                                ],
                                "correct": 0,
                                "explain": "O almoço toma-se ao meio-dia."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-3",
                "file": "modulo-3.html",
                "title": "Módulo 3 · Alimentação, lazer e compras",
                "subtitle": "Alimentos, restaurantes, lojas e passatempos",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "comida-e-bebidas",
                        "title": "Comida e bebidas",
                        "subtitle": "Alimentos básicos e bebidas habituais",
                        "page_num": 12,
                        "words": [
                            {
                                "word": "o pão",
                                "def": "s.m. · alimento de farinha e água assado no forno",
                                "ex": "Compro pão fresco na padaria."
                            },
                            {
                                "word": "a água",
                                "def": "s.f. · líquido vital transparente",
                                "ex": "Bebo um copo de água fresca."
                            },
                            {
                                "word": "o queijo",
                                "def": "s.m. · alimento derivado do leite",
                                "ex": "O queijo português é saboroso."
                            },
                            {
                                "word": "a fruta",
                                "def": "s.f. · frutos comestíveis de plantas",
                                "ex": "Como fruta fresca como sobremesa."
                            }
                        ],
                        "check_items": [
                            "Nomear alimentos básicos",
                            "Pedir bebidas num estabelecimento"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é o alimento feito de farinha e água assado no forno?",
                                "opts": [
                                    "o pão",
                                    "o arroz",
                                    "a sopa"
                                ],
                                "correct": 0,
                                "explain": "O pão é o produto cozido da farinha."
                            }
                        ]
                    },
                    {
                        "slug": "restaurante-e-cafe",
                        "title": "Restaurante e café",
                        "subtitle": "Pedir pratos e pagar a conta",
                        "page_num": 13,
                        "words": [
                            {
                                "word": "o menu",
                                "def": "s.m. · lista de pratos e preços do restaurante",
                                "ex": "Pode trazer o menu, por favor?"
                            },
                            {
                                "word": "o empregado",
                                "def": "s.m. · pessoa que serve os clientes",
                                "ex": "O empregado trouxe o café."
                            },
                            {
                                "word": "a conta",
                                "def": "s.m./f. · documento do valor a pagar",
                                "ex": "Pedimos a conta ao empregado."
                            },
                            {
                                "word": "pedir",
                                "def": "v.tr. · solicitar comida ou bebida",
                                "ex": "Vou pedir um peixe grelhado."
                            }
                        ],
                        "check_items": [
                            "Pedir a ementa e a conta",
                            "Fazer um pedido num café"
                        ],
                        "quiz": [
                            {
                                "q": "O que se pede antes de pagar a refeição?",
                                "opts": [
                                    "a conta",
                                    "o menu",
                                    "a mesa"
                                ],
                                "correct": 0,
                                "explain": "A conta indica o montante total a liquidar."
                            }
                        ]
                    },
                    {
                        "slug": "compras-e-dinheiro",
                        "title": "Compras e dinheiro",
                        "subtitle": "Lojas, preços e moeda",
                        "page_num": 14,
                        "words": [
                            {
                                "word": "o preço",
                                "def": "s.m. · quantia em dinheiro que custa algo",
                                "ex": "Qual é o preço desta camisa?"
                            },
                            {
                                "word": "o euro",
                                "def": "s.m. · moeda oficial em Portugal",
                                "ex": "O livro custa quinze euros."
                            },
                            {
                                "word": "comprar",
                                "def": "v.tr. · adquirir bens pagando dinheiro",
                                "ex": "Vou comprar fruta ao mercado."
                            },
                            {
                                "word": "a loja",
                                "def": "s.f. · estabelecimento de venda de produtos",
                                "ex": "A loja abre às nove horas."
                            }
                        ],
                        "check_items": [
                            "Perguntar 'Quanto custa?'",
                            "Reconhecer termos de comércio"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é a moeda oficial em Portugal?",
                                "opts": [
                                    "o euro",
                                    "o dólar",
                                    "a libra"
                                ],
                                "correct": 0,
                                "explain": "O euro é a moeda oficial."
                            }
                        ]
                    },
                    {
                        "slug": "tempo-livre-e-hobbies",
                        "title": "Tempo livre e hobbies",
                        "subtitle": "Desporto, leitura e entretenimento",
                        "page_num": 15,
                        "words": [
                            {
                                "word": "o desporto",
                                "def": "s.m. · atividade física de exercício",
                                "ex": "Pratico desporto aos fins de semana."
                            },
                            {
                                "word": "ler",
                                "def": "v.tr. · descodificar um texto escrito",
                                "ex": "Gosto de ler romances."
                            },
                            {
                                "word": "a música",
                                "def": "s.f. · arte de combinar sons",
                                "ex": "Ouço música no telemóvel."
                            },
                            {
                                "word": "o cinema",
                                "def": "s.m. · sala de exibição de filmes",
                                "ex": "Vamos ao cinema ver um filme novo."
                            }
                        ],
                        "check_items": [
                            "Falar dos passatempos pessoais",
                            "Expressar preferências de lazer"
                        ],
                        "quiz": [
                            {
                                "q": "Que ação fazemos com um livro?",
                                "opts": [
                                    "ler",
                                    "nadar",
                                    "cozinhar"
                                ],
                                "correct": 0,
                                "explain": "Os livros são para ler."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-4",
                "file": "modulo-4.html",
                "title": "Módulo 4 · Cidade, viagens e trabalho",
                "subtitle": "Meios de transporte, direções e profissões",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "transportes-e-viagens",
                        "title": "Transportes e viagens",
                        "subtitle": "Transportes públicos e bilhetes",
                        "page_num": 16,
                        "words": [
                            {
                                "word": "o comboio",
                                "def": "s.m. · transporte sobre carris para passageiros",
                                "ex": "O comboio parte da estação."
                            },
                            {
                                "word": "o autocarro",
                                "def": "s.m. · transporte público rodoviário",
                                "ex": "Apanho o autocarro para a cidade."
                            },
                            {
                                "word": "o bilhete",
                                "def": "s.m. · título de viagem impresso",
                                "ex": "Comprei um bilhete de ida e volta."
                            },
                            {
                                "word": "a estação",
                                "def": "s.f. · ponto de chegada e partida de comboios",
                                "ex": "A estação fica no centro."
                            }
                        ],
                        "check_items": [
                            "Identificar meios de transporte públicos",
                            "Comprar um bilhete de transporte"
                        ],
                        "quiz": [
                            {
                                "q": "Onde se apanha o comboio?",
                                "opts": [
                                    "a estação",
                                    "o aeroporto",
                                    "o porto"
                                ],
                                "correct": 0,
                                "explain": "Os comboios partem da estação."
                            }
                        ]
                    },
                    {
                        "slug": "direcoes-e-lugares",
                        "title": "Direções e lugares",
                        "subtitle": "Orientação e pontos na cidade",
                        "page_num": 17,
                        "words": [
                            {
                                "word": "a praça",
                                "def": "s.f. · espaço público aberto numa localidade",
                                "ex": "Encontramo-nos na praça principal."
                            },
                            {
                                "word": "a rua",
                                "def": "s.f. · via pública de circulação urbana",
                                "ex": "Moro nesta rua sossegada."
                            },
                            {
                                "word": "à direita",
                                "def": "expr. · em direção ao lado direito",
                                "ex": "Vira à direita no cruzamento."
                            },
                            {
                                "word": "à esquerda",
                                "def": "expr. · em direção ao lado esquerdo",
                                "ex": "O banco fica à esquerda."
                            }
                        ],
                        "check_items": [
                            "Pedir direções na rua",
                            "Compreender 'esquerda' e 'direita'"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é a direção oposta a 'à direita'?",
                                "opts": [
                                    "à esquerda",
                                    "em frente",
                                    "atrás"
                                ],
                                "correct": 0,
                                "explain": "À esquerda é a direção oposta a à direita."
                            }
                        ]
                    },
                    {
                        "slug": "profissoes-e-trabalho",
                        "title": "Profissões e trabalho",
                        "subtitle": "Ofícios e atividade profissional",
                        "page_num": 18,
                        "words": [
                            {
                                "word": "o médico",
                                "def": "s.m. · profissional de saúde humana",
                                "ex": "O médico examina o doente."
                            },
                            {
                                "word": "o professor",
                                "def": "s.m. · pessoa que ensina numa escola",
                                "ex": "O professor explica a matéria."
                            },
                            {
                                "word": "o empregado",
                                "def": "s.m. · trabalhador por conta de outrem",
                                "ex": "O empregado atende os clientes."
                            },
                            {
                                "word": "o trabalho",
                                "def": "s.m. · atividade profissional remunerada",
                                "ex": "Procuro um trabalho interessante."
                            }
                        ],
                        "check_items": [
                            "Indicar a profissão exercida",
                            "Reconhecer nomes de empregos"
                        ],
                        "quiz": [
                            {
                                "q": "Quem dá aulas aos alunos?",
                                "opts": [
                                    "o professor",
                                    "o médico",
                                    "o piloto"
                                ],
                                "correct": 0,
                                "explain": "O professor ensina aos alunos."
                            }
                        ]
                    },
                    {
                        "slug": "escola-e-objetos-de-aula",
                        "title": "Escola e objetos de aula",
                        "subtitle": "Material escolar e sala de aula",
                        "page_num": 19,
                        "words": [
                            {
                                "word": "o livro",
                                "def": "s.m. · obra impressa composta por folhas",
                                "ex": "Abro o livro na página dez."
                            },
                            {
                                "word": "a caneta",
                                "def": "s.f. · instrumento de escrita a tinta",
                                "ex": "Escrevo com uma caneta azul."
                            },
                            {
                                "word": "o caderno",
                                "def": "s.m. · conjunto de folhas para apontamentos",
                                "ex": "Tiro notas no meu caderno."
                            },
                            {
                                "word": "a aula",
                                "def": "s.f. · período de ensino de uma disciplina",
                                "ex": "A aula de português começou."
                            }
                        ],
                        "check_items": [
                            "Identificar materiais da sala de aula",
                            "Pedir uma caneta ou caderno"
                        ],
                        "quiz": [
                            {
                                "q": "O que se usa para escrever no caderno?",
                                "opts": [
                                    "a caneta",
                                    "a cadeira",
                                    "a mesa"
                                ],
                                "correct": 0,
                                "explain": "A caneta utiliza-se para escrever."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-5",
                "file": "modulo-5.html",
                "title": "Módulo 5 · Saúde, clima e tecnologia",
                "subtitle": "Farmácia, tempo atmosférico e comunicação",
                "stripe": "#a3195b",
                "topics": [
                    {
                        "slug": "saude-e-farmacia",
                        "title": "Saúde e farmácia",
                        "subtitle": "Sintomas, medicamentos e farmácia",
                        "page_num": 20,
                        "words": [
                            {
                                "word": "a dor",
                                "def": "s.f. · sensação de sofrimento físico",
                                "ex": "Sinto uma dor de costas intensa."
                            },
                            {
                                "word": "a farmácia",
                                "def": "s.f. · estabelecimento de venda de remédios",
                                "ex": "Compro o xarope na farmácia."
                            },
                            {
                                "word": "a febre",
                                "def": "s.f. · elevação da temperatura do corpo",
                                "ex": "Ele tem febre alta e precisa de repousar."
                            },
                            {
                                "word": "o medicamento",
                                "def": "s.m. · remédio para tratar doenças",
                                "ex": "Tomo este medicamento duas vezes por dia."
                            }
                        ],
                        "check_items": [
                            "Descrever sintomas de mal-estar",
                            "Pedir medicamentos na farmácia"
                        ],
                        "quiz": [
                            {
                                "q": "Onde se compram os medicamentos?",
                                "opts": [
                                    "a farmácia",
                                    "o cinema",
                                    "a padaria"
                                ],
                                "correct": 0,
                                "explain": "Os medicamentos compram-se na farmácia."
                            }
                        ]
                    },
                    {
                        "slug": "tempo-e-estacoes",
                        "title": "Tempo e estações",
                        "subtitle": "Clima e estações do ano",
                        "page_num": 21,
                        "words": [
                            {
                                "word": "o sol",
                                "def": "s.m. · estrela central do nosso sistema",
                                "ex": "Hoje faz muito sol e calor."
                            },
                            {
                                "word": "a chuva",
                                "def": "s.f. · precipitação de água das nuvens",
                                "ex": "A chuva molha as ruas."
                            },
                            {
                                "word": "o verão",
                                "def": "s.m. · estação mais quente do ano",
                                "ex": "No verão vamos à praia."
                            },
                            {
                                "word": "o inverno",
                                "def": "s.m. · estação mais fria do ano",
                                "ex": "No inverno faz frio e chove."
                            }
                        ],
                        "check_items": [
                            "Descrever o tempo atmosférico",
                            "Mencionar as quatro estações"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é a estação mais quente?",
                                "opts": [
                                    "o verão",
                                    "o inverno",
                                    "o outono"
                                ],
                                "correct": 0,
                                "explain": "O verão é a estação de maior calor."
                            }
                        ]
                    },
                    {
                        "slug": "tecnologia-e-telefone",
                        "title": "Tecnologia e telefone",
                        "subtitle": "Dispositivos diários e mensagens",
                        "page_num": 22,
                        "words": [
                            {
                                "word": "o telemóvel",
                                "def": "s.m. · telefone portátil sem fios",
                                "ex": "O telemóvel está a tocar."
                            },
                            {
                                "word": "o computador",
                                "def": "s.m. · máquina eletrónica de cálculo e dados",
                                "ex": "Trabalho no computador todos os dias."
                            },
                            {
                                "word": "a mensagem",
                                "def": "s.f. · texto curto enviado a alguém",
                                "ex": "Enviei uma mensagem de texto."
                            },
                            {
                                "word": "ligar",
                                "def": "v.tr. · fazer uma chamada telefónica",
                                "ex": "Vou ligar ao meu amigo."
                            }
                        ],
                        "check_items": [
                            "Nomear aparelhos eletrónicos digitais",
                            "Enviar mensagens ou fazer chamadas"
                        ],
                        "quiz": [
                            {
                                "q": "Como se chama o telefone portátil em Portugal?",
                                "opts": [
                                    "o telemóvel",
                                    "o relógio",
                                    "o rádio"
                                ],
                                "correct": 0,
                                "explain": "Em Portugal usa-se «telemóvel» para o telemóvel celular."
                            }
                        ]
                    },
                    {
                        "slug": "palavras-de-ligacao-e-perguntas",
                        "title": "Palavras de ligação e perguntas",
                        "subtitle": "Conetores e pronomes interrogativos",
                        "page_num": 23,
                        "words": [
                            {
                                "word": "quem",
                                "def": "pron.interr. · pergunta pela identidade de alguém",
                                "ex": "Quem é aquela pessoa ali?"
                            },
                            {
                                "word": "onde",
                                "def": "adv.interr. · pergunta pelo lugar",
                                "ex": "Onde fica a estação de comboios?"
                            },
                            {
                                "word": "porque",
                                "def": "conj. · introduz uma razão ou motivo",
                                "ex": "Não vou porque estou cansado."
                            },
                            {
                                "word": "mas",
                                "def": "conj. · introduz um contraste",
                                "ex": "Queria sair, mas está a chover."
                            }
                        ],
                        "check_items": [
                            "Formular perguntas simples",
                            "Usar palavras de ligação como 'mas' e 'porque'"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é a palavra interrogativa para saber o lugar?",
                                "opts": [
                                    "onde",
                                    "quem",
                                    "quando"
                                ],
                                "correct": 0,
                                "explain": "«Onde» indica localização."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "modulo-6",
                "file": "modulo-6.html",
                "title": "Módulo 6 · Verbos e pronúncia",
                "subtitle": "Verbos essenciais A1 e regras fonéticas",
                "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "verbos-principais-a1",
                        "title": "Verbos principais A1",
                        "subtitle": "Verbos de ação fundamentais",
                        "page_num": 24,
                        "words": [
                            {
                                "word": "ser",
                                "def": "v.aux./cop. · expressa identidade ou qualidades permanentes (<a href=\"../../gramatica-portuguesa/topics/ser-vs-estar.html\">verbo irregular</a>)",
                                "ex": "Eu sou português e vivo em Lisboa."
                            },
                            {
                                "word": "estar",
                                "def": "v.aux./cop. · expressa estados temporários ou localização (<a href=\"../../gramatica-portuguesa/topics/ser-vs-estar.html\">verbo irregular</a>)",
                                "ex": "Estou muito contente hoje."
                            },
                            {
                                "word": "ter",
                                "def": "v.tr. · possuir ou sentir sensações",
                                "ex": "Tenho dois irmãos e muita fome."
                            },
                            {
                                "word": "fazer",
                                "def": "v.tr. · realizar uma ação ou tarefa",
                                "ex": "O que fazes no fim de semana?"
                            }
                        ],
                        "check_items": [
                            "Conjugar os verbos 'ser' e 'estar'",
                            "Empregar verbos de ação do quotidiano"
                        ],
                        "quiz": [
                            {
                                "q": "Qual é o verbo usado para localização temporária?",
                                "opts": [
                                    "estar",
                                    "ser",
                                    "fazer"
                                ],
                                "correct": 0,
                                "explain": "«Estar» indica estado passageiro e localização."
                            }
                        ]
                    },
                    {
                        "slug": "bases-de-pronuncia",
                        "title": "Bases de pronúncia",
                        "subtitle": "Sons, vogais nasais e acentuação",
                        "page_num": 25,
                        "words": [
                            {
                                "word": "o som",
                                "def": "s.m. · efeito acústico da voz",
                                "ex": "O som do 'ç' lê-se como 's'."
                            },
                            {
                                "word": "o acento",
                                "def": "s.m. · sinal gráfico de entoação",
                                "ex": "A palavra 'café' tem acento agudo."
                            },
                            {
                                "word": "a vogal",
                                "def": "s.f. · som sem obstrução (a, e, i, o, u)",
                                "ex": "O português tem vogais orais e nasais."
                            },
                            {
                                "word": "a consoante",
                                "def": "s.f. · som produzido com bloqueio articulatório",
                                "ex": "A letra 'b' é uma consoante."
                            }
                        ],
                        "check_items": [
                            "Reconhecer vogais nasais (ã, õ)",
                            "Pronunciar corretamente palavras acentuadas"
                        ],
                        "quiz": [
                            {
                                "q": "Como se chama o sinal ortográfico em 'café'?",
                                "opts": [
                                    "o acento",
                                    "o hífen",
                                    "o ponto"
                                ],
                                "correct": 0,
                                "explain": "O acento agudo indica a sílaba tónica."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "dir": "manuals/tt/vocabulary",
        "title": "Татар теле лексикасы (A0–A1)",
        "nav_title": "Татар теле лексикасы",
        "lang": "tt",
        "lead": "Татар теле сүзлеге буенча интерактив белешмәлек: тематик бүлекләр, карточкалар һәм флеш-тестлар.",
        "back_link": "COSYlanguages төп сайтына кайту",
        "sections": [
            {
                "id": "bulek-1",
                "file": "bulek-1.html",
                "title": "1 нче бүлек · Гаилә һәм кешеләр",
                "subtitle": "Гаилә әгъзалары, танышу, саннар һәм бәдән",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "gaila",
                        "title": "Гаилә",
                        "subtitle": "Гаилә әгъзалары исемнәре",
                        "page_num": 1,
                        "words": [
                            {
                                "word": "әни",
                                "def": "ана, гаиләдә иң якын кеше (<a href=\"../../grammar/topics/iyalek-kushymchalary.html\">иялек кушымчасы: әнием</a>)",
                                "ex": "Әнием Казанда яши."
                            },
                            {
                                "word": "әти",
                                "def": "ата, гаилә башлыгы",
                                "ex": "Әтием эштә эшләде."
                            },
                            {
                                "word": "абый",
                                "def": "өлкән абый яки ир-ат",
                                "ex": "Минем абыем бар."
                            },
                            {
                                "word": "апа",
                                "def": "өлкән апа яки хатын-кыз",
                                "ex": "Минем апам мәктәптә укый."
                            }
                        ],
                        "check_items": [
                            "Гаилә әгъзалары сүзләрен белү",
                            "Үз гаиләң турында сөйли алу"
                        ],
                        "quiz": [
                            {
                                "q": "Үзеңнән өлкән ир-ат туганыңны ничек атыйлар?",
                                "opts": [
                                    "абый",
                                    "әти",
                                    "апа"
                                ],
                                "correct": 0,
                                "explain": "Өлкән ир-ат туганны абый дип атыйлар."
                            }
                        ]
                    },
                    {
                        "slug": "isenleshuh-hem-tanyshu",
                        "title": "Исәнләшү һәм танышу",
                        "subtitle": "Исәнләшү, хушлашу һәм танышу сүзләре",
                        "page_num": 2,
                        "words": [
                            {
                                "word": "исәнмесез",
                                "def": "рәсми исәнләшү сүзе",
                                "ex": "Исәнмесез, укытучы абый!"
                            },
                            {
                                "word": "сәлам",
                                "def": "дусларча исәнләшү сүзе",
                                "ex": "Сәлам, Марат! Хәлләр ничек?"
                            },
                            {
                                "word": "сау булыгыз",
                                "def": "хушлашу сүзе",
                                "ex": "Иртәгәгә кадәр сау булыгыз!"
                            },
                            {
                                "word": "танышуыбызга шат",
                                "def": "танышканда әйтелә торган сүз",
                                "ex": "Минем исемем — Лилия. Танышуыбызга шат!"
                            }
                        ],
                        "check_items": [
                            "Исәнләшү һәм хушлашу сүзләрен белү",
                            "Үзеңне тәкъдим итә алу"
                        ],
                        "quiz": [
                            {
                                "q": "Рәсми шартларда нинди исәнләшү сүзе кулланыла?",
                                "opts": [
                                    "исәнмесез",
                                    "сәлам",
                                    "сау булыгыз"
                                ],
                                "correct": 0,
                                "explain": "Рәсми шартларда «исәнмесез» дип исәнләшәләр."
                            }
                        ]
                    },
                    {
                        "slug": "shekhsi-maglumatlar",
                        "title": "Шәхси мәгълүматлар",
                        "subtitle": "Исем, яшь, милләт һәм яшәү урыны",
                        "page_num": 3,
                        "words": [
                            {
                                "word": "исем",
                                "def": "кешенең аты (<a href=\"../../grammar/topics/iyalek-kushymchalary.html\">минем исемем</a>)",
                                "ex": "Минем исемем — Руслан."
                            },
                            {
                                "word": "яшь",
                                "def": "яшәгән еллар саны",
                                "ex": "Миңа егерме биш яшь."
                            },
                            {
                                "word": "милләт",
                                "def": "кешенең кайсы халыктан булуы",
                                "ex": "Аның милләте — татар."
                            },
                            {
                                "word": "яшәү",
                                "def": "берәр урында гомер итү (<a href=\"../../grammar/topics/hazierge-zaman.html\">хәзерге заман</a>)",
                                "ex": "Мин Казанда яшим."
                            }
                        ],
                        "check_items": [
                            "Үз исемеңне һәм яшеңне әйтә алу",
                            "Кайда яшәгәнеңне сөйләү"
                        ],
                        "quiz": [
                            {
                                "q": "Яшәү урынын белдерүче фигыль кайсы?",
                                "opts": [
                                    "яшәү",
                                    "исем",
                                    "уку"
                                ],
                                "correct": 0,
                                "explain": "«Яшәү» фигыле берәр урында торуны аңлата."
                            }
                        ]
                    },
                    {
                        "slug": "sannar",
                        "title": "Саннар",
                        "subtitle": "0 дән 100гә кадәр саннар",
                        "page_num": 4,
                        "words": [
                            {
                                "word": "бер",
                                "def": "төп сан, 1 (<a href=\"../../grammar/topics/sannar-ham-vaqyt.html\">саннар</a>)",
                                "ex": "Минем бер китабым бар."
                            },
                            {
                                "word": "ун",
                                "def": "төп сан, 10",
                                "ex": "Сыйныфта ун укучы бар."
                            },
                            {
                                "word": "йөз",
                                "def": "төп сан, 100",
                                "ex": "Бу китапта йөз бит бар."
                            },
                            {
                                "word": "сан",
                                "def": "санау берәмлеге",
                                "ex": "Телефон санын язып куегыз."
                            }
                        ],
                        "check_items": [
                            "1 дән 10 га кадәр санау",
                            "Саннарны җөмләдә куллану"
                        ],
                        "quiz": [
                            {
                                "q": "«10» саны татарча ничек була?",
                                "opts": [
                                    "ун",
                                    "бер",
                                    "йөз"
                                ],
                                "correct": 0,
                                "explain": "10 саны татар телендә «ун» була."
                            }
                        ]
                    },
                    {
                        "slug": "keshe-bedene",
                        "title": "Кеше бәдәне",
                        "subtitle": "Бәдән һәм бит өлешләре",
                        "page_num": 5,
                        "words": [
                            {
                                "word": "баш",
                                "def": "бәдәннең өске өлеше",
                                "ex": "Бүген минем башым авырта."
                            },
                            {
                                "word": "кул",
                                "def": "эшләү һәм тоту органы",
                                "ex": "Ашар алдыннан кулыңны ю."
                            },
                            {
                                "word": "аяк",
                                "def": "йөрү органы",
                                "ex": "Урамда йөреп аягым арыды."
                            },
                            {
                                "word": "күз",
                                "def": "күрү органы",
                                "ex": "Аның күзләре кара."
                            }
                        ],
                        "check_items": [
                            "Бәдән өлешләренең исемнәрен белү",
                            "Авырту турында әйтә алу"
                        ],
                        "quiz": [
                            {
                                "q": "Күрү органы ничек атала?",
                                "opts": [
                                    "күз",
                                    "кул",
                                    "аяк"
                                ],
                                "correct": 0,
                                "explain": "Күрү органы — күз."
                            }
                        ]
                    },
                    {
                        "slug": "his-kochler-hem-emotsiyalar",
                        "title": "Хис-көчләр һәм эмоцияләр",
                        "subtitle": "Кәеф һәм хисси халәтләр",
                        "page_num": 6,
                        "words": [
                            {
                                "word": "шат",
                                "def": "шатлык хис итүче",
                                "ex": "Сине күрүемә бик шатмын."
                            },
                            {
                                "word": "моңсу",
                                "def": "кайгылы яки моңлы халәт",
                                "ex": "Дусы киткәнгә ул моңсу."
                            },
                            {
                                "word": "арыган",
                                "def": "эштән соң ару хисе",
                                "ex": "Көн уртасыннан соң бик арыдым."
                            },
                            {
                                "word": "курку",
                                "def": "Куркыныч алдында барлыкка килә торган хис",
                                "ex": "Бала караңгыдан курыка."
                            }
                        ],
                        "check_items": [
                            "Кәефеңне аңлата алу",
                            "Икенче кешенең хисен сөйләү"
                        ],
                        "quiz": [
                            {
                                "q": "«Шат» сүзенең капма-каршы мәгънәсе кайсы?",
                                "opts": [
                                    "моңсу",
                                    "арыган",
                                    "тыныч"
                                ],
                                "correct": 0,
                                "explain": "Шатлыкның капма-каршысы — моңсулык."
                            }
                        ]
                    },
                    {
                        "slug": "tosler",
                        "title": "Төсләр",
                        "subtitle": "Төп төсләр һәм аларның исемнәре",
                        "page_num": 7,
                        "words": [
                            {
                                "word": "кызыл",
                                "def": "ут һәм кан төсе (<a href=\"../../grammar/topics/syjfatlar.html\">сыйфат</a>)",
                                "ex": "Кызыл алма бик тәмле."
                            },
                            {
                                "word": "күк",
                                "def": "аяз аяз күк төсе",
                                "ex": "Күк йөзе күптән аяз."
                            },
                            {
                                "word": "яшел",
                                "def": "үлән һәм яфрак төсе",
                                "ex": "Яз көне үлән яшел була."
                            },
                            {
                                "word": "ак",
                                "def": "кар һәм сөт төсе",
                                "ex": "Кыш көне кар ак төстә."
                            }
                        ],
                        "check_items": [
                            "Төп төсләрне аера белү",
                            "Нәрсәләрнең төсен әйтә алу"
                        ],
                        "quiz": [
                            {
                                "q": "Кап-ак карның төсе кайсы?",
                                "opts": [
                                    "ак",
                                    "кара",
                                    "кызыл"
                                ],
                                "correct": 0,
                                "explain": "Кар ак төстә була."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulek-2",
                "file": "bulek-2.html",
                "title": "2 нче бүлек · Йорт һәм көндәлек тормыш",
                "subtitle": "Өй, кием, вакыт һәм ашамлыклар",
                "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "yort-hem-bulemler",
                        "title": "Йорт һәм бүлмәләр",
                        "subtitle": "Өй, бүлмәләр һәм җиһазлар",
                        "page_num": 8,
                        "words": [
                            {
                                "word": "ашбүлмә",
                                "def": "ашау әзерли торган бүлмә",
                                "ex": "Ашбүлмәбез киң һәм якты."
                            },
                            {
                                "word": "өстәл",
                                "def": "ашау яки язу өстәле",
                                "ex": "Өстәл өстендә китап ята."
                            },
                            {
                                "word": "урындык",
                                "def": "утыра торган җиһаз",
                                "ex": "Өстәл янында дүрт урындык бар."
                            },
                            {
                                "word": "карават",
                                "def": "йоклый торган җиһаз",
                                "ex": "Иртән караватны җыям."
                            }
                        ],
                        "check_items": [
                            "Бүлмә исемнәрен белү",
                            "Өй җиһазларын атый алу"
                        ],
                        "quiz": [
                            {
                                "q": "Ашау ашый торган бүлмә ничек атала?",
                                "opts": [
                                    "ашбүлмә",
                                    "коридор",
                                    "балкон"
                                ],
                                "correct": 0,
                                "explain": "Ашамлык әзерли торган урын — ашбүлмә."
                            }
                        ]
                    },
                    {
                        "slug": "kiem-salym",
                        "title": "Кием-салым",
                        "subtitle": "Кием төрләре һәм аяк киеме",
                        "page_num": 9,
                        "words": [
                            {
                                "word": "күлмәк",
                                "def": "өске кием",
                                "ex": "Әнием яңа күлмәк киде."
                            },
                            {
                                "word": "чалбар",
                                "def": "аяк киеме өстендәге кием",
                                "ex": "Кара чалбар бик уңайлы."
                            },
                            {
                                "word": "аяк киеме",
                                "def": "аякка киелә торган кием",
                                "ex": "Яңа аяк киеме сатып алдым."
                            },
                            {
                                "word": "куртка",
                                "def": "җылы өске кием",
                                "ex": "Суык булгач курткаңны ки."
                            }
                        ],
                        "check_items": [
                            "Төп кием исемнәрен белү",
                            "Нинди кием кигәнеңне сөйләү"
                        ],
                        "quiz": [
                            {
                                "q": "Аякка нинди кием киелә?",
                                "opts": [
                                    "аяк киеме",
                                    "күлмәк",
                                    "бүрек"
                                ],
                                "correct": 0,
                                "explain": "Аякка аяк киеме киелә."
                            }
                        ]
                    },
                    {
                        "slug": "vakyt-hem-kondalek-tormysh",
                        "title": "Вакыт һәм көндәлек тормыш",
                        "subtitle": "Сәгать, көн вакытлары һәм көндәлек эшләр",
                        "page_num": 10,
                        "words": [
                            {
                                "word": "сәгать",
                                "def": "вакыт үлчәме (60 минут)",
                                "ex": "Хәзер сәгать ничә?"
                            },
                            {
                                "word": "уяну",
                                "def": "иртән йокыдан уяну",
                                "ex": "Иртән сәгать җидедә уянам."
                            },
                            {
                                "word": "иртән",
                                "def": "көннең башы, таң ату вакыты",
                                "ex": "Иртән кайнар чәй эчәм."
                            },
                            {
                                "word": "кич",
                                "def": "көннең ахыры, төн алды вакыты",
                                "ex": "Кич белән китап укыйм."
                            }
                        ],
                        "check_items": [
                            "Сәгатьне сорый һәм әйтә алу",
                            "Көндәлек эшләр турында сөйләү"
                        ],
                        "quiz": [
                            {
                                "q": "Көннең башы кайсы вакыт?",
                                "opts": [
                                    "иртән",
                                    "кич",
                                    "төнлә"
                                ],
                                "correct": 0,
                                "explain": "Көннең башы — иртән."
                            }
                        ]
                    },
                    {
                        "slug": "ashamlyklar-hem-eshchelekler",
                        "title": "Ашамлыклар һәм эчемлекләр",
                        "subtitle": "Төп ризыклар һәм эчемлекләр",
                        "page_num": 11,
                        "words": [
                            {
                                "word": "икмәк",
                                "def": "оннан пешерелгән төп ризык",
                                "ex": "Иртән яңа икмәк алдым."
                            },
                            {
                                "word": "су",
                                "def": "тормыш өчен мөһим сыеклык",
                                "ex": "Салкын су эчтем."
                            },
                            {
                                "word": "чәй",
                                "def": "кайнар эчемлек",
                                "ex": "Без сөтле чәй эчәбез."
                            },
                            {
                                "word": "сөт",
                                "def": "ак төстәге туклыклы сыеклык",
                                "ex": "Сыйыр сөт бирә."
                            }
                        ],
                        "check_items": [
                            "Төп ашамлыкларны атый алу",
                            "Чәй яки су сорый белү"
                        ],
                        "quiz": [
                            {
                                "q": "Оннан пешерелгән төп ризык ничек атала?",
                                "opts": [
                                    "икмәк",
                                    "су",
                                    "чәй"
                                ],
                                "correct": 0,
                                "explain": "Оннан пешерелгән төп ризык — икмәк."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulek-3",
                "file": "bulek-3.html",
                "title": "3 нче бүлек · Ашау, ял һәм сатып алулар",
                "subtitle": "Ашлар, ресторан, сатып алулар һәм хобби",
                "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "ashlar-hem-ashanu",
                        "title": "Ашлар һәм ашау",
                        "subtitle": "Көнлек ашлар һәм ризык әзерләү",
                        "page_num": 12,
                        "words": [
                            {
                                "word": "иртәнге аш",
                                "def": "көннең беренче ашы",
                                "ex": "Иртәнге ашка күкәй пешердем."
                            },
                            {
                                "word": "төшке аш",
                                "def": "көн уртасындагы төп аш",
                                "ex": "Сәгать бердә төшке аш ашыйбыз."
                            },
                            {
                                "word": "кечкенә аш",
                                "def": "кичке аш",
                                "ex": "Кичке ашка тәмле аш әзерләдек."
                            },
                            {
                                "word": "ашау әзерләү",
                                "def": "ризыкны пешерү эшчәнлеге",
                                "ex": "Аш пешерергә бик яратам."
                            }
                        ],
                        "check_items": [
                            "Көнлек ашларны аера белү",
                            "Ашарга әзерләү турында сөйләү"
                        ],
                        "quiz": [
                            {
                                "q": "Көннең беренче ашы ничек атала?",
                                "opts": [
                                    "иртәнге аш",
                                    "төшке аш",
                                    "кичке аш"
                                ],
                                "correct": 0,
                                "explain": "Иртән ашала торган аш — иртәнге аш."
                            }
                        ]
                    },
                    {
                        "slug": "restoran-hem-kafe",
                        "title": "Ресторан һәм кафе",
                        "subtitle": "Заказ бирү һәм хисап сорау",
                        "page_num": 13,
                        "words": [
                            {
                                "word": "меню",
                                "def": "ризыклар исемлеге",
                                "ex": "Менюны бирә алмассызмы?"
                            },
                            {
                                "word": "официант",
                                "def": "өстәлләрне хезмәтләндерүче кеше",
                                "ex": "Официант чәй китерде."
                            },
                            {
                                "word": "хисап",
                                "def": "түләнәсе сумма",
                                "ex": "Хисапны китерегез, зинһар."
                            },
                            {
                                "word": "заказ бирү",
                                "def": "ризык яки эчемлек сорау",
                                "ex": "Пилмән заказ бирергә телим."
                            }
                        ],
                        "check_items": [
                            "Меню һәм хисап сорый алу",
                            "Кафеда аш заказ итү"
                        ],
                        "quiz": [
                            {
                                "q": "Түләү алдыннан нәрсә сорыйлар?",
                                "opts": [
                                    "хисап",
                                    "меню",
                                    "өстәл"
                                ],
                                "correct": 0,
                                "explain": "Түләү алдыннан хисап сорыйлар."
                            }
                        ]
                    },
                    {
                        "slug": "satybalular-hem-akcha",
                        "title": "Сатып алулар һәм акча",
                        "subtitle": "Магазин, бәяләр һәм акча сүзлеге",
                        "page_num": 14,
                        "words": [
                            {
                                "word": "бәя",
                                "def": "товарның бәясе, бәя суммасы",
                                "ex": "Бу китапның бәясе күпме?"
                            },
                            {
                                "word": "сум",
                                "def": "акча берәмлеге",
                                "ex": "Бу аш егерме сум тора."
                            },
                            {
                                "word": "сатып алу",
                                "def": "акчага товар алу",
                                "ex": "Магазиннан җиләк-җимеш алам."
                            },
                            {
                                "word": "касса",
                                "def": "акча түли торган урын",
                                "ex": "Касса янында чират бар."
                            }
                        ],
                        "check_items": [
                            "Нәрәнең бәясен сорый белү",
                            "Акча белән хисаплашу сүзләрен куллану"
                        ],
                        "quiz": [
                            {
                                "q": "Нәрсәнең бәясен белер өчен нәрсә сорыйлар?",
                                "opts": [
                                    "бәя",
                                    "магазин",
                                    "кесә"
                                ],
                                "correct": 0,
                                "explain": "Товарның бәясен сорыйлар."
                            }
                        ]
                    },
                    {
                        "slug": "bush-vakyt-hem-kobbiler",
                        "title": "Буш вакыт һәм хоббилар",
                        "subtitle": "Спорт, шөгыльләр һәм ял итү",
                        "page_num": 15,
                        "words": [
                            {
                                "word": "спорт",
                                "def": "тән күнегүләре һәм уеннар",
                                "ex": "Мин спорт белән шөгыльләнәм."
                            },
                            {
                                "word": "уку",
                                "def": "китап яки язу уку эшчәнлеге",
                                "ex": "Тарихи китаплар укырга яратам."
                            },
                            {
                                "word": "музыка",
                                "def": "милодия һәм җыр сәнгате",
                                "ex": "Радиодан музыка диңлим."
                            },
                            {
                                "word": "кино",
                                "def": "фильмнар карый торган урын",
                                "ex": "Ял көнне кинога барабыз."
                            }
                        ],
                        "check_items": [
                            "Үз хоббиларың турында сөйли алу",
                            "Буш вакытта нәрсә эшләгәнеңне аңлату"
                        ],
                        "quiz": [
                            {
                                "q": "Фильмнар карарга кайда баралар?",
                                "opts": [
                                    "кино",
                                    "спортзал",
                                    "мәктәп"
                                ],
                                "correct": 0,
                                "explain": "Фильм карарга кинога баралар."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulek-4",
                "file": "bulek-4.html",
                "title": "4 нче бүлек · Шәһәр, транспорт һәм эш",
                "subtitle": "Транспорт, юнәлешләр, һөнәрләр һәм мәктәп",
                "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "transport-hem-sayahat",
                        "title": "Транспорт һәм сәяхәт",
                        "subtitle": "Транспорт чаралары һәм сәяхәт сүзләре",
                        "page_num": 16,
                        "words": [
                            {
                                "word": "поезд",
                                "def": "тимер юл транспорты",
                                "ex": "Казанга поезд белән барам."
                            },
                            {
                                "word": "автобус",
                                "def": "шәһәр җәмәгать транспорты",
                                "ex": "Автобус тукталышка килеп җитте."
                            },
                            {
                                "word": "билет",
                                "def": "юл йөрү документы",
                                "ex": "Бару һәм кайту билетын алдым."
                            },
                            {
                                "word": "вокзал",
                                "def": "поездлар тукталга урын",
                                "ex": "Вокзал шәһәр үзәгендә урнашкан."
                            }
                        ],
                        "check_items": [
                            "Транспорт чараларын атый алу",
                            "Билет сатып алу сүзләрен белү"
                        ],
                        "quiz": [
                            {
                                "q": "Поездлар кайдан кузгала?",
                                "opts": [
                                    "вокзал",
                                    "аэропорт",
                                    "тукталыш"
                                ],
                                "correct": 0,
                                "explain": "Поездлар вокзалдан кузгала."
                            }
                        ]
                    },
                    {
                        "slug": "yunesheshler-hem-urinnar",
                        "title": "Юнәлешләр һәм урыннар",
                        "subtitle": "Шәһәрдә юл табу һәм ориентирлар",
                        "page_num": 17,
                        "words": [
                            {
                                "word": "мәйдан",
                                "def": "шәһәрнең ачык урыны",
                                "ex": "Төп мәйданда очрашабыз."
                            },
                            {
                                "word": "урам",
                                "def": "шәһәр юлы",
                                "ex": "Бу урамда даруханә бар."
                            },
                            {
                                "word": "уңда",
                                "def": "уң якта урнашкан",
                                "ex": "Светофордан соң уңга борылыгыз."
                            },
                            {
                                "word": "сулда",
                                "def": "сул якта урнашкан",
                                "ex": "Музей сулда урнашкан."
                            }
                        ],
                        "check_items": [
                            "Урамда юл сорый белү",
                            "Уңда һәм сулда юнәлешләрен аңлау"
                        ],
                        "quiz": [
                            {
                                "q": "«Уңда» сүзенең капма-каршы юнәлеше кайсы?",
                                "opts": [
                                    "сулда",
                                    "туры",
                                    "өстә"
                                ],
                                "correct": 0,
                                "explain": "Уң якның капма-каршысы — сул як."
                            }
                        ]
                    },
                    {
                        "slug": "honerler-hem-esh",
                        "title": "Һөнәрләр һәм эш",
                        "subtitle": "Төрле һөнәрләр һәм эш урыннары",
                        "page_num": 18,
                        "words": [
                            {
                                "word": "табиб",
                                "def": "кешеләрне дәвалый торган белгеч",
                                "ex": "Табиб авыруны карады."
                            },
                            {
                                "word": "укытучы",
                                "def": "мәктәптә белем бирүче кеше",
                                "ex": "Укытучы яңа дәрес аңлата."
                            },
                            {
                                "word": "эшче",
                                "def": "заводта яки эштә эшләүче",
                                "ex": "Абыем заводта эшче булып эшли."
                            },
                            {
                                "word": "эш",
                                "def": "эшчәнлек, шөгыль (<a href=\"../../grammar/topics/bar-yuk.html\">эш бар</a>)",
                                "ex": "Бүген минем эшем күп."
                            }
                        ],
                        "check_items": [
                            "Үз һөнәреңне әйтә алу",
                            "Төп һөнәр исемнәрен аера белү"
                        ],
                        "quiz": [
                            {
                                "q": "Мәктәптә белем бирүче кеше кем?",
                                "opts": [
                                    "укытучы",
                                    "табиб",
                                    "пешекче"
                                ],
                                "correct": 0,
                                "explain": "Мәктәптә укытучы укыта."
                            }
                        ]
                    },
                    {
                        "slug": "maktap-hem-synyf",
                        "title": "Мәктәп һәм сыйныф",
                        "subtitle": "Уку кирәк-яраклары һәм мәктәп мохите",
                        "page_num": 19,
                        "words": [
                            {
                                "word": "китап",
                                "def": "басылган язу җыентыгы",
                                "ex": "Татар теле китабын укыйм."
                            },
                            {
                                "word": "каләм",
                                "def": "язу яза торган курал",
                                "ex": "Кызыл каләм белән язам."
                            },
                            {
                                "word": "дәфтәр",
                                "def": "язу яза торган дәфтәр",
                                "ex": "Дәфтәргә эшләрне яздым."
                            },
                            {
                                "word": "сыйныф",
                                "def": "уку бүлмәсе яки укучылар төркеме",
                                "ex": "Сыйныфта унбер укучы бар."
                            }
                        ],
                        "check_items": [
                            "Уку әйберләрен атый алу",
                            "Каләм яки китап сорый белү"
                        ],
                        "quiz": [
                            {
                                "q": "Язу язар өчен нәрсә кулланыла?",
                                "opts": [
                                    "каләм",
                                    "урындык",
                                    "тәрәзә"
                                ],
                                "correct": 0,
                                "explain": "Язу язар өчен каләм кулланыла."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulek-5",
                "file": "bulek-5.html",
                "title": "5 нче бүлек · Сәламәтлек, технология һәм табигать",
                "subtitle": "Аптека, һава торышы, гаджетлар һәм бәйләүче сүзләр",
                "stripe": "#a3195b",
                "topics": [
                    {
                        "slug": "salametlek-hem-apteka",
                        "title": "Сәламәтлек һәм аптека",
                        "subtitle": "Сәламәтлек халәте, авыртулар һәм дарулар",
                        "page_num": 20,
                        "words": [
                            {
                                "word": "авырту",
                                "def": "тәндәге физик авырту хисе",
                                "ex": "Тамагым көчле авырта."
                            },
                            {
                                "word": "аптека",
                                "def": "дарулар сатыла торган урын",
                                "ex": "Аптекадан дарулар алдым."
                            },
                            {
                                "word": "бизгәк",
                                "def": "тән температурасы күтәрелү",
                                "ex": "Балада бизгәк бар."
                            },
                            {
                                "word": "дару",
                                "def": "дәвалау өчен дару чарасы",
                                "ex": "Даруны ашаганнан соң эчегез."
                            }
                        ],
                        "check_items": [
                            "Авыртуны аңлата алу",
                            "Аптекада дару сорый белү"
                        ],
                        "quiz": [
                            {
                                "q": "Дарулар кайсы урында сатыла?",
                                "opts": [
                                    "аптека",
                                    "китапханә",
                                    "кинотеатр"
                                ],
                                "correct": 0,
                                "explain": "Дарулар аптекада сатыла."
                            }
                        ]
                    },
                    {
                        "slug": "hava-toroshy-hem-el-fasyllary",
                        "title": "Һава торышы һәм ел фасыллары",
                        "subtitle": "Табигать күренешләре һәм дүрт ел фасылы",
                        "page_num": 21,
                        "words": [
                            {
                                "word": "кояш",
                                "def": "көнне яктыртучы йолдыз",
                                "ex": "Бүген кояш якты яктырта."
                            },
                            {
                                "word": "яңгыр",
                                "def": "болытлардан ява торган су",
                                "ex": "Урамда яңгыр ява."
                            },
                            {
                                "word": "җәй",
                                "def": "иң кайнар ел фасылы",
                                "ex": "Җәй көне ялга барабыз."
                            },
                            {
                                "word": "кыш",
                                "def": "иң салкын ел фасылы",
                                "ex": "Кыш көне кар ява."
                            }
                        ],
                        "check_items": [
                            "Һава торышы турында сөйли алу",
                            "Дүрт ел фасылын белү"
                        ],
                        "quiz": [
                            {
                                "q": "Иң кайнар ел фасылы кайсы?",
                                "opts": [
                                    "җәй",
                                    "кыш",
                                    "көз"
                                ],
                                "correct": 0,
                                "explain": "Иң эссе ел фасылы — җәй."
                            }
                        ]
                    },
                    {
                        "slug": "tekhnologiya-hem-telefon",
                        "title": "Технология һәм телефон",
                        "subtitle": "Цифрлы апаратлар, хәбәрләр һәм интернет",
                        "page_num": 22,
                        "words": [
                            {
                                "word": "телефон",
                                "def": "элемтә аппараты",
                                "ex": "Телефонга шалтырату килде."
                            },
                            {
                                "word": "компьютер",
                                "def": "электрон исәпләү аппараты",
                                "ex": "Компьютерда эш эшләдем."
                            },
                            {
                                "word": "хәбәр",
                                "def": "җибәрелгән кыска язылган текст",
                                "ex": "Сиңа СМС хәбәр җибәрдем."
                            },
                            {
                                "word": "шалтырату",
                                "def": "телефон аша элемтәгә керү",
                                "ex": "Соңрак шалтырата аламмы?"
                            }
                        ],
                        "check_items": [
                            "Техника турында сөйләшү",
                            "Хәбәр җибәрү һәм шалтырату сүзләрен куллану"
                        ],
                        "quiz": [
                            {
                                "q": "Интернетта һәм телефонда җибәрелә торган кыска текст ничек атала?",
                                "opts": [
                                    "хәбәр",
                                    "китап",
                                    "рәсем"
                                ],
                                "correct": 0,
                                "explain": "Телефон аша җибәрелә торган текст — хәбәр."
                            }
                        ]
                    },
                    {
                        "slug": "bayleuche-sozler-hem-sorular",
                        "title": "Бәйләүче сүзләр һәм сораулар",
                        "subtitle": "Сорау сүзләре һәм теркәгечләр",
                        "page_num": 23,
                        "words": [
                            {
                                "word": "кем",
                                "def": "кешене белү өчен сорау сүзе (<a href=\"../../grammar/topics/sorau-formashy.html\">сорау формасы</a>)",
                                "ex": "Бу кеше кем?"
                            },
                            {
                                "word": "кайда",
                                "def": "урынны белү өчен сорау сүзе",
                                "ex": "Вокзал кайда урнашкан?"
                            },
                            {
                                "word": "чөнки",
                                "def": "сәбәпне аңлата торган теркәгеч",
                                "ex": "Бара алмыйм, чөнки арыдым."
                            },
                            {
                                "word": "ләкин",
                                "def": "капма-каршылык теркәгече",
                                "ex": "Барырга телим, ләкин вакытым юк."
                            }
                        ],
                        "check_items": [
                            "Сорау сүзләре белән сорау бирә алу",
                            "Җөмләләрне бәйләүче сүзләрне куллану"
                        ],
                        "quiz": [
                            {
                                "q": "Урын турында сорау өчен нинди сүз кулланыла?",
                                "opts": [
                                    "кайда",
                                    "кем",
                                    "качан"
                                ],
                                "correct": 0,
                                "explain": "Урынны сораганда «кайда» сүзе кулланыла."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "bulek-6",
                "file": "bulek-6.html",
                "title": "6 нчы бүлек · Төп фигыльләр һәм әйтү",
                "subtitle": "Төп фигыльләр һәм әйтү нигезләре",
                "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "tep-figyller-a1",
                        "title": "Төп фигыльләр A1",
                        "subtitle": "Иң кирәкле хәрәкәт фигыльләре",
                        "page_num": 24,
                        "words": [
                            {
                                "word": "булу",
                                "def": "барлык яки асылны белдерүче фигыль (<a href=\"../../grammar/topics/bar-yuk.html\">бар/юк</a>)",
                                "ex": "Мин укучы булам."
                            },
                            {
                                "word": "барлык",
                                "def": "бар булу халәте",
                                "ex": "Минем ике абыем бар."
                            },
                            {
                                "word": "эшләү",
                                "def": "берәр эш башкару",
                                "ex": "Нәрсә эшлисең бүген?"
                            },
                            {
                                "word": "бару",
                                "def": "урынга юл тоту",
                                "ex": "Бергә кинога барабыз."
                            }
                        ],
                        "check_items": [
                            "Төп хәрәкәт фигыльләрен аңлау",
                            "Көндәлек хәрәкәтләрне әйтә алу"
                        ],
                        "quiz": [
                            {
                                "q": "Урыннан урынга күчүне белдерүче фигыль кайсы?",
                                "opts": [
                                    "бару",
                                    "булу",
                                    "эшләү"
                                ],
                                "correct": 0,
                                "explain": "«Бару» — хәрәкәтне белдерә."
                            }
                        ]
                    },
                    {
                        "slug": "aytu-nigeshlere",
                        "title": "Әйтү нигезләре",
                        "subtitle": "Татар теле авазлары һәм сингармонизм",
                        "page_num": 25,
                        "words": [
                            {
                                "word": "аваз",
                                "def": "сүздәге тавыш авазы",
                                "ex": "Татар телендә үзенчәлекле авазлар бар."
                            },
                            {
                                "word": "басым",
                                "def": "сүздәге өстенлекле иҗек",
                                "ex": "Татар телендә басым ахыргы иҗеккә төшә."
                            },
                            {
                                "word": "сузык",
                                "def": "ачык авазлар (а, ә, о, ө, и, у, ү, ы, э)",
                                "ex": "Татар телендә тугыз сузык аваз бар."
                            },
                            {
                                "word": "сингармонизм",
                                "def": "сузыкларның өндәшлеге законы (<a href=\"../../grammar/topics/singarmonizm.html\">сингармонизм дәресе</a>)",
                                "ex": "Калын һәм чечкә сузыклар кануны."
                            }
                        ],
                        "check_items": [
                            "Иренләшкән һәм иренләшмәгән сузыкларны белү",
                            "Сүз басымын дөрес кую"
                        ],
                        "quiz": [
                            {
                                "q": "Сузыкларның аңлаешлылыгы законы татарча ничек атала?",
                                "opts": [
                                    "сингармонизм",
                                    "грамматика",
                                    "алфавит"
                                ],
                                "correct": 0,
                                "explain": "Сузыкларның өндәшлеге — сингармонизм законы."
                            }
                        ]
                    }
                ]
            }
        ]
    },

    {
            "dir": "bashqort-tele-leksikahy",
            "title": "Башҡорт теле лексикаһы (A0–A1)",
            "nav_title": "Башҡорт теле лексикаһы",
            "lang": "ba",
            "lead": "Башҡорт теле һүҙлеге буйынса интерактив белешмәлек: тематик бүлектәр, карточкалар һәм күнегеүҙәр.",
            "back_link": "COSYlanguages төп сайтына ҡайтыу",
            "sections": [
                    {
                            "id": "bulek-1",
                            "file": "bulek-1.html",
                            "title": "1-се бүлек · Ғәилә һәм танышыу",
                            "subtitle": "Ғәилә ағзалары, һаулыҡ алышыу, һандар һәм төҫтәр",
                            "stripe": "#1c9483",
                            "topics": [
                                    {
                                            "slug": "ghaila",
                                            "title": "Ғәилә",
                                            "subtitle": "Ғәилә ағзаларының исемдәре",
                                            "page_num": 1,
                                            "words": [
                                                    {
                                                            "word": "әсәй",
                                                            "def": "ана, иң яҡын кеше (<a href=\"../../bashqort-tele-grammatikahy/topics/eyalek-affikstary.html\">эйәлек аффиксы: әсәйем</a>)",
                                                            "ex": "Әсәйем Өфөлә йәшәй."
                                                    },
                                                    {
                                                            "word": "әтәй",
                                                            "def": "атай, ғәилә башлығы",
                                                            "ex": "Әтәйем эштә эшләй."
                                                    },
                                                    {
                                                            "word": "ағай",
                                                            "def": "өлкән ағай яки ир-ат",
                                                            "ex": "Минең ағайым бар."
                                                    },
                                                    {
                                                            "word": "апай",
                                                            "def": "өлкән апай яки ҡатын-ҡыҙ",
                                                            "ex": "Апайым мәктәптә уҡый."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Ғәилә һүҙҙәрен аңлау",
                                                    "Һүҙҙәрҙе дөрөҫ ҡулланыу"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Өлкән ир-ат туғанды нисек атайҙар?",
                                                            "opts": [
                                                                    "ағай",
                                                                    "әтәй",
                                                                    "апай"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Өлкән ир-ат туғанды ағай тиҙәр."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "haulyq-alyshyu-ham-tanyshyu",
                                            "title": "Һаулыҡ алышыу һәм танышыу",
                                            "subtitle": "Сәләмләү, хушлашыу һәм танышыу һүҙҙәре",
                                            "page_num": 2,
                                            "words": [
                                                    {
                                                            "word": "сәләм",
                                                            "def": "дуҫтарса сәләмләү һүҙе",
                                                            "ex": "Сәләм, Айрат! Хәлдәр нисек?"
                                                    },
                                                    {
                                                            "word": "һаумыһығыҙ",
                                                            "def": "әҙәпле сәләмләү һүҙе",
                                                            "ex": "Һаумыһығыҙ, уҡытыусы ағай!"
                                                    },
                                                    {
                                                            "word": "һау булығыҙ",
                                                            "def": "хушлашыу һүҙе",
                                                            "ex": "Һау булығыҙ, иртәгәгә тиклем!"
                                                    },
                                                    {
                                                            "word": "исем",
                                                            "def": "кешенең аты (<a href=\"../../bashqort-tele-grammatikahy/topics/eyalek-affikstary.html\">минең исемем</a>)",
                                                            "ex": "Минең исемем — Урал."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Әҙәпле сәләмләшә белеү",
                                                    "Үҙ исемеңде әйтә алыу"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Оло кеше менән сәләмләшкәндә ниндәй һүҙ ҡулланыла?",
                                                            "opts": [
                                                                    "һаумыһығыҙ",
                                                                    "сәләм",
                                                                    "һау бул"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Ололар менән әҙәпле итеп «һаумыһығыҙ» тип сәләмләшәләр."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "handar",
                                            "title": "Һандар",
                                            "subtitle": "0-дән 100-гә тиклемге һандар",
                                            "page_num": 3,
                                            "words": [
                                                    {
                                                            "word": "бер",
                                                            "def": "төп һан, 1 (<a href=\"../../bashqort-tele-grammatikahy/topics/handar-ham-vaqyt.html\">һандар ҡағиҙәһе</a>)",
                                                            "ex": "Минең бер китабым бар."
                                                    },
                                                    {
                                                            "word": "ун",
                                                            "def": "төп һан, 10",
                                                            "ex": "Класта ун уҡыусы бар."
                                                    },
                                                    {
                                                            "word": "йөҙ",
                                                            "def": "төп һан, 100",
                                                            "ex": "Был китапта йөҙ бит бар."
                                                    },
                                                    {
                                                            "word": "һан",
                                                            "def": "иҫәп бөртөгө, һан мәғәнәһе",
                                                            "ex": "Был һанды яҙып ал."
                                                    }
                                            ],
                                            "check_items": [
                                                    "1-ҙән 10-ға тиклем һанай алыу",
                                                    "Һандарҙы һөйләмдә ҡулланыу"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "«10» һаны башҡортса нисек була?",
                                                            "opts": [
                                                                    "ун",
                                                                    "бер",
                                                                    "йөҙ"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "10 һаны башҡортса «ун» тип атала."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "tostar",
                                            "title": "Төҫтәр",
                                            "subtitle": "Төп төҫтәр һәм уларҙың аңлатмалары",
                                            "page_num": 4,
                                            "words": [
                                                    {
                                                            "word": "ҡыҙыл",
                                                            "def": "ут һәм ҡан төҫө (<a href=\"../../bashqort-tele-grammatikahy/topics/sifattar.html\">сифат</a>)",
                                                            "ex": " Ҡыҙыл алма бик тәмле."
                                                    },
                                                    {
                                                            "word": "күк",
                                                            "def": "аяҙ күк төҫө, зәңгәр",
                                                            "ex": "Күк йөҙө аяҙ һәм яҡты."
                                                    },
                                                    {
                                                            "word": "йәшел",
                                                            "def": "үлән һәм япраҡ төҫө",
                                                            "ex": "Яҙын үлән йәшел була."
                                                    },
                                                    {
                                                            "word": "аҡ",
                                                            "def": "ҡар һәм һөт төҫө",
                                                            "ex": " Ҡар аҡ төҫтә."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Төп төҫтәрҙе айыра алыу",
                                                    "Заттарҙың төҫөн һүрәтләү"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ҡар ниндәй төҫтә була?",
                                                            "opts": [
                                                                    "аҡ",
                                                                    "ҡара",
                                                                    "ҡыҙыл"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Ҡар аҡ төҫтә була."
                                                    }
                                            ]
                                    }
                            ]
                    },
                    {
                            "id": "bulek-2",
                            "file": "bulek-2.html",
                            "title": "2-се бүлек · Тормыш, аш-һыу һәм кейем",
                            "subtitle": "Ашамлыҡтар, кейем-һалым һәм йорт эсе",
                            "stripe": "#3562e0",
                            "topics": [
                                    {
                                            "slug": "ashamlyqtar-ham-esemlektar",
                                            "title": "Ашамлыҡтар һәм эсемлектәр",
                                            "subtitle": "Төп аҙыҡ-түлек һәм эсемлектәр",
                                            "page_num": 5,
                                            "words": [
                                                    {
                                                            "word": "икмәк",
                                                            "def": "төп ашамлыҡ, ондан бешерелгән ризыҡ",
                                                            "ex": "Иртән ашҡа икмәк алдым."
                                                    },
                                                    {
                                                            "word": "һыу",
                                                            "def": "йәшәү өсөн кәрәкле шыйыҡлыҡ",
                                                            "ex": "Һалҡын һыу эстем."
                                                    },
                                                    {
                                                            "word": "сәй",
                                                            "def": "ҡайнар эсемлек",
                                                            "ex": "Беҙ һөтлө сәй эсәбеҙ."
                                                    },
                                                    {
                                                            "word": "һөт",
                                                            "def": "аҡ төҫтәге туҡлыҡлы эсемлек",
                                                            "ex": "Һыйыр һөт бирә."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Ашамлыҡ исемдәрен белеү",
                                                    "Сәй яки һыу һорай алыу"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ондан бешерелгән төп ризыҡ нисек атала?",
                                                            "opts": [
                                                                    "икмәк",
                                                                    "һыу",
                                                                    "сәй"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Ондан бешерелгән төп ризыҡ — икмәк."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "keyem-halym",
                                            "title": "Кейем-һалым",
                                            "subtitle": "Көнүләк кейем һәм аяҡ кейеме",
                                            "page_num": 6,
                                            "words": [
                                                    {
                                                            "word": "күлдеке",
                                                            "def": "өҫ кейеме",
                                                            "ex": "Әсәйем яңы күлдеке кейҙе."
                                                    },
                                                    {
                                                            "word": "ыштан",
                                                            "def": "аяҡ кейеме, чалбар",
                                                            "ex": "Ҡара ыштан кейемгә килешә."
                                                    },
                                                    {
                                                            "word": "байпаҡ",
                                                            "def": "аяҡҡа кейелә торған ойоҡ",
                                                            "ex": "Ҡышын йылы байпаҡ кейәләр."
                                                    },
                                                    {
                                                            "word": "быйма",
                                                            "def": "йылы аяҡ кейеме",
                                                            "ex": " Ҡышын балалар быйма кейә."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Төп кейем исемдәрен аңлау",
                                                    "Кейем тураһында әйтә алыу"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ҡышын аяҡҡа йылылыҡ өсөн ниндәй кейем кейәләр?",
                                                            "opts": [
                                                                    "быйма",
                                                                    "күлдеке",
                                                                    "бүрек"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Быйма — ҡышҡы йылы аяҡ кейеме."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "yort-ham-bulmalar",
                                            "title": "Йорт һәм бүлмәләр",
                                            "subtitle": "Торлаҡ, бүлмәләр һәм йыһаздар",
                                            "page_num": 7,
                                            "words": [
                                                    {
                                                            "word": "өй",
                                                            "def": "йәшәй торған урын, торлаҡ",
                                                            "ex": "Беҙҙең өй ҙур һәм яҡты."
                                                    },
                                                    {
                                                            "word": "бүлмә",
                                                            "def": "өй эсендәге айырым урын",
                                                            "ex": "Был бүлмәлә урындыҡ бар."
                                                    },
                                                    {
                                                            "word": "өҫтәл",
                                                            "def": "ашау һәм яҙыу өсөн йыһаз",
                                                            "ex": " Өҫтәл өҫтөндә китап ята."
                                                    },
                                                    {
                                                            "word": "урындыҡ",
                                                            "def": "утырыу өсөн йыһаз",
                                                            "ex": "Урындыҡҡа ултыр."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Йорт йыһаздарын атау",
                                                    "Бүлмәләр тураһында һөйләү"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Утырыу өсөн ниндәй йыһаз ҡулланыла?",
                                                            "opts": [
                                                                    "урындыҡ",
                                                                    "өҫтәл",
                                                                    "тәҙрә"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Утырыу өсөн урындыҡ ҡулланыла."
                                                    }
                                            ]
                                    }
                            ]
                    },
                    {
                            "id": "bulek-3",
                            "file": "bulek-3.html",
                            "title": "3-сө бүлек · Сәләмәтлек, тәбиғәт һәм хеҙмәт",
                            "subtitle": "Кәүҙә ағзалары, һауа торошо, һөнәрҙәр һәм ҡылымдар",
                            "stripe": "#c9740a",
                            "topics": [
                                    {
                                            "slug": "keshe-kauhahe",
                                            "title": "Кеше кәүҙәһе",
                                            "subtitle": "Кәүҙә һәм бит ағзалары",
                                            "page_num": 8,
                                            "words": [
                                                    {
                                                            "word": "баш",
                                                            "def": "кәүҙәнең өҫкө өлөшө",
                                                            "ex": "Бөгөн башым ауырта."
                                                    },
                                                    {
                                                            "word": "ҡул",
                                                            "def": "тотоу һәм эшләү ағзаһы",
                                                            "ex": "Ашар алдынан ҡулыңды йу."
                                                    },
                                                    {
                                                            "word": "аяҡ",
                                                            "def": "йөрөү ағзаһы",
                                                            "ex": "Аяҡтарым арыны."
                                                    },
                                                    {
                                                            "word": "күҙ",
                                                            "def": "күрү ағзаһы",
                                                            "ex": "Минең күҙҙәрем ҡара."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Төп кәүҙә ағзаларын белеү",
                                                    "Ауырыу һүҙҙәрен аңлау"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Күрү өсөн ниндәй ағза яуап бирә?",
                                                            "opts": [
                                                                    "күҙ",
                                                                    "ҡул",
                                                                    "аяҡ"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Күҙ — күреү ағзаһы."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "haua-torosho-ham-vaqyt",
                                            "title": "Һауа торошо һәм ваҡыт",
                                            "subtitle": "Тәбиғәт күренештәре һәм ваҡыт атамалары",
                                            "page_num": 9,
                                            "words": [
                                                    {
                                                            "word": "ҡояш",
                                                            "def": "күндәрҙе яҡтыртыусы йондоҙ",
                                                            "ex": "Бөгөн ҡояш яҡты ялтырай."
                                                    },
                                                    {
                                                            "word": "ямғыр",
                                                            "def": "болоттан яуған һыу ҙамсылары",
                                                            "ex": "Далала ямғыр яуа."
                                                    },
                                                    {
                                                            "word": "ҡар",
                                                            "def": "ҡышын яуған аҡ яуын",
                                                            "ex": "Далала ҡар ята."
                                                    },
                                                    {
                                                            "word": "көн",
                                                            "def": "ваҡыт дәүере, йылы яҡты ваҡыт",
                                                            "ex": "Бөгөн йылы көн."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Һауа торошон һүрәтләү",
                                                    "Яуын-төшөндө айыра алыу"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ҡышын болондан ни яуа?",
                                                            "opts": [
                                                                    "ҡар",
                                                                    "ямғыр",
                                                                    "ҡояш"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Ҡышын аҡ ҡар яуа."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "khezmat-ham-honardar",
                                            "title": "Хеҙмәт һәм һөнәрҙәр",
                                            "subtitle": "Төп эш урындары һәм һөнәр атамалары",
                                            "page_num": 10,
                                            "words": [
                                                    {
                                                            "word": "уҡытыусы",
                                                            "def": "мәктәптә белем биреүсе кеше",
                                                            "ex": "Уҡытыусы яңы дәрес аңлата."
                                                    },
                                                    {
                                                            "word": "табип",
                                                            "def": "кешеләрҙе дауалаусы белгес",
                                                            "ex": "Табип ауырыуҙы ҡараны."
                                                    },
                                                    {
                                                            "word": "эшсе",
                                                            "def": "заводта йәки төҙөлөштә эшләүсе кеше",
                                                            "ex": "Эшсе заводында эшләй."
                                                    },
                                                    {
                                                            "word": "эш",
                                                            "def": "хеҙмәт, шөғөл (<a href=\"../../bashqort-tele-grammatikahy/topics/bar-yukh.html\">эш бар</a>)",
                                                            "ex": "Бөгөн минең эшем күп."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Төп һөнәрҙәрҙе атау",
                                                    "Үҙ эшең тураһында әйтеү"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Мәктәптә балаларға кем белем бирә?",
                                                            "opts": [
                                                                    "уҡытыусы",
                                                                    "табип",
                                                                    "эшсе"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Мәктәптә балаларҙы уҡытыусы уҡыта."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "top-qolymdar",
                                            "title": "Төп ҡылымдар",
                                            "subtitle": "Көнүләк эштәрҙе аңлатҡан ҡылымдар",
                                            "page_num": 11,
                                            "words": [
                                                    {
                                                            "word": "уҡыу",
                                                            "def": "белем алыу, китап уҡыу (<a href=\"../../bashqort-tele-grammatikahy/topics/hadherge-zaman.html\">хәҙерге заман</a>)",
                                                            "ex": "Мин башҡорт телен уҡыйым."
                                                    },
                                                    {
                                                            "word": "яҙыу",
                                                            "def": "хәрефтәр менән текст төҙөү",
                                                            "ex": "Дәтәрҙә яҙам."
                                                    },
                                                    {
                                                            "word": "эшләү",
                                                            "def": "хеҙмәт итеү, эш ҡалыу",
                                                            "ex": "Атайым ошо ойошмала эшләй."
                                                    },
                                                    {
                                                            "word": "йөрөү",
                                                            "def": "аяҡ менән хәрәкәт итеү",
                                                            "ex": "Паркта йөрөргә яратам."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Төп ҡылымдарҙы аңлау",
                                                    "Ҡылымдарҙы заманда ҡулланыу"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Китап менән ниндәй эш итәләр?",
                                                            "opts": [
                                                                    "уҡыйҙар",
                                                                    "йөрөйҙәр",
                                                                    "эшләйҙәр"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Китапты уҡыйҙар."
                                                    }
                                            ]
                                    }
                            ]
                    }
            ]
    },
    {
            "dir": "chavash-leksiki",
            "title": "Чăваш лексики (A0–A1)",
            "nav_title": "Чăваш лексики",
            "lang": "cv",
            "lead": "Чăваш сăмахлăхĕн интерактивлă справочникĕ: тематика пайĕсем, картсем тата хăвăра тĕрĕслени.",
            "back_link": "COSYlanguages тĕп сайта таврăнмалли",
            "sections": [
                    {
                            "id": "pay-1",
                            "file": "pay-1.html",
                            "title": "1-мĕш пай · Çемье тата паллашни",
                            "subtitle": "Çемье, сывлăх сунни, хисепсем тата тĕссем",
                            "stripe": "#c9740a",
                            "topics": [
                                    {
                                            "slug": "semje",
                                            "title": "Çемье",
                                            "subtitle": "Çемье çыннисен ячĕсем",
                                            "page_num": 1,
                                            "words": [
                                                    {
                                                            "word": "анне",
                                                            "def": "анне, иң çывăх çын (<a href=\"../../chavash-grammatika/topics/prinadlezhnost-affikssam.html\">принадлежность: аннем</a>)",
                                                            "ex": "Анне ялта пурăнать."
                                                    },
                                                    {
                                                            "word": "атте",
                                                            "def": "атте, çемье пуçĕ",
                                                            "ex": "Атте ĕçре."
                                                    },
                                                    {
                                                            "word": "пичче",
                                                            "def": "асли пичче",
                                                            "ex": "Мăн пичче шкулта уçăлать."
                                                    },
                                                    {
                                                            "word": "аппа",
                                                            "def": "асли аппа",
                                                            "ex": "Пирĕн аппа институтра вĕренет."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Çемье сăмахĕсене пĕлни",
                                                    "Çемье çыннисем çинчен калама пĕлни"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "«Анне» сăмахĕ мĕне пĕлтерет?",
                                                            "opts": [
                                                                    "анне",
                                                                    "атте",
                                                                    "пичче"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Анне — ачана çуратса ӳстерекен çын."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "syvlakh-sunni-tata-pallashni",
                                            "title": "Сывлăх сунни тата паллашни",
                                            "subtitle": "Сывлăх сунмалли, сывпуллашмалли тата паллашмалли сăмахсем",
                                            "page_num": 2,
                                            "words": [
                                                    {
                                                            "word": "салам",
                                                            "def": "тус-эш хушшинче саламламалли сăмах",
                                                            "ex": "Салам, Петĕр! Енĕпе ĕçсем?"
                                                    },
                                                    {
                                                            "word": "сывлăх пултăр",
                                                            "def": "вырăнлă саламлав сăмахĕ",
                                                            "ex": "Сывлăх пултăр, вĕрентĕкçĕ!"
                                                    },
                                                    {
                                                            "word": "сывă пулăр",
                                                            "def": "сывпуллашмалли сăмах",
                                                            "ex": "Ыранччен сывă пулăр!"
                                                    },
                                                    {
                                                            "word": "ят",
                                                            "def": "çын ячĕ (<a href=\"../../chavash-grammatika/topics/prinadlezhnost-affikssam.html\">манăн ятăм</a>)",
                                                            "ex": "Манăн ятăм — Илемпи."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Саламлама тата сывпуллашма пĕлни",
                                                    "Хăвăн ятна калама пĕлни"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Тус-эш хушшинче мĕнле саламлаççĕ?",
                                                            "opts": [
                                                                    "салам",
                                                                    "сывă пулăр",
                                                                    "ырă кун"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Туссемпе кĕске «салам» сăмахпа калаçаççĕ."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "hisepsem",
                                            "title": "Хисепсем",
                                            "subtitle": "0-рен 100-ччен хисеп сăмахĕсем",
                                            "page_num": 3,
                                            "words": [
                                                    {
                                                            "word": "пĕрре",
                                                            "def": "тĕп хисеп, 1 (<a href=\"../../chavash-grammatika/topics/hisep-yachsem-tata-vakhat.html\">хисеп ячĕсем</a>)",
                                                            "ex": "Манăн пĕр кĕнеке бар."
                                                    },
                                                    {
                                                            "word": "вуннă",
                                                            "def": "тĕп хисеп, 10",
                                                            "ex": "Вучахра вунă ача вĕренет."
                                                    },
                                                    {
                                                            "word": "çĕр",
                                                            "def": "тĕп хисеп, 100",
                                                            "ex": "Ку кĕнекере çĕр страница."
                                                    },
                                                    {
                                                            "word": "хисеп",
                                                            "def": "шутлав, хисеп ячĕ",
                                                            "ex": "Çак хисепе çырса хурар."
                                                    }
                                            ],
                                            "check_items": [
                                                    "1-рен 10-ччен шутлама пĕлни",
                                                    "Предложенелра хисепсене калама пĕлни"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "«10» хисеп чăвашла мĕнле пулать?",
                                                            "opts": [
                                                                    "вуннă",
                                                                    "пĕрре",
                                                                    "çĕр"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "10 хисеп чăвашла «вуннă» пулать."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "tessem",
                                            "title": "Тĕссем",
                                            "subtitle": "Тĕп тĕссем тата сăмахсем",
                                            "page_num": 4,
                                            "words": [
                                                    {
                                                            "word": "хĕрлĕ",
                                                            "def": "хĕвел тата юн тĕсĕ (<a href=\"../../chavash-grammatika/topics/palla-yachsem.html\">паллă ячĕ</a>)",
                                                            "ex": " Хĕрлĕ панулми питĕ тутлă."
                                                    },
                                                    {
                                                            "word": "вакăр",
                                                            "def": "кăвак, пĕлĕт тĕсĕ",
                                                            "ex": " Пĕлĕт вакăр тĕслĕ."
                                                    },
                                                    {
                                                            "word": "симĕс",
                                                            "def": "утă тата япрах тĕсĕ",
                                                            "ex": "Çуркунне курăк симĕс пулать."
                                                    },
                                                    {
                                                            "word": "шурă",
                                                            "def": "юр тата сĕт тĕсĕ",
                                                            "ex": " Юр шурă тĕслĕ."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Тĕп тĕссене уйăрма пĕлни",
                                                    "Япаласен тĕсне калама пĕлни"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Юр мĕнле тĕслĕ пулать?",
                                                            "opts": [
                                                                    "шурă",
                                                                    "хура",
                                                                    "хĕрлĕ"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Юр шурă тĕслĕ."
                                                    }
                                            ]
                                    }
                            ]
                    },
                    {
                            "id": "pay-2",
                            "file": "pay-2.html",
                            "title": "2-мĕш пай · Апат-çимĕç, тумтир тата кил",
                            "subtitle": "Апат-çимĕç, шăлавар-кĕпе тата çурт ăшĕ",
                            "stripe": "#1c8f56",
                            "topics": [
                                    {
                                            "slug": "apat-simes-tata-esmesem",
                                            "title": "Апат-çимĕç тата ĕçмесем",
                                            "subtitle": "Çимелли тата ĕçмелли япаласем",
                                            "page_num": 5,
                                            "words": [
                                                    {
                                                            "word": "çăкăр",
                                                            "def": "тĕп апат, çунтарса пĕçернĕ апат",
                                                            "ex": "Ирхине ăшă çăкăр илтĕм."
                                                    },
                                                    {
                                                            "word": "шыв",
                                                            "def": "пĕтĕм чĕрĕ япалашăн кăра чылай ĕçме",
                                                            "ex": "Уçă шыв ĕçрĕм."
                                                    },
                                                    {
                                                            "word": "чей",
                                                            "def": "вĕри ĕçме",
                                                            "ex": "Эпир сĕтлĕ чей ĕçетпĕр."
                                                    },
                                                    {
                                                            "word": "сĕт",
                                                            "def": "шурă тĕслĕ ĕçме",
                                                            "ex": "Ĕне сĕт парать."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Апат ячĕсене пĕлни",
                                                    "Чей яки шыв ыйтма пĕлни"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Çунтарса пĕçернĕ тĕп апат мĕнле ятлă?",
                                                            "opts": [
                                                                    "çăкăр",
                                                                    "шыв",
                                                                    "чей"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Çунтарса пĕçернĕ тĕп апат — çăкăр."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "tumtir",
                                            "title": "Тумтир тата ураран тăхăнмаллисем",
                                            "subtitle": "Çиелти тумтир тата ураран тăхăнмаллисем",
                                            "page_num": 6,
                                            "words": [
                                                    {
                                                            "word": "кĕпе",
                                                            "def": "çиелти тумтир",
                                                            "ex": "Анне çĕнĕ кĕпе тăхăнчĕ."
                                                    },
                                                    {
                                                            "word": "йĕм",
                                                            "def": "ура тумтирĕ, йĕм-шалавар",
                                                            "ex": "Хура йĕм яланах юрăхлă."
                                                    },
                                                    {
                                                            "word": "çăпата",
                                                            "def": "йăла йăлинчи ура тумтирĕ",
                                                            "ex": "Мăн асатте çăпата сыратчĕ."
                                                    },
                                                    {
                                                            "word": "тăла",
                                                            "def": "ураран тăхăнмалли япала",
                                                            "ex": "Хĕлле йăлтах ăшă тăла тăхăнаççĕ."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Тумтир ячĕсене калама пĕлни",
                                                    "Мĕн тăхăнни çинчен каласси"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Чăваш йăлинчи чаплă ура тумтирĕ мĕнле ятлă?",
                                                            "opts": [
                                                                    "çăпата",
                                                                    "кĕпе",
                                                                    "çĕлĕк"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Çăпата — йăла йăлинчи ура тумтирĕ."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "surt-tata-bolmasem",
                                            "title": "Çурт тата пĕлĕмсем",
                                            "subtitle": "Торлăх, пĕлĕмсем тата сĕтел-пукан",
                                            "page_num": 7,
                                            "words": [
                                                    {
                                                            "word": "çурт",
                                                            "def": "пурăнмалли вырăн, ҫурт-кĕрĕт",
                                                            "ex": "Пирĕн çурт мăн та çутă."
                                                    },
                                                    {
                                                            "word": "пĕлĕм",
                                                            "def": "çурт ăшĕнчи пĕр вырăн",
                                                            "ex": "Ку пĕлĕмре сĕтел ларать."
                                                    },
                                                    {
                                                            "word": "сĕтел",
                                                            "def": "апат çимĕç ямалли сĕтел-пукан",
                                                            "ex": " Сĕтел çинче кĕнеке выртать."
                                                    },
                                                    {
                                                            "word": "покан",
                                                            "def": "лармалли сĕтел-пукан",
                                                            "ex": "Покан çине лар."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Сĕтел-пукан ячĕсене пĕлни",
                                                    "Пĕлĕм çинчен калаçма пĕлни"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Лармалли сĕтел-пукан ячĕ мĕнле?",
                                                            "opts": [
                                                                    "покан",
                                                                    "сĕтел",
                                                                    "шăпăр"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Лармалли сĕтел-пукан — покан."
                                                    }
                                            ]
                                    }
                            ]
                    },
                    {
                            "id": "pay-3",
                            "file": "pay-3.html",
                            "title": "3-мĕш пай · Ӳт-пӳ, çутçанталăк тата ĕç",
                            "subtitle": "Ӳт-пӳ пайĕсем, çанталăк, ĕçсем тата глаголсем",
                            "stripe": "#3562e0",
                            "topics": [
                                    {
                                            "slug": "ut-pu-payesem",
                                            "title": "Ӳт-пӳ пайĕсем",
                                            "subtitle": "Ӳт-пӳ тата пит пайĕсем",
                                            "page_num": 8,
                                            "words": [
                                                    {
                                                            "word": "пуç",
                                                            "def": "ӳт-пӳн çиелти пайĕ",
                                                            "ex": "Паян манăн пуç ыратать."
                                                    },
                                                    {
                                                            "word": "алă",
                                                            "def": "тытмалли тата ĕçлемелли орган",
                                                            "ex": "Апат çиес умĕн аллуна çу."
                                                    },
                                                    {
                                                            "word": "ура",
                                                            "def": "утмалли орган",
                                                            "ex": "Урамра утса ура аранчĕ."
                                                    },
                                                    {
                                                            "word": "куç",
                                                            "def": "курмалли орган",
                                                            "ex": "Унăн куçĕсем хура."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Ӳт-пӳ пайĕсене пĕлни",
                                                    "Ырату çинчен калама пĕлни"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Курмалли орган мĕнле ятлă?",
                                                            "opts": [
                                                                    "куç",
                                                                    "алă",
                                                                    "ура"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Куç — курмалли орган."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "santalak-tata-vakhat",
                                            "title": "Çанталăк тата вăхăт",
                                            "subtitle": "Çутçанталăк пулăмĕсем тата вăхăт ячĕсем",
                                            "page_num": 9,
                                            "words": [
                                                    {
                                                            "word": "хĕвел",
                                                            "def": "кунсене çутăртакан çăлтăр",
                                                            "ex": "Паян хĕвел ялкăш çутатать."
                                                    },
                                                    {
                                                            "word": "çумăр",
                                                            "def": "пĕлĕтрен çуйăнкан шыв",
                                                            "ex": "Урамра çумăр çуать."
                                                    },
                                                    {
                                                            "word": "юр",
                                                            "def": "хĕлле çуйăнкан шурă юр",
                                                            "ex": "Урамра юр выртать."
                                                    },
                                                    {
                                                            "word": "кун",
                                                            "def": "вăхăт виçи, çутă вăхăт",
                                                            "ex": " Паян ăшă кун."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Çанталăка ăнлантарма пĕлни",
                                                    "Юр-çумăра уйăрма пĕлни"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Хĕлле пĕлĕтрен мĕн çуать?",
                                                            "opts": [
                                                                    "юр",
                                                                    "çумăр",
                                                                    "хĕвел"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Хĕлле шурă юр çуать."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "es-tata-peselemsem",
                                            "title": "Ĕç тата ĕçченсем",
                                            "subtitle": "Тĕп ĕç вырăнĕсем тата пĕселемсем",
                                            "page_num": 10,
                                            "words": [
                                                    {
                                                            "word": "вĕрентĕкçĕ",
                                                            "def": "шкулта пĕлӳ паракан çын",
                                                            "ex": "Вĕрентĕкçĕ çĕнĕ урок ăнлантарать."
                                                    },
                                                    {
                                                            "word": "тухтăр",
                                                            "def": "çынсене сыватакан ăсчах",
                                                            "ex": "Тухтăр чирлĕ çынна пăхрĕ."
                                                    },
                                                    {
                                                            "word": "ĕççĕ",
                                                            "def": "заводра яки тупăшта ĕçлекен çын",
                                                            "ex": "Ĕççĕ заводра ĕçлет."
                                                    },
                                                    {
                                                            "word": "ĕç",
                                                            "def": "ĕç-хĕл, тăрăшу (<a href=\"../../chavash-grammatika/topics/pur-suk.html\">ĕç бар</a>)",
                                                            "ex": "Паян манăн ĕç чылай."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Тĕп ĕç ячĕсене пĕлни",
                                                    "Хăвăн ĕçӳ çинчен калани"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Шкулта ачасене кам вĕрентет?",
                                                            "opts": [
                                                                    "вĕрентĕкçĕ",
                                                                    "тухтăр",
                                                                    "ĕççĕ"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Шкулта вĕрентĕкçĕ вĕрентет."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "tep-glagolsem",
                                            "title": "Тĕп глаголсем",
                                            "subtitle": "Көнсерен пулакан ĕçсене калакан глаголсем",
                                            "page_num": 11,
                                            "words": [
                                                    {
                                                            "word": "вĕренни",
                                                            "def": "пĕлӳ илни, кĕнеке вулав (<a href=\"../../chavash-grammatika/topics/halkhi-vakhat.html\">хальхи вăхăт</a>)",
                                                            "ex": "Эпĕ чăваш чĕлхине вĕренетĕп."
                                                    },
                                                    {
                                                            "word": "çырни",
                                                            "def": "буквăсемпе текст туни",
                                                            "ex": "Тетрадре çыратăп."
                                                    },
                                                    {
                                                            "word": "ĕçлени",
                                                            "def": "тăрăшни, ĕç туни",
                                                            "ex": "Атте çак организацире ĕçлет."
                                                    },
                                                    {
                                                            "word": "утни",
                                                            "def": "урапа хăвăрт мар куçса йөрĕни",
                                                            "ex": "Паркра утма юрататăп."
                                                    }
                                            ],
                                            "check_items": [
                                                    "Тĕп глаголсене ăнланни",
                                                    "Глаголсене предложенелра хушни"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Кĕнекепе мĕн туса ĕçлеççĕ?",
                                                            "opts": [
                                                                    "вĕренеççĕ / вулаççĕ",
                                                                    "утаççĕ",
                                                                    "ĕçлеççĕ"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Кĕнекене вĕренеççĕ тата вулаççĕ."
                                                    }
                                            ]
                                    }
                            ]
                    }
            ]
    },
    {
            "dir": "hayots-lezvi-barapashar",
            "title": "Հայոց լեզվի բառապաշար (A0–A1)",
            "nav_title": "Հայոց լեզվի բառապաշար",
            "lang": "hy",
            "lead": "Հայոց լեզվի բառապաշարի ինտերակտիվ ուղեցույց. թեմատիկ մասեր, քարտեր և վարժություններ:",
            "back_link": "Վերադառնալ COSYlanguages գլխավոր էջ",
            "sections": [
                    {
                            "id": "mas-1",
                            "file": "mas-1.html",
                            "title": "Մաս 1 · Ընտանիք, ողջույններ և հիմունքներ",
                            "subtitle": "Ընտանիքի անդամներ, ողջույններ, թվեր և գույներ",
                            "stripe": "#7c4fd6",
                            "topics": [
                                    {
                                            "slug": "entanik",
                                            "title": "Ընտանիք",
                                            "subtitle": "Ընտանիքի բառապաշար",
                                            "page_num": 1,
                                            "words": [
                                                    {
                                                            "word": "մայր",
                                                            "def": "մայրիկ, ընտանիքի կին ծնողը (<a href=\"../../hayots-lezvi-kerakanutyun/topics/statsakanutyun.html\">ստացականություն: մայրս</a>)",
                                                            "ex": "Մայրս Երևանում է ապրում:"
                                                    },
                                                    {
                                                            "word": "հայր",
                                                            "def": "հայրիկ, ընտանիքի տղամարդ ծնողը",
                                                            "ex": "Հայրս աշխատում է:"
                                                    },
                                                    {
                                                            "word": "եղբայր",
                                                            "def": "նույն ծնողների տղա զավակը",
                                                            "ex": "Ես եղբայր ունեմ:"
                                                    },
                                                    {
                                                            "word": "քույր",
                                                            "def": "նույն ծնողների աղջիկ զավակը",
                                                            "ex": "Քույրս սովորում է:"
                                                    }
                                            ],
                                            "check_items": [
                                                    "Ճանաչել ընտանիքի անդամների բառերը",
                                                    "Խոսել ընտանիքի մասին"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ինչպե՞ս է կոչվում տղամարդ ծնողը:",
                                                            "opts": [
                                                                    "հայր",
                                                                    "մայր",
                                                                    "քույր"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Տղամարդ ծնողը հայրն է:"
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "voghjoyn-yev-tsanotutyun",
                                            "title": "Ողջույններ և ծանոթություն",
                                            "subtitle": "Բարևելու, հրաժեշտ տալու և ծանոթանալու արտահայտություններ",
                                            "page_num": 2,
                                            "words": [
                                                    {
                                                            "word": "բարև",
                                                            "def": "ոճական ողջույնի բառ",
                                                            "ex": "Բարև, Արամ: Ինչպե՞ս ես:"
                                                    },
                                                    {
                                                            "word": "բարի լույս",
                                                            "def": "առավոտյան ողջույնի ձև",
                                                            "ex": "Բարի լույս, ուսուցիչ:"
                                                    },
                                                    {
                                                            "word": "ցտեսություն",
                                                            "def": "հրաժեշտի արտահայտություն",
                                                            "ex": "Ցտեսություն, մինչ վաղը:"
                                                    },
                                                    {
                                                            "word": "անուն",
                                                            "def": "մարդու անվանումը (<a href=\"../../hayots-lezvi-kerakanutyun/topics/statsakanutyun.html\">իմ անունը</a>)",
                                                            "ex": "Իմ անունը Անի է:"
                                                    }
                                            ],
                                            "check_items": [
                                                    "Ողջունել և հրաժեշտ տալ",
                                                    "Ներկայանալ հայերենով"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ի՞նչ են ասում առավոտյան ողջունելիս:",
                                                            "opts": [
                                                                    "բարի լույս",
                                                                    "ցտեսություն",
                                                                    "բարի գիշեր"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Առավոտյան ողջունում են «բարի լույս» արտահայտությամբ:"
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "thver",
                                            "title": "Թվականներ",
                                            "subtitle": "0-ից 100 քանակական թվականները",
                                            "page_num": 3,
                                            "words": [
                                                    {
                                                            "word": "մեկ",
                                                            "def": "քանակական թվական, 1 (<a href=\"../../hayots-lezvi-kerakanutyun/topics/thvakanner-zham-yev-oror.html\">թվականներ</a>)",
                                                            "ex": "Ես մեկ գիրք ունեմ:"
                                                    },
                                                    {
                                                            "word": "տասը",
                                                            "def": "քանակական թվական, 10",
                                                            "ex": "Դասարանում տասը աշակերտ կա:"
                                                    },
                                                    {
                                                            "word": "հարյուր",
                                                            "def": "քանակական թվական, 100",
                                                            "ex": "Այս գիրքը հարյուր էջ ունի:"
                                                    },
                                                    {
                                                            "word": "թիվ",
                                                            "def": "հաշվարկի միավոր",
                                                            "ex": "Գրիր այս թիվը:"
                                                    }
                                            ],
                                            "check_items": [
                                                    "Հաշվել 1-ից 10-ը",
                                                    "Թվականները գործածել նախադասության մեջ"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ո՞րն է 10 թվականը հայերենով:",
                                                            "opts": [
                                                                    "տասը",
                                                                    "մեկ",
                                                                    "հարյուր"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "10 թիվը հայերենով կոչվում է «տասը»:"
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "guyner",
                                            "title": "Գույներ",
                                            "subtitle": "Հիմնական գույները և երանգները",
                                            "page_num": 4,
                                            "words": [
                                                    {
                                                            "word": "կարմիր",
                                                            "def": "կրակի և արյան գույնը (<a href=\"../../hayots-lezvi-kerakanutyun/topics/atsakanner.html\">ածական</a>)",
                                                            "ex": "Կարմիր խնձորը շատ համեղ է:"
                                                    },
                                                    {
                                                            "word": "կապույտ",
                                                            "def": "անամպ երկնքի գույնը",
                                                            "ex": "Երկինքը պայծառ կապույտ է:"
                                                    },
                                                    {
                                                            "word": "կանաչ",
                                                            "def": "խոտի և տերևների գույնը",
                                                            "ex": "Գարնանը խոտը կանաչ է:"
                                                    },
                                                    {
                                                            "word": "սպիտակ",
                                                            "def": "ձյան և կաթի գույնը",
                                                            "ex": "Ձյունը սպիտակ է:"
                                                    }
                                            ],
                                            "check_items": [
                                                    "Ճանաչել հիմնական գույները",
                                                    "Նկարագրել առարկայի գույնը"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ի՞նչ գույն ունի ձյունը:",
                                                            "opts": [
                                                                    "սպիտակ",
                                                                    "սև",
                                                                    "կարմիր"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Ձյունը սպիտակ գույն ունի:"
                                                    }
                                            ]
                                    }
                            ]
                    },
                    {
                            "id": "mas-2",
                            "file": "mas-2.html",
                            "title": "Մաս 2 · Ուտելիք, հագուստ և տուն",
                            "subtitle": "Սնունդ, ըմպելիքներ, հագուստ և տան սենյակներ",
                            "stripe": "#1c9483",
                            "topics": [
                                    {
                                            "slug": "utelikh-yev-pmpelikh",
                                            "title": "Ուտելիք և ըմպելիք",
                                            "subtitle": "Հիմնական մթերքներ և խմիչքներ",
                                            "page_num": 5,
                                            "words": [
                                                    {
                                                            "word": "հաց",
                                                            "def": "ալյուրից թխված հիմնական սնունդ",
                                                            "ex": "Առավոտյան թարմ հաց գնեցի:"
                                                    },
                                                    {
                                                            "word": "ջուր",
                                                            "def": "կյանքի համար անհրաժեշտ հեղուկ",
                                                            "ex": "Սառը ջուր խմեցի:"
                                                    },
                                                    {
                                                            "word": "թեյ",
                                                            "def": "տաք ըմպելիք",
                                                            "ex": "Մենք թեյ ենք խմում:"
                                                    },
                                                    {
                                                            "word": "կաթ",
                                                            "def": "սպիտակ սննդարար հեղուկ",
                                                            "ex": "Կովը կաթ է տալիս:"
                                                    }
                                            ],
                                            "check_items": [
                                                    "Անվանել հիմնական ուտելիքները",
                                                    "Խնդրել թեյ կամ ջուր"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ի՞նչն է ալյուրից թխված հիմնական սնունդը:",
                                                            "opts": [
                                                                    "հաց",
                                                                    "ջուր",
                                                                    "թեյ"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Ալյուրից թխված հիմնական սնունդը հացն է:"
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "hagust",
                                            "title": "Հագուստ և կոշիկ",
                                            "subtitle": "Ամենօրյա հագուստի տեսակներ",
                                            "page_num": 6,
                                            "words": [
                                                    {
                                                            "word": "շապիկ",
                                                            "def": "վերնահագուստ",
                                                            "ex": "Սպիտակ շապիկ եմ հագել:"
                                                    },
                                                    {
                                                            "word": "տաբատ",
                                                            "def": "ոտքերի հագուստ",
                                                            "ex": "Սև տաբատը շատ հարմար է:"
                                                    },
                                                    {
                                                            "word": "կոշիկ",
                                                            "def": "ոտքի ծածկոց",
                                                            "ex": "Նոր կոշիկներ գնեցի:"
                                                    },
                                                    {
                                                            "word": "վերարկու",
                                                            "def": "տաք տաքացնող հագուստ",
                                                            "ex": "Ձմռանը տաք վերարկու են հագնում:"
                                                    }
                                            ],
                                            "check_items": [
                                                    "Ճանաչել հագուստի անվանումները",
                                                    "Նկարագրել հագուստը"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ի՞նչ են հագնում ոտքերին:",
                                                            "opts": [
                                                                    "կոշիկ",
                                                                    "շապիկ",
                                                                    "գլխարկ"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Ոտքերին հագնում են կոշիկ:"
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "tun-yev-senyakner",
                                            "title": "Տուն և սենյակներ",
                                            "subtitle": "Բնակարան, սենյակներ և կահույք",
                                            "page_num": 7,
                                            "words": [
                                                    {
                                                            "word": "տուն",
                                                            "def": "բնակության վայր (<a href=\"../../hayots-lezvi-kerakanutyun/topics/holovner.html\">տանը / տնից</a>)",
                                                            "ex": "Մեր տունը մեծ է և լուսավոր:"
                                                    },
                                                    {
                                                            "word": "սենյակ",
                                                            "def": "տան առանձին մաս",
                                                            "ex": "Այս սենյակում սեղան կա:"
                                                    },
                                                    {
                                                            "word": "սեղան",
                                                            "def": "ուտելու կամ գրելու կահույք",
                                                            "ex": "Գիրքը սեղանի վրա է:"
                                                    },
                                                    {
                                                            "word": "աթոռ",
                                                            "def": "նստելու կահույք",
                                                            "ex": "Նստիր աթոռին:"
                                                    }
                                            ],
                                            "check_items": [
                                                    "Անվանել տան կահույքը",
                                                    "Խոսել սենյակի մասին"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ո՞ր կահույքն է նախատեսված նստելու համար:",
                                                            "opts": [
                                                                    "աթոռ",
                                                                    "սեղան",
                                                                    "պատուհան"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Նստելու համար նախատեսված է աթոռը:"
                                                    }
                                            ]
                                    }
                            ]
                    },
                    {
                            "id": "mas-3",
                            "file": "mas-3.html",
                            "title": "Մաս 3 · Մարմին, եղանակ, աշխատանք և բայեր",
                            "subtitle": "Մարմնի մասեր, եղանակ, մասնագիտություններ և բայեր",
                            "stripe": "#c9740a",
                            "topics": [
                                    {
                                            "slug": "marmni-maser",
                                            "title": "Մարմնի մասեր",
                                            "subtitle": "Մարմնի և դեմքի մասերի անվանումները",
                                            "page_num": 8,
                                            "words": [
                                                    {
                                                            "word": "գլուխ",
                                                            "def": "մարմնի վերին մասը",
                                                            "ex": "Այսօր գլուխս ցավում է:"
                                                    },
                                                    {
                                                            "word": "ձեռք",
                                                            "def": "բռնելու և աշխատելու օրգան",
                                                            "ex": "Լվա ձեռքերդ ուտելուց առաջ:"
                                                    },
                                                    {
                                                            "word": "ոտք",
                                                            "def": "քայլելու օրգան",
                                                            "ex": "Ոտքերս հոգնեցին:"
                                                    },
                                                    {
                                                            "word": "աչք",
                                                            "def": "տեսողության օրգան",
                                                            "ex": "Նրա աչքերը սև են:"
                                                    }
                                            ],
                                            "check_items": [
                                                    "Ճանաչել մարմնի մասերը",
                                                    "Արտահայտել ցավը"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ո՞րն է տեսողության օրգանը:",
                                                            "opts": [
                                                                    "աչք",
                                                                    "ձեռք",
                                                                    "ոտք"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Տեսողության օրգանն է աչքը:"
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "eghanak-yev-zhamanak",
                                            "title": "Եղանակ և ժամանակ",
                                            "subtitle": "Բնության երևույթներ և ժամանակի միավորներ",
                                            "page_num": 9,
                                            "words": [
                                                    {
                                                            "word": "արև",
                                                            "def": "երկինքը լուսավորող աստղ",
                                                            "ex": "Այսօր արևը պայծառ շողում է:"
                                                    },
                                                    {
                                                            "word": "անձրև",
                                                            "def": "ամպերից թափվող ջուր",
                                                            "ex": "Դրսում անձրև է գալիս:"
                                                    },
                                                    {
                                                            "word": "ձյուն",
                                                            "def": "ձմռանը տեղացող սպիտակ տեղում",
                                                            "ex": "Ձմռանը ձյուն է գալիս:"
                                                    },
                                                    {
                                                            "word": "օր",
                                                            "def": "ժամանակի միավոր",
                                                            "ex": "Այսօր տաք օր է:"
                                                    }
                                            ],
                                            "check_items": [
                                                    "Նկարագրել եղանակը",
                                                    "Տարբերել տեղումները"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ի՞նչ է տեղում ձմռանը:",
                                                            "opts": [
                                                                    "ձյուն",
                                                                    "արև",
                                                                    "քամի"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Ձմռանը սովորաբար ձյուն է տեղում:"
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "ashkhatankh-yev-masnagitutyunner",
                                            "title": "Աշխատանք և մասնագիտություններ",
                                            "subtitle": "Հիմնական մասնագիտությունները",
                                            "page_num": 10,
                                            "words": [
                                                    {
                                                            "word": "ուսուցիչ",
                                                            "def": "դպրոցում կրթող անձ",
                                                            "ex": "Ուսուցիչը բացատրում է դասը:"
                                                    },
                                                    {
                                                            "word": "բժիշկ",
                                                            "def": "մարդկանց բուժող մասնագետ",
                                                            "ex": "Բժիշկը ստուգեց հիվանդին:"
                                                    },
                                                    {
                                                            "word": "բանվոր",
                                                            "def": "ֆիզիկական աշխատանք կատարող",
                                                            "ex": "Բանվորը աշխատում է գործարանում:"
                                                    },
                                                    {
                                                            "word": "աշխատանք",
                                                            "def": "գործ, զբաղմունք (<a href=\"../../hayots-lezvi-kerakanutyun/topics/ka-chka.html\">աշխատանք կա</a>)",
                                                            "ex": "Այսօր շատ աշխատանք ունեմ:"
                                                    }
                                            ],
                                            "check_items": [
                                                    "Անվանել մասնագիտությունները",
                                                    "Խոսել աշխատանքի մասին"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ո՞վ է բուժում հիվանդներին:",
                                                            "opts": [
                                                                    "բժիշկ",
                                                                    "ուսուցիչ",
                                                                    "վարորդ"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Հիվանդներին բուժում է բժիշկը:"
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "himnakan-bayer",
                                            "title": "Հիմնական բայեր",
                                            "subtitle": "Ամենօրյա գործողություններ արտահայտող բայեր",
                                            "page_num": 11,
                                            "words": [
                                                    {
                                                            "word": "կարդալ",
                                                            "def": "գրվածը ընթերցել (<a href=\"../../hayots-lezvi-kerakanutyun/topics/nerka-zhamanak.html\">ներկա ժամանակ</a>)",
                                                            "ex": "Ես հայերեն գիրք եմ կարդում:"
                                                    },
                                                    {
                                                            "word": "գրել",
                                                            "def": "տեքստ հորինել կամ արտագրել",
                                                            "ex": "Տետրում գրում եմ:"
                                                    },
                                                    {
                                                            "word": "աշխատել",
                                                            "def": "գործ անել, աշխատանք կատարել",
                                                            "ex": "Հայրս հիվանդանոցում է աշխատում:"
                                                    },
                                                    {
                                                            "word": "գնալ",
                                                            "def": "տեղաշարժվել դեպի ինչ-որ տեղ",
                                                            "ex": "Սիրում եմ զբոսնել զբոսայգում:"
                                                    }
                                            ],
                                            "check_items": [
                                                    "Հասկանալ հիմնական բայերը",
                                                    "Բայերը գործածել ժամանակաձևերով"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "Ի՞նչ են անում գրքի հետ:",
                                                            "opts": [
                                                                    "կարդում են",
                                                                    "քայլում են",
                                                                    "ուտում են"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "Գիրքը կարդում են:"
                                                    }
                                            ]
                                    }
                            ]
                    }
            ]
    },
    {
            "dir": "qartuli-leqsika",
            "title": "ქართული ლექსიკა (A0–A1)",
            "nav_title": "ქართული ლექსიკა",
            "lang": "ka",
            "lead": "ქართული ენის ლექსიკის ინტერაქტიული სახელმძღვანელო: თემატური ნაწილები, ბარათები და სავარჯიშოები.",
            "back_link": "COSYlanguages-ის მთავარ გვერდზე დაბრუნება",
            "sections": [
                    {
                            "id": "nacili-1",
                            "file": "nacili-1.html",
                            "title": "ნაწილი 1 · ოჯახი, მისალმება და საფუძვლები",
                            "subtitle": "ოჯახის წევრები, მისალმება, რიცხვები და ფერები",
                            "stripe": "#a3195b",
                            "topics": [
                                    {
                                            "slug": "ojakhi",
                                            "title": "ოჯახი",
                                            "subtitle": "ოჯახის წევრები",
                                            "page_num": 1,
                                            "words": [
                                                    {
                                                            "word": "დედა",
                                                            "def": "ქალი მშობელი (<a href=\"../../qartuli-gramatika/topics/kutvniloba.html\">კუთვნილება: დედაჩემი</a>)",
                                                            "ex": "დედა თბილისში ცხოვრობს."
                                                    },
                                                    {
                                                            "word": "მამა",
                                                            "def": "კაცი მშობელი",
                                                            "ex": "მამა მუშაობს."
                                                    },
                                                    {
                                                            "word": "ძმა",
                                                            "def": "ვაჟი იმავე მშობლებისგან",
                                                            "ex": "მე მყავს ძმა."
                                                    },
                                                    {
                                                            "word": "და",
                                                            "def": "ქალიშვილი იმავე მშობლებისგან",
                                                            "ex": "ჩემი და სწავლობს."
                                                    }
                                            ],
                                            "check_items": [
                                                    "ოჯახის წევრების სიტყვების ცნობა",
                                                    "ოჯახზე საუბარი"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "როგორ ჰქვია ქალ მშობელს?",
                                                            "opts": [
                                                                    "დედა",
                                                                    "მამა",
                                                                    "ძმა"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "ქალ მშობელს ჰქვია დედა."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "misalmeba-da-gacnoba",
                                            "title": "მისალმება და გაცნობა",
                                            "subtitle": "მისალმების, დამშვიდობებისა და გაცნობის ფრაზები",
                                            "page_num": 2,
                                            "words": [
                                                    {
                                                            "word": "გამარჯობა",
                                                            "def": "ძირითადი მისალმების სიტყვა",
                                                            "ex": "გამარჯობა, გიორგი! როგორ ხარ?"
                                                    },
                                                    {
                                                            "word": "დილა მშვიდობისა",
                                                            "def": "დილის მისალმება",
                                                            "ex": "დილა მშვიდობისა, მასწავლებელო!"
                                                    },
                                                    {
                                                            "word": "ნახვამდის",
                                                            "def": "დამშვიდობების ფრაზა",
                                                            "ex": "ნახვამდის, ხვალამდე!"
                                                    },
                                                    {
                                                            "word": "სახელი",
                                                            "def": "ადამიანის დასახელება (<a href=\"../../qartuli-gramatika/topics/kutvniloba.html\">ჩემი სახელი</a>)",
                                                            "ex": "ჩემი სახელია ნინო."
                                                    }
                                            ],
                                            "check_items": [
                                                    "მისალმება და დამშვიდობება",
                                                    "საკუთარი სახელის თქმა"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "რას ვამბობთ დილით მისალმებისას?",
                                                            "opts": [
                                                                    "დილა მშვიდობისა",
                                                                    "ნახვამდის",
                                                                    "ღამე მშვიდობისა"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "დილით მისალმებისას ვამბობთ «დილა მშვიდობისა»."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "rickvebi",
                                            "title": "რიცხვები",
                                            "subtitle": "0-დან 100-მდე რაოდენობითი რიცხვები",
                                            "page_num": 3,
                                            "words": [
                                                    {
                                                            "word": "ერთი",
                                                            "def": "რაოდენობითი რიცხვი, 1 (<a href=\"../../qartuli-gramatika/topics/rickhvebi-dro-da-dgeebi.html\">რიცხვები</a>)",
                                                            "ex": "მე ერთი წიგნი მაქვს."
                                                    },
                                                    {
                                                            "word": "ათი",
                                                            "def": "რაოდენობითი რიცხვი, 10",
                                                            "ex": "კლასში ათი მოსწავლეა."
                                                    },
                                                    {
                                                            "word": "ასი",
                                                            "def": "რაოდენობითი რიცხვი, 100",
                                                            "ex": "ამ წიგნში ასი გვერდია."
                                                    },
                                                    {
                                                            "word": "რიცხვი",
                                                            "def": "თვლის ერთეული",
                                                            "ex": "დაწერე ეს რიცხვი."
                                                    }
                                            ],
                                            "check_items": [
                                                    "1-დან 10-მდე დათვლა",
                                                    "რიცხვების გამოყენება წინადადებაში"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "რომელია 10 რიცხვი ქართულად?",
                                                            "opts": [
                                                                    "ათი",
                                                                    "ერთი",
                                                                    "ასი"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "10 რიცხვი ქართულად არის «ათი»."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "ferebi",
                                            "title": "ფერები",
                                            "subtitle": "ძირითადი ფერები და ელფერები",
                                            "page_num": 4,
                                            "words": [
                                                    {
                                                            "word": "წითელი",
                                                            "def": "ცეცხლისა და სისხლის ფერი (<a href=\"../../qartuli-gramatika/topics/zedsartavi-sakheli.html\">ზედსართავი სახელი</a>)",
                                                            "ex": "წითელი ვაშლი ძალიან ტკბილია."
                                                    },
                                                    {
                                                            "word": "ლურჯი",
                                                            "def": "მოწმენდილი ცის ფერი",
                                                            "ex": "ცა კაშკაშა ლურჯია."
                                                    },
                                                    {
                                                            "word": "მწვანე",
                                                            "def": "ბალახისა და ფოთლების ფერი",
                                                            "ex": "გაზაფხულზე ბალახი მწვანეა."
                                                    },
                                                    {
                                                            "word": "თეთრი",
                                                            "def": "თოვლისა და რძის ფერი",
                                                            "ex": "თოვლი თეთრია."
                                                    }
                                            ],
                                            "check_items": [
                                                    "ძირითადი ფერების ცნობა",
                                                    "საგანთა ფერის აღწერა"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "რა ფერია თოვლი?",
                                                            "opts": [
                                                                    "თეთრი",
                                                                    "შავი",
                                                                    "წითელი"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "თოვლი არის თეთრი ფერის."
                                                    }
                                            ]
                                    }
                            ]
                    },
                    {
                            "id": "nacili-2",
                            "file": "nacili-2.html",
                            "title": "ნაწილი 2 · საჭმელი, ტანსაცმელი და სახლი",
                            "subtitle": "საჭმელ-სასმელი, ტანსაცმელი და სახლის ოთახები",
                            "stripe": "#1c9483",
                            "topics": [
                                    {
                                            "slug": "sagmeli-da-sasmeli",
                                            "title": "საჭმელი და სასმელი",
                                            "subtitle": "ძირითადი პროდუქტები და სასმელები",
                                            "page_num": 5,
                                            "words": [
                                                    {
                                                            "word": "პური",
                                                            "def": "ფქვილისგან გამომცხვარი ძირითადი საჭმელი",
                                                            "ex": "დილით ახალი პური ვიყიდე."
                                                    },
                                                    {
                                                            "word": "წყალი",
                                                            "def": "სიცოცხლისთვის აუცილებელი სითხე",
                                                            "ex": "ცივი წყალი დავლიე."
                                                    },
                                                    {
                                                            "word": "ჩაი",
                                                            "def": "ცხელი სასმელი",
                                                            "ex": "ჩვენ ჩაის ვსვამთ."
                                                    },
                                                    {
                                                            "word": "რძე",
                                                            "def": "თეთრი საკვები სითხე",
                                                            "ex": "ძროხა იძლევა რძეს."
                                                    }
                                            ],
                                            "check_items": [
                                                    "ძირითადი საჭმელების დასახელება",
                                                    "ჩაის ან წყლის თხოვნა"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "რა არის ფქვილისგან გამომცხვარი ძირითადი საჭმელი?",
                                                            "opts": [
                                                                    "პური",
                                                                    "წყალი",
                                                                    "ჩაი"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "ფქვილისგან გამომცხვარი ძირითადი საჭმელია პური."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "tansagmeli",
                                            "title": "ტანსაცმელი და ფეხსაცმელი",
                                            "subtitle": "ყოველდღიური ტანსაცმლის სახეობები",
                                            "page_num": 6,
                                            "words": [
                                                    {
                                                            "word": "პერანგი",
                                                            "def": "ზედა ტანსაცმელი",
                                                            "ex": "თეთრი პერანგი აცვია."
                                                    },
                                                    {
                                                            "word": "შარვალი",
                                                            "def": "ფეხების ტანსაცმელი",
                                                            "ex": "შავი შარვალი ძალიან მოხერხებულია."
                                                    },
                                                    {
                                                            "word": "ფეხსაცმელი",
                                                            "def": "ფეხის სამოსი",
                                                            "ex": "ახალი ფეხსაცმელი ვიყიდე."
                                                    },
                                                    {
                                                            "word": "ქურთუკი",
                                                            "def": "თბილი სამოსი",
                                                            "ex": "ზამთარში თბილ ქურთუკს იცვამენ."
                                                    }
                                            ],
                                            "check_items": [
                                                    "ტანსაცმლის დასახელებების ცნობა",
                                                    "ჩაცმულობის აღწერა"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "რას იცვამენ ფეხზე?",
                                                            "opts": [
                                                                    "ფეხსაცმელი",
                                                                    "პერანგი",
                                                                    "ქუდი"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "ფეხზე იცვამენ ფეხსაცმელს."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "sakhi-da-otakhebi",
                                            "title": "სახლი და ოთახები",
                                            "subtitle": "ბინა, ოთახები და ავეჯი",
                                            "page_num": 7,
                                            "words": [
                                                    {
                                                            "word": "სახლი",
                                                            "def": "საცხოვრებელი ადგილი (<a href=\"../../qartuli-gramatika/topics/tandebulebi.html\">სახლში</a>)",
                                                            "ex": "ჩვენი სახლი დიდია და ნათელი."
                                                    },
                                                    {
                                                            "word": "ოთახი",
                                                            "def": "სახლის ცალკე ნაწილი",
                                                            "ex": "ამ ოთახში მაგიდა დგას."
                                                    },
                                                    {
                                                            "word": "მაგიდა",
                                                            "def": "საჭმლის ან წერის ავეჯი",
                                                            "ex": "წიგნი მაგიდაზე დევს."
                                                    },
                                                    {
                                                            "word": "სკამი",
                                                            "def": "დასაჯდომი ავეჯი",
                                                            "ex": "დაჯექი სკამზე."
                                                    }
                                            ],
                                            "check_items": [
                                                    "სახლის ავეჯის დასახელება",
                                                    "ოთახზე საუბარი"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "რომელი ავეჯია განკუთვნილი დასაჯდომად?",
                                                            "opts": [
                                                                    "სკამი",
                                                                    "მაგიდა",
                                                                    "ფანჯარა"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "დასაჯდომად განკუთვნილია სკამი."
                                                    }
                                            ]
                                    }
                            ]
                    },
                    {
                            "id": "nacili-3",
                            "file": "nacili-3.html",
                            "title": "ნაწილი 3 · სხეული, ამინდი, სამუშაო და ზმნები",
                            "subtitle": "სხეულის ნაწილები, ამინდი, პროფესიები და ზმნები",
                            "stripe": "#3562e0",
                            "topics": [
                                    {
                                            "slug": "skheulis-nacilebi",
                                            "title": "სხეულის ნაწილები",
                                            "subtitle": "სხეულისა და სახის ნაწილების დასახელებები",
                                            "page_num": 8,
                                            "words": [
                                                    {
                                                            "word": "თავი",
                                                            "def": "სხეულის ზედა ნაწილი",
                                                            "ex": "დღეს თავი მტკივა."
                                                    },
                                                    {
                                                            "word": "ხელი",
                                                            "def": "ჭერისა და მუშაობის ორგანო",
                                                            "ex": "დაიბანე ხელები ჭამის წინ."
                                                    },
                                                    {
                                                            "word": "ფეხი",
                                                            "def": "სიარულის ორგანო",
                                                            "ex": "ფეხები დამიღალდა."
                                                    },
                                                    {
                                                            "word": "თვალი",
                                                            "def": "ხედვის ორგანო",
                                                            "ex": "მას შავი თვალები აქვს."
                                                    }
                                            ],
                                            "check_items": [
                                                    "სხეულის ნაწილების ცნობა",
                                                    "ტკივილის გამოხატვა"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "რომელია ხედვის ორგანო?",
                                                            "opts": [
                                                                    "თვალი",
                                                                    "ხელი",
                                                                    "ფეხი"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "ხედვის ორგანოა თვალი."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "amindi-da-dro",
                                            "title": "ამინდი და დრო",
                                            "subtitle": "ბუნების მოვლენები და დროის ერთეულები",
                                            "page_num": 9,
                                            "words": [
                                                    {
                                                            "word": "მზე",
                                                            "def": "ცის განათების ვარსკვლავი",
                                                            "ex": "დღეს მზე კაშკაშებს."
                                                    },
                                                    {
                                                            "word": "წვიმა",
                                                            "def": "ღრუბლებიდან წამოსული წყალი",
                                                            "ex": "გარეთ წვიმა მოდის."
                                                    },
                                                    {
                                                            "word": "თოვლი",
                                                            "def": "ზამთრის თეთრი ნალექი",
                                                            "ex": "ზამთარში თოვლი მოდის."
                                                    },
                                                    {
                                                            "word": "დღე",
                                                            "def": "დროის ერთეული",
                                                            "ex": "დღეს თბილი დღეა."
                                                    }
                                            ],
                                            "check_items": [
                                                    "ამინდის აღწერა",
                                                    "ნალექების გარჩევა"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "რა მოდის ზამთარში?",
                                                            "opts": [
                                                                    "თოვლი",
                                                                    "მზე",
                                                                    "ქარი"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "ზამთარში ჩვეულებრივ თოვლი მოდის."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "samushao-da-profesiebi",
                                            "title": "სამუშაო და პროფესიები",
                                            "subtitle": "ძირითადი პროფესიები",
                                            "page_num": 10,
                                            "words": [
                                                    {
                                                            "word": "მასწავლებელი",
                                                            "def": "სკოლაში განმანათლებელი პირი",
                                                            "ex": "მასწავლებელი ხსნის გაკვეთილს."
                                                    },
                                                    {
                                                            "word": "ექიმი",
                                                            "def": "ადამიანთა მკურნალი სპეციალისტი",
                                                            "ex": "ექიმმა გასინჯა ავადმყოფი."
                                                    },
                                                    {
                                                            "word": "მუშა",
                                                            "def": "ფიზიკური შრომის შემსრულებელი",
                                                            "ex": "მუშა ქარხანაში მუშაობს."
                                                    },
                                                    {
                                                            "word": "სამუშაო",
                                                            "def": "საქმე, საქმიანობა (<a href=\"../../qartuli-gramatika/topics/aris-ar-aris.html\">სამუშაო არის</a>)",
                                                            "ex": "დღეს ბევრი სამუშაო მაქვს."
                                                    }
                                            ],
                                            "check_items": [
                                                    "პროფესიების დასახელება",
                                                    "საქმიანობაზე საუბარი"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "ვინ მკურნალობს ავადმყოფებს?",
                                                            "opts": [
                                                                    "ექიმი",
                                                                    "მასწავლებელი",
                                                                    "მძღოლი"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "ავადმყოფებს მკურნალობს ექიმი."
                                                    }
                                            ]
                                    },
                                    {
                                            "slug": "dziritadi-zmnebi",
                                            "title": "ძირითადი ზმნები",
                                            "subtitle": "ყოველდღიური მოქმედების გამომხატველი ზმნები",
                                            "page_num": 11,
                                            "words": [
                                                    {
                                                            "word": "კითხვა",
                                                            "def": "დაწერილის წაკითხვა (<a href=\"../../qartuli-gramatika/topics/pirmoti-fortmebi.html\">ვკითხულობ</a>)",
                                                            "ex": "მე ქართულ წიგნს ვკითხულობ."
                                                    },
                                                    {
                                                            "word": "წერა",
                                                            "def": "ტექსტის შექმნა ან გადაწერა",
                                                            "ex": "რვეულში ვწერ."
                                                    },
                                                    {
                                                            "word": "მუშაობა",
                                                            "def": "საქმის კეთება",
                                                            "ex": "მამაჩემი საავადმყოფოში მუშაობს."
                                                    },
                                                    {
                                                            "word": "სიარული",
                                                            "def": "ფეხით გადაადგილება",
                                                            "ex": "მიყვარს პარკში სეირნობა."
                                                    }
                                            ],
                                            "check_items": [
                                                    "ძირითადი ზმნების გაგება",
                                                    "ზმნების გამოყენება დროებში"
                                            ],
                                            "quiz": [
                                                    {
                                                            "q": "რას აკეთებენ წიგნთან მიმართებით?",
                                                            "opts": [
                                                                    "კითხულობენ",
                                                                    "დადიან",
                                                                    "ჭამენ"
                                                            ],
                                                            "correct": 0,
                                                            "explain": "წიგნს კითხულობენ."
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

    ui = UI_VOCAB_STRINGS[m["lang"]]

    for idx, (sec, top) in enumerate(all_topics):
        prev_top = all_topics[idx - 1][1] if idx > 0 else None
        next_top = all_topics[idx + 1][1] if idx < len(all_topics) - 1 else None

        cards_html = []
        for w in top.get("words", []):
            cards_html.append(f'''<div class="flashcard">
  <div class="word">{w["word"]}</div>
  <div class="definition">{w["def"]}</div>
  <div class="example">{w["ex"]}</div>
</div>''')

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
  <input type="text" id="vocab-search" class="search-box" placeholder="{ui["search_ph"]}">
  <div class="flashcard-grid">
    {"".join(cards_html)}
  </div>
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
    <span class="eyebrow">Module</span>
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
    <h1 style="font-size:24px;">Modules</h1>
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

    print(f"Generated vocabulary manual: {m['dir']}")

def main():
    for m in MANUALS_VOCAB:
        generate_manual(m)
    print("All 9 monolingual vocabulary manuals compiled successfully.")

if __name__ == "__main__":
    main()

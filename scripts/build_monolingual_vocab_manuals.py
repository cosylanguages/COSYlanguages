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

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

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
                "id": "modulo-1", "file": "modulo-1.html", "title": "Modulo 1 · Persone e relazioni", "subtitle": "Saluti, famiglia e descrizioni fisiche", "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "la-famiglia", "title": "La famiglia", "subtitle": "I membri della famiglia e i parenti", "page_num": 1,
                        "words": [
                            {"word": "la madre", "def": "genitore femminile", "ex": "Mia madre si chiama Maria."},
                            {"word": "il padre", "def": "genitore maschile", "ex": "Mio padre lavora a Roma."},
                            {"word": "il fratello", "def": "figlio degli stessi genitori", "ex": "Ho un fratello maggiore."},
                            {"word": "la sorella", "def": "figlia degli stessi genitori", "ex": "Mia sorella studia all'università."}
                        ],
                        "check_items": ["Riconoscere i nomi dei familiari principali", "Usare i vocaboli della famiglia nelle frasi quotidiane"],
                        "quiz": [{"q": "Come si chiama la figlia degli stessi genitori?", "opts": ["la madre", "la sorella", "la zia"], "correct": 1, "explain": "La sorella è la figlia degli stessi genitori."}]
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
                "id": "modulo-1", "file": "modulo-1.html", "title": "Módulo 1 · La familia y la gente", "subtitle": "Relaciones familiares y descripciones", "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "la-familia", "title": "La familia", "subtitle": "Los miembros de la familia", "page_num": 1,
                        "words": [
                            {"word": "la madre", "def": "progenitora femenina", "ex": "Mi madre es muy amable."},
                            {"word": "el padre", "def": "progenitor masculino", "ex": "Mi padre trabaja en Madrid."},
                            {"word": "el hermano", "def": "hijo de los mismos padres", "ex": "Tengo un hermano menor."},
                            {"word": "la hermana", "def": "hija de los mismos padres", "ex": "Mi hermana vive en Sevilla."}
                        ],
                        "check_items": ["Identificar los términos de la familia", "Presentar a los miembros de la familia"],
                        "quiz": [{"q": "¿Cómo se llama el hijo de los mismos padres?", "opts": ["el hermano", "el tío", "el abuelo"], "correct": 0, "explain": "El hermano es el hijo de los mismos padres."}]
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
                "id": "modul-1", "file": "modul-1.html", "title": "Modul 1 · Familie und Personen", "subtitle": "Familienmitglieder und Bekannte", "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "die-familie", "title": "Die Familie", "subtitle": "Wichtige Familienmitglieder", "page_num": 1,
                        "words": [
                            {"word": "die Mutter", "def": "weiblicher Elternteil", "ex": "Meine Mutter wohnt in Berlin."},
                            {"word": "der Vater", "def": "männlicher Elternteil", "ex": "Mein Vater arbeitet viel."},
                            {"word": "der Bruder", "def": "männliches Geschwisterkind", "ex": "Ich habe einen Bruder."},
                            {"word": "die Schwester", "def": "weibliches Geschwisterkind", "ex": "Meine Schwester studiert."}
                        ],
                        "check_items": ["Namen der Familienmitglieder kennen", "Sätze über die Familie bilden"],
                        "quiz": [{"q": "Wie heißt der männliche Elternteil?", "opts": ["der Vater", "der Bruder", "der Onkel"], "correct": 0, "explain": "Der Vater ist der männliche Elternteil."}]
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
                "id": "modulo-1", "file": "modulo-1.html", "title": "Módulo 1 · Família e pessoas", "subtitle": "Membros da família e relações", "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "a-familia", "title": "A família", "subtitle": "Os membros da família", "page_num": 1,
                        "words": [
                            {"word": "a mãe", "def": "progenitora feminina", "ex": "A minha mãe vive em Lisboa."},
                            {"word": "o pai", "def": "progenitor masculino", "ex": "O meu pai gosta de ler."},
                            {"word": "o irmão", "def": "filho dos mesmos pais", "ex": "Tenho um irmão mais velho."},
                            {"word": "a irmã", "def": "filha dos mesmos pais", "ex": "A minha irmã trabalha no Porto."}
                        ],
                        "check_items": ["Nomear os membros da família", "Usar o vocabulário familiar em frases"],
                        "quiz": [{"q": "Qual é a palavra para o progenitor masculino?", "opts": ["o pai", "o irmão", "o tio"], "correct": 0, "explain": "O pai é o progenitor masculino."}]
                    }
                ]
            }
        ]
    },
    {
        "dir": "tatar-teli-leksikasy",
        "title": "Татар теле лексикасы (A0–A1)",
        "nav_title": "Татар теле лексикасы",
        "lang": "tt",
        "lead": "Татар теле сүзлеге буенча интерактив белешмәлек: тематик бүлекләр, карточкалар һәм флеш-тестлар.",
        "back_link": "COSYlanguages төп сайтына кайту",
        "sections": [
            {
                "id": "bulek-1", "file": "bulek-1.html", "title": "1 нче бүлек · Гаилә һәм кешеләр", "subtitle": "Гаилә әгъзалары һәм танышу сүзләре", "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "gaila", "title": "Гаилә", "subtitle": "Гаилә әгъзалары исемнәре", "page_num": 1,
                        "words": [
                            {"word": "әни", "def": "ана, гаиләдә иң якын кеше", "ex": "Әнием Казанда яши."},
                            {"word": "әти", "def": "ата, гаилә башлыгы", "ex": "Әтием эштә эшләде."},
                            {"word": "абый", "def": "өлкән абый яки ир-ат", "ex": "Минем абыем бар."},
                            {"word": "апа", "def": "өлкән апа яки хатын-кыз", "ex": "Минем апам мәктәптә укый."}
                        ],
                        "check_items": ["Гаилә әгъзалары сүзләрен белү", "Үз гаиләң турында сөйли алу"],
                        "quiz": [{"q": "Үзеңнән өлкән ир-ат туганыңны ничек атыйлар?", "opts": ["абый", "әти", "апа"], "correct": 0, "explain": "Өлкән ир-ат туганны абый дип атыйлар."}]
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
                "id": "bulek-1", "file": "bulek-1.html", "title": "1-се бүлек · Ғәилә һәм кешеләр", "subtitle": "Ғәилә ағзалары һәм һүҙлек", "stripe": "#1c9483",
                "topics": [
                    {
                        "slug": "ghaila", "title": "Ғәилә", "subtitle": "Ғәилә ағзаларының исемдәре", "page_num": 1,
                        "words": [
                            {"word": "әсәй", "def": "әсә, иң яҡын кеше", "ex": "Әсәйем Өфөлә йәшәй."},
                            {"word": "әтәй", "def": "атай, ғәилә башлығы", "ex": "Әтәйем эштә."},
                            {"word": "ағай", "def": "өлкән ағай", "ex": "Минең ағайым бар."},
                            {"word": "апай", "def": "өлкән апай", "ex": "Апайым мәктәптә уҡый."}
                        ],
                        "check_items": ["Ғәилә һүҙҙәрен аңлау", "Һүҙҙәрҙе дөрөҫ ҡулланыу"],
                        "quiz": [{"q": "Өлкән ир-ат туғанды нисек атайҙар?", "opts": ["ағай", "әтәй", "апай"], "correct": 0, "explain": "Өлкән ир-ат туғанды ағай тиҙәр."}]
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
        "lead": "Чăваш сăмахлăхĕн интерактивлă справочникĕ: тематика пайĕсем тата флеш-картсем.",
        "back_link": "COSYlanguages тĕп сайта таврăнмалли",
        "sections": [
            {
                "id": "pay-1", "file": "pay-1.html", "title": "1-мĕш пай · Çемье тата çынсем", "subtitle": "Çемье çыннисен ячĕсем", "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "semje", "title": "Çемье", "subtitle": "Çемье сăмахĕсем", "page_num": 1,
                        "words": [
                            {"word": "анне", "def": "анне, иң çывăх çын", "ex": "Анне ялта пурăнать."},
                            {"word": "атте", "def": "атте, çемье пуçĕ", "ex": "Атте ĕçре."},
                            {"word": "пичче", "def": "асли пичче", "ex": "Мăн пичче шкулта."}
                        ],
                        "check_items": ["Çемье сăмахĕсене пĕлни"],
                        "quiz": [{"q": "«Анне» сăмахĕ мĕне пĕлтерет?", "opts": ["анне", "атте", "пичче"], "correct": 0, "explain": "Анне — ачана çуратса ӳстерекен çын."}]
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
                "id": "mas-1", "file": "mas-1.html", "title": "Մաս 1 · Ընտանիք և մարդիկ", "subtitle": "Ընտանիքի անդամների անվանումները", "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "entanik", "title": "Ընտանիք", "subtitle": "Ընտանիքի բառապաշար", "page_num": 1,
                        "words": [
                            {"word": "մայր", "def": "մայրիկ, ընտանիքի կին ծնողը", "ex": "Մայրս Երևանում է ապրում:"},
                            {"word": "հայր", "def": "հայրիկ, ընտանիքի տղամարդ ծնողը", "ex": "Հայրս աշխատում է:"},
                            {"word": "եղբայր", "def": "նույն ծնողների տղա զավակը", "ex": "Ես եղբայր ունեմ:"},
                            {"word": "քույր", "def": "նույն ծնողների աղջիկ զավակը", "ex": "Քույրս սովորում է:"}
                        ],
                        "check_items": ["Ճանաչել ընտանիքի անդամների բառերը"],
                        "quiz": [{"q": "Ինչպե՞ս է կոչվում տղամարդ ծնողը:", "opts": ["հայր", "մայր", "քույր"], "correct": 0, "explain": "Տղամարդ ծնողը հայրն է:"}]
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
                "id": "nacili-1", "file": "nacili-1.html", "title": "ნაწილი 1 · ოჯახი და ადამიანები", "subtitle": "ოჯახის წევრების დასახელებები", "stripe": "#a3195b",
                "topics": [
                    {
                        "slug": "ojakhi", "title": "ოჯახი", "subtitle": "ოჯახის წევრები", "page_num": 1,
                        "words": [
                            {"word": "დედა", "def": "ქალი მშობელი", "ex": "დედა თბილისში ცხოვრობს."},
                            {"word": "მამა", "def": "კაცი მშობელი", "ex": "მამა მუშაობს."},
                            {"word": "ძმა", "def": "ვაჟი იმავე მშობლებისგან", "ex": "მე მყავს ძმა."},
                            {"word": "და", "def": "ქალიშვილი იმავე მშობლებისგან", "ex": "ჩემი და სწავლობს."}
                        ],
                        "check_items": ["ოჯახის წევრების სიტყვების ცნობა"],
                        "quiz": [{"q": "როგორ ჰქვია ქალ მშობელს?", "opts": ["დედა", "მამა", "ძმა"], "correct": 0, "explain": "ქალ მშობელს ჰქვია დედა."}]
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

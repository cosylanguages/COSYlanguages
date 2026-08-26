import os

LANGUAGES = [
    {
        "code": "en",
        "name": "English",
        "native_name": "English",
        "flag": "🇬🇧",
        "filename": "english-a0-a1.html",
        "title": "COSYlanguages English Live A0–A1 &middot; Learning System Hub",
        "h1": "English Learning Manuals",
        "desc": "The complete companion library for English (Level A0–A1): Grammar Manual &amp; Vocabulary Manual.",
        "grammar_title": "English Grammar Manual",
        "grammar_desc": "42 interactive topics organised into 4 core parts. Master sentence building, verb tenses, articles, pronouns, prepositions, and question forms.",
        "grammar_link": "../grammar/index.html",
        "grammar_btn": "Open Grammar Manual &rarr;",
        "vocab_title": "English Vocabulary Manual",
        "vocab_desc": "69 vocabulary themes across 15 parts covering every daily situation with example sentences, regional badges, and memory tricks.",
        "vocab_link": "../vocabulary-manual/index.html",
        "vocab_btn": "Open Vocabulary Manual &rarr;",
        "home_link": "../languages/en.html",
        "home_label": "COSYenglish Hub"
    },
    {
        "code": "fr",
        "name": "French",
        "native_name": "Français",
        "flag": "🇫🇷",
        "filename": "francaise-a0-a1.html",
        "title": "COSYlanguages Français Live A0–A1 &middot; Manuels d'Apprentissage",
        "h1": "Manuels d'Apprentissage du Français",
        "desc": "Le système d'apprentissage complet du français (Niveau A0–A1) : Manuel de Grammaire &amp; Manuel de Vocabulaire.",
        "grammar_title": "Grammaire Française",
        "grammar_desc": "Guide méthodique de la grammaire française avec schémas interactifs, règles de conjugaison, cartes de fautes et exercices pratiques.",
        "grammar_link": "../grammaire-francaise/index.html",
        "grammar_btn": "Ouvrir la Grammaire (60 Sujets) &rarr;",
        "vocab_title": "Vocabulaire Français",
        "vocab_desc": "Lexique thématique complet A0–A1 pour maîtriser le vocabulaire essentiel de la vie quotidienne et de la communication.",
        "vocab_link": "../languages/fr/vocabulary.html",
        "vocab_btn": "Ouvrir le Vocabulaire &rarr;",
        "home_link": "../languages/fr.html",
        "home_label": "COSYfrançais Hub"
    },
    {
        "code": "it",
        "name": "Italian",
        "native_name": "Italiano",
        "flag": "🇮🇹",
        "filename": "italiano-a0-a1.html",
        "title": "COSYlanguages Italiano Live A0–A1 &middot; Manuali di Apprendimento",
        "h1": "Manuali di Apprendimento dell'Italiano",
        "desc": "Il sistema completo di apprendimento della lingua italiana (Livello A0–A1): Manuale di Grammatica e Manuale di Lessico.",
        "grammar_title": "Grammatica Italiana",
        "grammar_desc": "Manuale interattivo di grammatica italiana con articoli, coniugazioni, preposizioni ed esercizi pratici per principianti.",
        "grammar_link": "../grammatica-italiana/index.html",
        "grammar_btn": "Apri la Grammatica &rarr;",
        "vocab_title": "Lessico Italiano",
        "vocab_desc": "Raccolta tematica di vocaboli italiani essenziali con schede visive, pronuncia ed esempi di conversazione quotidiana.",
        "vocab_link": "../lessico-italiano/index.html",
        "vocab_btn": "Apri il Lessico &rarr;",
        "home_link": "../languages/it.html",
        "home_label": "COSYitaliano Hub"
    },
    {
        "code": "es",
        "name": "Spanish",
        "native_name": "Español",
        "flag": "🇪🇸",
        "filename": "espanol-a0-a1.html",
        "title": "COSYlanguages Español Live A0–A1 &middot; Manuales de Aprendizaje",
        "h1": "Manuales de Aprendizaje de Español",
        "desc": "El sistema interactivo completo para aprender español (Nivel A0–A1): Manual de Gramática y Manual de Vocabulario.",
        "grammar_title": "Gramática Española",
        "grammar_desc": "Guía práctica de reglas gramaticales, conjugaciones de verbos, tiempos y estructuras oracionales en español.",
        "grammar_link": "../gramatica-espanola/index.html",
        "grammar_btn": "Abrir la Gramática &rarr;",
        "vocab_title": "Vocabulario Español",
        "vocab_desc": "Glosario temático e interactivo con las palabras más usadas, tarjetas de memoria y ejemplos de uso diario.",
        "vocab_link": "../vocabulario-espanol/index.html",
        "vocab_btn": "Abrir el Vocabulario &rarr;",
        "home_link": "../languages/es.html",
        "home_label": "COSYespañol Hub"
    },
    {
        "code": "de",
        "name": "German",
        "native_name": "Deutsch",
        "flag": "🇩🇪",
        "filename": "deutsch-a0-a1.html",
        "title": "COSYlanguages Deutsch Live A0–A1 &middot; Lernhandbücher",
        "h1": "Deutsche Lernhandbücher",
        "desc": "Das vollständige Lernsystem für Deutsch (Niveau A0–A1): Grammatik-Handbuch und Wortschatz-Handbuch.",
        "grammar_title": "Deutsche Grammatik",
        "grammar_desc": "Umfassende Erklärung der deutschen Grammatikregeln, Kasus (Fälle), Verbkonjugationen und Satzstrukturen.",
        "grammar_link": "../deutsche-grammatik/index.html",
        "grammar_btn": "Grammatik öffnen &rarr;",
        "vocab_title": "Deutscher Wortschatz",
        "vocab_desc": "Thematisches Wörterbuch für Anfänger mit wichtigen Begriffen, Artikelmarkierungen und praktischen Beispielsätzen.",
        "vocab_link": "../deutscher-wortschatz/index.html",
        "vocab_btn": "Wortschatz öffnen &rarr;",
        "home_link": "../languages/de.html",
        "home_label": "COSYdeutsch Hub"
    },
    {
        "code": "pt",
        "name": "Portuguese",
        "native_name": "Português",
        "flag": "🇵🇹",
        "filename": "portugues-a0-a1.html",
        "title": "COSYlanguages Português Live A0–A1 &middot; Manuais de Aprendizagem",
        "h1": "Manuais de Aprendizagem de Português",
        "desc": "O sistema completo de aprendizagem de português (Nível A0–A1): Manual de Gramática e Manual de Vocabulário.",
        "grammar_title": "Gramática Portuguesa",
        "grammar_desc": "Manual prático com as regras essenciais da língua portuguesa, tempos verbais, pronomes e estruturas de frases.",
        "grammar_link": "../gramatica-portuguesa/index.html",
        "grammar_btn": "Abrir a Gramática &rarr;",
        "vocab_title": "Vocabulário Português",
        "vocab_desc": "Glosário temático interativo com vocabulário do dia a dia, frases de exemplo e cartões de memorização.",
        "vocab_link": "../vocabulario-portugues/index.html",
        "vocab_btn": "Abrir o Vocabulário &rarr;",
        "home_link": "../languages/pt.html",
        "home_label": "COSYportuguês Hub"
    },
    {
        "code": "ru",
        "name": "Russian",
        "native_name": "Русский",
        "flag": "🇷🇺",
        "filename": "russkiy-a0-a1.html",
        "title": "COSYlanguages Русский язык Live А0–А1 &middot; Учебные пособия",
        "h1": "Учебные пособия по русскому языку",
        "desc": "Полная обучающая система для изучения русского языка (Уровень А0–А1): Грамматика и Лексика.",
        "grammar_title": "Грамматика русского языка",
        "grammar_desc": "60 интерактивных тем: падежная система, спряжение глаголов, роды существительных и построение предложений.",
        "grammar_link": "../grammatika-russkogo-yazyka/index.html",
        "grammar_btn": "Открыть грамматику (60 тем) &rarr;",
        "vocab_title": "Лексика русского языка",
        "vocab_desc": "21 тематический раздел с карточками, аудио-произношением, примерами и поиском повседневных слов.",
        "vocab_link": "../leksika-russkogo-yazyka/index.html",
        "vocab_btn": "Открыть лексику (21 раздел) &rarr;",
        "home_link": "../languages/ru.html",
        "home_label": "COSYрусский Hub"
    },
    {
        "code": "br",
        "name": "Breton",
        "native_name": "Brezhoneg",
        "flag": "🏴",
        "filename": "brezhoneg-a0-a1.html",
        "title": "COSYlanguages Brezhoneg Live A0–A1 &middot; Ar Reizhiad Deskiñ Klok",
        "h1": "Levrioù Deskiñ Brezhoneg",
        "desc": "Ar Reizhiad Deskiñ Klok evit ar Brezhoneg (Live A0–A1): Levr Yezhadur ha Levr Gerioù &mdash; skrivet e brezhoneg hepken.",
        "grammar_title": "Levr Yezhadur Brezhoneg",
        "grammar_desc": "Ar reizhiad yezhadur brezhonek reoliek, savet bloc'h dre vloc'h. 19 poent yezhadur pennañ gant kemmadurioù ha taolennoù liv.",
        "grammar_link": "../yezhadur-brezhoneg/index.html",
        "grammar_btn": "Digeriñ al Levr Yezhadur (19 Poent) &rarr;",
        "vocab_title": "Levr Geriaoueg Brezhoneg",
        "vocab_desc": "Ar geriaoueg klok temaet (19 tem), gant merkoù gouenn (GOUR/GWREG), distagadurioù IPA ha frazennoù skouer.",
        "vocab_link": "../geriou-brezhoneg/index.html",
        "vocab_btn": "Digeriñ al Levr Gerioù (19 Tem) &rarr;",
        "home_link": "../languages/br.html",
        "home_label": "COSYbrezhoneg Hub"
    },
    {
        "code": "tt",
        "name": "Tatar",
        "native_name": "Татарча",
        "flag": "🏴",
        "filename": "tatar-a0-a1.html",
        "title": "COSYlanguages Татар теле Live А0–А1 &middot; Өйрәнү кулланмалары",
        "h1": "Татар теле өйрәнү кулланмалары",
        "desc": "Татар телен өйрәнү өчен тулы интерактив система (А0–А1 дәрәҗәсе): Грамматика һәм Лексика.",
        "grammar_title": "Татар теле грамматикасы",
        "grammar_desc": "Татар теле грамматикасының төп кагыйдәләре, килешләр, фигыль кушымчалары һәм җөмлә төзелеше.",
        "grammar_link": "../tatar-teli-grammatikasy/index.html",
        "grammar_btn": "Грамматиканы ачу &rarr;",
        "vocab_title": "Татар теле лексикасы",
        "vocab_desc": "Көндәлек тормышта кулланыла торган төп сүзләр, тематик карточкалар һәм мисаллар.",
        "vocab_link": "../tatar-teli-leksikasy/index.html",
        "vocab_btn": "Лексиканы ачу &rarr;",
        "home_link": "../languages/tt.html",
        "home_label": "COSYтатарча Hub"
    },
    {
        "code": "ba",
        "name": "Bashkir",
        "native_name": "Башҡортса",
        "flag": "🏴",
        "filename": "bashqort-a0-a1.html",
        "title": "COSYlanguages Башҡорт теле Live А0–А1 &middot; Уҡыу ҡулланмалары",
        "h1": "Башҡорт теле уҡыу ҡулланмалары",
        "desc": "Башҡорт телен өйрәнеү өсөн тулы система (А0–А1 дәрәжәһе): Грамматика һәм Лексика.",
        "grammar_title": "Башҡорт теле грамматикаһы",
        "grammar_desc": "Башҡорт теле грамматикаһының төп ҡағиҙәләре, килештәр, ҡушымсалар һәм һөйләм төҙөлөшө.",
        "grammar_link": "../bashqort-tele-grammatikahy/index.html",
        "grammar_btn": "Грамматиканы асырға &rarr;",
        "vocab_title": "Башҡорт теле лексикахы",
        "vocab_desc": "Тематик һүҙлек, көндәлек һүҙҙәр, карточкалар һәм мисалдар.",
        "vocab_link": "../bashqort-tele-leksikahy/index.html",
        "vocab_btn": "Лексиканы асырға &rarr;",
        "home_link": "../languages/ba.html",
        "home_label": "COSYбашҡортса Hub"
    },
    {
        "code": "cv",
        "name": "Chuvash",
        "native_name": "Чӑвашла",
        "flag": "🏴",
        "filename": "chavash-a0-a1.html",
        "title": "COSYlanguages Чӑваш пӗлӗвӗ Live А0–А1 &middot; Вӗренӳ кӗнекисем",
        "h1": "Чӑваш пӗлӗвӗн кӗнекисем",
        "desc": "Чӑваш чӗлхине вӗренмелли пӗтӗмӗшле система (А0–А1 шайӗ): Грамматика тата Лексика.",
        "grammar_title": "Чӑваш грамматики",
        "grammar_desc": "Чӑваш чӗлхин грамматика правилисем, падежсем, глагол аффиксӗсем тата предложени тытӑмӗ.",
        "grammar_link": "../chavash-grammatika/index.html",
        "grammar_btn": "Грамматикана уҫмалла &rarr;",
        "vocab_title": "Чӑваш лексикӗ",
        "vocab_desc": "Куп усӑ куракан сӑмахсем, тематика карточкисем тата тӗслӗхсем.",
        "vocab_link": "../chavash-leksiki/index.html",
        "vocab_btn": "Лексикана уҫмалла &rarr;",
        "home_link": "../languages/coming-soon.html",
        "home_label": "COSYчӑвашла Hub"
    },
    {
        "code": "hy",
        "name": "Armenian",
        "native_name": "Հայերեն",
        "flag": "🇦🇲",
        "filename": "hayots-a0-a1.html",
        "title": "COSYlanguages Հայերեն Live A0–A1 &middot; Ուսումնական ձեռնարկներ",
        "h1": "Հայոց լեզվի ուսումնական ձեռնարկներ",
        "desc": "Հայերենի ուսուցման ամբողջական համակարգ (A0–A1 մակարդակ)՝ Քերականություն և Բառապաշար:",
        "grammar_title": "Հայոց լեզվի քերականություն",
        "grammar_desc": "Հայերեն քերականության հիմնական կանոնները, հոլովները, բայերի խոնարհումը և նախադասության կառուցվածքը:",
        "grammar_link": "../hayots-lezvi-kerakanutyun/index.html",
        "grammar_btn": "Բացել Քերականությունը &rarr;",
        "vocab_title": "Հայոց լեզվի բառապաշար",
        "vocab_desc": "Թեմատիկ բառարան, ամենօրյա բառեր, հիշողության քարտեր և օրինակներ:",
        "vocab_link": "../hayots-lezvi-barapashar/index.html",
        "vocab_btn": "Բացել Բառապաշարը &rarr;",
        "home_link": "../languages/hy.html",
        "home_label": "COSYհայերեն Hub"
    },
    {
        "code": "ka",
        "name": "Georgian",
        "native_name": "ქართული",
        "flag": "🇬🇪",
        "filename": "qartuli-a0-a1.html",
        "title": "COSYlanguages ქართული ენა Live A0–A1 &middot; სახელმძღვანელოები",
        "h1": "ქართული ენის სახელმძღვანელოები",
        "desc": "ქართული ენის შესასწავლი სრული სისტემა (A0–A1 დონე): გრამატიკა და ლექსიკა.",
        "grammar_title": "ქართული გრამატიკა",
        "grammar_desc": "ქართული ენის გრამატიკის ძირითადი წესები, ბრუნვები, ზმნები და წინადადების აგებულება.",
        "grammar_link": "../qartuli-gramatika/index.html",
        "grammar_btn": "გრამატიკის გახსნა &rarr;",
        "vocab_title": "ქართული ლექსიკა",
        "vocab_desc": "თემატური ლექსიკონი, ყოველდღიური სიტყვები, ბარათები და მაგალითები.",
        "vocab_link": "../qartuli-leqsika/index.html",
        "vocab_btn": "ლექსიკის გახსნა &rarr;",
        "home_link": "../languages/ka.html",
        "home_label": "COSYქართული Hub"
    },
    {
        "code": "el",
        "name": "Greek",
        "native_name": "Ελληνικά",
        "flag": "🇬🇷",
        "filename": "ellinika-a0-a1.html",
        "title": "COSYlanguages Ελληνικά Live A0–A1 &middot; Εγχειρίδια Εκμάθησης",
        "h1": "Εγχειρίδια Εκμάθησης Ελληνικών",
        "desc": "Πλήρες σύστημα εκμάθησης ελληνικών (Επίπεδο A0–A1): Ελληνική Γραμματική &amp; Ελληνικό Λεξιλόγιο.",
        "grammar_title": "Ελληνική Γραμματική",
        "grammar_desc": "Οδηγός ελληνικής γραμματικής: πτώσεις, κλίση ρημάτων, άρθρα και σύνταξη για αρχάριους.",
        "grammar_link": "../languages/el/grammar.html",
        "grammar_btn": "Άνοιγμα Γραμματικής &rarr;",
        "vocab_title": "Ελληνικό Λεξιλόγιο",
        "vocab_desc": "Θεματικό λεξιλόγιο για την καθημερινή επικοινωνία με κάρτες και παραδείγματα.",
        "vocab_link": "../languages/el/vocabulary.html",
        "vocab_btn": "Άνοιγμα Λεξιλογίου &rarr;",
        "home_link": "../languages/el.html",
        "home_label": "COSYελληνικά Hub"
    }
]

TEMPLATE = """<!doctype html>
<html lang="{code}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc_meta}">
<link rel="stylesheet" href="../css/lang-pages.css">
<link rel="stylesheet" href="../css/lang-accents.css">
<link rel="stylesheet" href="../css/mobile.css">
<style>
  :root {{
    --brand-teal: #0f382c;
    --brand-teal-light: #e3f5ef;
    --accent-gold: #c99a1f;
    --paper-bg: #fcfbf7;
    --card-bg: #ffffff;
    --text-ink: #13231e;
    --text-soft: #3c544c;
    --line-border: #e3e0d5;
  }}
  body {{
    background: var(--paper-bg);
    color: var(--text-ink);
    font-family: 'Inter', system-ui, sans-serif;
    margin: 0;
    line-height: 1.6;
  }}
  .topbar {{
    background: var(--brand-teal);
    color: #fff;
    padding: 12px 24px;
    position: sticky;
    top: 0;
    z-index: 100;
  }}
  .topbar-inner {{
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }}
  .topbar a {{
    color: #eafaf5;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
  }}
  .hero-hub {{
    background: linear-gradient(135deg, var(--brand-teal), #1c6b54);
    color: #fff;
    padding: 60px 24px 50px;
    text-align: center;
  }}
  .hero-hub h1 {{
    font-family: 'Poppins', system-ui, sans-serif;
    font-size: clamp(32px, 5.5vw, 48px);
    margin: 10px 0;
  }}
  .hero-hub p {{
    max-width: 680px;
    margin: 0 auto 24px;
    font-size: 18px;
    opacity: 0.9;
  }}
  .hub-container {{
    max-width: 1040px;
    margin: -30px auto 60px;
    padding: 0 24px;
  }}
  .books-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }}
  .book-card {{
    background: var(--card-bg);
    border: 1px solid var(--line-border);
    border-radius: 18px;
    padding: 24px;
    box-shadow: 0 8px 24px -12px rgba(19, 35, 30, 0.15);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .book-card:hover {{
    transform: translateY(-4px);
    box-shadow: 0 14px 32px -12px rgba(19, 35, 30, 0.25);
  }}
  .book-card .badge {{
    display: inline-block;
    padding: 4px 12px;
    border-radius: 99px;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 12px;
  }}
  .book-card .badge.active {{
    background: var(--brand-teal-light);
    color: var(--brand-teal);
  }}
  .book-card h2 {{
    font-family: 'Poppins', system-ui, sans-serif;
    font-size: 22px;
    margin: 0 0 8px;
  }}
  .book-card p {{
    color: var(--text-soft);
    font-size: 14.5px;
    margin-bottom: 20px;
  }}
  .book-card .btn-open {{
    display: inline-block;
    text-align: center;
    background: var(--brand-teal);
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 14.5px;
    padding: 12px 20px;
    border-radius: 12px;
    transition: background 0.2s;
  }}
  .book-card .btn-open:hover {{
    background: #1c6b54;
  }}
</style>
</head>
<body>

<header class="topbar">
  <div class="topbar-inner">
    <a href="{home_link}">&larr; {home_label}</a>
    <a href="index.html">All Manuals Hub &middot; COSYlanguages</a>
  </div>
</header>

<section class="hero-hub">
  <span style="background: rgba(255,255,255,0.15); padding: 5px 14px; border-radius: 99px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
    {flag} {native_name} &middot; Level A0&ndash;A1
  </span>
  <h1>{h1}</h1>
  <p>{desc}</p>
</section>

<main class="hub-container">
  <div class="books-grid">

    <!-- Grammar Manual Card -->
    <div class="book-card">
      <div>
        <span class="badge active">BOOK 1 &middot; GRAMMAR MANUAL</span>
        <h2>{grammar_title}</h2>
        <p>{grammar_desc}</p>
      </div>
      <a href="{grammar_link}" class="btn-open">{grammar_btn}</a>
    </div>

    <!-- Vocabulary Manual Card -->
    <div class="book-card">
      <div>
        <span class="badge active">BOOK 2 &middot; VOCABULARY MANUAL</span>
        <h2>{vocab_title}</h2>
        <p>{vocab_desc}</p>
      </div>
      <a href="{vocab_link}" class="btn-open">{vocab_btn}</a>
    </div>

  </div>
</main>

<footer style="background: var(--brand-teal); color: #c9d8d4; padding: 30px 24px; text-align: center; font-size: 13.5px;">
  <div>&copy; 2026 COSYlanguages &middot; {native_name} Manuals Hub &middot; Level A0&ndash;A1</div>
</footer>

</body>
</html>
"""

os.makedirs("manuals", exist_ok=True)

for lang in LANGUAGES:
    content = TEMPLATE.format(
        code=lang["code"],
        title=lang["title"],
        desc_meta=lang["desc"].replace("&amp;", "&").replace("&mdash;", "-"),
        home_link=lang["home_link"],
        home_label=lang["home_label"],
        flag=lang["flag"],
        native_name=lang["native_name"],
        h1=lang["h1"],
        desc=lang["desc"],
        grammar_title=lang["grammar_title"],
        grammar_desc=lang["grammar_desc"],
        grammar_link=lang["grammar_link"],
        grammar_btn=lang["grammar_btn"],
        vocab_title=lang["vocab_title"],
        vocab_desc=lang["vocab_desc"],
        vocab_link=lang["vocab_link"],
        vocab_btn=lang["vocab_btn"]
    )
    filepath = os.path.join("manuals", lang["filename"])
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Wrote {filepath}")

# Now generate manuals/index.html (Master Directory Page for All Languages)
MASTER_TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages All Grammar &amp; Vocabulary Manuals Master Directory &middot; Level A0–A1</title>
<meta name="description" content="Complete master directory of all Grammar and Vocabulary manuals across all 14 languages supported by COSYlanguages including Chuvash.">
<link rel="stylesheet" href="../vocabulary-manual/assets/style.css">
<style>
  .manuals-hero { background: var(--teal-900); color: #eafaf5; padding: 64px 0 56px; }
  .hub-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin: 34px 0; }
  .hub-card {
    background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-l);
    padding: 24px; box-shadow: var(--shadow-card); position: relative; overflow: hidden;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .hub-card h2 { font-family: var(--font-display); font-weight: 800; font-size: 22px; margin: 0 0 10px; display: flex; align-items: center; gap: 8px; }
  .hub-card p { color: var(--ink-soft); font-size: 14.5px; margin: 0 0 16px; flex-grow: 1; }
  .hub-card .link-group { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; }
  .hub-card .btn-link {
    display: inline-flex; align-items: center; justify-content: space-between;
    font-family: var(--font-display); font-weight: 700; font-size: 14px; text-decoration: none;
    padding: 10px 16px; border-radius: var(--radius-m); color: var(--teal-900); background: var(--teal-100);
    transition: all .15s ease; border: 1px solid var(--line);
  }
  .hub-card .btn-link:hover { background: var(--teal-700); color: #fff; border-color: var(--teal-700); }
  .hub-card .btn-main-hub {
    display: inline-flex; align-items: center; justify-content: center;
    font-family: var(--font-display); font-weight: 700; font-size: 14.5px; text-decoration: none;
    padding: 12px 18px; border-radius: var(--radius-m); color: #fff; background: var(--teal-700);
    margin-bottom: 12px; transition: background .15s ease;
  }
  .hub-card .btn-main-hub:hover { background: var(--teal-900); }
</style>
</head>
<body>

<header class="topbar">
 <div class="topbar-inner">
 <a class="brand" href="../index.html">
 <span class="brand-mark">cl</span>
 <span class="brand-name">COSY<em>languages</em> &middot; Master Manuals Directory</span>
 </a>
 <nav class="topbar-nav">
 <a class="active" href="index.html">All Manuals</a>
 <a href="../index.html">&larr; Back Home</a>
 </nav>
 </div>
</header>

<section class="hero manuals-hero">
 <div class="container">
 <span class="hero-kicker">COSYlanguages &middot; All 14 Languages Master Directory</span>
 <h1>Grammar &amp; Vocabulary Manuals,<br>all in one place.</h1>
 <p class="lead">Complete interactive reference library: access combined Level A0–A1 hubs, standalone Grammar Manuals, and Vocabulary Manuals for every language we support.</p>
 </div>
</section>

<main class="container">
 <div class="page-head" style="padding-top:40px;">
 <span class="eyebrow">Level A0&ndash;A1 Interactive Companions</span>
 <h1 style="font-size:28px;">Select Your Target Language</h1>
 <p class="subtitle">Choose a language below to access its combined 1-page hub or jump directly to its Grammar or Vocabulary manual.</p>
 </div>

 <div class="hub-grid">
"""

cards_html = ""
for lang in LANGUAGES:
    cards_html += f"""  <div class="hub-card">
   <div>
    <h2>{lang['flag']} {lang['name']} <span style="font-size:14px; font-weight:400; color:var(--ink-soft);">({lang['native_name']})</span></h2>
    <p>{lang['desc']}</p>
   </div>
   <div>
    <a href="{lang['filename']}" class="btn-main-hub">Open {lang['name']} Combined Hub (1 Page) &rarr;</a>
    <div class="link-group">
      <a href="{lang['grammar_link']}" class="btn-link"><span>📘 Grammar Manual</span> <span>&rarr;</span></a>
      <a href="{lang['vocab_link']}" class="btn-link"><span>📚 Vocabulary Manual</span> <span>&rarr;</span></a>
    </div>
   </div>
  </div>
"""

MASTER_FOOTER = """ </div>
</main>

<footer class="site">
 <div class="container">
 <div>COSYlanguages &middot; All Grammar &amp; Vocabulary Manuals Master Directory &middot; Level A0&ndash;A1</div>
 <div><a href="../index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>
<script src="../vocabulary-manual/assets/app.js"></script>
</body>
</html>
"""

with open("manuals/index.html", "w", encoding="utf-8") as f:
    f.write(MASTER_TEMPLATE + cards_html + MASTER_FOOTER)

print("Wrote manuals/index.html")

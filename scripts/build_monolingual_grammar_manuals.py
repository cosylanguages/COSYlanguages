#!/usr/bin/env python3
"""
Generator script for COSYlanguages Monolingual A0-A1 Interactive Web Edition Grammar Manuals.
Builds self-contained manuals for:
1. grammatica-italiana (Italian)
2. gramatica-espanola (Spanish)
3. deutsche-grammatik (German)
4. gramatica-portuguesa (Portuguese)
5. tatar-teli-grammatikasy (Tatar)
6. bashqort-tele-grammatikahy (Bashkir)
7. chavash-grammatika (Chuvash)
8. hayots-lezvi-kerakanutyun (Armenian)
9. qartuli-gramatika (Georgian)
"""

import os
import json

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Universal CSS Shared Blueprint for Monolingual Manuals
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

# Universal JS Blueprint for Monolingual Manuals
SHARED_JS = """// COSYlanguages Monolingual Manual Interactivity Engine
document.addEventListener('DOMContentLoaded', () => {
  // Mistake Flip Cards
  document.querySelectorAll('.mflip').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('revealed'));
  });

  // Quiz Panel Engine
  document.querySelectorAll('.quiz-panel').forEach(panel => {
    const quizData = JSON.parse(panel.dataset.quiz || '[]');
    let score = 0;
    const scoreEl = panel.querySelector('.quiz-score');

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

  // Interactive Sentence Builder
  const sb = document.getElementById('sentence-builder');
  if (sb) {
    const slots = sb.querySelectorAll('.slot');
    const out = sb.querySelector('.sentence-out');
    const selected = {};

    sb.querySelectorAll('.pool button').forEach(btn => {
      btn.addEventListener('click', () => {
        const role = btn.dataset.role;
        const word = btn.dataset.word;
        selected[role] = word;

        const slot = sb.querySelector(`.slot[data-role="${role}"]`);
        if (slot) slot.textContent = word;

        const parts = Array.from(slots).map(s => selected[s.dataset.role] || '...').join(' ');
        if (out) out.textContent = parts;
      });
    });
  }
});
"""

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
                "id": "parte-1", "file": "parte-1.html", "title": "Parte 1 · Nomi, articoli e genere", "subtitle": "Genere maschile e femminile, articoli determinativi e singolare/plurale", "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "genere-nomi", "title": "Genere dei nomi", "subtitle": "Tutti i nomi italiani sono maschili o femminili", "page_num": 1, "vocab_theme": "Famiglia e casa",
                        "table_head": ["Genere", "Finale singolare", "Esempio singolare", "Finale plurale", "Esempio plurale"],
                        "table_rows": [
                            ["Maschile", "-o", "ragazzo", "-i", "ragazzi"],
                            ["Femminile", "-a", "ragazza", "-e", "ragazze"],
                            ["Misto", "-e", "studente / chiave", "-i", "studenti / chiavi"]
                        ],
                        "attention": "Osserva la terminazione del nome: -o è solitamente maschile, -a è femminile.",
                        "mnemonic": "Immagina i nomi come famiglie: la famiglia in -o/i e la famiglia in -a/e.",
                        "mistakes": [{"wrong": "la ragazzo", "right": "il ragazzo"}],
                        "check_items": ["Riconoscere il genere dalla desinenza -o / -a", "Formare il plurale dei nomi in -o e -a"],
                        "quiz": [{"q": "Qual è il plurale di «ragazza»?", "opts": ["ragazzi", "ragazze", "ragazzo"], "correct": 1, "explain": "I nomi femminili in -a formano il plurale in -e."}]
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
                        "slug": "genero-sustantivos", "title": "El género de los sustantivos", "subtitle": "Sustantivos masculinos y femeninos en español", "page_num": 1, "vocab_theme": "Personas y objetos",
                        "table_head": ["Género", "Terminación", "Ejemplo", "Plural"],
                        "table_rows": [
                            ["Masculino", "-o", "el libro", "los libros"],
                            ["Femenino", "-a", "la mesa", "las mesas"]
                        ],
                        "attention": "Los sustantivos que terminan en -o suelen ser masculinos; los que terminan en -a son femeninos.",
                        "mnemonic": "Recuerda: el chico / la chica; el libro / la mesa.",
                        "mistakes": [{"wrong": "la libro", "right": "el libro"}],
                        "check_items": ["Identificar sustantivos masculinos y femeninos", "Usar el artículo correcto"],
                        "quiz": [{"q": "¿Cuál es el artículo para «mesa»?", "opts": ["el", "la", "los"], "correct": 1, "explain": "Mesa es un sustantivo femenino."}]
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
                "id": "kapitel-1", "file": "kapitel-1.html", "title": "Kapitel 1 · Nomen und Artikel", "subtitle": "Die drei Geschlechter (der, die, das) und der Nominativ", "stripe": "#1c8f56",
                "topics": [
                    {
                        "slug": "artikel-und-genus", "title": "Artikel und Genus", "subtitle": "Maskulin, Feminin und Neutral im Deutschen", "page_num": 1, "vocab_theme": "Alltag und Gegenstände",
                        "table_head": ["Genus", "Bestimmter Artikel", "Unbestimmter Artikel", "Beispiel"],
                        "table_rows": [
                            ["Maskulin", "der", "ein", "der Mann"],
                            ["Feminin", "die", "eine", "die Frau"],
                            ["Neutral", "das", "ein", "das Kind"]
                        ],
                        "attention": "Jedes Nomen im Deutschen hat ein festes Grammatikgeschlecht: der, die oder das.",
                        "mnemonic": "Lerne jedes neue Wort immer direkt zusammen mit seinem Artikel!",
                        "mistakes": [{"wrong": "das Mann", "right": "der Mann"}],
                        "check_items": ["Die drei bestimmten Artikel nennen", "Nomen immer mit Artikel lernen"],
                        "quiz": [{"q": "Welcher Artikel gehört zu «Frau»?", "opts": ["der", "die", "das"], "correct": 1, "explain": "Frau ist feminin: die Frau."}]
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
                        "slug": "genero-dos-substantivos", "title": "Gênero dos substantivos", "subtitle": "Substantivos masculinos e femininos em português", "page_num": 1, "vocab_theme": "Família e objetos",
                        "table_head": ["Gênero", "Terminação", "Exemplo", "Plural"],
                        "table_rows": [
                            ["Masculino", "-o", "o livro", "os livros"],
                            ["Feminino", "-a", "a casa", "as casas"]
                        ],
                        "attention": "Substantivos terminados em -o são masculinos; terminados em -a são femininos.",
                        "mnemonic": "Associe sempre o artigo ao substantivo: o rapaz / a rapariga.",
                        "mistakes": [{"wrong": "a livro", "right": "o livro"}],
                        "check_items": ["Identificar o gênero dos substantivos", "Formar o plural dos artigos"],
                        "quiz": [{"q": "Qual é o artigo para «casa»?", "opts": ["o", "a", "os"], "correct": 1, "explain": "Casa é um substantivo feminino."}]
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
                "id": "bulek-1", "file": "bulek-1.html", "title": "1 нче бүлек · Сингармонизм һәм килешләр", "subtitle": "Алынма сузыклар, сонор авазлар һәм татар теленең 6 килеше", "stripe": "#3562e0",
                "topics": [
                    {
                        "slug": "singarmonizm", "title": "Сузыклар сингарнизмы", "subtitle": "Калын һәм чечкә сузыклар кагыйдәсе", "page_num": 1, "vocab_theme": "Сүзләр һәм тавышлар",
                        "table_head": ["Төр", "Сузыклар", "Мисал"],
                        "table_rows": [
                            ["Калын сузыклар", "а, о, у, ы", "кала (шәһәр)"],
                            ["Нечкә сузыклар", "ә, ө, ү, и, е", "өй (йорт)"]
                        ],
                        "attention": "Сүздәге беренче сузык калын булса, соңгы кушымчалар да калын була.",
                        "mnemonic": "Калын сүзгә калын кушымча, нечкә сүзгә нечкә кушымча ябыша.",
                        "mistakes": [{"wrong": "калага (нечкә)", "right": "калага (калын)"}],
                        "check_items": ["Калын һәм нечкә сузыкларны аера белү"],
                        "quiz": [{"q": "«Өй» сүзенә нинди кушымча ябыша?", "opts": ["-да", "-дә", "-та"], "correct": 1, "explain": "Өй — нечкә сүз, шуңа кәрәк -дә кушымчасы."}]
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
                "id": "bulek-1", "file": "bulek-1.html", "title": "1-се бүлек · Өндәр һәм килештәр", "subtitle": "Дөөрөҫ һөйләшенеү, аффикстар һәм башҡорт теленең килештәре", "stripe": "#1c9483",
                "topics": [
                    {
                        "slug": "haudhaktar-hahem-affikstar", "title": "Һуҙынҡылар һәм аффикстар", "subtitle": "Башҡорт телендә сингармонизм кағиҙәһе", "page_num": 1, "vocab_theme": "Тәүге һүҙҙәр",
                        "table_head": ["Төр", "Һуҙынҡылар", "Мисал"],
                        "table_rows": [
                            ["Ҡалындар", "а, о, у, ы", "ҡала (шәһәр)"],
                            ["Нескә һуҙынҡылар", "ә, ө, ү, и, е", "өй (йорт)"]
                        ],
                        "attention": "Һүҙҙең һуңғы һуҙынҡыһы аффикстың төрөн билдәләй.",
                        "mnemonic": "Ҡалын өнгә — ҡалын аффикс!",
                        "mistakes": [{"wrong": "ҡалаға (нескә)", "right": "ҡалаға (ҡалын)"}],
                        "check_items": ["Һуҙынҡыларҙың бәйләнешен аңлау"],
                        "quiz": [{"q": "«Ҡала» һүҙенә ниндәй аффикс ҡушыла?", "opts": ["-ға", "-гә", "-тә"], "correct": 0, "explain": "Ҡала — ҡалын һүҙ."}]
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
                "id": "pay-1", "file": "pay-1.html", "title": "1-мĕш пай · Сасăсем тата падежсем", "subtitle": "Чăваш чĕлхин сингармонизмĕ тата 8 падежĕ", "stripe": "#c9740a",
                "topics": [
                    {
                        "slug": "sasamssam-tata-singarmonizm", "title": "Сасăсем тата сингармонизм", "subtitle": "Хытă тата çемçе сасăсен калăпăшĕ", "page_num": 1, "vocab_theme": "Сăмахсем",
                        "table_head": ["Тĕсĕ", "Уçă сасăсем", "Тĕслĕх"],
                        "table_rows": [
                            ["Хытă сасăсем", "а, о, у, ы", "ула (яла)"],
                            ["Çемçе сасăсем", "ĕ, ĕ, ӳ, и", "çĕр (çĕршыв)"]
                        ],
                        "attention": "Сăмахри юлашки уçă сасă аффикс тĕсне кăтартать.",
                        "mnemonic": "Хытă сасма хытă аффикс хушăнать.",
                        "mistakes": [{"wrong": "яла (çемçе)", "right": "яла (хытă)"}],
                        "check_items": ["Уçă сасăсен уйрăмлăхĕсене пĕлни"],
                        "quiz": [{"q": "«Ял» сăмахне мĕнле аффикс хушăнать?", "opts": ["-а", "-е", "-и"], "correct": 0, "explain": "Ял — хытă сасăллă сăмах."}]
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
                "id": "mas-1", "file": "mas-1.html", "title": "Մաս 1 · Գոյական և հոլովներ", "subtitle": "Հայերենի 7 հոլովները և հոդերը", "stripe": "#7c4fd6",
                "topics": [
                    {
                        "slug": "goyakan-yev-hoder", "title": "Գոյական անուն և որոշյալ հոդեր", "subtitle": "Որոշյալ -ը / -ն հոդերի կիրառությունը", "page_num": 1, "vocab_theme": "Բառեր և ընտանիք",
                        "table_head": ["Տեսակ", "Վերջավորություն", "Օրինակ"],
                        "table_rows": [
                            ["Անորոշ", "առանց հոդի", "տուն (տուն)"],
                            ["Որոշյալ (բաղաձայնից հետո)", "-ը", "տունը"],
                            ["Որոշյալ (ձայնավորից հետո)", "-ն", "կատուն"]
                        ],
                        "attention": "Բաղաձայնով ավարտվող բառերին ավելանում է -ը, ձայնավորով ավարտվողներին՝ -ն։",
                        "mnemonic": "Հիշեք՝ տունը (բաղաձայն), կատուն (ձայնավոր)։",
                        "mistakes": [{"wrong": "տունն (բաղաձայնից հետո)", "right": "տունը"}],
                        "check_items": ["Որոշյալ -ը և -ն հոդերը ճիշտ կիրառել"],
                        "quiz": [{"q": "Ո՞ր հոդն է ավելանում «կատու» բառին։", "opts": ["-ը", "-ն", "-ա"], "correct": 1, "explain": "Ձայնավորով ավարտվող բառերն ստանում են -ն հոդը։"}]
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
                        "slug": "brunvebi", "title": "არსებითი სახელის ბრუნვები", "subtitle": "სახელობითი, მოთხრობითი და მიცემითი ბრუნვები", "page_num": 1, "vocab_theme": "სიტყვები და ოჯახი",
                        "table_head": ["ბრუნვა", "ნიშანი", "მაგალითი"],
                        "table_rows": [
                            ["სახელობითი", "-ი", "კაცი"],
                            ["მოთხრობითი", "-მ / -მა", "კაცმა"],
                            ["მიცემითი", "-ს", "კაცს"]
                        ],
                        "attention": "ქართულ ენაში არსებით სახელს 7 ბრუნვა აქვს.",
                        "mnemonic": "დაიხსომეთ: კაცი (სახ.), კაცმა (მოთხ.), კაცს (მიც.).",
                        "mistakes": [{"wrong": "კაცი წერს (მოთხრობითის გარეშე წარსულში)", "right": "კაცმა დაწერა"}],
                        "check_items": ["ბრუნვის ნიშნების ცნობა არსებით სახელებში"],
                        "quiz": [{"q": "რა არის მოთხრობითი ბრუნვის ნიშანი?", "opts": ["-ი", "-მ / -მა", "-ს"], "correct": 1, "explain": "მოთხრობითი ბრუნვის ნიშანია -მ ან -მა."}]
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

    # Write Assets
    with open(os.path.join(assets_dir, "style.css"), "w", encoding="utf-8") as f:
        f.write(SHARED_CSS)
    with open(os.path.join(assets_dir, "app.js"), "w", encoding="utf-8") as f:
        f.write(SHARED_JS)

    all_topics = []
    for sec in m["sections"]:
        for top in sec["topics"]:
            all_topics.append((sec, top))

    # 1. Render Topic Pages
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

        attn_html = f'<div class="box mint"><h3>👀 Notice</h3><p>{top["attention"]}</p></div>' if top.get("attention") else ''
        mnem_html = f'<div class="box native"><h3>💡 Memory Trick</h3><p>{top["mnemonic"]}</p></div>' if top.get("mnemonic") else ''

        mistakes_html = ""
        if top.get("mistakes"):
            m_items = []
            for item in top["mistakes"]:
                m_items.append(f'''<div class="mflip">
  <div class="wrong-line"><span class="x">❌</span> <span class="wrong-text">{item["wrong"]}</span></div>
  <span class="hint">click to reveal right form</span>
  <div class="right-line"><span class="c">✅</span> <span>{item["right"]}</span></div>
</div>''')
            mistakes_html = f'<div class="mistakes"><div class="m-title">⚠️ Common Mistakes</div>{"".join(m_items)}</div>'

        check_html = ""
        if top.get("check_items"):
            c_lis = "".join([f'<label class="check-item"><input type="checkbox"><span>{ci}</span></label>' for ci in top["check_items"]])
            check_html = f'<div class="checklist" data-key="{top["slug"]}"><h3>🎯 Self Check</h3>{c_lis}</div>'

        quiz_html = ""
        if top.get("quiz"):
            quiz_data = []
            q_items = []
            for q_data in top["quiz"]:
                quiz_data.append({"correct": q_data["correct"]})
                opts_html = "".join([f'<button class="qopt">{o}</button>' for o in q_data["opts"]])
                q_items.append(f'<div class="qitem"><div class="qtext">{q_data["q"]}</div><div class="qopts">{opts_html}</div><div class="qexplain">{q_data["explain"]}</div></div>')
            quiz_json = json.dumps(quiz_data)
            quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Quiz</h2></div>{"".join(q_items)}<button class="quiz-reset" style="margin-top:12px;padding:6px 12px;cursor:pointer;">Reset</button></div>'

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

    # 2. Render Section Hub Pages
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

    # 3. Render Index Page
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

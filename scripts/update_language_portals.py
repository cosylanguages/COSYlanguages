#!/usr/bin/env python3
"""
scripts/update_language_portals.py
Updates and enriches all 13 language portals in languages/{lang}/index.html.
"""

import os
import re
import subprocess

MANUALS_APPS_DATA = {
    'en': {
        'title': 'Interactive Manuals & Reference Apps',
        'tag': '📖 Interactive Learning',
        'desc': 'Explore our monolingual web edition manuals, level hubs, and specialized reference apps.',
        'jump_label': 'Manuals & Apps',
        'cards': [
            {
                'icon': '📘',
                'name': 'English Grammar Manual',
                'desc': '42 interactive topic modules, pattern-before-explanation, mistake flips & quizzes.',
                'link': '../../grammar/index.html',
                'cta': 'Open Grammar Manual →'
            },
            {
                'icon': '🌐',
                'name': 'COSYenglish A0–A1 Level Hub',
                'desc': 'Master hub for English grammar, vocabulary, practice & speaking.',
                'link': '../../manuals/english-a0-a1.html',
                'cta': 'Open A0–A1 Hub →'
            },
            {
                'icon': '🔤',
                'name': 'Verb Prepositions & Phrasal Verbs',
                'desc': 'Master 150+ dependent prepositions, separability rules & phrasal verb patterns.',
                'link': '../../apps/en-verb-prep/index.html',
                'cta': 'Open Reference App →'
            }
        ]
    },
    'fr': {
        'title': 'Manuels interactifs & Applications',
        'tag': '📖 Apprentissage interactif',
        'desc': 'Découvrez nos manuels web unilingues, hubs de niveau et applications de référence.',
        'jump_label': 'Manuels & Apps',
        'cards': [
            {
                'icon': '📘',
                'name': 'Grammaire Française (A0–A1)',
                'desc': 'Modules de grammaire interactifs, timelines des temps, cartes mflip & quiz.',
                'link': '../../grammaire-francaise/index.html',
                'cta': 'Ouvrir la Grammaire →'
            },
            {
                'icon': '🌐',
                'name': 'Hub COSYfrançais A0–A1',
                'desc': 'Hub principal pour la grammaire, le vocabulaire et les exercices de français.',
                'link': '../../manuals/francaise-a0-a1.html',
                'cta': 'Ouvrir le Hub A0–A1 →'
            },
            {
                'icon': '⚙️',
                'name': 'Conjugueur de Verbes Français',
                'desc': 'Tableaux de conjugaison interactifs, verbes irréguliers & entraîneur.',
                'link': '../../apps/fr-conjugeur/index.html',
                'cta': 'Ouvrir le Conjugueur →'
            },
            {
                'icon': '🏷️',
                'name': 'Genre des Noms Français',
                'desc': 'Règles de genre (masculin/féminin), terminaisons clés & jeu d\'entraînement.',
                'link': '../../apps/fr-genre/index.html',
                'cta': 'Ouvrir l\'App Genre →'
            }
        ]
    },
    'it': {
        'title': 'Manuals & Applicazioni Interattive',
        'tag': '📖 Apprendimento interattivo',
        'desc': 'Esplora i nostri manuali monolingua sul web, hub di livello e app di riferimento.',
        'jump_label': 'Manuali & App',
        'cards': [
            {
                'icon': '📘',
                'name': 'Grammatica Italiana (A0–A1)',
                'desc': '40+ argomenti grammaticali, schede mflip, costruttore di frasi e quiz.',
                'link': '../../grammatica-italiana/index.html',
                'cta': 'Apri Grammatica →'
            },
            {
                'icon': '📚',
                'name': 'Lessico Italiano (A0–A1)',
                'desc': 'Flashcard tematiche A0–A1, rete lessicale e ricerca in tempo reale.',
                'link': '../../lessico-italiano/index.html',
                'cta': 'Apri Lessico →'
            },
            {
                'icon': '🌐',
                'name': 'Hub COSYitaliano A0–A1',
                'desc': 'Centro principale per la grammatica, il lessico e le esercitazioni di italiano.',
                'link': '../../manuals/italiano-a0-a1.html',
                'cta': 'Apri Hub A0–A1 →'
            },
            {
                'icon': '⚙️',
                'name': 'Coniugatore di Verbi Italiani',
                'desc': 'Tutte le coniugazioni dei verbi italiani con modalità allenamento.',
                'link': '../../apps/it-coniugatore/index.html',
                'cta': 'Apri Coniugatore →'
            },
            {
                'icon': '🏷️',
                'name': 'Genere dei Nomi Italiani',
                'desc': 'Guida pratica al genere maschile e femminile con quiz interattivi.',
                'link': '../../apps/it-genere/index.html',
                'cta': 'Apri App Genere →'
            }
        ]
    },
    'ru': {
        'title': 'Интерактивные учебники и приложения',
        'tag': '📖 Интерактивное обучение',
        'desc': 'Изучайте наши одноязычные онлайн-учебники, уровеневые хабы и справочные приложения.',
        'jump_label': 'Учебники и Apps',
        'cards': [
            {
                'icon': '📘',
                'name': 'Грамматика русского языка (A0–A1)',
                'desc': '60 тем, падежная система, карточки mflip и интерактивные упражнения.',
                'link': '../../grammatika-russkogo-yazyka/index.html',
                'cta': 'Открыть Грамматику →'
            },
            {
                'icon': '📚',
                'name': 'Лексика русского языка (A0–A1)',
                'desc': '21 тема, карточки-флипы, поиск по словарю и проверки знаний.',
                'link': '../../leksika-russkogo-yazyka/index.html',
                'cta': 'Открыть Лексику →'
            },
            {
                'icon': '🌐',
                'name': 'Hub COSYрусский A0–A1',
                'desc': 'Главный хаб по грамматике, лексике и практике русского языка.',
                'link': '../../manuals/russkiy-a0-a1.html',
                'cta': 'Открыть Hub A0–A1 →'
            },
            {
                'icon': '⚙️',
                'name': 'Спряжение глаголов',
                'desc': 'Спряжения I и II классов, исключения и тренажер формы.',
                'link': '../../apps/ru-spryazhenie/index.html',
                'cta': 'Открыть Спряжения →'
            },
            {
                'icon': '🏷️',
                'name': 'Род и Падежи',
                'desc': 'Полный справочник 6 падежей и родов с примерами и тестами.',
                'link': '../../apps/ru-rod-padezhi/index.html',
                'cta': 'Открыть Род и Падежи →'
            }
        ]
    },
    'el': {
        'title': 'Διαδραστικά Εγχειρίδια & Εφαρμογές',
        'tag': '📖 Διαδραστική Μάθηση',
        'desc': 'Ανακαλύψτε τα μονογλωσσικά εγχειρίδια web edition, τα level hubs και τις εφαρμογές αναφοράς.',
        'jump_label': 'Εγχειρίδια & Apps',
        'cards': [
            {
                'icon': '📘',
                'name': 'Ελληνική Γραμματική (A0–A1)',
                'desc': 'Διαδραστικά μαθήματα γραμματικής, πτώσεις, ρήματα και κουίζ.',
                'link': '../../elliniki-grammatiki/index.html',
                'cta': 'Άνοιγμα Γραμματικής →'
            },
            {
                'icon': '🌐',
                'name': 'Hub COSYελληνικά A0–A1',
                'desc': 'Κεντρικός οδηγός για τη γραμματική και το λεξιλόγιο της ελληνικής γλώσσας.',
                'link': '../../manuals/ellinika-a0-a1.html',
                'cta': 'Άνοιγμα Hub A0–A1 →'
            },
            {
                'icon': '⚙️',
                'name': 'Κλίση Ρημάτων Νέων Ελληνικών',
                'desc': 'Πλήρης οδηγός κλίσης ρημάτων Α\' και Β\' συζυγίας με ασκήσεις.',
                'link': '../../apps/el-klisi-rimaton/index.html',
                'cta': 'Άνοιγμα Κλίσης Ρημάτων →'
            },
            {
                'icon': '🏷️',
                'name': 'Γένος & Πτώσεις Ουσιαστικών',
                'desc': 'Συστηματικός οδηγός για τα γένη και τις πτώσεις της ελληνικής.',
                'link': '../../apps/el-genos-ptoseis/index.html',
                'cta': 'Άνοιγμα Γένους & Πτώσεων →'
            }
        ]
    },
    'es': {
        'title': 'Manuales Interactivos & Recursos',
        'tag': '📖 Aprendizaje interactivo',
        'desc': 'Explora nuestros manuales web monolingües, hubs de nivel y herramientas de práctica.',
        'jump_label': 'Manuales & Recursos',
        'cards': [
            {
                'icon': '📘',
                'name': 'Gramática Española (A0–A1)',
                'desc': 'Manual monolingüe A0–A1, reglas de verbos, mflip y evaluaciones.',
                'link': '../../gramatica-espanola/index.html',
                'cta': 'Abrir Gramática →'
            },
            {
                'icon': '📚',
                'name': 'Vocabulario Español (A0–A1)',
                'desc': 'Redes léxicas, tarjetas interactivas y buscador de vocabulario.',
                'link': '../../vocabulario-espanol/index.html',
                'cta': 'Abrir Vocabulario →'
            },
            {
                'icon': '🌐',
                'name': 'Hub COSYespañol A0–A1',
                'desc': 'Centro principal para la gramática y el vocabulario de español.',
                'link': '../../manuals/espanol-a0-a1.html',
                'cta': 'Abrir Hub A0–A1 →'
            }
        ]
    },
    'de': {
        'title': 'Interaktive Handbücher & Ressourcen',
        'tag': '📖 Interaktives Lernen',
        'desc': 'Entdecken Sie unsere einsprachigen Web-Editionen, Stufen-Hubs und Übungswerkzeuge.',
        'jump_label': 'Handbücher & Apps',
        'cards': [
            {
                'icon': '📘',
                'name': 'Deutsche Grammatik (A0–A1)',
                'desc': 'Interaktives Grammatikhandbuch A0–A1, Kasus, Verben und Quizzes.',
                'link': '../../deutsche-grammatik/index.html',
                'cta': 'Grammatik öffnen →'
            },
            {
                'icon': '📚',
                'name': 'Deutscher Wortschatz (A0–A1)',
                'desc': 'Thematische Wortschatzkarten, Artikeltrainer und Suchfunktion.',
                'link': '../../deutscher-wortschatz/index.html',
                'cta': 'Wortschatz öffnen →'
            },
            {
                'icon': '🌐',
                'name': 'Hub COSYdeutsch A0–A1',
                'desc': 'Hauptknotenpunkt für deutsche Grammatik und Wortschatz.',
                'link': '../../manuals/deutsch-a0-a1.html',
                'cta': 'Hub A0–A1 öffnen →'
            }
        ]
    },
    'pt': {
        'title': 'Manuais Interativos & Recursos',
        'tag': '📖 Aprendizagem Interativa',
        'desc': 'Explore os nossos manuais monolíngues em edição web, hubs de nível e ferramentas.',
        'jump_label': 'Manuais & Apps',
        'cards': [
            {
                'icon': '📘',
                'name': 'Gramática Portuguesa (A0–A1)',
                'desc': 'Manual monolíngue A0–A1, tempos verbais, cartões mflip e testes.',
                'link': '../../gramatica-portuguesa/index.html',
                'cta': 'Abrir Gramática →'
            },
            {
                'icon': '📚',
                'name': 'Vocabulário Português (A0–A1)',
                'desc': 'Redes léxicas temáticas, cartões de memória e busca interativa.',
                'link': '../../vocabulario-portugues/index.html',
                'cta': 'Abrir Vocabulário →'
            },
            {
                'icon': '🌐',
                'name': 'Hub COSYportuguês A0–A1',
                'desc': 'Central principal para a gramática e o vocabulário de português.',
                'link': '../../manuals/portugues-a0-a1.html',
                'cta': 'Abrir Hub A0–A1 →'
            }
        ]
    },
    'hy': {
        'title': 'Ինտերակտիվ Ձեռնարկներ և Ռեսուրսներ',
        'tag': '📖 Ինտերակտիվ Ուսուցում',
        'desc': 'Ուսումնասիրեք մեր միալեզու վեբ ձեռնարկները, մակարդակների հաբերը և վարժությունները:',
        'jump_label': 'Ձեռնարկներ & Apps',
        'cards': [
            {
                'icon': '📘',
                'name': 'Հայոց լեզվի քերականություն (A0–A1)',
                'desc': 'Ինտերակտիվ քերականության ձեռնարկ A0–A1, հոլովումներ և վարժություններ:',
                'link': '../../hayots-lezvi-kerakanutyun/index.html',
                'cta': 'Բացել Քերականությունը →'
            },
            {
                'icon': '📚',
                'name': 'Հայոց լեզվի բառապաշար (A0–A1)',
                'desc': 'Թեմատիկ բառապաշարի քարտեր, որոնում և ստուգողական թեստեր:',
                'link': '../../hayots-lezvi-barapashar/index.html',
                'cta': 'Բացել Բառապաշարը →'
            },
            {
                'icon': '🌐',
                'name': 'COSYհայերեն A0–A1 Hub',
                'desc': 'Մայր հանգույց հայոց լեզվի քերականության և բառապաշարի համար:',
                'link': '../../manuals/hayots-a0-a1.html',
                'cta': 'Բացել Hub A0–A1 →'
            }
        ]
    },
    'ka': {
        'title': 'ინტერაქტიული სახელმძღვანელოები',
        'tag': '📖 ინტერაქტიული სწავლება',
        'desc': 'აღმოაჩინეთ ჩვენი ერთენოვანი ვებ-სახელმძღვანელოები, დონის ჰაბები და რესურსები.',
        'jump_label': 'სახელმძღვანელოები & Apps',
        'cards': [
            {
                'icon': '📘',
                'name': 'ქართული გრამატიკა (A0–A1)',
                'desc': 'ინტერაქტიული გრამატიკის სახელმძღვანელო A0–A1, ბრუნვები და ქვიზები.',
                'link': '../../qartuli-gramatika/index.html',
                'cta': 'გრამატიკის გახსნა →'
            },
            {
                'icon': '📚',
                'name': 'ქართული ლექსიკა (A0–A1)',
                'desc': 'თემატური ლექსიკური ბარათები, ძიება და ცოდნის შემოწმება.',
                'link': '../../qartuli-leqsika/index.html',
                'cta': 'ლექსიკის გახსნა →'
            },
            {
                'icon': '🌐',
                'name': 'COSYქართული A0–A1 Hub',
                'desc': 'ქართული ენის გრამატიკისა და ლექსიკის მთავარი სახელმძღვანელო.',
                'link': '../../manuals/qartuli-a0-a1.html',
                'cta': 'Hub A0–A1 გახსნა →'
            }
        ]
    },
    'tt': {
        'title': 'Интерактив белешмәлекләр һәм ресурслар',
        'tag': '📖 Интерактив уку',
        'desc': 'Безнең бертеле веб-белешмәлекләр, дәрәҗә хаблары һәм күнегү кораллары белән танышыгыз.',
        'jump_label': 'Белешмәлекләр & Apps',
        'cards': [
            {
                'icon': '📘',
                'name': 'Татар теле грамматикасы (A0–A1)',
                'desc': 'Интерактив грамматика әсбабы A0–A1, килешләр, фигыльләр һәм тестлар.',
                'link': '../../tatar-teli-grammatikasy/index.html',
                'cta': 'Грамматиканы ачу →'
            },
            {
                'icon': '📚',
                'name': 'Татар теле лексикасы (A0–A1)',
                'desc': 'Тематик сүзлек карточкалары, эзләү һәм белемне тикшерү.',
                'link': '../../tatar-teli-leksikasy/index.html',
                'cta': 'Лексиканы ачу →'
            },
            {
                'icon': '🌐',
                'name': 'COSYтатар A0–A1 Hub',
                'desc': 'Татар теле грамматикасы һәм лексикасы буенча төп белешмәлек.',
                'link': '../../manuals/tatar-a0-a1.html',
                'cta': 'Hub A0–A1 ачу →'
            }
        ]
    },
    'ba': {
        'title': 'Интерактив белешмәлектәр һәм ресурстар',
        'tag': '📖 Интерактив уҡыу',
        'desc': 'Беҙҙең бер телле веб-белешмәлектәр, дәрәжә хабтары һәм күнегеү коралдары.',
        'jump_label': 'Белешмәлектәр & Apps',
        'cards': [
            {
                'icon': '📘',
                'name': 'Башҡорт теле грамматикаһы (A0–A1)',
                'desc': 'Интерактив грамматика ҡулланмаһы A0–A1, килештәр һәм күнегеүҙәр.',
                'link': '../../bashqort-tele-grammatikahy/index.html',
                'cta': 'Грамматиканы асыу →'
            },
            {
                'icon': '📚',
                'name': 'Башҡорт теле лексикаһы (A0–A1)',
                'desc': 'Тематик һүҙлек карточкалары, эҙләү һәм белемде тикшереү.',
                'link': '../../bashqort-tele-leksikahy/index.html',
                'cta': 'Лексиканы асыу →'
            },
            {
                'icon': '🌐',
                'name': 'COSYбашҡорт A0–A1 Hub',
                'desc': 'Башҡорт теле грамматикаһы һәм лексикаһы буйынса төп белешмәлек.',
                'link': '../../manuals/bashqort-a0-a1.html',
                'cta': 'Hub A0–A1 асыу →'
            }
        ]
    },
    'br': {
        'title': 'Dornlevrioù etreatrativ & Razourat',
        'tag': '📖 Deskiñ etreatrativ',
        'desc': 'Dizoloit hor dornlevrioù unyezhek war ar meurviañ, kreizennoù live ha benvegoù deskiñ.',
        'jump_label': 'Dornlevrioù & Apps',
        'cards': [
            {
                'icon': '📘',
                'name': 'Levr Yezhadur Brezhoneg (A0–A1)',
                'desc': 'Dornlevr yezhadur etreatrativ A0–A1, mutationoù, verboù ha c\'hoarioù.',
                'link': '../../yezhadur-brezhoneg/index.html',
                'cta': 'Digeriñ ar Yezhadur →'
            },
            {
                'icon': '📚',
                'name': 'Levr Gerioù Brezhoneg (A0–A1)',
                'desc': 'Kartennoù gerioù dre dem, klask ha kartennoù deskiñ.',
                'link': '../../geriou-brezhoneg/index.html',
                'cta': 'Digeriñ ar Gerioù →'
            },
            {
                'icon': '🌐',
                'name': 'COSYbrezhoneg A0–A1 Hub',
                'desc': 'Kreizenn bennañ evit yezhadur ha gerioù ar brezhoneg.',
                'link': '../../manuals/brezhoneg-a0-a1.html',
                'cta': 'Digeriñ an Hub A0–A1 →'
            }
        ]
    }
}

STANDARD_FOOTER = """<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="fb-logo">
        <img src="../../images/logos/cosylanguages.png" alt="COSYlanguages logo">
        <span class="fb-name">COSYlanguages</span>
      </div>
      <p data-translate-key="footer_fb_p">Your friendly corner to master new languages and connect with the world. 🌍</p>
    </div>
    <div class="footer-links-col">
      <h5 data-translate-key="footer_h5_courses">Courses</h5>
      <a href="../../apps/premium-courses/general/" data-translate-key="course_general">General Course 📖</a>
      <a href="../../apps/premium-courses/spoken/" data-translate-key="course_spoken">Spoken Course 🗣️</a>
      <a href="../../apps/premium-courses/exam/" data-translate-key="course_exam">Exam Preparation 📝</a>
      <a href="../../apps/premium-courses/travelling/" data-translate-key="course_travelling">Travelling Course ✈️</a>
      <a href="../../apps/premium-courses/professional/" data-translate-key="course_professional">Professional Course 💼</a>
      <a href="../../apps/premium-courses/relocation/" data-translate-key="course_relocation">Relocation Course 🏡</a>
    </div>
    <div class="footer-links-col">
      <h5 data-translate-key="footer_h5_explore">Explore</h5>
      <a href="../../#languages" data-translate-key="nav_languages">Languages 🌍</a>
      <a href="../../practice/index.html" data-translate-key="nav_practice">Free Practice 💡</a>
      <a href="../../events/index.html" data-translate-key="nav_events">Events 🎉</a>
      <a href="../../games/index.html" data-translate-key="nav_games">Games 🎮</a>
    </div>
    <div class="footer-links-col">
      <h5>Project</h5>
      <a href="../../privacy.html">Privacy &amp; Safety 🛡️</a>
    </div>
    <div class="footer-links-col">
      <h5 data-translate-key="footer_h5_contact">Contact</h5>
      <a href="https://wa.me/330766784195">WhatsApp 📱</a>
      <a href="https://t.me/cosylanguagesproject">Telegram ✈️</a>
      <a href="mailto:cosylanguages@gmail.com">cosylanguages@gmail.com ✉️</a>
    </div>
  </div>
  <div class="footer-bottom" data-translate-key="footer_copy">© 2026 COSYlanguages, All rights reserved</div>
</footer>"""

def build_manuals_section(lang):
    info = MANUALS_APPS_DATA[lang]
    cards_html = []
    for card in info['cards']:
        cards_html.append(f"""    <a href="{card['link']}" class="resource-card reveal">
      <div class="rc-icon">{card['icon']}</div>
      <div class="rc-name">{card['name']}</div>
      <div class="rc-desc">{card['desc']}</div>
      <div class="rc-link">{card['cta']}</div>
    </a>""")

    cards_str = "\n".join(cards_html)
    return f"""<!-- Interactive Manuals & Apps -->
<section id="manuals-apps">
  <div class="sec-head reveal">
    <span class="sec-tag">{info['tag']}</span>
    <h2>{info['title']}</h2>
    <p>{info['desc']}</p>
  </div>
  <div class="resources-grid">
{cards_str}
  </div>
</section>"""

def process_active_language(lang):
    path = f"languages/{lang}/index.html"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Ensure manuals-apps section is present
    if 'id="manuals-apps"' not in content:
        sec_html = build_manuals_section(lang)
        if '<section id="daily-dose"' in content:
            content = content.replace('<section id="daily-dose"', f'{sec_html}\n\n<section id="daily-dose"')
        elif '<section id="resources"' in content:
            content = content.replace('<section id="resources"', f'{sec_html}\n\n<section id="resources"')
        elif '<section>' in content:
            content = content.replace('<section>', f'{sec_html}\n\n<section>', 1)

    # 2. Ensure jump link is present in sd-sticky-header
    jump_label = MANUALS_APPS_DATA[lang]['jump_label']
    manuals_jump = f'<a href="#manuals-apps" class="sd-jump-link">{jump_label}</a>'
    if 'href="#manuals-apps"' not in content and '<nav class="sd-jump-links"' in content:
        content = re.sub(
            r'(<nav class="sd-jump-links"[^>]*>)\s*',
            r'\1\n      ' + manuals_jump + '\n      ',
            content
        )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"[ACTIVE] Updated {path}")

def process_target_language(lang):
    # Fetch original content from git HEAD:languages/{lang}.html
    raw = subprocess.check_output(['git', 'show', f'HEAD:languages/{lang}.html']).decode('utf-8')

    # 1. Update relative asset paths from ../ to ../../
    # Be careful with absolute links or http links
    # Replace href="../ and src="../ with href="../../ and src="../../
    content = raw.replace('href="../', 'href="../../')
    content = content.replace('src="../', 'src="../../')
    content = content.replace("register('../sw.js')", "register('../../sw.js')")

    # Update manifest link if present
    content = content.replace('href="../../apps/free-portal/manifest.json"', 'href="../../apps/free-portal/manifest.json"')

    # 2. Add sticky header right after <nav id="cosy-nav"></nav>
    jump_label = MANUALS_APPS_DATA[lang]['jump_label']

    # Get native language display name
    lang_names = {
        'es': 'Español', 'de': 'Deutsch', 'pt': 'Português',
        'hy': 'Հայերեն', 'ka': 'ქართული', 'tt': 'Татарча',
        'ba': 'Башҡортса', 'br': 'Brezhoneg'
    }
    native_name = lang_names.get(lang, lang.upper())

    sticky_header = f"""<!-- Sticky Top Navigation Header -->
<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <div class="sd-breadcrumbs">
      <a href="../../index.html">Home</a>
      <span class="sep">/</span>
      <span class="current">{native_name}</span>
    </div>
    <nav class="sd-jump-links" aria-label="Page jump links">
      <a href="#manuals-apps" class="sd-jump-link">{jump_label}</a>
      <a href="#daily-dose" class="sd-jump-link">Daily Dose</a>
      <a href="#resources" class="sd-jump-link">Resources</a>
      <a href="#media-culture" class="sd-jump-link">Media & Culture</a>
      <a href="#daily-life" class="sd-jump-link">Daily Life</a>
    </nav>
  </div>
</header>"""

    if '<nav id="cosy-nav"></nav>' in content:
        content = content.replace('<nav id="cosy-nav"></nav>', f'<nav id="cosy-nav"></nav>\n\n{sticky_header}')

    # 3. Enhance Hero CTAs
    # Ensure practice button and games button exist
    lang_upper = lang.upper()
    practice_btn = f'<a href="../../practice/index.html?lang={lang_upper}" class="btn-primary">💡 Practice {native_name} Now</a>'
    games_btn = f'<a href="../../games/index.html?lang={lang_upper}" class="btn-ghost">Games 🎮</a>'

    # Re-place hero-ctas if present
    if '<div class="hero-ctas">' in content:
        # replace hero-ctas inner content
        cta_pattern = r'<div class="hero-ctas">.*?</div>'
        new_ctas = f"""<div class="hero-ctas">
      {practice_btn}
      {games_btn}
      <button onclick="const url = window.location.origin + window.location.pathname + '?embed=true'; showPinModal('Añadir a la pantalla de inicio', 'Añade {native_name} a tu pantalla de inicio para un acceso instantáneo.', url)" class="btn-ghost">📲 Pin to Home</button>
    </div>"""
        content = re.sub(cta_pattern, new_ctas, content, flags=re.DOTALL)

    # 4. Insert section IDs to sections for jump link binding
    # Replace <section> tags with appropriate IDs
    # Daily dose section:
    content = content.replace('<!-- Daily dose -->\n<section>', '<!-- Daily dose -->\n<section id="daily-dose">')
    content = content.replace('<!-- Learning resources -->\n<section>', '<!-- Learning resources -->\n<section id="resources">')
    content = content.replace('<!-- Media & Culture -->\n<section>', '<!-- Media & Culture -->\n<section id="media-culture">')
    content = content.replace('<!-- Daily life / shopping -->\n<section>', '<!-- Daily life / shopping -->\n<section id="daily-life">')

    # 5. Insert manuals-apps section
    sec_html = build_manuals_section(lang)
    if '<section id="daily-dose">' in content:
        content = content.replace('<section id="daily-dose">', f'{sec_html}\n\n<section id="daily-dose">')
    elif '<section id="resources">' in content:
        content = content.replace('<section id="resources">', f'{sec_html}\n\n<section id="resources">')
    else:
        # fallback replace main opening
        content = content.replace('<main>', f'<main>\n\n{sec_html}')

    # 6. Replace footer with standard footer
    footer_pattern = r'<footer>.*?</footer>'
    content = re.sub(footer_pattern, STANDARD_FOOTER, content, flags=re.DOTALL)

    path = f"languages/{lang}/index.html"
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"[TARGET] Updated {path}")

def main():
    active_langs = ['en', 'fr', 'it', 'ru', 'el']
    target_langs = ['es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br']

    for l in active_langs:
        process_active_language(l)

    for l in target_langs:
        process_target_language(l)

if __name__ == '__main__':
    main()

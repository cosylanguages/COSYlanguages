import glob, os, re

subpage_data = {
    'en': {
        'manuals': [
            {'title': 'English 3-Book Manual (A0–A1)', 'url': '../../manuals/english-a0-a1.html', 'desc': 'Grammar, Vocabulary & Communication starter books.'},
            {'title': 'English 3-Book Manual (A2)', 'url': '../../manuals/english-a2.html', 'desc': 'Elementary grammar, thematic word lists & dialogues.'},
            {'title': 'English 3-Book Manual (B1)', 'url': '../../manuals/english-b1.html', 'desc': 'Intermediate structures & expanded conversational skills.'},
            {'title': 'English 3-Book Manual (B2)', 'url': '../../manuals/english-b2.html', 'desc': 'Upper-intermediate discourse & complex grammar.'},
            {'title': 'English 3-Book Manual (C1)', 'url': '../../manuals/english-c1.html', 'desc': 'Advanced precision & academic/professional register.'},
            {'title': 'English 3-Book Manual (C2)', 'url': '../../manuals/english-c2.html', 'desc': 'Mastery & native-level idiomatic fluency.'}
        ],
        'apps': [{'title': 'English Verbs & Prepositions App', 'url': '../../apps/en-verb-prep/index.html', 'desc': 'Interactive engine for dependent prepositions & phrasal verbs.'}],
        'practice': '../../practice/index.html?lang=EN', 'games': '../../games/index.html?lang=EN', 'hub': 'index.html', 'lang': 'en'
    },
    'fr': {
        'manuals': [
            {'title': 'Manuel Français (A0–A1)', 'url': '../../manuals/francaise-a0-a1.html', 'desc': 'Livres de grammaire, vocabulaire et communication A0–A1.'},
            {'title': 'Manuel Français (A2)', 'url': '../../manuals/francaise-a2.html', 'desc': 'Grammaire élémentaire, lexique thématique et dialogues.'}
        ],
        'apps': [
            {'title': 'Régime Prépositionnel Français', 'url': '../../apps/fr-regime/index.html', 'desc': 'Moteur interactif pour les régimes des verbes, noms et adjectifs.'},
            {'title': 'Le Conjugeur Français', 'url': '../../apps/fr-conjugeur/index.html', 'desc': 'Référence complète des conjugaisons et temps.'},
            {'title': 'Genre des Noms Français', 'url': '../../apps/fr-genre/index.html', 'desc': 'Guide interactif du genre des noms et règles de terminaisons.'}
        ],
        'practice': '../../practice/index.html?lang=FR', 'games': '../../games/index.html?lang=FR', 'hub': 'index.html', 'lang': 'fr'
    },
    'it': {
        'manuals': [
            {'title': 'Manuale Italiano (A0–A1)', 'url': '../../manuals/it/index.html', 'desc': 'Libri di grammatica, vocabolario e comunicazione A0–A1.'},
            {'title': 'Manuale Italiano (A2)', 'url': '../../manuals/italiano-a2.html', 'desc': 'Grammatica elementare, collocazioni e mappe di dialogo.'}
        ],
        'apps': [
            {'title': 'Reggenza Verbale Italiana', 'url': '../../apps/it-reggenza/index.html', 'desc': 'Engine interattivo per la reggenza di verbi, nomi e aggettivi.'},
            {'title': 'Il Coniugatore Italiano', 'url': '../../apps/it-coniugatore/index.html', 'desc': 'Database completo delle coniugazioni verbali.'},
            {'title': 'Genere dei Nomi Italiani', 'url': '../../apps/it-genere/index.html', 'desc': 'Guida interattiva al genere dei sostantivi.'}
        ],
        'practice': '../../practice/index.html?lang=IT', 'games': '../../games/index.html?lang=IT', 'hub': 'index.html', 'lang': 'it'
    },
    'ru': {
        'manuals': [
            {'title': 'Учебник русского языка (A0–A1)', 'url': '../../manuals/russkiy-a0-a1.html', 'desc': 'Книги по грамматике, лексике и коммуникации уровня A0–A1.'},
            {'title': 'Учебник русского языка (A2)', 'url': '../../manuals/russkiy-a2.html', 'desc': 'Элементарная грамматика и тематический словарь.'}
        ],
        'apps': [
            {'title': 'Спряжение русских глаголов', 'url': '../../apps/ru-spryazhenie/index.html', 'desc': 'База спряжения и видовых пар глаголов.'},
            {'title': 'Род и падежи существительных', 'url': '../../apps/ru-rod-padezhi/index.html', 'desc': 'Интерактивная система падежей и рода.'}
        ],
        'practice': '../../practice/index.html?lang=RU', 'games': '../../games/index.html?lang=RU', 'hub': 'index.html', 'lang': 'ru'
    },
    'el': {
        'manuals': [
            {'title': 'Εγχειρίδιο Ελληνικών (A0–A1)', 'url': '../../manuals/ellinika-a0-a1.html', 'desc': 'Βιβλία γραμματικής, λεξιλογίου και επικοινωνίας A0–A1.'},
            {'title': 'Εγχειρίδιο Ελληνικών (A2)', 'url': '../../manuals/ellinika-a2.html', 'desc': 'Βασική γραμματική, θεματικό λεξιλόγιο και διάλογοι.'}
        ],
        'apps': [
            {'title': 'Σύνταξη Ρημάτων & Ουσιαστικών', 'url': '../../apps/el-syntaxi/index.html', 'desc': 'Εφαρμογή σύνταξης και συντακτικής κυβέρνησης.'},
            {'title': 'Κλίση Ρημάτων', 'url': '../../apps/el-klisi-rimaton/index.html', 'desc': 'Πλήρης οδηγός κλίσης ρημάτων.'},
            {'title': 'Γένος & Πτώσεις Ουσιαστικών', 'url': '../../apps/el-genos-ptoseis/index.html', 'desc': 'Οδηγός γένους και πτώσεων ουσιαστικών.'}
        ],
        'practice': '../../practice/index.html?lang=EL', 'games': '../../games/index.html?lang=EL', 'hub': 'index.html', 'lang': 'el'
    }
}

for lang, data in subpage_data.items():
    for sub in ['grammar.html', 'vocabulary.html']:
        path = f'languages/{lang}/{sub}'
        if not os.path.exists(path):
            continue

        title_type = 'Grammar' if sub == 'grammar.html' else 'Vocabulary'

        cards_html = ''
        for m in data['manuals']:
            m_url = m['url']
            m_title = m['title']
            m_desc = m['desc']
            cards_html += f'''
    <a href="{m_url}" style="background:white; border-radius:12px; padding:1.2rem; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-decoration:none; color:inherit; border:1px solid #e2e8f0; display:block;">
      <div style="font-size:1.5rem; margin-bottom:0.4rem;">📘</div>
      <div style="font-weight:800; font-size:1.1rem; color:#1a365d; margin-bottom:0.3rem;">{m_title}</div>
      <div style="font-size:0.88rem; color:#4a5568; line-height:1.5;">{m_desc}</div>
    </a>'''

        for a in data['apps']:
            a_url = a['url']
            a_title = a['title']
            a_desc = a['desc']
            cards_html += f'''
    <a href="{a_url}" style="background:white; border-radius:12px; padding:1.2rem; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-decoration:none; color:inherit; border:1px solid #e2e8f0; display:block;">
      <div style="font-size:1.5rem; margin-bottom:0.4rem;">⚙️</div>
      <div style="font-weight:800; font-size:1.1rem; color:#1a365d; margin-bottom:0.3rem;">{a_title}</div>
      <div style="font-size:0.88rem; color:#4a5568; line-height:1.5;">{a_desc}</div>
    </a>'''

        p_url = data['practice']
        g_url = data['games']
        lang_code = data['lang'].upper()

        cards_html += f'''
    <a href="{p_url}" style="background:white; border-radius:12px; padding:1.2rem; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-decoration:none; color:inherit; border:1px solid #e2e8f0; display:block;">
      <div style="font-size:1.5rem; margin-bottom:0.4rem;">💡</div>
      <div style="font-weight:800; font-size:1.1rem; color:#1a365d; margin-bottom:0.3rem;">Free Interactive Practice</div>
      <div style="font-size:0.88rem; color:#4a5568; line-height:1.5;">Interactive exercises, quizzes and listening drills for {lang_code}.</div>
    </a>
    <a href="{g_url}" style="background:white; border-radius:12px; padding:1.2rem; box-shadow:0 2px 8px rgba(0,0,0,0.06); text-decoration:none; color:inherit; border:1px solid #e2e8f0; display:block;">
      <div style="font-size:1.5rem; margin-bottom:0.4rem;">🎮</div>
      <div style="font-weight:800; font-size:1.1rem; color:#1a365d; margin-bottom:0.3rem;">Language Games</div>
      <div style="font-size:0.88rem; color:#4a5568; line-height:1.5;">Fun learning games to challenge your vocabulary and grammar.</div>
    </a>'''

        l_code = data['lang']
        h_url = data['hub']

        html = f'''<!DOCTYPE html>
<html lang="{l_code}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title_type} Reference · COSY</title>
<link rel="stylesheet" href="../../css/lang-pages.css">
<link rel="stylesheet" href="../../css/lang-accents.css">
<link rel="stylesheet" href="../../css/mobile.css">
<link rel="stylesheet" href="../../css/components.css">
</head>
<body>
<nav id="cosy-nav"></nav>
<main style="max-width: 900px; margin: 0 auto; padding: 3rem 1.5rem; font-family: 'Nunito', sans-serif;">
  <p><a href="{h_url}" style="color: #4a6b50; text-decoration: none; font-weight: bold;">← Back to {lang_code} Hub</a></p>
  <h1 style="font-size: 2.2rem; font-weight: 900; color: #1a365d; margin-top: 1rem; margin-bottom: 0.5rem;">{title_type} Reference & Learning Resources</h1>
  <p style="color: #4a5568; font-size: 1.05rem; margin-bottom: 2rem;">Explore comprehensive 3-book manuals, interactive reference engines, and practice tools for {lang_code}.</p>

  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.2rem;">
    {cards_html}
  </div>
</main>
<script src="../../js/data/languages.js"></script>
<script src="../../js/core/engine.js"></script>
<script src="../../js/core/i18n.js"></script>
<script src="../../js/core/ui.js"></script>
</body>
</html>'''

        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)

print('Updated subpages for en, fr, it, ru, el successfully!')

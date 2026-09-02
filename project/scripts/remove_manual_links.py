import glob, os, re

hub_data = {
    'en': {'code': 'en', 'native': 'English', 'practice_lang': 'EN', 'apps': [{'name': 'English Verbs & Prepositions', 'url': '../../apps/en-verb-prep/index.html', 'desc': 'Interactive engine for dependent prepositions & phrasal verbs.'}]},
    'fr': {'code': 'fr', 'native': 'Français', 'practice_lang': 'FR', 'apps': [{'name': 'Régime Prépositionnel Français', 'url': '../../apps/fr-regime/index.html', 'desc': 'Engine for French verb, noun & adjective prepositional regimes.'}, {'name': 'Le Conjugeur Français', 'url': '../../apps/fr-conjugeur/index.html', 'desc': 'Complete verb conjugation & tense reference.'}, {'name': 'Genre des Noms Français', 'url': '../../apps/fr-genre/index.html', 'desc': 'Interactive French noun gender & rule finder.'}]},
    'it': {'code': 'it', 'native': 'Italiano', 'practice_lang': 'IT', 'apps': [{'name': 'Reggenza Verbale Italiana', 'url': '../../apps/it-reggenza/index.html', 'desc': 'Italian prepositional regime engine for verbs, nouns & adjectives.'}, {'name': 'Il Coniugatore Italiano', 'url': '../../apps/it-coniugatore/index.html', 'desc': 'Verb conjugation database & tense reference.'}, {'name': 'Genere dei Nomi Italiani', 'url': '../../apps/it-genere/index.html', 'desc': 'Italian noun gender classification & irregular patterns.'}]},
    'ru': {'code': 'ru', 'native': 'Русский', 'practice_lang': 'RU', 'apps': [{'name': 'Спряжение русских глаголов', 'url': '../../apps/ru-spryazhenie/index.html', 'desc': 'Russian verb conjugation & aspect pairs.'}, {'name': 'Род и падежи существительных', 'url': '../../apps/ru-rod-padezhi/index.html', 'desc': 'Russian noun gender & 6-case declension engine.'}]},
    'el': {'code': 'el', 'native': 'Ελληνικά', 'practice_lang': 'EL', 'apps': [{'name': 'Σύνταξη Ρημάτων & Ουσιαστικών', 'url': '../../apps/el-syntaxi/index.html', 'desc': 'Greek verb & noun syntax government engine.'}, {'name': 'Κλίση Ρημάτων', 'url': '../../apps/el-klisi-rimaton/index.html', 'desc': 'Greek verb conjugation reference.'}, {'name': 'Γένος & Πτώσεις Ουσιαστικών', 'url': '../../apps/el-genos-ptoseis/index.html', 'desc': 'Greek noun gender & case inflection reference.'}]},
    'es': {'code': 'es', 'native': 'Español', 'practice_lang': 'ES', 'apps': []},
    'de': {'code': 'de', 'native': 'Deutsch', 'practice_lang': 'DE', 'apps': []},
    'pt': {'code': 'pt', 'native': 'Português', 'practice_lang': 'PT', 'apps': []},
    'hy': {'code': 'hy', 'native': 'Հայերեն', 'practice_lang': 'HY', 'apps': []},
    'ka': {'code': 'ka', 'native': 'ქართული', 'practice_lang': 'KA', 'apps': []},
    'tt': {'code': 'tt', 'native': 'Татарча', 'practice_lang': 'TT', 'apps': []},
    'ba': {'code': 'ba', 'native': 'Башҡортса', 'practice_lang': 'BA', 'apps': []},
    'br': {'code': 'br', 'native': 'Brezhoneg', 'practice_lang': 'BR', 'apps': []}
}

for lang, data in hub_data.items():
    filepath = f'languages/{lang}/index.html'
    if not os.path.exists(filepath):
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update jump link from "Manuals & Tools" to "Apps & Practice"
    content = content.replace('Manuals & Tools', 'Apps & Practice')

    app_links_html = ''
    for app in data['apps']:
        app_links_html += f'''
    <a href="{app['url']}" class="resource-card reveal">
      <div class="rc-icon">⚙️</div>
      <div class="rc-name">{app['name']}</div>
      <div class="rc-desc">{app['desc']}</div>
      <div class="rc-link">Open App →</div>
    </a>'''

    practice_links_html = f'''
    <a href="../../practice/index.html?lang={data['practice_lang']}" class="resource-card reveal">
      <div class="rc-icon">💡</div>
      <div class="rc-name">Interactive Practice</div>
      <div class="rc-desc">Free exercises, quizzes & listening tasks for {data['native']}.</div>
      <div class="rc-link">Practice Now →</div>
    </a>
    <a href="../../games/index.html?lang={data['practice_lang']}" class="resource-card reveal">
      <div class="rc-icon">🎮</div>
      <div class="rc-name">Language Games</div>
      <div class="rc-desc">Vocabulary & grammar games to test your fluency.</div>
      <div class="rc-link">Play Games →</div>
    </a>'''

    interactive_tools_html = f'''<!-- Interactive Reference Engines & Practice -->
<section id="interactive-tools">
  <div class="sec-head reveal">
    <span class="sec-tag">🛠️ Interactive Tools</span>
    <h2>Interactive Apps & Practice</h2>
    <p>Practice {data['native']} with interactive reference engines, drills, and learning games.</p>
  </div>
  <div class="resources-grid">
    {app_links_html}
    {practice_links_html}
  </div>
</section>

'''

    tools_regex = r'<!-- Manuals, Interactive Apps & Practice -->\s*<section id="interactive-tools">.*?</section>\s*'
    if re.search(tools_regex, content, flags=re.DOTALL):
        content = re.sub(tools_regex, interactive_tools_html, content, flags=re.DOTALL)
    elif '<section id="interactive-tools">' in content:
        tools_regex_2 = r'<section id="interactive-tools">.*?</section>\s*'
        content = re.sub(tools_regex_2, interactive_tools_html, content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Update subpages (grammar.html, vocabulary.html)
subpage_data = {
    'en': {'apps': [{'title': 'English Verbs & Prepositions App', 'url': '../../apps/en-verb-prep/index.html', 'desc': 'Interactive engine for dependent prepositions & phrasal verbs.'}], 'practice': '../../practice/index.html?lang=EN', 'games': '../../games/index.html?lang=EN', 'hub': 'index.html', 'lang': 'en'},
    'fr': {'apps': [{'title': 'Régime Prépositionnel Français', 'url': '../../apps/fr-regime/index.html', 'desc': 'Moteur interactif pour les régimes des verbes, noms et adjectifs.'}, {'title': 'Le Conjugeur Français', 'url': '../../apps/fr-conjugeur/index.html', 'desc': 'Référence complète des conjugaisons et temps.'}, {'title': 'Genre des Noms Français', 'url': '../../apps/fr-genre/index.html', 'desc': 'Guide interactif du genre des noms et règles de terminaisons.'}], 'practice': '../../practice/index.html?lang=FR', 'games': '../../games/index.html?lang=FR', 'hub': 'index.html', 'lang': 'fr'},
    'it': {'apps': [{'title': 'Reggenza Verbale Italiana', 'url': '../../apps/it-reggenza/index.html', 'desc': 'Engine interattivo per la reggenza di verbi, nomi e aggettivi.'}, {'title': 'Il Coniugatore Italiano', 'url': '../../apps/it-coniugatore/index.html', 'desc': 'Database completo delle coniugazioni verbali.'}, {'title': 'Genere dei Nomi Italiani', 'url': '../../apps/it-genere/index.html', 'desc': 'Guida interattiva al genere dei sostantivi.'}], 'practice': '../../practice/index.html?lang=IT', 'games': '../../games/index.html?lang=IT', 'hub': 'index.html', 'lang': 'it'},
    'ru': {'apps': [{'title': 'Спряжение русских глаголов', 'url': '../../apps/ru-spryazhenie/index.html', 'desc': 'База спряжения и видовых пар глаголов.'}, {'title': 'Род и падежи существительных', 'url': '../../apps/ru-rod-padezhi/index.html', 'desc': 'Интерактивная система падежей и рода.'}], 'practice': '../../practice/index.html?lang=RU', 'games': '../../games/index.html?lang=RU', 'hub': 'index.html', 'lang': 'ru'},
    'el': {'apps': [{'title': 'Σύνταξη Ρημάτων & Ουσιαστικών', 'url': '../../apps/el-syntaxi/index.html', 'desc': 'Εφαρμογή σύνταξης και συντακτικής κυβέρνησης.'}, {'title': 'Κλίση Ρημάτων', 'url': '../../apps/el-klisi-rimaton/index.html', 'desc': 'Πλήρης οδηγός κλίσης ρημάτων.'}, {'title': 'Γένος & Πτώσεις Ουσιαστικών', 'url': '../../apps/el-genos-ptoseis/index.html', 'desc': 'Οδηγός γένους και πτώσεων ουσιαστικών.'}], 'practice': '../../practice/index.html?lang=EL', 'games': '../../games/index.html?lang=EL', 'hub': 'index.html', 'lang': 'el'}
}

for lang, data in subpage_data.items():
    for sub in ['grammar.html', 'vocabulary.html']:
        path = f'languages/{lang}/{sub}'
        if not os.path.exists(path):
            continue

        title_type = 'Grammar' if sub == 'grammar.html' else 'Vocabulary'
        cards_html = ''

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
  <h1 style="font-size: 2.2rem; font-weight: 900; color: #1a365d; margin-top: 1rem; margin-bottom: 0.5rem;">{title_type} Reference & Interactive Tools</h1>
  <p style="color: #4a5568; font-size: 1.05rem; margin-bottom: 2rem;">Explore interactive reference engines and practice tools for {lang_code}.</p>

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

print('Successfully removed manual links from public language hubs and subpages!')

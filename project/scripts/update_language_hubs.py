import glob, os, re

hub_data = {
    'en': {
        'code': 'en', 'ucode': 'EN', 'flag': '🇬🇧', 'name': 'English', 'native': 'English',
        'manual_a0_a1': '../../manuals/english-a0-a1.html', 'manual_a2': '../../manuals/english-a2.html',
        'manual_b1': '../../manuals/english-b1.html', 'manual_b2': '../../manuals/english-b2.html',
        'manual_c1': '../../manuals/english-c1.html', 'manual_c2': '../../manuals/english-c2.html',
        'roadmap': 'curriculum.html', 'practice_lang': 'EN',
        'apps': [
            {'name': 'English Verbs & Prepositions', 'url': '../../apps/en-verb-prep/index.html', 'desc': 'Interactive engine for dependent prepositions & phrasal verbs.'}
        ]
    },
    'fr': {
        'code': 'fr', 'ucode': 'FR', 'flag': '🇫🇷', 'name': 'French', 'native': 'Français',
        'manual_a0_a1': '../../manuals/francaise-a0-a1.html', 'manual_a2': '../../manuals/francaise-a2.html',
        'roadmap': 'curriculum.html', 'practice_lang': 'FR',
        'apps': [
            {'name': 'Régime Prépositionnel Français', 'url': '../../apps/fr-regime/index.html', 'desc': 'Engine for French verb, noun & adjective prepositional regimes.'},
            {'name': 'Le Conjugeur Français', 'url': '../../apps/fr-conjugeur/index.html', 'desc': 'Complete verb conjugation & tense reference.'},
            {'name': 'Genre des Noms Français', 'url': '../../apps/fr-genre/index.html', 'desc': 'Interactive French noun gender & rule finder.'}
        ]
    },
    'it': {
        'code': 'it', 'ucode': 'IT', 'flag': '🇮🇹', 'name': 'Italian', 'native': 'Italiano',
        'manual_a0_a1': '../../manuals/italiano-a0-a1.html', 'manual_a2': '../../manuals/italiano-a2.html',
        'roadmap': 'curriculum.html', 'practice_lang': 'IT',
        'apps': [
            {'name': 'Reggenza Verbale Italiana', 'url': '../../apps/it-reggenza/index.html', 'desc': 'Italian prepositional regime engine for verbs, nouns & adjectives.'},
            {'name': 'Il Coniugatore Italiano', 'url': '../../apps/it-coniugatore/index.html', 'desc': 'Verb conjugation database & tense reference.'},
            {'name': 'Genere dei Nomi Italiani', 'url': '../../apps/it-genere/index.html', 'desc': 'Italian noun gender classification & irregular patterns.'}
        ]
    },
    'ru': {
        'code': 'ru', 'ucode': 'RU', 'flag': '🇷🇺', 'name': 'Russian', 'native': 'Русский',
        'manual_a0_a1': '../../manuals/russkiy-a0-a1.html', 'manual_a2': '../../manuals/russkiy-a2.html',
        'roadmap': 'curriculum.html', 'practice_lang': 'RU',
        'apps': [
            {'name': 'Спряжение русских глаголов', 'url': '../../apps/ru-spryazhenie/index.html', 'desc': 'Russian verb conjugation & aspect pairs.'},
            {'name': 'Род и падежи существительных', 'url': '../../apps/ru-rod-padezhi/index.html', 'desc': 'Russian noun gender & 6-case declension engine.'}
        ]
    },
    'el': {
        'code': 'el', 'ucode': 'EL', 'flag': '🇬🇷', 'name': 'Greek', 'native': 'Ελληνικά',
        'manual_a0_a1': '../../manuals/ellinika-a0-a1.html', 'manual_a2': '../../manuals/ellinika-a2.html',
        'roadmap': 'curriculum.html', 'practice_lang': 'EL',
        'apps': [
            {'name': 'Σύνταξη Ρημάτων & Ουσιαστικών', 'url': '../../apps/el-syntaxi/index.html', 'desc': 'Greek verb & noun syntax government engine.'},
            {'name': 'Κλίση Ρημάτων', 'url': '../../apps/el-klisi-rimaton/index.html', 'desc': 'Greek verb conjugation reference.'},
            {'name': 'Γένος & Πτώσεις Ουσιαστικών', 'url': '../../apps/el-genos-ptoseis/index.html', 'desc': 'Greek noun gender & case inflection reference.'}
        ]
    },
    'es': {
        'code': 'es', 'ucode': 'ES', 'flag': '🇪🇸', 'name': 'Spanish', 'native': 'Español',
        'manual_a0_a1': '../../manuals/espanol-a0-a1.html', 'manual_a2': '../../manuals/espanol-a2.html',
        'roadmap': '../../languages/es/index.html', 'practice_lang': 'ES', 'apps': []
    },
    'de': {
        'code': 'de', 'ucode': 'DE', 'flag': '🇩🇪', 'name': 'German', 'native': 'Deutsch',
        'manual_a0_a1': '../../manuals/deutsch-a0-a1.html', 'manual_a2': '../../manuals/deutsch-a2.html',
        'roadmap': '../../languages/de/index.html', 'practice_lang': 'DE', 'apps': []
    },
    'pt': {
        'code': 'pt', 'ucode': 'PT', 'flag': '🇵🇹', 'name': 'Portuguese', 'native': 'Português',
        'manual_a0_a1': '../../manuals/portugues-a0-a1.html', 'manual_a2': '../../manuals/portugues-a2.html',
        'roadmap': '../../languages/pt/index.html', 'practice_lang': 'PT', 'apps': []
    },
    'hy': {
        'code': 'hy', 'ucode': 'HY', 'flag': '🇦🇲', 'name': 'Armenian', 'native': 'Հայերեն',
        'manual_a0_a1': '../../manuals/hayots-a0-a1.html', 'manual_a2': '../../manuals/hayots-a2.html',
        'roadmap': '../../languages/hy/index.html', 'practice_lang': 'HY', 'apps': []
    },
    'ka': {
        'code': 'ka', 'ucode': 'KA', 'flag': '🇬🇪', 'name': 'Georgian', 'native': 'ქართული',
        'manual_a0_a1': '../../manuals/qartuli-a0-a1.html', 'manual_a2': '../../manuals/qartuli-a2.html',
        'roadmap': '../../languages/ka/index.html', 'practice_lang': 'KA', 'apps': []
    },
    'tt': {
        'code': 'tt', 'ucode': 'TT', 'flag': '🏴', 'name': 'Tatar', 'native': 'Татарча',
        'manual_a0_a1': '../../manuals/tatar-a0-a1.html', 'manual_a2': '../../manuals/tatar-a2.html',
        'roadmap': '../../languages/tt/index.html', 'practice_lang': 'TT', 'apps': []
    },
    'ba': {
        'code': 'ba', 'ucode': 'BA', 'flag': '🏴', 'name': 'Bashkir', 'native': 'Башҡортса',
        'manual_a0_a1': '../../manuals/bashqort-a0-a1.html', 'manual_a2': '../../manuals/bashqort-a2.html',
        'roadmap': '../../languages/ba/index.html', 'practice_lang': 'BA', 'apps': []
    },
    'br': {
        'code': 'br', 'ucode': 'BR', 'flag': '🏴', 'name': 'Breton', 'native': 'Brezhoneg',
        'manual_a0_a1': '../../manuals/brezhoneg-a0-a1.html', 'manual_a2': '../../manuals/brezhoneg-a2.html',
        'roadmap': '../../languages/br/index.html', 'practice_lang': 'BR', 'apps': []
    }
}

for lang, data in hub_data.items():
    filepath = f'languages/{lang}/index.html'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update jump links
    if 'href="#interactive-tools"' not in content:
        content = content.replace(
            '<a href="#daily-dose" class="sd-jump-link">Daily Dose</a>',
            '<a href="#daily-dose" class="sd-jump-link">Daily Dose</a>\n      <a href="#interactive-tools" class="sd-jump-link">Manuals & Tools</a>'
        )

    # 2. Update daily dose section HTML to include idiom of the day
    daily_section_regex = r'<section id="daily-dose">.*?</section>'

    new_daily_html = '''<section id="daily-dose">
  <div class="sec-head reveal">
    <span class="sec-tag" data-translate-key="daily_dose_tag">💊 Daily Dose & Cultural Insights</span>
    <h2 data-translate-key="daily_dose_title">Fact & Idiom of the Day 💡</h2>
  </div>
  <div class="daily-grid">
    <div class="daily-card reveal" data-bg="🤣">
      <h3 data-translate-key="fun_fact_title">Fact of the Day 🤣</h3>
      <div class="daily-content" id="fun-fact-of-the-day" data-translate-key="fun_fact_placeholder">Loading...</div>
    </div>
    <div class="daily-card reveal" data-bg="💡">
      <h3 data-translate-key="idiom_title">Idiom of the Day 💬</h3>
      <div class="daily-content" id="idiom-of-the-day">Loading...</div>
    </div>
  </div>
</section>'''

    content = re.sub(daily_section_regex, new_daily_html, content, flags=re.DOTALL)

    # 3. Create interactive-tools section
    manual_links_html = f'''<a href="{data['manual_a0_a1']}" class="resource-card reveal">
      <div class="rc-icon">📘</div>
      <div class="rc-name">3-Book Manual (A0–A1)</div>
      <div class="rc-desc">Grammar, Vocabulary & Communication Books for starter learners.</div>
      <div class="rc-link">Explore →</div>
    </a>
    <a href="{data['manual_a2']}" class="resource-card reveal">
      <div class="rc-icon">📙</div>
      <div class="rc-name">3-Book Manual (A2)</div>
      <div class="rc-desc">Elementary grammar, thematic collocations & dialogue maps.</div>
      <div class="rc-link">Explore →</div>
    </a>'''

    if 'manual_b1' in data:
        manual_links_html += f'''
    <a href="{data['manual_b1']}" class="resource-card reveal">
      <div class="rc-icon">📗</div>
      <div class="rc-name">3-Book Manual (B1)</div>
      <div class="rc-desc">Intermediate grammar structures, expanded lexicon & conversation.</div>
      <div class="rc-link">Explore →</div>
    </a>'''
    if 'manual_b2' in data:
        manual_links_html += f'''
    <a href="{data['manual_b2']}" class="resource-card reveal">
      <div class="rc-icon">📕</div>
      <div class="rc-name">3-Book Manual (B2)</div>
      <div class="rc-desc">Upper-intermediate discourse, nuanced syntax & advanced fluency.</div>
      <div class="rc-link">Explore →</div>
    </a>'''
    if 'manual_c1' in data:
        manual_links_html += f'''
    <a href="{data['manual_c1']}" class="resource-card reveal">
      <div class="rc-icon">📓</div>
      <div class="rc-name">3-Book Manual (C1)</div>
      <div class="rc-desc">Advanced precision, professional register & academic prose.</div>
      <div class="rc-link">Explore →</div>
    </a>'''
    if 'manual_c2' in data:
        manual_links_html += f'''
    <a href="{data['manual_c2']}" class="resource-card reveal">
      <div class="rc-icon">🎓</div>
      <div class="rc-name">3-Book Manual (C2)</div>
      <div class="rc-desc">Mastery & native-level idiomatic fluency across domains.</div>
      <div class="rc-link">Explore →</div>
    </a>'''

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

    interactive_tools_html = f'''<!-- Manuals, Interactive Apps & Practice -->
<section id="interactive-tools">
  <div class="sec-head reveal">
    <span class="sec-tag">🛠️ Complete Learning Suite</span>
    <h2>3-Book Manuals, Apps & Practice</h2>
    <p>Everything you need for {data['native']}: structured 3-book manuals, interactive reference engines, and instant practice.</p>
  </div>
  <div class="resources-grid">
    {manual_links_html}
    {app_links_html}
    {practice_links_html}
  </div>
</section>

'''

    # Replace existing #interactive-tools section if present, or insert before #resources
    if '<section id="interactive-tools">' in content:
        tools_regex = r'<!-- Manuals, Interactive Apps & Practice -->\s*<section id="interactive-tools">.*?</section>\s*'
        content = re.sub(tools_regex, interactive_tools_html, content, flags=re.DOTALL)
    elif '<section id="resources">' in content:
        content = content.replace('<section id="resources">', interactive_tools_html + '<section id="resources">')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('All 13 language hub pages updated successfully!')

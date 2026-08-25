import os, glob

files = [
    'ai-and-the-brain-intermediate.html',
    'ai-and-the-brain-upper-intermediate.html',
    'ai-reality-delusion.html',
    'animal-cooperation-language-intermediate.html',
    'animal-cooperation-language-upper-intermediate.html',
    'ape-laughter-speech-origin-elementary.html',
    'ape-laughter-speech-origin-intermediate.html',
    'brain-cells-motivation-advanced.html',
    'brain-cells-motivation-intermediate.html',
    'brain-improving-in-90s-intermediate.html',
    'brain-improving-in-90s-upper-intermediate.html',
    'childhood-obesity-theory-elementary.html',
    'childhood-obesity-theory-intermediate.html',
    'childhood-obesity-theory-upper-intermediate.html',
    'climate-scientist-warming-report-intermediate.html',
    'climate-scientist-warming-report-upper-intermediate.html',
    'coffee-fat-muscle-hormones-advanced.html',
    'football-beats-shamrock-intermediate.html',
    'football-beats-shamrock-upper-intermediate.html',
    'fusion-energy.html',
    'grandmother-evolutionary-mystery.html',
    'grandparents-mental-health.html',
    'gut-brain-memory-intermediate.html',
    'hidden-regenerative-powers-intermediate.html',
    'hidden-regenerative-powers-upper-intermediate.html',
    'human-family-tree-rewrite-advanced.html',
    'impersonation-accounts.html',
    'living-most-creative-time.html',
    'losing-spoken-words.html',
    'mendelian-laws-broken.html'
]

os.makedirs('apps/premium-events/clubs/kus/fr/sessions/keeping-up-with-science', exist_ok=True)
os.makedirs('apps/premium-events/clubs/kus/ru/sessions/keeping-up-with-science', exist_ok=True)

def adapt_relative_paths(html, lang):
    html = html.replace('href="../../../../../../', 'href="../../../../../../../')
    html = html.replace('src="../../../../../../', 'src="../../../../../../../')
    html = html.replace('href="../../style.css"', 'href="../../../style.css"')
    html = html.replace('href="../../keeping-up-with-science.html"', 'href="../../../keeping-up-with-science.html"')

    if lang == 'fr':
        html = html.replace('<html lang="en">', '<html lang="fr">')
        html = html.replace('Home</a>', 'Accueil</a>')
        html = html.replace('Events</a>', 'Événements</a>')
        html = html.replace('← Back to Club', '← Retour au Club')
        html = html.replace('Duration</h4><p>60 minutes</p>', 'Durée</h4><p>60 minutes</p>')
        html = html.replace('Languages</h4>', 'Langues</h4>')
        html = html.replace('Level</h4>', 'Niveau</h4>')
        html = html.replace('📖 Session Vocabulary', '📖 Vocabulaire de la session')
        html = html.replace('🎙️ Discussion Structure', '🎙️ Structure de la discussion')
        html = html.replace('🟠 Warm-up', '🟠 Échauffement')
        html = html.replace('🔵 Round 1', '🔵 Tour 1')
        html = html.replace('🟢 Round 2', '🟢 Tour 2')
        html = html.replace('✏️ Teacher\'s Note', '✏️ Note de l\'enseignant')
    elif lang == 'ru':
        html = html.replace('<html lang="en">', '<html lang="ru">')
        html = html.replace('Home</a>', 'Главная</a>')
        html = html.replace('Events</a>', 'Мероприятия</a>')
        html = html.replace('← Back to Club', '← Назад в клуб')
        html = html.replace('Duration</h4><p>60 minutes</p>', 'Длительность</h4><p>60 минут</p>')
        html = html.replace('Languages</h4>', 'Языки</h4>')
        html = html.replace('Level</h4>', 'Уровень</h4>')
        html = html.replace('📖 Session Vocabulary', '📖 Словарь сессии')
        html = html.replace('🎙️ Discussion Structure', '🎙️ Структура дискуссии')
        html = html.replace('🟠 Warm-up', '🟠 Разминка')
        html = html.replace('🔵 Round 1', '🔵 Раунд 1')
        html = html.replace('🟢 Round 2', '🟢 Раунд 2')
        html = html.replace('✏️ Teacher\'s Note', '✏️ Заметка преподавателя')

    return html

for fn in files:
    src_path = f'apps/premium-events/clubs/kus/sessions/keeping-up-with-science/{fn}'
    if not os.path.exists(src_path):
        continue
    with open(src_path, 'r', encoding='utf-8') as f:
        en_html = f.read()

    fr_html = adapt_relative_paths(en_html, 'fr')
    ru_html = adapt_relative_paths(en_html, 'ru')

    fr_path = f'apps/premium-events/clubs/kus/fr/sessions/keeping-up-with-science/{fn}'
    ru_path = f'apps/premium-events/clubs/kus/ru/sessions/keeping-up-with-science/{fn}'

    with open(fr_path, 'w', encoding='utf-8') as f:
        f.write(fr_html)
    with open(ru_path, 'w', encoding='utf-8') as f:
        f.write(ru_html)

    print(f'Generated FR and RU for science {fn}')

print('Generated FR and RU sessions for keeping-up-with-science.')

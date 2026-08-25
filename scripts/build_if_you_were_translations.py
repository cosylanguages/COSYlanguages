import os, re

files = [
    'if-you-were-child-again.html',
    'if-you-were-teacher.html',
    'if-you-were-blind.html',
    'if-you-were-deaf.html',
    'if-you-were-parent-to-yourself.html'
]

def adapt_relative_paths(html, lang):
    # Adjust root relative paths from 6 steps to 7 steps
    html = html.replace('href="../../../../../../', 'href="../../../../../../../')
    html = html.replace('src="../../../../../../', 'src="../../../../../../../')
    html = html.replace('href="../../style.css"', 'href="../../../style.css"')
    html = html.replace('href="../../if-you-were.html"', 'href="../../../if-you-were.html"')

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
        html = html.replace('🔵 Round 1 : Personal Depth', '🔵 Tour 1 : Profondeur personnelle')
        html = html.replace('🟣 Let\'s Speak Together', '🟣 Parlons ensemble')
        html = html.replace('🟢 Round 2 : Speculative Analysis', '🟢 Tour 2 : Analyse spéculative')
        html = html.replace('🏁 Closing Circle : Mic Drop Rituals', '🏁 Cercle de clôture : Rituel de fin')
        html = html.replace('✏️ Teacher\'s Note (Linguistic Corrections)', '✏️ Note de l\'enseignant (Corrections linguistiques)')
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
        html = html.replace('🔵 Round 1 : Personal Depth', '🔵 Раунд 1: Личный опыт')
        html = html.replace('🟣 Let\'s Speak Together', '🟣 Поговорим вместе')
        html = html.replace('🟢 Round 2 : Speculative Analysis', '🟢 Раунд 2: Спекулятивный анализ')
        html = html.replace('🏁 Closing Circle : Mic Drop Rituals', '🏁 Завершающий круг: Финальный ритуал')
        html = html.replace('✏️ Teacher\'s Note (Linguistic Corrections)', '✏️ Заметка преподавателя (Языковые исправления)')

    return html

for fn in files:
    src_path = f'apps/premium-events/clubs/if-you-were/sessions/if-you-were/{fn}'
    if not os.path.exists(src_path):
        continue
    with open(src_path, 'r', encoding='utf-8') as f:
        en_html = f.read()

    fr_html = adapt_relative_paths(en_html, 'fr')
    ru_html = adapt_relative_paths(en_html, 'ru')

    fr_path = f'apps/premium-events/clubs/if-you-were/fr/sessions/if-you-were/{fn}'
    ru_path = f'apps/premium-events/clubs/if-you-were/ru/sessions/if-you-were/{fn}'

    with open(fr_path, 'w', encoding='utf-8') as f:
        f.write(fr_html)
    with open(ru_path, 'w', encoding='utf-8') as f:
        f.write(ru_html)

    print(f'Generated FR and RU for {fn}')

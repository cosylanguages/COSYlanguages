import os

files = [
    'attention-economy.html',
    'changing-our-brains.html',
    'designed-to-addict.html',
    'the-30-day-breakup.html'
]

os.makedirs('apps/premium-events/nights/long-reads/fr/sessions/long-reads', exist_ok=True)
os.makedirs('apps/premium-events/nights/long-reads/ru/sessions/long-reads', exist_ok=True)

def adapt_relative_paths(html, lang):
    html = html.replace('href="../../../../../../', 'href="../../../../../../../')
    html = html.replace('src="../../../../../../', 'src="../../../../../../../')
    html = html.replace('href="../../style.css"', 'href="../../../style.css"')
    html = html.replace('href="../../long-reads.html"', 'href="../../../long-reads.html"')

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
    src_path = f'apps/premium-events/nights/long-reads/sessions/long-reads/{fn}'
    if not os.path.exists(src_path):
        continue
    with open(src_path, 'r', encoding='utf-8') as f:
        en_html = f.read()

    fr_html = adapt_relative_paths(en_html, 'fr')
    ru_html = adapt_relative_paths(en_html, 'ru')

    fr_path = f'apps/premium-events/nights/long-reads/fr/sessions/long-reads/{fn}'
    ru_path = f'apps/premium-events/nights/long-reads/ru/sessions/long-reads/{fn}'

    with open(fr_path, 'w', encoding='utf-8') as f:
        f.write(fr_html)
    with open(ru_path, 'w', encoding='utf-8') as f:
        f.write(ru_html)

    print(f'Generated FR and RU for long-reads {fn}')

# Also generate FR and RU hub pages
with open('apps/premium-events/nights/long-reads/long-reads.html', 'r', encoding='utf-8') as f:
    en_hub = f.read()

fr_hub = en_hub.replace('href="../../../../', 'href="../../../../../')
fr_hub = fr_hub.replace('src="../../../../', 'src="../../../../../')
fr_hub = fr_hub.replace('href="./style.css"', 'href="../style.css"')
fr_hub = fr_hub.replace('<html lang="en">', '<html lang="fr">')
fr_hub = fr_hub.replace('← All Speaking Clubs', '← Tous les Clubs de Conversation')
fr_hub = fr_hub.replace('📅 Upcoming Sessions', '📅 Sessions à venir')
fr_hub = fr_hub.replace('🕒 Past Sessions', '🕒 Sessions Passées')

os.makedirs('apps/premium-events/nights/long-reads/fr', exist_ok=True)
with open('apps/premium-events/nights/long-reads/fr/long-reads.html', 'w', encoding='utf-8') as f:
    f.write(fr_hub)

ru_hub = en_hub.replace('href="../../../../', 'href="../../../../../')
ru_hub = ru_hub.replace('src="../../../../', 'src="../../../../../')
ru_hub = ru_hub.replace('href="./style.css"', 'href="../style.css"')
ru_hub = ru_hub.replace('<html lang="en">', '<html lang="ru">')
ru_hub = ru_hub.replace('← All Speaking Clubs', '← Все разговорные клубы')
ru_hub = ru_hub.replace('📅 Upcoming Sessions', '📅 Предстоящие сессии')
ru_hub = ru_hub.replace('🕒 Past Sessions', '🕒 Прошедшие сессии')

os.makedirs('apps/premium-events/nights/long-reads/ru', exist_ok=True)
with open('apps/premium-events/nights/long-reads/ru/long-reads.html', 'w', encoding='utf-8') as f:
    f.write(ru_hub)

print('Generated FR and RU hub pages for long-reads.')

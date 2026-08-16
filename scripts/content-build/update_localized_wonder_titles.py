import os
import glob

# Russian updates
ru_files = glob.glob('apps/premium-events/clubs/wonder/ru/**/*.html', recursive=True)
for filepath in ru_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Overview page title / headers
    content = content.replace('<h1>I Couldn\'t Help But Wonder</h1>', '<h1>И тут я задумался</h1>')
    content = content.replace('I Couldn\'t Help But Wonder — COSY Languages', 'И тут я задумался — COSY Languages')
    content = content.replace('<title>I Couldn\'t Help But Wonder</title>', '<title>И тут я задумался</title>')

    # Breadcrumbs, club-tag, back links
    content = content.replace('<div class="club-tag">I Couldn\'t Help But Wonder</div>', '<div class="club-tag">И тут я задумался</div>')
    content = content.replace('← Назад в I Couldn\'t Help But Wonder', '← Назад в И тут я задумался')

    # Breadcrumb link text
    content = content.replace('i-couldnt-help-but-wonder.html">I Couldn\'t Help But Wonder</a>', 'i-couldnt-help-but-wonder.html">И тут я задумался</a>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# French updates
fr_files = glob.glob('apps/premium-events/clubs/wonder/fr/**/*.html', recursive=True)
for filepath in fr_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Overview page title / headers
    content = content.replace('<h1>I Couldn\'t Help But Wonder</h1>', '<h1>Et là je me suis demandé</h1>')
    content = content.replace('I Couldn\'t Help But Wonder — COSY Languages', 'Et là je me suis demandé — COSY Languages')
    content = content.replace('<title>I Couldn\'t Help But Wonder</title>', '<title>Et là je me suis demandé</title>')

    # Breadcrumbs, club-tag, back links
    content = content.replace('<div class="club-tag">I Couldn\'t Help But Wonder</div>', '<div class="club-tag">Et là je me suis demandé</div>')
    content = content.replace('← Retour à I Couldn\'t Help But Wonder', '← Retour à Et là je me suis demandé')
    content = content.replace('← Back to I Couldn\'t Help But Wonder', '← Retour à Et là je me suis demandé')

    # Breadcrumb link text
    content = content.replace('i-couldnt-help-but-wonder.html">I Couldn\'t Help But Wonder</a>', 'i-couldnt-help-but-wonder.html">Et là je me suis demandé</a>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated titles across RU and FR Wonder files!")

import os
from bs4 import BeautifulSoup

paths = [
    'events/sessions/the-greatest-quotes',
    'events/fr/sessions/the-greatest-quotes',
    'events/ru/sessions/the-greatest-quotes'
]

results = []
for p in paths:
    if not os.path.exists(p):
        continue
    for f in os.listdir(p):
        if not f.endswith('.html') or f.startswith('template'):
            continue
        filepath = os.path.join(p, f)
        with open(filepath, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')

            # Level
            level_el = soup.find(text=lambda x: x and ('Level' in x or 'Niveau' in x or 'Уровень' in x))
            level = ""
            if level_el:
                parent = level_el.find_parent()
                if parent:
                    sibling = parent.find_next_sibling()
                    if sibling:
                        level = sibling.get_text(strip=True)

            # Title / Heading
            h1 = soup.find('h1')
            heading = h1.get_text(strip=True) if h1 else ""

            # Theme
            theme_el = soup.find(text=lambda x: x and ('Theme' in x or 'Thème' in x or 'Тема' in x))
            theme = ""
            if theme_el:
                parent = theme_el.find_parent()
                if parent:
                    sibling = parent.find_next_sibling()
                    if sibling:
                        theme = sibling.get_text(strip=True)

            # Vocabulary
            words = []
            for w_div in soup.find_all('div', class_='vocab-word'):
                words.append(w_div.get_text(strip=True))

            results.append({
                'path': p,
                'file': f,
                'level': level,
                'theme': theme,
                'heading': heading,
                'words': words
            })

print(f"Total files found: {len(results)}")
# print out the first 10 files
for r in results[:15]:
    print(f"\nFile: {r['path']}/{r['file']} ({r['level']})")
    print(f"Theme: {r['theme']}")
    print(f"Heading: {r['heading']}")
    print(f"Words: {r['words']}")

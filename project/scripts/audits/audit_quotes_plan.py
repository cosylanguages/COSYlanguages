import os
from bs4 import BeautifulSoup

paths = {
    'en': 'events/sessions/the-greatest-quotes',
    'fr': 'events/fr/sessions/the-greatest-quotes',
    'ru': 'events/ru/sessions/the-greatest-quotes'
}

for lang, folder in paths.items():
    if not os.path.exists(folder):
        continue
    print(f"\n==================== LANGUAGE: {lang.upper()} ====================")
    for f in sorted(os.listdir(folder)):
        if f.endswith('.html') and not f.startswith('template'):
            filepath = os.path.join(folder, f)
            with open(filepath, 'r', encoding='utf-8') as file:
                soup = BeautifulSoup(file, 'html.parser')

            # Extract basic metadata
            h1 = soup.find('h1')
            h1_text = h1.get_text(strip=True) if h1 else "N/A"

            level_p = "N/A"
            theme_p = "N/A"
            meta_grid = soup.find('div', class_='session-meta-grid')
            if meta_grid:
                items = meta_grid.find_all('div', class_='meta-item')
                for item in items:
                    h4 = item.find('h4')
                    if h4:
                        h4_text = h4.get_text(strip=True).lower()
                        p_val = item.find('p').get_text(strip=True) if item.find('p') else "N/A"
                        if 'level' in h4_text or 'niveau' in h4_text or 'уровень' in h4_text:
                            level_p = p_val
                        elif 'theme' in h4_text or 'thème' in h4_text or 'тема' in h4_text:
                            theme_p = p_val

            words = [w.get_text(strip=True) for w in soup.find_all('div', class_='vocab-word')]
            print(f"[{f}] {level_p} | Theme: {theme_p}")
            print(f"  H1: {h1_text}")
            print(f"  Vocab: {words}")

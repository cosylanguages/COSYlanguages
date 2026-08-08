import os
import re
from bs4 import BeautifulSoup

THEME_MAPPING = {
    r'lunar-new-year': 'theme-celebrate-lunar',
    r'diwali-festival': 'theme-celebrate-diwali',
    r'national-simplicity-day': 'theme-celebrate-simplicity',
    r'national-workaholics-day': 'theme-celebrate-workaholics',
    r'family-remittances-day': 'theme-celebrate-remittances',
    r'urban-beekeeping-day': 'theme-celebrate-beekeeping',
    r'national-someone-day': 'theme-celebrate-someone',
    r'pandemonium-day': 'theme-celebrate-pandemonium',
    r'international-peace-love-day': 'theme-celebrate-peace',
    r'international-asteroid-day': 'theme-celebrate-asteroid',
    r'single-working-womens-day': 'theme-celebrate-womens',
    r'national-aunt-and-uncle-day': 'theme-celebrate-family',
    r'world-nature-conservation-day': 'theme-celebrate-nature',
}

def get_theme_class(filename):
    for pattern, cls in THEME_MAPPING.items():
        if re.search(pattern, filename, re.IGNORECASE):
            return cls
    return 'theme-celebrate-general'

def process_file(filepath):
    filename = os.path.basename(filepath)
    if filename == 'template-celebrate.html':
        return

    theme_cls = get_theme_class(filename)

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Use BS4 to update the class cleanly
    soup = BeautifulSoup(content, 'html.parser')
    body = soup.find('body')
    if body:
        # Get existing classes
        classes = body.get('class', [])
        if isinstance(classes, str):
            classes = [classes]

        # Add the new theme class if not already present
        if theme_cls not in classes:
            # We want to remove any existing theme-celebrate-* classes first
            classes = [c for c in classes if not c.startswith('theme-celebrate-')]
            classes.append(theme_cls)
            body['class'] = classes

            # Save the modified soup back
            with open(filepath, 'w', encoding='utf-8') as out_f:
                # Use formatter='html' or formatter=None to prevent changing html entities
                out_f.write(str(soup))
            print(f"Applied class '{theme_cls}' to {filepath}")
            return True
    return False

def main():
    dirs = [
        'events/sessions/lets-celebrate',
        'events/fr/sessions/lets-celebrate',
        'events/ru/sessions/lets-celebrate'
    ]

    count = 0
    for d in dirs:
        if not os.path.exists(d):
            continue
        for filename in os.listdir(d):
            if filename.endswith('.html'):
                filepath = os.path.join(d, filename)
                if process_file(filepath):
                    count += 1
    print(f"Successfully modified {count} Let's Celebrate session files.")

if __name__ == '__main__':
    main()

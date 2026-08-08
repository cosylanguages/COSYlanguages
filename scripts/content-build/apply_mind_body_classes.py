import os
import re
from bs4 import BeautifulSoup

# Theme mapping of file patterns to theme class names
THEME_MAPPING = {
    r'dopamine': 'theme-mind-dopamine',
    r'sleep': 'theme-mind-sleep',
    r'limerence': 'theme-mind-limerence',
    r'depersonalization': 'theme-mind-depersonalization',
    r'broken-children-grown-bodies': 'theme-mind-inner-child',
    r'fear-of-love': 'theme-mind-fear-love',
    r'kidlins-law': 'theme-mind-kidlin',
    r'gilberts-law': 'theme-mind-gilbert',
    r'wilsons-law': 'theme-mind-wilson',
    r'murphys-law': 'theme-mind-murphy',
    r'law-of-attraction': 'theme-mind-attraction',
    r'finding-the-right-person': 'theme-mind-connection',
    r'vlyubilsya-v-druga': 'theme-mind-connection', # Russian file pattern
    r'aspiration-vs-inspiration': 'theme-mind-inspiration',
    r'habits': 'theme-mind-habits',
    r'benjamin-franklin': 'theme-mind-franklin',
    r'maze-of-biases': 'theme-mind-rationality',
    r'bounded-rationality': 'theme-mind-rationality',
    r'moving-new-city-true-self': 'theme-mind-relocation',
    r'guilt-moving-abroad': 'theme-mind-relocation',
    r'impersonation': 'theme-mind-impersonation',
    r'propaganda': 'theme-mind-propaganda',
    r'blue-eyes-brown-eyes': 'theme-mind-propaganda',
    r'brainwashing': 'theme-mind-propaganda',
    r'addicted-to-drama': 'theme-mind-drama',
    r'smiles': 'theme-mind-smiles',
    r'conversations-avoid-enjoy': 'theme-mind-conversations',
    r'love-your-work': 'theme-mind-work',
    r'simmel-objective-freedom': 'theme-mind-work',
    r'language-mistakes': 'theme-mind-language',
    r'ne-ispravlyay-rech': 'theme-mind-language', # Russian file pattern
    r'anticipatory-grief': 'theme-mind-grief',
    r'pinkwashing': 'theme-mind-pinkwashing',
    r'purple-washing': 'theme-mind-purplewashing',
    r'bluewashing': 'theme-mind-bluewashing',
    r'redwashing': 'theme-mind-redwashing',
    r'sportswashing': 'theme-mind-sportswashing',
    r'whitewashing': 'theme-mind-whitewashing',
    r'ai-is-inevitable': 'theme-mind-ai',
}

def get_theme_class(filename):
    for pattern, cls in THEME_MAPPING.items():
        if re.search(pattern, filename, re.IGNORECASE):
            return cls
    # Default to theme-mind-rationality or general if no match
    return 'theme-mind-rationality'

def process_file(filepath):
    filename = os.path.basename(filepath)
    if filename == 'template-mind.html':
        return False

    theme_cls = get_theme_class(filename)

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')
    body = soup.find('body')
    if body:
        # Get existing classes
        classes = body.get('class', [])
        if isinstance(classes, str):
            classes = [classes]

        # Filter out existing theme-mind-* classes
        classes = [c for c in classes if not c.startswith('theme-mind-')]
        classes.append(theme_cls)
        body['class'] = classes

        # Save back the modified file
        with open(filepath, 'w', encoding='utf-8') as out_f:
            out_f.write(str(soup))
        print(f"Applied class '{theme_cls}' to {filepath}")
        return True
    return False

def main():
    dirs = [
        'events/sessions/mind-matters',
        'events/fr/sessions/mind-matters',
        'events/ru/sessions/mind-matters'
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
    print(f"Successfully processed {count} Mind Matters session files.")

if __name__ == '__main__':
    main()

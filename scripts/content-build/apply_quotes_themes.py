import os
import glob
import re

THEME_MAPPING = {
    'think-for-yourself': 'critical',
    'dangerous-blindness': 'critical',
    'turn-off-ai': 'critical',
    'ai-opposite-of-art': 'art',
    'madonna-ai-art': 'art',
    'voltaire-read-dance': 'art',
    'virginia-woolf-trigger': 'art',
    'disappear-with-art': 'art',
    'barbra-streisand': 'art',
    'einstein-passionately-curious': 'intellect',
    'feynman-education': 'intellect',
    'feynman-knowledge-isnt-free': 'intellect',
    'feynman-no-shame-knowing': 'intellect',
    'feynman-study-hard': 'intellect',
    'wisdom-of-socrates': 'intellect',
    'la-sagesse-de-socrate': 'intellect',
    'steve-jobs': 'intellect',
    'home-is-a-time': 'nostalgia',
    'saudade': 'nostalgia',
    'favorite-days-not-happened': 'nostalgia',
    'dolto-difficult-child': 'parenting',
    'langle-suppressed-child': 'parenting',
    'neufeld-resistance': 'parenting',
    'prishvin-convenient-people': 'parenting',
    'sukhomlinsky-obedience': 'parenting',
    'accept-gay-child': 'parenting',
    'dostoevsky-loving-power': 'relationships',
    'dostoevsky-politics-religion': 'relationships',
    'amish-tripathi': 'relationships',
    'brianna-pastor-proud': 'relationships',
    'jim-kwik': 'relationships',
    'robin-williams': 'relationships',
    'sadia-hakim-humanity': 'relationships',
    'weird-people-dreams': 'relationships',
    'underpaid-politicians-teachers': 'justice',
    'women-mothers-tragedy': 'justice',
    'sonder': 'empathy',
    'ability-to-notice-beauty': 'empathy',
    'compass-and-clock': 'empathy',
    'rain-seller-umbrella': 'empathy',
    'must-die-first': 'existential',
    'you-are-a-soul': 'existential',
    'stay-free-quote': 'existential',
    'memory-cards-storage-quote': 'digital'
}

paths = {
    'en': 'events/sessions/the-greatest-quotes',
    'fr': 'events/fr/sessions/the-greatest-quotes',
    'ru': 'events/ru/sessions/the-greatest-quotes'
}

def process_file(filepath):
    filename = os.path.basename(filepath)
    if filename.startswith('template'):
        return

    # Find which theme category it belongs to
    theme_cat = None
    for k, v in THEME_MAPPING.items():
        if k in filename:
            theme_cat = v
            break

    if not theme_cat:
        print(f"Warning: Theme not found for {filepath}, falling back to 'intellect'.")
        theme_cat = 'intellect'

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We want to replace <body> with <body class="theme-quotes-{category}">
    # To handle files that might already have a body class, we can check for <body or <body class=
    if '<body class="' in content:
        # If it already has body class, let's replace or add to it cleanly
        # But we saw they all have exactly <body>! Let's be thorough just in case.
        pattern = r'<body class="([^"]+)"'
        if re.search(pattern, content):
            new_content = re.sub(pattern, f'<body class="\\1 theme-quotes-{theme_cat}"', content)
        else:
            new_content = content.replace('<body>', f'<body class="theme-quotes-{theme_cat}">')
    else:
        new_content = content.replace('<body>', f'<body class="theme-quotes-{theme_cat}">')

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Applied 'theme-quotes-{theme_cat}' to {filepath}")

def run():
    for lang, folder in paths.items():
        if not os.path.exists(folder):
            continue
        print(f"\nProcessing {lang.upper()} folder: {folder}")
        files = glob.glob(os.path.join(folder, "*.html"))
        for filepath in sorted(files):
            process_file(filepath)

if __name__ == "__main__":
    run()

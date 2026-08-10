import os
import re

# Keyword mapping to select unique topic-relevant decorative icons (emojis with custom animation classes)
THEME_MAP = {
    # Psychology / Mind / Neurology
    r'brain|dopamine|discipline|psychology|mind|rationality|grief|depression|adhd|limerence|smiles|biases|compliance|self-actualization': '🧠',
    # AI / Digital / Tech
    r'ai|algorithm|robot|meta|tech|subscription|digital|typing|internet|social-media|impersonation': '🤖',
    # Chemistry / Physics / Biology / Sci-News
    r'science|genetics|mendelian|cell|regenerative|pain|disease|fusion|finger|obesity|ozempic|handedness': '🔬',
    # Earth / Climate / Ecology / Environment / Cities
    r'climate|warming|planet|earth|geography|dementia-risk|where-you-live|skyscraper|city|weather|rain|produce|waste': '🌍',
    # Animals / Evolution
    r'animal|spider|creatures|ape|laughter|cooperation|fatherhood': '🦁',
    # Culture / Celebration / Rituals / Festivals
    r'diwali|festival|celebrate|remittances|lunar|new-year|someone|simplicity|workaholic|pandemonium|beekeeping|peace': '🥳',
    # Philosophy / Writers / Artists / Famous figures
    r'quote|dostoevsky|einstein|socrates|feynman|woolf|jobs|voltaire|dolto|neufeld|watts|aurelius|streisand|kwik|pastor|williams|hakim': '💬',
    # Lifestyle / Cars / Pets / Home / School / Careers
    r'car|vehicle|fridge|pets|holidays|vacations|skyscrapers|jobs|beauty|compass|home|saudade|sonder': '🏡',
    # Speculative / Hypothesis / Empathy (If You Were)
    r'blind|deaf|parent|child|teacher': '🔮',
    # Debate / Controversy / Hard Topics
    r'debate|cloning|handwriting|upbringing|homework|assisted-dying|dying|death|waste|euthanasia|collective-guilt': '⚖️'
}

def get_icon_for_filename(filename):
    for pattern, icon in THEME_MAP.items():
        if re.search(pattern, filename, re.IGNORECASE):
            return icon
    return '🎙️' # fallback generic speaking club mic icon

def process_session_file(filepath):
    filename = os.path.basename(filepath)
    icon = get_icon_for_filename(filename)

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # If already injected, don't inject again
    if 'class="session-decorator-icon"' in content:
        return False

    # Find the <div class="club-tag">...</div> inside <header ...>
    # We want to insert the icon div right after it
    pattern = r'(<div class="club-tag">.*?</div>)'
    replacement = rf'\1\n  <div class="session-decorator-icon">{icon}</div>'

    new_content, count = re.subn(pattern, replacement, content, count=1, flags=re.DOTALL)

    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    dirs = [
        'events/sessions/keeping-up-with-science',
        'events/sessions/lets-celebrate',
        'events/sessions/the-greatest-quotes',
        'events/sessions/mind-matters',
        'events/sessions/my-life-with-without',
        'events/sessions/debatable-relatable',
        'events/sessions/i-couldnt-help-but-wonder',
        'apps/premium-events/nights/if-you-were/sessions/if-you-were'
    ]

    total_processed = 0
    total_modified = 0

    for d in dirs:
        if not os.path.exists(d):
            continue
        for filename in os.listdir(d):
            if filename.endswith('.html'):
                filepath = os.path.join(d, filename)
                total_processed += 1
                if process_session_file(filepath):
                    total_modified += 1

    print(f"Processed {total_processed} files. Injected decorative icons into {total_modified} files.")

if __name__ == '__main__':
    main()

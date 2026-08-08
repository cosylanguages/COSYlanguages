import os
import re
from bs4 import BeautifulSoup

def determine_family(filepath):
    path_lower = filepath.lower()
    if 'i-couldnt-help-but-wonder' in path_lower or 'debatable-relatable' in path_lower or 'my-life-with-without' in path_lower or 'the-greatest-quotes' in path_lower or 'if-you-were' in path_lower:
        return 'speaking-clubs'
    elif 'mind-matters' in path_lower:
        return 'psychology'
    elif 'keeping-up-with-science' in path_lower:
        return 'science'
    elif 'lets-celebrate' in path_lower:
        return 'celebrations'
    elif 'long-reads' in path_lower:
        return 'reading'
    elif 'cinema-club' in path_lower:
        return 'cinema'
    elif 'karaoke-club' in path_lower:
        return 'karaoke'
    return 'unknown'

def clean_and_standardize_vocab(soup):
    # Standardize vocab card structure if found
    # COSYlanguages format: Word — definition. Example: Example sentence.
    cards = soup.find_all('div', class_='vocab-card')
    for card in cards:
        word_el = card.find('div', class_='vocab-word')
        def_el = card.find('div', class_='vocab-def')
        ex_el = card.find('div', class_='vocab-example')
        if word_el and def_el and ex_el:
            # Strip extra whitespaces and make sure the format is uniform
            word_text = word_el.get_text().strip()
            def_text = def_el.get_text().strip()
            ex_text = ex_el.get_text().strip()

            # Remove any prepended "Example: " if it slipped into the text
            if ex_text.lower().startswith("example:"):
                ex_text = ex_text[8:].strip()
                ex_el.string = ex_text

def standardize_file(filepath):
    print(f"Processing: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')

    # Locate main content container
    main_el = soup.find('main', class_='content-container')
    if not main_el:
        print(f"Skipping (no main content container): {filepath}")
        return False

    family = determine_family(filepath)
    if family == 'unknown':
        print(f"Skipping (unknown pedagogical family): {filepath}")
        return False

    # Extract original blocks to reconstruct in a standardized order
    breadcrumbs = main_el.find('nav', class_='cosy-breadcrumbs')
    back_link = main_el.find('a', class_='back-link')

    # Sensitive notice / 18+ warning (find if exists)
    sensitive_notice = main_el.find('div', class_='sensitive-topic-warning') or main_el.find('div', class_='warning-block')
    if not sensitive_notice:
        # Search for any text indicating 18+ / sensitive topic warning
        for div in main_el.find_all('div'):
            if div.get_text() and ('sensitive topic' in div.get_text().lower() or '18+' in div.get_text().lower()):
                sensitive_notice = div
                break

    # Language Switcher
    lang_switcher = main_el.find('div', class_='cosy-session-switcher-placeholder')

    # Session Information Box (Sheet Card / Metadata grid)
    meta_grid = main_el.find('div', class_='session-meta-grid')

    # Format Switcher Buttons (Mini, Private etc)
    format_switcher = main_el.find('div', id='kus-dynamic-switcher-placeholder') or main_el.find('div', class_='format-switcher-placeholder')

    # Perspective Mirror / Duel Box / Research Log Profile
    perspective_panel = (
        main_el.find('div', class_='cosy-perspective-panel') or
        main_el.find('div', class_='mind-profile-box') or
        main_el.find('div', class_='debate-duel-box') or
        main_el.find('div', class_='science-journal-box')
    )

    # Collapsible transcript / Audio / Article Context
    audio_player = main_el.find('div', class_='wonder-audio-player-placeholder')
    transcript = main_el.find('details', class_='transcript-details') or main_el.find('details', class_='transcript')
    article_context = main_el.find('div', class_='science-source-card')

    # Introductory prompt / Scenario / Stimulus (often a div style with margin-bottom: 2rem)
    intro_prompts = []
    for div in main_el.find_all('div', recursive=False):
        if div.get('style') and 'margin-bottom: 2rem' in div.get('style') and not div.find('div', class_='session-meta-grid'):
            intro_prompts.append(div)
        elif div.get_text() and len(div.get_text().strip()) > 50 and not div.get('class') and div.name == 'div':
            intro_prompts.append(div)

    # Vocabulary section
    vocab_section = main_el.find('section', id='vocabulary')

    # Discussion rounds section
    discussion_section = main_el.find('section', id='structure') or main_el.find('section', id='rounds') or main_el.find('section', id='rounds-section')

    # Go Deeper Section (if already exists)
    go_deeper = main_el.find('section', id='go-deeper') or main_el.find('div', class_='go-deeper-placeholder')

    # EXTRACT the elements from the main container before re-appending in order
    extracted_elements = {}
    for name, el in [
        ('breadcrumbs', breadcrumbs),
        ('back_link', back_link),
        ('sensitive_notice', sensitive_notice),
        ('lang_switcher', lang_switcher),
        ('meta_grid', meta_grid),
        ('format_switcher', format_switcher),
        ('perspective_panel', perspective_panel),
        ('audio_player', audio_player),
        ('transcript', transcript),
        ('article_context', article_context),
        ('vocab_section', vocab_section),
        ('discussion_section', discussion_section),
        ('go_deeper', go_deeper)
    ]:
        if el:
            extracted_elements[name] = el.extract()

    extracted_intros = []
    for p in intro_prompts:
        extracted_intros.append(p.extract())

    # Clear out remaining text and comments to start fresh in <main class="content-container">
    main_el.clear()

    # Standardize Vocab Formatting
    if 'vocab_section' in extracted_elements:
        clean_and_standardize_vocab(extracted_elements['vocab_section'])

    # RECONSTRUCT MAIN CONTENT IN THE DECLARED STANDARDIZED rhythm:

    # 1. Breadcrumbs
    if 'breadcrumbs' in extracted_elements:
        main_el.append(extracted_elements['breadcrumbs'])

    # 2. Back link
    if 'back_link' in extracted_elements:
        main_el.append(extracted_elements['back_link'])

    # 3. Sensitive topic notice (first item of content)
    if 'sensitive_notice' in extracted_elements:
        main_el.append(extracted_elements['sensitive_notice'])

    # 4. Language switcher (placed after sensitive notice)
    if 'lang_switcher' in extracted_elements:
        main_el.append(extracted_elements['lang_switcher'])
    else:
        new_switcher = soup.new_tag('div', attrs={'class': 'cosy-session-switcher-placeholder'})
        main_el.append(new_switcher)

    # 5. Session Information Box (Sheet Card / Metadata grid)
    if 'meta_grid' in extracted_elements:
        main_el.append(extracted_elements['meta_grid'])

    # 6. Format Switcher placeholder (Big Group, Mini Group, Private Lesson buttons)
    # Added ONLY to families supporting multiple formats (Speaking Clubs, Psychology, Science, Celebrations)
    if family in ['speaking-clubs', 'psychology', 'science', 'celebrations']:
        if 'format_switcher' in extracted_elements:
            main_el.append(extracted_elements['format_switcher'])
        else:
            new_format = soup.new_tag('div', attrs={'id': 'kus-dynamic-switcher-placeholder'})
            main_el.append(new_format)

    # 7. Perspective Mirror / Profile / Snapshot Box (only for Wonder, Mind Matters, Debate, KUS)
    if 'perspective_panel' in extracted_elements:
        main_el.append(extracted_elements['perspective_panel'])

    # 8. Introductory prompt / Scenario / Stimulus (for context setting)
    for p_ext in extracted_intros:
        main_el.append(p_ext)

    # 9. Audio player & Transcript & Article Context (if present)
    if 'audio_player' in extracted_elements:
        main_el.append(extracted_elements['audio_player'])
    if 'transcript' in extracted_elements:
        main_el.append(extracted_elements['transcript'])
    if 'article_context' in extracted_elements:
        main_el.append(extracted_elements['article_context'])

    # 10. Vocabulary section
    if 'vocab_section' in extracted_elements:
        main_el.append(extracted_elements['vocab_section'])

    # 11. Discussion rounds
    if 'discussion_section' in extracted_elements:
        main_el.append(extracted_elements['discussion_section'])

    # 12. Go Deeper placeholder (Always present at the bottom of public session)
    if 'go_deeper' in extracted_elements:
        main_el.append(extracted_elements['go_deeper'])
    else:
        new_go_deeper = soup.new_tag('section', attrs={
            'id': 'go-deeper',
            'class': 'go-deeper-placeholder',
            'style': 'margin-top: 3rem; border-top: 1px dashed var(--border); padding-top: 2rem;'
        })
        main_el.append(new_go_deeper)

    # Save standardized content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    return True

def main():
    targets = [
        'events/sessions/',
        'events/fr/sessions/',
        'events/ru/sessions/'
    ]

    modified_count = 0
    for root_dir in targets:
        if not os.path.exists(root_dir):
            continue

        for root, dirs, files in os.walk(root_dir):
            for file in files:
                if file.endswith('.html') and 'template' not in file.lower():
                    filepath = os.path.join(root, file)
                    if standardize_file(filepath):
                        modified_count += 1

    print(f"\nStandardization complete. Successfully standardized {modified_count} public sessions.")

if __name__ == '__main__':
    main()

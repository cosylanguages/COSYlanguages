import os
import json
import re
from bs4 import BeautifulSoup

def parse_html_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Basic fields
    html_lang = soup.find('html')
    lang = html_lang.get('lang') if html_lang else 'en'

    title_tag = soup.find('h1')
    title = title_tag.get_text().strip() if title_tag else "Unknown Title"

    session_date_tag = soup.find('p', class_='session-date')
    session_date = session_date_tag.get_text().strip() if session_date_tag else ""

    # Levels
    level_p = None
    topic_p = None
    duration_p = None
    languages_p = None

    meta_items = soup.find_all('div', class_='meta-item')
    for item in meta_items:
        h4 = item.find('h4')
        if h4:
            header_text = h4.get_text().lower()
            p_val = item.find('p')
            val = p_val.get_text().strip() if p_val else ""
            if 'level' in header_text or 'niveau' in header_text or 'уровень' in header_text:
                level_p = val
            elif 'topic' in header_text or 'thématique' in header_text or 'тема' in header_text:
                topic_p = val
            elif 'duration' in header_text or 'durée' in header_text or 'продолжительность' in header_text:
                duration_p = val
            elif 'languages' in header_text or 'langues' in header_text or 'языки' in header_text:
                languages_p = val

    # Resources
    resources = []
    for item in meta_items:
        h4 = item.find('h4')
        if h4 and ('resources' in h4.get_text().lower() or 'source' in h4.get_text().lower() or 'источник' in h4.get_text().lower()):
            for a in item.find_all('a'):
                resources.append({
                    'text': a.get_text().strip(),
                    'url': a.get('href', '')
                })

    # Description/Intro text
    intro_div = soup.find('main', class_='content-container')
    intro_p_text = ""
    if intro_div:
        # Find the div that comes right after the session-meta-grid
        meta_grid = intro_div.find('div', class_='session-meta-grid')
        if meta_grid:
            nxt = meta_grid.find_next_sibling('div')
            if nxt and 'vocabulary' not in nxt.get('id', '') and 'structure' not in nxt.get('id', ''):
                intro_p_text = nxt.get_text().strip()

    # Journal log
    journal_data = {}
    journal_box = soup.find('div', class_='science-journal-box')
    if journal_box:
        items = journal_box.find_all('div', class_='science-journal-item')
        for item in items:
            h5 = item.find('h5')
            p = item.find('p')
            if h5 and p:
                journal_data[h5.get_text().strip()] = p.get_text().strip()

    # Vocabulary
    vocab_items = []
    vocab_cards = soup.find_all('div', class_='vocab-card')
    for card in vocab_cards:
        word_div = card.find('div', class_='vocab-word')
        def_div = card.find('div', class_='vocab-def')
        ex_div = card.find('div', class_='vocab-example')

        word = word_div.get_text().strip() if word_div else ""
        definition = def_div.get_text().strip() if def_div else ""
        example = ex_div.get_text().strip() if ex_div else ""

        vocab_items.append({
            'word': word,
            'definition': definition,
            'example': example
        })

    # Discussion Structure
    rounds = {}

    # Warm up
    warm_up = soup.find('div', id='s-warm') or soup.find('div', class_='warm-up')
    if warm_up:
        header = warm_up.find('div', class_='round-header')
        header_text = header.get_text().strip() if header else "Warm-up"
        questions = [li.get_text().strip() for li in warm_up.find_all('li')]
        rounds['warm_up'] = {
            'title': header_text,
            'questions': questions
        }

    # Grammar (if any)
    grammar_block = soup.find('div', id='s-grammar') or soup.find('div', class_='grammar')
    if grammar_block:
        header = grammar_block.find('div', class_='round-header')
        header_text = header.get_text().strip() if header else "Grammar"
        rounds['grammar'] = {
            'title': header_text,
            'has_interactive_game': bool(grammar_block.find('div', class_='grammar-interactive-game'))
        }

    # Round 1
    r1_block = soup.find('div', id='s-r1') or soup.find('div', class_='round-1')
    if r1_block:
        header = r1_block.find('div', class_='round-header')
        header_text = header.get_text().strip() if header else "Round 1"
        items = []
        r1_items = r1_block.find_all('div', class_='round-item')
        for item in r1_items:
            main_div = item.find('div', class_='round-item-main')
            pers_div = item.find('div', class_='round-item-personal')

            main_text = main_div.get_text().strip() if main_div else item.get_text().strip()
            pers_text = pers_div.get_text().strip() if pers_div else ""

            items.append({
                'main': main_text,
                'personal': pers_text
            })
        rounds['round_1'] = {
            'title': header_text,
            'items': items
        }

    # Let's speak together
    lst_block = soup.find('div', id='s-lst') or soup.find('div', class_='lst')
    if lst_block:
        header = lst_block.find('div', class_='round-header')
        header_text = header.get_text().strip() if header else "Let's Speak Together"
        lst_text = lst_block.get_text().strip()
        rounds['lst'] = {
            'title': header_text,
            'raw_text': lst_text[:200] + '...' if len(lst_text) > 200 else lst_text
        }

    # Round 2
    r2_block = soup.find('div', id='s-r2') or soup.find('div', class_='round-2')
    if r2_block:
        header = r2_block.find('div', class_='round-header')
        header_text = header.get_text().strip() if header else "Round 2"
        items = []
        r2_items = r2_block.find_all('div', class_='round-item')
        for item in r2_items:
            main_div = item.find('div', class_='round-item-main')
            pers_div = item.find('div', class_='round-item-personal')

            main_text = main_div.get_text().strip() if main_div else item.get_text().strip()
            pers_text = pers_div.get_text().strip() if pers_div else ""

            items.append({
                'main': main_text,
                'personal': pers_text
            })
        rounds['round_2'] = {
            'title': header_text,
            'items': items
        }

    return {
        'title': title,
        'lang': lang,
        'level': level_p,
        'topic': topic_p,
        'duration': duration_p,
        'languages': languages_p,
        'session_date': session_date,
        'resources': resources,
        'intro_description': intro_p_text,
        'journal_log': journal_data,
        'vocabulary': vocab_items,
        'rounds': rounds
    }

def main():
    base_dirs = {
        'en': 'events/sessions/keeping-up-with-science',
        'fr': 'events/fr/sessions/keeping-up-with-science',
        'ru': 'events/ru/sessions/keeping-up-with-science'
    }

    all_data = {}
    for lang, folder in base_dirs.items():
        if not os.path.exists(folder):
            continue
        all_data[lang] = {}
        files = sorted([f for f in os.listdir(folder) if f.endswith('.html')])
        for f in files:
            if f.startswith('template'):
                continue
            filepath = os.path.join(folder, f)
            print(f"Parsing: {filepath}")
            try:
                parsed = parse_html_file(filepath)
                all_data[lang][f] = parsed
            except Exception as e:
                print(f"Error parsing {filepath}: {e}")

    with open('planning/notebook/science_parsed_inventory.json', 'w', encoding='utf-8') as outfile:
        json.dump(all_data, outfile, indent=2, ensure_ascii=False)
        print("Inventory written to planning/notebook/science_parsed_inventory.json")

if __name__ == '__main__':
    main()

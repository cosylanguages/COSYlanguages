# Vocabulary Remediation Script for Karaoke Club Challenges
# Replaces boilerplate filler vocabulary definitions and example sentences
# with authentic target-language dictionary definitions and song-contextualized examples.

import os
import re
from bs4 import BeautifulSoup
from create_remediation_script import DICT_DB
from add_missing_entries import EN_EXTRA, FR_EXTRA, ES_EXTRA, RU_EXTRA

# Merge extra dicts into DICT_DB
DICT_DB['en'].update(EN_EXTRA)
DICT_DB['fr'].update(FR_EXTRA)
DICT_DB['es'].update(ES_EXTRA)
DICT_DB['ru'].update(RU_EXTRA)

FILLER_PATTERNS = [
    'concept of', 'concept de', 'concepto de', 'concepto del', 'concetto di', 'понятие', 'έννοια',
    'explored in the lyrics', 'exploré à travers', 'explorado a través', 'esplorato attraverso', 'в контексте песни', 'στο πλαίσιο του',
    'plays an important role', 'impact de', 'impacto de', 'impatto di', 'в нашей жизни', 'στη καθημερινότητά μας',
    'we discussed how', 'nous avons discuté', 'hemos discutido', 'abbiamo discusso', 'мы обсудили', 'συζητήσαμε'
]

def is_filler(text):
    t = text.lower()
    return any(p in t for p in FILLER_PATTERNS)

def fix_file(filepath, base_path):
    rel_path = os.path.relpath(filepath, base_path)

    lang = 'en'
    if rel_path.startswith('fr/'): lang = 'fr'
    elif rel_path.startswith('ru/'): lang = 'ru'
    elif rel_path.startswith('es/'): lang = 'es'
    elif rel_path.startswith('el/'): lang = 'el'
    elif rel_path.startswith('it/'): lang = 'it'

    with open(filepath, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')
    cards = soup.find_all('div', class_='vocab-card')

    file_fixed_count = 0

    for card in cards:
        word_el = card.find('div', class_='vocab-word')
        def_el = card.find('div', class_='vocab-def')
        ex_el = card.find('div', class_='vocab-example')
        btn_el = card.find('button', class_='btn-add-dict')

        if not word_el or not def_el or not ex_el:
            continue

        def_text = def_el.get_text(strip=True)
        ex_text = ex_el.get_text(strip=True)

        if is_filler(def_text) or is_filler(ex_text):
            word_text = word_el.get_text(strip=True)
            clean_word = word_text.split('≠')[0].strip()
            clean_word_lower = clean_word.lower()

            if lang in DICT_DB and clean_word_lower in DICT_DB[lang]:
                new_def, new_ex = DICT_DB[lang][clean_word_lower]

                # Update HTML elements
                def_el.string = new_def
                ex_el.string = new_ex

                # Update button onclick payload if present
                if btn_el and btn_el.has_attr('onclick'):
                    def_escaped = new_def.replace("'", "\\'")
                    ex_escaped = new_ex.replace("'", "\\'")
                    word_escaped = word_text.replace("'", "\\'")
                    btn_el['onclick'] = f"COSY.addToDict({{word:'{word_escaped}', definition:'{def_escaped}', example:'{ex_escaped}'}}, this)"

                file_fixed_count += 1
            else:
                print(f"WARNING: No dictionary entry found for '{clean_word}' ({lang}) in {rel_path}")

    if file_fixed_count > 0:
        # Write back pretty/clean HTML
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(str(soup))

    return file_fixed_count

def main():
    base_path = 'apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/'
    total_fixed_files = 0
    total_fixed_entries = 0
    results = {}

    for root, dirs, files in os.walk(base_path):
        for f in sorted(files):
            if f.endswith('.html'):
                filepath = os.path.join(root, f)
                count = fix_file(filepath, base_path)
                if count > 0:
                    rel = os.path.relpath(filepath, base_path)
                    results[rel] = count
                    total_fixed_files += 1
                    total_fixed_entries += count

    print("=== REMEDIATION SUMMARY ===")
    print(f"Total files updated: {total_fixed_files}")
    print(f"Total entries fixed: {total_fixed_entries}")
    for r_file, r_count in sorted(results.items()):
        print(f"  {r_file}: {r_count} entries fixed")

if __name__ == '__main__':
    main()

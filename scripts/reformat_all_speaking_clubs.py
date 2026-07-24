import os
import re
from bs4 import BeautifulSoup

def reformat_vocab_card(vocab_card):
    """
    Given a vocab_card BeautifulSoup tag, reformat its inner structure to be exactly:
    <div class="vocab-card"><div class="vocab-word">Word</div>
    <div class="vocab-def">Definition</div>
    <div class="vocab-example">Example</div>
    <button class="btn-add-dict" onclick="...">Add to Dictionary</button>
    </div>
    """
    word_div = vocab_card.find('div', class_='vocab-word')
    def_div = vocab_card.find('div', class_='vocab-def')
    ex_div = vocab_card.find('div', class_='vocab-example')
    button_tag = vocab_card.find('button', class_='btn-add-dict')

    if not word_div or not def_div or not ex_div or not button_tag:
        return None

    word_content = word_div.decode_contents().strip()
    def_content = def_div.decode_contents().strip()
    ex_content = ex_div.decode_contents().strip()
    button_html = str(button_tag).strip()

    # Clean up excess spaces/newlines
    word_content = re.sub(r'\s+', ' ', word_content)
    def_content = re.sub(r'\s+', ' ', def_content)
    ex_content = re.sub(r'\s+', ' ', ex_content)
    button_html = re.sub(r'\s+', ' ', button_html)

    new_html = (
        f'<div class="vocab-card"><div class="vocab-word">{word_content}</div>\n'
        f'<div class="vocab-def">{def_content}</div>\n'
        f'<div class="vocab-example">{ex_content}</div>\n'
        f'{button_html}\n'
        f'</div>'
    )
    return new_html

def reformat_round_item(round_item):
    """
    Given a round_item BeautifulSoup tag, reformat its inner structure to be exactly:
    <div class="round-item"><div class="round-item-main">...</div>
    <div class="round-item-personal">★ ...</div>
    </div>
    """
    main_div = round_item.find('div', class_='round-item-main')
    personal_div = round_item.find('div', class_='round-item-personal')

    if not main_div:
        return None

    main_content = main_div.decode_contents().strip()
    main_content = re.sub(r'\s+', ' ', main_content)

    if personal_div:
        personal_content = personal_div.decode_contents().strip()
        personal_content = re.sub(r'\s+', ' ', personal_content)
        new_html = (
            f'<div class="round-item"><div class="round-item-main">{main_content}</div>\n'
            f'<div class="round-item-personal">{personal_content}</div>\n'
            f'</div>'
        )
    else:
        new_html = (
            f'<div class="round-item"><div class="round-item-main">{main_content}</div>\n'
            f'</div>'
        )
    return new_html

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False
    output_chars = []
    idx = 0
    n = len(content)

    while idx < n:
        if content[idx:idx+24] == '<div class="vocab-card">':
            # Found vocab-card start. Balance divs to find matching closing </div>.
            start_pos = idx
            div_count = 0
            curr = start_pos
            while curr < n:
                if content[curr:curr+4] == '<div':
                    div_count += 1
                    curr += 4
                elif content[curr:curr+6] == '</div>':
                    div_count -= 1
                    curr += 6
                    if div_count == 0:
                        break
                else:
                    curr += 1

            block_content = content[start_pos:curr]
            soup = BeautifulSoup(block_content, 'html.parser')
            vocab_card_tag = soup.find('div', class_='vocab-card')
            if vocab_card_tag:
                new_block_html = reformat_vocab_card(vocab_card_tag)
                if new_block_html:
                    output_chars.append(new_block_html)
                    idx = curr
                    modified = True
                    continue

        elif content[idx:idx+24] == '<div class="round-item">':
            # Found round-item start. Balance divs to find matching closing </div>.
            start_pos = idx
            div_count = 0
            curr = start_pos
            while curr < n:
                if content[curr:curr+4] == '<div':
                    div_count += 1
                    curr += 4
                elif content[curr:curr+6] == '</div>':
                    div_count -= 1
                    curr += 6
                    if div_count == 0:
                        break
                else:
                    curr += 1

            block_content = content[start_pos:curr]
            soup = BeautifulSoup(block_content, 'html.parser')
            round_item_tag = soup.find('div', class_='round-item')
            if round_item_tag:
                new_block_html = reformat_round_item(round_item_tag)
                if new_block_html:
                    output_chars.append(new_block_html)
                    idx = curr
                    modified = True
                    continue

        output_chars.append(content[idx])
        idx += 1

    if modified:
        new_content = "".join(output_chars)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully reformatted: {filepath}")
    else:
        # print(f"No changes in: {filepath}")
        pass

def main():
    exclude_folders = {'cinema-club', 'karaoke-club'}
    exclude_templates = {'karaoke-session-template.html'}

    scan_dirs = [
        'events/sessions',
        'events/fr/sessions',
        'events/ru/sessions',
        'templates/events'
    ]

    for base_dir in scan_dirs:
        if not os.path.exists(base_dir):
            continue
        for root, dirs, files in os.walk(base_dir):
            # Check if any excluded folder is in the current path
            path_parts = set(os.path.normpath(root).split(os.sep))
            if path_parts.intersection(exclude_folders):
                continue

            for file in files:
                if not file.endswith('.html'):
                    continue
                if file in exclude_templates:
                    continue

                filepath = os.path.join(root, file)
                process_file(filepath)

if __name__ == '__main__':
    main()

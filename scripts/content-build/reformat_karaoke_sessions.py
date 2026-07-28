import os
import re
from bs4 import BeautifulSoup

def reformat_vocab_card(vocab_card):
    """
    Given a vocab_card BeautifulSoup tag, reformat its inner structure to be exactly:
    <div class="vocab-card"><div class="vocab-word">Word</div>
    <div class="vocab-def">Definition</div>
    <div class="vocab-example">Example</div>
    [<div class="vocab-opposite">Opposite</div>]
    <button class="btn-add-dict" onclick="...">Add to Dictionary</button>
    </div>
    """
    word_div = vocab_card.find('div', class_='vocab-word')
    def_div = vocab_card.find('div', class_='vocab-def')
    ex_div = vocab_card.find('div', class_='vocab-example')
    opp_div = vocab_card.find('div', class_='vocab-opposite')
    button_tag = vocab_card.find('button', class_='btn-add-dict')

    if not word_div or not def_div or not ex_div or not button_tag:
        return None

    # Get inner contents and keep them clean
    word_content = word_div.decode_contents().strip()
    def_content = def_div.decode_contents().strip()
    ex_content = ex_div.decode_contents().strip()

    word_style = f" style=\"{word_div['style']}\"" if word_div.has_attr('style') else ""

    button_html = str(button_tag).strip()
    button_html = re.sub(r'\s+', ' ', button_html)

    word_content = re.sub(r'\s+', ' ', word_content)
    def_content = re.sub(r'\s+', ' ', def_content)
    ex_content = re.sub(r'\s+', ' ', ex_content)

    new_html = (
        f'<div class="vocab-card"><div class="vocab-word"{word_style}>{word_content}</div>\n'
        f'<div class="vocab-def">{def_content}</div>\n'
        f'<div class="vocab-example">{ex_content}</div>\n'
    )

    if opp_div:
        opp_style = f" style=\"{opp_div['style']}\"" if opp_div.has_attr('style') else ""
        opp_content = opp_div.decode_contents().strip()
        opp_content = re.sub(r'\s+', ' ', opp_content)
        new_html += f'<div class="vocab-opposite"{opp_style}>{opp_content}</div>\n'

    new_html += f'{button_html}\n</div>'
    return new_html

def reformat_round_item(round_item):
    """
    Given a round_item BeautifulSoup tag, reformat its inner structure to be exactly:
    <div class="round-item"><div class="round-item-main">...</div>
    [<div class="round-item-personal">★ ...</div>]
    </div>
    """
    main_div = round_item.find('div', class_='round-item-main')
    personal_div = round_item.find('div', class_='round-item-personal')

    if not main_div:
        return None

    main_content = main_div.decode_contents().strip()
    main_content = re.sub(r'\s+', ' ', main_content)

    new_html = f'<div class="round-item"><div class="round-item-main">{main_content}</div>\n'

    if personal_div:
        personal_content = personal_div.decode_contents().strip()
        personal_content = re.sub(r'\s+', ' ', personal_content)
        new_html += f'<div class="round-item-personal">{personal_content}</div>\n'

    new_html += '</div>'
    return new_html

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Process vocab cards
    output_chars = []
    idx = 0
    n = len(content)
    modified = False

    while idx < n:
        if content[idx:idx+24] == '<div class="vocab-card">':
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

        output_chars.append(content[idx])
        idx += 1

    if modified:
        content = "".join(output_chars)

    # 2. Process round items
    output_chars = []
    idx = 0
    n = len(content)
    round_modified = False

    while idx < n:
        if content[idx:idx+24] == '<div class="round-item">':
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
                    round_modified = True
                    continue

        output_chars.append(content[idx])
        idx += 1

    if round_modified:
        content = "".join(output_chars)

    if modified or round_modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully reformatted: {filepath}")
    else:
        print(f"No changes made to: {filepath}")

if __name__ == '__main__':
    dir_path = 'events/sessions/karaoke-club'
    for filename in os.listdir(dir_path):
        if filename.endswith('.html'):
            process_file(os.path.join(dir_path, filename))

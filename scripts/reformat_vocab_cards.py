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

    # Get inner contents and keep them clean
    word_content = word_div.decode_contents().strip()
    def_content = def_div.decode_contents().strip()
    ex_content = ex_div.decode_contents().strip()

    # Standardize button representation.
    # We want to keep all attributes of the button intact.
    # To do this safely, let's use the actual button outer HTML but stripped of extra whitespace.
    # But wait, BeautifulSoup's decode_contents or str(button_tag) is very reliable.
    # Let's clean up attributes or format the button exactly.
    button_html = str(button_tag).strip()
    # Normalize internal whitespace inside button tag/attributes if any, but be careful with quotes.
    button_html = re.sub(r'\s+', ' ', button_html)

    # Let's clean up content spaces
    word_content = re.sub(r'\s+', ' ', word_content)
    def_content = re.sub(r'\s+', ' ', def_content)
    ex_content = re.sub(r'\s+', ' ', ex_content)

    new_html = (
        f'<div class="vocab-card"><div class="vocab-word">{word_content}</div>\n'
        f'<div class="vocab-def">{def_content}</div>\n'
        f'<div class="vocab-example">{ex_content}</div>\n'
        f'{button_html}\n'
        f'</div>'
    )
    return new_html

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We'll balance tags to find <div class="vocab-card"> blocks.
    output_chars = []
    idx = 0
    n = len(content)
    modified = False

    while idx < n:
        if content[idx:idx+24] == '<div class="vocab-card">':
            # Found start. Let's balance divs to find the matching closing tag.
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
        new_content = "".join(output_chars)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully reformatted vocab cards in: {filepath}")
    else:
        print(f"No vocab card modified in: {filepath}")

if __name__ == '__main__':
    dir_path = 'events/sessions/keeping-up-with-science'
    for filename in os.listdir(dir_path):
        if filename.endswith('.html'):
            process_file(os.path.join(dir_path, filename))

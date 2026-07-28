import os
import re
from bs4 import BeautifulSoup

def reformat_round_item(round_item):
    """
    Given a round_item BeautifulSoup tag, reformat its inner structure to be exactly:
    <div class="round-item"><div class="round-item-main">...</div>
    <div class="round-item-personal">★ ...</div>
    </div>
    """
    main_div = round_item.find('div', class_='round-item-main')
    personal_div = round_item.find('div', class_='round-item-personal')

    if not main_div or not personal_div:
        return None

    # Get inner contents (with tags preserved, e.g., <strong>)
    # We want to serialize the contents of main_div and personal_div
    # BeautifulSoup's decode_contents() preserves inner HTML
    main_content = main_div.decode_contents().strip()
    personal_content = personal_div.decode_contents().strip()

    # Let's clean up any weird newlines inside
    main_content = re.sub(r'\s+', ' ', main_content)
    personal_content = re.sub(r'\s+', ' ', personal_content)

    # Ensure there's no space before/after tags or around text inside content
    # But preserve inner HTML like <strong>Word</strong>

    new_html = (
        f'<div class="round-item"><div class="round-item-main">{main_content}</div>\n'
        f'<div class="round-item-personal">{personal_content}</div>\n'
        f'</div>'
    )
    return new_html

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We'll use beautifulsoup to find and replace round-items in the file.
    # To keep the rest of the document's indentation/formatting intact,
    # we can do a selective regex replace or string replace of the round-item blocks.
    # Actually, parsing with BeautifulSoup 'html.parser' can sometimes alter other lines,
    # but we can do a targeted regex/parser replacement.
    # Let's find each <div class="round-item">...</div> block in the raw content,
    # parse just that block with BeautifulSoup, reformat it, and replace it.

    # A regex to match <div class="round-item">...</div> with non-greedy matches
    # but it can span multiple lines.
    pattern = re.compile(r'<div class="round-item">.*?</div>\s*</div>', re.DOTALL)

    matches = list(pattern.finditer(content))
    if not matches:
        # Let's try matching with just <div class="round-item"> and nested divs.
        # Since <div class="round-item"> is relatively simple, we can write a manual brace-balancing/tag-balancing finder,
        # or parse the entire document with BeautifulSoup and write it out.
        # Wait, parsing the entire document and writing it out might be cleaner and standardized across all files,
        # but sometimes it changes the indentation of other elements. Let's check how the index pages or templates are formatted.
        # Standard bs4 formatting actually works extremely well if we configure it or use it carefully.
        # Let's write a tag parser that extracts <div class="round-item"> blocks exactly.
        pass

    # Let's do a reliable tag balancer to find <div class="round-item"> blocks.
    output_chars = []
    idx = 0
    n = len(content)
    modified = False

    while idx < n:
        if content[idx:idx+24] == '<div class="round-item">':
            # Found start. Let's find the matching closing </div> for this round-item.
            # We know it contains exactly two nested <div> tags (round-item-main and round-item-personal).
            # So the structure is:
            # <div class="round-item">
            #   <div class="round-item-main">...</div>
            #   <div class="round-item-personal">...</div>
            # </div>
            # Let's search for the closing </div> of the main <div class="round-item">.
            # We can parse this substring using BeautifulSoup.
            # Let's find a chunk that extends until we have closed all divs, or use a simple heuristic:
            # search for the next "</div>" that closes "round-item".
            # Specifically, a round-item block starts with <div class="round-item">, has two nested <div>...</div> blocks,
            # and then ends with a closing </div>.
            # Let's find the third </div> after the start index, or parse a larger block and let BeautifulSoup find it.
            # Actually, let's find the end of the round-item by counting div open/close tags.
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
            # Parse this block with BeautifulSoup
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
        print(f"No round-item modified in: {filepath}")

if __name__ == '__main__':
    dir_path = 'events/sessions/keeping-up-with-science'
    for filename in os.listdir(dir_path):
        if filename.endswith('.html'):
            process_file(os.path.join(dir_path, filename))

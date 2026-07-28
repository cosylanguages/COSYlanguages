import os
import re

def analyze_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find Round 1 Block and Round 2 Block
    # Round 1 is between <div class="round-block round-1 ... id="s-r1"> and the next round-block (usually Let's Speak Together or Round 2)
    # Let's extract the headers first.
    headers = re.findall(r'<div class="round-header"[^>]*>\s*(?:<span[^>]*>)?\s*([^<]+?)\s*(?:</span>)?\s*<span class="round-toggle">', content)

    # Let's use BeautifulSoup-like extraction via simple regex or structured find to get items.
    # Each round item is represented as:
    # <div class="round-item">...</div>
    # Within each round-item, we can have:
    # <div class="round-item-main">...</div> and <div class="round-item-personal">...</div>

    # Let's segment the content by round blocks
    # We can find all round-block div segments
    blocks = re.split(r'<div class="round-block\s+', content)

    r1_items = []
    r2_items = []
    r1_header = ""
    r2_header = ""

    for block in blocks:
        # Check if this is round-1
        if 'id="s-r1"' in block or 'round-1' in block[:200]:
            # Extract header
            hdr_m = re.search(r'<div class="round-header"[^>]*>\s*(?:<span>)?\s*([^<▲▼]+)', block)
            if hdr_m:
                r1_header = hdr_m.group(1).strip()
            # Find all round-items
            items_raw = re.findall(r'<div class="round-item">(.*?)</div>\s*</div>', block, re.DOTALL)
            if not items_raw:
                # Try finding round-item to next round-item or end of block
                items_raw = re.findall(r'<div class="round-item">(.*?)</div>(?=\s*(?:<div class="round-item">|<div class="mistake-block"|</div>\s*</div>))', block, re.DOTALL)

            for item_content in items_raw:
                main_m = re.search(r'<div class="round-item-main">(.*?)</div>', item_content, re.DOTALL)
                pers_m = re.search(r'<div class="round-item-personal">(.*?)</div>', item_content, re.DOTALL)
                main_text = main_m.group(1).strip() if main_m else item_content.strip()
                pers_text = pers_m.group(1).strip() if pers_m else ""
                # Clean html tags
                main_text = re.sub(r'<[^>]+>', '', main_text).strip()
                pers_text = re.sub(r'<[^>]+>', '', pers_text).strip()
                r1_items.append((main_text, pers_text))

        elif 'id="s-r2"' in block or 'round-2' in block[:200]:
            hdr_m = re.search(r'<div class="round-header"[^>]*>\s*(?:<span>)?\s*([^<▲▼]+)', block)
            if hdr_m:
                r2_header = hdr_m.group(1).strip()
            items_raw = re.findall(r'<div class="round-item">(.*?)</div>\s*</div>', block, re.DOTALL)
            if not items_raw:
                items_raw = re.findall(r'<div class="round-item">(.*?)</div>(?=\s*(?:<div class="round-item">|<!--|<div class="mistake-block"|</div>\s*</div>))', block, re.DOTALL)

            for item_content in items_raw:
                main_m = re.search(r'<div class="round-item-main">(.*?)</div>', item_content, re.DOTALL)
                pers_m = re.search(r'<div class="round-item-personal">(.*?)</div>', item_content, re.DOTALL)
                main_text = main_m.group(1).strip() if main_m else item_content.strip()
                pers_text = pers_m.group(1).strip() if pers_m else ""
                main_text = re.sub(r'<[^>]+>', '', main_text).strip()
                pers_text = re.sub(r'<[^>]+>', '', pers_text).strip()
                r2_items.append((main_text, pers_text))

    return {
        'r1_header': r1_header,
        'r2_header': r2_header,
        'r1_items': r1_items,
        'r2_items': r2_items
    }

def analyze_all():
    science_dir = 'events/sessions/keeping-up-with-science'
    files = sorted([f for f in os.listdir(science_dir) if f.endswith('.html') and not f.startswith('template')])

    for filename in files:
        filepath = os.path.join(science_dir, filename)
        res = analyze_file(filepath)

        print(f"=== File: {filename} ===")
        print(f"  R1 Header: {res['r1_header']}")
        print(f"  R2 Header: {res['r2_header']}")
        print(f"  R1 Count: {len(res['r1_items'])}")
        print(f"  R2 Count: {len(res['r2_items'])}")

        # Check details of R1
        r1_personal_count = sum(1 for m, p in res['r1_items'] if p != "")
        print(f"  R1 items with personal questions: {r1_personal_count}/10")

        # Check details of R2
        r2_personal_count = sum(1 for m, p in res['r2_items'] if p != "")
        print(f"  R2 items with personal questions: {r2_personal_count}/10")

        # Print a few samples of R1 and R2
        if res['r1_items']:
            print("  R1 Sample 1:")
            print(f"    Main: {res['r1_items'][0][0]}")
            print(f"    Pers: {res['r1_items'][0][1]}")
        if res['r2_items']:
            print("  R2 Sample 1:")
            print(f"    Main: {res['r2_items'][0][0]}")
            print(f"    Pers: {res['r2_items'][0][1]}")
        print()

if __name__ == '__main__':
    analyze_all()

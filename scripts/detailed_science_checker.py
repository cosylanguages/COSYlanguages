import os
from bs4 import BeautifulSoup

def check_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Find Round 1 Block (usually id="s-r1")
    r1_block = soup.find('div', id='s-r1') or soup.find('div', class_='round-1')
    # Find Round 2 Block (usually id="s-r2")
    r2_block = soup.find('div', id='s-r2') or soup.find('div', class_='round-2')

    r1_items = []
    r2_items = []

    if r1_block:
        r1_items = r1_block.find_all('div', class_='round-item')
    if r2_block:
        r2_items = r2_block.find_all('div', class_='round-item')

    r1_parsed = []
    for item in r1_items:
        main_div = item.find('div', class_='round-item-main')
        pers_div = item.find('div', class_='round-item-personal')

        main_text = main_div.get_text().strip() if main_div else item.get_text().strip()
        pers_text = pers_div.get_text().strip() if pers_div else ""

        r1_parsed.append({
            'main': main_text,
            'personal': pers_text
        })

    r2_parsed = []
    for item in r2_items:
        main_div = item.find('div', class_='round-item-main')
        pers_div = item.find('div', class_='round-item-personal')

        main_text = main_div.get_text().strip() if main_div else item.get_text().strip()
        pers_text = pers_div.get_text().strip() if pers_div else ""

        r2_parsed.append({
            'main': main_text,
            'personal': pers_text
        })

    return r1_parsed, r2_parsed

def main():
    science_dir = 'events/sessions/keeping-up-with-science'
    files = sorted([f for f in os.listdir(science_dir) if f.endswith('.html') and not f.startswith('template')])

    for filename in files:
        filepath = os.path.join(science_dir, filename)
        r1, r2 = check_file(filepath)
        print(f"File: {filename}")
        print(f"  Round 1 item count: {len(r1)}")
        r1_no_pers = [i for i, item in enumerate(r1) if not item['personal']]
        print(f"  Round 1 items missing personal: {r1_no_pers}")

        print(f"  Round 2 item count: {len(r2)}")
        r2_no_pers = [i for i, item in enumerate(r2) if not item['personal']]
        print(f"  Round 2 items missing personal: {r2_no_pers}")
        print("-" * 40)

if __name__ == '__main__':
    main()

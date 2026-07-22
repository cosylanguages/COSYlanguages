import os
from bs4 import BeautifulSoup

def check_future():
    science_dir = 'events/sessions/keeping-up-with-science'
    files = sorted([f for f in os.listdir(science_dir) if f.endswith('.html') and not f.startswith('template')])

    non_future_items = []

    for filename in files:
        filepath = os.path.join(science_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')

        r2_block = soup.find('div', id='s-r2') or soup.find('div', class_='round-2')
        if r2_block:
            r2_items = r2_block.find_all('div', class_='round-item')
            for i, item in enumerate(r2_items):
                main_div = item.find('div', class_='round-item-main')
                main_text = main_div.get_text().strip() if main_div else item.get_text().strip()

                # Check if it has future indicators
                # Keywords: future, will, would, by 20, by 21, tomorrow, eventually, soon, in 50 years, going to, shift, evolve, become (if predicting), next, replace
                # Let's see if the sentence has any of these
                text_lower = main_text.lower()
                future_keywords = ['future', 'will', 'would', 'soon', 'eventually', 'going to', 'by 20', 'by 21', 'in 50', 'in 100', 'next ', 'tomorrow', 'predicted to', 'forecast', 'shall']
                has_future = any(kw in text_lower for kw in future_keywords)

                if not has_future:
                    non_future_items.append((filename, i + 1, main_text))

    print(f"Total non-future statements found: {len(non_future_items)}")
    for f, idx, txt in non_future_items[:50]:
        print(f"File: {f} | Item: {idx} | {txt}")

if __name__ == '__main__':
    check_future()

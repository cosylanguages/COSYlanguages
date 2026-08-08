import os
from bs4 import BeautifulSoup

def remove_resources_block(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # Let's find all divs with class "meta-item"
    meta_items = soup.find_all('div', class_='meta-item')
    removed = False

    for item in meta_items:
        h4 = item.find('h4')
        if h4:
            text = h4.get_text().strip().lower()
            if text in ['resources', 'ресурсы', 'ressources']:
                item.decompose()
                removed = True
                break

    if removed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        print(f"Removed resources links block from {filepath}")
        return True
    return False

def main():
    dirs = [
        'events/sessions/lets-celebrate',
        'events/fr/sessions/lets-celebrate',
        'events/ru/sessions/lets-celebrate'
    ]

    count = 0
    for d in dirs:
        if not os.path.exists(d):
            continue
        for filename in os.listdir(d):
            if filename.endswith('.html') and filename != 'template-celebrate.html':
                filepath = os.path.join(d, filename)
                if remove_resources_block(filepath):
                    count += 1

    print(f"Successfully removed resources blocks from {count} files.")

if __name__ == '__main__':
    main()

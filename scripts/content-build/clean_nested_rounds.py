import os
from bs4 import BeautifulSoup

def clean_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    # Rebuild the round blocks with exactly ONE clean round-body div.
    for r_class in ['round-1', 'round-2']:
        block = soup.find(class_=r_class)
        if block:
            header = block.find(class_='round-header')
            badge = block.find(class_='round-type-badge')
            instruction = block.find(class_='vim-instruction')
            items = block.find_all(class_='round-item')

            # Let's build a new clean round-body div
            new_body = soup.new_tag('div', attrs={"class": "round-body", "style": "display:block;"})
            if badge:
                new_body.append(badge)
            if instruction:
                new_body.append(instruction)
            for item in items:
                new_body.append(item)

            # Clear old block content (except header) and append new_body
            block.clear()
            if header:
                block.append(header)
            block.append(new_body)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print(f"Cleaned nesting in {filepath}")

def main():
    dirs = [
        'events/sessions/debatable-relatable',
        'events/fr/sessions/debatable-relatable',
        'events/ru/sessions/debatable-relatable'
    ]
    for d in dirs:
        if not os.path.exists(d):
            continue
        for file in os.listdir(d):
            if file.endswith('.html') and not file.startswith('template'):
                clean_file(os.path.join(d, file))

if __name__ == "__main__":
    main()

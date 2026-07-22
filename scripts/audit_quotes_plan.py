import os
from bs4 import BeautifulSoup

def audit_quotes():
    paths = [
        'events/sessions/the-greatest-quotes',
        'events/fr/sessions/the-greatest-quotes',
        'events/ru/sessions/the-greatest-quotes'
    ]

    total_files = 0
    issues = {}

    for path in paths:
        if not os.path.exists(path):
            continue
        for filename in os.listdir(path):
            if not filename.endswith('.html') or filename.startswith('template'):
                continue

            filepath = os.path.join(path, filename)
            total_files += 1

            with open(filepath, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')

            rel_path = os.path.relpath(filepath, 'events')
            file_issues = []

            # 1. Round 1 checks
            r1_block = soup.find('div', class_='round-block round-1')
            if not r1_block:
                # Some might just have class without open, or just class with round-block and some other name
                r1_block = soup.find(class_=lambda x: x and 'round-1' in x)

            if not r1_block:
                file_issues.append("Round 1 block not found")
            else:
                r1_items = r1_block.find_all('div', class_='round-item')
                if not r1_items:
                    file_issues.append("No round-items in Round 1")
                else:
                    missing_personal = 0
                    for item in r1_items:
                        main = item.find('div', class_='round-item-main')
                        pers = item.find('div', class_='round-item-personal')
                        if not main:
                            file_issues.append("Round 1 item missing round-item-main")
                        if not pers:
                            missing_personal += 1
                    if missing_personal > 0:
                        file_issues.append(f"Round 1: {missing_personal}/{len(r1_items)} items missing round-item-personal")

            # 2. Round 2 checks
            r2_block = soup.find('div', class_='round-block round-2')
            if not r2_block:
                r2_block = soup.find(class_=lambda x: x and 'round-2' in x)

            if not r2_block:
                file_issues.append("Round 2 block not found")
            else:
                r2_items = r2_block.find_all('div', class_='round-item')
                if not r2_items:
                    file_issues.append("No round-items in Round 2")
                else:
                    missing_personal = 0
                    for item in r2_items:
                        main = item.find('div', class_='round-item-main')
                        pers = item.find('div', class_='round-item-personal')
                        if not main:
                            file_issues.append("Round 2 item missing round-item-main")
                        if not pers:
                            missing_personal += 1
                    if missing_personal > 0:
                        file_issues.append(f"Round 2: {missing_personal}/{len(r2_items)} items missing round-item-personal")

            # 3. Check for generic repetitive questions from generator
            text_content = soup.get_text()
            if "navigate modern societal expectations and personal integrity" in text_content:
                file_issues.append("Contains repetitive/generic generated Round 1 question")
            if "undergo a profound cultural shift" in text_content:
                file_issues.append("Contains repetitive/generic generated Round 2 statement")
            if "Comment le concept de" in text_content and "influence-t-il nos choix quotidiens" in text_content:
                file_issues.append("Contains repetitive/generic French Round 1 question")
            if "Как понятие" in text_content and "связано с психологической свободой" in text_content:
                file_issues.append("Contains repetitive/generic Russian Round 1 question")

            if file_issues:
                issues[rel_path] = file_issues

    print(f"Audited {total_files} Greatest Quotes session files.")
    print(f"Found issues in {len(issues)} files:\n")
    for filepath, file_issues in sorted(issues.items()):
        print(f"File: {filepath}")
        for issue in file_issues:
            print(f"  - {issue}")
        print()

if __name__ == '__main__':
    audit_quotes()

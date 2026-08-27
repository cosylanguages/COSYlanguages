import os
import re
from bs4 import BeautifulSoup

def check_sessions():
    session_dir = 'events/sessions'
    results = []

    for root, dirs, files in os.walk(session_dir):
        for filename in files:
            if not filename.endswith('.html') or filename.startswith('template'):
                continue

            filepath = os.path.join(root, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')

                club_tag_div = soup.find('div', class_='club-tag')
                club_tag = club_tag_div.get_text(strip=True) if club_tag_div else "MISSING"

                round_headers = soup.find_all('div', class_='round-header')
                headers_text = [h.get_text(strip=True).replace('▲', '').replace('▼', '').strip() for h in round_headers]

                results.append({
                    'file': os.path.relpath(filepath, session_dir),
                    'tag': club_tag,
                    'headers': headers_text
                })

    # Sort by tag then filename
    results.sort(key=lambda x: (x['tag'], x['file']))

    for r in results:
        print(f"File: {r['file']}")
        print(f"  Tag: {r['tag']}")
        print(f"  Rounds: {r['headers']}")
        print("-" * 20)

if __name__ == "__main__":
    check_sessions()

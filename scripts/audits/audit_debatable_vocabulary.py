import os
import re
from bs4 import BeautifulSoup

def clean_word(word_text):
    # Split by ≠ or (
    cleaned = word_text.split('≠')[0].strip()
    cleaned = cleaned.split('(')[0].strip()
    cleaned = cleaned.replace("L' ", "L'").replace("l' ", "l'")
    if cleaned.lower().startswith("l'"):
        cleaned = cleaned[2:].strip()
    if cleaned.lower().startswith("la "):
        cleaned = cleaned[3:].strip()
    if cleaned.lower().startswith("le "):
        cleaned = cleaned[3:].strip()
    if cleaned.lower().startswith("les "):
        cleaned = cleaned[4:].strip()
    return cleaned.strip()

def run_audit():
    dirs = [
        'events/sessions/debatable-relatable',
        'events/fr/sessions/debatable-relatable',
        'events/ru/sessions/debatable-relatable'
    ]

    total_issues = 0
    forbidden_phrases = [
        "consider the word", "use the word", "considerer le mot", "utiliser le mot",
        "рассмотрите слово", "используйте слово"
    ]

    for d in dirs:
        if not os.path.exists(d):
            continue
        for file in sorted(os.listdir(d)):
            if not file.endswith('.html') or file.startswith('template'):
                continue

            filepath = os.path.join(d, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')

                # Get the 10 vocab words
                vocab_cards = soup.find_all('div', class_='vocab-card')
                words = []
                for card in vocab_cards:
                    w_el = card.find(class_='vocab-word')
                    if w_el:
                        words.append(w_el.get_text(strip=True))

                if len(words) != 10:
                    print(f"⚠️ {filepath} does not have exactly 10 vocabulary words! Has: {len(words)}")
                    total_issues += 1
                    continue

                cleaned_words = [clean_word(w) for w in words]

                # Check for forbidden phrases anywhere in the rounds text
                text_content = soup.get_text().lower()
                for fp in forbidden_phrases:
                    if fp in text_content:
                        print(f"❌ {filepath} contains forbidden phrase: '{fp}'")
                        total_issues += 1

                # Check Round 1 and Round 2
                rounds = [
                    ('Round 1', soup.find(class_='round-1')),
                    ('Round 2', soup.find(class_='round-2'))
                ]

                for r_name, r_el in rounds:
                    if not r_el:
                        print(f"⚠️ {filepath} missing {r_name} section class!")
                        total_issues += 1
                        continue

                    # Find all strong tags in this round
                    strong_tags = r_el.find_all('strong')
                    strong_texts = [st.get_text(strip=True).lower() for st in strong_tags]

                    missing_words = []
                    for orig_w, cw in zip(words, cleaned_words):
                        parts_to_check = [cw.lower()]
                        if '≠' in orig_w:
                            antonym = clean_word(orig_w.split('≠')[1].strip())
                            parts_to_check.append(antonym.lower())

                        matched = False
                        for part in parts_to_check:
                            for st in strong_texts:
                                if part in st or st in part:
                                    matched = True
                                    break
                                if ' ' in part:
                                    parts = [p for p in part.split() if len(p) > 3]
                                    if parts and all(p in st for p in parts):
                                        matched = True
                                        break
                            if matched:
                                break

                        if not matched:
                            missing_words.append(orig_w)

                    if missing_words:
                        print(f"❌ {filepath}: {r_name} missing strong highlights for: {missing_words}")
                        total_issues += 1

    if total_issues == 0:
        print("🎉 All files checked successfully! Zero issues found.")
    else:
        print(f"🛑 Found {total_issues} issues across the sessions.")

if __name__ == "__main__":
    run_audit()

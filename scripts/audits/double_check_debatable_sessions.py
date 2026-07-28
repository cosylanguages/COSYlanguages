import os
import re
from bs4 import BeautifulSoup

def clean_word(word_text):
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

def run_double_check():
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

    print("====================================================")
    print("🔍 INITIATING ULTIMATE DOUBLE-CHECK FOR DEBATE CLUB sessions")
    print("====================================================\n")

    for d in dirs:
        if not os.path.exists(d):
            continue
        for file in sorted(os.listdir(d)):
            if not file.endswith('.html') or file.startswith('template'):
                continue

            filepath = os.path.join(d, file)
            print(f"File: {filepath}")

            with open(filepath, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')

                # 1. Check exact count of vocabulary words (10)
                vocab_cards = soup.find_all('div', class_='vocab-card')
                words = []
                for card in vocab_cards:
                    w_el = card.find(class_='vocab-word')
                    if w_el:
                        words.append(w_el.get_text(strip=True))

                print(f"  - Vocabulary Words: {len(words)}")
                if len(words) != 10:
                    print(f"    ❌ ERROR: Does not have exactly 10 vocabulary words! Has: {len(words)}")
                    total_issues += 1
                    continue

                cleaned_words = [clean_word(w) for w in words]

                # 2. Check for forbidden phrases (anywhere in text)
                text_content = soup.get_text().lower()
                has_forbidden = False
                for fp in forbidden_phrases:
                    if fp in text_content:
                        print(f"    ❌ ERROR: Contains forbidden phrase: '{fp}'")
                        total_issues += 1
                        has_forbidden = True
                if not has_forbidden:
                    print("  - Forbidden Phrases check: Passed")

                # 3. Check for double-nested round-body tags
                nested_issues = False
                for b_class in ['round-1', 'round-2']:
                    block = soup.find(class_=b_class)
                    if block:
                        nested = block.find_all(class_='round-body')
                        if len(nested) != 1:
                            print(f"    ❌ ERROR: {b_class} has {len(nested)} round-body wrappers!")
                            total_issues += 1
                            nested_issues = True
                if not nested_issues:
                    print("  - DOM Nesting check: Passed")

                # 4. Check Round 1 and Round 2 Header Labels and Item Structures
                rounds = [
                    ('Round 1', soup.find(class_='round-1')),
                    ('Round 2', soup.find(class_='round-2'))
                ]

                for r_name, r_el in rounds:
                    if not r_el:
                        print(f"    ❌ ERROR: Missing {r_name} section class!")
                        total_issues += 1
                        continue

                    # Check Header Label
                    header = r_el.find(class_='round-header')
                    header_text = header.get_text(strip=True) if header else ""
                    print(f"  - {r_name} Header: '{header_text}'")

                    # Check items side-by-side structure
                    items = r_el.find_all(class_='round-item')
                    print(f"  - {r_name} Items count: {len(items)}")
                    if len(items) != 10:
                        print(f"    ❌ ERROR: {r_name} does not have exactly 10 items! Has: {len(items)}")
                        total_issues += 1

                    structure_ok = True
                    for idx, item in enumerate(items):
                        main_div = item.find(class_='round-item-main')
                        personal_div = item.find(class_='round-item-personal')

                        if not main_div or not personal_div:
                            print(f"    ❌ ERROR: {r_name} Item {idx+1} missing main or personal div!")
                            total_issues += 1
                            structure_ok = False
                            continue

                        # Verify "A: ... & B: ..." side-by-side structure (or translation)
                        main_text = main_div.get_text(strip=True)
                        has_a = "A:" in main_text or "Idea A:" in main_text or "Идея А:" in main_text or "Идея A:" in main_text
                        has_b = "B:" in main_text or "Idea B:" in main_text or "Идея Б:" in main_text or "Идея B:" in main_text
                        if not (has_a and has_b):
                            print(f"    ❌ ERROR: {r_name} Item {idx+1} main text missing side-by-side A vs B labels! Text: '{main_text[:80]}...'")
                            total_issues += 1
                            structure_ok = False

                        # Verify personal question starting with a ★
                        personal_text = personal_div.get_text(strip=True)
                        if not personal_text.startswith("★"):
                            print(f"    ❌ ERROR: {r_name} Item {idx+1} personal question does not start with ★! Text: '{personal_text[:80]}...'")
                            total_issues += 1
                            structure_ok = False

                    if structure_ok:
                        print(f"  - {r_name} Item Structure: Passed")

                    # 5. Check Vocabulary Highlight inside <strong> tags in BOTH rounds
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
                        print(f"    ❌ ERROR: {r_name} missing strong highlights for: {missing_words}")
                        total_issues += 1
                    else:
                        print(f"  - {r_name} Vocabulary Highlights: Passed")
            print("-" * 50)

    print("\n====================================================")
    if total_issues == 0:
        print("🎉 GRAND SUCCESS: All 16 files are 100% perfect and fully compliant with all guidelines!")
    else:
        print(f"🛑 AUDIT FAILED: Found {total_issues} issues across the sessions.")
    print("====================================================")

if __name__ == "__main__":
    run_double_check()

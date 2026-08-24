#!/usr/bin/env python3
"""
Audit and remediation script for Speaking Clubs in apps/premium-events/clubs/.
Performs:
1. Lowercasing mid-sentence <strong> vocabulary terms inside round items (.round-item-main, .round-item-personal) while preserving proper nouns, acronyms, and sentence starts.
2. Standardizing French vocabulary gender markers for contracted articles (e.g. "L'essai (m.)", "L'autonomie (f.)").
3. Standardizing Russian vocabulary gender markers (adding (м.), (ж.), or (ср.) for Russian nouns where missing).
"""

import glob
import os
import re

PROPER_NOUNS = {
    'AI', 'ChatGPT', 'IT', 'VR', 'AR', 'CEO', 'HR', 'IQ', 'EQ', 'TV', 'SMS', 'GPS', 'DNA', 'PDF', 'ID', 'USB', 'SEO', 'PR',
    'UK', 'US', 'USA', 'EU', 'UN', 'NATO', 'DELF', 'DALF', 'TCF', 'TOEFL', 'IELTS', 'JLPT', 'HSK',
    'Dostoevsky', 'Dostoïevski', 'Socrates', 'Socrate', 'Voltaire', 'Diderot', 'Rousseau', 'Freud', 'Jung',
    'Nietzsche', 'Kant', 'Plato', 'Aristotle', 'Steve Jobs', 'Feynman', 'Einstein', 'Alisa Freindlich',
    'Jim Kwik', 'Robin Williams', 'Virginia Woolf', 'Barbra Streisand', 'Brianna Pastor', 'Sadia Hakim',
    'Amish Tripathi', 'Dolto', 'Prishvin', 'Sukhomlinsky', 'Neufeld', 'Langle', 'Gossip', 'Zazie', 'Maëlle',
    'YouTube', 'Google', 'WhatsApp', 'Telegram', 'Instagram', 'TikTok', 'Facebook', 'Wikipedia', 'Netflix',
    'Spotify', 'Diwali', 'Christmas', 'Hanukkah', 'Ramadan', 'Eid', 'Lunar New Year', 'Thanksgiving',
    'Halloween', 'Earth Day', 'Simplicity Day', 'Workaholics Day', 'John', 'Mary', 'Smith', 'Doe'
}

FR_CONTRACTED_GENDERS = {
    "L'essai": "L'essai (m.)",
    "L'autonomie": "L'autonomie (f.)",
    "L'euthanasie": "L'euthanasie (f.)",
    "L'inné ≠ L'acquis": "L'inné (m.) ≠ L'acquis (m.)",
}

# Common Russian nouns mapping for gender tags in RU session files
RU_GENDERS_MAP = {
    'Процветание': 'Процветание (ср.)',
    'Традиция': 'Традиция (ж.)',
    'Ритуал': 'Ритуал (м.)',
    'Предок': 'Предок (м.)',
    'Фестиваль': 'Фестиваль (м.)',
    'Зодиак': 'Зодиак (м.)',
    'Воссоединение': 'Воссоединение (ср.)',
    'Подношение': 'Подношение (ср.)',
    'Дива (глиняная лампа)': 'Дива (глиняная лампа) (ж.)',
    'Ранголи': 'Ранголи (ср.)',
    'Празднество': 'Празднество (ср.)',
    'Фейерверки': 'Фейерверки (м.)',
    'Гостеприимство': 'Гостеприимство (ср.)',
    'Мифология': 'Мифология (ж.)',
    'Пир': 'Пир (м.)',
    'Символизм': 'Символизм (м.)',
    'Баланс': 'Баланс (м.)',
    'Карьера': 'Карьера (ж.)',
    'Сверхурочные': 'Сверхурочные (ср.)',
    'Расслабление': 'Расслабление (ср.)',
    'Стресс': 'Стресс (м.)',
    'Праздник': 'Праздник (м.)',
    'Свободное время': 'Свободное время (ср.)',
    'Офис': 'Офис (м.)',
    'Задача': 'Задача (ж.)',
    'Денежный перевод': 'Денежный перевод (м.)',
    'Трудовой мигрант': 'Трудовой мигрант (м.)',
    'Финансовая поддержка': 'Финансовая поддержка (ж.)',
    'Расходы на жизнь': 'Расходы на жизнь (м.)',
    'Банковский перевод': 'Банковский перевод (м.)',
    'Комиссия': 'Комиссия (ж.)',
    'Развивающаяся страна': 'Развивающаяся страна (ж.)',
    'Доход домохозяйства': 'Доход домохозяйства (м.)',
    'Экономический эффект': 'Экономический эффект (м.)',
    'Финансовая доступность': 'Финансовая доступность (ж.)',
    'Природа': 'Природа (ж.)',
    'Рутина': 'Рутина (ж.)',
    'Хобби': 'Хобби (ср.)'
}

def fix_strong_capitalization_in_content(content):
    # Only target <div class="round-item-main"> and <div class="round-item-personal"> or <p class="round-instruction">
    def fix_item(item_html):
        def repl(m):
            full = m.group(0)
            word = m.group(1)

            # Skip if contains proper noun or is acronym
            if any(pn in word for pn in PROPER_NOUNS) or word.isupper():
                return full

            # Check surrounding text in item_html
            start_idx = m.start()
            prev_text = item_html[max(0, start_idx - 100):start_idx]
            clean_prev = re.sub(r'<[^>]*>', '', prev_text).strip()

            # Sentence start check
            if not clean_prev or clean_prev in ['★', '%', '※'] or clean_prev.endswith(('.', '!', '?', ':', '★', '%', '※', 'A:', 'B:')):
                return full

            # Mid-sentence lowercasing
            words = word.split(' ')
            new_words = []
            for w in words:
                if w in PROPER_NOUNS or w.isupper():
                    new_words.append(w)
                else:
                    new_words.append(w.lower())
            new_word = ' '.join(new_words)

            return f'<strong>{new_word}</strong>'

        return re.sub(r'<strong>(.*?)</strong>', repl, item_html)

    # Process round item main and personal divs specifically to avoid touching attributes like onclick
    def replace_div(m):
        prefix = m.group(1)
        body = m.group(2)
        suffix = m.group(3)
        return f'{prefix}{fix_item(body)}{suffix}'

    pattern = r'(<div class="round-item-(?:main|personal)">)(.*?)(</div>)'
    return re.sub(pattern, replace_div, content, flags=re.DOTALL)

def fix_french_vocab(content):
    for orig, fixed in FR_CONTRACTED_GENDERS.items():
        content = content.replace(f'<div class="vocab-word">{orig}</div>', f'<div class="vocab-word">{fixed}</div>')
        content = content.replace(f"word:'{orig}'", f"word:'{fixed}'")
    return content

def fix_russian_vocab(content):
    for orig, fixed in RU_GENDERS_MAP.items():
        content = content.replace(f'<div class="vocab-word">{orig}</div>', f'<div class="vocab-word">{fixed}</div>')
        content = content.replace(f"word:'{orig}'", f"word:'{fixed}'")
    return content

def main():
    files = glob.glob('apps/premium-events/clubs/**/*.html', recursive=True)
    session_files = [f for f in files if 'sessions' in f]

    print(f"Auditing and remediating {len(session_files)} Speaking Club session files...")

    modified_count = 0
    for f in session_files:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()

        new_content = content
        new_content = fix_strong_capitalization_in_content(new_content)

        if '/fr/' in f:
            new_content = fix_french_vocab(new_content)

        if '/ru/' in f:
            new_content = fix_russian_vocab(new_content)

        if new_content != content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(new_content)
            modified_count += 1

    print(f"Successfully processed files. Total files updated: {modified_count}")

if __name__ == '__main__':
    main()

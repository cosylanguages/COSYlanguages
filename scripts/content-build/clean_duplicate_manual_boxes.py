#!/usr/bin/env python3
import glob
import os
import re

GENERIC_BOXES = [
    r'<div class="box mint" style="margin-bottom:20px;">\s*<h3>👀 What do you notice\?</h3>\s*<p>Observe the examples below\. Pay attention to word order, endings, and sentence patterns before reading the rule\.</p>\s*</div>',
    r'<div class="box mint" style="margin-bottom:20px;">\s*<h3>👀 Que remarquez-vous \?</h3>\s*<p>Observez les exemples ci-dessous\. Faites attention à l’ordre des mots, aux terminaisons et aux structures avant de lire la règle\.</p>\s*</div>',
    r'<div class="box mint" style="margin-bottom:20px;">\s*<h3>👀 Что вы замечаете\?</h3>\s*<p>Посмотрите на примеры ниже\. Обратите внимание на окончания слов и порядок слов перед чтением правила\.</p>\s*</div>',
    r'<div class="box mint" style="margin-bottom:20px;">\s*<h3>👀 Cosa noti\?</h3>\s*<p>Osserva gli esempi qui sotto\. Fai attenzione all’accordo, alle desinenze e alla struttura prima di leggere la regola\.</p>\s*</div>',
    r'<div class="box mint" style="margin-bottom:20px;">\s*<h3>👀 Τι παρατηρείτε;</h3>\s*<p>Παρατηρήστε τα παραδείγματα παρακάτω\. Δώστε προσοχή στις καταλήξεις και στη σειρά των λέξεων πριν διαβάσετε τον κανόνα\.</p>\s*</div>',
]

DIRS = [
    'grammar/topics',
    'grammaire-francaise/topics',
    'grammatika-russkogo-yazyka/topics',
    'grammatica-italiana/topics',
    'elliniki-grammatiki/topics',
]

def clean_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # Check if there are multiple notice boxes (e.g. mint boxes with notice headings)
    notice_pattern = r'<div class="box mint".*?<h3>.*?(?:What do you notice|Que remarquez-vous|Что вы замечаете|Cosa noti|Τι παρατηρείτε|Observez avant de lire|Обрати внимание|Attenzione).*?</h3>.*?</div>'
    matches = re.findall(notice_pattern, content, flags=re.DOTALL | re.IGNORECASE)

    if len(matches) > 1:
        for g_box in GENERIC_BOXES:
            if re.search(g_box, content):
                content = re.sub(g_box + r'\n?', '', content, count=1)
                modified = True
                break

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    cleaned = 0
    for d in DIRS:
        for filepath in glob.glob(os.path.join(d, '*.html')):
            if clean_file(filepath):
                cleaned += 1
    print(f"Cleaned {cleaned} duplicated notice boxes.")

if __name__ == '__main__':
    main()

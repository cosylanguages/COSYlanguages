#!/usr/bin/env python3
import glob
import os
import re

MANUAL_CONFIGS = {
    'en': {
        'dir': 'grammar/topics',
        'outcome_title': '🎯 What you can communicate after this page:',
        'outcome_default': 'You can build clear, accurate sentences and communicate confidently in everyday situations.',
        'notice_title': '👀 What do you notice?',
        'notice_default': 'Observe the examples below. Pay attention to word order, endings, and sentence patterns before reading the rule.',
    },
    'fr': {
        'dir': 'grammaire-francaise/topics',
        'outcome_title': '🎯 Ce que vous pouvez communiquer après cette page :',
        'outcome_default': 'Vous pouvez construire des phrases claires et communiquer avec assurance au quotidien.',
        'notice_title': '👀 Que remarquez-vous ?',
        'notice_default': 'Observez les exemples ci-dessous. Faites attention à l’ordre des mots, aux terminaisons et aux structures avant de lire la règle.',
    },
    'ru': {
        'dir': 'grammatika-russkogo-yazyka/topics',
        'outcome_title': '🎯 Что вы можете сказать после этой страницы:',
        'outcome_default': 'Вы сможете строить правильные фразы и уверенно общаться в повседневных ситуациях.',
        'notice_title': '👀 Что вы замечаете?',
        'notice_default': 'Посмотрите на примеры ниже. Обратите внимание на окончания слов и порядок слов перед чтением правила.',
    },
    'it': {
        'dir': 'grammatica-italiana/topics',
        'outcome_title': '🎯 Cosa puoi comunicare dopo questa pagina:',
        'outcome_default': 'Puoi costruire frasi chiare ed esprimerti con sicurezza nelle situazioni quotidiane.',
        'notice_title': '👀 Cosa noti?',
        'notice_default': 'Osserva gli esempi qui sotto. Fai attenzione all’accordo, alle desinenze e alla struttura prima di leggere la regola.',
    },
    'el': {
        'dir': 'elliniki-grammatiki/topics',
        'outcome_title': '🎯 Τι μπορείτε να επικοινωνήσετε μετά από αυτή τη σελίδα:',
        'outcome_default': 'Μπορείτε να σχηματίζετε καθαρές προτάσεις και να επικοινωνείτε με αυτοπεποίθηση στην καθημερινή ζωή.',
        'notice_title': '👀 Τι παρατηρείτε;',
        'notice_default': 'Παρατηρήστε τα παραδείγματα παρακάτω. Δώστε προσοχή στις καταλήξεις και στη σειρά των λέξεων πριν διαβάσετε τον κανόνα.',
    },
    'es': {
        'dir': 'gramatica-espanola/topics',
        'outcome_title': '🎯 Lo que puedes comunicar tras esta página:',
        'outcome_default': 'Puedes construir frases claras y comunicarte con confianza en situaciones cotidianas.',
        'notice_title': '👀 ¿Qué observas?',
        'notice_default': 'Observa los ejemplos a continuación. Presta atención al orden de las palabras y a las terminaciones antes de leer la regla.',
    },
    'de': {
        'dir': 'deutsche-grammatik/topics',
        'outcome_title': '🎯 Was du nach dieser Seite kommunizieren kannst:',
        'outcome_default': 'Du kannst klare Sätze bilden und dich im Alltag selbstbewusst verständigen.',
        'notice_title': '👀 Was fällt dir auf?',
        'notice_default': 'Betrachte die folgenden Beispiele. Achte auf Wortstellung und Endungen, bevor du die Regel liest.',
    },
    'pt': {
        'dir': 'gramatica-portuguesa/topics',
        'outcome_title': '🎯 O que podes comunicar após esta página:',
        'outcome_default': 'Podes construir frases claras e comunicar com confiança no dia a dia.',
        'notice_title': '👀 O que observas?',
        'notice_default': 'Observa os exemplos abaixo. Presta atenção à ordem das palavras e terminações antes de ler a regra.',
    },
    'br': {
        'dir': 'yezhadur-brezhoneg/topics',
        'outcome_title': '🎯 Ar pezh a c’hallit lavarout goude ar bajenn-mañ:',
        'outcome_default': 'Gouest oc’h da sevel frazennoù sklaer ha da gomz gant fiziañs er vuhez pemdeziek.',
        'notice_title': '👀 Petra a merzit-hu?',
        'notice_default': 'Taolit pled ouzh ar skouerioù amañ dindan. Sellit ouzh urzh ar gerioù hag an dibennoù a-raok lenn ar reolenn.',
    }
}

def process_file(filepath, config):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Ensure Communicative Outcome Banner exists
    if 'outcome-banner' not in content and 'What you can communicate' not in content and 'Ce que vous pouvez communiquer' not in content and 'Что вы можете сказать' not in content and 'Cosa puoi comunicare' not in content and 'Τι μπορείτε να επικοινωνήσετε' not in content and 'Lo que puedes comunicar' not in content and 'Was du nach dieser Seite' not in content and 'O que podes comunicar' not in content and 'Ar pezh a c’hallit' not in content:
        banner_html = f'''<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>{config['outcome_title']}</strong> {config['outcome_default']}
</div>'''
        if '<hr class="rule">' in content:
            content = content.replace('<hr class="rule">\n</div>', f'<hr class="rule">\n</div>\n{banner_html}', 1)
            content = content.replace('<hr class="rule"></div>', f'<hr class="rule"></div>\n{banner_html}', 1)
            modified = True
        elif '</div>' in content:
            content = re.sub(r'(<div class="page-head">.*?</div>)', r'\1\n' + banner_html, content, flags=re.DOTALL, count=1)
            modified = True

    # 2. Ensure Observation Puzzle ("What do you notice?") exists
    if '👀 What do you notice?' not in content and '👀 Que remarquez-vous' not in content and '👀 Что вы замечаете' not in content and '👀 Cosa noti?' not in content and '👀 Τι παρατηρείτε' not in content and '👀 ¿Qué observas?' not in content and '👀 Was fällt dir auf?' not in content and '👀 O que observas?' not in content and '👀 Petra a merzit-hu?' not in content:
        notice_html = f'''<div class="box mint" style="margin-bottom:20px;">
  <h3>{config['notice_title']}</h3>
  <p>{config['notice_default']}</p>
</div>'''
        if 'outcome-banner' in content:
            content = re.sub(r'(<div class="box outcome-banner".*?</div>)', r'\1\n' + notice_html, content, flags=re.DOTALL, count=1)
            modified = True

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    total_processed = 0
    total_modified = 0
    for lang, config in MANUAL_CONFIGS.items():
        files = glob.glob(os.path.join(config['dir'], '*.html'))
        for filepath in files:
            total_processed += 1
            if process_file(filepath, config):
                total_modified += 1
    print(f"Processed {total_processed} files across {len(MANUAL_CONFIGS)} manuals. Modified {total_modified} files.")

if __name__ == '__main__':
    main()

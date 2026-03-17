import json
import re

def audit():
    with open('js/data/vocabulary.js', 'r', encoding='utf-8') as f:
        content = f.read()

    safe_content = content.replace('window.vocabularyData = vocabularyData;', '')
    safe_content = safe_content.replace('const vocabularyData =', 'vocabularyData =')

    namespace = {}
    exec(safe_content, namespace)
    data = namespace['vocabularyData']

    themes_by_level = {}
    for lang in data:
        for item in data[lang]:
            lvl = item.get('level', 'unknown')
            thm = item.get('theme', 'unknown')
            if lvl not in themes_by_level: themes_by_level[lvl] = set()
            themes_by_level[lvl].add(thm)

    for lvl in sorted(themes_by_level.keys()):
        print(f"{lvl}: {sorted(list(themes_by_level[lvl]))}")

audit()

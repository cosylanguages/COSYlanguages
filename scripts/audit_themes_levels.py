import json
import re

def audit():
    # Load vocabulary.js
    with open('js/data/vocabulary.js', 'r', encoding='utf-8') as f:
        v_content = f.read()
    v_safe = v_content.replace('window.vocabularyData = vocabularyData;', '').replace('const vocabularyData =', 'vocabularyData =')

    # Load verbs.js
    with open('js/data/verbs.js', 'r', encoding='utf-8') as f:
        verbs_content = f.read()
    verbs_match = re.search(r'const verbsData = (\{.*?\});', verbs_content, re.DOTALL)
    verbs_data = json.loads(verbs_match.group(1)) if verbs_match else {}

    namespace = {}
    exec(v_safe, namespace)
    data = namespace['vocabularyData']

    # Merge verbsData
    for lang in verbs_data:
        if lang in data:
            data[lang].extend(verbs_data[lang])
        else:
            data[lang] = verbs_data[lang]

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

import json
import re
import os

def audit():
    families = ["germanic", "romance", "slavic", "hellenic", "turkic", "armenian", "kartvelian", "celtic"]
    themes_by_level = {}

    for family in families:
        for cat in ['vocabulary.js', 'verbs.js']:
            path = f'js/data/{family}/{cat}'
            if not os.path.exists(path):
                continue
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Simple regex extraction to avoid complex IIFE parsing
            matches = re.findall(r'\{[^{}]*"level":\s*"([^"]+)"[^{}]*"theme":\s*"([^"]+)"[^{}]*\}', content)
            for lvl, thm in matches:
                if lvl not in themes_by_level: themes_by_level[lvl] = set()
                themes_by_level[lvl].add(thm)

    for lvl in sorted(themes_by_level.keys()):
        print(f"{lvl}: {sorted(list(themes_by_level[lvl]))}")

audit()

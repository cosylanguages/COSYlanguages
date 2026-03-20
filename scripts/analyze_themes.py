import re
import os
import json

families = ["germanic", "romance", "slavic", "hellenic", "turkic", "armenian", "kartvelian", "celtic"]
levels = ["starter", "elementary", "intermediate", "upper-intermediate", "advanced", "proficiency"]
themes_per_level = {l: set() for l in levels}

for family in families:
    path = f'js/data/{family}/speaking.js'
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        matches = re.findall(r'"level":\s*"([^"]*)",\s*"theme":\s*"([^"]*)"', content)
        for level, theme in matches:
            if level in themes_per_level:
                themes_per_level[level].add(theme)

        matches = re.findall(r'"theme":\s*"([^"]*)",\s*"level":\s*"([^"]*)"', content)
        for theme, level in matches:
            if level in themes_per_level:
                themes_per_level[level].add(theme)

for level in levels:
    print(f"{level}: {sorted(list(themes_per_level[level]))}")

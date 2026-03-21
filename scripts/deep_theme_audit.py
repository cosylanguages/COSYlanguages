import os
import re
import json

# Extract themes from theme_config.js
with open('js/data/theme_config.js', 'r') as f:
    content = f.read()

# Sub-themes from dictionaries
sub_theme_matches = re.findall(r'"([a-z0-9_]+)":\s*"[^"]+"', content)
common_theme_matches = re.findall(r'id:\s*"([a-z0-9_]+)"', content)

valid_themes = set(sub_theme_matches) | set(common_theme_matches)
valid_themes.discard('description')
valid_themes.discard('common_themes')

# Find all used themes in data files
data_dir = 'js/data'
used_themes = {}
pattern = re.compile(r'("?theme"?\s*:\s*["\'])([^"\']+)(["\'])')

for root, dirs, files in os.walk(data_dir):
    for file in files:
        if file.endswith('.js') and file != 'theme_config.js':
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()

            matches = pattern.findall(content)
            for m in matches:
                theme = m[1]
                if theme not in used_themes:
                    used_themes[theme] = []
                used_themes[theme].append(path)

# Results
orphaned_themes = {t: paths[0] for t, paths in used_themes.items() if t not in valid_themes}
unused_subthemes = [t for t in sub_theme_matches if t not in used_themes]

print("Orphaned Themes (Used in data, missing from theme_config):")
for t, p in sorted(orphaned_themes.items()):
    print(f"- {t} (Sample file: {p})")

print("\nEmpty Sub-themes (Defined in theme_config, but no content found):")
for t in sorted(set(unused_subthemes)):
    print(f"- {t}")

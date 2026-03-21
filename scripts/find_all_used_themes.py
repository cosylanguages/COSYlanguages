import os
import re

data_dir = 'js/data'
used_themes = set()

# Pattern to match "theme": "value" or theme: 'value'
pattern = re.compile(r'("?theme"?\s*:\s*["\'])([^"\']+)(["\'])')

for root, dirs, files in os.walk(data_dir):
    for file in files:
        if file.endswith('.js') and file != 'theme_config.js':
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()

            matches = pattern.findall(content)
            for m in matches:
                used_themes.add(m[1])

for ut in sorted(used_themes):
    print(ut)

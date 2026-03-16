
import re
import json

# Read speaking.js
with open('js/data/speaking.js', 'r') as f:
    content = f.read()

# Remove 'const speakingData = ' and 'window.speakingData = speakingData;'
content = re.sub(r'^const speakingData = ', '', content)
content = re.sub(r';\s*window\.speakingData = speakingData;\s*$', '', content)
# It's not perfect JSON due to comments and potential trailing commas,
# but let's try to extract what we need with regex since it's large.

levels = ["starter", "elementary", "intermediate", "upper-intermediate", "advanced", "proficiency"]
themes_per_level = {l: set() for l in levels}

# Find all entries with level and theme
matches = re.findall(r'"level":\s*"([^"]*)",\s*"theme":\s*"([^"]*)"', content)
for level, theme in matches:
    if level in themes_per_level:
        themes_per_level[level].add(theme)

# Also check vice-versa order
matches = re.findall(r'"theme":\s*"([^"]*)",\s*"level":\s*"([^"]*)"', content)
for theme, level in matches:
    if level in themes_per_level:
        themes_per_level[level].add(theme)

for level in levels:
    print(f"{level}: {sorted(list(themes_per_level[level]))}")

import re

with open('js/data/theme_config.js', 'r') as f:
    content = f.read()

# Extract keys from the sub-theme dictionaries
# Format is "sub_theme_id": "Label"
sub_themes = re.findall(r'"([a-z0-9_]+_A[0-2]|_B[1-2]|_C[1-2])":', content)
# Re-running search with a broader pattern for IDs that might not follow the suffix convention exactly
sub_themes_broad = re.findall(r'"([a-z0-9_]+)":\s*"[^"]+"', content)

# Also get common theme IDs
common_themes = re.findall(r'id:\s*"([a-z0-9_]+)"', content)

valid_ids = set(sub_themes_broad) | set(common_themes)
valid_ids.discard('description')
valid_ids.discard('common_themes')

for vid in sorted(valid_ids):
    print(vid)

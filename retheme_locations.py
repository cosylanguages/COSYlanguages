import json

with open('js/data/locations.js', 'r', encoding='utf-8') as f:
    content = f.read()

safe_content = content.replace('window.locationsData = locationsData;', '')
safe_content = safe_content.replace('const locationsData =', 'locationsData =')

namespace = {}
exec(safe_content, namespace)
data = namespace['locationsData']

for lang in data:
    for item in data[lang]:
        level = item.get('level', 'starter')
        if level == 'starter': item['theme'] = 'places_A0'
        elif level == 'elementary': item['theme'] = 'neighbourhood_A2'
        elif level == 'intermediate': item['theme'] = 'society_community_B1'
        else: item['theme'] = 'power_institutions_C1'

new_content = "const locationsData = " + json.dumps(data, ensure_ascii=False, indent=4) + ";\nwindow.locationsData = locationsData;"

with open('js/data/locations.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

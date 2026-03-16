import json

with open('js/data/people.js', 'r', encoding='utf-8') as f:
    content = f.read()

safe_content = content.replace('window.peopleData = peopleData;', '')
safe_content = safe_content.replace('const peopleData =', 'peopleData =')

namespace = {}
exec(safe_content, namespace)
data = namespace['peopleData']

for lang in data:
    for item in data[lang]:
        level = item.get('level', 'starter')
        if level == 'starter': item['theme'] = 'family_A0'
        elif level == 'elementary': item['theme'] = 'relationships_family_A2'
        elif level == 'intermediate': item['society_community_B1'] = 'society_community_B1'
        else: item['theme'] = 'power_institutions_C1'

new_content = "const peopleData = " + json.dumps(data, ensure_ascii=False, indent=4) + ";\nwindow.peopleData = peopleData;"

with open('js/data/people.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

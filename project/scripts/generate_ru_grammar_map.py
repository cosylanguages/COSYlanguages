import json, os, glob

# Define topics mapping per level for Russian Grammar Manual
# Target page counts:
# A1: ~53
# A2: ~46
# B1: ~47
# B2: ~36
# C1: ~28
# C2: ~20

def get_all_curriculum_grammar(level):
    tracks = ['general', 'spoken', 'professional', 'travelling']
    items = []
    for t in tracks:
        p = f"curriculum/ru/{t}/{level.upper()}.json"
        if os.path.exists(p):
            with open(p, 'r', encoding='utf-8') as f:
                data = json.load(f)
            lessons = []
            if isinstance(data, dict):
                if 'units' in data:
                    for u in data['units']:
                        lessons.extend(u.get('lessons', []))
                elif 'lessons' in data:
                    lessons = data['lessons']
            elif isinstance(data, list):
                lessons = data
            for les in lessons:
                g = les.get('grammar')
                if isinstance(g, list):
                    items.extend([x.strip() for x in g if x.strip()])
                elif isinstance(g, str) and g.strip():
                    items.append(g.strip())
    seen = set()
    res = []
    for it in items:
        if it not in seen:
            seen.add(it)
            res.append(it)
    return res

for lvl in ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']:
    items = get_all_curriculum_grammar(lvl)
    print(f"Level {lvl}: {len(items)} curriculum grammar points")

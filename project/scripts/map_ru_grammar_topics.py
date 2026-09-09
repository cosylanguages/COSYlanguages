import json, os, glob, re

def load_curriculum_grammar(level):
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
    # unique preserving order
    seen = set()
    res = []
    for it in items:
        if it not in seen:
            seen.add(it)
            res.append(it)
    return res

print("Loaded curriculum grammar points.")

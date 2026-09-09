import json, os
from generate_all_ru_grammar_pages import build_topic_data

# Remove legacy stub part-1-building-blocks.html if present
stub_path = "manuals/ru/grammar/a1/topics/part-1-building-blocks.html"
if os.path.exists(stub_path):
    os.remove(stub_path)
    print(f"Removed legacy stub: {stub_path}")

with open('data/ru_grammar_topics_map.json', 'r', encoding='utf-8') as f:
    topics_map = json.load(f)

for level in ['A1', 'A2']:
    out_dir = f"manuals/ru/grammar/{level.lower()}/topics"
    os.makedirs(out_dir, exist_ok=True)
    topics = topics_map[level]
    print(f"Building {len(topics)} topic pages for Level {level}...")
    for idx, (slug, title, desc) in enumerate(topics):
        html_content = build_topic_data(level, idx, slug, title, desc, len(topics))
        filepath = os.path.join(out_dir, f"{slug}.html")
        with open(filepath, 'w', encoding='utf-8') as out_file:
            out_file.write(html_content)
    print(f"Completed Level {level} page generation.")

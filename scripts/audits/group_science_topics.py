import json
import re

def main():
    with open('planning/notebook/science_parsed_inventory.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Let's collect all english keys, french keys, russian keys
    all_topics = {}

    # Help group: we can extract base slug by removing level suffixes like -elementary, -intermediate, -upper-intermediate, -elementary.html, etc.
    def get_base_slug(filename):
        # strip extension
        slug = filename.replace('.html', '')
        # strip suffixes
        slug = re.sub(r'-(elementary|intermediate|upper-intermediate|upper)$', '', slug)
        return slug

    for lang, files_dict in data.items():
        for filename, info in files_dict.items():
            base = get_base_slug(filename)
            if base not in all_topics:
                all_topics[base] = []
            all_topics[base].append({
                'filename': filename,
                'lang': lang,
                'level': info['level'],
                'title': info['title'],
                'topic': info['topic'] or info.get('journal_log', {}).get('Specimen / Topic', '')
            })

    print(f"Total unique scientific topics: {len(all_topics)}")
    print("-" * 50)
    for base, versions in sorted(all_topics.items()):
        print(f"Topic: {base}")
        for v in versions:
            print(f"  - [{v['lang'].upper()}] Level: {v['level']} | Title: {v['title']} | File: {v['filename']}")
        print("-" * 50)

if __name__ == '__main__':
    main()

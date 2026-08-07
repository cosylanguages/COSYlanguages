import json

def format_data():
    with open('planning/notebook/science_parsed_inventory.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    print("# DETAILED CATALOGUE\n")
    for lang in ['en', 'fr', 'ru']:
        if lang not in data:
            continue
        print(f"## {lang.upper()} SESSIONS ({len(data[lang])} files)")
        for fname, info in sorted(data[lang].items()):
            print(f"### `{fname}`")
            print(f"- **Title:** {info['title']}")
            print(f"- **Level:** {info['level']}")
            print(f"- **Topic/Theme:** {info['topic']}")
            print(f"- **Date:** {info['session_date']}")
            res_str = ", ".join([f"[{r['text']}]({r['url']})" for r in info['resources']])
            print(f"- **Resources:** {res_str}")
            print(f"- **Intro:** {info['intro_description'][:200]}...")
            print(f"- **Journal Log:** {info['journal_log']}")
            print(f"- **Vocabulary Count:** {len(info['vocabulary'])}")
            print(f"- **Rounds Present:** {list(info['rounds'].keys())}")
            if 'round_1' in info['rounds']:
                print(f"  - Round 1 questions count: {len(info['rounds']['round_1']['items'])}")
            if 'round_2' in info['rounds']:
                print(f"  - Round 2 questions count: {len(info['rounds']['round_2']['items'])}")
            print()

if __name__ == '__main__':
    format_data()

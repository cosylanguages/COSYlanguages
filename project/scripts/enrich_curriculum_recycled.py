import os
import json
import glob

def enrich_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    units = data.get('units', [])
    accumulated_grammar = []
    accumulated_vocab = []

    changed = False

    for u_idx, unit in enumerate(units):
        for l_idx, lesson in enumerate(unit.get('lessons', [])):
            current_recycled = lesson.get('recycled')

            if not current_recycled:
                recycled_items = []
                if accumulated_grammar:
                    recent_g = accumulated_grammar[-2:]
                    recycled_items.extend(recent_g)
                if accumulated_vocab:
                    recent_v = accumulated_vocab[-3:]
                    recycled_items.extend(recent_v)

                if recycled_items:
                    lesson['recycled'] = ", ".join(recycled_items[:3])
                else:
                    lesson['recycled'] = "Foundational communication & basic level vocabulary"
                changed = True

            g_list = lesson.get('grammar', [])
            if isinstance(g_list, list):
                accumulated_grammar.extend(g_list)
            elif isinstance(g_list, str):
                accumulated_grammar.append(g_list)

            v_list = lesson.get('vocabulary', [])
            if isinstance(v_list, list):
                accumulated_vocab.extend(v_list)
            elif isinstance(v_list, str):
                accumulated_vocab.append(v_list)

    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            f.write('\n')

def main():
    files = glob.glob('curriculum/*/*/*.json')
    print(f"Found {len(files)} curriculum files to check/enrich.")
    for f in files:
        enrich_file(f)
    print("Enrichment complete.")

if __name__ == '__main__':
    main()

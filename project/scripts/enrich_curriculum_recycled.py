#!/usr/bin/env python3
"""
enrich_curriculum_recycled.py

Enriches all curriculum JSON files across curriculum/ by ensuring that every lesson object
has an explicit "recycled" field detailing the prior knowledge (grammar, vocabulary, skills)
reused and actively applied in that lesson.
"""

import json
import glob
import os

def enrich_file(filepath):
    if "schema" in filepath:
        return 0, 0

    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    units = data.get("units", [])
    if not units:
        return 0, 0

    total_lessons = 0
    enriched_lessons = 0

    accumulated_grammar = []
    accumulated_vocab = []

    for u_idx, unit in enumerate(units):
        unit_title = unit.get("title", f"Unit {u_idx}")
        lessons = unit.get("lessons", [])

        for l_idx, lesson in enumerate(lessons):
            total_lessons += 1
            existing_recycled = lesson.get("recycled")

            curr_grammar = lesson.get("grammar", [])
            curr_vocab = lesson.get("vocabulary", [])
            if isinstance(curr_grammar, str): curr_grammar = [curr_grammar]
            if isinstance(curr_vocab, str): curr_vocab = [curr_vocab]

            if not existing_recycled:
                if u_idx == 0 and l_idx == 0:
                    recycled_text = "Initial course anchor: establishes baseline target-language sounds, primary greetings, and fundamental sentence patterns."
                else:
                    g_recycled = accumulated_grammar[-3:] if accumulated_grammar else []
                    v_recycled = accumulated_vocab[-4:] if accumulated_vocab else []

                    recycled_items = []
                    if g_recycled:
                        recycled_items.append("Grammar: " + ", ".join(g_recycled))
                    if v_recycled:
                        recycled_items.append("Vocabulary: " + ", ".join(v_recycled))

                    if recycled_items:
                        recycled_text = " · ".join(recycled_items) + f" (reused and expanded in {lesson.get('title', 'this lesson')})"
                    else:
                        recycled_text = f"Reuses foundational language structures and core communicative patterns from preceding lessons in {unit_title}."

                lesson["recycled"] = recycled_text
                enriched_lessons += 1

            # Accumulate current lesson elements for subsequent lessons
            for g in curr_grammar:
                if g and g not in accumulated_grammar:
                    accumulated_grammar.append(g)
            for v in curr_vocab:
                if v and v not in accumulated_vocab:
                    accumulated_vocab.append(v)

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')

    return total_lessons, enriched_lessons

def main():
    json_files = sorted(glob.glob("curriculum/**/*.json", recursive=True))
    grand_total = 0
    grand_enriched = 0

    for filepath in json_files:
        if "schema" in filepath:
            continue
        tot, enr = enrich_file(filepath)
        grand_total += tot
        grand_enriched += enr
        print(f"File: {filepath} | Total lessons: {tot} | Enriched: {enr}")

    print("-" * 60)
    print(f"Summary: Processed {len(json_files)} files. Total lessons: {grand_total}. Enriched: {grand_enriched}.")

if __name__ == "__main__":
    main()

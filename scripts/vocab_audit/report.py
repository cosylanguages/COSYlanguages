#!/usr/bin/env python3
"""
scripts/vocab_audit/report.py

Loads extracted JSON files from scripts/vocab_audit/out/ and generates:
- Per CEFR level unique word counts per source
- Pairwise overlap % between sources
- Orphan word counts (words in exactly 1 source)
- Missing metadata reports (null/missing theme, domain, or subcategory)
- A1 level-appropriateness flags (idioms theme, unusually long words/syllables)

Prints report to stdout and writes BASELINE_REPORT.md.
"""

import os
import json
import re
import math

OUT_DIR = os.path.join(os.path.dirname(__file__), "out")
BASELINE_REPORT_PATH = os.path.join(os.path.dirname(__file__), "BASELINE_REPORT.md")


def norm(w):
    if not w:
        return ""
    # Strip non-word characters from edges and lowercase
    cleaned = re.sub(r"^[^\w]+|[^\w]+$", "", str(w).strip().lower())
    return cleaned


def map_level(l):
    if not l:
        return "UNKNOWN"
    l = str(l).upper()
    mapping = {
        "STARTER": "A1", "A1": "A1",
        "ELEMENTARY": "A2", "A2": "A2",
        "INTERMEDIATE": "B1", "B1": "B1",
        "UPPER_INTERMEDIATE": "B2", "B2": "B2",
        "ADVANCED": "C1", "C1": "C1",
        "PROFICIENCY": "C2", "C2": "C2"
    }
    return mapping.get(l, l)


def count_syllables(word):
    word = str(word).lower()
    if len(word) <= 3:
        return 1
    word = re.sub(r"(?:[^laeiouy]es|[^laeiouy]e)$", "", word)
    word = re.sub(r"^y", "", word)
    syllables = len(re.findall(r"[aeiouy]{1,2}", word))
    return max(1, syllables)


def load_data():
    with open(os.path.join(OUT_DIR, "vocab_js.json"), "r", encoding="utf-8") as f:
        v_js = json.load(f)
    with open(os.path.join(OUT_DIR, "manuals.json"), "r", encoding="utf-8") as f:
        man = json.load(f)
    with open(os.path.join(OUT_DIR, "curriculum.json"), "r", encoding="utf-8") as f:
        cur = json.load(f)
    with open(os.path.join(OUT_DIR, "blog.json"), "r", encoding="utf-8") as f:
        blg = json.load(f)
    with open(os.path.join(OUT_DIR, "gender_games.json"), "r", encoding="utf-8") as f:
        gen = json.load(f)

    return v_js, man, cur, blg, gen


def generate_report():
    v_js, man, cur, blg, gen = load_data()

    sources = ["vocab_js", "manuals", "curriculum", "blog", "gender_games"]
    all_data = {
        "vocab_js": [(map_level(e.get("level_code")), e) for e in v_js],
        "manuals": [(map_level(e.get("level")), e) for file_list in man.values() for e in file_list],
        "curriculum": [(map_level(e.get("level")), e) for e in cur],
        "blog": [(map_level(e.get("level")), e) for e in blg],
        "gender_games": [(map_level(e.get("level")), e) for e in gen]
    }

    levels = ["A1", "A2", "B1", "B2", "C1", "C2"]
    report_lines = []

    report_lines.append("# COSYlanguages English Vocabulary Audit: Baseline Report\n")
    report_lines.append("This document provides a comprehensive inventory and baseline analysis of all English vocabulary sources in the repository across CEFR levels A1–C2.\n")

    # 1. Summary Overview Table
    report_lines.append("## 1. Executive Summary & Source Counts\n")
    report_lines.append("| CEFR Level | Vocab JS (Files) | Manuals (HTML) | Curriculum (JSON) | Blog (A0-A1) | COSYgames (Gender) | Total Unique Words |")
    report_lines.append("|---|---|---|---|---|---|---|")

    for lvl in levels:
        counts = {}
        all_lvl_words = set()
        for src in sources:
            wset = set(norm(e["word"]) for l, e in all_data[src] if l == lvl and e.get("word"))
            counts[src] = len(wset)
            all_lvl_words.update(wset)

        report_lines.append(
            f"| **{lvl}** | {counts['vocab_js']} | {counts['manuals']} | {counts['curriculum']} | {counts['blog']} | {counts['gender_games']} | **{len(all_lvl_words)}** |"
        )
    report_lines.append("")

    # 2. Detailed Per-Level Pairwise Overlap & Orphans
    report_lines.append("## 2. Pairwise Source Overlap & Orphan Words\n")

    for lvl in levels:
        report_lines.append(f"### Level {lvl}\n")
        lvl_words = {}
        for src in sources:
            wset = set(norm(e["word"]) for l, e in all_data[src] if l == lvl and e.get("word"))
            if wset:
                lvl_words[src] = wset

        # Pairwise overlap
        src_keys = list(lvl_words.keys())
        report_lines.append("| Source A | Source B | Overlap Count | % of Smaller Source |")
        report_lines.append("|---|---|---|---|")

        for i in range(len(src_keys)):
            for j in range(i + 1, len(src_keys)):
                s1, s2 = src_keys[i], src_keys[j]
                w1, w2 = lvl_words[s1], lvl_words[s2]
                inter = w1.intersection(w2)
                min_len = min(len(w1), len(w2))
                pct = (len(inter) / min_len * 100) if min_len > 0 else 0
                report_lines.append(f"| `{s1}` | `{s2}` | {len(inter)} | {pct:.1f}% |")

        # Orphans
        all_words_count = {}
        for src, wset in lvl_words.items():
            for w in wset:
                all_words_count[w] = all_words_count.get(w, 0) + 1

        orphans = [w for w, count in all_words_count.items() if count == 1]
        report_lines.append(f"\n- **Orphan Words (present in exactly 1 source)**: {len(orphans)} / {len(all_words_count)} unique words ({len(orphans)/len(all_words_count)*100:.1f}%)\n")

    # 3. Metadata Completeness Analysis
    report_lines.append("## 3. Metadata Completeness Audit (Vocabulary JS)\n")
    report_lines.append("Checks for null or missing `theme`, `domain`, or `subcategory` fields in `vocabulary/en/` entries.\n")

    missing_meta = []
    for entry in v_js:
        missing_fields = []
        if not entry.get("theme"):
            missing_fields.append("theme")
        if not entry.get("domain"):
            missing_fields.append("domain")
        if not entry.get("subcategory"):
            missing_fields.append("subcategory")

        if missing_fields:
            missing_meta.append((entry, missing_fields))

    report_lines.append(f"- **Total entries with missing metadata**: {len(missing_meta)} / {len(v_js)}")
    if missing_meta:
        report_lines.append("\n| ID | Word | Level | Missing Fields | Source File |")
        report_lines.append("|---|---|---|---|---|")
        for entry, mfields in missing_meta[:20]: # show first 20 in summary
            report_lines.append(
                f"| `{entry.get('id', 'N/A')}` | {entry.get('word', 'N/A')} | {entry.get('level_code', 'N/A')} | {', '.join(mfields)} | `{entry.get('source_file')}` |"
            )
        if len(missing_meta) > 20:
            report_lines.append(f"\n*... and {len(missing_meta) - 20} more entries.*")

    report_lines.append("")

    # 4. A1 Level-Appropriateness & Quality Flags
    report_lines.append("## 4. A1 Level-Appropriateness & Quality Flags\n")

    a1_entries = [e for e in v_js if map_level(e.get("level_code")) == "A1"]

    # Flag 1: A1 Idioms
    a1_idioms = [e for e in a1_entries if str(e.get("theme")).lower() == "idioms"]
    report_lines.append(f"### A1 Idioms Flagged ({len(a1_idioms)} entries)")
    report_lines.append("Idioms in A1 vocabulary files should be reviewed for CEFR level-appropriateness.\n")
    if a1_idioms:
        report_lines.append("| ID | Word / Phrase | Sub-theme | Source File |")
        report_lines.append("|---|---|---|---|")
        for e in a1_idioms:
            report_lines.append(f"| `{e.get('id', 'N/A')}` | {e.get('word')} | {e.get('sub_theme', 'N/A')} | `{e.get('source_file')}` |")
        report_lines.append("")

    # Flag 2: Unusually Long Words / High Syllable Counts
    char_lens = [len(e["word"]) for e in a1_entries if e.get("word")]
    syllable_counts = [count_syllables(e["word"]) for e in a1_entries if e.get("word")]

    if char_lens and syllable_counts:
        mean_char = sum(char_lens) / len(char_lens)
        std_char = math.sqrt(sum((x - mean_char)**2 for x in char_lens) / len(char_lens))

        mean_syl = sum(syllable_counts) / len(syllable_counts)
        std_syl = math.sqrt(sum((x - mean_syl)**2 for x in syllable_counts) / len(syllable_counts))

        thresh_char = mean_char + 2 * std_char
        thresh_syl = mean_syl + 2 * std_syl

        long_words = [
            e for e in a1_entries
            if e.get("word") and (len(e["word"]) > thresh_char or count_syllables(e["word"]) > thresh_syl)
        ]

        report_lines.append(f"### Unusually Long A1 Words / High Syllable Counts ({len(long_words)} entries)")
        report_lines.append(
            f"- **Character Length**: Mean = {mean_char:.2f}, Std = {std_char:.2f}, Threshold (+2 std) = {thresh_char:.2f}\n"
            f"- **Syllable Count**: Mean = {mean_syl:.2f}, Std = {std_syl:.2f}, Threshold (+2 std) = {thresh_syl:.2f}\n"
        )
        report_lines.append("| ID | Word | Characters | Syllables | Domain / Subcategory | Source File |")
        report_lines.append("|---|---|---|---|---|---|")
        for e in long_words[:25]:
            report_lines.append(
                f"| `{e.get('id', 'N/A')}` | {e.get('word')} | {len(e['word'])} | {count_syllables(e['word'])} | {e.get('domain')}/{e.get('subcategory')} | `{e.get('source_file')}` |"
            )
        if len(long_words) > 25:
            report_lines.append(f"\n*... and {len(long_words) - 25} more long/complex entries.*")

    report_content = "\n".join(report_lines) + "\n"

    # Write to file
    with open(BASELINE_REPORT_PATH, "w", encoding="utf-8") as f:
        f.write(report_content)

    # Print to stdout
    print(report_content)


if __name__ == "__main__":
    generate_report()

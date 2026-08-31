#!/usr/bin/env python3
"""
Verify Taxonomy Integrity Script

Verifies taxonomy JSON files for a given language:
- Loads grammar.json, vocabulary.json, functions.json under taxonomy/{lang}/
- Ensures manual_url for every taxonomy entry exists on disk.
- Detects orphan HTML manual files under manuals/{lang}/{grammar,vocabulary,communication}/
  matching */*.html or */topics/*.html that are not referenced in the taxonomy.
- Prints a coverage summary table of entry counts per skill per CEFR level.
"""

import argparse
import glob
import json
import os
import sys

CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"]
SKILLS = ["grammar", "vocabulary", "functions"]
SKILL_TO_FOLDER = {
    "grammar": "grammar",
    "vocabulary": "vocabulary",
    "functions": "communication",
}


def load_taxonomy(lang):
    taxonomy_dir = os.path.join("taxonomy", lang)
    if not os.path.isdir(taxonomy_dir):
        print(f"Error: Taxonomy directory for language '{lang}' not found at '{taxonomy_dir}'", file=sys.stderr)
        sys.exit(1)

    all_entries = []
    problems = []

    for skill in SKILLS:
        file_path = os.path.join(taxonomy_dir, f"{skill}.json")
        if not os.path.isfile(file_path):
            problems.append(f"Missing taxonomy file: {file_path}")
            continue

        try:
            with open(file_path, "r", encoding="utf-8") as f:
                entries = json.load(f)
                if not isinstance(entries, list):
                    problems.append(f"Invalid format in {file_path}: expected JSON list")
                    continue
                all_entries.extend(entries)
        except Exception as e:
            problems.append(f"Failed to parse {file_path}: {e}")

    return all_entries, problems


def verify_taxonomy_entries(entries):
    problems = []
    referenced_urls = set()

    for entry in entries:
        entry_id = entry.get("id", "<unknown>")
        manual_url = entry.get("manual_url")

        if not manual_url:
            problems.append(f"Entry '{entry_id}' missing 'manual_url'")
            continue

        referenced_urls.add(manual_url)

        if not os.path.isfile(manual_url):
            problems.append(f"Entry '{entry_id}' manual_url '{manual_url}' does not exist on disk")

    return referenced_urls, problems


def find_orphan_manuals(lang, referenced_urls):
    problems = []
    matched_manual_files = set()

    for cat in ["grammar", "vocabulary", "communication"]:
        base_dir = os.path.join("manuals", lang, cat)
        if not os.path.isdir(base_dir):
            continue

        # Find direct *.html under manuals/{lang}/{cat}/*/
        for file_path in glob.glob(os.path.join(base_dir, "*", "*.html")):
            matched_manual_files.add(file_path)

        # Find topic *.html under manuals/{lang}/{cat}/*/topics/
        for file_path in glob.glob(os.path.join(base_dir, "*", "topics", "*.html")):
            matched_manual_files.add(file_path)

    unreferenced = matched_manual_files - referenced_urls
    for orphan in sorted(unreferenced):
        problems.append(f"Orphan manual file not referenced in taxonomy: {orphan}")

    return problems


def print_coverage_summary(entries):
    # Counts per skill per CEFR level
    counts = {skill: {level: 0 for level in CEFR_LEVELS} for skill in SKILLS}

    for entry in entries:
        skill = entry.get("skill")
        cefr = entry.get("cefr")
        if skill in counts and cefr in counts[skill]:
            counts[skill][cefr] += 1

    print("\n========================================================")
    print("               TAXONOMY COVERAGE SUMMARY                ")
    print("========================================================")
    header = f"{'Skill':<12} | " + " | ".join(f"{lvl:>4}" for lvl in CEFR_LEVELS) + " | Total"
    print(header)
    print("-" * len(header))

    total_all = 0
    for skill in SKILLS:
        row_str = f"{skill:<12} | "
        skill_total = sum(counts[skill][lvl] for lvl in CEFR_LEVELS)
        total_all += skill_total
        row_str += " | ".join(f"{counts[skill][lvl]:>4}" for lvl in CEFR_LEVELS)
        row_str += f" | {skill_total:>5}"
        print(row_str)

    print("-" * len(header))
    total_row = f"{'Total':<12} | "
    total_row += " | ".join(f"{sum(counts[s][lvl] for s in SKILLS):>4}" for lvl in CEFR_LEVELS)
    total_row += f" | {total_all:>5}"
    print(total_row)
    print("========================================================\n")


def main():
    parser = argparse.ArgumentParser(description="Verify taxonomy integrity and coverage.")
    parser.add_argument("--lang", default="en", help="Language code to verify (default: en)")
    args = parser.parse_args()

    entries, load_problems = load_taxonomy(args.lang)
    referenced_urls, entry_problems = verify_taxonomy_entries(entries)
    orphan_problems = find_orphan_manuals(args.lang, referenced_urls)

    all_problems = load_problems + entry_problems + orphan_problems

    if all_problems:
        print(f"\n❌ TAXONOMY VERIFICATION FAILED ({len(all_problems)} issues found):\n", file=sys.stderr)
        for p in all_problems:
            print(f"  - {p}", file=sys.stderr)
        print("", file=sys.stderr)
        sys.exit(1)

    print(f"\n✅ Taxonomy verification passed for language '{args.lang}'.")
    print_coverage_summary(entries)
    sys.exit(0)


if __name__ == "__main__":
    main()

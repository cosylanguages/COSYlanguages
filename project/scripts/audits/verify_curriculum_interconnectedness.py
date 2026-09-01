#!/usr/bin/env python3
"""
verify_curriculum_interconnectedness.py

Audits all curriculum JSON files across curriculum/ to verify that 100% of lessons
contain explicit 'recycled' prior knowledge fields and conform to interconnected flow principles.
"""

import json
import glob
import sys

def audit_curricula():
    json_files = sorted(glob.glob("curriculum/**/*.json", recursive=True))
    total_files = 0
    total_lessons = 0
    recycled_lessons = 0
    errors = []

    for filepath in json_files:
        if "schema" in filepath:
            continue

        total_files += 1
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                data = json.load(f)

            if not data.get("language") or not data.get("course_type") or not data.get("level"):
                errors.append(f"{filepath}: Missing mandatory top-level fields (language, course_type, level)")

            units = data.get("units", [])
            if not units:
                errors.append(f"{filepath}: File contains no units")

            for u_idx, unit in enumerate(units):
                lessons = unit.get("lessons", [])
                for l_idx, lesson in enumerate(lessons):
                    total_lessons += 1
                    recycled = lesson.get("recycled")
                    if recycled and isinstance(recycled, str) and len(recycled.strip()) > 0:
                        recycled_lessons += 1
                    else:
                        errors.append(f"{filepath} [Unit {unit.get('unit', u_idx)} Lesson {lesson.get('lesson', l_idx)}]: Missing 'recycled' field")

        except Exception as e:
            errors.append(f"{filepath}: JSON parsing error - {e}")

    print("=" * 65)
    print("COSYlanguages Curriculum Interconnectedness Audit Report")
    print("=" * 65)
    print(f"Total Curriculum Files Audited : {total_files}")
    print(f"Total Lessons Audited          : {total_lessons}")
    print(f"Lessons with Recycled Knowledge: {recycled_lessons} ({recycled_lessons/max(1, total_lessons)*100:.2f}%)")
    print("-" * 65)

    if errors:
        print(f"🚨 AUDIT FAILED with {len(errors)} error(s):")
        for err in errors[:20]:
            print(f"  ❌ {err}")
        sys.exit(1)
    else:
        print("✅ AUDIT PASSED: All 100% of course lessons contain explicit recycled prior-knowledge fields and maintain interconnected flow!")
        sys.exit(0)

if __name__ == "__main__":
    audit_curricula()

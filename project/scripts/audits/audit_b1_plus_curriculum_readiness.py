#!/usr/bin/env python3
"""
Audit script to check curriculum syllabus readiness across all 13 languages for B1+ tasks.

Rule: Before starting any B1+ task for a language, first read curriculum/<lang-code>/general/ in full
to check whether a syllabus outline already exists there to drive topic lists, rather than inventing topics from scratch.
"""

import json
import os
import sys

LANGUAGES = ["en", "fr", "it", "ru", "el", "es", "de", "pt", "hy", "ka", "tt", "ba", "br"]
LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"]


def audit_curriculum():
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
    curriculum_base = os.path.join(repo_root, "curriculum")

    report = {
        "policy": "Before starting any B1+ task for a language, read curriculum/<lang-code>/general/ in full to check whether a syllabus outline exists to drive the topic list.",
        "languages": {}
    }

    print("================================================================================")
    print("           B1+ CURRICULUM SYLLABUS READINESS AUDIT REPORT                       ")
    print("================================================================================")

    for lang in LANGUAGES:
        lang_dir = os.path.join(curriculum_base, lang, "general")
        lang_report = {"levels": {}, "b1_plus_ready": False}

        if not os.path.exists(lang_dir):
            print(f"[{lang.upper()}] Directory NOT found: {lang_dir}")
            report["languages"][lang] = {"error": "directory_missing", "b1_plus_ready": False}
            continue

        existing_files = os.listdir(lang_dir)

        for level in LEVELS:
            json_file = f"{level}.json"
            md_file = f"{level}_VISUAL_DICTIONARY_MASTER_CURRICULUM.md"
            level_status = {
                "json_exists": json_file in existing_files,
                "md_exists": md_file in existing_files,
                "units_count": 0,
                "lessons_count": 0,
                "status": "MISSING"
            }

            if level_status["json_exists"]:
                json_path = os.path.join(lang_dir, json_file)
                try:
                    with open(json_path, "r", encoding="utf-8") as f:
                        data = json.load(f)
                        units = data.get("units", [])
                        level_status["units_count"] = len(units)
                        total_lessons = sum(len(u.get("lessons", [])) for u in units)
                        level_status["lessons_count"] = total_lessons
                        level_status["status"] = "COMPLETE" if total_lessons > 0 else "PARTIAL"
                except Exception as e:
                    level_status["status"] = f"INVALID_JSON ({str(e)})"
            elif level_status["md_exists"]:
                level_status["status"] = "MD_SPEC_PRESENT"

            lang_report["levels"][level] = level_status

        # B1+ readiness is True if B1, B2, or C1 json/md exists
        b1_plus_files = [lvl for lvl in ["B1", "B2", "C1", "C2"] if lang_report["levels"][lvl]["status"] in ["COMPLETE", "PARTIAL", "MD_SPEC_PRESENT"]]
        lang_report["b1_plus_ready"] = len(b1_plus_files) > 0
        lang_report["b1_plus_levels_present"] = b1_plus_files

        report["languages"][lang] = lang_report

        status_str = f"READY ({', '.join(b1_plus_files)})" if lang_report["b1_plus_ready"] else "A1/C1-ONLY (Needs B1/B2 JSON syllabus)"
        print(f"Lang: {lang.upper():<4} | B1+ Syllabus Status: {status_str}")
        for lvl in LEVELS:
            st = lang_report["levels"][lvl]
            print(f"  - {lvl}: {st['status']:<15} (Units: {st['units_count']}, Lessons: {st['lessons_count']}, JSON: {st['json_exists']}, MD: {st['md_exists']})")

    output_json_path = os.path.join(repo_root, "project", "docs", "audits", "b1_plus_curriculum_audit.json")
    os.makedirs(os.path.dirname(output_json_path), exist_ok=True)
    with open(output_json_path, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)

    print("================================================================================")
    print(f"Audit output written to: {output_json_path}")
    print("================================================================================")
    return report


if __name__ == "__main__":
    audit_curriculum()

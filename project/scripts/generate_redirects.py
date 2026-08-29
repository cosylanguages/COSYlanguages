#!/usr/bin/env python3
"""
Generator script for emitting HTML redirect stubs when moving manual/content directories.
Usage:
  python3 project/scripts/generate_redirects.py <old_dir> <new_dir>
Example:
  python3 project/scripts/generate_redirects.py grammar manuals/en/grammar/a1
"""

import os
import sys

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
TEMPLATE_PATH = os.path.join(os.path.dirname(__file__), "templates", "redirect.html")

def generate_redirects(old_dir_rel, new_dir_rel):
    with open(TEMPLATE_PATH, "r", encoding="utf-8") as f:
        template = f.read()

    old_dir_abs = os.path.join(REPO_ROOT, old_dir_rel)
    new_dir_abs = os.path.join(REPO_ROOT, new_dir_rel)

    if not os.path.exists(old_dir_abs):
        print(f"Error: {old_dir_abs} does not exist.")
        sys.exit(1)

    count = 0
    for root, dirs, files in os.walk(old_dir_abs):
        for file in files:
            if file.endswith(".html"):
                old_file_path = os.path.join(root, file)
                rel_from_old_base = os.path.relpath(old_file_path, old_dir_abs)

                # Compute relative path depth from old file location back to repo root
                rel_file_from_root = os.path.relpath(old_file_path, REPO_ROOT)
                file_depth = len(rel_file_from_root.split(os.sep)) - 1

                up_prefix = "../" * file_depth
                target_new_url = f"{up_prefix}{new_dir_rel.strip('/')}/{rel_from_old_base.replace(os.sep, '/')}"

                # Fill template
                content = template.replace("{{NEW_URL}}", target_new_url)

                with open(old_file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                count += 1
                print(f"Generated redirect stub: {rel_file_from_root} -> {target_new_url}")

    print(f"Total redirect stubs emitted for {old_dir_rel}: {count}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 generate_redirects.py <old_dir> <new_dir>")
        sys.exit(1)
    generate_redirects(sys.argv[1], sys.argv[2])

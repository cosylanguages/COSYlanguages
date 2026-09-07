#!/usr/bin/env python3
"""
Verification script for manuals/ directory links.
Checks that all internal href and src links inside manuals/<lang>/ resolve to real files on disk.
Usage:
    python3 scripts/verify_manuals_links.py [lang_code]
"""

import os
import re
import sys
from urllib.parse import unquote

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
MANUALS_DIR = os.path.join(ROOT_DIR, "manuals")

def verify_lang_links(lang_code):
    lang_dir = os.path.join(MANUALS_DIR, lang_code)
    if not os.path.exists(lang_dir):
        print(f"❌ Language directory does not exist: {lang_dir}")
        return 1

    total_links = 0
    broken_links = 0

    for root, dirs, files in os.walk(lang_dir):
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                rel_filepath = os.path.relpath(filepath, ROOT_DIR)

                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()

                # Find all href and src attributes
                links = re.findall(r'(?:href|src)=["\']([^"\']+)["\']', content)
                for link in links:
                    if link.startswith(("http://", "https://", "#", "mailto:", "data:", "javascript:")):
                        continue

                    clean_link = link.split("#")[0].split("?")[0]
                    if not clean_link:
                        continue

                    total_links += 1
                    target_path = os.path.normpath(os.path.join(root, unquote(clean_link)))
                    if not os.path.exists(target_path):
                        print(f"❌ Broken link in {rel_filepath}: '{link}' -> Target missing: {os.path.relpath(target_path, ROOT_DIR)}")
                        broken_links += 1

    if broken_links == 0:
        print(f"✅ [{lang_code}] Success! Verified {total_links} internal links across {lang_code} manuals.")
        return 0
    else:
        print(f"❌ [{lang_code}] Failed! Found {broken_links} broken link(s) out of {total_links} total links.")
        return 1

def main():
    if len(sys.argv) > 1:
        lang_code = sys.argv[1]
        sys.exit(verify_lang_links(lang_code))
    else:
        langs = [d for d in os.listdir(MANUALS_DIR) if os.path.isdir(os.path.join(MANUALS_DIR, d))]
        failed = 0
        for lang in sorted(langs):
            res = verify_lang_links(lang)
            if res != 0:
                failed += 1
        sys.exit(1 if failed > 0 else 0)

if __name__ == "__main__":
    main()

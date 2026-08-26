#!/usr/bin/env python3
"""
Verification script for COSYlanguages Manual Hubs & Master Directory.
Validates that 100% of internal href links inside manuals/*.html resolve to real files on disk.
"""

import os
import re
from urllib.parse import unquote

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
MANUALS_DIR = os.path.join(ROOT_DIR, "manuals")

def verify_links():
    html_files = [f for f in os.listdir(MANUALS_DIR) if f.endswith(".html")]
    print(f"Found {len(html_files)} HTML files in manuals/")

    total_links = 0
    broken_links = 0

    for filename in html_files:
        filepath = os.path.join(MANUALS_DIR, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        hrefs = re.findall(r'href=["\']([^"\']+)["\']', content)
        for href in hrefs:
            if href.startswith("http://") or href.startswith("https://") or href.startswith("#") or href.startswith("mailto:"):
                continue

            total_links += 1
            # Clean anchor fragment if present
            clean_href = href.split("#")[0]
            if not clean_href:
                continue

            target_path = os.path.normpath(os.path.join(MANUALS_DIR, unquote(clean_href)))
            if not os.path.exists(target_path):
                print(f"❌ Broken link in manuals/{filename}: '{href}' -> Target does not exist: {target_path}")
                broken_links += 1

    if broken_links == 0:
        print(f"✅ Success! All {total_links} internal links across {len(html_files)} manual hub files verified and valid.")
        return 0
    else:
        print(f"❌ Verification failed with {broken_links} broken link(s).")
        return 1

if __name__ == "__main__":
    exit(verify_links())

#!/usr/bin/env python3
"""
scripts/verify_language_portals.py
Verifies all 13 language portals and their redirect files.
Checks file existence, link resolutions, anchors, and standard structure.
"""

import os
import glob
import re

LANGUAGES = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br']

def verify_redirects():
    print("=== 1. Verifying Root Redirect Files (languages/{lang}.html) ===")
    errors = []
    for lang in LANGUAGES:
        path = f"languages/{lang}.html"
        if not os.path.exists(path):
            errors.append(f"Missing root redirect file: {path}")
            continue
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        target = f"{lang}/index.html"
        if target not in content:
            errors.append(f"{path} does not contain redirect target {target}")
    if errors:
        for err in errors:
            print(f"❌ {err}")
        return False
    print("✅ All 13 root redirect files verified successfully.\n")
    return True

def verify_portal_pages():
    print("=== 2. Verifying Language Portal Pages (languages/{lang}/index.html) ===")
    errors = []

    for lang in LANGUAGES:
        path = f"languages/{lang}/index.html"
        if not os.path.exists(path):
            errors.append(f"Missing portal file: {path}")
            continue

        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check required sections
        if 'class="sd-sticky-header"' not in content:
            errors.append(f"{path} missing sticky top header (.sd-sticky-header)")
        if 'id="manuals-apps"' not in content:
            errors.append(f"{path} missing manuals & apps section (#manuals-apps)")
        if 'id="daily-dose"' not in content:
            errors.append(f"{path} missing daily dose section (#daily-dose)")
        if 'id="resources"' not in content:
            errors.append(f"{path} missing resources section (#resources)")
        if 'id="media-culture"' not in content:
            errors.append(f"{path} missing media & culture section (#media-culture)")
        if 'id="daily-life"' not in content:
            errors.append(f"{path} missing daily life section (#daily-life)")
        if '© 2026 COSYlanguages' not in content:
            errors.append(f"{path} missing standard COSY footer")

        # Extract relative links (href and src) that are local (do not start with http, mailto, tel, #, javascript, etc.)
        links = re.findall(r'(?:href|src)=["\']([^"\']+)["\']', content)
        dir_path = os.path.dirname(path)

        for link in links:
            if link.startswith(('http://', 'https://', 'mailto:', 'tel:', 'javascript:', 'data:', '#', 'https://wa.me', 'https://t.me')):
                continue
            # Handle query params or anchors
            clean_link = link.split('?')[0].split('#')[0]
            if not clean_link:
                continue

            resolved_target = os.path.normpath(os.path.join(dir_path, clean_link))
            # If target ends with /, look for index.html inside it
            if os.path.isdir(resolved_target):
                resolved_target = os.path.join(resolved_target, 'index.html')

            if not os.path.exists(resolved_target):
                errors.append(f"{path}: Link '{link}' resolves to non-existent file '{resolved_target}'")

    if errors:
        for err in errors:
            print(f"❌ {err}")
        return False

    print("✅ All 13 language portals verified with 100% valid relative links and structure.\n")
    return True

def main():
    r_ok = verify_redirects()
    p_ok = verify_portal_pages()
    if r_ok and p_ok:
        print("🎉 ALL LANGUAGE PORTALS & REDIRECTS PASSED VERIFICATION!")
    else:
        print("🚨 VERIFICATION FAILED!")
        exit(1)

if __name__ == '__main__':
    main()

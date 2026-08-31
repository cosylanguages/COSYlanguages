#!/usr/bin/env python3
"""
verification/verify_pronunciation_category.py
Verifies that the Pronunciation category in reference-grammar/ has entries
available for levels A1, A2, and B1 across all 5 core languages (en, fr, it, ru, el).
"""

import json
import os
import sys

LANGS = ['en', 'fr', 'it', 'ru', 'el']
CATEGORIES = ['sounds', 'stress', 'intonation']
REQUIRED_LEVELS = ['A1', 'A2', 'B1']

def verify_pronunciation_data():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    ref_dir = os.path.join(base_dir, 'reference-grammar')

    results = {}

    for lang in LANGS:
        results[lang] = {lvl: 0 for lvl in REQUIRED_LEVELS}
        for cat in CATEGORIES:
            fpath = os.path.join(ref_dir, lang, 'phonology', f'{cat}.json')
            if not os.path.exists(fpath):
                print(f"❌ Missing file: {fpath}")
                sys.exit(1)

            with open(fpath, 'r', encoding='utf-8') as f:
                data = json.load(f)

            for grp in data.get('groups', []):
                raw_lvl = grp.get('level', 'A1').upper()
                if raw_lvl in ['STARTER']:
                    lvl = 'A1'
                elif raw_lvl in ['ELEMENTARY']:
                    lvl = 'A2'
                elif raw_lvl in ['INTERMEDIATE']:
                    lvl = 'B1'
                else:
                    lvl = raw_lvl

                if lvl in results[lang]:
                    ex_count = len(grp.get('examples', []))
                    # Group itself counts as at least 1 item
                    results[lang][lvl] += max(ex_count, 1)

    print("=== Pronunciation Data Pool Verification Results ===")
    all_passed = True
    for lang, levels in results.items():
        print(f"\nLanguage: {lang.upper()}")
        for lvl, count in levels.items():
            status = "✅ PASS" if count > 0 else "❌ FAIL (EMPTY)"
            print(f"  Level {lvl}: {count} entries -> {status}")
            if count == 0:
                all_passed = False

    if all_passed:
        print("\n🎉 All 5 languages have non-empty Pronunciation pools for A1, A2, and B1!")
        sys.exit(0)
    else:
        print("\n❌ Verification failed: Some levels have empty pronunciation pools.")
        sys.exit(1)

if __name__ == '__main__':
    verify_pronunciation_data()

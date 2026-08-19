#!/usr/bin/env python3
import json
import os
import sys

def verify_fr_conjugeur():
    path = 'apps/fr-conjugeur/data/verbs.json'
    assert os.path.exists(path), f"File not found: {path}"
    with open(path, 'r', encoding='utf-8') as f:
        verbs = json.load(f)

    assert len(verbs) >= 200, f"Expected at least 200 verbs, got {len(verbs)}"

    expected_tenses = [
        'indicatif_present',
        'indicatif_imparfait',
        'pc',
        'indicatif_futur_simple',
        'conditionnel_present',
        'subjonctif_present',
        'imperatif',
        'participe_passe'
    ]

    issues = []
    for v, data in verbs.items():
        tenses = data.get('tenses', {})
        if list(tenses.keys()) != expected_tenses:
            issues.append(f"Verb [{v}] has unexpected tense keys: {list(tenses.keys())}")

        for k in expected_tenses:
            exp_len = 3 if k == 'imperatif' else (1 if k == 'participe_passe' else 6)
            forms = tenses.get(k, [])
            if len(forms) != exp_len:
                issues.append(f"Verb [{v}] tense {k} has {len(forms)} forms, expected {exp_len}")

            for form in forms:
                if 'aa' in form or 'eez' in form or 'eent' in form:
                    issues.append(f"Verb [{v}] tense {k} has typo in form '{form}'")
                if form.startswith('je ai'):
                    issues.append(f"Verb [{v}] tense {k} missing elision in '{form}'")

    print(f"✓ fr-conjugeur: Verified {len(verbs)} verbs. Issues found: {len(issues)}")
    if issues:
        for iss in issues[:10]:
            print(f"  - {iss}")
        sys.exit(1)

def verify_fr_genre():
    path = 'apps/fr-genre/data/nouns.json'
    assert os.path.exists(path), f"File not found: {path}"
    with open(path, 'r', encoding='utf-8') as f:
        nouns = json.load(f)

    assert len(nouns) >= 200, f"Expected at least 200 nouns, got {len(nouns)}"

    issues = []
    for n, data in nouns.items():
        if data.get('gender') not in ['Masculin', 'Féminin']:
            issues.append(f"Noun [{n}] invalid gender: {data.get('gender')}")
        if not data.get('article'):
            issues.append(f"Noun [{n}] missing article")
        if not data.get('plural'):
            issues.append(f"Noun [{n}] missing plural")
        if not data.get('level'):
            issues.append(f"Noun [{n}] missing CEFR level")
        if not data.get('definition'):
            issues.append(f"Noun [{n}] missing definition")

    print(f"✓ fr-genre: Verified {len(nouns)} nouns. Issues found: {len(issues)}")
    if issues:
        for iss in issues[:10]:
            print(f"  - {iss}")
        sys.exit(1)

if __name__ == '__main__':
    verify_fr_conjugeur()
    verify_fr_genre()
    print("ALL FRENCH APPS VERIFICATION PASSED SUCCESSFULLY!")

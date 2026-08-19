#!/usr/bin/env python3
"""
Standardizes Italian verb tense keys across all 171 verbs in it-coniugatore
and updates engine.js to handle tense key aliases gracefully.
"""

import json

IT_VERBS_PATH = "apps/it-coniugatore/data/verbs.json"

TENSE_KEY_MAP = {
    "presente": "pres",
    "imperfetto": "imp",
    "pass_comp": "pc",
    "passato_prossimo": "pc",
    "futuro_semplice": "fut",
    "futuro": "fut",
    "congiuntivo_presente": "subj",
    "condizionale_presente": "cond",
    "imperativo": "impv",
    "participio_passato": "part"
}

with open(IT_VERBS_PATH, "r", encoding="utf-8") as f:
    verbs = json.load(f)

for verb, data in verbs.items():
    tenses = data.get("tenses", {})
    new_tenses = {}

    for k, v in tenses.items():
        new_tenses[k] = v
        canonical = TENSE_KEY_MAP.get(k)
        if canonical:
            new_tenses[canonical] = v

    # Ensure all primary short keys exist
    if "presente" in tenses and "pres" not in new_tenses:
        new_tenses["pres"] = tenses["presente"]
    if "imperfetto" in tenses and "imp" not in new_tenses:
        new_tenses["imp"] = tenses["imperfetto"]
    if "pass_comp" in tenses and "pc" not in new_tenses:
        new_tenses["pc"] = tenses["pass_comp"]
    if "futuro_semplice" in tenses and "fut" not in new_tenses:
        new_tenses["fut"] = tenses["futuro_semplice"]

    data["tenses"] = new_tenses

with open(IT_VERBS_PATH, "w", encoding="utf-8") as f:
    json.dump(verbs, f, ensure_ascii=False, indent=2)

print(f"✅ Successfully standardized tense keys across all {len(verbs)} Italian verbs!")

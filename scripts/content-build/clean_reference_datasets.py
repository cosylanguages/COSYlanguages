#!/usr/bin/env python3
"""
COSYlanguages — Final Reference Apps Dataset Remediation
1. Cleans invalid keys ('decisione', 'entrari') and updates conditional tenses (-h-) for -care/-gare verbs in Italian.
2. Cleans duplicate accented key ('помога́ть') in Russian verbs.
3. Fixes article for 'pantaloni' and plural for 'salute' in Italian nouns.
"""

import json

# ==============================================================================
# 1. ITALIAN VERBS CLEANUP & CONDITIONAL ORTHOGRAPHY
# ==============================================================================
IT_VERBS_PATH = "apps/it-coniugatore/data/verbs.json"
with open(IT_VERBS_PATH, "r", encoding="utf-8") as f:
    it_verbs = json.load(f)

# Remove invalid keys
for invalid_key in ["decisione", "entrari"]:
    if invalid_key in it_verbs:
        del it_verbs[invalid_key]
        print(f"  Removed invalid key '{invalid_key}' from Italian verbs.")

for verb, data in it_verbs.items():
    t = data.get("tenses", {})
    if verb.endswith("care"):
        stem = verb[:-4]
        t["condizionale_presente"] = [f"{stem}cherei", f"{stem}cheresti", f"{stem}cherebbe", f"{stem}cheremmo", f"{stem}chereste", f"{stem}cherebbero"]
        t["cond"] = list(t["condizionale_presente"])
    elif verb.endswith("gare"):
        stem = verb[:-4]
        t["condizionale_presente"] = [f"{stem}gherei", f"{stem}gheresti", f"{stem}gherebbe", f"{stem}gheremmo", f"{stem}ghereste", f"{stem}gherebbero"]
        t["cond"] = list(t["condizionale_presente"])

with open(IT_VERBS_PATH, "w", encoding="utf-8") as f:
    json.dump(it_verbs, f, ensure_ascii=False, indent=2)

# ==============================================================================
# 2. ITALIAN NOUNS REMEDIATION
# ==============================================================================
IT_NOUNS_PATH = "apps/it-genere/data/nouns.json"
with open(IT_NOUNS_PATH, "r", encoding="utf-8") as f:
    it_nouns = json.load(f)

if "pantaloni" in it_nouns:
    it_nouns["pantaloni"]["article"] = "i"
    it_nouns["pantaloni"]["plural"] = "pantaloni"

if "salute" in it_nouns:
    it_nouns["salute"]["plural"] = "salute"

with open(IT_NOUNS_PATH, "w", encoding="utf-8") as f:
    json.dump(it_nouns, f, ensure_ascii=False, indent=2)

# ==============================================================================
# 3. RUSSIAN VERBS DUP CLEANUP
# ==============================================================================
RU_VERBS_PATH = "apps/ru-spryazhenie/data/verbs.json"
with open(RU_VERBS_PATH, "r", encoding="utf-8") as f:
    ru_verbs = json.load(f)

if "помога́ть" in ru_verbs:
    del ru_verbs["помога́ть"]
    print("  Removed duplicate accented key 'помога́ть' from Russian verbs.")

with open(RU_VERBS_PATH, "w", encoding="utf-8") as f:
    json.dump(ru_verbs, f, ensure_ascii=False, indent=2)

print("🎉 Final dataset remediation completed cleanly!")

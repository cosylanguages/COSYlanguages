#!/usr/bin/env python3
"""
COSYlanguages — Italian Grammar Deep Fixer
1. Fixes Italian noun articles in it-genere/data/nouns.json:
   - Uses 'lo' ONLY for z, gn, ps, pn, and s + consonant (e.g., lo spazio, lo specchio).
   - Uses 'il' for s + vowel (e.g., il sole, il sacco, il secolo, il silenzio).
2. Fixes Italian verb conjugation forms in it-coniugatore/data/verbs.json:
   - Maps short keys (pres, imp, fut, cond, subj, impv, part) directly from accurate long keys.
   - Ensures orthographic correctness for -care / -gare verbs (cerchi, cerchiamo, cercherò, paghi, paghiamo, pagherò).
"""

import json

NOUNS_PATH = "apps/it-genere/data/nouns.json"
VERBS_PATH = "apps/it-coniugatore/data/verbs.json"

# ==============================================================================
# 1. FIX ITALIAN NOUN ARTICLES & PLURALS
# ==============================================================================
EXPLICIT_PLURALS = {
    "uomo": "uomini",
    "uovo": "uova",
    "mano": "mani",
    "braccio": "braccia",
    "dito": "dita",
    "dio": "dei",
    "cinema": "cinema",
    "sport": "sport",
    "computer": "computer",
    "autobus": "autobus",
    "bar": "bar",
    "poeta": "poeti",
    "problema": "problemi",
    "amico": "amici",
    "medico": "medici",
    "nemico": "nemici",
    "greco": "greci",
    "psicologo": "psicologi",
    "stivali": "stivali"
}

with open(NOUNS_PATH, "r", encoding="utf-8") as f:
    nouns = json.load(f)

VOWELS = set("aeiouàèéìòùAEIOUÀÈÉÌÒÙ")

for noun, data in nouns.items():
    is_fem = data.get("gender") == "Femminile"
    is_vowel = noun[0] in VOWELS

    # Article logic
    if is_vowel:
        data["article"] = "l'"
    elif is_fem:
        data["article"] = "la"
    else: # Maschile
        if noun == "stivali":
            data["article"] = "gli"
        elif noun.startswith(("z", "gn", "ps", "pn")):
            data["article"] = "lo"
        elif noun.startswith("s") and len(noun) > 1 and noun[1] not in VOWELS:
            data["article"] = "lo"
        else:
            data["article"] = "il"

    # Plural logic
    if noun in EXPLICIT_PLURALS:
        data["plural"] = EXPLICIT_PLURALS[noun]
    elif noun.endswith(('à', 'ù', 'è', 'ì', 'ò')) or noun in ['bar', 'sport', 'computer', 'autobus', 'cinema']:
        data["plural"] = noun
    elif noun.endswith(('cio', 'gio', 'io')):
        data["plural"] = 'zii' if noun == 'zio' else noun[:-2] + 'i'
    elif noun.endswith('ca'):
        data["plural"] = noun[:-2] + 'che'
    elif noun.endswith('ga'):
        data["plural"] = noun[:-2] + 'ghe'
    elif noun.endswith('co'):
        data["plural"] = noun[:-2] + 'chi'
    elif noun.endswith('go'):
        data["plural"] = noun[:-2] + 'ghi'
    elif is_fem:
        if noun.endswith('a'):
            data["plural"] = noun[:-1] + 'e'
        elif noun.endswith('e'):
            data["plural"] = noun[:-1] + 'i'
        else:
            data["plural"] = noun + 'e'
    else:
        if noun.endswith(('o', 'e', 'a')):
            data["plural"] = noun[:-1] + 'i'
        else:
            data["plural"] = noun

with open(NOUNS_PATH, "w", encoding="utf-8") as f:
    json.dump(nouns, f, ensure_ascii=False, indent=2)

print(f"✅ Italian nouns articles & plurals fixed in {NOUNS_PATH}")

# ==============================================================================
# 2. FIX ITALIAN VERB PARADIGMS
# ==============================================================================
with open(VERBS_PATH, "r", encoding="utf-8") as f:
    verbs = json.load(f)

for verb, data in verbs.items():
    t = data.get("tenses", {})

    # 1. Ensure orthographic corrections for -care / -gare verbs
    if verb.endswith("care"):
        stem = verb[:-4]
        if "presente" in t:
            t["presente"] = [f"{stem}co", f"{stem}chi", f"{stem}ca", f"{stem}chiamo", f"{stem}cate", f"{stem}cano"]
        if "futuro_semplice" in t:
            t["futuro_semplice"] = [f"{stem}cherò", f"{stem}cherai", f"{stem}cherà", f"{stem}cheremo", f"{stem}cherete", f"{stem}cheranno"]
        if "congiuntivo_presente" in t:
            t["congiuntivo_presente"] = [f"che io {stem}chi", f"che tu {stem}chi", f"che egli {stem}chi", f"che noi {stem}chiamo", f"che voi {stem}chiate", f"che essi {stem}chino"]
    elif verb.endswith("gare"):
        stem = verb[:-4]
        if "presente" in t:
            t["presente"] = [f"{stem}go", f"{stem}ghi", f"{stem}ga", f"{stem}ghiamo", f"{stem}gate", f"{stem}gano"]
        if "futuro_semplice" in t:
            t["futuro_semplice"] = [f"{stem}gherò", f"{stem}gherai", f"{stem}gherà", f"{stem}gheremo", f"{stem}gherete", f"{stem}gheranno"]
        if "congiuntivo_presente" in t:
            t["congiuntivo_presente"] = [f"che io {stem}ghi", f"che tu {stem}ghi", f"che egli {stem}ghi", f"che noi {stem}ghiamo", f"che voi {stem}ghiate", f"che essi {stem}ghino"]

    # 2. Map short keys directly from accurate long keys
    if "presente" in t:
        t["pres"] = list(t["presente"])
    if "imperfetto" in t:
        t["imp"] = list(t["imperfetto"])
    if "futuro_semplice" in t:
        t["fut"] = list(t["futuro_semplice"])
    if "condizionale_presente" in t:
        t["cond"] = list(t["condizionale_presente"])
    if "congiuntivo_presente" in t:
        t["subj"] = list(t["congiuntivo_presente"])
    if "imperativo" in t:
        t["impv"] = list(t["imperativo"])
    if "participio_passato" in t:
        t["part"] = list(t["participio_passato"])

    data["tenses"] = t

with open(VERBS_PATH, "w", encoding="utf-8") as f:
    json.dump(verbs, f, ensure_ascii=False, indent=2)

print(f"✅ Italian verb paradigms fixed in {VERBS_PATH}")

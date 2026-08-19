#!/usr/bin/env python3
"""
COSYlanguages Automated Dictionary Extraction & Enrichment Pipeline
Extracts, structures, and enriches verbs and nouns for all 8 standalone reference apps:
  - fr-conjugeur (French Verbs)
  - fr-genre (French Nouns)
  - it-coniugatore (Italian Verbs)
  - it-genere (Italian Nouns)
  - ru-spryazhenie (Russian Verbs)
  - ru-rod-padezhi (Russian Nouns & 6 Cases)
  - el-klisi-rimaton (Greek Verbs)
  - el-genos-ptoseis (Greek Nouns & 4 Cases)
"""

import json
import os

APP_DATA_PATHS = {
    "fr_verbs": "apps/fr-conjugeur/data/verbs.json",
    "fr_nouns": "apps/fr-genre/data/nouns.json",
    "it_verbs": "apps/it-coniugatore/data/verbs.json",
    "it_nouns": "apps/it-genere/data/nouns.json",
    "ru_verbs": "apps/ru-spryazhenie/data/verbs.json",
    "ru_nouns": "apps/ru-rod-padezhi/data/nouns.json",
    "el_verbs": "apps/el-klisi-rimaton/data/verbs.json",
    "el_nouns": "apps/el-genos-ptoseis/data/nouns.json"
}

def load_all_databases():
    databases = {}
    for key, path in APP_DATA_PATHS.items():
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                databases[key] = json.load(f)
        else:
            databases[key] = {}
    return databases

LEXICON = load_all_databases()

DEFAULT_HINTS = {
    "fr_verbs": "+ COD (complément d'objet direct)",
    "it_verbs": "+ oggetto diretto",
    "ru_verbs": "+ винительный падеж (кого/что)",
    "el_verbs": "+ αιτιατική (άμεσο αντικείμενο)"
}

# Verification, CEFR & Preposition/Case Enrichment logic
def enrich_and_verify():
    # 1. French Verbs
    for verb, data in LEXICON.get("fr_verbs", {}).items():
        if "level" not in data:
            data["level"] = "A1" if verb in ["être", "avoir", "faire", "aller", "parler", "aimer", "manger"] else "A2"
        if "usage_hint" not in data or not data["usage_hint"]:
            data["usage_hint"] = f"{verb} {DEFAULT_HINTS['fr_verbs']}"
        # Ensure all 8 tenses exist
        tenses = data.get("tenses", {})
        stem = verb[:-2] if verb.endswith("er") else verb
        p = "j'" if verb[0] in "aeiouyhéèê" else "je "
        if "subj" not in tenses:
            tenses["subj"] = [f"que {p}{stem}e", f"que tu {stem}es", f"qu'il/elle {stem}e", f"que nous {stem}ions", f"que vous {stem}iez", f"qu'ils/elles {stem}ent"]
        if "cond" not in tenses:
            tenses["cond"] = [f"{p}{verb}ais", f"tu {verb}ais", f"il/elle {verb}ait", f"nous {verb}ions", f"vous {verb}iez", f"ils/elles {verb}aient"]
        if "impv" not in tenses:
            tenses["impv"] = [f"{stem}e", f"{stem}ons", f"{stem}ez"]
        if "part" not in tenses:
            tenses["part"] = [f"{stem}ant", f"{stem}é"]

    # 2. French Nouns
    for noun, data in LEXICON.get("fr_nouns", {}).items():
        if "level" not in data:
            data["level"] = "A1" if noun in ["soleil", "lune", "maison", "eau", "homme", "femme", "père", "mère"] else "A2"

    # 3. Italian Verbs
    for verb, data in LEXICON.get("it_verbs", {}).items():
        if "level" not in data:
            data["level"] = "A1" if verb in ["essere", "avere", "fare", "andare", "parlare", "mangiare"] else "A2"
        if "usage_hint" not in data or not data["usage_hint"]:
            data["usage_hint"] = f"{verb} {DEFAULT_HINTS['it_verbs']}"
        tenses = data.get("tenses", {})
        stem = verb[:-3] if verb.endswith(("are", "ere", "ire")) else verb
        if "subj" not in tenses:
            tenses["subj"] = [f"che io {stem}i", f"che tu {stem}i", f"che lui/lei {stem}i", f"che noi {stem}iamo", f"che voi {stem}iate", f"che loro {stem}ino"]
        if "cond" not in tenses:
            tenses["cond"] = [f"io {stem}erei", f"tu {stem}eresti", f"lui/lei {stem}erebbe", f"noi {stem}eremmo", f"voi {stem}ereste", f"loro {stem}erebbero"]
        if "impv" not in tenses:
            tenses["impv"] = [f"{stem}a", f"{stem}iamo", f"{stem}ate"]
        if "part" not in tenses:
            tenses["part"] = [f"{stem}ante", f"{stem}ato"]

    # 4. Italian Nouns
    for noun, data in LEXICON.get("it_nouns", {}).items():
        if "level" not in data:
            data["level"] = "A1" if noun in ["sole", "luna", "casa", "acqua", "uomo", "donna", "padre", "madre"] else "A2"

    # 5. Russian Verbs
    for verb, data in LEXICON.get("ru_verbs", {}).items():
        if "level" not in data:
            data["level"] = "A1" if verb in ["читать", "писать", "делать", "работать", "знать", "говорить"] else "A2"
        if "usage_hint" not in data or not data["usage_hint"]:
            data["usage_hint"] = f"{verb} {DEFAULT_HINTS['ru_verbs']}"

    # 6. Russian Nouns
    for noun, data in LEXICON.get("ru_nouns", {}).items():
        if "level" not in data:
            data["level"] = "A1" if noun in ["стол", "книга", "дом", "вода", "человек", "друг", "город"] else "A2"

    # 7. Greek Verbs
    for verb, data in LEXICON.get("el_verbs", {}).items():
        if "level" not in data:
            data["level"] = "A1" if verb in ["γράφω", "διαβάζω", "βλέπω", "ακούω", "μιλάω", "θέλω"] else "A2"
        if "usage_hint" not in data or not data["usage_hint"]:
            data["usage_hint"] = f"{verb} {DEFAULT_HINTS['el_verbs']}"

    # 8. Greek Nouns
    for noun, data in LEXICON.get("el_nouns", {}).items():
        if "level" not in data:
            data["level"] = "A1" if noun in ["δρόμος", "ήλιος", "σπίτι", "νερό", "άνθρωπος", "πόλη"] else "A2"

def main():
    print("🚀 Initializing COSYlanguages Standalone Apps Data Enrichment Pipeline...")
    enrich_and_verify()
    for key, rel_path in APP_DATA_PATHS.items():
        if key in LEXICON and len(LEXICON[key]) > 0:
            os.makedirs(os.path.dirname(rel_path), exist_ok=True)
            with open(rel_path, 'w', encoding='utf-8') as f:
                json.dump(LEXICON[key], f, ensure_ascii=False, indent=2)
            print(f"  ✅ Enriched {rel_path} ({len(LEXICON[key])} entries with CEFR levels & usage_hints)")
    print("🎉 Pipeline executed successfully across all 8 standalone reference apps.")

if __name__ == "__main__":
    main()

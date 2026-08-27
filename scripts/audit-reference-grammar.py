#!/usr/bin/env python3
"""
scripts/audit-reference-grammar.py

1. Walks reference-grammar/ and extracts top-level category and group/item id, label, practice_links.
   Outputs reference-grammar-audit.json: { lang: [ { category, group_id, label, practice_links } ] }.
2. Reconciles with comparative/data/grammar-inventory.json via loose matching.
   Updates grammar-inventory.json with a "links" field: { lang_code: practice_link }.
3. Outputs missing-from-inventory.json containing unmatched reference-grammar items grouped by category.
4. Prints a summary of reconciliation results.
"""

import glob
import json
import os
import re

# Multilingual / Synonym translation map for loose matching
TRANSLATIONS = {
    # French
    "laccord des adjectifs": "adjective agreement",
    "les adjectifs position": "adjective placement",
    "le comparatif": "comparative degree of adjectives",
    "le superlatif": "superlative degree of adjectives",
    "les articles": "definite articles",
    "les articles definis indefinis": "definite articles",
    "les articles partitifs": "definite articles",
    "les adjectifs demonstratifs ce cet cette ces": "demonstrative determiners",
    "le genre des noms 12": "grammatical noun gender",
    "le genre des noms 22": "grammatical noun gender",
    "le pluriel des noms": "noun plural formation",
    "les nombres jours et mois": "calendar units basic temporal adverbs",
    "lheure": "time expressions",
    "les pronoms sujets": "personal pronouns",
    "les adjectifs possessifs": "possessive adjectives determiners",
    "verbe etre": "present tense copula to be",
    "verbe avoir": "possession verb to have",
    "le futur proche": "periphrastic near future going to",
    "la negation": "basic clause negation",

    # Italian
    "gli articoli determinativi": "definite articles",
    "i plurali": "noun plural formation",
    "i pronomi soggetto": "personal pronouns",
    "verbo essere": "present tense copula to be",
    "verbo avere": "possession verb to have",

    # Russian
    "именительный падеж": "noun case declension",
    "род существительных": "grammatical noun gender",
    "личные местоимения": "personal pronouns",
    "глагол быть настоящее время": "present tense copula to be",

    # Greek
    "ονομαστική": "noun case declension",
    "οριστικό άρθρο": "definite articles",
    "προσωπικές αντωνυμίες": "personal pronouns",
    "ρήμα είμαι": "present tense copula to be",
}


def norm(s):
    if not s:
        return ""
    return re.sub(r'[^a-z0-9]', '', s.lower())


def norm_clean(s):
    if not s:
        return ""
    return re.sub(r'[^a-zA-Z0-9а-яА-Яα-ωΑ-Ω ]', '', s.lower()).strip()


def match_item_to_inventory(entry, inventory):
    cat = norm(entry['category'])
    label = norm(entry['label'])
    gid = norm(entry['group_id'])

    label_raw = norm_clean(entry['label'])
    translated = TRANSLATIONS.get(label_raw, '')
    norm_trans = norm(translated)

    for inv in inventory:
        inv_id = norm(inv['id'])
        inv_cat = norm(inv['category'])
        inv_title = norm(inv['title'])

        # Exact id / title match
        if gid == inv_id or label == inv_title:
            return inv

        # Translation match
        if norm_trans and (norm_trans in inv_title or inv_title in norm_trans):
            return inv

        # Standard equivalences
        if gid == 'adjectives' and inv_id == 'adjectiveagreement':
            return inv
        if gid == 'comparativeadjectives' and inv_id == 'comparativeadjectivesanalyticsynthetic':
            return inv
        if gid == 'superlativeadjectives' and inv_id == 'superlativeadjectives':
            return inv
        if gid == 'articles' and inv_id == 'definitearticles':
            return inv
        if gid in ('plurals', 'pluralsregular', 'pluralsirregular', 'plurieldesnoms', 'plurali') and inv_id == 'nounnumberplural':
            return inv
        if gid in ('personalpronouns', 'pronomssujets', 'pronomisoggetto') and inv_id == 'personalpronouns':
            return inv
        if gid in ('possessiveadjectives', 'adjectifspossessifs') and inv_id == 'possessiveadjectives':
            return inv
        if gid in ('demonstratives', 'cecetcetteces') and inv_id == 'demonstrativedeterminers':
            return inv
        if gid in ('bepresentsimple', 'eimai', 'etre', 'essere', 'bepresent') and inv_id == 'presenttensetobe':
            return inv
        if gid in ('futuregoingto', 'futurproche') and inv_id == 'periphrasticfuture':
            return inv
        if gid == 'presentcontinuous' and inv_id == 'presentcontinuousaspect':
            return inv
        if gid in ('havegot', 'avoir', 'avere') and inv_id == 'presenttensetohave':
            return inv
        if gid == 'wordordersvo' and inv_id == 'wordordersvo':
            return inv
        if gid == 'accorddesadjectifs' and inv_id == 'adjectiveagreement':
            return inv
        if gid == 'adjectifsposition' and inv_id == 'postnominaladjectives':
            return inv
        if gid == 'comparatif' and inv_id == 'comparativeadjectivesanalyticsynthetic':
            return inv
        if gid == 'superlatif' and inv_id == 'superlativeadjectives':
            return inv
        if gid in ('articlesdefinisindefinis', 'articolideterminativi', 'definitearticle') and inv_id == 'definitearticles':
            return inv
        if gid in ('genredesnoms1', 'genredesnoms2', 'gender') and inv_id == 'grammaticalgender':
            return inv
        if gid == 'nombresjoursmois' and inv_id == 'daysmonthstimeadverbs':
            return inv
        if gid == 'negation' and inv_id == 'basicnegation':
            return inv
        if gid == 'nominative' and inv_id == 'nouncasedeclension':
            return inv

    return None


def main():
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    ref_dir = os.path.join(repo_root, "reference-grammar")
    inventory_path = os.path.join(repo_root, "comparative", "data", "grammar-inventory.json")
    audit_output_path = os.path.join(repo_root, "reference-grammar-audit.json")
    missing_output_path = os.path.join(repo_root, "missing-from-inventory.json")

    files = glob.glob(os.path.join(ref_dir, "*", "*", "*.json"))

    audit_data = {}

    for f in sorted(files):
        with open(f, "r", encoding="utf-8") as fp:
            data = json.load(fp)
        lang = data.get("language")
        cat = data.get("category", "")
        groups = data.get("groups", [])

        if lang not in audit_data:
            audit_data[lang] = []

        for g in groups:
            if "items" in g and g["items"]:
                for item in g["items"]:
                    audit_data[lang].append({
                        "category": cat,
                        "group_id": item.get("id", g.get("id", "")),
                        "label": item.get("label", g.get("label", "")),
                        "practice_links": item.get("practice_links", g.get("practice_links", [])) or []
                    })
            else:
                audit_data[lang].append({
                    "category": cat,
                    "group_id": g.get("id", ""),
                    "label": g.get("label", ""),
                    "practice_links": g.get("practice_links", []) or []
                })

    # 1. Write reference-grammar-audit.json
    with open(audit_output_path, "w", encoding="utf-8") as fp:
        json.dump(audit_data, fp, indent=2, ensure_ascii=False)
    print(f"Wrote reference-grammar-audit.json with {sum(len(v) for v in audit_data.values())} total entries across {len(audit_data)} languages.")

    # 2. Reconcile with grammar-inventory.json
    with open(inventory_path, "r", encoding="utf-8") as fp:
        inventory = json.load(fp)

    unmatched_by_cat = {}
    matched_count = 0

    # Prepare links tracking for each inventory entry
    # Add 'links' dict to each inventory item if matching practice_links found
    for inv in inventory:
        if "links" not in inv:
            inv["links"] = {}

    for lang, items in audit_data.items():
        for item in items:
            inv_match = match_item_to_inventory(item, inventory)
            if inv_match:
                matched_count += 1
                plinks = item.get("practice_links", [])
                if plinks:
                    raw_link = plinks[0]
                    rel_link = raw_link if raw_link.startswith("../") else "../" + raw_link
                    inv_match["links"][lang] = rel_link
            else:
                cat = item.get("category", "uncategorized")
                if cat not in unmatched_by_cat:
                    unmatched_by_cat[cat] = []
                unmatched_by_cat[cat].append({
                    "lang": lang,
                    "group_id": item.get("group_id"),
                    "label": item.get("label"),
                    "practice_links": item.get("practice_links", [])
                })

    # Save updated grammar-inventory.json
    with open(inventory_path, "w", encoding="utf-8") as fp:
        json.dump(inventory, fp, indent=2, ensure_ascii=False)
        fp.write("\n")
    print(f"Updated {inventory_path}.")

    # 3. Write missing-from-inventory.json
    with open(missing_output_path, "w", encoding="utf-8") as fp:
        json.dump(unmatched_by_cat, fp, indent=2, ensure_ascii=False)
        fp.write("\n")
    print(f"Wrote missing-from-inventory.json.")

    # 4. Summary
    inventory_with_links = [inv for inv in inventory if inv.get("links")]
    total_real_anchor_links = sum(len(inv.get("links", {})) for inv in inventory)
    total_unmatched = sum(len(v) for v in unmatched_by_cat.values())

    print("\n--- RECONCILIATION SUMMARY ---")
    print(f"Inventory entries with links: {len(inventory_with_links)} / {len(inventory)}")
    print(f"Total real anchor links added: {total_real_anchor_links}")
    print(f"Total reference-grammar items matched: {matched_count}")
    print(f"Total reference-grammar items unmatched: {total_unmatched}")


if __name__ == "__main__":
    main()

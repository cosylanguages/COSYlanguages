#!/usr/bin/env python3
"""
Match Curriculum Items to Taxonomy References

Populates grammar_refs and vocabulary_refs in English curriculum files (A1.json, A1_v2.json, A2.json, B1.json)
and generates MISSING_TAXONOMY_MATCHES.md with unmatched strings.
"""

import json
import os
import re

# 1. Load taxonomy files
with open("taxonomy/en/grammar.json", "r", encoding="utf-8") as f:
    g_tax = json.load(f)

with open("taxonomy/en/vocabulary.json", "r", encoding="utf-8") as f:
    v_tax = json.load(f)


def normalize(text):
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    return " ".join(text.split())


# Pre-parse taxonomy entries
g_info = []
for entry in g_tax:
    url = entry["manual_url"]
    text = ""
    if os.path.exists(url):
        with open(url, "r", encoding="utf-8", errors="ignore") as f:
            c = f.read()
        text = normalize(re.sub(r"<[^>]+>", " ", c))

    parts = entry["id"].split(".")
    lvl = parts[2].lower()
    slug = parts[3].lower()

    g_info.append({
        "id": entry["id"],
        "level": lvl,
        "title": entry["title"],
        "norm_title": normalize(entry["title"]),
        "slug": slug,
        "norm_slug": normalize(slug),
        "text": text
    })

v_info = []
for entry in v_tax:
    url = entry["manual_url"]
    text = ""
    if os.path.exists(url):
        with open(url, "r", encoding="utf-8", errors="ignore") as f:
            c = f.read()
        text = normalize(re.sub(r"<[^>]+>", " ", c))

    parts = entry["id"].split(".")
    lvl = parts[2].lower()
    slug = parts[3].lower()

    v_info.append({
        "id": entry["id"],
        "level": lvl,
        "title": entry["title"],
        "norm_title": normalize(entry["title"]),
        "slug": slug,
        "norm_slug": normalize(slug),
        "text": text
    })

# Rule map for grammar
GRAMMAR_KEYWORD_RULES = [
    (r"\b(to be|am|is|are|was|were)\b", ["be-present", "be-past"]),
    (r"\b(present simple)\b", ["present-simple-positive", "present-simple-negative-and-questions"]),
    (r"\b(present continuous)\b", ["present-continuous-forms", "present-continuous-for-future"]),
    (r"\b(present perfect continuous)\b", ["present-perfect-continuous"]),
    (r"\b(present perfect simple|present perfect)\b", ["present-perfect-forms", "present-perfect-vs-past-simple"]),
    (r"\b(past simple)\b", ["past-simple-regular-and-irregular-verbs", "past-simple-questions-and-negation"]),
    (r"\b(past continuous)\b", ["past-continuous"]),
    (r"\b(past perfect continuous)\b", ["past-perfect-continuous"]),
    (r"\b(past perfect)\b", ["past-perfect-simple"]),
    (r"\b(used to)\b", ["used-to"]),
    (r"\b(future simple|will)\b", ["future-simple-will-and-shall"]),
    (r"\b(be going to|going to)\b", ["be-going-to-for-plans-and-predictions"]),
    (r"\b(future continuous)\b", ["future-continuous"]),
    (r"\b(future perfect)\b", ["future-perfect-simple-and-continuous"]),
    (r"\b(first conditional)\b", ["first-conditional"]),
    (r"\b(second conditional)\b", ["second-conditional"]),
    (r"\b(third conditional)\b", ["third-conditional"]),
    (r"\b(mixed conditional)\b", ["mixed-conditionals-in-depth"]),
    (r"\b(passive|passive voice)\b", ["passive-voice-forms-and-uses"]),
    (r"\b(reported speech|reported questions|reporting verbs)\b", ["reported-speech-and-indirect-questions"]),
    (r"\b(question tags)\b", ["question-tags"]),
    (r"\b(relative clauses|relative pronouns)\b", ["relative-clauses-defining-and-non-defining"]),
    (r"\b(modal|modals|should|must|have to|can|could|may|might)\b", [
        "modals-ability-permission-request",
        "modals-obligation-necessity-prohibition",
        "modals-deduction-speculation-possibility"
    ]),
    (r"\b(cleft|clefts)\b", ["cleft-sentences-for-emphasis-and-focus"]),
    (r"\b(gerund|infinitive)\b", ["verb-patterns-gerunds-and-infinitives"]),
    (r"\b(comparative|superlative|as\s*\.\.\.\s*as)\b", ["comparatives-and-superlatives", "as-as"]),
    (r"\b(preposition|prepositions)\b", [
        "prepositions-of-place-and-movement",
        "prepositions-of-time",
        "dependent-prepositions-verbs-adjectives-nouns"
    ]),
    (r"\b(article|articles|a/an|the)\b", ["articles-a-an-the-zero-article"]),
    (r"\b(demonstrative|this/that|these/those)\b", ["demonstratives-this-that-these-those"]),
    (r"\b(possessive|my/your|mine/yours)\b", ["possessives-adjectives-and-pronouns"]),
    (r"\b(adverb|adverbs)\b", ["adverbs-of-frequency", "adverbs-of-manner", "adverbs-position-and-types"]),
]


def find_grammar_match(item_str, target_level):
    norm_item = normalize(item_str)

    # 1. Rule matching
    for pattern, target_slugs in GRAMMAR_KEYWORD_RULES:
        if re.search(pattern, norm_item):
            for slug in target_slugs:
                for cand in g_info:
                    if cand["slug"] == slug and cand["level"] == target_level:
                        return cand["id"]
                for cand in g_info:
                    if cand["slug"] == slug:
                        return cand["id"]

    # 2. Text / Title overlap fallback
    best_id = None
    best_score = 0
    item_words = set(w for w in norm_item.split() if len(w) > 2)

    for cand in g_info:
        if cand["slug"].startswith("part-") or cand["slug"] in ("index", "appendix"):
            continue
        score = 0
        lvl_penalty = 0 if cand["level"] == target_level else 3

        t_words = set(cand["norm_title"].split())
        s_words = set(cand["norm_slug"].split())

        common_t = item_words.intersection(t_words)
        common_s = item_words.intersection(s_words)

        score += len(common_t) * 8 + len(common_s) * 8

        if norm_item in cand["text"]:
            score += 15
        else:
            matches = sum(1 for w in item_words if w in cand["text"])
            if matches == len(item_words):
                score += 8

        final_score = score - lvl_penalty
        if final_score > best_score:
            best_score = final_score
            best_id = cand["id"]

    if best_score >= 10:
        return best_id
    return None


def find_vocab_match(item_str, target_level):
    norm_item = normalize(item_str)
    item_words = set(w for w in norm_item.split() if len(w) > 1)

    best_id = None
    best_score = 0

    for cand in v_info:
        lvl_penalty = 0 if cand["level"] == target_level else 4
        score = 0

        # Exact match in manual text
        if f" {norm_item} " in f" {cand['text']} ":
            score += 25
        elif norm_item in cand["text"]:
            score += 15
        else:
            word_matches = sum(1 for w in item_words if f" {w} " in f" {cand['text']} ")
            if len(item_words) > 0 and word_matches == len(item_words):
                score += 10

        t_words = set(cand["norm_title"].split())
        common = item_words.intersection(t_words)
        if common:
            score += len(common) * 4

        if not cand["slug"].startswith("part-") and cand["slug"] != "index":
            score += 2

        final_score = score - lvl_penalty
        if final_score > best_score:
            best_score = final_score
            best_id = cand["id"]

    if best_score >= 10:
        return best_id
    return None


# Process files
curr_files = [
    ("curriculum/en/general/A1.json", "a1"),
    ("curriculum/en/general/A1_v2.json", "a1"),
    ("curriculum/en/general/A2.json", "a2"),
    ("curriculum/en/general/B1.json", "b1")
]

unmatched_entries = []
stats = {
    "total_grammar": 0, "matched_grammar": 0,
    "total_vocab": 0, "matched_vocab": 0
}

for file_path, target_lvl in curr_files:
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    for unit in data.get("units", []):
        unit_id = unit.get("unit", unit.get("id", ""))
        for lesson in unit.get("lessons", []):
            lesson_num = lesson.get("lesson", "")
            lesson_id = f"{os.path.basename(file_path)} Unit {unit_id} Lesson {lesson_num}"

            # Process grammar
            g_refs = []
            for g_item in lesson.get("grammar", []) or []:
                stats["total_grammar"] += 1
                matched_id = find_grammar_match(g_item, target_lvl)
                if matched_id:
                    stats["matched_grammar"] += 1
                    if matched_id not in g_refs:
                        g_refs.append(matched_id)
                else:
                    unmatched_entries.append({
                        "lesson_id": lesson_id,
                        "type": "grammar",
                        "unmatched_string": g_item
                    })
            lesson["grammar_refs"] = g_refs

            # Process vocabulary
            v_refs = []
            for v_item in lesson.get("vocabulary", []) or []:
                stats["total_vocab"] += 1
                matched_id = find_vocab_match(v_item, target_lvl)
                if matched_id:
                    stats["matched_vocab"] += 1
                    if matched_id not in v_refs:
                        v_refs.append(matched_id)
                else:
                    unmatched_entries.append({
                        "lesson_id": lesson_id,
                        "type": "vocabulary",
                        "unmatched_string": v_item
                    })
            lesson["vocabulary_refs"] = v_refs

    # Write back updated curriculum JSON file
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")

# Write MISSING_TAXONOMY_MATCHES.md
with open("MISSING_TAXONOMY_MATCHES.md", "w", encoding="utf-8") as f:
    f.write("# Missing Taxonomy Matches\n\n")
    f.write("This file lists curriculum grammar and vocabulary items that could not be automatically matched to an existing manual taxonomy entry in `taxonomy/en/grammar.json` or `taxonomy/en/vocabulary.json`.\n\n")
    f.write("**Summary Statistics:**\n")
    f.write(f"- Grammar items matched: {stats['matched_grammar']} / {stats['total_grammar']}\n")
    f.write(f"- Vocabulary items matched: {stats['matched_vocab']} / {stats['total_vocab']}\n")
    f.write(f"- Total unmatched items for human review: {len(unmatched_entries)}\n\n")
    f.write("## Unmatched Curriculum Items\n\n")
    f.write("| Curriculum Lesson | Skill | Unmatched Item String |\n")
    f.write("|---|---|---|\n")
    for item in unmatched_entries:
        f.write(f"| {item['lesson_id']} | {item['type']} | `{item['unmatched_string']}` |\n")

print("Processing complete.")
print("Stats:", stats)
print("Unmatched count:", len(unmatched_entries))

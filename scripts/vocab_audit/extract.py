#!/usr/bin/env python3
"""
scripts/vocab_audit/extract.py

Inventories English vocabulary sources across the repo:
- vocabulary/en/<LEVEL>/**/*.js
- manuals/en/vocabulary/<level>/topics/*.html
- curriculum/en/general/*.json
- blog/top-100-a0-a1-english.html
- COSYgames/data/gender/*.js

Outputs structured JSON artifacts under scripts/vocab_audit/out/
"""

import os
import glob
import json
import re
from html.parser import HTMLParser

OUT_DIR = os.path.join(os.path.dirname(__file__), "out")


def extract_vocab_js():
    entries = []
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
    pattern = os.path.join(repo_root, "vocabulary/en/**/*.js")
    files = sorted(glob.glob(pattern, recursive=True))

    for filepath in files:
        rel_path = os.path.relpath(filepath, repo_root)
        parts = rel_path.split(os.sep)
        level_dir = parts[2] if len(parts) > 2 else ""

        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        match = re.search(r"const\s+data\s*=\s*(\[.*?\])\s*;", content, re.DOTALL)
        if match:
            try:
                data = json.loads(match.group(1))
                for item in data:
                    level_code = item.get("level_code") or item.get("level") or level_dir
                    entries.append({
                        "word": item.get("word"),
                        "level_code": level_code.upper(),
                        "domain": item.get("domain"),
                        "subcategory": item.get("subcategory"),
                        "sub_subcategory": item.get("sub_subcategory"),
                        "pos_section": item.get("pos_section"),
                        "theme": item.get("theme"),
                        "id": item.get("id"),
                        "legacy_id": item.get("legacy_id"),
                        "source_file": rel_path
                    })
            except Exception as e:
                print(f"Error parsing JSON in {rel_path}: {e}")

    return entries


class ManualHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.entries = []
        self.current_entry = None
        self.in_word = False
        self.in_pos = False
        self.in_def = False
        self.tag_stack = []

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        classes = attr_dict.get("class", "").split()

        if "vocab-item" in classes or "vocab-card" in classes:
            if self.current_entry and self.current_entry.get("word", "").strip():
                self._flush_current()
            self.current_entry = {"word": "", "vocab_pos": None, "vocab_def": None}

        if "vocab-word" in classes:
            self.in_word = True
            if self.current_entry is None:
                self.current_entry = {"word": "", "vocab_pos": None, "vocab_def": None}
            else:
                self.current_entry["word"] = ""
        elif "vocab-pos" in classes:
            self.in_pos = True
            if self.current_entry is None:
                self.current_entry = {"word": "", "vocab_pos": "", "vocab_def": None}
            else:
                self.current_entry["vocab_pos"] = ""
        elif "vocab-def" in classes:
            self.in_def = True
            if self.current_entry is None:
                self.current_entry = {"word": "", "vocab_pos": None, "vocab_def": ""}
            else:
                self.current_entry["vocab_def"] = ""

        self.tag_stack.append((tag, classes))

    def handle_endtag(self, tag):
        if self.in_word:
            self.in_word = False
        if self.in_pos:
            self.in_pos = False
        if self.in_def:
            self.in_def = False

        if self.tag_stack:
            popped_tag, popped_classes = self.tag_stack.pop()
            if "vocab-item" in popped_classes or "vocab-card" in popped_classes:
                if self.current_entry and self.current_entry.get("word", "").strip():
                    self._flush_current()

    def handle_data(self, data):
        if self.current_entry is not None:
            if self.in_word:
                self.current_entry["word"] += data
            elif self.in_pos:
                self.current_entry["vocab_pos"] = (self.current_entry["vocab_pos"] or "") + data
            elif self.in_def:
                self.current_entry["vocab_def"] = (self.current_entry["vocab_def"] or "") + data

    def _flush_current(self):
        if self.current_entry and self.current_entry.get("word", "").strip():
            self.entries.append({
                "word": self.current_entry["word"].strip(),
                "vocab_pos": self.current_entry["vocab_pos"].strip() if self.current_entry.get("vocab_pos") else None,
                "vocab_def": self.current_entry["vocab_def"].strip() if self.current_entry.get("vocab_def") else None
            })
            self.current_entry = None


def extract_manuals():
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
    pattern = os.path.join(repo_root, "manuals/en/vocabulary/*/topics/*.html")
    files = sorted(glob.glob(pattern))

    grouped_manuals = {}
    for filepath in files:
        rel_path = os.path.relpath(filepath, repo_root)
        parts = rel_path.split(os.sep)
        level = parts[3].upper() if len(parts) > 3 else "A1"

        parser = ManualHTMLParser()
        with open(filepath, "r", encoding="utf-8") as f:
            parser.feed(f.read())
        # Flush any trailing entry
        parser._flush_current()

        file_entries = []
        for item in parser.entries:
            file_entries.append({
                "word": item["word"],
                "vocab_pos": item["vocab_pos"],
                "vocab_def": item["vocab_def"],
                "level": level,
                "source_file": rel_path
            })
        grouped_manuals[rel_path] = file_entries

    return grouped_manuals


def extract_curriculum():
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
    pattern = os.path.join(repo_root, "curriculum/en/general/*.json")
    files = sorted(glob.glob(pattern))

    entries = []
    for filepath in files:
        rel_path = os.path.relpath(filepath, repo_root)
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)

        level = data.get("level", "").upper()
        for unit in data.get("units", []):
            unit_title = unit.get("title", f"Unit {unit.get('unit')}")
            for lesson in unit.get("lessons", []):
                lesson_title = lesson.get("title", f"Lesson {lesson.get('lesson')}")
                for word_item in lesson.get("vocabulary", []):
                    entries.append({
                        "word": word_item,
                        "level": level,
                        "unit_title": unit_title,
                        "lesson_title": lesson_title,
                        "source_file": rel_path
                    })

    return entries


def extract_blog():
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
    filepath = os.path.join(repo_root, "blog/top-100-a0-a1-english.html")
    rel_path = os.path.relpath(filepath, repo_root)

    entries = []
    if not os.path.exists(filepath):
        return entries

    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    parts = html.split('<div class="lex-card">')
    for p in parts[1:]:
        theme_m = re.search(r'<span class="lex-theme">(.*?)</span>', p)
        theme = theme_m.group(1).strip() if theme_m else ""

        pair_m = re.search(r'<div class="lex-pair"[^>]*>(.*?)</div>', p, re.DOTALL)
        pair_html = pair_m.group(1) if pair_m else ""
        text = re.sub(r'<[^>]+>', '', pair_html)
        text = ' '.join(text.split())

        tokens = re.split(r'➔|↔', text)
        for tok in tokens:
            w = tok.strip()
            if w:
                entries.append({
                    "word": w,
                    "level": "A1",
                    "lex_theme": theme,
                    "source_file": rel_path
                })

    return entries


def extract_gender_games():
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
    pattern = os.path.join(repo_root, "COSYgames/data/gender/*.js")
    files = sorted(glob.glob(pattern))

    entries = []
    for filepath in files:
        rel_path = os.path.relpath(filepath, repo_root)
        filename = os.path.basename(filepath)
        level = filename.replace(".js", "").upper()

        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        match = re.search(r"const\s+data\s*=\s*(\[.*?\])\s*;", content, re.DOTALL)
        if match:
            raw_array = match.group(1)
            fixed_array = re.sub(r"([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:", r'\1"\2":', raw_array)
            fixed_array = re.sub(r",\s*([\]}])", r"\1", fixed_array)
            try:
                parsed = json.loads(fixed_array)
                for item in parsed:
                    if "concept" in item:
                        entries.append({
                            "word": item["concept"],
                            "concept": item["concept"],
                            "level": level,
                            "source_file": rel_path
                        })
            except Exception as e:
                print(f"Error parsing gender game JS {rel_path}: {e}")

    return entries


def main():
    os.makedirs(OUT_DIR, exist_ok=True)

    print("Extracting Vocabulary JS...")
    vocab_js = extract_vocab_js()
    with open(os.path.join(OUT_DIR, "vocab_js.json"), "w", encoding="utf-8") as f:
        json.dump(vocab_js, f, indent=2, ensure_ascii=False)

    print("Extracting Manuals...")
    manuals = extract_manuals()
    with open(os.path.join(OUT_DIR, "manuals.json"), "w", encoding="utf-8") as f:
        json.dump(manuals, f, indent=2, ensure_ascii=False)

    print("Extracting Curriculum...")
    curriculum = extract_curriculum()
    with open(os.path.join(OUT_DIR, "curriculum.json"), "w", encoding="utf-8") as f:
        json.dump(curriculum, f, indent=2, ensure_ascii=False)

    print("Extracting Blog...")
    blog = extract_blog()
    with open(os.path.join(OUT_DIR, "blog.json"), "w", encoding="utf-8") as f:
        json.dump(blog, f, indent=2, ensure_ascii=False)

    print("Extracting Gender Games...")
    gender_games = extract_gender_games()
    with open(os.path.join(OUT_DIR, "gender_games.json"), "w", encoding="utf-8") as f:
        json.dump(gender_games, f, indent=2, ensure_ascii=False)

    print("Extraction complete. JSON artifacts created in scripts/vocab_audit/out/")


if __name__ == "__main__":
    main()

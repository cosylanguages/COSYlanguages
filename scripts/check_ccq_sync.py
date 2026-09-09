#!/usr/bin/env python3
"""
scripts/check_ccq_sync.py

Verifies that reference-grammar/en/lessons/*.json files stay in exact sync with
their source HTML pages under manuals/en/grammar/a1/topics/*.html.
"""

import os
import glob
import json
import re
import sys
from html.parser import HTMLParser

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML_DIR = os.path.join(PROJECT_ROOT, "manuals", "en", "grammar", "a1", "topics")
LESSON_DIR = os.path.join(PROJECT_ROOT, "reference-grammar", "en", "lessons")

class TopicParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.panels = []
        self.current_panel = None
        self.current_item = None
        self.in_text = False
        self.in_opt = False
        self.in_explain = False

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        classes = attrs_dict.get('class', '').split()

        if 'ccq-panel' in classes or 'quiz-panel' in classes:
            panel_type = 'ccq-panel' if 'ccq-panel' in classes else 'quiz-panel'
            data_quiz_raw = attrs_dict.get('data-quiz', '[]')
            try:
                data_quiz = json.loads(data_quiz_raw)
            except Exception:
                data_quiz = []
            self.current_panel = {
                'type': panel_type,
                'data_quiz': data_quiz,
                'items': []
            }
            self.panels.append(self.current_panel)
        elif self.current_panel is not None and 'qitem' in classes:
            self.current_item = {'qtext': '', 'qopts': [], 'qexplain': ''}
            self.current_panel['items'].append(self.current_item)
        elif self.current_item is not None:
            if 'qtext' in classes:
                self.in_text = True
            elif 'qopt' in classes:
                self.in_opt = True
                self.current_item['qopts'].append('')
            elif 'qexplain' in classes:
                self.in_explain = True

    def handle_endtag(self, tag):
        if self.in_text and tag in ['div', 'p', 'span']:
            self.in_text = False
        if self.in_opt and tag in ['button', 'div', 'span']:
            self.in_opt = False
        if self.in_explain and tag in ['div', 'p', 'span']:
            self.in_explain = False

    def handle_data(self, data):
        if self.current_item is not None:
            if self.in_text:
                self.current_item['qtext'] += data
            elif self.in_opt:
                self.current_item['qopts'][-1] += data
            elif self.in_explain:
                self.current_item['qexplain'] += data

def clean_text(text):
    if not text:
        return ""
    return re.sub(r'^\d+\.\s*', '', text.strip()).strip()

def check_sync():
    html_files = sorted(glob.glob(os.path.join(HTML_DIR, "*.html")))
    discrepancies = 0
    total_checked = 0

    print(f"Checking HTML <-> JSON sync across {len(html_files)} English A1 topic files...")

    for html_path in html_files:
        slug = os.path.splitext(os.path.basename(html_path))[0]
        json_path = os.path.join(LESSON_DIR, f"{slug}.json")

        if not os.path.exists(json_path):
            print(f"✗ {slug}: missing JSON lesson file at {json_path}")
            discrepancies += 1
            continue

        with open(html_path, 'r', encoding='utf-8') as f:
            html_content = f.read()

        with open(json_path, 'r', encoding='utf-8') as f:
            lesson_json = json.load(f)

        parser = TopicParser()
        parser.feed(html_content)

        ccq_panel = next((p for p in parser.panels if p['type'] == 'ccq-panel'), None)
        meaning_check = lesson_json.get("meaningCheck", [])

        if ccq_panel is None:
            print(f"✗ {slug}: missing .ccq-panel in HTML")
            discrepancies += 1
            continue

        html_items = ccq_panel['items']
        dq = ccq_panel['data_quiz']

        if len(html_items) != len(meaning_check):
            print(f"✗ {slug}: item count mismatch (HTML: {len(html_items)}, JSON: {len(meaning_check)})")
            discrepancies += 1
            continue

        for idx, (h_item, j_item) in enumerate(zip(html_items, meaning_check)):
            h_qtext = clean_text(h_item['qtext'])
            j_qtext = clean_text(j_item.get('question', ''))

            h_opts = [clean_text(o) for o in h_item['qopts'] if clean_text(o)]
            j_opts = [clean_text(o) for o in j_item.get('options', [])]

            h_correct = dq[idx]['correct'] if idx < len(dq) and isinstance(dq[idx], dict) and 'correct' in dq[idx] else 0
            j_correct = j_item.get('correctOptionIndex', 0)

            h_explain = clean_text(h_item['qexplain'])
            j_explain = clean_text(j_item.get('explanation', ''))

            if h_qtext != j_qtext:
                print(f"✗ {slug} CCQ[{idx}] question mismatch:\n  HTML: '{h_qtext}'\n  JSON: '{j_qtext}'")
                discrepancies += 1

            if h_opts != j_opts:
                print(f"✗ {slug} CCQ[{idx}] options mismatch:\n  HTML: {h_opts}\n  JSON: {j_opts}")
                discrepancies += 1

            if h_correct != j_correct:
                print(f"✗ {slug} CCQ[{idx}] correct index mismatch:\n  HTML: {h_correct}\n  JSON: {j_correct}")
                discrepancies += 1

            if h_explain != j_explain:
                print(f"✗ {slug} CCQ[{idx}] explanation mismatch:\n  HTML: '{h_explain}'\n  JSON: '{j_explain}'")
                discrepancies += 1

        total_checked += 1

    if discrepancies == 0:
        print(f"\n✓ Sync check PASSED! All {total_checked} HTML pages and JSON lesson files are in 100% sync.")
        return 0
    else:
        print(f"\n✗ Sync check FAILED with {discrepancies} discrepancy/discrepancies.")
        return 1

if __name__ == "__main__":
    sys.exit(check_sync())

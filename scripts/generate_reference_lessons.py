#!/usr/bin/env python3
"""
scripts/generate_reference_lessons.py

Parses all 53 manuals/en/grammar/a1/topics/*.html files and generates
corresponding CELTA 6-stage lesson unit JSON files under reference-grammar/en/lessons/<slug>.json.
"""

import os
import glob
import json
import re
from html.parser import HTMLParser

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML_DIR = os.path.join(PROJECT_ROOT, "manuals", "en", "grammar", "a1", "topics")
OUTPUT_DIR = os.path.join(PROJECT_ROOT, "reference-grammar", "en", "lessons")

class TopicParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.in_title = False
        self.h1 = ""
        self.in_h1 = False

        self.panels = []
        self.current_panel = None
        self.current_item = None
        self.in_text = False
        self.in_opt = False
        self.in_explain = False

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        classes = attrs_dict.get('class', '').split()

        if tag == 'title':
            self.in_title = True
        elif tag == 'h1':
            self.in_h1 = True

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
        if tag == 'title':
            self.in_title = False
        if tag == 'h1':
            self.in_h1 = False
        if self.in_text and tag in ['div', 'p', 'span']:
            self.in_text = False
        if self.in_opt and tag in ['button', 'div', 'span']:
            self.in_opt = False
        if self.in_explain and tag in ['div', 'p', 'span']:
            self.in_explain = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_h1:
            self.h1 += data
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
    text = re.sub(r'^\d+\.\s*', '', text.strip())
    return text.strip()

def extract_items_from_panel(panel, slug):
    items = []
    if not panel:
        return items
    dq = panel['data_quiz']
    for idx, item in enumerate(panel['items']):
        correct_idx = dq[idx]['correct'] if idx < len(dq) and isinstance(dq[idx], dict) and 'correct' in dq[idx] else 0
        qtext = clean_text(item['qtext'])
        qopts = [clean_text(opt) for opt in item['qopts'] if clean_text(opt)]
        qexplain = clean_text(item['qexplain'])
        items.append({
            "question": qtext,
            "targetStructure": slug,
            "options": qopts,
            "correctOptionIndex": correct_idx,
            "explanation": qexplain
        })
    return items

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    html_files = sorted(glob.glob(os.path.join(HTML_DIR, "*.html")))
    print(f"Generating reference lessons from {len(html_files)} HTML topic files...")

    for filepath in html_files:
        filename = os.path.basename(filepath)
        slug = os.path.splitext(filename)[0]

        with open(filepath, 'r', encoding='utf-8') as f:
            html = f.read()

        parser = TopicParser()
        parser.feed(html)

        title = parser.h1.strip() or parser.title.split('·')[0].strip() or slug.replace('-', ' ').title()

        ccq_panel = next((p for p in parser.panels if p['type'] == 'ccq-panel'), None)
        quiz_panel = next((p for p in parser.panels if p['type'] == 'quiz-panel'), None)

        meaning_check = extract_items_from_panel(ccq_panel, slug)
        controlled_practice = extract_items_from_panel(quiz_panel, slug)

        unit_id = f"EN-A1-{slug.upper()}-01"

        lesson_json = {
            "unitId": unit_id,
            "title": title,
            "level": "A1",
            "language": "en",
            "leadIn": {
                "title": f"Lead-In & Context: {title}",
                "content": f"Contextual introduction and guided observation for {title}."
            },
            "meaningCheck": meaning_check,
            "form": {
                "title": f"Form & Structure: {title}",
                "content": f"Grammatical formulation, usage rules, and structural tables for {title}."
            },
            "pronunciation": {
                "title": f"Pronunciation Notes: {title}",
                "content": f"Spoken stress, weak forms, intonation, and articulation patterns for {title}."
            },
            "controlledPractice": controlled_practice,
            "freerPractice": {
                "title": f"Freer Practice: {title}",
                "content": f"Guided communicative exchanges applying {title} in everyday conversation.",
                "links": [
                    "COSYgames/scene_match"
                ]
            },
            "production": {
                "title": f"Communicative Production: {title}",
                "content": f"Independent oral production and real-world task execution using {title}.",
                "links": [
                    "COSYevents/speaking-club"
                ]
            }
        }

        out_path = os.path.join(OUTPUT_DIR, f"{slug}.json")
        with open(out_path, 'w', encoding='utf-8') as f:
            json.dump(lesson_json, f, ensure_ascii=False, indent=2)

    print(f"Successfully generated {len(html_files)} lesson JSON files in {OUTPUT_DIR}")

if __name__ == "__main__":
    main()

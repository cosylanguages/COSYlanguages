#!/usr/bin/env python3
"""
wire_all_course_htmls.py

Wires all 135 course level HTML pages under apps/premium-courses/<track>/<lang>/<level>.html
to dynamically fetch and render curriculum data from curriculum/<lang>/<track>/<level>.json,
including the "🔄 Applied Prior Knowledge" callout badge.
"""

import os
import glob

TRACK_TITLES = {
    'general': 'General Course',
    'spoken': 'Spoken Course',
    'exam': 'Exam Preparation',
    'travelling': 'Travelling Course',
    'professional': 'Professional Course',
    'relocation': 'Relocation Course'
}

LANG_NAMES = {
    'en': 'English',
    'fr': 'Français',
    'it': 'Italiano',
    'el': 'Ελληνικά',
    'ru': 'Русский',
    'es': 'Español',
    'de': 'Deutsch',
    'pt': 'Português',
    'hy': 'Հայերեն',
    'ka': 'ქართული',
    'tt': 'Татарча',
    'ba': 'Башҡортса',
    'br': 'Brezhoneg'
}

def wire_html_files():
    html_files = sorted(glob.glob('apps/premium-courses/*/*/*.html'))
    wired_count = 0

    for filepath in html_files:
        if filepath.endswith('index.html'):
            continue

        parts = filepath.split('/')
        if len(parts) < 5:
            continue

        track = parts[2]
        lang = parts[3]
        level = parts[4].replace('.html', '')

        track_title = TRACK_TITLES.get(track, track.capitalize())
        lang_name = LANG_NAMES.get(lang, lang.upper())

        back_label = "Back" if lang == 'en' else "Retour" if lang == 'fr' else "Indietro" if lang == 'it' else "Назад" if lang == 'ru' else "Πίσω" if lang == 'el' else "Volver"

        content = f"""<!DOCTYPE html>
<html lang="{lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{level} {track_title} — COSYlanguages</title>
    <link rel="stylesheet" href="../../../../css/tokens.css">
    <link rel="stylesheet" href="../../../../css/base.css">
    <link rel="stylesheet" href="../../../../css/components.css">
    <link rel="stylesheet" href="../../../../css/layout.css">
    <link rel="stylesheet" href="../../../../css/home.css">
    <link rel="icon" href="../../../../images/cosylanguages.png">
    <style>
        .curriculum-container {{ max-width: 800px; margin: 0 auto; padding: 2rem; }}
        .unit-block {{ background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; }}
        .unit-title {{ font-size: 1.5rem; margin-bottom: 1rem; color: var(--accent); }}
        .lesson-card {{ background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 8px; padding: 1rem; margin-bottom: 1rem; transition: transform 0.2s; }}
        .lesson-card:hover {{ transform: translateY(-2px); border-color: var(--accent); }}
        .lc-title {{ font-weight: 800; font-size: 1.1rem; margin-bottom: 0.5rem; }}
        .lc-meta {{ font-size: 0.9em; color: var(--muted); margin-bottom: 0.5rem; }}
        .lc-content {{ font-size: 0.95em; line-height: 1.4; }}
    </style>
</head>
<body>

<nav id="cosy-nav"></nav>

<main class="page">
    <section>
        <div class="curriculum-container">
            <h1 class="sec-h2">{level} - {track_title} ({lang_name})</h1>
            <div id="curriculum-data">Loading curriculum...</div>

            <div style="margin-top: 2rem; text-align: center;">
                <a href="index.html" class="btn-secondary">← {back_label}</a>
            </div>
        </div>
    </section>
</main>

<script src="../../../../js/core/engine.js"></script>
<script src="../../../../js/data/languages.js"></script>
<script src="../../../../js/core/i18n.js"></script>
<script src="../../../../js/core/ui.js"></script>
<script>
const lang = '{lang}';
const type = '{track}';
const level = '{level}';

async function loadCurriculum() {{
    try {{
        const response = await fetch(`${{(window.COSY && typeof window.COSY.getPrefix === "function") ? window.COSY.getPrefix() : "/"}}curriculum/${{lang}}/${{type}}/${{level}}.json`);
        const data = await response.json();
        render(data);
    }} catch (e) {{
        document.getElementById('curriculum-data').innerHTML = 'Error loading curriculum data.';
    }}
}}

function render(data) {{
    const container = document.getElementById('curriculum-data');
    if (!data.units || data.units.length === 0) {{
        container.innerHTML = '<p>No units found for this level.</p>';
        return;
    }}
    let html = '';
    data.units.forEach(unit => {{
        const cleanUnitTitle = (unit.title || '').replace(/^Unit\\s+\\d+:\\s*/i, '').replace(/^Unité\\s+\\d+:\\s*/i, '');
        html += `<div class="unit-block">
            <h2 class="unit-title">Unit ${{unit.unit}}: ${{cleanUnitTitle}}</h2>`;
        unit.lessons.forEach(lesson => {{
            const grammarStr = Array.isArray(lesson.grammar) ? lesson.grammar.join(', ') : (lesson.grammar || '');
            const vocabStr = Array.isArray(lesson.vocabulary) ? lesson.vocabulary.join(', ') : (lesson.vocabulary || '');
            const recycledStr = lesson.recycled || '';
            const teacherNotes = lesson.teacher_notes ? lesson.teacher_notes.replace(/\\n/g, '<br>') : '';
            html += `<div class="lesson-card">
                <div class="lc-title">Lesson ${{lesson.lesson}}: ${{lesson.title}}</div>
                ${{grammarStr ? `<div class="lc-meta"><strong>Grammar:</strong> ${{grammarStr}}</div>` : ''}}
                ${{vocabStr ? `<div class="lc-meta"><strong>Vocabulary:</strong> ${{vocabStr}}</div>` : ''}}
                ${{recycledStr ? `<div class="lc-meta lc-recycled" style="margin-top: 0.4rem; padding: 0.4rem 0.6rem; background: rgba(28, 143, 86, 0.1); border-left: 3px solid var(--role-verb, #1c8f56); border-radius: 4px;"><strong>🔄 Applied Prior Knowledge:</strong> ${{recycledStr}}</div>` : ''}}
                ${{teacherNotes ? `<div class="lc-content" style="margin-top: 0.5rem;">${{teacherNotes}}</div>` : ''}}
            </div>`;
        }});
        html += '</div>';
    }});
    container.innerHTML = html;
}}
loadCurriculum();
</script>

</body>
</html>
"""
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        wired_count += 1

    print(f"Total HTML files wired: {wired_count}")

if __name__ == "__main__":
    wire_html_files()

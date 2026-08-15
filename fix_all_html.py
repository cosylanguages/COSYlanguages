import re
import os
import glob

BASE_DIR = "apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/fr"

# Let's inspect generate_song_data.py notes dicts and ensure they are pristine HTML strings
from generate_song_data import SONG_DATA

# Clean up SONG_DATA notes if needed
CLEAN_SONG_DATA = {}

for key, song_info in SONG_DATA.items():
    cleaned_notes = []
    for wrong, right, note in song_info['notes']:
        # Ensure right HTML does not contain nested tags or arrows
        clean_wrong = wrong.strip()
        clean_right = right.strip()
        clean_note = note.strip()
        cleaned_notes.append((clean_wrong, clean_right, clean_note))

    CLEAN_SONG_DATA[key] = {
        'r1': song_info['r1'],
        'r2': song_info['r2'],
        'notes': cleaned_notes
    }

def format_r1_html(r1_tuples):
    items = []
    for main_q, star_q in r1_tuples:
        item = (
            f'<div class="round-item">'
            f'<div class="round-item-main">{main_q}</div>\n'
            f'<div class="round-item-personal">{star_q}</div>'
            f'</div>'
        )
        items.append(item)
    return "\n".join(items)

def format_r2_html(r2_list):
    items = []
    for stmt in r2_list:
        item = (
            f'<div class="round-item">'
            f'<div class="round-item-main">{stmt}</div>'
            f'</div>'
        )
        items.append(item)
    return "\n".join(items)

def format_notes_html(notes_list):
    items = []
    for wrong, right, text in notes_list:
        item_html = (
            f'          <div class="mistake-item">\n'
            f'            {wrong}\n'
            f'            <span class="mistake-arrow">→</span>\n'
            f'            {right}\n'
            f'            <span class="mistake-note-text">{text}</span>\n'
            f'          </div>'
        )
        items.append(item_html)
    return "\n".join(items)

def fix_standalone(rel_path, song_info):
    full_path = os.path.join(BASE_DIR, rel_path)
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Reconstruct Stage 4 Discussion cleanly
    r1_html = format_r1_html(song_info['r1'])
    r2_html = format_r2_html(song_info['r2'])

    # Find Stage 4 discussion block
    # We want exact replacement of Stage 4 round-body content
    new_disc_body = (
        f'        <div class="round-1" style="margin-bottom: 2rem;">\n'
        f'          <h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>\n'
        f'{r1_html}\n'
        f'        </div>\n'
        f'        <div class="round-2" style="margin-top: 2rem;">\n'
        f'          <h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>\n'
        f'{r2_html}\n'
        f'        </div>'
    )

    disc_pattern = r'<div class="round-1"[^>]*>.*?</div>\s*</div>\s*</div>\s*</div>\s*</div>'
    # Match from <div class="round-1" up to closing of round-body
    disc_regex = re.compile(r'<div class="round-1".*?</div>\s*</div>\s*</div>\s*(?=<div class="round-block")', re.DOTALL)

    if disc_regex.search(content):
        content = disc_regex.sub(new_disc_body + '\n      </div>\n    </div>\n\n    ', content)
    else:
        # Fallback pattern if needed
        disc_regex_2 = re.compile(r'<div class="round-1".*?(?=\s*<div class="round-block open" id="lang-focus")', re.DOTALL)
        content = disc_regex_2.sub(new_disc_body + '\n      </div>\n    </div>\n\n    ', content)

    # Reconstruct Teacher's Notes cleanly
    notes_html = format_notes_html(song_info['notes'])
    notes_regex = re.compile(r'<div class="mistake-body"[^>]*>.*?</div>\s*</div>', re.DOTALL)

    new_notes_block = (
        f'<div class="mistake-body" style="display:block;">\n'
        f'{notes_html}\n'
        f'      </div>\n'
        f'    </div>'
    )

    content = notes_regex.sub(new_notes_block, content)

    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed standalone: {rel_path}")

# Run fix on all standalone files
for rel_path, song_info in CLEAN_SONG_DATA.items():
    fix_standalone(rel_path, song_info)

import re
import os

filepath = "events/karaoke-club.html"
if not os.path.exists(filepath):
    print("Error: events/karaoke-club.html not found.")
    exit(1)

with open(filepath, "r", encoding="utf-8") as f:
    html = f.read()

def extract_sessions(content_html):
    blocks = []
    matches = list(re.finditer(r'(<!--\s*\d+\..*?-->)', content_html))
    for match in matches:
        start_comment = match.start()
        end_comment = match.end()
        div_start_match = re.search(r'<div\b[^>]*class="history-session"[^>]*>', content_html[end_comment:])
        if not div_start_match:
            continue

        div_start_idx = end_comment + div_start_match.start()
        depth = 0
        idx = div_start_idx
        tag_pattern = re.compile(r'<(/?div\b[^>]*)>')
        while True:
            tag_match = tag_pattern.search(content_html, idx)
            if not tag_match:
                break
            tag_text = tag_match.group(1)
            if tag_text.startswith('/'):
                depth -= 1
            else:
                if not tag_text.endswith('/'):
                    depth += 1

            idx = tag_match.end()
            if depth == 0:
                session_block = content_html[start_comment:idx]
                blocks.append(session_block)
                break
    return blocks

sessions = extract_sessions(html)
print(f"Parsed {len(sessions)} sessions.")

challenges = []
standalone = []

for sess in sessions:
    if "Challenge" in sess:
        challenges.append(sess)
    else:
        standalone.append(sess)

print(f"Found {len(challenges)} challenges and {len(standalone)} standalone sessions.")

# Build the new HTML layout for the past sessions
pinned_html = """          <!-- 📌 PINNED ARTIST CHALLENGES -->
          <div class="pinned-challenges-section" style="margin-bottom: 3.5rem; background: rgba(74, 21, 75, 0.03); border: 2px dashed #4A154B; border-radius: 28px; padding: 2rem;">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif; font-size: 1.5rem; display: flex; align-items: center; gap: 0.75rem; color: #4A154B;">
              <span>📌</span> Pinned Artist Challenges (90 min)
            </h3>
            <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
""" + "\n".join(challenges) + """
            </div>
          </div>

          <!-- 🎵 STANDALONE SONG SESSIONS -->
          <h3 style="font-size: 1.5rem; margin-top: 3rem; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif; color: var(--ink);">
            🎵 Standalone Song Sessions (60 min)
          </h3>
""" + "\n".join(standalone)

# Find start of history-body div
start_tag = '<div class="history-body" style="display: block; padding: 0; border: none;">'
start_idx = html.find(start_tag)
if start_idx == -1:
    print("Error: history-body div not found.")
    exit(1)

# Find matching closing </div> for history-body
depth = 1
idx = start_idx + len(start_tag)
tag_pattern = re.compile(r'<(/?div\b[^>]*)>')
closing_div_idx = -1
while True:
    tag_match = tag_pattern.search(html, idx)
    if not tag_match:
        break
    tag_text = tag_match.group(1)
    if tag_text.startswith('/'):
        depth -= 1
    else:
        if not tag_text.endswith('/'):
            depth += 1

    idx = tag_match.end()
    if depth == 0:
        closing_div_idx = tag_match.start()
        break

if closing_div_idx == -1:
    print("Error: closing div of history-body not found.")
    exit(1)

# Rebuild the file content
new_html = html[:start_idx + len(start_tag)] + "\n" + pinned_html + "\n          " + html[closing_div_idx:]

with open(filepath, "w", encoding="utf-8") as f:
    f.write(new_html)

print("Successfully pinned challenges on events/karaoke-club.html!")

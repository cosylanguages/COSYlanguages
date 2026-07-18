import re
import os

filepath = "events/karaoke-club.html"
if not os.path.exists(filepath):
    print("Error: events/karaoke-club.html not found.")
    exit(1)

with open(filepath, "r", encoding="utf-8") as f:
    html = f.read()

# Let's extract all session blocks using a robust regex.
# A session block starts with <!-- \d+\. ... -->, then <div class="history-session", then has some content, and ends with </div>
pattern = r'(<!--\s*\d+\.\s*.*?\s*-->\s*<div class="history-session"[^>]*>.*?</div>)'
sessions = re.findall(pattern, html, re.DOTALL)

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

# Now, we want to replace the old history-body content with our pinned and standalone sections.
# Find the start of the <div class="history-body"...> and replace all of its children up to before the closing </div> of history-body.
start_idx = html.find('<div class="history-body" style="display: block; padding: 0; border: none;">')
if start_idx == -1:
    print("Error: history-body div not found.")
    exit(1)

# Find the end tag of history-body by finding the matching closing </div>
# The list of sessions was directly inside <div class="history-body">...</div>.
# Let's search for the last </a>\s*</div> of the last session, and then the next </div> is the closing </div> of history-body.
last_session = sessions[-1]
last_session_idx = html.find(last_session)
if last_session_idx == -1:
    print("Error: last session not found in HTML.")
    exit(1)

end_of_sessions = last_session_idx + len(last_session)
# Find the closing </div> for history-body immediately after end_of_sessions
closing_div_match = re.search(r'\s*</div>', html[end_of_sessions:])
if not closing_div_match:
    print("Error: closing div of history-body not found.")
    exit(1)

closing_div_idx = end_of_sessions + closing_div_match.end()

# Rebuild the file content
new_html = html[:start_idx + len('<div class="history-body" style="display: block; padding: 0; border: none;">\n')] + pinned_html + html[closing_div_idx - 6:]

with open(filepath, "w", encoding="utf-8") as f:
    f.write(new_html)

print("Successfully pinned challenges on events/karaoke-club.html!")

import os
import re

songs_on_disk = sorted([f for f in os.listdir('events/sessions/karaoke-club') if not f.endswith('-challenge.html') and f != 'template-karaoke.html' and f.endswith('.html')])
challenges_on_disk = sorted([f for f in os.listdir('events/sessions/karaoke-club') if f.endswith('-challenge.html')])

with open('events/karaoke-club.html') as f:
    overview_html = f.read()

overview_links = set(re.findall(r'href=\"sessions/karaoke-club/([^\"]+)\"', overview_html))

# Build index page duration mappings
# Find each a tag with href to a session, and look backwards for the duration or metadata
# A robust way: find all history-session card HTML blocks on the page
cards_raw = re.findall(r'<div class=\"history-session\"[^>]*>.*?</div>\s*</div>', overview_html, re.DOTALL)
duration_map = {}
for card in cards_raw:
    # Find href
    href_m = re.search(r'href=\"sessions/karaoke-club/([^\"]+)\"', card)
    if href_m:
        href = href_m.group(1)
        # Find B1/B2/A2 etc. inside <span class="club-tag"...> or similar
        # Find duration: standard cards don't have duration in the parent cards except in text or maybe challenge pages say (90 min)
        # Wait, does events/karaoke-club.html mention duration for cards? Let's check.
        pass

# Let's check some cards in events/karaoke-club.html to see where duration is mentioned
print("Overview card count extracted:", len(cards_raw))

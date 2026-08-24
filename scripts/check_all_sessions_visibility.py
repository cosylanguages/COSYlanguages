import os, json

with open('events/data/sessions.json', encoding='utf-8') as f:
    catalog = json.load(f)

catalog_hrefs = set()
for s in catalog:
    href = s.get('href', '')
    norm = os.path.normpath(href.replace('../', ''))
    catalog_hrefs.add(norm)

print(f"1. Catalog in events/data/sessions.json contains {len(catalog)} sessions.")

# Scan disk for all session HTML files
disk_files = []
search_dirs = [
    'apps/premium-events/clubs',
    'apps/premium-events/nights',
    'events/sessions'
]

for sdir in search_dirs:
    for root, dirs, files in os.walk(sdir):
        for file in files:
            if file.endswith('.html') and 'sessions' in root.split(os.sep):
                path = os.path.normpath(os.path.join(root, file))
                disk_files.append(path)

print(f"2. Found {len(disk_files)} session HTML files on disk.")

missing_from_json = [f for f in disk_files if f not in catalog_hrefs]
print(f"3. Session HTML files on disk NOT in sessions.json: {len(missing_from_json)}")
for m in sorted(missing_from_json):
    print("   MISSING IN JSON:", m)

# Now check Hub HTML files for visibility of sessions
hubs = [
    'apps/premium-events/clubs/kus/keeping-up-with-science.html',
    'apps/premium-events/clubs/celebrate/lets-celebrate.html',
    'apps/premium-events/clubs/quotes/the-greatest-quotes.html',
    'apps/premium-events/clubs/debate/debatable-relatable.html',
    'apps/premium-events/clubs/life/my-life-with-without.html',
    'apps/premium-events/clubs/mind/mind-matters.html',
    'apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html',
    'apps/premium-events/clubs/if-you-were/if-you-were.html',
    'events/cinema-club.html',
    'events/mind-matters.html',
    'events/speaking-clubs.html',
    'events/index.html'
]

print("\n4. Checking visibility across main hub files...")
hub_contents = {}
for h in hubs:
    if os.path.exists(h):
        with open(h, encoding='utf-8') as f:
            hub_contents[h] = f.read()

# For each club directory, check if its session files appear in their respective hub
unlinked_in_hub = []
for f in disk_files:
    fname = os.path.basename(f)
    found = False
    for h_path, h_text in hub_contents.items():
        if fname in h_text:
            found = True
            break
    if not found:
        unlinked_in_hub.append(f)

print(f"5. Session HTML files on disk NOT found in ANY hub file (or catalog search): {len(unlinked_in_hub)}")
for u in sorted(unlinked_in_hub):
    print("   UNLINKED IN HUBS:", u)

import os, re
from bs4 import BeautifulSoup

# Map of old/incorrect href fragments to canonical hrefs
link_replacements = {
    "screen-time-kids-development-intermediate.html": "screen-time-kids-8-years-intermediate.html",
    "multilingual-brains-younger-elementary.html": "multilingual-younger-brains-elementary.html",
    "multilingual-brains-younger-intermediate.html": "multilingual-younger-brains-intermediate.html",
    "coffee-drinkers-muscle-hormones-advanced.html": "coffee-fat-muscle-hormones-advanced.html",
    "rewriting-human-family-tree-advanced.html": "human-family-tree-rewrite-advanced.html",
    "chatting-ai-vs-human-elementary.html": "chatting-with-ai-vs-human-elementary.html",
    "chatting-ai-vs-human-intermediate.html": "chatting-with-ai-vs-human-intermediate.html",
    "chatting-ai-vs-human-upper-intermediate.html": "chatting-with-ai-vs-human-intermediate.html",
    "hearing-abilities-intermediate.html": "hearing-abilities-life.html",
    "hearing-abilities-upper-intermediate.html": "hearing-abilities-life.html"
}

files_to_fix = [
    "events/index.html",
    "apps/premium-events/clubs/kus/keeping-up-with-science.html",
    "apps/premium-events/clubs/celebrate/lets-celebrate.html",
    "apps/premium-events/clubs/quotes/the-greatest-quotes.html",
    "apps/premium-events/clubs/debate/debatable-relatable.html",
    "apps/premium-events/clubs/life/my-life-with-without.html",
    "apps/premium-events/clubs/mind/mind-matters.html",
    "events/mind-matters.html",
    "apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html"
]

for filepath in files_to_fix:
    if not os.path.exists(filepath):
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    modified = False
    for old_name, new_name in link_replacements.items():
        if old_name in content:
            content = content.replace(old_name, new_name)
            modified = True
            print(f"Replaced {old_name} -> {new_name} in {filepath}")

    if modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

# Clean up root generator files
root_generators = ["generate_all_15.py", "generate_remaining_sessions.py"]
for rg in root_generators:
    if os.path.exists(rg):
        os.remove(rg)
        print(f"Cleaned up root script {rg}")

print("Hub links fix complete!")

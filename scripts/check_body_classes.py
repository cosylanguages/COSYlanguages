import os
from bs4 import BeautifulSoup

en_dir = "events/sessions/i-couldnt-help-but-wonder/"
files = sorted([f for f in os.listdir(en_dir) if f.endswith(".html") and not f.startswith("template")])

for filename in files:
    filepath = os.path.join(en_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")
    body = soup.find("body")
    body_class = body.get("class") if body else "No body tag"
    print(f"{filename}: {body_class}")

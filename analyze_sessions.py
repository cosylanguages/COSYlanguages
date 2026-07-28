from html.parser import HTMLParser
import glob
import os

class SessionParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_session = False
        self.depth = 0
        self.current_session_data = []
        self.current_tag = None
        self.sessions = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        cls = attrs_dict.get("class", "")

        if "history-session" in cls:
            self.in_session = True
            self.depth = 1
            self.current_session_data = []

        elif self.in_session:
            self.depth += 1
            self.current_tag = tag

    def handle_endtag(self, tag):
        if self.in_session:
            self.depth -= 1
            if self.depth == 0:
                self.in_session = False
                self.sessions.append(self.current_session_data)
            self.current_tag = None

    def handle_data(self, data):
        if self.in_session and data.strip():
            self.current_session_data.append((self.current_tag, data.strip()))

files = [
    "events/keeping-up-with-science.html",
    "events/lets-celebrate.html",
    "events/the-greatest-quotes.html",
    "events/mind-matters.html",
    "events/my-life-with-without.html",
    "events/debatable-relatable.html",
    "events/cinema-club.html",
    "events/karaoke-club.html",
    "events/i-couldnt-help-but-wonder.html"
]

for path in files:
    if os.path.exists(path):
        parser = SessionParser()
        with open(path, "r", encoding="utf-8") as f:
            parser.feed(f.read())
        print(f"\n=================== {path} ===================")
        print(f"Parsed {len(parser.sessions)} sessions")
        if parser.sessions:
            print("First session snippet:")
            for tag, text in parser.sessions[0][:15]:
                print(f"  <{tag}>: {text}")

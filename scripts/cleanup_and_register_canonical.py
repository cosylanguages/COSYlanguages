import os, json, re
from bs4 import BeautifulSoup

# Draft files to remove:
draft_files = [
    'apps/premium-events/clubs/kus/sessions/keeping-up-with-science/screen-time-kids-development-intermediate.html',
    'apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-brains-younger-elementary.html',
    'apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-brains-younger-intermediate.html',
    'apps/premium-events/clubs/kus/sessions/keeping-up-with-science/coffee-drinkers-muscle-hormones-advanced.html',
    'apps/premium-events/clubs/kus/sessions/keeping-up-with-science/rewriting-human-family-tree-advanced.html',
    'apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-elementary.html',
    'apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-intermediate.html',
    'apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-upper-intermediate.html',
    'apps/premium-events/clubs/life/sessions/my-life-with-without/hearing-abilities-intermediate.html',
    'apps/premium-events/clubs/life/sessions/my-life-with-without/hearing-abilities-upper-intermediate.html'
]

for df in draft_files:
    if os.path.exists(df):
        os.remove(df)
        print(f"Removed draft file: {df}")

# Canonical session objects to register in sessions.json:
canonical_sessions = [
    {
        "title": "Scientists Tracked Kids for 8 Years — The Screen Time Result",
        "href": "../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/screen-time-kids-8-years-intermediate.html",
        "level": "intermediate",
        "lang": "en",
        "club": "science",
        "format": "speaking"
    },
    {
        "title": "Kiss and Make Up Day",
        "href": "../apps/premium-events/clubs/celebrate/sessions/lets-celebrate/kiss-and-make-up-day-intermediate.html",
        "level": "intermediate",
        "lang": "en",
        "club": "celebrate",
        "format": "speaking"
    },
    {
        "title": "Dalai Lama: Happier Minds (A2)",
        "href": "../apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dalai-lama-happier-minds-elementary.html",
        "level": "elementary",
        "lang": "en",
        "club": "quotes",
        "format": "speaking"
    },
    {
        "title": "Dalai Lama: Happier Minds (B1)",
        "href": "../apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dalai-lama-happier-minds-intermediate.html",
        "level": "intermediate",
        "lang": "en",
        "club": "quotes",
        "format": "speaking"
    },
    {
        "title": "Chatting with AI vs Chatting with a Human (A2)",
        "href": "../apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-with-ai-vs-human-elementary.html",
        "level": "elementary",
        "lang": "en",
        "club": "debate",
        "format": "speaking"
    },
    {
        "title": "Chatting with AI vs Chatting with a Human (B1-B2)",
        "href": "../apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-with-ai-vs-human-intermediate.html",
        "level": "intermediate",
        "lang": "en",
        "club": "debate",
        "format": "speaking"
    },
    {
        "title": "My Life With & My Life Without Hearing Abilities",
        "href": "../apps/premium-events/clubs/life/sessions/my-life-with-without/hearing-abilities-life.html",
        "level": "intermediate",
        "lang": "en",
        "club": "life",
        "format": "speaking"
    },
    {
        "title": "Why Some Friends Always Try to Correct You",
        "href": "../apps/premium-events/clubs/mind/sessions/mind-matters/why-friends-correct-your-story-intermediate.html",
        "level": "intermediate",
        "lang": "en",
        "club": "mind",
        "format": "speaking"
    },
    {
        "title": "Multilingual People Have Younger Brains (A2)",
        "href": "../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-younger-brains-elementary.html",
        "level": "elementary",
        "lang": "en",
        "club": "science",
        "format": "speaking"
    },
    {
        "title": "Multilingual People Have Younger Brains (B1)",
        "href": "../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-younger-brains-intermediate.html",
        "level": "intermediate",
        "lang": "en",
        "club": "science",
        "format": "speaking"
    },
    {
        "title": "Coffee Drinkers: Fat, Muscle, and Hormones",
        "href": "../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/coffee-fat-muscle-hormones-advanced.html",
        "level": "advanced",
        "lang": "en",
        "club": "science",
        "format": "speaking"
    },
    {
        "title": "Rewriting the Human Family Tree",
        "href": "../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/human-family-tree-rewrite-advanced.html",
        "level": "advanced",
        "lang": "en",
        "club": "science",
        "format": "speaking"
    },
    {
        "title": "Do Bisexuals Have to Choose?",
        "href": "../apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/do-bisexuals-have-to-choose.html",
        "level": "upper-intermediate",
        "lang": "en",
        "club": "wonder",
        "format": "speaking"
    }
]

# Update sessions.json:
with open('events/data/sessions.json', encoding='utf-8') as f:
    existing_sessions = json.load(f)

# Filter out draft hrefs and canonical hrefs to avoid duplication
canonical_hrefs = {s["href"] for s in canonical_sessions}
draft_hrefs = {s["href"].replace("../", "") for s in canonical_sessions}

filtered_sessions = []
for s in existing_sessions:
    if s["href"] not in canonical_hrefs and not any(k in s["href"] for k in ["screen-time-kids-development", "multilingual-brains-younger", "coffee-drinkers-muscle", "rewriting-human-family", "chatting-ai-vs-human", "hearing-abilities-intermediate", "hearing-abilities-upper"]):
        filtered_sessions.append(s)

# Append canonical sessions
filtered_sessions.extend(canonical_sessions)

with open('events/data/sessions.json', 'w', encoding='utf-8') as f:
    json.dump(filtered_sessions, f, indent=2, ensure_ascii=False)

print(f"Updated events/data/sessions.json. Total sessions now: {len(filtered_sessions)}")

import json

new_entries = [
    {
        "title": "Scientists Tracked Kids for 8 Years — Screen Time Result",
        "href": "../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/screen-time-kids-development-intermediate.html",
        "level": "B1",
        "lang": "English",
        "club": "Keeping Up with Science",
        "format": "Speaking Club"
    },
    {
        "title": "Multilingual People Have Younger Brains",
        "href": "../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-brains-younger-elementary.html",
        "level": "A2",
        "lang": "English",
        "club": "Keeping Up with Science",
        "format": "Speaking Club"
    },
    {
        "title": "Multilingual People Have Younger Brains",
        "href": "../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-brains-younger-intermediate.html",
        "level": "B1",
        "lang": "English",
        "club": "Keeping Up with Science",
        "format": "Speaking Club"
    },
    {
        "title": "Coffee Drinkers: Fat, Muscle, and Hormones",
        "href": "../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/coffee-drinkers-muscle-hormones-advanced.html",
        "level": "C1",
        "lang": "English",
        "club": "Keeping Up with Science",
        "format": "Speaking Club"
    },
    {
        "title": "Rewriting the Human Family Tree",
        "href": "../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/rewriting-human-family-tree-advanced.html",
        "level": "C1",
        "lang": "English",
        "club": "Keeping Up with Science",
        "format": "Speaking Club"
    },
    {
        "title": "Kiss and Make Up Day",
        "href": "../apps/premium-events/clubs/celebrate/sessions/lets-celebrate/kiss-and-make-up-day-intermediate.html",
        "level": "B1",
        "lang": "English",
        "club": "Let's Celebrate Club",
        "format": "Speaking Club"
    },
    {
        "title": "Dalai Lama: Happier Minds",
        "href": "../apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dalai-lama-happier-minds-elementary.html",
        "level": "A2",
        "lang": "English",
        "club": "The Greatest Quotes Club",
        "format": "Speaking Club"
    },
    {
        "title": "Dalai Lama: Happier Minds",
        "href": "../apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dalai-lama-happier-minds-intermediate.html",
        "level": "B1",
        "lang": "English",
        "club": "The Greatest Quotes Club",
        "format": "Speaking Club"
    },
    {
        "title": "Chatting with AI vs Chatting with a Human",
        "href": "../apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-elementary.html",
        "level": "A2",
        "lang": "English",
        "club": "Debatable & Relatable Club",
        "format": "Speaking Club"
    },
    {
        "title": "Chatting with AI vs Chatting with a Human",
        "href": "../apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-intermediate.html",
        "level": "B1",
        "lang": "English",
        "club": "Debatable & Relatable Club",
        "format": "Speaking Club"
    },
    {
        "title": "Chatting with AI vs Chatting with a Human",
        "href": "../apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-upper-intermediate.html",
        "level": "B2",
        "lang": "English",
        "club": "Debatable & Relatable Club",
        "format": "Speaking Club"
    },
    {
        "title": "My Life With & My Life Without Hearing Abilities",
        "href": "../apps/premium-events/clubs/life/sessions/my-life-with-without/hearing-abilities-intermediate.html",
        "level": "B1",
        "lang": "English",
        "club": "My Life With & Without",
        "format": "Speaking Club"
    },
    {
        "title": "My Life With & My Life Without Hearing Abilities",
        "href": "../apps/premium-events/clubs/life/sessions/my-life-with-without/hearing-abilities-upper-intermediate.html",
        "level": "B2",
        "lang": "English",
        "club": "My Life With & Without",
        "format": "Speaking Club"
    },
    {
        "title": "Why Some Friends Always Try to Correct You",
        "href": "../apps/premium-events/clubs/mind/sessions/mind-matters/why-friends-correct-your-story-intermediate.html",
        "level": "B1",
        "lang": "English",
        "club": "Mind Matters Club",
        "format": "Speaking Club"
    }
]

with open('events/data/sessions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

existing_hrefs = {item['href'] for item in data}
added_count = 0

for entry in reversed(new_entries):
    if entry['href'] not in existing_hrefs:
        data.insert(0, entry)
        added_count += 1

with open('events/data/sessions.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Added {added_count} entries to events/data/sessions.json. Total count now: {len(data)}")

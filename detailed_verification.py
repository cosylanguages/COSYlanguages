import json
import re
import os

user_topics_raw = [
    "Strict teachers vs friendly teachers — who helps students more?",
    "Learning with a textbook vs learning with videos — which is more effective?",
    "Short lessons vs long lessons — which help you learn better?",
    "Group projects vs individual assignments — which do you prefer?",
    "School uniform vs casual clothes — which is better?",
    "Lots of exams vs very few exams — which is fairer?",
    "Starting school at 7 vs starting school at 5 — which is better for children?",
    "Home-cooked meals vs fast food — which is better?",
    "Three big meals vs many small snacks — which is healthier?",
    "Vegetarian food vs meat — which diet is better?",
    "Tea vs coffee — which is a better drink?",
    "Eating slowly vs eating quickly — which is better for you?",
    "Cooking at home vs ordering food online — which is better?",
    "Team sport vs individual sport — which is better?",
    "Cinema vs theatre — which is a better night out?",
    "Listening to music vs playing an instrument — which is more enjoyable?",
    "Video games vs board games — which are more fun?",
    "Going shopping vs staying home — which is a better weekend?",
    "Cooking vs baking — which is more fun as a hobby?",
    "Going to the gym vs exercising outside — which is better?",
    "Mobile phone vs computer — which is more useful in daily life?",
    "Sending a message vs making a phone call — which is better?",
    "E-book vs paper book — which do you prefer?",
    "Photos on your phone vs printed photos — which is better?",
    "Smart TV vs computer screen — which is better for watching films?",
    "Holiday at the beach vs holiday in the mountains — which is better?",
    "Travelling by train vs travelling by plane — which is better?",
    "Famous city vs small village — which is a more interesting place to visit?",
    "Hotel vs staying with a local family — which do you prefer?",
    "Holiday abroad vs holiday in your own country — which is better?",
    "Hot country vs cold country — which is a better holiday destination?",
    "Many friends vs a few close friends — which is better?",
    "Meeting friends in person vs chatting online — which is more enjoyable?",
    "Celebrating your birthday at home vs going out — which is nicer?",
    "Giving presents vs receiving presents — which do you prefer?",
    "Saving money vs spending money — which is wiser?",
    "Part-time job while studying vs focusing only on school — which is better?",
    "Lots of money vs lots of free time — which is more important?",
    "Working indoors vs working outdoors — which is better?",
    "Putting milk in first vs putting tea in first — which is better?",
    "Monday vs Friday — which day is actually worse?",
    "Waking up five minutes before the alarm vs sleeping until the alarm — which is more annoying?",
    "Cats vs dogs — which animal is secretly the boss of the house?",
    "Being too hot vs being too cold — which is worse?"
]

def normalize(s):
    s = s.lower().strip()
    s = re.sub(r' — .*', '', s) # Remove question part
    s = re.sub(r'[^a-z0-9\s]', '', s) # Remove punctuation
    # Remove common filler verbs
    s = s.replace('learning with a ', '').replace('learning with ', '')
    s = s.replace('starting school at ', '')
    s = s.replace('drinking ', '')
    s = s.replace('playing a ', '').replace('playing an ', '').replace('playing ', '')
    s = s.replace('listening to ', '')
    s = s.replace('going to the ', '').replace('going ', '')
    s = s.replace('taking ', '')
    s = s.replace('travelling by ', '').replace('travelling ', '')
    s = s.replace('visiting a ', '').replace('visiting ', '')
    s = s.replace('staying in a ', '').replace('staying with a ', '').replace('staying ', '')
    s = s.replace('holiday at the ', '').replace('holiday in the ', '').replace('holiday ', '')
    s = s.replace('meeting friends in person', 'meeting friends')
    s = s.replace('chatting online', 'online')
    s = s.replace('celebrating your birthday', 'celebrating birthdays')
    s = s.replace('sending a message', 'message')
    s = s.replace('making a phone call', 'phone call')
    s = s.replace('working part-time', 'part-time')
    s = s.replace('earning a lot of money', 'lots of money')
    s = s.replace('having a few close friends', 'few close friends')
    s = s.replace('having ', '')
    s = s.replace('living ', '')
    s = s.replace('writing on ', 'writing ')
    s = s.replace('typing on a ', 'typing ')
    s = s.replace('photos on your phone', 'photos phone')
    s = s.replace('printed photos', 'printed')

    # Standardize 'vs'
    s = s.replace(' vs ', ' vs ').replace(' vs. ', ' vs ')

    return " ".join(s.split())

en_path = "js/data/germanic/en/elementary/debates.js"
with open(en_path, 'r') as f:
    content = f.read()
    en_topics = re.findall(r'"topic":\s*"(.*?)"', content)

matches = []
missing = []

for ut in user_topics_raw:
    ut_norm = normalize(ut)
    found = False
    for et in en_topics:
        et_norm = normalize(et)
        if ut_norm in et_norm or et_norm in ut_norm:
            matches.append((ut, et))
            found = True
            break
    if not found:
        missing.append(ut)

print(f"Total user topics: {len(user_topics_raw)}")
print(f"Found: {len(matches)}")
print(f"Missing: {len(missing)}")

if missing:
    print("\nMissing topics details:")
    for m in missing:
        print(f"  - {m} (Normalized: {normalize(m)})")

print("\nSample matches:")
for ut, et in matches[:5]:
    print(f"  User: {ut}")
    print(f"  Data: {et}")
    print("-" * 10)

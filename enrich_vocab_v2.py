
import re

def enrich_vocabulary():
    with open('js/data/vocabulary.js', 'r') as f:
        content = f.read()

    emoji_map = {
        "Doctor": "🧑‍⚕️",
        "Engineer": "👷",
        "Artist": "🎨",
        "Pilot": "🧑‍✈️",
        "Chef": "👨‍🍳",
        "Lawyer": "⚖️",
        "Teacher": "🧑‍🏫",
        "Nurse": "👩‍⚕️",
        "Firefighter": "👨‍🚒",
        "Police officer": "👮",
        "Pizza": "🍕",
        "Sushi": "🍣",
        "Burger": "🍔",
        "Pasta": "🍝",
        "Tacos": "🌮",
        "Pancakes": "🥞",
        "Salad": "🥗",
        "Steak": "🥩",
        "Apple": "🍎",
        "Bread": "🍞",
        "Cheese": "🧀",
        "Egg": "🥚",
        "Milk": "🥛",
        "Rice": "🍚",
        "Tomato": "🍅",
        "Potato": "🥔",
        "Carrot": "🥕",
        "Banana": "🍌",
        "Coffee": "☕",
        "Tea": "🍵",
        "Wine": "🍷",
        "Beer": "🍺",
        "Juice": "🧃",
        "Water": "🚰",
        "Milkshake": "🥤",
        "Soda": "🥤",
        "Park": "🌳",
        "School": "🏫",
        "Hospital": "🏥",
        "Cinema": "🎬",
        "Restaurant": "🍴",
        "Library": "📚",
        "Museum": "🏛️",
        "Supermarket": "🛒",
        "Pharmacy": "💊",
        "Airport": "✈️",
        "T-shirt": "👕",
        "Pants": "👖",
        "Dress": "👗",
        "Shoes": "👟",
        "Hat": "👒",
        "Jacket": "🧥",
        "Skirt": "👗",
        "Socks": "🧦",
        "Sweater": "🧶",
        "Scarf": "🧣",
        "Chair": "🪑",
        "Table": "🪑",
        "Bed": "🛏️",
        "Sofa": "🛋️",
        "Lamp": "💡",
        "Desk": "⌨️",
        "Wardrobe": "👗",
        "Shelf": "📚",
        "Mirror": "🪞",
        "Armchair": "🪑",
        "Wake up": "⏰",
        "Brush teeth": "🪥",
        "Shower": "🚿",
        "Breakfast": "🍳",
        "work": "💼",
        "Lunch": "🍱",
        "Dinner": "🍽️",
        "sleep": "😴",
        "Key": "🔑",
        "Phone": "📱",
        "Book": "📖",
        "watch": "⌚",
        "Wallet": "👛",
        "Glasses": "👓",
        "Umbrella": "☂️",
        "Bag": "👜",
        "Laptop": "💻",
        "Pen": "🖊️",
        "Cat": "🐈",
        "Dog": "🐕",
        "Bird": "🐦",
        "Lion": "🦁",
        "Tiger": "🐯",
        "Elephant": "🐘",
        "Monkey": "🐒",
        "Horse": "🐎",
        "Rabbit": "🐇",
        "Fish": "🐟",
        "Drawing": "🎨",
        "Cooking": "👨‍🍳",
        "Reading": "📖",
        "Dancing": "💃",
        "Singing": "🎤",
        "Photography": "📷",
        "Gardening": "🪴",
        "Fishing": "🎣",
        "Sunny": "☀️",
        "Rainy": "🌧️",
        "Snowy": "❄️",
        "Windy": "💨",
        "Cloudy": "☁️",
        "Stormy": "⛈️",
        "Hot": "🔥",
        "Cold": "❄️",
        "Head": "👤",
        "Hand": "✋",
        "Leg": "🦵",
        "Eye": "👁️",
        "Nose": "👃",
        "Mouth": "👄",
        "Ear": "👂",
        "Arm": "💪",
        "Foot": "🦶",
        "Finger": "☝️",
        "Software Developer": "💻",
        "Psychologist": "🧠",
        "Data Scientist": "📊",
        "Philosopher": "🧐",
        "Architect": "🏗️",
        "Journalist": "📰",
        "Algorithm": "💻",
        "Streaming": "📺",
        "Virtual Reality": "🥽",
        "Blockchain": "⛓️",
        "Evolution": "🐒",
        "Quantum Mechanics": "⚛️",
        "Existentialism": "👤",
        "Gravity": "🍎",
        "Democracy": "🗳️",
        "Globalization": "🌍",
        "Sustainability": "🌱",
        "Justice": "⚖️",
        "Climate Change": "🌡️",
        "Biodiversity": "🦋",
        "Pollution": "🏭",
        "Ecosystem": "🌲",
        "University": "🎓",
        "Colleague": "👥",
        "Sustainable": "🌱",
        "Infrastructure": "🏗️",
        "Paradigm shift": "🔄",
        "Remote work": "💻",
        "Global warming": "🌡️",
        "Artificial Intelligence": "🤖",
        "Mental health": "🧠",
        "Local cuisine": "🍜",
        "Smartphone": "📱",
        "Interdisciplinary": "🧪",
        "Commuter": "🚆",
        "Souvenir": "🎁",
        "Volunteer": "🤝",
        "Mother": "👩",
        "Father": "👨",
        "City": "🏙️",
        "Child": "🧒",
        "Leaf": "🍃",
        "Man": "👨",
        "Woman": "👩",
        "Tooth": "🦷",
        "Mouse": "🐭"
    }

    def process_items(lang_code, items_str):
        # Match each object { ... }
        objs = re.findall(r'\{[^{}]*\}', items_str, re.DOTALL)

        # We need EN word list for mapping other languages
        en_match = re.search(r'"en":\s*\[(.*?)\n    \],', content, re.DOTALL)
        en_inner = en_match.group(1)
        en_objs = re.findall(r'\{[^{}]*\}', en_inner, re.DOTALL)
        en_words = []
        for obj in en_objs:
            w_match = re.search(r'"word":\s*"([^"]*)"', obj)
            en_words.append(w_match.group(1) if w_match else None)

        new_objs = []
        for i, obj in enumerate(objs):
            if '"emoji":' in obj:
                new_objs.append(obj)
                continue

            # Map index to EN word
            en_word = en_words[i] if i < len(en_words) else None
            emoji = emoji_map.get(en_word)
            if emoji:
                # Add emoji
                parts = obj.rsplit('}', 1)
                inner = parts[0].rstrip()
                if not inner.endswith(','):
                    inner += ','
                new_obj = inner + f'\n            "emoji": "{emoji}"\n        }}'
                new_objs.append(new_obj)
            else:
                new_objs.append(obj)

        return ",\n        ".join(new_objs)

    # Process each lang block
    new_content = content
    lang_blocks = re.findall(r'("[a-z]{2}":\s*\[(.*?)\n    \])', content, re.DOTALL)
    for full_block, inner in lang_blocks:
        lang_code = re.search(r'"([a-z]{2})"', full_block).group(1)
        processed_inner = process_items(lang_code, inner)
        new_content = new_content.replace(inner, "\n        " + processed_inner)

    with open('js/data/vocabulary.js', 'w') as f:
        f.write(new_content)

enrich_vocabulary()

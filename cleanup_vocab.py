import json
import re

filepath = 'js/data/vocabulary.js'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the JSON array from the window.vocabularyData assignment
match = re.search(r'window\.vocabularyData\s*=\s*(\[.*\]);', content, re.DOTALL)
if not match:
    print("Could not find vocabulary data")
    exit(1)

data = json.loads(match.group(1))

uncountable = {
    "Bread", "Milk", "Water", "Rice", "Pasta", "Coffee", "Tea", "Sugar", "Salt",
    "Cheese", "Meat", "Butter", "Soup", "Juice", "Honey", "Jam", "Cereal",
    "Money", "Music", "Information", "Furniture", "Luggage", "Weather", "Snow", "Rain", "Wind",
    "Love", "Happiness", "Luck", "Time", "Advice", "Knowledge", "Progress"
}

# Specific fixes
special_fixes = {
    "Tacos": ("Taco", "Tacos"),
    "Pancakes": ("Pancake", "Pancakes"),
    "French Fries": ("French Fry", "French Fries"),
    "Clothes": ("Clothes", "Clothes"),
    "Jeans": ("Jeans", "Jeans"),
    "Scissors": ("Scissors", "Scissors"),
    "Glasses": ("Glasses", "Glasses"), # when referring to spectacles
    "Sunglasses": ("Sunglasses", "Sunglasses"),
    "Pants": ("Pants", "Pants"),
    "Shorts": ("Shorts", "Shorts"),
    "Pyjamas": ("Pyjamas", "Pyjamas"),
    "News": ("News", "News"),
    "Series": ("Series", "Series"),
    "Species": ("Species", "Species"),
    "Fish": ("Fish", "Fish"),
    "Fruit": ("Fruit", "Fruit"),
    "Sheep": ("Sheep", "Sheep"),
    "Deer": ("Deer", "Deer"),
}

for item in data:
    word = item.get("word")
    if word in uncountable:
        item["plural"] = word
    elif word in special_fixes:
        singular, plural = special_fixes[word]
        item["word"] = singular
        item["plural"] = plural
    elif item.get("plural") == word + "es" and word.endswith("s") and word in ["Tacos", "Pancakes"]:
        # Handled by special_fixes but just in case
        pass

    # Fix "Tacoses" -> "Tacos" if word is "Taco"
    if item.get("word") == "Taco":
        item["plural"] = "Tacos"
    if item.get("word") == "Pancake":
        item["plural"] = "Pancakes"

    # Common sense check for -ses/-ses
    if item.get("plural", "").endswith("ses") and not item.get("word", "").endswith("s") and not item.get("word", "").endswith("x") and not item.get("word", "").endswith("sh") and not item.get("word", "").endswith("ch"):
         if item["plural"].endswith("eses"):
             # Likely a mistake like Pancakeses
             item["plural"] = item["plural"][:-2]

# Serialize back
new_json = json.dumps(data, indent=4, ensure_ascii=False)
new_content = content[:match.start(1)] + new_json + content[match.end(1):]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Cleanup complete.")

#!/usr/bin/env python3
"""
generate_top200_blog.py
Generates Essential A0-A1 Master Curriculum List blog pages for 13 supported languages.
- English uses curated A0-A1 Nouns, Verbs, Adjectives, and Survival Phrases.
- Target languages (fr, it, ru, el, es, de, pt, hy, ka, tt, ba, br) pull directly from
  vocabulary/{lang}/A1/*.js, displaying native words, monolingual definitions,
  examples, and Latin transliteration for non-Latin scripts (ru, el, hy, ka, tt, ba).
"""

import os
import glob
import json
import subprocess

LANGUAGES = {
    'en': {
        'name': 'English',
        'flag': '🇬🇧',
        'slug': 'english',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning English? Here is the complete, obligatory beginner blueprint: essential nouns across real-life themes, action verbs grouped in antonym pairs and step-by-step evolutions, descriptive adjectives in opposite pairs and intensity scales, and essential conversational survival phrase patterns.'
    },
    'fr': {
        'name': 'French',
        'flag': '🇫🇷',
        'slug': 'french',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning French? Here is the complete beginner blueprint extracted directly from our native A1 curriculum: essential nouns, action verbs, descriptive adjectives, and conversational expressions with monolingual definitions and examples.'
    },
    'it': {
        'name': 'Italian',
        'flag': '🇮🇹',
        'slug': 'italian',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning Italian? Here is the complete beginner blueprint: essential nouns, action verbs, adjectives, and conversational phrase patterns with monolingual Italian definitions.'
    },
    'ru': {
        'name': 'Russian',
        'flag': '🇷🇺',
        'slug': 'russian',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning Russian? Here is the complete beginner blueprint in Cyrillic with Latin transliterations: essential nouns, action verbs, adjectives, and expressions with monolingual definitions.'
    },
    'el': {
        'name': 'Greek',
        'flag': '🇬🇷',
        'slug': 'greek',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning Greek? Here is the complete beginner blueprint in Greek script with Latin transliterations: essential nouns, action verbs, adjectives, and everyday expressions.'
    },
    'es': {
        'name': 'Spanish',
        'flag': '🇪🇸',
        'slug': 'spanish',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning Spanish? Here is the complete beginner blueprint: essential nouns, action verbs, descriptive adjectives, and conversational phrase patterns.'
    },
    'de': {
        'name': 'German',
        'flag': '🇩🇪',
        'slug': 'german',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning German? Here is the complete beginner blueprint: essential nouns, action verbs, adjectives, and conversational phrase patterns.'
    },
    'pt': {
        'name': 'Portuguese',
        'flag': '🇵🇹',
        'slug': 'portuguese',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning Portuguese? Here is the complete beginner blueprint: essential nouns, action verbs, adjectives, and conversational phrase patterns.'
    },
    'hy': {
        'name': 'Armenian',
        'flag': '🇦🇲',
        'slug': 'armenian',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning Armenian? Here is the complete beginner blueprint in Armenian script with Latin transliterations: essential nouns, action verbs, adjectives, and everyday expressions.'
    },
    'ka': {
        'name': 'Georgian',
        'flag': '🇬🇪',
        'slug': 'georgian',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning Georgian? Here is the complete beginner blueprint in Mkhedruli script with Latin transliterations: essential nouns, action verbs, adjectives, and conversational expressions.'
    },
    'tt': {
        'name': 'Tatar',
        'flag': '⬜',
        'slug': 'tatar',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning Tatar? Here is the complete beginner blueprint in Tatar script with Latin transliterations: essential nouns, action verbs, adjectives, and expressions.'
    },
    'ba': {
        'name': 'Bashkir',
        'flag': '⬜',
        'slug': 'bashkir',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning Bashkir? Here is the complete beginner blueprint in Bashkir script with Latin transliterations: essential nouns, action verbs, adjectives, and expressions.'
    },
    'br': {
        'name': 'Breton',
        'flag': '🏴‍☠️',
        'slug': 'breton',
        'sub': 'A0–A1 Master Curriculum',
        'intro': 'Planning to start learning Breton? Here is the complete beginner blueprint: essential nouns, action verbs, adjectives, and conversational phrase patterns.'
    }
}

# Curated Master English Data
EN_DATA = {
    'nouns': [
        # Evolution sequences
        {"theme": "Time Evolution", "type": "seq", "items": ["Morning", "Afternoon", "Evening", "Night"], "ex": "Morning ➔ Afternoon ➔ Evening ➔ Night"},
        {"theme": "Life Progression", "type": "seq", "items": ["Baby", "Child", "Teenager", "Adult"], "ex": "Baby ➔ Child ➔ Teenager ➔ Adult"},
        {"theme": "Education Journey", "type": "seq", "items": ["School", "University", "Workplace"], "ex": "School ➔ University ➔ Workplace"},
        {"theme": "Meal Progression", "type": "seq", "items": ["Breakfast", "Lunch", "Snack", "Dinner"], "ex": "Breakfast ➔ Lunch ➔ Dinner"},
        {"theme": "Seasons Evolution", "type": "seq", "items": ["Spring", "Summer", "Autumn", "Winter"], "ex": "Spring ➔ Summer ➔ Autumn ➔ Winter"},
        {"theme": "Days Sequence", "type": "seq", "items": ["Yesterday", "Today", "Tonight", "Tomorrow"], "ex": "Yesterday ➔ Today ➔ Tomorrow"},
        {"theme": "Building Progression", "type": "seq", "items": ["Door", "Hallway", "Room"], "ex": "Door ➔ Hallway ➔ Room"},
        {"theme": "Travel Journey", "type": "seq", "items": ["Ticket", "Station", "Train"], "ex": "Ticket ➔ Station ➔ Train"},
        {"theme": "Culinary Progression", "type": "seq", "items": ["Recipe", "Kitchen", "Dish"], "ex": "Recipe ➔ Kitchen ➔ Dish"},
        {"theme": "Weather Sequence", "type": "seq", "items": ["Cloud", "Rain", "Puddle", "Rainbow"], "ex": "Cloud ➔ Rain ➔ Rainbow"},
        # Opposite Pairs
        {"theme": "People & Family", "type": "pair", "items": ["Mother", "Father"], "ex": "I love my mother and my father."},
        {"theme": "People & Family", "type": "pair", "items": ["Son", "Daughter"], "ex": "They have a son and a daughter."},
        {"theme": "People & Family", "type": "pair", "items": ["Brother", "Sister"], "ex": "My brother and sister are here."},
        {"theme": "People & Family", "type": "pair", "items": ["Grandfather", "Grandmother"], "ex": "Grandfather and grandmother live nearby."},
        {"theme": "People & Family", "type": "pair", "items": ["Uncle", "Aunt"], "ex": "My uncle and aunt visited us."},
        {"theme": "People & Family", "type": "pair", "items": ["Husband", "Wife"], "ex": "Husband and wife walked together."},
        {"theme": "People & Family", "type": "pair", "items": ["Friend", "Enemy"], "ex": "Choose a friend, avoid an enemy."},
        {"theme": "People & Family", "type": "pair", "items": ["Man", "Woman"], "ex": "A man and a woman in the room."},
        {"theme": "People & Family", "type": "pair", "items": ["Boy", "Girl"], "ex": "The boy and girl play outside."},
        {"theme": "Home & Objects", "type": "pair", "items": ["House", "Street"], "ex": "Welcome to my house on this street."},
        {"theme": "Home & Objects", "type": "pair", "items": ["Room", "Garden"], "ex": "The room opens to the garden."},
        {"theme": "Home & Objects", "type": "pair", "items": ["Table", "Floor"], "ex": "Put the book on the table, not floor."},
        {"theme": "Home & Objects", "type": "pair", "items": ["Chair", "Bed"], "ex": "Sit on the chair, sleep on the bed."},
        {"theme": "Home & Objects", "type": "pair", "items": ["Door", "Window"], "ex": "Open the door and close the window."},
        {"theme": "Home & Objects", "type": "pair", "items": ["Ceiling", "Floor"], "ex": "Light above on ceiling, rug on floor."},
        {"theme": "Home & Objects", "type": "pair", "items": ["Key", "Lock"], "ex": "Turn key in the lock."},
        {"theme": "Home & Objects", "type": "pair", "items": ["Bag", "Box"], "ex": "Unpack the bag and open the box."},
        {"theme": "Home & Objects", "type": "pair", "items": ["Cup", "Glass"], "ex": "A cup of tea and glass of water."},
        {"theme": "Home & Objects", "type": "pair", "items": ["Plate", "Bowl"], "ex": "A dinner plate and soup bowl."},
        {"theme": "Food & Drink", "type": "pair", "items": ["Tea", "Coffee"], "ex": "Do you prefer tea or coffee?"},
        {"theme": "Food & Drink", "type": "pair", "items": ["Water", "Juice"], "ex": "Fresh water and orange juice."},
        {"theme": "Food & Drink", "type": "pair", "items": ["Bread", "Butter"], "ex": "Bread with warm butter."},
        {"theme": "Food & Drink", "type": "pair", "items": ["Meat", "Fish"], "ex": "Meat and fresh fish available."},
        {"theme": "Food & Drink", "type": "pair", "items": ["Fruit", "Vegetable"], "ex": "Eat more fruit and fresh vegetables."},
        {"theme": "Food & Drink", "type": "pair", "items": ["Apple", "Banana"], "ex": "An apple and a yellow banana."},
        {"theme": "Food & Drink", "type": "pair", "items": ["Sugar", "Salt"], "ex": "Sweet sugar and savory salt."},
        {"theme": "Food & Drink", "type": "pair", "items": ["Breakfast", "Dinner"], "ex": "Hearty breakfast and light dinner."},
        {"theme": "Food & Drink", "type": "pair", "items": ["Soup", "Salad"], "ex": "Hot soup and fresh green salad."},
        {"theme": "Food & Drink", "type": "pair", "items": ["Milk", "Cheese"], "ex": "Cold milk and organic cheese."},
        {"theme": "City & Places", "type": "pair", "items": ["City", "Village"], "ex": "A bustling city and calm village."},
        {"theme": "City & Places", "type": "pair", "items": ["School", "Hospital"], "ex": "The school is near the hospital."},
        {"theme": "City & Places", "type": "pair", "items": ["Store", "Market"], "ex": "Buy at store or local market."},
        {"theme": "City & Places", "type": "pair", "items": ["Park", "Square"], "ex": "Walk in park and visit town square."},
        {"theme": "City & Places", "type": "pair", "items": ["Airport", "Station"], "ex": "Arrive at airport or train station."},
        {"theme": "City & Places", "type": "pair", "items": ["Hotel", "Restaurant"], "ex": "Stay at hotel, eat at restaurant."},
        {"theme": "City & Places", "type": "pair", "items": ["Library", "Museum"], "ex": "Books in library, art in museum."},
        {"theme": "City & Places", "type": "pair", "items": ["Bank", "Post Office"], "ex": "Money at bank, letters at post office."},
        {"theme": "City & Places", "type": "pair", "items": ["Bridge", "River"], "ex": "Cross the bridge over the river."},
        {"theme": "City & Places", "type": "pair", "items": ["Sea", "Mountain"], "ex": "Vacation at sea or in mountain."},
        {"theme": "Nature & World", "type": "pair", "items": ["Sun", "Moon"], "ex": "Sun by day, moon by night."},
        {"theme": "Nature & World", "type": "pair", "items": ["Sky", "Earth"], "ex": "Blue sky above green earth."},
        {"theme": "Nature & World", "type": "pair", "items": ["Tree", "Flower"], "ex": "Tall tree and colorful flower."},
        {"theme": "Nature & World", "type": "pair", "items": ["Forest", "Field"], "ex": "Green forest and open field."},
        {"theme": "Nature & World", "type": "pair", "items": ["Dog", "Cat"], "ex": "Friendly dog and playful cat."},
        {"theme": "Nature & World", "type": "pair", "items": ["Bird", "Fish"], "ex": "Bird in sky, fish in water."},
        {"theme": "Nature & World", "type": "pair", "items": ["Horse", "Cow"], "ex": "A fast horse and calm cow."},
        {"theme": "Nature & World", "type": "pair", "items": ["Rain", "Snow"], "ex": "Spring rain and winter snow."},
        {"theme": "Nature & World", "type": "pair", "items": ["Wind", "Storm"], "ex": "Gentle wind turning into storm."},
        {"theme": "Nature & World", "type": "pair", "items": ["Star", "Planet"], "ex": "Bright star and blue planet."},
        {"theme": "Body & Health", "type": "pair", "items": ["Head", "Heart"], "ex": "Think with head, feel with heart."},
        {"theme": "Body & Health", "type": "pair", "items": ["Hand", "Foot"], "ex": "Left hand and right foot."},
        {"theme": "Body & Health", "type": "pair", "items": ["Eye", "Ear"], "ex": "See with eye, hear with ear."},
        {"theme": "Body & Health", "type": "pair", "items": ["Mouth", "Nose"], "ex": "Speak with mouth, breathe with nose."},
        {"theme": "Body & Health", "type": "pair", "items": ["Arm", "Leg"], "ex": "Strong arm and long leg."},
        {"theme": "Work & Tech", "type": "pair", "items": ["Work", "Rest"], "ex": "Balance hard work and rest."},
        {"theme": "Work & Tech", "type": "pair", "items": ["Phone", "Computer"], "ex": "Call on phone, write on computer."},
        {"theme": "Work & Tech", "type": "pair", "items": ["Paper", "Pen"], "ex": "Write on paper with blue pen."},
        {"theme": "Work & Tech", "type": "pair", "items": ["Question", "Answer"], "ex": "Ask a question, get an answer."},
        {"theme": "Work & Tech", "type": "pair", "items": ["Problem", "Solution"], "ex": "Find a solution to every problem."}
    ],
    'verbs': [
        # Action sequences
        {"theme": "Morning Routine", "type": "seq", "items": ["Wake up", "Get up", "Brush teeth", "Eat breakfast"], "ex": "Wake up ➔ Get up ➔ Brush teeth ➔ Eat breakfast"},
        {"theme": "Study Cycle", "type": "seq", "items": ["Open book", "Read chapter", "Write notes", "Understand concept"], "ex": "Open book ➔ Read chapter ➔ Write notes"},
        {"theme": "Travel Process", "type": "seq", "items": ["Pack bag", "Leave house", "Board train", "Arrive"], "ex": "Pack bag ➔ Board train ➔ Arrive"},
        {"theme": "Cooking Steps", "type": "seq", "items": ["Wash food", "Cut ingredients", "Cook meal", "Serve dish"], "ex": "Wash food ➔ Cut ingredients ➔ Cook meal"},
        {"theme": "Communication Flow", "type": "seq", "items": ["Think thought", "Speak message", "Listen response", "Reply back"], "ex": "Speak message ➔ Listen response ➔ Reply"},
        {"theme": "Shopping Flow", "type": "seq", "items": ["Choose item", "Pay money", "Take receipt", "Use product"], "ex": "Choose item ➔ Pay money ➔ Take receipt"},
        {"theme": "Work Cycle", "type": "seq", "items": ["Plan task", "Start work", "Check progress", "Finish project"], "ex": "Plan task ➔ Start work ➔ Finish project"},
        {"theme": "Evening Routine", "type": "seq", "items": ["Return home", "Eat dinner", "Relax mind", "Sleep deep"], "ex": "Return home ➔ Eat dinner ➔ Sleep deep"},
        {"theme": "Problem Solving", "type": "seq", "items": ["Notice issue", "Ask help", "Find answer", "Solve problem"], "ex": "Notice issue ➔ Ask help ➔ Solve problem"},
        {"theme": "Fitness Sequence", "type": "seq", "items": ["Warm up", "Run fast", "Drink water", "Rest body"], "ex": "Warm up ➔ Run fast ➔ Drink water"},
        # Opposite Pairs
        {"theme": "Core Actions", "type": "pair", "items": ["Start", "Finish"], "ex": "We start at 9:00 and finish at 10:00."},
        {"theme": "Core Actions", "type": "pair", "items": ["Open", "Close"], "ex": "Open the door then close it."},
        {"theme": "Core Actions", "type": "pair", "items": ["Buy", "Sell"], "ex": "Buy fresh apples, sell old cars."},
        {"theme": "Core Actions", "type": "pair", "items": ["Come", "Go"], "ex": "Come inside before you go out."},
        {"theme": "Core Actions", "type": "pair", "items": ["Ask", "Answer"], "ex": "Ask questions and answer clearly."},
        {"theme": "Core Actions", "type": "pair", "items": ["Give", "Take"], "ex": "Give help and take advice."},
        {"theme": "Core Actions", "type": "pair", "items": ["Push", "Pull"], "ex": "Push the door or pull it open."},
        {"theme": "Core Actions", "type": "pair", "items": ["Love", "Hate"], "ex": "Love learning, hate waiting."},
        {"theme": "Core Actions", "type": "pair", "items": ["Remember", "Forget"], "ex": "Remember rules, forget mistakes."},
        {"theme": "Core Actions", "type": "pair", "items": ["Win", "Lose"], "ex": "Win fairly, lose with grace."},
        {"theme": "Movement", "type": "pair", "items": ["Arrive", "Depart"], "ex": "Trains arrive and depart on time."},
        {"theme": "Movement", "type": "pair", "items": ["Enter", "Exit"], "ex": "Enter building, exit through garden."},
        {"theme": "Movement", "type": "pair", "items": ["Go up", "Go down"], "ex": "Go up the stairs, go down the hill."},
        {"theme": "Movement", "type": "pair", "items": ["Fly", "Land"], "ex": "Planes fly high and land safely."},
        {"theme": "Movement", "type": "pair", "items": ["Run", "Walk"], "ex": "Run fast or walk slowly."},
        {"theme": "Movement", "type": "pair", "items": ["Stand", "Sit"], "ex": "Stand up or sit down."},
        {"theme": "Movement", "type": "pair", "items": ["Lead", "Follow"], "ex": "Lead the team or follow guide."},
        {"theme": "Movement", "type": "pair", "items": ["Bring", "Take away"], "ex": "Bring food, take away trash."},
        {"theme": "Movement", "type": "pair", "items": ["Go forward", "Go back"], "ex": "Go forward two steps, go back one step."},
        {"theme": "Movement", "type": "pair", "items": ["Catch", "Throw"], "ex": "Throw ball, catch it fast."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Teach", "Learn"], "ex": "Teachers teach, students learn."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Speak", "Listen"], "ex": "Speak clearly, listen carefully."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Read", "Write"], "ex": "Read books, write essays."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Agree", "Disagree"], "ex": "Agree on plan, disagree on details."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Speak well", "Speak ill"], "ex": "Speak well of others."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Understand", "Not understand"], "ex": "I understand the lesson now."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Show", "Hide"], "ex": "Show results, hide secret."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Say yes", "Say no"], "ex": "Say yes to opportunities."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Keep promise", "Break promise"], "ex": "Always keep your promise."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Shout", "Whisper"], "ex": "Shout outside, whisper in library."},
        {"theme": "Life & State", "type": "pair", "items": ["Live", "Die"], "ex": "Plants live in sun, die in dark."},
        {"theme": "Life & State", "type": "pair", "items": ["Create", "Destroy"], "ex": "Create art, do not destroy nature."},
        {"theme": "Life & State", "type": "pair", "items": ["Build", "Break"], "ex": "Build a house, break bad habits."},
        {"theme": "Life & State", "type": "pair", "items": ["Save", "Waste"], "ex": "Save money, don't waste time."},
        {"theme": "Life & State", "type": "pair", "items": ["Help", "Hurt"], "ex": "Help friends, hurt no one."},
        {"theme": "Life & State", "type": "pair", "items": ["Protect", "Attack"], "ex": "Protect peace, avoid attack."},
        {"theme": "Life & State", "type": "pair", "items": ["Allow", "Not allow"], "ex": "Allow entry, do not allow smoking."},
        {"theme": "Life & State", "type": "pair", "items": ["Find", "Lose"], "ex": "Find keys, lose worries."},
        {"theme": "Life & State", "type": "pair", "items": ["Connect", "Disconnect"], "ex": "Connect Wi-Fi, disconnect cable."},
        {"theme": "Life & State", "type": "pair", "items": ["Increase", "Decrease"], "ex": "Increase speed, decrease sound."}
    ],
    'adjectives': [
        # Intensity progression scales
        {"theme": "Temperature Scale", "type": "seq", "items": ["Freezing", "Cold", "Warm", "Hot"], "ex": "Freezing ➔ Cold ➔ Warm ➔ Hot"},
        {"theme": "Size Progression", "type": "seq", "items": ["Tiny", "Small", "Large", "Huge"], "ex": "Tiny ➔ Small ➔ Large ➔ Huge"},
        {"theme": "Speed Scale", "type": "seq", "items": ["Slow", "Fast"], "ex": "Slow ➔ Fast"},
        {"theme": "Mood Spectrum", "type": "seq", "items": ["Sad", "Calm", "Happy"], "ex": "Sad ➔ Calm ➔ Happy"},
        {"theme": "Difficulty Scale", "type": "seq", "items": ["Easy", "Hard", "Impossible"], "ex": "Easy ➔ Hard ➔ Impossible"},
        {"theme": "Price Spectrum", "type": "seq", "items": ["Free", "Cheap", "Moderate", "Expensive"], "ex": "Free ➔ Cheap ➔ Moderate ➔ Expensive"},
        {"theme": "Age Spectrum", "type": "seq", "items": ["New", "Modern", "Old", "Ancient"], "ex": "New ➔ Modern ➔ Old ➔ Ancient"},
        {"theme": "Light Intensity", "type": "seq", "items": ["Dark", "Bright"], "ex": "Dark ➔ Bright"},
        {"theme": "Cleanliness Spectrum", "type": "seq", "items": ["Dirty", "Clean"], "ex": "Dirty ➔ Clean"},
        {"theme": "Strength Spectrum", "type": "seq", "items": ["Weak", "Strong"], "ex": "Weak ➔ Strong"},
        # Opposite Pairs
        {"theme": "Physical Qualities", "type": "pair", "items": ["Big", "Small"], "ex": "Big city, small village."},
        {"theme": "Physical Qualities", "type": "pair", "items": ["Hot", "Cold"], "ex": "Hot tea, cold water."},
        {"theme": "Physical Qualities", "type": "pair", "items": ["Tall", "Short"], "ex": "Tall tree, short bush."},
        {"theme": "Physical Qualities", "type": "pair", "items": ["Long", "Short"], "ex": "Long river, short street."},
        {"theme": "Physical Qualities", "type": "pair", "items": ["Wide", "Narrow"], "ex": "Wide road, narrow path."},
        {"theme": "Physical Qualities", "type": "pair", "items": ["Heavy", "Light"], "ex": "Heavy box, light feather."},
        {"theme": "Physical Qualities", "type": "pair", "items": ["Hard", "Soft"], "ex": "Hard stone, soft pillow."},
        {"theme": "Physical Qualities", "type": "pair", "items": ["Smooth", "Rough"], "ex": "Smooth glass, rough bark."},
        {"theme": "Physical Qualities", "type": "pair", "items": ["Thick", "Thin"], "ex": "Thick book, thin paper."},
        {"theme": "Physical Qualities", "type": "pair", "items": ["Dry", "Wet"], "ex": "Dry towel, wet grass."},
        {"theme": "Personality & State", "type": "pair", "items": ["Good", "Bad"], "ex": "Good advice, bad idea."},
        {"theme": "Personality & State", "type": "pair", "items": ["Happy", "Sad"], "ex": "Happy child, sad story."},
        {"theme": "Personality & State", "type": "pair", "items": ["Kind", "Unkind"], "ex": "Kind person, unkind word."},
        {"theme": "Personality & State", "type": "pair", "items": ["Brave", "Scared"], "ex": "Brave hero, scared child."},
        {"theme": "Personality & State", "type": "pair", "items": ["Polite", "Rude"], "ex": "Polite greeting, rude gesture."},
        {"theme": "Personality & State", "type": "pair", "items": ["Generous", "Greedy"], "ex": "Generous host, greedy person."},
        {"theme": "Personality & State", "type": "pair", "items": ["Honest", "Dishonest"], "ex": "Honest answer, dishonest claim."},
        {"theme": "Personality & State", "type": "pair", "items": ["Patient", "Impatient"], "ex": "Patient teacher, impatient driver."},
        {"theme": "Personality & State", "type": "pair", "items": ["Calm", "Angry"], "ex": "Calm mind, angry reaction."},
        {"theme": "Personality & State", "type": "pair", "items": ["Smart", "Foolish"], "ex": "Smart leader, foolish choice."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Easy", "Difficult"], "ex": "Easy question, difficult exam."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Fast", "Slow"], "ex": "Fast car, slow walk."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["New", "Old"], "ex": "New phone, old house."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Clean", "Dirty"], "ex": "Clean hands, dirty boots."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Cheap", "Expensive"], "ex": "Cheap ticket, expensive watch."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Safe", "Dangerous"], "ex": "Safe haven, dangerous road."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["True", "False"], "ex": "True statement, false rumor."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Right", "Wrong"], "ex": "Right direction, wrong turn."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Useful", "Useless"], "ex": "Useful tool, useless advice."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Important", "Unimportant"], "ex": "Important meeting, unimportant detail."},
        {"theme": "Senses & Texture", "type": "pair", "items": ["Sweet", "Sour"], "ex": "Sweet apple, sour lemon."},
        {"theme": "Senses & Texture", "type": "pair", "items": ["Loud", "Quiet"], "ex": "Loud music, quiet night."},
        {"theme": "Senses & Texture", "type": "pair", "items": ["Bright", "Dark"], "ex": "Bright sun, dark room."},
        {"theme": "Senses & Texture", "type": "pair", "items": ["Fresh", "Old"], "ex": "Fresh bread, old food."},
        {"theme": "Senses & Texture", "type": "pair", "items": ["Sharp", "Blunt"], "ex": "Sharp knife, blunt pencil."}
    ],
    'phrases': [
        # Beginner Survival Phrases & Conversational Patterns
        {"theme": "Greetings & Courtesy", "type": "pair", "items": ["Hello, good morning!", "Goodbye, see you tomorrow!"], "ex": "Hello, good morning! How are you today?"},
        {"theme": "Greetings & Courtesy", "type": "pair", "items": ["Please and thank you.", "You are welcome!"], "ex": "A coffee, please. Thank you! — You are welcome!"},
        {"theme": "Greetings & Courtesy", "type": "pair", "items": ["Excuse me, sorry!", "No problem at all!"], "ex": "Excuse me, where is the hotel? — No problem at all!"},

        {"theme": "Identity & Introductions", "type": "pair", "items": ["My name is Anna.", "Nice to meet you!"], "ex": "My name is Anna. What is your name?"},
        {"theme": "Identity & Introductions", "type": "pair", "items": ["I am from London.", "Where are you from?"], "ex": "I am from London. Where are you from?"},
        {"theme": "Identity & Introductions", "type": "pair", "items": ["I am a student.", "I work as a teacher."], "ex": "I am a student at school, and my father is a teacher."},

        {"theme": "Needs & Requests", "type": "pair", "items": ["Can I have water, please?", "Here you are!"], "ex": "Can I have a glass of water, please?"},
        {"theme": "Needs & Requests", "type": "pair", "items": ["How much is this?", "It costs ten dollars."], "ex": "How much is this book? — It costs ten dollars."},
        {"theme": "Needs & Requests", "type": "pair", "items": ["Where is the bathroom?", "It is straight ahead."], "ex": "Where is the bathroom? — It is on the left."},

        {"theme": "Understanding & Communication", "type": "pair", "items": ["I understand.", "I don't understand."], "ex": "I don't understand. Can you repeat, please?"},
        {"theme": "Understanding & Communication", "type": "pair", "items": ["Do you speak English?", "Yes, a little bit."], "ex": "Do you speak English? — Yes, a little bit."},
        {"theme": "Understanding & Communication", "type": "pair", "items": ["Speak slowly, please.", "I speak clearly."], "ex": "Speak slowly, please. I am learning English."},

        {"theme": "Daily Life & Survival", "type": "pair", "items": ["I need help.", "Can I help you?"], "ex": "Excuse me, I need help finding the train station."},
        {"theme": "Daily Life & Survival", "type": "pair", "items": ["What time is it?", "It is three o'clock."], "ex": "What time is it now? — It is three o'clock."},
        {"theme": "Daily Life & Survival", "type": "pair", "items": ["I am hungry and thirsty.", "Let us eat dinner!"], "ex": "I am hungry. Let us order food!"},

        {"theme": "Time Sequences", "type": "seq", "items": ["Today is Monday", "Tomorrow is Tuesday", "Yesterday was Sunday"], "ex": "Yesterday was Sunday ➔ Today is Monday ➔ Tomorrow is Tuesday"},
        {"theme": "Numbers Sequence", "type": "seq", "items": ["One, two, three", "Four, five, six", "Seven, eight, nine"], "ex": "One, two, three ➔ Four, five, six ➔ Seven, eight, nine"}
    ]
}

# Transliteration helpers for non-Latin scripts
def transliterate_ru_tt_ba(text):
    mapping = {
        'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'yo', 'ж':'zh',
        'з':'z', 'и':'i', 'й':'y', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o',
        'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'kh', 'ц':'ts',
        'ч':'ch', 'ш':'sh', 'щ':'shch', 'ъ':'', 'ы':'y', 'ь':'', 'э':'e', 'ю':'yu',
        'я':'ya',
        'ә':'a', 'ө':'o', 'ү':'u', 'җ':'zh', 'ң':'ng', 'һ':'h', 'ҫ':'s', 'ҙ':'z',
        'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ё':'Yo', 'Ж':'Zh',
        'З':'Z', 'И':'I', 'Й':'Y', 'К':'K', 'Л':'L', 'М':'M', 'Н':'N', 'О':'O',
        'П':'P', 'Р':'R', 'С':'S', 'Т':'T', 'У':'U', 'Ф':'F', 'Х':'Kh', 'Ц':'Ts',
        'Ч':'Ch', 'Ш':'Sh', 'Щ':'Shch', 'Ъ':'', 'Ы':'Y', 'Ь':'', 'Э':'E', 'Ю':'Yu',
        'Я':'Ya',
        'Ә':'A', 'Ө':'O', 'Ү':'U', 'Җ':'Zh', 'Ң':'Ng', 'Һ':'H', 'Ҫ':'S', 'Ҙ':'Z'
    }
    return ''.join(mapping.get(c, c) for c in str(text))

def transliterate_el(text):
    mapping = {
        'α':'a', 'β':'v', 'γ':'g', 'δ':'d', 'ε':'e', 'ζ':'z', 'η':'i', 'θ':'th',
        'ι':'i', 'κ':'k', 'λ':'l', 'μ':'m', 'ν':'n', 'ξ':'x', 'ο':'o', 'π':'p',
        'ρ':'r', 'σ':'s', 'ς':'s', 'τ':'t', 'υ':'y', 'φ':'f', 'χ':'ch', 'ψ':'ps',
        'ω':'o', 'ά':'a', 'έ':'e', 'ή':'i', 'ί':'i', 'ό':'o', 'ύ':'y', 'ώ':'o',
        'ϊ':'i', 'ϋ':'y', 'ΐ':'i', 'ΰ':'y',
        'Α':'A', 'Β':'V', 'Γ':'G', 'Δ':'D', 'Ε':'E', 'Ζ':'Z', 'Η':'I', 'Θ':'Th',
        'Ι':'I', 'Κ':'K', 'Λ':'L', 'Μ':'M', 'Ν':'N', 'Ξ':'X', 'Ο':'O', 'Π':'P',
        'Ρ':'R', 'Σ':'S', 'Τ':'T', 'Υ':'Y', 'Φ':'F', 'Χ':'Ch', 'Ψ':'Ps', 'Ω':'O',
        'Ά':'A', 'Έ':'E', 'Ή':'I', 'Ί':'I', 'Ό':'O', 'Ύ':'Y', 'Ώ':'O'
    }
    return ''.join(mapping.get(c, c) for c in str(text))

def transliterate_hy(text):
    mapping = {
        'ա':'a', 'բ':'b', 'գ':'g', 'դ':'d', 'ե':'e', 'զ':'z', 'է':'e', 'ը':'y',
        'թ':'t', 'ժ':'zh', 'ի':'i', 'լ':'l', 'խ':'kh', 'ծ':'ts', 'կ':'k', 'հ':'h',
        'ձ':'dz', 'ղ':'gh', 'ճ':'ch', 'մ':'m', 'յ':'y', 'ն':'n', 'շ':'sh', 'ո':'o',
        'չ':'ch', 'պ':'p', 'ջ':'j', 'ռ':'r', 'ս':'s', 'վ':'v', 'տ':'t', 'ր':'r',
        'ց':'ts', 'ու':'u', 'փ':'p', 'ք':'k', 'և':'ev', 'օ':'o', 'ֆ':'f',
        'Ա':'A', 'Բ':'B', 'Գ':'G', 'Դ':'D', 'Ե':'E', 'Զ':'Z', 'Է':'E', 'Ը':'Y',
        'Թ':'T', 'Ժ':'Zh', 'Ի':'I', 'Լ':'L', 'Խ':'Kh', 'Ծ':'Ts', 'Կ':'K', 'Հ':'H',
        'Ձ':'Dz', 'Ղ':'Gh', 'Ճ':'Ch', 'Մ':'M', 'Յ':'Y', 'Ն':'N', 'Շ':'Sh', 'Ո':'O',
        'Չ':'Ch', 'Պ':'P', 'Ջ':'J', 'Ռ':'R', 'Ս':'S', 'Վ':'V', 'Տ':'T', 'Ր':'R',
        'Ց':'Ts', 'Ու':'U', 'Փ':'P', 'Ք':'K', 'Օ':'O', 'Ֆ':'F'
    }
    res = ''
    i = 0
    txt = str(text)
    while i < len(txt):
        if txt[i:i+2] in ['ու', 'Ու']:
            res += mapping[txt[i:i+2]]
            i += 2
        else:
            res += mapping.get(txt[i], txt[i])
            i += 1
    return res

def transliterate_ka(text):
    mapping = {
        'ა':'a', 'ბ':'b', 'გ':'g', 'დ':'d', 'ե':'e', 'ვ':'v', 'ზ':'z', 'თ':'t',
        'ი':'i', 'კ':'k', 'ლ':'l', 'მ':'m', 'ნ':'n', 'ო':'o', 'პ':'p', 'ჟ':'zh',
        'რ':'r', 'ს':'s', 'ტ':'t', 'უ':'u', 'ფ':'p', 'ქ':'k', 'ღ':'gh', 'ყ':'q',
        'შ':'sh', 'ჩ':'ch', 'ც':'ts', 'ძ':'dz', 'წ':'ts', 'ჭ':'ch', 'ხ':'kh',
        'ჯ':'j', 'ჰ':'h'
    }
    return ''.join(mapping.get(c, c) for c in str(text))

def get_transliteration(lang_code, word):
    if lang_code in ['ru', 'tt', 'ba']:
        return transliterate_ru_tt_ba(word)
    elif lang_code == 'el':
        return transliterate_el(word)
    elif lang_code == 'hy':
        return transliterate_hy(word)
    elif lang_code == 'ka':
        return transliterate_ka(word)
    return ""

def load_lang_vocab_data(lang_code):
    js_runner = r"""
const fs = require('fs');
const vm = require('vm');

const files = process.argv.slice(1);
let allItems = [];

for (const file of files) {
  try {
    const code = fs.readFileSync(file, 'utf8');
    const window = { speakingData: {}, vocabData: {}, vocabularyData: {} };
    const sandbox = { window, console: { log: ()=>{}, error: ()=>{} } };

    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);

    let items = sandbox.data || [];
    if (!items.length) {
      for (const k of Object.keys(window)) {
        if (window[k] && typeof window[k] === 'object') {
          for (const l of Object.keys(window[k])) {
            if (Array.isArray(window[k][l])) items = items.concat(window[k][l]);
          }
        }
      }
    }
    allItems = allItems.concat(items);
  } catch (e) {}
}

process.stdout.write(JSON.stringify(allItems));
"""
    files = glob.glob(os.path.join("vocabulary", lang_code, "A1", "**", "*.js"), recursive=True)
    if not files:
        return []
    try:
        res = subprocess.run(["node", "-e", js_runner] + files, capture_output=True, text=True, check=True)
        return json.loads(res.stdout)
    except Exception as e:
        print(f"Error loading {lang_code} A1 vocabulary: {e}")
        return []

def generate_cards_html_en(items_list):
    cards_html = ""
    for item in items_list:
        theme = item['theme']
        is_seq = (item['type'] == 'seq')
        tokens = item['items']

        if is_seq:
            joined_items = f' <span class="lex-arrow" style="color:var(--teal);">➔</span> '.join([f'<span>{t}</span>' for t in tokens])
        else:
            joined_items = f' <span class="lex-arrow">↔</span> '.join([f'<span>{t}</span>' for t in tokens])

        ex = item['ex']

        card = f"""
                    <div class="lex-card">
                        <span class="lex-theme">{theme}</span>
                        <div class="lex-pair" style="font-size:1.1rem; flex-wrap:wrap;">
                            {joined_items}
                        </div>
                        <div class="lex-ex">"{ex}"</div>
                    </div>"""
        cards_html += card
    return cards_html

def generate_cards_html_target(lang_code, items_list):
    cards_html = ""
    is_non_latin = lang_code in ['ru', 'el', 'hy', 'ka', 'tt', 'ba']

    for item in items_list:
        word = item.get('word') or item.get('topic') or ''
        theme = item.get('theme') or 'Vocabulary'
        defs = item.get('definitions') or []
        def_text = defs[0].get('text') if defs and isinstance(defs[0], dict) else ''
        examples = defs[0].get('examples') if defs and isinstance(defs[0], dict) else []
        ex_text = examples[0] if examples else ''

        latin_trans = get_transliteration(lang_code, word) if is_non_latin else ""
        trans_html = f'<div class="lex-transliteration" style="font-size:0.85rem; color:var(--teal); font-style:italic; margin-top:-4px;">[{latin_trans}]</div>' if latin_trans and latin_trans.lower() != word.lower() else ''

        ex_html = f'<div class="lex-ex">"{ex_text}"</div>' if ex_text else ''
        def_html = f'<div class="lex-def" style="font-size:0.9rem; color:var(--ink-muted);">{def_text}</div>' if def_text else ''

        card = f"""
                    <div class="lex-card">
                        <span class="lex-theme">{theme.replace('_', ' ').title()}</span>
                        <div class="lex-pair" style="font-size:1.2rem;">
                            <span>{word}</span>
                        </div>
                        {trans_html}
                        {def_html}
                        {ex_html}
                    </div>"""
        cards_html += card
    return cards_html

def generate_page(lang_code, lang_info):
    name = lang_info['name']
    flag = lang_info['flag']
    intro = lang_info['intro']

    if lang_code == 'en':
        nouns_html = generate_cards_html_en(EN_DATA['nouns'])
        verbs_html = generate_cards_html_en(EN_DATA['verbs'])
        adj_html = generate_cards_html_en(EN_DATA['adjectives'])
        phrases_html = generate_cards_html_en(EN_DATA['phrases'])
        nouns_count = len(EN_DATA['nouns'])
        verbs_count = len(EN_DATA['verbs'])
        adj_count = len(EN_DATA['adjectives'])
        phrases_count = len(EN_DATA['phrases'])
    else:
        raw_items = load_lang_vocab_data(lang_code)
        # Deduplicate items by word
        seen_words = set()
        dedup_items = []
        for item in raw_items:
            w = item.get('word')
            if w and w not in seen_words:
                seen_words.add(w)
                dedup_items.append(item)

        nouns_list = [i for i in dedup_items if (i.get('form') or i.get('pos')) == 'noun']
        verbs_list = [i for i in dedup_items if (i.get('form') or i.get('pos')) == 'verb']
        adj_list = [i for i in dedup_items if (i.get('form') or i.get('pos')) == 'adjective']
        phrases_list = [i for i in dedup_items if (i.get('form') or i.get('pos')) not in ['noun', 'verb', 'adjective']]

        nouns_html = generate_cards_html_target(lang_code, nouns_list)
        verbs_html = generate_cards_html_target(lang_code, verbs_list)
        adj_html = generate_cards_html_target(lang_code, adj_list)
        phrases_html = generate_cards_html_target(lang_code, phrases_list)

        nouns_count = len(nouns_list)
        verbs_count = len(verbs_list)
        adj_count = len(adj_list)
        phrases_count = len(phrases_list)

    total_count = nouns_count + verbs_count + adj_count + phrases_count
    nouns_title = f"🏛️ 1. Top 100 ({nouns_count}) Essential {name} Nouns (A0–A1)"
    verbs_title = f"⚡ 2. Top 100 ({verbs_count}) Essential {name} Verbs (A0–A1)"
    adj_title = f"🎨 3. Top 100 ({adj_count}) Essential {name} Adjectives (A0–A1)"
    phrases_title = f"💬 4. Top 100 ({phrases_count}) Essential {name} Expressions & Phrases (A0–A1)"

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top 100 ({total_count}) {name} A0-A1 Master List (Nouns, Verbs, Adjectives & Phrases) — COSY Blog</title>
    <meta name="description" content="The ultimate Top 100 ({total_count}) A0-A1 {name} vocabulary blueprint: essential nouns, action verbs, descriptive adjectives, and survival phrase patterns for beginners.">
    <link rel="icon" href="../images/logos/cosylanguages.png">
    <link rel="manifest" href="../apps/free-portal/manifest.json">
    <meta name="theme-color" content="#FAF7F2">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="../css/tokens.css">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/components.css">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="stylesheet" href="../css/practice-new.css">

    <style>
        .blog-post-hero {{
            background: linear-gradient(135deg, #1e2f6b 0%, #0d7a5f 100%);
            color: #fff;
            padding: 3.5rem 2rem;
            border-radius: var(--r-xl);
            margin-bottom: 2.5rem;
        }}
        .blog-post-hero h1 {{
            font-family: 'Fraunces', serif;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #fff;
        }}
        .blog-post-hero p {{
            font-size: 1.1rem;
            opacity: 0.9;
            max-width: 800px;
            line-height: 1.6;
        }}
        .post-breadcrumb {{
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
        }}
        .post-breadcrumb a {{
            color: rgba(255,255,255,0.8);
            text-decoration: underline;
        }}
        .list-section {{
            background: #fff;
            border: 1px solid var(--border);
            border-radius: var(--r-xl);
            padding: 2rem;
            margin-bottom: 2.5rem;
        }}
        .sec-head {{
            border-bottom: 2px solid var(--cream);
            padding-bottom: 1rem;
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}
        .sec-head h2 {{
            font-family: 'Fraunces', serif;
            font-size: 1.6rem;
            color: var(--ink);
        }}
        .cards-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 1.25rem;
        }}
        .lex-card {{
            background: var(--warm-white);
            border: 1px solid var(--border);
            border-radius: var(--r-md);
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }}
        .lex-theme {{
            font-size: 0.7rem;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--teal);
            letter-spacing: 0.05em;
        }}
        .lex-pair {{
            font-family: 'Fraunces', serif;
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--ink);
            display: flex;
            align-items: center;
            gap: 8px;
        }}
        .lex-arrow {{
            color: var(--coral);
            font-weight: 800;
        }}
        .lex-ex {{
            font-size: 0.85rem;
            font-style: italic;
            color: var(--ink);
            background: rgba(255,255,255,0.8);
            padding: 8px 12px;
            border-radius: 6px;
            border-left: 3px solid var(--teal);
        }}
    </style>
</head>
<body class="practice-page-new">

    <nav id="cosy-nav"></nav>

    <div class="page">
        <header class="blog-post-hero">
            <div class="post-breadcrumb">
                <a href="index.html">← Back to Blog Hub</a>
            </div>
            <h1>{flag} Top 100 ({total_count}) {name} A0-A1 Master List</h1>
            <p>{intro}</p>
        </header>

        <main>
            <!-- 1. NOUNS -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>{nouns_title}</h2>
                    <span style="font-weight:800; color:var(--teal);">{nouns_count} Items</span>
                </div>
                <div class="cards-grid">
{nouns_html}
                </div>
            </section>

            <!-- 2. VERBS -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>{verbs_title}</h2>
                    <span style="font-weight:800; color:var(--teal);">{verbs_count} Items</span>
                </div>
                <div class="cards-grid">
{verbs_html}
                </div>
            </section>

            <!-- 3. ADJECTIVES -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>{adj_title}</h2>
                    <span style="font-weight:800; color:var(--teal);">{adj_count} Items</span>
                </div>
                <div class="cards-grid">
{adj_html}
                </div>
            </section>

            <!-- 4. PHRASES -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>{phrases_title}</h2>
                    <span style="font-weight:800; color:var(--teal);">{phrases_count} Items</span>
                </div>
                <div class="cards-grid">
{phrases_html}
                </div>
            </section>
        </main>
    </div>

    <footer>
        <div class="footer-inner">
            <div class="footer-brand">
                <div class="fb-logo">
                    <img src="../images/logos/cosylanguages.png" alt="COSYlanguages logo">
                    <span class="fb-name">COSYlanguages</span>
                </div>
                <p>Your friendly corner to master new languages and connect with the world. 🌍</p>
            </div>
            <div class="footer-links-col">
                <h5>Explore</h5>
                <a href="../practice/index.html">Free Practice 💡</a>
                <a href="index.html">COSY Blog & Hub 📝</a>
            </div>
        </div>
        <div class="footer-bottom">© 2026 COSYlanguages — All rights reserved</div>
    </footer>

    <script src="../js/data/languages.js"></script>
    <script src="../js/core/engine.js"></script>
    <script src="../js/core/i18n.js"></script>
    <script src="../js/core/ui.js"></script>
</body>
</html>
"""
    slug = lang_info['slug']
    filename = f"top-100-a0-a1-{slug}.html"
    filepath = os.path.join("blog", filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated {filepath} (Total: {total_count} -> Nouns: {nouns_count}, Verbs: {verbs_count}, Adj: {adj_count}, Phrases: {phrases_count})")

def main():
    for lang_code, lang_info in LANGUAGES.items():
        generate_page(lang_code, lang_info)

if __name__ == "__main__":
    main()

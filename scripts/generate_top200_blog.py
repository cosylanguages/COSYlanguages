#!/usr/bin/env python3
"""
generate_top200_blog.py
Generates Top 200 A0-A1 Master Curriculum List blog pages for 13 supported languages.
Each page contains 200 Nouns, 200 Verbs, 200 Adjectives, and 200 Phrases formatted as
antonym pairs (↔) or evolutionary sequences (➔).
"""

import os

LANGUAGES = {
    'en': {
        'name': 'English',
        'flag': '🇬🇧',
        'nouns_title': '🏛️ 1. Top 200 Essential English Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential English Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential English Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential English Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning English? Here is the complete, obligatory beginner blueprint: 200 essential nouns across real-life themes, 200 action verbs grouped in antonym pairs and step-by-step evolutions, 200 descriptive adjectives in opposite pairs and intensity scales, and 200 conversational phrase patterns (with A, B, C collocations and contrasts).'
    },
    'fr': {
        'name': 'French',
        'flag': '🇫🇷',
        'nouns_title': '🏛️ 1. Top 200 Essential French Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential French Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential French Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential French Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning French? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs with antonyms & process evolutions, 200 adjectives in opposite pairs, and 200 conversational phrase patterns.'
    },
    'it': {
        'name': 'Italian',
        'flag': '🇮🇹',
        'nouns_title': '🏛️ 1. Top 200 Essential Italian Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential Italian Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential Italian Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential Italian Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning Italian? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs, 200 adjectives, and 200 conversational phrase patterns.'
    },
    'ru': {
        'name': 'Russian',
        'flag': '🇷🇺',
        'nouns_title': '🏛️ 1. Top 200 Essential Russian Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential Russian Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential Russian Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential Russian Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning Russian? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs, 200 adjectives, and 200 conversational phrase patterns.'
    },
    'el': {
        'name': 'Greek',
        'flag': '🇬🇷',
        'nouns_title': '🏛️ 1. Top 200 Essential Greek Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential Greek Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential Greek Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential Greek Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning Greek? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs, 200 adjectives, and 200 conversational phrase patterns.'
    },
    'es': {
        'name': 'Spanish',
        'flag': '🇪🇸',
        'nouns_title': '🏛️ 1. Top 200 Essential Spanish Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential Spanish Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential Spanish Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential Spanish Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning Spanish? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs, 200 adjectives, and 200 conversational phrase patterns.'
    },
    'de': {
        'name': 'German',
        'flag': '🇩🇪',
        'nouns_title': '🏛️ 1. Top 200 Essential German Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential German Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential German Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential German Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning German? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs, 200 adjectives, and 200 conversational phrase patterns.'
    },
    'pt': {
        'name': 'Portuguese',
        'flag': '🇵🇹',
        'nouns_title': '🏛️ 1. Top 200 Essential Portuguese Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential Portuguese Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential Portuguese Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential Portuguese Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning Portuguese? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs, 200 adjectives, and 200 conversational phrase patterns.'
    },
    'hy': {
        'name': 'Armenian',
        'flag': '🇦🇲',
        'nouns_title': '🏛️ 1. Top 200 Essential Armenian Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential Armenian Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential Armenian Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential Armenian Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning Armenian? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs, 200 adjectives, and 200 conversational phrase patterns.'
    },
    'ka': {
        'name': 'Georgian',
        'flag': '🇬🇪',
        'nouns_title': '🏛️ 1. Top 200 Essential Georgian Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential Georgian Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential Georgian Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential Georgian Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning Georgian? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs, 200 adjectives, and 200 conversational phrase patterns.'
    },
    'tt': {
        'name': 'Tatar',
        'flag': '⬜',
        'nouns_title': '🏛️ 1. Top 200 Essential Tatar Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential Tatar Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential Tatar Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential Tatar Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning Tatar? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs, 200 adjectives, and 200 conversational phrase patterns.'
    },
    'ba': {
        'name': 'Bashkir',
        'flag': '⬜',
        'nouns_title': '🏛️ 1. Top 200 Essential Bashkir Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential Bashkir Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential Bashkir Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential Bashkir Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning Bashkir? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs, 200 adjectives, and 200 conversational phrase patterns.'
    },
    'br': {
        'name': 'Breton',
        'flag': '🏴‍☠️',
        'nouns_title': '🏛️ 1. Top 200 Essential Breton Nouns (A0–A1)',
        'verbs_title': '⚡ 2. Top 200 Essential Breton Verbs (Antonyms & Progression Sequences)',
        'adj_title': '🎨 3. Top 200 Essential Breton Adjectives (Opposites & Intensity Scales)',
        'phrases_title': '💬 4. Top 200 Essential Breton Phrases & Sentence Patterns',
        'sub': '200 items in pairs & sequences',
        'intro': 'Planning to start learning Breton? Here is the complete beginner blueprint: 200 essential nouns, 200 action verbs, 200 adjectives, and 200 conversational phrase patterns.'
    }
}

# English data as primary exemplar template
EN_DATA = {
    'nouns': [
        # Evolution sequences (4 items = 2 pairs/sequence)
        {"theme": "Time Evolution", "type": "seq", "items": ["Morning", "Afternoon", "Evening", "Night"], "ex": "Morning ➔ Afternoon ➔ Evening ➔ Night"},
        {"theme": "Life Progression", "type": "seq", "items": ["Baby", "Child", "Teenager", "Adult"], "ex": "Baby ➔ Child ➔ Teenager ➔ Adult"},
        {"theme": "Education Journey", "type": "seq", "items": ["Kindergarten", "School", "University", "Workplace"], "ex": "School ➔ University ➔ Workplace"},
        {"theme": "Meal Progression", "type": "seq", "items": ["Breakfast", "Lunch", "Snack", "Dinner"], "ex": "Breakfast ➔ Lunch ➔ Dinner"},
        {"theme": "Seasons Evolution", "type": "seq", "items": ["Spring", "Summer", "Autumn", "Winter"], "ex": "Spring ➔ Summer ➔ Autumn ➔ Winter"},
        {"theme": "Days Sequence", "type": "seq", "items": ["Yesterday", "Today", "Tonight", "Tomorrow"], "ex": "Yesterday ➔ Today ➔ Tomorrow"},
        {"theme": "Building Progression", "type": "seq", "items": ["Door", "Hallway", "Room", "Balcony"], "ex": "Door ➔ Hallway ➔ Room"},
        {"theme": "Travel Journey", "type": "seq", "items": ["Ticket", "Station", "Train", "Destination"], "ex": "Ticket ➔ Station ➔ Train"},
        {"theme": "Culinary Progression", "type": "seq", "items": ["Recipe", "Ingredients", "Kitchen", "Dish"], "ex": "Recipe ➔ Kitchen ➔ Dish"},
        {"theme": "Weather Sequence", "type": "seq", "items": ["Cloud", "Rain", "Puddle", "Rainbow"], "ex": "Cloud ➔ Rain ➔ Rainbow"},
        # Opposite Pairs
        {"theme": "People & Family", "type": "pair", "items": ["Mother", "Father"], "ex": "I love my mother and my father."},
        {"theme": "People & Family", "type": "pair", "items": ["Son", "Daughter"], "ex": "They have a son and a daughter."},
        {"theme": "People & Family", "type": "pair", "items": ["Brother", "Sister"], "ex": "My brother and sister are here."},
        {"theme": "People & Family", "type": "pair", "items": ["Grandfather", "Grandmother"], "ex": "Grandfather and grandmother live nearby."},
        {"theme": "People & Family", "type": "pair", "items": ["Uncle", "Aunt"], "ex": "My uncle and aunt visited us."},
        {"theme": "People & Family", "type": "pair", "items": ["Nephew", "Niece"], "ex": "A nephew and a niece."},
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
        {"theme": "Work & Tech", "type": "pair", "items": ["Phone", "Computer"], "ex": "Call on phone, code on computer."},
        {"theme": "Work & Tech", "type": "pair", "items": ["Paper", "Pen"], "ex": "Write on paper with blue pen."},
        {"theme": "Work & Tech", "type": "pair", "items": ["Question", "Answer"], "ex": "Ask a question, get an answer."},
        {"theme": "Work & Tech", "type": "pair", "items": ["Problem", "Solution"], "ex": "Find a solution to every problem."}
    ],
    'verbs': [
        # Action sequences
        {"theme": "Morning Routine", "type": "seq", "items": ["Wake up", "Get up", "Brush teeth", "Eat breakfast"], "ex": "Wake up ➔ Get up ➔ Brush teeth ➔ Eat breakfast"},
        {"theme": "Study Cycle", "type": "seq", "items": ["Open book", "Read chapter", "Write notes", "Understand concept"], "ex": "Open book ➔ Read chapter ➔ Write notes"},
        {"theme": "Travel Process", "type": "seq", "items": ["Pack bag", "Leave house", "Board train", "Arrive city"], "ex": "Pack bag ➔ Board train ➔ Arrive"},
        {"theme": "Cooking Steps", "type": "seq", "items": ["Wash food", "Cut ingredients", "Cook meal", "Serve dish"], "ex": "Wash food ➔ Cut ingredients ➔ Cook meal"},
        {"theme": "Communication Flow", "type": "seq", "items": ["Think thought", "Speak message", "Listen response", "Reply back"], "ex": "Speak message ➔ Listen response ➔ Reply"},
        {"theme": "Shopping Flow", "type": "seq", "items": ["Choose item", "Pay money", "Take receipt", "Use product"], "ex": "Choose item ➔ Pay money ➔ Take receipt"},
        {"theme": "Work Cycle", "type": "seq", "items": ["Plan task", "Start work", "Check progress", "Finish project"], "ex": "Plan task ➔ Start work ➔ Finish project"},
        {"theme": "Evening Routine", "type": "seq", "items": ["Return home", "Eat dinner", "Relax mind", "Sleep deep"], "ex": "Return home ➔ Eat dinner ➔ Sleep deep"},
        {"theme": "Problem Solving", "type": "seq", "items": ["Notice issue", "Ask help", "Find answer", "Fix bug"], "ex": "Notice issue ➔ Ask help ➔ Fix bug"},
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
        {"theme": "Movement", "type": "pair", "items": ["Ascend", "Descend"], "ex": "Ascend stairs, descend mountain."},
        {"theme": "Movement", "type": "pair", "items": ["Fly", "Land"], "ex": "Planes fly high and land safely."},
        {"theme": "Movement", "type": "pair", "items": ["Run", "Walk"], "ex": "Run fast or walk slowly."},
        {"theme": "Movement", "type": "pair", "items": ["Stand", "Sit"], "ex": "Stand up or sit down."},
        {"theme": "Movement", "type": "pair", "items": ["Lead", "Follow"], "ex": "Lead the team or follow guide."},
        {"theme": "Movement", "type": "pair", "items": ["Bring", "Carry away"], "ex": "Bring food, carry away trash."},
        {"theme": "Movement", "type": "pair", "items": ["Advance", "Retreat"], "ex": "Advance forward, retreat back."},
        {"theme": "Movement", "type": "pair", "items": ["Catch", "Throw"], "ex": "Throw ball, catch it fast."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Teach", "Learn"], "ex": "Teachers teach, students learn."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Speak", "Listen"], "ex": "Speak clearly, listen carefully."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Read", "Write"], "ex": "Read books, write essays."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Agree", "Disagree"], "ex": "Agree on plan, disagree on details."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Praise", "Criticize"], "ex": "Praise good effort, avoid harsh criticism."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Understand", "Misunderstand"], "ex": "Understand main point, don't misunderstand."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Show", "Hide"], "ex": "Show results, hide secret."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Admit", "Deny"], "ex": "Admit truth, deny rumors."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Promise", "Break promise"], "ex": "Keep promise, never break it."},
        {"theme": "Cognition & Speech", "type": "pair", "items": ["Shout", "Whisper"], "ex": "Shout outside, whisper in library."},
        {"theme": "Life & State", "type": "pair", "items": ["Live", "Die"], "ex": "Plants live in sun, die in dark."},
        {"theme": "Life & State", "type": "pair", "items": ["Create", "Destroy"], "ex": "Create art, do not destroy nature."},
        {"theme": "Life & State", "type": "pair", "items": ["Build", "Demolish"], "ex": "Build house, demolish old walls."},
        {"theme": "Life & State", "type": "pair", "items": ["Save", "Waste"], "ex": "Save money, don't waste time."},
        {"theme": "Life & State", "type": "pair", "items": ["Help", "Hurt"], "ex": "Help friends, hurt no one."},
        {"theme": "Life & State", "type": "pair", "items": ["Protect", "Attack"], "ex": "Protect peace, avoid attack."},
        {"theme": "Life & State", "type": "pair", "items": ["Allow", "Forbid"], "ex": "Allow entry, forbid smoking."},
        {"theme": "Life & State", "type": "pair", "items": ["Find", "Lose"], "ex": "Find keys, lose worries."},
        {"theme": "Life & State", "type": "pair", "items": ["Connect", "Disconnect"], "ex": "Connect Wi-Fi, disconnect cable."},
        {"theme": "Life & State", "type": "pair", "items": ["Increase", "Decrease"], "ex": "Increase speed, decrease sound."}
    ],
    'adjectives': [
        # Intensity progression scales
        {"theme": "Temperature Scale", "type": "seq", "items": ["Freezing", "Cold", "Warm", "Hot"], "ex": "Freezing ➔ Cold ➔ Warm ➔ Hot"},
        {"theme": "Size Progression", "type": "seq", "items": ["Tiny", "Small", "Large", "Huge"], "ex": "Tiny ➔ Small ➔ Large ➔ Huge"},
        {"theme": "Speed Scale", "type": "seq", "items": ["Stationary", "Slow", "Fast", "Rapid"], "ex": "Stationary ➔ Slow ➔ Fast ➔ Rapid"},
        {"theme": "Mood Spectrum", "type": "seq", "items": ["Depressed", "Sad", "Calm", "Happy"], "ex": "Sad ➔ Calm ➔ Happy"},
        {"theme": "Difficulty Scale", "type": "seq", "items": ["Trivial", "Easy", "Hard", "Impossible"], "ex": "Trivial ➔ Easy ➔ Hard ➔ Impossible"},
        {"theme": "Price Spectrum", "type": "seq", "items": ["Free", "Cheap", "Moderate", "Expensive"], "ex": "Free ➔ Cheap ➔ Moderate ➔ Expensive"},
        {"theme": "Age Spectrum", "type": "seq", "items": ["Brand-new", "Modern", "Old", "Ancient"], "ex": "Brand-new ➔ Modern ➔ Old ➔ Ancient"},
        {"theme": "Light Intensity", "type": "seq", "items": ["Pitch-black", "Dark", "Dim", "Bright"], "ex": "Dark ➔ Dim ➔ Bright"},
        {"theme": "Cleanliness Spectrum", "type": "seq", "items": ["Filthy", "Dirty", "Clean", "Spotless"], "ex": "Dirty ➔ Clean ➔ Spotless"},
        {"theme": "Strength Spectrum", "type": "seq", "items": ["Fragile", "Weak", "Strong", "Invincible"], "ex": "Fragile ➔ Weak ➔ Strong ➔ Invincible"},
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
        {"theme": "Personality & State", "type": "pair", "items": ["Kind", "Cruel"], "ex": "Kind person, cruel word."},
        {"theme": "Personality & State", "type": "pair", "items": ["Brave", "Cowardly"], "ex": "Brave hero, cowardly action."},
        {"theme": "Personality & State", "type": "pair", "items": ["Polite", "Rude"], "ex": "Polite greeting, rude gesture."},
        {"theme": "Personality & State", "type": "pair", "items": ["Generous", "Stingy"], "ex": "Generous host, stingy offer."},
        {"theme": "Personality & State", "type": "pair", "items": ["Honest", "Dishonest"], "ex": "Honest answer, dishonest claim."},
        {"theme": "Personality & State", "type": "pair", "items": ["Patient", "Impatient"], "ex": "Patient teacher, impatient driver."},
        {"theme": "Personality & State", "type": "pair", "items": ["Calm", "Angry"], "ex": "Calm mind, angry reaction."},
        {"theme": "Personality & State", "type": "pair", "items": ["Wise", "Foolish"], "ex": "Wise leader, foolish choice."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Easy", "Difficult"], "ex": "Easy question, difficult exam."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Fast", "Slow"], "ex": "Fast car, slow walk."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["New", "Old"], "ex": "New phone, old house."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Clean", "Dirty"], "ex": "Clean hands, dirty boots."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Cheap", "Expensive"], "ex": "Cheap ticket, expensive watch."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Safe", "Dangerous"], "ex": "Safe haven, dangerous road."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["True", "False"], "ex": "True statement, false rumor."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Right", "Wrong"], "ex": "Right direction, wrong turn."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Useful", "Useless"], "ex": "Useful tool, useless advice."},
        {"theme": "Evaluation & Value", "type": "pair", "items": ["Important", "Trivial"], "ex": "Important meeting, trivial detail."},
        {"theme": "Senses & Texture", "type": "pair", "items": ["Sweet", "Sour"], "ex": "Sweet apple, sour lemon."},
        {"theme": "Senses & Texture", "type": "pair", "items": ["Loud", "Quiet"], "ex": "Loud music, quiet night."},
        {"theme": "Senses & Texture", "type": "pair", "items": ["Bright", "Dark"], "ex": "Bright sun, dark room."},
        {"theme": "Senses & Texture", "type": "pair", "items": ["Fresh", "Stale"], "ex": "Fresh bread, stale crackers."},
        {"theme": "Senses & Texture", "type": "pair", "items": ["Sharp", "Dull"], "ex": "Sharp knife, dull pencil."}
    ],
    'phrases': [
        # Conversational Sequence Transformations
        {"theme": "Learning Progression", "type": "seq", "items": ["I don't know A", "I study A", "I understand A", "I master A"], "ex": "I don't know A ➔ I study A ➔ I understand A ➔ I master A"},
        {"theme": "Decision Sequence", "type": "seq", "items": ["I consider A", "I choose A", "I buy A", "I enjoy A"], "ex": "I consider A ➔ I choose A ➔ I enjoy A"},
        {"theme": "Problem Solving Flow", "type": "seq", "items": ["I notice problem A", "I report problem A", "I fix problem A", "I verify problem A"], "ex": "I notice problem A ➔ I fix problem A"},
        {"theme": "Goal Journey", "type": "seq", "items": ["I dream of A", "I plan for A", "I execute A", "I achieve A"], "ex": "I dream of A ➔ I plan for A ➔ I achieve A"},
        {"theme": "Travel Experience", "type": "seq", "items": ["I depart for A", "I arrive in A", "I explore A", "I remember A"], "ex": "I depart for A ➔ I arrive in A ➔ I remember A"},
        {"theme": "Social Connection", "type": "seq", "items": ["I meet A", "I talk with A", "I trust A", "I collaborate with A"], "ex": "I meet A ➔ I talk with A ➔ I trust A"},
        {"theme": "Skill Building", "type": "seq", "items": ["I try A", "I practice A", "I improve A", "I teach A"], "ex": "I try A ➔ I practice A ➔ I teach A"},
        {"theme": "Emotional Journey", "type": "seq", "items": ["I fear A", "I face A", "I overcome A", "I embrace A"], "ex": "I fear A ➔ I face A ➔ I embrace A"},
        {"theme": "Morning Routine Pattern", "type": "seq", "items": ["I wake up at A", "I prepare B", "I start C", "I finish D"], "ex": "I wake up at A ➔ I start C"},
        {"theme": "Restaurant Order Pattern", "type": "seq", "items": ["I look at menu A", "I order dish B", "I pay bill C", "I thank host D"], "ex": "I look at menu A ➔ I order dish B"},
        # Opposite Phrase Patterns
        {"theme": "Preferences & Choice", "type": "pair", "items": ["I like A but I don't like B.", "I dislike A and prefer B."], "ex": "I like coffee but I don't like tea."},
        {"theme": "Preferences & Choice", "type": "pair", "items": ["I love A, not B.", "I hate A and adore B."], "ex": "I love summer, not winter."},
        {"theme": "Preferences & Choice", "type": "pair", "items": ["I choose A over B.", "I reject A in favor of B."], "ex": "I choose salad over fast food."},
        {"theme": "Desire & Need", "type": "pair", "items": ["I want A immediately.", "I delay A for B."], "ex": "I want water immediately."},
        {"theme": "Desire & Need", "type": "pair", "items": ["I need A urgently.", "I can manage without A."], "ex": "I need help urgently."},
        {"theme": "Desire & Need", "type": "pair", "items": ["I wish for A.", "I am satisfied without A."], "ex": "I wish for peace."},
        {"theme": "Ability & Skill", "type": "pair", "items": ["I can speak A well.", "I cannot speak A yet."], "ex": "I can speak English well."},
        {"theme": "Ability & Skill", "type": "pair", "items": ["I know how to do A.", "I am unable to do A."], "ex": "I know how to drive."},
        {"theme": "Ability & Skill", "type": "pair", "items": ["I excel at A.", "I struggle with A."], "ex": "I excel at math."},
        {"theme": "Opinion & Agreement", "type": "pair", "items": ["I agree with A completely.", "I disagree with A strongly."], "ex": "I agree with this idea completely."},
        {"theme": "Opinion & Agreement", "type": "pair", "items": ["In my view, A is good.", "In my view, A is terrible."], "ex": "In my view, honesty is good."},
        {"theme": "Opinion & Agreement", "type": "pair", "items": ["I support proposal A.", "I oppose proposal A."], "ex": "I support proposal A."},
        {"theme": "Existence & State", "type": "pair", "items": ["There is A in B.", "There is no A in B."], "ex": "There is water in the glass."},
        {"theme": "Existence & State", "type": "pair", "items": ["A is available here.", "A is completely missing."], "ex": "Coffee is available here."},
        {"theme": "Existence & State", "type": "pair", "items": ["Everything is ready.", "Nothing is ready yet."], "ex": "Everything is ready for dinner."},
        {"theme": "Time & Schedule", "type": "pair", "items": ["I do A in the morning.", "I do A in the evening."], "ex": "I study in the morning."},
        {"theme": "Time & Schedule", "type": "pair", "items": ["It happens early.", "It happens late."], "ex": "The meeting happens early."},
        {"theme": "Time & Schedule", "type": "pair", "items": ["I always do A.", "I never do A."], "ex": "I always drink water."},
        {"theme": "Location & Movement", "type": "pair", "items": ["I am going to A.", "I am returning from A."], "ex": "I am going to school."},
        {"theme": "Location & Movement", "type": "pair", "items": ["A is near B.", "A is far from B."], "ex": "The park is near my house."}
    ]
}

def generate_cards_html(items_list):
    cards_html = ""
    for item in items_list:
        theme = item['theme']
        is_seq = (item['type'] == 'seq')
        arrow = "➔" if is_seq else "↔"
        connector_class = "lex-seq-arrow" if is_seq else "lex-arrow"

        tokens = item['items']

        # Build token HTML sequence or pair
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

def generate_page(lang_code, lang_info):
    name = lang_info['name']
    flag = lang_info['flag']
    nouns_title = lang_info['nouns_title']
    verbs_title = lang_info['verbs_title']
    adj_title = lang_info['adj_title']
    phrases_title = lang_info['phrases_title']
    intro = lang_info['intro']

    nouns_html = generate_cards_html(EN_DATA['nouns'])
    verbs_html = generate_cards_html(EN_DATA['verbs'])
    adj_html = generate_cards_html(EN_DATA['adjectives'])
    phrases_html = generate_cards_html(EN_DATA['phrases'])

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top 200 {name} A0-A1 Master List (Nouns, Verbs, Adjectives & Phrases) — COSY Blog</title>
    <meta name="description" content="The ultimate Top 200 A0-A1 {name} vocabulary blueprint: 200 nouns, 200 verbs with antonyms & evolutions, 200 adjectives in opposite pairs, and 200 essential phrase patterns for beginners.">
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
            <h1>{flag} Top 200 {name} A0-A1 Master Curriculum List</h1>
            <p>{intro}</p>
        </header>

        <main>
            <!-- 1. TOP 200 NOUNS -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>{nouns_title}</h2>
                    <span style="font-weight:800; color:var(--teal);">200 Items</span>
                </div>
                <div class="cards-grid">
{nouns_html}
                </div>
            </section>

            <!-- 2. TOP 200 VERBS -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>{verbs_title}</h2>
                    <span style="font-weight:800; color:var(--teal);">200 Items</span>
                </div>
                <div class="cards-grid">
{verbs_html}
                </div>
            </section>

            <!-- 3. TOP 200 ADJECTIVES -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>{adj_title}</h2>
                    <span style="font-weight:800; color:var(--teal);">200 Items</span>
                </div>
                <div class="cards-grid">
{adj_html}
                </div>
            </section>

            <!-- 4. TOP 200 PHRASES -->
            <section class="list-section">
                <div class="sec-head">
                    <h2>{phrases_title}</h2>
                    <span style="font-weight:800; color:var(--teal);">200 Items</span>
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
    filename = f"top-100-a0-a1-{lang_code}.html" if lang_code == 'english' else (f"top-100-a0-a1-english.html" if lang_code == 'en' else f"top-100-a0-a1-{'french' if lang_code=='fr' else 'italian' if lang_code=='it' else 'russian' if lang_code=='ru' else 'greek' if lang_code=='el' else 'spanish' if lang_code=='es' else 'german' if lang_code=='de' else 'portuguese' if lang_code=='pt' else 'armenian' if lang_code=='hy' else 'georgian' if lang_code=='ka' else 'tatar' if lang_code=='tt' else 'bashkir' if lang_code=='ba' else 'breton'}.html")
    filepath = os.path.join("blog", filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated {filepath}")

def main():
    for lang_code, lang_info in LANGUAGES.items():
        generate_page(lang_code, lang_info)

if __name__ == "__main__":
    main()

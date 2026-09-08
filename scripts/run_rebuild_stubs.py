import os

STUB_PAGES = {
    "part-1-building-blocks.html": {
        "part_num": "Part 1",
        "title": "Building Blocks of English Sentences",
        "subtitle": "Word order, subject pronouns, and core sentence structure",
        "outcome": "You can structure basic English affirmative, negative, and question sentences with confidence.",
        "notice_prompt": "Look at the sentence order: Subject + Verb + Object (e.g. 'I learn English'). Notice how the subject always comes before the verb in standard statements.",
        "ccqs": [
            ("Sentence: 'She drinks tea every morning.'", "Is 'She' the subject who performs the action?", "Yes"),
            ("Sentence: 'Drinks she tea?'", "Is 'Drinks she tea?' natural English word order?", "No, questions need an auxiliary like 'Does she drink tea?'"),
            ("Sentence: 'I English study.'", "Is 'I English study' correct word order?", "No, subject + verb + object -> 'I study English'")
        ],
        "table_headers": ["Sentence Type", "Structure", "Example Sentence"],
        "table_rows": [
            ["Statement (+)", "Subject + Verb + Object", "She plays piano."],
            ["Negative (-)", "Subject + do/does not + Verb", "She does not play piano."],
            ["Question (?)", "Do/Does + Subject + Verb?", "Does she play piano?"]
        ],
        "native": "English is a strict SVO (Subject-Verb-Object) language. Unlike languages with rich case endings where word order can shift freely, English relies heavily on fixed word order to indicate who is doing what to whom.",
        "pron": "Auxiliary verbs in statements (do, does) are unaccented, whereas in short answers they receive natural sentence accent (e.g. 'Yes, she DOES /dʌz/').",
        "examples": [
            "<strong>Alex</strong> <strong>reads</strong> books.",
            "<strong>We</strong> <strong>do not live</strong> in Spain.",
            "<strong>Do</strong> <strong>you speak</strong> English?"
        ],
        "mistakes": [
            ("❌ Reads Alex books?", "✅ Does Alex read books?"),
            ("❌ I like very much tea.", "✅ I like tea very much.")
        ],
        "memory": "Remember S-V-O: Subject (Who) -> Verb (Action) -> Object (What). It's the golden highway of English grammar!",
        "connects": [
            ("to-be.html", "The Verb 'To Be'", "Learn how 'to be' acts as its own subject-verb builder without extra auxiliaries."),
            ("pronouns.html", "Subject & Object Pronouns", "Master pronouns that fill the Subject and Object positions in SVO sentences.")
        ],
        "checklist": [
            "Build SVO statements accurately",
            "Identify the subject, verb, and object in a sentence",
            "Form basic negatives with do/does not"
        ],
        "quiz": [
            {"q": "What is the standard English statement word order?", "opts": ["Subject + Verb + Object", "Verb + Subject + Object", "Object + Subject + Verb"], "correct": 0, "exp": "English standard word order is strictly Subject + Verb + Object."},
            {"q": "Which sentence follows correct word order?", "opts": ["Like I pizza.", "I like pizza.", "Pizza I like."], "correct": 1, "exp": "Subject (I) + Verb (like) + Object (pizza)."}
        ],
        "celebration": "construct foundational English sentences using correct Subject-Verb-Object word order"
    },
    "part-2-nouns-possession.html": {
        "part_num": "Part 2",
        "title": "Nouns & Possession",
        "subtitle": "Singular and plural nouns, possessive 's, and belonging",
        "outcome": "You can describe ownership, people, places, and things using singular/plural nouns and possessive 's.",
        "notice_prompt": "Notice the difference: 'teacher' (one person), 'teachers' (more than one), 'teacher's book' (book belonging to one teacher).",
        "ccqs": [
            ("Sentence: 'This is Emma's jacket.'", "Whose jacket is it?", "It belongs to Emma"),
            ("Sentence: 'The students' books are on the desk.'", "Does 'students'' mean one student or multiple students?", "Multiple students"),
            ("Sentence: 'My cat's food is ready.'", "Is the food for one cat or two cats?", "One cat ('s)")
        ],
        "table_headers": ["Type", "Rule / Ending", "Example"],
        "table_rows": [
            ["Regular Plural", "Add -s or -es", "book -> books, bus -> buses"],
            ["Singular Possessive", "Add 's", "Sarah's car"],
            ["Plural Possessive", "Add ' after -s", "the girls' house"]
        ],
        "native": "English possessive 's replaces long preposition phrases. Instead of saying 'the car of my brother', English native speakers overwhelmingly prefer 'my brother's car'.",
        "pron": "Possessive 's is pronounced /s/ after voiceless sounds (Kat's), /z/ after voiced sounds (Dog's /dɒɡz/), and /ɪz/ after sibilants (Chris's /ˈkrɪs.ɪz/).",
        "examples": [
            "This is <strong>David's</strong> phone.",
            "The <strong>children's</strong> toys are in the box.",
            "Our <strong>parents'</strong> house is nearby."
        ],
        "mistakes": [
            ("❌ The car of my sister is red.", "✅ My sister's car is red."),
            ("❌ These are my two sister's.", "✅ These are my two sisters.")
        ],
        "memory": "Apostrophe BEFORE s ('s) = ONE owner. Apostrophe AFTER s (s') = MANY owners!",
        "connects": [
            ("possessive-s.html", "Possessive 's Deep-Dive", "Explore detailed possessive patterns for names, groups, and joint ownership."),
            ("plurals-regular.html", "Regular Plurals", "Master plural spelling variations (-s, -es, -ies).")
        ],
        "checklist": [
            "Use possessive 's for singular owners",
            "Distinguish plural -s from possessive 's",
            "Talk about personal belongings"
        ],
        "quiz": [
            {"q": "Which phrase shows one person owning a dog?", "opts": ["The boy's dog", "The boys' dog", "The boys dog"], "correct": 0, "exp": "Boy's indicates a single boy owning the dog."},
            {"q": "How do you make 'box' plural?", "opts": ["boxs", "boxes", "box's"], "correct": 1, "exp": "Nouns ending in -x take -es in plural: boxes."}
        ],
        "celebration": "express ownership, belonging, and plural items clearly using possessive 's"
    },
    "part-3-articles-determiners.html": {
        "part_num": "Part 3",
        "title": "Articles & Determiners",
        "subtitle": "Indefinite articles (a/an), definite article (the), and demonstratives (this/that/these/those)",
        "outcome": "You can identify specific versus general items and point to things near or far in conversation.",
        "notice_prompt": "Notice when we say 'a book' (any book) versus 'the book' (a specific book we both know). Notice 'this car' (here) versus 'that car' (over there).",
        "ccqs": [
            ("Sentence: 'I bought an apple and a banana.'", "Why do we use 'an' before apple?", "Because apple starts with a vowel sound (/æ/)"),
            ("Sentence: 'Pass me the key on the table.'", "Are we talking about any key in the world, or a specific key?", "A specific key on the table"),
            ("Sentence: 'Look at that plane in the sky.'", "Is the plane near the speaker or far away?", "Far away (that)")
        ],
        "table_headers": ["Determiner", "Distance / Context", "Example"],
        "table_rows": [
            ["a / an", "Singular countable, first mention / general", "a doctor, an umbrella"],
            ["the", "Specific / known item", "the moon, the sun, the teacher"],
            ["this / these", "Near speaker (singular / plural)", "this cup (here), these books"],
            ["that / those", "Far from speaker (singular / plural)", "that building, those stars"]
        ],
        "native": "Articles tell the listener how much context is shared. 'A' introduces new information; 'the' indicates 'you know which one I mean'.",
        "pron": "'The' is pronounced /ðə/ before consonant sounds (the book) and /ðiː/ before vowel sounds (the apple). 'An' links smoothly: an apple /ən.æp.əl/.",
        "examples": [
            "She lives in <strong>a</strong> small town. <strong>The</strong> town is near London.",
            "<strong>This</strong> coffee is hot, but <strong>that</strong> tea over there is cold.",
            "Look at <strong>those</strong> birds in the tree!"
        ],
        "mistakes": [
            ("❌ I saw a elephant.", "✅ I saw an elephant."),
            ("❌ Look at this trees over there.", "✅ Look at those trees over there.")
        ],
        "memory": "A/An = Any one. The = That specific one. THIS is near my hand, THAT is across the land!",
        "connects": [
            ("articles.html", "Articles A/An/The", "Deep-dive into article rules, zero article, and geographic usage."),
            ("demonstratives.html", "Demonstratives This/That/These/Those", "Master spatial pointing and conversational demonstratives.")
        ],
        "checklist": [
            "Choose between 'a' and 'an' based on sound",
            "Use 'the' for specific, shared context items",
            "Use demonstratives (this, that, these, those) accurately"
        ],
        "quiz": [
            {"q": "Which article goes before 'hour'?", "opts": ["a hour", "an hour", "the hour only"], "correct": 1, "exp": "'Hour' begins with a silent 'h', so the first sound is a vowel sound /aʊ/ -> an hour."},
            {"q": "What word points to plural items far away?", "opts": ["this", "these", "those"], "correct": 2, "exp": "'Those' is used for plural items far from the speaker."}
        ],
        "celebration": "specify items precisely with a/an/the and point to objects using this, that, these, and those"
    },
    "part-4-pronouns.html": {
        "part_num": "Part 4",
        "title": "Pronoun System",
        "subtitle": "Subject pronouns, object pronouns, possessive adjectives, and possessive pronouns",
        "outcome": "You can replace repetitive nouns with accurate subject, object, and possessive pronouns.",
        "notice_prompt": "Notice how 'John saw Mary' becomes 'He saw her', and 'It is Mary's book' becomes 'It is her book' or 'It is hers'.",
        "ccqs": [
            ("Sentence: 'Maria called him yesterday.'", "Did Maria receive the call or make the call?", "Maria made the call (Subject = Maria)"),
            ("Sentence: 'Maria called him yesterday.'", "Is 'him' the person receiving the call?", "Yes (Object = him)"),
            ("Sentence: 'That bag is mine.'", "Does 'mine' mean 'my bag'?", "Yes")
        ],
        "table_headers": ["Subject", "Object", "Possessive Adj.", "Possessive Pronoun"],
        "table_rows": [
            ["I", "me", "my", "mine"],
            ["you", "you", "your", "yours"],
            ["he / she / it", "him / her / it", "his / her / its", "his / hers / -"],
            ["we / they", "us / them", "our / their", "ours / theirs"]
        ],
        "native": "English uses object pronouns after prepositions (with me, for us, to them). Never use subject pronouns after prepositions in modern English.",
        "pron": "Object pronouns (me, him, her, us, them) are unstressed in normal speech: 'Give it to him' -> /ɡɪv ɪt tə ɪm/.",
        "examples": [
            "<strong>She</strong> gave <strong>him</strong> a present.",
            "Is this <strong>your</strong> coat? No, it's <strong>hers</strong>.",
            "They invited <strong>us</strong> to <strong>their</strong> party."
        ],
        "mistakes": [
            ("❌ She gave the book to I.", "✅ She gave the book to me."),
            ("❌ This phone is my.", "✅ This phone is mine.")
        ],
        "memory": "Subject DOES the action. Object RECEIVES the action. Possessive Adj needs a noun (my car). Possessive Pronoun stands ALONE (It is mine)!",
        "connects": [
            ("pronouns.html", "Subject & Object Pronouns", "Master subject and object pronoun pairs in conversational dialogues."),
            ("possessive-s.html", "Possessive Structures", "Compare possessive pronouns (mine, yours) with possessive 's.")
        ],
        "checklist": [
            "Use subject pronouns before verbs",
            "Use object pronouns after verbs and prepositions",
            "Distinguish possessive adjectives (my) from possessive pronouns (mine)"
        ],
        "quiz": [
            {"q": "Which word completes: 'Listen to ___!'", "opts": ["I", "me", "my"], "correct": 1, "exp": "Prepositions take object pronouns: 'to me'."},
            {"q": "Complete: 'Whose car is this? It's ___.'", "opts": ["her", "hers", "she"], "correct": 1, "exp": "'Hers' is the standalone possessive pronoun."}
        ],
        "celebration": "navigate subject, object, and possessive pronouns seamlessly without repeating nouns"
    },
    "part-5-adjectives-comparisons.html": {
        "part_num": "Part 5",
        "title": "Adjectives & Comparisons",
        "subtitle": "Describing qualities, comparative forms (-er / more), and superlative forms (-est / most)",
        "outcome": "You can describe people, places, and objects and compare them using comparative and superlative forms.",
        "notice_prompt": "Notice: 'fast' -> 'faster than' -> 'the fastest'. Notice: 'expensive' -> 'more expensive than' -> 'the most expensive'.",
        "ccqs": [
            ("Sentence: 'Tokyo is bigger than Rome.'", "Are Tokyo and Rome equal in size?", "No, Tokyo is larger"),
            ("Sentence: 'Mount Everest is the highest mountain.'", "Is any mountain higher than Mount Everest?", "No, it is #1 in height"),
            ("Sentence: 'This phone is more expensive than that one.'", "Which phone costs more money?", "This phone")
        ],
        "table_headers": ["Adjective Type", "Comparative Form", "Superlative Form"],
        "table_rows": [
            ["Short (1 syllable)", "-er than (taller than)", "the -est (the tallest)"],
            ["Ending in -y", "-ier than (happier than)", "the -iest (the happiest)"],
            ["Long (2+ syllables)", "more ... than (more modern)", "the most ... (the most modern)"],
            ["Irregular", "good -> better, bad -> worse", "the best, the worst"]
        ],
        "native": "Adjectives in English always go BEFORE the noun ('a red car') or AFTER linking verbs ('the car is red'). Adjectives never take plural -s ('two red cars', NOT 'two reds cars').",
        "pron": "The '-er' in comparatives is pronounced as a weak schwa /ər/. 'Than' is also weak: /ðən/ ('taller than' /ˈtɔː.lər ðən/).",
        "examples": [
            "My new apartment is <strong>smaller than</strong> my old one.",
            "She bought <strong>the most beautiful</strong> flowers in the market.",
            "Today is <strong>better than</strong> yesterday."
        ],
        "mistakes": [
            ("❌ She is more taller than me.", "✅ She is taller than me."),
            ("❌ This is the most fast car.", "✅ This is the fastest car.")
        ],
        "memory": "Short words add -er / -est. Long words use MORE / MOST. Never double up (don't say 'more taller')!",
        "connects": [
            ("comparative-adjectives.html", "Comparative Adjectives", "Detailed practice on forming comparatives and spelling rules."),
            ("superlatives.html", "Superlative Adjectives", "Deep-dive into superlatives and world record descriptions.")
        ],
        "checklist": [
            "Form regular comparatives with -er and more",
            "Form superlatives with the -est and the most",
            "Use irregular forms (good/better/best, bad/worse/worst)"
        ],
        "quiz": [
            {"q": "What is the comparative form of 'happy'?", "opts": ["more happy", "happier", "happiest"], "correct": 1, "exp": "Adjectives ending in -y change to -ier: happier."},
            {"q": "Which sentence is correct?", "opts": ["He is the best player in the team.", "He is the most good player in the team.", "He is the better player in the team."], "correct": 0, "exp": "'Good' is irregular: good -> better -> the best."}
        ],
        "celebration": "describe qualities and compare items, places, and experiences with precision"
    },
    "part-6-adverbs.html": {
        "part_num": "Part 6",
        "title": "Adverbs of Manner & Frequency",
        "subtitle": "Describing how actions happen and how often routines occur",
        "outcome": "You can describe the manner of actions (quickly, carefully) and express frequency (always, usually, never).",
        "notice_prompt": "Notice position: Adverbs of frequency go BEFORE main verbs ('She always arrives early') but AFTER 'to be' ('She is always happy'). Adverbs of manner go after the verb ('He drives carefully').",
        "ccqs": [
            ("Sentence: 'He drives carefully.'", "Does 'carefully' describe the driver or how he drives?", "How he drives (the action)"),
            ("Sentence: 'She always drinks tea in the morning.'", "Does she miss drinking tea in the morning?", "No, 100% of the time (always)"),
            ("Sentence: 'They are never late.'", "Are they late sometimes?", "No, 0% of the time (never)")
        ],
        "table_headers": ["Adverb Type", "Position Rule", "Examples"],
        "table_rows": [
            ["Frequency (always, usually, never)", "Before main verb, after 'be'", "I usually sleep at 11. She is always kind."],
            ["Manner (-ly adverbs)", "After main verb / object", "He speaks fluently. She walks quickly."],
            ["Irregular Manner", "same as adjective or special", "fast -> fast, hard -> hard, good -> well"]
        ],
        "native": "Don't confuse 'hard' and 'hardly'. 'He works hard' means with great effort. 'He hardly works' means he almost does no work at all!",
        "pron": "Adverbs of frequency have natural stress. In negatives, 'never' has strong initial stress /ˈnev.ər/.",
        "examples": [
            "She <strong>quietly</strong> opened the door.",
            "We <strong>often</strong> eat dinner together on Sundays.",
            "He plays guitar very <strong>well</strong>."
        ],
        "mistakes": [
            ("❌ She plays good the piano.", "✅ She plays the piano well."),
            ("❌ I go always to the gym.", "✅ I always go to the gym.")
        ],
        "memory": "Adjectives describe NOUNS (a quick car). Adverbs describe VERBS (drives quickly)!",
        "connects": [
            ("adverbs-frequency.html", "Adverbs of Frequency", "Master frequency scale from 100% (always) to 0% (never)."),
            ("adverbs-manner.html", "Adverbs of Manner", "Learn how to transform adjectives into -ly adverbs.")
        ],
        "checklist": [
            "Place frequency adverbs before main verbs and after 'be'",
            "Form manner adverbs with -ly",
            "Use irregular manner adverbs (well, fast, hard)"
        ],
        "quiz": [
            {"q": "Where does 'usually' go in: 'I ___ eat breakfast'?", "opts": ["I eat usually breakfast", "I usually eat breakfast", "I eat breakfast usually"], "correct": 1, "exp": "Adverbs of frequency go before main verbs: 'I usually eat'."},
            {"q": "What is the adverb form of 'good'?", "opts": ["goodly", "well", "good"], "correct": 1, "exp": "'Good' is an adjective; its adverb form is 'well'."}
        ],
        "celebration": "add vivid detail to your actions and describe how frequently you do things"
    },
    "part-7-quantifiers.html": {
        "part_num": "Part 7",
        "title": "Quantifiers & Countability",
        "subtitle": "Countable vs uncountable nouns, some/any, and much/many/a lot of",
        "outcome": "You can express quantities of food, money, time, and objects accurately in positive, negative, and question forms.",
        "notice_prompt": "Notice: Countable nouns can be counted (1 apple, 2 apples). Uncountable nouns cannot be counted individually (water, rice, money).",
        "ccqs": [
            ("Sentence: 'Do you have any sugar?'", "Can we count individual sugar grains as 1 sugar, 2 sugars?", "No, sugar is uncountable"),
            ("Sentence: 'I have some apples.'", "Is this a positive statement or a negative question?", "Positive statement (some)"),
            ("Sentence: 'There isn't much milk left.'", "Do we use 'much' with countable or uncountable nouns?", "Uncountable nouns (milk)")
        ],
        "table_headers": ["Noun Type", "Positive (+)", "Negative (-) & Question (?)"],
        "table_rows": [
            ["Countable (apples, cars)", "some apples / a lot of cars", "any apples / many cars"],
            ["Uncountable (water, money)", "some water / a lot of money", "any water / much money"]
        ],
        "native": "In positive statements, native speakers prefer 'a lot of' for both countable and uncountable nouns instead of 'much' or 'many'. 'I have a lot of money' sounds much more natural than 'I have much money'.",
        "pron": "'Some' in relaxed speech is reduced to /səm/ ('some water'). 'A lot of' connects as /ə.lɒt.əv/.",
        "examples": [
            "There is <strong>some</strong> cheese in the fridge.",
            "We don't have <strong>any</strong> butter left.",
            "How <strong>many</strong> chairs do we need?"
        ],
        "mistakes": [
            ("❌ I have many moneys.", "✅ I have a lot of money."),
            ("❌ There isn't some milk.", "✅ There isn't any milk.")
        ],
        "memory": "SOME for Positive statements. ANY for Negatives & Questions. MANY for items you count, MUCH for stuff you measure!",
        "connects": [
            ("countable-uncountable.html", "Countable & Uncountable Nouns", "Explore food, liquids, and abstract noun categories."),
            ("some-vs-any.html", "Some vs Any Rules", "Master offer/request exceptions with 'some' in questions.")
        ],
        "checklist": [
            "Identify countable vs uncountable nouns",
            "Use 'some' in positive statements and 'any' in negatives/questions",
            "Use 'how many' for countable and 'how much' for uncountable items"
        ],
        "quiz": [
            {"q": "Which phrase is correct?", "opts": ["How much apples?", "How many apples?", "How much apple?"], "correct": 1, "exp": "'Apples' is countable plural, so we ask 'How many apples?'"},
            {"q": "Complete: 'There is ___ water in the bottle.'", "opts": ["some", "any", "many"], "correct": 0, "exp": "'Some' is used in affirmative statements with uncountable nouns like water."}
        ],
        "celebration": "talk about food, shopping lists, quantities, and budgets without confusing countability"
    },
    "part-8-prepositions.html": {
        "part_num": "Part 8",
        "title": "Prepositions of Place & Time",
        "subtitle": "In, on, at for locations, dates, times, and movement",
        "outcome": "You can pinpoint locations, schedule appointments, and give directions using in, on, at, and movement prepositions.",
        "notice_prompt": "Notice time pyramid: AT specific times (at 5 PM), ON days/dates (on Monday), IN long periods (in July, in 2026).",
        "ccqs": [
            ("Sentence: 'The meeting is at 9:00 AM on Monday.'", "Does 'at' mark an exact clock time?", "Yes (9:00 AM)"),
            ("Sentence: 'She lives in Paris.'", "Is Paris an enclosed city/country area or a point?", "Enclosed area / city (in)"),
            ("Sentence: 'The keys are on the table.'", "Are the keys touching the surface of the table?", "Yes (on)")
        ],
        "table_headers": ["Preposition", "Time Usage", "Place / Location Usage"],
        "table_rows": [
            ["AT", "Exact times, holidays (at 3 PM, at night)", "Specific points (at the door, at the bus stop)"],
            ["ON", "Days, dates (on Monday, on May 5th)", "Surfaces, floors (on the desk, on the 2nd floor)"],
            ["IN", "Months, years, seasons (in July, in 2026)", "Enclosed spaces, cities, countries (in London, in a room)"]
        ],
        "native": "Think of IN/ON/AT as a pyramid of general to specific. IN = big general areas/periods. ON = medium surfaces/days. AT = specific targets/times!",
        "pron": "Prepositions are weak function words in speech: 'at' /ət/, 'in' /ɪn/, 'on' /ɒn/. They blend directly into the noun phrase that follows.",
        "examples": [
            "We will meet <strong>at</strong> 8:00 <strong>on</strong> Friday.",
            "She is studying <strong>in</strong> her room <strong>at</strong> the university.",
            "There is a picture <strong>on</strong> the wall."
        ],
        "mistakes": [
            ("❌ I was born in 15th May.", "✅ I was born on 15th May."),
            ("❌ She lives at France.", "✅ She lives in France.")
        ],
        "memory": "AT specific points & times. ON days & surfaces. IN enclosed places & long time spaces!",
        "connects": [
            ("prepositions-place.html", "Prepositions of Place", "Detailed spatial diagrams for in, on, at, under, next to, behind."),
            ("prepositions-time.html", "Prepositions of Time", "Calendar and clock time preposition guidelines.")
        ],
        "checklist": [
            "Use 'at' for precise times and specific points",
            "Use 'on' for days, dates, and surfaces",
            "Use 'in' for months, years, cities, and enclosed spaces"
        ],
        "quiz": [
            {"q": "Which preposition completes: 'My birthday is ___ July'?", "opts": ["at", "on", "in"], "correct": 2, "exp": "Months take 'in': 'in July'."},
            {"q": "Which preposition completes: 'Meet me ___ the bus stop'?", "opts": ["at", "on", "in"], "correct": 0, "exp": "Specific location points take 'at': 'at the bus stop'."}
        ],
        "celebration": "schedule events, describe locations, and give precise directions using in, on, and at"
    },
    "part-9-verbs-modals.html": {
        "part_num": "Part 9",
        "title": "Modal Verbs & Imperatives",
        "subtitle": "Can/can't for ability & permission, imperatives for instructions",
        "outcome": "You can express abilities, ask for permission, give direct instructions, and make polite requests.",
        "notice_prompt": "Notice: Modal verbs never take -s for he/she/it ('She can swim', NOT 'She cans swim'). Imperatives use the bare infinitive ('Sit down!').",
        "ccqs": [
            ("Sentence: 'Can you drive a car?'", "Is this asking about physical skill / ability or permission?", "Ability"),
            ("Sentence: 'Please open the window.'", "Is 'open' an imperative giving a direct instruction or request?", "Yes"),
            ("Sentence: 'He can't speak Spanish.'", "Does he have the ability to speak Spanish?", "No")
        ],
        "table_headers": ["Modal / Form", "Function", "Example Sentence"],
        "table_rows": [
            ["can + Base", "Ability / Permission", "I can swim. Can I sit here?"],
            ["can't + Base", "Inability / Prohibition", "He can't come tonight."],
            ["Imperative (Base Verb)", "Command / Instruction", "Turn left! Don't touch that!"]
        ],
        "native": "To make imperatives polite in English, add 'Please' at the beginning or end ('Please sit down' or 'Sit down, please').",
        "pron": "'Can' in affirmative statements is unstressed /kən/. 'Can't' in negative statements is stressed with a long vowel /kɑːnt/ (UK) or /kænt/ (US).",
        "examples": [
            "She <strong>can speak</strong> three languages.",
            "<strong>Can</strong> I use your charger, please?",
            "<strong>Don't cross</strong> the street when the light is red!"
        ],
        "mistakes": [
            ("❌ She cans speak English.", "✅ She can speak English."),
            ("❌ To sit down please!", "✅ Sit down, please!")
        ],
        "memory": "Modals NEVER change ending! No -s, no -ed, no -ing. Just Modal + Base Verb!",
        "connects": [
            ("can-cant.html", "Can & Can't Ability", "Detailed practice with physical and cognitive skills."),
            ("imperatives.html", "Imperatives & Requests", "Master command forms, recipe steps, and safety warnings.")
        ],
        "checklist": [
            "Express skills and abilities with can/can't",
            "Ask permission using 'Can I...?'",
            "Give clear commands and instructions with imperatives"
        ],
        "quiz": [
            {"q": "Which sentence is correct?", "opts": ["He can swims.", "He can swim.", "He can to swim."], "correct": 1, "exp": "Modals take the bare infinitive without 'to' or '-s': 'can swim'."},
            {"q": "How do you give a negative command?", "opts": ["Not touch!", "Don't touch!", "No touch!"], "correct": 1, "exp": "Negative imperatives start with 'Don't' + bare verb."}
        ],
        "celebration": "share your abilities, make requests, and give clear directions and instructions"
    },
    "part-10-tense-system.html": {
        "part_num": "Part 10",
        "title": "The A1 Tense System Overview",
        "subtitle": "Connecting Present Simple, Present Continuous, Past Simple, and Going To Future",
        "outcome": "You can select the correct tense to communicate routines, current actions, past events, and future plans.",
        "notice_prompt": "Compare time frames: 'I work' (routine), 'I am working' (now), 'I worked' (yesterday), 'I am going to work' (tomorrow).",
        "ccqs": [
            ("Sentence: 'I worked yesterday, but I am working right now.'", "Did the first action happen in the past?", "Yes (yesterday)"),
            ("Sentence: 'I worked yesterday, but I am working right now.'", "Is the second action happening in this moment?", "Yes (right now)"),
            ("Sentence: 'She is going to visit her grandma tomorrow.'", "Is this trip in the future?", "Yes (tomorrow)")
        ],
        "table_headers": ["Tense", "Time Focus", "Formula", "Time Markers"],
        "table_rows": [
            ["Present Simple", "Routines / Facts", "Subject + V1 (-s)", "every day, usually"],
            ["Present Continuous", "Action Right Now", "Subject + am/is/are + V-ing", "now, at the moment"],
            ["Past Simple", "Finished Past", "Subject + V2 (-ed)", "yesterday, last night"],
            ["Going To Future", "Future Plan", "Subject + am/is/are going to + V1", "tomorrow, next week"]
        ],
        "native": "English relies heavily on time markers to lock down time context. Choosing the right auxiliary (do, be, have) determines the tense logic.",
        "pron": "Notice how auxiliary verbs shift stress depending on tense: 'I WAS working' vs 'I AM working' vs 'I WILL work'.",
        "examples": [
            "Every day I <strong>walk</strong> to work, but today I <strong>am taking</strong> the bus.",
            "Yesterday we <strong>visited</strong> the museum.",
            "Next weekend we <strong>are going to relax</strong> at the beach."
        ],
        "mistakes": [
            ("❌ Yesterday I go to school.", "✅ Yesterday I went to school."),
            ("❌ Right now I study.", "✅ Right now I am studying.")
        ],
        "memory": "PRESENT SIMPLE = Habits. CONTINUOUS = Right now. PAST = Finished then. GOING TO = Future plan!",
        "connects": [
            ("present-simple.html", "Present Simple", "Review routines and habits."),
            ("going-to.html", "Going to Future", "Master future plans and intentions.")
        ],
        "checklist": [
            "Switch between present, past, and future tenses",
            "Match time signals (yesterday, now, tomorrow) with correct tenses",
            "Build complete multi-tense conversations"
        ],
        "quiz": [
            {"q": "Which sentence describes a future plan?", "opts": ["I am going to buy a car tomorrow.", "I bought a car yesterday.", "I buy cars every day."], "correct": 0, "exp": "'Am going to + verb' expresses future intentions and plans."},
            {"q": "Which tense is used with 'right now'?", "opts": ["Past Simple", "Present Continuous", "Present Simple"], "correct": 1, "exp": "'Right now' signals an action happening in this moment -> Present Continuous."}
        ],
        "celebration": "confidently select and weave between past, present, and future tenses in conversation"
    },
    "part-11-questions-negation.html": {
        "part_num": "Part 11",
        "title": "Questions & Negation Masterclass",
        "subtitle": "Wh- question words, Yes/No questions, auxiliary inversions, and negative statements",
        "outcome": "You can form direct questions, ask for specific information using Wh- words, and create negative statements across all tenses.",
        "notice_prompt": "Notice question structure: Question Word + Auxiliary Verb + Subject + Main Verb? (Where do you live?). Notice 'not' follows the auxiliary verb in negatives.",
        "ccqs": [
            ("Sentence: 'Where does she live?'", "Is 'Where' asking for a place?", "Yes"),
            ("Sentence: 'Why are you late?'", "Is 'Why' asking for a reason or cause?", "Yes"),
            ("Sentence: 'She does not speak French.'", "Does she speak French?", "No")
        ],
        "table_headers": ["Question Word", "Target Information", "Example Question"],
        "table_rows": [
            ["Who", "Person / Identity", "Who is your teacher?"],
            ["Where", "Place / Location", "Where do you live?"],
            ["When / What time", "Time / Date", "When does the train leave?"],
            ["Why", "Reason / Cause", "Why are you studying English?"],
            ["What / Which", "Thing / Choice", "What is your name? Which dress?"],
            ["How", "Manner / Means", "How do you travel to work?"]
        ],
        "native": "In English, main verbs (except 'to be') CANNOT make questions or negatives by themselves. They always recruit an auxiliary helper (do, does, did, is, are, can).",
        "pron": "Wh- questions end with FALLING intonation (⤵ Where do you live?). Yes/No questions end with RISING intonation (⤴ Do you like tea?).",
        "examples": [
            "<strong>Where</strong> <strong>did</strong> you go yesterday?",
            "<strong>What time</strong> <strong>does</strong> the supermarket open?",
            "I <strong>don't</strong> understand this word."
        ],
        "mistakes": [
            ("❌ Where you live?", "✅ Where do you live?"),
            ("❌ Why she is crying?", "✅ Why is she crying?")
        ],
        "memory": "QUASM rule for Wh- questions: Question word -> Auxiliary -> Subject -> Main verb!",
        "connects": [
            ("question-words.html", "Question Words", "Practice Who, What, Where, When, Why, How in detail."),
            ("word-order.html", "Word Order in Questions", "Master auxiliary-subject inversion across all tenses.")
        ],
        "checklist": [
            "Form Yes/No questions with correct auxiliary verbs",
            "Form Wh- questions using QUASM word order",
            "Create clear negative statements with don't, doesn't, didn't, isn't"
        ],
        "quiz": [
            {"q": "What is the correct question word for a reason?", "opts": ["Where", "Why", "When"], "correct": 1, "exp": "'Why' asks for reasons and explanations."},
            {"q": "Which sentence is correctly structured?", "opts": ["Where you are going?", "Where are you going?", "Where going you are?"], "correct": 1, "exp": "Question Word (Where) + Auxiliary (are) + Subject (you) + Verb (going)?"}
        ],
        "celebration": "ask any question using Wh- words and build clear negative statements in English"
    }
}

def rebuild_stub_file(filepath):
    filename = os.path.basename(filepath)
    if filename not in STUB_PAGES:
        return False

    data = STUB_PAGES[filename]

    qitems_ccq_html = ""
    for idx, (sentence_info, q, a) in enumerate(data["ccqs"], 1):
        if a.lower() == 'yes':
            opts = [("Yes", True), ("No", False), ("Not specified", False)]
        elif a.lower() == 'no':
            opts = [("Yes", False), ("No", True), ("Uncertain", False)]
        else:
            opts = [(a, True), ("Incorrect / Opposite meaning", False), ("Uncertain", False)]

        opts_html = ""
        for opt_text, is_corr in opts:
            corr_attr = ' data-correct="true"' if is_corr else ''
            opts_html += f'      <button type="button" class="qopt"{corr_attr} style="text-align:left; padding:8px 12px; border:1px solid #d0d7de; border-radius:6px; background:#ffffff; cursor:pointer; font-size:0.95rem;">{opt_text}</button>\n'

        qitems_ccq_html += f'''  <div class="qitem" style="margin-bottom:16px; background:#ffffff; padding:14px 16px; border-radius:8px; border:1px solid var(--line, #e6e2d8);">
    <div class="qtext" style="font-weight:600; margin-bottom:10px; color:var(--teal-900, #0c3f38);">{idx}. {sentence_info} — {q}</div>
    <div class="qopts" style="display:flex; flex-direction:column; gap:8px;">
{opts_html}    </div>
    <div class="qexplain" style="display:none; margin-top:10px; padding:8px 12px; background:#eaf6f1; border-left:3px solid var(--teal-600, #1c9483); font-size:0.9rem; color:var(--teal-800, #0f5c50); font-weight:600;">Correct! {a}.</div>
  </div>\n'''

    headers_html = "".join(f"<th>{h}</th>" for h in data["table_headers"])
    rows_html = ""
    for row in data["table_rows"]:
        tds = "".join(f"<td>{cell}</td>" for cell in row)
        rows_html += f"<tr>{tds}</tr>\n"

    ex_items = ""
    for ex in data["examples"]:
        ex_items += f"  <li>{ex}</li>\n"

    mistake_items = ""
    for wrong, right in data["mistakes"]:
        mistake_items += f''' <div class="mflip">
  <div class="wrong-line"><span class="x">❌</span><span class="wrong-text">{wrong}</span></div>
  <span class="hint">tap to see the correct form</span>
  <div class="right-line"><span class="c">✅</span><span>{right}</span></div>
 </div>\n'''

    connect_items = ""
    for href, title, desc in data["connects"]:
        connect_items += f'    <li><a href="{href}">{title}</a> — {desc}</li>\n'

    check_items = ""
    for item in data["checklist"]:
        check_items += f' <label class="check-item"><input type="checkbox"><span>{item}</span></label>\n'

    quiz_items = ""
    for idx, q_data in enumerate(data["quiz"], 1):
        q_opts = ""
        for o_idx, opt in enumerate(q_data["opts"]):
            correct_attr = ' data-correct="true"' if o_idx == q_data["correct"] else ''
            q_opts += f'<button type="button" class="qopt"{correct_attr}>{opt}</button>'
        quiz_items += f''' <div class="qitem">
  <div class="qtext">{idx}. {q_data["q"]}</div>
  <div class="qopts">{q_opts}</div>
  <div class="qexplain">{q_data["exp"]}</div>
 </div>\n'''

    quiz_json_list = [{"correct": q_data["correct"]} for q_data in data["quiz"]]
    quiz_json_str = str(quiz_json_list).replace("'", '"')

    html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{data["title"]} · COSYlanguages A0–A1 Grammar</title>
<meta name="description" content="{data["subtitle"]}">
<link rel="stylesheet" href="../../../../../css/tokens.css">
<link rel="stylesheet" href="../../../../../css/base.css">
<link rel="stylesheet" href="../../../../../css/components.css">
<link rel="stylesheet" href="../../../../../css/layout.css">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<nav id="cosy-nav" aria-label="Main Navigation"></nav>

<!-- Sticky Header Navigation -->
<header class="sd-sticky-header">
  <div class="sd-header-inner">
    <nav class="sd-jump-links" aria-label="In-page section navigation">
      <a class="sd-jump-link" href="../../manuals/english-a0-a1.html" style="font-weight: 700;">← English Hub</a>
      <a class="sd-jump-link" href="../part-1.html">Part 1</a>
      <a class="sd-jump-link" href="../part-2.html">Part 2</a>
      <a class="sd-jump-link" href="../part-3.html">Part 3</a>
      <a class="sd-jump-link" href="../part-4.html">Part 4</a>
      <a class="sd-jump-link" href="../part-5.html">Part 5</a>
      <a class="sd-jump-link" href="../part-6.html">Part 6</a>
      <a class="sd-jump-link" href="../part-7.html">Part 7</a>
      <a class="sd-jump-link" href="../part-8.html">Part 8</a>
      <a class="sd-jump-link" href="../part-9.html">Part 9</a>
      <a class="sd-jump-link" href="../part-10.html">Part 10</a>
      <a class="sd-jump-link" href="../part-11.html">Part 11</a>
    </nav>
  </div>
</header>

<main class="container">
<div class="page-head">
 <span class="eyebrow">{data["part_num"]} · Grammar Knowledge Tree</span>
 <h1>{data["title"]}</h1>
 <p class="subtitle">{data["subtitle"]}</p>
 <hr class="rule">
</div>

<!-- Stage 1: Lead-in / Context -->
<div class="box outcome-banner" style="background:rgba(28,143,86,0.08); border-left:4px solid var(--role-verb, #1c8f56); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
  <strong>🎯 What you can communicate after this page:</strong> {data["outcome"]}
</div>

<!-- Stage 2: Meaning Check (CCQs) -->
<div class="box ccq-panel" style="background:var(--teal-050, #f2faf8); border:1px solid var(--teal-500, #25a894); border-left:4px solid var(--teal-600, #1c9483); padding:18px 20px; border-radius:8px; margin-bottom:24px;">
  <h3 style="margin-top:0; color:var(--teal-900, #0c3f38); font-size:1.1rem;">💡 Check your understanding (CCQs)</h3>
  <p style="margin-bottom:14px; font-style:italic; font-size:0.95rem;">Answer these quick questions to verify meaning:</p>
{qitems_ccq_html}</div>

<div class="box mint" style="margin-bottom:20px;">
  <h3>👀 What do you notice?</h3>
  <p>{data["notice_prompt"]}</p>
</div>

<!-- Stage 3: Form Explanation -->
<div class="table-wrap">
  <table>
    <thead><tr>{headers_html}</tr></thead>
    <tbody>
{rows_html}    </tbody>
  </table>
</div>

<div class="box native" style="margin-top:20px;">
  <h3>🧠 Think like a native speaker</h3>
  <p>{data["native"]}</p>
</div>

<!-- Stage 4: Pronunciation Note -->
<div class="pron-callout" style="background:#f0f7f5; border:1px solid #b2dfdb; border-left:4px solid var(--teal-600, #1c9483); padding:14px 18px; border-radius:8px; margin:20px 0;">
  <h3 style="margin-top:0; color:var(--teal-900, #0c3f38); font-size:1.05rem;">🗣️ Pronunciation Note</h3>
  <p style="margin:0; font-size:0.95rem; line-height:1.5;">{data["pron"]}</p>
</div>

<!-- Stage 5: Practice & Examples -->
<div class="examples">
  <span class="label">Key examples</span>
  <ul>
{ex_items}  </ul>
</div>

<div class="mistakes">
 <div class="m-title">⚠️ Common mistakes</div>
{mistake_items}</div>

<div class="box mint" style="margin-top:20px;">
 <h3>💡 Memory trick</h3>
 <p>{data["memory"]}</p>
</div>

<!-- Cross-link / Related Topics -->
<div class="box connects-to" style="background:#f8f9fa; border:1px solid #e9ecef; border-left:4px solid #6c757d; padding:16px 20px; border-radius:8px; margin:24px 0;">
  <h3 style="margin-top:0; color:#343a40; font-size:1.1rem;">🔗 Connects to...</h3>
  <ul style="margin:8px 0 0; padding-left:20px; font-size:0.95rem;">
{connect_items}  </ul>
</div>

<!-- Stage 6: Production, Checklist & Celebration -->
<div class="checklist" data-key="{filename.replace('.html', '')}">
 <h3>🎯 Can you already use this?</h3>
{check_items} <div class="check-progress"></div>
</div>

<div class="quiz-panel" data-quiz='{quiz_json_str}'>
 <div class="quiz-head"><h2>Quick check</h2><span class="quiz-score">Score: 0 / {len(data["quiz"])}</span></div>
{quiz_items} <button type="button" class="quiz-reset">Reset quiz</button>
</div>

<div class="box celebration-box" style="background:rgba(28,143,86,0.12); border-left:4px solid var(--role-verb, #1c8f56); padding:14px 18px; margin-top:24px; border-radius:8px;">
  <p style="margin:0; font-size:1rem; font-weight:700; color:var(--teal-900, #0c3f38);">🎉 Progress Celebration: You can now {data["celebration"]}!</p>
</div>

<div class="pager">
  <a class="prev" href="../part-1.html"><span class="dir">&larr; Previous</span><span class="ttl">Part Overview</span></a>
  <a class="next" href="../index.html"><span class="dir">Next &rarr;</span><span class="ttl">A0–A1 Manual Index</span></a>
</div>
</main>

<footer class="site">
 <div class="container">
 <div>COSYlanguages · English Grammar Manual, Level A0&ndash;A1 · interactive web edition</div>
 <div><a href="https://cosylanguages.github.io/COSYlanguages/index.html">&larr; Back to cosylanguages.github.io</a></div>
 </div>
</footer>
<script src="../assets/app.js"></script>
</body>
</html>
'''
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html_content)

    print(f"Rebuilt {filename} to full 14-step standard.")
    return True

def rebuild_all():
    for filename in STUB_PAGES:
        filepath = os.path.join('manuals/en/grammar/a1/topics', filename)
        rebuild_stub_file(filepath)

if __name__ == '__main__':
    rebuild_all()

(function() {
    const data = [
    {
        "id": "en_starter_learning_studying_001",
        "word": "student",
        "emoji": "🧑‍🎓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "students",
        "opposite": null,
        "oppositeEmoji": "🧑‍🏫",
        "definitions": [
            {
                "text": "A person who is studying at a school or university.",
                "examples": [
                    "The students are in the classroom."
                ]
            }
        ],
        "subtext": "related to learning studying",
        "transcription": "ˈstudənt",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_002",
        "word": "classmate",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "classmates",
        "definitions": [
            {
                "text": "A person who is in the same class as you at school.",
                "examples": [
                    "She is my classmate."
                ]
            }
        ],
        "subtext": "related to learning studying",
        "opposite": null,
        "transcription": "ˈklæsˌmeɪt",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_types_of_education_001",
        "word": "college",
        "emoji": "🎓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "colleges",
        "definitions": [
            {
                "text": "A place where students study after they leave school.",
                "examples": [
                    "She is at college."
                ]
            }
        ],
        "subtext": "related to types of education",
        "opposite": null,
        "transcription": "ˈkɑlɪʤ",
        "lang": "en",
        "level": "starter",
        "theme": "types_of_education",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_001",
        "word": "map",
        "emoji": "🗺️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "maps",
        "definitions": [
            {
                "text": "A drawing of a particular area, such as a city or a country.",
                "examples": [
                    "Look at the map."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "mæp",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_002",
        "word": "ruler",
        "emoji": "📏",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "rulers",
        "definitions": [
            {
                "text": "A flat straight piece of wood or plastic used for measuring things.",
                "examples": [
                    "Use a ruler to draw a line."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "ˈrulər",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_001",
        "word": "history",
        "emoji": "📜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The study of past events.",
                "examples": [
                    "I like learning about history."
                ]
            }
        ],
        "subtext": "related to school subjects",
        "opposite": null,
        "transcription": "ˈhɪstəri",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_002",
        "word": "science",
        "emoji": "🧪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The study of the natural world based on facts learned through experiments.",
                "examples": [
                    "We have science class on Tuesdays."
                ]
            }
        ],
        "subtext": "related to school subjects",
        "opposite": null,
        "transcription": "saɪəns",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_003",
        "word": "maths",
        "emoji": "🔢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "related to school subjects",
        "synonyms": [
            "mathematics"
        ],
        "definitions": [
            {
                "text": "The study of numbers, shapes, and quantities.",
                "examples": [
                    "Maths is my favorite subject."
                ]
            }
        ],
        "opposite": null,
        "transcription": "mæθs",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_004",
        "word": "geography",
        "emoji": "🌍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The study of the systems and processes that involve the Earth's surfaces.",
                "examples": [
                    "We use maps in geography class."
                ]
            }
        ],
        "subtext": "related to school subjects",
        "opposite": null,
        "transcription": "ʤiˈɑgrəfi",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_003",
        "word": "lesson",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lessons",
        "definitions": [
            {
                "text": "A period of time when you learn something with a teacher.",
                "examples": [
                    "I have an English lesson today."
                ]
            }
        ],
        "subtext": "related to learning studying",
        "opposite": null,
        "transcription": "ˈlɛsən",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_004",
        "word": "homework",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "Work that a teacher gives a student to do at home.",
                "examples": [
                    "I need to do my homework."
                ]
            }
        ],
        "subtext": "related to learning studying",
        "opposite": null,
        "transcription": "ˈhoʊmˌwərk",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_003",
        "word": "dictionary",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dictionaries",
        "definitions": [
            {
                "text": "A book that contains a list of words in alphabetical order and explains their meanings.",
                "examples": [
                    "Look it up in the dictionary."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "ˈdɪkʃəˌnɛri",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_004",
        "word": "word",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "words",
        "definitions": [
            {
                "text": "A single unit of language.",
                "examples": [
                    "What does this word mean?"
                ]
            }
        ],
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "wərd",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_005",
        "word": "board",
        "emoji": "📋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "boards",
        "definitions": [
            {
                "text": "A flat surface at the front of a classroom that a teacher writes on.",
                "examples": [
                    "Look at the board.",
                    "The teacher writes the date on the board."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "bɔrd",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_006",
        "word": "eraser",
        "emoji": "🧽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "erasers",
        "subtext": "related to school stationery",
        "synonyms": [
            "🇬🇧 rubber"
        ],
        "definitions": [
            {
                "text": "A small piece of rubber or plastic used to remove pencil marks.",
                "examples": [
                    "Can I borrow your eraser?"
                ]
            }
        ],
        "opposite": null,
        "transcription": "ɪˈreɪsər",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_007",
        "word": "pencil case",
        "emoji": "✏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pencil cases",
        "definitions": [
            {
                "text": "A small bag or box for keeping pencils and pens.",
                "examples": [
                    "My pens are in my pencil case."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈpɛnsəl keɪs",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_008",
        "word": "notebook",
        "emoji": "📓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "notebooks",
        "definitions": [
            {
                "text": "A book with empty pages that you write in.",
                "examples": [
                    "I write my lessons in a notebook."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈnoʊtˌbʊk",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_009",
        "word": "textbook",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "textbooks",
        "definitions": [
            {
                "text": "A book that contains information about a subject that people study.",
                "examples": [
                    "Open your English textbooks to page ten."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈtɛkstˌbʊk",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_010",
        "word": "backpack",
        "emoji": "🎒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "backpacks",
        "definitions": [
            {
                "text": "A bag that you carry on your back.",
                "examples": [
                    "I put my books in my backpack."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈbækˌpæk",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_005",
        "word": "poster",
        "emoji": "📜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "posters",
        "definitions": [
            {
                "text": "A large printed picture or notice that you put on a wall.",
                "examples": [
                    "There is a map poster in the classroom."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "ˈpoʊstər",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_006",
        "word": "sentence",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sentences",
        "definitions": [
            {
                "text": "A group of words that expresses a complete thought.",
                "examples": [
                    "Write a sentence about your family."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "ˈsɛntəns",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_007",
        "word": "page",
        "emoji": "📄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pages",
        "definitions": [
            {
                "text": "One side of a sheet of paper in a book or magazine.",
                "examples": [
                    "The answer is on page five."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "peɪʤ",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_011",
        "word": "envelope",
        "emoji": "✉️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "envelopes",
        "definitions": [
            {
                "text": "A flat paper container used for sending letters.",
                "examples": [
                    "Put the letter in the envelope."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈɛnvəˌloʊp",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_012",
        "word": "stamp",
        "emoji": "🧧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stamps",
        "definitions": [
            {
                "text": "A small piece of paper that you buy and stick onto an envelope.",
                "examples": [
                    "I need a stamp for this letter."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "stæmp",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_013",
        "word": "stapler",
        "emoji": "🖇️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "staplers",
        "definitions": [
            {
                "text": "A small device used for joining together sheets of paper with a small piece of metal.",
                "examples": [
                    "I need a stapler for these reports."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈsteɪpələr",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_014",
        "word": "glue",
        "emoji": "🧪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A sticky substance used for joining things together.",
                "examples": [
                    "Use some glue to fix the picture."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "glu",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_015",
        "word": "scissors",
        "emoji": "✂️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "scissors",
        "definitions": [
            {
                "text": "A tool used for cutting paper, cloth, etc.",
                "examples": [
                    "Where are the scissors? I need to cut this paper."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈsɪzərz",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_016",
        "word": "calculator",
        "emoji": "🔢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "calculators",
        "definitions": [
            {
                "text": "A small electronic device used for adding, subtracting, etc.",
                "examples": [
                    "I use a calculator for my maths homework."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "opposite": null,
        "transcription": "ˈkælkjəˌleɪtər",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_008",
        "word": "globe",
        "emoji": "🌍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "globes",
        "definitions": [
            {
                "text": "A round object with a map of the world on it.",
                "examples": [
                    "Look for Italy on the globe."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "gloʊb",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_005",
        "word": "exam",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "exams",
        "subtext": "examination, pass an exam, fail an exam",
        "definitions": [
            {
                "text": "A formal test of a person's knowledge or proficiency in a particular subject.",
                "examples": [
                    "I have an English exam tomorrow."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ɪgˈzæm",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_009",
        "word": "example",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "examples",
        "subtext": "for example",
        "definitions": [
            {
                "text": "A thing that is representative of all such things.",
                "examples": [
                    "Can you give me an example?"
                ]
            }
        ],
        "opposite": null,
        "transcription": "ɪgˈzæmpəl",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_006",
        "word": "test",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tests",
        "subtext": "take a test, pass a test",
        "definitions": [
            {
                "text": "A set of questions or practical activities used to measure someone's knowledge or ability.",
                "examples": [
                    "I have a maths test today."
                ]
            }
        ],
        "opposite": null,
        "transcription": "tɛst",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_types_of_education_002",
        "word": "university",
        "emoji": "🎓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "universities",
        "subtext": "study at university",
        "definitions": [
            {
                "text": "A place where people study for a degree.",
                "examples": [
                    "She is studying at university."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˌjunəˈvərsəti",
        "lang": "en",
        "level": "starter",
        "theme": "types_of_education",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_007",
        "word": "skill",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "skills",
        "subtext": "language skills",
        "definitions": [
            {
                "text": "The ability to do something well.",
                "examples": [
                    "She has good communication skills."
                ]
            }
        ],
        "opposite": null,
        "transcription": "skɪl",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_008",
        "word": "class",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "classes",
        "subtext": "English class, go to class",
        "definitions": [
            {
                "text": "A group of students who are taught together.",
                "examples": [
                    "I have an English class at nine o'clock."
                ]
            }
        ],
        "opposite": null,
        "transcription": "klæs",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_010",
        "word": "classroom",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "classrooms",
        "definitions": [
            {
                "text": "A room in a school where students have lessons.",
                "examples": [
                    "The students are in the classroom."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "opposite": null,
        "transcription": "ˈklæsˌrum",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_school_017",
        "word": "tape",
        "emoji": "🎞️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tapes",
        "definitions": [
            {
                "text": "A long, thin piece of plastic that is sticky on one side.",
                "examples": [
                    "Use some tape to fix the envelope."
                ]
            }
        ],
        "subtext": "sticky tape",
        "transcription": "teɪp",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_009",
        "word": "try",
        "emoji": "🎯",
        "subtext": "try to do / try hard / try something new / give it a try",
        "form": "verb",
        "definitions": [
            {
                "text": "To attempt to do something; to test something.",
                "examples": [
                    "I always try to reply to all messages within an hour."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tried",
        "v3": "tried",
        "group": "regular",
        "opposite": "give up",
        "transcription": "traɪ",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_010",
        "word": "write",
        "emoji": "✍️",
        "subtext": "write to, write an email / write a report / write a letter / write notes",
        "opposite": "read",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "To put words on paper or screen.",
                "examples": [
                    "I write emails all day.",
                    "She writes a report every Friday."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wrote",
        "v3": "written",
        "group": "irregular",
        "transcription": "raɪt",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_011",
        "word": "read",
        "image": "images/vocabulary/actions/to read.png",
        "emoji": "📖",
        "subtext": "read a book / read the news / read a contract / read carefully",
        "opposite": "write",
        "oppositeEmoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "To look at and understand written words.",
                "examples": [
                    "She reads the news every morning.",
                    "He reads contracts."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "read",
        "v3": "read",
        "group": "irregular",
        "transcription": "rɛd",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_012",
        "word": "listen",
        "emoji": "🎧",
        "subtext": "listen to music / listen carefully / listen to a podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay attention to sounds or speech.",
                "examples": [
                    "I listen to podcasts at work.",
                    "She listens carefully."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "listened",
        "v3": "listened",
        "group": "regular",
        "opposite": "say",
        "transcription": "ˈlɪsən",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_011",
        "word": "repeat",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
        "form": "verb",
        "definitions": [
            {
                "text": "To say or do something again.",
                "examples": [
                    "Please repeat that.",
                    "He repeated the instruction twice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repeated",
        "v3": "repeated",
        "group": "regular",
        "opposite": "change",
        "transcription": "rɪˈpit",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_013",
        "word": "know",
        "emoji": "🧠",
        "subtext": "know someone / know the answer / know a place / know how to",
        "form": "verb",
        "definitions": [
            {
                "text": "To have information or awareness about something.",
                "examples": [
                    "I know his name.",
                    "She knows the answer.",
                    "Do you know him?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "knew",
        "v3": "known",
        "group": "irregular",
        "opposite": "wonder",
        "transcription": "noʊ",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_014",
        "word": "remember",
        "emoji": "🧠",
        "subtext": "remember to do / remember a name / remember clearly",
        "opposite": "forget",
        "oppositeEmoji": "🤔",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a memory of; to not forget.",
                "examples": [
                    "Please remember the deadline.",
                    "She remembers every client."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "remembered",
        "v3": "remembered",
        "group": "regular",
        "transcription": "rɪˈmɛmbər",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_015",
        "word": "forget",
        "emoji": "🤔",
        "subtext": "forget a name / forget to do / forget about / completely forget",
        "opposite": "remember",
        "oppositeEmoji": "🧠",
        "form": "verb",
        "definitions": [
            {
                "text": "To fail to remember.",
                "examples": [
                    "Don't forget the meeting.",
                    "He always forgets passwords."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "forgot",
        "v3": "forgotten",
        "group": "irregular",
        "transcription": "fərˈgɛt",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_016",
        "word": "learn",
        "emoji": "📚",
        "subtext": "learn a language / learn a skill / learn from / learn how to",
        "opposite": "teach",
        "oppositeEmoji": "👨‍🏫",
        "form": "verb",
        "definitions": [
            {
                "text": "To gain knowledge or skill.",
                "examples": [
                    "She is learning Spanish for her new job abroad."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "learned / learnt",
        "v3": "learned / learnt",
        "group": "both",
        "transcription": "lərn",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_017",
        "word": "pass",
        "emoji": "🏔️",
        "subtext": "pass an exam / pass the ball / pass time / pass the sugar",
        "opposite": "fail",
        "oppositeEmoji": "❌",
        "form": "verb",
        "definitions": [
            {
                "text": "To go past something or to succeed in an exam.",
                "examples": [
                    "I pass the park on my way home.",
                    "I hope I pass the test."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "passed",
        "v3": "passed",
        "group": "regular",
        "transcription": "pæs",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_018",
        "word": "study",
        "emoji": "📖",
        "subtext": "study English / study for an exam / study hard / self-study",
        "form": "verb",
        "definitions": [
            {
                "text": "To read and practise to gain knowledge.",
                "examples": [
                    "He is studying for a professional qualification."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "studied",
        "v3": "studied",
        "group": "regular",
        "opposite": "play",
        "transcription": "ˈstədi",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_019",
        "word": "teach",
        "emoji": "👨‍🏫",
        "subtext": "teach someone / teach a subject / teach how to / teach a class",
        "form": "verb",
        "definitions": [
            {
                "text": "To give instruction in a subject.",
                "examples": [
                    "She teaches communication skills to senior managers."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "taught",
        "v3": "taught",
        "group": "irregular",
        "opposite": "learn",
        "transcription": "tiʧ",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_020",
        "word": "mean",
        "emoji": "❔",
        "subtext": "mean something / what does it mean / mean to do / I didn't mean to",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a particular meaning; to intend.",
                "examples": [
                    "What does this clause in the contract mean?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "meant",
        "v3": "meant",
        "group": "irregular",
        "opposite": "nonsense",
        "transcription": "min",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_012",
        "word": "spell",
        "emoji": "🔤",
        "form": "verb",
        "subtext": "spell your name / spell correctly",
        "synonyms": [
            "lettering"
        ],
        "definitions": [
            {
                "text": "To say or write the letters of a word in the correct order.",
                "examples": [
                    "How do you spell your name?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spelled / spelt",
        "v3": "spelled / spelt",
        "group": "irregular",
        "opposite": "misspell",
        "transcription": "spɛl",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_013",
        "word": "point",
        "emoji": "☝️",
        "form": "verb",
        "subtext": "point at / to, point to / point at",
        "synonyms": [
            "indicate"
        ],
        "definitions": [
            {
                "text": "To show something by holding out your finger towards it.",
                "examples": [
                    "Point to the window.",
                    "He pointed at the map."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pointed",
        "v3": "pointed",
        "group": "regular",
        "opposite": "hide",
        "transcription": "pɔɪnt",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_014",
        "word": "shout",
        "emoji": "📢",
        "form": "verb",
        "subtext": "shout at / don't shout",
        "synonyms": [
            "yell"
        ],
        "definitions": [
            {
                "text": "To say something very loudly.",
                "examples": [
                    "Don't shout in the classroom."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shouted",
        "v3": "shouted",
        "group": "regular",
        "opposite": "whisper",
        "transcription": "ʃaʊt",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_015",
        "word": "tick",
        "emoji": "✅",
        "form": "verb",
        "subtext": "tick the box / tick correctly",
        "synonyms": [
            "check"
        ],
        "definitions": [
            {
                "text": "To put a mark (✓) next to something to show it is correct.",
                "examples": [
                    "Tick the correct answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ticked",
        "v3": "ticked",
        "group": "regular",
        "opposite": "cross",
        "transcription": "tɪk",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_016",
        "word": "cross",
        "emoji": "❌",
        "form": "verb",
        "subtext": "cross out / cross the answer",
        "synonyms": [
            "x-mark"
        ],
        "definitions": [
            {
                "text": "To put a mark (X) next to something to show it is wrong.",
                "examples": [
                    "Cross the wrong answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "crossed",
        "v3": "crossed",
        "group": "regular",
        "opposite": "tick",
        "transcription": "krɔs",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_017",
        "word": "colour",
        "emoji": "🖍️",
        "form": "verb",
        "subtext": "colour the picture / use colours",
        "synonyms": [
            "color"
        ],
        "definitions": [
            {
                "text": "To use a pen or pencil to put colour on a picture.",
                "examples": [
                    "Colour the picture blue."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "coloured",
        "v3": "coloured",
        "group": "regular",
        "opposite": "erase",
        "transcription": "ˈkələr",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_018",
        "word": "whisper",
        "emoji": "🤫",
        "form": "verb",
        "subtext": "whisper a secret",
        "synonyms": [
            "murmur",
            "speak softly"
        ],
        "definitions": [
            {
                "text": "To speak very quietly so that other people cannot hear you.",
                "examples": [
                    "She whispered the answer to me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "whispered",
        "v3": "whispered",
        "group": "regular",
        "opposite": "shout",
        "transcription": "ˈwɪspər",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_019",
        "word": "explain",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ɪkˈspleɪn",
        "definitions": [
            {
                "text": "To make something clear or easy to understand by describing or giving information about it.",
                "examples": [
                    "Can you explain this rule?",
                    "The teacher explained the lesson."
                ]
            }
        ],
        "v2": "explained",
        "v3": "explained",
        "classification": "regular",
        "group": "regular",
        "subtext": "explain something to someone",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_021",
        "word": "alphabet",
        "emoji": "🔤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A set of letters used for writing a language.",
                "examples": [
                    "The English alphabet has 26 letters."
                ]
            }
        ],
        "subtext": "letters",
        "transcription": "ˈælfəˌbɛt",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
(function() {
    const data = [
    {
        "id": "en_starter_leisure_activities_003",
        "word": "exercise",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "To do physical activity for health and fitness.",
                "examples": [
                    "He exercises four times a week at the gym."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "exercised",
        "subtext": "exercise regularly / exercise at the gym / exercise outdoors",
        "group": "regular",
        "transcription": "ˈɛksərˌsaɪz",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "rest"
        ]
    },
    {
        "id": "en_starter_leisure_activities_004",
        "word": "holiday",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "holidays",
        "subtext": "vacation, go on holiday",
        "synonyms": [
            "🇺🇸 vacation"
        ],
        "definitions": [
            {
                "text": "A period of time away from work when you travel or relax.",
                "examples": [
                    "We have a holiday in July."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈhɑlɪˌdeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null
    },
    {
        "id": "en_starter_leisure_activities_005",
        "word": "free time",
        "emoji": "🎮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Time when you are not working and can do what you want.",
                "examples": [
                    "I read books in my free time."
                ]
            }
        ],
        "subtext": "related to leisure activities",
        "opposite": null,
        "transcription": "fri taɪm",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_004",
        "word": "cinema",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cinemas",
        "subtext": "go to the cinema, movie theater",
        "definitions": [
            {
                "text": "A place where you go to watch films.",
                "examples": [
                    "Let's go to the cinema tonight."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈsɪnəmə",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_005",
        "word": "museum",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "museums",
        "definitions": [
            {
                "text": "A building where you can look at important objects.",
                "examples": [
                    "The museum is very interesting."
                ]
            }
        ],
        "subtext": "related to places culture leisure",
        "opposite": null,
        "transcription": "mˈjuziəm",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_006",
        "word": "library",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "libraries",
        "definitions": [
            {
                "text": "A place where you can read or borrow books.",
                "examples": [
                    "I go to the library to study."
                ]
            }
        ],
        "subtext": "related to places culture leisure",
        "opposite": null,
        "transcription": "ˈlaɪbrɛˌri",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_sports_001",
        "word": "ball",
        "emoji": "⚽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "balls",
        "definitions": [
            {
                "text": "A round object used in games and sports.",
                "examples": [
                    "He kicked the ball."
                ]
            }
        ],
        "subtext": "related to sports equipment",
        "opposite": null,
        "transcription": "bɔl",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_007",
        "word": "art",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The creation of works such as paintings or sculptures.",
                "examples": [
                    "I love modern art."
                ]
            }
        ],
        "subtext": "related to places culture leisure",
        "opposite": null,
        "transcription": "ɑrt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_music_003",
        "word": "band",
        "emoji": "🎸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bands",
        "definitions": [
            {
                "text": "A group of people who play music together.",
                "examples": [
                    "He plays in a rock band."
                ]
            }
        ],
        "subtext": "related to music",
        "opposite": null,
        "transcription": "bænd",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null
    },
    {
        "id": "en_starter_music_004",
        "word": "concert",
        "emoji": "🎵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "concerts",
        "definitions": [
            {
                "text": "A performance of music by one or more musicians or singers.",
                "examples": [
                    "Are you going to the concert tonight?"
                ]
            }
        ],
        "subtext": "related to music",
        "opposite": null,
        "transcription": "ˈkɑnsərt",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null
    },
    {
        "id": "en_starter_leisure_activities_006",
        "word": "game",
        "emoji": "🎮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "games",
        "definitions": [
            {
                "text": "An activity or sport that people play for fun.",
                "examples": [
                    "Let's play a game."
                ]
            }
        ],
        "subtext": "related to leisure activities",
        "opposite": null,
        "transcription": "geɪm",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null
    },
    {
        "id": "en_starter_music_005",
        "word": "music",
        "emoji": "🎵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The sound of people singing or playing instruments.",
                "examples": [
                    "I like listening to music."
                ]
            }
        ],
        "subtext": "related to music",
        "opposite": null,
        "transcription": "mˈjuzɪk",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null
    },
    {
        "id": "en_starter_music_006",
        "word": "song",
        "emoji": "🎶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "songs",
        "definitions": [
            {
                "text": "A short piece of music with words that you sing.",
                "examples": [
                    "This is a beautiful song."
                ]
            }
        ],
        "subtext": "related to music",
        "opposite": null,
        "transcription": "sɔŋ",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null
    },
    {
        "id": "en_starter_sports_002",
        "word": "sport",
        "emoji": "⚽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sports",
        "definitions": [
            {
                "text": "A game or activity such as football or tennis.",
                "examples": [
                    "My favorite sport is tennis."
                ]
            }
        ],
        "subtext": "related to common sports",
        "opposite": null,
        "transcription": "spɔrt",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null
    },
    {
        "id": "en_starter_sports_003",
        "word": "football",
        "emoji": "⚽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "related to common sports",
        "synonyms": [
            "soccer"
        ],
        "definitions": [
            {
                "text": "A game played by two teams of eleven players who kick a ball.",
                "examples": [
                    "They are playing football in the park."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈfʊtˌbɔl",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null
    },
    {
        "id": "en_starter_sports_004",
        "word": "tennis",
        "emoji": "🎾",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A game played by two or four players with rackets and a ball.",
                "examples": [
                    "Do you want to play tennis?"
                ]
            }
        ],
        "subtext": "related to common sports",
        "opposite": null,
        "transcription": "ˈtɛnɪs",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null
    },
    {
        "id": "en_starter_music_007",
        "word": "guitar",
        "emoji": "🎸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "guitars",
        "definitions": [
            {
                "text": "A musical instrument with strings that you play with your fingers.",
                "examples": [
                    "He plays the guitar."
                ]
            }
        ],
        "subtext": "related to music",
        "opposite": null,
        "transcription": "gɪˈtɑr",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null
    },
    {
        "id": "en_starter_music_008",
        "word": "piano",
        "emoji": "🎹",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pianos",
        "definitions": [
            {
                "text": "A large musical instrument with a row of black and white keys.",
                "examples": [
                    "She is learning to play the piano."
                ]
            }
        ],
        "subtext": "related to music",
        "opposite": null,
        "transcription": "piˈænə",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_008",
        "word": "zoo",
        "emoji": "🦁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "zoos",
        "definitions": [
            {
                "text": "A place where many kinds of wild animals are kept so that people can look at them.",
                "examples": [
                    "Let's go to the zoo."
                ]
            }
        ],
        "subtext": "related to places culture leisure",
        "opposite": null,
        "transcription": "zu",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_009",
        "word": "theatre",
        "emoji": "🎭",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "theatres",
        "subtext": "related to places culture leisure",
        "synonyms": [
            "theater"
        ],
        "definitions": [
            {
                "text": "A building with a stage where people go to watch plays.",
                "examples": [
                    "We are going to the theatre tonight."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈθiətər",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_toys_games_001",
        "word": "toy",
        "emoji": "🧸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "toys",
        "definitions": [
            {
                "text": "An object for children to play with.",
                "examples": [
                    "The child is playing with a toy car."
                ]
            }
        ],
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "tɔɪ",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null
    },
    {
        "id": "en_starter_toys_games_002",
        "word": "doll",
        "emoji": "🪆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dolls",
        "definitions": [
            {
                "text": "A toy that looks like a small person or baby.",
                "examples": [
                    "She likes playing with her dolls."
                ]
            }
        ],
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "dɑl",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null
    },
    {
        "id": "en_starter_toys_games_003",
        "word": "robot",
        "emoji": "🤖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "robots",
        "definitions": [
            {
                "text": "A machine that can do work by itself.",
                "examples": [
                    "I have a toy robot."
                ]
            }
        ],
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "ˈroʊˌbət",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null
    },
    {
        "id": "en_starter_toys_games_004",
        "word": "monster",
        "emoji": "👹",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "monsters",
        "definitions": [
            {
                "text": "A large, scary, imaginary creature.",
                "examples": [
                    "The story is about a friendly monster."
                ]
            }
        ],
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "ˈmɑnstər",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null
    },
    {
        "id": "en_starter_toys_games_005",
        "word": "alien",
        "emoji": "👽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "aliens",
        "definitions": [
            {
                "text": "A creature from another planet.",
                "examples": [
                    "Do you believe in aliens?"
                ]
            }
        ],
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "ˈeɪliən",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null
    },
    {
        "id": "en_starter_toys_games_006",
        "word": "kite",
        "emoji": "🪁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "kites",
        "definitions": [
            {
                "text": "A toy made of paper or cloth that flies in the wind on a long string.",
                "examples": [
                    "Let's fly a kite in the park."
                ]
            }
        ],
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "kaɪt",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null
    },
    {
        "id": "en_starter_toys_games_007",
        "word": "balloon",
        "emoji": "🎈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "balloons",
        "definitions": [
            {
                "text": "A small colored rubber bag filled with air.",
                "examples": [
                    "We have many balloons for the party."
                ]
            }
        ],
        "subtext": "related to toys games",
        "opposite": null,
        "transcription": "bəˈlun",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null
    },
    {
        "id": "en_starter_leisure_017",
        "word": "hobby",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hobbies",
        "definitions": [
            {
                "text": "An activity that you do for fun in your free time.",
                "examples": [
                    "My hobby is reading."
                ]
            }
        ],
        "subtext": "related to hobbies interests",
        "opposite": null,
        "transcription": "ˈhɑbi",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_leisure_activities_007",
        "word": "playground",
        "emoji": "🛝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "playgrounds",
        "definitions": [
            {
                "text": "An outside area where children can play.",
                "examples": [
                    "The children are at the playground."
                ]
            }
        ],
        "subtext": "related to leisure activities",
        "opposite": null,
        "transcription": "ˈpleɪˌgraʊnd",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null
    },
    {
        "id": "en_starter_books_reading_001",
        "word": "story",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stories",
        "definitions": [
            {
                "text": "A description of events that can be true or imaginary.",
                "examples": [
                    "Tell me a story.",
                    "I like stories about animals."
                ]
            }
        ],
        "subtext": "related to books reading",
        "opposite": null,
        "transcription": "ˈstɔri",
        "lang": "en",
        "level": "starter",
        "theme": "books_reading",
        "sub_theme": null
    },
    {
        "id": "en_starter_places_010",
        "word": "painting",
        "emoji": "🖼️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "paintings",
        "definitions": [
            {
                "text": "A picture made with paint.",
                "examples": [
                    "There is a beautiful painting on the wall."
                ]
            }
        ],
        "subtext": "related to places culture leisure",
        "opposite": null,
        "transcription": "ˈpeɪnɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_starter_sports_005",
        "word": "basketball",
        "emoji": "🏀",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A game where two teams try to throw a ball through a high net.",
                "examples": [
                    "He plays basketball every Wednesday."
                ]
            }
        ],
        "subtext": "related to common sports",
        "opposite": null,
        "transcription": "ˈbæskətˌbɔl",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null
    },
    {
        "id": "en_starter_sports_006",
        "word": "baseball",
        "emoji": "⚾",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A game played with a bat and ball by two teams of nine players.",
                "examples": [
                    "Baseball is popular in the USA."
                ]
            }
        ],
        "subtext": "related to common sports",
        "opposite": null,
        "transcription": "ˈbeɪsˈbɔl",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null
    },
    {
        "id": "en_starter_sports_007",
        "word": "bat",
        "emoji": "🏏",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bats",
        "definitions": [
            {
                "text": "A specially shaped piece of wood used for hitting the ball in games like baseball or cricket.",
                "examples": [
                    "He is holding a baseball bat."
                ]
            }
        ],
        "subtext": "related to sports equipment",
        "opposite": null,
        "transcription": "bæt",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null
    },
    {
        "id": "en_starter_music_009",
        "word": "violin",
        "emoji": "🎻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "violins",
        "definitions": [
            {
                "text": "A musical instrument with four strings that you hold under your chin and play with a bow.",
                "examples": [
                    "He plays the violin."
                ]
            }
        ],
        "subtext": "related to musical instruments",
        "opposite": null,
        "transcription": "vaɪəˈlɪn",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null
    },
    {
        "id": "en_starter_music_010",
        "word": "drums",
        "emoji": "🥁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A set of musical instruments that you hit with sticks.",
                "examples": [
                    "She plays the drums in a band."
                ]
            }
        ],
        "subtext": "related to musical instruments",
        "opposite": null,
        "transcription": "drəmz",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null
    },
    {
        "id": "en_starter_music_011",
        "word": "flute",
        "emoji": "🪈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "flutes",
        "definitions": [
            {
                "text": "A musical instrument in the shape of a pipe with holes that you blow across.",
                "examples": [
                    "She is playing the flute."
                ]
            }
        ],
        "subtext": "related to musical instruments",
        "opposite": null,
        "transcription": "flut",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null
    },
    {
        "id": "en_starter_cinema_film_001",
        "word": "film",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "films",
        "subtext": "movie, watch a film",
        "definitions": [
            {
                "text": "A story or series of events that is shown as a sequence of moving pictures.",
                "examples": [
                    "I like watching films."
                ]
            }
        ],
        "opposite": null,
        "transcription": "fɪlm",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_cinema_film_002",
        "word": "movie",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "movies",
        "subtext": "film, watch a movie",
        "definitions": [
            {
                "text": "A series of moving pictures that tell a story.",
                "examples": [
                    "Let's watch a movie tonight."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈmuvi",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_leisure_activities_008",
        "word": "party",
        "emoji": "🎉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "parties",
        "subtext": "birthday party, go to a party",
        "definitions": [
            {
                "text": "A social event where people eat, drink, and dance.",
                "examples": [
                    "We are having a party on Saturday."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈpɑrti",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null
    },
    {
        "id": "en_starter_leisure_018",
        "word": "photo",
        "emoji": "📷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "photos",
        "subtext": "photograph, take a photo",
        "definitions": [
            {
                "text": "A picture made with a camera.",
                "examples": [
                    "Can I take a photo of you?"
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈfoʊˌtoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_leisure_019",
        "word": "picture",
        "emoji": "🖼️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pictures",
        "subtext": "draw a picture, take a picture",
        "definitions": [
            {
                "text": "A drawing, painting, or photo.",
                "examples": [
                    "The children are drawing pictures."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈpɪkʧər",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_leisure_activities_009",
        "word": "guest",
        "emoji": "🏨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "guests",
        "definitions": [
            {
                "text": "A person who is staying in a hotel or visiting someone's home.",
                "examples": [
                    "We have two guests staying with us."
                ]
            }
        ],
        "subtext": "related to leisure activities",
        "opposite": null,
        "transcription": "gɛst",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null
    },
    {
        "id": "en_starter_leisure_activities_010",
        "word": "gym",
        "emoji": "🏋️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "gyms",
        "subtext": "go to the gym",
        "synonyms": [
            "fitness center"
        ],
        "definitions": [
            {
                "text": "A room or building with equipment for doing physical exercise.",
                "examples": [
                    "I go to the gym three times a week."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ʤɪm",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null
    },
    {
        "id": "en_starter_leisure_activities_011",
        "word": "present",
        "emoji": "🎁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "presents",
        "definitions": [
            {
                "text": "Something that you give to someone, especially on a special occasion.",
                "examples": [
                    "I bought a birthday present for my friend."
                ]
            }
        ],
        "subtext": "birthday present",
        "synonyms": [
            "gift"
        ],
        "transcription": "ˈprɛzənt",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null
    },
    {
        "id": "en_starter_leisure_activities_012",
        "word": "watch",
        "emoji": "📺",
        "form": "verb",
        "subtext": "watch TV / watch a film / watch the news / watch closely",
        "definitions": [
            {
                "text": "To look at something for a period of time.",
                "examples": [
                    "She watches the market news every morning before work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "watched",
        "v3": "watched",
        "group": "regular",
        "transcription": "wɔʧ",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ]
    },
    {
        "id": "en_starter_leisure_activities_013",
        "word": "play",
        "emoji": "🎮",
        "subtext": "play sport / play a game / play music / play a role",
        "form": "verb",
        "definitions": [
            {
                "text": "To take part in a game or sport; to produce music.",
                "examples": [
                    "He plays football at the weekend to de-stress."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "played",
        "group": "regular",
        "transcription": "pleɪ",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "work"
        ]
    },
    {
        "id": "en_starter_sports_008",
        "word": "run",
        "emoji": "🏃",
        "subtext": "run a race / run a business / run out of / run late",
        "form": "verb",
        "definitions": [
            {
                "text": "To move very fast on your legs.",
                "examples": [
                    "I run in the park.",
                    "He runs to catch the bus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ran",
        "v3": "run",
        "group": "irregular",
        "transcription": "rən",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ]
    },
    {
        "id": "en_starter_leisure_activities_014",
        "word": "win",
        "emoji": "🏆",
        "subtext": "win a game / win a prize / win an award / win a contract",
        "form": "verb",
        "definitions": [
            {
                "text": "To be the best in a game or competition.",
                "examples": [
                    "We want to win the game."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "won",
        "v3": "won",
        "group": "irregular",
        "transcription": "wɪn",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "lose"
        ]
    },
    {
        "id": "en_starter_cinema_film_003",
        "word": "draw",
        "emoji": "🎨",
        "subtext": "draw a picture / draw a conclusion / draw attention / draw a line",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a picture with a pen or pencil.",
                "examples": [
                    "I like to draw birds.",
                    "Can you draw a map?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew",
        "v3": "drawn",
        "group": "irregular",
        "opposite": null,
        "transcription": "drɔ",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_music_012",
        "word": "dance",
        "emoji": "💃",
        "subtext": "dance to music / dance together / slow dance",
        "synonyms": [
            "go dancing"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To move your body to music.",
                "examples": [
                    "I love to dance.",
                    "They are dancing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "danced",
        "group": "regular",
        "transcription": "dæns",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "antonyms": [
            "sit"
        ]
    },
    {
        "id": "en_starter_music_013",
        "word": "sing",
        "emoji": "🎤",
        "subtext": "sing a song / sing along / sing well",
        "synonyms": [
            "lead singer"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To make musical sounds with your voice.",
                "examples": [
                    "I like to sing in the shower.",
                    "She sings very well."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sang",
        "v3": "sung",
        "group": "irregular",
        "transcription": "sɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "antonyms": [
            "be quiet"
        ]
    },
    {
        "id": "en_starter_playing_watching_sport_001",
        "word": "jump",
        "emoji": "🦘",
        "subtext": "jump high / jump over / jump up / jump in",
        "form": "verb",
        "definitions": [
            {
                "text": "To push yourself off the ground with your legs.",
                "examples": [
                    "Can you jump high?",
                    "The cat jumped onto the table."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "jumped",
        "v3": "jumped",
        "group": "regular",
        "transcription": "ʤəmp",
        "lang": "en",
        "level": "starter",
        "theme": "playing_watching_sport",
        "sub_theme": null,
        "antonyms": [
            "fall"
        ]
    },
    {
        "id": "en_starter_sports_009",
        "word": "swim",
        "emoji": "🏊",
        "subtext": "swim across / swim laps / swim well",
        "synonyms": [
            "go swimming"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To move through water using your arms and legs.",
                "examples": [
                    "I swim every morning.",
                    "Can you swim?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "swam",
        "v3": "swum",
        "group": "irregular",
        "transcription": "swɪm",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "sink"
        ]
    },
    {
        "id": "en_starter_leisure_activities_015",
        "word": "celebrate",
        "definitions": [
            {
                "text": "To do something enjoyable for a special occasion.",
                "examples": [
                    "They celebrate every work anniversary together."
                ]
            }
        ],
        "subtext": "celebrate a birthday / celebrate success / celebrate together",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrated",
        "v3": "celebrated",
        "emoji": "🎉",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈsɛləˌbreɪt",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "mourn"
        ]
    },
    {
        "id": "en_starter_leisure_activities_016",
        "word": "relax",
        "emoji": "🧘",
        "subtext": "relax at home / relax after work / relax on holiday",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop working and rest; to become less tense.",
                "examples": [
                    "I relax at the weekend and never check emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "relaxed",
        "v3": "relaxed",
        "group": "regular",
        "transcription": "rɪˈlæks",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "work"
        ]
    },
    {
        "id": "en_starter_sports_010",
        "word": "kick",
        "emoji": "🦶",
        "form": "verb",
        "subtext": "kick a ball / kick hard",
        "synonyms": [
            "strike"
        ],
        "definitions": [
            {
                "text": "To hit something with your foot.",
                "examples": [
                    "Kick the ball!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "kicked",
        "v3": "kicked",
        "group": "regular",
        "transcription": "kɪk",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "catch"
        ]
    },
    {
        "id": "en_starter_sports_011",
        "word": "throw",
        "emoji": "⚾",
        "form": "verb",
        "subtext": "throw a ball / throw away",
        "synonyms": [
            "toss"
        ],
        "definitions": [
            {
                "text": "To make something move through the air by pushing it out of your hand.",
                "examples": [
                    "Can you throw the ball to me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "threw",
        "v3": "thrown",
        "group": "irregular",
        "transcription": "θroʊ",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "catch"
        ]
    },
    {
        "id": "en_starter_sports_012",
        "word": "bounce",
        "emoji": "🏀",
        "form": "verb",
        "subtext": "bounce a ball",
        "synonyms": [
            "rebound",
            "bouncing"
        ],
        "definitions": [
            {
                "text": "To move up or away after hitting a surface.",
                "examples": [
                    "The ball is bouncing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "bounced",
        "v3": "bounced",
        "group": "regular",
        "transcription": "baʊns",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "stop"
        ]
    },
    {
        "id": "en_starter_leisure_020",
        "word": "paint",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "paint a picture",
        "synonyms": [
            "color",
            "painting"
        ],
        "definitions": [
            {
                "text": "To make a picture using paint.",
                "examples": [
                    "I like to paint flowers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "painted",
        "v3": "painted",
        "group": "regular",
        "transcription": "peɪnt",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "erase"
        ]
    },
    {
        "id": "en_starter_leisure_activities_017",
        "word": "hop",
        "emoji": "🐇",
        "form": "verb",
        "subtext": "hop around / hop like a rabbit",
        "synonyms": [
            "jump"
        ],
        "definitions": [
            {
                "text": "To jump on one foot.",
                "examples": [
                    "Can you hop like a rabbit?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hopped",
        "v3": "hopped",
        "group": "regular",
        "transcription": "hɑp",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ]
    },
    {
        "id": "en_starter_leisure_activities_018",
        "word": "skip",
        "emoji": "🏃",
        "form": "verb",
        "subtext": "skip rope",
        "synonyms": [
            "jump",
            "skipping"
        ],
        "definitions": [
            {
                "text": "To move along by jumping from one foot to the other.",
                "examples": [
                    "The children are skipping in the playground."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "skipped",
        "v3": "skipped",
        "group": "regular",
        "transcription": "skɪp",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ]
    },
    {
        "id": "en_starter_toys_games_008",
        "word": "hide",
        "emoji": "🙈",
        "subtext": "hide and seek / hide from someone / hide something",
        "form": "verb",
        "definitions": [
            {
                "text": "To put something or someone in a place where they cannot be seen or found.",
                "examples": [
                    "He is hiding behind the door."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "hid",
        "v3": "hidden",
        "group": "irregular",
        "transcription": "haɪd",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null,
        "antonyms": [
            "show"
        ]
    },
    {
        "id": "en_starter_toys_games_009",
        "word": "seek",
        "emoji": "🔍",
        "form": "verb",
        "subtext": "hide and seek / seek help",
        "synonyms": [
            "look for"
        ],
        "definitions": [
            {
                "text": "To try to find or get something.",
                "examples": [
                    "They are playing hide and seek."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sought",
        "v3": "sought",
        "group": "irregular",
        "transcription": "sik",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ]
    },
    {
        "id": "en_starter_leisure_activities_019",
        "word": "act",
        "emoji": "🎭",
        "form": "verb",
        "subtext": "act in a play / act quickly",
        "definitions": [
            {
                "text": "To perform in a play or movie.",
                "examples": [
                    "He acts in the school play."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acted",
        "v3": "acted",
        "group": "regular",
        "transcription": "ækt",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "be natural"
        ]
    },
    {
        "id": "en_starter_leisure_021",
        "word": "join",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "join a club / join us",
        "definitions": [
            {
                "text": "To become a member of a group or organization.",
                "examples": [
                    "I want to join the tennis club."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "joined",
        "v3": "joined",
        "group": "regular",
        "transcription": "ʤɔɪn",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ]
    },
    {
        "id": "en_starter_leisure_022",
        "word": "collect",
        "emoji": "📦",
        "form": "verb",
        "subtext": "collect things / collect stamps",
        "definitions": [
            {
                "text": "To bring things together from different places.",
                "examples": [
                    "She collects stamps."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "collected",
        "v3": "collected",
        "group": "regular",
        "transcription": "kəˈlɛkt",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "scatter"
        ]
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
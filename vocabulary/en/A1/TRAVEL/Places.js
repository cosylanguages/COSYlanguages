(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-TRV-01",
        "word": "Albert Einstein",
        "emoji": "👨‍🔬",
        "definitions": [
            {
                "text": "A very famous scientist from Germany who lived in the USA.",
                "examples": [
                    "Albert Einstein was a very clever man."
                ]
            }
        ],
        "subtext": "famous scientist",
        "transcription": "ˈælbərt ˈaɪnstaɪn",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_067",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-02",
        "word": "Amsterdam",
        "definitions": [
            {
                "text": "The capital city of the Netherlands, famous for its many canals.",
                "examples": [
                    "I want to visit Amsterdam."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇳🇱",
        "transcription": "ˈæmstərˌdæm",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_012",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-03",
        "word": "Athens",
        "definitions": [
            {
                "text": "The capital city of Greece, famous for its ancient buildings.",
                "examples": [
                    "I want to visit Athens."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇬🇷",
        "transcription": "ˈæθənz",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_052",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-04",
        "word": "Australia",
        "definitions": [
            {
                "text": "A very large island country and a continent.",
                "examples": [
                    "I want to visit Australia."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇦🇺",
        "transcription": "ɔˈstreɪljə",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_064",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-05",
        "word": "Austria",
        "definitions": [
            {
                "text": "A country in Central Europe, famous for its mountains and music.",
                "examples": [
                    "I want to visit Austria."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇦🇹",
        "transcription": "ˈɔstriə",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_036",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-06",
        "word": "Barcelona",
        "definitions": [
            {
                "text": "A large city in Spain on the coast of the Mediterranean Sea.",
                "examples": [
                    "I want to visit Barcelona."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇪🇸",
        "transcription": "ˌbɑrsɪˈloʊnə",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_015",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-07",
        "word": "Beijing",
        "definitions": [
            {
                "text": "The capital city of China, known for its long history.",
                "examples": [
                    "I want to visit Beijing."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇨🇳",
        "transcription": "ˌbeɪˈʒɪŋ",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_056",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-08",
        "word": "Belgium",
        "definitions": [
            {
                "text": "A small country in Europe, known for its chocolate and waffles.",
                "examples": [
                    "I want to visit Belgium."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇧🇪",
        "transcription": "ˈbɛlʤəm",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_039",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-09",
        "word": "Berlin",
        "definitions": [
            {
                "text": "The capital city of Germany and a very large city.",
                "examples": [
                    "I want to visit Berlin."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇩🇪",
        "transcription": "bərˈlɪn",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_054",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-10",
        "word": "Beyoncé",
        "emoji": "🎤",
        "definitions": [
            {
                "text": "A famous singer and dancer from the USA.",
                "examples": [
                    "Beyoncé is a very successful artist."
                ]
            }
        ],
        "subtext": "famous singer",
        "transcription": "🇬🇧 biˈɒnseɪ | 🇺🇸 biˈɑːnseɪ",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_071",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-11",
        "word": "Brazil",
        "definitions": [
            {
                "text": "The largest country in South America, famous for the Amazon forest.",
                "examples": [
                    "I want to visit Brazil."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇧🇷",
        "transcription": "brəˈzɪl",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_065",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-12",
        "word": "Canada",
        "definitions": [
            {
                "text": "A very large country in North America, north of the USA.",
                "examples": [
                    "I want to visit Canada."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇨🇦",
        "transcription": "ˈkænədə",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_063",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-13",
        "word": "Chicago",
        "definitions": [
            {
                "text": "A large city in the USA, located on Lake Michigan.",
                "examples": [
                    "I want to visit Chicago."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇺🇸",
        "transcription": "ʃəˈkɑˌgoʊ",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_020",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-14",
        "word": "China",
        "definitions": [
            {
                "text": "A very large country in Asia with many people.",
                "examples": [
                    "I want to visit China."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇨🇳",
        "transcription": "ˈʧaɪnə",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_060",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-15",
        "word": "Cristiano Ronaldo",
        "emoji": "⚽",
        "definitions": [
            {
                "text": "A famous football player from Portugal.",
                "examples": [
                    "Cristiano Ronaldo is a very fast athlete."
                ]
            }
        ],
        "subtext": "famous athlete",
        "transcription": "krisˈtjɐnu ʁuˈnaɫdu",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_069",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-16",
        "word": "Denmark",
        "definitions": [
            {
                "text": "A small country in Northern Europe.",
                "examples": [
                    "I want to visit Denmark."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇩🇰",
        "transcription": "ˈdɛnˌmɑrk",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_032",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-17",
        "word": "Dublin",
        "definitions": [
            {
                "text": "The capital city of Ireland, known for its friendly people.",
                "examples": [
                    "I want to visit Dublin."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇮🇪",
        "transcription": "ˈdəblɪn",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_018",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-18",
        "word": "Edinburgh",
        "definitions": [
            {
                "text": "The capital city of Scotland, famous for its large castle.",
                "examples": [
                    "I want to visit Edinburgh."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "transcription": "ˈɛdənbəroʊ",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_019",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-19",
        "word": "Egypt",
        "definitions": [
            {
                "text": "A country in Africa, famous for its ancient pyramids.",
                "examples": [
                    "I want to visit Egypt."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇪🇬",
        "transcription": "ˈiʤɪpt",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_059",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-20",
        "word": "Elon Musk",
        "emoji": "🚀",
        "definitions": [
            {
                "text": "A famous businessman who builds electric cars and rockets.",
                "examples": [
                    "Elon Musk is the boss of Tesla and SpaceX."
                ]
            }
        ],
        "subtext": "famous businessman",
        "transcription": "🇬🇧 ˈiːlɒn ˈmʌsk | 🇺🇸 ˈiːlɑːn ˈmʌsk",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_072",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-21",
        "word": "England",
        "definitions": [
            {
                "text": "A country that is part of the United Kingdom and an island.",
                "examples": [
                    "I want to visit England."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "transcription": "ˈɪŋglənd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_046",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-22",
        "word": "Finland",
        "definitions": [
            {
                "text": "A country in Northern Europe, known as the land of a thousand lakes.",
                "examples": [
                    "I want to visit Finland."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇫🇮",
        "transcription": "ˈfɪnˌlænd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_033",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-23",
        "word": "Florence",
        "definitions": [
            {
                "text": "A beautiful city in Italy, famous for its art and history.",
                "examples": [
                    "I want to visit Florence."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇮🇹",
        "transcription": "ˈflɔrəns",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_017",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-24",
        "word": "France",
        "definitions": [
            {
                "text": "A large country in Western Europe, famous for its food and wine.",
                "examples": [
                    "I want to visit France."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇫🇷",
        "transcription": "fræns",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_042",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-25",
        "word": "Germany",
        "definitions": [
            {
                "text": "A large country in Central Europe, known for its cars.",
                "examples": [
                    "I want to visit Germany."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇩🇪",
        "transcription": "ˈʤərməni",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_062",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-26",
        "word": "Greece",
        "definitions": [
            {
                "text": "A country in Southern Europe with many beautiful islands.",
                "examples": [
                    "I want to visit Greece."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇬🇷",
        "transcription": "gris",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_045",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-27",
        "word": "India",
        "definitions": [
            {
                "text": "A large country in South Asia with a very long history.",
                "examples": [
                    "I want to visit India."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇮🇳",
        "transcription": "ˈɪndiə",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_066",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-28",
        "word": "Ireland",
        "definitions": [
            {
                "text": "An island country in Europe, known as the Emerald Isle.",
                "examples": [
                    "I want to visit Ireland."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇮🇪",
        "transcription": "ˈaɪərlənd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_040",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-29",
        "word": "Italy",
        "definitions": [
            {
                "text": "A country in Southern Europe, shaped like a boot.",
                "examples": [
                    "I want to visit Italy."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇮🇹",
        "transcription": "ˈɪtəli",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_043",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-30",
        "word": "Japan",
        "definitions": [
            {
                "text": "An island country in East Asia, known for its technology.",
                "examples": [
                    "I want to visit Japan."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇯🇵",
        "transcription": "ʤəˈpæn",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_061",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-31",
        "word": "Leonardo da Vinci",
        "emoji": "🎨",
        "definitions": [
            {
                "text": "A famous artist and inventor from Italy who painted the Mona Lisa.",
                "examples": [
                    "Leonardo da Vinci was a genius of the Renaissance."
                ]
            }
        ],
        "subtext": "famous artist",
        "transcription": "ˌliəˈnɑrdoʊ ˈdiˈeɪ ˈvɪnʧi",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_075",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-32",
        "word": "Lionel Messi",
        "emoji": "⚽",
        "definitions": [
            {
                "text": "A famous football player from Argentina.",
                "examples": [
                    "Lionel Messi plays for a team in the USA now."
                ]
            }
        ],
        "subtext": "famous athlete",
        "transcription": "ljoˈnel ˈmesi",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_070",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-33",
        "word": "London",
        "definitions": [
            {
                "text": "The capital city of England and the United Kingdom.",
                "examples": [
                    "I want to visit London."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇬🇧",
        "transcription": "ˈləndən",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_041",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-34",
        "word": "Los Angeles",
        "definitions": [
            {
                "text": "A very large city in the USA, famous for Hollywood and movies.",
                "examples": [
                    "I want to visit Los Angeles."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇺🇸",
        "transcription": "lɔs ˈænʤəlɪs",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_021",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-35",
        "word": "Marie Curie",
        "emoji": "🧪",
        "definitions": [
            {
                "text": "A famous scientist from Poland and France who studied radiation.",
                "examples": [
                    "Marie Curie was the first woman to win a Nobel Prize."
                ]
            }
        ],
        "subtext": "famous scientist",
        "transcription": "mərˈi ˈkjʊri",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_074",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-36",
        "word": "Melbourne",
        "definitions": [
            {
                "text": "A large city in Australia, known for its culture and coffee.",
                "examples": [
                    "I want to visit Melbourne."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇦🇺",
        "transcription": "ˈmɛlbərn",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_027",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-37",
        "word": "Mexico City",
        "definitions": [
            {
                "text": "The capital city of Mexico and a very large city in North America.",
                "examples": [
                    "I want to visit Mexico City."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇲🇽",
        "transcription": "ˈmɛksəˌkoʊ ˈsɪti",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_011",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-38",
        "word": "Miami",
        "definitions": [
            {
                "text": "A city in the USA with many beaches and hot weather.",
                "examples": [
                    "I want to visit Miami."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇺🇸",
        "transcription": "maɪˈæmi",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_023",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-39",
        "word": "Montreal",
        "definitions": [
            {
                "text": "A large city in Canada where many people speak French.",
                "examples": [
                    "I want to visit Montreal."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇨🇦",
        "transcription": "ˌməntriˈɔl",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_026",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-40",
        "word": "Moscow",
        "definitions": [
            {
                "text": "The capital city of Russia and a very large city in Europe.",
                "examples": [
                    "I want to visit Moscow."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇷🇺",
        "transcription": "ˈmɔˌskaʊ",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_051",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-41",
        "word": "Nelson Mandela",
        "emoji": "🇿🇦",
        "definitions": [
            {
                "text": "A famous leader from South Africa who fought for peace and equality.",
                "examples": [
                    "Nelson Mandela was the first black president of South Africa."
                ]
            }
        ],
        "subtext": "famous leader",
        "transcription": "ˈnɛlsən ˌmænˈdɛlə",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_076",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-42",
        "word": "Netherlands",
        "definitions": [
            {
                "text": "A country in Europe, famous for its flowers and flat land.",
                "examples": [
                    "I want to visit Netherlands."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇳🇱",
        "transcription": "ˈnɛðərləndz",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_038",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-43",
        "word": "New York",
        "definitions": [
            {
                "text": "A very large and famous city in the USA with many tall buildings.",
                "examples": [
                    "I want to visit New York."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇺🇸",
        "transcription": "nu jɔrk",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_053",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-44",
        "word": "Norway",
        "definitions": [
            {
                "text": "A country in Northern Europe with many mountains and cold weather.",
                "examples": [
                    "I want to visit Norway."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇳🇴",
        "transcription": "ˈnɔrˌweɪ",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_031",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-45",
        "word": "Paris",
        "definitions": [
            {
                "text": "The capital city of France, famous for the Eiffel Tower.",
                "examples": [
                    "I want to visit Paris."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇫🇷",
        "transcription": "ˈpɛrɪs",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_049",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-46",
        "word": "Poland",
        "definitions": [
            {
                "text": "A country in Central Europe with a long history.",
                "examples": [
                    "I want to visit Poland."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇵🇱",
        "transcription": "ˈpoʊlənd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_034",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-47",
        "word": "Prague",
        "definitions": [
            {
                "text": "The capital city of the Czech Republic, famous for its old buildings.",
                "examples": [
                    "I want to visit Prague."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇨🇿",
        "transcription": "prɑg",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_014",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-48",
        "word": "Queen Elizabeth II",
        "emoji": "👑",
        "definitions": [
            {
                "text": "The famous Queen of the United Kingdom for a very long time.",
                "examples": [
                    "Queen Elizabeth II lived in Buckingham Palace."
                ]
            }
        ],
        "subtext": "famous queen",
        "transcription": "kwiːn ɪˈlɪzəbəθ ðə ˈsɛkənd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_073",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-49",
        "word": "Rio de Janeiro",
        "definitions": [
            {
                "text": "A large city in Brazil, famous for its beaches and carnival.",
                "examples": [
                    "I want to visit Rio de Janeiro."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇧🇷",
        "transcription": "ˈrioʊ də ʤəˈnɛˌroʊ",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_058",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-50",
        "word": "Rome",
        "definitions": [
            {
                "text": "The capital city of Italy, known for its very old history.",
                "examples": [
                    "I want to visit Rome."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇮🇹",
        "transcription": "roʊm",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_050",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-51",
        "word": "Russia",
        "definitions": [
            {
                "text": "The largest country in the world, located in Europe and Asia.",
                "examples": [
                    "I want to visit Russia."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇷🇺",
        "transcription": "ˈrəʃə",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_044",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-52",
        "word": "San Francisco",
        "definitions": [
            {
                "text": "A city in the USA, famous for its large red bridge.",
                "examples": [
                    "I want to visit San Francisco."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇺🇸",
        "transcription": "sæn frænˈsɪskoʊ",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_022",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-53",
        "word": "South Korea",
        "definitions": [
            {
                "text": "A country in East Asia, known for its technology and music.",
                "examples": [
                    "I want to visit South Korea."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇰🇷",
        "transcription": "saʊθ ˌkɔˈriə",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_029",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-54",
        "word": "Spain",
        "definitions": [
            {
                "text": "A country in Southern Europe, famous for its sunny weather.",
                "examples": [
                    "I want to visit Spain."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇪🇸",
        "transcription": "speɪn",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_047",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-55",
        "word": "Sweden",
        "definitions": [
            {
                "text": "A country in Northern Europe, known for its cold winters.",
                "examples": [
                    "I want to visit Sweden."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇸🇪",
        "transcription": "sˈwidən",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_030",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-56",
        "word": "Switzerland",
        "definitions": [
            {
                "text": "A country in Central Europe, famous for its mountains and chocolate.",
                "examples": [
                    "I want to visit Switzerland."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇨🇭",
        "transcription": "sˈwɪtsərlənd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_037",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-57",
        "word": "Sydney",
        "definitions": [
            {
                "text": "A large city in Australia, famous for its beautiful Opera House.",
                "examples": [
                    "I want to visit Sydney."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇦🇺",
        "transcription": "ˈsɪdni",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_057",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-58",
        "word": "Taylor Swift",
        "emoji": "🎤",
        "definitions": [
            {
                "text": "A famous singer and songwriter from the USA.",
                "examples": [
                    "Taylor Swift has many popular songs."
                ]
            }
        ],
        "subtext": "famous singer",
        "transcription": "ˈteɪlər swɪft",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_068",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-59",
        "word": "Thailand",
        "definitions": [
            {
                "text": "A country in Southeast Asia, famous for its food and beaches.",
                "examples": [
                    "I want to visit Thailand."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇹🇭",
        "transcription": "ˈtaɪˌlænd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_028",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-60",
        "word": "Tokyo",
        "definitions": [
            {
                "text": "The capital city of Japan and a very large city.",
                "examples": [
                    "I want to visit Tokyo."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇯🇵",
        "transcription": "ˈtoʊkiˌoʊ",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_055",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-61",
        "word": "USA",
        "definitions": [
            {
                "text": "A very large country in North America with fifty states.",
                "examples": [
                    "I want to visit USA."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇺🇸",
        "transcription": "ˈjuˈɛˈseɪ",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_048",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-62",
        "word": "Ukraine",
        "definitions": [
            {
                "text": "A large country in Eastern Europe.",
                "examples": [
                    "I want to visit Ukraine."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🇺🇦",
        "transcription": "juˈkreɪn",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_035",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-63",
        "word": "Vancouver",
        "definitions": [
            {
                "text": "A large city in Canada, located between mountains and the sea.",
                "examples": [
                    "I want to visit Vancouver."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇨🇦",
        "transcription": "vænˈkuvər",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_025",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-64",
        "word": "Venice",
        "definitions": [
            {
                "text": "A famous city in Italy with many canals instead of roads.",
                "examples": [
                    "I want to visit Venice."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇮🇹",
        "transcription": "ˈvɛnɪs",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_016",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-65",
        "word": "Vienna",
        "definitions": [
            {
                "text": "The capital city of Austria, known for its history of music and art.",
                "examples": [
                    "I want to visit Vienna."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇦🇹",
        "transcription": "viˈɛnə",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_013",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-66",
        "word": "Washington DC",
        "definitions": [
            {
                "text": "The capital city of the USA, where the President lives.",
                "examples": [
                    "I want to visit Washington DC."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇺🇸",
        "transcription": "ˈwɔʃɪŋtən ˌdiˈsi",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_024",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-67",
        "word": "William Shakespeare",
        "emoji": "✍️",
        "definitions": [
            {
                "text": "A famous writer from England who wrote many plays and poems.",
                "examples": [
                    "William Shakespeare wrote Romeo and Juliet."
                ]
            }
        ],
        "subtext": "famous writer",
        "transcription": "ˈwɪljəm ˈʃeɪkˌspir",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_077",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-68",
        "word": "above",
        "form": "preposition",
        "definitions": [
            {
                "text": "In or to a higher position than something else.",
                "examples": [
                    "The shelf is above the desk."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "⬆️",
        "transcription": "əˈbəv",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "antonyms": [
            "below"
        ],
        "legacy_id": "en_starter_prepositions_place_013",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-69",
        "word": "address",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "addresses",
        "subtext": "home address, email address",
        "definitions": [
            {
                "text": "The details of where a person lives or where a building is.",
                "examples": [
                    "What is your home address?",
                    "Please write your address here."
                ]
            }
        ],
        "transcription": "əˈdres",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_095",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-70",
        "word": "area",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "areas",
        "definitions": [
            {
                "text": "A particular part of a place, piece of land, or country.",
                "examples": [
                    "Do you live in this area?"
                ]
            }
        ],
        "subtext": "related to address location",
        "transcription": "ˈɛriə",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_093",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-71",
        "word": "around",
        "form": "preposition",
        "definitions": [
            {
                "text": "In a circle or in various places.",
                "examples": [
                    "We sat around the table.",
                    "Walk around the city."
                ]
            }
        ],
        "emoji": "⭕",
        "transcription": "əˈraʊnd",
        "subtext": "around",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "en_starter_prepositions_place_017",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-72",
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
        "transcription": "ɑrt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_007",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-73",
        "word": "bank",
        "emoji": "🏦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "banks",
        "subtext": "bank account, go to the bank",
        "definitions": [
            {
                "text": "A place where people keep money and do financial transactions.",
                "examples": [
                    "The bank is near my office."
                ]
            }
        ],
        "transcription": "bæŋk",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Italian",
            "origin_word": "banca",
            "origin_meaning": "bench/table"
        },
        "legacy_id": "en_starter_places_086",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-74",
        "word": "below",
        "form": "preposition",
        "definitions": [
            {
                "text": "In or to a lower position than something else.",
                "examples": [
                    "The desk is below the shelf."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "⬇️",
        "transcription": "bɪˈloʊ",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "antonyms": [
            "above"
        ],
        "legacy_id": "en_starter_prepositions_place_014",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-75",
        "word": "bookshop",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bookshops",
        "subtext": "related to local places services",
        "synonyms": [
            "bookstore"
        ],
        "definitions": [
            {
                "text": "A shop where you can buy books.",
                "examples": [
                    "I bought a dictionary at the bookshop."
                ]
            }
        ],
        "transcription": "ˈbʊkˌʃɑp",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_096",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-76",
        "word": "building",
        "emoji": "🏢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "buildings",
        "definitions": [
            {
                "text": "A structure with a roof and walls, such as a house or school.",
                "examples": [
                    "That building is very tall."
                ]
            }
        ],
        "subtext": "related to address location",
        "transcription": "ˈbɪldɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_090",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-77",
        "word": "cafe",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cafes",
        "definitions": [
            {
                "text": "A place where you can buy drinks and simple meals.",
                "examples": [
                    "Let's meet at the cafe."
                ]
            }
        ],
        "subtext": "related to local places services",
        "transcription": "kəˈfeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_091",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-78",
        "word": "centre",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "centres",
        "subtext": "center, city centre",
        "definitions": [
            {
                "text": "The middle point or part of something.",
                "examples": [
                    "The bank is in the city centre."
                ]
            }
        ],
        "transcription": "ˈsɛntər",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_092",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-79",
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
        "transcription": "ˈsɪnəmə",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_004",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-80",
        "word": "city",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cities",
        "definitions": [
            {
                "text": "A large and important town.",
                "examples": [
                    "London is a big city."
                ]
            }
        ],
        "subtext": "related to cities towns",
        "transcription": "ˈsɪti",
        "lang": "en",
        "level": "starter",
        "theme": "cities_towns",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "civitas"
        },
        "legacy_id": "en_starter_cities_towns_001",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-81",
        "word": "country",
        "emoji": "🏳️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "countries",
        "definitions": [
            {
                "text": "An area of land that has its own government and army.",
                "examples": [
                    "France is a beautiful country."
                ]
            }
        ],
        "subtext": "related to countries capitals",
        "transcription": "ˈkəntri",
        "lang": "en",
        "level": "starter",
        "theme": "countries_capitals",
        "sub_theme": null,
        "legacy_id": "en_starter_countries_capitals_002",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-82",
        "word": "dangerous",
        "form": "adjective",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "synonyms": [
            "risky"
        ],
        "definitions": [
            {
                "text": "Likely to cause harm.",
                "examples": [
                    "The commute on that road is dangerous."
                ]
            }
        ],
        "comparative": "more dangerous",
        "superlative": "the most dangerous",
        "emoji": "🧨",
        "transcription": "ˈdeɪnʤərəs",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "antonyms": [
            "safe"
        ],
        "legacy_id": "en_starter_places_102",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-83",
        "word": "dangerous",
        "form": "adjective",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "synonyms": [
            "risky"
        ],
        "definitions": [
            {
                "text": "Likely to cause harm.",
                "examples": [
                    "The commute on that road is dangerous."
                ]
            }
        ],
        "comparative": "more dangerous",
        "superlative": "the most dangerous",
        "emoji": "🧨",
        "transcription": "ˈdeɪnʤərəs",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "antonyms": [
            "safe"
        ],
        "legacy_id": "en_starter_places_003",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-84",
        "word": "down",
        "emoji": "⬇️",
        "form": "preposition",
        "definitions": [
            {
                "text": "Towards a lower place or position.",
                "examples": [
                    "Sit down, please."
                ]
            }
        ],
        "subtext": "related to prepositions movement",
        "transcription": "daʊn",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_movement",
        "sub_theme": null,
        "antonyms": [
            "up"
        ],
        "legacy_id": "en_starter_prepositions_movement_003",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-85",
        "word": "farm",
        "emoji": "🚜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "farms",
        "subtext": "work on a farm",
        "synonyms": [
            "countryside"
        ],
        "definitions": [
            {
                "text": "An area of land used for growing crops and keeping animals.",
                "examples": [
                    "They live on a big farm."
                ]
            }
        ],
        "transcription": "fɑrm",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_099",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-86",
        "word": "from",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show the place where someone or something starts.",
                "examples": [
                    "He is from Spain."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "⬅️",
        "transcription": "frəm",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "en_starter_prepositions_place_012",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-87",
        "word": "garden",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A public garden or large green area in a city for everyone to use.",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Old French",
            "origin_word": "jardin"
        },
        "transcription": "",
        "legacy_id": "en_starter_places_078",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-88",
        "word": "hospital",
        "emoji": "🏥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hospitals",
        "subtext": "go to hospital, hospital bed",
        "definitions": [
            {
                "text": "A place where sick or injured people receive medical care.",
                "examples": [
                    "He went to the hospital by ambulance."
                ]
            }
        ],
        "transcription": "ˈhɑˌspɪtəl",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "hospitale",
            "origin_meaning": "guest house"
        },
        "legacy_id": "en_starter_places_084",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-89",
        "word": "inside",
        "form": "preposition",
        "definitions": [
            {
                "text": "In or into a container, room, or building.",
                "examples": [
                    "Go inside the house."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🏠",
        "transcription": "ˌɪnˈsaɪd",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "antonyms": [
            "outside"
        ],
        "legacy_id": "en_starter_prepositions_place_015",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-90",
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
        "transcription": "ˈlaɪbrɛˌri",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_006",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-91",
        "word": "live",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "form": "verb",
        "definitions": [
            {
                "text": "To have your home in a place; to be alive.",
                "examples": [
                    "He lives in a flat near the centre.",
                    "We live together."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "lived",
        "group": "regular",
        "transcription": "lɪv",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "antonyms": [
            "die"
        ],
        "legacy_id": "en_starter_places_100",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-92",
        "word": "live",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "form": "verb",
        "definitions": [
            {
                "text": "To have your home in a place; to be alive.",
                "examples": [
                    "He lives in a flat near the centre.",
                    "We live together."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "lived",
        "group": "regular",
        "transcription": "lɪv",
        "synonyms": [
            "reside"
        ],
        "auxiliary": "have",
        "v4": "living",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "antonyms": [
            "die"
        ],
        "legacy_id": "en_starter_places_103",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-93",
        "word": "market",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "markets",
        "definitions": [
            {
                "text": "A place where people meet to buy and sell things.",
                "examples": [
                    "I buy fruit at the market."
                ]
            }
        ],
        "subtext": "related to local places services",
        "transcription": "ˈmɑːkɪt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mercatus",
            "origin_meaning": "trading"
        },
        "legacy_id": "en_starter_places_079",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-94",
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
        "transcription": "mˈjuziəm",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_005",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-95",
        "word": "neighbour",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "neighbours",
        "subtext": "next-door neighbour",
        "definitions": [
            {
                "text": "A person who lives next to you or near you.",
                "examples": [
                    "My neighbours are very nice."
                ]
            }
        ],
        "transcription": "ˈneɪbər",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_083",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-96",
        "word": "of",
        "form": "preposition",
        "definitions": [
            {
                "text": "Belonging to or connected with.",
                "examples": [
                    "The capital of England.",
                    "A cup of tea."
                ]
            }
        ],
        "emoji": "🔗",
        "transcription": "🇬🇧 ɒv | 🇺🇸 ɑːv",
        "subtext": "of",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "en_starter_prepositions_place_018",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-97",
        "word": "outside",
        "form": "preposition",
        "definitions": [
            {
                "text": "Not in a particular room or building.",
                "examples": [
                    "It is cold outside."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🌳",
        "transcription": "ˈaʊtˈsaɪd",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "antonyms": [
            "inside"
        ],
        "legacy_id": "en_starter_prepositions_place_016",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-98",
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
        "transcription": "ˈpeɪnɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_010",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-99",
        "word": "park",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "parks",
        "definitions": [
            {
                "text": "A public garden where people go to walk and relax.",
                "examples": [
                    "Let's walk in the park.",
                    "The park has many trees."
                ]
            },
            {
                "text": "This is a place where you can see grass, trees, and flowers.",
                "examples": [
                    "Children play in the park."
                ]
            }
        ],
        "subtext": "related to local places services",
        "transcription": "pɑrk",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_080",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-100",
        "word": "place",
        "emoji": "📍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "places",
        "definitions": [
            {
                "text": "A particular area or position.",
                "examples": [
                    "This is a nice place."
                ]
            }
        ],
        "subtext": "related to local places services",
        "transcription": "pleɪs",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_094",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-101",
        "word": "police",
        "emoji": "👮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "police force / call the police",
        "definitions": [
            {
                "text": "The official organization that makes sure people obey the law.",
                "examples": [
                    "Call the police!"
                ]
            }
        ],
        "transcription": "pəˈlis",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_098",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-102",
        "word": "restaurant",
        "emoji": "🍴",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "restaurants",
        "subtext": "Italian restaurant, go to a restaurant",
        "definitions": [
            {
                "text": "A place where you pay to eat meals.",
                "examples": [
                    "We go to a restaurant on Fridays."
                ]
            }
        ],
        "transcription": "ˈrɛˌstrɑnt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "French",
            "origin_word": "restaurer",
            "origin_meaning": "to restore"
        },
        "legacy_id": "en_starter_places_085",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-103",
        "word": "road",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "roads",
        "subtext": "on the road",
        "definitions": [
            {
                "text": "A way for cars and other vehicles to travel on.",
                "examples": [
                    "The road is very busy."
                ]
            }
        ],
        "transcription": "roʊd",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_097",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-104",
        "word": "safe",
        "form": "adjective",
        "subtext": "safe area / safe to do / feel safe",
        "synonyms": [
            "secure"
        ],
        "definitions": [
            {
                "text": "Not dangerous; protected from harm.",
                "examples": [
                    "This neighbourhood is very safe."
                ]
            }
        ],
        "comparative": "safer",
        "superlative": "the safest",
        "emoji": "🛡️",
        "transcription": "seɪf",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "antonyms": [
            "dangerous"
        ],
        "legacy_id": "en_starter_places_101",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-105",
        "word": "safe",
        "form": "adjective",
        "subtext": "safe area / safe to do / feel safe",
        "synonyms": [
            "secure"
        ],
        "definitions": [
            {
                "text": "Not dangerous; protected from harm.",
                "examples": [
                    "This neighbourhood is very safe."
                ]
            }
        ],
        "comparative": "safer",
        "superlative": "the safest",
        "emoji": "🛡️",
        "transcription": "seɪf",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "antonyms": [
            "dangerous"
        ],
        "legacy_id": "en_starter_places_002",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-106",
        "word": "school",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "schools",
        "definitions": [
            {
                "text": "A place where children go to learn.",
                "examples": [
                    "I go to school by bus.",
                    "My school is near my house."
                ]
            }
        ],
        "subtext": "related to local places services",
        "transcription": "skul",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "schola"
        },
        "legacy_id": "en_starter_places_081",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-107",
        "word": "shop",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "shops",
        "subtext": "go to a shop, local shop",
        "definitions": [
            {
                "text": "A place where you can buy things.",
                "examples": [
                    "The shop is open."
                ]
            }
        ],
        "transcription": "ʃɑp",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_082",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-108",
        "word": "station",
        "emoji": "🚉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stations",
        "subtext": "train station, bus station",
        "definitions": [
            {
                "text": "A building where trains or buses stop for passengers.",
                "examples": [
                    "The station is ten minutes from here."
                ]
            }
        ],
        "transcription": "ˈsteɪʃən",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "French",
            "origin_word": "café",
            "entered_via": "Turkish kahve"
        },
        "legacy_id": "en_starter_places_087",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-109",
        "word": "street",
        "emoji": "🛣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "streets",
        "definitions": [
            {
                "text": "A road in a town or city that has houses or other buildings along it.",
                "examples": [
                    "I live on a busy street."
                ]
            }
        ],
        "subtext": "related to address location",
        "transcription": "strit",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_089",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-110",
        "word": "supermarket",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "supermarkets",
        "subtext": "go to the supermarket",
        "definitions": [
            {
                "text": "A large shop selling food and other household goods.",
                "examples": [
                    "I go to the supermarket on Saturdays."
                ]
            }
        ],
        "transcription": "ˈsupərˌmɑrkɪt",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "politeia",
            "origin_meaning": "citizenship"
        },
        "legacy_id": "en_starter_places_088",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-111",
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
        "transcription": "ˈθiətər",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_009",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-112",
        "word": "there",
        "emoji": "👉",
        "form": "adverb",
        "definitions": [
            {
                "text": "In, at, or to that place.",
                "examples": [
                    "The book is over there."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "transcription": "ðɛr",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "en_starter_prepositions_place_009",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-113",
        "word": "to",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show the direction or destination of movement.",
                "examples": [
                    "I go to work by bus."
                ]
            }
        ],
        "subtext": "related to prepositions movement",
        "emoji": "➡️",
        "transcription": "tɪ",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_movement",
        "sub_theme": null,
        "legacy_id": "en_starter_prepositions_movement_001",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-114",
        "word": "town",
        "emoji": "🏘️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "towns",
        "definitions": [
            {
                "text": "A place where people live that is larger than a village but smaller than a city.",
                "examples": [
                    "He lives in a small town."
                ]
            }
        ],
        "subtext": "related to cities towns",
        "transcription": "taʊn",
        "lang": "en",
        "level": "starter",
        "theme": "cities_towns",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "tūnaz"
        },
        "legacy_id": "en_starter_cities_towns_002",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-115",
        "word": "up",
        "emoji": "⬆️",
        "form": "preposition",
        "definitions": [
            {
                "text": "Towards a higher place or position.",
                "examples": [
                    "Go up the stairs."
                ]
            }
        ],
        "subtext": "related to prepositions movement",
        "transcription": "əp",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_movement",
        "sub_theme": null,
        "antonyms": [
            "down"
        ],
        "legacy_id": "en_starter_prepositions_movement_002",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-116",
        "word": "village",
        "emoji": "🏡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "villages",
        "definitions": [
            {
                "text": "A very small town in the country.",
                "examples": [
                    "My grandmother lives in a quiet village."
                ]
            }
        ],
        "subtext": "related to cities towns",
        "transcription": "ˈvɪlɪʤ",
        "lang": "en",
        "level": "starter",
        "theme": "cities_towns",
        "sub_theme": null,
        "legacy_id": "en_starter_cities_towns_003",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-117",
        "word": "with",
        "form": "preposition",
        "definitions": [
            {
                "text": "In the company of or including.",
                "examples": [
                    "I like coffee with milk."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "➕",
        "transcription": "wɪθ",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "en_starter_prepositions_place_010",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-118",
        "word": "without",
        "form": "preposition",
        "definitions": [
            {
                "text": "Not having or including something.",
                "examples": [
                    "I prefer tea without sugar."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "➖",
        "transcription": "wɪˈθaʊt",
        "lang": "en",
        "level": "starter",
        "theme": "prepositions_place",
        "sub_theme": null,
        "legacy_id": "en_starter_prepositions_place_011",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-119",
        "word": "world",
        "emoji": "🌎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "worlds",
        "definitions": [
            {
                "text": "The Earth and all the people, places, and things on it.",
                "examples": [
                    "Travel around the world."
                ]
            }
        ],
        "subtext": "related to countries capitals",
        "transcription": "wərld",
        "lang": "en",
        "level": "starter",
        "theme": "countries_capitals",
        "sub_theme": null,
        "legacy_id": "en_starter_countries_capitals_003",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    },
    {
        "id": "A1-TRV-120",
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
        "transcription": "zu",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "en_starter_places_008",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

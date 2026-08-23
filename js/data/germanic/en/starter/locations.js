// TODO: verify level classification
(function() {
    const lang = "en";
    const data = [
    {
        "id": "en_starter_places_011",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_012",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_013",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_014",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_015",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_016",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_017",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_018",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_019",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_020",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_021",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_022",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_023",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_024",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_025",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_026",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_027",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_028",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_029",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_030",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_031",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_032",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_033",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_034",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_035",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_036",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_037",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_038",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_039",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_040",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_041",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_042",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_043",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_044",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_045",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_046",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_047",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_048",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_049",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_050",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_051",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_052",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_053",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_054",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_055",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_056",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_057",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_058",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_059",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_060",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_061",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_062",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_063",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_064",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_065",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_places_066",
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
        "sub_theme": null
    }
]
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

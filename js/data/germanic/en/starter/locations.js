(function() {
    const data = [
    {
        "word": "Mexico City",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈmɛksəˌkoʊ ˈsɪti"
    },
    {
        "word": "Amsterdam",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈæmstərˌdæm"
    },
    {
        "word": "Vienna",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "viˈɛnə"
    },
    {
        "word": "Prague",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "prɑg"
    },
    {
        "word": "Barcelona",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˌbɑrsɪˈloʊnə"
    },
    {
        "word": "Venice",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈvɛnɪs"
    },
    {
        "word": "Florence",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈflɔrəns"
    },
    {
        "word": "Dublin",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈdəblɪn"
    },
    {
        "word": "Edinburgh",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈɛdənbəroʊ"
    },
    {
        "word": "Chicago",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ʃəˈkɑˌgoʊ"
    },
    {
        "word": "Los Angeles",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "lɔs ˈænʤəlɪs"
    },
    {
        "word": "San Francisco",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "sæn frænˈsɪskoʊ"
    },
    {
        "word": "Miami",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "maɪˈæmi"
    },
    {
        "word": "Washington DC",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈwɔʃɪŋtən ˌdiˈsi"
    },
    {
        "word": "Vancouver",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "vænˈkuvər"
    },
    {
        "word": "Montreal",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˌməntriˈɔl"
    },
    {
        "word": "Melbourne",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈmɛlbərn"
    },
    {
        "word": "Thailand",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈtaɪˌlænd"
    },
    {
        "word": "South Korea",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "saʊθ ˌkɔˈriə"
    },
    {
        "word": "Sweden",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "sˈwidən"
    },
    {
        "word": "Norway",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈnɔrˌweɪ"
    },
    {
        "word": "Denmark",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈdɛnˌmɑrk"
    },
    {
        "word": "Finland",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈfɪnˌlænd"
    },
    {
        "word": "Poland",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈpoʊlənd"
    },
    {
        "word": "Ukraine",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "juˈkreɪn"
    },
    {
        "word": "Austria",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈɔstriə"
    },
    {
        "word": "Switzerland",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "sˈwɪtsərlənd"
    },
    {
        "word": "Netherlands",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈnɛðərləndz"
    },
    {
        "word": "Belgium",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈbɛlʤəm"
    },
    {
        "word": "Ireland",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈaɪərlənd"
    },
    {
        "word": "London",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈləndən"
    },
    {
        "word": "France",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "fræns"
    },
    {
        "word": "Italy",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈɪtəli"
    },
    {
        "word": "Russia",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈrəʃə"
    },
    {
        "word": "Greece",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "gris"
    },
    {
        "word": "England",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈɪŋglənd"
    },
    {
        "word": "Spain",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "speɪn"
    },
    {
        "word": "USA",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈjuˈɛˈseɪ"
    },
    {
        "word": "Paris",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈpɛrɪs"
    },
    {
        "word": "Rome",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "roʊm"
    },
    {
        "word": "Moscow",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈmɔˌskaʊ"
    },
    {
        "word": "Athens",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈæθənz"
    },
    {
        "word": "New York",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "nu jɔrk"
    },
    {
        "word": "Berlin",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "bərˈlɪn"
    },
    {
        "word": "Tokyo",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈtoʊkiˌoʊ"
    },
    {
        "word": "Beijing",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˌbeɪˈʒɪŋ"
    },
    {
        "word": "Sydney",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈsɪdni"
    },
    {
        "word": "Rio de Janeiro",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈrioʊ də ʤəˈnɛˌroʊ"
    },
    {
        "word": "Egypt",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈiʤɪpt"
    },
    {
        "word": "China",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈʧaɪnə"
    },
    {
        "word": "Japan",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ʤəˈpæn"
    },
    {
        "word": "Germany",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈʤərməni"
    },
    {
        "word": "Canada",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈkænədə"
    },
    {
        "word": "Australia",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ɔˈstreɪljə"
    },
    {
        "word": "Brazil",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "brəˈzɪl"
    },
    {
        "word": "India",
        "level": "starter",
        "theme": "address_location_A1",
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
        "transcription": "ˈɪndiə"
    }
];
    const lang = "en";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
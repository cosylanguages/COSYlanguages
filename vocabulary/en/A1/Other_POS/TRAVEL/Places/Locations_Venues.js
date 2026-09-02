(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-OTH-TRA-004",
        "word": "Albert Einstein",
        "emoji": "\ud83d\udc68\u200d\ud83d\udd2c",
        "definitions": [
            {
                "text": "A very famous scientist from Germany who lived in the USA.",
                "examples": [
                    "Albert Einstein was a very clever man."
                ]
            }
        ],
        "subtext": "famous scientist",
        "transcription": "\u02c8\u00e6lb\u0259rt \u02c8a\u026ansta\u026an",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-01",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-005",
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
        "emoji": "\ud83c\uddf3\ud83c\uddf1",
        "transcription": "\u02c8\u00e6mst\u0259r\u02ccd\u00e6m",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-02",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-006",
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
        "emoji": "\ud83c\uddec\ud83c\uddf7",
        "transcription": "\u02c8\u00e6\u03b8\u0259nz",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-03",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-007",
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
        "emoji": "\ud83c\udde6\ud83c\uddfa",
        "transcription": "\u0254\u02c8stre\u026alj\u0259",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-04",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-008",
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
        "emoji": "\ud83c\udde6\ud83c\uddf9",
        "transcription": "\u02c8\u0254stri\u0259",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-05",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-009",
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
        "emoji": "\ud83c\uddea\ud83c\uddf8",
        "transcription": "\u02ccb\u0251rs\u026a\u02c8lo\u028an\u0259",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-06",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-010",
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
        "emoji": "\ud83c\udde8\ud83c\uddf3",
        "transcription": "\u02ccbe\u026a\u02c8\u0292\u026a\u014b",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-07",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-011",
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
        "emoji": "\ud83c\udde7\ud83c\uddea",
        "transcription": "\u02c8b\u025bl\u02a4\u0259m",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-08",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-012",
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
        "emoji": "\ud83c\udde9\ud83c\uddea",
        "transcription": "b\u0259r\u02c8l\u026an",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-09",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-013",
        "word": "Beyonc\u00e9",
        "emoji": "\ud83c\udfa4",
        "definitions": [
            {
                "text": "A famous singer and dancer from the USA.",
                "examples": [
                    "Beyonc\u00e9 is a very successful artist."
                ]
            }
        ],
        "subtext": "famous singer",
        "transcription": "\ud83c\uddec\ud83c\udde7 bi\u02c8\u0252nse\u026a | \ud83c\uddfa\ud83c\uddf8 bi\u02c8\u0251\u02d0nse\u026a",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-10",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-014",
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
        "emoji": "\ud83c\udde7\ud83c\uddf7",
        "transcription": "br\u0259\u02c8z\u026al",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-11",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-015",
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
        "emoji": "\ud83c\udde8\ud83c\udde6",
        "transcription": "\u02c8k\u00e6n\u0259d\u0259",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-12",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-016",
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
        "emoji": "\ud83c\uddfa\ud83c\uddf8",
        "transcription": "\u0283\u0259\u02c8k\u0251\u02ccgo\u028a",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-13",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-017",
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
        "emoji": "\ud83c\udde8\ud83c\uddf3",
        "transcription": "\u02c8\u02a7a\u026an\u0259",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-14",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-018",
        "word": "Cristiano Ronaldo",
        "emoji": "\u26bd",
        "definitions": [
            {
                "text": "A famous football player from Portugal.",
                "examples": [
                    "Cristiano Ronaldo is a very fast athlete."
                ]
            }
        ],
        "subtext": "famous athlete",
        "transcription": "kris\u02c8tj\u0250nu \u0281u\u02c8na\u026bdu",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-15",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-019",
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
        "emoji": "\ud83c\udde9\ud83c\uddf0",
        "transcription": "\u02c8d\u025bn\u02ccm\u0251rk",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-16",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-020",
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
        "emoji": "\ud83c\uddee\ud83c\uddea",
        "transcription": "\u02c8d\u0259bl\u026an",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-17",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-021",
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
        "emoji": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",
        "transcription": "\u02c8\u025bd\u0259nb\u0259ro\u028a",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-18",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-022",
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
        "emoji": "\ud83c\uddea\ud83c\uddec",
        "transcription": "\u02c8i\u02a4\u026apt",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-19",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-023",
        "word": "Elon Musk",
        "emoji": "\ud83d\ude80",
        "definitions": [
            {
                "text": "A famous businessman who builds electric cars and rockets.",
                "examples": [
                    "Elon Musk is the boss of Tesla and SpaceX."
                ]
            }
        ],
        "subtext": "famous businessman",
        "transcription": "\ud83c\uddec\ud83c\udde7 \u02c8i\u02d0l\u0252n \u02c8m\u028csk | \ud83c\uddfa\ud83c\uddf8 \u02c8i\u02d0l\u0251\u02d0n \u02c8m\u028csk",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-20",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-024",
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
        "emoji": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
        "transcription": "\u02c8\u026a\u014bgl\u0259nd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-21",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-025",
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
        "emoji": "\ud83c\uddeb\ud83c\uddee",
        "transcription": "\u02c8f\u026an\u02ccl\u00e6nd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-22",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-026",
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
        "emoji": "\ud83c\uddee\ud83c\uddf9",
        "transcription": "\u02c8fl\u0254r\u0259ns",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-23",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-027",
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
        "emoji": "\ud83c\uddeb\ud83c\uddf7",
        "transcription": "fr\u00e6ns",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-24",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-028",
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
        "emoji": "\ud83c\udde9\ud83c\uddea",
        "transcription": "\u02c8\u02a4\u0259rm\u0259ni",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-25",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-029",
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
        "emoji": "\ud83c\uddec\ud83c\uddf7",
        "transcription": "gris",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-26",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-030",
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
        "emoji": "\ud83c\uddee\ud83c\uddf3",
        "transcription": "\u02c8\u026andi\u0259",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-27",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-031",
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
        "emoji": "\ud83c\uddee\ud83c\uddea",
        "transcription": "\u02c8a\u026a\u0259rl\u0259nd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-28",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-032",
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
        "emoji": "\ud83c\uddee\ud83c\uddf9",
        "transcription": "\u02c8\u026at\u0259li",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-29",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-033",
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
        "emoji": "\ud83c\uddef\ud83c\uddf5",
        "transcription": "\u02a4\u0259\u02c8p\u00e6n",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-30",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-034",
        "word": "Leonardo da Vinci",
        "emoji": "\ud83c\udfa8",
        "definitions": [
            {
                "text": "A famous artist and inventor from Italy who painted the Mona Lisa.",
                "examples": [
                    "Leonardo da Vinci was a genius of the Renaissance."
                ]
            }
        ],
        "subtext": "famous artist",
        "transcription": "\u02ccli\u0259\u02c8n\u0251rdo\u028a \u02c8di\u02c8e\u026a \u02c8v\u026an\u02a7i",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-31",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-035",
        "word": "Lionel Messi",
        "emoji": "\u26bd",
        "definitions": [
            {
                "text": "A famous football player from Argentina.",
                "examples": [
                    "Lionel Messi plays for a team in the USA now."
                ]
            }
        ],
        "subtext": "famous athlete",
        "transcription": "ljo\u02c8nel \u02c8mesi",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-32",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-036",
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
        "emoji": "\ud83c\uddec\ud83c\udde7",
        "transcription": "\u02c8l\u0259nd\u0259n",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-33",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-037",
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
        "emoji": "\ud83c\uddfa\ud83c\uddf8",
        "transcription": "l\u0254s \u02c8\u00e6n\u02a4\u0259l\u026as",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-34",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-038",
        "word": "Marie Curie",
        "emoji": "\ud83e\uddea",
        "definitions": [
            {
                "text": "A famous scientist from Poland and France who studied radiation.",
                "examples": [
                    "Marie Curie was the first woman to win a Nobel Prize."
                ]
            }
        ],
        "subtext": "famous scientist",
        "transcription": "m\u0259r\u02c8i \u02c8kj\u028ari",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-35",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-039",
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
        "emoji": "\ud83c\udde6\ud83c\uddfa",
        "transcription": "\u02c8m\u025blb\u0259rn",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-36",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-040",
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
        "emoji": "\ud83c\uddf2\ud83c\uddfd",
        "transcription": "\u02c8m\u025bks\u0259\u02ccko\u028a \u02c8s\u026ati",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-37",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-041",
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
        "emoji": "\ud83c\uddfa\ud83c\uddf8",
        "transcription": "ma\u026a\u02c8\u00e6mi",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-38",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-042",
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
        "emoji": "\ud83c\udde8\ud83c\udde6",
        "transcription": "\u02ccm\u0259ntri\u02c8\u0254l",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-39",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-043",
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
        "emoji": "\ud83c\uddf7\ud83c\uddfa",
        "transcription": "\u02c8m\u0254\u02ccska\u028a",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-40",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-044",
        "word": "Nelson Mandela",
        "emoji": "\ud83c\uddff\ud83c\udde6",
        "definitions": [
            {
                "text": "A famous leader from South Africa who fought for peace and equality.",
                "examples": [
                    "Nelson Mandela was the first black president of South Africa."
                ]
            }
        ],
        "subtext": "famous leader",
        "transcription": "\u02c8n\u025bls\u0259n \u02ccm\u00e6n\u02c8d\u025bl\u0259",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-41",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-045",
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
        "emoji": "\ud83c\uddf3\ud83c\uddf1",
        "transcription": "\u02c8n\u025b\u00f0\u0259rl\u0259ndz",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-42",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-046",
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
        "emoji": "\ud83c\uddfa\ud83c\uddf8",
        "transcription": "nu j\u0254rk",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-43",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-047",
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
        "emoji": "\ud83c\uddf3\ud83c\uddf4",
        "transcription": "\u02c8n\u0254r\u02ccwe\u026a",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-44",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-048",
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
        "emoji": "\ud83c\uddeb\ud83c\uddf7",
        "transcription": "\u02c8p\u025br\u026as",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-45",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-049",
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
        "emoji": "\ud83c\uddf5\ud83c\uddf1",
        "transcription": "\u02c8po\u028al\u0259nd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-46",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-050",
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
        "emoji": "\ud83c\udde8\ud83c\uddff",
        "transcription": "pr\u0251g",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-47",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-051",
        "word": "Queen Elizabeth II",
        "emoji": "\ud83d\udc51",
        "definitions": [
            {
                "text": "The famous Queen of the United Kingdom for a very long time.",
                "examples": [
                    "Queen Elizabeth II lived in Buckingham Palace."
                ]
            }
        ],
        "subtext": "famous queen",
        "transcription": "kwi\u02d0n \u026a\u02c8l\u026az\u0259b\u0259\u03b8 \u00f0\u0259 \u02c8s\u025bk\u0259nd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-48",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-052",
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
        "emoji": "\ud83c\udde7\ud83c\uddf7",
        "transcription": "\u02c8rio\u028a d\u0259 \u02a4\u0259\u02c8n\u025b\u02ccro\u028a",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-49",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-053",
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
        "emoji": "\ud83c\uddee\ud83c\uddf9",
        "transcription": "ro\u028am",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-50",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-054",
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
        "emoji": "\ud83c\uddf7\ud83c\uddfa",
        "transcription": "\u02c8r\u0259\u0283\u0259",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-51",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-055",
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
        "emoji": "\ud83c\uddfa\ud83c\uddf8",
        "transcription": "s\u00e6n fr\u00e6n\u02c8s\u026asko\u028a",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-52",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-056",
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
        "emoji": "\ud83c\uddf0\ud83c\uddf7",
        "transcription": "sa\u028a\u03b8 \u02cck\u0254\u02c8ri\u0259",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-53",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-057",
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
        "emoji": "\ud83c\uddea\ud83c\uddf8",
        "transcription": "spe\u026an",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-54",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-058",
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
        "emoji": "\ud83c\uddf8\ud83c\uddea",
        "transcription": "s\u02c8wid\u0259n",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-55",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-059",
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
        "emoji": "\ud83c\udde8\ud83c\udded",
        "transcription": "s\u02c8w\u026ats\u0259rl\u0259nd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-56",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-060",
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
        "emoji": "\ud83c\udde6\ud83c\uddfa",
        "transcription": "\u02c8s\u026adni",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-57",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-061",
        "word": "Taylor Swift",
        "emoji": "\ud83c\udfa4",
        "definitions": [
            {
                "text": "A famous singer and songwriter from the USA.",
                "examples": [
                    "Taylor Swift has many popular songs."
                ]
            }
        ],
        "subtext": "famous singer",
        "transcription": "\u02c8te\u026al\u0259r sw\u026aft",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-58",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-062",
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
        "emoji": "\ud83c\uddf9\ud83c\udded",
        "transcription": "\u02c8ta\u026a\u02ccl\u00e6nd",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-59",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-063",
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
        "emoji": "\ud83c\uddef\ud83c\uddf5",
        "transcription": "\u02c8to\u028aki\u02cco\u028a",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-60",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-064",
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
        "emoji": "\ud83c\uddfa\ud83c\uddf8",
        "transcription": "\u02c8ju\u02c8\u025b\u02c8se\u026a",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-61",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-065",
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
        "emoji": "\ud83c\uddfa\ud83c\udde6",
        "transcription": "ju\u02c8kre\u026an",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-62",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-066",
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
        "emoji": "\ud83c\udde8\ud83c\udde6",
        "transcription": "v\u00e6n\u02c8kuv\u0259r",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-63",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-067",
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
        "emoji": "\ud83c\uddee\ud83c\uddf9",
        "transcription": "\u02c8v\u025bn\u026as",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-64",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-068",
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
        "emoji": "\ud83c\udde6\ud83c\uddf9",
        "transcription": "vi\u02c8\u025bn\u0259",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-65",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-069",
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
        "emoji": "\ud83c\uddfa\ud83c\uddf8",
        "transcription": "\u02c8w\u0254\u0283\u026a\u014bt\u0259n \u02ccdi\u02c8si",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-66",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    },
    {
        "id": "A1-OTH-TRA-070",
        "word": "William Shakespeare",
        "emoji": "\u270d\ufe0f",
        "definitions": [
            {
                "text": "A famous writer from England who wrote many plays and poems.",
                "examples": [
                    "William Shakespeare wrote Romeo and Juliet."
                ]
            }
        ],
        "subtext": "famous writer",
        "transcription": "\u02c8w\u026alj\u0259m \u02c8\u0283e\u026ak\u02ccspir",
        "form": "other",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "legacy_id": "A1-TRV-67",
        "level_code": "A1",
        "domain": "TRAVEL",
        "subcategory": "Places",
        "pos_section": "Other_POS",
        "sub_subcategory": "Locations_Venues"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

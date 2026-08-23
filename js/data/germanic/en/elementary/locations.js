// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_elementary_places_006",
        "word": "Argentina",
        "definitions": [
            {
                "text": "A large South American nation known for tango, football, and the Andes mountains.",
                "examples": [
                    "I would love to travel to Argentina."
                ]
            }
        ],
        "subtext": "country in South America",
        "emoji": "🇦🇷",
        "transcription": "ˌɑːrdʒənˈtiːnə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_007",
        "word": "Armenia",
        "definitions": [
            {
                "text": "A nation and former Soviet republic in the mountainous Caucasus region between Asia and Europe.",
                "examples": [
                    "I would love to travel to Armenia."
                ]
            }
        ],
        "subtext": "country in the Caucasus",
        "emoji": "🇦🇲",
        "transcription": "ɑːrˈmiːniə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_008",
        "word": "Auckland",
        "definitions": [
            {
                "text": "A major city in the north of New Zealand’s North Island.",
                "examples": [
                    "Auckland is known as the 'City of Sails'."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇳🇿",
        "transcription": "ˈɔːklənd",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_009",
        "word": "Bangkok",
        "definitions": [
            {
                "text": "The capital city of Thailand, famous for its vibrant street life and ornate shrines.",
                "examples": [
                    "I would love to travel to Bangkok."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇹🇭",
        "transcription": "🇬🇧 ˈbæŋkɒk | 🇺🇸 ˈbæŋkɑːk",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_010",
        "word": "Brussels",
        "definitions": [
            {
                "text": "The capital of Belgium and a major center for international politics.",
                "examples": [
                    "Brussels is famous for its chocolate and waffles."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇧🇪",
        "transcription": "ˈbrʌslz",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_011",
        "word": "Budapest",
        "definitions": [
            {
                "text": "The capital city of Hungary, divided by the River Danube and famous for its thermal baths.",
                "examples": [
                    "I would love to travel to Budapest."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇭🇺",
        "transcription": "ˈbuːdəpɛst",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_012",
        "word": "Cairo",
        "definitions": [
            {
                "text": "The capital of Egypt, located near the Pyramids of Giza.",
                "examples": [
                    "Cairo is a very old and historic city."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇪🇬",
        "transcription": "ˈkaɪroʊ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_013",
        "word": "Cape Town",
        "definitions": [
            {
                "text": "A port city on South Africa’s southwest coast, on a peninsula beneath Table Mountain.",
                "examples": [
                    "I want to visit Cape Town."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇿🇦",
        "transcription": "keɪp taʊn",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_014",
        "word": "Chile",
        "definitions": [
            {
                "text": "A long, narrow country on the western edge of South America with diverse landscapes.",
                "examples": [
                    "I would love to travel to Chile."
                ]
            }
        ],
        "subtext": "country in South America",
        "emoji": "🇨🇱",
        "transcription": "ˈtʃɪli",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_015",
        "word": "Colombia",
        "definitions": [
            {
                "text": "A country at the northern tip of South America, known for its coffee and colorful cities.",
                "examples": [
                    "I would love to travel to Colombia."
                ]
            }
        ],
        "subtext": "country in South America",
        "emoji": "🇨🇴",
        "transcription": "kəˈlʌmbiə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_016",
        "word": "Copenhagen",
        "definitions": [
            {
                "text": "The capital of Denmark, known for its colorful harbor and bike culture.",
                "examples": [
                    "The Little Mermaid statue is in Copenhagen."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇩🇰",
        "transcription": "ˌkoʊpənˈheɪɡən",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_017",
        "word": "Croatia",
        "definitions": [
            {
                "text": "A country at the crossroads of Central and Southeast Europe, on the Adriatic Sea.",
                "examples": [
                    "I want to visit Croatia."
                ]
            }
        ],
        "subtext": "country in the Balkans",
        "emoji": "🇭🇷",
        "transcription": "kroʊˈeɪʃə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_018",
        "word": "Dubai",
        "definitions": [
            {
                "text": "A city in the UAE known for luxury shopping, modern architecture, and a lively nightlife scene.",
                "examples": [
                    "I would love to travel to Dubai."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇦🇪",
        "transcription": "duːˈbaɪ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_019",
        "word": "Geneva",
        "definitions": [
            {
                "text": "A city in Switzerland that is a global hub for diplomacy and home to the United Nations.",
                "examples": [
                    "I would love to travel to Geneva."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇨🇭",
        "transcription": "dʒəˈniːvə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_020",
        "word": "Georgia",
        "definitions": [
            {
                "text": "A country at the intersection of Europe and Asia, known for its diverse architecture and wine.",
                "examples": [
                    "I would love to travel to Georgia."
                ]
            }
        ],
        "subtext": "country in the Caucasus",
        "emoji": "🇬🇪",
        "transcription": "ˈdʒɔːrdʒə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_021",
        "word": "Helsinki",
        "definitions": [
            {
                "text": "The capital of Finland, located on the coast of the Baltic Sea.",
                "examples": [
                    "Helsinki is a very modern city."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇫🇮",
        "transcription": "ˈhɛlsɪŋki",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_022",
        "word": "Hong Kong",
        "definitions": [
            {
                "text": "A vibrant city and major financial hub in East Asia, famous for its harbor and skyline.",
                "examples": [
                    "I would love to travel to Hong Kong."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇭🇰",
        "transcription": "🇬🇧 hɒŋ kɒŋ | 🇺🇸 hɑːŋ kɑːŋ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_023",
        "word": "Hungary",
        "definitions": [
            {
                "text": "A landlocked country in Central Europe, famous for its capital, Budapest.",
                "examples": [
                    "I want to visit Hungary."
                ]
            }
        ],
        "subtext": "country in Central Europe",
        "emoji": "🇭🇺",
        "transcription": "ˈhʌŋɡəri",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_024",
        "word": "Iceland",
        "definitions": [
            {
                "text": "An island country in the North Atlantic, known for its dramatic landscape with volcanoes and hot springs.",
                "examples": [
                    "I want to visit Iceland."
                ]
            }
        ],
        "subtext": "island country in the North Atlantic",
        "emoji": "🇮🇸",
        "transcription": "ˈaɪslənd",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_025",
        "word": "Indonesia",
        "definitions": [
            {
                "text": "A Southeast Asian nation made up of thousands of volcanic islands, known for beaches and jungles.",
                "examples": [
                    "I would love to travel to Indonesia."
                ]
            }
        ],
        "subtext": "archipelago country in Southeast Asia",
        "emoji": "🇮🇩",
        "transcription": "ˌɪndəˈniːʒə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_026",
        "word": "Israel",
        "definitions": [
            {
                "text": "A country in the Middle East, regarded by Jews, Christians and Muslims as the biblical Holy Land.",
                "examples": [
                    "I would love to travel to Israel."
                ]
            }
        ],
        "subtext": "country in the Middle East",
        "emoji": "🇮🇱",
        "transcription": "ˈɪzreɪəl",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_027",
        "word": "Istanbul",
        "definitions": [
            {
                "text": "A major city in Turkey that straddles Europe and Asia across the Bosphorus Strait.",
                "examples": [
                    "I would love to travel to Istanbul."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇹🇷",
        "transcription": "ˌɪstænˈbʊl",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_028",
        "word": "Jerusalem",
        "definitions": [
            {
                "text": "A holy city for three major religions, located in Israel.",
                "examples": [
                    "Jerusalem has a very long and complex history."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇮🇱",
        "transcription": "dʒəˈruːsələm",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_029",
        "word": "Johannesburg",
        "definitions": [
            {
                "text": "The largest city in South Africa.",
                "examples": [
                    "Johannesburg is a major center for business and finance."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇿🇦",
        "transcription": "dʒoʊˈhænɪsbɜːrɡ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_030",
        "word": "Kazan",
        "definitions": [
            {
                "text": "A city in southwest Russia, on the banks of the Volga and Kazanka rivers.",
                "examples": [
                    "I would love to travel to Kazan."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇷🇺",
        "transcription": "kəˈzæn",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_031",
        "word": "Kenya",
        "definitions": [
            {
                "text": "A country in East Asia with a coastline on the Indian Ocean, famous for scenic landscapes and safaris.",
                "examples": [
                    "I would love to travel to Kenya."
                ]
            }
        ],
        "subtext": "country in East Africa",
        "emoji": "🇰🇪",
        "transcription": "ˈkɛnjə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_032",
        "word": "Kyoto",
        "definitions": [
            {
                "text": "A city in Japan famous for its many classical Buddhist temples and gardens.",
                "examples": [
                    "I want to visit Kyoto."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇯🇵",
        "transcription": "kiˈoʊtoʊ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_033",
        "word": "Lisbon",
        "definitions": [
            {
                "text": "The hilly, coastal capital city of Portugal, known for its cafe culture and Fado music.",
                "examples": [
                    "I would love to travel to Lisbon."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇵🇹",
        "transcription": "ˈlɪzbən",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_034",
        "word": "Liverpool",
        "definitions": [
            {
                "text": "A maritime city in northwest England, famous as the hometown of The Beatles.",
                "examples": [
                    "I would love to travel to Liverpool."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇬🇧",
        "transcription": "ˈlɪvərp uːl",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_035",
        "word": "Madrid",
        "definitions": [
            {
                "text": "Spain's central capital, a city of elegant boulevards and expansive, manicured parks.",
                "examples": [
                    "I would love to travel to Madrid."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇪🇸",
        "transcription": "məˈdrɪd",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_036",
        "word": "Malaysia",
        "definitions": [
            {
                "text": "A Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.",
                "examples": [
                    "I want to visit Malaysia."
                ]
            }
        ],
        "subtext": "country in Southeast Asia",
        "emoji": "🇲🇾",
        "transcription": "məˈleɪʒə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_037",
        "word": "Manchester",
        "definitions": [
            {
                "text": "A major city in the northwest of England with a rich industrial heritage and famous football clubs.",
                "examples": [
                    "I would love to travel to Manchester."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇬🇧",
        "transcription": "ˈmæntʃɪstər",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_038",
        "word": "Marrakesh",
        "definitions": [
            {
                "text": "A major city in Morocco known for its vibrant markets and beautiful gardens.",
                "examples": [
                    "I want to visit the souks in Marrakesh."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇲🇦",
        "transcription": "ˌmærəˈkɛʃ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_039",
        "word": "Mexico",
        "definitions": [
            {
                "text": "A country in North America known for its Pacific and Gulf of Mexico beaches and diverse landscape.",
                "examples": [
                    "I would love to travel to Mexico."
                ]
            }
        ],
        "subtext": "country in North America",
        "emoji": "🇲🇽",
        "transcription": "ˈmɛksɪkoʊ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_040",
        "word": "Milan",
        "definitions": [
            {
                "text": "A global capital of fashion and design in Italy's northern Lombardy region.",
                "examples": [
                    "I want to visit Milan."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇮🇹",
        "transcription": "mɪˈlæn",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_041",
        "word": "Morocco",
        "definitions": [
            {
                "text": "A North African country bordering the Atlantic Ocean and Mediterranean Sea, known for its culture.",
                "examples": [
                    "I would love to travel to Morocco."
                ]
            }
        ],
        "subtext": "country in North Africa",
        "emoji": "🇲🇦",
        "transcription": "🇬🇧 məˈrɒkoʊ | 🇺🇸 məˈrɑːkoʊ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_042",
        "word": "Mumbai",
        "definitions": [
            {
                "text": "A densely populated city on India’s west coast, famous for the Bollywood film industry.",
                "examples": [
                    "I would love to travel to Mumbai."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇮🇳",
        "transcription": "mʊmˈbaɪ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_043",
        "word": "Munich",
        "definitions": [
            {
                "text": "A large city in Germany famous for its beautiful architecture and the Oktoberfest festival.",
                "examples": [
                    "I want to visit Munich."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇩🇪",
        "transcription": "ˈmjuːnɪk",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_044",
        "word": "New Delhi",
        "definitions": [
            {
                "text": "The capital city of India.",
                "examples": [
                    "New Delhi is a city of many contrasts."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇮🇳",
        "transcription": "njuː ˈdɛli",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_045",
        "word": "New Zealand",
        "definitions": [
            {
                "text": "An island country in the southwestern Pacific Ocean, known for its stunning mountains and lakes.",
                "examples": [
                    "I want to visit New Zealand."
                ]
            }
        ],
        "subtext": "island country in Oceania",
        "emoji": "🇳🇿",
        "transcription": "njuː ˈziːlənd",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_046",
        "word": "Nigeria",
        "definitions": [
            {
                "text": "An African country on the Gulf of Guinea, known for its natural landmarks and wildlife reserves.",
                "examples": [
                    "I would love to travel to Nigeria."
                ]
            }
        ],
        "subtext": "country in West Africa",
        "emoji": "🇳🇬",
        "transcription": "naɪˈdʒɪəriə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_047",
        "word": "Osaka",
        "definitions": [
            {
                "text": "A large port city and commercial center on the Japanese island of Honshu.",
                "examples": [
                    "Osaka is famous for its delicious street food."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇯🇵",
        "transcription": "oʊˈsɑːkə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_048",
        "word": "Oslo",
        "definitions": [
            {
                "text": "The capital of Norway, known for its green spaces and museums.",
                "examples": [
                    "The Nobel Peace Prize is awarded in Oslo."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇳🇴",
        "transcription": "🇬🇧 ˈɒzloʊ | 🇺🇸 ˈɑːzloʊ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_049",
        "word": "Peru",
        "definitions": [
            {
                "text": "A country in South America home to part of the Amazon rainforest and Machu Picchu.",
                "examples": [
                    "I would love to travel to Peru."
                ]
            }
        ],
        "subtext": "country in South America",
        "emoji": "🇵🇪",
        "transcription": "pəˈruː",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_050",
        "word": "Petra",
        "definitions": [
            {
                "text": "An ancient city in Jordan, famous for its architecture cut into rock.",
                "examples": [
                    "Petra is one of the new seven wonders of the world."
                ]
            }
        ],
        "subtext": "historic site",
        "emoji": "🇯🇴",
        "transcription": "ˈpɛtrə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_051",
        "word": "Philippines",
        "definitions": [
            {
                "text": "An archipelagic country in Southeast Asia, known for its beautiful islands and beaches.",
                "examples": [
                    "I would love to travel to Philippines."
                ]
            }
        ],
        "subtext": "archipelago country in Southeast Asia",
        "emoji": "🇵🇭",
        "transcription": "ˈfɪlɪpiːnz",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_052",
        "word": "Portugal",
        "definitions": [
            {
                "text": "A southern European country on the Iberian Peninsula, bordering Spain and the Atlantic Ocean.",
                "examples": [
                    "I would love to travel to Portugal."
                ]
            }
        ],
        "subtext": "country in Southern Europe",
        "emoji": "🇵🇹",
        "transcription": "ˈpɔːrtʃʊɡəl",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_053",
        "word": "Saudi Arabia",
        "definitions": [
            {
                "text": "A desert country encompassing most of the Arabian Peninsula, with Red Sea and Persian Gulf coastlines.",
                "examples": [
                    "I would love to travel to Saudi Arabia."
                ]
            }
        ],
        "subtext": "country in the Middle East",
        "emoji": "🇸🇦",
        "transcription": "ˌsaʊdi əˈreɪbiə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_054",
        "word": "Scotland",
        "definitions": [
            {
                "text": "A country that is part of the United Kingdom, known for its mountainous wilderness and lochs.",
                "examples": [
                    "I would love to travel to Scotland."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "transcription": "🇬🇧 ˈskɒtlənd | 🇺🇸 ˈskɑːtlənd",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_055",
        "word": "Seoul",
        "definitions": [
            {
                "text": "The huge capital of South Korea, where modern skyscrapers meet Buddhist temples and palaces.",
                "examples": [
                    "I would love to travel to Seoul."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇰🇷",
        "transcription": "soʊl",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_056",
        "word": "Shanghai",
        "definitions": [
            {
                "text": "China's largest city and a global financial hub, known for its futuristic skyline.",
                "examples": [
                    "I would love to travel to Shanghai."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇨🇳",
        "transcription": "ʃæŋˈhaɪ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_057",
        "word": "Singapore",
        "definitions": [
            {
                "text": "A sunny island city-state in Southeast Asia, known for its clean streets and modern buildings.",
                "examples": [
                    "I would love to travel to Singapore."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇸🇬",
        "transcription": "ˈsɪŋəpɔːr",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_058",
        "word": "South Africa",
        "definitions": [
            {
                "text": "A country on the southernmost tip of the African continent, known for its diverse ecosystems.",
                "examples": [
                    "I would love to travel to South Africa."
                ]
            }
        ],
        "subtext": "country in Southern Africa",
        "emoji": "🇿🇦",
        "transcription": "saʊθ ˈæfrɪkə",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_059",
        "word": "Stockholm",
        "definitions": [
            {
                "text": "The capital of Sweden, built on many islands.",
                "examples": [
                    "Stockholm is a very beautiful and clean city."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇸🇪",
        "transcription": "🇬🇧 ˈstɒkhoʊm | 🇺🇸 ˈstɑːkhoʊm",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_060",
        "word": "Tbilisi",
        "definitions": [
            {
                "text": "The capital of Georgia, known for its diverse architecture and cobblestoned old town.",
                "examples": [
                    "I would love to travel to Tbilisi."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇬🇪",
        "transcription": "təˈbiːliːsi",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_061",
        "word": "Toronto",
        "definitions": [
            {
                "text": "A dynamic metropolis with a core of soaring skyscrapers, all overtopped by the iconic CN Tower.",
                "examples": [
                    "I would love to travel to Toronto."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇨🇦",
        "transcription": "🇬🇧 təˈrɒntoʊ | 🇺🇸 təˈrɑːntoʊ",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_062",
        "word": "Turkey",
        "definitions": [
            {
                "text": "A nation straddling eastern Europe and western Asia with cultural connections to ancient empires.",
                "examples": [
                    "I would love to travel to Turkey."
                ]
            }
        ],
        "subtext": "transcontinental country in Eurasia",
        "emoji": "🇹🇷",
        "transcription": "ˈtɜːrki",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_063",
        "word": "UAE",
        "definitions": [
            {
                "text": "The United Arab Emirates is a federation of seven emirates on the Arabian Peninsula.",
                "examples": [
                    "I would love to travel to UAE."
                ]
            }
        ],
        "subtext": "country in the Middle East",
        "emoji": "🇦🇪",
        "transcription": "ˌjuː eɪ ˈiː",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_064",
        "word": "Vietnam",
        "definitions": [
            {
                "text": "A Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities.",
                "examples": [
                    "I would love to travel to Vietnam."
                ]
            }
        ],
        "subtext": "country in Southeast Asia",
        "emoji": "🇻🇳",
        "transcription": "ˌvjɛtˈnæm",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_065",
        "word": "Wales",
        "definitions": [
            {
                "text": "A country that is part of the United Kingdom, known for its rugged coastline and mountainous national parks.",
                "examples": [
                    "I would love to travel to Wales."
                ]
            }
        ],
        "subtext": "country",
        "emoji": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        "transcription": "weɪlz",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_066",
        "word": "Warsaw",
        "definitions": [
            {
                "text": "The capital city of Poland, a major cultural and economic hub.",
                "examples": [
                    "I want to visit Warsaw."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇵🇱",
        "transcription": "ˈwɔːrsɔː",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_067",
        "word": "Yerevan",
        "definitions": [
            {
                "text": "The capital of Armenia, characterized by grand Soviet-era architecture and the Cascade.",
                "examples": [
                    "I would love to travel to Yerevan."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇦🇲",
        "transcription": "ˌjɛrəˈvæn",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_068",
        "word": "Zurich",
        "definitions": [
            {
                "text": "A global center for banking and finance, at the north end of Lake Zurich in Switzerland.",
                "examples": [
                    "I would love to travel to Zurich."
                ]
            }
        ],
        "subtext": "city",
        "emoji": "🇨🇭",
        "transcription": "ˈzjʊərɪk",
        "form": "other",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    }
];
    const lang = "en";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
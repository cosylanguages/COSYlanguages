(function() {
    const data = [
    {
        "word": "Argentina",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˌɑːrdʒənˈtiːnə"
    },
    {
        "word": "Armenia",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ɑːrˈmiːniə"
    },
    {
        "word": "Auckland",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈɔːklənd"
    },
    {
        "word": "Bangkok",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "🇬🇧 ˈbæŋkɒk | 🇺🇸 ˈbæŋkɑːk"
    },
    {
        "word": "Brussels",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈbrʌslz"
    },
    {
        "word": "Budapest",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈbuːdəpɛst"
    },
    {
        "word": "Cairo",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈkaɪroʊ"
    },
    {
        "word": "Cape Town",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "keɪp taʊn"
    },
    {
        "word": "Chile",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈtʃɪli"
    },
    {
        "word": "Colombia",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "kəˈlʌmbiə"
    },
    {
        "word": "Copenhagen",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˌkoʊpənˈheɪɡən"
    },
    {
        "word": "Croatia",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "kroʊˈeɪʃə"
    },
    {
        "word": "Dubai",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "duːˈbaɪ"
    },
    {
        "word": "Geneva",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "dʒəˈniːvə"
    },
    {
        "word": "Georgia",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈdʒɔːrdʒə"
    },
    {
        "word": "Helsinki",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈhɛlsɪŋki"
    },
    {
        "word": "Hong Kong",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "🇬🇧 hɒŋ kɒŋ | 🇺🇸 hɑːŋ kɑːŋ"
    },
    {
        "word": "Hungary",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈhʌŋɡəri"
    },
    {
        "word": "Iceland",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈaɪslənd"
    },
    {
        "word": "Indonesia",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˌɪndəˈniːʒə"
    },
    {
        "word": "Israel",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈɪzreɪəl"
    },
    {
        "word": "Istanbul",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˌɪstænˈbʊl"
    },
    {
        "word": "Jerusalem",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "dʒəˈruːsələm"
    },
    {
        "word": "Johannesburg",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "dʒoʊˈhænɪsbɜːrɡ"
    },
    {
        "word": "Kazan",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "kəˈzæn"
    },
    {
        "word": "Kenya",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈkɛnjə"
    },
    {
        "word": "Kyoto",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "kiˈoʊtoʊ"
    },
    {
        "word": "Lisbon",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈlɪzbən"
    },
    {
        "word": "Liverpool",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈlɪvərp uːl"
    },
    {
        "word": "Madrid",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "məˈdrɪd"
    },
    {
        "word": "Malaysia",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "məˈleɪʒə"
    },
    {
        "word": "Manchester",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈmæntʃɪstər"
    },
    {
        "word": "Marrakesh",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˌmærəˈkɛʃ"
    },
    {
        "word": "Mexico",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈmɛksɪkoʊ"
    },
    {
        "word": "Milan",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "mɪˈlæn"
    },
    {
        "word": "Morocco",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "🇬🇧 məˈrɒkoʊ | 🇺🇸 məˈrɑːkoʊ"
    },
    {
        "word": "Mumbai",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "mʊmˈbaɪ"
    },
    {
        "word": "Munich",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈmjuːnɪk"
    },
    {
        "word": "New Delhi",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "njuː ˈdɛli"
    },
    {
        "word": "New Zealand",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "njuː ˈziːlənd"
    },
    {
        "word": "Nigeria",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "naɪˈdʒɪəriə"
    },
    {
        "word": "Osaka",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "oʊˈsɑːkə"
    },
    {
        "word": "Oslo",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "🇬🇧 ˈɒzloʊ | 🇺🇸 ˈɑːzloʊ"
    },
    {
        "word": "Peru",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "pəˈruː"
    },
    {
        "word": "Petra",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈpɛtrə"
    },
    {
        "word": "Philippines",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈfɪlɪpiːnz"
    },
    {
        "word": "Portugal",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈpɔːrtʃʊɡəl"
    },
    {
        "word": "Saudi Arabia",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˌsaʊdi əˈreɪbiə"
    },
    {
        "word": "Scotland",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "🇬🇧 ˈskɒtlənd | 🇺🇸 ˈskɑːtlənd"
    },
    {
        "word": "Seoul",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "soʊl"
    },
    {
        "word": "Shanghai",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ʃæŋˈhaɪ"
    },
    {
        "word": "Singapore",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈsɪŋəpɔːr"
    },
    {
        "word": "South Africa",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "saʊθ ˈæfrɪkə"
    },
    {
        "word": "Stockholm",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "🇬🇧 ˈstɒkhoʊm | 🇺🇸 ˈstɑːkhoʊm"
    },
    {
        "word": "Tbilisi",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "təˈbiːliːsi"
    },
    {
        "word": "Toronto",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "🇬🇧 təˈrɒntoʊ | 🇺🇸 təˈrɑːntoʊ"
    },
    {
        "word": "Turkey",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈtɜːrki"
    },
    {
        "word": "UAE",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˌjuː eɪ ˈiː"
    },
    {
        "word": "Vietnam",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˌvjɛtˈnæm"
    },
    {
        "word": "Wales",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "weɪlz"
    },
    {
        "word": "Warsaw",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈwɔːrsɔː"
    },
    {
        "word": "Yerevan",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˌjɛrəˈvæn"
    },
    {
        "word": "Zurich",
        "level": "elementary",
        "theme": "landscape_geography_A2",
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
        "transcription": "ˈzjʊərɪk"
    }
];
    const lang = "en";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
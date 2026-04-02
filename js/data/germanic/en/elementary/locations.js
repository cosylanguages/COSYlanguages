(function() {
    const data = [
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
        "emoji": "🇹🇭"
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
        "emoji": "🇦🇪"
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
        "emoji": "🇸🇬"
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
        "emoji": "🇰🇷"
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
        "emoji": "🇭🇺"
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
        "emoji": "🇨🇭"
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
        "emoji": "🇨🇭"
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
        "emoji": "🇮🇳"
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
        "emoji": "🇨🇳"
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
        "emoji": "🇭🇰"
    },
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
        "subtext": "country",
        "emoji": "🇦🇷"
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
        "subtext": "country",
        "emoji": "🇨🇱"
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
        "subtext": "country",
        "emoji": "🇨🇴"
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
        "subtext": "country",
        "emoji": "🇵🇪"
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
        "subtext": "country",
        "emoji": "🇿🇦"
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
        "subtext": "country",
        "emoji": "🇳🇬"
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
        "subtext": "country",
        "emoji": "🇰🇪"
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
        "subtext": "country",
        "emoji": "🇲🇦"
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
        "subtext": "country",
        "emoji": "🇸🇦"
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
        "subtext": "country",
        "emoji": "🇦🇪"
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
        "subtext": "country",
        "emoji": "🇮🇱"
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
        "subtext": "country",
        "emoji": "🇻🇳"
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
        "subtext": "country",
        "emoji": "🇮🇩"
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
        "subtext": "country",
        "emoji": "🇵🇭"
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
        "emoji": "🇬🇧"
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
        "emoji": "🇬🇧"
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
        "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
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
        "emoji": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
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
        "subtext": "country",
        "emoji": "🇲🇽"
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
        "subtext": "country",
        "emoji": "🇹🇷"
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
        "subtext": "country",
        "emoji": "🇵🇹"
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
        "subtext": "country",
        "emoji": "🇦🇲"
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
        "subtext": "country",
        "emoji": "🇬🇪"
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
        "emoji": "🇪🇸"
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
        "emoji": "🇨🇦"
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
        "emoji": "🇹🇷"
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
        "emoji": "🇵🇹"
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
        "emoji": "🇦🇲"
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
        "emoji": "🇬🇪"
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
        "emoji": "🇷🇺"
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
        "emoji": "🇩🇪"
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
        "emoji": "🇮🇹"
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
        "emoji": "🇵🇱"
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
        "emoji": "🇯🇵"
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
        "emoji": "🇿🇦"
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
        "subtext": "country",
        "emoji": "🇮🇸"
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
        "subtext": "country",
        "emoji": "🇳🇿"
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
        "subtext": "country",
        "emoji": "🇲🇾"
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
        "subtext": "country",
        "emoji": "🇭🇺"
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
        "subtext": "country",
        "emoji": "🇭🇷"
    }
];
    const lang = "en";
    window.locationsData = window.locationsData || {};
    window.locationsData[lang] = [...(window.locationsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
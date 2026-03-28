(function() {
    const data = [
    {
        "word": "groß",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "klein",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "Eine Person oder Sache, die von unten nach oben groß ist.",
                "examples": [
                    "Er ist sehr groß.",
                    "Dieses Gebäude ist groß."
                ]
            }
        ],
        "subtext": "ein hohes Gebäude / eine große Person / groß genug",
        "comparative": "größer",
        "superlative": "am größten"
    },
    {
        "word": "klein",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "groß",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "Eine Person oder Sache, die nicht groß ist.",
                "examples": [
                    "Sie ist klein.",
                    "Der Bleistift ist kurz."
                ]
            }
        ],
        "subtext": "a short journey / short hair / too short",
        "comparative": "kleiner",
        "superlative": "am kleinsten"
    },
    {
        "word": "jung",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "alt",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "Hat erst kurze Zeit gelebt oder existiert.",
                "examples": [
                    "Er ist ein junger Mann."
                ]
            }
        ],
        "subtext": "young person / young professional / young at heart",
        "comparative": "jünger",
        "superlative": "am jüngsten"
    },
    {
        "word": "alt",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "jung",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "Hat schon lange gelebt oder existiert.",
                "examples": [
                    "Dies ist ein altes Buch."
                ]
            }
        ],
        "subtext": "old friend / old habits / very old",
        "comparative": "älter",
        "superlative": "am ältesten"
    },
    {
        "word": "sonnig",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Viel Licht von der Sonne habend.",
                "examples": [
                    "Es ist ein sonniger Tag."
                ]
            }
        ],
        "subtext": "sunny day / sunny weather / sunny spell",
        "comparative": "sonniger",
        "superlative": "am sonnigsten"
    },
    {
        "word": "regnerisch",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Viel Regen habend.",
                "examples": [
                    "Es ist ein regnerischer Tag."
                ]
            }
        ],
        "subtext": "rainy day / rainy weather / rainy season",
        "comparative": "regnerischer",
        "superlative": "am regnerischsten"
    },
    {
        "word": "heiß",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "kalt",
        "oppositeEmoji": "❄️",
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot",
        "definitions": [
            {
                "text": "Eine hohe Temperatur habend.",
                "examples": [
                    "Der Kaffee ist heiß."
                ]
            }
        ],
        "comparative": "heißer",
        "superlative": "am heißesten"
    },
    {
        "word": "kalt",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "heiß",
        "oppositeEmoji": "🔥",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
        "definitions": [
            {
                "text": "Eine niedrige Temperatur habend.",
                "examples": [
                    "Das Wasser ist kalt."
                ]
            }
        ],
        "comparative": "kälter",
        "superlative": "am kältesten"
    },
    {
        "word": "gewöhnlich",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "besonders",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Normal oder üblich; nicht besonders.",
                "examples": [
                    "Es war ein gewöhnlicher Tag."
                ]
            }
        ],
        "subtext": "ordinary day / ordinary life / nothing ordinary",
        "comparative": "gewöhnlicher",
        "superlative": "am gewöhnlichsten"
    },
    {
        "word": "billig",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "teuer",
        "oppositeEmoji": "💎",
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
        "definitions": [
            {
                "text": "Nicht teuer; niedriger Preis.",
                "examples": [
                    "Dieser Kaffee ist billig."
                ]
            }
        ],
        "comparative": "billiger",
        "superlative": "am billigsten"
    },
    {
        "word": "teuer",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "billig",
        "oppositeEmoji": "🏷️",
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
        "definitions": [
            {
                "text": "Viel Geld kostend.",
                "examples": [
                    "Dieses Auto ist teuer."
                ]
            }
        ],
        "comparative": "teurer",
        "superlative": "am teuersten"
    },
    {
        "word": "gut",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "schlecht",
        "oppositeEmoji": "👎",
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
        "definitions": [
            {
                "text": "Von hoher Qualität oder angenehm.",
                "examples": [
                    "Das ist ein guter Job."
                ]
            }
        ],
        "comparative": "besser",
        "superlative": "am besten"
    },
    {
        "word": "schlecht",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "gut",
        "oppositeEmoji": "👍",
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
        "definitions": [
            {
                "text": "Nicht gut; unangenehm.",
                "examples": [
                    "Das Wetter ist heute schlecht."
                ]
            }
        ],
        "comparative": "schlechter",
        "superlative": "am schlechtesten"
    },
    {
        "word": "groß",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "klein",
        "oppositeEmoji": "🐭",
        "subtext": "large, huge / a big house / a big problem / big enough",
        "definitions": [
            {
                "text": "Groß an Umfang.",
                "examples": [
                    "Es ist ein großes Büro."
                ]
            }
        ],
        "comparative": "größer",
        "superlative": "am größten"
    },
    {
        "word": "klein",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "groß",
        "oppositeEmoji": "🐘",
        "subtext": "little, tiny / a small flat / a small salary / too small",
        "definitions": [
            {
                "text": "Klein an Umfang.",
                "examples": [
                    "Sie hat eine kleine Wohnung."
                ]
            }
        ],
        "comparative": "kleiner",
        "superlative": "am kleinsten"
    },
    {
        "word": "einfach",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "schwierig",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "Nicht schwierig.",
                "examples": [
                    "Der Test ist einfach."
                ]
            }
        ],
        "subtext": "easy to do / nice and easy / not easy",
        "comparative": "einfacher",
        "superlative": "am einfachsten"
    },
    {
        "word": "schwierig",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "einfach",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Schwer zu tun oder zu verstehen.",
                "examples": [
                    "Diese Arbeit ist schwierig."
                ]
            }
        ],
        "subtext": "difficult to do / very difficult / find it difficult",
        "comparative": "schwieriger",
        "superlative": "am schwierigsten"
    },
    {
        "word": "glücklich",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day",
        "definitions": [
            {
                "text": "Vergnügen oder Freude empfindend.",
                "examples": [
                    "Ich bin heute glücklich."
                ]
            }
        ],
        "comparative": "glücklicher",
        "superlative": "am glücklichsten"
    },
    {
        "word": "müde",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
        "definitions": [
            {
                "text": "Ruhe oder Schlaf brauchend.",
                "examples": [
                    "Ich bin nach der Arbeit sehr müde."
                ]
            }
        ],
        "comparative": "müder",
        "superlative": "am müdesten"
    },
    {
        "word": "Vollzeit",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "Teilzeit",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Die volle Anzahl an Stunden arbeitend.",
                "examples": [
                    "Sie hat einen Vollzeitjob."
                ]
            }
        ],
        "subtext": "full-time job / full-time work / full-time employee",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "Teilzeit",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "Vollzeit",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Weniger Stunden arbeitend.",
                "examples": [
                    "Er arbeitet samstags Teilzeit."
                ]
            }
        ],
        "subtext": "part-time job / part-time work / part-time student",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "sauber",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "schmutzig",
        "oppositeEmoji": "💩",
        "subtext": "tidy, not dirty, keep it clean / clean clothes / a clean room / keep clean",
        "definitions": [
            {
                "text": "Frei von Schmutz.",
                "examples": [
                    "Die Wohnung ist jetzt sauber."
                ]
            }
        ],
        "comparative": "sauberer",
        "superlative": "am saubersten"
    },
    {
        "word": "gesund",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
        "subtext": "well, fit, healthy diet",
        "definitions": [
            {
                "text": "Gut für den Körper; nicht krank.",
                "examples": [
                    "Gemüse ist gesundes Essen."
                ]
            }
        ],
        "comparative": "gesünder",
        "superlative": "am gesündesten"
    },
    {
        "word": "krank",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "well",
        "oppositeEmoji": "💪",
        "subtext": "sick, feel ill",
        "definitions": [
            {
                "text": "Nicht gesund; krank.",
                "examples": [
                    "Ich fühle mich heute krank."
                ]
            }
        ],
        "comparative": "kränker",
        "superlative": "am kränksten"
    },
    {
        "word": "online",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Das Internet nutzend.",
                "examples": [
                    "Ich kaufe manchmal online ein."
                ]
            }
        ],
        "subtext": "online shopping / online course / stay online",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "allein",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Ohne andere Menschen.",
                "examples": [
                    "Sie lebt allein."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "entspannt",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "gestresst",
        "oppositeEmoji": "😫",
        "subtext": "calm, feeling relaxed",
        "definitions": [
            {
                "text": "Ruhig; nicht besorgt.",
                "examples": [
                    "Am Wochenende fühle ich mich entspannt."
                ]
            }
        ],
        "comparative": "entspannter",
        "superlative": "am entspanntesten"
    },
    {
        "word": "besorgt",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "anxious",
        "definitions": [
            {
                "text": "Angst empfindend über etwas, das passieren könnte.",
                "examples": [
                    "Sie ist besorgt um ihren Job."
                ]
            }
        ],
        "comparative": "besorgter",
        "superlative": "am besorgtesten"
    },
    {
        "word": "beschäftigt",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
        "definitions": [
            {
                "text": "Viel zu tun habend.",
                "examples": [
                    "Ich bin diese Woche sehr beschäftigt."
                ]
            }
        ],
        "comparative": "beschäftigter",
        "superlative": "am beschäftigtsten"
    },
    {
        "word": "nützlich",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "nutzlos",
        "oppositeEmoji": "🗑️",
        "subtext": "helpful, practical",
        "definitions": [
            {
                "text": "Hilfreich; einen praktischen Zweck habend.",
                "examples": [
                    "Ein Auto ist auf dem Land sehr nützlich."
                ]
            }
        ],
        "comparative": "nützlicher",
        "superlative": "am nützlichsten"
    },
    {
        "word": "wichtig",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "essential / important meeting / very important / most important",
        "definitions": [
            {
                "text": "Von großem Wert oder großer Wirkung.",
                "examples": [
                    "Schlaf ist sehr wichtig."
                ]
            }
        ],
        "comparative": "wichtiger",
        "superlative": "am wichtigsten"
    },
    {
        "word": "rot",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "dark red, bright red / red wine / red face / red light",
        "definitions": [
            {
                "text": "Die Farbe von Blut habend.",
                "examples": [
                    "Sie hat eine rote Tasche."
                ]
            }
        ],
        "comparative": "röter",
        "superlative": "am rötesten"
    },
    {
        "word": "blau",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "light blue, dark blue / dark blue / light blue / blue sky",
        "definitions": [
            {
                "text": "Die Farbe eines klaren Himmels habend.",
                "examples": [
                    "Sein Auto ist blau."
                ]
            }
        ],
        "comparative": "blauer",
        "superlative": "am blauesten"
    },
    {
        "word": "grün",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "bright green, dark green / green energy / green space / bright green",
        "definitions": [
            {
                "text": "Die Farbe von Gras habend.",
                "examples": [
                    "Sie trägt ein grünes Kleid."
                ]
            }
        ],
        "comparative": "grüner",
        "superlative": "am grünsten"
    },
    {
        "word": "weiß",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "pure white, snow white / white wine / off-white / bright white",
        "definitions": [
            {
                "text": "Die Farbe von Schnee habend.",
                "examples": [
                    "Die Wände sind weiß."
                ]
            }
        ],
        "comparative": "weißer",
        "superlative": "am weißesten"
    },
    {
        "word": "schwarz",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "jet black, dark as night / black coffee / black market / jet black",
        "definitions": [
            {
                "text": "Die dunkelste Farbe habend.",
                "examples": [
                    "Er trägt einen schwarzen Mantel."
                ]
            }
        ],
        "comparative": "schwärzer",
        "superlative": "am schwärzesten"
    },
    {
        "word": "gelb",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "bright yellow, lemon yellow / yellow light / pale yellow / bright yellow",
        "definitions": [
            {
                "text": "Die Farbe der Sonne habend.",
                "examples": [
                    "Sie hat einen gelben Regenschirm."
                ]
            }
        ],
        "comparative": "gelber",
        "superlative": "am gelbsten"
    },
    {
        "word": "kostenlos",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "free of charge, free gift / free time / free of charge / free to do",
        "definitions": [
            {
                "text": "Kein Geld kostend.",
                "examples": [
                    "Das Museum ist sonntags kostenlos."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },
    {
        "word": "offen",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "geschlossen",
        "oppositeEmoji": "🔒",
        "subtext": "now open, open for business / open door / open to ideas / wide open",
        "definitions": [
            {
                "text": "Nicht geschlossen.",
                "examples": [
                    "Der Laden ist bis acht Uhr offen."
                ]
            }
        ],
        "comparative": "offener",
        "superlative": "am offensten"
    },
    {
        "word": "geschlossen",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "offen",
        "oppositeEmoji": "📖",
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door",
        "definitions": [
            {
                "text": "Nicht offen.",
                "examples": [
                    "Die Bank ist sonntags geschlossen."
                ]
            }
        ],
        "comparative": null,
        "superlative": null
    },
    {
        "word": "groß",
        "level": "starter",
        "form": "adjective",
        "subtext": "a large city / a large company / a large amount",
        "definitions": [
            {
                "text": "Über dem Durchschnitt an Größe.",
                "examples": [
                    "Berlin ist eine sehr große Stadt."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "größer",
        "superlative": "am größten"
    },
    {
        "word": "klein",
        "level": "starter",
        "form": "adjective",
        "subtext": "a little bit / a little money / too little",
        "definitions": [
            {
                "text": "Klein an Umfang.",
                "examples": [
                    "Er fährt ein kleines Auto."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "kleiner",
        "superlative": "am kleinsten"
    },
    {
        "word": "lang",
        "level": "starter",
        "form": "adjective",
        "subtext": "a long journey / a long day / a long time",
        "definitions": [
            {
                "text": "Von großer Länge.",
                "examples": [
                    "Sie hat jeden Tag einen langen Arbeitsweg."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "länger",
        "superlative": "am längsten"
    },
    {
        "word": "hoch",
        "level": "starter",
        "form": "adjective",
        "subtext": "high price / high rent / high quality",
        "definitions": [
            {
                "text": "Über dem Durchschnitt an Höhe.",
                "examples": [
                    "Die Miete in dieser Gegend ist sehr hoch."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "höher",
        "superlative": "am höchsten"
    },
    {
        "word": "niedrig",
        "level": "starter",
        "form": "adjective",
        "subtext": "low price / low salary / low quality",
        "definitions": [
            {
                "text": "Unter dem Durchschnitt an Höhe.",
                "examples": [
                    "Das Gehalt ist zu niedrig."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "niedriger",
        "superlative": "am niedrigsten"
    },
    {
        "word": "voll",
        "level": "starter",
        "form": "adjective",
        "subtext": "full time / a full day / full of people",
        "definitions": [
            {
                "text": "So viel wie möglich enthaltend.",
                "examples": [
                    "Ich fühle mich nach dem Essen voll."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "voller",
        "superlative": "am vollsten"
    },
    {
        "word": "leer",
        "level": "starter",
        "form": "adjective",
        "subtext": "an empty flat / an empty room / nearly empty",
        "definitions": [
            {
                "text": "Nichts enthaltend.",
                "examples": [
                    "Das Büro ist am Wochenende leer."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "leerer",
        "superlative": "am leersten"
    },
    {
        "word": "warm",
        "level": "starter",
        "form": "adjective",
        "subtext": "warm weather / a warm welcome / keep warm",
        "definitions": [
            {
                "text": "Leicht heiß.",
                "examples": [
                    "Das Büro ist warm und gemütlich."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "wärmer",
        "superlative": "am wärmsten"
    },
    {
        "word": "kühl",
        "level": "starter",
        "form": "adjective",
        "subtext": "cool weather / a cool drink / stay cool",
        "definitions": [
            {
                "text": "Leicht kalt.",
                "examples": [
                    "Sie bevorzugt kühles Wetter zum Arbeiten."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "kühler",
        "superlative": "am kühlsten"
    },
    {
        "word": "nass",
        "level": "starter",
        "form": "adjective",
        "subtext": "wet weather / wet clothes / get wet",
        "definitions": [
            {
                "text": "Mit Wasser bedeckt.",
                "examples": [
                    "Seine Jacke ist nass vom Regen."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "nasser",
        "superlative": "am nassesten"
    },
    {
        "word": "trocken",
        "level": "starter",
        "form": "adjective",
        "subtext": "dry weather / dry skin / keep dry",
        "definitions": [
            {
                "text": "Ohne Wasser oder Flüssigkeit.",
                "examples": [
                    "Der Lagerraum muss trocken bleiben."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "trockener",
        "superlative": "am trockensten"
    },
    {
        "word": "schmutzig",
        "level": "starter",
        "form": "adjective",
        "subtext": "dirty hands / dirty clothes / get dirty",
        "definitions": [
            {
                "text": "Mit Schmutz bedeckt.",
                "examples": [
                    "Seine Hände sind schmutzig."
                ]
            }
        ],
        "comparative": "schmutziger",
        "superlative": "am schmutzigsten"
    },
    {
        "word": "hart",
        "level": "starter",
        "form": "adjective",
        "subtext": "hard work / a hard decision / too hard",
        "definitions": [
            {
                "text": "Fest und solide; schwierig.",
                "examples": [
                    "Der Stuhl ist sehr hart."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "härter",
        "superlative": "am härtesten"
    },
    {
        "word": "weich",
        "level": "starter",
        "form": "adjective",
        "subtext": "soft light / soft music / soft skills",
        "definitions": [
            {
                "text": "Nicht hart; sanft anzufassen.",
                "examples": [
                    "Das Sofa ist sehr weich."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "weicher",
        "superlative": "am weichsten"
    },
    {
        "word": "schwer",
        "level": "starter",
        "form": "adjective",
        "subtext": "heavy traffic / heavy rain / too heavy",
        "definitions": [
            {
                "text": "Von großem Gewicht.",
                "examples": [
                    "Die Tasche ist sehr schwer."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "schwerer",
        "superlative": "am schwersten"
    },
    {
        "word": "leicht",
        "level": "starter",
        "form": "adjective",
        "subtext": "light rain / light traffic / a light meal",
        "definitions": [
            {
                "text": "Nicht schwer.",
                "examples": [
                    "Sie trägt jeden Tag eine leichte Tasche."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "leichter",
        "superlative": "am leichtesten"
    },
    {
        "word": "braun",
        "level": "starter",
        "form": "adjective",
        "subtext": "dark brown / light brown / brown bread",
        "definitions": [
            {
                "text": "Die Farbe von Holz habend.",
                "examples": [
                    "Sie hat braune Augen."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "brauner",
        "superlative": "am braunsten"
    },
    {
        "word": "grau",
        "level": "starter",
        "form": "adjective",
        "subtext": "grey area / grey sky / pale grey",
        "definitions": [
            {
                "text": "Zwischen Schwarz und Weiß.",
                "examples": [
                    "Er hat graues Haar."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "grauer",
        "superlative": "am grausten"
    },
    {
        "word": "rosa",
        "level": "starter",
        "form": "adjective",
        "subtext": "light pink / bright pink / hot pink",
        "definitions": [
            {
                "text": "Blassrot.",
                "examples": [
                    "Sie bevorzugt Rosa gegenüber Rot."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "rosaner",
        "superlative": "am rosasten"
    },
    {
        "word": "orange",
        "level": "starter",
        "form": "adjective",
        "subtext": "bright orange / dark orange / orange light",
        "definitions": [
            {
                "text": "Die Farbe einer Orange habend.",
                "examples": [
                    "Er kaufte eine orangefarbene Jacke."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "oranger",
        "superlative": "am orangesten"
    },
    {
        "word": "großartig",
        "level": "starter",
        "form": "adjective",
        "subtext": "a great idea / a great opportunity / great value",
        "definitions": [
            {
                "text": "Extrem gut.",
                "examples": [
                    "Sie ist eine großartige Managerin."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "großartiger",
        "superlative": "am großartigsten"
    },
    {
        "word": "nett",
        "level": "starter",
        "form": "adjective",
        "subtext": "a nice day / a nice place / a nice person",
        "definitions": [
            {
                "text": "Angenehm oder freundlich.",
                "examples": [
                    "Das neue Büro ist sehr nett."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "netter",
        "superlative": "am nettesten"
    },
    {
        "word": "wunderbar",
        "level": "starter",
        "form": "adjective",
        "subtext": "a wonderful opportunity / a wonderful time",
        "definitions": [
            {
                "text": "Extrem gut; Freude bereitend.",
                "examples": [
                    "Sie hatten ein wunderbares Team."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "wunderbarer",
        "superlative": "am wunderbarsten"
    },
    {
        "word": "furchtbar",
        "level": "starter",
        "form": "adjective",
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "definitions": [
            {
                "text": "Extrem schlecht.",
                "examples": [
                    "Der Verkehr heute Morgen war furchtbar."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "furchtbarer",
        "superlative": "am furchtbarsten"
    },
    {
        "word": "schrecklich",
        "level": "starter",
        "form": "adjective",
        "subtext": "awful weather / awful news / simply awful",
        "definitions": [
            {
                "text": "Sehr schlecht oder unangenehm.",
                "examples": [
                    "Der Lärm im Büro ist schrecklich."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "schrecklicher",
        "superlative": "am schrecklichsten"
    },
    {
        "word": "erstaunlich",
        "level": "starter",
        "form": "adjective",
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "definitions": [
            {
                "text": "Große Überraschung verursachend.",
                "examples": [
                    "Sie hielt eine erstaunliche Präsentation."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "erstaunlicher",
        "superlative": "am erstaunlichsten"
    },
    {
        "word": "fantastisch",
        "level": "starter",
        "form": "adjective",
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "definitions": [
            {
                "text": "Extrem gut.",
                "examples": [
                    "Das neue System funktioniert fantastisch."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "fantastischer",
        "superlative": "am fantastischsten"
    },
    {
        "word": "traurig",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel sad / a sad situation / deeply sad",
        "definitions": [
            {
                "text": "Sich unglücklich fühlend.",
                "examples": [
                    "Er war traurig, die Firma zu verlassen."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "trauriger",
        "superlative": "am traurigsten"
    },
    {
        "word": "hungrig",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel hungry / very hungry / go hungry",
        "definitions": [
            {
                "text": "Essen brauchend.",
                "examples": [
                    "Ich bin hungrig."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "hungriger",
        "superlative": "am hungrigsten"
    },
    {
        "word": "wütend",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel angry / angry with someone / very angry",
        "definitions": [
            {
                "text": "Starken Unmut empfindend.",
                "examples": [
                    "Sie war wütend über die Entscheidung."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "wütender",
        "superlative": "am wütendsten"
    },
    {
        "word": "gelangweilt",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel bored / bored with / easily bored",
        "definitions": [
            {
                "text": "Interessenlos fühlend.",
                "examples": [
                    "Er fühlt sich in langen Besprechungen gelangweilt."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "gelangweilter",
        "superlative": "am gelangweiltesten"
    },
    {
        "word": "aufgeregt",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel excited / excited about / very excited",
        "definitions": [
            {
                "text": "Enthusiasmus empfindend.",
                "examples": [
                    "Sie ist aufgeregt wegen ihres neuen Jobs."
                ]
            }
        ],
        "comparative": "aufgeregter",
        "superlative": "am aufgeregtesten"
    },
    {
        "word": "ängstlich",
        "level": "starter",
        "form": "adjective",
        "subtext": "afraid of / feel afraid / deeply afraid",
        "definitions": [
            {
                "text": "Angst empfindend.",
                "examples": [
                    "Er hat Angst, Fehler zu machen."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "ängstlicher",
        "superlative": "am ängstlichsten"
    },
    {
        "word": "tut mir leid",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel sorry / sorry for / sorry about",
        "definitions": [
            {
                "text": "Bedauern empfindend.",
                "examples": [
                    "Es tut ihr leid wegen der Verspätung."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "richtig",
        "level": "starter",
        "form": "adjective",
        "subtext": "right answer / right time / absolutely right",
        "definitions": [
            {
                "text": "Korrekt; passend.",
                "examples": [
                    "Ist dies das richtige Büro?"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "richtiger",
        "superlative": "am richtigsten"
    },
    {
        "word": "falsch",
        "level": "starter",
        "form": "adjective",
        "subtext": "wrong answer / go wrong / completely wrong",
        "definitions": [
            {
                "text": "Nicht korrekt.",
                "examples": [
                    "Das war die falsche Entscheidung."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "falscher",
        "superlative": "am falschesten"
    },
    {
        "word": "neu",
        "level": "starter",
        "form": "adjective",
        "subtext": "new job / brand new / completely new",
        "definitions": [
            {
                "text": "Vorher nicht existent.",
                "examples": [
                    "Sie hat einen neuen Job."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "neuer",
        "superlative": "am neuesten"
    },
    {
        "word": "anders",
        "level": "starter",
        "form": "adjective",
        "subtext": "completely different / very different / different from",
        "definitions": [
            {
                "text": "Nicht das Gleiche.",
                "examples": [
                    "Dieser Job ist ganz anders."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "gleich",
        "level": "starter",
        "form": "adjective",
        "subtext": "the same as / exactly the same / same time",
        "definitions": [
            {
                "text": "Identisch.",
                "examples": [
                    "Sie verdienen das gleiche Gehalt."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "schnell",
        "level": "starter",
        "form": "adjective",
        "subtext": "fast food / fast train / very fast",
        "definitions": [
            {
                "text": "Sich schnell bewegend.",
                "examples": [
                    "Der Zug ist schnell."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "schneller",
        "superlative": "am schnellsten"
    },
    {
        "word": "langsam",
        "level": "starter",
        "form": "adjective",
        "subtext": "slow progress / slow internet / very slow",
        "definitions": [
            {
                "text": "Nicht schnell.",
                "examples": [
                    "Das neue System ist sehr langsam."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "langsamer",
        "superlative": "am langsamsten"
    },
    {
        "word": "leise",
        "level": "starter",
        "form": "adjective",
        "subtext": "quiet area / keep quiet / nice and quiet",
        "definitions": [
            {
                "text": "Wenig oder kein Geräusch machend.",
                "examples": [
                    "Das Büro ist mittags leise."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "leiser",
        "superlative": "am leisesten"
    },
    {
        "word": "laut",
        "level": "starter",
        "form": "adjective",
        "subtext": "loud noise / too loud / a loud voice",
        "definitions": [
            {
                "text": "Viel Lärm machend.",
                "examples": [
                    "Das Büro ist zu laut."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "lauter",
        "superlative": "am lautesten"
    },
    {
        "word": "sicher",
        "level": "starter",
        "form": "adjective",
        "subtext": "safe area / safe to do / feel safe",
        "definitions": [
            {
                "text": "Nicht gefährlich.",
                "examples": [
                    "Diese Nachbarschaft ist sehr sicher."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "sicherer",
        "superlative": "am sichersten"
    },
    {
        "word": "gefährlich",
        "level": "starter",
        "form": "adjective",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "definitions": [
            {
                "text": "Wahrscheinlich Schaden verursachend.",
                "examples": [
                    "Dieser Weg ist gefährlich."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "gefährlicher",
        "superlative": "am gefährlichsten"
    },
    {
        "word": "unglücklich",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nicht zufrieden.",
                "examples": [
                    "Er ist unglücklich mit seinem Gehalt."
                ]
            }
        ],
        "subtext": "feel unhappy / very unhappy / unhappy about",
        "comparative": "unglücklicher",
        "superlative": "am unglücklichsten"
    },
    {
        "word": "nervös",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sich ängstlich fühlend.",
                "examples": [
                    "Er war vor dem Interview nervös."
                ]
            }
        ],
        "subtext": "feel nervous / nervous about / very nervous",
        "comparative": "nervöser",
        "superlative": "am nervösesten"
    },
    {
        "word": "gestresst",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sich besorgt und angespannt fühlend.",
                "examples": [
                    "Sie fühlt sich vor jeder Frist gestresst."
                ]
            }
        ],
        "subtext": "feel stressed / very stressed / stressed out",
        "comparative": "gestresster",
        "superlative": "am gestresstesten"
    },
    {
        "word": "selbstbewusst",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sicher der eigenen Fähigkeiten.",
                "examples": [
                    "Sie ist sehr selbstbewusst."
                ]
            }
        ],
        "subtext": "feel confident / self-confident / very confident",
        "comparative": "selbstbewusster",
        "superlative": "am selbstbewusstesten"
    },
    {
        "word": "stolz",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sich über eine Leistung freuend.",
                "examples": [
                    "Er war stolz auf seine Beförderung."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of",
        "comparative": "stolzer",
        "superlative": "am stolzesten"
    },
    {
        "word": "verängstigt",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Angst vor etwas empfindend.",
                "examples": [
                    "Sie hatte Angst vor der Präsentation."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "comparative": "verängstigter",
        "superlative": "am verängstigtsten"
    },
    {
        "word": "überrascht",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Schock über etwas Unerwartetes.",
                "examples": [
                    "Er war überrascht."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "comparative": "überraschter",
        "superlative": "am überraschtesten"
    },
    {
        "word": "enttäuscht",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Traurig, weil etwas nicht so gut war wie erwartet.",
                "examples": [
                    "Sie war enttäuscht."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "comparative": "enttäuschter",
        "superlative": "am enttäuchtesten"
    },
    {
        "word": "schön",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Attraktiv und angenehm anzusehen.",
                "examples": [
                    "Sie hat ein schönes Büro."
                ]
            }
        ],
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
        "comparative": "schöner",
        "superlative": "am schönsten"
    },
    {
        "word": "hübsch",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Angenehm anzusehen.",
                "examples": [
                    "Der Raum ist sehr hübsch."
                ]
            }
        ],
        "subtext": "pretty good / a pretty place / quite pretty",
        "comparative": "hübscher",
        "superlative": "am hübschesten"
    },
    {
        "word": "stark",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Große körperliche oder geistige Kraft habend.",
                "examples": [
                    "Sie ist eine starke Führungspersönlichkeit."
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": "stärker",
        "superlative": "am stärksten"
    },
    {
        "word": "schwach",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Fehlende Kraft.",
                "examples": [
                    "Das Signal ist schwach."
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": "schwächer",
        "superlative": "am schwächsten"
    },
    {
        "word": "fit",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "In guter körperlicher Verfassung.",
                "examples": [
                    "Sie hält sich fit."
                ]
            }
        ],
        "subtext": "physically fit / stay fit / keep fit",
        "comparative": "fitter",
        "superlative": "am fittesten"
    },
    {
        "word": "ausgezeichnet",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extrem gut.",
                "examples": [
                    "Sie erhielt eine ausgezeichnete Bewertung."
                ]
            }
        ],
        "subtext": "excellent work / excellent results / absolutely excellent",
        "comparative": "ausgezeichneter",
        "superlative": "am ausgezeichnetsten"
    },
    {
        "word": "perfekt",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ohne Fehler.",
                "examples": [
                    "Das Timing war perfekt."
                ]
            }
        ],
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
        "comparative": "perfekter",
        "superlative": "am perfektesten"
    },
    {
        "word": "nutzlos",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ohne nützlichen Wert.",
                "examples": [
                    "Diese Software ist nutzlos."
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": "nutzloser",
        "superlative": "am nutzlosesten"
    },
    {
        "word": "korrekt",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Wahr oder richtig.",
                "examples": [
                    "Prüfen Sie, ob die Zahlen korrekt sind."
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": "korrekter",
        "superlative": "am korrektesten"
    },
    {
        "word": "interessant",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Aufmerksamkeit erregend.",
                "examples": [
                    "Der Vorschlag ist sehr interessant."
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": "interessanter",
        "superlative": "am interessantesten"
    },
    {
        "word": "langweilig",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nicht interessant.",
                "examples": [
                    "Die Sitzung war sehr langweilig."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "langweiliger",
        "superlative": "am langweiligsten"
    },
    {
        "word": "notwendig",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Benötigt; erforderlich.",
                "examples": [
                    "Eine gute Internetverbindung ist notwendig."
                ]
            }
        ],
        "subtext": "absolutely necessary / if necessary / necessary to do",
        "comparative": "notwendiger",
        "superlative": "am notwendigsten"
    },
    {
        "word": "möglich",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Kann passieren.",
                "examples": [
                    "Ist es möglich, bis Freitag fertig zu werden?"
                ]
            }
        ],
        "subtext": "as soon as possible / it is possible / make possible",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "unmöglich",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Kann nicht passieren.",
                "examples": [
                    "Es ist unmöglich."
                ]
            }
        ],
        "subtext": "virtually impossible / make impossible / nearly impossible",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "besonders",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Anders als üblich.",
                "examples": [
                    "Sie hat ein besonderes Talent."
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special",
        "comparative": "besonderer",
        "superlative": "am besondersten"
    },
    {
        "word": "beliebt",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Von vielen gemocht.",
                "examples": [
                    "Das Café ist sehr beliebt."
                ]
            }
        ],
        "subtext": "very popular / popular choice / most popular",
        "comparative": "beliebter",
        "superlative": "am beliebtesten"
    },
    {
        "word": "ähnlich",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Fast das Gleiche.",
                "examples": [
                    "Unsere Ansätze sind sehr ähnlich."
                ]
            }
        ],
        "subtext": "very similar / similar to / similar results",
        "comparative": "ähnlicher",
        "superlative": "am ähnlichsten"
    },
    {
        "word": "freundlich",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nett und angenehm.",
                "examples": [
                    "Der neue Manager ist sehr freundlich."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "comparative": "freundlicher",
        "superlative": "am freundlichsten"
    },
    {
        "word": "gütig",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Großzügig gegenüber anderen.",
                "examples": [
                    "Sie ist gütig zu allen."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person",
        "comparative": "gütiger",
        "superlative": "am gütigsten"
    },
    {
        "word": "lustig",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Menschen zum Lachen bringend.",
                "examples": [
                    "Er hat eine lustige Art."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny",
        "comparative": "lustiger",
        "superlative": "am lustigsten"
    },
    {
        "word": "schlau",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Intelligent; schnell verstehend.",
                "examples": [
                    "Sie ist eine schlaue Verhandlerin."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough",
        "comparative": "schlauer",
        "superlative": "am schlauesten"
    },
    {
        "word": "höflich",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sich respektvoll verhaltend.",
                "examples": [
                    "Er ist immer höflich."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough",
        "comparative": "höflicher",
        "superlative": "am höflichsten"
    },
    {
        "word": "unhöflich",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nicht höflich.",
                "examples": [
                    "Diese E-Mail war recht unhöflich."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude",
        "comparative": "unhöflicher",
        "superlative": "am unhöflichsten"
    },
    {
        "word": "faul",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nicht bereit zu arbeiten.",
                "examples": [
                    "Er ist faul."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy",
        "comparative": "fauler",
        "superlative": "am faulsten"
    },
    {
        "word": "ehrlich",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Die Wahrheit sagend.",
                "examples": [
                    "Sie ist ehrlich."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest",
        "comparative": "ehrlicher",
        "superlative": "am ehrlichsten"
    },
    {
        "word": "laut",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Viel Geräusch machend.",
                "examples": [
                    "Das Büro ist sehr laut."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy",
        "comparative": "lauter",
        "superlative": "am lautesten"
    }
];
    const lang = "de";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
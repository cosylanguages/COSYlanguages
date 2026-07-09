(function() {
    const data = [
    {
        "word": "groß",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Eine Person oder Sache, die von unten nach oben groß ist.",
                "examples": [
                    "Er ist sehr groß.",
                    "Dieses Gebäude ist groß."
                ]
            }
        ],
        "subtext": "groß genug",
        "synonyms": [
            "ein hohes Gebäude",
            "eine große Person"
        ],
        "feminine": "große",
        "neuter": "großes",
        "plural": "große",
        "comparative": "größer",
        "superlative": "am größten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "grautaz"
        },
        "lang": "de",
        "antonyms": [
            "klein"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_001"
    },
    {
        "word": "klein",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Eine Person oder Sache, die nicht groß ist.",
                "examples": [
                    "Sie ist klein.",
                    "Der Bleistift ist kurz."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "eine kurze Reise",
            "kurze Haare",
            "zu kurz"
        ],
        "feminine": "kleine",
        "neuter": "kleines",
        "plural": "kleine",
        "comparative": "kleiner",
        "superlative": "am kleinsten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "krainaz"
        },
        "lang": "de",
        "antonyms": [
            "groß"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_002"
    },
    {
        "word": "jung",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hat erst kurze Zeit gelebt oder existiert.",
                "examples": [
                    "Er ist ein junger Mann."
                ]
            }
        ],
        "subtext": "im Herzen jung",
        "synonyms": [
            "junge Person",
            "junger Profi"
        ],
        "feminine": "junge",
        "neuter": "junges",
        "plural": "junge",
        "comparative": "jünger",
        "superlative": "am jüngsten",
        "lang": "de",
        "antonyms": [
            "alt"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_003"
    },
    {
        "word": "alt",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hat schon lange gelebt oder existiert.",
                "examples": [
                    "Dies ist ein altes Buch."
                ]
            }
        ],
        "subtext": "sehr alt",
        "synonyms": [
            "alter Freund",
            "alte Gewohnheiten"
        ],
        "feminine": "alte",
        "neuter": "altes",
        "plural": "alte",
        "comparative": "älter",
        "superlative": "am ältesten",
        "lang": "de",
        "antonyms": [
            "jung"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_004"
    },
    {
        "word": "sonnig",
        "level": "starter",
        "theme": "nature",
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
        "subtext": "",
        "synonyms": [
            "sonniger Tag",
            "sonniges Wetter",
            "sonnige Abschnitte"
        ],
        "feminine": "sonnige",
        "neuter": "sonniges",
        "plural": "sonnige",
        "comparative": "sonniger",
        "superlative": "am sonnigsten",
        "lang": "de",
        "transcription": "",
        "id": "de_starter_nature_001"
    },
    {
        "word": "regnerisch",
        "level": "starter",
        "theme": "nature",
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
        "subtext": "",
        "synonyms": [
            "regnerischer Tag",
            "regnerisches Wetter",
            "Regenzeit"
        ],
        "feminine": "regnerische",
        "neuter": "regnerisches",
        "plural": "regnerische",
        "comparative": "regnerischer",
        "superlative": "am regnerischsten",
        "lang": "de",
        "transcription": "",
        "id": "de_starter_nature_002"
    },
    {
        "word": "heiß",
        "level": "starter",
        "theme": "nature",
        "emoji": "🔥",
        "form": "adjective",
        "subtext": "sehr heiß, heißes Wetter / zu heiß",
        "synonyms": [
            "heißes Wetter",
            "ein heißes Getränk"
        ],
        "definitions": [
            {
                "text": "Eine hohe Temperatur habend.",
                "examples": [
                    "Der Kaffee ist heiß."
                ]
            }
        ],
        "feminine": "heiße",
        "neuter": "heißes",
        "plural": "heiße",
        "comparative": "heißer",
        "superlative": "am heißesten",
        "lang": "de",
        "antonyms": [
            "kalt"
        ],
        "transcription": "",
        "id": "de_starter_nature_003"
    },
    {
        "word": "kalt",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "form": "adjective",
        "subtext": "sehr kalt, kalter Morgen / zu kalt",
        "synonyms": [
            "kaltes Wetter",
            "ein kaltes Getränk"
        ],
        "definitions": [
            {
                "text": "Eine niedrige Temperatur habend.",
                "examples": [
                    "Das Wasser ist kalt."
                ]
            }
        ],
        "feminine": "kalte",
        "neuter": "kaltes",
        "plural": "kalte",
        "comparative": "kälter",
        "superlative": "am kältesten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "kaldaz"
        },
        "lang": "de",
        "antonyms": [
            "heiß"
        ],
        "transcription": "",
        "id": "de_starter_nature_004"
    },
    {
        "word": "gewöhnlich",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Normal oder üblich; nicht besonders.",
                "examples": [
                    "Es war ein gewöhnlicher Tag."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "gewöhnlicher Tag",
            "gewöhnliches Leben",
            "nichts Gewöhnliches"
        ],
        "feminine": "gewöhnliche",
        "neuter": "gewöhnliches",
        "plural": "gewöhnliche",
        "comparative": "gewöhnlicher",
        "superlative": "am gewöhnlichsten",
        "lang": "de",
        "antonyms": [
            "besonders"
        ],
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_005"
    },
    {
        "word": "billig",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "adjective",
        "subtext": "sehr billig / billig und gut",
        "synonyms": [
            "niedriger Preis",
            "preiswert",
            "billiger Flug"
        ],
        "definitions": [
            {
                "text": "Nicht teuer; niedriger Preis.",
                "examples": [
                    "Dieser Kaffee ist billig."
                ]
            }
        ],
        "feminine": "billige",
        "neuter": "billiges",
        "plural": "billige",
        "comparative": "billiger",
        "superlative": "am billigsten",
        "lang": "de",
        "antonyms": [
            "teuer"
        ],
        "transcription": "",
        "id": "de_starter_shopping_001"
    },
    {
        "word": "teuer",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💎",
        "form": "adjective",
        "subtext": "sehr teuer / zu teuer",
        "synonyms": [
            "kostspielig",
            "hoher Preis",
            "teurer Geschmack"
        ],
        "definitions": [
            {
                "text": "Viel Geld kostend.",
                "examples": [
                    "Dieses Auto ist teuer."
                ]
            }
        ],
        "feminine": "teure",
        "neuter": "teures",
        "plural": "teure",
        "comparative": "teurer",
        "superlative": "am teuersten",
        "lang": "de",
        "antonyms": [
            "billig"
        ],
        "transcription": "",
        "id": "de_starter_shopping_002"
    },
    {
        "word": "gut",
        "level": "starter",
        "theme": "describing",
        "emoji": "👍",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "großartig",
            "nett",
            "angenehm",
            "gute Idee",
            "viel Glück",
            "gutes Preis-Leistungs-Verhältnis"
        ],
        "definitions": [
            {
                "text": "Von hoher Qualität oder angenehm.",
                "examples": [
                    "Das ist eine gute Stelle."
                ]
            }
        ],
        "feminine": "gute",
        "neuter": "gutes",
        "plural": "gute",
        "comparative": "besser",
        "superlative": "am besten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gōdaz"
        },
        "lang": "de",
        "antonyms": [
            "schlecht"
        ],
        "transcription": "",
        "id": "de_starter_describing_006"
    },
    {
        "word": "schlecht",
        "level": "starter",
        "theme": "describing",
        "emoji": "👎",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "schrecklich",
            "furchtbar",
            "unangenehm",
            "schlechte Nachrichten",
            "Pech",
            "schlechte Entscheidung"
        ],
        "definitions": [
            {
                "text": "Nicht gut; unangenehm.",
                "examples": [
                    "Das Wetter ist heute schlecht."
                ]
            }
        ],
        "feminine": "schlechte",
        "neuter": "schlechtes",
        "plural": "schlechte",
        "comparative": "schlechter",
        "superlative": "am schlechtesten",
        "etymology": {
            "origin_lang": "Middle High German",
            "origin_word": "sleht"
        },
        "lang": "de",
        "antonyms": [
            "gut"
        ],
        "transcription": "",
        "id": "de_starter_describing_007"
    },
    {
        "word": "groß",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐘",
        "form": "adjective",
        "subtext": "groß, riesig / groß genug",
        "synonyms": [
            "ein großes Haus",
            "ein großes Problem"
        ],
        "definitions": [
            {
                "text": "Groß an Umfang.",
                "examples": [
                    "Es ist ein großes Büro."
                ]
            }
        ],
        "feminine": "große",
        "neuter": "großes",
        "plural": "große",
        "comparative": "größer",
        "superlative": "am größten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "grautaz"
        },
        "lang": "de",
        "antonyms": [
            "klein"
        ],
        "transcription": "",
        "id": "de_starter_describing_008"
    },
    {
        "word": "klein",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐭",
        "form": "adjective",
        "subtext": "klein, winzig / zu klein",
        "synonyms": [
            "eine kleine Wohnung",
            "ein kleines Gehalt"
        ],
        "definitions": [
            {
                "text": "Klein an Umfang.",
                "examples": [
                    "Sie hat eine kleine Wohnung."
                ]
            }
        ],
        "feminine": "kleine",
        "neuter": "kleines",
        "plural": "kleine",
        "comparative": "kleiner",
        "superlative": "am kleinsten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "krainaz"
        },
        "lang": "de",
        "antonyms": [
            "groß"
        ],
        "transcription": "",
        "id": "de_starter_describing_009"
    },
    {
        "word": "einfach",
        "level": "starter",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nicht schwierig.",
                "examples": [
                    "Der Test ist einfach."
                ]
            }
        ],
        "subtext": "einfach zu machen / schön einfach / nicht einfach",
        "feminine": "einfache",
        "neuter": "einfaches",
        "plural": "einfache",
        "comparative": "einfacher",
        "superlative": "am einfachsten",
        "lang": "de",
        "antonyms": [
            "schwierig"
        ],
        "transcription": "",
        "id": "de_starter_describing_010"
    },
    {
        "word": "schwierig",
        "level": "starter",
        "theme": "describing",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Schwer zu tun oder zu verstehen.",
                "examples": [
                    "Diese Arbeit ist schwierig."
                ]
            }
        ],
        "subtext": "schwierig zu machen / sehr schwierig / es schwierig finden",
        "feminine": "schwierige",
        "neuter": "schwieriges",
        "plural": "schwierige",
        "comparative": "schwieriger",
        "superlative": "am schwierigsten",
        "lang": "de",
        "antonyms": [
            "einfach"
        ],
        "transcription": "",
        "id": "de_starter_describing_011"
    },
    {
        "word": "glücklich",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "froh, fröhlich, glücklich sein / glücklich sein / mit etwas zufrieden sein",
        "synonyms": [
            "ein glücklicher Tag"
        ],
        "definitions": [
            {
                "text": "Vergnügen oder Freude empfindend.",
                "examples": [
                    "Ich bin heute glücklich."
                ]
            }
        ],
        "feminine": "glückliche",
        "neuter": "glückliches",
        "plural": "glückliche",
        "comparative": "glücklicher",
        "superlative": "am glücklichsten",
        "lang": "de",
        "transcription": "",
        "id": "de_starter_emotions_001"
    },
    {
        "word": "müde",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "schläfrig, erschöpft, müde sein / müde sein / einer Sache überdrüssig sein / sehr müde",
        "definitions": [
            {
                "text": "Ruhe oder Schlaf brauchend.",
                "examples": [
                    "Ich bin nach der Arbeit sehr müde."
                ]
            }
        ],
        "feminine": "müde",
        "neuter": "müdes",
        "plural": "müde",
        "comparative": "müder",
        "superlative": "am müdesten",
        "lang": "de",
        "transcription": "",
        "id": "de_starter_emotions_002"
    },
    {
        "word": "Vollzeit",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "adjective",
        "definitions": [
            {
                "text": "Die volle Anzahl an Stunden arbeitend.",
                "examples": [
                    "Sie hat eine Vollzeitstelle."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "Vollzeitstelle",
            "Vollzeitarbeit",
            "Vollzeitmitarbeiter"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "Vollzeit",
        "neuter": "Vollzeit",
        "plural": "Vollzeit",
        "lang": "de",
        "antonyms": [
            "Teilzeit"
        ],
        "transcription": "",
        "id": "de_starter_work_001"
    },
    {
        "word": "Teilzeit",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Weniger Stunden arbeitend.",
                "examples": [
                    "Er arbeitet samstags Teilzeit."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "Teilzeitstelle",
            "Teilzeitarbeit",
            "Teilzeitstudent"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "Teilzeit",
        "neuter": "Teilzeit",
        "plural": "Teilzeit",
        "lang": "de",
        "antonyms": [
            "Vollzeit"
        ],
        "transcription": "",
        "id": "de_starter_work_002"
    },
    {
        "word": "sauber",
        "level": "starter",
        "theme": "furniture",
        "emoji": "✨",
        "form": "adjective",
        "subtext": "ordentlich, nicht schmutzig, sauber halten / sauber halten",
        "synonyms": [
            "saubere Kleidung",
            "ein sauberes Zimmer"
        ],
        "definitions": [
            {
                "text": "Frei von Schmutz.",
                "examples": [
                    "Die Wohnung ist jetzt sauber."
                ]
            }
        ],
        "feminine": "saubere",
        "neuter": "sauberes",
        "plural": "saubere",
        "comparative": "sauberer",
        "superlative": "am saubersten",
        "lang": "de",
        "antonyms": [
            "schmutzig"
        ],
        "transcription": "",
        "id": "de_starter_furniture_001"
    },
    {
        "word": "gesund",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥗",
        "form": "adjective",
        "subtext": "gut, fit, gesunde Ernährung",
        "definitions": [
            {
                "text": "Gut für den Körper; nicht krank.",
                "examples": [
                    "Gemüse ist gesundes Essen."
                ]
            }
        ],
        "feminine": "gesunde",
        "neuter": "gesundes",
        "plural": "gesunde",
        "comparative": "gesünder",
        "superlative": "am gesündesten",
        "lang": "de",
        "antonyms": [
            "ungesund"
        ],
        "transcription": "",
        "id": "de_starter_food_drink_001"
    },
    {
        "word": "krank",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🤒",
        "form": "adjective",
        "subtext": "krank, sich krank fühlen",
        "definitions": [
            {
                "text": "Nicht gesund; krank.",
                "examples": [
                    "Ich fühle mich heute krank."
                ]
            }
        ],
        "feminine": "kranke",
        "neuter": "krankes",
        "plural": "kranke",
        "comparative": "kränker",
        "superlative": "am kränksten",
        "lang": "de",
        "antonyms": [
            "gesund"
        ],
        "transcription": "",
        "id": "de_starter_health_medicine_001"
    },
    {
        "word": "online",
        "level": "starter",
        "theme": "technology",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Das Internet nutzend.",
                "examples": [
                    "Ich kaufe manchmal online ein."
                ]
            }
        ],
        "subtext": "Online-Shopping / Online-Kurs / online bleiben",
        "comparative": null,
        "superlative": null,
        "feminine": "online",
        "neuter": "online",
        "plural": "online",
        "lang": "de",
        "antonyms": [
            "offline"
        ],
        "transcription": "",
        "id": "de_starter_technology_001"
    },
    {
        "word": "allein",
        "level": "starter",
        "theme": "social",
        "emoji": "👤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ohne andere Menschen.",
                "examples": [
                    "Sie lebt allein."
                ]
            }
        ],
        "subtext": "allein leben / allein reisen / sich allein fühlen",
        "feminine": "alleine",
        "neuter": "alleines",
        "plural": "alleine",
        "comparative": null,
        "superlative": null,
        "lang": "de",
        "antonyms": [
            "zusammen"
        ],
        "transcription": "",
        "id": "de_starter_social_001"
    },
    {
        "word": "entspannt",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😌",
        "form": "adjective",
        "subtext": "ruhig, entspannt fühlen",
        "definitions": [
            {
                "text": "Ruhig; nicht besorgt.",
                "examples": [
                    "Am Wochenende fühle ich mich entspannt."
                ]
            }
        ],
        "feminine": "entspannte",
        "neuter": "entspanntes",
        "plural": "entspannte",
        "comparative": "entspannter",
        "superlative": "am entspanntesten",
        "lang": "de",
        "antonyms": [
            "gestresst"
        ],
        "transcription": "",
        "id": "de_starter_emotions_003"
    },
    {
        "word": "besorgt",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😟",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ängstlich"
        ],
        "definitions": [
            {
                "text": "Angst empfindend über etwas, das passieren könnte.",
                "examples": [
                    "Sie macht sich Sorgen um ihre Arbeit."
                ]
            }
        ],
        "feminine": "besorgte",
        "neuter": "besorgtes",
        "plural": "besorgte",
        "comparative": "besorgter",
        "superlative": "am besorgtesten",
        "lang": "de",
        "antonyms": [
            "ruhig"
        ],
        "transcription": "",
        "id": "de_starter_emotions_004"
    },
    {
        "word": "beschäftigt",
        "level": "starter",
        "theme": "work",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "sehr beschäftigt, beschäftigter Tag / sehr beschäftigt / zu beschäftigt",
        "synonyms": [
            "voller Zeitplan"
        ],
        "definitions": [
            {
                "text": "Viel zu tun habend.",
                "examples": [
                    "Ich bin diese Woche sehr beschäftigt."
                ]
            }
        ],
        "feminine": "beschäftigte",
        "neuter": "beschäftigtes",
        "plural": "beschäftigte",
        "comparative": "beschäftigter",
        "superlative": "am beschäftigtsten",
        "lang": "de",
        "transcription": "",
        "id": "de_starter_work_003"
    },
    {
        "word": "nützlich",
        "level": "starter",
        "theme": "describing",
        "emoji": "🛠️",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "hilfreich",
            "praktisch"
        ],
        "definitions": [
            {
                "text": "Hilfreich; einen praktischen Zweck habend.",
                "examples": [
                    "Ein Auto ist auf dem Land sehr nützlich."
                ]
            }
        ],
        "feminine": "nützliche",
        "neuter": "nützliches",
        "plural": "nützliche",
        "comparative": "nützlicher",
        "superlative": "am nützlichsten",
        "lang": "de",
        "antonyms": [
            "nutzlos"
        ],
        "transcription": "",
        "id": "de_starter_describing_012"
    },
    {
        "word": "wichtig",
        "level": "starter",
        "theme": "describing",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "sehr wichtig",
        "synonyms": [
            "wesentlich",
            "wichtiges Treffen",
            "am wichtigsten"
        ],
        "definitions": [
            {
                "text": "Von großem Wert oder großer Wirkung.",
                "examples": [
                    "Schlaf ist sehr wichtig."
                ]
            }
        ],
        "feminine": "wichtige",
        "neuter": "wichtiges",
        "plural": "wichtige",
        "comparative": "wichtiger",
        "superlative": "am wichtigsten",
        "lang": "de",
        "transcription": "",
        "id": "de_starter_describing_013"
    },
    {
        "word": "rot",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "dunkelrot",
            "hellrot",
            "Rotwein",
            "rotes Gesicht",
            "rote Ampel"
        ],
        "definitions": [
            {
                "text": "Die Farbe von Blut habend.",
                "examples": [
                    "Sie hat eine rote Tasche."
                ]
            }
        ],
        "feminine": "rote",
        "neuter": "rotes",
        "plural": "rote",
        "comparative": "röter",
        "superlative": "am rötesten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "raudaz"
        },
        "lang": "de",
        "transcription": "",
        "id": "de_starter_colours_001"
    },
    {
        "word": "blau",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "hellblau",
            "dunkelblau",
            "dunkelblau",
            "hellblau",
            "blauer Himmel"
        ],
        "definitions": [
            {
                "text": "Die Farbe eines klaren Himmels habend.",
                "examples": [
                    "Sein Auto ist blau."
                ]
            }
        ],
        "feminine": "blaue",
        "neuter": "blaues",
        "plural": "blaue",
        "comparative": "blauer",
        "superlative": "am blauesten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "blēwaz"
        },
        "lang": "de",
        "transcription": "",
        "id": "de_starter_colours_002"
    },
    {
        "word": "grün",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "hellgrün",
            "dunkelgrün",
            "grüne Energie",
            "Grünfläche",
            "hellgrün"
        ],
        "definitions": [
            {
                "text": "Die Farbe von Gras habend.",
                "examples": [
                    "Sie trägt ein grünes Kleid."
                ]
            }
        ],
        "feminine": "grüne",
        "neuter": "grünes",
        "plural": "grüne",
        "comparative": "grüner",
        "superlative": "am grünsten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "grōniz"
        },
        "lang": "de",
        "transcription": "",
        "id": "de_starter_colours_003"
    },
    {
        "word": "weiß",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "gebrochenes Weiß / strahlendes Weiß",
        "synonyms": [
            "reinweiß",
            "schneeweiß",
            "Weißwein"
        ],
        "definitions": [
            {
                "text": "Die Farbe von Schnee habend.",
                "examples": [
                    "Die Wände sind weiß."
                ]
            }
        ],
        "feminine": "weiße",
        "neuter": "weißes",
        "plural": "weiße",
        "comparative": "weißer",
        "superlative": "am weißesten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "hwītaz"
        },
        "lang": "de",
        "transcription": "",
        "id": "de_starter_colours_004"
    },
    {
        "word": "schwarz",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "tiefschwarz",
            "nachtschwarz",
            "schwarzer Kaffee",
            "Schwarzmarkt",
            "tiefschwarz"
        ],
        "definitions": [
            {
                "text": "Die dunkelste Farbe habend.",
                "examples": [
                    "Er trägt einen schwarzen Mantel."
                ]
            }
        ],
        "feminine": "schwarze",
        "neuter": "schwarzes",
        "plural": "schwarze",
        "comparative": "schwärzer",
        "superlative": "am schwärzesten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "swartaz"
        },
        "lang": "de",
        "transcription": "",
        "id": "de_starter_colours_005"
    },
    {
        "word": "gelb",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "hellgelb",
            "zitronengelb",
            "gelbes Licht",
            "blassgelb",
            "hellgelb"
        ],
        "definitions": [
            {
                "text": "Die Farbe der Sonne habend.",
                "examples": [
                    "Sie hat einen gelben Regenschirm."
                ]
            }
        ],
        "feminine": "gelbe",
        "neuter": "gelbes",
        "plural": "gelbe",
        "comparative": "gelber",
        "superlative": "am gelbsten",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gelwaz"
        },
        "lang": "de",
        "transcription": "",
        "id": "de_starter_colours_006"
    },
    {
        "word": "kostenlos",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "kostenlos, Gratisgeschenk / kostenlos",
        "synonyms": [
            "Freizeit",
            "frei zu tun"
        ],
        "definitions": [
            {
                "text": "Kein Geld kostend.",
                "examples": [
                    "Das Museum ist sonntags kostenlos."
                ]
            }
        ],
        "feminine": "kostenlose",
        "neuter": "kostenloses",
        "plural": "kostenlose",
        "comparative": null,
        "superlative": null,
        "lang": "de",
        "transcription": "",
        "id": "de_starter_shopping_003"
    },
    {
        "word": "offen",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "form": "adjective",
        "subtext": "jetzt offen, geschäftsoffen / offen für Ideen / weit offen",
        "synonyms": [
            "offene Tür"
        ],
        "definitions": [
            {
                "text": "Nicht geschlossen.",
                "examples": [
                    "Der Laden ist bis acht Uhr offen."
                ]
            }
        ],
        "feminine": "offene",
        "neuter": "offenes",
        "plural": "offene",
        "comparative": "offener",
        "superlative": "am offensten",
        "lang": "de",
        "antonyms": [
            "geschlossen"
        ],
        "transcription": "",
        "id": "de_starter_shopping_004"
    },
    {
        "word": "geschlossen",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "form": "adjective",
        "subtext": "jetzt geschlossen, vorübergehend geschlossen",
        "synonyms": [
            "Mittagspause",
            "engstirnig",
            "geschlossene Tür"
        ],
        "definitions": [
            {
                "text": "Nicht offen.",
                "examples": [
                    "Die Bank ist sonntags geschlossen."
                ]
            }
        ],
        "feminine": "geschlossene",
        "neuter": "geschlossenes",
        "plural": "geschlossene",
        "comparative": null,
        "superlative": null,
        "lang": "de",
        "antonyms": [
            "offen"
        ],
        "transcription": "",
        "id": "de_starter_shopping_005"
    },
    {
        "word": "groß",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "eine Großstadt",
            "ein großes Unternehmen",
            "eine große Menge"
        ],
        "definitions": [
            {
                "text": "Über dem Durchschnitt an Größe.",
                "examples": [
                    "Berlin ist eine sehr große Stadt."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "größer",
        "superlative": "am größten",
        "feminine": "große",
        "neuter": "großes",
        "plural": "große",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "grautaz"
        },
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_014"
    },
    {
        "word": "klein",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ein kleines bisschen",
            "ein wenig Geld",
            "zu wenig"
        ],
        "definitions": [
            {
                "text": "Klein an Umfang.",
                "examples": [
                    "Er fährt ein kleines Auto."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "kleiner",
        "superlative": "am kleinsten",
        "feminine": "kleine",
        "neuter": "kleines",
        "plural": "kleine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "krainaz"
        },
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_015"
    },
    {
        "word": "lang",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "eine lange Reise",
            "ein langer Tag",
            "eine lange Zeit"
        ],
        "definitions": [
            {
                "text": "Von großer Länge.",
                "examples": [
                    "Sie hat jeden Tag einen langen Arbeitsweg."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "länger",
        "superlative": "am längsten",
        "feminine": "lange",
        "neuter": "langes",
        "plural": "lange",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "langaz"
        },
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_016"
    },
    {
        "word": "hoch",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "hoher Preis",
            "hohe Miete",
            "hohe Qualität"
        ],
        "definitions": [
            {
                "text": "Über dem Durchschnitt an Höhe.",
                "examples": [
                    "Die Miete in dieser Gegend ist sehr hoch."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "höher",
        "superlative": "am höchsten",
        "feminine": "hohe",
        "neuter": "hohes",
        "plural": "hohe",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_017"
    },
    {
        "word": "niedrig",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "niedriger Preis",
            "niedriges Gehalt",
            "niedrige Qualität"
        ],
        "definitions": [
            {
                "text": "Unter dem Durchschnitt an Höhe.",
                "examples": [
                    "Das Gehalt ist zu niedrig."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "niedriger",
        "superlative": "am niedrigsten",
        "feminine": "niedrige",
        "neuter": "niedriges",
        "plural": "niedrige",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_018"
    },
    {
        "word": "voll",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "Vollzeit",
            "ein ganzer Tag",
            "voller Menschen"
        ],
        "definitions": [
            {
                "text": "So viel wie möglich enthaltend.",
                "examples": [
                    "Ich fühle mich nach dem Essen voll."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "voller",
        "superlative": "am vollsten",
        "feminine": "volle",
        "neuter": "volles",
        "plural": "volle",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_019"
    },
    {
        "word": "leer",
        "level": "starter",
        "form": "adjective",
        "subtext": "fast leer",
        "synonyms": [
            "eine leere Wohnung",
            "ein leeres Zimmer"
        ],
        "definitions": [
            {
                "text": "Nichts enthaltend.",
                "examples": [
                    "Das Büro ist am Wochenende leer."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "leerer",
        "superlative": "am leersten",
        "feminine": "lere",
        "neuter": "leres",
        "plural": "lere",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_020"
    },
    {
        "word": "warm",
        "level": "starter",
        "form": "adjective",
        "subtext": "warm halten",
        "synonyms": [
            "warmes Wetter",
            "ein herzliches Willkommen"
        ],
        "definitions": [
            {
                "text": "Leicht heiß.",
                "examples": [
                    "Das Büro ist warm und gemütlich."
                ]
            }
        ],
        "theme": "nature",
        "comparative": "wärmer",
        "superlative": "am wärmsten",
        "feminine": "warme",
        "neuter": "warmes",
        "plural": "warme",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_nature_005"
    },
    {
        "word": "kühl",
        "level": "starter",
        "form": "adjective",
        "subtext": "kühl bleiben",
        "synonyms": [
            "kühles Wetter",
            "ein kühles Getränk"
        ],
        "definitions": [
            {
                "text": "Leicht kalt.",
                "examples": [
                    "Sie bevorzugt kühles Wetter zum Arbeiten."
                ]
            }
        ],
        "theme": "nature",
        "comparative": "kühler",
        "superlative": "am kühlsten",
        "feminine": "kühle",
        "neuter": "kühles",
        "plural": "kühle",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_nature_006"
    },
    {
        "word": "nass",
        "level": "starter",
        "form": "adjective",
        "subtext": "nass werden",
        "synonyms": [
            "nasses Wetter",
            "nasse Kleidung"
        ],
        "definitions": [
            {
                "text": "Mit Wasser bedeckt.",
                "examples": [
                    "Seine Jacke ist nass vom Regen."
                ]
            }
        ],
        "theme": "nature",
        "comparative": "nasser",
        "superlative": "am nassesten",
        "feminine": "nasse",
        "neuter": "nasses",
        "plural": "nasse",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_nature_007"
    },
    {
        "word": "trocken",
        "level": "starter",
        "form": "adjective",
        "subtext": "trocken bleiben",
        "synonyms": [
            "trockenes Wetter",
            "trockene Haut"
        ],
        "definitions": [
            {
                "text": "Ohne Wasser oder Flüssigkeit.",
                "examples": [
                    "Der Lagerraum muss trocken bleiben."
                ]
            }
        ],
        "theme": "nature",
        "comparative": "trockener",
        "superlative": "am trockensten",
        "feminine": "trockene",
        "neuter": "trockenes",
        "plural": "trockene",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_nature_008"
    },
    {
        "word": "schmutzig",
        "level": "starter",
        "theme": "furniture",
        "form": "adjective",
        "subtext": "schmutzig werden",
        "synonyms": [
            "schmutzige Hände",
            "schmutzige Kleidung"
        ],
        "definitions": [
            {
                "text": "Mit Schmutz bedeckt.",
                "examples": [
                    "Seine Hände sind schmutzig."
                ]
            }
        ],
        "comparative": "schmutziger",
        "superlative": "am schmutzigsten",
        "feminine": "schmutzige",
        "neuter": "schmutziges",
        "plural": "schmutzige",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_furniture_002"
    },
    {
        "word": "hart",
        "level": "starter",
        "form": "adjective",
        "subtext": "zu hart",
        "synonyms": [
            "harte Arbeit",
            "eine harte Entscheidung"
        ],
        "definitions": [
            {
                "text": "Fest und solide; schwierig.",
                "examples": [
                    "Der Stuhl ist sehr hart."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "härter",
        "superlative": "am härtesten",
        "feminine": "harte",
        "neuter": "hartes",
        "plural": "harte",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_021"
    },
    {
        "word": "weich",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "weiches Licht",
            "sanfte Musik",
            "Soft Skills"
        ],
        "definitions": [
            {
                "text": "Nicht hart; sanft anzufassen.",
                "examples": [
                    "Das Sofa ist sehr weich."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "weicher",
        "superlative": "am weichsten",
        "feminine": "weiche",
        "neuter": "weiches",
        "plural": "weiche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_022"
    },
    {
        "word": "schwer",
        "level": "starter",
        "form": "adjective",
        "subtext": "zu schwer",
        "synonyms": [
            "starker Verkehr",
            "starker Regen"
        ],
        "definitions": [
            {
                "text": "Von großem Gewicht.",
                "examples": [
                    "Die Tasche ist sehr schwer."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "schwerer",
        "superlative": "am schwersten",
        "feminine": "schwere",
        "neuter": "schweres",
        "plural": "schwere",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_023"
    },
    {
        "word": "leicht",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "leichter Regen",
            "wenig Verkehr",
            "eine leichte Mahlzeit"
        ],
        "definitions": [
            {
                "text": "Nicht schwer.",
                "examples": [
                    "Sie trägt jeden Tag eine leichte Tasche."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "leichter",
        "superlative": "am leichtesten",
        "feminine": "leichte",
        "neuter": "leichtes",
        "plural": "leichte",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_024"
    },
    {
        "word": "braun",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "dunkelbraun",
            "hellbraun",
            "Schwarzbrot"
        ],
        "definitions": [
            {
                "text": "Die Farbe von Holz habend.",
                "examples": [
                    "Sie hat braune Augen."
                ]
            }
        ],
        "theme": "colours",
        "comparative": "brauner",
        "superlative": "am braunsten",
        "feminine": "braune",
        "neuter": "braunes",
        "plural": "braune",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_colours_007"
    },
    {
        "word": "grau",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "Grauzone",
            "grauer Himmel",
            "blassgrau"
        ],
        "definitions": [
            {
                "text": "Zwischen Schwarz und Weiß.",
                "examples": [
                    "Er hat graues Haar."
                ]
            }
        ],
        "theme": "colours",
        "comparative": "grauer",
        "superlative": "am grausten",
        "feminine": "graue",
        "neuter": "graues",
        "plural": "graue",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_colours_008"
    },
    {
        "word": "rosa",
        "level": "starter",
        "form": "adjective",
        "subtext": "leuchtendes Rosa / kräftiges Rosa",
        "synonyms": [
            "hellrosa"
        ],
        "definitions": [
            {
                "text": "Blassrot.",
                "examples": [
                    "Sie bevorzugt Rosa gegenüber Rot."
                ]
            }
        ],
        "theme": "colours",
        "comparative": "rosaner",
        "superlative": "am rosasten",
        "feminine": "rosae",
        "neuter": "rosaes",
        "plural": "rosae",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_colours_009"
    },
    {
        "word": "orange",
        "level": "starter",
        "form": "adjective",
        "subtext": "oranges Licht",
        "synonyms": [
            "hellorange",
            "dunkelorange"
        ],
        "definitions": [
            {
                "text": "Die Farbe einer Orange habend.",
                "examples": [
                    "Er kaufte eine orangefarbene Jacke."
                ]
            }
        ],
        "theme": "colours",
        "comparative": "oranger",
        "superlative": "am orangesten",
        "feminine": "orangee",
        "neuter": "orangees",
        "plural": "orangee",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_colours_010"
    },
    {
        "word": "großartig",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "eine großartige Idee",
            "eine tolle Gelegenheit",
            "hoher Wert"
        ],
        "definitions": [
            {
                "text": "Extrem gut.",
                "examples": [
                    "Sie ist eine großartige Managerin."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "großartiger",
        "superlative": "am großartigsten",
        "feminine": "großartige",
        "neuter": "großartiges",
        "plural": "großartige",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_025"
    },
    {
        "word": "nett",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ein schöner Tag",
            "ein schöner Ort",
            "eine nette Person"
        ],
        "definitions": [
            {
                "text": "Angenehm oder freundlich.",
                "examples": [
                    "Das neue Büro ist sehr nett."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "netter",
        "superlative": "am nettesten",
        "feminine": "nette",
        "neuter": "nettes",
        "plural": "nette",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_026"
    },
    {
        "word": "wunderbar",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "eine wunderbare Gelegenheit",
            "eine wunderbare Zeit"
        ],
        "definitions": [
            {
                "text": "Extrem gut; Freude bereitend.",
                "examples": [
                    "Sie hatten ein wunderbares Team."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "wunderbarer",
        "superlative": "am wunderbarsten",
        "feminine": "wunderbare",
        "neuter": "wunderbares",
        "plural": "wunderbare",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_027"
    },
    {
        "word": "furchtbar",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "furchtbares Wetter",
            "ein schrecklicher Fehler",
            "schreckliche Nachrichten"
        ],
        "definitions": [
            {
                "text": "Extrem schlecht.",
                "examples": [
                    "Der Verkehr heute Morgen war furchtbar."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "furchtbarer",
        "superlative": "am furchtbarsten",
        "feminine": "furchtbare",
        "neuter": "furchtbares",
        "plural": "furchtbare",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_028"
    },
    {
        "word": "schrecklich",
        "level": "starter",
        "form": "adjective",
        "subtext": "einfach schrecklich",
        "synonyms": [
            "schreckliches Wetter",
            "schreckliche Nachrichten"
        ],
        "definitions": [
            {
                "text": "Sehr schlecht oder unangenehm.",
                "examples": [
                    "Der Lärm im Büro ist schrecklich."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "schrecklicher",
        "superlative": "am schrecklichsten",
        "feminine": "schreckliche",
        "neuter": "schreckliches",
        "plural": "schreckliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_029"
    },
    {
        "word": "erstaunlich",
        "level": "starter",
        "form": "adjective",
        "subtext": "wirklich erstaunlich",
        "synonyms": [
            "ein erstaunliches Ergebnis",
            "ein tolles Angebot"
        ],
        "definitions": [
            {
                "text": "Große Überraschung verursachend.",
                "examples": [
                    "Sie hielt eine erstaunliche Präsentation."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "erstaunlicher",
        "superlative": "am erstaunlichsten",
        "feminine": "erstaunliche",
        "neuter": "erstaunliches",
        "plural": "erstaunliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_030"
    },
    {
        "word": "fantastisch",
        "level": "starter",
        "form": "adjective",
        "subtext": "wirklich fantastisch",
        "synonyms": [
            "fantastische Neuigkeiten",
            "eine fantastische Gelegenheit"
        ],
        "definitions": [
            {
                "text": "Extrem gut.",
                "examples": [
                    "Das neue System funktioniert fantastisch."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "fantastischer",
        "superlative": "am fantastischsten",
        "feminine": "fantastische",
        "neuter": "fantastisches",
        "plural": "fantastische",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_031"
    },
    {
        "word": "traurig",
        "level": "starter",
        "form": "adjective",
        "subtext": "sich traurig fühlen / zutiefst traurig",
        "synonyms": [
            "eine traurige Situation"
        ],
        "definitions": [
            {
                "text": "Sich unglücklich fühlend.",
                "examples": [
                    "Er war traurig, die Firma zu verlassen."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "trauriger",
        "superlative": "am traurigsten",
        "feminine": "traurige",
        "neuter": "trauriges",
        "plural": "traurige",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_005"
    },
    {
        "word": "hungrig",
        "level": "starter",
        "form": "adjective",
        "subtext": "sehr hungrig",
        "synonyms": [
            "Hunger haben",
            "hungern"
        ],
        "definitions": [
            {
                "text": "Essen brauchend.",
                "examples": [
                    "Ich bin hungrig."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "hungriger",
        "superlative": "am hungrigsten",
        "feminine": "hungrige",
        "neuter": "hungriges",
        "plural": "hungrige",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_006"
    },
    {
        "word": "wütend",
        "level": "starter",
        "form": "adjective",
        "subtext": "wütend sein / sehr wütend",
        "synonyms": [
            "sauer auf jemanden"
        ],
        "definitions": [
            {
                "text": "Starken Unmut empfindend.",
                "examples": [
                    "Sie war wütend über die Entscheidung."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "wütender",
        "superlative": "am wütendsten",
        "feminine": "wütende",
        "neuter": "wütendes",
        "plural": "wütende",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_007"
    },
    {
        "word": "gelangweilt",
        "level": "starter",
        "form": "adjective",
        "subtext": "gelangweilt von / leicht gelangweilt",
        "synonyms": [
            "sich langweilen"
        ],
        "definitions": [
            {
                "text": "Interessenlos fühlend.",
                "examples": [
                    "Er fühlt sich in langen Besprechungen gelangweilt."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "gelangweilter",
        "superlative": "am gelangweiltesten",
        "feminine": "gelangweilte",
        "neuter": "gelangweiltes",
        "plural": "gelangweilte",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_008"
    },
    {
        "word": "aufgeregt",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "subtext": "aufgeregt sein / sehr aufgeregt",
        "synonyms": [
            "begeistert von"
        ],
        "definitions": [
            {
                "text": "Enthusiasmus empfindend.",
                "examples": [
                    "Sie ist aufgeregt wegen ihrer neuen Arbeit."
                ]
            }
        ],
        "comparative": "aufgeregter",
        "superlative": "am aufgeregtesten",
        "feminine": "aufgeregte",
        "neuter": "aufgeregtes",
        "plural": "aufgeregte",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_009"
    },
    {
        "word": "ängstlich",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "Angst vor",
            "Angst haben",
            "tiefe Angst"
        ],
        "definitions": [
            {
                "text": "Angst empfindend.",
                "examples": [
                    "Er hat Angst, Fehler zu machen."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "ängstlicher",
        "superlative": "am ängstlichsten",
        "feminine": "ängstliche",
        "neuter": "ängstliches",
        "plural": "ängstliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_010"
    },
    {
        "word": "tut mir leid",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "Bedauern empfinden",
            "Mitleid mit",
            "leid tun wegen"
        ],
        "definitions": [
            {
                "text": "Bedauern empfindend.",
                "examples": [
                    "Es tut ihr leid wegen der Verspätung."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": null,
        "superlative": null,
        "feminine": "tut mir leid",
        "neuter": "tut mir leid",
        "plural": "tut mir leid",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_011"
    },
    {
        "word": "richtig",
        "level": "starter",
        "form": "adjective",
        "subtext": "absolut richtig",
        "synonyms": [
            "richtige Antwort",
            "richtige Zeit"
        ],
        "definitions": [
            {
                "text": "Korrekt; passend.",
                "examples": [
                    "Ist dies das richtige Büro?"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "richtiger",
        "superlative": "am richtigsten",
        "feminine": "richtige",
        "neuter": "richtiges",
        "plural": "richtige",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_032"
    },
    {
        "word": "falsch",
        "level": "starter",
        "form": "adjective",
        "subtext": "völlig falsch",
        "synonyms": [
            "falsche Antwort",
            "schiefgehen"
        ],
        "definitions": [
            {
                "text": "Nicht korrekt.",
                "examples": [
                    "Das war die falsche Entscheidung."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "falscher",
        "superlative": "am falschesten",
        "feminine": "falsche",
        "neuter": "falsches",
        "plural": "falsche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_033"
    },
    {
        "word": "neu",
        "level": "starter",
        "form": "adjective",
        "subtext": "völlig neu",
        "synonyms": [
            "neue Stelle",
            "brandneu"
        ],
        "definitions": [
            {
                "text": "Vorher nicht existent.",
                "examples": [
                    "Sie hat eine neue Stelle."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "neuer",
        "superlative": "am neuesten",
        "feminine": "neue",
        "neuter": "neues",
        "plural": "neue",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "neujaz"
        },
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_034"
    },
    {
        "word": "anders",
        "level": "starter",
        "form": "adjective",
        "subtext": "völlig anders / anders als",
        "synonyms": [
            "sehr verschieden"
        ],
        "definitions": [
            {
                "text": "Nicht das Gleiche.",
                "examples": [
                    "Diese Arbeit ist ganz anders."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "anders",
        "neuter": "anders",
        "plural": "anders",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_035"
    },
    {
        "word": "gleich",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "das Gleiche wie",
            "exakt das Gleiche",
            "gleiche Zeit"
        ],
        "definitions": [
            {
                "text": "Identisch.",
                "examples": [
                    "Sie verdienen das gleiche Gehalt."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "gleich",
        "neuter": "gleich",
        "plural": "gleich",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_036"
    },
    {
        "word": "schnell",
        "level": "starter",
        "form": "adjective",
        "subtext": "sehr schnell",
        "synonyms": [
            "Fast Food",
            "Schnellzug"
        ],
        "definitions": [
            {
                "text": "Sich schnell bewegend.",
                "examples": [
                    "Der Zug ist schnell."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "schneller",
        "superlative": "am schnellsten",
        "feminine": "schnelle",
        "neuter": "schnelles",
        "plural": "schnelle",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_037"
    },
    {
        "word": "langsam",
        "level": "starter",
        "form": "adjective",
        "subtext": "sehr langsam",
        "synonyms": [
            "langsamer Fortschritt",
            "langsames Internet"
        ],
        "definitions": [
            {
                "text": "Nicht schnell.",
                "examples": [
                    "Das neue System ist sehr langsam."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "langsamer",
        "superlative": "am langsamsten",
        "feminine": "langsame",
        "neuter": "langsames",
        "plural": "langsame",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_038"
    },
    {
        "word": "leise",
        "level": "starter",
        "form": "adjective",
        "subtext": "leise sein",
        "synonyms": [
            "ruhige Gegend",
            "schön ruhig"
        ],
        "definitions": [
            {
                "text": "Wenig oder kein Geräusch machend.",
                "examples": [
                    "Das Büro ist mittags leise."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "leiser",
        "superlative": "am leisesten",
        "feminine": "leisee",
        "neuter": "leisees",
        "plural": "leisee",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_039"
    },
    {
        "word": "laut",
        "level": "starter",
        "form": "adjective",
        "subtext": "zu laut",
        "synonyms": [
            "lautes Geräusch",
            "eine laute Stimme"
        ],
        "definitions": [
            {
                "text": "Viel Lärm machend.",
                "examples": [
                    "Das Büro ist zu laut."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "lauter",
        "superlative": "am lautesten",
        "feminine": "laute",
        "neuter": "lautes",
        "plural": "laute",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_040"
    },
    {
        "word": "sicher",
        "level": "starter",
        "form": "adjective",
        "subtext": "sicher zu tun / sich sicher fühlen",
        "synonyms": [
            "sichere Gegend"
        ],
        "definitions": [
            {
                "text": "Nicht gefährlich.",
                "examples": [
                    "Diese Nachbarschaft ist sehr sicher."
                ]
            }
        ],
        "theme": "places",
        "comparative": "sicherer",
        "superlative": "am sichersten",
        "feminine": "sichere",
        "neuter": "sicheres",
        "plural": "sichere",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_places_001"
    },
    {
        "word": "gefährlich",
        "level": "starter",
        "form": "adjective",
        "subtext": "sehr gefährlich / potenziell gefährlich",
        "synonyms": [
            "gefährliche Situation"
        ],
        "definitions": [
            {
                "text": "Wahrscheinlich Schaden verursachend.",
                "examples": [
                    "Dieser Weg ist gefährlich."
                ]
            }
        ],
        "theme": "places",
        "comparative": "gefährlicher",
        "superlative": "am gefährlichsten",
        "feminine": "gefährliche",
        "neuter": "gefährliches",
        "plural": "gefährliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_places_002"
    },
    {
        "word": "unglücklich",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nicht zufrieden.",
                "examples": [
                    "Er ist unglücklich mit seinem Gehalt."
                ]
            }
        ],
        "subtext": "sich unglücklich fühlen / sehr unglücklich / unglücklich über",
        "comparative": "unglücklicher",
        "superlative": "am unglücklichsten",
        "feminine": "unglückliche",
        "neuter": "unglückliches",
        "plural": "unglückliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_012"
    },
    {
        "word": "nervös",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sich ängstlich fühlend.",
                "examples": [
                    "Er war vor dem Interview nervös."
                ]
            }
        ],
        "subtext": "sich nervös fühlen / nervös wegen / sehr nervös",
        "comparative": "nervöser",
        "superlative": "am nervösesten",
        "feminine": "nervöse",
        "neuter": "nervöses",
        "plural": "nervöse",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_013"
    },
    {
        "word": "gestresst",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sich besorgt und angespannt fühlend.",
                "examples": [
                    "Sie fühlt sich vor jeder Frist gestresst."
                ]
            }
        ],
        "subtext": "sich gestresst fühlen / sehr gestresst / total gestresst",
        "comparative": "gestresster",
        "superlative": "am gestresstesten",
        "feminine": "gestresste",
        "neuter": "gestresstes",
        "plural": "gestresste",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_014"
    },
    {
        "word": "selbstbewusst",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sicher der eigenen Fähigkeiten.",
                "examples": [
                    "Sie ist sehr selbstbewusst."
                ]
            }
        ],
        "subtext": "selbstbewusst",
        "synonyms": [
            "sich sicher fühlen",
            "sehr sicher"
        ],
        "comparative": "selbstbewusster",
        "superlative": "am selbstbewusstesten",
        "feminine": "selbstbewusste",
        "neuter": "selbstbewusstes",
        "plural": "selbstbewusste",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_041"
    },
    {
        "word": "stolz",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sich über eine Leistung freuend.",
                "examples": [
                    "Er war stolz auf seine Beförderung."
                ]
            }
        ],
        "subtext": "stolz sein / sehr stolz / stolz auf",
        "comparative": "stolzer",
        "superlative": "am stolzesten",
        "feminine": "stolze",
        "neuter": "stolzes",
        "plural": "stolze",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_042"
    },
    {
        "word": "verängstigt",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Angst vor etwas empfindend.",
                "examples": [
                    "Sie hatte Angst vor der Präsentation."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "Angst haben",
            "Angst vor",
            "große Angst"
        ],
        "comparative": "verängstigter",
        "superlative": "am verängstigtsten",
        "feminine": "verängstigte",
        "neuter": "verängstigtes",
        "plural": "verängstigte",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_015"
    },
    {
        "word": "überrascht",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Schock über etwas Unerwartetes.",
                "examples": [
                    "Er war überrascht."
                ]
            }
        ],
        "subtext": "überrascht sein / sehr überrascht / angenehm überrascht",
        "comparative": "überraschter",
        "superlative": "am überraschtesten",
        "feminine": "überraschte",
        "neuter": "überraschtes",
        "plural": "überraschte",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_016"
    },
    {
        "word": "enttäuscht",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Traurig, weil etwas nicht so gut war wie erwartet.",
                "examples": [
                    "Sie war enttäuscht."
                ]
            }
        ],
        "subtext": "enttäuscht sein / zutiefst enttäuscht / enttäuscht von",
        "comparative": "enttäuschter",
        "superlative": "am enttäuchtesten",
        "feminine": "enttäuschte",
        "neuter": "enttäuschtes",
        "plural": "enttäuschte",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_emotions_017"
    },
    {
        "word": "schön",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Attraktiv und angenehm anzusehen.",
                "examples": [
                    "Sie hat ein schönes Büro."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "schöne Aussicht",
            "schöne Stadt",
            "absolut wunderschön"
        ],
        "comparative": "schöner",
        "superlative": "am schönsten",
        "feminine": "schöne",
        "neuter": "schönes",
        "plural": "schöne",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_043"
    },
    {
        "word": "hübsch",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Angenehm anzusehen.",
                "examples": [
                    "Der Raum ist sehr hübsch."
                ]
            }
        ],
        "subtext": "recht hübsch",
        "synonyms": [
            "ziemlich gut",
            "ein hübscher Ort"
        ],
        "comparative": "hübscher",
        "superlative": "am hübschesten",
        "feminine": "hübsche",
        "neuter": "hübsches",
        "plural": "hübsche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_044"
    },
    {
        "word": "stark",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Große körperliche oder geistige Kraft habend.",
                "examples": [
                    "Sie ist eine starke Führungspersönlichkeit."
                ]
            }
        ],
        "subtext": "sehr stark",
        "synonyms": [
            "starker Kaffee",
            "starke Meinung"
        ],
        "comparative": "stärker",
        "superlative": "am stärksten",
        "feminine": "starke",
        "neuter": "starkes",
        "plural": "starke",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_045"
    },
    {
        "word": "schwach",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Fehlende Kraft.",
                "examples": [
                    "Das Signal ist schwach."
                ]
            }
        ],
        "subtext": "schwache Verbindung / sehr schwach",
        "synonyms": [
            "ein schwaches Argument"
        ],
        "comparative": "schwächer",
        "superlative": "am schwächsten",
        "feminine": "schwache",
        "neuter": "schwaches",
        "plural": "schwache",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_046"
    },
    {
        "word": "fit",
        "level": "starter",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "In guter körperlicher Verfassung.",
                "examples": [
                    "Sie hält sich fit."
                ]
            }
        ],
        "subtext": "körperlich fit / fit bleiben / fit halten",
        "comparative": "fitter",
        "superlative": "am fittesten",
        "feminine": "fite",
        "neuter": "fites",
        "plural": "fite",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_health_medicine_002"
    },
    {
        "word": "ausgezeichnet",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extrem gut.",
                "examples": [
                    "Sie erhielt eine ausgezeichnete Bewertung."
                ]
            }
        ],
        "subtext": "absolut ausgezeichnet",
        "synonyms": [
            "ausgezeichnete Arbeit",
            "ausgezeichnete Ergebnisse"
        ],
        "comparative": "ausgezeichneter",
        "superlative": "am ausgezeichnetsten",
        "feminine": "ausgezeichnete",
        "neuter": "ausgezeichnetes",
        "plural": "ausgezeichnete",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_047"
    },
    {
        "word": "perfekt",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ohne Fehler.",
                "examples": [
                    "Das Timing war perfekt."
                ]
            }
        ],
        "subtext": "absolut perfekt",
        "synonyms": [
            "eine perfekte Gelegenheit",
            "perfektes Timing"
        ],
        "comparative": "perfekter",
        "superlative": "am perfektesten",
        "feminine": "perfekte",
        "neuter": "perfektes",
        "plural": "perfekte",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_048"
    },
    {
        "word": "nutzlos",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ohne nützlichen Wert.",
                "examples": [
                    "Diese Software ist nutzlos."
                ]
            }
        ],
        "subtext": "völlig nutzlos / sich als nutzlos erweisen",
        "synonyms": [
            "eine nutzlose Idee"
        ],
        "comparative": "nutzloser",
        "superlative": "am nutzlosesten",
        "feminine": "nutzlose",
        "neuter": "nutzloses",
        "plural": "nutzlose",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_049"
    },
    {
        "word": "korrekt",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Wahr oder richtig.",
                "examples": [
                    "Prüfen Sie, ob die Zahlen korrekt sind."
                ]
            }
        ],
        "subtext": "völlig korrekt",
        "synonyms": [
            "korrekte Antwort",
            "der richtige Weg"
        ],
        "comparative": "korrekter",
        "superlative": "am korrektesten",
        "feminine": "korrekte",
        "neuter": "korrektes",
        "plural": "korrekte",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_050"
    },
    {
        "word": "interessant",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Aufmerksamkeit erregend.",
                "examples": [
                    "Der Vorschlag ist sehr interessant."
                ]
            }
        ],
        "subtext": "interessant finden / sehr interessant",
        "synonyms": [
            "eine interessante Idee"
        ],
        "comparative": "interessanter",
        "superlative": "am interessantesten",
        "feminine": "interessante",
        "neuter": "interessantes",
        "plural": "interessante",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_051"
    },
    {
        "word": "langweilig",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nicht interessant.",
                "examples": [
                    "Die Sitzung war sehr langweilig."
                ]
            }
        ],
        "subtext": "sehr langweilig / langweilig finden",
        "synonyms": [
            "ein langweiliges Treffen"
        ],
        "comparative": "langweiliger",
        "superlative": "am langweiligsten",
        "feminine": "langweilige",
        "neuter": "langweiliges",
        "plural": "langweilige",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_052"
    },
    {
        "word": "notwendig",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Benötigt; erforderlich.",
                "examples": [
                    "Eine gute Internetverbindung ist notwendig."
                ]
            }
        ],
        "subtext": "absolut notwendig / notwendig zu tun",
        "synonyms": [
            "falls nötig"
        ],
        "comparative": "notwendiger",
        "superlative": "am notwendigsten",
        "feminine": "notwendige",
        "neuter": "notwendiges",
        "plural": "notwendige",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_053"
    },
    {
        "word": "möglich",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Kann passieren.",
                "examples": [
                    "Ist es möglich, bis Freitag fertig zu werden?"
                ]
            }
        ],
        "subtext": "so bald wie möglich / es ist möglich / möglich machen",
        "comparative": null,
        "superlative": null,
        "feminine": "mögliche",
        "neuter": "mögliches",
        "plural": "mögliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_054"
    },
    {
        "word": "unmöglich",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Kann nicht passieren.",
                "examples": [
                    "Es ist unmöglich."
                ]
            }
        ],
        "subtext": "praktisch unmöglich / unmöglich machen / fast unmöglich",
        "comparative": null,
        "superlative": null,
        "feminine": "unmögliche",
        "neuter": "unmögliches",
        "plural": "unmögliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_055"
    },
    {
        "word": "besonders",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Anders als üblich.",
                "examples": [
                    "Sie hat ein besonderes Talent."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "ein besonderes Angebot",
            "besonderer Anlass",
            "sehr speziell"
        ],
        "comparative": "besonderer",
        "superlative": "am besondersten",
        "feminine": "besonderse",
        "neuter": "besonderses",
        "plural": "besonderse",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_056"
    },
    {
        "word": "beliebt",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Von vielen gemocht.",
                "examples": [
                    "Das Café ist sehr beliebt."
                ]
            }
        ],
        "subtext": "sehr beliebt",
        "synonyms": [
            "beliebte Wahl",
            "am beliebtesten"
        ],
        "comparative": "beliebter",
        "superlative": "am beliebtesten",
        "feminine": "beliebte",
        "neuter": "beliebtes",
        "plural": "beliebte",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_057"
    },
    {
        "word": "ähnlich",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Fast das Gleiche.",
                "examples": [
                    "Unsere Ansätze sind sehr ähnlich."
                ]
            }
        ],
        "subtext": "sehr ähnlich / ähnlich wie",
        "synonyms": [
            "ähnliche Ergebnisse"
        ],
        "comparative": "ähnlicher",
        "superlative": "am ähnlichsten",
        "feminine": "ähnliche",
        "neuter": "ähnliches",
        "plural": "ähnliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_058"
    },
    {
        "word": "freundlich",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nett und angenehm.",
                "examples": [
                    "Der neue Manager ist sehr freundlich."
                ]
            }
        ],
        "subtext": "sehr freundlich",
        "synonyms": [
            "ein freundliches Gesicht",
            "freundliche Atmosphäre"
        ],
        "comparative": "freundlicher",
        "superlative": "am freundlichsten",
        "feminine": "freundliche",
        "neuter": "freundliches",
        "plural": "freundliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_059"
    },
    {
        "word": "gütig",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Großzügig gegenüber anderen.",
                "examples": [
                    "Sie ist gütig zu allen."
                ]
            }
        ],
        "subtext": "sehr gütig",
        "synonyms": [
            "nett von dir",
            "ein gütiger Mensch"
        ],
        "comparative": "gütiger",
        "superlative": "am gütigsten",
        "feminine": "gütige",
        "neuter": "gütiges",
        "plural": "gütige",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_060"
    },
    {
        "word": "lustig",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Menschen zum Lachen bringend.",
                "examples": [
                    "Er hat eine lustige Art."
                ]
            }
        ],
        "subtext": "sehr lustig / lustig finden",
        "synonyms": [
            "lustige Geschichte"
        ],
        "comparative": "lustiger",
        "superlative": "am lustigsten",
        "feminine": "lustige",
        "neuter": "lustiges",
        "plural": "lustige",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_061"
    },
    {
        "word": "schlau",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Intelligent; schnell verstehend.",
                "examples": [
                    "Sie ist eine schlaue Verhandlerin."
                ]
            }
        ],
        "subtext": "sehr schlau / schlau genug",
        "synonyms": [
            "eine schlaue Idee"
        ],
        "comparative": "schlauer",
        "superlative": "am schlauesten",
        "feminine": "schlaue",
        "neuter": "schlaues",
        "plural": "schlaue",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_062"
    },
    {
        "word": "höflich",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sich respektvoll verhaltend.",
                "examples": [
                    "Er ist immer höflich."
                ]
            }
        ],
        "subtext": "sehr höflich / höflich genug",
        "synonyms": [
            "höfliche Bitte"
        ],
        "comparative": "höflicher",
        "superlative": "am höflichsten",
        "feminine": "höfliche",
        "neuter": "höfliches",
        "plural": "höfliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_063"
    },
    {
        "word": "unhöflich",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nicht höflich.",
                "examples": [
                    "Diese E-Mail war recht unhöflich."
                ]
            }
        ],
        "subtext": "sehr unhöflich / unglaublich unhöflich / absichtlich unhöflich",
        "comparative": "unhöflicher",
        "superlative": "am unhöflichsten",
        "feminine": "unhöfliche",
        "neuter": "unhöfliches",
        "plural": "unhöfliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_064"
    },
    {
        "word": "faul",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nicht bereit zu arbeiten.",
                "examples": [
                    "Er ist faul."
                ]
            }
        ],
        "subtext": "sehr faul / zu faul",
        "synonyms": [
            "eine faule Herangehensweise"
        ],
        "comparative": "fauler",
        "superlative": "am faulsten",
        "feminine": "faule",
        "neuter": "faules",
        "plural": "faule",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_065"
    },
    {
        "word": "ehrlich",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Die Wahrheit sagend.",
                "examples": [
                    "Sie ist ehrlich."
                ]
            }
        ],
        "subtext": "sehr ehrlich / brutal ehrlich / völlig ehrlich",
        "comparative": "ehrlicher",
        "superlative": "am ehrlichsten",
        "feminine": "ehrliche",
        "neuter": "ehrliches",
        "plural": "ehrliche",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_066"
    },
    {
        "word": "laut",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Viel Geräusch machend.",
                "examples": [
                    "Das Büro ist sehr laut."
                ]
            }
        ],
        "subtext": "sehr laut / zu laut",
        "synonyms": [
            "laute Umgebung"
        ],
        "comparative": "lauter",
        "superlative": "am lautesten",
        "feminine": "laute",
        "neuter": "lautes",
        "plural": "laute",
        "lang": "de",
        "transcription": "",
        "emoji": "✨",
        "id": "de_starter_describing_067"
    }
];
    const lang = "de";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
})();
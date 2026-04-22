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
        "subtext": "groß genug",
        "synonyms": ["ein hohes Gebäude", "eine große Person"],
        "feminine": "große",
        "neuter": "großes",
        "plural": "große",
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
        "subtext": "",
        "synonyms": ["eine kurze Reise", "kurze Haare", "zu kurz"],
        "feminine": "kleine",
        "neuter": "kleines",
        "plural": "kleine",
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
        "subtext": "im Herzen jung",
        "synonyms": ["junge Person", "junger Profi"],
        "feminine": "junge",
        "neuter": "junges",
        "plural": "junge",
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
        "subtext": "sehr alt",
        "synonyms": ["alter Freund", "alte Gewohnheiten"],
        "feminine": "alte",
        "neuter": "altes",
        "plural": "alte",
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
        "subtext": "",
        "synonyms": ["sonniger Tag", "sonniges Wetter", "sonnige Abschnitte"],
        "feminine": "sonnige",
        "neuter": "sonniges",
        "plural": "sonnige",
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
        "subtext": "",
        "synonyms": ["regnerischer Tag", "regnerisches Wetter", "Regenzeit"],
        "feminine": "regnerische",
        "neuter": "regnerisches",
        "plural": "regnerische",
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
        "subtext": "sehr heiß, heißes Wetter / zu heiß",
        "synonyms": ["heißes Wetter", "ein heißes Getränk"],
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
        "subtext": "sehr kalt, kalter Morgen / zu kalt",
        "synonyms": ["kaltes Wetter", "ein kaltes Getränk"],
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
        "subtext": "",
        "synonyms": ["gewöhnlicher Tag", "gewöhnliches Leben", "nichts Gewöhnliches"],
        "feminine": "gewöhnliche",
        "neuter": "gewöhnliches",
        "plural": "gewöhnliche",
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
        "subtext": "sehr billig / billig und gut",
        "synonyms": ["niedriger Preis", "preiswert", "billiger Flug"],
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
        "subtext": "sehr teuer / zu teuer",
        "synonyms": ["kostspielig", "hoher Preis", "teurer Geschmack"],
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
        "subtext": "",
        "synonyms": ["großartig", "nett", "angenehm", "gute Idee", "viel Glück", "gutes Preis-Leistungs-Verhältnis"],
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
        "subtext": "",
        "synonyms": ["schrecklich", "furchtbar", "unangenehm", "schlechte Nachrichten", "Pech", "schlechte Entscheidung"],
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
        "subtext": "groß, riesig / groß genug",
        "synonyms": ["ein großes Haus", "ein großes Problem"],
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
        "subtext": "klein, winzig / zu klein",
        "synonyms": ["eine kleine Wohnung", "ein kleines Gehalt"],
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
        "subtext": "einfach zu machen / schön einfach / nicht einfach",
        "feminine": "einfache",
        "neuter": "einfaches",
        "plural": "einfache",
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
        "subtext": "schwierig zu machen / sehr schwierig / es schwierig finden",
        "feminine": "schwierige",
        "neuter": "schwieriges",
        "plural": "schwierige",
        "comparative": "schwieriger",
        "superlative": "am schwierigsten"
    },
    {
        "word": "glücklich",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "froh, fröhlich, glücklich sein / glücklich sein / mit etwas zufrieden sein",
        "synonyms": ["ein glücklicher Tag"],
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
        "superlative": "am glücklichsten"
    },
    {
        "word": "müde",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
                    "Sie hat eine Vollzeitstelle."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["Vollzeitstelle", "Vollzeitarbeit", "Vollzeitmitarbeiter"],
        "comparative": null,
        "superlative": null,
        "feminine": "Vollzeit",
        "neuter": "Vollzeit",
        "plural": "Vollzeit"
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
        "subtext": "",
        "synonyms": ["Teilzeitstelle", "Teilzeitarbeit", "Teilzeitstudent"],
        "comparative": null,
        "superlative": null,
        "feminine": "Teilzeit",
        "neuter": "Teilzeit",
        "plural": "Teilzeit"
    },
    {
        "word": "sauber",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "schmutzig",
        "oppositeEmoji": "💩",
        "subtext": "ordentlich, nicht schmutzig, sauber halten / sauber halten",
        "synonyms": ["saubere Kleidung", "ein sauberes Zimmer"],
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
        "superlative": "am saubersten"
    },
    {
        "word": "gesund",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "ungesund",
        "oppositeEmoji": "🍔",
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
        "superlative": "am gesündesten"
    },
    {
        "word": "krank",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "gesund",
        "oppositeEmoji": "💪",
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
        "superlative": "am kränksten"
    },
    {
        "word": "online",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
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
        "subtext": "Online-Shopping / Online-Kurs / online bleiben",
        "comparative": null,
        "superlative": null,
        "feminine": "online",
        "neuter": "online",
        "plural": "online"
    },
    {
        "word": "allein",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "zusammen",
        "oppositeEmoji": "👫",
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
        "superlative": "am entspanntesten"
    },
    {
        "word": "besorgt",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "ruhig",
        "oppositeEmoji": "😌",
        "subtext": "",
        "synonyms": ["ängstlich"],
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
        "superlative": "am besorgtesten"
    },
    {
        "word": "beschäftigt",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "sehr beschäftigt, beschäftigter Tag / sehr beschäftigt / zu beschäftigt",
        "synonyms": ["voller Zeitplan"],
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
        "subtext": "",
        "synonyms": ["hilfreich", "praktisch"],
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
        "superlative": "am nützlichsten"
    },
    {
        "word": "wichtig",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "sehr wichtig",
        "synonyms": ["wesentlich", "wichtiges Treffen", "am wichtigsten"],
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
        "superlative": "am wichtigsten"
    },
    {
        "word": "rot",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["dunkelrot", "hellrot", "Rotwein", "rotes Gesicht", "rote Ampel"],
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
        "superlative": "am rötesten"
    },
    {
        "word": "blau",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["hellblau", "dunkelblau", "dunkelblau", "hellblau", "blauer Himmel"],
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
        "superlative": "am blauesten"
    },
    {
        "word": "grün",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["hellgrün", "dunkelgrün", "grüne Energie", "Grünfläche", "hellgrün"],
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
        "superlative": "am grünsten"
    },
    {
        "word": "weiß",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "gebrochenes Weiß / strahlendes Weiß",
        "synonyms": ["reinweiß", "schneeweiß", "Weißwein"],
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
        "superlative": "am weißesten"
    },
    {
        "word": "schwarz",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["tiefschwarz", "nachtschwarz", "schwarzer Kaffee", "Schwarzmarkt", "tiefschwarz"],
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
        "superlative": "am schwärzesten"
    },
    {
        "word": "gelb",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["hellgelb", "zitronengelb", "gelbes Licht", "blassgelb", "hellgelb"],
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
        "superlative": "am gelbsten"
    },
    {
        "word": "kostenlos",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "kostenlos, Gratisgeschenk / kostenlos",
        "synonyms": ["Freizeit", "frei zu tun"],
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
        "subtext": "jetzt offen, geschäftsoffen / offen für Ideen / weit offen",
        "synonyms": ["offene Tür"],
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
        "subtext": "jetzt geschlossen, vorübergehend geschlossen",
        "synonyms": ["Mittagspause", "engstirnig", "geschlossene Tür"],
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
        "superlative": null
    },
    {
        "word": "groß",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["eine Großstadt", "ein großes Unternehmen", "eine große Menge"],
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
        "superlative": "am größten",
        "feminine": "große",
        "neuter": "großes",
        "plural": "große"
    },
    {
        "word": "klein",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["ein kleines bisschen", "ein wenig Geld", "zu wenig"],
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
        "superlative": "am kleinsten",
        "feminine": "kleine",
        "neuter": "kleines",
        "plural": "kleine"
    },
    {
        "word": "lang",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["eine lange Reise", "ein langer Tag", "eine lange Zeit"],
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
        "superlative": "am längsten",
        "feminine": "lange",
        "neuter": "langes",
        "plural": "lange"
    },
    {
        "word": "hoch",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["hoher Preis", "hohe Miete", "hohe Qualität"],
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
        "superlative": "am höchsten",
        "feminine": "hohe",
        "neuter": "hohes",
        "plural": "hohe"
    },
    {
        "word": "niedrig",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["niedriger Preis", "niedriges Gehalt", "niedrige Qualität"],
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
        "superlative": "am niedrigsten",
        "feminine": "niedrige",
        "neuter": "niedriges",
        "plural": "niedrige"
    },
    {
        "word": "voll",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["Vollzeit", "ein ganzer Tag", "voller Menschen"],
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
        "superlative": "am vollsten",
        "feminine": "volle",
        "neuter": "volles",
        "plural": "volle"
    },
    {
        "word": "leer",
        "level": "starter",
        "form": "adjective",
        "subtext": "fast leer",
        "synonyms": ["eine leere Wohnung", "ein leeres Zimmer"],
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
        "superlative": "am leersten",
        "feminine": "lere",
        "neuter": "leres",
        "plural": "lere"
    },
    {
        "word": "warm",
        "level": "starter",
        "form": "adjective",
        "subtext": "warm halten",
        "synonyms": ["warmes Wetter", "ein herzliches Willkommen"],
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
        "superlative": "am wärmsten",
        "feminine": "warme",
        "neuter": "warmes",
        "plural": "warme"
    },
    {
        "word": "kühl",
        "level": "starter",
        "form": "adjective",
        "subtext": "kühl bleiben",
        "synonyms": ["kühles Wetter", "ein kühles Getränk"],
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
        "superlative": "am kühlsten",
        "feminine": "kühle",
        "neuter": "kühles",
        "plural": "kühle"
    },
    {
        "word": "nass",
        "level": "starter",
        "form": "adjective",
        "subtext": "nass werden",
        "synonyms": ["nasses Wetter", "nasse Kleidung"],
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
        "superlative": "am nassesten",
        "feminine": "nasse",
        "neuter": "nasses",
        "plural": "nasse"
    },
    {
        "word": "trocken",
        "level": "starter",
        "form": "adjective",
        "subtext": "trocken bleiben",
        "synonyms": ["trockenes Wetter", "trockene Haut"],
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
        "superlative": "am trockensten",
        "feminine": "trockene",
        "neuter": "trockenes",
        "plural": "trockene"
    },
    {
        "word": "schmutzig",
        "level": "starter",
        "theme": "household_tasks_A1",
        "form": "adjective",
        "subtext": "schmutzig werden",
        "synonyms": ["schmutzige Hände", "schmutzige Kleidung"],
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
        "plural": "schmutzige"
    },
    {
        "word": "hart",
        "level": "starter",
        "form": "adjective",
        "subtext": "zu hart",
        "synonyms": ["harte Arbeit", "eine harte Entscheidung"],
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
        "superlative": "am härtesten",
        "feminine": "harte",
        "neuter": "hartes",
        "plural": "harte"
    },
    {
        "word": "weich",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["weiches Licht", "sanfte Musik", "Soft Skills"],
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
        "superlative": "am weichsten",
        "feminine": "weiche",
        "neuter": "weiches",
        "plural": "weiche"
    },
    {
        "word": "schwer",
        "level": "starter",
        "form": "adjective",
        "subtext": "zu schwer",
        "synonyms": ["starker Verkehr", "starker Regen"],
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
        "superlative": "am schwersten",
        "feminine": "schwere",
        "neuter": "schweres",
        "plural": "schwere"
    },
    {
        "word": "leicht",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["leichter Regen", "wenig Verkehr", "eine leichte Mahlzeit"],
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
        "superlative": "am leichtesten",
        "feminine": "leichte",
        "neuter": "leichtes",
        "plural": "leichte"
    },
    {
        "word": "braun",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["dunkelbraun", "hellbraun", "Schwarzbrot"],
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
        "superlative": "am braunsten",
        "feminine": "braune",
        "neuter": "braunes",
        "plural": "braune"
    },
    {
        "word": "grau",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["Grauzone", "grauer Himmel", "blassgrau"],
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
        "superlative": "am grausten",
        "feminine": "graue",
        "neuter": "graues",
        "plural": "graue"
    },
    {
        "word": "rosa",
        "level": "starter",
        "form": "adjective",
        "subtext": "leuchtendes Rosa / kräftiges Rosa",
        "synonyms": ["hellrosa"],
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
        "superlative": "am rosasten",
        "feminine": "rosae",
        "neuter": "rosaes",
        "plural": "rosae"
    },
    {
        "word": "orange",
        "level": "starter",
        "form": "adjective",
        "subtext": "oranges Licht",
        "synonyms": ["hellorange", "dunkelorange"],
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
        "superlative": "am orangesten",
        "feminine": "orangee",
        "neuter": "orangees",
        "plural": "orangee"
    },
    {
        "word": "großartig",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["eine großartige Idee", "eine tolle Gelegenheit", "hoher Wert"],
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
        "superlative": "am großartigsten",
        "feminine": "großartige",
        "neuter": "großartiges",
        "plural": "großartige"
    },
    {
        "word": "nett",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["ein schöner Tag", "ein schöner Ort", "eine nette Person"],
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
        "superlative": "am nettesten",
        "feminine": "nette",
        "neuter": "nettes",
        "plural": "nette"
    },
    {
        "word": "wunderbar",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["eine wunderbare Gelegenheit", "eine wunderbare Zeit"],
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
        "superlative": "am wunderbarsten",
        "feminine": "wunderbare",
        "neuter": "wunderbares",
        "plural": "wunderbare"
    },
    {
        "word": "furchtbar",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["furchtbares Wetter", "ein schrecklicher Fehler", "schreckliche Nachrichten"],
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
        "superlative": "am furchtbarsten",
        "feminine": "furchtbare",
        "neuter": "furchtbares",
        "plural": "furchtbare"
    },
    {
        "word": "schrecklich",
        "level": "starter",
        "form": "adjective",
        "subtext": "einfach schrecklich",
        "synonyms": ["schreckliches Wetter", "schreckliche Nachrichten"],
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
        "superlative": "am schrecklichsten",
        "feminine": "schreckliche",
        "neuter": "schreckliches",
        "plural": "schreckliche"
    },
    {
        "word": "erstaunlich",
        "level": "starter",
        "form": "adjective",
        "subtext": "wirklich erstaunlich",
        "synonyms": ["ein erstaunliches Ergebnis", "ein tolles Angebot"],
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
        "superlative": "am erstaunlichsten",
        "feminine": "erstaunliche",
        "neuter": "erstaunliches",
        "plural": "erstaunliche"
    },
    {
        "word": "fantastisch",
        "level": "starter",
        "form": "adjective",
        "subtext": "wirklich fantastisch",
        "synonyms": ["fantastische Neuigkeiten", "eine fantastische Gelegenheit"],
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
        "superlative": "am fantastischsten",
        "feminine": "fantastische",
        "neuter": "fantastisches",
        "plural": "fantastische"
    },
    {
        "word": "traurig",
        "level": "starter",
        "form": "adjective",
        "subtext": "sich traurig fühlen / zutiefst traurig",
        "synonyms": ["eine traurige Situation"],
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
        "superlative": "am traurigsten",
        "feminine": "traurige",
        "neuter": "trauriges",
        "plural": "traurige"
    },
    {
        "word": "hungrig",
        "level": "starter",
        "form": "adjective",
        "subtext": "sehr hungrig",
        "synonyms": ["Hunger haben", "hungern"],
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
        "superlative": "am hungrigsten",
        "feminine": "hungrige",
        "neuter": "hungriges",
        "plural": "hungrige"
    },
    {
        "word": "wütend",
        "level": "starter",
        "form": "adjective",
        "subtext": "wütend sein / sehr wütend",
        "synonyms": ["sauer auf jemanden"],
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
        "superlative": "am wütendsten",
        "feminine": "wütende",
        "neuter": "wütendes",
        "plural": "wütende"
    },
    {
        "word": "gelangweilt",
        "level": "starter",
        "form": "adjective",
        "subtext": "gelangweilt von / leicht gelangweilt",
        "synonyms": ["sich langweilen"],
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
        "superlative": "am gelangweiltesten",
        "feminine": "gelangweilte",
        "neuter": "gelangweiltes",
        "plural": "gelangweilte"
    },
    {
        "word": "aufgeregt",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "subtext": "aufgeregt sein / sehr aufgeregt",
        "synonyms": ["begeistert von"],
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
        "plural": "aufgeregte"
    },
    {
        "word": "ängstlich",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["Angst vor", "Angst haben", "tiefe Angst"],
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
        "superlative": "am ängstlichsten",
        "feminine": "ängstliche",
        "neuter": "ängstliches",
        "plural": "ängstliche"
    },
    {
        "word": "tut mir leid",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["Bedauern empfinden", "Mitleid mit", "leid tun wegen"],
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
        "superlative": null,
        "feminine": "tut mir leid",
        "neuter": "tut mir leid",
        "plural": "tut mir leid"
    },
    {
        "word": "richtig",
        "level": "starter",
        "form": "adjective",
        "subtext": "absolut richtig",
        "synonyms": ["richtige Antwort", "richtige Zeit"],
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
        "superlative": "am richtigsten",
        "feminine": "richtige",
        "neuter": "richtiges",
        "plural": "richtige"
    },
    {
        "word": "falsch",
        "level": "starter",
        "form": "adjective",
        "subtext": "völlig falsch",
        "synonyms": ["falsche Antwort", "schiefgehen"],
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
        "superlative": "am falschesten",
        "feminine": "falsche",
        "neuter": "falsches",
        "plural": "falsche"
    },
    {
        "word": "neu",
        "level": "starter",
        "form": "adjective",
        "subtext": "völlig neu",
        "synonyms": ["neue Stelle", "brandneu"],
        "definitions": [
            {
                "text": "Vorher nicht existent.",
                "examples": [
                    "Sie hat eine neue Stelle."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "neuer",
        "superlative": "am neuesten",
        "feminine": "neue",
        "neuter": "neues",
        "plural": "neue"
    },
    {
        "word": "anders",
        "level": "starter",
        "form": "adjective",
        "subtext": "völlig anders / anders als",
        "synonyms": ["sehr verschieden"],
        "definitions": [
            {
                "text": "Nicht das Gleiche.",
                "examples": [
                    "Diese Arbeit ist ganz anders."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "anders",
        "neuter": "anders",
        "plural": "anders"
    },
    {
        "word": "gleich",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["das Gleiche wie", "exakt das Gleiche", "gleiche Zeit"],
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
        "superlative": null,
        "feminine": "gleich",
        "neuter": "gleich",
        "plural": "gleich"
    },
    {
        "word": "schnell",
        "level": "starter",
        "form": "adjective",
        "subtext": "sehr schnell",
        "synonyms": ["Fast Food", "Schnellzug"],
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
        "superlative": "am schnellsten",
        "feminine": "schnelle",
        "neuter": "schnelles",
        "plural": "schnelle"
    },
    {
        "word": "langsam",
        "level": "starter",
        "form": "adjective",
        "subtext": "sehr langsam",
        "synonyms": ["langsamer Fortschritt", "langsames Internet"],
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
        "superlative": "am langsamsten",
        "feminine": "langsame",
        "neuter": "langsames",
        "plural": "langsame"
    },
    {
        "word": "leise",
        "level": "starter",
        "form": "adjective",
        "subtext": "leise sein",
        "synonyms": ["ruhige Gegend", "schön ruhig"],
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
        "superlative": "am leisesten",
        "feminine": "leisee",
        "neuter": "leisees",
        "plural": "leisee"
    },
    {
        "word": "laut",
        "level": "starter",
        "form": "adjective",
        "subtext": "zu laut",
        "synonyms": ["lautes Geräusch", "eine laute Stimme"],
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
        "superlative": "am lautesten",
        "feminine": "laute",
        "neuter": "lautes",
        "plural": "laute"
    },
    {
        "word": "sicher",
        "level": "starter",
        "form": "adjective",
        "subtext": "sicher zu tun / sich sicher fühlen",
        "synonyms": ["sichere Gegend"],
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
        "superlative": "am sichersten",
        "feminine": "sichere",
        "neuter": "sicheres",
        "plural": "sichere"
    },
    {
        "word": "gefährlich",
        "level": "starter",
        "form": "adjective",
        "subtext": "sehr gefährlich / potenziell gefährlich",
        "synonyms": ["gefährliche Situation"],
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
        "superlative": "am gefährlichsten",
        "feminine": "gefährliche",
        "neuter": "gefährliches",
        "plural": "gefährliche"
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
        "subtext": "sich unglücklich fühlen / sehr unglücklich / unglücklich über",
        "comparative": "unglücklicher",
        "superlative": "am unglücklichsten",
        "feminine": "unglückliche",
        "neuter": "unglückliches",
        "plural": "unglückliche"
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
        "subtext": "sich nervös fühlen / nervös wegen / sehr nervös",
        "comparative": "nervöser",
        "superlative": "am nervösesten",
        "feminine": "nervöse",
        "neuter": "nervöses",
        "plural": "nervöse"
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
        "subtext": "sich gestresst fühlen / sehr gestresst / total gestresst",
        "comparative": "gestresster",
        "superlative": "am gestresstesten",
        "feminine": "gestresste",
        "neuter": "gestresstes",
        "plural": "gestresste"
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
        "subtext": "selbstbewusst",
        "synonyms": ["sich sicher fühlen", "sehr sicher"],
        "comparative": "selbstbewusster",
        "superlative": "am selbstbewusstesten",
        "feminine": "selbstbewusste",
        "neuter": "selbstbewusstes",
        "plural": "selbstbewusste"
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
        "subtext": "stolz sein / sehr stolz / stolz auf",
        "comparative": "stolzer",
        "superlative": "am stolzesten",
        "feminine": "stolze",
        "neuter": "stolzes",
        "plural": "stolze"
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
        "subtext": "",
        "synonyms": ["Angst haben", "Angst vor", "große Angst"],
        "comparative": "verängstigter",
        "superlative": "am verängstigtsten",
        "feminine": "verängstigte",
        "neuter": "verängstigtes",
        "plural": "verängstigte"
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
        "subtext": "überrascht sein / sehr überrascht / angenehm überrascht",
        "comparative": "überraschter",
        "superlative": "am überraschtesten",
        "feminine": "überraschte",
        "neuter": "überraschtes",
        "plural": "überraschte"
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
        "subtext": "enttäuscht sein / zutiefst enttäuscht / enttäuscht von",
        "comparative": "enttäuschter",
        "superlative": "am enttäuchtesten",
        "feminine": "enttäuschte",
        "neuter": "enttäuschtes",
        "plural": "enttäuschte"
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
        "subtext": "",
        "synonyms": ["schöne Aussicht", "schöne Stadt", "absolut wunderschön"],
        "comparative": "schöner",
        "superlative": "am schönsten",
        "feminine": "schöne",
        "neuter": "schönes",
        "plural": "schöne"
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
        "subtext": "recht hübsch",
        "synonyms": ["ziemlich gut", "ein hübscher Ort"],
        "comparative": "hübscher",
        "superlative": "am hübschesten",
        "feminine": "hübsche",
        "neuter": "hübsches",
        "plural": "hübsche"
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
        "subtext": "sehr stark",
        "synonyms": ["starker Kaffee", "starke Meinung"],
        "comparative": "stärker",
        "superlative": "am stärksten",
        "feminine": "starke",
        "neuter": "starkes",
        "plural": "starke"
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
        "subtext": "schwache Verbindung / sehr schwach",
        "synonyms": ["ein schwaches Argument"],
        "comparative": "schwächer",
        "superlative": "am schwächsten",
        "feminine": "schwache",
        "neuter": "schwaches",
        "plural": "schwache"
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
        "subtext": "körperlich fit / fit bleiben / fit halten",
        "comparative": "fitter",
        "superlative": "am fittesten",
        "feminine": "fite",
        "neuter": "fites",
        "plural": "fite"
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
        "subtext": "absolut ausgezeichnet",
        "synonyms": ["ausgezeichnete Arbeit", "ausgezeichnete Ergebnisse"],
        "comparative": "ausgezeichneter",
        "superlative": "am ausgezeichnetsten",
        "feminine": "ausgezeichnete",
        "neuter": "ausgezeichnetes",
        "plural": "ausgezeichnete"
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
        "subtext": "absolut perfekt",
        "synonyms": ["eine perfekte Gelegenheit", "perfektes Timing"],
        "comparative": "perfekter",
        "superlative": "am perfektesten",
        "feminine": "perfekte",
        "neuter": "perfektes",
        "plural": "perfekte"
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
        "subtext": "völlig nutzlos / sich als nutzlos erweisen",
        "synonyms": ["eine nutzlose Idee"],
        "comparative": "nutzloser",
        "superlative": "am nutzlosesten",
        "feminine": "nutzlose",
        "neuter": "nutzloses",
        "plural": "nutzlose"
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
        "subtext": "völlig korrekt",
        "synonyms": ["korrekte Antwort", "der richtige Weg"],
        "comparative": "korrekter",
        "superlative": "am korrektesten",
        "feminine": "korrekte",
        "neuter": "korrektes",
        "plural": "korrekte"
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
        "subtext": "interessant finden / sehr interessant",
        "synonyms": ["eine interessante Idee"],
        "comparative": "interessanter",
        "superlative": "am interessantesten",
        "feminine": "interessante",
        "neuter": "interessantes",
        "plural": "interessante"
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
        "subtext": "sehr langweilig / langweilig finden",
        "synonyms": ["ein langweiliges Treffen"],
        "comparative": "langweiliger",
        "superlative": "am langweiligsten",
        "feminine": "langweilige",
        "neuter": "langweiliges",
        "plural": "langweilige"
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
        "subtext": "absolut notwendig / notwendig zu tun",
        "synonyms": ["falls nötig"],
        "comparative": "notwendiger",
        "superlative": "am notwendigsten",
        "feminine": "notwendige",
        "neuter": "notwendiges",
        "plural": "notwendige"
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
        "subtext": "so bald wie möglich / es ist möglich / möglich machen",
        "comparative": null,
        "superlative": null,
        "feminine": "mögliche",
        "neuter": "mögliches",
        "plural": "mögliche"
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
        "subtext": "praktisch unmöglich / unmöglich machen / fast unmöglich",
        "comparative": null,
        "superlative": null,
        "feminine": "unmögliche",
        "neuter": "unmögliches",
        "plural": "unmögliche"
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
        "subtext": "",
        "synonyms": ["ein besonderes Angebot", "besonderer Anlass", "sehr speziell"],
        "comparative": "besonderer",
        "superlative": "am besondersten",
        "feminine": "besonderse",
        "neuter": "besonderses",
        "plural": "besonderse"
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
        "subtext": "sehr beliebt",
        "synonyms": ["beliebte Wahl", "am beliebtesten"],
        "comparative": "beliebter",
        "superlative": "am beliebtesten",
        "feminine": "beliebte",
        "neuter": "beliebtes",
        "plural": "beliebte"
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
        "subtext": "sehr ähnlich / ähnlich wie",
        "synonyms": ["ähnliche Ergebnisse"],
        "comparative": "ähnlicher",
        "superlative": "am ähnlichsten",
        "feminine": "ähnliche",
        "neuter": "ähnliches",
        "plural": "ähnliche"
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
        "subtext": "sehr freundlich",
        "synonyms": ["ein freundliches Gesicht", "freundliche Atmosphäre"],
        "comparative": "freundlicher",
        "superlative": "am freundlichsten",
        "feminine": "freundliche",
        "neuter": "freundliches",
        "plural": "freundliche"
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
        "subtext": "sehr gütig",
        "synonyms": ["nett von dir", "ein gütiger Mensch"],
        "comparative": "gütiger",
        "superlative": "am gütigsten",
        "feminine": "gütige",
        "neuter": "gütiges",
        "plural": "gütige"
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
        "subtext": "sehr lustig / lustig finden",
        "synonyms": ["lustige Geschichte"],
        "comparative": "lustiger",
        "superlative": "am lustigsten",
        "feminine": "lustige",
        "neuter": "lustiges",
        "plural": "lustige"
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
        "subtext": "sehr schlau / schlau genug",
        "synonyms": ["eine schlaue Idee"],
        "comparative": "schlauer",
        "superlative": "am schlauesten",
        "feminine": "schlaue",
        "neuter": "schlaues",
        "plural": "schlaue"
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
        "subtext": "sehr höflich / höflich genug",
        "synonyms": ["höfliche Bitte"],
        "comparative": "höflicher",
        "superlative": "am höflichsten",
        "feminine": "höfliche",
        "neuter": "höfliches",
        "plural": "höfliche"
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
        "subtext": "sehr unhöflich / unglaublich unhöflich / absichtlich unhöflich",
        "comparative": "unhöflicher",
        "superlative": "am unhöflichsten",
        "feminine": "unhöfliche",
        "neuter": "unhöfliches",
        "plural": "unhöfliche"
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
        "subtext": "sehr faul / zu faul",
        "synonyms": ["eine faule Herangehensweise"],
        "comparative": "fauler",
        "superlative": "am faulsten",
        "feminine": "faule",
        "neuter": "faules",
        "plural": "faule"
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
        "subtext": "sehr ehrlich / brutal ehrlich / völlig ehrlich",
        "comparative": "ehrlicher",
        "superlative": "am ehrlichsten",
        "feminine": "ehrliche",
        "neuter": "ehrliches",
        "plural": "ehrliche"
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
        "subtext": "sehr laut / zu laut",
        "synonyms": ["laute Umgebung"],
        "comparative": "lauter",
        "superlative": "am lautesten",
        "feminine": "laute",
        "neuter": "lautes",
        "plural": "laute"
    }
]
    const lang = "de";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
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
        "subtext": "eine kurze Reise / kurze Haare / zu kurz",
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
        "subtext": "junge Person / junger Profi / im Herzen jung",
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
        "subtext": "alter Freund / alte Gewohnheiten / sehr alt",
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
        "subtext": "sonniger Tag / sonniges Wetter / sonnige Abschnitte",
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
        "subtext": "regnerischer Tag / regnerisches Wetter / Regenzeit",
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
        "subtext": "sehr heiß, heißes Wetter / heißes Wetter / ein heißes Getränk / zu heiß",
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
        "subtext": "sehr kalt, kalter Morgen / kaltes Wetter / ein kaltes Getränk / zu kalt",
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
        "subtext": "gewöhnlicher Tag / gewöhnliches Leben / nichts Gewöhnliches",
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
        "subtext": "niedriger Preis, preiswert / billiger Flug / sehr billig / billig und gut",
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
        "subtext": "kostspielig, hoher Preis / sehr teuer / teurer Geschmack / zu teuer",
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
        "subtext": "großartig, nett, angenehm / gute Idee / viel Glück / gutes Preis-Leistungs-Verhältnis",
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
        "subtext": "schrecklich, furchtbar, unangenehm / schlechte Nachrichten / Pech / schlechte Entscheidung",
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
        "subtext": "groß, riesig / ein großes Haus / ein großes Problem / groß genug",
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
        "subtext": "klein, winzig / eine kleine Wohnung / ein kleines Gehalt / zu klein",
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
        "subtext": "einfach zu machen / schön einfach / nicht einfach",
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
        "comparative": "schwieriger",
        "superlative": "am schwierigsten"
    },
    {
        "word": "glücklich",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "froh, fröhlich, glücklich sein / glücklich sein / mit etwas zufrieden sein / ein glücklicher Tag",
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
        "subtext": "schläfrig, erschöpft, müde sein / müde sein / einer Sache überdrüssig sein / sehr müde",
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
        "subtext": "Vollzeitjob / Vollzeitarbeit / Vollzeitmitarbeiter",
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
        "subtext": "Teilzeitjob / Teilzeitarbeit / Teilzeitstudent",
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
        "subtext": "ordentlich, nicht schmutzig, sauber halten / saubere Kleidung / ein sauberes Zimmer / sauber halten",
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
        "subtext": "gut, fit, gesunde Ernährung",
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
        "subtext": "krank, sich krank fühlen",
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
        "subtext": "allein leben / allein reisen / sich allein fühlen",
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
        "subtext": "ängstlich",
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
        "subtext": "sehr beschäftigt, beschäftigter Tag / voller Zeitplan / sehr beschäftigt / zu beschäftigt",
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
        "subtext": "hilfreich, praktisch",
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
        "subtext": "wesentlich / wichtiges Treffen / sehr wichtig / am wichtigsten",
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
        "subtext": "dunkelrot, hellrot / Rotwein / rotes Gesicht / rote Ampel",
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
        "subtext": "hellblau, dunkelblau / dunkelblau / hellblau / blauer Himmel",
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
        "subtext": "hellgrün, dunkelgrün / grüne Energie / Grünfläche / hellgrün",
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
        "subtext": "reinweiß, schneeweiß / Weißwein / gebrochenes Weiß / strahlendes Weiß",
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
        "subtext": "tiefschwarz, nachtschwarz / schwarzer Kaffee / Schwarzmarkt / tiefschwarz",
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
        "subtext": "hellgelb, zitronengelb / gelbes Licht / blassgelb / hellgelb",
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
        "subtext": "kostenlos, Gratisgeschenk / Freizeit / kostenlos / frei zu tun",
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
        "subtext": "jetzt offen, geschäftsoffen / offene Tür / offen für Ideen / weit offen",
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
        "subtext": "jetzt geschlossen, vorübergehend geschlossen / Mittagspause / engstirnig / geschlossene Tür",
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
        "subtext": "eine Großstadt / ein großes Unternehmen / eine große Menge",
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
        "subtext": "ein kleines bisschen / ein wenig Geld / zu wenig",
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
        "subtext": "eine lange Reise / ein langer Tag / eine lange Zeit",
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
        "subtext": "hoher Preis / hohe Miete / hohe Qualität",
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
        "subtext": "niedriger Preis / niedriges Gehalt / niedrige Qualität",
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
        "subtext": "Vollzeit / ein ganzer Tag / voller Menschen",
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
        "subtext": "eine leere Wohnung / ein leeres Zimmer / fast leer",
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
        "subtext": "warmes Wetter / ein herzliches Willkommen / warm halten",
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
        "subtext": "kühles Wetter / ein kühles Getränk / kühl bleiben",
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
        "subtext": "nasses Wetter / nasse Kleidung / nass werden",
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
        "subtext": "trockenes Wetter / trockene Haut / trocken bleiben",
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
        "subtext": "schmutzige Hände / schmutzige Kleidung / schmutzig werden",
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
        "subtext": "harte Arbeit / eine harte Entscheidung / zu hart",
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
        "subtext": "weiches Licht / sanfte Musik / Soft Skills",
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
        "subtext": "starker Verkehr / starker Regen / zu schwer",
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
        "subtext": "leichter Regen / wenig Verkehr / eine leichte Mahlzeit",
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
        "subtext": "dunkelbraun / hellbraun / Schwarzbrot",
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
        "subtext": "Grauzone / grauer Himmel / blassgrau",
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
        "subtext": "hellrosa / leuchtendes Rosa / kräftiges Rosa",
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
        "subtext": "hellorange / dunkelorange / oranges Licht",
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
        "subtext": "eine großartige Idee / eine tolle Gelegenheit / hoher Wert",
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
        "subtext": "ein schöner Tag / ein schöner Ort / eine nette Person",
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
        "subtext": "eine wunderbare Gelegenheit / eine wunderbare Zeit",
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
        "subtext": "furchtbares Wetter / ein schrecklicher Fehler / schreckliche Nachrichten",
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
        "subtext": "schreckliches Wetter / schreckliche Nachrichten / einfach schrecklich",
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
        "subtext": "ein erstaunliches Ergebnis / ein tolles Angebot / wirklich erstaunlich",
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
        "subtext": "fantastische Neuigkeiten / eine fantastische Gelegenheit / wirklich fantastisch",
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
        "subtext": "sich traurig fühlen / eine traurige Situation / zutiefst traurig",
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
        "subtext": "Hunger haben / sehr hungrig / hungern",
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
        "subtext": "wütend sein / sauer auf jemanden / sehr wütend",
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
        "subtext": "sich langweilen / gelangweilt von / leicht gelangweilt",
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
        "subtext": "aufgeregt sein / begeistert von / sehr aufgeregt",
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
        "subtext": "Angst vor / Angst haben / tiefe Angst",
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
        "subtext": "Bedauern empfinden / Mitleid mit / leid tun wegen",
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
        "subtext": "richtige Antwort / richtige Zeit / absolut richtig",
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
        "subtext": "falsche Antwort / schiefgehen / völlig falsch",
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
        "subtext": "neuer Job / brandneu / völlig neu",
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
        "subtext": "völlig anders / sehr verschieden / anders als",
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
        "subtext": "das Gleiche wie / exakt das Gleiche / gleiche Zeit",
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
        "subtext": "Fast Food / Schnellzug / sehr schnell",
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
        "subtext": "langsamer Fortschritt / langsames Internet / sehr langsam",
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
        "subtext": "ruhige Gegend / leise sein / schön ruhig",
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
        "subtext": "lautes Geräusch / zu laut / eine laute Stimme",
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
        "subtext": "sichere Gegend / sicher zu tun / sich sicher fühlen",
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
        "subtext": "gefährliche Situation / sehr gefährlich / potenziell gefährlich",
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
        "subtext": "sich unglücklich fühlen / sehr unglücklich / unglücklich über",
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
        "subtext": "sich nervös fühlen / nervös wegen / sehr nervös",
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
        "subtext": "sich gestresst fühlen / sehr gestresst / total gestresst",
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
        "subtext": "sich sicher fühlen / selbstbewusst / sehr sicher",
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
        "subtext": "stolz sein / sehr stolz / stolz auf",
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
        "subtext": "Angst haben / Angst vor / große Angst",
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
        "subtext": "überrascht sein / sehr überrascht / angenehm überrascht",
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
        "subtext": "enttäuscht sein / zutiefst enttäuscht / enttäuscht von",
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
        "subtext": "schöne Aussicht / schöne Stadt / absolut wunderschön",
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
        "subtext": "ziemlich gut / ein hübscher Ort / recht hübsch",
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
        "subtext": "starker Kaffee / starke Meinung / sehr stark",
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
        "subtext": "schwache Verbindung / ein schwaches Argument / sehr schwach",
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
        "subtext": "körperlich fit / fit bleiben / fit halten",
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
        "subtext": "ausgezeichnete Arbeit / ausgezeichnete Ergebnisse / absolut ausgezeichnet",
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
        "subtext": "eine perfekte Gelegenheit / perfektes Timing / absolut perfekt",
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
        "subtext": "völlig nutzlos / sich als nutzlos erweisen / eine nutzlose Idee",
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
        "subtext": "korrekte Antwort / der richtige Weg / völlig korrekt",
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
        "subtext": "interessant finden / sehr interessant / eine interessante Idee",
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
        "subtext": "sehr langweilig / ein langweiliges Treffen / langweilig finden",
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
        "subtext": "absolut notwendig / falls nötig / notwendig zu tun",
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
        "subtext": "so bald wie möglich / es ist möglich / möglich machen",
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
        "subtext": "praktisch unmöglich / unmöglich machen / fast unmöglich",
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
        "subtext": "ein besonderes Angebot / besonderer Anlass / sehr speziell",
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
        "subtext": "sehr beliebt / beliebte Wahl / am beliebtesten",
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
        "subtext": "sehr ähnlich / ähnlich wie / ähnliche Ergebnisse",
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
        "subtext": "sehr freundlich / ein freundliches Gesicht / freundliche Atmosphäre",
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
        "subtext": "sehr gütig / nett von dir / ein gütiger Mensch",
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
        "subtext": "sehr lustig / lustige Geschichte / lustig finden",
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
        "subtext": "sehr schlau / eine schlaue Idee / schlau genug",
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
        "subtext": "sehr höflich / höfliche Bitte / höflich genug",
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
        "subtext": "sehr unhöflich / unglaublich unhöflich / absichtlich unhöflich",
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
        "subtext": "sehr faul / eine faule Herangehensweise / zu faul",
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
        "subtext": "sehr ehrlich / brutal ehrlich / völlig ehrlich",
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
        "subtext": "sehr laut / laute Umgebung / zu laut",
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
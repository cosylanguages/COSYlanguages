(function() {
    const data = [
    {
        "word": "uhel",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "berr",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "Gant un uhelder bras.",
                "examples": [
                    "An den uhelañ eo en hor skipailh."
                ]
            }
        ],
        "subtext": "ur savadur uhel / un den uhel / uhel a-walc'h",
        "comparative": "uheloc'h",
        "superlative": "uhelañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "berr",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "uhel",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "Gant un hed bihan.",
                "examples": [
                    "Ur prantad berr he deus kemeret."
                ]
            }
        ],
        "subtext": "ur veaj berr / blev berr",
        "synonyms": ["re verr"],
        "comparative": "berroc'h",
        "superlative": "berrañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "yaouank",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "kozh",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "E penn-kentañ e vuhez.",
                "examples": [
                    "Yaouank-tre eo hor skipailh."
                ]
            }
        ],
        "subtext": "den yaouank / micherour yaouank / yaouank e galon",
        "comparative": "yaouankoc'h",
        "superlative": "yaouankañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "kozh",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "yaouank",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "Bet implijet e-pad pell.",
                "examples": [
                    "E-barzh ur savadur kozh emañ hor burev."
                ]
            }
        ],
        "subtext": "mignon kozh / boazioù kozh / kozh-tre",
        "comparative": "koshoc'h",
        "superlative": "koshañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "heoliek",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant heol.",
                "examples": [
                    "Karet a ran an devezhioù heoliek."
                ]
            }
        ],
        "subtext": "un devezh heoliek / amzer heoliek",
        "synonyms": ["un tamm heol"],
        "comparative": "heoliekoc'h",
        "superlative": "heoliekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "glavek",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant glav.",
                "examples": [
                    "Un devezh glavek eo hiziv."
                ]
            }
        ],
        "subtext": "un devezh glavek / amzer glavek",
        "synonyms": ["koulz ar glav"],
        "comparative": "glavekoc'h",
        "superlative": "glavekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "tomm",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "yen",
        "oppositeEmoji": "❄️",
        "subtext": "tomm-tre / un evaj tomm",
        "synonyms": ["amzer domm", "re domm"],
        "definitions": [
            {
                "text": "Gant ur wrez uhel.",
                "examples": [
                    "Tomm-tre eo er burev hiziv."
                ]
            }
        ],
        "comparative": "tommoc'h",
        "superlative": "tommañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "yen",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "tomm",
        "oppositeEmoji": "🔥",
        "subtext": "yen-tre / mintinvezh yen / amzer yen / un evaj yen / re yen",
        "definitions": [
            {
                "text": "Gant ur wrez izel.",
                "examples": [
                    "Plijout a ra din evañ dour yen."
                ]
            }
        ],
        "comparative": "yenoc'h",
        "superlative": "yenañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "boutin",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "ispisial",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Boas pe ordinal; n'eo ket ispisial.",
                "examples": [
                    "Un devezh boutin e oa."
                ]
            }
        ],
        "subtext": "un devezh boutin",
        "synonyms": ["buhez voutin", "netra ispisial"],
        "comparative": "boutinoc'h",
        "superlative": "boutinañ"
    },
    {
        "word": "marc'had-mat",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "ker",
        "oppositeEmoji": "💎",
        "subtext": "nijadenn marc'had-mat / marc'had-mat-tre",
        "synonyms": ["priz izel"],
        "definitions": [
            {
                "text": "Na gousta ket kalz arc'hant.",
                "examples": [
                    "Marc'had-mat eo ar pretis e-kichen ar burev."
                ]
            }
        ],
        "comparative": "marc'had-matoc'h",
        "superlative": "marc'had-matañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ker",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "marc'had-mat",
        "oppositeEmoji": "🏷️",
        "subtext": "ker-tre",
        "synonyms": ["priz uhel", "re ger"],
        "definitions": [
            {
                "text": "Koustañ a ra kalz arc'hant.",
                "examples": [
                    "Re ger eo ar c'harr-mañ."
                ]
            }
        ],
        "comparative": "keroc'h",
        "superlative": "kerañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "mat",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "fall",
        "oppositeEmoji": "👎",
        "subtext": "mennozh mat / priz mat",
        "synonyms": ["dreist", "chañs vat"],
        "definitions": [
            {
                "text": "Gant perzhioù mat.",
                "examples": [
                    "Un darvoud mat eo evit ar skipailh."
                ]
            }
        ],
        "comparative": "gwelloc'h",
        "superlative": "gwellañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "fall",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "mat",
        "oppositeEmoji": "👍",
        "subtext": "keleier fall / diviz fall",
        "synonyms": ["euzhus", "drouksort"],
        "definitions": [
            {
                "text": "Na vezañ mat.",
                "examples": [
                    "Un devezh fall e oa dec'h er labour."
                ]
            }
        ],
        "comparative": "falloc'h",
        "superlative": "fallañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "bras",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "bihan",
        "oppositeEmoji": "🐭",
        "subtext": "un ti bras / bras a-walc'h",
        "synonyms": ["ledan", "ur gudenn vras"],
        "definitions": [
            {
                "text": "Bras e vent pe e niver.",
                "examples": [
                    "Ur burev bras hon eus er greizenn-gêr."
                ]
            }
        ],
        "comparative": "brasoc'h",
        "superlative": "brasañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "bihan",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "bras",
        "oppositeEmoji": "🐘",
        "subtext": "un ranndi bihan / ur gopr bihan",
        "synonyms": ["bihanik", "re vihan"],
        "definitions": [
            {
                "text": "Bihan e vent pe e niver.",
                "examples": [
                    "Bevañ a ra en un ranndi bihan."
                ]
            }
        ],
        "comparative": "bihanoc'h",
        "superlative": "bihanañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "aes",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "diaes",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "N'eo ket diaes.",
                "examples": [
                    "Ul labour aes eo."
                ]
            }
        ],
        "subtext": "aes d'ober / aes-tre / n'eo ket aes",
        "comparative": "aesoc'h",
        "superlative": "aesañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "diaes",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "aes",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Gant kudennoù.",
                "examples": [
                    "Diaes-tre eo ar raktres-mañ."
                ]
            }
        ],
        "subtext": "diaes d'ober / diaes-tre / kavout diaes",
        "comparative": "diaesoc'h",
        "superlative": "diaesañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "laouen",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "en em santiñ laouen / laouen gant un dra bennak / un devezh laouen",
        "synonyms": ["plijet"],
        "definitions": [
            {
                "text": "Plijet gant e vuhez.",
                "examples": [
                    "Laouen on gant ma labour nevez."
                ]
            }
        ],
        "comparative": "laouenoc'h",
        "superlative": "laouenañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "skuizh",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "en em santiñ skuizh / skuizh gant un dra bennak / skuizh-tre",
        "synonyms": ["marnaoniet"],
        "definitions": [
            {
                "text": "Ezhomm diskuizhañ.",
                "examples": [
                    "Skuizh eo goude un devezh hir."
                ]
            }
        ],
        "comparative": "skuizhoc'h",
        "superlative": "skuizhañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "leun-amzer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "hanter-amzer",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Labourat an holl eurvezhioù en ur sizhunvezh labour.",
                "examples": [
                    "Ur post leun-amzer he deus en ur bank."
                ]
            }
        ],
        "subtext": "ul labour leun-amzer / labourat leun-amzer",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "hanter-amzer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "leun-amzer",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Labourat nebeutoc'h a eurvezhioù eget ar sizhunvezh labour ordinal.",
                "examples": [
                    "Labourat a ra hanter-amzer d'ar sadorn."
                ]
            }
        ],
        "subtext": "ul labour hanter-amzer / micher hanter-amzer",
        "comparative": null,
        "superlative": null
    },
    {
        "word": "naet",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "lous",
        "oppositeEmoji": "💩",
        "subtext": "dilhad naet / ur gambr naet / mirout naet",
        "synonyms": ["kempenn"],
        "definitions": [
            {
                "text": "Hep poultrenn.",
                "examples": [
                    "Naet eo ar gegin bepred."
                ]
            }
        ],
        "comparative": "naetoc'h",
        "superlative": "naetañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "yac'h",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "klañv",
        "oppositeEmoji": "🍔",
        "subtext": "dibab boued yac'h",
        "synonyms": ["reizh"],
        "definitions": [
            {
                "text": "Gant ur yec'hed mat.",
                "examples": [
                    "Klask a ran debriñ boued yac'h."
                ]
            }
        ],
        "comparative": "yac'hoc'h",
        "superlative": "yac'hañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "klañv",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "yac'h",
        "oppositeEmoji": "💪",
        "subtext": "en em santiñ klañv",
        "synonyms": ["fall"],
        "definitions": [
            {
                "text": "Na vezañ yac'h; marnaoniet.",
                "examples": [
                    "Klañv on hiziv."
                ]
            }
        ],
        "comparative": "klañvoc'h",
        "superlative": "klañvañ"
    },
    {
        "word": "enlinenn",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "maez-linenn",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Oc'h implijout an internet.",
                "examples": [
                    "Prenañ a ran boued enlinenn a-wechoù."
                ]
            }
        ],
        "subtext": "prenañ enlinenn / kentel enlinenn / chom enlinenn",
        "comparative": "mishoc'h enlinenn",
        "superlative": "an hini muiañ enlinenn"
    },
    {
        "word": "e-unan",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "asambles",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Hep tud all; drezoc'h hoc'h-unan.",
                "examples": [
                    "Bevañ a ra he-unan."
                ]
            }
        ],
        "subtext": "bevañ e-unan / beajiñ e-unan / en em santiñ e-unan",
        "comparative": "muioc'h e-unan",
        "superlative": "ar muiañ e-unan"
    },
    {
        "word": "distend",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "strafuilhet",
        "oppositeEmoji": "😫",
        "subtext": "en em santiñ distend",
        "synonyms": ["sioul"],
        "definitions": [
            {
                "text": "Sioul; hep nec'h pe stress.",
                "examples": [
                    "En em santiñ a ran distend e-pad an dibenn-sizhun."
                ]
            }
        ],
        "comparative": "distendoc'h",
        "superlative": "distendañ"
    },
    {
        "word": "strafuilhet",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "distend",
        "oppositeEmoji": "😌",
        "subtext": "",
        "synonyms": ["nec'het"],
        "definitions": [
            {
                "text": "En em santiñ nec'het gant un dra bennak a c'hellfe degouezhout.",
                "examples": [
                    "Strafuilhet eo gant he labour."
                ]
            }
        ],
        "comparative": "strafuilhetoc'h",
        "superlative": "strafuilhetañ"
    },
    {
        "word": "strollat",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["dalc'het-tre", "devezh karget", "implij-amzer karget", "re zalc'het"],
        "definitions": [
            {
                "text": "Gant kalz labour.",
                "examples": [
                    "Strollat on ar sizhun-mañ."
                ]
            }
        ],
        "comparative": "strollatoc'h",
        "superlative": "strollatañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "talvoudus",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "ditalvoud",
        "oppositeEmoji": "🗑️",
        "subtext": "",
        "synonyms": ["sikour", "pleustrek"],
        "definitions": [
            {
                "text": "Gant ur splet.",
                "examples": [
                    "Ur benveg talvoudus-tre eo."
                ]
            }
        ],
        "comparative": "talvoudusoc'h",
        "superlative": "talvoudusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "pouezus",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "emvod pouezus / pouezus-tre",
        "synonyms": ["ret", "ar pouezusañ"],
        "definitions": [
            {
                "text": "Gant kalz talvoudegezh.",
                "examples": [
                    "Ur raktres pouezus-tre eo."
                ]
            }
        ],
        "comparative": "pouezusoc'h",
        "superlative": "pouezusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ruz",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "ruz teñval / gwin ruz / dremm ruz / gouloù ruz",
        "definitions": [
            {
                "text": "Liv ar gwad pe liv un tomatez darev.",
                "examples": [
                    "Ur sac'h ruz he deus."
                ]
            }
        ],
        "comparative": "ruzoc'h",
        "superlative": "ruzañ"
    },
    {
        "word": "glas",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "glas sklaer / glas teñval / oabl glas",
        "definitions": [
            {
                "text": "Liv an oabl pa vez brav an amzer.",
                "examples": [
                    "Glas eo e garr."
                ]
            }
        ],
        "comparative": "glasoc'h",
        "superlative": "glasañ"
    },
    {
        "word": "gwer",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "gwer sklaer / gwer teñval / takad gwer",
        "definitions": [
            {
                "text": "Liv ar geot pe liv an delioù.",
                "examples": [
                    "Ur wiskiwer wer he deus."
                ]
            }
        ],
        "comparative": "gweroc'h",
        "superlative": "gwerañ"
    },
    {
        "word": "gwenn",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "gwenn-tre / gwin gwenn / gwenn-erc'h",
        "definitions": [
            {
                "text": "Liv an erc'h pe liv al laezh.",
                "examples": [
                    "Gwenn eo ar mogerioù."
                ]
            }
        ],
        "comparative": "gwennoc'h",
        "superlative": "gwennañ"
    },
    {
        "word": "du",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "du-teñval / kafe du / marc'had du",
        "definitions": [
            {
                "text": "Al liv teñvalañ, evel an oabl e-pad an noz.",
                "examples": [
                    "Ur mantell du a zoug."
                ]
            }
        ],
        "comparative": "duoc'h",
        "superlative": "duañ"
    },
    {
        "word": "melen",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "melen sklaer / melen-vividik",
        "synonyms": ["liv ar mel"],
        "definitions": [
            {
                "text": "Liv an heol pe liv un tamm sitroñs.",
                "examples": [
                    "Ur paraplu melen he deus."
                ]
            }
        ],
        "comparative": "melenoc'h",
        "superlative": "melenañ"
    },
    {
        "word": "dieub",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "amzer dieub",
        "synonyms": ["didall", "frank d'ober"],
        "definitions": [
            {
                "text": "Hep labour pe didall.",
                "examples": [
                    "Dieub oc'h d'ar yaou?"
                ]
            }
        ],
        "comparative": "dieuboc'h",
        "superlative": "dieubañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "digor",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "serr",
        "oppositeEmoji": "🔒",
        "subtext": "digor evit ar genwerzh / digor d'ar mennozhioù / digor-bras",
        "synonyms": ["nor zigor"],
        "definitions": [
            {
                "text": "N'eo ket serr.",
                "examples": [
                    "Digor eo an nor, deuit e-barzh."
                ]
            }
        ],
        "comparative": "digoroc'h",
        "superlative": "digorañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "serr",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "digor",
        "oppositeEmoji": "📖",
        "subtext": "serr evit bremañ / serr evit lein",
        "synonyms": ["nor serret"],
        "definitions": [
            {
                "text": "N'eo ket digor.",
                "examples": [
                    "Serr eo ar burev e-pad an dibenn-sizhun."
                ]
            }
        ],
        "comparative": "serroc'h",
        "superlative": "serrañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ledan",
        "level": "starter",
        "form": "adjective",
        "subtext": "ur gêr ledan / un embregerezh ledan",
        "synonyms": ["ur c'hantad bras"],
        "definitions": [
            {
                "text": "Brasoc'h eget ar geidenn.",
                "examples": [
                    "Pariz a zo ur gêr ledan-tre."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "ledanoc'h",
        "superlative": "ledanañ"
    },
    {
        "word": "bihanik",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["un tamm bihan", "ur pizh arc'hant", "re vihan"],
        "definitions": [
            {
                "text": "Bihan e vent; ur c'hantad bihan a.",
                "examples": [
                    "Bleniañ a ra ur c'harr bihanik evit espern trelosk."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "bihanikoc'h",
        "superlative": "bihanikañ"
    },
    {
        "word": "hir",
        "level": "starter",
        "form": "adjective",
        "subtext": "ur veaj hir / un devezh hir / un amzer hir",
        "definitions": [
            {
                "text": "Gant un hed bras.",
                "examples": [
                    "Hir-tre e oa an emvod hiziv."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "hiroc'h",
        "superlative": "hirañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "uhel",
        "level": "starter",
        "form": "adjective",
        "subtext": "priz uhel / feurm uhel / bleunienn uhel",
        "definitions": [
            {
                "text": "Uheloc'h eget ar geidenn.",
                "examples": [
                    "Uhel eo ar feurm en takad-mañ."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "uheloc'h",
        "superlative": "uhelañ"
    },
    {
        "word": "izel",
        "level": "starter",
        "form": "adjective",
        "subtext": "priz izel / gopr izel",
        "synonyms": ["n'eo ket uhel"],
        "definitions": [
            {
                "text": "Izeloc'h eget ar geidenn.",
                "examples": [
                    "Re izel eo ar gopr evit an eurvezhioù labour."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "izeloc'h",
        "superlative": "izelañ"
    },
    {
        "word": "leun",
        "level": "starter",
        "form": "adjective",
        "subtext": "leun-amzer / un deiz leun / leun a dud",
        "definitions": [
            {
                "text": "Gant traoù e-barzh.",
                "examples": [
                    "Leun eo ar burev gant tud hiziv."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "leunoc'h",
        "superlative": "leunañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "goullo",
        "level": "starter",
        "form": "adjective",
        "subtext": "un ranndi goullo / goullo-mik",
        "synonyms": ["ur gambr oulloo"],
        "definitions": [
            {
                "text": "Hep tra e-barzh.",
                "examples": [
                    "Goullo eo ar gib kafe."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "goullooc'h",
        "superlative": "goulloañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "tommik",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["amzer dommik", "ur degemer tomm", "mirout tomm"],
        "definitions": [
            {
                "text": "Un tammig tomm; tommet en un doare plijus.",
                "examples": [
                    "Tomm hag aezet eo ar burev."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "tommikoc'h",
        "superlative": "tommikañ"
    },
    {
        "word": "fresk",
        "level": "starter",
        "form": "adjective",
        "subtext": "amzer fresk / un evaj fresk / chom fresk",
        "definitions": [
            {
                "text": "Un tammig yen; ur wrez izel plijus.",
                "examples": [
                    "Plijout a ra dezhi an amzer fresk evit labourat."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "freskoc'h",
        "superlative": "freskañ"
    },
    {
        "word": "gleb",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["wet weather", "wet clothes", "get wet"],
        "definitions": [
            {
                "text": "Gant dour.",
                "examples": [
                    "Gleb eo an hent goude ar glav."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "glepoc'h",
        "superlative": "glepañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "sec'h",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["dry weather", "dry skin", "keep dry"],
        "definitions": [
            {
                "text": "Hep dour.",
                "examples": [
                    "Sec'h eo an amzer hiziv."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "sec'hoc'h",
        "superlative": "sec'hañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "lous",
        "level": "starter",
        "theme": "household_tasks_A1",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["dirty hands", "dirty clothes", "get dirty"],
        "definitions": [
            {
                "text": "Gant poultrenn.",
                "examples": [
                    "Lous eo ar c'harr hiziv."
                ]
            }
        ],
        "comparative": "lousoc'h",
        "superlative": "lousañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "kalet",
        "level": "starter",
        "form": "adjective",
        "subtext": "labour kalet",
        "synonyms": ["un diviz diaes", "re galet"],
        "definitions": [
            {
                "text": "N'eo ket blot.",
                "examples": [
                    "Kalet-tre eo ar gador-mañ."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "kaletoc'h",
        "superlative": "kaletañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "blot",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["soft light", "soft music", "soft skills"],
        "definitions": [
            {
                "text": "N'eo ket kalet.",
                "examples": [
                    "Blot-tre eo ar gador-vrec'h-mañ."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "blotoc'h",
        "superlative": "blotañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "pounner",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["heavy traffic", "heavy rain", "too heavy"],
        "definitions": [
            {
                "text": "Gant ur pouez bras.",
                "examples": [
                    "Pounner-tre eo ar voest-mañ."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "pounneroc'h",
        "superlative": "pounnerañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "skañv",
        "level": "starter",
        "form": "adjective",
        "subtext": "glav skañv / dregenn skañv / ur pred skañv",
        "definitions": [
            {
                "text": "N'eo ket pounner; sklaer e liv.",
                "examples": [
                    "Dougen a ra ur sac'h skañv d'al labour bemdez."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "skañvoc'h",
        "superlative": "skañvañ"
    },
    {
        "word": "gell",
        "level": "starter",
        "form": "adjective",
        "subtext": "gell teñval / gell sklaer / bara gell",
        "definitions": [
            {
                "text": "Liv ar c'hoad pe liv an douar.",
                "examples": [
                    "Daoulagad gell ha blev teñval he deus."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "gelloc'h",
        "superlative": "gellañ"
    },
    {
        "word": "gris",
        "level": "starter",
        "form": "adjective",
        "subtext": "takad gris / oabl gris / gris sklaer",
        "definitions": [
            {
                "text": "Liv etre an du hag ar gwenn.",
                "examples": [
                    "Blev gris hag un dremm jentil en deus."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "grisoc'h",
        "superlative": "grisañ"
    },
    {
        "word": "roz",
        "level": "starter",
        "form": "adjective",
        "subtext": "roz sklaer / roz vividik",
        "definitions": [
            {
                "text": "Ur ruz sklaer e liv.",
                "examples": [
                    "Gwelloc'h eo dezhi ar roz eget ar ruz."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "rozoc'h",
        "superlative": "rozañ"
    },
    {
        "word": "orañjez",
        "level": "starter",
        "form": "adjective",
        "subtext": "orañjez vividik / orañjez teñval / gouloù orañjez",
        "definitions": [
            {
                "text": "Liv ar frouezh orañjez.",
                "examples": [
                    "Prenet en deus ur jakedenn orañjez."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "orañjezoc'h",
        "superlative": "orañjezañ"
    },
    {
        "word": "meur",
        "level": "starter",
        "form": "adjective",
        "subtext": "ur mennozh meur / un darvoud meur / priz meur",
        "definitions": [
            {
                "text": "Mat-tre; bras-tre e kementad.",
                "examples": [
                    "Ur renerez meur eo."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "muioc'h meur",
        "superlative": "ar muiañ meur"
    },
    {
        "word": "bravik",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["un deiz brav", "ul lec'h brav", "un den jentil"],
        "definitions": [
            {
                "text": "Plijus pe jentil.",
                "examples": [
                    "Brav-tre eo ar burev nevez."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "bravikoc'h",
        "superlative": "bravikañ"
    },
    {
        "word": "marzhus",
        "level": "starter",
        "form": "adjective",
        "subtext": "un darvoud marzhus",
        "synonyms": ["un amzer varzhus"],
        "definitions": [
            {
                "text": "Mat-tre; a ro plijadur vras.",
                "examples": [
                    "Ur skipailh marzhus o deus."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "marzhusoc'h",
        "superlative": "marzhusañ"
    },
    {
        "word": "euzhus",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["terrible weather", "a terrible mistake", "terrible news"],
        "definitions": [
            {
                "text": "Fall-tre.",
                "examples": [
                    "Dec'h e oa un amzer euzhus."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "euzhusoc'h",
        "superlative": "euzhusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "euzhus",
        "level": "starter",
        "form": "adjective",
        "subtext": "amzer euzhus / keleier euzhus / euzhus-mik",
        "definitions": [
            {
                "text": "Fall-tre pe displijus-tre.",
                "examples": [
                    "Euzhus eo an trouz er burev."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "euzhusoc'h",
        "superlative": "euzhusañ"
    },
    {
        "word": "estonus",
        "level": "starter",
        "form": "adjective",
        "subtext": "un disoc'h estonus / ur ginnig estonus / estonus-tre",
        "definitions": [
            {
                "text": "A ra souezh vras pe a laka da vezañ bamet.",
                "examples": [
                    "Un displegadenn estonus he deus graet."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "estonusoc'h",
        "superlative": "estonusañ"
    },
    {
        "word": "dreist",
        "level": "starter",
        "form": "adjective",
        "subtext": "keleier dreist / un darvoud dreist / dreist-holl",
        "definitions": [
            {
                "text": "Mat-tre.",
                "examples": [
                    "Mont a ra ar reizhiad nevez en-dro en un doare dreist."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "muioc'h dreist",
        "superlative": "ar muiañ dreist"
    },
    {
        "word": "trist",
        "level": "starter",
        "form": "adjective",
        "subtext": "en em santiñ trist / ur stad trist / trist-meurbet",
        "definitions": [
            {
                "text": "Na vezañ laouen.",
                "examples": [
                    "Trist eo rak rankout a ra kuitaat ar burev."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "tristoc'h",
        "superlative": "tristañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "naoniek",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["kaout naon", "naon vras", "chom hep debriñ"],
        "definitions": [
            {
                "text": "C'hoant debriñ.",
                "examples": [
                    "Naoniek on bepred a-raok lein."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "naoniekoc'h",
        "superlative": "naoniekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "konnar",
        "level": "starter",
        "form": "adjective",
        "subtext": "en em santiñ kounnaret / kounnaret ouzh unan bennak",
        "synonyms": ["kounnaret-tre"],
        "definitions": [
            {
                "text": "Gant droug.",
                "examples": [
                    "Konnar a zo ennañ abalamour d'an dale."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "konnaroc'h",
        "superlative": "konnarañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "borodet",
        "level": "starter",
        "form": "adjective",
        "subtext": "en em santiñ borodet / borodet gant / borodet buan",
        "definitions": [
            {
                "text": "Hep mui a interest pe dibasiet.",
                "examples": [
                    "En em santiñ a ra borodet en emvodoù hir."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "borodetoc'h",
        "superlative": "borodetañ"
    },
    {
        "word": "entouziastet",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "subtext": "en em santiñ entouziastet / entouziastet gant / entouziastet-tre",
        "definitions": [
            {
                "text": "Gant birvilh hag herder.",
                "examples": [
                    "Entouziastet eo gant he labour nevez."
                ]
            }
        ],
        "comparative": "entouziastetoc'h",
        "superlative": "entouziastetañ"
    },
    {
        "word": "aoniek",
        "level": "starter",
        "form": "adjective",
        "subtext": "en em santiñ aoniek / aoniek-bras",
        "synonyms": ["aon rak"],
        "definitions": [
            {
                "text": "Gant aon.",
                "examples": [
                    "Aoniek eo da ober fazioù."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "aoniekoc'h",
        "superlative": "aoniekañ"
    },
    {
        "word": "keuziek",
        "level": "starter",
        "form": "adjective",
        "subtext": "en em santiñ keuziek / keuziek evit / keuziek gant",
        "definitions": [
            {
                "text": "Gant keuz pe tristidigezh.",
                "examples": [
                    "Keuziek eo evit an dale."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "keuziekoc'h",
        "superlative": "keuziekañ"
    },
    {
        "word": "reizh",
        "level": "starter",
        "form": "adjective",
        "subtext": "respont reizh / koulz reizh / reizh-holl",
        "definitions": [
            {
                "text": "Hep fazi; dereat.",
                "examples": [
                    "Hemañ eo ar burev reizh?"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "reishoc'h",
        "superlative": "reishañ"
    },
    {
        "word": "fazi",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["wrong answer", "go wrong", "completely wrong"],
        "definitions": [
            {
                "text": "Gant ur fazi.",
                "examples": [
                    "Ar sifr fall eo."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "fazioc'h",
        "superlative": "faziañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "nevez",
        "level": "starter",
        "form": "adjective",
        "subtext": "labour nevez / nevez-flamm / nevez-tre",
        "definitions": [
            {
                "text": "N'eo ket bet implijet c'hoazh.",
                "examples": [
                    "Un urzhiataer nevez am eus."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "nevesoc'h",
        "superlative": "nevesañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "disheñvel",
        "level": "starter",
        "form": "adjective",
        "subtext": "disheñvel-mik / disheñvel-tre / disheñvel diouzh",
        "definitions": [
            {
                "text": "N'eo ket ar memes tra.",
                "examples": [
                    "Ali disheñvel hon eus diwar-benn ar gudenn-mañ."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "disheñveloc'h",
        "superlative": "disheñvelañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "memes",
        "level": "starter",
        "form": "adjective",
        "subtext": "ar memes tra hag / memes tra-mik / er memes koulz",
        "definitions": [
            {
                "text": "Ar memes tra.",
                "examples": [
                    "Labourat a reomp er memes burev."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "memesoc'h",
        "superlative": "memesañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "buan",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["boued herrek", "tren tizh", "prim-tre"],
        "definitions": [
            {
                "text": "Gant tizh.",
                "examples": [
                    "Labourat a ra buan-tre."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "buanoc'h",
        "superlative": "buanañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "gorrek",
        "level": "starter",
        "form": "adjective",
        "subtext": "araokadennoù gorrek / internet gorrek / gorrek-tre",
        "definitions": [
            {
                "text": "Hep tizh.",
                "examples": [
                    "Gorrek eo an internet hiziv."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "gorrekoc'h",
        "superlative": "gorrekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "didrous",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["karter sioul", "chom sioul", "brav ha sioul"],
        "definitions": [
            {
                "text": "Hep trouz.",
                "examples": [
                    "Didrous eo amañ evit labourat."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "didrousoc'h",
        "superlative": "didrousañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "kreñv",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": ["loud noise", "too loud", "a loud voice"],
        "definitions": [
            {
                "text": "Gant ur son kreñv.",
                "examples": [
                    "Komz a ra kreñv-tre."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "kreñvoc'h",
        "superlative": "kreñvañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "diogel",
        "level": "starter",
        "form": "adjective",
        "subtext": "takad diogel / diogel d'ober / en em santiñ e surentez",
        "definitions": [
            {
                "text": "Hep dañjer.",
                "examples": [
                    "Diogel eo an takad-mañ."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "diogeloc'h",
        "superlative": "diogelañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "dañjerus",
        "level": "starter",
        "form": "adjective",
        "subtext": "stad dañjerus / dañjerus-tre / dañjerus-meurbet",
        "definitions": [
            {
                "text": "Gant dañjer.",
                "examples": [
                    "Dañjerus eo an hent-se en noz."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "dañjerusoc'h",
        "superlative": "dañjerusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "dilaouen",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'oc'h ket laouen; n'oc'h ket plijet.",
                "examples": [
                    "N'eo ket laouen gant e c'hopr a-vremañ."
                ]
            }
        ],
        "subtext": "en em santiñ dilailh / en em santiñ fall gant",
        "synonyms": ["trist-meurbet"],
        "comparative": "unhappier",
        "superlative": "the unhappiest"
    },
    {
        "word": "strafuilhet",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant stress.",
                "examples": [
                    "Strafuilhet on bepred a-raok un emvod."
                ]
            }
        ],
        "subtext": "en em santiñ nervus",
        "synonyms": ["chalet gant", "nervus-tre"],
        "comparative": "strafuilhetoc'h",
        "superlative": "strafuilhetañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "strafuilhet",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Bezañ chalet ha stenn abalamour d'ar wask.",
                "examples": [
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "en em santiñ stennet",
        "synonyms": ["stennet-tre", "karget a stress"],
        "comparative": "more stressed",
        "superlative": "the most stressed"
    },
    {
        "word": "fiziañs",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Bezañ sur eus e varregezhioù e-unan.",
                "examples": [
                    "Sur-tre eo outi he unan e-pad an displegadennoù d'ar glianted."
                ]
            }
        ],
        "subtext": "en em santiñ sur / sur eus outañ e-unan",
        "synonyms": ["sur-meurbet"],
        "comparative": "more confident",
        "superlative": "the most confident"
    },
    {
        "word": "lorc'hus",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant lorc'h.",
                "examples": [
                    "Lorc'hus on gant berzh hor skipailh."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["lorc'h ennañ", "lorc'h bras", "lorc'h gant"],
        "comparative": "lorc'husoc'h",
        "superlative": "lorc'husañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "aoniek",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant aon.",
                "examples": [
                    "Aoniek eo."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["kaout aon", "aon rak", "aon bras"],
        "comparative": "aoniekoc'h",
        "superlative": "aoniekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "souezhet",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Bezañ souezhet gant un dra bennak na oad ket o c'hortoz.",
                "examples": [
                    "Souezhet e oa o kaout ur c'hresk-gopr."
                ]
            }
        ],
        "subtext": "en em santiñ souezhet / souezhet-bras / souezhet-mat",
        "comparative": "more surprised",
        "superlative": "the most surprised"
    },
    {
        "word": "disantet",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Bezañ trist abalamour d'un dra bennak n'eo ket bet ken mat ha ma oa rakwelet.",
                "examples": [
                    "Dipitet e oa rak n'he doa ket bet al labour."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["bezañ dipitet", "dipitet-tre", "dipitet gant"],
        "comparative": "more disappointed",
        "superlative": "the most disappointed"
    },
    {
        "word": "brav",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Plijus da welet.",
                "examples": [
                    "Brav eo ar gwel eus ar burev."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["beautiful view", "beautiful city", "absolutely beautiful"],
        "comparative": "bravoc'h",
        "superlative": "bravañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "koant",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Pleasant to look at; quite attractive.",
                "examples": [
                    "Kaer-tre eo ar sal-emvod nevez."
                ]
            }
        ],
        "subtext": "ul lec'h koant / koant a-walc'h",
        "synonyms": ["mat a-walc'h"],
        "comparative": "prettier",
        "superlative": "the prettiest"
    },
    {
        "word": "kreñv",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant nerzh.",
                "examples": [
                    "Un den kreñv eo."
                ]
            }
        ],
        "subtext": "kafe kreñv / ur soñj kreñv / kreñv-tre",
        "comparative": "kreñvoc'h",
        "superlative": "kreñvañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "wan",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep nerzh.",
                "examples": [
                    "Wan en em sentan goude bezañ bet klañv."
                ]
            }
        ],
        "subtext": "un arguzenn wan",
        "synonyms": ["luget fall", "gwan-tre"],
        "comparative": "wanoc'h",
        "superlative": "wanañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "yac'h",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "E yec'hed mat a-drugarez d'ar sport.",
                "examples": [
                    "Chom a ra e yec'hed o vont d'al labour war varc'h-houarn bemdez."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["physically fit", "stay fit", "keep fit"],
        "comparative": "fitter",
        "superlative": "the fittest"
    },
    {
        "word": "dreist",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Mat-tre; eus ul live uhel-tre.",
                "examples": [
                    "She received an excellent review."
                ]
            }
        ],
        "subtext": "labour eus ar c'hentañ",
        "synonyms": ["disoc'hoù dispar", "eus ar c'hentañ-mik"],
        "comparative": "more excellent",
        "superlative": "the most excellent"
    },
    {
        "word": "perfezh",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep fazi ebet.",
                "examples": [
                    "Un devezh perfezh eo evit beajiñ."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["a perfect opportunity", "perfect timing", "absolutely perfect"],
        "comparative": "perfezhoc'h",
        "superlative": "perfezhañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ditalvoud",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep splet.",
                "examples": [
                    "Ditalvoud eo an urzhiataer kozh-mañ dija."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["completely useless", "prove useless", "a useless idea"],
        "comparative": "ditalvoudoc'h",
        "superlative": "ditalvoudañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "reizh",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep fazi.",
                "examples": [
                    "Ar respont reizh eo."
                ]
            }
        ],
        "subtext": "respont reizh / reizh-tre",
        "synonyms": ["an doare mat"],
        "comparative": "reishoc'h",
        "superlative": "reishañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "dedennus",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant kalz talvoudegezh.",
                "examples": [
                    "Mennozhioù dedennus he deus."
                ]
            }
        ],
        "subtext": "kavout dedennus / dedennus-tre / ur mennozh dedennus",
        "comparative": "dedennusoc'h",
        "superlative": "dedennusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "borodus",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'eo ket dedennus.",
                "examples": [
                    "Borodus-tre e oa an emvod."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["borus-tre", "un emvod borus", "kavout borus"],
        "comparative": "borodusoc'h",
        "superlative": "borodusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ret",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ezhomm; goulennet evit ober un dra bennak.",
                "examples": [
                    "Ur genstag internet vat a zo ret evit al labour a-bell."
                ]
            }
        ],
        "subtext": "ret-holl / ma vez ret / ret eo ober",
        "comparative": "muioc'h ret",
        "superlative": "ar muiañ ret"
    },
    {
        "word": "posupl",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gallout a ra degouezhout.",
                "examples": [
                    "Posupl eo e vefen diwezhat."
                ]
            }
        ],
        "subtext": "as soon as possible",
        "synonyms": ["it is possible", "make possible"],
        "comparative": "posuploc'h",
        "superlative": "posuplañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "amposupl",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ne c'hell ket degouezhout.",
                "examples": [
                    "Echuiñ ar raktres-mañ en un devezh a zo amposupl."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["virtually impossible", "make impossible", "nearly impossible"],
        "comparative": "amposuploc'h",
        "superlative": "amposuplañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "ispisial",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "N'eo ket boutin.",
                "examples": [
                    "Un degouezh ispisial eo."
                ]
            }
        ],
        "subtext": "ur c'hinnig ispisial / ur goulz ispisial / ispisial-tre",
        "comparative": "ispisialoc'h",
        "superlative": "ispisialañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "brudet",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Plijet gant kalz a dud.",
                "examples": [
                    "Ar c'hafe nevez e-kichen ar burev a zo brudet-tre."
                ]
            }
        ],
        "subtext": "brudet-tre / un dibab brudet",
        "synonyms": ["ar pep brudetañ"],
        "comparative": "more popular",
        "superlative": "the most popular"
    },
    {
        "word": "heñvel",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Beajet memes tra; gant kalz a berzhioù boutin.",
                "examples": [
                    "Heñvel-tre eo hor doareoù."
                ]
            }
        ],
        "subtext": "heñvel-tre / heñvel ouzh / disoc'hoù heñvel",
        "comparative": "more similar",
        "superlative": "the most similar"
    },
    {
        "word": "mignonel",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hegarat ha plijus; aes da gomz gantañ.",
                "examples": [
                    "Ar rener nevez a zo hegarat ha tost d'an dud."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["hegarat-tre", "un dremm hegarat", "un aergelc'h hegarat"],
        "comparative": "more friendly",
        "superlative": "the most friendly"
    },
    {
        "word": "jentil",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant ur galon vat.",
                "examples": [
                    "Ur genseurt jentil-tre eo."
                ]
            }
        ],
        "subtext": "jentil ac'hanoc'h",
        "synonyms": ["hegarat-tre", "un den hegarat"],
        "comparative": "jentiloc'h",
        "superlative": "jentilañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "farsus",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Lakaat an dud da c'hoarzhin.",
                "examples": [
                    "Kontañ a ra istorioù farsus bepred."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["fentus-tre", "ur gontadenn fentus", "kavout fentus"],
        "comparative": "farsusoc'h",
        "superlative": "farsusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "speredek",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant ur spered fin.",
                "examples": [
                    "An hini speredekañ eo en hor skipailh."
                ]
            }
        ],
        "subtext": "speredek-tre / ur mennozh speredek / speredek a-walc'h",
        "comparative": "speredekoc'h",
        "superlative": "speredekañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "seven",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant doareoù mat.",
                "examples": [
                    "Seven eo bepred gant ar bratided."
                ]
            }
        ],
        "subtext": "seven-tre / ur goulenn seven / seven a-walc'h",
        "comparative": "sevenoc'h",
        "superlative": "sevenañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "dizereat",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep doareoù mat.",
                "examples": [
                    "Dizereat e oa e respont."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["dizaven-tre", "dizesk-bras", "a-ratozh dizaven"],
        "comparative": "dizereatoc'h",
        "superlative": "dizereatañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "leue",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Hep c'hoant labourat.",
                "examples": [
                    "N'eo ket leue, skuizh eo hepken."
                ]
            }
        ],
        "subtext": "",
        "synonyms": ["lezirek-tre", "un doare lezirek", "re lezirek"],
        "comparative": "leueoc'h",
        "superlative": "leueañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    },
    {
        "word": "onest",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "O lavarout ar wirionez; hep lakaat e gaou.",
                "examples": [
                    "Brudet eo evit bezañ onest-holl gant ar bratided."
                ]
            }
        ],
        "subtext": "onest-tre / onest-holl",
        "comparative": "onestoc'h",
        "superlative": "onestañ"
    },
    {
        "word": "trouzus",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Gant trouz.",
                "examples": [
                    "Trouzus-tre eo ar straed."
                ]
            }
        ],
        "subtext": "trouzus-tre / un aergelc'h trouzus",
        "synonyms": ["re drouzus"],
        "comparative": "trouzusoc'h",
        "superlative": "trouzusañ",
        "feminine": null,
        "plural": null,
        "femininePlural": null
    }
]
    const lang = "br";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
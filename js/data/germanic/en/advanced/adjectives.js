(function() {
    const data = [
        {
            "word": "charismatic",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "✨",
            "subtext": "charismatic leader / charismatic authority / charismatic personality",
            "form": "adjective",
            "transcription": "ˌkærɪzˈmætɪk",
            "definitions": [
                {
                    "text": "Possessing a compelling charm that inspires devotion in others.",
                    "examples": [
                        "He was a charismatic figure who could motivate thousands."
                    ]
                }
            ],
            "synonyms": ["charming", "magnetic", "captivating"],
            "antonyms": ["uninspiring", "dull"]
        },
        {
            "word": "absurd",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🤡",
            "subtext": "utterly absurd / completely absurd / sound absurd",
            "form": "adjective",
            "transcription": "əbˈsɜːd",
            "definitions": [
                {
                    "text": "Completely unreasonable; making no sense at all.",
                    "examples": [
                        "The whole situation seemed utterly absurd."
                    ]
                }
            ],
            "synonyms": ["ridiculous", "ludicrous", "preposterous"],
            "antonyms": ["reasonable", "logical"]
        },
        {
            "word": "appealing",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "emoji": "🍏",
            "subtext": "very appealing / hugely appealing / find appealing",
            "form": "adjective",
            "transcription": "əˈpiːlɪŋ",
            "definitions": [
                {
                    "text": "Attractive and interesting; having wide appeal.",
                    "examples": [
                        "The idea of a four-day week is appealing to most workers."
                    ]
                }
            ],
            "synonyms": ["attractive", "inviting", "alluring"],
            "antonyms": ["unappealing", "repulsive"]
        },
        {
            "word": "bizarre",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🌀",
            "subtext": "very bizarre / quite bizarre / find bizarre",
            "form": "adjective",
            "transcription": "bɪˈzɑː",
            "definitions": [
                {
                    "text": "Very strange and unusual.",
                    "examples": [
                        "He gave a rather bizarre explanation for the delay."
                    ]
                }
            ],
            "synonyms": ["strange", "peculiar", "weird"],
            "antonyms": ["normal", "ordinary"]
        },
        {
            "word": "costly",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "emoji": "💸",
            "subtext": "very costly / extremely costly / a costly mistake",
            "form": "adjective",
            "transcription": "🇬🇧 ˈkɒstli | 🇺🇸 ˈkɑːstli",
            "definitions": [
                {
                    "text": "Causing a lot of harm, loss or expense.",
                    "examples": [
                        "The error proved very costly for the company."
                    ]
                }
            ],
            "synonyms": ["expensive", "dear", "ruinous"],
            "antonyms": ["cheap", "inexpensive"]
        },
        {
            "word": "delicate",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🌸",
            "subtext": "a delicate balance / very delicate / extremely delicate",
            "form": "adjective",
            "transcription": "ˈdelɪkət",
            "definitions": [
                {
                    "text": "Requiring careful handling; sensitive.",
                    "examples": [
                        "Peace in the region depends on a delicate balance."
                    ]
                }
            ],
            "synonyms": ["fragile", "sensitive", "subtle"],
            "antonyms": ["robust", "strong"]
        },
        {
            "word": "desirable",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "emoji": "⭐",
            "subtext": "highly desirable / very desirable / a desirable quality",
            "form": "adjective",
            "transcription": "dɪˈzaɪərəbl",
            "definitions": [
                {
                    "text": "Worth having or wanting; attractive.",
                    "examples": [
                        "Experience with data analytics is highly desirable."
                    ]
                }
            ],
            "synonyms": ["sought-after", "advantageous", "coveted"],
            "antonyms": ["undesirable"]
        },
        {
            "word": "distinctive",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🆔",
            "subtext": "very distinctive / highly distinctive / a distinctive feature",
            "form": "adjective",
            "transcription": "dɪˈstɪŋktɪv",
            "definitions": [
                {
                    "text": "Different from others in a noticeable way.",
                    "examples": [
                        "She has a very distinctive writing style."
                    ]
                }
            ],
            "synonyms": ["unique", "characteristic", "individual"],
            "antonyms": ["common", "ordinary"]
        },
        {
            "word": "exceptional",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🌟",
            "subtext": "truly exceptional / quite exceptional / of exceptional quality",
            "form": "adjective",
            "transcription": "ɪkˈsepʃənl",
            "definitions": [
                {
                    "text": "Unusually good; far above average.",
                    "examples": [
                        "The candidate showed exceptional leadership skills."
                    ]
                }
            ],
            "synonyms": ["outstanding", "extraordinary", "remarkable"],
            "antonyms": ["average", "mediocre"]
        },
        {
            "word": "favourable",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "📈",
            "subtext": "very favourable / highly favourable / a favourable outcome",
            "form": "adjective",
            "transcription": "ˈfeɪvərəbl",
            "definitions": [
                {
                    "text": "Showing approval; helpful or positive.",
                    "examples": [
                        "The response from clients was very favourable."
                    ]
                }
            ],
            "synonyms": ["positive", "advantageous", "beneficial"],
            "antonyms": ["unfavourable", "negative"]
        },
        {
            "word": "fierce",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🔥",
            "subtext": "fierce competition / very fierce / a fierce debate",
            "form": "adjective",
            "transcription": "fɪəs",
            "definitions": [
                {
                    "text": "Very strong or intense; showing strong emotion.",
                    "examples": [
                        "There was fierce competition for the contract."
                    ]
                }
            ],
            "synonyms": ["intense", "powerful", "vehement"],
            "antonyms": ["mild", "gentle"]
        },
        {
            "word": "fragile",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "📦",
            "subtext": "very fragile / extremely fragile / a fragile situation",
            "form": "adjective",
            "transcription": "ˈfrædʒaɪl",
            "definitions": [
                {
                    "text": "Easily broken or damaged; delicate.",
                    "examples": [
                        "The country's economy is in a fragile state."
                    ]
                }
            ],
            "synonyms": ["delicate", "flimsy", "vulnerable"],
            "antonyms": ["robust", "sturdy"]
        },
        {
            "word": "harsh",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🌵",
            "subtext": "very harsh / extremely harsh / harsh criticism",
            "form": "adjective",
            "transcription": "hɑːʃ",
            "definitions": [
                {
                    "text": "Cruel or unpleasant; very difficult.",
                    "examples": [
                        "The harsh reality is that redundancies are unavoidable."
                    ]
                }
            ],
            "synonyms": ["severe", "stringent", "cruel"],
            "antonyms": ["mild", "soft"]
        },
        {
            "word": "hostile",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "😠",
            "subtext": "deeply hostile / very hostile / a hostile environment",
            "form": "adjective",
            "transcription": "🇬🇧 ˈhɒstaɪl | 🇺🇸 ˈhɑːstaɪl",
            "definitions": [
                {
                    "text": "Showing strong opposition; unfriendly.",
                    "examples": [
                        "The acquisition was met with a hostile response."
                    ]
                }
            ],
            "synonyms": ["unfriendly", "antagonistic", "belligerent"],
            "antonyms": ["friendly", "amicable"]
        },
        {
            "word": "inadequate",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "📉",
            "subtext": "wholly inadequate / completely inadequate / deeply inadequate",
            "form": "adjective",
            "transcription": "ɪnˈædɪkwət",
            "definitions": [
                {
                    "text": "Not enough; below the required standard.",
                    "examples": [
                        "The funding was totally inadequate for the scale of the project."
                    ]
                }
            ],
            "synonyms": ["insufficient", "deficient", "scanty"],
            "antonyms": ["adequate", "sufficient"]
        },
        {
            "word": "intriguing",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🤔",
            "subtext": "very intriguing / quite intriguing / find intriguing",
            "form": "adjective",
            "transcription": "ɪnˈtriːɡɪŋ",
            "definitions": [
                {
                    "text": "Very interesting; arousing curiosity.",
                    "examples": [
                        "She raised an intriguing point about the data."
                    ]
                }
            ],
            "synonyms": ["fascinating", "compelling", "captivating"],
            "antonyms": ["boring", "uninteresting"]
        },
        {
            "word": "moderate",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "⚖️",
            "subtext": "quite moderate / fairly moderate / a moderate improvement",
            "form": "adjective",
            "transcription": "🇬🇧 ˈmɒdərət | 🇺🇸 ˈmɑːdərət",
            "definitions": [
                {
                    "text": "Not extreme; somewhere in the middle.",
                    "examples": [
                        "The team achieved moderate success in the first quarter."
                    ]
                }
            ],
            "synonyms": ["average", "modest", "temperate"],
            "antonyms": ["extreme", "excessive"]
        },
        {
            "word": "peculiar",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🥨",
            "subtext": "very peculiar / quite peculiar / find peculiar",
            "form": "adjective",
            "transcription": "🇬🇧 pɪˈkjuːliə | 🇺🇸 pɪˈkjuːliər",
            "definitions": [
                {
                    "text": "Strange; unlike what is normal.",
                    "examples": [
                        "There was something peculiar about the way the data was collected."
                    ]
                }
            ],
            "synonyms": ["odd", "strange", "unusual"],
            "antonyms": ["normal", "ordinary"]
        },
        {
            "word": "prestigious",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "emoji": "🏛️",
            "subtext": "very prestigious / highly prestigious / a prestigious award",
            "form": "adjective",
            "transcription": "preˈstɪdʒəs",
            "definitions": [
                {
                    "text": "Respected and admired by many people.",
                    "examples": [
                        "She left for a more prestigious role at a larger firm."
                    ]
                }
            ],
            "synonyms": ["reputable", "distinguished", "esteemed"],
            "antonyms": ["obscure", "disreputable"]
        },
        {
            "word": "problematic",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "⚠️",
            "subtext": "very problematic / highly problematic / deeply problematic",
            "form": "adjective",
            "transcription": "🇬🇧 ˌprɒbləˈmætɪk | 🇺🇸 ˌprɑːbləˈmætɪk",
            "definitions": [
                {
                    "text": "Involving or presenting a problem.",
                    "examples": [
                        "The new regulation could prove highly problematic."
                    ]
                }
            ],
            "synonyms": ["troublesome", "difficult", "unsettled"],
            "antonyms": ["simple", "straightforward"]
        },
        {
            "word": "productive",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "emoji": "🚜",
            "subtext": "very productive / highly productive / a productive discussion",
            "form": "adjective",
            "transcription": "prəˈdʌktɪv",
            "definitions": [
                {
                    "text": "Producing good results; effective.",
                    "examples": [
                        "We had a very productive strategy session."
                    ]
                }
            ],
            "synonyms": ["fruitful", "efficient", "prolific"],
            "antonyms": ["unproductive", "idle"]
        },
        {
            "word": "profitable",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "emoji": "💰",
            "subtext": "very profitable / highly profitable / a profitable venture",
            "form": "adjective",
            "transcription": "🇬🇧 ˈprɒfɪtəbl | 🇺🇸 ˈprɑːfɪtəbl",
            "definitions": [
                {
                    "text": "Producing financial gain.",
                    "examples": [
                        "The new product line has been highly profitable."
                    ]
                }
            ],
            "synonyms": ["lucrative", "money-making", "commercial"],
            "antonyms": ["unprofitable", "loss-making"]
        },
        {
            "word": "superb",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "💎",
            "subtext": "absolutely superb / truly superb / simply superb",
            "form": "adjective",
            "transcription": "suːˈpɜːb",
            "definitions": [
                {
                    "text": "Excellent; of the best quality.",
                    "examples": [
                        "She gave a superb presentation to the board."
                    ]
                }
            ],
            "synonyms": ["excellent", "magnificent", "splendid"],
            "antonyms": ["poor", "inferior"]
        },
        {
            "word": "transparent",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "emoji": "🪟",
            "subtext": "fully transparent / very transparent / openly transparent",
            "form": "adjective",
            "transcription": "trænˈspærənt",
            "definitions": [
                {
                    "text": "Open and honest; not trying to hide anything.",
                    "examples": [
                        "The company aims to be fully transparent with shareholders."
                    ]
                }
            ],
            "synonyms": ["clear", "honest", "candid"],
            "antonyms": ["opaque", "secretive"]
        },
        {
            "word": "vicious",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🦂",
            "subtext": "utterly vicious / a vicious circle / a vicious attack",
            "form": "adjective",
            "transcription": "ˈvɪʃəs",
            "definitions": [
                {
                    "text": "Deliberately cruel; savage.",
                    "examples": [
                        "The review process was described as a vicious cycle."
                    ]
                }
            ],
            "synonyms": ["cruel", "ferocious", "malicious"],
            "antonyms": ["gentle", "kind"]
        },
        {
            "word": "worthwhile",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "✔️",
            "subtext": "very worthwhile / well worthwhile / prove worthwhile",
            "form": "adjective",
            "transcription": "ˌwɜːθˈwaɪl",
            "definitions": [
                {
                    "text": "Worth the time or effort involved.",
                    "examples": [
                        "Learning another language is a worthwhile investment."
                    ]
                }
            ],
            "synonyms": ["valuable", "beneficial", "useful"],
            "antonyms": ["pointless", "useless"]
        },
        {
            "word": "accountable",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "emoji": "👨‍⚖️",
            "subtext": "held accountable / fully accountable / accountable to",
            "form": "adjective",
            "transcription": "əˈkaʊntəbl",
            "definitions": [
                {
                    "text": "Responsible for decisions and having to explain them.",
                    "examples": [
                        "Every manager must be held accountable for their team."
                    ]
                }
            ],
            "synonyms": ["responsible", "liable", "answerable"],
            "antonyms": ["irresponsible", "unaccountable"]
        },
        {
            "word": "applicable",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "📎",
            "subtext": "fully applicable / directly applicable / applicable to",
            "form": "adjective",
            "transcription": "əˈplɪkəbl",
            "definitions": [
                {
                    "text": "Relevant; able to be applied to a situation.",
                    "examples": [
                        "The new rules are applicable to all employees."
                    ]
                }
            ],
            "synonyms": ["relevant", "appropriate", "fitting"],
            "antonyms": ["inapplicable", "irrelevant"]
        },
        {
            "word": "arbitrary",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🎲",
            "subtext": "entirely arbitrary / seemingly arbitrary / an arbitrary decision",
            "form": "adjective",
            "transcription": "ˈɑːbɪtrəri",
            "definitions": [
                {
                    "text": "Based on random choice; not based on reason.",
                    "examples": [
                        "The decision seemed completely arbitrary."
                    ]
                }
            ],
            "synonyms": ["random", "chance", "capricious"],
            "antonyms": ["rational", "reasoned"]
        },
        {
            "word": "authentic",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "📜",
            "subtext": "truly authentic / completely authentic / an authentic voice",
            "form": "adjective",
            "transcription": "ɔːˈθentɪk",
            "definitions": [
                {
                    "text": "Genuine; real; not a copy.",
                    "examples": [
                        "The restaurant offers an authentic experience."
                    ]
                }
            ],
            "synonyms": ["genuine", "real", "true"],
            "antonyms": ["fake", "counterfeit"]
        },
        {
            "word": "comparable",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "↔️",
            "subtext": "directly comparable / not really comparable / fully comparable",
            "form": "adjective",
            "transcription": "🇬🇧 ˈkɒmpərəbl | 🇺🇸 ˈkɑːmpərəbl",
            "definitions": [
                {
                    "text": "Similar enough to compare; of equivalent quality.",
                    "examples": [
                        "The two contracts are not really comparable."
                    ]
                }
            ],
            "synonyms": ["similar", "equivalent", "akin"],
            "antonyms": ["incomparable", "different"]
        },
        {
            "word": "compelling",
            "level": "advanced",
            "theme": "language_persuasion_C1",
            "emoji": "🧲",
            "subtext": "very compelling / highly compelling / a compelling argument",
            "form": "adjective",
            "transcription": "kəmˈpelɪŋ",
            "definitions": [
                {
                    "text": "Very convincing; creating a strong desire.",
                    "examples": [
                        "She made a very compelling case for the investment."
                    ]
                }
            ],
            "synonyms": ["convincing", "persuasive", "gripping"],
            "antonyms": ["unconvincing", "weak"]
        },
        {
            "word": "credible",
            "level": "advanced",
            "theme": "language_persuasion_C1",
            "emoji": "🤝",
            "subtext": "very credible / a credible source / entirely credible",
            "form": "adjective",
            "transcription": "ˈkredəbl",
            "definitions": [
                {
                    "text": "Able to be believed; trustworthy.",
                    "examples": [
                        "The company needs a credible response to the allegations."
                    ]
                }
            ],
            "synonyms": ["believable", "trustworthy", "reliable"],
            "antonyms": ["incredible", "untrustworthy"]
        },
        {
            "word": "definitive",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🏁",
            "subtext": "truly definitive / the definitive guide / a definitive answer",
            "form": "adjective",
            "transcription": "dɪˈfɪnətɪv",
            "definitions": [
                {
                    "text": "Final; clearly established and not in doubt.",
                    "examples": [
                        "This is the definitive account of what happened."
                    ]
                }
            ],
            "synonyms": ["final", "conclusive", "ultimate"],
            "antonyms": ["tentative", "provisional"]
        },
        {
            "word": "eligible",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "✅",
            "subtext": "fully eligible / not eligible / eligible for",
            "form": "adjective",
            "transcription": "ˈelɪdʒəbl",
            "definitions": [
                {
                    "text": "Having the right to receive or do something.",
                    "examples": [
                        "Only permanent employees are eligible for the bonus."
                    ]
                }
            ],
            "synonyms": ["qualified", "entitled", "fit"],
            "antonyms": ["ineligible", "unqualified"]
        },
        {
            "word": "explicit",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "📢",
            "subtext": "very explicit / entirely explicit / make explicit",
            "form": "adjective",
            "transcription": "ɪkˈsplɪsɪt",
            "definitions": [
                {
                    "text": "Clearly and fully expressed; nothing left out.",
                    "examples": [
                        "The contract contains explicit terms about working hours."
                    ]
                }
            ],
            "synonyms": ["clear", "plain", "overt"],
            "antonyms": ["implicit", "vague"]
        },
        {
            "word": "illegitimate",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "❌",
            "subtext": "completely illegitimate / deemed illegitimate / an illegitimate claim",
            "form": "adjective",
            "transcription": "ˌɪlɪˈdʒɪtɪmət",
            "definitions": [
                {
                    "text": "Not authorised by law or proper authority.",
                    "examples": [
                        "The action was declared illegitimate by the court."
                    ]
                }
            ],
            "synonyms": ["illegal", "unlawful", "unauthorised"],
            "antonyms": ["legitimate", "legal"]
        },
        {
            "word": "inherent",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🧬",
            "subtext": "inherent risk / an inherent problem / naturally inherent",
            "form": "adjective",
            "transcription": "ɪnˈhɪərənt",
            "definitions": [
                {
                    "text": "Existing in something as a permanent feature.",
                    "examples": [
                        "There are inherent risks in any start-up business."
                    ]
                }
            ],
            "synonyms": ["intrinsic", "innate", "built-in"],
            "antonyms": ["extrinsic", "acquired"]
        },
        {
            "word": "irrelevant",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🗑️",
            "subtext": "totally irrelevant / completely irrelevant / largely irrelevant",
            "form": "adjective",
            "transcription": "ɪˈreləvənt",
            "definitions": [
                {
                    "text": "Not connected to the topic; not important now.",
                    "examples": [
                        "That point is completely irrelevant to the discussion."
                    ]
                }
            ],
            "synonyms": ["unrelated", "extraneous", "beside the point"],
            "antonyms": ["relevant", "germane"]
        },
        {
            "word": "legitimate",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "⚖️",
            "subtext": "entirely legitimate / wholly legitimate / a legitimate concern",
            "form": "adjective",
            "transcription": "lɪˈdʒɪtɪmət",
            "definitions": [
                {
                    "text": "Lawful; conforming to accepted standards.",
                    "examples": [
                        "This is a legitimate concern that must be addressed."
                    ]
                }
            ],
            "synonyms": ["legal", "lawful", "valid"],
            "antonyms": ["illegitimate", "invalid"]
        },
        {
            "word": "misleading",
            "level": "advanced",
            "theme": "language_persuasion_C1",
            "emoji": "🤥",
            "subtext": "highly misleading / deeply misleading / potentially misleading",
            "form": "adjective",
            "transcription": "ˌmɪsˈliːdɪŋ",
            "definitions": [
                {
                    "text": "Giving a false impression; deceptive.",
                    "examples": [
                        "The advertisement was ruled to be deliberately misleading."
                    ]
                }
            ],
            "synonyms": ["deceptive", "confusing", "ambiguous"],
            "antonyms": ["accurate", "informative"]
        },
        {
            "word": "plausible",
            "level": "advanced",
            "theme": "language_persuasion_C1",
            "emoji": "🤨",
            "subtext": "very plausible / quite plausible / a plausible explanation",
            "form": "adjective",
            "transcription": "ˈplɔːzəbl",
            "definitions": [
                {
                    "text": "Seeming reasonable or probable.",
                    "examples": [
                        "His explanation sounded plausible enough."
                    ]
                }
            ],
            "synonyms": ["believable", "reasonable", "credible"],
            "antonyms": ["implausible", "unlikely"]
        },
        {
            "word": "preliminary",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🆕",
            "subtext": "very preliminary / purely preliminary / a preliminary finding",
            "form": "adjective",
            "transcription": "prɪˈlɪmɪnəri",
            "definitions": [
                {
                    "text": "Coming before the main event; preparatory.",
                    "examples": [
                        "The preliminary results are very encouraging."
                    ]
                }
            ],
            "synonyms": ["initial", "introductory", "early"],
            "antonyms": ["final", "concluding"]
        },
        {
            "word": "regulatory",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "emoji": "🛂",
            "subtext": "strict regulatory / a regulatory framework / regulatory approval",
            "form": "adjective",
            "transcription": "ˈreɡjələtəri",
            "definitions": [
                {
                    "text": "Relating to official rules and controls.",
                    "examples": [
                        "The company must comply with all regulatory requirements."
                    ]
                }
            ],
            "synonyms": ["supervisory", "managerial"]
        },
        {
            "word": "symbolic",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🕊️",
            "subtext": "purely symbolic / deeply symbolic / a symbolic gesture",
            "form": "adjective",
            "transcription": "🇬🇧 sɪmˈbɒlɪk | 🇺🇸 sɪmˈbɑːlɪk",
            "definitions": [
                {
                    "text": "Representing something; not having real significance.",
                    "examples": [
                        "The gesture was largely symbolic but well received."
                    ]
                }
            ],
            "synonyms": ["emblematic", "representative", "figurative"],
            "antonyms": ["literal", "real"]
        },
        {
            "word": "viable",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "emoji": "🌱",
            "subtext": "fully viable / commercially viable / economically viable",
            "form": "adjective",
            "transcription": "ˈvaɪəbl",
            "definitions": [
                {
                    "text": "Capable of working; feasible.",
                    "examples": [
                        "The team needs to find a viable alternative solution."
                    ]
                }
            ],
            "synonyms": ["feasible", "workable", "practical"],
            "antonyms": ["unviable", "impossible"]
        },
        {
            "word": "cynical",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "😒",
            "subtext": "deeply cynical / very cynical / grow cynical",
            "form": "adjective",
            "transcription": "ˈsɪnɪkl",
            "definitions": [
                {
                    "text": "Believing people are motivated only by self-interest.",
                    "examples": [
                        "He has a very cynical view of corporate social responsibility."
                    ]
                }
            ],
            "synonyms": ["skeptical", "pessimistic", "distrustful"],
            "antonyms": ["optimistic", "idealistic"]
        },
        {
            "word": "humane",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🤝",
            "subtext": "very humane / completely humane / a humane approach",
            "form": "adjective",
            "transcription": "hjuːˈmeɪn",
            "definitions": [
                {
                    "text": "Showing compassion and benevolence.",
                    "examples": [
                        "The company treats its workers in a very humane way."
                    ]
                }
            ],
            "synonyms": ["compassionate", "kind", "benevolent"],
            "antonyms": ["inhumane", "cruel"]
        },
        {
            "word": "hypocritical",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "👺",
            "subtext": "deeply hypocritical / utterly hypocritical / openly hypocritical",
            "form": "adjective",
            "transcription": "ˌhɪpəˈkrɪtɪkl",
            "definitions": [
                {
                    "text": "Pretending to have beliefs you do not actually have.",
                    "examples": [
                        "It is hypocritical to talk about sustainability while flying constantly."
                    ]
                }
            ],
            "synonyms": ["sanctimonious", "insincere", "two-faced"],
            "antonyms": ["sincere", "honest"]
        },
        {
            "word": "impulsive",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "⚡",
            "subtext": "very impulsive / completely impulsive / act impulsively",
            "form": "adjective",
            "transcription": "ɪmˈpʌlsɪv",
            "definitions": [
                {
                    "text": "Acting without thinking; responding to impulses.",
                    "examples": [
                        "He made an impulsive decision and regretted it later."
                    ]
                }
            ],
            "synonyms": ["rash", "hasty", "unpredictable"],
            "antonyms": ["deliberate", "planned"]
        },
        {
            "word": "manipulative",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🕹️",
            "subtext": "deeply manipulative / very manipulative / overtly manipulative",
            "form": "adjective",
            "transcription": "məˈnɪpjələtɪv",
            "definitions": [
                {
                    "text": "Using unfair influence to control others.",
                    "examples": [
                        "He has a manipulative approach that makes colleagues uncomfortable."
                    ]
                }
            ],
            "synonyms": ["calculating", "deceptive", "cunning"]
        },
        {
            "word": "naive",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "👶",
            "subtext": "very naive / somewhat naive / dangerously naive",
            "form": "adjective",
            "transcription": "naɪˈiːv",
            "definitions": [
                {
                    "text": "Having too simple a view of the world; lacking experience.",
                    "examples": [
                        "It would be naive to think this problem has an easy solution."
                    ]
                }
            ],
            "synonyms": ["innocent", "unsophisticated", "artless"],
            "antonyms": ["sophisticated", "experienced"]
        },
        {
            "word": "pragmatic",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🛠️",
            "subtext": "very pragmatic / highly pragmatic / a pragmatic solution",
            "form": "adjective",
            "transcription": "præɡˈmætɪk",
            "definitions": [
                {
                    "text": "Dealing with things in a practical way.",
                    "examples": [
                        "She has a very pragmatic approach to problem-solving."
                    ]
                }
            ],
            "synonyms": ["practical", "realistic", "down-to-earth"],
            "antonyms": ["idealistic", "impractical"]
        },
        {
            "word": "principled",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "⚖️",
            "subtext": "highly principled / firmly principled / a principled stand",
            "form": "adjective",
            "transcription": "ˈprɪnsəpəld",
            "definitions": [
                {
                    "text": "Acting in accordance with strong moral values.",
                    "examples": [
                        "She is known for being a principled and fair leader."
                    ]
                }
            ],
            "synonyms": ["moral", "upright", "ethical"],
            "antonyms": ["unprincipled", "immoral"]
        },
        {
            "word": "reckless",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🏎️",
            "subtext": "very reckless / utterly reckless / recklessly ambitious",
            "form": "adjective",
            "transcription": "ˈrekləs",
            "definitions": [
                {
                    "text": "Not thinking about the dangers of your actions.",
                    "examples": [
                        "The decision was described as reckless and irresponsible."
                    ]
                }
            ],
            "synonyms": ["rash", "careless", "foolhardy"],
            "antonyms": ["careful", "cautious"]
        },
        {
            "word": "resilient",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🎾",
            "subtext": "very resilient / highly resilient / a resilient organisation",
            "form": "adjective",
            "transcription": "rɪˈzɪliənt",
            "definitions": [
                {
                    "text": "Able to recover quickly from difficulties.",
                    "examples": [
                        "The team proved resilient in the face of crisis."
                    ]
                }
            ],
            "synonyms": ["tough", "strong", "flexible"],
            "antonyms": ["fragile", "weak"]
        },
        {
            "word": "ruthless",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🗡️",
            "subtext": "utterly ruthless / completely ruthless / a ruthless approach",
            "form": "adjective",
            "transcription": "ˈruːθləs",
            "definitions": [
                {
                    "text": "Willing to do anything to achieve your aims.",
                    "examples": [
                        "The CEO has a reputation for being ruthlessly efficient."
                    ]
                }
            ],
            "synonyms": ["merciless", "pitiless", "cold-blooded"],
            "antonyms": ["merciful", "compassionate"]
        },
        {
            "word": "shrewd",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🦊",
            "subtext": "very shrewd / extremely shrewd / a shrewd move",
            "form": "adjective",
            "transcription": "ʃruːd",
            "definitions": [
                {
                    "text": "Having good practical judgement; clever.",
                    "examples": [
                        "She is a very shrewd negotiator."
                    ]
                }
            ],
            "synonyms": ["clever", "astute", "sharp"],
            "antonyms": ["stupid", "naive"]
        },
        {
            "word": "tenacious",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "⚓",
            "subtext": "very tenacious / extremely tenacious / tenaciously pursued",
            "form": "adjective",
            "transcription": "təˈneɪʃəs",
            "definitions": [
                {
                    "text": "Holding firmly to something; very determined.",
                    "examples": [
                        "He is tenacious and never gives up on a deal."
                    ]
                }
            ],
            "synonyms": ["determined", "persistent", "resolute"],
            "antonyms": ["irresolute", "weak"]
        },
        {
            "word": "visionary",
            "level": "advanced",
            "theme": "psychological_states_C1",
            "emoji": "🔭",
            "subtext": "truly visionary / a visionary approach / a visionary leader",
            "form": "adjective",
            "transcription": "ˈvɪʒənəri",
            "definitions": [
                {
                    "text": "Thinking about the future in an original way.",
                    "examples": [
                        "She is known as a visionary leader in the sector."
                    ]
                }
            ],
            "synonyms": ["inspired", "imaginative", "creative"],
            "antonyms": ["unimaginative", "short-sighted"]
        },
        {
            "word": "acute",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🗡️",
            "subtext": "an acute problem / very acute / acute shortage",
            "form": "adjective",
            "transcription": "əˈkjuːt",
            "definitions": [
                {
                    "text": "Very serious; strong and sharp.",
                    "examples": [
                        "There is an acute shortage of affordable housing."
                    ]
                }
            ],
            "synonyms": ["sharp", "severe", "intense"],
            "antonyms": ["mild", "chronic"]
        },
        {
            "word": "chronic",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "⌛",
            "subtext": "a chronic problem / chronically underfunded / chronic shortage",
            "form": "adjective",
            "transcription": "🇬🇧 ˈkrɒnɪk | 🇺🇸 ˈkrɑːnɪk",
            "definitions": [
                {
                    "text": "Lasting a long time; recurring.",
                    "examples": [
                        "Chronic underfunding has damaged the public sector."
                    ]
                }
            ],
            "synonyms": ["persistent", "long-standing", "incurable"],
            "antonyms": ["acute", "temporary"]
        },
        {
            "word": "prevalent",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🌍",
            "subtext": "very prevalent / increasingly prevalent / remain prevalent",
            "form": "adjective",
            "transcription": "ˈprevələnt",
            "definitions": [
                {
                    "text": "Widespread; commonly found.",
                    "examples": [
                        "Burnout is increasingly prevalent in senior management."
                    ]
                }
            ],
            "synonyms": ["widespread", "common", "ubiquitous"],
            "antonyms": ["rare", "uncommon"]
        },
        {
            "word": "prone",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "📉",
            "subtext": "prone to / highly prone / be prone to errors",
            "form": "adjective",
            "transcription": "🇬🇧 prəʊn | 🇺🇸 proʊn",
            "definitions": [
                {
                    "text": "Likely to be affected by something negative.",
                    "examples": [
                        "This sector is prone to sudden and unpredictable change."
                    ]
                }
            ],
            "synonyms": ["susceptible", "vulnerable", "liable"],
            "antonyms": ["resistant", "immune"]
        },
        {
            "word": "stagnant",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "💧",
            "subtext": "completely stagnant / remain stagnant / a stagnant market",
            "form": "adjective",
            "transcription": "ˈstæɡnənt",
            "definitions": [
                {
                    "text": "Not growing or developing.",
                    "examples": [
                        "The economy has remained largely stagnant."
                    ]
                }
            ],
            "synonyms": ["still", "motionless", "static"],
            "antonyms": ["flowing", "active", "dynamic"]
        },
        {
            "word": "vulnerable",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🛡️",
            "subtext": "very vulnerable / highly vulnerable / left vulnerable",
            "form": "adjective",
            "transcription": "ˈvʌlnərəbl",
            "definitions": [
                {
                    "text": "Open to being harmed or attacked.",
                    "examples": [
                        "Young workers are particularly vulnerable in this economy."
                    ]
                }
            ],
            "synonyms": ["exposed", "defenceless", "at risk"],
            "antonyms": ["invulnerable", "protected"]
        },
        {
            "word": "abstract",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "🎨",
            "subtext": "very abstract / purely abstract / an abstract idea",
            "form": "adjective",
            "transcription": "ˈæbstrækt",
            "definitions": [
                {
                    "text": "Existing as an idea; not concrete.",
                    "examples": [
                        "The report deals with abstract concepts of value."
                    ]
                }
            ],
            "synonyms": ["theoretical", "conceptual", "ideational"],
            "antonyms": ["concrete", "actual"]
        },
        {
            "word": "cognitive",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "🧠",
            "subtext": "cognitive ability / cognitive bias / a cognitive approach",
            "form": "adjective",
            "transcription": "🇬🇧 ˈkɒɡnətɪv | 🇺🇸 ˈkɑːɡnətɪv",
            "definitions": [
                {
                    "text": "Relating to mental processes of understanding.",
                    "examples": [
                        "Stress has a serious impact on cognitive performance."
                    ]
                }
            ]
        },
        {
            "word": "empirical",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "🧪",
            "subtext": "purely empirical / strictly empirical / empirical research",
            "form": "adjective",
            "transcription": "ɪmˈpɪrɪkl",
            "definitions": [
                {
                    "text": "Based on observation or experiment, not theory.",
                    "examples": [
                        "The argument is supported by strong empirical evidence."
                    ]
                }
            ],
            "synonyms": ["observed", "practical", "experimental"],
            "antonyms": ["theoretical", "conjectural"]
        },
        {
            "word": "ethical",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "⚖️",
            "subtext": "deeply ethical / an ethical question / entirely ethical",
            "form": "adjective",
            "transcription": "ˈeθɪkl",
            "definitions": [
                {
                    "text": "Relating to moral principles of right and wrong.",
                    "examples": [
                        "The company is committed to ethical sourcing."
                    ]
                }
            ],
            "synonyms": ["moral", "principled", "virtuous"],
            "antonyms": ["unethical", "immoral"]
        },
        {
            "word": "implicit",
            "level": "advanced",
            "theme": "knowledge_epistemology_C1",
            "emoji": "🤫",
            "subtext": "largely implicit / an implicit assumption / implicit bias",
            "form": "adjective",
            "transcription": "ɪmˈplɪsɪt",
            "definitions": [
                {
                    "text": "Suggested though not directly expressed.",
                    "examples": [
                        "There is an implicit understanding that loyalty is rewarded."
                    ]
                }
            ],
            "synonyms": ["implied", "tacit", "unspoken"],
            "antonyms": ["explicit", "direct"]
        },
        {
            "word": "marginal",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "↔️",
            "subtext": "very marginal / only marginal / a marginal difference",
            "form": "adjective",
            "transcription": "ˈmɑːdʒɪnl",
            "definitions": [
                {
                    "text": "Small and not very important; relating to the edges.",
                    "examples": [
                        "The improvement was marginal and barely noticeable."
                    ]
                }
            ],
            "synonyms": ["slight", "minor", "insignificant"],
            "antonyms": ["significant", "major"]
        },
        {
            "word": "structural",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "🏗️",
            "subtext": "deep structural / a structural problem / structural change",
            "form": "adjective",
            "transcription": "ˈstrʌktʃərəl",
            "definitions": [
                {
                    "text": "Relating to the way something is built or organised.",
                    "examples": [
                        "The economy faces some deep structural problems."
                    ]
                }
            ]
        },
        {
            "word": "systematic",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "⚙️",
            "subtext": "very systematic / highly systematic / a systematic review",
            "form": "adjective",
            "transcription": "ˌsɪstəˈmætɪk",
            "definitions": [
                {
                    "text": "Done according to a plan; methodical.",
                    "examples": [
                        "She took a very systematic approach to the problem."
                    ]
                }
            ],
            "synonyms": ["methodical", "orderly", "organised"],
            "antonyms": ["disorderly", "chaotic"]
        },
        {
            "word": "theoretical",
            "level": "advanced",
            "theme": "advanced_register_C1",
            "emoji": "📚",
            "subtext": "purely theoretical / very theoretical / a theoretical framework",
            "form": "adjective",
            "transcription": "ˌθɪəˈretɪkl",
            "definitions": [
                {
                    "text": "Based on theory rather than practice.",
                    "examples": [
                        "The problem is theoretical — it does not arise in practice."
                    ]
                }
            ],
            "synonyms": ["abstract", "academic", "hypothetical"],
            "antonyms": ["practical", "applied"]
        }
    ];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

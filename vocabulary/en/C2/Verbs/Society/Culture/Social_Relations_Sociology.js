(function() {
    const lang = "en";
    const data = [
    {
        "id": "C2-VERB-SOC-01",
        "word": "abrogate",
        "emoji": "🔨",
        "transcription": "ˈæbrəɡeɪt",
        "subtext": "abrogate an agreement / abrogate a treaty / unilateral abrogation",
        "form": "verb",
        "definitions": [
            {
                "text": "To formally repeal or abolish a law or agreement.",
                "examples": [
                    "The government sought to abrogate the trade agreement unilaterally."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "abrogated",
        "v3": "abrogated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "abrogating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-01",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-02",
        "word": "acquiesce",
        "emoji": "🤝",
        "transcription": "ˌækwiˈes",
        "subtext": "acquiesce to / acquiesce in / reluctant acquiescence",
        "form": "verb",
        "definitions": [
            {
                "text": "To accept something without objecting.",
                "examples": [
                    "He acquiesced to the board's decision despite strong reservations."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acquiesced",
        "v3": "acquiesced",
        "group": "regular",
        "auxiliary": "have",
        "v4": "acquiescing",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-02",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-03",
        "word": "alienate",
        "emoji": "⛓️",
        "transcription": "ˈeɪliəneɪt",
        "subtext": "alienate someone / feel alienated / Marxist alienation",
        "form": "verb",
        "definitions": [
            {
                "text": "In Marxist theory, to separate workers from the product of their labour; more broadly, to cause estrangement.",
                "examples": [
                    "Industrial working conditions alienate workers from any sense of craft."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "alienated",
        "v3": "alienated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "alienating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-03",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-04",
        "word": "alleviate",
        "emoji": "🩹",
        "transcription": "əˈliːvieɪt",
        "subtext": "alleviate suffering / alleviate poverty / alleviate pressure",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a problem less severe.",
                "examples": [
                    "The new policy did little to alleviate the housing crisis."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "alleviated",
        "v3": "alleviated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "alleviating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-05",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-05",
        "word": "circumvent",
        "emoji": "🔄",
        "transcription": "ˌsɜːkəmˈvent",
        "subtext": "circumvent the rules / circumvent a problem / circumvent embassy",
        "form": "verb",
        "definitions": [
            {
                "text": "To find a way to avoid a rule or difficulty.",
                "examples": [
                    "She found a legal way to circumvent the bureaucratic obstacle."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "circumvented",
        "v3": "circumvented",
        "group": "regular",
        "auxiliary": "have",
        "v4": "circumventing",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-10",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-06",
        "word": "commodify",
        "emoji": "🏷️",
        "subtext": "commodify labour / commodify care / commodification of attention",
        "form": "verb",
        "transcription": "kəˈmɒdɪfaɪ",
        "definitions": [
            {
                "text": "To treat something that is not a product as a commercial commodity.",
                "examples": [
                    "The wellness industry commodifies mental health and self-care."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "commodified",
        "v3": "commodified",
        "group": "regular",
        "auxiliary": "have",
        "v4": "commodifying",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-12",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-07",
        "word": "contravene",
        "emoji": "📜",
        "transcription": "ˌkɒntrəˈviːn",
        "subtext": "contravene a law / contravene regulations / contravene an agreement",
        "form": "verb",
        "definitions": [
            {
                "text": "To act against a rule, law or agreement.",
                "examples": [
                    "The decision was found to contravene EU competition law."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contravened",
        "v3": "contravened",
        "group": "regular",
        "auxiliary": "have",
        "v4": "contravening",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-13",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-08",
        "word": "destabilise",
        "emoji": "🌪️",
        "subtext": "destabilise a regime / destabilise assumptions / deliberately destabilise",
        "form": "verb",
        "transcription": "ˌdiːˈsteɪbəlaɪz",
        "definitions": [
            {
                "text": "To undermine the stability of a system, concept or position.",
                "examples": [
                    "The argument destabilises the central premise of liberalism."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "destabilised",
        "v3": "destabilised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "destabilising",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-17",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-09",
        "word": "engender",
        "emoji": "🌱",
        "transcription": "ɪnˈdʒendə",
        "subtext": "engender trust / engender conflict / engender resentment",
        "form": "verb",
        "definitions": [
            {
                "text": "To cause or give rise to a feeling or situation.",
                "examples": [
                    "The new policy engendered considerable resentment among staff."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "engendered",
        "v3": "engendered",
        "group": "regular",
        "auxiliary": "have",
        "v4": "engendering",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-19",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-10",
        "word": "exacerbate",
        "emoji": "📈",
        "transcription": "ɪɡˈzæsəbeɪt",
        "subtext": "exacerbate a problem / exacerbate tensions / exacerbate inequality",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a problem or situation worse.",
                "examples": [
                    "The economic downturn exacerbated existing social inequalities."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exacerbated",
        "v3": "exacerbated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "exacerbating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-20",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-11",
        "word": "fetishise",
        "emoji": "🧿",
        "transcription": "ˈfetɪʃaɪz",
        "subtext": "fetishise an idea / commodity fetishism / fetishise growth",
        "form": "verb",
        "definitions": [
            {
                "text": "To have an excessive reverence for something; or in Marxist theory, to misattribute social relations to objects.",
                "examples": [
                    "Startup culture fetishises disruption as an end in itself."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fetishised",
        "v3": "fetishised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "fetishising",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-21",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-12",
        "word": "hegemonise",
        "emoji": "👑",
        "transcription": "hɪˈdʒemənaɪz",
        "subtext": "hegemonise discourse / hegemonising tendency / resist hegemonisation",
        "form": "verb",
        "definitions": [
            {
                "text": "To establish or extend dominance through cultural or ideological means.",
                "examples": [
                    "One theoretical framework has come to hegemonise the field."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hegemonised",
        "v3": "hegemonised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "hegemonising",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-22",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-13",
        "word": "impede",
        "emoji": "🛑",
        "transcription": "ɪmˈpiːd",
        "subtext": "impede progress / impede growth / impede someone from doing",
        "form": "verb",
        "definitions": [
            {
                "text": "To delay or prevent the progress of something.",
                "examples": [
                    "Excessive regulation can impede innovation in new industries."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "impeded",
        "v3": "impeded",
        "group": "regular",
        "auxiliary": "have",
        "v4": "impeding",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-24",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-14",
        "word": "instrumentalise",
        "emoji": "🛠️",
        "transcription": "ˌɪnstrəˈmentəlaɪz",
        "subtext": "instrumentalise people / instrumentalise an idea / reduce to an instrument",
        "form": "verb",
        "definitions": [
            {
                "text": "To treat something as a mere tool or means to an end.",
                "examples": [
                    "Critics argued that the policy instrumentalised workers' health."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "instrumentalised",
        "v3": "instrumentalised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "instrumentalising",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-26",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-15",
        "word": "invoke",
        "emoji": "📜",
        "subtext": "invoke a right / invoke precedent / invoke an argument",
        "form": "verb",
        "transcription": "ɪnˈvəʊk",
        "definitions": [
            {
                "text": "To call upon or cite something to support an argument.",
                "examples": [
                    "She invoked the right to free speech to defend the publication."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invoked",
        "v3": "invoked",
        "group": "regular",
        "auxiliary": "have",
        "v4": "invoking",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-27",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-16",
        "word": "militate",
        "emoji": "⚖️",
        "transcription": "ˈmɪlɪteɪt",
        "subtext": "militate against / strongly militate / militate in favour of",
        "form": "verb",
        "definitions": [
            {
                "text": "To be a powerful factor working against something.",
                "examples": [
                    "The complexity of the system militates against effective reform."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "militated",
        "v3": "militated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "militating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-30",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-17",
        "word": "mitigate",
        "emoji": "🛡️",
        "transcription": "ˈmɪtɪɡeɪt",
        "subtext": "mitigate risk / mitigate the impact / mitigate against",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a harmful effect less severe.",
                "examples": [
                    "Good communication can help mitigate the impact of change."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mitigated",
        "v3": "mitigated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "mitigating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-32",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-18",
        "word": "oblige",
        "emoji": "📜",
        "transcription": "əˈblaɪdʒ",
        "subtext": "be obliged to / oblige someone to / feel obliged",
        "form": "verb",
        "definitions": [
            {
                "text": "To require someone to do something by law or moral duty.",
                "examples": [
                    "The law obliges all employers to provide a safe working environment."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "obliged",
        "v3": "obliged",
        "group": "regular",
        "auxiliary": "have",
        "v4": "obliging",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-35",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-19",
        "word": "pervade",
        "emoji": "🌊",
        "transcription": "pəˈveɪd",
        "subtext": "pervade the organisation / be pervaded by / all-pervading",
        "form": "verb",
        "definitions": [
            {
                "text": "To spread through and be present in every part of something.",
                "examples": [
                    "A culture of overwork pervades the financial services sector."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "pervaded",
        "v3": "pervaded",
        "group": "regular",
        "auxiliary": "have",
        "v4": "pervading",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-36",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-20",
        "word": "predicate",
        "emoji": "🏗️",
        "subtext": "predicate on / predicate a claim / predicated on the assumption",
        "form": "verb",
        "transcription": "ˈpredɪkeɪt",
        "definitions": [
            {
                "text": "To base a statement or action on a particular condition; to assert.",
                "examples": [
                    "Her argument predicates a level of institutional trust that no longer exists."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "predicated",
        "v3": "predicated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "predicating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-41",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-21",
        "word": "recuperate",
        "emoji": "🧽",
        "subtext": "recuperate a movement / be recuperated by / cultural recuperation",
        "form": "verb",
        "transcription": "rɪˈkuːpəreɪt",
        "definitions": [
            {
                "text": "To absorb and neutralise subversive ideas within a dominant system.",
                "examples": [
                    "The fashion industry recuperated punk's rebellious aesthetic."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recuperated",
        "v3": "recuperated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "recuperating",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-44",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-22",
        "word": "supersede",
        "emoji": "🚀",
        "transcription": "ˌsuːpəˈsiːd",
        "subtext": "supersede a law / supersede previous guidelines / be superseded by",
        "form": "verb",
        "definitions": [
            {
                "text": "To take the place of something previously in use.",
                "examples": [
                    "The new guidelines will supersede all previous versions."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "superseded",
        "v3": "superseded",
        "group": "regular",
        "auxiliary": "have",
        "v4": "superseding",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-47",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    },
    {
        "id": "C2-VERB-SOC-23",
        "word": "valorise",
        "emoji": "🎖️",
        "transcription": "ˈvæləraɪz",
        "subtext": "valorise labour / valorise a concept / be valorised by culture",
        "form": "verb",
        "definitions": [
            {
                "text": "To attribute value to something, especially in a cultural or ideological sense.",
                "examples": [
                    "Modern culture valorises productivity at the expense of rest."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "valorised",
        "v3": "valorised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "valorising",
        "lang": "en",
        "level": "proficiency",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "C2-SOC-51",
        "level_code": "C2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "Social_Relations_Sociology"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

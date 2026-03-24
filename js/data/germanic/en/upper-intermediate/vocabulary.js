(function() {
    const data = [
    {
        "word": "lawyer",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "lawyers",
        "definitions": [
            {
                "text": "A person who gives advice about the law and represents people in court.",
                "examples": [
                    "I need to talk to my lawyer.",
                    "The lawyer is in the courtroom."
                ]
            }
        ]
    },
    {
        "word": "police officer",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "👮",
        "form": "noun",
        "plural": "police officers",
        "definitions": [
            {
                "text": "A person whose job is to keep public order and safety.",
                "examples": [
                    "The police officer is directing traffic."
                ]
            }
        ]
    },
    {
        "word": "accountability",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "📑",
        "form": "noun",
        "plural": null,
        "subtext": "public accountability, lack of accountability",
        "definitions": [
            {
                "text": "The fact of being responsible and having to explain your actions.",
                "examples": [
                    "There is little accountability in that organisation.",
                    "We need more accountability for these decisions."
                ]
            }
        ]
    },
    {
        "word": "incentive",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "🥕",
        "form": "noun",
        "plural": "incentives",
        "subtext": "financial incentive, tax incentive",
        "definitions": [
            {
                "text": "Something that motivates a person to take a particular action.",
                "examples": [
                    "Financial incentives can improve productivity.",
                    "The government offers incentives for green energy."
                ]
            }
        ]
    },
    {
        "word": "autonomy",
        "level": "upper-intermediate",
        "theme": "employment_law_rights_B2",
        "emoji": "🔓",
        "form": "noun",
        "plural": null,
        "subtext": "worker autonomy, high degree of autonomy",
        "opposite": "dependence",
        "definitions": [
            {
                "text": "The right or ability to act independently.",
                "examples": [
                    "Employees perform better when they have autonomy.",
                    "The region was granted more autonomy."
                ]
            }
        ]
    },
    {
        "word": "precarity",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "🧗",
        "form": "noun",
        "plural": null,
        "subtext": "job precarity, social precarity",
        "opposite": "stability",
        "definitions": [
            {
                "text": "An insecure and uncertain state of employment or living conditions.",
                "examples": [
                    "The gig economy has increased job precarity.",
                    "They live in a state of financial precarity."
                ]
            }
        ]
    },
    {
        "word": "pay gap",
        "level": "upper-intermediate",
        "theme": "gender_equality_B2",
        "emoji": "⚖️📉",
        "form": "noun phrase",
        "plural": "pay gaps",
        "subtext": "gender pay gap, close the pay gap",
        "definitions": [
            {
                "text": "A difference in average earnings between groups, especially men and women.",
                "examples": [
                    "The gender pay gap remains significant in many sectors.",
                    "They are fighting to end the pay gap."
                ]
            }
        ]
    },
    {
        "word": "redundancy package",
        "level": "upper-intermediate",
        "theme": "employment_law_rights_B2",
        "emoji": "📦",
        "form": "noun phrase",
        "plural": "redundancy packages",
        "subtext": "severance pay, redundancy deal",
        "definitions": [
            {
                "text": "The money and benefits given when someone loses their job.",
                "examples": [
                    "She received a generous redundancy package.",
                    "The company offered a voluntary redundancy package."
                ]
            }
        ]
    },
    {
        "word": "entrepreneurship",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "💡",
        "form": "noun",
        "plural": null,
        "subtext": "social entrepreneurship, startup culture",
        "definitions": [
            {
                "text": "The activity of setting up and running a business.",
                "examples": [
                    "Entrepreneurship requires risk-taking and creativity.",
                    "Courses in entrepreneurship are very popular."
                ]
            }
        ]
    },
    {
        "word": "productivity",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "⚡",
        "form": "noun",
        "plural": null,
        "subtext": "increase productivity, level of productivity",
        "definitions": [
            {
                "text": "The rate at which goods are produced or work is completed.",
                "examples": [
                    "Remote work can increase productivity for some people.",
                    "Low productivity is a problem for the economy."
                ]
            }
        ]
    },
    {
        "word": "outsourcing",
        "level": "upper-intermediate",
        "theme": "globalisation_trade_B2",
        "emoji": "🌐",
        "form": "noun",
        "plural": null,
        "subtext": "offshore outsourcing, business process outsourcing",
        "definitions": [
            {
                "text": "Hiring an external company to do work previously done internally.",
                "examples": [
                    "They are outsourcing customer service to reduce costs.",
                    "Outsourcing has led to job losses in the local area."
                ]
            }
        ]
    },
    {
        "word": "automation",
        "level": "upper-intermediate",
        "theme": "applied_sciences_engineering_B2",
        "emoji": "🤖",
        "form": "noun",
        "plural": null,
        "subtext": "industrial automation, job automation",
        "definitions": [
            {
                "text": "The use of machines or computers to do work previously done by people.",
                "examples": [
                    "Automation is changing the job market significantly.",
                    "The factory has invested in full automation."
                ]
            }
        ]
    },
    {
        "word": "gentrification",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "emoji": "🏘️📈",
        "form": "noun",
        "plural": null,
        "subtext": "urban gentrification, neighborhood gentrification",
        "definitions": [
            {
                "text": "The process of improving an area so that wealthier people move in, displacing poorer residents.",
                "examples": [
                    "Gentrification has changed the character of the neighbourhood.",
                    "The local community is worried about gentrification."
                ]
            }
        ]
    },
    {
        "word": "affordable housing",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "emoji": "🏠💰",
        "form": "noun phrase",
        "plural": null,
        "subtext": "social housing, lack of affordable housing",
        "definitions": [
            {
                "text": "Housing that is cheap enough for people on low incomes to rent or buy.",
                "examples": [
                    "The city needs more affordable housing.",
                    "There is a long waiting list for affordable housing."
                ]
            }
        ]
    },
    {
        "word": "urban sprawl",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "emoji": "🏙️↔️",
        "form": "noun phrase",
        "plural": null,
        "subtext": "uncontrolled growth, city sprawl",
        "definitions": [
            {
                "text": "The uncontrolled spread of cities into surrounding areas.",
                "examples": [
                    "Urban sprawl increases car dependency.",
                    "New laws aim to limit urban sprawl."
                ]
            }
        ]
    },
    {
        "word": "infrastructure",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🏗️",
        "form": "noun",
        "plural": "infrastructures",
        "subtext": "transport infrastructure, aging infrastructure",
        "definitions": [
            {
                "text": "The basic physical systems of a country, such as roads and utilities.",
                "examples": [
                    "The city's infrastructure needs investment.",
                    "The earthquake damaged the regional infrastructure."
                ]
            }
        ]
    },
    {
        "word": "welfare state",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🛡️🏛️",
        "form": "noun phrase",
        "plural": "welfare states",
        "subtext": "social security, welfare benefits",
        "definitions": [
            {
                "text": "A system in which the government provides social protection for citizens.",
                "examples": [
                    "The welfare state provides healthcare and pensions.",
                    "Funding for the welfare state is a major political issue."
                ]
            }
        ]
    },
    {
        "word": "polarisation",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "↔️❌",
        "form": "noun",
        "plural": null,
        "subtext": "political polarisation, social polarisation",
        "definitions": [
            {
                "text": "The division of people into opposing groups with very different views.",
                "examples": [
                    "Social media has increased political polarisation.",
                    "We need to find common ground to overcome this polarisation."
                ]
            }
        ]
    },
    {
        "word": "discourse",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "discourses",
        "subtext": "public discourse, political discourse",
        "definitions": [
            {
                "text": "Written or spoken communication on a particular topic.",
                "examples": [
                    "The public discourse around immigration is very heated.",
                    "He is an expert in academic discourse."
                ]
            }
        ]
    },
    {
        "word": "scrutiny",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🔍",
        "form": "noun",
        "plural": null,
        "subtext": "close scrutiny, under scrutiny",
        "definitions": [
            {
                "text": "Close and careful examination of someone or something.",
                "examples": [
                    "The government's decision is under scrutiny.",
                    "His private life was subject to intense media scrutiny."
                ]
            }
        ]
    },
    {
        "word": "consensus",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🤝",
        "form": "noun",
        "plural": "consensuses",
        "subtext": "reach a consensus, general consensus",
        "definitions": [
            {
                "text": "General agreement among a group of people.",
                "examples": [
                    "There is a growing consensus on climate action.",
                    "It was difficult to reach a consensus."
                ]
            }
        ]
    },
    {
        "word": "legislation",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "📜",
        "form": "noun",
        "plural": null,
        "subtext": "pass legislation, proposed legislation",
        "definitions": [
            {
                "text": "Laws made by a government.",
                "examples": [
                    "New legislation on data privacy came into force.",
                    "The government is planning new legislation to curb pollution."
                ]
            }
        ]
    },
    {
        "word": "bias",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "⚖️❌",
        "form": "noun",
        "plural": "biases",
        "subtext": "unconscious bias, media bias",
        "opposite": "impartiality",
        "definitions": [
            {
                "text": "An unfair tendency to favour or oppose someone or something.",
                "examples": [
                    "Unconscious bias can affect hiring decisions.",
                    "He accused the reporter of bias."
                ]
            }
        ]
    },
    {
        "word": "obesity",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "emoji": "⚖️⬆️",
        "form": "noun",
        "plural": null,
        "subtext": "childhood obesity, obesity epidemic",
        "definitions": [
            {
                "text": "The condition of being excessively overweight to a degree that harms health.",
                "examples": [
                    "Obesity rates have risen sharply in recent decades.",
                    "The government is launching a campaign to tackle obesity."
                ]
            }
        ]
    },
    {
        "word": "life expectancy",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "emoji": "⏳👴",
        "form": "noun phrase",
        "plural": "life expectancies",
        "subtext": "average life expectancy, increase life expectancy",
        "definitions": [
            {
                "text": "The average number of years a person is expected to live.",
                "examples": [
                    "Life expectancy has increased in most countries.",
                    "There are big differences in life expectancy between social groups."
                ]
            }
        ]
    },
    {
        "word": "justice",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "⚖️",
        "form": "noun",
        "plural": null,
        "subtext": "social justice, justice system",
        "opposite": "injustice",
        "definitions": [
            {
                "text": "Fair treatment and the quality of being just.",
                "examples": [
                    "The justice system should protect all citizens.",
                    "They are marching for social justice."
                ]
            }
        ]
    },
    {
        "word": "rehabilitation",
        "level": "upper-intermediate",
        "theme": "crime_punishment_B2",
        "emoji": "🔄🏢",
        "form": "noun",
        "plural": null,
        "subtext": "prison rehabilitation, medical rehabilitation",
        "definitions": [
            {
                "text": "The process of helping someone return to a normal life after a crime or illness.",
                "examples": [
                    "Prison should focus on rehabilitation.",
                    "He is undergoing rehabilitation after his injury."
                ]
            }
        ]
    },
    {
        "word": "transparency",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🪟",
        "form": "noun",
        "plural": null,
        "subtext": "greater transparency, demand transparency",
        "opposite": "opacity",
        "definitions": [
            {
                "text": "Being open and honest about actions and decisions.",
                "examples": [
                    "The public demands greater transparency from politicians.",
                    "We need more transparency in the banking system."
                ]
            }
        ]
    },
    {
        "word": "algorithm",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "emoji": "💻",
        "form": "noun",
        "plural": "algorithms",
        "subtext": "computer algorithm, social media algorithm",
        "definitions": [
            {
                "text": "A set of rules followed by a computer to solve a problem.",
                "examples": [
                    "Social media algorithms determine what you see.",
                    "The search engine uses a complex algorithm."
                ]
            }
        ]
    },
    {
        "word": "data privacy",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "emoji": "🔒",
        "form": "noun phrase",
        "plural": null,
        "subtext": "data protection, privacy laws",
        "definitions": [
            {
                "text": "The right to control how personal information is collected and used.",
                "examples": [
                    "Data privacy laws are getting stricter.",
                    "People are increasingly concerned about data privacy."
                ]
            }
        ]
    },
    {
        "word": "misinformation",
        "level": "upper-intermediate",
        "theme": "media_misinformation_B2",
        "emoji": "🤥",
        "form": "noun",
        "plural": null,
        "subtext": "spread misinformation, fake news",
        "definitions": [
            {
                "text": "False or inaccurate information spread widely.",
                "examples": [
                    "Social media can spread misinformation quickly.",
                    "We need to combat the spread of misinformation."
                ]
            }
        ]
    },
    {
        "word": "surveillance",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "emoji": "📹",
        "form": "noun",
        "plural": null,
        "subtext": "mass surveillance, urban surveillance",
        "definitions": [
            {
                "text": "Close observation of a person or group by authorities.",
                "examples": [
                    "CCTV is a form of urban surveillance.",
                    "The suspects were under police surveillance."
                ]
            }
        ]
    },
    {
        "word": "whereas",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "⚖️",
        "form": "conjunction",
        "definitions": [
            {
                "text": "In contrast to the fact that; while on the contrary.",
                "examples": [
                    "Cities are expensive, whereas small towns are affordable.",
                    "He is very quiet, whereas his brother is very loud."
                ]
            }
        ]
    },
    {
        "word": "nevertheless",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🏃‍♂️",
        "form": "adverb",
        "subtext": "nonetheless, even so",
        "definitions": [
            {
                "text": "In spite of that; notwithstanding.",
                "examples": [
                    "It is a difficult task. Nevertheless, we must try.",
                    "The weather was bad; nevertheless, we went for a walk."
                ]
            }
        ]
    },
    {
        "word": "to what extent",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "📏",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to ask or discuss how much or how far something is true.",
                "examples": [
                    "To what extent does education determine success?",
                    "To what extent are we responsible for this situation?"
                ]
            }
        ]
    },
    {
        "word": "by contrast",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🌓",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to show a difference between two things.",
                "examples": [
                    "Sweden has long parental leave. By contrast, the US has very little.",
                    "The first half was exciting. By contrast, the second half was dull."
                ]
            }
        ]
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

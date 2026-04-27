(function() {
    const data = [
    {
        "word": "garden",
        "image": "images/vocabulary/places/garden.png",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🌳",
        "form": "noun",
        "definitions": [{ "text": "A public garden or large green area in a city for everyone to use.", "examples": [] }],
        "countability": "countable"
    },
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
        "word": "gender pay gap",
        "level": "upper-intermediate",
        "theme": "gender_equality_B2",
        "emoji": "⚖️📉",
        "form": "noun phrase",
        "plural": "gender pay gaps",
        "transcription": "ˈdʒɛndə peɪ ɡæp",
        "subtext": "close the pay gap, pay inequality",
        "definitions": [
            {
                "text": "The average difference in earnings between men and women.",
                "examples": [
                    "The gender pay gap persists across most industries.",
                    "They are fighting to close the gender pay gap."
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
        "word": "implicit bias",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "⚖️❌",
        "form": "noun phrase",
        "plural": "implicit biases",
        "transcription": "ɪmˈplɪsɪt ˈbaɪəs",
        "subtext": "unconscious bias, cognitive bias",
        "definitions": [
            {
                "text": "An unconscious attitude or stereotype that influences behaviour.",
                "examples": [
                    "Implicit bias in recruitment can affect hiring decisions.",
                    "Training can help employees recognise their implicit bias."
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
        "subtext": "",
        "synonyms": ["nonetheless", "even so"],
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
    },
{
        "word": "gig economy",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "💼",
        "form": "noun phrase",
        "plural": null,
        "transcription": "🇬🇧 ˈɡɪɡ ɪˌkɒnəmi | 🇺🇸 ˈɡɪɡ ɪˌkɑːnəmi",
        "subtext": "freelance work, flexible working",
        "definitions": [
            {
                "text": "A labour market based on short-term contracts and freelance work rather than permanent jobs.",
                "examples": [
                    "The gig economy offers flexibility but little security."
                ]
            }
        ]
    },
{
        "word": "labour market",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "🤝",
        "form": "noun",
        "plural": "labour markets",
        "transcription": "ˈleɪbə ˈmɑːkɪt",
        "subtext": "job market, workforce",
        "definitions": [
            {
                "text": "The system in which employers and workers negotiate employment and wages.",
                "examples": [
                    "The pandemic fundamentally disrupted the labour market."
                ]
            }
        ]
    },
{
        "word": "pay transparency",
        "level": "upper-intermediate",
        "theme": "employment_law_rights_B2",
        "emoji": "🪟",
        "form": "noun phrase",
        "plural": null,
        "transcription": "peɪ trænˈspærənsi",
        "subtext": "salary disclosure, pay equality",
        "definitions": [
            {
                "text": "The practice of openly sharing information about employee salaries.",
                "examples": [
                    "Pay transparency can reduce the gender pay gap."
                ]
            }
        ]
    },
{
        "word": "austerity",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "📉",
        "form": "noun",
        "plural": null,
        "transcription": "ɔːˈstɛrɪti",
        "subtext": "spending cuts, fiscal policy",
        "definitions": [
            {
                "text": "Government policy of reducing public spending to cut debt.",
                "examples": [
                    "Years of austerity weakened public services."
                ]
            }
        ]
    },
{
        "word": "GDP",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "📈",
        "form": "noun",
        "plural": null,
        "transcription": "ˌdʒiːdiːˈpiː",
        "subtext": "economic output, Gross Domestic Product",
        "definitions": [
            {
                "text": "Gross Domestic Product — the total value of goods and services produced in a country.",
                "examples": [
                    "GDP growth slowed significantly last quarter."
                ]
            }
        ]
    },
{
        "word": "inflation",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "💸",
        "form": "noun",
        "plural": null,
        "transcription": "ɪnˈfleɪʃn",
        "subtext": "rising prices, cost of living",
        "definitions": [
            {
                "text": "The rate at which the general level of prices rises over time.",
                "examples": [
                    "High inflation reduced the real value of wages."
                ]
            }
        ]
    },
{
        "word": "democracy",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🗳️",
        "form": "noun",
        "plural": "democracies",
        "transcription": "🇬🇧 dɪˈmɒkrəsi | 🇺🇸 dɪˈmɑːkrəsi",
        "subtext": "democratic system, voting",
        "definitions": [
            {
                "text": "A system of government in which citizens vote for their leaders.",
                "examples": [
                    "Democracy depends on an informed electorate."
                ]
            }
        ]
    },
{
        "word": "regulation",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "📜",
        "form": "noun",
        "plural": "regulations",
        "transcription": "ˌrɛɡjuˈleɪʃn",
        "subtext": "official rules, compliance",
        "definitions": [
            {
                "text": "An official rule or law controlling an activity.",
                "examples": [
                    "Financial regulation was tightened after the crisis."
                ]
            }
        ]
    },
{
        "word": "civil liberties",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🗽",
        "form": "noun phrase",
        "plural": "civil liberties",
        "transcription": "ˌsɪvl ˈlɪbətiz",
        "subtext": "human rights, basic freedoms",
        "definitions": [
            {
                "text": "The basic rights and freedoms guaranteed to citizens by law.",
                "examples": [
                    "The new surveillance law threatens civil liberties."
                ]
            }
        ]
    },
{
        "word": "electorate",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🗳️",
        "form": "noun",
        "plural": "electorates",
        "transcription": "ɪˈlɛktərət",
        "subtext": "voters, voting population",
        "definitions": [
            {
                "text": "All the people in a country who are entitled to vote.",
                "examples": [
                    "The electorate rejected the proposed reforms."
                ]
            }
        ]
    },
{
        "word": "lobbying",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🤝",
        "form": "noun",
        "plural": null,
        "transcription": "🇬🇧 ˈlɒbiɪŋ | 🇺🇸 ˈlɑːbiɪŋ",
        "subtext": "political influence, advocacy",
        "definitions": [
            {
                "text": "The activity of trying to influence politicians on behalf of a particular group.",
                "examples": [
                    "Pharmaceutical lobbying shapes healthcare policy."
                ]
            }
        ]
    },
{
        "word": "preventive medicine",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "emoji": "🛡️💊",
        "form": "noun phrase",
        "plural": null,
        "transcription": "prɪˈvɛntɪv ˈmɛdsn",
        "subtext": "preventative care, public health",
        "definitions": [
            {
                "text": "Medical measures taken to prevent diseases rather than curing them.",
                "examples": [
                    "Investment in preventive medicine can save lives and reduce costs."
                ]
            }
        ]
    },
{
        "word": "parental leave",
        "level": "upper-intermediate",
        "theme": "gender_equality_B2",
        "emoji": "👶",
        "form": "noun phrase",
        "plural": null,
        "transcription": "pəˈrɛntl liːv",
        "subtext": "maternity leave, paternity leave",
        "definitions": [
            {
                "text": "Time off work given to a parent after the birth of a child.",
                "examples": [
                    "Equal parental leave is essential for true gender equality."
                ]
            }
        ]
    },
{
        "word": "discrimination",
        "level": "upper-intermediate",
        "theme": "gender_equality_B2",
        "emoji": "🚫",
        "form": "noun",
        "plural": null,
        "transcription": "dɪˌskrɪmɪˈneɪʃn",
        "subtext": "unfair treatment, prejudice",
        "definitions": [
            {
                "text": "Unfair treatment of a person based on their identity or background.",
                "examples": [
                    "Age discrimination in hiring is illegal in most countries."
                ]
            }
        ]
    },
{
        "word": "diversity",
        "level": "upper-intermediate",
        "theme": "gender_equality_B2",
        "emoji": "🌍",
        "form": "noun",
        "plural": null,
        "transcription": "daɪˈvɜːsəti",
        "subtext": "inclusion, variety",
        "definitions": [
            {
                "text": "The presence of a wide range of different people in a group.",
                "examples": [
                    "The company has invested in diversity and inclusion initiatives."
                ]
            }
        ]
    },
{
        "word": "representation",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "👥",
        "form": "noun",
        "plural": null,
        "transcription": "ˌrɛprɪzɛnˈteɪʃn",
        "subtext": "proportional representation, political voice",
        "definitions": [
            {
                "text": "The presence of people from different groups in positions of power.",
                "examples": [
                    "Better representation in leadership improves decision-making."
                ]
            }
        ]
    },
{
        "word": "urban planning",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "emoji": "🏗️",
        "form": "noun phrase",
        "plural": null,
        "transcription": "ˈɜːbən ˈplænɪŋ",
        "subtext": "city development, land use",
        "definitions": [
            {
                "text": "The design and regulation of land use and development in cities.",
                "examples": [
                    "Better urban planning could reduce traffic congestion significantly."
                ]
            }
        ]
    },
{
        "word": "commuter belt",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "emoji": "🚆",
        "form": "noun phrase",
        "plural": "commuter belts",
        "transcription": "kəˈmjuːtə bɛlt",
        "subtext": "suburban area, travel to work",
        "definitions": [
            {
                "text": "The area around a city from which people travel in to work.",
                "examples": [
                    "House prices in the commuter belt have risen sharply."
                ]
            }
        ]
    },
{
        "word": "universal healthcare",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "emoji": "🏥",
        "form": "noun phrase",
        "plural": null,
        "transcription": "🇬🇧 ˌjuːnɪˈvɜːsl ˈhɛlθkeə | 🇺🇸 ˌjuːnɪˈvɜːsl ˈhɛlθkeər",
        "subtext": "public healthcare, health coverage",
        "definitions": [
            {
                "text": "A system providing medical care to all citizens regardless of ability to pay.",
                "examples": [
                    "Most European countries have some form of universal healthcare."
                ]
            }
        ]
    },
{
        "word": "privatisation",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "emoji": "🏢",
        "form": "noun",
        "plural": null,
        "transcription": "ˌpraɪvətaɪˈzeɪʃn",
        "subtext": "private ownership, deregulation",
        "definitions": [
            {
                "text": "The transfer of services from public to private ownership.",
                "examples": [
                    "The privatisation of water has been controversial."
                ]
            }
        ]
    },
{
        "word": "waiting list",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "emoji": "⏳",
        "form": "noun phrase",
        "plural": "waiting lists",
        "transcription": "ˈweɪtɪŋ lɪst",
        "subtext": "queue for treatment, delayed service",
        "definitions": [
            {
                "text": "A list of people waiting to receive treatment or a service.",
                "examples": [
                    "The waiting list for the specialist is eighteen months."
                ]
            }
        ]
    },
{
        "word": "data",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "emoji": "📊",
        "form": "noun",
        "plural": "data",
        "transcription": "ˈdeɪtə",
        "subtext": "information, statistics",
        "definitions": [
            {
                "text": "Information stored and processed by computers.",
                "examples": [
                    "Companies collect enormous amounts of personal data."
                ]
            }
        ]
    },
{
        "word": "disinformation",
        "level": "upper-intermediate",
        "theme": "media_misinformation_B2",
        "emoji": "🤥",
        "form": "noun",
        "plural": null,
        "transcription": "ˌdɪsɪnfəˈmeɪʃn",
        "subtext": "deliberate lies, propaganda",
        "definitions": [
            {
                "text": "False information deliberately spread to mislead.",
                "examples": [
                    "State actors have used disinformation campaigns in elections."
                ]
            }
        ]
    },
{
        "word": "artificial intelligence",
        "level": "upper-intermediate",
        "theme": "applied_sciences_engineering_B2",
        "emoji": "🤖",
        "form": "noun phrase",
        "plural": null,
        "transcription": "ˌɑːtɪˈfɪʃl ɪnˈtɛlɪdʒəns",
        "subtext": "AI, machine learning",
        "definitions": [
            {
                "text": "Computer systems that perform tasks normally requiring human intelligence.",
                "examples": [
                    "Artificial intelligence is transforming many professional fields."
                ]
            }
        ]
    },
{
        "word": "cybersecurity",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "emoji": "🛡️",
        "form": "noun",
        "plural": null,
        "transcription": "ˌsaɪbə sɪˈkjʊərɪti",
        "subtext": "online protection, network security",
        "definitions": [
            {
                "text": "The protection of computer systems and networks from attack.",
                "examples": [
                    "Cybersecurity has become a top priority for businesses."
                ]
            }
        ]
    },
{
        "word": "whistleblower",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "📢",
        "form": "noun",
        "plural": "whistleblowers",
        "transcription": "🇬🇧 ˈwɪslbləʊə | 🇺🇸 ˈwɪslbloʊər",
        "subtext": "exposing wrongdoing, informant",
        "definitions": [
            {
                "text": "A person who reveals wrongdoing within an organisation.",
                "examples": [
                    "The whistleblower exposed widespread fraud in the company."
                ]
            }
        ]
    },
{
        "word": "consent",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "emoji": "✅",
        "form": "noun",
        "plural": null,
        "transcription": "kənˈsɛnt",
        "subtext": "permission, agreement",
        "definitions": [
            {
                "text": "Permission freely given for something to happen.",
                "examples": [
                    "Informed consent is fundamental to medical ethics."
                ]
            }
        ]
    },
{
        "word": "integrity",
        "level": "upper-intermediate",
        "theme": "identity_self_concept_B2",
        "emoji": "💎",
        "form": "noun",
        "plural": null,
        "transcription": "ɪnˈtɛɡrəti",
        "subtext": "honesty, strong principles",
        "definitions": [
            {
                "text": "The quality of being honest and having strong moral principles.",
                "examples": [
                    "She is known for her absolute integrity."
                ]
            }
        ]
    },
{
        "word": "perspective",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "👁️",
        "form": "noun",
        "plural": "perspectives",
        "transcription": "pəˈspɛktɪv",
        "subtext": "viewpoint, standpoint",
        "definitions": [
            {
                "text": "A particular way of thinking about or viewing a situation.",
                "examples": [
                    "From a financial perspective, the decision makes sense."
                ]
            }
        ]
    },
{
        "word": "implication",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "💡",
        "form": "noun",
        "plural": "implications",
        "transcription": "ˌɪmplɪˈkeɪʃn",
        "subtext": "consequence, suggestion",
        "definitions": [
            {
                "text": "A conclusion that can be drawn from something; an indirect suggestion.",
                "examples": [
                    "The implications of this policy are not yet clear."
                ]
            }
        ]
    },
{
        "word": "framework",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🏗️",
        "form": "noun",
        "plural": "frameworks",
        "transcription": "ˈfreɪmwɜːk",
        "subtext": "structure, set of principles",
        "definitions": [
            {
                "text": "A set of ideas or principles used to analyse or understand something.",
                "examples": [
                    "He analysed the problem using an economic framework."
                ]
            }
        ]
    },
{
        "word": "assumption",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🤔",
        "form": "noun",
        "plural": "assumptions",
        "transcription": "əˈsʌmpʃn",
        "subtext": "presumption, belief",
        "definitions": [
            {
                "text": "Something accepted as true without direct proof.",
                "examples": [
                    "Her argument rests on several questionable assumptions."
                ]
            }
        ]
    },
{
        "word": "critique",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "✍️",
        "form": "noun",
        "plural": "critiques",
        "transcription": "krɪˈtiːk",
        "subtext": "detailed assessment, review",
        "definitions": [
            {
                "text": "A detailed analysis and assessment of something.",
                "examples": [
                    "The report offers a sharp critique of current housing policy."
                ]
            }
        ]
    },
{
        "word": "paradox",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🧩",
        "form": "noun",
        "plural": "paradoxes",
        "transcription": "🇬🇧 ˈpærədɒks | 🇺🇸 ˈpærədɑːks",
        "subtext": "contradiction, puzzle",
        "definitions": [
            {
                "text": "A seemingly contradictory statement or situation that may nonetheless be true.",
                "examples": [
                    "It is a paradox that working more can make you less productive."
                ]
            }
        ]
    },
{
        "word": "nuance",
        "level": "upper-intermediate",
        "theme": "critical_thinking_B2",
        "emoji": "🌓",
        "form": "noun",
        "plural": "nuances",
        "transcription": "ˈnjuːɑːns",
        "subtext": "subtle difference, shade of meaning",
        "definitions": [
            {
                "text": "A subtle difference in meaning, expression or feeling.",
                "examples": [
                    "Any serious discussion of immigration requires nuance."
                ]
            }
        ]
    },
{
        "word": "veto",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🚫",
        "form": "noun",
        "plural": "vetoes",
        "transcription": "🇬🇧 ˈviːtəʊ | 🇺🇸 ˈviːtoʊ",
        "subtext": "power to reject, exercise a veto",
        "definitions": [
            {
                "text": "The right to reject a decision, or to use this right.",
                "examples": [
                    "The president has the power to veto legislation."
                ]
            }
        ]
    },
{}
];
})();

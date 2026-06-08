// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_intermediate_social_027",
        "word": "thin",
        "form": "adjective",
        "transcription": "θɪn",
        "subtext": "paper thin / exceptionally thin / growing thin",
        "definitions": [
            {
                "text": "thin",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_environment_007",
        "word": "stormy",
        "emoji": "⛈️",
        "form": "adjective",
        "transcription": "ˈstɔːmi",
        "subtext": "stormy weather / a stormy relationship / stormy skies",
        "definitions": [
            {
                "text": "stormy",
                "examples": []
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_025",
        "word": "self-employed",
        "emoji": "🧑‍💻",
        "form": "adjective",
        "transcription": "ˌsɛlf ɪmˈplɔɪd",
        "subtext": "freelance, work for yourself",
        "opposite": "employed",
        "definitions": [
            {
                "text": "Working for yourself rather than for a company.",
                "examples": [
                    "She is self-employed as a graphic designer.",
                    "Being self-employed gives you more freedom.",
                    "She has been self-employed for five years."
                ]
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_026",
        "word": "freelance",
        "emoji": "🧑‍💻",
        "form": "adjective / adverb",
        "transcription": "ˈfriːlɑːns",
        "subtext": "work freelance, freelance journalist",
        "definitions": [
            {
                "text": "Working independently for different clients rather than one employer.",
                "examples": [
                    "He works freelance as a web developer."
                ]
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_environment_008",
        "word": "sustainable",
        "emoji": "♻️",
        "form": "adjective",
        "transcription": "səˈsteɪnəbl",
        "subtext": "sustainable development, eco-friendly",
        "definitions": [
            {
                "text": "Using resources in a way that does not damage the environment for the future.",
                "examples": [
                    "We need more sustainable ways of living.",
                    "This wood comes from a sustainable source.",
                    "The company is committed to sustainable practices."
                ]
            }
        ],
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_001",
        "word": "anxious",
        "form": "adjective",
        "transcription": "ˈæŋkʃəs",
        "definitions": [
            {
                "text": "Feeling worried and nervous about something uncertain.",
                "examples": [
                    "She feels anxious before every major performance review."
                ]
            }
        ],
        "subtext": "feel anxious / very anxious / anxious about",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_002",
        "word": "disappointed",
        "form": "adjective",
        "transcription": "ˌdɪsəˈpɔɪntɪd",
        "definitions": [
            {
                "text": "Feeling sad because something was not as expected.",
                "examples": [
                    "He was deeply disappointed not to be shortlisted."
                ]
            }
        ],
        "subtext": "feel disappointed / bitterly disappointed / disappointed with",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_003",
        "word": "embarrassed",
        "form": "adjective",
        "transcription": "ɪmˈbærəst",
        "definitions": [
            {
                "text": "Feeling ashamed or self-conscious.",
                "examples": [
                    "She felt embarrassed about the mistake in the report."
                ]
            }
        ],
        "subtext": "feel embarrassed / deeply embarrassed / easily embarrassed",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_027",
        "word": "enthusiastic",
        "form": "adjective",
        "transcription": "ɪnˌθjuːziˈæstɪk",
        "definitions": [
            {
                "text": "Feeling or showing great interest and excitement.",
                "examples": [
                    "He is enthusiastic about the new project direction."
                ]
            }
        ],
        "subtext": "very enthusiastic / enthusiastic about / hugely enthusiastic",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_004",
        "word": "frustrated",
        "form": "adjective",
        "transcription": "frʌˈstreɪtɪd",
        "definitions": [
            {
                "text": "Feeling annoyed because you cannot do what you want.",
                "examples": [
                    "She feels frustrated by the slow decision-making process."
                ]
            }
        ],
        "subtext": "feel frustrated / very frustrated / deeply frustrated",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_values_beliefs_001",
        "word": "grateful",
        "form": "adjective",
        "transcription": "ˈɡreɪtfl",
        "definitions": [
            {
                "text": "Feeling or showing thanks for kindness received.",
                "examples": [
                    "He is very grateful for the support during his illness."
                ]
            }
        ],
        "subtext": "very grateful / deeply grateful / grateful for",
        "lang": "en",
        "level": "intermediate",
        "theme": "values_beliefs",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_005",
        "word": "jealous",
        "form": "adjective",
        "transcription": "ˈdʒɛləs",
        "definitions": [
            {
                "text": "Feeling unhappy because someone has something you want.",
                "examples": [
                    "She was jealous of her colleague's promotion."
                ]
            }
        ],
        "subtext": "feel jealous / very jealous / jealous of",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_012",
        "word": "lonely",
        "form": "adjective",
        "transcription": "🇬🇧 ˈləʊnli | 🇺🇸 ˈloʊnli",
        "definitions": [
            {
                "text": "Feeling unhappy because you are without company.",
                "examples": [
                    "He felt lonely when he first moved to a new city."
                ]
            }
        ],
        "subtext": "feel lonely / very lonely / desperately lonely",
        "lang": "en",
        "level": "intermediate",
        "theme": "mental_health_wellbeing",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_006",
        "word": "miserable",
        "form": "adjective",
        "transcription": "ˈmɪzrəbl",
        "definitions": [
            {
                "text": "Feeling very unhappy and without hope.",
                "examples": [
                    "The constant commute made her feel miserable."
                ]
            }
        ],
        "subtext": "feel miserable / absolutely miserable / make someone miserable",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_007",
        "word": "nervous",
        "form": "adjective",
        "transcription": "ˈnɜːvəs",
        "definitions": [
            {
                "text": "Feeling worried about something upcoming.",
                "examples": [
                    "She was very nervous on her first day in the new role."
                ]
            }
        ],
        "subtext": "feel nervous / terribly nervous / nervous about",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_008",
        "word": "relieved",
        "form": "adjective",
        "transcription": "rɪˈliːvd",
        "definitions": [
            {
                "text": "Feeling happy that something bad did not happen.",
                "examples": [
                    "He was relieved when the project was finally delivered."
                ]
            }
        ],
        "subtext": "feel relieved / greatly relieved / relieved to hear",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_009",
        "word": "shocked",
        "form": "adjective",
        "transcription": "🇬🇧 ʃɒkt | 🇺🇸 ʃɑːkt",
        "definitions": [
            {
                "text": "Feeling very surprised and upset.",
                "examples": [
                    "She was shocked by the news of the redundancies."
                ]
            }
        ],
        "subtext": "feel shocked / absolutely shocked / shocked by",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_028",
        "word": "ambitious",
        "form": "adjective",
        "transcription": "æmˈbɪʃəs",
        "definitions": [
            {
                "text": "Having a strong desire to succeed.",
                "examples": [
                    "She is highly ambitious and plans to be a director."
                ]
            }
        ],
        "subtext": "very ambitious / hugely ambitious / fiercely ambitious",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_values_beliefs_002",
        "word": "brave",
        "form": "adjective",
        "transcription": "breɪv",
        "definitions": [
            {
                "text": "Willing to face danger or difficulty.",
                "examples": [
                    "It was brave of him to challenge the board's decision."
                ]
            }
        ],
        "subtext": "very brave / incredibly brave / a brave decision",
        "lang": "en",
        "level": "intermediate",
        "theme": "values_beliefs",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_010",
        "word": "calm",
        "form": "adjective",
        "transcription": "kɑːm",
        "definitions": [
            {
                "text": "Not showing nervousness; peaceful.",
                "examples": [
                    "She remains calm even in very stressful situations."
                ]
            }
        ],
        "subtext": "stay calm / very calm / keep calm",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_013",
        "word": "cheerful",
        "form": "adjective",
        "transcription": "ˈtʃɪəfl",
        "definitions": [
            {
                "text": "Feeling or showing happiness.",
                "examples": [
                    "He is always cheerful, which lifts team morale."
                ]
            }
        ],
        "subtext": "very cheerful / naturally cheerful / cheerful attitude",
        "lang": "en",
        "level": "intermediate",
        "theme": "mental_health_wellbeing",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_029",
        "word": "determined",
        "form": "adjective",
        "transcription": "dɪˈtɜːmɪnd",
        "definitions": [
            {
                "text": "Firmly decided to do something and not giving up.",
                "examples": [
                    "She is determined to reach her career goals."
                ]
            }
        ],
        "subtext": "very determined / highly determined / absolutely determined",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_values_beliefs_003",
        "word": "generous",
        "form": "adjective",
        "transcription": "ˈdʒɛnərəs",
        "definitions": [
            {
                "text": "Willing to give time or money; more than expected.",
                "examples": [
                    "He is generous with his time and mentors junior staff."
                ]
            }
        ],
        "subtext": "very generous / extremely generous / generous with",
        "lang": "en",
        "level": "intermediate",
        "theme": "values_beliefs",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_values_beliefs_004",
        "word": "gentle",
        "form": "adjective",
        "transcription": "ˈdʒɛntl",
        "definitions": [
            {
                "text": "Kind and calm; not rough or violent.",
                "examples": [
                    "She has a gentle but firm management style."
                ]
            }
        ],
        "subtext": "very gentle / a gentle approach / gentle reminder",
        "lang": "en",
        "level": "intermediate",
        "theme": "values_beliefs",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_values_beliefs_005",
        "word": "honest",
        "form": "adjective",
        "transcription": "🇬🇧 ˈɒnɪst | 🇺🇸 ˈɑːnɪst",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "He is known for being completely honest with everyone."
                ]
            }
        ],
        "subtext": "brutally honest / completely honest / very honest",
        "lang": "en",
        "level": "intermediate",
        "theme": "values_beliefs",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_values_beliefs_006",
        "word": "humble",
        "form": "adjective",
        "transcription": "ˈhʌmbl",
        "definitions": [
            {
                "text": "Not thinking you are better than others.",
                "examples": [
                    "She is very humble despite her impressive achievements."
                ]
            }
        ],
        "subtext": "very humble / genuinely humble / stay humble",
        "lang": "en",
        "level": "intermediate",
        "theme": "values_beliefs",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_030",
        "word": "impatient",
        "form": "adjective",
        "transcription": "ɪmˈpeɪʃnt",
        "definitions": [
            {
                "text": "Unable to wait calmly; easily irritated by delay.",
                "examples": [
                    "He becomes impatient when meetings go over time."
                ]
            }
        ],
        "subtext": "very impatient / easily impatient / grow impatient",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_031",
        "word": "motivated",
        "form": "adjective",
        "transcription": "🇬🇧 ˈməʊtɪveɪtɪd | 🇺🇸 ˈmoʊtɪveɪtɪd",
        "definitions": [
            {
                "text": "Having a desire to do something.",
                "examples": [
                    "The team is highly motivated by the new strategy.",
                    "The team is highly motivated under the new leadership."
                ]
            }
        ],
        "subtext": "highly motivated / self-motivated / strongly motivated",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_032",
        "word": "passionate",
        "form": "adjective",
        "transcription": "ˈpæʃənət",
        "definitions": [
            {
                "text": "Having strong feelings about something.",
                "examples": [
                    "She is passionate about sustainability and climate change."
                ]
            }
        ],
        "subtext": "very passionate / deeply passionate / passionate about",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_033",
        "word": "patient",
        "form": "adjective",
        "transcription": "ˈpeɪʃnt",
        "definitions": [
            {
                "text": "Able to wait for a long time without getting annoyed.",
                "examples": [
                    "A good teacher needs to be very patient."
                ]
            }
        ],
        "subtext": "very patient / patient with / extraordinarily patient",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_values_beliefs_007",
        "word": "sensible",
        "form": "adjective",
        "transcription": "ˈsɛnsəbl",
        "definitions": [
            {
                "text": "Showing good judgement; practical and reasonable.",
                "examples": [
                    "He made a very sensible decision under pressure."
                ]
            }
        ],
        "subtext": "very sensible / perfectly sensible / a sensible choice",
        "lang": "en",
        "level": "intermediate",
        "theme": "values_beliefs",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_structured_argument_001",
        "word": "adequate",
        "form": "adjective",
        "transcription": "ˈædɪkwət",
        "definitions": [
            {
                "text": "Enough or satisfactory for the purpose.",
                "examples": [
                    "The salary is adequate but not exceptional."
                ]
            }
        ],
        "subtext": "barely adequate / more than adequate / quite adequate",
        "lang": "en",
        "level": "intermediate",
        "theme": "structured_argument",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_structured_argument_002",
        "word": "appropriate",
        "form": "adjective",
        "transcription": "🇬🇧 əˈprəʊpriət | 🇺🇸 əˈproʊpriət",
        "definitions": [
            {
                "text": "Suitable or right for a particular situation.",
                "examples": [
                    "Her response was very appropriate given the circumstances."
                ]
            }
        ],
        "subtext": "entirely appropriate / highly appropriate / deemed appropriate",
        "lang": "en",
        "level": "intermediate",
        "theme": "structured_argument",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_002",
        "word": "effective",
        "form": "adjective",
        "transcription": "ɪˈfɛktɪv",
        "definitions": [
            {
                "text": "Producing the intended result.",
                "examples": [
                    "The new training programme is very effective."
                ]
            }
        ],
        "subtext": "highly effective / very effective / most effective",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_003",
        "word": "efficient",
        "form": "adjective",
        "transcription": "ɪˈfɪʃnt",
        "definitions": [
            {
                "text": "Achieving maximum result with minimum waste of effort.",
                "examples": [
                    "She manages her time in a very efficient way."
                ]
            }
        ],
        "subtext": "highly efficient / very efficient / more efficient",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_equality_rights_001",
        "word": "fair",
        "form": "adjective",
        "transcription": "🇬🇧 feə | 🇺🇸 feər",
        "definitions": [
            {
                "text": "Treating people equally and without favouritism.",
                "examples": [
                    "He has a reputation for being completely fair."
                ]
            }
        ],
        "subtext": "very fair / completely fair / perfectly fair",
        "lang": "en",
        "level": "intermediate",
        "theme": "equality_rights",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_004",
        "word": "impressive",
        "form": "adjective",
        "transcription": "ɪmˈprɛsɪv",
        "definitions": [
            {
                "text": "Causing admiration; making a strong effect.",
                "examples": [
                    "The results this quarter were very impressive."
                ]
            }
        ],
        "subtext": "very impressive / deeply impressive / highly impressive",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_cultural_heritage_001",
        "word": "original",
        "form": "adjective",
        "transcription": "əˈrɪdʒənl",
        "definitions": [
            {
                "text": "New and creative; not a copy.",
                "examples": [
                    "Her proposal was very original and well received."
                ]
            }
        ],
        "subtext": "very original / completely original / an original idea",
        "lang": "en",
        "level": "intermediate",
        "theme": "cultural_heritage",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_014",
        "word": "positive",
        "form": "adjective",
        "transcription": "🇬🇧 ˈpɒzətɪv | 🇺🇸 ˈpɑːzətɪv",
        "definitions": [
            {
                "text": "Feeling hopeful and confident; good.",
                "examples": [
                    "We had a very positive response from clients."
                ]
            }
        ],
        "subtext": "very positive / extremely positive / stay positive",
        "lang": "en",
        "level": "intermediate",
        "theme": "mental_health_wellbeing",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_015",
        "word": "negative",
        "form": "adjective",
        "transcription": "ˈnɛɡətɪv",
        "definitions": [
            {
                "text": "Not hopeful or constructive; bad.",
                "examples": [
                    "The feedback had a very negative impact on morale."
                ]
            }
        ],
        "subtext": "very negative / extremely negative / a negative outcome",
        "lang": "en",
        "level": "intermediate",
        "theme": "mental_health_wellbeing",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_structured_argument_003",
        "word": "reasonable",
        "form": "adjective",
        "transcription": "ˈriːznəbl",
        "definitions": [
            {
                "text": "Sensible and fair; not extreme.",
                "examples": [
                    "The price is very reasonable for what you get."
                ]
            }
        ],
        "subtext": "very reasonable / perfectly reasonable / more than reasonable",
        "lang": "en",
        "level": "intermediate",
        "theme": "structured_argument",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_034",
        "word": "successful",
        "form": "adjective",
        "transcription": "səkˈsɛsfl",
        "definitions": [
            {
                "text": "Having achieved a desired result.",
                "examples": [
                    "The campaign was extremely successful."
                ]
            }
        ],
        "subtext": "highly successful / very successful / enormously successful",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_finances_investment_001",
        "word": "valuable",
        "form": "adjective",
        "transcription": "ˈvæljuəbl",
        "definitions": [
            {
                "text": "Worth a lot; very useful or important.",
                "examples": [
                    "Her experience is extremely valuable to the team."
                ]
            }
        ],
        "subtext": "very valuable / invaluable / highly valuable",
        "lang": "en",
        "level": "intermediate",
        "theme": "finances_investment",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_equality_rights_002",
        "word": "equal",
        "form": "adjective",
        "transcription": "ˈiːkwəl",
        "definitions": [
            {
                "text": "The same in status, rights or opportunities.",
                "examples": [
                    "The company promotes equal pay for equal work."
                ]
            }
        ],
        "subtext": "equal pay / equal rights / completely equal",
        "lang": "en",
        "level": "intermediate",
        "theme": "equality_rights",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_028",
        "word": "global",
        "form": "adjective",
        "transcription": "🇬🇧 ˈɡləʊbl | 🇺🇸 ˈɡloʊbl",
        "definitions": [
            {
                "text": "Relating to the whole world.",
                "examples": [
                    "Climate change is a global problem."
                ]
            }
        ],
        "subtext": "global issue / global market / on a global scale",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_029",
        "word": "local",
        "form": "adjective",
        "transcription": "🇬🇧 ˈləʊkl | 🇺🇸 ˈloʊkl",
        "definitions": [
            {
                "text": "Relating to a nearby area.",
                "examples": [
                    "The company supports local charities."
                ]
            }
        ],
        "subtext": "local area / local community / at a local level",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_030",
        "word": "national",
        "form": "adjective",
        "transcription": "ˈnæʃnəl",
        "definitions": [
            {
                "text": "Relating to a whole country.",
                "examples": [
                    "The new policy will affect national healthcare."
                ]
            }
        ],
        "subtext": "national interest / national policy / on a national level",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_equality_rights_003",
        "word": "political",
        "form": "adjective",
        "transcription": "pəˈlɪtɪkl",
        "definitions": [
            {
                "text": "Relating to government and politics.",
                "examples": [
                    "She has strong political opinions."
                ]
            }
        ],
        "subtext": "political decision / very political / highly political",
        "lang": "en",
        "level": "intermediate",
        "theme": "equality_rights",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_social_031",
        "word": "social",
        "form": "adjective",
        "transcription": "🇬🇧 ˈsəʊʃl | 🇺🇸 ˈsoʊʃl",
        "definitions": [
            {
                "text": "Relating to society and its organisation.",
                "examples": [
                    "The company has strong social values."
                ]
            }
        ],
        "subtext": "social media / social skills / socially responsible",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_finances_investment_002",
        "word": "economic",
        "form": "adjective",
        "transcription": "🇬🇧 ˌiːkəˈnɒmɪk | 🇺🇸 ˌiːkəˈnɑːmɪk",
        "definitions": [
            {
                "text": "Relating to money, trade and industry.",
                "examples": [
                    "The economic situation is improving."
                ]
            }
        ],
        "subtext": "economic growth / economic crisis / economic policy",
        "lang": "en",
        "level": "intermediate",
        "theme": "finances_investment",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_environment_009",
        "word": "environmental",
        "form": "adjective",
        "transcription": "ɪnˌvaɪrənˈmɛntl",
        "definitions": [
            {
                "text": "Relating to the natural world and its protection.",
                "examples": [
                    "The company has an excellent environmental record."
                ]
            }
        ],
        "subtext": "environmental impact / environmental policy / environmentally friendly",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_cultural_heritage_002",
        "word": "cultural",
        "form": "adjective",
        "transcription": "ˈkʌltʃərəl",
        "definitions": [
            {
                "text": "Relating to the arts, ideas and customs of a society.",
                "examples": [
                    "She has a very strong cultural awareness."
                ]
            }
        ],
        "subtext": "cultural differences / cultural event / culturally diverse",
        "lang": "en",
        "level": "intermediate",
        "theme": "cultural_heritage",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_higher_education_001",
        "word": "educational",
        "form": "adjective",
        "transcription": "ˌɛdʒuˈkeɪʃənl",
        "definitions": [
            {
                "text": "Relating to education; giving knowledge.",
                "examples": [
                    "The course was very educational and practical."
                ]
            }
        ],
        "subtext": "educational value / an educational experience / highly educational",
        "lang": "en",
        "level": "intermediate",
        "theme": "higher_education",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_016",
        "word": "mental",
        "form": "adjective",
        "transcription": "ˈmɛntl",
        "definitions": [
            {
                "text": "Relating to the mind and emotions.",
                "examples": [
                    "Mental health support is essential in the workplace."
                ]
            }
        ],
        "subtext": "mental health / mental wellbeing / mental strength",
        "lang": "en",
        "level": "intermediate",
        "theme": "mental_health_wellbeing",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_017",
        "word": "physical",
        "form": "adjective",
        "transcription": "ˈfɪzɪkl",
        "definitions": [
            {
                "text": "Relating to the body rather than the mind.",
                "examples": [
                    "Physical exercise reduces stress significantly."
                ]
            }
        ],
        "subtext": "physical health / physical activity / physical condition",
        "lang": "en",
        "level": "intermediate",
        "theme": "mental_health_wellbeing",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_healthcare_systems_001",
        "word": "chronic",
        "form": "adjective",
        "transcription": "🇬🇧 ˈkrɒnɪk | 🇺🇸 ˈkrɑːnɪk",
        "definitions": [
            {
                "text": "Lasting a long time; persistent.",
                "examples": [
                    "She suffers from chronic back pain from desk work."
                ]
            }
        ],
        "subtext": "chronic illness / chronic pain / chronic stress",
        "lang": "en",
        "level": "intermediate",
        "theme": "healthcare_systems",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_healthcare_systems_002",
        "word": "severe",
        "form": "adjective",
        "transcription": "🇬🇧 sɪˈvɪə | 🇺🇸 sɪˈvɪər",
        "definitions": [
            {
                "text": "Very serious or extreme.",
                "examples": [
                    "The injury was quite severe and needed surgery."
                ]
            }
        ],
        "subtext": "very severe / extremely severe / severe consequences",
        "lang": "en",
        "level": "intermediate",
        "theme": "healthcare_systems",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_healthcare_systems_003",
        "word": "mild",
        "form": "adjective",
        "transcription": "maɪld",
        "definitions": [
            {
                "text": "Not extreme; gentle.",
                "examples": [
                    "He has a mild form of work-related anxiety."
                ]
            }
        ],
        "subtext": "very mild / relatively mild / a mild case",
        "lang": "en",
        "level": "intermediate",
        "theme": "healthcare_systems",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_035",
        "word": "competitive",
        "form": "adjective",
        "transcription": "kəmˈpɛtətɪv",
        "definitions": [
            {
                "text": "Trying hard to be better than others; involving competition.",
                "examples": [
                    "The industry is extremely competitive right now."
                ]
            }
        ],
        "subtext": "highly competitive / very competitive / a competitive salary",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_005",
        "word": "demanding",
        "form": "adjective",
        "transcription": "dɪˈmɑːndɪŋ",
        "definitions": [
            {
                "text": "Requiring a lot of effort and attention.",
                "examples": [
                    "It is a very demanding job but rewarding."
                ]
            }
        ],
        "subtext": "very demanding / highly demanding / a demanding client",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_036",
        "word": "dedicated",
        "form": "adjective",
        "transcription": "ˈdɛdɪkeɪtɪd",
        "definitions": [
            {
                "text": "Working very hard and loyal to something.",
                "examples": [
                    "She is fully dedicated to her team's success."
                ]
            }
        ],
        "subtext": "very dedicated / completely dedicated / dedicated to",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_037",
        "word": "skilled",
        "form": "adjective",
        "transcription": "skɪld",
        "definitions": [
            {
                "text": "Having particular abilities from training or experience.",
                "examples": [
                    "They are looking for a highly skilled programmer."
                ]
            }
        ],
        "subtext": "highly skilled / very skilled / skilled in",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_career_development_038",
        "word": "innovative",
        "form": "adjective",
        "transcription": "ˈɪnəvətɪv",
        "definitions": [
            {
                "text": "Introducing or using new ideas and methods.",
                "examples": [
                    "The company is known for its innovative approach."
                ]
            }
        ],
        "subtext": "highly innovative / very innovative / an innovative solution",
        "lang": "en",
        "level": "intermediate",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_006",
        "word": "overtime",
        "form": "adjective",
        "transcription": "🇬🇧 ˈəʊvətaɪm | 🇺🇸 ˈoʊvətaɪm",
        "definitions": [
            {
                "text": "Working beyond normal hours — used predicatively.",
                "examples": [
                    "He has been working overtime for three months."
                ]
            }
        ],
        "subtext": "work overtime / paid overtime / compulsory overtime",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_007",
        "word": "clear",
        "form": "adjective",
        "transcription": "🇬🇧 klɪə | 🇺🇸 klɪər",
        "definitions": [
            {
                "text": "Easy to understand; obvious.",
                "examples": [
                    "Her explanation was very clear and helpful."
                ]
            }
        ],
        "subtext": "crystal clear / very clear / make it clear",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_work_008",
        "word": "complicated",
        "form": "adjective",
        "transcription": "🇬🇧 ˈkɒmplɪkeɪtɪd | 🇺🇸 ˈkɑːmplɪkeɪtɪd",
        "definitions": [
            {
                "text": "Involving many parts; difficult to understand.",
                "examples": [
                    "The tax system is incredibly complicated."
                ]
            }
        ],
        "subtext": "very complicated / overly complicated / get complicated",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_structured_argument_004",
        "word": "logical",
        "form": "adjective",
        "transcription": "🇬🇧 ˈlɒdʒɪkl | 🇺🇸 ˈlɑːdʒɪkl",
        "definitions": [
            {
                "text": "Following a sensible and reasonable way of thinking.",
                "examples": [
                    "His argument is very logical and well-structured."
                ]
            }
        ],
        "subtext": "perfectly logical / very logical / a logical conclusion",
        "lang": "en",
        "level": "intermediate",
        "theme": "structured_argument",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_structured_argument_005",
        "word": "obvious",
        "form": "adjective",
        "transcription": "🇬🇧 ˈɒbviəs | 🇺🇸 ˈɑːbviəs",
        "definitions": [
            {
                "text": "Easy to see or understand; clear to everyone.",
                "examples": [
                    "It is obvious that the system needs updating."
                ]
            }
        ],
        "subtext": "perfectly obvious / very obvious / make obvious",
        "lang": "en",
        "level": "intermediate",
        "theme": "structured_argument",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_stress_anxiety_011",
        "word": "surprising",
        "form": "adjective",
        "transcription": "səˈpraɪzɪŋ",
        "definitions": [
            {
                "text": "Causing surprise; unexpected.",
                "examples": [
                    "The results were very surprising to everyone."
                ]
            }
        ],
        "subtext": "very surprising / quite surprising / not at all surprising",
        "lang": "en",
        "level": "intermediate",
        "theme": "stress_anxiety",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_spatial_description_001",
        "word": "typical",
        "form": "adjective",
        "transcription": "ˈtɪpɪkl",
        "definitions": [
            {
                "text": "Showing the most usual qualities.",
                "examples": [
                    "This is a typical example of the problem."
                ]
            }
        ],
        "subtext": "very typical / typical of / a typical case",
        "lang": "en",
        "level": "intermediate",
        "theme": "spatial_description",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_probability_certainty_001",
        "word": "unlikely",
        "form": "adjective",
        "transcription": "ʌnˈlaɪkli",
        "definitions": [
            {
                "text": "Probably not going to happen.",
                "examples": [
                    "It is unlikely that prices will fall this year."
                ]
            }
        ],
        "subtext": "very unlikely / highly unlikely / completely unlikely",
        "lang": "en",
        "level": "intermediate",
        "theme": "probability_certainty",
        "sub_theme": null
    },
    {
        "id": "en_intermediate_probability_certainty_002",
        "word": "likely",
        "form": "adjective",
        "transcription": "ˈlaɪkli",
        "definitions": [
            {
                "text": "Probably going to happen.",
                "examples": [
                    "A pay rise this year seems likely."
                ]
            }
        ],
        "subtext": "very likely / highly likely / most likely",
        "lang": "en",
        "level": "intermediate",
        "theme": "probability_certainty",
        "sub_theme": null
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
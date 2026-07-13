// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_intermediate_social_027",
        "word": "thin",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "thin",
                "examples": []
            }
        ],
        "transcription": "θɪn",
        "emoji": "❓",
        "_legacy": {
            "subtext": "paper thin / exceptionally thin / growing thin"
        }
    },
    {
        "id": "en_intermediate_environment_007",
        "word": "stormy",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "adjective",
        "definitions": [
            {
                "text": "stormy",
                "examples": []
            }
        ],
        "transcription": "ˈstɔːmi",
        "emoji": "⛈️",
        "_legacy": {
            "subtext": "stormy weather / a stormy relationship / stormy skies"
        }
    },
    {
        "id": "en_intermediate_career_development_025",
        "word": "self-employed",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
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
        "transcription": "ˌsɛlf ɪmˈplɔɪd",
        "emoji": "🧑‍💻",
        "_legacy": {
            "subtext": "freelance, work for yourself",
            "opposite": "employed"
        }
    },
    {
        "id": "en_intermediate_career_development_026",
        "word": "freelance",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective / adverb",
        "definitions": [
            {
                "text": "Working independently for different clients rather than one employer.",
                "examples": [
                    "He works freelance as a web developer."
                ]
            }
        ],
        "transcription": "ˈfriːlɑːns",
        "emoji": "🧑‍💻",
        "_legacy": {
            "subtext": "work freelance, freelance journalist"
        }
    },
    {
        "id": "en_intermediate_environment_008",
        "word": "sustainable",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "adjective",
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
        "transcription": "səˈsteɪnəbl",
        "emoji": "♻️",
        "_legacy": {
            "subtext": "sustainable development, eco-friendly"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_001",
        "word": "anxious",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling worried and nervous about something uncertain.",
                "examples": [
                    "She feels anxious before every major performance review."
                ]
            }
        ],
        "transcription": "ˈæŋkʃəs",
        "emoji": "❓",
        "_legacy": {
            "subtext": "feel anxious / very anxious / anxious about"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_002",
        "word": "disappointed",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling sad because something was not as expected.",
                "examples": [
                    "He was deeply disappointed not to be shortlisted."
                ]
            }
        ],
        "transcription": "ˌdɪsəˈpɔɪntɪd",
        "emoji": "❓",
        "_legacy": {
            "subtext": "feel disappointed / bitterly disappointed / disappointed with"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_003",
        "word": "embarrassed",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling ashamed or self-conscious.",
                "examples": [
                    "She felt embarrassed about the mistake in the report."
                ]
            }
        ],
        "transcription": "ɪmˈbærəst",
        "emoji": "❓",
        "_legacy": {
            "subtext": "feel embarrassed / deeply embarrassed / easily embarrassed"
        }
    },
    {
        "id": "en_intermediate_career_development_027",
        "word": "enthusiastic",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling or showing great interest and excitement.",
                "examples": [
                    "He is enthusiastic about the new project direction."
                ]
            }
        ],
        "transcription": "ɪnˌθjuːziˈæstɪk",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very enthusiastic / enthusiastic about / hugely enthusiastic"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_004",
        "word": "frustrated",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling annoyed because you cannot do what you want.",
                "examples": [
                    "She feels frustrated by the slow decision-making process."
                ]
            }
        ],
        "transcription": "frʌˈstreɪtɪd",
        "emoji": "❓",
        "_legacy": {
            "subtext": "feel frustrated / very frustrated / deeply frustrated"
        }
    },
    {
        "id": "en_intermediate_values_beliefs_001",
        "word": "grateful",
        "lang": "en",
        "level": "intermediate",
        "theme": "psychology",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling or showing thanks for kindness received.",
                "examples": [
                    "He is very grateful for the support during his illness."
                ]
            }
        ],
        "transcription": "ˈɡreɪtfl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very grateful / deeply grateful / grateful for"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_005",
        "word": "jealous",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling unhappy because someone has something you want.",
                "examples": [
                    "She was jealous of her colleague's promotion."
                ]
            }
        ],
        "transcription": "ˈdʒɛləs",
        "emoji": "❓",
        "_legacy": {
            "subtext": "feel jealous / very jealous / jealous of"
        }
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_012",
        "word": "lonely",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling unhappy because you are without company.",
                "examples": [
                    "He felt lonely when he first moved to a new city."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈləʊnli | 🇺🇸 ˈloʊnli",
        "emoji": "❓",
        "_legacy": {
            "subtext": "feel lonely / very lonely / desperately lonely"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_006",
        "word": "miserable",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling very unhappy and without hope.",
                "examples": [
                    "The constant commute made her feel miserable."
                ]
            }
        ],
        "transcription": "ˈmɪzrəbl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "feel miserable / absolutely miserable / make someone miserable"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_007",
        "word": "nervous",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling worried about something upcoming.",
                "examples": [
                    "She was very nervous on her first day in the new role."
                ]
            }
        ],
        "transcription": "ˈnɜːvəs",
        "emoji": "❓",
        "_legacy": {
            "subtext": "feel nervous / terribly nervous / nervous about"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_008",
        "word": "relieved",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling happy that something bad did not happen.",
                "examples": [
                    "He was relieved when the project was finally delivered."
                ]
            }
        ],
        "transcription": "rɪˈliːvd",
        "emoji": "❓",
        "_legacy": {
            "subtext": "feel relieved / greatly relieved / relieved to hear"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_009",
        "word": "shocked",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling very surprised and upset.",
                "examples": [
                    "She was shocked by the news of the redundancies."
                ]
            }
        ],
        "transcription": "🇬🇧 ʃɒkt | 🇺🇸 ʃɑːkt",
        "emoji": "❓",
        "_legacy": {
            "subtext": "feel shocked / absolutely shocked / shocked by"
        }
    },
    {
        "id": "en_intermediate_career_development_028",
        "word": "ambitious",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a strong desire to succeed.",
                "examples": [
                    "She is highly ambitious and plans to be a director."
                ]
            }
        ],
        "transcription": "æmˈbɪʃəs",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very ambitious / hugely ambitious / fiercely ambitious"
        }
    },
    {
        "id": "en_intermediate_values_beliefs_002",
        "word": "brave",
        "lang": "en",
        "level": "intermediate",
        "theme": "psychology",
        "form": "adjective",
        "definitions": [
            {
                "text": "Willing to face danger or difficulty.",
                "examples": [
                    "It was brave of him to challenge the board's decision."
                ]
            }
        ],
        "transcription": "breɪv",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very brave / incredibly brave / a brave decision"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_010",
        "word": "calm",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not showing nervousness; peaceful.",
                "examples": [
                    "She remains calm even in very stressful situations."
                ]
            }
        ],
        "transcription": "kɑːm",
        "emoji": "❓",
        "_legacy": {
            "subtext": "stay calm / very calm / keep calm"
        }
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_013",
        "word": "cheerful",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling or showing happiness.",
                "examples": [
                    "He is always cheerful, which lifts team morale."
                ]
            }
        ],
        "transcription": "ˈtʃɪəfl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very cheerful / naturally cheerful / cheerful attitude"
        }
    },
    {
        "id": "en_intermediate_career_development_029",
        "word": "determined",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Firmly decided to do something and not giving up.",
                "examples": [
                    "She is determined to reach her career goals."
                ]
            }
        ],
        "transcription": "dɪˈtɜːmɪnd",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very determined / highly determined / absolutely determined"
        }
    },
    {
        "id": "en_intermediate_values_beliefs_003",
        "word": "generous",
        "lang": "en",
        "level": "intermediate",
        "theme": "psychology",
        "form": "adjective",
        "definitions": [
            {
                "text": "Willing to give time or money; more than expected.",
                "examples": [
                    "He is generous with his time and mentors junior staff."
                ]
            }
        ],
        "transcription": "ˈdʒɛnərəs",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very generous / extremely generous / generous with"
        }
    },
    {
        "id": "en_intermediate_values_beliefs_004",
        "word": "gentle",
        "lang": "en",
        "level": "intermediate",
        "theme": "psychology",
        "form": "adjective",
        "definitions": [
            {
                "text": "Kind and calm; not rough or violent.",
                "examples": [
                    "She has a gentle but firm management style."
                ]
            }
        ],
        "transcription": "ˈdʒɛntl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very gentle / a gentle approach / gentle reminder"
        }
    },
    {
        "id": "en_intermediate_values_beliefs_005",
        "word": "honest",
        "lang": "en",
        "level": "intermediate",
        "theme": "psychology",
        "form": "adjective",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "He is known for being completely honest with everyone."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈɒnɪst | 🇺🇸 ˈɑːnɪst",
        "emoji": "❓",
        "_legacy": {
            "subtext": "brutally honest / completely honest / very honest"
        }
    },
    {
        "id": "en_intermediate_values_beliefs_006",
        "word": "humble",
        "lang": "en",
        "level": "intermediate",
        "theme": "psychology",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not thinking you are better than others.",
                "examples": [
                    "She is very humble despite her impressive achievements."
                ]
            }
        ],
        "transcription": "ˈhʌmbl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very humble / genuinely humble / stay humble"
        }
    },
    {
        "id": "en_intermediate_career_development_030",
        "word": "impatient",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Unable to wait calmly; easily irritated by delay.",
                "examples": [
                    "He becomes impatient when meetings go over time."
                ]
            }
        ],
        "transcription": "ɪmˈpeɪʃnt",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very impatient / easily impatient / grow impatient"
        }
    },
    {
        "id": "en_intermediate_career_development_031",
        "word": "motivated",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a desire to do something.",
                "examples": [
                    "The team is highly motivated by the new strategy.",
                    "The team is highly motivated under the new leadership."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈməʊtɪveɪtɪd | 🇺🇸 ˈmoʊtɪveɪtɪd",
        "emoji": "❓",
        "_legacy": {
            "subtext": "highly motivated / self-motivated / strongly motivated"
        }
    },
    {
        "id": "en_intermediate_career_development_032",
        "word": "passionate",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having strong feelings about something.",
                "examples": [
                    "She is passionate about sustainability and climate change."
                ]
            }
        ],
        "transcription": "ˈpæʃənət",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very passionate / deeply passionate / passionate about"
        }
    },
    {
        "id": "en_intermediate_career_development_033",
        "word": "patient",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Able to wait for a long time without getting annoyed.",
                "examples": [
                    "A good teacher needs to be very patient."
                ]
            }
        ],
        "transcription": "ˈpeɪʃnt",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very patient / patient with / extraordinarily patient"
        }
    },
    {
        "id": "en_intermediate_values_beliefs_007",
        "word": "sensible",
        "lang": "en",
        "level": "intermediate",
        "theme": "psychology",
        "form": "adjective",
        "definitions": [
            {
                "text": "Showing good judgement; practical and reasonable.",
                "examples": [
                    "He made a very sensible decision under pressure."
                ]
            }
        ],
        "transcription": "ˈsɛnsəbl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very sensible / perfectly sensible / a sensible choice"
        }
    },
    {
        "id": "en_intermediate_structured_argument_001",
        "word": "adequate",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Enough or satisfactory for the purpose.",
                "examples": [
                    "The salary is adequate but not exceptional."
                ]
            }
        ],
        "transcription": "ˈædɪkwət",
        "emoji": "❓",
        "_legacy": {
            "subtext": "barely adequate / more than adequate / quite adequate"
        }
    },
    {
        "id": "en_intermediate_structured_argument_002",
        "word": "appropriate",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Suitable or right for a particular situation.",
                "examples": [
                    "Her response was very appropriate given the circumstances."
                ]
            }
        ],
        "transcription": "🇬🇧 əˈprəʊpriət | 🇺🇸 əˈproʊpriət",
        "emoji": "❓",
        "_legacy": {
            "subtext": "entirely appropriate / highly appropriate / deemed appropriate"
        }
    },
    {
        "id": "en_intermediate_work_002",
        "word": "effective",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Producing the intended result.",
                "examples": [
                    "The new training programme is very effective."
                ]
            }
        ],
        "transcription": "ɪˈfɛktɪv",
        "emoji": "❓",
        "_legacy": {
            "subtext": "highly effective / very effective / most effective"
        }
    },
    {
        "id": "en_intermediate_work_003",
        "word": "efficient",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Achieving maximum result with minimum waste of effort.",
                "examples": [
                    "She manages her time in a very efficient way."
                ]
            }
        ],
        "transcription": "ɪˈfɪʃnt",
        "emoji": "❓",
        "_legacy": {
            "subtext": "highly efficient / very efficient / more efficient"
        }
    },
    {
        "id": "en_intermediate_equality_rights_001",
        "word": "fair",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "adjective",
        "definitions": [
            {
                "text": "Treating people equally and without favouritism.",
                "examples": [
                    "He has a reputation for being completely fair."
                ]
            }
        ],
        "transcription": "🇬🇧 feə | 🇺🇸 feər",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very fair / completely fair / perfectly fair"
        }
    },
    {
        "id": "en_intermediate_work_004",
        "word": "impressive",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Causing admiration; making a strong effect.",
                "examples": [
                    "The results this quarter were very impressive."
                ]
            }
        ],
        "transcription": "ɪmˈprɛsɪv",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very impressive / deeply impressive / highly impressive"
        }
    },
    {
        "id": "en_intermediate_cultural_heritage_001",
        "word": "original",
        "lang": "en",
        "level": "intermediate",
        "theme": "art_culture",
        "form": "adjective",
        "definitions": [
            {
                "text": "New and creative; not a copy.",
                "examples": [
                    "Her proposal was very original and well received."
                ]
            }
        ],
        "transcription": "əˈrɪdʒənl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very original / completely original / an original idea"
        }
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_014",
        "word": "positive",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling hopeful and confident; good.",
                "examples": [
                    "We had a very positive response from clients."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈpɒzətɪv | 🇺🇸 ˈpɑːzətɪv",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very positive / extremely positive / stay positive"
        }
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_015",
        "word": "negative",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not hopeful or constructive; bad.",
                "examples": [
                    "The feedback had a very negative impact on morale."
                ]
            }
        ],
        "transcription": "ˈnɛɡətɪv",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very negative / extremely negative / a negative outcome"
        }
    },
    {
        "id": "en_intermediate_structured_argument_003",
        "word": "reasonable",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sensible and fair; not extreme.",
                "examples": [
                    "The price is very reasonable for what you get."
                ]
            }
        ],
        "transcription": "ˈriːznəbl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very reasonable / perfectly reasonable / more than reasonable"
        }
    },
    {
        "id": "en_intermediate_career_development_034",
        "word": "successful",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having achieved a desired result.",
                "examples": [
                    "The campaign was extremely successful."
                ]
            }
        ],
        "transcription": "səkˈsɛsfl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "highly successful / very successful / enormously successful"
        }
    },
    {
        "id": "en_intermediate_finances_investment_001",
        "word": "valuable",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "adjective",
        "definitions": [
            {
                "text": "Worth a lot; very useful or important.",
                "examples": [
                    "Her experience is extremely valuable to the team."
                ]
            }
        ],
        "transcription": "ˈvæljuəbl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very valuable / invaluable / highly valuable"
        }
    },
    {
        "id": "en_intermediate_equality_rights_002",
        "word": "equal",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "adjective",
        "definitions": [
            {
                "text": "The same in status, rights or opportunities.",
                "examples": [
                    "The company promotes equal pay for equal work."
                ]
            }
        ],
        "transcription": "ˈiːkwəl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "equal pay / equal rights / completely equal"
        }
    },
    {
        "id": "en_intermediate_social_028",
        "word": "global",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the whole world.",
                "examples": [
                    "Climate change is a global problem."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈɡləʊbl | 🇺🇸 ˈɡloʊbl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "global issue / global market / on a global scale"
        }
    },
    {
        "id": "en_intermediate_social_029",
        "word": "local",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to a nearby area.",
                "examples": [
                    "The company supports local charities."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈləʊkl | 🇺🇸 ˈloʊkl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "local area / local community / at a local level"
        }
    },
    {
        "id": "en_intermediate_social_030",
        "word": "national",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to a whole country.",
                "examples": [
                    "The new policy will affect national healthcare."
                ]
            }
        ],
        "transcription": "ˈnæʃnəl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "national interest / national policy / on a national level"
        }
    },
    {
        "id": "en_intermediate_equality_rights_003",
        "word": "political",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to government and politics.",
                "examples": [
                    "She has strong political opinions."
                ]
            }
        ],
        "transcription": "pəˈlɪtɪkl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "political decision / very political / highly political"
        }
    },
    {
        "id": "en_intermediate_social_031",
        "word": "social",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to society and its organisation.",
                "examples": [
                    "The company has strong social values."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈsəʊʃl | 🇺🇸 ˈsoʊʃl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "social media / social skills / socially responsible"
        }
    },
    {
        "id": "en_intermediate_finances_investment_002",
        "word": "economic",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to money, trade and industry.",
                "examples": [
                    "The economic situation is improving."
                ]
            }
        ],
        "transcription": "🇬🇧 ˌiːkəˈnɒmɪk | 🇺🇸 ˌiːkəˈnɑːmɪk",
        "emoji": "❓",
        "_legacy": {
            "subtext": "economic growth / economic crisis / economic policy"
        }
    },
    {
        "id": "en_intermediate_environment_009",
        "word": "environmental",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the natural world and its protection.",
                "examples": [
                    "The company has an excellent environmental record."
                ]
            }
        ],
        "transcription": "ɪnˌvaɪrənˈmɛntl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "environmental impact / environmental policy / environmentally friendly"
        }
    },
    {
        "id": "en_intermediate_cultural_heritage_002",
        "word": "cultural",
        "lang": "en",
        "level": "intermediate",
        "theme": "art_culture",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the arts, ideas and customs of a society.",
                "examples": [
                    "She has a very strong cultural awareness."
                ]
            }
        ],
        "transcription": "ˈkʌltʃərəl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "cultural differences / cultural event / culturally diverse"
        }
    },
    {
        "id": "en_intermediate_higher_education_001",
        "word": "educational",
        "lang": "en",
        "level": "intermediate",
        "theme": "school",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to education; giving knowledge.",
                "examples": [
                    "The course was very educational and practical."
                ]
            }
        ],
        "transcription": "ˌɛdʒuˈkeɪʃənl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "educational value / an educational experience / highly educational"
        }
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_016",
        "word": "mental",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the mind and emotions.",
                "examples": [
                    "Mental health support is essential in the workplace."
                ]
            }
        ],
        "transcription": "ˈmɛntl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "mental health / mental wellbeing / mental strength"
        }
    },
    {
        "id": "en_intermediate_mental_health_wellbeing_017",
        "word": "physical",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the body rather than the mind.",
                "examples": [
                    "Physical exercise reduces stress significantly."
                ]
            }
        ],
        "transcription": "ˈfɪzɪkl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "physical health / physical activity / physical condition"
        }
    },
    {
        "id": "en_intermediate_healthcare_systems_001",
        "word": "chronic",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Lasting a long time; persistent.",
                "examples": [
                    "She suffers from chronic back pain from desk work."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈkrɒnɪk | 🇺🇸 ˈkrɑːnɪk",
        "emoji": "❓",
        "_legacy": {
            "subtext": "chronic illness / chronic pain / chronic stress"
        }
    },
    {
        "id": "en_intermediate_healthcare_systems_002",
        "word": "severe",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very serious or extreme.",
                "examples": [
                    "The injury was quite severe and needed surgery."
                ]
            }
        ],
        "transcription": "🇬🇧 sɪˈvɪə | 🇺🇸 sɪˈvɪər",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very severe / extremely severe / severe consequences"
        }
    },
    {
        "id": "en_intermediate_healthcare_systems_003",
        "word": "mild",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not extreme; gentle.",
                "examples": [
                    "He has a mild form of work-related anxiety."
                ]
            }
        ],
        "transcription": "maɪld",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very mild / relatively mild / a mild case"
        }
    },
    {
        "id": "en_intermediate_career_development_035",
        "word": "competitive",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Trying hard to be better than others; involving competition.",
                "examples": [
                    "The industry is extremely competitive right now."
                ]
            }
        ],
        "transcription": "kəmˈpɛtətɪv",
        "emoji": "❓",
        "_legacy": {
            "subtext": "highly competitive / very competitive / a competitive salary"
        }
    },
    {
        "id": "en_intermediate_work_005",
        "word": "demanding",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Requiring a lot of effort and attention.",
                "examples": [
                    "It is a very demanding job but rewarding."
                ]
            }
        ],
        "transcription": "dɪˈmɑːndɪŋ",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very demanding / highly demanding / a demanding client"
        }
    },
    {
        "id": "en_intermediate_career_development_036",
        "word": "dedicated",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Working very hard and loyal to something.",
                "examples": [
                    "She is fully dedicated to her team's success."
                ]
            }
        ],
        "transcription": "ˈdɛdɪkeɪtɪd",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very dedicated / completely dedicated / dedicated to"
        }
    },
    {
        "id": "en_intermediate_career_development_037",
        "word": "skilled",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having particular abilities from training or experience.",
                "examples": [
                    "They are looking for a highly skilled programmer."
                ]
            }
        ],
        "transcription": "skɪld",
        "emoji": "❓",
        "_legacy": {
            "subtext": "highly skilled / very skilled / skilled in"
        }
    },
    {
        "id": "en_intermediate_career_development_038",
        "word": "innovative",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Introducing or using new ideas and methods.",
                "examples": [
                    "The company is known for its innovative approach."
                ]
            }
        ],
        "transcription": "ˈɪnəvətɪv",
        "emoji": "❓",
        "_legacy": {
            "subtext": "highly innovative / very innovative / an innovative solution"
        }
    },
    {
        "id": "en_intermediate_work_006",
        "word": "overtime",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Working beyond normal hours — used predicatively.",
                "examples": [
                    "He has been working overtime for three months."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈəʊvətaɪm | 🇺🇸 ˈoʊvətaɪm",
        "emoji": "❓",
        "_legacy": {
            "subtext": "work overtime / paid overtime / compulsory overtime"
        }
    },
    {
        "id": "en_intermediate_work_007",
        "word": "clear",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Easy to understand; obvious.",
                "examples": [
                    "Her explanation was very clear and helpful."
                ]
            }
        ],
        "transcription": "🇬🇧 klɪə | 🇺🇸 klɪər",
        "emoji": "❓",
        "_legacy": {
            "subtext": "crystal clear / very clear / make it clear"
        }
    },
    {
        "id": "en_intermediate_work_008",
        "word": "complicated",
        "lang": "en",
        "level": "intermediate",
        "theme": "work",
        "form": "adjective",
        "definitions": [
            {
                "text": "Involving many parts; difficult to understand.",
                "examples": [
                    "The tax system is incredibly complicated."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈkɒmplɪkeɪtɪd | 🇺🇸 ˈkɑːmplɪkeɪtɪd",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very complicated / overly complicated / get complicated"
        }
    },
    {
        "id": "en_intermediate_structured_argument_004",
        "word": "logical",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Following a sensible and reasonable way of thinking.",
                "examples": [
                    "His argument is very logical and well-structured."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈlɒdʒɪkl | 🇺🇸 ˈlɑːdʒɪkl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "perfectly logical / very logical / a logical conclusion"
        }
    },
    {
        "id": "en_intermediate_structured_argument_005",
        "word": "obvious",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Easy to see or understand; clear to everyone.",
                "examples": [
                    "It is obvious that the system needs updating."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈɒbviəs | 🇺🇸 ˈɑːbviəs",
        "emoji": "❓",
        "_legacy": {
            "subtext": "perfectly obvious / very obvious / make obvious"
        }
    },
    {
        "id": "en_intermediate_stress_anxiety_011",
        "word": "surprising",
        "lang": "en",
        "level": "intermediate",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Causing surprise; unexpected.",
                "examples": [
                    "The results were very surprising to everyone."
                ]
            }
        ],
        "transcription": "səˈpraɪzɪŋ",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very surprising / quite surprising / not at all surprising"
        }
    },
    {
        "id": "en_intermediate_spatial_description_001",
        "word": "typical",
        "lang": "en",
        "level": "intermediate",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Showing the most usual qualities.",
                "examples": [
                    "This is a typical example of the problem."
                ]
            }
        ],
        "transcription": "ˈtɪpɪkl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very typical / typical of / a typical case"
        }
    },
    {
        "id": "en_intermediate_probability_certainty_001",
        "word": "unlikely",
        "lang": "en",
        "level": "intermediate",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Probably not going to happen.",
                "examples": [
                    "It is unlikely that prices will fall this year."
                ]
            }
        ],
        "transcription": "ʌnˈlaɪkli",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very unlikely / highly unlikely / completely unlikely"
        }
    },
    {
        "id": "en_intermediate_probability_certainty_002",
        "word": "likely",
        "lang": "en",
        "level": "intermediate",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Probably going to happen.",
                "examples": [
                    "A pay rise this year seems likely."
                ]
            }
        ],
        "transcription": "ˈlaɪkli",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very likely / highly likely / most likely"
        }
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
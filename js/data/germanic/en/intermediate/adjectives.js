(function() {
    const data = [
    {
        "word": "thin",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "adjective",
        "transcription": "θɪn",
        "subtext": "paper thin / exceptionally thin / growing thin"
    },
    {
        "word": "stormy",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "⛈️",
        "form": "adjective",
        "transcription": "ˈstɔːmi",
        "subtext": "stormy weather / a stormy relationship / stormy skies"
    },
    {
        "word": "self-employed",
        "level": "intermediate",
        "theme": "career_development_B1",
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
        ]
    },
    {
        "word": "freelance",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🧑‍💻",
        "form": "adjective",
        "transcription": "ˈfriːlɑːns",
        "subtext": "work freelance, freelance journalist",
        "definitions": [
            {
                "text": "Working independently for different clients rather than one employer.",
                "examples": [
                    "He works freelance as a web developer."
                ]
            }
        ]
    },
    {
        "word": "sustainable",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
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
        ]
    },
    {
        "word": "anxious",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
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
        "subtext": "feel anxious / very anxious / anxious about"
    },
    {
        "word": "disappointed",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
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
        "subtext": "feel disappointed / bitterly disappointed / disappointed with"
    },
    {
        "word": "embarrassed",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
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
        "subtext": "feel embarrassed / deeply embarrassed / easily embarrassed"
    },
    {
        "word": "enthusiastic",
        "level": "intermediate",
        "theme": "career_development_B1",
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
        "subtext": "very enthusiastic / enthusiastic about / hugely enthusiastic"
    },
    {
        "word": "frustrated",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
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
        "subtext": "feel frustrated / very frustrated / deeply frustrated"
    },
    {
        "word": "grateful",
        "level": "intermediate",
        "theme": "values_beliefs_B1",
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
        "subtext": "very grateful / deeply grateful / grateful for"
    },
    {
        "word": "jealous",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
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
        "subtext": "feel jealous / very jealous / jealous of"
    },
    {
        "word": "lonely",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "form": "adjective",
        "transcription": "ˈləʊnli",
        "definitions": [
            {
                "text": "Feeling unhappy because you are without company.",
                "examples": [
                    "He felt lonely when he first moved to a new city."
                ]
            }
        ],
        "subtext": "feel lonely / very lonely / desperately lonely"
    },
    {
        "word": "miserable",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
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
        "subtext": "feel miserable / absolutely miserable / make someone miserable"
    },
    {
        "word": "nervous",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
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
        "subtext": "feel nervous / terribly nervous / nervous about"
    },
    {
        "word": "relieved",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
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
        "subtext": "feel relieved / greatly relieved / relieved to hear"
    },
    {
        "word": "shocked",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
        "form": "adjective",
        "transcription": "ʃɒkt",
        "definitions": [
            {
                "text": "Feeling very surprised and upset.",
                "examples": [
                    "She was shocked by the news of the redundancies."
                ]
            }
        ],
        "subtext": "feel shocked / absolutely shocked / shocked by"
    },
    {
        "word": "ambitious",
        "level": "intermediate",
        "theme": "career_development_B1",
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
        "subtext": "very ambitious / hugely ambitious / fiercely ambitious"
    },
    {
        "word": "brave",
        "level": "intermediate",
        "theme": "values_beliefs_B1",
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
        "subtext": "very brave / incredibly brave / a brave decision"
    },
    {
        "word": "calm",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
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
        "subtext": "stay calm / very calm / keep calm"
    },
    {
        "word": "cheerful",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
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
        "subtext": "very cheerful / naturally cheerful / cheerful attitude"
    },
    {
        "word": "determined",
        "level": "intermediate",
        "theme": "career_development_B1",
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
        "subtext": "very determined / highly determined / absolutely determined"
    },
    {
        "word": "generous",
        "level": "intermediate",
        "theme": "values_beliefs_B1",
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
        "subtext": "very generous / extremely generous / generous with"
    },
    {
        "word": "gentle",
        "level": "intermediate",
        "theme": "values_beliefs_B1",
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
        "subtext": "very gentle / a gentle approach / gentle reminder"
    },
    {
        "word": "honest",
        "level": "intermediate",
        "theme": "values_beliefs_B1",
        "form": "adjective",
        "transcription": "ˈɒnɪst",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "He is known for being completely honest with everyone."
                ]
            }
        ],
        "subtext": "brutally honest / completely honest / very honest"
    },
    {
        "word": "humble",
        "level": "intermediate",
        "theme": "values_beliefs_B1",
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
        "subtext": "very humble / genuinely humble / stay humble"
    },
    {
        "word": "impatient",
        "level": "intermediate",
        "theme": "career_development_B1",
        "form": "adjective",
        "transcription": "ɪmˈpɛɪʃnt",
        "definitions": [
            {
                "text": "Unable to wait calmly; easily irritated by delay.",
                "examples": [
                    "He becomes impatient when meetings go over time."
                ]
            }
        ],
        "subtext": "very impatient / easily impatient / grow impatient"
    },
    {
        "word": "motivated",
        "level": "intermediate",
        "theme": "career_development_B1",
        "form": "adjective",
        "transcription": "ˈməʊtɪveɪtɪd",
        "definitions": [
            {
                "text": "Having a desire to do something.",
                "examples": [
                    "The team is highly motivated by the new strategy.",
                    "The team is highly motivated under the new leadership."
                ]
            }
        ],
        "subtext": "highly motivated / self-motivated / strongly motivated"
    },
    {
        "word": "passionate",
        "level": "intermediate",
        "theme": "career_development_B1",
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
        "subtext": "very passionate / deeply passionate / passionate about"
    },
    {
        "word": "patient",
        "level": "intermediate",
        "theme": "career_development_B1",
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
        "subtext": "very patient / patient with / extraordinarily patient"
    },
    {
        "word": "sensible",
        "level": "intermediate",
        "theme": "values_beliefs_B1",
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
        "subtext": "very sensible / perfectly sensible / a sensible choice"
    },
    {
        "word": "adequate",
        "level": "intermediate",
        "theme": "structured_argument_B1",
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
        "subtext": "barely adequate / more than adequate / quite adequate"
    },
    {
        "word": "appropriate",
        "level": "intermediate",
        "theme": "structured_argument_B1",
        "form": "adjective",
        "transcription": "əˈprəʊpriət",
        "definitions": [
            {
                "text": "Suitable or right for a particular situation.",
                "examples": [
                    "Her response was very appropriate given the circumstances."
                ]
            }
        ],
        "subtext": "entirely appropriate / highly appropriate / deemed appropriate"
    },
    {
        "word": "effective",
        "level": "intermediate",
        "theme": "workplace_communication_B1",
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
        "subtext": "highly effective / very effective / most effective"
    },
    {
        "word": "efficient",
        "level": "intermediate",
        "theme": "workplace_communication_B1",
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
        "subtext": "highly efficient / very efficient / more efficient"
    },
    {
        "word": "fair",
        "level": "intermediate",
        "theme": "equality_rights_B1",
        "form": "adjective",
        "transcription": "feə",
        "definitions": [
            {
                "text": "Treating people equally and without favouritism.",
                "examples": [
                    "He has a reputation for being completely fair."
                ]
            }
        ],
        "subtext": "very fair / completely fair / perfectly fair"
    },
    {
        "word": "impressive",
        "level": "intermediate",
        "theme": "workplace_communication_B1",
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
        "subtext": "very impressive / deeply impressive / highly impressive"
    },
    {
        "word": "original",
        "level": "intermediate",
        "theme": "cultural_heritage_B1",
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
        "subtext": "very original / completely original / an original idea"
    },
    {
        "word": "positive",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "form": "adjective",
        "transcription": "ˈpɒzətɪv",
        "definitions": [
            {
                "text": "Feeling hopeful and confident; good.",
                "examples": [
                    "We had a very positive response from clients."
                ]
            }
        ],
        "subtext": "very positive / extremely positive / stay positive"
    },
    {
        "word": "negative",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
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
        "subtext": "very negative / extremely negative / a negative outcome"
    },
    {
        "word": "reasonable",
        "level": "intermediate",
        "theme": "structured_argument_B1",
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
        "subtext": "very reasonable / perfectly reasonable / more than reasonable"
    },
    {
        "word": "successful",
        "level": "intermediate",
        "theme": "career_development_B1",
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
        "subtext": "highly successful / very successful / enormously successful"
    },
    {
        "word": "valuable",
        "level": "intermediate",
        "theme": "finances_investment_B1",
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
        "subtext": "very valuable / highly valuable",
        "synonyms": ["invaluable"]
    },
    {
        "word": "equal",
        "level": "intermediate",
        "theme": "equality_rights_B1",
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
        "subtext": "equal pay / equal rights / completely equal"
    },
    {
        "word": "global",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "adjective",
        "transcription": "ˈɡləʊbl",
        "definitions": [
            {
                "text": "Relating to the whole world.",
                "examples": [
                    "Climate change is a global problem."
                ]
            }
        ],
        "subtext": "global issue / global market / on a global scale"
    },
    {
        "word": "local",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "adjective",
        "transcription": "ˈləʊkl",
        "definitions": [
            {
                "text": "Relating to a nearby area.",
                "examples": [
                    "The company supports local charities."
                ]
            }
        ],
        "subtext": "local area / local community / at a local level"
    },
    {
        "word": "national",
        "level": "intermediate",
        "theme": "society_community_B1",
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
        "subtext": "national interest / national policy / on a national level"
    },
    {
        "word": "political",
        "level": "intermediate",
        "theme": "equality_rights_B1",
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
        "subtext": "political decision / very political / highly political"
    },
    {
        "word": "social",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "adjective",
        "transcription": "ˈsəʊʃl",
        "definitions": [
            {
                "text": "Relating to society and its organisation.",
                "examples": [
                    "The company has strong social values."
                ]
            }
        ],
        "subtext": "social media / social skills",
        "synonyms": ["socially responsible"]
    },
    {
        "word": "economic",
        "level": "intermediate",
        "theme": "finances_investment_B1",
        "form": "adjective",
        "transcription": "ˌiːkəˈnɒmɪk",
        "definitions": [
            {
                "text": "Relating to money, trade and industry.",
                "examples": [
                    "The economic situation is improving."
                ]
            }
        ],
        "subtext": "economic growth / economic crisis / economic policy"
    },
    {
        "word": "environmental",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
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
        "subtext": "environmental impact / environmental policy",
        "synonyms": ["environmentally friendly"]
    },
    {
        "word": "cultural",
        "level": "intermediate",
        "theme": "cultural_heritage_B1",
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
        "subtext": "cultural differences / cultural event",
        "synonyms": ["culturally diverse"]
    },
    {
        "word": "educational",
        "level": "intermediate",
        "theme": "higher_education_B1",
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
        "subtext": "educational value / an educational experience / highly educational"
    },
    {
        "word": "mental",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
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
        "subtext": "mental health / mental wellbeing / mental strength"
    },
    {
        "word": "physical",
        "level": "intermediate",
        "theme": "mental_health_wellbeing_B1",
        "form": "adjective",
        "transcription": "ˈɪzɪkl",
        "definitions": [
            {
                "text": "Relating to the body rather than the mind.",
                "examples": [
                    "Physical exercise reduces stress significantly."
                ]
            }
        ],
        "subtext": "physical health / physical activity / physical condition"
    },
    {
        "word": "chronic",
        "level": "intermediate",
        "theme": "healthcare_systems_B1",
        "form": "adjective",
        "transcription": "ˈkrɒnɪk",
        "definitions": [
            {
                "text": "Lasting a long time; persistent.",
                "examples": [
                    "She suffers from chronic back pain from desk work."
                ]
            }
        ],
        "subtext": "chronic illness / chronic pain / chronic stress"
    },
    {
        "word": "severe",
        "level": "intermediate",
        "theme": "healthcare_systems_B1",
        "form": "adjective",
        "transcription": "sɪˈvɪə",
        "definitions": [
            {
                "text": "Very serious or extreme.",
                "examples": [
                    "The injury was quite severe and needed surgery."
                ]
            }
        ],
        "subtext": "very severe / extremely severe / severe consequences"
    },
    {
        "word": "mild",
        "level": "intermediate",
        "theme": "healthcare_systems_B1",
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
        "subtext": "very mild / relatively mild / a mild case"
    },
    {
        "word": "competitive",
        "level": "intermediate",
        "theme": "career_development_B1",
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
        "subtext": "highly competitive / very competitive / a competitive salary"
    },
    {
        "word": "demanding",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
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
        "subtext": "very demanding / highly demanding / a demanding client"
    },
    {
        "word": "dedicated",
        "level": "intermediate",
        "theme": "career_development_B1",
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
        "subtext": "very dedicated / completely dedicated / dedicated to"
    },
    {
        "word": "skilled",
        "level": "intermediate",
        "theme": "career_development_B1",
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
        "subtext": "highly skilled / very skilled / skilled in"
    },
    {
        "word": "innovative",
        "level": "intermediate",
        "theme": "career_development_B1",
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
        "subtext": "highly innovative / very innovative / an innovative solution"
    },
    {
        "word": "overtime",
        "level": "intermediate",
        "theme": "work_life_balance_B1",
        "form": "adjective",
        "transcription": "ˈəʊvətaɪm",
        "definitions": [
            {
                "text": "Working beyond normal hours — used predicatively.",
                "examples": [
                    "He has been working overtime for three months."
                ]
            }
        ],
        "subtext": "work overtime / paid overtime / compulsory overtime"
    },
    {
        "word": "clear",
        "level": "intermediate",
        "theme": "workplace_communication_B1",
        "form": "adjective",
        "transcription": "klɪə",
        "definitions": [
            {
                "text": "Easy to understand; obvious.",
                "examples": [
                    "Her explanation was very clear and helpful."
                ]
            }
        ],
        "subtext": "crystal clear / very clear / make it clear"
    },
    {
        "word": "complicated",
        "level": "intermediate",
        "theme": "workplace_communication_B1",
        "form": "adjective",
        "transcription": "ˈ kɒmplɪkeɪtɪd",
        "definitions": [
            {
                "text": "Involving many parts; difficult to understand.",
                "examples": [
                    "The tax system is incredibly complicated."
                ]
            }
        ],
        "subtext": "very complicated / overly complicated / get complicated"
    },
    {
        "word": "logical",
        "level": "intermediate",
        "theme": "structured_argument_B1",
        "form": "adjective",
        "transcription": "ˈlɒdʒɪkl",
        "definitions": [
            {
                "text": "Following a sensible and reasonable way of thinking.",
                "examples": [
                    "His argument is very logical and well-structured."
                ]
            }
        ],
        "subtext": "perfectly logical / very logical / a logical conclusion"
    },
    {
        "word": "obvious",
        "level": "intermediate",
        "theme": "structured_argument_B1",
        "form": "adjective",
        "transcription": "ˈɒbviəs",
        "definitions": [
            {
                "text": "Easy to see or understand; clear to everyone.",
                "examples": [
                    "It is obvious that the system needs updating."
                ]
            }
        ],
        "subtext": "perfectly obvious / very obvious / make obvious"
    },
    {
        "word": "surprising",
        "level": "intermediate",
        "theme": "stress_anxiety_B1",
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
        "subtext": "very surprising / quite surprising / not at all surprising"
    },
    {
        "word": "typical",
        "level": "intermediate",
        "theme": "spatial_description_B1",
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
        "subtext": "very typical / typical of / a typical case"
    },
    {
        "word": "unlikely",
        "level": "intermediate",
        "theme": "probability_certainty_B1",
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
        "subtext": "very unlikely / highly unlikely / completely unlikely"
    },
    {
        "word": "likely",
        "level": "intermediate",
        "theme": "probability_certainty_B1",
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
        "subtext": "very likely / highly likely / most likely"
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

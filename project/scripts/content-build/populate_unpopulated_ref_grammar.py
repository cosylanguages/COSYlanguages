import json

def populate_sentence_types():
    data = {
      "language": "en",
      "category": "sentence_types",
      "level": "A1-C2",
      "groups": [
        {
          "id": "questions_question_words",
          "label": "Question Words & Formation",
          "level": "starter",
          "emoji": "❓",
          "definition": "Wh- questions and Yes/No question structure",
          "rules": [
            "Invert subject and auxiliary/verb to form questions.",
            "Wh- words (Who, What, Where, When, Why, How) come at the beginning.",
            "Use Do/Does/Did for simple tenses without auxiliary verbs."
          ],
          "examples": [
            {
              "t": "Where do you live?",
              "m": "Wh- question"
            },
            {
              "t": "Are you ready?",
              "m": "Yes/No question with Be"
            }
          ],
          "practice_links": [
            "manuals/en/grammar/a1/topics/question-words.html"
          ]
        },
        {
          "id": "conjunctions",
          "label": "Conjunctions & Linking Words",
          "level": "starter",
          "emoji": "🔗",
          "definition": "Connecting sentences and clauses (and, but, or, because, so)",
          "rules": [
            "Use 'and' to add information.",
            "Use 'but' to show contrast.",
            "Use 'because' for reasons and 'so' for results."
          ],
          "examples": [
            {
              "t": "I like coffee and tea.",
              "m": "Addition"
            },
            {
              "t": "He is tired but happy.",
              "m": "Contrast"
            }
          ],
          "practice_links": [
            "manuals/en/grammar/a1/topics/conjunctions.html"
          ]
        },
        {
          "id": "imperatives",
          "label": "Imperatives & Instructions",
          "level": "starter",
          "emoji": "📢",
          "definition": "Giving commands, rules, and directions",
          "rules": [
            "Use the base form of the verb without subject.",
            "Use 'Don't' for negative imperatives.",
            "Add 'please' for polite requests."
          ],
          "examples": [
            {
              "t": "Open the door, please.",
              "m": "Affirmative imperative"
            },
            {
              "t": "Don't touch that!",
              "m": "Negative imperative"
            }
          ],
          "practice_links": [
            "manuals/en/grammar/a1/topics/imperatives.html"
          ]
        }
      ]
    }
    with open('reference-grammar/en/syntax/sentence_types.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

def populate_clauses():
    data = {
      "language": "en",
      "category": "clauses",
      "level": "A1-C2",
      "groups": [
        {
          "id": "relative_clauses",
          "label": "Defining Relative Clauses",
          "level": "elementary",
          "emoji": "🧩",
          "definition": "Connecting clauses with Who, Which, That, Where",
          "rules": [
            "Use 'who' for people.",
            "Use 'which' or 'that' for things.",
            "Use 'where' for places."
          ],
          "examples": [
            {
              "t": "The man who lives next door is a doctor.",
              "m": "Person"
            },
            {
              "t": "The book that I read was great.",
              "m": "Thing"
            }
          ],
          "practice_links": [
            "manuals/en/grammar/a2/topics/defining-relative-clauses.html"
          ]
        },
        {
          "id": "conditionals_zero_first",
          "label": "Zero & First Conditionals",
          "level": "elementary",
          "emoji": "🔀",
          "definition": "Facts, habits, and future real possibilities",
          "rules": [
            "Zero conditional: If + Present Simple, Present Simple (general truths).",
            "First conditional: If + Present Simple, Will + Verb (future possibility)."
          ],
          "examples": [
            {
              "t": "If you heat water to 100°C, it boils.",
              "m": "Zero conditional"
            },
            {
              "t": "If it rains tomorrow, we will stay home.",
              "m": "First conditional"
            }
          ],
          "practice_links": [
            "manuals/en/grammar/a2/topics/zero-conditional.html",
            "manuals/en/grammar/a2/topics/first-conditional.html"
          ]
        },
        {
          "id": "conditionals_second_third",
          "label": "Second & Third Conditionals",
          "level": "intermediate",
          "emoji": "🔮",
          "definition": "Hypothetical, unreal, and past regret scenarios",
          "rules": [
            "Second conditional: If + Past Simple, Would + Verb (unreal present/future).",
            "Third conditional: If + Past Perfect, Would Have + Past Participle (unreal past)."
          ],
          "examples": [
            {
              "t": "If I had a million dollars, I would travel the world.",
              "m": "Second conditional"
            },
            {
              "t": "If I had studied harder, I would have passed.",
              "m": "Third conditional"
            }
          ],
          "practice_links": [
            "manuals/en/grammar/a2/topics/second-conditional.html",
            "manuals/en/grammar/b1/topics/third-conditional.html"
          ]
        }
      ]
    }
    with open('reference-grammar/en/syntax/clauses.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

def populate_prepositions():
    data = {
      "language": "en",
      "category": "prepositions",
      "level": "A1-C2",
      "groups": [
        {
          "id": "prepositions_place",
          "label": "Prepositions of Place (In, On, At)",
          "level": "starter",
          "emoji": "📍",
          "definition": "Describing location and spatial relationships",
          "rules": [
            "IN: enclosed spaces, cities, countries.",
            "ON: surfaces, floors, streets.",
            "AT: specific points, addresses, events."
          ],
          "examples": [
            {
              "t": "She is in the kitchen.",
              "m": "Enclosed space"
            },
            {
              "t": "The key is on the table.",
              "m": "Surface"
            },
            {
              "t": "Meet me at the bus stop.",
              "m": "Specific location"
            }
          ],
          "practice_links": [
            "manuals/en/grammar/a1/topics/prepositions-place.html"
          ]
        },
        {
          "id": "prepositions_time",
          "label": "Prepositions of Time (In, On, At)",
          "level": "starter",
          "emoji": "🕒",
          "definition": "Describing time, dates, and deadlines",
          "rules": [
            "AT: clock times, night, holidays.",
            "ON: days of the week, dates.",
            "IN: months, years, seasons, parts of day."
          ],
          "examples": [
            {
              "t": "At 8 o'clock.",
              "m": "Clock time"
            },
            {
              "t": "On Monday morning.",
              "m": "Day"
            },
            {
              "t": "In July / In 2026.",
              "m": "Month & Year"
            }
          ],
          "practice_links": [
            "manuals/en/grammar/a1/topics/prepositions-time.html"
          ]
        },
        {
          "id": "prepositions_movement",
          "label": "Prepositions of Movement",
          "level": "elementary",
          "emoji": "🚶",
          "definition": "Expressing direction and motion",
          "rules": [
            "Use 'to', 'into', 'out of', 'across', 'through', 'towards' to show direction of movement."
          ],
          "examples": [
            {
              "t": "He walked into the building.",
              "m": "Movement into space"
            },
            {
              "t": "They drove across the bridge.",
              "m": "Movement across surface"
            }
          ],
          "practice_links": [
            "manuals/en/grammar/a2/topics/prepositions-of-movement.html"
          ]
        }
      ]
    }
    with open('reference-grammar/en/particles/prepositions.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

def populate_sounds():
    data = {
      "language": "en",
      "category": "sounds",
      "level": "A1-C2",
      "groups": [
        {
          "id": "vowels_consonants",
          "label": "Vowels & Consonants",
          "level": "starter",
          "emoji": "🔤",
          "definition": "Core phoneme system of English",
          "rules": [
            "English has 5 vowel letters (A, E, I, O, U) representing 20 distinct vowel sounds.",
            "Consonants can be voiced or unvoiced."
          ],
          "examples": [
            {
              "t": "Ship /ɪ/ vs Sheep /iː/",
              "m": "Short vs long vowel"
            },
            {
              "t": "Think /θ/ vs This /ð/",
              "m": "Unvoiced vs voiced dental fricative"
            }
          ],
          "practice_links": None
        },
        {
          "id": "silent_letters",
          "label": "Silent Letters",
          "level": "starter",
          "emoji": "🔇",
          "definition": "Unpronounced letters in common words",
          "rules": [
            "Silent K in know, knee, knife.",
            "Silent L in listen, talk, walk, half.",
            "Silent W in write, answer, wrong.",
            "Silent B in climb, comb."
          ],
          "examples": [
            {
              "t": "I know the answer.",
              "m": "Silent K and W"
            },
            {
              "t": "Listen to the music.",
              "m": "Silent T"
            }
          ],
          "practice_links": None
        }
      ]
    }
    with open('reference-grammar/en/phonology/sounds.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

def populate_stress():
    data = {
      "language": "en",
      "category": "stress",
      "level": "A1-C2",
      "groups": [
        {
          "id": "word_stress",
          "label": "Word Stress & Syllable Prominence",
          "level": "starter",
          "emoji": "🔊",
          "definition": "Stressing syllables in multi-syllable words",
          "rules": [
            "Most 2-syllable nouns stress the first syllable (DOC-tor, TEA-cher).",
            "-teen numbers stress the second syllable (thir-TEEN), -ty numbers stress the first (THIR-ty)."
          ],
          "examples": [
            {
              "t": "DOC-tor, BU-si-ness",
              "m": "First-syllable noun stress"
            },
            {
              "t": "thir-TEEN vs THIR-ty",
              "m": "-teen vs -ty contrast"
            }
          ],
          "practice_links": None
        },
        {
          "id": "sentence_stress_schwa",
          "label": "Sentence Stress & Schwa /ə/",
          "level": "starter",
          "emoji": "🗣️",
          "definition": "Prominence of content words and weak forms",
          "rules": [
            "Content words (nouns, main verbs, adjectives) are stressed.",
            "Function words are unstressed and often use the schwa sound /ə/."
          ],
          "examples": [
            {
              "t": "about /əˈbaʊt/, doctor /ˈdɒk.tə/",
              "m": "Schwa /ə/ in unstressed syllables"
            },
            {
              "t": "Where do you LIVE?",
              "m": "Sentence stress on content word"
            }
          ],
          "practice_links": None
        }
      ]
    }
    with open('reference-grammar/en/phonology/stress.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

def populate_intonation():
    data = {
      "language": "en",
      "category": "intonation",
      "level": "A1-C2",
      "groups": [
        {
          "id": "basic_intonation",
          "label": "Rising & Falling Intonation",
          "level": "starter",
          "emoji": "📈",
          "definition": "Pitch movement in statements and questions",
          "rules": [
            "Yes/No questions end with rising intonation ↗.",
            "Wh- questions and statements end with falling intonation ↘."
          ],
          "examples": [
            {
              "t": "Are you ready? ↗",
              "m": "Yes/No rising intonation"
            },
            {
              "t": "Where do you live? ↘",
              "m": "Wh- falling intonation"
            }
          ],
          "practice_links": None
        },
        {
          "id": "connected_speech",
          "label": "Connected Speech & Linking",
          "level": "elementary",
          "emoji": "🌊",
          "definition": "Consonant-to-vowel linking in natural speech",
          "rules": [
            "Final consonants link smoothly to initial vowels of the next word.",
            "Words flow together in continuous speech streams."
          ],
          "examples": [
            {
              "t": "An apple ➔ /ənæp.əl/",
              "m": "Consonant-vowel link"
            },
            {
              "t": "Stand up ➔ /stændʌp/",
              "m": "Consonant-vowel link"
            }
          ],
          "practice_links": None
        }
      ]
    }
    with open('reference-grammar/en/phonology/intonation.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

if __name__ == '__main__':
    populate_sentence_types()
    populate_clauses()
    populate_prepositions()
    populate_sounds()
    populate_stress()
    populate_intonation()
    print('Populated 6 unpopulated reference grammar files successfully!')

#!/usr/bin/env python3
"""
build_english_track_curriculums.py

Generates curriculum JSON files for non-general English tracks:
  - spoken: A1, A2, B1, B2, C1, C2
  - exam: B1, B2, C1, C2
  - travelling: A1, A2, B1
  - professional: B1, B2, C1, C2
  - relocation: A2, B1, B2, C1

Output format adheres strictly to curriculum/_schema/curriculum.schema.json
"""

import os
import json
import glob
import re

TRACK_CONFIGS = {
    "spoken": {
        "levels": ["A1", "A2", "B1", "B2", "C1", "C2"],
        "curriculum_templates": {
            "A1": [
                {
                    "unit": 1,
                    "title": "First Contact & Social Greetings",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Greetings & Introductions",
                            "grammar": ["Verb 'to be' (present simple)", "Possessive adjectives (my, your)"],
                            "vocabulary": ["Hello", "Good morning", "Nice to meet you", "My name is", "Welcome"],
                            "teacher_notes": "code: \"EN-SPK-A1-001\"\ncando: \"Can greet people, introduce oneself, and ask basic questions in spoken English.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Asking Simple Questions & Clarification",
                            "grammar": ["Question words (What, Where, How)", "Can for requests"],
                            "vocabulary": ["Pardon?", "Could you repeat that?", "Slowly", "Understand"],
                            "teacher_notes": "code: \"EN-SPK-A1-002\"\ncando: \"Can ask simple questions and request clarification when speaking.\""
                        }
                    ]
                },
                {
                    "unit": 2,
                    "title": "Everyday Situational Conversations",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Basic Shopping & Ordering Phrases",
                            "grammar": ["I would like...", "How much is...?"],
                            "vocabulary": ["Menu", "Bill", "Price", "Buy", "Order", "Receipt"],
                            "teacher_notes": "code: \"EN-SPK-A1-003\"\ncando: \"Can order food, drinks, and buy basic goods in shop transactions.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Asking for & Giving Directions",
                            "grammar": ["Prepositions of place", "Imperatives (Turn left, Go straight)"],
                            "vocabulary": ["Street", "Corner", "Left", "Right", "Straight ahead", "Near"],
                            "teacher_notes": "code: \"EN-SPK-A1-004\"\ncando: \"Can ask for and give basic street directions.\""
                        }
                    ]
                }
            ],
            "A2": [
                {
                    "unit": 1,
                    "title": "Interactive Everyday Speech",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Making Plans & Comparing Options",
                            "grammar": ["Going to vs Present Continuous", "Comparatives (better, cheaper)"],
                            "vocabulary": ["Schedule", "Available", "Prefer", "Option", "Suggest"],
                            "teacher_notes": "code: \"EN-SPK-A2-001\"\ncando: \"Can discuss plans, make arrangements, and compare alternatives in conversation.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Telling Short Personal Stories",
                            "grammar": ["Past Simple", "Time connectors (first, then, after that)"],
                            "vocabulary": ["Yesterday", "Last week", "Suddenly", "Happened", "Memorable"],
                            "teacher_notes": "code: \"EN-SPK-A2-002\"\ncando: \"Can narrate a short personal story or past experience.\""
                        }
                    ]
                }
            ],
            "B1": [
                {
                    "unit": 1,
                    "title": "Conversational Fluency & Spoken Interaction",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Expressing & Justifying Opinions",
                            "grammar": ["In my opinion...", "Because / As a result", "First conditional for future results"],
                            "vocabulary": ["Perspective", "Believe", "Argue", "Advantage", "Disadvantage"],
                            "teacher_notes": "code: \"EN-SPK-B1-001\"\ncando: \"Can express clear personal opinions and justify choices in discussions.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Polite Disagreement & Interrupting",
                            "grammar": ["Modal verbs for politeness (could, would)", "Question tags for checking"],
                            "vocabulary": ["I see your point, but...", "May I add something?", "Respectfully", "Alternative"],
                            "teacher_notes": "code: \"EN-SPK-B1-002\"\ncando: \"Can interrupt politely and express disagreement diplomatically in group discussions.\""
                        }
                    ]
                }
            ],
            "B2": [
                {
                    "unit": 1,
                    "title": "Extended Monologues & Nuanced Spoken Communication",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Building & Defending Arguments",
                            "grammar": ["Discourse markers for contrast and addition", "Third conditional & wish for hypothetical past"],
                            "vocabulary": ["Substantiate", "Assertion", "Premise", "Counter-argument", "Crucial"],
                            "teacher_notes": "code: \"EN-SPK-B2-001\"\ncando: \"Can construct logical monologues and defend complex positions in active debates.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Diplomatic Hedging & Floor Management",
                            "grammar": ["Passive reporting structures", "Advanced modal expressions"],
                            "vocabulary": ["Admittedly", "To a certain extent", "Steer the conversation", "Summarize"],
                            "teacher_notes": "code: \"EN-SPK-B2-002\"\ncando: \"Can manage conversation flow, hedge statements, and mediate discussions.\""
                        }
                    ]
                }
            ],
            "C1": [
                {
                    "unit": 1,
                    "title": "Executive Spoken Rhetoric & Register Mastery",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Rhetorical Devices & Persuasive Monologues",
                            "grammar": ["Inversion for emphasis", "Advanced cleft sentences"],
                            "vocabulary": ["Compelling", "Eloquence", "Resonate", "Articulate", "Understatement"],
                            "teacher_notes": "code: \"EN-SPK-C1-001\"\ncando: \"Can deliver persuasive monologues using rhetorical techniques and register shifts.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Nuanced Humor, Irony & Subtle Floor Steering",
                            "grammar": ["Subjunctive forms", "Idiomatic phrasing and metaphor"],
                            "vocabulary": ["Nuance", "Subtlety", "Sarcasm", "Irony", "De-escalation"],
                            "teacher_notes": "code: \"EN-SPK-C1-002\"\ncando: \"Can use subtle humor, irony, and diplomatic de-escalation in high-stakes spoken exchanges.\""
                        }
                    ]
                }
            ],
            "C2": [
                {
                    "unit": 1,
                    "title": "Mastery of Native-Level Spoken Discourse",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Spontaneous High-Level Debate & Keynote Monologue",
                            "grammar": ["Complex multi-clause synthesis", "Unrestricted stylistic variation"],
                            "vocabulary": ["Impromptu", "Spontaneity", "Synthesis", "Mastery", "Command"],
                            "teacher_notes": "code: \"EN-SPK-C2-001\"\ncando: \"Can present keynotes and participate in spontaneous debates with native-level fluency and precision.\""
                        }
                    ]
                }
            ]
        }
    },
    "exam": {
        "levels": ["B1", "B2", "C1", "C2"],
        "curriculum_templates": {
            "B1": [
                {
                    "unit": 1,
                    "title": "B1 Exam Foundations: Listening & Reading Tasks",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "exam",
                            "title": "B1 Photo Description & Long Turn Task",
                            "grammar": ["Present continuous for actions in pictures", "Prepositions of position (in the foreground, on the left)"],
                            "vocabulary": ["Foreground", "Background", "Appears to be", "Look like", "Describe"],
                            "teacher_notes": "code: \"EN-EXM-B1-001\"\ncando: \"Can describe pictures and complete 1-minute long turns for B1 oral exams.\""
                        },
                        {
                            "lesson": 2,
                            "type": "exam",
                            "title": "B1 Email & Essay Writing Structure",
                            "grammar": ["Connectors of addition and contrast", "Formal vs informal greetings and closings"],
                            "vocabulary": ["Dear", "Sincerely", "In addition", "However", "To conclude"],
                            "teacher_notes": "code: \"EN-EXM-B1-002\"\ncando: \"Can structure short emails and essays following B1 exam criteria.\""
                        }
                    ]
                }
            ],
            "B2": [
                {
                    "unit": 1,
                    "title": "B2 Exam Mastery: Cambridge FCE / IELTS 6.5 Strategy",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "exam",
                            "title": "Comparing & Speculating on Exam Visuals",
                            "grammar": ["Modals of deduction (must be, might be, can't be)", "Comparative structures"],
                            "vocabulary": ["Whereas", "In contrast", "Likely", "Deduce", "Speculate"],
                            "teacher_notes": "code: \"EN-EXM-B2-001\"\ncando: \"Can compare candidate photos and speculate on underlying contexts under exam conditions.\""
                        },
                        {
                            "lesson": 2,
                            "type": "exam",
                            "title": "B2 Essay Writing: Argumentative & Discursive",
                            "grammar": ["Passive reporting verbs", "Complex linking phrases"],
                            "vocabulary": ["Furthermore", "On the one hand", "Consequently", "Significant", "Evidence"],
                            "teacher_notes": "code: \"EN-EXM-B2-002\"\ncando: \"Can produce structured 140-190 word argumentative essays with clear paragraphs.\""
                        }
                    ]
                }
            ],
            "C1": [
                {
                    "unit": 1,
                    "title": "C1 Advanced Exam Strategy: CAE / IELTS 7.5+",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "exam",
                            "title": "C1 Use of English: Key Word Transformations",
                            "grammar": ["Inversion", "Cleft sentences", "Advanced verb-noun collocations"],
                            "vocabulary": ["No sooner", "Little did they know", "Account for", "Bound to"],
                            "teacher_notes": "code: \"EN-EXM-C1-001\"\ncando: \"Can complete complex key word transformation and Use of English tasks.\""
                        },
                        {
                            "lesson": 2,
                            "type": "exam",
                            "title": "C1 Formal Proposal & Report Writing",
                            "grammar": ["Formal passive constructions", "Subjunctive and recommendation structures"],
                            "vocabulary": ["Outline", "Recommend", "Implement", "Feasibility", "Conclusion"],
                            "teacher_notes": "code: \"EN-EXM-C1-002\"\ncando: \"Can draft executive reports and proposals adhering to academic exam standards.\""
                        }
                    ]
                }
            ],
            "C2": [
                {
                    "unit": 1,
                    "title": "C2 Proficiency Exam Mastery: CPE / IELTS 8.5-9.0",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "exam",
                            "title": "C2 Textual Synthesis & Critical Analysis",
                            "grammar": ["Subtle stylistic inversions", "Dense nominalization"],
                            "vocabulary": ["Paraphrase", "Synthesize", "Discrepancy", "Juxtaposition", "Critique"],
                            "teacher_notes": "code: \"EN-EXM-C2-001\"\ncando: \"Can synthesize information from two contrasting texts and write polished critical essays.\""
                        }
                    ]
                }
            ]
        }
    },
    "travelling": {
        "levels": ["A1", "A2", "B1"],
        "curriculum_templates": {
            "A1": [
                {
                    "unit": 1,
                    "title": "Travel Essentials & Getting Around",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "vocab",
                            "title": "Airport & Transit Vocabulary",
                            "grammar": ["Where is...?", "Ticket / Passport / Luggage"],
                            "vocabulary": ["Airport", "Boarding pass", "Gate", "Luggage", "Customs", "Passport"],
                            "teacher_notes": "code: \"EN-TRV-A1-001\"\ncando: \"Can navigate airport check-in, passport control, and luggage claim.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Hotel Check-In & Reservations",
                            "grammar": ["I have a reservation for...", "Can I have...?"],
                            "vocabulary": ["Hotel", "Reservation", "Room", "Key card", "Wi-Fi", "Breakfast"],
                            "teacher_notes": "code: \"EN-TRV-A1-002\"\ncando: \"Can check into a hotel and request basic room amenities.\""
                        }
                    ]
                }
            ],
            "A2": [
                {
                    "unit": 1,
                    "title": "Navigating Destinations & Local Experiences",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Ordering Local Food & Special Requests",
                            "grammar": ["Could we get the menu?", "I am allergic to..."],
                            "vocabulary": ["Specialty", "Bill", "Tip", "Allergy", "Recommendation", "Delicious"],
                            "teacher_notes": "code: \"EN-TRV-A2-001\"\ncando: \"Can order regional dishes, communicate dietary needs, and handle payment.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Handling Travel Delays & Transport Changes",
                            "grammar": ["What time does the train leave?", "Is there a delay?"],
                            "vocabulary": ["Delay", "Cancelled", "Platform", "Schedule", "Transfer", "Refund"],
                            "teacher_notes": "code: \"EN-TRV-A2-002\"\ncando: \"Can ask about timetable changes, ticket exchanges, and travel delays.\""
                        }
                    ]
                }
            ],
            "B1": [
                {
                    "unit": 1,
                    "title": "Independent Exploration & Travel Problem Solving",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Dealing with Lost Property & Insurance Claims",
                            "grammar": ["Past continuous + past simple for describing incidents", "Indirect questions"],
                            "vocabulary": ["Lost property", "Insurance", "Report", "Stolen", "Claim", "Receipt"],
                            "teacher_notes": "code: \"EN-TRV-B1-001\"\ncando: \"Can file a report for lost luggage or items and explain circumstances clearly.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Guided Tours, History & Cultural Exchanges",
                            "grammar": ["Passive voice for historic facts", "Relative clauses for places"],
                            "vocabulary": ["Monument", "Heritage", "Architecture", "Exhibition", "Guide", "Century"],
                            "teacher_notes": "code: \"EN-TRV-B1-002\"\ncando: \"Can participate in guided cultural tours and discuss local history.\""
                        }
                    ]
                }
            ]
        }
    },
    "professional": {
        "levels": ["B1", "B2", "C1", "C2"],
        "curriculum_templates": {
            "B1": [
                {
                    "unit": 1,
                    "title": "Workplace Communication & Professional Basics",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "vocab",
                            "title": "Professional Email Writing & Register",
                            "grammar": ["Formal request phrasing", "Future arrangements with Present Continuous"],
                            "vocabulary": ["Regarding", "Attached", "Confirm", "Schedule", "Sincerely", "Regards"],
                            "teacher_notes": "code: \"EN-PRO-B1-001\"\ncando: \"Can write clear formal emails for routine workplace requests and scheduling.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Participating in Team Meetings & Project Updates",
                            "grammar": ["Present Perfect for recent updates", "Modal verbs for suggestions"],
                            "vocabulary": ["Agenda", "Milestone", "Deadline", "Action point", "Status update"],
                            "teacher_notes": "code: \"EN-PRO-B1-002\"\ncando: \"Can report project status and contribute to team meeting agendas.\""
                        }
                    ]
                }
            ],
            "B2": [
                {
                    "unit": 1,
                    "title": "Business Negotiations & Workplace Leadership",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Commercial Negotiations & Compromise",
                            "grammar": ["Conditionals (First & Second) in bargaining", "Hedging language"],
                            "vocabulary": ["Bargain", "Trade-off", "Terms", "Contract", "Agreement", "Concede"],
                            "teacher_notes": "code: \"EN-PRO-B2-001\"\ncando: \"Can negotiate commercial terms and propose mutual trade-offs in business deals.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Delivering Corporate Presentations & Q&A",
                            "grammar": ["Signposting language", "Passive voice for objective reporting"],
                            "vocabulary": ["Overview", "Metric", "Strategy", "Forecast", "Stakeholder", "ROI"],
                            "teacher_notes": "code: \"EN-PRO-B2-002\"\ncando: \"Can structure and deliver professional slide presentations and manage audience Q&A.\""
                        }
                    ]
                }
            ],
            "C1": [
                {
                    "unit": 1,
                    "title": "Executive Strategy & High-Stakes Stakeholder Relations",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Executive Communication & Boardroom Mediation",
                            "grammar": ["Advanced diplomatic phrasing", "Subtleties of tone and emphasis"],
                            "vocabulary": ["Governance", "Consensus", "Mitigate", "Leverage", "Synergy", "Alignment"],
                            "teacher_notes": "code: \"EN-PRO-C1-001\"\ncando: \"Can mediate boardroom conflicts, lead executive discussions, and align stakeholder interests.\""
                        },
                        {
                            "lesson": 2,
                            "type": "vocab",
                            "title": "Strategic Whitepapers & Industry Reports",
                            "grammar": ["Dense nominal structures", "Formal academic/corporate register"],
                            "vocabulary": ["Disruption", "Benchmark", "Paradigm", "Infrastructure", "Viability"],
                            "teacher_notes": "code: \"EN-PRO-C1-002\"\ncando: \"Can draft comprehensive strategic reports and corporate whitepapers.\""
                        }
                    ]
                }
            ],
            "C2": [
                {
                    "unit": 1,
                    "title": "C-Suite Leadership & Global Market Discourse",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Global Market Keynote & Media Interviews",
                            "grammar": ["Flawless register switching", "Mastery of rhetorical device"],
                            "vocabulary": ["Visionary", "Enterprise", "Monetization", "Scalability", "Transformation"],
                            "teacher_notes": "code: \"EN-PRO-C2-001\"\ncando: \"Can deliver C-suite speeches, handle press interviews, and address global market audiences.\""
                        }
                    ]
                }
            ]
        }
    },
    "relocation": {
        "levels": ["A2", "B1", "B2", "C1"],
        "curriculum_templates": {
            "A2": [
                {
                    "unit": 1,
                    "title": "Housing & Essential Living Setup",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "vocab",
                            "title": "Renting a Flat & Utility Contracts",
                            "grammar": ["Have to / Don't have to for lease rules", "Questions with How much / When"],
                            "vocabulary": ["Rent", "Deposit", "Landlord", "Tenant", "Lease", "Utilities", "Electricity"],
                            "teacher_notes": "code: \"EN-RLC-A2-001\"\ncando: \"Can enquire about rental listings, understand lease conditions, and set up utilities.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Registering Local Services & Banking",
                            "grammar": ["Can I open...", "I need to register..."],
                            "vocabulary": ["Account", "Bank", "Proof of address", "Registration", "ID", "Form"],
                            "teacher_notes": "code: \"EN-RLC-A2-002\"\ncando: \"Can complete administrative tasks like opening a bank account and registering locally.\""
                        }
                    ]
                }
            ],
            "B1": [
                {
                    "unit": 1,
                    "title": "Healthcare, Education & Community Integration",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Medical Appointments & Health System Navigation",
                            "grammar": ["Should / Shouldn't for medical advice", "Describing symptoms in past simple"],
                            "vocabulary": ["Doctor", "Clinic", "Prescription", "Insurance", "Symptom", "Appointment"],
                            "teacher_notes": "code: \"EN-RLC-B1-001\"\ncando: \"Can schedule medical appointments, describe symptoms, and handle prescriptions.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "School Enrollment & Neighborhood Life",
                            "grammar": ["Indirect questions for school enquiries", "Comparatives for area amenities"],
                            "vocabulary": ["School", "Enrollment", "Community center", "Council", "Facility", "Tax"],
                            "teacher_notes": "code: \"EN-RLC-B1-002\"\ncando: \"Can navigate school registration for family and interact with local council services.\""
                        }
                    ]
                }
            ],
            "B2": [
                {
                    "unit": 1,
                    "title": "Legal Rights, Residency & Long-term Integration",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Residency Permits & Legal Administration",
                            "grammar": ["Passive voice for administrative procedures", "Complex conditional requirements"],
                            "vocabulary": ["Residency", "Permit", "Visa", "Compliance", "Immigration", "Lawyer"],
                            "teacher_notes": "code: \"EN-RLC-B2-001\"\ncando: \"Can handle complex residency applications, visa renewals, and legal documentation.\""
                        },
                        {
                            "lesson": 2,
                            "type": "spoken",
                            "title": "Property Purchase & Mortgage Negotiation",
                            "grammar": ["Modal verbs of obligation and recommendation", "Financial comparatives"],
                            "vocabulary": ["Mortgage", "Interest rate", "Equity", "Notary", "Deed", "Investment"],
                            "teacher_notes": "code: \"EN-RLC-B2-002\"\ncando: \"Can negotiate property purchases, mortgages, and legal contracts with advisors.\""
                        }
                    ]
                }
            ],
            "C1": [
                {
                    "unit": 1,
                    "title": "Civic Participation & Cultural Adaptation",
                    "lessons": [
                        {
                            "lesson": 1,
                            "type": "spoken",
                            "title": "Navigating Complex Civic Rights & Tax Systems",
                            "grammar": ["Formal reporting structures", "Nuanced conditional clauses"],
                            "vocabulary": ["Taxation", "Liability", "Exemption", "Jurisdiction", "Civic", "Pension"],
                            "teacher_notes": "code: \"EN-RLC-C1-001\"\ncando: \"Can manage tax filings, pension transfers, and navigate civic rights effortlessly.\""
                        }
                    ]
                }
            ]
        }
    }
}

def build_curriculums():
    generated_files = []
    for track_id, config in TRACK_CONFIGS.items():
        track_dir = os.path.join("curriculum", "en", track_id)
        os.makedirs(track_dir, exist_ok=True)

        for level in config["levels"]:
            units = config["curriculum_templates"].get(level, [])
            data = {
                "language": "en",
                "course_type": track_id,
                "level": level,
                "units": units
            }
            file_path = os.path.join(track_dir, f"{level}.json")
            with open(file_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            generated_files.append(file_path)
            print(f"Generated: {file_path}")

    return generated_files

if __name__ == "__main__":
    build_curriculums()

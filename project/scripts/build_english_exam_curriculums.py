import json
import os

def generate_b1():
    units = [
        {
            "unit": 1,
            "title": "B1 Listening Comprehension & Audio Task Strategies",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "B1 Listening: Short Announcements & Monologues",
                    "duration_minutes": 60,
                    "grammar": [
                        "Imperatives and modal verbs for instructions (must, should)",
                        "Time prepositions (before, after, until)"
                    ],
                    "vocabulary": [
                        "Announcement",
                        "Delay",
                        "Platform",
                        "Passenger",
                        "Departure"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B1-001\"\ncando: \"Can extract key factual details from short public announcements and monologues.\"\nstrategy: \"Timing: 1-2 mins per clip (played twice). Pitfall: Choosing options with matching words that alter context. Criteria: Detail comprehension and distractor avoidance.\"",
                    "recycled": "Foundational communication & basic level vocabulary"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "B1 Listening: Transactional Conversations & Multiple Choice",
                    "duration_minutes": 60,
                    "grammar": [
                        "Present continuous for current activities",
                        "Indirect questions for polite requests"
                    ],
                    "vocabulary": [
                        "Reservation",
                        "Schedule",
                        "Confirm",
                        "Available",
                        "Inquiry"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-B1-002\"\ncando: \"Can understand main points and agreement in short transactional conversations.\"\nstrategy: \"Timing: 2 mins per dialogue. Pitfall: Focus on first speaker before full agreement is reached. Criteria: Identifying consensus and speaker intention.\"",
                    "recycled": "Imperatives and modal verbs for instructions, Time prepositions, Platform, Announcement"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "B1 Listening: Note Completion & Gap Fill",
                    "duration_minutes": 60,
                    "grammar": [
                        "Past simple for completed events",
                        "Cardinal and ordinal numbers / dates"
                    ],
                    "vocabulary": [
                        "Registration",
                        "Location",
                        "Equipment",
                        "Fee",
                        "Contact"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B1-003\"\ncando: \"Can listen to an informational talk and complete missing notes with exact words.\"\nstrategy: \"Timing: 5 mins listening + note filling. Pitfall: Misspelling common numbers or dates. Criteria: Spelling accuracy and concise factual extraction.\"",
                    "recycled": "Present continuous for current activities, Indirect questions, Reservation, Schedule"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "B1 Listening: Extended Talk & Interview Comprehension",
                    "duration_minutes": 60,
                    "grammar": [
                        "Present perfect with for/since",
                        "Connectors of cause and effect (because, so)"
                    ],
                    "vocabulary": [
                        "Background",
                        "Experience",
                        "Challenge",
                        "Achievement",
                        "Perspective"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-B1-004\"\ncando: \"Can follow a 6-minute radio interview and identify speaker opinions and facts.\"\nstrategy: \"Timing: 6 mins total audio duration. Pitfall: Confusing speaker's past feelings with present attitude. Criteria: Global gist and attitude tracking.\"",
                    "recycled": "Past simple for completed events, Cardinal and ordinal numbers, Registration, Location"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "B1 Listening: Full Audio Strategy Review & Timed Drill",
                    "duration_minutes": 60,
                    "grammar": [
                        "Synthesis of B1 listening structures",
                        "Reported speech for audio summaries"
                    ],
                    "vocabulary": [
                        "Transcript",
                        "Key word",
                        "Distractor",
                        "Option",
                        "Summary"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 25,
                    "teacher_notes": "code: \"EN-EXM-B1-005\"\ncando: \"Can complete a full 30-minute B1 listening section with exam timing.\"\nstrategy: \"Timing: Strict 30-minute timed section. Pitfall: Spending too long on missed items instead of moving forward. Criteria: Overall listening accuracy under timed test conditions.\"",
                    "recycled": "Present perfect with for/since, Connectors of cause and effect, Background, Experience"
                }
            ]
        },
        {
            "unit": 2,
            "title": "B1 Reading Comprehension & Use of English",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "B1 Reading: Notices, Signs & Short Messages",
                    "duration_minutes": 60,
                    "grammar": [
                        "Modal verbs of obligation and permission (must, can, allowed to)",
                        "Zero conditional for general rules"
                    ],
                    "vocabulary": [
                        "Prohibited",
                        "Mandatory",
                        "Entrance",
                        "Caution",
                        "Staff"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B1-006\"\ncando: \"Can read public notices and messages to understand real-world rules and warnings.\"\nstrategy: \"Timing: 45 seconds per notice. Pitfall: Misinterpreting negative permissions (must not vs don't have to). Criteria: Rapid scanning and paraphrase recognition.\"",
                    "recycled": "Synthesis of B1 listening structures, Reported speech, Transcript, Distractor"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "B1 Reading: Informational Text Matching & Profiles",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comparative structures (as... as, more than)",
                        "Relative pronouns (who, which, where)"
                    ],
                    "vocabulary": [
                        "Requirement",
                        "Suitable",
                        "Preference",
                        "Feature",
                        "Match"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B1-007\"\ncando: \"Can match 5 person profiles with appropriate short informational descriptions.\"\nstrategy: \"Timing: 8 mins total. Pitfall: Matching a description that satisfies only 2 out of 3 user criteria. Criteria: Multi-condition matching accuracy.\"",
                    "recycled": "Modal verbs of obligation, Zero conditional for rules, Prohibited, Mandatory"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "B1 Reading: Multiple-Choice Text Analysis & Gist",
                    "duration_minutes": 60,
                    "grammar": [
                        "Past continuous vs past simple",
                        "Adverbs of degree (extremely, quite, fairly)"
                    ],
                    "vocabulary": [
                        "Article",
                        "Main idea",
                        "Attitude",
                        "Opinion",
                        "Conclusion"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-B1-008\"\ncando: \"Can read a 400-word article to answer multiple-choice questions on main ideas and writer opinion.\"\nstrategy: \"Timing: 10 mins for text and 5 questions. Pitfall: Choosing options that reflect personal beliefs rather than text facts. Criteria: Identifying explicit text evidence.\"",
                    "recycled": "Comparative structures, Relative pronouns, Requirement, Suitable"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "B1 Use of English: Gapped Text & Basic Cloze",
                    "duration_minutes": 60,
                    "grammar": [
                        "Prepositions of place and time",
                        "Verb + preposition collocations (depend on, interested in)"
                    ],
                    "vocabulary": [
                        "Context",
                        "Option",
                        "Grammatical",
                        "Collocation",
                        "Sentence"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B1-009\"\ncando: \"Can complete a gapped text choosing the correct grammar and vocabulary items.\"\nstrategy: \"Timing: 7 mins for 10 gaps. Pitfall: Ignoring words immediately following the gap (e.g. prepositions). Criteria: Collocation and preposition accuracy in context.\"",
                    "recycled": "Past continuous vs past simple, Adverbs of degree, Article, Attitude"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "B1 Reading & Language Strategy Review",
                    "duration_minutes": 60,
                    "grammar": [
                        "Synthesis of B1 reading structures",
                        "Cohesive devices (however, although, therefore)"
                    ],
                    "vocabulary": [
                        "Passage",
                        "Cohesion",
                        "Pacing",
                        "Accuracy",
                        "Elimination"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-B1-010\"\ncando: \"Can complete a 35-minute timed B1 reading module applying scanning and elimination techniques.\"\nstrategy: \"Timing: 35 mins timed section. Pitfall: Spending over 2 mins on a single gapped item. Criteria: Pacing and accuracy across diverse text types.\"",
                    "recycled": "Prepositions of place and time, Verb + preposition collocations, Context, Collocation"
                }
            ]
        },
        {
            "unit": 3,
            "title": "B1 Written Production & Formal Composition",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "B1 Email & Essay Writing Structure",
                    "duration_minutes": 60,
                    "grammar": [
                        "Connectors of addition and contrast",
                        "Formal vs informal greetings and closings"
                    ],
                    "vocabulary": [
                        "Dear",
                        "Sincerely",
                        "In addition",
                        "However",
                        "To conclude"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B1-011\"\ncando: \"Can structure short emails and essays following B1 exam criteria.\"\nstrategy: \"Timing: 20 mins for email/essay draft. Pitfall: Combining informal slang with formal email formulas. Criteria: Content coverage, paragraph layout, and register consistency.\"",
                    "recycled": "Synthesis of B1 reading structures, Cohesive devices, Passage, Cohesion"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "B1 Writing: Informal Email & Requesting Information",
                    "duration_minutes": 60,
                    "grammar": [
                        "Asking questions politely (Would it be possible to...?)",
                        "Future plans with going to and present continuous"
                    ],
                    "vocabulary": [
                        "Invitation",
                        "Suggest",
                        "Arrange",
                        "Details",
                        "Looking forward to"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B1-012\"\ncando: \"Can write a 100-word informal email replying to notes and asking for details.\"\nstrategy: \"Timing: 20 mins total. Pitfall: Missing one of the required prompt bullet points. Criteria: Full task completion and friendly informal tone.\"",
                    "recycled": "Connectors of addition and contrast, Formal vs informal greetings, Dear, Sincerely"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "B1 Writing: Formal Letter & Complaint Handling",
                    "duration_minutes": 60,
                    "grammar": [
                        "Passive voice for polite complaints (I was informed that...)",
                        "Modal verbs for demands (I would appreciate a refund)"
                    ],
                    "vocabulary": [
                        "Dissatisfied",
                        "Replacement",
                        "Apology",
                        "Issue",
                        "Resolution"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B1-013\"\ncando: \"Can write a formal letter expressing dissatisfaction and requesting action.\"\nstrategy: \"Timing: 25 mins. Pitfall: Using overly emotional language instead of polite formal phrasing. Criteria: Communicative achievement and formal style.\"",
                    "recycled": "Asking questions politely, Future plans with going to, Suggest, Arrange"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "B1 Writing: Opinion Essay & Supporting Reasons",
                    "duration_minutes": 60,
                    "grammar": [
                        "Expressing personal views (In my view, I strongly believe)",
                        "First conditional for future outcomes"
                    ],
                    "vocabulary": [
                        "Advantage",
                        "Disadvantage",
                        "Furthermore",
                        "On the other hand",
                        "In summary"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-B1-014\"\ncando: \"Can draft a structured 100-word opinion essay with introduction, points, and conclusion.\"\nstrategy: \"Timing: 25 mins. Pitfall: Writing one long continuous block without paragraph structure. Criteria: Organization and clear logical progression.\"",
                    "recycled": "Passive voice for complaints, Modal verbs for demands, Dissatisfied, Replacement"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "B1 Writing: Review & Marking Criteria Self-Assessment",
                    "duration_minutes": 60,
                    "grammar": [
                        "Self-correction and proofreading strategies",
                        "Punctuation and capitalisation rules"
                    ],
                    "vocabulary": [
                        "Criteria",
                        "Proofread",
                        "Structure",
                        "Paragraph",
                        "Word count"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-B1-015\"\ncando: \"Can review and self-correct B1 written compositions against official exam rubrics.\"\nstrategy: \"Timing: 5 mins proofreading stage after writing. Pitfall: Submitting without checking verb agreement and spelling. Criteria: Self-editing mastery and error reduction.\"",
                    "recycled": "Expressing personal views, First conditional, Advantage, Disadvantage"
                }
            ]
        },
        {
            "unit": 4,
            "title": "B1 Spoken Production & Interactive Tasks",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "B1 Photo Description & Long Turn Task",
                    "duration_minutes": 60,
                    "grammar": [
                        "Present continuous for actions in pictures",
                        "Prepositions of position (in the foreground, on the left)"
                    ],
                    "vocabulary": [
                        "Foreground",
                        "Background",
                        "Appears to be",
                        "Look like",
                        "Describe"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 80,
                    "teacher_notes": "code: \"EN-EXM-B1-016\"\ncando: \"Can describe pictures and complete 1-minute long turns for B1 oral exams.\"\nstrategy: \"Timing: 1-minute uninterrupted monologue. Pitfall: Stopping after 20 seconds or giving a list of isolated words. Criteria: Continuous spoken flow and positional vocabulary.\"",
                    "recycled": "Self-correction and proofreading strategies, Punctuation rules, Criteria, Proofread"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "B1 Speaking: Describing Experiences & Personal Preferences",
                    "duration_minutes": 60,
                    "grammar": [
                        "Used to for past habits",
                        "Would rather / Prefer + -ing"
                    ],
                    "vocabulary": [
                        "Hobby",
                        "Memorable",
                        "Occasion",
                        "Preferably",
                        "Experience"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 80,
                    "teacher_notes": "code: \"EN-EXM-B1-017\"\ncando: \"Can talk about personal life, past experiences, and preferences fluently.\"\nstrategy: \"Timing: 2 mins response. Pitfall: Repetitive use of basic verbs (like/good). Criteria: Lexical resource and grammatical range in personal topics.\"",
                    "recycled": "Present continuous for actions in pictures, Prepositions of position, Foreground, Background"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "B1 Speaking: Collaborative Task & Negotiating Choices",
                    "duration_minutes": 60,
                    "grammar": [
                        "Suggestions (How about..., Shall we...?)",
                        "Agreeing and disagreeing politely (I agree, but...)"
                    ],
                    "vocabulary": [
                        "Option",
                        "Decision",
                        "Suggestion",
                        "Compromise",
                        "Partner"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-B1-018\"\ncando: \"Can interact with a partner to discuss choices, evaluate options, and reach a consensus.\"\nstrategy: \"Timing: 2 mins discussion + 1 min decision. Pitfall: Monopolizing talk without asking for partner's opinion. Criteria: Interactive communication and collaborative turn-taking.\"",
                    "recycled": "Used to for past habits, Would rather / Prefer, Hobby, Memorable"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "B1 Speaking: Discussion & Justifying Ideas",
                    "duration_minutes": 60,
                    "grammar": [
                        "Because / As a result for giving reasons",
                        "Second conditional for imaginary scenarios (If I could, I would)"
                    ],
                    "vocabulary": [
                        "Reason",
                        "Opinion",
                        "Impact",
                        "Belief",
                        "Justify"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-B1-019\"\ncando: \"Can participate in a 3-minute discussion answering examiner questions on broader topics.\"\nstrategy: \"Timing: 3 mins group discussion. Pitfall: Giving one-word answers (Yes/No) without elaboration. Criteria: Expanding answers with reasons and examples.\"",
                    "recycled": "Suggestions, Agreeing and disagreeing politely, Option, Decision"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "B1 Speaking: Live Interview Simulation & Strategy Review",
                    "duration_minutes": 60,
                    "grammar": [
                        "Synthesis of B1 spoken structures",
                        "Hesitation and filler phrases (Let me see, That's an interesting question)"
                    ],
                    "vocabulary": [
                        "Examiner",
                        "Candidate",
                        "Fluency",
                        "Pronunciation",
                        "Intonation"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 90,
                    "teacher_notes": "code: \"EN-EXM-B1-020\"\ncando: \"Can complete a full 10-minute B1 pair speaking test simulation.\"\nstrategy: \"Timing: 10-12 mins full test format. Pitfall: Freezing when an unknown word is encountered. Criteria: Global fluency, interactive communication, and pronunciation clarity.\"",
                    "recycled": "Because / As a result, Second conditional, Reason, Justify"
                }
            ]
        },
        {
            "unit": 5,
            "title": "B1 Full Mock-Exam Practice & Skill Integration",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "B1 Mock Exam: Listening Paper Simulation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of B1 listening structures"
                    ],
                    "vocabulary": [
                        "Mock exam",
                        "Audio track",
                        "Answer sheet",
                        "Time management",
                        "Review"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B1-021\"\ncando: \"Can complete a full timed B1 listening exam paper under formal test conditions.\"\nstrategy: \"Timing: 30 mins audio test + 5 mins answer transfer. Pitfall: Leaving blanks on multiple-choice items. Criteria: Full listening mark calculation and error audit.\"",
                    "recycled": "Synthesis of B1 spoken structures, Hesitation and filler phrases, Examiner, Fluency"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "B1 Mock Exam: Reading & Use of English Paper Simulation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of B1 reading & grammar structures"
                    ],
                    "vocabulary": [
                        "Time limit",
                        "Text passage",
                        "Multiple choice",
                        "Gap fill",
                        "Score"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B1-022\"\ncando: \"Can complete a full 45-minute B1 reading paper adhering strictly to time constraints.\"\nstrategy: \"Timing: 45 mins limit. Pitfall: Mismanaging time between long text and short notices. Criteria: Scaled score evaluation across reading parts.\"",
                    "recycled": "Comprehensive review of B1 listening, Mock exam, Answer sheet"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "B1 Mock Exam: Writing Paper Simulation & Self-Correction",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of B1 writing connectors and register"
                    ],
                    "vocabulary": [
                        "Prompt",
                        "Word limit",
                        "Drafting",
                        "Editing",
                        "Assessment"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B1-023\"\ncando: \"Can complete two B1 writing tasks (email and essay) within 45 minutes.\"\nstrategy: \"Timing: 45 mins for 2 tasks. Pitfall: Exceeding or falling severely short of word count (100 words each). Criteria: Assessment against official B1 writing criteria.\"",
                    "recycled": "Comprehensive review of B1 reading, Time limit, Passage"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "B1 Mock Exam: Full Speaking Pair Test Simulation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of B1 oral interaction structures"
                    ],
                    "vocabulary": [
                        "Simulation",
                        "Pair work",
                        "Prompt card",
                        "Turn-taking",
                        "Feedback"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 90,
                    "teacher_notes": "code: \"EN-EXM-B1-024\"\ncando: \"Can perform all 4 parts of a live B1 oral examination with a peer and examiner.\"\nstrategy: \"Timing: 12 mins complete oral exam. Pitfall: Breaking interaction and remaining silent. Criteria: Detailed assessment across Grammar, Vocabulary, Discourse, and Pronunciation.\"",
                    "recycled": "Comprehensive review of B1 writing, Prompt, Word limit"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "B1 Exam Final Review: Timing Tactics, Pitfalls & Score Optimization",
                    "duration_minutes": 60,
                    "grammar": [
                        "Integrated review of key B1 exam grammatical focus points"
                    ],
                    "vocabulary": [
                        "Strategy",
                        "Confidence",
                        "Pitfall",
                        "Target score",
                        "Mastery"
                    ],
                    "practice_types": ["exam"],
                    "speaking_percent": 40,
                    "teacher_notes": "code: \"EN-EXM-B1-025\"\ncando: \"Can apply personalized test-taking strategies and avoid common pitfalls to maximize B1 exam score.\"\nstrategy: \"Timing: Exam strategy breakdown. Pitfall: Anxiety-driven rush in initial test minutes. Criteria: Overall exam readiness and confidence optimization.\"",
                    "recycled": "Comprehensive review of B1 oral interaction, Simulation, Prompt card"
                }
            ]
        }
    ]
    return {
        "language": "en",
        "course_type": "exam",
        "level": "B1",
        "units": units
    }


def generate_b2():
    units = [
        {
            "unit": 1,
            "title": "B2 Listening Comprehension & Audio Analysis",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "B2 Listening: Short Monologues & Gist Identification",
                    "duration_minutes": 60,
                    "grammar": [
                        "Modals of deduction in past and present (must have, might be)",
                        "Reported speech with complex reporting verbs"
                    ],
                    "vocabulary": [
                        "Gist",
                        "Attitude",
                        "Context",
                        "Implication",
                        "Perspective"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B2-001\"\ncando: \"Can identify main feelings, gist, and context in short B2 monologues.\"\nstrategy: \"Timing: 1 min per clip. Pitfall: Fixating on unknown vocabulary instead of overall tone. Criteria: Accurate attitude and feeling identification.\"",
                    "recycled": "Foundational communication & basic level vocabulary"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "B2 Listening: Multi-Speaker Conversations & Attitude",
                    "duration_minutes": 60,
                    "grammar": [
                        "Mixed conditionals (If I had studied..., I would be...)",
                        "Wish / If only for past regrets"
                    ],
                    "vocabulary": [
                        "Disagreement",
                        "Agreement",
                        "Emphasis",
                        "Skeptical",
                        "Enthusiastic"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-B2-002\"\ncando: \"Can track opinions, agreement, and skepticism across multi-speaker discussions.\"\nstrategy: \"Timing: 3 mins dialogue duration. Pitfall: Missing subtle vocal inflection signals of irony or doubt. Criteria: Distinguishing explicit vs implicit agreement.\"",
                    "recycled": "Modals of deduction in past and present, Reported speech, Gist, Attitude"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "B2 Listening: Sentence Completion & Technical Detail",
                    "duration_minutes": 60,
                    "grammar": [
                        "Passive voice in complex tenses (has been demonstrated)",
                        "Noun clauses as direct objects"
                    ],
                    "vocabulary": [
                        "Research",
                        "Findings",
                        "Invention",
                        "Methodology",
                        "Conclusion"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B2-003\"\ncando: \"Can extract exact terms from an informational talk to complete gapped sentences.\"\nstrategy: \"Timing: 8 mins talk duration. Pitfall: Changing the word form when copying target terms from audio. Criteria: Exact lexical and grammatical accuracy in gap fill.\"",
                    "recycled": "Mixed conditionals, Wish / If only, Disagreement, Skeptical"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "B2 Listening: Extended Interview & Speaker Perspective",
                    "duration_minutes": 60,
                    "grammar": [
                        "Relative clauses with prepositions (in which, to whom)",
                        "Cleft sentences for emphasis (What surprised me was...)"
                    ],
                    "vocabulary": [
                        "Interviewee",
                        "Journalist",
                        "Insight",
                        "Motivation",
                        "Obstacle"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-B2-004\"\ncando: \"Can follow a 10-minute radio interview and evaluate speaker motivations and insights.\"\nstrategy: \"Timing: 10 mins interview duration. Pitfall: Selecting options based on words used by interviewer rather than interviewee. Criteria: Accurate attribution of stance to correct speaker.\"",
                    "recycled": "Passive voice in complex tenses, Noun clauses, Research, Findings"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "B2 Listening: Audio Strategy Review & Distractor Avoidance",
                    "duration_minutes": 60,
                    "grammar": [
                        "Synthesis of B2 listening structures",
                        "Advanced connectors of contrast (whereas, while, nevertheless)"
                    ],
                    "vocabulary": [
                        "Distractor",
                        "Paraphrase",
                        "Inference",
                        "Subtlety",
                        "Accuracy"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 25,
                    "teacher_notes": "code: \"EN-EXM-B2-005\"\ncando: \"Can complete a full B2 listening paper with high accuracy and distractor resistance.\"\nstrategy: \"Timing: 40 mins total test duration. Pitfall: Falling for options that restate audio words in negated contexts. Criteria: Mastery over paraphrase recognition and distractor traps.\"",
                    "recycled": "Relative clauses with prepositions, Cleft sentences, Interviewee, Insight"
                }
            ]
        },
        {
            "unit": 2,
            "title": "B2 Reading Comprehension & Use of English",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "B2 Reading: Multiple Matching & Text Scanning",
                    "duration_minutes": 60,
                    "grammar": [
                        "Conditionals with provided that / as long as",
                        "Participle clauses (Having finished the report...)"
                    ],
                    "vocabulary": [
                        "Excerpt",
                        "Section",
                        "Match",
                        "Cross-reference",
                        "Scan"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B2-006\"\ncando: \"Can scan multiple short texts or paragraphs to locate specific detailed claims.\"\nstrategy: \"Timing: 15 mins for 10 matching items. Pitfall: Reading entire texts line-by-line instead of targeted scanning. Criteria: Speed scanning and paraphrase matching.\"",
                    "recycled": "Synthesis of B2 listening structures, Advanced connectors of contrast, Distractor, Paraphrase"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "B2 Reading: Gapped Text & Structural Cohesion",
                    "duration_minutes": 60,
                    "grammar": [
                        "Pronoun reference (this, such, former, latter)",
                        "Inversion with negative adverbials (Little did he know)"
                    ],
                    "vocabulary": [
                        "Cohesion",
                        "Paragraph",
                        "Flow",
                        "Sequence",
                        "Transition"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B2-007\"\ncando: \"Can insert missing sentences into an article based on structural and cohesive clues.\"\nstrategy: \"Timing: 12 mins for 6 gaps. Pitfall: Checking only the sentence before the gap and ignoring the sentence after. Criteria: Paragraph cohesion and discourse marker tracking.\"",
                    "recycled": "Conditionals with provided that, Participle clauses, Excerpt, Cross-reference"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "B2 Reading: Long Article & Writer's Opinion",
                    "duration_minutes": 60,
                    "grammar": [
                        "Advanced passive constructions (It is understood that)",
                        "Subjunctive and hypothetical structures"
                    ],
                    "vocabulary": [
                        "Perspective",
                        "Argument",
                        "Implication",
                        "Tone",
                        "Underlying"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-B2-008\"\ncando: \"Can analyze a 700-word article to answer detailed multiple-choice questions on tone and stance.\"\nstrategy: \"Timing: 15 mins total. Pitfall: Choosing options that reflect text mention but miss the main argument. Criteria: In-depth textual comprehension.\"",
                    "recycled": "Pronoun reference, Inversion with negative adverbials, Cohesion, Transition"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "B2 Use of English: Open Cloze & Word Formation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Prefixes and suffixes for word formation (un-, dis-, -tion, -ity)",
                        "Dependent prepositions and fixed phrasal verbs"
                    ],
                    "vocabulary": [
                        "Derivation",
                        "Prefix",
                        "Suffix",
                        "Grammatical gap",
                        "Collocation"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B2-009\"\ncando: \"Can complete open cloze and word formation tasks testing grammar and derivative accuracy.\"\nstrategy: \"Timing: 10 mins for open cloze + word formation. Pitfall: Forgetting negative prefixes (e.g. un-, im-) when meaning demands opposite. Criteria: Morphological and grammatical accuracy.\"",
                    "recycled": "Advanced passive constructions, Subjunctive structures, Perspective, Argument"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "B2 Use of English: Key Word Transformations & Collocations",
                    "duration_minutes": 60,
                    "grammar": [
                        "Key word transformations involving conditionals, passives, and modals",
                        "Verb-noun collocations (take into account, make an attempt)"
                    ],
                    "vocabulary": [
                        "Transformation",
                        "Constraint",
                        "Equivalent",
                        "Key word",
                        "Rephrase"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-B2-010\"\ncando: \"Can rewrite sentences using a given key word without altering original meaning (2-5 words).\"\nstrategy: \"Timing: 12 mins for 6 transformations. Pitfall: Exceeding 5 words or changing the key word form. Criteria: Exact semantic equivalence and grammatical constraint compliance.\"",
                    "recycled": "Prefixes and suffixes for word formation, Dependent prepositions, Derivation, Prefix"
                }
            ]
        },
        {
            "unit": 3,
            "title": "B2 Written Production & Discursive Tasks",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "Comparing & Speculating on Exam Visuals",
                    "duration_minutes": 60,
                    "grammar": [
                        "Modals of deduction (must be, might be, can't be)",
                        "Comparative structures"
                    ],
                    "vocabulary": [
                        "Whereas",
                        "In contrast",
                        "Likely",
                        "Deduce",
                        "Speculate"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 30,
                    "teacher_notes": "code: \"EN-EXM-B2-011\"\ncando: \"Can compare candidate photos and speculate on underlying contexts under exam conditions.\"\nstrategy: \"Timing: 1 min monologue response. Pitfall: Simply describing images without comparative speculation. Criteria: Comparative discourse range and speculative grammar.\"",
                    "recycled": "Key word transformations, Verb-noun collocations, Transformation, Constraint"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "B2 Essay Writing: Argumentative & Discursive",
                    "duration_minutes": 60,
                    "grammar": [
                        "Passive reporting verbs",
                        "Complex linking phrases"
                    ],
                    "vocabulary": [
                        "Furthermore",
                        "On the one hand",
                        "Consequently",
                        "Significant",
                        "Evidence"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B2-012\"\ncando: \"Can produce structured 140-190 word argumentative essays with clear paragraphs.\"\nstrategy: \"Timing: 40 mins. Pitfall: Addressing only 1 out of 2 prompt points plus own idea. Criteria: Coverage of all 3 required points and formal register.\"",
                    "recycled": "Modals of deduction, Comparative structures, Whereas, In contrast"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "B2 Writing: Formal Email / Letter of Application",
                    "duration_minutes": 60,
                    "grammar": [
                        "Formal epistolary conventions (I am writing with reference to...)",
                        "Complex sentence structures with relative clauses"
                    ],
                    "vocabulary": [
                        "Candidate",
                        "Qualifications",
                        "Suitability",
                        "Enclose",
                        "Sincerely"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B2-013\"\ncando: \"Can draft a 140-190 word formal letter of application detailing suitability and skills.\"\nstrategy: \"Timing: 40 mins. Pitfall: Using informal contractions (don't, can't) in formal application letters. Criteria: Register consistency and persuasive professional style.\"",
                    "recycled": "Passive reporting verbs, Complex linking phrases, Furthermore, Consequently"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "B2 Writing: Formal Report & Formulating Recommendations",
                    "duration_minutes": 60,
                    "grammar": [
                        "Report headings and objective passive tone",
                        "Structures for recommendations (I recommend that..., It is advisable to)"
                    ],
                    "vocabulary": [
                        "Executive",
                        "Findings",
                        "Recommendation",
                        "Feasibility",
                        "Implementation"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B2-014\"\ncando: \"Can write an organized 140-190 word formal report with sub-headings and action recommendations.\"\nstrategy: \"Timing: 40 mins. Pitfall: Writing narrative style without section headings. Criteria: Report formatting, clear organization, and objective tone.\"",
                    "recycled": "Formal epistolary conventions, Complex sentence structures, Candidate, Suitability"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "B2 Writing Strategy Review & Criterion Scoring",
                    "duration_minutes": 60,
                    "grammar": [
                        "Advanced cohesive connectors",
                        "Self-editing and error category correction"
                    ],
                    "vocabulary": [
                        "Communicative achievement",
                        "Content",
                        "Organization",
                        "Language",
                        "Rubric"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-B2-015\"\ncando: \"Can evaluate B2 written essays and reports against standard 4-scale mark schemes.\"\nstrategy: \"Timing: 10 mins editing phase after writing. Pitfall: Ignoring paragraph transitions and layout. Criteria: Score optimization across Content, Communicative Achievement, Organization, and Language.\"",
                    "recycled": "Report headings and passive tone, Structures for recommendations, Executive, Findings"
                }
            ]
        },
        {
            "unit": 4,
            "title": "B2 Spoken Production & Interactive Communication",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "B2 Speaking: Advanced Visual Comparison & Speculation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comparative and superlative structures with degree modifiers",
                        "Speculative language (looks as if, appears to have been)"
                    ],
                    "vocabulary": [
                        "Comparison",
                        "Contrast",
                        "Prominent",
                        "Implied",
                        "Context"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-B2-016\"\ncando: \"Can compare two photos for 1 minute while answering a follow-up analytical question.\"\nstrategy: \"Timing: 1 min uninterrupted. Pitfall: Spending 40 seconds on picture A and running out of time for picture B. Criteria: Balanced comparison and instant response to prompt question.\"",
                    "recycled": "Advanced cohesive connectors, Self-editing strategies, Communicative achievement, Rubric"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "B2 Speaking: Individual Long Turn & Topic Development",
                    "duration_minutes": 60,
                    "grammar": [
                        "Structuring discourse markers (Moving on to, On the question of)",
                        "Hypothetical conditional clauses"
                    ],
                    "vocabulary": [
                        "Monologue",
                        "Elaborate",
                        "Coherent",
                        "Perspective",
                        "Fluency"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-B2-017\"\ncando: \"Can sustain a coherent 1-minute long turn on a visual/written prompt card.\"\nstrategy: \"Timing: 1 min monologue. Pitfall: Long hesitation pauses when structuring next points. Criteria: Spoken coherence and natural discourse signposting.\"",
                    "recycled": "Comparative structures with modifiers, Speculative language, Comparison, Contrast"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "B2 Speaking: Collaborative Task & Decision Making",
                    "duration_minutes": 60,
                    "grammar": [
                        "Negotiation formulas (Wouldn't you agree that...?, How do you see...?)",
                        "Modal verbs for reaching compromise"
                    ],
                    "vocabulary": [
                        "Collaboration",
                        "Consensus",
                        "Trade-off",
                        "Priority",
                        "Interaction"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-B2-018\"\ncando: \"Can participate in a 2-minute collaborative discussion with a partner to reach a joint decision.\"\nstrategy: \"Timing: 2 mins discussion + 1 min decision phase. Pitfall: Deciding immediately without debating alternative options. Criteria: Interactive communication and diplomatic turn-taking.\"",
                    "recycled": "Structuring discourse markers, Hypothetical conditional clauses, Monologue, Elaborate"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "B2 Speaking: Abstract Discussion & Defending Opinions",
                    "duration_minutes": 60,
                    "grammar": [
                        "Expressing strong and softened opinions (It seems to me that, I would argue)",
                        "Concession clauses (Even though that may be true...)"
                    ],
                    "vocabulary": [
                        "Abstract",
                        "Justification",
                        "Concession",
                        "Counterpoint",
                        "Societal"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-B2-019\"\ncando: \"Can participate in a 4-minute thematic discussion answering abstract examiner questions.\"\nstrategy: \"Timing: 4 mins group discussion. Pitfall: Short superficial answers without reasoning. Criteria: Lexical richness, depth of response, and interactive expansion.\"",
                    "recycled": "Negotiation formulas, Modal verbs for compromise, Collaboration, Consensus"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "B2 Speaking: Live Oral Exam Simulation & Examiner Rubric",
                    "duration_minutes": 60,
                    "grammar": [
                        "Synthesis of B2 oral interaction and strategy structures",
                        "Self-repair and clarification formulas"
                    ],
                    "vocabulary": [
                        "Examiner",
                        "Rubric",
                        "Interactive",
                        "Grammatical range",
                        "Phonological"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 90,
                    "teacher_notes": "code: \"EN-EXM-B2-020\"\ncando: \"Can perform a complete 14-minute B2 pair oral examination under official test conditions.\"\nstrategy: \"Timing: 14 mins full exam. Pitfall: Failing to repair misspoken phrases gracefully. Criteria: Comprehensive evaluation across Grammar, Vocabulary, Discourse Management, Pronunciation, and Interactive Communication.\"",
                    "recycled": "Expressing opinions, Concession clauses, Abstract, Justification"
                }
            ]
        },
        {
            "unit": 5,
            "title": "B2 Full Mock-Exam Practice & Performance Polish",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "B2 Mock Exam: Timed Listening Test & Error Diagnostics",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of B2 listening structures"
                    ],
                    "vocabulary": [
                        "Diagnostic",
                        "Error analysis",
                        "Raw score",
                        "Converted score",
                        "Benchmark"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B2-021\"\ncando: \"Can complete a full 40-minute B2 listening paper and analyze error patterns.\"\nstrategy: \"Timing: 40 mins listening + 10 mins error analysis. Pitfall: Repeating past error types in multiple-choice parts. Criteria: Scaled band score tracking and mistake analysis.\"",
                    "recycled": "Synthesis of B2 oral structures, Self-repair formulas, Examiner, Rubric"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "B2 Mock Exam: Reading & Use of English Paper Simulation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of B2 reading and grammar structures"
                    ],
                    "vocabulary": [
                        "Use of English",
                        "Pacing",
                        "Strategy",
                        "Passage",
                        "Accuracy"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B2-022\"\ncando: \"Can complete all 7 parts of the B2 Reading and Use of English paper in 75 minutes.\"\nstrategy: \"Timing: Strict 75 mins timer. Pitfall: Spending over 12 mins on Use of English transformation tasks. Criteria: Overall reading score and time management precision.\"",
                    "recycled": "Comprehensive review of B2 listening, Diagnostic, Error analysis"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "B2 Mock Exam: Writing Paper & Self-Assessment against Criteria",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of B2 formal writing register"
                    ],
                    "vocabulary": [
                        "Task 1 Essay",
                        "Task 2 Option",
                        "Word count",
                        "Cohesion",
                        "Criterion"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-B2-023\"\ncando: \"Can write two 140-190 word B2 compositions within 80 minutes under test conditions.\"\nstrategy: \"Timing: 80 mins total (40 mins per task). Pitfall: Poor time allocation leaving Task 2 incomplete. Criteria: Evaluation against official B2 mark scheme.\"",
                    "recycled": "Comprehensive review of B2 reading, Use of English, Pacing"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "B2 Mock Exam: Live Speaking Test Simulation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of B2 oral examination skills"
                    ],
                    "vocabulary": [
                        "Oral exam",
                        "Pair interaction",
                        "Interlocutor",
                        "Assessor",
                        "Performance"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 90,
                    "teacher_notes": "code: \"EN-EXM-B2-024\"\ncando: \"Can execute all 4 parts of a live B2 pair speaking exam with high fluency and composure.\"\nstrategy: \"Timing: 14 mins live test. Pitfall: Rushing speech and losing pronunciation clarity. Criteria: Assessment on 5 official B2 speaking sub-scales.\"",
                    "recycled": "Comprehensive review of B2 writing, Task 1 Essay, Task 2 Option"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "B2 Exam Mastery: Exam Day Strategy, Stress & Time Management",
                    "duration_minutes": 60,
                    "grammar": [
                        "Integrated review of key B2 exam grammatical structures"
                    ],
                    "vocabulary": [
                        "Mastery",
                        "Strategy",
                        "Stress management",
                        "Target band",
                        "Confidence"
                    ],
                    "practice_types": ["exam"],
                    "speaking_percent": 40,
                    "teacher_notes": "code: \"EN-EXM-B2-025\"\ncando: \"Can formulate a personalized exam day strategy to reach target B2 certificate grades.\"\nstrategy: \"Timing: Final strategy overview. Pitfall: Fatigue management in multi-hour exam sessions. Criteria: Overall exam readiness and confidence optimization.\"",
                    "recycled": "Comprehensive review of B2 oral exam skills, Oral exam, Interlocutor"
                }
            ]
        }
    ]
    return {
        "language": "en",
        "course_type": "exam",
        "level": "B2",
        "units": units
    }


def generate_c1():
    units = [
        {
            "unit": 1,
            "title": "C1 Advanced Listening Comprehension & Nuance",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "C1 Listening: Short Complex Monologues & Implied Meaning",
                    "duration_minutes": 60,
                    "grammar": [
                        "Subtle stylistic inversions (Seldom have I witnessed)",
                        "Advanced modal expressions of probability and deduction"
                    ],
                    "vocabulary": [
                        "Implicit",
                        "Subtext",
                        "Irony",
                        "Understatement",
                        "Tone"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-001\"\ncando: \"Can infer speaker feeling, stance, and implied meaning from short complex C1 monologues.\"\nstrategy: \"Timing: 1 min per audio clip. Pitfall: Taking idiomatic expressions literally. Criteria: Decoding implied stance and irony.\"",
                    "recycled": "Foundational communication & basic level vocabulary"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "C1 Listening: Multiple Matching & Speaker Tone",
                    "duration_minutes": 60,
                    "grammar": [
                        "Cleft and pseudo-cleft sentences (All they did was..., What impressed me was)",
                        "Complex participle clauses for background actions"
                    ],
                    "vocabulary": [
                        "Attitude",
                        "Perspective",
                        "Nuance",
                        "Divergence",
                        "Consensus"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-C1-002\"\ncando: \"Can match 5 speakers with two distinct thematic options based on tone and attitude.\"\nstrategy: \"Timing: 2 tasks per speaker listening twice. Pitfall: Focusing on task 1 while missing task 2 clues. Criteria: Dual-task processing accuracy under audio flow.\"",
                    "recycled": "Subtle stylistic inversions, Advanced modal expressions, Implicit, Subtext"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "C1 Listening: Sentence Completion & Academic Terminology",
                    "duration_minutes": 60,
                    "grammar": [
                        "Nominalization in dense academic discourse",
                        "Passive structures with reporting verbs (is estimated to have been)"
                    ],
                    "vocabulary": [
                        "Terminology",
                        "Academic",
                        "Hypothesis",
                        "Empirical",
                        "Monograph"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-003\"\ncando: \"Can complete gapped notes from an academic lecture with exact technical words.\"\nstrategy: \"Timing: 8 mins lecture duration. Pitfall: Altering singular/plural forms of extracted academic nouns. Criteria: Exact orthographic and morphological extraction.\"",
                    "recycled": "Cleft sentences, Complex participle clauses, Attitude, Nuance"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "C1 Listening: Panel Discussion & Nuanced Agreement",
                    "duration_minutes": 60,
                    "grammar": [
                        "Subjunctive and hypothetical conditionality",
                        "Concession and hedging structures (Granted that..., mind you...)"
                    ],
                    "vocabulary": [
                        "Panelist",
                        "Moderator",
                        "Rebuttal",
                        "Ambiguity",
                        "Skeptical"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-C1-004\"\ncando: \"Can follow a 10-minute complex panel discussion and evaluate subtle agreement and dispute.\"\nstrategy: \"Timing: 10 mins discussion duration. Pitfall: Confusing partial agreement with full endorsement. Criteria: Discerning nuanced speaker alignment.\"",
                    "recycled": "Nominalization in academic discourse, Passive structures, Terminology, Empirical"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "C1 Listening: Advanced Audio Review & Fast-Paced Speech",
                    "duration_minutes": 60,
                    "grammar": [
                        "Synthesis of C1 listening structures",
                        "Connected speech patterns (intrusion, elision, assimilation)"
                    ],
                    "vocabulary": [
                        "Assimilation",
                        "Elision",
                        "Fast speech",
                        "Acoustic",
                        "Decoding"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 25,
                    "teacher_notes": "code: \"EN-EXM-C1-005\"\ncando: \"Can decode fast unscripted native speech under C1 exam conditions.\"\nstrategy: \"Timing: 40 mins full test paper. Pitfall: Over-analyzing individual unaccented function words. Criteria: High-level listening decoding and speed comprehension.\"",
                    "recycled": "Subjunctive conditionality, Concession and hedging, Panelist, Rebuttal"
                }
            ]
        },
        {
            "unit": 2,
            "title": "C1 Advanced Reading & Use of English Analysis",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "C1 Use of English: Key Word Transformations",
                    "duration_minutes": 60,
                    "grammar": [
                        "Inversion",
                        "Cleft sentences",
                        "Advanced verb-noun collocations"
                    ],
                    "vocabulary": [
                        "No sooner",
                        "Little did they know",
                        "Account for",
                        "Bound to"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-C1-006\"\ncando: \"Can complete complex key word transformation and Use of English tasks.\"\nstrategy: \"Timing: 12 mins for 6 transformation items. Pitfall: Changing the provided key word or using more than 6 words. Criteria: Absolute grammatical precision and semantic accuracy.\"",
                    "recycled": "Synthesis of C1 listening structures, Connected speech patterns, Assimilation, Decoding"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "C1 Reading: Cross-Textual Multiple Matching",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comparative evaluation across four distinct academic texts",
                        "Complex reporting verbs of stance (asserts, disputes, concurs)"
                    ],
                    "vocabulary": [
                        "Synthesis",
                        "Cross-textual",
                        "Discrepancy",
                        "Concur",
                        "Contradict"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-007\"\ncando: \"Can compare opinions across 4 short texts to identify agreement and disagreement on key issues.\"\nstrategy: \"Timing: 18 mins. Pitfall: Reading all 4 texts fully before reviewing questions. Criteria: Cross-referential scanning and opinion synthesis.\"",
                    "recycled": "Inversion, Cleft sentences, Advanced verb-noun collocations, No sooner"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "C1 Reading: Gapped Text & Complex Paragraph Cohesion",
                    "duration_minutes": 60,
                    "grammar": [
                        "Advanced cohesive chains and lexical repetition",
                        "Ellipsis and substitution mechanisms"
                    ],
                    "vocabulary": [
                        "Cohesive chain",
                        "Ellipsis",
                        "Substitution",
                        "Discourse structure",
                        "Flow"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-008\"\ncando: \"Can insert missing paragraphs into an essay analyzing overall textual architecture.\"\nstrategy: \"Timing: 15 mins for 6 gaps. Pitfall: Ignoring forward reference markers in paragraphs following gaps. Criteria: Micro and macro structural cohesion analysis.\"",
                    "recycled": "Comparative evaluation, Reporting verbs of stance, Synthesis, Discrepancy"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "C1 Reading: Multiple-Choice Long Academic Essay",
                    "duration_minutes": 60,
                    "grammar": [
                        "Complex hypotheticals and counterfactual reasoning",
                        "Parenthetical commentary and stylistic devices"
                    ],
                    "vocabulary": [
                        "Monograph",
                        "Treatise",
                        "Irony",
                        "Allusion",
                        "Nuance"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-C1-009\"\ncando: \"Can answer multiple-choice questions on an 800-word academic essay evaluating argument subtlety.\"\nstrategy: \"Timing: 18 mins. Pitfall: Selecting distractor options that quote text fragments out of context. Criteria: Deep textual analysis and author stance identification.\"",
                    "recycled": "Cohesive chains, Ellipsis and substitution, Cohesive chain, Discourse structure"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "C1 Use of English: Advanced Open Cloze & Word Formation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Complex fixed prepositions and idiom structures",
                        "Multiple prefixation and suffixation (unprecedented, misinterpretation)"
                    ],
                    "vocabulary": [
                        "Cloze",
                        "Derivation",
                        "Collocation",
                        "Affix",
                        "Precision"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-010\"\ncando: \"Can complete C1 open cloze and complex word formation tasks with zero grammatical errors.\"\nstrategy: \"Timing: 15 mins for both parts. Pitfall: Misreading overall sentence context and missing negative prefixes. Criteria: Advanced vocabulary derivation and grammatical exactness.\"",
                    "recycled": "Complex hypotheticals, Parenthetical commentary, Treatise, Allusion"
                }
            ]
        },
        {
            "unit": 3,
            "title": "C1 Professional & Academic Writing Mastery",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "C1 Formal Proposal & Report Writing",
                    "duration_minutes": 60,
                    "grammar": [
                        "Formal passive constructions",
                        "Subjunctive and recommendation structures"
                    ],
                    "vocabulary": [
                        "Outline",
                        "Recommend",
                        "Implement",
                        "Feasibility",
                        "Conclusion"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-011\"\ncando: \"Can draft executive reports and proposals adhering to academic exam standards.\"\nstrategy: \"Timing: 45 mins. Pitfall: Failing to present clear persuasive recommendations with section headings. Criteria: Institutional register, layout, and persuasive impact.\"",
                    "recycled": "Fixed prepositions, Multiple prefixation, Cloze, Derivation"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "C1 Writing: Academic Discursive Essay",
                    "duration_minutes": 60,
                    "grammar": [
                        "Inverted conditional clauses (Had the government introduced...)",
                        "Complex nominal phrases as subjects"
                    ],
                    "vocabulary": [
                        "Socio-economic",
                        "Imperative",
                        "Mitigate",
                        "Substantial",
                        "Perspective"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-012\"\ncando: \"Can write a 220-260 word academic essay weighing two viewpoints and advocating a solution.\"\nstrategy: \"Timing: 45 mins. Pitfall: Spending 15 mins planning and failing to finish the concluding paragraph. Criteria: Academic cohesion, argument depth, and precise vocabulary.\"",
                    "recycled": "Formal passive constructions, Subjunctive structures, Outline, Feasibility"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "C1 Writing: Persuasive Formal Letter to Editor / Board",
                    "duration_minutes": 60,
                    "grammar": [
                        "Diplomatic hedging (It would appear advisable, One might argue)",
                        "Emphatic structures with do/does and clefting"
                    ],
                    "vocabulary": [
                        "Editorial",
                        "Governance",
                        "Urgency",
                        "Rectify",
                        "Objection"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-013\"\ncando: \"Can write a 220-260 word persuasive formal letter addressing systemic issues to leadership.\"\nstrategy: \"Timing: 45 mins. Pitfall: Slipping into aggressive or overly casual register. Criteria: High-level persuasive rhetoric, register control, and diplomatic firmness.\"",
                    "recycled": "Inverted conditional clauses, Complex nominal phrases, Socio-economic, Mitigate"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "C1 Writing: Critical Review (Arts / Media / Book)",
                    "duration_minutes": 60,
                    "grammar": [
                        "Evaluative adverbs and adjectives (exceptionally nuanced, surprisingly lackluster)",
                        "Complex comparative structures"
                    ],
                    "vocabulary": [
                        "Aesthetic",
                        "Critique",
                        "Narrative",
                        "Protagonist",
                        "Resonates"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-014\"\ncando: \"Can draft a sophisticated 220-260 word review offering critical evaluation and target audience recommendations.\"\nstrategy: \"Timing: 45 mins. Pitfall: Retelling plot summary instead of offering critical analysis. Criteria: Engaging literary register and balanced critical evaluation.\"",
                    "recycled": "Diplomatic hedging, Emphatic structures, Editorial, Rectify"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "C1 Writing Strategy: Register, Cohesion & Scoring Criteria",
                    "duration_minutes": 60,
                    "grammar": [
                        "Advanced stylistic variation and sentence combining",
                        "Error categories and rubric self-audit"
                    ],
                    "vocabulary": [
                        "Rubric",
                        "Band score",
                        "Register",
                        "Coherence",
                        "Polish"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-C1-015\"\ncando: \"Can evaluate and edit C1 compositions to reach Tier-1 band scores across all rubrics.\"\nstrategy: \"Timing: 10 mins dedicated editing phase. Pitfall: Repeating basic linking words (and, but, so). Criteria: Lexical sophistication, syntactic flexibility, and register purity.\"",
                    "recycled": "Evaluative adverbs and adjectives, Complex comparatives, Aesthetic, Critique"
                }
            ]
        },
        {
            "unit": 4,
            "title": "C1 Advanced Spoken Production & Diplomatic Interaction",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "C1 Speaking: Comparative Photo Analysis & Speculation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Advanced modals of speculation (must have been taking place, might well reflect)",
                        "Complex comparative inversion (No less important is...)"
                    ],
                    "vocabulary": [
                        "Juxtapose",
                        "Deduction",
                        "Underlying",
                        "Manifestation",
                        "Nuance"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-C1-016\"\ncando: \"Can compare two photos and answer two analytical speculation questions in 1 minute.\"\nstrategy: \"Timing: 1 min strict monologue. Pitfall: Simply listing visual contents without speculative evaluation. Criteria: Instant speculation and complex comparative structures.\"",
                    "recycled": "Advanced stylistic variation, Error categories, Rubric, Band score"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "C1 Speaking: 2-Minute Structured Monologue",
                    "duration_minutes": 60,
                    "grammar": [
                        "Discourse signposting for multi-phase presentations",
                        "Conditionals for hypothetical scenario analysis"
                    ],
                    "vocabulary": [
                        "Monologue",
                        "Structured",
                        "Elaboration",
                        "Cadence",
                        "Rhetoric"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-C1-017\"\ncando: \"Can deliver a 2-minute structured monologue based on written prompt cards.\"\nstrategy: \"Timing: 2 mins uninterrupted talk. Pitfall: Spending 90 seconds on point 1 and rushing point 2. Criteria: Balanced time management and seamless discourse signposting.\"",
                    "recycled": "Advanced modals of speculation, Complex comparative inversion, Juxtapose, Deduction"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "C1 Speaking: Collaborative Problem Solving & Negotiation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Diplomatic negotiation formulas (How would you react if...?, Wouldn't it be more prudent...)",
                        "Concession and counter-proposal structures"
                    ],
                    "vocabulary": [
                        "Collaboration",
                        "Negotiation",
                        "Consensus",
                        "Trade-off",
                        "Prudent"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-C1-018\"\ncando: \"Can lead a 2-minute collaborative task with a partner and negotiate a decision in 1 minute.\"\nstrategy: \"Timing: 2 mins interaction + 1 min decision. Pitfall: Dominating conversation without inviting partner input. Criteria: Interactive turn-taking and collaborative negotiation skill.\"",
                    "recycled": "Discourse signposting, Conditionals for hypotheticals, Monologue, Cadence"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "C1 Speaking: Abstract Debate & Nuanced Counter-Arguments",
                    "duration_minutes": 60,
                    "grammar": [
                        "Hedging and qualifying expressions (To a certain extent, Subject to validation)",
                        "Emphatic inversion and clefting in debate"
                    ],
                    "vocabulary": [
                        "Debate",
                        "Philosophical",
                        "Premise",
                        "Counter-argument",
                        "Perspective"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-C1-019\"\ncando: \"Can engage in a 5-minute abstract debate with examiner and peer on complex societal issues.\"\nstrategy: \"Timing: 5 mins group discussion. Pitfall: Giving brief personal anecdotes instead of structured analytical arguments. Criteria: Depth of debate and sophisticated qualification of statements.\"",
                    "recycled": "Diplomatic negotiation formulas, Concession structures, Collaboration, Consensus"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "C1 Speaking: Oral Exam Simulation & Fluency Polish",
                    "duration_minutes": 60,
                    "grammar": [
                        "Synthesis of C1 oral communication structures",
                        "Natural self-correction and reformulation strategies"
                    ],
                    "vocabulary": [
                        "Fluency",
                        "Articulation",
                        "Reformulation",
                        "Prosody",
                        "Mastery"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 90,
                    "teacher_notes": "code: \"EN-EXM-C1-020\"\ncando: \"Can complete a full 15-minute C1 pair speaking exam under live test conditions.\"\nstrategy: \"Timing: 15 mins live examination. Pitfall: Visibly hesitating when reaching for rare vocabulary. Criteria: Natural prosody, spontaneous articulation, and interactive control.\"",
                    "recycled": "Hedging and qualifying expressions, Emphatic inversion, Debate, Premise"
                }
            ]
        },
        {
            "unit": 5,
            "title": "C1 Full Mock-Exam Practice & High-Score Tactics",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "C1 Mock Exam: Timed Listening Simulation & Audio Analysis",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of C1 listening structures"
                    ],
                    "vocabulary": [
                        "Listening simulation",
                        "Audio analysis",
                        "Score conversion",
                        "Error audit",
                        "Benchmark"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-021\"\ncando: \"Can execute a full 40-minute C1 listening exam paper under timed conditions.\"\nstrategy: \"Timing: 40 mins test paper. Pitfall: Losing focus during Part 4 multiple matching. Criteria: Scaled score evaluation and item diagnostic review.\"",
                    "recycled": "Synthesis of C1 oral structures, Reformulation strategies, Articulation, Prosody"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "C1 Mock Exam: Timed Reading & Use of English Paper",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of C1 reading & Use of English structures"
                    ],
                    "vocabulary": [
                        "Pacing strategy",
                        "Section allocation",
                        "Key word transformations",
                        "Accuracy",
                        "Passage"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-022\"\ncando: \"Can complete all 8 parts of C1 Reading and Use of English paper within 90 minutes.\"\nstrategy: \"Timing: 90 mins limit. Pitfall: Misallocating time on Part 6 cross-textual matching. Criteria: Scaled score calculation across all 8 parts.\"",
                    "recycled": "Comprehensive review of C1 listening, Listening simulation, Audio analysis"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "C1 Mock Exam: Timed Writing Paper & Criterion Analysis",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of C1 academic/professional writing styles"
                    ],
                    "vocabulary": [
                        "Essay writing",
                        "Report / Proposal",
                        "Time management",
                        "Criterion",
                        "Proofreading"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C1-023\"\ncando: \"Can complete two 220-260 word C1 compositions within 90 minutes.\"\nstrategy: \"Timing: 90 mins total (45 mins per task). Pitfall: Failing to proofread register and complex grammar. Criteria: Grade assessment against official C1 criteria.\"",
                    "recycled": "Comprehensive review of C1 reading, Pacing strategy, Key word transformations"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "C1 Mock Exam: Live Pair Speaking Test Simulation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of C1 spoken interaction skills"
                    ],
                    "vocabulary": [
                        "Pair examination",
                        "Interlocutor",
                        "Interactive flow",
                        "Evaluation",
                        "Feedback"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 90,
                    "teacher_notes": "code: \"EN-EXM-C1-024\"\ncando: \"Can perform all 4 parts of a live C1 speaking examination with complete confidence.\"\nstrategy: \"Timing: 15 mins test duration. Pitfall: Breaking pair communication during Part 3 negotiation. Criteria: Detailed band score assessment across 5 criteria.\"",
                    "recycled": "Comprehensive review of C1 writing, Essay writing, Report / Proposal"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "C1 Exam Final Review: High-Tier Marking Criteria & Strategy",
                    "duration_minutes": 60,
                    "grammar": [
                        "Integrated review of key C1 exam structures"
                    ],
                    "vocabulary": [
                        "Optimization",
                        "Target grade",
                        "Exam tactics",
                        "Composure",
                        "Excellence"
                    ],
                    "practice_types": ["exam"],
                    "speaking_percent": 40,
                    "teacher_notes": "code: \"EN-EXM-C1-025\"\ncando: \"Can implement a personalized exam day execution plan to achieve Grade A/B C1 certificates.\"\nstrategy: \"Timing: Comprehensive review. Pitfall: Over-thinking straightforward items. Criteria: Final strategy checklist and score maximization.\"",
                    "recycled": "Comprehensive review of C1 spoken interaction, Pair examination, Interlocutor"
                }
            ]
        }
    ]
    return {
        "language": "en",
        "course_type": "exam",
        "level": "C1",
        "units": units
    }


def generate_c2():
    units = [
        {
            "unit": 1,
            "title": "C2 Proficiency Listening Mastery",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "C2 Listening: Complex Monologues & Subtle Understatement",
                    "duration_minutes": 60,
                    "grammar": [
                        "Sophisticated literary inversions and fronting",
                        "Unconstrained modal deduction and hypothetical commentary"
                    ],
                    "vocabulary": [
                        "Understatement",
                        "Subtlety",
                        "Irony",
                        "Sarcasm",
                        "Implication"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C2-001\"\ncando: \"Can comprehend dense monologues featuring subtle irony, understatement, and implicit critique.\"\nstrategy: \"Timing: 1-2 mins audio clip. Pitfall: Interpreting literal statement where sarcasm is intended. Criteria: Master-level decoding of irony and implicit meaning.\"",
                    "recycled": "Foundational communication & basic level vocabulary"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "C2 Listening: Rapid Colloquial & Unscripted Discussions",
                    "duration_minutes": 60,
                    "grammar": [
                        "Complex elliptical structures in colloquial speech",
                        "Parenthetical commentary clauses"
                    ],
                    "vocabulary": [
                        "Colloquialism",
                        "Unscripted",
                        "Idiomatic",
                        "Overlap",
                        "Nuance"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-C2-002\"\ncando: \"Can follow rapid, multi-speaker unscripted conversations featuring overlapping native speech.\"\nstrategy: \"Timing: 3-4 mins conversation. Pitfall: Missing key agreement shifts amidst rapid overlapping turns. Criteria: Real-time tracking of rapid conversational shifts.\"",
                    "recycled": "Sophisticated literary inversions, Unconstrained modal deduction, Understatement, Subtlety"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "C2 Listening: Sentence Completion & High-Level Academic Terms",
                    "duration_minutes": 60,
                    "grammar": [
                        "Dense nominalization and abstract noun phrases",
                        "Complex passive report structures"
                    ],
                    "vocabulary": [
                        "Terminology",
                        "Jargon",
                        "Discourse",
                        "Paradigm",
                        "Syllogism"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C2-003\"\ncando: \"Can extract exact technical terms from dense C2 scientific and humanities lectures.\"\nstrategy: \"Timing: 8 mins lecture duration. Pitfall: Minor spelling mistakes on rare academic loanwords. Criteria: Perfect orthographic accuracy under lecture listening.\"",
                    "recycled": "Complex elliptical structures, Parenthetical commentary clauses, Colloquialism, Unscripted"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "C2 Listening: Multi-Speaker Debate & Stylistic Nuance",
                    "duration_minutes": 60,
                    "grammar": [
                        "Advanced concessive conditionality (Be that as it may, Come what may)",
                        "Stylistic fronting for dramatic emphasis"
                    ],
                    "vocabulary": [
                        "Debate",
                        "Polemics",
                        "Discrepancy",
                        "Stance",
                        "Rhetoric"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-C2-004\"\ncando: \"Can follow high-level intellectual debate and discern fine shades of agreement or critique.\"\nstrategy: \"Timing: 10 mins debate duration. Pitfall: Mistaking polite academic hedging for genuine endorsement. Criteria: Discerning stylistic nuance and intellectual stance.\"",
                    "recycled": "Dense nominalization, Complex passive report structures, Terminology, Jargon"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "C2 Listening: Expert Audio Strategy & Fast Speech Decoding",
                    "duration_minutes": 60,
                    "grammar": [
                        "Synthesis of C2 listening structures",
                        "Acoustic phonological variation and regional accents"
                    ],
                    "vocabulary": [
                        "Dialect",
                        "Accent",
                        "Decoding",
                        "Precision",
                        "Mastery"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 25,
                    "teacher_notes": "code: \"EN-EXM-C2-005\"\ncando: \"Can achieve maximum scores across full C2 proficiency listening papers.\"\nstrategy: \"Timing: 40 mins timed test. Pitfall: Second-guessing correct initial impressions on subtle items. Criteria: Absolute listening mastery across diverse accents and registers.\"",
                    "recycled": "Advanced concessive conditionality, Stylistic fronting, Debate, Polemics"
                }
            ]
        },
        {
            "unit": 2,
            "title": "C2 Advanced Reading & Textual Critique",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "C2 Reading: Short Text Analysis & Style Recognition",
                    "duration_minutes": 60,
                    "grammar": [
                        "Archaic and literary grammatical structures",
                        "Subtle stylistic register shifts"
                    ],
                    "vocabulary": [
                        "Stylistics",
                        "Register",
                        "Connotation",
                        "Allusion",
                        "Prose"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C2-006\"\ncando: \"Can analyze short literary and journalistic texts for stylistic tone and connotative meaning.\"\nstrategy: \"Timing: 12 mins. Pitfall: Overlooking figurative language or metaphorical references. Criteria: Identification of subtle stylistic choices and register tone.\"",
                    "recycled": "Synthesis of C2 listening structures, Phonological variation, Dialect, Decoding"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "C2 Reading: Complex Gapped Text & Stylistic Cohesion",
                    "duration_minutes": 60,
                    "grammar": [
                        "Macro-textual cohesion and overarching argument architecture",
                        "Ellipsis and substitution in dense literary essays"
                    ],
                    "vocabulary": [
                        "Architecture",
                        "Cohesion",
                        "Transition",
                        "Continuity",
                        "Flow"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C2-007\"\ncando: \"Can reconstruct complex 1000-word literary and philosophical texts with missing paragraphs.\"\nstrategy: \"Timing: 20 mins. Pitfall: Focusing solely on paragraph openings while ignoring sentence-ending transitions. Criteria: Master-level discourse tracking and structural cohesion.\"",
                    "recycled": "Archaic literary structures, Stylistic register shifts, Stylistics, Connotation"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "C2 Reading: Dense Academic Essay & Philosophical Prose",
                    "duration_minutes": 60,
                    "grammar": [
                        "Complex embedded clauses and dense pre-modifications",
                        "Subjunctive and counterfactual philosophical reasoning"
                    ],
                    "vocabulary": [
                        "Treatise",
                        "Epistemology",
                        "Discourse",
                        "Hypothesis",
                        "Critique"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-C2-008\"\ncando: \"Can comprehend and critique dense academic treatises and philosophical essays.\"\nstrategy: \"Timing: 20 mins. Pitfall: Getting bogged down in unfamiliar terminology instead of argument logic. Criteria: Abstract reading comprehension and critical evaluation.\"",
                    "recycled": "Macro-textual cohesion, Ellipsis and substitution, Architecture, Continuity"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "C2 Reading: Multiple Matching & Fine Shades of Meaning",
                    "duration_minutes": 60,
                    "grammar": [
                        "Nuanced reporting structures and attitude qualification",
                        "Comparative analysis across distinct authoritative texts"
                    ],
                    "vocabulary": [
                        "Shade of meaning",
                        "Matching",
                        "Cross-reference",
                        "Subtlety",
                        "Assertion"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C2-009\"\ncando: \"Can match detailed claims across 4 long academic extracts evaluating fine shades of meaning.\"\nstrategy: \"Timing: 18 mins. Pitfall: Matching superficial thematic overlap instead of exact semantic claims. Criteria: Precision matching across sophisticated texts.\"",
                    "recycled": "Complex embedded clauses, Subjunctive philosophical reasoning, Treatise, Epistemology"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "C2 Use of English: Master Class Cloze & Key Word Transformations",
                    "duration_minutes": 60,
                    "grammar": [
                        "Expert key word transformations involving obscure idioms, inversion, and phrasal verbs",
                        "Multiple derivative affixation and rare collocations"
                    ],
                    "vocabulary": [
                        "Transformation",
                        "Idiomatic",
                        "Affixation",
                        "Collocation",
                        "Excellence"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-C2-010\"\ncando: \"Can complete C2 Proficiency Use of English papers with near-native accuracy.\"\nstrategy: \"Timing: 20 mins total. Pitfall: Exceeding word limit (3-8 words in C2 transformations). Criteria: Absolute native-level syntactic and lexical mastery.\"",
                    "recycled": "Nuanced reporting structures, Comparative text analysis, Shade of meaning, Assertion"
                }
            ]
        },
        {
            "unit": 3,
            "title": "C2 Executive Writing & Synthesis",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "C2 Textual Synthesis & Critical Analysis",
                    "duration_minutes": 60,
                    "grammar": [
                        "Subtle stylistic inversions",
                        "Dense nominalization"
                    ],
                    "vocabulary": [
                        "Paraphrase",
                        "Synthesize",
                        "Discrepancy",
                        "Juxtaposition",
                        "Critique"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-C2-011\"\ncando: \"Can synthesize information from two contrasting texts and write polished critical essays.\"\nstrategy: \"Timing: 45 mins. Pitfall: Summarizing texts sequentially instead of synthesizing key points side-by-side. Criteria: Cross-textual integration, evaluation, and flawless prose.\"",
                    "recycled": "Expert key word transformations, Multiple derivative affixation, Transformation, Idiomatic"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "C2 Writing: Comparative Synthesis Essay",
                    "duration_minutes": 60,
                    "grammar": [
                        "Complex comparative and concessive frameworks",
                        "Advanced cohesive devices for multi-source integration"
                    ],
                    "vocabulary": [
                        "Synthesis",
                        "Evaluation",
                        "Reconcile",
                        "Divergence",
                        "Premise"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C2-012\"\ncando: \"Can write a 280-320 word synthesis essay integrating and evaluating two prompt texts.\"\nstrategy: \"Timing: 45 mins. Pitfall: Copying original text phrases instead of complete rephrasing. Criteria: Flawless paraphrase, critical evaluation, and cohesive structure.\"",
                    "recycled": "Subtle stylistic inversions, Dense nominalization, Paraphrase, Synthesize"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "C2 Writing: Executive Report & Strategic Recommendations",
                    "duration_minutes": 60,
                    "grammar": [
                        "Objective executive passive and impersonal stance",
                        "Subjunctive and conditional recommendation models"
                    ],
                    "vocabulary": [
                        "Executive summary",
                        "Strategic",
                        "Feasibility",
                        "Recommendation",
                        "Viability"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C2-013\"\ncando: \"Can produce C-suite executive reports with strategic analysis and high-impact recommendations.\"\nstrategy: \"Timing: 45 mins. Pitfall: Adopting informal tone or subjective bias in executive briefs. Criteria: Strategic depth, executive formatting, and register perfection.\"",
                    "recycled": "Complex comparative frameworks, Cohesive devices, Evaluation, Reconcile"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "C2 Writing: Sophisticated Persuasive Proposal",
                    "duration_minutes": 60,
                    "grammar": [
                        "Advanced persuasive rhetoric and rhetorical questions",
                        "Emphatic inversion for strategic impact"
                    ],
                    "vocabulary": [
                        "Proposal",
                        "Rationale",
                        "Incentive",
                        "Implementation",
                        "Stakeholder"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C2-014\"\ncando: \"Can draft compelling 280-320 word proposals persuading leadership to adopt major strategic shifts.\"\nstrategy: \"Timing: 45 mins. Pitfall: Over-promising without detailing practical implementation steps. Criteria: Rhetorical power, feasibility, and formal elegance.\"",
                    "recycled": "Objective executive passive, Subjunctive recommendation models, Strategic, Feasibility"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "C2 Writing: Critical Article & Stylistic Polish",
                    "duration_minutes": 60,
                    "grammar": [
                        "Master-level stylistic flexibility and idiomatic phrasing",
                        "Proofreading for nuance and zero error tolerance"
                    ],
                    "vocabulary": [
                        "Journalistic",
                        "Engaging",
                        "Provocative",
                        "Nuanced",
                        "Polish"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 20,
                    "teacher_notes": "code: \"EN-EXM-C2-015\"\ncando: \"Can produce publication-ready articles for high-brow publications with stylistic flair.\"\nstrategy: \"Timing: 10 mins editing phase. Pitfall: Submitting without refining word choice for maximum impact. Criteria: Sophisticated vocabulary, stylistic polish, and zero register errors.\"",
                    "recycled": "Persuasive rhetoric, Emphatic inversion, Rationale, Stakeholder"
                }
            ]
        },
        {
            "unit": 4,
            "title": "C2 Master-Level Spoken Rhetoric & Discussion",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "C2 Speaking: Extended Monologue & Prompt Card Analysis",
                    "duration_minutes": 60,
                    "grammar": [
                        "Flawless structuring markers for 2-minute complex monologues",
                        "Sophisticated hypothetical commentary"
                    ],
                    "vocabulary": [
                        "Monologue",
                        "Discourse",
                        "Rhetoric",
                        "Nuance",
                        "Coherence"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-C2-016\"\ncando: \"Can sustain a 2-minute monologue on abstract prompt cards with immediate development.\"\nstrategy: \"Timing: 2 mins uninterrupted monologue. Pitfall: Repeating prompt card points verbatim without adding analytical depth. Criteria: Deep elaboration, structural flow, and native-like fluency.\"",
                    "recycled": "Master-level stylistic flexibility, Proofreading for nuance, Journalistic, Nuanced"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "C2 Speaking: Rapid Negotiation & Diplomatic Reframing",
                    "duration_minutes": 60,
                    "grammar": [
                        "Diplomatic reframing expressions (Re-examining that premise, Taking a broader view)",
                        "Subtle hedging and qualification"
                    ],
                    "vocabulary": [
                        "Reframing",
                        "Negotiation",
                        "Diplomacy",
                        "Tact",
                        "Rebuttal"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-C2-017\"\ncando: \"Can lead and negotiate complex multi-faceted scenarios with a peer diplomatically.\"\nstrategy: \"Timing: 3 mins collaborative interaction. Pitfall: Aggressive counter-arguing that damages interactive rapport. Criteria: Diplomatic finesse, interactive mastery, and strategic reframing.\"",
                    "recycled": "Structuring markers for monologues, Hypothetical commentary, Monologue, Rhetoric"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "C2 Speaking: Abstract Philosophical Debate",
                    "duration_minutes": 60,
                    "grammar": [
                        "Complex concessive and counterfactual structures",
                        "Rhetorical devices (antithesis, chiasmus, parallelism)"
                    ],
                    "vocabulary": [
                        "Philosophical",
                        "Ontology",
                        "Abstract",
                        "Premise",
                        "Synthesis"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 85,
                    "teacher_notes": "code: \"EN-EXM-C2-018\"\ncando: \"Can debate complex philosophical and societal questions spontaneously with high precision.\"\nstrategy: \"Timing: 6 mins group debate. Pitfall: Giving overly simplistic or concrete real-world examples in place of philosophical analysis. Criteria: High-level abstract reasoning and rhetorical eloquence.\"",
                    "recycled": "Diplomatic reframing, Subtle hedging, Reframing, Diplomacy"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "C2 Speaking: Spontaneous Eloquence & Rhetorical Devices",
                    "duration_minutes": 60,
                    "grammar": [
                        "Master-level prosodic stress, pitch modulation, and pausing",
                        "Emphatic syntactic structures"
                    ],
                    "vocabulary": [
                        "Eloquence",
                        "Prosody",
                        "Articulate",
                        "Gravitas",
                        "Flawless"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 90,
                    "teacher_notes": "code: \"EN-EXM-C2-019\"\ncando: \"Can speak spontaneously with native-like eloquence, gravitas, and rhetorical control.\"\nstrategy: \"Timing: 5 mins presentation/interaction. Pitfall: Speaking too rapidly and sacrificing prosodic gravitas. Criteria: Voice modulation, cadence, and flawless spontaneous articulation.\"",
                    "recycled": "Complex concessive structures, Rhetorical devices, Philosophical, Premise"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "C2 Speaking: Live Oral Exam Simulation & Mastery Feedback",
                    "duration_minutes": 60,
                    "grammar": [
                        "Synthesis of C2 oral communication and rhetorical strategies",
                        "Effortless self-correction and speech repair"
                    ],
                    "vocabulary": [
                        "Proficiency",
                        "Assessor",
                        "Rubric",
                        "Mastery",
                        "Excellence"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 90,
                    "teacher_notes": "code: \"EN-EXM-C2-020\"\ncando: \"Can perform a complete 16-minute C2 pair oral exam displaying native-level command.\"\nstrategy: \"Timing: 16 mins live test. Pitfall: Showing cognitive strain when responding to complex abstract prompts. Criteria: Near-native score across all 5 oral examination scales.\"",
                    "recycled": "Prosodic stress and pitch modulation, Emphatic syntactic structures, Eloquence, Gravitas"
                }
            ]
        },
        {
            "unit": 5,
            "title": "C2 Full Mock-Exam Simulation & C-Suite Precision",
            "lessons": [
                {
                    "lesson": 1,
                    "type": "exam",
                    "title": "C2 Mock Exam: Timed Listening Simulation & Decoding",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of C2 listening structures"
                    ],
                    "vocabulary": [
                        "Listening simulation",
                        "Fast speech",
                        "Diagnostic",
                        "Score audit",
                        "Proficiency"
                    ],
                    "practice_types": ["listening", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C2-021\"\ncando: \"Can complete a full 40-minute C2 listening examination under strict test conditions.\"\nstrategy: \"Timing: 40 mins audio exam. Pitfall: Second-guessing correct intuition on subtle nuance items. Criteria: Master-level score achieved across all 4 listening parts.\"",
                    "recycled": "Synthesis of C2 oral communication, Speech repair, Proficiency, Assessor"
                },
                {
                    "lesson": 2,
                    "type": "exam",
                    "title": "C2 Mock Exam: Timed Reading & Use of English Paper",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of C2 reading & Use of English structures"
                    ],
                    "vocabulary": [
                        "Use of English",
                        "Pacing",
                        "Text analysis",
                        "Gapped text",
                        "Score"
                    ],
                    "practice_types": ["reading", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C2-022\"\ncando: \"Can execute all 7 parts of the C2 Reading & Use of English paper within 90 minutes.\"\nstrategy: \"Timing: 90 mins timer. Pitfall: Over-allocating time to Part 4 Key Word Transformations. Criteria: Scaled score tracking aiming for C2 Grade A benchmark.\"",
                    "recycled": "Comprehensive review of C2 listening, Listening simulation, Fast speech"
                },
                {
                    "lesson": 3,
                    "type": "exam",
                    "title": "C2 Mock Exam: Timed Synthesis & Writing Paper",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of C2 executive writing & textual synthesis"
                    ],
                    "vocabulary": [
                        "Synthesis paper",
                        "Executive writing",
                        "Editing",
                        "Register",
                        "Flawless"
                    ],
                    "practice_types": ["writing", "exam"],
                    "speaking_percent": 15,
                    "teacher_notes": "code: \"EN-EXM-C2-023\"\ncando: \"Can write two 280-320 word C2 compositions (Synthesis + Choice) within 90 minutes.\"\nstrategy: \"Timing: 90 mins total (45 mins per task). Pitfall: Failing to leave 5 mins for final stylistic polish. Criteria: Near-native mark scheme evaluation across content and language.\"",
                    "recycled": "Comprehensive review of C2 reading, Use of English, Pacing"
                },
                {
                    "lesson": 4,
                    "type": "exam",
                    "title": "C2 Mock Exam: Full Live Oral Exam Simulation",
                    "duration_minutes": 60,
                    "grammar": [
                        "Comprehensive review of C2 spoken rhetoric and interactive mastery"
                    ],
                    "vocabulary": [
                        "Oral simulation",
                        "Pair work",
                        "Interlocutor",
                        "Eloquence",
                        "Feedback"
                    ],
                    "practice_types": ["speaking", "exam"],
                    "speaking_percent": 90,
                    "teacher_notes": "code: \"EN-EXM-C2-024\"\ncando: \"Can deliver a flawless 16-minute live C2 oral examination displaying effortless fluency.\"\nstrategy: \"Timing: 16 mins live exam. Pitfall: Breaking pair rapport or showing hesitation under pressure. Criteria: Top-tier band scores across all oral evaluation scales.\"",
                    "recycled": "Comprehensive review of C2 writing, Synthesis paper, Executive writing"
                },
                {
                    "lesson": 5,
                    "type": "exam",
                    "title": "C2 Proficiency Final Review: Precision, Style & Exam Day Success",
                    "duration_minutes": 60,
                    "grammar": [
                        "Integrated review of key C2 exam grammatical structures"
                    ],
                    "vocabulary": [
                        "Proficiency",
                        "Mastery",
                        "Exam day strategy",
                        "Peak performance",
                        "Excellence"
                    ],
                    "practice_types": ["exam"],
                    "speaking_percent": 40,
                    "teacher_notes": "code: \"EN-EXM-C2-025\"\ncando: \"Can execute a complete test-taking strategy achieving C2 CPE/IELTS 8.5-9.0 certification.\"\nstrategy: \"Timing: Final strategy review. Pitfall: Mental fatigue during 4-hour full exam sit. Criteria: Peak performance readiness and total exam day confidence.\"",
                    "recycled": "Comprehensive review of C2 spoken rhetoric, Oral simulation, Interlocutor"
                }
            ]
        }
    ]
    return {
        "language": "en",
        "course_type": "exam",
        "level": "C2",
        "units": units
    }


def main():
    generators = {
        'B1': generate_b1,
        'B2': generate_b2,
        'C1': generate_c1,
        'C2': generate_c2
    }

    out_dir = 'curriculum/en/exam'
    os.makedirs(out_dir, exist_ok=True)

    for level, gen in generators.items():
        data = gen()
        out_path = os.path.join(out_dir, f'{level}.json')
        with open(out_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            f.write('\n')
        print(f"Generated {out_path}")

if __name__ == '__main__':
    main()

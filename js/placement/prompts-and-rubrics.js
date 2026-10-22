/**
 * COSY Languages - Prompts & Rubrics Specifications
 * Task prompts across CEFR bands (A0-C2) for Writing and Speaking,
 * along with analytic rubrics and performance anchors.
 */

const WRITING_PROMPTS = {
  en: [
    {
      id: "write_en_a0_a1",
      band: "A1",
      targetBands: ["A0", "A1"],
      title: "Personal Introduction Message",
      instruction: "Write a short message to introduce yourself to your language group.",
      prompt: "Introduce yourself. State your name, where you live, your job or studies, and why you want to learn English.",
      minWords: 20,
      maxWords: 50,
      timeLimitMinutes: 5,
      cefrDescriptor: "Can write simple isolated phrases and sentences about themselves and where they live."
    },
    {
      id: "write_en_a2",
      band: "A2",
      targetBands: ["A2"],
      title: "Describing a Recent Experience",
      instruction: "Write an email to a friend about a recent trip or event.",
      prompt: "Describe a trip you took recently or an event you attended. Mention where you went, who you were with, what you did, and whether you enjoyed it.",
      minWords: 50,
      maxWords: 90,
      timeLimitMinutes: 10,
      cefrDescriptor: "Can write a series of simple phrases and sentences linked with simple connectors like 'and', 'but' and 'because'."
    },
    {
      id: "write_en_b1",
      band: "B1",
      targetBands: ["B1"],
      title: "Opinion & Problem Explanation",
      instruction: "Write a response for an online community forum.",
      prompt: "A friend is considering taking a gap year before starting university or work. Explain the potential advantages and disadvantages of taking a gap year, and share your personal recommendation.",
      minWords: 100,
      maxWords: 160,
      timeLimitMinutes: 15,
      cefrDescriptor: "Can write straightforward connected text on a range of familiar subjects within their field of interest by linking a series of shorter discrete elements into a linear sequence."
    },
    {
      id: "write_en_b2",
      band: "B2",
      targetBands: ["B2"],
      title: "Structured Argument / Formal Request",
      instruction: "Write a formal letter or proposal.",
      prompt: "Write a letter to your local municipal council proposing the creation of a new public park or pedestrian zone in your city. Provide structured arguments regarding social, health, and environmental benefits, and address potential community objections.",
      minWords: 180,
      maxWords: 240,
      timeLimitMinutes: 20,
      cefrDescriptor: "Can write clear, detailed text on a variety of subjects and synthesize and evaluate information and arguments from a number of sources."
    },
    {
      id: "write_en_c1",
      band: "C1",
      targetBands: ["C1"],
      title: "Nuanced Professional / Academic Analysis",
      instruction: "Write a brief analytical report for a professional audience.",
      prompt: "Analyze the impact of artificial intelligence and automation on remote workforce collaboration. Discuss both productivity gains and potential challenges regarding corporate culture and employee well-being, proposing specific strategic measures leadership should implement.",
      minWords: 250,
      maxWords: 320,
      timeLimitMinutes: 25,
      cefrDescriptor: "Can express themselves with clarity and precision in well-structured text, presenting complex subjects with appropriate register and style."
    },
    {
      id: "write_en_c2",
      band: "C2",
      targetBands: ["C2"],
      title: "Complex Synthesis & Critical Argumentation",
      instruction: "Write a critical essay or policy evaluation.",
      prompt: "Synthesize the tension between technological acceleration, digital privacy, and individual autonomy in contemporary democratic societies. Critically evaluate whether existing regulatory frameworks are adequate, employing sophisticated rhetorical strategies, precise stylistic registers, and nuanced argument structures.",
      minWords: 350,
      maxWords: 450,
      timeLimitMinutes: 30,
      cefrDescriptor: "Can write clear, smoothly flowing, complex texts in an appropriate and effective style and a logical structure which helps the reader to find and remember significant points."
    }
  ]
};

const SPEAKING_PROMPTS = {
  en: [
    {
      id: "speak_en_01_intro",
      band: "A1",
      stage: "personal_intro",
      title: "Part 1: Personal Introduction",
      instruction: "Record a short personal introduction.",
      prompt: "Please state your name, where you are from, what languages you speak, and what your main goal is for taking this assessment today.",
      prepSeconds: 15,
      recordSeconds: 45,
      cefrDescriptor: "Can produce simple mainly isolated phrases about people and places."
    },
    {
      id: "speak_en_02_routine",
      band: "A2",
      stage: "short_responses",
      title: "Part 2: Daily Routine & Everyday Life",
      instruction: "Answer the prompt in clear detail.",
      prompt: "Describe what a typical weekday looks like for you from morning until evening. What is your favorite part of the day and why?",
      prepSeconds: 20,
      recordSeconds: 60,
      cefrDescriptor: "Can give a simple description or presentation of people, living or working conditions, daily routines, likes/dislikes."
    },
    {
      id: "speak_en_03_story",
      band: "B1",
      stage: "narration",
      title: "Part 3: Description & Storytelling",
      instruction: "Narrate an experience or event.",
      prompt: "Describe an unexpected situation or small problem you encountered recently (for example, while traveling, at work, or at home). How did you handle it, and what was the outcome?",
      prepSeconds: 30,
      recordSeconds: 90,
      cefrDescriptor: "Can relate a plot of a book or film and describe reactions; can narrate a story or relate a detailed event."
    },
    {
      id: "speak_en_04_argument",
      band: "B2",
      stage: "opinion_argument",
      title: "Part 4: Expressing & Defending Opinions",
      instruction: "Present a structured argument.",
      prompt: "Some people argue that working from home leads to higher productivity, while others believe that in-person office collaboration is essential for innovation. Discuss both viewpoints and give your own reasoned perspective.",
      prepSeconds: 45,
      recordSeconds: 120,
      cefrDescriptor: "Can give clear, systematically developed presentations, with highlighting of significant points, and can expand and support points of view at some length with subsidiary points and suitable examples."
    },
    {
      id: "speak_en_05_spontaneous",
      band: "C1",
      stage: "clarification_spontaneous",
      title: "Part 5: Spontaneous Response & Complex Discussion",
      instruction: "Respond spontaneously to an abstract challenge.",
      prompt: "Imagine someone challenges your position by claiming that technology has diminished real human connection rather than enhancing it. Spontaneously address their argument, clarify your position, and offer a nuanced perspective.",
      prepSeconds: 30,
      recordSeconds: 120,
      cefrDescriptor: "Can express themselves fluently and spontaneously, almost effortlessly; can formulate ideas and opinions with precision and relate their contribution skillfully to those of other speakers."
    }
  ]
};

const WRITING_RUBRIC = {
  criteria: [
    {
      key: "task_fulfilment",
      name: "Task Fulfilment & Prompt Responsiveness",
      weight: 0.20,
      levels: {
        A1: "Addresses basic elements with isolated statements; may miss secondary details.",
        A2: "Fulfills the prompt simply; addresses main points with basic detail.",
        B1: "Fulfills all core requirements; develops ideas linearly with adequate relevance.",
        B2: "Fully addresses all aspects of the prompt with well-developed, clear arguments.",
        C1: "Exemplary task completion with sophisticated elaboration and defined audience awareness.",
        C2: "Masterful, complete fulfillment with complete synthesis, subtlety, and authoritative insight."
      }
    },
    {
      key: "organisation_cohesion",
      name: "Organisation & Cohesion",
      weight: 0.20,
      levels: {
        A1: "Words or short phrases linked with simple connectors ('and', 'then').",
        A2: "Linked sentences using basic cohesive devices ('because', 'but', 'so').",
        B1: "Clear overall paragraph structure; uses linear connectors and logical transitions.",
        B2: "Well-structured paragraphing; uses a varied range of cohesive devices smoothly.",
        C1: "Flawless paragraph flow, cohesive devices integrated seamlessly throughout text.",
        C2: "Exemplary rhetorical architecture; effortless transitions and organizational cohesion."
      }
    },
    {
      key: "grammatical_range_accuracy",
      name: "Grammatical Range & Accuracy",
      weight: 0.20,
      levels: {
        A1: "Simple sentence patterns; frequent errors in basic structures.",
        A2: "Uses basic tense structures correctly; errors occur in complex attempts.",
        B1: "Good control of everyday grammar; minor slips when using complex clauses.",
        B2: "Wide range of complex structures (conditionals, passives); high degree of control.",
        C1: "Consistently accurate complex grammar; rare minor slips that do not impede clarity.",
        C2: "Flawless, highly flexible control of complex and subtle grammatical patterns."
      }
    },
    {
      key: "vocabulary_range_precision",
      name: "Vocabulary Range & Precision",
      weight: 0.20,
      levels: {
        A1: "Basic concrete vocabulary limited to immediate personal topics.",
        A2: "Sufficient vocabulary to express daily routine, feelings, and basic experiences.",
        B1: "Sufficient range to express opinions and describe events without major repetition.",
        B2: "Broad lexical range including collocations and phrasal expressions with precision.",
        C1: "Rich, precise vocabulary; natural idiomatic usage and subtle word choice.",
        C2: "Extensive, nuanced vocabulary with precise control of register, connotations, and style."
      }
    },
    {
      key: "register_appropriateness",
      name: "Register & Contextual Appropriateness",
      weight: 0.10,
      levels: {
        A1: "Basic informal awareness.",
        A2: "Generally appropriate tone for simple personal communications.",
        B1: "Distinguishes between formal and informal registers in basic contexts.",
        B2: "Maintains consistent register appropriate to formal/informal task requirements.",
        C1: "Fully appropriate tone and register tailored to audience and genre.",
        C2: "Masterful control of subtle stylistic nuances across all registers."
      }
    },
    {
      key: "mechanics_spelling_punctuation",
      name: "Mechanics, Spelling & Punctuation",
      weight: 0.10,
      levels: {
        A1: "Spelling errors frequent in basic words; simple punctuation.",
        A2: "Spelling usually accurate for frequent words; basic punctuation respected.",
        B1: "Spelling and punctuation generally accurate; mistakes rarely cause confusion.",
        B2: "High accuracy in spelling and punctuation; complex punctuation used appropriately.",
        C1: "Consistently correct mechanics, layout, and punctuation throughout.",
        C2: "Flawless mechanics adhering to standard publishing standards."
      }
    }
  ]
};

const SPEAKING_RUBRIC = {
  criteria: [
    {
      key: "fluency_coherence",
      name: "Fluency & Coherence",
      weight: 0.20,
      levels: {
        A1: "Speech is fragmented with long pauses while searching for basic words.",
        A2: "Can construct simple phrases; frequent hesitations and reformulations.",
        B1: "Can maintain speech continuous on familiar topics, though hesitations occur.",
        B2: "Speaks smoothly with natural tempo; rarely causes strain on the listener.",
        C1: "Fluent, spontaneous delivery; effortless flow without noticeable searching.",
        C2: "Native-like fluency; articulates complex thoughts spontaneously with natural cadence."
      }
    },
    {
      key: "vocabulary_range_precision",
      name: "Vocabulary Range & Precision",
      weight: 0.20,
      levels: {
        A1: "Basic isolated word stock for simple concrete needs.",
        A2: "Sufficient vocabulary for basic daily exchanges.",
        B1: "Good range for general topics; paraphrases when exact word is forgotten.",
        B2: "Varied vocabulary including idiomatic phrases and domain collocations.",
        C1: "Rich, precise vocabulary allowing subtle nuances to be expressed easily.",
        C2: "Virtually unlimited lexical control, including rare idioms and subtle distinctions."
      }
    },
    {
      key: "grammatical_range_accuracy",
      name: "Grammatical Range & Accuracy",
      weight: 0.20,
      levels: {
        A1: "Uses simple memorized structures; frequent basic grammatical errors.",
        A2: "Uses basic tense forms correctly; errors occur in longer utterances.",
        B1: "Good grammatical control in predictable situations; occasional slips in complex structures.",
        B2: "Good control of complex syntax; errors do not impair overall communication.",
        C1: "Consistently high grammatical accuracy; complex sentence patterns used naturally.",
        C2: "Flawless grammatical precision across all communicative contexts."
      }
    },
    {
      key: "pronunciation_intelligibility",
      name: "Pronunciation & Intelligibility",
      weight: 0.20,
      levels: {
        A1: "Pronunciation strongly influenced by native language; requires listener patience.",
        A2: "Pronunciation generally clear enough to be understood despite obvious accent.",
        B1: "Intelligible throughout; accent may be apparent but rarely hinders understanding.",
        B2: "Clear, natural pronunciation and intonation; stress patterns are correct.",
        C1: "Naturally clear articulation, intonation, and stress patterns throughout.",
        C2: "Effortlessly intelligible with precise intonation and expressive stress control."
      }
    },
    {
      key: "interaction_spontaneity",
      name: "Interaction, Turn-Taking & Spontaneity",
      weight: 0.20,
      levels: {
        A1: "Relies on non-verbal support and repetition from the interlocutor.",
        A2: "Can ask and answer simple questions; struggles to maintain ongoing conversation.",
        B1: "Can initiate, maintain, and close simple face-to-face conversation on familiar topics.",
        B2: "Interacts fluently and spontaneously; takes turns naturally without awkward pauses.",
        C1: "Skilfully interweaves contributions into discussion; responds flexibly to turns.",
        C2: "Effortlessly navigates complex verbal interaction, subtext, and spontaneous debate."
      }
    }
  ]
};

const PROMPTS_AND_RUBRICS = {
  writingPrompts: WRITING_PROMPTS,
  speakingPrompts: SPEAKING_PROMPTS,
  writingRubric: WRITING_RUBRIC,
  speakingRubric: SPEAKING_RUBRIC
};

if (typeof window !== 'undefined') {
  window.COSY_PLACEMENT_PROMPTS_RUBRICS = PROMPTS_AND_RUBRICS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROMPTS_AND_RUBRICS;
}

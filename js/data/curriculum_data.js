/**
 * CURRICULUM DATA & COURSE CONFIGURATION
 * Shared access codes for specific courses.
 */

const COURSES = {
  "COSY-FR-B1-GEN": { lang: "FR", level: "B1", type: "GEN" },
  "COSY-EN-A1-GEN": { lang: "EN", level: "A1", type: "GEN" },
  "COSY-EN-A2-GEN": { lang: "EN", level: "A2", type: "GEN" },
  "COSY-IT-B2-SPK": { lang: "IT", level: "B2", type: "SPK" },
  "COSY-RU-A1-GEN": { lang: "RU", level: "A1", type: "GEN" },
  "COSY-EL-C1-EXM": { lang: "EL", level: "C1", type: "EXM" },
  "COSY-FR-A1-GEN": { lang: "FR", level: "A1", type: "GEN" },
  "COSY-EN-B2-SPK": { lang: "EN", level: "B2", type: "SPK" },
  "DEMO":           { lang: "FR", level: "B1", type: "GEN" },
};

const LANGS = {
  EN: { label: "English", flag: "🇬🇧" },
  FR: { label: "Français", flag: "🇫🇷" },
  IT: { label: "Italiano", flag: "🇮🇹" },
  RU: { label: "Русский", flag: "🇷🇺" },
  EL: { label: "Ελληνικά", flag: "🇬🇷" }
};

const LEVELS = {
  A1: "Baby (A1)",
  A2: "Primary (A2)",
  B1: "Middle (B1)",
  B2: "High (B2)",
  C1: "Uni (C1)",
  C2: "Prof (C2)"
};

const TYPES = {
  GEN: { label: "General Course", icon: "📖" },
  SPK: { label: "Spoken Course", icon: "🗣️" },
  EXM: { label: "Exam Prep", icon: "📝" }
};

const REFS = {
  FR: [
    {
      group: "Dictionaries & pronunciation", items: [
        { icon: "📖", name: "Larousse", desc: "Monolingual French dictionary", url: "https://www.larousse.fr/dictionnaires/francais" },
        { icon: "🔤", name: "WordReference", desc: "FR↔EN with discussion forum", url: "https://www.wordreference.com/fren/" },
        { icon: "🔊", name: "Forvo", desc: "Hear native pronunciations", url: "https://forvo.com/languages/fr/" },
      ]
    },
    {
      group: "Grammar & conjugation", items: [
        { icon: "🔧", name: "Cooljugator", desc: "French verb conjugation tool", url: "https://cooljugator.com/fr" },
        { icon: "📝", name: "Bescherelle", desc: "Classic French grammar reference", url: "https://bescherelle.com/" },
        { icon: "📚", name: "Lawless French", desc: "Clear, structured grammar guides", url: "https://www.lawlessfrench.com/grammar/" },
      ]
    },
    {
      group: "Immersion", items: [
        { icon: "📻", name: "Radio Garden", desc: "Live French radio worldwide", url: "https://radio.garden/" },
        { icon: "📺", name: "TV5Monde", desc: "French TV with subtitles", url: "https://www.tv5monde.com/" },
        { icon: "🎬", name: "TV Garden", desc: "French channels online", url: "https://tv.garden/" },
      ]
    },
  ],
  EN: [
    {
      group: "Dictionaries & pronunciation", items: [
        { icon: "📖", name: "Oxford Learner's", desc: "Authoritative English dictionary", url: "https://www.oxfordlearnersdictionaries.com/" },
        { icon: "🔤", name: "Merriam-Webster", desc: "US English + thesaurus", url: "https://www.merriam-webster.com/" },
        { icon: "🔊", name: "Forvo", desc: "Native English pronunciations", url: "https://forvo.com/languages/en/" },
      ]
    },
    {
      group: "Grammar", items: [
        { icon: "📝", name: "British Council", desc: "Clear grammar explanations", url: "https://learnenglish.britishcouncil.org/grammar" },
      ]
    },
    {
      group: "Immersion", items: [
        { icon: "📺", name: "BBC iPlayer", desc: "British English content", url: "https://www.bbc.co.uk/iplayer" },
        { icon: "📻", name: "Radio Garden", desc: "Live English radio stations", url: "https://radio.garden/" },
      ]
    },
  ],
  IT: [
    {
      group: "Dictionaries & pronunciation", items: [
        { icon: "📖", name: "Treccani", desc: "Official Italian dictionary", url: "https://www.treccani.it/vocabolario/" },
        { icon: "🔤", name: "WordReference", desc: "IT↔EN dictionary", url: "https://www.wordreference.com/iten/" },
        { icon: "🔊", name: "Forvo", desc: "Italian pronunciation guide", url: "https://forvo.com/languages/it/" },
      ]
    },
    {
      group: "Grammar & conjugation", items: [
        { icon: "🔧", name: "Cooljugator", desc: "Italian verb conjugation", url: "https://cooljugator.com/it" },
      ]
    },
    {
      group: "Immersion", items: [
        { icon: "📺", name: "RAI Play", desc: "Italian public TV online", url: "https://www.raiplay.it/" },
        { icon: "📻", name: "Radio Garden", desc: "Live Italian radio", url: "https://radio.garden/" },
      ]
    },
  ],
  RU: [
    {
      group: "Dictionaries & pronunciation", items: [
        { icon: "📖", name: "Gramota", desc: "Official Russian language portal", url: "http://www.gramota.ru/" },
        { icon: "🔤", name: "WordReference", desc: "RU↔EN dictionary", url: "https://www.wordreference.com/ruen/" },
        { icon: "🔊", name: "Forvo", desc: "Russian native pronunciations", url: "https://forvo.com/languages/ru/" },
      ]
    },
    {
      group: "Grammar & conjugation", items: [
        { icon: "🔧", name: "Cooljugator", desc: "Russian verb conjugation", url: "https://cooljugator.com/ru" },
      ]
    },
    {
      group: "Immersion", items: [
        { icon: "📻", name: "Radio Garden", desc: "Russian radio stations", url: "https://radio.garden/" },
      ]
    },
  ],
  EL: [
    {
      group: "Dictionaries & pronunciation", items: [
        { icon: "📖", name: "Lexigram", desc: "Greek dictionary", url: "https://www.lexigram.gr/" },
        { icon: "🔤", name: "WordReference", desc: "GR↔EN dictionary", url: "https://www.wordreference.com/gren/" },
        { icon: "🔊", name: "Forvo", desc: "Greek pronunciation", url: "https://forvo.com/languages/el/" },
      ]
    },
    {
      group: "Grammar & conjugation", items: [
        { icon: "🔧", name: "Cooljugator", desc: "Greek verb conjugation", url: "https://cooljugator.com/gr" },
      ]
    },
    {
      group: "Immersion", items: [
        { icon: "📺", name: "ERT", desc: "Greek public television", url: "https://www.ert.gr/" },
        { icon: "📻", name: "Radio Garden", desc: "Greek radio stations", url: "https://radio.garden/" },
      ]
    },
  ],
};

const CURRICULUM = {
  EN: {
    GEN: {
      A1: "FROM_EN_A1_DATA",
      A2: []
    },
    SPK: { B2: [] }
  },
  FR: {
    GEN: {
      A1: [
        {
          title: "Hello, I'm…", subtitle: "Introductions & greetings",
          skills: ["speaking", "vocab"], desc: "Say your name, nationality and job. Greet people naturally in your new language for the very first time.", duration: "60 min", practiceTheme: "Greetings",
          grammar: [
            {
              point: "Subject pronouns + être (to be)", tag: "Present tense",
              explain: "In French every sentence needs a subject pronoun. The verb être is the first irregular verb you'll meet — and also the most useful.",
              rule: "je suis · tu es · il/elle est · nous sommes · vous êtes · ils/elles sont",
              examples: [{ t: "Je suis Marie.", e: "I am Marie." }, { t: "Tu es anglais ?", e: "Are you English?" }, { t: "Elle est professeure.", e: "She is a teacher." }, { t: "Vous êtes d'où ?", e: "Where are you from?" }],
              tip: "💡 Professions don't use an article: je suis professeur — not je suis un professeur.",
              practiceTheme: "Greetings",
            },
            {
              point: "tu vs vous — formality", tag: "Register",
              explain: "French has two words for 'you'. Use tu with friends and family. Use vous with strangers, colleagues and anyone older.",
              rule: "tu (informal / singular) · vous (formal OR plural)",
              examples: [{ t: "Comment tu t'appelles ?", e: "What's your name? (informal)" }, { t: "Comment vous appelez-vous ?", e: "What is your name? (formal)" }],
              tip: "💡 When in doubt, always use vous — it's polite and never offensive.",
              practiceTheme: "Greetings",
            },
          ],
          vocab: [
            {
              group: "Essential greetings", words: [
                { w: "Bonjour", phon: "/bɔ̃.ʒuʁ/", trans: "Hello / Good morning", key: true },
                { w: "Bonsoir", phon: "/bɔ̃.swaʁ/", trans: "Good evening", key: false },
                { w: "Salut", phon: "/sa.ly/", trans: "Hi (informal)", key: true },
                { w: "Au revoir", phon: "/o.ʁə.vwaʁ/", trans: "Goodbye", key: true },
                { w: "Merci", phon: "/mɛʁ.si/", trans: "Thank you", key: true },
                { w: "S'il vous plaît", phon: "/sil.vu.plɛ/", trans: "Please (formal)", key: true },
              ]
            },
            {
              group: "Introducing yourself", words: [
                { w: "Je m'appelle…", phon: "/ʒə.ma.pɛl/", trans: "My name is…", key: true },
                { w: "Je suis…", phon: "/ʒə.sɥi/", trans: "I am… (nationality/job)", key: true },
                { w: "J'habite à…", phon: "/ʒa.bit.a/", trans: "I live in…", key: false },
                { w: "Je viens de…", phon: "/ʒə.vjɛ̃.də/", trans: "I'm from…", key: false },
                { w: "Enchanté(e)", phon: "/ɑ̃.ʃɑ̃.te/", trans: "Nice to meet you", key: true },
              ]
            },
          ],
        },
        {
          title: "My Family", subtitle: "People & relationships",
          skills: ["speaking", "vocab", "grammar"], desc: "Describe your family members and their jobs. First possessive structures.", duration: "60 min", practiceTheme: "Family",
          grammar: [
            {
              point: "Possessive adjectives", tag: "Agreement",
              explain: "In French possessive adjectives agree with the noun they describe — not with the owner. 'My sister' is ma sœur but 'my brother' is mon frère.",
              rule: "mon / ma / mes (my) · ton / ta / tes (your) · son / sa / ses (his/her)",
              examples: [{ t: "Mon père est médecin.", e: "My father is a doctor." }, { t: "Ma mère s'appelle Claire.", e: "My mother's name is Claire." }, { t: "Mes frères habitent à Paris.", e: "My brothers live in Paris." }, { t: "Son mari est sympa.", e: "Her husband is nice." }],
              tip: "💡 Use mon/ton/son before feminine nouns starting with a vowel: mon amie (not ma amie).",
              practiceTheme: "Family",
            },
            {
              point: "avoir (to have) — present tense", tag: "Irregular verb",
              explain: "Avoir is the second essential irregular verb. You'll use it to describe your family and possessions constantly.",
              rule: "j'ai · tu as · il/elle a · nous avons · vous avez · ils/elles ont",
              examples: [{ t: "J'ai deux sœurs.", e: "I have two sisters." }, { t: "Tu as des enfants ?", e: "Do you have children?" }, { t: "Elle a un frère.", e: "She has a brother." }],
              tip: "💡 Don't confuse a (has) with à (at/to). No accent on the verb!",
              practiceTheme: "Family",
            },
          ],
          vocab: [
            {
              group: "Family members", words: [
                { w: "le père", phon: "/lɛ.pɛʁ/", trans: "father", key: true },
                { w: "la mère", phon: "/la.mɛʁ/", trans: "mother", key: true },
                { w: "le frère", phon: "/lɛ.fʁɛʁ/", trans: "brother", key: true },
                { w: "la sœur", phon: "/la.sœʁ/", trans: "sister", key: true },
                { w: "le mari", phon: "/lɛ.ma.ʁi/", trans: "husband", key: false },
                { w: "la femme", phon: "/la.fam/", trans: "wife / woman", key: false, note: "context-dependent" },
                { w: "les enfants", phon: "/le.zɑ̃.fɑ̃/", trans: "children", key: true },
                { w: "les grands-parents", phon: "/le.gʁɑ̃.pa.ʁɑ̃/", trans: "grandparents", key: false },
              ]
            },
          ],
        },
      ],
      B1: [
        {
          title: "Opinions & Arguments", subtitle: "Agreeing, disagreeing, justifying",
          skills: ["speaking", "grammar", "vocab"], desc: "Express and defend opinions clearly. Discourse markers and hedging language.", duration: "60 min", practiceTheme: "Opinions",
          grammar: [
            {
              point: "Subjunctive after opinion verbs", tag: "Subjonctif",
              explain: "The subjunctive is triggered after verbs expressing doubt, emotion, or subjective judgement. It's a key B1→B2 marker.",
              rule: "Je pense que + indicatif · Je ne pense pas que + subjonctif",
              examples: [{ t: "Je pense que c'est vrai.", e: "I think it's true. (indicative)" }, { t: "Je ne pense pas que ce soit vrai.", e: "I don't think it's true. (subjunctive)" }, { t: "Il faut qu'on parle.", e: "We need to talk." }, { t: "Je veux qu'il vienne.", e: "I want him to come." }],
              tip: "💡 Learn the most common triggers first: il faut que, je veux que, bien que, pour que.",
              practiceTheme: "Opinions",
            },
            {
              point: "Discourse markers for debate", tag: "Connectors",
              explain: "These linking phrases are what make spoken French sound structured and natural. They are the backbone of any well-argued opinion.",
              rule: "D'abord… · Ensuite… · De plus… · En revanche… · En fin de compte…",
              examples: [{ t: "D'abord, je pense que…", e: "First of all, I think that…" }, { t: "En revanche, il faut admettre que…", e: "On the other hand, we must admit that…" }, { t: "En fin de compte, cela dépend de…", e: "Ultimately, it depends on…" }, { t: "Certes, mais…", e: "Granted, but…" }],
              tip: "💡 Certes, mais… is a powerful B1/B2 move — it acknowledges the other view before countering it.",
              practiceTheme: "Opinions",
            },
          ],
          vocab: [
            {
              group: "Giving opinions", words: [
                { w: "À mon avis", phon: "/a.mɔ̃.na.vi/", trans: "In my opinion", key: true },
                { w: "Il me semble que", phon: "/il.mə.sɑ̃bl.kə/", trans: "It seems to me that", key: true },
                { w: "Tout à fait", phon: "/tu.ta.fɛ/", trans: "Absolutely / Exactly", key: true },
                { w: "Pas du tout", phon: "/pa.dy.tu/", trans: "Not at all", key: true },
                { w: "C'est discutable", phon: "/se.dis.ky.tabl/", trans: "That's debatable", key: false },
                { w: "Ça dépend", phon: "/sa.de.pɑ̃/", trans: "It depends", key: true },
                { w: "Je suis convaincu(e) que", phon: "", trans: "I am convinced that", key: false },
              ]
            },
          ],
        },
      ],
    },
    SPK: {
      B2: [
        {
          title: "Podcast Style", subtitle: "Extended fluent monologue",
          skills: ["speaking", "listening"], desc: "Talk about a topic for 5 minutes without stopping. Your teacher only asks follow-up questions.", duration: "30 min", practiceTheme: "Conversation",
          grammar: [],
          vocab: [{
            group: "Filler & thinking phrases", words: [
              { w: "Ça me fait penser à…", phon: "", trans: "That makes me think of…", key: true },
              { w: "Je dirais que…", phon: "", trans: "I would say that…", key: true },
              { w: "Dans une certaine mesure", phon: "", trans: "To a certain extent", key: false },
              { w: "En quelque sorte…", phon: "", trans: "In a way…", key: false },
              { w: "Il va sans dire que…", phon: "", trans: "It goes without saying that…", key: true },
            ]
          }],
        },
      ]
    }
  },
  IT: { SPK: { B2: [] } },
  RU: { GEN: { A1: [] } },
  EL: { EXM: { C1: [
    {
      title: "Advanced Register", subtitle: "C1 vocabulary and grammar targets",
      skills: ["grammar", "vocab", "writing"], desc: "The specific grammar and vocabulary ranges that separate B2 from C1 in the exam marking criteria.", duration: "120 min", practiceTheme: "Advanced",
      grammar: [
        {
          point: "Nominalisation (verbal nouns)", tag: "C1 style",
          explain: "Advanced French uses nouns derived from verbs to make writing more concise and formal. This is a key C1 exam marker.",
          rule: "verb → noun: décider → la décision · analyser → l'analyse · développer → le développement",
          examples: [{ t: "Ils ont décidé de partir. → La décision de partir…", e: "They decided to leave → The decision to leave…" }, { t: "On a analysé les résultats. → L'analyse des résultats…", e: "They analysed results → The analysis of results…" }],
          tip: "💡 Nominalisations are essential in formal writing. Practise converting full sentences.",
          practiceTheme: "Advanced",
        },
      ],
      vocab: [{
        group: "C1 academic phrases", words: [
          { w: "force est de constater que", phon: "", trans: "one must acknowledge that", key: true },
          { w: "il convient de souligner", phon: "", trans: "it is worth emphasising", key: true },
          { w: "à cet égard", phon: "", trans: "in this regard", key: false },
          { w: "dans la mesure où", phon: "", trans: "insofar as", key: true },
          { w: "quoi qu'il en soit", phon: "", trans: "be that as it may", key: true },
        ]
      }],
    },
  ] } }
};

if(!window.curriculumData) window.curriculumData = {};
window.curriculumData.fr_a1 = [
{
  id:'u1', num:1, label:'Getting Started',
  lessons: [
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
  ]
}
];

/**
 * WORKBOOK DATA — exercises, grammar blocks & homework
 */

const WORKBOOK_TOPICS = [
  // ─── ENGLISH A1 ───
  {
    id: 'en-a1-intro', lang: 'en', flag: '🇬🇧', level: 'a1', title: 'Introducing Yourself',
    desc: 'Basic greetings & introductions',
    img: 'images/cosyenglish.png',
    grammarBlocks: [
      {
        title: 'Basic greetings & introductions',
        html: `
        <table class="wb-table">
          <tr class="wt-sec"><td colspan="2">📌 Greetings</td></tr>
          <tr><td class="wt-label">Hello / Hi</td><td class="wt-l"><span class="key-v">Hello!</span> / <span class="key-v">Hi!</span></td></tr>
          <tr><td class="wt-label">My name is…</td><td class="wt-l"><span class="key-v">My name is</span> Maria. / <span class="key-v">I'm</span> Maria.</td></tr>
          <tr><td class="wt-label">Nice to meet you</td><td class="wt-l"><span class="key-v">Nice to meet you!</span></td></tr>
          <tr><td class="wt-label">How are you?</td><td class="wt-l"><span class="key-v">How are you?</span> → I'm <span class="key-v">fine</span>, thank you.</td></tr>
        </table>`
      }
    ],
    exercises: [
      { id: 'en-a1-0-1', q: '"Nice to ___!" (greeting)', type: 'fill', ans: 'meet you', fb: '✅ Nice to meet you!' },
      { id: 'en-a1-0-2', q: 'How do you say "My name is" in a shorter way?', type: 'fill', ans: "I'm", fb: "✅ I'm Maria." }
    ]
  },
  {
    id: 'en-a1-tobe-core', lang: 'en', flag: '🇬🇧', level: 'a1', title: 'Verb TO BE — Core',
    desc: 'I am / You are / He is',
    verbKey: 'to be',
    img: 'images/cosyenglish.png',
    grammarBlocks: [
      {
        title: 'Core Forms (Singular)',
        html: `
        <table class="wb-table">
          <tr><td class="wt-label">I</td><td class="wt-c"><span class="key-v">am</span> / 'm</td></tr>
          <tr><td class="wt-label">you</td><td class="wt-c"><span class="key-v">are</span> / 're</td></tr>
          <tr><td class="wt-label">he / she / it</td><td class="wt-c"><span class="key-v">is</span> / 's</td></tr>
        </table>`
      }
    ],
    exercises: [
      { id: 'en-a1-0-3', q: 'I ___ a student.', type: 'mcq', opts: ['am', 'is', 'are'], ans: 'am', fb: '✅ I am' },
      { id: 'en-a1-0-4', q: 'She ___ French.', type: 'mcq', opts: ['am', 'is', 'are'], ans: 'is', fb: '✅ She is' }
    ]
  },

  // ─── FRENCH A1 ───
  {
    id: 'fr-a1-intro', lang: 'fr', flag: '🇫🇷', level: 'a1', title: 'Salutations',
    desc: 'Greetings & introductions',
    img: 'images/cosyfrench.png',
    grammarBlocks: [
      {
        title: 'Dire bonjour',
        html: `
        <table class="wb-table">
          <tr><td class="wt-label">Bonjour / Salut</td><td class="wt-l"><span class="key-v">Bonjour !</span> · <span class="key-v">Salut !</span></td></tr>
          <tr><td class="wt-label">Je m'appelle…</td><td class="wt-l"><span class="key-v">Je m'appelle</span> Marie.</td></tr>
          <tr><td class="wt-label">Au revoir</td><td class="wt-l"><span class="key-v">Au revoir !</span> · <span class="key-v">À bientôt !</span></td></tr>
        </table>`
      }
    ],
    exercises: [
      { id: 'fr-a1-0-1', q: 'How do you say "Hello" in French (formal)?', type: 'fill', ans: 'Bonjour', fb: '✅ Bonjour !' }
    ]
  },

  // ─── ITALIAN A1 ───
  {
    id: 'it-a1-intro', lang: 'it', flag: '🇮🇹', level: 'a1', title: 'Saluti',
    desc: 'Greetings & introductions',
    img: 'images/cosyitalian.png',
    grammarBlocks: [
      {
        title: 'Basic greetings',
        html: `
        <table class="wb-table">
          <tr><td class="wt-label">Buongiorno / Ciao</td><td class="wt-l"><span class="key-v">Buongiorno!</span> · <span class="key-v">Ciao!</span></td></tr>
          <tr><td class="wt-label">Mi chiamo…</td><td class="wt-l"><span class="key-v">Mi chiamo</span> Luca.</td></tr>
        </table>`
      }
    ],
    exercises: [
      { id: 'it-a1-0-1', q: 'How do you say "My name is" in Italian?', type: 'fill', ans: 'Mi chiamo', fb: '✅ Mi chiamo Luca.' }
    ]
  },

  // ─── SPANISH A1 ───
  {
    id: 'es-a1-intro', lang: 'es', flag: '🇪🇸', level: 'a1', title: 'Saludos',
    desc: 'Greetings & introductions',
    img: 'images/cosyspanish.png',
    grammarBlocks: [
      {
        title: 'Basic greetings',
        html: `
        <table class="wb-table">
          <tr><td class="wt-label">Hola / Buenos días</td><td class="wt-l"><span class="key-v">¡Hola!</span> · <span class="key-v">Buenos días</span></td></tr>
          <tr><td class="wt-label">Me llamo…</td><td class="wt-l"><span class="key-v">Me llamo</span> Carlos.</td></tr>
        </table>`
      }
    ],
    exercises: [
      { id: 'es-a1-0-1', q: 'How do you say "Hello" in Spanish?', type: 'fill', ans: 'Hola', fb: '✅ ¡Hola!' }
    ]
  },

  // ─── GERMAN A1 ───
  {
    id: 'de-a1-intro', lang: 'de', flag: '🇩🇪', level: 'a1', title: 'Begrüßungen',
    desc: 'Greetings & introductions',
    img: 'images/cosygerman.png',
    grammarBlocks: [
      {
        title: 'Basic greetings',
        html: `
        <table class="wb-table">
          <tr><td class="wt-label">Hallo / Guten Tag</td><td class="wt-l"><span class="key-v">Hallo!</span> · <span class="key-v">Guten Tag</span></td></tr>
          <tr><td class="wt-label">Ich heiße…</td><td class="wt-l"><span class="key-v">Ich heiße</span> Hans. / <span class="key-v">Mein Name ist</span> Hans.</td></tr>
        </table>`
      }
    ],
    exercises: [
      { id: 'de-a1-0-1', q: 'How do you say "My name is" in German?', type: 'fill', ans: 'Ich heiße', fb: '✅ Ich heiße Hans.' }
    ]
  },

  // ─── RUSSIAN A1 ───
  {
    id: 'ru-a1-alpha', lang: 'ru', flag: '🇷🇺', level: 'a1', title: 'Алфавит',
    desc: 'The Cyrillic Alphabet',
    img: 'images/cosyrussian.png',
    grammarBlocks: [
      {
        title: 'False Friends',
        html: `
        <table class="wb-table">
          <tr><td class="wt-label">В в</td><td class="wt-c">/v/</td><td class="wt-l">NOT "w"!</td></tr>
          <tr><td class="wt-label">Н н</td><td class="wt-c">/n/</td><td class="wt-l">NOT "h"!</td></tr>
          <tr><td class="wt-label">Р р</td><td class="wt-c">/r/</td><td class="wt-l">NOT "p"!</td></tr>
        </table>`
      }
    ],
    exercises: [
      { id: 'ru-a1-0-1', q: 'В in Russian sounds like English...', type: 'mcq', opts: ['W', 'V', 'B'], ans: 'V', fb: '✅ В = /v/' }
    ]
  },

  // ─── GREEK A1 ───
  {
    id: 'el-a1-alpha', lang: 'el', flag: '🇬🇷', level: 'a1', title: 'Αλφάβητο',
    desc: 'The Greek Alphabet',
    img: 'images/cosygreek.png',
    grammarBlocks: [
      {
        title: 'Tricky Letters',
        html: `
        <table class="wb-table">
          <tr><td class="wt-label">Β β</td><td class="wt-c">/v/</td><td class="wt-l">NOT "b"!</td></tr>
          <tr><td class="wt-label">Δ δ</td><td class="wt-c">/ð/</td><td class="wt-l">Like "the"</td></tr>
        </table>`
      }
    ],
    exercises: [
      { id: 'el-a1-0-1', q: 'Β in Greek sounds like...', type: 'mcq', opts: ['B', 'V', 'W'], ans: 'V', fb: '✅ Β = /v/' }
    ]
  },

  // ─── PORTUGUESE A1 ───
  {
    id: 'pt-a1-intro', lang: 'pt', flag: '🇵🇹', level: 'a1', title: 'Saudações',
    desc: 'Greetings & introductions',
    img: 'images/cosyportugese.png',
    grammarBlocks: [
      {
        title: 'Basic greetings',
        html: `
        <table class="wb-table">
          <tr><td class="wt-label">Olá / Bom dia</td><td class="wt-l"><span class="key-v">Olá!</span> · <span class="key-v">Bom dia</span></td></tr>
          <tr><td class="wt-label">Chamo-me…</td><td class="wt-l"><span class="key-v">Chamo-me</span> Ana.</td></tr>
        </table>`
      }
    ],
    exercises: [
      { id: 'pt-a1-0-1', q: 'How do you say "Hello" in Portuguese?', type: 'fill', ans: 'Olá', fb: '✅ Olá!' }
    ]
  }
];

const WORKBOOK_HW_TASKS = [
  { id: 'hw1', text: 'Review the Grammar Reference for your target language', tag: 'grammar' },
  { id: 'hw2', text: 'Complete the workbook exercises for this topic', tag: 'grammar' },
  { id: 'hw3', text: 'Read the Pronunciation Guide section', tag: 'phonetics' },
  { id: 'hw4', text: 'Write 5 original sentences using the new grammar', tag: 'writing' }
];

const WORKBOOK_COURSE_CATALOGUE = {
  'en-a1': {
    phonetics: { ref: 'pronunciation-reference.html#en-a1', text: 'Focus on alphabet and basic vowels.' },
    homework: [
      { id: 'en-a1-h1', text: 'Write 5 sentences about yourself', tag: 'writing' },
      { id: 'en-a1-h2', text: 'Practise the TH sound', tag: 'phonetics' }
    ]
  },
  'fr-a1': {
    phonetics: { ref: 'pronunciation-reference.html#fr-a1', text: 'Focus on accents and nasal vowels.' },
    homework: [
      { id: 'fr-a1-h1', text: 'Learn numbers 1-10', tag: 'grammar' }
    ]
  },
  'it-a1': {
    phonetics: { ref: 'pronunciation-reference.html#it-a1', text: 'Focus on pronunciation of C and G.' },
    homework: [ { id: 'it-a1-h1', text: 'Learn common Italian greetings', tag: 'grammar' } ]
  },
  'es-a1': {
    phonetics: { ref: 'pronunciation-reference.html#es-a1', text: 'Focus on vowel clarity and the letter J.' },
    homework: [ { id: 'es-a1-h1', text: 'Learn the Spanish alphabet', tag: 'phonetics' } ]
  },
  'de-a1': {
    phonetics: { ref: 'pronunciation-reference.html#de-a1', text: 'Focus on compound vowels (ei, ie, eu).' },
    homework: [ { id: 'de-a1-h1', text: 'Learn numbers 1-12 in German', tag: 'grammar' } ]
  },
  'ru-a1': {
    phonetics: { ref: 'pronunciation-reference.html#ru-a1', text: 'Focus on vowel reduction (A vs O).' },
    homework: [ { id: 'ru-a1-h1', text: 'Memorize the Russian alphabet', tag: 'phonetics' } ]
  },
  'el-a1': {
    phonetics: { ref: 'pronunciation-reference.html#el-a1', text: 'Focus on diphthongs like OU and OI.' },
    homework: [ { id: 'el-a1-h1', text: 'Learn common Greek phrases', tag: 'grammar' } ]
  },
  'pt-a1': {
    phonetics: { ref: 'pronunciation-reference.html#pt-a1', text: 'Focus on nasal sounds and the letter LH.' },
    homework: [ { id: 'pt-a1-h1', text: 'Learn Portuguese numbers 1-10', tag: 'grammar' } ]
  }
};

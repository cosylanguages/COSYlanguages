/**
 * WORKBOOK DATA — exercises & homework
 */
const WORKBOOK_TOPICS = [
  {
    id: 'en-tobe', lang: 'en', flag: '🇬🇧', level: 'a1', title: 'Verb TO BE — Present',
    desc: 'am / is / are · affirmative, negative & questions',
    ref: 'grammar-reference.html#verb-to-be',
    verbKey: 'to be',
    img: 'images/cosyenglish.png',
    exercises: [
      { type: 'mcq', q: 'She ___ a doctor.', opts: ['am','is','are'], answer: 'is', fb: '✅ He/She/It → IS' },
      { type: 'mcq', q: 'We ___ at school.', opts: ['am','is','are'], answer: 'are', fb: '✅ We/You/They → ARE' },
      { type: 'mcq', q: 'I ___ not tired.', opts: ["am","is","are"], answer: 'am', fb: '✅ I → AM' },
      { type: 'fill', q: '___ they from France? (Am/Is/Are)', answer: 'Are', fb: '✅ They → Are (question)' },
      { type: 'fill', q: 'He ___ not happy. (am/is/are)', answer: 'is', fb: '✅ He → is not happy' },
      { type: 'mcq', q: '"___ you ready?" — "Yes, I ___."', opts: ['Are / am','Is / are','Am / is'], answer: 'Are / am', fb: '✅ Are you…? — Yes, I am.' },
    ]
  },
  {
    id: 'en-present', lang: 'en', flag: '🇬🇧', level: 'a1', title: 'Present Simple',
    desc: 'Habits & routines · don\'t / doesn\'t · Do / Does questions',
    ref: 'grammar-reference.html#present-simple',
    verbKey: 'to work',
    img: 'images/cosyenglish.png',
    exercises: [
      { type: 'mcq', q: 'She ___ in Paris. (work)', opts: ['work','works','working'], answer: 'works', fb: '✅ He/She/It → add -s' },
      { type: 'mcq', q: 'They ___ coffee. (like)', opts: ['likes','like','liking'], answer: 'like', fb: '✅ They → no -s' },
      { type: 'fill', q: 'He ___ not speak Spanish. (do/does)', answer: 'does', fb: '✅ He → doesn\'t (does not)' },
      { type: 'mcq', q: '___ she work on Saturdays?', opts: ['Do','Does','Is'], answer: 'Does', fb: '✅ She → Does she…?' },
      { type: 'fill', q: 'I ___ to the gym every day. (go)', answer: 'go', fb: '✅ I → go (no change)' },
    ]
  },
  {
    id: 'fr-etre', lang: 'fr', flag: '🇫🇷', level: 'a1', title: 'Verbe ÊTRE',
    desc: 'suis / es / est / sommes / êtes / sont · affirmation & négation',
    ref: 'grammar-reference.html#lang-fr',
    verbKey: 'être',
    img: 'images/cosyfrench.png',
    exercises: [
      { type: 'mcq', q: 'Je ___ professeur.', opts: ['suis','es','est'], answer: 'suis', fb: '✅ Je → suis' },
      { type: 'mcq', q: 'Vous ___ prêts ?', opts: ['sommes','êtes','sont'], answer: 'êtes', fb: '✅ Vous → êtes' },
      { type: 'fill', q: 'Ils ___ en retard. (être)', answer: 'sont', fb: '✅ Ils/Elles → sont' },
      { type: 'mcq', q: 'Je ne ___ pas fatigué.', opts: ['suis','est','es'], answer: 'suis', fb: '✅ Négation : je ne suis pas' },
      { type: 'fill', q: 'Elle ___ médecin. (être)', answer: 'est', fb: '✅ Il/Elle/On → est' },
    ]
  },
  {
    id: 'it-essere1', lang: 'it', flag: '🇮🇹', level: 'a1', title: 'ESSERE — Parte 1',
    desc: 'sono / sei / è · io, tu, lui, lei · interactif',
    ref: 'italiano-essere-1.html',
    verbKey: 'essere',
    img: 'images/cosyitalian.png',
    exercises: [
      { type: 'mcq', q: 'Io ___ italiano.', opts: ['sei','sono','è'], answer: 'sono', fb: '✅ Io → sono' },
      { type: 'mcq', q: 'Tu ___ a casa?', opts: ['sono','è','sei'], answer: 'sei', fb: '✅ Tu → sei' },
      { type: 'fill', q: 'Lei ___ professoressa. (essere)', answer: 'è', fb: '✅ Lui/Lei → è' },
      { type: 'mcq', q: 'Io non ___ stanco.', opts: ['sono','sei','è'], answer: 'sono', fb: '✅ Io non sono…' },
    ]
  },
  {
    id: 'es-ser', lang: 'es', flag: '🇪🇸', level: 'a1', title: 'Verbo SER',
    desc: 'soy / eres / es / somos / sois / son · identidad y origen',
    ref: 'grammar-reference.html#lang-es',
    verbKey: 'ser',
    img: 'images/cosyspanish.png',
    exercises: [
      { type: 'mcq', q: 'Yo ___ de Madrid.', opts: ['soy','eres','es'], answer: 'soy', fb: '✅ Yo → soy' },
      { type: 'mcq', q: 'Nosotros ___ estudiantes.', opts: ['somos','sois','son'], answer: 'somos', fb: '✅ Nosotros → somos' },
      { type: 'fill', q: 'Ellos ___ simpáticos. (ser)', answer: 'son', fb: '✅ Ellos/Ellas → son' },
      { type: 'mcq', q: '¿De dónde ___ tú?', opts: ['soy','eres','es'], answer: 'eres', fb: '✅ Tú → eres' },
      { type: 'fill', q: 'Ella ___ mi hermana. (ser)', answer: 'es', fb: '✅ Él/Ella/Usted → es' },
    ]
  },
  {
    id: 'ru-alpha', lang: 'ru', flag: '🇷🇺', level: 'a1', title: 'Алфавит — False Friends',
    desc: 'Cyrillic letters that look like Latin but sound different',
    ref: 'pronunciation-reference.html#ru-a1',
    img: 'images/cosyrussian.png',
    exercises: [
      { type: 'mcq', q: 'В in Russian sounds like…', opts: ['"W" as in water','"V" as in very','"B" as in ball'], answer: '"V" as in very', fb: '✅ В = /v/ — not W!' },
      { type: 'mcq', q: 'Р in Russian sounds like…', opts: ['"P" as in pen','Rolled "R"','"R" as in ring'], answer: 'Rolled "R"', fb: '✅ Р = rolled /r/ — looks like P but isn\'t!' },
      { type: 'mcq', q: 'С in Russian sounds like…', opts: ['"C" as in city','"S" as in sun','"K" as in key'], answer: '"S" as in sun', fb: '✅ С = /s/' },
      { type: 'fill', q: 'Н in Russian sounds like the English letter ___', answer: 'N', fb: '✅ Н = /n/ — looks like H but sounds like N' },
    ]
  },
  {
    id: 'el-alpha', lang: 'el', flag: '🇬🇷', level: 'a1', title: 'Αλφάβητο — Key Letters',
    desc: 'Letters with unexpected sounds · digraphs μπ, ντ, γκ, τσ',
    ref: 'pronunciation-reference.html#el-a1',
    img: 'images/cosygreek.png',
    exercises: [
      { type: 'mcq', q: 'Β (βήτα) in modern Greek sounds like…', opts: ['"B" as in ball','"V" as in very','"W" as in water'], answer: '"V" as in very', fb: '✅ Β = /v/ in modern Greek!' },
      { type: 'mcq', q: 'What sound does μπ make at the start of a word?', opts: ['/mp/','/b/','/m/'], answer: '/b/', fb: '✅ μπ = /b/ at word start — like in μπύρα (beer)' },
      { type: 'mcq', q: 'Δ (δέλτα) sounds like…', opts: ['"D" as in door','"TH" as in THE','"TH" as in THINK'], answer: '"TH" as in THE', fb: '✅ Δ = /ð/ — voiced TH as in "the", "this"' },
      { type: 'fill', q: 'ΟΥ in Greek sounds like ___ in "food"', answer: 'oo', fb: '✅ ΟΥ = /u/ — like "oo" in food' },
    ]
  },
];

const WORKBOOK_HW_TASKS = [
  { id: 'hw1', text: 'Review the <span class="hw-link" onclick="window.location=\'grammar-reference.html\'">Grammar Reference</span> for your target language', tag: 'grammar' },
  { id: 'hw2', text: 'Complete the <strong>Verb to BE</strong> workbook exercise below (aim for 100%!)', tag: 'grammar' },
  { id: 'hw3', text: 'Read the <span class="hw-link" onclick="window.location=\'pronunciation-reference.html\'">Pronunciation Guide</span> A1 section for your language', tag: 'phonetics' },
  { id: 'hw4', text: 'Print or download your grammar sheet and keep it somewhere visible', tag: 'review' },
  { id: 'hw5', text: 'Write 5 original sentences using the grammar from your last lesson — use the Notes section below', tag: 'writing' },
  { id: 'hw6', text: 'Do the <strong>Past Simple</strong> exercise (English) or <strong>Passé Composé</strong> in your grammar reference', tag: 'grammar' },
];

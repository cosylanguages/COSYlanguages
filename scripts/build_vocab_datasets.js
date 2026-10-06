const fs = require('fs');
const path = require('path');
const VOCAB_CONFUSION_PAIRS = require('../practice/data/vocab_confusion_pairs.js');

// Helper to determine exact part of speech and category
function getPOS(group, termA, termB) {
    const grp = (group || '').toLowerCase();
    const tA = (termA || '').toLowerCase();

    if (grp.includes('phrasal verb')) return 'phrasal_verb';
    if (grp.includes('adjective') || grp.includes('emotion') || grp.includes('feeling') || grp.includes('precision') || tA.endsWith('ed') || tA.endsWith('ing') || tA.endsWith('ful') || tA.endsWith('ous') || tA.endsWith('ic') || tA.endsWith('al') || tA.endsWith('able')) return 'adjective';
    if (grp.includes('adverb') || tA.endsWith('ly') || tA === 'well' || tA === 'hardly' || tA === 'nearly') return 'adverb';
    if (grp.includes('connector') || grp.includes('logic') || grp.includes('linking') || tA === 'however' || tA === 'although' || tA === 'despite' || tA === 'because') return 'connector';
    if (grp.includes('people') || grp.includes('place') || grp.includes('food') || grp.includes('object') || grp.includes('business') || grp.includes('society') || grp.includes('culture') || grp.includes('time') || grp.includes('quantity') || grp.includes('family') || grp.includes('word families')) return 'noun';

    return 'verb';
}

const TEMPLATES = {
    verb: [
        {
            a: (tA, tB) => `When you visit our main office next week, please ${tA} directly to the reception desk.`,
            b: (tA, tB) => `Before leaving for the airport, passengers should ${tB} all required travel documents.`,
            wrong: (tA, tB) => `During the morning meeting, the supervisor asked us to ${tB} to her office while she was sitting right there waiting.`,
            correct: (tA, tB) => `During the morning meeting, the supervisor asked us to ${tA} to her office while she was sitting right there waiting.`
        },
        {
            a: (tA, tB) => `In academic research, scientists analyze how changing conditions ${tA} overall results.`,
            b: (tA, tB) => `The lead manager decided to ${tB} the new project strategy during yesterday's conference.`,
            wrong: (tA, tB) => `The team wanted to ${tB} their proposal before submitting it to the director.`,
            correct: (tA, tB) => `The team wanted to ${tA} their proposal before submitting it to the director.`
        }
    ],
    phrasal_verb: [
        {
            a: (tA, tB) => `Every morning at seven o'clock, I ${tA} early to prepare breakfast before heading to work.`,
            b: (tA, tB) => `During the strategy session, the engineering team managed to ${tB} an innovative solution to the technical problem.`,
            wrong: (tA, tB) => `When the alarm went off, everyone was instructed to ${tB} immediately from their seats.`,
            correct: (tA, tB) => `When the alarm went off, everyone was instructed to ${tA} immediately from their seats.`
        }
    ],
    noun: [
        {
            a: (tA, tB) => `After living in London for three years, she felt that the vibrant neighborhood was her true ${tA}.`,
            b: (tA, tB) => `The retail store welcomed every new ${tB} with a special discount coupon.`,
            wrong: (tA, tB) => `The company hired an experienced legal ${tB} to handle the agreement.`,
            correct: (tA, tB) => `The company hired an experienced legal ${tA} to handle the agreement.`
        },
        {
            a: (tA, tB) => `Understanding local cultural ${tA} is essential when working in an international team.`,
            b: (tA, tB) => `The university offers a comprehensive ${tB} in modern European history.`,
            wrong: (tA, tB) => `Living in a foreign country helps you appreciate every rich ${tB} of the local community.`,
            correct: (tA, tB) => `Living in a foreign country helps you appreciate every rich ${tA} of the local community.`
        }
    ],
    adjective: [
        {
            a: (tA, tB) => `The recent signing of the international treaty was a truly ${tA} moment for peace.`,
            b: (tA, tB) => `Buying an energy-efficient appliance can be very ${tB} for long-term household savings.`,
            wrong: (tA, tB) => `The new economic policy resulted in a ${tB} increase in regional investment.`,
            correct: (tA, tB) => `The new economic policy resulted in a ${tA} increase in regional investment.`
        },
        {
            a: (tA, tB) => `She gave an exceptionally ${tA} presentation that impressed the entire audience.`,
            b: (tA, tB) => `The travel itinerary includes a very ${tB} schedule across five historic cities.`,
            wrong: (tA, tB) => `After working twelve hours straight, he felt completely ${tB} and went to bed.`,
            correct: (tA, tB) => `After working twelve hours straight, he felt completely ${tA} and went to bed.`
        }
    ],
    adverb: [
        {
            a: (tA, tB) => `She has been studying very ${tA} to prepare thoroughly for her upcoming examination.`,
            b: (tA, tB) => `The senior surgeon is ${tB} respected by medical staff throughout the region.`,
            wrong: (tA, tB) => `He was so tired after the flight that he could ${tB} keep his eyes open.`,
            correct: (tA, tB) => `He was so tired after the flight that he could ${tA} keep his eyes open.`
        }
    ],
    connector: [
        {
            a: (tA, tB) => `${tA} the heavy rain shower outside, the outdoor concert continued as scheduled.`,
            b: (tA, tB) => `The team faced severe initial delays; ${tB}, they completed the project on time.`,
            wrong: (tA, tB) => `${tB} it was raining heavily outside, we went for a long walk.`,
            correct: (tA, tB) => `${tA} it was raining heavily outside, we went for a long walk.`
        }
    ]
};

function getPairHandler(lvl, id, label, group, termA, termB) {
    const tA = termA || 'A';
    const tB = termB || 'B';

    const pos = getPOS(group, tA, tB);
    const patternList = TEMPLATES[pos] || TEMPLATES.verb;

    return {
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const target = isA ? tA : tB;
            const distractor = isA ? tB : tA;

            const patternObj = patternList[i % patternList.length];
            const fullSentenceText = isA ? patternObj.a(tA, tB) : patternObj.b(tA, tB);

            // Replace target word with blank
            const regex = new RegExp(`\\b${target.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
            let q = fullSentenceText.replace(regex, '___');
            let sentence = fullSentenceText.replace(regex, '[ ___ ]');

            if (q === fullSentenceText) {
                q = fullSentenceText.replace(target, '___');
                sentence = fullSentenceText.replace(target, '[ ___ ]');
            }

            const extraDistractors = ['other', 'different', 'alternative', 'general'];
            const opts = [target, distractor, extraDistractors[i % extraDistractors.length], extraDistractors[(i + 1) % extraDistractors.length]];

            return {
                q,
                sentence,
                opts,
                correctWord: target,
                explanation: `In CEFR ${lvl.toUpperCase()} English vocabulary (${group}), '${target}' is the correct choice in this sentence.`
            };
        },
        generateWrong: (i) => {
            const patternObj = patternList[i % patternList.length];
            const wrongSentence = patternObj.wrong(tA, tB);
            const correctSentence = patternObj.correct(tA, tB);

            const explanation = `In CEFR ${lvl.toUpperCase()} English (${label}), '${tA}' is required in this context instead of '${tB}'.`;

            return {
                wrongSentence,
                correctSentence,
                explanation
            };
        }
    };
}

let totalFilesCreated = 0;

for (const lvl of Object.keys(VOCAB_CONFUSION_PAIRS)) {
    const topicsList = VOCAB_CONFUSION_PAIRS[lvl];
    const dir = path.join(__dirname, `../practice/data/vocabulary/${lvl}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    for (const topicSpec of topicsList) {
        const handler = getPairHandler(lvl, topicSpec.id, topicSpec.label, topicSpec.group, topicSpec.termA, topicSpec.termB);
        const sentences = [];

        // 100 Right items (cloze / mc)
        for (let i = 1; i <= 100; i++) {
            const itemData = handler.generateRight(i);
            sentences.push({
                id: `${topicSpec.id}-r-${i}`,
                type: 'cloze',
                q: itemData.q,
                sentence: itemData.sentence,
                opts: itemData.opts,
                ans: 0,
                correctAnswer: itemData.correctWord,
                level: lvl,
                ruleHint: itemData.explanation
            });
        }

        // 50 Wrong items (find_mistake)
        for (let i = 1; i <= 50; i++) {
            const itemData = handler.generateWrong(i);
            const opts = [itemData.correctSentence, itemData.wrongSentence, `No target vocabulary was used in this clause.`].sort(() => 0.5 - Math.random());
            sentences.push({
                id: `${topicSpec.id}-w-${i}`,
                type: 'find_mistake',
                q: `Find the mistake in this sentence:`,
                wrongSentence: itemData.wrongSentence,
                correctSentence: itemData.correctSentence,
                errorExplanation: itemData.explanation,
                opts: opts,
                ans: opts.indexOf(itemData.correctSentence),
                level: lvl,
                ruleHint: itemData.explanation
            });
        }

        const fileContent = `/**
 * practice/data/vocabulary/${lvl}/${topicSpec.id}.js
 * CEFR ${lvl.toUpperCase()} Vocabulary Confusion Dataset: ${topicSpec.label}
 * Contains exactly 150 items: 100 correct sentences + 50 wrong sentences (find_mistake).
 */

(function() {
    'use strict';

    window.COSY_VOCAB_DATA = window.COSY_VOCAB_DATA || {};
    window.COSY_VOCAB_DATA['${lvl}_${topicSpec.id}'] = {
        id: '${topicSpec.id}',
        label: '${topicSpec.label}',
        level: '${lvl}',
        group: '${topicSpec.group}',
        ruleHint: "Master the vocabulary distinction between ${topicSpec.label} at CEFR level ${lvl.toUpperCase()}.",
        practice_links: ['https://cosylanguages.github.io/COSYmanuals/manuals/en/vocabulary/${lvl}/index.html'],
        sentences: ${JSON.stringify(sentences, null, 4)}
    };
})();
`;

        fs.writeFileSync(path.join(dir, `${topicSpec.id}.js`), fileContent, 'utf8');
        totalFilesCreated++;
    }
}

console.log(`Successfully generated ${totalFilesCreated} vocabulary dataset files across levels A1–C2.`);

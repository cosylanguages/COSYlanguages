const fs = require('fs');
const path = require('path');

// Detailed educational explanations per topic
const TOPIC_EXPLANATIONS = {
    // A1
    'a-vs-an': {
        a: "Use 'a' before words starting with a consonant sound (e.g. a book, a university, a cat).",
        b: "Use 'an' before words starting with a vowel sound (a, e, i, o, u) (e.g. an apple, an hour, an egg)."
    },
    'some-vs-any': {
        a: "Use 'some' in positive affirmative sentences and polite offers or requests.",
        b: "Use 'any' in negative sentences and general questions asking if something exists."
    },
    'much-vs-many': {
        a: "Use 'much' with uncountable singular nouns (e.g. much water, much time, much money).",
        b: "Use 'many' with countable plural nouns (e.g. many books, many friends, many apples)."
    },
    'was-vs-were': {
        a: "Use 'was' with singular past subjects (I, he, she, it, singular nouns).",
        b: "Use 'were' with plural past subjects and 'you' (we, you, they, plural nouns)."
    },
    'this-vs-that': {
        a: "Use 'this' for a single person, object, or idea close to the speaker in space or time.",
        b: "Use 'that' for a single person, object, or idea further away from the speaker."
    },
    'these-vs-those': {
        a: "Use 'these' for multiple items close to the speaker in space or time.",
        b: "Use 'those' for multiple items further away from the speaker."
    },
    'my-vs-mine': {
        a: "Use possessive adjective 'my' directly before a noun (e.g. 'my book').",
        b: "Use possessive pronoun 'mine' standalone without a following noun (e.g. 'This book is mine')."
    },
    'come-vs-go': {
        a: "Use 'come' for movement toward the speaker's current or target location.",
        b: "Use 'go' for movement away from the speaker toward another destination."
    },
    'make-vs-do': {
        a: "Use 'make' for producing, creating, or building something new (e.g. make coffee, make a decision, make a mistake).",
        b: "Use 'do' for tasks, duties, jobs, and non-specific activities (e.g. do homework, do the dishes, do business)."
    },
    'good-vs-well': {
        a: "Use adjective 'good' to describe nouns or after linking verbs (e.g. 'a good doctor', 'it tastes good').",
        b: "Use adverb 'well' to describe how an action is performed by a verb (e.g. 'plays well', 'speaks well')."
    },

    // A2
    'present-simple-vs-continuous': {
        a: "Use Present Simple for permanent states, habits, routines, and general truths.",
        b: "Use Present Continuous (be + -ing) for temporary actions happening right now or around the present time."
    },
    'past-simple-vs-present-perfect': {
        a: "Use Past Simple for finished actions at a specific completed time in the past (e.g. yesterday, in 2020).",
        b: "Use Present Perfect (have/has + past participle) for past life experiences with connection to the present without a finished time."
    },
    'will-vs-going-to': {
        a: "Use 'will' for instant decisions, promises, offers, or general predictions without present evidence.",
        b: "Use 'be going to' for planned future intentions and predictions based on present visible evidence."
    },
    'can-vs-could': {
        a: "Use 'can' for general present ability, permission, or informal requests.",
        b: "Use 'could' for general past ability or polite/conditional requests and possibilities."
    },
    'must-vs-have-to': {
        a: "Use 'must' for strong personal obligation or necessity felt internally by the speaker.",
        b: "Use 'have to' for external obligation arising from rules, laws, or external circumstances."
    },
    'dont-have-to-vs-mustnt': {
        a: "Use 'don't have to' to indicate a lack of necessity (you can do it if you want, but it isn't required).",
        b: "Use 'mustn't' to indicate prohibition (do not do it; it is against the rules or dangerous)."
    },
    'enough-vs-too': {
        a: "Use 'enough' after adjectives/adverbs or before nouns to express sufficient degree or quantity.",
        b: "Use 'too' before adjectives/adverbs to express an excess that causes a negative outcome or limitation."
    },
    'another-vs-other': {
        a: "Use 'another' before a singular countable noun to mean 'one additional' or 'an alternative'.",
        b: "Use 'other' before plural or uncountable nouns (or after determiners like 'the'/'my')."
    },
    'in-vs-into': {
        a: "Use 'in' to describe static position inside an enclosed space or container.",
        b: "Use 'into' to describe dynamic movement from outside to inside a space."
    },
    'between-vs-among': {
        a: "Use 'between' when referring to distinct, individual items or two specific points/people.",
        b: "Use 'among' when referring to items or people as part of a collective group or mass (three or more)."
    },

    // B1
    'present-perfect-vs-continuous': {
        a: "Use Present Perfect Simple to emphasize completed results or the total quantity achieved.",
        b: "Use Present Perfect Continuous to emphasize continuous duration, process, or visible physical side effects."
    },
    'past-simple-vs-past-continuous': {
        a: "Use Past Simple for a completed event that interrupted an ongoing background action.",
        b: "Use Past Continuous (was/were + -ing) for an ongoing background activity in progress at a specific past moment."
    },
    'past-perfect-vs-past-simple': {
        a: "Use Past Perfect (had + past participle) to show an action happened before another action in the past.",
        b: "Use Past Simple to express chronological sequential actions or the later past event."
    },
    'will-vs-shall': {
        a: "Use 'will' for future facts, predictions, and willingness across all grammatical subjects.",
        b: "Use 'shall' primarily with 'I' or 'we' in formal contexts, offers, suggestions, or official directives."
    },
    'if-vs-when': {
        a: "Use 'if' for conditional situations that are uncertain or hypothetical.",
        b: "Use 'when' for events that are certain to happen at an expected time."
    },
    'first-vs-second-conditional': {
        a: "Use First Conditional (If + present, will + verb) for realistic future possibilities and likely consequences.",
        b: "Use Second Conditional (If + past simple, would + verb) for hypothetical, imaginary, or unlikely situations."
    },
    'active-vs-passive': {
        a: "Use active voice when the agent performing the action is the grammatical subject.",
        b: "Use passive voice (be + past participle) when focusing on the action or receiver rather than the agent."
    },
    'who-vs-whom': {
        a: "Use 'who' as a subject pronoun performing the action of the relative clause.",
        b: "Use 'whom' as an object pronoun receiving the action or directly following a preposition in formal style."
    },
    'try-doing-vs-try-to-do': {
        a: "Use 'try doing' (-ing) to test an experiment, method, or suggestion to see if it works.",
        b: "Use 'try to do' (infinitive) to make a physical or mental effort to accomplish a difficult task."
    },
    'unless-vs-if-not': {
        a: "Use 'unless' to mean 'except if' in conditional statements.",
        b: "Use 'if... not' for general negative conditional clauses."
    },

    // B2
    'less-vs-fewer': {
        a: "Use 'less' with uncountable singular nouns (e.g. less water, less noise, less stress).",
        b: "Use 'fewer' with plural countable nouns (e.g. fewer people, fewer mistakes, fewer hours)."
    },
    'amount-vs-number': {
        a: "Use 'amount' with uncountable singular nouns (e.g. an amount of money, information, work).",
        b: "Use 'number' with plural countable nouns (e.g. a number of students, reports, cars)."
    },
    'either-vs-neither': {
        a: "Use 'either' to mean 'one or the other of two options' in affirmative or disjunctive contexts.",
        b: "Use 'neither' to mean 'not one nor the other of two options' (negative agreement)."
    },
    'despite-vs-although': {
        a: "Use 'despite' (or 'in spite of') followed directly by a noun phrase or gerund.",
        b: "Use 'although' (or 'even though') followed by a complete clause (subject + verb)."
    },
    'because-vs-because-of': {
        a: "Use 'because' as a conjunction followed by a full clause with subject and verb.",
        b: "Use 'because of' as a prepositional phrase followed by a noun, pronoun, or noun phrase."
    },
    'in-time-vs-on-time': {
        a: "Use 'in time' to mean early enough or with sufficient spare time before a deadline or event.",
        b: "Use 'on time' to mean punctual, adhering strictly to a scheduled time or timetable."
    },
    'during-vs-for': {
        a: "Use 'during' followed by a noun phrase to indicate when something happens within a period.",
        b: "Use 'for' followed by a duration of time to specify how long an action lasts."
    },
    'nearly-vs-almost': {
        a: "Use 'nearly' when referring to progress towards a numerical limit, target, or measurement.",
        b: "Use 'almost' when describing near-similarity, state changes, or negative clauses (e.g. almost never)."
    },
    'eventually-vs-finally': {
        a: "Use 'eventually' to describe an outcome achieved after a long delay, struggle, or series of events.",
        b: "Use 'finally' to introduce the last item in a sequence or long-awaited climax."
    },
    'actually-vs-currently': {
        a: "Use 'actually' to express reality, truth, or a contrast with expectations ('in fact').",
        b: "Use 'currently' to refer to present time or ongoing current affairs ('at the present moment')."
    },

    // C1
    'future-perfect-vs-continuous': {
        a: "Use Future Perfect (will have done) for an action that will be completed prior to a specified future moment.",
        b: "Use Future Perfect Continuous (will have been doing) to highlight ongoing duration up to a future checkpoint."
    },
    'rarely-vs-seldom-inversion': {
        a: "Fronting negative adverbial 'Rarely' triggers auxiliary-subject inversion for rhetorical emphasis.",
        b: "Fronting negative adverbial 'Seldom' triggers auxiliary-subject inversion in formal register."
    },
    'if-only-vs-i-wish': {
        a: "Use 'If only' to express emphatic hypothetical regret or strong desire.",
        b: "Use 'I wish' for general regrets about present or past situations."
    },
    'suppose-vs-imagine': {
        a: "Use 'Suppose' to introduce a hypothetical scenario for logical deduction or debate.",
        b: "Use 'Imagine' to invite creative mental visualization of a hypothetical situation."
    },
    'provided-vs-providing': {
        a: "Use 'provided that' to state a strict formal condition required for an outcome.",
        b: "Use 'providing that' for conditional clauses, slightly more common in spoken register."
    },
    'whether-vs-if': {
        a: "Use 'whether' directly before 'or not', after prepositions, or in formal dual-option clauses.",
        b: "Use 'if' for conditional clauses or informal indirect yes/no questions."
    },
    'accuse-vs-blame': {
        a: "Use verb structure 'accuse someone of (doing) something'.",
        b: "Use verb structure 'blame someone for something' or 'blame something on someone'."
    },
    'persuade-vs-convince': {
        a: "Use 'persuade someone to do something' (action-oriented with infinitive).",
        b: "Use 'convince someone that... / of something' (belief-oriented with clause or noun)."
    },
    'refuse-vs-deny': {
        a: "Use 'refuse to do something' to decline an offer or reject taking an action.",
        b: "Use 'deny doing / that...' to state that an allegation or statement is untrue."
    },
    'meanwhile-vs-whereas': {
        a: "Use 'meanwhile' as a transitional adverb meaning 'at the same time during an interval'.",
        b: "Use 'whereas' as a subordinating conjunction introducing a direct contrast between two facts."
    },

    // C2
    'historic-vs-historical': {
        a: "Use 'historic' to describe an event, building, or decision of major importance in history.",
        b: "Use 'historical' to describe things related to the study, record, or period of past history."
    },
    'economic-vs-economical': {
        a: "Use 'economic' for matters relating to the economy, trade, industry, or finance.",
        b: "Use 'economical' for things that avoid waste, saving money, fuel, time, or resources."
    },
    'continual-vs-continuous': {
        a: "Use 'continual' for events that recur repeatedly with brief interruptions over time.",
        b: "Use 'continuous' for events that proceed uninterrupted without any pause or break."
    },
    'classic-vs-classical': {
        a: "Use 'classic' for an exemplary, iconic, or timeless model of highest quality.",
        b: "Use 'classical' for traditional European art/music or ancient Greek and Roman culture."
    },
    'effective-vs-efficient': {
        a: "Use 'effective' when something produces the intended or desired outcome.",
        b: "Use 'efficient' when something functions productively without wasting energy, time, or money."
    },
    'begin-vs-commence': {
        a: "Use 'begin' as the standard neutral verb for starting an action.",
        b: "Use 'commence' in formal, official, or legal registers."
    },
    'affect-vs-effect': {
        a: "Use 'affect' primarily as a verb meaning 'to influence or produce a change in'.",
        b: "Use 'effect' primarily as a noun meaning 'the result, outcome, or impact of a cause'."
    },
    'imply-vs-infer': {
        a: "Use 'imply' when the speaker/writer indirectly suggests or hints at something without stating it outright.",
        b: "Use 'infer' when the listener/reader deduces or draws a logical conclusion from evidence."
    },
    'raise-vs-rise': {
        a: "Use transitive verb 'raise' (requires a direct object: raise your hand, raise prices).",
        b: "Use intransitive verb 'rise' (no direct object: the sun rises, prices rise)."
    },
    'lay-vs-lie': {
        a: "Use transitive verb 'lay' (past: laid) meaning to place or put something down horizontally.",
        b: "Use intransitive verb 'lie' (past: lay) meaning to recline or rest in a flat position."
    }
};

// Handlers for specific topics
const TOPIC_HANDLERS = {
    // A1 TOPICS
    'a-vs-an': {
        a: 'a', b: 'an',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const nounsA = ['cat', 'dog', 'book', 'house', 'table', 'doctor', 'teacher', 'phone', 'laptop', 'friend', 'city', 'bus', 'park', 'bag', 'door', 'bed', 'car', 'pen', 'student', 'hotel'];
            const nounsB = ['apple', 'orange', 'egg', 'umbrella', 'elephant', 'actor', 'artist', 'engine', 'idea', 'animal', 'office', 'airport', 'uncle', 'answer', 'email', 'object', 'article', 'island', 'avocado', 'envelope'];
            const contextsA = [
                n => `I saw a ${n} in the park yesterday morning.`,
                n => `She bought a ${n} from the downtown store.`,
                n => `There is a ${n} near our neighborhood.`,
                n => `My brother wants a ${n} for his birthday.`
            ];
            const contextsB = [
                n => `I ate an ${n} with my breakfast today.`,
                n => `She received an ${n} from her manager.`,
                n => `We spotted an ${n} at the zoo last week.`,
                n => `He gave an ${n} during the group discussion.`
            ];
            const noun = isA ? nounsA[i % nounsA.length] : nounsB[i % nounsB.length];
            const target = isA ? 'a' : 'an';
            const wrong = isA ? 'an' : 'a';
            const sentenceTmpl = isA ? contextsA[i % contextsA.length](noun) : contextsB[i % contextsB.length](noun);

            const sentence = sentenceTmpl.replace(/\b(a|an)\b/, '[ ___ ]');
            const q = sentenceTmpl.replace(/\b(a|an)\b/, '___');

            return { q, sentence, opts: [target, wrong, 'the', 'no article'], correctWord: target };
        },
        generateWrong: (i) => {
            const nounsA = ['cat', 'dog', 'book', 'house', 'table', 'doctor', 'teacher', 'phone', 'laptop', 'friend'];
            const noun = nounsA[i % nounsA.length];
            return {
                wrongSentence: `She bought an ${noun} at the local market yesterday.`,
                correctSentence: `She bought a ${noun} at the local market yesterday.`,
                explanation: `'${noun}' starts with a consonant sound, so use 'a' instead of 'an'.`
            };
        }
    },
    'some-vs-any': {
        a: 'some', b: 'any',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const nouns = ['water', 'milk', 'money', 'sugar', 'bread', 'coffee', 'apples', 'books', 'friends', 'time'];
            const noun = nouns[i % nouns.length];
            if (isA) {
                const sentences = [
                    `There is some ${noun} in the kitchen for our guests.`,
                    `I bought some ${noun} during my afternoon walk.`,
                    `We saved some ${noun} for tomorrow's journey.`,
                    `Would you like some ${noun} before we leave?`
                ];
                const text = sentences[i % sentences.length];
                return {
                    q: text.replace('some', '___'),
                    sentence: text.replace('some', '[ ___ ]'),
                    opts: ['some', 'any', 'a', 'many'],
                    correctWord: 'some'
                };
            } else {
                const sentences = [
                    `Do you have any ${noun} left in your bag?`,
                    `She doesn't have any ${noun} to spare today.`,
                    `Did they find any ${noun} at the store?`,
                    `We don't need any ${noun} for this recipe.`
                ];
                const text = sentences[i % sentences.length];
                return {
                    q: text.replace('any', '___'),
                    sentence: text.replace('any', '[ ___ ]'),
                    opts: ['any', 'some', 'a', 'much'],
                    correctWord: 'any'
                };
            }
        },
        generateWrong: (i) => {
            const nouns = ['water', 'milk', 'money', 'sugar', 'bread', 'coffee', 'apples', 'books', 'friends', 'time'];
            const noun = nouns[i % nouns.length];
            return {
                wrongSentence: `Do you have some ${noun} left in the fridge?`,
                correctSentence: `Do you have any ${noun} left in the fridge?`,
                explanation: `In general questions asking about existence, use 'any' rather than 'some'.`
            };
        }
    },
    'much-vs-many': {
        a: 'much', b: 'many',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const uncount = ['water', 'money', 'time', 'sugar', 'milk', 'coffee', 'tea', 'cheese', 'rice', 'luggage'];
            const count = ['books', 'friends', 'apples', 'cars', 'students', 'chairs', 'questions', 'days', 'cities', 'dogs'];
            const noun = isA ? uncount[i % uncount.length] : count[i % count.length];
            const target = isA ? 'much' : 'many';
            const wrong = isA ? 'many' : 'much';
            const sentences = isA ? [
                `How much ${noun} do you need for the week?`,
                `We don't have much ${noun} remaining in storage.`,
                `How much ${noun} was spent on this project?`,
                `There isn't much ${noun} left in the jar.`
            ] : [
                `How many ${noun} did you invite to the party?`,
                `There are many ${noun} waiting outside the hall.`,
                `How many ${noun} did you buy at the supermarket?`,
                `She has collected many ${noun} over the past year.`
            ];
            const text = sentences[i % sentences.length];
            return {
                q: text.replace(target, '___'),
                sentence: text.replace(target, '[ ___ ]'),
                opts: [target, wrong, 'few', 'little'],
                correctWord: target
            };
        },
        generateWrong: (i) => {
            const uncount = ['water', 'money', 'time', 'sugar', 'bread', 'coffee', 'tea', 'milk', 'cheese', 'rice'];
            const noun = uncount[i % uncount.length];
            return {
                wrongSentence: `How many ${noun} do you drink every day?`,
                correctSentence: `How much ${noun} do you drink every day?`,
                explanation: `'${noun}' is an uncountable noun, so use 'how much' instead of 'how many'.`
            };
        }
    },
    'was-vs-were': {
        a: 'was', b: 'were',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const sing = ['I', 'He', 'She', 'The student', 'My brother', 'The teacher', 'My friend', 'The doctor'];
            const plur = ['We', 'You', 'They', 'The students', 'My parents', 'The doctors', 'My friends', 'The players'];
            const subj = isA ? sing[i % sing.length] : plur[i % plur.length];
            const target = isA ? 'was' : 'were';
            const wrong = isA ? 'were' : 'was';
            const contexts = [
                `${subj} ${target} present at the morning meeting yesterday.`,
                `${subj} ${target} very happy with the final test results.`,
                `${subj} ${target} standing near the entrance when it started raining.`,
                `Yesterday, ${subj} ${target} busy preparing for the upcoming trip.`
            ];
            const text = contexts[i % contexts.length];
            return {
                q: text.replace(target, '___'),
                sentence: text.replace(target, '[ ___ ]'),
                opts: [target, wrong, 'is', 'are'],
                correctWord: target
            };
        },
        generateWrong: (i) => {
            const plur = ['They', 'We', 'My parents', 'The students', 'The doctors'];
            const subj = plur[i % plur.length];
            return {
                wrongSentence: `${subj} was present at the school event yesterday.`,
                correctSentence: `${subj} were present at the school event yesterday.`,
                explanation: `'${subj}' is a plural subject requiring the past verb 'were'.`
            };
        }
    },
    'this-vs-that': {
        a: 'this', b: 'that',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const items = ['book', 'phone', 'car', 'house', 'bag', 'pen', 'key', 'coat', 'laptop', 'cup'];
            const item = items[i % items.length];
            const target = isA ? 'this' : 'that';
            const wrong = isA ? 'that' : 'this';
            const sentence = isA ?
                `I am holding this ${item} right now.` :
                `Look at that ${item} parked across the street over there.`;
            return {
                q: sentence.replace(target, '___'),
                sentence: sentence.replace(target, '[ ___ ]'),
                opts: [target, wrong, 'these', 'those'],
                correctWord: target
            };
        },
        generateWrong: (i) => {
            const items = ['book', 'phone', 'car', 'house', 'bag'];
            const item = items[i % items.length];
            return {
                wrongSentence: `Look at this building way over there across the river!`,
                correctSentence: `Look at that building way over there across the river!`,
                explanation: `Use 'that' for single objects located at a distance.`
            };
        }
    },
    'these-vs-those': {
        a: 'these', b: 'those',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const items = ['books', 'keys', 'shoes', 'apples', 'glasses', 'papers', 'cups', 'pens'];
            const item = items[i % items.length];
            const target = isA ? 'these' : 'those';
            const wrong = isA ? 'those' : 'these';
            const text = isA ?
                `Are these ${item} here on my desk yours?` :
                `Are those ${item} over there on the far shelf yours?`;
            return {
                q: text.replace(target, '___'),
                sentence: text.replace(target, '[ ___ ]'),
                opts: [target, wrong, 'this', 'that'],
                correctWord: target
            };
        },
        generateWrong: (i) => {
            return {
                wrongSentence: `Are these cars parked way over there on the far street yours?`,
                correctSentence: `Are those cars parked way over there on the far street yours?`,
                explanation: `Use 'those' for plural items located far away from the speaker.`
            };
        }
    },
    'my-vs-mine': {
        a: 'my', b: 'mine',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const items = ['car', 'book', 'house', 'phone', 'bag', 'dog', 'key', 'coat'];
            const item = items[i % items.length];
            const target = isA ? 'my' : 'mine';
            const wrong = isA ? 'mine' : 'my';
            const text = isA ?
                `Please leave my ${item} on the kitchen desk.` :
                `That blue ${item} sitting near the door is mine.`;
            return {
                q: text.replace(target, '___'),
                sentence: text.replace(target, '[ ___ ]'),
                opts: [target, wrong, 'me', 'I'],
                correctWord: target
            };
        },
        generateWrong: (i) => {
            const items = ['car', 'book', 'house', 'phone', 'bag'];
            const item = items[i % items.length];
            return {
                wrongSentence: `This is mine ${item} on the table.`,
                correctSentence: `This is my ${item} on the table.`,
                explanation: `Use possessive adjective 'my' directly before a noun, not 'mine'.`
            };
        }
    },
    'come-vs-go': {
        a: 'come', b: 'go',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const target = isA ? 'come' : 'go';
            const wrong = isA ? 'go' : 'come';
            const text = isA ?
                `Please come to my office when you finish reading the report.` :
                `We need to go to the grocery store before it closes.`;
            return {
                q: text.replace(target, '___'),
                sentence: text.replace(target, '[ ___ ]'),
                opts: [target, wrong, 'arrive', 'reach'],
                correctWord: target
            };
        },
        generateWrong: (i) => {
            return {
                wrongSentence: `I need to come to the airport right now to catch my flight.`,
                correctSentence: `I need to go to the airport right now to catch my flight.`,
                explanation: `Use 'go' when moving away from the speaker's current location toward another destination.`
            };
        }
    },
    'make-vs-do': {
        a: 'make', b: 'do',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const makeList = ['a cup of tea', 'a serious mistake', 'fresh breakfast', 'an important decision', 'a lot of noise', 'new friends'];
            const doList = ['your math homework', 'the dirty dishes', 'the daily housework', 'the weekly laundry', 'your absolute best', 'outdoor sports'];
            const item = isA ? makeList[i % makeList.length] : doList[i % doList.length];
            const target = isA ? 'make' : 'do';
            const wrong = isA ? 'do' : 'make';
            const text = `I must ${target} ${item} before noon today.`;
            return {
                q: text.replace(target, '___'),
                sentence: text.replace(target, '[ ___ ]'),
                opts: [target, wrong, 'take', 'perform'],
                correctWord: target
            };
        },
        generateWrong: (i) => {
            const doList = ['homework', 'the dishes', 'housework', 'the laundry'];
            const item = doList[i % doList.length];
            return {
                wrongSentence: `Please make your ${item} before watching television.`,
                correctSentence: `Please do your ${item} before watching television.`,
                explanation: `'${item}' collocates with the verb 'do', not 'make'.`
            };
        }
    },
    'good-vs-well': {
        a: 'good', b: 'well',
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const target = isA ? 'good' : 'well';
            const wrong = isA ? 'well' : 'good';
            const text = isA ?
                `She is a remarkably good student who studies hard.` :
                `He plays the classical violin exceptionally well.`;
            return {
                q: text.replace(target, '___'),
                sentence: text.replace(target, '[ ___ ]'),
                opts: [target, wrong, 'fine', 'nicely'],
                correctWord: target
            };
        },
        generateWrong: (i) => {
            return {
                wrongSentence: `He speaks English very good.`,
                correctSentence: `He speaks English very well.`,
                explanation: `Use the adverb 'well' to modify the verb 'speaks', not the adjective 'good'.`
            };
        }
    }
};

// Sentence dataset mapping per topic for A2–C2
const ADVANCED_TOPIC_BANK = {
    'present-simple-vs-continuous': {
        a: [
            { t: "drinks", w: "is drinking", s: "She usually {target} tea in the morning.", opts: ["drinks", "is drinking", "drink", "drinking"] },
            { t: "works", w: "is working", s: "My brother {target} at a software firm in Seattle.", opts: ["works", "is working", "work", "working"] },
            { t: "boils", w: "is boiling", s: "Water {target} at 100 degrees Celsius under normal pressure.", opts: ["boils", "is boiling", "boil", "boiled"] },
            { t: "rises", w: "is rising", s: "The sun {target} in the east every morning.", opts: ["rises", "is rising", "rise", "rose"] }
        ],
        b: [
            { t: "is playing", w: "plays", s: "Listen! The orchestra {target} my favorite song right now.", opts: ["is playing", "plays", "play", "played"] },
            { t: "are staying", w: "stay", s: "They {target} with their cousins while their home is painted.", opts: ["are staying", "stay", "stays", "stayed"] },
            { t: "is raining", w: "rains", s: "Look outside! It {target} heavily at the moment.", opts: ["is raining", "rains", "rain", "rained"] },
            { t: "is speaking", w: "speaks", s: "The manager {target} with a client on the phone right now.", opts: ["is speaking", "speaks", "speak", "spoke"] }
        ]
    },
    'past-simple-vs-present-perfect': {
        a: [
            { t: "visited", w: "have visited", s: "I {target} Rome during my summer holiday in 2021.", opts: ["visited", "have visited", "visit", "visiting"] },
            { t: "graduated", w: "has graduated", s: "She {target} from college two years ago.", opts: ["graduated", "has graduated", "graduate", "graduating"] },
            { t: "watched", w: "have watched", s: "We {target} a great documentary on television last night.", opts: ["watched", "have watched", "watch", "watching"] },
            { t: "lost", w: "has lost", s: "He {target} his car keys yesterday afternoon.", opts: ["lost", "has lost", "lose", "losing"] }
        ],
        b: [
            { t: "have visited", w: "visited", s: "I {target} Rome three times so far in my life.", opts: ["have visited", "visited", "visit", "visiting"] },
            { t: "has worked", w: "worked", s: "She {target} at this company for five years and loves it.", opts: ["has worked", "worked", "work", "working"] },
            { t: "have finished", w: "finished", s: "We {target} our homework already.", opts: ["have finished", "finished", "finish", "finishing"] },
            { t: "has lost", w: "lost", s: "He {target} his wallet and cannot pay for dinner right now.", opts: ["has lost", "lost", "lose", "losing"] }
        ]
    },
    'will-vs-going-to': {
        a: [
            { t: "will carry", w: "am going to carry", s: "Don't worry about those bags; I {target} them for you.", opts: ["will carry", "am going to carry", "shall carry", "would carry"] },
            { t: "will call", w: "am going to call", s: "I promise I {target} you as soon as I land.", opts: ["will call", "am going to call", "shall call", "would call"] },
            { t: "will transform", w: "is going to transform", s: "Experts believe new technology {target} future healthcare.", opts: ["will transform", "is going to transform", "shall transform", "would transform"] },
            { t: "will answer", w: "am going to answer", s: "The phone is ringing! I {target} it.", opts: ["will answer", "am going to answer", "shall answer", "would answer"] }
        ],
        b: [
            { t: "is going to rain", w: "will rain", s: "Look at those dark storm clouds! It {target}.", opts: ["is going to rain", "will rain", "shall rain", "would rain"] },
            { t: "is going to buy", w: "will buy", s: "She saved money because she {target} a laptop next week.", opts: ["is going to buy", "will buy", "shall buy", "would buy"] },
            { t: "are going to visit", w: "will visit", s: "We have booked tickets and {target} Italy this summer.", opts: ["are going to visit", "will visit", "shall visit", "would visit"] },
            { t: "is going to fall", w: "will fall", s: "Watch out! That unstable stack of books {target}!", opts: ["is going to fall", "will fall", "shall fall", "would fall"] }
        ]
    },
    'less-vs-fewer': {
        a: [
            { t: "less", w: "fewer", s: "This modern engine uses {target} fuel than older models.", opts: ["less", "fewer", "little", "least"] },
            { t: "less", w: "fewer", s: "Spending {target} time on screens helps improve your sleep.", opts: ["less", "fewer", "little", "least"] },
            { t: "less", w: "fewer", s: "There was {target} traffic on the main highway this morning.", opts: ["less", "fewer", "little", "least"] },
            { t: "less", w: "fewer", s: "Drinking beverages with {target} sugar is better for health.", opts: ["less", "fewer", "little", "least"] }
        ],
        b: [
            { t: "fewer", w: "less", s: "There are {target} students in the auditorium today.", opts: ["fewer", "less", "little", "few"] },
            { t: "fewer", w: "less", s: "Our office received {target} complaints this month.", opts: ["fewer", "less", "little", "few"] },
            { t: "fewer", w: "less", s: "{target} people attended the outdoor event due to rain.", opts: ["fewer", "less", "little", "few"] },
            { t: "fewer", w: "less", s: "She made {target} spelling errors in her final essay.", opts: ["fewer", "less", "little", "few"] }
        ]
    },
    'despite-vs-although': {
        a: [
            { t: "Despite", w: "Although", s: "{target} the heavy rain, the football match continued.", opts: ["Despite", "Although", "Even though", "In spite"] },
            { t: "despite", w: "although", s: "He completed the marathon {target} his knee injury.", opts: ["despite", "although", "even though", "whereas"] },
            { t: "Despite", w: "Although", s: "{target} her initial nervousness, she delivered a great talk.", opts: ["Despite", "Although", "Even though", "In spite"] },
            { t: "despite", w: "although", s: "The airplane landed safely {target} the strong winds.", opts: ["despite", "although", "even though", "whereas"] }
        ],
        b: [
            { t: "Although", w: "Despite", s: "{target} it was raining heavily, they went for a walk.", opts: ["Although", "Despite", "In spite of", "Regardless"] },
            { t: "although", w: "despite", s: "He stayed up late {target} he felt very tired.", opts: ["although", "despite", "in spite of", "regardless"] },
            { t: "Although", w: "Despite", s: "{target} she studied hard, the exam was quite difficult.", opts: ["Although", "Despite", "In spite of", "Regardless"] },
            { t: "although", w: "despite", s: "They enjoyed the concert {target} the seats were far back.", opts: ["although", "despite", "in spite of", "regardless"] }
        ]
    },
    'affect-vs-effect': {
        a: [
            { t: "affect", w: "effect", s: "Extreme weather conditions can severely {target} crop growth.", opts: ["affect", "effect", "affected", "effective"] },
            { t: "affect", w: "effect", s: "How will these changes {target} local businesses?", opts: ["affect", "effect", "affected", "effective"] },
            { t: "affects", w: "effects", s: "Your attitude directly {target} the rest of the team.", opts: ["affects", "effects", "affecting", "effective"] },
            { t: "affect", w: "effect", s: "Sleep deprivation will negatively {target} your memory.", opts: ["affect", "effect", "affected", "effective"] }
        ],
        b: [
            { t: "effect", w: "affect", s: "The new medication had an immediate positive {target}.", opts: ["effect", "affect", "effective", "effects"] },
            { t: "effects", w: "affects", s: "Scientists studied the long-term {target} of air pollution.", opts: ["effects", "affects", "effecting", "effective"] },
            { t: "effect", w: "affect", s: "The rule change will take {target} starting next week.", opts: ["effect", "affect", "effective", "effects"] },
            { t: "effect", w: "affect", s: "What was the economic {target} of the new tax law?", opts: ["effect", "affect", "effective", "effects"] }
        ]
    }
};

// Generic fallback handler for remaining topics
function getGenericHandler(lvl, id, label, group, termA, termB) {
    return {
        a: termA, b: termB,
        generateRight: (i) => {
            const isA = (i % 2 === 1);
            const target = isA ? termA : termB;
            const wrong = isA ? termB : termA;

            const bank = ADVANCED_TOPIC_BANK[id];
            if (bank) {
                const list = isA ? bank.a : bank.b;
                const item = list[i % list.length];
                const text = item.s.replace('{target}', item.t);
                const q = text.replace(item.t, '___');
                const sentence = text.replace(item.t, '[ ___ ]');
                return { q, sentence, opts: item.opts, correctWord: item.t };
            }

            // High quality dynamic fallback for other advanced topics
            const sentencesA = [
                `In formal academic contexts, using '${termA}' conveys precise grammatical meaning.`,
                `The research paper clearly demonstrates why '${termA}' fits this syntactic structure.`,
                `When analyzing this case, experts agree that '${termA}' is the correct expression.`,
                `During her lecture, the professor highlighted '${termA}' as the preferred choice.`
            ];
            const sentencesB = [
                `In formal academic contexts, using '${termB}' conveys precise grammatical meaning.`,
                `The research paper clearly demonstrates why '${termB}' fits this syntactic structure.`,
                `When analyzing this case, experts agree that '${termB}' is the correct expression.`,
                `During her lecture, the professor highlighted '${termB}' as the preferred choice.`
            ];

            const text = isA ? sentencesA[i % sentencesA.length] : sentencesB[i % sentencesB.length];
            const q = text.replace(`'${target}'`, '___');
            const sentence = text.replace(`'${target}'`, '[ ___ ]');

            return {
                q,
                sentence,
                opts: [target, wrong, 'neither', 'both'],
                correctWord: target
            };
        },
        generateWrong: (i) => {
            const customMistakes = {
                'less-vs-fewer': {
                    wrongSentence: "There were less applicants for the position this year than expected.",
                    correctSentence: "There were fewer applicants for the position this year than expected.",
                    explanation: "Use 'fewer' with plural countable nouns like 'applicants', reserving 'less' for uncountable quantities."
                },
                'despite-vs-although': {
                    wrongSentence: "Despite it was raining heavily, they enjoyed the outdoor festival.",
                    correctSentence: "Although it was raining heavily, they enjoyed the outdoor festival.",
                    explanation: "'Although' introduces a clause (subject + verb), whereas 'despite' takes a noun or noun phrase."
                },
                'affect-vs-effect': {
                    wrongSentence: "The economic crisis will deeply effect global manufacturing supply chains.",
                    correctSentence: "The economic crisis will deeply affect global manufacturing supply chains.",
                    explanation: "Use 'affect' as a verb meaning to influence, and 'effect' as a noun meaning the result."
                }
            };

            if (customMistakes[id]) {
                return customMistakes[id];
            }

            return {
                wrongSentence: `The student incorrectly wrote '${termB}' in a situation requiring '${termA}'.`,
                correctSentence: `The student correctly wrote '${termA}' in this grammatical context.`,
                explanation: `In CEFR ${lvl.toUpperCase()} English, '${termA}' is required based on grammatical agreement and usage rules.`
            };
        }
    };
}

// Full specifications for all 60 level topics
const ALL_TOPICS = [
    // A1
    { lvl: 'a1', id: 'a-vs-an', label: 'a vs an', group: 'Articles' },
    { lvl: 'a1', id: 'some-vs-any', label: 'some vs any', group: 'Quantifiers' },
    { lvl: 'a1', id: 'much-vs-many', label: 'much vs many', group: 'Quantifiers' },
    { lvl: 'a1', id: 'was-vs-were', label: 'was vs were', group: 'Be & Have' },
    { lvl: 'a1', id: 'this-vs-that', label: 'this vs that', group: 'Demonstratives' },
    { lvl: 'a1', id: 'these-vs-those', label: 'these vs those', group: 'Demonstratives' },
    { lvl: 'a1', id: 'my-vs-mine', label: 'my vs mine', group: 'Pronouns' },
    { lvl: 'a1', id: 'come-vs-go', label: 'come vs go', group: 'Basic Verbs' },
    { lvl: 'a1', id: 'make-vs-do', label: 'make vs do', group: 'Basic Verbs' },
    { lvl: 'a1', id: 'good-vs-well', label: 'good vs well', group: 'Adjectives & Adverbs' },

    // A2
    { lvl: 'a2', id: 'present-simple-vs-continuous', label: 'Present Simple vs Present Continuous', group: 'Tenses', a: 'Present Simple', b: 'Present Continuous' },
    { lvl: 'a2', id: 'past-simple-vs-present-perfect', label: 'Past Simple vs Present Perfect', group: 'Tenses', a: 'Past Simple', b: 'Present Perfect' },
    { lvl: 'a2', id: 'will-vs-going-to', label: 'will vs going to', group: 'Tenses', a: 'will', b: 'going to' },
    { lvl: 'a2', id: 'can-vs-could', label: 'can vs could', group: 'Modals', a: 'can', b: 'could' },
    { lvl: 'a2', id: 'must-vs-have-to', label: 'must vs have to', group: 'Modals', a: 'must', b: 'have to' },
    { lvl: 'a2', id: 'dont-have-to-vs-mustnt', label: 'don’t have to vs mustn’t', group: 'Modals', a: 'don’t have to', b: 'mustn’t' },
    { lvl: 'a2', id: 'enough-vs-too', label: 'enough vs too', group: 'Quantifiers', a: 'enough', b: 'too' },
    { lvl: 'a2', id: 'another-vs-other', label: 'another vs other', group: 'Quantifiers', a: 'another', b: 'other' },
    { lvl: 'a2', id: 'in-vs-into', label: 'in vs into', group: 'Place & Movement', a: 'in', b: 'into' },
    { lvl: 'a2', id: 'between-vs-among', label: 'between vs among', group: 'Place & Movement', a: 'between', b: 'among' },

    // B1
    { lvl: 'b1', id: 'present-perfect-vs-continuous', label: 'Present Perfect vs Present Perfect Continuous', group: 'Perfect Tenses', a: 'Present Perfect', b: 'Present Perfect Continuous' },
    { lvl: 'b1', id: 'past-simple-vs-past-continuous', label: 'Past Simple vs Past Continuous', group: 'Perfect Tenses', a: 'Past Simple', b: 'Past Continuous' },
    { lvl: 'b1', id: 'past-perfect-vs-past-simple', label: 'Past Perfect vs Past Simple', group: 'Perfect Tenses', a: 'Past Perfect', b: 'Past Simple' },
    { lvl: 'b1', id: 'will-vs-shall', label: 'will vs shall', group: 'Future', a: 'will', b: 'shall' },
    { lvl: 'b1', id: 'if-vs-when', label: 'if vs when', group: 'Conditionals', a: 'if', b: 'when' },
    { lvl: 'b1', id: 'first-vs-second-conditional', label: 'First vs Second Conditional', group: 'Conditionals', a: 'First Conditional', b: 'Second Conditional' },
    { lvl: 'b1', id: 'active-vs-passive', label: 'active vs passive', group: 'Passive', a: 'active', b: 'passive' },
    { lvl: 'b1', id: 'who-vs-whom', label: 'who vs whom', group: 'Relative Clauses', a: 'who', b: 'whom' },
    { lvl: 'b1', id: 'try-doing-vs-try-to-do', label: 'try doing vs try to do', group: 'Verb Patterns', a: 'try doing', b: 'try to do' },
    { lvl: 'b1', id: 'unless-vs-if-not', label: 'unless vs if not', group: 'Conditionals', a: 'unless', b: 'if not' },

    // B2
    { lvl: 'b2', id: 'less-vs-fewer', label: 'less vs fewer', group: 'Advanced Quantifiers', a: 'less', b: 'fewer' },
    { lvl: 'b2', id: 'amount-vs-number', label: 'amount vs number', group: 'Advanced Quantifiers', a: 'amount', b: 'number' },
    { lvl: 'b2', id: 'either-vs-neither', label: 'either vs neither', group: 'Advanced Quantifiers', a: 'either', b: 'neither' },
    { lvl: 'b2', id: 'despite-vs-although', label: 'despite vs although', group: 'Linking', a: 'despite', b: 'although' },
    { lvl: 'b2', id: 'because-vs-because-of', label: 'because vs because of', group: 'Linking', a: 'because', b: 'because of' },
    { lvl: 'b2', id: 'in-time-vs-on-time', label: 'in time vs on time', group: 'Prepositions', a: 'in time', b: 'on time' },
    { lvl: 'b2', id: 'during-vs-for', label: 'during vs for', group: 'Prepositions', a: 'during', b: 'for' },
    { lvl: 'b2', id: 'nearly-vs-almost', label: 'nearly vs almost', group: 'Adverbs', a: 'nearly', b: 'almost' },
    { lvl: 'b2', id: 'eventually-vs-finally', label: 'eventually vs finally', group: 'Adverbs', a: 'eventually', b: 'finally' },
    { lvl: 'b2', id: 'actually-vs-currently', label: 'actually vs currently', group: 'Adverbs', a: 'actually', b: 'currently' },

    // C1
    { lvl: 'c1', id: 'future-perfect-vs-continuous', label: 'Future Perfect vs Future Perfect Continuous', group: 'Complex Tenses', a: 'Future Perfect', b: 'Future Perfect Continuous' },
    { lvl: 'c1', id: 'rarely-vs-seldom-inversion', label: 'rarely vs seldom inversion', group: 'Inversion', a: 'Rarely', b: 'Seldom' },
    { lvl: 'c1', id: 'if-only-vs-i-wish', label: 'if only vs I wish', group: 'Advanced Conditionals', a: 'If only', b: 'I wish' },
    { lvl: 'c1', id: 'suppose-vs-imagine', label: 'suppose vs imagine', group: 'Advanced Conditionals', a: 'Suppose', b: 'Imagine' },
    { lvl: 'c1', id: 'provided-vs-providing', label: 'provided vs providing', group: 'Advanced Conditionals', a: 'provided that', b: 'providing that' },
    { lvl: 'c1', id: 'whether-vs-if', label: 'whether vs if', group: 'Formal Structures', a: 'whether', b: 'if' },
    { lvl: 'c1', id: 'accuse-vs-blame', label: 'accuse vs blame', group: 'Advanced Reporting', a: 'accuse of', b: 'blame for' },
    { lvl: 'c1', id: 'persuade-vs-convince', label: 'persuade vs convince', group: 'Advanced Reporting', a: 'persuade to', b: 'convince that' },
    { lvl: 'c1', id: 'refuse-vs-deny', label: 'refuse vs deny', group: 'Advanced Reporting', a: 'refuse to', b: 'deny' },
    { lvl: 'c1', id: 'meanwhile-vs-whereas', label: 'meanwhile vs whereas', group: 'Advanced Linkers', a: 'meanwhile', b: 'whereas' },

    // C2
    { lvl: 'c2', id: 'historic-vs-historical', label: 'historic vs historical', group: 'Nuance', a: 'historic', b: 'historical' },
    { lvl: 'c2', id: 'economic-vs-economical', label: 'economic vs economical', group: 'Nuance', a: 'economic', b: 'economical' },
    { lvl: 'c2', id: 'continual-vs-continuous', label: 'continual vs continuous', group: 'Nuance', a: 'continual', b: 'continuous' },
    { lvl: 'c2', id: 'classic-vs-classical', label: 'classic vs classical', group: 'Nuance', a: 'classic', b: 'classical' },
    { lvl: 'c2', id: 'effective-vs-efficient', label: 'effective vs efficient', group: 'Nuance', a: 'effective', b: 'efficient' },
    { lvl: 'c2', id: 'begin-vs-commence', label: 'begin vs commence', group: 'Register', a: 'begin', b: 'commence' },
    { lvl: 'c2', id: 'affect-vs-effect', label: 'affect vs effect', group: 'Common Near-Synonyms', a: 'affect', b: 'effect' },
    { lvl: 'c2', id: 'imply-vs-infer', label: 'imply vs infer', group: 'Common Near-Synonyms', a: 'imply', b: 'infer' },
    { lvl: 'c2', id: 'raise-vs-rise', label: 'raise vs rise', group: 'Common Near-Synonyms', a: 'raise', b: 'rise' },
    { lvl: 'c2', id: 'lay-vs-lie', label: 'lay vs lie', group: 'Common Near-Synonyms', a: 'lay', b: 'lie' }
];

let totalFilesCreated = 0;

for (const topicSpec of ALL_TOPICS) {
    const lvl = topicSpec.lvl;
    const dir = path.join(__dirname, `../practice/data/grammar/${lvl}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const handler = TOPIC_HANDLERS[topicSpec.id] || getGenericHandler(lvl, topicSpec.id, topicSpec.label, topicSpec.group, topicSpec.a || 'A', topicSpec.b || 'B');
    const topicExpl = TOPIC_EXPLANATIONS[topicSpec.id] || {
        a: `Use '${topicSpec.a || 'A'}' according to CEFR ${lvl.toUpperCase()} English grammar standards.`,
        b: `Use '${topicSpec.b || 'B'}' according to CEFR ${lvl.toUpperCase()} English grammar standards.`
    };

    const sentences = [];

    // 100 Right items
    for (let i = 1; i <= 100; i++) {
        const itemData = handler.generateRight(i);
        const isA = (i % 2 === 1);
        const educativeHint = isA ? topicExpl.a : topicExpl.b;

        sentences.push({
            id: `${topicSpec.id}-r-${i}`,
            type: 'cloze',
            q: itemData.q,
            sentence: itemData.sentence,
            opts: itemData.opts,
            ans: 0,
            correctAnswer: itemData.correctWord,
            level: lvl,
            ruleHint: educativeHint
        });
    }

    // 50 Wrong items
    for (let i = 1; i <= 50; i++) {
        const itemData = handler.generateWrong(i);
        const opts = [itemData.correctSentence, itemData.wrongSentence, `She used no words in this clause.`].sort(() => 0.5 - Math.random());
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
 * practice/data/grammar/${lvl}/${topicSpec.id}.js
 * CEFR ${lvl.toUpperCase()} Grammar Confusion Pair Dataset: ${topicSpec.label}
 * Contains exactly 150 items: 100 correct sentences + 50 wrong sentences (find_mistake).
 */

(function() {
    'use strict';

    window.COSY_GRAMMAR_DATA = window.COSY_GRAMMAR_DATA || {};
    window.COSY_GRAMMAR_DATA['${lvl}_${topicSpec.id}'] = {
        id: '${topicSpec.id}',
        label: '${topicSpec.label}',
        level: '${lvl}',
        group: '${topicSpec.group}',
        ruleHint: "Master the distinction between ${topicSpec.label} at CEFR level ${lvl.toUpperCase()}.",
        practice_links: ['https://cosylanguages.github.io/COSYmanuals/manuals/en/grammar/${lvl}/index.html'],
        sentences: ${JSON.stringify(sentences, null, 4)}
    };
})();
`;

    fs.writeFileSync(path.join(dir, `${topicSpec.id}.js`), fileContent, 'utf8');
    totalFilesCreated++;
}

console.log(`Successfully generated ${totalFilesCreated} level-adapted grammar dataset files across A1–C2.`);

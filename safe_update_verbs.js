const fs = require('fs');

const userVerbsList = [
    { word: "wake up", theme: "daily_work_routines_A1", emoji: "⏰", classification: "irregular", v2: "woke up", v3: "woken up", def: "To stop sleeping; to become conscious.", ex: ["I wake up at six thirty.", "She wakes up early for work."], coll: "wake up early / wake up tired / wake up on time" },
    { word: "get up", theme: "daily_work_routines_A1", emoji: "🌅", classification: "irregular", v2: "got up", v3: "got up / gotten up", def: "To rise from bed after waking.", ex: ["He gets up at seven and showers immediately."], coll: "get up early / get up late / get up quickly" },
    { word: "leave", theme: "daily_work_routines_A1", emoji: "🚪", classification: "irregular", v2: "left", v3: "left", def: "To go away from a place or person.", ex: ["I leave home at eight fifteen.", "She left work early."], coll: "leave home / leave work / leave early / leave late" },
    { word: "arrive", theme: "daily_work_routines_A1", emoji: "🏁", classification: "regular", def: "To reach a destination.", ex: ["He arrives at the office every day at nine."], coll: "arrive at work / arrive late / arrive on time" },
    { word: "start", theme: "daily_work_routines_A1", emoji: "▶️", classification: "regular", def: "To begin an activity or period.", ex: ["I start work at eight thirty.", "She starts a new role next month."], coll: "start work / start a meeting / start a new job" },
    { word: "finish", theme: "daily_work_routines_A1", emoji: "🏁", classification: "regular", def: "To complete something.", ex: ["He finishes work at five.", "She finishes the report by noon."], coll: "finish work / finish a project / finish early / finish late" },
    { word: "check", theme: "workplace_basics_A1", emoji: "✅", classification: "regular", def: "To examine or verify something.", ex: ["I check my emails first thing every morning."], coll: "check emails / check messages / check a document" },
    { word: "send", theme: "daily_work_routines_A1", emoji: "✉️", classification: "irregular", v2: "sent", v3: "sent", def: "To transmit a message or file electronically.", ex: ["She sends twenty emails before lunch every day."], coll: "send an email / send a message / send a report" },
    { word: "meet", theme: "daily_work_routines_A1", emoji: "🤝", classification: "irregular", v2: "met", v3: "met", def: "To come together with someone by arrangement.", ex: ["We meet every Monday to discuss the week's work."], coll: "meet a client / meet a colleague / meet for lunch" },
    { word: "reply", theme: "asking_answering_questions_A0", emoji: "📨", classification: "regular", def: "To respond to a message.", ex: ["He always replies to emails the same day."], coll: "reply to an email / reply quickly / reply to a message" },
    { word: "attend", theme: "workplace_basics_A1", emoji: "👥", classification: "regular", def: "To go to a meeting or event.", ex: ["She attends the management meeting every Monday."], coll: "attend a meeting / attend a course / attend an event" },
    { word: "manage", theme: "workplace_basics_A1", emoji: "👔", classification: "regular", def: "To be in charge of people or a situation.", ex: ["She manages a team of twelve people in the sales office."], coll: "manage a team / manage a project / manage your time" },
    { word: "help", theme: "daily_work_routines_A1", emoji: "🤝", classification: "regular", def: "To assist someone with something.", ex: ["He helps new colleagues understand the systems."], coll: "help someone / help with a task / ask for help" },
    { word: "order", theme: "everyday_shopping_A0", emoji: "📦", classification: "regular", def: "To request something formally, especially food or goods.", ex: ["I always order lunch from the same place near the office."], coll: "order food / order a drink / order online / order supplies" },
    { word: "visit", theme: "local_places_services_A0", emoji: "🏠", classification: "regular", def: "To go to see a person or place.", ex: ["She visits clients in different cities every week."], coll: "visit a client / visit a city / visit family / visit regularly" },
    { word: "call", theme: "daily_work_routines_A1", emoji: "📞", classification: "regular", def: "To telephone someone.", ex: ["I call my clients every morning before checking emails."], coll: "call someone / call back / call a meeting / call in sick" },
    { word: "ask", theme: "daily_work_routines_A1", emoji: "❓", classification: "regular", def: "To put a question or make a request.", ex: ["She asks for feedback after every presentation."], coll: "ask a question / ask for help / ask about / ask someone" },
    { word: "explain", theme: "asking_answering_questions_A0", emoji: "👨‍🏫", classification: "regular", def: "To make something clear by giving details.", ex: ["He always explains the process to new team members."], coll: "explain a process / explain clearly / explain to someone" },
    { word: "tell", theme: "daily_work_routines_A1", emoji: "🗣️", classification: "irregular", v2: "told", v3: "told", def: "To give information or instructions to someone.", ex: ["She tells the team about changes before they happen."], coll: "tell the truth / tell someone / tell a story / tell someone about" },
    { word: "show", theme: "daily_work_routines_A1", emoji: "📽️", classification: "irregular", v2: "showed", v3: "shown", def: "To let someone see or demonstrate something.", ex: ["Can you show me how the system works?"], coll: "show someone how / show a document / show interest" },
    { word: "thank", theme: "greetings_social_phrases_A0", emoji: "🙏", classification: "regular", def: "To express gratitude to someone.", ex: ["He thanked the team for their hard work on the project."], coll: "thank someone / thank you for / many thanks" },
    { word: "introduce", theme: "greetings_social_phrases_A0", emoji: "🤝", classification: "regular", def: "To present someone to another person.", ex: ["She introduced herself at the start of the meeting."], coll: "introduce yourself / introduce someone / introduce a topic" },
    { word: "recommend", theme: "giving_opinions_A1", emoji: "👍", classification: "regular", def: "To suggest something as good or suitable.", ex: ["Can you recommend a good accountant?"], coll: "recommend a person / recommend a place / highly recommend" },
    { word: "pay", theme: "money_payment_A1", emoji: "💰", classification: "irregular", v2: "paid", v3: "paid", def: "To give money for goods or a service.", ex: ["I pay my rent by bank transfer on the first of the month."], coll: "pay a bill / pay rent / pay by card / pay in cash" },
    { word: "spend", theme: "money_payment_A1", emoji: "💸", classification: "irregular", v2: "spent", v3: "spent", def: "To use money or time.", ex: ["He spends too much money on takeaway food every week."], coll: "spend money / spend on food / spend on rent / spend time" },
    { word: "cost", theme: "money_payment_A1", emoji: "💰", classification: "irregular", v2: "cost", v3: "cost", def: "To have a price of a particular amount.", ex: ["The flat costs twelve hundred euros a month."], coll: "cost a lot / cost too much / cost less / how much does it cost" },
    { word: "save", theme: "money_payment_A1", emoji: "🏦", classification: "regular", def: "To keep money rather than spending it.", ex: ["She saves a hundred euros every month for a holiday."], coll: "save money / save for a holiday / save for a house" },
    { word: "earn", theme: "money_payment_A1", emoji: "💸", classification: "regular", def: "To receive money for work you do.", ex: ["He earns a good salary as a senior developer."], coll: "earn a salary / earn money / earn more / earn enough" },
    { word: "afford", theme: "money_payment_A1", emoji: "💰", classification: "regular", def: "To have enough money for something.", ex: ["They cannot afford to buy a flat in the city centre."], coll: "afford a house / afford to travel / can't afford it" },
    { word: "charge", theme: "money_payment_A1", emoji: "💳", classification: "regular", def: "To ask a sum of money for a service.", ex: ["The mechanic charged three hundred euros for the repair."], coll: "charge a fee / charge extra / charge for a service" },
    { word: "book", theme: "travel_vocabulary_basics_A0", emoji: "📖", classification: "regular", def: "To reserve a place, ticket or service in advance.", ex: ["I always book restaurants online before going."], coll: "book a hotel / book a flight / book a table / book in advance" },
    { word: "travel", theme: "travel_vocabulary_basics_A0", emoji: "✈️", classification: "regular", def: "To go from one place to another.", ex: ["She travels for work three times a month."], coll: "travel for work / travel abroad / travel by train" },
    { word: "pack", theme: "travel_vocabulary_basics_A0", emoji: "🎒", classification: "regular", def: "To put items into a bag or case for a trip.", ex: ["He packs his bag the night before every business trip."], coll: "pack a bag / pack a suitcase / pack lightly" },
    { word: "cancel", theme: "travel_vocabulary_basics_A0", emoji: "❌", classification: "regular", def: "To decide that something planned will not happen.", ex: ["She had to cancel the client meeting due to illness."], coll: "cancel a flight / cancel a booking / cancel a meeting" },
    { word: "miss", theme: "travel_vocabulary_basics_A0", emoji: "🚂", classification: "regular", def: "To fail to catch transport; to feel sad about absence.", ex: ["He missed his train and was late for the interview."], coll: "miss a train / miss a flight / miss a meeting / miss someone" },
    { word: "relax", theme: "leisure_activities_A1", emoji: "🛀", classification: "regular", def: "To stop working and rest; to become less tense.", ex: ["I relax at the weekend and never check emails."], coll: "relax at home / relax after work / relax on holiday" },
    { word: "enjoy", theme: "leisure_activities_A1", emoji: "😊", classification: "regular", def: "To take pleasure from something.", ex: ["She really enjoys working from home three days a week."], coll: "enjoy doing / enjoy a meal / enjoy your work / enjoy life" },
    { word: "exercise", theme: "leisure_activities_A1", emoji: "🏋️", classification: "regular", def: "To do physical activity for health and fitness.", ex: ["He exercises four times a week to manage work stress."], coll: "exercise regularly / exercise at the gym / exercise outdoors" },
    { word: "feel", theme: "basic_positive_emotions_A0", emoji: "🌡️", classification: "irregular", v2: "felt", v3: "felt", def: "To experience a physical or emotional state.", ex: ["She feels exhausted after a long week of meetings."], coll: "feel tired / feel better / feel ill / feel stressed" },
    { word: "hurt", theme: "body_parts_A0", emoji: "🤕", classification: "irregular", v2: "hurt", v3: "hurt", def: "To cause pain; or to be in pain.", ex: ["My back hurts after sitting at a desk all day."], coll: "hurt your back / hurt someone / it hurts / get hurt" },
    { word: "rest", theme: "leisure_activities_A1", emoji: "🛌", classification: "regular", def: "To stop working in order to recover energy.", ex: ["He rests for an hour every afternoon after lunch."], coll: "rest at home / rest after work / need rest / get some rest" },
    { word: "recover", theme: "illnesses_symptoms_A1", emoji: "💪", classification: "regular", def: "To return to good health after illness.", ex: ["She is recovering from surgery and working part-time."], coll: "recover from illness / recover quickly / recover fully" },
    { word: "cook", theme: "cooking_methods_A1", emoji: "🍳", classification: "regular", def: "To prepare food using heat.", ex: ["She cooks dinner every evening to save money."], coll: "cook dinner / cook a meal / cook at home / cook for someone" },
    { word: "clean", theme: "household_tasks_A1", emoji: "🧹", classification: "regular", def: "To remove dirt from something.", ex: ["I clean the flat every Saturday morning."], coll: "clean the flat / clean the kitchen / clean up after work" },
    { word: "repair", theme: "household_tasks_A1", emoji: "🛠️", classification: "regular", def: "To fix something that is broken.", ex: ["The landlord is slow to repair things in the flat."], coll: "repair something / get repaired / repair costs" },
    { word: "rent", theme: "types_of_accommodation_A1", emoji: "🏠", classification: "regular", def: "To pay money to use property belonging to someone else.", ex: ["They rent a two-bedroom flat near the city centre."], coll: "rent a flat / rent a property / rent out a room" },
    { word: "move", theme: "household_tasks_A1", emoji: "📦", classification: "regular", def: "To go to live or work in a different place.", ex: ["They moved to a larger flat when they had children."], coll: "move to a new place / move in / move out / move house" },
    { word: "invite", theme: "family_life_A1", emoji: "✉️", classification: "regular", def: "To ask someone to come to an event or place.", ex: ["She invited all her colleagues to the leaving party."], coll: "invite someone / invite to dinner / invite to a party" },
    { word: "celebrate", theme: "family_life_A1", emoji: "🎉", classification: "regular", def: "To do something enjoyable for a special occasion.", ex: ["They celebrate every work anniversary as a team."], coll: "celebrate a birthday / celebrate success / celebrate together" },
    { word: "happen", theme: "asking_answering_questions_A0", emoji: "⚡", classification: "regular", def: "To take place; to occur.", ex: ["What happened at the meeting? Something went wrong."], coll: "what happened / happen to someone / it happens / happen again" },
    { word: "seem", theme: "describing_things_A1", emoji: "🤔", classification: "regular", def: "To appear to be something; to give an impression.", ex: ["She seems very confident in client meetings."], coll: "seem fine / seem worried / seem happy / seem like" },
    { word: "mean", theme: "asking_answering_questions_A0", emoji: "🗨️", classification: "irregular", v2: "meant", v3: "meant", def: "To have a particular meaning; to intend.", ex: ["What does this clause in the contract mean?"], coll: "mean something / what does it mean / mean to do / I didn't mean to" },
    { word: "follow", theme: "directions_navigation_A1", emoji: "👣", classification: "regular", def: "To come after; to obey rules or instructions.", ex: ["Please follow the instructions carefully. He follows the news."], coll: "follow instructions / follow someone / follow the news / follow up" },
    { word: "change", theme: "time", emoji: "🔄", classification: "regular", def: "To become different; to make something different.", ex: ["She changed jobs twice in three years. Things change fast."], coll: "change jobs / change your mind / change the plan / change something" },
    { word: "continue", theme: "daily_work_routines_A1", emoji: "➡️", classification: "regular", def: "To keep doing something without stopping.", ex: ["He continued working after six despite feeling ill."], coll: "continue working / continue to do / continue with / continue a task" },
    { word: "stop", theme: "time", emoji: "🛑", classification: "regular", def: "To end an activity or movement.", ex: ["She stopped taking the bus and cycles to work now."], coll: "stop doing / stop working / stop a habit / stop someone" },
    { word: "try", theme: "learning_studying_A1", emoji: "🎯", classification: "regular", def: "To attempt to do something; to test something.", ex: ["I always try to reply to all messages within an hour."], coll: "try to do / try hard / try something new / give it a try" },
    { word: "wait", theme: "time", emoji: "⏳", classification: "regular", def: "To stay in a place until something happens.", ex: ["He waited twenty minutes for the meeting to start."], coll: "wait for someone / wait in a queue / wait a moment" },
    { word: "watch", theme: "leisure_activities_A1", emoji: "📺", classification: "regular", def: "To look at something for a period of time.", ex: ["She watches the market news every morning before work."], coll: "watch TV / watch a film / watch the news / watch closely" },
    { word: "sit", theme: "health_body", emoji: "🪑", classification: "irregular", v2: "sat", v3: "sat", def: "To be in or take a seated position.", ex: ["He sits at his desk for eight hours a day."], coll: "sit down / sit at a desk / sit in a meeting / sit quietly" },
    { word: "stand", theme: "health_body", emoji: "🧍", classification: "irregular", v2: "stood", v3: "stood", def: "To be in or rise to an upright position.", ex: ["She stands when she presents to keep her energy up."], coll: "stand up / stand in a queue / stand by / stand out" },
    { word: "carry", theme: "health_body", emoji: "🎒", classification: "regular", def: "To hold and take something with you.", ex: ["I carry my laptop and notes to every meeting."], coll: "carry a bag / carry notes / carry out / carry on" },
    { word: "grow", theme: "plants_natural_world_A1", emoji: "🌱", classification: "irregular", v2: "grew", v3: "grown", def: "To increase in size or amount; to develop.", ex: ["The company grew by twenty percent last year."], coll: "grow a business / grow quickly / grow by / grow into" },
    { word: "learn", theme: "education_learning", emoji: "📚", classification: "both", v2: "learned / learnt", v3: "learned / learnt", def: "To gain knowledge or skill.", ex: ["She is learning Spanish for her new job abroad."], coll: "learn a language / learn a skill / learn from / learn how to" },
    { word: "study", theme: "education_learning", emoji: "📖", classification: "regular", def: "To read and practise to gain knowledge.", ex: ["He is studying for a professional qualification."], coll: "study English / study for an exam / study hard / self-study" },
    { word: "teach", theme: "education_learning", emoji: "👨‍🏫", classification: "irregular", v2: "taught", v3: "taught", def: "To give instruction in a subject.", ex: ["She teaches communication skills to senior managers."], coll: "teach someone / teach a subject / teach how to / teach a class" },
    { word: "play", theme: "leisure_activities_A1", emoji: "🎮", classification: "regular", def: "To take part in a game or sport; to produce music.", ex: ["He plays football at the weekend to de-stress."], coll: "play sport / play a game / play music / play a role" },
    { word: "include", theme: "daily_work_routines_A1", emoji: "➕", classification: "regular", def: "To make something part of a whole.", ex: ["The price includes breakfast and evening meals."], coll: "include something / include in / not included / price includes" },
    { word: "become", theme: "relationships_dating_A2", emoji: "🦋", classification: "irregular", v2: "became", v3: "become", def: "To start to be something.", ex: ["She became a manager after just two years in the role."], coll: "become a manager / become popular / become clear / become important" },
    { word: "belong", theme: "describing_things_A1", emoji: "🏠", classification: "regular", def: "To be the property of someone; to be a member.", ex: ["That account belongs to the finance department."], coll: "belong to someone / belong in / feel like you belong" },
    { word: "choose", theme: "everyday_shopping_A0", emoji: "👈", classification: "irregular", v2: "chose", v3: "chosen", def: "To select from options.", ex: ["He chose to work part-time to spend more time with family."], coll: "choose between / choose to do / choose carefully / choose a career" },
    { word: "build", theme: "home_repairs_maintenance_A2", emoji: "🏗️", classification: "irregular", v2: "built", v3: "built", def: "To construct something; to develop something over time.", ex: ["She built a strong reputation over ten years."], coll: "build a career / build a team / build experience / build trust" }
];

function extractVerbs(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/const data = (\[[\s\S]*?\]);/);
    if (match) {
        return JSON.parse(match[1]);
    }
    return [];
}

const starterPath = 'js/data/germanic/en/starter/verbs.js';
const elementaryPath = 'js/data/germanic/en/elementary/verbs.js';

let starterVerbs = extractVerbs(starterPath);
let elementaryVerbs = extractVerbs(elementaryPath);

const updatedStarterVerbs = [...starterVerbs];

userVerbsList.forEach(userVerb => {
    // 1. Check if it's in Elementary
    const elemIndex = elementaryVerbs.findIndex(v => v.word === userVerb.word);
    if (elemIndex !== -1) {
        const movedVerb = elementaryVerbs.splice(elemIndex, 1)[0];
        // Only move if not already in Starter
        if (!updatedStarterVerbs.some(v => v.word === userVerb.word)) {
            updatedStarterVerbs.push({
                ...movedVerb,
                level: 'starter',
                theme: userVerb.theme,
                emoji: userVerb.emoji,
                subtext: userVerb.coll,
                definitions: [{ text: userVerb.def, examples: userVerb.ex }],
                classification: userVerb.classification,
                v2: userVerb.v2,
                v3: userVerb.v3
            });
        }
    }

    // 2. Check if it's already in Starter
    const starterIndex = updatedStarterVerbs.findIndex(v => v.word === userVerb.word);
    if (starterIndex !== -1) {
        // Update existing Starter verb metadata
        const v = updatedStarterVerbs[starterIndex];
        v.theme = userVerb.theme;
        v.subtext = userVerb.coll;
        v.definitions = [{ text: userVerb.def, examples: userVerb.ex }];
        v.classification = userVerb.classification;
        if (userVerb.v2) v.v2 = userVerb.v2;
        if (userVerb.v3) v.v3 = userVerb.v3;
        // Keep existing emoji if it's already specific (not generic radio)
        if (v.emoji === '🔘' || !v.emoji) v.emoji = userVerb.emoji;
    } else {
        // 3. Add as new
        updatedStarterVerbs.push({
            word: userVerb.word,
            level: 'starter',
            theme: userVerb.theme,
            emoji: userVerb.emoji,
            subtext: userVerb.coll,
            form: 'verb',
            definitions: [{ text: userVerb.def, examples: userVerb.ex }],
            classification: userVerb.classification,
            v2: userVerb.v2,
            v3: userVerb.v3
        });
    }
});

// Remove null values if any (from filtering)
const finalStarter = updatedStarterVerbs.filter(v => !!v);
const finalElementary = elementaryVerbs.filter(v => !!v);

function writeVerbs(filePath, verbs) {
    const content = `(function() {
    const data = ${JSON.stringify(verbs, null, 4)};
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();`;
    fs.writeFileSync(filePath, content);
}

writeVerbs(starterPath, finalStarter);
writeVerbs(elementaryPath, finalElementary);

console.log(`Updated Starter: ${finalStarter.length} verbs`);
console.log(`Updated Elementary: ${finalElementary.length} verbs`);

const SM2 = {
  // Call this after every answer. quality: 0-5
  // 0=blackout, 1=wrong, 2=wrong+hint, 3=correct+hard, 4=correct, 5=correct+easy
  update(item, quality) {
    if (!item.repetitions) item.repetitions = 0;
    if (!item.easeFactor)  item.easeFactor  = 2.5;
    if (!item.interval)    item.interval    = 1;

    if (quality >= 3) {
      if (item.repetitions === 0) item.interval = 1;
      else if (item.repetitions === 1) item.interval = 6;
      else item.interval = Math.round(item.interval * item.easeFactor);
      item.repetitions++;
    } else {
      item.repetitions = 0;
      item.interval = 1;
    }

    item.easeFactor = Math.max(1.3,
      item.easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
    );

    item.nextReview = Date.now() + item.interval * 86400000;
    return item;
  },

  // Map task type + result to SM-2 quality score
  quality(taskType, correct, usedHint) {
    if (!correct) return usedHint ? 1 : 0;
    const easyTypes = ['multipleChoice', 'truefalse', 'type-mc', 'type-tf'];
    const hardTypes = ['cloze', 'sentenceBuilder', 'scramble', 'type-cl', 'type-ws', 'type-sc'];
    if (usedHint) return 2;
    if (hardTypes.includes(taskType)) return 5;
    if (easyTypes.includes(taskType)) return 3;
    return 4;
  },

  // How many items are due for review right now
  dueCount(items) {
    const now = Date.now();
    return Object.values(items).filter(i => i.nextReview <= now).length;
  },

  // Pick items for a session, weighted by urgency
  selectItems(allItems, pool, language, sessionSize = 20) {
    const now = Date.now();

    // 1. Shuffle the pool first to ensure randomness among items with identical scores
    const shuffledPool = [...pool];
    for (let i = shuffledPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPool[i], shuffledPool[j]] = [shuffledPool[j], shuffledPool[i]];
    }

    return shuffledPool.sort((a, b) => {
      const idA = language + '::' + (a.word || a.text || a.topic || a.digit);
      const idB = language + '::' + (b.word || b.text || b.topic || b.digit);

      // New items (nextReview === 0) are treated as if they were due yesterday (high priority)
      const ia = allItems[idA] || {nextReview: now - 86400000, easeFactor: 2.5};
      const ib = allItems[idB] || {nextReview: now - 86400000, easeFactor: 2.5};

      // Overdue items first, then by ease factor (harder items = lower ease)
      const urgencyA = Math.max(0, now - ia.nextReview) / 86400000;
      const urgencyB = Math.max(0, now - ib.nextReview) / 86400000;
      const easeA = 5 - ia.easeFactor;
      const easeB = 5 - ib.easeFactor;

      return (urgencyB + easeB) - (urgencyA + easeA);
    }).slice(0, sessionSize);
  }
};

const Store = {
  KEY: 'cosy_srs',

  load() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; }
    catch { return {}; }
  },

  save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); }
    catch(e) { console.warn('Storage full:', e); }
  },

  // Call after every answer
  record(itemId, language, taskType, correct, usedHint = false) {
    const data = this.load();
    const key = language + '::' + itemId;
    const item = data[key] || { id: key, repetitions: 0, easeFactor: 2.5,
                                 interval: 1, nextReview: 0,
                                 correctCount: 0, incorrectCount: 0 };
    if (correct) item.correctCount++;
    else item.incorrectCount++;
    item.lastSeen = Date.now();
    item.lastTaskType = taskType;

    const q = SM2.quality(taskType, correct, usedHint);
    SM2.update(item, q);
    data[key] = item;
    this.save(data);
    return item;
  },

  // Accuracy rate for a theme or task type
  accuracy(language, filter = {}) {
    const data = this.load();
    const items = Object.entries(data)
      .filter(([k]) => k.startsWith(language + '::'))
      .map(([,v]) => v);
    const total = items.reduce((s,i) => s + i.correctCount + i.incorrectCount, 0);
    const correct = items.reduce((s,i) => s + i.correctCount, 0);
    return total === 0 ? null : Math.round(correct / total * 100);
  },

  dueItems(language) {
    const data = this.load();
    const now = Date.now();
    return Object.entries(data)
      .filter(([k, v]) => k.startsWith(language + '::') && v.nextReview <= now)
      .map(([,v]) => v);
  }
};

// Returns the best task type for this item given its history
function smartTaskType(itemId, language, preferredType) {
  const data = Store.load();
  const key = language + '::' + itemId;
  const item = data[key];

  // Mapping internal names to practice.js task type keys
  const mapping = {
    'multipleChoice': 'type-mc',
    'truefalse': 'type-tf',
    'listen': 'type-ls',
    'opposite': 'type-op',
    'cloze': 'type-cl',
    'scramble': 'type-sc',
    'sentenceBuilder': 'type-ws'
  };

  const reverseMapping = {
    'type-mc': 'multipleChoice',
    'type-tf': 'truefalse',
    'type-ls': 'listen',
    'type-op': 'opposite',
    'type-cl': 'cloze',
    'type-sc': 'scramble',
    'type-ws': 'sentenceBuilder'
  };

  const pref = reverseMapping[preferredType] || preferredType;

  let result = pref;

  if (!item || item.repetitions < 1) {
    // New item: allow preferred type immediately if it's not a 'hard' typing task,
    // otherwise 50% chance to start with something easier like MC.
    const hardTypingTypes = ['cloze', 'opposite', 'type-cl', 'type-op'];
    if (hardTypingTypes.includes(pref)) {
      result = Math.random() > 0.5 ? 'multipleChoice' : pref;
    } else {
      result = pref;
    }
  } else if (item.repetitions < 5 && item.easeFactor > 2.0) {
    // Known but not mastered: use preferred type
    result = pref || 'multipleChoice';
  } else if (item.easeFactor < 1.8) {
    // Struggling: use listen+select or true/false (easier)
    result = 'truefalse';
  } else if (item.repetitions >= 5 && item.easeFactor >= 2.2) {
    // Well known: upgrade to harder task type
    const harder = { multipleChoice:'cloze', truefalse:'scramble',
                     listen:'sentenceBuilder', opposite:'cloze',
                     'type-mc':'type-cl', 'type-tf':'type-sc',
                     'type-ls':'type-ws', 'type-op':'type-cl' };
    result = harder[preferredType] || harder[pref] || 'cloze';
  }

  return mapping[result] || result;
}

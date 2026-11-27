/**
 * COSYlanguages - Placement question bank loader
 *
 * The banks are ~192 KB (English) and ~127 KB (the other thirteen languages)
 * and nothing on the quiz page needs them until the learner presses Start, so
 * they are fetched on demand instead of on page load. Each file is fetched at
 * most once; a second call for the same file reuses the first promise.
 *
 * The banks publish themselves as window.COSY_PLACEMENT_QUESTIONS_EN and
 * window.COSY_PLACEMENT_QUESTIONS_MULTILINGUAL, which is what the engine reads.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(null);
  } else {
    root.COSYPlacementBanks = factory(root);
  }
}(typeof window !== 'undefined' ? window : this, function (root) {
  'use strict';

  const FILES = {
    en: 'question-bank-en.js',
    multilingual: 'question-banks-multilingual.js'
  };
  // document.currentScript is only set while this file executes, so the base
  // URL has to be captured here rather than when load() is called.
  const doc = typeof document !== 'undefined' ? document : null;
  const BASE = (doc && doc.currentScript && doc.currentScript.src) || (doc && doc.baseURI) || '';
  const pending = {};

  function fileFor(lang) {
    return lang === 'en' ? 'en' : 'multilingual';
  }

  function alreadyLoaded(key) {
    if (!root) return false;
    return key === 'en'
      ? Boolean(root.COSY_PLACEMENT_QUESTIONS_EN)
      : Boolean(root.COSY_PLACEMENT_QUESTIONS_MULTILINGUAL);
  }

  function load(lang) {
    const key = fileFor(lang);
    if (alreadyLoaded(key)) return Promise.resolve();
    if (pending[key]) return pending[key];

    pending[key] = new Promise(function (resolve, reject) {
      const script = doc.createElement('script');
      script.src = new URL(FILES[key], BASE).href;
      script.async = true;
      script.onload = function () {
        if (alreadyLoaded(key)) resolve();
        else reject(new Error(FILES[key] + ' loaded without defining its bank'));
      };
      script.onerror = function () {
        delete pending[key];
        reject(new Error('Could not load ' + FILES[key]));
      };
      doc.head.appendChild(script);
    });

    return pending[key];
  }

  return { load: load, fileFor: fileFor, FILES: FILES };
}));

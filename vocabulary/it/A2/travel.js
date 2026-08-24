(function() {
    'use strict';

    const lang = 'it';
    const data = [
        {
            id: 'it_a2_viaggio_01',
            word: 'valigia',
            translation: 'suitcase',
            definitions: [{ text: 'Contenitore utilizzato per riporre abiti durante un viaggio.' }],
            examples: [{ text: 'Ho preparato la mia valigia per la partenza.' }],
            level: 'elementary',
            theme: 'travel',
            language: 'it',
            form: 'noun'
        },
        {
            id: 'it_a2_viaggio_02',
            word: 'biglietto',
            translation: 'ticket',
            definitions: [{ text: 'Documento che consente di viaggiare su un mezzo di trasporto.' }],
            examples: [{ text: 'Ho comprato un biglietto del treno per Roma.' }],
            level: 'elementary',
            theme: 'travel',
            language: 'it',
            form: 'noun'
        }
    ];

    if (!window.vocabularyData) window.vocabularyData = {};
    if (!window.vocabularyData.it) window.vocabularyData.it = [];
    window.vocabularyData.it.push(...data);
})();

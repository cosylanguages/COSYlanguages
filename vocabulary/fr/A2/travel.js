(function() {
    'use strict';

    const lang = 'fr';
    const data = [
        {
            id: 'fr_a2_voyage_01',
            word: 'valise',
            translation: 'suitcase',
            definitions: [{ text: 'Bagage rigide ou souple servant à porter des vêtements en voyage.' }],
            examples: [{ text: 'J\'ai préparé ma valise pour les vacances.' }],
            level: 'elementary',
            theme: 'travel',
            language: 'fr',
            form: 'noun'
        },
        {
          id: 'fr_a2_voyage_02',
          word: 'billet',
          translation: 'ticket',
          definitions: [{ text: 'Titre de transport pour voyager en train ou en avion.' }],
          examples: [{ text: 'J\'ai acheté un billet de train pour Paris.' }],
          level: 'elementary',
          theme: 'travel',
          language: 'fr',
          form: 'noun'
        }
    ];

    if (!window.vocabularyData) window.vocabularyData = {};
    if (!window.vocabularyData.fr) window.vocabularyData.fr = [];
    window.vocabularyData.fr.push(...data);
})();

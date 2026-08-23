(function() {
    'use strict';

    const data = [
        {
            id: 'ru_a2_travel_01',
            word: 'чемодан',
            translation: 'suitcase',
            definitions: [{ text: 'Коробка с ручкой для перевозки вещей в поездках.' }],
            examples: [{ text: 'Я собрал чемодан перед поездкой.' }],
            level: 'elementary',
            theme: 'travel',
            language: 'ru',
            form: 'noun'
        },
        {
            id: 'ru_a2_travel_02',
            word: 'билет',
            translation: 'ticket',
            definitions: [{ text: 'Документ, дающий право проезда на транспорте.' }],
            examples: [{ text: 'Я купил билет на поезд до Москвы.' }],
            level: 'elementary',
            theme: 'travel',
            language: 'ru',
            form: 'noun'
        }
    ];

    if (!window.vocabularyData) window.vocabularyData = {};
    if (!window.vocabularyData.ru) window.vocabularyData.ru = [];
    window.vocabularyData.ru.push(...data);
})();

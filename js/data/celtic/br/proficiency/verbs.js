(function() {
    const lang = "br";
    const data = [];

    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [
        ...(window.verbsData[lang] || []),
        ...data
    ];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [
        ...(window.vocabularyData[lang] || []),
        ...data
    ];
})();
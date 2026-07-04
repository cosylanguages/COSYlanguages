(function() {
    const data = {
      fluency: [],
      opinions: [],
      battle: [],
      critic: [],
      action: {
        A1: [],
        A2: [],
        B1: [],
        B2: [],
        C1: [],
        C2: []
      },
      identity: [],
      wordlinker: [],
      etymology: [],
      storychain: []
    };

    window.gameData = window.gameData || {};
    window.gameData['ru'] = data;
})();

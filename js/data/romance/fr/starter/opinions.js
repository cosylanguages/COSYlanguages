(function() {
    const data = [
      { t:"Les chats sont mieux que les chiens.", tag:"Pets", h:["As-tu un chat ou un chien ?","Qu'est-ce que tu aimes chez les chats ? Et chez les chiens ?","Les chats sont-ils faciles ou difficiles ?","Quel est un bon nom pour un animal de compagnie ?","Tes amis ont-ils des animaux ?"] },
      { t:"Le matin est le meilleur moment de la journée.", tag:"Daily life", h:["À quelle heure te réveilles-tu ?","Que fais-tu le matin ?","Te sens-tu bien le matin ?","Le soir est-il mieux pour toi ?","Que manges-tu le matin ?"] },
      { t:"Le thé est meilleur que le café.", tag:"Drinks", h:["Bois-tu du thé ou du café ?","Combien de tasses bois-tu chaque jour ?","Bois-tu des boissons chaudes ou froides ?","Que bois-tu le matin ?","Quelle est la boisson populaire dans ton pays ?"] },
      { t:"C'est amusant de cuisiner.", tag:"Food", h:["Cuisines-tu à la maison ?","Que cuisines-tu ?","Est-ce facile ou difficile ?","Qui cuisine dans ta famille ?","Quelle est ta chose préférée à préparer ?"] },
      { t:"Le temps froid est agréable.", tag:"Weather", h:["Quel temps fait-il aujourd'hui ?","Aimes-tu la pluie ou le soleil ?","Que portes-tu quand il fait froid ?","Que fais-tu quand il fait froid ?","Quelle est ta saison préférée ?"] },
      { t:"Le lundi est une mauvaise journée.", tag:"Daily life", h:["Que fais-tu le lundi ?","Quel est ton jour préféré de la semaine ?","Le week-end est-il trop court ?","Que fais-tu le vendredi ?","Aimes-tu ta routine hebdomadaire ?"] },
      { t:"Le chocolat est très bon.", tag:"Food", h:["Aimes-tu le chocolat ?","Quel est ton bonbon ou aliment sucré préféré ?","Manges-tu beaucoup de chocolat ?","Le chocolat est-il bon pour la santé ?","Que manges-tu quand tu es heureux ?"] },
      { t:"Les petites villes sont mieux que les grandes villes.", tag:"Places", h:["Habites-tu dans un village ou une ville ?","Qu'est-ce qui est bien dans une petite ville ?","Qu'est-ce qui est bien dans une grande ville ?","Ta ville est-elle bruyante ?","Où veux-tu habiter à l'avenir ?"] },
      { t:"C'est bien d'avoir beaucoup d'amis.", tag:"People", h:["Combien d'amis as-tu ?","Que fais-tu avec tes amis ?","Un bon ami est-il mieux que beaucoup d'amis ?","Où rencontres-tu tes amis ?","Qu'est-ce qu'un bon ami ?"] },
      { t:"Dormir est la meilleure activité.", tag:"Daily life", h:["Combien d'heures dors-tu ?","Dors-tu bien ?","À quelle heure vas-tu au lit ?","Dors-tu l'après-midi ?","Est-ce que dormir est ta chose préférée ?"] },
      { t:"La musique est mieux que la télé.", tag:"Free time", h:["Écoutés-tu de la musique chaque jour ?","Quelle musique aimes-tu ?","Combien d'heures de télé regardes-tu ?","Quelle est ton émission préférée ?","Que fais-tu le soir ?"] },
      { t:"C'est important de prendre un petit-déjeuner.", tag:"Food", h:["Manges-tu un petit-déjeuner chaque jour ?","Que manges-tu le matin ?","Le petit-déjeuner est-il un grand repas pour toi ?","Prends-tu ton petit-déjeuner à la maison ?","Quel est le petit-déjeuner typique dans ton pays ?"] },
      { t:"Nager est amusant.", tag:"Sport", h:["Sais-tu nager ?","Aimes-tu l'eau ?","Où nages-tu — à la piscine ou à la mer ?","Quel sport aimes-tu ?","Le sport est-il important pour toi ?"] },
      { t:"Les vieux films sont ennuyeux.", tag:"Entertainment", h:["Quels films aimes-tu ?","Regardes-tu de vieux ou de nouveaux films ?","Qui est ton acteur préféré ?","Qu'est-ce qu'un bon film ?","Où regardes-tu des films ?"] },
      { t:"L'ananas sur la pizza est une excellente idée.", tag:"Food", h:["Aimes-tu la pizza ?","Quelle est ta garniture préférée ?","Mets-tu des fruits sur des plats salés ?","Est-ce populaire dans ton pays ?","Quelle est la pire garniture de pizza pour toi ?"] }
    ];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();
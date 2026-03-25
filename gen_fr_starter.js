const fs = require('fs');

const enVerbs = JSON.parse(fs.readFileSync('en_verbs_reference.json', 'utf8'));

const translations = {
  "be": { word: "être", def: "Exister ; avoir une qualité ou un état.", ex: ["Je suis fatigué.", "Elle est médecin.", "Nous sommes en retard."], sub: "être prêt / être fatigué / à la maison / être ouvert", group: "auxiliary", class: "irregular", aspect: "stative", v3: "été" },
  "have": { word: "avoir", def: "Posséder quelque chose ; éprouver quelque chose.", ex: ["J'ai un travail.", "Il a une voiture.", "Elle a mal à la tête."], sub: "avoir un travail / avoir déjeuner / avoir un problème / avoir le temps", group: "auxiliary", class: "irregular", aspect: "stative", v3: "eu" },
  "feel": { word: "se sentir", def: "Éprouver une émotion ou une sensation physique.", ex: ["Je me sens fatigué.", "Elle se sent stressée.", "Il se sent mieux."], sub: "se sentir fatigué / se sentir mieux / se sentir bien / se sentir stressé", group: "ir", class: "irregular", aspect: "both", v3: "senti" },
  "give": { word: "donner", def: "Remettre ou transférer quelque chose à quelqu'un.", ex: ["Il me donne beaucoup de travail.", "Elle donne des conseils."], sub: "donner des conseils / donner de l'argent / donner un cadeau / donner des informations", group: "er", class: "regular", aspect: "action", v3: "donné" },
  "take": { word: "prendre", def: "Tenir et déplacer quelque chose ; utiliser ou consommer.", ex: ["Je prends le bus pour aller au travail.", "Elle prend des médicaments."], sub: "prendre le bus / prendre un médicament / prendre une pause / prendre du temps", group: "re", class: "irregular", aspect: "action", v3: "pris" },
  "get": { word: "obtenir", def: "Recevoir, obtenir ou devenir.", ex: ["J'obtiens un bon salaire.", "Il se fatigue rapidement.", "Elle obtient une promotion."], sub: "obtenir un travail / se fatiguer / s'améliorer / rentrer à la maison", group: "ir", class: "irregular", aspect: "action", v3: "obtenu" },
  "put": { word: "mettre", def: "Placer quelque chose dans une position.", ex: ["Pose ton sac ici.", "Elle met de l'argent à la banque."], sub: "mettre / ranger / poser le téléphone / mettre de l'argent de côté", group: "re", class: "irregular", aspect: "action", v3: "mis" },
  "make": { word: "faire", def: "Créer ou produire quelque chose ; causer.", ex: ["Je fais du café chaque matin.", "Elle prend des décisions rapidement."], sub: "faire du café / prendre une décision / faire une erreur / gagner de l'argent", group: "re", class: "irregular", aspect: "action", v3: "fait" },
  "do": { word: "faire", def: "Effectuer une tâche ou une activité.", ex: ["Je fais mon travail.", "Elle fait la cuisine.", "Il ne fait rien."], sub: "faire le travail / faire de l'exercice / faire les courses / ne rien faire", group: "re", class: "irregular", aspect: "action", v3: "fait" },
  "use": { word: "utiliser", def: "Employer quelque chose dans un but précis.", ex: ["J'utilise mon téléphone pour tout.", "Elle utilise les transports en commun."], sub: "utiliser un téléphone / utiliser les transports en commun / utiliser un ordinateur", group: "er", class: "regular", aspect: "action", v3: "utilisé" },
  "open": { word: "ouvrir", def: "Faire en sorte que quelque chose ne soit pas fermé ; commencer.", ex: ["Il ouvre la porte.", "Elle ouvre un compte bancaire."], sub: "ouvrir une porte / ouvrir un compte / ouvrir à neuf heures", group: "ir", class: "irregular", aspect: "action", v3: "ouvert" },
  "close": { word: "fermer", def: "Faire en sorte que quelque chose ne soit pas ouvert ; finir.", ex: ["Elle ferme son ordinateur portable.", "La banque ferme à cinq heures."], sub: "fermer une porte / fermer à six heures / fermer la réunion", group: "er", class: "regular", aspect: "action", v3: "fermé" },
  "start": { word: "commencer", def: "Débuter quelque chose.", ex: ["Je commence le travail à huit heures.", "Elle commence un nouveau travail."], sub: "commencer le travail / commencer une réunion / commencer un nouveau travail", group: "er", class: "regular", aspect: "action", v3: "commencé" },
  "finish": { word: "finir", def: "Terminer quelque chose ou s'arrêter.", ex: ["Il finit son travail à cinq heures.", "Elle finit le rapport."], sub: "finir le travail / finir un projet / finir tôt", group: "ir", class: "regular", aspect: "action", v3: "fini" },
  "help": { word: "aider", def: "Aider quelqu'un.", ex: ["Il aide ses collègues.", "Peux-tu m'aider ?"], sub: "aider quelqu'un / aider avec / demander de l'aide", group: "er", class: "regular", aspect: "action", v3: "aidé" },
  "try": { word: "essayer", def: "Faire un effort ; tenter quelque chose.", ex: ["J'essaie toujours de faire de mon mieux au travail.", "Essaie le café ici."], sub: "essayer de faire / essayer fort / essayer quelque chose de nouveau", group: "er", class: "regular", aspect: "action", v3: "essayé" },
  "show": { word: "montrer", def: "Laisser quelqu'un voir quelque chose ; expliquer.", ex: ["Elle me montre la carte.", "Il montre son travail."], sub: "montrer à quelqu'un / montrer comment / montrer un document", group: "er", class: "regular", aspect: "action", v3: "montré" },
  "find": { word: "trouver", def: "Découvrir ou localiser quelque chose.", ex: ["Je trouve le travail intéressant.", "Elle a trouvé un nouveau travail."], sub: "trouver un travail / découvrir / trouver cela difficile / trouver du temps", group: "er", class: "regular", aspect: "action", v3: "trouvé" },
  "keep": { word: "garder", def: "Continuer à avoir ou à faire quelque chose.", ex: ["Garde le reçu.", "Elle garde son téléphone allumé toute la journée."], sub: "continuer / rester silencieux / garder une trace / rester en contact", group: "er", class: "regular", aspect: "both", v3: "gardé" },
  "lose": { word: "perdre", def: "Ne plus avoir quelque chose ; ne pas gagner.", ex: ["J'ai perdu mes clés.", "Elle a perdu son travail.", "Il ne perd jamais."], sub: "perdre un travail / perdre de l'argent / perdre du poids / perdre du temps", group: "re", class: "regular", aspect: "action", v3: "perdu" },
  "cut": { word: "couper", def: "Diviser avec quelque chose de tranchant ; réduire.", ex: ["Elle écourte sa pause déjeuner.", "Cela réduit les coûts."], sub: "réduire les coûts / réduire les dépenses / écourter / couper en deux", group: "er", class: "regular", aspect: "action", v3: "coupé" },
  "turn": { word: "tourner", def: "Se déplacer dans une direction ; changer d'état.", ex: ["Tournez à gauche au bureau.", "Elle éteint la lumière."], sub: "allumer / éteindre / tourner à gauche / tourner à droite", group: "er", class: "regular", aspect: "action", v3: "tourné" },
  "bring": { word: "apporter", def: "Transporter quelque chose vers un lieu.", ex: ["Apportez votre pièce d'identité à l'entretien.", "Il apporte le déjeuner."], sub: "apporter quelqu'un / apporter de la nourriture / apporter un document", group: "er", class: "regular", aspect: "action", v3: "apporté" },
  "say": { word: "dire", def: "Exprimer quelque chose par des mots.", ex: ["Elle dit bonjour chaque matin.", "Il dit que c'est bien."], sub: "dire bonjour / dire oui / dire non / dire quelque chose", group: "re", class: "irregular", aspect: "action", v3: "dit" },
  "tell": { word: "dire", def: "Donner des informations à quelqu'un.", ex: ["Il dit la vérité.", "Elle me raconte sa journée."], sub: "dire la vérité / dire à quelqu'un / raconter une histoire", group: "re", class: "irregular", aspect: "action", v3: "dit" },
  "ask": { word: "demander", def: "Poser une question ; faire une requête.", ex: ["Elle pose de bonnes questions.", "Je demande de l'aide à mon patron."], sub: "poser une question / demander de l'aide / demander à propos de", group: "er", class: "regular", aspect: "action", v3: "demandé" },
  "speak": { word: "parler", def: "Communiquer verbalement ; connaître une langue.", ex: ["Il parle trois langues.", "Elle parle à son manager."], sub: "parler à quelqu'un / parler une langue / parler clairement", group: "er", class: "regular", aspect: "action", v3: "parlé" },
  "talk": { word: "parler", def: "Avoir une conversation.", ex: ["Nous parlons du travail chaque lundi.", "Elle parle beaucoup."], sub: "parler à quelqu'un / parler de / parler ouvertement", group: "er", class: "regular", aspect: "action", v3: "parlé" },
  "call": { word: "appeler", def: "Téléphoner à quelqu'un.", ex: ["J'appelle mes clients chaque matin.", "Elle convoque une réunion."], sub: "appeler quelqu'un / rappeler / convoquer une réunion", group: "er", class: "regular", aspect: "action", v3: "appelé" },
  "write": { word: "écrire", def: "Mettre des mots sur du papier ou un écran.", ex: ["J'écris des emails toute la journée.", "Elle écrit un rapport chaque vendredi."], sub: "écrire un email / écrire un rapport / écrire une lettre", group: "re", class: "irregular", aspect: "action", v3: "écrit" },
  "read": { word: "lire", def: "Regarder et comprendre des mots écrits.", ex: ["Elle lit les nouvelles chaque matin.", "Il lit des contrats."], sub: "lire un livre / lire les nouvelles / lire un contrat", group: "re", class: "irregular", aspect: "action", v3: "lu" },
  "listen": { word: "écouter", def: "Prêter attention aux sons ou à la parole.", ex: ["J'écoute des podcasts au travail.", "Elle écoute attentivement."], sub: "écouter de la musique / écouter attentivement / écouter un podcast", group: "er", class: "regular", aspect: "action", v3: "écouté" },
  "answer": { word: "répondre", def: "Répondre à une question ou à une communication.", ex: ["Il répond rapidement à tous les emails.", "Elle a répondu au téléphone."], sub: "répondre à une question / répondre au téléphone / répondre à un email", group: "re", class: "regular", aspect: "action", v3: "répondu" },
  "repeat": { word: "répéter", def: "Dire ou faire quelque chose à nouveau.", ex: ["Veuillez répéter cela.", "Il a répété l'instruction deux fois."], sub: "répéter cela / se répéter / répéter une commande", group: "er", class: "regular", aspect: "action", v3: "répété" },
  "go": { word: "aller", def: "Se déplacer d'un endroit à un autre.", ex: ["Je vais au travail en train.", "Elle part à l'étranger chaque année."], sub: "aller au travail / aller à la maison / sortir / aller faire du shopping", group: "irregular", class: "irregular", aspect: "action", v3: "allé" },
  "come": { word: "venir", def: "Se déplacer vers un lieu.", ex: ["Il vient au bureau à neuf heures.", "Elle rentre tard."], sub: "rentrer à la maison / revenir / venir au travail / venir ici", group: "ir", class: "irregular", aspect: "action", v3: "venu" },
  "walk": { word: "marcher", def: "Se déplacer à pied à une vitesse normale.", ex: ["Il marche au travail chaque jour.", "Elle marche pendant le déjeuner."], sub: "marcher au travail / rentrer à pied / marcher vite / marcher chaque jour", group: "er", class: "regular", aspect: "action", v3: "marché" },
  "drive": { word: "conduire", def: "Faire fonctionner et contrôler un véhicule.", ex: ["Elle conduit une voiture de fonction.", "Il se rend aux réunions en voiture."], sub: "conduire au travail / conduire une voiture / rentrer en voiture", group: "re", class: "irregular", aspect: "action", v3: "conduit" },
  "fly": { word: "voler", def: "Voyager en avion.", ex: ["Elle s'envole pour Paris pour des réunions.", "Il déteste prendre l'avion."], sub: "voler vers une ville / voler en classe affaires / voler en classe économique", group: "er", class: "regular", aspect: "action", v3: "volé" },
  "arrive": { word: "arriver", def: "Atteindre une destination.", ex: ["Il arrive au bureau à neuf heures.", "Le train arrive en retard."], sub: "arriver au travail / arriver en retard / arriver à l'heure", group: "er", class: "regular", aspect: "action", v3: "arrivé" },
  "leave": { word: "partir", def: "S'éloigner d'un lieu.", ex: ["Je quitte la maison à huit heures.", "Elle a quitté l'entreprise l'année dernière."], sub: "quitter la maison / quitter le travail / partir tôt / partir tard", group: "ir", class: "irregular", aspect: "action", v3: "parti" },
  "move": { word: "bouger", def: "Changer de position ou de lieu de résidence.", ex: ["Ils ont emménagé dans un nouvel appartement.", "Elle change d'équipe."], sub: "déménager / emménager dans une ville / continuer / aller de l'avant", group: "er", class: "regular", aspect: "action", v3: "bougé" },
  "return": { word: "revenir", def: "Revenir ou retourner dans un lieu.", ex: ["Il revient d'un voyage vendredi.", "Elle a rappelé."], sub: "rentrer à la maison / retourner au travail / rendre un appel", group: "ir", class: "irregular", aspect: "action", v3: "revenu" },
  "travel": { word: "voyager", def: "Aller d'un endroit à un autre, souvent loin.", ex: ["Elle voyage pour le travail une fois par mois.", "Il adore voyager."], sub: "voyager pour le travail / voyager à l'étranger / voyager en train", group: "er", class: "regular", aspect: "action", v3: "voyagé" },
  "eat": { word: "manger", def: "Mettre de la nourriture dans la bouche et la consommer.", ex: ["Nous déjeunons à une heure.", "Elle mange à son bureau."], sub: "prendre le petit-déjeuner / déjeuner / dîner / manger dehors", group: "er", class: "regular", aspect: "action", v3: "mangé" },
  "drink": { word: "boire", def: "Avaler un liquide.", ex: ["Elle boit du café chaque matin.", "Je bois de l'eau au travail."], sub: "boire du café / boire du thé / boire de l'eau / boire de l'alcool", group: "re", class: "irregular", aspect: "action", v3: "bu" },
  "sleep": { word: "dormir", def: "Se reposer dans un état d'inconscience.", ex: ["Il dort sept heures par nuit.", "Elle dort mal."], sub: "bien dormir / mal dormir / dormir huit heures", group: "ir", class: "irregular", aspect: "action", v3: "dormi" },
  "cook": { word: "cuisiner", def: "Préparer de la nourriture en utilisant de la chaleur.", ex: ["Elle prépare le dîner chaque soir.", "Il cuisine pour l'équipe."], sub: "préparer le dîner / cuisiner un repas / cuisiner à la maison", group: "er", class: "regular", aspect: "action", v3: "cuisiné" },
  "clean": { word: "nettoyer", def: "Enlever la saleté de quelque chose.", ex: ["Je nettoie l'appartement le samedi.", "Il nettoie son bureau tous les jours."], sub: "nettoyer l'appartement / nettoyer / nettoyer la cuisine", group: "er", class: "regular", aspect: "action", v3: "nettoyé" },
  "wear": { word: "porter", def: "Avoir des vêtements ou des accessoires sur le corps.", ex: ["Elle porte un costume pour le travail.", "Il porte des lunettes."], sub: "porter un costume / porter des lunettes / porter des vêtements décontractés", group: "er", class: "regular", aspect: "action", v3: "porté" },
  "wash": { word: "laver", def: "Nettoyer quelque chose avec de l'eau.", ex: ["Il lave sa voiture tous les dimanches.", "Lave-toi les mains."], sub: "faire la vaisselle / laver les vêtements / se laver les mains", group: "er", class: "regular", aspect: "action", v3: "lavé" },
  "buy": { word: "acheter", def: "Obtenir quelque chose en payant de l'argent.", ex: ["Elle achète des courses en ligne.", "Il veut acheter un appartement."], sub: "acheter de la nourriture / acheter un billet / acheter en ligne", group: "er", class: "regular", aspect: "action", v3: "acheté" },
  "pay": { word: "payer", def: "Donner de l'argent en échange de quelque chose.", ex: ["Je paie le loyer mensuellement.", "Elle paie par carte."], sub: "payer une facture / payer le loyer / payer par carte / payer en espèces", group: "er", class: "regular", aspect: "action", v3: "payé" },
  "spend": { word: "dépenser", def: "Utiliser de l'argent ou du temps.", ex: ["Il dépense trop en plats à emporter.", "Elle passe du temps dans les transports."], sub: "dépenser de l'argent / passer du temps / dépenser pour le loyer", group: "er", class: "regular", aspect: "action", v3: "dépensé" },
  "save": { word: "économiser", def: "Garder de l'argent plutôt que de le dépenser.", ex: ["Elle économise cent euros par mois.", "Enregistrez votre travail."], sub: "économiser de l'argent / économiser pour une maison / gagner du temps", group: "er", class: "regular", aspect: "action", v3: "économisé" },
  "work": { word: "travailler", def: "Effectuer des tâches pour gagner de l'argent.", ex: ["Il travaille à domicile trois jours par semaine.", "Elle travaille dur."], sub: "travailler à domicile / travailler à plein temps / travailler dur", group: "er", class: "regular", aspect: "action", v3: "travaillé" },
  "live": { word: "vivre", def: "Avoir son domicile dans un lieu ; être vivant.", ex: ["Elle vit dans un appartement près du centre.", "Nous vivons ensemble."], sub: "vivre dans un appartement / vivre seul / vivre avec quelqu'un", group: "re", class: "irregular", aspect: "stative", v3: "vécu" },
  "think": { word: "penser", def: "Utiliser l'esprit ; avoir une opinion.", ex: ["Je pense que c'est une bonne idée.", "Elle pense à démissionner."], sub: "penser à / penser de / réfléchir attentivement / penser que c'est", group: "er", class: "regular", aspect: "both", v3: "pensé" },
  "know": { word: "savoir", def: "Avoir des informations ou être familier avec.", ex: ["Je connais son nom.", "Elle sait comment négocier."], sub: "connaître quelqu'un / connaître la réponse / savoir comment / connaître", group: "re", class: "irregular", aspect: "stative", v3: "su" },
  "want": { word: "vouloir", def: "Désirer ou souhaiter quelque chose.", ex: ["Je veux un café.", "Elle veut une promotion.", "Il veut prendre sa retraite."], sub: "vouloir un travail / vouloir faire / vouloir plus / vouloir de l'aide", group: "oir", class: "irregular", aspect: "stative", v3: "voulu" },
  "need": { word: "avoir besoin de", def: "Nécessiter quelque chose.", ex: ["J'ai besoin d'une pause.", "Elle a besoin de plus de temps.", "Il a besoin d'aide."], sub: "besoin d'aide / besoin de temps / besoin d'argent / besoin de se reposer", group: "locution", class: "irregular", aspect: "stative", v3: "eu besoin" },
  "like": { word: "aimer", def: "Trouver quelque chose de plaisant.", ex: ["J'aime mon travail.", "Elle aime cuisiner à la maison.", "Il aime le café."], sub: "aimer le travail / aimer voyager / aimer quelqu'un / aimer l'idée", group: "er", class: "regular", aspect: "stative", v3: "aimé" },
  "love": { word: "adorer", def: "Avoir une forte affection pour ; apprécier grandement.", ex: ["Elle adore son travail.", "Il adore voyager pour le travail."], sub: "aimer quelqu'un / aimer faire / aimer un lieu / aimer l'idée", group: "er", class: "regular", aspect: "stative", v3: "adoré" },
  "hate": { word: "détester", def: "Fortement ne pas aimer.", ex: ["Il déteste faire le trajet en bus.", "She déteste les longues réunions."], sub: "détester faire / détester quelqu'un / détester les réunions", group: "er", class: "regular", aspect: "stative", v3: "détesté" },
  "hope": { word: "espérer", def: "Souhaiter que quelque chose se produise.", ex: ["J'espère obtenir une promotion cette année.", "Elle espère un meilleur salaire."], sub: "espérer / espérer faire / espérer que / je l'espère", group: "er", class: "regular", aspect: "stative", v3: "espéré" },
  "remember": { word: "se souvenir", def: "Avoir un souvenir de ; ne pas oublier.", ex: ["S'il vous plaît, souvenez-vous de la date limite.", "Elle se souvient de chaque client."], sub: "se souvenir de faire / se souvenir d'un nom / se souvenir clairement", group: "ir", class: "irregular", aspect: "stative", v3: "souvenu" },
  "forget": { word: "oublier", def: "Ne pas se souvenir.", ex: ["N'oubliez pas la réunion.", "Il oublie toujours les mots de passe."], sub: "oublier un nom / oublier de faire / oublier / complètement oublier", group: "er", class: "regular", aspect: "stative", v3: "oublié" },
  "understand": { word: "comprendre", def: "Saisir le sens de quelque chose.", ex: ["Je comprends le contrat.", "Elle comprend le français."], sub: "comprendre un problème / comprendre quelqu'un / comprendre clairement", group: "re", class: "irregular", aspect: "stative", v3: "compris" },
  "decide": { word: "décider", def: "Faire un choix.", ex: ["Elle a décidé de changer de carrière.", "Il décide rapidement."], sub: "décider de faire / se décider pour / prendre une décision", group: "er", class: "regular", aspect: "stative", v3: "décidé" },
  "enjoy": { word: "apprécier", def: "Prendre du plaisir à quelque chose.", ex: ["Il apprécie de travailler à domicile.", "Elle apprécie son nouveau rôle."], sub: "apprécier de faire / apprécier un repas / apprécier votre travail", group: "er", class: "regular", aspect: "stative", v3: "apprécié" },
  "see": { word: "voir", def: "Remarquer ou percevoir avec les yeux.", ex: ["Je vois mon médecin demain.", "Elle voit le problème."], sub: "voir un médecin / voir des amis / voir le problème / voir clairement", group: "oir", class: "irregular", aspect: "both", v3: "vu" },
  "hear": { word: "entendre", def: "Percevoir les sons par les oreilles.", ex: ["J'entends l'alarme chaque matin.", "Est-ce que tu m'entends ?"], sub: "entendre des nouvelles / entendre quelqu'un / entendre un son", group: "re", class: "irregular", aspect: "both", v3: "entendu" },
  "wake up": { word: "se réveiller", def: "Arrêter de dormir et ouvrir les yeux.", ex: ["Je me réveille à sept heures.", "À quelle heure te réveilles-tu ?"], sub: "se réveiller tôt, se réveiller à 7h", group: "er", class: "irregular", aspect: "action", v3: "réveillé" },
  "watch": { word: "regarder", def: "Regarder quelque chose pendant une période de temps.", ex: ["Je regarde la télé le soir.", "Ils regardent les oiseaux."], sub: "regarder la télé, regarder un film", group: "er", class: "regular", aspect: "action", v3: "regardé" },
  "look": { word: "regarder", def: "Diriger ses yeux vers quelque chose.", ex: ["Regarde cette photo.", "Il cherche ses clés."], sub: "regarder", group: "er", class: "regular", aspect: "both", v3: "regardé" },
  "play": { word: "jouer", def: "Faire quelque chose pour s'amuser ou dans un jeu.", ex: ["Je joue au football avec mes amis.", "Elle aime jouer aux jeux vidéo."], sub: "jouer", group: "er", class: "regular", aspect: "action", v3: "joué" },
  "run": { word: "courir", def: "Se déplacer très vite sur ses jambes.", ex: ["Je cours dans le parc.", "Il court pour attraper le bus."], sub: "courir", group: "ir", class: "irregular", aspect: "action", v3: "couru" },
  "sit": { word: "s'asseoir", def: "Reposer son poids sur ses fesses plutôt que sur ses pieds.", ex: ["Assieds-toi, s'il te plaît.", "Je suis assis sur une chaise."], sub: "s'asseoir", group: "re", class: "irregular", aspect: "action", v3: "assis" },
  "stand": { word: "se tenir debout", def: "Être sur ses pieds dans une position verticale.", ex: ["Lève-toi, s'il te plaît.", "Elle se tient près de la porte."], sub: "se tenir debout", group: "er", class: "irregular", aspect: "action", v3: "tenu debout" },
  "meet": { word: "rencontrer", def: "Voir et parler à quelqu'un pour la première fois.", ex: ["Enchanté de vous rencontrer.", "Nous nous rencontrons tous les vendredis."], sub: "rencontrer", group: "er", class: "irregular", aspect: "action", v3: "rencontré" },
  "learn": { word: "apprendre", def: "Acquérir des connaissances ou une compétence.", ex: ["Je veux apprendre l'anglais.", "Les enfants apprennent vite."], sub: "apprendre", group: "re", class: "both", aspect: "action", v3: "appris" },
  "change": { word: "changer", def: "Rendre quelque chose différent.", ex: ["Je veux changer de vêtements.", "Le temps change rapidement."], sub: "changer", group: "er", class: "regular", aspect: "action", v3: "changé" },
  "stop": { word: "arrêter", def: "Finir de faire quelque chose ou ne plus bouger.", ex: ["Arrête la voiture.", "Arrête de parler, s'il te plaît."], sub: "arrêter", group: "er", class: "regular", aspect: "action", v3: "arrêté" },
  "add": { word: "ajouter", def: "Mettre des choses ensemble pour former un groupe plus large.", ex: ["Ajoute du sucre au thé.", "Combien font cinq plus cinq ?"], sub: "ajouter", group: "er", class: "regular", aspect: "action", v3: "ajouté" },
  "win": { word: "gagner", def: "Être le meilleur dans un jeu ou une compétition.", ex: ["Nous voulons gagner le match."], sub: "gagner", group: "er", class: "irregular", aspect: "action", v3: "gagné" },
  "wait": { word: "attendre", def: "Rester dans un lieu jusqu'à ce que quelque chose arrive.", ex: ["Attends le bus ici.", "J'attends mon ami."], sub: "attendre", group: "re", class: "regular", aspect: "action", v3: "attendu" },
  "die": { word: "mourir", def: "Cesser de vivre.", ex: ["Les plantes meurent sans eau."], sub: "mourir", group: "ir", class: "regular", aspect: "action", v3: "mort" },
  "send": { word: "envoyer", def: "Faire en sorte que quelque chose aille dans un lieu.", ex: ["J'envoie un email chaque matin.", "Peux-tu m'envoyer une photo ?"], sub: "envoyer", group: "er", class: "irregular", aspect: "action", v3: "envoyé" },
  "stay": { word: "rester", def: "Continuer d'être dans un lieu.", ex: ["Je reste à la maison le dimanche.", "Nous séjournons dans un hôtel."], sub: "rester", group: "er", class: "regular", aspect: "action", v3: "resté" },
  "fall": { word: "tomber", def: "Se déplacer vers le bas vers le sol.", ex: ["Les feuilles tombent en automne.", "Attention, ne tombe pas."], sub: "tomber", group: "er", class: "irregular", aspect: "action", v3: "tombé" },
  "pass": { word: "passer", def: "Passer devant quelque chose ou réussir un examen.", ex: ["Je passe devant le parc en rentrant chez moi.", "J'espère réussir le test."], sub: "passer", group: "er", class: "regular", aspect: "action", v3: "passé" },
  "sell": { word: "vendre", def: "Donner quelque chose à quelqu'un contre de l'argent.", ex: ["Ils vendent des fruits au marché."], sub: "vendre", group: "re", class: "irregular", aspect: "action", v3: "vendu" },
  "pull": { word: "tirer", def: "Déplacer quelque chose vers vous.", ex: ["Tire la porte pour l'ouvrir."], sub: "tirer", group: "er", class: "regular", aspect: "action", v3: "tiré" },
  "push": { word: "pousser", def: "Éloigner quelque chose de vous.", ex: ["Appuie sur le bouton.", "Je pousse le chariot."], sub: "pousser", group: "er", class: "regular", aspect: "action", v3: "poussé" },
  "carry": { word: "porter", def: "Tenir quelque chose et le déplacer d'un endroit à un autre.", ex: ["Je porte mon sac à l'école.", "Peux-tu m'aider à porter cette boîte ?"], sub: "porter", group: "er", class: "regular", aspect: "action", v3: "porté" },
  "break": { word: "casser", def: "Séparer quelque chose en deux ou plusieurs morceaux.", ex: ["Ne casse pas le verre.", "Il s'est cassé la jambe."], sub: "casser", group: "er", class: "irregular", aspect: "action", v3: "cassé" },
  "receive": { word: "recevoir", def: "Obtenir quelque chose que quelqu'un vous a donné ou envoyé.", ex: ["Je reçois beaucoup de courrier.", "Elle a reçu un cadeau."], sub: "recevoir", group: "oir", class: "regular", aspect: "action", v3: "reçu" },
  "agree": { word: "être d'accord", def: "Avoir la même opinion que quelqu'un.", ex: ["Je suis d'accord avec vous.", "Nous sommes d'accord sur le plan."], sub: "être d'accord", group: "locution", class: "regular", aspect: "stative", v3: "été d'accord" },
  "draw": { word: "dessiner", def: "Faire une image avec un stylo ou un crayon.", ex: ["J'aime dessiner des oiseaux.", "Peux-tu dessiner une carte ?"], sub: "dessiner", group: "er", class: "irregular", aspect: "action", v3: "dessiné" },
  "share": { word: "partager", def: "Donner une partie de quelque chose à d'autres.", ex: ["Partageons la pizza.", "Je partage une chambre avec mon frère."], sub: "partager", group: "er", class: "regular", aspect: "action", v3: "partagé" },
  "smile": { word: "sourire", def: "Faire une expression joyeuse avec la bouche.", ex: ["Elle a un beau sourire.", "Souris pour la photo."], sub: "sourire", group: "re", class: "regular", aspect: "action", v3: "souri" },
  "cry": { word: "pleurer", def: "Produire des larmes parce qu'on est triste ou qu'on a mal.", ex: ["Le bébé pleure.", "Ne pleure pas."], sub: "pleurer", group: "er", class: "regular", aspect: "action", v3: "pleuré" },
  "dance": { word: "danser", def: "Bouger son corps sur de la musique.", ex: ["J'adore danser.", "Ils dansent."], sub: "danser", group: "er", class: "regular", aspect: "action", v3: "dansé" },
  "sing": { word: "chanter", def: "Faire des sons musicaux avec sa voix.", ex: ["J'aime chanter sous la douche.", "Elle chante très bien."], sub: "chanter", group: "er", class: "irregular", aspect: "action", v3: "chanté" },
  "jump": { word: "sauter", def: "Se propulser du sol avec ses jambes.", ex: ["Peux-tu sauter haut ?", "Le chat a sauté sur la table."], sub: "sauter", group: "er", class: "regular", aspect: "action", v3: "sauté" },
  "swim": { word: "nager", def: "Se déplacer dans l'eau en utilisant ses bras et ses jambes.", ex: ["Je nage tous les matins.", "Sais-tu nager ?"], sub: "nager", group: "er", class: "irregular", aspect: "action", v3: "nagé" },
  "study": { word: "étudier", def: "Passer du temps à apprendre un sujet.", ex: ["J'étudie l'anglais à l'école.", "Il étudie pour ses examens."], sub: "étudier", group: "er", class: "regular", aspect: "action", v3: "étudié" },
  "teach": { word: "enseigner", def: "Donner des connaissances aux autres.", ex: ["J'enseigne l'anglais.", "Elle enseigne dans une université."], sub: "enseigner", group: "er", class: "irregular", aspect: "action", v3: "enseigné" },
  "commute": { word: "faire le trajet", def: "Parcourir une certaine distance entre son domicile et son lieu de travail de façon régulière.", ex: ["Je fais le trajet jusqu'à la ville en train."], sub: "faire le trajet", group: "locution", class: "regular", aspect: "action", v3: "fait le trajet" },
  "rent": { word: "louer", def: "Payer de l'argent pour utiliser une maison ou un appartement qui appartient à quelqu'un d'autre.", ex: ["Nous louons un appartement en ville."], sub: "louer", group: "er", class: "regular", aspect: "action", v3: "loué" },
  "exercise": { word: "s'exercer", def: "Faire une activité physique pour rester en bonne santé.", ex: ["Je m'exerce tous les matins."], sub: "s'exercer", group: "er", class: "regular", aspect: "action", v3: "exercé" },
  "cost": { word: "coûter", def: "Avoir un certain prix.", ex: ["L'appartement coûte cher."], sub: "coûter", group: "er", class: "irregular", aspect: "stative", v3: "coûté" },
  "invite": { word: "inviter", def: "Demander à quelqu'un de venir dans un lieu ou à un événement.", ex: ["J'invite des amis pour le dîner."], sub: "inviter", group: "er", class: "regular", aspect: "action", v3: "invité" }
};

const frData = [];

enVerbs.forEach(enV => {
  const trans = translations[enV.word];
  if (trans) {
    frData.push({
      word: trans.word,
      level: "starter",
      theme: enV.theme,
      emoji: enV.emoji,
      subtext: trans.sub,
      form: "verb",
      definitions: [{
        text: trans.def,
        examples: trans.ex
      }],
      classification: trans.class,
      aspect: trans.aspect,
      group: trans.group,
      v3: trans.v3
    });
  } else {
    console.log(`Missing translation for ${enV.word}`);
  }
});

const content = `(function() {
    const data = ${JSON.stringify(frData, null, 4)};
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();`;

fs.writeFileSync('js/data/romance/fr/starter/verbs.js', content);
console.log(`Wrote 113 verbs to French Starter.`);

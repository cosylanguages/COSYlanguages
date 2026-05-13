(function() {
    const data = [
        {
            q: "Le but de notre vie est d'être heureux.",
            a: "Dalaï-lama", o: "Chef spirituel tibétain", c: "Vie et bonheur",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Êtes-vous d'accord pour dire que le bonheur est le but principal de la vie ?",
                "Y a-t-il une différence entre le plaisir et le bonheur ?",
                "Peut-on être heureux tout en ayant le sentiment qu'il manque quelque chose ?",
                "Pensez-vous que certaines personnes sont naturellement plus heureuses que d'autres ?",
                "Quelle est la chose qui vous rend vraiment heureux et que l'argent ne peut pas acheter ?"
            ],
            task: "Paraphrasez cette citation avec vos propres mots, puis dites si vous pensez qu'il s'agit d'un conseil sage ou dangereusement simplifié."
        },
        {
            q: "La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets.",
            a: "John Lennon", o: "Beautiful Boy, 1980", c: "Vie et bonheur",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Avez-vous déjà manqué un moment important parce que vous étiez concentré sur autre chose ?",
                "Pensez-vous que nous passons trop de temps à planifier et pas assez à vivre ?",
                "La spontanéité est-elle une compétence ou un trait de personnalité ?",
                "Que dit cette citation sur notre rapport au moment présent ?",
                "Pouvez-vous penser à un « projet » qui s'est avéré moins important que ce qui s'est passé à la place ?"
            ],
            task: "Racontez une courte histoire — réelle ou inventée — qui illustre parfaitement cette citation. Dites ensuite quelle leçon on pourrait en tirer."
        },
        {
            q: "Tous ceux qui errent ne sont pas perdus.",
            a: "J.R.R. Tolkien", o: "La Communauté de l'Anneau, 1954", c: "Vie et bonheur",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Que pensez-vous que Tolkien voulait dire, littéralement ou métaphoriquement ?",
                "Pensez-vous que la société pousse les gens à suivre un chemin fixe ?",
                "Pouvez-vous penser à quelqu'un dont l'errance l'a mené vers quelque chose de mieux ?",
                "Y a-t-il une différence entre être perdu et simplement ne pas encore savoir où l'on va ?",
                "Vous êtes-vous déjà senti comme un errant — et était-ce un sentiment positif ou négatif ?"
            ],
            task: "Contestez cette citation. Soutenez l'idée opposée — qu'errer sans direction est en fait un problème. Utilisez au moins deux exemples."
        },
        {
            q: "On ne vit qu'une fois, mais si on le fait bien, une fois suffit.",
            a: "Mae West", o: "Actrice et comédienne américaine", c: "Vie et bonheur",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Que signifie pour vous « bien vivre » ?",
                "Le YOLO est-il une philosophie de vie pour vous ou la trouvez-vous imprudente ?",
                "Pensez-vous que le regret est le signe qu'on n'a pas bien fait les choses ?",
                "Quelle est la chose que vous voulez faire avant qu'il ne soit trop tard ?",
                "Une seule vie suffit-elle, ou l'idée d'une vie unique vous semble-t-elle limitante ?"
            ],
            task: "Décrivez ce que « bien vivre » signifierait dans votre vie — concrètement. Que feriez-vous ? À quoi auriez-vous renoncé ?"
        },
        {
            q: "Soyez vous-même ; tous les autres sont déjà pris.",
            a: "Oscar Wilde", o: "Poète et dramaturge irlandais", c: "Identité",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "Est-il toujours facile ou souhaitable d'être soi-même ?",
                "Ressentez-vous parfois la pression d'être quelqu'un de différent dans certaines situations ?",
                "Le « soi » est-il fixe ou change-t-il selon le contexte ?",
                "Pensez-vous que Wilde disait cela sérieusement ou ironiquement ?",
                "Pouvez-vous penser à un moment où être vous-même vous a coûté quelque chose ?"
            ],
            task: "Donnez à cette citation une note de une à cinq étoiles et justifiez-la. Qu'est-ce qu'elle exprime bien ? Que manque-t-il ?"
        },
        {
            q: "Il faut du courage pour grandir et devenir qui l'on est vraiment.",
            a: "E.E. Cummings", o: "Poète américain", c: "Identité",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "Pensez-vous que grandir nécessite du courage ?",
                "Qu'est-ce qui empêche de devenir qui l'on est vraiment ?",
                "Y a-t-il une version de vous-même pour laquelle vous avez dû vous battre ?",
                "La société rend-elle plus difficile ou plus facile d'être authentique ?",
                "À quel âge pensez-vous que les gens commencent à devenir qui ils sont vraiment ?"
            ],
            task: "Pensez à quelqu'un — réel ou fictif — qui a fait preuve de ce genre de courage. Décrivez ce qu'il a fait et pourquoi cela a demandé de la bravoure."
        },
        {
            q: "Nous savons ce que nous sommes, mais nous ne savons pas ce que nous pourrions être.",
            a: "William Shakespeare", o: "Hamlet", c: "Identité",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "Pensez-vous bien vous connaître ?",
                "Quelqu'un vous a-t-il déjà surpris en devenant une personne complètement différente ?",
                "L'idée de potentiel est-elle excitante ou effrayante ?",
                "Cette citation vous inspire-t-elle de l'espoir ou de l'incertitude ?",
                "Que pourriez-vous devenir que vous ne pouvez pas encore imaginer ?"
            ],
            task: "Réécrivez cette citation pour un public moderne — même idée, vos propres mots — puis expliquez ce que vous avez changé et pourquoi."
        },
        {
            q: "La forme la plus courante de désespoir est de ne pas être qui l'on est.",
            a: "Søren Kierkegaard", o: "Philosophe danois", c: "Identité",
            level: "upper-intermediate", theme: "personal_identity",
            qs: [
                "Êtes-vous d'accord pour dire que l'inauthenticité cause de la souffrance ?",
                "Pouvez-vous penser à une situation où quelqu'un n'est manifestement pas lui-même ?",
                "Est-il toujours possible d'être qui l'on est vraiment ?",
                "Que signifie le désespoir pour vous — est-ce différent de la tristesse ?",
                "Que devrait changer une personne pour commencer à être qui elle est vraiment ?"
            ],
            task: "Approuvez ou contestez cette citation dans un discours d'au moins une minute. Utilisez un exemple personnel ou une personne que vous connaissez (ou avez observée) pour appuyer votre point de vue."
        },
        {
            q: "Je n'ai pas échoué. J'ai juste trouvé 10 000 façons qui ne fonctionnent pas.",
            a: "Thomas Edison", o: "Inventeur américain", c: "Échec et résilience",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "S'agit-il d'une reformulation inspirante ou d'une façon d'éviter le mot « échec » ?",
                "Pensez-vous que l'échec a une mauvaise réputation qu'il ne mérite pas ?",
                "Avez-vous déjà échoué à quelque chose pour ensuite vous en réjouir ?",
                "La persévérance est-elle toujours admirable, ou peut-elle devenir de l'entêtement ?",
                "Quelle est la différence entre échouer et abandonner ?"
            ],
            task: "Racontez l'histoire d'un échec — le vôtre ou celui de quelqu'un d'autre — qui s'est avéré plus précieux qu'un succès ne l'aurait été."
        },
        {
            q: "Tombe sept fois, relève-toi huit.",
            a: "Proverbe japonais", o: "Dicton traditionnel", c: "Échec et résilience",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "La résilience est-elle innée ou se construit-elle ?",
                "Repensez à un moment où vous avez continué alors que vous vouliez arrêter.",
                "Y a-t-il un moment où il est sage d'arrêter de se relever ?",
                "Ce proverbe s'applique-t-il différemment selon les cultures ?",
                "Qu'est-ce qui vous aide à vous relever après un revers ?"
            ],
            task: "Comparez ce proverbe à un proverbe de votre propre langue ou culture. Lequel trouvez-vous le plus puissant et pourquoi ?"
        },
        {
            q: "Le succès consiste à aller d'échec en échec sans perte d'enthousiasme.",
            a: "Winston Churchill", o: "Premier ministre britannique", c: "Échec et résilience",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Pensez-vous que l'enthousiasme soit l'ingrédient clé décrit par Churchill ?",
                "Pouvez-vous citer un exemple célèbre de personne correspondant à cette description ?",
                "Cette définition du succès n'est-elle pas trop étroite — qu'en est-il de ceux qui réussissent du premier coup ?",
                "Comment gérez-vous personnellement les échecs répétés ?",
                "L'enthousiasme est-il quelque chose que l'on peut entretenir délibérément, ou finit-il par s'épuiser ?"
            ],
            task: "Pensez-vous que cette citation est sincèrement sage ou est-ce une chose facile à dire avec le recul ? Argumentez votre position avec au moins deux points spécifiques."
        },
        {
            q: "Il est impossible de vivre sans échouer à quelque chose, à moins de vivre si prudemment que l'on n'aurait pas vécu du tout.",
            a: "J.K. Rowling", o: "Discours à Harvard, 2008", c: "Échec et résilience",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Pensez-vous vivre prudemment ou prendre des risques ?",
                "Quelle est la différence entre la prudence raisonnable et la peur ?",
                "Avez-vous déjà renoncé à faire quelque chose par peur d'échouer ?",
                "Pensez-vous que ce message est plus difficile à entendre pour certaines personnes que pour d'autres ?",
                "À quoi ressemblerait votre vie si vous aviez moins peur d'échouer ?"
            ],
            task: "Paraphrasez cette citation dans le langage le plus simple possible — comme si vous l'expliquiez à un étudiant de niveau A2. Donnez ensuite un exemple qui l'illustre."
        },
        {
            q: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.",
            a: "Steve Jobs", o: "Discours à Stanford, 2005", c: "Travail et mission",
            level: "upper-intermediate", theme: "work_employment",
            qs: [
                "Pensez-vous qu'il faille aimer son travail pour y être bon ?",
                "La passion est-elle toujours accessible à tous, ou est-ce un privilège ?",
                "Un excellent travail peut-il provenir de la discipline et du métier plutôt que de l'amour ?",
                "Avez-vous déjà aimé quelque chose pour ensuite le voir gâché en le transformant en travail ?",
                "Que feriez-vous gratuitement que vous faites actuellement — ou aimeriez faire — pour de l'argent ?"
            ],
            task: "C'est l'un des conseils de carrière les plus cités au monde. Soutenez qu'il s'agit en fait d'un mauvais conseil — ou qu'il est fondamentalement juste. Choisissez un camp et défendez-le."
        },
        {
            q: "Au milieu de chaque difficulté se trouve une opportunité.",
            a: "Albert Einstein", o: "Physicien théoricien", c: "Échec et résilience",
            level: "upper-intermediate", theme: "ethics_philosophy",
            qs: [
                "Cherchez-vous naturellement l'opportunité dans les situations difficiles ?",
                "S'agit-il d'une vérité optimiste ou d'une positivité toxique ?",
                "Pouvez-vous penser à une difficulté mondiale qui a créé des opportunités inattendues ?",
                "Cette idée change-t-elle selon la gravité de la difficulté ?",
                "Quelle opportunité une difficulté dans votre propre vie a-t-elle créée ?"
            ],
            task: "Prenez une difficulté actuelle — dans le monde, dans votre pays ou dans votre propre vie — et essayez sincèrement d'identifier l'opportunité qu'elle contient. Parlez pendant au moins une minute."
        },
        {
            q: "Deux choses sont infinies : l'univers et la bêtise humaine ; et je ne suis pas sûr de l'univers.",
            a: "Albert Einstein", o: "Attribué", c: "Nature humaine",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Est-ce drôle, cynique ou profondément sérieux — ou les trois ?",
                "Pensez-vous que les humains sont fondamentalement sages ou fondamentalement fous ?",
                "Pouvez-vous donner un exemple de bêtise humaine collective ?",
                "Est-il juste de généraliser sur la « bêtise humaine » ?",
                "Cette citation change-t-elle la façon dont vous voyez Einstein en tant que personne ?"
            ],
            task: "Réagissez à cette citation comme si vous n'étiez pas du tout d'accord. Présentez les arguments les plus solides en faveur de l'intelligence et de la sagesse humaines."
        },
        {
            q: "Nul homme n'est une île, un tout en soi.",
            a: "John Donne", o: "Méditation XVII, 1624", c: "Nature humaine",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Que pensez-vous que Donne voulait dire par là ?",
                "Pensez-vous que la vie moderne nous rend plus ou moins connectés aux autres ?",
                "Pouvez-vous penser à une personne qui semble vivre comme une île — et quel en est le coût ?",
                "L'interdépendance est-elle une force ou une vulnérabilité ?",
                "De quelles manières dépendez-vous des autres sans toujours vous en rendre compte ?"
            ],
            task: "Cette citation a 400 ans. Soutenez qu'elle est plus pertinente aujourd'hui que jamais — ou que le monde moderne l'a rendue moins vraie."
        },
        {
            q: "L'obscurité ne peut pas chasser l'obscurité ; seule la lumière peut le faire. La haine ne peut pas chasser la haine ; seul l'amour peut le faire.",
            a: "Martin Luther King Jr.", o: "Strength to Love, 1963", c: "Nature humaine",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Pensez-vous que cela soit vrai en pratique, ou idéaliste ?",
                "Pouvez-vous citer un exemple historique ou personnel où cette logique a fonctionné ?",
                "L'amour est-il un outil politique ou est-ce aller trop loin ?",
                "Qu'est-ce que cette citation exige de nous personnellement ?",
                "Y a-t-il quelque chose qui ne peut être combattu que par son opposé — ou la colère est-elle parfois nécessaire ?"
            ],
            task: "Choisissez un conflit actuel — dans le monde, une communauté ou une relation — et appliquez-lui cette citation. La logique tient-elle ? Parlez pendant au moins une minute."
        },
        {
            q: "La créativité, c'est l'intelligence qui s'amuse.",
            a: "Albert Einstein", o: "Attribué", c: "Créativité et art",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Vous considérez-vous comme une personne créative ?",
                "La créativité est-elle liée à l'intelligence, ou sont-ce des choses distinctes ?",
                "La créativité peut-elle s'apprendre, ou est-elle innée ?",
                "Quelle est la chose la plus créative que vous ayez jamais faite ?",
                "Existe-t-il un type de créativité qui n'implique aucun plaisir ?"
            ],
            task: "Contestez cette citation. Soutenez que la créativité et l'intelligence sont complètement distinctes — avec au moins deux exemples pour vous appuyer."
        },
        {
            q: "L'art n'est pas ce que vous voyez, mais ce que vous faites voir aux autres.",
            a: "Edgar Degas", o: "Peintre impressionniste français", c: "Créativité et art",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Quelle est la meilleure œuvre d'art — sous n'importe quelle forme — qui vous a fait voir les choses différemment ?",
                "Pensez-vous que l'art a la responsabilité de faire voir la vérité ?",
                "Quelque chose peut-il être de l'art si différentes personnes y voient des choses complètement différentes ?",
                "Y a-t-il un art qui vous a laissé de marbre — et cela signifie-t-il qu'il a échoué ?",
                "L'interprétation du spectateur compte-t-elle autant que l'intention de l'artiste ?"
            ],
            task: "Décrivez une œuvre d'art — un film, une chanson, un livre, une peinture, n'importe quoi — qui vous a sincèrement fait voir quelque chose que vous n'aviez pas vu auparavant. Qu'est-ce que cela a changé en vous ?"
        },
        {
            q: "Le monde semble toujours plus radieux quand on vient de fabriquer quelque chose qui n'existait pas auparavant.",
            a: "Neil Gaiman", o: "Auteur de Coraline, Good Omens", c: "Créativité et art",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Avez-vous déjà fabriqué quelque chose et ressenti cela ?",
                "Pourquoi pensez-vous que la création produit ce sentiment ?",
                "Ce sentiment est-il accessible à tous, ou seulement aux personnes « créatives » ?",
                "Quel est le plus petit acte de création qui compte encore ?",
                "Consommer de l'art est-il aussi précieux que d'en créer ?"
            ],
            task: "Parlez-nous de quelque chose que vous avez créé — aussi petit soit-il — et dites si cela vous a procuré ce sentiment. Si non, dites pourquoi."
        },
        {
            q: "La meilleure chose à laquelle se raccrocher dans la vie, c'est l'un à l'autre.",
            a: "Audrey Hepburn", o: "Actrice et humanitaire", c: "Amour et relations",
            level: "upper-intermediate", theme: "feelings_emotions",
            qs: [
                "Êtes-vous d'accord pour dire que les relations sont la chose la plus importante dans la vie ?",
                "Est-il possible de trop s'accrocher aux autres ?",
                "Qu'est-ce qui rend une relation digne d'être maintenue ?",
                "Avez-vous déjà laissé partir quelqu'un pour le regretter plus tard ?",
                "Peut-on s'accrocher à une idée, un lieu ou un souvenir de la même manière ?"
            ],
            task: "Réécrivez cette citation — même sentiment, métaphore complètement différente. Expliquez ensuite quelle version vous préférez et pourquoi."
        },
        {
            q: "Il faut danser comme s'il n'y avait personne pour regarder, aimer comme si on ne devait jamais être blessé.",
            a: "William W. Purkey", o: "Auteur et professeur", c: "Amour et relations",
            level: "upper-intermediate", theme: "feelings_emotions",
            qs: [
                "Trouvez-vous facile d'être vulnérable avec les personnes que vous aimez ?",
                "Aimer sans peur d'être blessé est-il sage ou naïf ?",
                "Pensez-vous que les blessures passées changent notre façon d'aimer à l'avenir ?",
                "Que signifie pour vous danser comme si personne ne regardait — au sens propre et figuré ?",
                "Y a-t-il quelque chose dans votre vie que vous retenez par peur d'être blessé ?"
            ],
            task: "C'est l'une des citations les plus partagées sur internet. Est-elle sincèrement sage ou simplement réconfortante ? Argumentez votre position."
        },
        {
            q: "Nous acceptons l'amour que nous pensons mériter.",
            a: "Stephen Chbosky", o: "Le Monde de Charlie, 1999", c: "Amour et relations",
            level: "upper-intermediate", theme: "feelings_emotions",
            qs: [
                "Pensez-vous que cela soit psychologiquement vrai ?",
                "Êtes-vous déjà resté dans une relation — amicale ou amoureuse — qui était en dessous de ce que vous méritiez ?",
                "Qu'est-ce qui détermine ce que quelqu'un pense mériter ?",
                "La thérapie, le temps ou l'expérience peuvent-ils changer ce que nous pensons mériter ?",
                "Cette citation est-elle valorisante ou place-t-elle trop de responsabilité sur la personne blessée ?"
            ],
            task: "Cette citation provient d'un roman sur un adolescent. S'applique-t-elle également aux adultes ? Argumentez par l'affirmative ou la négative — avec des exemples."
        },
        {
            q: "Une injustice n'importe où est une menace pour la justice partout.",
            a: "Martin Luther King Jr.", o: "Lettre de la prison de Birmingham, 1963", c: "Liberté et justice",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Vous sentez-vous personnellement responsable d'une injustice qui se produit loin d'ici ?",
                "Pouvez-vous penser à une injustice dans un lieu qui a affecté des gens ailleurs ?",
                "Cette citation est-elle un appel à l'action — et si oui, quelle action ?",
                "Y a-t-il un point où la distance rend l'injustice impossible à traiter ?",
                "À quelle injustice tenez-vous le plus et pourquoi ?"
            ],
            task: "Appliquez cette citation à quelque chose qui se passe dans le monde en ce moment. Quelle est l'injustice et pourquoi importe-t-elle au-delà de son lieu immédiat ?"
        },
        {
            q: "La liberté ne vaut pas la peine d'être vécue si elle n'inclut pas la liberté de faire des erreurs.",
            a: "Mahatma Gandhi", o: "Chef de l'indépendance indienne", c: "Liberté et justice",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Pensez-vous que la société moderne donne aux gens assez de liberté pour échouer ?",
                "Y a-t-il une tension entre liberté et sécurité ?",
                "Quelle erreur êtes-vous heureux d'avoir été libre de commettre ?",
                "La liberté peut-elle être retirée progressivement sans que les gens s'en aperçoivent ?",
                "La « cancel culture » est-elle un exemple de restriction de la liberté — ou de responsabilité ?"
            ],
            task: "Pensez à une loi, une règle ou une norme sociale qui restreint la liberté de commettre une erreur particulière. Dites si cette restriction est justifiée ou non."
        },
        {
            q: "La vérité vous libérera, mais d'abord elle vous rendra misérable.",
            a: "James A. Garfield", o: "20e président des États-Unis, attribué", c: "Liberté et justice",
            level: "upper-intermediate", theme: "society_politics",
            qs: [
                "Une vérité vous a-t-elle déjà rendu misérable avant de vous libérer ?",
                "Est-il toujours préférable de connaître la vérité ?",
                "Pouvez-vous penser à une situation où ne pas connaître la vérité était le bon choix ?",
                "Quelle est la différence entre une vérité qui libère et une qui blesse simplement ?",
                "Y a-t-il une vérité sur vous-même que vous n'êtes pas encore prêt à affronter ?"
            ],
            task: "Racontez une histoire — réelle, observée ou fictive — où quelqu'un a découvert une vérité douloureuse mais finalement libératrice. Quel a été le tournant ?"
        },
        {
            q: "Hier est de l'histoire, demain est un mystère, aujourd'hui est un cadeau — c'est pourquoi on l'appelle le présent.",
            a: "Eleanor Roosevelt", o: "Diplomate et activiste, attribué", c: "Changement et temps",
            level: "upper-intermediate", theme: "time",
            qs: [
                "Cette citation est-elle de la sagesse ou un cliché ?",
                "Passez-vous plus de temps à penser au passé, au futur ou au présent ?",
                "Vivre dans le présent est-il toujours souhaitable — ou avons-nous besoin du passé et du futur ?",
                "Que signifie concrètement traiter aujourd'hui comme un cadeau ?",
                "Pouvez-vous penser à un jour récent que vous avez véritablement traité comme un cadeau ?"
            ],
            task: "Faites une critique de cette citation. Qu'est-ce qu'elle dit de juste, qu'est-ce qu'elle simplifie trop, et que rajouteriez-vous pour la rendre plus honnête ?"
        },
        {
            q: "La mesure de l'intelligence est la capacité de changer.",
            a: "Albert Einstein", o: "Physicien théoricien, attribué", c: "Changement et temps",
            level: "upper-intermediate", theme: "time",
            qs: [
                "Trouvez-vous facile ou difficile de changer d'avis ?",
                "Avez-vous changé d'avis sur quelque chose d'important récemment ?",
                "L'entêtement est-il toujours une faiblesse — ou peut-il être une force ?",
                "Quelle est la différence entre changer d'avis et manquer de conviction ?",
                "Quelle est la chose que vous croyiez autrefois et que vous ne croyez plus ?"
            ],
            task: "Pensez à une croyance que vous avez tenue longtemps et que vous avez fini par changer. Expliquez-nous ce qui s'est passé — quelle information nouvelle ou expérience vous a fait basculer."
        },
        {
            q: "On dit toujours que le temps change les choses, mais c'est à vous de les changer vous-même.",
            a: "Andy Warhol", o: "Artiste pop américain", c: "Changement et temps",
            level: "upper-intermediate", theme: "time",
            qs: [
                "Êtes-vous d'accord pour dire que le temps seul ne change rien ?",
                "Avez-vous déjà attendu que quelque chose change pour devoir finalement agir vous-même ?",
                "Y a-t-il quelque chose dans votre vie que vous attendez actuellement que le temps règle ?",
                "Cette citation est-elle en contradiction avec l'idée d'acceptation et de lâcher-prise ?",
                "Qui est responsable de changer les choses qui ne vont pas dans le monde ?"
            ],
            task: "Appliquez cette citation à quelque chose dans votre propre vie ou dans le monde. Qu'est-ce qui doit changer, qui doit le changer et qu'est-ce qui empêche cela d'arriver ?"
        },
        {
            q: "Pourquoi cet air si sérieux ?",
            a: "Le Joker", o: "The Dark Knight, 2008", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Prendre la vie au sérieux est-il toujours une bonne chose ?",
                "Le chaos ou l'absurdité peuvent-ils révéler quelque chose que le sérieux rate ?",
                "Pensez-vous que l'humour est sous-évalué dans les situations sérieuses ?",
                "Y a-t-il quelque chose dans votre vie que vous prenez trop au sérieux ?",
                "Quelle est la différence entre ne pas se prendre au sérieux et ne pas prendre la vie au sérieux ?"
            ],
            task: "Répondez à la question — pourquoi prenez-vous les choses que vous prenez au sérieux aussi sérieusement ? Parlez pendant une minute."
        },
        {
            q: "Vers l'infini et au-delà.",
            a: "Buzz l'Éclair", o: "Toy Story, 1995", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Que signifie « au-delà » pour vous dans votre propre vie ?",
                "L'ambition sans limites est-elle inspirante ou irréaliste ?",
                "Quel est votre « infini » personnel — quelque chose que vous essayez toujours d'atteindre ?",
                "Un film pour enfants peut-il contenir une véritable sagesse ?",
                "Quelle est la chose que vous pensiez autrefois impossible et qui s'est avérée ne pas l'être ?"
            ],
            task: "Traitez cette citation aussi sérieusement qu'une citation de philosophe. Que dit-elle réellement sur l'ambition humaine — et êtes-vous d'accord ?"
        },
        {
            q: "Un grand pouvoir implique de grandes responsabilités.",
            a: "Oncle Ben / Voltaire", o: "Spider-Man / Attribué à Voltaire", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Êtes-vous d'accord pour dire que pouvoir et responsabilité sont toujours liés ?",
                "Pouvez-vous penser à quelqu'un ayant du pouvoir qui a ignoré ses responsabilités ?",
                "Quel pouvoir avez-vous dans votre propre vie — et quelle responsabilité l'accompagne ?",
                "Cette citation s'applique-t-elle à l'influence sur les réseaux sociaux ?",
                "La responsabilité est-elle quelque chose que les gens choisissent ou quelque chose qu'on leur impose ?"
            ],
            task: "Cette citation a été utilisée dans tout, des films de super-héros aux discours politiques. La répétition la rend-elle plus ou moins vraie ? Discutez."
        },
        {
            q: "Après tout ce temps ? Toujours.",
            a: "Severus Rogue", o: "Harry Potter et les Reliques de la Mort, 2007", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Pourquoi pensez-vous que cette citation touche les gens si fortement ?",
                "La loyauté sur une longue période est-elle une vertu ou une obsession ?",
                "Pouvez-vous penser à quelque chose ou à quelqu'un envers qui vous êtes toujours resté fidèle ?",
                "Le contexte change-t-il le sens de cette citation — savoir l'histoire de Rogue est-il important ?",
                "Quelle est la différence entre la dévotion et l'incapacité à lâcher prise ?"
            ],
            task: "Décrivez votre réaction à cette citation — émotionnellement et intellectuellement. Pensez-vous que sa puissance vient des mots eux-mêmes ou de l'histoire qu'il y a derrière ?"
        },
        {
            q: "Tu es gentille, tu es intelligente, tu es importante.",
            a: "Aibileen Clark", o: "La Couleur des sentiments, 2011", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Pourquoi pensez-vous que cette réplique soit devenue si connue ?",
                "Est-il important de s'entendre dire qu'on est important — surtout enfant ?",
                "Pensez-vous que les gens autour de vous savent qu'ils sont importants ?",
                "Y a-t-il quelque chose de puissant à dire quelque chose de simple et direct ?",
                "Qui vous a dit quelque chose comme ça — et cela a-t-il changé quelque chose ?"
            ],
            task: "Cette citation utilise délibérément un anglais grammaticalement incorrect (« You is... »). Pourquoi ? Que perdrait-on si on la « corrigeait » ? Que dit cela sur la langue et l'émotion ?"
        },
        {
            q: "Ce n'est pas ce que je suis en dessous, mais ce que je fais qui me définit.",
            a: "Bruce Wayne / Batman", o: "Batman Begins, 2005", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Pensez-vous que les actes nous définissent plus que les intentions ?",
                "Y a-t-il un fossé entre qui vous êtes « en dessous » et ce que vous faites ?",
                "Quelqu'un peut-il être une bonne personne mais faire systématiquement de mauvaises choses ?",
                "Cette citation s'applique-t-elle à la façon dont nous jugeons les personnalités publiques ?",
                "Quel acte de votre part définit le mieux qui vous êtes ?"
            ],
            task: "Soutenez l'inverse — que ce que nous sommes en dessous compte plus que ce que nous faisons. Présentez les arguments les plus solides possible."
        },
        {
            q: "Nage droit devant toi.",
            a: "Dory", o: "Le Monde de Nemo, 2003", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "La persévérance est-elle toujours la réponse, ou savoir quand s'arrêter est tout aussi important ?",
                "Pouvez-vous penser à un moment où continuer d'avancer était exactement la bonne chose à faire ?",
                "Ce conseil simple est-il parfois plus utile que des conseils compliqués ?",
                "Quelle est la chose dans votre vie à travers laquelle vous êtes actuellement en train de « nager » ?",
                "L'optimisme comme celui de Dory est-il un type de personnalité ou un choix ?"
            ],
            task: "Comparez cela à un autre conseil sur la persévérance — tiré d'un livre, d'une personne de votre entourage ou de votre propre culture. Lequel est le plus utile et pourquoi ?"
        },
        {
            q: "L'hiver vient.",
            a: "Maison Stark", o: "Game of Thrones", c: "Pop culture",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Que représente « l'hiver » pour vous — quelle chose difficile approche ?",
                "La préparation est-elle une vertu ou vous prive-t-elle du moment présent ?",
                "Pouvez-vous penser à un « hiver » qui est arrivé sans prévenir ?",
                "Avez-vous tendance à vous préparer aux difficultés ou à les gérer quand elles arrivent ?",
                "Quelle est la chose à laquelle le monde devrait se préparer mais ne le fait pas ?"
            ],
            task: "Utilisez cette citation comme métaphore pour quelque chose de réel — changement climatique, crise personnelle, instabilité politique. Développez la métaphore pendant au moins une minute."
        },
        {
            q: "Je suis si intelligent que parfois je ne comprends pas un seul mot de ce que je dis.",
            a: "Oscar Wilde", o: "Le Prince Heureux et autres contes, 1888", c: "Esprit et humour",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Wilde fait-il preuve d'autodérision, d'arrogance, ou les deux à la fois ?",
                "Avez-vous déjà dit ou écrit quelque chose qui semblait intelligent mais qui vous a même vous-même embrouillé ?",
                "La complexité est-elle un signe d'intelligence ou parfois un signe de confusion ?",
                "Pensez-vous que les personnes les plus intelligentes soient les meilleurs communicateurs ?",
                "Pouvez-vous penser à quelque chose qui semble profond mais qui est en fait vide ?"
            ],
            task: "Écrivez la chose la plus « Wilde-esque » possible sur votre propre intelligence, puis analysez-la."
        },
        {
            q: "J'ai passé une soirée parfaitement merveilleuse, mais ce n'était pas celle-ci.",
            a: "Groucho Marx", o: "Comédien américain", c: "Esprit et humour",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Avez-vous déjà dû être poli alors que vous ne l'étiez pas du tout ?",
                "L'honnêteté brutale est-elle meilleure ou pire que la malhonnêteté polie dans les situations sociales ?",
                "L'humour peut-il être une forme de courage ?",
                "Quelle est la chose poliment dévastatrice la plus marquante qu'on vous ait dite ?",
                "L'esprit dans une langue étrangère est-il plus difficile ou plus facile à apprécier que dans sa propre langue ?"
            ],
            task: "Décrivez une situation où cette citation serait la chose parfaite à dire, puis expliquez pourquoi vous ne la diriez probablement pas."
        },
        {
            q: "Les femmes bien élevées marquent rarement l'histoire.",
            a: "Laurel Thatcher Ulrich", o: "Historienne américaine, 1976", c: "Esprit et humour",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Est-ce un appel à mal se comporter — ou quelque chose de plus nuancé ?",
                "Qui est une femme dans l'histoire qui n'était pas « bien élevée » et qui a changé les choses ?",
                "Cette citation s'applique-t-elle également aux hommes, ou y a-t-il quelque chose de spécifique aux femmes ?",
                "La transgression des règles est-elle nécessaire au progrès — ou est-elle romancée ?",
                "Que signifie « bien élevé », et qui décide ?"
            ],
            task: "Appliquez cette citation à un homme. Fonctionne-t-elle de la même manière ? Que révèle votre réponse sur la façon dont nous pensons le genre et l'histoire ?"
        },
        {
            q: "Je ne suis pas superstitieux, mais je suis un peu stitieux.",
            a: "Michael Scott", o: "The Office (US), 2007", c: "Esprit et humour",
            level: "upper-intermediate", theme: "culture_arts",
            qs: [
                "Avez-vous des superstitions — même celles auxquelles vous ne croyez pas totalement ?",
                "Pourquoi des personnes intelligentes ont-elles parfois des croyances irrationnelles ?",
                "Y a-t-il une différence entre superstition et intuition ?",
                "Quelles superstitions sont courantes dans votre culture ?",
                "Le fait d'avoir une petite croyance irrationnelle est-il inoffensif ou est-ce une pente glissante ?"
            ],
            task: "Défendez la superstition. Présentez les meilleurs arguments possibles pour expliquer pourquoi un peu de pensée magique est en fait bon pour les humains."
        }
    ];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["quotes"]) window.speakingData[lang]["quotes"] = [];
    window.speakingData[lang]["quotes"].push(...data);
})();

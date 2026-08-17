import os
import re

BASE_DIR = "apps/premium-events/nights/karaoke/sessions/karaoke-club/fr/"

DATA = {
    "bien-plus-fort.html": {
        "title_theme": "Force intérieure & Dévotion",
        "theme_bullets": ["L'amour inconditionnel", "La résilience", "L'engagement absolu", "La force d'âme"],
        "vocab": [
            {"word": "La passion", "def": "Sentiment vif et impérieux qui domine la raison.", "ex": "Leur passion résiste au temps et aux obstacles.", "opp": "L'indifférence"},
            {"word": "L'intensité", "def": "Degré d'énergie ou de force d'un sentiment.", "ex": "L'intensité de sa voix montre la sincérité de son engagement.", "opp": "La mollesse"},
            {"word": "Surmonter", "def": "Triompher d'une difficulté ou d'un obstacle.", "ex": "Ensemble, ils ont su surmonter toutes les épreuves de la vie.", "opp": "Capituler"},
            {"word": "Le courage", "def": "Force morale face au danger ou aux souffrances.", "ex": "Elle trouve le courage de continuer malgré les critiques.", "opp": "La lâcheté"},
            {"word": "Le destin", "def": "Avenir considéré comme fatal et inéluctable.", "ex": "Tereza chante sa volonté de forger son propre destin amoureux.", "opp": "Le hasard"},
            {"word": "La fidélité", "def": "Attachement constant et respect de ses engagements.", "ex": "Sa fidélité indéfectible inspire la confiance autour d'elle.", "opp": "L'infidélité"},
            {"word": "Indestructible", "def": "Qui ne peut être détruit ou altéré par le temps.", "ex": "Ils ont bâti une alliance indestructible face au monde extérieur.", "opp": "Fragile"},
            {"word": "L'abnégation", "def": "Sacrifice volontaire de soi-même au profit d'un autre.", "ex": "Aimer avec abnégation demande une grande maturité émotionnelle.", "opp": "L'égoïsme"},
            {"word": "Inébranlable", "def": "Qui ne se laisse pas troubler ni détourner.", "ex": "Sa conviction est inébranlable malgré les incertitudes du lendemain.", "opp": "Hésitant"},
            {"word": "L'alliance", "def": "Union profonde contractée entre deux personnes.", "ex": "Leur alliance va bien plus loin que de simples promesses verbales.", "opp": "La rupture"}
        ],
        "round1": [
            ("Dans 'Bien plus fort', Tereza Kesovija affirme un amour 'plus grand que la terre' et 'plus dur que la pierre'. Pourquoi la métaphore des éléments naturels renforce-t-elle la notion d'amour <strong>indestructible</strong> ?", "★ Avez-vous déjà ressenti un sentiment d'une telle <strong>intensité</strong> qu'il semblait plus fort que les obstacles ?"),
            ("La chanteuse demande à son partenaire : 'Ouvre tes bras, emmène-moi loin d'ici'. L'amour véritable exige-t-il parfois une rupture avec notre environnement pour <strong>surmonter</strong> les difficultés ?", "★ Trouver le <strong>courage</strong> de tout quitter pour une personne est-il une preuve de maturité ou d'impulsivité ?"),
            ("Le texte répète 'aujourd'hui et demain et toujours'. Comment préserver une telle <strong>fidélité</strong> dans un monde où tout change rapidement ?", "★ Selon vous, la <strong>passion</strong> initiale peut-elle se transformer en un engagement durable sans perdre de son éclat ?"),
            ("Tereza propose de 'rire avec ta bouche et pleurer de tes yeux'. Cette forme d'empathie totale frôle-t-elle <strong>l'abnégation</strong> absolue ?", "★ Dans une relation, jusqu'où peut-on partager les émotions de l'autre sans perdre son identité face au <strong>destin</strong> ?"),
            ("La chanson oppose la dureté de la pierre et la chaleur du cœur. En quoi une conviction <strong>inébranlable</strong> aide-t-elle à sceller une vraie <strong>alliance</strong> amoureuse ?", "★ Quelle valeur vous semble la plus essentielle pour construire une relation solide et durable ?")
        ],
        "round2": [
            "L'idée qu'un amour puisse être 'plus dur que la pierre' est une illusion romantique qui empêche de voir la vulnérabilité nécessaire dans un couple. Débattons-en.",
            "Aimer quelqu'un au point de vouloir 'pleurer de ses yeux' relève d'une dépendance affective plutôt que d'un <strong>courage</strong> authentique. Qu'en pensez-vous ?",
            "Dans la société actuelle, la promesse d'une <strong>fidélité</strong> 'pour toujours' est devenue un idéal difficile à maintenir. Partagez votre avis."
        ],
        "lang_focus_title": "Les comparatifs d'intensité et la métaphore des éléments",
        "lang_focus_desc": "Pour exprimer une comparaison appuyée ou hyperbolique, on utilise la structure 'plus + adjectif + que + nom' (ex: 'plus grand que la terre', 'plus dur que la pierre').",
        "lang_focus_examples": [
            "Son attachement est plus fort que toutes les promesses écrites.",
            "Elle est restée plus calme que la pierre malgré la tempête.",
            "Leur amitié est devenue plus solide que le fer au fil des ans."
        ],
        "final_challenge": "En duos, jouez une scène où l'un des partenaires hésite à s'engager pour l'avenir, tandis que l'autre essaie de le rassurer en utilisant des promesses fortes et des comparatifs d'intensité.",
        "mistakes": [
            ("C'est plus fort <span class=\"mistake-highlight\">de</span> la pierre.", "C'est plus fort <span class=\"mistake-highlight\">que</span> la pierre.", "(Utilisez 'que' pour introduire le second terme d'un comparatif.)"),
            ("Elle est amoureuse <span class=\"mistake-highlight\">depuis</span> toujours.", "Elle est amoureuse <span class=\"mistake-highlight\">pour</span> toujours.", "(Utilisez 'pour toujours' pour projeter une durée indéfinie dans l'avenir.)"),
            ("Il a surmonté <span class=\"mistake-highlight\">de la</span> peur.", "Il a surmonté <span class=\"mistake-highlight\">sa</span> peur.", "(Utilisez un adjectif possessif ou un article défini avec les verbes de surmontement.)")
        ]
    },

    "immobile.html": {
        "title_theme": "Quand la vie s'arrête & Saisissement",
        "theme_bullets": ["L'angoisse du vide", "La paralysie émotionnelle", "Le doute relationnel", "L'incertitude"],
        "vocab": [
            {"word": "L'immobilité", "def": "État de ce qui ne bouge pas, immobilité physique ou mentale.", "ex": "Face au danger, elle reste plongée dans une totale immobilité.", "opp": "Le mouvement"},
            {"word": "Le vide", "def": "Espace dépourvu de matière ou sentiment d'absence.", "ex": "Louane s'approche du vide sans savoir comment réagir.", "opp": "La plénitude"},
            {"word": "Figer", "def": "Rendre immobile sous le coup d'une vive émotion.", "ex": "La peur de perdre l'autre peut figer nos paroles.", "opp": "Animer"},
            {"word": "Ronger", "def": "Tourmenter l'esprit de façon continue et obsessionnelle.", "ex": "Les doutes et les questions finissent par ronger son esprit.", "opp": "Apaiser"},
            {"word": "La paralysie", "def": "Incapacité temporaire d'agir ou de prendre une décision.", "ex": "Face à la crise, une forme de paralysie s'empare de son cœur.", "opp": "L'action"},
            {"word": "L'abîme", "def": "Profondeur immense et effrayante.", "ex": "Regarder l'abîme des sentiments peut provoquer un vertige intérieur.", "opp": "La surface"},
            {"word": "Le vertige", "def": "Sensation de perte d'équilibre ou d'angoisse face au vide.", "ex": "L'incertitude amoureuse lui donne un pénible vertige.", "opp": "La stabilité"},
            {"word": "Hésiter", "def": "Balancer entre deux décisions sans réussir à choisir.", "ex": "Elle continue d'hésiter au lieu d'avancer vers lui.", "opp": "Trancher"},
            {"word": "La rupture", "def": "Interruption soudaine d'un lien ou d'un mouvement.", "ex": "Rester immobile est une tentative de retarder la rupture.", "opp": "La continuité"},
            {"word": "L'hésitation", "def": "Incertitude dans les actes ou les paroles.", "ex": "Son hésitation est visible dans son regard silencieux.", "opp": "L'assurance"}
        ],
        "round1": [
            ("Dans 'Immobile', Louane chante : 'J'm'approche du vide qui me guette... et face à toi je pile'. Pourquoi le sentiment d'urgence ou de danger peut-il provoquer une <strong>immobilité</strong> soudaine ?", "★ Avez-vous déjà vécu un moment d'intense pression où vous vous êtes senti totalement <strong>figé</strong> ?"),
            ("Le texte évoque la peur de 'perdre le jeu de la confiance' et les questions qui rongent l'esprit. Comment le doute intérieur crée-t-il ce sentiment de <strong>paralysie</strong> ?", "★ Préférez-vous affronter un conflit immédiatement ou laisser passer le <strong>vertige</strong> en restant silencieux ?"),
            ("Louane compare cette situation à 'partir en voyage sans pouvoir faire ses bagages'. En quoi cette métaphore illustre-t-elle l'impuissance face au <strong>vide</strong> ?", "★ Comment gérez-vous le sentiment de ne pas être préparé face à un changement brutal dans votre vie ?"),
            ("La chanteuse avoue 'mon cœur se recouvre peu à peu de bleu'. Est-ce que se protéger de la douleur amoureuse mène inévitablement à l'isolement dans <strong>l'abîme</strong> ?", "★ Prendre du recul pour ne pas souffrir est-il efficace pour éviter la <strong>rupture</strong> ?"),
            ("Malgré l'immobilité, la chanson montre une conscience aiguë de la crise. Comment transformer cette <strong>hésitation</strong> contemplative en une décision positive ?", "★ Quelle étape vous aide le plus à sortir d'une phase d'incertitude pour retrouver le mouvement ?")
        ],
        "round2": [
            "Rester <strong>immobile</strong> face à une crise amoureuse est une preuve de faiblesse qui ne fait qu'aggraver le problème. Débattons-en.",
            "L'angoisse du <strong>vide</strong> dans les relations modernes provient principalement d'une suranalyse de nos propres sentiments. Qu'en pensez-vous ?",
            "Parfois, la meilleure décision lors d'un conflit est de ne rien faire et d'attendre que le <strong>vertige</strong> passe. Partagez votre avis."
        ],
        "lang_focus_title": "La métaphore du blocage et l'utilisation de 'face à'",
        "lang_focus_desc": "Pour exprimer la confrontation directe avec une situation difficile ou un sentiment, on utilise la préposition 'face à' combinée avec des verbes d'arrêt soudain comme 'piler' ou 'rester immobile'.",
        "lang_focus_examples": [
            "Face à la gravité des faits, personne n'a osé intervenir.",
            "Elle a pilonné net face au mur de silence de son interlocuteur.",
            "Il demeure immobile face aux questions pressantes du groupe."
        ],
        "final_challenge": "Simulez une consultation où un coach aide une personne paralysée par la peur de prendre une décision importante à faire le premier pas.",
        "mistakes": [
            ("Elle reste immobile <span class=\"mistake-highlight\">devant de</span> la situation.", "Elle reste immobile <span class=\"mistake-highlight\">face à</span> la situation.", "(Utilisez 'face à' pour exprimer la confrontation directe.)"),
            ("J'ai peur <span class=\"mistake-highlight\">de perdre</span> confiance à toi.", "J'ai peur <span class=\"mistake-highlight\">de perdre</span> confiance en toi.", "(Dites 'avoir confiance en quelqu'un'.)"),
            ("Ça me donne <span class=\"mistake-highlight\">un vertige</span>.", "Ça me donne <span class=\"mistake-highlight\">le vertige</span>.", "(L'expression idiomatique utilise l'article défini : 'donner le vertige'.)")
        ]
    },

    "la-nuit-nen-finit-plus.html": {
        "title_theme": "Nuits blanches & Désir d'exister",
        "theme_bullets": ["L'insomnie contemplative", "La solitude urbaine", "La quête d'amour", "L'attente de l'aube"],
        "vocab": [
            {"word": "L'insomnie", "def": "Incapacité chronique ou passagère de trouver le sommeil.", "ex": "L'insomnie transforme le silence de la chambre en un espace de réflexion.", "opp": "Le sommeil"},
            {"word": "Le vide", "def": "Sensation d'absence de sens ou de compagnie.", "ex": "Petula Clark ressent le vide de ces heures nocturnes qui s'étirent.", "opp": "La plénitude"},
            {"word": "Guetter", "def": "Observer avec attention dans l'attente d'un signe.", "ex": "Seule à sa fenêtre, elle semble guetter la moindre lumière.", "opp": "Ignorer"},
            {"word": "S'étirer", "def": "Se prolonger dans le temps de façon lente et monotone.", "ex": "La nuit n'en finit plus et semble s'étirer sans fin.", "opp": "Raccourcir"},
            {"word": "L'obscurité", "def": "Absence totale ou partielle de lumière.", "ex": "L'obscurité de la ville accentue le sentiment de solitude.", "opp": "La clarté"},
            {"word": "La mélancolie", "def": "Tristesse vague, accompagnée de rêverie sombre.", "ex": "Une douce mélancolie s'empare d'elle lorsque la nuit tombe.", "opp": "L'enthousiasme"},
            {"word": "L'attente", "def": "Action de guetter la venue de quelqu'un ou d'un événement.", "ex": "L'attente de l'aube apporte un mince espoir de renouveau.", "opp": "L'accomplissement"},
            {"word": "Solitaire", "def": "Qui vit ou se trouve seul sans compagnie.", "ex": "Elle pense aux milliers d'êtres solitaires qui ne dorment pas.", "opp": "Entouré"},
            {"word": "Éphémère", "def": "Qui ne dure que très peu de temps.", "ex": "Elle cherche un réconfort, même éphémère, pour traverser la nuit.", "opp": "Durable"},
            {"word": "Le mirage", "def": "Illusion séduisante et trompeuse.", "ex": "Espérer une visite nocturne est souvent un simple mirage.", "opp": "La réalité"}
        ],
        "round1": [
            ("Dans 'La nuit n'en finit plus', Petula Clark décrit une nuit d'insomnie où 'la nuit se traîne' et où l'on attend que quelque chose vienne. En quoi l'obscurité amplifie-t-elle la sensation de <strong>solitude</strong> ?", "★ Avez-vous déjà ressenti cette forme particulière de <strong>mélancolie</strong> tard le soir ou pendant une nuit blanche ?"),
            ("La chanteuse s'exclame : 'J'ai envie d'aimer, j'ai envie de vivre !'. Pourquoi le manque d'amour devient-il plus lourd à porter pendant <strong>l'insomnie</strong> ?", "★ L'isolement nocturne permet-il de mieux comprendre nos désirs profonds ou nous plonge-t-il dans des illusions ?"),
            ("Petula Clark pense à tous les 'êtres sur la terre qui comme moi ce soir sont solitaires'. Cette pensée crée-t-elle une solidarité invisible entre les personnes <strong>solitaires</strong> ?", "★ Savoir que d'autres partagent la même souffrance aide-t-il à combler le <strong>vide</strong> intérieur ?"),
            ("Le texte parle de 'tout ce temps gâché et perdu'. Comment éviter que <strong>l'attente</strong> passive d'un changement ne transforme notre quotidien en regret ?", "★ Quel est votre meilleur moyen de transformer une période de doute en une source d'énergie créative ?"),
            ("La chanson oscille entre le désespoir de la nuit et l'espoir du matin. Pourquoi le lever du jour offre-t-il souvent une délivrance face aux <strong>mirages</strong> de la nuit ?", "★ Le matin vous apporte-t-il généralement un regain d'optimisme après une nuit difficile ?")
        ],
        "round2": [
            "La solitude nocturne est indispensable pour faire un véritable bilan de sa vie et développer sa sensibilité. Débattons-en.",
            "L'incapacité de dormir seul révèle une trop grande dépendance au regard et à la présence des autres. Qu'en pensez-vous ?",
            "Les grandes villes modernes ont rendu les nuits plus lumineuses mais n'ont pas diminué <strong>l'insomnie</strong> ni la <strong>solitude</strong> des individus. Partagez votre avis."
        ],
        "lang_focus_title": "La structure 'ne ... en ... plus' et l'expression de la durée",
        "lang_focus_desc": "La formule 'n'en finir plus' exprime une durée perçue comme excessive, interminable ou pénible (ex: 'La nuit n'en finit plus', 'Cette réunion n'en finit plus').",
        "lang_focus_examples": [
            "La pluie n'en finit plus de tomber sur la ville.",
            "Ces négociations n'en finissent plus de s'éterniser.",
            "Mon attente n'en finit plus depuis ce matin."
        ],
        "final_challenge": "Écrivez et jouez un court monologue dramatique où un personnage seul à sa fenêtre parle à la nuit qui ne finit pas, oscillant entre nostalgie et désir de vivre.",
        "mistakes": [
            ("La nuit ne fini pas <span class=\"mistake-highlight\">plus</span>.", "La nuit <span class=\"mistake-highlight\">n'en finit plus</span>.", "(N'oubliez pas le pronom 'en' dans l'expression consacrée 'n'en finir plus'.)"),
            ("J'ai envie <span class=\"mistake-highlight\">d'aimer les</span> gens.", "J'ai envie <span class=\"mistake-highlight\">d'aimer</span> tout simplement.", "(Après 'avoir envie de', utilisez directement un verbe à l'infinitif.)"),
            ("Je pense <span class=\"mistake-highlight\">sur</span> les autres solitaires.", "Je pense <span class=\"mistake-highlight\">aux</span> autres personnes solitaires.", "(Utilisez la préposition 'à' après le verbe 'penser'.)")
        ]
    },

    "laziza.html": {
        "title_theme": "Diversité & Acceptation",
        "theme_bullets": ["L'antiracisme", "L'amour interculturel", "La tolérance", "La dignité humaine"],
        "vocab": [
            {"word": "La tolérance", "def": "Capacité d'accepter les différences de cultures et d'opinions.", "ex": "Balavoine chante la tolérance face aux préjugés racistes.", "opp": "L'intolérance"},
            {"word": "La métisse", "def": "Personne issue de l'union de deux origines culturelles différentes.", "ex": "L'Aziza symbolise la beauté et la richesse d'un monde métissé.", "opp": "L'homogénéité"},
            {"word": "Les préjugés", "def": "Jugements préconçus sur un groupe ou une personne.", "ex": "L'amour triomphe des préjugés sociaux et des stéréotypes.", "opp": "L'ouverture"},
            {"word": "La fraternité", "def": "Lien de solidarité et d'amitié entre les êtres humains.", "ex": "Cette chanson est un hymne puissant à la fraternité universelle.", "opp": "L'hostilité"},
            {"word": "L'intégration", "def": "Processus d'incorporation harmonieuse dans une société.", "ex": "L'intégration réussie repose sur le respect mutuel des cultures.", "opp": "L'exclusion"},
            {"word": "La dignité", "def": "Respect de soi-même et de sa valeur humaine fondamentale.", "ex": "Chacun doit pouvoir vivre avec dignité quelle que soit son origine.", "opp": "L'humiliation"},
            {"word": "L'harmonie", "def": "Accord parfait et équilibre entre des éléments divers.", "ex": "L'harmonie interculturelle enrichit la société tout entière.", "opp": "Le conflit"},
            {"word": "L'exclusion", "def": "Fait de rejeter une personne ou un groupe à la marge.", "ex": "Lutter contre l'exclusion exige un engagement quotidien.", "opp": "L'inclusion"},
            {"word": "L'injustice", "def": "Caractère de ce qui est contraire à l'équité.", "ex": "Dénoncer l'injustice est le devoir de tout artiste engagé.", "opp": "La justice"},
            {"word": "L'espoir", "def": "Sentiment de confiance dans l'avenir.", "ex": "La chanson porte un message d'espoir pour les générations futures.", "opp": "Le désespoir"}
        ],
        "round1": [
            ("Dans 'L'Aziza', Daniel Balavoine chante pour sa femme d'origine algérienne : 'Ta couleur et tes mots tout me va, que tu vives ici ou là-bas'. En quoi cette déclaration dépasse-t-elle le cadre individuel pour devenir un hymne à la <strong>tolérance</strong> ?", "★ Selon vous, la musique populaire est-elle un outil efficace pour combattre les <strong>préjugés</strong> racistes ?"),
            ("La chanson évoque la 'petite brune enroulée d'un drap' dans les rues de Casablanca et les regards curieux. Pourquoi la découverte de l'autre exige-t-elle de dépasser la peur de l'inconnu pour construire une vraie <strong>fraternité</strong> ?", "★ Avez-vous déjà vécu une expérience interculturelle qui a changé votre perception du monde ?"),
            ("Balavoine affirme avec force : 'Je te veux pour toujours'. Comment l'amour sincère parvient-il à rendre absurdes les barrières de la culture ou de <strong>l'exclusion</strong> ?", "★ Pensez-vous que les différences culturelles soient un obstacle ou un enrichissement dans un couple ?"),
            ("Le texte s'insurge contre la haine et prône la <strong>dignité</strong> de chaque être humain. Quel rôle la société doit-elle jouer pour favoriser une <strong>intégration</strong> réussie ?", "★ Quels gestes quotidiens permettent selon vous d'encourager <strong>l'harmonie</strong> entre des communautés différentes ?"),
            ("Bien que sortie dans les années 80, 'L'Aziza' reste d'une actualité brûlante. Pourquoi la défense des droits fondamentaux et de <strong>l'espoir</strong> est-elle un combat sans cesse à recommencer ?", "★ Quelle chanson engagée vous a le plus marqué par son message d'ouverture ?")
        ],
        "round2": [
            "L'amour individuel ne suffit pas à vaincre les discriminations systémiques si la loi et l'éducation ne changent pas. Débattons-en.",
            "La notion de métissage culturel devrait être célébrée comme la norme de la société de demain plutôt que comme une exception. Qu'en pensez-vous ?",
            "Les artistes contemporains sont moins engagés contre <strong>l'injustice</strong> et les <strong>préjugés</strong> que ceux des générations précédentes. Partagez votre avis."
        ],
        "lang_focus_title": "L'expression de la concession et de l'acceptation ('que ... ou ...')",
        "lang_focus_desc": "Pour exprimer une acceptation inconditionnelle sans restriction de lieu ou d'origine, on utilise la tournure 'que + subjonctif ... ou ...' (ex: 'Que tu vives ici ou là-bas', 'Que tu sois d'accord ou non').",
        "lang_focus_examples": [
            "Que vous soyez d'ici ou d'ailleurs, vous êtes les bienvenus.",
            "Qu'il pleuve ou qu'il fasse beau, la fête aura lieu.",
            "Que tu le veuilles ou non, nous devons avancer ensemble."
        ],
        "final_challenge": "Rédigez un discours d'inauguration pour un centre culturel interculturel qui prône la tolérance, le respect des origines et le refus des discriminations.",
        "mistakes": [
            ("Ta couleur me va <span class=\"mistake-highlight\">bien que</span> tu vives là-bas.", "Ta couleur me va, <span class=\"mistake-highlight\">que</span> tu vives ici ou là-bas.", "(Utilisez la structure 'que... ou...' pour marquer l'alternative équivalente.)"),
            ("Elle se bat <span class=\"mistake-highlight\">contre de l'</span>injustice.", "Elle se bat <span class=\"mistake-highlight\">contre l'</span>injustice.", "(Après 'contre', utilisez l'article défini sans le partitif.)"),
            ("Il est fier <span class=\"mistake-highlight\">pour</span> sa culture.", "Il est fier <span class=\"mistake-highlight\">de</span> sa culture.", "(L'adjectif 'fier' se construit avec la préposition 'de'.)")
        ]
    },

    "leffet-de-masse.html": {
        "title_theme": "Effet de masse & Harcèlement",
        "theme_bullets": ["Le harcèlement scolaire", "La pression du groupe", "Le courage individuel", "L'empathie"],
        "vocab": [
            {"word": "Le harcèlement", "def": "Ensemble d'agissements répétés visant à dégrader les conditions de vie d'une victime.", "ex": "Maëlle dénonce le harcèlement subi par un élève isolé.", "opp": "Le soutien"},
            {"word": "La masse", "def": "Grand groupe de personnes agissant de manière uniforme et irréfléchie.", "ex": "Suivre la masse empêche souvent d'exprimer son propre jugement moral.", "opp": "L'individu"},
            {"word": "L'isolement", "def": "Situation d'une personne séparée du reste du groupe.", "ex": "L'isolement de la victime est renforcé par le rire des camarades.", "opp": "L'intégration"},
            {"word": "La complicité", "def": "Participation passive ou active à la faute d'un autre.", "ex": "Rire d'une moquerie fait de nous des complices de l'effet de masse.", "opp": "L'opposition"},
            {"word": "L'empathie", "def": "Capacité de ressentir les émotions et la souffrance d'autrui.", "ex": "Développer l'empathie dès l'école est indispensable pour stopper le rejet.", "opp": "L'indifférence"},
            {"word": "La meute", "def": "Groupe agressif qui se ligue collectivement contre une cible.", "ex": "L'effet de groupe transforme parfois des élèves ordinaires en une meute cruelle.", "opp": "La protection"},
            {"word": "La lâcheté", "def": "Manque de courage pour s'opposer à une injustice.", "ex": "Se taire face au harcèlement est une forme de lâcheté ordinaire.", "opp": "Le courage"},
            {"word": "Le bouc émissaire", "def": "Personne sur laquelle on fait retomber toutes les fautes.", "ex": "L'élève différent est devenu le bouc émissaire de la classe.", "opp": "Le leader"},
            {"word": "La rumeur", "def": "Nouvelle incontrôlée qui se propage rapidement.", "ex": "La rumeur qui court dans les couloirs détruit sa réputation.", "opp": "La vérité"},
            {"word": "Le témoin", "def": "Personne qui assiste à une scène sans forcément y participer.", "ex": "Chaque témoin a la responsabilité morale d'alerter les adultes.", "opp": "L'acteur"}
        ],
        "round1": [
            ("Dans 'L'effet de masse', Maëlle raconte : 'Tu riais de lui car il était différent... c'est l'effet de masse'. Pourquoi est-il si facile de céder à la pression du groupe au détriment de sa propre conscience ?", "★ Avez-vous déjà été témoin d'une situation où la dynamique de groupe incitait à la moquerie ?"),
            ("La chanson montre que le harcèlement existe aussi bien dans les couloirs d'école que dans les 'beaux bureaux en glace'. Pourquoi la cruauté sociale persiste-t-elle dans le monde adulte ?", "★ Pensez-vous que le monde du travail reproduise parfois les réflexes d'exclusion de la cour de récréation ?"),
            ("Le texte souligne que la victime 'était celui d'en face, tu l'as déjà vu'. Pourquoi la proximité physique n'empêche-t-elle pas la cécité morale et **l'isolement** ?", "★ Comment rompre l'indifférence ambiante lorsqu'une personne seule est mise à l'écart ?"),
            ("Maëlle dénonce le rôle des suiveurs et la **complicité** du silence. Refuser de rire à une moquerie demande-t-il un grand **courage** individuel ?", "★ Qu'est-ce qui nous retient le plus souvent d'intervenir pour défendre un **bouc émissaire** ?"),
            ("La chanson se termine sur une prise de conscience poignante. Comment l'éducation à **l'empathie** peut-elle désarmer l'effet de **meute** ?", "★ Selon vous, quelle campagne de sensibilisation est la plus efficace auprès des jeunes ?")
        ],
        "round2": [
            "Ceux qui assistent au harcèlement sans intervenir sont tout aussi coupables que les agresseurs principaux. Débattons-en.",
            "L'effet de groupe est un mécanisme psychologique humain si puissant qu'il est irréaliste d'attendre des adolescents qu'ils y résistent seuls. Qu'en pensez-vous ?",
            "Les réseaux sociaux ont démultiplié la violence du harcèlement en supprimant toute limite géographique ou temporelle. Partagez votre avis."
        ],
        "lang_focus_title": "L'expression de la cause avec 'à cause de' et la responsabilité",
        "lang_focus_desc": "Pour exprimer la cause d'un événement négatif attribué à un facteur extérieur ou collectif, on utilise 'à cause de + nom' ou 'parce que + phrase'.",
        "lang_focus_examples": [
            "Il a quitté l'école à cause de l'effet de masse.",
            "Elle s'est tu parce qu'elle avait peur des réactions du groupe.",
            "C'est à cause de leur complicité que la rumeur s'est propagée."
        ],
        "final_challenge": "Mettez en scène une réunion de médiation scolaire où un élève témoin prend la parole devant ses camarades pour expliquer pourquoi il ne veut plus participer à l'effet de masse.",
        "mistakes": [
            ("Il riait de lui <span class=\"mistake-highlight\">grâce à</span> l'effet de masse.", "Il riait de lui <span class=\"mistake-highlight\">à cause de</span> l'effet de masse.", "(Utilisez 'à cause de' pour une cause à conséquence négative, 'grâce à' étant réservé aux causes positives.)"),
            ("Ils ont fait de lui un <span class=\"mistake-highlight\">bouc d'émissaire</span>.", "Ils ont fait de lui un <span class=\"mistake-highlight\">bouc émissaire</span>.", "(L'expression correcte est 'bouc émissaire' sans préposition 'de'.)"),
            ("Elle s'est isolée <span class=\"mistake-highlight\">de la</span> groupe.", "Elle s'est isolée <span class=\"mistake-highlight\">du</span> groupe.", "(Contractez 'de + le' en 'du'.)")
        ]
    },

    "ma-philosophie.html": {
        "title_theme": "Fierté, Résilience & Affirmation de soi",
        "theme_bullets": ["L'affirmation de soi", "Le refus du statut de victime", "La détermination", "L'ambition légitime"],
        "vocab": [
            {"word": "La philosophie", "def": "Ensemble de principes guidant la conduite de sa vie.", "ex": "Amel Bent définit sa propre philosophie fondée sur le respect et la fierté.", "opp": "Le désarroi"},
            {"word": "La résilience", "def": "Capacité à surmonter les chocs émotionnels et à se reconstruire.", "ex": "Sa résilience lui permet de transformer ses blessures en force d'action.", "opp": "La vulnérabilité"},
            {"word": "Viser", "def": "Diriger ses efforts vers un objectif élevé.", "ex": "Viser la lune ne lui fait pas peur, même si c'est un défi immense.", "opp": "Abandonner"},
            {"word": "La revanche", "def": "Succès qui efface une défaite ou une injustice passée.", "ex": "Sa réussite est une belle revanche sur les préjugés sociaux.", "opp": "La soumission"},
            {"word": "La métisse", "def": "Personne aux origines culturelles multiples.", "ex": "Elle assume son identité de femme métisse avec fierté et dignité.", "opp": "L'uniformité"},
            {"word": "Le martyre", "def": "Grande souffrance subie en se posant en victime permanente.", "ex": "Elle refuse d'être une martyre et choisit de se battre au quotidien.", "opp": "Le triomphe"},
            {"word": "La dignité", "def": "Attitude empreinte de respect de soi-même.", "ex": "Garder le poing levé est un symbole de dignité et de combat.", "opp": "L'humiliation"},
            {"word": "Le préjugé", "def": "Opinion préconçue adoptée sans examen critique.", "ex": "Elle surmonte les préjugés grâce à un talent incontestable.", "opp": "L'objectivité"},
            {"word": "La ténacité", "def": "Qualité de quelqu'un qui persiste avec obstination.", "ex": "Sa ténacité porte ses fruits malgré les portes qui se ferment.", "opp": "L'inconstance"},
            {"word": "L'ambition", "def": "Désir ardent d'avoir du succès ou de réussir sa vie.", "ex": "Avoir de l'ambition est un droit légitime pour chacun.", "opp": "La résignation"}
        ],
        "round1": [
            ("Dans 'Ma philosophie', Amel Bent chante : 'Je n'ai qu'une philosophie, être acceptée comme je suis... le poing levé'. Que symbolise ce geste du **poing levé** combiné au refus de se poser en victime ?", "★ Avez-vous déjà dû vous battre pour faire respecter votre identité sans compromettre vos valeurs ?"),
            ("Le refrain affirme : 'Viser la lune, ça ne me fait pas peur, même pas peur !'. Pourquoi est-il essentiel d'entretenir de hautes **ambitions** malgré les obstacles ?", "★ Quel objectif audacieux vous êtes-vous fixé dans la vie et comment nourrissez-vous votre **ténacité** ?"),
            ("Amel Bent déclare : 'Je suis métisse mais pas martyre, j'avance le cœur léger'. En quoi le refus de s'enfermer dans le statut de victime est-il une preuve de **résilience** ?", "★ Comment faire la différence entre reconnaître ses difficultés et s'installer dans une attitude de complainte ?"),
            ("Les paroles soulignent : 'Lever la tête, bomber le torse, sans cesse redoubler d'efforts'. Quelle discipline personnelle aide à maintenir cette **dignité** face aux doutes ?", "★ Qui vous inspire le plus par son attitude face à l'adversité et aux **préjugés** ?"),
            ("La chanson promet une belle **revanche** sur la vie par le travail et le sourire. La meilleure réponse aux critiques est-elle le succès personnel ?", "★ Selon vous, quelle est la définition d'une réussite accomplie selon votre propre **philosophie** ?")
        ],
        "round2": [
            "Déclarer qu'on veut 'viser la lune' est une posture idéaliste qui peut mener à de profondes déceptions si l'on ne garde pas les pieds sur terre. Débattons-en.",
            "Le refus absolu de passer pour une victime empêche parfois de demander de l'aide quand on en a réellement besoin. Qu'en pensez-vous ?",
            "S'imposer dans la société d'aujourd'hui exige plus de stratégie d'adaptation que de simple **ténacité** individuelle. Partagez votre avis."
        ],
        "lang_focus_title": "L'expression de la détermination et de l'opposition avec 'malgré'",
        "lang_focus_desc": "Pour marquer la détermination face aux obstacles, on utilise 'malgré + nom' (ex: 'Malgré tout ce qu'on me dit', 'Malgré nos peines') ou 'avoir beau + infinitif'.",
        "lang_focus_examples": [
            "Malgré les critiques, elle conserve sa ligne de conduite.",
            "Elle a beau rencontrer des obstacles, elle continue d'avancer.",
            "Il garde le sourire malgré les épreuves traversées."
        ],
        "final_challenge": "Rédigez et présentez votre propre 'manifeste personnel' en 4 points pour expliquer la philosophie qui guide vos choix au quotidien.",
        "mistakes": [
            ("Elle avance <span class=\"mistake-highlight\">malgré que</span> les difficultés.", "Elle avance <span class=\"mistake-highlight\">malgré</span> les difficultés.", "(Utilisez 'malgré' suivi directement d'un nom, et non 'malgré que'.)"),
            ("Elle veut viser <span class=\"mistake-highlight\">à la</span> lune.", "Elle veut viser <span class=\"mistake-highlight\">la</span> lune.", "(Le verbe 'viser' dans le sens d'ambitionner prend un complément d'objet direct.)"),
            ("Elle est fière <span class=\"mistake-highlight\">pour</span> son parcours.", "Elle est fière <span class=\"mistake-highlight\">de</span> son parcours.", "(Construisez 'être fier de quelque chose'.)")
        ]
    },

    "ouvrir-les-yeux.html": {
        "title_theme": "Solitude, Désillusion & Espoir",
        "theme_bullets": ["La rupture sentimentale", "Le besoin de chaleur humaine", "L'éveil de la conscience", "La reconstruction"],
        "vocab": [
            {"word": "La désillusion", "def": "Perte d'une illusion ou déception face à la réalité.", "ex": "Ouvrir les yeux demande d'affronter une cruelle désillusion.", "opp": "L'illusion"},
            {"word": "Le réconfort", "def": "Soulagement apporté à la douleur physique ou morale.", "ex": "Elle cherche un réconfort sincère pour réchauffer son cœur.", "opp": "L'affliction"},
            {"word": "La clarté", "def": "Qualité de ce qui est net, sans confusion ni mensonge.", "ex": "Voir la situation avec clarté permet de prendre les bonnes décisions.", "opp": "L'ombre"},
            {"word": "L'éveil", "def": "Action de sortir d'un état d'illusion ou de sommeil.", "ex": "Ce déclic marque l'éveil d'une nouvelle conscience de soi.", "opp": "L'engourdissement"},
            {"word": "L'amertume", "def": "Tristesse mêlée d'un sentiment d'injustice.", "ex": "Elle surmonte son amertume pour ne garder que les bons souvenirs.", "opp": "La douceur"},
            {"word": "La guérison", "def": "Retour à la santé après une blessure morale.", "ex": "La guérison affective prend du temps et demande de l'indulgence.", "opp": "La rechute"},
            {"word": "L'autonomie", "def": "Capacité à ne pas dépendre d'autrui pour vivre.", "ex": "Retrouver son autonomie est l'étape clé après une déception.", "opp": "La dépendance"},
            {"word": "L'aveuglement", "def": "Incapacité à voir la vérité par refus ou illusion.", "ex": "L'amour passionnel mène parfois à un aveuglement regrette.", "opp": "La lucidité"},
            {"word": "La tiédeur", "def": "Manque d'enthousiasme ou de passion sincère.", "ex": "Elle refuse la tiédeur d'une relation sans engagement.", "opp": "La passion"},
            {"word": "L'espérance", "def": "Attente confiante d'un bien à venir.", "ex": "Ouvrir les yeux rallume l'espérance d'un avenir meilleur.", "opp": "Le désespoir"}
        ],
        "round1": [
            ("Dans 'Ouvrir les yeux', Maëlle chante : 'Et me voilà seule sans toi... mon cœur est devenu froid'. Pourquoi la fin d'une relation s'accompagne-t-elle souvent d'une sensation de froid intérieur ?", "★ Comment réussissez-vous à apporter du **réconfort** à votre esprit lorsque vous traversez une période sombre ?"),
            ("Le texte dit : 'Mais la chaleur réchauffe mon âme, et ça ne vient pas de toi'. Pourquoi est-il gratifiant de réaliser que notre bonheur ne dépend plus de l'autre ?", "★ Avez-vous déjà ressenti cette forme de libération quand vous retrouvez votre **autonomie** affective ?"),
            ("La chanson répète le désir d'oublier et de danser malgré le ciel noir. Est-ce que faire la fête est une fuite temporaire ou une étape vers la **guérison** ?", "★ Quelle activité vous aide le plus à retrouver la joie et la **clarté** d'esprit après un chagrin ?"),
            ("Maëlle s'interroge : 'Il est bien dans mes bras, il y restera ou pas ?'. Accepter l'incertitude dans les relations évite-t-il **l'aveuglement** ?", "★ Préférez-vous vivre pleinement l'instant présent ou chercher absolument des garanties sur l'avenir ?"),
            ("Le titre même d'Ouvrir les yeux' suggère un passage de la naïveté à la réalité. En quoi cet **éveil** est-il indispensable pour grandir ?", "★ Quel a été le déclic le plus marquant dans votre vie qui vous a fait **ouvrir les yeux** sur une situation ?")
        ],
        "round2": [
            "Vouloir 'oublier' immédiatement après une déception empêche de faire le deuil nécessaire et retarde la vraie **guérison**. Débattons-en.",
            "L'expression 'ouvrir les yeux' implique qu'on vivait dans l'erreur, alors que nos illusions passées avaient aussi leur valeur. Qu'en pensez-vous ?",
            "Il est impossible d'atteindre une totale **autonomie** émotionnelle tout en vivant une histoire d'amour passionnée. Partagez votre avis."
        ],
        "lang_focus_title": "L'expression du changement d'état avec 'devenir' et 'rendre'",
        "lang_focus_desc": "Pour décrire une transformation émotionnelle ou physique, on utilise 'devenir + adjectif' (ex: 'Mon cœur est devenu froid') ou 'rendre + adjectif' (ex: 'Cela me rend plus fort').",
        "lang_focus_examples": [
            "Son attitude est devenue distante après la discussion.",
            "Cette expérience l'a rendue beaucoup plus lucide.",
            "Le ciel est devenu noir avant que la tempête n'éclate."
        ],
        "final_challenge": "Jouez une scène entre deux amies où l'une aide l'autre à ouvrir les yeux sur une relation toxique et à retrouver son estime personnelle.",
        "mistakes": [
            ("Mon cœur est <span class=\"mistake-highlight\">devenu de</span> froid.", "Mon cœur est <span class=\"mistake-highlight\">devenu</span> froid.", "(Ne mettez pas de préposition entre le verbe 'devenir' et l'adjectif.)"),
            ("Ça me <span class=\"mistake-highlight\">fait</span> triste.", "Ça me <span class=\"mistake-highlight\">rend</span> triste.", "(Utilisez le verbe 'rendre' devant un adjectif de sentiment.)"),
            ("Elle tente <span class=\"mistake-highlight\">d'oublier de</span> ses peines.", "Elle tente <span class=\"mistake-highlight\">d'oublier</span> ses peines.", "(Le verbe 'oublier' prend un complément direct sans préposition.)")
        ]
    },

    "salut.html": {
        "title_theme": "Retrouver le passé & Amicaux souvenirs",
        "theme_bullets": ["Les retrouvailles amicales", "Le temps qui passe", "Les souvenirs partagés", "La chaleur du foyer"],
        "vocab": [
            {"word": "Le salut", "def": "Mot ou geste amical pour saluer quelqu'un qu'on revoit.", "ex": "Joe Dassin lance un salut chaleureux en franchissant la porte.", "opp": "L'adieu"},
            {"word": "Le retour", "def": "Fait de revenir dans un lieu qu'on avait quitté.", "ex": "Son retour à la maison après de longs voyages fait très plaisir.", "opp": "Le départ"},
            {"word": "Le café", "def": "Boisson chaude partagée en signe d'hospitalité.", "ex": "Proposer un bon café chaud est une belle manière de recevoir un ami.", "opp": "L'indifférence"},
            {"word": "Le souvenir", "def": "Image d'un événement passé qui reste dans la mémoire.", "ex": "Ils évoquent ensemble leurs souvenirs d'enfance avec le sourire.", "opp": "L'oubli"},
            {"word": "L'ami", "def": "Personne avec qui on a une sympathie sincère.", "ex": "Un véritable ami vous accueille toujours à bras ouverts.", "opp": "L'ennemi"},
            {"word": "Naviguer", "def": "Voyager sur l'eau ou parcourir le monde.", "ex": "Après avoir beaucoup navigué, il a besoin de repos.", "opp": "Stagner"},
            {"word": "Raconter", "def": "Faire le récit de faits réels ou imaginaires.", "ex": "Il a une longue histoire passionnante à raconter.", "opp": "Taire"},
            {"word": "Changer", "def": "Devenir différent avec le temps.", "ex": "Même si les choses ont changé, leur amitié reste intacte.", "opp": "Rester immobile"},
            {"word": "La gare", "def": "Lieu où l'on prend le train pour voyager.", "ex": "La gare rappelle les départs et les arrivées de jadis.", "opp": "La demeure"},
            {"word": "La fatigue", "def": "Sensation de besoin de repos après un long effort.", "ex": "Il ressent un peu de fatigue après ce long trajet.", "opp": "La forme"}
        ],
        "round1": [
            ("Dans 'Salut', Joe Dassin dit : 'Salut, c'est encore moi, comment tu vas ?'. Pourquoi est-il si agréable de retrouver un ami comme si on s'était quittés hier ?", "★ Quel ami d'enfance aimeriez-vous revoir autour d'un <strong>café</strong> pour prendre de ses nouvelles ?"),
            ("Le chanteur avoue : 'J'ai un peu trop navigué, je me sens fatigué, fais-moi un bon café'. Pourquoi le foyer d'un ami est-il le meilleur endroit pour se reposer ?", "★ Qu'aimez-vous faire quand vous rentrez chez vous après un long voyage ?"),
            ("La chanson parle d'une 'histoire à te raconter' et de quelqu'un qu'on connaît bien. Est-ce facile de raconter ses voyages et ses erreurs à un proche ?", "★ Aimez-vous <strong>raconter</strong> vos aventures ou préférez-vous écouter les histoires des autres ?"),
            ("Joe Dassin se rappelle le temps passé loin de la maison. Pourquoi la distance nous fait-elle parfois apprécier davantage notre village ou nos proches ?", "★ Avez-vous déjà ressenti le manque de votre pays ou de votre ville quand vous étiez loin ?"),
            ("Malgré les années qui passent, le refrain reste très chaleureux et sans regret. L'amitié vraie peut-elle résister aux années sans <strong>changer</strong> ?", "★ Selon vous, quel est le secret pour garder de bons <strong>amis</strong> toute sa vie ?")
        ],
        "round2": [
            "Le temps qui passe transforme tellement les gens qu'il est difficile de retrouver la même complicité après plusieurs années d'absence. Débattons-en.",
            "Les grands voyages apportent beaucoup de fatigue mais sont indispensables pour apprécier la valeur de son chez-soi. Qu'en pensez-vous ?",
            "Partager un simple <strong>café</strong> avec un vieil <strong>ami</strong> est plus réconfortant que de voyager à l'autre bout du monde. Partagez votre avis."
        ],
        "lang_focus_title": "Les formules de salutation et le passé composé simple",
        "lang_focus_desc": "Pour saluer amicalement et raconter des faits passés simples, on utilise des tournures directes comme 'Salut, c'est moi' et le passé composé ('J'ai pensé', 'J'ai navigué').",
        "lang_focus_examples": [
            "Salut ! J'ai pensé à toi toute la journée.",
            "Il a fait un long voyage et il est revenu hier.",
            "Nous avons bu un café ensemble dans le centre."
        ],
        "final_challenge": "En binômes, jouez les retrouvailles improvisées de deux anciens camarades de classe qui se croisent dans un café après 5 ans sans nouvelles.",
        "mistakes": [
            ("Comment tu <span class=\"mistake-highlight\">vas de</span> santé ?", "Comment tu <span class=\"mistake-highlight\">vas</span> ?", "(La formule simple est 'Comment tu vas ?' sans ajout superflu.)"),
            ("J'ai pensé <span class=\"mistake-highlight\">de</span> toi.", "J'ai pensé <span class=\"mistake-highlight\">à</span> toi.", "(On dit 'penser à quelqu'un'.)"),
            ("Fais-moi <span class=\"mistake-highlight\">un bon</span> café.", "Fais-moi <span class=\"mistake-highlight\">un bon</span> café.", "(C'est correct ! Attention à ne pas dire 'fais à moi'.)")
        ]
    },

    "toi-mon-amour.html": {
        "title_theme": "Âmes sœurs & Destin amoureux",
        "theme_bullets": ["La complicité évidente", "Le coup de foudre", "L'union des âmes", "La magie de l'instant"],
        "vocab": [
            {"word": "La complicité", "def": "Entente profonde et immédiate entre deux personnes.", "ex": "Leur complicité est évidente dès le premier regard échangé.", "opp": "L'incompréhension"},
            {"word": "Le destin", "def": "Enchaînement d'événements perçu comme inévitable.", "ex": "Ils pensent que leur rencontre était inscrite dans le destin.", "opp": "Le hasard"},
            {"word": "Voler en éclat", "def": "Se briser sous le coup d'une vive émotion.", "ex": "Ses certitudes volent en éclat lorsqu'elle entend sa voix.", "opp": "Rester intact"},
            {"word": "L'éternité", "def": "Durée sans fin, hors du temps ordinaire.", "ex": "Promettre son amour pour l'éternité est une douce audace.", "opp": "L'éphémère"},
            {"word": "La promesse", "def": "Engagement verbal à faire ou donner quelque chose.", "ex": "Chaque mot murmuré résonne comme une promesse sincère.", "opp": "La trahison"},
            {"word": "L'âme sœur", "def": "Personne avec laquelle on ressent une affinité totale.", "ex": "Marc Lavoine et Clara Luciani chantent la quête de l'âme sœur.", "opp": "L'inconnu"},
            {"word": "L'évidence", "def": "Caractère de ce qui s'impose à l'esprit sans doute possible.", "ex": "Leur amour s'est imposé comme une évidence absolue.", "opp": "Le doute"},
            {"word": "S'épanouir", "def": "Atteindre un plein développement heureux.", "ex": "Elle voit son cœur s'épanouir au contact de l'autre.", "opp": "Dépérir"},
            {"word": "L'émerveillement", "def": "Sentiment de surprise admirative et joyeuse.", "ex": "L'émerveillement des débuts illumine leur quotidien.", "opp": "La lassitude"},
            {"word": "La symbiose", "def": "Union étroite et bénéfique entre deux êtres.", "ex": "Leur duo musical reflète une parfaite symbiose affective.", "opp": "L'opposition"}
        ],
        "round1": [
            ("Dans 'Toi mon amour', le duo chante : 'Sur un signe seulement de toi, je vole en éclat... avant toi j'ignorais tout ça'. Pourquoi la rencontre amoureuse transforme-t-elle si brutalement notre vision du monde ?", "★ Croyez-vous que l'amour puisse faire **voler en éclat** nos défenses en un seul instant ?"),
            ("Les paroles affirment : 'Moi je suis fait pour toi mon amour, je ne pense qu'à ça tous les jours'. Cette sensation d'être 'faits l'un pour l'autre' est-elle une réalité ou une belle illusion ?", "★ Avez-vous déjà ressenti cette forme de **complicité** évidente avec une personne dès la première rencontre ?"),
            ("Le duo répète 'À nos amours... même si c'est pas pour toujours'. Préfère-t-on vivre une passion intense mais **éphémère** ou une relation paisible vouée à **l'éternité** ?", "★ Quelle est selon vous la plus grande force d'un couple : la passion de l'instant ou la stabilité du temps ?"),
            ("La chanson montre une vulnérabilité assumée ('moi qui ne croyais plus guère à l'amour'). Comment réapprendre à faire confiance après avoir été déçu ?", "★ Qu'est-ce qui vous aide à ouvrir à nouveau votre cœur à de nouvelles **promesses** ?"),
            ("L'harmonie entre les deux voix de Marc Lavoine et Clara Luciani donne une force particulière à la chanson. En quoi la **symbiose** artistique peut-elle refléter une symbiose amoureuse ?", "★ Quelle est votre chanson de duo d'amour préférée dans la musique francophone ?")
        ],
        "round2": [
            "Croire à l'existence d'une 'âme sœur' unique est une idée romantique risquée qui peut gâcher de réelles opportunités. Débattons-en.",
            "L'intensité d'un coup de foudre est souvent plus liée à notre propre besoin d'aimer qu'à la personne rencontrée. Qu'en pensez-vous ?",
            "Les relations modernes privilégient trop la liberté individuelle au détriment de l'engagement total vers **l'éternité**. Partagez votre avis."
        ],
        "lang_focus_title": "L'expression de la restriction et du changement ('ne ... que', 'avant ...')",
        "lang_focus_desc": "Pour exprimer l'exclusivité d'une pensée, on utilise 'ne ... que' (ex: 'Je ne pense qu'à ça'). Pour marquer la rupture avec le passé, on utilise 'avant + nom/phrase'.",
        "lang_focus_examples": [
            "Je ne pense qu'à notre prochaine rencontre.",
            "Avant toi, j'ignorais la force de ce sentiment.",
            "Il n'écoute que ses chansons préférées depuis ce matin."
        ],
        "final_challenge": "Écrivez et interprétez un court dialogue romantique où deux personnes se rendent compte au cours d'une soirée qu'elles étaient faites pour se rencontrer.",
        "mistakes": [
            ("Je pense <span class=\"mistake-highlight\">seulement qu'à</span> ça.", "Je <span class=\"mistake-highlight\">ne pense qu'à</span> ça.", "(N'associez pas 'seulement' avec la négation restrictive 'ne... que'.)"),
            ("Avant <span class=\"mistake-highlight\">de</span> toi, je ne savais pas.", "Avant <span class=\"mistake-highlight\"></span> toi, je ne savais pas.", "(Utilisez 'avant' directement devant le pronom tonique sans préposition 'de'.)"),
            ("Je suis fait <span class=\"mistake-highlight\">pour la</span> vie avec toi.", "Je suis fait <span class=\"mistake-highlight\">pour vivre</span> avec toi.", "(Utilisez l'infinitif après 'être fait pour'.)")
        ]
    },

    "un-premier-amour.html": {
        "title_theme": "La magie du premier amour & Nostalgie",
        "theme_bullets": ["La nostalgie de la jeunesse", "L'innocence amoureuse", "L'empreinte indélébile", "Le temps préservé"],
        "vocab": [
            {"word": "La pureté", "def": "Caractère de ce qui est exempt de souillure ou de calcul.", "ex": "Isabelle Aubret chante la pureté intacte du premier amour.", "opp": "L'altération"},
            {"word": "L'innocence", "def": "État de quelqu'un qui n'a pas encore connu le cynisme.", "ex": "L'innocence des premiers sentiments laisse une trace inoubliable.", "opp": "La malice"},
            {"word": "L'empreinte", "def": "Marque profonde et durable laissée dans la mémoire.", "ex": "Le premier amour laisse une empreinte indélébile dans un cœur.", "opp": "L'effacement"},
            {"word": "Nostalgique", "def": "Qui éprouve un regret doux et triste du passé.", "ex": "Écouter cette mélodie la rend doucement nostalgique.", "opp": "Prospectif"},
            {"word": "Frémir", "def": "Trembler de manière imperceptible sous le coup de l'émotion.", "ex": "L'enfant qu'on est resté frémira toujours à ce souvenir.", "opp": "Rester insensible"},
            {"word": "Indélébile", "def": "Qui ne peut être effacé ni oublié avec le temps.", "ex": "Les émotions de nos quinze ans sont indélébiles.", "opp": "Éphémère"},
            {"word": "La candeur", "def": "Pureté d'âme et naïveté touchante.", "ex": "Sa candeur de l'époque fait sourire aujourd'hui.", "opp": "Le cynisme"},
            {"word": "Le berceau", "def": "Origine ou lieu de naissance d'un sentiment.", "ex": "La jeunesse est le berceau de nos premières passions.", "opp": "La fin"},
            {"word": "Chérir", "def": "Aimer d'une affection tendre et constante.", "ex": "Chérir ses souvenirs ne nous empêche pas d'aimer au présent.", "opp": "Détester"},
            {"word": "L'écho", "def": "Répétition ou résurgence d'un sentiment ancien.", "ex": "Cette chanson est l'écho d'un bonheur lointain mais vivant.", "opp": "Le silence"}
        ],
        "round1": [
            ("Dans 'Un premier amour', Isabelle Aubret affirme : 'Un premier amour ne s'oublie jamais, on le cherche toujours dans d'autres amours'. Est-il vrai que le premier amour sert de modèle pour toutes nos relations futures ?", "★ Gardez-vous un souvenir empreint de **nostalgie** ou de tendresse pour votre premier amour ?"),
            ("La chanson dit : 'L'enfant qu'on est resté frémira toujours au nom de cet amour'. Pourquoi les émotions vécues à l'adolescence gardent-elles une telle fraîcheur et une **empreinte** si forte ?", "★ Pensez-vous qu'il y ait une part **d'innocence** que l'on perd définitivement en grandissant ?"),
            ("Le texte évoque la quête permanente de ces premiers frissons ('toute sa vie on court après'). Cette recherche de la **pureté** initiale ne risque-t-elle pas de décevoir face aux amours adultes ?", "★ Comment apprécier la maturité d'un amour présent sans le comparer à la **candeur** du passé ?"),
            ("Isabelle Aubret chante la beauté d'un souvenir qui fait 'rêver et trembler'. Pourquoi le temps qui passe embellit-il souvent nos premières histoires ?", "★ Avez-vous déjà recroisé un amour de jeunesse des années plus tard ? Qu'avez-vous ressenti ?"),
            ("La chanson a remporté l'Eurovision en 1962 par sa grande poésie. En quoi la simplicité des paroles exprime-t-elle **l'écho** universel du cœur humain ?", "★ Quelle chanson classique résume le mieux selon vous la magie des débuts amoureux ?")
        ],
        "round2": [
            "L'idée qu'un 'premier amour ne s'oublie jamais' est un mythe romantique : les amours de maturité sont souvent bien plus profonds. Débattons-en.",
            "Chercher toute sa vie le souvenir de son premier amour empêche d'aimer pleinement la personne qui partage notre présent. Qu'en pensez-vous ?",
            "L'innocence et la candeur des sentiments de jeunesse sont irremplaçables dans une vie. Partagez votre avis."
        ],
        "lang_focus_title": "La forme pronominale à valeur passive ('ne s'oublie jamais') et 'court après'",
        "lang_focus_desc": "Pour exprimer une vérité générale ou une règle universelle, on utilise la forme pronominale impersonnelle ('se faire', 's'oublier', 'se chercher').",
        "lang_focus_examples": [
            "Un premier amour ne s'oublie pas facilement.",
            "Cette histoire se raconte de génération en génération.",
            "Il court après un rêve de jeunesse depuis toujours."
        ],
        "final_challenge": "Rédigez une lettre poétique adressée à votre 'moi' de 15 ans pour lui parler de ce qu'est devenu son premier amour.",
        "mistakes": [
            ("Un premier amour ne <span class=\"mistake-highlight\">s'oublie pas jamais</span>.", "Un premier amour ne <span class=\"mistake-highlight\">s'oublie jamais</span>.", "(N'associez pas 'pas' et 'jamais' dans la même négation.)"),
            ("On court <span class=\"mistake-highlight\">après de</span> ce souvenir.", "On court <span class=\"mistake-highlight\">après</span> ce souvenir.", "(Utilisez 'après' directement devant le nom sans préposition 'de'.)"),
            ("Il se rappelle <span class=\"mistake-highlight\">de son</span> premier amour.", "Il se rappelle <span class=\"mistake-highlight\">son</span> premier amour.", "(Le verbe 'se rappeler' prend un complément direct sans 'de'.)")
        ]
    },

    "voila.html": {
        "title_theme": "Authenticité & Expression de soi",
        "theme_bullets": ["La mise à nu artistique", "La recherche de reconnaissance", "La voix personnelle", "La vulnérabilité assumée"],
        "vocab": [
            {"word": "L'authenticité", "def": "Qualité de ce qui est vrai, sincère et sans artifice.", "ex": "Barbara Pravi chante avec une authenticité qui bouleverse l'auditeur.", "opp": "L'artifice"},
            {"word": "La vulnérabilité", "def": "Capacité d'accepter ses faiblesses et d'exposer son cœur.", "ex": "Elle transforme sa vulnérabilité en une force artistique majeure.", "opp": "L'invulnérabilité"},
            {"word": "Mettre à nu", "def": "Révéler entièrement ses sentiments profonds sans filtre.", "ex": "Se mettre à nu sur scène exige un courage immense.", "opp": "Masquer"},
            {"word": "Le cri", "def": "Expression intense et passionnée d'un besoin d'exister.", "ex": "Cette chanson est son cri de vérité lancé au monde entier.", "opp": "Le murmure"},
            {"word": "L'affirmation", "def": "Action de s'imposer et d'assumer qui l'on est vraiment.", "ex": "Chaque 'Voilà' retentit comme une affirmation de soi souveraine.", "opp": "Leffacement"},
            {"word": "L'arène", "def": "Lieu de combat symbolique ou scène publique exposée.", "ex": "Monter sur scène, c'est entrer dans l'arène du jugement des autres.", "opp": "L'intimité"},
            {"word": "Déposer", "def": "Mettre en confiance ce qu'on a de plus cher entre des mains.", "ex": "Elle dépose tout ce qu'elle possède dans ses paroles.", "opp": "Conserver"},
            {"word": "Le fardeau", "def": "Charge lourde à porter au niveau émotionnel.", "ex": "Exprimer son art permet de se libérer d'un lourd fardeau.", "opp": "Le soulagement"},
            {"word": "Singulier", "def": "Qui est unique, propre à une personne et différent.", "ex": "Sa voix possède un timbre singulier qui touche immédiatement.", "opp": "Banal"},
            {"word": "L'emprise", "def": "Dominance psychologique exercée par le regard d'autrui.", "ex": "Elle se délivre de l'emprise des attentes extérieures.", "opp": "La liberté"}
        ],
        "round1": [
            ("Dans 'Voilà', Barbara Pravi répète : 'Voilà, voilà qui je suis... me voilà même si mise à nue j'ai peur'. Pourquoi se **mettre à nu** sincèrement devant les autres demande-t-il autant de courage ?", "★ Avez-vous déjà ressenti cette peur de la **vulnérabilité** au moment d'exprimer vos sentiments profonds ?"),
            ("La chanteuse s'adresse directement au public : 'Regardez-moi, avant que je me déteste... c'est ma gueule, c'est mon cri'. L'artiste a-t-il absolument besoin du regard des autres pour exister ?", "★ Le besoin d'être vu et écouté est-il une quête **d'authenticité** ou une recherche d'approbation ?"),
            ("Le texte dit : 'Tout ce que j'ai, je le dépose là'. En quoi l'art est-il un espace où l'on peut **déposer** ses souffrances sans masque ?", "★ Quel moyen d'expression personnelle (écriture, parole, art) vous aide le plus à vous affirmer ?"),
            ("Barbara Pravi chante : 'Aimez-moi comme on aime un ami qui s'en va pour toujours'. Pourquoi la peur de l'oubli nourrit-elle la création artistique ?", "★ Est-il possible de vivre pleinement sa vie sans chercher l'admiration ou la validation des autres ?"),
            ("Le final de la chanson monte en puissance avec une ferveur impressionnante. En quoi l'expression **singulière** de soi peut-elle atteindre une dimension universelle ?", "★ Quelle prestation scénique ou musicale vous a le plus impressionné par son intensité émotionnelle ?")
        ],
        "round2": [
            "La recherche absolue d'authenticité dans la société actuelle est devenue une injonction paradoxale qui crée de l'anxiété. Débattons-en.",
            "Se mettre totalement 'à nu' devant les autres est une prise de risque inutile qui nous expose à des blessures évitables. Qu'en pensez-vous ?",
            "Sans une volonté farouche de se faire entendre par son propre **cri**, il est impossible de faire respecter son individualité. Partagez votre avis."
        ],
        "lang_focus_title": "L'impératif direct et les pronoms enclitiques ('Regardez-moi', 'Écoutez-moi')",
        "lang_focus_desc": "Pour lancer un appel vibrant à l'attention, on utilise l'impératif accompagné du pronom tonique relié par un trait d'union (ex: 'Regardez-moi', 'Écoutez-moi', 'Parlez-moi').",
        "lang_focus_examples": [
            "Regardez-moi bien et écoutez ce que j'ai à vous dire.",
            "Donnez-moi une seule raison de douter de son authenticité.",
            "Parlez-moi de vos rêves les plus secrets sans crainte."
        ],
        "final_challenge": "En soliste ou duos, présentez une courte plaidoirie passionnée de 1 minute où vous vous présentez au monde sans artifice en commençant par 'Voilà qui je suis...'.",
        "mistakes": [
            ("Regardez <span class=\"mistake-highlight\">me</span> s'il vous plaît.", "Regardez-<span class=\"mistake-highlight\">moi</span> s'il vous plaît.", "(À l'impératif affirmatif, utilisez le pronom tonique 'moi' après le verbe avec un trait d'union.)"),
            ("J'ai peur <span class=\"mistake-highlight\">de me mettre</span> à nu.", "J'ai peur <span class=\"mistake-highlight\">de me mettre</span> à nu.", "(C'est parfait ! Se mettre à nu est l'expression consacrée.)"),
            ("Elle chante <span class=\"mistake-highlight\">avec de l'</span>authenticité.", "Elle chante <span class=\"mistake-highlight\">avec</span> authenticité.", "(Après 'avec' exprimant la manière, l'article est souvent omis devant un nom abstrait.)")
        ]
    }
}


def build_vocab_html(vocab_list):
    cards_html = []

    # 5 Key concepts
    cards_html.append('<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo);">❤️ Concepts clés &amp; Émotions</h3>')
    for item in vocab_list[:5]:
        opp_html = f'<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">{item["opp"]}</span></div>' if "opp" in item else ''
        w_esc = item['word'].replace("'", "\\'")
        d_esc = item['def'].replace("'", "\\'")
        e_esc = item['ex'].replace("'", "\\'")
        card = f'''<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">{item['word']}</div>
<div class="vocab-def">{item['def']}</div>
<div class="vocab-example">{item['ex']}</div>
{opp_html}
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{w_esc}', definition:'{d_esc}', example:'{e_esc}'}}, this)">+ Dictionary</button>
</div>'''
        cards_html.append(card)

    # 5 Actions/Life
    cards_html.append('<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo);">🗣️ Vie, Actions &amp; Connexion</h3>')
    for item in vocab_list[5:]:
        opp_html = f'<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">{item["opp"]}</span></div>' if "opp" in item else ''
        w_esc = item['word'].replace("'", "\\'")
        d_esc = item['def'].replace("'", "\\'")
        e_esc = item['ex'].replace("'", "\\'")
        card = f'''<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">{item['word']}</div>
<div class="vocab-def">{item['def']}</div>
<div class="vocab-example">{item['ex']}</div>
{opp_html}
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{w_esc}', definition:'{d_esc}', example:'{e_esc}'}}, this)">+ Dictionary</button>
</div>'''
        cards_html.append(card)

    return f'''<div class="round-block open" id="vocabulary">
      <div class="round-header" style="background:#E1F5EE; cursor:pointer;" onclick="COSY.toggleRound('vocabulary')">
        <span>📚 Étape 2 : Vocabulaire</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
        <div class="vocab-grid-10">
        {"\n".join(cards_html)}
        </div>
      </div>
    </div>'''


def build_discussion_html(round1_items, round2_items):
    r1_html = []
    for main_q, pers_q in round1_items:
        item = f'''<div class="round-item"><div class="round-item-main">{main_q}</div>
<div class="round-item-personal">{pers_q}</div>
</div>'''
        r1_html.append(item)

    r2_html = []
    for debate_q in round2_items:
        item = f'''<div class="round-item"><div class="round-item-main">{debate_q}</div>
</div>'''
        r2_html.append(item)

    return f'''<div class="round-block open" id="discussion">
      <div class="round-header" style="background:#EEEDFE; cursor:pointer;" onclick="COSY.toggleRound('discussion')">
        <span>💬 Étape 4 : Discussion</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
        <div class="round-1" style="margin-bottom: 2rem;">
          <h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
{"\n".join(r1_html)}
        </div>
        <div class="round-2" style="margin-top: 2rem;">
          <h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
{"\n".join(r2_html)}
        </div>
      </div>
    </div>'''


def build_lang_focus_html(title, desc, examples):
    ex_html = "\n".join([f'<li style="margin-bottom: 0.5rem; font-size: 0.9rem;">{ex}</li>' for ex in examples])
    return f'''<div class="round-block open" id="lang-focus">
      <div class="round-header" style="background:#FFF9E6; cursor:pointer;" onclick="COSY.toggleRound('lang-focus')">
        <span>✨ Étape 5 : Point de langue</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
        <div style="background: var(--cream); border-left: 4px solid var(--indigo); padding: 1.5rem; border-radius: 0 16px 16px 0; margin-bottom: 1.5rem;">
          <h3 style="margin-top: 0; font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--indigo);">Focus linguistique : {title}</h3>
          <p style="font-size: 0.92rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1rem;">{desc}</p>
          <strong style="font-size: 0.85rem; text-transform: uppercase; color: var(--muted); letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Exemples pratiques :</strong>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--indigo);">
            {ex_html}
          </ul>
        </div>
      </div>
    </div>'''


def build_final_challenge_html(text):
    return f'''<div class="round-block open" id="final-challenge">
      <div class="round-header" style="background:#FEEAEA; cursor:pointer;" onclick="COSY.toggleRound('final-challenge')">
        <span>🎭 Étape 6 : Défi final</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
        <div style="background: var(--cream); border: 2px dashed var(--indigo); padding: 1.5rem; border-radius: 16px; display: flex; align-items: flex-start; gap: 1rem;">
          <span style="font-size: 2rem;">🎭</span>
          <div>
            <p style="margin-top: 0; font-size: 1rem; line-height: 1.6; color: var(--ink); font-weight: 500;">{text}</p>
          </div>
        </div>
      </div>
    </div>'''


def build_mistakes_html(mistakes_list):
    items_html = []
    for wrong, right, note in mistakes_list:
        item = f'''<div class="mistake-item">
            <span class="mistake-wrong">{wrong}</span>
            <span class="mistake-arrow">→</span>
            <span class="mistake-right">{right}</span>
            <span class="mistake-note-text">{note}</span>
          </div>'''
        items_html.append(item)

    return f'''<div class="mistake-block open" id="s-mistakes">
      <div class="mistake-header" onclick="COSY.toggleBlock('s-mistakes')">
        <span>✏️ Notes du Professeur (Corrections Linguistiques)</span><span class="round-toggle">▲</span>
      </div>
      <div class="mistake-body" style="display:block;">
        {"\n".join(items_html)}
      </div>
    </div>'''


def build_theme_box_html(title_theme, theme_bullets):
    bullets_html = "\n".join([f'      <li>{b}</li>' for b in theme_bullets])
    return f'''<div class="theme-box" style="background: var(--cream); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; border: 1px dashed var(--border);">
    <h3 style="margin-top:0; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Thème: {title_theme}</h3>
    <p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--ink-soft);">Nous allons discuter de:</p>
    <ul style="margin:0; padding-left:1.2rem; font-size:0.9rem; color:var(--ink-soft);">
{bullets_html}
    </ul>
  </div>'''


def process_file(filename, data):
    filepath = os.path.join(BASE_DIR, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    content = open(filepath, 'r', encoding='utf-8').read()

    # 1. Theme Box
    new_theme_box = build_theme_box_html(data["title_theme"], data["theme_bullets"])
    content = re.sub(
        r'<div class="theme-box".*?</div>(?=\s*<div class="speaking-time-gauge")',
        new_theme_box,
        content,
        flags=re.DOTALL
    )

    # 2. Vocab block
    new_vocab = build_vocab_html(data["vocab"])
    content = re.sub(
        r'<div class="round-block[^"]*" id="vocabulary">.*?</div>\n    </div>',
        new_vocab,
        content,
        flags=re.DOTALL
    )

    # 3. Discussion block
    new_discussion = build_discussion_html(data["round1"], data["round2"])
    # Convert markdown bold **word** to <strong>word</strong>
    new_discussion = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', new_discussion)
    content = re.sub(
        r'<div class="round-block[^"]*" id="discussion">.*?</div>\n    </div>',
        new_discussion,
        content,
        flags=re.DOTALL
    )

    # 4. Lang focus block
    new_lang_focus = build_lang_focus_html(data["lang_focus_title"], data["lang_focus_desc"], data["lang_focus_examples"])
    content = re.sub(
        r'<div class="round-block[^"]*" id="lang-focus">.*?</div>\n    </div>',
        new_lang_focus,
        content,
        flags=re.DOTALL
    )

    # 5. Final challenge block
    new_final = build_final_challenge_html(data["final_challenge"])
    content = re.sub(
        r'<div class="round-block[^"]*" id="final-challenge">.*?</div>\n    </div>',
        new_final,
        content,
        flags=re.DOTALL
    )

    # 6. Mistakes block
    new_mistakes = build_mistakes_html(data["mistakes"])
    content = re.sub(
        r'<div class="mistake-block[^"]*" id="s-mistakes">.*?</div>\n    </div>',
        new_mistakes,
        content,
        flags=re.DOTALL
    )

    open(filepath, 'w', encoding='utf-8').write(content)
    print(f"Successfully updated: {filename}")


def main():
    for filename, data in DATA.items():
        process_file(filename, data)

if __name__ == "__main__":
    main()

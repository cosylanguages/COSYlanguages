import os
import re

FR_DIR = "apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/fr/"

DATA = {
    "angele-challenge": {
        "oui-ou-non": {
            "slug": "oui-ou-non",
            "theme_title": "❤️ Thème: L'hésitation amoureuse & L'attente numérique",
            "theme_bullets": ["Hésitation", "Ambiguïté", "Certitude", "Personal reflection"],
            "vocab": [
                {"word": "Hésitation", "def": "Action de balancer entre plusieurs partis ou décisions.", "ex": "Son hésitation constante devant son téléphone l'empêche de tourner la page.", "opp": "Décision"},
                {"word": "Ambiguïté", "def": "Caractère de ce qui prête à plusieurs interprétations.", "ex": "L'ambiguïté de ses messages entretient un faux espoir dommageable.", "opp": "Clarté"},
                {"word": "Signal", "def": "Indice ou geste transmettant une intention cachée.", "ex": "Elle cherche le moindre signal favorable dans ses publications en ligne.", "opp": "Silence"},
                {"word": "Attente", "def": "État de celui qui espère anxieusement un événement.", "ex": "L'attente d'une réponse transforme sa journée en une épreuve nerveuse.", "opp": "Délivrance"},
                {"word": "Certitude", "def": "Assurance pleine et entière de la vérité d'un fait.", "ex": "Elle réclame une certitude définitive pour pouvoir avancer sereinement.", "opp": "Doute"},
                {"word": "Orgueil", "def": "Sentiment exagéré de sa propre valeur et fierté.", "ex": "Son orgueil l'empêche d'avouer à quel point cette situation la blesse.", "opp": "Humilité"},
                {"word": "Réseau", "def": "Plateforme numérique de communication et d'affichage social.", "ex": "Les réseaux sociaux amplifient les malentendus et l'anxiété amoureuse.", "opp": "Isolement"},
                {"word": "Silence", "def": "Absence de réponse, de bruit ou de réaction explicite.", "ex": "Le silence prolongé de son interlocuteur est plus lourd qu'un refus.", "opp": "Dialogue"},
                {"word": "Dilemme", "def": "Choix difficile entre deux options également insatisfaisantes.", "ex": "Elle fait face au dilemme de relancer ou d'abandonner définitivement.", "opp": "Certitude"},
                {"word": "Frustration", "def": "Sentiment de déception face à un obstacle insurmontable.", "ex": "Ne pas obtenir de réponse directe provoque une profonde frustration.", "opp": "Satisfaction"}
            ],
            "round1": [
                ("Dans 'Oui ou non', Angèle décrit l'obsession de scruter les messages sans réponse. Comment l'incertitude numérique amplifie-t-elle l'<strong>hésitation</strong> amoureuse ?", "★ Avez-vous déjà vécu une situation où le <strong>silence</strong> d'une personne vous a rendu anxieux ?"),
                ("Les paroles opposent la clarté d'un 'oui ou non' à l'<strong>ambiguïté</strong> des demi-mesures. Pourquoi est-il parfois si difficile d'exiger une réponse franche ?", "★ Préférez-vous une vérité blessante immédiate ou une douce <strong>attente</strong> ?"),
                ("Angèle analyse le jeu des apparitions sur les <strong>réseaux</strong> sociaux comme des messages cachés. Est-ce que décoder chaque <strong>signal</strong> virtuel détruit la spontanéité ?", "★ Selon vous, les réseaux sociaux facilitent-ils ou compliquent-ils la <strong>certitude</strong> sentimentale ?"),
                ("La chanson montre que ravaler son <strong>orgueil</strong> pour demander une explication demande du courage. Quand faut-il insister et quand faut-il renoncer ?", "★ Comment gérez-vous votre <strong>orgueil</strong> lorsque vous faites le premier pas ?"),
                ("Le refrain exprime un vrai <strong>dilemme</strong> entre l'espoir d'une suite et la peur du rejet. Comment faire face à la <strong>frustration</strong> de ne pas contrôler la décision de l'autre ?", "★ Quelle est la meilleure stratégie pour dépasser la <strong>frustration</strong> de l'incertitude ?")
            ],
            "round2": [
                "L'abondance des moyens de communication modernes a ironiquement augmenté l'<strong>ambiguïté</strong> et l'<strong>hésitation</strong> dans les relations amoureuses. Débattons-en.",
                "Demander une réponse catégorique par 'oui ou non' est le seul moyen de préserver son <strong>orgueil</strong> et d'éviter un <strong>dilemme</strong> sans fin. Qu'en pensez-vous ?",
                "Le <strong>silence</strong> sur les réseaux sociaux doit être interprété comme un refus clair plutôt que comme une simple <strong>attente</strong>. Partagez votre avis."
            ],
            "lang_focus_title": "L'expression du dilemme et de l'alternative",
            "lang_focus_desc": "Pour exprimer un choix difficile entre deux options ou une tentative infructueuse, on utilise des structures comme 'soit... soit...', 'avoir beau + infinitif' et 'il faut que + subjonctif'.",
            "lang_focus_examples": [
                "Soit tu me donnes une réponse claire, soit nous en restons là.",
                "J'ai beau regarder mon téléphone toutes les minutes, aucun message n'arrive.",
                "Il faut que tu fasses un choix catégorique pour libérer ton esprit."
            ],
            "challenge_text": "Le rendez-vous de la clarté : Jouez une scène où un ami hésite depuis des semaines à demander une explication franche à son partenaire. Donnez-lui des conseils fermes et bienveillants.",
            "mistakes": [
                ("Je suis incertain <span class=\"mistake-highlight\">de</span> qu'il va répondre", "Je suis incertain s'il va répondre / de ce qu'il va répondre", "(Attention aux propositions complétives après un adjectif d'incertitude.)"),
                ("Il me répond jamais <span class=\"mistake-highlight\">sur</span> les réseaux", "Il ne me répond jamais sur les réseaux", "(N'oubliez pas la particule 'ne' dans la négation 'ne... jamais' à l'écrit.)"),
                ("J'ai attendu <span class=\"mistake-highlight\">pour</span> deux heures", "J'ai attendu pendant deux heures", "(Pour exprimer une durée écoulée dans le passé, utilisez la préposition 'pendant'.)")
            ]
        },
        "balance-ton-quoi": {
            "slug": "balance-ton-quoi",
            "theme_title": "❤️ Thème: Le sexisme ordinaire, Le consentement & Le respect",
            "theme_bullets": ["Sexisme", "Consentement", "Respect", "Personal reflection"],
            "vocab": [
                {"word": "Sexisme", "def": "Attitude de discrimination fondée sur le sexe ou le genre.", "ex": "Angèle dénonce le sexisme ordinaire véhiculé par des remarques déplacées.", "opp": "Égalité"},
                {"word": "Consentement", "def": "Accord explicite, libre et éclairé donné à une action.", "ex": "Le consentement doit être la base absolue de toutes les relations humaines.", "opp": "Contrainte"},
                {"word": "Stéréotype", "def": "Opinion toute faite et figée sur un groupe de personnes.", "ex": "La chanson déconstruit les stéréotypes sur ce qu'une femme devrait être.", "opp": "Individualité"},
                {"word": "Respect", "def": "Considération accordée à la dignité et aux droits de chacun.", "ex": "Exiger le respect mutuel est une condition essentielle du vivre-ensemble.", "opp": "Mépris"},
                {"word": "Égalité", "def": "Absence de discrimination et équivalence des droits.", "ex": "L'égalité réelle s'obtient par la prise de conscience et le changement des lois.", "opp": "Inégalité"},
                {"word": "Légitimité", "def": "Qualité de ce qui est fondé en droit, en justice ou en raison.", "ex": "Elle affirme la légitimité des femmes à s'exprimer sans crainte.", "opp": "Illégitimité"},
                {"word": "Éducation", "def": "Transmission des valeurs morales, sociales et intellectuelles.", "ex": "L'éducation au respect commence dès le plus jeune âge à l'école.", "opp": "Ignorance"},
                {"word": "Provocation", "def": "Comportement visant à susciter une réaction ou un débat.", "ex": "Le clip utilise la provocation humoristique pour faire réfléchir le public.", "opp": "Apaisement"},
                {"word": "Préjugé", "def": "Jugement préconçu adopté sans examen critique préalable.", "ex": "Combattre les préjugés demande du dialogue et de l'empathie.", "opp": "Objectivité"},
                {"word": "Empathie", "def": "Capacité intuitive de se mettre à la place d'autrui.", "ex": "Manquer d'empathie empêche de comprendre la portée de ses propres mots.", "opp": "Indifférence"}
            ],
            "round1": [
                ("Angèle dénonce le <strong>sexisme</strong> ordinaire et les remarques paternalistes dans la société. Pourquoi ces comportements sont-ils encore trop souvent banalisés ?", "★ Comment réagissez-vous quand vous entendez un <strong>stéréotype</strong> véhiculé sur le ton de l'humour ?"),
                ("Le clip et la chanson mettent l'accent sur la notion fondamentale de <strong>consentement</strong>. Pourquoi l'<strong>éducation</strong> au consentement est-elle cruciale dès le plus jeune âge ?", "★ Selon vous, comment l'<strong>éducation</strong> peut-elle faire évoluer les mentalités durablement ?"),
                ("La phrase 'Même si tu parles mal des filles, je sais qu'au fond tu as besoin de <strong>respect</strong>' remet en question la <strong>provocation</strong>. Peut-on exiger le respect sans l'accorder ?", "★ Comment définissez-vous le <strong>respect</strong> mutuel dans les relations de tous les jours ?"),
                ("'Balance ton quoi' utilise l'ironie pour contester les <strong>préjugés</strong> sur les femmes indépendantes. En quoi l'humour est-il un outil puissant face au manque d'<strong>empathie</strong> ?", "★ Avez-vous déjà utilisé l'humour pour déconstruire un <strong>préjugé</strong> gênant ?"),
                ("La chanson réclame une véritable <strong>égalité</strong> plutôt qu'un traitement de faveur. Pourquoi la recherche de <strong>légitimité</strong> passe-t-elle par la prise de parole publique ?", "★ Qu'est-ce qui donne à une cause sociale sa pleine <strong>légitimité</strong> à vos yeux ?")
            ],
            "round2": [
                "L'humour et la satire pop comme dans 'Balance ton quoi' sont plus efficaces pour combattre le <strong>sexisme</strong> que des discours théoriques. Débattons-en.",
                "La dénonciation publique des comportements inappropriés est indispensable pour établir un réel <strong>respect</strong> et une <strong>égalité</strong>. Qu'en pensez-vous ?",
                "Les <strong>stéréotypes</strong> de genre découlent avant tout d'un manque d'<strong>éducation</strong> et d'<strong>empathie</strong> dès l'enfance. Partagez votre avis."
            ],
            "lang_focus_title": "L'expression de l'opposition et de la concession",
            "lang_focus_desc": "Pour exprimer une concession ou opposer deux idées, on emploie 'même si + indicatif', 'bien que + subjonctif' ou la tournure 'avoir beau + infinitif'.",
            "lang_focus_examples": [
                "Même si tu répètes ces stéréotypes, tu sais qu'ils sont faux.",
                "Bien que la chanson soit entraînante, son message reste profondément engagé.",
                "Ils ont beau minimiser le problème, les mentalités finissent par changer."
            ],
            "challenge_text": "L'académie de l'égalité : Mettez en scène un cours d'anti-sexisme humoristique inspiré du clip. Expliquez avec ironie et clarté à un collègue pourquoi certaines expressions doivent changer.",
            "mistakes": [
                ("Il faut que les gens <span class=\"mistake-highlight\">comprends</span> le consentement", "Il faut que les gens comprennent le consentement", "(Utilisez le subjonctif présent 'comprennent' après la tournure impersonnelle 'il faut que'.)"),
                ("Elle se bat <span class=\"mistake-highlight\">pour l'égalité de</span> genre", "Elle se bat pour l'égalité des genres", "(Utilisez l'article défini contracté 'des' au pluriel : l'égalité des genres.)"),
                ("Même <span class=\"mistake-highlight\">si que</span> c'est difficile, il faut parler", "Même si c'est difficile, il faut parler", "(Ne rajoutez pas la conjonction 'que' après 'même si'.)")
            ]
        }
    },
    "la-zarra-challenge": {
        "diva": {
            "slug": "diva",
            "theme_title": "❤️ Thème: La désillusion amoureuse, La fierté & Le masque de diva",
            "theme_bullets": ["Désillusion", "Fierté", "Résilience", "Personal reflection"],
            "vocab": [
                {"word": "Désillusion", "def": "Perte d'une illusion amère face à la réalité.", "ex": "Dans 'Évidemment', La Zarra exprime la désillusion après de fausses promesses.", "opp": "Enchantement"},
                {"word": "Fierté", "def": "Sentiment élevé de sa propre dignité et valeur.", "ex": "Sa fierté retrouvée lui permet de relever la tête malgré la déception.", "opp": "Honte"},
                {"word": "Masque", "def": "Apparence trompeuse destinée à cacher la vulnérabilité.", "ex": "Elle revêt un masque d'élégance pour ne pas montrer sa peine.", "opp": "Sincérité"},
                {"word": "Élégance", "def": "Grâce et distinction raffinée dans l'attitude.", "ex": "L'élégance de sa posture contraste avec la douleur de son texte.", "opp": "Vulgarité"},
                {"word": "Résilience", "def": "Capacité à surmonter les épreuves et les blessures.", "ex": "Sa résilience fait d'elle une diva forte et indépendante.", "opp": "Fragilité"},
                {"word": "Promesse", "def": "Engagement verbal solennel envers autrui.", "ex": "Les belles promesses inutiles finissent toujours par s'envoler.", "opp": "Trahison"},
                {"word": "Regret", "def": "Sentiment douloureux d'avoir accordé sa confiance.", "ex": "Elle refuse de sombrer dans le regret amertumé de son passé.", "opp": "Satisfaction"},
                {"word": "Solitude", "def": "État d'isolement choisi ou subi sereinement.", "ex": "La solitude de la scène est le prix à payer pour sa liberté.", "opp": "Compagnie"},
                {"word": "Rancœur", "def": "Ressentiment tenace accompagné d'amertume.", "ex": "Elle préfère chanter sa liberté plutôt que d'entretenir la rancœur.", "opp": "Pardon"},
                {"word": "Transformation", "def": "Changement profond d'attitude ou de personnalité.", "ex": "Cette épreuve amoureuse accomplit une véritable transformation.", "opp": "Stagnation"}
            ],
            "round1": [
                ("Dans 'Évidemment', La Zarra chante la <strong>désillusion</strong> de croire aux promesses grandiloquentes. Pourquoi les belles paroles mènent-elles souvent aux plus grands <strong>regrets</strong> ?", "★ Avez-vous déjà transformé une <strong>désillusion</strong> en une source de force ?"),
                ("La chanteuse arbore un <strong>masque</strong> d'<strong>élégance</strong> et de diva pour masquer sa vulnérabilité. Est-ce une défense nécessaire face aux déceptions ?", "★ Dans quelles situations portez-vous un <strong>masque</strong> d'assurance pour protéger vos émotions ?"),
                ("Les paroles évoquent le passage de la naïveté à une <strong>fierté</strong> inébranlable. Comment préserver sa <strong>fierté</strong> sans devenir cynique ?", "★ Qu'est-ce qui vous aide à retrouver votre <strong>fierté</strong> après un échec personnel ?"),
                ("'Évidemment' illustre une grande <strong>résilience</strong> face à la <strong>solitude</strong>. L'isolement provisoire est-il indispensable pour se reconstruire ?", "★ Voyez-vous la <strong>solitude</strong> comme une épreuve ou comme une opportunité d'introspection ?"),
                ("La Zarra refuse de garder de la <strong>rancœur</strong> tout en accomplissant une vraie <strong>transformation</strong>. Peut-on tourner la page sans pardonner ?", "★ Selon vous, la <strong>transformation</strong> personnelle nécessite-t-elle de couper les ponts avec le passé ?")
            ],
            "round2": [
                "Développer un <strong>masque</strong> de résignation élégante est l'unique moyen de survivre à la <strong>désillusion</strong> sentimentale. Débattons-en.",
                "La véritable <strong>fierté</strong> consiste à assumer sa vulnérabilité plutôt qu'à jouer le rôle d'une diva inaccessible. Qu'en pensez-vous ?",
                "Les épreuves amoureuses sont le catalyseur le plus puissant pour une <strong>transformation</strong> personnelle réussie. Partagez votre avis."
            ],
            "lang_focus_title": "L'expression du regret et de la certitude ironique",
            "lang_focus_desc": "Pour exprimer la certitude ironique ou un regret rétroactif, on utilise 'évidemment', 'avoir beau + infinitif' et le conditionnel passé ('j'aurais dû').",
            "lang_focus_examples": [
                "Évidemment que tout était trop beau pour être vrai.",
                "J'aurais dû me méfier de ses promesses grandiloquentes.",
                "J'ai beau regretter mes choix, la vie continue malgré tout."
            ],
            "challenge_text": "Le récital de la diva : Jouez une interview de star après un grand chagrin d'amour. Répondez aux questions des journalistes avec une élégance souveraine et une fierté assumée.",
            "mistakes": [
                ("J'aurais <span class=\"mistake-highlight\">dû de</span> savoir la vérité", "J'aurais dû savoir la vérité", "(Le verbe 'devoir' à l'infinitif se construit directement sans préposition 'de'.)"),
                ("Elle est fière <span class=\"mistake-highlight\">de son</span> travail", "Elle a de la fierté pour son parcours", "(Veillez à bien employer 'être fier/fière de' ou le nom 'la fierté'.)"),
                ("Malgré <span class=\"mistake-highlight\">que</span> la douleur est forte", "Malgré la douleur / Bien que la douleur soit forte", "('Malgré' est suivi d'un groupe nominal, pas d'une proposition avec 'que'.)")
            ]
        },
        "tu-ten-iras": {
            "slug": "tu-ten-iras",
            "theme_title": "❤️ Thème: L'éphémère amourette & Le pressentiment de la rupture",
            "theme_bullets": ["Éphémère", "Pressentiment", "Détachement", "Personal reflection"],
            "vocab": [
                {"word": "Éphémère", "def": "Qui ne dure que très peu de temps.", "ex": "La Zarra chante la beauté tragique d'un amour éphémère voué à s'éteindre.", "opp": "Éternel"},
                {"word": "Pressentiment", "def": "Sentiment intuitif d'un événement à venir.", "ex": "Elle est hantée par le pressentiment lucide de son départ imminente.", "opp": "Certitude"},
                {"word": "Libération", "def": "Action de se délivrer d'une attente pesante.", "ex": "Accepter la fin d'une histoire apporte une curieuse forme de libération.", "opp": "Captivité"},
                {"word": "Détachement", "def": "Attitude de sérénité et d'indifférence élégante.", "ex": "Elle affiche un détachement poli pour ne pas se laisser détruire.", "opp": "Attachement"},
                {"word": "Nostalgie", "def": "Regret mélancolique d'un bonheur passé.", "ex": "La nostalgie des premiers jours ravive la douleur du présent.", "opp": "Projection"},
                {"word": "Passion", "def": "Sentiment amoureux intense et dévorant.", "ex": "Une grande passion se consume souvent trop vite dans les flammes.", "opp": "Indifférence"},
                {"word": "Inévitable", "def": "Ce qu'on ne peut pas éviter ni empêcher.", "ex": "Elle fait face à l'inévitable dénouement de leur romance.", "opp": "Évitable"},
                {"word": "Fuite", "def": "Action de s'éloigner précipitamment pour échapper.", "ex": "La fuite de l'autre est une réponse à sa propre peur de s'engager.", "opp": "Engagement"},
                {"word": "Franchise", "def": "Qualité de celui qui parle avec honnêteté crue.", "ex": "Sa franchise lui permet d'affronter la réalité sans se voiler la face.", "opp": "Hypocrisie"},
                {"word": "Destin", "def": "Cours inéluctable de la vie et des événements.", "ex": "Elle accepte que leur rencontre n'était qu'une étape de son destin.", "opp": "Hasard"}
            ],
            "round1": [
                ("'Tu t'en iras' aborde le caractère <strong>éphémère</strong> des relations passionnelles. Faut-il profiter d'un bonheur court en sachant qu'il prendra fin ?", "★ Acceptez-vous facilement l'idée que certaines personnes ne font que passer de manière <strong>éphémère</strong> dans votre vie ?"),
                ("La narratrice exprime le <strong>pressentiment</strong> clair que son partenaire va partir. L'intuition en amour est-elle toujours fiable ou crée-t-elle la prophétie autoréalisatrice ?", "★ Écoutez-vous votre <strong>pressentiment</strong> quand vous sentez qu'une situation tourne mal ?"),
                ("Accepter l'<strong>inévitable</strong> départ apporte parfois une curieuse forme de <strong>libération</strong>. Pourquoi la fin d'une attente est-elle parfois un soulagement ?", "★ Avez-vous déjà ressenti de la <strong>libération</strong> après la conclusion d'un chapitre difficile ?"),
                ("La chanson oscille entre la ferveur de la <strong>passion</strong> et la froideur du <strong>détachement</strong>. Est-il possible d'aimer fort tout en gardant du <strong>détachement</strong> ?", "★ Trouvez-vous facile de maintenir un équilibre entre <strong>passion</strong> et raison ?"),
                ("La <strong>franchise</strong> de reconnaître que l'autre va fuir évite la <strong>nostalgie</strong> amère. La vérité crue vaut-elle mieux qu'une fausse promesse éternelle ?", "★ Préférez-vous la <strong>franchise</strong> douloureuse à un mensonge réconfortant ?")
            ],
            "round2": [
                "Savoir qu'une relation est <strong>éphémère</strong> lui donne plus de valeur et d'intensité qu'une promesse d'éternité. Débattons-en.",
                "Le <strong>détachement</strong> émotionnel est la seule protection efficace contre le chagrin de la <strong>fuite</strong> de l'autre. Qu'en pensez-vous ?",
                "L'intuition et le <strong>pressentiment</strong> nous trompent rarement sur le <strong>destin</strong> d'une histoire d'amour. Partagez votre avis."
            ],
            "lang_focus_title": "Le futur simple et l'inéluctable",
            "lang_focus_desc": "Pour exprimer une certitude sur l'avenir ou une rupture annoncée, on utilise le futur simple ('tu t'en iras', 'tu partiras') et des temporelles avec 'quand' ou 'dès que'.",
            "lang_focus_examples": [
                "Tu t'en iras dès que les premiers froids arriveront.",
                "Quand tu seras parti, je réapprendrai à vivre pour moi-même.",
                "Je sais que nous n'effacerons pas nos souvenirs si facilement."
            ],
            "challenge_text": "La lettre de départ : Rédigez ou interprétez un monologue poétique adressé à quelqu'un dont vous savez le départ imminente. Exprimez votre gratitude et votre liberté retrouvée.",
            "mistakes": [
                ("Quand tu <span class=\"mistake-highlight\">pars</span>, je serai triste", "Quand tu partiras, je serai triste", "(Après 'quand', utilisez le futur simple en français pour exprimer une action future.)"),
                ("Il s'en va <span class=\"mistake-highlight\">de la</span> maison", "Il s'en va de la maison / Il part de la maison", "(Le verbe pronominal 's'en aller' s'emploie de manière autonome ou avec 'de'.)"),
                ("C'est une histoire <span class=\"mistake-highlight\">très éphémérique</span>", "C'est une histoire très éphémère", "(L'adjectif correct en français est 'éphémère'.)")
            ]
        }
    },
    "fabienne-thibeault-challenge": {
        "la-complainte-de-la-serveuse-automate": {
            "slug": "la-complainte-de-la-serveuse-automate",
            "theme_title": "❤️ Thème: La déshumanisation du travail & Les rêves d'évasion",
            "theme_bullets": ["Automate", "Routine", "Rêve", "Personal reflection"],
            "vocab": [
                {"word": "Automate", "def": "Personne agissant de manière mécanique sans réflexion.", "ex": "Dans Starmania, la serveuse déplore de travailler comme un automate.", "opp": "Artiste"},
                {"word": "Routine", "def": "Habitude mécanique répétitive qui engendre l'ennui.", "ex": "La routine quotidienne étouffe ses aspirations créatives.", "opp": "Nouveauté"},
                {"word": "Rêve", "def": "Aspiration profonde à une existence différente.", "ex": "Son rêve secret est de devenir une grande artiste admirée.", "opp": "Réalité"},
                {"word": "Anonymat", "def": "État d'une personne sans notoriété ni reconnaissance.", "ex": "L'anonymat de la métropole lui pèse cruellement au quotidien.", "opp": "Célébrité"},
                {"word": "Évasion", "def": "Besoin de s'échapper d'un cadre de vie oppressant.", "ex": "La musique et le chant sont son unique moyen d'évasion.", "opp": "Enfermement"},
                {"word": "Frustration", "def": "Déception causée par l'impossibilité de réaliser ses désirs.", "ex": "Servir les autres crée une profonde frustration intérieure.", "opp": "Épanouissement"},
                {"word": "Célébrité", "def": "Statut d'une personne universellement connue.", "ex": "Elle aspire à la célébrité pour prouver sa propre valeur.", "opp": "Obscurité"},
                {"word": "Ambition", "def": "Désir ardent de réussir et d'atteindre le sommet.", "ex": "Son ambition artistique se heurte à la dureté de sa condition.", "opp": "Résignation"},
                {"word": "Métamorphose", "def": "Changement radical de vie ou de personnalité.", "ex": "Elle espère une métamorphose spectaculaire sous les projecteurs.", "opp": "Stagnation"},
                {"word": "Aliénation", "def": "Perte de sa liberté et de son identité au travail.", "ex": "L'aliénation du travail automatisé vide les individus de leur humanité.", "opp": "Émancipation"}
            ],
            "round1": [
                ("Dans 'La complainte de la serveuse automate', l'héroïne se décrit comme un <strong>automate</strong> au service des clients. Comment la <strong>routine</strong> professionnelle peut-elle étouffer l'individualité ?", "★ Avez-vous déjà eu l'impression d'agir comme un <strong>automate</strong> dans votre travail ou vos tâches ?"),
                ("Le cri 'J'aurais voulu être un artiste' exprime le rejet de l'<strong>anonymat</strong>. Pourquoi le désir de <strong>célébrité</strong> est-il si présent dans la culture moderne ?", "★ Le besoin d'être reconnu par la société est-il une quête noble ou une illusion ?"),
                ("La chanson montre que le <strong>rêve</strong> est une forme d'<strong>évasion</strong> nécessaire pour survivre à la grisaille. Le rêve protège-t-il ou empêche-t-il d'agir dans le réel ?", "★ Quel est le <strong>rêve</strong> d'enfance auquel vous n'avez jamais tout à fait renoncé ?"),
                ("La serveuse ressent une profonde <strong>frustration</strong> face à l'écart entre sa vie réelle et son <strong>ambition</strong>. Comment canaliser la frustration de manière créative ?", "★ Comment gérez-vous le sentiment d'être à l'étroit dans votre rôle actuel ?"),
                ("Elle aspire à une <strong>métamorphose</strong> spectaculaire pour devenir une star. La <strong>métamorphose</strong> de sa vie demande-t-elle de tout risquer ?", "★ Seriez-vous prêt à tout changer du jour au lendemain pour réaliser votre passion ?")
            ],
            "round2": [
                "La <strong>routine</strong> du travail automatisé moderne est la principale cause d'aliénation et de perte de sens. Débattons-en.",
                "La quête de <strong>célébrité</strong> n'est souvent qu'un besoin désespéré d'échapper à l'<strong>anonymat</strong> et à la solitude. Qu'en pensez-vous ?",
                "Les <strong>rêves</strong> d'<strong>évasion</strong> sont indispensables pour supporter la dureté du quotidien. Partagez votre avis."
            ],
            "lang_focus_title": "Le conditionnel passé et le regret d'un rêve",
            "lang_focus_desc": "Pour exprimer un souhait non réalisé ou un regret sur un parcours de vie, on emploie le conditionnel passé ('j'aurais voulu', 'j'aurais pu').",
            "lang_focus_examples": [
                "J'aurais voulu être un artiste pour pouvoir faire mon numéro.",
                "Si j'avais écouté mes instincts, j'aurais changé de voie plus tôt.",
                "Elle aurait pu devenir célèbre avec un peu plus de chance."
            ],
            "challenge_text": "L'audition de la dernière chance : Incarnez la serveuse qui passe enfin une audition devant un producteur exigeant. Exprimez toute sa passion et sa volonté de briser la routine.",
            "mistakes": [
                ("J'aurais <span class=\"mistake-highlight\">voulu de être</span> chanteur", "J'aurais voulu être chanteur", "(Le verbe 'vouloir' se construit directement avec un infinitif sans préposition.)"),
                ("Si j'avais le choix, je <span class=\"mistake-highlight\">serai</span> artiste", "Si j'avais le choix, je serais artiste", "(Utilisez le conditionnel présent '-ais/-ait/-ions/-iez/-aient' après une hypothèse à l'imparfait.)"),
                ("Elle travaille <span class=\"mistake-highlight\">comme une automate</span>", "Elle travaille comme un automate", "(Le nom 'automate' est de genre masculin.)")
            ]
        },
        "le-monde-est-stone": {
            "slug": "le-monde-est-stone",
            "theme_title": "❤️ Thème: Le vertige urbain, L'aliénation & La quête de sens",
            "theme_bullets": ["Stone", "Vertige", "Solitude", "Personal reflection"],
            "vocab": [
                {"word": "Stone", "def": "État de stupeur, d'engourdissement ou d'hébétude.", "ex": "Dans 'Le monde est stone', la chanteuse exprime un vertige face à la ville.", "opp": "Éveillé"},
                {"word": "Vertige", "def": "Sensation de perte d'équilibre ou de désorientation morale.", "ex": "Les gratte-ciels immenses provoquent un véritable vertige existentiel.", "opp": "Stabilité"},
                {"word": "Illusion", "def": "Fausse perception ou croyance déconnectée du réel.", "ex": "Le monde urbain promet le bonheur mais n'offre que des illusions.", "opp": "Réalité"},
                {"word": "Solitude", "def": "Sentiment d'isolement lourd au milieu de la foule.", "ex": "La solitude dans les grandes métropoles est la plus difficile à porter.", "opp": "Solidarité"},
                {"word": "Désemparé", "def": "Privé de repères, qui ne sait quelle décision prendre.", "ex": "Elle se retrouve désemparée face à la froideur des tours de béton.", "opp": "Sûr de soi"},
                {"word": "Éveil", "def": "Prise de conscience soudaine ou sortie de l'engourdissement.", "ex": "Elle espère un éveil collectif pour briser cette léthargie.", "opp": "Sommeil"},
                {"word": "Obscurité", "def": "Absence de lumière ou manque de clarté spirituelle.", "ex": "L'obscurité de la nuit urbaine reflète son désarroi intérieur.", "opp": "Lumière"},
                {"word": "Recherche", "def": "Quête obstinée de sens, de vérité ou de beauté.", "ex": "Sa chanson est une recherche désespérée d'un peu d'humanité.", "opp": "Abandon"},
                {"word": "Espoir", "def": "Attente confiante d'une amélioration ou d'un renouveau.", "ex": "Malgré le désespoir ambiant, un brin d'espoir subsiste au fond du cœur.", "opp": "Désespoir"},
                {"word": "Absurdité", "def": "Caractère de ce qui manque de logique ou de sens.", "ex": "Elle contemple l'absurdité du rythme frénétique de la cité.", "opp": "Cohérence"}
            ],
            "round1": [
                ("'Le monde est stone' dépeint une jeunesse hébétée, figée dans un état <strong>stone</strong> face à la brutalité du monde. Pourquoi la ville moderne crée-t-elle ce <strong>vertige</strong> existentialiste ?", "★ Avez-vous déjà ressenti ce sentiment d'être <strong>stone</strong> ou dépassé par le rythme du monde ?"),
                ("La chanteuse exprime le sentiment d'être <strong>désemparé</strong> au milieu des gratte-ciels et de la foule. La <strong>solitude</strong> urbaine est-elle plus lourde que l'isolement géographique ?", "★ Comment vous ressourcez-vous quand la ville devient étouffante ?"),
                ("La chanson critique les fausses promesses et les <strong>illusions</strong> d'un système matérialiste. Est-il possible de trouver un sens sans succomber à l'<strong>obscurité</strong> ?", "★ Quelles sont les <strong>illusions</strong> de notre époque dont il faut se libérer selon vous ?"),
                ("Malgré l'abattement, il y a une <strong>recherche</strong> permanente de lumière et d'<strong>éveil</strong>. Qu'est-ce qui provoque un déclic ou un <strong>éveil</strong> personnel chez quelqu'un ?", "★ Quel événement a provoqué chez vous une prise de conscience importante ?"),
                ("Le morceau se termine sur une note suspendue entre désespoir et <strong>espoir</strong>. Comment maintenir l'<strong>espoir</strong> quand tout semble s'effondrer autour de nous ?", "★ Qu'est-ce qui nourrit votre <strong>espoir</strong> au quotidien ?")
            ],
            "round2": [
                "L'état de stupeur décrit par le terme <strong>stone</strong> est une réponse psychologique inévitable à l'hyper-sollicitation moderne. Débattons-en.",
                "La <strong>solitude</strong> dans les grandes métropoles est la maladie la plus destructrice du XXIe siècle. Qu'en pensez-vous ?",
                "L'<strong>espoir</strong> d'un monde meilleur nécessite d'abord d'accepter la fin des <strong>illusions</strong> idéologiques. Partagez votre avis."
            ],
            "lang_focus_title": "Les adjectifs d'état et les impressions impersonnelles",
            "lang_focus_desc": "Pour décrire une impression générale ou un état d'esprit face à l'environnement, on utilise 'être + adjectif' et 'me sembler + adjectif'.",
            "lang_focus_examples": [
                "Le monde me semble stone et totalement désorienté.",
                "Je me sens désemparé au milieu de cette foule anonyme.",
                "Il y a des moments où la ville paraît irréelle."
            ],
            "challenge_text": "La poésie de la métropole : Composez ou lisez un court poème slam dénonçant la solitude urbaine et appelant à retrouver de la chaleur humaine dans la ville.",
            "mistakes": [
                ("Le monde <span class=\"mistake-highlight\">est trop stone de</span> moi", "Le monde me semble stone / Je me sens stone face au monde", "('Stone' est un emprunt invariable utilisé comme attribut.)"),
                ("Je me sens <span class=\"mistake-highlight\">seul dans la</span> foule", "Je me sens seul au milieu de la foule", "(Utilisez la locution 'au milieu de' pour insister sur l'isolement au sein du groupe.)"),
                ("Il n'y a plus <span class=\"mistake-highlight\">des</span> espoirs", "Il n'y a plus d'espoir", "(Après une négation absolue, l'article partitif devient 'de' ou 'd''.)")
            ]
        },
        "un-garcon-pas-comme-les-autres": {
            "slug": "un-garcon-pas-comme-les-autres",
            "theme_title": "❤️ Thème: L'amour inconditionnel & L'acceptation de la différence",
            "theme_bullets": ["Marginalité", "Fascination", "Acceptation", "Personal reflection"],
            "vocab": [
                {"word": "Marginalité", "def": "Situation d'une personne vivant en dehors des normes sociales.", "ex": "Ziggy incarne une marginalité assumée qui fascine la narratrice.", "opp": "Conformisme"},
                {"word": "Obsession", "def": "Idée fixe et envahissante qui occupe tout l'esprit.", "ex": "Son amour pour un garçon inaccessible devient une obsession poignante.", "opp": "Détachement"},
                {"word": "Différence", "def": "Caractère de ce qui se distingue des autres individus.", "ex": "Elle aime Ziggy précisément pour sa différence et son originalité.", "opp": "Ressemblance"},
                {"word": "Fascination", "def": "Attraction irrésistible exercée par une personnalité.", "ex": "La fascination qu'il exerce sur elle dépasse la logique raisonnable.", "opp": "Répulsion"},
                {"word": "Incompréhension", "def": "Absence de partage ou de tolérance de l'entourage.", "ex": "Son entourage manifeste de l'incompréhension face à cet amour unilatéral.", "opp": "Compréhension"},
                {"word": "Dévouement", "def": "Attitude de fidélité absolue et désintéressée.", "ex": "Son dévouement envers Ziggy reste intact même sans réciprocité.", "opp": "Égoïsme"},
                {"word": "Singularité", "def": "Caractère unique et irremplaçable d'un être.", "ex": "La singularité de Ziggy en fait un être à part dans le monde.", "opp": "Banalité"},
                {"word": "Souffrance", "def": "Douleur morale provoquée par un amour impossible.", "ex": "Accepter qu'il en aime un autre implique une vraie souffrance.", "opp": "Joie"},
                {"word": "Idéalisation", "def": "Action de concevoir quelqu'un sous un jour parfait.", "ex": "L'idéalisation du partenaire masque les déceptions du quotidien.", "opp": "Lucidité"},
                {"word": "Acceptation", "def": "Fait d'accueillir l'autre tel qu'il est sans jugement.", "ex": "Son chant est une magnifique leçon d'acceptation inconditionnelle.", "opp": "Rejet"}
            ],
            "round1": [
                ("Dans 'Un garçon pas comme les autres' (Ziggy), la narratrice aime un homme marginal. Pourquoi la <strong>singularité</strong> et la <strong>différence</strong> attirent-elles parfois plus que la conformité ?", "★ Êtes-vous plus souvent attiré par la <strong>singularité</strong> des gens ou par leur stabilité ?"),
                ("La chanson décrit une véritable <strong>fascination</strong> amoureuse qui frôle l'<strong>obsession</strong>. Où se situe la frontière entre amour sincère et dépendance affective ?", "★ Selon vous, l'<strong>obsession</strong> romantique est-elle une preuve de passion ou une illusion destructrice ?"),
                ("Face à l'<strong>incompréhension</strong> de l'entourage, elle maintient un <strong>dévouement</strong> total. Faut-il écouter les avis extérieurs sur nos choix affectifs ?", "★ Comment réagissez-vous face à l'<strong>incompréhension</strong> de vos proches concernant vos choix de vie ?"),
                ("L'<strong>idéalisation</strong> du partenaire peut masquer une douloureuse <strong>souffrance</strong> d'être ignorée. Pourquoi s'accroche-t-on parfois à un amour impossible ?", "★ Comment sortir de l'<strong>idéalisation</strong> pour voir la réalité en face ?"),
                ("La chanson offre une leçon touchante d'<strong>acceptation</strong> inconditionnelle. Aimer quelqu'un, est-ce l'accepter pleinement même s'il ne peut pas nous aimer en retour ?", "★ Qu'est-ce que l'<strong>acceptation</strong> de l'autre signifie pour vous au quotidien ?")
            ],
            "round2": [
                "L'amour pour un être pas comme les autres implique toujours une part de <strong>souffrance</strong> et de sacrifice. Débattons-en.",
                "L'<strong>idéalisation</strong> romantique empêche de construire des relations équilibrées basées sur la réalité. Qu'en pensez-vous ?",
                "L'<strong>acceptation</strong> inconditionnelle de la <strong>différence</strong> est la forme la plus haute d'amour. Partagez votre avis."
            ],
            "lang_focus_title": "La caractérisation et la comparaison négative",
            "lang_focus_desc": "Pour mettre en valeur la singularité de quelqu'un, on utilise des tournures comparatives négatives comme 'pas comme...', 'différent de...' et 'contrairement à...'.",
            "lang_focus_examples": [
                "C'est un garçon pas comme les autres, il vit selon ses propres règles.",
                "Différent de tous ceux que j'ai connus, il m'inspire un respect profond.",
                "Contrairement aux apparences, son monde intérieur est d'une grande richesse."
            ],
            "challenge_text": "La confidence amicale : Un ami vous avoue être amoureux d'une personne très différente des critères habituels de sa famille. Donnez-lui un soutien chaleureux et lucide.",
            "mistakes": [
                ("Il est un garçon pas comme <span class=\"mistake-highlight\">les autres garçons</span>", "C'est un garçon pas comme les autres", "(Évitez la répétition du nom en utilisant le pronom 'les autres'.)"),
                ("Elle est amoureuse <span class=\"mistake-highlight\">avec</span> lui", "Elle est amoureuse de lui", "(L'expression 'être amoureux' se construit obligatoirement avec la préposition 'de'.)"),
                ("Même <span class=\"mistake-highlight\">s'il ne m'aime pas</span>, je l'aime", "Même s'il ne m'aime pas, je l'aime", "(Placez correctement les pronoms personnels compléments avant le verbe conjugué.)")
            ]
        },
        "les-uns-contre-les-autres": {
            "slug": "les-uns-contre-les-autres",
            "theme_title": "❤️ Thème: Le besoin de tendresse & Le réconfort humain",
            "theme_bullets": ["Tendresse", "Étreinte", "Fraternité", "Personal reflection"],
            "vocab": [
                {"word": "Tendresse", "def": "Sentiment d'affection douce et bienveillante.", "ex": "Dans 'Les uns contre les autres', la tendresse apparaît comme un rempart.", "opp": "Brutalité"},
                {"word": "Chaleur", "def": "Sensation de réconfort humain et de présence physique.", "ex": "Chercher la chaleur de l'autre permet d'oublier le froid du monde.", "opp": "Froideur"},
                {"word": "Solitude", "def": "État d'isolement que la présence d'autrui tente d'apaiser.", "ex": "Chacun cherche à fuir sa propre solitude dans les bras de l'autre.", "opp": "Union"},
                {"word": "Étreinte", "def": "Action de serrer quelqu'un affectueusement dans ses bras.", "ex": "Une étreinte sincère offre un apaisement immédiat dans l'épreuve.", "opp": "Éloignement"},
                {"word": "Vulnérabilité", "def": "État de ce qui est fragile et exposé aux blessures.", "ex": "La nuit met à nu notre vulnérabilité et notre besoin de réconfort.", "opp": "Invulnérabilité"},
                {"word": "Réconfort", "def": "Soulagement apporté à la peine ou à l'angoisse.", "ex": "Se Blottir offre un réconfort passager mais essentiel.", "opp": "Affliction"},
                {"word": "Fraternité", "def": "Lien de solidarité humaine profonde et universelle.", "ex": "La chanson appelle à une vraie fraternité devant la fragilité de la vie.", "opp": "Hostilité"},
                {"word": "Illusion", "def": "Sentiment temporaire de protection contre l'angoisse.", "ex": "L'abri des bras de l'autre est une belle illusion réconfortante.", "opp": "Désillusion"},
                {"word": "Obscurité", "def": "Symbole de l'inconnu, du vide et de la peur nocturne.", "ex": "Face à l'obscurité, le rapprochement physique devient vital.", "opp": "Lumière"},
                {"word": "Proximité", "def": "Fait d'être proche physiquement ou émotionnellement.", "ex": "La proximité des corps apaise la solitude de l'esprit.", "opp": "Distance"}
            ],
            "round1": [
                ("'Les uns contre les autres' montre que la recherche de <strong>chaleur</strong> humaine est notre ultime rempart contre l'angoisse. Pourquoi le contact physique et la <strong>tendresse</strong> sont-ils si essentiels ?", "★ Quel est le geste de <strong>tendresse</strong> qui vous apporte le plus de réconfort ?"),
                ("La chanson rappelle que dans le noir, nous finissons tous par chercher une <strong>étreinte</strong>. Pourquoi la nuit met-elle à nu notre <strong>vulnérabilité</strong> ?", "★ Comment gérez-vous les moments de <strong>vulnérabilité</strong> le soir venus ?"),
                ("Le refrain met en lumière la <strong>solitude</strong> fondamentale que chacun tente de combler. La <strong>proximité</strong> physique peut-elle suffire à effacer la solitude intérieure ?", "★ Pensez-vous qu'on puisse être seul même en étant entouré ?"),
                ("Chercher du <strong>réconfort</strong> 'les uns contre les autres' crée un élan spontané de <strong>fraternité</strong>. Pourquoi attend-on souvent les épreuves pour se rapprocher ?", "★ Comment cultiver la <strong>fraternité</strong> au quotidien sans attendre les moments de crise ?"),
                ("La protection offerte par les bras de l'autre est-elle une belle <strong>illusion</strong> éphémère ou une force bien réelle ?", "★ Acceptez-vous la nature <strong>éphémère</strong> des moments d'apaisement ?")
            ],
            "round2": [
                "Le besoin de se blottir <strong>les uns contre les autres</strong> prouve que la solitude absolue est insupportable pour l'être humain. Débattons-en.",
                "La <strong>tendresse</strong> et l'<strong>étreinte</strong> sont des besoins biologiques aussi vitaux que se nourrir ou dormir. Qu'en pensez-vous ?",
                "La <strong>fraternité</strong> humaine naît de la prise de conscience de notre propre <strong>vulnérabilité</strong>. Partagez votre avis."
            ],
            "lang_focus_title": "Les pronoms réciproques et indéfinis",
            "lang_focus_desc": "Pour exprimer une action réciproque ou partagée entre plusieurs personnes, on emploie 'les uns contre les autres', 'les uns les autres' et 'se + verbe'.",
            "lang_focus_examples": [
                "Nous finissons tous par nous Blottir les uns contre les autres.",
                "Ils s'aident les uns les autres à traverser les moments sombres.",
                "Chacun cherche un peu de réconfort auprès de son voisin."
            ],
            "challenge_text": "Le cercle de parole : Organisez un moment d'échange chaleureux où chaque participant partage une pensée bienveillante pour soutenir un ami traversant un moment difficile.",
            "mistakes": [
                ("On doit se serrer <span class=\"mistake-highlight\">les uns avec les autres</span>", "On doit se serrer les uns contre les autres", "(La formule exacte consacrée est 'les uns contre les autres'.)"),
                ("Ils s'aiment <span class=\"mistake-highlight\">chacun autre</span>", "Ils s'aiment les uns les autres", "(Utilisez le pronom réciproque 'les uns les autres' pour exprimer la réciprocité.)"),
                ("J'ai besoin <span class=\"mistake-highlight\">de la</span> tendresse", "J'ai besoin de tendresse", "(Après 'besoin de', le nom indéterminé prend 'de' sans article défini.)")
            ]
        }
    },
    "zazie-challenge": {
        "je-suis-un-homme": {
            "slug": "je-suis-un-homme",
            "theme_title": "❤️ Thème: La surconsommation, La nature & L'illusion du progrès",
            "theme_bullets": ["Consommation", "Prédateur", "Vanité", "Personal reflection"],
            "vocab": [
                {"word": "Consommation", "def": "Action d'utiliser et d'acheter des biens matériels.", "ex": "Dans 'Je suis un homme', Zazie critique la surconsommation moderne.", "opp": "Sobriété"},
                {"word": "Illusion", "def": "Fausse croyance en un progrès technique sans limites.", "ex": "L'illusion de contrôler la nature nous mène à l'impasse.", "opp": "Vérité"},
                {"word": "Domination", "def": "Volonté de contrôler les ressources et le monde.", "ex": "La domination humaine sur la planète montre aujourd'hui ses limites.", "opp": "Soumission"},
                {"word": "Destruction", "def": "Action de ravager les écosystèmes et la biodiversité.", "ex": "La destruction de la faune est le résultat de notre avidité.", "opp": "Protection"},
                {"word": "Saturation", "def": "État d'un système qui ne peut plus absorber d'excès.", "ex": "La saturation des déchets menace l'équilibre environnemental.", "opp": "Fluidité"},
                {"word": "Possession", "def": "Désir d'accumuler des objets et des richesses.", "ex": "L'obsession de la possession ne garantit aucun bonheur réel.", "opp": "Partage"},
                {"word": "Engrenage", "def": "Enchaînement inévitable dont on ne peut se libérer.", "ex": "La société est prise dans l'engrenage de la croissance perpétuelle.", "opp": "Libération"},
                {"word": "Vanité", "def": "Caractère de ce qui est frivole, vide et illusoire.", "ex": "Construire des tours en béton reflète la vanité de nos ambitions.", "opp": "Humilité"},
                {"word": "Conscience", "def": "Prise de compte morale et éthique de nos actes.", "ex": "Il est temps de développer une conscience écologique éveillée.", "opp": "Inconscience"},
                {"word": "Prédateur", "def": "Être vivant qui exploite les autres pour ses besoins.", "ex": "L'homme se comporte en prédateur suprême au sommet de la chaîne.", "opp": "Protecteur"}
            ],
            "round1": [
                ("Dans 'Je suis un homme', Zazie dresse le portrait de l'être humain comme un <strong>prédateur</strong> au sommet de la chaîne alimentaire. Pourquoi l'obsession de <strong>domination</strong> menace-t-elle notre propre survie ?", "★ Pensez-vous que l'homme soit un <strong>prédateur</strong> par nature ou par culture ?"),
                ("La chanson dénonce la <strong>consommation</strong> effrénée et l'accumulation de gadgets. Comment sortir de l'<strong>engrenage</strong> qui nous pousse à acheter toujours plus ?", "★ Quel objet superflu possédez-vous dont vous pourriez facilement vous passer ?"),
                ("Zazie souligne la <strong>vanité</strong> de nos créations en béton face à la force de la planète. Pourquoi gardons-nous l'<strong>illusion</strong> que le progrès résoudra tout ?", "★ Quelle est selon vous la plus grande <strong>illusion</strong> du monde moderne ?"),
                ("La chanson met en garde contre la <strong>saturation</strong> des ressources et la <strong>destruction</strong> des écosystèmes. La prise de <strong>conscience</strong> individuelle suffit-elle à inverser la tendance ?", "★ Qu'avez-vous changé dans vos habitudes par <strong>conscience</strong> écologique ?"),
                ("'Je suis un homme et je mesure l'ombre que je fais'. En quoi reconnaître sa propre part de responsabilité est-il le premier pas vers la sagesse ?", "★ Comment assumez-vous votre propre impact sur votre environnement ?")
            ],
            "round2": [
                "La société de <strong>consommation</strong> a transformé l'homme en un <strong>prédateur</strong> insatiable au détriment de sa propre humanité. Débattons-en.",
                "L'idée d'un progrès technique infini sur une planète finie est une pure <strong>vanité</strong> et une <strong>illusion</strong> néfaste. Qu'en pensez-vous ?",
                "Seule une prise de <strong>conscience</strong> collective radicale peut nous sortir de cet <strong>engrenage</strong> destructeur. Partagez votre avis."
            ],
            "lang_focus_title": "La restriction avec 'Ne... que' et la mesure",
            "lang_focus_desc": "Pour exprimer une restriction ou la prise de conscience d'une limite, on emploie 'ne... que' et des verbes de mesure ('mesurer', 'évaluer').",
            "lang_focus_examples": [
                "L'homme ne fait que consommer sans penser aux générations futures.",
                "Je ne mesure que maintenant l'impact de mes choix quotidiens.",
                "Nous ne sommes que de passage sur cette planète fragile."
            ],
            "challenge_text": "Le plaidoyer pour la Terre : Prononcez un discours engagé lors d'un sommet citoyen pour convaincre vos proches d'adopter un mode de vie plus sobre et conscient.",
            "mistakes": [
                ("L'homme <span class=\"mistake-highlight\">ne fait que consomme</span>", "L'homme ne fait que consommer", "(Après la structure 'ne faire que', le verbe suivant doit être à l'infinitif.)"),
                ("On détruit <span class=\"mistake-highlight\">la nature sans conscience</span>", "On détruit la nature de manière inconsciente", "(Préférez un adjectif ou un adverbe bien formé pour exprimer la manière.)"),
                ("Je suis un homme <span class=\"mistake-highlight\">qui a beaucoup des</span> possessions", "Je suis un homme qui a beaucoup de possessions", "(Utilisez la préposition invariable 'de' après l'adverbe de quantité 'beaucoup'.)")
            ]
        },
        "nos-ames-sont": {
            "slug": "nos-ames-sont",
            "theme_title": "❤️ Thème: La connexion spirituelle & La vulnérabilité des âmes",
            "theme_bullets": ["Âme", "Connexion", "Profondeur", "Personal reflection"],
            "vocab": [
                {"word": "Âme", "def": "Principe de vie, de pensée et de sensibilité.", "ex": "Dans 'nos âmes sont', Zazie chante la vulnérabilité de nos âmes.", "opp": "Corps"},
                {"word": "Connexion", "def": "Lien ou entente profonde entre deux personnes.", "ex": "Leurs esprits partagent une connexion spirituelle instantanée.", "opp": "Rupture"},
                {"word": "Profondeur", "def": "Caractère de ce qui est sérieux et essentiel.", "ex": "La profondeur de son texte touche le cœur des auditeurs.", "opp": "Superficialité"},
                {"word": "Mystère", "def": "Ce qui est caché ou difficile à expliquer rationnellement.", "ex": "L'attirance entre deux êtres garde une part de mystère.", "opp": "Évidence"},
                {"word": "Douleur", "def": "Souffrance morale ou émotionnelle intime.", "ex": "Partager sa douleur permet d'alléger le poids du chagrin.", "opp": "Soulagement"},
                {"word": "Élévation", "def": "Action de s'élever moralement ou spirituellement.", "ex": "La musique favorise une véritable élévation de l'esprit.", "opp": "Chute"},
                {"word": "Sensibilité", "def": "Aptitude à ressentir des émotions intenses.", "ex": "Sa grande sensibilité lui permet d'exprimer ce que d'autres taisent.", "opp": "Insensibilité"},
                {"word": "Lien", "def": "Ce qui unit deux personnes au-delà des mots.", "ex": "Le lien qui les unit résiste au temps et à la distance.", "opp": "Séparation"},
                {"word": "Vérité", "def": "Qualité de ce qui est authentique et sincère.", "ex": "Rechercher la vérité intérieure exige de la nudité émotionnelle.", "opp": "Mensonge"},
                {"word": "Invisible", "def": "Ce qui ne se voit pas avec les yeux mais se ressent.", "ex": "L'essentiel dans une relation reste souvent invisible aux yeux.", "opp": "Visible"}
            ],
            "round1": [
                ("Dans 'nos âmes sont', Zazie explore ce que nos <strong>âmes</strong> conservent d'<strong>invisible</strong> aux yeux du monde. Pourquoi l'essentiel d'une personne se trouve-t-il dans son monde intérieur ?", "★ Qu'est-ce qui révèle le mieux la <strong>profondeur</strong> de votre <strong>âme</strong> selon vous ?"),
                ("La chanson montre que la véritable <strong>connexion</strong> naît du partage de la <strong>douleur</strong> et des épreuves. Faut-il avoir souffert ensemble pour se comprendre vraiment ?", "★ Quelle rencontre a créé chez vous une <strong>connexion</strong> immédiate et inexplicable ?"),
                ("Zazie aborde le <strong>mystère</strong> des affinités qui dépassent la logique. Pourquoi cherchons-nous toujours une explication rationnelle au <strong>lien</strong> amoureux ou amical ?", "★ Acceptez-vous facilement la part de <strong>mystère</strong> dans vos relations ?"),
                ("L'authenticité demande une quête constante de <strong>vérité</strong> et une grande <strong>sensibilité</strong>. La <strong>sensibilité</strong> est-elle une force ou une vulnérabilité dans le monde actuel ?", "★ Comment protégez-vous votre <strong>sensibilité</strong> sans vous fermer aux autres ?"),
                ("Les paroles suggèrent une forme d'<strong>élévation</strong> spirituelle par l'écoute et l'empathie. Comment cultiver cette <strong>élévation</strong> au quotidien ?", "★ Qu'est-ce qui vous aide à vous élever au-dessus des petits soucis quotidiens ?")
            ],
            "round2": [
                "La <strong>connexion</strong> entre deux <strong>âmes</strong> est une réalité spirituelle plus forte que la simple alchimie physique. Débattons-en.",
                "L'authenticité d'un <strong>lien</strong> humain repose nécessairement sur l'acceptation de notre propre <strong>douleur</strong> et vulnérabilité. Qu'en pensez-vous ?",
                "L'<strong>invisible</strong> et le <strong>mystère</strong> jouent un rôle plus important dans nos vies que ce que nous pouvons mesurer ou expliquer. Partagez votre avis."
            ],
            "lang_focus_title": "La voix passive et les états de l'âme",
            "lang_focus_desc": "Pour exprimer un état subi ou une transformation spirituelle, on emploie la voix passive et des verbes d'état ('être habité', 'être relié').",
            "lang_focus_examples": [
                "Nos âmes sont reliées par un fil invisible et indestructible.",
                "Elle est habitée par une quête de vérité et de lumière.",
                "Les blessures du passé sont apaisées par cette rencontre."
            ],
            "challenge_text": "L'échange poétique : Partagez avec un partenaire une métaphore ou un souvenir personnel qui illustre le sentiment d'être en connexion profonde avec quelqu'un.",
            "mistakes": [
                ("Nos âmes <span class=\"mistake-highlight\">sont connecté</span>", "Nos âmes sont connectées", "(Accordez le participe passé 'connectées' au féminin pluriel avec le sujet 'nos âmes'.)"),
                ("C'est une chose <span class=\"mistake-highlight\">invisible pour</span> les yeux", "C'est une chose invisible aux yeux", "(L'adjectif 'invisible' se construit avec la préposition 'à' : invisible aux yeux.)"),
                ("Elle a une grande <span class=\"mistake-highlight\">sensibilité de</span> musique", "Elle a une grande sensibilité à la musique", "(L'adjectif ou le nom 'sensibilité' demande la préposition 'à'.)")
            ]
        },
        "couleur": {
            "slug": "couleur",
            "theme_title": "❤️ Thème: La justice sociale, La diversité & La paix",
            "theme_bullets": ["Égalité", "Diversité", "Fraternité", "Personal reflection"],
            "vocab": [
                {"word": "Égalité", "def": "Principe selon lequel tous les êtres ont les mêmes droits.", "ex": "Dans 'Rue de la Paix', Zazie réclame une vraie égalité pour tous.", "opp": "Discrimination"},
                {"word": "Diversité", "def": "Richesse apportée par la pluralité des origines et idées.", "ex": "La diversité des cultures est la plus belle force d'une nation.", "opp": "Uniformité"},
                {"word": "Conflit", "def": "Affrontement ou désaccord violent entre groupes.", "ex": "Dépasser le conflit exige de l'écoute et du respect mutuel.", "opp": "Harmonie"},
                {"word": "Tolérance", "def": "Attitude de respect face aux opinions différentes.", "ex": "La tolérance est le socle indispensable de la vie en société.", "opp": "Intolérance"},
                {"word": "Préjugé", "def": "Jugement préconçu qui fausse la vision des autres.", "ex": "Combattre les préjugés demande un effort permanent d'éducation.", "opp": "Objectivité"},
                {"word": "Fraternité", "def": "Lien moral qui unit tous les membres de l'humanité.", "ex": "Sa chanson est un hymne joyeux à la fraternité universelle.", "opp": "Division"},
                {"word": "Injustice", "def": "Situation qui viole l'équité et le droit légitime.", "ex": "Dénoncer l'injustice sociale est le devoir de chaque citoyen.", "opp": "Justice"},
                {"word": "Solidarité", "def": "Engagement mutuel à se soutenir les uns les autres.", "ex": "La solidarité entre les quartiers est la clé de la cohésion.", "opp": "Égoïsme"},
                {"word": "Engagement", "def": "Action de prendre parti activement pour une cause noble.", "ex": "Son engagement artistique s'exprime à travers des textes percutants.", "opp": "Passivité"},
                {"word": "Harmonisation", "def": "Recherche d'un équilibre paisible entre les éléments.", "ex": "L'harmonisation des rapports humains commence par le dialogue.", "opp": "Chaos"}
            ],
            "round1": [
                ("Dans 'Rue de la Paix', Zazie dénonce l'<strong>injustice</strong> sociale et les inégalités de traitement. Pourquoi la promesse d'<strong>égalité</strong> est-elle encore si difficile à concrétiser ?", "★ Quelle <strong>injustice</strong> du quotidien vous révolte le plus ?"),
                ("La chanson appelle à dépasser les <strong>préjugés</strong> de race, de classe et de <strong>couleur</strong>. Comment la <strong>diversité</strong> culturelle peut-elle devenir une force d'union ?", "★ Qu'est-ce que la <strong>diversité</strong> vous a apporté sur le plan personnel ?"),
                ("Zazie montre que le <strong>conflit</strong> naît souvent du manque de <strong>tolérance</strong> et de dialogue. Comment désamorcer un <strong>conflit</strong> stérile dans son entourage ?", "★ Quelle est votre méthode pour encourager la <strong>tolérance</strong> lors d'une discussion animée ?"),
                ("L'auteur réclame une véritable <strong>fraternité</strong> incarnée dans la <strong>solidarité</strong> concrète. Faire preuve de <strong>solidarité</strong>, est-ce une obligation morale ou un choix ?", "★ À quand remonte la dernière fois que vous avez accompli un acte de <strong>solidarité</strong> spontané ?"),
                ("'Rue de la Paix' est un hymne à l'<strong>engagement</strong> citoyen et à l'<strong>harmonisation</strong> des rapports humains. Quel rôle l'artiste doit-il jouer dans le débat public ?", "★ Pensez-vous qu'un artiste doive utiliser sa voix pour porter un <strong>engagement</strong> politique ?")
            ],
            "round2": [
                "La conquête de l'<strong>égalité</strong> réelle exige de dénoncer sans cesse l'<strong>injustice</strong> sociale plutôt que de prôner un calme artificiel. Débattons-en.",
                "La <strong>diversité</strong> est la condition fondamentale de la <strong>fraternité</strong> dans une démocratie moderne. Qu'en pensez-vous ?",
                "L'<strong>engagement</strong> individuel est plus efficace que les lois pour combattre les <strong>préjugés</strong>. Partagez votre avis."
            ],
            "lang_focus_title": "La concession avec 'Même si' et l'espoir",
            "lang_focus_desc": "Pour exprimer la persévérance malgré les obstacles sociaux, on utilise 'même si + indicatif' et des verbes d'action au présent.",
            "lang_focus_examples": [
                "Même si la rue est longue, nous marcherons ensemble vers la paix.",
                "Même si les préjugés persistent, les nouvelles générations changent la donne.",
                "Nous continuons de croire en l'égalité bien que le chemin soit difficile."
            ],
            "challenge_text": "Le projet de la Rue de la Paix : Proposez une initiative citoyenne concrète pour favoriser le vivre-ensemble et l'entraide dans votre propre quartier.",
            "mistakes": [
                ("Même si <span class=\"mistake-highlight\">il y a du conflit</span>, il faut la paix", "Même s'il y a des conflits, il faut chercher la paix", "(Employez le pluriel 'des conflits' pour désigner les désaccords en général.)"),
                ("On doit se battre <span class=\"mistake-highlight\">pour l'injustice</span>", "On doit se battre contre l'injustice", "(Utilisez la préposition 'contre' devant 'injustice' pour indiquer le combat.)"),
                ("La solidarité est importante <span class=\"mistake-highlight\">pour tous les personnes</span>", "La solidarité est importante pour toutes les personnes", "(Accordez l'adjectif indéfini au féminin pluriel : 'toutes les personnes'.)")
            ]
        },
        "speed": {
            "slug": "speed",
            "theme_title": "❤️ Thème: L'éveil de l'énergie vitale & Le courage de réaimer",
            "theme_bullets": ["Battement", "Élan", "Renaissance", "Personal reflection"],
            "vocab": [
                {"word": "Battement", "def": "Pulsation du cœur marquant la vie et l'émotion.", "ex": "Dans 'Speed', Zazie ordonne à son cœur d'accélérer ses battements.", "opp": "Arrêt"},
                {"word": "Élan", "def": "Mouvement spontané et passionné vers l'avant.", "ex": "Elle retrouve un nouvel élan vital après une longue léthargie.", "opp": "Inertie"},
                {"word": "Vitalité", "def": "Force et énergie de la vie qui anime un être.", "ex": "Sa chanson déborde d'une vitalité communicative et puissante.", "opp": "Épuisement"},
                {"word": "Renaissance", "def": "Fait de reprendre vie et d'ouvrir un nouveau chapitre.", "ex": "'Speed' célèbre la renaissance du cœur après le chagrin.", "opp": "Déclin"},
                {"word": "Crainte", "def": "Appréhension ou peur de souffrir à nouveau.", "ex": "Vaincre la crainte d'aimer est nécessaire pour avancer.", "opp": "Assurance"},
                {"word": "Rythme", "def": "Cadence d'une musique ou pulsation de l'existence.", "ex": "Le rythme accéléré du morceau mime la course du cœur.", "opp": "Monotonie"},
                {"word": "Audace", "def": "Courage d'agir malgré les risques et les blessures.", "ex": "Faire preuve d'audace permet de briser la solitude.", "opp": "Prudence"},
                {"word": "Impulsion", "def": "Poussée soudaine qui incite à agir sans hésiter.", "ex": "Elle cède à l'impulsion de vivre pleinement l'instant présent.", "opp": "Inhibition"},
                {"word": "Mouvement", "def": "Dynamisme et changement opposés à la stagnation.", "ex": "La vie est un mouvement perpétuel qui refuse la résignation.", "opp": "Immobilité"},
                {"word": "Espoir", "def": "Confiance renewed dans la possibilité d'un bonheur.", "ex": "Retrouver l'espoir rallume la flamme au fond des yeux.", "opp": "Désespoir"}
            ],
            "round1": [
                ("Dans 'Speed', Zazie ordonne à son propre cœur d'accélérer ses <strong>battements</strong>. Pourquoi avons-nous parfois besoin de nous faire violence pour retrouver la <strong>vitalité</strong> ?", "★ Qu'est-ce qui réveille votre <strong>vitalité</strong> quand vous vous sentez éteint ?"),
                ("La chanson célèbre la <strong>renaissance</strong> affective après une longue période d'engourdissement. Pourquoi la <strong>crainte</strong> de souffrir nous empêche-t-elle souvent de réaimer ?", "★ Avez-vous déjà dû surmonter la <strong>crainte</strong> d'être blessé pour vous réouvrir aux autres ?"),
                ("Le <strong>rythme</strong> frénétique du morceau incarne l'<strong>élan</strong> irrépressible de la vie. Comment retrouver cet <strong>élan</strong> intérieur quand la routine s'installe ?", "★ Quel est le domaine de votre vie où vous aimeriez donner un nouvel <strong>élan</strong> ?"),
                ("Zazie invite à faire preuve d'<strong>audace</strong> et à suivre son <strong>impulsion</strong>. L'<strong>impulsion</strong> du moment est-elle une meilleure conseillère que la réflexion prolongée ?", "★ Êtes-vous plutôt une personne guidée par l'<strong>impulsion</strong> ou par le calcul prévoyant ?"),
                ("'Speed' montre que la vie est un <strong>mouvement</strong> perpétuel porté par l'<strong>espoir</strong>. Pourquoi la stagnation est-elle le pire ennemi de l'épanouissement ?", "★ Comment vous assurez-vous de toujours rester en <strong>mouvement</strong> et en apprentissage ?")
            ],
            "round2": [
                "La véritable <strong>renaissance</strong> exige de faire preuve d'<strong>audace</strong> et d'ignorer la <strong>crainte</strong> de l'échec. Débattons-en.",
                "Suivre son <strong>impulsion</strong> et l'<strong>élan</strong> du cœur produit de meilleurs résultats que de trop analyser ses sentiments. Qu'en pensez-vous ?",
                "La vie n'a de sens que dans le <strong>mouvement</strong> et la vitesse des <strong>battements</strong> de la passion. Partagez votre avis."
            ],
            "lang_focus_title": "L'impératif et l'encouragement vital",
            "lang_focus_desc": "Pour encourager, stimuler ou ordonner l'action, on utilise l'impératif présent ('batte', 'cours', 'réchauffe-toi') et des verbes de mouvement.",
            "lang_focus_examples": [
                "Batte, batte mon cœur, accélère le rythme !",
                "Réchauffe-toi et sors de cette léthargie sans attendre.",
                "Vas-y, cours et ne regarde plus en arrière !"
            ],
            "challenge_text": "L'appel à l'énergie : Incarnez un coach ou un ami inspirant qui donne un discours d'encouragement électrisant à quelqu'un qui a perdu l'élan de vivre ou d'entreprendre.",
            "mistakes": [
                ("Mon cœur <span class=\"mistake-highlight\">bat plus vite de</span> normal", "Mon cœur bat plus vite que d'habitude", "(Dans une comparaison d'inégalité, utilisez la conjonction 'que'.)"),
                ("Il faut <span class=\"mistake-highlight\">que tu bats</span> ton cœur", "Il faut que ton cœur batte", "(Au subjonctif présent, le verbe 'battre' prend les terminaisons '-e, -es, -e'.)"),
                ("Elle ressent un grand <span class=\"mistake-highlight\">élan pour</span> la vie", "Elle ressent un grand élan vers la vie", "(La préposition 'vers' exprime parfaitement la direction du mouvement de l'élan.)")
            ]
        }
    }
}


def build_theme_box(title, bullets):
    bullets_html = "\n".join([f"<li>{b}</li>" for b in bullets])
    return f"""<div class="theme-box" style="background: var(--cream); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; border: 1px dashed var(--border);">
<h3 style="margin-top:0; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">{title}</h3>
<p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--ink-soft);">Nous allons discuter de:</p>
<ul style="margin:0; padding-left:1.2rem; font-size:0.9rem; color:var(--ink-soft);">
{bullets_html}
</ul>
</div>"""


def build_vocab_grid(vocab_list):
    cards = []
    for item in vocab_list:
        w = item["word"]
        d = item["def"]
        e = item["ex"]
        o = item["opp"]
        e_js = e.replace("'", "\\'")
        d_js = d.replace("'", "\\'")
        w_js = w.replace("'", "\\'")
        card = f"""<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">{w}</div>
<div class="vocab-def">{d}</div>
<div class="vocab-example">{e}</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">{o}</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{w_js}', definition:'{d_js}', example:'{e_js}'}}, this)">+ Dictionary</button>
</div>"""
        cards.append(card)

    cards_html = "\n".join(cards)
    return f"""<div class="vocab-grid-10">
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Concepts clés &amp; Émotions</h3>
{cards_html}
</div>"""


def build_rounds(r1_items, r2_items):
    r1_html_list = []
    for main, personal in r1_items:
        r1_html_list.append(f"""<div class="round-item"><div class="round-item-main">{main}</div>
<div class="round-item-personal">{personal}</div>
</div>""")
    r1_html = "\n".join(r1_html_list)

    r2_html_list = []
    for debate in r2_items:
        r2_html_list.append(f"""<div class="round-item"><div class="round-item-main">{debate}</div>
</div>""")
    r2_html = "\n".join(r2_html_list)

    return f"""<div class="round-1">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
{r1_html}
</div>
<div class="round-2" style="margin-top: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
{r2_html}
</div>"""


def build_lang_focus(slug, title, desc, examples):
    ex_html = "\n".join([f'<li style="margin-bottom: 0.5rem; font-size: 0.9rem;">{ex}</li>' for ex in examples])
    return f"""<div class="round-block open" id="lang-focus-{slug}">
<div class="round-header" onclick="COSY.toggleRound('lang-focus-{slug}')" style="background:#FFF9E6; cursor:pointer;">
<span>✨ Étape 5 : Point de langue</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block; padding-top: 1.5rem;">
<div style="background: var(--cream); border-left: 4px solid var(--indigo); padding: 1.5rem; border-radius: 0 16px 16px 0; margin-bottom: 1.5rem;">
<h3 style="margin-top: 0; font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--indigo);">{title}</h3>
<p style="font-size: 0.92rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1rem;">{desc}</p>
<strong style="font-size: 0.85rem; text-transform: uppercase; color: var(--muted); letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Let's Practise — Three Examples:</strong>
<ul style="margin: 0; padding-left: 1.2rem; color: var(--indigo);">
{ex_html}
</ul>
</div>
</div>
</div>"""


def build_final_challenge(slug, challenge_text):
    return f"""<div class="round-block open" id="final-challenge-{slug}">
<div class="round-header" onclick="COSY.toggleRound('final-challenge-{slug}')" style="background:#FEEAEA; cursor:pointer;">
<span>🎭 Étape 6 : Défi final</span><span class="round-toggle">▲</span>
</div>
<div class="round-body" style="display:block; padding-top: 1.5rem;">
<div style="background: var(--cream); border: 2px dashed var(--indigo); padding: 1.5rem; border-radius: 16px; display: flex; align-items: flex-start; gap: 1rem;">
<span style="font-size: 2rem;">🎭</span>
<div>
<p style="margin-top: 0; font-size: 1rem; line-height: 1.6; color: var(--ink); font-weight: 500;">{challenge_text}</p>
</div>
</div>
</div>
</div>"""


def build_mistakes_block(slug, mistakes):
    m_html_list = []
    for wrong, right, note in mistakes:
        m_html_list.append(f"""<div class="mistake-item">
<span class="mistake-wrong">{wrong}</span>
<span class="mistake-arrow">→</span>
<span class="mistake-right">{right}</span>
<span class="mistake-note-text">{note}</span>
</div>""")
    m_html = "\n".join(m_html_list)

    return f"""<div class="mistake-block open" id="s-mistakes-{slug}">
<div class="mistake-header" onclick="COSY.toggleBlock('s-mistakes-{slug}')">
<span>✏️ Notes du Professeur (Corrections Linguistiques)</span><span class="round-toggle">▲</span>
</div>
<div class="mistake-body" style="display:block;">
{m_html}
</div>
</div>"""


def remediate_index_file(filename, challenge_key):
    filepath = os.path.join(FR_DIR, filename, "index.html")
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    opts = text.split("<vim-choice-option>")
    header = opts[0]
    new_opts = [header]

    song_keys = list(DATA[challenge_key].keys())

    for idx, opt_text in enumerate(opts[1:]):
        if idx >= len(song_keys):
            new_opts.append(opt_text)
            continue

        song_slug = song_keys[idx]
        song_info = DATA[challenge_key][song_slug]

        # 1. Replace Theme Box
        new_tb = build_theme_box(song_info["theme_title"], song_info["theme_bullets"])
        opt_text = re.sub(r'<div class="theme-box"[\s\S]*?</div>\s*</div>', new_tb + "\n</div>", opt_text)

        # 2. Replace Vocab Grid
        new_vg = build_vocab_grid(song_info["vocab"])
        opt_text = re.sub(r'<div class="vocab-grid-10"[\s\S]*?</div>\s*</div>\s*</div>', new_vg + "\n</div>\n</div>", opt_text)

        # 3. Replace Rounds 1 & 2
        new_r = build_rounds(song_info["round1"], song_info["round2"])
        opt_text = re.sub(
            r'<div class="round-1"[\s\S]*?(?=\s*</div>\s*</div>\s*</div>\s*<div class="round-block|\s*<div class="round-block|\s*<div id="lang-focus|\s*<div class="round-block open" id="lang-focus)',
            new_r,
            opt_text
        )

        # 4. Replace Language Focus
        new_lf = build_lang_focus(song_slug, song_info["lang_focus_title"], song_info["lang_focus_desc"], song_info["lang_focus_examples"])
        opt_text = re.sub(r'<div class="round-block open" id="lang-focus-[^"]*"[\s\S]*?</div>\s*</div>\s*</div>', new_lf, opt_text)

        # 5. Replace Final Challenge
        new_fc = build_final_challenge(song_slug, song_info["challenge_text"])
        opt_text = re.sub(r'<div class="round-block open" id="final-challenge-[^"]*"[\s\S]*?</div>\s*</div>\s*</div>', new_fc, opt_text)

        # 6. Replace Mistakes Block
        new_mb = build_mistakes_block(song_slug, song_info["mistakes"])
        opt_text = re.sub(r'<div class="mistake-block open" id="s-mistakes-[^"]*"[\s\S]*?</div>\s*</div>', new_mb, opt_text)

        new_opts.append(opt_text)

    full_html = "<vim-choice-option>".join(new_opts)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(full_html)

    print(f"Successfully remediated index {filepath}")


def remediate_single_song_file(challenge_key, song_slug):
    filepath = os.path.join(FR_DIR, challenge_key, f"{song_slug}.html")
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    song_info = DATA[challenge_key][song_slug]

    # 1. Replace Theme Box
    new_tb = build_theme_box(song_info["theme_title"], song_info["theme_bullets"])
    text = re.sub(r'<div class="theme-box"[\s\S]*?</div>\s*</div>', new_tb + "\n</div>", text)

    # 2. Replace Vocab Grid
    new_vg = build_vocab_grid(song_info["vocab"])
    text = re.sub(r'<div class="vocab-grid-10"[\s\S]*?</div>\s*</div>\s*</div>', new_vg + "\n</div>\n</div>", text)

    # 3. Replace Rounds 1 & 2
    new_r = build_rounds(song_info["round1"], song_info["round2"])
    text = re.sub(
        r'<div class="round-1"[\s\S]*?(?=\s*</div>\s*</div>\s*</div>\s*<div class="round-block|\s*<div class="round-block|\s*<div id="lang-focus|\s*<div class="round-block open" id="lang-focus)',
        new_r,
        text
    )

    # 4. Replace Language Focus
    new_lf = build_lang_focus(song_slug, song_info["lang_focus_title"], song_info["lang_focus_desc"], song_info["lang_focus_examples"])
    text = re.sub(r'<div class="round-block open" id="lang-focus-[^"]*"[\s\S]*?</div>\s*</div>\s*</div>', new_lf, text)

    # 5. Replace Final Challenge
    new_fc = build_final_challenge(song_slug, song_info["challenge_text"])
    text = re.sub(r'<div class="round-block open" id="final-challenge-[^"]*"[\s\S]*?</div>\s*</div>\s*</div>', new_fc, text)

    # 6. Replace Mistakes Block
    new_mb = build_mistakes_block(song_slug, song_info["mistakes"])
    text = re.sub(r'<div class="mistake-block open" id="s-mistakes-[^"]*"[\s\S]*?</div>\s*</div>', new_mb, text)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(text)

    print(f"Successfully remediated song file {filepath}")


if __name__ == "__main__":
    for challenge in ["angele-challenge", "la-zarra-challenge", "fabienne-thibeault-challenge", "zazie-challenge"]:
        remediate_index_file(challenge, challenge)
        for song_slug in DATA[challenge].keys():
            remediate_single_song_file(challenge, song_slug)

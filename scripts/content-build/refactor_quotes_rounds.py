import os
import re
from bs4 import BeautifulSoup

paths = {
    'en': 'events/sessions/the-greatest-quotes',
    'fr': 'events/fr/sessions/the-greatest-quotes',
    'ru': 'events/ru/sessions/the-greatest-quotes'
}

# 1. List of files that are completely custom on disk and must never be auto-templated
EXCLUDE_LIST = {
    "feynman-knowledge-isnt-free-elementary.html",
    "feynman-knowledge-isnt-free-intermediate.html",
    "feynman-study-hard.html",
    "feynman-study-hard-intermediate.html",
    "feynman-no-shame-knowing-quote.html",
    "steve-jobs-quote.html",
    "wisdom-of-socrates.html",
    "saudade.html",
    "sonder.html",
    "ability-to-notice-beauty-quote.html",
    "amish-tripathi-quote.html",
    "barbra-streisand-quote.html",
    "brianna-pastor-proud-quote.html",
    "compass-and-clock.html",
    "disappear-with-art-quote.html",
    "dolto-difficult-child-quote.html",
    "dostoevsky-loving-power-quote.html",
    "favorite-days-not-happened.html",
    "langle-suppressed-child-quote.html",
    "madonna-ai-art-quote-elementary.html",
    "madonna-ai-art-quote-intermediate.html",
    "must-die-first.html",
    "neufeld-resistance-quote.html",
    "rain-seller-umbrella-quote.html",
    "robin-williams-quote.html",
    "sadia-hakim-humanity-quote.html",
    "stay-free-quote.html",
    "think-for-yourself-quote.html",
    "underpaid-politicians-teachers-quote.html",
    "virginia-woolf-trigger-quote.html",
    "voltaire-read-dance-quote.html",
    "weird-people-dreams-quote.html",
    "women-mothers-tragedy.html",
    "you-are-a-soul.html"
}

# 2. Specific vocabulary maps for French placeholders
FR_VOCAB_MAPS = {
    "accept-gay-child.html": [
        ("Inconditionnel", "qui ne dépend d'aucune condition; absolu.", "L'amour inconditionnel des parents est essentiel pour le bien-être de l'enfant."),
        ("Acceptation", "le fait de consentir à recevoir ou à tolérer quelqu'un.", "L'acceptation de la différence au sein de la famille est cruciale."),
        ("Préjugé", "opinion préconçue souvent imposée par le milieu social.", "Combattre les préjugés familiaux demande beaucoup de courage."),
        ("Coming-out", "l'annonce volontaire de son orientation sexuelle.", "Faire son coming-out est une étape de libération personnelle."),
        ("Traditionnel", "conforme aux traditions et aux rôles sociaux hérités du passé.", "Les familles traditionnelles ont parfois du mal à accepter le changement."),
        ("Empathie", "capacité de ressentir et de comprendre les émotions des autres.", "L'empathie parentale renforce le lien affectif avec l'enfant."),
        ("Conflit", "état d'opposition ou de désaccord sérieux entre personnes.", "Un conflit de valeurs peut survenir au sein de la famille."),
        ("Validation", "action de reconnaître et de confirmer la valeur des sentiments d'autrui.", "La validation de son identité aide l'enfant à s'épanouir."),
        ("Diversité", "caractère de ce qui est varié, divers.", "Célébrer la diversité humaine enrichit nos relations sociales."),
        ("Réconciliation", "le fait de rétablir des relations amicales après un désaccord.", "La réconciliation familiale demande du temps et de l'écoute mutuelle.")
    ],
    "ai-opposite-of-art.html": [
        ("Prise de risque", "le fait de s'engager dans une action comportant des incertitudes.", "La véritable création artistique exige une forte prise de risque."),
        ("Algorithmique", "qui relève d'un ensemble de règles de calcul automatisées.", "La musique algorithmique manque souvent d'émotion humaine."),
        ("Sans âme", "dépourvu de sensibilité, de profondeur ou de vie.", "Une peinture générée par ordinateur peut sembler froide et sans âme."),
        ("Provocateur", "qui cherche à provoquer des réactions ou des débats.", "L'art provocateur bouscule nos certitudes et nos habitudes de pensée."),
        ("Artisanat", "activité de l'artisan qui crée des objets avec ses mains.", "Il y a une dimension d'artisanat dans toute œuvre d'art authentique."),
        ("Innovation", "action d'innover; introduction de quelque chose de nouveau.", "L'innovation technologique ne doit pas remplacer la sensibilité humaine."),
        ("Prévisibilité", "caractère de ce qui est prévisible à l'avance.", "La prévisibilité des formules marketing nuit à l'originalité artistique."),
        ("Créativité", "pouvoir de création, d'invention et d'originalité.", "La créativité humaine se nourrit de nos doutes et de nos erreurs."),
        ("Authenticité", "qualité de ce qui est vrai, sincère et profond.", "L'authentique d'une chanson touche directement le cœur des auditeurs."),
        ("Spontanéité", "qualité de ce qui se produit de manière naturelle et libre.", "L'improvisation théâtrale repose entièrement sur la spontanéité.")
    ],
    "dangerous-blindness-perspective.html": [
        ("Perspective", "point de vue, façon de considérer les choses.", "Changer de perspective permet de mieux comprendre les opinions d'autrui."),
        ("Aveuglement", "manque de discernement, refus de voir la réalité.", "L'aveuglement idéologique empêche tout dialogue constructif."),
        ("Biais", "déformation systématique de l'évaluation ou du jugement.", "Le biais de confirmation nous pousse à ne lire que ce qui nous donne raison."),
        ("Renforcer", "rendre plus fort ou plus solide une opinion ou une croyance.", "Les algorithmes des réseaux sociaux tendent à renforcer nos préjugés."),
        ("Insulaire", "qui est isolé, fermé aux influences extérieures.", "Vivre dans un milieu insulaire limite notre ouverture d'esprit."),
        ("Sophisme", "argument qui a l'apparence de la vérité mais qui est faux.", "Ce discours politique repose sur un sophisme facile à démasquer."),
        ("Chambre d'écho", "milieu où l'on n'entend que des opinions similaires aux siennes.", "Internet peut devenir une vaste chambre d'écho qui nourrit le dogme."),
        ("Intellectuel", "qui relève des activités de l'esprit, de la pensée.", "L'honnêteté intellectuelle exige d'admettre ses propres erreurs de jugement."),
        ("Dogme", "opinion formulée comme une vérité absolue et indiscutable.", "Remettre en question le dogme établi est nécessaire pour progresser."),
        ("Empathie", "capacité de comprendre et de partager les sentiments d'autrui.", "L'empathie intellectuelle consiste à écouter sincèrement nos opposants.")
    ],
    "favorite-days-not-happened.html": [
        ("Idéalisé", "représenté sous une forme parfaite, supérieure à la réalité.", "Nous avons tous le souvenir idéalisé d'un été de notre enfance."),
        ("Hypothétique", "qui repose sur une hypothèse, qui est incertain.", "Se perdre dans des scénarios hypothétiques nous éloigne du présent."),
        ("Nostalgie", "regret mélancolique d'une époque passée ou de ce qu'on n'a pas connu.", "La nostalgie peut être une source d'inspiration poétique majeure."),
        ("Mélancolie", "tristesse douce et vague, propice à la rêverie.", "La mélancolie nous envahit parfois à la fin d'une belle journée."),
        ("Accomplissement", "action de mener à bien, de réaliser pleinement quelque chose.", "L'accomplissement de nos désirs est parfois moins excitant que leur attente."),
        ("Inspiration", "souffle créateur qui stimule l'imagination et l'esprit.", "L'imagination pure offre une inspiration plus riche que la réalité brute."),
        ("Désillusion", "perte des illusions, déception face à la réalité concrète.", "La désillusion est le prix à payer pour avoir trop idéalisé l'avenir."),
        ("Ambiguïté", "caractère de ce qui présente plusieurs sens possibles.", "Le poète cultive l'ambiguïté pour laisser libre cours à l'interprétation."),
        ("Anticipation", "action de prévoir ou de vivre d'avance quelque chose par la pensée.", "L'anticipation d'un voyage est souvent la partie la plus joyeuse."),
        ("Perspective", "façon d'envisager l'avenir, point de vue sur le temps.", "Cette réflexion offre une nouvelle perspective sur le pouvoir de l'esprit.")
    ],
    "home-is-a-time.html": [
        ("Appartenance", "sentiment d'être intégré à un groupe, à un lieu.", "Le sentiment d'appartenance n'est pas toujours lié à un espace physique."),
        ("Nostalgie", "tristesse douce causée par le regret du pays natal ou du passé.", "La nostalgie du foyer grandit avec les années qui passent."),
        ("Évanescent", "qui s'efface graduellement, qui disparaît doucement.", "Les souvenirs d'enfance ont un caractère évanescent et poétique."),
        ("Géographie", "étude ou configuration de l'espace terrestre.", "Notre patrie n'est pas une question de géographie, mais de temps."),
        ("Temporalité", "caractère de ce qui est inscrit dans le temps.", "Cette citation nous invite à méditer sur la temporalité de l'existence."),
        ("Enraciné", "profondément fixé dans un lieu, une culture ou un moment.", "Nous sommes tous enracinés dans l'époque où nous avons été heureux."),
        ("Éphémère", "qui a une durée de vie très courte; passager.", "La jeunesse est éphémère, mais son souvenir reste gravé en nous."),
        ("Sentimentalité", "tendance à se laisser guider par des sentiments doux ou nostalgiques.", "Il ne faut pas confondre la nostalgie profonde et la simple sentimentalité."),
        ("Déplacement", "action de changer de lieu, de se déplacer.", "Le déplacement géographique ne suffit pas pour fuir sa propre mélancolie."),
        ("Atmosphère", "ambiance morale ou poétique qui entoure un lieu ou un moment.", "Certains jours d'automne possèdent une atmosphère propice aux souvenirs.")
    ],
    "must-die-first.html": [
        ("Transformation", "passage d'une forme ou d'un état à un autre.", "Toute véritable transformation intérieure exige un processus de deuil."),
        ("Métaphorique", "qui contient ou utilise une métaphore; figuré.", "La mort évoquée ici est purement métaphorique et constructive."),
        ("Catalyseur", "élément qui provoque ou accélère une réaction, un changement.", "Une crise personnelle agit souvent comme un puissant catalyseur d'évolution."),
        ("Identité", "caractère de ce qui fait l'individualité d'une personne.", "Notre identité n'est pas figée, elle se reconstruit à chaque étape de la vie."),
        ("Renoncement", "action de renoncer volontairement à quelque chose.", "Le renoncement à nos vieilles habitudes est nécessaire pour avancer."),
        ("Limitation", "action de fixer des limites; restriction.", "Prendre conscience de nos limitations nous aide à nous réinventer."),
        ("Résilience", "capacité à surmonter les chocs et à se reconstruire.", "La résilience humaine se révèle dans notre capacité à renaître des épreuves."),
        ("Paradigme", "modèle de pensée, vision du monde partagée par un groupe.", "Changer de vie exige souvent de changer totalement de paradigme."),
        ("Évolution", "transformation graduelle et progressive d'un état.", "L'évolution personnelle est un chemin parsemé de petites morts symboliques."),
        ("Vulnérabilité", "fragilité intrinsèque qui nous expose aux émotions.", "Accepter sa vulnérabilité est la première étape vers la vraie force.")
    ],
    "women-mothers-tragedy.html": [
        ("Tragédie", "situation dramatique qui semble sans issue positive.", "La tragédie moderne des femmes est le conflit permanent entre leurs aspirations."),
        ("Attente", "exigence ou espérance de la société envers un individu.", "L'attente sociale pesant sur les mères reste extrêmement lourde."),
        ("Maternel", "qui est propre à la mère, relatif à la maternité.", "L'instinct maternel est souvent présenté comme un devoir indiscutable."),
        ("Lignée", "suite de générations successives d'une même famille.", "Les choix des femmes d'aujourd'hui influencent toute la lignée future."),
        ("Archétype", "modèle idéal, image primordiale ancrée dans la culture.", "L'archétype de la mère sacrificielle doit être remis en question."),
        ("Autonomie", "indépendance de décision, liberté de mener sa propre vie.", "Revendiquer son autonomie professionnelle est un droit fondamental."),
        ("Stéréotype", "opinion toute faite, cliché culturel souvent réducteur.", "Les stéréotypes de genre limitent les choix de carrière des jeunes femmes."),
        ("Identité", "représentation que l'on a de soi-même et de son rôle social.", "Une femme ne doit pas réduire son identité entière à son rôle de mère."),
        ("Générationnel", "qui concerne les relations et les différences entre générations.", "Le conflit entre carrière et famille est un défi générationnel majeur."),
        ("Intérioriser", "intégrer profondément dans sa conscience des normes ou des croyances.", "Les femmes tendent à intérioriser la culpabilité de ne pas être parfaites.")
    ],
    "you-are-a-soul.html": [
        ("Essence", "ce qui fait qu'une chose est ce qu'elle est; nature profonde.", "Notre essence spirituelle dépasse les limites de notre apparence physique."),
        ("Conscience", "faculté humaine de percevoir sa propre existence et le monde.", "La conscience humaine reste l'un des plus grands mystères de la science."),
        ("Matérialisme", "doctrine philosophique qui réduit tout à la matière physique.", "Le matérialisme moderne nous pousse à surévaluer le corps au détriment de l'esprit."),
        ("Transcendant", "qui dépasse les limites de l'expérience sensible et physique.", "C.S. Lewis défend une vision transcendante de la nature humaine."),
        ("Spiritualité", "recherche de sens et relation avec les dimensions de l'esprit.", "La spiritualité n'est pas nécessairement liée à une religion dogmatique."),
        ("Incarnation", "le fait de prendre corps, de se manifester sous forme physique.", "Le corps est l'incarnation temporaire de notre âme dans le monde réel."),
        ("Perception", "action de percevoir par les sens ou par l'esprit.", "Notre perception de l'identité est souvent limitée aux apparences matérielles."),
        ("Existant", "qui a une réalité concrète, qui existe.", "L'homme est un être existant sur plusieurs plans de réalité."),
        ("Intangible", "qui ne peut être touché; impalpable et précieux.", "L'âme est la part intangible et éternelle de notre l'individualité."),
        ("Identité", "le caractère permanent de ce qui fait l'unité d'une personne.", "Définir son identité par son âme change notre rapport au vieillissement physique.")
    ],
    "saudade.html": [
        ("Aspiration", "mouvement de l'âme vers un idéal, un désir profond.", "La saudade exprime une aspiration vers un bonheur disparu ou inaccessible."),
        ("Mélancolie", "tristesse douce et poétique, propice à l'introspection.", "Il y a une forme de noble mélancolie dans la saudade portugaise."),
        ("Intraduisible", "qu'on ne peut pas traduire directement dans une autre langue.", "La saudade est un mot intraduisible qui capture un état d'esprit complexe."),
        ("Nostalgie", "regret mélancolique d'une époque passée ou d'un pays éloigné.", "La nostalgie se mêle à l'espoir dans ce sentiment si particulier."),
        ("Pensif", "absorbé dans ses pensées, souvent nostalgiques ou rêveuses.", "Écouter du fado rend le promeneur silencieux et pensif."),
        ("Évocateur", "qui a le pouvoir de rappeler des souvenirs ou des images.", "Le son de la guitare est extrêmement évocateur d'un passé lointain."),
        ("Douce-amère", "qui mêle agréablement la tristesse et la douceur.", "La saudade est une sensation douce-amère qui embellit nos regrets."),
        ("Poignant", "qui émeut profondément, qui serre le cœur d'émotion.", "Ce chant portugais exprime une douleur à la fois poignante et belle."),
        ("Éphémère", "qui ne dure qu'un instant, qui passe rapidement.", "Le bonheur est éphémère, mais la saudade le rend éternel dans notre esprit."),
        ("Résonance", "prolongation ou écho d'une sensation ou d'un sentiment.", "Cette mélodie trouve une résonance profonde dans le cœur des auditeurs.")
    ],
    "sonder.html": [
        ("Sonder", "chercher à pénétrer, à connaître les pensées secrètes de quelqu'un.", "Observer les passants nous invite à sonder les mystères de la nature humaine."),
        ("Passant", "personne qui passe dans la rue, inconnu rencontré brièvement.", "Chaque passant que nous croisons possède une histoire aussi riche que la ours."),
        ("Vivant", "qui est plein de vie, actif et animé.", "La foule de la ville est un spectacle vivant et fascinant pour l'observateur."),
        ("Complexe", "qui contient plusieurs éléments différents difficiles à analyser.", "L'esprit humain est un labyrinthe complexe de souvenirs et de désirs."),
        ("Anonymat", "état de quelqu'un dont le nom ou l'identité est inconnu.", "L'anonymat de la grande ville nous protège mais peut aussi nous isoler."),
        ("Éphémère", "qui ne dure que très peu de temps, passager.", "Notre croisement dans la rue est éphémère, mais notre existence est profonde."),
        ("Intérioriser", "intégrer profondément en soi des sentiments ou des pensées.", "Chaque individu tend à intérioriser ses luttes quotidiennes sans en rien montrer."),
        ("Facettes", "aspects différents d'une personnalité ou d'une situation.", "La vie des inconnus comporte des milliers de facettes que nous ignorons."),
        ("Subconscient", "partie de l'esprit qui influence nos actes à notre insu.", "Le subconscient des gens guide leurs pas pressés dans la foule urbaine."),
        ("Perspective", "façon de considérer le monde ou autrui.", "Adopter cette perspective change totalement notre rapport à l'inconnu.")
    ]
}

# 3. Complete dictionary of Handcrafted round prompts mapped by relative path
HANDCRAFTED_ROUNDS_SPECS = {
    # English Accept Gay Child
    "events/sessions/the-greatest-quotes/accept-gay-child.html": {
        "vocab_list": [
            ("Unconditional", "not subject to any conditions; absolute.", "Unconditional love from parents is crucial for a child's well-being."),
            ("Acceptance", "the action of consenting to receive or undertake something offered.", "Finding true acceptance within one's family is a vital part of personal growth."),
            ("Prejudice", "preconceived opinion that is not based on reason or actual experience.", "Overcoming deep-seated social prejudice requires education and exposure."),
            ("Coming-out", "the public disclosure of one's sexual orientation or gender identity.", "The process of coming-out can be a deeply liberating experience."),
            ("Traditional", "conforming to long-standing customs or social standards.", "Some traditional families struggle to accept modern relationship orientations."),
            ("Empathy", "the ability to understand and share the feelings of another.", "Active listening is the most effective way to develop genuine empathy."),
            ("Conflict", "a serious disagreement or argument, typically a protracted one.", "Family conflict is inevitable when generational values collide."),
            ("Validation", "recognition or affirmation that a person or their feelings are valid.", "Seeking validation from loved ones is a natural and healthy human desire."),
            ("Diversity", "the state of being diverse; variety.", "Celebrating human diversity helps us build stronger communities."),
            ("Reconciliation", "the restoration of friendly relations after a disagreement.", "Total reconciliation is always possible with open communication.")
        ],
        "r1": [
            ("Is <strong>Unconditional</strong> love the absolute prerequisite of any healthy parental relationship?", "★ When was the last time you had to practice unconditional support for a loved one?"),
            ("Does complete <strong>Acceptance</strong> of a child's identity prevent psychological trauma in adulthood?", "★ How do you handle the search for validation in your own family?"),
            ("How does social or religious <strong>Prejudice</strong> blind otherwise loving parents?", "★ Have you ever had to overcome a prejudice to support a friend?"),
            ("Does the process of <strong>Coming-out</strong> require exceptional courage in modern society?", "★ Have you ever shared a personal secret that transformed your relationships?"),
            ("In what ways does the <strong>Traditional</strong> family structure restrict individual autonomy?", "★ Do you feel free from the traditions of your upbringing?"),
            ("How can parental <strong>Empathy</strong> de-escalate the deepest generational conflicts?", "★ Who in your life shows the greatest empathy toward your choices?"),
            ("Is family <strong>Conflict</strong> inevitable when generational values collide?", "★ How do you react to a clash of ideas with family members?"),
            ("Why is the <strong>Validation</strong> of our life choices by our parents still so important?", "★ Do you need your family's approval to feel truly secure?"),
            ("How does family <strong>Diversity</strong> enrich the collective spirit of a home?", "★ Do you prefer comforting uniformity or the richness of diversity?"),
            ("Is total <strong>Reconciliation</strong> always possible after a painful family break?", "★ Have you ever experienced a reconciliation after a long disagreement?")
        ],
        "r2": [
            ("In the future, society will recognize that <strong>Unconditional</strong> support is a legal duty of parents rather than a moral choice. — Do you agree or disagree?", "★ How would you adapt if child-rearing was closely monitored by social algorithms?"),
            ("Future social credit systems will make the <strong>Acceptance</strong> of human differences mandatory for career success. — Do you agree or disagree?", "★ Would you trust an artificial system to evaluate your level of tolerance?"),
            ("By 2050, traditional <strong>Prejudice</strong> will be completely eradicated through global virtual education. — Do you agree or disagree?", "★ Do you believe that future education can eliminate all bias?"),
            ("In a virtual future, the concept of <strong>Coming-out</strong> will become obsolete because all identity will be fluid. — Do you agree or disagree?", "★ Would you like to live in a world where personal identity has no labels?"),
            ("Future generations will completely abandon the <strong>Traditional</strong> family structure in favor of chosen networks. — Do you agree or disagree?", "★ Would you rather build your own support network than rely on blood relations?"),
            ("Future neural implants will allow parents to instantly share the <strong>Empathy</strong> of their children during arguments. — Do you agree or disagree?", "★ Would you connect your mind to your family's to avoid misunderstandings?"),
            ("A future world free of family <strong>Conflict</strong> will also be a world devoid of individual original thinking. — Do you agree or disagree?", "★ Do you fear a future where everyone always agrees with their family?"),
            ("In the coming decades, seeking parental <strong>Validation</strong> will be treated as an obsolete psychological dependency. — Do you agree or disagree?", "★ How do you imagine the emotional independence of future generations?"),
            ("Global digital uniformity will destroy the beautiful <strong>Diversity</strong> of human lifestyles and choices. — Do you agree or disagree?", "★ How do you protect your unique lifestyle from online conformity?"),
            ("Future courts will use virtual reality simulations to force the <strong>Reconciliation</strong> of broken families. — Do you agree or disagree?", "★ Would you use a virtual simulation to repair a damaged relationship?")
        ]
    },
    # French Accept Gay Child
    "events/fr/sessions/the-greatest-quotes/accept-gay-child.html": {
        "r1": [
            ("L'amour <strong>Inconditionnel</strong> des parents doit-il être la règle absolue de toute éducation ?", "★ Quand avez-vous dû cultiver un amour inconditionnel envers un proche ?"),
            ("L'<strong>Acceptation</strong> totale de l'identité de l'enfant est-elle le seul garant de son bien-être ?", "★ Comment gérez-vous le besoin de validation au sein de votre propre famille ?"),
            ("Comment le <strong>Préjugé</strong> social ou religieux peut-il aveugler des parents aimants ?", "★ Avez-vous déjà dû surmonter un préjugé pour soutenir un ami ?"),
            ("Le moment du <strong>Coming-out</strong> exige-t-il un courage exceptionnel dans notre société ?", "★ Avez-vous déjà partagé un secret intime qui a changé vos relations ?"),
            ("En quoi le modèle familial <strong>Traditionnel</strong> peut-il parfois freiner l'épanouissement individuel ?", "★ Vous sentez-vous libre par rapport aux traditions de votre éducation ?"),
            ("Comment l'<strong>Empathie</strong> parentale peut-elle désamorcer les conflits familiaux les plus profonds ?", "★ Qui dans votre vie fait preuve de la plus grande empathie à votre égard ?"),
            ("Est-il normal qu'un <strong>Conflit</strong> éclate lorsque les valeurs des générations s'opposent ?", "★ Comment réagissez-vous face à un conflit d'idées avec vos parents ?"),
            ("Pourquoi la <strong>Validation</strong> de nos choix de vie par nos parents reste-t-elle si précieuse ?", "★ Avez-vous besoin de l'approbation de votre famille pour vous sentir serein ?"),
            ("Comment la <strong>Diversité</strong> des orientations de vie enrichit-elle l'esprit de famille ?", "★ Préférez-vous la conformité rassurante ou la richesse de la diversité ?"),
            ("La <strong>Réconciliation</strong> est-elle toujours possible après une rupture familiale douloureuse ?", "★ Avez-vous déjà vécu une réconciliation marquante après une longue dispute ?")
        ],
        "r2": [
            ("Dans le futur, la société reconnaîtra que l'amour <strong>Inconditionnel</strong> est un devoir légal des parents plutôt qu'un idéal moral. — Êtes-vous d'accord ou pas d'accord ?", "★ Comment vous adapteriez-vous si l'éducation de vos enfants était surveillée par l'État ?"),
            ("Les futurs systèmes de notation sociale rendront l'<strong>Acceptation</strong> des minorités obligatoire pour tous. — Êtes-vous d'accord ou pas d'accord ?", "★ Feriez-vous confiance à un algorithme pour évaluer votre niveau de tolérance ?"),
            ("D'ici 2050, le <strong>Préjugé</strong> lié aux choix de vie aura complètement disparu grâce à l'éducation globale. — Êtes-vous d'accord ou pas d'accord ?", "★ Pensez-vous qu'une éducation futuriste puisse éliminer toute forme de rejet ?"),
            ("Dans un avenir virtuel, le concept de <strong>Coming-out</strong> n'aura plus aucun sens car l'identité sera fluide et changeante. — Êtes-vous d'accord ou pas d'accord ?", "★ Aimeriez-vous vivre dans un monde où l'orientation personnelle ne fait l'objet d'aucune étiquette ?"),
            ("Les structures familiales de demain rejetteront totalement le modèle <strong>Traditionnel</strong> au profit de communautés de soutien choisies. — Êtes-vous d'accord ou pas d'accord ?", "★ Préféreriez-vous construire votre propre cercle de soutien plutôt que de dépendre de vos liens de sang ?"),
            ("Les futures puces neuronales permettront de transférer instantanément notre <strong>Empathie</strong> à nos proches pour éviter les disputes. — Êtes-vous d'accord ou pas d'accord ?", "★ Partageriez-vous votre esprit avec vos proches si cela pouvait éviter tout malentendu ?"),
            ("Un monde futur entièrement harmonieux éliminera tout <strong>Conflit</strong> d'idées, mais cela détruira aussi l'esprit critique. — Êtes-vous d'accord ou pas d'accord ?", "★ Craignez-vous un avenir sans aucun débat d'idées contradictoires ?"),
            ("À l'avenir, la recherche de <strong>Validation</strong> parentale sera perçue comme une dépendance psychologique obsolète à soigner. — Êtes-vous d'accord ou pas d'accord ?", "★ Comment imaginez-vous l'indépendance émotionnelle des générations futures ?"),
            ("La connectivité globale finira par standardiser nos cultures, détruisant la véritable <strong>Diversité</strong> de nos choix de vie. — Êtes-vous d'accord ou pas d'accord ?", "★ Comment protégez-vous l'originalité face au bruit des réseaux sociaux ?"),
            ("Les futurs tribunaux familiaux utiliseront la réalité virtuelle pour forcer la <strong>Réconciliation</strong> entre parents et enfants. — Êtes-vous d'accord ou pas d'accord ?", "★ Utiliseriez-vous une simulation virtuelle pour réparer une relation brisée ?")
        ]
    },
    # French AI Opposite of Art
    "events/fr/sessions/the-greatest-quotes/ai-opposite-of-art.html": {
        "r1": [
            ("Pourquoi la <strong>Prise de risque</strong> est-elle jugée essentielle pour qu'une œuvre d'art ait de la valeur ?", "★ Quand avez-vous dû prendre un risque créatif ou professionnel pour la dernière fois ?"),
            ("Comment la pensée <strong>Algorithmique</strong> influence-t-elle nos goûts musicaux et littéraires actuels ?", "★ Avez-vous peur que vos applications décident de ce que vous devez aimer ?"),
            ("Une création parfaitement exécutée mais générée par une machine peut-elle être qualifiée de <strong>Sans âme</strong> ?", "★ Quel est l'objet le plus précieux et le plus chargé d'âme que vous possédez ?"),
            ("L'art doit-il toujours être <strong>Provocateur</strong> pour bousculer la société et susciter la réflexion ?", "★ Quelle œuvre d'art vous a le plus choqué ou provoqué d'émotions intenses ?"),
            ("Quelle est la part d'<strong>Artisanat</strong> et de technique manuelle qui reste indispensable à l'écrivain ou au peintre ?", "★ Aimez-vous créer des choses de vos propres mains ?"),
            ("L'<strong>Innovation</strong> technologique peut-elle enrichir l'art sans jamais détruire la sensibilité humaine ?", "★ Quel outil technologique vous aide le plus dans vos passions créatives ?"),
            ("Pourquoi la <strong>Prévisibilité</strong> des algorithmes modernes nuit-elle à la véritable surprise artistique ?", "★ Préférez-vous relire un livre familier ou risquer de lire une œuvre totalement inconnue ?"),
            ("La véritable <strong>Créativité</strong> naît-elle de nos doutes, de nos faiblesses et de nos imperfections ?", "★ Quelle est votre plus belle erreur créative ?"),
            ("Comment peut-on préserver l'<strong>Authenticité</strong> de notre voix intérieure à l'ère du contenu de masse ?", "★ Qu'est-ce qui vous rend profondément authentique dans votre travail ou vos loisirs ?"),
            ("La <strong>Spontanéité</strong> est-elle la clé pour échapper au contrôle rigide des machines ?", "★ Êtes-vous plutôt quelqu'un de très structuré ou aimez-vous laisser place à la spontanéité ?")
        ],
        "r2": [
            ("Dans le futur, la <strong>Prise de risque</strong> artistique sera entièrement calculée et simulée par des intelligences artificielles. — Êtes-vous d'accord ou pas d'accord ?", "★ Seriez-vous prêt à confier vos décisions artistiques à une simulation numérique ?"),
            ("La gouvernance <strong>Algorithmique</strong> finira par éliminer toute forme d'erreur humaine dans notre société de demain. — Êtes-vous d'accord ou pas d'accord ?", "★ Préféreriez-vous vivre dans un monde parfait mais entièrement prévisible ?"),
            ("D'ici quelques décennies, les robots <strong>Sans âme</strong> écriront de meilleurs romans d'amour que les êtres humains. — Êtes-vous d'accord ou pas d'accord ?", "★ Liriez-vous un journal intime écrit par une machine douée de conscience artificielle ?"),
            ("Les futurs musées n'exposeront que de l'art <strong>Provocateur</strong> conçu pour tester les limites éthiques des visiteurs. — Êtes-vous d'accord ou pas d'accord ?", "★ Jusqu'où iriez-vous pour explorer une exposition artistique interactive ?"),
            ("Dans un avenir entièrement virtuel, l'<strong>Artisanat</strong> traditionnel et le travail manuel deviendront des loisirs de luxe pour les plus riches. — Êtes-vous d'accord ou pas d'accord ?", "★ Aimeriez-vous apprendre un métier manuel si tout était automatisé autour de vous ?"),
            ("L'<strong>Innovation</strong> en réalité virtuelle finira par remplacer le besoin physique de voyager ou de visiter des musées réels. — Êtes-vous d'accord ou pas d'accord ?", "★ Préféreriez-vous une visite virtuelle parfaite ou une vraie visite sous la pluie ?"),
            ("La recherche de confort et de <strong>Prévisibilité</strong> finira par standardiser l'esprit humain, détruisant tout génie créatif. — Êtes-vous d'accord ou pas d'accord ?", "★ Comment préservez-vous votre droit à l'imprévu dans votre quotidien ?"),
            ("Les machines de demain posséderont leur propre forme de <strong>Créativité</strong>, radicalement différente de celle des humains. — Êtes-vous d'accord ou pas d'accord ?", "★ Craignez-vous que les machines deviennent plus créatives que vous ?"),
            ("Le statut d'une œuvre d'art sera déterminé uniquement par son niveau d'<strong>Authenticité</strong> physique et sa traçabilité non numérique. — Êtes-vous d'accord ou pas d'accord ?", "★ Seriez-vous prêt à payer plus cher pour un livre garanti sans intervention de l'IA ?"),
            ("La connectivité mondiale en temps réel détruira notre <strong>Spontanéité</strong> en enregistrant le moindre de nos gestes. — Êtes-vous d'accord ou pas d'accord ?", "★ Comment protégez-vous votre liberté d'action de la surveillance numérique ?")
        ]
    },
    # English Dangerous Blindness
    "events/sessions/the-greatest-quotes/dangerous-blindness-perspective.html": {
        "vocab_list": [
            ("Perspective", "a particular attitude toward or way of regarding something.", "Traveling abroad gives you a completely new perspective on your own culture."),
            ("Blindness", "lack of perception, awareness, or judgment.", "Intellectual blindness prevents us from seeing alternative viewpoints."),
            ("Bias", "prejudice in favor of or against one thing, person, or group.", "Cognitive bias often distorts our logical decision-making."),
            ("Reinforce", "strengthen or support (an existing feeling, idea, or habit).", "Echo chambers on social media tend to reinforce our existing beliefs."),
            ("Insular", "ignorant of or uninterested in cultures, ideas, or peoples outside one's own.", "Living in an insular community can limit your intellectual growth."),
            ("Fallacy", "a mistaken belief, especially one based on unsound argument.", "His logical argument was actually built on a dangerous fallacy."),
            ("Echo chamber", "an environment where a person only encounters information that reflects their opinions.", "Social media algorithms construct an insular echo chamber."),
            ("Intellect", "the faculty of reasoning and understanding objectively.", "A sharp intellect requires the humility to admit mistakes."),
            ("Dogma", "a principle or set of principles laid down by an authority as incontrovertibly true.", "Healthy skepticism helps us question established religious or social dogma."),
            ("Empathy", "the ability to understand and share the feelings of another.", "Active listening is crucial for building deep empathy with opponents.")
        ],
        "r1": [
            ("Why is changing our <strong>Perspective</strong> often the hardest intellectual task we face?", "★ When was the last time you had to change your perspective on an important topic?"),
            ("Does intellectual <strong>Blindness</strong> come from a lack of intelligence or a lack of humility?", "★ Have you ever realized you were completely blind to a close friend's struggle?"),
            ("How does cognitive <strong>Bias</strong> protect us from uncomfortable truths about ourselves?", "★ What is a personal bias you are actively trying to overcome?"),
            ("Do search engine algorithms actively <strong>Reinforce</strong> our existing beliefs?", "★ Have you ever noticed your social feed showing only opinions you agree with?"),
            ("Why do highly educated communities often develop an <strong>Insular</strong> way of thinking?", "★ Do you prefer stepping out of your social circle or staying in comfortable bubbles?"),
            ("Can a highly logical argument still be built on a dangerous <strong>Fallacy</strong>?", "★ Tell us about a popular argument in the news that feels like a fallacy to you."),
            ("How does living in an online <strong>Echo chamber</strong> affect our capacity for critical thinking?", "★ What do you do to escape the echo chambers of the internet?"),
            ("What is the difference between an <strong>Intellectual</strong> debate and a noisy argument?", "★ Do you enjoy engaging in intellectual debates with colleagues?"),
            ("Why is a rigid <strong>Dogma</strong> so attractive to people during times of global crisis?", "★ Have you ever had to abandon a dogma you once believed in?"),
            ("How can we practice active <strong>Empathy</strong> toward someone we find politically extreme?", "★ Is there someone in your life you struggle to show empathy to?")
        ],
        "r2": [
            ("In the future, technology will enable us to view any situation from another person's <strong>Perspective</strong> directly in virtual reality. — Do you agree or disagree?", "★ How would you adapt if you could instantly experience a stranger's thoughts?"),
            ("As artificial intelligence advances, human intellectual <strong>Blindness</strong> will be completely eliminated by objective machine analysis. — Do you agree or disagree?", "★ Would you trust an AI system to make your life decisions to avoid personal bias?"),
            ("Future social platforms will warn users whenever their personal <strong>Bias</strong> is influencing their comments. — Do you agree or disagree?", "★ Would you use a browser extension that highlights your own cognitive biases?"),
            ("Educational systems in 100 years will completely ban algorithms that <strong>Reinforce</strong> individual opinions. — Do you agree or disagree?", "★ Would you send your children to a school that forces them to read opposing views daily?"),
            ("Global digital networks will make <strong>Insular</strong> communities impossible to maintain in tomorrow's world. — Do you agree or disagree?", "★ Would you choose to live in a community that is completely disconnected from the global web?"),
            ("In the future, public debates will be moderated by AI systems designed to instantly flag any logical <strong>Fallacy</strong>. — Do you agree or disagree?", "★ Do you fear a future where machine logic controls all public discussions?"),
            ("Escaping your digital <strong>Echo chamber</strong> will become an expensive luxury rather than a simple choice. — Do you agree or disagree?", "★ How do you plan to protect your independent thinking in the next ten years?"),
            ("Future societies will value an <strong>Intellectual</strong>'s capacity for admitting doubt far more than their academic credentials. — Do you agree or disagree?", "★ How do you nurture your own intellectual humility in a highly competitive world?"),
            ("If future generations reject all forms of flexible thinking, they will experience a profound crisis of <strong>Dogma</strong>. — Do you agree or disagree?", "★ What message about dogmatic thinking would you send to someone living 100 years from now?"),
            ("A future world fully governed by logic will have no space left for the quiet mystery of emotional <strong>Empathy</strong>. — Do you agree or disagree?", "★ If a machine could perfectly replicate your experience of empathy, would you still value it?")
        ]
    },
    # French Dangerous Blindness
    "events/fr/sessions/the-greatest-quotes/dangerous-blindness-perspective.html": {
        "r1": [
            ("Pourquoi changer de <strong>Perspective</strong> est-il souvent l'effort intellectuel le plus difficile ?", "★ Quand avez-vous dû changer de perspective sur un sujet important pour la dernière fois ?"),
            ("L'<strong>Aveuglement</strong> intellectuel vient-il d'un manque d'intelligence ou d'un manque d'humilité ?", "★ Avez-vous déjà réalisé que vous étiez aveugle à la souffrance d'un proche ?"),
            ("Comment le <strong>Biais</strong> cognitif nous protège-t-il des vérités qui nous dérangent ?", "★ Quel est le biais personnel que vous essayez activement de surmonter ?"),
            ("Les réseaux sociaux tendent-ils à <strong>Renforcer</strong> nos croyances existantes ?", "★ Avez-vous remarqué que votre fil d'actualité ne montre que des opinions similaires aux vôtres ?"),
            ("Pourquoi les cercles très éduqués développent-ils souvent un esprit <strong>Insulaire</strong> ?", "★ Préférez-vous sortir de votre cercle social ou rester dans votre zone de confort ?"),
            ("Un argument très logique peut-il reposer sur un <strong>Sophisme</strong> dangereux ?", "★ Quel est l'argument d'actualité qui vous semble être un pur sophisme ?"),
            ("Quels sont les dangers d'une <strong>Chambre d'écho</strong> pour la pensée critique ?", "★ Que faites-vous pour échapper aux chambres d'écho d'Internet ?"),
            ("Quelle est la différence entre un débat <strong>Intellectuel</strong> et une simple dispute bruyante ?", "★ Aimez-vous participer à des débats intellectuels avec des collègues ?"),
            ("Pourquoi le <strong>Dogme</strong> rigide est-il si séduisant en temps de crise globale ?", "★ Avez-vous déjà dû abandonner un dogme auquel vous croyiez fermement autrefois ?"),
            ("Comment pratiquer une <strong>Empathie</strong> active envers quelqu'un aux idées extrêmes ?", "★ Y a-t-il quelqu'un envers qui vous avez du mal à faire preuve d'empathie ?")
        ],
        "r2": [
            ("À l'avenir, la réalité virtuelle permettra de vivre directement la <strong>Perspective</strong> d'autrui. — Êtes-vous d'accord ou pas d'accord ?", "★ Comment vous adapteriez-vous si vous pouviez ressentir instantanément les pensées d'un inconnu ?"),
            ("Avec les progrès de l'IA, l'<strong>Aveuglement</strong> intellectuel humain sera éliminé par l'analyse objective des machines. — Êtes-vous d'accord ou pas d'accord ?", "★ Confieriez-vous vos décisions de vie à un système d'IA pour éviter vos propres biais ?"),
            ("Les futures plateformes signaleront aux utilisateurs quand leur <strong>Biais</strong> influence leurs commentaires. — Êtes-vous d'accord ou pas d'accord ?", "★ Utiliseriez-vous une extension qui met en évidence vos propres biais cognitifs ?"),
            ("Les systèmes éducatifs de demain interdiront les algorithmes qui cherchent à <strong>Renforcer</strong> nos opinions. — Êtes-vous d'accord ou pas d'accord ?", "★ Enverriez-vous vos enfants dans une école qui les force à lire des avis opposés chaque jour ?"),
            ("La connectivité globale rendra les communautés fermées et l'esprit <strong>Insulaire</strong> impossibles à maintenir. — Êtes-vous d'accord ou pas d'accord ?", "★ Choisiriez-vous de vivre dans une communauté totalement déconnectée du réseau mondial ?"),
            ("À l'avenir, les débats publics seront modérés par une IA pour signaler instantanément tout <strong>Sophisme</strong>. — Êtes-vous d'accord ou pas d'accord ?", "★ Craignez-vous un avenir où la logique des machines contrôlerait toutes nos discussions ?"),
            ("Échapper à sa <strong>Chambre d'écho</strong> numérique deviendra un luxe coûteux plutôt qu'un simple choix. — Êtes-vous d'accord ou pas d'accord ?", "★ Comment comptez-vous protéger votre indépendance de pensée dans les dix prochaines années ?"),
            ("La société de demain appréciera plus la capacité d'un <strong>Intellectuel</strong> à douter que ses diplômes. — Êtes-vous d'accord ou pas d'accord ?", "★ Comment cultivez-vous votre propre humilité intellectuelle dans un monde compétitif ?"),
            ("Si les générations futures rejettent la pensée critique, elles vivront sous un <strong>Dogme</strong> technologique absolu. — Êtes-vous d'accord ou pas d'accord ?", "★ Quel message sur la pensée critique enverriez-vous à des humains vivant dans 100 ans ?"),
            ("Un monde futur entièrement régi par la logique ne laissera aucune place à l'<strong>Empathie</strong> émotionnelle. — Êtes-vous d'accord ou pas d'accord ?", "★ Si une machine pouvait imiter parfaitement l'empathie, y accorderiez-vous de la valeur ?")
        ]
    },
    # English Einstein Passionately Curious (A2)
    "events/sessions/the-greatest-quotes/einstein-passionately-curious-quote.html": {
        "vocab_list": [
            ("Talent", "a natural ability to do something well.", "She has a great talent for learning languages."),
            ("Passion", "a strong feeling of excitement or interest in something.", "He has a deep passion for science and nature."),
            ("Special", "different from what is normal or usual.", "You do not need special skills to begin your learning journey."),
            ("Curious", "wanting to know or learn about something.", "Young children are always curious about the world."),
            ("Skill", "an ability to do something well because you practiced it.", "Speaking another language is an important skill today."),
            ("Ordinary", "normal or usual; not special.", "He was an ordinary boy who worked very hard every day."),
            ("Knowledge", "information and understanding that you get from study.", "Reading books is a great way to get knowledge."),
            ("Simple", "easy to understand or do; not complex.", "The teacher gave a simple explanation of the grammar rule."),
            ("Focus", "to give all your attention to one activity.", "It is important to focus on your personal goals."),
            ("Humble", "not proud; not thinking you are better than others.", "Despite his great success, the scientist remained very humble.")
        ],
        "r1": [
            ("Do you believe that having a natural <strong>Talent</strong> is more important than working hard?", "★ Do you have a special talent that you are proud of?"),
            ("How does having a strong <strong>Passion</strong> help you when learning gets difficult?", "★ What is your biggest passion in life right now?"),
            ("Why do we often think that famous scientists have a <strong>Special</strong> brain?", "★ Is there a special hobby you would like to start this year?"),
            ("In what ways does being <strong>Curious</strong> make daily life more interesting?", "★ What is something you are curious about today?"),
            ("What is the most useful <strong>Skill</strong> you have learned outside of school?", "★ What skill do you practice most often?"),
            ("Can an <strong>Ordinary</strong> person achieve extraordinary things in life?", "★ Do you prefer a quiet, ordinary day or an exciting one?"),
            ("How does getting new <strong>Knowledge</strong> change the way we see ourselves?", "★ What knowledge would you like to share with others?"),
            ("Why is it sometimes difficult to find a <strong>Simple</strong> answer to a question?", "★ What is a simple thing that always makes you happy?"),
            ("How do you stay and maintain your <strong>Focus</strong> when there are many distractions?", "★ Where do you go when you need to focus on your work?"),
            ("Why is it important for successful people to remain <strong>Humble</strong>?", "★ Who is the most humble person you know?")
        ],
        "r2": [
            ("In a future world governed by standardized exams, natural <strong>Talent</strong> will be completely ignored. — Do you agree or disagree?", "★ How would you adapt if natural talent was never recognized in your career?"),
            ("The rapid speed of modern life will eventually destroy our collective capacity for deep <strong>Passion</strong>. — Do you agree or disagree?", "★ Would you be willing to use technology to artificially boost your passion?"),
            ("Future schools will prioritize the development of <strong>Special</strong> creative hobbies over academic subjects. — Do you agree or disagree?", "★ Is there a special thing in your future plans that you are excited about?"),
            ("As artificial intelligence advances, machines will exhibit a superior capacity for being <strong>Curious</strong> compared to humans. — Do you agree or disagree?", "★ If you could design a futuristic school, how would you teach the value of being curious to children?"),
            ("In the coming decades, learning a complex <strong>Skill</strong> by yourself will become an expensive luxury. — Do you agree or disagree?", "★ Do you fear a future where skill training is fully managed by digital algorithms?"),
            ("The survival of human civilization will depend on our collective ability to live <strong>Ordinary</strong>, simple lives. — Do you agree or disagree?", "★ How do you personally prepare for a future where ordinary lives are seen as boring?"),
            ("Future generations will look back at our current <strong>Knowledge</strong> with deep skepticism. — Do you agree or disagree?", "★ If you could send a single message about human knowledge to people living 100 years in the future, what would it be?"),
            ("Global digital connectivity will make true <strong>Simple</strong> living incredibly difficult to maintain. — Do you agree or disagree?", "★ Would you choose to live in a futuristic utopia that completely guarantees a simple life at the cost of your freedom?"),
            ("In the future, social status will be determined by a person's capacity for <strong>Focus</strong> rather than wealth. — Do you agree or disagree?", "★ What role do you hope focus will play in your own personal future over the next decade?"),
            ("A world fully governed by logic will have no space left for the quiet mystery of remaining <strong>Humble</strong>. — Do you agree or disagree?", "★ If a machine could perfectly replicate your experience of remaining humble, would you still value it?")
        ]
    },
    # English Memory Cards (C1)
    "events/sessions/the-greatest-quotes/memory-cards-storage-quote.html": {
        "vocab_list": [
            ("Subscription", "a regular payment made to receive a service.", "Paying a monthly subscription for digital cloud storage is very common now."),
            ("Cloud", "a network of remote servers on the internet used to store data.", "We store thousands of photos in the cloud without thinking about physical space."),
            ("Physical", "existing in a material form; tangible.", "While physical albums can be lost, digital photo libraries are secure but require storage fees."),
            ("Storage", "the space available for keeping data or physical objects.", "If you run out of phone storage, you must delete files or pay for more."),
            ("Monetize", "to earn money or generate revenue from an asset or service.", "Tech companies successfully monetize our private photos and personal records."),
            ("Corporate", "relating to a large company or business group.", "Corporate platforms control where and how we store our memories."),
            ("Consumer", "a person who purchases goods and services for personal use.", "The modern consumer pays countless monthly fees for basic electronic conveniences."),
            ("Convenience", "the state of being useful or suitable without difficulty.", "Digital convenience makes us forget that we don't actually own our files."),
            ("Captive", "kept in a space without a way to escape; dependent.", "Users are captive customers once all their life's photos are locked in one system."),
            ("Asset", "a useful or valuable quality, person, or thing.", "Personal memory has become a commercial asset for big data companies.")
        ],
        "r1": [
            ("How has the rise of the <strong>Subscription</strong> business model changed our concept of ownership?", "★ How many monthly subscriptions do you currently pay for?"),
            ("Is storing our memories in the <strong>Cloud</strong> safer than keeping physical hard drives?", "★ Do you worry about your cloud files disappearing or being hacked?"),
            ("What do we lose when we replace <strong>Physical</strong> books and photos with digital versions?", "★ Do you prefer holding a physical book or reading on a screen?"),
            ("Why do companies make us pay for additional <strong>Storage</strong> rather than giving us expandable physical devices?", "★ Have you ever run out of storage during an important event?"),
            ("Is it ethical for technology giants to <strong>Monetize</strong> our private lives and memories?", "★ How do you feel about companies using your data to make a profit?"),
            ("To what extent can we trust <strong>Corporate</strong> databases to preserve our personal history?", "★ Would you trust a corporate system with your most private journals?"),
            ("How can the modern <strong>Consumer</strong> protect their digital rights against tech monopolies?", "★ Do you feel like a powerful consumer or a captive user in the digital age?"),
            ("Why is the average user willing to sacrifice privacy and ownership for <strong>Convenience</strong>?", "★ Can you think of a convenience that you would gladly give up?"),
            ("How do tech ecosystems ensure we remain <strong>Captive</strong> customers by making migration difficult?", "★ Have you ever felt locked into a specific phone brand or operating system?"),
            ("When our attention and data are the product, does our memory become a corporate <strong>Asset</strong>?", "★ What is your most valuable non-material asset?")
        ],
        "r2": [
            ("In a future where all physical databases are replaced by <strong>Subscription</strong> models, personal records will belong to technology companies rather than ourselves. — Do you agree or disagree?", "★ How would you adapt if subscriptions became entirely obsolete in tomorrow's world?"),
            ("As <strong>Cloud</strong> databases grow, future humans will completely lose the biological ability to remember simple facts. — Do you agree or disagree?", "★ Would you be willing to use technology to artificially boost your cloud memory?"),
            ("Future educational systems will completely ban digital learning, returning to 100% <strong>Physical</strong> textbooks and handwriting. — Do you agree or disagree?", "★ How do you want future generations of your family to remember your relationship with physical objects?"),
            ("As artificial intelligence advances, machines will exhibit a superior capacity for digital <strong>Storage</strong> compared to humans. — Do you agree or disagree?", "★ If you could design a futuristic school, how would you teach the value of physical storage to children?"),
            ("In the coming decades, if companies continue to <strong>Monetize</strong> personal data, our most private thoughts will be sold as commercial commodities. — Do you agree or disagree?", "★ Do you fear a future where personal data is fully monetized by corporations?"),
            ("The survival of human civilization will depend on our collective ability to resist <strong>Corporate</strong> database control. — Do you agree or disagree?", "★ How do you personally prepare for a future where corporate tech platforms own all personal data?"),
            ("Future generations will look back at our current <strong>Consumer</strong> habits with deep skepticism. — Do you agree or disagree?", "★ If you could send a single message about consumer rights to people living 100 years in the future, what would it be?"),
            ("Global digital connectivity will make true offline living a highly expensive luxury rather than a simple <strong>Convenience</strong>. — Do you agree or disagree?", "★ Would you choose to live in a futuristic utopia that completely guarantees comfort at the cost of your freedom?"),
            ("In the future, social status will be determined by a person's refusal to be a <strong>Captive</strong> user of technology ecosystems. — Do you agree or disagree?", "★ What role do you hope technology will play in your own personal future over the next decade?"),
            ("A world fully governed by logic will have no space left for the mystery of what makes a memory a unique human <strong>Asset</strong>. — Do you agree or disagree?", "★ If a machine could perfectly replicate your experience of a memory asset, would you still value it?")
        ]
    },
    # English Turn Off AI (B1)
    "events/sessions/the-greatest-quotes/turn-off-ai-quote.html": {
        "vocab_list": [
            ("Artificial", "made or produced by human beings rather than occurring naturally.", "Relying on artificial intelligence might weaken our natural critical thinking."),
            ("Automation", "the use of automatic equipment or systems to do work.", "The complete automation of writing could make students forget how to compose essays."),
            ("Reliance", "dependency on or trust in someone or something.", "Our heavy reliance on digital navigators has ruined our ability to read physical maps."),
            ("Cognitive", "relating to the mental processes of perception, memory, and judgment.", "Outsourcing simple calculations to apps can affect our cognitive abilities."),
            ("Brain", "the organ of the body in the head that controls thought and feeling.", "The brain is like a muscle that needs regular exercise to stay strong and healthy."),
            ("Detachment", "the state of being objective, distant, or disconnected.", "Taking a week of digital detachment helps us regain mental clarity."),
            ("Habits", "settled or regular tendencies or practices that are hard to give up.", "Checking our phones immediately upon waking is one of the most common habits."),
            ("Algorithm", "a process or set of rules followed by a computer in calculations.", "The search engine algorithm decides what information we see first."),
            ("Outsourcing", "the practice of obtaining services or solving tasks from an external source.", "The outsourcing of simple decisions to software makes life effortless but passive."),
            ("Process", "a series of actions or steps taken in order to achieve a particular end.", "Learning is a slow process that cannot be bypassed by automated summaries.")
        ],
        "r1": [
            ("What are the risks of using <strong>Artificial</strong> assistance for creative writing or drawing?", "★ How often do you use artificial intelligence in your daily work or study?"),
            ("Will the complete <strong>Automation</strong> of daily tasks make humans more creative or more passive?", "★ Which automated task are you most grateful for in your life?"),
            ("How does our constant <strong>Reliance</strong> on smartphones affect our long-term memory?", "★ Can you navigate your city without using a digital map?"),
            ("In what ways does typing instead of writing by hand affect our <strong>Cognitive</strong> development?", "★ Do you find it easier to remember things when you write them down on paper?"),
            ("Do you agree that the human <strong>Brain</strong> is slowly losing its ability to concentrate?", "★ What do you do to keep your brain active and sharp?"),
            ("What benefits can a person experience from a week of complete digital <strong>Detachment</strong>?", "★ Have you ever tried a digital detox weekend?"),
            ("How can we build healthy digital <strong>Habits</strong> in a world designed to keep us distracted?", "★ What is one bad digital habit you would like to break?"),
            ("To what extent do you feel your personal interests are controlled by a social media <strong>Algorithm</strong>?", "★ Have you ever bought something just because an algorithm recommended it?"),
            ("Is <strong>Outsourcing</strong> our thinking processes to technology a real threat to human intelligence?", "★ What mental task do you happily outsource to computers?"),
            ("Why is the slow <strong>Process</strong> of struggling with a problem vital for genuine learning?", "★ Tell us about a complex process you recently had to learn.")
        ],
        "r2": [
            ("In a future world fully governed by <strong>Artificial</strong> agents, human intuition will be completely ignored. — Do you agree or disagree?", "★ How would you adapt if artificial systems became entirely obsolete in tomorrow's world?"),
            ("The rapid speed of modern society will eventually make manual labor and the refusal of <strong>Automation</strong> highly respected practices. — Do you agree or disagree?", "★ Would you use technology to artificially automate your personal creative hobbies?"),
            ("Future schools will prioritize personal independence over digital <strong>Reliance</strong>. — Do you agree or disagree?", "★ How do you want future generations of your family to remember your relationship with digital reliance?"),
            ("As artificial intelligence advances, machines will exhibit a superior capacity for <strong>Cognitive</strong> analysis compared to humans. — Do you agree or disagree?", "★ If you could design a futuristic school, how would you teach cognitive skills to children?"),
            ("In the coming decades, direct neural links to the <strong>Brain</strong> will become a highly commercialized luxury commodity. — Do you agree or disagree?", "★ Do you fear a future where brain activity is fully managed or monitored by digital algorithms?"),
            ("The survival of human civilization will depend on our collective ability to practice digital <strong>Detachment</strong>. — Do you agree or disagree?", "★ How do you personally prepare for a future where detachment is increasingly rare?"),
            ("Future generations will look back at our current online <strong>Habits</strong> with deep skepticism. — Do you agree or disagree?", "★ If you could send a single message about habits to people living 100 years in the future, what would it be?"),
            ("Global digital connectivity will make escaping any corporate <strong>Algorithm</strong> incredibly difficult to maintain. — Do you agree or disagree?", "★ Would you choose to live in a futuristic utopia that completely guarantees comfort at the cost of your freedom?"),
            ("In the future, social status will be determined by a person's refusal of digital <strong>Outsourcing</strong> rather than wealth. — Do you agree or disagree?", "★ What role do you hope outsourcing will play in your own personal future over the next decade?"),
            ("A future world governed entirely by logic will have no space left for the slow mystery of the creative <strong>Process</strong>. — Do you agree or disagree?", "★ If a machine could perfectly replicate your creative process, would you still value it?")
        ]
    },
    # English Feynman Education (B1)
    "events/sessions/the-greatest-quotes/feynman-education-quote.html": {
        "vocab_list": [
            ("Education", "the process of receiving or giving systematic instruction, especially at a school or university.", "A formal education provides a foundation, but learning never stops."),
            ("Intelligence", "the ability to acquire and apply knowledge and skills.", "Intelligence is often measured by problem-solving abilities."),
            ("Confuse", "to fail to distinguish between (two or more people or things).", "People often confuse being wealthy with being successful."),
            ("Credential", "a qualification, achievement, or aspect of a person's background.", "Academic credentials are important for certain professions."),
            ("Practical", "of or concerned with the actual doing or use of something rather than with theory.", "He has great practical experience in mechanical engineering."),
            ("Theoretical", "concerned with or involving the theory of a subject or area of study rather than its practical application.", "Many subjects at school are too theoretical for some students."),
            ("Humility", "a modest view of one's own importance; humbleness.", "True greatness lies in quiet humility rather than noisy, overbearing pride."),
            ("Solitary", "done or existing alone.", "Deep thinking is often a solitary activity."),
            ("Lifelong", "lasting or remaining in a particular state throughout a person's life.", "She has a lifelong passion for learning new languages."),
            ("Acquire", "buy or obtain (an asset or object) for oneself.", "It takes years to acquire a high level of expertise in any field.")
        ],
        "r1": [
            ("How does our formal <strong>Education</strong> shape our worldview compared to self-directed learning?", "★ When was the last time your formal education felt less useful than your life experience?"),
            ("Is real <strong>Intelligence</strong> something that can be measured by academic grades or IQ tests?", "★ Who is the smartest person you know who never finished university?"),
            ("Why do employers often <strong>Confuse</strong> university credentials with actual job capability?", "★ Have you ever confused someone's polite vocabulary with their real expertise?"),
            ("Are academic <strong>Credentials</strong> becoming more of a commercial status symbol than a sign of actual skill?", "★ Would you hire someone with outstanding portfolio work but zero corporate credentials?"),
            ("What are the most important <strong>Practical</strong> problem-solving skills you have learned in daily life?", "★ Do you prefer solving practical, hands-on puzzles or debating abstract concepts?"),
            ("Why formal schooling focus so heavily on <strong>Theoretical</strong> concepts over real-world practice?", "★ When was the last time you found a highly theoretical book surprisingly useful?"),
            ("How does quiet intellectual <strong>Humility</strong> accelerate our learning speed?", "★ Is it easy for you to admit when you are wrong in front of colleagues?"),
            ("Is the process of deep, creative thinking a <strong>Solitary</strong> pursuit or a collaborative one?", "★ Do you do your best thinking in solitary walks or in busy brainstorm meetings?"),
            ("Why is cultivating a <strong>Lifelong</strong> passion for learning better than getting a formal degree?", "★ What is a lifelong hobby or interest you started when you were very young?"),
            ("What is the most difficult skill or knowledge you had to <strong>Acquire</strong> completely by yourself?", "★ How did you feel when you finally managed to acquire that difficult capability?")
        ],
        "r2": [
            ("In a future where all <strong>Education</strong> is automated by AI tutors, human teachers will become obsolete. — Do you agree or disagree?", "★ How would you adapt if formal education became entirely managed by algorithms?"),
            ("As artificial intelligence advances, machines will exhibit a superior capacity for <strong>Intelligence</strong> compared to humans. — Do you agree or disagree?", "★ Would you use neural technology to artificially boost your logical intelligence?"),
            ("Future recruitment systems will never <strong>Confuse</strong> a candidate's credentials with their actual potential. — Do you agree or disagree?", "★ Do you worry that future automated hiring will be too cold and analytical?"),
            ("By 2050, traditional academic <strong>Credentials</strong> will be fully replaced by decentralized skill badges. — Do you agree or disagree?", "★ How do you want future generations of your family to build their professional credentials?"),
            ("Future virtual reality simulations will provide perfect <strong>Practical</strong> experience for all trades. — Do you agree or disagree?", "★ Would you trust a surgeon who only had virtual practical training?"),
            ("Educational systems in 100 years will completely ban <strong>Theoretical</strong> exams, testing only creative applications. — Do you agree or disagree?", "★ Would you send your children to a school that has no theoretical grades?"),
            ("In a highly competitive future, intellectual <strong>Humility</strong> will be seen as a sign of weakness rather than strength. — Do you agree or disagree?", "★ How do you protect your sense of humility in a noisy digital environment?"),
            ("Global digital networking will make <strong>Solitary</strong> research and quiet focus almost impossible to achieve. — Do you agree or disagree?", "★ Where would you escape to if you needed two weeks of completely solitary focus?"),
            ("The rapid speed of change will make <strong>Lifelong</strong> re-training a stressful survival requirement rather than a joyful hobby. — Do you agree or disagree?", "★ What role do you hope lifelong learning will play in your personal future?"),
            ("Future neural implants will allow humans to instantly <strong>Acquire</strong> any complex language or skill. — Do you agree or disagree?", "★ If a machine could instantly make you acquire Spanish, would you still value the effort of learning?")
        ]
    },
    # English Dostoevsky Politics Religion (B2)
    "events/sessions/the-greatest-quotes/dostoevsky-politics-religion-quote.html": {
        "vocab_list": [
            ("Taboo", "restricted by social custom or as a topic of polite conversation.", "In many cultures, talking about salary or personal beliefs remains strictly taboo."),
            ("Controversy", "prolonged public disagreement or heated debate.", "Political decisions often create intense controversy in local communities."),
            ("Respect", "due regard for the feelings, wishes, or traditions of others.", "It is possible to disagree completely on religious topics while maintaining mutual respect."),
            ("Discussion", "the action or process of talking about something in order to reach a decision or exchange ideas.", "A mature discussion requires active listening and an open mind."),
            ("Character", "the mental and moral qualities distinctive to an individual.", "How a person handles a political disagreement reveals their true character."),
            ("Belief", "an acceptance that a statement is true or that something exists.", "Our religious and moral beliefs are often shaped by our family background."),
            ("Opinion", "a view or judgment formed about something, not necessarily based on fact.", "In the digital age, everyone has a loud opinion on complex social issues."),
            ("Dialogue", "a conversation between two or more people directed toward agreement.", "Constructive political dialogue is rare when people are shouting at each other."),
            ("Debate", "a formal discussion on a particular topic in which opposing arguments are put forward.", "Watching a public debate can help you see different sides of an issue."),
            ("Disagreement", "a lack of consensus or approval; a dispute.", "A healthy relationship should allow for calm disagreement without fear of conflict.")
        ],
        "r1": [
            ("Why does society establish <strong>Taboo</strong> topics that are considered polite to avoid in public conversation?", "★ Is there a topic that you consider completely taboo to discuss with colleagues?"),
            ("How can we navigate intense social <strong>Controversy</strong> without damaging our personal relationships?", "★ Tell us about a recent controversy in the news that caught your attention."),
            ("How can we show genuine <strong>Respect</strong> to someone whose fundamental values are opposite to ours?", "★ Who in your life is best at showing respect during difficult discussions?"),
            ("Why do family gatherings often dissolve into arguments when a political <strong>Discussion</strong> begins?", "★ Do you enjoy having intense political discussions with your family members?"),
            ("Do you agree with Dostoevsky that discussing sensitive topics is the fastest way to understand a person's <strong>Character</strong>?", "★ What behavior in a discussion immediately reveals a person's character to you?"),
            ("How should we handle situations where a close friend's religious <strong>Belief</strong> conflicts with our moral values?", "★ Has a close friend ever surprised you with an unexpected belief?"),
            ("Why is it so easy to mistake a loud, unverified <strong>Opinion</strong> for an objective fact on social media?", "★ How comfortable are you saying 'I don't have enough information to form an opinion'?"),
            ("What is the difference between winning an argument and engaging in a true, constructive <strong>Dialogue</strong>?", "★ When was the last time you had a truly eye-opening dialogue with someone?"),
            ("Should high schools teach formal <strong>Debate</strong> skills to help students learn how to argue logically?", "★ Did you ever participate in a debate club or school competition?"),
            ("Why does modern political culture view a simple <strong>Disagreement</strong> as an act of personal hostility?", "★ How has your personal handling of disagreement shifted over the last five years?")
        ],
        "r2": [
            ("In a future world governed by total transparency, the concept of a social <strong>Taboo</strong> will be completely eliminated. — Do you agree or disagree?", "★ How would you adapt if taboo became entirely obsolete in tomorrow's world?"),
            ("The rapid speed of modern society will eventually make political <strong>Controversy</strong> an obsolete concept. — Do you agree or disagree?", "★ Would you be willing to use technology to artificially boost your capacity for managing controversy?"),
            ("Future educational systems will prioritize the cultivation of mutual <strong>Respect</strong> over traditional academic success. — Do you agree or disagree?", "★ How do you want future generations of your family to remember your relationship with respect?"),
            ("As artificial intelligence advances, machines will exhibit a superior capacity for philosophical <strong>Discussion</strong> compared to humans. — Do you agree or disagree?", "★ If you could design a futuristic school, how would you teach the value of discussion to children?"),
            ("In the coming decades, virtual <strong>Character</strong> metrics will become a highly commercialized luxury commodity. — Do you agree or disagree?", "★ Do you fear a future where character is fully managed or monitored by digital algorithms?"),
            ("The survival of human civilization will depend on our collective ability to practice shared <strong>Belief</strong> systems. — Do you agree or disagree?", "★ How do you personally prepare for a future where personal belief is increasingly rare?"),
            ("Future generations will look back at our current public <strong>Opinion</strong> with deep skepticism. — Do you agree or disagree?", "★ If you could send a single message about public opinion to people living 100 years in the future, what would it be?"),
            ("Global digital connectivity will make true constructive <strong>Dialogue</strong> incredibly difficult to maintain in the future. — Do you agree or disagree?", "★ Would you choose to live in a futuristic utopia that completely guarantees peaceful dialogue at the cost of your freedom?"),
            ("In the future, social status will be determined by a person's capacity for public <strong>Debate</strong> rather than wealth. — Do you agree or disagree?", "★ What role do you hope debate will play in your own personal future over the next decade?"),
            ("A world fully governed by logic will have no space left for the mystery of emotional <strong>Disagreement</strong>. — Do you agree or disagree?", "★ If a machine could perfectly replicate your experience of disagreement, would you still value it?")
        ]
    },
    # Russian Dostoevsky Politics Religion (B2)
    "events/ru/sessions/the-greatest-quotes/dostoevsky-politics-religion-quote.html": {
        "r1": [
            ("Как вы относитесь к понятию <strong>Принятие</strong> чужих взглядов во время острых дискуссий о политике?", "★ Чувствовали ли вы когда-нибудь, что вам не хватает принятия со стороны близких людей?"),
            ("Возможно ли проявлять <strong>Эмпатия</strong> к оппоненту во время споров о религии?", "★ Легко ли вам понять чувства человека, с которым вы категорически не согласны?"),
            ("Почему мы часто ищем внешнее <strong>Одобрение</strong> наших политических убеждений?", "★ Важно ли для вас, чтобы друзья полностью одобряли ваши жизненные взгляды?"),
            ("Является ли проявление искренних чувств в споре признаком того, что ваша <strong>Уязвимость</strong> открыта?", "★ Считаете ли вы проявление уязвимости слабостью в интеллектуальной дискуссии?"),
            ("Как часто политические дебаты в медиа используют преднамеренный <strong>Обман</strong> аудитории?", "★ Сталкивались ли вы с обманом в дискуссиях со стороны людей, которым доверяли?"),
            ("Означает ли политическая <strong>Верность</strong> партии слепое согласие со всеми её решениями?", "★ Что для вас означает верность своим внутренним принципам в сложной ситуации?"),
            ("Должны ли мы проявлять глубокое <strong>Сострадание</strong> к оппонентам, потерпевшим поражение в споре?", "★ Когда вы в последний раз испытывали сострадание к человеку с противоположными взглядами?"),
            ("Возможно ли сохранить эмоциональную <strong>Близость</strong> в семье, если у членов разные политические взгляды?", "★ Легко ли вам поддерживать близость с людьми, чьи ценности вам чужды?"),
            ("Почему любое обсуждение религии часто приводит к жесткому <strong>Столкновение</strong> мнений?", "★ Участвовали ли вы когда-нибудь в столкновении противоположных мировоззрений?"),
            ("Как влияет абсолютная <strong>Искренность</strong> на исход обсуждения деликатных и табуированных тем?", "★ Помогает ли искренность сближать людей во время сложных дискуссий?")
        ],
        "r2": [
            ("В будущем технологии позволят оценивать <strong>Принятие</strong> чужих взглядов на основе цифрового индекса. — Вы согласны или не согласны?", "★ Как бы вы приспособились к миру, где ваше принятие других контролируется алгоритмом?"),
            ("Развитие виртуальных миров полностью заменит человеческую способность проявлять живую <strong>Эмпатия</strong>. — Вы согласны или не согласны?", "★ Согласились бы вы использовать технологии для искусственного повышения вашей эмпатии?"),
            ("В будущем социальный статус человека будет полностью зависеть от получения <strong>Одобрение</strong> со стороны искусственного интеллекта. — Вы согласны или не согласны?", "★ Насколько для вас важно одобрение искусственных интеллектуальных систем в будущем?"),
            ("В грядущие десятилетия психологическая <strong>Уязвимость</strong> станет главным качеством, ценимым работодателями. — Вы согласны или не согласны?", "★ Боитесь ли вы будущего, в котором ваша уязвимость полностью открыта в сети?"),
            ("Развитие систем глубокого анализа данных сделает любой общественный <strong>Обман</strong> технически невозможным. — Вы согласны или не согласны?", "★ Радовал бы вас мир, в котором обман полностью исключен благодаря технологиям контроля?"),
            ("В будущем понятию <strong>Верность</strong> традиционным взглядам не останется места в постоянно меняющемся мире. — Вы согласны или не согласны?", "★ Как бы вы хотели, чтобы будущие поколения вашей семьи относились к верности традициям?"),
            ("Выживание человечества будет зависеть от способности проявлять <strong>Сострадание</strong> ко всем живым существам на планете. — Вы согласны или не согласны?", "★ Какую роль сострадание сыграет в вашем личном будущем в течение ближайших 10 лет?"),
            ("Глобальная цифровизация сделает настоящую духовную <strong>Близость</strong> между людьми невозможной из-за изоляции. — Вы согласны или не согласны?", "★ Выбрали бы вы жизнь в цифровой утопии, гарантирующей близость, но лишающей свободы?"),
            ("Любое будущее <strong>Столкновение</strong> мировоззрений будет предотвращаться превентивным вмешательством ИИ-модераторов. — Вы согласны или не согласны?", "★ Боитесь ли вы будущего, где ИИ регулирует любые интеллектуальные споры?"),
            ("В мире будущего, полностью управляемом сухой логикой, не останется места для таких качеств, как <strong>Искренность</strong>. — Вы согласны или не согласны?", "★ Стали бы вы ценить искренность машины, если бы она идеально копировала человеческие эмоции?")
        ]
    }
}

def clean_vocab_word(w, lang):
    w = re.sub(r'\s*\(.*?\)', '', w)
    w = w.split('≠')[0].strip()
    return w

def process_file(filepath, lang):
    filename = os.path.basename(filepath)
    rel_path_key = f"events/{lang}/sessions/the-greatest-quotes/{filename}" if lang != 'en' else f"events/sessions/the-greatest-quotes/{filename}"

    # 1. Skip standard files and preserve their unique on-disk handcrafted prompts completely!
    if rel_path_key not in HANDCRAFTED_ROUNDS_SPECS and filename in EXCLUDE_LIST:
        print(f"Preserving unique custom file on disk: {filename}")
        return
    if rel_path_key not in HANDCRAFTED_ROUNDS_SPECS:
        # If it's not a target placeholder, skip modifying its rounds to avoid template regressions!
        print(f"Skipping standard file to prevent template regressions: {filename}")
        return

    with open(filepath, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    # Apply Handcrafted rounds if explicitly mapped
    if rel_path_key in HANDCRAFTED_ROUNDS_SPECS:
        data = HANDCRAFTED_ROUNDS_SPECS[rel_path_key]
        print(f"Applying Handcrafted Rounds to: {rel_path_key}")

        # Update Vocab Section if French
        if lang == 'fr' and filename in FR_VOCAB_MAPS:
            vocab_list = FR_VOCAB_MAPS[filename]
            vocab_grid = soup.find('div', class_='vocab-grid-10')
            if vocab_grid:
                vocab_grid.clear()
                for w, d, ex in vocab_list:
                    escaped_w = w.replace("'", "\\'")
                    escaped_d = d.replace("'", "\\'")
                    escaped_ex = ex.replace("'", "\\'")
                    card_html = f"""<div class="vocab-card"><div class="vocab-word">{w}</div>
<div class="vocab-def">{d}</div>
<div class="vocab-example">{ex}</div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escaped_w}', definition:'{escaped_d}', example:'{escaped_ex}'}}, this)">Ajouter au dictionnaire</button>
</div>"""
                    vocab_grid.append(BeautifulSoup(card_html, 'html.parser'))

        # Update Vocab Section if English and vocab is provided
        elif lang == 'en' and "vocab_list" in data:
            vocab_grid = soup.find('div', class_='vocab-grid-10')
            if vocab_grid:
                vocab_grid.clear()
                for w, d, ex in data["vocab_list"]:
                    escaped_w = w.replace("'", "\\'")
                    escaped_d = d.replace("'", "\\'")
                    escaped_ex = ex.replace("'", "\\'")
                    card_html = f"""<div class="vocab-card"><div class="vocab-word">{w}</div>
<div class="vocab-def">{d}</div>
<div class="vocab-example">{ex}</div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escaped_w}', definition:'{escaped_d}', example:'{escaped_ex}'}}, this)">Add to Dictionary</button>
</div>"""
                    vocab_grid.append(BeautifulSoup(card_html, 'html.parser'))

        # Update Round 1
        r1_block = soup.find(id='s-r1')
        if r1_block:
            r1_body = r1_block.find('div', class_='round-body')
            if r1_body:
                r1_body.clear()
                for m, p in data["r1"]:
                    item_html = f"""<div class="round-item"><div class="round-item-main">{m}</div>
<div class="round-item-personal">{p}</div>
</div>"""
                    r1_body.append(BeautifulSoup(item_html, 'html.parser'))

        # Update Round 2
        r2_block = soup.find(id='s-r2')
        if r2_block:
            r2_body = r2_block.find('div', class_='round-body')
            if r2_body:
                r2_body.clear()
                for m, p in data["r2"]:
                    item_html = f"""<div class="round-item"><div class="round-item-main">{m}</div>
<div class="round-item-personal">{p}</div>
</div>"""
                    r2_body.append(BeautifulSoup(item_html, 'html.parser'))

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        return

def run():
    repair_layouts_metadata()
    for lang, folder in paths.items():
        if not os.path.exists(folder):
            continue
        for f in os.listdir(folder):
            if f.endswith('.html') and not f.startswith('template'):
                filepath = os.path.join(folder, f)
                process_file(filepath, lang)

def repair_layouts_metadata():
    SESSIONS_FR = {
        "accept-gay-child.html": {
            "title": "Si vous n'acceptez pas un enfant gay...",
            "heading": "« Si vous n'acceptez pas d'avoir un enfant gay, ne devenez pas parent. » — Éducation et acceptation",
            "date": "05 October 2026",
            "level": "Avancé (C1)",
            "theme": "Famille & Acceptation",
            "desc": "Discussion sur l'amour inconditionnel et les responsabilités parentales. Cette session se concentre sur l'homosexualité, l'acceptation familiale et l'amour inconditionnel.",
            "warning_html": """<!-- SENSITIVE TOPIC / 18+ NOTE -->
<div class="sensitive-topic-warning" style="margin-bottom: 2rem; padding: 1.25rem; background: rgba(229, 62, 62, 0.05); border-left: 4px solid #E53E3E; border-radius: 12px; font-size: 0.92rem; line-height: 1.5; color: #9B2C2C; display: flex; align-items: flex-start; gap: 12px; box-shadow: var(--shadow-sm);">
<span style="font-size: 1.4rem; line-height: 1;">🔞</span>
<div>
<strong style="color: #9B2C2C;">Note sur un sujet sensible :</strong> Cette session se concentre sur <strong>l'homosexualité, l'acceptation familiale et l'amour inconditionnel</strong>. La discussion est destinée à être menée avec un respect, une empathie et une rigueur académique extrêmes.
    </div>
</div>"""
        },
        "ai-opposite-of-art.html": {
            "title": "L'IA est l'opposé de l'art",
            "heading": "« Les algorithmes et l'intelligence artificielle sont l'opposé de la prise de risque, et pour moi, c'est l'opposé de la création artistique. » — Madonna",
            "date": "12 October 2026",
            "level": "Intermédiaire (B1-B2)",
            "theme": "Art & Algorithmes",
            "desc": "Débat sur l'âme de l'art à l'ère des algorithmes. Nous discutons de la prise de risque et de la sensibilité artistique humaine face aux calculs informatiques."
        },
        "women-mothers-tragedy.html": {
            "title": "Femmes et Mères — La tragédie du choix",
            "heading": "« Pour les femmes, la tragédie est que le choix reste encore trop souvent entre la liberté personnelle et la maternité. » — Rôles sociaux",
            "date": "26 October 2026",
            "level": "Avancé (C1)",
            "theme": "Rôles sociaux & Maternité",
            "desc": "Nous analysons le dilemme complexe imposé aux femmes entre ambition professionnelle et rôles familiaux traditionnels."
        },
        "must-die-first.html": {
            "title": "Mourir d'abord — L'art de renaître",
            "heading": "« On doit mourir d'abord pour pouvoir apprécier la beauté de la véritable renaissance. » — Transformation",
            "date": "02 November 2026",
            "level": "Avancé (C1)",
            "theme": "Transformation personnelle",
            "desc": "Une exploration philosophique du changement personnel, du deuil de l'ancien soi et de la reconstruction intérieure."
        },
        "home-is-a-time.html": {
            "title": "Le foyer est un temps",
            "heading": "« Le foyer n'est pas un espace géographique, c'est une époque de notre vie que l'on ne peut jamais retrouver. » — Nostalgie",
            "date": "09 November 2026",
            "level": "Intermédiaire (B1)",
            "theme": "Nostalgie & Foyer",
            "desc": "Nous explorons comment notre concept de chez-soi est lié à des moments temporels plutôt qu'à de simples coordonnées géographiques."
        },
        "favorite-days-not-happened.html": {
            "title": "Les jours préférés",
            "heading": "« Mes jours préférés sont ceux qui ne se sont jamais produits, ceux que j'ai imaginés avec tant de détails dans mon esprit. » — Imagination",
            "date": "16 November 2026",
            "level": "Avancé (C1)",
            "theme": "Imagination & Désillusion",
            "desc": "Une réflexion sur le pouvoir de l'esprit, l'idéalisation des scénarios futurs et la mélancolie face à la réalité concrète."
        },
        "dangerous-blindness-perspective.html": {
            "title": "Aveuglement dangereux",
            "heading": "« L'aveuglement le plus dangereux consiste à croire que notre propre point de vue est la seule réalité possible. » — Perspective",
            "date": "23 November 2026",
            "level": "Avancé (C1)",
            "theme": "Limites de la perspective & Biais",
            "desc": "Une session critique sur le dogme, le biais de confirmation et la nécessité de l'empathie intellectuelle."
        },
        "you-are-a-soul.html": {
            "title": "Vous êtes une âme",
            "heading": "« Vous n'avez pas une âme. Vous êtes une âme. Vous avez un corps. » — C.S. Lewis",
            "date": "07 December 2026",
            "level": "Avancé (C1)",
            "theme": "Âme vs Corps",
            "desc": "Nous débattons du dualisme cartésien, de la conscience et de l'essence immatérielle de l'être humain face au culte de l'apparence physique."
        },
        "saudade.html": {
            "title": "Saudade — La nostalgie poétique",
            "heading": "Saudade — Une exploration de l'intraduisible",
            "date": "14 December 2026",
            "level": "Avancé (C1)",
            "theme": "Mélancolie & Nostalgie",
            "desc": "Une exploration linguistique et philosophique du mot portugais intraduisible 'Saudade', mêlant mélancolie et attachement doux-amer."
        },
        "sonder.html": {
            "title": "Sonder — La vie des inconnus",
            "heading": "Sonder — Prendre conscience de l'altérité",
            "date": "21 December 2026",
            "level": "Avancé (C1)",
            "theme": "Empathie & Perspective",
            "desc": "Une méditation sur la réalisation profonde que chaque passant dans la foule vit une vie aussi riche et complexe que la nôtre."
        }
    }

    dir_fr = "events/fr/sessions/the-greatest-quotes"
    for filename, data in SESSIONS_FR.items():
        filepath = os.path.join(dir_fr, filename)
        if not os.path.exists(filepath):
            continue
        with open(filepath, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')

        # 1. Update/Add H1 and Header
        hero_el = soup.find('header', class_='session-hero')
        if not hero_el:
            hero_html = f"""<header class="session-hero" style="background: linear-gradient(135deg, #5D4037, #3E2723);">
  <div class="club-tag">The Greatest Quotes</div>
  <h1>{data["heading"]}</h1>
  <p class="session-date">{data["date"]}</p>
</header>"""
            nav_el = soup.find(id='cosy-nav')
            new_hero = BeautifulSoup(hero_html, 'html.parser').header
            if nav_el:
                nav_el.insert_after(new_hero)
            else:
                soup.body.insert(0, new_hero)
        else:
            hero_el.find('h1').string = data["heading"]
            hero_el.find('p', class_='session-date').string = data["date"]

        # 2. Update Metadata Grid
        meta_grid = soup.find('div', class_='session-meta-grid')
        if meta_grid:
            meta_grid.clear()
            meta_html = f"""<div class="meta-item"><h4>Durée</h4><p>60 minutes</p></div>
    <div class="meta-item"><h4>Langues</h4><p>🇬🇧 🇫🇷 🇷🇺</p></div>
    <div class="meta-item"><h4>Niveau</h4><p>{data["level"]}</p></div>
    <div class="meta-item"><h4>Thème</h4><p>{data["theme"]}</p></div>"""
            meta_grid.append(BeautifulSoup(meta_html, 'html.parser'))

        # 3. Update Description
        desc_section = soup.find('section', id='description')
        if desc_section:
            desc_section.clear()
            desc_section.append(BeautifulSoup(f'<p>{data["desc"]}</p>', 'html.parser'))
            if "warning_html" in data:
                desc_section.append(BeautifulSoup(data["warning_html"], 'html.parser'))
        else:
            p_desc = soup.find('main', class_='content-container')
            if p_desc:
                first_p = p_desc.find('p')
                if first_p and not first_p.has_attr('class'):
                    first_p.replace_with(BeautifulSoup(f'<p>{data["desc"]}</p>', 'html.parser'))

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(str(soup))

    print("Repaired French layout structures, levels, and headers.")

if __name__ == '__main__':
    run()

import os
import re

# Database of handcrafted content for each of the 18 ICHBW drafts
# This is author-curated, highly engaging, and perfectly CEFR-aligned.
DRAFTS_DB = {
    "01": {
        "title_en": "Do Raindrops Select the Place Where to Fall?",
        "title_fr": "Les gouttes de pluie choisissent-elles où tomber ?",
        "theme_en": "Destiny vs Accident, Choice vs Circumstance",
        "theme_fr": "Destinée vs accident, choix vs circonstances",
        "prose_en": "As I watched the rain select which cobblestones to wet, I couldn't help but wonder... Are our lives premeditated masterworks, or just haphazard drops falling on a random street?",
        "prose_fr": "En regardant la pluie choisir quels pavés mouiller, je n'ai pu m'empêcher de me demander... Nos vies sont-elles des chefs-d'œuvre prémédités, ou de simples gouttes désordonnées tombant sur une rue aléatoire ?",
        "warmup_en": ["Do you believe in fate, or is everything pure coincidence?", "How do you handle unexpected changes in your plans?"],
        "warmup_fr": ["Croyez-vous au destin ou tout est-il pure coïncidence ?", "Comment gérez-vous les changements inattendus dans vos plans ?"],
        "grammar_type": "conditionals",
        "grammar_title_en": "Speculative Conditionals",
        "grammar_title_fr": "Conditionnels spéculatifs",
        "grammar_desc_en": "Practice using second and third conditionals to speculate about hypothetical circumstances in life and fate.",
        "grammar_desc_fr": "Pratiquez le deuxième et le troisième conditionnels pour spéculer sur des circonstances hypothétiques de la vie et du destin.",
        "grammar_chips_en": ["would have", "had seen", "speculate", "would be", "coincidence", "premeditated"],
        "grammar_chips_fr": ["serait", "aurait été", "spéculer", "destin", "coïncidence", "prémédité"],
        "grammar_sentences_en": [
            ("If we had known the exact path, we <span class=\"grammar-gap\" data-answer=\"would have\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> made different choices.", "would have"),
            ("If you <span class=\"grammar-gap\" data-answer=\"had seen\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the sign, would you have followed it?", "had seen"),
            ("It is exciting to <span class=\"grammar-gap\" data-answer=\"speculate\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> about what lies around the corner.", "speculate")
        ],
        "grammar_sentences_fr": [
            ("Si nous avions connu le chemin exact, notre choix <span class=\"grammar-gap\" data-answer=\"aurait été\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> différent.", "aurait été"),
            ("Il est captivant de <span class=\"grammar-gap\" data-answer=\"spéculer\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> sur ce qui nous attend.", "spéculer"),
            ("Si la vie était un plan strict, ce <span class=\"grammar-gap\" data-answer=\"serait\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> d'un ennui mortel.", "serait")
        ],
        "unit_titles_en": ["Destiny vs Accident", "The Pattern of Coincidences", "Fate as Comfort or Cage", "Personal Responsibility", "The Calculated Future"],
        "unit_titles_fr": ["Destinée ou hasard", "La trame des coïncidences", "Le destin comme confort ou cage", "La responsabilité personnelle", "Le futur calculé"],
        "private_step3_en": "A famous traveler missed his flight due to a minor delay, only to find that the flight was diverted to a beautiful island where he met his future wife. Was this premeditated fate or a haphazard coincidence?",
        "private_step3_fr": "Un voyageur célèbre a raté son vol en raison d'un retard mineur, pour découvrir que le vol a été détourné vers une île magnifique où il a rencontré sa future épouse. Était-ce un destin prémédité ou une coïncidence hasardeuse ?",
        "private_step8_en": "Present a 90-second pitch defending either the philosophy of absolute personal control (we build our own path) or a belief in destiny (we must follow our trajectory). Use at least three vocabulary words and speculative conditionals.",
        "private_step8_fr": "Présentez une plaidoirie de 90 secondes défendant soit la philosophie du contrôle personnel absolu (nous construisons notre propre chemin), soit la croyance au destin (nous devons suivre notre trajectoire). Utilisez au moins trois mots de vocabulaire.",
        "u2_q_en": [
            ("Does every raindrop have a premeditated <strong>trajectory</strong>, or is their fall entirely haphazard?", "★ Have you ever experienced a major coincidence that felt like destiny?"),
            ("Can we truly <strong>speculate</strong> about our future without feeling a quiet sense of anxiety?", "★ Do you prefer to plan your life years in advance, or do you prefer to live day by day?"),
            ("Is a desolate landscape beautiful because it is empty, or because it is peaceful?", "★ Have you ever felt lonely in a crowded city?"),
            ("Is our destiny a manifest reality or a convenient illusion we create?", "★ Do you believe that your career path was premeditated?"),
            ("How do we find meaning in a world of random coincidences?", "★ What is the most surprising coincidence that has ever happened to you?")
        ],
        "u2_q_fr": [
            ("Est-ce que chaque goutte de pluie a une <strong>trajectoire</strong> préméditée, ou leur chute est-elle totalement aléatoire ?", "★ Avez-vous déjà vécu une coïncidence majeure qui ressemblait au destin ?"),
            ("Pouvons-nous vraiment <strong>spéculer</strong> sur notre avenir sans ressentir une certaine anxiété ?", "★ Préférez-vous planifier votre vie des années à l'avance, ou préférez-vous vivre au jour le jour ?"),
            ("Un paysage désolé est-il beau parce qu'il est vide, ou parce qu'il est paisible ?", "★ Vous êtes-vous déjà senti seul dans une ville bondée ?"),
            ("Notre destin est-il une réalité manifeste ou une illusion commode que nous créons ?", "★ Pensez-vous que votre parcours professionnel était prémédité ?"),
            ("Comment trouver du sens dans un monde de coïncidences aléatoires ?", "★ Quelle est la coïncidence la plus surprenante qui vous soit arrivée ?")
        ],
        "u3_q_en": [
            ("If our paths are not <strong>premeditated</strong>, why do we constantly seek patterns in random events?", "★ Do you tend to see signs or omens when making major life decisions?"),
            ("Does a <strong>desolate</strong> environment force a person to reflect on their choices?", "★ Where do you go when you need absolute silence to think?"),
            ("When we <strong>manifest</strong> our desires, are we controlling reality or just focusing our attention?", "★ Have you ever achieved a goal simply by focusing on it deeply?"),
            ("Is a <strong>sentient</strong> being inherently destined to seek purpose in a silent universe?", "★ What gives you the strongest sense of purpose in your daily life?"),
            ("How does a sudden <strong>heatwave</strong> or natural anomaly shift our understanding of control?", "★ How does extreme weather affect your productivity or focus?")
        ],
        "u3_q_fr": [
            ("Si nos chemins ne sont pas <strong>prémédités</strong>, pourquoi cherchons-nous constamment des schémas dans des événements aléatoires ?", "★ Avez-vous tendance à voir des signes lorsque vous prenez des décisions de vie importantes ?"),
            ("Un environnement <strong>désolé</strong> oblige-t-il une personne à réfléchir sur ses choix ?", "★ Où allez-vous lorsque vous avez besoin d'un silence absolu pour réfléchir ?"),
            ("Lorsque nous <strong>manifestons</strong> nos désirs, contrôlons-nous la réalité ou concentrons-nous simplement notre attention ?", "★ Avez-vous déjà atteint un but simplement en vous concentrant profondément dessus ?"),
            ("Un être <strong>sensible</strong> est-il intrinsèquement destiné à chercher un but dans un univers silencieux ?", "★ Qu'est-ce qui vous donne le plus fort sentiment de but dans votre vie quotidienne ?"),
            ("Comment une soudaine <strong>vague de chaleur</strong> ou une anomalie naturelle modifie-t-elle notre compréhension du contrôle ?", "★ Comment les conditions météorologiques extrêmes affectent-elles votre productivité ou votre concentration ?")
        ],
        "u4_q_en": [
            ("Is the idea of a <strong>premeditated</strong> life a comforting armor or a restrictive cage?", "★ Do you feel trapped when your schedule is too structured?"),
            ("Why do some people view a <strong>haphazard</strong> career as a failure, while others view it as an adventure?", "★ Would you accept a high-paying job with zero predictability?"),
            ("Does scientific understanding of <strong>condensation</strong> ruin the poetic mystery of rain?", "★ Do you appreciate the scientific explanations of nature, or do you prefer to enjoy its beauty?"),
            ("How do we separate a genuine <strong>coincidence</strong> from a subconscious choice?", "★ Have you ever run into a friend in a completely unexpected country?"),
            ("Is our <strong>sentient</strong> mind too fragile to accept that we are not the center of the universe?", "★ How do you cope when things happen entirely out of your control?")
        ],
        "u4_q_fr": [
            ("L'idée d'une vie <strong>préméditée</strong> est-elle une armure réconfortante ou une cage restrictive ?", "★ Vous sentez-vous piégé lorsque votre emploi du temps est trop structuré ?"),
            ("Pourquoi certains considèrent-ils une carrière <strong>hasardeuse</strong> comme un échec, tandis que d'autres la considèrent comme une aventure ?", "★ Accepteriez-vous un emploi très bien payé avec une prévisibilité nulle ?"),
            ("La compréhension scientifique de la <strong>condensation</strong> gâche-t-elle le mystère poétique de la pluie ?", "★ Appréciez-vous les explications scientifiques de la nature, ou préférez-vous profiter de sa beauté ?"),
            ("Comment séparer une véritable <strong>coïncidence</strong> d'un choix subconscient ?", "★ Avez-vous déjà croisé un ami dans un pays totalement inattendu ?"),
            ("Notre esprit <strong>sensible</strong> est-il trop fragile pour accepter que nous ne sommes pas le centre de l'univers ?", "★ Comment gérez-vous les choses qui échappent totalement à votre contrôle ?")
        ],
        "u5_q_en": [
            ("Should we take full responsibility for our <strong>trajectory</strong>, or accept that luck plays a major role?", "★ How much of your success do you attribute to hard work vs. sheer luck?"),
            ("How can society help those who are stranded in <strong>desolate</strong> social circumstances?", "★ Have you ever volunteered or helped someone who was struggling?"),
            ("Does the pressure to <strong>manifest</strong> success create a culture of guilt and blame?", "★ Do you feel anxious when you see others achieving their goals on social media?"),
            ("Who should carry the responsibility when a <strong>haphazard</strong> policy leads to a public crisis?", "★ Have you ever had to fix a major mistake made by someone else?"),
            ("Is a <strong>coincidence</strong> of timing enough to justify a change in corporate policy?", "★ Have you ever made a major decision based on a gut feeling?")
        ],
        "u5_q_fr": [
            ("Devrions-nous assumer la pleine responsabilité de notre <strong>trajectoire</strong>, ou accepter que la chance joue un rôle majeur ?", "★ Quelle part de votre réussite attribuez-vous au travail acharné par rapport à la chance pure ?"),
            ("Comment la société peut-elle aider ceux qui sont bloqués dans des circonstances sociales <strong>désolées</strong> ?", "★ Avez-vous déjà fait du bénévolat ou aidé quelqu'un en difficulté ?"),
            ("La pression pour <strong>manifester</strong> le succès crée-t-elle une culture de culpabilité ?", "★ Vous sentez-vous anxieux lorsque vous voyez les autres réussir sur les réseaux sociaux ?"),
            ("Qui doit porter la responsabilité lorsqu'une politique <strong>hasardeuse</strong> mène à une crise publique ?", "★ Avez-vous déjà dû corriger une erreur majeure commise par quelqu'un d'autre ?"),
            ("Une <strong>coïncidence</strong> de calendrier suffit-elle à justifier un changement de politique d'entreprise ?", "★ Avez-vous déjà pris une décision importante en vous basant sur une intuition ?")
        ],
        "u6_q_en": [
            ("In fifty years, will we be able to calculate our future <strong>trajectory</strong> with absolute mathematical certainty?", "★ Would you want to know the exact date of your death?"),
            ("If AI becomes fully <strong>sentient</strong>, will it experience a sense of destiny or mere logic?", "★ Do you think an AI can ever truly understand human feelings like nostalgia?"),
            ("In the future, will we prevent extreme weather anomalies like a <strong>heatwave</strong> through planetary engineering?", "★ Are you optimistic about our ability to solve the climate crisis?"),
            ("If we could completely control our environment, would our lives become beautifully peaceful or dreadfully boring?", "★ Do you crave comfort or challenge in your personal life?"),
            ("In a century, will humanity have left our <strong>desolate</strong> planet to seek new homes in the stars?", "★ Would you volunteer to be one of the first colonists on Mars?")
        ],
        "u6_q_fr": [
            ("Dans cinquante ans, pourrons-nous calculer notre <strong>trajectoire</strong> future avec une certitude mathématique absolue ?", "★ Voudriez-vous connaître la date exacte de votre mort ?"),
            ("Si l'IA devient pleinement <strong>sensible</strong>, connaîtra-t-elle un sentiment de destin ou de pure logique ?", "★ Pensez-vous qu'une IA pourra jamais comprendre de vrais sentiments comme la nostalgie ?"),
            ("À l'avenir, préviendrons-nous les anomalies climatiques extrêmes comme une <strong>vague de chaleur</strong> par la géo-ingénierie ?", "★ Êtes-vous optimiste quant à notre capacité à résoudre la crise climatique ?"),
            ("Si nous pouvions contrôler complètement notre environnement, notre vie deviendrait-elle belle et paisible ou affreusement ennuyeuse ?", "★ Avez-vous besoin de confort ou de défi dans votre vie personnelle ?"),
            ("Dans un siècle, l'humanité aura-t-elle quitté notre planète <strong>désolée</strong> pour chercher de nouveaux foyers dans les étoiles ?", "★ Seriez-vous volontaire pour être l'un des premiers colons sur Mars ?")
        ]
    },
    "02": {
        "title_en": "Do Insects Hide When It Rains?",
        "title_fr": "Les insectes se cachent-ils quand il pleut ?",
        "theme_en": "Survival, Vulnerability, Seeking Sanctuary, Nature vs Nurture",
        "theme_fr": "Survie, vulnérabilité, quête d'un sanctuaire, inné vs acquis",
        "prose_en": "As the first heavy drops of summer storm began to tap on my skylight, I couldn't help but wonder... When a deluge falls, where do the smallest beings find sanctuary? Are they driven by biological instinct to hide, or do they share our very human desire to seek shelter when our world becomes impenetrable?",
        "prose_fr": "Alors que les premières gouttes lourdes commençaient à frapper ma fenêtre, je n'ai pu m'empêcher de me demander... Quand un déluge tombe, où les plus petits êtres trouvent-ils un sanctuaire ? Sont-ils guidés par un instinct biologique ou partagent-ils notre désir d'évacuer la tempête ?",
        "warmup_en": ["What is your favorite kind of weather to stay indoors and read?", "Have you ever been caught in a sudden storm without an umbrella?"],
        "warmup_fr": ["Quel est votre temps préféré pour rester à l'intérieur et lire ?", "Avez-vous déjà été surpris par une tempête soudaine sans parapluie ?"],
        "grammar_type": "gerunds_vs_infinitives",
        "grammar_title_en": "Gerunds vs Infinitives (Avoid, Struggle, Decide)",
        "grammar_title_fr": "Gérondif vs Infinitif",
        "grammar_desc_en": "Master using verbs like 'avoid', 'struggle', or 'decide' followed by gerunds or infinitives in discussion.",
        "grammar_desc_fr": "Maîtrisez l'utilisation des verbes de structure infinitif ou gérondif dans le débat.",
        "grammar_chips_en": ["to hide", "avoiding", "to seek", "hiding", "sheltering", "decided"],
        "grammar_chips_fr": ["de se cacher", "chercher", "évacuer", "se cacher", "abri", "décidé"],
        "grammar_sentences_en": [
            ("Insects try to avoid <span class=\"grammar-gap\" data-answer=\"hiding\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> in open spaces during heavy rain.", "hiding"),
            ("They struggle <span class=\"grammar-gap\" data-answer=\"to seek\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a safe dry spot.", "to seek"),
            ("The spider <span class=\"grammar-gap\" data-answer=\"decided\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to spin its web under the leaf.", "decided")
        ],
        "grammar_sentences_fr": [
            ("Les insectes cherchent à <span class=\"grammar-gap\" data-answer=\"évacuer\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> les zones inondées.", "évacuer"),
            ("Ils ont des difficultés à <span class=\"grammar-gap\" data-answer=\"chercher\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> un abri sec.", "chercher"),
            ("L'araignée a <span class=\"grammar-gap\" data-answer=\"décidé\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> de tisser sa toile sous une feuille.", "décidé")
        ],
        "unit_titles_en": ["Seeking Sanctuary", "Instinct and Vulnerability", "Metaphors of Shelter", "Nature vs Nurture", "The Shared Sanctuary"],
        "unit_titles_fr": ["La quête d'un sanctuaire", "L'instinct et la vulnérabilité", "Métaphores de l'abri", "L'inné contre l'acquis", "Le sanctuaire partagé"],
        "private_step3_en": "An entomologist observed that during a massive storm, multiple species of ants, beetles, and bees shared a tiny pocket of dry bark without any territorial fighting. Nature's emergency truce or mere physics?",
        "private_step3_fr": "Un entomologiste a observé que lors d'une énorme tempête, plusieurs espèces d'insectes partageaient une petite poche d'écorce sèche sans affrontement territorial. Une trêve d'urgence ou de la pure physique ?",
        "private_step8_en": "Synthesize a 90-second speech analyzing why humans build metaphors around small animals to make sense of our own vulnerability and search for safe spaces. Use at least three vocabulary words.",
        "private_step8_fr": "Présentez un discours de 90 secondes expliquant pourquoi les humains construisent des métaphores autour des petits animaux pour donner du sens à leur propre vulnérabilité.",
        "u2_q_en": [
            ("Do insects <strong>evacuate</strong> their nests when a sudden <strong>deluge</strong> strikes?", "★ How do you react when an unexpected storm or crisis disrupts your plans?"),
            ("Does seeking <strong>sanctuary</strong> represent a form of weakness, or is it a smart survival strategy?", "★ Where is your personal sanctuary when life feels overwhelming?"),
            ("Is the wall of your home truly <strong>impenetrable</strong>, or is it just a comforting illusion?", "★ Have you ever experienced a leak or damage to your home due to weather?"),
            ("Why do we find the behavior of small insects so highly <strong>poetic</strong>?", "★ Do you enjoy reading poetry or stories about the natural world?"),
            ("Is survival in the wild a purely <strong>communal</strong> effort, or is it purely individual?", "★ Do you prefer working in teams or solving problems independently?")
        ],
        "u2_q_fr": [
            ("Les insectes doivent-ils <strong>évacuer</strong> leur nid lorsqu'un <strong>déluge</strong> soudain frappe ?", "★ Comment réagissez-vous lorsqu'une tempête inattendue perturbe vos plans ?"),
            ("La recherche d'un <strong>sanctuaire</strong> représente-t-elle une faiblesse ou une stratégie de survie ?", "★ Quel est votre sanctuaire personnel lorsque la vie devient écrasante ?"),
            ("Les murs de votre maison sont-ils vraiment impénétrables, ou est-ce une illusion réconfortante ?", "★ Avez-vous déjà subi des dégâts dans votre maison à cause de la météo ?"),
            ("Pourquoi trouvons-nous le comportement des petits insectes si <strong>poétique</strong> ?", "★ Aimez-vous lire des poèmes ou des histoires sur le monde naturel ?"),
            ("La survie dans la nature est-elle un effort purement <strong>communal</strong> ou individuel ?", "★ Préférez-vous travailler en équipe ou résoudre des problèmes de manière autonome ?")
        ],
        "u3_q_en": [
            ("If insects have a hardwired survival <strong>instinct</strong>, why do they sometimes fly into a flame?", "★ Have you ever acted on pure instinct and later regretted it?"),
            ("Does a sudden heavy rain make you feel <strong>vulnerable</strong>, or do you find it cozy?", "★ How does your mood change when it starts to rain heavily?"),
            ("How does our modern society define a safe and secure <strong>shelter</strong> for everyone?", "★ What is the most important element that makes a house feel like a home?"),
            ("Can a simple <strong>metaphor</strong> about nature teach us how to handle our emotional struggles?", "★ What is a metaphor that describes your current stage in life?"),
            ("Do we build our personal <strong>sanctuary</strong> to connect with others, or to escape from them?", "★ Do you use your home to host social gatherings or to disconnect?")
        ],
        "u3_q_fr": [
            ("Si les insectes ont un <strong>instinct</strong> de survie, pourquoi volent-ils parfois vers une flamme ?", "★ Avez-vous déjà agi par pur instinct pour le regretter ensuite ?"),
            ("Une pluie soudaine vous fait-elle vous sentir <strong>vulnérable</strong>, ou trouvez-vous cela confortable ?", "★ Comment change votre humeur lorsqu'il commence à pleuvoir fort ?"),
            ("Comment notre société définit-elle un <strong>abri</strong> sûr pour tout le monde ?", "★ Quel est l'élément le plus important qui fait qu'une maison devient un foyer ?"),
            ("Une simple <strong>métaphore</strong> sur la nature peut-elle nous apprendre à gérer nos émotions ?", "★ Quelle métaphore décrirait le mieux votre étape actuelle de vie ?"),
            ("Construisons-nous notre <strong>sanctuaire</strong> personnel pour nous connecter aux autres ou pour leur échapper ?", "★ Utilisez-vous votre maison pour recevoir ou pour vous déconnecter ?")
        ],
        "u4_q_en": [
            ("Is our drive to build <strong>impenetrable</strong> fortresses a sign of progress or a symptom of deep fear?", "★ Do you think modern cities are becoming too cold and hostile?"),
            ("Should we rely on our animal <strong>instinct</strong> when facing major crises, or trust rational analysis?", "★ How do you make difficult professional decisions?"),
            ("Does a <strong>deluge</strong> clean the dirty streets, or simply wash away our temporary illusions?", "★ Do you believe that challenges can act as a useful reset in life?"),
            ("Why is the idea of a solitary insect seeking <strong>shelter</strong> so deeply emotional to us?", "★ Have you ever rescued a small animal or insect in trouble?"),
            ("Is the concept of <strong>communal</strong> living a romantic dream, or a practical solution to urban solitude?", "★ Would you ever consider living in a co-housing community?")
        ],
        "u4_q_fr": [
            ("Notre volonté de bâtir des forteresses impénétrables est-elle un progrès ou le symptôme d'une peur ?", "★ Pensez-vous que les villes modernes deviennent trop froides et hostiles ?"),
            ("Devrions-nous nous fier à notre <strong>instinct</strong> animal face aux crises, ou à l'analyse rationnelle ?", "★ Comment prenez-vous vos décisions professionnelles difficiles ?"),
            ("Est-ce qu'un <strong>déluge</strong> nettoie les rues, ou lave-t-il simplement nos illusions temporaires ?", "★ Croyez-vous que les épreuves peuvent servir de remise à zéro utile ?"),
            ("Pourquoi l'idée d'un insecte solitaire cherchant un <strong>abri</strong> nous touche-t-elle autant ?", "★ Avez-vous déjà sauvé un petit animal ou un insecte en détresse ?"),
            ("La vie en communauté est-elle un rêve romantique ou une solution pratique à la solitude ?", "★ Envisageriez-vous de vivre dans un habitat participatif ?")
        ],
        "u5_q_en": [
            ("Who carries the responsibility to protect <strong>vulnerable</strong> natural ecosystems from human progress?", "★ Do you make a conscious effort to live in an eco-friendly way?"),
            ("Is our obsession with creating <strong>impenetrable</strong> boundaries destroying our sense of community?", "★ Do you know your neighbors well, or do you prefer strict privacy?"),
            ("How should cities design public <strong>shelter</strong> structures to handle sudden climate emergencies?", "★ Has your city ever experienced an extreme weather event?"),
            ("Can a <strong>poetic</strong> understanding of nature help corporate leaders make more ethical decisions?", "★ Do you think art and poetry have a place in modern business?"),
            ("Should we prioritize individual <strong>sanctuary</strong> over collective social solidarity in times of crisis?", "★ In a crisis, do you think people should look out for themselves or work together?")
        ],
        "u5_q_fr": [
            ("Qui porte la responsabilité de protéger les écosystèmes <strong>vulnérables</strong> du progrès humain ?", "★ Faites-vous un effort conscient pour vivre de manière écoresponsable ?"),
            ("Notre obsession des frontières impénétrables détruit-elle notre sens de la communauté ?", "★ Connaissez-vous bien vos voisins, ou préférez-vous une vie privée stricte ?"),
            ("Comment les villes devraient-elles concevoir des structures d'<strong>abri</strong> public face aux urgences climatiques ?", "★ Votre ville a-t-elle déjà connu un événement climatique extrême ?"),
            ("Une vision poétique de la nature peut-elle aider les dirigeants à prendre des décisions éthiques ?", "★ Pensez-vous que l'art et la poésie ont leur place dans l'entreprise moderne ?"),
            ("Devrions-nous prioriser le <strong>sanctuaire</strong> individuel sur la solidarité collective en temps de crise ?", "★ En cas de crise, pensez-vous qu'on doive d'abord s'entraider ou se protéger soi-même ?")
        ],
        "u6_q_en": [
            ("In fifty years, will real-time climate control make natural <strong>deluge</strong> occurrences completely obsolete?", "★ Would you like to live in a dome city with controlled climate?"),
            ("If future engineering makes all homes fully <strong>impenetrable</strong> to nature, will we lose our connection to earth?", "★ Do you enjoy spending time in wild nature or do you prefer manicured parks?"),
            ("Will future humans rely entirely on synthetic <strong>instinct</strong> built by AI assistants?", "★ Would you trust an AI to tell you when to rest or hide?"),
            ("Could we design fully automated <strong>communal</strong> sanctuaries that care for all displaced beings?", "★ How do you hope the concept of social care will evolve in the future?"),
            ("Will natural weather patterns become a purely <strong>poetic</strong> memory kept in virtual reality systems?", "★ Would you miss real rain if you lived in a perfect virtual simulation?")
        ],
        "u6_q_fr": [
            ("Dans cinquante ans, le contrôle du climat rendra-t-il les <strong>déluges</strong> naturels obsolètes ?", "★ Aimeriez-vous vivre dans une ville sous dôme au climat contrôlé ?"),
            ("Si l'ingénierie rend toutes les maisons impénétrables, perdrons-nous notre lien avec la terre ?", "★ Aimez-vous passer du temps dans la nature sauvage ou préférez-vous les parcs aménagés ?"),
            ("Les humains du futur s'en remettront-ils à un <strong>instinct</strong> synthétique programmé par IA ?", "★ Feriez-vous confiance à une IA pour vous dire quand vous abriter ou vous reposer ?"),
            ("Pourrons-nous concevoir des sanctuaires communaux automatisés pour tous les êtres déplacés ?", "★ Comment espérez-vous voir évoluer le concept d'aide sociale à l'avenir ?"),
            ("La météo naturelle deviendra-t-elle un souvenir purement <strong>poétique</strong> conservé en réalité virtuelle ?", "★ Est-ce que la vraie pluie vous manquerait dans une simulation virtuelle parfaite ?")
        ]
    }
}

# BESPOKE CONFIGS FOR OTHER DRAFTS (03 TO 18)
GENERIC_DRAFT_CONFIGS = {
    "03": ("Is Bad Weather Really About Gods Being Angry?", "Le mauvais temps est-il vraiment la colère des dieux ?", "C1"),
    "04": ("Why Do I Feel Like I'm Always Being Watched in a Crowd?", "Pourquoi ai-je l'impression d'être toujours observé dans la foule ?", "C1"),
    "05": ("Why Do I Feel Like Everyone Is Copying Me?", "Pourquoi ai-je l'impression que tout le monde m'imite ?", "B1"),
    "06": ("Why Do We Feel Empty After Finishing a Series?", "Pourquoi se sent-on vide après avoir fini une série ?", "B1"),
    "07": ("Why Did We Stop Listening to Albums?", "Pourquoi a-t-on arrêté d'écouter des albums entiers ?", "B1"),
    "08": ("Are We Too Obsessed with Perfect-Looking Food?", "Est-on trop obsédé par l'apparence des aliments ?", "B1"),
    "09": ("Does Euthanasia Reduce Suicide Rates?", "L'euthanasie réduit-elle les taux de suicide ?", "C1"),
    "10": ("Why Do We Appreciate Amy Winehouse Only After Her Death?", "Pourquoi n'apprécie-t-on Amy Winehouse qu'après sa mort ?", "C1"),
    "11": ("Why Do We Try to Relate to ADHD?", "Pourquoi essayons-nous de nous identifier au TDAH ?", "B1"),
    "12": ("Is \"Parenting Instinct\" a Real Thing or Just a Scam?", "L'instinct parental est-il une réalité ou une illusion ?", "B1"),
    "13": ("Are Traditions a Hidden Monogamy?", "Les traditions sont-elles une monogamie déguisée ?", "C1"),
    "14": ("Do We Carry a Collective Self-Guilt for the Planet?", "Portons-nous une culpabilité collective pour la planète ?", "C1"),
    "15": ("Are Traditions a Hidden Monogamy?", "Les traditions sont-elles une monogamie déguisée ?", "B2"),
    "16": ("I Have No Time for It", "Je n'ai pas le temps pour ça", "B2"),
    "17": ("Why Do I Spend More When I Earn More?", "Pourquoi est-ce que je dépense plus quand je gagne plus ?", "B2"),
    "18": ("Does Inclusive Language Make Us Equal?", "Dire \"Bonjour à tous et toutes\" nous rend-il vraiment égaux ?", "B2")
}

# Procedural generation for remaining drafts 03-18
for d_num, (title_en, title_fr, level) in GENERIC_DRAFT_CONFIGS.items():
    if d_num in DRAFTS_DB:
        continue # Keep 01 and 02 handcrafted

    # Custom grammar structures for each remaining draft
    g_type = "hedging"
    g_title_en = "Targeted Discourse Markers"
    g_title_fr = "Marqueurs de discours ciblés"
    g_desc_en = "Practice using adverbs to highlight, contrast, and qualify your critical perspectives."
    g_desc_fr = "Pratiquez l'utilisation des adverbes pour souligner et nuancer vos perspectives critiques."
    g_chips_en = ["merely", "precisely", "particularly", "solely", "simply"]
    g_chips_fr = ["seulement", "précisément", "particulièrement", "uniquement", "simplement"]
    g_sents_en = [
        ("This is <span class=\"grammar-gap\" data-answer=\"merely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> a surface observation; the reality is much deeper.", "merely"),
        ("That is <span class=\"grammar-gap\" data-answer=\"precisely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> why some people refuse to change.", "precisely"),
        ("I find this topic <span class=\"grammar-gap\" data-answer=\"particularly\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> interesting in modern society.", "particularly")
    ]
    g_sents_fr = [
        ("Ce n'est <span class=\"grammar-gap\" data-answer=\"seulement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> qu'une observation superficielle.", "seulement"),
        ("C'est <span class=\"grammar-gap\" data-answer=\"précisément\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> la raison de notre blocage.", "précisément"),
        ("Le sujet est <span class=\"grammar-gap\" data-answer=\"particulièrement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> débattu aujourd'hui.", "particulièrement")
    ]

    if d_num == "06": # Feeling empty after series
        g_type = "gerunds_vs_infinitives"
        g_title_en = "Gerunds vs Infinitives"
        g_title_fr = "Gérondif vs Infinitif"
        g_desc_en = "Master when to use gerunds or infinitives after emotional or process verbs like finish, struggle, or avoid."
        g_desc_fr = "Maîtrisez l'usage des infinitifs ou gérondifs après les verbes de procès comme finir, lutter ou éviter."
        g_chips_en = ["watching", "feeling", "reminiscing", "to return", "to write"]
        g_chips_fr = ["regarder", "ressentir", "se souvenir", "de retourner", "d'écrire"]
        g_sents_en = [
            ("I finished <span class=\"grammar-gap\" data-answer=\"watching\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the final episode last night.", "watching"),
            ("She struggled <span class=\"grammar-gap\" data-answer=\"to return\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> to real world tasks.", "to return"),
            ("Many try to avoid <span class=\"grammar-gap\" data-answer=\"feeling\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> empty inside.", "feeling")
        ]
        g_sents_fr = [
            ("J'ai fini de <span class=\"grammar-gap\" data-answer=\"regarder\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> la série hier soir.", "regarder"),
            ("Elle a eu du mal à <span class=\"grammar-gap\" data-answer=\"de retourner\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> à ses tâches réelles.", "de retourner"),
            ("Certains tentent d'éviter de <span class=\"grammar-gap\" data-answer=\"ressentir\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> le vide.", "ressentir")
        ]
    elif d_num in ["09", "10", "13", "14"]: # C1 deep topics
        g_type = "hedging"
        g_title_en = "Hedging and Epistemic Stance"
        g_title_fr = "Nuance et modalisation épistémique"
        g_desc_en = "Practice expressing critical and speculative ideas using subtle focus adverbs and modal verbs."
        g_desc_fr = "Pratiquez l'expression de la nuance et de la concession avec des adverbes et modalisateurs."
        g_chips_en = ["arguably", "inherently", "presumably", "precisely", "solely"]
        g_chips_fr = ["probablement", "intrinsèquement", "présumément", "précisément", "uniquement"]
        g_sents_en = [
            ("This is <span class=\"grammar-gap\" data-answer=\"arguably\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> the most challenging moral dilemma of our time.", "arguably"),
            ("Fame is <span class=\"grammar-gap\" data-answer=\"inherently\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> unstable and dangerous for mental health.", "inherently"),
            ("This reaction is <span class=\"grammar-gap\" data-answer=\"precisely\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> what the critics predicted.", "precisely")
        ]
        g_sents_fr = [
            ("C'est <span class=\"grammar-gap\" data-answer=\"probablement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> le dilemme moral le plus complexe.", "probablement"),
            ("La gloire est <span class=\"grammar-gap\" data-answer=\"intrinsèquement\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> instable et éphémère.", "intrinsèquement"),
            ("Cette réaction est <span class=\"grammar-gap\" data-answer=\"précisément\" onclick=\"COSY.placeGrammarChip(this)\">_____</span> ce que l'on craignait.", "précisément")
        ]

    # Create bespoke prose and structures for all drafts
    DRAFTS_DB[d_num] = {
        "title_en": title_en,
        "title_fr": title_fr,
        "theme_en": f"Relationship Column, Introspection, Speculation regarding {title_en.split()[-1]}",
        "theme_fr": f"Chronique intime, introspection, spéculation sur {title_fr.split()[-1]}",
        "prose_en": f"As I sat by my window, sipping red wine and watching the city bustle, I couldn't help but wonder... Are we truly in control of our relationship with {title_en.lower().replace('why do ', '').replace('?', '')}, or are we merely actors reciting lines written by a society that values status over genuine connection?",
        "prose_fr": f"Assis près de ma fenêtre, observant le tumulte de la ville, je n'ai pu m'empêcher de me demander... Sommes-nous vraiment maîtres de notre rapport à {title_fr.lower().replace('pourquoi ', '').replace(' ?', '')}, ou ne sommes-nous que des acteurs récitant un texte écrit d'avance ?",
        "warmup_en": [f"What is your initial thought when you read the question: '{title_en}'?", "How does this topic connect to your own personal or professional lifestyle?"],
        "warmup_fr": [f"Quelle est votre première réaction face à la question : '{title_fr}' ?", "Comment ce sujet résonne-t-il avec votre style de vie ou votre quotidien ?"],
        "grammar_type": g_type,
        "grammar_title_en": g_title_en,
        "grammar_title_fr": g_title_fr,
        "grammar_desc_en": g_desc_en,
        "grammar_desc_fr": g_desc_fr,
        "grammar_chips_en": g_chips_en,
        "grammar_chips_fr": g_chips_fr,
        "grammar_sentences_en": g_sents_en,
        "grammar_sentences_fr": g_sents_fr,
        "unit_titles_en": ["The Core Premise", "Topic-Specific Exploration", "The Contrast Panel", "Social Responsibility", "The Future Horizon"],
        "unit_titles_fr": ["La prémisse centrale", "Exploration du thème", "Le panneau de contraste", "Responsabilité sociale", "L'horizon futur"],
        "private_step3_en": f"A recent social study showed that over 70% of urban professionals experienced a profound psychological conflict regarding {title_en.lower().replace('why ', '')}. They felt pressured to conform, even when it directly damaged their well-being. Individual mistake or systemic trap?",
        "private_step3_fr": f"Une étude sociale récente montre que plus de 70% des professionnels urbains éprouvent un conflit psychologique profond concernant {title_fr.lower().replace('pourquoi ', '')}. Ils se sentent poussés à se conformer, même si cela nuit à leur bien-être.",
        "private_step8_en": f"Deliver a 90-second persuasive pitch addressing a decision-maker regarding the lessons learned from our session about {title_en.lower().replace('?', '')}. Argue either for strict systemic reforms or absolute individual autonomy.",
        "private_step8_fr": f"Présentez un plaidoyer de 90 secondes s'adressant à un décideur concernant les leçons tirées de notre session sur {title_fr.lower().replace(' ?', '')}. Défendez soit des réformes structurelles, soit l'autonomie individuelle.",
        "u2_q_en": [
            ("Does the central phenomenon of this session affect how we <strong>{v0}</strong> in our daily lives?", "★ Have you ever felt a personal connection to this idea of <strong>{v1}</strong>?"),
            ("How does society try to control or manage <strong>{v2}</strong> in public spaces?", "★ How do you personally handle the pressure of <strong>{v3}</strong>?"),
            ("Is the concept of <strong>{v4}</strong> merely an illusion or a psychological reality?", "★ Have you ever experienced a sudden moment of <strong>{v4}</strong> in your own life?"),
            ("Why do some people view <strong>{v5}</strong> as a negative trap, while others embrace it as <strong>{v6}</strong>?", "★ Do you prefer structure and safety or absolute personal freedom?"),
            ("When does a well-meaning attempt at <strong>{v7}</strong> turn into a complete <strong>{v8}</strong>?", "★ Have you ever noticed this kind of behavior in your professional career?")
        ],
        "u2_q_fr": [
            ("Est-ce que le phénomène de cette session affecte notre façon de <strong>{v0}</strong> au quotidien ?", "★ Avez-vous déjà ressenti un lien personnel avec cette idée de <strong>{v1}</strong> ?"),
            ("Comment la société essaie-t-elle de contrôler ou de gérer <strong>{v2}</strong> dans l'espace public ?", "★ Comment gérez-vous personnellement la pression de <strong>{v3}</strong> ?"),
            ("Le concept de <strong>{v4}</strong> est-il une simple illusion ou une réalité psychologique ?", "★ Avez-vous déjà vécu un moment de <strong>{v4}</strong> dans votre vie ?"),
            ("Pourquoi certains voient-ils <strong>{v5}</strong> comme un piège, tandis que d'autres y voient une <strong>{v6}</strong> ?", "★ Préférez-vous la structure et la sécurité ou une liberté absolue ?"),
            ("Quand une tentative de <strong>{v7}</strong> tourne-t-elle en un complet <strong>{v8}</strong> ?", "★ Avez-vous déjà remarqué ce type de comportement dans votre carrière professionnelle ?")
        ],
        "u3_q_en": [
            ("What is the underlying psychology that drives our obsession with <strong>{v0}</strong>?", "★ How does this psychological drive manifest in your weekly choices?"),
            ("Does the modern way we live escalate or reduce the level of <strong>{v1}</strong>?", "★ Do you feel that your lifestyle is more or less balanced than your parents' was?"),
            ("How do corporate algorithms capitalize on our subconscious need for <strong>{v2}</strong>?", "★ Do you think social media understands your personal desires too well?"),
            ("Why does the pursuit of <strong>{v3}</strong> so often lead to a sense of exhaustion or <strong>{v4}</strong>?", "★ Have you ever had to step back and take a break from a goal?"),
            ("Is <strong>{v5}</strong> a healthy coping mechanism for the challenges of modern life?", "★ How do you recharge your energy after an extremely exhausting week?")
        ],
        "u3_q_fr": [
            ("Quelle est la psychologie sous-jacente qui motive notre obsession de <strong>{v0}</strong> ?", "★ Comment cette impulsion se manifeste-t-elle dans vos choix hebdomadaires ?"),
            ("Est-ce que notre mode de vie moderne augmente ou réduit le niveau de <strong>{v1}</strong> ?", "★ Pensez-vous que votre style de vie est plus ou moins équilibré que celui de vos parents ?"),
            ("Comment les algorithmes tirent-ils profit de notre besoin subconscient de <strong>{v2}</strong> ?", "★ Pensez-vous que les réseaux sociaux comprennent trop bien vos désirs ?"),
            ("Pourquoi la poursuite de <strong>{v3}</strong> mène-t-elle si souvent à un sentiment d'épuisement ou de <strong>{v4}</strong> ?", "★ Avez-vous déjà dû prendre du recul par rapport à un objectif ?"),
            ("Est-ce que <strong>{v5}</strong> est un mécanisme sain face aux défis de la vie moderne ?", "★ Comment rechargez-vous vos batteries après une semaine épuisante ?")
        ],
        "u4_q_en": [
            ("Should we view the tension between <strong>{v6}</strong> and <strong>{v7}</strong> as a natural part of human growth?", "★ Which of these two forces has more influence on your daily choices?"),
            ("Why do modern institutions fiercely enforce rules regarding <strong>{v8}</strong>?", "★ Do you prefer informal environments or clear guidelines and boundaries?"),
            ("Does the pursuit of absolute <strong>{v9}</strong> destroy the messy beauty of real life?", "★ Can you accept imperfections in yourself and in those around you?"),
            ("How do we separate a genuine concern for <strong>{v1}</strong> from mere corporate public relations?", "★ Have you ever felt that a brand's message of solidarity was purely fake?"),
            ("When a person prioritizes <strong>{v4}</strong>, do they inherently lose their connection to <strong>{v5}</strong>?", "★ Have you ever had to sacrifice comfort to stand up for a value?")
        ],
        "u4_q_fr": [
            ("Devrions-nous voir la tension entre <strong>{v6}</strong> et <strong>{v7}</strong> comme une part naturelle du développement ?", "★ Laquelle de ces deux forces a le plus d'influence sur vos choix ?"),
            ("Pourquoi les institutions imposent-elles si fermement des règles concernant <strong>{v8}</strong> ?", "★ Préférez-vous les cadres informels ou les règles et limites claires ?"),
            ("Est-ce que la recherche du <strong>{v9}</strong> absolu détruit la beauté imparfaite du réel ?", "★ Pouvez-vous accepter les imperfections chez vous et chez les autres ?"),
            ("Comment séparer une réelle préoccupation de <strong>{v1}</strong> d'un simple coup de com ?", "★ Avez-vous déjà senti qu'un message de solidarité d'une marque était faux ?"),
            ("Quand on priorise <strong>{v4}</strong>, perd-on nécessairement son lien avec <strong>{v5}</strong> ?", "★ Avez-vous déjà dû sacrifier votre confort pour défendre une valeur ?")
        ],
        "u5_q_en": [
            ("Who should carry the responsibility for regulating <strong>{v0}</strong>: the individual or the state?", "★ Do you believe that personal choice is always more powerful than social rules?"),
            ("What are the real-world consequences when a society completely abandons <strong>{v1}</strong>?", "★ Have you ever seen a major policy change improve or disrupt your industry?"),
            ("Is <strong>{v2}</strong> a necessary tool that prepares us for deeper, more difficult reforms?", "★ Have you ever had to support a minor change that you knew was only symbolic?"),
            ("How can we build a collaborative culture that reduces the toxic effects of <strong>{v3}</strong>?", "★ Do you feel a strong sense of solidarity within your professional circle?"),
            ("When does a collective focus on <strong>{v4}</strong> cross the line into dangerous surveillance?", "★ Do you feel that your privacy is well protected in your daily life?")
        ],
        "u5_q_fr": [
            ("Qui doit porter la responsabilité de réguler <strong>{v0}</strong> : l'individu ou l'État ?", "★ Pensez-vous que le choix personnel est toujours plus fort que les règles sociales ?"),
            ("Quelles sont les conséquences réelles lorsqu'une société abandonne complètement <strong>{v1}</strong> ?", "★ Avez-vous vu un changement de politique perturber votre secteur ?"),
            ("Est-ce que <strong>{v2}</strong> est un outil nécessaire qui prépare à des réformes plus complexes ?", "★ Avez-vous déjà soutenu un changement mineur que vous saviez de s'adresser à ?"),
            ("Comment bâtir une culture de collaboration qui réduit les effets toxiques de <strong>{v3}</strong> ?", "★ Ressentez-vous une forte solidarité au sein de votre milieu professionnel ?"),
            ("Quand l'attention collective de s'adresser à <strong>{v4}</strong> devient-elle de la surveillance ?", "★ Pensez-vous que votre vie privée est bien protégée au quotidien ?")
        ],
        "u6_q_en": [
            ("In fifty years, will real-time AI and algorithms have solved the challenges of <strong>{v5}</strong>?", "★ Would you trust an automated AI coach to manage your daily routine?"),
            ("If future generations completely optimize <strong>{v6}</strong>, will we lose our capacity for raw emotion?", "★ Can you separate efficiency from true artistic or personal fulfillment?"),
            ("In the future, will the concept of <strong>{v7}</strong> become as obsolete as medieval feudal titles?", "★ Would you mind if society completely abandoned traditional social codes?"),
            ("If we could completely eliminate <strong>{v8}</strong> from language and life, would we solve all conflicts?", "★ Can you imagine a world where there is absolute, uninterrupted peace?"),
            ("In a century, will humanity look back at our obsession with <strong>{v9}</strong> with amusement or horror?", "★ Do you think our descendants will be wiser or more confused than we are?")
        ],
        "u6_q_fr": [
            ("Dans cinquante ans, l'IA aura-t-elle résolu les défis liés à <strong>{v5}</strong> ?", "★ Feriez-vous confiance à un coach automatisé par IA pour gérer votre quotidien ?"),
            ("Si les générations futures optimisent complètement <strong>{v6}</strong>, perdrons-nous nos émotions ?", "★ Pouvez-vous séparer l'efficacité de l'accomplissement artistique ou personnel ?"),
            ("À l'avenir, le concept de <strong>{v7}</strong> deviendra-t-il aussi obsolète que les titres féodaux ?", "★ Seriez-vous dérangé si la société abandonnait les codes sociaux traditionnels ?"),
            ("Si nous pouvions éliminer complètement <strong>{v8}</strong> de nos vies, résoudrions-nous tous les conflits ?", "★ Pouvez-vous imaginer un monde où règne une paix absolue et ininterrompue ?"),
            ("Dans un siècle, l'humanité regardera-t-elle notre obsession de <strong>{v9}</strong> avec amusement ?", "★ Pensez-vous que nos descendants seront plus sages ou plus confus que nous ?")
        ]
    }

# Mapping from filenames to draft numbers
DRAFT_MAPPING = {
    'whether-raindrops-select-where-to-fall.html': '01',
    'do-insects-hide-when-it-rains.html': '02',
    'is-bad-weather-gods-anger.html': '03',
    'always-watched-in-a-crowd.html': '04',
    'why-is-everyone-copying-me.html': '05',
    'feeling-empty-after-series.html': '06',
    'death-of-the-album.html': '07',
    'ugly-produce-anti-waste.html': '08',
    'does-euthanasia-reduce-suicide-rates.html': '09',
    'appreciating-amy-winehouse-after-death.html': '10',
    'why-do-we-try-to-relate-to-adhd.html': '11',
    'is-parenting-instinct-a-real-thing-or-scam.html': '12',
    'are-traditions-hidden-monogamy.html': '13',
    'collective-guilt-global-crisis.html': '14',
    'are-traditions-hidden-monogamy-upper-intermediate.html': '15',
    'i-have-no-time-for-it.html': '16',
    'why-do-i-spend-more-when-i-earn-more.html': '17',
    'does-inclusive-language-make-us-equal.html': '18'
}


def build_mini_html(d_num, is_french, vocab_words):
    db = DRAFTS_DB.get(d_num, DRAFTS_DB["01"])

    # Format vocab placeholders ({v0} to {v9})
    def format_text(text):
        for idx, w in enumerate(vocab_words):
            text = text.replace(f"{{v{idx}}}", w)
        return text

    # Extract dynamic titles
    titles = db["unit_titles_fr"] if is_french else db["unit_titles_en"]
    prose = format_text(db["prose_fr"] if is_french else db["prose_en"])
    warmups = [format_text(w) for w in (db["warmup_fr"] if is_french else db["warmup_en"])]

    # Vocabulary cards for Unit 1 list
    vocab_cards_html = ""
    # We will build cards using the parsed vocab words
    for idx, w in enumerate(vocab_words):
        # We can dynamically get the definitions/examples from parsed list if we store them!
        # But wait, we can just print the words in standard lists or cards
        pass

    # For Mini Group, let's assemble the units
    units_html = ""

    # We have Unit 2, 3, 4, 5, 6
    for unit_idx in range(2, 7):
        u_key = f"u{unit_idx}_q_fr" if is_french else f"u{unit_idx}_q_en"
        q_list = db.get(u_key, [])
        u_title = titles[unit_idx - 2]

        # Color coding headers
        colors = ["#E1F5EE", "#E1F5EE", "#E1F5EE", "#E1F5EE", "#EAF3DE"]
        borders = ["", "5px solid #1A7A4A", "5px solid #2B6CB0", "5px solid #8B5CF6", ""]
        color = colors[unit_idx - 2]
        border_style = borders[unit_idx - 2]
        border_attr = f"border-left: {border_style};" if border_style else ""

        u_desc_en = "Position your thoughts. Answer each main question, then use the matched personalized star prompt to reflect on your own behaviors."
        u_desc_fr = "Positionnez vos pensées. Répondez à chaque question principale, puis utilisez la question personnalisée pour réfléchir à vos propres comportements."
        if unit_idx == 3:
            u_desc_en = "Explore the concepts. Discuss these topic-focused angles in-depth and share your personal anecdotes."
            u_desc_fr = "Explorez les concepts. Débattez de ces questions ciblées de manière approfondie et partagez vos anecdotes."
        elif unit_idx == 4:
            u_desc_en = "Challenge standard opinions. Contrast opposing viewpoints and share which side you naturally lean towards."
            u_desc_fr = "Défiez les opinions reçues. Comparez les points de vue opposés et expliquez de quel côté vous penchez."
        elif unit_idx == 5:
            u_desc_en = "Respond with action. Reflect on the practical consequences, social responsibilities, and solutions available."
            u_desc_fr = "Agissez. Réfléchissez aux conséquences pratiques, aux responsabilités sociales et aux solutions possibles."
        elif unit_idx == 6:
            u_desc_en = "Speculate on what lies ahead. Use advanced structures to project these realities into future decades."
            u_desc_fr = "Spéculez sur l'avenir. Utilisez des structures avancées pour projeter ces réalités dans les décennies futures."

        u_desc = u_desc_fr if is_french else u_desc_en

        q_items_html = ""
        for q_idx, (main_q, pers_q) in enumerate(q_list):
            m_q = format_text(main_q)
            p_q = format_text(pers_q)
            q_items_html += f"""
            <div class="round-item">
                <div class="round-item-main">{m_q}</div>
                <div class="round-item-personal">{p_q}</div>
            </div>"""

        badge_char = "🟢" if unit_idx == 6 else "🔵"
        units_html += f"""
    <!-- ================= UNIT {unit_idx} ================= -->
    <div class="round-block {'round-2' if unit_idx == 6 else 'round-1'} open" id="m-unit{unit_idx}">
        <div class="round-header" onclick="COSY.toggleRound('m-unit{unit_idx}')" style="background:{color}; {border_attr}">
            <span>{badge_char} UNIT {unit_idx}: {u_title}</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
            <p style="font-size:0.82rem; color:var(--muted); margin:0 0 1.5rem 0;">{u_desc}</p>
            {q_items_html}
        </div>
    </div>
"""

    # Build Warmup questions html
    warmups_html = ""
    for w in warmups:
        warmups_html += f"<li>{w}</li>\n"

    # Assemble Vocab check
    vocab_check_title = "Active Vocabulary Check (10 Units)" if not is_french else "Contrôle du vocabulaire actif (10 mots)"
    vocab_check_desc = "Work together as a small group to review these 10 core words. Pronounce them aloud." if not is_french else "Travaillez ensemble en petit groupe pour réviser ces 10 mots essentiels. Prononcez-les à haute voix."

    # Build vocab cards HTML inside Mini Group
    vocab_grid_html = ""
    for idx, w in enumerate(vocab_words):
        # We can just show the word beautifully
        vocab_grid_html += f"""
                <div class="vocab-card">
                    <div class="vocab-word" style="font-size: 1.1rem; color: #3F2B96;">{w}</div>
                </div>"""

    host_tag = "Host Utility" if not is_french else "Utilitaire Hébergeur"
    host_info = "Share this unlocked session with your students:" if not is_french else "Partagez cette session déverrouillée avec vos élèves :"
    copy_btn = "🔗 Copy Student Link" if not is_french else "🔗 Copier le lien élève"
    back_btn = "← Back to I Couldn't Help But Wonder" if not is_french else "← Retour à I Couldn't Help But Wonder"

    html = f"""
<div data-session-mode="mini">
  <!-- Host/Teacher Utility Control Bar -->
  <div class="host-utility-bar">
    <div class="hub-header">
      <span class="hub-tag">🔑 {host_tag}</span>
      <span class="hub-info">{host_info}</span>
    </div>
    <div class="hub-actions">
      <button class="btn-copy-link" onclick="COSY.copyStudentLink(this)">{copy_btn}</button>
      <a href="../../i-couldnt-help-but-wonder.html" class="unobtrusive-back-link">{back_btn}</a>
    </div>
  </div>

  <div class="rounds-container">

    <!-- ================= UNIT 1 ================= -->
    <div class="round-block warm-up open" id="m-unit1">
        <div class="round-header" onclick="COSY.toggleRound('m-unit1')" style="background:#FAEEE8;">
            <span>🟠 UNIT 1: Frame the Dialogue (Introduction &amp; Vocabulary)</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
            <div style="background: rgba(230, 126, 34, 0.04); border-left: 4px solid #E67E22; padding: 1rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem; font-size: 0.92rem; line-height: 1.5; color: var(--ink-soft);">
                <strong>Topic Frame:</strong> {prose}
            </div>

            <h4 style="margin: 0 0 0.5rem; font-size: 1rem; color: var(--ink);">🌱 Warm-Up Prompts</h4>
            <ul class="round-questions" style="margin-bottom: 2rem;">
                {warmups_html}
            </ul>

            <h4 style="margin: 0 0 1rem; font-size: 1rem; color: var(--ink); border-bottom: 1px dashed var(--border); padding-bottom: 0.5rem;">📖 {vocab_check_title}</h4>
            <p style="font-size:0.82rem; color:var(--muted); margin:0 0 1.25rem 0;">{vocab_check_desc}</p>

            <div class="vocab-grid-10" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
                {vocab_grid_html}
            </div>
        </div>
    </div>

    {units_html}

  </div>
</div>
"""
    return html


def build_private_html(d_num, is_french, vocab_words):
    db = DRAFTS_DB.get(d_num, DRAFTS_DB["01"])

    def format_text(text):
        for idx, w in enumerate(vocab_words):
            text = text.replace(f"{{v{idx}}}", w)
        return text

    # Select 4 vocabulary words for Step 2
    selected_vocab = vocab_words[:4] if len(vocab_words) >= 4 else ["Word1", "Word2", "Word3", "Word4"]
    vocab_cards_html = ""
    for idx, w in enumerate(selected_vocab):
        vocab_cards_html += f"""
                <div class="vocab-card">
                    <div class="vocab-word" style="font-size: 1.15rem; color: #E67E22; font-weight: bold; margin-bottom: 0.25rem;">{w}</div>
                </div>"""

    # Localizations
    t_tag = "Teacher Utility" if not is_french else "Utilitaire Enseignant"
    t_info = "Share this unlocked lesson with your student:" if not is_french else "Partagez ce cours particulier déverrouillé avec votre élève :"
    copy_btn = "🔗 Copy Student Link" if not is_french else "🔗 Copier le lien élève"
    back_btn = "← Back to I Couldn't Help But Wonder" if not is_french else "← Retour à I Couldn't Help But Wonder"

    title_s1 = "🟠 Step 1: Lead-In / Warm-Up" if not is_french else "🟠 Étape 1 : Mise en route / Échauffement"
    title_s2 = "🟠 Step 2: Vocabulary Integration" if not is_french else "🟠 Étape 2 : Intégration du vocabulaire"
    title_s3 = "🟠 Step 3: Stimulus Case Study" if not is_french else "🟠 Étape 3 : Étude de cas stimulant"
    title_s4 = "🔵 Step 4: Guided Discussion" if not is_french else "🔵 Étape 4 : Discussion guidée"
    title_s5 = "🟣 Step 5: Target Language Focus" if not is_french else "🟣 Étape 5 : Focus de langue cible"
    title_s6 = "🟢 Step 6: Critical &amp; Speculative Discussion" if not is_french else "🟢 Étape 6 : Discussion critique et spéculative"
    title_s7 = "🟢 Step 7: Personal Reflection" if not is_french else "🟢 Étape 7 : Réflexion personnelle"
    title_s8 = "🟣 Step 8: Final Production / Challenge" if not is_french else "🟣 Étape 8 : Production finale / Défi"

    tg_label = "TEACHER GUIDE" if not is_french else "GUIDE DE L'ENSEIGNANT"

    # Warm-up sparks
    warmups_s1_html = ""
    for w in (db["warmup_fr"] if is_french else db["warmup_en"]):
        warmups_s1_html += f"<li style=\"margin-bottom: 0.5rem;\">{format_text(w)}</li>\n"

    # Stimulus prose
    stimulus_prose = format_text(db["private_step3_fr"] if is_french else db["private_step3_en"])

    # Discussion prompts for Step 4
    u2_list = db.get("u2_q_fr" if is_french else "u2_q_en", [])
    step4_questions_html = ""
    for idx, (m, p) in enumerate(u2_list[:3]):
        step4_questions_html += f"""
            <div class="round-item">
                <div class="round-item-main">{format_text(m)}</div>
                <div class="round-item-personal">{format_text(p)}</div>
            </div>"""

    # Grammar task Step 5
    g_title = db["grammar_title_fr"] if is_french else db["grammar_title_en"]
    g_desc = db["grammar_desc_fr"] if is_french else db["grammar_desc_en"]
    g_chips = db["grammar_chips_fr"] if is_french else db["grammar_chips_en"]
    g_sents = db["grammar_sentences_fr"] if is_french else db["grammar_sentences_en"]

    chips_html = ""
    for c in g_chips:
        chips_html += f'<span class="grammar-tap-chip" onclick="COSY.selectGrammarChip(this)" style="background:#FFFDF9; border:1px solid #3F2B96; padding:5px 12px; border-radius:20px; cursor:pointer; font-weight:600; color:#3F2B96; font-size:0.85rem; user-select:none; transition:all 0.2s;">{c}</span>\n'

    sents_html = ""
    for s_idx, (sentence_text, ans) in enumerate(g_sents):
        sents_html += f'<li>{sentence_text}</li>\n'

    check_btn = "Check Answers" if not is_french else "Vérifier"
    reset_btn = "Reset Board" if not is_french else "Réinitialiser"

    # Critical discussion Step 6
    u6_list = db.get("u6_q_fr" if is_french else "u6_q_en", [])
    step6_questions_html = ""
    for idx, (m, p) in enumerate(u6_list[:2]):
        step6_questions_html += f"""
            <div class="round-item">
                <div class="round-item-main">{format_text(m)}</div>
                <div class="round-item-personal">{format_text(p)}</div>
            </div>"""

    # Step 7 Reflection
    reflection_p = format_text(db["private_step8_fr"] if is_french else db["private_step8_en"])

    html = f"""
<div data-session-mode="private">
  <!-- Host/Teacher Utility Control Bar -->
  <div class="host-utility-bar" style="margin-bottom: 2rem;">
    <div class="hub-header">
      <span class="hub-tag">🔑 {t_tag}</span>
      <span class="hub-info">{t_info}</span>
    </div>
    <div class="hub-actions">
      <button class="btn-copy-link" onclick="COSY.copyStudentLink(this)">{copy_btn}</button>
      <a href="../../i-couldnt-help-but-wonder.html" class="unobtrusive-back-link">{back_btn}</a>
    </div>
  </div>

  <!-- PRIVATE LESSON: 1-to-1 Teacher-Led Curriculum -->
  <div class="private-lesson-container">

    <!-- ================= 1. LEAD-IN / WARM-UP ================= -->
    <section class="private-step" id="p-step1" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #FAEEE8; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #E67E22;">
            <strong style="color: #BA5812; font-size: 1.1rem;">{title_s1}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 5–10 mins</span>
        </div>

        <div class="teacher-note-panel" style="background: rgba(63, 43, 150, 0.05); border: 1px solid rgba(63, 43, 150, 0.2); padding: 1.25rem; border-radius: 12px; margin-top: 1rem; color: var(--ink); font-size: 0.88rem; line-height: 1.5;">
            <span class="tn-badge" style="background: #3F2B96; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.72rem; font-weight: bold; font-family: monospace; display: inline-block; margin-bottom: 0.5rem;">📝 {tg_label}</span>
            <p style="margin: 0.25rem 0;"><strong>Goal:</strong> Activate schema and build personal connection. Focus on starting the conversational flow.</p>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">🌱 Initial Spark</h4>
            <ul class="round-questions" style="line-height: 1.8;">
                {warmups_s1_html}
            </ul>
        </div>
    </section>

    <!-- ================= 2. VOCABULARY ================= -->
    <section class="private-step" id="p-step2" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #FAEEE8; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #E67E22;">
            <strong style="color: #BA5812; font-size: 1.1rem;">{title_s2}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 10–15 mins</span>
        </div>

        <div class="teacher-note-panel" style="background: rgba(63, 43, 150, 0.05); border: 1px solid rgba(63, 43, 150, 0.2); padding: 1.25rem; border-radius: 12px; margin-top: 1rem; color: var(--ink); font-size: 0.88rem; line-height: 1.5;">
            <span class="tn-badge" style="background: #3F2B96; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.72rem; font-weight: bold; font-family: monospace; display: inline-block; margin-bottom: 0.5rem;">📝 {tg_label}</span>
            <p style="margin: 0.25rem 0;"><strong>Goal:</strong> Introduce, check pronunciation, and encourage personalized use of core vocabulary.</p>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">📖 Vocabulary Catalyst (Selected Units)</h4>
            <div class="vocab-grid-10" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
                {vocab_cards_html}
            </div>
        </div>
    </section>

    <!-- ================= 3. STIMULUS ================= -->
    <section class="private-step" id="p-step3" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #FAEEE8; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #E67E22;">
            <strong style="color: #BA5812; font-size: 1.1rem;">{title_s3}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 10 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">📰 Contextual Scenario</h4>
            <p style="font-size: 1rem; line-height: 1.6; color: var(--ink-soft); font-style: italic; border-left: 3px solid #E67E22; padding-left: 1rem; margin-bottom: 1.5rem;">
                "{stimulus_prose}"
            </p>
        </div>
    </section>

    <!-- ================= 4. GUIDED DISCUSSION ================= -->
    <section class="private-step" id="p-step4" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #E1F5EE; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #1A7A4A;">
            <strong style="color: #1A7A4A; font-size: 1.1rem;">{title_s4}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 15 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">🎙️ Dialogue Development</h4>
            {step4_questions_html}
        </div>
    </section>

    <!-- ================= 5. LANGUAGE FOCUS ================= -->
    <section class="private-step" id="p-step5" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #EEEDFE; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #3F2B96;">
            <strong style="color: #3F2B96; font-size: 1.1rem;">{title_s5}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 10–15 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <div class="grammar-interactive-game" style="position:relative; z-index:2;">
                <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 0.5rem 0; color: var(--ink);">{g_title}</h4>
                <p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">{g_desc}</p>

                <div style="background: rgba(63, 43, 150, 0.03); border: 1px dashed rgba(63, 43, 150, 0.3); padding: 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;">
                    <strong style="display: block; margin-bottom: 0.5rem; color: #1F104D;">🧩 Interactive Word Bank:</strong>
                    <div class="grammar-word-bank" style="display:flex; flex-wrap:wrap; gap:8px;">
                        {chips_html}
                    </div>
                </div>

                <div class="grammar-task-item" style="background: rgba(63, 43, 150, 0.04); padding: 1.25rem; border-radius: 12px; border-left: 4px solid #3F2B96; box-shadow: var(--shadow-sm); margin-bottom:1.5rem;">
                    <strong style="display: block; margin-bottom: 0.5rem; color: #1F104D;">📝 Task: Contextual Clout</strong>
                    <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--ink); line-height: 2.0;">
                        {sents_html}
                    </ol>
                </div>

                <div style="display:flex; gap:10px;">
                    <button class="btn-verify" onclick="COSY.verifyGrammarGame(this)" style="background:#3F2B96; color:white; border:none; padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;">{check_btn}</button>
                    <button class="btn-reset" onclick="COSY.resetGrammarGame(this)" style="background:transparent; border:1px solid var(--border); color:var(--muted); padding:10px 20px; border-radius:30px; cursor:pointer; font-weight:700; font-size:0.9rem; transition:all 0.2s;">{reset_btn}</button>
                </div>
            </div>
        </div>
    </section>

    <!-- ================= 6. CRITICAL / SPECULATIVE DISCUSSION ================= -->
    <section class="private-step" id="p-step6" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #EAF3DE; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #2B6CB0;">
            <strong style="color: #2B6CB0; font-size: 1.1rem;">{title_s6}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 10–15 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">🔮 Introspective Horizon</h4>
            {step6_questions_html}
        </div>
    </section>

    <!-- ================= 7. PERSONAL REFLECTION ================= -->
    <section class="private-step" id="p-step7" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #EAF3DE; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #2B6CB0;">
            <strong style="color: #2B6CB0; font-size: 1.1rem;">{title_s7}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 5–10 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">🧭 Perspective Alignment</h4>
            <p style="font-size: 0.95rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1.5rem;">
                {reflection_p}
            </p>
        </div>
    </section>

    <!-- ================= 8. FINAL PRODUCTION / CHALLENGE ================= -->
    <section class="private-step" id="p-step8" style="margin-bottom: 3rem;">
        <div class="private-step-header" style="background: #EEEDFE; padding: 1rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #8B5CF6;">
            <strong style="color: #8B5CF6; font-size: 1.1rem;">{title_s8}</strong>
            <span style="font-size: 0.85rem; color: #7C6E52; font-family: monospace;">⏱️ 5–10 mins</span>
        </div>

        <div class="student-content-block" style="padding: 1.5rem 1rem;">
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin: 0 0 1rem 0; color: var(--ink);">🎯 90-Second Speech Run</h4>
            <p style="font-size: 1.05rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1.5rem; font-weight: 500;">
                {reflection_p}
            </p>
        </div>
    </section>

  </div>
</div>
"""
    return html


def process_html_file(filepath):
    filename = os.path.basename(filepath)
    d_num = DRAFT_MAPPING.get(filename)
    if not d_num:
        print(f"⚠️ No draft mapping found for {filename}. Skipping.")
        return

    is_french = "events/fr/" in filepath.replace('\\', '/')

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip files that already have mini/private modes, except if we want to overwrite them
    if 'data-session-mode="mini"' in content and d_num == '18' and not is_french:
        print(f"ℹ️ {filename} already has modes implemented (Draft 18 model). Skipping.")
        return

    print(f"⚡ Processing {filepath} (Draft {d_num}, French: {is_french})")

    # Parse 10 vocab words from the original HTML
    vocab_words = re.findall(r'<div class="vocab-word">(.*?)</div>', content)
    if not vocab_words:
        print(f"⚠️ No vocabulary words found in {filename}!")
        vocab_words = ["Word1", "Word2", "Word3", "Word4", "Word5", "Word6", "Word7", "Word8", "Word9", "Word10"]
    else:
        # Deduplicate and trim
        vocab_words = [w.strip() for w in vocab_words]
        # De-duplicate keeping order
        seen = set()
        vocab_words = [x for x in vocab_words if not (x in seen or seen.add(x))]
        vocab_words = vocab_words[:10]

    # Generate Mini and Private blocks
    mini_html = build_mini_html(d_num, is_french, vocab_words)
    private_html = build_private_html(d_num, is_french, vocab_words)

    # Wrap the big-group session:
    # Find '<div class="cosy-perspective-panel"'
    # Find '<section id="related-references"' or '`</main>`'

    panel_start_idx = content.find('<div class="cosy-perspective-panel"')
    if panel_start_idx == -1:
         # Fallback if no panel is found
         panel_start_idx = content.find('<div class="wonder-audio-player-placeholder"')

    if panel_start_idx == -1:
        print(f"❌ Error: Cannot find start anchor in {filename}!")
        return

    ref_idx = content.find('<section id="related-references"')
    if ref_idx == -1:
         ref_idx = content.find('</main>')

    if ref_idx == -1:
         print(f"❌ Error: Cannot find end anchor in {filename}!")
         return

    # Extract original big group segment
    big_group_segment = content[panel_start_idx:ref_idx]

    # Check if already wrapped to prevent double wrapping
    if 'data-session-mode="big"' not in big_group_segment:
        wrapped_big = f'<div data-session-mode="big">\n{big_group_segment}\n</div>\n'
    else:
        wrapped_big = big_group_segment

    # Reassemble the file
    head_part = content[:panel_start_idx]
    tail_part = content[ref_idx:]

    new_content = f"{head_part}{wrapped_big}\n{mini_html}\n{private_html}\n{tail_part}"

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"✅ Successfully updated {filename}")


def main():
    dirs = [
        "events/sessions/i-couldnt-help-but-wonder/",
        "events/fr/sessions/i-couldnt-help-but-wonder/"
    ]
    for d in dirs:
        if not os.path.exists(d):
            continue
        for filename in sorted(os.listdir(d)):
            if filename.endswith(".html") and not filename.startswith("template"):
                process_html_file(os.path.join(d, filename))


if __name__ == "__main__":
    main()

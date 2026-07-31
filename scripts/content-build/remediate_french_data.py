import os
import re
from bs4 import BeautifulSoup

# Handcrafted vocabulary definitions and examples in French
VOCAB_FRENCH = {
    # Toutes les machines ont le cœur
    "La machine": ("appareil ou ensemble d'appareils capables de transformer l'énergie.", "Cette usine utilise une machine très moderne pour trier."),
    "Le cœur": ("organe musculaire creux, symbole de la vie et des sentiments.", "Elle écoute toujours son cœur pour prendre des décisions."),
    "L'âme": ("principe de vie, de pensée et de sensibilité chez l'être humain.", "La musique classique touche directement l'âme des auditeurs."),
    "La blessure": ("lesion physique ou blessure morale causée par un événement.", "Sa blessure s'est refermée lentement après cette épreuve."),
    "L'espoir ≠ Le désespoir": ("sentiment de confiance en l'avenir opposé à la perte totale de confiance.", "Garder l'espoir permet de traverser les moments de désespoir."),
    "Le regret": ("sentiment douloureux d'avoir perdu quelque chose ou d'avoir manqué d'agir.", "Il a exprimé un vif regret après son départ précipité."),
    "Le rêve": ("production de l'imagination, désir ou ambition.", "Réaliser son rêve d'enfant demande beaucoup de courage."),
    "Guérir": ("recouvrer la santé, faire disparaître une maladie ou une peine.", "Le temps finit toujours par guérir les peines d'amour."),
    "Sentir": ("percevoir par les sens, éprouver une ébauche d'émotion.", "Elle peut sentir la chaleur du soleil sur son visage."),
    "Le secret ≠ La transparence": ("chose qui doit être cachée à l'opposé de la clarté totale.", "Elle préfère garder son jardin secret plutôt que d'exiger une transparence totale."),

    # Je t'aime comme je t'aime
    "L'amour ≠ La haine": ("sentiment d'affection profonde opposé à une hostilité violente.", "L'amour sincère triomphe toujours de la haine."),
    "La tendresse": ("sentiment d'affection douce, de bienveillance attentive.", "Elle a accueilli le bébé avec une immense tendresse."),
    "Le silence ≠ Le bruit": ("absence totale d'agitation sonore opposée au tumulte.", "Elle apprécie le silence de la nuit loin du bruit de la ville."),
    "Le doute": ("état de l'esprit qui hésite à se prononcer sur la vérité.", "Le doute s'est installé dans son esprit après cette réunion."),
    "La fidélité": ("qualité de quelqu'un qui est constant dans ses sentiments et engagements.", "La fidélité de ses amis est un grand réconfort pour elle."),
    "Chuchoter": ("parler à voix très basse, sans vibrer les cordes vocales.", "Ils aiment chuchoter des secrets à la tombée de la nuit."),
    "Partager": ("diviser et distribuer, s'associer avec d'autres pour une action.", "Il est important de partager son repas avec les démunis."),
    "La patience": ("aptitude à attendre calmement, sans s'énerver.", "La patience est une vertu essentielle pour enseigner."),
    "Le baiser": ("action de toucher avec les lèvres en signe d'affection.", "Elle a donné un tendre baiser à son amie sur la joue."),
    "Le lien": ("ce qui de près ou de loin unit des personnes ou des choses.", "Ils partagent un lien d'amitié très fort et solide."),

    # Salut
    "Le salut": ("action de saluer, de dire bonjour ou de prendre congé.", "Il a fait un geste de salut de la main avant de partir."),
    "Le retour": ("action de revenir à son point de départ.", "Son retour au pays a été célébré by toute sa famille."),
    "La nostalgie": ("regret mélancolique d'un état passé ou d'un pays perdu.", "La nostalgie de son enfance l'inspire dans son écriture."),
    "Le temps": ("durée mesurable ou conditions météorologiques.", "Le temps passe si vite quand on s'amuse ensemble."),
    "Le café": ("boisson chaude stimulante ou établissement où on la sert.", "Prendre un bon café le matin est son rituel quotidien."),
    "Retrouver": ("revenir en possession de ce qu'on avait perdu ou revoir quelqu'un.", "Elle est ravie de retrouver ses anciens camarades."),
    "Changer": ("rendre différent, modifier profondément une situation.", "Il a décidé de changer de carrière pour être plus heureux."),
    "Le souvenir": ("survivance d'une impression passée dans la mémoire.", "Ce voyage restera un magnifique souvenir pour nous tous."),
    "L'ami": ("personne avec qui l'on est lié par l'amitié.", "Un ami de confiance est un trésor précieux dans la vie."),
    "La gare": ("lieu d'arrêt des trains pour la montée et descente des voyageurs.", "Elle l'attend patiemment sur le quai de la gare."),

    # Toi Mon Amour
    "Le destin": ("puissance qui semble régler le cours de la vie de manière inévitable.", "Elle croit fermement que son destin est lié au sien."),
    "La complicité": ("entente profonde et spontanée entre des personnes.", "Leur complicité est évidente dès le premier regard."),
    "Le chemin": ("voie de terre, parcours ou direction à suivre.", "Elle a choisi un chemin professionnel très original."),
    "La voix": ("ensemble des sons produits par les cordes vocales.", "Sa voix douce et mélodieuse calme immédiatement les enfants."),
    "S'unir": ("se joindre pour agir ensemble, fusionner.", "Les pays doivent s'unir pour protéger l'environnement."),
    "Briller": ("émettre de la lumière, se distinguer par son éclat.", "Les étoiles commencent à briller dans le ciel nocturne."),
    "La douceur": ("qualité de ce qui est doux, agréable et paisible.", "La douceur du climat méditerranéen attire les touristes."),
    "La promesse": ("engagement de faire ou de donner quelque chose à quelqu'un.", "Elle a tenu sa promesse de l'aider à déménager."),
    "L'éternité": ("durée sans commencement ni fin, temps infini.", "Leurs œuvres d'art entreront dans l'éternité."),

    # Oui ou non
    "L'hésitation": ("action d'hésiter, manque d'assurance avant d'agir.", "Son hésitation pendant le discours a montré son doute."),
    "La réponse": ("parole ou écrit par lequel on répond à une question.", "Elle a envoyé sa réponse définitive par courriel."),
    "Le message": ("communication écrite ou orale transmise à quelqu'un.", "Il a reçu un message important de son collaborateur."),
    "Attendre": ("rester en un lieu jusqu'à ce que quelqu'un arrive.", "Ils doivent attendre le bus sous un abri de pluie."),
    "La frustration": ("état de déception causé par un désir non satisfait.", "La panne d'internet a causé une grande frustration."),
    "Le choix": ("action de choisir entre plusieurs possibilités.", "Faire un bon choix de vie demande de la réflexion."),
    "La clarté": ("qualité de ce qui est clair, facile à comprendre.", "La clarté de ses explications a été très appréciée."),
    "Jouer": ("se divertir, s'amuser à un jeu ou pratiquer un instrument.", "Les enfants aiment jouer au football dans le parc."),
    "L'incertitude": ("état de ce qui n'est pas sûr, manque de certitude.", "L'incertitude économique inquiète les entrepreneurs."),

    # Balance ton quoi
    "Le respect": ("sentiment de considération envers quelqu'un ou quelque chose.", "Le respect mutuel est essentiel au sein d'une équipe."),
    "Le sexisme": ("attitude de discrimination ou d'inégalité basée sur le sexe.", "La société combat activement le sexisme sous toutes ses formes."),
    "La dénonciation": ("action de signaler publiquement un fait ou un abus.", "La dénonciation des violences a libéré la parole des femmes."),
    "La liberté": ("état d'une personne libre et indépendante de ses choix.", "La liberté d'expression est un droit fondamental."),
    "L'égalité": ("rapport de parité entre personnes ayant les mêmes droits.", "La loi garantit l'égalité salariale entre hommes et femmes."),
    "Parler": ("s'exprimer par la parole, communiquer publiquement.", "Il est important de parler ouvertement pour casser les tabous."),
    "Le courage ≠ La lâcheté": ("force morale devant le danger opposée au manque de bravoure.", "Dénoncer les abus demande du courage et refuse la lâcheté."),
    "Le changement": ("action de changer, modification profonde.", "Le changement d'attitude est nécessaire pour faire évoluer les mentalités."),
    "L'attitude": ("comportement ou posture morale de quelqu'un.", "Une attitude respectueuse envers autrui devrait être la norme."),

    # L'Aziza
    "La tolérance": ("respect de la liberté d'autrui, de ses manières de penser.", "La tolérance mutuelle permet la cohésion d'une société pluraliste."),
    "La paix ≠ La guerre": ("état de tranquillité d'un pays à l'opposé des hostilités.", "Le traité a enfin instauré la paix et mis fin à la guerre."),
    "La diversité": ("caractère de ce qui présente des aspects variés.", "La diversité culturelle est une immense richesse pour notre pays."),
    "La dignité": ("respect de soi-même, gravité et noblesse du comportement.", "Chaque être humain a droit au respect de sa dignité."),
    "L'harmonie": ("accord parfait entre les sentiments et les personnes.", "Leur famille vit en parfaite harmonie malgré leurs différences."),
    "Le combat": ("action de lutter pour défendre ses droits ou une cause.", "La justice sociale est un combat quotidien pour de nombreux militants."),
    "Le partage": ("action de diviser et distribuer avec générosité.", "Elle place le partage et la solidarité au cœur de ses valeurs."),

    # Nos âmes sont
    "La connexion": ("relation étroite, liaison spirituelle ou mentale.", "Ils ressentent une connexion immédiate dès leur première rencontre."),
    "La profondeur": ("caractère de ce qui est profond, sérieux et spirituel.", "La profondeur de ses écrits philosophiques impressionne les critiques."),
    "Le mystère": ("ce qui est caché, incompréhensible pour la raison.", "L'origine de l'univers reste un grand mystère."),
    "La douleur": ("souffrance physique ou morale intense.", "Elle a surmonté la douleur de la séparation en se concentrant sur son art."),
    "S'élever": ("monter plus haut, progresser intellectuellement ou spirituellement.", "Elle cherche toujours à s'élever au-dessus des conflits quotidiens."),
    "La sensibilité": ("aptitude à ressentir vivement des impressions, des émotions.", "Sa grande sensibilité lui permet de composer de magnifiques mélodies."),
    "La vérité": ("qualité de ce qui est vrai, conforme à la réalité.", "Dire la vérité est essentiel pour bâtir une confiance solide."),
    "L'invisible": ("ce qui ne peut pas être perçu par la vue physique.", "Les liens affectifs profonds font partie de l'invisible."),

    # Immobile
    "L'immobilité": ("état de ce qui ne bouge pas, immobilité physique ou d'attente.", "L'immobilité de l'animal lui permet de ne pas être repéré."),
    "L'attente": ("action d'attendre l'arrivée de quelqu'un ou d'un événement.", "L'attente à l'aéroport a semblé interminable."),
    "La peur": ("émotion éprouvée face à un danger réel ou imaginaire.", "Elle a surmonté sa peur du noir en allumant une veilleuse."),
    "La solitude": ("état de celui qui vit seul ou se sent isolé.", "Il apprécie la solitude de la campagne pour écrire en paix."),
    "Figer": ("rendre immobile, bloquer des sentiments ou une situation.", "La surprise a fini par figer son sourire pendant quelques secondes."),
    "Le regard": ("action de regarder, expression des yeux.", "Son regard bienveillant m'a immédiatement mis en confiance."),
    "Le départ": ("action de s'en aller, de commencer un voyage.", "Ils préparent leurs bagages pour leur départ demain matin."),

    # La nuit n'en finit plus
    "La nuit": ("période d'obscurité entre le coucher et le lever du soleil.", "La nuit noire favorise l'introspection et le repos."),
    "L'obscurité": ("absence de lumière, obscurité totale.", "Elle tâtonne dans l'obscurité pour trouver l'interrupteur."),
    "La tristesse ≠ La joie": ("état de chagrin opposé à un sentiment de bonheur intense.", "Sa tristesse s'est transformée en joie quand il est revenu."),
    "Le matin ≠ Le soir": ("début de la journée opposé à la fin de la journée.", "Elle préconise de faire les tâches difficiles le matin plutôt que le soir."),
    "L'insomnie": ("manque habituel ou accidentel de sommeil.", "Son insomnie persistante l'épuise depuis plusieurs semaines."),

    # Le soleil noir
    "Le soleil ≠ La lune": ("étoile lumineuse du jour opposée à l'astre de la nuit.", "Le soleil brille en journée alors que la lune éclaire la nuit."),
    "La mélancolie": ("tristesse vague, état d'esprit pensif et nostalgique.", "La mélancolie de cette chanson rappelle les jours pluvieux d'automne."),
    "La perte": ("fait de perdre un objet, un avantage ou un être cher.", "Elle traverse un deuil difficile après la perte de son grand-père."),
    "Le chagrin": ("douleur morale intense, tristesse profonde.", "Son visage fatigué laissait transparaître un immense chagrin."),
    "Brûler": ("consommer par le feu, détruire ou consumer de passion.", "Son désir de réussir continue de brûler intensément."),
    "L'ombre": ("zone privée de lumière directe.", "Ils se reposent à l'ombre d'un vieux chêne centenaire."),
    "Le vide": ("espace qui ne contient aucune matière, absence de sens.", "Elle ressent un grand vide intérieur après son départ."),

    # La tour eiffel est pour moi
    "Paris": ("la capitale culturelle de la France, aussi appelée Ville Lumière.", "Paris inspire les poètes par son architecture et ses lumières."),
    "La beauté": ("qualité d'une personne ou d'une chose qui plaît à l'esprit.", "La beauté de la Tour Eiffel illuminée émerveille les visiteurs."),
    "La fierté": ("sentiment de dignité, d'amour-propre ou de satisfaction légitime.", "C'est avec fierté qu'elle a présenté son projet de diplôme."),
    "Le monument": ("ouvrage d'architecture remarquable destiné à transmettre un souvenir.", "La Tour Eiffel est le monument le plus célèbre de France."),
    "Se promener": ("faire une promenade pour le plaisir, sans but précis.", "Ils aiment se promener le long des quais de la Seine."),
    "Le ciel": ("espace atmosphérique visible au-dessus de nos têtes.", "Le ciel étoilé de Paris offre un spectacle magnifique."),
    "La joie": ("émotion de bonheur intense et agréable.", "Sa réussite a rempli la maison d'une immense joie."),

    # Quelqu'un pour toi
    "La rencontre": ("fait de se trouver en présence de quelqu'un pour la première fois.", "Leur première rencontre fortuite a changé le cours de leur existence."),
    "Soutenir": ("maintenir, encourager ou apporter son aide à quelqu'un.", "Il est primordial de soutenir ses proches dans les épreuves de la vie."),
    "La présence ≠ L'absence": ("fait d'être là opposé au fait de ne pas être là.", "Sa présence chaleureuse compense largement son absence passée."),

    # Bien plus fort
    "La force ≠ La faiblesse": ("puissance physique ou morale opposée au manque de vigueur.", "Reconnaître ses erreurs est une force, non une faiblesse."),
    "La passion": ("amour ou intérêt extrêmement vif et impérieux pour un sujet.", "Le chant choral est sa véritable passion depuis toujours."),
    "L'intensité": ("degré élevé de force, de puissance ou d'émotion.", "L'intensité de sa voix a captivé tout l'auditoire de la salle."),
    "Le triomphe": ("grande victoire, succès éclatant et retentissant.", "Le concert s'est terminé par un triomphe absolu sous les applaudissements."),
    "Surmonter": ("vaincre un obstacle, triompher d'une d'une difficulté.", "Elle a trouvé l'énergie de surmonter cette épreuve douloureuse."),

    # Un premier amour
    "La pureté": ("qualité de ce qui est pur, sans mélange ni corruption.", "La pureté de ses intentions a rassuré ses collaborateurs."),
    "La jeunesse ≠ La vieillesse": ("période de la vie jeune opposée au grand âge.", "La jeunesse rêve d'avenir tandis que la vieillesse se rappelle le passé."),
    "Le premier": ("qui précède tous les autres dans le temps ou l'ordre.", "Ce fut son tout premier pas sur une scène de théâtre."),
    "L'innocence ≠ La culpabilité": ("état de non-culpabilité opposé au fait d'être coupable.", "Le tribunal a reconnu son innocence et rejeté la culpabilité."),

    # Voilà
    "La présentation": ("action de se présenter ou de présenter une œuvre au public.", "Sa présentation orale a convaincu l'ensemble des jurés."),
    "L'authenticité": ("qualité de ce qui est vrai, sincère et sans artifice.", "Le public apprécie l'authenticité brute de sa performance."),
    "La vulnérabilité": ("caractère de ce qui est fragile et exposé aux blessures.", "Admettre sa vulnérabilité demande en réalité une grande force d'âme."),
    "Le public": ("ensemble des spectateurs ou auditeurs d'une œuvre.", "Le public conquis s'est levé pour l'applaudir chaleureusement."),
    "Se donner": ("se consacrer entièrement, sans réserve, à une cause.", "Elle aime se donner à fond lorsqu'elle monte sur scène."),
    "La scène": ("espace sureléve où se produisent les artistes devant le public.", "La chanteuse s'est avancée sur la scène sous les projecteurs."),
    "L'artiste": ("personne qui pratique un art ou se produit en spectacle.", "Cette jeune artiste peintre expose ses œuvres à l'international."),
    "L'écoute": ("action d'écouter attentivement pour comprendre.", "Une écoute attentive est indispensable pour une communication saine."),

    # L'effet de masse
    "La classe": ("groupe d'élèves qui suivent le même enseignement ou la salle.", "L'ambiance dans la classe s'est détériorée à cause des moqueries."),
    "L'histoire": ("récit d'événements réels ou imaginaires, passés.", "Elle a raconté l'histoire de sa famille pour sensibiliser ses camarades."),
    "La masse": ("grand nombre de personnes, effet de foule ou de groupe.", "L'effet de masse pousse parfois à des comportements hostiles."),
    "Isoler": ("séparer quelqu'un d'un groupe, le mettre à l'écart.", "Le harcèlement commence souvent par isoler la victime."),
    "L'idiot": ("personne qui manque d'intelligence ou agit bêtement.", "C'est un comportement idiot de suivre la foule sans réfléchir."),
    "Le bureau": ("meuble de travail ou pièce dans laquelle on travaille.", "L'élève s'est assis à son bureau, l'air très soucieux."),
    "Meilleur": ("de qualité supérieure, plus avantageux.", "Chacun devrait s'efforcer de devenir une meilleure version de lui-même."),
    "La rue": ("voie publique bordée de maisons dans une ville.", "Elle marche seule dans la rue, cherchant un visage amical."),
    "Le couloir": ("passage étroit à l'intérieur d'un bâtiment ou d'une école.", "Les moqueries résonnaient douloureusement dans le couloir."),

    # Ouvrir les yeux
    "Le monde": ("la Terre, l'univers ou la société humaine.", "Elle veut parcourir le monde pour découvrir de nouvelles cultures."),
    "Seule": ("qui est sans compagnie, isolée.", "Elle s'est retrouvée seule après la fermeture de l'école."),
    "Le froid": ("de basse température ou insensibilité émotionnelle.", "Un froid glacial régnait dans cette maison abandonnée."),
    "Oublier": ("perdre le souvenir de quelque chose ou de quelqu'un.", "Il est parfois difficile d'oublier les moments douloureux du passé."),
    "La chaleur": ("température élevée ou accueil bienveillant.", "La chaleur de son foyer l'a aidée à retrouver le sourire."),

    # La complainte de la serveuse automate
    "Le loyer": ("somme payée périodiquement pour l'usage d'un logement.", "Elle travaille dur chaque mois pour pouvoir payer son loyer."),
    "L'automate": ("appareil imitant les mouvements d'un être vivant, sans âme.", "Elle se sent comme un automate à force de répéter les mêmes gestes."),
    "Cultiver": ("travailler la terre pour faire pousser des plantes, ou développer.", "Elle rêve de quitter la ville pour aller cultiver la terre au soleil."),
    "Les tomates": ("fruits rouges cultivés dans les potagers.", "Elle aimerait planter et récolter ses propres tomates dans son jardin."),
    "Le souterrain": ("qui est sous terre, comme le métro ou une cave.", "Le café se situe dans un centre commercial souterrain et sans lumière."),
    "Pareils": ("qui sont semblables, identiques.", "Tous ses jours de travail se ressemblent et sont pareils."),
    "Le néon": ("tube lumineux à décharge électrique.", "La lumière artificielle du néon fatigue ses yeux fatigués."),
    "Éteint": ("qui ne produit plus de lumière, sans éclat ni vie.", "Quand le restaurant ferme, le grand panneau lumineux s'éteint."),

    # Le monde est stone
    "Éclate": ("se briser violemment, ou s'amuser bruyamment.", "Une crise de larmes éclate quand la pression devient trop forte."),
    "Dormir": ("être dans l'état de sommeil, se reposer.", "Elle a besoin de dormir pour oublier son épuisement quotidien."),
    "L'asphalte": ("matière noire servant de revêtement pour les routes.", "La chaleur monte de l'asphalte noir de la ville bondée."),
    "Mourir": ("cesser de vivre, s'éteindre.", "Elle a le sentiment de mourir à petit feu dans cette routine."),
    "Stone": ("terme familier signifiant engourdi, hébété ou léthargique.", "Elle se sent complètement stone face au chaos du monde moderne."),
    "Tourne": ("se mouvoir en rond, pivoter.", "Elle a l'impression que la Terre tourne à l'envers aujourd'hui."),
    "Le cinéma": ("art de projeter des films, ou mise en scène.", "Elle préfère fuir sa propre vie en s'enfermant au cinéma."),
    "Battre": ("frapper de manière répétée, pulser.", "Elle peut sentir son cœur battre très fort dans sa poitrine."),
    "Les empires": ("grands domaines de pouvoir ou de richesse.", "Les hommes passent leur vie à bâtir des empires éphémères."),
    "Les châteaux": ("grandes demeures seigneuriales, châteaux de cartes.", "Ses projets se sont effondrés comme des châteaux de cartes."),

    # Un garçon pas comme les autres
    "Folle": ("qui a perdu la raison, ou passionné à l'excès.", "C'est une folle passion qui l'unit à ce garçon indisponible."),
    "La faute": ("erreur commise, manquement à un devoir.", "Ce n'est la faute de personne s'il ne partage pas ses sentiments."),
    "Aimera": ("verbe aimer conjugué au futur, éprouver de l'amour.", "Elle sait au fond d'elle qu'il ne l'aimera jamais comme un amant."),
    "Pleuré": ("verser des larmes sous le coup d'une vive émotion.", "Elle a beaucoup pleuré après leur dernière discussion intime."),
    "Les disques": ("supports ronds servant à enregistrer de la musique.", "Ils passent des heures à écouter de vieux disques de rock ensemble."),
    "La boutique": ("magasin de vente au détail.", "Elle travaille dans une petite boutique de disques du centre-ville."),
    "La galaxie": ("immense ensemble d'étoiles et de matière céleste.", "Elle a l'impression de venir d'une tout autre galaxie que lui."),

    # Les uns contre les autres
    "Dort": ("verbe dormir au présent, être endormi.", "Elle dort paisiblement malgré l'agitation de la grande ville."),
    "La caresse": ("action de toucher doucement en signe d'affection.", "Une tendre caresse sur la joue suffit à la rassurer."),
    "Cajole": ("traiter avec une tendresse affectueuse, câliner.", "La mère cajole doucement son enfant pour calmer ses pleurs."),
    "Comprend": ("saisir l'esprit, comprendre la situation de quelqu'un.", "Il est l'unique personne qui comprend sa sensibilité profonde."),
    "Console": ("apporter du réconfort à quelqu'un qui a du chagrin.", "Sa présence bienveillante la console de toutes ses déceptions."),
    "Déteste": ("éprouver de l'aversion, haïr profondément.", "Elle déteste le sentiment de solitude qui l'envahit parfois le soir."),
    "Déchire": ("se déchirer, provoquer une douleur morale intense.", "Leur séparation lui déchire le cœur douloureusement."),
    "Détruit": ("anéantir, démolir complètement une relation ou un espoir.", "Ce malentendu a détruit leur complicité en quelques instants."),
    "Seul": ("qui n'est pas accompagné, isolé.", "On se sent souvent tout seul au milieu d'une foule immense."),

    # La Zarra & Amel Bent extras
    "La diva": ("chanteuse célèbre d'opéra ou de pop à la personnalité affirmée.", "La diva a captivé toute la salle dès son entrée."),
    "La gloire": ("renommée éclatante et durable acquise par de grands mérites.", "Elle a connu la gloire internationale très jeune."),
    "Le luxe": ("mode de vie caractérisé par de grandes dépenses et le raffinement.", "Cet hôtel offre un luxe et un confort incomparables."),
    "Le masque": ("faux visage pour se déguiser ou cacher ses sentiments.", "Il porte toujours un masque pour dissimuler sa tristesse."),
    "L'applaudissement": ("battement de mains en signe d'approbation ou d'admiration.", "Les applaudissements du public ont duré de longues minutes."),
    "La rupture": ("fait de rompre une relation amoureuse ou amicale.", "Leur rupture s'est faite dans le respect mutuel."),
    "Le voyage": ("déplacement dans des pays lointains pour le plaisir.", "Faire un voyage permet de s'ouvrir l'esprit."),
    "La valise": ("bagage de forme rectangulaire pour transporter ses affaires.", "Elle a bouclé sa valise la veille de son grand départ."),
    "L'horizon": ("ligne circulaire où la Terre et le ciel semblent se joindre.", "Le bateau a fini par disparaître à l'horizon."),
    "L'illusion": ("interprétation erronée de la réalité, fausse croyance.", "Il s'est rendu compte que ses espoirs n'étaient qu'une illusion."),
    "La trace": ("empreinte laissée par le passage de quelqu'un ou d'un événement.", "Ses pas ont laissé une trace profonde dans la neige fraîche."),
    "La philosophie": ("recherche de la sagesse et réflexion sur le sens de la vie.", "Chacun devrait se construire sa propre philosophie."),
    "Le poing": ("main fermée serrée énergiquement.", "Elle lève le poing pour exprimer sa détermination et sa lutte."),
    "La différence": ("caractère qui distingue une personne d'une autre.", "Leur différence est une richesse pour le groupe."),
    "La revanche": ("action de reprendre l'avantage après une défaite.", "Sa réussite est la plus belle des revanches sur son passé."),
    "Viser": ("diriger son regard ou ses efforts vers un but précis.", "Il faut toujours viser haut pour réaliser ses ambitions."),
    "Blesser": ("faire une blessure physique ou faire de la peine moralement.", "Ses paroles dures ont fini par la blesser profondément."),
    "Le sacrifice": ("renoncement volontaire à quelque chose d'important.", "Réussir ce projet a demandé beaucoup de sacrifices."),
    "La colère": ("violent mécontentement accompagné d'agressivité.", "Il a réussi à calmer sa colère avant de lui répondre."),
    "Le sourire": ("expression du visage marquant la joie ou la bienveillance.", "Son sourire chaleureux a mis tout le monde à l'aise."),
}

# Standardized Opposites specifically for these French words
VOCAB_OPPOSITES = {
    "Partager": "Garder pour soi",
    "La haine": "L'amour",
    "La paix": "La guerre",
    "Seul": "Accompagné",
    "Seule": "Accompagnée",
    "L'espoir": "Le désespoir",
    "La tristesse": "La joie",
    "Le matin": "Le soir",
    "Le soleil": "La lune",
    "Guérir": "Blesser",
    "Se promener": "Rester immobile",
    "La présence": "L'absence",
    "La force": "La faiblesse",
    "La jeunesse": "La vieillesse",
    "L'innocence": "La culpabilité",
}

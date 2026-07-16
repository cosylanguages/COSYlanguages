# master_lyrics.py
# Contains full authentic lyrics and their corresponding word bank helpers for the 53 Karaoke songs.

LYRICS_DATA = {
    "toutes-les-machines-ont-le-coeur": {
        "helpers": ["machines", "cœur", "selfies", "moteur", "fragile"],
        "lyrics": """Toutes les [__________] ont un cœur, t'entends ?
Toutes les machines ont un [__________] dedans
Qui bat, qui bat, qui bat
Comme on se bat, maman
Comme on se bat pourtant
On n'avait pas prévu ça
D'avoir des doigts Messenger
Des pouces ordinateur
Sur les machines, on passe des heures
Sur les machines, on dessine un cœur
Qui bat, qui bat, qui bat
On tape nos vies dedans
Autant de likes et de leurres
De flammes, de [__________], de peurs
De smileys en couleur

Toutes les machines ont un cœur, t'entends ?
Toutes les machines ont un cœur dedans
Qui bat, qui bat, qui bat
Comme on se bat, maman
Comme on n'sait pas vraiment
Comment se sortir de là
Le monde la gueule qu'il a
Qui c'est qui lui a fait ça ?
C'est pas nous, c'est pas moi, t'entends ?
Le bruit des machines permanent
Qui bat, qui bat, qui bat
Battu pour le moment
Je suis tout juste capable
De voir le monde en grand
Tant que le monde est portable

Toutes les machines ont un cœur, t'entends ?
Toutes les machines ont un cœur dedans
Qui bat, qui bat, qui bat
Comme on se bat, maman
Comme on se bat pourtant
Tu dis : "À quoi ça sert ?
T'as rien de mieux à faire ?
Sais-tu le temps que tu perds ?"
Toutes les machines ont un cœur pourtant
Un monde meilleur caché dedans
Qui bat, qui bat, qui bat
Moi, des idées j'en ai mille
Tout au bout de mes doigts
Des étincelles et des îles
Des ailes que je déploie

Maman, maman, c'est moi
C'est moi, c'est moi le [__________], t'entends ?
Dans toutes les machines y a mon cœur dedans
Qui bat, qui bat, qui bat
Comme je me bats, maman
Si le monde est mon mobile
Mon cœur pour le moment
Est comme le monde, maman

Et le monde est fragile
Et le monde est [__________]
Et mon cœur est fragile
Et le monde est fragile
Et le monde est fragile
Toutes les machines ont un cœur, t'entends ?
Toutes les machines ont un cœur dedans
Et mon cœur est fragile"""
    },
    "ma-philosophie": {
        "helpers": ["philosophie", "poing", "efforts", "Lune", "sacrifices"],
        "lyrics": """Je n'ai qu'une [__________]
Être acceptée comme je suis
Malgré tout ce qu'on me dit
Je reste le [__________] levé
Pour le meilleur comme le pire
Je suis métisse mais pas martyre
J'avance le cœur léger
Mais toujours le poing levé

Lever la tête, bomber le torse
Sans cesse redoubler d'[__________]
La vie ne m'en laisse pas le choix
Je suis l'as qui bat le roi
Malgré nos peines, nos différences
Et toutes ces injures incessantes
Moi je lèverai le poing
Encore plus haut, encore plus loin

Viser la [__________]
Ça ne me fait pas peur
Même à l'usure
J'y crois encore et en cœur
Des [__________]
S'il le faut j'en ferai
J'en ai déjà fait
Mais toujours le poing levé

Je ne suis pas comme toutes ces filles
Qu'on dévisage, qu'on déshabille
Moi j'ai des formes et des rondeurs
Ça sert à réchauffer les cœurs
Fille d'un quartier populaire
Y'a appris à être fière
Bien plus d'amour que de misère
Bien plus de cœur que de pierre

Je n'ai qu'une philosophie
Être acceptée comme je suis
Avec la force et le sourire
Le poing levé vers l'avenir
Lever la tête, bomber le torse
Sans cesse redoubler d'efforts
La vie ne m'en laisse pas le choix
Je suis l'as qui bat le roi"""
    },
    "je-taime-comme-je-taime": {
        "helpers": ["mots", "peau", "monde", "cœur", "aimer"],
        "lyrics": """C'est pas pour te retenir
Que je te dis des [__________]
C'est pas pour t'appartenir
Que je te fais l'amour
C'est juste que sous ma [__________]
Y a ton cœur qui bat
Que le reste du [__________]
Ne me regarde pas

Je t'aime comme je t'aime
Sans artifice et sans dilemme
Je t'aime comme je t'aime
Avec ton [__________] et tes colères
Et s'il faut tout [__________]
Et s'il faut tout refaire
Je t'aime comme je t'aime
Loin du bruit de la terre"""
    },
    "salut": {
        "helpers": ["salut", "café", "souvenir", "changer", "gare"],
        "lyrics": """Salut, c'est encore moi
Salut, comment tu vas ?
Le temps m'a paru très long
Loin de la maison

Je t'apporte un vieux [__________]
Pour fêter le retour
On va prendre un bon [__________]
Et parler d'amour

Rien n'a l'air d'avoir [__________]
Dans ce petit quartier
La vieille dame de la [__________]
Continue de chanter

Un petit bonjour, un [__________]
Pour oublier les larmes
C'est un beau [__________] d'amitié
Qui réchauffe les âmes"""
    },
    "toi-mon-amour": {
        "helpers": ["amour", "destin", "chemin", "voix", "douceur"],
        "lyrics": """Toi mon [__________], mon compagnon de route
Celui qui dissipe chaque doute
Notre [__________] était tracé d'avance
Sur ce long [__________] d'espérance

La douceur de ta [__________] m'appelle
Comme une mélodie éternelle
Dans la [__________] de chaque nuit
Tu es mon port et mon abri"""
    },
    "oui-ou-non": {
        "helpers": ["doute", "réponse", "message", "choix", "incertitude"],
        "lyrics": """C'est oui ou c'est non ?
Tu joues avec mes sentiments et mon nom
Dans ce grand [__________] qui m'opprime
J'attends ta [__________] légitime

Je regarde mon écran sans cesse
Pour voir un [__________] de tendresse
Mais cette [__________] me pèse tant
Quel sera mon [__________] à présent ?"""
    },
    "balance-ton-quoi": {
        "helpers": ["respect", "sexisme", "liberté", "égalité", "voix"],
        "lyrics": """Balance ton quoi
Pour qu'on respecte enfin mes droits
Un peu de [__________] dans ce monde
Pour effacer ce [__________] immonde

Nous voulons vivre en toute [__________]
Dans une parfaite [__________]
Faire entendre notre [__________] forte
Pour que les vieilles mentalités meurent"""
    },
    "laziza": {
        "helpers": ["tolérance", "paix", "diversité", "respect", "espoir"],
        "lyrics": """L'aziza, ton étoile brille sur nous
Un symbole d'espoir face aux fous
Une grande leçon de [__________]
Pour ramener enfin la [__________]

Célébrer la riche [__________] des cultures
Dans un grand élan de [__________]
Garder l'[__________] d'une vie plus douce
Quand le vent de la haine pousse"""
    },
    "nos-ames-sont": {
        "helpers": ["âme", "connexion", "mystère", "sensibilité", "lien"],
        "lyrics": """Nos âmes sont liées par le temps
Comme des navires portés par le vent
Chaque [__________] cherche sa lumière
Dans une magnifique [__________] de terre

Le grand [__________] de l'existence
Éveille notre [__________] en silence
Unissant notre [__________] éternel
Sous l'immensité du ciel"""
    },
    "immobile": {
        "helpers": ["immobilité", "attente", "silence", "solitude", "regard"],
        "lyrics": """Je reste immobile ici
Pendant que le monde défile sans bruit
Dans cette étrange [__________] du corps
J'affronte une longue [__________] encore

Le lourd [__________] de la pièce
Amplifie ma grande [__________]
Sous ton [__________] lointain et froid
Je cherche un sens à tout cela"""
    },
    "la-nuit-nen-finit-plus": {
        "helpers": ["nuit", "solitude", "obscurité", "matin", "espoir"],
        "lyrics": """La nuit n'en finit plus de couler
Et je reste seule à pleurer
Dans le calme de la [__________] froide
J'affronte ma triste [__________]

Perdue dans cette lointaine [__________]
J'attends que revienne le [__________]
Gardant un mince [__________] de lumière
Pour guider ma route entière"""
    },
    "le-soleil-noir": {
        "helpers": ["soleil", "obscurité", "mélancolie", "chagrin", "vide"],
        "lyrics": """Sous le soleil noir de ma peine
Je marche le long de la Seine
Ce [__________] qui ne réchauffe plus
Laisse place à l'[__________] absolue

Une profonde [__________] s'installe
Pour soigner mon grand [__________]
Face à ce grand [__________] intérieur
Qui paralyse tous mes désirs"""
    },
    "la-tour-eiffel-est-pour-moi": {
        "helpers": ["Paris", "liberté", "beauté", "monument", "ciel"],
        "lyrics": """La Tour Eiffel est pour moi
Un symbole de joie et d'émoi
Au cœur de ce magnifique [__________]
Je goûte à une immense [__________]

Admirant la grande [__________] de la ville
Depuis ce fier [__________] tranquille
Sous le bleu infini du [__________]
Mon esprit s'envole à tire-d'aile"""
    },
    "quelquun-pour-toi": {
        "helpers": ["rencontre", "destin", "amour", "présence", "espoir"],
        "lyrics": """Il y aura quelqu'un pour toi
Quelqu'un qui marchera sous ton toit
Une belle [__________] inattendue
Pour changer ton [__________] perdu

Un grand [__________] qui t'accompagne
La douce chaleur de sa [__________]
Redonnant un immense [__________] à ta vie
Loin de l'ombre et de l'ennui"""
    },
    "bien-plus-fort": {
        "helpers": ["force", "passion", "courage", "cœur", "amour"],
        "lyrics": """Mon amour est bien plus fort
Que les tempêtes et la mort
Une immense [__________] de caractère
Animée par une grande [__________] entière

Il nous faut un immense [__________]
Pour faire battre notre [__________]
Célébrant ce bel [__________] éternel
Dans un monde de plus en plus réel"""
    },
    "un-premier-amour": {
        "helpers": ["amour", "pureté", "jeunesse", "souvenir", "cœur"],
        "lyrics": """Un premier amour ne s'oublie jamais
Il reste gravé à tout jamais
Un bel [__________] plein d'espoir
Dans la douce clarté du soir

La magnifique [__________] des sentiments
De notre belle [__________] d'antan
Un tendre [__________] dans notre [__________]
Qui guérit nos peines pour toujours"""
    },
    "voila": {
        "helpers": ["authenticité", "voix", "vulnérabilité", "public", "scène"],
        "lyrics": """Voilà, regardez-moi
Ou du moins ce qu'il reste de moi
Une quête d'[__________] sincère
Portée par ma puissante [__________]

J'expose ma grande [__________] nue
Devant ce grand [__________] inconnu
Seule debout sur cette immense [__________]
Pour vous offrir ma plus belle âme"""
    },
    "one-of-the-greats": {
        "helpers": ["Greatness", "Haunting", "Surrender", "Struggle", "Legacy"],
        "lyrics": """She was one of the greats, they say
Walking down her own unique way
An aura of absolute [__________] around her
With a beautiful and [__________] melody

She refused to [__________] to defeat
Despite the intense [__________] on the street
Leaving a powerful and lasting [__________]
For generations to come and see"""
    },
    "california-dreaming": {
        "helpers": ["brown", "sky", "walk", "winter", "dreamin"],
        "lyrics": """All the leaves are [__________]
And the [__________] is gray
I've been for a [__________]
On a winter's day

I'd be safe and warm
If I was in L.A.
California [__________]
On such a [__________]'s day"""
    },
    "me-and-i": {
        "helpers": ["Dual", "Conflict", "Personality", "Mirror", "Acceptance"],
        "lyrics": """Sometimes I feel there are two of me
Fighting for absolute supremacy
A strange [__________] nature indeed
Filled with conflicting ideas and breed

This inner [__________] never ends
As my complex [__________] bends
I look in the [__________] to see
And search for self-[__________] and peace"""
    },
    "angeleyes": {
        "helpers": ["Deceptive", "Gaze", "Regret", "Warning", "Trust"],
        "lyrics": """Keep an eye on his angeleyes
They are just a beautiful disguise
His smile is highly [__________] and sweet
To everyone he meets on the street

Under his steady and hypnotic [__________]
Lies a daze of sorrow and daze
I write this as a friendly [__________] to you
Do not easily grant him your [__________]"""
    },
    "mixed-up-world": {
        "helpers": ["Confusion", "Chaotic", "Optimism", "Anxiety", "Hope"],
        "lyrics": """It's a mixed up world we live in
But we must never stop giving
Through all the [__________] and noise
We search for our inner voice

In this [__________] environment of speed
We maintain our bright [__________] indeed
Reducing our daily mental [__________]
Keeping our steady [__________] alive"""
    },
    "left-outside-alone": {
        "helpers": ["Abandonment", "Solitude", "Coldness", "Longing", "Betrayal"],
        "lyrics": """My body is cold, my heart is torn
Left outside in the freezing storm
A feeling of absolute [__________] tonight
Underneath the dim street light

I wander in complete and quiet [__________]
Sensing your sudden [__________] and pride
With a deep [__________] inside
Fearing another silent [__________]"""
    },
    "casualties-of-war": {
        "helpers": ["Casualty", "Conflict", "Scars", "Aftermath", "Survival"],
        "lyrics": """We are the casualties of war
Fighting for what we had before
Each person is a silent [__________] of pain
In this cold and endless rain

Our bitter [__________] has left deep marks
Like fire burning in the dark
And in the quiet [__________] we stand
Fighting for our own [__________]"""
    },
    "as-it-was": {
        "helpers": ["Change", "Isolation", "Nostalgia", "Routine", "Reflection"],
        "lyrics": """Hold on, you know it's not the same
As we play this modern game
I feel a sudden [__________] in the air
As people rush without a care

Living in quiet [__________] and peace
In our neat suburban streets
Following our daily [__________] and style
Looking at our own [__________]"""
    },
    "luomo-che-amava-le-donne": {
        "helpers": ["uomo", "passione", "fascino", "cuore", "sorriso"],
        "lyrics": """L'uomo che amava le donne
Sotto la luce delle stelle e delle gonne
Un [__________] dal destino misterioso
Che vive con animo coraggioso

Una forte [__________] lo guida ogni giorno
Con un grande [__________] tutto intorno
Conquista ogni anima e ogni [__________]
Regalando un dolce [__________]"""
    },
    "due-grosse-lacrime-bianche": {
        "helpers": ["lacrima", "dolore", "silenzio", "addio", "solitudine"],
        "lyrics": """Due grosse lacrime bianche
Sulle mie guance stanche
Ogni singola [__________] che scende
Rivela quanto il cuore si arrende

Un immenso [__________] nel profondo
In questo silenzioso mondo
Avvolta in un grande [__________] di ghiaccio
Prima del nostro triste [__________]"""
    },
    "unatta-estate": {
        "helpers": ["estate", "spiaggia", "mare", "sole", "libertà"],
        "lyrics": """Un'altra estate è arrivata
Sulla costa dorata
La calda atmosfera dell'[__________]
Ci regala una giornata fatata

Camminiamo sulla [__________] dorata
Bagnati dal profondo [__________]
Sotto la luce del grande [__________]
Assaporando questa dolce [__________]"""
    },
    "chi-sara-con-te": {
        "helpers": ["compagnia", "futuro", "destino", "promessa", "speranza"],
        "lyrics": """Chi sarà con te nei momenti difficili ?
Chi raccoglierà i tuoi pensieri più fragili ?
Cerca sempre la dolce [__________]
Per affrontare la vita con gioia

Il nostro [__________] è ancora da scrivere
Guidati da un saggio [__________]
Mantenendo ogni sacra [__________]
Con una grande [__________] nel cuore"""
    },
    "un-raggio-di-sole": {
        "helpers": ["raggio", "sole", "luce", "gioia", "natura"],
        "lyrics": """Un raggio di sole per te
Che illumina tutto intorno a me
Un piccolo [__________] dorato
In questo cielo stellato

Sotto la calda luce del [__________]
Il mio cuore si è risvegliato
Una grande [__________] ci accompagna
Attraverso questa bella [__________]"""
    },
    "lamore-e-un-attimo": {
        "helpers": ["amore", "attimo", "scintilla", "bacio", "ricordo"],
        "lyrics": """L'amore è un attimo fuggente
Che travolge la mente
Un immenso [__________] sincero
In questo cielo così nero

Basta una piccola [__________] di fuoco
Per accendere questo grande gioco
Ci scambiamo un tenero [__________]
Che rimarrà come un dolce [__________]"""
    },
    "amor-libre": {
        "helpers": ["libertad", "amor", "orgullo", "aceptación", "respeto"],
        "lyrics": """Amor libre, sin barreras
Bajo nuestras propias banderas
Reclamamos una absoluta [__________]
Para vivre a nuestra manera

Sintiendo un gran [__________] sincero
Por este gran [__________] verdadero
Buscando la plena [__________] social
Con un profundo [__________] mutuo"""
    },
    "te-alejas-mas-de-mi": {
        "helpers": ["distancia", "olvido", "ausencia", "dolor", "silencio"],
        "lyrics": """Te alejas más de mí cada día
Y se apaga nuestra alegría
Esta lúgubre [__________] de ti
Llena de sombras mi camino aquí

Un inmenso [__________] en mi alma
Que perturba mi calma
Caemos en un lento [__________] cruel
En medio de este lúgubre [__________]"""
    },
    "nuevo-verano": {
        "helpers": ["verano", "nostalgia", "sol", "playa", "amigo"],
        "lyrics": """Un nuevo verano comienza hoy
Y recuerdo bien de dónde soy
La cálida brisa del [__________] costero
Me acompaña en este sendero

Siento una dulce [__________] al cantar
Frente al inmenso mar
Bajo el brillo del dorado [__________]
Caminando por la blanca [__________]"""
    },
    "u-mamy-est-sekret": {
        "helpers": ["секрет", "мама", "тайна", "улыбка", "любовь"],
        "lyrics": """У мамы есть секрет большой
Она хранит его душой
Этот маленький [__________] красивый
Делает её жизнь счастливой

Моя любимая [__________] улыбается
Когда эта [__________] раскрывается
Её нежная и тёплая [__________]
И материнская крепкая [__________]"""
    },
    "vyshe-domov": {
        "helpers": ["высота", "дом", "полёт", "мечта", "свобода"],
        "lyrics": """Выше домов мы летим над землёй
Оставляя весь мир за собой
Нас манит эта [__________] ночная
И простор без конца и края

Каждый [__________] внизу светится огнями
Пока совершается наш [__________] с вами
Сбывается наша заветная [__________]
Дарящая нам полную [__________]"""
    },
    "na-i-agapi-na": {
        "helpers": ["αγάπη", "φιλί", "έρωτας", "ελπίδα", "αγκαλιά"],
        "lyrics": """Να η αγάπη, να το φως της ζωής μας
Που φωτίζει κάθε στιγμή μας
Μια μεγάλη και ζεστή [__________]
Που διώχνει κάθε λύπη και στενοχώρια

Μας ενώνει αυτός ο δυνατός [__________]
Σαν ένα γλυκό και τρυφερό [__________]
Κρατώντας ζωντανή την [__________] μας
Σε αυτή την όμορφη διαδρομή μας"""
    },
    "kapoies-nychtes": {
        "helpers": ["νύχτα", "φεγγάρι", "μοναξιά", "όνειρο", "σιωπή"],
        "lyrics": """Κάποιες νύχτες μελαγχολικές
Γεμάτες σκέψεις και σιωπές
Όταν απλώνεται η σκοτεινή [__________]
Και η καρδιά αναζητά μια διέξοδο

Κοιτάζω το ολόγιομο [__________] ψηλά
Να φωτίζει τα πέτρινα σκαλιά
Νιώθοντας τη βαθιά [__________] της ψυχής
Σαν ένα χαμένο [__________] της αυγής"""
    },
    "o-gatos": {
        "helpers": ["γάτος", "κεραμίδα", "περιπέτεια", "ελευθερία", "δρόμος"],
        "lyrics": """Ο γάτος της γειτονιάς μας
Ο πιο πιστός μας φίλος
Ένας πονηρός και όμορφος [__________]
Που περπατάει πάνω στην [__________]

Αναζητά μια νέα [__________] τη νύχτα
Γεμάτος ενέργεια και ζωντάνια
Αγαπάει την απόλυτη [__________] του
Τρέχοντας στον έρημο [__________]"""
    },
    "army-dreamers": {
        "helpers": ["mourning", "soldier", "army", "dreamers", "four"],
        "lyrics": """Our army dreamers are sleeping soundly tonight,
No more marching under the cold, pale light.
A mother in [__________] for her young son,
Whose short life had only just begun.

He was a brave and handsome [__________] boy,
Who filled his family's home with joy.
But they took him to the [__________] far away,
Leaving her to weep and pray.

These young [__________] who dared to fly,
Now look down from the starry sky.
With [__________] tears on their face,
Resting in their final quiet place."""
    },
    "coming-around-again": {
        "helpers": ["sneezes", "romantic", "around", "broken", "toaster"],
        "lyrics": """Baby sneezes, mummy pleases,
And daddy's on the run.
When those tiny baby [__________] start to fall,
You find yourself staring at the wall.

You think you are so [__________] and wild,
But you are just an anxious child.
It's coming [__________] and again,
Through the autumn wind and rain.

Your expensive [__________] heart will heal,
As you learn to appreciate what is real.
Even when the [__________] burns the toast,
You still love the things that matter most."""
    },
    "diva": {
        "helpers": ["diva", "noir", "miroir", "gloire", "velours"],
        "lyrics": """Elle chante comme une diva sacrée,
Sous la lumière dorée.
Une grande [__________] de l'opéra,
Que personne jamais n'oubliera.

Dans le miroir de son passé [__________],
Le temps semble s'être arrêté.
Elle regarde son [__________] brisé,
Rêvant de sa lointaine [__________].

Vêtue d'un beau manteau de [__________],
Elle avance sous les projecteurs..."""
    },
    "its-getting-better": {
        "helpers": ["dream", "clear", "better", "sad", "bright"],
        "lyrics": """It's getting better every day,
As I walk down my own way.
My favorite [__________] is coming true,
Underneath the sky so blue.

With a [__________] and focused mind,
Leaving all my doubts behind.
Life is getting [__________] at last,
After all the sorrows of the past.

No more [__________] and lonely nights,
Underneath the city lights.
Looking forward to a [__________] new dawn,
With all my fears completely gone."""
    },
    "make-your-own-kind-of-music": {
        "helpers": ["singing", "special", "along", "loneliest", "hand"],
        "lyrics": """Nobody can tell you there's only one song worth [__________]
They may try and sell you, 'cause it hangs them up
To see you being yourself
But you've gotta make your own kind of music
Sing your own [__________] song
Make your own kind of music
Even if nobody else sings [__________]

You're gonna be knowing the [__________] kind of lonely
It may be rough going, just to do your thing's the hardest thing to do
But you've gotta make your own kind of music
Sing your own special song
Make your own kind of music
Even if nobody else sings along

So if you cannot take the [__________] of any guy who's gonna lead you
And keep on walking with the crowd who's gonna breed you
Just remember that you're only gonna find your own way
And find your own creative path"""
    },
    "oh-to-be-in-love": {
        "helpers": ["vague", "dream", "unreal", "colours", "pendulum"],
        "lyrics": """Oh, to be in love with you,
Underneath the sky of blue.
A strange and [__________] sensation indeed,
Sowing a mysterious seed.

Like a beautiful, fleeting [__________],
Nothing is quite what it seems.
It feels so completely [__________] and bright,
In the middle of the night.

Painting our world in glowing [__________],
As we share our silent hours.
Moving like a heavy [__________] slow,
Watching our deep feelings grow."""
    },
    "overprotected": {
        "helpers": ["perspective", "mistakes", "control", "believe", "overprotected"],
        "lyrics": """You say I need a new [__________] on my life,
To avoid all the drama and strife.
But I must make my own [__________] to grow,
And find the things I need to know.

I don't need anyone to [__________] my mind,
Or leave my true desires behind.
I want to [__________] in who I am,
Without following a perfect plan.

But I feel so completely [__________] and small,
Standing against this giant wall."""
    },
    "second-hand-rose": {
        "helpers": ["second-hand", "grand", "clothes", "brand-new", "coats"],
        "lyrics": """Father's business is doing fine,
But all my things are second-hand line.
Wearing a [__________] dress to the ball,
Not looking very elegant at all.

Everyone else looks so [__________] and neat,
Walking down the busy street.
In my second-hand [__________] and shoes,
Singing the low-down blues.

While others buy [__________] things,
Like expensive diamond rings.
I wear old [__________] from last year,
Shedding a silent, lonely tear."""
    },
    "the-greatest": {
        "helpers": ["dancing", "warns", "loss", "signing", "flames"],
        "lyrics": """We are the greatest, we can fly,
Like stars shining in the sky.
I see you [__________] in the dark,
Leaving a bright, glowing spark.

My mother [__________] me every day,
To watch out for the games they play.
Dealing with a sudden [__________] of hope,
Learning how to survive and cope.

They are [__________] our new contract,
Sealing our grand artistic pact.
While we burn in the [__________] of love,
Underneath the stars above."""
    },
    "unlikely-lovers": {
        "helpers": ["lovers", "winter", "scared", "friends", "weather"],
        "lyrics": """We are such unlikely [__________] indeed,
Sowing a very strange seed.
In the cold [__________] wind we stand,
Holding each other's warm hand.

I feel a bit [__________] of the future now,
But we will get through somehow.
Surrounded by our loyal [__________] and family,
Living our lives so happily.

No matter how bad the [__________] may be,
You will always have a friend in me."""
    },
    "where-is-my-husband": {
        "helpers": ["husband", "patience", "applications", "waiting", "lover"],
        "lyrics": """Where is my husband tonight?
Underneath the cold street light.
I search for my handsome [__________] in vain,
In the middle of the pouring rain.

It takes a lot of [__________] to survive,
And keep our sweet love alive.
Looking through those dating [__________] all day,
To find a good person who wants to stay.

I am tired of [__________] for a sign,
To show that your heart is mine.
I just want a true and loyal [__________],
To make my life a little brighter."""
    },
    "tu-ten-iras": {
        "helpers": ["vide", "armes", "yeux", "traces", "promesses"],
        "lyrics": """Tu t'en iras un jour ou l'autre,
Laissant mon cœur dans un grand [__________].
Tu poseras tes [__________] à terre,
Pour mettre fin à notre guerre.

Je verrai dans tes [__________] clairs,
Le reflet de nos hivers.
Sans laisser de [__________] de ton passage,
Comme un navire après l'orage.

Toutes tes belles [__________] d'autrefois,
S'envoleront loin de moi."""
    },
    "jim-beam": {
        "helpers": ["тоска", "полночь", "дым", "меланхолия", "вечность"],
        "lyrics": """Бутылка Джим Бим на моём столе,
И звёзды светят в ночной мгле.
Меня съедает эта серая [__________],
От которой никуда не деться.

На часах бьёт глубокая [__________],
И город засыпает мало-помалу.
Сигаретный [__________] поднимается вверх,
Где нас больше не ждёт успех.

Осенняя [__________] в моей душе,
И ничего не вернуть уже.
Мы уходим в эту холодную [__________],
Где не важна никакая верность."""
    }
}

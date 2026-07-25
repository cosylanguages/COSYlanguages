import os
import re
import sys

OUTPUT_DIR = "events/sessions/karaoke-club"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Add current scripts directory to sys.path to load master_lyrics safely
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from master_lyrics import LYRICS_DATA

# Proposed overarching themes mapped by song slug and language
# --- SONG SPECIFIC ROUNDS THEMATIC DETAILS DATABASE ---
SONG_THEMATIC_DETAILS = {
    "a-diagnosis": {
        "r1_focus": "Rebecca's search for a mental health label, Dr. Akopian's advice, and the relief of diagnosis",
        "r2_focus": "mental health stigma, diagnostic labels in modern healthcare, and self-diagnosis on social media",
        "metaphors": ['tinfoil hat', 'label on a bottle', 'prescription', 'the tribe']
    },
    "after-everything-ive-done-for-you": {
        "r1_focus": "Paula's intense devotion, her boundary-crossing actions, and the breaking point of friendship",
        "r2_focus": "healthy boundaries in friendships, toxic codependency, and transactional expectations of gratitude",
        "metaphors": ['sidekick', 'henchman', 'monster doing dirty work', 'creativity in a womb']
    },
    "amor-libre": {
        "r1_focus": "Esteman's rejection of social conditioning, the freedom of a 'libre corazón', and authenticity",
        "r2_focus": "LGBTQ+ acceptance, non-traditional relationship models, and modern societal expectations of romance",
        "metaphors": ['mundo robotizado', 'lluvia de fuego', 'rebeldes', 'mentiras y de irrealidad']
    },
    "angeleyes": {
        "r1_focus": "the deceptive charm of the lover's 'angel eyes', ex-partners, and ex-relationships",
        "r2_focus": "idealizing toxic partners, trust and deception in modern dating, and gaslighting behaviors",
        "metaphors": ['angel eyes', 'game he likes to play', 'paradise', 'wearing a disguise']
    },
    "antidepressants-are-so-not-a-big-deal": {
        "r1_focus": "destigmatizing medication, the shared medical experiences of everyday professionals",
        "r2_focus": "mental health trends in modern society, the over-medicalization of stress, and public support groups",
        "metaphors": ['basic bitch of meds', 'club with open admission', 'natural selection', 'adjusting dosage']
    },
    "army-dreamers": {
        "r1_focus": "Kate Bush's tragic story of a young soldier, the mother's grief, and wasted youth",
        "r2_focus": "military recruitment of youth, public attitudes toward war, and alternative career paths in modern society",
        "metaphors": ['chicken with a fox', 'purple flowers', 'mourning in the aerodrome', 'buttons and bows']
    },
    "as-it-was": {
        "r1_focus": "Harry Styles' transition after a major life change, isolation, and looking at the past",
        "r2_focus": "speed of modern technological change, loneliness in hyper-connected cities, and family communication",
        "metaphors": ['gravity holding back', 'sitting on the floor', 'light-speed internet', 'leaving America']
    },
    "balance-ton-quoi": {
        "r1_focus": "Angèle's sharp critique of street harassment, sexism in the music industry, and speaking up",
        "r2_focus": "feminist movements like MeToo, public attitudes toward street safety, and fighting gender biases",
        "metaphors": ['animaux qui parlent mal', 'casser les codes', 'polie pour la télé', "plus qu'un animal"]
    },
    "bien-plus-fort": {
        "r1_focus": "the absolute, sweeping declarations of devotion, inner emotional strength, and passion",
        "r2_focus": "how modern society views intense romanticism vs. cynicism, and emotional resilience in difficult times",
        "metaphors": ['plus rouge que le sang', 'plus dur que la pierre', 'brûlant que le feu', 'manteau trois places']
    },
    "california-dreaming": {
        "r1_focus": "the melancholic longing of winter, dreaming of escaping to a warm, sunny California",
        "r2_focus": "escapism as a coping mechanism, geographical relocation to find happiness, and nostalgic weather states",
        "metaphors": ['leaves are brown', 'sky is gray', "winter's day", 'preacher liking the cold']
    },
    "casualties-of-war": {
        "r1_focus": "the emotional aftermath of a relational battle, carrying inner scars, and reconciliation",
        "r2_focus": "unresolved conflicts in family/relationships, the societal cost of anger, and emotional healing",
        "metaphors": ['broken dreams hitting the ground', 'casualties of war', 'keeping score', 'lost cause']
    },
    "chi-sara-con-te": {
        "r1_focus": "Ranieri's melancholic nostalgia about an ex-lover, passing old movie theaters, and looking back",
        "r2_focus": "modern dating apps vs. organic encounters, handling nostalgic longing, and passing relationships",
        "metaphors": ['lucide vetrine', 'strade sconosciute', 'cinema da pochi soldi', 'fuoco si riaccende']
    },
    "coming-around-again": {
        "r1_focus": "Carly Simon's domestic routine, finding hope in a broken heart, and cyclical healing",
        "r2_focus": "parenting and domestic stress in high-pressure societies, managing anxiety, and finding simple comfort",
        "metaphors": ['baby sneezes', 'mommy pleases', 'broken toaster', 'screaming a lullaby']
    },
    "diva": {
        "r1_focus": "La Zarra's confident declaration of self-worth, being a 'diva', and handling public criticism",
        "r2_focus": "how modern society judges confident women, double standards in workplace authority, and fame",
        "metaphors": ['coeur en carton', 'maquiller au volant', 'péter les plombs', 'pacha et dame à chat']
    },
    "dont-be-a-lawyer": {
        "r1_focus": "the humorous, satirical warning against pursuing a law career just for parental expectations",
        "r2_focus": "modern career pressure, prestigious but unhappy vocations, student debt, and pursuing true passion",
        "metaphors": ['soul destroyer', 'law school debt', 'daily regret', 'running up fees']
    },
    "due-grosse-lacrime-bianche": {
        "r1_focus": "Iva Zanicchi's heartbreak represented by 'two big white tears', silence, and letting go",
        "r2_focus": "how different cultures express grief and sadness, the pressure to always appear happy, and emotional closure",
        "metaphors": ['due grosse lacrime bianche', 'perle del mare', 'testa sotto il cuscino', 'porta aperta']
    },
    "eleven-oclock": {
        "r1_focus": "Rebecca's overthinking spiral at 11 o'clock, reflecting on her entire journey and mistakes",
        "r2_focus": "the pressure of decisive life moments, late-night overthinking, and accepting that life is not a neat story",
        "metaphors": ['abstract theatrical space', 'crock of a journey', 'narrative sense', 'poopy little slut']
    },
    "face-your-fears": {
        "r1_focus": "Paula's absurd and hilarious advice to face your fears by running with scissors or flying off a building",
        "r2_focus": "how society commodifies self-help and brave advice, extreme stunts, and finding genuine courage",
        "metaphors": ['run with scissors', 'fly out of a window', 'stare at the sun', 'get stung by bees']
    },
    "fit-hot-guys-have-problems-too": {
        "r1_focus": "the humorous protest of fit, hot guys dealing with insecurities and childhood traumas behind the perfect image",
        "r2_focus": "body image expectations for men in modern media, toxic positivity, and the male gaze",
        "metaphors": ['sexual mercy', 'slow-motion exit', 'twerking out our sad', 'ugly cry']
    },
    "group-hang": {
        "r1_focus": "the awkwardness of a group hang disrupting a romantic date, the cultural confusion of the restaurant",
        "r2_focus": "modern socializing fatigue, group dynamics, fake cultural representation, and paying the bill",
        "metaphors": ['nachos and burritos', 'smoky tortilla soup', 'jeffwad sprooshed', 'lonely acrobatics']
    },
    "i-hate-everything-but-you": {
        "r1_focus": "Greg's modern cynicism, his extensive list of petty pet peeves, and finding solace in a partner",
        "r2_focus": "cynicism and constant negativity in modern internet culture, superficial trends, and genuine connections",
        "metaphors": ['hashtag mood', 'mandolin player', 'superfood blueberries', 'magic hour']
    },
    "im-a-good-person": {
        "r1_focus": "Rebecca's aggressive demand for validation as a 'good person', comparing herself to Mother Teresa",
        "r2_focus": "virtue signaling on social media, the obsession with public validation, and performative charity",
        "metaphors": ['Mother Teresa Luther King', 'ass made of good', 'hashtag humble and blessed', 'gutting like a fish']
    },
    "im-afraid-of-americans": {
        "r1_focus": "David Bowie's anxiety regarding cultural assimilation, consumerism, and the fear of globalization",
        "r2_focus": "cultural imperialism, modern anxiety in a hyper-globalized world, and fast-food consumer lifestyles",
        "metaphors": ['sucking on a Coke', 'combing hair for cars', 'afraid of the world', 'God is an American']
    },
    "im-the-villain-in-my-own-story": {
        "r1_focus": "the moral realization of being the villain, jealousy towards Valencia, and the witch vs. princess trope",
        "r2_focus": "self-perception and narrative bias in modern life, handling jealousy, and taking moral responsibility",
        "metaphors": ['witch in my own tale', "Satan's CFO", 'Kraken up in Norway', 'Jafar vs. Jasmine']
    },
    "immobile": {
        "r1_focus": "Maëlle's emotional paralysis, standing completely still ('immobile') in front of a difficult ending",
        "r2_focus": "how modern speed prevents emotional processing, dealing with life's sudden pauses, and relational distance",
        "metaphors": ['immobile face à toi', 'partir en voyage', 'le vide qui me guette', 'prendre une autoroute']
    },
    "its-getting-better": {
        "r1_focus": "Cass Elliot's cheerful hope after hard times, finding natural contentment, and simple joy",
        "r2_focus": "cultivating optimism in modern high-stress societies, finding comfort in quiet relationships, and healing",
        "metaphors": ['rockets and bells', 'starry-eyed', 'sweet contentment', 'groovy and good']
    },
    "je-taime-comme-je-taime": {
        "r1_focus": "the deep, unconditional sibling/soulmate connection, sharing each other's emotional shields and wounds",
        "r2_focus": "non-romantic soulmate connections in modern life, female/male solidarity, and protective relationships",
        "metaphors": ["frère et sœur d'âme", 'pic ou lame au-dedans', 'miroir qui ne ment pas', 'sous ton armure']
    },
    "jim-beam": {
        "r1_focus": "Zemfira's raw portrayal of loneliness, the empty dance floor, and escape through Jim Beam",
        "r2_focus": "coping with youth melancholy in post-Soviet or modern urban cities, social isolation, and nostalgia",
        "metaphors": ['Грустная танцплощадка', 'допиваем до дна', 'небо рвёт нервы', 'высокие стаканы Jim Beam']
    },
    "kapoies-nychtes": {
        "r1_focus": "Arletta's poetic depiction of the moon watching over the poor, prisoners, and hungry children",
        "r2_focus": "social inequality in modern cities, solidarity with the underprivileged, and the comfort of art in dark times",
        "metaphors": ['φεγγάρι που γελά', 'πέτρινα κρεβάτια', 'δρόμος μυστικός', 'θλιμμένο παλληκάρι']
    },
    "la-nuit-nen-finit-plus": {
        "r1_focus": "Petula Clark's sleepless nights, the endless loop of insomnia, and the quiet shadow of loneliness",
        "r2_focus": "the modern epidemic of insomnia and sleep disorders, urban isolation, and longing for real connection",
        "metaphors": ["la nuit n'en finit plus", 'idée noire en tête', 'comme une âme en peine', 'lune bleue']
    },
    "la-tour-eiffel-est-pour-moi": {
        "r1_focus": "the dream of romantic Paris from a small 'chambre de bonne', the majestic presence of the Eiffel Tower",
        "r2_focus": "urban dreams vs. reality for young immigrants/artists, romanticizing cities, and finding pride in simple lives",
        "metaphors": ['chambre de bonne', 'étoiles filantes de Paris', 'manteau trois places', 'insomnies de paillettes']
    },
    "lamore-e-un-attimo": {
        "r1_focus": "the fleeting nature of love ('love is just a moment'), parting, and carrying a single tear on a train",
        "r2_focus": "how modern life's transience affects long-term relationships, handling abrupt endings, and nostalgia",
        "metaphors": ["l'amore è un attimo", 'vento forte più di noi', 'ferite che si chiudono', 'treno verso casa']
    },
    "laziza": {
        "r1_focus": "Balavoine's celebration of diversity, acceptance of different cultural roots, and fighting bias",
        "r2_focus": "multicultural integration in modern Europe, defending minority dignity, and overcoming racial prejudice",
        "metaphors": ['petite brune de casbah', 'étoile jaune de ta peau', 'fardeau sur la peau', 'fille enfant du prophète']
    },
    "le-soleil-noir": {
        "r1_focus": "Barbara's dark sun of depression after witnessing global tragedies, the contrast between paradise and despair",
        "r2_focus": "compassion fatigue in the 24-hour news cycle, modern depression, and global empathy",
        "metaphors": ['soleil noir', 'mers en furie', 'coeur égratigné', 'glas qui sonne']
    },
    "leffet-de-masse": {
        "r1_focus": "Maëlle's haunting story of peer pressure and school bullying, and the regret of joining the crowd",
        "r2_focus": "bullying and group exclusion in schools and digital spaces today, the psychology of crowds, and bystander effect",
        "metaphors": ['bruits de couloir', 'bureaux en glace', 'effet de masse', 'regard qui rigole']
    },
    "left-outside-alone": {
        "r1_focus": "Anastacia's raw cry of emotional exclusion, waiting for a fairy tale, and survival after rejection",
        "r2_focus": "emotional neglect in modern relationships, the fantasy of media-driven romance vs. reality, and isolation",
        "metaphors": ['left outside alone', 'fairy tale my way', 'living in a fantasy', 'broken and empty']
    },
    "lets-generalize-about-men": {
        "r1_focus": "the hilarious, over-the-top satire of making sweeping blanket statements about all men",
        "r2_focus": "how social media thrives on absolute generalizations, gender tribalism, and constructive social debates",
        "metaphors": ['blanket statements', 'emotionally stunted', 'conflating all guys', 'primal ritual']
    },
    "lifeboat": {
        "r1_focus": "the terrifying ocean metaphor of high school popularity, the constant threat of being thrown overboard",
        "r2_focus": "group conformity, peer pressure in adolescent circles, fashion gatekeeping, and competitive hierarchy",
        "metaphors": ['raging black ocean', 'tiniest lifeboat', 'wearing the wrong outfit', 'captain pointing fingers']
    },
    "love-kernels": {
        "r1_focus": "the metaphor of 'love kernels', being a fashion-cactus in an emotional drought, and settling for crumbs",
        "r2_focus": "breadcrumbing in modern digital dating, low self-esteem in relationships, and romantic obsession",
        "metaphors": ['love kernels', 'sexy fashion-cactus', 'hamster in a cage', 'budget-eating video']
    },
    "luomo-che-amava-le-donne": {
        "r1_focus": "Nina Zilli's jazz-infused depiction of a modern Don Juan who loves all women but never commits",
        "r2_focus": "commitment phobia in modern romance, serial dating culture, and emotional maturity",
        "metaphors": ['bello come un dio', 'amori stupidi', 'attesa di un addio', 'gioco di seduzione']
    },
    "ma-philosophie": {
        "r1_focus": "Amel Bent's proud, rebellious anthem of self-acceptance, keeping the fist raised, and rising above bias",
        "r2_focus": "overcoming class and racial biases in modern cities, body positivity, and building an inner philosophy",
        "metaphors": ['poing levé', 'viser la lune', 'as qui bat le roi', 'fille des quartiers populaires']
    },
    "make-your-own-kind-of-music": {
        "r1_focus": "Cass Elliot's beautiful call to individuality, singing your own special song, and facing loneliness",
        "r2_focus": "the pressure of conformist societies, finding creative independence, and the courage to stand alone",
        "metaphors": ['make your own kind of music', 'nobody else sings along', 'loneliest kind of lonely', 'hangs them up']
    },
    "me-and-i": {
        "r1_focus": "ABBA's analytical exploration of a split identity, internal conflicts, and doctor Freud's theories",
        "r2_focus": "accepting internal contradictions, mental wellness, and self-analysis in modern psychology",
        "metaphors": ['Jekyll and Hyde', 'sun and rainy weather', 'good old Dr. Freud', 'split identity']
    },
    "mixed-up-world": {
        "r1_focus": "Sophie Ellis-Bextor's navigation of a chaotic, contradictory world and her search for clear guidance",
        "r2_focus": "finding mental stability in a fast-paced chaotic world, coping with cynicism, and female empowerment",
        "metaphors": ['mixed up world', 'cynicism rules the day', 'voice in my head', 'tough girl']
    },
    "na-i-agapi-na": {
        "r1_focus": "the bittersweet dream of a lost love returning, the abrupt greeting of goodbye, and longing",
        "r2_focus": "how modern society processes lost connections, moving on from past relationships, and nostalgia",
        "metaphors": ['όνειρο αληθινό', 'τέλος είναι πικρό', 'αντίο αντίο']
    },
    "nos-ames-sont": {
        "r1_focus": "Maëlle's deep analysis of how our modern, cruel lives cage and suffocate our inner souls",
        "r2_focus": "losing touch with our inner values in hyper-materialistic societies, finding true humanity, and mindfulness",
        "metaphors": ['âmes enfants sages', 'tourner dans la cage', 'hommes cruels', 'filet de voix']
    },
    "nuevo-verano": {
        "r1_focus": "Amaia's melancholic transition at the end of summer, waiting for a message, and keeping memories",
        "r2_focus": "generational attitudes toward seasonal changes, digital connection vs. real presence, and youth friendships",
        "metaphors": ['uñas mordidas', 'estrellas en mi bebida', 'sigo temblando', 'mensaje tuyo']
    },
    "o-gatos": {
        "r1_focus": "Arletta's beautiful nostalgia of finding an old train ticket and letters, and the metaphor of the screaming cat",
        "r2_focus": "the disappearance of physical letters and diaries in the digital age, and finding adventure in simple lives",
        "metaphors": ['παλιά χαρτιά', 'εισιτήριο του ΟΣΕ', 'ξύλινα παγκάκια', 'ερωτευμένος γάτος']
    },
    "oh-my-god-i-think-i-like-you": {
        "r1_focus": "Rebecca's sudden vulnerability and panic when realizing sex has turned into real emotional affection",
        "r2_focus": "hookup culture vs. emotional intimacy in modern dating, handling sudden romantic panic, and vulnerability",
        "metaphors": ['oxytocin creeping in', 'spermicidal lubricant', 'rowboat surrounded by ducks', 'lady parts']
    },
    "oh-to-be-in-love": {
        "r1_focus": "Kate Bush's sensory overload of falling in love, the brighter colors, and the swing of the pendulum",
        "r2_focus": "the science and emotion of infatuation, biological changes during love, and modern romantic idealization",
        "metaphors": ['colours look brighter', 'swing of the pendulum', 'shift along the floor', 'terribly vague']
    },
    "one-of-the-greats": {
        "r1_focus": "the dark, poetic journey of an artist coming back from the dead to achieve legendary greatness",
        "r2_focus": "how modern society objectifies artists, the cost of commercializing personal trauma, and gender bias in records",
        "metaphors": ['crawled up from under the earth', 'stain upon my lips', 'flowering sadness', 'male tastes']
    },
    "oui-ou-non": {
        "r1_focus": "Angèle's frustration with mixed signals, modern internet validation, and dating uncertainties",
        "r2_focus": "the psychology of 'likes' and online dating signals, ghosting culture, and modern relationship standards",
        "metaphors": ['romantisme express', 'batterie faible', "pourquoi tes j'aime comptent plus", "c'est oui ou bien c'est non"]
    },
    "ouvrir-les-yeux": {
        "r1_focus": "Maëlle's path to opening her eyes, overcoming cold isolation, and holding onto memory",
        "r2_focus": "restoring confidence after a major personal crisis, modern mental health recovery, and peer support",
        "metaphors": ['coeur devenu froid', 'oublier sa présence', 'réchauffe mon désespoir', "piège d'un monde sans toi"]
    },
    "overprotected": {
        "r1_focus": "Britney's frustration with being shielded, the struggle to make mistakes and claim her own destiny",
        "r2_focus": "overparenting (helicopter parenting) in modern families, child stars, and the right to fail and grow",
        "metaphors": ['damn protected', 'helicopter bubble', 'stand corrected', 'my own destiny']
    },
    "quelquun-pour-toi": {
        "r1_focus": "Angelina's hopeful anthem about finding a special person hiding in the giant, indifferent crowd",
        "r2_focus": "overcoming social cynicism, the difficulty of making genuine friends in massive modern cities, and hope",
        "metaphors": ["c'est de la dynamite", 'caché là dans la foule', 'erreurs de parcours', 'formule magique']
    },
    "salut": {
        "r1_focus": "Joe Dassin's nostalgic return after years of traveling, reconnecting over a cup of coffee",
        "r2_focus": "handling nostalgic encounters with past friends, how people change over time, and simple social rituals",
        "metaphors": ["salut c'est encore moi", 'idées folles', "je ne suis qu'un souvenir", 'un bon café']
    },
    "second-hand-rose": {
        "r1_focus": "Barbra Streisand's humorous portrayal of a girl wearing second-hand clothes in a thrift-store lifestyle",
        "r2_focus": "modern thrift store fashion culture, consumer waste vs. circular economy, and handling social envy",
        "metaphors": ['second hand hats', 'ten cents on the dollar', 'Jake the plumber', 'second avenue']
    },
    "settle-for-me": {
        "r1_focus": "Greg's desperate and pathetic proposal for Rebecca to lower her standards and choose him as a backup plan",
        "r2_focus": "settling vs. high expectations in modern relationships, media-driven expectations of Prince Charmings, and pride",
        "metaphors": ['two-percent milk', 'broken condom Plan B', 'swallowed pride', 'Solange to Beyoncé']
    },
    "seventeen": {
        "r1_focus": "the longing of J.D. and Veronica to escape their violent reality and just be normal seventeen-year-olds",
        "r2_focus": "the romanticization of high school, modern teenage pressures and mental health, and the desire for simplicity",
        "metaphors": ["we're damaged", 'see bad movies', 'sneak a beer', 'buy some summer clothes']
    },
    "sex-with-a-stranger": {
        "r1_focus": "Rebecca's anxiety and funny safety checks when inviting a stranger back to her apartment",
        "r2_focus": "hookup culture safety, boundaries and consent in modern dating, and media-induced anxieties of crime",
        "metaphors": ['sexy stranger', 'harvest my kidney', 'dishes calling me', 'wash your balls']
    },
    "sexy-french-depression": {
        "r1_focus": "the hilarious parody of romanticizing deep depression as a sexy, artistic French film trope",
        "r2_focus": "the romanticization of mental illness in pop culture and internet aesthetics, and healthy coping strategies",
        "metaphors": ['sexy French depression', 'bed smells like a tampon', 'grout needs to be redone', 'chocolat!']
    },
    "sexy-getting-ready-song": {
        "r1_focus": "the painful, horrifying, and patriarchal physical procedures of a woman getting ready for a date",
        "r2_focus": "unrealistic beauty standards for women, gender imbalances in date preparation, and body image issues",
        "metaphors": ['hourglass silhouette', "primpin' and pluckin'", 'ass blood', 'nasty-ass patriarchal prepare']
    },
    "slow-motion": {
        "r1_focus": "the illusion of ultimate confidence by walking in slow-motion, and the transition back to normal boring reality",
        "r2_focus": "the gap between glamorous social media representations vs. mundane daily lives, and finding beauty in the routine",
        "metaphors": ['walking in slow motion', '48 frames per second', 'went from sexy to boring', 'flip your hair']
    },
    "so-maternal": {
        "r1_focus": "Rebecca's manic overachieving as a childless, flawless parent after babysitting for an hour",
        "r2_focus": "the rise of competitive parenting ('parenting influencers') on social media, extreme expectations, and parent burnout",
        "metaphors": ['Carol Brady level matriarch', "Gwyneth's well-respected journal", 'tireless multi-taskical', 'Tommy, lunch!']
    },
    "te-alejas-mas-de-mi": {
        "r1_focus": "Esteman and Daniela Spalla's tragic disconnect as one partner reaches out and the other pulls away",
        "r2_focus": "emotional distancing in relationships, modern couples therapy, and open emotional communication",
        "metaphors": ['paredes que no puedo destrozar', 'amor fallido', 'coincidencia sin sentido', 'uñas mordidas']
    },
    "the-greatest": {
        "r1_focus": "Lana Del Rey's elegiac lament for a changing culture, nostalgic memories of Long Beach, and feeling burned out",
        "r2_focus": "cultural exhaustion and burnout in modern digital society, nostalgia for past eras, and handling global crises",
        "metaphors": ['the greatest loss of them all', 'L.A. is in flames', 'signing off after all', 'Kanye West is blond']
    },
    "to-idio-to-theo": {
        "r1_focus": "the intense, obsessive declaration of loving someone so much you prefer hell with them over God",
        "r2_focus": "unhealthy romantic codependency in modern stories, boundaries of romantic devotion, and passion vs. reason",
        "metaphors": ['Τον ίδιο το Θεό', 'στην κόλαση μαζί σου', 'σκοτώνει γλυκά', 'βρέχει ο ουρανός ρουμπίνια']
    },
    "toi-mon-amour": {
        "r1_focus": "the pure, joyful, and Destiny-driven declarations of soulmate connection and mutual devotion",
        "r2_focus": "the cultural view of 'soulmates' in modern society, romance in a cynical world, and simple declarations of love",
        "metaphors": ['voler en éclat', 'avec ma pomme et ta cueille', 'pas tout rose tous les jours', 'fait pour toi']
    },
    "toutes-les-machines-ont-le-coeur": {
        "r1_focus": "Maëlle's poetic conflict between high-speed technology and the fragile, organic human heart",
        "r2_focus": "our dependency on digital devices, social media metrics (likes/followers) vs. genuine offline empathy, and screen-time boundaries",
        "metaphors": ['doigts Messenger', 'pouces ordinateur', 'le monde est mon mobile', 'le monde est portable']
    },
    "tu-ten-iras": {
        "r1_focus": "La Zarra's defensive acceptance of an inevitable breakup, predicting the partner's sudden departure",
        "r2_focus": "commitment phobia, modern defensive mechanisms in relationships, and dealing with pre-emptive endings",
        "metaphors": ["tu t'en iras de mes bras", "perdu la foi en l'amour", 'broder du noir', 'rien qui change sauf le décor']
    },
    "u-mamy-est-sekret": {
        "r1_focus": "Monetochka's child-narrator describing a mother's mysterious, political, and brave activist lifestyle",
        "r2_focus": "civic activism and protesting in modern oppressive regimes, children observing political realities, and maternal courage",
        "metaphors": ['с неприличным плакатом у Кремля', 'нельзя в Чечню', 'залить перцовкой веки', 'рюкзак в пузо дракона']
    },
    "un-premier-amour": {
        "r1_focus": "Isabelle Aubret's beautiful, nostalgic search for the magic and innocence of first love",
        "r2_focus": "how modern society views first love, the psychological impact of childhood romance on adult expectations",
        "metaphors": ['un premier amour', 'gestes innocents', "enfants d'alors", 'court après toute sa vie']
    },
    "un-raggio-di-sole": {
        "r1_focus": "Jovanotti's playful, energetic devotion to a highly capricious, mercurial ('lunatica') partner",
        "r2_focus": "handling different moods and emotional waves in a partner, theoretical love vs. practical, everyday care",
        "metaphors": ['un raggio di sole', 'sei lunatica', 'scarpa col tacco', "zaino già pronto all'ingresso"]
    },
    "unatta-estate": {
        "r1_focus": "Diodato's triumphant celebration of summer freedom after a dark, long, and freezing winter lockup",
        "r2_focus": "the psychological importance of seasonal changes, the post-lockdown return to public places (beaches, oceans)",
        "metaphors": ["un'altra estate", "buio l'inverno", "nuoteremo fino all'orizzonte", "gola fino all'orizzonte"]
    },
    "unlikely-lovers": {
        "r1_focus": "the beautiful, touching solidarity of four unlikely lovers facing a health crisis together in a hospital room",
        "r2_focus": "LGBTQ+ solidarity and friend family care during historical crises (like the AIDS epidemic), and communal love",
        "metaphors": ['four unlikely lovers', 'scared together', 'friends that hover', 'buy the farm']
    },
    "voila": {
        "r1_focus": "Barbara Pravi's absolute, raw presentation of her authentic self, her dreams, and her vulnerability to her audience",
        "r2_focus": "vulnerability and authenticity in modern performance art, the pressure on creators to expose their souls for validation",
        "metaphors": ['mise à nue', 'dans le bruit et la fureur', 'yeux noirs et rêve fou', 'aimer mes contours']
    },
    "vyshe-domov": {
        "r1_focus": "Sirotkin's poetic call to rise above the grey city streets ('higher than houses'), embracing childhood freedom",
        "r2_focus": "finding creative freedom in dull, standardized urban landscapes, the escape of youth, and collective hope",
        "metaphors": ['Выше домов', 'дышать огнём', 'бьётся белым птенцом', 'тихо стою с краю']
    },
    "whatll-it-be": {
        "r1_focus": "Greg's profound town melancholy, feeling stuck pouring beers while his dreams stay out of reach",
        "r2_focus": "the 'small town mentality' vs. metropolitan ambition, high school reunions, and finding the courage to break free",
        "metaphors": ['hey West Covina', 'slice limes with a knife', 'turkey day game', 'dreams stay just out of reach']
    },
    "where-is-my-husband": {
        "r1_focus": "Rebecca's frantic, desperate search for her future husband, unzipping her dress alone at 2 a.m.",
        "r2_focus": "the social pressure to marry by a certain age, fear of dying alone, and the wedding industry",
        "metaphors": ['lonely acrobatics', 'where the hell is my husband', 'testing my patience', 'grandma said he is coming']
    },
    "wheres-the-bathroom": {
        "r1_focus": "Naomi's high-speed barrage of criticisms regarding Rebecca's lifestyle, career choices, and apartment",
        "r2_focus": "parent-child boundaries in modern families, generation gaps regarding career success, and dealing with guilt trips",
        "metaphors": ['hovel you call home', 'vase vendetta', 'Harvard and Yale dough', 'boycott cheddar cheese']
    },
    "whos-the-new-guy": {
        "r1_focus": "the office staff's intense suspicion, anxiety, and ratings-obsessed reaction to the arrival of a new coworker",
        "r2_focus": "office dynamics, threat of change in professional spaces, ratings/metrics-driven anxiety in modern workplaces",
        "metaphors": ['ticking time bomb', 'desperate move for ratings', "who's the new guy", 'finger painting']
    },
    "without-love-you-can-save-the-world": {
        "r1_focus": "Rebecca's satirical calculation of how much global impact she could achieve if she stopped obsessing over guys",
        "r2_focus": "romantic obsession vs. civic/social contributions, emotional distractions in youth, and conserving energy",
        "metaphors": ['10,000 hours of obsession', 'cure leukaemia and clean the seas', "love's a real time suck", 'leash off your hog']
    },
    "women-gotta-stick-together": {
        "r1_focus": "Valencia's hypocritical sisterhood song where she insults every other woman while preaching solidarity",
        "r2_focus": "genuine vs. performative female solidarity (sisterhood), social rivalries, and media-driven competition among women",
        "metaphors": ['females helping females', 'sisterhood', 'bitch I cannot stand', 'Denise Martinez']
    },
    "you-stupid-bitch": {
        "r1_focus": "Rebecca's raw self-hatred and public self-sabotage song after being caught in her lies",
        "r2_focus": "self-sabotage mechanisms in modern psychology, handling public embarrassment, and self-compassion",
        "metaphors": ['you stupid bitch', 'karma come to tap on shoulder', 'shards of my soul', 'poopy little slut']
    },
}


SONG_THEMES = {
    "leffet-de-masse": {
        "en": "Peer Pressure & Isolation",
        "fr": "Effet de masse & Isolement"
    },
    "ouvrir-les-yeux": {
        "en": "Loneliness & Hope",
        "fr": "Solitude & Espoir"
    },
    "seventeen": {
        "en": "Youth & Hope for Normalcy",
        "fr": "Jeunesse & Espoir de normalité"
    },
    "lifeboat": {
        "en": "Social Pressure & Survival",
        "fr": "Pression sociale & Survie"
    },
    "toutes-les-machines-ont-le-coeur": {
        "en": "Technology & Humanity",
        "fr": "Technologie & Humanité"
    },
    "ma-philosophie": {
        "en": "Building Your Own Philosophy of Life",
        "fr": "Construire sa propre philosophie de vie"
    },
    "je-taime-comme-je-taime": {
        "en": "Unconditional Love",
        "fr": "Amour inconditionnel"
    },
    "salut": {
        "en": "Reconnecting with the Past",
        "fr": "Retrouver le passé"
    },
    "toi-mon-amour": {
        "en": "Soulmates & Destiny",
        "fr": "Âmes sœurs & Destin"
    },
    "oui-ou-non": {
        "en": "Mixed Signals in Modern Dating",
        "fr": "Signaux contradictoires dans le couple"
    },
    "balance-ton-quoi": {
        "en": "Equality & Respect",
        "fr": "Égalité & Respect"
    },
    "laziza": {
        "en": "Diversity & Acceptance",
        "fr": "Diversité & Acceptation"
    },
    "nos-ames-sont": {
        "en": "Human Connection Beyond Words",
        "fr": "Connexion humaine au-delà des mots"
    },
    "immobile": {
        "en": "When Life Stands Still",
        "fr": "Quand la vie s'arrête"
    },
    "la-nuit-nen-finit-plus": {
        "en": "Sleepless Nights & Longing",
        "fr": "Nuits blanches & Désir"
    },
    "le-soleil-noir": {
        "en": "Living Through Loss",
        "fr": "Vivre après la perte"
    },
    "la-tour-eiffel-est-pour-moi": {
        "en": "Dreaming of Paris",
        "fr": "Rêver de Paris"
    },
    "quelquun-pour-toi": {
        "en": "Finding the Right Person",
        "fr": "Trouver la bonne personne"
    },
    "bien-plus-fort": {
        "en": "Inner Strength",
        "fr": "Force intérieure"
    },
    "un-premier-amour": {
        "en": "The Magic of First Love",
        "fr": "La magie du premier amour"
    },
    "voila": {
        "en": "Authenticity & Self-Expression",
        "fr": "Authenticité & Expression de soi"
    },
    "one-of-the-greats": {
        "en": "Greatness & Legacy",
        "fr": "Grandeur & Héritage"
    },
    "california-dreaming": {
        "en": "Dreams & Escapism",
        "fr": "Rêves & Échappatoire"
    },
    "me-and-i": {
        "en": "Identity & Self-Discovery",
        "fr": "Identité & Découverte de soi"
    },
    "angeleyes": {
        "en": "Appearances Can Be Deceiving",
        "fr": "Les apparences sont trompeuses"
    },
    "mixed-up-world": {
        "en": "Finding Your Way in a Chaotic World",
        "fr": "Trouver sa voie dans un monde chaotique"
    },
    "left-outside-alone": {
        "en": "Rejection & Emotional Survival",
        "fr": "Rejet & Survie émotionnelle"
    },
    "casualties-of-war": {
        "en": "The Battles We Carry Inside",
        "fr": "Les combats que nous portons en nous"
    },
    "as-it-was": {
        "en": "Life After Change",
        "fr": "La vie après le changement"
    },
    "luomo-che-amava-le-donne": {
        "en": "Love, Flirting & Attraction",
        "it": "Amore, corteggiamento & attrazione"
    },
    "due-grosse-lacrime-bianche": {
        "en": "Heartbreak & Letting Go",
        "it": "Cuore spezzato & lasciarsi andare"
    },
    "unatta-estate": {
        "en": "Summer Freedom",
        "it": "Libertà estiva"
    },
    "chi-sara-con-te": {
        "en": "Lifelong Companionship",
        "it": "Compagnia per la vita"
    },
    "un-raggio-di-sole": {
        "en": "Joy & Nature",
        "it": "Gioia & Natura"
    },
    "lamore-e-un-attimo": {
        "en": "The Fleeting Nature of Love",
        "it": "La natura fugace dell'amore"
    },
    "amor-libre": {
        "en": "Love Without Labels",
        "es": "Amor sin etiquetas"
    },
    "te-alejas-mas-de-mi": {
        "en": "Growing Apart",
        "es": "Distanciamiento"
    },
    "nuevo-verano": {
        "en": "The Summers That Shape Us",
        "es": "Los veranos que nos marcan"
    },
    "u-mamy-est-sekret": {
        "en": "Childhood & Family Secrets",
        "ru": "Детство & семейные секреты"
    },
    "vyshe-domov": {
        "en": "Dreaming Beyond Limits",
        "ru": "Мечтать за пределами возможного"
    },
    "na-i-agapi-na": {
        "en": "Simple Joys of Love",
        "el": "Απλές χαρές της αγάπης"
    },
    "kapoies-nychtes": {
        "en": "Night Thoughts & Solitude",
        "el": "Νυχτερινές σκέψεις & μοναξιά"
    },
    "o-gatos": {
        "en": "Freedom Through Everyday Adventures",
        "el": "Ελευθερία μέσα από καθημερινές περιπέτειες"
    },
    "army-dreamers": {
        "en": "The Human Cost of War",
        "fr": "Le coût humain de la guerre"
    },
    "coming-around-again": {
        "en": "Healing",
        "fr": "Guérison"
    },
    "diva": {
        "en": "Confidence & Self-Worth",
        "fr": "Confiance & Estime de soi"
    },
    "its-getting-better": {
        "en": "Hope After Hard Times",
        "fr": "L'espoir après des temps difficiles"
    },
    "make-your-own-kind-of-music": {
        "en": "Being Unapologetically Yourself",
        "fr": "Être soi-même sans s'excuser"
    },
    "oh-to-be-in-love": {
        "en": "The Joy of Falling in Love",
        "fr": "La joie de tomber amoureux"
    },
    "overprotected": {
        "en": "Independence & Personal Freedom",
        "fr": "Indépendance & Liberté personnelle"
    },
    "second-hand-rose": {
        "en": "Thrift",
        "fr": "Faire de son mieux avec ce qu'on a"
    },
    "the-greatest": {
        "en": "Nostalgia & Cultural Change",
        "fr": "Nostalgie & Changement culturel"
    },
    "unlikely-lovers": {
        "en": "Love in Difficult Times",
        "fr": "L'amour dans les moments difficiles"
    },
    "where-is-my-husband": {
        "en": "Escaping Loneliness",
        "fr": "Échapper à la solitude"
    },
    "tu-ten-iras": {
        "en": "Accepting Endings",
        "fr": "Accepter les fins"
    },
    "jim-beam": {
        "en": "Escaping Reality",
        "ru": "Побeг от реальности"
    },
    "love-kernels": {
        "en": "Satire & Infatuation",
        "fr": "Satire & Infatuation"
    },
    "lets-generalize-about-men": {
        "en": "Generalizations & Satire",
        "fr": "Généralisations & Satire"
    },
    "so-maternal": {
        "en": "Parenting & Overachieving",
        "fr": "Maternité & Surperformance"
    },
    "face-your-fears": {
        "en": "Fear & Absurd Advice",
        "fr": "Peur & Conseils absurdes"
    },
    "to-idio-to-theo": {
        "en": "When Love Becomes Obsession",
        "el": "Όταν η αγάπη γίνεται εμμονή"
    },
    "im-afraid-of-americans": {
        "en": "Cultural Assimilation & Anxiety",
        "fr": "Assimilation culturelle & Anxiété"
    },
    "sexy-getting-ready-song": {
        "en": "Social Expectations of Beauty",
        "fr": "Attentes sociales de la beauté"
    },
    "sex-with-a-stranger": {
        "en": "Intimacy & Safe Dating",
        "fr": "Intimité & Rencontres sécurisées"
    },
    "settle-for-me": {
        "en": "High Standards & Compromise",
        "fr": "Normes élevées & Compromis"
    },
    "im-a-good-person": {
        "en": "The Need for Social Approval",
        "fr": "Le besoin d'approbation sociale"
    },
    "whatll-it-be": {
        "en": "Escaping the Small Town Mentality",
        "fr": "Échapper à la mentalité de province"
    },
    "sexy-french-depression": {
        "en": "Emotional Melancholy & Escapism",
        "fr": "Mélancolie émotionnelle & Échappatoire"
    },
    "wheres-the-bathroom": {
        "en": "Parental Expectations & Boundaries",
        "fr": "Attentes parentales & Limites"
    },
    "women-gotta-stick-together": {
        "en": "Female Solidarity vs Rivalry",
        "fr": "Solidarité féminine vs Rivalité"
    },
    "you-stupid-bitch": {
        "en": "Self-Sabotage & Regret",
        "fr": "Auto-sabotage & Regret"
    },
    "group-hang": {
        "en": "The Awkwardness of Modern Socializing",
        "fr": "La maladresse de la socialisation moderne"
    },
    "im-the-villain-in-my-own-story": {
        "en": "Self-Perception & Moral Responsibility",
        "fr": "Perception de soi & Responsabilité morale"
    },
    "oh-my-god-i-think-i-like-you": {
        "en": "Vulnerability in New Relationships",
        "fr": "Vulnérabilité dans les nouvelles relations"
    },
    "after-everything-ive-done-for-you": {
        "en": "Unconditional Love & Hidden Agendas",
        "fr": "Amour inconditionnel & Intentions cachées"
    },
    "whos-the-new-guy": {
        "en": "Dealing with Sudden Change at Work",
        "fr": "Faire face au changement soudain au travail"
    },
    "a-diagnosis": {
        "en": "The Relief of Mental Health Labels",
        "fr": "Le soulagement des étiquettes de santé mentale"
    },
    "fit-hot-guys-have-problems-too": {
        "en": "Insecurity Behind the Perfect Image",
        "fr": "L'insécurité derrière l'image parfaite"
    },
    "without-love-you-can-save-the-world": {
        "en": "Romantic Isolation vs Global Impact",
        "fr": "Isolation romantique vs Impact mondial"
    },
    "dont-be-a-lawyer": {
        "en": "Career Advice & Pursuing Passion",
        "fr": "Conseils de carrière & Poursuite de la passion"
    },
    "i-hate-everything-but-you": {
        "en": "Coping with Modern Cynicism",
        "fr": "Faire face au cynisme moderne"
    },
    "antidepressants-are-so-not-a-big-deal": {
        "en": "Stigma & Mental Well-being",
        "fr": "Stigmatisation & Bien-être mental"
    },
    "slow-motion": {
        "en": "The Illusion of Confidence",
        "fr": "L'illusion de la confiance"
    },
    "eleven-oclock": {
        "en": "Overthinking & Decisive Moments",
        "fr": "Surréflexion & Moments décisifs"
    }
}

# Challenge map defining which individual songs constitute each challenge
CHALLENGE_MAP = {
    "maelle-challenge": ("toutes-les-machines-ont-le-coeur", "je-taime-comme-je-taime"),
    "abba-challenge": ("me-and-i", "angeleyes"),
    "arletta-challenge": ("kapoies-nychtes", "o-gatos"),
    "esteman-challenge": ("amor-libre", "te-alejas-mas-de-mi"),
    "angele-challenge": ("oui-ou-non", "balance-ton-quoi"),
    "massimo-ranieri-challenge": ("chi-sara-con-te", "lamore-e-un-attimo"),
    "angelina-wismes-challenge": ("le-soleil-noir", "la-tour-eiffel-est-pour-moi"),
    "cass-elliot-challenge": ("make-your-own-kind-of-music", "its-getting-better"),
    "la-zarra-challenge": ("diva", "tu-ten-iras"),
    "kate-bush-challenge": ("army-dreamers", "oh-to-be-in-love"),
    "crazy-ex-girlfriend-challenge": (
        "love-kernels", "lets-generalize-about-men", "so-maternal", "face-your-fears",
        "sexy-getting-ready-song", "sex-with-a-stranger", "settle-for-me", "im-a-good-person",
        "whatll-it-be", "sexy-french-depression", "wheres-the-bathroom", "women-gotta-stick-together",
        "you-stupid-bitch", "group-hang", "im-the-villain-in-my-own-story", "oh-my-god-i-think-i-like-you",
        "after-everything-ive-done-for-you", "whos-the-new-guy", "a-diagnosis", "fit-hot-guys-have-problems-too",
        "without-love-you-can-save-the-world", "dont-be-a-lawyer", "i-hate-everything-but-you",
        "antidepressants-are-so-not-a-big-deal", "slow-motion", "eleven-oclock"
    ),
}

SONG_LINKS = {
    "leffet-de-masse": "https://www.youtube.com/watch?v=6zUxsrJqg14",
    "ouvrir-les-yeux": "https://www.youtube.com/watch?v=mk8GXdUGGjo",
    "seventeen": "https://www.youtube.com/watch?v=jg3z-Dw6Bpo",
    "lifeboat": "https://www.youtube.com/watch?v=mMjHPilNnpY",
    "unlikely-lovers": "https://www.youtube.com/watch?v=5OGNf3OuGhk",
    "where-is-my-husband": "https://www.youtube.com/watch?v=rK5TyISxZ_M",
    "love-kernels": "https://www.youtube.com/watch?v=bkAjUBtn_TM",
    "lets-generalize-about-men": "https://www.youtube.com/watch?v=Oa_QtMf6alU",
    "so-maternal": "https://www.youtube.com/watch?v=_kZHtfH4cYc",
    "face-your-fears": "https://www.youtube.com/watch?v=brzZQBSVMX0",
    "the-greatest": "https://www.youtube.com/watch?v=Ndo8r_Hg_lg",
    "army-dreamers": "https://www.youtube.com/watch?v=QOZDKlpybZE",
    "oh-to-be-in-love": "https://www.youtube.com/watch?v=AdKbloadwEA",
    "jim-beam": "https://www.youtube.com/watch?v=HiMEsJ5jZnk",
    "to-idio-to-theo": "https://www.youtube.com/watch?v=Xl42ihdAXVs",
    "coming-around-again": "https://www.youtube.com/watch?v=c0A7jAVDPJU",
    "second-hand-rose": "https://www.youtube.com/watch?v=E5yoZiT97Vw",
    "tu-ten-iras": "https://www.youtube.com/watch?v=GfVpI8Sf-RQ",
    "diva": "https://www.youtube.com/watch?v=m5AuYZriiU0",
    "ma-philosophie": "https://www.youtube.com/watch?v=D38EUIll1pM",
    "overprotected": "https://www.youtube.com/watch?v=PZYSiWHW8V0",
    "make-your-own-kind-of-music": "https://www.youtube.com/watch?v=PEQxEJ5_5zA",
    "its-getting-better": "https://www.youtube.com/watch?v=5i8Lir_ysis",
    "na-i-agapi-na": "https://www.youtube.com/watch?v=gKUQsn6ohRo",
    "california-dreaming": "https://www.youtube.com/watch?v=KOok1WzZbOY",
    "as-it-was": "https://www.youtube.com/watch?v=H5v3kku4y6Q",
    "vyshe-domov": "https://www.youtube.com/watch?v=8mlxM56hrjI",
    "voila": "https://www.youtube.com/watch?v=VJuD7AnV-uw",
    "un-premier-amour": "https://www.youtube.com/watch?v=k--jlvMf7QM",
    "casualties-of-war": "https://www.youtube.com/watch?v=JfgNCxxwcXE",
    "bien-plus-fort": "https://www.youtube.com/watch?v=vVG5OLn6s-Q",
    "quelquun-pour-toi": "https://www.youtube.com/watch?v=eSVC1_swGzo",
    "la-tour-eiffel-est-pour-moi": "https://www.youtube.com/watch?v=jAkgkrlMc8c",
    "le-soleil-noir": "https://www.youtube.com/watch?v=6sDC0ytyJ18",
    "la-nuit-nen-finit-plus": "https://www.youtube.com/watch?v=ymwY8Wnl_hk",
    "immobile": "https://www.youtube.com/watch?v=ADEc3L31tj8",
    "nos-ames-sont": "https://www.youtube.com/watch?v=JkAOWAvWtKI",
    "laziza": "https://www.youtube.com/watch?v=O4ACXQxCgc8",
    "left-outside-alone": "https://www.youtube.com/watch?v=eV9cQqLg5n4",
    "nuevo-verano": "https://www.youtube.com/watch?v=UQ9QvM2zt6Y",
    "balance-ton-quoi": "https://www.youtube.com/watch?v=Hi7Rx3En7-k",
    "oui-ou-non": "https://www.youtube.com/watch?v=XqAiGeEzctQ",
    "te-alejas-mas-de-mi": "https://www.youtube.com/watch?v=sVdxA0rFN5c",
    "amor-libre": "https://www.youtube.com/watch?v=1Hc9ekRxs0g",
    "o-gatos": "https://www.youtube.com/watch?v=TvgeXAVhVdA",
    "kapoies-nychtes": "https://www.youtube.com/watch?v=ZoBLe933nsM",
    "lamore-e-un-attimo": "https://www.youtube.com/watch?v=Z-pMF6xaRtY",
    "chi-sara-con-te": "https://www.youtube.com/watch?v=rq8lpdP2JYg",
    "u-mamy-est-sekret": "https://www.youtube.com/watch?v=krt2AXyXHHE",
    "mixed-up-world": "https://www.youtube.com/watch?v=jSTSgmZDspU",
    "unatta-estate": "https://www.youtube.com/watch?v=D6TvAskGBx4",
    "due-grosse-lacrime-bianche": "https://www.youtube.com/watch?v=uL1QLj1aRM8",
    "luomo-che-amava-le-donne": "https://www.youtube.com/watch?v=HR4bB_Dw4Qs",
    "toi-mon-amour": "https://www.youtube.com/watch?v=2m_hEmcHqOI",
    "salut": "https://www.youtube.com/watch?v=CSh3MCOiiCs",
    "angeleyes": "https://www.youtube.com/watch?v=GHddJnNo_BQ",
    "me-and-i": "https://www.youtube.com/watch?v=CaoBiFYu-FI",
    "je-taime-comme-je-taime": "https://www.youtube.com/watch?v=zu9HiCSVyAg",
    "toutes-les-machines-ont-le-coeur": "https://www.youtube.com/watch?v=UVz3xR1X9RU",
    "one-of-the-greats": "https://www.youtube.com/results?search_query=one+of+the+greats+Florence+&+The+Machine",
    "un-raggio-di-sole": "https://www.youtube.com/results?search_query=un+raggio+di+sole+Jovanotti",
    "im-afraid-of-americans": "https://www.youtube.com/watch?v=u7APmRkatEU",
    "sexy-getting-ready-song": "https://www.youtube.com/watch?v=ky-BYK-f154",
    "sex-with-a-stranger": "https://www.youtube.com/watch?v=iH3FPrI_Cuw",
    "settle-for-me": "https://www.youtube.com/watch?v=wmbLB4OIuao",
    "im-a-good-person": "https://www.youtube.com/watch?v=O4hh1YhDfbA",
    "whatll-it-be": "https://www.youtube.com/watch?v=HayIkHCXTBM",
    "sexy-french-depression": "https://www.youtube.com/watch?v=H1DCoGCVUxY",
    "wheres-the-bathroom": "https://www.youtube.com/watch?v=VJg1zRgkbno",
    "women-gotta-stick-together": "https://www.youtube.com/watch?v=P6B-r3QQw9M",
    "you-stupid-bitch": "https://www.youtube.com/watch?v=zgUKQCVieWM",
    "group-hang": "https://www.youtube.com/watch?v=w7FC_EK44Rw",
    "im-the-villain-in-my-own-story": "https://www.youtube.com/watch?v=UhzN7SfnNeY",
    "oh-my-god-i-think-i-like-you": "https://www.youtube.com/watch?v=eeb0pFdwTBg",
    "after-everything-ive-done-for-you": "https://www.youtube.com/watch?v=xtKtmXzeyqs",
    "whos-the-new-guy": "https://www.youtube.com/watch?v=s638IMetB9I",
    "a-diagnosis": "https://www.youtube.com/watch?v=uic_3vlI5BE",
    "fit-hot-guys-have-problems-too": "https://www.youtube.com/watch?v=Dep0Fq6XnWQ",
    "without-love-you-can-save-the-world": "https://www.youtube.com/watch?v=bc8R7fgXDN8",
    "dont-be-a-lawyer": "https://www.youtube.com/watch?v=Xs-UEqJ85KE",
    "i-hate-everything-but-you": "https://www.youtube.com/watch?v=6g8ajNob9z8",
    "antidepressants-are-so-not-a-big-deal": "https://www.youtube.com/watch?v=OG6HZMMDEYA",
    "slow-motion": "https://www.youtube.com/watch?v=tAC-J65S8dY",
    "eleven-oclock": "https://www.youtube.com/watch?v=fH_8w7WAIyk"
}

# Translation / Localization resources for all 6 supported languages

# Enhanced Localizations dictionary covering all 6 supported languages
LOCALIZATIONS_NEW = {
    "en": {
        "breadcrumbs_home": "Home",
        "breadcrumbs_events": "Events",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Back to Club",
        "dur_label": "Duration",
        "dur_val": "90–120 minutes",
        "lang_label": "Variety/Language",
        "level_label": "Level",
        "focus_label": "Thematic Focus",
        "theme_label": "Theme",
        "discuss_label": "We'll discuss",
        "warmup_title": "🎵 Stage 1: Warm-up",
        "vocab_title": "📚 Stage 2: Vocabulary",
        "listening_title": "🎧 Stage 3: Listening",
        "discussion_title": "💬 Stage 4: Discussion",
        "lang_focus_title": "✨ Stage 5: Language Focus",
        "final_challenge_title": "🎭 Stage 6: Final Challenge",
        "opp_label": "Opposite:",
        "teacher_note_title": "✏️ Teacher's Note (Linguistic Corrections)",
        "word_bank_title": "Word Bank / Helpers:"
    },
    "fr": {
        "breadcrumbs_home": "Accueil",
        "breadcrumbs_events": "Événements",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Retour au club",
        "dur_label": "Durée",
        "dur_val": "90–120 minutes",
        "lang_label": "Langue",
        "level_label": "Niveau",
        "focus_label": "Thème",
        "theme_label": "Thème",
        "discuss_label": "Nous allons discuter de",
        "warmup_title": "🎵 Étape 1 : Échauffement",
        "vocab_title": "📚 Étape 2 : Vocabulaire",
        "listening_title": "🎧 Étape 3 : Écoute",
        "discussion_title": "💬 Étape 4 : Discussion",
        "lang_focus_title": "✨ Étape 5 : Point de langue",
        "final_challenge_title": "🎭 Étape 6 : Défi final",
        "opp_label": "Contraire :",
        "teacher_note_title": "✏️ Notes du Professeur (Corrections Linguistiques)",
        "word_bank_title": "Banque de mots / Aide :"
    },
    "ru": {
        "breadcrumbs_home": "Главная",
        "breadcrumbs_events": "События",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Вернуться в клуб",
        "dur_label": "Длительность",
        "dur_val": "90–120 минут",
        "lang_label": "Язык",
        "level_label": "Уровень",
        "focus_label": "Тема",
        "theme_label": "Тема",
        "discuss_label": "Мы обсудим",
        "warmup_title": "🎵 Этап 1: Разминка",
        "vocab_title": "📚 Этап 2: Словарь",
        "listening_title": "🎧 Этап 3: Аудирование",
        "discussion_title": "💬 Этап 4: Обсуждение",
        "lang_focus_title": "✨ Этап 5: Языковой фокус",
        "final_challenge_title": "🎭 Этап 6: Финальный вызов",
        "opp_label": "Антоним :",
        "teacher_note_title": "✏️ Заметки преподавателя (исправление ошибок)",
        "word_bank_title": "Вспомогательный банк слов:"
    },
    "it": {
        "breadcrumbs_home": "Home",
        "breadcrumbs_events": "Eventi",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Torna al club",
        "dur_label": "Durata",
        "dur_val": "90–120 minuti",
        "lang_label": "Lingua",
        "level_label": "Livello",
        "focus_label": "Tema",
        "theme_label": "Tema",
        "discuss_label": "Discuteremo di",
        "warmup_title": "🎵 Fase 1: Riscaldamento",
        "vocab_title": "📚 Fase 2: Vocabolario",
        "listening_title": "🎧 Fase 3: Ascolto",
        "discussion_title": "💬 Fase 4: Discussione",
        "lang_focus_title": "✨ Fase 5: Focus linguistico",
        "final_challenge_title": "🎭 Fase 6: Sfida finale",
        "opp_label": "Contrario :",
        "teacher_note_title": "✏️ Note dell'Insegnante (Correzioni Linguistiche)",
        "word_bank_title": "Banca delle parole:"
    },
    "es": {
        "breadcrumbs_home": "Inicio",
        "breadcrumbs_events": "Eventos",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Volver al club",
        "dur_label": "Duración",
        "dur_val": "90–120 minutos",
        "lang_label": "Idioma",
        "level_label": "Nivel",
        "focus_label": "Tema",
        "theme_label": "Tema",
        "discuss_label": "Discutiremos sobre",
        "warmup_title": "🎵 Etapa 1: Calentamiento",
        "vocab_title": "📚 Etapa 2: Vocabulario",
        "listening_title": "🎧 Etapa 3: Escucha",
        "discussion_title": "💬 Etapa 4: Discusión",
        "lang_focus_title": "✨ Etapa 5: Enfoque de idioma",
        "final_challenge_title": "🎭 Etapa 6: Desafío final",
        "opp_label": "Opuesto :",
        "teacher_note_title": "✏️ Nota del Profesor (Correcciones Lingüísticas)",
        "word_bank_title": "Banco de palabras:"
    },
    "el": {
        "breadcrumbs_home": "Αρχική",
        "breadcrumbs_events": "Εκδηλώσεις",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Πίσω στο Club",
        "dur_label": "Διάρκεια",
        "dur_val": "90–120 λεπτά",
        "lang_label": "Γλώσσα",
        "level_label": "Επίπεδο",
        "focus_label": "Θέμα",
        "theme_label": "Θέμα",
        "discuss_label": "Θα συζητήσουμε",
        "warmup_title": "🎵 Στάδιο 1: Προθέρμανση",
        "vocab_title": "📚 Στάδιο 2: Λεξιλόγιο",
        "listening_title": "🎧 Στάδιο 3: Ακρόαση",
        "discussion_title": "💬 Στάδιο 4: Συζήτηση",
        "lang_focus_title": "✨ Στάδιο 5: Γλωσσική εστίαση",
        "final_challenge_title": "🎭 Στάδιο 6: Τελική πρόκληση",
        "opp_label": "Αντίθετο :",
        "teacher_note_title": "✏️ Σημειώσεις Καθηγητή (Γλωσσικές Διορθώσεις)",
        "word_bank_title": "Βοηθητικό Λεξιλόγιο / Λέξεις-Κλειδιά:"
    }
}

# Standardized opposites database
OPPOSITES_MAP = {
    "La classe": "Le dehors",
    "L'histoire": "L'oubli",
    "La masse": "L'individu",
    "Isoler": "Intégrer",
    "L'idiot": "Le sage",
    "Le bureau": "Le terrain",
    "Le regard": "L'indifférence",
    "Meilleur": "Pire",
    "La rue": "La maison",
    "Le couloir": "La chambre",
    "Désespoir": "L'espoir",
    "La mémoire": "L'oubli",
    "Prisonnière": "Libre",
    "damaged": "intact",
    "normal": "abnormal",
    "special": "ordinary",
    "different": "identical",
    "movies": "live theater",
    "dancing": "standing still",
    "tonight": "today",
    "choose": "reject",
    "right": "wrong",
    "ocean": "desert",
    "lifeboat": "ship",
    "sink": "float",
    "captain": "crew",
    "weakest": "strongest",
    "fighting": "surrendering",
    "storm": "calm",
    "wrong_opposite": "right",
    "outfit": "uniform",
    "crowded": "empty",
    # French
    "Le cœur": "La raison",
    "La machine": "L'être humain",
    "L'âme": "Le corps",
    "La blessing": "La guérison",
    "L'espoir": "Le désespoir",
    "Le regret": "La satisfaction",
    "Le rêve": "La réalité",
    "Guérir": "Blesser",
    "Le secret": "L'évidence",
    "L'amour": "La haine",
    "La tendresse": "La dureté",
    "Le silence": "Le bruit",
    "Le doute": "La certitude",
    "La fidélité": "L'infidélité",
    "Partager": "Garder pour soi",
    "La patience": "L'impatience",
    "Le baiser": "La gifle",
    "Le lien": "La séparation",
    "Le retour": "Le départ",
    "La nostalgie": "L'indifférence",
    "Retrouver": "Perdre",
    "Changer": "Conserver",
    "Le souvenir": "L'oubli",
    "L'ami": "L'ennemi",
    "La douceur": "La rudesse",
    "Le destin": "Le hasard",
    "La complicité": "L'hostilité",
    "La voix": "Le silence",
    "S'unir": "Se séparer",
    "Briller": "S'éteindre",
    "La clarté": "L'obscurité",
    "L'incertitude": "La certitude",
    "Le respect": "Le mépris",
    "Le sexisme": "L'égalité",
    "La liberté": "L'esclavage",
    "L'égalité": "L'inégalité",
    "La tolérance": "L'intolérance",
    "La paix": "La guerre",
    "La diversité": "L'uniformité",
    "La dignité": "L'indignité",
    "L'harmonie": "Le chaos",
    "La douleur": "Le plaisir",
    "S'élever": "S'abaisser",
    "La vérité": "Le mensonge",
    "L'invisible": "Le visible",
    "L'immobilité": "Le mouvement",
    "La solitude": "La compagnie",
    "Figer": "Animer",
    "La nuit": "Le jour",
    "L'obscurité": "La lumière",
    "La tristesse": "La joie",
    "Le matin": "Le soir",
    "L'insomnie": "Le sommeil",
    "Le soleil": "La lune",
    "La mélancolie": "L'allégresse",
    "La perte": "Le gain",
    "Le chagrin": "La joie",
    "Brûler": "Éteindre",
    "L'ombre": "La lumière",
    "Le vide": "Le plein",
    "La beauté": "La laideur",
    "La fierté": "La honte",
    "Se promener": "Rester immobile",
    "La joie": "La tristesse",
    "La rencontre": "La séparation",
    "Soutenir": "Abandonner",
    "La présence": "L'absence",
    "La force": "La faiblesse",
    "La passion": "L'indifférence",
    "L'intensite": "La modération",
    "Le triomphe": "L'échec",
    "Surmonter": "Échouer",
    "La pureté": "L'impureté",
    "La jeunesse": "La vieillesse",
    "L'innocence": "La culpabilité",
    "Rêver": "Faire face à la réalité",
    "L'authenticité": "La fausseté",
    "La vulnérabilité": "L'invulnérabilité",
    "Le public": "L'intimité",
    "Se donner": "Se retenir",
    "L'artiste": "Le spectateur",

    # English
    "Kernels": "Bulk",
    "Generalize": "Specialize",
    "Maternal": "Paternal",
    "Delusional": "Realistic",
    "Overzealous": "Indifferent",
    "Insecurity": "Security",
    "Satire": "Solemnity",
    "Condescending": "Humble",
    "Compulsive": "Deliberate",
    "Greatness": "Mediocrity",
    "Haunting": "Pleasant",
    "Surrender": "Resist",
    "Struggle": "Ease",
    "Release": "Hold",
    "Echo": "Silence",
    "Wilderness": "Civilization",
    "Triumph": "Defeat",
    "Legacy": "Oblivion",
    "Grace": "Clumsiness",
    "Dreaming": "Waking",
    "Winter": "Summer",
    "Warm": "Cold",
    "Safe": "Dangerous",
    "Sky": "Earth",
    "Brown": "Green",
    "Leave": "Arrive",
    "Pray": "Curse",
    "Sensation": "Numbness",
    "Dual": "Single",
    "Conflict": "Harmony",
    "Reflect": "Absorb",
    "Personality": "Anonymity",
    "Mirror": "Original",
    "Opposite": "Same",
    "Dialogue": "Monologue",
    "In harmony": "In conflict",
    "Acceptance": "Rejection",
    "Deceptive": "Honest",
    "Gaze": "Glance",
    "Disguise": "Reveal",
    "Regret": "Satisfaction",
    "Warning": "Encouragement",
    "Lure": "Repel",
    "Painful": "Painless",
    "Obsession": "Indifference",
    "Illusion": "Reality",
    "Trust": "Distrust",
    "Confusion": "Clarity",
    "Chaotic": "Orderly",
    "Optimism": "Pessimism",
    "Recovery": "Relapse",
    "Anxiety": "Calmness",
    "Survive": "Perish",
    "Connection": "Separation",
    "Sanity": "Insanity",
    "Hope": "Despair",
    "Abandonment": "Adoption",
    "Solitude": "Company",
    "Deception": "Honesty",
    "Desperation": "Confidence",
    "Coldness": "Warmth",
    "Exclusion": "Inclusion",
    "Longing": "Apathy",
    "Betrayal": "Loyalty",
    "Casualty": "Survivor",
    "Scars": "Smooth skin",
    "Aftermath": "Preparation",
    "Anger": "Calmness",
    "Survival": "Death",
    "Devastation": "Construction",
    "Reconciliation": "Estrangement",
    "Change": "Stability",
    "Isolation": "Integration",
    "Nostalgia": "Futurism",
    "Suburban": "Urban",
    "Gravity": "Levity",
    "Disconnect": "Connect",
    "Melancholy": "Cheerfulness",
    "Expectation": "Surprise",
    "Routine": "Novelty",
    "Reflection": "Absorption",

    # New opposites for added songs
    "America": "Foreign land",
    "Grocery": "Restaurant",
    "Stage": "Audience",
    "Cage": "Wilderness",
    "Plan": "Improvisation",
    "Ready": "Unprepared",
    "Crime": "Virtue",
    "Shaving": "Growing hair",
    "Beautiful": "Ugly",
    "Stranger": "Friend",
    "Dangerous": "Safe",
    "Game": "Reality",
    "Hotel": "Home",
    "Alone": "Accompanied",
    "Settle": "Rebel",
    "Nice": "Mean",
    "Stable": "Unstable",
    "True": "False",
    "Search": "Discovery",
    "Person": "Object",
    "Donate": "Hoard",
    "Poor": "Wealthy",
    "Friendly": "Hostile",
    "Nicest": "Meanest",
    "Covina": "Metropolis",
    "Lonely": "Sociable",
    "Lies": "Truth",
    "Leave": "Arrive",
    "Find": "Lose",
    "Depression": "Elation",
    "Melancholy": "Cheerfulness",
    "Wine": "Water",
    "Stone": "Cloud",
    "Crying": "Laughing",
    "Bathroom": "Living room",
    "Dirty": "Clean",
    "Apartment": "Mansion",
    "Pictures": "Blank canvas",
    "Wash": "Soil",
    "Together": "Apart",
    "Support": "Oppose",
    "Journey": "Stagnation",
    "Rivalry": "Collaboration",
    "Unity": "Division",
    "Ruined": "Restored",
    "Ring": "Chain",
    "Mess": "Order",
    "Strife": "Harmony",
    "Dying": "Living",
    "Hang": "Isolate",
    "Pressure": "Relaxation",
    "Dates": "Singlehood",
    "Conversations": "Silences",
    "Restaurant": "Kitchen",
    "Villain": "Hero",
    "Glory": "Shame",
    "Witch": "Fairy",
    "Castle": "Shack",
    "Abusing": "Protecting",
    "Feeling": "Numbness",
    "Supposed": "Forbidden",
    "Number": "Infinity",
    "Beating": "Stillness",
    "Hide": "Reveal",
    "Done": "Incomplete",
    "Direction": "Confusion",
    "Affection": "Apathy",
    "Face": "Avoid",
    "Place": "No-man's land",
    "Office": "Home",
    "Mysterious": "Obvious",
    "Tribe": "Individual",
    "Investigate": "Ignore",
    "Trouble": "Peace",
    "Diagnosis": "Mystery",
    "Neurosis": "Sanity",
    "Label": "Uncategorized",
    "Free": "Restricted",
    "Problems": "Solutions",
    "Perfect": "Flawed",
    "Screen": "Paper",
    "Insecurities": "Confidence",
    "Tears": "Smiles",
    "Love": "Hate",
    "Focus": "Distraction",
    "Drama": "Tranquility",
    "Explore": "Settle",
    "Door": "Wall",
    "Lawyer": "Client",
    "Greedy": "Generous",
    "Stress": "Calm",
    "Ceiling": "Floor",
    "Guidance": "Misdirection",
    "Crowded": "Empty",
    "Politician": "Citizen",
    "Smiling": "Frowning",
    "Everything": "Nothing",
    "Deal": "Reluctance",
    "Heal": "Injure",
    "Day": "Night",
    "Shame": "Pride",
    "Better": "Worse",
    "Motion": "Stillness",
    "Cool": "Unfashionable",
    "Hair": "Baldness",
    "Care": "Neglect",
    "Heroes": "Villains",
    "Awake": "Asleep",
    "Mistake": "Success",
    "Decision": "Hesitation",
    "Fight": "Surrender",
    "Answers": "Questions",

    # Russian
    "Высота (она)": "Низменность (она)",
    "Дом (он)": "Чужбина (она)",
    "Полёт (он)": "Падение (оно)",
    "Мечта (она)": "Реальность (она)",
    "Свобода (она)": "Зависимость (она)",
    "Юность (она)": "Старость (она)",
    "Ветер (он)": "Штиль (он)",
    "Город (он)": "Деревня (она)",
    "Небо (оνο)": "Земля (она)",
    "Взгляд (он)": "Слепота (она)",
    "Секрет (он)": "Очевидность (она)",
    "Мама (она)": "Папа (он)",
    "Тайна (она)": "Правда (она)",
    "Улыбка (она)": "Гримаса (она)",
    "Забота (она)": "Пренебрежение (оно)",
    "Любовь (она)": "Ненависть (она)",
    "Доверие (оно)": "Подозрение (оно)",
    "Шёпот (он)": "Крик (он)",
    "Правда (она)": "Ложь (она)",
    "Детство (оно)": "Зрелость (она)",

    # Italian
    "L'uomo": "La donna",
    "La passione": "L'indifferenza",
    "Il fascino": "La repulsione",
    "La seduzione": "Il aiuto",
    "Il cuore": "La mente",
    "Amare": "Odiare",
    "Il segreto": "La notizia pubblica",
    "La bellezza": "La bruttezza",
    "Il gioco": "Il lavoro",
    "Il sorriso": "Il pianto",
    "La lacrima": "Il sorriso",
    "Il pianto": "Il riso",
    "Il dolore": "Il piacere",
    "Il rimpianto": "La soddisfazione",
    "Il silenzio": "Il rumore",
    "Soffrire": "Gioire",
    "L'addio": "Il benvenuto",
    "La speranza": "La disperazione",
    "La fine": "L'inizio",
    "La solitudine": "La compagnia",
    "L'estate": "L'inverno",
    "La spiaggia": "La città",
    "Il mare": "La terraferma",
    "Il sole": "La lune",
    "Il viaggio": "La sosta",
    "Il vento": "La calma",
    "La libertà": "La schiavitù",
    "Ricominciare": "Finire",
    "Il calore": "Il freddo",
    "L'orizzonte": "La vicinanza",
    "La compagnia": "L'isolamento",
    "Il futuro": "Il passato",
    "Il destino": "Il caso",
    "La promessa": "Il tradimento",
    "Proteggere": "Attaccare",
    "Il cammino": "La fermata",
    "La fedeltà": "L'infideltà",
    "L'attesa": "L'arrivo",
    "L'unione": "La divisione",
    "L'amore": "L'odio",
    "La scintilla": "L'estinzione",
    "Il bacio": "Lo schiaffo",
    "Il battito": "L'arresto",
    "Il soffio": "La tempesta",
    "Svanire": "Apparire",
    "Il ricordo": "L'oblio",
    "L'infinito": "Il limite",
    "Il raggio": "L'ombra",
    "La luce": "L'oscurità",
    "La gioia": "La tristezza",
    "Riscaldare": "Raffreddare",
    "La java": "La noia",
    "La felicità": "L'infelicità",
    "La natura": "La tecnologia",
    "Il mattino": "La sera",

    # Spanish
    "La libertad": "La opresión",
    "El amor": "El odio",
    "El orgullo": "La humildad",
    "La aceptación": "El rechazo",
    "Sin prejuicios": "Con prejuicios",
    "Caminar": "Parar",
    "La valentía": "La cobardía",
    "El corazón": "La mente",
    "El respeto": "El desprecio",
    "La diversidad": "La homogeneidad",
    "La distancia": "La cercanía",
    "El olvido": "El recuerdo",
    "La ausencia": "La presencia",
    "El dolor": "El alivio",
    "Alejarse": "Acercarse",
    "El recuerdo": "El olvido",
    "La tristeza": "La alegría",
    "El silencio": "El ruido",
    "El frío": "El calor",
    "La despedida": "La bienvenida",
    "El verano": "El invierno",
    "La juventud": "La vejez",
    "La nostalgia": "La indiferencia",
    "El cambio": "La permanencia",
    "El sol": "La luna",
    "La playa": "La montaña",
    "El amigo": "El enemigo",
    "Sonreír": "Llorar",
    "El futuro": "El pasado",

    # Greek
    "Η αγάπη": "Το μίσος",
    "Το φιλί": "Το χαστούκι",
    "Ο έρωτας": "Η απάθεια",
    "Το δάκρυ": "Το γέλιο",
    "Ο χωρισμός": "Η ένωση",
    "Η ελπίδα": "Η απελπισία",
    "Το λιμάνι": "Η ανοιχτή θάλασσα",
    "Η αγκαλιά": "Η απώθηση",
    "Η υπόσχεση": "Η προδοσία",
    "Η ξενιτιά": "Η πατρίδα",
    "Η νύχτα": "Η μέρα",
    "Το φεγγάρι": "Ο ήλιος",
    "Η μοναξιά": "Η συντροφιά",
    "Το όνειρο": "Η πραγματικότητα",
    "Η μελαγχολία": "Η ευθυμία",
    "Το τραγούδι": "Η σιωπή",
    "Το σκοτάδι": "Το φως",
    "Η θύμηση": "Η λήθη",
    "Η σιωπή": "Ο θόρυβος",
    "Η παρέα": "Η απομόνωση",
    "Ο γάτος": "Ο σκύλος",
    "Η κεραμίδα": "Το πάτωμα",
    "Η περιπέτεια": "Η ρουτίνα",
    "Η ελευθερία": "Η σκλαβιά",
    "Ο δρόμος": "Το αδιέξοδο",
    "Το νιαούρισμα": "Το γάβγισμα",
    "Το κυνήγι": "Η φυγή",
    "Η αυλή": "Το δωμάτιο"
}

# Standardized Language Focus points
LANGUAGE_FOCUS_DB = {
    "toutes-les-machines-ont-le-coeur": {
        "en": {
            "title": "Verbe irrégulier 'battre' au présent",
            "explanation": "The verb 'battre' (to beat) follows an irregular conjugation pattern in French where the letter 't' is lost in singular forms.",
            "examples": [
                "Mon cœur bat très vite quand je t'écoute.",
                "Les machines battent au rythme de l'usine.",
                "Nous battons nos propres records chaque jour."
            ]
        },
        "fr": {
            "title": "Le Présent de l'Indicatif (Verbe irrégulier 'battre')",
            "explanation": "Le verbe 'battre' est très utilisé dans cette chanson ('mon cœur qui bat'). Il suit une conjugaison irrégulière au singulier où l'on perd un 't'.",
            "examples": [
                "Mon cœur bat la chamade quand je t'écoute.",
                "Les machines battent la mesure en arrière-plan.",
                "Nous battons le fer tant qu'il est chaud."
            ]
        }
    },
    "ma-philosophie": {
        "en": {
            "title": "The Simple Future (expressing determination)",
            "explanation": "In French, the futur simple is used to express firm intentions or predictions about future actions.",
            "examples": [
                "Je lèverai le poing même si c'est difficile.",
                "Nous réussirons à surmonter les obstacles.",
                "Tu verras que tout s'arrangera bientôt."
            ]
        },
        "fr": {
            "title": "Le Futur Simple pour exprimer la détermination",
            "explanation": "Amel Bent chante 'je lèverai le poing' pour exprimer un projet ferme et résolu dans l'avenir.",
            "examples": [
                "Je resterai debout malgré toutes les difficultés.",
                "Nous réussirons grâce à notre persévérance.",
                "Tu verras que les efforts finissent par payer."
            ]
        }
    },
    "je-taime-comme-je-taime": {
        "en": {
            "title": "The restrictive structure 'Ne... que'",
            "explanation": "Using 'ne... que' limits the action of the verb to only one object or action (equivalent to 'only').",
            "examples": [
                "Je ne t'aime que pour ce que tu es.",
                "Il ne chante que des ballades romantiques.",
                "Nous ne voulons que ton bonheur."
            ]
        },
        "fr": {
            "title": "La restriction avec 'Ne... que'",
            "explanation": "Utilisé pour limiter l'action à une seule chose, équivalent de 'seulement'. Dans la chanson : 'Ne me regarde pas'.",
            "examples": [
                "Je ne t'aime que pour ce que tu es.",
                "Il ne chante que des ballades romantiques.",
                "Nous ne voulons que ton bonheur."
            ]
        }
    },
    "salut": {
        "en": {
            "title": "The Present Perfect of return ('salut')",
            "explanation": "Joe Dassin sings 'Salut, c'est encore moi'. Learn to use the present perfect or present of state when reconnecting.",
            "examples": [
                "Salut, c'est encore moi après tant d'années !",
                "Je suis ravi de te retrouver dans ce vieux café.",
                "Rien n'a changé dans notre quartier d'enfance."
            ]
        },
        "fr": {
            "title": "Le Présent et le Passé Composé pour les retrouvailles",
            "explanation": "Joe Dassin chante 'Salut, c'est encore moi'. Apprenez à utiliser le présent de reprise et le passé composé pour marquer des retrouvailles.",
            "examples": [
                "Salut, c'est encore moi après tant d'années !",
                "Je suis ravi de te retrouver dans ce vieux café.",
                "Rien n'a changé dans notre quartier d'enfance."
            ]
        }
    },
    "unlikely-lovers": {
        "en": {
            "title": "The Conjunction 'No matter how'",
            "explanation": "Used to express that something is true or will happen regardless of the degree or intensity of something else.",
            "examples": [
                "No matter how bad the weather gets, we will stand together.",
                "No matter how difficult the song is, she sings it beautifully.",
                "No matter how far you go, I will remember our time."
            ]
        }
    },
    "california-dreaming": {
        "en": {
            "title": "The Second Conditional ('would')",
            "explanation": "Used to talk about hypothetical situations in the present or future. In the song: 'I'd be safe and warm if I was in L.A.'",
            "examples": [
                "I would travel to California if I had enough money.",
                "If the weather were warmer, we would walk in the park.",
                "She would sing along if she knew the full lyrics."
            ]
        }
    },
    "me-and-i": {
        "en": {
            "title": "Present Simple of State & Reflection",
            "explanation": "Using verbs of perception and state to describe internal conflicts and dual personalities.",
            "examples": [
                "Sometimes I feel there are two different people inside me.",
                "I look in the mirror and analyze my own expressions.",
                "She accepts her flaws and learns to live with them."
            ]
        }
    },
    "where-is-my-husband": {
        "en": {
            "title": "Present Continuous for search and waiting",
            "explanation": "The present continuous is used to describe actions happening right now or ongoing processes.",
            "examples": [
                "I am waiting for your phone call tonight.",
                "She is searching for a place to settle down.",
                "We are looking through dating applications all day."
            ]
        }
    },
    "lets-generalize-about-men": {
        "en": {
            "title": "Generalization quantifiers ('all', 'every')",
            "explanation": "Learn to use absolute quantifiers to make sweeping, humorous generalizations.",
            "examples": [
                "Let's generalize about every member of that group.",
                "All three billion men are completely repressed.",
                "Every single person has some secrets to keep."
            ]
        }
    },
    "so-maternal": {
        "en": {
            "title": "Intensifiers ('so', 'such')",
            "explanation": "Used to give extra force or emphasis to a descriptive adjective or noun.",
            "examples": [
                "Damn, I am so maternal and tireless !",
                "She is such a great parent and mentor.",
                "They gave us such beautiful memories."
            ]
        }
    },
    "face-your-fears": {
        "en": {
            "title": "Imperatives for giving brave advice",
            "explanation": "Use direct, bold imperative verbs to guide and motivate someone to act.",
            "examples": [
                "Face your fears and stand your ground !",
                "Look the bear deep in the eyes and stay calm.",
                "Do not run away when situations get scary."
            ]
        }
    }
}

# Standardized Final Challenges
FINAL_CHALLENGE_DB = {
    "toutes-les-machines-ont-le-coeur": {
        "en": "Write a short 3-sentence message to a robot explaining what makes the human heart fragile yet strong.",
        "fr": "Écrivez un court message de 3 phrases à un robot pour lui expliquer ce qui rend le cœur humain fragile mais fort."
    },
    "ma-philosophie": {
        "en": "Role-play a short dialogue where you explain your own personal 'philosophy of life' to a friend who is feeling discouraged.",
        "fr": "Jouez un court dialogue dans lequel vous expliquez votre propre 'philosophie de vie' à un ami découragé."
    },
    "je-taime-comme-je-taime": {
        "en": "Imagine a continuation of the story: Write a short postcard to your lover explaining why you chose to stay together 'away from the noise of the earth'.",
        "fr": "Imaginez la suite de l'histoire : écrivez une courte carte postale à votre partenaire pour lui expliquer pourquoi vous avez choisi de rester ensemble 'loin du bruit de la terre'."
    },
    "salut": {
        "en": "Role-play reuniting with an old friend you haven't seen in 10 years at a train station café. Express your surprise and nostagia.",
        "fr": "Jouez des retrouvailles avec un ami que vous n'avez pas vu depuis 10 ans dans un café de gare. Exprimez votre nostalgie."
    },
    "unlikely-lovers": {
        "en": "Give verbal advice to unlikely lovers who are facing social pressure. What should they prioritize?",
        "fr": "Donnez des conseils verbaux à des amants improbables qui font face à la pression sociale. Que devraient-ils prioriser ?"
    },
    "where-is-my-husband": {
        "en": "Continue the story: Write a creative message to a husband who has been missing for a week, explaining your feelings.",
        "fr": "Continuez l'histoire : écrivez un message créatif к мужу, который пропал на неделю, объясняя свои чувства."
    },
    "lets-generalize-about-men": {
        "en": "Conduct a short 3-minute debate on whether generalizations ever help in social discussions.",
        "fr": "Menez un court débat de 3 minutes sur la question de savoir si les généralisations sont utiles dans les discussions sociales."
    },
    "so-maternal": {
        "en": "Give playful advice to an overachieving parent on how to relax for a day.",
        "fr": "Donnez des conseils ludiques à un parent ultra-performant sur la façon de se détendre pour une journée."
    },
    "face-your-fears": {
        "en": "Role-play giving absurd but hilarious advice to someone who is terrified of public speaking.",
        "fr": "Jouez à donner des conseils absurdes mais hilarants à quelqu'un qui a le trac de parler en public."
    }
}


VOCAB_DB = {
    "Accueillir": ('Thematic vocabulary word from \'La Tour Eiffel Est Pour Moi\'.', 'This is an elegant example of using \'Accueillir\'.'),
    "Addition": ('Thematic vocabulary word from \'Diva\'.', 'This is an elegant example of using \'Addition\'.'),
    "Aerodrome": ('Thematic vocabulary word from \'Army Dreamers\'.', 'This is an elegant example of using \'Aerodrome\'.'),
    "Affitta (он)": ('Thematic vocabulary word from \'Due Grosse Lacrime Bianche\'.', 'This is an elegant example of using \'Affitta (он)\'.'),
    "American": ('Thematic vocabulary word from \'Im Afraid Of Americans\'.', 'This is an elegant example of using \'American\'.'),
    "Americans": ('Thematic vocabulary word from \'Im Afraid Of Americans\'.', 'This is an elegant example of using \'Americans\'.'),
    "Amours": ('Thematic vocabulary word from \'Toi Mon Amour\'.', 'This is an elegant example of using \'Amours\'.'),
    "Angoisses": ('Thematic vocabulary word from \'Immobile\'.', 'This is an elegant example of using \'Angoisses\'.'),
    "Appuntamento": ('Thematic vocabulary word from \'Chi Sara Con Te\'.', 'This is an elegant example of using \'Appuntamento\'.'),
    "Arrivent": ('Thematic vocabulary word from \'Voila\'.', 'This is an elegant example of using \'Arrivent\'.'),
    "Assomiglia": ('Thematic vocabulary word from \'Chi Sara Con Te\'.', 'This is an elegant example of using \'Assomiglia\'.'),
    "Attacchi": ('Thematic vocabulary word from \'Un Raggio Di Sole\'.', 'This is an elegant example of using \'Attacchi\'.'),
    "Attendais": ('Thematic vocabulary word from \'Tu Ten Iras\'.', 'This is an elegant example of using \'Attendais\'.'),
    "Attendent": ('Thematic vocabulary word from \'Quelquun Pour Toi\'.', 'This is an elegant example of using \'Attendent\'.'),
    "Aujourd": ('Thematic vocabulary word from \'Bien Plus Fort\'.', 'This is an elegant example of using \'Aujourd\'.'),
    "Autoroute": ('Thematic vocabulary word from \'Immobile\'.', 'This is an elegant example of using \'Autoroute\'.'),
    "Autrefois": ('Thematic vocabulary word from \'Tu Ten Iras\'.', 'This is an elegant example of using \'Autrefois\'.'),
    "Babycakes": ('Thematic vocabulary word from \'Settle For Me\'.', 'This is an elegant example of using \'Babycakes\'.'),
    "Balance": ('Thematic vocabulary word from \'Balance Ton Quoi\'.', 'This is an elegant example of using \'Balance\'.'),
    "Bastardization": ('Thematic vocabulary word from \'Group Hang\'.', 'This is an elegant example of using \'Bastardization\'.'),
    "Beaucoup": ('Thematic vocabulary word from \'Diva\'.', 'This is an elegant example of using \'Beaucoup\'.'),
    "Bewildering": ('Thematic vocabulary word from \'Coming Around Again\'.', 'This is an elegant example of using \'Bewildering\'.'),
    "Bianche (он)": ('Thematic vocabulary word from \'Due Grosse Lacrime Bianche\'.', 'This is an elegant example of using \'Bianche (он)\'.'),
    "Bienheureux": ('Thematic vocabulary word from \'La Tour Eiffel Est Pour Moi\'.', 'This is an elegant example of using \'Bienheureux\'.'),
    "Blessures": ('Thematic vocabulary word from \'Je Taime Comme Je Taime\'.', 'This is an elegant example of using \'Blessures\'.'),
    "Bridge": ('Thematic vocabulary word from \'Make Your Own Kind Of Music\'.', 'This is an elegant example of using \'Bridge\'.'),
    "Brûlant": ('Thematic vocabulary word from \'Bien Plus Fort\'.', 'This is an elegant example of using \'Brûlant\'.'),
    "Business": ('Thematic vocabulary word from \'Second Hand Rose\'.', 'This is an elegant example of using \'Business\'.'),
    "Cafouillages": ('Thematic vocabulary word from \'Sexy French Depression\'.', 'This is an elegant example of using \'Cafouillages\'.'),
    "Calmant": ('Thematic vocabulary word from \'Je Taime Comme Je Taime\'.', 'This is an elegant example of using \'Calmant\'.'),
    "Cambiarmi": ('Thematic vocabulary word from \'Un Raggio Di Sole\'.', 'This is an elegant example of using \'Cambiarmi\'.'),
    "Camminiamo": ('Thematic vocabulary word from \'Chi Sara Con Te\'.', 'This is an elegant example of using \'Camminiamo\'.'),
    "Careless": ('Thematic vocabulary word from \'Left Outside Alone\'.', 'This is an elegant example of using \'Careless\'.'),
    "Casualties": ('Thematic vocabulary word from \'Casualties Of War\'.', 'This is an elegant example of using \'Casualties\'.'),
    "Changera": ('Thematic vocabulary word from \'Balance Ton Quoi\'.', 'This is an elegant example of using \'Changera\'.'),
    "Chanter": ('Thematic vocabulary word from \'Bien Plus Fort\'.', 'This is an elegant example of using \'Chanter\'.'),
    "Chanteuse": ('Thematic vocabulary word from \'Voila\'.', 'This is an elegant example of using \'Chanteuse\'.'),
    "Charmant": ('Thematic vocabulary word from \'Diva\'.', 'This is an elegant example of using \'Charmant\'.'),
    "Chattes": ('Thematic vocabulary word from \'Balance Ton Quoi\'.', 'This is an elegant example of using \'Chattes\'.'),
    "Cheesecake": ('Thematic vocabulary word from \'Group Hang\'.', 'This is an elegant example of using \'Cheesecake\'.'),
    "Cherche": ('Thematic vocabulary word from \'Diva\'.', 'This is an elegant example of using \'Cherche\'.'),
    "Cherchent": ('Thematic vocabulary word from \'Laziza\'.', 'This is an elegant example of using \'Cherchent\'.'),
    "Chiaro (он)": ('Thematic vocabulary word from \'Due Grosse Lacrime Bianche\'.', 'This is an elegant example of using \'Chiaro (он)\'.'),
    "Chiudono": ('Thematic vocabulary word from \'Lamore E Un Attimo\'.', 'This is an elegant example of using \'Chiudono\'.'),
    "Cigarette": ('Thematic vocabulary word from \'La Nuit Nen Finit Plus\'.', 'This is an elegant example of using \'Cigarette\'.'),
    "Coincidencia": ('Thematic vocabulary word from \'Te Alejas Mas De Mi\'.', 'This is an elegant example of using \'Coincidencia\'.'),
    "Combination": ('Thematic vocabulary word from \'Me And I\'.', 'This is an elegant example of using \'Combination\'.'),
    "Completes": ('Thematic vocabulary word from \'You Stupid Bitch\'.', 'This is an elegant example of using \'Completes\'.'),
    "Comptent": ('Thematic vocabulary word from \'Oui Ou Non\'.', 'This is an elegant example of using \'Comptent\'.'),
    "Condición": ('Thematic vocabulary word from \'Amor Libre\'.', 'This is an elegant example of using \'Condición\'.'),
    "Confiance": ('Thematic vocabulary word from \'Immobile\'.', 'This is an elegant example of using \'Confiance\'.'),
    "Confinés": ('Thematic vocabulary word from \'Nos Ames Sont\'.', 'This is an elegant example of using \'Confinés\'.'),
    "Consumi": ('Thematic vocabulary word from \'Luomo Che Amava Le Donne\'.', 'This is an elegant example of using \'Consumi\'.'),
    "Contentment": ('Thematic vocabulary word from \'Its Getting Better\'.', 'This is an elegant example of using \'Contentment\'.'),
    "Contours": ('Thematic vocabulary word from \'Voila\'.', 'This is an elegant example of using \'Contours\'.'),
    "Contradiction": ('Thematic vocabulary word from \'Mixed Up World\'.', 'This is an elegant example of using \'Contradiction\'.'),
    "Conversations": ('Thematic vocabulary word from \'Sexy French Depression\'.', 'This is an elegant example of using \'Conversations\'.'),
    "Coquillages (он)": ('Thematic vocabulary word from \'Le Soleil Noir\'.', 'This is an elegant example of using \'Coquillages (он)\'.'),
    "Couloirs": ('Thematic vocabulary word from \'Leffet De Masse\'.', 'This is an elegant example of using \'Couloirs\'.'),
    "Coupable": ('Thematic vocabulary word from \'Quelquun Pour Toi\'.', 'This is an elegant example of using \'Coupable\'.'),
    "Couplet": ('Thematic vocabulary word from \'Je Taime Comme Je Taime\'.', 'This is an elegant example of using \'Couplet\'.'),
    "Crediamo": ('Thematic vocabulary word from \'Unatta Estate\'.', 'This is an elegant example of using \'Crediamo\'.'),
    "Crois": ('Thematic vocabulary word from \'Toi Mon Amour\'.', 'This is an elegant example of using \'Crois\'.'),
    "Cueille": ('Thematic vocabulary word from \'Toi Mon Amour\'.', 'This is an elegant example of using \'Cueille\'.'),
    "Cuscino (он)": ('Thematic vocabulary word from \'Due Grosse Lacrime Bianche\'.', 'This is an elegant example of using \'Cuscino (он)\'.'),
    "Danser": ('Thematic vocabulary word from \'Bien Plus Fort\'.', 'This is an elegant example of using \'Danser\'.'),
    "Demain": ('Thematic vocabulary word from \'Bien Plus Fort\'.', 'This is an elegant example of using \'Demain\'.'),
    "Demandant": ('Thematic vocabulary word from \'Sexy French Depression\'.', 'This is an elegant example of using \'Demandant\'.'),
    "Demeaning": ('Thematic vocabulary word from \'Settle For Me\'.', 'This is an elegant example of using \'Demeaning\'.'),
    "Depression": ('Thematic vocabulary word from \'Sexy French Depression\'.', 'This is an elegant example of using \'Depression\'.'),
    "Dessus": ('Thematic vocabulary word from \'Bien Plus Fort\'.', 'This is an elegant example of using \'Dessus\'.'),
    "Destrozar": ('Thematic vocabulary word from \'Te Alejas Mas De Mi\'.', 'This is an elegant example of using \'Destrozar\'.'),
    "Destruyendo": ('Thematic vocabulary word from \'Te Alejas Mas De Mi\'.', 'This is an elegant example of using \'Destruyendo\'.'),
    "Difficile": ('Thematic vocabulary word from \'Luomo Che Amava Le Donne\'.', 'This is an elegant example of using \'Difficile\'.'),
    "Différent": ('Thematic vocabulary word from \'Leffet De Masse\'.', 'This is an elegant example of using \'Différent\'.'),
    "Dimenticarti": ('Thematic vocabulary word from \'Luomo Che Amava Le Donne\'.', 'This is an elegant example of using \'Dimenticarti\'.'),
    "Dirtelo": ('Thematic vocabulary word from \'Lamore E Un Attimo\'.', 'This is an elegant example of using \'Dirtelo\'.'),
    "Dividerci": ('Thematic vocabulary word from \'Lamore E Un Attimo\'.', 'This is an elegant example of using \'Dividerci\'.'),
    "Dreamers": ('Thematic vocabulary word from \'Army Dreamers\'.', 'This is an elegant example of using \'Dreamers\'.'),
    "Dynamite": ('Thematic vocabulary word from \'Quelquun Pour Toi\'.', 'This is an elegant example of using \'Dynamite\'.'),
    "Déchirures (он)": ('Thematic vocabulary word from \'Le Soleil Noir\'.', 'This is an elegant example of using \'Déchirures (он)\'.'),
    "Déclarées": ('Thematic vocabulary word from \'Nos Ames Sont\'.', 'This is an elegant example of using \'Déclarées\'.'),
    "Désirais": ('Thematic vocabulary word from \'Salut\'.', 'This is an elegant example of using \'Désirais\'.'),
    "Education": ('Thematic vocabulary word from \'Army Dreamers\'.', 'This is an elegant example of using \'Education\'.'),
    "Embrasses": ('Thematic vocabulary word from \'Oui Ou Non\'.', 'This is an elegant example of using \'Embrasses\'.'),
    "Emozionato": ('Thematic vocabulary word from \'Chi Sara Con Te\'.', 'This is an elegant example of using \'Emozionato\'.'),
    "Encontrar": ('Thematic vocabulary word from \'Amor Libre\'.', 'This is an elegant example of using \'Encontrar\'.'),
    "Endroit": ('Thematic vocabulary word from \'Je Taime Comme Je Taime\'.', 'This is an elegant example of using \'Endroit\'.'),
    "Enfoncent": ('Thematic vocabulary word from \'Immobile\'.', 'This is an elegant example of using \'Enfoncent\'.'),
    "Engageaient": ('Thematic vocabulary word from \'Un Premier Amour\'.', 'This is an elegant example of using \'Engageaient\'.'),
    "Enroulée": ('Thematic vocabulary word from \'Laziza\'.', 'This is an elegant example of using \'Enroulée\'.'),
    "Entiéndeme": ('Thematic vocabulary word from \'Te Alejas Mas De Mi\'.', 'This is an elegant example of using \'Entiéndeme\'.'),
    "Estrellas": ('Thematic vocabulary word from \'Nuevo Verano\'.', 'This is an elegant example of using \'Estrellas\'.'),
    "Estribillo": ('Thematic vocabulary word from \'Nuevo Verano\'.', 'This is an elegant example of using \'Estribillo\'.'),
    "Everyone": ('Thematic vocabulary word from \'Second Hand Rose\'.', 'This is an elegant example of using \'Everyone\'.'),
    "Expectations": ('Thematic vocabulary word from \'Settle For Me\'.', 'This is an elegant example of using \'Expectations\'.'),
    "Explanation": ('Thematic vocabulary word from \'Me And I\'.', 'This is an elegant example of using \'Explanation\'.'),
    "Explicación": ('Thematic vocabulary word from \'Te Alejas Mas De Mi\'.', 'This is an elegant example of using \'Explicación\'.'),
    "Exprimer": ('Thematic vocabulary word from \'Tu Ten Iras\'.', 'This is an elegant example of using \'Exprimer\'.'),
    "Fallait": ('Thematic vocabulary word from \'Tu Ten Iras\'.', 'This is an elegant example of using \'Fallait\'.'),
    "Faranno (он)": ('Thematic vocabulary word from \'Due Grosse Lacrime Bianche\'.', 'This is an elegant example of using \'Faranno (он)\'.'),
    "Faudrait": ('Thematic vocabulary word from \'Balance Ton Quoi\'.', 'This is an elegant example of using \'Faudrait\'.'),
    "Favorite": ('Thematic vocabulary word from \'Quelquun Pour Toi\'.', 'This is an elegant example of using \'Favorite\'.'),
    "Felicità": ('Thematic vocabulary word from \'Lamore E Un Attimo\'.', 'This is an elegant example of using \'Felicità\'.'),
    "Festering": ('Thematic vocabulary word from \'You Stupid Bitch\'.', 'This is an elegant example of using \'Festering\'.'),
    "Finalement": ('Thematic vocabulary word from \'Oui Ou Non\'.', 'This is an elegant example of using \'Finalement\'.'),
    "Flamboyante": ('Thematic vocabulary word from \'La Tour Eiffel Est Pour Moi\'.', 'This is an elegant example of using \'Flamboyante\'.'),
    "Fluttering": ('Thematic vocabulary word from \'Oh My God I Think I Like You\'.', 'This is an elegant example of using \'Fluttering\'.'),
    "Frontières (он)": ('Thematic vocabulary word from \'Le Soleil Noir\'.', 'This is an elegant example of using \'Frontières (он)\'.'),
    "Gambetta": ('Thematic vocabulary word from \'Diva\'.', 'This is an elegant example of using \'Gambetta\'.'),
    "Garçons": ('Thematic vocabulary word from \'Diva\'.', 'This is an elegant example of using \'Garçons\'.'),
    "Gaslighted": ('Thematic vocabulary word from \'Group Hang\'.', 'This is an elegant example of using \'Gaslighted\'.'),
    "Glaçons": ('Thematic vocabulary word from \'Diva\'.', 'This is an elegant example of using \'Glaçons\'.'),
    "Goodbye": ('Thematic vocabulary word from \'Coming Around Again\'.', 'This is an elegant example of using \'Goodbye\'.'),
    "Goodnight": ('Thematic vocabulary word from \'As It Was\'.', 'This is an elegant example of using \'Goodnight\'.'),
    "Grandiras": ('Thematic vocabulary word from \'Tu Ten Iras\'.', 'This is an elegant example of using \'Grandiras\'.'),
    "Gridandomi": ('Thematic vocabulary word from \'Un Raggio Di Sole\'.', 'This is an elegant example of using \'Gridandomi\'.'),
    "Guacamole": ('Thematic vocabulary word from \'Group Hang\'.', 'This is an elegant example of using \'Guacamole\'.'),
    "Guadalaraja": ('Thematic vocabulary word from \'Group Hang\'.', 'This is an elegant example of using \'Guadalaraja\'.'),
    "Guitarra": ('Thematic vocabulary word from \'Nuevo Verano\'.', 'This is an elegant example of using \'Guitarra\'.'),
    "Hablando": ('Thematic vocabulary word from \'Nuevo Verano\'.', 'This is an elegant example of using \'Hablando\'.'),
    "Hardest": ('Thematic vocabulary word from \'Make Your Own Kind Of Music\'.', 'This is an elegant example of using \'Hardest\'.'),
    "Heavenly": ('Thematic vocabulary word from \'Left Outside Alone\'.', 'This is an elegant example of using \'Heavenly\'.'),
    "Heureux": ('Thematic vocabulary word from \'Bien Plus Fort\'.', 'This is an elegant example of using \'Heureux\'.'),
    "Histoire": ('Thematic vocabulary word from \'Leffet De Masse\'.', 'This is an elegant example of using \'Histoire\'.'),
    "Histoires": ('Thematic vocabulary word from \'Voila\'.', 'This is an elegant example of using \'Histoires\'.'),
    "Hypnotised": ('Thematic vocabulary word from \'Angeleyes\'.', 'This is an elegant example of using \'Hypnotised\'.'),
    "Ignorais": ('Thematic vocabulary word from \'Toi Mon Amour\'.', 'This is an elegant example of using \'Ignorais\'.'),
    "Improbabili": ('Thematic vocabulary word from \'Luomo Che Amava Le Donne\'.', 'This is an elegant example of using \'Improbabili\'.'),
    "Improvisar": ('Thematic vocabulary word from \'Amor Libre\'.', 'This is an elegant example of using \'Improvisar\'.'),
    "Incessantes": ('Thematic vocabulary word from \'Ma Philosophie\'.', 'This is an elegant example of using \'Incessantes\'.'),
    "Incrustado": ('Thematic vocabulary word from \'Amor Libre\'.', 'This is an elegant example of using \'Incrustado\'.'),
    "Infidèles": ('Thematic vocabulary word from \'Nos Ames Sont\'.', 'This is an elegant example of using \'Infidèles\'.'),
    "Ingresso": ('Thematic vocabulary word from \'Un Raggio Di Sole\'.', 'This is an elegant example of using \'Ingresso\'.'),
    "Innamorati": ('Thematic vocabulary word from \'Chi Sara Con Te\'.', 'This is an elegant example of using \'Innamorati\'.'),
    "Innocents": ('Thematic vocabulary word from \'Un Premier Amour\'.', 'This is an elegant example of using \'Innocents\'.'),
    "Interlude": ('Thematic vocabulary word from \'Im Afraid Of Americans\'.', 'This is an elegant example of using \'Interlude\'.'),
    "Internet": ('Thematic vocabulary word from \'As It Was\'.', 'This is an elegant example of using \'Internet\'.'),
    "Irrealidad": ('Thematic vocabulary word from \'Amor Libre\'.', 'This is an elegant example of using \'Irrealidad\'.'),
    "Jours": ('Thematic vocabulary word from \'Toi Mon Amour\'.', 'This is an elegant example of using \'Jours\'.'),
    "Keeping": ('Thematic vocabulary word from \'Casualties Of War\'.', 'This is an elegant example of using \'Keeping\'.'),
    "Knowin": ('Thematic vocabulary word from \'Make Your Own Kind Of Music\'.', 'This is an elegant example of using \'Knowin\'.'),
    "Lacrime (он)": ('Thematic vocabulary word from \'Due Grosse Lacrime Bianche\'.', 'This is an elegant example of using \'Lacrime (он)\'.'),
    "Lasciamo (он)": ('Thematic vocabulary word from \'Due Grosse Lacrime Bianche\'.', 'This is an elegant example of using \'Lasciamo (он)\'.'),
    "Lasciarmi": ('Thematic vocabulary word from \'Un Raggio Di Sole\'.', 'This is an elegant example of using \'Lasciarmi\'.'),
    "Lasseras": ('Thematic vocabulary word from \'Tu Ten Iras\'.', 'This is an elegant example of using \'Lasseras\'.'),
    "Lettera": ('Thematic vocabulary word from \'Lamore E Un Attimo\'.', 'This is an elegant example of using \'Lettera\'.'),
    "Loneliest": ('Thematic vocabulary word from \'Make Your Own Kind Of Music\'.', 'This is an elegant example of using \'Loneliest\'.'),
    "Longtemps": ('Thematic vocabulary word from \'Un Premier Amour\'.', 'This is an elegant example of using \'Longtemps\'.'),
    "Lontano": ('Thematic vocabulary word from \'Luomo Che Amava Le Donne\'.', 'This is an elegant example of using \'Lontano\'.'),
    "Lourd": ('Thematic vocabulary word from \'Toi Mon Amour\'.', 'This is an elegant example of using \'Lourd\'.'),
    "Machines (он)": ('Thematic vocabulary word from \'Toutes Les Machines Ont Le Coeur\'.', 'This is an elegant example of using \'Machines (он)\'.'),
    "Malinconia": ('Thematic vocabulary word from \'Lamore E Un Attimo\'.', 'This is an elegant example of using \'Malinconia\'.'),
    "Maquillado": ('Thematic vocabulary word from \'Amor Libre\'.', 'This is an elegant example of using \'Maquillado\'.'),
    "Maquille": ('Thematic vocabulary word from \'Diva\'.', 'This is an elegant example of using \'Maquille\'.'),
    "Margarita": ('Thematic vocabulary word from \'Group Hang\'.', 'This is an elegant example of using \'Margarita\'.'),
    "Masculinity": ('Thematic vocabulary word from \'Settle For Me\'.', 'This is an elegant example of using \'Masculinity\'.'),
    "Mauvais": ('Thematic vocabulary word from \'Salut\'.', 'This is an elegant example of using \'Mauvais\'.'),
    "Meilleur": ('Thematic vocabulary word from \'Leffet De Masse\'.', 'This is an elegant example of using \'Meilleur\'.'),
    "Meilleur (он)": ('Thematic vocabulary word from \'Toutes Les Machines Ont Le Coeur\'.', 'This is an elegant example of using \'Meilleur (он)\'.'),
    "Mensonges": ('Thematic vocabulary word from \'Oui Ou Non\'.', 'This is an elegant example of using \'Mensonges\'.'),
    "Messenger": ('Thematic vocabulary word from \'Sexy French Depression\'.', 'This is an elegant example of using \'Messenger\'.'),
    "Messenger (он)": ('Thematic vocabulary word from \'Toutes Les Machines Ont Le Coeur\'.', 'This is an elegant example of using \'Messenger (он)\'.'),
    "Montparnasse": ('Thematic vocabulary word from \'La Tour Eiffel Est Pour Moi\'.', 'This is an elegant example of using \'Montparnasse\'.'),
    "Mordidas": ('Thematic vocabulary word from \'Nuevo Verano\'.', 'This is an elegant example of using \'Mordidas\'.'),
    "Mushrooms": ('Thematic vocabulary word from \'Group Hang\'.', 'This is an elegant example of using \'Mushrooms\'.'),
    "Méchants": ('Thematic vocabulary word from \'Leffet De Masse\'.', 'This is an elegant example of using \'Méchants\'.'),
    "Nasconderò (он)": ('Thematic vocabulary word from \'Due Grosse Lacrime Bianche\'.', 'This is an elegant example of using \'Nasconderò (он)\'.'),
    "Nobody": ('Thematic vocabulary word from \'As It Was\'.', 'This is an elegant example of using \'Nobody\'.'),
    "Nombreux": ('Thematic vocabulary word from \'Leffet De Masse\'.', 'This is an elegant example of using \'Nombreux\'.'),
    "Nonchalance (он)": ('Thematic vocabulary word from \'Le Soleil Noir\'.', 'This is an elegant example of using \'Nonchalance (он)\'.'),
    "Nuoteremo": ('Thematic vocabulary word from \'Unatta Estate\'.', 'This is an elegant example of using \'Nuoteremo\'.'),
    "Olvidado": ('Thematic vocabulary word from \'Nuevo Verano\'.', 'This is an elegant example of using \'Olvidado\'.'),
    "Ordinateur (он)": ('Thematic vocabulary word from \'Toutes Les Machines Ont Le Coeur\'.', 'This is an elegant example of using \'Ordinateur (он)\'.'),
    "Orizzonte": ('Thematic vocabulary word from \'Unatta Estate\'.', 'This is an elegant example of using \'Orizzonte\'.'),
    "Paillettes": ('Thematic vocabulary word from \'La Tour Eiffel Est Pour Moi\'.', 'This is an elegant example of using \'Paillettes\'.'),
    "Parcours": ('Thematic vocabulary word from \'Quelquun Pour Toi\'.', 'This is an elegant example of using \'Parcours\'.'),
    "Partageaitton": ('Thematic vocabulary word from \'Leffet De Masse\'.', 'This is an elegant example of using \'Partageaitton\'.'),
    "Passato": ('Thematic vocabulary word from \'Lamore E Un Attimo\'.', 'This is an elegant example of using \'Passato\'.'),
    "Passerai": ('Thematic vocabulary word from \'Balance Ton Quoi\'.', 'This is an elegant example of using \'Passerai\'.'),
    "Pendulum": ('Thematic vocabulary word from \'Oh To Be In Love\'.', 'This is an elegant example of using \'Pendulum\'.'),
    "Pensiero": ('Thematic vocabulary word from \'Lamore E Un Attimo\'.', 'This is an elegant example of using \'Pensiero\'.'),
    "Permanent (он)": ('Thematic vocabulary word from \'Toutes Les Machines Ont Le Coeur\'.', 'This is an elegant example of using \'Permanent (он)\'.'),
    "Physically": ('Thematic vocabulary word from \'Oh My God I Think I Like You\'.', 'This is an elegant example of using \'Physically\'.'),
    "Phénomène": ('Thematic vocabulary word from \'Quelquun Pour Toi\'.', 'This is an elegant example of using \'Phénomène\'.'),
    "Piaceva": ('Thematic vocabulary word from \'Luomo Che Amava Le Donne\'.', 'This is an elegant example of using \'Piaceva\'.'),
    "Pleurer": ('Thematic vocabulary word from \'Bien Plus Fort\'.', 'This is an elegant example of using \'Pleurer\'.'),
    "Plumber": ('Thematic vocabulary word from \'Second Hand Rose\'.', 'This is an elegant example of using \'Plumber\'.'),
    "Plusieurs": ('Thematic vocabulary word from \'Leffet De Masse\'.', 'This is an elegant example of using \'Plusieurs\'.'),
    "Portable (он)": ('Thematic vocabulary word from \'Toutes Les Machines Ont Le Coeur\'.', 'This is an elegant example of using \'Portable (он)\'.'),
    "Pourquoi": ('Thematic vocabulary word from \'Laziza\'.', 'This is an elegant example of using \'Pourquoi\'.'),
    "Pourtant (он)": ('Thematic vocabulary word from \'Toutes Les Machines Ont Le Coeur\'.', 'This is an elegant example of using \'Pourtant (он)\'.'),
    "Practical": ('Thematic vocabulary word from \'Settle For Me\'.', 'This is an elegant example of using \'Practical\'.'),
    "Praticamente": ('Thematic vocabulary word from \'Un Raggio Di Sole\'.', 'This is an elegant example of using \'Praticamente\'.'),
    "Pregunto": ('Thematic vocabulary word from \'Te Alejas Mas De Mi\'.', 'This is an elegant example of using \'Pregunto\'.'),
    "Pretend": ('Thematic vocabulary word from \'Im Afraid Of Americans\'.', 'This is an elegant example of using \'Pretend\'.'),
    "Primavera": ('Thematic vocabulary word from \'Unatta Estate\'.', 'This is an elegant example of using \'Primavera\'.'),
    "Prisonnières": ('Thematic vocabulary word from \'Nos Ames Sont\'.', 'This is an elegant example of using \'Prisonnières\'.'),
    "Problème": ('Thematic vocabulary word from \'Balance Ton Quoi\'.', 'This is an elegant example of using \'Problème\'.'),
    "Problèmes": ('Thematic vocabulary word from \'Sexy French Depression\'.', 'This is an elegant example of using \'Problèmes\'.'),
    "Proposal": ('Thematic vocabulary word from \'Settle For Me\'.', 'This is an elegant example of using \'Proposal\'.'),
    "Proprio": ('Thematic vocabulary word from \'Luomo Che Amava Le Donne\'.', 'This is an elegant example of using \'Proprio\'.'),
    "Protagonist": ('Thematic vocabulary word from \'Im The Villain In My Own Story\'.', 'This is an elegant example of using \'Protagonist\'.'),
    "Préfère": ('Thematic vocabulary word from \'Diva\'.', 'This is an elegant example of using \'Préfère\'.'),
    "Raconter": ('Thematic vocabulary word from \'Salut\'.', 'This is an elegant example of using \'Raconter\'.'),
    "Rappellent": ('Thematic vocabulary word from \'Nos Ames Sont\'.', 'This is an elegant example of using \'Rappellent\'.'),
    "Recharger": ('Thematic vocabulary word from \'Oui Ou Non\'.', 'This is an elegant example of using \'Recharger\'.'),
    "Redouter": ('Thematic vocabulary word from \'Tu Ten Iras\'.', 'This is an elegant example of using \'Redouter\'.'),
    "Refrain": ('Thematic vocabulary word from \'Im Afraid Of Americans\'.', 'This is an elegant example of using \'Refrain\'.'),
    "Regardant": ('Thematic vocabulary word from \'La Tour Eiffel Est Pour Moi\'.', 'This is an elegant example of using \'Regardant\'.'),
    "Regardez": ('Thematic vocabulary word from \'Voila\'.', 'This is an elegant example of using \'Regardez\'.'),
    "Rejectionné (он)": ('Thematic vocabulary word from \'Le Soleil Noir\'.', 'This is an elegant example of using \'Rejectionné (он)\'.'),
    "Replaced": ('Thematic vocabulary word from \'As It Was\'.', 'This is an elegant example of using \'Replaced\'.'),
    "Restaurant": ('Thematic vocabulary word from \'Group Hang\'.', 'This is an elegant example of using \'Restaurant\'.'),
    "Resterà (он)": ('Thematic vocabulary word from \'Due Grosse Lacrime Bianche\'.', 'This is an elegant example of using \'Resterà (он)\'.'),
    "Riaccende": ('Thematic vocabulary word from \'Chi Sara Con Te\'.', 'This is an elegant example of using \'Riaccende\'.'),
    "Ridendo (он)": ('Thematic vocabulary word from \'Due Grosse Lacrime Bianche\'.', 'This is an elegant example of using \'Ridendo (он)\'.'),
    "Ridicules": ('Thematic vocabulary word from \'Nos Ames Sont\'.', 'This is an elegant example of using \'Ridicules\'.'),
    "Ridiculously": ('Thematic vocabulary word from \'Im The Villain In My Own Story\'.', 'This is an elegant example of using \'Ridiculously\'.'),
    "Rigolent": ('Thematic vocabulary word from \'Leffet De Masse\'.', 'This is an elegant example of using \'Rigolent\'.'),
    "Rincuora": ('Thematic vocabulary word from \'Unatta Estate\'.', 'This is an elegant example of using \'Rincuora\'.'),
    "Ritornello": ('Thematic vocabulary word from \'Luomo Che Amava Le Donne\'.', 'This is an elegant example of using \'Ritornello\'.'),
    "Robotizado": ('Thematic vocabulary word from \'Amor Libre\'.', 'This is an elegant example of using \'Robotizado\'.'),
    "Romantic": ('Thematic vocabulary word from \'Coming Around Again\'.', 'This is an elegant example of using \'Romantic\'.'),
    "Romantisme": ('Thematic vocabulary word from \'Oui Ou Non\'.', 'This is an elegant example of using \'Romantisme\'.'),
    "Réchauffe": ('Thematic vocabulary word from \'La Tour Eiffel Est Pour Moi\'.', 'This is an elegant example of using \'Réchauffe\'.'),
    "Réconfort": ('Thematic vocabulary word from \'Je Taime Comme Je Taime\'.', 'This is an elegant example of using \'Réconfort\'.'),
    "Réfléchis": ('Thematic vocabulary word from \'Sexy French Depression\'.', 'This is an elegant example of using \'Réfléchis\'.'),
    "Réparation": ('Thematic vocabulary word from \'Sexy French Depression\'.', 'This is an elegant example of using \'Réparation\'.'),
    "Savais": ('Thematic vocabulary word from \'Toi Mon Amour\'.', 'This is an elegant example of using \'Savais\'.'),
    "Savoir": ('Thematic vocabulary word from \'Bien Plus Fort\'.', 'This is an elegant example of using \'Savoir\'.'),
    "Schmoopy": ('Thematic vocabulary word from \'Settle For Me\'.', 'This is an elegant example of using \'Schmoopy\'.'),
    "Scintille": ('Thematic vocabulary word from \'La Tour Eiffel Est Pour Moi\'.', 'This is an elegant example of using \'Scintille\'.'),
    "Sconosciute": ('Thematic vocabulary word from \'Chi Sara Con Te\'.', 'This is an elegant example of using \'Sconosciute\'.'),
    "Scrupules": ('Thematic vocabulary word from \'Diva\'.', 'This is an elegant example of using \'Scrupules\'.'),
    "Sensación": ('Thematic vocabulary word from \'Amor Libre\'.', 'This is an elegant example of using \'Sensación\'.'),
    "Seulement": ('Thematic vocabulary word from \'Toi Mon Amour\'.', 'This is an elegant example of using \'Seulement\'.'),
    "Silences": ('Thematic vocabulary word from \'Je Taime Comme Je Taime\'.', 'This is an elegant example of using \'Silences\'.'),
    "Sitting": ('Thematic vocabulary word from \'As It Was\'.', 'This is an elegant example of using \'Sitting\'.'),
    "Smileys (он)": ('Thematic vocabulary word from \'Toutes Les Machines Ont Le Coeur\'.', 'This is an elegant example of using \'Smileys (он)\'.'),
    "Solamente": ('Thematic vocabulary word from \'Luomo Che Amava Le Donne\'.', 'This is an elegant example of using \'Solamente\'.'),
    "Solitaire (он)": ('Thematic vocabulary word from \'Le Soleil Noir\'.', 'This is an elegant example of using \'Solitaire (он)\'.'),
    "Solitaires": ('Thematic vocabulary word from \'La Nuit Nen Finit Plus\'.', 'This is an elegant example of using \'Solitaires\'.'),
    "Someone": ('Thematic vocabulary word from \'Make Your Own Kind Of Music\'.', 'This is an elegant example of using \'Someone\'.'),
    "Soupçonné": ('Thematic vocabulary word from \'Un Premier Amour\'.', 'This is an elegant example of using \'Soupçonné\'.'),
    "Spermicidal": ('Thematic vocabulary word from \'Oh My God I Think I Like You\'.', 'This is an elegant example of using \'Spermicidal\'.'),
    "Sprooshed": ('Thematic vocabulary word from \'Group Hang\'.', 'This is an elegant example of using \'Sprooshed\'.'),
    "Strappate": ('Thematic vocabulary word from \'Lamore E Un Attimo\'.', 'This is an elegant example of using \'Strappate\'.'),
    "Strictly": ('Thematic vocabulary word from \'Second Hand Rose\'.', 'This is an elegant example of using \'Strictly\'.'),
    "Stupidi": ('Thematic vocabulary word from \'Luomo Che Amava Le Donne\'.', 'This is an elegant example of using \'Stupidi\'.'),
    "Swallowed": ('Thematic vocabulary word from \'Settle For Me\'.', 'This is an elegant example of using \'Swallowed\'.'),
    "Sérieusement": ('Thematic vocabulary word from \'Sexy French Depression\'.', 'This is an elegant example of using \'Sérieusement\'.'),
    "Temblando": ('Thematic vocabulary word from \'Nuevo Verano\'.', 'This is an elegant example of using \'Temblando\'.'),
    "Tempesta": ('Thematic vocabulary word from \'Unatta Estate\'.', 'This is an elegant example of using \'Tempesta\'.'),
    "Tintamarre (он)": ('Thematic vocabulary word from \'Le Soleil Noir\'.', 'This is an elegant example of using \'Tintamarre (он)\'.'),
    "Toothpicks": ('Thematic vocabulary word from \'Second Hand Rose\'.', 'This is an elegant example of using \'Toothpicks\'.'),
    "Toujours": ('Thematic vocabulary word from \'Bien Plus Fort\'.', 'This is an elegant example of using \'Toujours\'.'),
    "Traditional": ('Thematic vocabulary word from \'Im The Villain In My Own Story\'.', 'This is an elegant example of using \'Traditional\'.'),
    "Training": ('Thematic vocabulary word from \'Settle For Me\'.', 'This is an elegant example of using \'Training\'.'),
    "Trembler": ('Thematic vocabulary word from \'Un Premier Amour\'.', 'This is an elegant example of using \'Trembler\'.'),
    "Tristezza": ('Thematic vocabulary word from \'Lamore E Un Attimo\'.', 'This is an elegant example of using \'Tristezza\'.'),
    "Twenties": ('Thematic vocabulary word from \'Army Dreamers\'.', 'This is an elegant example of using \'Twenties\'.'),
    "Uccellini": ('Thematic vocabulary word from \'Un Raggio Di Sole\'.', 'This is an elegant example of using \'Uccellini\'.'),
    "Understand": ('Thematic vocabulary word from \'Left Outside Alone\'.', 'This is an elegant example of using \'Understand\'.'),
    "Volverás": ('Thematic vocabulary word from \'Nuevo Verano\'.', 'This is an elegant example of using \'Volverás\'.'),
    "Vraiment": ('Thematic vocabulary word from \'Laziza\'.', 'This is an elegant example of using \'Vraiment\'.'),
    "Vraiment (он)": ('Thematic vocabulary word from \'Toutes Les Machines Ont Le Coeur\'.', 'This is an elegant example of using \'Vraiment (он)\'.'),
    "Wearing": ('Thematic vocabulary word from \'Second Hand Rose\'.', 'This is an elegant example of using \'Wearing\'.'),
    "Yesterday": ('Thematic vocabulary word from \'Oh To Be In Love\'.', 'This is an elegant example of using \'Yesterday\'.'),
    "bipolar": ('a mental health condition marked by extreme mood swings.', 'He manages his bipolar condition with proper medication and routine.'),
    "bloating": ('swelling of the abdomen, typically caused by gas.', 'Certain foods can cause a temporary feeling of bloating.'),
    "bridesmaid": ('a girl or woman who accompanies a bride on her wedding day.', 'She was thrilled to be chosen as a bridesmaid for her sister\'s wedding.'),
    "bulimia": ('an emotional disorder in which bouts of extreme overeating are followed by depression and self-induced vomiting.', 'The school organized an awareness seminar about anorexia and bulimia.'),
    "chaos": ('complete disorder and confusion.', 'The busy fish market was filled with loud shouts and total chaos.'),
    "cheddar": ('a relatively hard, pale yellow or orange cheese.', 'She grated some cheddar cheese over the hot pasta.'),
    "clown": ('a comic performer who wears exaggerating makeup and clothing.', 'The funny clown entertained the children at the birthday party.'),
    "coping": ('dealing effectively with something difficult.', 'Regular exercise is an excellent way of coping with daily work stress.'),
    "dosage": ('the size or frequency of a medicine dose.', 'You must always follow the doctor\'s prescription for the correct dosage.'),
    "eyebrows": ('the patches of hair growing on the ridge above a person\'s eye sockets.', 'She used a pencil to carefully define her eyebrows.'),
    "goyish": ('non-Jewish, characteristic of a gentile.', 'The restaurant served classic goyish dishes like pork and potatoes.'),
    "harrowing": ('acutely distressing or painful.', 'Rescuing the lost hikers from the steep mountain was a harrowing experience.'),
    "haze": ('a state of mental obscurity or confusion, or a thin mist.', 'He woke up with his head in a complete haze after the long party.'),
    "instinctual": ('relating to or of the nature of instinct.', 'The mother dog showed an instinctual drive to protect her new puppies.'),
    "leash": ('a strap or cord for controlling a dog or other animal.', 'She kept her active golden retriever on a secure leather leash.'),
    "leukaemia": ('a malignant progressive disease in which bone marrow produces abnormal white blood cells.', 'The hospital is raising funds to support children fighting leukaemia.'),
    "lotion": ('a thick liquid applied to the skin for medical or cosmetic purposes.', 'Applying moisturizing lotion helps soothe dry skin in winter.'),
    "luggage": ('suitcases or bags containing personal belongings for travel.', 'They loaded their heavy luggage into the trunk of the taxi.'),
    "manic": ('characterized by excitement, euphoria, or extreme energy.', 'She entered a manic phase where she painted for ten hours straight.'),
    "matriarch": ('a woman who is the head of a family or tribe.', 'The grandmother was the respected matriarch of the large family.'),
    "naturopath": ('a practitioner of alternative medicine.', 'The naturopath suggested using herbal teas to relieve the stress.'),
    "nightlife": ('social activities or entertainment available at night in a town or city.', 'The vibrant city is famous for its diverse and active nightlife.'),
    "numb": ('deprived of physical sensation or the power of motion.', 'My fingers felt completely numb after walking in the freezing cold.'),
    "pandas": ('large bearlike mammals with characteristic black and white markings.', 'We spent the afternoon watching the playful pandas at the city zoo.'),
    "plucking": ('pulling out hair or feathers with fingers or tweezers.', 'Plucking eyebrows requires a steady hand and patience.'),
    "reckless": ('acting or done without regard to the consequences; rash.', 'Driving a car at high speed in heavy rain is extremely reckless.'),
    "sausages": ('an item of food in the form of a cylindrical length of minced pork or beef.', 'They grilled some delicious sausages on the outdoor barbecue.'),
    "screaming": ('making a loud, sharp cry or noise.', 'We could hear the excited children screaming on the roller coaster.'),
    "shaving": ('cutting hair from the skin using a razor.', 'His daily morning routine always included shaving and drinking coffee.'),
    "sidekick": ('a close companion or assistant.', 'The superhero always traveled with his loyal and clever sidekick.'),
    "sisterhood": ('the relationship or association between women, or a community of sisters.', 'The organization promotes a strong sense of professional sisterhood.'),
    "spanx": ('tight-fitting undergarments designed to shape the body.', 'She wore spanx underneath her elegant evening gown.'),
    "sushi": ('a Japanese dish consisting of small balls or rolls of cold-cooked military rice with garnishings.', 'We ordered a platter of fresh salmon sushi and green tea.'),
    "tireless": ('having or showing great effort or energy without tiring.', 'She was a tireless campaigner for clean energy and environmental protection.'),
    "toaster": ('an electrical appliance for toasting bread.', 'She placed two slices of bread into the toaster for breakfast.'),
    "void": ('a completely empty space, or a feeling of empty loss.', 'His sudden departure left a deep, painful void in her life.'),
    "waxing": ('removing hair from the skin using wax.', 'Waxing can be a highly painful beauty procedure.'),
    "Écartelée (он)": ('Thematic vocabulary word from \'Le Soleil Noir\'.', 'This is an elegant example of using \'Écartelée (он)\'.'),
    "Éclatants (он)": ('Thematic vocabulary word from \'Le Soleil Noir\'.', 'This is an elegant example of using \'Éclatants (он)\'.'),
    "Émerveillés": ('Thematic vocabulary word from \'Un Premier Amour\'.', 'This is an elegant example of using \'Émerveillés\'.'),
    "Éparpillent": ('Thematic vocabulary word from \'La Tour Eiffel Est Pour Moi\'.', 'This is an elegant example of using \'Éparpillent\'.'),
    "Étincelles (он)": ('Thematic vocabulary word from \'Toutes Les Machines Ont Le Coeur\'.', 'This is an elegant example of using \'Étincelles (он)\'.'),
    "Étoufferaient": ('Thematic vocabulary word from \'Nos Ames Sont\'.', 'This is an elegant example of using \'Étoufferaient\'.'),
    "Évidemment": ('Thematic vocabulary word from \'La Tour Eiffel Est Pour Moi\'.', 'This is an elegant example of using \'Évidemment\'.'),
    "Évidence": ('Thematic vocabulary word from \'Je Taime Comme Je Taime\'.', 'This is an elegant example of using \'Évidence\'.'),
    "Últimamente": ('Thematic vocabulary word from \'Nuevo Verano\'.', 'This is an elegant example of using \'Últimamente\'.'),
    "Θεό": ('η ανώτατη πνευματική δύναμη.', 'Πιστεύει στη δύναμη του Θεού.'),
    "Πουθενά": ('Thematic vocabulary word from \'Na I Agapi Na\'.', 'This is an elegant example of using \'Πουθενά\'.'),
    "Υπάρχει": ('Thematic vocabulary word from \'Na I Agapi Na\'.', 'This is an elegant example of using \'Υπάρχει\'.'),
    "ήλιος": ('το αστέρι που φωτίζει τη Γη.', 'Ο ήλιος λάμπει στον καθαρό ουρανό.'),
    "αγάπη": ('βαθύ συναίσθημα στοργής.', 'Η αγάπη της μητέρας είναι το πιο δυνατό πράγμα.'),
    "αγκαλιά": ('το άνοιγμα των χεριών γύρω από κάποιον.', 'Μια ζεστή αγκαλιά μπορεί να απαλύνει κάθε πόνο.'),
    "αντίο": ('λέξη που λέμε όταν αποχαιρετάμε κάποιον.', 'Του είπε αντίο με ένα χαμόγελο στα χείλη.'),
    "βιβλία": ('γραπτά ή τυπωμένα φύλλα χαρτιού.', 'Η βιβλιοθήκη είναι γεμάτη με ενδιαφέροντα βιβλία.'),
    "βλέφαρα": ('τα κινητά δερματικά πτυχώματα που προστατεύουν τα μάτια.', 'Έκλεισε τα βλέφαρά της για να κοιμηθεί.'),
    "βροχή": ('το νερό που πέφτει από τα σύννεφα.', 'Η βροχή πότισε τα διψασμένα λουλούδια στον κήπο.'),
    "γάτος": ('το γνωστό κατοικίδιο αειλουροειδές ζώο.', 'Ο μαύρος γάτος κοιμόταν ήσυχα στον καναπέ.'),
    "εισιτήριο": ('χαρτί που επιτρέπει την είσοδο σε μεταφορικό μέσο ή θέαμα.', 'Αγόρασε ένα εισιτήριο για το τρένο.'),
    "εκδρομή": ('σύντομο ταξίδι για αναψυχή.', 'Το Σαββατοκύριακο θα πάμε μια όμορφη εκδρομή στο βουνό.'),
    "κρεβάτια": ('έπιπλα για ύπνο ή ανάπαυση.', 'Τα κρεβάτια στο ξενοδοχείο ήταν πολύ άνετα.'),
    "κόλαση": ('τοπος βασανιστηρίων, μεταφορικά η δυστυχία.', 'Η ζωή τους έγινε κόλαση μετά τον πόλεμο.'),
    "λογισμούς": ('οι σκέψεις ή οι συλλογισμοί.', 'Οι λογισμοί του τον κράτησαν ξύπνιο όλη τη νύχτα.'),
    "λύπη": ('συναίσθημα θλίψης ή στενοχώριας.', 'Ένιωσε μεγάλη λύπη όταν έφυγε ο φίλος του.'),
    "μαλλιά": ('οι τρίχες της κεφαλής.', 'Ο άνεμος φυσούσε απαλά στα μακριά της μαλλιά.'),
    "μιλιά": ('η φωνή ή η ομιλία.', 'Έχασε τη μιλιά του από την έκπληξη.'),
    "μοναξιά": ('η κατάσταση του να είναι κανείς μόνος.', 'Απολαμβάνει τη μοναξιά του για να διαβάζει βιβλία.'),
    "νύχτα": ('το διάστημα από τη δύση ως την ανατολή του ήλιου.', 'Η νύχτα ήταν ήσυχη και ο ουρανός γεμάτος αστέρια.'),
    "ομορφιά": ('η ιδιότητα του ωραίου.', 'Η ομορφιά του τοπίου μας άφησε άφωνους.'),
    "ουρανός": ('το διάστημα πάνω από τη Γη.', 'Ο γαλάζιος ουρανός ήταν γεμάτος λευκά σύννεφα.'),
    "παγκάκια": ('ξύλινα ή μεταλλικά καθίσματα σε δημόσιους χώρους.', 'Καθίσαμε στα παγκάκια του πάρκου για να ξεκουραστούμε.'),
    "παιδιά": ('οι νεαροί άνθρωποι, τα τέκνα.', 'Τα παιδιά έπαιζαν χαρούμενα στο πάρκο.'),
    "πρωί": ('οι πρώτες ώρες της ημέρας.', 'Της αρέσει να ξυπνάει νωρίς το πρωί για τρέξιμο.'),
    "σκεπή": ('η σκεπή ενός κτιρίου.', 'Η σκεπή του σπιτιού ήταν καλυμμένη με κόκκινα κεραμίδια.'),
    "σταθμούς": ('σημεία στάσης τρένων ή λεωφορείων.', 'Περίμεναν το τρένο σε έναν από τους κεντρικούς σταθμούς.'),
    "τέλος": ('το κλείσιμο ή η κατάληξη.', 'Το τέλος του βιβλίου ήταν πολύ συγκινητικό.'),
    "ταξίδια": ('μετακινήσεις σε μακρινούς προορισμούς.', 'Της αρέσει πολύ να κάνει ταξίδια σε ξένες χώρες.'),
    "τραγούδι": ('μουσική σύνθεση με στίχους.', 'Αυτό το τραγούδι μου θυμίζει τα παιδικά μου χρόνια.'),
    "φεγγάρι": ('ο φυσικός δορυφόρος της Γης.', 'Το ολόγιομο φεγγάρι φώτιζε τη θάλασσα.'),
    "φτωχούς": ('αυτούς που έχουν ελάχιστα χρήματα ή αγαθά.', 'Οργανώνουν γεύματα για να βοηθήσουν τους φτωχούς.'),
    "φυλακές": ('χώροι εγκλεισμού για άτομα που έχουν καταδικαστεί.', 'Οι φύλακες προσέχουν τις πύλες στις φυλακές.'),
    "φωνή": ('ο ήχος που παράγεται από τις φωνητικές χορδές.', 'Η φωνή της ήταν γλυκιά και μελωδική.'),
    "χέρια": ('τα άνω άκρα του ανθρώπινου σώματος.', 'Κρατούσε ένα όμορφο λουλούδι στα χέρια της.'),
    "χαρτά": ('κομμάτια χαρτιού, έγγραφα.', 'Βρήκε μερικά παλιά χαρτιά στο συρτάρι.'),
    "όνειρο": ('εικόνες που βλέπουμε στον ύπνο.', 'Το μεγάλο του όνειρο είναι να γίνει γιατρός.'),
    "Аптека (она)": ('магазин лекарств.', 'Бабушка купила нужные лекарства в аптеке.'),
    "Бабушка (она)": ('мать отца или матери.', 'Бабушка печёт самые вкусные пирожки.'),
    "Грусть (она)": ('чувство печали, уныния.', 'Осенний дождь всегда навевает на меня лёгкую грусть.'),
    "Дно (оно)": ('нижняя часть сосуда или водоёма.', 'На дне стакана остался сахар.'),
    "Дракон (он)": ('сказочное крылатое существо.', 'В сказке рыцарь победил злого дракона.'),
    "Дурак (он)": ('глупый человек.', 'Не будь дураком, воспользуйся этим прекрасным шансом.'),
    "Звезда (она)": ('светящееся небесное тело.', 'На ночном небе зажглась первая звезда.'),
    "Картон (он)": ('плотная бумага.', 'Мы сделали коробку из прочного картона.'),
    "Край (он)": ('предельная линия, граница.', 'Она осторожно подошла к самому краю обрыва.'),
    "Крыша (она)": ('верхняя часть здания.', 'С крыши дома открывается прекрасный вид.'),
    "Куртка (она)": ('верхняя одежда.', 'Осенью нужно носить тёплую куртку.'),
    "Ладошка (она)": ('внутренняя сторона кисти руки.', 'Малыш протянул мне свою тёплую ладошку.'),
    "Лист (он)": ('орган растения, зелёная пластинка.', 'Осенний лист медленно падал на землю.'),
    "Литвинова (она)": ('Thematic vocabulary word from \'Jim Beam\'.', 'This is an elegant example of using \'Литвинова (она)\'.'),
    "Лихорадка (она)": ('болезненное состояние с высокой температурой.', 'У него началась сильная лихорадка.'),
    "Лихорадке (оно)": ('Thematic vocabulary word from \'Jim Beam\'.', 'This is an elegant example of using \'Лихорадке (оно)\'.'),
    "Малютка (она)": ('маленький ребёнок.', 'Малютка сладко спала в своей кроватке.'),
    "Наряд (он)": ('красивая одежда.', 'Она выбрала великолепный наряд для вечера.'),
    "Нервы (они)": ('волокна, передающие сигналы в мозг.', 'После тяжёлого дня её нервы были на пределе.'),
    "Огонь (он)": ('горящие газы, пламя.', 'Костёр горел ярким весёлым огнём.'),
    "Осень (она)": ('время года между летом и зимой.', 'Осенью листья деревьев становятся золотыми.'),
    "Плакат (он)": ('большой рисунок с текстом.', 'На стене висел яркий рекламный плакат.'),
    "Похожей (он)": ('Thematic vocabulary word from \'Vyshe Domov\'.', 'This is an elegant example of using \'Похожей (он)\'.'),
    "Предприпев (он)": ('Thematic vocabulary word from \'Vyshe Domov\'.', 'This is an elegant example of using \'Предприпев (он)\'.'),
    "Провода (она)": ('Thematic vocabulary word from \'Vyshe Domov\'.', 'This is an elegant example of using \'Провода (она)\'.'),
    "Провода (они)": ('металлические нити для передачи тока.', 'Электрические провода тянулись вдоль всей улицы.'),
    "Птенец (он)": ('детёныш птицы.', 'Маленький птенец выпал из гнезда.'),
    "Рисковать": ('подвергаться опасности.', 'Пожарные часто рискуют своей жизнью.'),
    "Сила (она)": ('физическая или моральная энергия.', 'В ней чувствуется огромная внутренняя сила.'),
    "Слезинка (она)": ('капля слёз.', 'Маленькая слезинка блеснула на её щеке.'),
    "Слишком (он)": ('Thematic vocabulary word from \'Vyshe Domov\'.', 'This is an elegant example of using \'Слишком (он)\'.'),
    "Сосед (он)": ('человек, живущий рядом.', 'Наш сосед всегда очень вежлив и приветлив.'),
    "Стакан (он)": ('сосуд для питья.', 'Он налил чистую воду в стакан.'),
    "Страшилка (она)": ('пугающая история.', 'Дети любят рассказать страшилки у костра.'),
    "Танцевать": ('двигаться под музыку.', 'Они любят танцевать на праздниках.'),
    "Танцплощадка (она)": ('Thematic vocabulary word from \'Jim Beam\'.', 'This is an elegant example of using \'Танцплощадка (она)\'.'),
    "Тревога (она)": ('чувство беспокойства, страха.', 'Её сердце было полно тревоги за сына.'),
    "Тюрьма (она)": ('место заключения.', 'Преступника отправили в тюрьму.'),
    "Упорядочения (она)": ('Thematic vocabulary word from \'Le Soleil Noir\'.', 'This is an elegant example of using \'Упорядочения (она)\'.'),
    "Цветком (он)": ('Thematic vocabulary word from \'Vyshe Domov\'.', 'This is an elegant example of using \'Цветком (он)\'.'),
    "Цветок (он)": ('часть растения, соцветие.', 'На окне расцвёл красивый красный цветок.'),
    "Целоваться (она)": ('Thematic vocabulary word from \'Jim Beam\'.', 'This is an elegant example of using \'Целоваться (она)\'.'),
    "Шоколадка (она)": ('плитка шоколада.', 'Мама подарила мне вкусную шоколадку.'),
    "Шутка (она)": ('весёлое высказывание, анекдот.', 'Его шутка рассмешила всех гостей за столом.'),

    "La classe": ("groupe d'élèves qui reçoivent ensemble le même enseignement, ou la salle.", "La classe de français est toujours très dynamique et interactive."),
    "L'histoire": ("récit d'événements passés, réels ou imaginaires.", "Elle adore raconter une histoire passionnante à ses enfants."),
    "La masse": ("grand nombre de personnes formant un ensemble, la foule.", "L'effet de masse pousse parfois les gens à agir sans réfléchir."),
    "Isoler": ("séparer quelqu'un d'un groupe, le mettre à l'écart.", "Il ne faut jamais isoler un élève qui se sent différent."),
    "L'idiot": ("personne qui manque d'intelligence ou de bon sens.", "C'est un comportement complètement idiot de se moquer des autres."),
    "Le bureau": ("meuble de travail ou pièce où l'on travaille.", "Elle passe ses journées devant son ordinateur au bureau."),
    "Le couloir": ("passage étroit qui dessert plusieurs pièces.", "Les enfants courent joyeusement dans le couloir de l'école."),
    "La rue": ("voie de circulation urbaine bordée de bâtiments.", "Il y a beaucoup de cafés agréables dans cette rue piétonne."),
    "Désespoir": ("état de détresse extrême, perte de tout espoir.", "Elle a surmonté son grand désespoir grâce au soutien de ses amis."),
    "La mémoire": ("faculté de conserver et de se rappeler des états de conscience passés.", "Elle a une excellente mémoire pour retenir les dates historiques."),
    "Prisonnière": ("personne privée de sa liberté, enfermée.", "Elle se sent prisonnière de ses propres pensées négatives."),
    "damaged": ("harmed or spoiled; not in perfect condition.", "The old guitar was damaged during the long journey."),
    "normal": ("conforming to a standard; usual, typical, or expected.", "It is completely normal to feel nervous before a big presentation."),
    "special": ("better, greater, or otherwise different from what is usual.", "She prepared a special dinner to celebrate her promotion."),
    "different": ("not the same as another or each other; unlike in nature.", "They have completely different opinions about the new movie."),
    "movies": ("motion pictures or films shown in a theater.", "They love to watch bad movies on a rainy Sunday afternoon."),
    "dancing": ("the activity of moving the body to music.", "Dancing is a beautiful way to express your emotions and joy."),
    "tonight": ("on the present or coming night.", "We are going to attend a live music concert tonight."),
    "choose": ("pick out or select someone or something as being the best.", "You must choose a career path that truly inspires you."),
    "right": ("morally good, justified, or acceptable; correct.", "She did the right thing by telling the truth to her friend."),
    "ocean": ("a very large expanse of sea, in particular, each of the main areas of saline water.", "The vast blue ocean stretched as far as the eye could see."),
    "lifeboat": ("a small boat kept on a ship for use in an emergency.", "The ship was equipped with enough lifeboats for everyone on board."),
    "sink": ("go down below the surface of something, especially in liquid.", "The heavy iron anchor will sink quickly to the bottom of the sea."),
    "captain": ("the person in command of a ship, aircraft, or team.", "The experienced captain guided the ship safely through the storm."),
    "weakest": ("lacking physical strength or resolve; the least strong.", "We must protect and support the weakest members of our community."),
    "fighting": ("the action of defeating or resisting something; struggling.", "Fighting for social justice requires courage and perseverance."),
    "storm": ("a violent disturbance of the atmosphere with strong winds and rain.", "The loud thunder and lightning of the storm woke me up."),
    "wrong": ("not correct or true; incorrect.", "He gave the wrong answer to the simple physics question."),
    "outfit": ("a set of clothes worn together, typically for a particular occasion.", "She picked out a beautiful and stylish outfit for the wedding."),
    "crowded": ("not clean or full of people, leaving little or no room.", "The popular shopping mall is always crowded on weekends."),
    "sexy": ("sexually attractive or appealing.", "She picked out a sexy dress for her weekend date."),
    "waxing": ("the process of removing hair from the skin using wax.", "Waxing can be a highly painful beauty procedure."),
    "plucking": ("pulling out hair or feathers with fingers or tweezers.", "Plucking eyebrows requires a steady hand and patience."),
    "spanx": ("tight-fitting undergarments designed to shape the body.", "She wore spanx underneath her elegant evening gown."),
    "work": ("activity involving mental or physical effort done in order to achieve a purpose or result.", "All that hard work finally paid off with a promotion."),
    # French
    "Le cœur": ("organe musculaire creux, symbole de la vie et des sentiments.", "Elle écoute toujours son cœur pour prendre des décisions."),
    "La machine": ("appareil ou ensemble d'appareils capables de transformer l'énergie.", "Cette usine utilise une machine très moderne pour trier."),
    "L'âme": ("principe de vie, de pensée et de sensibilité chez l'être humain.", "La musique classique touche directement l'âme des auditeurs."),
    "La blessure": ("lésion physique ou blessure morale causée par un événement.", "Sa blessure s'est refermée lentement après cette épreuve."),
    "L'espoir": ("sentiment qui porte à espérer, à attendre avec confiance.", "Nous devons toujours garder l'espoir d'un avenir meilleur."),
    "Le regret": ("sentiment douloureux d'avoir perdu quelque chose ou manqué d'agir.", "Il a exprimé un vif regret après son départ précipité."),
    "Le rêve": ("production de l'imagination, désir ou ambition.", "Réaliser son rêve d'enfant demande beaucoup de courage."),
    "Guérir": ("recouvrer la santé, faire disparaître une maladie ou une peine.", "Le temps finit toujours par guérir les peines d'amour."),
    "Sentir": ("percevoir par les sens, éprouver une ébauche d'émotion.", "Elle peut sentir la chaleur du soleil sur son visage."),
    "Le secret": ("chose qui doit être gardée cachée, connue de peu de personnes.", "Elle a promis de garder ce secret pour toujours."),
    "L'amour": ("sentiment d'affection, de tendresse et d'attirance.", "L'amour familial est un pilier indispensable de la vie."),
    "La tendresse": ("sentiment d'affection douce, de bienveillance attentive.", "Elle a accueilli le bébé avec une immense tendresse."),
    "Le silence": ("absence de bruit, état de celui qui ne parle pas.", "Un grand silence s'est installé dans la bibliothèque."),
    "Le doute": ("état de l'esprit qui hésite à se prononcer sur la vérité.", "Le doute s'est installé dans son esprit après cette réunion."),
    "La fidélité": ("qualité de quelqu'un qui est fidèle, constant dans ses sentiments.", "La fidélité de son chien est un exemple pour tous."),
    "Chuchoter": ("parler à voix très basse, sans vibrer les cordes vocales.", "Ils aiment chuchoter des secrets à la tombée de la nuit."),
    "Partager": ("diviser et distribuer, s'associer avec d'autres.", "Il est important de partager son repas avec les démunis."),
    "La patience": ("aptitude à attendre calmement, sans s'énerver.", "La patience est une vertu essentielle pour enseigner."),
    "Le baiser": ("action de toucher avec les lèvres en signe d'affection.", "Elle a donné un tendre baiser à son amie sur la joue."),
    "Le lien": ("ce qui unit ou attache des personnes ou des choses.", "Ils partagent un lien d'amitié très fort et solide."),
    "Le salut": ("action de saluer, de dire bonjour ou adieu.", "Il a fait un geste de salut de la main avant de partir."),
    "Le retour": ("action de revenir à son point de départ.", "Son retour au pays a été célébré par toute sa famille."),
    "La nostalgie": ("regret mélancolique d'un état ou d'un pays perdu.", "La nostalgie de son enfance l'inspire dans son écriture."),
    "Le temps": ("durée mesurable, météo.", "Le temps passe si vite quand on s'amuse ensemble."),
    "Le café": ("boisson chaude ou établissement où l'on boit.", "Prendre un bon café le matin est son rituel quotidien."),
    "Retrouver": ("revenir en possession de ce qu'on avait perdu.", "Elle est ravie de retrouver ses anciens camarades."),
    "Changer": ("rendre différent, modifier profondément.", "Il a décidé de changer de carrière pour être plus heureux."),
    "Le souvenir": ("survivance d'une impression passée dans la mémoire.", "Ce voyage restera un magnifique souvenir pour nous tous."),
    "L'ami": ("personne with whom l'on est lié par l'amitié.", "Un ami fidèle est un trésor précieux dans la vie."),
    "La gare": ("lieu d'arrêt des trains pour les voyageurs.", "Elle l'attend patiemment sur le quai de la gare."),
    "Le destin": ("puissance qui semble régler le cours de la vie.", "Elle croit fermement que son destin est entre ses mains."),
    "La complicité": ("entente profonde et spontanée entre des personnes.", "Leur complicité is évidente dès le premier regard."),
    "Le chemin": ("voie de terre, parcours ou direction à suivre.", "Elle a choisi un chemin professionnel très original."),
    "La voix": ("ensemble des sons produits par les cordes vocales.", "Sa voix douce et mélodieuse calme immédiatement les enfants."),
    "S'unir": ("se joindre pour agir ensemble, se marier.", "Les pays doivent s'unir pour protéger l'environnement."),
    "Briller": ("émettre de la lumière, se distinguer par son éclat.", "Les étoiles commencent à briller dans le ciel nocturne."),
    "La douceur": ("qualité de ce qui est doux, agréable et paisible.", "La douceur du climat méditerranéen attire les touristes."),
    "La promesse": ("engagement de faire ou de donner quelque chose.", "Elle a tenu sa promesse de l'aider à déménager."),
    "L'éternité": ("durée sans commencement ni fin, temps infini.", "Leurs œuvres d'art entreront dans l'éternité."),
    "L'hésitation": ("action d'hésiter, manque d'assurance.", "Son hésitation pendant le discours a montré son doute."),
    "La réponse": ("parole ou écrit par lequel on répond.", "Elle a envoyé sa réponse définitive par courriel."),
    "Le message": ("communication écrite ou orale transmise à quelqu'un.", "Il a reçu un message important de son collaborateur."),
    "Attendre": ("rester en un lieu jusqu'à ce que quelqu'un arrive.", "Ils doivent attendre le bus sous un abri de pluie."),
    "La frustration": ("état de déception causé par un désir non satisfait.", "La panne d'internet a causé une grande frustration."),
    "Le choix": ("action de choisir entre plusieurs possibilités.", "Faire un bon choix de vie demande de la réflexion."),
    "La clarté": ("qualité de ce qui est clair, facile à comprendre.", "La clarté de ses explications a été très appréciée."),
    "Jouer": ("se divertir, s'amuser à un jeu ou un instrument.", "Les enfants aiment jouer au football dans le parc."),
    "L'incertitude": ("état de ce qui n'est pas sûr, manque de certitude.", "L'incertitude économique inquiète les entrepreneurs."),
    "Le respect": ("sentiment de considération envers quelqu'un.", "Le respect mutuel est essentiel au sein d'une équipe."),
    "Le sexisme": ("attitude de discrimination basée sur le sexe.", "La loi combat activement le sexisme au travail."),
    "La dénonciation": ("action de dénoncer un fait ou un coupable.", "La dénonciation des abus a permis de changer les règles."),
    "La liberté": ("état d'une personne libre, indépendante.", "La liberté d'expression is un droit fondamental."),
    "L'égalité": ("rapport entre personnes ayant les mêmes droits.", "La loi garantit l'égalité des chances pour tous."),
    "Parler": ("s'exprimer par la parole, communiquer.", "Il est important de parler ouvertement de ses soucis."),
    "Le courage": ("force morale pour affronter le danger ou la peine.", "Il a eu le courage de surmonter cette épreuve."),
    "Le changement": ("action de changer, modification profonde.", "Ce changement de direction a relancé l'entreprise."),
    "L'attitude": ("pose du corps ou comportement de quelqu'un.", "Son attitude positive a encouragé toute l'équipe."),
    "La tolérance": ("respect de la liberté d'autrui, de ses opinions.", "La tolérance est le fondement de la vie en société."),
    "La paix": ("état d'absence de conflit, de tranquillité.", "Les négociations ont enfin ramené la paix dans la région."),
    "La diversité": ("caractère de ce qui est varié, divers.", "La diversité culturelle enrichit notre patrimoine."),
    "La dignité": ("respect de soi-même, noblesse de comportement.", "Il a affronté cette situation difficile avec dignité."),
    "L'harmonie": ("accord entre les éléments d'un ensemble.", "Ils vivent en parfaite harmonie avec leur environnement."),
    "Le combat": ("action de combattre, lutte pour une cause.", "Le combat pour l'égalité des droits continue de progresser."),
    "La profondeur": ("caractère de ce qui est profond, sérieux.", "La profondeur de ses écrits impressionne les critiques."),
    "Le mystère": ("ce qui est caché, incompréhensible.", "L'origine d'un mystère reste inexpliqué."),
    "La douleur": ("souffrance physique ou morale intense.", "Il a ressenti une vive douleur après sa chute brutale."),
    "S'élever": ("monter plus haut, progresser moralement.", "Il cherche toujours à s'élever au-dessus des conflits."),
    "La sensibilité": ("aptitude à ressentir des impressions, des émotions.", "Sa grande sensibilité artistique se voit dans ses toiles."),
    "La vérité": ("qualité de ce qui est vrai, conforme à la réalité.", "Dire la vérité est essentiel pour bâtir la confiance."),
    "L'invisible": ("ce qui ne peut pas être vu par les yeux.", "L'air que nous respirons est un élément invisible."),
    "L'immobilité": ("état de ce qui est immobile, sans mouvement.", "L'immobilité de la statue a surpris les passants."),
    "La solitude": ("état de celui qui vit seul ou isolé.", "Il apprécie la solitude de la campagne pour écrire."),
    "Figer": ("rendre immobile ou bloquer une situation.", "Le grand froid a fini par figer l'eau du lac."),
    "Le regard": ("action de regarder, expression des yeux.", "Son regard bienveillant m'a immédiatement rassuré."),
    "La nuit": ("temps qui s'écoule du coucher au lever du soleil.", "La nuit était particulièrement claire et étoilée."),
    "L'obscurité": ("absence de lumière, obscurité totale.", "Il a allumé une bougie pour éclairer l'obscurité."),
    "La tristesse": ("état de chagrin, de mélancolie.", "Une profonde tristesse se lisait sur son visage fatigué."),
    "Le matin": ("première partie de la journée, lever du jour.", "Elle adore courir dans le parc tôt le matin."),
    "L'insomnie": ("manque habituel ou accidentel de sommeil.", "Prendre une tisane chaude aide à lutter contre l'insomnie."),
    "Le soleil": ("étoile qui éclaire et réchauffe la Terre.", "Le soleil brille intensément au-dessus de la plage."),
    "La mélancolie": ("tristesse vague et douce, état d'esprit pensif.", "La musique douce favorise souvent la mélancolie."),
    "La perte": ("fait de perdre un objet, un avantage ou un proche.", "La perte de ses clés l'a mis très en retard."),
    "Le chagrin": ("douleur morale, tristesse profonde.", "Elle a surmonté son grand chagrin grâce à ses amis."),
    "Brûler": ("consommer par le feu, détruire ou réchauffer.", "Le feu commence à brûler dans la cheminée du salon."),
    "L'ombre": ("zone privée de lumière par un corps opaque.", "Nous nous sommes installés à l'ombre d'un grand arbre."),
    "Le vide": ("espace qui ne contient aucune matière.", "Il a ressenti un grand vide après la fin du projet."),
    "Paris": ("la capitale de la France, ville lumière.", "Paris est célèbre pour ses monuments et sa gastronomie."),
    "La beauté": ("qualité de ce qui plaît à l'œil ou à l'esprit.", "La beauté de ce paysage montagneux est incroyable."),
    "La fierté": ("sentiment de dignité, de satisfaction de soi.", "C'est avec une grande fierté qu'elle a reçu son prix."),
    "Le monument": ("ouvrage d'architecture ou de sculpture célèbre.", "La Tour Eiffel est le monument le plus visité de Paris."),
    "Se promener": ("faire une promenade pour le plaisir.", "Elle aime se promener le long de la Seine le soir."),
    "La joie": ("émotion agréable et intense, bonheur.", "La naissance de sa fille a rempli sa vie de joie."),
    "La rencontre": ("fait de se trouver en présence de quelqu'un.", "Leur rencontre fortuite a changé le cours de leur vie."),
    "Soutenir": ("maintenir, encourager ou aider quelqu'un.", "Il faut soutenir ses collègues dans les moments difficiles."),
    "La présence": ("fait d'être là, dans un lieu précis.", "Votre présence à cette cérémonie est très importante."),
    "La force": ("puissance physique ou morale.", "Elle a trouvé la force de surmonter cette rupture difficile."),
    "La passion": ("amour ou intérêt très vif pour quelque chose.", "Le chant choral est sa véritable passion depuis toujours."),
    "L'intensite": ("degré élevé de force, de puissance.", "L'intensité du spectacle a impressionné le public."),
    "Le triomphe": ("grande victoire, succès retentissant.", "Le concert s'est terminé par un triomphe absolu."),
    "Surmonter": ("vaincre un obstacle, surmonter ses craintes.", "Elle a réussi à surmonter sa timidité en public."),
    "La purete": ("qualité de ce qui est pur, sans mélange.", "La pureté de l'air de la montagne est remarquable."),
    "La jeunesse": ("période de la vie entre l'enfance et l'âge mûr.", "La jeunesse est une période d'apprentissage intense."),
    "Le premier": ("qui est avant tous les autres dans le temps.", "C'était son tout premier concert de musique classique."),
    "L'innocence": ("état de quelqu'un qui n'est pas coupable, pureté.", "L'innocence des enfants est une chose précieuse."),
    "Rêver": ("faire des rêves pendant son sommeil ou imaginer.", "Elle aime rêver de voyages lointains et d'aventures."),
    "La presentation": ("action de présenter quelqu'un ou quelque chose.", "La présentation du nouveau projet a été un grand succès."),
    "L'authenticite": ("qualité de ce qui est authentique, vrai.", "Le public apprécie l'authenticité de cet artiste."),
    "La vulnerabilite": ("caractère de ce qui est vulnérable, fragile.", "Admettre sa vulnérabilité demande une grande force morale."),
    "Le public": ("ensemble des personnes qui assistent à un spectacle.", "Le public a applaudi chaleureusement la chanteuse."),
    "Se donner": ("se consacrer entièrement à une tâche ou une cause.", "Il faut se donner à fond pour réussir ses examens."),
    "La scene": ("espace surélevé où se produisent les artistes.", "Elle est montée sur scène sous les applaudissements."),
    "L'artiste": ("personne qui crée des œuvres d'art ou se produit.", "Cet artiste peintre expose ses toiles dans le monde entier."),
    "L'ecoute": ("action d'écouter attentivement.", "La qualité d'écoute est essentielle dans une relation."),

    # English
    "Kernels": ("small, soft, or edible parts of a nut, seed, or corn; metaphorically, tiny bits.", "He only threw her a few kernels of affection, keeping her wanting more."),
    "Generalize": ("make a general or broad statement by inferring from specific cases.", "It is unfair to generalize about an entire group of people based on one person's actions."),
    "Maternal": ("relating to a mother, especially during pregnancy or shortly after childbirth.", "She felt a strong maternal instinct to protect her young children."),
    "Delusional": ("characterized by or holding idiosyncratic beliefs or impressions that are contradicted by reality.", "He was delusional to think he could win without practicing at all."),
    "Overzealous": ("too zealous; having or showing excessive enthusiasm or intense devotion.", "The overzealous fan followed the band to every single city on their tour."),
    "Insecurity": ("uncertainty or anxiety about oneself; lack of confidence.", "She worked hard to overcome her deep feeling of insecurity."),
    "Satire": ("the use of humor, irony, exaggeration, or ridicule to expose and criticize people's stupidity.", "The show is a brilliant satire of modern television culture."),
    "Condescending": ("having or showing a feeling of patronizing superiority.", "He spoke in a condescending tone that offended everyone in the room."),
    "Compulsive": ("resulting from or relating to an irresistible urge, especially one that is against one's conscious wishes.", "Her compulsive shopping habits led to significant financial difficulties."),
    "Greatness": ("the quality of being great, distinguished, or eminent.", "She achieved greatness in her musical career."),
    "Haunting": ("poignant and evocative; difficult to forget.", "The haunting melody of the cello lingered in the room."),
    "Surrender": ("give up or hand over after a struggle.", "They decided to surrender their weapons and end the conflict."),
    "Struggle": ("make forceful efforts to get free of restraint.", "He had to struggle to make his voice heard in the crowd."),
    "Release": ("allow or enable to escape from confinement.", "The band will release their new single next Friday."),
    "Echo": ("a sound or series of sounds caused by reflection.", "Her words had a strange echo in the empty hallway."),
    "Wilderness": ("an uncultivated, uninhabited, and inhospitable region.", "They went hiking in the beautiful mountain wilderness."),
    "Triumph": ("a great victory or achievement.", "Her performance was a major triumph for the opera house."),
    "Legacy": ("something left or handed down by a predecessor.", "The famous artist left a lasting artistic legacy."),
    "Grace": ("simple elegance or refinement of movement.", "She danced with incredible grace and poise."),
    "Dreaming": ("indulging in daydreams or fantasies.", "He was dreaming of a warm sunny beach in California."),
    "Preacher": ("a person who delivers sermons or religious discourses.", "The preacher delivered an inspiring sermon on Sunday morning."),
    "Winter": ("the coldest season of the year.", "The cold winter winds chilled us to the bone."),
    "Warm": ("having or showing a moderate degree of heat.", "A warm bowl of soup is perfect for a cold day."),
    "Safe": ("protected from or not exposed to danger or risk.", "Keep your important documents in a safe place."),
    "Sky": ("the region of the atmosphere visible from the earth.", "The blue sky was dotted with fluffy white clouds."),
    "Brown": ("of a color produced by mixing red, yellow, and black.", "The autumn leaves turned a beautiful shade of brown."),
    "Leave": ("go away from.", "They decided to leave the party before it got too late."),
    "Pray": ("address a solemn request or expression of thanks.", "They gather to pray for peace and prosperity."),
    "Sensation": ("a physical feeling or perception.", "The new roller coaster gives an exciting sensation of speed."),
    "Dual": ("consisting of two parts, elements, or aspects.", "He has a dual citizenship in both countries."),
    "Conflict": ("a serious disagreement or argument.", "The story explores the conflict between duty and personal desire."),
    "Reflect": ("throw back heat, light, or sound without absorbing it.", "The mirror will reflect your image perfectly."),
    "Personality": ("the combination of characteristics that form character.", "She has a bright and outgoing personality."),
    "Mirror": ("a reflective surface, now typically of glass.", "She looked in the mirror to adjust her scarf."),
    "Opposite": ("having a position on the other or further side.", "They live on the opposite side of the street."),
    "Dialogue": ("conversation between two or more people.", "The play is filled with witty and engaging dialogue."),
    "In harmony": ("consistent or in agreement with each other.", "They live in perfect harmony with nature."),
    "Acceptance": ("the action of consenting to receive or undertake.", "Her acceptance of the job offer was a major milestone."),
    "Deceptive": ("giving an appearance or impression different from the true one.", "The calm sea can be highly deceptive during a storm."),
    "Gaze": ("look steadily and intently.", "He would gaze at the stars for hours in the backyard."),
    "Disguise": ("give a new appearance to hide identity.", "She wore a wig as a clever disguise."),
    "Regret": ("feel sad, repentant, or disappointed over.", "He expressed deep regret for his past mistakes."),
    "Warning": ("a statement or event indicating possible danger.", "The loud siren served as a warning to evacuate."),
    "Lure": ("tempt a person or animal to do something.", "The sweet smell of pie would lure us into the kitchen."),
    "Painful": ("causing physical or mental pain.", "It was a painful memory that she preferred to forget."),
    "Obsession": ("an unhealthy preoccupation with someone or something.", "His obsession with cleanliness became a bit extreme."),
    "Illusion": ("a thing that is likely to be wrongly perceived.", "The oasis in the desert was just an optical illusion."),
    "Trust": ("firm belief in the reliability or truth.", "Trust is the foundation of any strong relationship."),
    "Confusion": ("lack of understanding; uncertainty.", "The sudden change in schedule caused a lot of confusion."),
    "Chaotic": ("in a state of complete confusion and disorder.", "The busy city market was loud and chaotic."),
    "Optimism": ("hopefulness and confidence about the future.", "Her natural optimism kept her going through tough times."),
    "Recovery": ("a return to a normal state of health.", "We wish him a speedy recovery after his surgery."),
    "Anxiety": ("a feeling of worry, nervousness, or unease.", "He felt a bit of anxiety before his big presentation."),
    "Survive": ("continue to live or exist in spite of danger.", "They had to adapt quickly to survive in the wild."),
    "Connection": ("a relationship in which ideas are linked.", "There is a strong connection between music and memory."),
    "Sanity": ("the ability to think and behave in a rational manner.", "Taking long walks helped her preserve her mental sanity."),
    "Hope": ("a feeling of expectation and desire for a certain thing.", "We must never lose hope for a better future."),
    "Abandonment": ("the action of abandoning or being abandoned.", "The old castle stood in a state of absolute abandonment."),
    "Solitude": ("the state or situation of being alone.", "He enjoyed the quiet solitude of his study room."),
    "Deception": ("the action of deceiving someone.", "The plot of the movie is a masterclass in deception."),
    "Desperation": ("a state of despair, resulting in rash behavior.", "In her desperation, she decided to seek professional help."),
    "Coldness": ("the quality of being cold or unfriendly.", "His sudden coldness made her feel very uncomfortable."),
    "Exclusion": ("the process of excluding or being excluded.", "The strict rules resulted in the exclusion of several players."),
    "Longing": ("a yearning desire.", "She felt a deep longing for her hometown."),
    "Betrayal": ("the action of betraying trust or a person.", "The unexpected betrayal shattered their long friendship."),
    "Casualty": ("a person killed or injured in an accident.", "There was not a single casualty in the minor incident."),
    "Scars": ("a mark left on the skin or within a person's mind.", "The physical and mental scars of the war healed slowly."),
    "Aftermath": ("the consequences or aftereffects of a significant event.", "They worked hard to rebuild the town in the aftermath of the storm."),
    "Anger": ("a strong feeling of annoyance or displeasure.", "He struggled to control his rising anger during the argument."),
    "Survival": ("the state of continuing to live or exist.", "Survival in the desert requires careful water management."),
    "Devastation": ("great destruction or damage.", "The hurricane left a trail of severe devastation."),
    "Reconciliation": ("the restoration of friendly relations.", "They reached a beautiful reconciliation after many years."),
    "Change": ("make or become different.", "The seasons change gradually throughout the year."),
    "Isolation": ("the state of being separate from others.", "The remote cabin offered a perfect sense of isolation."),
    "Nostalgia": ("a sentimental longing or wistful affection.", "Listening to old records filled him with warm nostalgia."),
    "Suburban": ("relating to or characteristic of a suburb.", "They lived in a quiet, peaceful suburban neighborhood."),
    "Gravity": ("the force that attracts a body toward the earth.", "Gravity keeps our feet firmly planted on the ground."),
    "Disconnect": ("an instance of breaking contact or connection.", "There was a temporary disconnect in our phone line."),
    "Melancholy": ("a feeling of pensive sadness.", "A gentle melancholy settled over the autumn garden."),
    "Expectation": ("a strong belief that something will happen.", "They met every high expectation of their teachers."),
    "Routine": ("a sequence of actions regularly followed.", "Establishing a morning routine can boost your productivity."),
    "Reflection": ("the throwing back of light, heat, or sound.", "The quiet lake offered a beautiful reflection of the trees."),

    # New vocabulary definitions and examples for added songs
    "America": ("a major country in North America representing wealth, influence, and consumer culture.", "He decided to travel across America to experience its vast landscapes."),
    "grocery": ("relating to the store that sells food and household supplies.", "She bought fresh vegetables and bread at the local grocery store."),
    "stage": ("a raised platform where actors, singers, or speakers perform.", "The young actor was thrilled to step onto the grand stage for the first time."),
    "cage": ("a structure of bars or wires in which birds or animals are confined, or any restrictive space.", "The majestic lion paced back and forth inside its secure cage."),
    "plan": ("a detailed proposal for doing or achieving something.", "They formulated a strategic plan to launch their new eco-friendly product."),
    "ready": ("fully prepared or in a fit state for an activity or action.", "After weeks of hard work, they were finally ready to present their project."),
    "crime": ("an action or activity that is considered extremely wrong, harmful, or illegal.", "Leaving all that garbage in the pristine forest is an absolute crime."),
    "shaving": ("the act of cutting hair from the skin using a razor.", "His daily morning routine always included shaving and drinking coffee."),
    "beautiful": ("pleasing the senses or mind aesthetically.", "The sunset over the mountain was one of the most beautiful sights she had ever seen."),
    "stranger": ("a person whom one does not know or is unfamiliar with.", "It is wise to be cautious when speaking with a complete stranger."),
    "dangerous": ("able or likely to cause harm or injury.", "Exploring the old, abandoned mine without safety gear is highly dangerous."),
    "game": ("an activity that one engages in for amusement, strategy, or fun.", "Chess is a classic game of skill, patience, and deep foresight."),
    "hotel": ("an establishment providing accommodation, meals, and other services for travelers.", "They booked a cozy room at a historic hotel near the city center."),
    "alone": ("having no anyone else present; on one's own.", "She preferred to walk alone in the quiet forest to clear her mind."),
    "settle": ("resolve or reach an agreement about, or compromise on something.", "They decided to settle their minor differences and work together as a team."),
    "nice": ("pleasant, agreeable, or satisfactory.", "It was a nice and warm afternoon, perfect for a walk in the park."),
    "stable": ("not likely to change, fail, or give way; firmly established.", "After months of volatility, the economic situation has finally become stable."),
    "true": ("in accordance with fact or reality; loyal and faithful.", "A true friend will always support you through difficult times."),
    "search": ("an act of searching for someone or something.", "The rescue team conducted a thorough search for the lost hikers."),
    "person": ("a human being regarded as an individual.", "She is a very kind and generous person who loves helping others."),
    "donate": ("give money or goods for a good cause, for example to a charity.", "They decided to donate a portion of their monthly income to the local shelter."),
    "poor": ("lacking sufficient money to live at a standard considered comfortable or normal.", "The community organized a food drive to support poor families in the area."),
    "friendly": ("kind and pleasant; behaving in a helpful or supporting way.", "The new neighbors gave us a very warm and friendly welcome."),
    "nicest": ("the most pleasant, kind, or agreeable.", "That was the nicest compliment she had received in a very long time."),
    "Covina": ("a city in California, used here as a symbol of suburban life.", "He spent his childhood years living in the quiet suburbs of Covina."),
    "lonely": ("sad because one has no friends or company.", "She felt a bit lonely living in the giant, unfamiliar city."),
    "lies": ("false statements made with the intent to deceive.", "Basing a friendship on lies will eventually lead to disappointment."),
    "leave": ("go away from a place or person.", "They had to leave the cozy restaurant because it was closing."),
    "find": ("discover or perceive by chance or after deliberate search.", "It takes time to find a career path that truly inspires you."),
    "depression": ("a state of feeling sad, down, or lacking motivation.", "Regular physical exercise can help alleviate mild symptoms of depression."),
    "wine": ("an alcoholic drink made from fermented grape juice.", "They enjoyed a glass of red wine with their delicious dinner."),
    "stone": ("a hard, solid, nonmetallic mineral matter of which rock is made.", "The ancient castle was built entirely of heavy, grey stone."),
    "crying": ("shedding tears, especially as an expression of distress or pain.", "The crying child was quickly comforted by her mother."),
    "bathroom": ("a room containing a toilet and sink, and typically also a bathtub or shower.", "He asked for directions to the nearest bathroom in the museum."),
    "dirty": ("not clean; covered or marked with an unclean substance.", "The dirty dishes were piled high in the kitchen sink."),
    "apartment": ("a suite of rooms forming one residence, typically in a building.", "They recently moved into a spacious apartment on the fifth floor."),
    "pictures": ("paintings, drawings, or photographs on a wall or screen.", "The walls of her office were decorated with beautiful pictures of nature."),
    "wash": ("clean with water and, typically, soap or detergent.", "It is important to wash your hands thoroughly before preparing food."),
    "together": ("with or in proximity to another person or people.", "They worked together to complete the challenging puzzle."),
    "support": ("give assistance, approval, or comfort to someone.", "We must always support our friends when they face difficult challenges."),
    "journey": ("an act of traveling from one place to another.", "Learning a new language is a beautiful and rewarding journey."),
    "rivalry": ("competition for the same objective or for superiority in the same field.", "There was a friendly rivalry between the two talented musicians."),
    "unity": ("the state of being united or joined as a whole.", "The community demonstrated incredible unity during the crisis."),
    "ruined": ("completely spoiled, damaged, or destroyed.", "Our outdoor picnic plans were ruined by the sudden, heavy downpour."),
    "ring": ("a small circular band, typically of precious metal, worn on a finger.", "He gave her a beautiful silver ring as a symbol of their friendship."),
    "mess": ("a dirty or untidy state of things or of a place.", "The children left a huge mess of toys in the living room."),
    "strife": ("angry or bitter disagreement over fundamental issues.", "The continuous internal strife within the organization led to its collapse."),
    "dying": ("gradually ceasing to exist, function, or live.", "The dying embers of the campfire cast a warm, orange glow."),
    "hang": ("spend time relaxing or socializing with friends.", "They loved to hang out at the local café after their classes."),
    "pressure": ("continuous physical or mental force or influence.", "She felt a lot of pressure to perform well in her final exams."),
    "dates": ("social or romantic appointments or engagements.", "They went on several pleasant dates before deciding to be exclusive."),
    "conversations": ("talks, especially informal ones, between two or more people.", "They had many interesting conversations about philosophy and art."),
    "restaurant": ("a place where people pay to sit and eat meals that are cooked on the premises.", "They celebrated their anniversary at an elegant Italian restaurant."),
    "villain": ("a character whose evil actions or motives are important to the plot.", "He played the role of the dramatic villain in the school play."),
    "glory": ("high renown or honor won by notable achievements.", "The victorious athletes returned home to share in the glory."),
    "witch": ("a woman thought to have magic powers, especially evil ones.", "The legend tells of a mysterious witch who lived in the deep dark woods."),
    "castle": ("a large building, typically of the medieval period, fortified against attack.", "The historic castle stood proudly on top of the steep hill."),
    "abusing": ("using something or some power to bad effect or for a bad purpose.", "Abusing your authority will quickly lose you the respect of your peers."),
    "feeling": ("an emotional state or reaction.", "A warm feeling of relief washed over him when he heard the news."),
    "supposed": ("generally assumed or expected to be or do something.", "We are supposed to submit our assignments by Friday evening."),
    "number": ("an arithmetical value, or representing position.", "Seven has always been her absolute favorite lucky number."),
    "beating": ("pulsing, throbbing, or striking repeatedly.", "He could feel his heart beating fast as he stepped on stage."),
    "hide": ("put or keep out of sight; prevent from being seen.", "It is difficult to hide your true emotions from those who know you well."),
    "done": ("finished or completed.", "Once the research is done, we can begin drafting the final report."),
    "direction": ("a course along which someone or something moves, or guidance.", "The signposts provided clear direction through the complex maze."),
    "affection": ("a gentle feeling of liking or liking someone or something.", "The loyal dog showed immense affection toward its friendly owner."),
    "face": ("the front part of a person's head, or to confront.", "We must face our greatest challenges with courage and determination."),
    "place": ("a particular position, point, or area.", "The quiet park near her house is her favorite place to read books."),
    "office": ("a room or building where people work.", "Their modern office features large windows and open workspaces."),
    "mysterious": ("difficult or impossible to understand, explain, or identify.", "A mysterious envelope was left on his desk early this morning."),
    "tribe": ("a social division or close-knit group of people.", "They felt like a united tribe, supporting each other unconditionally."),
    "investigate": ("carry out a systematic or formal inquiry to discover facts.", "The detectives were assigned to investigate the mysterious occurrence."),
    "trouble": ("difficulty or problems.", "They ran into some unexpected engine trouble during their road trip."),
    "diagnosis": ("the identification of the nature of an illness or other problem by examination of the symptoms.", "The doctor provided a clear diagnosis after reviewing the test results."),
    "neurosis": ("a relatively mild mental illness that is not caused by organic disease, involving symptoms of stress.", "He suffered from a mild neurosis that made him overly anxious about cleanliness."),
    "label": ("a classifying phrase or name applied to a person or thing.", "She refused to let any simple label define her complex personality."),
    "free": ("able to act or be done as one wishes; not under the control of another.", "They felt completely free as they hiked through the wide open fields."),
    "problems": ("matters or situations regarded as unwelcome or harmful and needing to be dealt with.", "Working together is the best way to solve complex societal problems."),
    "perfect": ("having all the required or desirable elements, qualities, or characteristics; as good as it is possible to be.", "The spring weather was absolutely perfect for an outdoor picnic."),
    "screen": ("a flat panel on an electronic device on which images or data are displayed.", "She spent hours staring at the computer screen, writing code."),
    "insecurities": ("feelings of uncertainty or anxiety about oneself; lack of confidence.", "We all carry some personal insecurities that we work to overcome."),
    "tears": ("drops of clear salty liquid secreted from the eyes when crying.", "Tears of joy streamed down her face when she won the championship."),
    "love": ("an intense feeling of deep affection.", "Their shared love for classical music brought them together."),
    "focus": ("the center of interest or activity.", "Our primary focus should be on delivering high-quality education."),
    "drama": ("an exciting, emotional, or unexpected series of events or set of circumstances.", "They wanted a peaceful life, completely free of any unnecessary drama."),
    "explore": ("travel in or through an unfamiliar area in order to learn about it.", "They plan to explore the beautiful historic towns of Italy this summer."),
    "door": ("a hinged, sliding, or revolving barrier at the entrance to a room or building.", "She knocked gently on the wooden door before entering the office."),
    "lawyer": ("a person who practices or studies law; an attorney.", "The experienced lawyer gave them excellent advice on their business contract."),
    "greedy": ("having or showing an intense and selfish desire for something, especially wealth or power.", "The greedy corporation prioritizes short-term profits over safety."),
    "stress": ("a state of mental or emotional strain or tension resulting from adverse or demanding circumstances.", "Learning breathing techniques can help you manage daily stress."),
    "ceiling": ("the upper interior surface of a room or other similar compartment.", "The old church featured a magnificent ceiling decorated with frescoes."),
    "guidance": ("advice or information aimed at resolving a problem or difficulty, especially as given by someone in authority.", "The young students benefited greatly from their mentor's wise guidance."),
    "crowded": ("full of people, leaving little or no room.", "The popular beach was very crowded on the warm summer weekend."),
    "politician": ("a person who is professionally involved in politics, especially as a holder of an elected office.", "The local politician promised to improve public parks and libraries."),
    "smiling": ("having a smile on one's face, showing pleasure or affection.", "The smiling teacher greeted her new class with immense enthusiasm."),
    "everything": ("all things, or all things of a particular class.", "They lost everything in the fire but were grateful to be safe."),
    "deal": ("an agreement entered into by two or more parties for their mutual benefit, or a situation.", "Finding a nice apartment in this city for a reasonable price is a great deal."),
    "heal": ("become sound or healthy again.", "Proper rest and nutrition will help your body heal much faster."),
    "day": ("a period of twenty-four hours, or the time of light.", "It was a beautiful day to spend outdoors in the countryside."),
    "shame": ("a painful feeling of humiliation or distress caused by the consciousness of wrong or foolish behavior.", "There is absolutely no shame in asking for help when you need it."),
    "better": ("of a more excellent or effective type or quality.", "She was feeling much better after taking a short, peaceful nap."),
    "motion": ("the action or process of moving or being moved.", "The steady, rhythmic motion of the train put the baby to sleep."),
    "cool": ("of or at a fairly low temperature, or fashionably attractive.", "He wore a very cool leather jacket that suited him perfectly."),
    "hair": ("any of the fine threadlike strands that grow from the skin.", "The gentle spring breeze blew softly through her long hair."),
    "care": ("the provision of what is necessary for the health, welfare, maintenance, and protection.", "The rare plants require specialized care and attention to thrive."),
    "heroes": ("people admired for their courage, outstanding achievements, or noble qualities.", "The brave firefighters were celebrated as national heroes."),
    "awake": ("not asleep.", "He was still wide awake at midnight, listening to the gentle rain."),
    "mistake": ("an action or judgment that is misguided or wrong.", "It is completely normal to make a mistake when learning something new."),
    "decision": ("a conclusion or resolution reached after consideration.", "Making an important life decision requires careful thought."),
    "fight": ("a struggle or confrontation, or to strive.", "They decided to fight for their rights and clean environment."),
    "answers": ("solutions to a problem, or replies to questions.", "The physics professor provided clear answers to our complex questions."),

    # Russian
    "Высота (она)": ("пространство, находящееся высоко над землей.", "Самолёт набрал огромную высоту за несколько минут."),
    "Дом (он)": ("здание, жилое помещение, семейный очаг.", "Мы вернулись в наш уютный загородный дом вечером."),
    "Полёт (он)": ("процесс движения в воздухе.", "Полёт птицы в ясном небе выглядел очень грациозно."),
    "Мечта (она)": ("заветное желание, предмет стремлений.", "Его главная мечта — поехать в кругосветное путешествие."),
    "Свобода (она)": ("независимость, отсутствие ограничений.", "Каждый человек имеет право на личную свободу."),
    "Юность (она)": ("период жизни между детством и зрелостью.", "В юности мы совершаем много безумных и ярких поступков."),
    "Ветер (он)": ("движение воздуха в горизонтальном направлении.", "Холодный ветер с моря дул нам прямо в лицо."),
    "Город (он)": ("крупный населенный пункт.", "Этот старинный европейский город очаровал нас сразу."),
    "Небо (оνο)": ("пространство над землей, атмосфера.", "Ночное небо было усыпано миллионами ярких звёзд."),
    "Взгляд (он)": ("направление глаз, выражение глаз.", "Ее добрый взгляд сразу внушил мне доверие."),
    "Секрет (он)": ("тайна, то, что скрывается от других.", "Она пообещала сохранить мой секрет в тайне."),
    "Мама (она)": ("женщина по отношению к своим детям.", "Моя мама всегда поддерживает меня во всех начинаниях."),
    "Тайна (она)": ("нечто скрываемое от других, неразгаданное.", "Эта старая легенда хранит в себе мрачную тайну."),
    "Улыбка (она)": ("мимика лица, показывающая расположение.", "Ее теплая улыбка мгновенно подняла мне настроение."),
    "Забота (она)": ("внимание, уход, беспокойство о ком-то.", "Родительская забота очень важна для развития ребенка."),
    "Любовь (она)": ("глубокое чувство привязанности и симпатии.", "Их крепкая любовь выдержала испытание временем."),
    "Доверие (оно)": ("уверенность в честности и верности.", "Взаимное доверие — это основа крепкой дружбы."),
    "Шёпот (он)": ("тихая речь без участия голосовых связок.", "Они переговаривались шёпотом, чтобы не шуметь в библиотеке."),
    "Правда (она)": ("то, что соответствует действительности.", "Всегда нужно говорить правду, какой бы сложной она ни была."),
    "Детство (оно)": ("период жизни человека от рождения до юности.", "Моё детство было очень счастливым и беззаботным."),

    # Italian
    "L'uomo": ("essere umano di sesso maschile o umanità.", "L'uomo ha sempre cercato di comprendere i misteri della natura."),
    "La passione": ("forte sentimento di amore o entusiasmo.", "La musica classica è la sua più grande passione fin da bambina."),
    "Il fascino": ("qualità che attrae e seduce irresistibilmente.", "Venezia è una città ricca di fascino e di storia."),
    "La seduzione": ("l'azione di sedurre, attrarre con eleganza.", "Il cinema italiano ha sempre usato la seduzione come tema forte."),
    "Il cuore": ("organo del corpo, simbolo dei sentimenti.", "Ascolta sempre il tuo cuore quando devi fare una scelta difficile."),
    "Amare": ("provare un profondo sentimento di affetto o attrazione.", "Amare significa rispettare la libertà dell'altra persona."),
    "Il segreto": ("cosa che non deve essere rivelata ad altri.", "Ha promesso di custodire questo segreto per tutta la vita."),
    "La bellezza": ("qualità di ciò che è bello e piacevole da vedere.", "La bellezza del tramonto sul mare ci ha lasciati senza parole."),
    "Il gioco": ("attività di svago, scherzo o divertimento.", "Il calcio è il gioco di squadra più amato in Italia."),
    "Il sorriso": ("espressione del viso che mostra gioia o affetto.", "Accoglie sempre i suoi ospiti con un sorriso caloroso."),
    "La lacrima": ("goccia di liquido prodotta dalle ghiandole lacrimali.", "Una singola lacrima le rigò il viso per la commozione."),
    "Il pianto": ("azione di piangere, sfogo di dolore o gioia.", "Il pianto del bambino ha attirato l'attenzione della madre."),
    "Il dolore": ("sofferenza fisica o morale intensa.", "Il dolore della perdita si attenua lentamente con il tempo."),
    "Il rimpianto": ("sentimento di rammarico per qualcosa che si è perso.", "Non ha alcun rimpianto per le scelte fatte in passato."),
    "Il silenzio": ("assenza di rumore o astensione dal parlare.", "Un grande silenzio è calato nella stanza d'esame."),
    "Soffrire": ("provare dolore fisico o morale.", "Nessuno dovrebbe soffrire per l'indifferenza altrui."),
    "L'addio": ("saluto definitivo o di lunga durata.", "Si sono scambiati un triste addio sulla banchina della stazione."),
    "La speranza": ("sentimento di fiduciosa attesa di un bene futuro.", "La speranza è l'ultima a morire nei momenti difficili."),
    "La fine": ("conclusione o parte terminale di qualcosa.", "Tutti aspettavano con ansia la fine del lungo discorso."),
    "La solitudine": ("stato di chi vive solo o si sente isolato.", "Apprezza la solitudine della montagna per concentrarsi."),
    "L'estate": ("la stagione più calda dell'anno.", "In estate adoro passare le mie giornate in spiaggia."),
    "La spiaggia": ("riva sabbiosa del mare o di un lago.", "La spiaggia era deserta e silenziosa all'alba."),
    "Il mare": ("grande distesa di acqua salata.", "Il mare d'inverno ha un fascino malinconico unico."),
    "Il sole": ("la stella che illumina e riscalda la Terra.", "Il sole brilla alto nel cielo estivo."),
    "Il viaggio": ("il trasferirsi da un luogo a un altro per diporto.", "Il viaggio in treno attraverso l'Europa è stato stupendo."),
    "Il vento": ("movimento d'aria nell'atmosfera.", "Un vento fresco soffiava tra i rami degli alberi."),
    "La libertà": ("stato di chi è libero e indipendente.", "La libertà di stampa è un diritto fondamentale in democrazia."),
    "Ricominciare": ("cominciare di nuovo una cosa.", "Non è mai troppo tardi per ricominciare un nuovo percorso."),
    "Il calore": ("temperatura elevata, calore affettivo.", "Il calore della sua famiglia lo ha aiutato a guarire."),
    "L'orizzonte": ("linea circolare in cui il cielo sembra toccare la terra.", "Il sole è scomparso lentamente dietro l'orizzonte."),
    "La compagnia": ("stato di chi è insieme ad altri.", "Preferisco viaggiare in compagnia dei miei migliori amici."),
    "Il futuro": ("tempo che deve ancora venire.", "Nessuno può prevedere con certezza cosa riserverà il futuro."),
    "Il destino": ("forza misteriosa che regola la vita umana.", "Ha deciso di prendere in mano le redini del proprio destino."),
    "La promessa": ("impegno formale di fare o dare qualcosa.", "Ha mantenuto la promessa di scrivergli ogni settimana."),
    "Proteggere": ("difendere qualcuno o qualcosa da un pericolo.", "Dobbiamo proteggere la natura per le future generazioni."),
    "Il cammino": ("strada o percorso da compiere, progresso.", "Il cammino verso l'uguaglianza è ancora lungo ma necessario."),
    "La fedeltà": ("qualità di chi è fedele e costante.", "La fedeltà del suo amico è stata una grande consolazione."),
    "L'attesa": ("l'atto di attendere l'arrivo di qualcuno o qualcosa.", "L'attesa dei risultati dell'esame è stata molto stressante."),
    "L'unione": ("il congiungersi insieme, legame.", "L'unione fa la forza nei momenti di grande difficoltà."),
    "L'amore": ("profondo sentimento di affetto o attrazione.", "L'amore per l'arte lo accompagna da tutta la vita."),
    "La scintilla": ("minuscolo frammento di materia incandescente.", "Una piccola scintilla può dare origine a un grande fuoco."),
    "Il bacio": ("il toccare con le labbra in segno d'affetto.", "Si sono scambiati un tenero bacio prima di salutarsi."),
    "Il battito": ("colpo ritmico, battito del cuore.", "Sentiva il battito accelerato del cuore per l'emozione."),
    "Il soffio": ("leggera corrente d'aria prodotta dalla bocca.", "Un soffio di vento ha spento la candela sul tavolo."),
    "Svanire": ("dileguarsi o scomparire rapidamente.", "I dubbi sono iniziati a svanire dopo le sue spiegazioni."),
    "Il ricordo": ("immagine conservata nella memoria.", "Conservo un bellissimo ricordo della nostra infanzia insieme."),
    "L'infinito": ("spazio o tempo senza limiti.", "Il cielo stellato ci fa percepire il senso dell'infinito."),
    "Il raggio": ("fascio sottile di luce.", "Un raggio di sole è penetrato attraverso la finestra."),
    "La luce": ("radiazione elettromagnetica che illumina.", "La luce del mattino rende tutto più luminoso."),
    "La gioia": ("intensa emozione di felicità e allegria.", "La nascita del nipotino ha portato una grande gioia a tutti."),
    "Riscaldare": ("rendere caldo o tiepido.", "Una tazza di tè caldo aiuta a riscaldare il corpo d'inverno."),
    "La java": ("la danza o il divertimento.", "La java è una danza tradizionale molto vivace."),
    "La felicità": ("stato di totale benessere e soddisfazione.", "La felicità risiede spesso nelle cose semplici della vita."),
    "La natura": ("il mondo fisico con tutti i suoi esseri.", "Dobbiamo imparare a vivere in armonia con la natura."),
    "Il mattino": ("la prima parte del giorno.", "Il mattino ha l'oro in bocca, dice un vecchio proverbio."),

    # Spanish
    "La libertad": ("estado o facultad del que es libre y no está sometido.", "La libertad es el valor más preciado de la humanidad."),
    "El amor": ("sentimiento de afecto y atracción hacia alguien.", "El amor de una madre es incondicional y eterno."),
    "El orgullo": ("sentimiento de satisfacción y dignidad propia.", "Sintió un gran orgullo al recibir su título universitario."),
    "La aceptación": ("acción de aceptar o admitir algo.", "La aceptación de uno mismo es el primer paso para la felicidad."),
    "Sin prejuicios": ("libre de opiniones preconcebidas.", "Debemos juzgar a las personas por sus actos, sin prejuicios."),
    "Caminar": ("andar de un lugar a otro dando pasos.", "Le encanta caminar por el parque todas las mañanas."),
    "La valentía": ("esfuerzo, decisión y valor para afrontar peligros.", "Demostró una gran valentía al defender sus principios."),
    "El corazón": ("órgano vital, símbolo de los sentimientos.", "Siempre debemos escuchar lo que nos dicta el corazón."),
    "El respeto": ("consideración acompañada de admiración por alguien.", "El respeto mutuo es la base de cualquier relación sana."),
    "La diversidad": ("variedad o abundancia de cosas distintas.", "La diversidad cultural enriquece a nuestra sociedad."),
    "La distancia": ("espacio o intervalo de lugar o de tiempo.", "La distancia no es un obstáculo para la verdadera amistad."),
    "El olvido": ("pérdida de memoria o cese del recuerdo.", "Sus palabras cayeron en el olvido con el paso del tiempo."),
    "La ausencia": ("falta de presencia de alguien en un lugar.", "Su ausencia se hizo notar durante la reunión familiar."),
    "El dolor": ("sufrimiento físico o moral.", "El dolor de la pérdida se cura lentamente con paciencia."),
    "Alejarse": ("distanciar o poner lejos a alguien.", "Decidió alejarse de las redes sociales para descansar."),
    "El recuerdo": ("imagen del pasado que se conserva en la memoria.", "Tengo un hermoso recuerdo de nuestras vacaciones juntos."),
    "La tristeza": ("estado de ánimo melancólico y afectuoso.", "Sentía una profunda tristeza al despedirse de sus amigos."),
    "El silencio": ("ausencia de ruido o de habla.", "Un gran silencio inundó la sala de exposiciones."),
    "El frío": ("temperatura baja, falta de calidez.", "El frío del invierno nos obliga a abrigarnos bien."),
    "La despedida": ("palabras o gestos con que se dice adiós.", "La despedida en el aeropuerto fue muy emotiva."),
    "El verano": ("la estación más calurosa del año.", "En verano pasamos casi todo el día en la playa."),
    "La juventud": ("período de la vida entre la infancia y la edad madura.", "La juventud es una etapa de aprendizaje y descubrimientos."),
    "La nostalgia": ("sentimiento de pena por la lejanía o pérdida.", "La música antigua me llena de una agradable nostalgia."),
    "El cambio": ("action de cambiar o modificar algo.", "Este cambio de rutina le ha sentado muy bien a su salud."),
    "El sol": ("la estrella que ilumina nuestro sistema planetario.", "El sol brilla con fuerza sobre el campo de trigo."),
    "La playa": ("ribera arenosa del mar o de un río.", "La playa estaba desierta y pacífica a primera hora."),
    "El amigo": ("persona con la que se tiene amistad.", "Un amigo de verdad te apoya en los momentos más difíciles."),
    "Sonreír": ("hacer el gesto de la sonrisa en señal de alegría.", "Es importante sonreír a pesar de las dificultades."),
    "El futuro": ("tiempo que está por venir.", "El futuro del planeta depende de nuestras acciones de hoy."),

    # Greek
    "Η αγάπη": ("βαθύ συναίσθημα στοργής και αφοσίωσης.", "Η αγάπη της μητέρας είναι το πιο δυνατό πράγμα στον κόσμο."),
    "Το φιλί": ("το άγγιγμα με τα χείλη σε ένδειξη αγάπης.", "Της έδωσε ένα γλυκό φιλί στο μάγουλο πριν φύγει."),
    "Ο έρωτας": ("το έντονο συναίσθημα έλξης για κάποιο πρόσωπο.", "Ο έρωτας μπορεί να αλλάξει ολόκληρη τη ζωή μας."),
    "Το δάκρυ": ("σταγόνα υγρού που τρέχει από τα μάτια.", "Ένα δάκρυ συγκίνησης κύλησε στο πρόσωπό της."),
    "Ο χωρισμός": ("η πράξη του να χωρίζει κανείς, το τέλος μιας σχέσης.", "Ο χωρισμός είναι πάντα μια δύσκολη και επίπονη διαδικασία."),
    "Η ελπίδα": ("η προσδοκία για κάτι καλό στο μέλλον.", "Πρέπει πάντα να έχουμε ελπίδα για ένα καλύτερο αύριο."),
    "Το λιμάνι": ("προστατευμένο μέρος για πλοία, μεταφορικά το καταφύγιο.", "Η οικογένειά του είναι το απάνεμο λιμάνι του."),
    "Η αγκαλιά": ("το άνοιγμα των χεριών γύρω από κάποιον.", "Μια ζεστή αγκαλιά μπορεί να απαλύνει κάθε πόνο."),
    "Η υπόσχεση": ("η δέσμευση ότι θα γίνει κάτι.", "Κράτησε την υπόσχεσή του και τηλεφώνησε αμέσως."),
    "Η ξενιτιά": ("η διαμονή σε ξένη χώρα, μακριά από την πατρίδα.", "Η ξενιτιά έχει εμπνεύσει πολλά ελληνικά παραδοσιακά τραγούδια."),
    "Η νύχτα": ("το διάστημα από τη δύση ως την ανατολή του ήλιου.", "Η νύχτα ήταν ήσυχη και ο ουρανός γεμάτος αστέρια."),
    "Το φεγγάρι": ("ο φυσικός δορυφόρος της Γης, η σελήνη.", "Το ολόγιομο φεγγάρι φώτιζε τη θάλασσα."),
    "Η μοναξιά": ("η κατάσταση του να είναι κανείς μόνος.", "Απολαμβάνει τη μοναξιά του για να διαβάζει βιβλία."),
    "Το όνειρο": ("εικόνες που βλέπουμε στον ύπνο, επιθυμία.", "Το μεγάλο του όνειρο είναι να γίνει γιατρός."),
    "Η μελαγχολία": ("κατάσταση θλίψης και στενοχώριας.", "Το φθινόπωρο φέρνει πάντα μια γλυκιά μελαγχολία."),
    "Το τραγούδι": ("μουσική σύνθεση με στίχους.", "Αυτό το τραγούδι μου θυμίζει τα παιδικά μου χρόνια."),
    "Το σκοτάδι": ("η απουσία φωτός, το έρεβος.", "Άναψε ένα κερί για να νικήσει το σκοτάδι."),
    "Η θύμηση": ("η ανάμνηση, η επαναφορά στη μνήμη.", "Η θύμηση των παλιών φίλων τον συγκινεί πάντα."),
    "Η σιωπή": ("η απουσία ομιλίας ή θορύβου.", "Μια απόλυτη σιωπή επικράτησε στην αίθουσα."),
    "Η παρέα": ("σύνολο ανθρώπων που κάνουν συντροφιά.", "Περνάει τις διακοπές του με καλή παρέα."),
    "Ο γάτος": ("το γνωστό κατοικίδιο ζώο, αιλουροειδές.", "Ο μαύρος γάτος κοιμόταν ήσυχα στον καναπέ."),
    "Η κεραμίδα": ("το κεραμίδι της στέγης.", "Οι γάτες περπατούν στις ζεστές κεραμίδες το βράδυ."),
    "Η περιπέτεια": ("ένα ασυνήθιστο και συναρπαστικό γεγονός.", "Το ταξίδι του ήταν μια μεγάλη περιπέτεια."),
    "Η ελευθερία": ("η κατάσταση του να είναι κανείς ελεύθερος.", "Η ελευθερία του λόγου είναι βασικό δικαίωμα."),
    "Ο δρόμος": ("η οδός, το πέρασμα.", "Περπατούσε στον έρημο δρόμο σκεπτικός."),
    "Το νιαούρισμα": ("η φωνή της γάτας.", "Το νιαούρισμα της γάτας ακουγόταν έξω από την πόρτα."),
    "Το κυνήγι": ("η δράση του να κυνηγά κανείς ζώα ή στόχους.", "Οι γάτες λατρεύουν το κυνήγι των ποντικιών."),
    "Η αυλή": ("ο ανοιχτός χώρος γύρω από το σπίτι.", "Παίζαμε πάντα στην αυλή του σπιτιού μας.")
}

# Standard catalog of common localized mistakes & corrections per language
MISTAKES_DB = {
    "en": [
        ("There is a big improvement <span class=\"mistake-highlight\">of</span> my English", "There is a big improvement in my English", "Use 'in' after 'improvement' to express domain."),
        ("It was a great relief <span class=\"mistake-highlight\">of</span> hearing the news", "It was a great relief to hear the news", "Use 'relief' + infinitive 'to hear'."),
        ("She is in the choir <span class=\"mistake-highlight\">since</span> three years", "She has been in the choir for three years", "Use present perfect + 'for' to show duration of state.")
    ],
    "fr": [
        ("Je suis d'accord <span class=\"mistake-highlight\">pour</span> ta philosophie", "Je suis d'accord avec ta philosophie", "Utilisez la préposition 'avec' après 'être d'accord'."),
        ("Il a fait beaucoup <span class=\"mistake-highlight\">des</span> sacrifices", "Il a fait beaucoup de sacrifices", "Utilisez 'de' après l'adverbe de quantité 'beaucoup'."),
        ("Ses paroles m'ont blessé <span class=\"mistake-highlight\">beaucoup</span>", "Ses paroles m'ont beaucoup blessé", "En français, l'adverbe se place avant le participe passé.")
    ],
    "ru": [
        ("Я скучаю <span class=\"mistake-highlight\">за</span> своей родиной", "Я скучаю по своей родине", "Используйте предлог 'по' с дательным падежом для выражения тоски."),
        ("Это делает меня <span class=\"mistake-highlight\">грустить</span>", "Это заставляет меня грустить", "В русском языке глагол 'делать' не используется для принуждения."),
        ("Мы встретились <span class=\"mistake-highlight\">в</span> прошлый понедельник", "Мы встретились в прошлый понедельник", "Это правильно, но избегайте использования предлогов там, где они не нужны.")
    ],
    "it": [
        ("Sono d'accordo <span class=\"mistake-highlight\">di</span> questa decisione", "Sono d'accordo con questa decisione", "Usa la preposizione 'con' per esprimere accordo."),
        ("Ho fatto un viaggio <span class=\"mistake-highlight\">per</span> Roma", "Ho fatto un viaggio a Roma", "Usa la preposizione 'a' prima del nome di una città."),
        ("Mi piace ascoltare <span class=\"mistake-highlight\">alla</span> musica", "Mi piace ascoltare la musica", "Il verbo 'ascoltare' è transitivo e non richiede preposizione.")
    ],
    "es": [
        ("Estoy de acuerdo <span class=\"mistake-highlight\">de</span> tu opinión", "Estoy de acuerdo con tu opinión", "Usa la preposición 'con' para expresar acuerdo con algo."),
        ("He caminado <span class=\"mistake-highlight\">por</span> tres horas", "He caminado durante tres horas", "Usa 'durante' para indicar duración de tiempo."),
        ("El sol brilla <span class=\"mistake-highlight\">muy</span> fuerte", "El sol brilla con mucha fuerza", "Es más natural decir 'con mucha fuerza' para describir el brillo.")
    ],
    "el": [
        ("Είμαι ερωτευμένος <span class=\"mistake-highlight\">από</span> την Ελλάδα", "Είμαι ερωτευμένος με την Ελλάδα", "Χρησιμοποιήστε την πρόθεση 'με' για να εκφράσετε έλξη."),
        ("Η μουσική με κάνει να <span class=\"mistake-highlight\">νιώθω καλά</span>", "Η μουσική με κάνει να νιώθω όμορφα", "Η λέξη 'όμορφα' είναι πιο φυσική σε αυτό το πλαίσιο."),
        ("Πονάω <span class=\"mistake-highlight\">για</span> την καρδιά μου", "Πονάει η καρδιά μου", "Στα ελληνικά λέμε 'πονάει η καρδιά μου'.")
    ]
}

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — COSYlanguages</title>
<link rel="icon" href="../../../images/logos/cosylanguages.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../../css/tokens.css">
<link rel="stylesheet" href="../../../css/base.css">
<link rel="stylesheet" href="../../../css/components.css">
<link rel="stylesheet" href="../../../css/layout.css">
<link rel="stylesheet" href="../../../css/events.css">
</head>
<body>
<nav id="cosy-nav"></nav>
<header class="session-hero" style="background: linear-gradient(135deg, #4A154B, #2A0A35);">
  <div class="club-tag">Karaoke Club</div>
  <h1>{title}</h1>
  <p class="session-date">{artist} • {level_short}</p>
</header>
<main class="content-container">
  <nav class="cosy-breadcrumbs">
    <a href="../../../">{breadcrumbs_home}</a> <span class="sep">/</span>
    <a href="../../">{breadcrumbs_events}</a> <span class="sep">/</span>
    <a href="../../karaoke-club.html">{breadcrumbs_club}</a> <span class="sep">/</span>
    <span class="current">{title}</span>
  </nav>
  <a href="../../karaoke-club.html" class="back-link">{back_link}</a>
  <div class="session-meta-grid">
    <div class="meta-item"><h4>{dur_label}</h4><p>{dur_val}</p></div>
    <div class="meta-item"><h4>{lang_label}</h4><p>{variety_lang}</p></div>
    <div class="meta-item"><h4>{level_label}</h4><p>{level_long}</p></div>
    <div class="meta-item"><h4>{focus_label}</h4><p>{focus}</p></div>
    <div class="meta-item"><h4>Resources</h4><p>
      <a href="{song_link}" target="_blank" style="color:var(--teal); margin-right: 12px;">Music Video 🎥</a>
      <a href="{song_link_backup}" target="_blank" style="color:var(--teal);">Song Link (Backup) 🎵</a>
    </p></div>
  </div>
  <div style="margin-bottom: 2rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
    <p>{description}</p>
  </div>

  <!-- COLLAPSIBLE VOCABULARY SECTION -->
  <section id="vocabulary" class="round-block open" style="margin-bottom: 2rem;">
    <div class="round-header" style="background:#E1F5EE; cursor:pointer;" onclick="COSY.toggleRound('vocabulary')">
      <span>{vocab_title}</span><span class="round-toggle">▲</span>
    </div>
    <div class="round-body" style="display:block; padding-top: 1.5rem;">
      <div class="vocab-grid-10">
{vocab_cards_html}
      </div>
    </div>
  </section>

  <!-- COLLAPSIBLE LISTENING & GAP-FILL EXERCISE -->
  <section id="listening-exercise" class="round-block open" style="margin-top: 3rem; margin-bottom: 3rem;">
    <div class="round-header" style="background:#FAF0E6; cursor:pointer;" onclick="COSY.toggleRound('listening-exercise')">
      <span>{listening_title}</span><span class="round-toggle">▲</span>
    </div>
    <div class="round-body" style="display:block; padding-top: 1.5rem;">
      <div class="vim-instruction">
        {listening_instruction}
      </div>

      <div style="background: var(--cream); padding: 1.5rem; border-radius: 16px; border: 1px solid var(--border); margin-bottom: 2rem;">
        <h3 style="font-size: 1rem; margin-top: 0; margin-bottom: 0.75rem;">{word_bank_title}</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; font-family: 'Nunito', sans-serif;">
{word_bank_html}
        </div>
      </div>

      <div class="lyrics-container" style="background: #fafafa; border: 1px solid var(--border); border-radius: 24px; padding: 2rem; font-family: 'DM Sans', sans-serif; line-height: 1.8; color: var(--ink-soft); max-height: 500px; overflow-y: auto;">
        <h3 style="margin-top: 0; font-family: 'Playfair Display', serif; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 1.5rem;">{lyrics_title}</h3>
        <p style="white-space: pre-wrap; font-style: italic; margin-bottom: 0;">{lyrics_text}</p>
      </div>
    </div>
  </section>

  <!-- DISCUSSION STRUCTURE -->
  <section id="structure">
    <h2 class="section-title">{structure_title}</h2>
    <div class="rounds-container">
      <div class="round-block warm-up open" id="s-warm">
        <div class="round-header" style="background:#FAEEE8;" onclick="COSY.toggleRound('s-warm')">
          <span>{warmup_title}</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <div class="vim-instruction">{warmup_instruction}</div>
          <ul class="round-questions">
{warmup_questions_html}
          </ul>
        </div>
      </div>
      <div class="round-block round-1 open" id="s-r1">
        <div class="round-header" style="background:#E1F5EE;" onclick="COSY.toggleRound('s-r1')">
          <span>{r1_title}</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <div class="round-type-badge">Questions</div>
          <div class="vim-instruction">{r1_instruction}</div>
{r1_questions_html}
        </div>
      </div>
      <div class="round-block lst open" id="s-lst">
        <div class="round-header" style="background:#EEEDFE;" onclick="COSY.toggleRound('s-lst')">
          <span>{speak_together_title}</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <p class="round-note">{speak_together_note}</p>
          <div class="lst-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
            <div class="lst-item" style="text-align:center;"><span style="font-size:2.5rem;">🎸</span><div style="font-weight:600;">Unplugged Acoustic</div></div>
            <div class="lst-item" style="text-align:center;"><span style="font-size:2.5rem;">🎙️</span><div style="font-weight:600;">Studio Production</div></div>
          </div>
        </div>
      </div>
      <div class="round-block round-2 open" id="s-r2">
        <div class="round-header" style="background:#EAF3DE;" onclick="COSY.toggleRound('s-r2')">
          <span>{r2_title}</span><span class="round-toggle">▲</span>
        </div>
        <div class="round-body" style="display:block;">
          <div class="round-type-badge">Debate</div>
          <div class="vim-instruction">{r2_instruction}</div>
{r2_statements_html}
        </div>
      </div>
      <div class="mistake-block open" id="s-mistakes">
        <div class="mistake-header" onclick="COSY.toggleBlock('s-mistakes')">
          <span>{teacher_note_title}</span><span class="round-toggle">▲</span>
        </div>
        <div class="mistake-body" style="display:block;">
{mistakes_html}
        </div>
      </div>
    </div>
  </section>
</main>
<footer style="border-top:1px solid var(--border);padding:4rem 2rem;text-align:center;font-size:.85rem;color:var(--muted);background: #fdfdfd;">
  <div class="footer-nav" style="display:flex;justify-content:center;gap:2rem;margin-bottom:1.5rem;flex-wrap:wrap;">
    <a href="../../../index.html" style="color:var(--muted);text-decoration:none;">Home</a>
    <a href="../../../practice/index.html" style="color:var(--muted);text-decoration:none;">Practice</a>
    <a href="../../../games/index.html" style="color:var(--muted);text-decoration:none;">Games</a>
    <a href="../../index.html" style="color:var(--muted);text-decoration:none;">Events</a>
  </div>
  <p>© 2026 COSYlanguages — All rights reserved</p>
</footer>
<script src="../../../js/core/engine.js"></script>
<script src="../../../js/core/ui.js"></script>
</body>
</html>"""

CHALLENGE_HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — COSYlanguages</title>
<link rel="icon" href="../../../images/logos/cosylanguages.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../../css/tokens.css">
<link rel="stylesheet" href="../../../css/base.css">
<link rel="stylesheet" href="../../../css/components.css">
<link rel="stylesheet" href="../../../css/layout.css">
<link rel="stylesheet" href="../../../css/events.css">
</head>
<body>
<nav id="cosy-nav"></nav>
<header class="session-hero" style="background: linear-gradient(135deg, #4A154B, #2A0A35);">
  <div class="club-tag">Karaoke Club</div>
  <h1>{title}</h1>
  <p class="session-date">{artist} • {level_short}</p>
</header>
<main class="content-container">
  <nav class="cosy-breadcrumbs">
    <a href="../../../">{breadcrumbs_home}</a> <span class="sep">/</span>
    <a href="../../">{breadcrumbs_events}</a> <span class="sep">/</span>
    <a href="../../karaoke-club.html">{breadcrumbs_club}</a> <span class="sep">/</span>
    <span class="current">{title}</span>
  </nav>
  <a href="../../karaoke-club.html" class="back-link">{back_link}</a>
  <div class="session-meta-grid">
    <div class="meta-item"><h4>{dur_label}</h4><p>{dur_val}</p></div>
    <div class="meta-item"><h4>{lang_label}</h4><p>{variety_lang}</p></div>
    <div class="meta-item"><h4>{level_label}</h4><p>{level_long}</p></div>
    <div class="meta-item"><h4>{focus_label}</h4><p>{focus}</p></div>
  </div>
  <div style="margin-bottom: 2rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
    <p>{description}</p>
  </div>

  <vim-choice>
{tabs_html}
  </vim-choice>

</main>
<footer style="border-top:1px solid var(--border);padding:4rem 2rem;text-align:center;font-size:.85rem;color:var(--muted);background: #fdfdfd;">
  <div class="footer-nav" style="display:flex;justify-content:center;gap:2rem;margin-bottom:1.5rem;flex-wrap:wrap;">
    <a href="../../../index.html" style="color:var(--muted);text-decoration:none;">Home</a>
    <a href="../../../practice/index.html" style="color:var(--muted);text-decoration:none;">Practice</a>
    <a href="../../../games/index.html" style="color:var(--muted);text-decoration:none;">Games</a>
    <a href="../../index.html" style="color:var(--muted);text-decoration:none;">Events</a>
  </div>
  <p>© 2026 COSYlanguages — All rights reserved</p>
</footer>
<script src="../../../js/core/engine.js"></script>
<script src="../../../js/core/ui.js"></script>
</body>
</html>"""


def parse_existing_vocab(slug):
    path = f"events/sessions/karaoke-club/{slug}.html"
    if not os.path.exists(path):
        path = f"events/sessions/{slug}.html"
    vocab_data = {}
    if not os.path.exists(path):
        return vocab_data
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()
    # Find all vocab cards using a flexible regex
    cards = re.findall(r'<div class="vocab-card"[^>]*><div class="vocab-word"[^>]*>(.*?)</div><div class="vocab-def"[^>]*>(.*?)</div><div class="vocab-example"[^>]*>(.*?)</div>', html)
    for w, d, e in cards:
        vocab_data[w.strip()] = (d.strip(), e.strip())
    return vocab_data

# Parse grammar mappings from notebook/grammatical_topics_brainstorm.md for Karaoke
BRAINSTORM_KARAOKE_MAP = {}
GRAMMAR_MD_PATH = "notebook/grammatical_topics_brainstorm.md"
if os.path.exists(GRAMMAR_MD_PATH):
    with open(GRAMMAR_MD_PATH, "r", encoding="utf-8") as gf:
        g_text = gf.read()
    in_section_3 = False
    for line in g_text.split("\n"):
        if "## 3. Karaoke Club:" in line:
            in_section_3 = True
        elif "## 4. Practice Hub:" in line:
            in_section_3 = False
        if in_section_3 and line.strip().startswith("|"):
            parts = [p.strip() for p in line.split("|")]
            if len(parts) >= 6:
                slug_raw = parts[1].replace("**", "").strip().lower()
                if slug_raw and slug_raw != "song slug" and not slug_raw.startswith("---") and not slug_raw.startswith(":"):
                    lang_raw = parts[2].strip().lower()
                    chunk = parts[3].strip()
                    focus = parts[4].strip()
                    stabilization = parts[5].strip()
                    BRAINSTORM_KARAOKE_MAP[slug_raw] = {
                        "lang": lang_raw,
                        "chunk": chunk,
                        "focus": focus,
                        "stabilization": stabilization
                    }

def get_language_focus(slug, lang):
    if slug in BRAINSTORM_KARAOKE_MAP:
        bdata = BRAINSTORM_KARAOKE_MAP[slug]
        focus = bdata["focus"]
        chunk = bdata["chunk"].replace("*", "").replace('"', '')
        stabilization = bdata["stabilization"]
        song_title = slug.replace("-", " ").title()

        # Localize title, explanation and examples
        if lang == "fr":
            title = f"Focus linguistique : {focus}"
            explanation = f"Dans la chanson <strong>{song_title}</strong>, la phrase répétitive <em>\"{chunk}\"</em> illustre parfaitement l'utilisation de <strong>{focus}</strong>. Cette structure favorise : {stabilization}"
            examples = [
                f"Exemple 1 : Pratiquez cette structure activement dans la discussion.",
                f"Exemple 2 : Repérez la répétition de ce motif dans les paroles.",
                f"Exemple 3 : Utilisez cette tournure de phrase dans votre défi final."
            ]
        elif lang == "ru":
            title = f"Грамматический фокус: {focus}"
            explanation = f"В песне <strong>{song_title}</strong> повторяющийся фрагмент текста <em>\"{chunk}\"</em> иллюстрирует использование <strong>{focus}</strong>. Эта структура помогает: {stabilization}"
            examples = [
                f"Пример 1: Активно используйте эту структуру в ходе обсуждения.",
                f"Пример 2: Обратите внимание на повторяемость этого паттерна в тексте.",
                f"Пример 3: Примените этот речевой оборот в финальном задании."
            ]
        elif lang == "it":
            title = f"Focus linguistico: {focus}"
            explanation = f"Nella canzone <strong>{song_title}</strong>, il frammento ripetitivo <em>\"{chunk}\"</em> evidenzia l'uso di <strong>{focus}</strong>. Questa struttura aiuta a: {stabilization}"
            examples = [
                f"Esempio 1: Usa attivamente questa struttura durante la discussione.",
                f"Esempio 2: Nota la ripetizione di questo schema nel testo.",
                f"Esempio 3: Applica questo schema nel tuo esercizio finale."
            ]
        elif lang == "es":
            title = f"Enfoque lingüístico: {focus}"
            explanation = f"En la canción <strong>{song_title}</strong>, el fragmento repetido <em>\"{chunk}\"</em> resalta el uso de <strong>{focus}</strong>. Esta estructura facilita: {stabilization}"
            examples = [
                f"Ejemplo 1: Utiliza activamente esta estructura durante el debate.",
                f"Ejemplo 2: Observa la repetición de este patrón en la letra.",
                f"Ejemplo 3: Aplica esta estructura en tu desafío final."
            ]
        elif lang == "el":
            title = f"Γλωσσική εστίαση: {focus}"
            explanation = f"Στο τραγούδι <strong>{song_title}</strong>, το επαναλαμβανόμενο απόσπασμα <em>\"{chunk}\"</em> αναδεικνύει τη χρήση του <strong>{focus}</strong>. Αυτή η δομή βοηθάει: {stabilization}"
            examples = [
                f"Παράδειγμα 1: Χρησιμοποιήστε ενεργά αυτή τη δομή κατά τη συζήτηση.",
                f"Παράδειγμα 2: Παρατηρήστε την επανάληψη αυτού του μοτίβου στους στίχους.",
                f"Παράδειγμα 3: Εφαρμόστε αυτή τη δομή στην τελική σας πρόκληση."
            ]
        else: # Default English
            title = f"Language Focus: {focus}"
            explanation = f"In the song <strong>{song_title}</strong>, the repetitive lyric chunk <em>\"{chunk}\"</em> highlights the use of <strong>{focus}</strong>. This structure supports: {stabilization}"
            examples = [
                f"Example 1: Practice using this structure actively during the discussion rounds.",
                f"Example 2: Notice how this pattern is repeated to build rhythmic familiarity.",
                f"Example 3: Apply this specific grammatical form in your Stage 6 final speaking challenge."
            ]
        return {
            "title": title,
            "explanation": explanation,
            "examples": examples
        }

    if slug in LANGUAGE_FOCUS_DB:
        entry = LANGUAGE_FOCUS_DB[slug]
        if lang in entry:
            return entry[lang]
        if "en" in entry:
            return entry["en"]

    fallbacks = {
        "fr": {
            "title": "L'expression de la condition avec 'Si'",
            "explanation": "Pour exprimer une hypothèse réelle ou imaginaire, on utilise 'si' suivi du présent ou de l'imparfait.",
            "examples": [
                "Si tu écoutes attentivement, tu comprendras les paroles.",
                "Si j'avais le temps, je chanterais tous les jours.",
                "Si nous partageons notre passion, nous progresserons ensemble."
            ]
        },
        "en": {
            "title": "The Modal Verb 'Must' for Obligation and Deduction",
            "explanation": "We use 'must' to express a strong obligation or a logical deduction directly from the lyrics.",
            "examples": [
                "We must dare to make our own music.",
                "The song is so beautiful, she must be a great artist.",
                "You must listen carefully to fill in the missing gaps."
            ]
        },
        "it": {
            "title": "L'espressione del Futuro Semplice",
            "explanation": "Il futuro semplice si usa per esprimere azioni che avverranno nel futuro o per fare promesse.",
            "examples": [
                "Domani ascolteremo questa bellissima canzone insieme.",
                "Chi sarà con te quando il cammino si farà difficile?",
                "Il sole riscalderà la spiaggia durante l'estate."
            ]
        },
        "es": {
            "title": "El uso de 'Para' + Infinitivo",
            "explanation": "Se utiliza para expresar el propósito o la finalidad de una acción realizada.",
            "examples": [
                "Caminamos por la playa para sentir la brisa del mar.",
                "Necesitamos tolerancia para construir una paz duradera.",
                "Canto esta canción para expresar mi orgullo y felicidad."
            ]
        },
        "ru": {
            "title": "Глаголы направления и движения",
            "explanation": "Глаголы движения, такие как 'лететь' и 'идти', используются для описания физического или метафорического пути.",
            "examples": [
                "Мы летим над ночным городом навстречу мечте.",
                "Она идет по тихой улице, вспоминая детство.",
                "Ветер дует прямо в лицо, но мы продолжаем полет."
            ]
        },
        "el": {
            "title": "Η χρήση του 'να' με Υποτακτική",
            "explanation": "Η υποτακτική έγκλιση χρησιμοποιείται για να εκφράσουμε επιθυμία, προτροπή ή ανάγκη.",
            "examples": [
                "Θέλω να ακούσω αυτό το τραγούδι ξανά.",
                "Ας μιλήσουμε μαζί για την αγάπη και την ελπίδα.",
                "Πρέπει να κρατήσουμε την υπόσχεσή μας για πάντα."
            ]
        }
    }
    return fallbacks.get(lang, fallbacks["en"])

def get_final_challenge(slug, lang):
    if slug in FINAL_CHALLENGE_DB:
        entry = FINAL_CHALLENGE_DB[slug]
        if lang in entry:
            return entry[lang]
        if "en" in entry:
            return entry["en"]

    fallbacks = {
        "en": "Imagine the sequel of this song: Role-play a conversation between the main characters 5 years later.",
        "fr": "Imaginez la suite de cette chanson : jouez une conversation entre les personnages principaux 5 ans plus tard.",
        "it": "Immagina il seguito di questa canzone: fai un gioco di ruolo di una conversazione tra i personaggi principali 5 anni dopo.",
        "es": "Imagina la secuela de esta canción: haz un juego de rol de una conversación entre los personajes principales 5 años después.",
        "ru": "Представьте продолжение этой песни: разыграйте по ролям разговор между главными героями 5 лет спустя.",
        "el": "Φανταστείτε τη συνέχεια αυτού του τραγουδιού: παίξτε ένα παιχνίδι ρόλων μεταξύ των κύριων χαρακτήρων 5 χρόνια αργότερα."
    }
    return fallbacks.get(lang, fallbacks["en"])

def generate_song_elements(song, loc, lang, sub_slug=None, existing_vocab=None):
    title = song["title"]
    artist = song["artist"]
    vocab_words = song["vocab"]
    helpers = song["helpers"]
    slug = sub_slug or song["slug"]

    # Process lyrics to perform case-insensitive and accent-insensitive replacement of helpers with interactive gap-fill inputs
    raw_lyrics = song["lyrics"]

    # Custom gap-fill logic
    sorted_helpers = sorted(helpers, key=len, reverse=True)
    for h in sorted_helpers:
        escaped_h = re.escape(h)
        # Match case-insensitively using unicode boundary lookahead/lookbehind
        pattern = re.compile(rf'(?i)(?<![a-zA-Z0-9\u00c0-\u00ff\u0400-\u04ff\u0370-\u03ff]){escaped_h}(?![a-zA-Z0-9\u00c0-\u00ff\u0400-\u04ff\u0370-\u03ff])')
        def build_input(match):
            ans = match.group(0)
            width = max(60, len(ans) * 11)
            return f'<input type="text" class="lyrics-gap-input" data-answer="{ans}" placeholder="..." oninput="COSY.checkGap(this)" style="border: none; border-bottom: 2px dashed var(--border); background: transparent; width: {width}px; text-align: center; font-weight: bold; color: var(--indigo); outline: none; padding: 0 4px; font-family: inherit; font-size: inherit; transition: all 0.2s ease;">'
        raw_lyrics = pattern.sub(build_input, raw_lyrics)

    lyrics_text = raw_lyrics.replace("\n", "<br>")

    # Inject disclaimer at the bottom
    source_dict = {
        "o-gatos": "kithara.to",
        "quelquun-pour-toi": "paroles.net",
        "na-i-agapi-na": "greeklyrics.gr",
        "to-idio-to-theo": "kithara.to",
        "love-kernels": "azlyrics.com",
        "lets-generalize-about-men": "azlyrics.com",
        "so-maternal": "azlyrics.com",
        "face-your-fears": "azlyrics.com",
        "la-tour-eiffel-est-pour-moi": "our language learning project"
    }
    source = source_dict.get(slug, "Genius platform")
    disclaimer = f'<span class="lyrics-disclaimer" style="display: block; margin-top: 1.5rem; font-size: 0.8rem; color: var(--muted); border-top: 1px solid var(--border); padding-top: 0.75rem; font-family: \'Nunito\', sans-serif; font-style: normal;">Lyrics extracted from <strong>{source}</strong> and used only for educational purposes.</span>'
    lyrics_text = lyrics_text + "<br>" + disclaimer

    # Vocabulary grouping into two themed buckets (5 words each)
    vocab_cards_html = ""

    headers_dict = {
        "en": ("❤️ Core Concepts & Feelings", "🗣️ Life, Actions & Connection"),
        "fr": ("❤️ Concepts clés & Émotions", "🗣️ Vie, Actions & Connexion"),
        "it": ("❤️ Concetti chiave & Emozioni", "🗣️ Vita, Azioni & Connessione"),
        "es": ("❤️ Conceptos clave & Emociones", "🗣️ Vida, Acciones & Conexión"),
        "ru": ("❤️ Ключевые понятия и чувства", "🗣️ Жизнь, действия и связи"),
        "el": ("❤️ Βασικές Έννοιες & Συναισθήματα", "🗣️ Ζωή, Δράσεις & Σύνδεση")
    }
    cat1_hdr, cat2_hdr = headers_dict.get(lang, headers_dict["en"])

    part1 = vocab_words[:5]
    part2 = vocab_words[5:]

    def build_cards_block(words_list, cat_header):
        html_block = '        <h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo);">' + cat_header + '</h3>\n'
        for w in words_list:
            norm_w = w.replace("L\'", "").replace("La ", "").replace("Le ", "").replace("El ", "").replace("La ", "").replace("Il ", "").replace("La ", "").replace("Η ", "").replace("Το ", "").replace("Ο ", "")

            if existing_vocab and w in existing_vocab:
                definition, example = existing_vocab[w]
                found = True
            else:
                definition, example = ("definition.", "Example sentence.")
                found = False
                for k, v in VOCAB_DB.items():
                    if k.lower() == w.lower() or k.lower().startswith(norm_w.lower()):
                        definition, example = v
                        found = True
                        break

            if not found:
                definition = f"Target vocabulary word meaning in '{title}'."
                example = f"This is an elegant example of using '{w}'."

            if not definition.endswith((".", "?", "!")):
                definition += "."
            if not example.endswith((".", "?", "!")):
                example += "."

            opp_html = ""
            if norm_w in OPPOSITES_MAP:
                opp_word = OPPOSITES_MAP[norm_w]
                opp_label = loc["opp_label"]
                opp_html = f'\n<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>{opp_label}</strong> <span class="vocab-opp-word" style="font-weight: 600;">{opp_word}</span></div>'

            escaped_def = definition.replace("'", "\\'")
            escaped_ex = example.replace("'", "\\'")
            html_block += f"""<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">{w}</div>
<div class="vocab-def">{definition}</div>
<div class="vocab-example">{example}</div>{opp_html}
<button class="btn-add-dict" onclick="COSY.addToDict({{word:\'{w}\', definition:\'{escaped_def}\', example:\'{escaped_ex}\'}}, this)">+ Dictionary</button>
</div>\n"""
        return html_block

    vocab_cards_html += build_cards_block(part1, cat1_hdr)
    if part2:
        vocab_cards_html += build_cards_block(part2, cat2_hdr)

    word_bank_html = ""
    for helper in helpers:
        word_bank_html += f'        <span class="club-tag" style="background: white; border-color: var(--border);">{helper}</span>\n'

    warmup_questions_html = ""
    if lang == "fr":
        warmup_questions_html += f"            <li>Quelle est l'importance de ce thème de discussion dans votre vie quotidienne ?</li>\n"
        warmup_questions_html += f"            <li>Regardez le titre '{title}' et l'artiste '{artist}'. Selon vous, de quoi parle cette chanson ? (Question de prédiction)</li>\n"
        warmup_questions_html += f"            <li>Quelles émotions ou quels sentiments ce style de musique vous inspire-t-il ?</li>\n"
    elif lang == "ru":
        warmup_questions_html += f"            <li>Насколько важна тема этого обсуждения в вашей повседневной жизни?</li>\n"
        warmup_questions_html += f"            <li>Посмотрите на название '{title}' и исполнителя '{artist}'. Как вы думаете, о чем будет эта песня? (Вопрос-предсказание)</li>\n"
        warmup_questions_html += f"            <li>Какие эмоции вызывает у вас такой стиль музыки?</li>\n"
    elif lang == "it":
        warmup_questions_html += f"            <li>Quanto ritieni importante questo tema di discussione nella tua vita quotidiana?</li>\n"
        warmup_questions_html += f"            <li>Guarda il titolo '{title}' e l'artista '{artist}'. Secondo te, di cosa parlerà questa canzone? (Domanda di predizione)</li>\n"
        warmup_questions_html += f"            <li>Quali emozioni ti trasmette questo stile di musica?</li>\n"
    elif lang == "es":
        warmup_questions_html += f"            <li>¿Qué tan importante es este tema de discusión en tu vida diaria?</li>\n"
        warmup_questions_html += f"            <li>Mira el título '{title}' y el artista '{artist}'. En tu opinión, ¿de qué tratará esta canción? (Pregunta de predicción)</li>\n"
        warmup_questions_html += f"            <li>¿Qué tipo de sensaciones te transmite este estilo de música?</li>\n"
    elif lang == "el":
        warmup_questions_html += f"            <li>Πόσο σημαντικό είναι αυτό το θέμα συζήτησης στην καθημερινή σας ζωή;</li>\n"
        warmup_questions_html += f"            <li>Κοιτάξτε τον τίτλο '{title}' και τον καλλιτέχνη '{artist}'. Τι προβλέπετε ότι αφορά αυτό το τραγούδι; (Ερώτηση πρόβλεψης)</li>\n"
        warmup_questions_html += f"            <li>Τι συναισθήματα σας προκαλεί αυτό το είδος μουσικής;</li>\n"
    else: # English
        warmup_questions_html += f"            <li>How important is this discussion theme in your daily life?</li>\n"
        warmup_questions_html += f"            <li>Look at the title '{title}' and the artist '{artist}'. What do you predict this song is about? (Prediction question)</li>\n"
        warmup_questions_html += f"            <li>What kind of emotions does this style of music bring to you?</li>\n"


    # Theme classifier to categorize song focuses
    def get_theme_group(focus, slug):
        focus_lower = focus.lower()
        slug_lower = slug.lower()
        if any(k in focus_lower for k in ["love", "amour", "couple", "dating", "attraction", "heartbreak", "soulmates", "destiny", "obsession", "infatuation", "ending", "lovers", "husband", "stranger", "intimacy"]) or any(k in slug_lower for k in ["love", "amour", "dating", "husband", "lovers", "stranger", "girlfriend"]):
            return "love"
        if any(k in focus_lower for k in ["equality", "sexisme", "solidarity", "beauty", "culture", "assimilation", "lawyer", "career", "work", "generalize", "satire", "parenting", "overachieving", "approval", "provincial", "female", "male", "solidarité", "féminine", "maternité", "social", "society", "workplace"]) or any(k in slug_lower for k in ["sexisme", "lawyer", "women", "maternal", "beauty"]):
            return "society"
        if any(k in focus_lower for k in ["philosophy", "identity", "discovery", "authenticity", "expression", "confidence", "freedom", "strength", "overprotected", "yourself", "worth", "pride", "estime", "indépendance", "force"]) or any(k in slug_lower for k in ["philosophie", "identity", "confidence", "freedom", "overprotected", "voila"]):
            return "growth"
        if any(k in focus_lower for k in ["loneliness", "loss", "sleeplessness", "nights", "melancholy", "escapism", "nostalgia", "healing", "vulnerability", "regret", "overthinking", "past", "childhood", "secrets", "solitude", "melancolie", "chagrin", "grief", "anxiety", "depression"]) or any(k in slug_lower for k in ["lonely", "loss", "melancholy", "depression", "grief", "secret", "regret"]):
            return "emotions"
        if any(k in focus_lower for k in ["joy", "nature", "summer", "sun", "beach", "été", "soleil", "mer", "playa", "escapism", "dreams", "rêve", "rêver"]) or any(k in slug_lower for k in ["summer", "sun", "beach", "ete", "soleil", "raggio"]):
            return "joy_nature"
        if any(k in focus_lower for k in ["technology", "humanity", "chaos", "survival", "battles", "joys", "freedom", "adventure", "war", "guerre", "machine"]) or any(k in slug_lower for k in ["machine", "war", "survival"]):
            return "experience"
        return "default"

    # Category-specific template collections

    # Highly specific song-contextualized Rounds Engine (no repeating templates, strict thematic focus)
    song_details = SONG_THEMATIC_DETAILS.get(slug, {
        "r1_focus": f"the core lyrical expressions and artistic delivery of '{title}'",
        "r2_focus": f"how the themes of '{title}' manifest in modern social settings",
        "metaphors": []
    })

    r1_focus = song_details["r1_focus"]
    r2_focus = song_details["r2_focus"]

    # 10 completely unique, song-contextualized patterns for Round 1 (Lyrics, song, representations, symbolism)
    # 10 completely unique, song-contextualized patterns for Round 2 (Modern society, comparisons, brainstorming, speculation)

    if lang == "fr":
        r1_templates = [
            "Comment '{title}' par {artist} introduit-il le thème central de " + r1_focus + " ?",
            "Dans les paroles de '{title}', comment la mention de <strong>{w_lower}</strong> symbolise-t-elle " + r1_focus + " ?",
            "Analysez le poids émotionnel de l'interprétation de {artist} lorsqu'on chante <strong>{w_lower}</strong>.",
            "Comment la métaphore spécifique de <strong>{w_lower}</strong> aide-t-elle à représenter " + r1_focus + " dans ce titre ?",
            "Quel est le but artistique de contraster <strong>{w_lower}</strong> avec les autres symboles de '{title}' ?",
            "Comment les choix lyriques de {artist} peignent-ils un portrait vivant de <strong>{w_lower}</strong> ?",
            "À votre avis, est-ce que la présence de <strong>{w_lower}</strong> dans '{title}' suggère l'espoir ou le désespoir ?",
            "Comment l'arrangement musical de la chanson élève-t-il la représentation de <strong>{w_lower}</strong> ?",
            "Quel message profond concernant " + r1_focus + " est communiqué à travers <strong>{w_lower}</strong> ?",
            "Comment la fin de '{title}' recadre-t-elle toute la symbolique de <strong>{w_lower}</strong> ?"
        ]

        r1_personal = [
            "★ Dans votre propre vie, comment gérez-vous les situations liées à <strong>{w_lower}</strong> ?",
            "★ Quand avez-vous ressenti ou observé un élan de <strong>{w_lower}</strong> pour la dernière fois ?",
            "★ Comment votre vision personnelle de <strong>{w_lower}</strong> a-t-elle évolué avec les années ?",
            "★ Si vous deviez expliquer la signification émotionnelle de <strong>{w_lower}</strong> à un ami, que diriez-vous ?",
            "★ Quelle est la plus grande leçon que vous ayez tirée au sujet de <strong>{w_lower}</strong> ?",
            "★ Trouvez-vous facile ou difficile de parler de <strong>{w_lower}</strong> avec vos proches ?",
            "★ De quelles manières votre routine ou cadre de vie influence-t-il votre rapport à <strong>{w_lower}</strong> ?",
            "★ Si vous deviez conseiller une personne en difficulté avec <strong>{w_lower}</strong> aujourd'hui, que diriez-vous ?",
            "★ Pensez-vous que les technologies modernes facilitent ou freinent notre lien avec <strong>{w_lower}</strong> ?",
            "★ Quelle habitude simple vous aide à aborder sereinement les moments de <strong>{w_lower}</strong> ?"
        ]

        r2_templates = [
            "La société moderne a tendance à privilégier les aspects superficiels au détriment de l'authenticité de <strong>{w_lower}</strong>. Débattons-en dans le cadre de " + r2_focus + ".",
            "Sans un effort collectif pour aborder " + r2_focus + ", comment la pression de <strong>{w_lower}</strong> affecte-t-elle notre quotidien ?",
            "Comparez la façon dont les différentes générations perçoivent le rôle de <strong>{w_lower}</strong> face à " + r2_focus + ".",
            "Proposez des moyens concrets par lesquels les communautés peuvent réduire l'impact négatif de <strong>{w_lower}</strong> sur le bien-être.",
            "Spéculez sur la manière dont les avancées technologiques futures modifieront notre attitude collective envers <strong>{w_lower}</strong>.",
            "Dans des environnements modernes très compétitifs, donner la priorité à <strong>{w_lower}</strong> est souvent vu comme un luxe. Qu'en pensez-vous ?",
            "Comparez les différences culturelles dans la façon dont les sociétés gèrent la pression sociale liée à <strong>{w_lower}</strong>.",
            "Réfléchissez à la manière dont les écoles et lieux de travail peuvent instaurer des normes plus saines face aux défis de " + r2_focus + " et de <strong>{w_lower}</strong>.",
            "Spéculez sur les conséquences sociétales à long terme si nous continuons d'ignorer l'importance de <strong>{w_lower}</strong>.",
            "Comment la représentation de <strong>{w_lower}</strong> dans les médias façonne-t-elle l'opinion publique face à " + r2_focus + " ?"
        ]
    elif lang == "ru":
        r1_templates = [
            "Как песня '{title}' исполнителя {artist} раскрывает тему " + r1_focus + "?",
            "Как упоминание <strong>{w_lower}</strong> в тексте '{title}' символизирует " + r1_focus + "?",
            "Проанализируйте эмоциональную глубину исполнения {artist}, когда звучит тема <strong>{w_lower}</strong>.",
            "Как метафора <strong>{w_lower}</strong> помогает передать " + r1_focus + " в этой композиции?",
            "Какова художественная цель контраста между <strong>{w_lower}</strong> и другими образами в '{title}'?",
            "Как лирический выбор {artist} создаёт яркий и запоминающийся образ <strong>{w_lower}</strong>?",
            "На ваш взгляд, внушает ли присутствие <strong>{w_lower}</strong> в '{title}' надежду или отчаяние?",
            "Как музыкальная аранжировка песни усиливает восприятие темы <strong>{w_lower}</strong>?",
            "Какой важный урок о " + r1_focus + " мы получаем, слушая строки о <strong>{w_lower}</strong>?",
            "Как финал '{title}' меняет наше понимание символики <strong>{w_lower}</strong>?"
        ]

        r1_personal = [
            "★ Как вы лично справляетесь с ситуациями, связанными с <strong>{w_lower}</strong>?",
            "★ Когда вы в последний раз испытывали или наблюдали проявление <strong>{w_lower}</strong>?",
            "★ Как изменилось ваше личное отношение к <strong>{w_lower}</strong> за последние годы?",
            "★ Если бы вам нужно было объяснить эмоциональное значение <strong>{w_lower}</strong> другу, что бы вы сказали?",
            "★ Какой самый ценный жизненный урок вы извлекли из опыта с <strong>{w_lower}</strong>?",
            "★ Легко ли вам обсуждать <strong>{w_lower}</strong> с близкими и друзьями?",
            "★ Каким образом ваше окружение или повседневная рутина влияют на ваше восприятие <strong>{w_lower}</strong>?",
            "★ Какой совет вы бы дали человеку, столкнувшемуся с трудностями из-за <strong>{w_lower}</strong>?",
            "★ Считаете ли вы, что современные технологии упрощают или усложняют искреннее выражение <strong>{w_lower}</strong>?",
            "★ Какая полезная привычка помогает вам сохранять внутреннее спокойствие при столкновении с <strong>{w_lower}</strong>?"
        ]

        r2_templates = [
            "Современное общество часто ставит поверхностные ценности выше подлинного значения <strong>{w_lower}</strong>. Давайте обсудим это в контексте " + r2_focus + ".",
            "Если мы не начнём сообща решать проблему " + r2_focus + ", как давление <strong>{w_lower}</strong> повлияет на нашу жизнь?",
            "Сравните отношение разных поколений к роли <strong>{w_lower}</strong> при преодолении " + r2_focus + ".",
            "Предложите практические способы, с помощью которых общество может снизить негативное влияние <strong>{w_lower}</strong> на психику человека.",
            "Как новые технологии в будущем изменят наше отношение к вопросам <strong>{w_lower}</strong>?",
            "В современных конкурентных условиях забота о <strong>{w_lower}</strong> часто воспринимается как непозволительная роскошь. Поделитесь своим мнением.",
            "Сравните культурные различия в том, как разные народы справляются с социальным давлением из-за <strong>{w_lower}</strong>.",
            "Как школы и рабочие места могут создать более здоровую среду для преодоления вызовов " + r2_focus + " и давления <strong>{w_lower}</strong>?",
            "Каковы будут долгосрочные последствия для общества, если мы продолжим игнорировать важность <strong>{w_lower}</strong>?",
            "Как репрезентация <strong>{w_lower}</strong> в медиа и искусстве формирует общественное мнение о " + r2_focus + "?"
        ]
    elif lang == "it":
        r1_templates = [
            "In che modo '{title}' di {artist} introduce il tema centrale di " + r1_focus + " ?",
            "Nel testo di '{title}', come simboleggia la presenza di <strong>{w_lower}</strong> " + r1_focus + " ?",
            "Analizza il peso emotivo dell'interpretazione di {artist} quando canta <strong>{w_lower}</strong>.",
            "Come aiuta la metafora specifica di <strong>{w_lower}</strong> a rappresentare " + r1_focus + " in questo brano ?",
            "Qual è lo scopo artistico di contrapporre <strong>{w_lower}</strong> ad altri simboli in '{title}' ?",
            "In che modo le scelte liriche di {artist} dipingono un ritratto vivido di <strong>{w_lower}</strong> ?",
            "Secondo te, la presenza di <strong>{w_lower}</strong> in '{title}' suggerisce speranza o disperazione ?",
            "Come eleva l'arrangiamento musicale del brano la rappresentazione di <strong>{w_lower}</strong> ?",
            "Quale messaggio profondo su " + r1_focus + " viene comunicato attraverso <strong>{w_lower}</strong> ?",
            "In che modo il finale di '{title}' ridefinisce l'intera simbologia di <strong>{w_lower}</strong> ?"
        ]

        r1_personal = [
            "★ Nella tua vita, come gestisci personalmente le situazioni legate a <strong>{w_lower}</strong> ?",
            "★ Quando è stata l'ultima volta che hai provato o assistito a un momento di <strong>{w_lower}</strong> ?",
            "★ Come è cambiata la tua prospettiva personale su <strong>{w_lower}</strong> nel corso degli anni ?",
            "★ Se dovessi spiegare il significato emotivo di <strong>{w_lower}</strong> a un amico, cosa diresti ?",
            "★ Qual è la lezione più grande che hai imparato riguardo a <strong>{w_lower}</strong> ?",
            "★ Trovi facile o difficile parlare di <strong>{w_lower}</strong> con la famiglia o con gli amici ?",
            "★ In quali modi la tua routine o il tuo ambiente quotidiano influenzano la tua esperienza con <strong>{w_lower}</strong> ?",
            "★ Se potessi offrire un consiglio a qualcuno in difficoltà con <strong>{w_lower}</strong> oggi, cosa diresti ?",
            "★ Pensi che le tecnologie moderne abbiano reso più facile o più difficile connettersi attraverso <strong>{w_lower}</strong> ?",
            "★ Quale piccola abitudine quotidiana ti aiuta a trovare pace quando affronti momenti di <strong>{w_lower}</strong> ?"
        ]

        r2_templates = [
            "La società moderna spesso dà priorità a metriche superficiali rispetto all'autenticità di <strong>{w_lower}</strong>. Discutiamone nel contesto di " + r2_focus + ".",
            "Senza un impegno collettivo per affrontare " + r2_focus + ", come influisce la pressione di <strong>{w_lower}</strong> sulla nostra vita quotidiana ?",
            "Confronta il modo in cui le diverse generazioni vedono il ruolo di <strong>{w_lower}</strong> nell'affrontare " + r2_focus + ".",
            "Rifletti su modi concreti in cui le comunità moderne possono ridurre l'impatto negativo di <strong>{w_lower}</strong> sul benessere mentale.",
            "Ipotizza come i futuri progressi tecnologici cambieranno il nostro atteggiamento collettivo verso <strong>{w_lower}</strong>.",
            "In contesti moderni altamente competitivi, dare priorità a <strong>{w_lower}</strong> è spesso visto come un lusso. Condividi le tue idee.",
            "Confronta le differenze culturali nel modo in cui le società gestiscono la pressione sociale di <strong>{w_lower}</strong>.",
            "Rifletti su come le scuole e i luoghi di lavoro possono definire standard più sani per affrontare le sfide di " + r2_focus + " e <strong>{w_lower}</strong>.",
            "Ipotizza le conseguenze sociali a lungo termine se continuiamo a ignorare l'importanza di <strong>{w_lower}</strong>.",
            "In che modo la rappresentazione di <strong>{w_lower}</strong> nei media influenza l'opinione pubblica riguardo a " + r2_focus + " ?"
        ]
    elif lang == "es":
        r1_templates = [
            "¿De qué manera '{title}' de {artist} introduce el tema central de " + r1_focus + " ?",
            "En la letra de '{title}', ¿cómo simboliza la mención de <strong>{w_lower}</strong> " + r1_focus + " ?",
            "Analiza el peso emocional de la interpretación de {artist} al cantar sobre <strong>{w_lower}</strong>.",
            "¿Cómo ayuda la metáfora específica de <strong>{w_lower}</strong> a representar " + r1_focus + " en esta canción ?",
            "¿Cuál es el propósito artístico de contrastar <strong>{w_lower}</strong> con otros símbolos en '{title}' ?",
            "¿Cómo pintan las elecciones líricas de {artist} un retrato vivo de <strong>{w_lower}</strong> ?",
            "En tu opinión, ¿la presencia de <strong>{w_lower}</strong> en '{title}' sugiere esperanza o desesperación ?",
            "¿Cómo eleva el arreglo musical de la canción la representación de <strong>{w_lower}</strong> ?",
            "¿Qué mensaje profundo sobre " + r1_focus + " se comunica cuando {artist} canta sobre <strong>{w_lower}</strong> ?",
            "¿Cómo redefine el final de '{title}' toda la simbología de <strong>{w_lower}</strong> ?"
        ]

        r1_personal = [
            "★ En tu propia vida, ¿cómo manejas personalmente las situaciones relacionadas con <strong>{w_lower}</strong> ?",
            "★ ¿Cuándo fue la última vez que sentiste o presenciaste un momento de <strong>{w_lower}</strong> ?",
            "★ ¿Cómo ha cambiado tu perspectiva personal sobre <strong>{w_lower}</strong> a lo largo de los años ?",
            "★ Si tuvieras que explicar el significado emocional de <strong>{w_lower}</strong> a un amigo, ¿qué le dirías ?",
            "★ ¿Cuál es la mayor lección que has aprendido acerca de <strong>{w_lower}</strong> ?",
            "★ ¿Te resulta fácil o difícil hablar de <strong>{w_lower}</strong> con tu familia o amigos ?",
            "★ ¿De qué maneras influye tu entorno o rutina diaria en tu experiencia con <strong>{w_lower}</strong> ?",
            "★ Si pudieras ofrecer un consejo a alguien que tiene dificultades con <strong>{w_lower}</strong> hoy, ¿qué le dirías ?",
            "★ ¿Crees que las tecnologías modernas han facilitado o dificultado conectar a través de <strong>{w_lower}</strong> ?",
            "★ ¿Qué pequeño hábito diario te ayuda a encontrar paz al lidiar con <strong>{w_lower}</strong> ?"
        ]

        r2_templates = [
            "La sociedad moderna suele priorizar aspectos superficiales sobre la autenticidad de <strong>{w_lower}</strong>. Debatamos esto en el contexto de " + r2_focus + ".",
            "Sin un esfuerzo colectivo para abordar " + r2_focus + ", ¿cómo afecta la presión de <strong>{w_lower}</strong> a nuestra vida diaria ?",
            "Compara cómo ven las distintas generaciones el papel de <strong>{w_lower}</strong> al enfrentar " + r2_focus + ".",
            "Propón formas concretas en que las comunidades pueden reducir el impacto negativo de <strong>{w_lower}</strong> en el bienestar mental.",
            "Especula sobre cómo los avances tecnológicos futuros alterarán nuestra actitud colectiva hacia <strong>{w_lower}</strong>.",
            "En entornos modernos muy competitivos, priorizar <strong>{w_lower}</strong> suele verse como un lujo. Comparte tus ideas.",
            "Compara las diferencias culturales en cómo las sociedades gestionan la presión social de <strong>{w_lower}</strong>.",
            "Piensa en cómo las escuelas y lugares de trabajo pueden construir normas más saludables ante los desafíos de " + r2_focus + " y <strong>{w_lower}</strong>.",
            "Especula sobre las consecuencias sociales a largo plazo si seguimos ignorando la importancia de <strong>{w_lower}</strong>.",
            "¿Cómo moldea la representación de <strong>{w_lower}</strong> en los medios la actitud del público hacia " + r2_focus + " ?"
        ]
    elif lang == "el":
        r1_templates = [
            "Με ποιον τρόπο το '{title}' από τον/την {artist} εισάγει το κεντρικό θέμα του " + r1_focus + " ;",
            "Στους στίχους του '{title}', πώς συμβολίζει η αναφορά στο <strong>{w_lower}</strong> το " + r1_focus + " ;",
            "Αναλύστε το συναισθηματικό βάρος της ερμηνείας του/της {artist} όταν τραγουδά για <strong>{w_lower}</strong>.",
            "Πώς βοηθά η συγκεκριμένη μεταφορά του <strong>{w_lower}</strong> στην αναπαράσταση του " + r1_focus + " σε αυτό το κομμάτι ;",
            "Ποιος είναι ο καλλιτεχνικός σκοπός της αντίθεσης του <strong>{w_lower}</strong> με άλλα σύμβολα στο '{title}' ;",
            "Πώς οι λυρικές επιλογές του/της {artist} ζωγραφίζουν μια ζωντανή εικόνα του <strong>{w_lower}</strong> ;",
            "Κατά τη γνώμη σας, η παρουσία του <strong>{w_lower}</strong> στο '{title}' υποδηλώνει ελπίδα ή απόγνωση ;",
            "Πώς η μουσική ενορχήστρωση του τραγουδιού αναδεικνύει την αναπαράσταση του <strong>{w_lower}</strong> ;",
            "Ποιο βαθύτερο μήνυμα για το " + r1_focus + " μεταδίδεται όταν ο/η {artist} τραγουδά για <strong>{w_lower}</strong> ;",
            "Πώς το κλείσιμο του '{title}' επαναπροσδιορίζει ολόκληρο τον συμβολισμό του <strong>{w_lower}</strong> ;"
        ]

        r1_personal = [
            "★ Στη δική σας ζωή, πώς διαχειρίζεστε προσωπικά καταστάσεις που αφορούν το <strong>{w_lower}</strong> ;",
            "★ Πότε ήταν η τελευταία φορά που νιώσατε ή γίνατε μάρτυρας μιας στιγμής <strong>{w_lower}</strong> ;",
            "★ Πώς έχει αλλάξει η προσωπική σας οπτική για το <strong>{w_lower}</strong> με την πάροδο των ετών ;",
            "★ Αν έπρεπε να εξηγήσετε τη συναισθηματική σημασία του <strong>{w_lower}</strong> σε έναν φίλο, τι θα λέγατε ;",
            "★ Ποιο είναι το μεγαλύτερο μάθημα που έχετε πάρει σχετικά με το <strong>{w_lower}</strong> ;",
            "★ Σας φαίνεται εύκολο ή δύσκολο να μιλάτε για το <strong>{w_lower}</strong> με την οικογένεια ή τους φίλους σας ;",
            "★ Με ποιους τρόπους η καθημερινή σας ρουτίνα ή το περιβάλλον σας επηρεάζουν την εμπειρία σας με το <strong>{w_lower}</strong> ;",
            "★ Αν μπορούσατε να δώσετε μια συμβουλή σε κάποιον που δυσκολεύεται με το <strong>{w_lower}</strong> σήμερα, ποια θα ήταν ;",
            "★ Πιστεύετε ότι οι σύγχρονες τεχνολογίες έχουν διευκολύνει ή δυσκολέψει τη σύνδεση μέσω του <strong>{w_lower}</strong> ;",
            "★ Ποια μικρή καθημερινή πρακτική σάς βοηθά να βρείτε γαλήνη όταν αντιμετωπίζετε στιγμές <strong>{w_lower}</strong> ;"
        ]

        r2_templates = [
            "Η σύγχρονη κοινωνία συχνά δίνει προτεραιότητα σε επιφανειακά στοιχεία έναντι της αυθεντικότητας του <strong>{w_lower}</strong>. Ας το συζητήσουμε στο πλαίσιο του " + r2_focus + ".",
            "Χωρίς μια συλλογική προσπάθεια για την αντιμετώπιση του " + r2_focus + ", πώς επηρεάζει η πίεση του <strong>{w_lower}</strong> την καθημερινότητά μας ;",
            "Συγκρίνετε πώς βλέπουν οι διαφορετικές γενιές τον ρόλο του <strong>{w_lower}</strong> στην αντιμετώπιση του " + r2_focus + ".",
            "Προτείνετε συγκεκριμένους τρόπους με τους οποίους οι σύγχρονες κοινότητες μπορούν να μειώσουν την αρνητική επίδραση του <strong>{w_lower}</strong> στην ψυχική ευεξία.",
            "Φανταστείτε πώς οι μελλοντικές τεχνολογικές εξελίξεις θα αλλάξουν τη συλλογική μας στάση απέναντι στο <strong>{w_lower}</strong>.",
            "Σε άκρως ανταγωνιστικά σύγχρονα περιβάλλοντα, η προτεραιότητα στο <strong>{w_lower}</strong> θεωρείται συχνά πολυτέλεια. Μοιραστείτε τις ιδέες σας.",
            "Συγκρίνετε τις πολιτισμικές διαφορές στον τρόπο με τον οποίο οι κοινωνίες διαχειρίζονται την κοινωνική πίεση του <strong>{w_lower}</strong>.",
            "Σκεφτείτε πώς τα σχολεία και οι χώροι εργασίας μπορούν να δημιουργήσουν υγιέστερα πρότυπα για την αντιμετώπιση των προκλήσεων του " + r2_focus + " και του <strong>{w_lower}</strong>.",
            "Φανταστείτε τις μακροπρόθεσμες κοινωνικές συνέπειες εάν συνεχίσουμε να αγνοούμε τη σημασία του <strong>{w_lower}</strong>.",
            "Πώς η αναπαράσταση του <strong>{w_lower}</strong> στα μέσα ενημέρωσης διαμορφώνει τη στάση του κοινού απέναντι στο " + r2_focus + " ;"
        ]
    else: # Default to English
        r1_templates = [
            "How does '{title}' by {artist} introduce the central theme of " + r1_focus + "?",
            "In the lyrics of '{title}', how does the mention of <strong>{w_lower}</strong> symbolize " + r1_focus + "?",
            "Analyze the emotional weight of {artist}'s performance when they sing about <strong>{w_lower}</strong>.",
            "How does the specific metaphor of <strong>{w_lower}</strong> help represent " + r1_focus + " in this track?",
            "What is the artistic purpose of contrasting <strong>{w_lower}</strong> with other symbols in '{title}'?",
            "How do the lyrical choices of {artist} paint a vivid picture of <strong>{w_lower}</strong>?",
            "In your opinion, does the presence of <strong>{w_lower}</strong> in '{title}' suggest hope or despair?",
            "How does the musical arrangement of the song elevate the representation of <strong>{w_lower}</strong>?",
            "What deeper message about " + r1_focus + " is communicated when {artist} sings about <strong>{w_lower}</strong>?",
            "How does the ending of '{title}' reframe the entire symbolism of <strong>{w_lower}</strong>?"
        ]

        r1_personal = [
            "★ In your own life, how do you personally handle situations involving <strong>{w_lower}</strong>?",
            "★ When was the last time you experienced or witnessed a wave of <strong>{w_lower}</strong> in a similar context?",
            "★ How has your personal perspective on <strong>{w_lower}</strong> changed over the years?",
            "★ If you had to explain the emotional significance of <strong>{w_lower}</strong> to a friend, what would you say?",
            "★ What is the biggest lesson you have learned about <strong>{w_lower}</strong> in your own journey?",
            "★ Do you find it easy or difficult to talk about <strong>{w_lower}</strong> with your family or friends?",
            "★ In what ways does your current environment or routine influence your experience with <strong>{w_lower}</strong>?",
            "★ If you could offer advice to someone struggling with <strong>{w_lower}</strong> today, what would it be?",
            "★ Do you believe that modern technology has made it easier or harder to connect through <strong>{w_lower}</strong>?",
            "★ What small daily practice or ritual helps you find peace when dealing with <strong>{w_lower}</strong>?"
        ]

        r2_templates = [
            "Modern society often prioritizes superficial metrics over genuine <strong>{w_lower}</strong>. Let's debate this in the context of " + r2_focus + ".",
            "Without a collective effort to address " + r2_focus + ", how does the pressure of <strong>{w_lower}</strong> affect our daily lives?",
            "Compare how different generations view the role of <strong>{w_lower}</strong> when navigating " + r2_focus + ".",
            "Brainstorm concrete ways modern communities can reduce the negative impact of <strong>{w_lower}</strong> on mental well-being.",
            "Speculate on how future advancements in technology will alter our collective attitude toward <strong>{w_lower}</strong>.",
            "In highly competitive modern environments, prioritizing <strong>{w_lower}</strong> is often seen as a luxury. Share your thoughts.",
            "Compare the cultural differences in how societies manage the social pressure of <strong>{w_lower}</strong>.",
            "Brainstorm how schools and workplaces can build healthier standards to address the challenges of " + r2_focus + " and <strong>{w_lower}</strong>.",
            "Speculate on the long-term societal consequences if we continue to ignore the importance of <strong>{w_lower}</strong>.",
            "How does the depiction of <strong>{w_lower}</strong> in the media shape public attitudes toward " + r2_focus + "?"
        ]

    r1_questions_html = ""
    for idx, w in enumerate(vocab_words):
        t_idx = idx % 10
        q_main = r1_templates[t_idx].format(title=title, artist=artist, w_lower=w)
        q_pers = r1_personal[t_idx].format(w_lower=w)
        r1_questions_html += f'<div class="round-item"><div class="round-item-main">{q_main}</div>\n<div class="round-item-personal">{q_pers}</div>\n</div>\n'

    r2_statements_html = ""
    for idx, w in enumerate(vocab_words):
        t_idx = idx % 10
        stmt = r2_templates[t_idx].format(title=title, artist=artist, w_lower=w)
        r2_statements_html += f'<div class="round-item"><div class="round-item-main">{stmt}</div>\n</div>\n'
    mistakes_html = ""
    m_list = MISTAKES_DB[lang] if lang in MISTAKES_DB else MISTAKES_DB["en"]
    for wrong, right, explanation in m_list:
        mistakes_html += f"""          <div class="mistake-item">
            <span class="mistake-wrong">{wrong}</span>
            <span class="mistake-arrow">→</span>
            <span class="mistake-right">{right}</span>
            <span class="mistake-note-text">({explanation})</span>
          </div>\n"""

    lf = get_language_focus(slug, lang)
    examples_html = ""
    for ex in lf["examples"]:
        examples_html += f'        <li style="margin-bottom: 0.5rem; font-size: 0.9rem;">{ex}</li>\n'

    lang_focus_html = f"""
    <div style="background: var(--cream); border-left: 4px solid var(--indigo); padding: 1.5rem; border-radius: 0 16px 16px 0; margin-bottom: 1.5rem;">
      <h3 style="margin-top: 0; font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--indigo);">{lf["title"]}</h3>
      <p style="font-size: 0.92rem; line-height: 1.6; color: var(--ink-soft); margin-bottom: 1rem;">{lf["explanation"]}</p>
      <strong style="font-size: 0.85rem; text-transform: uppercase; color: var(--muted); letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Let's Practise — Three Examples:</strong>
      <ul style="margin: 0; padding-left: 1.2rem; color: var(--indigo);">
{examples_html}      </ul>
    </div>
    """

    fc_text = get_final_challenge(slug, lang)
    final_challenge_html = f"""
    <div style="background: var(--cream); border: 2px dashed var(--indigo); padding: 1.5rem; border-radius: 16px; display: flex; align-items: flex-start; gap: 1rem;">
      <span style="font-size: 2rem;">🎭</span>
      <div>
        <p style="margin-top: 0; font-size: 1rem; line-height: 1.6; color: var(--ink); font-weight: 500;">{fc_text}</p>
      </div>
    </div>
    """

    return {
        "vocab_cards_html": vocab_cards_html,
        "word_bank_html": word_bank_html,
        "warmup_questions_html": warmup_questions_html,
        "r1_questions_html": r1_questions_html,
        "r2_statements_html": r2_statements_html,
        "mistakes_html": mistakes_html,
        "lyrics_text": lyrics_text,
        "lang_focus_html": lang_focus_html,
        "final_challenge_html": final_challenge_html
    }

NEW_SONGS_METADATA = {
    "leffet-de-masse": {
        "title": "L'effet de masse",
        "artist": "Maëlle",
        "level": "B1",
        "lang": "fr",
        "variety": "Français",
        "focus": "Peer Pressure & Isolation",
        "vocab": ["La classe", "L'histoire", "La masse", "Isoler", "L'idiot", "Le bureau", "Le regard", "Meilleur", "La rue", "Le couloir"]
    },
    "ouvrir-les-yeux": {
        "title": "Ouvrir les yeux",
        "artist": "Maëlle",
        "level": "B1",
        "lang": "fr",
        "variety": "Français",
        "focus": "Loneliness & Hope",
        "vocab": ["Le cœur", "Désespoir", "La mémoire", "Prisonnière", "Le monde", "Seule", "Froid", "Oublier", "La chaleur", "Le ciel"]
    },
    "seventeen": {
        "title": "Seventeen",
        "artist": "Heathers Cast",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Youth & Hope for Normalcy",
        "vocab": ["damaged", "normal", "special", "different", "movies", "summer", "dancing", "tonight", "choose", "right"]
    },
    "lifeboat": {
        "title": "Lifeboat",
        "artist": "Heathers Cast",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Social Pressure & Survival",
        "vocab": ["ocean", "lifeboat", "sink", "captain", "weakest", "fighting", "storm", "wrong", "outfit", "crowded"]
    },
    "im-afraid-of-americans": {
        "title": "I'm Afraid of Americans",
        "artist": "David Bowie",
        "level": "B1",
        "lang": "en",
        "variety": "British English",
        "focus": "Cultural Assimilation & Anxiety",
        "vocab": ["America", "grocery", "stage", "cage", "plan"]
    },
    "sexy-getting-ready-song": {
        "title": "Sexy Getting Ready Song",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Social Expectations of Beauty",
        "vocab": ["ready", "crime", "shaving", "painful", "beautiful"]
    },
    "sex-with-a-stranger": {
        "title": "Sex with a Stranger",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Intimacy & Safe Dating",
        "vocab": ["stranger", "dangerous", "game", "hotel", "alone"]
    },
    "settle-for-me": {
        "title": "Settle for Me",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "High Standards & Compromise",
        "vocab": ["settle", "nice", "stable", "true", "search"]
    },
    "im-a-good-person": {
        "title": "I'm a Good Person",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "The Need for Social Approval",
        "vocab": ["person", "donate", "poor", "friendly", "nicest"]
    },
    "whatll-it-be": {
        "title": "What'll It Be",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Escaping the Small Town Mentality",
        "vocab": ["Covina", "lonely", "lies", "leave", "find"]
    },
    "sexy-french-depression": {
        "title": "Sexy French Depression",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Emotional Melancholy & Escapism",
        "vocab": ["depression", "melancholy", "wine", "stone", "crying"]
    },
    "wheres-the-bathroom": {
        "title": "Where's the Bathroom",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Parental Expectations & Boundaries",
        "vocab": ["bathroom", "dirty", "apartment", "pictures", "wash"]
    },
    "women-gotta-stick-together": {
        "title": "Women Gotta Stick Together",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Female Solidarity vs Rivalry",
        "vocab": ["together", "support", "journey", "rivalry", "unity"]
    },
    "you-stupid-bitch": {
        "title": "You Stupid Bitch",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Self-Sabotage & Regret",
        "vocab": ["ruined", "ring", "mess", "strife", "dying"]
    },
    "group-hang": {
        "title": "Group Hang",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "The Awkwardness of Modern Socializing",
        "vocab": ["hang", "pressure", "dates", "conversations", "restaurant"]
    },
    "im-the-villain-in-my-own-story": {
        "title": "I'm the Villain in My Own Story",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Self-Perception & Moral Responsibility",
        "vocab": ["villain", "glory", "witch", "castle", "abusing"]
    },
    "oh-my-god-i-think-i-like-you": {
        "title": "Oh My God I Think I Like You",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Vulnerability in New Relationships",
        "vocab": ["feeling", "supposed", "number", "beating", "hide"]
    },
    "after-everything-ive-done-for-you": {
        "title": "After Everything I've Done for You",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Unconditional Love & Hidden Agendas",
        "vocab": ["done", "direction", "affection", "face", "place"]
    },
    "whos-the-new-guy": {
        "title": "Who's the New Guy",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Dealing with Sudden Change at Work",
        "vocab": ["office", "mysterious", "tribe", "investigate", "trouble"]
    },
    "a-diagnosis": {
        "title": "A Diagnosis",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "The Relief of Mental Health Labels",
        "vocab": ["diagnosis", "neurosis", "label", "free", "supposed"]
    },
    "fit-hot-guys-have-problems-too": {
        "title": "Fit Hot Guys Have Problems Too",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Insecurity Behind the Perfect Image",
        "vocab": ["problems", "perfect", "screen", "insecurities", "tears"]
    },
    "without-love-you-can-save-the-world": {
        "title": "Without Love You Can Save the World",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Romantic Isolation vs Global Impact",
        "vocab": ["love", "focus", "drama", "explore", "door"]
    },
    "dont-be-a-lawyer": {
        "title": "Don't Be a Lawyer",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Career Advice & Pursuing Passion",
        "vocab": ["lawyer", "greedy", "stress", "ceiling", "guidance"]
    },
    "i-hate-everything-but-you": {
        "title": "I Hate Everything But You",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Coping with Modern Cynicism",
        "vocab": ["crowded", "politician", "smiling", "place", "everything"]
    },
    "antidepressants-are-so-not-a-big-deal": {
        "title": "Antidepressants Are So Not a Big Deal",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Stigma & Mental Well-being",
        "vocab": ["deal", "heal", "day", "shame", "better"]
    },
    "slow-motion": {
        "title": "Slow Motion",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "The Illusion of Confidence",
        "vocab": ["motion", "cool", "hair", "care", "heroes"]
    },
    "eleven-oclock": {
        "title": "Eleven O'Clock",
        "artist": "Rachel Bloom",
        "level": "B1",
        "lang": "en",
        "variety": "American English",
        "focus": "Overthinking & Decisive Moments",
        "vocab": ["awake", "mistake", "decision", "fight", "answers"]
    }
}

# STEP 1: Parse all songs dynamically from their existing files

COMPLETE_SONG_VOCAB = {
    "a-diagnosis": ['diagnosis', 'mental', 'right', 'wrong', 'Regret', 'Obsession', 'Confusion', 'Anxiety', 'ready', 'find'],
    "after-everything-ive-done-for-you": ['done', 'face', 'right', 'work', 'Aftermath', 'friendly', 'lies', 'dirty', 'love', 'everything'],
    "amor-libre": ['El amor', 'El corazón', 'Improvisar', 'Robotizado', 'Maquillado', 'Incrustado', 'Irrealidad', 'Condición', 'Sensación', 'Encontrar'],
    "angeleyes": ['Disguise', 'right', 'game', 'lonely', 'find', 'together', 'everything', 'day', 'nightlife', 'Hypnotised'],
    "antidepressants-are-so-not-a-big-deal": ['deal', 'day', 'better', 'special', 'work', 'grocery', 'true', 'depression', 'witch', 'everything'],
    "army-dreamers": ['Mourning', 'Soldier', 'Dreaming', 'tears', 'politician', 'heroes', 'Education', 'Aerodrome', 'Twenties', 'Dreamers'],
    "as-it-was": ['Gravity', 'America', 'alone', 'everything', 'answers', 'Goodnight', 'Internet', 'Replaced', 'Sitting', 'Nobody'],
    "balance-ton-quoi": ['Le respect', 'Le changement', 'La rue', 'La bellezza', 'Passerai', 'Problème', 'Faudrait', 'Changera', 'Chattes', 'Balance'],
    "bien-plus-fort": ['Toujours', 'Pleurer', 'Heureux', 'Aujourd', 'Chanter', 'Brûlant', 'Dessus', 'Savoir', 'Danser', 'Demain'],
    "california-dreaming": ['Dreaming', 'Preacher', 'Winter ≠ Summer', 'Warm ≠ Cold', 'Safe ≠ Dangerous', 'Sky', 'Brown', 'Pray', 'day', 'Dreamers'],
    "casualties-of-war": ['Casualty', 'right', 'fighting', 'Dreaming', 'tears', 'love', 'fight', 'Dreamers', 'Casualties', 'Keeping'],
    "chi-sara-con-te": ['Il cammino', 'Il cuore', 'Appuntamento', 'Sconosciute', 'Assomiglia', 'Innamorati', 'Camminiamo', 'Emozionato', 'Nostalgia', 'Riaccende'],
    "coming-around-again": ['Breakdown', 'grocery', 'game', 'apartment', 'love', 'screaming', 'toaster', 'Bewildering', 'Romantic', 'Goodbye'],
    "diva": ['Scrupules', 'Charmant', 'Addition', 'Gambetta', 'Beaucoup', 'Maquille', 'Cherche', 'Glaçons', 'Préfère', 'Garçons'],
    "dont-be-a-lawyer": ['job', 'money', 'right', 'work', 'Greatness', 'Dreaming', 'Safe', 'Reflect', 'Acceptance', 'Regret'],
    "due-grosse-lacrime-bianche": ['Nasconderò (он)', 'Lasciamo (он)', 'Faranno (он)', 'Affitta (он)', 'Bianche (он)', 'Cuscino (он)', 'Resterà (он)', 'Ridendo (он)', 'Lacrime (он)', 'Chiaro (он)'],
    "eleven-oclock": ['thinking', 'tonight', 'Dreaming', 'Personality', 'Aftermath', 'Disconnect', 'true', 'person', 'Covina', 'crying'],
    "face-your-fears": ['tiptoe', 'frightened', 'stare', 'scary', 'scared', 'run', 'right', 'Dreaming', 'Aftermath', 'ready'],
    "fit-hot-guys-have-problems-too": ['problems', 'perfect', 'sad', 'guys', 'dancing', 'Reflect', 'Personality', 'Gaze', 'Reflection', 'alone'],
    "group-hang": ['El amor', 'Bastardization', 'Guadalaraja', 'Gaslighted', 'Cheesecake', 'Restaurant', 'Guacamole', 'Mushrooms', 'Margarita', 'Sprooshed'],
    "i-hate-everything-but-you": ['everything', 'hate', 'game', 'true', 'pictures', 'feeling', 'done', 'love', 'day', 'screaming'],
    "im-a-good-person": ['person', 'good', 'humble', 'right', 'Greatness', 'Personality', 'true', 'find', 'everything', 'better'],
    "im-afraid-of-americans": ['America', 'afraid', 'world', 'hair', 'Internet', 'Interlude', 'Americans', 'American', 'Refrain', 'Pretend'],
    "im-the-villain-in-my-own-story": ['villain', 'witch', 'story', 'princess', 'perfect', 'love', 'sisterhood', 'Ridiculously', 'Protagonist', 'Traditional'],
    "immobile": ['La peur', 'Le cœur', 'La profondeur', 'Le vide', 'La présence', 'Le premier', 'Enfoncent', 'Confiance', 'Angoisses', 'Autoroute'],
    "its-getting-better": ['right', 'Wilderness', 'Warm', 'love', 'everything', 'day', 'better', 'naturopath', 'nightlife', 'Contentment'],
    "je-taime-comme-je-taime": ['Le silence ≠ Le bruit', 'La blessure', 'Blessures', 'Réconfort', 'Silences', 'Toujours', 'Évidence', 'Calmant', 'Endroit', 'Couplet'],
    "jim-beam": ['Грусть (она)', 'Лихорадка (она)', 'Тревога (она)', 'Стакан (он)', 'Осень (она)', 'Нервы (они)', 'Танцплощадка (она)', 'Целоваться (она)', 'Лихорадке (оно)', 'Литвинова (она)'],
    "kapoies-nychtes": ['Το φεγγάρι', 'Η μοναξιά', 'Ο δρόμος', 'βλέφαρα', 'λύπη', 'χέρια', 'φτωχούς', 'λογισμούς', 'παιδιά', 'κρεβάτια'],
    "la-nuit-nen-finit-plus": ['La nuit', 'La solitude', 'La tristesse ≠ La joie', 'Le silence ≠ Le bruit', 'Le temps', 'Le vide', 'La solitudine', 'La tristeza', 'Solitaires', 'Cigarette'],
    "la-tour-eiffel-est-pour-moi": ['Montparnasse', 'Bienheureux', 'Flamboyante', 'Éparpillent', 'Évidemment', 'Accueillir', 'Paillettes', 'Regardant', 'Scintille', 'Réchauffe'],
    "lamore-e-un-attimo": ['Malinconia', 'Strappate', 'Tristezza', 'Dividerci', 'Pensiero', 'Chiudono', 'Felicità', 'Dirtelo', 'Lettera', 'Passato'],
    "laziza": ['La rue', 'La réponse', 'Le choix', 'Le regard', 'La force', 'Cherchent', 'Enroulée', 'Problème', 'Vraiment', 'Pourquoi'],
    "le-soleil-noir": ['Упорядочения (она)', 'Rejectionné (он)', 'Coquillages (он)', 'Nonchalance (он)', 'Frontières (он)', 'Tintamarre (он)', 'Déchirures (он)', 'Écartelée (он)', 'Solitaire (он)', 'Éclatants (он)'],
    "leffet-de-masse": ['Partageaitton', 'Différent', 'Plusieurs', 'Toujours', 'Méchants', 'Couloirs', 'Meilleur', 'Histoire', 'Rigolent', 'Nombreux'],
    "left-outside-alone": ['Safe', 'Pray', 'Hope', 'game', 'alone', 'find', 'love', 'Understand', 'Heavenly', 'Careless'],
    "lets-generalize-about-men": ['Generalize', 'repressed', 'blanket', 'conflate', 'exception', 'distinguish', 'opposite', 'right', 'Greatness', 'Conflict'],
    "lifeboat": ['ocean', 'lifeboat', 'sink', 'captain', 'weakest', 'fighting', 'storm', 'wrong', 'outfit', 'crowded'],
    "love-kernels": ['Kernels', 'cactus', 'drought', 'symbolism', 'stockpile', 'compliment', 'patience', 'movies', 'tonight', 'sexy'],
    "luomo-che-amava-le-donne": ['Dimenticarti', 'Improbabili', 'Ritornello', 'Difficile', 'Solamente', 'Stupidi', 'Piaceva', 'Consumi', 'Proprio', 'Lontano'],
    "ma-philosophie": ['La philosophie', 'Le poing', 'La différence', 'La force ≠ La faiblesse', 'Le sacrifice', 'Le sourire', 'Le cœur', 'Le choix', 'Meilleur', 'Incessantes'],
    "make-your-own-kind-of-music": ['Chorus', 'special', 'lonely', 'Nobody', 'Understand', 'Loneliest', 'Hardest', 'Someone', 'Knowin', 'Bridge'],
    "me-and-i": ['different', 'find', 'together', 'everything', 'answers', 'screaming', 'Internet', 'Interlude', 'Combination', 'Explanation'],
    "mixed-up-world": ['right', 'find', 'feeling', 'hide', 'place', 'love', 'guidance', 'day', 'Bridge', 'Contradiction'],
    "na-i-agapi-na": ['Η αγάπη', 'Το όνειρο', 'όνειρο', 'μιλιά', 'τέλος', 'πρωί', 'φωνή', 'αντίο', 'Υπάρχει', 'Πουθενά'],
    "nos-ames-sont": ['Prisonnière', 'La voix', 'La bellezza', 'Étoufferaient', 'Prisonnières', 'Rappellent', 'Ridicules', 'Déclarées', 'Infidèles', 'Confinés'],
    "nuevo-verano": ['Últimamente', 'Estribillo', 'Estrellas', 'Temblando', 'Solamente', 'Olvidado', 'Guitarra', 'Hablando', 'Volverás', 'Mordidas'],
    "o-gatos": ['Ο γάτος', 'Η νύχτα', 'Το τραγούδι', 'εισιτήριο', 'εκδρομή', 'ταξίδια', 'σταθμούς', 'παγκάκια', 'τραγούδι', 'βροχή'],
    "oh-my-god-i-think-i-like-you": ['feeling', 'heart', 'sink', 'ruined', 'focus', 'everything', 'day', 'Spermicidal', 'Fluttering', 'Physically'],
    "oh-to-be-in-love": ['choose', 'Dreaming', 'find', 'face', 'place', 'love', 'everything', 'Dreamers', 'Yesterday', 'Pendulum'],
    "one-of-the-greats": ['Greatness', 'right', 'Dreaming', 'Regret', 'beautiful', 'hotel', 'done', 'everything', 'screaming', 'Dreamers'],
    "oui-ou-non": ['Le temps', 'Le regard', 'La nuit', 'La bellezza', 'Romantisme', 'Finalement', 'Recharger', 'Mensonges', 'Embrasses', 'Comptent'],
    "ouvrir-les-yeux": ['Le cœur', 'Désespoir', 'La mémoire', 'Prisonnière', 'Le monde', 'Seule', 'Froid', 'Oublier', 'La chaleur', 'Le ciel'],
    "overprotected": ['Overprotected', 'Perspective', 'right', 'find', 'support', 'supposed', 'love', 'everything', 'mistake', 'answers'],
    "quelquun-pour-toi": ['Le temps', 'Le regard', 'Phénomène', 'Attendent', 'Toujours', 'Favorite', 'Histoire', 'Dynamite', 'Coupable', 'Parcours'],
    "salut": ['Le salut', 'Le temps', 'Le café', 'Le souvenir', 'Le changement', 'Histoire', 'Beaucoup', 'Désirais', 'Raconter', 'Mauvais'],
    "second-hand-rose": ['Secondhand', 'apartment', 'everything', 'Someone', 'Toothpicks', 'Strictly', 'Everyone', 'Business', 'Plumber', 'Wearing'],
    "settle-for-me": ["L'amore", 'Expectations', 'Masculinity', 'Practical', 'Demeaning', 'Babycakes', 'Swallowed', 'Training', 'Schmoopy', 'Proposal'],
    "seventeen": ['damaged', 'normal', 'special', 'different', 'movies', 'summer', 'dancing', 'tonight', 'choose', 'right'],
    "sex-with-a-stranger": ['stranger', 'movies', 'right', 'sexy', 'Brown', 'Hope', 'beautiful', 'bathroom', 'wash', 'face'],
    "sexy-french-depression": ['La réponse', 'Conversations', 'Cafouillages', 'Sérieusement', 'Depression', 'Réparation', 'Problèmes', 'Messenger', 'Demandant', 'Réfléchis'],
    "sexy-getting-ready-song": ['ready', 'sexy', 'plucking', 'movies', 'tonight', 'Changer', 'Aftermath', 'Change', 'everything', 'nightlife'],
    "slow-motion": ['motion', 'cool', 'hair', 'walking', 'normal', 'sexy', 'crime', 'problems', 'stress', 'Problème'],
    "so-maternal": ['Maternal', 'harrowing', 'matriarch', 'expectations', 'instinctual', 'tireless', 'Warm', 'Safe', 'Expectation', 'apartment'],
    "te-alejas-mas-de-mi": ['El olvido ≠ El recuerdo', 'Alejarse', 'El amor', 'El corazón', 'Coincidencia', 'Explicación', 'Destruyendo', 'Entiéndeme', 'Destrozar', 'Pregunto'],
    "the-greatest": ['Culture', 'Stream', 'Flame', 'Loss', 'dancing', 'Greatness', 'Aftermath', 'friendly', 'nightlife', 'Nobody'],
    "to-idio-to-theo": ['Ο έρωτας', 'Η αγάπη', 'Η αγκαλιά', 'Το φεγγάρι', 'Το όνειρο', 'ήλιος', 'όνειρο', 'βιβλία', 'φεγγάρι', 'μαλλιά'],
    "toi-mon-amour": ['Le cœur', 'Seulement', 'Ignorais', 'Toujours', 'Cueille', 'Savais', 'Amours', 'Jours', 'Lourd', 'Crois'],
    "toutes-les-machines-ont-le-coeur": ['Ordinateur (он)', 'Étincelles (он)', 'Messenger (он)', 'Permanent (он)', 'Portable (он)', 'Meilleur (он)', 'Pourtant (он)', 'Vraiment (он)', 'Machines (он)', 'Smileys (он)'],
    "tu-ten-iras": ['Le doute', 'Le changement', 'La force', 'Grandiras', 'Attendais', 'Autrefois', 'Exprimer', 'Redouter', 'Lasseras', 'Fallait'],
    "u-mamy-est-sekret": ['Секрет (он)', 'Страшилка (она)', 'Картон (он)', 'Шоколадка (она)', 'Плакат (он)', 'Тюрьма (она)', 'Малютка (она)', 'Сосед (он)', 'Аптека (она)', 'Слезинка (она)'],
    "un-premier-amour": ['Le premier', 'Le souvenir', 'Le baiser', 'Engageaient', 'Émerveillés', 'Longtemps', 'Soupçonné', 'Innocents', 'Trembler', 'Toujours'],
    "un-raggio-di-sole": ['Il raggio', 'Il sole', 'Il mare', 'Praticamente', 'Gridandomi', 'Cambiarmi', 'Lasciarmi', 'Uccellini', 'Attacchi', 'Ingresso'],
    "unatta-estate": ['Il mare ≠ La terra', 'Il cuore', 'Il pianto', 'Ritornello', 'Orizzonte', 'Nuoteremo', 'Primavera', 'Tempesta', 'Rincuora', 'Crediamo'],
    "unlikely-lovers": ['right', 'fighting', 'Winter', 'Sky', 'friendly', 'together', 'feeling', 'face', 'love', 'fight'],
    "voila": ['Le rêve', 'Le silence', 'Le regard', 'Longtemps', 'Histoires', 'Chanteuse', 'Toujours', 'Arrivent', 'Regardez', 'Contours'],
    "vyshe-domov": ['Город (он)', 'Наряд (он)', 'Куртка (она)', 'Провода (они)', 'Дурак (он)', 'Предприпев (он)', 'Слишком (он)', 'Цветком (он)', 'Похожей (он)', 'Провода (она)'],
    "whatll-it-be": ['Covina', 'find', 'drinks', 'right', 'Dreaming', 'game', 'friendly', 'free', 'door', 'everything'],
    "where-is-my-husband": ['Brown', 'ready', 'beautiful', 'alone', 'lonely', 'find', 'ring', 'love', 'day', 'Loneliest'],
    "wheres-the-bathroom": ['bathroom', 'right', 'Dreaming', 'nice', 'love', 'everything', 'lotion', 'cheddar', 'goyish', 'luggage'],
    "whos-the-new-guy": ['new', 'normal', 'Personality', 'Trust', 'Desperation', 'person', 'deal', 'care', 'manic', 'Someone'],
    "without-love-you-can-save-the-world": ['love', 'save', 'world', 'Changer', 'Obsession', 'Change', 'find', 'better', 'bulimia', 'pandas'],
    "women-gotta-stick-together": ['together', 'support', 'stick', 'friendship', 'wrong', 'plucking', 'Changer', 'Greatness', 'Change', 'friendly'],
    "you-stupid-bitch": ['ruined', 'stupid', 'lose', 'done', 'everything', 'Stupidi', 'Everyone', 'Innocents', 'Festering', 'Completes']
}

songs_list = []
for slug in sorted(LYRICS_DATA.keys()):
    path = f"events/sessions/karaoke-club/{slug}.html"
    if not os.path.exists(path):
        path = f"events/sessions/{slug}.html"
    if not os.path.exists(path):
        if slug in NEW_SONGS_METADATA:
            meta = NEW_SONGS_METADATA[slug]
            vocab_to_use = COMPLETE_SONG_VOCAB.get(slug, meta["vocab"])
            songs_list.append({
                "slug": slug,
                "title": meta["title"],
                "artist": meta["artist"],
                "level": meta["level"],
                "lang": meta["lang"],
                "variety": meta["variety"],
                "focus": meta["focus"],
                "vocab": vocab_to_use,
                "helpers": LYRICS_DATA[slug]["helpers"],
                "lyrics": LYRICS_DATA[slug]["lyrics"]
            })
        continue
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    title_m = re.search(r"<h1>(.*?)</h1>", html)
    title = title_m.group(1).strip() if title_m else slug.replace("-", " ").title()

    date_m = re.search(r'<p class="session-date">(.*?) • (.*?)</p>', html)
    artist = date_m.group(1).strip() if date_m else ""
    level_raw = date_m.group(2).strip() if date_m else "B1"

    lang_m = re.search(r'<html lang="(.*?)">', html)
    lang = lang_m.group(1).strip() if lang_m else "en"

    variety_m = re.search(r"<h4>(?:Variety/Language|Language|Langue|Язык|Lingua|Idioma|Γλώσσα|Variety)</h4>\s*<p>(.*?)</p>", html, re.DOTALL)
    variety = variety_m.group(1).strip() if variety_m else "English"

    focus_m = re.search(r"<h4>(?:Thematic Focus|Focus|Thème|Тема|Tema|Θέμα)</h4>\s*<p>(.*?)</p>", html, re.DOTALL)
    focus = focus_m.group(1).strip() if focus_m else ""

    if slug in SONG_THEMES:
        focus = SONG_THEMES[slug].get(lang, SONG_THEMES[slug].get("en", focus))

    vocab = re.findall(r'<div class="vocab-word"[^>]*>(.*?)</div>', html)
    vocab_cleaned = []
    for v in vocab:
        v_stripped = v.strip()
        if "style=" in v_stripped:
            sub_m = re.search(r'>(.*?)<', v_stripped)
            if sub_m:
                v_stripped = sub_m.group(1).strip()
        vocab_cleaned.append(v_stripped)
    if slug in COMPLETE_SONG_VOCAB:
        vocab_cleaned = COMPLETE_SONG_VOCAB[slug]

    level_short = "B1"
    if any(k in level_raw for k in ["A2", "Débutant", "Στοιχειώδες", "Beginner"]):
        level_short = "A2"
    elif any(k in level_raw for k in ["B2", "Upper Intermediate", "Intermédiaire Supérieur"]):
        level_short = "B2"
    elif "C1" in level_raw:
        level_short = "C1"

    songs_list.append({
        "slug": slug,
        "title": title,
        "artist": artist,
        "level": level_short,
        "lang": lang,
        "variety": variety,
        "focus": focus,
        "vocab": vocab_cleaned,
        "helpers": LYRICS_DATA[slug]["helpers"],
        "lyrics": LYRICS_DATA[slug]["lyrics"]
    })

# STEP 2: Parse all 11 challenges dynamically from their existing files
challenges_list = []
for slug in sorted(CHALLENGE_MAP.keys()):
    path = f"events/sessions/karaoke-club/{slug}.html"
    if not os.path.exists(path):
        path = f"events/sessions/{slug}.html"
    if not os.path.exists(path):
        continue
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    title_m = re.search(r"<h1>(.*?)</h1>", html)
    title = title_m.group(1).strip() if title_m else slug.replace("-", " ").title()

    date_m = re.search(r'<p class="session-date">(.*?) • (.*?)</p>', html)
    artist = date_m.group(1).strip() if date_m else ""
    level_raw = date_m.group(2).strip() if date_m else "B1"

    lang_m = re.search(r'<html lang="(.*?)">', html)
    lang = lang_m.group(1).strip() if lang_m else "en"

    variety_m = re.search(r"<h4>(?:Variety/Language|Language|Langue|Язык|Lingua|Idioma|Γλώσσα|Variety)</h4>\s*<p>(.*?)</p>", html, re.DOTALL)
    variety = variety_m.group(1).strip() if variety_m else "English"

    focus_m = re.search(r"<h4>(?:Thematic Focus|Focus|Thème|Тема|Tema|Θέμα)</h4>\s*<p>(.*?)</p>", html, re.DOTALL)
    focus = focus_m.group(1).strip() if focus_m else ""

    if slug in SONG_THEMES:
        focus = SONG_THEMES[slug].get(lang, SONG_THEMES[slug].get("en", focus))

    vocab = re.findall(r'<div class="vocab-word"[^>]*>(.*?)</div>', html)
    vocab_cleaned = []
    for v in vocab:
        v_stripped = v.strip()
        if "style=" in v_stripped:
            sub_m = re.search(r'>(.*?)<', v_stripped)
            if sub_m:
                v_stripped = sub_m.group(1).strip()
        vocab_cleaned.append(v_stripped)
    if slug in COMPLETE_SONG_VOCAB:
        vocab_cleaned = COMPLETE_SONG_VOCAB[slug]

    level_short = "B1"
    if any(k in level_raw for k in ["A2", "Débutant", "Στοιχειώδες", "Beginner"]):
        level_short = "A2"
    elif any(k in level_raw for k in ["B2", "Upper Intermediate", "Intermédiaire Supérieur"]):
        level_short = "B2"
    elif "C1" in level_raw:
        level_short = "C1"

    sub_slugs = CHALLENGE_MAP[slug]

    combined_lyrics_parts = []
    combined_helpers = []

    for i, sub_slug in enumerate(sub_slugs):
        sub_title = next((s["title"] for s in songs_list if s["slug"] == sub_slug), sub_slug.replace("-", " ").title())
        lyrics_text = LYRICS_DATA[sub_slug]["lyrics"]

        song_label = f"Song {i+1}"
        if lang == "fr":
            song_label = f"Chanson {i+1}"
        elif lang == "it":
            song_label = f"Canzone {i+1}"
        elif lang == "es":
            song_label = f"Canción {i+1}"
        elif lang == "ru":
            song_label = f"Песня {i+1}"
        elif lang == "el":
            song_label = f"Τραγούδι {i+1}"

        combined_lyrics_parts.append(f"{song_label}: {sub_title}\n\n{lyrics_text}")
        combined_helpers.extend(LYRICS_DATA[sub_slug]["helpers"])

    combined_lyrics = "\n\n".join(combined_lyrics_parts)
    combined_helpers = list(dict.fromkeys(combined_helpers))

    challenges_list.append({
        "slug": slug,
        "title": title,
        "artist": artist,
        "level": level_short,
        "lang": lang,
        "variety_lang": variety,
        "focus": focus,
        "vocab": vocab_cleaned,
        "helpers": combined_helpers,
        "lyrics": combined_lyrics
    })

all_karaoke_data = songs_list + challenges_list

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — COSYlanguages</title>
<link rel="icon" href="../../../images/logos/cosylanguages.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../../css/tokens.css">
<link rel="stylesheet" href="../../../css/base.css">
<link rel="stylesheet" href="../../../css/components.css">
<link rel="stylesheet" href="../../../css/layout.css">
<link rel="stylesheet" href="../../../css/events.css">
</head>
<body>
<nav id="cosy-nav"></nav>
<header class="session-hero" style="background: linear-gradient(135deg, #4A154B, #2A0A35);">
  <div class="club-tag">Karaoke Club</div>
  <h1>{title}</h1>
  <p class="session-date">{artist} • {level_short}</p>
</header>
<main class="content-container">
  <nav class="cosy-breadcrumbs">
    <a href="../../../">{breadcrumbs_home}</a> <span class="sep">/</span>
    <a href="../../">{breadcrumbs_events}</a> <span class="sep">/</span>
    <a href="../../karaoke-club.html">{breadcrumbs_club}</a> <span class="sep">/</span>
    <span class="current">{title}</span>
  </nav>
  <a href="../../karaoke-club.html" class="back-link">{back_link}</a>
  <div class="session-meta-grid">
    <div class="meta-item"><h4>{dur_label}</h4><p>{dur_val}</p></div>
    <div class="meta-item"><h4>{lang_label}</h4><p>{variety_lang}</p></div>
    <div class="meta-item"><h4>{level_label}</h4><p>{level_long}</p></div>
    <div class="meta-item"><h4>{focus_label}</h4><p>{focus}</p></div>
    <div class="meta-item"><h4>Resources</h4><p>
      <a href="{song_link}" target="_blank" style="color:var(--teal); margin-right: 12px;">Music Video 🎥</a>
      <a href="{song_link_backup}" target="_blank" style="color:var(--teal);">Song Link (Backup) 🎵</a>
    </p></div>
    <div class="meta-item"><h4>Offline Access</h4><p><button onclick="window.print()" class="btn-print" style="background: var(--indigo); color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.4rem; transition: background 0.2s;"><span style="font-size: 1rem;">📄</span> Download PDF</button></p></div>
  </div>

  <div class="theme-box" style="background: var(--cream); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; border: 1px dashed var(--border);">
    <h3 style="margin-top:0; font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo);">❤️ {theme_label}: {focus}</h3>
    <p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--ink-soft);">{discuss_label}:</p>
    <ul style="margin:0; padding-left:1.2rem; font-size:0.9rem; color:var(--ink-soft);">
      {theme_bullet_points}    </ul>
  </div>

  <div class="speaking-time-gauge" style="background: var(--warm-white); border-radius: 12px; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border); display: flex; flex-direction: column; gap: 0.5rem;">
    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: bold; color: var(--muted);">
      <span>🗣️ Speaking Time Gauge</span>
      <span>90-120 min Session</span>
    </div>
    <div class="gauge-bar" style="display: flex; height: 12px; border-radius: 6px; overflow: hidden;">
      <div style="width: 10%; background: #E67E22;" title="Warm-up (10%)"></div>
      <div style="width: 15%; background: #3498DB;" title="Vocabulary (15%)"></div>
      <div style="width: 15%; background: #9B59B6;" title="Listening (15%)"></div>
      <div style="width: 45%; background: #2ECC71;" title="Discussion (45%)"></div>
      <div style="width: 10%; background: #F1C40F;" title="Language Focus (10%)"></div>
      <div style="width: 5%; background: #E74C3C;" title="Final Challenge (5%)"></div>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--muted); flex-wrap: wrap; gap: 0.5rem;">
      <span>🎵 Warm-up (10%)</span>
      <span>📚 Vocabulary (15%)</span>
      <span>🎧 Listening (15%)</span>
      <span>💬 Discussion (45%)</span>
      <span>✨ Language Focus (10%)</span>
      <span>🎭 Final Challenge (5%)</span>
    </div>
  </div>

  <div class="rounds-container">
    <div class="round-block warm-up open" id="s-warm">
      <div class="round-header" style="background:#FAEEE8; cursor:pointer;" onclick="COSY.toggleRound(\'s-warm\')">
        <span>{warmup_title}</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block;">
        <ul class="round-questions">
{warmup_questions_html}        </ul>
      </div>
    </div>

    <div class="round-block open" id="vocabulary">
      <div class="round-header" style="background:#E1F5EE; cursor:pointer;" onclick="COSY.toggleRound(\'vocabulary\')">
        <span>{vocab_title}</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
        <div class="vocab-grid-10">
{vocab_cards_html}        </div>
      </div>
    </div>

    <div class="round-block open" id="listening-exercise">
      <div class="round-header" style="background:#FAF0E6; cursor:pointer;" onclick="COSY.toggleRound(\'listening-exercise\')">
        <span>{listening_title}</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
        <div style="background: var(--cream); padding: 1.5rem; border-radius: 16px; border: 1px solid var(--border); margin-bottom: 2rem;">
          <h3 style="font-size: 1rem; margin-top: 0; margin-bottom: 0.75rem;">{word_bank_title}</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; font-family: \'Nunito\', sans-serif;">
{word_bank_html}          </div>
        </div>

        <div class="lyrics-container" style="background: #fafafa; border: 1px solid var(--border); border-radius: 24px; padding: 2rem; font-family: \'DM Sans\', sans-serif; line-height: 1.8; color: var(--ink-soft); max-height: 500px; overflow-y: auto;">
          <p style="white-space: pre-wrap; font-style: italic; margin-bottom: 0;">{lyrics_text}</p>
        </div>
      </div>
    </div>

    <div class="round-block open" id="discussion">
      <div class="round-header" style="background:#EEEDFE; cursor:pointer;" onclick="COSY.toggleRound(\'discussion\')">
        <span>{discussion_title}</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
        <div class="round-1" style="margin-bottom: 2rem;">
          <h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
{r1_questions_html}        </div>
        <div class="round-2" style="margin-top: 2rem;">
          <h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
{r2_statements_html}        </div>
      </div>
    </div>

    <div class="round-block open" id="lang-focus">
      <div class="round-header" style="background:#FFF9E6; cursor:pointer;" onclick="COSY.toggleRound(\'lang-focus\')">
        <span>{lang_focus_title}</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
{lang_focus_html}      </div>
    </div>

    <div class="round-block open" id="final-challenge">
      <div class="round-header" style="background:#FEEAEA; cursor:pointer;" onclick="COSY.toggleRound(\'final-challenge\')">
        <span>{final_challenge_title}</span><span class="round-toggle">▲</span>
      </div>
      <div class="round-body" style="display:block; padding-top: 1.5rem;">
{final_challenge_html}      </div>
    </div>

    <div class="mistake-block open" id="s-mistakes">
      <div class="mistake-header" onclick="COSY.toggleBlock(\'s-mistakes\')">
        <span>{teacher_note_title}</span><span class="round-toggle">▲</span>
      </div>
      <div class="mistake-body" style="display:block;">
{mistakes_html}      </div>
    </div>
  </div>
</main>
<footer style="border-top:1px solid var(--border);padding:4rem 2rem;text-align:center;font-size:.85rem;color:var(--muted);background: #fdfdfd;">
  <div class="footer-nav" style="display:flex;justify-content:center;gap:2rem;margin-bottom:1.5rem;flex-wrap:wrap;">
    <a href="../../../index.html" style="color:var(--muted);text-decoration:none;">Home</a>
    <a href="../../../practice/index.html" style="color:var(--muted);text-decoration:none;">Practice</a>
    <a href="../../../games/index.html" style="color:var(--muted);text-decoration:none;">Games</a>
    <a href="../../index.html" style="color:var(--muted);text-decoration:none;">Events</a>
  </div>
  <p>© 2026 COSYlanguages — All rights reserved</p>
</footer>
<script src="../../../js/core/engine.js"></script>
<script src="../../../js/core/ui.js"></script>
</body>
</html>"""

CHALLENGE_HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — COSYlanguages</title>
<link rel="icon" href="../../../images/logos/cosylanguages.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../../css/tokens.css">
<link rel="stylesheet" href="../../../css/base.css">
<link rel="stylesheet" href="../../../css/components.css">
<link rel="stylesheet" href="../../../css/layout.css">
<link rel="stylesheet" href="../../../css/events.css">
</head>
<body>
<nav id="cosy-nav"></nav>
<header class="session-hero" style="background: linear-gradient(135deg, #4A154B, #2A0A35);">
  <div class="club-tag">Karaoke Club</div>
  <h1>{title}</h1>
  <p class="session-date">{artist} • {level_short}</p>
</header>
<main class="content-container">
  <nav class="cosy-breadcrumbs">
    <a href="../../../">{breadcrumbs_home}</a> <span class="sep">/</span>
    <a href="../../">{breadcrumbs_events}</a> <span class="sep">/</span>
    <a href="../../karaoke-club.html">{breadcrumbs_club}</a> <span class="sep">/</span>
    <span class="current">{title}</span>
  </nav>
  <a href="../../karaoke-club.html" class="back-link">{back_link}</a>
  <div class="session-meta-grid">
    <div class="meta-item"><h4>{dur_label}</h4><p>{dur_val}</p></div>
    <div class="meta-item"><h4>{lang_label}</h4><p>{variety_lang}</p></div>
    <div class="meta-item"><h4>{level_label}</h4><p>{level_long}</p></div>
    <div class="meta-item"><h4>{focus_label}</h4><p>{focus}</p></div>
    <div class="meta-item"><h4>Offline Access</h4><p><button onclick="window.print()" class="btn-print" style="background: var(--indigo); color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.4rem; transition: background 0.2s;"><span style="font-size: 1rem;">📄</span> Download PDF</button></p></div>
  </div>
  <div style="margin-bottom: 2rem; line-height: 1.6; color: var(--ink-soft); font-size: 0.95rem;">
    <p>{description}</p>
  </div>

  <vim-choice>
{tabs_html}  </vim-choice>

</main>
<footer style="border-top:1px solid var(--border);padding:4rem 2rem;text-align:center;font-size:.85rem;color:var(--muted);background: #fdfdfd;">
  <div class="footer-nav" style="display:flex;justify-content:center;gap:2rem;margin-bottom:1.5rem;flex-wrap:wrap;">
    <a href="../../../index.html" style="color:var(--muted);text-decoration:none;">Home</a>
    <a href="../../../practice/index.html" style="color:var(--muted);text-decoration:none;">Practice</a>
    <a href="../../../games/index.html" style="color:var(--muted);text-decoration:none;">Games</a>
    <a href="../../index.html" style="color:var(--muted);text-decoration:none;">Events</a>
  </div>
  <p>© 2026 COSYlanguages — All rights reserved</p>
</footer>
<script src="../../../js/core/engine.js"></script>
<script src="../../../js/core/ui.js"></script>
</body>
</html>"""

for song in all_karaoke_data:
    slug = song["slug"]
    title = song["title"]
    artist = song["artist"]
    level_short = song["level"]
    level_long = "Intermediate (B1)" if level_short == "B1" else ("Beginner (A2)" if level_short == "A2" else ("Upper Intermediate (B2)" if level_short == "B2" else "Advanced (C1)"))

    if song["lang"] == "fr":
        level_long = "Intermédiaire (B1)" if level_short == "B1" else ("Débutant (A2)" if level_short == "A2" else "Intermédiaire Supérieur (B2)")
    elif song["lang"] == "ru":
        level_long = "Средний (B1)"
    elif song["lang"] == "it":
        level_long = "Intermedio (B1)"
    elif song["lang"] == "es":
        level_long = "Intermedio (B1)"
    elif song["lang"] == "el":
        level_long = "Μεσαίο (B1)" if level_short == "B1" else "Στοιχειώδες (A2)"

    lang = song["lang"]
    variety_lang = song["variety_lang"] if "variety_lang" in song else song.get("variety", "English")
    focus = song["focus"]

    loc = LOCALIZATIONS_NEW[lang] if lang in LOCALIZATIONS_NEW else LOCALIZATIONS_NEW["en"]

    existing_vocab = parse_existing_vocab(slug)

    theme_bullet_points = ""
    custom_bullet_points = {
        "toutes-les-machines-ont-le-coeur": ["human connection", "digital age", "technological impact", "emotional fragility"],
        "ma-philosophie": ["personal philosophy", "determination & strength", "diversity & pride", "individual choices"],
        "je-taime-comme-je-taime": ["unconditional love", "relationships", "emotional intimacy", "peace of mind"],
        "unlikely-lovers": ["unlikely relationships", "hope & devotion", "adversity & support", "solace in crisis"]
    }
    if slug in custom_bullet_points:
        points = custom_bullet_points[slug]
    else:
        points = [v.replace("Le ", "").replace("La ", "").replace("L'", "").capitalize() for v in song["vocab"][:3]] + ["Personal reflection"]

    for pt in points:
        theme_bullet_points += f"      <li>{pt}</li>\n"

    if slug in CHALLENGE_MAP:
        dur_val = "90 minutes"

        tabs_html = ""
        for sub_slug in CHALLENGE_MAP[slug]:
            sub_song = next((s for s in songs_list if s["slug"] == sub_slug), None)
            if not sub_song:
                continue

            sub_title = sub_song["title"]
            sub_artist = sub_song["artist"]

            sub_song_link = SONG_LINKS.get(sub_slug, f"https://www.youtube.com/results?search_query={sub_title.replace(' ', '+')}+{sub_artist.replace(' ', '+')}")
            sub_song_link_backup = sub_song_link

            sub_existing_vocab = parse_existing_vocab(sub_slug)

            sub_elements = generate_song_elements(sub_song, loc, lang, sub_slug=sub_slug, existing_vocab=sub_existing_vocab)

            sub_theme_bullet_points = ""
            if sub_slug in custom_bullet_points:
                sub_points = custom_bullet_points[sub_slug]
            else:
                sub_points = [v.replace("Le ", "").replace("La ", "").replace("L'", "").capitalize() for v in sub_song["vocab"][:3]] + ["Personal reflection"]
            for pt in sub_points:
                sub_theme_bullet_points += f"      <li>{pt}</li>\n"

            tabs_html += f"""    <vim-choice-option>
      <vim-choice-option-title>{sub_title}</vim-choice-option-title>
      <vim-choice-option-content>
        <div class="session-meta-grid" style="margin-top: 0; margin-bottom: 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
          <div class="meta-item"><h4>Resources</h4><p>
            <a href="{sub_song_link}" target="_blank" style="color:var(--teal); margin-right: 12px;">Music Video 🎥</a>
            <a href="{sub_song_link_backup}" target="_blank" style="color:var(--teal);">Song Link (Backup) 🎵</a>
          </p></div>
        </div>

        <div class="theme-box" style="background: var(--cream); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; border: 1px dashed var(--border);">
          <h3 style="margin-top:0; font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo);">❤️ {loc["theme_label"]}: {sub_song["focus"]}</h3>
          <p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--ink-soft);">{loc["discuss_label"]}:</p>
          <ul style="margin:0; padding-left:1.2rem; font-size:0.9rem; color:var(--ink-soft);">
            {sub_theme_bullet_points}          </ul>
        </div>

        <div class="speaking-time-gauge" style="background: var(--warm-white); border-radius: 12px; padding: 1rem; margin-bottom: 3rem; border: 1px solid var(--border); display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: bold; color: var(--muted);">
            <span>🗣️ Speaking Time Gauge</span>
            <span>90-120 min Session</span>
          </div>
          <div class="gauge-bar" style="display: flex; height: 12px; border-radius: 6px; overflow: hidden;">
            <div style="width: 10%; background: #E67E22;" title="Warm-up (10%)"></div>
            <div style="width: 15%; background: #3498DB;" title="Vocabulary (15%)"></div>
            <div style="width: 15%; background: #9B59B6;" title="Listening (15%)"></div>
            <div style="width: 45%; background: #2ECC71;" title="Discussion (45%)"></div>
            <div style="width: 10%; background: #F1C40F;" title="Language Focus (10%)"></div>
            <div style="width: 5%; background: #E74C3C;" title="Final Challenge (5%)"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--muted); flex-wrap: wrap; gap: 0.5rem;">
            <span>{loc["warmup_title"]} (10%)</span>
            <span>{loc["vocab_title"]} (15%)</span>
            <span>{loc["listening_title"]} (15%)</span>
            <span>{loc["discussion_title"]} (45%)</span>
            <span>{loc["lang_focus_title"]} (10%)</span>
            <span>{loc["final_challenge_title"]} (5%)</span>
          </div>
        </div>

        <div class="rounds-container">
          <div class="round-block warm-up open" id="s-warm-{sub_slug}">
            <div class="round-header" style="background:#FAEEE8; cursor:pointer;" onclick="COSY.toggleRound(\'s-warm-{sub_slug}\')">
              <span>{loc["warmup_title"]}</span><span class="round-toggle">▲</span>
            </div>
            <div class="round-body" style="display:block;">
              <ul class="round-questions">
{sub_elements["warmup_questions_html"]}              </ul>
            </div>
          </div>

          <div class="round-block open" id="vocabulary-{sub_slug}">
            <div class="round-header" style="background:#E1F5EE; cursor:pointer;" onclick="COSY.toggleRound(\'vocabulary-{sub_slug}\')">
              <span>{loc["vocab_title"]}</span><span class="round-toggle">▲</span>
            </div>
            <div class="round-body" style="display:block; padding-top: 1.5rem;">
              <div class="vocab-grid-10">
{sub_elements["vocab_cards_html"]}              </div>
            </div>
          </div>

          <div class="round-block open" id="listening-exercise-{sub_slug}">
            <div class="round-header" style="background:#FAF0E6; cursor:pointer;" onclick="COSY.toggleRound(\'listening-exercise-{sub_slug}\')">
              <span>{loc["listening_title"]}</span><span class="round-toggle">▲</span>
            </div>
            <div class="round-body" style="display:block; padding-top: 1.5rem;">
              <div style="background: var(--cream); padding: 1.5rem; border-radius: 16px; border: 1px solid var(--border); margin-bottom: 2rem;">
                <h3 style="font-size: 1rem; margin-top: 0; margin-bottom: 0.75rem;">{loc["word_bank_title"]}</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; font-family: \'Nunito\', sans-serif;">
{sub_elements["word_bank_html"]}                </div>
              </div>

              <div class="lyrics-container" style="background: #fafafa; border: 1px solid var(--border); border-radius: 24px; padding: 2rem; font-family: \'DM Sans\', sans-serif; line-height: 1.8; color: var(--ink-soft); max-height: 500px; overflow-y: auto;">
                <p style="white-space: pre-wrap; font-style: italic; margin-bottom: 0;">{sub_elements["lyrics_text"]}</p>
              </div>
            </div>
          </div>

          <div class="round-block open" id="discussion-{sub_slug}">
            <div class="round-header" style="background:#EEEDFE; cursor:pointer;" onclick="COSY.toggleRound(\'discussion-{sub_slug}\')">
              <span>{loc["discussion_title"]}</span><span class="round-toggle">▲</span>
            </div>
            <div class="round-body" style="display:block; padding-top: 1.5rem;">
              <div class="round-1" style="margin-bottom: 2rem;">
                <h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
{sub_elements["r1_questions_html"]}              </div>
              <div class="round-2" style="margin-top: 2rem;">
                <h3 style="font-family:\'Playfair Display\', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
{sub_elements["r2_statements_html"]}              </div>
            </div>
          </div>

          <div class="round-block open" id="lang-focus-{sub_slug}">
            <div class="round-header" style="background:#FFF9E6; cursor:pointer;" onclick="COSY.toggleRound(\'lang-focus-{sub_slug}\')">
              <span>{loc["lang_focus_title"]}</span><span class="round-toggle">▲</span>
            </div>
            <div class="round-body" style="display:block; padding-top: 1.5rem;">
{sub_elements["lang_focus_html"]}            </div>
          </div>

          <div class="round-block open" id="final-challenge-{sub_slug}">
            <div class="round-header" style="background:#FEEAEA; cursor:pointer;" onclick="COSY.toggleRound(\'final-challenge-{sub_slug}\')">
              <span>{loc["final_challenge_title"]}</span><span class="round-toggle">▲</span>
            </div>
            <div class="round-body" style="display:block; padding-top: 1.5rem;">
{sub_elements["final_challenge_html"]}            </div>
          </div>

          <div class="mistake-block open" id="s-mistakes-{sub_slug}">
            <div class="mistake-header" onclick="COSY.toggleBlock(\'s-mistakes-{sub_slug}\')">
              <span>{loc["teacher_note_title"]}</span><span class="round-toggle">▲</span>
            </div>
            <div class="mistake-body" style="display:block;">
{sub_elements["mistakes_html"]}            </div>
          </div>
        </div>
      </vim-choice-option-content>
    </vim-choice-option>"""

        desc = f"Complete this special Karaoke Challenge consisting of {len(CHALLENGE_MAP[slug])} classic songs: {', '.join(songs_list[s]['title'] if isinstance(s, int) else next((song['title'] for song in songs_list if song['slug'] == s), s.replace('-', ' ').title()) for s in CHALLENGE_MAP[slug])}. Practice and compare their vocabulary, lyrics, and cultural significance!"
        if lang == "fr":
            desc = f"Relevez ce défi karaoké spécial composé de {len(CHALLENGE_MAP[slug])} chansons classiques : {', '.join(s['title'] if isinstance(s, dict) else next((song['title'] for song in songs_list if song['slug'] == s), s.replace('-', ' ').title()) for s in CHALLENGE_MAP[slug])}. Pratiquez et comparez leur vocabulaire, leurs paroles et leur signification culturelle !"
        elif lang == "it":
            desc = f"Completa questa speciale sfida di karaoke composta da {len(CHALLENGE_MAP[slug])} canzoni classiche: {', '.join(s['title'] if isinstance(s, dict) else next((song['title'] for song in songs_list if song['slug'] == s), s.replace('-', ' ').title()) for s in CHALLENGE_MAP[slug])}. Esercitati e confronta il loro vocabolario, i testi e il significato culturale!"
        elif lang == "es":
            desc = f"Completa este desafío especial de karaoke que consta de {len(CHALLENGE_MAP[slug])} canciones clásicas: {', '.join(s['title'] if isinstance(s, dict) else next((song['title'] for song in songs_list if song['slug'] == s), s.replace('-', ' ').title()) for s in CHALLENGE_MAP[slug])}. ¡Practica y compara su vocabulario, letras y significado cultural!"
        elif lang == "ru":
            desc = f"Пройдите этот специальный караоке-челлендж, состоящий из {len(CHALLENGE_MAP[slug])} классических песен: {', '.join(s['title'] if isinstance(s, dict) else next((song['title'] for song in songs_list if song['slug'] == s), s.replace('-', ' ').title()) for s in CHALLENGE_MAP[slug])}. Практикуйте и сравнивайте их словарный запас, тексты и культурную значимость!"
        elif lang == "el":
            desc = f"Ολοκληρώστε αυτήν την ειδική πρόκληση καραόκε που αποτελείται από {len(CHALLENGE_MAP[slug])} κλασικά τραγούδια: {', '.join(s['title'] if isinstance(s, dict) else next((song['title'] for song in songs_list if song['slug'] == s), s.replace('-', ' ').title()) for s in CHALLENGE_MAP[slug])}. Εξασκηθείτε και συγκρίνετε το λεξιλόγιό τους, τους στίχους και την πολιτιστική τους σημασία!"

        formatted_html = CHALLENGE_HTML_TEMPLATE.format(
            lang=lang,
            title=title,
            artist=artist,
            level_short=level_short,
            level_long=level_long,
            breadcrumbs_home=loc["breadcrumbs_home"],
            breadcrumbs_events=loc["breadcrumbs_events"],
            breadcrumbs_club=loc["breadcrumbs_club"],
            back_link=loc["back_link"],
            dur_label=loc["dur_label"],
            dur_val=dur_val,
            lang_label=loc["lang_label"],
            variety_lang=variety_lang,
            level_label=loc["level_label"],
            focus_label=loc["focus_label"],
            focus=focus,
            description=desc,
            tabs_html=tabs_html
        )
    else:
        dur_val = "90–120 minutes"
        song_link = SONG_LINKS.get(slug, f"https://www.youtube.com/results?search_query={title.replace(' ', '+')}+{artist.replace(' ', '+')}")
        song_link_backup = song_link

        elements = generate_song_elements(song, loc, lang, existing_vocab=existing_vocab)

        desc = f"Explore the beautiful track '{title}' by {artist} in {variety_lang}. This session focuses on the vocabulary of '{focus}' and key linguistic structures of the lyrics. Students will practice speaking and debating about these themes."
        if lang == "fr":
            desc = f"Explorez le magnifique titre '{title}' de {artist} en {variety_lang}. Cette session se concentre sur le vocabulaire de '{focus}' et les structures linguistiques clés des paroles. Les étudiants s'exerceront à s'exprimer et à débattre de ces thèmes."
        elif lang == "ru":
            desc = f"Разберите прекрасную песню '{title}' исполнителя {artist} на {variety_lang}. Эта сессия посвящена изучению лексики по теме '{focus}' и ключевых грамматических структур. Студенты будут практиковать разговорную речь и обсуждать заложенный смысл."
        elif lang == "it":
            desc = f"Esplora lo splendido brano '{title}' di {artist} in {variety_lang}. Questa sessione si concentra sul vocabolario legato a '{focus}' e sulle strutture linguistiche chiave del testo. Gli studenti faranno pratica di conversazione e dibattito su questi temi."
        elif lang == "es":
            desc = f"Explora la hermosa canción '{title}' de {artist} en {variety_lang}. Esta sesión se centra en el vocabulario de '{focus}' y en las estructuras lingüísticas clave de la letra. Los estudiantes practicarán la conversación y el debate sobre estos temas."
        elif lang == "el":
            desc = f"Ανακαλύψτε το πανέφορφο τραγούδι '{title}' του καλλιτέχνη {artist} στα {variety_lang}. Αυτή η συνεδρία εστιάζει στο λεξιλόγιο γύρω από το θέμα '{focus}' και στις βασικές γλωσσικές δομές των στίχων. Οι μαθητές θα εξασκηθούν στην ομιλία και τη συζήτηση."

        formatted_html = HTML_TEMPLATE.format(
            lang=lang,
            title=title,
            artist=artist,
            level_short=level_short,
            level_long=level_long,
            breadcrumbs_home=loc["breadcrumbs_home"],
            breadcrumbs_events=loc["breadcrumbs_events"],
            breadcrumbs_club=loc["breadcrumbs_club"],
            back_link=loc["back_link"],
            dur_label=loc["dur_label"],
            dur_val=dur_val,
            lang_label=loc["lang_label"],
            variety_lang=variety_lang,
            level_label=loc["level_label"],
            focus_label=loc["focus_label"],
            focus=focus,
            song_link=song_link,
            song_link_backup=song_link_backup,
            description=desc,
            theme_label=loc["theme_label"],
            discuss_label=loc["discuss_label"],
            theme_bullet_points=theme_bullet_points,
            vocab_title=loc["vocab_title"],
            vocab_cards_html=elements["vocab_cards_html"],
            listening_title=loc["listening_title"],
            word_bank_title=loc["word_bank_title"],
            word_bank_html=elements["word_bank_html"],
            lyrics_text=elements["lyrics_text"],
            warmup_title=loc["warmup_title"],
            warmup_questions_html=elements["warmup_questions_html"],
            r1_questions_html=elements["r1_questions_html"],
            r2_statements_html=elements["r2_statements_html"],
            teacher_note_title=loc["teacher_note_title"],
            mistakes_html=elements["mistakes_html"],
            discussion_title=loc["discussion_title"],
            lang_focus_title=loc["lang_focus_title"],
            lang_focus_html=elements["lang_focus_html"],
            final_challenge_title=loc["final_challenge_title"],
            final_challenge_html=elements["final_challenge_html"]
        )

    filepath = os.path.join(OUTPUT_DIR, f"{slug}.html")
    with open(filepath, "w", encoding="utf-8") as fh:
        fh.write(formatted_html)

print(f"Generated all {len(all_karaoke_data)} Karaoke session HTML pages successfully with full authentic lyrics, collapsible 6-stage layout, opposites, Theme Box, Speaking Time Progress, and PDF download button!")

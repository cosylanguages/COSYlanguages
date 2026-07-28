import os
import re
import sys

OUTPUT_DIR = "events/sessions/karaoke-club"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Add current scripts directory to sys.path to load master_lyrics safely
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from master_lyrics import LYRICS_DATA

# Proposed overarching themes mapped by song slug and language
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
    HANDCRAFTED_TEMPLATES = {
        "love": {
            "en": {
                "r1": [
                    "How does the message of unconditional devotion in '{title}' by {artist} redefine how we understand <strong>{w_lower}</strong>?",
                    "In '{title}', do you feel that <strong>{w_lower}</strong> is portrayed as a source of emotional strength, or does it expose a hidden vulnerability?",
                    "Analyzing the lyrics of {artist}, how does the presence of <strong>{w_lower}</strong> contrast with the typical struggles of modern relationships?",
                    "In what ways does '{title}' illustrate that true <strong>{w_lower}</strong> requires us to look past our partner's flaws?",
                    "How does the musical tempo of '{title}' elevate the feeling of <strong>{w_lower}</strong> within the narrative?",
                    "When {artist} sings about their feelings, does <strong>{w_lower}</strong> feel like a choice or an inevitable destiny?",
                    "Does '{title}' suggest that <strong>{w_lower}</strong> can easily cross the boundary into a dangerous obsession?",
                    "How does the imagery in the music video of '{title}' visualize the quiet comfort of <strong>{w_lower}</strong>?",
                    "In your opinion, does the protagonist in '{title}' find peace through <strong>{w_lower}</strong>, or are they left with lingering doubts?",
                    "How does the ending of '{title}' reframe the sacrifices we make in the name of <strong>{w_lower}</strong>?"
                ],
                "personal": [
                    "★ When was the last time you experienced a deep sense of <strong>{w_lower}</strong> without needing any words?",
                    "★ Do you agree that <strong>{w_lower}</strong> is something we must actively protect, or does it survive on its own?",
                    "★ How has your personal perspective on <strong>{w_lower}</strong> evolved over the last five years?",
                    "★ In your daily life, do you find it easy or difficult to show <strong>{w_lower}</strong> to those you care about?",
                    "★ What is the biggest lesson about <strong>{w_lower}</strong> that a close friend or family member has taught you?",
                    "★ Do you believe that modern technology has made it harder to cultivate genuine <strong>{w_lower}</strong>?",
                    "★ How do you personally handle situations where your sense of <strong>{w_lower}</strong> is not reciprocated?",
                    "★ If you could instantly share a wave of <strong>{w_lower}</strong> with someone today, who would it be?",
                    "★ Do you think that <strong>{w_lower}</strong> is more about shared joy, or is it forged during difficult times?",
                    "★ What quiet ritual or habit helps you bring more <strong>{w_lower}</strong> into your personal relationships?"
                ],
                "r2": [
                    "The idealized portrayal of <strong>{w_lower}</strong> in '{title}' is a beautiful but dangerous fantasy for modern daters. Let's debate this perspective.",
                    "Without a foundation of absolute <strong>{w_lower}</strong>, any romantic partnership is destined to crumble under societal pressure. Share your thoughts.",
                    "{artist}'s work shows that our modern obsession with finding the perfect <strong>{w_lower}</strong> is simply a shield against being alone. Defend or oppose this.",
                    "True <strong>{w_lower}</strong> can only exist when we are completely comfortable with our own independent lives. Discuss.",
                    "The music of '{title}' suggests that we must be willing to lose our sense of self to fully experience <strong>{w_lower}</strong>. Do you agree?",
                    "In the digital era, the quiet, slow development of <strong>{w_lower}</strong> has been replaced by instant gratification. Discuss.",
                    "We cannot truly understand <strong>{w_lower}</strong> until we have experienced its opposite: heartbreak and rejection. Analyze this.",
                    "{artist} warns us that placing too much weight on <strong>{w_lower}</strong> will always lead to self-sabotage. Share your perspective.",
                    "The ending of '{title}' proves that some forms of <strong>{w_lower}</strong> are worth any sacrifice. How do you see this?",
                    "If we guide our life decisions entirely by the pursuit of <strong>{w_lower}</strong>, we risk losing our professional ambitions. Discuss."
                ]
            },
            "fr": {
                "r1": [
                    "Comment le message de dévouement inconditionnel dans '{title}' par {artist} redéfinit-il notre compréhension de <strong>{w_lower}</strong> ?",
                    "Dans '{title}', pensez-vous que <strong>{w_lower}</strong> est présenté comme une force émotionnelle ou s'il expose une vulnérabilité cachée ?",
                    "En analysant les paroles de {artist}, comment la présence de <strong>{w_lower}</strong> contraste-t-elle avec les difficultés des couples modernes ?",
                    "De quelles manières '{title}' montre-t-il que le véritable <strong>{w_lower}</strong> nous pousse à accepter les défauts de l'autre ?",
                    "Comment le tempo musical de '{title}' renforce-t-il l'expression de <strong>{w_lower}</strong> dans cette œuvre ?",
                    "Quand {artist} chante ses sentiments, est-ce que <strong>{w_lower}</strong> semble être un choix conscient ou un destin inévitable ?",
                    "Est-ce que '{title}' suggère que <strong>{w_lower}</strong> peut facilement se transformer en une obsession dangereuse ?",
                    "Comment les images du clip de '{title}' illustrent-elles le réconfort silencieux de <strong>{w_lower}</strong> ?",
                    "Selon vous, le protagoniste de '{title}' trouve-t-il la paix grâce à <strong>{w_lower}</strong>, ou reste-t-il des doutes ?",
                    "Comment la fin de '{title}' recadre-t-elle les sacrifices que nous faisons tous au nom de <strong>{w_lower}</strong> ?"
                ],
                "personal": [
                    "★ Quand avez-vous ressenti pour la dernière fois un profond sentiment de <strong>{w_lower}</strong> sans avoir besoin de mots ?",
                    "★ Êtes-vous d'accord pour dire que <strong>{w_lower}</strong> doit être activement protégé, ou survit-il de lui-même ?",
                    "★ Comment votre propre vision de <strong>{w_lower}</strong> a-t-elle évolué au cours des cinq dernières années ?",
                    "★ Dans votre quotidien, trouvez-vous facile ou difficile d'exprimer <strong>{w_lower}</strong> envers vos proches ?",
                    "★ Quelle est la plus grande leçon sur <strong>{w_lower}</strong> qu'un ami ou un membre de votre famille vous a enseignée ?",
                    "★ Pensez-vous que les technologies modernes rendent plus difficile le développement d'un authentique <strong>{w_lower}</strong> ?",
                    "★ Comment gérez-vous personnellement les situations où votre élan de <strong>{w_lower}</strong> n'est pas réciproque ?",
                    "★ Si vous pouviez offrir instantanément un moment de <strong>{w_lower}</strong> à quelqu'un aujourd'hui, à qui serait-ce ?",
                    "★ Pensez-vous que <strong>{w_lower}</strong> est plutôt synonyme de joie partagée, ou s'il se forge dans les épreuves ?",
                    "★ Quelle habitude ou rituel simple vous aide à cultiver davantage de <strong>{w_lower}</strong> dans vos relations ?"
                ],
                "r2": [
                    "La représentation idéalisée de <strong>{w_lower}</strong> dans '{title}' est une illusion magnifique mais dangereuse pour les couples d'aujourd'hui. Débattons-en.",
                    "Sans une base solide de <strong>{w_lower}</strong>, toute relation amoureuse est vouée à s'effondrer sous la pression sociale. Qu'en pensez-vous ?",
                    "L'œuvre de {artist} montre que notre obsession moderne à chercher le parfait <strong>{w_lower}</strong> n'est qu'un rempart contre la solitude. Qu'en dites-vous ?",
                    "Le véritable <strong>{w_lower}</strong> ne peut exister que si nous sommes pleinement épanouis dans notre propre vie indépendante. Discutons-en.",
                    "La musique de '{title}' suggère que nous devons être prêts à nous oublier nous-mêmes pour vivre pleinement <strong>{w_lower}</strong>. Êtes-vous d'accord ?",
                    "À l'ère du numérique, le développement lent et silencieux de <strong>{w_lower}</strong> a été remplacé par la recherche d'une satisfaction immédiate. Débattons-en.",
                    "On ne peut pas comprendre la beauté de <strong>{w_lower}</strong> sans avoir connu son contraire : la rupture ou le rejet. Analysez cette idée.",
                    "{artist} nous avertit qu'accorder trop d'importance à <strong>{w_lower}</strong> mène inévitablement à l'auto-sabotage. Partagez votre avis.",
                    "La fin de '{title}' prouve que certaines formes de <strong>{w_lower}</strong> valent tous les sacrifices. Comment voyez-vous cela ?",
                    "Si nous prenons toutes nos décisions de vie en fonction de <strong>{w_lower}</strong>, nous risquons de sacrifier nos ambitions professionnelles. Discutons-en."
                ]
            }
        },
        "society": {
            "en": {
                "r1": [
                    "How does '{title}' by {artist} expose the hidden power structures behind <strong>{w_lower}</strong> in modern society?",
                    "In what ways does <strong>{w_lower}</strong> in '{title}' serve as a critical commentary on contemporary social expectations?",
                    "How does the behavior of characters in '{title}' reflect the systemic challenges of <strong>{w_lower}</strong>?",
                    "Does '{title}' offer a hopeful vision of <strong>{w_lower}</strong>, or does it suggest that social divisions are too deep to heal?",
                    "How does {artist} use satire or drama to question our collective attitude toward <strong>{w_lower}</strong>?",
                    "In '{title}', is the struggle for <strong>{w_lower}</strong> portrayed as an individual battle or a collective movement?",
                    "How do the lyrics of '{title}' deconstruct the stereotypes that surround <strong>{w_lower}</strong> today?",
                    "What role does the setting of '{title}' play in reinforcing or challenging <strong>{w_lower}</strong>?",
                    "How does '{title}' illustrate the personal cost of conforming to societal standards of <strong>{w_lower}</strong>?",
                    "In your opinion, does '{title}' suggest that <strong>{w_lower}</strong> is essential for a fair and just community?"
                ],
                "personal": [
                    "★ How often do you notice <strong>{w_lower}</strong> affecting your interactions in your workplace or school?",
                    "★ Have you ever had to stand up against social pressure to defend your beliefs about <strong>{w_lower}</strong>?",
                    "★ In your daily routine, what small action do you take to promote <strong>{w_lower}</strong> in your community?",
                    "★ Do you find that conversations about <strong>{w_lower}</strong> are generally constructive or do they lead to conflict?",
                    "★ How has your personal experience with <strong>{w_lower}</strong> shaped your understanding of social justice?",
                    "★ Who is the person in your life that best exemplifies the values of <strong>{w_lower}</strong>?",
                    "★ Have you ever felt excluded or judged because of societal expectations regarding <strong>{w_lower}</strong>?",
                    "★ If you could change one law or policy to improve <strong>{w_lower}</strong> in your country, what would it be?",
                    "★ Do you think that younger generations have a different approach to <strong>{w_lower}</strong> than older ones?",
                    "★ What is the biggest obstacle you face when trying to live according to your values of <strong>{w_lower}</strong>?"
                ],
                "r2": [
                    "Conforming to societal expectations of <strong>{w_lower}</strong> as seen in '{title}' is the only way to succeed in a corporate environment. Let's debate.",
                    "Without a systematic reform of our social structures, true <strong>{w_lower}</strong> will remain an unreachable ideal. Discuss.",
                    "{artist}'s sharp critique reveals that our collective pursuit of <strong>{w_lower}</strong> often hides a deeper form of social conformity. Defend or oppose.",
                    "In a highly competitive world, prioritizing <strong>{w_lower}</strong> is a luxury that only the privileged can afford. Let's debate.",
                    "The narrative of '{title}' proves that we must be willing to break traditional rules to achieve genuine <strong>{w_lower}</strong>. Do you agree?",
                    "Social media has amplified our awareness of <strong>{w_lower}</strong>, but it has also made our discussions more polarized and less empathetic. Discuss.",
                    "We cannot achieve progress in <strong>{w_lower}</strong> without first acknowledging our own subconscious biases and privileges. Share your thoughts.",
                    "The message of '{title}' warns us that relying on institutional systems to guarantee <strong>{w_lower}</strong> will always lead to disappointment. Discuss.",
                    "True female solidarity and cooperation in <strong>{w_lower}</strong> are more powerful than any corporate or state-imposed hierarchy. Analyze this.",
                    "If we prioritize social harmony over individual <strong>{w_lower}</strong>, we risk perpetuating unfair and outdated systems. Discuss."
                ]
            },
            "fr": {
                "r1": [
                    "Comment '{title}' par {artist} expose-t-il les structures de pouvoir cachées derrière <strong>{w_lower}</strong> dans notre société ?",
                    "De quelles manières <strong>{w_lower}</strong> dans '{title}' sert-il de commentaire critique sur les attentes sociales contemporaines ?",
                    "Comment le comportement des personnages dans '{title}' reflète-t-il les défis systémiques de <strong>{w_lower}</strong> ?",
                    "Est-ce que '{title}' offre une vision optimiste de <strong>{w_lower}</strong>, ou suggère-t-il que les divisions sociales sont trop profondes ?",
                    "Comment {artist} utilise-t-il la satire ou le drame pour remettre en question notre attitude collective envers <strong>{w_lower}</strong> ?",
                    "Dans '{title}', la lutte pour <strong>{w_lower}</strong> est-elle présentée comme un combat individuel ou un mouvement collectif ?",
                    "Comment les paroles de '{title}' déconstruisent-elles les stéréotypes qui entourent <strong>{w_lower}</strong> aujourd'hui ?",
                    "Quel rôle le décor de '{title}' joue-t-il dans le renforcement ou la remise en question de <strong>{w_lower}</strong> ?",
                    "Comment '{title}' illustre-t-il le coût personnel de la conformité aux normes sociétales de <strong>{w_lower}</strong> ?",
                    "À votre avis, '{title}' suggère-t-il que <strong>{w_lower}</strong> est indispensable pour bâtir une communauté juste ?"
                ],
                "personal": [
                    "★ À quelle fréquence remarquez-vous l'impact de <strong>{w_lower}</strong> sur vos interactions au travail ou à l'école ?",
                    "★ Avez-vous déjà dû vous opposer à la pression sociale pour défendre vos convictions sur <strong>{w_lower}</strong> ?",
                    "★ Dans votre quotidien, quel geste simple posez-vous pour encourager <strong>{w_lower}</strong> autour de vous ?",
                    "★ Trouvez-vous que les discussions sur <strong>{w_lower}</strong> sont constructives ou mènent-elles souvent à des conflits ?",
                    "★ Comment votre propre expérience de <strong>{w_lower}</strong> a-t-elle façonné votre vision de la justice sociale ?",
                    "★ Quelle personne dans votre entourage incarne le mieux les valeurs de <strong>{w_lower}</strong> ?",
                    "★ Vous êtes-vous déjà senti exclu ou jugé en raison des attentes de la société concernant <strong>{w_lower}</strong> ?",
                    "★ Si vous pouviez modifier une loi pour améliorer <strong>{w_lower}</strong> dans votre pays, quelle serait-elle ?",
                    "★ Pensez-vous que les jeunes générations ont une approche de <strong>{w_lower}</strong> différente de celle de leurs aînés ?",
                    "★ Quel est le plus grand obstacle auquel vous faites face pour vivre en accord avec vos valeurs de <strong>{w_lower}</strong> ?"
                ],
                "r2": [
                    "Se conformer aux attentes sociales de <strong>{w_lower}</strong> comme dans '{title}' est l'unique moyen de réussir professionnellement. Débattons-en.",
                    "Sans une réforme profonde de nos structures sociales, le véritable <strong>{w_lower}</strong> restera un idéal inaccessible. Qu'en pensez-vous ?",
                    "La critique de {artist} révèle que notre recherche collective de <strong>{w_lower}</strong> cache souvent un conformisme social plus profond. Partagez votre avis.",
                    "Dans un monde ultra-compétitif, donner la priorité à <strong>{w_lower}</strong> est un luxe que seuls les privilégiés peuvent s'offrir. Débattons-en.",
                    "L'histoire de '{title}' prouve que nous devons briser les règles traditionnelles pour obtenir un authentique <strong>{w_lower}</strong>. Êtes-vous d'accord ?",
                    "Les réseaux sociaux ont accru notre conscience de <strong>{w_lower}</strong>, mais ils ont aussi rendu nos débats plus polarisés. Discutons-en.",
                    "Nous ne pourrons progresser vers <strong>{w_lower}</strong> sans d'abord reconnaître nos propres biais inconscients et privilèges. Qu'en dites-vous ?",
                    "Le message de '{title}' nous avertit que compter sur les institutions pour garantir <strong>{w_lower}</strong> mène toujours à la déception. Débattons-en.",
                    "La solidarité féminine et l'entraide face à <strong>{w_lower}</strong> sont plus puissantes que n'importe quelle hiérarchie imposée. Analysez cette idée.",
                    "Si nous privilégions l'harmonie sociale au détriment de l'expression individuelle de <strong>{w_lower}</strong>, nous perpétuons des injustices. Discutons-en."
                ]
            }
        },
        "growth": {
            "en": {
                "r1": [
                    "How does the journey of self-discovery in '{title}' by {artist} redefine what it means to achieve <strong>{w_lower}</strong>?",
                    "In '{title}', does the pursuit of <strong>{w_lower}</strong> feel like a struggle against outer rules or an inner conflict?",
                    "How does {artist} use the lyrics of '{title}' to highlight the importance of personal <strong>{w_lower}</strong>?",
                    "Does '{title}' suggest that <strong>{w_lower}</strong> is something we can find alone, or do we need others to grow?",
                    "How does the musical style of '{title}' enhance the message of strength and <strong>{w_lower}</strong>?",
                    "In '{title}', is <strong>{w_lower}</strong> presented as a sudden breakthrough or a slow, painful process?",
                    "How does {artist} challenge traditional views of success and <strong>{w_lower}</strong> in this song?",
                    "What role does vulnerability play in allowing the main character to achieve <strong>{w_lower}</strong> in '{title}'?",
                    "How do the lyrics of '{title}' show that <strong>{w_lower}</strong> requires us to confront our deepest fears?",
                    "In your opinion, is <strong>{w_lower}</strong> the ultimate goal of the character's journey in '{title}'?"
                ],
                "personal": [
                    "★ What is a personal goal or dream that has driven your own <strong>{w_lower}</strong> over the past year?",
                    "★ Have you ever had to step out of your comfort zone to find your own <strong>{w_lower}</strong>?",
                    "★ Do you find that quiet reflection or active action helps you grow in <strong>{w_lower}</strong>?",
                    "★ What is the most difficult challenge you have faced that ultimately built your <strong>{w_lower}</strong>?",
                    "★ Who is the mentor or teacher who has influenced your personal <strong>{w_lower}</strong> the most?",
                    "★ Do you believe that mistakes are essential for our personal <strong>{w_lower}</strong>, or can they be avoided?",
                    "★ How do you personally balance your desire for <strong>{w_lower}</strong> with your daily responsibilities?",
                    "★ If you could write a letter to your younger self about <strong>{w_lower}</strong>, what advice would you give?",
                    "★ Does your current environment support your personal <strong>{w_lower}</strong>, or does it restrict it?",
                    "★ What daily habit or practice helps you maintain your focus on personal <strong>{w_lower}</strong>?"
                ],
                "r2": [
                    "The search for absolute <strong>{w_lower}</strong> in '{title}' is an exhausting quest that often leads to isolation. Discuss.",
                    "Without a willingness to embrace our own flaws, true personal <strong>{w_lower}</strong> is completely impossible. Share your thoughts.",
                    "{artist}'s song suggests that society's expectations are the greatest obstacle to our personal <strong>{w_lower}</strong>. Defend or oppose.",
                    "True <strong>{w_lower}</strong> can only be achieved when we completely stop caring about the approval of others. Let's debate.",
                    "The ending of '{title}' proves that our personal <strong>{w_lower}</strong> is worth losing friends and breaking connections for. Do you agree?",
                    "Modern culture focuses too much on instant success rather than the slow, quiet journey of <strong>{w_lower}</strong>. Discuss.",
                    "We cannot find genuine <strong>{w_lower}</strong> without first experiencing moments of deep failure and doubt. Analyze this.",
                    "{artist} warns us that focusing too much on our own <strong>{w_lower}</strong> can make us selfish and blind to others' needs. Share your perspective.",
                    "The ultimate test of our <strong>{w_lower}</strong> is how we treat those who cannot offer us anything in return. Discuss.",
                    "If we guide our life decisions entirely by our desire for personal <strong>{w_lower}</strong>, we risk never finding stability. Discuss."
                ]
            },
            "fr": {
                "r1": [
                    "Comment le parcours de découverte de soi dans '{title}' par {artist} redéfinit-il notre vision de <strong>{w_lower}</strong> ?",
                    "Dans '{title}', la recherche de <strong>{w_lower}</strong> ressemble-t-elle à une lutte contre l'extérieur ou à un conflit intérieur ?",
                    "Comment {artist} utilise-t-il les paroles de '{title}' pour souligner l'importance de <strong>{w_lower}</strong> ?",
                    "Est-ce que '{title}' suggère que <strong>{w_lower}</strong> se trouve seul, ou avons-nous besoin des autres pour grandir ?",
                    "Comment le style musical de '{title}' renforce-t-il le message de force et de <strong>{w_lower}</strong> ?",
                    "Dans '{title}', <strong>{w_lower}</strong> est-il présenté comme une révélation soudaine ou un processus lent et douloureux ?",
                    "Comment {artist} remet-il en question les visions traditionnelles de la réussite et de <strong>{w_lower}</strong> dans cette chanson ?",
                    "Quel rôle joue la vulnérabilité dans la capacité du personnage à atteindre <strong>{w_lower}</strong> dans '{title}' ?",
                    "Comment les paroles de '{title}' montrent-elles que <strong>{w_lower}</strong> exige de faire face à nos peurs profondes ?",
                    "À votre avis, <strong>{w_lower}</strong> est-il le but ultime du voyage du personnage dans '{title}' ?"
                ],
                "personal": [
                    "★ Quel objectif personnel a le plus stimulé votre propre <strong>{w_lower}</strong> au cours de l'année écoulée ?",
                    "★ Avez-vous déjà dû sortir de votre zone de confort pour affirmer votre <strong>{w_lower}</strong> ?",
                    "★ Trouvez-vous que la réflexion calme ou l'action directe vous aide le plus à progresser en <strong>{w_lower}</strong> ?",
                    "★ Quel est le défi le plus difficile que vous ayez surmonté et qui a forgé votre <strong>{w_lower}</strong> ?",
                    "★ Quel mentor ou enseignant a le plus influencé votre propre <strong>{w_lower}</strong> ?",
                    "★ Pensez-vous que les erreurs soient indispensables à notre <strong>{w_lower}</strong>, ou peuvent-elles être évitées ?",
                    "★ Comment conciliez-vous personnellement votre désir de <strong>{w_lower}</strong> avec vos obligations quotidiennes ?",
                    "★ Si vous pouviez écrire à votre passé au sujet de <strong>{w_lower}</strong>, quel conseil vous donneriez-vous ?",
                    "★ Votre entourage actuel encourage-t-il votre <strong>{w_lower}</strong> personnel, ou a-t-il tendance à le freiner ?",
                    "★ Quelle habitude ou pratique quotidienne vous aide à rester concentré sur votre <strong>{w_lower}</strong> ?"
                ],
                "r2": [
                    "La recherche absolue de <strong>{w_lower}</strong> dans '{title}' est une quête épuisante qui mène souvent à l'isolement. Débattons-en.",
                    "Sans une volonté sincère d'accepter nos propres failles, un véritable <strong>{w_lower}</strong> est impossible. Qu'en pensez-vous ?",
                    "La chanson de {artist} suggère que les attentes de la société sont le principal obstacle à notre <strong>{w_lower}</strong>. Partagez votre avis.",
                    "Le véritable <strong>{w_lower}</strong> ne s'obtient que lorsqu'on cesse totalement de se soucier de l'approbation d'autrui. Débattons-en.",
                    "La fin de '{title}' prouve que notre <strong>{w_lower}</strong> mérite que l'on brise des liens et que l'on s'isole. Êtes-vous d'accord ?",
                    "La culture moderne valorise trop le succès instantané au détriment du cheminement lent et discret de <strong>{w_lower}</strong>. Discutons-en.",
                    "Nous ne pouvons trouver un authentique <strong>{w_lower}</strong> sans passer d'abord par des moments d'échec et de doute. Qu'en dites-vous ?",
                    "{artist} nous avertit que trop se focaliser sur son propre <strong>{w_lower}</strong> peut nous rendre égoïstes. Partagez votre avis.",
                    "L'épreuve ultime de notre <strong>{w_lower}</strong> est la manière dont nous traitons ceux qui ne peuvent rien nous apporter. Discutons-en.",
                    "Si nous guidons tous nos choix par le seul désir de <strong>{w_lower}</strong>, nous risquons de ne jamais trouver de stabilité. Discutons-en."
                ]
            }
        },
        "emotions": {
            "en": {
                "r1": [
                    "How does '{title}' by {artist} capture the quiet burden of <strong>{w_lower}</strong> when facing difficult times?",
                    "In '{title}', do you feel that <strong>{w_lower}</strong> is portrayed as an inescapable trap, or does a path to healing exist?",
                    "Analyzing the emotional depth of {artist}, how does <strong>{w_lower}</strong> shape the tone of this song?",
                    "In what ways does '{title}' illustrate that confronting <strong>{w_lower}</strong> is necessary to find peace?",
                    "How does the musical melody of '{title}' reflect the heavy feeling of <strong>{w_lower}</strong>?",
                    "When {artist} sings, does the expression of <strong>{w_lower}</strong> feel like a cry for help or a silent acceptance?",
                    "Does '{title}' suggest that we can find comfort in <strong>{w_lower}</strong>, or does it always bring pain?",
                    "How does the imagery in '{title}' visualize the invisible scars left by <strong>{w_lower}</strong>?",
                    "In your opinion, does the protagonist in '{title}' overcome their <strong>{w_lower}</strong>, or is it left unresolved?",
                    "How does '{title}' help us understand the universal human experience of <strong>{w_lower}</strong>?"
                ],
                "personal": [
                    "★ How do you personally cope when you feel a wave of <strong>{w_lower}</strong> in your daily life?",
                    "★ Have you ever found a surprising source of strength while dealing with <strong>{w_lower}</strong>?",
                    "★ Do you find it easier to express <strong>{w_lower}</strong> through art, music, or quiet conversation?",
                    "★ What is the most comforting thing someone can do for you when you are feeling <strong>{w_lower}</strong>?",
                    "★ How has your personal way of handling <strong>{w_lower}</strong> changed as you have grown older?",
                    "★ Do you believe that sharing our <strong>{w_lower}</strong> makes us feel more connected or more vulnerable?",
                    "★ Is there a specific place or activity that always helps you heal from <strong>{w_lower}</strong>?",
                    "★ If you could offer comfort to a friend who is quietly struggling with <strong>{w_lower}</strong>, what would you say?",
                    "★ Do you think that society encourages us to hide our <strong>{w_lower}</strong> rather than talk about it?",
                    "★ What is the most important lesson you have learned about emotional resilience through <strong>{w_lower}</strong>?"
                ],
                "r2": [
                    "The heavy portrayal of <strong>{w_lower}</strong> in '{title}' shows that some emotional wounds never truly heal. Let's debate.",
                    "Without a willingness to feel our own <strong>{w_lower}</strong>, we can never experience true joy and recovery. Discuss.",
                    "{artist}'s work proves that art is the only genuine way to transform <strong>{w_lower}</strong> into something beautiful. Defend or oppose.",
                    "True healing from <strong>{w_lower}</strong> can only begin when we stop looking for answers outside of ourselves. Discuss.",
                    "The music of '{title}' suggests that some feelings of <strong>{w_lower}</strong> are too deep to ever be fully shared with others. Do you agree?",
                    "Modern life is too busy and distracted, leaving us no time to process our quiet <strong>{w_lower}</strong>. Discuss.",
                    "We cannot truly appreciate the presence of others until we have known the absolute quiet of <strong>{w_lower}</strong>. Analyze this.",
                    "{artist} warns us that escaping from our <strong>{w_lower}</strong> through quick distractions will only prolong our suffering. Share your view.",
                    "The ending of '{title}' shows that accepting our own <strong>{w_lower}</strong> is the first step toward emotional freedom. Discuss.",
                    "If we let ourselves be fully guided by our feelings of <strong>{w_lower}</strong>, we risk losing our connection to daily reality. Discuss."
                ]
            },
            "fr": {
                "r1": [
                    "Comment '{title}' par {artist} capture-t-il le fardeau silencieux de <strong>{w_lower}</strong> face aux épreuves ?",
                    "Dans '{title}', pensez-vous que <strong>{w_lower}</strong> est dépeint comme un piège inévitable, ou existe-t-il un chemin de guérison ?",
                    "En analysant la profondeur de {artist}, comment <strong>{w_lower}</strong> façonne-t-il la tonalité de cette chanson ?",
                    "De quelles manières '{title}' montre-t-il que faire face à <strong>{w_lower}</strong> est indispensable pour trouver la paix ?",
                    "Comment la mélodie de '{title}' reflète-t-elle la lourdeur associée à <strong>{w_lower}</strong> ?",
                    "Quand {artist} chante, l'expression de <strong>{w_lower}</strong> ressemble-t-elle à un appel à l'aide ou à une acceptation silencieuse ?",
                    "Est-ce que '{title}' suggère que l'on peut trouver du réconfort dans <strong>{w_lower}</strong>, ou apporte-t-il toujours de la douleur ?",
                    "Comment les images de '{title}' visualisent-elles les cicatrices invisibles laissées par <strong>{w_lower}</strong> ?",
                    "Selon vous, le protagoniste de '{title}' surmonte-t-il son <strong>{w_lower}</strong>, ou la situation reste-t-elle en suspens ?",
                    "Comment '{title}' nous aide-t-il à comprendre l'expérience humaine universelle de <strong>{w_lower}</strong> ?"
                ],
                "personal": [
                    "★ Comment gérez-vous personnellement les moments où vous ressentez un élan de <strong>{w_lower}</strong> ?",
                    "★ Avez-vous déjà trouvé une source de force inattendue en faisant face à <strong>{w_lower}</strong> ?",
                    "★ Trouvez-vous plus facile d'exprimer <strong>{w_lower}</strong> à travers l'art, la musique ou une conversation intime ?",
                    "★ Quel est le geste le plus réconfortant qu'un proche puisse poser lorsque vous vivez <strong>{w_lower}</strong> ?",
                    "★ Comment votre manière de gérer <strong>{w_lower}</strong> a-t-elle évolué avec les années ?",
                    "★ Pensez-vous que partager notre <strong>{w_lower}</strong> nous rapproche des autres ou nous fragilise ?",
                    "★ Existe-t-il un lieu ou une activité qui vous aide systématiquement à guérir de <strong>{w_lower}</strong> ?",
                    "★ Si vous deviez réconforter un ami qui traverse silencieusement une période de <strong>{w_lower}</strong>, que lui diriez-vous ?",
                    "★ Pensez-vous que notre société nous pousse à masquer notre <strong>{w_lower}</strong> plutôt qu'à l'exprimer ?",
                    "★ Quelle est la leçon la plus précieuse que vous ayez tirée de <strong>{w_lower}</strong> en matière de résilience ?"
                ],
                "r2": [
                    "La description pesante de <strong>{w_lower}</strong> dans '{title}' démontre que certaines blessures ne guérissent jamais tout à fait. Débattons-en.",
                    "Sans une volonté d'affronter notre propre <strong>{w_lower}</strong>, nous ne pourrons jamais connaître de vraie joie. Qu'en pensez-vous ?",
                    "L'œuvre de {artist} prouve que l'art est le seul moyen de transformer <strong>{w_lower}</strong> en quelque chose de magnifique. Partagez votre avis.",
                    "La vraie guérison de <strong>{w_lower}</strong> commence quand nous cessons de chercher des réponses à l'extérieur de nous-mêmes. Discutons-en.",
                    "La musique de '{title}' suggère que certains sentiments de <strong>{w_lower}</strong> sont trop intimes pour être partagés. Êtes-vous d'accord ?",
                    "La vie moderne, trop rapide et distraite, ne nous laisse aucun temps pour digérer nos moments de <strong>{w_lower}</strong>. Débattons-en.",
                    "We ne pouvons pas apprécier pleinement la présence des autres sans avoir connu le silence absolu de <strong>{w_lower}</strong>. Analyse cette idée.",
                    "{artist} nous avertit que fuir notre <strong>{w_lower}</strong> par des distractions ne fait que prolonger notre souffrance. Partagez votre avis.",
                    "La fin de '{title}' montre que l'acceptation de notre propre <strong>{w_lower}</strong> est le premier pas vers la liberté émotionnelle. Discutons-en.",
                    "Si nous nous laissons entièrement guider par nos sentiments de <strong>{w_lower}</strong>, nous risquons de perdre pied avec la réalité. Discutons-en."
                ]
            }
        },
        "joy_nature": {
            "en": {
                "r1": [
                    "How does the bright, open atmosphere of '{title}' by {artist} amplify the feeling of <strong>{w_lower}</strong>?",
                    "In '{title}', how is the beauty of nature connected to the character's sense of <strong>{w_lower}</strong>?",
                    "Analyzing the performance of {artist}, how does <strong>{w_lower}</strong> serve as the driving energy of the song?",
                    "In what ways does '{title}' show that simple moments can bring us a profound feeling of <strong>{w_lower}</strong>?",
                    "How does the musical rhythm of '{title}' convey the lightness and freedom of <strong>{w_lower}</strong>?",
                    "When {artist} sings about their experiences, does <strong>{w_lower}</strong> feel like a natural state or a hard-earned escape?",
                    "Does '{title}' suggest that we can find true <strong>{w_lower}</strong> by reconnecting with our natural surroundings?",
                    "How does the visual imagery of '{title}' capture the warmth and vibrance of <strong>{w_lower}</strong>?",
                    "In your opinion, is the joy in '{title}' purely temporary, or does it leave a lasting trace of <strong>{w_lower}</strong>?",
                    "How does '{title}' celebrate the beauty of everyday moments through the lens of <strong>{w_lower}</strong>?"
                ],
                "personal": [
                    "★ What natural setting or outdoor activity always brings you a sense of <strong>{w_lower}</strong>?",
                    "★ Do you find it easier to feel <strong>{w_lower}</strong> during a specific season of the year?",
                    "★ Have you ever experienced a sudden, unexpected moment of <strong>{w_lower}</strong> while walking outdoors?",
                    "★ How do you personally try to bring more warmth and <strong>{w_lower}</strong> into your home environment?",
                    "★ What is a beautiful childhood memory you have that represents the idea of <strong>{w_lower}</strong>?",
                    "★ Do you believe that spending time in nature is necessary to maintain our mental <strong>{w_lower}</strong>?",
                    "★ Who is the person in your life that you most associate with lightheartedness and <strong>{w_lower}</strong>?",
                    "★ If you could plan a perfect day to celebrate <strong>{w_lower}</strong>, what would you do and where would you go?",
                    "★ How does your daily environment influence your ability to experience simple <strong>{w_lower}</strong>?",
                    "★ What is the most beautiful sound in nature that always restores your sense of <strong>{w_lower}</strong>?"
                ],
                "r2": [
                    "The cheerful focus on <strong>{w_lower}</strong> in '{title}' is an oversimplified view of life that ignores our real struggles. Discuss.",
                    "Without an active efforts to connect with nature, modern humans can never achieve genuine <strong>{w_lower}</strong>. Share your thoughts.",
                    "{artist}'s bright music proves that simple, quiet joys are far more valuable than complex achievements in <strong>{w_lower}</strong>. Defend or oppose.",
                    "True <strong>{w_lower}</strong> can only be sustained when we share it with a community, rather than experiencing it alone. Discuss.",
                    "The rhythm of '{title}' suggests that we must live entirely in the present moment to fully capture <strong>{w_lower}</strong>. Do you agree?",
                    "Modern urban architecture is too sterile, making it extremely difficult to feel the natural <strong>{w_lower}</strong>. Discuss.",
                    "We cannot find lasting <strong>{w_lower}</strong> until we learn to appreciate the minor, quiet changes of seasons. Analyze this.",
                    "{artist} reminds us that the best forms of <strong>{w_lower}</strong> are completely free and accessible to everyone. Share your view.",
                    "The ending of '{title}' shows that a single ray of <strong>{w_lower}</strong> can carry us through the coldest seasons of life. Discuss.",
                    "If we prioritize our career goals over our need for natural rest and <strong>{w_lower}</strong>, we compromise our health. Discuss."
                ]
            },
            "fr": {
                "r1": [
                    "Comment l'atmosphère lumineuse de '{title}' par {artist} amplifie-t-elle le sentiment de <strong>{w_lower}</strong> ?",
                    "Dans '{title}', comment la beauté de la nature est-elle liée au sentiment de <strong>{w_lower}</strong> du personnage ?",
                    "En analysant la performance de {artist}, comment <strong>{w_lower}</strong> sert-il d'énergie motrice à la chanson ?",
                    "De quelles manières '{title}' montre-t-il que des moments simples peuvent apporter un profond sentiment de <strong>{w_lower}</strong> ?",
                    "Comment le rythme musical de '{title}' transmet-il la légèreté et la liberté de <strong>{w_lower}</strong> ?",
                    "Quand {artist} chante ses expériences, est-ce que <strong>{w_lower}</strong> semble être un état naturel ou une échappatoire durement gagnée ?",
                    "Est-ce que '{title}' suggère que l'on peut trouver le véritable <strong>{w_lower}</strong> en renouant avec notre environnement naturel ?",
                    "Comment l'imagerie visuelle de '{title}' capture-t-elle la chaleur et la vibration de <strong>{w_lower}</strong> ?",
                    "Selon vous, la joie dans '{title}' est-elle purement passagère, ou laisse-t-elle une trace durable de <strong>{w_lower}</strong> ?",
                    "Comment '{title}' célèbre-t-il la beauté des instants quotidiens à travers le prisme de <strong>{w_lower}</strong> ?"
                ],
                "personal": [
                    "★ Quel cadre naturel ou activité de plein air vous apporte toujours un sentiment de <strong>{w_lower}</strong> ?",
                    "★ Trouvez-vous plus facile de ressentir <strong>{w_lower}</strong> pendant une saison spécifique de l'année ?",
                    "★ Avez-vous déjà vécu un moment soudain et inattendu de <strong>{w_lower}</strong> en vous promenant dehors ?",
                    "★ Comment essayez-vous personnellement d'apporter plus de chaleur et de <strong>{w_lower}</strong> dans votre foyer ?",
                    "★ Quel est votre plus beau souvenir d'enfance qui représente l'idée de <strong>{w_lower}</strong> ?",
                    "★ Pensez-vous que passer du temps dans la nature est indispensable pour maintenir notre <strong>{w_lower}</strong> mental ?",
                    "★ Quelle personne associez-vous le plus à l'insouciance et à <strong>{w_lower}</strong> dans votre vie ?",
                    "★ Si vous deviez planifier une journée idéale pour célébrer <strong>{w_lower}</strong>, que feriez-vous ?",
                    "★ Comment votre cadre de vie quotidien influence-t-il votre capacité à vivre de simples moments de <strong>{w_lower}</strong> ?",
                    "★ Quel est le plus beau son de la nature qui restaure toujours votre sentiment de <strong>{w_lower}</strong> ?"
                ],
                "r2": [
                    "La focalisation joyeuse sur <strong>{w_lower}</strong> dans '{title}' est une vision simpliste de la vie qui ignore nos luttes réelles. Débattons-en.",
                    "Sans un effort actif pour se connecter à la nature, l'homme moderne ne peut atteindre un authentique <strong>{w_lower}</strong>. Qu'en pensez-vous ?",
                    "La musique lumineuse de {artist} prouve que les joies simples sont bien plus précieuses que les grandes réussites de <strong>{w_lower}</strong>. Partagez votre avis.",
                    "Le véritable <strong>{w_lower}</strong> ne peut être durable que s'il est partagé avec une communauté. Discutons-en.",
                    "Le rythme de '{title}' suggère que nous devons vivre entièrement dans l'instant présent pour capter <strong>{w_lower}</strong>. Êtes-vous d'accord ?",
                    "L'architecture urbaine moderne est trop stérile, ce qui rend difficile le ressenti de <strong>{w_lower}</strong>. Débattons-en.",
                    "Nous ne pourrons trouver de <strong>{w_lower}</strong> durable tant que nous n'aurons pas appris à apprécier les changements discrets des saisons. Analyse cette idée.",
                    "{artist} nous rappelle que les meilleures formes de <strong>{w_lower}</strong> sont gratuites et accessibles à tous. Partagez votre avis.",
                    "La fin de '{title}' démontre qu'un seul rayon de <strong>{w_lower}</strong> peut nous porter à travers les saisons les plus froides. Discutons-en.",
                    "Si nous privilégions nos objectifs de carrière au détriment de notre besoin de repos naturel et de <strong>{w_lower}</strong>, nous compromettons notre santé. Discutons-en."
                ]
            }
        },
        "experience": {
            "en": {
                "r1": [
                    "How does the clash between technology and humanity in '{title}' by {artist} change how we think about <strong>{w_lower}</strong>?",
                    "In '{title}', does the presence of <strong>{w_lower}</strong> represent a danger to our human connections or a new tool?",
                    "Analyzing the powerful lyrics of {artist}, how does <strong>{w_lower}</strong> shape the character's emotional survival?",
                    "In what ways does '{title}' illustrate that navigating a chaotic world requires a strong sense of <strong>{w_lower}</strong>?",
                    "How does the mechanical or high-tempo beat of '{title}' reflect the pressure of <strong>{w_lower}</strong>?",
                    "When {artist} sings about their experiences, does <strong>{w_lower}</strong> feel like a modern trap or a path to freedom?",
                    "Does '{title}' suggest that we are losing our ability to feel genuine <strong>{w_lower}</strong> by relying too much on screens?",
                    "How does the visual directing of '{title}' show the contrast between cold machines and warm <strong>{w_lower}</strong>?",
                    "In your opinion, does '{title}' offer a warning about the future of <strong>{w_lower}</strong> in our digital lives?",
                    "How can we preserve our personal values of <strong>{w_lower}</strong> in a hyper-digitized society like the one in '{title}'?"
                ],
                "personal": [
                    "★ How much do you think digital devices and screens influence your daily experience of <strong>{w_lower}</strong>?",
                    "★ Have you ever felt a strong need to disconnect from technology to find your own <strong>{w_lower}</strong>?",
                    "★ Do you find it easier or more difficult to maintain your sense of <strong>{w_lower}</strong> in a busy, chaotic city?",
                    "★ What is a digital habit or routine that you feel is actively harming your <strong>{w_lower}</strong>?",
                    "★ How has your personal relationship with technology and <strong>{w_lower}</strong> changed over the last ten years?",
                    "★ Do you believe that virtual interactions can ever replace face-to-face <strong>{w_lower}</strong>?",
                    "★ What is the most important lesson you have learned about staying grounded in <strong>{w_lower}</strong> today?",
                    "★ If you had to spend a whole week completely offline, what would you miss most about your <strong>{w_lower}</strong>?",
                    "★ How do you personally handle situations where modern notifications disrupt your quiet <strong>{w_lower}</strong>?",
                    "★ What specific digital rule or boundary helps you protect your personal <strong>{w_lower}</strong>?"
                ],
                "r2": [
                    "The fast-paced rise of technology as shown in '{title}' makes the preservation of <strong>{w_lower}</strong> completely impossible. Discuss.",
                    "Without a conscious effort to set boundaries with screens, we will lose our capacity for genuine <strong>{w_lower}</strong>. Share your thoughts.",
                    "{artist}'s work warns us that our digital tools are designed to exploit our need for <strong>{w_lower}</strong>. Defend or oppose.",
                    "True <strong>{w_lower}</strong> can only exist in the physical, tangible world, rendering digital connections artificial. Let's debate.",
                    "The story of '{title}' proves that we must be willing to embrace a simpler life to protect our core <strong>{w_lower}</strong>. Do you agree?",
                    "Artificial intelligence will eventually be able to understand and simulate human <strong>{w_lower}</strong> perfectly. Discuss.",
                    "We cannot survive the modern chaotic world without first building a strong, internal sanctuary of <strong>{w_lower}</strong>. Analyze this.",
                    "{artist} warns us that our modern obsession with digital speed is destroying the slow, quiet beauty of <strong>{w_lower}</strong>. Share your view.",
                    "The ending of '{title}' suggests that despite the pressure of machines, the human heart of <strong>{w_lower}</strong> will always find a way. Discuss.",
                    "If we prioritize technological efficiency over human connection and <strong>{w_lower}</strong>, we risk creating a sterile society. Discuss."
                ]
            },
            "fr": {
                "r1": [
                    "Comment le conflit entre technologie et humanité dans '{title}' par {artist} modifie-t-il notre vision de <strong>{w_lower}</strong> ?",
                    "Dans '{title}', la présence de <strong>{w_lower}</strong> représente-t-elle un danger pour nos relations ou un nouvel outil ?",
                    "En analysant les paroles puissantes de {artist}, comment <strong>{w_lower}</strong> façonne-t-il la survie émotionnelle du personnage ?",
                    "De quelles manières '{title}' montre-t-il que naviguer dans un monde chaotique exige un sens aigu de <strong>{w_lower}</strong> ?",
                    "Comment le rythme mécanique ou rapide de '{title}' reflète-t-il la pression de <strong>{w_lower}</strong> ?",
                    "Quand {artist} chante ses expériences, est-ce que <strong>{w_lower}</strong> ressemble à un piège moderne ou à une voie de liberté ?",
                    "Est-ce que '{title}' suggère que nous perdons notre capacité à ressentir un authentique <strong>{w_lower}</strong> à force de dépendre des écrans ?",
                    "Comment la réalisation visuelle de '{title}' montre-t-elle le contraste entre machines froides et chaleur de <strong>{w_lower}</strong> ?",
                    "Selon vous, '{title}' offre-t-il une mise en garde sur l'avenir de <strong>{w_lower}</strong> dans nos vies numériques ?",
                    "Comment pouvons-nous préserver nos valeurs de <strong>{w_lower}</strong> dans une société hyper-connectée comme celle de '{title}' ?"
                ],
                "personal": [
                    "★ À quel point pensez-vous que les appareils numériques influencent votre expérience quotidienne de <strong>{w_lower}</strong> ?",
                    "★ Avez-vous déjà ressenti le besoin pressant de vous déconnecter pour retrouver votre propre <strong>{w_lower}</strong> ?",
                    "★ Trouvez-vous plus facile ou plus difficile de maintenir votre <strong>{w_lower}</strong> dans une ville agitée et chaotique ?",
                    "★ Quelle habitude numérique vous semble nuire activement à votre <strong>{w_lower}</strong> ?",
                    "★ Comment votre relation personnelle avec la technologie et <strong>{w_lower}</strong> a-t-elle évolué ces dix dernières années ?",
                    "★ Pensez-vous que les interactions virtuelles puissent un jour remplacer un authentique <strong>{w_lower}</strong> en face à face ?",
                    "★ Quelle est la leçon la plus importante que vous ayez apprise pour rester ancré dans <strong>{w_lower}</strong> aujourd'hui ?",
                    "★ Si vous deviez passer une semaine entière hors ligne, qu'est-ce qui vous manquerait le plus concernant votre <strong>{w_lower}</strong> ?",
                    "★ Comment gérez-vous les situations où les notifications perturbent vos moments de calme et de <strong>{w_lower}</strong> ?",
                    "★ Quelle règle numérique stricte vous aide à protéger votre <strong>{w_lower}</strong> personnel ?"
                ],
                "r2": [
                    "La montée rapide de la technologie montrée dans '{title}' rend la préservation de <strong>{w_lower}</strong> impossible. Débattons-en.",
                    "Sans un effort conscient pour fixer des limites avec les écrans, nous perdrons notre capacité d'un authentique <strong>{w_lower}</strong>. Qu'en pensez-vous ?",
                    "L'œuvre de {artist} nous avertit que nos outils numériques sont conçus pour exploiter notre besoin de <strong>{w_lower}</strong>. Partagez votre avis.",
                    "Le vrai <strong>{w_lower}</strong> ne peut exister que dans le monde physique, ce qui rend les relations virtuelles superficielles. Débattons-en.",
                    "L'histoire de '{title}' prouve que nous devons accepter une vie plus simple pour protéger notre <strong>{w_lower}</strong>. Êtes-vous d'accord ?",
                    "L'intelligence artificielle finira par comprendre et simuler parfaitement le sentiment humain de <strong>{w_lower}</strong>. Discutons-en.",
                    "Nous ne pouvons survivre au chaos moderne sans bâtir d'abord un sanctuaire intérieur solide de <strong>{w_lower}</strong>. Analyse cette idée.",
                    "{artist} nous avertit que notre obsession moderne de la vitesse détruit la beauté lente de <strong>{w_lower}</strong>. Partagez votre avis.",
                    "La fin de '{title}' suggère que malgré la pression des machines, le cœur humain de <strong>{w_lower}</strong> trouvera toujours un chemin. Discutons-en.",
                    "Si nous privilégions l'efficacité technique au détriment de l'expression de <strong>{w_lower}</strong>, nous créons une société stérile. Discutons-en."
                ]
            }
        },
        "default": {
            "en": {
                "r1": [
                    "How does '{title}' by {artist} explore the deeper significance of <strong>{w_lower}</strong> in our daily lives?",
                    "In '{title}', is <strong>{w_lower}</strong> presented as a source of strength or a source of doubt?",
                    "Analyzing the lyrics of {artist}, how does <strong>{w_lower}</strong> shape the overall message of the song?",
                    "In what ways does '{title}' show that <strong>{w_lower}</strong> is essential for personal growth?",
                    "How does the musical style of '{title}' enhance the emotional impact of <strong>{w_lower}</strong>?",
                    "When {artist} sings about their feelings, does <strong>{w_lower}</strong> feel like a natural state or a challenge?",
                    "Does '{title}' suggest that we must work to achieve <strong>{w_lower}</strong>, or does it happen naturally?",
                    "How does the visual imagery of '{title}' visualize the concept of <strong>{w_lower}</strong>?",
                    "In your opinion, does the protagonist in '{title}' find peace through <strong>{w_lower}</strong>, or are they left with questions?",
                    "How can we apply the lessons of <strong>{w_lower}</strong> from '{title}' to improve our modern lives?"
                ],
                "personal": [
                    "★ When was the last time you felt a strong sense of <strong>{w_lower}</strong> in your own life?",
                    "★ Do you find it easy or difficult to share your feelings of <strong>{w_lower}</strong> with others?",
                    "★ How has your personal understanding of <strong>{w_lower}</strong> changed over the past few years?",
                    "★ In your daily routine, what helps you maintain your focus on <strong>{w_lower}</strong>?",
                    "★ What is the most important lesson you have learned about <strong>{w_lower}</strong>?",
                    "★ Do you believe that modern society values <strong>{w_lower}</strong>, or is it often ignored?",
                    "★ Who is the person in your life that best represents the idea of <strong>{w_lower}</strong>?",
                    "★ If you could gift more <strong>{w_lower}</strong> to someone you care about, who would it be?",
                    "★ Do you think that <strong>{w_lower}</strong> is more about personal peace or shared experiences?",
                    "★ What small practice or habit helps you cultivate <strong>{w_lower}</strong> in your relationships?"
                ],
                "r2": [
                    "The central portrayal of <strong>{w_lower}</strong> in '{title}' is a beautiful reflection of modern human struggles. Let's debate.",
                    "Without a deep understanding of <strong>{w_lower}</strong>, we can never achieve lasting success and happiness. Share your thoughts.",
                    "{artist}'s work shows that our collective obsession with <strong>{w_lower}</strong> can sometimes lead to self-doubt. Defend or oppose.",
                    "True <strong>{w_lower}</strong> can only exist when we are completely comfortable with who we are. Discuss.",
                    "The music of '{title}' suggests that we must be willing to take risks to fully experience <strong>{w_lower}</strong>. Do you agree?",
                    "In the modern world, the quiet development of <strong>{w_lower}</strong> is often threatened by constant distractions. Discuss.",
                    "We cannot truly appreciate <strong>{w_lower}</strong> until we have experienced moments of challenge and failure. Analyze this.",
                    "{artist} warns us that focusing too much on <strong>{w_lower}</strong> can make us lose sight of other practical goals. Share your view.",
                    "The ending of '{title}' proves that accepting our own <strong>{w_lower}</strong> is the key to personal freedom. Discuss.",
                    "If we make our life decisions based entirely on the pursuit of <strong>{w_lower}</strong>, we risk losing stability. Discuss."
                ]
            },
            "fr": {
                "r1": [
                    "Comment '{title}' par {artist} explore-t-il la signification profonde de <strong>{w_lower}</strong> dans notre vie quotidienne ?",
                    "Dans '{title}', <strong>{w_lower}</strong> est-il présenté comme une source de force ou de doute ?",
                    "En analysant les paroles de {artist}, comment <strong>{w_lower}</strong> façonne-t-il le message général de la chanson ?",
                    "De quelles manières '{title}' montre-t-il que <strong>{w_lower}</strong> est essentiel pour l'épanouissement personnel ?",
                    "Comment le style musical de '{title}' renforce-t-il l'impact émotionnel de <strong>{w_lower}</strong> ?",
                    "Quand {artist} chante ses sentiments, est-ce que <strong>{w_lower}</strong> semble être un état naturel ou un défi ?",
                    "Est-ce que '{title}' suggère que nous devons travailler pour obtenir <strong>{w_lower}</strong>, ou cela arrive-t-il naturellement ?",
                    "Comment l'imagerie visuelle de '{title}' permet-elle de visualiser le concept de <strong>{w_lower}</strong> ?",
                    "Selon vous, le protagoniste de '{title}' trouve-t-il la paix grâce à <strong>{w_lower}</strong>, ou reste-t-il des questions ?",
                    "Comment pouvons-nous appliquer les leçons de <strong>{w_lower}</strong> tirées de '{title}' pour améliorer notre quotidien ?"
                ],
                "personal": [
                    "★ À quand remonte la dernière fois que vous avez ressenti un fort sentiment de <strong>{w_lower}</strong> ?",
                    "★ Trouvez-vous facile ou difficile de partager vos sentiments de <strong>{w_lower}</strong> avec les autres ?",
                    "★ Comment votre propre compréhension de <strong>{w_lower}</strong> a-t-elle évolué ces dernières années ?",
                    "★ Dans votre routine quotidienne, qu'est-ce qui vous aide à rester concentré sur <strong>{w_lower}</strong> ?",
                    "★ Quelle est la leçon la plus importante que vous ayez apprise concernant <strong>{w_lower}</strong> ?",
                    "★ Pensez-vous que notre société moderne valorise <strong>{w_lower}</strong>, ou est-il souvent ignoré ?",
                    "★ Quelle personne dans votre vie représente le mieux l'idée de <strong>{w_lower}</strong> ?",
                    "★ Si vous pouviez offrir plus de <strong>{w_lower}</strong> à un proche, à qui serait-ce ?",
                    "★ Pensez-vous que <strong>{w_lower}</strong> concerne plutôt la paix personnelle ou les expériences partagées ?",
                    "★ Quelle pratique simple vous aide à cultiver <strong>{w_lower}</strong> dans vos relations ?"
                ],
                "r2": [
                    "La description centrale de <strong>{w_lower}</strong> dans '{title}' est un magnifique reflet des luttes humaines. Débattons-en.",
                    "Sans une compréhension profonde de <strong>{w_lower}</strong>, nous ne pourrons jamais connaître de bonheur durable. Qu'en pensez-vous ?",
                    "L'œuvre de {artist} montre que notre recherche obsessionnelle de <strong>{w_lower}</strong> peut parfois mener au doute. Partagez votre avis.",
                    "Le vrai <strong>{w_lower}</strong> ne peut exister que si nous sommes pleinement en paix avec nous-mêmes. Discutons-en.",
                    "La musique de '{title}' suggère que nous devons être prêts à prendre des risques pour vivre pleinement <strong>{w_lower}</strong>. Êtes-vous d'accord ?",
                    "Dans le monde d'aujourd'hui, le développement paisible de <strong>{w_lower}</strong> est souvent menacé par les distractions. Débattons-en.",
                    "Nous ne pouvons apprécier pleinement <strong>{w_lower}</strong> sans avoir connu des moments de défi et d'échec. Analyse cette idée.",
                    "{artist} nous avertit que trop se focaliser sur <strong>{w_lower}</strong> peut nous faire perdre de vue d'autres réalités. Partagez votre avis.",
                    "La fin de '{title}' démontre qu'un seul rayon de <strong>{w_lower}</strong> peut nous porter à travers les saisons les plus froides. Discutons-en.",
                    "Si nous prenons toutes nos décisions de vie en fonction de <strong>{w_lower}</strong>, nous risquons de perdre toute stabilité. Discutons-en."
                ]
            }
        }
    }

    # Retrieve templates based on theme group and language
    theme_group = get_theme_group(focus, slug)
    group_templates = HANDCRAFTED_TEMPLATES.get(theme_group, HANDCRAFTED_TEMPLATES["default"])

    # Simple localization mappings to populate matching styles for other languages seamlessly
    active_lang = lang if lang in group_templates else "en"
    lang_templates = group_templates.get(active_lang, HANDCRAFTED_TEMPLATES["default"]["en"])

    r1_questions_html = ""
    for idx, w in enumerate(vocab_words):
        t_idx = idx % 10
        q_main_tpl = lang_templates["r1"][t_idx]
        q_pers_tpl = lang_templates["personal"][t_idx]

        q_main = q_main_tpl.format(title=title, artist=artist, w_lower=w)
        q_pers = q_pers_tpl.format(w_lower=w)

        r1_questions_html += f'<div class="round-item"><div class="round-item-main">{q_main}</div>\n<div class="round-item-personal">{q_pers}</div>\n</div>\n'

    r2_statements_html = ""
    for idx, w in enumerate(vocab_words):
        t_idx = idx % 10
        stmt_tpl = lang_templates["r2"][t_idx]

        stmt = stmt_tpl.format(title=title, artist=artist, focus=focus, w_lower=w)

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
    "leffet-de-masse": ["La classe", "L'histoire", "La masse", "Isoler", "L'idiot", "Le bureau", "Le regard", "Meilleur", "La rue", "Le couloir"],
    "ouvrir-les-yeux": ["Le cœur", "Désespoir", "La mémoire", "Prisonnière", "Le monde", "Seule", "Froid", "Oublier", "La chaleur", "Le ciel"],
    "seventeen": ["damaged", "normal", "special", "different", "movies", "summer", "dancing", "tonight", "choose", "right"],
    "lifeboat": ["ocean", "lifeboat", "sink", "captain", "weakest", "fighting", "storm", "wrong", "outfit", "crowded"],
    "me-and-i": ["Dual", "Conflict", "Reflect", "Personality", "Mirror", "Opposite", "Dialogue", "In harmony", "Acceptance", "Regret"],
    "la-tour-eiffel-est-pour-moi": ["Paris", "La liberté", "La beauté", "La fierté", "Le monument", "Se promener", "Le rêve", "Le ciel", "La joie", "Le souvenir"],
    "a-diagnosis": ["diagnosis", "neurosis", "label", "free", "supposed", "relief", "clarity", "mental", "illness", "name"],
    "after-everything-ive-done-for-you": ["done", "direction", "affection", "face", "place", "support", "treat", "help", "anger", "lonely"],
    "antidepressants-are-so-not-a-big-deal": ["deal", "heal", "day", "shame", "better", "antidepressants", "brain", "shadow", "help", "therapy"],
    "dont-be-a-lawyer": ["lawyer", "greedy", "stress", "ceiling", "guidance", "job", "hours", "passion", "money", "follow"],
    "eleven-oclock": ["awake", "mistake", "decision", "fight", "answers", "eleven", "thinking", "painful", "spinning", "resolution"],
    "face-your-fears": ["Insecurity", "fear", "tiptoe", "frightened", "stare", "scary", "courage", "scared", "brave", "run"],
    "fit-hot-guys-have-problems-too": ["problems", "perfect", "screen", "insecurities", "tears", "sad", "dream", "fears", "silent", "guys"],
    "group-hang": ["hang", "pressure", "dates", "conversations", "restaurant", "awkward", "friends", "socializing", "mates", "food"],
    "i-hate-everything-but-you": ["crowded", "politician", "smiling", "place", "everything", "traffic", "rain", "hate", "greedy", "beautiful"],
    "im-a-good-person": ["person", "donate", "poor", "friendly", "nicest", "good", "humble", "approval", "validation", "door"],
    "im-afraid-of-americans": ["America", "grocery", "stage", "cage", "plan", "afraid", "buy", "star", "friend", "world"],
    "im-the-villain-in-my-own-story": ["villain", "glory", "witch", "castle", "abusing", "story", "triumph", "princess", "tower", "guilt"],
    "lets-generalize-about-men": ["Generalize", "Satire", "Condescending", "repressed", "anger", "blanket", "conflate", "exception", "distinguish", "opposite"],
    "love-kernels": ["Kernels", "Delusional", "Obsession", "cactus", "drought", "symbolism", "stockpile", "compliment", "scarcity", "patience"],
    "oh-my-god-i-think-i-like-you": ["feeling", "supposed", "number", "beating", "hide", "vulnerability", "fun", "heart", "fast", "liking"],
    "settle-for-me": ["settle", "nice", "stable", "true", "search", "compromise", "choice", "quit", "love", "okay"],
    "sex-with-a-stranger": ["stranger", "dangerous", "game", "hotel", "alone", "excitement", "safe", "intimacy", "haze", "night"],
    "sexy-french-depression": ["depression", "melancholy", "wine", "stone", "crying", "sexy", "french", "bed", "heavy", "alone"],
    "sexy-getting-ready-song": ["ready", "crime", "shaving", "painful", "beautiful", "sexy", "waxing", "plucking", "work", "spanx"],
    "slow-motion": ["motion", "cool", "hair", "care", "heroes", "walking", "wind", "swagger", "grand", "coolest"],
    "so-maternal": ["Maternal", "Overzealous", "Compulsive", "harrowing", "matriarch", "expectations", "instinctual", "tireless", "raising", "perfect"],
    "whatll-it-be": ["Covina", "lonely", "lies", "leave", "find", "escaping", "drinks", "boring", "boundary", "night"],
    "wheres-the-bathroom": ["bathroom", "dirty", "apartment", "pictures", "wash", "door", "floor", "small", "parent", "expectations"],
    "whos-the-new-guy": ["office", "mysterious", "tribe", "investigate", "trouble", "new", "career", "curiosity", "change", "welcome"],
    "without-love-you-can-save-the-world": ["love", "focus", "drama", "explore", "door", "save", "world", "free", "crying", "public"],
    "women-gotta-stick-together": ["together", "support", "journey", "rivalry", "unity", "stick", "storm", "rivals", "stronger", "friendship"],
    "you-stupid-bitch": ["ruined", "ring", "mess", "strife", "dying", "stupid", "lose", "crying", "regret", "dark"]
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

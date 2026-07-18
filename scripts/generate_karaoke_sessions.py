import os
import re
import sys

OUTPUT_DIR = "events/sessions"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Add current scripts directory to sys.path to load master_lyrics safely
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from master_lyrics import LYRICS_DATA

# Proposed overarching themes mapped by song slug and language
SONG_THEMES = {
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
    "crazy-ex-girlfriend-challenge": ("love-kernels", "lets-generalize-about-men", "so-maternal", "face-your-fears"),
}

SONG_LINKS = {
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
    "un-raggio-di-sole": "https://www.youtube.com/results?search_query=un+raggio+di+sole+Jovanotti"
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
<link rel="icon" href="../../images/logos/cosylanguages.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../css/tokens.css">
<link rel="stylesheet" href="../../css/base.css">
<link rel="stylesheet" href="../../css/components.css">
<link rel="stylesheet" href="../../css/layout.css">
<link rel="stylesheet" href="../../css/events.css">
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
    <a href="../../">{breadcrumbs_home}</a> <span class="sep">/</span>
    <a href="../">{breadcrumbs_events}</a> <span class="sep">/</span>
    <a href="../karaoke-club.html">{breadcrumbs_club}</a> <span class="sep">/</span>
    <span class="current">{title}</span>
  </nav>
  <a href="../karaoke-club.html" class="back-link">{back_link}</a>
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
    <a href="../../index.html" style="color:var(--muted);text-decoration:none;">Home</a>
    <a href="../../practice/index.html" style="color:var(--muted);text-decoration:none;">Practice</a>
    <a href="../../games/index.html" style="color:var(--muted);text-decoration:none;">Games</a>
    <a href="../index.html" style="color:var(--muted);text-decoration:none;">Events</a>
  </div>
  <p>© 2026 COSYlanguages — All rights reserved</p>
</footer>
<script src="../../js/core/engine.js"></script>
<script src="../../js/core/ui.js"></script>
</body>
</html>"""

CHALLENGE_HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — COSYlanguages</title>
<link rel="icon" href="../../images/logos/cosylanguages.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../css/tokens.css">
<link rel="stylesheet" href="../../css/base.css">
<link rel="stylesheet" href="../../css/components.css">
<link rel="stylesheet" href="../../css/layout.css">
<link rel="stylesheet" href="../../css/events.css">
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
    <a href="../../">{breadcrumbs_home}</a> <span class="sep">/</span>
    <a href="../">{breadcrumbs_events}</a> <span class="sep">/</span>
    <a href="../karaoke-club.html">{breadcrumbs_club}</a> <span class="sep">/</span>
    <span class="current">{title}</span>
  </nav>
  <a href="../karaoke-club.html" class="back-link">{back_link}</a>
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
    <a href="../../index.html" style="color:var(--muted);text-decoration:none;">Home</a>
    <a href="../../practice/index.html" style="color:var(--muted);text-decoration:none;">Practice</a>
    <a href="../../games/index.html" style="color:var(--muted);text-decoration:none;">Games</a>
    <a href="../index.html" style="color:var(--muted);text-decoration:none;">Events</a>
  </div>
  <p>© 2026 COSYlanguages — All rights reserved</p>
</footer>
<script src="../../js/core/engine.js"></script>
<script src="../../js/core/ui.js"></script>
</body>
</html>"""


def parse_existing_vocab(slug):
    path = f"events/sessions/{slug}.html"
    vocab_data = {}
    if not os.path.exists(path):
        return vocab_data
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()
    # Find all vocab cards using a flexible regex that matches optional attributes and spacing
    cards = re.findall(r'<div class="vocab-card[^>]*>\s*<div class="vocab-word[^>]*>(.*?)</div>\s*<div class="vocab-def[^>]*>(.*?)</div>\s*<div class="vocab-example[^>]*>(.*?)</div>', html, re.DOTALL)
    for w, d, e in cards:
        w_clean = re.sub(r'<[^>]*>', '', w).strip()
        vocab_data[w_clean] = (d.strip(), e.strip())
    return vocab_data

def get_language_focus(slug, lang):
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


SLUG_CATEGORIES = {
    "toutes-les-machines-ont-le-coeur": "society_modern_life",
    "balance-ton-quoi": "society_modern_life",
    "laziza": "society_modern_life",
    "overprotected": "society_modern_life",
    "the-greatest": "society_modern_life",
    "where-is-my-husband": "society_modern_life",
    "ma-philosophie": "identity_expression",
    "voila": "identity_expression",
    "me-and-i": "identity_expression",
    "mixed-up-world": "identity_expression",
    "make-your-own-kind-of-music": "identity_expression",
    "diva": "identity_expression",
    "one-of-the-greats": "identity_expression",
    "je-taime-comme-je-taime": "relationships_love",
    "toi-mon-amour": "relationships_love",
    "oui-ou-non": "relationships_love",
    "quelquun-pour-toi": "relationships_love",
    "un-premier-amour": "relationships_love",
    "luomo-che-amava-le-donne": "relationships_love",
    "chi-sara-con-te": "relationships_love",
    "lamore-e-un-attimo": "relationships_love",
    "amor-libre": "relationships_love",
    "te-alejas-mas-de-mi": "relationships_love",
    "na-i-agapi-na": "relationships_love",
    "oh-to-be-in-love": "relationships_love",
    "unlikely-lovers": "relationships_love",
    "to-idio-to-theo": "relationships_love",
    "coming-around-again": "relationships_love",
    "nos-ames-sont": "relationships_love",
    "due-grosse-lacrime-bianche": "relationships_love",
    "immobile": "solitude_emotions",
    "la-nuit-nen-finit-plus": "solitude_emotions",
    "angeleyes": "solitude_emotions",
    "left-outside-alone": "solitude_emotions",
    "kapoies-nychtes": "solitude_emotions",
    "o-gatos": "solitude_emotions",
    "un-raggio-di-sole": "solitude_emotions",
    "salut": "nostalgia_time",
    "la-tour-eiffel-est-pour-moi": "nostalgia_time",
    "as-it-was": "nostalgia_time",
    "unatta-estate": "nostalgia_time",
    "nuevo-verano": "nostalgia_time",
    "u-mamy-est-sekret": "nostalgia_time",
    "vyshe-domov": "nostalgia_time",
    "california-dreaming": "nostalgia_time",
    "love-kernels": "satire_humor",
    "lets-generalize-about-men": "satire_humor",
    "so-maternal": "satire_humor",
    "face-your-fears": "satire_humor",
    "le-soleil-noir": "hardship_survival",
    "bien-plus-fort": "hardship_survival",
    "casualties-of-war": "hardship_survival",
    "army-dreamers": "hardship_survival",
    "its-getting-better": "hardship_survival",
    "second-hand-rose": "hardship_survival",
    "tu-ten-iras": "hardship_survival",
    "jim-beam": "hardship_survival"
}

QUESTIONS_TEMPLATES = {
    "relationships_love": {
        "en": [
            {
                "main": "What are the main dynamics between the characters in '{title}'? Who is speaking, and how do they perceive their partner?",
                "personal": "How do you usually handle mixed signals or differing perspectives in a close relationship?"
            },
            {
                "main": "What is the core message of this song regarding love? Is it depicted as a source of joy, pain, or obsession?",
                "personal": "Do you agree that love should be 'unconditional', or should there always be healthy boundaries?"
            },
            {
                "main": "What complex emotions (such as longing, security, or vulnerability) are conveyed in {artist}'s performance?",
                "personal": "How do you connect with these specific emotions when listening to romantic music?"
            },
            {
                "main": "How has the concept of romantic relationships evolved in the modern era? What are the biggest challenges couples face today?",
                "personal": "In what ways do you think dating apps and social networks have affected the way people meet and bond?"
            },
            {
                "main": "To what extent should we be willing to sacrifice our personal goals or identity for the sake of a relationship?",
                "personal": "What is the fine line between loving someone and completely losing oneself in them?"
            },
            {
                "main": "Why is open communication often so difficult to achieve in relationships, and how can we build deeper trust?",
                "personal": "What strategies do you find most effective when discussing difficult subjects with a partner?"
            }
        ],
        "fr": [
            {
                "main": "Quelles sont les dynamiques principales entre les personnages dans '{title}' ? Qui s'exprime, et comment perçoit-il son partenaire ?",
                "personal": "Comment gérez-vous habituellement les signaux contradictoires ou les opinions divergentes dans une relation ?"
            },
            {
                "main": "Quel est le message central de cette chanson concernant l'amour ? Est-il dépeint comme une source de joie, de souffrance ou d'obsession ?",
                "personal": "Êtes-vous d'accord pour dire que l'amour doit être 'inconditionnel', ou doit-il toujours y avoir des limites saines ?"
            },
            {
                "main": "Quelles émotions complexes (comme le désir, la sécurité ou la vulnérabilité) sont transmises par la performance de {artist} ?",
                "personal": "Comment ressentez-vous ces émotions particulières lorsque vous écoutez des chansons d'amour ?"
            },
            {
                "main": "Comment le concept de relation amoureuse a-t-il évolué à l'époque moderne ? Quels sont les plus grands défis auxquels les couples font face aujourd'hui ?",
                "personal": "De quelles manières pensez-vous que les applications de rencontre et les réseaux sociaux ont affecté les relations ?"
            },
            {
                "main": "Dans quelle mesure devrions-nous être prêts à sacrifier nos objectifs personnels ou notre identité pour le bien d'une relation ?",
                "personal": "Quelle est la limite entre aimer quelqu'un et se perdre complètement dans la relation ?"
            },
            {
                "main": "Pourquoi la communication ouverte est-elle souvent si difficile à établir dans un couple, et comment peut-on bâtir une confiance plus profonde ?",
                "personal": "Quelles sont selon vous les meilleures façons d'aborder des sujets difficiles avec un partenaire ?"
            }
        ],
        "ru": [
            {
                "main": "Какова основная динамика отношений между героями в песне '{title}'? Кто обращается к слушателю и как он воспринимает своего партнера?",
                "personal": "Как вы обычно справляетесь с противоречивыми сигналами или разными точками зрения в близких отношениях?"
            },
            {
                "main": "В чем заключается главный посыл этой песни о любви? Описывается ли любовь как источник радости, боли или одержимости?",
                "personal": "Согласны ли вы с тем, что любовь должна быть «безусловной», или всегда должны существовать здоровые границы?"
            },
            {
                "main": "Какие сложные эмоции (такие как тоска, безопасность или уязвимость) передает исполнение {artist}?",
                "personal": "Какие из этих чувств вам ближе всего, когда вы слушаете романтическую музыку?"
            },
            {
                "main": "Как изменилось представление о романтических отношениях в современную эпоху? С какими самыми большими трудностями сталкиваются пары сегодня?",
                "personal": "Как, по вашему мнению, приложения для знакомств и социальные сети повлияли на то, как люди общаются?"
            },
            {
                "main": "В какой степени мы должны быть готовы жертвовать своими личными целями или индивидуальностью ради отношений?",
                "personal": "Где проходит грань между любовью к человеку и полной потерей себя в этих отношениях?"
            },
            {
                "main": "Почему открытое общение часто так трудно дается в отношениях и как мы можем построить более глубокое доверие?",
                "personal": "Какие стратегии вы считаете наиболее эффективными при обсуждении сложных тем с партнером?"
            }
        ],
        "it": [
            {
                "main": "Quali sono le dinamiche principali tra i personaggi in '{title}'? Chi parla e come percepisce il proprio partner?",
                "personal": "Come gestisci di solito i segnali contrastanti o le diverse prospettive in una relazione stretta?"
            },
            {
                "main": "Qual è il messaggio centrale di questa canzone sull'amore? Viene dipinto come una fonte di gioia, dolore o ossessione?",
                "personal": "Sei d'accordo sul fatto che l'amore dovrebbe essere 'incondizionato' o dovrebbero esserci sempre dei limiti sani?"
            },
            {
                "main": "Quali emozioni complesse (come il desiderio, la sicurezza o la vulnerabilità) vengono trasmesse dall'interpretazione di {artist}?",
                "personal": "Come ti immedesimi in queste specifiche emozioni quando ascolti musica romantica?"
            },
            {
                "main": "Come si è evoluto il concetto di relazione romantica nell'era moderna? Quali sono le sfide più grandi che le coppie affrontano oggi?",
                "personal": "In quali modi pensi che le app di incontri e i social abbiano influenzato il modo in cui le persone si conoscono?"
            },
            {
                "main": "Fino a che punto dovremmo essere disposti a sacrificare i nostri obiettivi personali o la nostra identità per il bene di una relazione?",
                "personal": "Qual è il confine sottile tra l'amare qualcuno e il perdere completamente se stessi in lui?"
            },
            {
                "main": "Perché la comunicazione aperta è spesso così difficile da raggiungere nelle relazioni e come possiamo costruire una fiducia più profonda?",
                "personal": "Quali strategie ritieni più efficaci quando parli di argomenti difficili con un partner?"
            }
        ],
        "es": [
            {
                "main": "¿Cuáles son las dinámicas principales entre los personajes en '{title}'? ¿Quién habla y cómo percibe a su pareja?",
                "personal": "¿Cómo sueles manejar las señales mixtas o las diferentes perspectivas en una relación cercana?"
            },
            {
                "main": "¿Cuál es el mensaje central de esta canción sobre el amor? ¿Se describe como una fuente de alegría, dolor u obsesión?",
                "personal": "¿Estás de acuerdo en que el amor debe ser 'incondicional', o siempre debe haber límites saludables?"
            },
            {
                "main": "¿Qué emociones complejas (como el anhelo, la seguridad o la vulnerabilidad) se transmiten a través de la interpretación de {artist}?",
                "personal": "¿Cómo conectas con estas emociones específicas cuando escuchas música romántica?"
            },
            {
                "main": "¿Cómo ha evolucionado el concepto de las relaciones románticas en la era moderna? ¿Cuáles son los mayores desafíos que enfrentan las parejas hoy en día?",
                "personal": "¿De qué manera crees que las aplicaciones de citas y las redes sociales han afectado el cortejo?"
            },
            {
                "main": "¿Hasta qué punto deberíamos estar dispuestos a sacrificar nuestras metas personales o identidad por el bien de una relación?",
                "personal": "¿Cuál es la delgada línea entre amar a alguien y perderse por completo en la otra persona?"
            },
            {
                "main": "¿Por qué suele ser tan difícil lograr una comunicación abierta en las relaciones y cómo podemos construir una confianza más profunda?",
                "personal": "¿Qué estrategias te resultan más efectivas al discutir temas difíciles con tu pareja?"
            }
        ],
        "el": [
            {
                "main": "Ποια είναι η κύρια δυναμική μεταξύ των χαρακτήρων στο '{title}'; Ποιος μιλάει και πώς αντιλαμβάνεται τον σύντροφό του;",
                "personal": "Πώς διαχειρίζεστε συνήθως τα μπερδεμένα μηνύματα ή τις διαφορετικές απόψεις σε μια στενή σχέση;"
            },
            {
                "main": "Ποιο είναι το κεντρικό μήνυμα αυτού του τραγουδιού για την αγάπη; Παρουσιάζεται ως πηγή χαράς, πόνου ή εμμονής;",
                "personal": "Συμφωνείτε ότι η αγάπη πρέπει να είναι «άνευ όρων» ή πρέπει πάντα να υπάρχουν υγιή όρια;"
            },
            {
                "main": "Ποια σύνθετα συναισθήματα (όπως η λαχτάρα, η ασφάλεια ή η ευπάθεια) μεταφέρει η ερμηνεία του/της {artist};",
                "personal": "Πώς συνδέεστε με αυτά τα συγκεκριμένα συναισθήματα όταν ακούτε ρομαντική μουσική;"
            },
            {
                "main": "Πώς έχει εξελιχθεί η έννοια των ρομαντικών σχέσεων στη σύγχρονη εποχή; Ποιες είναι οι μεγαλύτερες προκλήσεις που αντιμετωπίζουν τα ζευγάρια σήμερα;",
                "personal": "Με ποιους τρόπους πιστεύετε ότι οι εφαρμογές γνωριμιών και τα κοινωνικά δίκτυα έχουν επηρεάσει τις σχέσεις;"
            },
            {
                "main": "Σε ποιο βαθμό θα πρέπει να είμαστε πρόθυμοι να θυσιάσουμε τους προσωπικούς μας στόχους ή την ταυτότητά μας για χάρη μιας σχέσης;",
                "personal": "Πού βρίσκεται η λεπτή γραμμή ανάμεσα στο να αγαπάς κάποιον και να χάνεις εντελώς τον εαυτό σου;"
            },
            {
                "main": "Γιατί η ανοιχτή επικοινωνία είναι συχνά τόσο δύσκολη στις σχέσεις και πώς μπορούμε να οικοδομήσουμε βαθύτερη εμπιστοσύνη;",
                "personal": "Ποιες στρατηγικές θεωρείτε πιο αποτελεσματικές όταν συζητάτε δύσκολα θέματα με έναν σύντροφο;"
            }
        ]
    },
    "identity_expression": {
        "en": [
            {
                "main": "How does the narrator in '{title}' view themselves? What internal conflicts or aspirations do they reveal?",
                "personal": "When was the last time you felt a conflict between how you feel inside and how you must act?"
            },
            {
                "main": "What is the main message of '{title}' about authenticity and self-expression? What does it teach us about standing up for ourselves?",
                "personal": "How easy or difficult is it for you to speak up and defend your opinions in a crowd?"
            },
            {
                "main": "What feelings of determination, pride, or vulnerability are emphasized in {artist}'s vocal delivery?",
                "personal": "Which of these emotions do you find most powerful and inspiring in art or music?"
            },
            {
                "main": "In a world that often demands conformity, how can we successfully discover and maintain our true identity?",
                "personal": "Have you ever had to change your behavior or look to fit into a particular social group?"
            },
            {
                "main": "How should we define success and self-worth? Is it determined by external approval or internal satisfaction?",
                "personal": "To what extent does your professional or educational success define your personal self-worth?"
            },
            {
                "main": "What are the best ways to cope with expectations from family, friends, or society while remaining true to oneself?",
                "personal": "How do you handle pressure from loved ones when your goals differ from their expectations?"
            }
        ],
        "fr": [
            {
                "main": "Comment le narrateur dans '{title}' se perçoit-il ? Quels conflits internes ou aspirations révèle-t-il ?",
                "personal": "À quand remonte la dernière fois où vous avez ressenti un conflit entre vos sentiments internes et votre comportement ?"
            },
            {
                "main": "Quel est le message principal de '{title}' concernant l'authenticité et l'expression de soi ? Que nous apprend-elle sur l'affirmation de soi ?",
                "personal": "Est-il facile ou difficile pour vous de prendre la parole pour défendre vos opinions en public ?"
            },
            {
                "main": "Quels sentiments de détermination, de fierté ou de vulnérabilité sont mis en valeur par la voix de {artist} ?",
                "personal": "Laquelle de ces émotions trouvez-vous la plus inspirante ou puissante dans l'art ou la musique ?"
            },
            {
                "main": "Dans un monde qui exige souvent la conformité, comment pouvons-nous découvrir et maintenir notre véritable identité ?",
                "personal": "Avez-vous déjà dû modifier votre comportement ou votre apparence pour vous intégrer à un groupe ?"
            },
            {
                "main": "Comment devrions-nous définir la réussite et l'estime de soi ? Sont-elles déterminées par l'approbation externe ou la satisfaction interne ?",
                "personal": "Dans quelle mesure votre réussite professionnelle ou académique définit-elle votre estime de soi ?"
            },
            {
                "main": "Quels sont les meilleurs moyens de faire face aux attentes de la famille, des amis ou de la société tout en restant fidèle à soi-même ?",
                "personal": "Comment gérez-vous la pression de vos proches lorsque vos objectifs divergent de leurs attentes ?"
            }
        ],
        "ru": [
            {
                "main": "Как повествователь в песне '{title}' воспринимает себя? Какие внутренние конфликты или стремления он раскрывает?",
                "personal": "Когда в последний раз вы чувствовали конфликт между вашим внутренним состоянием и тем, как нужно себя вести?"
            },
            {
                "main": "Каков главный посыл песни '{title}' в отношении подлинности и самовыражения? Чему она учит нас в плане отстаивания своих прав?",
                "personal": "Насколько легко или трудно вам высказывать и отстаивать свое мнение в группе людей?"
            },
            {
                "main": "Какие чувства решимости, гордости или уязвимости подчеркиваются в вокале {artist}?",
                "personal": "Какая из этих эмоций кажется вам наиболее сильной и вдохновляющей в искусстве или музыке?"
            },
            {
                "main": "В мире, который часто требует конформизма, как мы можем успешно открыть и сохранить свою истинную идентичность?",
                "personal": "Приходилось ли вам когда-либо менять свое поведение или внешний вид, чтобы вписаться в коллектив?"
            },
            {
                "main": "Как мы должны определять успех и самооценку? Определяется ли это внешним одобрением или внутренним удовлетворением?",
                "personal": "В какой степени ваши профессиональные или учебные успехи определяют вашу личную самооценку?"
            },
            {
                "main": "Каковы наилучшие способы справляться с ожиданиями семьи, друзей или общества, оставаясь при этом верным себе?",
                "personal": "Как вы справляетесь с давлением близких, если ваши цели расходятся с их ожиданиями?"
            }
        ],
        "it": [
            {
                "main": "In che modo il narratore in '{title}' vede se stesso? Quali conflitti interiori o aspirazioni rivela?",
                "personal": "Quando è stata l'ultima volta che hai provato un conflitto tra come ti sentivi dentro e come dovevi agire?"
            },
            {
                "main": "Qual è il messaggio principale di '{title}' sull'autenticità e l'espressione di sé? Cosa ci insegna sul difendere ciò in cui crediamo?",
                "personal": "Quanto è facile o difficile per te esprimere e difendere le tue opinioni in pubblico?"
            },
            {
                "main": "Quali sentimenti di determinazione, orgoglio o vulnerabilità sono enfatizzati dall'interpretazione vocale di {artist}?",
                "personal": "Quale di queste emozioni trovi più potente e stimolante nell'arte o nella musica?"
            },
            {
                "main": "In un mondo che spesso richiede conformismo, come possiamo scoprire e mantenere con successo la nostra vera identità?",
                "personal": "Hai mai dovuto cambiare il tuo comportamento o il tuo look per inserirti in un particolare gruppo sociale?"
            },
            {
                "main": "Come dovremmo definire il successo e l'autostima? Sono determinati dall'approvazione esterna o dalla soddisfazione interiore?",
                "personal": "In che misura il tuo successo professionale o scolastico definisce la tua autostima personale?"
            },
            {
                "main": "Quali sono i modi migliori per gestire le aspettative della famiglia, degli amici o della società rimanendo fedeli a se stessi?",
                "personal": "Come gestisci la pressione dei tuoi cari quando i tuoi obiettivi differiscono dalle loro aspettative?"
            }
        ],
        "es": [
            {
                "main": "¿Cómo se percibe a sí mismo el narrador en '{title}'? ¿Qué conflictos internos o aspiraciones revela?",
                "personal": "¿Cuándo fue la última vez que sentiste un conflicto entre cómo te sentías por dentro y cómo debías actuar?"
            },
            {
                "main": "¿Cuál es el mensaje principal de '{title}' sobre la autenticidad y la expresión personal? ¿Qué nos enseña sobre defendernos a nosotros mismos?",
                "personal": "¿Qué tan fácil o difícil es para ti hablar y defender tus opiniones frente a un grupo?"
            },
            {
                "main": "¿Qué sentimientos de determinación, orgullo o vulnerabilidad se enfatizan en la entrega vocal de {artist}?",
                "personal": "¿Cuál de estas emociones te resulta más poderosa e inspiradora en el arte o la música?"
            },
            {
                "main": "En un mundo que a menudo exige conformidad, ¿cómo podemos descubrir y mantener con éxito nuestra verdadera identidad?",
                "personal": "¿Alguna vez has tenido que cambiar tu comportamiento o apariencia para encajar en un grupo social?"
            },
            {
                "main": "¿Cómo deberíamos definir el éxito y la autoestima? ¿Se determina por la aprobación externa o la satisfacción interna?",
                "personal": "¿Hasta qué punto define tu éxito profesional o educativo tu autoestima personal?"
            },
            {
                "main": "¿Cuáles son las mejores maneras de lidiar con las expectativas de la familia, los amigos o la sociedad mientras permanecemos fieles a nosotros mismos?",
                "personal": "¿Cómo manejas la presión de tus seres queridos cuando tus metas difieren de sus expectativas?"
            }
        ],
        "el": [
            {
                "main": "Πώς βλέπει τον εαυτό του ο αφηγητής στο '{title}'; Ποιες εσωτερικές συγκρούσεις ή φιλοδοξίες αποκαλύπτει;",
                "personal": "Πότε ήταν η τελευταία φορά που νιώσατε σύγκρουση ανάμεσα σε αυτό που αισθάνεστε μέσα σας και στο πώς πρέπει να ενεργήσετε;"
            },
            {
                "main": "Ποιο είναι το κύριο μήνυμα του '{title}' σχετικά με την αυθεντικότητα και την αυτοέκφραση; Τι μας διδάσκει για το να υποστηρίζουμε τον εαυτό μας;",
                "personal": "Πόσο εύκολο ή δύσκολο είναι για εσάς να μιλήσετε και να υπερασπιστείτε τις απόψεις σας μπροστά σε κόσμο;"
            },
            {
                "main": "Ποια συναισθήματα αποφασιστικότητας, περηφάνιας ή ευπάθειας τονίζονται στην ερμηνεία του/της {artist};",
                "personal": "Ποιο από αυτά τα συναισθήματα βρίσκετε πιο ισχυρό και εμπνευσμένο στην τέχνη ή τη μουσική;"
            },
            {
                "main": "Σε έναν κόσμο που συχνά απαιτεί συμμόρφωση, πώς μπορούμε να ανακαλύψουμε και να διατηρήσουμε με επιτυχία την πραγματική μας ταυτότητα;",
                "personal": "Χρειάστηκε ποτέ να αλλάξετε τη συμπεριφορά ή την εμφάνισή σας για να ταιριάξετε σε μια συγκεκριμένη κοινωνική ομάδα;"
            },
            {
                "main": "Πώς πρέπει να ορίζουμε την επιτυχία και την αυτοεκτίμηση; Καθορίζεται από την εξωτερική έγκριση ή την εσωτερική ικανοποίηση;",
                "personal": "Σε ποιο βαθμό η επαγγελματική ή εκπαιδευτική σας επιτυχία καθορίζει την προσωπική σας αυτοεκτίμηση;"
            },
            {
                "main": "Ποιοι είναι οι καλύτεροι τρόποι για να αντιμετωπίσουμε τις προσδοκίες της οικογένειας, των φίλων ή της κοινωνίας, παραμένοντας πιστοί στον εαυτό μας;",
                "personal": "Πώς αντιμετωπίζετε την πίεση από αγαπημένα πρόσωπα όταν οι στόχοι σας διαφέρουν από τις προσδοκίες τους;"
            }
        ]
    },
    "solitude_emotions": {
        "en": [
            {
                "main": "What kind of environment is the narrator in '{title}' experiencing? How does it reflect their inner state of mind?",
                "personal": "How does your physical surroundings usually affect your emotions and creativity?"
            },
            {
                "main": "What is the song's perspective on loneliness and emotional distress? Is there any comfort or hope offered?",
                "personal": "Where do you go or what do you do to find comfort when you are feeling low?"
            },
            {
                "main": "How do the melody and {artist}'s delivery capture the weight of grief, longing, or stillness?",
                "personal": "Do you prefer listening to sad music or happy music when you are going through a difficult time?"
            },
            {
                "main": "In our hyper-connected digital world, why is the feeling of loneliness and isolation actually increasing?",
                "personal": "Do you feel that online interactions can fully replace the value of physically meeting people?"
            },
            {
                "main": "How can individuals cope with moments of intense emotional hardship or feeling 'stuck' in life?",
                "personal": "What is the best advice you have ever received on how to overcome a personal crisis?"
            },
            {
                "main": "Why does society sometimes view expressing sadness or vulnerability as a weakness, and how can we change this?",
                "personal": "How comfortable are you showing your vulnerability or crying in front of other people?"
            }
        ],
        "fr": [
            {
                "main": "Quel type d'environnement le narrateur de '{title}' traverse-t-il ? Comment cela reflète-t-il son état d'esprit intérieur ?",
                "personal": "Comment votre environnement physique affecte-t-il habituellement vos émotions et votre créativité ?"
            },
            {
                "main": "Quelle est la perspective de la chanson sur la solitude et la détresse émotionnelle ? Offre-t-elle du réconfort ou de l'espoir ?",
                "personal": "Où allez-vous ou que faites-vous pour trouver du réconfort quand vous n'avez pas le moral ?"
            },
            {
                "main": "Comment la mélodie et l'interprétation de {artist} capturent-elles le poids du chagrin, du désir ou de l'immobilité ?",
                "personal": "Préférez-vous écouter de la musique triste ou joyeuse lorsque vous traversez une période difficile ?"
            },
            {
                "main": "Dans notre monde numérique hyper-connecté, pourquoi le sentiment de solitude et d'isolement est-il en réalité en train d'augmenter ?",
                "personal": "Pensez-vous que les interactions en ligne peuvent remplacer la valeur des rencontres physiques ?"
            },
            {
                "main": "Comment peut-on faire face aux moments de détresse émotionnelle intense ou au sentiment d'être 'bloqué' dans la vie ?",
                "personal": "Quel est le meilleur conseil que vous ayez reçu pour surmonter une crise personnelle ?"
            },
            {
                "main": "Pourquoi la société considère-t-elle parfois l'expression de la tristesse ou de la vulnérabilité comme une faiblesse, et comment changer cela ?",
                "personal": "Dans quelle mesure êtes-vous à l'aise pour montrer votre vulnérabilité ou pleurer devant les autres ?"
            }
        ],
        "ru": [
            {
                "main": "Какую атмосферу переживает повествователь в песне '{title}'? Как это отражает его внутреннее душевное состояние?",
                "personal": "Как окружающая обстановка обычно влияет на ваши эмоции и творческий настрой?"
            },
            {
                "main": "Каков взгляд этой песни на одиночество и душевную боль? Предлагается ли здесь какое-то утешение или надежда?",
                "personal": "Куда вы идете или что делаете, чтобы найти утешение, когда вам грустно?"
            },
            {
                "main": "Как мелодия и исполнение {artist} передают тяжесть горя, тоски или неподвижности?",
                "personal": "Вы предпочитаете слушать грустную или веселую музыку, когда переживаете трудные времена?"
            },
            {
                "main": "В нашем гиперинформационном цифровом мире почему чувство одиночества и изоляции на самом деле возрастает?",
                "personal": "Считаете ли вы, что онлайн-общение может полностью заменить ценность личных встреч?"
            },
            {
                "main": "Как люди могут справляться с моментами глубоких эмоциональных трудностей или ощущения «тупика» в жизни?",
                "personal": "Какой лучший совет вы когда-либо получали о том, как преодолеть личный кризис?"
            },
            {
                "main": "Почему общество иногда рассматривает выражение грусти или уязвимости как слабость, и как мы можем это изменить?",
                "personal": "Насколько комфортно вам проявлять свою уязвимость или плакать в присутствии других людей?"
            }
        ],
        "it": [
            {
                "main": "Che tipo di ambiente sta vivendo il narratore in '{title}'? In che modo riflette il suo stato d'animo interiore?",
                "personal": "In che modo l'ambiente fisico che ti circonda influisce sulle tue emozioni e sulla tua creatività?"
            },
            {
                "main": "Qual è la prospettiva della canzone sulla solitudine e sul disagio emotivo? Viene offerto un qualche conforto o speranza?",
                "personal": "Dove vai o cosa fai per trovare conforto quando ti senti giù di morale?"
            },
            {
                "main": "In che modo la melodia e l'interpretazione di {artist} catturano il peso del dolore, del desiderio o dell'immobilità?",
                "personal": "Preferisci ascoltare musica triste o allegra quando stai attraversando un periodo difficile?"
            },
            {
                "main": "Nel nostro mondo digitale iper-connesso, perché la sensazione di solitudine e isolamento sta effettivamente aumentando?",
                "personal": "Pensi che le interazioni online possano sostituire completamente il valore dell'incontro fisico?"
            },
            {
                "main": "In che modo le persone possono affrontare momenti di intensa difficoltà emotiva o la sensazione di essere 'bloccati' nella vita?",
                "personal": "Qual è il miglior consiglio che hai mai ricevuto su come superare una crisi personale?"
            },
            {
                "main": "Perché la società a volte vede l'espressione della tristezza o della vulnerabilità come una debolezza, e come possiamo cambiare questo?",
                "personal": "Quanto ti senti a tuo agio nel mostrare la tua vulnerabilità o nel piangere davanti ad altre persone?"
            }
        ],
        "es": [
            {
                "main": "¿Qué tipo de entorno está experimentando el narrador en '{title}'? ¿Cómo refleja esto su estado de ánimo interno?",
                "personal": "¿Cómo afecta tu entorno físico a tus emociones y a tu creatividad?"
            },
            {
                "main": "¿Cuál es la perspectiva de la canción sobre la soledad y la angustia emocional? ¿Se ofrece algún consuelo o esperanza?",
                "personal": "¿A dónde vas o qué haces para encontrar consuelo cuando te sientes desanimado?"
            },
            {
                "main": "¿Cómo capturan la melodía y la interpretación de {artist} el peso del dolor, el anhelo o la quietud?",
                "personal": "¿Prefieres escuchar música triste o alegre cuando estás pasando por un momento difícil?"
            },
            {
                "main": "En nuestro mundo digital hiperconectado, ¿por qué está aumentando realmente el sentimiento de soledad y aislamiento?",
                "personal": "¿Sientes que las interacciones en línea pueden reemplazar el valor de conocer a la gente en persona?"
            },
            {
                "main": "¿Cómo pueden las personas afrontar momentos de intensa dificultad emocional o el sentimiento de estar 'atascados' en la vida?",
                "personal": "¿Cuál es el mejor consejo que has recibido sobre cómo superar una crisis personal?"
            },
            {
                "main": "¿Por qué la sociedad a veces ve la expresión de tristeza o vulnerabilidad como una debilidad, y cómo podemos cambiar esto?",
                "personal": "¿Qué tan cómodo te sientes mostrando tu vulnerabilidad o llorando frente a otras personas?"
            }
        ],
        "el": [
            {
                "main": "Τι είδους περιβάλλον βιώνει ο αφηγητής στο '{title}'; Πώς αντανακλά την εσωτερική του ψυχική κατάσταση;",
                "personal": "Πώς επηρεάζει συνήθως το φυσικό σας περιβάλλον τα συναισθήματα και τη δημιουργικότητά σας;"
            },
            {
                "main": "Ποια είναι η οπτική του τραγουδιού για τη μοναξιά και τη συναισθηματική δυσφορία; Προσφέρεται κάποια παρηγοριά ή ελπίδα;",
                "personal": "Πού πηγαίνετε ή τι κάνετε για να βρείτε παρηγοριά όταν νιώθετε πεσμένοι;"
            },
            {
                "main": "Πώς η μελωδία και η ερμηνεία του/της {artist} αποτυπώνουν το βάρος της θλίψης, της λαχτάρας ή της ακινησίας;",
                "personal": "Προτιμάτε να ακούτε λυπητερή ή χαρούμενη μουσική όταν περνάτε μια δύσκολη φάση;"
            },
            {
                "main": "Στον υπερσυνδεδεμένο ψηφιακό κόσμο μας, γιατί το αίσθημα της μοναξιάς και της απομόνωσης στην πραγματικότητα αυξάνεται;",
                "personal": "Πιστεύετε ότι οι διαδικτυακές αλληλεπιδράσεις μπορούν να αντικαταστήσουν πλήρως την αξία της προσωπικής επαφής;"
            },
            {
                "main": "Πώς μπορούν οι άνθρωποι να αντιμετωπίζουν στιγμές έντονης συναισθηματικής δυσκολίας ή το αίσθημα ότι είναι 'κολλημένοι' στη ζωή;",
                "personal": "Ποια είναι η καλύτερη συμβουλή που έχετε λάβει ποτέ για το πώς να ξεπεράσετε μια προσωπική κρίση;"
            },
            {
                "main": "Γιατί η κοινωνία θεωρεί μερικές φορές την έκφραση της θλίψης ή της ευπάθειας ως αδυναμία και πώς μπορούμε να το αλλάξουμε αυτό;",
                "personal": "Πόσο άνετα νιώθετε να δείχνετε την ευπάθειά σας ή να κλαίτε μπροστά σε άλλους;"
            }
        ]
    },
    "society_modern_life": {
        "en": [
            {
                "main": "What modern societal conflict is the narrator addressing in '{title}'? Who represents the status quo, and who is challenging it?",
                "personal": "Have you ever felt compelled to challenge a rule, expectation, or norm in your work or study environment?"
            },
            {
                "main": "What warning or critique does '{title}' present concerning technology, inequality, or prejudice?",
                "personal": "Which aspect of modern society (e.g., gender roles, wealth gap, tech addiction) concerns you the most?"
            },
            {
                "main": "How does {artist}'s delivery reflect feelings of frustration, hope, or urgency about the state of the world?",
                "personal": "Do you feel optimistic or pessimistic about the social progress of the next decade?"
            },
            {
                "main": "How is rapid technological advancement affecting human empathy and our ability to connect face-to-face?",
                "personal": "How do you try to balance your screen time with high-quality real-world interactions?"
            },
            {
                "main": "What are the most critical steps we can take in our communities to foster true equality and combat discrimination?",
                "personal": "What minor changes in your daily behavior can help make those around you feel more included and respected?"
            },
            {
                "main": "In what ways do modern media and social networks shape our perceptions of justice and community responsibility?",
                "personal": "How do you distinguish between authentic news and biased social media outrage in your life?"
            }
        ],
        "fr": [
            {
                "main": "Quel conflit sociétal moderne le narrateur aborde-t-il dans '{title}' ? Qui représente le statu quo, et qui le remet en question ?",
                "personal": "Avez-vous déjà ressenti le besoin de contester une règle ou une norme dans votre environnement ?"
            },
            {
                "main": "Quel avertissement ou critique '{title}' présente-t-elle concernant la technologie, les inégalités ou les préjugés ?",
                "personal": "Quel aspect de la société moderne (rôles de genre, inégalités, dépendance à la technologie) vous préoccupe le plus ?"
            },
            {
                "main": "Comment l'interprétation de {artist} reflète-t-elle la frustration, l'espoir ou l'urgence face à l'état du monde ?",
                "personal": "Êtes-vous optimiste ou pessimiste quant aux progrès sociaux de la prochaine décennie ?"
            },
            {
                "main": "Comment les progrès technologiques rapides affectent-ils l'empathie humaine et notre capacité à nous connecter face à face ?",
                "personal": "Comment essayez-vous d'équilibrer votre temps d'écran avec des interactions réelles de qualité ?"
            },
            {
                "main": "Quelles sont les étapes les plus importantes à franchir dans nos communautés pour favoriser une véritable égalité et lutter contre la discrimination ?",
                "personal": "Quels petits changements quotidiens peuvent aider les personnes autour de vous à se sentir respectées ?"
            },
            {
                "main": "De quelles manières les médias modernes et les réseaux sociaux façonnent-ils notre perception de la justice et de la responsabilité collective ?",
                "personal": "Comment faites-vous la différence entre des informations fiables et l'indignation sur les réseaux sociaux ?"
            }
        ],
        "ru": [
            {
                "main": "Какой современный общественный конфликт затрагивает повествователь в песне '{title}'? Кто представляет статус-кво, а кто бросает ему вызов?",
                "personal": "Приходилось ли вам когда-либо идти против правил или ожиданий в вашей работе или учебе?"
            },
            {
                "main": "Какое предупреждение или критику содержит песня '{title}' в отношении технологий, неравенства или предрассудков?",
                "personal": "Какой аспект современного общества (например, гендерные роли, неравенство, зависимость от гаджетов) вас беспокоит больше всего?"
            },
            {
                "main": "Как исполнение {artist} отражает чувство разочарования, надежды или безотлагательности в отношении состояния мира?",
                "personal": "Вы настроены оптимистично или пессимистично относительно социального прогресса в ближайшие 10 лет?"
            },
            {
                "main": "Как стремительный технический прогресс влияет на человеческое сопереживание и нашу способность общаться лицом к лицу?",
                "personal": "Как вы стараетесь сбалансировать экранное время с качественным личным общением?"
            },
            {
                "main": "Каковы наиболее важные шаги, которые мы можем предпринять в наших сообществах для обеспечения истинного равенства и борьбы с дискриминацией?",
                "personal": "Какие небольшие изменения в повседневном поведении могут помочь окружающим почувствовать себя более защищенными?"
            },
            {
                "main": "Каким образом современные СМИ и социальные сети формируют наше восприятие справедливости и коллективной ответственности?",
                "personal": "Как вы отличаете достоверные новости от предвзятого мнения в социальных сетях?"
            }
        ],
        "it": [
            {
                "main": "Quale conflitto sociale moderno affronta il narratore in '{title}'? Chi rappresenta lo status quo e chi lo sta sfidando?",
                "personal": "Ti sei mai sentito costretto a sfidare una regola o una norma nel tuo ambiente di lavoro o di studio?"
            },
            {
                "main": "Quale avvertimento o critica presenta '{title}' riguardo alla tecnologia, all'uguaglianza o al pregiudizio?",
                "personal": "Quale aspetto della società moderna (es. ruoli di genere, divario di ricchezza, dipendenza tecnologica) ti preoccupa di più?"
            },
            {
                "main": "In che modo l'interpretazione di {artist} riflette sentimenti di frustrazione, speranza o urgenza sullo stato del mondo?",
                "personal": "Ti senti ottimista o pessimista riguardo al progresso sociale del prossimo decennio?"
            },
            {
                "main": "In che modo il rapido progresso tecnologico influisce sull'empatia umana e sulla nostra capacità di connetterci faccia a faccia?",
                "personal": "Come cerchi di bilanciare il tempo davanti allo schermo con interazioni di alta qualità nel mondo reale?"
            },
            {
                "main": "Quali sono i passi più importanti che possiamo compiere nelle nostre comunità per favorire la vera uguaglianza e combattere la discriminazione?",
                "personal": "Quali piccoli cambiamenti nel tuo comportamento quotidiano possono aiutare chi ti circonda a sentirsi più incluso?"
            },
            {
                "main": "In quali modi i media moderni e i social network influenzano la nostra percezione della giustizia e della responsabilità comunitaria?",
                "personal": "Come distingui tra notizie autentiche e indignazione faziosa sui social media?"
            }
        ],
        "es": [
            {
                "main": "¿Qué conflicto social moderno aborda el narrador en '{title}'? ¿Quién representa el statu quo y quién lo desafía?",
                "personal": "¿Alguna vez te has sentido obligado a desafiar una regla o norma en tu entorno laboral o de estudio?"
            },
            {
                "main": "¿Qué advertencia o crítica presenta '{title}' con respecto a la tecnología, la desigualdad o el prejuicio?",
                "personal": "¿Qué aspecto de la sociedad moderna (por ejemplo, roles de género, brecha de riqueza, adicción a la tecnología) te preocupa más?"
            },
            {
                "main": "¿Cómo refleja la interpretación de {artist} los sentimientos de frustración, esperanza o urgencia sobre el estado del mundo?",
                "personal": "¿Te sientes optimista o pesimista sobre el progreso social de la próxima década?"
            },
            {
                "main": "¿Cómo está afectando el rápido avance tecnológico a la empatía humana y a nuestra capacidad para conectarnos cara a cara?",
                "personal": "¿Cómo intentas equilibrar el tiempo de pantalla con interacciones reales de calidad?"
            },
            {
                "main": "¿Cuáles son los pasos más críticos que podemos tomar en nuestras comunidades para fomentar la verdadera igualdad y combatir la discriminación?",
                "personal": "¿Qué pequeños cambios en tu comportamiento diario pueden ayudar a que los que te rodean se sientan más incluidos?"
            },
            {
                "main": "¿De qué manera los medios modernos y las redes sociales moldean nuestras percepciones de la justicia y la responsabilidad comunitaria?",
                "personal": "¿Cómo distingues entre noticias auténticas e indignación sesgada en las noticias?"
            }
        ],
        "el": [
            {
                "main": "Ποια σύγχρονη κοινωνική σύγκρουση αντιμετωπίζει ο αφηγητής στο '{title}'; Ποιος αντιπροσωπεύει το κατεστημένο και ποιος το αμφισβητεί;",
                "personal": "Νιώσατε ποτέ την ανάγκη να αμφισβητήσετε έναν κανόνα ή ένα κοινωνικό πρότυπο στο περιβάλλον σας;"
            },
            {
                "main": "Ποια προειδοποίηση ή κριτική παρουσιάζει το '{title}' σχετικά με την τεχνολογία, την ανισότητα ή την προκατάληψη;",
                "personal": "Ποια πτυχή της σύγχρονης κοινωνίας (π.χ. έμφυλοι ρόλοι, τεχνολογικός εθισμός) σας ανησυχεί περισσότερο;"
            },
            {
                "main": "Πώς η ερμηνεία του/της {artist} αντανακλά συναισθήματα απογοήτευσης, ελπίδας ή επείγοντος για την κατάσταση του κόσμου;",
                "personal": "Αισθάνεστε αισιόδοξοι ή απαισιόδοξοι για την κοινωνική πρόοδο της επόμενης δεκαετίας;"
            },
            {
                "main": "Πώς επηρεάζει η ραγδαία τεχνολογική πρόοδος την ανθρώπινη ενσυναίσθηση και την ικανότητά μας να συνδεόμαστε πρόσωπο με πρόσωπο;",
                "personal": "Πώς προσπαθείτε να ισορροπήσετε τον χρόνο στις οθόνες με ποιοτικές αλληλεπιδράσεις στον πραγματικό κόσμο;"
            },
            {
                "main": "Ποια είναι τα πιο κρίσιμα βήματα που μπορούμε να κάνουμε στις κοινότητές μας για να προωθήσουμε την πραγματική ισότητα και να καταπολεμήσουμε τις διακρίσεις;",
                "personal": "Ποιες μικρές αλλαγές στην καθημερινή σας συμπεριφορά μπορούν να βοηθήσουν τους γύρω σας να νιώσουν μεγαλύτερο σεβασμό;"
            },
            {
                "main": "Με ποιους τρόπους τα σύγχρονα μέσα ενημέρωσης και τα κοινωνικά δίκτυα διαμορφώνουν τις αντιλήψεις μας για τη δικαιοσύνη και την κοινοτική ευθύνη;",
                "personal": "Πώς ξεχωρίζετε τις έγκυρες ειδήσεις από τις προκατειλημμένες αντιδράσεις στα μέσα κοινωνικής δικτύωσης;"
            }
        ]
    },
    "nostalgia_time": {
        "en": [
            {
                "main": "Who is the narrator looking back on or trying to reconnect with in '{title}'? What has changed since their past encounter?",
                "personal": "Have you ever reconnected with someone from your distant past? How did it feel?"
            },
            {
                "main": "What does the song suggest about the passage of time? Is nostalgia portrayed as a comfort or a painful weight?",
                "personal": "Do you find yourself thinking about 'the good old days' often, or do you prefer to focus solely on the future?"
            },
            {
                "main": "What feelings of warmth, regret, or longing are expressed through {artist}'s storytelling?",
                "personal": "Which particular season or place brings back the most powerful memories of your youth?"
            },
            {
                "main": "Why do humans have such a strong tendency to romanticize the past? Is nostalgia always a positive emotion?",
                "personal": "What is one thing from your past that you tend to remember as being much better than it actually was?"
            },
            {
                "main": "In what ways do our childhood environments and family secrets shape the adults we eventually become?",
                "personal": "How much of your current personality do you attribute to your upbringing and family background?"
            },
            {
                "main": "How does the way we remember past experiences change as we grow older? Can we truly rely on our memories?",
                "personal": "Have you ever discovered that a memory you held for years was actually incorrect or exaggerated?"
            }
        ],
        "fr": [
            {
                "main": "Vers qui le narrateur se tourne-t-il ou essaie-t-il de se reconnecter dans '{title}' ? Qu'est-ce qui a changé depuis leur dernière rencontre ?",
                "personal": "Avez-vous déjà repris contact avec quelqu'un de votre passé ? Qu'avez-vous ressenti ?"
            },
            {
                "main": "Que suggère la chanson sur le passage du temps ? La nostalgie est-elle dépeinte comme un réconfort ou un poids douloureux ?",
                "personal": "Pensez-vous souvent au 'bon vieux temps' ou préférez-vous vous concentrer uniquement sur l'avenir ?"
            },
            {
                "main": "Quels sentiments de chaleur, de regret ou de désir sont exprimés à travers l'histoire de {artist} ?",
                "personal": "Quelle saison ou quel endroit particulier vous rappelle les souvenirs les plus forts de votre jeunesse ?"
            },
            {
                "main": "Pourquoi les humains ont-ils une si forte tendance à romantiser le passé ? La nostalgie est-elle toujours une émotion positive ?",
                "personal": "Quelle est la chose de votre passé dont vous vous souvenez comme bien meilleure qu'elle ne l'était en réalité ?"
            },
            {
                "main": "De quelle manière notre environnement d'enfance et les secrets de famille façonnent-ils les adultes que nous devenons ?",
                "personal": "Quelle part de votre personnalité actuelle attribuez-vous à votre éducation et à votre milieu familial ?"
            },
            {
                "main": "Comment notre perception des expériences passées évolue-t-elle avec l'âge ? Pouvons-nous vraiment faire confiance à nos souvenirs ?",
                "personal": "Avez-vous déjà découvert qu'un souvenir d'enfance était en réalité faux ou déformé ?"
            }
        ],
        "ru": [
            {
                "main": "О ком вспоминает или с кем пытается восстановить связь повествователь в песне '{title}'? Что изменилось с момента их прошлой встречи?",
                "personal": "Общались ли вы когда-нибудь с кем-то из вашего далекого прошлого? Каковы были ваши ощущения?"
            },
            {
                "main": "Что песня говорит о быстротечности времени? Представлена ли ностальгия как утешение или как болезненное бремя?",
                "personal": "Часто ли вы ловите себя на мыслях о «старых добрых временах» или предпочитаете думать только о будущем?"
            },
            {
                "main": "Какие чувства тепла, сожаления или тоски выражаются в повествовании {artist}?",
                "personal": "Какое именно время года или место вызывает у вас самые яркие воспоминания о юности?"
            },
            {
                "main": "Почему люди так склонны романтизировать прошлое? Всегда ли ностальгия является положительной эмоцией?",
                "personal": "О каком событии или вещи из прошлого вы вспоминаете с гораздо большим восторгом, чем они того заслуживали?"
            },
            {
                "main": "Каким образом наше детское окружение и семейные секреты формируют из нас тех взрослых, которыми мы в итоге становимся?",
                "personal": "Какую часть своего нынешнего характера вы связываете именно со своим воспитанием и семьей?"
            },
            {
                "main": "Как меняется отношение к прошлому опыту по мере того, как мы становимся старше? Можем ли мы доверять своим воспоминаниям?",
                "personal": "Выясняли ли вы когда-нибудь, что воспоминание, которое вы хранили годами, было ошибочным или приукрашенным?"
            }
        ],
        "it": [
            {
                "main": "A chi guarda indietro o con chi cerca di riconnettersi il narratore in '{title}'? Cosa è cambiato dal loro incontro passato?",
                "personal": "Ti sei mai riconnesso con qualcuno del tuo lontano passato? Come ti sei sentito?"
            },
            {
                "main": "Cosa suggerisce la canzone sullo scorrere del tempo? La nostalgia è ritratta come un conforto o un peso doloroso?",
                "personal": "Ti ritrovi spesso a pensare ai 'bei vecchi tempi' o preferisci concentrarti esclusivamente sul futuro?"
            },
            {
                "main": "Quali sentimenti di calore, rimpianto o desiderio sono espressi attraverso la narrazione di {artist}?",
                "personal": "Quale particolare stagione o luogo ti riporta alla mente i ricordi più intensi della tua giovinezza?"
            },
            {
                "main": "Perce gli esseri umani hanno una così forte tendenza a romanticizzare il passato? La nostalgia è sempre un'emozione positiva?",
                "personal": "Qual è una cosa del tuo passato che tendi a ricordare come molto migliore di quanto non fosse in realtà?"
            },
            {
                "main": "In che modo i nostri ambienti d'infanzia e i segreti di famiglia influenzano gli adulti che alla fine diventiamo?",
                "personal": "Quanto della tua attuale personalità attribuisci alla tua educazione e al tuo background familiare?"
            },
            {
                "main": "Come cambia il modo in cui ricordiamo le esperienze passate man mano che invecchiamo? Possiamo davvero fidarci dei nostri ricordi?",
                "personal": "Hai mai scoperto che un ricordo che hai conservato per anni era in realtà errato o esagerato?"
            }
        ],
        "es": [
            {
                "main": "¿Hacia quién mira atrás o intenta reconectarse el narrador en '{title}'? ¿Qué ha cambiado desde su encuentro pasado?",
                "personal": "¿Alguna vez te has vuelto a conectar con alguien de tu pasado lejano? ¿Cómo te sentiste?"
            },
            {
                "main": "¿Qué sugiere la canción sobre el paso del tiempo? ¿Se retrata la nostalgia como un consuelo o como un peso doloroso?",
                "personal": "¿Sueles pensar a menudo en 'los viejos tiempos' o prefieres concentrarte únicamente en el futuro?"
            },
            {
                "main": "¿Qué sentimientos de calidez, arrepentimiento o anhelo se expresan a través de la narración de {artist}?",
                "personal": "¿Qué estación o lugar en particular te trae los recuerdos más poderosos de tu juventud?"
            },
            {
                "main": "¿Por qué los seres humanos tienen una tendencia tan fuerte a romantizar el pasado? ¿Es la nostalgia siempre una emoción positiva?",
                "personal": "¿Qué cosa de tu pasado tiendes a recordar como mucho mejor de lo que realmente fue?"
            },
            {
                "main": "¿De qué manera nuestro entorno infantil y los secretos familiares moldean a los adultos en los que nos convertimos eventualmente?",
                "personal": "¿Qué parte de tu personalidad actual atribuyes a tu crianza y entorno familiar?"
            },
            {
                "main": "¿Cómo cambia la forma en que recordamos las experiencias pasadas a medida que envejecemos? ¿Podemos confiar realmente en nuestros recuerdos?",
                "personal": "¿Alguna vez has descubierto que un recuerdo que guardaste durante años era en realidad incorrecto o exagerado?"
            }
        ],
        "el": [
            {
                "main": "Ποιον κοιτάζει πίσω ή προσπαθεί να επανασυνδεθεί ο αφηγητής στο '{title}'; Τι έχει αλλάξει από την προηγούμενη συνάντησή τους;",
                "personal": "Έχετε επανασυνδεθεί ποτέ με κάποιον από το μακρινό σας παρελθόν; Πώς νιώσατε;"
            },
            {
                "main": "Τι υποδηλώνει το τραγούδι για το πέρασμα του χρόνου; Η νοσταλγία παρουσιάζεται ως παρηγοριά ή ως επώδυνο βάρος;",
                "personal": "Σκέφτεστε συχνά 'τα παλιά καλά χρόνια' ή προτιμάτε να εστιάζετε αποκλειστικά στο μέλλον;"
            },
            {
                "main": "Ποια συναισθήματα ζεστασιάς, μεταμέλειας ή λαχτάρας εκφράζονται μέσα από την αφήγηση του/της {artist};",
                "personal": "Ποια συγκεκριμένη εποχή ή μέρος σάς φέρνει τις πιο έντονες αναμνήσεις της νιότης σας;"
            },
            {
                "main": "Γιατί οι άνθρωποι έχουν τόσο έντονη τάση να εξιδανικεύουν το παρελθόν; Είναι η νοσταλγία πάντα ένα θετικό συναίσθημα;",
                "personal": "Ποιο είναι ένα πράγμα από το παρελθόν σας που τείνετε να θυμάστε πολύ καλύτερο απ' ό,τι ήταν στην πραγματικότητα;"
            },
            {
                "main": "Με ποιους τρόπους το περιβάλλον των παιδικών μας χρόνων και τα οικογενειακά μυστικά διαμορφώνουν τους ενήλικες που τελικά γινόμαστε;",
                "personal": "Πόσο από την τρέχουσα προσωπικότητά σας αποδίδετε στην ανατροφή και το οικογενειακό σας υπόβαθρο;"
            },
            {
                "main": "Πώς αλλάζει ο τρόπος με τον οποίο θυμόμαστε τις περασμένες εμπειρίες καθώς μεγαλώνουμε; Μπορούμε πραγματικά να βασιστούμε στις αναμνήσεις μας;",
                "personal": "Έχετε ανακαλύψει ποτέ ότι μια ανάμνηση που κρατούσατε για χρόνια ήταν στην πραγματικότητα λανθασμένη ή υπερβολική;"
            }
        ]
    },
    "satire_humor": {
        "en": [
            {
                "main": "How does the protagonist's personality in '{title}' create comedic tension? Who are they trying to convince or impress?",
                "personal": "When was the last time you found yourself trying too hard to impress someone? What happened?"
            },
            {
                "main": "What modern obsession, social stereotype, or behavior is '{title}' satirizing? What is the serious truth behind the humor?",
                "personal": "Which stereotypes or clichés in TV shows do you find most annoying or humorous?"
            },
            {
                "main": "How do the theatrical performance and vocal style of {artist} reinforce the satirical nature of the song?",
                "personal": "Do you enjoy performance-driven or satirical musical genres, or do you prefer more traditional styles?"
            },
            {
                "main": "In what ways can humor and satire be more effective than serious arguments when addressing complex social issues?",
                "personal": "Can you think of a situation where making a joke helped diffuse a serious argument or tension?"
            },
            {
                "main": "Why is there so much societal pressure today to be 'perfect' overachievers in career, relationships, or parenting?",
                "personal": "How do you protect your peace of mind from expectations of perfection at work or home?"
            },
            {
                "main": "Why do people sometimes fall for confident yet absurd or dangerous advice, and how can we develop better critical thinking?",
                "personal": "What is the funniest or most absurd advice you have ever been given by a friend or family member?"
            }
        ],
        "fr": [
            {
                "main": "Comment la personnalité du protagoniste dans '{title}' crée-t-elle une tension comique ? Qui essaie-t-il de convaincre ou d'impressionner ?",
                "personal": "À quand remonte la dernière fois où vous avez trop essayé d'impressionner quelqu'un ? Que s'est-il passé ?"
            },
            {
                "main": "Quelle obsession moderne, stéréotype social ou comportement '{title}' satirise-t-elle ? Quelle est la vérité sérieuse derrière cet humour ?",
                "personal": "Quels stéréotypes ou clichés dans les émissions de télévision trouvez-vous les plus agaçants ou amusants ?"
            },
            {
                "main": "Comment la performance théâtrale et le style vocal de {artist} renforcent-ils la nature satirique de la chanson ?",
                "personal": "Appréciez-vous les genres musicaux théâtraux ou satiriques, ou préférez-vous des styles plus traditionnels ?"
            },
            {
                "main": "En quoi l'humour et la satire peuvent-ils être plus efficaces que des arguments sérieux pour aborder des problèmes sociaux complexes ?",
                "personal": "Pouvez-vous penser à une situation où faire une plaisanterie a aidé à désamorcer une tension ?"
            },
            {
                "main": "Pourquoi y a-t-il tant de pression sociale aujourd'hui pour être des perfectionnistes ultra-performants dans le travail, le couple ou la parentalité ?",
                "personal": "Comment protégez-vous votre tranquillité d'esprit face aux exigences de perfection au travail ou chez vous ?"
            },
            {
                "main": "Pourquoi les gens se laissent-ils parfois séduire par des conseils absurdes mais pleins d'assurance, et comment développer son esprit critique ?",
                "personal": "Quel est le conseil le plus absurde qu'un ami ou un membre de votre famille vous ait donné ?"
            }
        ],
        "ru": [
            {
                "main": "Как личность главного героя в песне '{title}' создает комическое напряжение? Кого он пытается убедить или впечатлить?",
                "personal": "Когда вы в последний раз ловили себя на том, что слишком стараетесь произвести впечатление на кого-то?"
            },
            {
                "main": "Какую современную одержимость, социальный стереотип или поведение высмеивает песня '{title}'? Какая серьезная правда скрывается за юмором?",
                "personal": "Какие стереотипы или клише в телешоу кажутся вам наиболее раздражающими или забавными?"
            },
            {
                "main": "Как театральное представление и вокальный стиль {artist} подчеркивают сатирический характер песни?",
                "personal": "Нравятся ли вам театральные или сатирические музыкальные жанры, или вы предпочитаете более традиционные стили?"
            },
            {
                "main": "Каким образом юмор и сатира могут быть более эффективными, чем серьезные аргументы, при рассмотрении сложных социальных проблем?",
                "personal": "Можете ли вы вспомнить ситуацию, когда шутка помогла разрядить серьезную обстановку?"
            },
            {
                "main": "Почему сегодня существует такое сильное давление общества с требованием быть «идеальными» отличниками в карьере, отношениях или воспитании детей?",
                "personal": "Как вы защищаете свое душевное спокойствие от требований идеальности на работе или дома?"
            },
            {
                "main": "Почему люди иногда ведутся на уверенные, но абсурдные или опасные советы, и как мы можем развить критическое мышление?",
                "personal": "Какую самую смешную или абсурдную рекомендацию вам когда-либо давал друг или член семьи?"
            }
        ],
        "it": [
            {
                "main": "In che modo la personalità del protagonista in '{title}' crea tensione comica? Chi sta cercando di convincere o impressionare?",
                "personal": "Quando è stata l'ultima volta che hai cercato con troppa insistenza di impressionare qualcuno? Cos'è successo?"
            },
            {
                "main": "Quale ossessione moderna, stereotipo sociale o comportamento sta satirizzando '{title}'? Qual è la seria verità dietro l'umorismo?",
                "personal": "Quali stereotipi o cliché negli show televisivi trovi più irritanti o divertenti?"
            },
            {
                "main": "In che modo l'interpretazione teatrale e lo stile vocale di {artist} rafforzano la natura satirica della canzone?",
                "personal": "Ti piacciono i generi musicali teatrali o satirici o preferisci stili più tradizionali?"
            },
            {
                "main": "In quali modi l'umorismo e la satira possono essere più efficaci di argomenti seri quando si affrontano questioni sociali complesse?",
                "personal": "Riesci a pensare a una situazione in cui fare una battuta ha aiutato a stemperare una tensione seria?"
            },
            {
                "main": "Perché oggi c'è così tanta pressione sociale per essere perfezionisti di successo nella carriera, nelle relazioni o nella genitorialità?",
                "personal": "Come proteggi la tua tranquillità mentale dalle aspettative di perfezione al lavoro o a casa?"
            },
            {
                "main": "Perché le persone a volte cadono in consigli sicuri ma assurdi o pericolosi, e come possiamo sviluppare un migliore pensiero critico?",
                "personal": "Qual è il consiglio più divertente o assurdo che ti sia mai stato dato da un amico o da un familiare?"
            }
        ],
        "es": [
            {
                "main": "¿Cómo crea tensión cómica la personalidad del protagonista en '{title}'? ¿A quién intenta convencer o impresionar?",
                "personal": "¿Cuándo fue la última vez que te esforzaste demasiado por impresionar a alguien? ¿Qué pasó?"
            },
            {
                "main": "¿Qué obsesión moderna, estereotipo social o comportamiento está satirizando '{title}'? ¿Cuál es la verdad seria detrás del humor?",
                "personal": "¿Qué estereotipos o clichés en los programas de televisión te resultan más molestos o graciosos?"
            },
            {
                "main": "¿Cómo refuerzan la interpretación de {artist} el carácter satírico de la canción?",
                "personal": "¿Te gustan los géneros musicales teatrales o satíricos, o prefieres estilos más tradicionales?"
            },
            {
                "main": "¿De qué manera pueden el humor y la sátira ser más efectivos que los argumentos serios al abordar problemas sociales complejos?",
                "personal": "¿Se te ocurre alguna situación en la que contar un chiste ayudara a suavizar una discusión seria?"
            },
            {
                "main": "¿Por qué hay tanta presión social hoy en día para ser perfeccionistas sobresalientes en la carrera, las relaciones o la crianza de los hijos?",
                "personal": "¿Cómo proteges tu paz mental de las expectativas de perfección en el trabajo o el hogar?"
            },
            {
                "main": "¿Por qué la gente a veces cae en consejos confiados pero absurdos o peligrosos, y cómo podemos desarrollar un mejor pensamiento crítico?",
                "personal": "¿Cuál es el consejo más divertido o absurdo que te ha dado un amigo o un de su familia?"
            }
        ],
        "el": [
            {
                "main": "Πώς η προσωπικότητα του πρωταγωνιστή στο '{title}' δημιουργεί κωμική ένταση; Ποιον προσπαθεί να πείσει ή να εντυπωσιάσει;",
                "personal": "Πότε ήταν η τελευταία φορά που προσπαθήσατε υπερβολικά να εντυπωσιάσετε κάποιον; Τι συνέβη;"
            },
            {
                "main": "Ποια σύγχρονη εμμονή, κοινωνικό στερεότυπο ή συμπεριφορά σατιρίζει το '{title}'; Ποια είναι η σοβαρή αλήθεια πίσω από το χιούμορ;",
                "personal": "Ποια στερεότυπα ή κλισέ σε τηλεοπτικές εκπομπές βρίσκετε πιο ενοχλητικά ή αστεία;"
            },
            {
                "main": "Πώς η θεατρική ερμηνεία και το φωνητικό στυλ του/της {artist} ενισχύουν τη σατιρική φύση του τραγουδιού;",
                "personal": "Σας αρέσουν τα θεατρικά ή σατιρικά μουσικά είδη ή προτιμάτε πιο παραδοσιακά στυλ;"
            },
            {
                "main": "Με ποιους τρόπους το χιούμορ και η σάτιρα μπορούν να είναι πιο αποτελεσματικά από τα σοβαρά επιχειρήματα κατά την αντιμετώπιση σύνθετων κοινωνικών ζητημάτων;",
                "personal": "Μπορείτε να σκεφτείτε μια κατάσταση όπου ένα αστείο βοήθησε να εκτονωθεί μια σοβαρή ένταση;"
            },
            {
                "main": "Γιατί υπάρχει τόση κοινωνική πίεση σήμερα να είμαστε «τέλειοι» σε καριέρα, σχέσεις ή ανατροφή παιδιών;",
                "personal": "Πώς προστατεύετε την ψυχική σας ηρεμία από τις προσδοκίες για τελειότητα στη δουλειά ή στο σπίτι;"
            },
            {
                "main": "Γιατί οι άνθρωποι μερικές φορές πιστεύουν σίγουρες αλλά παράλογες ή επικίνδυνες συμβουλές και πώς μπορούμε να αναπτύξουμε καλύτερη κριτική σκέψη;",
                "personal": "Ποια είναι η πιο αστεία ή παράλογη συμβουλή που σας έχει δώσει ποτέ φίλος ή μέλος της οικογένειας;"
            }
        ]
    },
    "hardship_survival": {
        "en": [
            {
                "main": "What kind of crisis or tragedy are the characters in '{title}' facing? How are they attempting to survive?",
                "personal": "How do you usually respond to unexpected major challenges or sudden changes in your life?"
            },
            {
                "main": "What is the main message of '{title}' regarding the human cost of conflict, pain, or loss?",
                "personal": "How do you process feelings of sadness or distress when looking at world news?"
            },
            {
                "main": "How do the dark melody and {artist}'s performance convey deep sadness, anger, or a desperate search for hope?",
                "personal": "Is there a specific song or piece of art that has helped you process a personal loss?"
            },
            {
                "main": "What are the long-term emotional and psychological consequences of war, conflict, or severe trauma on individuals and families?",
                "personal": "How can families preserve their unity and mental health when going through severe economic or social stress?"
            },
            {
                "main": "What are the most effective ways for individuals and communities to support each other and heal in the aftermath of a crisis?",
                "personal": "Have you ever participated in or witnessed a beautiful community effort to help someone in need?"
            },
            {
                "main": "Why do people sometimes turn to dangerous coping mechanisms or illusions to escape harsh realities, and how can they find real support?",
                "personal": "What healthy ways have you developed to escape daily stress or recharge your energy?"
            }
        ],
        "fr": [
            {
                "main": "À quel type de crise ou de tragédie les personnages de '{title}' font-ils face ? Comment essaient-ils de survivre ?",
                "personal": "Comment réagissez-vous généralement aux imprévus majeurs ou aux changements soudains dans votre vie ?"
            },
            {
                "main": "Quel est le message principal de '{title}' concernant le coût humain des conflits, de la souffrance ou de la perte ?",
                "personal": "Comment gérez-vous la tristesse ou l'inquiétude face aux actualités internationales ?"
            },
            {
                "main": "Comment la mélodie sombre et l'interprétation de {artist} expriment-elles une profonde tristesse, de la colère ou une recherche désespérée d'espoir ?",
                "personal": "Y a-t-il une œuvre d'art ou une chanson qui vous a aidé à traverser une épreuve personnelle ?"
            },
            {
                "main": "Quelles sont les conséquences psychologiques et émotionnelles à long terme des guerres, des conflits ou des traumatismes graves sur les individus et les familles ?",
                "personal": "Comment les familles peuvent-elles préserver leur unité et leur santé mentale face à de graves crises ?"
            },
            {
                "main": "Quels sont les moyens les plus efficaces pour les individus et les communautés de se soutenir mutuellement et de guérir après une crise ?",
                "personal": "Avez-vous déjà participé à un élan de solidarité au sein de votre communauté ?"
            },
            {
                "main": "Pourquoi les gens se tournent-ils parfois vers des mécanismes d'évitement ou des illusions pour échapper à la réalité, et comment trouver un soutien réel ?",
                "personal": "Quelles méthodes saines avez-vous développées pour échapper au stress quotidien ?"
            }
        ],
        "ru": [
            {
                "main": "С каким кризисом или трагедией сталкиваются герои песни '{title}'? Как они пытаются выжить?",
                "personal": "Как вы обычно реагируете на неожиданные трудности или внезапные изменения в вашей жизни?"
            },
            {
                "main": "Каков главный посыл песни '{title}' относительно человеческих потерь в результате конфликтов, боли или утраты?",
                "personal": "Как вы справляетесь с чувствами грусти или тревоги при просмотре мировых новостей?"
            },
            {
                "main": "Как мрачная мелодия и исполнение {artist} передают глубокую грусть, гнев или отчаянный поиск надежды?",
                "personal": "Есть ли песня или произведение искусства, которые помогли вам пережить личную потерю?"
            },
            {
                "main": "Каковы долгосрочные эмоциональные и психологические последствия войн, конфликтов или тяжелых травм для отдельных людей и семей?",
                "personal": "Как семьи могут сохранить единство и психическое здоровье во время тяжелых экономических или социальных трудностей?"
            },
            {
                "main": "Каковы наиболее эффективные способы поддержки друг друга и восстановления для людей и сообществ после кризиса?",
                "personal": "Участвовали ли вы когда-либо в благотворительных или общественных акциях помощи нуждающимся?"
            },
            {
                "main": "Почему люди иногда прибегают к опасным иллюзиям или механизмам ухода от реальности, чтобы сбежать от суровых будней, и как найти реальную помощь?",
                "personal": "Какие здоровые способы борьбы со стрессом вы выработали для себя?"
            }
        ],
        "it": [
            {
                "main": "Che tipo di crisi o tragedia stanno affrontando i personaggi in '{title}'? In che modo cercano di sopravvivere?",
                "personal": "Come rispondi di solito alle principali sfide impreviste o ai cambiamenti improvvisi nella tua vita?"
            },
            {
                "main": "Qual è il messaggio principale di '{title}' riguardo al costo umano del conflitto, del dolore o della perdita?",
                "personal": "Come gestisci le sensazioni di tristezza o ansia quando guardi i notiziari internazionali?"
            },
            {
                "main": "In che modo la melodia cupa e l'interpretazione di {artist} trasmettono profonda tristezza, rabbia o una disperata ricerca di speranza?",
                "personal": "C'è una canzone o un'opera d'arte specifica che ti ha aiutato a elaborare una perdita personale?"
            },
            {
                "main": "Quali sono le conseguenze emotive e psicologiche a lungo termine della guerra, del conflitto o di gravi traumi su individui e famiglie?",
                "personal": "Come possono le famiglie preservare la loro unità e salute mentale durante gravi difficoltà economiche o sociali?"
            },
            {
                "main": "Quali sono i modi più efficaci per individui e comunità per sostenersi a vicenda e guarire all'indomani di una crisi?",
                "personal": "Hai mai partecipato o assistito a un bello sforzo della comunità per aiutare qualcuno in difficoltà?"
            },
            {
                "main": "Perché le persone a volte ricorrono a meccanismi di difesa pericolosi o illusioni per sfuggire a realtà difficili, e come possono trovare un vero supporto?",
                "personal": "Quali modi sani hai sviluppato per sfuggire allo stress quotidiano o ricaricare le tue energie?"
            }
        ],
        "es": [
            {
                "main": "¿A qué tipo de crisis o tragedia se enfrentan los personajes en '{title}'? ¿Cómo intentan sobrevivir?",
                "personal": "¿Cómo sueles responder ante desafíos imprevistos o cambios repentinos en tu vida?"
            },
            {
                "main": "¿Cuál es el mensaje principal de '{title}' con respecto al costo humano del conflicto, el dolor o la pérdida?",
                "personal": "¿Cómo procesas los sentimientos de tristeza o de angustia al ver las noticias del mundo?"
            },
            {
                "main": "¿Cómo transmiten la melodía oscura y la interpretación de {artist} una profunda tristeza, ira o una búsqueda desesperada de esperanza?",
                "personal": "¿Hay alguna canción o obra de arte específica que te haya ayudado a superar una pérdida personal?"
            },
            {
                "main": "¿Cuáles son las consecuencias emocionales y psicológicas a largo plazo de la guerra, el conflicto o el trauma grave en las personas y las familias?",
                "personal": "¿Cómo pueden las familias preservar su unión y salud mental bajo graves dificultades económicas o sociales?"
            },
            {
                "main": "¿Cuáles son las formas más efectivas para que las personas y las comunidades se apoyen mutuamente y sanen después de una crisis?",
                "personal": "¿Alguna vez has participado o presenciado un esfuerzo comunitario para ayudar a alguien necesitado?"
            },
            {
                "main": "¿Por qué las personas a veces recurren a mecanismos de evasión peligrosos o ilusiones para escapar de realidades duras, y cómo pueden encontrar un apoyo real?",
                "personal": "¿Qué métodos saludables has desarrollado para escapar del estrés diario o recargar energías?"
            }
        ],
        "el": [
            {
                "main": "Τι είδους κρίση ή τραγωδία αντιμετωπίζουν οι χαρακτήρες στο '{title}'; Πώς προσπαθούν να επιβιώσουν;",
                "personal": "Πώς αντιδράτε συνήθως σε απροσδόκητες μεγάλες προκλήσεις ή ξαφνικές αλλαγές στη ζωή σας;"
            },
            {
                "main": "Ποιο είναι το κύριο μήνυμα του '{title}' σχετικά με το ανθρώπινο κόστος της σύγκρουσης, του πόνου ή της απώλειας;",
                "personal": "Πώς διαχειρίζεστε τα συναισθήματα θλίψης ή ανησυχίας όταν παρακολουθείτε τις παγκόσμιες ειδήσεις;"
            },
            {
                "main": "Πώς η σκοτεινή μελωδία και η ερμηνεία του/της {artist} μεταφέρουν βαθιά θλίψη, θυμό ή μια απελπισμένη αναζήτηση ελπίδας;",
                "personal": "Υπάρχει κάποιο συγκεκριμένο τραγούδι ή έργο τέχνης που σας βοήθησε να ξεπεράσετε μια προσωπική απώλεια;"
            },
            {
                "main": "Ποιες είναι οι μακροπρόθεσμες συναισθηματικές και ψυχολογικές συνέπειες του πολέμου, της σύγκρουσης ή του σοβαρού τραύματος στα άτομα και τις οικογένειες;",
                "personal": "Πώς μπορούν οι οικογένειες να διατηρήσουν την ενότητα και την ψυχική τους υγεία σε περιόδους έντονου οικονομικού ή κοινωνικού στρες;"
            },
            {
                "main": "Ποιοι είναι οι πιο αποτελεσματικοί τρόποι για τα άτομα και τις κοινότητες να υποστηρίξουν ο ένας τον άλλον και να θεραπευτούν μετά από μια κρίση;",
                "personal": "Έχετε συμμετάσχει ποτέ ή έχετε δει μια όμορφη συλλογική προσπάθεια για να βοηθηθεί κάποιος που έχει ανάγκη;"
            },
            {
                "main": "Γιατί οι άνθρωποι στρέφονται μερικές φορές σε επικίνδυνους μηχανισμούς αντιμετώπισης ή ψευδαισθήσεις για να ξεφύγουν από τη σκληρή πραγματικότητα και πώς μπορούν να βρουν πραγματική υποστήριξη;",
                "personal": "Ποιους υγιείς τρόπους έχετε αναπτύξει για να ξεφεύγετε από το καθημερινό στρες ή να γεμίζετε τις μπαταρίες σας;"
            }
        ]
    }
}

def generate_song_elements(song, loc, lang, sub_slug=None, existing_vocab=None):
    title = song["title"]
    artist = song["artist"]
    vocab_words = song["vocab"]
    helpers = song["helpers"]
    lyrics_text = song["lyrics"].replace("\n", "<br>")
    slug = sub_slug or song["slug"]

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
                opp_html = f'\n            <div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>{opp_label}</strong> <span class="vocab-opp-word" style="font-weight: 600;">{opp_word}</span></div>'

            escaped_def = definition.replace("'", "\\'")
            escaped_ex = example.replace("'", "\\'")
            html_block += f"""            <div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">{w}</div><div class="vocab-def">{definition}</div><div class="vocab-example">{example}</div>{opp_html}<button class="btn-add-dict" onclick="COSY.addToDict({{word:\'{w}\', definition:\'{escaped_def}\', example:\'{escaped_ex}\'}}, this)">+ Dictionary</button></div>\n"""
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

    # Category thematic discussion logic
    category = SLUG_CATEGORIES.get(slug, "relationships_love")
    templates = QUESTIONS_TEMPLATES.get(category, QUESTIONS_TEMPLATES["relationships_love"])
    lang_templates = templates.get(lang, templates.get("en", templates["en"]))

    r1_questions_html = ""
    for item in lang_templates[:3]:
        q_main = item["main"].format(title=title, artist=artist)
        q_pers = item["personal"].format(title=title, artist=artist)
        r1_questions_html += f'          <div class="round-item"><div class="round-item-main">{q_main}</div><div class="round-item-personal">★ {q_pers}</div></div>\n'

    r2_statements_html = ""
    for item in lang_templates[3:6]:
        stmt = item["main"].format(title=title, artist=artist)
        r2_statements_html += f'          <div class="round-item"><div class="round-item-main">{stmt}</div></div>\n'

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

# STEP 1: Parse all 56 songs dynamically from their existing files
songs_list = []
for slug in sorted(LYRICS_DATA.keys()):
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

    vocab = re.findall(r'<div class="vocab-word[^>]*>(.*?)</div>', html, re.DOTALL)
    vocab_cleaned = []
    for v in vocab:
        v_stripped = re.sub(r'<[^>]*>', '', v).strip()
        vocab_cleaned.append(v_stripped)

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

    vocab = re.findall(r'<div class="vocab-word[^>]*>(.*?)</div>', html, re.DOTALL)
    vocab_cleaned = []
    for v in vocab:
        v_stripped = re.sub(r'<[^>]*>', '', v).strip()
        vocab_cleaned.append(v_stripped)

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
<link rel="icon" href="../../images/logos/cosylanguages.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../css/tokens.css">
<link rel="stylesheet" href="../../css/base.css">
<link rel="stylesheet" href="../../css/components.css">
<link rel="stylesheet" href="../../css/layout.css">
<link rel="stylesheet" href="../../css/events.css">
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
    <a href="../../">{breadcrumbs_home}</a> <span class="sep">/</span>
    <a href="../">{breadcrumbs_events}</a> <span class="sep">/</span>
    <a href="../karaoke-club.html">{breadcrumbs_club}</a> <span class="sep">/</span>
    <span class="current">{title}</span>
  </nav>
  <a href="../karaoke-club.html" class="back-link">{back_link}</a>
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
      <div style="width: 20%; background: #9B59B6;" title="Listening (20%)"></div>
      <div style="width: 45%; background: #2ECC71;" title="Discussion (45%)"></div>
      <div style="width: 5%; background: #F1C40F;" title="Language Focus (5%)"></div>
      <div style="width: 5%; background: #E74C3C;" title="Final Challenge (5%)"></div>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--muted); flex-wrap: wrap; gap: 0.5rem;">
      <span>🎵 Warm-up (10%)</span>
      <span>📚 Vocabulary (15%)</span>
      <span>🎧 Listening (20%)</span>
      <span>💬 Discussion (45%)</span>
      <span>✨ Language Focus (10%)</span>
      <span>🎭 Final Challenge (10%)</span>
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
    <a href="../../index.html" style="color:var(--muted);text-decoration:none;">Home</a>
    <a href="../../practice/index.html" style="color:var(--muted);text-decoration:none;">Practice</a>
    <a href="../../games/index.html" style="color:var(--muted);text-decoration:none;">Games</a>
    <a href="../index.html" style="color:var(--muted);text-decoration:none;">Events</a>
  </div>
  <p>© 2026 COSYlanguages — All rights reserved</p>
</footer>
<script src="../../js/core/engine.js"></script>
<script src="../../js/core/ui.js"></script>
</body>
</html>"""

CHALLENGE_HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — COSYlanguages</title>
<link rel="icon" href="../../images/logos/cosylanguages.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../css/tokens.css">
<link rel="stylesheet" href="../../css/base.css">
<link rel="stylesheet" href="../../css/components.css">
<link rel="stylesheet" href="../../css/layout.css">
<link rel="stylesheet" href="../../css/events.css">
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
    <a href="../../">{breadcrumbs_home}</a> <span class="sep">/</span>
    <a href="../">{breadcrumbs_events}</a> <span class="sep">/</span>
    <a href="../karaoke-club.html">{breadcrumbs_club}</a> <span class="sep">/</span>
    <span class="current">{title}</span>
  </nav>
  <a href="../karaoke-club.html" class="back-link">{back_link}</a>
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
    <a href="../../index.html" style="color:var(--muted);text-decoration:none;">Home</a>
    <a href="../../practice/index.html" style="color:var(--muted);text-decoration:none;">Practice</a>
    <a href="../../games/index.html" style="color:var(--muted);text-decoration:none;">Games</a>
    <a href="../index.html" style="color:var(--muted);text-decoration:none;">Events</a>
  </div>
  <p>© 2026 COSYlanguages — All rights reserved</p>
</footer>
<script src="../../js/core/engine.js"></script>
<script src="../../js/core/ui.js"></script>
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
            <div style="width: 20%; background: #9B59B6;" title="Listening (20%)"></div>
            <div style="width: 45%; background: #2ECC71;" title="Discussion (45%)"></div>
            <div style="width: 5%; background: #F1C40F;" title="Language Focus (5%)"></div>
            <div style="width: 5%; background: #E74C3C;" title="Final Challenge (5%)"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--muted); flex-wrap: wrap; gap: 0.5rem;">
            <span>{loc["warmup_title"]} (10%)</span>
            <span>{loc["vocab_title"]} (15%)</span>
            <span>{loc["listening_title"]} (20%)</span>
            <span>{loc["discussion_title"]} (45%)</span>
            <span>{loc["lang_focus_title"]} (10%)</span>
            <span>{loc["final_challenge_title"]} (10%)</span>
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

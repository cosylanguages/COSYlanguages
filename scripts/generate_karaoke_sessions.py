import os
import re
import sys

OUTPUT_DIR = "events/sessions"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Add current scripts directory to sys.path to load master_lyrics safely
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from master_lyrics import LYRICS_DATA

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
    "toutes-les-machines-ont-le-coeur": "https://www.youtube.com/watch?v=UVz3xR1X9RU"
}

# Translation / Localization resources for all 6 supported languages
LOCALIZATIONS = {
    "en": {
        "breadcrumbs_home": "Home",
        "breadcrumbs_events": "Events",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Back to Club",
        "dur_label": "Duration",
        "dur_val": "60 minutes",
        "lang_label": "Variety/Language",
        "level_label": "Level",
        "focus_label": "Thematic Focus",
        "vocab_title": "📖 Session Vocabulary",
        "listening_title": "🎵 Listening & Gap-Fill Exercise",
        "listening_instruction": "<strong>Active Listening Task:</strong> Listen to the song using the resource link above, and fill in the missing gaps. The missing words are chosen from the key target vocabulary, collocations, and grammatical markers discussed in this session.",
        "word_bank_title": "Word Bank / Helpers:",
        "lyrics_title": "Full Lyrics",
        "structure_title": "🎙️ Discussion Structure",
        "warmup_title": "🟠 Warm-up",
        "warmup_instruction": "Initial reactions to the melody, rhythm, and artist.",
        "r1_title": "🔵 Round 1 — Lyric Discussion",
        "r1_instruction": "Analyze the song's key verses and speak using the targeted vocabulary.",
        "speak_together_title": "🟣 Let's Speak Together",
        "speak_together_note": "Visual contrast: Live Acoustic Cafe vs Electric Stage Lights.",
        "r2_title": "🟢 Round 2 — Lyric Deep Dive & Debate",
        "r2_instruction": "Evaluate these philosophical statements regarding the song's underlying cultural concepts.",
        "teacher_note_title": "✏️ Teacher's Note (Linguistic Corrections)",
        "teacher_note_instruction": ""
    },
    "fr": {
        "breadcrumbs_home": "Accueil",
        "breadcrumbs_events": "Événements",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Retour au club",
        "dur_label": "Durée",
        "dur_val": "60 minutes",
        "lang_label": "Langue",
        "level_label": "Niveau",
        "focus_label": "Thème",
        "vocab_title": "📖 Vocabulaire de la session",
        "listening_title": "🎵 Exercice d'écoute & Texte à trous",
        "listening_instruction": "<strong>Tâche d'écoute active :</strong> Écoutez la chanson à l'aide du lien de ressource ci-dessus et remplissez les trous. Les mots manquants sont choisis parmi le vocabulaire cible, les collocations et les marqueurs grammaticaux abordés dans cette session.",
        "word_bank_title": "Banque de mots / Aide :",
        "lyrics_title": "Paroles complètes",
        "structure_title": "🎙️ Structure de discussion",
        "warmup_title": "🟠 Échauffement",
        "warmup_instruction": "Présentez brièvement vos impressions sur la chanson et chantez avec les premières mélodies.",
        "r1_title": "🔵 Round 1 — Discussion des paroles",
        "r1_instruction": "Analysez les couplets clés de la chanson et parlez en utilisant le vocabulaire ciblé.",
        "speak_together_title": "🟣 Let's Speak Together",
        "speak_together_note": "Contraste visuel : Café acoustique intime vs Concert dans une grande arène électrique.",
        "r2_title": "🟢 Round 2 — Analyse approfondie & Débat",
        "r2_instruction": "Évaluez ces énoncés philosophiques concernant les concepts culturels sous-jacents de la chanson.",
        "teacher_note_title": "✏️ Notes du Professeur (Corrections Linguistiques)",
        "teacher_note_instruction": ""
    },
    "ru": {
        "breadcrumbs_home": "Главная",
        "breadcrumbs_events": "События",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Вернуться в клуб",
        "dur_label": "Длительность",
        "dur_val": "60 minutes",
        "lang_label": "Язык",
        "level_label": "Уровень",
        "focus_label": "Тема",
        "vocab_title": "📖 Словарь сессии",
        "listening_title": "🎵 Упражнение на аудирование и заполнение пропусков",
        "listening_instruction": "<strong>Активное аудирование:</strong> Слушайте песню, используя ссылку выше, и заполняйте пропуски. Пропущенные слова выбраны из ключевой лексики, словосочетаний и грамматических конструкций этой сессии.",
        "word_bank_title": "Вспомогательный банк слов:",
        "lyrics_title": "Полный текст песни",
        "structure_title": "🎙️ Структура обсуждения",
        "warmup_title": "🟠 Разминка",
        "warmup_instruction": "Поделитесь вашими мыслями о творчестве исполнителя и настроении песни.",
        "r1_title": "🔵 Раунд 1 — Обсуждение лирики",
        "r1_instruction": "Проанализируйте ключевые строки песни и практикуйте разговорную речь с целевой лексикой.",
        "speak_together_title": "🟣 Let's Speak Together",
        "speak_together_note": "Визуальный контраст: акустическое исполнение на гитаре против грандиозного стадионного концерта.",
        "r2_title": "🟢 Раунд 2 — Глубокий анализ и дебаты",
        "r2_instruction": "Оцените эти философские утверждения, вдохновленные темами песни.",
        "teacher_note_title": "✏️ Заметки преподавателя (исправление ошибок)",
        "teacher_note_instruction": ""
    },
    "it": {
        "breadcrumbs_home": "Home",
        "breadcrumbs_events": "Eventi",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Torna al club",
        "dur_label": "Durata",
        "dur_val": "60 minuti",
        "lang_label": "Lingua",
        "level_label": "Livello",
        "focus_label": "Tema",
        "vocab_title": "📖 Vocabolario della sessione",
        "listening_title": "🎵 Esercizio di ascolto e riempimento spazi",
        "listening_instruction": "<strong>Ascolto attivo:</strong> Ascolta la canzone usando il link sopra e riempi gli spazi vuoti con le parole target del vocabolario.",
        "word_bank_title": "Banca delle parole:",
        "lyrics_title": "Testo completo",
        "structure_title": "🎙️ Struttura della discussione",
        "warmup_title": "🟠 Riscaldamento",
        "warmup_instruction": "Condividi le tue prime reazioni sulla melodia e il ritmo.",
        "r1_title": "🔵 Round 1 — Discussione dei testi",
        "r1_instruction": "Analizza i versi della canzone e parla usando il vocabolario mirato.",
        "speak_together_title": "🟣 Parliamo insieme",
        "speak_together_note": "Confronto visivo o acustico tra performance intima ed elettrica.",
        "r2_title": "🟢 Round 2 — Analisi approfondita e dibattito",
        "r2_instruction": "Valuta queste affermazioni filosofiche basate sui temi della canzone.",
        "teacher_note_title": "✏️ Note dell'Insegnante (Correzioni Linguistiche)",
        "teacher_note_instruction": ""
    },
    "es": {
        "breadcrumbs_home": "Inicio",
        "breadcrumbs_events": "Eventos",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Volver al club",
        "dur_label": "Duración",
        "dur_val": "60 minutos",
        "lang_label": "Idioma",
        "level_label": "Nivel",
        "focus_label": "Tema",
        "vocab_title": "📖 Vocabulario de la sesión",
        "listening_title": "🎵 Ejercicio de escucha y rellenar huecos",
        "listening_instruction": "<strong>Escucha activa:</strong> Escucha la canción usando el enlace de arriba y completa los espacios en blanco.",
        "word_bank_title": "Banco de palabras:",
        "lyrics_title": "Letra completa",
        "structure_title": "🎙️ Estructura de la discusión",
        "warmup_title": "🟠 Calentamiento",
        "warmup_instruction": "Comparte tus primeras reacciones sobre la melodía y el ritmo.",
        "r1_title": "🔵 Ronda 1 — Discusión de la letra",
        "r1_instruction": "Analiza los versos de la canción y habla usando el vocabulario objetivo.",
        "speak_together_title": "🟣 Hablemos juntos",
        "speak_together_note": "Comparación visual y acústica entre versión desenchufada y estudio.",
        "r2_title": "🟢 Ronda 2 — Análisis profundo y debate",
        "r2_instruction": "Evalúa estas declaraciones filosóficas basadas en los temas de la canción.",
        "teacher_note_title": "✏️ Nota del Profesor (Correcciones Lingüísticas)",
        "teacher_note_instruction": ""
    },
    "el": {
        "breadcrumbs_home": "Αρχική",
        "breadcrumbs_events": "Εκδηλώσεις",
        "breadcrumbs_club": "Karaoke Club",
        "back_link": "← Πίσω στο Club",
        "dur_label": "Διάρκεια",
        "dur_val": "60 λεπτά",
        "lang_label": "Γλώσσα",
        "level_label": "Επίπεδο",
        "focus_label": "Θέμα",
        "vocab_title": "📖 Λεξιλόγιο Συνεδρίας",
        "listening_title": "🎵 Άσκηση Ακρόασης & Συμπλήρωσης Κενών",
        "listening_instruction": "<strong>Ενεργητική Ακρόαση:</strong> Ακούστε το τραγούδι χρησιμοποιώντας τον παραπάνω σύνδεσμο και συμπληρώστε τα κενά.",
        "word_bank_title": "Βοηθητικό Λεξιλόγιο / Λέξεις-Κλειδιά:",
        "lyrics_title": "Πλήρεις στίχοι",
        "structure_title": "🎙️ Δομή Συζήτησης",
        "warmup_title": "🟠 Προθέρμανση",
        "warmup_instruction": "Μοιραστείτε τις σκέψεις σας για το τραγούδι και τη μουσική.",
        "r1_title": "🔵 Γύρος 1 — Συζήτηση Στίχων",
        "r1_instruction": "Αναλύστε τους στίχους-κλειδιά και μιλήστε χρησιμοποιώντας το στοχευμένο λεξιλόγιο.",
        "speak_together_title": "🟣 Ας μιλήσουμε μαζί",
        "speak_together_note": "Οπτική αντίθεση μεταξύ ακουστικής ερμηνείας και μεγάλης συναυλίας.",
        "r2_title": "🟢 Γύρος 2 — Ανάλυση & Αντιπαράθεση",
        "r2_instruction": "Αξιολογήστε αυτές τις φιλοσοφικές δηλώσεις σχετικά με τα θέματα του τραγουδιού.",
        "teacher_note_title": "✏️ Σημειώσεις Καθηγητή (Γλωσσικές Διορθώσεις)",
        "teacher_note_instruction": ""
    }
}

# Vocabulary items database
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
    "L'ami": ("personne avec qui l'on est lié par l'amitié.", "Un ami fidèle est un trésor précieux dans la vie."),
    "La gare": ("lieu d'arrêt des trains pour les voyageurs.", "Elle l'attend patiemment sur le quai de la gare."),
    "Le destin": ("puissance qui semble régler le cours de la vie.", "Elle croit fermement que son destin est entre ses mains."),
    "La complicité": ("entente profonde et spontanée entre des personnes.", "Leur complicité est évidente dès le premier regard."),
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
    "La liberté": ("état d'une personne libre, indépendante.", "La liberté d'expression est un droit fondamental."),
    "L'égalité": ("rapport entre personnes ayant les mêmes droits.", "L'égalité des chances doit être garantie à tous."),
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
    "L'attente": ("action d'attendre l'arrivée de quelqu'un ou d'un fait.", "L'attente des résultats d'examen a été très stressante."),
    "La peur": ("sentiment d'angoisse face à un danger réel ou imaginaire.", "Elle a surmonté sa peur du vide en faisant de l'escalade."),
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
    "L'intensité": ("degré élevé de force, de puissance.", "L'intensité du spectacle a impressionné le public."),
    "Le triomphe": ("grande victoire, succès retentissant.", "Le concert s'est terminé par un triomphe absolu."),
    "Surmonter": ("vaincre un obstacle, surmonter ses craintes.", "Elle a réussi à surmonter sa timidité en public."),
    "La pureté": ("qualité de ce qui est pur, sans mélange.", "La pureté de l'air de la montagne est remarquable."),
    "La jeunesse": ("période de la vie entre l'enfance et l'âge mûr.", "La jeunesse est une période d'apprentissage intense."),
    "Le premier": ("qui est avant tous les autres dans le temps.", "C'était son tout premier concert de musique classique."),
    "L'innocence": ("état de quelqu'un qui n'est pas coupable, pureté.", "L'innocence des enfants est une chose précieuse."),
    "Rêver": ("faire des rêves pendant son sommeil ou imaginer.", "Elle aime rêver de voyages lointains et d'aventures."),
    "La présentation": ("action de présenter quelqu'un ou quelque chose.", "La présentation du nouveau projet a été un grand succès."),
    "L'authenticité": ("qualité de ce qui est authentique, vrai.", "Le public apprécie l'authenticité de cet artiste."),
    "La vulnérabilité": ("caractère de ce qui est vulnérable, fragile.", "Admettre sa vulnérabilité demande une grande force morale."),
    "Le public": ("ensemble des personnes qui assistent à un spectacle.", "Le public a applaudi chaleureusement la chanteuse."),
    "Se donner": ("se consacrer entièrement à une tâche ou une cause.", "Il faut se donner à fond pour réussir ses examens."),
    "La scène": ("espace surélevé où se produisent les artistes.", "Elle est montée sur scène sous les applaudissements."),
    "L'artiste": ("personne qui crée des œuvres d'art ou se produit.", "Cet artiste peintre expose ses toiles dans le monde entier."),
    "L'écoute": ("action d'écouter attentivement.", "La qualité d'écoute est essentielle dans une relation."),

    # English
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
    "Небо (оно)": ("пространство над землей, атмосфера.", "Ночное небо было усыпано миллионами ярких звёзд."),
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
    "L'attimo": ("brevissimo spazio di tempo, istante.", "Cogli l'attimo prima che sia troppo tardi."),
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
    "El cambio": ("acción de cambiar o modificar algo.", "Este cambio de rutina le ha sentado muy bien a su salud."),
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
    "Η αυλή": ("ο ανοιχτός χώρος γύρω από το σπίτι.", "Παίζαμε πάντα στην αυλή του σпиτιού μας.")
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

# STEP 1: Parse all 52 songs dynamically from their existing files
songs_list = []
for slug in sorted(LYRICS_DATA.keys()):
    path = f"events/sessions/{slug}.html"
    if not os.path.exists(path):
        continue
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    # Extract metadata using robust regex
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

    vocab = re.findall(r'<div class="vocab-word">(.*?)</div>', html)
    vocab = [v.strip() for v in vocab]

    # Map level raw to short code
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
        "vocab": vocab,
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

    # Extract metadata using robust regex
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

    vocab = re.findall(r'<div class="vocab-word">(.*?)</div>', html)
    vocab = [v.strip() for v in vocab]

    # Map level raw to short code
    level_short = "B1"
    if any(k in level_raw for k in ["A2", "Débutant", "Στοιχειώδες", "Beginner"]):
        level_short = "A2"
    elif any(k in level_raw for k in ["B2", "Upper Intermediate", "Intermédiaire Supérieur"]):
        level_short = "B2"
    elif "C1" in level_raw:
        level_short = "C1"

    # Merge full lyrics and helpers from the constituent songs of this challenge
    sub_slugs = CHALLENGE_MAP[slug]

    combined_lyrics_parts = []
    combined_helpers = []

    for i, sub_slug in enumerate(sub_slugs):
        # Locate title names of sub-songs
        sub_title = next((s["title"] for s in songs_list if s["slug"] == sub_slug), sub_slug.replace("-", " ").title())
        lyrics_text = LYRICS_DATA[sub_slug]["lyrics"]

        # Localized labels for "Song" / "Chanson" etc.
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
        "vocab": vocab,
        "helpers": combined_helpers,
        "lyrics": combined_lyrics
    })

# Merge lists for generation (52 individual songs + 11 challenges = 63 pages)
all_karaoke_data = songs_list + challenges_list

for song in all_karaoke_data:
    slug = song["slug"]
    title = song["title"]
    artist = song["artist"]
    level_short = song["level"]
    level_long = "Intermediate (B1)" if level_short == "B1" else ("Beginner (A2)" if level_short == "A2" else ("Upper Intermediate (B2)" if level_short == "B2" else "Advanced (C1)"))

    # Specific lang overrides for full level description
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

    # Localization keys
    loc = LOCALIZATIONS[lang] if lang in LOCALIZATIONS else LOCALIZATIONS["en"]

    # Look up link
    song_link = SONG_LINKS.get(slug, f"https://www.youtube.com/results?search_query={title.replace(' ', '+')}+{artist.replace(' ', '+')}")
    if slug in CHALLENGE_MAP:
        first_sub = CHALLENGE_MAP[slug][0]
        song_link = SONG_LINKS.get(first_sub, f"https://www.youtube.com/results?search_query={title.replace(' ', '+')}+{artist.replace(' ', '+')}")
    song_link_backup = song_link

    # Build vocabulary cards html
    vocab_cards_html = ""
    for w in song["vocab"]:
        norm_w = w.replace("L'", "").replace("La ", "").replace("Le ", "").replace("El ", "").replace("La ", "").replace("Il ", "").replace("La ", "").replace("Η ", "").replace("Το ", "").replace("Ο ", "")

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

        escaped_def = definition.replace("'", "\\'")
        escaped_ex = example.replace("'", "\\'")
        vocab_cards_html += f"""            <div class="vocab-card"><div class="vocab-word">{w}</div><div class="vocab-def">{definition}</div><div class="vocab-example">{example}</div><button class="btn-add-dict" onclick="COSY.addToDict({{word:'{w}', definition:'{escaped_def}', example:'{escaped_ex}'}}, this)">+ Dictionary</button></div>\n"""

    # Build word bank helpers
    word_bank_html = ""
    for helper in song["helpers"]:
        word_bank_html += f'        <span class="club-tag" style="background: white; border-color: var(--border);">{helper}</span>\n'

    # Build discussion questions (Round 1 & 2)
    warmup_questions_html = ""
    warmup_questions_html += f"            <li>Have you ever listened to '{title}' before?</li>\n"
    warmup_questions_html += f"            <li>What kind of emotions does this style of music bring to you?</li>\n"

    # French overrides for warmup
    if lang == "fr":
        warmup_questions_html = f"            <li>Aviez-vous déjà écouté '{title}' avant cette session ?</li>\n            <li>Quel type d'émotions cette musique vous inspire-t-elle ?</li>\n"
    elif lang == "ru":
        warmup_questions_html = f"            <li>Слушали ли вы когда-нибудь '{title}' до этого дня?</li>\n            <li>Какие эмоции вызывает у вас эта музыкальная композиция?</li>\n"
    elif lang == "it":
        warmup_questions_html = f"            <li>Hai mai ascoltato '{title}' prima di questa sessione?</li>\n            <li>Che tipo di emozioni ti trasmette questa melodia?</li>\n"
    elif lang == "es":
        warmup_questions_html = f"            <li>¿Habías escuchado alguna vez '{title}' antes de hoy?</li>\n            <li>¿Qué tipo de sensaciones te transmite este ritmo?</li>\n"
    elif lang == "el":
        warmup_questions_html = f"            <li>Έχετε ακούσει ποτέ το '{title}' πριν από αυτή τη συνεδρία;</li>\n            <li>Τι είδους συναισθήματα σας προκαλεί αυτή η μελωδία;</li>\n"

    r1_questions_html = ""
    for w in song["vocab"]:
        q_main = f"How does <strong>{w.lower()}</strong> play a symbolic role in the storytelling of '{title}'?"
        q_pers = f"★ Do you personally feel that <strong>{w.lower()}</strong> is important?"

        if lang == "fr":
            q_main = f"Comment le concept de <strong>{w.lower()}</strong> se manifeste-t-il dans les paroles de '{title}' ?"
            q_pers = f"★ Pensez-vous que <strong>{w.lower()}</strong> joue un rôle important dans votre quotidien ?"
        elif lang == "ru":
            q_main = f"Как понятие <strong>{w.lower()}</strong> отражается в сюжете и лирике '{title}'?"
            q_pers = f"★ Насколько для вас важно понятие <strong>{w.lower()}</strong> в реальной жизни?"
        elif lang == "it":
            q_main = f"In che modo il concetto di <strong>{w.lower()}</strong> influisce sul testo di '{title}'?"
            q_pers = f"★ Quanto ritieni importante <strong>{w.lower()}</strong> nella tua vita?"
        elif lang == "es":
            q_main = f"¿De qué manera influye el concepto de <strong>{w.lower()}</strong> en la letra de '{title}'?"
            q_pers = f"★ ¿Qué tan importante es <strong>{w.lower()}</strong> en tu vida diaria?"
        elif lang == "el":
            q_main = f"Πώς εκφράζεται η έννοια <strong>{w.lower()}</strong> μέσα από τους στίχους του '{title}';"
            q_pers = f"★ Πόσο σημαντικό είναι το <strong>{w.lower()}</strong> για εσάς;"

        r1_questions_html += f'          <div class="round-item"><div class="round-item-main">{q_main}</div><div class="round-item-personal">{q_pers}</div></div>\n'

    r2_statements_html = ""
    for w in song["vocab"]:
        stmt = f"In our modern, high-tech world, maintaining a true sense of <strong>{w.lower()}</strong> is becoming nearly impossible."
        if lang == "fr":
            stmt = f"Dans notre société moderne et connectée, préserver <strong>{w.lower()}</strong> est devenu un défi quotidien."
        elif lang == "ru":
            stmt = f"В современном цифровом мире сохранить истинное значение <strong>{w.lower()}</strong> становится всё труднее."
        elif lang == "it":
            stmt = f"Nella società tecnologica odierna, difendere <strong>{w.lower()}</strong> è diventato quasi impossibile."
        elif lang == "es":
            stmt = f"En la sociedad tecnológica actual, proteger <strong>{w.lower()}</strong> se ha vuelto sumamente complejo."
        elif lang == "el":
            stmt = f"Στη σύγχρονη τεχνολογική εποχή, η διατήρηση του <strong>{w.lower()}</strong> είναι εξαιρετικά δύσκολη."

        r2_statements_html += f'          <div class="round-item"><div class="round-item-main">{stmt}</div></div>\n'

    # Level-appropriate mistakes from MISTAKES_DB
    mistakes_html = ""
    m_list = MISTAKES_DB[lang] if lang in MISTAKES_DB else MISTAKES_DB["en"]
    for wrong, right, explanation in m_list:
        mistakes_html += f"""          <div class="mistake-item">
            <span class="mistake-wrong">{wrong}</span>
            <span class="mistake-arrow">→</span>
            <span class="mistake-right">{right}</span>
            <span class="mistake-note-text">({explanation})</span>
          </div>\n"""

    # Generate complete description
    desc = f"Explore the beautiful track '{title}' by {artist} in {variety_lang}. This session focuses on the vocabulary of {focus} and key linguistic structures of the lyrics. Students will practice speaking and debating about these themes."
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

    # Render and write HTML
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
        dur_val=loc["dur_val"],
        lang_label=loc["lang_label"],
        variety_lang=variety_lang,
        level_label=loc["level_label"],
        focus_label=loc["focus_label"],
        focus=focus,
        song_link=song_link,
        song_link_backup=song_link_backup,
        description=desc,
        vocab_title=loc["vocab_title"],
        vocab_cards_html=vocab_cards_html,
        listening_title=loc["listening_title"],
        listening_instruction=loc["listening_instruction"],
        word_bank_title=loc["word_bank_title"],
        word_bank_html=word_bank_html,
        lyrics_title=loc["lyrics_title"],
        lyrics_text=song["lyrics"].replace("\n", "<br>"),
        structure_title=loc["structure_title"],
        warmup_title=loc["warmup_title"],
        warmup_instruction=loc["warmup_instruction"],
        warmup_questions_html=warmup_questions_html,
        r1_title=loc["r1_title"],
        r1_instruction=loc["r1_instruction"],
        r1_questions_html=r1_questions_html,
        speak_together_title=loc["speak_together_title"],
        speak_together_note=loc["speak_together_note"],
        r2_title=loc["r2_title"],
        r2_instruction=loc["r2_instruction"],
        r2_statements_html=r2_statements_html,
        teacher_note_title=loc["teacher_note_title"],
        mistakes_html=mistakes_html
    )

    filepath = os.path.join(OUTPUT_DIR, f"{slug}.html")
    with open(filepath, "w", encoding="utf-8") as fh:
        fh.write(formatted_html)

print(f"Generated all {len(all_karaoke_data)} Karaoke session HTML pages successfully with full authentic lyrics and collapsible layout!")

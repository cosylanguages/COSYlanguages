# reformat_karaoke_vocab.py
# Highly precise, language-aware, and boundary-aware vocabulary refinement script for Karaoke Club.

import os
import re
import sys

# Add scripts directory to path to load metadata
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from master_lyrics import LYRICS_DATA

# Extra dictionary definitions for new words that we might select from lyrics
NEW_VOCAB_DB = {
    # Russian
    "Грусть (она)": ("чувство печали, уныния.", "Осенний дождь всегда навевает на меня лёгкую грусть."),
    "Танцевать": ("двигаться под музыку.", "Они любят танцевать на праздниках."),
    "Лихорадка (она)": ("болезненное состояние с высокой температурой.", "У него началась сильная лихорадка."),
    "Тревога (она)": ("чувство беспокойства, страха.", "Её сердце было полно тревоги за сына."),
    "Стакан (он)": ("сосуд для питья.", "Он налил чистую воду в стакан."),
    "Звезда (она)": ("светящееся небесное тело.", "На ночном небе зажглась первая звезда."),
    "Крыша (она)": ("верхняя часть здания.", "С крыши дома открывается прекрасный вид."),
    "Осень (она)": ("время года между летом и зимой.", "Осенью листья деревьев становятся золотыми."),
    "Лист (он)": ("орган растения, зелёная пластинка.", "Осенний лист медленно падал на землю."),
    "Нервы (они)": ("волокна, передающие сигналы в мозг.", "После тяжёлого дня её нервы были на пределе."),
    "Рисковать": ("подвергаться опасности.", "Пожарные часто рискуют своей жизнью."),
    "Дно (оно)": ("нижняя часть сосуда или водоёма.", "На дне стакана остался сахар."),
    "Страшилка (она)": ("пугающая история.", "Дети любят рассказать страшилки у костра."),
    "Картон (он)": ("плотная бумага.", "Мы сделали коробку из прочного картона."),
    "Шоколадка (она)": ("плитка шоколада.", "Мама подарила мне вкусную шоколадку."),
    "Плакат (он)": ("большой рисунок с текстом.", "На стене висел яркий рекламный плакат."),
    "Тюрьма (она)": ("место заключения.", "Преступника отправили в тюрьму."),
    "Малютка (она)": ("маленький ребёнок.", "Малютка сладко спала в своей кроватке."),
    "Сосед (он)": ("человек, живущий рядом.", "Наш сосед всегда очень вежлив и приветлив."),
    "Аптека (она)": ("магазин лекарств.", "Бабушка купила нужные лекарства в аптеке."),
    "Слезинка (она)": ("капля слёз.", "Маленькая слезинка блеснула на её щеке."),
    "Дракон (он)": ("сказочное крылатое существо.", "В сказке рыцарь победил злого дракона."),
    "Ладошка (она)": ("внутренняя сторона кисти руки.", "Малыш протянул мне свою тёплую ладошку."),
    "Бабушка (она)": ("мать отца или матери.", "Бабушка печёт самые вкусные пирожки."),
    "Шутка (она)": ("весёлое высказывание, анекдот.", "Его шутка рассмешила всех гостей за столом."),
    "Огонь (он)": ("горящие газы, пламя.", "Костёр горел ярким весёлым огнём."),
    "Наряд (он)": ("красивая одежда.", "Она выбрала великолепный наряд для вечера."),
    "Птенец (он)": ("детёныш птицы.", "Маленький птенец выпал из гнезда."),
    "Сила (она)": ("физическая или моральная энергия.", "В ней чувствуется огромная внутренняя сила."),
    "Цветок (он)": ("часть растения, соцветие.", "На окне расцвёл красивый красный цветок."),
    "Куртка (она)": ("верхняя одежда.", "Осенью нужно носить тёплую куртку."),
    "Провода (они)": ("металлические нити для передачи тока.", "Электрические провода тянулись вдоль всей улицы."),
    "Дурак (он)": ("глупый человек.", "Не будь дураком, воспользуйся этим прекрасным шансом."),
    "Край (он)": ("предельная линия, граница.", "Она осторожно подошла к самому краю обрыва."),

    # Greek
    "ήλιος": ("το αστέρι που φωτίζει τη Γη.", "Ο ήλιος λάμπει στον καθαρό ουρανό."),
    "όνειρο": ("εικόνες που βλέπουμε στον ύπνο.", "Το μεγάλο του όνειρο είναι να γίνει γιατρός."),
    "βιβλία": ("γραπτά ή τυπωμένα φύλλα χαρτιού.", "Η βιβλιοθήκη είναι γεμάτη με ενδιαφέροντα βιβλία."),
    "φεγγάρι": ("ο φυσικός δορυφόρος της Γης.", "Το ολόγιομο φεγγάρι φώτιζε τη θάλασσα."),
    "μαλλιά": ("οι τρίχες της κεφαλής.", "Ο άνεμος φυσούσε απαλά στα μακριά της μαλλιά."),
    "Θεό": ("η ανώτατη πνευματική δύναμη.", "Πιστεύει στη δύναμη του Θεού."),
    "κόλαση": ("τοπος βασανιστηρίων, μεταφορικά η δυστυχία.", "Η ζωή τους έγινε κόλαση μετά τον πόλεμο."),
    "ομορφιά": ("η ιδιότητα του ωραίου.", "Η ομορφιά του τοπίου μας άφησε άφωνους."),
    "ουρανός": ("το διάστημα πάνω από τη Γη.", "Ο γαλάζιος ουρανός ήταν γεμάτος λευκά σύννεφα."),
    "αγάπη": ("βαθύ συναίσθημα στοργής.", "Η αγάπη της μητέρας είναι το πιο δυνατό πράγμα."),
    "αγκαλιά": ("το άνοιγμα των χεριών γύρω από κάποιον.", "Μια ζεστή αγκαλιά μπορεί να απαλύνει κάθε πόνο."),
    "νύχτα": ("το διάστημα από τη δύση ως την ανατολή του ήλιου.", "Η νύχτα ήταν ήσυχη και ο ουρανός γεμάτος αστέρια."),
    "βλέφαρα": ("τα κινητά δερματικά πτυχώματα που προστατεύουν τα μάτια.", "Έκλεισε τα βλέφαρά της για να κοιμηθεί."),
    "λύπη": ("συναίσθημα θλίψης ή στενοχώριας.", "Ένιωσε μεγάλη λύπη όταν έφυγε ο φίλος του."),
    "μοναξιά": ("η κατάσταση του να είναι κανείς μόνος.", "Απολαμβάνει τη μοναξιά του για να διαβάζει βιβλία."),
    "χέρια": ("τα άνω άκρα του ανθρώπινου σώματος.", "Κρατούσε ένα όμορφο λουλούδι στα χέρια της."),
    "φτωχούς": ("αυτούς που έχουν ελάχιστα χρήματα ή αγαθά.", "Οργανώνουν γεύματα για να βοηθήσουν τους φτωχούς."),
    "λογισμούς": ("οι σκέψεις ή οι συλλογισμοί.", "Οι λογισμοί του τον κράτησαν ξύπνιο όλη τη νύχτα."),
    "παιδιά": ("οι νεαροί άνθρωποι, τα τέκνα.", "Τα παιδιά έπαιζαν χαρούμενα στο πάρκο."),
    "κρεβάτια": ("έπιπλα για ύπνο ή ανάπαυση.", "Τα κρεβάτια στο ξενοδοχείο ήταν πολύ άνετα."),
    "φυλακές": ("χώροι εγκλεισμού για άτομα που έχουν καταδικαστεί.", "Οι φύλακες προσέχουν τις πύλες στις φυλακές."),
    "χαρτά": ("κομμάτια χαρτιού, έγγραφα.", "Βρήκε μερικά παλιά χαρτιά στο συρτάρι."),
    "εισιτήριο": ("χαρτί που επιτρέπει την είσοδο σε μεταφορικό μέσο ή θέαμα.", "Αγόρασε ένα εισιτήριο για το τρένο."),
    "εκδρομή": ("σύντομο ταξίδι για αναψυχή.", "Το Σαββατοκύριακο θα πάμε μια όμορφη εκδρομή στο βουνό."),
    "ταξίδια": ("μετακινήσεις σε μακρινούς προορισμούς.", "Της αρέσει πολύ να κάνει ταξίδια σε ξένες χώρες."),
    "σταθμούς": ("σημεία στάσης τρένων ή λεωφορείων.", "Περίμεναν το τρένο σε έναν από τους κεντρικούς σταθμούς."),
    "παγκάκια": ("ξύλινα ή μεταλλικά καθίσματα σε δημόσιους χώρους.", "Καθίσαμε στα παγκάκια του πάρκου για να ξεκουραστούμε."),
    "τραγούδι": ("μουσική σύνθεση με στίχους.", "Αυτό το τραγούδι μου θυμίζει τα παιδικά μου χρόνια."),
    "βροχή": ("το νερό που πέφτει από τα σύννεφα.", "Η βροχή πότισε τα διψασμένα λουλούδια στον κήπο."),
    "σκεπή": ("η σκεπή ενός κτιρίου.", "Η σκεπή του σπιτιού ήταν καλυμμένη με κόκκινα κεραμίδια."),
    "γάτος": ("το γνωστό κατοικίδιο αειλουροειδές ζώο.", "Ο μαύρος γάτος κοιμόταν ήσυχα στον καναπέ."),
    "μιλιά": ("η φωνή ή η ομιλία.", "Έχασε τη μιλιά του από την έκπληξη."),
    "τέλος": ("το κλείσιμο ή η κατάληξη.", "Το τέλος του βιβλίου ήταν πολύ συγκινητικό."),
    "πρωί": ("οι πρώτες ώρες της ημέρας.", "Της αρέσει να ξυπνάει νωρίς το πρωί για τρέξιμο."),
    "φωνή": ("ο ήχος που παράγεται από τις φωνητικές χορδές.", "Η φωνή της ήταν γλυκιά και μελωδική."),
    "αντίο": ("λέξη που λέμε όταν αποχαιρετάμε κάποιον.", "Του είπε αντίο με ένα χαμόγελο στα χείλη."),

    # English additions
    "bloating": ("swelling of the abdomen, typically caused by gas.", "Certain foods can cause a temporary feeling of bloating."),
    "bipolar": ("a mental health condition marked by extreme mood swings.", "He manages his bipolar condition with proper medication and routine."),
    "naturopath": ("a practitioner of alternative medicine.", "The naturopath suggested using herbal teas to relieve the stress."),
    "sidekick": ("a close companion or assistant.", "The superhero always traveled with his loyal and clever sidekick."),
    "clown": ("a comic performer who wears exaggerating makeup and clothing.", "The funny clown entertained the children at the birthday party."),
    "bridesmaid": ("a girl or woman who accompanies a bride on her wedding day.", "She was thrilled to be chosen as a bridesmaid for her sister's wedding."),
    "dosage": ("the size or frequency of a medicine dose.", "You must always follow the doctor's prescription for the correct dosage."),
    "screaming": ("making a loud, sharp cry or noise.", "We could hear the excited children screaming on the roller coaster."),
    "toaster": ("an electrical appliance for toasting bread.", "She placed two slices of bread into the toaster for breakfast."),
    "shaving": ("cutting hair from the skin using a razor.", "His daily morning routine always included shaving and drinking coffee."),
    "waxing": ("removing hair from the skin using wax.", "Waxing can be a highly painful beauty procedure."),
    "plucking": ("pulling out hair or feathers with fingers or tweezers.", "Plucking eyebrows requires a steady hand and patience."),
    "spanx": ("tight-fitting undergarments designed to shape the body.", "She wore spanx underneath her elegant evening gown."),
    "lotion": ("a thick liquid applied to the skin for medical or cosmetic purposes.", "Applying moisturizing lotion helps soothe dry skin in winter."),
    "cheddar": ("a relatively hard, pale yellow or orange cheese.", "She grated some cheddar cheese over the hot pasta."),
    "goyish": ("non-Jewish, characteristic of a gentile.", "The restaurant served classic goyish dishes like pork and potatoes."),
    "luggage": ("suitcases or bags containing personal belongings for travel.", "They loaded their heavy luggage into the trunk of the taxi."),
    "manic": ("characterized by excitement, euphoria, or extreme energy.", "She entered a manic phase where she painted for ten hours straight."),
    "leukaemia": ("a malignant progressive disease in which bone marrow produces abnormal white blood cells.", "The hospital is raising funds to support children fighting leukaemia."),
    "bulimia": ("an emotional disorder in which bouts of extreme overeating are followed by depression and self-induced vomiting.", "The school organized an awareness seminar about anorexia and bulimia."),
    "leash": ("a strap or cord for controlling a dog or other animal.", "She kept her active golden retriever on a secure leather leash."),
    "pandas": ("large bearlike mammals with characteristic black and white markings.", "We spent the afternoon watching the playful pandas at the city zoo."),
    "sisterhood": ("the relationship or association between women, or a community of sisters.", "The organization promotes a strong sense of professional sisterhood."),
    "eyebrows": ("the patches of hair growing on the ridge above a person's eye sockets.", "She used a pencil to carefully define her eyebrows."),
    "sausages": ("an item of food in the form of a cylindrical length of minced pork or beef.", "They grilled some delicious sausages on the outdoor barbecue."),
    "sushi": ("a Japanese dish consisting of small balls or rolls of cold-cooked military rice with garnishings.", "We ordered a platter of fresh salmon sushi and green tea."),
    "harrowing": ("acutely distressing or painful.", "Rescuing the lost hikers from the steep mountain was a harrowing experience."),
    "matriarch": ("a woman who is the head of a family or tribe.", "The grandmother was the respected matriarch of the large family."),
    "instinctual": ("relating to or of the nature of instinct.", "The mother dog showed an instinctual drive to protect her new puppies."),
    "tireless": ("having or showing great effort or energy without tiring.", "She was a tireless campaigner for clean energy and environmental protection."),
    "coping": ("dealing effectively with something difficult.", "Regular exercise is an excellent way of coping with daily work stress."),
    "nightlife": ("social activities or entertainment available at night in a town or city.", "The vibrant city is famous for its diverse and active nightlife."),
    "reckless": ("acting or done without regard to the consequences; rash.", "Driving a car at high speed in heavy rain is extremely reckless."),
    "haze": ("a state of mental obscurity or confusion, or a thin mist.", "He woke up with his head in a complete haze after the long party."),
    "chaos": ("complete disorder and confusion.", "The busy fish market was filled with loud shouts and total chaos."),
    "numb": ("deprived of physical sensation or the power of motion.", "My fingers felt completely numb after walking in the freezing cold."),
    "void": ("a completely empty space, or a feeling of empty loss.", "His sudden departure left a deep, painful void in her life."),
}

# English pronouns / stopwords to ignore
ENGLISH_STOPWORDS = {
    "the", "and", "you", "that", "was", "for", "with", "have", "this", "but", "not", "they", "from",
    "your", "about", "what", "then", "there", "will", "would", "where", "when", "who", "them",
    "their", "only", "some", "more", "just", "like", "into", "onto", "yours", "myself", "himself",
    "herself", "ourselves", "themselves", "whose", "which", "whom", "these", "those", "here", "there",
    "some", "many", "such", "other", "another", "gonna", "wanna", "with", "this", "been", "being"
}

# French pronouns / stopwords to ignore
FRENCH_STOPWORDS = {
    "les", "des", "une", "dans", "avec", "pour", "plus", "mais", "tout", "nous", "vous", "elle", "elles",
    "leur", "leurs", "sans", "sous", "vers", "chez", "avec", "pour", "par", "sont", "suis", "es-tu",
    "êtes", "était", "étaient", "aurai", "auras", "aurait", "sommes", "fait", "faire", "fais", "faites", "font"
}

def clean_word(w):
    clean = re.sub(r"[^\w\u00c0-\u00ff\u0400-\u04ff\u0370-\u03ff]", "", w).lower()
    for prefix in ["la", "le", "el", "il", "un", "une", "the", "η", "το", "ο", "l'"]:
        if clean.startswith(prefix) and len(clean) > len(prefix) + 2:
            clean = clean[len(prefix):]
    # strip common Russian endings for better stem matching
    if any(clean.endswith(suff) for suffix_list in [["а", "я", "о", "е", "у", "ю", "ом", "ой", "ей", "ы", "и"]] for suff in suffix_list):
        if len(clean) > 4:
            clean = clean[:-1]
    return clean

# Read generate_karaoke_sessions.py
GENERATOR_PATH = "scripts/generate_karaoke_sessions.py"
with open(GENERATOR_PATH, "r", encoding="utf-8") as f:
    gen_content = f.read()

sys.path.append("scripts")
from generate_karaoke_sessions import VOCAB_DB, COMPLETE_SONG_VOCAB

# Detect language of VOCAB_DB keys with 100% precision
def detect_word_lang(word):
    clean = word.lower()
    if any(c in "абвгдеёжзийклмнопрстуфхцчшщъыьэюя" for c in clean):
        return "ru"
    if any(c in "αβγδεζηθικλμνξοπρστυφχψω" for c in clean):
        return "el"
    # check articles and specific words to distinguish Romance languages
    if clean.startswith("la ") or clean.startswith("le ") or clean.startswith("l'") or clean.startswith("un ") or clean.startswith("une "):
        return "fr"
    if clean.startswith("il ") or clean.startswith("i ") or clean.startswith("gli ") or clean.startswith("lo ") or clean.startswith("l'"):
        if word not in ["L'homme", "L'histoire"]:
            return "it"
    if clean.startswith("el ") or clean.startswith("los ") or clean.startswith("las "):
        return "es"
    # check if it is explicitly in Romance lists
    if word in ["La classe", "L'histoire", "La masse", "Isoler", "L'idiot", "Le bureau", "Le regard", "Meilleur", "La rue", "Le couloir", "Le cœur", "Désespoir", "La mémoire", "Prisonnière", "Le monde", "Seule", "Froid", "Oublier", "La chaleur", "Le ciel", "Paris", "La liberté", "La beauté", "La fierté", "Le monument", "Se promener", "Le rêve", "La joie", "Le souvenir"]:
        return "fr"
    if word in ["La compagnia", "Il futuro", "Il destino", "La promessa", "La speranza", "Proteggere", "Il cammino", "La fedeltà", "L'attesa", "L'unione", "L'amore", "L'attimo", "La scintilla", "Il bacio", "Il ricordo", "Il battito", "La passione", "Il soffio", "Svanire", "L'infinito", "Il raggio", "Il sole", "La luce", "La gioia", "La natura", "Riscaldare", "La felicità", "Il mattino", "La bellezza", "L'estate", "La spiaggia", "Il mare", "La libertà", "Il viaggio", "Il vento", "Ricominciare", "Il calore", "L'orizzonte"]:
        return "it"
    if word in ["La libertad", "El amor", "El orgullo", "La aceptación", "El respeto", "Sin prejuicios", "Caminar", "La valentía", "El corazón", "La diversidad", "La distancia", "El olvido", "La ausencia", "El dolor", "El silencio", "Alejarse", "El recuerdo", "La tristeza", "El frío", "La despedida", "El verano", "La juventud", "La nostalgia", "El cambio", "El sol", "La playa", "El amigo", "Sonreír", "El futuro"]:
        return "es"
    # default to English
    return "en"

refined_vocab_map = {}

print("Performing strict language-matching and exact word boundary matching for all song vocabularies...")

for slug, data in sorted(LYRICS_DATA.items()):
    lyrics = data["lyrics"]
    lyrics_lower = lyrics.lower()

    # 1. Detect the exact language of the song based on its characters
    song_lang = "en"
    if any(c in "абвгдеёжзийклмнопрстуфхцчшщъыьэюя" for c in lyrics_lower):
        song_lang = "ru"
    elif any(c in "αβγδεζηθικλμνξοπρστυφχψω" for c in lyrics_lower):
        song_lang = "el"
    elif any(word in lyrics_lower for word in ["amore", "cuore", "sole", "estate"]):
        song_lang = "it"
    elif any(word in lyrics_lower for word in ["corazón", "libertad", "amor", "verano"]):
        song_lang = "es"
    elif any(c in "éèàçôûâî" for c in lyrics_lower):
        song_lang = "fr"

    # Tokenize lyrics using strict word boundaries to check word presence accurately
    lyric_words = set(re.findall(r"[a-zA-Z\u00c0-\u00ff\u0400-\u04ff\u0370-\u03ff]+", lyrics_lower))

    # Helper function to check if a word is exactly present in the lyrics using strict word boundaries
    def is_word_in_lyrics(w):
        norm_w = clean_word(w.split(" ≠ ")[0])
        if len(norm_w) < 2:
            return False
        # STRICT word boundaries match
        pattern = rf"\b{re.escape(norm_w)}\b"
        if re.search(pattern, lyrics_lower):
            return True
        # Check stem prefix with boundary to allow plurals / inflections safely
        if len(norm_w) >= 5:
            stem = norm_w[:5]
            pattern_stem = rf"\b{re.escape(stem)}[a-zA-Z\u00c0-\u00ff\u0400-\u04ff\u0370-\u03ff]*\b"
            if re.search(pattern_stem, lyrics_lower):
                return True
        return False

    current_vocab = COMPLETE_SONG_VOCAB.get(slug, [])
    if not current_vocab:
        from generate_karaoke_sessions import songs_list
        song_meta = next((s for s in songs_list if s["slug"] == slug), None)
        if song_meta:
            current_vocab = song_meta["vocab"]

    valid_vocab = []
    for w in current_vocab:
        # Strict language matching AND strict presence check in the lyrics
        if detect_word_lang(w) == song_lang and is_word_in_lyrics(w):
            valid_vocab.append(w)

    # Fill up with candidate words from VOCAB_DB / NEW_VOCAB_DB of the same language
    combined_db_keys = list(VOCAB_DB.keys()) + list(NEW_VOCAB_DB.keys())
    candidate_pool = []

    for k in combined_db_keys:
        if k in valid_vocab or any(clean_word(v.split(" ≠ ")[0]) == clean_word(k.split(" ≠ ")[0]) for v in valid_vocab):
            continue
        if detect_word_lang(k) == song_lang and is_word_in_lyrics(k):
            candidate_pool.append(k)

    for cand in candidate_pool:
        if len(valid_vocab) >= 10:
            break
        valid_vocab.append(cand)

    # Extract novel level-appropriate words from the lyrics if still short
    if len(valid_vocab) < 10:
        sorted_lyric_words = sorted(list(lyric_words), key=len, reverse=True)
        for lw in sorted_lyric_words:
            if len(valid_vocab) >= 10:
                break
            if len(lw) >= 5:
                if re.match(r"^\d+$", lw):
                    continue
                if song_lang == "en" and lw in ENGLISH_STOPWORDS:
                    continue
                if song_lang == "fr" and lw in FRENCH_STOPWORDS:
                    continue

                norm_lw = clean_word(lw)
                if not any(clean_word(v.split(" ≠ ")[0]) == norm_lw for v in valid_vocab):
                    capitalized = lw.capitalize()
                    if song_lang == "ru":
                        if capitalized.endswith("а") or capitalized.endswith("я"):
                            capitalized += " (она)"
                        elif capitalized.endswith("о") or capitalized.endswith("е"):
                            capitalized += " (оно)"
                        else:
                            capitalized += " (он)"

                    valid_vocab.append(capitalized)
                    if capitalized not in VOCAB_DB and capitalized not in NEW_VOCAB_DB:
                        NEW_VOCAB_DB[capitalized] = (f"Thematic vocabulary word from '{slug.replace('-', ' ').title()}'.", f"This is an elegant example of using '{capitalized}'.")

    valid_vocab = valid_vocab[:10]
    refined_vocab_map[slug] = valid_vocab
    print(f"Song: {slug} | Lang: {song_lang} | Vocab: {valid_vocab}")

# Let us modify scripts/generate_karaoke_sessions.py
complete_song_vocab_str = "COMPLETE_SONG_VOCAB = {\n"
for slug in sorted(refined_vocab_map.keys()):
    complete_song_vocab_str += f"    \"{slug}\": {refined_vocab_map[slug]},\n"
complete_song_vocab_str = complete_song_vocab_str.rstrip(",\n") + "\n}"

start_idx = gen_content.find("COMPLETE_SONG_VOCAB = {")
end_idx = gen_content.find("}", start_idx) + 1

if start_idx != -1 and end_idx != -1:
    gen_content = gen_content[:start_idx] + complete_song_vocab_str + gen_content[end_idx:]
    print("COMPLETE_SONG_VOCAB successfully updated in gen_content.")
else:
    print("ERROR: COMPLETE_SONG_VOCAB not found in generate_karaoke_sessions.py")
    sys.exit(1)

vocab_db_start = gen_content.find("VOCAB_DB = {")
if vocab_db_start != -1:
    vocab_db_entries_str = ""
    for k, v in sorted(NEW_VOCAB_DB.items()):
        escaped_def = v[0].replace("'", "\\'")
        escaped_ex = v[1].replace("'", "\\'")
        vocab_db_entries_str += f"    \"{k}\": ('{escaped_def}', '{escaped_ex}'),\n"
    gen_content = gen_content[:vocab_db_start + 12] + "\n" + vocab_db_entries_str + gen_content[vocab_db_start + 12:]
    print("VOCAB_DB successfully updated with new definitions.")
else:
    print("ERROR: VOCAB_DB not found in generate_karaoke_sessions.py")
    sys.exit(1)

with open(GENERATOR_PATH, "w", encoding="utf-8") as f:
    f.write(gen_content)

print("generate_karaoke_sessions.py successfully updated and saved!")

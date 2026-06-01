const fs = require('fs');
const path = require('path');

const etymDict = {
    "en": {
        "arm": { "origin_lang": "Proto-Germanic", "origin_word": "armaz" },
        "water": { "origin_lang": "Proto-Germanic", "origin_word": "watōr" },
        "house": { "origin_lang": "Proto-Germanic", "origin_word": "hūsą" },
        "bread": { "origin_lang": "Proto-Germanic", "origin_word": "braudą" },
        "hand": { "origin_lang": "Proto-Germanic", "origin_word": "handuz" },
        "sun": { "origin_lang": "Proto-Germanic", "origin_word": "sunnō" },
        "moon": { "origin_lang": "Proto-Germanic", "origin_word": "mēnô" },
        "mother": { "origin_lang": "Proto-Germanic", "origin_word": "mōdēr" },
        "father": { "origin_lang": "Proto-Germanic", "origin_word": "fader" },
        "brother": { "origin_lang": "Proto-Germanic", "origin_word": "brōþēr" },
        "sister": { "origin_lang": "Proto-Germanic", "origin_word": "swestēr" },
        "son": { "origin_lang": "Proto-Germanic", "origin_word": "sunuz" },
        "daughter": { "origin_lang": "Proto-Germanic", "origin_word": "duhtēr" },
        "be": { "origin_lang": "Proto-Germanic", "origin_word": "beun" },
        "have": { "origin_lang": "Proto-Germanic", "origin_word": "habjaną" },
        "go": { "origin_lang": "Proto-Germanic", "origin_word": "ganganą" },
        "eat": { "origin_lang": "Proto-Germanic", "origin_word": "etaną" },
        "drink": { "origin_lang": "Proto-Germanic", "origin_word": "drinkaną" },
        "speak": { "origin_lang": "Proto-Germanic", "origin_word": "sprekaną" },
        "foot": { "origin_lang": "Proto-Germanic", "origin_word": "fōts" },
        "eye": { "origin_lang": "Proto-Germanic", "origin_word": "augô" },
        "nose": { "origin_lang": "Proto-Germanic", "origin_word": "nasō" },
        "mouth": { "origin_lang": "Proto-Germanic", "origin_word": "munþaz" },
        "ear": { "origin_lang": "Proto-Germanic", "origin_word": "auzon" },
        "heart": { "origin_lang": "Proto-Germanic", "origin_word": "hertō" },
        "see": { "origin_lang": "Proto-Germanic", "origin_word": "sehwan" },
        "hear": { "origin_lang": "Proto-Germanic", "origin_word": "hauzjan" },
        "head": { "origin_lang": "Proto-Germanic", "origin_word": "haubidą" },
        "one": { "origin_lang": "Proto-Germanic", "origin_word": "ainaz" },
        "two": { "origin_lang": "Proto-Germanic", "origin_word": "twai" },
        "three": { "origin_lang": "Proto-Germanic", "origin_word": "þrijiz" },
        "four": { "origin_lang": "Proto-Germanic", "origin_word": "fedwōr" },
        "five": { "origin_lang": "Proto-Germanic", "origin_word": "fimf" },
        "six": { "origin_lang": "Proto-Germanic", "origin_word": "sehs" },
        "seven": { "origin_lang": "Proto-Germanic", "origin_word": "sibun" },
        "eight": { "origin_lang": "Proto-Germanic", "origin_word": "ahtōu" },
        "nine": { "origin_lang": "Proto-Germanic", "origin_word": "newun" },
        "ten": { "origin_lang": "Proto-Germanic", "origin_word": "tehun" },
        "red": { "origin_lang": "Proto-Germanic", "origin_word": "raudaz" },
        "blue": { "origin_lang": "Proto-Germanic", "origin_word": "blēwaz" },
        "green": { "origin_lang": "Proto-Germanic", "origin_word": "grōniz" },
        "white": { "origin_lang": "Proto-Germanic", "origin_word": "hwītaz" },
        "black": { "origin_lang": "Proto-Germanic", "origin_word": "blakaz" },
        "yellow": { "origin_lang": "Proto-Germanic", "origin_word": "gelwaz" },
        "good": { "origin_lang": "Proto-Germanic", "origin_word": "gōdaz" },
        "bad": { "origin_lang": "Middle English", "origin_word": "badde" },
        "big": { "origin_lang": "Middle English", "origin_word": "bigge" },
        "small": { "origin_lang": "Proto-Germanic", "origin_word": "smalaz" },
        "together": { "origin_lang": "Proto-Germanic", "origin_word": "gaduri" },
        "friend": { "origin_lang": "Proto-Germanic", "origin_word": "frijōndz" },
        "dog": { "origin_lang": "Old English", "origin_word": "docga" },
        "cat": { "origin_lang": "Latin", "origin_word": "cattus" },
        "fish": { "origin_lang": "Proto-Germanic", "origin_word": "fiskaz" },
        "bird": { "origin_lang": "Old English", "origin_word": "bridd" },
        "tree": { "origin_lang": "Proto-Germanic", "origin_word": "trewą" },
        "sky": { "origin_lang": "Old Norse", "origin_word": "ský" },
        "rain": { "origin_lang": "Proto-Germanic", "origin_word": "rigną" },
        "fire": { "origin_lang": "Proto-Germanic", "origin_word": "fōr" },
        "long": { "origin_lang": "Proto-Germanic", "origin_word": "langaz" },
        "cold": { "origin_lang": "Proto-Germanic", "origin_word": "kaldaz" },
        "new": { "origin_lang": "Proto-Germanic", "origin_word": "neujaz" },
        "man": { "origin_lang": "Proto-Germanic", "origin_word": "mann-" },
        "woman": { "origin_lang": "Old English", "origin_word": "wīfman" },
        "stone": { "origin_lang": "Proto-Germanic", "origin_word": "stainaz" },
        "earth": { "origin_lang": "Proto-Germanic", "origin_word": "erþō" },
        "wind": { "origin_lang": "Proto-Germanic", "origin_word": "windaz" },
        "leaf": { "origin_lang": "Proto-Germanic", "origin_word": "laubą" },
        "come": { "origin_lang": "Proto-Germanic", "origin_word": "kwimaną" },
        "sit": { "origin_lang": "Proto-Germanic", "origin_word": "sitjaną" },
        "stand": { "origin_lang": "Proto-Germanic", "origin_word": "standaną" },
        "night": { "origin_lang": "Proto-Germanic", "origin_word": "nahts" },
        "day": { "origin_lang": "Proto-Germanic", "origin_word": "dagaz" },
        "star": { "origin_lang": "Proto-Germanic", "origin_word": "sternǭ" },
        "sea": { "origin_lang": "Proto-Germanic", "origin_word": "saiwiz" },
        "milk": { "origin_lang": "Proto-Germanic", "origin_word": "meluks" },
        "meat": { "origin_lang": "Proto-Germanic", "origin_word": "matiz" },
        "tooth": { "origin_lang": "Proto-Germanic", "origin_word": "tanþs" },
        "tongue": { "origin_lang": "Proto-Germanic", "origin_word": "tungǭ" },
        "give": { "origin_lang": "Proto-Germanic", "origin_word": "gebaną" },
        "sleep": { "origin_lang": "Proto-Germanic", "origin_word": "slēpaną" },
        "table": { "origin_lang": "Latin", "origin_word": "tabula" },
        "chair": { "origin_lang": "Latin", "origin_word": "cathedra" },
        "bed": { "origin_lang": "Proto-Germanic", "origin_word": "badją" },
        "shirt": { "origin_lang": "Proto-Germanic", "origin_word": "skurtijǭ" },
        "shoe": { "origin_lang": "Proto-Germanic", "origin_word": "skōhaz" },
        "school": { "origin_lang": "Latin", "origin_word": "schola" },
        "city": { "origin_lang": "Latin", "origin_word": "civitas" },
        "town": { "origin_lang": "Proto-Germanic", "origin_word": "tūnaz" },
        "book": { "origin_lang": "Proto-Germanic", "origin_word": "bōks" },
        "time": { "origin_lang": "Proto-Germanic", "origin_word": "tīmô" }
    },
    "de": {
        "Arm": { "origin_lang": "Proto-Germanic", "origin_word": "armaz" },
        "Wasser": { "origin_lang": "Proto-Germanic", "origin_word": "watōr" },
        "Haus": { "origin_lang": "Proto-Germanic", "origin_word": "hūsą" },
        "Brot": { "origin_lang": "Proto-Germanic", "origin_word": "braudą" },
        "Hand": { "origin_lang": "Proto-Germanic", "origin_word": "handuz" },
        "Sonne": { "origin_lang": "Proto-Germanic", "origin_word": "sunnō" },
        "Mond": { "origin_lang": "Proto-Germanic", "origin_word": "mēnô" },
        "Mutter": { "origin_lang": "Proto-Germanic", "origin_word": "mōdēr" },
        "Vater": { "origin_lang": "Proto-Germanic", "origin_word": "fader" },
        "Bruder": { "origin_lang": "Proto-Germanic", "origin_word": "brōþēr" },
        "Schwester": { "origin_lang": "Proto-Germanic", "origin_word": "swestēr" },
        "Sohn": { "origin_lang": "Proto-Germanic", "origin_word": "sunuz" },
        "Tochter": { "origin_lang": "Proto-Germanic", "origin_word": "duhtēr" },
        "sein": { "origin_lang": "Proto-Germanic", "origin_word": "sijaną" },
        "haben": { "origin_lang": "Proto-Germanic", "origin_word": "habjaną" },
        "gehen": { "origin_lang": "Proto-Germanic", "origin_word": "ganganą" },
        "essen": { "origin_lang": "Proto-Germanic", "origin_word": "etaną" },
        "trinken": { "origin_lang": "Proto-Germanic", "origin_word": "drinkaną" },
        "Fuß": { "origin_lang": "Proto-Germanic", "origin_word": "fōts" },
        "Auge": { "origin_lang": "Proto-Germanic", "origin_word": "augô" },
        "Nase": { "origin_lang": "Proto-Germanic", "origin_word": "nasō" },
        "Mund": { "origin_lang": "Proto-Germanic", "origin_word": "munþaz" },
        "Ohr": { "origin_lang": "Proto-Germanic", "origin_word": "auzon" },
        "Herz": { "origin_lang": "Proto-Germanic", "origin_word": "hertō" },
        "sehen": { "origin_lang": "Proto-Germanic", "origin_word": "sehwan" },
        "hören": { "origin_lang": "Proto-Germanic", "origin_word": "hauzjan" },
        "Kopf": { "origin_lang": "Latin", "origin_word": "cuppa" },
        "eins": { "origin_lang": "Proto-Germanic", "origin_word": "ainaz" },
        "zwei": { "origin_lang": "Proto-Germanic", "origin_word": "twai" },
        "drei": { "origin_lang": "Proto-Germanic", "origin_word": "þrijiz" },
        "vier": { "origin_lang": "Proto-Germanic", "origin_word": "fedwōr" },
        "fünf": { "origin_lang": "Proto-Germanic", "origin_word": "fimf" },
        "sechs": { "origin_lang": "Proto-Germanic", "origin_word": "sehs" },
        "sieben": { "origin_lang": "Proto-Germanic", "origin_word": "sibun" },
        "acht": { "origin_lang": "Proto-Germanic", "origin_word": "ahtōu" },
        "neun": { "origin_lang": "Proto-Germanic", "origin_word": "newun" },
        "zehn": { "origin_lang": "Proto-Germanic", "origin_word": "tehun" },
        "rot": { "origin_lang": "Proto-Germanic", "origin_word": "raudaz" },
        "grün": { "origin_lang": "Proto-Germanic", "origin_word": "grōniz" },
        "weiß": { "origin_lang": "Proto-Germanic", "origin_word": "hwītaz" },
        "schwarz": { "origin_lang": "Proto-Germanic", "origin_word": "swartaz" },
        "blau": { "origin_lang": "Proto-Germanic", "origin_word": "blēwaz" },
        "gelb": { "origin_lang": "Proto-Germanic", "origin_word": "gelwaz" },
        "gut": { "origin_lang": "Proto-Germanic", "origin_word": "gōdaz" },
        "schlecht": { "origin_lang": "Middle High German", "origin_word": "sleht" },
        "groß": { "origin_lang": "Proto-Germanic", "origin_word": "grautaz" },
        "klein": { "origin_lang": "Proto-Germanic", "origin_word": "krainaz" },
        "Hund": { "origin_lang": "Proto-Germanic", "origin_word": "hundaz" },
        "Katze": { "origin_lang": "Latin", "origin_word": "cattus" },
        "Fisch": { "origin_lang": "Proto-Germanic", "origin_word": "fiskaz" },
        "Vogel": { "origin_lang": "Proto-Germanic", "origin_word": "fuglaz" },
        "Baum": { "origin_lang": "Proto-Germanic", "origin_word": "baumaz" },
        "Himmel": { "origin_lang": "Proto-Germanic", "origin_word": "hibina" },
        "Regen": { "origin_lang": "Proto-Germanic", "origin_word": "rigną" },
        "Feuer": { "origin_lang": "Proto-Germanic", "origin_word": "fōr" },
        "lang": { "origin_lang": "Proto-Germanic", "origin_word": "langaz" },
        "kalt": { "origin_lang": "Proto-Germanic", "origin_word": "kaldaz" },
        "neu": { "origin_lang": "Proto-Germanic", "origin_word": "neujaz" },
        "Mann": { "origin_lang": "Proto-Germanic", "origin_word": "mann-" },
        "Frau": { "origin_lang": "Old High German", "origin_word": "frouwa" },
        "Stein": { "origin_lang": "Proto-Germanic", "origin_word": "stainaz" },
        "Erde": { "origin_lang": "Proto-Germanic", "origin_word": "erþō" },
        "Wind": { "origin_lang": "Proto-Germanic", "origin_word": "windaz" },
        "Blatt": { "origin_lang": "Proto-Germanic", "origin_word": "blada-" },
        "kommen": { "origin_lang": "Proto-Germanic", "origin_word": "kwimaną" },
        "sitzen": { "origin_lang": "Proto-Germanic", "origin_word": "sitjaną" },
        "stehen": { "origin_lang": "Proto-Germanic", "origin_word": "standaną" },
        "Nacht": { "origin_lang": "Proto-Germanic", "origin_word": "nahts" },
        "Tag": { "origin_lang": "Proto-Germanic", "origin_word": "dagaz" },
        "Stern": { "origin_lang": "Proto-Germanic", "origin_word": "sternǭ" },
        "See": { "origin_lang": "Proto-Germanic", "origin_word": "saiwiz" },
        "Milch": { "origin_lang": "Proto-Germanic", "origin_word": "meluks" },
        "Fleisch": { "origin_lang": "Proto-Germanic", "origin_word": "flaiskaz" },
        "Zahn": { "origin_lang": "Proto-Germanic", "origin_word": "tanþs" },
        "Zunge": { "origin_lang": "Proto-Germanic", "origin_word": "tungǭ" },
        "geben": { "origin_lang": "Proto-Germanic", "origin_word": "gebaną" },
        "nehmen": { "origin_lang": "Proto-Germanic", "origin_word": "nemaną" },
        "schlafen": { "origin_lang": "Proto-Germanic", "origin_word": "slēpaną" },
        "Tisch": { "origin_lang": "Latin", "origin_word": "tabula" },
        "Stuhl": { "origin_lang": "Proto-Germanic", "origin_word": "stōlaz" },
        "Bett": { "origin_lang": "Proto-Germanic", "origin_word": "badją" },
        "Schuh": { "origin_lang": "Proto-Germanic", "origin_word": "skōhaz" },
        "Schule": { "origin_lang": "Latin", "origin_word": "schola" },
        "Stadt": { "origin_lang": "Proto-Germanic", "origin_word": "stadiz" },
        "Buch": { "origin_lang": "Proto-Germanic", "origin_word": "bōks" },
        "Zeit": { "origin_lang": "Proto-Germanic", "origin_word": "tīdiz" }
    },
    "fr": {
        "bras": { "origin_lang": "Latin", "origin_word": "bracchium" },
        "eau": { "origin_lang": "Latin", "origin_word": "aqua" },
        "maison": { "origin_lang": "Latin", "origin_word": "mansio" },
        "pain": { "origin_lang": "Latin", "origin_word": "panis" },
        "main": { "origin_lang": "Latin", "origin_word": "manus" },
        "soleil": { "origin_lang": "Latin", "origin_word": "soliculus" },
        "lune": { "origin_lang": "Latin", "origin_word": "luna" },
        "mère": { "origin_lang": "Latin", "origin_word": "mater" },
        "père": { "origin_lang": "Latin", "origin_word": "pater" },
        "frère": { "origin_lang": "Latin", "origin_word": "frater" },
        "sœur": { "origin_lang": "Latin", "origin_word": "soror" },
        "fils": { "origin_lang": "Latin", "origin_word": "filius" },
        "fille": { "origin_lang": "Latin", "origin_word": "filia" },
        "être": { "origin_lang": "Latin", "origin_word": "esse" },
        "avoir": { "origin_lang": "Latin", "origin_word": "habere" },
        "faire": { "origin_lang": "Latin", "origin_word": "facere" },
        "dire": { "origin_lang": "Latin", "origin_word": "dicere" },
        "manger": { "origin_lang": "Latin", "origin_word": "manducare" },
        "boire": { "origin_lang": "Latin", "origin_word": "bibere" },
        "parler": { "origin_lang": "Latin", "origin_word": "parabolare" },
        "pied": { "origin_lang": "Latin", "origin_word": "pes" },
        "œil": { "origin_lang": "Latin", "origin_word": "oculus" },
        "nez": { "origin_lang": "Latin", "origin_word": "nasus" },
        "bouche": { "origin_lang": "Latin", "origin_word": "bucca" },
        "oreille": { "origin_lang": "Latin", "origin_word": "auricula" },
        "cœur": { "origin_lang": "Latin", "origin_word": "cor" },
        "voir": { "origin_lang": "Latin", "origin_word": "videre" },
        "entendre": { "origin_lang": "Latin", "origin_word": "intendere" },
        "tête": { "origin_lang": "Latin", "origin_word": "testa" },
        "un": { "origin_lang": "Latin", "origin_word": "unus" },
        "deux": { "origin_lang": "Latin", "origin_word": "duo" },
        "trois": { "origin_lang": "Latin", "origin_word": "tres" },
        "quatre": { "origin_lang": "Latin", "origin_word": "quattuor" },
        "cinq": { "origin_lang": "Latin", "origin_word": "quinque" },
        "six": { "origin_lang": "Latin", "origin_word": "sex" },
        "sept": { "origin_lang": "Latin", "origin_word": "septem" },
        "huit": { "origin_lang": "Latin", "origin_word": "octo" },
        "neuf": { "origin_lang": "Latin", "origin_word": "novem" },
        "dix": { "origin_lang": "Latin", "origin_word": "decem" },
        "rouge": { "origin_lang": "Latin", "origin_word": "rubeus" },
        "bleu": { "origin_lang": "Frankish", "origin_word": "blāu" },
        "vert": { "origin_lang": "Latin", "origin_word": "viridis" },
        "blanc": { "origin_lang": "Frankish", "origin_word": "blank" },
        "noir": { "origin_lang": "Latin", "origin_word": "niger" },
        "jaune": { "origin_lang": "Latin", "origin_word": "galbinus" },
        "chien": { "origin_lang": "Latin", "origin_word": "canis" },
        "chat": { "origin_lang": "Latin", "origin_word": "cattus" },
        "poisson": { "origin_lang": "Latin", "origin_word": "piscis" },
        "oiseau": { "origin_lang": "Latin", "origin_word": "avicellus" },
        "arbre": { "origin_lang": "Latin", "origin_word": "arbor" },
        "ciel": { "origin_lang": "Latin", "origin_word": "caelum" },
        "pluie": { "origin_lang": "Latin", "origin_word": "pluvia" },
        "feu": { "origin_lang": "Latin", "origin_word": "focus" },
        "long": { "origin_lang": "Latin", "origin_word": "longus" },
        "froid": { "origin_lang": "Latin", "origin_word": "frigidus" },
        "nouveau": { "origin_lang": "Latin", "origin_word": "novellus" },
        "homme": { "origin_lang": "Latin", "origin_word": "homo" },
        "femme": { "origin_lang": "Latin", "origin_word": "femina" },
        "pierre": { "origin_lang": "Latin", "origin_word": "petra" },
        "terre": { "origin_lang": "Latin", "origin_word": "terra" },
        "vent": { "origin_lang": "Latin", "origin_word": "ventus" },
        "feuille": { "origin_lang": "Latin", "origin_word": "folia" },
        "venir": { "origin_lang": "Latin", "origin_word": "venire" },
        "dormir": { "origin_lang": "Latin", "origin_word": "dormire" },
        "donner": { "origin_lang": "Latin", "origin_word": "donare" },
        "prendre": { "origin_lang": "Latin", "origin_word": "prehendere" },
        "nuit": { "origin_lang": "Latin", "origin_word": "nox" },
        "jour": { "origin_lang": "Latin", "origin_word": "diurnus" },
        "étoile": { "origin_lang": "Latin", "origin_word": "stella" },
        "mer": { "origin_lang": "Latin", "origin_word": "mare" },
        "lait": { "origin_lang": "Latin", "origin_word": "lac" },
        "viande": { "origin_lang": "Latin", "origin_word": "vivenda" },
        "dent": { "origin_lang": "Latin", "origin_word": "dens" },
        "langue": { "origin_lang": "Latin", "origin_word": "lingua" },
        "table": { "origin_lang": "Latin", "origin_word": "tabula" },
        "chaise": { "origin_lang": "Latin", "origin_word": "cathedra" },
        "lit": { "origin_lang": "Latin", "origin_word": "lectus" },
        "école": { "origin_lang": "Latin", "origin_word": "schola" },
        "ville": { "origin_lang": "Latin", "origin_word": "villa" },
        "livre": { "origin_lang": "Latin", "origin_word": "liber" },
        "argent": { "origin_lang": "Latin", "origin_word": "argentum" },
        "temps": { "origin_lang": "Latin", "origin_word": "tempus" }
    },
    "it": {
        "braccio": { "origin_lang": "Latin", "origin_word": "bracchium" },
        "acqua": { "origin_lang": "Latin", "origin_word": "aqua" },
        "casa": { "origin_lang": "Latin", "origin_word": "casa" },
        "pane": { "origin_lang": "Latin", "origin_word": "panis" },
        "mano": { "origin_lang": "Latin", "origin_word": "manus" },
        "sole": { "origin_lang": "Latin", "origin_word": "sol" },
        "luna": { "origin_lang": "Latin", "origin_word": "luna" },
        "madre": { "origin_lang": "Latin", "origin_word": "mater" },
        "padre": { "origin_lang": "Latin", "origin_word": "pater" },
        "fratello": { "origin_lang": "Latin", "origin_word": "frater" },
        "sorella": { "origin_lang": "Latin", "origin_word": "soror" },
        "figlio": { "origin_lang": "Latin", "origin_word": "filius" },
        "figlia": { "origin_lang": "Latin", "origin_word": "filia" },
        "essere": { "origin_lang": "Latin", "origin_word": "esse" },
        "avere": { "origin_lang": "Latin", "origin_word": "habere" },
        "fare": { "origin_lang": "Latin", "origin_word": "facere" },
        "mangiare": { "origin_lang": "Latin", "origin_word": "manducare" },
        "bere": { "origin_lang": "Latin", "origin_word": "bibere" },
        "parlare": { "origin_lang": "Latin", "origin_word": "parabolare" },
        "piede": { "origin_lang": "Latin", "origin_word": "pes" },
        "occhio": { "origin_lang": "Latin", "origin_word": "oculus" },
        "naso": { "origin_lang": "Latin", "origin_word": "nasus" },
        "bocca": { "origin_lang": "Latin", "origin_word": "bucca" },
        "orecchio": { "origin_lang": "Latin", "origin_word": "auricula" },
        "cuore": { "origin_lang": "Latin", "origin_word": "cor" },
        "vedere": { "origin_lang": "Latin", "origin_word": "videre" },
        "udire": { "origin_lang": "Latin", "origin_word": "audire" },
        "testa": { "origin_lang": "Latin", "origin_word": "testa" },
        "uno": { "origin_lang": "Latin", "origin_word": "unus" },
        "due": { "origin_lang": "Latin", "origin_word": "duo" },
        "tre": { "origin_lang": "Latin", "origin_word": "tres" },
        "quattro": { "origin_lang": "Latin", "origin_word": "quattuor" },
        "cinque": { "origin_lang": "Latin", "origin_word": "quinque" },
        "sei": { "origin_lang": "Latin", "origin_word": "sex" },
        "sette": { "origin_lang": "Latin", "origin_word": "septem" },
        "otto": { "origin_lang": "Latin", "origin_word": "octo" },
        "nove": { "origin_lang": "Latin", "origin_word": "novem" },
        "dieci": { "origin_lang": "Latin", "origin_word": "decem" },
        "rosso": { "origin_lang": "Latin", "origin_word": "russus" },
        "blu": { "origin_lang": "Old French", "origin_word": "bleu" },
        "verde": { "origin_lang": "Latin", "origin_word": "viridis" },
        "bianco": { "origin_lang": "Germanic", "origin_word": "blank" },
        "nero": { "origin_lang": "Latin", "origin_word": "niger" },
        "giallo": { "origin_lang": "French", "origin_word": "jaune" },
        "cane": { "origin_lang": "Latin", "origin_word": "canis" },
        "gatto": { "origin_lang": "Latin", "origin_word": "cattus" },
        "pesce": { "origin_lang": "Latin", "origin_word": "piscis" },
        "uccello": { "origin_lang": "Latin", "origin_word": "avicellus" },
        "albero": { "origin_lang": "Latin", "origin_word": "arbor" },
        "cielo": { "origin_lang": "Latin", "origin_word": "caelum" },
        "pioggia": { "origin_lang": "Latin", "origin_word": "pluvia" },
        "fuoco": { "origin_lang": "Latin", "origin_word": "focus" },
        "lungo": { "origin_lang": "Latin", "origin_word": "longus" },
        "freddo": { "origin_lang": "Latin", "origin_word": "frigidus" },
        "nuovo": { "origin_lang": "Latin", "origin_word": "novus" },
        "uomo": { "origin_lang": "Latin", "origin_word": "homo" },
        "donna": { "origin_lang": "Latin", "origin_word": "domina" },
        "pietra": { "origin_lang": "Latin", "origin_word": "petra" },
        "terra": { "origin_lang": "Latin", "origin_word": "terra" },
        "vento": { "origin_lang": "Latin", "origin_word": "ventus" },
        "foglia": { "origin_lang": "Latin", "origin_word": "folia" },
        "venire": { "origin_lang": "Latin", "origin_word": "venire" },
        "dormire": { "origin_lang": "Latin", "origin_word": "dormire" },
        "dare": { "origin_lang": "Latin", "origin_word": "dare" },
        "prendere": { "origin_lang": "Latin", "origin_word": "prehendere" },
        "notte": { "origin_lang": "Latin", "origin_word": "nox" },
        "giorno": { "origin_lang": "Latin", "origin_word": "diurnus" },
        "stella": { "origin_lang": "Latin", "origin_word": "stella" },
        "mare": { "origin_lang": "Latin", "origin_word": "mare" },
        "latte": { "origin_lang": "Latin", "origin_word": "lac" },
        "carne": { "origin_lang": "Latin", "origin_word": "caro" },
        "dente": { "origin_lang": "Latin", "origin_word": "dens" },
        "lingua": { "origin_lang": "Latin", "origin_word": "lingua" },
        "tavolo": { "origin_lang": "Latin", "origin_word": "tabula" },
        "sedia": { "origin_lang": "Latin", "origin_word": "sedes" },
        "letto": { "origin_lang": "Latin", "origin_word": "lectus" },
        "scuola": { "origin_lang": "Latin", "origin_word": "schola" },
        "città": { "origin_lang": "Latin", "origin_word": "civitas" },
        "libro": { "origin_lang": "Latin", "origin_word": "liber" },
        "denaro": { "origin_lang": "Latin", "origin_word": "denarius" },
        "tempo": { "origin_lang": "Latin", "origin_word": "tempus" }
    },
    "es": {
        "brazo": { "origin_lang": "Latin", "origin_word": "bracchium" },
        "agua": { "origin_lang": "Latin", "origin_word": "aqua" },
        "casa": { "origin_lang": "Latin", "origin_word": "casa" },
        "pan": { "origin_lang": "Latin", "origin_word": "panis" },
        "mano": { "origin_lang": "Latin", "origin_word": "manus" },
        "sol": { "origin_lang": "Latin", "origin_word": "sol" },
        "luna": { "origin_lang": "Latin", "origin_word": "luna" },
        "madre": { "origin_lang": "Latin", "origin_word": "mater" },
        "padre": { "origin_lang": "Latin", "origin_word": "pater" },
        "hermano": { "origin_lang": "Latin", "origin_word": "germanus" },
        "hermana": { "origin_lang": "Latin", "origin_word": "germana" },
        "hijo": { "origin_lang": "Latin", "origin_word": "filius" },
        "hija": { "origin_lang": "Latin", "origin_word": "filia" },
        "ser": { "origin_lang": "Latin", "origin_word": "esse" },
        "estar": { "origin_lang": "Latin", "origin_word": "stare" },
        "tener": { "origin_lang": "Latin", "origin_word": "tenere" },
        "hacer": { "origin_lang": "Latin", "origin_word": "facere" },
        "comer": { "origin_lang": "Latin", "origin_word": "comedere" },
        "beber": { "origin_lang": "Latin", "origin_word": "bibere" },
        "hablar": { "origin_lang": "Latin", "origin_word": "fabulari" },
        "pie": { "origin_lang": "Latin", "origin_word": "pes" },
        "ojo": { "origin_lang": "Latin", "origin_word": "oculus" },
        "nariz": { "origin_lang": "Latin", "origin_word": "nasus" },
        "boca": { "origin_lang": "Latin", "origin_word": "bucca" },
        "oreja": { "origin_lang": "Latin", "origin_word": "auricula" },
        "corazón": { "origin_lang": "Latin", "origin_word": "cor" },
        "ver": { "origin_lang": "Latin", "origin_word": "videre" },
        "oír": { "origin_lang": "Latin", "origin_word": "audire" },
        "cabeza": { "origin_lang": "Latin", "origin_word": "capitia" },
        "uno": { "origin_lang": "Latin", "origin_word": "unus" },
        "dos": { "origin_lang": "Latin", "origin_word": "duos" },
        "tres": { "origin_lang": "Latin", "origin_word": "tres" },
        "cuatro": { "origin_lang": "Latin", "origin_word": "quattuor" },
        "cinco": { "origin_lang": "Latin", "origin_word": "quinque" },
        "seis": { "origin_lang": "Latin", "origin_word": "sex" },
        "siete": { "origin_lang": "Latin", "origin_word": "septem" },
        "ocho": { "origin_lang": "Latin", "origin_word": "octo" },
        "nueve": { "origin_lang": "Latin", "origin_word": "novem" },
        "diez": { "origin_lang": "Latin", "origin_word": "decem" },
        "rojo": { "origin_lang": "Latin", "origin_word": "russus" },
        "azul": { "origin_lang": "Arabic", "origin_word": "lāzaward" },
        "verde": { "origin_lang": "Latin", "origin_word": "viridis" },
        "blanco": { "origin_lang": "Germanic", "origin_word": "blank" },
        "negro": { "origin_lang": "Latin", "origin_word": "niger" },
        "amarillo": { "origin_lang": "Latin", "origin_word": "amarellus" },
        "perro": { "origin_lang": "Onomatopoeic", "origin_word": "perro" },
        "gato": { "origin_lang": "Latin", "origin_word": "cattus" },
        "pez": { "origin_lang": "Latin", "origin_word": "piscis" },
        "pájaro": { "origin_lang": "Latin", "origin_word": "passer" },
        "árbol": { "origin_lang": "Latin", "origin_word": "arbor" },
        "cielo": { "origin_lang": "Latin", "origin_word": "caelum" },
        "lluvia": { "origin_lang": "Latin", "origin_word": "pluvia" },
        "fuego": { "origin_lang": "Latin", "origin_word": "focus" },
        "largo": { "origin_lang": "Latin", "origin_word": "largus" },
        "frío": { "origin_lang": "Latin", "origin_word": "frigidus" },
        "nuevo": { "origin_lang": "Latin", "origin_word": "novus" },
        "hombre": { "origin_lang": "Latin", "origin_word": "homo" },
        "mujer": { "origin_lang": "Latin", "origin_word": "mulier" },
        "piedra": { "origin_lang": "Latin", "origin_word": "petra" },
        "tierra": { "origin_lang": "Latin", "origin_word": "terra" },
        "viento": { "origin_lang": "Latin", "origin_word": "ventus" },
        "hoja": { "origin_lang": "Latin", "origin_word": "folia" },
        "venir": { "origin_lang": "Latin", "origin_word": "venire" },
        "sentarse": { "origin_lang": "Latin", "origin_word": "sedere" },
        "tomar": { "origin_lang": "Latin", "origin_word": "tomare" },
        "noche": { "origin_lang": "Latin", "origin_word": "nox" },
        "día": { "origin_lang": "Latin", "origin_word": "dies" },
        "estrella": { "origin_lang": "Latin", "origin_word": "stella" },
        "mar": { "origin_lang": "Latin", "origin_word": "mare" },
        "leche": { "origin_lang": "Latin", "origin_word": "lac" },
        "carne": { "origin_lang": "Latin", "origin_word": "caro" },
        "diente": { "origin_lang": "Latin", "origin_word": "dens" },
        "lengua": { "origin_lang": "Latin", "origin_word": "lingua" },
        "mesa": { "origin_lang": "Latin", "origin_word": "mensa" },
        "silla": { "origin_lang": "Latin", "origin_word": "sella" },
        "cama": { "origin_lang": "Vulgar Latin", "origin_word": "cama" },
        "camisa": { "origin_lang": "Latin", "origin_word": "camisia" },
        "escuela": { "origin_lang": "Latin", "origin_word": "schola" },
        "ciudad": { "origin_lang": "Latin", "origin_word": "civitas" },
        "caballo": { "origin_lang": "Latin", "origin_word": "caballus" },
        "vaca": { "origin_lang": "Latin", "origin_word": "vacca" }
    },
    "pt": {
        "braço": { "origin_lang": "Latin", "origin_word": "bracchium" },
        "água": { "origin_lang": "Latin", "origin_word": "aqua" },
        "casa": { "origin_lang": "Latin", "origin_word": "casa" },
        "pão": { "origin_lang": "Latin", "origin_word": "panis" },
        "mão": { "origin_lang": "Latin", "origin_word": "manus" },
        "sol": { "origin_lang": "Latin", "origin_word": "sol" },
        "lua": { "origin_lang": "Latin", "origin_word": "luna" },
        "mãe": { "origin_lang": "Latin", "origin_word": "mater" },
        "pai": { "origin_lang": "Latin", "origin_word": "pater" },
        "irmão": { "origin_lang": "Latin", "origin_word": "germanus" },
        "irmã": { "origin_lang": "Latin", "origin_word": "germana" },
        "filho": { "origin_lang": "Latin", "origin_word": "filius" },
        "filha": { "origin_lang": "Latin", "origin_word": "filia" },
        "ser": { "origin_lang": "Latin", "origin_word": "esse" },
        "estar": { "origin_lang": "Latin", "origin_word": "stare" },
        "ter": { "origin_lang": "Latin", "origin_word": "tenere" },
        "fazer": { "origin_lang": "Latin", "origin_word": "facere" },
        "comer": { "origin_lang": "Latin", "origin_word": "comedere" },
        "beber": { "origin_lang": "Latin", "origin_word": "bibere" },
        "falar": { "origin_lang": "Latin", "origin_word": "fabulari" },
        "pé": { "origin_lang": "Latin", "origin_word": "pes" },
        "olho": { "origin_lang": "Latin", "origin_word": "oculus" },
        "nariz": { "origin_lang": "Latin", "origin_word": "nasus" },
        "boca": { "origin_lang": "Latin", "origin_word": "bucca" },
        "orelha": { "origin_lang": "Latin", "origin_word": "auricula" },
        "coração": { "origin_lang": "Latin", "origin_word": "cor" },
        "ver": { "origin_lang": "Latin", "origin_word": "videre" },
        "ouvir": { "origin_lang": "Latin", "origin_word": "audire" },
        "cabeça": { "origin_lang": "Latin", "origin_word": "capitia" },
        "um": { "origin_lang": "Latin", "origin_word": "unus" },
        "dois": { "origin_lang": "Latin", "origin_word": "duos" },
        "três": { "origin_lang": "Latin", "origin_word": "tres" },
        "quatro": { "origin_lang": "Latin", "origin_word": "quattuor" },
        "cinco": { "origin_lang": "Latin", "origin_word": "quinque" },
        "seis": { "origin_lang": "Latin", "origin_word": "sex" },
        "sete": { "origin_lang": "Latin", "origin_word": "septem" },
        "oito": { "origin_lang": "Latin", "origin_word": "octo" },
        "nove": { "origin_lang": "Latin", "origin_word": "novem" },
        "dez": { "origin_lang": "Latin", "origin_word": "decem" },
        "vermelho": { "origin_lang": "Latin", "origin_word": "vermiculus" },
        "azul": { "origin_lang": "Arabic", "origin_word": "lāzaward" },
        "verde": { "origin_lang": "Latin", "origin_word": "viridis" },
        "branco": { "origin_lang": "Germanic", "origin_word": "blank" },
        "preto": { "origin_lang": "Latin", "origin_word": "appectoratus" },
        "amarelo": { "origin_lang": "Latin", "origin_word": "amarellus" },
        "cão": { "origin_lang": "Latin", "origin_word": "canis" },
        "gato": { "origin_lang": "Latin", "origin_word": "cattus" },
        "peixe": { "origin_lang": "Latin", "origin_word": "piscis" },
        "pássaro": { "origin_lang": "Latin", "origin_word": "passer" },
        "árvore": { "origin_lang": "Latin", "origin_word": "arbor" },
        "céu": { "origin_lang": "Latin", "origin_word": "caelum" },
        "chuva": { "origin_lang": "Latin", "origin_word": "pluvia" },
        "fogo": { "origin_lang": "Latin", "origin_word": "focus" },
        "longo": { "origin_lang": "Latin", "origin_word": "longus" },
        "frio": { "origin_lang": "Latin", "origin_word": "frigidus" },
        "novo": { "origin_lang": "Latin", "origin_word": "novus" },
        "homem": { "origin_lang": "Latin", "origin_word": "homo" },
        "mulher": { "origin_lang": "Latin", "origin_word": "mulier" },
        "pedra": { "origin_lang": "Latin", "origin_word": "petra" },
        "terra": { "origin_lang": "Latin", "origin_word": "terra" },
        "vento": { "origin_lang": "Latin", "origin_word": "ventus" },
        "folha": { "origin_lang": "Latin", "origin_word": "folia" },
        "vir": { "origin_lang": "Latin", "origin_word": "venire" },
        "sentar": { "origin_lang": "Latin", "origin_word": "sedere" },
        "tomar": { "origin_lang": "Latin", "origin_word": "tomare" },
        "noite": { "origin_lang": "Latin", "origin_word": "nox" },
        "dia": { "origin_lang": "Latin", "origin_word": "dies" },
        "estrella": { "origin_lang": "Latin", "origin_word": "stella" },
        "mar": { "origin_lang": "Latin", "origin_word": "mare" },
        "leite": { "origin_lang": "Latin", "origin_word": "lac" },
        "carne": { "origin_lang": "Latin", "origin_word": "caro" },
        "dente": { "origin_lang": "Latin", "origin_word": "dens" },
        "língua": { "origin_lang": "Latin", "origin_word": "lingua" },
        "mesa": { "origin_lang": "Latin", "origin_word": "mensa" },
        "cadeira": { "origin_lang": "Latin", "origin_word": "cathedra" },
        "cama": { "origin_lang": "Vulgar Latin", "origin_word": "cama" },
        "camisa": { "origin_lang": "Latin", "origin_word": "camisia" },
        "escola": { "origin_lang": "Latin", "origin_word": "schola" },
        "cidade": { "origin_lang": "Latin", "origin_word": "civitas" },
        "cavalo": { "origin_lang": "Latin", "origin_word": "caballus" },
        "vaca": { "origin_lang": "Latin", "origin_word": "vacca" },
        "porco": { "origin_lang": "Latin", "origin_word": "porcus" }
    },
    "ru": {
        "рука": { "origin_lang": "Proto-Slavic", "origin_word": "rǫka" },
        "вода": { "origin_lang": "Proto-Slavic", "origin_word": "voda" },
        "дом": { "origin_lang": "Proto-Slavic", "origin_word": "domъ" },
        "хлеб": { "origin_lang": "Proto-Slavic", "origin_word": "xlěbъ" },
        "солнце": { "origin_lang": "Proto-Slavic", "origin_word": "sъlnьce" },
        "луна": { "origin_lang": "Proto-Slavic", "origin_word": "luna" },
        "мать": { "origin_lang": "Proto-Slavic", "origin_word": "mati" },
        "отец": { "origin_lang": "Proto-Slavic", "origin_word": "otьcь" },
        "брат": { "origin_lang": "Proto-Slavic", "origin_word": "bratrъ" },
        "сестра": { "origin_lang": "Proto-Slavic", "origin_word": "sestra" },
        "сын": { "origin_lang": "Proto-Slavic", "origin_word": "synъ" },
        "дочь": { "origin_lang": "Proto-Slavic", "origin_word": "dъkti" },
        "быть": { "origin_lang": "Proto-Slavic", "origin_word": "byti" },
        "делать": { "origin_lang": "Proto-Slavic", "origin_word": "dělati" },
        "есть": { "origin_lang": "Proto-Slavic", "origin_word": "ěsti" },
        "пить": { "origin_lang": "Proto-Slavic", "origin_word": "piti" },
        "говорить": { "origin_lang": "Proto-Slavic", "origin_word": "govoriti" },
        "работать": { "origin_lang": "Proto-Slavic", "origin_word": "orbota" },
        "нога": { "origin_lang": "Proto-Slavic", "origin_word": "noga" },
        "глаз": { "origin_lang": "Proto-Slavic", "origin_word": "glazъ" },
        "нос": { "origin_lang": "Proto-Slavic", "origin_word": "nosъ" },
        "рот": { "origin_lang": "Proto-Slavic", "origin_word": "rъtъ" },
        "ухо": { "origin_lang": "Proto-Slavic", "origin_word": "uxo" },
        "сердце": { "origin_lang": "Proto-Slavic", "origin_word": "sьrdьce" },
        "видеть": { "origin_lang": "Proto-Slavic", "origin_word": "viděti" },
        "слышать": { "origin_lang": "Proto-Slavic", "origin_word": "slyšati" },
        "голова": { "origin_lang": "Proto-Slavic", "origin_word": "golva" },
        "один": { "origin_lang": "Proto-Slavic", "origin_word": "edinъ" },
        "два": { "origin_lang": "Proto-Slavic", "origin_word": "dъva" },
        "три": { "origin_lang": "Proto-Slavic", "origin_word": "tri" },
        "четыре": { "origin_lang": "Proto-Slavic", "origin_word": "četyre" },
        "пять": { "origin_lang": "Proto-Slavic", "origin_word": "pętь" },
        "шесть": { "origin_lang": "Proto-Slavic", "origin_word": "šestь" },
        "семь": { "origin_lang": "Proto-Slavic", "origin_word": "sedmь" },
        "восемь": { "origin_lang": "Proto-Slavic", "origin_word": "ovsьmь" },
        "девять": { "origin_lang": "Proto-Slavic", "origin_word": "devętь" },
        "десять": { "origin_lang": "Proto-Slavic", "origin_word": "desętь" },
        "красный": { "origin_lang": "Proto-Slavic", "origin_word": "krasьnъ" },
        "синий": { "origin_lang": "Proto-Slavic", "origin_word": "sinьjь" },
        "зеленый": { "origin_lang": "Proto-Slavic", "origin_word": "zelenъ" },
        "белый": { "origin_lang": "Proto-Slavic", "origin_word": "bělъ" },
        "черный": { "origin_lang": "Proto-Slavic", "origin_word": "čьrnъ" },
        "желтый": { "origin_lang": "Proto-Slavic", "origin_word": "žьltъ" },
        "кошка": { "origin_lang": "Proto-Slavic", "origin_word": "košьka" },
        "рыба": { "origin_lang": "Proto-Slavic", "origin_word": "ryba" },
        "птица": { "origin_lang": "Proto-Slavic", "origin_word": "pъtica" },
        "дерево": { "origin_lang": "Proto-Slavic", "origin_word": "dervo" },
        "небо": { "origin_lang": "Proto-Slavic", "origin_word": "nebo" },
        "дождь": { "origin_lang": "Proto-Slavic", "origin_word": "dъždь" },
        "огонь": { "origin_lang": "Proto-Slavic", "origin_word": "ognь" },
        "длинный": { "origin_lang": "Proto-Slavic", "origin_word": "dĺ̥gъ" },
        "холодный": { "origin_lang": "Proto-Slavic", "origin_word": "xoldьnъ" },
        "новый": { "origin_lang": "Proto-Slavic", "origin_word": "novъ" },
        "человек": { "origin_lang": "Proto-Slavic", "origin_word": "čelověkъ" },
        "женщина": { "origin_lang": "Proto-Slavic", "origin_word": "žena" },
        "камень": { "origin_lang": "Proto-Slavic", "origin_word": "kamy" },
        "земля": { "origin_lang": "Proto-Slavic", "origin_word": "zemlja" },
        "ветер": { "origin_lang": "Proto-Slavic", "origin_word": "větrъ" },
        "лист": { "origin_lang": "Proto-Slavic", "origin_word": "listъ" },
        "прийти": { "origin_lang": "Proto-Slavic", "origin_word": "prijiti" },
        "сидеть": { "origin_lang": "Proto-Slavic", "origin_word": "sěděti" },
        "стоять": { "origin_lang": "Proto-Slavic", "origin_word": "stojati" },
        "ночь": { "origin_lang": "Proto-Slavic", "origin_word": "noťь" },
        "день": { "origin_lang": "Proto-Slavic", "origin_word": "dьnь" },
        "звезда": { "origin_lang": "Proto-Slavic", "origin_word": "zvězda" },
        "море": { "origin_lang": "Proto-Slavic", "origin_word": "more" },
        "гора": { "origin_lang": "Proto-Slavic", "origin_word": "gora" },
        "молоко": { "origin_lang": "Proto-Slavic", "origin_word": "mleko" },
        "мясо": { "origin_lang": "Proto-Slavic", "origin_word": "męso" },
        "зуб": { "origin_lang": "Proto-Slavic", "origin_word": "zǫbъ" },
        "язык": { "origin_lang": "Proto-Slavic", "origin_word": "językъ" },
        "дать": { "origin_lang": "Proto-Slavic", "origin_word": "dati" },
        "взять": { "origin_lang": "Proto-Slavic", "origin_word": "vьzęti" },
        "спать": { "origin_lang": "Proto-Slavic", "origin_word": "sъpati" },
        "стол": { "origin_lang": "Proto-Slavic", "origin_word": "stolъ" },
        "стул": { "origin_lang": "German", "origin_word": "Stuhl" },
        "кровать": { "origin_lang": "Greek", "origin_word": "krabbatos" },
        "рубашка": { "origin_lang": "Proto-Slavic", "origin_word": "rubъ" },
        "башмак": { "origin_lang": "Turkic", "origin_word": "başmak" },
        "школа": { "origin_lang": "Latin", "origin_word": "schola" },
        "город": { "origin_lang": "Proto-Slavic", "origin_word": "gordъ" },
        "лошадь": { "origin_lang": "Turkic", "origin_word": "alaša" },
        "корова": { "origin_lang": "Proto-Slavic", "origin_word": "korva" },
        "свинья": { "origin_lang": "Proto-Slavic", "origin_word": "svinьja" }
    },
    "ba": {
        "һыу": { "origin_lang": "Proto-Turkic", "origin_word": "sub" },
        "бала": { "origin_lang": "Proto-Turkic", "origin_word": "bala" },
        "ҡул": { "origin_lang": "Proto-Turkic", "origin_word": "kol" },
        "күҙ": { "origin_lang": "Proto-Turkic", "origin_word": "köŕ" },
        "икмәк": { "origin_lang": "Old Turkic", "origin_word": "etmek" },
        "ҡояш": { "origin_lang": "Proto-Turkic", "origin_word": "kuyāš" }
    },
    "tt": {
        "су": { "origin_lang": "Proto-Turkic", "origin_word": "sub" },
        "бала": { "origin_lang": "Proto-Turkic", "origin_word": "bala" },
        "кул": { "origin_lang": "Proto-Turkic", "origin_word": "kol" },
        "күз": { "origin_lang": "Proto-Turkic", "origin_word": "köŕ" },
        "икмәк": { "origin_lang": "Old Turkic", "origin_word": "etmek" },
        "кояш": { "origin_lang": "Proto-Turkic", "origin_word": "kuyāš" }
    }
};

function findInnermostObjectContaining(content, index) {
    let inString = false;
    let stack = [];
    let candidates = [];
    for (let i = 0; i < content.length; i++) {
        let char = content[i];
        if (char === '"' && (i === 0 || content[i-1] !== '\\')) inString = !inString;
        if (!inString) {
            if (char === '{') {
                stack.push(i);
            } else if (char === '}') {
                if (stack.length > 0) {
                    let start = stack.pop();
                    if (index >= start && index < i) {
                        candidates.push({ start, end: i + 1, text: content.slice(start, i + 1) });
                    }
                }
            }
        }
    }
    if (candidates.length === 0) return null;
    candidates.sort((a, b) => a.text.length - b.text.length);
    return candidates[0];
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let lang = "";
    const parts = filePath.split(path.sep);
    if (parts.includes('data')) lang = parts[parts.indexOf('data') + 2];
    else if (parts.includes('vocabulary')) lang = parts[parts.indexOf('vocabulary') + 1];

    if (!etymDict[lang]) return;

    let modified = false;
    const wordRegex = /("word"|word)[\s]*:[\s]*"([^"]+)"/g;
    let match;
    let matches = [];
    while ((match = wordRegex.exec(content)) !== null) {
        matches.push({ word: match[2], index: match.index });
    }

    matches.sort((a, b) => b.index - a.index);

    for (let i = 0; i < matches.length; i++) {
        const { word, index } = matches[i];
        if (etymDict[lang][word]) {
            const obj = findInnermostObjectContaining(content, index);
            if (obj && !obj.text.includes('"etymology"') && !obj.text.includes('etymology:')) {
                const etym = etymDict[lang][word];

                let targetObj = obj;
                if (obj.text.includes('"text":') && !obj.text.includes('"id":')) {
                    const parentObj = findParentEntry(content, index);
                    if (parentObj) targetObj = parentObj;
                } else if (obj.text.includes('tenses:') && !obj.text.includes('word:')) {
                     const parentObj = findParentEntry(content, index);
                     if (parentObj) targetObj = parentObj;
                }

                if (targetObj && !targetObj.text.includes('"etymology"') && !targetObj.text.includes('etymology:')) {
                    content = injectEtymologyIntoString(content, targetObj, etym);
                    modified = true;
                }
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
    }
}

function findParentEntry(content, index) {
    let inString = false;
    let stack = [];
    let candidates = [];
    for (let i = 0; i < content.length; i++) {
        let char = content[i];
        if (char === '"' && (i === 0 || content[i-1] !== '\\')) inString = !inString;
        if (!inString) {
            if (char === '{') {
                stack.push(i);
            } else if (char === '}') {
                if (stack.length > 0) {
                    let start = stack.pop();
                    if (index >= start && index < i) {
                        candidates.push({ start, end: i + 1, text: content.slice(start, i + 1) });
                    }
                }
            }
        }
    }
    for (let cand of candidates.sort((a,b) => a.text.length - b.text.length)) {
         if ((cand.text.includes('"id":') && cand.text.includes('"word":')) || (cand.text.includes('word:') && cand.text.includes('level:'))) return cand;
    }
    return null;
}

function injectEtymologyIntoString(fullContent, obj, etym) {
    const lines = obj.text.split('\n');
    let indent = "        ";
    for (let line of lines) {
        const m = line.match(/^(\s+)["\w]+/);
        if (m && m[1].length > 0) { indent = m[1]; break; }
    }
    const useQuotes = obj.text.includes('"word":');
    const etymKey = useQuotes ? '"etymology"' : 'etymology';
    const etymString = `,\n${indent}${etymKey}: ${JSON.stringify(etym, null, 4).split('\n').join('\n' + indent)}`;

    const lastBraceIdxInContent = obj.end - 1;

    let closingLineIndent = "";
    const lastLine = lines[lines.length - 1];
    const closingMatch = lastLine.match(/^(\s*)\}/);
    if (closingMatch) closingLineIndent = closingMatch[1];
    else closingLineIndent = indent.length >= 4 ? indent.substring(0, indent.length - 4) : "";

    const before = fullContent.slice(0, lastBraceIdxInContent).trimEnd();
    const after = fullContent.slice(obj.end);

    return before + etymString + "\n" + closingLineIndent + "}" + after;
}

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) processDir(fullPath);
        else if (file.endsWith('.js') && !['alphabets.js', 'translations.js', 'speaking.js'].includes(file)) processFile(fullPath);
    });
}

processDir('js/data');
processDir('vocabulary');

import json

def write_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

# ==========================================
# 1. FRENCH VERBS (fr-conjugeur) -> 200+
# ==========================================
with open("apps/fr-conjugeur/data/verbs.json", "r", encoding="utf-8") as f:
    fr_v = json.load(f)

extra_fr_v = [
    ("adorer", "A1", "Aimer beaucoup.", ["détester"], "1er groupe", "avoir", "adoré", "adore", "adorais", "adorerai", "adorerais", "adore"),
    ("admettre", "A2", "Reconnaître comme vrai.", ["nier"], "3e groupe", "avoir", "admis", "admets", "admettais", "admettrai", "admettrais", "admette"),
    ("agacer", "A2", "Irriter légèrement.", ["calmer"], "1er groupe", "avoir", "agacé", "agace", "agaçais", "agacerai", "agacerais", "agace"),
    ("ajouter", "A1", "Mettre en plus.", ["enlever"], "1er groupe", "avoir", "ajouté", "ajouter", "ajoutais", "ajouterai", "ajouterais", "ajoute"),
    ("amuser", "A1", "Divertir quelqu'un.", ["ennuyer"], "1er groupe", "avoir", "amusé", "amuse", "amusais", "amuserai", "amuserais", "amuse"),
    ("apporter", "A1", "Porter vers un lieu.", ["emporter"], "1er groupe", "avoir", "apporté", "apporte", "apportais", "apporterai", "apporterais", "apporte"),
    ("apprendre", "A1", "Acquérir des connaissances.", ["oublier"], "3e groupe", "avoir", "appris", "apprends", "apprenais", "apprendrai", "apprendrais", "apprenne"),
    ("attraper", "A1", "Saisir rapidement.", ["lâcher"], "1er groupe", "avoir", "attrapé", "attrape", "attrapais", "attraperai", "attraperais", "attrape"),
    ("avancer", "A1", "Aller vers l'avant.", ["reculer"], "1er groupe", "avoir", "avancé", "avance", "avançais", "avancerai", "avancerais", "avance"),
    ("bâtir", "A2", "Construire un édifice.", ["détruire"], "2e groupe", "avoir", "bâti", "bâtis", "bâtissais", "bâtirai", "bâtirais", "bâtisse"),
    ("blesser", "A2", "Faire du mal physiquement.", ["soigner"], "1er groupe", "avoir", "blessé", "blesse", "blessais", "blesserai", "blesserais", "blesse"),
    ("boire", "A1", "Avaler un liquide.", ["manger"], "3e groupe", "avoir", "bu", "bois", "buvais", "boirai", "boirais", "boive"),
    ("brûler", "A2", "Consumer par le feu.", ["éteindre"], "1er groupe", "avoir", "brûlé", "brûle", "brûlais", "brûlerai", "brûlerais", "brûle"),
    ("casser", "A1", "Briser en morceaux.", ["réparer"], "1er groupe", "avoir", "cassé", "casse", "cassais", "casserai", "casserais", "casse"),
    ("choisir", "A1", "Prendre une option parmi d'autres.", ["rejeter"], "2e groupe", "avoir", "choisi", "choisis", "choisissais", "choisirai", "choisirais", "choisisse"),
    ("comprendre", "A1", "Saisir le sens.", ["ignorer"], "3e groupe", "avoir", "compris", "comprends", "comprenais", "comprendrai", "comprendrais", "comprenne"),
    ("construire", "A2", "Assembler pour édifier.", ["détruire"], "3e groupe", "avoir", "construit", "construis", "construisais", "construirai", "construirais", "construise"),
    ("courir", "A1", "Se déplacer rapidement à pied.", ["marcher"], "3e groupe", "avoir", "couru", "cours", "courais", "courrai", "courrais", "coure"),
    ("croire", "A1", "Tenir pour vrai.", ["douter"], "3e groupe", "avoir", "cru", "crois", "croyais", "croirai", "croirais", "croie"),
    ("défendre", "A2", "Soutenir contre une attaque.", ["attaquer"], "3e groupe", "avoir", "défendu", "défends", "défendais", "défendrai", "défendrais", "défende"),
    ("découvrir", "A2", "Trouver ce qui était caché.", ["cacher"], "3e groupe", "avoir", "découvert", "découvres", "découvrais", "découvrirai", "découvrirais", "découvre"),
    ("descendre", "A1", "Aller de haut en bas.", ["monter"], "3e groupe", "être", "descendu", "descends", "descendais", "descendrai", "descendrais", "descende"),
    ("détruire", "A2", "Démolir ou anéantir.", ["construire"], "3e groupe", "avoir", "détruit", "détruis", "détruisais", "détruirai", "détruirais", "détruise"),
    ("devoir", "A1", "Avoir une obligation.", ["pouvoir"], "3e groupe", "avoir", "dû", "dois", "devais", "devrai", "devrais", "doive"),
    ("dire", "A1", "Exprimer par des mots.", ["taire"], "3e groupe", "avoir", "dit", "dis", "disais", "dirai", "dirais", "dise"),
    ("dormir", "A1", "Être dans l'état de sommeil.", ["veiller"], "3e groupe", "avoir", "dormi", "dors", "dormais", "dormirai", "dormirais", "dorme"),
    ("écrire", "A1", "Tracer des signes.", ["lire"], "3e groupe", "avoir", "écrit", "écris", "écrivais", "écrirai", "écrirais", "écrive"),
    ("entendre", "A1", "Percevoir par l'ouïe.", ["ignorer"], "3e groupe", "avoir", "entendu", "entends", "entendais", "entendrai", "entendrais", "entende"),
    ("éteindre", "A2", "Faire cesser la lumière ou le feu.", ["allumer"], "3e groupe", "avoir", "éteint", "éteins", "éteignais", "éteindrai", "éteindrais", "éteigne"),
    ("faire", "A1", "Réaliser une action.", ["défaire"], "3e groupe", "avoir", "fait", "fais", "faisais", "ferai", "ferais", "fasse"),
    ("falloir", "A1", "Être nécessaire.", ["dispenser"], "3e groupe", "avoir", "fallu", "faut", "fallait", "faudra", "faudrait", "faille"),
    ("finir", "A1", "Arriver au terme.", ["commencer"], "2e groupe", "avoir", "fini", "finis", "finissais", "finirai", "finirais", "finisse"),
    ("lire", "A1", "Déchiffrer un texte.", ["écrire"], "3e groupe", "avoir", "lu", "lis", "lisais", "lirai", "lirais", "lise"),
    ("mettre", "A1", "Placer quelque part.", ["enlever"], "3e groupe", "avoir", "mis", "mets", "mettais", "mettrai", "mettrais", "mette"),
    ("mourir", "A1", "Cesser de vivre.", ["naître"], "3e groupe", "être", "mort", "meurs", "mourais", "mourrai", "mourrais", "meure"),
    ("naître", "A1", "Venir au monde.", ["mourir"], "3e groupe", "être", "né", "nais", "naissais", "naîtrai", "naîtrais", "naisse"),
    ("ouvrir", "A1", "Rendre accessible.", ["fermer"], "3e groupe", "avoir", "ouvert", "ouvres", "ouvrais", "ouvrirai", "ouvrirais", "ouvre"),
    ("partir", "A1", "S'en aller d'un lieu.", ["arriver"], "3e groupe", "être", "parti", "pars", "partais", "partirai", "partirais", "parte"),
    ("pouvoir", "A1", "Avoir la capacité.", ["incapable"], "3e groupe", "avoir", "pu", "peux", "pouvais", "pourrai", "pourrais", "puisse"),
    ("prendre", "A1", "Saisir ou recevoir.", ["donner"], "3e groupe", "avoir", "pris", "prends", "prenais", "prendrai", "prendrais", "prenne"),
    ("recevoir", "A1", "Obtenir ce qui est envoyé.", ["envoyer"], "3e groupe", "avoir", "reçu", "reçois", "recevais", "recevrai", "recevrais", "reçoive"),
    ("rendre", "A2", "Restituer quelque chose.", ["prendre"], "3e groupe", "avoir", "rendu", "rends", "rendais", "rendrai", "rendrais", "rende"),
    ("répondre", "A1", "Donner une réplique.", ["demander"], "3e groupe", "avoir", "répondu", "réponds", "répondais", "répondrai", "répondrais", "réponde"),
    ("réussir", "A1", "Avoir un succès.", ["échouer"], "2e groupe", "avoir", "réussi", "réussis", "réussissais", "réussirai", "réussirais", "réussisse"),
    ("savoir", "A1", "Avoir la connaissance.", ["ignorer"], "3e groupe", "avoir", "su", "sais", "savais", "saurai", "saurais", "sache"),
    ("sortir", "A1", "Aller à l'extérieur.", ["entrer"], "3e groupe", "être", "sorti", "sors", "sortais", "sortirai", "sortirais", "sorte"),
    ("suivre", "A1", "Aller derrière quelqu'un.", ["précéder"], "3e groupe", "avoir", "suivi", "suis", "suivais", "suivrai", "suivrais", "suive"),
    ("tenir", "A1", "Avoir dans la main.", ["lâcher"], "3e groupe", "avoir", "tenu", "tiens", "tenais", "tiendrai", "tiendrais", "tienne"),
    ("venir", "A1", "Se déplacer vers ici.", ["partir"], "3e groupe", "être", "venu", "viens", "venais", "viendrai", "viendrais", "vienne"),
    ("vivre", "A1", "Être en vie.", ["mourir"], "3e groupe", "avoir", "vécu", "vis", "vivais", "vivrai", "vivrais", "vive"),
    ("voir", "A1", "Percevoir par les yeux.", ["ignorer"], "3e groupe", "avoir", "vu", "vois", "voyais", "verrai", "verrais", "voie"),
    ("vouloir", "A1", "Désirer quelque chose.", ["refuser"], "3e groupe", "avoir", "voulu", "veux", "voulais", "voudrai", "voudrais", "veuille")
]

for inf, lvl, defn, ants, grp, aux, pp, p1, imp1, fut1, cond1, subj1 in extra_fr_v:
    if inf not in fr_v:
        pron = "j'" if inf[0] in "aeiouéèêh" else "je "
        fr_v[inf] = {
            "group": grp, "auxiliary": aux, "level": lvl, "definition": defn, "antonyms": ants,
            "tenses": {
                "indicatif_present": [f"{pron}{p1}", f"tu {p1}s" if not p1.endswith("s") and not p1.endswith("x") else f"tu {p1}", f"il/elle {p1[:-1] if p1.endswith('s') or p1.endswith('x') else p1}", f"nous {p1}ons", f"vous {p1}ez", f"ils/elles {p1}ent"],
                "indicatif_imparfait": [f"{pron}{imp1}", f"tu {imp1}", f"il/elle {imp1[:-1]}t", f"nous {imp1[:-2]}ions", f"vous {imp1[:-2]}iez", f"ils/elles {imp1[:-2]}aient"],
                "pc": [f"{pron}ai {pp}" if aux == "avoir" else f"je suis {pp}", f"tu as {pp}" if aux == "avoir" else f"tu es {pp}", f"il/elle a {pp}" if aux == "avoir" else f"il/elle est {pp}", f"nous avons {pp}" if aux == "avoir" else f"nous sommes {pp}s", f"vous avez {pp}" if aux == "avoir" else f"vous êtes {pp}s", f"ils/elles ont {pp}" if aux == "avoir" else f"ils/elles sont {pp}s"],
                "indicatif_futur_simple": [f"{pron}{fut1}", f"tu {fut1[:-1]}as", f"il/elle {fut1[:-1]}a", f"nous {fut1[:-1]}ons", f"vous {fut1[:-1]}ez", f"ils/elles {fut1[:-1]}ont"],
                "conditionnel_present": [f"{pron}{cond1}", f"tu {cond1}", f"il/elle {cond1[:-1]}t", f"nous {cond1[:-2]}ions", f"vous {cond1[:-2]}iez", f"ils/elles {cond1[:-2]}aient"],
                "subjonctif_present": [f"que {pron}{subj1}", f"que tu {subj1}s", f"qu'il/elle {subj1}", f"que nous {subj1}ons", f"que vous {subj1}ez", f"qu'ils/elles {subj1}nt"],
                "imperatif": [f"{p1} !", f"{p1}ons !", f"{p1}ez !"],
                "participe_passe": [pp]
            }
        }

write_json("apps/fr-conjugeur/data/verbs.json", fr_v)

print("FR Verbs total:", len(fr_v))


# ==========================================
# 2. ITALIAN NOUNS (it-genere) -> 200+
# ==========================================
with open("apps/it-genere/data/nouns.json", "r", encoding="utf-8") as f:
    it_n = json.load(f)

extra_it_n = [
    ("albero", "A1", "Pianta legnosa d'alto fusto.", ["erba"], "il", "dell'albero", "all'albero", "l'albero", "dall'albero", "in albero", "gli alberi", "maschile"),
    ("animale", "A1", "Essere vivente dotato di sensibilità.", ["pianta"], "l'", "dell'animale", "all'animale", "l'animale", "dall'animale", "in animale", "gli animali", "maschile"),
    ("anno", "A1", "Periodo di dodici mesi.", ["secolo"], "l'", "dell'anno", "all'anno", "l'anno", "dall'anno", "in anno", "gli anni", "maschile"),
    ("arte", "A1", "Attività umana creativa.", ["natura"], "l'", "dell'arte", "all'arte", "l'arte", "dall'arte", "in arte", "le arti", "femminile"),
    ("attore", "A1", "Chi recita in uno spettacolo.", ["spettatore"], "l'", "dell'attore", "all'attore", "l'attore", "dall'attore", "in attore", "gli attori", "maschile"),
    ("autunno", "A1", "Stagione tra estate e inverno.", ["primavera"], "l'", "dell'autunno", "all'autunno", "l'autunno", "dall'autunno", "in autunno", "gli autunni", "maschile"),
    ("bagno", "A1", "Stanza per l'igiene personale.", ["cucina"], "il", "del bagno", "al bagno", "il bagno", "dal bagno", "in bagno", "i bagni", "maschile"),
    ("bambino", "A1", "Persona nell'età dell'infanzia.", ["adulto"], "il", "del bambino", "al bambino", "il bambino", "dal bambino", "in bambino", "i bambini", "maschile"),
    ("banca", "A1", "Istituto di credito.", ["negozio"], "la", "della banca", "alla banca", "la banca", "dalla banca", "in banca", "le banche", "femminile"),
    ("bar", "A1", "Locale pubblico di ristoro.", ["casa"], "il", "del bar", "al bar", "il bar", "dal bar", "in bar", "i bar", "maschile"),
    ("barca", "A1", "Piccola imbarcazione.", ["nave"], "la", "della barca", "alla barca", "la barca", "dalla barca", "in barca", "le barche", "femminile"),
    ("bicicletta", "A1", "Veicolo a due ruote.", ["automobile"], "la", "della bicicletta", "alla bicicletta", "la bicicletta", "dalla bicicletta", "in bicicletta", "le biciclette", "femminile"),
    ("bottiglia", "A1", "Recipiente per liquidi.", ["bicchiere"], "la", "della bottiglia", "alla bottiglia", "la bottiglia", "dalla bottiglia", "in bottiglia", "le bottiglie", "femminile"),
    ("campagna", "A1", "Territorio aperto coltivato.", ["città"], "la", "della campagna", "alla campagna", "la campagna", "dalla campagna", "in campagna", "le campagne", "femminile"),
    ("capitale", "A1", "Città sede del governo.", ["provincia"], "la", "della capitale", "alla capitale", "la capitale", "dalla capitale", "in capitale", "le capitali", "femminile"),
    ("carne", "A1", "Alimento di origine animale.", ["pesce"], "la", "della carne", "alla carne", "la carne", "dalla carne", "in carne", "le carni", "femminile"),
    ("centro", "A1", "Parte centrale di una città.", ["periferia"], "il", "del centro", "al centro", "il centro", "dal centro", "in centro", "i centri", "maschile"),
    ("cinema", "A1", "Locale per proiezioni di film.", ["teatro"], "il", "del cinema", "al cinema", "il cinema", "dal cinema", "in cinema", "i cinema", "maschile"),
    ("classe", "A1", "Gruppo di studenti.", ["scuola"], "la", "della classe", "alla classe", "la classe", "dalla classe", "in classe", "le classi", "femminile"),
    ("colore", "A1", "Percezione visiva della luce.", ["bianco"], "il", "del colore", "al colore", "il colore", "dal colore", "in colore", "i colori", "maschile"),
    ("concerto", "A1", "Esecuzione di musica dal vivo.", ["silenzio"], "il", "del concerto", "al concerto", "il concerto", "dal concerto", "in concerto", "i concerti", "maschile"),
    ("festa", "A1", "Celebrante solenne o lieta.", ["lavoro"], "la", "della festa", "alla festa", "la festa", "dalla festa", "in festa", "le feste", "femminile"),
    ("filosofia", "A2", "Studio dei problemi fondamentali.", ["scienza"], "la", "della filosofia", "alla filosofia", "la filosofia", "dalla filosofia", "in filosofia", "le filosofie", "femminile"),
    ("fiore", "A1", "Parte colorata delle piante.", ["foglia"], "il", "del fiore", "al fiore", "il fiore", "dal fiore", "in fiore", "i fiori", "maschile"),
    ("fiume", "A1", "Corso d'acqua continuo.", ["mare"], "il", "del fiume", "al fiume", "il fiume", "dal fiume", "in fiume", "i fiumi", "maschile")
]

for noun, lvl, defn, ants, art, gen_, dat_, acc_, abl_, loc_, plur_, gen_str in extra_it_n:
    if noun not in it_n:
        it_n[noun] = {
            "gender": gen_str, "article": art, "level": lvl, "definition": defn, "antonyms": ants,
            "cases": {
                "nom_sing": f"{art} {noun}" if not art.endswith("'") else f"{art}{noun}",
                "gen_sing": gen_, "dat_sing": dat_, "acc_sing": acc_, "abl_sing": abl_, "loc_sing": loc_,
                "nom_plur": plur_
            }
        }

write_json("apps/it-genere/data/nouns.json", it_n)

print("IT Nouns total:", len(it_n))


# ==========================================
# 3. ITALIAN VERBS (it-coniugatore) -> 200+
# ==========================================
with open("apps/it-coniugatore/data/verbs.json", "r", encoding="utf-8") as f:
    it_v = json.load(f)

extra_it_v = [
    ("abitare", "A1", "Vivere in un luogo.", ["traslocare"], "are", "abito", "abiti", "abita", "abitiamo", "abitate", "abitano", "ho abitato", "abitavo", "abiterò", "abiterei"),
    ("amare", "A1", "Provare un forte affetto.", ["odiare"], "are", "amo", "ami", "ama", "amiamo", "amate", "amano", "ho amato", "amavo", "amerò", "amerei"),
    ("andare", "A1", "Muoversi verso un luogo.", ["venire"], "are", "vado", "vai", "va", "andiamo", "andate", "vanno", "sono andato", "andavo", "andrò", "andrei"),
    ("aprire", "A1", "Rendere accessibile.", ["chiudere"], "ire", "apro", "apri", "apre", "apriamo", "aprite", "aprono", "ho aperto", "aprivo", "aprirò", "aprirei"),
    ("arrivare", "A1", "Giungere a destinazione.", ["partire"], "are", "arrivo", "arrivi", "arriva", "arriviamo", "arrivate", "arrivano", "sono arrivato", "arrivavo", "arriverò", "arriverei"),
    ("bere", "A1", "Inghiottire un liquido.", ["mangiare"], "ere", "bevo", "bevi", "beve", "beviamo", "bevete", "bevono", "ho bevuto", "bevevo", "berrò", "berrei"),
    ("cadere", "A1", "Finire a terra.", ["alzarsi"], "ere", "cado", "cadi", "cade", "cadiamo", "cadete", "cadono", "sono caduto", "cadevo", "cadrò", "cadrei"),
    ("capire", "A1", "Comprendere il significato.", ["fraintendere"], "ire", "capisco", "capisci", "capisce", "capiamo", "capite", "capiscono", "ho capito", "capivo", "capirò", "capirei"),
    ("cercare", "A1", "Tentare di trovare.", ["trovare"], "are", "cerco", "cerchi", "cerca", "cerchiamo", "cercate", "cercano", "ho cercato", "cercavo", "cercherò", "cercherei"),
    ("chiamare", "A1", "Pronunciare un nome.", ["ignorare"], "are", "chiamo", "chiami", "chiama", "chiamiamo", "chiamate", "chiamano", "ho chiamato", "chiamavo", "chiamerò", "chiamerei"),
    ("chiedere", "A1", "Formulare una domanda.", ["rispondere"], "ere", "chiedo", "chiedi", "chiede", "chiediamo", "chiedete", "chiedono", "ho chiesto", "chiedevo", "chiederò", "chiederei"),
    ("chiudere", "A1", "Barrare il passaggio.", ["aprire"], "ere", "chiudo", "chiudi", "chiude", "chiudiamo", "chiudete", "chiudono", "ho chiuso", "chiudevo", "chiuderò", "chiuderei"),
    ("cominciare", "A1", "Dare inizio.", ["finire"], "are", "comincio", "cominci", "comincia", "cominciamo", "cominciate", "cominciano", "ho cominciato", "cominciavo", "comincerò", "comincerei"),
    ("comprare", "A1", "Acquistare con denaro.", ["vendere"], "are", "compro", "compri", "compra", "compriamo", "comprate", "comprano", "ho comprato", "compravo", "comprerò", "comprerei"),
    ("conoscere", "A1", "Avere familiarità.", ["ignorare"], "ere", "conosco", "conosci", "conosce", "conosciamo", "conoscete", "conoscono", "ho conosciuto", "conoscevo", "conoscerò", "conoscerei"),
    ("correre", "A1", "Avanzare velocemente.", ["camminare"], "ere", "corro", "corri", "corre", "corriamo", "correte", "corrono", "ho corso", "correvo", "correrò", "correrei"),
    ("credere", "A1", "Ritenere vero.", ["dubitare"], "ere", "credo", "credi", "crede", "crediamo", "credete", "credono", "ho creduto", "credevo", "crederò", "crederei"),
    ("dare", "A1", "Offrire a qualcuno.", ["prendere"], "are", "do", "dai", "dà", "diamo", "date", "danno", "ho dato", "davo", "darò", "darei"),
    ("decisione", "A2", "Scelta ponderata.", ["esitazione"], "are", "decido", "decidi", "decide", "decidiamo", "decidete", "decidono", "ho deciso", "decidevo", "deciderò", "deciderei"),
    ("dire", "A1", "Esprimere con parole.", ["tacere"], "ere", "dico", "dici", "dice", "diciamo", "dite", "dicono", "ho detto", "dicevo", "dirò", "direi"),
    ("dovere", "A1", "Avere l'obbligo.", ["potere"], "ere", "devo", "devi", "deve", "dobbiamo", "dovete", "devono", "ho dovuto", "dovevo", "dovrò", "dovrei"),
    ("entrari", "A1", "Passare all'interno.", ["uscire"], "are", "entro", "entri", "entra", "entriamo", "entrate", "entrano", "sono entrato", "entravo", "entrerò", "entrerei"),
    ("essere", "A1", "Esistere o trovarsi.", ["mancare"], "ere", "sono", "sei", "è", "siamo", "siete", "sono", "sono stato", "ero", "sarò", "sarei"),
    ("fare", "A1", "Compiere un'azione.", ["disfare"], "are", "faccio", "fai", "fa", "facciamo", "fate", "fanno", "ho fatto", "facevo", "farò", "farei"),
    ("finire", "A1", "Giungere al termine.", ["cominciare"], "ire", "finisco", "finisci", "finisce", "finiamo", "finite", "finiscono", "ho finito", "finivo", "finirò", "finirei"),
    ("guardare", "A1", "Fissare con gli occhi.", ["ignorare"], "are", "guardo", "guardi", "guarda", "guardiamo", "guardate", "guardano", "ho guardato", "guardavo", "guarderò", "guarderei"),
    ("lasciare", "A1", "Abbandonare o permettere.", ["prendere"], "are", "lascio", "lasci", "lascia", "lasciamo", "lasciate", "lasciano", "ho lasciato", "lasciavo", "lascerò", "lascerei"),
    ("leggere", "A1", "Scorrere un testo.", ["scrivere"], "ere", "leggo", "leggi", "legge", "leggiamo", "leggete", "leggono", "ho letto", "leggevo", "leggerò", "leggerei"),
    ("mangiare", "A1", "Nutrirsi di cibo.", ["digiunare"], "are", "mangio", "mangi", "mangia", "mangiamo", "mangiate", "mangiano", "ho mangiato", "mangiavo", "mangerò", "mangerei"),
    ("mettere", "A1", "Posizionare qualcosa.", ["togliere"], "ere", "metto", "metti", "mette", "mettiamo", "mettete", "mettono", "ho messo", "mettevo", "metterò", "metterei"),
    ("morire", "A1", "Cessare di vivere.", ["nascere"], "ire", "muoio", "muori", "muore", "moriamo", "morite", "muoiono", "sono morto", "morivo", "morirò", "morirei"),
    ("nascere", "A1", "Venire al mondo.", ["morire"], "ere", "nasco", "nasci", "nasce", "nasciamo", "nascete", "nascono", "sono nato", "nascevo", "nascerò", "nascerei"),
    ("pagare", "A1", "Versare denaro.", ["incassare"], "are", "pago", "paghi", "paga", "paghiamo", "pagate", "pagano", "ho pagato", "pagavo", "pagherò", "pagherei"),
    ("parlare", "A1", "Esprimersi a voce.", ["tacere"], "are", "parlo", "parli", "parla", "parliamo", "parlate", "parlano", "ho parlato", "parlavo", "parlerò", "parlerei"),
    ("partire", "A1", "Andare via.", ["arrivare"], "ire", "parto", "parti", "parte", "partiamo", "partite", "partono", "sono partito", "partivo", "partirò", "partirei"),
    ("piacere", "A1", "Risultare gradito.", ["dispiacere"], "ere", "piaccio", "piaci", "piace", "piacciamo", "piacete", "piacciono", "è piaciuto", "piacevo", "piacerò", "piacerei"),
    ("potere", "A1", "Avere la possibilità.", ["incapace"], "ere", "posso", "puoi", "può", "possiamo", "potete", "possono", "ho potuto", "potevo", "potrò", "potrei"),
    ("prendere", "A1", "Afferrare o ricevere.", ["dare"], "ere", "prendo", "prendi", "prende", "prendiamo", "prendete", "prendono", "ho preso", "prendevo", "prenderò", "prenderei"),
    ("rimanere", "A1", "Restare in un luogo.", ["partire"], "ere", "rimango", "rimani", "rimane", "rimaniamo", "rimanete", "rimangono", "sono rimasto", "rimanevo", "rimarrò", "rimarrei"),
    ("sapere", "A1", "Avere conoscenza.", ["ignorare"], "ere", "so", "sai", "sa", "sappiamo", "sapete", "sanno", "ho saputo", "sapevo", "saprò", "saprei"),
    ("scrivere", "A1", "Tracciare caratteri.", ["leggere"], "ere", "scrivo", "scrivi", "scrive", "scriviamo", "scrivete", "scrivono", "ho scritto", "scrivevo", "scriverò", "scriverei"),
    ("sentire", "A1", "Percepire coi sensi.", ["ignorare"], "ire", "sento", "senti", "sente", "sentiamo", "sentite", "sentono", "ho sentito", "sentivo", "sentirò", "sentirei"),
    ("stare", "A1", "Trovarsi in una condizione.", ["andare"], "are", "sto", "stai", "sta", "stiamo", "state", "stanno", "sono stato", "stavo", "starò", "starei"),
    ("uscire", "A1", "Andare all'esterno.", ["entrare"], "ire", "esco", "esci", "esce", "usciamo", "uscite", "escono", "sono uscito", "uscivo", "uscirò", "uscirei"),
    ("vedere", "A1", "Percepire con gli occhi.", ["ignorare"], "ere", "vedo", "vedi", "vede", "vediamo", "vedete", "vedono", "ho visto", "vedevo", "vedrò", "vedrei"),
    ("venire", "A1", "Muoversi verso chi parla.", ["andare"], "ire", "vengo", "vieni", "viene", "veniamo", "venite", "vengono", "sono venuto", "venivo", "verrò", "verrei"),
    ("vivere", "A1", "Essere in vita.", ["morire"], "ere", "vivo", "vivi", "vive", "viviamo", "vivete", "vivono", "ho vissuto", "vivevo", "vivrò", "vivrei"),
    ("volere", "A1", "Desiderare fortemente.", ["rifiutare"], "ere", "voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono", "ho voluto", "volevo", "vorrò", "vorrei")
]

for inf, lvl, defn, ants, grp, pres_1s, pres_2s, pres_3s, pres_1p, pres_2p, pres_3p, pass_c, imp_1s, fut_1s, cond_1s in extra_it_v:
    if inf not in it_v:
        it_v[inf] = {
            "group": grp, "auxiliary": "avere" if "ho" in pass_c else "essere", "level": lvl, "definition": defn, "antonyms": ants,
            "tenses": {
                "pres": [f"io {pres_1s}", f"tu {pres_2s}", f"lui/lei {pres_3s}", f"noi {pres_1p}", f"voi {pres_2p}", f"loro {pres_3p}"],
                "pass_comp": [f"io {pass_c}", f"tu {pass_c.replace('ho', 'hai').replace('sono', 'sei')}", f"lui/lei {pass_c.replace('ho', 'ha').replace('sono', 'è')}", f"noi {pass_c.replace('ho', 'abbiamo').replace('sono', 'siamo')}", f"voi {pass_c.replace('ho', 'avete').replace('sono', 'siete')}", f"loro {pass_c.replace('ho', 'hanno').replace('sono', 'sono')}"],
                "impf": [f"io {imp_1s}", f"tu {imp_1s[:-1]}vi", f"lui/lei {imp_1s[:-1]}va", f"noi {imp_1s[:-1]}vamo", f"voi {imp_1s[:-1]}vate", f"loro {imp_1s[:-1]}vano"],
                "fut": [f"io {fut_1s}", f"tu {fut_1s[:-1]}rai", f"lui/lei {fut_1s[:-1]}rà", f"noi {fut_1s[:-1]}remo", f"voi {fut_1s[:-1]}rete", f"loro {fut_1s[:-1]}ranno"],
                "cond": [f"io {cond_1s}", f"tu {cond_1s[:-1]}resti", f"lui/lei {cond_1s[:-1]}rebbe", f"noi {cond_1s[:-1]}remmo", f"voi {cond_1s[:-1]}reste", f"loro {cond_1s[:-1]}rebbero"]
            }
        }

write_json("apps/it-coniugatore/data/verbs.json", it_v)

print("IT Verbs total:", len(it_v))

# ==========================================
# 4. RUSSIAN VERBS & NOUNS (ru-spryazhenie / ru-rod-padezhi) -> 200+
# ==========================================
with open("apps/ru-spryazhenie/data/verbs.json", "r", encoding="utf-8") as f:
    ru_v = json.load(f)

extra_ru_v = [
    ("брать", "A1", "Брать руками.", ["давать"], "1-е спряжение", "беру", "берёшь", "берёт", "берём", "берёте", "берут", "брал", "буду брать"),
    ("видеть", "A1", "Воспринимать зрением.", ["игнорировать"], "2-е спряжение (искл.)", "вижу", "видишь", "видит", "видим", "видите", "видят", "видел", "буду видеть"),
    ("гулять", "A1", "Совершать прогулку.", ["сидеть"], "1-е спряжение", "гуляю", "гуляешь", "гуляет", "гуляем", "гуляете", "гуляют", "гулял", "буду гулять"),
    ("давать", "A1", "Передавать в руки.", ["брать"], "1-е спряжение", "даю", "даёшь", "даёт", "даём", "даёте", "дают", "давал", "буду давать"),
    ("делать", "A1", "Совершать работу.", ["бездельничать"], "1-е спряжение", "делаю", "делаешь", "делает", "делаем", "делаете", "делают", "делал", "буду делать"),
    ("думать", "A1", "Размышлять головой.", ["забывать"], "1-е спряжение", "думаю", "думаешь", "думает", "думаем", "думаете", "думают", "думал", "буду думать"),
    ("есть", "A1", "Принимать пищу.", ["голодать"], "разносклоняемое", "ем", "ешь", "ест", "едим", "едите", "едят", "ел", "буду есть"),
    ("жить", "A1", "Существовать.", ["умирать"], "1-е спряжение", "живу", "живёшь", "живёт", "живем", "живёте", "живут", "жил", "буду жить"),
    ("знать", "A1", "Иметь сведение.", ["игнорировать"], "1-е спряжение", "знаю", "знаешь", "знает", "знаем", "знаете", "знают", "знал", "буду знать"),
    ("идти", "A1", "Двигаться пешком.", ["стоять"], "1-е спряжение", "иду", "идёшь", "идёт", "идём", "идёте", "идут", "шёл", "буду идти"),
    ("любить", "A1", "Испытывать любовь.", ["ненавидеть"], "2-е спряжение", "люблю", "любишь", "любит", "любим", "любите", "любят", "любил", "буду любить"),
    ("пить", "A1", "Принимать жидкость.", ["есть"], "1-е спряжение", "пью", "пьёшь", "пьёт", "пьём", "пьёте", "пьют", "пил", "буду пить"),
    ("понимать", "A1", "Осознавать смысл.", ["путать"], "1-е спряжение", "понимаю", "понимаешь", "понимает", "понимаем", "понимаете", "понимают", "понимал", "буду понимать"),
    ("работать", "A1", "Трудиться.", ["отдыхать"], "1-е спряжение", "работаю", "работаешь", "работает", "работаем", "работаете", "работают", "работал", "буду работать"),
    ("спать", "A1", "Находиться в сне.", ["бодрствовать"], "2-е спряжение", "сплю", "спишь", "спит", "спим", "спите", "спят", "спал", "буду спать"),
    ("читать", "A1", "Воспринимать текст.", ["писать"], "1-е спряжение", "читаю", "читаешь", "читает", "читаем", "читаете", "читают", "читал", "буду читать")
]

for inf, lvl, defn, ants, grp, p1, p2, p3, p4, p5, p6, past, fut in extra_ru_v:
    if inf not in ru_v:
        ru_v[inf] = {
            "group": grp, "aspect": "несовершенный", "level": lvl, "definition": defn, "antonyms": ants,
            "tenses": {
                "pres": [f"я {p1}", f"ты {p2}", f"он/она {p3}", f"мы {p4}", f"вы {p5}", f"они {p6}"],
                "past": [f"он {past}", f"она {past}а" if not past.endswith("л") else f"она {past[:-1]}ла", f"оно {past}о" if not past.endswith("л") else f"оно {past[:-1]}ло", f"они {past}и" if not past.endswith("л") else f"они {past[:-1]}ли"],
                "fut": [f"я budu {inf}", f"ты будешь {inf}", f"он/она будет {inf}", f"мы будем {inf}", f"вы будете {inf}", f"они будут {inf}"]
            }
        }

write_json("apps/ru-spryazhenie/data/verbs.json", ru_v)

print("RU Verbs total:", len(ru_v))

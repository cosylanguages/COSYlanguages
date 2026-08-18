import json, os

print("🚀 Expanding Reference App Lexicons to 200+ curated items per app...")

# Helper
def write_json(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"  ✅ {path}: {len(data)} items")

# 1. French Verbs (fr-conjugeur)
with open("apps/fr-conjugeur/data/verbs.json", "r", encoding="utf-8") as f:
    fr_v = json.load(f)

# Add 100 more regular -er, -ir, and 3rd group verbs
vowels = ('a', 'e', 'i', 'o', 'u', 'y', 'é', 'è', 'ê', 'h')

extra_fr_v = [
    ("accorder", "1er groupe", "A2", "Attribuer ou donner son accord.", ["refuser"], "accord", "accordé", "avoir"),
    ("accuser", "1er groupe", "A2", "Imputer une faute à quelqu'un.", ["innocenter"], "accus", "accusé", "avoir"),
    ("acheter", "1er groupe", "A1", "Acquérir un bien contre paiement.", ["vendre"], "achèt", "acheté", "avoir"),
    ("adorer", "1er groupe", "A1", "Aimer passionnément.", ["détester"], "ador", "adoré", "avoir"),
    ("affirmer", "1er groupe", "A2", "Déclarer positivement comme vrai.", ["nier"], "affirm", "affirmé", "avoir"),
    ("ajouter", "1er groupe", "A1", "Mettre en plus.", ["retirer"], "ajout", "ajouté", "avoir"),
    ("allumer", "1er groupe", "A1", "Faire brûler ou mettre en marche la lumière.", ["éteindre"], "allum", "allumé", "avoir"),
    ("apporter", "1er groupe", "A1", "Porter quelque chose vers un lieu.", ["emporter"], "apport", "apporté", "avoir"),
    ("approuver", "1er groupe", "A2", "Donner un avis favorable.", ["blâmer"], "approuv", "approuvé", "avoir"),
    ("avancer", "1er groupe", "A1", "Aller vers l'avant.", ["reculer"], "avanc", "avancé", "avoir"),
    ("blesser", "1er groupe", "A2", "Faire du mal physiquement.", ["soigner"], "bless", "blessé", "avoir"),
    ("calmer", "1er groupe", "A2", "Rendre calme.", ["agiter"], "calm", "calmé", "avoir"),
    ("changer", "1er groupe", "A1", "Rendre ou devenir différent.", ["conserver"], "chang", "changé", "avoir"),
    ("charger", "1er groupe", "A2", "Mettre une charge sur un véhicule.", ["décharger"], "charg", "chargé", "avoir"),
    ("chauffer", "1er groupe", "A1", "Rendre chaud.", ["refroidir"], "chauff", "chauffé", "avoir"),
    ("commander", "1er groupe", "A2", "Ordonner ou passer une commande.", ["obéir"], "command", "commandé", "avoir"),
    ("comparer", "1er groupe", "A2", "Examiner les ressemblances.", ["séparer"], "compar", "comparé", "avoir"),
    ("confirmer", "1er groupe", "A2", "Rendre certain ou officiel.", ["annuler"], "confirm", "confirmé", "avoir"),
    ("considérer", "1er groupe", "A2", "Examiner attentivement.", ["ignorer"], "considèr", "considéré", "avoir"),
    ("continuer", "1er groupe", "A1", "Poursuivre ce qui est commencé.", ["arrêter"], "continu", "continué", "avoir"),
    ("couper", "1er groupe", "A1", "Séparer avec un instrument tranchant.", ["coller"], "coup", "coupé", "avoir"),
    ("coûter", "1er groupe", "A1", "Avoir un prix.", ["rapporter"], "coût", "coûté", "avoir"),
    ("danser", "1er groupe", "A1", "Exécuter des mouvements rythmés.", ["rester immobile"], "dans", "dansé", "avoir"),
    ("déclarer", "1er groupe", "A2", "Faire connaître officiellement.", ["cacher"], "déclar", "déclaré", "avoir"),
    ("déjeuner", "1er groupe", "A1", "Prendre le repas de midi.", ["jeûner"], "déjeun", "déjeuné", "avoir"),
    ("dîner", "1er groupe", "A1", "Prendre le repas du soir.", ["jeûner"], "dîn", "dîné", "avoir"),
    ("discuter", "1er groupe", "A1", "Échanger des idées.", ["se taire"], "discut", "discuté", "avoir"),
    ("douter", "1er groupe", "A2", "Être incertain de quelque chose.", ["croire"], "dout", "douté", "avoir"),
    ("éclairer", "1er groupe", "A2", "Rendre lumineux.", ["obscurcir"], "éclair", "éclairé", "avoir"),
    ("écouter", "1er groupe", "A1", "Prêter l'oreille.", ["ignorer"], "écout", "écouté", "avoir"),
    ("embrasser", "1er groupe", "A1", "Donner un baiser.", ["repousser"], "embrass", "embrassé", "avoir"),
    ("emmener", "1er groupe", "A1", "Mener avec soi.", ["ramener"], "emmèn", "emmené", "avoir"),
    ("emprunter", "1er groupe", "A2", "Obtenir à titre de prêt.", ["prêter"], "emprunt", "emprunté", "avoir"),
    ("enseigner", "1er groupe", "A2", "Transmettre des connaissances.", ["apprendre"], "enseign", "enseigné", "avoir"),
    ("entrer", "1er groupe", "A1", "Pénétrer dans un lieu.", ["sortir"], "entr", "entré", "être"),
    ("envoyer", "1er groupe", "A1", "Faire parvenir un message.", ["recevoir"], "envoi", "envoyé", "avoir"),
    ("espérer", "1er groupe", "A2", "Attendre avec confiance.", ["désespérer"], "espèr", "espéré", "avoir"),
    ("éviter", "1er groupe", "A2", "Chercher à ne pas subir.", ["affronter"], "évit", "évité", "avoir"),
    ("fermer", "1er groupe", "A1", "Mettre obstacle à l'ouverture.", ["ouvrir"], "ferm", "fermé", "avoir"),
    ("frapper", "1er groupe", "A1", "Colpiter avec force.", ["caresser"], "frapp", "frappé", "avoir"),
    ("fumer", "1er groupe", "A1", "Aspirer la fumée du tabac.", ["s'abstenir"], "fum", "fumé", "avoir"),
    ("garder", "1er groupe", "A1", "Conserver en sa possession.", ["jeter"], "gard", "gardé", "avoir"),
    ("glisser", "1er groupe", "A2", "Se déplacer par un mouvement continu.", ["accrocher"], "gliss", "glissé", "avoir"),
    ("habiter", "1er groupe", "A1", "Avoir sa demeure.", ["déménager"], "habit", "habité", "avoir"),
    ("hésiter", "1er groupe", "A2", "Être indécis.", ["décider"], "hésit", "hésité", "avoir"),
    ("ignorer", "1er groupe", "A2", "Ne pas savoir.", ["savoir"], "ignor", "ignoré", "avoir"),
    ("imaginer", "1er groupe", "A2", "Représenter en esprit.", ["observer"], "imagin", "imaginé", "avoir"),
    ("importer", "1er groupe", "A2", "Faire entrer des marchandises.", ["exporter"], "import", "importé", "avoir"),
    ("indiquer", "1er groupe", "A1", "Désigner ou faire connaître.", ["cacher"], "indiqu", "indiqué", "avoir"),
    ("inquiéter", "1er groupe", "A2", "Troubler la tranquillité.", ["rassurer"], "inquièt", "inquiété", "avoir"),
    ("insister", "1er groupe", "A2", "Maintenir avec force une demande.", ["céder"], "insist", "insisté", "avoir"),
    ("installer", "1er groupe", "A1", "Mettre en place.", ["enlever"], "install", "installé", "avoir"),
    ("inviter", "1er groupe", "A1", "Prier de venir.", ["chasser"], "invit", "invité", "avoir"),
    ("jeter", "1er groupe", "A1", "Lancer au loin.", ["ramasser"], "jèt", "jeté", "avoir"),
    ("jouer", "1er groupe", "A1", "Se divertir.", ["travailler"], "jou", "joué", "avoir"),
    ("juger", "1er groupe", "A2", "Porter un jugement.", ["absoudre"], "jug", "jugé", "avoir"),
    ("laisser", "1er groupe", "A1", "Permettre ou abandonner.", ["garder"], "laiss", "laissé", "avoir"),
    ("lever", "1er groupe", "A1", "Déplacer vers le haut.", ["baisser"], "lèv", "levé", "avoir"),
    ("limiter", "1er groupe", "A2", "Fixer des bornes.", ["étendre"], "limit", "limité", "avoir"),
    ("louer", "1er groupe", "A1", "Accorder l'usage contre paiement.", ["vendre"], "lou", "loué", "avoir"),
    ("manquer", "1er groupe", "A1", "Faire défaut.", ["suffire"], "manqu", "manqué", "avoir"),
    ("marcher", "1er groupe", "A1", "Se déplacer à pied.", ["courir"], "march", "marché", "avoir"),
    ("mener", "1er groupe", "A2", "Conduire vers un lieu.", ["suivre"], "mèn", "mené", "avoir"),
    ("mesurer", "1er groupe", "A2", "Déterminer les dimensions.", ["estimer"], "mesur", "mesuré", "avoir"),
    ("monter", "1er groupe", "A1", "S'élever.", ["descendre"], "mont", "monté", "être"),
    ("montrer", "1er groupe", "A1", "Faire voir.", ["cacher"], "montr", "montré", "avoir"),
    ("nettoyer", "1er groupe", "A1", "Rendre propre.", ["salir"], "nettoy", "nettoyé", "avoir"),
    ("nommer", "1er groupe", "A2", "Désigner par un nom.", ["oublier"], "nomm", "nommé", "avoir"),
    ("occuper", "1er groupe", "A2", "Remplir un espace ou du temps.", ["libérer"], "occup", "occupé", "avoir"),
    ("oser", "1er groupe", "A2", "Avoir le courage de faire.", ["craindre"], "os", "osé", "avoir"),
    ("oublier", "1er groupe", "A1", "Perdre le souvenir.", ["se rappeler"], "oubli", "oublié", "avoir"),
    ("passer", "1er groupe", "A1", "S'en aller au-delà.", ["rester"], "pass", "passé", "avoir"),
    ("penser", "1er groupe", "A1", "Avoir une réflexion.", ["oublier"], "pens", "pensé", "avoir"),
    ("pleurer", "1er groupe", "A1", "Verser des larmes.", ["rire"], "pleur", "pleuré", "avoir"),
    ("porter", "1er groupe", "A1", "Soutenir un poids.", ["poser"], "port", "porté", "avoir"),
    ("poser", "1er groupe", "A1", "Placer sur une surface.", ["lever"], "pos", "posé", "avoir"),
    ("pousser", "1er groupe", "A1", "Exercer une pression.", ["tirer"], "pouss", "poussé", "avoir"),
    ("préférer", "1er groupe", "A1", "Aimer mieux.", ["détester"], "préfèr", "préféré", "avoir"),
    ("préparer", "1er groupe", "A1", "Disposer à l'avance.", ["improviser"], "prépar", "préparé", "avoir"),
    ("présenter", "1er groupe", "A1", "Faire connaître.", ["cacher"], "présent", "présenté", "avoir"),
    ("prêter", "1er groupe", "A2", "Donner temporairement.", ["emprunter"], "prêt", "prêté", "avoir"),
    ("prier", "1er groupe", "A2", "Demander avec ferveur.", ["ordonner"], "pri", "prié", "avoir"),
    ("quitter", "1er groupe", "A1", "Partir de quelque part.", ["rester"], "quitt", "quitté", "avoir"),
    ("raconter", "1er groupe", "A1", "Dire un récit.", ["taire"], "racont", "raconté", "avoir"),
    ("ramasser", "1er groupe", "A2", "Prendre à terre.", ["jeter"], "ramass", "ramassé", "avoir"),
    ("rappeler", "1er groupe", "A2", "Remettre en mémoire.", ["oublier"], "rappel", "rappelé", "avoir"),
    ("refuser", "1er groupe", "A2", "Ne pas accepter.", ["accepter"], "refus", "refusé", "avoir"),
    ("regarder", "1er groupe", "A1", "Fixer des yeux.", ["ignorer"], "regard", "regardé", "avoir"),
    ("regretter", "1er groupe", "A2", "Avoir de la peine de l'absence.", ["se réjouir"], "regrett", "regretté", "avoir"),
    ("remplacer", "1er groupe", "A2", "Mettre à la place de.", ["conserver"], "remplac", "remplacé", "avoir"),
    ("rencontrer", "1er groupe", "A1", "Trouver sur son chemin.", ["éviter"], "rencontr", "rencontré", "avoir"),
    ("réparer", "1er groupe", "A2", "Remettre en bon état.", ["casser"], "répar", "réparé", "avoir"),
    ("répéter", "1er groupe", "A1", "Redire plusieurs fois.", ["se taire"], "répèt", "répété", "avoir"),
    ("reposer", "1er groupe", "A1", "Rendre des forces par le calme.", ["fatiguer"], "repos", "reposé", "avoir"),
    ("ressembler", "1er groupe", "A2", "Présenter des similitudes.", ["différer"], "ressembl", "ressemblé", "avoir"),
    ("rester", "1er groupe", "A1", "Demeurer en un lieu.", ["partir"], "rest", "resté", "être"),
    ("retourner", "1er groupe", "A1", "Revenir au point de départ.", ["partir"], "retourn", "retourné", "être"),
    ("rêver", "1er groupe", "A1", "Produire des images nocturnes.", ["observer"], "rêv", "rêvé", "avoir"),
    ("rouler", "1er groupe", "A1", "Se déplacer sur des roues.", ["s'arrêter"], "roul", "roulé", "avoir"),
    ("sauter", "1er groupe", "A1", "Franchir d'un bond.", ["s'asseoir"], "saut", "sauté", "avoir"),
    ("sauver", "1er groupe", "A2", "Préserver du danger.", ["tuer"], "sauv", "sauvé", "avoir"),
    ("sembler", "1er groupe", "A2", "Avoir l'apparence de.", ["être avéré"], "sembl", "semblé", "avoir"),
    ("séparer", "1er groupe", "A2", "Mettre à part.", ["unir"], "sépar", "séparé", "avoir"),
    ("signaler", "1er groupe", "A2", "Attirer l'attention sur.", ["cacher"], "signal", "signalé", "avoir"),
    ("soigner", "1er groupe", "A2", "Procurer des soins.", ["blesser"], "soign", "soigné", "avoir"),
    ("souhaiter", "1er groupe", "A2", "Désirer la réalisation.", ["redouter"], "souhait", "souhaité", "avoir"),
    ("téléphoner", "1er groupe", "A1", "Appeler au téléphone.", ["écrire"], "téléphon", "téléphoné", "avoir"),
    ("tirer", "1er groupe", "A1", "Amener vers soi.", ["pousser"], "tir", "tiré", "avoir"),
    ("tomber", "1er groupe", "A1", "Chuter.", ["se relever"], "tomb", "tombé", "être"),
    ("toucher", "1er groupe", "A1", "Mettre en contact.", ["éviter"], "touch", "touché", "avoir"),
    ("travailler", "1er groupe", "A1", "Travailler pour produire.", ["se reposer"], "travaill", "travaillé", "avoir"),
    ("traverser", "1er groupe", "A1", "Passer d'un côté à l'autre.", ["longer"], "travers", "traversé", "avoir"),
    ("tromper", "1er groupe", "A2", "Induire en erreur.", ["détromper"], "tromp", "trompé", "avoir"),
    ("trouver", "1er groupe", "A1", "Découvrir.", ["perdre"], "trouv", "trouvé", "avoir"),
    ("utiliser", "1er groupe", "A1", "Employer pour un usage.", ["délaisser"], "utilis", "utilisé", "avoir"),
    ("visiter", "1er groupe", "A1", "Rendre visite ou parcourir.", ["quitter"], "visit", "visité", "avoir"),
    ("voler", "1er groupe", "A1", "Planer dans les airs ou dérober.", ["rendre"], "vol", "volé", "avoir"),
    ("voyager", "1er groupe", "A1", "Parcourir le monde.", ["rester chez soi"], "voyag", "voyagé", "avoir")
]

for inf, grp, lvl, defn, ants, st, pp, aux in extra_fr_v:
    if inf in fr_v: continue
    is_vowel = inf.startswith(vowels)
    j_p = "j'" if is_vowel else "je "

    ind_p = [f"{j_p}{st}e".strip(), f"tu {st}es", f"il/elle {st}e", f"nous {st}ons", f"vous {st}ez", f"ils/elles {st}ent"]
    ind_imp = [f"{j_p}{st}ais".strip(), f"tu {st}ais", f"il/elle {st}ait", f"nous {st}ions", f"vous {st}iez", f"ils/elles {st}aient"]
    ind_f = [f"{j_p}{inf}ai".strip(), f"tu {inf}as", f"il/elle {inf}a", f"nous {inf}ons", f"vous {inf}ez", f"ils/elles {inf}ont"]
    cond = [f"{j_p}{inf}ais".strip(), f"tu {inf}ais", f"il/elle {inf}ait", f"nous {inf}ions", f"vous {inf}iez", f"ils/elles {inf}aient"]
    subj = [f"que {j_p}{st}e".strip(), f"que tu {st}es", f"qu'il/elle {st}e", f"que nous {st}ions", f"que vous {st}iez", f"qu'ils/elles {st}ent"]

    pc = [f"j'ai {pp}", f"tu as {pp}", f"il/elle a {pp}", f"nous avons {pp}", f"vous avez {pp}", f"ils/elles ont {pp}"] if aux == "avoir" else [f"je suis {pp}", f"tu es {pp}", f"il/elle est {pp}", f"nous sommes {pp}s", f"vous êtes {pp}s", f"ils/elles sont {pp}s"]

    fr_v[inf] = {
        "group": grp, "level": lvl, "definition": defn, "antonyms": ants, "auxiliary": aux,
        "tenses": {
            "indicatif_present": ind_p, "indicatif_imparfait": ind_imp, "pc": pc, "indicatif_futur_simple": ind_f,
            "conditionnel_present": cond, "subjonctif_present": subj,
            "imperatif": [f"{ind_p[0].split()[-1]} !", f"{ind_p[3].split()[-1]} !", f"{ind_p[4].split()[-1]} !"],
            "participe_passe": [pp]
        }
    }

write_json("apps/fr-conjugeur/data/verbs.json", fr_v)


# 2. French Nouns (fr-genre) - Add 100 more items to reach 200+
with open("apps/fr-genre/data/nouns.json", "r", encoding="utf-8") as f:
    fr_n = json.load(f)

extra_fr_n = [
    ("accident", "Masculin", "A2", "Événement imprévu et malheureux.", ["sécurité"]),
    ("accord", "Masculin", "A2", "Entente entre personnes.", ["désaccord"]),
    ("acteur", "Masculin", "A1", "Personne qui joue au théâtre ou au cinéma.", ["spectateur"]),
    ("aéroport", "Masculin", "A1", "Ensemble d'installations pour les avions.", ["gare"]),
    ("âge", "Masculin", "A1", "Durée de la vie d'un être.", ["jeunesse"]),
    ("agent", "Masculin", "A2", "Personne chargée de fonctions publiques.", ["citoyen"]),
    ("agneau", "Masculin", "A2", "Petit de la brebis.", ["loup"]),
    ("air", "Masculin", "A1", "Fluide gazeux de l'atmosphère.", ["vide"]),
    ("alcool", "Masculin", "A2", "Liquide enivrant.", ["eau"]),
    ("animal", "Masculin", "A1", "Être vivant doué de sensibilité.", ["végétal"]),
    ("anniversaire", "Masculin", "A1", "Retour annuel d'un jour marqué par un événement.", ["deuil"]),
    ("appareil", "Masculin", "A2", "Assemblage d'organes d'un mécanisme.", ["outil"]),
    ("appartement", "Masculin", "A1", "Ensemble de pièces d'habitation.", ["maison"]),
    ("argent", "Masculin", "A1", "Monnaie ou métal précieux.", ["pauvreté"]),
    ("arrêt", "Masculin", "A1", "Action de stopper.", ["départ"]),
    ("art", "Masculin", "A2", "Expression de la beauté.", ["nature"]),
    ("article", "Masculin", "A2", "Écrit formant un tout dans un journal.", ["livre"]),
    ("aspect", "Masculin", "A2", "Apparence d'une chose.", ["fond"]),
    ("avertissement", "Masculin", "A2", "Appel à la prudence.", ["encouragement"]),
    ("avis", "Masculin", "A2", "Opinion exprimée.", ["doute"]),
    ("bain", "Masculin", "A1", "Immersion dans l'eau.", ["douche"]),
    ("balcon", "Masculin", "A2", "Plateforme en saillie.", ["terrasse"]),
    ("ballon", "Masculin", "A1", "Balle de sport gonflée d'air.", ["balle"]),
    ("banquier", "Masculin", "A2", "Personne qui dirige une banque.", ["client"]),
    ("bâtiment", "Masculin", "A1", "Construction immobilière.", ["terrain"]),
    ("bessin", "Masculin", "A2", "Bassin d'eau.", ["lac"]),
    ("besoin", "Masculin", "A1", "Exigence de la nature.", ["superflu"]),
    ("beurre", "Masculin", "A1", "Matière grasse du lait.", ["huile"]),
    ("billet", "Masculin", "A1", "Titre de transport ou papier de banque.", ["pièce"]),
    ("biscuit", "Masculin", "A1", "Petite gaufrette sèche.", ["gâteau"]),
    ("bois", "Masculin", "A1", "Matière des arbres.", ["métal"]),
    ("bonheur", "Masculin", "A1", "État de félicité.", ["malheur"]),
    ("bureau", "Masculin", "A1", "Meuble pour écrire ou pièce de travail.", ["atelier"]),
    ("bus", "Masculin", "A1", "Autobus de ville.", ["train"]),
    ("cadeau", "Masculin", "A1", "Objet offert pour faire plaisir.", ["dette"]),
    ("calcul", "Masculin", "A2", "Opération mathématique.", ["estimation"]),
    ("calme", "Masculin", "A1", "Absence d'agitation.", ["bruit"]),
    ("camion", "Masculin", "A1", "Grand véhicule de transport.", ["voiture"]),
    ("camp", "Masculin", "A2", "Lieu de séjour temporaire sous la tente.", ["hôtel"]),
    ("canal", "Masculin", "A2", "Voie d'eau artificielle.", ["fleuve"]),
    ("chapeau", "Masculin", "A1", "Coiffure pour la tête.", ["casquette"]),
    ("charbon", "Masculin", "A2", "Combustible fossile noir.", ["bois"]),
    ("chemin", "Masculin", "A1", "Voie de terre.", ["route"]),
    ("choix", "Masculin", "A1", "Action de choisir.", ["obligation"]),
    ("chocolat", "Masculin", "A1", "Substance sucrée au cacao.", ["bonbon"]),
    ("cinéma", "Masculin", "A1", "Salle de projection de films.", ["théâtre"]),
    ("citron", "Masculin", "A1", "Agrume jaune acide.", ["orange"]),
    ("client", "Masculin", "A1", "Personne qui achète.", ["vendeur"]),
    ("climat", "Masculin", "A2", "Ensemble des conditions atmosphériques.", ["météo"]),
    ("coeur", "Masculin", "A1", "Organe vital de la circulation.", ["esprit"]),
    ("coin", "Masculin", "A1", "Angle de deux murs.", ["centre"]),
    ("colère", "Féminin", "A2", "Vif mécontentement.", ["calme"]),
    ("collège", "Masculin", "A1", "Établissement d'enseignement secondaire.", ["lycée"]),
    ("combat", "Masculin", "A2", "Lutte armée.", ["paix"]),
    ("commerce", "Masculin", "A2", "Achat et vente de marchandises.", ["industrie"]),
    ("compte", "Masculin", "A1", "État de ce que l'on doit ou possède.", ["dette"]),
    ("concert", "Masculin", "A1", "Séance musicale.", ["opéra"]),
    ("conseil", "Masculin", "A2", "Avis donné à quelqu'un.", ["ordre"]),
    ("continent", "Masculin", "A2", "Vaste étendue de terre emmergée.", ["île"]),
    ("contrat", "Masculin", "A2", "Convention juridique entre parties.", ["litige"]),
    ("contrôle", "Masculin", "A2", "Vérification attentive.", ["laisser-faire"]),
    ("corps", "Masculin", "A1", "Structure physique de l'homme.", ["âme"]),
    ("costume", "Masculin", "A1", "Vêtement masculin complet.", ["robe"]),
    ("coton", "Masculin", "A1", "Fibre textile végétale.", ["laine"]),
    ("coude", "Masculin", "A2", "Articulation du bras.", ["genou"]),
    ("coup", "Masculin", "A1", "Choc rapide.", ["caresse"]),
    ("courrier", "Masculin", "A1", "Ensemble des lettres envoyées.", ["colis"]),
    ("cours", "Masculin", "A1", "Enseignement donné par un professeur.", ["examen"]),
    ("couteau", "Masculin", "A1", "Ustensile pour couper.", ["fourchette"]),
    ("couvercle", "Masculin", "A2", "Pièce fermant un récipient.", ["boîte"]),
    ("crayons", "Masculin", "A1", "Outils de dessin.", ["stylo"]),
    ("crime", "Masculin", "A2", "Infraction grave à la loi.", ["vertu"]),
    ("cuisinier", "Masculin", "A1", "Personne qui prépare à manger.", ["serveur"]),
    ("danger", "Masculin", "A1", "Situation menaçante.", ["sécurité"]),
    ("début", "Masculin", "A1", "Premier moment.", ["fin"]),
    ("départ", "Masculin", "A1", "Action de s'en aller.", ["arrivée"]),
    ("dessin", "Masculin", "A1", "Représentation graphique.", ["peinture"]),
    ("devoir", "Masculin", "A1", "Obligation morale.", ["droit"]),
    ("dictionnaire", "Masculin", "A1", "Recueil de mots de la langue.", ["roman"]),
    ("dimanche", "Masculin", "A1", "Dernier jour de la semaine.", ["lundi"]),
    ("directeur", "Masculin", "A1", "Personne qui dirige une entreprise.", ["employé"]),
    ("discours", "Masculin", "A2", "Propos tenus devant un public.", ["silence"]),
    ("doigt", "Masculin", "A1", "Extrémité articulée de la main.", ["orteil"]),
    ("dommage", "Masculin", "A2", "Préjudice subi.", ["avantage"]),
    ("doute", "Masculin", "A2", "Incertitude de l'esprit.", ["certitude"]),
    ("droit", "Masculin", "A1", "Ce qui est permis par la loi.", ["devoir"]),
    ("Éclair", "Masculin", "A2", "Lumière vive de l'orage.", ["tonnerre"]),
    ("écran", "Masculin", "A1", "Surface d'affichage électronique.", ["clavier"]),
    ("effort", "Masculin", "A2", "Mobilisation de ses forces.", ["repos"]),
    ("éléphant", "Masculin", "A1", "Grand mammifère à trompe.", ["souris"]),
    ("employé", "Masculin", "A1", "Personne travaillant dans une entreprise.", ["patron"]),
    ("endroit", "Masculin", "A1", "Lieu déterminé.", ["espace"]),
    ("ennemi", "Masculin", "A1", "Personne hostile.", ["ami"]),
    ("escalier", "Masculin", "A1", "Suite de marches.", ["ascenseur"]),
    ("espace", "Masculin", "A1", "Étendue indéfinie.", ["temps"]),
    ("esprit", "Masculin", "A2", "Activité intellectuelle.", ["matière"]),
    ("espoir", "Masculin", "A1", "Attente confiante.", ["désespoir"]),
    ("essai", "Masculin", "A2", "Tentative d'action.", ["échec"]),
    ("été", "Masculin", "A1", "Saison chaude.", ["hiver"]),
    ("étudiant", "Masculin", "A1", "Personne inscrite à l'université.", ["professeur"]),
    ("exemple", "Masculin", "A1", "Ce qui sert de modèle.", ["exception"]),
    ("exercice", "Masculin", "A1", "Pratique pour apprendre.", ["repos"])
]

for noun, gen, lvl, defn, ants in extra_fr_n:
    if noun not in fr_n:
        fr_n[noun] = { "gender": gen, "level": lvl, "definition": defn, "antonyms": ants }

write_json("apps/fr-genre/data/nouns.json", fr_n)


# 3. Italian Verbs (it-coniugatore) - Expand to 200+
with open("apps/it-coniugatore/data/verbs.json", "r", encoding="utf-8") as f:
    it_v = json.load(f)

extra_it_v = [
    ("accendere", "2a coniugazione", "A1", "Dare fuoco o attivare la luce.", ["spegnere"], "accend", "acceso"),
    ("accettare", "1a coniugazione", "A1", "Accogliere favorevolmente.", ["rifiutare"], "accett", "accettato"),
    ("accompagnare", "1a coniugazione", "A1", "Andare insieme a qualcuno.", ["abbandonare"], "accompagn", "accompagnato"),
    ("afferrare", "1a coniugazione", "A2", "Prendere con forza.", ["lasciare"], "afferr", "afferrato"),
    ("aiutare", "1a coniugazione", "A1", "Prestare soccorso.", ["ostacolare"], "aiut", "aiutato"),
    ("alzare", "1a coniugazione", "A1", "Spostare verso l'alto.", ["abbassare"], "alz", "alzato"),
    ("ammettere", "2a coniugazione", "A2", "Riconoscere come vero.", ["negare"], "ammett", "ammesso"),
    ("annunciare", "1a coniugazione", "A2", "Rendere noto a tutti.", ["nascondere"], "annunci", "annunciato"),
    ("aprire", "3a coniugazione", "A1", "Rendere accessibile un passaggio.", ["chiudere"], "apr", "aperto"),
    ("aspettare", "1a coniugazione", "A1", "Attendere qualcuno o qualcosa.", ["andarsene"], "aspett", "aspettato"),
    ("attraversare", "1a coniugazione", "A1", "Passare da un lato all'altro.", ["costeggiare"], "attravers", "attraversato"),
    ("baciare", "1a coniugazione", "A1", "Dare un bacio.", ["mordere"], "baci", "baciato"),
    ("bastare", "1a coniugazione", "A2", "Essere sufficiente.", ["mancare"], "bast", "bastato"),
    ("battere", "2a coniugazione", "A1", "Colpire con forza.", ["accarezzare"], "batt", "battuto"),
    ("bloccare", "1a coniugazione", "A2", "Fermare un movimento.", ["sbloccare"], "blocc", "bloccato"),
    ("bruciare", "1a coniugazione", "A2", "Consumare con il fuoco.", ["spegnere"], "bruci", "bruciato"),
    ("cadere", "2a coniugazione", "A1", "Andare verso il basso per gravità.", ["alzarsi"], "cad", "caduto"),
    ("camminare", "1a coniugazione", "A1", "Muoversi a piedi.", ["correre"], "cammin", "camminato"),
    ("cantare", "1a coniugazione", "A1", "Produrre suoni musicali con la voce.", ["tacere"], "cant", "cantato"),
    ("capire", "3a coniugazione", "A1", "Comprendere il significato.", ["fraintendere"], "cap", "capito"),
    ("cercare", "1a coniugazione", "A1", "Tornare a individuare.", ["trovare"], "cerc", "cercato"),
    ("chiamare", "1a coniugazione", "A1", "Invocare a voce alta.", ["ignorare"], "chiam", "chiamato"),
    ("chiedere", "2a coniugazione", "A1", "Domandare una risposta.", ["rispondere"], "chied", "chiesto"),
    ("chiudere", "2a coniugazione", "A1", "Serrare un passaggio.", ["aprire"], "chiud", "chiuso"),
    ("cominciare", "1a coniugazione", "A1", "Iniziare un'azione.", ["finire"], "cominci", "cominciato"),
    ("comprare", "1a coniugazione", "A1", "Acquistare beni.", ["vendere"], "compr", "comprato"),
    ("confermare", "1a coniugazione", "A2", "Rendere certo.", ["annullare"], "conferm", "confermato"),
    ("conoscere", "2a coniugazione", "A1", "Avere familiarità con qualcuno.", ["ignorare"], "conosc", "conosciuto"),
    ("consigliare", "1a coniugazione", "A2", "Dare un consiglio.", ["sconsigliare"], "consigli", "consigliato"),
    ("contare", "1a coniugazione", "A1", "Calcolare il numero.", ["ignorare"], "cont", "contato"),
    ("continuare", "1a coniugazione", "A1", "Proseguire un'azione.", ["fermarsi"], "continu", "continuato"),
    ("coprire", "3a coniugazione", "A2", "Mettere sopra per nascondere.", ["scoprire"], "copr", "coperto"),
    ("correggere", "2a coniugazione", "A2", "Eliminare gli errori.", ["sbagliare"], "corregg", "corretto"),
    ("correre", "2a coniugazione", "A1", "Muoversi velocemente.", ["camminare"], "corr", "corso"),
    ("costruire", "3a coniugazione", "A2", "Fabbricare un edificio.", ["distruggere"], "costru", "costruito"),
    ("credere", "2a coniugazione", "A1", "Avere fiducia.", ["dubitare"], "cred", "creduto"),
    ("cucinare", "1a coniugazione", "A1", "Preparare i cibi.", ["digiunare"], "cucin", "cucinato"),
    ("decisione", "1a coniugazione", "A2", "Prendere una decisione.", ["esitare"], "decid", "deciso"),
    ("descrivere", "2a coniugazione", "A2", "Rappresentare a parole.", ["confondere"], "descriv", "descritto"),
    ("difendere", "2a coniugazione", "A2", "Proteggere da attacchi.", ["attaccare"], "difend", "difeso"),
    ("dimenticare", "1a coniugazione", "A1", "Perdere la memoria.", ["ricordare"], "dimentic", "dimenticato"),
    ("dimostrare", "1a coniugazione", "A2", "Provare la verità di qualcosa.", ["nascondere"], "dimostr", "dimostrato"),
    ("disegnare", "1a coniugazione", "A1", "Rappresentare con matita.", ["cancellare"], "disegn", "disegnato"),
    ("distruggere", "2a coniugazione", "B1", "Demolire completamente.", ["costruire"], "distrugg", "distrutto"),
    ("diventare", "1a coniugazione", "A1", "Passare a un altro stato.", ["rimanere"], "divent", "diventato"),
    ("domandare", "1a coniugazione", "A1", "Chiedere per sapere.", ["rispondere"], "domand", "domandato"),
    ("donare", "1a coniugazione", "A1", "Regalare qualcosa.", ["prendere"], "don", "donato"),
    ("dormire", "3a coniugazione", "A1", "Riposare nel sonno.", ["svegliarsi"], "dorm", "dormito"),
    ("dubitare", "1a coniugazione", "A2", "Avere dubbi.", ["credere"], "dubit", "dubitato"),
    ("entrare", "1a coniugazione", "A1", "Passare all'interno.", ["uscire"], "entr", "entrato"),
    ("evitare", "1a coniugazione", "A2", "Cercare di non incontrare.", ["affrontare"], "evit", "evitato"),
    ("fermare", "1a coniugazione", "A1", "Arrestare il movimento.", ["continuare"], "ferm", "fermato"),
    ("finire", "3a coniugazione", "A1", "Terminare un'azione.", ["cominciare"], "fin", "finito"),
    ("firmare", "1a coniugazione", "A2", "Mettere la propria firma.", ["annullare"], "firm", "firmato"),
    ("guardare", "1a coniugazione", "A1", "Fissare lo sguardo.", ["ignorare"], "guard", "guardato"),
    ("guidare", "1a coniugazione", "A1", "Condurre un veicolo.", ["camminare"], "guid", "guidato"),
    ("imparare", "1a coniugazione", "A1", "Acquisire conoscenze.", ["dimenticare"], "impar", "imparato"),
    ("incontrare", "1a coniugazione", "A1", "Trovare sul cammino.", ["evitare"], "incontr", "incontrato"),
    ("insegnare", "1a coniugazione", "A1", "Trasmettere nozioni.", ["imparare"], "insegn", "insegnato"),
    ("inviare", "1a coniugazione", "A1", "Spedire un messaggio.", ["ricevere"], "invi", "inviato"),
    ("lasciare", "1a coniugazione", "A1", "Permettere o abbandonare.", ["prendere"], "lasci", "lasciato"),
    ("lavorare", "1a coniugazione", "A1", "Esercitare un lavoro.", ["riposare"], "lavor", "lavorato"),
    ("leggere", "2a coniugazione", "A1", "Interpretare testi scritti.", ["scrivere"], "legg", "letto"),
    ("mettere", "2a coniugazione", "A1", "Collocare in un posto.", ["togliere"], "mett", "messo"),
    ("mostrare", "1a coniugazione", "A1", "Fare vedere.", ["nascondere"], "mostr", "mostrato"),
    ("muovere", "2a coniugazione", "A1", "Spostare.", ["fermare"], "muov", "mosso"),
    ("nascere", "2a coniugazione", "A1", "Venire alla luce.", ["morire"], "nasc", "nato"),
    ("nascondere", "2a coniugazione", "A2", "Sottrarre alla vista.", ["mostrare"], "nascond", "nascosto"),
    ("nuotare", "1a coniugazione", "A1", "Muoversi nell'acqua.", ["affondare"], "nuot", "nuotato"),
    ("offendere", "2a coniugazione", "A2", "Recare offesa.", ["lodare"], "offend", "offeso"),
    ("offrire", "3a coniugazione", "A1", "Proporre o donare.", ["rifiutare"], "offr", "offerto"),
    ("ordinare", "1a coniugazione", "A1", "Mantenere in ordine o chiedere al bar.", ["disordinare"], "ordin", "ordinato"),
    ("organizzare", "1a coniugazione", "A2", "Pianificare un evento.", ["scompigliare"], "organizz", "organizzato"),
    ("pagare", "1a coniugazione", "A1", "Saldare un conto.", ["riscuotere"], "pag", "pagato"),
    ("parlare", "1a coniugazione", "A1", "Comunicare a voce.", ["tacere"], "parl", "parlato"),
    ("partire", "3a coniugazione", "A1", "Andarsene da un luogo.", ["arrivare"], "part", "partito"),
    ("passare", "1a coniugazione", "A1", "Transitare.", ["fermarsi"], "pass", "passato"),
    ("pensare", "1a coniugazione", "A1", "Riflettere.", ["dimenticare"], "pens", "pensato"),
    ("perdere", "2a coniugazione", "A1", "Non vincere o smarrire.", ["trovare"], "perd", "perso"),
    ("permettere", "2a coniugazione", "A2", "Dare il consenso.", ["vietare"], "permett", "permesso"),
    ("piangere", "2a coniugazione", "A1", "Versare lacrime.", ["ridere"], "piang", "pianto"),
    ("portare", "1a coniugazione", "A1", "Trasportare o indossare.", ["togliere"], "port", "portato"),
    ("prendere", "2a coniugazione", "A1", "Afferrare o ricevere.", ["lasciare"], "prend", "preso"),
    ("preparare", "1a coniugazione", "A1", "Allestire.", ["improvisare"], "prepar", "preparato"),
    ("promettere", "2a coniugazione", "A2", "Dare la propria parola.", ["ingannare"], "promett", "promesso"),
    ("pulire", "3a coniugazione", "A1", "Rendere pulito.", ["sporcare"], "pul", "pulito"),
    ("raccontare", "1a coniugazione", "A1", "Dire una storia.", ["tacere"], "raccont", "raccontato"),
    ("ricordare", "1a coniugazione", "A1", "Tenere a mente.", ["dimenticare"], "ricord", "ricordato"),
    ("ridere", "2a coniugazione", "A1", "Esprimere allegria.", ["piangere"], "rid", "riso"),
    ("rifiutare", "1a coniugazione", "A1", "Non accettare.", ["accettare"], "rifiut", "rifiutato"),
    ("rimanere", "2a coniugazione", "A1", "Restare.", ["partire"], "riman", "rimasto"),
    ("rispondere", "2a coniugazione", "A1", "Dare una risposta.", ["chiedere"], "rispond", "risposto"),
    ("salire", "3a coniugazione", "A1", "Andare in alto.", ["scendere"], "sal", "salito"),
    ("salvare", "1a coniugazione", "A1", "Trarre in salvo.", ["abbandonare"], "salv", "salvato"),
    ("scendere", "2a coniugazione", "A1", "Andare in basso.", ["salire"], "scend", "sceso"),
    ("scrivere", "2a coniugazione", "A1", "Tracciare segni.", ["leggere"], "scriv", "scritto"),
    ("sembrare", "1a coniugazione", "A1", "Avere l'apparenza.", ["essere certo"], "sembr", "sembrato"),
    ("sentire", "3a coniugazione", "A1", "Percepire con l'udito.", ["ignorare"], "sent", "sentito"),
    ("sognare", "1a coniugazione", "A1", "Vedere immagini nel sonno.", ["vegliare"], "sogn", "sognato"),
    ("sperare", "1a coniugazione", "A1", "Avere fiducia.", ["disperare"], "sper", "sperato"),
    ("spiegare", "1a coniugazione", "A1", "Rendere chiaro.", ["confondere"], "spieg", "spiegato"),
    ("studiare", "1a coniugazione", "A1", "Apprendere.", ["ignorare"], "studi", "studiato"),
    ("tornare", "1a coniugazione", "A1", "Rientrare.", ["partire"], "torn", "tornato"),
    ("trovare", "1a coniugazione", "A1", "Rintracciare.", ["perdere"], "trov", "trovato"),
    ("uscire", "3a coniugazione", "A1", "Andare fuori.", ["entrare"], "usc", "uscito"),
    ("vedere", "2a coniugazione", "A1", "Percepire con gli occhi.", ["ciecare"], "ved", "visto"),
    ("vendere", "2a coniugazione", "A1", "Cedere per denaro.", ["comprare"], "vend", "venduto"),
    ("viaggiare", "1a coniugazione", "A1", "Fare un viaggio.", ["restare"], "viaggi", "viaggiato"),
    ("vincere", "2a coniugazione", "A1", "Ottenere la vittoria.", ["perdere"], "vinc", "vinto"),
    ("vivere", "2a coniugazione", "A1", "Essere in vita.", ["morire"], "viv", "vissuto"),
    ("volare", "1a coniugazione", "A1", "Spostarsi nell'aria.", ["cadere"], "vol", "volato")
]

for inf, grp, lvl, defn, ants, st, pp in extra_it_v:
    if inf in it_v: continue
    if grp == "1a coniugazione":
        p_tu = f"{st[:-1]}i" if st.endswith('i') else f"{st}i"
        p_noi = f"{st[:-1]}iamo" if st.endswith('i') else f"{st}iamo"
        pres = [f"{st}o", p_tu, f"{st}a", p_noi, f"{st}ate", f"{st}ano"]
        imp = [f"{st}avo", f"{st}avi", f"{st}ava", f"{st}avamo", f"{st}avate", f"{st}avano"]
        fut = [f"{st}erò", f"{st}erai", f"{st}erà", f"{st}eremo", f"{st}erete", f"{st}eranno"]
        cond = [f"{st}erei", f"{st}eresti", f"{st}erebbe", f"{st}eremmo", f"{st}ereste", f"{st}rebbero".replace("rr", "rer")]
        subj = [f"che io {p_tu}", f"che tu {p_tu}", f"che egli {p_tu}", f"che noi {p_noi}", f"che voi {p_tu}ate", f"che essi {p_tu}no"]
        impf = [f"{st}a!", f"{p_noi}!", f"{st}ate!"]
    elif grp == "2a coniugazione":
        pres = [f"{st}o", f"{st}i", f"{st}e", f"{st}iamo", f"{st}ete", f"{st}ono"]
        imp = [f"{st}evo", f"{st}evi", f"{st}eva", f"{st}evamo", f"{st}evate", f"{st}evano"]
        fut = [f"{st}erò", f"{st}erai", f"{st}erà", f"{st}eremo", f"{st}erete", f"{st}eranno"]
        cond = [f"{st}erei", f"{st}eresti", f"{st}erebbe", f"{st}eremmo", f"{st}ereste", f"{st}rebbero".replace("rr", "rer")]
        subj = [f"che io {st}a", f"che tu {st}a", f"che egli {st}a", f"che noi {st}iamo", f"che voi {st}iate", f"che essi {st}ano"]
        impf = [f"{st}i!", f"{st}iamo!", f"{st}ete!"]
    else: # 3a coniugazione
        if inf in ["dormire", "partire", "sentire", "uscire", "salire", "coprire", "aprire"]:
            pres = [f"{st}o", f"{st}i", f"{st}e", f"{st}iamo", f"{st}ite", f"{st}ono"]
        else: # -isc-
            pres = [f"{st}isco", f"{st}isci", f"{st}isce", f"{st}iamo", f"{st}ite", f"{st}iscono"]
        imp = [f"{st}ivo", f"{st}ivi", f"{st}iva", f"{st}ivamo", f"{st}ivate", f"{st}ivano"]
        fut = [f"{st}irò", f"{st}irai", f"{st}irà", f"{st}iremo", f"{st}irete", f"{st}iranno"]
        cond = [f"{st}irei", f"{st}iresti", f"{st}irebbe", f"{st}iremmo", f"{st}ireste", f"{st}irebbero"]
        subj = [f"che io {st}a", f"che tu {st}a", f"che egli {st}a", f"che noi {st}iamo", f"che voi {st}iate", f"che essi {st}ano"]
        impf = [f"{st}i!", f"{st}iamo!", f"{st}ite!"]

    cond[5] = cond[0][:-2] + "rebbero"

    it_v[inf] = {
        "group": grp, "level": lvl, "definition": defn, "antonyms": ants,
        "tenses": { "presente": pres, "imperfetto": imp, "futuro_semplice": fut, "condizionale_presente": cond, "congiuntivo_presente": subj, "imperativo": impf, "participio_passato": [pp] }
    }

write_json("apps/it-coniugatore/data/verbs.json", it_v)

# 4. Italian Nouns (it-genere) - Expand to 200+
with open("apps/it-genere/data/nouns.json", "r", encoding="utf-8") as f:
    it_n = json.load(f)

extra_it_n = [
    ("abito", "Maschile", "A1", "Indumento da indossare.", ["nudità"]),
    ("aeroporto", "Maschile", "A1", "Struttura per aerei.", ["stazione"]),
    ("albero", "Maschile", "A1", "Pianta legnosa ad alto fusto.", ["fiore"]),
    ("amico", "Maschile", "A1", "Persona legata da amicizia.", ["nemico"]),
    ("animale", "Maschile", "A1", "Essere vivente sensibile.", ["pianta"]),
    ("anno", "Maschile", "A1", "Periodo di dodici mesi.", ["mese"]),
    ("appartamento", "Maschile", "A1", "Insieme di stanze d'abitazione.", ["casa"]),
    ("albergo", "Maschile", "A1", "Struttura d'accoglienza turistica.", ["casa"]),
    ("autobus", "Maschile", "A1", "Mezzo di trasporto pubblico.", ["treno"]),
    ("bambino", "Maschile", "A1", "Essere umano in tenera età.", ["adulto"]),
    ("banco", "Maschile", "A1", "Tavolo da lavoro o scuola.", ["sedia"]),
    ("bar", "Maschile", "A1", "Locale per bevande.", ["ristorante"]),
    ("bicchiere", "Maschile", "A1", "Recipiente per bere.", ["bottiglia"]),
    ("biglietto", "Maschile", "A1", "Documento di viaggio.", ["moneta"]),
    ("bosco", "Maschile", "A1", "Terreno coperto da alberi.", ["prato"]),
    ("braccio", "Maschile", "A1", "Arto superiore dell'uomo.", ["gamba"]),
    ("burro", "Maschile", "A1", "Grasso del latte.", ["olio"]),
    ("caffè", "Maschile", "A1", "Bevanda stimolante calda.", ["tè"]),
    ("calcio", "Maschile", "A1", "Sport con il pallone.", ["tennis"]),
    ("camino", "Maschile", "A2", "Struttura per il fuoco in casa.", ["stufa"]),
    ("campo", "Maschile", "A1", "Terreno agricolo.", ["città"]),
    ("cane", "Maschile", "A1", "Animale fedele all'uomo.", ["gatto"]),
    ("cappello", "Maschile", "A1", "Copricapo.", ["scarpa"]),
    ("cappotto", "Maschile", "A1", "Abito pesante invernale.", ["maglietta"]),
    ("capello", "Maschile", "A1", "Pelo della testa.", ["barba"]),
    ("carattere", "Maschile", "A2", "Indole di una persona.", ["aspetto"]),
    ("carnevale", "Maschile", "A2", "Festa di maschere.", ["quaresima"]),
    ("castello", "Maschile", "A2", "Fortezza antica.", ["capanna"]),
    ("cavallo", "Maschile", "A1", "Mammifero solipede.", ["mucca"]),
    ("centro", "Maschile", "A1", "Punto di mezzo di una città.", ["periferia"]),
    ("cibo", "Maschile", "A1", "Alimento per il corpo.", ["bevanda"]),
    ("cielo", "Maschile", "A1", "Spazio visibile sopra la terra.", ["terra"]),
    ("cinema", "Maschile", "A1", "Sala di proiezione film.", ["teatro"]),
    ("coltello", "Maschile", "A1", "Ustensile per tagliare.", ["forchetta"]),
    ("compito", "Maschile", "A1", "Lavoro scolastico assegnato.", ["riposo"]),
    ("computer", "Maschile", "A1", "Calcolatore elettronico.", ["foglio"]),
    ("consiglio", "Maschile", "A2", "Suggerimento utile.", ["ordine"]),
    ("conto", "Maschile", "A1", "Calcolo del prezzo.", ["debito"]),
    ("coraggio", "Maschile", "A2", "Forza d'animo.", ["paura"]),
    ("corpo", "Maschile", "A1", "Struttura fisica.", ["anima"]),
    ("cuscino", "Maschile", "A1", "Supporto morbido per la testa.", ["materasso"]),
    ("dente", "Maschile", "A1", "Organo della masticazione.", ["lingua"]),
    ("deserto", "Maschile", "A2", "Territorio arido e sabbioso.", ["foresta"]),
    ("dito", "Maschile", "A1", "Estremità della mano.", ["piede"]),
    ("dolore", "Maschile", "A1", "Sensazione di sofferenza.", ["piacere"]),
    ("fatto", "Maschile", "A1", "Azione compiuta.", ["parola"]),
    ("figlio", "Maschile", "A1", "Discendente diretto maschio.", ["padre"]),
    ("fiore", "Maschile", "A1", "Parte colorata della pianta.", ["foglia"]),
    ("fiume", "Maschile", "A1", "Corso d'acqua continuo.", ["mare"]),
    ("foglio", "Maschile", "A1", "Pezzo di carta.", ["quaderno"]),
    ("formaggio", "Maschile", "A1", "Prodotto del latte.", ["pane"]),
    ("forno", "Maschile", "A1", "Apparecchio per cuocere.", ["frigorifero"]),
    ("fratello", "Maschile", "A1", "Figlio degli stessi genitori.", ["sorella"]),
    ("frutto", "Maschile", "A1", "Prodotto commestibile delle piante.", ["fiore"]),
    ("fuoco", "Maschile", "A1", "Combustione con calore.", ["acqua"]),
    ("gatto", "Maschile", "A1", "Feline domestico.", ["cane"]),
    ("giornale", "Maschile", "A1", "Stampa quotidiana d'informazione.", ["libro"]),
    ("giorno", "Maschile", "A1", "Periodo di luce.", ["notte"]),
    ("giardino", "Maschile", "A1", "Spazio verde con fiori.", ["casa"]),
    ("gioco", "Maschile", "A1", "Attività di svago.", ["lavoro"]),
    ("gruppo", "Maschile", "A1", "Insieme di persone o cose.", ["individuo"]),
    ("guanto", "Maschile", "A1", "Copertura per le mani.", ["scarpa"]),
    ("inverno", "Maschile", "A1", "Stagione fredda.", ["estate"]),
    ("lago", "Maschile", "A1", "Bacino d'acqua dolce.", ["fiume"]),
    ("latte", "Maschile", "A1", "Liquido bianco nutritivo.", ["acqua"]),
    ("lavoro", "Maschile", "A1", "Attività professionale.", ["riposo"]),
    ("letto", "Maschile", "A1", "Mobile per dormire.", ["sedia"]),
    ("libro", "Maschile", "A1", "Insieme di fogli stampati.", ["quaderno"]),
    ("luogo", "Maschile", "A1", "Spazio determinato.", ["tempo"]),
    ("mare", "Maschile", "A1", "Grande distesa d'acqua salata.", ["montagna"]),
    ("mattino", "Maschile", "A1", "Inizio del giorno.", ["sera"]),
    ("mese", "Maschile", "A1", "Dodicesima parte dell'anno.", ["anno"]),
    ("mercato", "Maschile", "A1", "Luogo di compravendita.", ["negozio"]),
    ("minuto", "Maschile", "A1", "Sessanta secondi.", ["ora"]),
    ("mondo", "Maschile", "A1", "L'universo abitato.", ["solitudine"]),
    ("muro", "Maschile", "A1", "Struttura di muratura.", ["porta"]),
    ("museo", "Maschile", "A1", "Luogo di reperti d'arte.", ["teatro"]),
    ("naso", "Maschile", "A1", "Organo dell'olfatto.", ["bocca"]),
    ("negozio", "Maschile", "A1", "Locale di vendita al dettaglio.", ["mercato"]),
    ("nome", "Maschile", "A1", "Appellativo di una persona.", ["cognome"]),
    ("occhio", "Maschile", "A1", "Organo della vista.", ["orecchio"]),
    ("orologio", "Maschile", "A1", "Strumento per misurare il tempo.", ["calendario"]),
    ("ospedale", "Maschile", "A1", "Luogo di cura dei malati.", ["scuola"]),
    ("pane", "Maschile", "A1", "Alimento di farina cotta.", ["acqua"]),
    ("parco", "Maschile", "A1", "Spazio verde cittadino.", ["strada"]),
    ("pasto", "Maschile", "A1", "Cibo consumato ad ore fisse.", ["digiuno"]),
    ("piede", "Maschile", "A1", "Parte finale della gamba.", ["mano"]),
    ("poeta", "Maschile", "A2", "Chi scrive poesie.", ["lettore"]),
    ("pomodoro", "Maschile", "A1", "Ortaggio rosso commestibile.", ["patata"]),
    ("ponte", "Maschile", "A1", "Struttura sopra un fiume.", ["strada"]),
    ("porto", "Maschile", "A1", "Luogo d'approdo delle navi.", ["aeroporto"]),
    ("prato", "Maschile", "A1", "Terreno eroso d'erba.", ["bosco"]),
    ("prezzo", "Maschile", "A1", "Valore in denaro di una cosa.", ["sconto"]),
    ("problema", "Maschile", "A1", "Questione da risolvere.", ["soluzione"]),
    ("progetto", "Maschile", "A2", "Piano d'azione.", ["passato"]),
    ("quaderno", "Maschile", "A1", "Fogli bianchi rilegati.", ["libro"]),
    ("quadro", "Maschile", "A1", "Dipinto artistico.", ["scultura"]),
    ("ragazzo", "Maschile", "A1", "Giovane maschio.", ["ragazza"]),
    ("regalo", "Maschile", "A1", "Dono per un'occasione.", ["dito"]),
    ("riso", "Maschile", "A1", "Cereale o atto del ridere.", ["pianto"]),
    ("ristorante", "Maschile", "A1", "Locale dove si cena.", ["casa"]),
    ("rumore", "Maschile", "A1", "Suono fastidioso.", ["silenzio"]),
    ("sacco", "Maschile", "A1", "Contenitore di stoffa.", ["tasca"]),
    ("secolo", "Maschile", "A2", "Periodo di cento anni.", ["anno"]),
    ("silenzio", "Maschile", "A1", "Assenza di rumore.", ["rumore"]),
    ("sole", "Maschile", "A1", "Astre del giorno.", ["luna"]),
    ("sogno", "Maschile", "A1", "Immagini nel sonno.", ["realtà"]),
    ("sorriso", "Maschile", "A1", "Espressione del viso allegra.", ["smorfia"]),
    ("spazio", "Maschile", "A1", "Estensione indefinita.", ["tempo"]),
    ("specchio", "Maschile", "A1", "Vetro che riflette.", ["muro"]),
    ("sport", "Maschile", "A1", "Attività fisica ludica.", ["pigrizia"]),
    ("stivali", "Maschile", "A1", "Calzature alte.", ["scarpe"]),
    ("tavolo", "Maschile", "A1", "Mobile con gambe e piano.", ["sedia"]),
    ("tempo", "Maschile", "A1", "Durata degli eventi.", ["spazio"]),
    ("treno", "Maschile", "A1", "Mezzo di trasporto su binari.", ["aereo"]),
    ("uccello", "Maschile", "A1", "Animale con le ali.", ["pesce"]),
    ("uomo", "Maschile", "A1", "Essere umano maschio.", ["donna"]),
    ("uovo", "Maschile", "A1", "Prodotto degli uccelli commestibile.", ["pane"]),
    ("vaso", "Maschile", "A1", "Contenitore per fiori.", ["fiori"]),
    ("vento", "Maschile", "A1", "Aria in movimento.", ["calma"]),
    ("viaggio", "Maschile", "A1", "Spostamento distante.", ["soggiorno"]),
    ("vino", "Maschile", "A1", "Bevanda alcolica d'uva.", ["acqua"]),
    ("zucchero", "Maschile", "A1", "Sostanza dolce bianca.", ["sale"])
]

for noun, gen, lvl, defn, ants in extra_it_n:
    if noun not in it_n:
        it_n[noun] = { "gender": gen, "level": lvl, "definition": defn, "antonyms": ants }

write_json("apps/it-genere/data/nouns.json", it_n)


# 5. Russian Verbs (ru-spryazhenie) - Expand to 200+
with open("apps/ru-spryazhenie/data/verbs.json", "r", encoding="utf-8") as f:
    ru_v = json.load(f)

extra_ru_v_1 = [
    ("бегать", "побе́гать", "A1", "Быстро передвигаться ногами.", ["стоять"], "бега"),
    ("беречь", "сбере́чь", "A2", "Хранить от вреда.", ["тратить"], "береже"),
    ("болеть", "заболе́ть", "A1", "Испытывать боль или быть больным.", ["выздоравливать"], "боле"),
    ("бояться", "побоя́ться", "A1", "Испытывать страх.", ["храбриться"], "боя"),
    ("брать", "взя́ть", "A1", "Захватывать рукой.", ["давать"], "бера"),
    ("бросать", "бро́сить", "A2", "Кидать предмет.", ["ловить"], "броса"),
    ("будить", "разбуди́ть", "A1", "Прерывать чей-то сон.", ["усыплять"], "буди"),
    ("бывать", "побыва́ть", "A1", "Находиться где-либо время от времени.", ["отсутствовать"], "быва"),
    ("варить", "свари́ть", "A1", "Готовить в кипятке.", ["жарить"], "вари"),
    ("вешать", "пове́сить", "A2", "Размещать на весу.", ["снимать"], "веша"),
    ("включать", "включи́ть", "A1", "Запускать прибор.", ["выключать"], "включа"),
    ("встречать", "встре́тить", "A1", "Сходиться с кем-то в месте.", ["провожать"], "встреча"),
    ("выбирать", "вы́брать", "A2", "Отдавать предпочтение.", ["сомневаться"], "выбира"),
    ("вызывать", "вы́звать", "A2", "Просить прийти.", ["отсылать"], "вызыва"),
    ("выключать", "вы́ключить", "A1", "Прекращать работу прибора.", ["включать"], "выключа"),
    ("выполнять", "вы́полнить", "A2", "Осуществлять на деле.", ["игнорировать"], "выполня"),
    ("выходить", "вы́йти", "A1", "Идти наружу.", ["входить"], "выходи"),
    ("гладить", "погла́дить", "A2", "Делать ровным утюгом.", ["мять"], "глади"),
    ("готовить", "пригото́вить", "A1", "Варить или жарить пищу.", ["голодать"], "готови"),
    ("гулять", "погуля́ть", "A1", "Совершать прогулку.", ["сидеть дома"], "гуля"),
    ("дарить", "подари́ть", "A1", "Передавать в подарок.", ["забирать"], "дари"),
    ("двигать", "подви́нуть", "A2", "Перемещать предмет.", ["оставлять"], "двига"),
    ("дежурить", "подежу́рить", "A2", "Исполнять обязанности по смене.", ["отдыхать"], "дежури"),
    ("держать", "подержа́ть", "A1", "Сохранять в руках.", ["ронять"], "держа"),
    ("добавлять", "доба́вить", "A2", "Прибавлять к имеющемуся.", ["убирать"], "добавля"),
    ("догонять", "догна́ть", "A2", "Настигать бегущего.", ["отставать"], "догоня"),
    ("ждать", "подожда́ть", "A1", "Находиться в ожидании.", ["уходить"], "жда"),
    ("забывать", "забы́ть", "A1", "Утрачивать из памяти.", ["помнить"], "забыва"),
    ("заказывать", "заказать", "A1", "Делать заказ.", ["отменять"], "заказыва"),
    ("закрывать", "закры́ть", "A1", "Затворять проём.", ["открывать"], "закрыва"),
    ("замечать", "заме́тить", "A2", "Обращать внимание.", ["пропускать"], "замеча"),
    ("заниматься", "позанима́ться", "A1", "Уделять время учебе.", ["бездельничать"], "занима"),
    ("запрещать", "запрети́ть", "A2", "Не разрешать.", ["разрешать"], "запреща"),
    ("звать", "позва́ть", "A1", "Окликивать.", ["прогонять"], "зова"),
    ("звонить", "позвони́ть", "A1", "Вызывать по телефону.", ["молчать"], "звони"),
    ("знакомить", "познако́мить", "A1", "Представлять людей друг другу.", ["скрывать"], "знакоми"),
    ("знать", "узна́ть", "A1", "Иметь сведения.", ["не знать"], "зна"),
    ("играть", "поигра́ть", "A1", "Заниматься игрой.", ["работать"], "игра"),
    ("искать", "поиска́ть", "A1", "Стараться найти.", ["находить"], "иска"),
    ("исправлять", "испра́вить", "A2", "Устранять ошибки.", ["портить"], "исправля"),
    ("кормить", "покорми́ть", "A2", "Давать пищу.", ["морить голодом"], "корми"),
    ("красить", "покра́сить", "A2", "Покрывать краской.", ["стирать"], "краси"),
    ("кричать", "покрича́ть", "A1", "Издавать громкие звуки.", ["шептать"], "крича"),
    ("курить", "покури́ть", "A2", "Вдыхать дым.", ["бросать курить"], "кури"),
    ("лежать", "полежа́ть", "A1", "Находиться в горизонтальном положении.", ["стоять"], "лежа"),
    ("летать", "полета́ть", "A1", "Двигаться по воздуху.", ["падать"], "лета"),
    ("лечить", "вы́лечить", "A2", "Оказывать медицинскую помощь.", ["калечить"], "лечи"),
    ("ломать", "слома́ть", "A1", "Разрушать предмет.", ["чинить"], "лома"),
    ("мыть", "помы́ть", "A1", "Очищать водой.", ["пачкать"], "мо"),
    ("надеяться", "понаде́яться", "A2", "Рассчитывать на успех.", ["отчаиваться"], "надея"),
    ("начинать", "нача́ть", "A1", "Приступать к действию.", ["заканчивать"], "начина"),
    ("обещать", "пообеща́ть", "A2", "Давать слово.", ["обманывать"], "обеща"),
    ("объяснять", "объясни́ть", "A2", "Делать понятным.", ["запутать"], "объясня"),
    ("отдыхать", "отдохну́ть", "A1", "Восстанавливать силы.", ["работать"], "отдыха"),
    ("открывать", "откры́ть", "A1", "Размыкать двери.", ["закрывать"], "открыва"),
    ("отвечать", "ответи́ть", "A1", "Давать ответ.", ["спрашивать"], "отвеча"),
    ("падать", "упа́сть", "A1", "Двигаться вниз под тяжестью.", ["взлетать"], "пада"),
    ("петь", "спеть", "A1", "Исполнять песни.", ["молчать"], "по"),
    ("писать", "написа́ть", "A1", "Изображать текст.", ["читать"], "писа"),
    ("плакать", "попла́кать", "A1", "Проливать слёзы.", ["смеяться"], "плака"),
    ("платить", "заплати́ть", "A1", "Отдавать деньги.", ["получать"], "плати"),
    ("показывать", "показа́ть", "A1", "Делать видимым.", ["прятать"], "показыва"),
    ("покупать", "купи́ть", "A1", "Приобретать за деньги.", ["продавать"], "покупа"),
    ("помога́ть", "помо́чь", "A1", "Оказывать помощь.", ["мешать"], "помога"),
    ("понимать", "поня́ть", "A1", "Осознавать смысл.", ["не понимать"], "понима"),
    ("повторять", "повтори́ть", "A1", "Делать снова.", ["забывать"], "повторя"),
    ("просить", "попроси́ть", "A2", "Обращаться с просьбой.", ["требовать"], "проси"),
    ("прятать", "спря́тать", "A2", "Скрывать от глаз.", ["показывать"], "прята"),
    ("работать", "порабо́тать", "A1", "Заниматься трудом.", ["отдыхать"], "работа"),
    ("радоваться", "обра́доваться", "A1", "Испытывать радость.", ["грустить"], "раду"),
    ("рассказывать", "рассказа́ть", "A1", "Сообщать устно.", ["молчать"], "рассказыва"),
    ("рисовать", "нарисова́ть", "A1", "Изображать красками.", ["стирать"], "рису"),
    ("смеяться", "посмея́ться", "A1", "Издавать смех.", ["плакать"], "смея"),
    ("собирать", "собра́ть", "A2", "Копить вместе.", ["разбрасывать"], "собира"),
    ("спрашивать", "спроси́ть", "A1", "Задавать вопрос.", ["отвечать"], "спрашива"),
    ("строить", "постро́ить", "A2", "Создавать здание.", ["разрушать"], "строи"),
    ("танцевать", "потанцева́ть", "A1", "Двигаться под музыку.", ["стоять"], "танцу"),
    ("терять", "потеря́ть", "A1", "Лишаться вещи.", ["находить"], "теря"),
    ("учить", "вы́учить", "A1", "Осваивать знания.", ["забывать"], "учи"),
    ("читать", "прочита́ть", "A1", "Воспринимать текст.", ["писать"], "чита"),
    ("чистить", "почи́стить", "A1", "Убирать грязь.", ["пачкать"], "чисти"),
    ("шептать", "пошепта́ть", "A2", "Тихо говорить.", ["кричать"], "шепта")
]

for inf, pair, lvl, defn, ants, stem in extra_ru_v_1:
    if inf in ru_v: continue
    ru_v[inf] = {
        "group": "II спряжение (НСВ)" if stem.endswith('и') else "I спряжение (НСВ)",
        "pair": pair, "level": lvl, "definition": defn, "antonyms": ants,
        "tenses": {
            "pres": [f"я {stem}́ю", f"ты {stem}́ешь", f"он/она́ {stem}́ет", f"мы {stem}́ем", f"вы {stem}́ете", f"они́ {stem}́ют"],
            "past": [f"он {stem}́л", f"она́ {stem}́ла", f"оно́ {stem}́ло", f"они́ {stem}́ли"],
            "fut": [f"я бу́ду {inf}", f"ты бу́дешь {inf}", f"он/она́ бу́дет {inf}", f"мы бу́дем {inf}", f"вы бу́дете {inf}", f"они́ бу́дут {inf}"]
        }
    }

write_json("apps/ru-spryazhenie/data/verbs.json", ru_v)

# 6. Russian Nouns (ru-rod-padezhi) - Expand to 200+
with open("apps/ru-rod-padezhi/data/nouns.json", "r", encoding="utf-8") as f:
    ru_n = json.load(f)

extra_ru_n_raw = [
    ("аптека", "A1", "Учреждение для продажи лекарств.", ["больница"], "апте́ка", "апте́ки", "апте́ке", "апте́ку", "апте́кой", "апте́ке", "апте́ки", "апте́к", "апте́кам", "апте́ки", "апте́ками", "апте́ках", "женский"),
    ("армия", "A2", "Вооружённые силы государства.", ["мир"], "а́рмия", "а́рмии", "а́рмии", "а́рмию", "а́рмией", "а́рмии", "а́рмии", "а́рмий", "а́рмиям", "а́рмии", "а́рмиями", "а́рмиях", "женский"),
    ("бабушка", "A1", "Мать отца или матери.", ["дедушка"], "ба́бушка", "ба́бушки", "ба́бушке", "ба́бушку", "ба́бушкой", "ба́бушке", "ба́бушки", "ба́бушек", "ба́бушкам", "ба́бушек", "ба́бушками", "ба́бушках", "женский"),
    ("больница", "A1", "Лечебное учреждение.", ["аптека"], "больни́ца", "больни́цы", "больни́це", "больни́цу", "больни́цей", "больни́це", "больни́цы", "больни́ц", "больни́цам", "больни́цы", "больни́цами", "больни́цах", "женский"),
    ("бумага", "A1", "Материал для письма.", ["компьютер"], "бума́га", "бума́ги", "бума́ге", "бума́гу", "бума́гой", "бума́ге", "бума́ги", "бума́г", "бума́гам", "бума́ги", "бума́гами", "бума́гах", "женский"),
    ("вилка", "A1", "Столовый прибор с зубьями.", ["нож"], "ви́лка", "ви́лки", "ви́лке", "ви́лку", "ви́лкой", "ви́лке", "ви́лки", "ви́лок", "ви́лкам", "ви́лки", "ви́лками", "ви́лках", "женский"),
    ("выставка", "A2", "Показ произведений искусства.", ["склад"], "вы́ставка", "вы́ставки", "вы́ставке", "вы́ставку", "вы́ставкой", "вы́ставке", "вы́ставки", "вы́ставок", "вы́ставкам", "вы́ставки", "вы́ставками", "вы́ставках", "женский"),
    ("голова", "A1", "Верхняя часть тела человека.", ["нога"], "голова́", "головы́", "голове́", "голову́", "голово́й", "голове́", "го́ловы", "голо́в", "голова́м", "го́ловы", "голова́ми", "голова́х", "женский"),
    ("деревня", "A1", "Сельское поселение.", ["город"], "дере́вня", "дере́вни", "дере́вне", "дере́вню", "дере́вней", "дере́вне", "дере́вни", "деревень", "дере́вням", "дере́вни", "дере́внями", "дере́внях", "женский"),
    ("дорога", "A1", "Путь для движения.", ["тупик"], "доро́га", "доро́ги", "доро́ге", "доро́гу", "доро́гой", "доро́ге", "доро́ги", "доро́г", "доро́гам", "доро́ги", "доро́гами", "доро́гах", "женский"),
    ("задача", "A1", "Вопрос, требующий решения.", ["ответ"], "зада́ча", "зада́чи", "зада́че", "зада́чу", "зада́чей", "зада́че", "зада́чи", "зада́ч", "зада́чам", "зада́чи", "зада́чами", "зада́чах", "женский"),
    ("звезда", "A1", "Небесное тело.", ["планета"], "звезда́", "звезды́", "звезде́", "звезду́", "звездо́й", "звезде́", "звёзды", "звёзд", "звёздам", "звёзды", "звёздами", "звёздах", "женский"),
    ("игра", "A1", "Деятельность для развлечения.", ["работа"], "игра́", "игры́", "игре́", "игру́", "игро́й", "игре́", "и́гры", "игр", "и́грам", "и́гры", "и́грами", "и́грах", "женский"),
    ("кухня", "A1", "Помещение для готовки.", ["комната"], "ку́хня", "ку́хни", "ку́хне", "ку́хню", "ку́хней", "ку́хне", "ку́хни", "кухонь", "ку́хням", "ку́хни", "ку́хнями", "ку́хнях", "женский"),
    ("ложка", "A1", "Столовый прибор для жидкой пищи.", "вилка", "ло́жка", "ло́жки", "ло́жке", "ло́жку", "ло́жкой", "ло́жке", "ло́жки", "ло́жек", "ло́жкам", "ло́жки", "ло́жками", "ло́жках", "женский"),
    ("луна", "A1", "Спутник Земли.", ["солнце"], "луна́", "луны́", "луне́", "луну́", "луно́й", "луне́", "лу́ны", "лун", "лу́нам", "лу́ны", "лу́нами", "лу́нах", "женский"),
    ("минута", "A1", "Единица времени (60 секунд).", ["час"], "мину́та", "мину́ты", "мину́те", "мину́ту", "мину́той", "мину́те", "мину́ты", "мину́т", "мину́там", "мину́ты", "мину́тами", "мину́тах", "женский"),
    ("одежда", "A1", "Изделия из ткани для тела.", ["нагота"], "оде́жда", "оде́жды", "оде́жде", "оде́жду", "оде́ждой", "оде́жде", "оде́жды", "оде́жд", "оде́ждам", "оде́жды", "оде́ждами", "оде́ждах", "женский"),
    ("ошибка", "A1", "Неправильность в действиях.", ["правда"], "оши́бка", "оши́бки", "оши́бке", "оши́бку", "оши́бкой", "оши́бке", "оши́бки", "оши́бок", "оши́бкам", "оши́бки", "оши́бками", "оши́бках", "женский"),
    ("почта", "A1", "Учреждение связи.", ["банк"], "по́чта", "по́чты", "по́чте", "по́чту", "по́чтой", "по́чте", "по́чты", "по́чт", "по́чтам", "по́чты", "по́чтами", "по́чтах", "женский"),
    ("правда", "A1", "То, что соответствует действительности.", ["ложь"], "пра́вда", "пра́вды", "пра́вде", "пра́вду", "пра́вдой", "пра́вде", "пра́вды", "пра́вд", "пра́вдам", "пра́вды", "пра́вдами", "пра́вдах", "женский"),
    ("проблема", "A1", "Сложный вопрос.", ["решение"], "пробле́ма", "пробле́мы", "пробле́ме", "пробле́му", "пробле́мой", "пробле́ме", "пробле́мы", "пробле́м", "пробле́мам", "пробле́мы", "пробле́мами", "пробле́мах", "женский"),
    ("работа", "A1", "Трудовая деятельность.", ["отдых"], "рабо́та", "рабо́ты", "рабо́те", "рабо́ту", "рабо́той", "рабо́те", "рабо́ты", "рабо́т", "рабо́там", "рабо́ты", "рабо́тами", "рабо́тах", "женский"),
    ("ручка", "A1", "Принадлежность для письма.", ["карандаш"], "ру́чка", "ру́чки", "ру́чке", "ру́чку", "ру́чкой", "ру́чке", "ру́чки", "ру́чек", "ру́чкам", "ру́чки", "ру́чками", "ру́чках", "женский"),
    ("рыба", "A1", "Водное животное.", ["птица"], "ры́ба", "ры́бы", "ры́бе", "ры́бу", "ры́бой", "ры́бе", "ры́бы", "рыб", "ры́бам", "рыб", "ры́бами", "ры́бах", "женский"),
    ("сумка", "A1", "Предмет для переноски вещей.", ["карман"], "су́мка", "су́мки", "су́мке", "су́мку", "су́мкой", "су́мке", "су́мки", "су́мок", "су́мкам", "су́мки", "су́мками", "су́мках", "женский"),
    ("тарелка", "A1", "Столовая посуда.", ["чашка"], "таре́лка", "таре́лки", "таре́лке", "таре́лку", "таре́лкой", "таре́лке", "таре́лки", "таре́лок", "таре́лкам", "таре́лки", "таре́лками", "таре́лках", "женский"),
    ("улица", "A1", "Пространство между домами.", ["площадь"], "у́лица", "у́лицы", "у́лице", "у́лицу", "у́лицей", "у́лице", "у́лицы", "у́лиц", "у́лицам", "у́лицы", "у́лицами", "у́лицах", "женский"),
    ("фирма", "A1", "Торговое предприятие.", ["завод"], "фи́рма", "фи́рмы", "фи́рме", "фи́рму", "фи́рмой", "фи́рме", "фи́рмы", "фи́рм", "фи́рмам", "фи́рмы", "фи́рмами", "фи́рмах", "женский"),
    ("чашка", "A1", "Посуда для питья.", ["тарелка"], "ча́шка", "ча́шки", "ча́шке", "ча́шку", "ча́шкой", "ча́шке", "ча́шки", "ча́шек", "ча́шкам", "ча́шки", "ча́шками", "ча́шках", "женский"),
    ("школа", "A1", "Учебное заведение.", ["университет"], "шко́ла", "шко́лы", "шко́ле", "шко́лу", "шко́лой", "шко́ле", "шко́лы", "школ", "шко́лам", "шко́лы", "шко́лами", "шко́лах", "женский")
]

for noun, lvl, defn, ants, ns, gs, ds, as_, is_, ps, np, gp, dp, ap, ip, pp, gen in extra_ru_n_raw:
    if noun not in ru_n:
        ru_n[noun] = {
            "gender": gen, "level": lvl, "definition": defn, "antonyms": ants,
            "cases": {
                "nom_sing": ns, "gen_sing": gs, "dat_sing": ds, "acc_sing": as_, "ins_sing": is_, "pre_sing": ps,
                "nom_plur": np, "gen_plur": gp, "dat_plur": dp, "acc_plur": ap, "ins_plur": ip, "pre_plur": pp
            }
        }

write_json("apps/ru-rod-padezhi/data/nouns.json", ru_n)


# 7. Greek Verbs (el-klisi-rimaton) - Expand to 200+
with open("apps/el-klisi-rimaton/data/verbs.json", "r", encoding="utf-8") as f:
    el_v = json.load(f)

extra_el_v = [
    ("αγαπάω", "A1", "Νιώθω αγάπη.", ["μισώ"], "αγαπ", "αγάπησα", "αγαπούσα"),
    ("αγοράζω", "A1", "Αποκτώ με χρήματα.", ["πουλάω"], "αγοράζ", "αγόρασα", "αγόραζα"),
    ("ακολουθώ", "A2", "Πηγαίνω πίσω από κάποιον.", ["προηγούμαι"], "ακολουθ", "ακολούθησα", "ακολουθούσα"),
    ("ακούω", "A1", "Αντιλαμβάνομαι ήχους.", ["αγνοώ"], "ακού", "άκουσα", "άκουγα"),
    ("αλλάζω", "A1", "Κάνω κάτι διαφορετικό.", ["διατηρώ"], "αλλάζ", "άλλαξα", "άλλαζα"),
    ("αμφιβάλλω", "A2", "Έχω αμφιβολίες.", ["πιστεύω"], "αμφιβάλλ", "αμφέβαλα", "αμφέβαλλα"),
    ("ανοίγω", "A1", "Κάνω προσβάσιμο.", ["κλείνω"], "ανοίγ", "άνοιξα", "άνοιγα"),
    ("απαντάω", "A1", "Δίνω απόκριση.", ["ρωτάω"], "απαντ", "απάντησα", "απαντούσα"),
    ("αποτυγχάνω", "A2", "Δεν επιτυγχάνω.", ["πετυχαίνω"], "αποτυγχάν", "απέτυχα", "αποτύγχανα"),
    ("αρχίζω", "A1", "Ξεκινώ ενέργεια.", ["τελειώνω"], "αρχίζ", "άρχισα", "άρχιζα"),
    ("αφήνω", "A1", "Επιτρέπω ή παρατώ.", ["κρατάω"], "αφήν", "άφησα", "άφηνα"),
    ("βάζω", "A1", "Τοποθετώ.", ["βγάζω"], "βάζ", "έβαλα", "έβαζα"),
    ("βγάζω", "A1", "Αφαιρώ.", ["βάζω"], "βγάζ", "έβγαλα", "έβγαζα"),
    ("βλέπω", "A1", "Αντιλαμβάνομαι με τα μάτια.", ["αγνοώ"], "βλέπ", "είδα", "έβλεπα"),
    ("βρίσκω", "A1", "Ανακαλύπτω.", ["χάνω"], "βρίσκ", "βρήκα", "έβρισκα"),
    ("γελάω", "A1", "Εκδηλώνω χαρά.", ["κλαίω"], "γελ", "γέλασα", "γελούσα"),
    ("γιορτάζω", "A1", "Κάνω γιορτή.", ["πενθώ"], "γιορτάζ", "γιόρτασα", "γιόρταζα"),
    ("γνωρίζω", "A1", "Έχω γνώση προσώπου.", ["αγνοώ"], "γνωρίζ", "γνώρισα", "γνώριζα"),
    ("γράφω", "A1", "Σχηματίζω λέξεις.", ["σβήνω"], "γράφ", "έγραψα", "έγραφα"),
    ("γυρίζω", "A1", "Επιστρέφω.", ["φεύγω"], "γυρίζ", "γύρισα", "γύριζα"),
    ("δείχνω", "A1", "Κάνω κάτι ορατό.", ["κρύβω"], "δείχν", "έδειξα", "έδειχνα"),
    ("διαβάζω", "A1", "Μελετώ κείμενο.", ["γράφω"], "διαβάζ", "διάβασα", "διάβαζα"),
    ("δίνω", "A1", "Παραδίδω κάτι.", ["παίρνω"], "δίν", "έδωσα", "έδινα"),
    ("δοκιμάζω", "A1", "Προσπαθώ ή γεύομαι.", ["απορρίπτω"], "δοκιμάζ", "δοκίμασα", "δοκίμαζα"),
    ("δουλεύω", "A1", "Εργάζομαι.", ["ξεκουράζομαι"], "δουλεύ", "δούλεψα", "δούλευα"),
    ("ελπίζω", "A2", "Έχω εμπιστοσύνη στο μέλλον.", ["απελπίζομαι"], "ελπίζ", "έλπισα", "έλπιζα"),
    ("ετοιμάζω", "A1", "Προετοιμάζω κάτι.", ["αναβάλλω"], "ετοιμάζ", "ετοίμασα", "ετοίμαζα"),
    ("ζω", "A1", "Υπάρχω στη ζωή.", ["πεθαίνω"], "ζ", "έζησα", "ζούσα"),
    ("ζωγραφίζω", "A1", "Φτιάχνω εικόνες.", ["σβήνω"], "ζωγραφίζ", "ζωγράφισα", "ζωγράφιζα"),
    ("θέλω", "A1", "Έχω επιθυμία.", ["αρνούμαι"], "θέλ", "θέλησα", "ήθελα"),
    ("καθαρίζω", "A1", "Αφαιρώ ακαθαρσίες.", ["λερώνω"], "καθαρίζ", "καθάρισα", "καθάριζα"),
    ("καταλαβαίνω", "A1", "Αντιλαμβάνομαι.", ["παρεξηγώ"], "καταλαβαίν", "κατάλαβα", "καταλάβαινα"),
    ("κερδίζω", "A1", "Αποκτώ νίκη.", ["χάνω"], "κερδίζ", "κέρδισα", "κέρδιζα"),
    ("κλείνω", "A1", "Εμποδίζω τη δίοδο.", ["ανοίγω"], "κλείν", "έκλεισα", "έκλεινα"),
    ("κοιτάζω", "A1", "Στρέφω το βλέμμα.", ["αγνοώ"], "κοιτάζ", "κοίταξα", "κοίταζα"),
    ("κρατάω", "A1", "Έχω στο χέρι.", ["αφήνω"], "κρατ", "κράτησα", "κρατούσα"),
    ("κρύβω", "A1", "Τοποθετώ σε αθέατο μέρος.", ["δείχνω"], "κρύβ", "έκρυψα", "έκρυβα"),
    ("μαγειρεύω", "A1", "Ετοιμάζω φαγητό.", ["νηστεύω"], "μαγειρεύ", "μαγείρεψα", "μαγείρευα"),
    ("μαθαίνω", "A1", "Αποκτώ γνώσεις.", ["ξεχνώ"], "μαθαίν", "έμαθα", "μάθαινα"),
    ("μένω", "A1", "Παραμένω.", ["φεύγω"], "μέν", "έμεινα", "έμενα"),
    ("μιλάω", "A1", "Εκφράζω σκέψεις.", ["σιωπώ"], "μιλ", "μίλησα", "μιλούσα"),
    ("μισώ", "A1", "Νιώθω μίσος.", ["αγαπάω"], "μισ", "μίσησα", "μισούσα"),
    ("μπορώ", "A1", "Έχω την ικανότητα.", ["αδυνατώ"], "μπορ", "μπόρεσα", "μπορούσα"),
    ("ντύνω", "A1", "Βάζω ρούχα.", ["γδύνω"], "ντύν", "έντυσα", "έντυνα"),
    ("ξέρω", "A1", "Έχω γνώση.", ["αγνοώ"], "ξέρ", "ήξερα", "ήξερα"),
    ("ξεχνώ", "A1", "Χάνω από τη μνήμη.", ["θυμάμαι"], "ξεχν", "ξέχασα", "ξεχνούσα"),
    ("ξυπνάω", "A1", "Βγαίνω από τον ύπνο.", ["κοιμάμαι"], "ξυπν", "ξύπνησα", "ξυπνούσα"),
    ("οδηγώ", "A1", "Κατευθύνω όχημα.", ["βαδίζω"], "οδηγ", "οδήγησα", "οδηγούσα"),
    ("παίζω", "A1", "Ψυχαγωγούμαι.", ["δουλεύω"], "παίζ", "έπαιξα", "έπαιζα"),
    ("παίρνω", "A1", "Λαμβάνω κάτι.", ["δίνω"], "παίρν", "πήρα", "έπαιρνα"),
    ("περιμένω", "A1", "Μένω προσδοκώντας.", ["φεύγω"], "περιμέν", "περιμένα", "περίμενα"),
    ("περπατάω", "A1", "Κινούμαι με βήμα.", ["τρέχω"], "περπατ", "περπάτησα", "περπατούσα"),
    ("πετάω", "A1", "Κινούμαι στον αέρα.", ["πέφτω"], "πετ", "πέταξα", "πετούσα"),
    ("πετυχαίνω", "A2", "Κατορθώνω στόχο.", ["αποτυγχάνω"], "πετυχαίν", "πέτυχα", "πετύχαινα"),
    ("πέφτω", "A1", "Χάνω την ισορροπία.", ["σηκώνομαι"], "πέφτ", "έπεσα", "έπεφτα"),
    ("πηγαίνω", "A1", "Μετακινούμαι.", ["έρχομαι"], "πηγαίν", "πήγα", "πήγαινα"),
    ("πίνω", "A1", "Καταναλώνω υγρά.", ["διψώ"], "πίν", "ήπια", "έπινα"),
    ("πιστεύω", "A1", "Έχω εμπιστοσύνη.", ["αμφιβάλλω"], "πιστεύ", "πίστεψα", "πίστευα"),
    ("πλένω", "A1", "Καθαρίζω με νερό.", ["λερώνω"], "πλέν", "έπλυνα", "έπλενα"),
    ("πληρώνω", "A1", "Δίνω χρήματα.", ["εισπράττω"], "πληρών", "πλήρωσα", "πλήρωνα"),
    ("πουλάω", "A1", "Δίνω αγαθό για χρήματα.", ["αγοράζω"], "πουλ", "πούλησα", "πουλούσα"),
    ("προσπαθώ", "A1", "Καταβάλλω προσπάθεια.", ["παραιτούμαι"], "προσπαθ", "προσπάθησα", "προσπαθούσα"),
    ("ρωτάω", "A1", "Ζητάω πληροφορίες.", ["απαντάω"], "ρωτ", "ρώτησα", "ρωτούσα"),
    ("σταματάω", "A1", "Παύω να κινούμαι.", ["συνεχίζω"], "σταματ", "σταμάτησα", "σταματούσα"),
    ("στελνω", "A1", "Μεταβιβάζω μήνυμα.", ["παίρνω"], "στέλν", "έστειλα", "έστελνα"),
    ("στηρίζω", "A2", "Προσφέρω υποστήριξη.", ["εγκαταλείπω"], "στηρίζ", "στήριξα", "στήριζα"),
    ("συγχωρώ", "A2", "Δίνω συγχώρεση.", ["τιμωρώ"], "συγχωρ", "συγχώρεσα", "συγχωρούσα"),
    ("συνεχίζω", "A1", "Προχωρώ παρακάτω.", ["σταματάω"], "συνεχίζ", "συνέχισα", "συνέχιζα"),
    ("ταξιδεύω", "A1", "Μετακινούμαι μακριά.", ["μένω"], "ταξιδεύ", "ταξίδεψα", "ταξίδευα"),
    ("τελειώνω", "A1", "Ολοκληρώνω.", ["αρχίζω"], "τελειών", "τελείωσα", "τελείωνα"),
    ("τραγουδάω", "A1", "Παράγω μουσικούς ήχους.", ["σιωπώ"], "τραγουδ", "τραγούδησα", "τραγουδούσα"),
    ("τρέχω", "A1", "Κινούμαι γρήγορα.", ["περπατάω"], "τρέχ", "έτρεξα", "έτρεχα"),
    ("τρώω", "A1", "Καταναλώνω τροφή.", ["νηστεύω"], "τρ", "έφαγα", "έτρωγα"),
    ("φτάνω", "A1", "Φτάνω στον προορισμό.", ["φεύγω"], "φτάν", "έφτασα", "έφτανα"),
    ("φεύγω", "A1", "Απομακρούνομαι.", ["έρχομαι"], "φεύγ", "έφυγα", "έφευγα"),
    ("χορεύω", "A1", "Κινούμαι ρυθμικά.", ["στέκομαι"], "χορεύ", "χόρεψα", "χόρευα"),
    ("χάνω", "A1", "Σταματώ να έχω.", ["βρίσκω"], "χάν", "έχασα", "έχανα"),
    ("ψάχνω", "A1", "Αναζητώ κάτι.", ["βρίσκω"], "ψάχν", "έψαξα", "έψαχνα"),
    ("ψωνίζω", "A1", "Αγοράζω πράγματα.", ["πουλάω"], "ψωνίζ", "ψώνισα", "ψώνιζα")
]

for inf, lvl, defn, ants, stem, aor_1, imp_1 in extra_el_v:
    if inf in el_v: continue
    pres = [f"εγώ {inf}", f"εσύ {stem}εις", f"αυτός/αυτή {stem}ει", f"εμείς {stem}ουμε", f"εσείς {stem}ετε", f"αυτοί/αυτές {stem}ουν"]
    imp = [f"εγώ {imp_1}", f"εσύ {imp_1[:-1]}ες", f"αυτός/αυτή {imp_1[:-1]}ε", f"εμείς {stem}αμε", f"εσείς {stem}ατε", f"αυτοί/αυτές {imp_1[:-1]}αν"]
    aor = [f"εγώ {aor_1}", f"εσύ {aor_1[:-1]}ες", f"αυτός/αυτή {aor_1[:-1]}ε", f"εμείς {aor_1[:-1]}αμε", f"εσείς {aor_1[:-1]}ατε", f"αυτοί/αυτές {aor_1[:-1]}αν"]
    fut = [f"εγώ θα {aor_1}", f"εσύ θα {aor_1[:-1]}εις", f"αυτός/αυτή θα {aor_1[:-1]}ει", f"εμείς θα {aor_1[:-1]}ουμε", f"εσείς θα {aor_1[:-1]}ετε", f"αυτοί/αυτές θα {aor_1[:-1]}ουν"]

    el_v[inf] = {
        "group": "Τύπος Α' (-ω)", "voice": "Ενεργητική Φωνή", "level": lvl, "definition": defn, "antonyms": ants,
        "tenses": { "pres": pres, "imp": imp, "aor": aor, "fut": fut }
    }

write_json("apps/el-klisi-rimaton/data/verbs.json", el_v)

# 8. Greek Nouns (el-genos-ptoseis) - Expand to 200+
with open("apps/el-genos-ptoseis/data/nouns.json", "r", encoding="utf-8") as f:
    el_n = json.load(f)

extra_el_n = [
    ("αγορά", "A1", "Χώρος εμπορίου.", ["ερημιά"], "η αγορά", "της αγοράς", "την αγορά", "αγορά", "οι αγορές", "των αγορών", "τις αγορές", "αγορές", "θηλυκό"),
    ("αγρός", "A1", "Έκταση γης για καλλιέργεια.", ["πόλη"], "ο αγρός", "του αγρού", "τον αγρό", "αγρέ", "οι αγροί", "των αγρών", "τους αγρούς", "αγροί", "αρσενικό"),
    ("αδελφή", "A1", "Θηλυκό τέκνο γονέων.", ["αδελφός"], "η αδελφή", "της αδελφής", "την αδελφή", "αδελφή", "οι αδελφές", "των αδελφών", "τις αδελφές", "αδελφές", "θηλυκό"),
    ("αδελφός", "A1", "Αρσενικό τέκνο γονέων.", ["αδελφή"], "ο αδελφός", "του αδελφού", "τον αδελφό", "αδελφέ", "οι αδελφοί", "των αδελφών", "τους αδελφούς", "αδελφοί", "αρσενικό"),
    ("αέρας", "A1", "Το αέριο περίβλημα της γης.", ["νερό"], "ο αέρας", "του αέρα", "τον αέρα", "αέρα", "οι αέρες", "των αέρων", "τους αέρες", "αέρες", "αρσενικό"),
    ("αίθουσα", "A1", "Μεγάλο δωμάτιο.", ["διάδρομος"], "η αίθουσα", "της αίθουσας", "την αίθουσα", "αίθουσα", "οι αίθουσες", "των αιθουσών", "τις αίθουσες", "αίθουσες", "θηλυκό"),
    ("αλήθεια", "A1", "Η πραγματικότητα.", ["ψέμα"], "η αλήθεια", "της αλήθειας", "την αλήθεια", "αλήθεια", "οι αλήθειες", "των αληθειών", "τις αλήθειες", "αλήθειες", "θηλυκό"),
    ("άνθρωπος", "A1", "Το ανθρώπινο ον.", ["ζώο"], "ο άνθρωπος", "του ανθρώπου", "τον άνθρωπο", "άνθρωπε", "οι άνθρωποι", "των ανθρώπων", "τους ανθρώπους", "άνθρωποι", "αρσενικό"),
    ("άνοιξη", "A1", "Η εποχή των λουλουδιών.", ["φθινόπωρο"], "η άνοιξη", "της άνοιξης", "την άνοιξη", "άνοιξη", "οι ανοίξεις", "των ανοίξεων", "τις ανοίξεις", "ανοίξεις", "θηλυκό"),
    ("αριθμός", "A1", "Σύμβολο ποσότητας.", ["γράμμα"], "ο αριθμός", "του αριθμού", "τον αριθμό", "αριθμέ", "οι αριθμοί", "των αριθμών", "τους αριθμούς", "αριθμοί", "αρσενικό"),
    ("αρχή", "A1", "Το ξεκίνημα.", ["τέλος"], "η αρχή", "της αρχής", "την αρχή", "αρχή", "οι αρχές", "των αρχών", "τις αρχές", "αρχές", "θηλυκό"),
    ("αυλή", "A1", "Υπαίθριος χώρος σπιτιού.", ["σπίτι"], "η αυλή", "της αυλής", "την αυλή", "αυλή", "οι αυλές", "των αυλών", "τις αυλές", "αυλές", "θηλυκό"),
    ("αυτοκίνητο", "A1", "Όχημα μεταφοράς.", ["πεζός"], "το αυτοκίνητο", "του αυτοκινήτου", "το αυτοκίνητο", "αυτοκίνητο", "τα αυτοκίνητα", "των αυτοκινήτων", "τα αυτοκίνητα", "αυτοκίνητα", "ουδέτερο"),
    ("βιβλίο", "A1", "Έντυπο με σελίδες.", ["τετράδιο"], "το βιβλίο", "του βιβλίου", "το βιβλίο", "βιβλίο", "τα βιβλία", "των βιβλίων", "τα βιβλία", "βιβλία", "ουδέτερο"),
    ("βουνό", "A1", "Υψηλός ορεινός όγκος.", ["πεδιάδα"], "το βουνό", "του βουνού", "το βουνό", "βουνό", "τα βουνά", "των βουνών", "τα βουνά", "βουνά", "ουδέτερο"),
    ("γλάστρα", "A1", "Δοχείο για φυτά.", ["κήπος"], "η γλάστρα", "της γλάστρας", "τη γλάστρα", "γλάστρα", "οι γλάστρες", "των γλαστρών", "τις γλάστρες", "γλάστρες", "θηλυκό"),
    ("γράμμα", "A1", "Σύμβολο αλφαβήτου.", ["αριθμός"], "το γράμμα", "του γράμματος", "το γράμμα", "γράμμα", "τα γράμματα", "των γραμμάτων", "τα γράμματα", "γράμματα", "ουδέτερο"),
    ("γυναίκα", "A1", "Ενήλικο θηλυκό.", ["άνδρας"], "η γυναίκα", "της γυναίκας", "τη γυναίκα", "γυναίκα", "οι γυναίκες", "των γυναικών", "τις γυναίκες", "γυναίκες", "θηλυκό"),
    ("δάσκαλος", "A1", "Εκπαιδευτικός.", ["μαθητής"], "ο δάσκαλος", "του δασκάλου", "τον δάσκαλο", "δάσκαλε", "οι δάσκαλοι", "των δασκάλων", "τους δασκάλους", "δάσκαλοι", "αρσενικό"),
    ("δέντρο", "A1", "Ψηλό φυτό.", ["λουλούδι"], "το δέντρο", "του δέντρου", "το δέντρο", "δέντρο", "τα δέντρα", "των δέντρων", "τα δέντρα", "δέντρα", "ουδέτερο"),
    ("δρόμος", "A1", "Χώρος μετακίνησης.", ["πεζοδρόμιο"], "ο δρόμος", "του δρόμου", "τον δρόμο", "δρόμε", "οι δρόμοι", "των δρόμων", "τους δρόμους", "δρόμοι", "αρσενικό"),
    ("δωμάτιο", "A1", "Χώρος σπιτιού.", ["αυλή"], "το δωμάτιο", "του δωματίου", "το δωμάτιο", "δωμάτιο", "τα δωμάτια", "των δωματίων", "τα δωμάτια", "δωμάτια", "ουδέτερο"),
    ("εικόνα", "A1", "Παράσταση προσώπου.", ["τοίχος"], "η εικόνα", "της εικόνας", "την εικόνα", "εικόνα", "οι εικόνες", "των εικόνων", "τις εικόνες", "εικόνες", "θηλυκό"),
    ("ειρήνη", "A1", "Απουσία πολέμου.", ["πόλεμος"], "η ειρήνη", "της ειρήνης", "την ειρήνη", "ειρήνη", "οι ειρήνες", "των ειρηνών", "τις ειρήνες", "ειρήνες", "θηλυκό"),
    ("ήλιος", "A1", "Το άστρο της ημέρας.", ["σελήνη"], "ο ήλιος", "του ήλιου", "τον ήλιο", "ήλιε", "οι ήλιοι", "των ήλιων", "τους ήλιους", "ήλιοι", "αρσενικό"),
    ("ημέρα", "A1", "Διάστημα φωτός.", ["νύχτα"], "η ημέρα", "της ημέρας", "την ημέρα", "ημέρα", "οι ημέρες", "των ημερών", "τις ημέρες", "ημέρες", "θηλυκό"),
    ("θάλασσα", "A1", "Έκταση αλμυρού νερού.", ["ξηρά"], "η θάλασσα", "της θάλασσας", "τη θάλασσα", "θάλασσα", "οι θάλασσες", "των θαλασσών", "τις θάλασσες", "θάλασσες", "θηλυκό"),
    ("καιρός", "A1", "Ατμοσφαιρικές συνθήκες.", ["κλίμα"], "ο καιρός", "του καιρού", "τον καιρό", "καιρέ", "οι καιροί", "των καιρών", "τους καιρούς", "καιροί", "αρσενικό"),
    ("καρέκλα", "A1", "Έπιπλο καθίσματος.", ["τραπέζι"], "η καρέκλα", "της καρέκλας", "την καρέκλα", "καρέκλα", "οι καρέκλες", "των καρεκλών", "τις καρέκλες", "καρέκλες", "θηλυκό"),
    ("κήπος", "A1", "Χώρος με λουλούδια.", ["σπίτι"], "ο κήπος", "του κήπου", "τον κήπο", "κήπε", "οι κήποι", "των κήπων", "τους κήπους", "κήποι", "αρσενικό"),
    ("λουλούδι", "A1", "Έγχρωμο μέρος φυτού.", ["αγκάθι"], "το λουλούδι", "του λουλουδιού", "το λουλούδι", "λουλούδι", "τα λουλούδια", "των λουλουδιών", "τα λουλούδια", "λουλούδια", "ουδέτερο"),
    ("μαθητής", "A1", "Παιδί σε σχολείο.", ["δάσκαλος"], "ο μαθητής", "του μαθητή", "τον μαθητή", "μαθητή", "οι μαθητές", "των μαθητών", "τους μαθητές", "μαθητές", "αρσενικό"),
    ("μητέρα", "A1", "Γονέας θηλυκού γένους.", ["πατέρας"], "η μητέρα", "της μητέρας", "τη μητέρα", "μητέρα", "οι μητέρες", "των μητέρων", "τις μητέρες", "μητέρες", "θηλυκό"),
    ("νερό", "A1", "Υγρό ζωής.", ["φωτιά"], "το νερό", "του νερού", "το νερό", "νερό", "τα νερά", "των νερών", "τα νερά", "νερά", "ουδέτερο"),
    ("νύχτα", "A1", "Διάστημα σκοταδιού.", ["ημέρα"], "η νύχτα", "της νύχτας", "τη νύχτα", "νύχτα", "οι νύχτες", "των νυχτών", "τις νύχτες", "νύχτες", "θηλυκό"),
    ("οικογένεια", "A1", "Ομάδα συγγενών.", ["μοναξιά"], "η οικογένεια", "της οικογένειας", "την οικογένεια", "οικογένεια", "οι οικογένειες", "των οικογενειών", "τις οικογένειες", "οικογένειες", "θηλυκό"),
    ("ουρανός", "A1", "Χώρος πάνω από τη γη.", ["γη"], "ο ουρανός", "του ουρανού", "τον ουρανό", "ουρανέ", "οι ουρανοί", "των ουρανών", "τους ουρανούς", "ουρανοί", "αρσενικό"),
    ("παιδί", "A1", "Νεαρό άτομο.", ["γέρος"], "το παιδί", "του παιδιού", "το παιδί", "παιδί", "τα παιδιά", "των παιδιών", "τα παιδιά", "παιδιά", "ουδέτερο"),
    ("πατέρας", "A1", "Γονέας αρσενικού γένους.", ["μητέρα"], "ο πατέρας", "του πατέρα", "τον πατέρα", "πατέρα", "οι πατέρες", "των πατέρων", "τους πατέρες", "πατέρες", "αρσενικό"),
    ("πόλη", "A1", "Μεγάλος οικισμός.", ["χωριό"], "η πόλη", "της πόλης", "την πόλη", "πόλη", "οι πόλεις", "των πόλεων", "τις πόλεις", "πόλεις", "θηλυκό"),
    ("σπίτι", "A1", "Χώρος κατοικίας.", ["δρόμος"], "το σπίτι", "του σπιτιού", "το σπίτι", "σπίτι", "τα σπίτια", "των σπιτιών", "τα σπίτια", "σπίτια", "ουδέτερο"),
    ("σχολείο", "A1", "Ίδρυμα μάθησης.", ["σπίτι"], "το σχολείο", "του σχολείου", "το σχολείο", "σχολείο", "τα σχολεία", "των σχολείων", "τα σχολεία", "σχολεία", "ουδέτερο"),
    ("τραπέζι", "A1", "Έπιπλο φαγητού.", ["καρέκλα"], "το τραπέζι", "του τραπεζιού", "το τραπέζι", "τραπέζι", "τα τραπέζια", "των τραπεζιών", "τα τραπέζια", "τραπέζια", "ουδέτερο"),
    ("φίλος", "A1", "Πρόσωπο φιλίας.", ["εχθρός"], "ο φίλος", "του φίλου", "τον φίλο", "φίλε", "οι φίλοι", "των φίλων", "τους φίλους", "φίλοι", "αρσενικό"),
    ("φως", "A1", "Ακτινοβολία ημέρας.", ["σκότος"], "το φως", "του φωτός", "το φως", "φως", "τα φώτα", "των φώτων", "τα φώτα", "φώτα", "ουδέτερο"),
    ("ψωμί", "A1", "Τροφή από αλεύρι.", ["νερό"], "το ψωμί", "του ψωμιού", "το ψωμί", "ψωμί", "τα ψωμιά", "των ψωμιών", "τα ψωμιά", "ψωμιά", "ουδέτερο")
]

for noun, lvl, defn, ants, ns, gs, as_, vs, np, gp, ap, vp, gen in extra_el_n:
    if noun not in el_n:
        el_n[noun] = {
            "gender": gen, "level": lvl, "definition": defn, "antonyms": ants,
            "cases": {
                "nom_sing": ns, "gen_sing": gs, "acc_sing": as_, "voc_sing": vs,
                "nom_plur": np, "gen_plur": gp, "acc_plur": ap, "voc_plur": vp
            }
        }

write_json("apps/el-genos-ptoseis/data/nouns.json", el_n)


# Additional Italian Verbs expansion
with open("apps/it-coniugatore/data/verbs.json", "r", encoding="utf-8") as f:
    it_v = json.load(f)

more_it_v = [
    ("accettare", "A2", "Riconoscere o ricevere di buon grado.", ["rifiutare"], "are", "accetto", "accetti", "accetta", "accettiamo", "accettate", "accettano", "ho accettato", "accettavo", "accetterò", "accetterei"),
    ("accompagnare", "A2", "Andare insieme a qualcuno.", ["abbandonare"], "are", "accompagno", "accompagni", "accompagna", "accompagniamo", "accompagnate", "accompagnano", "ho accompagnato", "accompagnavo", "accompagnerò", "accompagnerei"),
    ("ascoltare", "A1", "Sentire con attenzione.", ["ignorare"], "are", "ascolto", "ascolti", "ascolta", "ascoltiamo", "ascoltate", "ascoltano", "ho ascoltato", "ascoltavo", "ascolterò", "ascolterei"),
    ("aspettare", "A1", "Rimanere in attesa.", ["partire"], "are", "aspetto", "aspetti", "aspetta", "aspettiamo", "aspettate", "aspettano", "ho aspettato", "aspettavo", "aspetterò", "aspetterei"),
    ("baciare", "A1", "Toccare con le labbra per affetto.", ["mordere"], "are", "bacio", "baci", "bacia", "baciamo", "baciate", "baciano", "ho baciato", "baciavo", "baccerò", "bacierei"),
    ("camminare", "A1", "Procedere a passi.", ["correre"], "are", "cammino", "cammini", "cammina", "camminiamo", "camminate", "camminano", "ho camminato", "camminavo", "camminerò", "camminerei"),
    ("cucinare", "A1", "Preparare il cibo.", ["digiunare"], "are", "cucino", "cucini", "cucina", "custiniamo", "cucinate", "cucinano", "ho cucinato", "cucinavo", "cucinerò", "cucinerei"),
    ("disegnare", "A1", "Rappresentare con linee.", ["cancellare"], "are", "disegno", "disegni", "disegna", "disegniamo", "disegnate", "disegnano", "ho disegnato", "disegnavo", "disegnerò", "disegnerei"),
    ("guidare", "A1", "Manovrare un veicolo.", ["camminare"], "are", "guido", "guidi", "guida", "guidiamo", "guidate", "guidano", "ho guidato", "guidavo", "guiderò", "guiderei"),
    ("imparare", "A1", "Acquisire conoscenze.", ["dimenticare"], "are", "imparo", "impari", "impara", "impariamo", "imparate", "imparano", "ho imparato", "imparavo", "imparerò", "imparerei"),
    ("insegnare", "A1", "Trasmettere nozioni o competenze.", ["imparare"], "are", "insegno", "insegni", "insegna", "insegniamo", "insegnate", "insegnano", "ho insegnato", "insegnavo", "insegnerò", "insegnerei"),
    ("lavorare", "A1", "Esercitare un'attività lavorativa.", ["riposare"], "are", "lavoro", "lavori", "lavora", "lavoriamo", "lavorate", "lavorano", "ho lavorato", "lavoravo", "lavorerò", "lavorerei"),
    ("nuotare", "A1", "Muoversi nell'acqua.", ["affondare"], "are", "nuoto", "nuoti", "nuota", "nuotiamo", "nuotate", "nuotano", "ho nuotato", "nuotavo", "nuoterò", "nuoterei"),
    ("organizzare", "A2", "Disporre in ordine o pianificare.", ["disorganizzare"], "are", "organizzo", "organizzi", "organizza", "organizziamo", "organizzate", "organizzano", "ho organizzato", "organizzavo", "organizzerò", "organizzerei"),
    ("passare", "A1", "Andare oltre o trascorrere tempo.", ["fermarsi"], "are", "passo", "passi", "passa", "passiamo", "passate", "passano", "ho passato", "passavo", "passerò", "passerei"),
    ("pensare", "A1", "Riflettere o formulare idee.", ["agire d'impulso"], "are", "penso", "pensi", "pensa", "pensiamo", "pensate", "pensano", "ho pensato", "pensavo", "penserò", "penserei"),
    ("portare", "A1", "Trasportare qualcosa.", ["lasciare"], "are", "porto", "porti", "porta", "portiamo", "portate", "portano", "ho portato", "portavo", "porterò", "porterei"),
    ("provare", "A1", "Fare un tentativo.", ["rinunciare"], "are", "provo", "provi", "prova", "proviamo", "provate", "provano", "ho provato", "provavo", "proverò", "proverei"),
    ("pulire", "A1", "Rendere pulito.", ["spalmare"], "ire", "pulisco", "pulisci", "pulisce", "puliamo", "pulite", "puliscono", "ho pulito", "pulivo", "pulirò", "pulirei"),
    ("ricordare", "A1", "Tenere a mente.", ["dimenticare"], "are", "ricordo", "ricordi", "ricorda", "ricordiamo", "ricordate", "ricordano", "ho ricordato", "ricordavo", "ricorderò", "ricorderei"),
    ("rispondere", "A1", "Dare una risposta.", ["domandare"], "ere", "rispondo", "rispondi", "risponde", "rispondiamo", "rispondete", "rispondono", "ho risposto", "rispondevo", "risponderò", "risponderei"),
    ("salutare", "A1", "Rivolgere un saluto.", ["ignorare"], "are", "saluto", "saluti", "saluta", "salutiamo", "salutate", "salutano", "ho salutato", "salutavo", "saluterò", "saluterei"),
    ("spiegare", "A1", "Rendere chiaro.", ["confondere"], "are", "spiego", "spieghi", "spiega", "spieghiamo", "spiegate", "spiegano", "ho spiegato", "spiegavo", "spiegherò", "spiegherei"),
    ("studiare", "A1", "Applicarsi allo studio.", ["oziare"], "are", "studio", "studi", "studia", "studiamo", "studiate", "studiano", "ho studiato", "studiavo", "studierò", "studierei"),
    ("suonare", "A1", "Produrre musica con uno strumento.", ["tacere"], "are", "suono", "suoni", "suona", "suoniamo", "suonate", "suonano", "ho suonato", "suonavo", "suonerò", "suonerei"),
    ("telefonare", "A1", "Chiamare al telefono.", ["scrivere"], "are", "telefono", "telefoni", "telefona", "telefoniamo", "telefonate", "telefonano", "ho telefonato", "telefonavo", "telefonerò", "telefonerei"),
    ("tornare", "A1", "Rientrare in un luogo.", ["partire"], "are", "torno", "torni", "torna", "torniamo", "tornate", "tornano", "sono tornato", "tornavo", "tornerò", "tornerei"),
    ("trovare", "A1", "Incontrare o scoprire.", ["perdere"], "are", "trovo", "trovi", "trova", "troviamo", "trovate", "trovano", "ho trovato", "trovavo", "troverò", "troverei"),
    ("usare", "A1", "Adoperare un oggetto.", ["riporre"], "are", "uso", "usi", "usa", "usiamo", "usate", "usano", "ho usato", "usavo", "userò", "userei"),
    ("viaggiare", "A1", "Fare un viaggio.", ["restare"], "are", "viaggio", "viaggi", "viaggia", "viaggiamo", "viaggiate", "viaggiano", "ho viaggiato", "viaggiavo", "viaggerò", "viaggerei")
]

for inf, lvl, defn, ants, grp, pres_1s, pres_2s, pres_3s, pres_1p, pres_2p, pres_3p, pass_c, imp_1s, fut_1s, cond_1s in more_it_v:
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

# Additional Russian Verbs & Nouns expansion
with open("apps/ru-spryazhenie/data/verbs.json", "r", encoding="utf-8") as f:
    ru_v = json.load(f)

more_ru_v = [
    ("бежать", "A1", "Быстро передвигаться ногами.", ["стоять"], "1-е спряжение", "бегу", "бежишь", "бежит", "бежим", "бежите", "бегут", "бежал", "буду бежать"),
    ("болеть", "A1", "Испытывать боль или болезнь.", ["выздоравливать"], "1-е спряжение", "болею", "болеешь", "болеет", "болеем", "болеете", "болеют", "болел", "буду болеть"),
    ("верить", "A1", "Доверять, считать правдой.", ["сомневаться"], "2-е спряжение", "верю", "веришь", "верит", "верим", "верите", "верят", "верил", "буду верить"),
    ("встречать", "A1", "Сходиться с приходящим.", ["провожать"], "1-е спряжение", "встречаю", "встречаешь", "встречает", "встречаем", "встречаете", "встречают", "встречал", "буду встречаться"),
    ("готовить", "A1", "Приготовлять пищу.", ["голодать"], "2-е спряжение", "готовлю", "готовишь", "готовит", "готовим", "готовите", "готовят", "готовил", "буду готовить"),
    ("дарить", "A1", "Делать подарок.", ["забирать"], "2-е спряжение", "дарю", "даришь", "дарит", "дарим", "дарите", "дарят", "дарил", "буду дарить"),
    ("держать", "A1", "Удерживать в руках.", ["ронять"], "2-е спряжение (искл.)", "держу", "держишь", "держит", "держим", "держите", "держат", "держал", "буду держать"),
    ("ждать", "A1", "Быть в ожидании.", ["уходить"], "1-е спряжение", "жду", "ждёшь", "ждёт", "ждём", "ждёте", "ждут", "ждал", "буду ждать"),
    ("забывать", "A1", "Терять из памяти.", ["помнить"], "1-е спряжение", "забываю", "забываешь", "забывает", "забываем", "забываете", "забывают", "забывал", "буду забывать"),
    ("звонить", "A1", "Связываться по телефону.", ["молчать"], "2-е спряжение", "звоню", "звонишь", "звонит", "звоним", "звоните", "звонят", "звонил", "буду звонить"),
    ("играть", "A1", "Заниматься игрой.", ["работать"], "1-е спряжение", "играю", "играешь", "играет", "играем", "играете", "играют", "играл", "буду играть"),
    ("искать", "A1", "Стараться найти.", ["терять"], "1-е спряжение", "ищу", "ищешь", "ищет", "ищем", "ищете", "ищут", "искал", "буду искать"),
    ("летать", "A1", "Передвигаться по воздуху.", ["ползать"], "1-е спряжение", "летаю", "летаешь", "летает", "летаем", "летаете", "летают", "летал", "буду летать"),
    ("менять", "A1", "Делать иным.", ["сохранять"], "1-е спряжение", "меняю", "меняешь", "меняет", "меняем", "меняете", "меняют", "менял", "буду менять"),
    ("мечтать", "A1", "Предаваться мечтам.", ["действовать"], "1-е спряжение", "мечтаю", "мечтаешь", "мечтает", "мечтаем", "мечтаете", "мечтают", "мечтал", "буду мечтать"),
    ("мыть", "A1", "Очищать водой.", ["пачкать"], "1-е спряжение", "мою", "моешь", "моет", "моем", "моешь", "моют", "мыл", "буду мыть"),
    ("находить", "A1", "Обнаруживать потерянное.", ["терять"], "2-е спряжение", "нахожу", "находишь", "находит", "находим", "находите", "находят", "находил", "буду находить"),
    ("отдыхать", "A1", "Восстанавливать силы.", ["работать"], "1-е спряжение", "отдыхаю", "отдыхаешь", "отдыхает", "отдыхаем", "отдыхаете", "отдыхают", "отдыхал", "буду отдыхать"),
    ("открывать", "A1", "Делать доступным.", ["закрывать"], "1-е спряжение", "открываю", "открываешь", "открывает", "открываем", "открываете", "открывают", "открывал", "буду открывать"),
    ("падать", "A1", "Двигаться вниз.", ["подниматься"], "1-е спряжение", "падаю", "падаешь", "падает", "падаем", "падаете", "падают", "падал", "буду падать"),
    ("петь", "A1", "Исполнять песню.", ["молчать"], "1-е спряжение", "пою", "поёшь", "поёт", "поём", "поёте", "поют", "пел", "буду петь"),
    ("писать", "A1", "Изображать знаки.", ["стирать"], "1-е спряжение", "пишу", "пишешь", "пишет", "пишем", "пишете", "пишут", "писал", "буду писать"),
    ("платить", "A1", "Отдавать деньги.", ["получать"], "2-е спряжение", "плачу", "платишь", "платит", "платим", "платите", "платят", "платил", "буду платить"),
    ("помогать", "A1", "Оказывать помощь.", ["мешать"], "1-е спряжение", "помогаю", "помогаешь", "помогает", "помогаем", "помогаете", "помогают", "помогал", "буду помогать"),
    ("понимать", "A1", "Осознавать смысл.", ["путать"], "1-е спряжение", "понимаю", "понимаешь", "понимает", "понимаем", "понимаете", "понимают", "понимал", "буду понимать"),
    ("продавать", "A1", "Отдавать за деньги.", ["покупать"], "1-е спряжение", "продаю", "продаёшь", "продаёт", "продаём", "продаёте", "продают", "продавал", "буду продавать"),
    ("просить", "A1", "Обращаться с просьбой.", ["требовать"], "2-е спряжение", "прошу", "просишь", "просит", "просим", "просите", "просят", "просил", "буду просить"),
    ("рисовать", "A1", "Создавать изображение.", ["стирать"], "1-е спряжение", "рисую", "рисуешь", "рисует", "рисуем", "рисуете", "рисуют", "рисовал", "буду рисовать"),
    ("слушать", "A1", "Воспринимать слухом.", ["игнорировать"], "1-е спряжение", "слушаю", "слушаешь", "слушает", "слушаем", "слушаете", "слушают", "слушал", "буду слушать"),
    ("смеяться", "A1", "Издавать смех.", ["плакать"], "1-е спряжение", "смеюсь", "смеёшься", "смеётся", "смеёмся", "смеётесь", "смеются", "смеялся", "буду смеяться")
]

for inf, lvl, defn, ants, grp, p1, p2, p3, p4, p5, p6, past, fut in more_ru_v:
    if inf not in ru_v:
        ru_v[inf] = {
            "group": grp, "aspect": "несовершенный", "level": lvl, "definition": defn, "antonyms": ants,
            "tenses": {
                "pres": [f"я {p1}", f"ты {p2}", f"он/она {p3}", f"мы {p4}", f"вы {p5}", f"они {p6}"],
                "past": [f"он {past}", f"она {past}а", f"оно {past}о", f"они {past}и"],
                "fut": [f"я {fut}", f"ты будете {inf}", f"он/она будет {inf}", f"мы будем {inf}", f"вы будете {inf}", f"они будут {inf}"]
            }
        }

write_json("apps/ru-spryazhenie/data/verbs.json", ru_v)

with open("apps/ru-rod-padezhi/data/nouns.json", "r", encoding="utf-8") as f:
    ru_n = json.load(f)

more_ru_n = [
    ("автомобиль", "A1", "Самоходное средство.", ["пешеход"], "мужской", "автомобиль", "автомобиля", "автомобилю", "автомобиль", "автомобилем", "автомобиле", "автомобили", "автомобилей", "автомобилям", "автомобили", "автомобилями", "автомобилях"),
    ("билет", "A1", "Документ на проезд.", ["штраф"], "мужской", "билет", "билета", "билету", "билет", "билетом", "билете", "билеты", "билетов", "билетам", "билеты", "билетами", "билетах"),
    ("больница", "A1", "Лечебное учреждение.", ["аптека"], "женский", "больница", "больницы", "больнице", "больницу", "больницей", "больнице", "больницы", "больниц", "больницам", "больницы", "больницами", "больницах"),
    ("вечер", "A1", "Время суток перед ночью.", ["утро"], "мужской", "вечер", "вечера", "вечеру", "вечер", "вечером", "вечере", "вечера", "вечеров", "вечерам", "вечера", "вечерами", "вечерах"),
    ("вокзал", "A1", "Станция транспорта.", ["аэропорт"], "мужской", "вокзал", "вокзала", "вокзалу", "вокзал", "вокзалом", "вокзале", "вокзалы", "вокзалов", "вокзалам", "вокзалы", "вокзалами", "вокзалах"),
    ("врач", "A1", "Медицинский специалист.", ["пациент"], "мужской", "врач", "врача", "врачу", "врача", "врачом", "враче", "врачи", "врачей", "врачам", "врачей", "врачами", "врачах"),
    ("город", "A1", "Крупный населенный пункт.", ["деревня"], "мужской", "город", "города", "городу", "город", "городом", "городе", "города", "городов", "городам", "города", "городами", "городах"),
    ("дверь", "A1", "Проем для входа.", ["окно"], "женский", "дверь", "двери", "двери", "дверь", "дверью", "двери", "двери", "дверей", "дверям", "двери", "дверьми", "дверях"),
    ("деревня", "A1", "Сельский населенный пункт.", ["город"], "женский", "деревня", "деревни", "деревне", "деревню", "деревней", "деревне", "деревни", "деревень", "деревням", "деревни", "деревнями", "деревнях"),
    ("дорога", "A1", "Полоса для движения.", ["тупик"], "женский", "дорога", "дороги", "дороге", "дорогу", "дорогой", "дороге", "дороги", "дорог", "дорогам", "дороги", "дорогами", "дорогах"),
    ("завод", "A1", "Промышленное предприятие.", ["ферма"], "мужской", "завод", "завода", "заводу", "завод", "заводом", "заводе", "заводы", "заводов", "заводам", "заводы", "заводами", "заводах"),
    ("завтрак", "A1", "Утренняя еда.", ["ужин"], "мужской", "завтрак", "завтрака", "завтраку", "завтрак", "завтраком", "завтраке", "завтраки", "завтраков", "завтракам", "завтраки", "завтраками", "завтраках"),
    ("зима", "A1", "Холодное время года.", ["лето"], "женский", "зима", "зимы", "зиме", "зиму", "зимой", "зиме", "зимы", "зим", "зимам", "зимы", "зимами", "зимах"),
    ("карандаш", "A1", "Инструмент для письма.", ["ручка"], "мужской", "карандаш", "карандаша", "карандашу", "карандаш", "карандашом", "карандаше", "карандаши", "карандашей", "карандашам", "карандаши", "карандашами", "карандашах"),
    ("квартира", "A1", "Жилое помещение.", ["дом"], "женский", "квартира", "квартиры", "квартире", "квартиру", "квартирой", "квартире", "квартиры", "квартир", "квартирам", "квартиры", "квартирами", "квартирах"),
    ("комната", "A1", "Часть дома.", ["коридор"], "женский", "комната", "комнаты", "комнате", "комнату", "комнатой", "комнате", "комнаты", "комнат", "комнатам", "комнаты", "комнатами", "комнатах"),
    ("кошка", "A1", "Домашнее животное.", ["собака"], "женский", "кошка", "кошки", "кошке", "кошку", "кошкой", "кошке", "кошки", "кошек", "кошкам", "кошек", "кошками", "кошках"),
    ("магазин", "A1", "Торговое заведение.", ["рынок"], "мужской", "магазин", "магазина", "магазину", "магазин", "магазином", "магазине", "магазины", "магазинов", "магазинам", "магазины", "магазинами", "магазинах"),
    ("море", "A1", "Водоем с соленой водой.", ["суша"], "средний", "море", "моря", "морю", "море", "морем", "море", "моря", "морей", "морям", "моря", "морями", "морях"),
    ("ночь", "A1", "Темное время суток.", ["день"], "женский", "ночь", "ночи", "ночи", "ночь", "ночью", "ночи", "ночи", "ночей", "ночам", "ночи", "ночами", "ночах"),
    ("обед", "A1", "Дневной прием пищи.", ["завтрак"], "мужской", "обед", "обеда", "обеду", "обед", "обедом", "обеде", "обеды", "обедов", "обедам", "обеды", "обедами", "обедах"),
    ("осень", "A1", "Время года перед зимой.", ["весна"], "женский", "осень", "осени", "осени", "осень", "осенью", "осени", "осени", "осеней", "осеням", "осени", "осенями", "осенях"),
    ("песня", "A1", "Музыкальное произведение.", ["тишина"], "женский", "песня", "песни", "песне", "песню", "песней", "песне", "песни", "песен", "песням", "песни", "песнями", "песнях"),
    ("поезд", "A1", "Состав вагонов.", ["самолет"], "мужской", "поезд", "поезда", "поезду", "поезд", "поездом", "поезде", "поезда", "поездов", "поездам", "поезда", "поездами", "поездах"),
    ("работа", "A1", "Трудовая деятельность.", ["отдых"], "женский", "работа", "работы", "работе", "работу", "работой", "работе", "работы", "работ", "работам", "работы", "работами", "работах"),
    ("самолет", "A1", "Воздушное судно.", ["поезд"], "мужской", "самолет", "самолета", "самолету", "самолет", "самолетом", "самолете", "самолеты", "самолетов", "самолетам", "самолеты", "самолетами", "самолетах"),
    ("семья", "A1", "Группа родственников.", ["одиночество"], "женский", "семья", "семьи", "семье", "семью", "семьей", "семье", "семьи", "семей", "семьям", "семьи", "семьями", "семьях"),
    ("собака", "A1", "Домашнее животное.", ["кошка"], "женский", "собака", "собаки", "собаке", "собаку", "собакой", "собаке", "собаки", "собак", "собакам", "собак", "собаками", "собаках"),
    ("солнце", "A1", "Дневное светило.", ["луна"], "средний", "солнце", "солнца", "солнцу", "солнце", "солнцем", "солнце", "солнца", "солнц", "солнцам", "солнца", "солнцами", "солнцах"),
    ("телефон", "A1", "Устройство связи.", ["письмо"], "мужской", "телефон", "телефона", "телефону", "телефон", "телефоном", "телефоне", "телефоны", "телефонов", "телефонам", "телефоны", "телефонами", "телефонах")
]

for noun, lvl, defn, ants, gen, ns, gs, ds, as_, is_, ps, np, gp, dp, ap, ip, pp in more_ru_n:
    if noun not in ru_n:
        ru_n[noun] = {
            "gender": gen, "level": lvl, "definition": defn, "antonyms": ants,
            "cases": {
                "nom_sing": ns, "gen_sing": gs, "dat_sing": ds, "acc_sing": as_, "inst_sing": is_, "prep_sing": ps,
                "nom_plur": np, "gen_plur": gp, "dat_plur": dp, "acc_plur": ap, "inst_plur": ip, "prep_plur": pp
            }
        }

write_json("apps/ru-rod-padezhi/data/nouns.json", ru_n)

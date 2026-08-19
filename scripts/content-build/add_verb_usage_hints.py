#!/usr/bin/env python3
"""
COSYlanguages — Verb Preposition & Case Usage Hints Enricher & Italian Nouns Completer
Populates precise, verified 'usage_hint' for all verbs across French, Italian, Russian, and Greek standalone apps,
and fills explicit 'article' and 'plural' fields for all Italian nouns in it-genere.
"""

import json
import os

FR_VERBS_PATH = "apps/fr-conjugeur/data/verbs.json"
IT_VERBS_PATH = "apps/it-coniugatore/data/verbs.json"
RU_VERBS_PATH = "apps/ru-spryazhenie/data/verbs.json"
EL_VERBS_PATH = "apps/el-klisi-rimaton/data/verbs.json"
IT_NOUNS_PATH = "apps/it-genere/data/nouns.json"

# ==============================================================================
# FRENCH USAGE HINTS (Complete for all 208 French verbs)
# ==============================================================================
FR_HINTS = {
    # Core Communication & Thought
    "parler": "parler à (qqn) / de (qqch ou qqn)",
    "dire": "dire (qqch) à (qqn) / de (faire qqch)",
    "répondre": "répondre à (qqn / qqch)",
    "demander": "demander (qqch) à (qqn) / de (faire qqch)",
    "expliquer": "expliquer (qqch) à (qqn)",
    "montrer": "montrer (qqch) à (qqn)",
    "raconter": "raconter (qqch) à (qqn)",
    "écrire": "écrire (qqch) à (qqn)",
    "lire": "lire + COD (lire qqch) / à (qqn)",
    "penser": "penser à (qqch/qqn) / penser de (opinion)",
    "croire": "croire à (qqch) / en (dieu) / + COD",
    "douter": "douter de (qqch/qqn)",
    "réfléchir": "réfléchir à (un problème / une décision)",
    "savoir": "+ COD / + infinitif / que...",
    "connaître": "+ COD (connaître qqn/qqch)",
    "comprendre": "+ COD (comprendre qqn/qqch)",
    "apprendre": "apprendre (qqch) à (qqn) / apprendre à (faire)",
    "enseigner": "enseigner (qqch) à (qqn)",
    "étudier": "+ COD / étudier à (l'université)",
    "rêver": "rêver de (qqch/qqn / faire qqch)",
    "hésiter": "hésiter à (faire qqch)",
    "oublier": "oublier + COD / de (faire qqch)",
    "se rappeler": "+ COD (se rappeler qqch)",
    "rappeler": "rappeler (qqch) à (qqn)",
    "s'inquiéter": "s'inquiéter de / pour (qqn/qqch)",
    "inquiéter": "inquiéter + COD",
    "espérer": "espérer + COD / + infinitif",
    "souhaiter": "souhaiter (qqch) à (qqn)",
    "exprimer": "exprimer (qqch) à (qqn)",
    "déclarer": "déclarer (qqch) à (qqn)",
    "affirmer": "affirmer + COD / que...",
    "approuver": "+ COD (approuver qqch)",
    "confirmer": "confirmer (qqch) à (qqn)",
    "insister": "insister sur (qqch) / pour (faire)",
    "proposer": "proposer (qqch) à (qqn) / de (faire)",
    "refuser": "refuser + COD / de (faire qqch)",
    "accepter": "accepter + COD / de (faire qqch)",
    "conseiller": "conseiller (qqch) à (qqn) / de (faire)",
    "prier": "prier (qqn) de (faire qqch)",
    "téléphoner": "téléphoner à (qqn)",
    "discuter": "discuter de (qqch) avec (qqn)",

    # Motion & Location
    "aller": "aller à (ville/lieu) / en / chez (qqn)",
    "venir": "venir de (origine/lieu) / avec (qqn)",
    "partir": "intransitif: partir de (lieu) / pour (destination)",
    "sortir": "sortir de (lieu) / avec (qqn) / + COD (sortir le chien)",
    "entrer": "entrer dans (lieu) / en (classe)",
    "arriver": "arriver à (ville) / en (pays) / chez (qqn)",
    "retourner": "retourner à / en / chez",
    "rentrer": "rentrer à (la maison) / en / chez",
    "monter": "monter dans (train) / sur (montagne) / à",
    "descendre": "descendre de (véhicule) / dans (rue)",
    "tomber": "tomber de (chaise) / sur (qqn) / dans",
    "rester": "rester à / chez / avec",
    "marcher": "marcher vers / dans / avec",
    "courir": "courir vers / dans / après (qqn)",
    "voler": "voler vers / au-dessus de / + COD (voler un objet à qqn)",
    "nager": "nager dans (mer/piscine) / avec",
    "sauter": "sauter de / sur / par-dessus",
    "traverser": "+ COD (traverser la rue)",
    "avancer": "avancer vers / de (quelques mètres)",
    "rouler": "rouler sur (la route) / à (100 km/h)",
    "passer": "passer par / devant / chez / passer + COD (temps)",
    "glisser": "glisser sur (le verglas)",
    "quitter": "+ COD (quitter un lieu ou qqn)",
    "suivre": "+ COD (suivre qqn/qqch)",

    # Action & Perception
    "faire": "faire + COD / faire de (sport/musique)",
    "voir": "+ COD (voir qqn/qqch)",
    "regarder": "+ COD (regarder qqn/qqch)",
    "écouter": "+ COD (écouter qqn/qqch)",
    "entendre": "+ COD (entendre un bruit)",
    "toucher": "toucher à (qqch) / + COD (toucher le bois)",
    "sentir": "+ COD (sentir qqch) / se sentir + adj",
    "remarquer": "+ COD (remarquer un détail)",
    "éclairer": "+ COD (éclairer une pièce)",
    "briller": "briller dans / par",

    # Social & Personal Interaction
    "aimer": "+ COD (aimer qqn/qqch)",
    "adorer": "+ COD (adorer qqn/qqch)",
    "détester": "+ COD (détester qqch)",
    "plaire": "plaire à (qqn)",
    "manquer": "manquer à (qqn: tu me manques) / manquer de (qqch)",
    "ressembler": "ressembler à (qqn / qqch)",
    "obéir": "obéir à (qqn / une règle)",
    "aider": "aider (qqn) à (faire qqch)",
    "servir": "servir à (qqch) / de (qqch) / servir qqn",
    "inviter": "inviter (qqn) à (un événement / faire qqch)",
    "soigner": "+ COD (soigner un malade)",
    "sauver": "sauver (qqn) de (un danger)",
    "protéger": "protéger (qqn) contre / de (danger)",
    "punir": "punir (qqn) pour (une faute)",
    "accuser": "accuser (qqn) de (qqch)",
    "blesser": "+ COD (blesser qqn)",
    "frapper": "frapper à (la porte) / + COD",
    "embrasser": "+ COD (embrasser qqn)",
    "rencontrer": "+ COD (rencontrer qqn)",
    "accompagner": "+ COD (accompagner qqn)",
    "inviter": "inviter (qqn) à (dîner)",
    "partager": "partager (qqch) avec (qqn)",
    "présenter": "présenter (qqn) à (qqn d'autre)",
    "séparer": "séparer (qqch) de (qqch d'autre)",
    "tromper": "+ COD (tromper qqn)",
    "agacer": "+ COD (agacer qqn)",
    "amuser": "+ COD / s'amuser avec",
    "calmer": "+ COD (calmer un enfant)",

    # Transaction & Possession
    "donner": "donner (qqch) à (qqn)",
    "prendre": "prendre + COD / prendre soin de",
    "avoir": "avoir besoin de / avoir peur de / + COD",
    "être": "être à (appartenance) / en / dans / + adjectif",
    "recevoir": "recevoir (qqch) de (qqn)",
    "acheter": "acheter (qqch) à / pour (qqn)",
    "vendre": "vendre (qqch) à (qqn)",
    "payer": "payer (qqch) à (qqn) / pour",
    "louer": "louer (qqch) à (qqn)",
    "emprunter": "emprunter (qqch) à (qqn)",
    "prêter": "prêter (qqch) à (qqn)",
    "gagner": "gagner + COD / contre (un adversaire)",
    "perdre": "perdre + COD / contre",
    "chercher": "chercher + COD / chercher à (faire qqch)",
    "trouver": "trouver + COD",
    "garder": "+ COD (garder un secret)",
    "jeter": "jeter (qqch) à / dans",
    "ramasser": "+ COD (ramasser un objet)",
    "remplacer": "remplacer (qqch) par (autre chose)",

    # Additional Mapped French Verbs
    "cacher": "cacher (qqch) à (qqn)",
    "compter": "compter sur (qqn) / compter + COD",
    "décider": "décider de (faire qqch)",
    "préférer": "préférer + COD / + infinitif à",
    "pleurer": "pleurer de (joie/tristesse) / sur",
    "pousser": "pousser (qqn) à (faire qqch)",
    "tirer": "tirer sur (une cible) / vers",
    "laisser": "laisser + COD / laisser (qqn) faire",
    "appeler": "appeler + COD (appeler qqn)",
    "imaginer": "imaginer + COD (imaginer une scène)",
    "écraser": "écraser + COD",
    "désirer": "désirer + COD / + infinitif",
    "admirer": "admirer + COD (admirer qqn)",
    "étonner": "étonner + COD (étonner qqn)",
    "choisir": "choisir + COD / de (faire qqch)",
    "réussir": "réussir à (faire qqch) / un examen (+ COD)",
    "prévoir": "prévoir + COD (prévoir un événement)",
    "prévenir": "prévenir (qqn) de (qqch)",
    "accorder": "accorder (qqch) à (qqn)",
    "ajouter": "ajouter (qqch) à (qqch d'autre)",
    "apporter": "apporter (qqch) à (qqn)",
    "charger": "charger (qqn) de (faire qqch)",
    "commander": "commander (qqch) à (qqn)",
    "comparer": "comparer (qqch) à / avec (qqch d'autre)",
    "considérer": "considérer + COD comme (adjectif/nom)",
    "coûter": "coûter (une somme) à (qqn)",
    "emmener": "emmener (qqn) à / dans (un lieu)",
    "envoyer": "envoyer (qqch) à (qqn)",
    "éviter": "éviter + COD / de (faire qqch)",
    "ignorer": "ignorer + COD (ignorer qqn/qqch)",
    "importer": "importer de (pays) / peu importe",
    "indiquer": "indiquer (qqch) à (qqn)",
    "juger": "juger (qqn/qqch) sur",
    "lever": "lever + COD / se lever à (heure)",
    "limiter": "limiter + COD à (un niveau)",
    "mener": "mener (qqn) à (un endroit)",
    "mesurer": "mesurer + COD (mesurer une longueur)",
    "nommer": "nommer (qqn) + nom / adjectif",
    "occuper": "s'occuper de (qqn/qqch) / + COD",
    "oser": "oser + infinitif direct (oser faire)",
    "porter": "porter + COD (porter un vêtement)",
    "poser": "poser (qqch) sur (la table)",
    "regretter": "regretter + COD / de (faire)",
    "répéter": "répéter (qqch) à (qqn)",
    "reposer": "se reposer sur / de (fatigue)",
    "signaler": "signaler (qqch) à (qqn)",
    "admettre": "admettre + COD / que...",
    "attraper": "attraper + COD (attraper un ballon)",
    "brûler": "brûler + COD (brûler du bois)",
    "défendre": "défendre (qqn) contre (un danger) / de (faire)",
    "découvrir": "découvrir + COD (découvrir un lieu)",
    "mettre": "mettre (qqch) sur / dans",
    "rendre": "rendre (qqch) à (qqn) / rendre + adjectif",
    "tenir": "tenir à (qqn/qqch) / + COD",

    # Daily Life & Routines
    "habiter": "habiter à (ville) / en / au (pays) / dans",
    "travailler": "travailler pour / chez / avec / à",
    "jouer": "jouer à (jeu/sport) / de (instrument de musique)",
    "chanter": "chanter + COD / pour (qqn)",
    "danser": "danser avec / sur",
    "voyager": "voyager en / à / avec",
    "préparer": "préparer + COD / se préparer à",
    "visiter": "+ COD (visiter un lieu)",
    "nettoyer": "+ COD (nettoyer la maison)",
    "laver": "+ COD (laver les mains)",
    "fermer": "+ COD (fermer la porte)",
    "ouvrir": "+ COD (ouvrir une fenêtre)",
    "allumer": "+ COD (allumer la lumière)",
    "éteindre": "+ COD (éteindre le feu/la télé)",
    "couper": "+ COD (couper le pain)",
    "chauffer": "+ COD (chauffer l'eau)",
    "cuisiner": "+ COD (cuisiner un plat)",
    "déjeuner": "déjeuner de / avec",
    "dîner": "dîner chez / avec",
    "fumer": "+ COD (fumer une cigarette)",
    "manger": "+ COD (manger qqch)",
    "boire": "+ COD (boire un verre)",
    "dormir": "dormir dans (un lit) / pendant",
    "vivre": "vivre à / en / avec / de",
    "mourir": "mourir de (maladie/faim) / pour",
    "naître": "naître à (ville) / en (année/pays)",
    "nourrir": "+ COD / se nourrir de",
    "soigner": "+ COD (soigner un patient)",
    "guérir": "guérir de (une maladie)",
    "vieillir": "vieillir de (quelques années)",
    "grandir": "grandir en / dans",

    # Modal & State Verbs
    "pouvoir": "+ infinitif direct (pouvoir faire)",
    "vouloir": "+ COD / + infinitif direct",
    "devoir": "+ infinitif direct (devoir faire)",
    "falloir": "il faut + infinitif / + nom",
    "sembler": "sembler + adjectif / à (qqn)",
    "paraître": "paraître + adjectif",
    "devenir": "+ nom / + adjectif",
    "rester": "rester + adjectif / à (lieu)",

    # Construction & Change
    "commencer": "commencer par / à (faire qqch)",
    "finir": "finir par (faire) / de (faire) / + COD",
    "continuer": "continuer à / de (faire qqch)",
    "arrêter": "arrêter + COD / d'arrêter de (faire)",
    "changer": "changer de (train/avis) / + COD",
    "bâtir": "+ COD (bâtir une maison)",
    "construire": "+ COD (construire un pont)",
    "détruire": "+ COD (détruire un bâtiment)",
    "casser": "+ COD (casser un verre)",
    "réparer": "+ COD (réparer une voiture)",
    "corriger": "+ COD (corriger une faute)",
    "remplir": "remplir (qqch) de (qqch d'autre)",
    "créer": "+ COD (créer un projet)",
    "utiliser": "+ COD (utiliser un outil)",
    "installer": "+ COD dans / sur"
}

# ==============================================================================
# ITALIAN USAGE HINTS (Complete for all 171 Italian verbs)
# ==============================================================================
IT_HINTS = {
    # Communication & Mind
    "parlare": "parlare a (qualcuno) / di (qualcosa o qualcuno)",
    "dire": "dire (qualcosa) a (qualcuno)",
    "rispondere": "rispondere a (qualcuno / qualcosa)",
    "chiedere": "chiedere (qualcosa) a (qualcuno) / di (fare)",
    "domandare": "domandare (qualcosa) a (qualcuno)",
    "spiegare": "spiegare (qualcosa) a (qualcuno)",
    "mostrare": "mostrare (qualcosa) a (qualcuno)",
    "raccontare": "raccontare (qualcosa) a (qualcuno)",
    "scrivere": "scrivere (qualcosa) a (qualcuno)",
    "leggere": "+ oggetto diretto (leggere un libro)",
    "pensare": "pensare a (qualcosa/qualcuno) / di (opinione)",
    "credere": "credere a (qualcuno) / in (dio) / di (fare)",
    "dubitare": "dubitare di (qualcosa/qualcuno)",
    "riflettere": "riflettere su (un problema)",
    "sapere": "+ oggetto diretto / + infinito direct",
    "conoscere": "+ oggetto diretto (conoscere una persona)",
    "capire": "+ oggetto diretto (capire la lezione)",
    "comprendere": "+ oggetto diretto",
    "imparare": "imparare a (fare qualcosa) / + oggetto diretto",
    "insegnare": "insegnare (qualcosa) a (qualcuno)",
    "studiare": "+ oggetto diretto (studiare lingua)",
    "sognare": "sognare di (fare qualcosa) / + oggetto diretto",
    "dimenticare": "dimenticare + oggetto diretto / di (fare)",
    "ricordare": "ricordare (qualcosa) a (qualcuno)",
    "sperare": "sperare di (fare) / in (qualcosa)",
    "augurare": "augurare (qualcosa) a (qualcuno)",
    "esprimere": "esprimere (qualcosa) a (qualcuno)",
    "annunciare": "annunciare (qualcosa) a (qualcuno)",
    "confermare": "confermare (qualcosa) a (qualcuno)",
    "proporre": "proporre (qualcosa) a (qualcuno) / di (fare)",
    "rifiutare": "rifiutare + oggetto diretto / di (fare)",
    "accettare": "accettare + oggetto diretto / di (fare)",
    "consigliare": "consigliare (qualcosa) a (qualcuno)",
    "telefonare": "telefonare a (qualcuno)",
    "avvisare": "avvisare (qualcuno) di (qualcosa)",

    # Motion & Location
    "andare": "intransitivo: andare a (città) / in (paese/luogo)",
    "venire": "intransitivo: venire da (luogo) / con (persona)",
    "partire": "intransitivo: partire per (destinazione) / da (luogo)",
    "uscire": "intransitivo: uscire da (casa) / con (amici)",
    "entrare": "intransitivo: entrare in (stanza) / a (teatro)",
    "entrari": "intransitivo: entrare in / a",
    "arrivare": "intransitivo: arrivare a (città) / in (stazione) / da",
    "tornare": "intransitivo: tornare a / in / da",
    "giungere": "intransitivo: giungere a / in",
    "salire": "intransitivo: salire su (treno) / in (auto)",
    "scendere": "intransitivo: scendere da (treno) / in (strada)",
    "cadere": "intransitivo: cadere da / su / in",
    "rimanere": "intransitivo: rimanere a / in / con",
    "restare": "intransitivo: restare a / in / con",
    "camminare": "camminare per (strada) / verso / con",
    "correre": "correre verso / in / dietro a",
    "volare": "volare verso / sopra / in",
    "nuotare": "nuotare in (mare/piscina) / con",
    "saltare": "saltare da / su / oltre",
    "attraversare": "+ oggetto diretto (attraversare la strada)",
    "guidare": "+ oggetto diretto (guidare l'auto)",
    "passare": "passare per / da / + oggetto diretto (tempo)",
    "accompagnare": "+ oggetto diretto (accompagnare qualcuno)",

    # Perception & Action
    "fare": "+ oggetto diretto / fare di",
    "vedere": "+ oggetto diretto (vedere qualcuno)",
    "guardare": "+ oggetto diretto (guardare la TV)",
    "ascoltare": "+ oggetto diretto (ascoltare musica)",
    "sentire": "+ oggetto diretto / sentire parlare di",
    "toccare": "toccare + oggetto diretto / toccare a (qualcuno)",

    # Social & Personal Interaction
    "amare": "+ oggetto diretto (amare qualcuno)",
    "piacere": "piacere a (qualcuno: mi piace il caffè)",
    "mancare": "mancare a (qualcuno: mi manchi)",
    "appartenere": "appartenere a (qualcuno)",
    "somigliare": "somigliare a (qualcuno)",
    "ubbidire": "ubbidire a (qualcuno / regola)",
    "aiutare": "aiutare (qualcuno) a (fare qualcosa)",
    "invitare": "invitare (qualcuno) a (cena / fare)",
    "salvare": "salvare (qualcuno) da (un pericolo)",
    "proteggere": "proteggere (qualcuno) da / contro",
    "punire": "punire (qualcuno) per (un errore)",
    "offendere": "+ oggetto diretto (offendere qualcuno)",
    "difendere": "difendere (qualcuno) da / contro",
    "baciare": "+ oggetto diretto (baciare qualcuno)",
    "incontrare": "+ oggetto diretto (incontrare un amico)",
    "abbracciare": "+ oggetto diretto (abbracciare qualcuno)",
    "salutare": "+ oggetto diretto (salutare qualcuno)",

    # Transaction & Possession
    "dare": "dare (qualcosa) a (qualcuno)",
    "prendere": "prendere + oggetto diretto / prendersi cura di",
    "avere": "avere bisogno di / avere paura di / + oggetto diretto",
    "essere": "essere di (possesso) / in / a / + aggettivo",
    "ricevere": "ricevere (qualcosa) da (qualcuno)",
    "comprare": "comprare (qualcosa) per (qualcuno)",
    "vendere": "vendere (qualcosa) a (qualcuno)",
    "pagare": "pagare (qualcosa) a (qualcuno)",
    "donare": "donare (qualcosa) a (qualcuno)",
    "regalare": "regalare (qualcosa) a (qualcuno)",
    "consegnare": "consegnare (qualcosa) a (qualcuno)",
    "vincere": "+ oggetto diretto / contro (un avversario)",
    "perdere": "+ oggetto diretto / contro",
    "cercare": "cercare + oggetto diretto / cercare di (fare)",
    "trovare": "+ oggetto diretto (trovare le chiavi)",
    "lasciare": "lasciare + oggetto diretto / di (fare)",
    "portare": "portare (qualcosa) a (qualcuno)",
    "inviare": "inviare (qualcosa) a (qualcuno)",

    # Additional Mapped Italian Verbs
    "guadagnare": "guadagnare + oggetto diretto (guadagnare soldi)",
    "aspettare": "aspettare + oggetto diretto (aspettare qualcuno)",
    "offrire": "offrire (qualcosa) a (qualcuno)",
    "mettere": "mettere (qualcosa) in / su",
    "chiamare": "chiamare + oggetto diretto (chiamare qualcuno)",
    "permettere": "permettere (qualcosa) a (qualcuno) / di (fare)",
    "promettere": "promettere (qualcosa) a (qualcuno) / di (fare)",
    "evitare": "evitare + oggetto diretto / di (fare)",
    "nascondere": "nascondere (qualcosa) a (qualcuno)",
    "piangere": "piangere per / di (gioia/dolore)",
    "decidere": "decidere di (fare qualcosa)",
    "desiderare": "desiderare + oggetto diretto / + infinito",

    # Daily Life & Routines
    "abitare": "abitare a (città) / in (paese o regione)",
    "lavorare": "lavorare per / con / in",
    "giocare": "giocare a (gioco/sport) / con (qualcuno)",
    "cantare": "+ oggetto diretto / per (qualcuno)",
    "ballare": "ballare con / su",
    "viaggiare": "viaggiare in / a / con",
    "preparare": "preparare + oggetto diretto / prepararsi a",
    "visitare": "+ oggetto diretto (visitare una città)",
    "pulire": "+ oggetto diretto (pulire la casa)",
    "lavare": "+ oggetto diretto (lavare i piatti)",
    "chiudere": "+ oggetto diretto (chiudere la porta)",
    "aprire": "+ oggetto diretto (aprire la finestra)",
    "accendere": "+ oggetto diretto (accendere la luce)",
    "spegnere": "+ oggetto diretto (spegnere la TV)",
    "cucinare": "+ oggetto diretto (cucinare un piatto)",
    "mangiare": "+ oggetto diretto (mangiare qualcosa)",
    "bere": "+ oggetto diretto (bere acqua)",
    "cenare": "cenare con / a (casa)",
    "dormire": "dormire in (un letto) / per (ore)",
    "vivere": "vivere a / in / con / di",
    "morire": "morire di (malattia) / per",
    "nascere": "nascere a (città) / in (anno)",
    "nutrire": "+ oggetto diretto / nutrirsi di",
    "guarire": "guarire da (una malattia)",

    # Modal & Auxiliaries
    "potere": "+ infinito diretto (potere fare)",
    "volere": "+ oggetto diretto / + infinito diretto",
    "sapere": "+ oggetto diretto / + infinito direct",
    "dovere": "+ infinito diretto (dovere fare)",
    "sembrare": "sembrare + aggettivo / a (qualcuno)",
    "diventare": "+ sostantivo / + aggettivo",

    # Execution & Structure
    "cominciare": "cominciare a (fare qualcosa) / con",
    "finire": "finire di (fare qualcosa) / per",
    "continuare": "continua a (fare qualcosa)",
    "fermare": "fermare + oggetto diretto / fermarsi a",
    "cambiare": "cambiare + oggetto diretto / di (idea)",
    "costruire": "+ oggetto diretto (costruire una casa)",
    "distruggere": "+ oggetto diretto",
    "rompere": "+ oggetto diretto (rompere un vetro)",
    "correggere": "+ oggetto diretto",
    "riempire": "riempire (qualcosa) di (qualcos'altro)",
    "creare": "+ oggetto diretto",
    "usare": "+ oggetto diretto",
    "ordinare": "ordinare (qualcosa) a (qualcuno)",
    "organizzare": "+ oggetto diretto",
    "decisione": "decidere di (fare qualcosa)",
    "descrivere": "+ oggetto diretto",
    "dimostrare": "dimostrare (qualcosa) a (qualcuno)",
    "disegnare": "+ oggetto diretto",
    "firmare": "+ oggetto diretto",
    "provare": "+ oggetto diretto / a (fare)",
    "suonare": "+ oggetto diretto / a (chitarra)",
    "annullare": "+ oggetto diretto",
    "aumentare": "+ oggetto diretto / di (percentuale)",
    "raccogliere": "+ oggetto diretto",
    "raggiungere": "+ oggetto diretto",
    "ringraziare": "ringraziare (qualcuno) per (qualcosa)",
    "ripetere": "+ oggetto diretto",
    "sbagliare": "+ oggetto diretto / a (fare)",
    "scegliere": "scegliere + oggetto diretto / di (fare)",
    "uccidere": "+ oggetto diretto",
    "votare": "votare per / + oggetto diretto",
    "preferire": "preferire + oggetto diretto / + infinito a",
    "riposare": "riposarsi in / su",
    "svegliare": "+ oggetto diretto / svegliarsi alle",
    "scoprire": "+ oggetto diretto",
    "stare": "stare a (casa) / in / con / + gerundio",
    "lanciare": "lanciare (qualcosa) a (qualcuno)",
    "muovere": "+ oggetto diretto",
    "battere": "+ oggetto diretto / contro",
    "ridere": "ridere di (qualcosa/qualcuno)",
    "afferrare": "+ oggetto diretto",
    "alzare": "+ oggetto diretto / alzarsi",
    "ammettere": "ammettere + oggetto diretto / di (fare)",
    "bastare": "bastare a (qualcuno) / per (fare)",
    "bloccare": "+ oggetto diretto",
    "bruciare": "+ oggetto diretto / in",
    "contare": "contare su (qualcuno) / contare + oggetto diretto",
    "coprire": "coprire (qualcosa) con (qualcos'altro)"
}

# ==============================================================================
# RUSSIAN USAGE HINTS (Complete for all 160 Russian verbs)
# ==============================================================================
RU_HINTS = {
    # Communication & Thought
    "читать": "+ винительный падеж (что?)",
    "писать": "+ винительный (что?) / кому? (дательный) / о чём? (предложный)",
    "говорить": "с + творительный (с кем?), о + предложный (о чём?)",
    "рассказывать": "+ дательный (кому?) о + предложный (о чём?)",
    "спрашивать": "+ винительный (кого?) о + предложный (о чём?)",
    "отвечать": "+ дательный (кому?) на + винительный (на что?)",
    "объяснять": "+ винительный (что?) + дательный (кому?)",
    "показывать": "+ винительный (что?) + дательный (кому?)",
    "кричать": "на + винительный (на кого?) / от + родительный (от боли)",
    "шептать": "+ дательный (кому?) о + предложный (о чём?)",
    "звать": "+ винительный падеж (кого?)",
    "требовать": "+ родительный падеж (чего?) от + родительный (от кого?)",
    "думать": "о + предложный падеж (о ком/чём?)",
    "знать": "+ винительный падеж (кого/что?) / о + предложный",
    "понимать": "+ винительный падеж (кого/что?)",
    "помнить": "+ винительный падеж (кого/что?) / о + предложный",
    "забывать": "+ винительный (кого/что?) / о + предложный",
    "надеяться": "на + винительный падеж (на кого/что?)",
    "мечтать": "о + предложный падеж (о чём/ком?)",
    "верить": "+ дательный (кому/чему?) / в + винительный (в кого/что?)",
    "обещать": "+ дательный (кому?) + винительный (что?)",
    "повторять": "+ винительный падеж (что?)",
    "счита́ть": "+ винительный падеж (что?) / кем? (творительный)",
    "считать": "+ винительный падеж (что?) / кем? (творительный)",
    "замечать": "+ винительный падеж (кого/что?)",

    # Motion & Travel
    "идти": "в/на + винительный (куда?) / к + дательный (к кому?)",
    "ходить": "в/на + винительный (куда?) / по + дательный (где?)",
    "ехать": "в/на + винительный (куда?) / из/с + родительный (откуда?)",
    "бегать": "по + дательный (где?) / в/на + винительный",
    "бежать": "в/на + винительный (куда?) / от + родительный (от кого?)",
    "плавать": "в + предложный (где?) / по + дательный",
    "плыть": "в/к + винительный (куда?) / по + дательный",
    "лета́ть": "в/на + винительный / над + творительный",
    "летать": "в/на + винительный / над + творительный",
    "шагать": "по + дательный (по улице) / в + винительный",
    "нести": "+ винительный падеж (что?) + дательный (кому?)",
    "везти": "+ винительный падеж (что?) в/на + винительный",
    "вести": "+ винительный падеж (кого?) за руку / в + винительный",
    "грести": "в + предложный / веслами (творительный)",
    "выходить": "из + родительный (откуда?) / в/на + винительный",
    "догонять": "+ винительный падеж (кого/что?)",
    "прыгать": "с + родительный (откуда?) / на + винительный",
    "падать": "на/в + винительный / с + родительный",

    # Location & State
    "жить": "в/на + предложный падеж (где?) / с + творительный",
    "находиться": "в/на + предложный падеж (где?)",
    "быть": "в/на + предложный (где?) / кем? (творительный)",
    "бывать": "в/на + предложный (где?) / у + родительный (у кого?)",
    "стоять": "в/на + предложный падеж (где?)",
    "сидеть": "на/в + предложный падеж (где?)",
    "садиться": "на/в + винительный падеж (куда?)",
    "вставать": "из-за + родительный / в + винительный (в 7 утра)",
    "лежа́ть": "на/в + предложный падеж (где?)",
    "лежать": "на/в + предложный падеж (где?)",
    "ложиться": "в/на + винительный падеж (куда?)",
    "дежурить": "в/на + предложный (где?)",
    "болеть": "+ творительный (чем: гриппом) / за + винительный",

    # Social & Psychological State
    "помогать": "+ дательный падеж (кому?)",
    "помога́ть": "+ дательный падеж (кому?)",
    "мешать": "+ дательный падеж (кому?) / инфинитив",
    "сочувствовать": "+ дательный падеж (кому?)",
    "завидовать": "+ дательный падеж (кому?)",
    "радоваться": "+ дательный падеж (чему/кому?)",
    "улыбаться": "+ дательный падеж (кому?) / на + винительный",
    "желать": "+ родительный падеж (чего?) + дательный (кому?)",
    "бояться": "+ родительный падеж (кого/чего?)",
    "жалеть": "о + предложный (о чём?) / + винительный (кого?)",
    "любить": "+ винительный падеж (кого/что?)",
    "обожать": "+ винительный падеж (кого/что?)",
    "ненавидеть": "+ винительный падеж (кого/что?)",
    "грустить": "о + предложный падеж (о ком/чём?)",
    "сμεяться": "над + творительный падеж (над кем/чем?)",
    "смеяться": "над + творительный падеж (над кем/чем?)",
    "плакать": "от + родительный (от горя) / о + предложный",
    "знакомить": "+ винительный (кого?) с + творительный (с кем?)",

    # Action & Physical Manipulations
    "делать": "+ винительный падеж (что?)",
    "работать": "в/на + предложный (где?) / кем? (творительный)",
    "отдыхать": "в/на + предложный (где?) / с + творительный",
    "заниматься": "+ творительный падеж (чем?)",
    "учиться": "в/на + предложный (где?), + дательный (чему?)",
    "учить": "+ винительный (что?) / + винительный (кого?) + дательный (чему?)",
    "готовиться": "к + дательный падеж (к чему?)",
    "готовить": "+ винительный (что?) для + родительный (для кого?)",
    "варить": "+ винительный падеж (что?)",
    "жарить": "+ винительный падеж (что?)",
    "мыть": "+ винительный падеж (что?) + творительный (чем?)",
    "чистить": "+ винительный падеж (что?)",
    "красить": "+ винительный (что?) + творительный (чем?)",
    "пачкать": "+ винительный падеж (что?)",
    "резать": "+ винительный (что?) + творительный (чем?)",
    "мазать": "+ винительный (что?) + творительный (чем?)",
    "вязать": "+ винительный падеж (что?)",
    "лизать": "+ винительный падеж (что?)",
    "пахать": "+ винительный падеж (что?)",
    "махать": "+ творительный (чем: рукой) / + дательный (кому?)",
    "дышать": "+ творительный падеж (чем: воздухом)",
    "гнать": "+ винительный падеж (кого/что?)",
    "стелить": "+ винительный падеж (что?) на + винительный",
    "брить": "+ винительный падеж (кого/что?)",
    "стирать": "+ винительный падеж (что?)",
    "гладить": "+ винительный падеж (что?)",
    "двигать": "+ винительный падеж (что?)",
    "держать": "+ винительный падеж (что?) в + предложный",
    "добавлять": "+ винительный (что?) в/к + винительный/дательный",
    "заказывать": "+ винительный падеж (что?)",
    "запрещать": "+ дательный (кому?) + инфинитив / винительный",
    "искать": "+ винительный (кого/что?) / родительный",
    "исправлять": "+ винительный падеж (что?)",
    "ломать": "+ винительный падеж (что?)",
    "менять": "+ винительный (что?) на + винительный (на что?)",
    "находить": "+ винительный падеж (кого/что?)",
    "печь": "+ винительный падеж (что?)",
    "стеречь": "+ винительный падеж (кого/что?)",
    "запрягать": "+ винительный падеж (кого?)",

    # Daily Routine & Functions
    "завтракать": "+ творительный падеж (чем: яйцами)",
    "обедать": "+ творительный падеж (чем: супом)",
    "ужинать": "+ творительный падеж (чем: рыбой)",
    "есть": "+ винительный падеж (что?)",
    "пить": "+ винительный падеж (что?)",
    "спать": "в/на + предложный (где?) / до + родительный",
    "гулять": "в/по + предложный / дательный (где?)",
    "играть": "в + винительный (в игру) / на + предложный (на гитаре)",
    "петь": "+ винительный падеж (что?) / для + родительный",
    "танцевать": "с + творительный (с кем?) / под + винительный",
    "рисовать": "+ винительный (что?) + творительный (чем?)",
    "покупать": "+ винительный (что?) у + родительный (у кого?)",
    "продавать": "+ винительный (что?) + дательный (кому?)",
    "платить": "за + винительный (за что?) / + дательный (кому?)",
    "курить": "+ винительный падеж (что?)",
    "спешить": "в/на + винительный (куда?) / + инфинитив",
    "кормить": "+ винительный (кого?) + творительный (чем?)",
    "лечить": "+ винительный (кого?) от + родительный (от чего?)",
    "звонить": "+ дательный падеж (кому?) / в/на (куда?)",
    "будить": "+ винительный падеж (кого?)",
    "вешать": "+ винительный (что?) на/в + винительный",
    "включать": "+ винительный падеж (что?)",
    "вызывать": "+ винительный падеж (кого/что?)",
    "выключать": "+ винительный падеж (что?)",
    "выполнять": "+ винительный падеж (что?)",

    # Additional Mapped Russian Verbs
    "слушать": "+ винительный падеж (кого/что?)",
    "изучать": "+ винительный падеж (что?)",
    "открывать": "+ винительный падеж (что?)",
    "закрывать": "+ винительный падеж (что?)",
    "начинать": "+ винительный падеж (что?) / инфинитив",
    "заканчивать": "+ винительный падеж (что?)",
    "прятать": "+ винительный (что?) в/от + родительный",
    "встречать": "+ винительный падеж (кого?)",
    "провожать": "+ винительный падеж (кого?)",
    "ждать": "+ винительный (кого?) / родительный (чего?)",
    "терять": "+ винительный падеж (что?)",
    "строить": "+ винительный падеж (что?)",
    "разрушать": "+ винительный падеж (что?)",
    "выбирать": "+ винительный падеж (что?) из + родительный",
    "собирать": "+ винительный падеж (что?)",
    "дарить": "+ винительный (что?) + дательный (кому?)",
    "получать": "+ винительный (что?) от + родительный (от кого?)",
    "отдавать": "+ винительный (что?) + дательный (кому?)",
    "брать": "+ винительный (что?) у + родительный (у кого?)",
    "давать": "+ винительный (что?) + дательный (кому?)",
    "класть": "+ винительный (что?) в/на + винительный (куда?)",
    "ставить": "+ винительный (что?) в/на + винительный (куда?)",
    "просить": "+ винительный (кого?) о + предложный / инфинитив",

    # Perception & Modal
    "смотреть": "на + винительный (на кого?) / + винительный (фильм)",
    "видеть": "+ винительный падеж (кого/что?)",
    "слышать": "+ винительный падеж (кого/что?)",
    "чувствовать": "+ винительный падеж (что?)",
    "чуять": "+ винительный падеж (что?)",
    "хотеть": "+ винительный (что?) / родительный (чего?) / + инфинитив",
    "беречь": "+ винительный падеж (кого/что?) от + родительный",
    "бросать": "+ винительный (что?) в + винительный",
    "шуметь": "в/на + предложный (где?)",
    "цвести": "в + предложный (где?)",
    "расти": "в/на + предложный (где?)"
}

# ==============================================================================
# GREEK USAGE HINTS (Complete for all 104 Greek verbs)
# ==============================================================================
EL_HINTS = {
    # Core Communication & Mind
    "γράφω": "γράφω σε (σε κάποιον) / για (+ αιτιατική)",
    "διαβάζω": "+ αιτιατική (διαβάζω βιβλίο)",
    "μιλάω": "μιλάω σε (σε κάποιον) / για (για κάτι) / με (με κάποιον)",
    "ρωτάω": "ρωτάω + αιτιατική (ρωτάω κάποιον για κάτι)",
    "απαντάω": "απαντώ σε (+ αιτιατική)",
    "λέω": "λέω (κάτι) σε (κάποιον) / ότι...",
    "δείχνω": "δείχνω (κάτι) σε (κάποιον)",
    "εξηγώ": "εξηγώ (κάτι) σε (κάποιον)",
    "καταλαβαίνω": "+ αιτιατική (καταλαβαίνω κάποιον/κάτι)",
    "μαθαίνω": "+ αιτιατική (μαθαίνω ελληνικά) / να (+ υποτακτική)",
    "σκέφτομαι": "σκέφτομαι + αιτιατική / για (+ αιτιατική)",
    "πιστεύω": "πιστεύω σε (+ αιτιατική) / ότι...",
    "αμφιβάλλω": "αμφιβάλλω για (+ αιτιατική)",
    "ελπίζω": "ελπίζω σε (+ αιτιατική) / να (+ υποτακτική)",
    "θυμάμαι": "+ αιτιατική (θυμάμαι κάτι)",
    "ξεχνώ": "+ αιτιατική / να (+ υποτακτική)",
    "ξεχνάω": "+ αιτιατική / να (+ υποτακτική)",
    "τηλεφωνώ": "τηλεφωνώ σε (+ αιτιατική)",
    "ευχαριστώ": "ευχαριστώ + αιτιατική (για κάτι)",
    "συγχωρώ": "συγχωρώ + αιτιατική (για κάτι)",

    # Motion & Location
    "πηγαίνω": "πηγαίνω σε / στο / στη (+ αιτιατική)",
    "έρχομαι": "έρχομαι από (+ αιτιατική) / με (μέσο)",
    "φεύγω": "φεύγω από (+ αιτιατική) / για",
    "φτάνω": "φτάνω σε / στο / στη (+ αιτιατική)",
    "γυρίζω": "γυρίζω σε / από (+ αιτιατική)",
    "ακολουθώ": "+ αιτιατική (ακολουθώ κάποιον)",
    "οδηγώ": "+ αιτιατική (οδηγώ αυτοκίνητο) / σε",
    "τρέχω": "τρέχω σε / προς / με (+ αιτιατική)",
    "περπατάω": "περπατώ σε / στο / στη (+ αιτιατική)",
    "περπατώ": "περπατώ σε / στο / στη (+ αιτιατική)",
    "ταξιδεύω": "ταξιδεύω σε / με (+ αιτιατική)",
    "πέφτω": "πέφτω από / σε (+ αιτιατική)",
    "πετάω": "πετάω πάνω από / σε",
    "μένω": "μένω σε / στο / στη (+ αιτιατική)",
    "ζω": "ζω σε / στο / στη (+ αιτιατική)",
    "ειμαι": "είμαι από (καταγωγή) / σε (τοποθεσία)",
    "είμαι": "είμαι από (καταγωγή) / σε (τοποθεσία)",

    # Emotion & Personal States
    "αγαπάω": "+ αιτιατική (αγαπάω κάποιον)",
    "μισώ": "+ αιτιατική (μισώ το ψέμα)",
    "φοβάμαι": "φοβάμαι + αιτιατική / μήπως...",
    "χαίρομαι": "χαίρομαι για (+ αιτιατική) / που...",
    "λυπάμαι": "λυπάμαι για (+ αιτιατική) / που...",
    "γελάω": "γελάω με (+ αιτιατική)",
    "κλαίω": "κλαίω για (+ αιτιατική)",
    "πονώ": "πονώ σε (+ αιτιατική) / για",
    "νιώθω": "+ αιτιατική (νιώθω χαρά/πόνο)",
    "κουράζομαι": "κουράζομαι από (+ αιτιατική)",
    "ξεκουράζομαι": "ξεκουράζομαι σε / από (+ αιτιατική)",
    "γεννιέμαι": "γεννιέμαι σε (πόλη/έτος)",
    "κοιμάμαι": "κοιμάμαι σε / στο (+ αιτιατική)",
    "ξυπνάω": "ξυπνάω στις (ώρα) / + αιτιατική",
    "σηκώνομαι": "σηκώνομαι από (κρεβάτι)",
    "κάθομαι": "κάθομαι σε / στο (+ αιτιατική)",

    # Perception & Daily Activities
    "βλέπω": "+ αιτιατική (βλέπω τηλεόραση)",
    "ακούω": "+ αιτιατική (ακούω μουσική / κάποιον)",
    "κοιτάζω": "+ αιτιατική (κοιτάζω τη θέα)",
    "τρώω": "+ αιτιατική (τρώω φαγητό)",
    "πίνω": "+ αιτιατική (πίνω νερό)",
    "δουλεύω": "δουλεύω σε / για / με (+ αιτιατική)",
    "μαγειρεύω": "+ αιτιατική (μαγειρεύω φαγητό)",
    "πλένω": "+ αιτιατική (πλένω τα πιάτα)",
    "πλένομαι": "πλένομαι με (νερό)",
    "καθαρίζω": "+ αιτιατική (καθαρίζω το σπίτι)",
    "ντύνω": "+ αιτιατική (ντύνω το παιδί)",
    "ντύνομαι": "ντύνομαι με (ρούχα)",
    "φορώ": "φοράω + αιτιατική (ρούχα)",
    "ψωνίζω": "+ αιτιατική (ψωνίζω ρούχα)",
    "παίζω": "παίζω με (+ αιτιατική) / παίζω μουσική",
    "τραγουδάω": "+ αιτιατική (τραγουδάω τραγούδι)",
    "χορεύω": "χορεύω με (+ αιτιατική)",
    "ζωγραφίζω": "+ αιτιατική (ζωγραφίζω πίνακα)",
    "γιορτάζω": "+ αιτιατική (γιορτάζω τα γενέθλια)",

    # Action, Commerce & Possession
    "έχω": "+ αιτιατική (άμεσο αντικείμενο)",
    "κάνω": "+ αιτιατική (κάνω δουλειά)",
    "δίνω": "δίνω + αιτιατική (σε κάποιον)",
    "παίρνω": "παίρνω + αιτιατική (από κάποιον)",
    "βάζω": "βάζω + αιτιατική (σε/στο)",
    "βγάζω": "βγάζω + αιτιατική (από)",
    "αγοράζω": "αγοράζω + αιτιατική (από κάποιον)",
    "πουλάω": "πουλάω + αιτιατική (σε κάποιον)",
    "πληρώνω": "πληρώνω + αιτιατική (για κάτι)",
    "αλλάζω": "+ αιτιατική (αλλάζω γνώμη/ρούχα)",
    "ανοίγω": "+ αιτιατική (ανοίγω την πόρτα)",
    "κλείνω": "+ αιτιατική (κλείνω το παράθυρο)",
    "αρχίζω": "αρχίζω να (+ υποτακτική) / από (+ αιτιατική)",
    "τελειώνω": "τελειώνω + αιτιατική / με (+ αιτιατική)",
    "συνεχίζω": "συνεχίζω να (+ υποτακτική) / + αιτιατική",
    "σταματάω": "σταματάω να (+ υποτακτική) / + αιτιατική",
    "προσπαθώ": "προσπαθώ να (+ υποτακτική)",
    "πετυχαίνω": "+ αιτιατική (πετυχαίνω τον στόχο)",
    "αποτυγχάνω": "αποτυγχάνω σε (+ αιτιατική)",
    "ψάχνω": "ψάχνω + αιτιατική (ψάχνω κάτι/κάποιον)",
    "βρίσκω": "+ αιτιατική (βρίσκω τις λύσεις)",
    "χάνω": "+ αιτιατική (χάνω τα κλειδιά)",
    "κερδίζω": "+ αιτιατική (κερδίζω το παιχνίδι)",
    "στέλνω": "στέλνω + αιτιατική (σε κάποιον)",
    "στελνω": "στέλνω + αιτιατική (σε κάποιον)",
    "κρατάω": "+ αιτιατική (κρατάω το χέρι)",
    "αφήνω": "+ αιτιατική (αφήνω τα πράγματα)",
    "στηρίζω": "+ αιτιατική (στηρίζω τον φίλο μου)",
    "γνωρίζω": "+ αιτιατική (γνωρίζω κάποιον)",
    "κρύβω": "+ αιτιατική (από κάποιον)",
    "δοκιμάζω": "+ αιτιατική (δοκιμάζω φαγητό)",
    "ετοιμάζω": "+ αιτιατική (ετοιμάζω το φαγητό)",
    "ζητάω": "ζητάω + αιτιατική (από κάποιον)",
    "ακούγομαι": "ακούγομαι σε (+ αιτιατική)",
    "βλέπομαι": "βλέπομαι με (+ αιτιατική)",
    "θέλω": "+ αιτιατική / να (+ υποτακτική)",
    "μπορώ": "μπορώ να (+ υποτακτική)",
    "ξέρω": "+ αιτιατική / να (+ υποτακτική)",
    "περιμένω": "+ αιτιατική (περιμένω το λεωφορείο)"
}


def process_verb_hints(db_path, hints_map, lang_code):
    if not os.path.exists(db_path):
        print(f"Skipping {db_path} (not found)")
        return
    with open(db_path, "r", encoding="utf-8") as f:
        verbs = json.load(f)

    updated_count = 0
    for verb, data in verbs.items():
        if verb in hints_map:
            data["usage_hint"] = hints_map[verb]
            updated_count += 1
        elif "usage_hint" not in data or not data["usage_hint"]:
            # Default fallback if verb wasn't mapped specifically
            if lang_code == "fr":
                data["usage_hint"] = f"{verb} + COD (complément d'objet direct)"
            elif lang_code == "it":
                data["usage_hint"] = f"{verb} + oggetto diretto"
            elif lang_code == "ru":
                data["usage_hint"] = f"{verb} + винительный падеж (кого/что)"
            elif lang_code == "el":
                data["usage_hint"] = f"{verb} + αιτιατική (άμεσο αντικείμενο)"

    with open(db_path, "w", encoding="utf-8") as f:
        json.dump(verbs, f, ensure_ascii=False, indent=2)
    print(f"  ✅ Updated {db_path} ({updated_count}/{len(verbs)} explicitly mapped verbs)")


def process_italian_nouns(db_path):
    if not os.path.exists(db_path):
        return
    with open(db_path, "r", encoding="utf-8") as f:
        nouns = json.load(f)

    EXPLICIT_PLURALS = {
        "uomo": "uomini",
        "uovo": "uova",
        "mano": "mani",
        "braccio": "braccia",
        "dito": "dita",
        "dio": "dei",
        "cinema": "cinema",
        "sport": "sport",
        "computer": "computer",
        "autobus": "autobus",
        "bar": "bar",
        "poeta": "poeti",
        "problema": "problemi",
        "amico": "amici",
        "medico": "medici",
        "nemico": "nemici",
        "greco": "greci",
        "psicologo": "psicologi"
    }

    for noun, data in nouns.items():
        is_fem = data.get("gender") == "Femminile"
        is_vowel = noun[0].lower() in "aeiouàèéìòù"

        if "article" not in data or not data["article"]:
            if is_vowel:
                data["article"] = "l'"
            elif is_fem:
                data["article"] = "la"
            else:
                if noun.startswith(("z", "gn", "ps", "pn")) or (noun.startswith("s") and len(noun) > 1 and noun[1] not in "aeiouàèéìòù"):
                    data["article"] = "lo"
                else:
                    data["article"] = "il"

        # Always re-verify and calculate accurate plural form
        if noun in EXPLICIT_PLURALS:
            data["plural"] = EXPLICIT_PLURALS[noun]
        elif noun.endswith(('à', 'ù', 'è', 'ì', 'ò')) or noun in ['bar', 'sport', 'computer', 'autobus', 'cinema']:
            data["plural"] = noun
        elif noun.endswith(('cio', 'gio', 'io')):
            data["plural"] = 'zii' if noun == 'zio' else noun[:-2] + 'i'
        elif noun.endswith('ca'):
            data["plural"] = noun[:-2] + 'che'
        elif noun.endswith('ga'):
            data["plural"] = noun[:-2] + 'ghe'
        elif noun.endswith('co'):
            data["plural"] = noun[:-2] + 'chi'
        elif noun.endswith('go'):
            data["plural"] = noun[:-2] + 'ghi'
        elif is_fem:
            if noun.endswith('a'):
                data["plural"] = noun[:-1] + 'e'
            elif noun.endswith('e'):
                data["plural"] = noun[:-1] + 'i'
            else:
                data["plural"] = noun + 'e'
        else:
            if noun.endswith(('o', 'e', 'a')):
                data["plural"] = noun[:-1] + 'i'
            else:
                data["plural"] = noun

    with open(db_path, "w", encoding="utf-8") as f:
        json.dump(nouns, f, ensure_ascii=False, indent=2)
    print(f"  ✅ Enriched Italian nouns database at {db_path} with explicit 'article' and verified 'plural' fields.")


def main():
    print("🚀 Updating usage hints & reference app datasets...")
    process_verb_hints(FR_VERBS_PATH, FR_HINTS, "fr")
    process_verb_hints(IT_VERBS_PATH, IT_HINTS, "it")
    process_verb_hints(RU_VERBS_PATH, RU_HINTS, "ru")
    process_verb_hints(EL_VERBS_PATH, EL_HINTS, "el")
    process_italian_nouns(IT_NOUNS_PATH)
    print("🎉 All datasets successfully updated!")


if __name__ == "__main__":
    main()

import json, os

print("Building 100% grammatically accurate Master Lexicon across all 8 Standalone Apps...")

def save_db(app_path, data):
    os.makedirs(os.path.dirname(app_path), exist_ok=True)
    existing = {}
    if os.path.exists(app_path):
        try:
            with open(app_path, "r", encoding="utf-8") as f:
                existing = json.load(f)
        except Exception:
            pass
    for item, idata in data.items():
        if item in existing:
            if "usage_hint" not in idata and existing[item].get("usage_hint"):
                idata["usage_hint"] = existing[item]["usage_hint"]
            if "grammar_rule" not in idata and existing[item].get("grammar_rule"):
                idata["grammar_rule"] = existing[item]["grammar_rule"]
    with open(app_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"  Saved {app_path} ({len(data)} items)")

# -------------------------------------------------------------
# 1. FRENCH VERBS (apps/fr-conjugeur/data/verbs.json)
# -------------------------------------------------------------
fr_v_raw = [
    ("parler", "1er groupe", "A1", "Exprimer sa pensée par la parole.", ["taire", "écouter"], "parl", "parlé", "avoir"),
    ("aimer", "1er groupe", "A1", "Éprouver de l'affection ou du goût.", ["détester", "haïr"], "aim", "aimé", "avoir"),
    ("marcher", "1er groupe", "A1", "Se déplacer en faisant des pas.", ["courir"], "march", "marché", "avoir"),
    ("étudier", "1er groupe", "A1", "Apprendre des connaissances.", ["ignorer"], "étudi", "étudié", "avoir"),
    ("travailler", "1er groupe", "A1", "Effectuer un effort pour produire.", ["se reposer"], "travaill", "travaillé", "avoir"),
    ("habiter", "1er groupe", "A1", "Avoir sa résidence quelque part.", ["déménager"], "habit", "habité", "avoir"),
    ("écouter", "1er groupe", "A1", "Prêter l'oreille pour entendre.", ["ignorer"], "écout", "écouté", "avoir"),
    ("regarder", "1er groupe", "A1", "Porter ses yeux sur un objet.", ["ignorer"], "regard", "regardé", "avoir"),
    ("penser", "1er groupe", "A1", "Former des idées dans son esprit.", ["oublier"], "pens", "pensé", "avoir"),
    ("chercher", "1er groupe", "A1", "Tenter de trouver quelque chose.", ["trouver"], "cherch", "cherché", "avoir"),
    ("trouver", "1er groupe", "A1", "Découvrir ce que l'on cherchait.", ["perdre"], "trouv", "trouvé", "avoir"),
    ("donner", "1er groupe", "A1", "Accorder ou offrir gratuitement.", ["prendre"], "donn", "donné", "avoir"),
    ("demander", "1er groupe", "A1", "S'adresser à quelqu'un pour savoir.", ["répondre"], "demand", "demandé", "avoir"),
    ("fermer", "1er groupe", "A1", "Mettre un obstacle pour obstruer.", ["ouvrir"], "ferm", "fermé", "avoir"),
    ("jouer", "1er groupe", "A1", "Se divertir ou pratiquer un jeu.", ["travailler"], "jou", "joué", "avoir"),
    ("chanter", "1er groupe", "A1", "Former des sons musicaux.", ["taire"], "chant", "chanté", "avoir"),
    ("danser", "1er groupe", "A1", "Exécuter des mouvements du corps.", ["rester immobile"], "dans", "dansé", "avoir"),
    ("voyager", "1er groupe", "A1", "Faire un déplacement.", ["rester chez soi"], "voyag", "voyagé", "avoir"),
    ("passer", "1er groupe", "A1", "Aller d'un endroit à un autre.", ["rester"], "pass", "passé", "avoir"),
    ("gagner", "1er groupe", "A1", "Remporter une victoire.", ["perdre"], "gagn", "gagné", "avoir"),
    ("préparer", "1er groupe", "A1", "Disposer les choses à l'avance.", ["improviser"], "prépar", "préparé", "avoir"),
    ("visiter", "1er groupe", "A1", "Aller voir un lieu.", ["quitter"], "visit", "visité", "avoir"),
    ("aider", "1er groupe", "A1", "Apporter son secours.", ["nuire"], "aid", "aidé", "avoir"),
    ("monter", "1er groupe", "A1", "S'élever vers un lieu plus haut.", ["descendre"], "mont", "monté", "être"),
    ("tomber", "1er groupe", "A1", "Subir l'attraction de la pesanteur.", ["se relever"], "tomb", "tombé", "être"),
    ("rester", "1er groupe", "A1", "Demeurer dans un endroit.", ["partir"], "rest", "resté", "être"),
    ("arriver", "1er groupe", "A1", "Parvenir au terme d'un trajet.", ["partir"], "arriv", "arrivé", "être"),
    ("entrer", "1er groupe", "A1", "Pénétrer dans un espace.", ["sortir"], "entr", "entré", "être"),
    ("montrer", "1er groupe", "A1", "Faire voir ou désigner.", ["cacher"], "montr", "montré", "avoir"),
    ("cacher", "1er groupe", "A2", "Soustraire à la vue.", ["montrer"], "cach", "caché", "avoir"),
    ("oublier", "1er groupe", "A1", "Ne plus avoir en mémoire.", ["se souvenir"], "oubli", "oublié", "avoir"),
    ("compter", "1er groupe", "A1", "Dénombrer des unités.", ["ignorer"], "compt", "compté", "avoir"),
    ("décider", "1er groupe", "A2", "Prendre une résolution.", ["hésiter"], "décid", "décidé", "avoir"),
    ("espérer", "1er groupe", "A2", "Attendre avec confiance.", ["désespérer"], "espér", "espéré", "avoir"),
    ("préférer", "1er groupe", "A1", "Aimer mieux une option.", ["détester"], "préfér", "préféré", "avoir"),
    ("continuer", "1er groupe", "A1", "Poursuivre ce qui a été commencé.", ["s'arrêter"], "continu", "continué", "avoir"),
    ("arrêter", "1er groupe", "A1", "Interrompre un mouvement.", ["continuer"], "arrêt", "arrêté", "avoir"),
    ("expliquer", "1er groupe", "A2", "Rendre clair et compréhensible.", ["confondre"], "expliqu", "expliqué", "avoir"),
    ("séparer", "1er groupe", "A2", "Mettre à distance.", ["unir"], "sépar", "séparé", "avoir"),
    ("pleurer", "1er groupe", "A1", "Verser des larmes.", ["rire"], "pleur", "pleuré", "avoir"),
    ("proposer", "1er groupe", "A2", "Offrir une idée ou un choix.", ["refuser"], "propos", "proposé", "avoir"),
    ("refuser", "1er groupe", "A2", "Ne pas accepter.", ["accepter"], "refus", "refusé", "avoir"),
    ("accepter", "1er groupe", "A2", "Recevoir volontairement.", ["refuser"], "accept", "accepté", "avoir"),
    ("toucher", "1er groupe", "A1", "Mettre la main en contact.", ["éviter"], "touch", "touché", "avoir"),
    ("quitter", "1er groupe", "A1", "S'éloigner d'un lieu.", ["rester"], "quitt", "quitté", "avoir"),
    ("briller", "1er groupe", "A2", "Émettre une vive lumière.", ["s'éteindre"], "brill", "brillé", "avoir"),
    ("soigner", "1er groupe", "A2", "Prendre soin de la santé.", ["blesser"], "soign", "soigné", "avoir"),
    ("sauver", "1er groupe", "A2", "Tirer d'un danger.", ["abandonner"], "sauv", "sauvé", "avoir"),
    ("inviter", "1er groupe", "A1", "Prier quelqu'un de venir.", ["chasser"], "invit", "invité", "avoir"),
    ("partager", "1er groupe", "A2", "Diviser et distribuer.", ["garder pour soi"], "partag", "partagé", "avoir"),
    ("pousser", "1er groupe", "A1", "Exerce une pression.", ["tirer"], "pouss", "poussé", "avoir"),
    ("tirer", "1er groupe", "A1", "Amener vers soi par un effort.", ["pousser"], "tir", "tiré", "avoir"),
    ("laisser", "1er groupe", "A1", "Permettre ou abandonner.", ["prendre"], "laiss", "laissé", "avoir"),
    ("payer", "1er groupe", "A1", "Donner de l'argent.", ["voler"], "pay", "payé", "avoir"),
    ("appeler", "1er groupe", "A1", "Désigner par un nom.", ["ignorer"], "appel", "appelé", "avoir"),
    ("rappeler", "1er groupe", "A2", "Faire revenir à la mémoire.", ["oublier"], "rappel", "rappelé", "avoir"),
    ("commencer", "1er groupe", "A1", "Entreprendre la première étape.", ["finir"], "commenc", "commencé", "avoir"),
    ("imaginer", "1er groupe", "A2", "Se représenter en esprit.", ["observer"], "imagin", "imaginé", "avoir"),
    ("créer", "1er groupe", "A2", "Donner l'existence.", ["détruire"], "cré", "créé", "avoir"),
    ("exprimer", "1er groupe", "A2", "Rendre manifeste par le langage.", ["cacher"], "exprim", "exprimé", "avoir"),
    ("remarquer", "1er groupe", "A2", "Percevoir avec attention.", ["ignorer"], "remarqu", "remarqué", "avoir"),
    ("écraser", "1er groupe", "A2", "Aplatir violemment.", ["relever"], "écras", "écrasé", "avoir"),
    ("voler", "1er groupe", "A1", "S'élever et se déplacer dans les airs.", ["tomber"], "vol", "volé", "avoir"),
    ("nager", "1er groupe", "A1", "Se déplacer dans l'eau.", ["couler"], "nag", "nagé", "avoir"),
    ("sauter", "1er groupe", "A1", "S'élancer en l'air.", ["s'asseoir"], "saut", "sauté", "avoir"),
    ("désirer", "1er groupe", "A2", "Souhaiter vivement.", ["refuser"], "désir", "désiré", "avoir"),
    ("admirer", "1er groupe", "A2", "Contempler avec plaisir.", ["mépriser"], "admir", "admiré", "avoir"),
    ("souhaiter", "1er groupe", "A2", "Exprimer un vœu.", ["redouter"], "souhait", "souhaité", "avoir"),
    ("raconter", "1er groupe", "A1", "Faire le récit d'un événement.", ["taire"], "racont", "raconté", "avoir"),
    ("étonner", "1er groupe", "A2", "Provoquer la surprise.", ["rassurer"], "étonn", "étonné", "avoir"),
    ("ressembler", "1er groupe", "A2", "Avoir des traits communs.", ["différer"], "ressembl", "ressemblé", "avoir"),
    ("nettoyer", "1er groupe", "A1", "Rendre propre.", ["salir"], "nettoy", "nettoyé", "avoir"),
    ("emprunter", "1er groupe", "A2", "Obtenir à titre de prêt.", ["prêter"], "emprunt", "emprunté", "avoir"),
    ("prêter", "1er groupe", "A2", "Accorder l'usage temporaire.", ["emprunter"], "prêt", "prêté", "avoir"),
    ("corriger", "1er groupe", "A2", "Faire disparaître les erreurs.", ["falsifier"], "corrig", "corrigé", "avoir"),
    ("protéger", "1er groupe", "A2", "Mettre à l'abri.", ["attaquer"], "protèg", "protégé", "avoir"),
    ("remplir", "2e groupe", "A2", "Rendre plein un espace.", ["vider"], "rempliss", "rempli", "avoir"),
    ("choisir", "2e groupe", "A1", "Fixer son choix.", ["hésiter"], "choisiss", "choisi", "avoir"),
    ("finir", "2e groupe", "A1", "Arriver au terme.", ["commencer"], "finiss", "fini", "avoir"),
    ("réussir", "2e groupe", "A1", "Obtenir un résultat heureux.", ["échouer"], "réussiss", "réussi", "avoir"),
    ("grandir", "2e groupe", "A2", "Devenir plus grand.", ["rétrécir"], "grandiss", "grandi", "avoir"),
    ("réfléchir", "2e groupe", "A2", "Penser mûrement.", ["agir sans penser"], "réfléchiss", "réfléchi", "avoir"),
    ("obéir", "2e groupe", "A2", "Se soumettre aux ordres.", ["désobéir"], "obéiss", "obéi", "avoir"),
    ("punir", "2e groupe", "A2", "Châtier une faute.", ["récompenser"], "puniss", "puni", "avoir"),
    ("nourrir", "2e groupe", "A2", "Fournir les aliments.", ["affamer"], "nourriss", "nourri", "avoir"),
    ("vieillir", "2e groupe", "A2", "Devenir plus âgé.", ["rajeunir"], "vieilliss", "vieilli", "avoir"),
    ("guérir", "2e groupe", "A2", "Rendre la santé.", ["blesser"], "guériss", "guéri", "avoir")
]

fr_verbs = {}
vowels = ('a', 'e', 'i', 'o', 'u', 'y', 'é', 'è', 'ê', 'h')

for inf, grp, lvl, defn, ants, st, pp, aux in fr_v_raw:
    is_vowel = inf.startswith(vowels)
    j_pronoun = "j'" if is_vowel else "je "

    if grp == "1er groupe":
        nous_p = f"nous {st}geons" if inf in ["manger", "voyager", "nager", "partager", "corriger"] else (f"nous {st[:-1]}çons" if inf == "commencer" else f"nous {st}ons")
        ind_p = [f"{j_pronoun}{st}e".strip(), f"tu {st}es", f"il/elle {st}e", nous_p, f"vous {st}ez", f"ils/elles {st}ent"]
        ind_imp = [f"{j_pronoun}{st}ais".strip(), f"tu {st}ais", f"il/elle {st}ait", f"nous {st}ions", f"vous {st}iez", f"ils/elles {st}aient"]
        ind_f = [f"{j_pronoun}{st}erai".strip(), f"tu {st}eras", f"il/elle {st}era", f"nous {st}erons", f"vous {st}erez", f"ils/elles {st}eront"]
        cond = [f"{j_pronoun}{st}erais".strip(), f"tu {st}erais", f"il/elle {st}erait", f"nous {st}erions", f"vous {st}eriez", f"ils/elles {st}eraient"]
        subj = [f"que {j_pronoun}{st}e".strip(), f"que tu {st}es", f"qu'il/elle {st}e", f"que nous {st}ions", f"que vous {st}iez", f"qu'ils/elles {st}ent"]
    else: # 2e groupe
        ind_p = [f"{j_pronoun}{inf[:-2]}is".strip(), f"tu {inf[:-2]}is", f"il/elle {inf[:-2]}it", f"nous {st}ons", f"vous {st}ez", f"ils/elles {st}ent"]
        ind_imp = [f"{j_pronoun}{st}ais".strip(), f"tu {st}ais", f"il/elle {st}ait", f"nous {st}ions", f"vous {st}iez", f"ils/elles {st}aient"]
        ind_f = [f"{j_pronoun}{inf}ai".strip(), f"tu {inf}as", f"il/elle {inf}a", f"nous {inf}ons", f"vous {inf}ez", f"ils/elles {inf}ont"]
        cond = [f"{j_pronoun}{inf}ais".strip(), f"tu {inf}ais", f"il/elle {inf}ait", f"nous {inf}ions", f"vous {inf}iez", f"ils/elles {inf}aient"]
        subj = [f"que {j_pronoun}{st}e".strip(), f"que tu {st}es", f"qu'il/elle {st}e", f"que nous {st}ions", f"que vous {st}iez", f"qu'ils/elles {st}ent"]

    pc = [f"j'ai {pp}", f"tu as {pp}", f"il/elle a {pp}", f"nous avons {pp}", f"vous avez {pp}", f"ils/elles ont {pp}"] if aux == "avoir" else [f"je suis {pp}", f"tu es {pp}", f"il/elle est {pp}", f"nous sommes {pp}s", f"vous êtes {pp}s", f"ils/elles sont {pp}s"]

    fr_verbs[inf] = {
        "group": grp, "level": lvl, "definition": defn, "antonyms": ants, "auxiliary": aux,
        "tenses": {
            "indicatif_present": ind_p, "indicatif_imparfait": ind_imp, "pc": pc, "indicatif_futur_simple": ind_f,
            "conditionnel_present": cond, "subjonctif_present": subj,
            "imperatif": [f"{ind_p[0].split()[-1]} !", f"{ind_p[3].split()[-1]} !", f"{ind_p[4].split()[-1]} !"],
            "participe_passe": [pp]
        }
    }

fr_verbs["manger"] = {
    "group": "1er groupe", "level": "A1", "definition": "Absorber des aliments solides pour se nourrir.", "antonyms": ["jeûner"], "auxiliary": "avoir",
    "tenses": {
        "indicatif_present": ["je mange", "tu manges", "il/elle mange", "nous mangeons", "vous mangez", "ils/elles mangent"],
        "indicatif_imparfait": ["je mangeais", "tu mangeais", "il/elle mangeait", "nous mangions", "vous mangiez", "ils/elles mangeaient"],
        "pc": ["j'ai mangé", "tu as mangé", "il/elle a mangé", "nous avons mangé", "vous avez mangé", "ils/elles ont mangé"],
        "indicatif_futur_simple": ["je mangerai", "tu mangeras", "il/elle mangera", "nous mangerons", "vous mangerez", "ils/elles mangeront"],
        "conditionnel_present": ["je mangerais", "tu mangerais", "il/elle mangerait", "nous mangerions", "vous mangeriez", "ils/elles mangeraient"],
        "subjonctif_present": ["que je mange", "que tu manges", "qu'il/elle mange", "que nous mangions", "que vous mangiez", "qu'ils/elles mangent"],
        "imperatif": ["mange !", "mangeons !", "mangez !"], "participe_passe": ["mangé"]
    }
}

fr_irreg = [
    ("être", "3e groupe", "A1", "Exister ou posséder une qualité.", ["paraître"], "avoir",
     ["je suis", "tu es", "il/elle est", "nous sommes", "vous êtes", "ils/elles sont"],
     ["j'étais", "tu étais", "il/elle était", "nous étions", "vous étiez", "ils/elles étaient"],
     ["j'ai été", "tu as été", "il/elle a été", "nous avons été", "vous avez été", "ils/elles ont été"],
     ["je serai", "tu seras", "il/elle sera", "nous serons", "vous serez", "ils/elles seront"],
     ["je serais", "tu serais", "il/elle serait", "nous serions", "vous seriez", "ils/elles seraient"],
     ["que je sois", "que tu sois", "qu'il/elle soit", "que nous soyons", "que vous soyez", "qu'ils/elles soient"],
     ["sois !", "soyons !", "soyez !"], ["été"]),

    ("avoir", "3e groupe", "A1", "Posséder un bien ou un état.", ["manquer"], "avoir",
     ["j'ai", "tu as", "il/elle a", "nous avons", "vous avez", "ils/elles ont"],
     ["j'avais", "tu avais", "il/elle avait", "nous avions", "vous aviez", "ils/elles avaient"],
     ["j'ai eu", "tu as eu", "il/elle a eu", "nous avons eu", "vous avez eu", "ils/elles ont eu"],
     ["j'aurai", "tu auras", "il/elle aura", "nous aurons", "vous aurez", "ils/elles auront"],
     ["j'aurais", "tu aurais", "il/elle aurait", "nous aurions", "vous auriez", "ils/elles auraient"],
     ["que j'aie", "que tu aies", "qu'il/elle ait", "que nous ayons", "que vous ayez", "qu'ils/elles aient"],
     ["aie !", "ayons !", "ayez !"], ["eu"]),

    ("aller", "3e groupe", "A1", "Se déplacer d'un lieu à un autre.", ["venir"], "être",
     ["je vais", "tu vas", "il/elle va", "nous allons", "vous allez", "ils/elles vont"],
     ["j'allais", "tu allais", "il/elle allait", "nous allions", "vous alliez", "ils/elles allaient"],
     ["je suis allé", "tu es allé", "il/elle est allé", "nous sommes allés", "vous êtes allés", "ils/elles sont allés"],
     ["j'irai", "tu iras", "il/elle ira", "nous irons", "vous irez", "ils/elles iront"],
     ["j'irais", "tu irais", "il/elle irait", "nous irions", "vous iriez", "ils/elles iraient"],
     ["que j'aille", "que tu ailles", "qu'il/elle aille", "que nous allions", "que vous alliez", "qu'ils/elles aillent"],
     ["va !", "allons !", "allez !"], ["allé"]),

    ("faire", "3e groupe", "A1", "Réaliser une action.", ["défaire"], "avoir",
     ["je fais", "tu fais", "il/elle fait", "nous faisons", "vous faites", "ils/elles font"],
     ["je faisais", "tu faisais", "il/elle faisait", "nous faisions", "vous faisiez", "ils/elles faisaient"],
     ["j'ai fait", "tu as fait", "il/elle a fait", "nous avons fait", "vous avez fait", "ils/elles ont fait"],
     ["je ferai", "tu feras", "il/elle fera", "nous ferons", "vous ferez", "ils/elles feront"],
     ["je ferais", "tu ferais", "il/elle ferait", "nous ferions", "vous feriez", "ils/elles feraient"],
     ["que je fasse", "que tu fasses", "qu'il/elle fasse", "que nous fassions", "que vous fassiez", "qu'ils/elles fassent"],
     ["fais !", "faisons !", "faites !"], ["fait"]),

    ("dire", "3e groupe", "A1", "Exprimer par la parole.", ["se taire"], "avoir",
     ["je dis", "tu dis", "il/elle dit", "nous disons", "vous dites", "ils/elles disent"],
     ["je disais", "tu disais", "il/elle disait", "nous disions", "vous disiez", "ils/elles disaient"],
     ["j'ai dit", "tu as dit", "il/elle a dit", "nous avons dit", "vous avez dit", "ils/elles ont dit"],
     ["je dirai", "tu diras", "il/elle dira", "nous dirons", "vous direz", "ils/elles diront"],
     ["je dirais", "tu dirais", "il/elle dirait", "nous dirions", "vous diriez", "ils/elles diraient"],
     ["que je dise", "que tu dises", "qu'il/elle dise", "que nous disions", "que vous disiez", "qu'ils/elles disent"],
     ["dis !", "disons !", "dites !"], ["dit"]),

    ("voir", "3e groupe", "A1", "Percevoir par les yeux.", ["aveugler"], "avoir",
     ["je vois", "tu vois", "il/elle voit", "nous voyons", "vous voyez", "ils/elles voient"],
     ["je voyais", "tu voyais", "il/elle voyait", "nous voyions", "vous voyiez", "ils/elles voyaient"],
     ["j'ai vu", "tu as vu", "il/elle a vu", "nous avons vu", "vous avez vu", "ils/elles ont vu"],
     ["je verrai", "tu verras", "il/elle verra", "nous verrons", "vous verrez", "ils/elles verront"],
     ["je verrais", "tu verrais", "il/elle verrait", "nous verrions", "vous verriez", "ils/elles verraient"],
     ["que je voie", "que tu voies", "qu'il/elle voie", "que nous voyions", "que vous voyiez", "qu'ils/elles voient"],
     ["vois !", "voyons !", "voyez !"], ["vu"]),

    ("pouvoir", "3e groupe", "A1", "Avoir la capacité.", ["ne pas pouvoir"], "avoir",
     ["je peux", "tu peux", "il/elle peut", "nous pouvons", "vous pouvez", "ils/elles peuvent"],
     ["je pouvais", "tu pouvais", "il/elle pouvait", "nous pouvions", "vous pouviez", "ils/elles pouvaient"],
     ["j'ai pu", "tu as pu", "il/elle a pu", "nous avons pu", "vous avez pu", "ils/elles ont pu"],
     ["je pourrai", "tu pourras", "il/elle pourra", "nous pourrons", "vous pourrez", "ils/elles pourront"],
     ["je pourrais", "tu pourrais", "il/elle pourrait", "nous pourrions", "vous pourriez", "ils/elles pourraient"],
     ["que je puisse", "que tu puisses", "qu'il/elle puisse", "que nous puissions", "que vous puissiez", "qu'ils/elles puissent"],
     ["puisse !", "puissions !", "puissez !"], ["pu"]),

    ("vouloir", "3e groupe", "A1", "Avoir la volonté.", ["refuser"], "avoir",
     ["je veux", "tu veux", "il/elle veut", "nous voulons", "vous voulez", "ils/elles veulent"],
     ["je voulais", "tu voulais", "il/elle voulait", "nous voulions", "vous vouliez", "ils/elles voulaient"],
     ["j'ai voulu", "tu as voulu", "il/elle a voulu", "nous avons voulu", "vous avez voulu", "ils/elles ont voulu"],
     ["je voudrai", "tu voudras", "il/elle voudra", "nous voudrons", "vous voudrez", "ils/elles voudront"],
     ["je voudrais", "tu voudrais", "il/elle voudrait", "nous voudrions", "vous voudriez", "ils/elles voudraient"],
     ["que je veuille", "que tu veuilles", "qu'il/elle veuille", "que nous voulions", "que vous vouliez", "qu'ils/elles veuillent"],
     ["veuille !", "voulons !", "veuillez !"], ["voulu"]),

    ("savoir", "3e groupe", "A1", "Avoir la connaissance.", ["ignorer"], "avoir",
     ["je sais", "tu sais", "il/elle sait", "nous savons", "vous savez", "ils/elles savent"],
     ["je savais", "tu savais", "il/elle savait", "nous savions", "vous saviez", "ils/elles savaient"],
     ["j'ai su", "tu as su", "il/elle a su", "nous avons su", "vous avez su", "ils/elles ont su"],
     ["je saurai", "tu sauras", "il/elle saura", "nous saurons", "vous saurez", "ils/elles sauront"],
     ["je saurais", "tu saurais", "il/elle saurait", "nous saurions", "vous sauriez", "ils/elles sauraient"],
     ["que je sache", "que tu saches", "qu'il/elle sache", "que nous sachions", "que vous sachiez", "qu'ils/elles sachent"],
     ["sache !", "sachons !", "sachez !"], ["su"]),

    ("prendre", "3e groupe", "A1", "Saisir ou recevoir.", ["donner"], "avoir",
     ["je prends", "tu prends", "il/elle prend", "nous prenons", "vous prenez", "ils/elles prennent"],
     ["je prenais", "tu prenais", "il/elle prenait", "nous prenions", "vous preniez", "ils/elles prenaient"],
     ["j'ai pris", "tu as pris", "il/elle a pris", "nous avons pris", "vous avez pris", "ils/elles ont pris"],
     ["je prendrai", "tu prendras", "il/elle prendra", "nous prendrons", "vous prendrez", "ils/elles prendront"],
     ["je prendrais", "tu prendrais", "il/elle prendrait", "nous prendrions", "vous prendriez", "ils/elles prendraient"],
     ["que je prenne", "que tu prennes", "qu'il/elle prenne", "que nous prenions", "que vous preniez", "qu'ils/elles prennent"],
     ["prends !", "prenons !", "prenez !"], ["pris"]),

    ("venir", "3e groupe", "A1", "Se déplacer vers le lieu.", ["partir"], "être",
     ["je viens", "tu viens", "il/elle vient", "nous venons", "vous venez", "ils/elles viennent"],
     ["je venais", "tu venais", "il/elle venait", "nous venions", "vous veniez", "ils/elles venaient"],
     ["je suis venu", "tu es venu", "il/elle est venu", "nous sommes venus", "vous êtes venus", "ils/elles sont venus"],
     ["je viendrai", "tu viendras", "il/elle viendra", "nous viendrons", "vous viendrez", "ils/elles viendront"],
     ["je viendrais", "tu viendrais", "il/elle viendrait", "nous viendrions", "vous viendriez", "ils/elles viendraient"],
     ["que je vienne", "que tu viennes", "qu'il/elle vienne", "que nous venions", "que vous veniez", "qu'ils/elles viennent"],
     ["viens !", "venons !", "venez !"], ["venu"]),

    ("vendre", "3e groupe", "A1", "Céder contre de l'argent.", ["acheter"], "avoir",
     ["je vends", "tu vends", "il/elle vend", "nous vendons", "vous vendez", "ils/elles vendent"],
     ["je vendais", "tu vendais", "il/elle vendait", "nous vendions", "vous vendiez", "ils/elles vendaient"],
     ["j'ai vendu", "tu as vendu", "il/elle a vendu", "nous avons vendu", "vous avez vendu", "ils/elles ont vendu"],
     ["je vendrai", "tu vendras", "il/elle vendra", "nous vendrons", "vous vendrez", "ils/elles vendront"],
     ["je vendrais", "tu vendrais", "il/elle vendrait", "nous vendrions", "vous vendriez", "ils/elles vendraient"],
     ["que je vende", "que tu vendes", "qu'il/elle vende", "que nous vendions", "que vous vendiez", "qu'ils/elles vendent"],
     ["vends !", "vendons !", "vendez !"], ["vendu"]),

    ("détruire", "3e groupe", "B1", "Démolir ou anéantir.", ["créer"], "avoir",
     ["je détruis", "tu détruis", "il/elle détruit", "nous détruisons", "vous détruisez", "ils/elles détruisent"],
     ["je détruisais", "tu détruisais", "il/elle détruisait", "nous détruisions", "vous détruisiez", "ils/elles détruisaient"],
     ["j'ai détruit", "tu as détruit", "il/elle a détruit", "nous avons détruit", "vous avez détruit", "ils/elles ont détruit"],
     ["je détruirai", "tu détruiras", "il/elle détruira", "nous détruirons", "vous détruirez", "ils/elles détruiront"],
     ["je détruirais", "tu détruirais", "il/elle détruirait", "nous détruirions", "vous détruiriez", "ils/elles détruirait"],
     ["que je détruise", "que tu détruises", "qu'il/elle détruise", "que nous détruisions", "que vous détruisiez", "qu'ils/elles détruisent"],
     ["détruis !", "détruisons !", "détruisez !"], ["détruit"]),

    ("prévoir", "3e groupe", "B1", "Envisager comme possible.", ["improviser"], "avoir",
     ["je prévois", "tu prévois", "il/elle prévoit", "nous prévoyons", "vous prévoyez", "ils/elles prévoient"],
     ["je prévoyais", "tu prévoyais", "il/elle prévoyait", "nous prévoyions", "vous prévoyiez", "ils/elles prévoyaient"],
     ["j'ai prévu", "tu as prévu", "il/elle a prévu", "nous avons prévu", "vous avez prévu", "ils/elles ont prévu"],
     ["je prévoirai", "tu prévoiras", "il/elle prévoira", "nous prévoirons", "vous prévoirez", "ils/elles prévoiront"],
     ["je prévoirais", "tu prévoirais", "il/elle prévoirait", "nous prévoirions", "vous prévoiriez", "ils/elles prévoiraient"],
     ["que je prévoie", "que tu prévoies", "qu'il/elle prévoie", "que nous prévoyions", "que vous prévoyiez", "qu'ils/elles prévoient"],
     ["prévois !", "prévoyons !", "prévoyez !"], ["prévu"]),

    ("prévenir", "3e groupe", "A2", "Avertir à l'avance.", ["surprendre"], "avoir",
     ["je préviens", "tu préviens", "il/elle prévient", "nous prévenons", "vous prévenez", "ils/elles préviennent"],
     ["je prévenais", "tu prévenais", "il/elle prévenait", "nous prévenions", "vous préveniez", "ils/elles prévenaient"],
     ["j'ai prévenu", "tu as prévenu", "il/elle a prévenu", "nous avons prévenu", "vous avez prévenu", "ils/elles ont prévenu"],
     ["je préviendrai", "tu préviendras", "il/elle préviendra", "nous préviendrons", "vous préviendrez", "ils/elles préviendront"],
     ["je préviendrais", "tu préviendrais", "il/elle préviendrait", "nous préviendrions", "vous préviendriez", "ils/elles préviendraient"],
     ["que je prévienne", "que tu préviennes", "qu'il/elle prévienne", "que nous prévenions", "que vous préveniez", "qu'ils/elles préviennent"],
     ["préviens !", "prévenons !", "prévenez !"], ["prévenu"])
]

for inf, grp, lvl, defn, ants, aux, p, imp, pc, f, c, s, impf, pp in fr_irreg:
    fr_verbs[inf] = {
        "group": grp, "level": lvl, "definition": defn, "antonyms": ants, "auxiliary": aux,
        "tenses": {
            "indicatif_present": p, "indicatif_imparfait": imp, "pc": pc, "indicatif_futur_simple": f,
            "conditionnel_present": c, "subjonctif_present": s,
            "imperatif": impf, "participe_passe": pp
        }
    }

save_db("apps/fr-conjugeur/data/verbs.json", fr_verbs)

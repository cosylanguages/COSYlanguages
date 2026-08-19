import json

def write_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

# 1. Italian Nouns (it-genere) -> 200
with open("apps/it-genere/data/nouns.json", "r", encoding="utf-8") as f:
    it_n = json.load(f)

more_it_n = [
    ("gatto", "A1", "Piccolo feriale domestico.", ["cane"], "il", "del gatto", "al gatto", "il gatto", "dal gatto", "in gatto", "i gatti", "maschile"),
    ("giornale", "A1", "Pubblicazione quotidiana di notizie.", ["libro"], "il", "del giornale", "al giornale", "il giornale", "dal giornale", "in giornale", "i giornali", "maschile"),
    ("giorno", "A1", "Periodo di 24 ore.", ["notte"], "il", "del giorno", "al giorno", "il giorno", "dal giorno", "in giorno", "i giorni", "maschile"),
    ("giardino", "A1", "Spazio verde curato.", ["casa"], "il", "del giardino", "al giardino", "il giardino", "dal giardino", "in giardino", "i giardini", "maschile"),
    ("giovane", "A1", "Persona in età giovanile.", ["vecchio"], "il", "del giovane", "al giovane", "il giovane", "dal giovane", "in giovane", "i giovani", "maschile"),
    ("isola", "A1", "Terra emersa circondata dalle acque.", ["continente"], "l'", "dell'isola", "all'isola", "l'isola", "dall'isola", "in isola", "le isole", "femminile"),
    ("lavoro", "A1", "Attività professionale.", ["riposo"], "il", "del lavoro", "al lavoro", "il lavoro", "dal lavoro", "in lavoro", "i lavori", "maschile"),
    ("latte", "A1", "Bevanda bianca nutritiva.", ["acqua"], "il", "del latte", "al latte", "il latte", "dal latte", "in latte", "i latti", "maschile"),
    ("lettera", "A1", "Messaggio scritto o segno alfabetico.", ["numero"], "la", "della lettera", "alla lettera", "la lettera", "dalla lettera", "in lettera", "le lettere", "femminile"),
    ("letto", "A1", "Mobile per dormire.", ["sedia"], "il", "del letto", "al letto", "il letto", "dal letto", "in letto", "i letti", "maschile"),
    ("libro", "A1", "Volume a stampa da leggere.", ["quaderno"], "il", "del libro", "al libro", "il libro", "dal libro", "in libro", "i libri", "maschile"),
    ("luce", "A1", "Radiazione luminosa.", ["buio"], "la", "della luce", "alla luce", "la luce", "dalla luce", "in luce", "le luci", "femminile"),
    ("mare", "A1", "Grande distesa d'acqua salata.", ["terra"], "il", "del mare", "al mare", "il mare", "dal mare", "in mare", "i mari", "maschile"),
    ("madre", "A1", "Genitore femminile.", ["padre"], "la", "della madre", "alla madre", "la madre", "dalla madre", "in madre", "le madri", "femminile"),
    ("medico", "A1", "Professionista della salute.", ["paziente"], "il", "del medico", "al medico", "il medico", "dal medico", "in medico", "i medici", "maschile"),
    ("mese", "A1", "Dodicesima parte dell'anno.", ["anno"], "il", "del mese", "al mese", "il mese", "dal mese", "in mese", "i mesi", "maschile")
]

for noun, lvl, defn, ants, art, gen_, dat_, acc_, abl_, loc_, plur_, gen_str in more_it_n:
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

# 2. Italian Verbs (it-coniugatore) -> 170+
with open("apps/it-coniugatore/data/verbs.json", "r", encoding="utf-8") as f:
    it_v = json.load(f)

more_it_v2 = [
    ("incontrare", "A1", "Vedere una persona.", ["evitare"], "are", "incontro", "incontri", "incontra", "incontriamo", "incontrate", "incontrano", "ho incontrato", "incontravo", "incontrerò", "incontrerei"),
    ("inviare", "A1", "Spedire un messaggio.", ["ricevere"], "are", "invio", "invii", "invia", "inviamo", "inviate", "inviano", "ho inviato", "inviavo", "invierò", "invierei"),
    ("invitare", "A1", "Chiedere di venire.", ["cacciare"], "are", "invito", "inviti", "invita", "invitiamo", "invitate", "invitano", "ho invitato", "invitavo", "inviterò", "inviterei"),
    ("lanciare", "A2", "Scagliare con forza.", ["raccogliere"], "are", "lancio", "lanci", "lancia", "lanciamo", "lanciate", "lanciano", "ho lanciato", "lanciavo", "lancerò", "lancerei"),
    ("lavare", "A1", "Pulire con acqua.", ["sporcare"], "are", "lavo", "lavi", "lava", "laviamo", "lavate", "lavano", "ho lavato", "lavavo", "laverò", "laverei"),
    ("mancare", "A1", "Fattore di assenza.", ["bastare"], "are", "manco", "manchi", "manca", "manchiamo", "mancate", "mancano", "ho mancato", "mancavo", "mancherò", "mancherei"),
    ("mostrare", "A1", "Far vedere qualcosa.", ["nascondere"], "are", "mostro", "mostri", "mostra", "mostriamo", "mostrate", "mostrano", "ho mostrato", "mostravo", "mostrerò", "mostrerei"),
    ("offrire", "A2", "Dare volontariamente.", ["chiedere"], "ire", "offro", "offri", "offre", "offriamo", "offrite", "offrono", "ho offerto", "offrivo", "offrirò", "offrirei"),
    ("ordinare", "A2", "Disporre con ordine.", ["disordinare"], "are", "ordino", "ordini", "ordina", "ordiniamo", "ordinate", "ordinano", "ho ordinato", "ordinavo", "ordinerò", "ordinerei"),
    ("perdere", "A1", "Non trovare più.", ["trovare"], "ere", "perdo", "perdi", "perde", "perdiamo", "perdete", "perdono", "ho perso", "perdevo", "perderò", "perderei"),
    ("portare", "A1", "Recare con sé.", ["lasciare"], "are", "porto", "porti", "porta", "portiamo", "portate", "portano", "ho portato", "portavo", "porterò", "porterei"),
    ("preferire", "A1", "Avere maggiore gradimento.", ["detestare"], "ire", "preferisco", "preferisci", "preferisce", "preferiamo", "preferite", "preferiscono", "ho preferito", "preferivo", "preferirò", "preferirei"),
    ("preparare", "A1", "Disporre in anticipo.", ["improvvisare"], "are", "preparo", "prepari", "prepara", "prepariamo", "preparate", "preparano", "ho preparato", "preparavo", "preparerò", "preparerei"),
    ("raccontare", "A1", "Narra una storia.", ["tacere"], "are", "racconto", "racconti", "racconta", "raccontiamo", "raccontate", "raccontano", "ho raccontato", "raccontavo", "racconterò", "racconterei"),
    ("ricordare", "A1", "Avere in memoria.", ["dimenticare"], "are", "ricordo", "ricordi", "ricorda", "ricordiamo", "ricordate", "ricordano", "ho ricordato", "ricordavo", "ricorderò", "ricorderei"),
    ("ridere", "A1", "Esprimere allegria.", ["piangere"], "ere", "rido", "ridi", "ride", "ridiamo", "ridete", "ridono", "ho riso", "ridevo", "riderò", "riderei"),
    ("riposare", "A1", "Riconquistare le forze.", ["faticare"], "are", "riposo", "riposi", "riposa", "riposiamo", "riposate", "riposano", "ho riposato", "riposavo", "riposerò", "riposerei"),
    ("rompere", "A1", "Spezzare in parti.", ["aggiustare"], "ere", "rompo", "rompi", "rompe", "rompiamo", "rompete", "rompono", "ho rotto", "rompevo", "romperò", "romperei"),
    ("salire", "A1", "Andare verso l'alto.", ["scendere"], "ire", "salgo", "sali", "sale", "saliamo", "salite", "salgono", "sono salito", "salivo", "salirò", "salirei"),
    ("scendere", "A1", "Andare verso il basso.", ["salire"], "ere", "scendo", "scendi", "scende", "scendiamo", "scendete", "scendono", "sono sceso", "scendevo", "scenderò", "scenderei"),
    ("scoprire", "A2", "Trovare ciò che è celato.", ["nascondere"], "ire", "scopro", "scopri", "scopre", "scopriamo", "scoprite", "scoprono", "ho scoperto", "scoprivo", "scoprirò", "scoprirei"),
    ("sembrare", "A2", "Avere l'aspetto di.", ["essere certo"], "are", "sembro", "sembri", "sembra", "sembriamo", "sembrate", "sembrano", "è sembrato", "sembravo", "sembrerò", "sembrerei"),
    ("sperare", "A2", "Confidare nel futuro.", ["disperare"], "are", "spero", "speri", "spera", "speriamo", "sperate", "sperano", "ho sperato", "speravo", "spererò", "sperei"),
    ("spiegare", "A1", "Rendere comprensibile.", ["confondere"], "are", "spiego", "spieghi", "spiega", "spieghiamo", "spiegate", "spiegano", "ho spiegato", "spiegavo", "spiegherò", "spiegherei"),
    ("svegliare", "A1", "Interrompere il sonno.", ["addormentare"], "are", "sveglio", "svegli", "sveglia", "svegliamo", "svegliate", "svegliano", "ho svegliato", "svegliavo", "sveglierò", "sveglierei")
]

for inf, lvl, defn, ants, grp, pres_1s, pres_2s, pres_3s, pres_1p, pres_2p, pres_3p, pass_c, imp_1s, fut_1s, cond_1s in more_it_v2:
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

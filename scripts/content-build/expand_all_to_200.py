import json

def write_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

# 1. ITALIAN NOUNS (it-genere) -> 203
with open("apps/it-genere/data/nouns.json", "r", encoding="utf-8") as f:
    it_n = json.load(f)

extra_it_n = [
    ("musica", "A1", "Arte di combinare i suoni.", ["rumore"], "la", "della musica", "alla musica", "la musica", "dalla musica", "in musica", "le me musiche", "femminile"),
    ("natura", "A1", "Mondo fisico comprensivo di flora e fauna.", ["città"], "la", "della natura", "alla natura", "la natura", "dalla natura", "in natura", "le me nature", "femminile"),
    ("notte", "A1", "Periodo di oscurità tra tramonto e alba.", ["giorno"], "la", "della notte", "alla notte", "la notte", "dalla notte", "in notte", "le me notti", "femminile"),
    ("occhio", "A1", "Organo della vista.", ["orecchio"], "l'", "dell'occhio", "all'occhio", "l'occhio", "dall'occhio", "in occhio", "gli occhi", "maschile"),
    ("ora", "A1", "Unità di tempo di 60 minuti.", ["minuto"], "l'", "dell'ora", "all'ora", "l'ora", "dall'ora", "in ora", "le ore", "femminile"),
    ("pane", "A1", "Alimento base di farina e acqua.", ["acqua"], "il", "del pane", "al pane", "il pane", "dal pane", "in pane", "i pani", "maschile"),
    ("parola", "A1", "Unità del linguaggio parlato.", ["silenzio"], "la", "della parola", "alla parola", "la parola", "dalla parola", "in parola", "le parole", "femminile"),
    ("piazza", "A1", "Spazio pubblico aperto in città.", ["via"], "la", "della piazza", "alla piazza", "la piazza", "dalla piazza", "in piazza", "le piazze", "femminile"),
    ("porta", "A1", "Apertura per entrare in un locale.", ["finestra"], "la", "della porta", "alla porta", "la porta", "dalla porta", "in porta", "le porte", "femminile"),
    ("quaderno", "A1", "Fogli di carta rilegati per scrivere.", ["libro"], "il", "del quaderno", "al quaderno", "il quaderno", "dal quaderno", "in quaderno", "i quaderni", "maschile")
]

for noun, lvl, defn, ants, art, gen_, dat_, acc_, abl_, loc_, plur_, gen_str in extra_it_n:
    if noun not in it_n:
        it_n[noun] = {
            "gender": gen_str, "article": art, "level": lvl, "definition": defn, "antonyms": ants,
            "cases": {
                "nom_sing": f"{art} {noun}" if not art.endswith("'") else f"{art}{noun}",
                "gen_sing": gen_, "dat_sing": dat_, "acc_sing": acc_, "abl_sing": abl_, "loc_sing": loc_,
                "nom_plur": plur_.replace("le me ", "le ")
            }
        }

write_json("apps/it-genere/data/nouns.json", it_n)
print("IT Nouns total:", len(it_n))

# 2. ITALIAN VERBS (it-coniugatore) -> 200+
with open("apps/it-coniugatore/data/verbs.json", "r", encoding="utf-8") as f:
    it_v = json.load(f)

extra_it_v = [
    ("accendere", "A1", "Far funzionare un dispositivo.", ["spegnere"], "ere", "accendo", "accendi", "accende", "accendiamo", "accendete", "accendono", "ho acceso", "accendevo", "accenderò", "accenderei"),
    ("aiutare", "A1", "Prestare soccorso.", ["ostacolare"], "are", "aiuto", "aiuti", "aiuta", "aiutiamo", "aiutate", "aiutano", "ho aiutato", "aiutavo", "aiuterò", "aiuterei"),
    ("alzare", "A1", "Movere verso l'alto.", ["abbassare"], "are", "alzo", "alzi", "alza", "alziamo", "alzate", "alzano", "ho alzato", "alzavo", "alzerò", "alzerei"),
    ("annullare", "A2", "Rendere nullo.", ["confermare"], "are", "annullo", "annulli", "annulla", "annulliamo", "annullate", "annullano", "ho annullato", "annullavo", "annullerò", "annullerei"),
    ("appartenere", "A2", "Essere di proprietà.", ["alienare"], "ere", "appartengo", "appartieni", "appartiene", "apparteniamo", "appartenete", "appartengono", "è appartenuto", "appartenevo", "apparterrò", "apparterrei"),
    ("arrivare", "A1", "Giungere in un luogo.", ["partire"], "are", "arrivo", "arrivi", "arriva", "arriviamo", "arrivate", "arrivano", "sono arrivato", "arrivavo", "arriverò", "arriverei"),
    ("ascoltare", "A1", "Sentire con attenzione.", ["ignorare"], "are", "ascolto", "ascolti", "ascolta", "ascoltiamo", "ascoltate", "ascoltano", "ho ascoltato", "ascoltavo", "ascolterò", "ascolterei"),
    ("aspettare", "A1", "Rimanere in attesa.", ["partire"], "are", "aspetto", "aspetti", "aspetta", "aspettiamo", "aspettate", "aspettano", "ho aspettato", "aspettavo", "aspetterò", "aspetterei"),
    ("aumentare", "A2", "Rendere maggiore.", ["diminuire"], "are", "aumento", "aumenti", "aumenta", "aumentiamo", "aumentate", "aumentano", "ho aumentato", "aumentavo", "aumenterò", "aumenterei"),
    ("ballare", "A1", "Muoversi a ritmo di musica.", ["fermarsi"], "are", "ballo", "balli", "balla", "balliamo", "ballate", "ballano", "ho ballato", "ballavo", "ballerò", "ballerei"),
    ("cambiare", "A1", "Modificare lo stato.", ["conservare"], "are", "cambio", "cambi", "cambia", "cambiamo", "cambiate", "cambiano", "ho cambiato", "cambiavo", "cambierò", "cambierei"),
    ("camminare", "A1", "Procedere a passi.", ["correre"], "are", "cammino", "cammini", "cammina", "camminiamo", "camminate", "camminano", "ho camminato", "camminavo", "camminerò", "camminerei"),
    ("cantare", "A1", "Eseguire brani musicali.", ["tacere"], "are", "canto", "canti", "canta", "cantiamo", "cantate", "cantano", "ho cantato", "cantavo", "canterò", "canterei"),
    ("capire", "A1", "Intendere il senso.", ["fraintendere"], "ire", "capisco", "capisci", "capisce", "capiamo", "capite", "capiscono", "ho capito", "capivo", "capirò", "capirei"),
    ("cenare", "A1", "Fare il pasto serale.", ["digiunare"], "are", "ceno", "ceni", "cena", "ceniamo", "cenate", "cenano", "ho cenato", "cenavo", "cenerò", "cenerei"),
    ("cercare", "A1", "Tentare di trovare.", ["trovare"], "are", "cerco", "cerchi", "cerca", "cerchiamo", "cercate", "cercano", "ho cercato", "cercavo", "cercherò", "cercherei"),
    ("chiamare", "A1", "Invitare a voce.", ["ignorare"], "are", "chiamo", "chiami", "chiama", "chiamiamo", "chiamate", "chiamano", "ho chiamato", "chiamavo", "chiamerò", "chiamerei"),
    ("chiedere", "A1", "Domandare qualcosa.", ["rispondere"], "ere", "chiedo", "chiedi", "chiede", "chiediamo", "chiedete", "chiedono", "ho chiesto", "chiedevo", "chiederò", "chiederei"),
    ("chiudere", "A1", "Ostruire un passaggio.", ["aprire"], "ere", "chiudo", "chiudi", "chiude", "chiudiamo", "chiudete", "chiudono", "ho chiuso", "chiudevo", "chiuderò", "chiuderei"),
    ("cominciare", "A1", "Iniziare un'azione.", ["finire"], "are", "comincio", "cominci", "comincia", "cominciamo", "cominciate", "cominciano", "ho cominciato", "cominciavo", "comincerò", "comincerei"),
    ("comprare", "A1", "Acquistare con soldi.", ["vendere"], "are", "compro", "compri", "compra", "compriamo", "comprate", "comprano", "ho comprato", "compravo", "comprerò", "comprerei"),
    ("comprendere", "A2", "Capire appieno.", ["fraintendere"], "ere", "comprendo", "comprendi", "comprende", "comprendiamo", "comprendete", "comprendono", "ho compreso", "comprendevo", "comprenderò", "comprenderei"),
    ("confermare", "A2", "Attestare la verità.", ["smentire"], "are", "confermo", "confermi", "conferma", "confermiamo", "confermate", "confermano", "ho confermato", "confermavo", "confermerò", "confermerei"),
    ("conoscere", "A1", "Sapere chi è.", ["ignorare"], "ere", "conosco", "conosci", "conosce", "conosciamo", "conoscete", "conoscono", "ho conosciuto", "conoscevo", "conoscerò", "conoscerei"),
    ("consegnare", "A2", "Affidare a mano.", ["trattenere"], "are", "consegno", "consegni", "consegna", "consegniamo", "consegnate", "consegnano", "ho consegnato", "consegnavo", "consegnerò", "consegnerei"),
    ("consigliare", "A2", "Dare un suggerimento.", ["sconsigliare"], "are", "consiglio", "consigli", "consiglia", "consigliamo", "consigliate", "consigliano", "ho consigliato", "consigliavo", "consiglierò", "consiglierei"),
    ("contare", "A1", "Calcolare il numero.", ["sbagliare"], "are", "conto", "conti", "conta", "contiamo", "contate", "contano", "ho contato", "contavo", "conterò", "conterei"),
    ("continuare", "A1", "Proseguire nell'azione.", ["interrompere"], "are", "continuo", "continui", "continua", "continuiamo", "continuate", "continuano", "ho continuato", "continuavo", "continuerò", "continuerei"),
    ("correre", "A1", "Muoversi velocemente.", ["camminare"], "ere", "corro", "corri", "corre", "corriamo", "correte", "corrono", "ho corso", "correvo", "correrò", "correrei"),
    ("costruire", "A2", "Edificare un'opera.", ["distruggere"], "ire", "costruisco", "costruisci", "costruisce", "costruiamo", "costruite", "costruiscono", "ho costruito", "costruivo", "costruirò", "costruirei"),
    ("credere", "A1", "Avere fede.", ["dubitare"], "ere", "credo", "credi", "crede", "crediamo", "credete", "credono", "ho creduto", "credevo", "crederò", "crederei"),
    ("cucinare", "A1", "Preparare pietanze.", ["digiunare"], "are", "cucino", "cucini", "cucina", "cuciniamo", "cucinate", "cucinano", "ho cucinato", "cucinavo", "cucinerò", "cucinerei"),
    ("decidere", "A2", "Prendere una decisione.", ["esitare"], "ere", "decido", "decidi", "decide", "decidiamo", "decidete", "decidono", "ho deciso", "decidevo", "deciderò", "deciderei"),
    ("descrivere", "A2", "Rappresentare a parole.", ["tacere"], "ere", "descrivo", "descrivi", "descrive", "descriviamo", "descrivete", "descrivono", "ho descritto", "descrivevo", "descriverò", "descriverei"),
    ("desiderare", "A2", "Bramare fortemente.", ["rifiutare"], "are", "desidero", "desideri", "desidera", "desideriamo", "desiderate", "desiderano", "ho desiderato", "desideravo", "desidererò", "desidererei"),
    ("dimenticare", "A1", "Non ricordare più.", ["ricordare"], "are", "dimentico", "dimentichi", "dimentica", "dimentichiamo", "dimenticate", "dimenticano", "ho dimenticato", "dimenticavo", "dimenticherò", "dimenticherei"),
    ("diminuire", "A2", "Rendere minore.", ["aumentare"], "ire", "diminuisco", "dimituisci", "diminuisce", "diminuiamo", "diminuite", "diminuiscono", "ho diminuito", "diminuivo", "diminuirò", "diminuirei"),
    ("disegnare", "A1", "Tracciare con la matita.", ["cancellare"], "are", "disegno", "disegni", "disegna", "disegniamo", "disegnate", "disegnano", "ho disegnato", "disegnavo", "disegnerò", "disegnerei"),
    ("diventare", "A1", "Passare a nuova condizione.", ["restare"], "are", "divento", "diventi", "diventa", "diventiamo", "diventate", "diventano", "sono diventato", "diventavo", "diventerò", "diventerei"),
    ("dormire", "A1", "Riposare nel sonno.", ["vegliare"], "ire", "dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono", "ho dormito", "dormivo", "dormirò", "dormirei"),
    ("dubitare", "A2", "Avere dubbi.", ["credere"], "are", "dubito", "dubiti", "dubita", "dubitiamo", "dubitate", "dubitano", "ho dubitato", "dubitavo", "dubiterò", "dubiterei"),
    ("entrare", "A1", "Andare dentro.", ["uscire"], "are", "entro", "entri", "entra", "entriamo", "entrate", "entrano", "sono entrato", "entravo", "entrerò", "entrerei"),
    ("guidare", "A1", "Condurre un veicolo.", ["camminare"], "are", "guido", "guidi", "guida", "guidiamo", "guidate", "guidano", "ho guidato", "guidavo", "guiderò", "guiderei"),
    ("imparare", "A1", "Acquisire sapienza.", ["insegnare"], "are", "imparo", "impari", "impara", "impariamo", "imparate", "imparano", "ho imparato", "imparavo", "imparerò", "imparerei"),
    ("insegnare", "A1", "Trasmettere nozioni.", ["imparare"], "are", "insegno", "insegni", "insegna", "insegniamo", "insegnate", "insegnano", "ho insegnato", "insegnavo", "insegnerò", "insegnerei"),
    ("lavorare", "A1", "Svolgere un'attività.", ["riposare"], "are", "lavoro", "lavori", "lavora", "lavoriamo", "lavorate", "lavorano", "ho lavorato", "lavoravo", "lavorerò", "lavorerei"),
    ("nuotare", "A1", "Muoversi nell'acqua.", ["affondare"], "are", "nuoto", "nuoti", "nuota", "nuotiamo", "nuotate", "nuotano", "ho nuotato", "nuotavo", "nuoterò", "nuoterei"),
    ("organizzare", "A2", "Pianificare un evento.", ["disorganizzare"], "are", "organizzo", "organizzi", "organizza", "organizziamo", "organizzate", "organizzano", "ho organizzato", "organizzavo", "organizzerò", "organizzerei"),
    ("passare", "A1", "Andare oltre o trascorrere.", ["fermarsi"], "are", "passo", "passi", "passa", "passiamo", "passate", "passano", "ho passato", "passavo", "passerò", "passerei"),
    ("pensare", "A1", "Riflettere con la mente.", ["agire d'impulso"], "are", "penso", "pensi", "pensa", "pensiamo", "pensate", "pensano", "ho pensato", "pensavo", "penserò", "penserei")
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

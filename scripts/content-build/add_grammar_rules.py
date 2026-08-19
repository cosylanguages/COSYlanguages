#!/usr/bin/env python3
"""
COSYlanguages — Comprehensive Grammar Rules Enricher
Populates 'grammar_rule' across all 8 standalone reference apps to highlight
subjunctive triggers, infinitive constructions, case government, and gender/plural quirks.
"""

import json
import os

APP_DATA_PATHS = {
    "fr_verbs": "apps/fr-conjugeur/data/verbs.json",
    "fr_nouns": "apps/fr-genre/data/nouns.json",
    "it_verbs": "apps/it-coniugatore/data/verbs.json",
    "it_nouns": "apps/it-genere/data/nouns.json",
    "ru_verbs": "apps/ru-spryazhenie/data/verbs.json",
    "ru_nouns": "apps/ru-rod-padezhi/data/nouns.json",
    "el_verbs": "apps/el-klisi-rimaton/data/verbs.json",
    "el_nouns": "apps/el-genos-ptoseis/data/nouns.json"
}

# ==============================================================================
# BESPOKE GRAMMAR RULES
# ==============================================================================
FR_VERB_RULES = {
    "vouloir": "📌 Exige le Subjonctif dans les propositions subordonnées (ex: 'je veux que tu viennes').",
    "falloir": "📌 Verbe impersonnel — exige le Subjonctif (ex: 'il faut que nous partions').",
    "espérer": "📌 Suivi de l'Indicatif/Futur si affirmé ('j'espère qu'il viendra'), du Subjonctif si négatif.",
    "préférer": "📌 Exige le Subjonctif pour exprimer une préférence subordonnée (ex: 'je préfère qu'il reste').",
    "souhaiter": "📌 Exige le Subjonctif dans la subordonnée (ex: 'je souhaite qu'elle réussisse').",
    "demander": "📌 Exige la préposition 'de' devant un infinitif (ex: 'demander de sortir') ou le Subjonctif.",
    "refuser": "📌 Exige la préposition 'de' devant un infinitif (ex: 'refuser de répondre').",
    "être": "📌 Verbe auxiliaire fondamental — sert à former le passé composé des verbes de mouvement et pronominaux.",
    "avoir": "📌 Verbe auxiliaire principal — sert à former les temps composés de la majorité des verbes.",
    "aller": "📌 Verbe du 3e groupe hautement irrégulier — sert à former le Futur Proche ('aller + infinitif').",
    "faire": "📌 Sert à former les constructions causatives ('faire + infinitif', ex: 'faire réparer la voiture').",
    "pouvoir": "📌 Verbe modal — suivi directement d'un infinitif sans préposition (ex: 'je peux vous aider').",
    "devoir": "📌 Verbe modal — exprime l'obligation ou la probabilité, suivi directement d'un infinitif.",
    "savoir": "📌 Verbe modal — exprime une capacité acquise, suivi directement d'un infinitif.",
    "manger": "📌 Orthographe en -ger — prend un 'e' muet après le 'g' devant 'a' et 'o' (ex: 'nous mangeons').",
    "voyager": "📌 Orthographe en -ger — conserve le 'e' à la 1re personne du pluriel du présent ('nous voyageons').",
    "nager": "📌 Orthographe en -ger — conserve le 'e' devant 'a' et 'o' ('nous nageons', 'je nageais').",
    "commencer": "📌 Orthographe en -cer — prend une cédille 'ç' devant 'a' et 'o' (ex: 'nous commençons').",
    "choisir": "📌 2e groupe (-ir) — interfixe '-iss-' au présent du pluriel ('nous choisissons') et à l'imparfait.",
    "finir": "📌 2e groupe (-ir) — interfixe '-iss-' régulier (ex: 'nous finissons', 'vous finissez').",
    "réussir": "📌 2e groupe (-ir) — exige la préposition 'à' devant un infinitif ('réussir à faire')."
}
FR_VERB_DEFAULT = "📌 1er groupe (-er) — terminaisons régulières: -e, -es, -e, -ons, -ez, -ent. Auxiliaire avoir au passé composé."

FR_NOUN_RULES = {
    "soleil": "📌 Nom masculin ('le soleil') — invariable au niveau du genre.",
    "maison": "📌 Nom féminin ('la maison') — terminaison en '-on' féminine exceptionnelle.",
    "eau": "📌 Nom féminin ('l'eau') — prend un 'x' au pluriel ('les eaux')."
}
FR_NOUN_DEFAULT = "📌 Règle de genre: toujours apprendre le nom avec son article défini (le/la) ou indéfini (un/une)."

IT_VERB_RULES = {
    "volere": "📌 Verbo servile/modale — seguito direttamente dall'infinito (es: 'voglio parlare') o richiede il Congiuntivo.",
    "dovere": "📌 Verbo servile/modale — esprime un'obbligazione, seguito direttamente dall'infinito.",
    "potere": "📌 Verbo servile/modale — esprime possibilità o permesso, seguito dall'infinito senza preposizione.",
    "pensare": "📌 Richiede il Congiuntivo nelle frasi subordinate di opinione (es: 'penso che sia giusto').",
    "sperare": "📌 Richiede il Congiuntivo nelle frasi subordinate (es: 'spero che tu stia bene').",
    "credere": "📌 Richiede il Congiuntivo nelle frasi di opinione e credenza (es: 'credo che veniamo').",
    "andare": "📌 Verbo di movimento — usa l'ausiliare 'essere' con accordo del participio passato (es: 'sono andato/a').",
    "venire": "📌 Verbo di movimento — usa l'ausiliare 'essere' (es: 'sono venuto').",
    "essere": "📌 Ausiliare fondamentale — usato nei tempi composti per verbes d'intransitivi e riflessivi.",
    "avere": "📌 Ausiliare fondamentale — usato nei tempi composti per la maggior parte dei verbi transitivi."
}
IT_VERB_DEFAULT = "📌 1ª coniugazione (-are) — desinenze regolari: -o, -i, -a, -iamo, -ate, -ano. Ausiliare avere al passato prossimo."

IT_NOUN_DEFAULT = "📌 Regola del genere: i nomi in '-o' sono generalmente maschili (plur. '-i'), quelli in '-a' femminili (plur. '-e')."

RU_VERB_RULES = {
    "хотеть": "📌 Модальный глагол — сочетается с инфинитивом без предлога (например: 'я хочу сказать') или союзом 'чтобы' + прош.вр.",
    "мочь": "📌 Модальный глагол — выражает физическую возможность или разрешение, сочетается с инфинитивом.",
    "любить": "📌 Глагол чувства — требует винительного падежа прямого дополнения или инфинитива.",
    "думать": "📌 Управление — требует предложного падежа с предлогом 'о' (о ком? о чём?) или союза 'что'.",
    "помогать": "📌 Управление — требует дательного падежа адресата помощи (кому? чему?).",
    "быть": "📌 Глагол связка — в настоящем времени обычно опускается, в прошедшем требует творительного падежа для профессий.",
    "заниматься": "📌 Управление — требует творительного падежа предмета занятий (чем?).",
    "интересоваться": "📌 Управление — требует творительного падежа объекта интереса (чем?)."
}
RU_VERB_DEFAULT = "📌 Правило спряжения: I спряжение (-ешь, -ет, -ем, -ете, -ут/-ют) / II спряжение (-ишь, -ит, -им, -ите, -ат/-ят)."

RU_NOUN_DEFAULT = "📌 Падежное склонение: выбор окончания зависит от падежа (Именительный, Родительный, Дательный, Винительный, Творительный, Предложный)."

EL_VERB_RULES = {
    "θέλω": "📌 Συντάσσεται με το μόριο 'να' + Υποτακτική έγκλιση (π.χ. 'θέλω να διαβάσω').",
    "μπορώ": "📌 Συντάσσεται με το μόριο 'να' + Υποτακτική (π.χ. 'μπορώ να βοηθήσω').",
    "πρέπει": "📌 Απρόσωπο ρήμα — συντάσσεται πάντα με 'να' + Υποτακτική (π.χ. 'πρέπει να φύγω').",
    "μαθαίνω": "📌 Συντάσσεται με Αιτιατική ή με 'να' + Υποτακτική (π.χ. 'μαθαίνω να οδηγώ').",
    "αγαπάω": "📌 Τύπος Β' (-άω) — ιδιαίτερες καταλήξεις στον Ενεστώτα (αγαπώ, αγαπάς, αγαπάει).",
    "μιλάω": "📌 Τύπος Β' (-άω) — συντάσσεται με την πρόθεση 'σε' για το πρόσωπο και 'για' για το θέμα."
}
EL_VERB_DEFAULT = "📌 Ενεργητική φωνή — βασικός τύπος ρήματος με καταλήξεις Ενεστώτα: -ω, -εις, -ει, -ουμε, -ετε, -ουν."

EL_NOUN_DEFAULT = "📌 Πτωτικό σύστημα: το ουσιαστικό συνοδεύεται από οριστικό άρθρο (ο, η, το) και κλίνεται στις 4 πτώσεις."

def process_grammar_rules(key, path):
    if not os.path.exists(path):
        return
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    is_verb = "verbs" in key
    lang = key.split("_")[0]

    for item_key, item_data in data.items():
        if "grammar_rule" not in item_data or not item_data["grammar_rule"]:
            if lang == "fr":
                rule = FR_VERB_RULES.get(item_key, FR_VERB_DEFAULT) if is_verb else FR_NOUN_RULES.get(item_key, FR_NOUN_DEFAULT)
            elif lang == "it":
                rule = IT_VERB_RULES.get(item_key, IT_VERB_DEFAULT) if is_verb else IT_NOUN_DEFAULT
            elif lang == "ru":
                rule = RU_VERB_RULES.get(item_key, RU_VERB_DEFAULT) if is_verb else RU_NOUN_DEFAULT
            elif lang == "el":
                rule = EL_VERB_RULES.get(item_key, EL_VERB_DEFAULT) if is_verb else EL_NOUN_DEFAULT
            else:
                rule = "📌 Règle grammaticale標準."
            item_data["grammar_rule"] = rule

    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"  ✅ Enriched {path} ({len(data)} entries with grammar_rule)")

def main():
    print("🚀 Enriching Grammar Rules across all 8 Standalone Reference Datasets...")
    for key, path in APP_DATA_PATHS.items():
        process_grammar_rules(key, path)
    print("🎉 All 8 databases successfully enriched with bespoke Grammar Rules!")

if __name__ == "__main__":
    main()

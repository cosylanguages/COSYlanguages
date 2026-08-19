#!/usr/bin/env python3
"""
COSYlanguages — Particular & Unique Grammar Rules Enricher
Populates 'grammar_rule' across all 8 standalone reference apps for ONLY items
with specific, unique, or irregular rules (e.g., Subjunctive triggers, modal infinitive constructions,
case government, irregular plurals/stems, gender exceptions).

Does NOT populate generic default rules (such as regular 1st group endings or standard declension patterns).
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
# BESPOKE UNIQUE GRAMMAR RULES (REMEMBER!)
# ==============================================================================
FR_VERB_RULES = {
    "vouloir": "💡 REMEMBER: Exige TOUJOURS le Subjonctif dans les propositions subordonnées quand les sujets sont différents ('je veux que tu viennes').",
    "falloir": "💡 REMEMBER: Verbe impersonnel stictement utilisé à la 3e personne ('il faut'). Exige le Subjonctif ('il faut que nous partions').",
    "pouvoir": "💡 REMEMBER: Verbe modal — suivi directement d'un infinitif SANS préposition ('je peux aider'). Auxiliaire avoir.",
    "devoir": "💡 REMEMBER: Verbe modal — suivi directement d'un infinitif SANS préposition ('je dois partir'). Participe passé 'dû' prend un accent circonflexe au masculin singulier.",
    "savoir": "💡 REMEMBER: Exprime une capacité acquise. Suivi directement d'un infinitif sans préposition ('je sais nager'). Impératif spécial: sache, sachons, sachez.",
    "espérer": "💡 REMEMBER: Suivi de l'Indicatif/Futur si affirmé ('j'espère qu'il viendra'), mais exige le Subjonctif à la forme négative ou interrogative.",
    "préférer": "💡 REMEMBER: Exige le Subjonctif pour exprimer une préférence subordonnée ('je préfère qu'il reste'). Alternance d'accentuation: préférer -> je préfère.",
    "souhaiter": "💡 REMEMBER: Exige le Subjonctif dans la subordonnée quand le sujet change ('je souhaite qu'elle réussisse').",
    "demander": "💡 REMEMBER: Exige la préposition 'de' devant un infinitif ('demander de sortir') ou le Subjonctif ('demander que...').",
    "refuser": "💡 REMEMBER: Exige la préposition 'de' devant un infinitif ('refuser de répondre').",
    "réussir": "💡 REMEMBER: Exige la préposition 'à' devant un infinitif ('réussir à faire').",
    "commencer": "💡 REMEMBER: Orthographe en -cer — prend une cédille 'ç' devant 'a' et 'o' ('nous commençons', 'je commençais').",
    "manger": "💡 REMEMBER: Orthographe en -ger — prend un 'e' muet après le 'g' devant 'a' et 'o' ('nous mangeons', 'il mangeait').",
    "voyager": "💡 REMEMBER: Orthographe en -ger — conserve le 'e' devant 'a' et 'o' ('nous voyageons').",
    "nager": "💡 REMEMBER: Orthographe en -ger — conserve le 'e' devant 'a' et 'o' ('nous nageons').",
    "appeler": "💡 REMEMBER: Double le 'l' devant un 'e' muet ('j'appelle', 'nous appelons').",
    "jeter": "💡 REMEMBER: Double le 't' devant un 'e' muet ('je jette', 'nous jetons').",
    "acheter": "💡 REMEMBER: Change le 'e' muet en 'è' devant une syllabe muette ('j'achète', 'nous achetons').",
    "payer": "💡 REMEMBER: Le 'y' peut se changer en 'i' devant un 'e' muet ('je paie' / 'je paye').",
    "envoyer": "💡 REMEMBER: Futur et Conditionnel très irréguliers: 'j'enverrai', 'j'enverrais' (tronc en 'enverr-').",
    "courir": "💡 REMEMBER: Participe passé 'couru'. Futur et conditionnel à double 'r': 'je courrai', 'je courrais'.",
    "voir": "💡 REMEMBER: Futur et conditionnel à double 'r': 'je verrai'. Subjonctif: 'que je voie', 'que nous voyions'.",
    "mourir": "💡 REMEMBER: Auxiliaire être au passé composé ('il est mort'). Futur: 'je mourrai'. Subjonctif: 'que je meure'.",
    "venir": "💡 REMEMBER: Auxiliaire être au passé composé ('il est venu'). Subjonctif: 'que je vienne', 'que nous venions'.",
    "tenir": "💡 REMEMBER: Mêmes irrégularités que venir ('je tiens', 'nous tenons', 'ils tiennent', 'que je tienne')."
}

FR_NOUN_RULES = {
    "eau": "💡 REMEMBER: Nom féminin ('l'eau') — pluriel irrégulier en '-x' ('les eaux').",
    "jeu": "💡 REMEMBER: Nom masculin ('le jeu') — pluriel en '-x' ('les jeux').",
    "œil": "💡 REMEMBER: Nom masculin — pluriel totalement irrégulier ('les yeux').",
    "travail": "💡 REMEMBER: Nom masculin — pluriel en '-aux' ('les travaux').",
    "journal": "💡 REMEMBER: Nom masculin — pluriel en '-aux' ('les journaux').",
    "animal": "💡 REMEMBER: Nom masculin — pluriel en '-aux' ('les animaux').",
    "monsieur": "💡 REMEMBER: Pluriel très particulier: 'messieurs'.",
    "madame": "💡 REMEMBER: Pluriel très particulier: 'mesdames'.",
    "mademoiselle": "💡 REMEMBER: Pluriel très particulier: 'mesdemoiselles'."
}

IT_VERB_RULES = {
    "volere": "💡 REMEMBER: Verbo servile/modale — seguito direttamente dall'infinito ('voglio andare') o richiede il Congiuntivo se i soggetti differiscono ('voglio che tu venga').",
    "dovere": "💡 REMEMBER: Verbo servile/modale — esprime un'obbligazione, seguito direttamente dall'infinito senza preposizione.",
    "potere": "💡 REMEMBER: Verbo servile/modale — esprime possibilità o permesso, seguito dall'infinito senza preposizione.",
    "pensare": "💡 REMEMBER: Richiede SEMPRE il Congiuntivo nelle frasi subordinate di opinione ('penso che sia giusto').",
    "sperare": "💡 REMEMBER: Richiede SEMPRE il Congiuntivo nelle frasi subordinate ('spero che tu stia bene').",
    "credere": "💡 REMEMBER: Richiede SEMPRE il Congiuntivo nelle frasi di opinione e credenza ('credo che vengano').",
    "andare": "💡 REMEMBER: Verbo di movimento — usa l'ausiliare 'essere' con accordo del participio passato ('sono andato/a'). Presente altamente irregolare: vado, vai, va, andiamo, andate, vanno.",
    "venire": "💡 REMEMBER: Usa l'ausiliare 'essere' ('sono venuto/a'). Presente: vengo, vieni, viene, veniamo, venite, vengono.",
    "uscire": "💡 REMEMBER: Alternanza della radice al presente: esco, esci, esce, usciamo, uscite, escono.",
    "dire": "💡 REMEMBER: Deriva dal latino 'dicere'. Participio passato: 'detto'. Imperativo singolare: 'dall' / 'di''."
}

IT_NOUN_RULES = {
    "uovo": "💡 REMEMBER: Nom maschile al singolare ('l'uovo'), ma FENOMENO SOVRAPPIÙ cambia genere e diventa femminile al plurale ('le uova').",
    "braccio": "💡 REMEMBER: Maschile al singolare ('il braccio'), diventa femminile per le parti del corpo al plurale ('le braccia').",
    "mano": "💡 REMEMBER: Eccezione di genere: termina in '-o' ma è FEMMINILE ('la mano', plurale 'le mani').",
    "problema": "💡 REMEMBER: Eccezione di genere: termina in '-a' (origine greca) ma è MASCHILE ('il problema', plurale 'i problemi').",
    "tema": "💡 REMEMBER: Origine greca: maschile singolare 'il tema', plurale 'i temi'.",
    "programma": "💡 REMEMBER: Origine greca: maschile singolare 'il programma', plurale 'i programmi'.",
    "foto": "💡 REMEMBER: Abbreviazione di 'fotografia' — invariabile al plurale ('la foto', 'le foto').",
    "cinema": "💡 REMEMBER: Invariabile al plurale ('il cinema', 'i cinema')."
}

RU_VERB_RULES = {
    "хотеть": "💡 REMEMBER: Разноспрягаемый глагол! В единственном числе спрягается по I спряжению (хочу, хочешь, хочет), во множественном — по II спряжению (хотим, хотите, хотят).",
    "бежать": "💡 REMEMBER: Разноспрягаемый глагол! бегу, бежишь, бежит, бежим, бежите, НО бегут.",
    "есть": "💡 REMEMBER: Особое архаичное спряжение: ем, ешь, ест, едим, едите, едят.",
    "дать": "💡 REMEMBER: Особое архаичное спряжение: дам, дашь, даст, дадим, дадите, дадут.",
    "хотеться": "💡 REMEMBER: Безличный глагол — употребляется только в 3-м лице или ср. роде с дательным падежом ('мне хочется').",
    "быть": "💡 REMEMBER: В настоящем времени форма 'есть' используется редко. В прошедшем времени требует Творительного падежа для профессий ('был врачом').",
    "писать": "💡 REMEMBER: Чередование согласных с/ш во всех формах настоящего времени (пишу, пишешь... пишут).",
    "любить": "💡 REMEMBER: Чередование б/бл в 1-м лице ед.ч. (люблю, любишь, любят).",
    "видеть": "💡 REMEMBER: Глагол-исключение II спряжения на -еть (вижу, видишь, видят).",
    "смотреть": "💡 REMEMBER: Глагол-исключение II спряжения на -еть (смотрю, смотришь, смотрят)."
}

RU_NOUN_RULES = {
    "имя": "💡 REMEMBER: Разносклоняемое существительное на -мя! В косвенных падежах появляется суффикс -ен- (имени, именем, имена).",
    "время": "💡 REMEMBER: Разносклоняемое существительное на -мя! В косвенных падежах суффикс -ен- (времени, временем, времена).",
    "дитя": "💡 REMEMBER: Разносклоняемое существительное с особыми формами во множественном числе ('дети', 'детей').",
    "мать": "💡 REMEMBER: Существительное III склонения с наращением -ер- во всех падежах кроме Им./Вин. (матери, матерью, матери).",
    "дочь": "💡 REMEMBER: Существительное III склонения с наращением -ер- во всех падежах кроме Им./Вин. (дочери, дочерью, дочери).",
    "человек": "💡 REMEMBER: Во множественном числе используется супплетивная форма 'люди' (людей, людям).",
    "ребёнок": "💡 REMEMBER: Во множественном числе супплетивная форма 'дети' (детей, детям).",
    "пальто": "💡 REMEMBER: Несклоняемое существительное среднего рода (не меняет окончания по падежам).",
    "метро": "💡 REMEMBER: Несклоняемое существительное среднего рода.",
    "кофе": "💡 REMEMBER: Мужской род! ('горячий кофе'), хотя оканчивается на -е. Не склоняется.",
    "путь": "💡 REMEMBER: Существительное мужского рода, но склоняется как существительное III склонения женского рода (пути, путём)."
}

EL_VERB_RULES = {
    "θέλω": "💡 REMEMBER: Συντάσσεται υποχρεωτικά με το μόριο 'να' + Υποτακτική όταν ακολουθεί άλλο ρήμα ('θέλω να πάω').",
    "μπορώ": "💡 REMEMBER: Συντάσσεται πάντα με 'να' + Υποτακτική ('μπορώ να βοηθήσω').",
    "πρέπει": "💡 REMEMBER: Απρόσωπο ρήμα — χρησιμοποιείται μόνο στο 3ο πρόσωπο με 'να' + Υποτακτική ('πρέπει να φύγω').",
    "είμαι": "💡 REMEMBER: Βοηθητικό ρήμα — δεν έχει ενεργητικές καταλήξεις, χρησιμοποιεί αποθετικές καταλήξεις στον Ενεστώτα (είμαι, είσαι, είναι, είμαστε, είστε, είναι).",
    "έχω": "💡 REMEMBER: Χρησιμοποιείται ως βοηθητικό για τον Παρακείμενο ('έχω διαβάσει')."
}

EL_NOUN_RULES = {
    "паππούς": "💡 REMEMBER: Оυσιαστικό με ιδιαίτερες καταλήξεις πληθυντικού ('παππούδες').",
    "spiti": "💡 REMEMBER: Ουδέτερο σε -ι — διατηρεί την κατάληξη -ια στον πληθυντικό ('σπίτια')."
}

def process_grammar_rules(key, path):
    if not os.path.exists(path):
        return
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    is_verb = "verbs" in key
    lang = key.split("_")[0]

    count = 0
    for item_key, item_data in data.items():
        rule = None
        if lang == "fr":
            rule = FR_VERB_RULES.get(item_key) if is_verb else FR_NOUN_RULES.get(item_key)
        elif lang == "it":
            rule = IT_VERB_RULES.get(item_key) if is_verb else IT_NOUN_RULES.get(item_key)
        elif lang == "ru":
            rule = RU_VERB_RULES.get(item_key) if is_verb else RU_NOUN_RULES.get(item_key)
        elif lang == "el":
            rule = EL_VERB_RULES.get(item_key) if is_verb else EL_NOUN_RULES.get(item_key)

        if rule:
            item_data["grammar_rule"] = rule
            count += 1
        else:
            # Remove or clear generic rule if present
            if "grammar_rule" in item_data:
                del item_data["grammar_rule"]

    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"  ✅ Enriched {path} ({count} items given unique grammar_rule, rest left clean)")

def main():
    print("🚀 Populating ONLY Particular/Unique Grammar Rules across all 8 Standalone Reference Datasets...")
    for key, path in APP_DATA_PATHS.items():
        process_grammar_rules(key, path)
    print("🎉 Done! Only unique REMEMBER rules are populated.")

if __name__ == "__main__":
    main()

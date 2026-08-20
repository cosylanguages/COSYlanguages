import json

def audit_french():
    with open('apps/fr-conjugeur/data/verbs.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    verbs = list(data.values()) if isinstance(data, dict) else data
    print(f"--- Auditing French ({len(verbs)} verbs) ---")

    issues = []
    for v in verbs:
        infinitive = v.get('infinitive') or v.get('verb')
        if not infinitive:
            continue

        # Check pc / pc_etre
        pc = v['tenses'].get('pc')
        if pc:
            participle = pc['1s'].split()[-1]
            if infinitive in ['boire'] and participle != 'bu':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'bu'")
            if infinitive in ['faire'] and participle != 'fait':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'fait'")
            if infinitive in ['voir'] and participle != 'vu':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'vu'")
            if infinitive in ['prendre'] and participle != 'pris':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'pris'")
            if infinitive in ['comprendre'] and participle != 'compris':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'compris'")
            if infinitive in ['apprendre'] and participle != 'appris':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'appris'")
            if infinitive in ['pouvoir'] and participle != 'pu':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'pu'")
            if infinitive in ['vouloir'] and participle != 'voulu':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'voulu'")
            if infinitive in ['savoir'] and participle != 'su':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'su'")
            if infinitive in ['devoir'] and participle != 'dû':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'dû'")
            if infinitive in ['recevoir'] and participle != 'reçu':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'reçu'")
            if infinitive in ['mettre'] and participle != 'mis':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'mis'")
            if infinitive in ['dire'] and participle != 'dit':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'dit'")
            if infinitive in ['écrire'] and participle != 'écrit':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'écrit'")
            if infinitive in ['lire'] and participle != 'lu':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'lu'")
            if infinitive in ['connaître'] and participle != 'connu':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'connu'")
            if infinitive in ['vivre'] and participle != 'vécu':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'vécu'")
            if infinitive in ['ouvrir'] and participle != 'ouvert':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'ouvert'")
            if infinitive in ['offrir'] and participle != 'offert':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'offert'")
            if infinitive in ['découvrir'] and participle != 'découvert':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'découvert'")
            if infinitive in ['courir'] and participle != 'couru':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'couru'")
            if infinitive in ['tenir'] and participle != 'tenu':
                issues.append(f"French {infinitive}: pc participle is '{participle}', expected 'tenu'")

        # Subjunctive stems check
        subj = v['tenses'].get('subj')
        if subj:
            if infinitive == 'être' and not subj['1s'].startswith('sois'):
                issues.append(f"French être subj 1s: {subj['1s']}")
            if infinitive == 'avoir' and not subj['1s'].startswith('aie'):
                issues.append(f"French avoir subj 1s: {subj['1s']}")
            if infinitive == 'faire' and not subj['1s'].startswith('fasse'):
                issues.append(f"French faire subj 1s: {subj['1s']}")
            if infinitive == 'pouvoir' and not subj['1s'].startswith('puisse'):
                issues.append(f"French pouvoir subj 1s: {subj['1s']}")
            if infinitive == 'savoir' and not subj['1s'].startswith('sache'):
                issues.append(f"French savoir subj 1s: {subj['1s']}")
            if infinitive == 'aller' and not subj['1s'].startswith('aille'):
                issues.append(f"French aller subj 1s: {subj['1s']}")
            if infinitive == 'vouloir' and not subj['1s'].startswith('veuille'):
                issues.append(f"French vouloir subj 1s: {subj['1s']}")
            if infinitive == 'valoir' and not subj['1s'].startswith('vaille'):
                issues.append(f"French valoir subj 1s: {subj['1s']}")

        # Conditional stems check
        cond = v['tenses'].get('cond')
        if cond:
            if infinitive == 'être' and not cond['1s'].endswith('serais'):
                issues.append(f"French être cond 1s: {cond['1s']}")
            if infinitive == 'avoir' and not cond['1s'].endswith('aurais'):
                issues.append(f"French avoir cond 1s: {cond['1s']}")
            if infinitive == 'aller' and not cond['1s'].endswith('irais'):
                issues.append(f"French aller cond 1s: {cond['1s']}")
            if infinitive == 'faire' and not cond['1s'].endswith('ferais'):
                issues.append(f"French faire cond 1s: {cond['1s']}")
            if infinitive == 'pouvoir' and not cond['1s'].endswith('pourrais'):
                issues.append(f"French pouvoir cond 1s: {cond['1s']}")
            if infinitive == 'savoir' and not cond['1s'].endswith('saurais'):
                issues.append(f"French savoir cond 1s: {cond['1s']}")
            if infinitive == 'voir' and not cond['1s'].endswith('verrais'):
                issues.append(f"French voir cond 1s: {cond['1s']}")
            if infinitive == 'envoyer' and not cond['1s'].endswith('enverrais'):
                issues.append(f"French envoyer cond 1s: {cond['1s']}")
            if infinitive == 'venir' and not cond['1s'].endswith('viendrais'):
                issues.append(f"French venir cond 1s: {cond['1s']}")
            if infinitive == 'vouloir' and not cond['1s'].endswith('voudrais'):
                issues.append(f"French vouloir cond 1s: {cond['1s']}")
            if infinitive == 'devoir' and not cond['1s'].endswith('devrais'):
                issues.append(f"French devoir cond 1s: {cond['1s']}")
            if infinitive == 'recevoir' and not cond['1s'].endswith('recevrais'):
                issues.append(f"French recevoir cond 1s: {cond['1s']}")
            if infinitive == 'falloir' and not cond['3s'].endswith('faudrait'):
                issues.append(f"French falloir cond 3s: {cond['3s']}")

    print(f"French audit issues count: {len(issues)}")
    for issue in issues:
        print("  -", issue)

def audit_italian():
    with open('apps/it-coniugatore/data/verbs.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    verbs = list(data.values()) if isinstance(data, dict) else data
    print(f"\n--- Auditing Italian ({len(verbs)} verbs) ---")

    issues = []
    for v in verbs:
        infinitive = v.get('infinitive') or v.get('verb')
        if not infinitive:
            continue

        pc = v['tenses'].get('pc')
        if pc:
            participle = pc['1s'].split()[-1]
            auxiliary = pc['1s'].split()[0]

            essere_verbs = ['andare', 'venire', 'arrivare', 'partire', 'uscire', 'entrare', 'tornare', 'stare', 'essere', 'nascere', 'morire', 'salire', 'scendere', 'cadere', 'diventare', 'rimanere']
            if infinitive in essere_verbs and auxiliary != 'sono':
                issues.append(f"Italian {infinitive}: pc aux is '{auxiliary}', expected 'sono'")

            if infinitive == 'fare' and participle != 'fatto':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'fatto'")
            if infinitive == 'dire' and participle != 'detto':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'detto'")
            if infinitive == 'leggere' and participle != 'letto':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'letto'")
            if infinitive == 'scrivere' and participle != 'scritto':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'scritto'")
            if infinitive == 'prendere' and participle != 'preso':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'preso'")
            if infinitive == 'vedere' and participle != 'visto':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'visto'")
            if infinitive == 'aprire' and participle != 'aperto':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'aperto'")
            if infinitive == 'offrire' and participle != 'offerto':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'offerto'")
            if infinitive == 'chiudere' and participle != 'chiuso':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'chiuso'")
            if infinitive == 'rispondere' and participle != 'risposto':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'risposto'")
            if infinitive == 'chiedere' and participle != 'chiesto':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'chiesto'")
            if infinitive == 'mettere' and participle != 'messo':
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'messo'")
            if infinitive == 'rimanere' and participle not in ['rimasto', 'rimasta']:
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'rimasto'")
            if infinitive == 'nascere' and participle not in ['nato', 'nata']:
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'nato'")
            if infinitive == 'morire' and participle not in ['morto', 'morta']:
                issues.append(f"Italian {infinitive}: pc participle is '{participle}', expected 'morto'")

        subj = v['tenses'].get('subj')
        if subj:
            if infinitive == 'essere' and not subj['1s'].startswith('sia'):
                issues.append(f"Italian essere subj 1s: {subj['1s']}")
            if infinitive == 'avere' and not subj['1s'].startswith('abbia'):
                issues.append(f"Italian avere subj 1s: {subj['1s']}")
            if infinitive == 'fare' and not subj['1s'].startswith('faccia'):
                issues.append(f"Italian fare subj 1s: {subj['1s']}")
            if infinitive == 'dire' and not subj['1s'].startswith('dica'):
                issues.append(f"Italian dire subj 1s: {subj['1s']}")
            if infinitive == 'andare' and not subj['1s'].startswith('vada'):
                issues.append(f"Italian andare subj 1s: {subj['1s']}")
            if infinitive == 'venire' and not subj['1s'].startswith('venga'):
                issues.append(f"Italian venire subj 1s: {subj['1s']}")

        cond = v['tenses'].get('cond')
        if cond:
            if infinitive == 'essere' and not cond['1s'].endswith('sarei'):
                issues.append(f"Italian essere cond 1s: {cond['1s']}")
            if infinitive == 'avere' and not cond['1s'].endswith('avrei'):
                issues.append(f"Italian avere cond 1s: {cond['1s']}")
            if infinitive == 'andare' and not cond['1s'].endswith('andrei'):
                issues.append(f"Italian andare cond 1s: {cond['1s']}")
            if infinitive == 'dovere' and not cond['1s'].endswith('dovrei'):
                issues.append(f"Italian dovere cond 1s: {cond['1s']}")
            if infinitive == 'potere' and not cond['1s'].endswith('potrei'):
                issues.append(f"Italian potere cond 1s: {cond['1s']}")
            if infinitive == 'volere' and not cond['1s'].endswith('vorrei'):
                issues.append(f"Italian volere cond 1s: {cond['1s']}")
            if infinitive == 'vedere' and not cond['1s'].endswith('vedrei'):
                issues.append(f"Italian vedere cond 1s: {cond['1s']}")
            if infinitive == 'sapere' and not cond['1s'].endswith('saprei'):
                issues.append(f"Italian sapere cond 1s: {cond['1s']}")
            if infinitive == 'venire' and not cond['1s'].endswith('verrei'):
                issues.append(f"Italian venire cond 1s: {cond['1s']}")
            if infinitive == 'rimanere' and not cond['1s'].endswith('rimarrei'):
                issues.append(f"Italian rimanere cond 1s: {cond['1s']}")

    print(f"Italian audit issues count: {len(issues)}")
    for issue in issues:
        print("  -", issue)

def audit_russian():
    with open('apps/ru-spryazhenie/data/verbs.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    verbs = list(data.values()) if isinstance(data, dict) else data
    print(f"\n--- Auditing Russian ({len(verbs)} verbs) ---")

    issues = []
    for v in verbs:
        infinitive = v.get('infinitive') or v.get('verb')
        if not infinitive:
            continue

        cond = v['tenses'].get('cond')
        if cond:
            for k, val in cond.items():
                if 'бы' not in val:
                    issues.append(f"Russian {infinitive} cond {k} missing 'бы': {val}")

    print(f"Russian audit issues count: {len(issues)}")
    for issue in issues:
        print("  -", issue)

def audit_greek():
    with open('apps/el-klisi-rimaton/data/verbs.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    verbs = list(data.values()) if isinstance(data, dict) else data
    print(f"\n--- Auditing Greek ({len(verbs)} verbs) ---")

    issues = []
    for v in verbs:
        infinitive = v.get('infinitive') or v.get('verb')
        if not infinitive:
            continue

        subj = v['tenses'].get('subj')
        if subj:
            if not subj['1s'].startswith('να '):
                issues.append(f"Greek {infinitive} subj 1s missing 'να ': {subj['1s']}")

        cond = v['tenses'].get('cond')
        if cond:
            if not cond['1s'].startswith('θα '):
                issues.append(f"Greek {infinitive} cond 1s missing 'θα ': {cond['1s']}")

        parak = v['tenses'].get('parak')
        if parak:
            if not parak['1s'].startswith('έχω '):
                issues.append(f"Greek {infinitive} parak 1s missing 'έχω ': {parak['1s']}")

    print(f"Greek audit issues count: {len(issues)}")
    for issue in issues:
        print("  -", issue)

if __name__ == '__main__':
    audit_french()
    audit_italian()
    audit_russian()
    audit_greek()

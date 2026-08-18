import json

def clean_french_verbs():
    path = "apps/fr-conjugeur/data/verbs.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    clean_data = {}
    for verb, info in data.items():
        # skip broken or corrupted entries
        if "êtree" in str(info) or "avoire" in str(info) or "regalado" in str(info) or "me me me" in str(info):
            continue

        # fix specific verb tenses if they have typos
        tenses = info.get("tenses", {})
        for t_name, forms in tenses.items():
            if isinstance(forms, list):
                new_forms = []
                for form in forms:
                    # remove corrupted pronoun additions
                    form = form.replace("tu me appelles", "tu appelles").replace("vous me appelez", "vous me appelez").replace("nous me mangeons", "nous mangeons")
                    form = form.replace("je me me ", "je ").replace("tu me ", "tu ").replace("il/elle me ", "il/elle ")
                    form = form.replace("vous me ", "vous ").replace("ils/elles me ", "ils/elles ")
                    form = form.replace("voyaggeons", "voyageons").replace("partaggeons", "partageons")
                    new_forms.append(form)
                tenses[t_name] = new_forms
        info["tenses"] = tenses
        clean_data[verb] = info

    with open(path, "w", encoding="utf-8") as f:
        json.dump(clean_data, f, ensure_ascii=False, indent=2)
    print(f"Cleaned {path}: {len(clean_data)} verbs remaining.")

def clean_russian_verbs():
    path = "apps/ru-spryazhenie/data/verbs.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    clean_data = {}
    for verb, info in data.items():
        if "budu" in str(info) or "шёла" in str(info) or "росаa" in str(info) or "являлсяа" in str(info):
            continue

        # ensure accurate future tense pronouns
        tenses = info.get("tenses", {})
        if "fut" in tenses and isinstance(tenses["fut"], list):
            inf_word = verb
            tenses["fut"] = [
                f"я буду {inf_word}",
                f"ты будешь {inf_word}",
                f"он/она будет {inf_word}",
                f"мы будем {inf_word}",
                f"вы будете {inf_word}",
                f"они будут {inf_word}"
            ]
        info["tenses"] = tenses
        clean_data[verb] = info

    with open(path, "w", encoding="utf-8") as f:
        json.dump(clean_data, f, ensure_ascii=False, indent=2)
    print(f"Cleaned {path}: {len(clean_data)} verbs remaining.")

def clean_italian_verbs():
    path = "apps/it-coniugatore/data/verbs.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    clean_data = {}
    for verb, info in data.items():
        if "dormato" in str(info) or "dimituisci" in str(info):
            continue
        clean_data[verb] = info

    with open(path, "w", encoding="utf-8") as f:
        json.dump(clean_data, f, ensure_ascii=False, indent=2)
    print(f"Cleaned {path}: {len(clean_data)} verbs remaining.")

if __name__ == "__main__":
    clean_french_verbs()
    clean_russian_verbs()
    clean_italian_verbs()

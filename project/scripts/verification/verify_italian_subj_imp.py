import json

def verify():
    file_path = "apps/it-coniugatore/data/verbs.json"
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    expected = {
        "essere": ["fossi","fossi","fosse","fossimo","foste","fossero"],
        "fare": ["facessi","facessi","facesse","facessimo","faceste","facessero"],
        "dire": ["dicessi","dicessi","dicesse","dicessimo","diceste","dicessero"],
        "dare": ["dessi","dessi","desse","dessimo","deste","dessero"],
        "stare": ["stessi","stessi","stesse","stessimo","steste","stessero"],
        "bere": ["bevessi","bevessi","bevesse","bevessimo","beveste","bevessero"]
    }

    for verb, expected_arr in expected.items():
        assert verb in data, f"Verb {verb} missing"
        actual_arr = data[verb]["tenses"]["subj_imp"]
        assert actual_arr == expected_arr, f"Mismatch for {verb}: expected {expected_arr}, got {actual_arr}"

    print("🎉 Verification SUCCESS! All 6 verbs' imperfect subjunctive (subj_imp) arrays match expected values exactly.")

if __name__ == "__main__":
    verify()

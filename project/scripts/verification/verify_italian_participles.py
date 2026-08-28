import json

def verify():
    file_path = "apps/it-coniugatore/data/verbs.json"
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    expected_part_fixes = {
        "piacere": ["piacente", "piaciuto"],
        "rompere": ["rompente", "rotto"],
        "scoprire": ["scoprente", "scoperto"],
        "comprendere": ["comprendente", "compreso"],
        "decidere": ["decidente", "deciso"],
        "raccogliere": ["raccogliente", "raccolto"],
        "raggiungere": ["raggiungente", "raggiunto"],
        "ricevere": ["ricevente", "ricevuto"],
        "ripetere": ["ripetente", "ripetuto"],
        "scegliere": ["scegliente", "scelto"],
        "uccidere": ["uccidente", "ucciso"],
        "appartenere": ["appartenente", "appartenuto"],
        "preferire": ["preferente", "preferito"],
        "discutere": ["discutendo", "discusso"]
    }

    for verb, expected_part in expected_part_fixes.items():
        assert verb in data, f"Verb {verb} missing from JSON"
        actual_part = data[verb]["tenses"]["part"]
        assert actual_part == expected_part, f"Participle mismatch for {verb}: expected {expected_part}, got {actual_part}"

    # Verify piacere
    piacere_tenses = data["piacere"]["tenses"]
    expected_pc = ["sono piaciuto", "sei piaciuto", "è piaciuto", "siamo piaciuti", "siete piaciuti", "sono piaciuti"]
    expected_pass_comp = ["io sono piaciuto", "tu sei piaciuto", "lui/lei è piaciuto", "noi siamo piaciuti", "voi siete piaciuti", "loro sono piaciuti"]

    assert piacere_tenses["pc"] == expected_pc, f"piacere pc mismatch: {piacere_tenses['pc']}"
    assert piacere_tenses["pass_comp"] == expected_pass_comp, f"piacere pass_comp mismatch: {piacere_tenses['pass_comp']}"

    print("🎉 Verification SUCCESS! All 14 verb participles and piacere aux/pc forms match expected values exactly.")

if __name__ == "__main__":
    verify()

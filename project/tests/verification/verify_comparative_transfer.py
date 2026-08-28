import json
import os

def test_comparative_transfer():
    notes_path = 'comparative/data/transfer-notes.json'
    inventory_path = 'comparative/data/grammar-inventory.json'

    assert os.path.exists(notes_path), "transfer-notes.json missing"
    assert os.path.exists(inventory_path), "grammar-inventory.json missing"

    with open(notes_path, 'r', encoding='utf-8') as f:
        notes = json.load(f)

    with open(inventory_path, 'r', encoding='utf-8') as f:
        inventory = json.load(f)

    assert len(notes) > 0, "transfer notes dataset is empty"
    assert len(inventory) > 0, "grammar inventory dataset is empty"

    # Test es -> it transfer notes matching
    es_it_notes = [n for n in notes if (n['known_language'] == 'es' and n['target_language'] == 'it') or (n['known_language'] == 'it' and n['target_language'] == 'es')]
    assert len(es_it_notes) > 0, "No transfer notes found for ES <-> IT"

    # Test feature overlap
    es_it_features = [f for f in inventory if 'es' in f.get('languages', []) and 'it' in f.get('languages', [])]
    assert len(es_it_features) > 0, "No overlapping features found for ES & IT"

    print("Comparative transfer datasets verification passed successfully!")

if __name__ == '__main__':
    test_comparative_transfer()

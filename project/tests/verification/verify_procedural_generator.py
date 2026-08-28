import re

def verify_procedural_generator():
    with open('practice/types/vocabulary/vocabulary.js', 'r', encoding='utf-8') as f:
        vocab_code = f.read()

    with open('js/core/engine.js', 'r', encoding='utf-8') as f:
        engine_code = f.read()

    assert 'buildProceduralMorphologyDrills' in vocab_code, "buildProceduralMorphologyDrills missing"
    assert 'proceduralDrills' in vocab_code, "proceduralDrills mixing logic missing"
    assert 'reference-grammar/${langLow}/morphology/' in engine_code, "Morphology path fix missing in engine.js"

    print("Procedural generator verification passed successfully!")

if __name__ == '__main__':
    verify_procedural_generator()

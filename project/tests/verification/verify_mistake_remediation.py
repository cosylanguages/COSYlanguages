import re

def verify_mistake_remediation_code():
    with open('practice/_engine/core.js', 'r', encoding='utf-8') as f:
        core_code = f.read()

    with open('practice/hub.js', 'r', encoding='utf-8') as f:
        hub_code = f.read()

    # Check practice/_engine/core.js
    assert 'recordCorrectAnswer' in core_code, "recordCorrectAnswer missing in core.js"
    assert 'consecutiveCorrect' in core_code, "consecutiveCorrect field missing in core.js"
    assert 'consecutiveCorrect >= 3' in core_code, "Mastery threshold removal logic missing in core.js"
    assert 'recordCorrectAnswer(q)' in core_code, "recordCorrectAnswer invocation missing in answer handlers"

    # Check practice/hub.js
    assert 'startMistakeReview(filterLang)' in hub_code, "startMistakeReview signature missing filterLang"
    assert 'langFiltered' in hub_code, "Language filtering missing in startMistakeReview"
    assert 'formType' in hub_code, "Multi-format exercise reconstruction missing in startMistakeReview"

    print("Mistake remediation verification passed successfully!")

if __name__ == '__main__':
    verify_mistake_remediation_code()

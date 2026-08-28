import re
import sys

def verify_renderer_changes():
    with open('practice/_engine/renderers.js', 'r', encoding='utf-8') as f:
        content = f.read()

    assert 'getFreeAppInfo' in content, "getFreeAppInfo function missing"
    assert 'apps/en-verb-prep/index.html' in content, "EN verb prep app missing"
    assert 'apps/fr-conjugeur/index.html' in content, "FR conjugeur app missing"
    assert 'apps/fr-genre/index.html' in content, "FR genre app missing"
    assert 'apps/it-coniugatore/index.html' in content, "IT coniugatore app missing"
    assert 'apps/it-genere/index.html' in content, "IT genere app missing"
    assert 'apps/ru-spryazhenie/index.html' in content, "RU spryazhenie app missing"
    assert 'apps/ru-rod-padezhi/index.html' in content, "RU rod-padezhi app missing"
    assert 'apps/el-klisi-rimaton/index.html' in content, "EL klisi app missing"
    assert 'apps/el-genos-ptoseis/index.html' in content, "EL genos-ptoseis app missing"

    assert 'pe-rule-hint-box' in content, "Rule hint box element missing"
    assert 'cosy_paid_learner' in content, "Paid learner check missing"

    print("Renderer verification passed successfully!")

if __name__ == '__main__':
    verify_renderer_changes()

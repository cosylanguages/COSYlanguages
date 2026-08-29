# Audit des liens de pratique (`practice_links`) dans la grammaire JSON — [RÉSOLU]

Ce rapport recense l'ensemble des entrées JSON de grammaire de référence (`reference-grammar/en/` et `reference-grammar/fr/`) contenant un champ `practice_links` qui a été mis à jour et corrigé vers la structure canonique (`manuals/en/grammar/a1/topics/*.html` pour l'anglais, `grammaire-francaise/topics/*.html` pour le français).

**Statut :** All broken paths resolved and verified (100% valid links across all JSON files).

| fichier JSON | id de l'entrée | practice_link initial (ancien) | lien canonique corrigé | Statut |
| --- | --- | --- | --- | --- |
| `reference-grammar/en/morphology/determiners.json` | `articles` | `grammar/en-articles.html` | `manuals/en/grammar/a1/topics/articles.html` | ✅ Corrigé |
| `reference-grammar/en/morphology/nouns.json` | `plurals` | `grammar/en-plurals.html` | `manuals/en/grammar/a1/topics/plurals-regular.html`<br>`manuals/en/grammar/a1/topics/plurals-irregular.html` | ✅ Corrigé |
| `reference-grammar/en/morphology/pronouns.json` | `personal_pronouns` | `grammar/en-pronouns.html` | `manuals/en/grammar/a1/topics/pronouns.html` | ✅ Corrigé |
| `reference-grammar/en/morphology/pronouns.json` | `possessive_adjectives` | `grammar/en-possessives.html` | `manuals/en/grammar/a1/topics/possessive-s.html` | ✅ Corrigé |
| `reference-grammar/en/morphology/verbs.json` | `be_present_simple` | `grammar/en-be.html` | `manuals/en/grammar/a1/topics/to-be.html` | ✅ Corrigé |
| `reference-grammar/en/morphology/verbs.json` | `present_simple` | `grammar/en-present-simple.html` | `manuals/en/grammar/a1/topics/present-simple.html` | ✅ Corrigé |
| `reference-grammar/en/morphology/verbs.json` | `past_simple` | `grammar/en-past-simple.html` | `manuals/en/grammar/a1/topics/past-simple-regular.html`<br>`manuals/en/grammar/a1/topics/past-simple-irregular.html` | ✅ Corrigé |
| `reference-grammar/en/morphology/verbs.json` | `future_going_to` | `grammar/en-future-going-to.html` | `manuals/en/grammar/a1/topics/going-to.html` | ✅ Corrigé |
| `reference-grammar/en/syntax/word_order.json` | `word_order_svo` | `grammar/en-word-order.html` | `manuals/en/grammar/a1/topics/word-order.html` | ✅ Corrigé |
| `reference-grammar/en/syntax/word_order.json` | `there_is_are` | `grammar/en-there-is.html` | `manuals/en/grammar/a1/topics/there-is-are.html` | ✅ Corrigé |
| `reference-grammar/fr/morphology/determiners.json` | `articles_definis_indefinis` | `grammar/fr-articles.html` | `grammaire-francaise/topics/articles.html` | ✅ Corrigé |
| `reference-grammar/fr/morphology/determiners.json` | `articles_partitifs` | `grammar/fr-articles-partitifs.html` | `grammaire-francaise/topics/articles-partitifs.html` | ✅ Corrigé |
| `reference-grammar/fr/morphology/pronouns.json` | `pronoms_sujets` | `grammar/fr-pronoms.html` | `grammaire-francaise/topics/les-pronoms.html` | ✅ Corrigé |
| `reference-grammar/fr/morphology/verbs.json` | `etre` | `grammar/fr-etre.html` | `grammaire-francaise/topics/etre.html` | ✅ Corrigé |
| `reference-grammar/fr/morphology/verbs.json` | `avoir` | `grammar/fr-avoir.html` | `grammaire-francaise/topics/avoir.html` | ✅ Corrigé |
| `reference-grammar/fr/morphology/verbs.json` | `verbes_er` | `grammar/fr-verbes-er.html` | `grammaire-francaise/topics/verbes-er.html` | ✅ Corrigé |
| `reference-grammar/fr/syntax/sentence_types.json` | `negation` | `grammar/fr-negation.html` | `grammaire-francaise/topics/negation.html` | ✅ Corrigé |

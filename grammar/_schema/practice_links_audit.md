# Audit des liens de pratique (`practice_links`) dans la grammaire JSON

Ce rapport recense l'ensemble des entrées JSON contenant un champ `practice_links` cassé dans les modules de morphologie et de syntaxe. Pour chaque entrée, la meilleure correspondance dans le manuel riche (`grammar/topics/*.html` pour l'anglais, `grammaire-francaise/topics/*.html` pour le français) est proposée, ainsi que l'alternative du système léger (`grammar/{lang}/morphology/` ou `grammar/{lang}/syntax/`).

| fichier JSON | id de l'entrée | practice_link actuel (cassé) | meilleure correspondance trouvée |
| --- | --- | --- | --- |
| `grammar/en/morphology/determiners.json` | `articles` | `grammar/en-articles.html` | `grammar/topics/articles.html` *(Système léger : `grammar/en/morphology/en-articles.html`)* |
| `grammar/en/morphology/nouns.json` | `plurals` | `grammar/en-plurals.html` | AUCUNE CORRESPONDANCE TROUVÉE *(Système léger : `grammar/en/morphology/en-plurals.html`)* |
| `grammar/en/morphology/pronouns.json` | `personal_pronouns` | `grammar/en-pronouns.html` | `grammar/topics/pronouns.html` *(Système léger : `grammar/en/morphology/en-pronouns.html`)* |
| `grammar/en/morphology/pronouns.json` | `possessive_adjectives` | `grammar/en-possessives.html` | AUCUNE CORRESPONDANCE TROUVÉE *(Système léger : `grammar/en/morphology/en-possessives.html`)* |
| `grammar/en/morphology/verbs.json` | `be_present_simple` | `grammar/en-be.html` | `grammar/topics/to-be.html` *(Système léger : `grammar/en/morphology/en-be.html`)* |
| `grammar/en/morphology/verbs.json` | `present_simple` | `grammar/en-present-simple.html` | `grammar/topics/present-simple.html` *(Système léger : `grammar/en/morphology/en-present-simple.html`)* |
| `grammar/en/morphology/verbs.json` | `past_simple` | `grammar/en-past-simple.html` | AUCUNE CORRESPONDANCE TROUVÉE *(Système léger : `grammar/en/morphology/en-past-simple.html`)* |
| `grammar/en/morphology/verbs.json` | `future_going_to` | `grammar/en-future-going-to.html` | `grammar/topics/going-to.html` *(Système léger : `grammar/en/morphology/en-future-going-to.html`)* |
| `grammar/en/syntax/word_order.json` | `word_order_svo` | `grammar/en-word-order.html` | `grammar/topics/word-order.html` *(Système léger : `grammar/en/syntax/en-word-order.html`)* |
| `grammar/en/syntax/word_order.json` | `there_is_are` | `grammar/en-there-is.html` | `grammar/topics/there-is-are.html` *(Système léger : `grammar/en/syntax/en-there-is.html`)* |
| `grammar/fr/morphology/determiners.json` | `articles_definis_indefinis` | `grammar/fr-articles.html` | `grammaire-francaise/topics/articles.html` *(Système léger : `grammar/fr/morphology/fr-articles.html`)* |
| `grammar/fr/morphology/determiners.json` | `articles_partitifs` | `grammar/fr-articles-partitifs.html` | `grammaire-francaise/topics/articles-partitifs.html` *(Système léger : `grammar/fr/morphology/fr-articles-partitifs.html`)* |
| `grammar/fr/morphology/pronouns.json` | `pronoms_sujets` | `grammar/fr-pronoms.html` | `grammaire-francaise/topics/les-pronoms.html` *(Système léger : `grammar/fr/morphology/fr-pronoms.html`)* |
| `grammar/fr/morphology/verbs.json` | `etre` | `grammar/fr-etre.html` | `grammaire-francaise/topics/etre.html` *(Système léger : `grammar/fr/morphology/fr-etre.html`)* |
| `grammar/fr/morphology/verbs.json` | `avoir` | `grammar/fr-avoir.html` | `grammaire-francaise/topics/avoir.html` *(Système léger : `grammar/fr/morphology/fr-avoir.html`)* |
| `grammar/fr/morphology/verbs.json` | `verbes_er` | `grammar/fr-verbes-er.html` | `grammaire-francaise/topics/verbes-er.html` *(Système léger : `grammar/fr/morphology/fr-verbes-er.html`)* |
| `grammar/fr/syntax/sentence_types.json` | `negation` | `grammar/fr-negation.html` | `grammaire-francaise/topics/negation.html` *(Système léger : `grammar/fr/syntax/fr-negation.html`)* |

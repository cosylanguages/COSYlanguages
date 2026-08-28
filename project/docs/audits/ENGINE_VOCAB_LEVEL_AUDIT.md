# Standalone Engine Apps vs. Vocabulary Data Level Audit Report

This audit compares the word entries and CEFR level assignments across all 9 standalone engine applications under `apps/` against the core vocabulary datasets under `vocabulary/` for English, French, Italian, Russian, and Modern Greek.

## Audit Methodology & Standardizations

- **Word Matching**: Base form exact string matching (case-insensitive, accent-preserving).
- **Level Normalization**: Engine level descriptors (`A1`–`C2`) and vocabulary level IDs (`starter` -> `A1`, `elementary` -> `A2`, `intermediate` -> `B1`, `upper_intermediate` -> `B2`, `advanced` -> `C1`, `proficiency` -> `C2`) are normalized to standard CEFR notation.
- **Disagreements Recorded**: Any instance where a word exists in both an engine app and a vocabulary file with differing level classifications.
- **Engine-Only Words Recorded**: Words defined in engine apps that do not currently appear in the vocabulary dataset for that language.

## English (`en`)

**Summary**: 82 engine entries audited | 17 level disagreement(s) | 53 engine-only candidate word(s).

| Word | Engine Level | Vocabulary Level | Engine App | Vocabulary File |
| :--- | :--- | :--- | :--- | :--- |
| **-- LEVEL DISAGREEMENTS --** | | | | |
| `affect` | B1 | B2 (upper_intermediate) | `en-verb-prep` | `vocabulary/en/B2/verbs.js` |
| `impact` | B2 | A2 (elementary) | `en-verb-prep` | `vocabulary/en/A2/vocabulary.js` |
| `request` | B1 | A2 (elementary) | `en-verb-prep` | `vocabulary/en/A2/verbs.js` |
| `ask` | A0 | A1 (starter) | `en-verb-prep` | `vocabulary/en/A1/verbs.js` |
| `ask` | A0 | A1 (starter) | `en-verb-prep` | `vocabulary/en/A1/vocabulary.js` |
| `believe` | A1 | B1 (intermediate) | `en-verb-prep` | `vocabulary/en/B1/verbs.js` |
| `worry` | A2 | A1 (starter) | `en-verb-prep` | `vocabulary/en/A1/verbs.js` |
| `worry` | A2 | B1 (intermediate) | `en-verb-prep` | `vocabulary/en/B1/verbs.js` |
| `look for` | A1 | A2 (elementary) | `en-verb-prep` | `vocabulary/en/A2/verbs.js` |
| `depend` | A2 | A1 (starter) | `en-verb-prep` | `vocabulary/en/A1/verbs.js` |
| `turn down` | B1 | A2 (elementary) | `en-verb-prep` | `vocabulary/en/A2/verbs.js` |
| `carry on` | B1 | A2 (elementary) | `en-verb-prep` | `vocabulary/en/A2/verbs.js` |
| `put off` | B1 | A2 (elementary) | `en-verb-prep` | `vocabulary/en/A2/verbs.js` |
| `bring about` | B2 | C1 (advanced) | `en-verb-prep` | `vocabulary/en/C1/verbs.js` |
| `cut down on` | B1 | A2 (elementary) | `en-verb-prep` | `vocabulary/en/A2/verbs.js` |
| `apply` | A1 | A2 (elementary) | `en-verb-prep` | `vocabulary/en/A2/verbs.js` |
| `deal with` | A2 | B1 (intermediate) | `en-verb-prep` | `vocabulary/en/B1/verbs.js` |
| **-- ENGINE-ONLY WORDS --** | | | | |
| `influence` | B1 | N/A | `en-verb-prep` | `N/A` |
| `approach` | B1 | N/A | `en-verb-prep` | `N/A` |
| `lack` | B1 | N/A | `en-verb-prep` | `N/A` |
| `demand` | B1 | N/A | `en-verb-prep` | `N/A` |
| `look at` | A0 | N/A | `en-verb-prep` | `N/A` |
| `take care of` | A2 | N/A | `en-verb-prep` | `N/A` |
| `think of` | A2 | N/A | `en-verb-prep` | `N/A` |
| `think about` | A1 | N/A | `en-verb-prep` | `N/A` |
| `apologize` | A2 | N/A | `en-verb-prep` | `N/A` |
| `look forward to` | B1 | N/A | `en-verb-prep` | `N/A` |
| `look up to` | B1 | N/A | `en-verb-prep` | `N/A` |
| `break down` | A2 | N/A | `en-verb-prep` | `N/A` |
| `run out of` | A2 | N/A | `en-verb-prep` | `N/A` |
| `take off` | A2 | N/A | `en-verb-prep` | `N/A` |
| `bring up` | B1 | N/A | `en-verb-prep` | `N/A` |
| `get along with` | A2 | N/A | `en-verb-prep` | `N/A` |
| `call off` | B1 | N/A | `en-verb-prep` | `N/A` |
| `figure out` | B1 | N/A | `en-verb-prep` | `N/A` |
| `fall out with` | B2 | N/A | `en-verb-prep` | `N/A` |
| `work out` | A2 | N/A | `en-verb-prep` | `N/A` |
| `catch up with` | B1 | N/A | `en-verb-prep` | `N/A` |
| `keep up with` | B1 | N/A | `en-verb-prep` | `N/A` |
| `pass out` | B1 | N/A | `en-verb-prep` | `N/A` |
| `put up with` | B2 | N/A | `en-verb-prep` | `N/A` |
| `go through` | B1 | N/A | `en-verb-prep` | `N/A` |
| `get over` | B1 | N/A | `en-verb-prep` | `N/A` |
| `grow up` | A1 | N/A | `en-verb-prep` | `N/A` |
| `show off` | B1 | N/A | `en-verb-prep` | `N/A` |
| `pick up` | A1 | N/A | `en-verb-prep` | `N/A` |
| `hold on` | A1 | N/A | `en-verb-prep` | `N/A` |
| `back up` | B1 | N/A | `en-verb-prep` | `N/A` |
| `drop out of` | B2 | N/A | `en-verb-prep` | `N/A` |
| `turn up` | B1 | N/A | `en-verb-prep` | `N/A` |
| `work with` | A2 | N/A | `en-verb-prep` | `N/A` |
| `report to` | B1 | N/A | `en-verb-prep` | `N/A` |
| `coordinate with` | B1 | N/A | `en-verb-prep` | `N/A` |
| `responsible for` | A2 | N/A | `en-verb-prep` | `N/A` |
| `in charge of` | A2 | N/A | `en-verb-prep` | `N/A` |
| `comply with` | B2 | N/A | `en-verb-prep` | `N/A` |
| `specialize in` | B1 | N/A | `en-verb-prep` | `N/A` |
| `succeed in` | B1 | N/A | `en-verb-prep` | `N/A` |
| `attribute to` | C1 | N/A | `en-verb-prep` | `N/A` |
| `refrain from` | C1 | N/A | `en-verb-prep` | `N/A` |
| `focus on` | A2 | N/A | `en-verb-prep` | `N/A` |
| `rely on` | A2 | N/A | `en-verb-prep` | `N/A` |
| `belong to` | A1 | N/A | `en-verb-prep` | `N/A` |
| `suffer from` | B1 | N/A | `en-verb-prep` | `N/A` |
| `prevent from` | B1 | N/A | `en-verb-prep` | `N/A` |
| `insist on` | B1 | N/A | `en-verb-prep` | `N/A` |
| `participate in` | B1 | N/A | `en-verb-prep` | `N/A` |
| `benefit from` | B1 | N/A | `en-verb-prep` | `N/A` |
| `approve of` | B2 | N/A | `en-verb-prep` | `N/A` |
| `object to` | B2 | N/A | `en-verb-prep` | `N/A` |

## French (`fr`)

**Summary**: 587 engine entries audited | 97 level disagreement(s) | 255 engine-only candidate word(s).

| Word | Engine Level | Vocabulary Level | Engine App | Vocabulary File |
| :--- | :--- | :--- | :--- | :--- |
| **-- LEVEL DISAGREEMENTS --** | | | | |
| `chercher` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `voyager` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `préparer` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `monter` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `rester` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `cacher` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `décider` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `espérer` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `continuer` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `expliquer` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `inviter` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `partager` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `payer` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `créer` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `remarquer` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `nager` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `emprunter` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `prêter` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `réussir` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `vendre` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `prévoir` | B1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `acheter` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `commander` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `discuter` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `enseigner` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `frapper` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `lever` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `louer` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `mener` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `présenter` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `réparer` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `réparer` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `sembler` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `attraper` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `construire` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `croire` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `devoir` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `éteindre` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `recevoir` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `suivre` | A1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `tousser` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `se plaindre` | B1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `se disputer` | B1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `s'excuser` | B1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `négocier` | B1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `licencier` | B1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `embaucher` | B1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `démissionner` | B1 | A2 (elementary) | `fr-conjugeur` | `vocabulary/fr/A2/verbs.js` |
| `cuisiner` | A2 | A1 (starter) | `fr-conjugeur` | `vocabulary/fr/A1/verbs.js` |
| `liberté` | A2 | B1 (intermediate) | `fr-genre` | `vocabulary/fr/B1/vocabulary.js` |
| `cheval` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `oiseau` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `jardin` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `jardin` | A1 | B1 (intermediate) | `fr-genre` | `vocabulary/fr/B1/vocabulary.js` |
| `fromage` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `restaurant` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `voyage` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `projet` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/jobs.js` |
| `aéroport` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/travel.js` |
| `argent` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/shopping.js` |
| `art` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/social.js` |
| `billet` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/travel.js` |
| `bureau` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `cinéma` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `compte` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `devoir` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/verbs.js` |
| `éléphant` | A1 | B1 (intermediate) | `fr-genre` | `vocabulary/fr/B1/vocabulary.js` |
| `robe` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `jupe` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `veste` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `magasin` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/shopping.js` |
| `hôpital` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `ingénieur` | A1 | B1 (intermediate) | `fr-genre` | `vocabulary/fr/B1/vocabulary.js` |
| `infirmier` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `confiance` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `confiance` | A1 | B1 (intermediate) | `fr-genre` | `vocabulary/fr/B1/vocabulary.js` |
| `ordinateur` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/technology.js` |
| `téléphone` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/technology.js` |
| `clavier` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/technology.js` |
| `souris` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/technology.js` |
| `message` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/technology.js` |
| `valise` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/travel.js` |
| `passeport` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/travel.js` |
| `sport` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/social.js` |
| `prix` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/shopping.js` |
| `pollution` | B1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `entreprise` | B1 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/jobs.js` |
| `collègue` | B1 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/jobs.js` |
| `réunion` | B1 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/jobs.js` |
| `salaire` | B1 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/shopping.js` |
| `relation` | B1 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/family.js` |
| `armoire` | A1 | B1 (intermediate) | `fr-genre` | `vocabulary/fr/B1/vocabulary.js` |
| `lampe` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `canapé` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `riz` | A1 | A2 (elementary) | `fr-genre` | `vocabulary/fr/A2/vocabulary.js` |
| `mathématiques` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/school.js` |
| `géographie` | A2 | A1 (starter) | `fr-genre` | `vocabulary/fr/A1/school.js` |
| **-- ENGINE-ONLY WORDS --** | | | | |
| `habiter` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `entrer` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `séparer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `proposer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `quitter` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `briller` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `soigner` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `sauver` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `laisser` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `imaginer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `exprimer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `écraser` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `désirer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `admirer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `souhaiter` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `raconter` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `étonner` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `ressembler` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `corriger` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `protéger` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `remplir` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `réfléchir` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `obéir` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `punir` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `nourrir` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `vieillir` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `guérir` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `pouvoir` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `détruire` | B1 | N/A | `fr-conjugeur` | `N/A` |
| `accorder` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `accuser` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `affirmer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `approuver` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `avancer` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `blesser` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `calmer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `charger` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `chauffer` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `comparer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `déclarer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `douter` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `éclairer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `embrasser` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `emmener` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `éviter` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `fumer` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `glisser` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `hésiter` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `ignorer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `importer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `indiquer` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `inquiéter` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `insister` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `installer` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `juger` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `mesurer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `nommer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `occuper` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `oser` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `poser` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `prier` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `ramasser` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `regretter` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `reposer` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `retourner` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `rouler` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `signaler` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `téléphoner` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `traverser` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `tromper` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `admettre` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `agacer` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `amuser` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `bâtir` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `brûler` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `défendre` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `descendre` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `falloir` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `naître` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `rendre` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `sortir` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `envisager` | B2 | N/A | `fr-conjugeur` | `N/A` |
| `susciter` | C1 | N/A | `fr-conjugeur` | `N/A` |
| `convaincre` | B2 | N/A | `fr-conjugeur` | `N/A` |
| `compromettre` | C2 | N/A | `fr-conjugeur` | `N/A` |
| `skier` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `souligner` | B1 | N/A | `fr-conjugeur` | `N/A` |
| `mentionner` | B1 | N/A | `fr-conjugeur` | `N/A` |
| `repasser` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `faire la vaisselle` | A2 | N/A | `fr-conjugeur` | `N/A` |
| `se souvenir de` | A1 | N/A | `fr-conjugeur` | `N/A` |
| `terre` | A1 | N/A | `fr-genre` | `N/A` |
| `mer` | A1 | N/A | `fr-genre` | `N/A` |
| `montagne` | A1 | N/A | `fr-genre` | `N/A` |
| `fleur` | A1 | N/A | `fr-genre` | `N/A` |
| `cuisine` | A1 | N/A | `fr-genre` | `N/A` |
| `lumière` | A1 | N/A | `fr-genre` | `N/A` |
| `ombre` | A1 | N/A | `fr-genre` | `N/A` |
| `idée` | A1 | N/A | `fr-genre` | `N/A` |
| `vérité` | A1 | N/A | `fr-genre` | `N/A` |
| `paix` | A1 | N/A | `fr-genre` | `N/A` |
| `guerre` | A1 | N/A | `fr-genre` | `N/A` |
| `vie` | A1 | N/A | `fr-genre` | `N/A` |
| `mort` | A1 | N/A | `fr-genre` | `N/A` |
| `voix` | A1 | N/A | `fr-genre` | `N/A` |
| `saison` | A1 | N/A | `fr-genre` | `N/A` |
| `pensée` | A1 | N/A | `fr-genre` | `N/A` |
| `joie` | A1 | N/A | `fr-genre` | `N/A` |
| `tristesse` | A1 | N/A | `fr-genre` | `N/A` |
| `peur` | A1 | N/A | `fr-genre` | `N/A` |
| `santé` | A2 | N/A | `fr-genre` | `N/A` |
| `maladie` | A1 | N/A | `fr-genre` | `N/A` |
| `solution` | A2 | N/A | `fr-genre` | `N/A` |
| `cahier` | A1 | N/A | `fr-genre` | `N/A` |
| `arbre` | A1 | N/A | `fr-genre` | `N/A` |
| `feu` | A1 | N/A | `fr-genre` | `N/A` |
| `ciel` | A1 | N/A | `fr-genre` | `N/A` |
| `mois` | A1 | N/A | `fr-genre` | `N/A` |
| `an` | A1 | N/A | `fr-genre` | `N/A` |
| `siècle` | A2 | N/A | `fr-genre` | `N/A` |
| `repos` | A1 | N/A | `fr-genre` | `N/A` |
| `repas` | A1 | N/A | `fr-genre` | `N/A` |
| `bruit` | A1 | N/A | `fr-genre` | `N/A` |
| `silence` | A1 | N/A | `fr-genre` | `N/A` |
| `courage` | A2 | N/A | `fr-genre` | `N/A` |
| `rêve` | A1 | N/A | `fr-genre` | `N/A` |
| `monde` | A1 | N/A | `fr-genre` | `N/A` |
| `mur` | A1 | N/A | `fr-genre` | `N/A` |
| `sol` | A1 | N/A | `fr-genre` | `N/A` |
| `plafond` | A1 | N/A | `fr-genre` | `N/A` |
| `accident` | A2 | N/A | `fr-genre` | `N/A` |
| `accord` | A2 | N/A | `fr-genre` | `N/A` |
| `âge` | A1 | N/A | `fr-genre` | `N/A` |
| `agent` | A2 | N/A | `fr-genre` | `N/A` |
| `agneau` | A2 | N/A | `fr-genre` | `N/A` |
| `air` | A1 | N/A | `fr-genre` | `N/A` |
| `alcool` | A2 | N/A | `fr-genre` | `N/A` |
| `animal` | A1 | N/A | `fr-genre` | `N/A` |
| `anniversaire` | A1 | N/A | `fr-genre` | `N/A` |
| `appareil` | A2 | N/A | `fr-genre` | `N/A` |
| `arrêt` | A1 | N/A | `fr-genre` | `N/A` |
| `article` | A2 | N/A | `fr-genre` | `N/A` |
| `aspect` | A2 | N/A | `fr-genre` | `N/A` |
| `avertissement` | A2 | N/A | `fr-genre` | `N/A` |
| `avis` | A2 | N/A | `fr-genre` | `N/A` |
| `balcon` | A2 | N/A | `fr-genre` | `N/A` |
| `banquier` | A2 | N/A | `fr-genre` | `N/A` |
| `bâtiment` | A1 | N/A | `fr-genre` | `N/A` |
| `bassin` | A2 | N/A | `fr-genre` | `N/A` |
| `besoin` | A1 | N/A | `fr-genre` | `N/A` |
| `biscuit` | A1 | N/A | `fr-genre` | `N/A` |
| `bois` | A1 | N/A | `fr-genre` | `N/A` |
| `bonheur` | A1 | N/A | `fr-genre` | `N/A` |
| `calcul` | A2 | N/A | `fr-genre` | `N/A` |
| `camion` | A1 | N/A | `fr-genre` | `N/A` |
| `camp` | A2 | N/A | `fr-genre` | `N/A` |
| `canal` | A2 | N/A | `fr-genre` | `N/A` |
| `charbon` | A2 | N/A | `fr-genre` | `N/A` |
| `choix` | A1 | N/A | `fr-genre` | `N/A` |
| `climat` | A2 | N/A | `fr-genre` | `N/A` |
| `cœur` | A1 | N/A | `fr-genre` | `N/A` |
| `coin` | A1 | N/A | `fr-genre` | `N/A` |
| `colère` | A2 | N/A | `fr-genre` | `N/A` |
| `collège` | A1 | N/A | `fr-genre` | `N/A` |
| `combat` | A2 | N/A | `fr-genre` | `N/A` |
| `commerce` | A2 | N/A | `fr-genre` | `N/A` |
| `conseil` | A2 | N/A | `fr-genre` | `N/A` |
| `continent` | A2 | N/A | `fr-genre` | `N/A` |
| `contrôle` | A2 | N/A | `fr-genre` | `N/A` |
| `corps` | A1 | N/A | `fr-genre` | `N/A` |
| `costume` | A1 | N/A | `fr-genre` | `N/A` |
| `coton` | A1 | N/A | `fr-genre` | `N/A` |
| `coude` | A2 | N/A | `fr-genre` | `N/A` |
| `coup` | A1 | N/A | `fr-genre` | `N/A` |
| `courrier` | A1 | N/A | `fr-genre` | `N/A` |
| `cours` | A1 | N/A | `fr-genre` | `N/A` |
| `couvercle` | A2 | N/A | `fr-genre` | `N/A` |
| `crime` | A2 | N/A | `fr-genre` | `N/A` |
| `cuisinier` | A1 | N/A | `fr-genre` | `N/A` |
| `danger` | A1 | N/A | `fr-genre` | `N/A` |
| `début` | A1 | N/A | `fr-genre` | `N/A` |
| `dessin` | A1 | N/A | `fr-genre` | `N/A` |
| `dictionnaire` | A1 | N/A | `fr-genre` | `N/A` |
| `discours` | A2 | N/A | `fr-genre` | `N/A` |
| `dommage` | A2 | N/A | `fr-genre` | `N/A` |
| `doute` | A2 | N/A | `fr-genre` | `N/A` |
| `éclair` | A2 | N/A | `fr-genre` | `N/A` |
| `effort` | A2 | N/A | `fr-genre` | `N/A` |
| `employé` | A1 | N/A | `fr-genre` | `N/A` |
| `endroit` | A1 | N/A | `fr-genre` | `N/A` |
| `ennemi` | A1 | N/A | `fr-genre` | `N/A` |
| `espace` | A1 | N/A | `fr-genre` | `N/A` |
| `esprit` | A2 | N/A | `fr-genre` | `N/A` |
| `espoir` | A1 | N/A | `fr-genre` | `N/A` |
| `essai` | A2 | N/A | `fr-genre` | `N/A` |
| `exemple` | A1 | N/A | `fr-genre` | `N/A` |
| `amour` | B1 | N/A | `fr-genre` | `N/A` |
| `orgue` | B2 | N/A | `fr-genre` | `N/A` |
| `gens` | A2 | N/A | `fr-genre` | `N/A` |
| `œuvre` | A2 | N/A | `fr-genre` | `N/A` |
| `marron` | A1 | N/A | `fr-genre` | `N/A` |
| `sœur` | A1 | N/A | `fr-genre` | `N/A` |
| `fille` | A1 | N/A | `fr-genre` | `N/A` |
| `chaussette` | A1 | N/A | `fr-genre` | `N/A` |
| `chaussure` | A1 | N/A | `fr-genre` | `N/A` |
| `neige` | A1 | N/A | `fr-genre` | `N/A` |
| `nuage` | A1 | N/A | `fr-genre` | `N/A` |
| `étoile` | A1 | N/A | `fr-genre` | `N/A` |
| `lune` | A1 | N/A | `fr-genre` | `N/A` |
| `rivière` | A1 | N/A | `fr-genre` | `N/A` |
| `forêt` | A1 | N/A | `fr-genre` | `N/A` |
| `église` | A1 | N/A | `fr-genre` | `N/A` |
| `pont` | A1 | N/A | `fr-genre` | `N/A` |
| `avocat` | A1 | N/A | `fr-genre` | `N/A` |
| `amitié` | A1 | N/A | `fr-genre` | `N/A` |
| `patience` | A1 | N/A | `fr-genre` | `N/A` |
| `honte` | A1 | N/A | `fr-genre` | `N/A` |
| `fierté` | A1 | N/A | `fr-genre` | `N/A` |
| `curiosité` | A1 | N/A | `fr-genre` | `N/A` |
| `internet` | A2 | N/A | `fr-genre` | `N/A` |
| `équipe` | A2 | N/A | `fr-genre` | `N/A` |
| `match` | A2 | N/A | `fr-genre` | `N/A` |
| `piscine` | A2 | N/A | `fr-genre` | `N/A` |
| `publicité` | A2 | N/A | `fr-genre` | `N/A` |
| `journal` | A2 | N/A | `fr-genre` | `N/A` |
| `émission` | A2 | N/A | `fr-genre` | `N/A` |
| `médicament` | A2 | N/A | `fr-genre` | `N/A` |
| `fièvre` | A2 | N/A | `fr-genre` | `N/A` |
| `rhume` | A2 | N/A | `fr-genre` | `N/A` |
| `environnement` | B1 | N/A | `fr-genre` | `N/A` |
| `société` | B1 | N/A | `fr-genre` | `N/A` |
| `gouvernement` | B1 | N/A | `fr-genre` | `N/A` |
| `économie` | B1 | N/A | `fr-genre` | `N/A` |
| `malentendu` | B1 | N/A | `fr-genre` | `N/A` |
| `déception` | B1 | N/A | `fr-genre` | `N/A` |
| `opinion` | B1 | N/A | `fr-genre` | `N/A` |
| `débat` | B1 | N/A | `fr-genre` | `N/A` |
| `média` | B1 | N/A | `fr-genre` | `N/A` |
| `réseau` | B1 | N/A | `fr-genre` | `N/A` |
| `tiroir` | A1 | N/A | `fr-genre` | `N/A` |
| `pâtes` | A1 | N/A | `fr-genre` | `N/A` |
| `œuf` | A1 | N/A | `fr-genre` | `N/A` |
| `moto` | A1 | N/A | `fr-genre` | `N/A` |
| `sciences` | A2 | N/A | `fr-genre` | `N/A` |
| `nom` | A1 | N/A | `fr-genre` | `N/A` |
| `prénom` | A1 | N/A | `fr-genre` | `N/A` |
| `adresse` | A1 | N/A | `fr-genre` | `N/A` |
| `numéro` | A1 | N/A | `fr-genre` | `N/A` |
| `île` | A1 | N/A | `fr-genre` | `N/A` |
| `désert` | A1 | N/A | `fr-genre` | `N/A` |
| `vallée` | A1 | N/A | `fr-genre` | `N/A` |
| `colline` | A1 | N/A | `fr-genre` | `N/A` |
| `orage` | A1 | N/A | `fr-genre` | `N/A` |
| `tonnerre` | A1 | N/A | `fr-genre` | `N/A` |
| `brouillard` | A1 | N/A | `fr-genre` | `N/A` |

## Italian (`it`)

**Summary**: 520 engine entries audited | 95 level disagreement(s) | 166 engine-only candidate word(s).

| Word | Engine Level | Vocabulary Level | Engine App | Vocabulary File |
| :--- | :--- | :--- | :--- | :--- |
| **-- LEVEL DISAGREEMENTS --** | | | | |
| `cercare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `viaggiare` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `preparare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `spiegare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `comprare` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `pagare` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `guidare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `organizzare` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `organizzare` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `rifiutare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `rifiutare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `accettare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `credere` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `sembrare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `diventare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `nuotare` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `offrire` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `dovere` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `prendere` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `rimanere` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `alzare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `consigliare` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `continuare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `continuare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `costruire` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `descrivere` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `nascondere` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `vendere` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `invitare` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `lanciare` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `annullare` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `appartenere` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `decidere` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `desiderare` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `ricevere` | A1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `tossire` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `guarire` | A2 | A1 (starter) | `it-coniugatore` | `vocabulary/it/A1/verbs.js` |
| `lamentarsi` | B1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `litigare` | B1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `scusarsi` | B1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `negoziare` | B1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `licenziare` | B1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `assumere` | B1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `assumere` | B1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `dimettersi` | B1 | A2 (elementary) | `it-coniugatore` | `vocabulary/it/A2/verbs.js` |
| `libertà` | A2 | B1 (intermediate) | `it-genere` | `vocabulary/it/B1/vocabulary.js` |
| `cavallo` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `giardino` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `giardino` | A1 | B1 (intermediate) | `it-genere` | `vocabulary/it/B1/vocabulary.js` |
| `formaggio` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `ristorante` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `viaggio` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `progetto` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/jobs.js` |
| `aeroporto` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/travel.js` |
| `aeroporto` | A2 | B1 (intermediate) | `it-genere` | `vocabulary/it/B1/vocabulary.js` |
| `biglietto` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/shopping.js` |
| `braccio` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `cinema` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `conto` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `dolore` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `giornale` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/social.js` |
| `museo` | A1 | B1 (intermediate) | `it-genere` | `vocabulary/it/B1/vocabulary.js` |
| `negozio` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/shopping.js` |
| `orologio` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `ospedale` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `pomodoro` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `prezzo` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/shopping.js` |
| `riso` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `sport` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/social.js` |
| `vino` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `vestito` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `gonna` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `giacca` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `ingegnere` | A1 | B1 (intermediate) | `it-genere` | `vocabulary/it/B1/vocabulary.js` |
| `fiducia` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `fiducia` | A1 | B1 (intermediate) | `it-genere` | `vocabulary/it/B1/vocabulary.js` |
| `telefono` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/technology.js` |
| `schermo` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/technology.js` |
| `tastiera` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/technology.js` |
| `mouse` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/technology.js` |
| `messaggio` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/technology.js` |
| `valigia` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/travel.js` |
| `passaporto` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/travel.js` |
| `denaro` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/shopping.js` |
| `inquinamento` | B1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `azienda` | B1 | A1 (starter) | `it-genere` | `vocabulary/it/A1/jobs.js` |
| `collega` | B1 | A1 (starter) | `it-genere` | `vocabulary/it/A1/jobs.js` |
| `riunione` | B1 | A1 (starter) | `it-genere` | `vocabulary/it/A1/jobs.js` |
| `stipendio` | B1 | A1 (starter) | `it-genere` | `vocabulary/it/A1/jobs.js` |
| `relazione` | B1 | A1 (starter) | `it-genere` | `vocabulary/it/A1/family.js` |
| `armadio` | A1 | B1 (intermediate) | `it-genere` | `vocabulary/it/B1/vocabulary.js` |
| `lampada` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `divano` | A1 | A2 (elementary) | `it-genere` | `vocabulary/it/A2/vocabulary.js` |
| `matematica` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/school.js` |
| `geografia` | A2 | A1 (starter) | `it-genere` | `vocabulary/it/A1/school.js` |
| **-- ENGINE-ONLY WORDS --** | | | | |
| `abitare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `donare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `domandare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `salvare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `baciare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `nascere` | A1 | N/A | `it-coniugatore` | `N/A` |
| `giungere` | A2 | N/A | `it-coniugatore` | `N/A` |
| `promettere` | A2 | N/A | `it-coniugatore` | `N/A` |
| `offendere` | A2 | N/A | `it-coniugatore` | `N/A` |
| `difendere` | A2 | N/A | `it-coniugatore` | `N/A` |
| `battere` | A1 | N/A | `it-coniugatore` | `N/A` |
| `accompagnare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `afferrare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `ammettere` | A2 | N/A | `it-coniugatore` | `N/A` |
| `annunciare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `attraversare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `bastare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `bloccare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `bruciare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `correggere` | A2 | N/A | `it-coniugatore` | `N/A` |
| `dimostrare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `distruggere` | B1 | N/A | `it-coniugatore` | `N/A` |
| `dubitare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `evitare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `firmare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `lasciare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `raccontare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `telefonare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `mancare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `svegliare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `cenare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `comprendere` | A2 | N/A | `it-coniugatore` | `N/A` |
| `consegnare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `raccogliere` | A2 | N/A | `it-coniugatore` | `N/A` |
| `regalare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `sbagliare` | A1 | N/A | `it-coniugatore` | `N/A` |
| `votare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `avvisare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `interessare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `convincere` | B2 | N/A | `it-coniugatore` | `N/A` |
| `prevedere` | C1 | N/A | `it-coniugatore` | `N/A` |
| `sciare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `sottolineare` | B1 | N/A | `it-coniugatore` | `N/A` |
| `menzionare` | B1 | N/A | `it-coniugatore` | `N/A` |
| `insistere` | B1 | N/A | `it-coniugatore` | `N/A` |
| `stirare` | A2 | N/A | `it-coniugatore` | `N/A` |
| `lavare i piatti` | A2 | N/A | `it-coniugatore` | `N/A` |
| `ricordarsi` | A1 | N/A | `it-coniugatore` | `N/A` |
| `tavola` | A1 | N/A | `it-genere` | `N/A` |
| `terra` | A1 | N/A | `it-genere` | `N/A` |
| `materia` | A1 | N/A | `it-genere` | `N/A` |
| `montagna` | A1 | N/A | `it-genere` | `N/A` |
| `luce` | A1 | N/A | `it-genere` | `N/A` |
| `ombra` | A1 | N/A | `it-genere` | `N/A` |
| `idea` | A1 | N/A | `it-genere` | `N/A` |
| `verità` | A1 | N/A | `it-genere` | `N/A` |
| `pace` | A1 | N/A | `it-genere` | `N/A` |
| `guerra` | A1 | N/A | `it-genere` | `N/A` |
| `vita` | A1 | N/A | `it-genere` | `N/A` |
| `morte` | A1 | N/A | `it-genere` | `N/A` |
| `voce` | A1 | N/A | `it-genere` | `N/A` |
| `gioia` | A1 | N/A | `it-genere` | `N/A` |
| `tristezza` | A1 | N/A | `it-genere` | `N/A` |
| `paura` | A1 | N/A | `it-genere` | `N/A` |
| `salute` | A2 | N/A | `it-genere` | `N/A` |
| `malattia` | A1 | N/A | `it-genere` | `N/A` |
| `soluzione` | A2 | N/A | `it-genere` | `N/A` |
| `sacco` | A1 | N/A | `it-genere` | `N/A` |
| `albero` | A1 | N/A | `it-genere` | `N/A` |
| `fuoco` | A1 | N/A | `it-genere` | `N/A` |
| `cielo` | A1 | N/A | `it-genere` | `N/A` |
| `mattino` | A1 | N/A | `it-genere` | `N/A` |
| `secolo` | A2 | N/A | `it-genere` | `N/A` |
| `riposo` | A1 | N/A | `it-genere` | `N/A` |
| `albergo` | A1 | N/A | `it-genere` | `N/A` |
| `rumore` | A1 | N/A | `it-genere` | `N/A` |
| `silenzio` | A1 | N/A | `it-genere` | `N/A` |
| `coraggio` | A2 | N/A | `it-genere` | `N/A` |
| `sorriso` | A1 | N/A | `it-genere` | `N/A` |
| `sogno` | A1 | N/A | `it-genere` | `N/A` |
| `mondo` | A1 | N/A | `it-genere` | `N/A` |
| `muro` | A1 | N/A | `it-genere` | `N/A` |
| `mare` | A1 | N/A | `it-genere` | `N/A` |
| `fiume` | A1 | N/A | `it-genere` | `N/A` |
| `lago` | A1 | N/A | `it-genere` | `N/A` |
| `abito` | A1 | N/A | `it-genere` | `N/A` |
| `banco` | A1 | N/A | `it-genere` | `N/A` |
| `bosco` | A1 | N/A | `it-genere` | `N/A` |
| `camino` | A2 | N/A | `it-genere` | `N/A` |
| `campo` | A1 | N/A | `it-genere` | `N/A` |
| `capello` | A1 | N/A | `it-genere` | `N/A` |
| `carattere` | A2 | N/A | `it-genere` | `N/A` |
| `carnevale` | A2 | N/A | `it-genere` | `N/A` |
| `castello` | A2 | N/A | `it-genere` | `N/A` |
| `compito` | A1 | N/A | `it-genere` | `N/A` |
| `consiglio` | A2 | N/A | `it-genere` | `N/A` |
| `deserto` | A2 | N/A | `it-genere` | `N/A` |
| `fatto` | A1 | N/A | `it-genere` | `N/A` |
| `fiore` | A1 | N/A | `it-genere` | `N/A` |
| `foglio` | A1 | N/A | `it-genere` | `N/A` |
| `frutto` | A1 | N/A | `it-genere` | `N/A` |
| `gioco` | A1 | N/A | `it-genere` | `N/A` |
| `gruppo` | A1 | N/A | `it-genere` | `N/A` |
| `guanto` | A1 | N/A | `it-genere` | `N/A` |
| `luogo` | A1 | N/A | `it-genere` | `N/A` |
| `nome` | A1 | N/A | `it-genere` | `N/A` |
| `poeta` | A2 | N/A | `it-genere` | `N/A` |
| `ponte` | A1 | N/A | `it-genere` | `N/A` |
| `porto` | A1 | N/A | `it-genere` | `N/A` |
| `prato` | A1 | N/A | `it-genere` | `N/A` |
| `ragazzo` | A1 | N/A | `it-genere` | `N/A` |
| `spazio` | A1 | N/A | `it-genere` | `N/A` |
| `uomo` | A1 | N/A | `it-genere` | `N/A` |
| `vaso` | A1 | N/A | `it-genere` | `N/A` |
| `campagna` | A1 | N/A | `it-genere` | `N/A` |
| `capitale` | A1 | N/A | `it-genere` | `N/A` |
| `filosofia` | A2 | N/A | `it-genere` | `N/A` |
| `isola` | A1 | N/A | `it-genere` | `N/A` |
| `natura` | A1 | N/A | `it-genere` | `N/A` |
| `paio` | A1 | N/A | `it-genere` | `N/A` |
| `centinaio` | A2 | N/A | `it-genere` | `N/A` |
| `migliaio` | A2 | N/A | `it-genere` | `N/A` |
| `ala` | A2 | N/A | `it-genere` | `N/A` |
| `calzino` | A1 | N/A | `it-genere` | `N/A` |
| `scarpa` | A1 | N/A | `it-genere` | `N/A` |
| `ghiaccio` | A1 | N/A | `it-genere` | `N/A` |
| `nuvola` | A1 | N/A | `it-genere` | `N/A` |
| `stella` | A1 | N/A | `it-genere` | `N/A` |
| `luna` | A1 | N/A | `it-genere` | `N/A` |
| `foresta` | A1 | N/A | `it-genere` | `N/A` |
| `chiesa` | A1 | N/A | `it-genere` | `N/A` |
| `avvocato` | A1 | N/A | `it-genere` | `N/A` |
| `amicizia` | A1 | N/A | `it-genere` | `N/A` |
| `pazienza` | A1 | N/A | `it-genere` | `N/A` |
| `vergogna` | A1 | N/A | `it-genere` | `N/A` |
| `orgoglio` | A1 | N/A | `it-genere` | `N/A` |
| `curiosità` | A1 | N/A | `it-genere` | `N/A` |
| `internet` | A2 | N/A | `it-genere` | `N/A` |
| `squadra` | A2 | N/A | `it-genere` | `N/A` |
| `partita` | A2 | N/A | `it-genere` | `N/A` |
| `piscina` | A2 | N/A | `it-genere` | `N/A` |
| `pubblicità` | A2 | N/A | `it-genere` | `N/A` |
| `programma` | A2 | N/A | `it-genere` | `N/A` |
| `medicina` | A2 | N/A | `it-genere` | `N/A` |
| `febbre` | A2 | N/A | `it-genere` | `N/A` |
| `raffreddore` | A2 | N/A | `it-genere` | `N/A` |
| `ambiente` | B1 | N/A | `it-genere` | `N/A` |
| `società` | B1 | N/A | `it-genere` | `N/A` |
| `governo` | B1 | N/A | `it-genere` | `N/A` |
| `economia` | B1 | N/A | `it-genere` | `N/A` |
| `malinteso` | B1 | N/A | `it-genere` | `N/A` |
| `delusione` | B1 | N/A | `it-genere` | `N/A` |
| `opinione` | B1 | N/A | `it-genere` | `N/A` |
| `dibattito` | B1 | N/A | `it-genere` | `N/A` |
| `media` | B1 | N/A | `it-genere` | `N/A` |
| `rete` | B1 | N/A | `it-genere` | `N/A` |
| `moto` | A1 | N/A | `it-genere` | `N/A` |
| `scienze` | A2 | N/A | `it-genere` | `N/A` |
| `cognome` | A1 | N/A | `it-genere` | `N/A` |
| `età` | A1 | N/A | `it-genere` | `N/A` |
| `numero` | A1 | N/A | `it-genere` | `N/A` |
| `compleanno` | A1 | N/A | `it-genere` | `N/A` |
| `valle` | A1 | N/A | `it-genere` | `N/A` |
| `collina` | A1 | N/A | `it-genere` | `N/A` |
| `temporale` | A1 | N/A | `it-genere` | `N/A` |
| `tuono` | A1 | N/A | `it-genere` | `N/A` |

## Russian (`ru`)

**Summary**: 472 engine entries audited | 57 level disagreement(s) | 270 engine-only candidate word(s).

| Word | Engine Level | Vocabulary Level | Engine App | Vocabulary File |
| :--- | :--- | :--- | :--- | :--- |
| **-- LEVEL DISAGREEMENTS --** | | | | |
| `магазин` | A2 | A1 (starter) | `ru-rod-padezhi` | `vocabulary/ru/A1/vocabulary.js` |
| `музей` | A1 | B1 (intermediate) | `ru-rod-padezhi` | `vocabulary/ru/B1/vocabulary.js` |
| `ресторан` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `аэропорт` | A2 | B1 (intermediate) | `ru-rod-padezhi` | `vocabulary/ru/B1/vocabulary.js` |
| `море` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `платье` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `больница` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `шкаф` | A1 | B1 (intermediate) | `ru-rod-padezhi` | `vocabulary/ru/B1/vocabulary.js` |
| `деньги` | A2 | A1 (starter) | `ru-rod-padezhi` | `vocabulary/ru/A1/vocabulary.js` |
| `сад` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `сад` | A1 | B1 (intermediate) | `ru-rod-padezhi` | `vocabulary/ru/B1/vocabulary.js` |
| `юбка` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `куртка` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `инженер` | A1 | B1 (intermediate) | `ru-rod-padezhi` | `vocabulary/ru/B1/vocabulary.js` |
| `повар` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `доверие` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `доверие` | A1 | B1 (intermediate) | `ru-rod-padezhi` | `vocabulary/ru/B1/vocabulary.js` |
| `цена` | A2 | A1 (starter) | `ru-rod-padezhi` | `vocabulary/ru/A1/vocabulary.js` |
| `окружающая среда` | B1 | C1 (advanced) | `ru-rod-padezhi` | `vocabulary/ru/C1/vocabulary.js` |
| `загрязнение` | B1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `коллега` | B1 | A1 (starter) | `ru-rod-padezhi` | `vocabulary/ru/A1/vocabulary.js` |
| `зарплата` | B1 | A1 (starter) | `ru-rod-padezhi` | `vocabulary/ru/A1/vocabulary.js` |
| `отношения` | B1 | A1 (starter) | `ru-rod-padezhi` | `vocabulary/ru/A1/vocabulary.js` |
| `лампа` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `диван` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `рис` | A1 | A2 (elementary) | `ru-rod-padezhi` | `vocabulary/ru/A2/vocabulary.js` |
| `покупать` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `продавать` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `плавать` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `надеяться` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `строить` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `объяснять` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `выбирать` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `требовать` | B1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `требовать` | B1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `получать` | A1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `платить` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `ненавидеть` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `включать` | A1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `включать` | A1 | C2 (proficiency) | `ru-spryazhenie` | `vocabulary/ru/C2/verbs.js` |
| `добавлять` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `искать` | A1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `чувствовать` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `расти` | A1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `нести` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `соглашаться` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `соглашаться` | A2 | C2 (proficiency) | `ru-spryazhenie` | `vocabulary/ru/C2/verbs.js` |
| `обсуждать` | B1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `решать` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `путешествовать` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `выздоравливать` | A2 | A1 (starter) | `ru-spryazhenie` | `vocabulary/ru/A1/verbs.js` |
| `жаловаться` | B1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `извиняться` | B1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `вести переговоры` | B1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `увольнять` | B1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `нанимать` | B1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| `увольняться` | B1 | A2 (elementary) | `ru-spryazhenie` | `vocabulary/ru/A2/verbs.js` |
| **-- ENGINE-ONLY WORDS --** | | | | |
| `город` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `враг` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `студент` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `человек` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `год` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `лес` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `язык` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `текст` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `вопрос` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `ответ` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `замок` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `нож` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `компьютер` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `сын` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `мальчик` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `завод` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `театр` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `вокзал` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `газета` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `работы` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `земля` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `дочь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `девочка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `площадь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `тетрадь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `кошка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `улица` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `река` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `гора` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `страна` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `карта` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `музыка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `песня` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `картина` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `погода` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `зима` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `весна` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `осень` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `письмо` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `слово` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `дело` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `поле` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `время` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `имя` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `здание` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `лицо` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `сердце` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `лето` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `небо` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `озеро` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `масло` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `число` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `место` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `фото` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `метро` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `такси` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `аптека` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `армия` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `бабушка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `бумага` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `вилка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `выставка` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `деревня` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `дорога` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `задача` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `звезда` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `игра` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `ложка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `луна` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `минута` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `одежда` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `ошибка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `почта` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `правда` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `проблема` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `работа` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `тарелка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `фирма` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `чашка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `автомобиль` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `карандаш` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `сахар` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `соль` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `пальто` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `душа` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `жизнь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `мир` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `ученик` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `час` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `адрес` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `актер` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `дедушка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `дядя` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `тетя` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `мужик` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `огонь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `воздух` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `снег` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `тепло` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `холод` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `свет` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `тьма` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `путь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `дитя` | B2 | N/A | `ru-rod-padezhi` | `N/A` |
| `сани` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `ножницы` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `фиолетовый` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `стакан` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `перец` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `рубашка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `носок` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `ботинок` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `перчатка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `лёд` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `облако` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `рынок` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `церковь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `мост` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `адвокат` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `полицейский` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `дружба` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `терпение` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `стыд` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `гордость` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `любопытство` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `интернет` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `экран` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `клавиатура` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `мышь` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `сообщение` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `январь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `февраль` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `март` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `апрель` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `май` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `июнь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `июль` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `август` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `сентябрь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `октябрь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `ноябрь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `декабрь` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `паспорт` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `спорт` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `команда` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `матч` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `бассейн` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `реклама` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `программа` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `здоровье` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `лекарство` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `температура` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `простуда` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `общество` | B1 | N/A | `ru-rod-padezhi` | `N/A` |
| `правительство` | B1 | N/A | `ru-rod-padezhi` | `N/A` |
| `экономика` | B1 | N/A | `ru-rod-padezhi` | `N/A` |
| `компания` | B1 | N/A | `ru-rod-padezhi` | `N/A` |
| `встреча` | B1 | N/A | `ru-rod-padezhi` | `N/A` |
| `недоразумение` | B1 | N/A | `ru-rod-padezhi` | `N/A` |
| `разочарование` | B1 | N/A | `ru-rod-padezhi` | `N/A` |
| `мнение` | B1 | N/A | `ru-rod-padezhi` | `N/A` |
| `дебаты` | B1 | N/A | `ru-rod-padezhi` | `N/A` |
| `СМИ` | B1 | N/A | `ru-rod-padezhi` | `N/A` |
| `сеть` | B1 | N/A | `ru-rod-padezhi` | `N/A` |
| `полка` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `ящик` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `макароны` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `мотоцикл` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `математика` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `история` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `география` | A2 | N/A | `ru-rod-padezhi` | `N/A` |
| `фамилия` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `возраст` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `номер` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `день рождения` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `остров` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `пустыня` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `долина` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `холм` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `гроза` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `гром` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `туман` | A1 | N/A | `ru-rod-padezhi` | `N/A` |
| `обедать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `ужинать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `изучать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `мешать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `прятать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `провожать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `разрушать` | B1 | N/A | `ru-spryazhenie` | `N/A` |
| `смеяться` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `пачкать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `варить` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `жарить` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `желать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `обещать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `собирать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `считать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `мечтать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `садиться` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `ложиться` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `обожать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `бояться` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `радоваться` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `грустить` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `кричать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `шептать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `звать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `дарить` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `отдавать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `ставить` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `красить` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `жалеть` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `завидовать` | B1 | N/A | `ru-spryazhenie` | `N/A` |
| `ходить` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `просить` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `курить` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `спешить` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `кормить` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `беречь` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `бросать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `будить` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `бывать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `вешать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `вызывать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `выключать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `выполнять` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `выходить` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `гладить` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `двигать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `дежурить` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `держать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `догонять` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `замечать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `заниматься` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `запрещать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `знакомить` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `исправлять` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `лежать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `бежать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `чуять` | B2 | N/A | `ru-spryazhenie` | `N/A` |
| `шагать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `шуметь` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `ехать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `плыть` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `цвести` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `везти` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `грести` | B1 | N/A | `ru-spryazhenie` | `N/A` |
| `печь` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `стеречь` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `запрягать` | B2 | N/A | `ru-spryazhenie` | `N/A` |
| `мазать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `вязать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `лизать` | B1 | N/A | `ru-spryazhenie` | `N/A` |
| `пахать` | B2 | N/A | `ru-spryazhenie` | `N/A` |
| `махать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `дышать` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `гнать` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `стелить` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `брить` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `мочь` | A1 | N/A | `ru-spryazhenie` | `N/A` |
| `предполагать` | B2 | N/A | `ru-spryazhenie` | `N/A` |
| `предусматривать` | C1 | N/A | `ru-spryazhenie` | `N/A` |
| `кашлять` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `кататься на лыжах` | A2 | N/A | `ru-spryazhenie` | `N/A` |
| `ссориться` | B1 | N/A | `ru-spryazhenie` | `N/A` |
| `подчёркивать` | B1 | N/A | `ru-spryazhenie` | `N/A` |
| `упоминать` | B1 | N/A | `ru-spryazhenie` | `N/A` |
| `настаивать` | B1 | N/A | `ru-spryazhenie` | `N/A` |
| `убеждать` | B1 | N/A | `ru-spryazhenie` | `N/A` |
| `убирать` | A2 | N/A | `ru-spryazhenie` | `N/A` |

## Greek (`el`)

**Summary**: 406 engine entries audited | 55 level disagreement(s) | 239 engine-only candidate word(s).

| Word | Engine Level | Vocabulary Level | Engine App | Vocabulary File |
| :--- | :--- | :--- | :--- | :--- |
| **-- LEVEL DISAGREEMENTS --** | | | | |
| `κήπος` | A1 | A2 (elementary) | `el-genos-ptoseis` | `vocabulary/el/A2/vocabulary.js` |
| `κήπος` | A1 | B1 (intermediate) | `el-genos-ptoseis` | `vocabulary/el/B1/vocabulary.js` |
| `λόγος` | A1 | B2 (upper_intermediate) | `el-genos-ptoseis` | `vocabulary/el/B2/vocabulary.js` |
| `ελευθερία` | A2 | B1 (intermediate) | `el-genos-ptoseis` | `vocabulary/el/B1/vocabulary.js` |
| `δικαιοσύνη` | A2 | B2 (upper_intermediate) | `el-genos-ptoseis` | `vocabulary/el/B2/vocabulary.js` |
| `ευθύνη` | A2 | B1 (intermediate) | `el-genos-ptoseis` | `vocabulary/el/B1/vocabulary.js` |
| `τυρί` | A1 | A2 (elementary) | `el-genos-ptoseis` | `vocabulary/el/A2/vocabulary.js` |
| `φόρεμα` | A1 | A2 (elementary) | `el-genos-ptoseis` | `vocabulary/el/A2/vocabulary.js` |
| `φούστα` | A1 | A2 (elementary) | `el-genos-ptoseis` | `vocabulary/el/A2/vocabulary.js` |
| `μαγαζί` | A2 | A1 (starter) | `el-genos-ptoseis` | `vocabulary/el/A1/vocabulary.js` |
| `νοσοκομείο` | A1 | A2 (elementary) | `el-genos-ptoseis` | `vocabulary/el/A2/vocabulary.js` |
| `φαρμακείο` | A1 | B2 (upper_intermediate) | `el-genos-ptoseis` | `vocabulary/el/B2/vocabulary.js` |
| `μηχανικός` | A1 | B1 (intermediate) | `el-genos-ptoseis` | `vocabulary/el/B1/vocabulary.js` |
| `εμπιστοσύνη` | A1 | A2 (elementary) | `el-genos-ptoseis` | `vocabulary/el/A2/vocabulary.js` |
| `εμπιστοσύνη` | A1 | B1 (intermediate) | `el-genos-ptoseis` | `vocabulary/el/B1/vocabulary.js` |
| `τηλέφωνο` | A2 | A1 (starter) | `el-genos-ptoseis` | `vocabulary/el/A1/vocabulary.js` |
| `αεροδρόμιο` | A2 | B1 (intermediate) | `el-genos-ptoseis` | `vocabulary/el/B1/vocabulary.js` |
| `τιμή` | A2 | A1 (starter) | `el-genos-ptoseis` | `vocabulary/el/A1/vocabulary.js` |
| `τιμή` | A2 | A1 (starter) | `el-genos-ptoseis` | `vocabulary/el/A1/vocabulary.js` |
| `συνάδελφος` | B1 | A1 (starter) | `el-genos-ptoseis` | `vocabulary/el/A1/vocabulary.js` |
| `συνάντηση` | B1 | A1 (starter) | `el-genos-ptoseis` | `vocabulary/el/A1/vocabulary.js` |
| `μισθός` | B1 | A1 (starter) | `el-genos-ptoseis` | `vocabulary/el/A1/vocabulary.js` |
| `σχέση` | B1 | A1 (starter) | `el-genos-ptoseis` | `vocabulary/el/A1/vocabulary.js` |
| `ντουλάπα` | A1 | B1 (intermediate) | `el-genos-ptoseis` | `vocabulary/el/B1/vocabulary.js` |
| `λάμπα` | A1 | A2 (elementary) | `el-genos-ptoseis` | `vocabulary/el/A2/vocabulary.js` |
| `καναπές` | A1 | A2 (elementary) | `el-genos-ptoseis` | `vocabulary/el/A2/vocabulary.js` |
| `ρύζι` | A1 | A2 (elementary) | `el-genos-ptoseis` | `vocabulary/el/A2/vocabulary.js` |
| `αγοράζω` | A2 | A1 (starter) | `el-klisi-rimaton` | `vocabulary/el/A1/verbs.js` |
| `περιμένω` | A1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `ταξιδεύω` | A2 | A1 (starter) | `el-klisi-rimaton` | `vocabulary/el/A1/verbs.js` |
| `πληρώνω` | A2 | A1 (starter) | `el-klisi-rimaton` | `vocabulary/el/A1/verbs.js` |
| `ελπίζω` | A2 | A1 (starter) | `el-klisi-rimaton` | `vocabulary/el/A1/verbs.js` |
| `ακολουθώ` | A2 | A1 (starter) | `el-klisi-rimaton` | `vocabulary/el/A1/verbs.js` |
| `οδηγώ` | A1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `οδηγώ` | A1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/vocabulary.js` |
| `φτάνω` | A1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `συνεχίζω` | A1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `συνεχίζω` | A1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `συνεχίζω` | A1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/vocabulary.js` |
| `ψάχνω` | A1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `πιστεύω` | A1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `πιστεύω` | A1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/vocabulary.js` |
| `ανήκω` | A2 | A1 (starter) | `el-klisi-rimaton` | `vocabulary/el/A1/verbs.js` |
| `προτείνω` | B1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `αποφασίζω` | A2 | A1 (starter) | `el-klisi-rimaton` | `vocabulary/el/A1/verbs.js` |
| `συμφωνώ` | A2 | A1 (starter) | `el-klisi-rimaton` | `vocabulary/el/A1/verbs.js` |
| `χρησιμοποιώ` | A2 | A1 (starter) | `el-klisi-rimaton` | `vocabulary/el/A1/verbs.js` |
| `παραπονιέμαι` | B1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `μαλώνω` | B1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `τονίζω` | B1 | C2 (proficiency) | `el-klisi-rimaton` | `vocabulary/el/C2/verbs.js` |
| `αναφέρω` | B1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `διαπραγματεύομαι` | B1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `απολύω` | B1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `προσλαμβάνω` | B1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| `παραιτούμαι` | B1 | A2 (elementary) | `el-klisi-rimaton` | `vocabulary/el/A2/verbs.js` |
| **-- ENGINE-ONLY WORDS --** | | | | |
| `άνθρωπος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `εχθρός` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `άνδρας` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `μαθητής` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ουρανός` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `καιρός` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `δρόμος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `τοίχος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `υπολογιστής` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `μήνας` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αγώνας` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `αριθμός` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `τομέας` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `αρχηγός` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `νόμος` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `τρόπος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `τόπος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `πόλεμος` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `κόσμος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `υπουργός` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `σεισμός` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `κόρη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `πόλη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `θάλασσα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `γη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ώρα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ζωή` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αγάπη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ειρήνη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αλήθεια` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `καρδιά` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ψυχή` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `φωνή` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `σιωπή` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αρχή` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `τέχνη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `φύση` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `επιστήμη` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `επαναστάτρια` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `εξουσία` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `ιδέα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αποστολή` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `ελπίδα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `χαρά` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `λύπη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `νίκη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `δέντρο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `λουλούδι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `πλοίο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `γράμμα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `όνομα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `πράγμα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `σώμα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `φως` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `σκότος` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `τέλος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `μέρος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `έτος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `κράτος` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `μέλλον` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `παρελθόν` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `πρόσωπο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αγορά` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αγρός` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αίθουσα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `άνοιξη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αυλή` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `βουνό` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `γλάστρα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `εικόνα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αίμα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ακρογιάλι` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `αμάξι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `άγγελος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `άνεμος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αστέρι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `βασιλιάς` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `γήπεδο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `γλώσσα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `δείπνο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `δεσποινίς` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `διαβήτης` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `δραχμή` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `δύναμη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `εβδομάδα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ελάφι` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `επιστολή` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ευτυχία` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `εφημερίδα` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `ζώο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `πρόβλημα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `λαός` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `μαύρο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `άσπρο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `μοβ` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αδερφός` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `γιος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `παππούς` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `γιαγιά` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `πιάτο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ποτήρι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `πιρούνι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `μαχαίρι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `κουτάλι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αλάτι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `πιπέρι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ζάχαρη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `πουκάμισο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ζακέτα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `κάλτσα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `γάντι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `χιόνι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `πάγος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `σύννεφο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `φεγγάρι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ποτάμι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `δάσος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `εκκλησία` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `γέφυρα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `καθηγητής` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `δικηγόρος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `νοσοκόμος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αστυνομικός` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `φιλία` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `υπομονή` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ντροπή` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `περηφάνια` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `περιέργεια` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ίντερνετ` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `οθόνη` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `πληκτρολόγιο` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `μήνυμα` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `Ιανουάριος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `Φεβρουάριος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `Μάρτιος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `Απρίλιος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `Μάιος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `Ιούνιος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `Ιούλιος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `Αύγουστος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `Σεπτέμβριος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `Οκτώβριος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `Νοέμβριος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `Δεκέμβριος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `καλοκαίρι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `φθινόπωρο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `χειμώνας` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `διαβατήριο` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `άθλημα` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `ομάδα` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `πισίνα` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `χρήμα` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `διαφήμιση` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `εκπομπή` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `υγεία` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `φάρμακο` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `πυρετός` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `κρυολόγημα` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `περιβάλλον` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `μόλυνση` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `κοινωνία` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `κυβέρνηση` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `οικονομία` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `επιχείρηση` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `παρεξήγηση` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `απογοήτευση` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `γνώμη` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `συζήτηση` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `μέσα ενημέρωσης` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `δίκτυο` | B1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ράφι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `συρτάρι` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `μηχανή` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ταξί` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `μαθηματικά` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `ιστορία` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `γεωγραφία` | A2 | N/A | `el-genos-ptoseis` | `N/A` |
| `επώνυμο` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ηλικία` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `διεύθυνση` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `γενέθλια` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `λίμνη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `νησί` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `έρημος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `κοιλάδα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `λόφος` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `καταιγίδα` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `βροντή` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `ομίχλη` | A1 | N/A | `el-genos-ptoseis` | `N/A` |
| `αγαπάω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `μπορώ` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `πουλάω` | A2 | N/A | `el-klisi-rimaton` | `N/A` |
| `αρχίζω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `περπατάω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `ρωτάω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `απαντάω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `τραγουδάω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `βγάζω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `γελάω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `ντύνω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `ψωνίζω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `ζωγραφίζω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `κρατάω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `αφήνω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `πετάω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `στηρίζω` | A2 | N/A | `el-klisi-rimaton` | `N/A` |
| `σταματάω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `αμφιβάλλω` | A2 | N/A | `el-klisi-rimaton` | `N/A` |
| `γνωρίζω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `γυρίζω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `κρύβω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `δοκιμάζω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `ετοιμάζω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `ζητάω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `φορώ` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `ακούγομαι` | A2 | N/A | `el-klisi-rimaton` | `N/A` |
| `βλέπομαι` | A2 | N/A | `el-klisi-rimaton` | `N/A` |
| `φοβάμαι` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `χαίρομαι` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `λυπάμαι` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `γεννιέμαι` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `πλένομαι` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `ντύνομαι` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `κουράζομαι` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `αρέσω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `μοιάζω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `απαγορεύω` | A2 | N/A | `el-klisi-rimaton` | `N/A` |
| `υποθέτω` | B2 | N/A | `el-klisi-rimaton` | `N/A` |
| `προβλέπω` | C1 | N/A | `el-klisi-rimaton` | `N/A` |
| `πάω` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `πρέπει` | A1 | N/A | `el-klisi-rimaton` | `N/A` |
| `κολυμπάω` | A2 | N/A | `el-klisi-rimaton` | `N/A` |
| `βήχω` | A2 | N/A | `el-klisi-rimaton` | `N/A` |
| `γιατρεύομαι` | A2 | N/A | `el-klisi-rimaton` | `N/A` |
| `κάνω σκι` | A2 | N/A | `el-klisi-rimaton` | `N/A` |
| `ζητάω συγγνώμη` | B1 | N/A | `el-klisi-rimaton` | `N/A` |
| `επιμένω` | B1 | N/A | `el-klisi-rimaton` | `N/A` |
| `πείθω` | B1 | N/A | `el-klisi-rimaton` | `N/A` |
| `σιδερώνω` | A2 | N/A | `el-klisi-rimaton` | `N/A` |

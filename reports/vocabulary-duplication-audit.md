# COSYlanguages Vocabulary Duplication & Migration Audit Report

**Date:** September 2026
**Auditor:** Jules (COSYlanguages Engineering)
**Status:** Audit-Only Pass (Zero Functional Changes / Zero File Deletions)
**Canonical Source of Truth:** `COSYdata` ([https://github.com/cosylanguages/COSYdata](https://github.com/cosylanguages/COSYdata))

---

## 1. Executive Summary

This audit compares the legacy local `vocabulary/` dataset in **COSYlanguages** against the single source of truth repository **COSYdata** across all 14 supported languages (`ba`, `br`, `cv`, `de`, `el`, `en`, `es`, `fr`, `hy`, `it`, `ka`, `pt`, `ru`, `tt`) and CEFR levels (`A1`/`A0-A1` through `C2`).

### Key Audit High-Level Findings
1. **Total Local Entries in COSYlanguages:** **17,310 entries** across 686 JS and JSON files.
2. **Total Remote Entries in COSYdata:** **22,322 entries** across 1,473 JSON files.
3. **Category Breakdown:**
   - **(a) Present in COSYlanguages but missing from COSYdata:** **12,069 entries**
   - **(b) Exist in both repositories but differ in content/schema:** **5,241 entries**
   - **(c) Identical in both repositories:** **0 entries**
4. **Practice Engine Data Fetching:** The Practice Engine (`practice/types/vocabulary/vocabulary.js` and `practice/_engine/renderers.js`) loads data via `COSY.loadLanguageData()` in `js/core/engine.js`. This function **attempts a live remote fetch from COSYdata endpoints first** (`https://cosylanguages.github.io/COSYdata/vocabulary/${lang}/index.json`) before falling back to local `vocabulary/` files.
5. **Resolver Pattern Status:** No local `vocab-resolver.js` exists under `shared/js/` or `js/data/` in COSYlanguages. However, print studio tools (`print-studio/print-cards.html`) import the live COSYdata resolver directly from `https://cosylanguages.github.io/COSYdata/shared/vocab-resolver.js`.

---

## 2. Summary Comparison Table Across 14 Languages

| Language Code | Language Name | COSYlanguages Total | COSYdata Total | (a) Present in CL, Missing in CD | (b) Present in Both, Differing | (c) Identical in Both |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| **BA** | Bashkir | 669 | 393 | 630 | 39 | 0 |
| **BR** | Breton | 669 | 414 | 639 | 30 | 0 |
| **CV** | Chuvash | 15 | 445 | 13 | 2 | 0 |
| **DE** | German | 550 | 510 | 530 | 20 | 0 |
| **EL** | Greek | 1,519 | 1,067 | 1,023 | 496 | 0 |
| **EN** | English | 3,588 | 11,419 | 1,059 | 2,529 | 0 |
| **ES** | Spanish | 456 | 498 | 429 | 27 | 0 |
| **FR** | French | 2,429 | 1,881 | 1,788 | 641 | 0 |
| **HY** | Armenian | 669 | 407 | 625 | 44 | 0 |
| **IT** | Italian | 2,415 | 2,279 | 1,747 | 668 | 0 |
| **KA** | Georgian | 669 | 403 | 628 | 41 | 0 |
| **PT** | Portuguese | 546 | 492 | 515 | 31 | 0 |
| **RU** | Russian | 2,447 | 1,721 | 1,817 | 630 | 0 |
| **TT** | Tatar | 669 | 393 | 626 | 43 | 0 |
| **TOTAL** | **All 14 Languages** | **17,310** | **22,322** | **12,069** | **5,241** | **0** |

---

## 3. Detailed Category Lists

### (a) Entries Present in COSYlanguages but Missing from COSYdata

A total of **12,069 entries** in `COSYlanguages` do not exist in `COSYdata`. The missing entries fall into three structural categories:

1. **Unmigrated Higher CEFR Level Datasets (A2–C2) for Regional & Specialty Languages:**
   - Languages: **BA, BR, DE, ES, HY, KA, PT, TT**
   - COSYdata currently hosts `a0_a1` (and select `a2`) datasets for these languages. Local files in COSYlanguages for `B1`, `B2`, `C1`, `C2` (e.g. `C2/adjectives.js`, `C2/verbs.js`, `B2/vocabulary.js`) contain vocabulary items that have not yet been ingested into COSYdata.
2. **Interactive Activity Decks & Discussion Decks:**
   - Languages: **EL, FR, IT, RU, BA, BR, DE, ES, HY, KA, PT, TT**
   - Files like `debates.js`, `fluency.js`, `opinions.js`, `quotes.js`, `speaking.js`, and `idioms.js` across levels A2–C2 were stored locally in COSYlanguages as practice exercise pools. They are structured as discussion prompts and fluency tasks rather than standard 1:1 vocabulary cards, so they were omitted from COSYdata's core vocabulary index.
3. **Deep Taxonomy Subcategory Files in English:**
   - Language: **EN**
   - Local English files in COSYlanguages use a deep directory hierarchy (`vocabulary/en/{LEVEL}/{POS}/{DOMAIN}/{Subcategory}/`). Certain specialized subcategory files (e.g., `B2/Nouns/People/Personality/Psychological_Traits.js`, `A2/Nouns/FOOD/Ingredients/Food_Beverages.js`, `C1/Nouns/LAW/Legal_System/General_Law.js`) contain specific terms that were filtered out or re-mapped during COSYdata's flat theme consolidation.

#### Language-by-Language Breakdown of Category (a) Missing Entries


#### BA — 630 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/ba/A2/fluency.js` | 20 | `Һеҙ хәтерләгән ялдар`, `Һеҙҙең яратҡан ресторанығыҙ йәки кафеғыҙ`, `Һеҙ эшкә йәки уҡырға нисек бараһығыҙ` |
| `vocabulary/ba/A2/opinions.js` | 15 | `Ял көндәре бик ҡыҫҡа.`, `Һуңға ҡалыу — әҙәпһеҙлек.`, `Кескәй ҡалаларҙа кешеләр мәхәббәтлерәк.` |
| `vocabulary/ba/B1/fluency.js` | 20 | `Үҙеңде өйҙәгесә хис иткән урын`, `Һеҙ фекерегеҙҙе үҙгәрткән нәмә`, `Яҡшы дуҫ ниндәй булырға тейеш` |
| `vocabulary/ba/B1/locations.js` | 11 | `Австралия`, `Япония`, `Ҡытай` |
| `vocabulary/ba/B1/opinions.js` | 15 | `Берҙән-бер бала булып үҫеү бер туғандарың булғанға ҡарағанда яҡшыраҡ.`, `Ысын күңелдән булған кескәй ялған ҡайһы саҡта иң изге эш булырға мөмкин.`, `Социаль селтәрҙәр кешеләрҙе үҙҙәре тураһында начарраҡ уйларға мәжбүр итә.` |
| `vocabulary/ba/B2/adjectives.js` | 28 | `бәйһеҙ`, `тигеҙләнешле`, `һағышлы` |
| `vocabulary/ba/B2/debates.js` | 20 | `климат үзгәреүե`, `киберҡурҡынысһыҙлыҡ`, `йәштәр һәм киләсәк` |
| `vocabulary/ba/B2/fluency.js` | 22 | ``, ``, `` |
| `vocabulary/ba/B2/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/ba/B2/people.js` | 14 | `тикшеренеүсе`, `журналист`, `активист` |
| `vocabulary/ba/B2/quotes.js` | 5 | `Телде һаҡлау - халыҡтың киләсәген һаҡлау ул.`, `Белем алыу - тормоштоң төп маҡсаты.`, `Берҙәмлектә - көс.` |
| `vocabulary/ba/B2/verbs.js` | 25 | `нығытыу`, `анализлау`, `хеҙмәттәшлек итеү` |
| `vocabulary/ba/B2/vocabulary.js` | 38 | `структура`, `хәбәр`, `өҙөмтә` |
| `vocabulary/ba/C1/adjectives.js` | 20 | `абстракт`, `өҙлекһеҙ`, `юғары осталыҡлы` |
| `vocabulary/ba/C1/debates.js` | 15 | `социаль ғаҙеллек мәсьәләһе`, `яһалма интеллект этикаһы`, `эш урындарының һанлы трансформацияһы` |
| `vocabulary/ba/C1/fluency.js` | 20 | ``, ``, `` |
| `vocabulary/ba/C1/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/ba/C1/people.js` | 10 | `фән белгесе`, `халыҡ-ара вәкил`, `юғары тикшеренеүсе` |
| `vocabulary/ba/C1/quotes.js` | 5 | `Милли аң ул - халыҡтың рухи мираҫы.`, `Фәнни асыштар халыҡ хеҙмәтендә булырға тееш.`, `Мәҙәни төрлөлөк - кешелекнең байлығы.` |
| `vocabulary/ba/C1/verbs.js` | 19 | `сағыштырыу`, `белдереү`, `вәкиллек итеү` |
| `vocabulary/ba/C1/vocabulary.js` | 25 | `концепция`, `ҡатнашыусылыҡ`, `вәкиллек` |
| `vocabulary/ba/C2/adjectives.js` | 118 | `фәндәр-ара`, `герменевтик`, `тавтологик` |
| `vocabulary/ba/C2/verbs.js` | 110 | `реификацияларға`, `сублимацияларға`, `предицировать итергә` |
| `vocabulary/ba/C2/vocabulary.js` | 21 | `апория`, `телеология`, `онтология` |

#### BR — 639 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/br/A2/fluency.js` | 20 | `Vakañsoù ho peus soñj anezho`, `Ho pretis pe ho cafedi muiañ-karet`, `Penaos e tait d'al labour pe d'ar skol` |
| `vocabulary/br/A2/opinions.js` | 15 | `Re verr eo an dibenn-sizhun.`, `Displed eo bezañ war-lerc'h.`, `Gwelloc'h eo an dud er c'hêrioù bihan.` |
| `vocabulary/br/B1/fluency.js` | 20 | `Ul lec'h ma fell deoc'h bezañ er gêr`, `Un dra bennak ho peus cheñchet ho soñj warnañ`, `Petra a laka un den da vezañ ur mignon mat` |
| `vocabulary/br/B1/locations.js` | 11 | `Aostralia`, `Japan`, `Sina` |
| `vocabulary/br/B1/opinions.js` | 15 | `Gwell eo bezañ bugel pennhêr eget kaout breudeur ha c'hoarezed.`, `Lavarout ur gaou gwenn a zo a-wechoù an tra nesañ d'ober.`, `Lakaat a ra ar mediaoù sokial an dud d'en em santout gwashoc'h.` |
| `vocabulary/br/B2/adjectives.js` | 35 | `dizindependent`, `kempouez`, `spletus` |
| `vocabulary/br/B2/debates.js` | 20 | `kemmoù hin`, `surentez urzhiataerel`, `iaouankiz ha dazed` |
| `vocabulary/br/B2/fluency.js` | 22 | ``, ``, `` |
| `vocabulary/br/B2/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/br/B2/people.js` | 15 | `enklasker`, `kelaouaer`, `stourmer` |
| `vocabulary/br/B2/quotes.js` | 5 | `Ar stourm a zo ret evit gwareziñ hon yezh hag hon glad.`, `An deskadurezh eo an arm galloudusañ evit kemmañ ar bed.`, `N'eus ket a peoc meur hep reizhder hag ingalded.` |
| `vocabulary/br/B2/verbs.js` | 31 | `kreñvaat`, `dielfennañ`, `kenlabourat` |
| `vocabulary/br/B2/vocabulary.js` | 39 | `framm`, `kemennadenn`, `arroudenn` |
| `vocabulary/br/C1/adjectives.js` | 20 | `meizadel`, `kendalc'hus`, `ampart-meurbet` |
| `vocabulary/br/C1/debates.js` | 15 | `reizhder sokial ha denel`, `ethik an inteligentezh krouet`, `treusfurmadur niverel al labour` |
| `vocabulary/br/C1/fluency.js` | 20 | ``, ``, `` |
| `vocabulary/br/C1/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/br/C1/people.js` | 10 | `prederour skiantel`, `dileuriad etrevroadel`, `enklasker uhel` |
| `vocabulary/br/C1/quotes.js` | 5 | `Ar frañsezadur pe ar peurbaduzter a zo disoc'h hor mennozhioù prederourel.`, `Diskouez ar wirionez treuswelus eo dever uhelañ an enklasker.`, `Liesseurted ar sevenadurezhioù a zo pinvidigezh vrasañ mab-den.` |
| `vocabulary/br/C1/verbs.js` | 19 | `keveriañ`, `disklêriañ`, `eroueziañ` |
| `vocabulary/br/C1/vocabulary.js` | 25 | `meziad`, `kemperzhed`, `erouezerezh` |
| `vocabulary/br/C2/adjectives.js` | 116 | `etrekelennous`, `hermeneutek`, `tautologek` |
| `vocabulary/br/C2/verbs.js` | 106 | `reifiñ`, `isberliñ`, `predikadiñ` |
| `vocabulary/br/C2/vocabulary.js` | 21 | `aporia`, `teleologiezh`, `ontologiezh` |

#### CV — 13 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/cv/A2/fluency.js` | 1 | `Çулçӳрев тата каникул` |
| `vocabulary/cv/A2/opinions.js` | 1 | `Ĕç тата кану` |
| `vocabulary/cv/B1/fluency.js` | 1 | `Çулçӳрев тата каникул` |
| `vocabulary/cv/B1/opinions.js` | 1 | `Ĕç тата кану` |
| `vocabulary/cv/B2/fluency.js` | 1 | `Çулçӳрев тата каникул` |
| `vocabulary/cv/B2/opinions.js` | 1 | `Ĕç тата кану` |
| `vocabulary/cv/C1/fluency.js` | 1 | `Çулçӳрев тата каникул` |
| `vocabulary/cv/C1/opinions.js` | 1 | `Ĕç тата кану` |
| `vocabulary/cv/C2/adjectives.js` | 1 | `кăсăклăхлă` |
| `vocabulary/cv/C2/fluency.js` | 1 | `Çулçӳрев тата каникул` |
| `vocabulary/cv/C2/opinions.js` | 1 | `Ĕç тата кану` |
| `vocabulary/cv/C2/verbs.js` | 1 | `шухăшласа илме` |
| `vocabulary/cv/C2/vocabulary.js` | 1 | `çут çанталăк` |

#### DE — 530 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/de/A2/fluency.js` | 20 | `Ein Urlaub, an den du dich erinnerst`, `Dein Lieblingsrestaurant oder -café`, `Wie du zur Arbeit oder Schule kommst` |
| `vocabulary/de/A2/opinions.js` | 15 | `Wochenenden sind zu kurz.`, `Es ist unhöflich, zu spät zu kommen.`, `Menschen sind in Kleinstädten netter.` |
| `vocabulary/de/B1/fluency.js` | 20 | `Ein Ort, der sich für dich wie Zuhause anfühlt`, `Etwas, worüber du deine Meinung geändert hast`, `Was einen guten Freund ausmacht` |
| `vocabulary/de/B1/locations.js` | 11 | `Australien`, `Japan`, `China` |
| `vocabulary/de/B1/opinions.js` | 15 | `Als Einzelkind aufzuwachsen ist besser, als Geschwister zu haben.`, `Eine Notlüge ist manchmal die freundlichere Wahl.`, `Soziale Medien führen dazu, dass sich Menschen schlechter fühlen.` |
| `vocabulary/de/B2/fluency.js` | 22 | `Die Zukunft der Welt in 50 Jahren`, `Die Auswirkungen des Klimawandels auf lokale Gemeinschaften`, `Eine Überzeugung, die du hast, die die meisten Menschen um dich herum nicht teilen` |
| `vocabulary/de/B2/opinions.js` | 17 | `Zerstören soziale Medien unsere sozialen Kompetenzen?`, `Sollte der öffentliche Nahverkehr kostenlos sein?`, `Nostalgie ist meist nur eine Lüge, die wir uns selbst erzählen.` |
| `vocabulary/de/C1/fluency.js` | 20 | `Ob der Ort, an dem man aufgewachsen ist, einen zu dem gemacht hat, der man ist`, `Die Kluft zwischen dem, wer man ist, und dem, wie man sich der Welt präsentiert`, `Ob Menschen sich grundlegend ändern oder sich nur langsam offenbaren` |
| `vocabulary/de/C1/opinions.js` | 17 | `Gentechnik: Fortschritt oder Gefahr?`, `Das bedingungslose Grundeinkommen ist die einzige Lösung für die flächendeckende Automatisierung.`, `Glück ist eine Entscheidung – Umstände sind nur Ausreden.` |
| `vocabulary/de/C2/adjectives.js` | 200 | `abrupt`, `abstrus`, `anachronistisch` |
| `vocabulary/de/C2/fluency.js` | 21 | `Komplexität des menschlichen Bewusstseins`, `Ob das Selbst etwas ist, das wir entdecken oder konstruieren`, `Die Ethik dessen, was wir zu vergessen wählen` |
| `vocabulary/de/C2/opinions.js` | 17 | `Das Selbst ist nichts, was wir entdecken – es ist etwas, das wir ständig erfinden.`, `Mitgefühl, das eine einfache Geschichte erfordert, ist kein echtes Mitgefühl – es ist Sentimentalität.`, `Jede Ideologie wird, konsequent zu Ende gedacht, zu einer Form von Gewalt.` |
| `vocabulary/de/C2/verbs.js` | 114 | `reifizieren`, `sublimieren`, `basieren auf` |
| `vocabulary/de/C2/vocabulary.js` | 21 | `Aporie`, `Teleologie`, `Ontologie` |

#### EL — 1023 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/el/A2/debates.js` | 166 | `Υψηλός μισθός εναντίον σύντομης διαδρομής: τι έχει μεγαλύτερη σημασία σε μια δουλειά;`, `Συχνή αλλαγή εργασίας εναντίον παραμονής στην ίδια εταιρεία: τι είναι καλύτερο για την καριέρα σας;`, `Εργασία υπερωριών εναντίον αποχώρησης στην ώρα σας κάθε μέρα: ποια είναι η καλύτερη συνήθεια;` |
| `vocabulary/el/A2/fluency.js` | 20 | `Διακοπές που θυμάσαι`, `Το αγαπημένο σου εστιατόριο ή καφετέρια`, `Πώς πηγαίνεις στη δουλειά ή στο σχολείο` |
| `vocabulary/el/A2/opinions.js` | 15 | `Τα Σαββατοκύριακα είναι πολύ μικρά.`, `Είναι αγένεια να αργείς.`, `Οι άνθρωποι είναι πιο ευγενικοί στις μικρές πόλεις.` |
| `vocabulary/el/A2/quotes.js` | 1 | `Ζωή είναι αυτό που σου συμβαίνει ενώ είσαι απασχολημένος κάνοντας άλλα σχέδια.` |
| `vocabulary/el/B1/adjectives.js` | 4 | `αυτοαπασχολούμενος`, `βιώσιμος`, `αυτοαπασχολούμενος` |
| `vocabulary/el/B1/debates.js` | 80 | `Εργασία από απόσταση εναντίον εργασίας στο γραφείο: τι είναι καλύτερο για την παραγωγικότητα και την ευεξία;`, `Ασφάλεια εργασίας εναντίον επαγγελματικής ανέλιξης: τι πρέπει να προτεραιοποιούν οι ενήλικες;`, `Έναρξη δικής σας επιχείρησης εναντίον εργασίας για έναν εργοδότη: ποια είναι η καλύτερη επιλογή στα 30;` |
| `vocabulary/el/B1/fluency.js` | 22 | `Ένα άτομο που με ενέπνευσε`, `Η σημασία της ευαισθητοποίησης για την ψυχική υγεία`, `Ένα μέρος που νιώθεις σαν σπίτι σου` |
| `vocabulary/el/B1/locations.js` | 11 | `Πελοπόννησος`, `Αυστραλία`, `Ιαπωνία` |
| `vocabulary/el/B1/opinions.js` | 17 | `Μπορούμε να ζήσουμε χωρίς ίντερνετ για μια εβδομάδα;`, `Πρέπει όλοι να μαθαίνουν μια δεύτερη γλώσσα;`, `Το να είσαι μοναχοπαίδι είναι καλύτερο από το να έχεις αδέρφια.` |
| `vocabulary/el/B1/people.js` | 2 | `Πλάτωνας`, `Μελίνα Μερκούρη` |
| `vocabulary/el/B1/quotes.js` | 2 | `Σκέφτομαι, άρα υπάρχω.`, `Η γνώση είναι δύναμη.` |
| `vocabulary/el/B1/speaking.js` | 10 | `Πώς έχουν αλλάξει τα μέσα κοινωνικής δικτύωσης την καθημερινή επικοινωνία με τους φίλους σας;`, `Ποιους παράγοντες θεωρείτε πιο σημαντικούς όταν επιλέγετε μια επαγγελματική πορεία;`, `Με ποιον τρόπο η ζωή σε μια μεγάλη πόλη επηρεάζει την ψυχική ευημερία του ανθρώπου;` |
| `vocabulary/el/B1/verbs.js` | 4 | `κάνω κηπουρική`, `κάνω εθελοντισμό`, `κάνω κηπουρική` |
| `vocabulary/el/B1/vocabulary.js` | 47 | `πιλότος`, `προγραμματιστής`, `καριέρα` |
| `vocabulary/el/B2/adjectives.js` | 10 | `βιώσιμος`, `πολιτικός`, `χρόνιος` |
| `vocabulary/el/B2/debates.js` | 76 | `Η εβδομάδα εργασίας τεσσάρων ημερών έναντι της εβδομάδας πέντε ημερών: ποιο μοντέλο ωφελεί περισσότερο τους εργαζόμενους και τους εργοδότες;`, `Καθολικό βασικό εισόδημα έναντι στοχευμένης πρόνοιας: ποιο είναι το πιο αποτελεσματικό δίχτυ ασφαλείας για τους εργαζόμενους ενήλικες;`, `Η οικονομία της περιστασιακής απασχόλησης (gig economy) έναντι της μόνιμης απασχόλησης: ποιο μοντέλο εξυπηρετεί καλύτερα τους εργαζόμενους μακροπρόθεσμα;` |
| `vocabulary/el/B2/fluency.js` | 22 | ``, ``, `` |
| `vocabulary/el/B2/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/el/B2/people.js` | 2 | `Μαρία Κάλλας`, `Οδυσσέας Ελύτης` |
| `vocabulary/el/B2/quotes.js` | 41 | ``, ``, `` |
| `vocabulary/el/B2/speaking.js` | 10 | `Σε ποιο βαθμό η αλγοριθμική επιμέλεια των μέσων κοινωνικής δικτύωσης απομονώνει τα άτομα σε θαλάμους αντήχησης;`, `Πρέπει οι κυβερνήσεις να θεσπίσουν αυστηρούς κανονισμούς για την ανάπτυξη της τεχνητής νοημοσύνης ώστε να προστατευθεί η απασχόληση;`, `Πόσο σημαντικά επηρεάζει το κοινωνικοοικονομικό υπόβαθρο τη μακροπρόθεσμη εκπαιδευτική επίδοση;` |
| `vocabulary/el/B2/verbs.js` | 2 | `ισχυρίζονται ότι`, `ισχυρίζονται ότι` |
| `vocabulary/el/B2/vocabulary.js` | 35 | `φαρμακείο`, `ψυχολόγος`, `λογοδοσία` |
| `vocabulary/el/C1/debates.js` | 32 | `Επίπεδες οργανωτικές ιεραρχίες εναντίον κάθετων δομών διαχείρισης: τι εξυπηρετεί καλύτερα τους ενήλικες που εργάζονται σε αυτές;`, `Η λατρεία της παραγωγικότητας εναντίον της υπεράσπισης της απραξίας: τι αντικατοπτρίζει καλύτερα αυτό που πραγματικά χρειάζονται οι άνθρωποι από την εργασία;`, `Η ηγεσία ως δεξιότητα που μαθαίνεται εναντίον της ηγεσίας ως έμφυτη ποιότητα: ποια άποψη είναι πιο υπερασπίσιμη εμπειρικά;` |
| `vocabulary/el/C1/fluency.js` | 22 | ``, ``, `` |
| `vocabulary/el/C1/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/el/C1/people.js` | 2 | `Νίκος Καζαντζάκης`, `Νίκος Καζαντζάκης` |
| `vocabulary/el/C1/speaking.js` | 10 | `Πώς οι λεπτές γνωστικές μεροληψίες υπονομεύουν την αντικειμενική λήψη αποφάσεων στην εταιρική ηγεσία;`, `Σε ποιο βαθμό το δίκαιο πνευματικής ιδιοκτησίας δυσκολεύεται να προσαρμοστεί στα δημιουργικά προϊόντα της παραγωγικής τεχνητής νοημοσύνης;`, `Έχει ο αρχιτεκτονικός αστικός σχεδιασμός τη δύναμη να αποδομήσει τον περιχαρακωμένο κοινωνικό διαχωρισμό;` |
| `vocabulary/el/C1/vocabulary.js` | 8 | `υποδομή`, `βιώσιμη ανάπτυξη`, `τηλεργασία` |
| `vocabulary/el/C2/adjectives.js` | 118 | `διεπιστημονικός`, `ερμηνευτικός`, `ταυτολογικός` |
| `vocabulary/el/C2/debates.js` | 67 | `Η προτεσταντική ηθική της εργασίας ως πολιτισμικό επίτευγμα έναντι της ως η αρχέγονη πηγή της ενήλικης δυστυχίας: ποια κληρονομιά κυριαρχεί σήμερα;`, `Η εμπορευματοποίηση του πάθους έναντι της απελευθέρωσης της μετατροπής της εργασίας σε νόημα: είναι το «κάνε αυτό που αγαπάς» συμβουλή ή παγίδα;`, `Η καριέρα ως ταυτότητα έναντι της καριέρας ως μέσο: ποια είναι η πιο συνεκτική σχέση που μπορεί να έχει ένας σύγχρονος ενήλικας με την εργασία του;` |
| `vocabulary/el/C2/speaking.js` | 10 | `Αποτελεί το φιλοσοφικό παράδειγμα του τεχνολογικού ντετερμινισμού μια αναπόδραστη πραγματικότητα ή παραίτηση από την ανθρώπινη αυτονομία;`, `Σε ποιο βαθμό η εμπορευματοποιημένη πολιτισμική νοσταλγία παρακωλύει την αυθεντική καλλιτεχνική καινοτομία στη σύγχρονη κοινωνία;`, `Πώς οι κυρίαρχες νομισματικές πολιτικές αντιμετωπίζουν τη συστημική αποσταθεροποίηση που προκαλούν τα αποκεντρωμένα κρυπτονομίσματα;` |
| `vocabulary/el/C2/verbs.js` | 102 | `πραγμοποιώ`, `εξιδανικεύω`, `κατηγορώ` |
| `vocabulary/el/C2/vocabulary.js` | 19 | `απορία`, `τελεολογία`, `πραγμοποίηση` |

#### EN — 1059 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/en/A2/Adjectives/COMMUNICATION/Leisure/Literature_Books.js` | 1 | `artistic` |
| `vocabulary/en/A2/Adjectives/COMMUNICATION/Shopping/Retail_Transactions.js` | 1 | `appealing` |
| `vocabulary/en/A2/Adjectives/COMMUNICATION/Social/Interactions.js` | 1 | `anonymous` |
| `vocabulary/en/A2/Adjectives/COMMUNICATION/Social/Language_Terms.js` | 1 | `blank` |
| `vocabulary/en/A2/Adjectives/COMMUNICATION/Technology/Digital_Devices.js` | 1 | `attached` |
| `vocabulary/en/A2/Adjectives/FOOD/Ingredients/Food_Beverages.js` | 1 | `nutritious` |
| `vocabulary/en/A2/Adjectives/HOME/Buildings/Housing_Types.js` | 1 | `architectural` |
| `vocabulary/en/A2/Adjectives/HOME/Furniture/Living_Furniture.js` | 1 | `adjusted` |
| `vocabulary/en/A2/Adjectives/NATURE/Environment/Flora_Plants.js` | 1 | `agricultural` |
| `vocabulary/en/A2/Adjectives/NATURE/Environment/Natural_World.js` | 7 | `biological`, `chilly`, `hazardous` |
| `vocabulary/en/A2/Adjectives/NATURE/Environment/Weather_Seasons.js` | 1 | `tropical` |
| `vocabulary/en/A2/Adjectives/SELF/Appearance/Clothing_Garments.js` | 1 | `casual` |
| `vocabulary/en/A2/Adjectives/SELF/Appearance/Colours_Shades.js` | 1 | `pale` |
| `vocabulary/en/A2/Adjectives/SELF/Appearance/Descriptive_Traits.js` | 36 | `actual`, `annual`, `confidential` |
| `vocabulary/en/A2/Adjectives/SELF/Body/Body_Parts.js` | 3 | `beneficial`, `blind`, `bloody` |
| `vocabulary/en/A2/Adjectives/SELF/Emotions/Feelings_States.js` | 13 | `pleased`, `unlucky`, `affectionate` |
| `vocabulary/en/A2/Adjectives/SELF/Family/Immediate_Family.js` | 1 | `beloved` |
| `vocabulary/en/A2/Adjectives/SELF/Identity/General_Identity.js` | 6 | `conscious`, `medical`, `physical` |
| `vocabulary/en/A2/Adjectives/SELF/Identity/Personal_Identity.js` | 12 | `Brazilian`, `Greek`, `Indian` |
| `vocabulary/en/A2/Adjectives/TIME_NUMBERS/Numbers/Cardinal_Ordinal.js` | 3 | `broke`, `wealthy`, `approximate` |
| `vocabulary/en/A2/Adjectives/TIME_NUMBERS/Numbers/Shapes_Dimensions.js` | 1 | `broad` |
| `vocabulary/en/A2/Adjectives/TIME_NUMBERS/Time/Clocks_Periods.js` | 1 | `brief` |
| `vocabulary/en/A2/Adjectives/TRAVEL/Transport/Travel_Journeys.js` | 1 | `bound` |
| `vocabulary/en/A2/Adjectives/WORK_SCHOOL/Education/School_Classroom.js` | 1 | `qualified` |
| `vocabulary/en/A2/Adjectives/WORK_SCHOOL/Education/Study_Activities.js` | 1 | `apparent` |
| `vocabulary/en/A2/Adjectives/WORK_SCHOOL/Work/Jobs_Careers.js` | 4 | `administrative`, `applicable`, `associated` |
| `vocabulary/en/A2/Adjectives/WORK_SCHOOL/Work/Professions.js` | 4 | `experienced`, `junior`, `organised` |
| `vocabulary/en/A2/Nouns/COMMUNICATION/Leisure/Athletic_Sports.js` | 10 | `champion`, `circuit`, `league` |
| `vocabulary/en/A2/Nouns/COMMUNICATION/Leisure/Games_Play.js` | 4 | `alien`, `balloon`, `kite` |
| `vocabulary/en/A2/Nouns/COMMUNICATION/Leisure/Literature_Books.js` | 3 | `horror`, `journal`, `comic` |
| `vocabulary/en/A2/Nouns/COMMUNICATION/Leisure/Music_Instruments.js` | 4 | `composition`, `harmony`, `flute` |
| `vocabulary/en/A2/Nouns/COMMUNICATION/Shopping/Retail_Transactions.js` | 4 | `window shopping`, `goods`, `item` |
| `vocabulary/en/A2/Nouns/COMMUNICATION/Social/Interactions.js` | 12 | `leader`, `association`, `humor` |
| `vocabulary/en/A2/Nouns/COMMUNICATION/Social/Language_Terms.js` | 4 | `clarity`, `exaggeration`, `globe` |
| `vocabulary/en/A2/Nouns/COMMUNICATION/Technology/Digital_Devices.js` | 3 | `display`, `site`, `user` |
| `vocabulary/en/A2/Nouns/FOOD/Ingredients/Food_Beverages.js` | 75 | `local cuisine`, `taco`, `bacon` |
| `vocabulary/en/A2/Nouns/FOOD/Meals/Prepared_Dishes.js` | 6 | `delicacy`, `banquet`, `chopsticks` |
| `vocabulary/en/A2/Nouns/HOME/Appliances/Kitchen_Appliances.js` | 1 | `bulb` |
| `vocabulary/en/A2/Nouns/HOME/Buildings/Housing_Types.js` | 1 | `brick` |
| `vocabulary/en/A2/Nouns/HOME/Furniture/Household_Goods.js` | 31 | `hole`, `household`, `leak` |
| `vocabulary/en/A2/Nouns/HOME/Furniture/Living_Furniture.js` | 2 | `fence`, `stool` |
| `vocabulary/en/A2/Nouns/HOME/Rooms/Indoor_Rooms.js` | 6 | `cellar`, `corridor`, `interior` |
| `vocabulary/en/A2/Nouns/NATURE/Animals/Mammals_Creatures.js` | 13 | `flock`, `gatherer`, `calf` |
| `vocabulary/en/A2/Nouns/NATURE/Environment/Flora_Plants.js` | 1 | `harvest` |
| `vocabulary/en/A2/Nouns/NATURE/Environment/Natural_World.js` | 30 | `atmosphere`, `cell`, `ecology` |
| `vocabulary/en/A2/Nouns/NATURE/Environment/Weather_Seasons.js` | 2 | `darkness`, `heat` |
| `vocabulary/en/A2/Nouns/SELF/Appearance/Accessories_Fashion.js` | 3 | `jewel`, `earring`, `glove` |
| `vocabulary/en/A2/Nouns/SELF/Appearance/Clothing_Garments.js` | 5 | `pocket`, `shoe`, `trainers` |
| `vocabulary/en/A2/Nouns/SELF/Appearance/Descriptive_Traits.js` | 11 | `clue`, `comedy`, `detail` |
| `vocabulary/en/A2/Nouns/SELF/Body/Body_Parts.js` | 18 | `gene`, `hearing`, `ankle` |
| `vocabulary/en/A2/Nouns/SELF/Emotions/Feelings_States.js` | 13 | `joy`, `sorrow`, `anger` |
| `vocabulary/en/A2/Nouns/SELF/Family/Extended_Family.js` | 4 | `heir`, `bride`, `groom` |
| `vocabulary/en/A2/Nouns/SELF/Identity/General_Identity.js` | 23 | `painkiller`, `portrait`, `script` |
| `vocabulary/en/A2/Nouns/SELF/Identity/Identity_Details.js` | 3 | `birth`, `origin`, `title` |
| `vocabulary/en/A2/Nouns/TIME_NUMBERS/Numbers/Cardinal_Ordinal.js` | 5 | `decimal point`, `multiplication`, `subtraction` |
| `vocabulary/en/A2/Nouns/TIME_NUMBERS/Numbers/Shapes_Dimensions.js` | 3 | `curve`, `layer`, `breadth` |
| `vocabulary/en/A2/Nouns/TIME_NUMBERS/Numbers/Sizes_Units.js` | 2 | `heap`, `bunch` |
| `vocabulary/en/A2/Nouns/TIME_NUMBERS/Time/Clocks_Periods.js` | 4 | `duration`, `interval`, `gradualness` |
| `vocabulary/en/A2/Nouns/TIME_NUMBERS/Time/Dates_Years.js` | 1 | `millennium` |
| `vocabulary/en/A2/Nouns/TRAVEL/Places/Cities_Urban.js` | 1 | `crossroad` |
| `vocabulary/en/A2/Nouns/TRAVEL/Places/Countries_Nations.js` | 1 | `kingdom` |
| `vocabulary/en/A2/Nouns/TRAVEL/Places/Locations_Venues.js` | 28 | `estate agent`, `facility`, `removal company` |
| `vocabulary/en/A2/Nouns/TRAVEL/Transport/Travel_Journeys.js` | 13 | `crossroads`, `driving license`, `junction` |
| `vocabulary/en/A2/Nouns/TRAVEL/Transport/Vehicles_Transit.js` | 3 | `vehicle`, `scooter`, `helicopter` |
| `vocabulary/en/A2/Nouns/WORK_SCHOOL/Education/Education_Systems.js` | 5 | `examination`, `empire`, `foundation` |
| `vocabulary/en/A2/Nouns/WORK_SCHOOL/Education/School_Classroom.js` | 17 | `calculator`, `pencil case`, `stapler` |
| `vocabulary/en/A2/Nouns/WORK_SCHOOL/Education/Study_Activities.js` | 7 | `activity`, `difficulty`, `emphasis` |
| `vocabulary/en/A2/Nouns/WORK_SCHOOL/Work/Jobs_Careers.js` | 30 | `agency`, `workforce`, `approval` |
| `vocabulary/en/A2/Nouns/WORK_SCHOOL/Work/Professions.js` | 9 | `baker`, `librarian`, `politician` |
| `vocabulary/en/A2/Other_POS/TIME_NUMBERS/Time/Clocks_Periods.js` | 10 | `initially`, `shortly`, `constantly` |
| `vocabulary/en/A2/Other_POS/TRAVEL/Places/Locations_Venues.js` | 50 | `Albert Einstein`, `Amsterdam`, `Athens` |
| `vocabulary/en/A2/Verbs/COMMUNICATION/Leisure/Athletic_Sports.js` | 2 | `beat`, `bounce` |
| `vocabulary/en/A2/Verbs/COMMUNICATION/Leisure/Games_Play.js` | 3 | `amuse`, `bet`, `seek` |
| `vocabulary/en/A2/Verbs/COMMUNICATION/Leisure/Hobbies_Pastimes.js` | 3 | `act`, `hop`, `skip` |
| `vocabulary/en/A2/Verbs/COMMUNICATION/Shopping/Retail_Transactions.js` | 1 | `earn` |
| `vocabulary/en/A2/Verbs/COMMUNICATION/Social/Interactions.js` | 4 | `attach`, `beg`, `boast` |
| `vocabulary/en/A2/Verbs/COMMUNICATION/Social/Language_Terms.js` | 3 | `partially`, `strongly`, `tick` |
| `vocabulary/en/A2/Verbs/FOOD/Ingredients/Food_Beverages.js` | 1 | `serve` |
| `vocabulary/en/A2/Verbs/HOME/Furniture/Household_Goods.js` | 1 | `bind` |
| `vocabulary/en/A2/Verbs/HOME/Household_Actions/Daily_Chores.js` | 2 | `dust`, `wipe` |
| `vocabulary/en/A2/Verbs/NATURE/Animals/Mammals_Creatures.js` | 2 | `bite`, `bark` |
| `vocabulary/en/A2/Verbs/NATURE/Environment/Natural_World.js` | 4 | `conserve`, `freeze`, `erupt` |
| `vocabulary/en/A2/Verbs/NATURE/Environment/Weather_Seasons.js` | 1 | `blow` |
| `vocabulary/en/A2/Verbs/SELF/Appearance/Descriptive_Traits.js` | 4 | `concentrate`, `confuse`, `greet` |
| `vocabulary/en/A2/Verbs/SELF/Body/Body_Parts.js` | 6 | `bend`, `yawn`, `blink` |
| `vocabulary/en/A2/Verbs/SELF/Emotions/Feelings_States.js` | 6 | `appreciate`, `excite`, `impress` |
| `vocabulary/en/A2/Verbs/SELF/Identity/General_Identity.js` | 8 | `applaud`, `design`, `entertain` |
| `vocabulary/en/A2/Verbs/SELF/Identity/Personal_Identity.js` | 2 | `attract`, `behave` |
| `vocabulary/en/A2/Verbs/TIME_NUMBERS/Numbers/Cardinal_Ordinal.js` | 2 | `multiply`, `subtract` |
| `vocabulary/en/A2/Verbs/TIME_NUMBERS/Time/Clocks_Periods.js` | 1 | `tonight` |
| `vocabulary/en/A2/Verbs/TRAVEL/Transport/Travel_Journeys.js` | 6 | `check in`, `overtake`, `reach` |
| `vocabulary/en/A2/Verbs/WORK_SCHOOL/Education/School_Classroom.js` | 1 | `memorise` |
| `vocabulary/en/A2/Verbs/WORK_SCHOOL/Work/Jobs_Careers.js` | 5 | `advance`, `appoint`, `assign` |
| `vocabulary/en/A2/Verbs/WORK_SCHOOL/Work/Professions.js` | 2 | `apply for`, `destroy` |
| `vocabulary/en/B1/Adjectives/People/Personality/Character_Traits.js` | 8 | `agreeable`, `apologetic`, `charismatic` |
| `vocabulary/en/B1/Adjectives/People/Personality/Psychological_Traits.js` | 6 | `absurd`, `inventive`, `observant` |
| `vocabulary/en/B1/Adjectives/Science/Space/Astronomy_Cosmos.js` | 4 | `celestial`, `cosmic`, `gravitational` |
| `vocabulary/en/B1/Adjectives/Society/Education/Schooling.js` | 1 | `educational` |
| `vocabulary/en/B1/Adjectives/Society/Work/Employment_Business.js` | 1 | `dedicated` |
| `vocabulary/en/B1/Idioms/General_Idioms.js` | 66 | `Leonardo da Vinci`, `Queen Elizabeth II`, `Rio de Janeiro` |
| `vocabulary/en/B1/Nouns/People/Emotions/Emotional_States.js` | 1 | `anticipation` |
| `vocabulary/en/B1/Nouns/People/Identity/Identity_Concepts.js` | 1 | `allegiance` |
| `vocabulary/en/B1/Nouns/People/Personality/Character_Traits.js` | 2 | `flaw`, `virtue` |
| `vocabulary/en/B1/Nouns/People/Personality/Psychological_Traits.js` | 3 | `aspiration`, `disposition`, `individuality` |
| `vocabulary/en/B1/Nouns/Science/Space/Astronomy_Cosmos.js` | 8 | `asteroid`, `astronomer`, `comet` |
| `vocabulary/en/B1/Nouns/Science/Space/Space_Exploration.js` | 4 | `astronaut`, `observatory`, `rocket` |
| `vocabulary/en/B1/Nouns/Society/Culture/Social_Relations.js` | 2 | `milkshake`, `sushi` |
| `vocabulary/en/B1/Nouns/Society/Work/Employment_Business.js` | 6 | `apprentice`, `expenditure`, `flexible hours` |
| `vocabulary/en/B1/Other_POS/Society/Culture/Social_Relations.js` | 1 | `in favour of` |
| `vocabulary/en/B1/Verbs/Science/Biology/Medical_Health.js` | 1 | `resent` |
| `vocabulary/en/B1/Verbs/Science/Space/Astronomy_Cosmos.js` | 1 | `orbit` |
| `vocabulary/en/B1/Verbs/Society/Culture/General_Culture.js` | 1 | `run out` |
| `vocabulary/en/B1/Verbs/Society/Culture/Social_Relations.js` | 1 | `stand for` |
| `vocabulary/en/B1/Verbs/Society/Work/Employment_Business.js` | 1 | `build up` |
| `vocabulary/en/B2/Adjectives/People/Emotions/Emotional_States.js` | 1 | `concerned` |
| `vocabulary/en/B2/Adjectives/People/Identity/Individual_Traits.js` | 2 | `corrupt`, `liberal` |
| `vocabulary/en/B2/Adjectives/People/Personality/Psychological_Traits.js` | 2 | `convinced`, `ridiculous` |
| `vocabulary/en/B2/Adjectives/Society/Culture/General_Culture.js` | 6 | `dominant`, `enormous`, `intense` |
| `vocabulary/en/B2/Nouns/People/Identity/Individual_Traits.js` | 3 | `welfare state`, `scrutiny`, `veto` |
| `vocabulary/en/B2/Nouns/People/Personality/Psychological_Traits.js` | 81 | `AI literacy gap`, `Barnum effect`, `Benjamin Franklin effect` |
| `vocabulary/en/B2/Nouns/Science/Biology/Medical_Health.js` | 2 | `preventive medicine`, `universal healthcare` |
| `vocabulary/en/B2/Nouns/Society/Culture/General_Culture.js` | 3 | `affordable housing`, `commuter belt`, `implicit bias` |
| `vocabulary/en/B2/Nouns/Society/Work/Employment_Business.js` | 5 | `precarity`, `redundancy package`, `labour market` |
| `vocabulary/en/B2/Other_POS/Society/Culture/General_Culture.js` | 1 | `to what extent` |
| `vocabulary/en/B2/Verbs/People/Identity/Individual_Traits.js` | 1 | `veto` |
| `vocabulary/en/B2/Verbs/Society/Culture/General_Culture.js` | 2 | `build on`, `counter` |
| `vocabulary/en/B2/Verbs/Society/Work/Employment_Business.js` | 2 | `depreciate`, `redistribute` |
| `vocabulary/en/C1/Adjectives/LAW/Constitutional_Law/Legislation.js` | 1 | `statutory` |
| `vocabulary/en/C1/Adjectives/LAW/Contracts/Liability_Obligations.js` | 1 | `compensatory` |
| `vocabulary/en/C1/Adjectives/LAW/Legal_System/General_Law.js` | 18 | `bizarre`, `comparable`, `delicate` |
| `vocabulary/en/C1/Adjectives/LAW/Legal_System/Judicial_Process.js` | 1 | `judicial` |
| `vocabulary/en/C1/Adjectives/People/Emotions/Emotional_States.js` | 4 | `humane`, `naive`, `reckless` |
| `vocabulary/en/C1/Adjectives/Society/Work/Corporate_Culture.js` | 4 | `costly`, `desirable`, `prestigious` |
| `vocabulary/en/C1/Nouns/DISCOURSE/Advanced_Register/Rhetorical_Register.js` | 1 | `data scientist` |
| `vocabulary/en/C1/Nouns/EPISTEMOLOGY/Knowledge_Theory/Epistemic_Analysis.js` | 1 | `empirical evidence` |
| `vocabulary/en/C1/Nouns/LAW/Contracts/Liability_Obligations.js` | 1 | `restitution` |
| `vocabulary/en/C1/Nouns/LAW/Legal_System/General_Law.js` | 25 | `AI literacy`, `Task-Based Learning`, `Total Physical Response` |
| `vocabulary/en/C1/Nouns/LAW/Legal_System/Judicial_Process.js` | 7 | `adjudication`, `appellant`, `deposition` |
| `vocabulary/en/C1/Nouns/LAW/Legal_System/Jurisprudence.js` | 1 | `jurisconsult` |
| `vocabulary/en/C1/Verbs/LAW/Contracts/Liability_Obligations.js` | 1 | `indemnify` |
| `vocabulary/en/C1/Verbs/LAW/Legal_System/General_Law.js` | 16 | `accelerate`, `attain`, `cease` |
| `vocabulary/en/C1/Verbs/LAW/Legal_System/Judicial_Process.js` | 2 | `incriminate`, `litigate` |
| `vocabulary/en/C1/Verbs/PHILOSOPHY/Ethics/Ethical_Theories.js` | 1 | `instrumentalise` |
| `vocabulary/en/C1/Verbs/People/Emotions/Emotional_States.js` | 6 | `displace`, `internalise`, `rationalise` |
| `vocabulary/en/C1/Verbs/Society/Work/Employment_Business.js` | 5 | `abolish`, `amend`, `co-opt` |
| `vocabulary/en/C2/Adjectives/DISCOURSE/Linguistics/Semantics_Syntax.js` | 1 | `polysemous` |
| `vocabulary/en/C2/Adjectives/LAW/Legal_System/General_Law.js` | 18 | `abrupt`, `abstruse`, `atypical` |
| `vocabulary/en/C2/Adjectives/PHILOSOPHY/Ontology/Existence_Metaphysics.js` | 1 | `precarious` |
| `vocabulary/en/C2/Adjectives/Society/Culture/Social_Relations.js` | 4 | `cosmopolitan`, `multipolar`, `polarising` |
| `vocabulary/en/C2/Nouns/LAW/Legal_System/General_Law.js` | 13 | `antinomy`, `apophasis`, `aporia` |
| `vocabulary/en/C2/Nouns/People/Personality/Psychological_Traits.js` | 9 | `apophenia`, `bad faith`, `jouissance` |
| `vocabulary/en/C2/Nouns/Society/Culture/Social_Relations.js` | 6 | `biopolitics`, `commodification`, `dialectical materialism` |
| `vocabulary/en/C2/Nouns/Society/Culture/Visual_Performing_Arts.js` | 4 | `defamiliarisation`, `kitsch`, `mimesis` |
| `vocabulary/en/C2/Verbs/EPISTEMOLOGY/Knowledge_Theory/Verification_Logic.js` | 2 | `gainsay`, `vitiate` |
| `vocabulary/en/C2/Verbs/LAW/Legal_System/General_Law.js` | 10 | `accentuate`, `deconstruct`, `delimit` |
| `vocabulary/en/C2/Verbs/Society/Culture/Social_Relations.js` | 8 | `destabilise`, `fetishise`, `hegemonise` |

#### ES — 429 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/es/A2/fluency.js` | 20 | `Una vacación que recuerdas`, `Tu restaurante o café favorito`, `Cómo vas al trabajo o a la escuela` |
| `vocabulary/es/A2/opinions.js` | 15 | `Los fines de semana son demasiado cortos.`, `Es de mala educación llegar tarde.`, `La gente es más amable en los pueblos pequeños.` |
| `vocabulary/es/B1/fluency.js` | 20 | `Un lugar que sientes como tu hogar`, `Algo sobre lo que hayas cambiado de opinión`, `Qué hace a un buen amigo` |
| `vocabulary/es/B1/locations.js` | 2 | `El Cairo`, `Delhi` |
| `vocabulary/es/B1/opinions.js` | 15 | `Ser hijo único es mejor que tener hermanos.`, `Decir una mentira piadosa es a veces lo más amable que se puede hacer.`, `Las redes sociales hacen que la gente se sienta peor consigo misma.` |
| `vocabulary/es/B2/fluency.js` | 22 | `El futuro del mundo en 50 años`, `El impacto del cambio climático en las comunidades locales`, `Una creencia que tienes y que la mayoría de la gente a tu alrededor no comparte` |
| `vocabulary/es/B2/opinions.js` | 17 | `¿Están las redes sociales destruyendo nuestras habilidades sociales?`, `¿Debería ser gratuito el transporte público?`, `La nostalgia es, en su mayor parte, solo una mentira que nos contamos a nosotros mismos.` |
| `vocabulary/es/C1/fluency.js` | 20 | `Si el lugar donde creciste te hizo quien eres`, `La brecha entre quién eres y quién presentas al mundo`, `Si las personas cambian fundamentalmente o simplemente se revelan poco a poco` |
| `vocabulary/es/C1/opinions.js` | 17 | `¿Ingeniería genética: progreso o peligro?`, `La renta básica universal es la única solución a la automatización generalizada.`, `La felicidad es una elección; las circunstancias son solo excusas.` |
| `vocabulary/es/C2/adjectives.js` | 112 | `abrupto`, `abstruso`, `anacrónico` |
| `vocabulary/es/C2/fluency.js` | 21 | `Complejidad de la conciencia humana`, `Si el yo es algo que descubrimos o construimos`, `La ética de lo que elegimos olvidar` |
| `vocabulary/es/C2/opinions.js` | 17 | `El yo no es algo que descubrimos, sino algo que inventamos continuamente.`, `La compasión que requiere una historia sencilla no es verdadera compasión; es sentimentalismo.`, `Toda ideología, llevada a su conclusión lógica, se convierte en una forma de violencia.` |
| `vocabulary/es/C2/verbs.js` | 110 | `reificar`, `sublimar`, `predicar` |
| `vocabulary/es/C2/vocabulary.js` | 21 | `aporía`, `teleología`, `ontología` |

#### FR — 1788 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/fr/A2/debates.js` | 166 | `Un salaire élevé vs un court trajet: qu'est-ce qui compte le plus dans un travail ?`, `Changer souvent d'emploi vs rester dans la même entreprise: qu'est-ce qui est le mieux pour votre carrière ?`, `Faire des heures supplémentaires vs partir à l'heure tous les jours: quelle est la meilleure habitude ?` |
| `vocabulary/fr/A2/fluency.js` | 20 | `Des vacances dont vous vous souvenez`, `Votre restaurant ou café préféré`, `Comment vous allez au travail ou à l'école` |
| `vocabulary/fr/A2/locations.js` | 11 | `Lyon`, `Nice`, `Bordeaux` |
| `vocabulary/fr/A2/opinions.js` | 15 | `Les week-ends sont trop courts.`, `C'est impoli d'être en retard.`, `Les gens sont plus gentils dans les petites villes.` |
| `vocabulary/fr/A2/quotes.js` | 1 | `La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets.` |
| `vocabulary/fr/B1/adjectives.js` | 2 | `durable`, `durable` |
| `vocabulary/fr/B1/debates.js` | 80 | `Travail à distance vs travail au bureau: qu'est-ce qui est le mieux pour la productivité et le bien-être ?`, `Sécurité d'emploi vs évolution de carrière: sur quoi les adultes devraient-ils donner la priorité ?`, `Créer sa propre entreprise vs travailler pour un employeur: quel est le meilleur choix à 30 ans ?` |
| `vocabulary/fr/B1/fluency.js` | 22 | `Une personne qui m'a inspiré`, `L'importance de la sensibilisation à la santé mentale`, `Un endroit où vous vous sentez chez vous` |
| `vocabulary/fr/B1/idioms.js` | 164 | `avoir la tête dans les nuages`, `mettre les pieds dans le plat`, `avoir le cœur sur la main` |
| `vocabulary/fr/B1/locations.js` | 4 | `Bretagne`, `Rio de Janeiro`, `Le Caire` |
| `vocabulary/fr/B1/opinions.js` | 17 | `Pouvons-nous vivre sans Internet pendant une semaine ?`, `Tout le monde devrait-il apprendre une deuxième langue ?`, `Être enfant unique est mieux que d'avoir des frères et sœurs.` |
| `vocabulary/fr/B1/quotes.js` | 2 | `Je pense, donc je suis.`, `Le cœur a ses raisons que la raison ne connaît point.` |
| `vocabulary/fr/B1/speaking.js` | 10 | `Comment les réseaux sociaux influencent-ils vos relations personnelles au quotidien ?`, `Quels critères privilégiez-vous lors de la recherche d'un emploi équilibré ?`, `De quelle manière la vie en grande ville impacte-t-elle la santé mentale ?` |
| `vocabulary/fr/B1/verbs.js` | 4 | `jardiner`, `faire du bénévolat`, `jardiner` |
| `vocabulary/fr/B1/vocabulary.js` | 41 | `développeur logiciel`, `licenciement`, `travail flexible` |
| `vocabulary/fr/B2/adjectives.js` | 10 | `civique`, `chronique`, `préventif` |
| `vocabulary/fr/B2/debates.js` | 76 | `La semaine de travail de quatre jours vs la semaine de cinq jours: quel modèle profite le plus aux travailleurs et aux employeurs ?`, `Revenu de base universel vs protection sociale ciblée: quel est le filet de sécurité le plus efficace pour les adultes qui travaillent ?`, `L'économie à la tâche vs l'emploi permanent: quel modèle sert le mieux les travailleurs sur le long terme ?` |
| `vocabulary/fr/B2/fluency.js` | 22 | `L'avenir du monde dans 50 ans`, `L'impact du changement climatique sur les communautés locales`, `Une conviction que vous avez et que la plupart des gens autour de vous ne partagent pas` |
| `vocabulary/fr/B2/idioms.js` | 163 | `couper les cheveux en quatre`, `passer du coq à l'âne`, `mettre la charrue avant les bœufs` |
| `vocabulary/fr/B2/opinions.js` | 17 | `Les réseaux sociaux détruisent-ils nos compétences sociales ?`, `Les transports publics devraient-ils être gratuits ?`, `La nostalgie n'est le plus souvent qu'un mensonge que nous nous racontons.` |
| `vocabulary/fr/B2/people.js` | 2 | `Edith Piaf`, `Simone de Beauvoir` |
| `vocabulary/fr/B2/quotes.js` | 41 | `Le but de notre vie est d'être heureux.`, `La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets.`, `Tous ceux qui errent ne sont pas perdus.` |
| `vocabulary/fr/B2/speaking.js` | 10 | `Dans quelle mesure les algorithmes des réseaux sociaux créent-ils des bulles de filtres idéologiques ?`, `Faut-il encadrer le développement de l'intelligence artificielle pour préserver l'emploi qualifié ?`, `Dans quelle mesure le milieu socio-économique détermine-t-il la réussite éducative à long terme ?` |
| `vocabulary/fr/B2/verbs.js` | 2 | `soutenir que`, `soutenir que` |
| `vocabulary/fr/B2/vocabulary.js` | 36 | ``, ``, `` |
| `vocabulary/fr/C1/debates.js` | 32 | `Hiérarchies organisationnelles horizontales vs structures de gestion verticales: qu'est-ce qui sert le mieux les adultes qui y travaillent ?`, `Le culte de la productivité vs l'éloge de l'oisiveté: qu'est-ce qui reflète le mieux ce dont les humains ont réellement besoin au travail ?`, `Le leadership comme compétence s'apprenant vs le leadership comme qualité innée: quel récit est le plus défendable empiriquement ?` |
| `vocabulary/fr/C1/fluency.js` | 22 | `Le rôle de l'art dans la société moderne`, `Intelligence artificielle : outil ou menace ?`, `Si le lieu où vous avez grandi a fait de vous ce que vous êtes` |
| `vocabulary/fr/C1/idioms.js` | 160 | `compter pour du beurre`, `en avoir le cœur net`, `promettre monts et merveilles` |
| `vocabulary/fr/C1/opinions.js` | 17 | `Génie génétique : progrès ou péril ?`, `Le revenu universel est la seule solution à l'automatisation généralisée.`, `Le bonheur est un choix — les circonstances ne sont que des excuses.` |
| `vocabulary/fr/C1/people.js` | 2 | `Jean-Paul Sartre`, `Jean-Paul Sartre` |
| `vocabulary/fr/C1/speaking.js` | 10 | `Comment les biais cognitifs subtils compromettent-ils la prise de décision objective dans le leadership d'entreprise ?`, `Dans quelle mesure le droit de la propriété intellectuelle peine-t-il à s'adapter aux créations de l'intelligence artificielle générative ?`, `L'aménagement urbain architectural a-t-il le pouvoir de démanteler la ségrégation sociale ancrée ?` |
| `vocabulary/fr/C1/verbs.js` | 2 | `infrastructure`, `infrastructure` |
| `vocabulary/fr/C1/vocabulary.js` | 6 | `réalité virtuelle`, `développement durable`, `télétravail` |
| `vocabulary/fr/C2/adjectives.js` | 195 | `abrupt`, `abstrus`, `anachronique` |
| `vocabulary/fr/C2/debates.js` | 67 | `L'éthique protestante du travail comme accomplissement civilisationnel vs comme source originelle de la misère adulte: quel héritage domine aujourd'hui ?`, `La marchandisation de la passion vs la libération du travail transformé en sens: « faites ce que vous aimez » est-il un conseil ou un piège ?`, `La carrière comme identité vs la carrière comme moyen: quelle est la relation la plus cohérente pour un adulte moderne avec son travail ?` |
| `vocabulary/fr/C2/fluency.js` | 21 | `La complexité de la conscience humaine`, `Si le soi est quelque chose que nous découvrons ou construisons`, `L'éthique de ce que nous choisissons d'oublier` |
| `vocabulary/fr/C2/idioms.js` | 156 | `pousser mémé dans les orties`, `trancher le nœud gordien`, `s'en souvenir comme de l'an quarante` |
| `vocabulary/fr/C2/opinions.js` | 17 | `Le soi n'est pas quelque chose que nous découvrons — c'est quelque chose que nous inventons continuellement.`, `La compassion qui exige qu'une histoire soit racontée simplement n'est pas de la compassion — c'est de la sentimentalité.`, `Toute idéologie, poussée à sa conclusion logique, devient une forme de violence.` |
| `vocabulary/fr/C2/speaking.js` | 10 | `Le paradigme philosophique du déterminisme technologique constitue-t-il une réalité inéluctable ou une abdication de l'autonomie humaine ?`, `Dans quelle mesure la nostalgie culturelle marchandisée entrave-t-elle la véritable innovation artistique dans la société contemporaine ?`, `Comment les politiques monétaires souveraines font-elles face à la déstabilisation systémique posée par les cryptomonnaies décentralisées ?` |
| `vocabulary/fr/C2/verbs.js` | 114 | `changement de paradigme`, `réifier`, `sublimer` |
| `vocabulary/fr/C2/vocabulary.js` | 19 | `aporie`, `téléologie`, `réification` |

#### HY — 625 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/hy/A2/fluency.js` | 20 | `Արձակուրդ, որը հիշում եք`, `Ձեր սիրելի ռեստորանը կամ սրճարանը`, `Ինչպես եք հասնում աշխատանքի կամ դպրոց` |
| `vocabulary/hy/A2/opinions.js` | 15 | `Հանգստյան օրերը շատ կարճ են:`, `Ուշանալը անքաղաքավարություն է:`, `Մարդիկ ավելի բարի են փոքր քաղաքներում:` |
| `vocabulary/hy/B1/fluency.js` | 20 | `Մի վայր, որտեղ ձեզ զգում եք ինչպես տանը`, `Ինչ-որ բան, որի մասին փոխել եք ձեր կարծիքը`, `Ինչն է դարձնում ընկերոջը լավ ընկեր` |
| `vocabulary/hy/B1/locations.js` | 11 | `Ավստրալիա`, `Ճապոնիա`, `Չինաստան` |
| `vocabulary/hy/B1/opinions.js` | 15 | `Միակ երեխա լինելն ավելի լավ է, քան քույր կամ եղբայր ունենալը:`, `«Բարի սուտ» ասելը երբեմն ամենաբարի արարքն է:`, `Սոցիալական մեդիան մարդկանց ստիպում է իրենց ավելի վատ զգալ:` |
| `vocabulary/hy/B2/adjectives.js` | 30 | `անկախ`, `հավասարակշռված`, `կարոտալի` |
| `vocabulary/hy/B2/debates.js` | 20 | `կլիմայի փոփոխություն`, `կիբեռանվտանգություն`, `երիտասարդությունը և ապագան` |
| `vocabulary/hy/B2/fluency.js` | 22 | ``, ``, `` |
| `vocabulary/hy/B2/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/hy/B2/people.js` | 14 | `հետազոտող`, `լրագրող`, `ակտիվիստ` |
| `vocabulary/hy/B2/quotes.js` | 5 | `Լեզվի պահպանումը ազգի ապագայի պահպանումն է:`, `Կրթությունը ամենահզոր զենքն է աշխարհը փոխելու համար:`, `Միասնության մեջ է ուժը:` |
| `vocabulary/hy/B2/verbs.js` | 22 | `ամրապնդել`, `վերլուծել`, `համագործակցել` |
| `vocabulary/hy/B2/vocabulary.js` | 39 | `կառուցվածք`, `հաղորդագրություն`, `մեջբերում` |
| `vocabulary/hy/C1/adjectives.js` | 19 | `վերացական`, `անընդհատ`, `բարձրորակ` |
| `vocabulary/hy/C1/debates.js` | 15 | `սոցիալական արդարության հարցը`, `արհեստական բանականության էթիկա`, `աշխատատեղերի թվային տրանսֆորմացիա` |
| `vocabulary/hy/C1/fluency.js` | 20 | ``, ``, `` |
| `vocabulary/hy/C1/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/hy/C1/people.js` | 10 | `գիտնական-մտածող`, `միջազգային ներկայացուցիչ`, `առաջատար հետազոտող` |
| `vocabulary/hy/C1/quotes.js` | 5 | `Ազգային ինքնագիտակցությունը ազգի հոգևոր ժառանգությունն է:`, `Գիտական ձեռքբերումները պետք է ծառայեն ժողովրդին:`, `Մշակութային բազմազանությունը մարդկության հարստությունն է:` |
| `vocabulary/hy/C1/verbs.js` | 19 | `համադրել`, `հայտարարագրել`, `ներկայացուցչություն ունենալ` |
| `vocabulary/hy/C1/vocabulary.js` | 25 | `հայեցակարգ`, `ներգրավվածություն`, `ներկայացուցչականություն` |
| `vocabulary/hy/C2/adjectives.js` | 118 | `միջգիտակարգային`, `հերմենևտիկ`, `նույնաբանական` |
| `vocabulary/hy/C2/verbs.js` | 106 | `առարկայացնել`, `սուբլիմացնել`, `ստորոգել` |
| `vocabulary/hy/C2/vocabulary.js` | 21 | `ապորիա`, `տելեոլոգիա`, `օնտոլոգիա` |

#### IT — 1747 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/it/A2/debates.js` | 166 | `Uno stipendio alto vs un breve tragitto giornaliero: cosa conta di più in un lavoro?`, `Cambiare spesso lavoro vs restare nella stessa azienda: cosa è meglio per la tua carriera?`, `Lavorare straordinari vs uscire in orario ogni giorno: qual è l'abitudine migliore?` |
| `vocabulary/it/A2/fluency.js` | 20 | `Una vacanza che ricordi`, `Il tuo ristorante o bar preferito`, `Come vai al lavoro o a scuola` |
| `vocabulary/it/A2/locations.js` | 10 | `Canada`, `Turchia`, `Armenia` |
| `vocabulary/it/A2/opinions.js` | 15 | `I fine settimana sono troppo brevi.`, `È maleducato essere in ritardo.`, `Le persone sono più gentili nelle piccole città.` |
| `vocabulary/it/A2/quotes.js` | 1 | `La vita è quello che ti succede mentre sei occupato a fare altri progetti.` |
| `vocabulary/it/B1/adjectives.js` | 2 | `sostenibile`, `sostenibile` |
| `vocabulary/it/B1/debates.js` | 80 | `Lavoro da remoto vs lavoro in ufficio: cosa è meglio per produttività e benessere?`, `Sicurezza del lavoro vs crescita professionale: cosa dovrebbero dare priorità gli adulti?`, `Avviare un'attività in proprio vs lavorare per un datore di lavoro: qual è la scelta migliore a 30 anni?` |
| `vocabulary/it/B1/fluency.js` | 22 | `Una persona che mi ha ispirato`, `L'importanza della consapevolezza sulla salute mentale`, `Un luogo che ti fa sentire a casa` |
| `vocabulary/it/B1/idioms.js` | 160 | `avere la vista lunga`, `tenere a mente`, `farsi un nome` |
| `vocabulary/it/B1/locations.js` | 8 | `Toscana`, `Australia`, `India` |
| `vocabulary/it/B1/opinions.js` | 17 | `Possiamo vivere senza internet per una settimana?`, `Tutti dovrebbero imparare una seconda lingua?`, `Essere figli unici è meglio che avere fratelli.` |
| `vocabulary/it/B1/quotes.js` | 1 | `Penso, dunque sono.` |
| `vocabulary/it/B1/speaking.js` | 10 | `In che modo i social media hanno cambiato il modo di comunicare con gli amici?`, `Quali fattori consideri più importanti quando scegli una carriera lavorativa?`, `In che modo vivere in una grande città influenza il benessere quotidiano?` |
| `vocabulary/it/B1/verbs.js` | 2 | `fare giardinaggio`, `fare giardinaggio` |
| `vocabulary/it/B1/vocabulary.js` | 26 | `sviluppatore software`, `licenziamento`, `lavoro flessibile` |
| `vocabulary/it/B2/adjectives.js` | 12 | `sostenibile`, `civico`, `cronico` |
| `vocabulary/it/B2/debates.js` | 76 | `La settimana lavorativa di quattro giorni vs la settimana di cinque giorni: quale modello avvantaggia maggiormente lavoratori e datori di lavoro?`, `Reddito di base universale vs welfare mirato: quale è la rete di sicurezza più efficace per gli adulti che lavorano?`, `La gig economy vs l'impiego a tempo indeterminato: quale modello serve meglio i lavoratori nel lungo periodo?` |
| `vocabulary/it/B2/fluency.js` | 22 | `Il futuro del mondo tra 50 anni`, `L'impatto del cambiamento climatico sulle comunità locali`, `Una convinzione che hai e che la maggior parte delle persone intorno a te non condivide` |
| `vocabulary/it/B2/idioms.js` | 157 | `spaccare il capello in quattro`, `trovare un ago nel pagliaio`, `mettere i punti sulle i` |
| `vocabulary/it/B2/opinions.js` | 17 | `I social media stanno distruggendo le nostre abilità sociali?`, `I trasporti pubblici dovrebbero essere gratuiti?`, `La nostalgia è per lo più solo una bugia che raccontiamo a noi stessi.` |
| `vocabulary/it/B2/quotes.js` | 41 | `Lo scopo della nostra vita è essere felici.`, `La vita è ciò che ti accade mentre sei impegnato a fare altri progetti.`, `Non tutti quelli che vagano sono persi.` |
| `vocabulary/it/B2/speaking.js` | 10 | `Fino a che punto gli algoritmi dei social media isolano le persone in bolle ideologiche?`, `I governi dovrebbero regolamentare lo sviluppo dell'intelligenza artificiale per proteggere l'occupazione?`, `Quanto incide il contesto socioeconomico sul successo scolastico a lungo termine?` |
| `vocabulary/it/B2/vocabulary.js` | 32 | `psicologo`, `responsabilità`, `incentivo` |
| `vocabulary/it/C1/debates.js` | 32 | `Gerarchie organizzative piatte vs strutture di gestione verticale: cosa serve meglio agli adulti che lavorano al loro interno?`, `Il culto della produttività vs la difesa dell'ozio: cosa riflette meglio ciò di cui gli esseri umani hanno realmente bisogno dal lavoro?`, `La leadership come abilità apprendibile vs la leadership come qualità innata: quale resoconto è più difendibile empiricamente?` |
| `vocabulary/it/C1/fluency.js` | 22 | `Il ruolo dell'arte nella società moderna`, `Intelligenza Artificiale: Strumento o minaccia?`, `Se il luogo in cui sei cresciuto ti ha reso ciò che sei` |
| `vocabulary/it/C1/idioms.js` | 159 | `pettinare le bambole`, `menare il cane per l'aia`, `vendere lucciole per lanterne` |
| `vocabulary/it/C1/opinions.js` | 17 | `Ingegneria genetica: progresso o pericolo?`, `Il reddito di base universale è l'unica soluzione all'automazione diffusa.`, `La felicità è una scelta: le circostanze sono solo scuse.` |
| `vocabulary/it/C1/people.js` | 2 | `Umberto Eco`, `Umberto Eco` |
| `vocabulary/it/C1/speaking.js` | 10 | `In che modo i sottili pregiudizi cognitivi compromettono il processo decisionale obiettivo nella leadership aziendale?`, `Fino a che punto il diritto della proprietà intellettuale fatica ad adattarsi alle creazioni dell'intelligenza artificiale generativa?`, `La pianificazione urbanistica architettonica ha il potere di smantellare la segregazione sociale radicata?` |
| `vocabulary/it/C1/verbs.js` | 2 | `infrastruttura`, `infrastruttura` |
| `vocabulary/it/C1/vocabulary.js` | 8 | `sviluppo sostenibile`, `telelavoro`, `gastronomia` |
| `vocabulary/it/C2/adjectives.js` | 192 | `abrupto`, `astruso`, `anacronistico` |
| `vocabulary/it/C2/debates.js` | 67 | `L'etica del lavoro protestante come conquista di civiltà vs come fonte originaria della miseria adulta: quale eredità domina oggi?`, `La mercificazione della passione vs la liberazione di trasformare il lavoro in significato: "fai ciò che ami" è un consiglio o una trappola?`, `La carriera come identità vs la carriera come mezzo: qual è il rapporto più coerente per un adulto moderno con il proprio lavoro?` |
| `vocabulary/it/C2/fluency.js` | 21 | `Complessità della coscienza umana`, `Se il sé sia qualcosa che scopriamo o costruiamo`, `L'etica di ciò che scegliamo di dimenticare` |
| `vocabulary/it/C2/idioms.js` | 156 | `essere una spada di Damocle sulla democrazia`, `sputare rospi di livore dottrinario`, `sotto l'auspicio di un mecenatismo illimitato` |
| `vocabulary/it/C2/opinions.js` | 17 | `Il sé non è qualcosa che scopriamo — è qualcosa che inventiamo continuamente.`, `La compassione che richiede una storia semplice non è vera compassione — è sentimentalismo.`, `Ogni ideologia, portata alla sua conclusione logica, diventa una forma di violenza.` |
| `vocabulary/it/C2/speaking.js` | 10 | `Il paradigma filosofico del determinismo tecnologico costituisce una realtà ineluttabile o un'abdicazione dell'autonomia umana?`, `In che misura la nostalgia culturale commercializzata ostacola la vera innovazione artistica nella società contemporanea?`, `In che modo le politiche monetarie sovrane affrontano la destabilizzazione sistemica posta dalle criptovalute decentralizzate?` |
| `vocabulary/it/C2/verbs.js` | 106 | `cambio di paradigma`, `reificare`, `sublimare` |
| `vocabulary/it/C2/vocabulary.js` | 19 | `aporia`, `teleologia`, `reificazione` |

#### KA — 628 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/ka/A2/fluency.js` | 20 | `არდადეგები, რომლებიც გახსოვთ`, `თქვენი საყვარელი რესტორანი ან კაფე`, `როგორ მიდიხართ სამსახურში ან სკოლაში` |
| `vocabulary/ka/A2/opinions.js` | 15 | `შაბათ-კვირა ძალიან მოკლეა.`, `დაგვიანება უზრდელობაა.`, `პატარა ქალაქებში ხალხი უფრო კეთილია.` |
| `vocabulary/ka/B1/fluency.js` | 20 | `ადგილი, სადაც თავს ისე გრძნობთ, როგორც სახლში`, `რაღაც, რაზეც აზრი შეიცვალეთ`, `რა ხდის ადამიანს კარგ მეგობრად` |
| `vocabulary/ka/B1/locations.js` | 11 | `ავსტრალია`, `იაპონია`, `ჩინეთი` |
| `vocabulary/ka/B1/opinions.js` | 15 | `დედისერთობა სჯობს და-ძმის ყოლას.`, `„კეთილი ტყუილის“ თქმა ხანდახან ყველაზე კეთილშობილური საქციელია.`, `სოციალური მედია ადამიანებს საკუთარ თავზე წარმოდგენას უფუჭებს.` |
| `vocabulary/ka/B2/adjectives.js` | 29 | `დამოუკიდებელი`, `წონასწორული`, `ნოსტალგიური` |
| `vocabulary/ka/B2/debates.js` | 20 | `კლიმატის ცვლილება`, `კიბერუსაფრთხოება`, `ახალგაზრდობა და მომავალი` |
| `vocabulary/ka/B2/fluency.js` | 22 | ``, ``, `` |
| `vocabulary/ka/B2/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/ka/B2/people.js` | 14 | `მკვლევარი`, `ჟურნალისტი`, `აქტივისტი` |
| `vocabulary/ka/B2/quotes.js` | 5 | `ენის დაცვა - ერის მომავლის დაცვაა.`, `განათლება არის ყველაზე ძლიერი იარაღი მსოფლიოს შესაცვლელად.`, `ერთობაშია ძალა.` |
| `vocabulary/ka/B2/verbs.js` | 28 | `გამაგრება`, `ანალიზი`, `თანამშრომლობა` |
| `vocabulary/ka/B2/vocabulary.js` | 38 | `სტრუქტურა`, `შეტყობინება`, `ციტატა` |
| `vocabulary/ka/C1/adjectives.js` | 20 | `აბსტრაქტული`, `უწყვეტი`, `მაღალკვალიფიციური` |
| `vocabulary/ka/C1/debates.js` | 15 | `სოციალური სამართლიანობის საკითხი`, `ხელოვნური ინტელექტის ეთიკა`, `სამუშაო ადგილების ციფრული ტრანსფორმაცია` |
| `vocabulary/ka/C1/fluency.js` | 20 | ``, ``, `` |
| `vocabulary/ka/C1/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/ka/C1/people.js` | 10 | `მეცნიერი-მოაზროვნე`, `საერთაშორისო წარმომადგენელი`, `წამყვანი მკვლევარი` |
| `vocabulary/ka/C1/quotes.js` | 5 | `ეროვნული ცნობიერება - ერის სულიერი მემკვიდრეობაა.`, `სამეცნიერო მიღწევები ხალხის სამსახურში უნდა იყოს.`, `კულტურული მრავალფეროვნება - კაცობრიობის სიმდიდრეა.` |
| `vocabulary/ka/C1/verbs.js` | 19 | `შეპირისპირება`, `დეკლარირება`, `წარმომადგენლობა` |
| `vocabulary/ka/C1/vocabulary.js` | 25 | `კონცეფცია`, `ჩართულობა`, `წარმომადგენლობითობა` |
| `vocabulary/ka/C2/adjectives.js` | 118 | `ინტერდისციპლინური`, `ჰერმენევტიკული`, `ტავტოლოგიური` |
| `vocabulary/ka/C2/verbs.js` | 104 | `რეიფიცირება`, `სუბლიმირება`, `პრედიცირება` |
| `vocabulary/ka/C2/vocabulary.js` | 21 | `აპორია`, `ტელეოლოგია`, `ონტოლოგია` |

#### PT — 515 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/pt/A2/fluency.js` | 20 | `Umas férias de que você se lembra`, `Seu restaurante ou café favorito`, `Como você vai para o trabalho ou escola` |
| `vocabulary/pt/A2/opinions.js` | 15 | `Os fins de semana são demasiado curtos.`, `É falta de educação chegar atrasado.`, `As pessoas são mais simpáticas nas cidades pequenas.` |
| `vocabulary/pt/B1/fluency.js` | 20 | `Um lugar que você sente como seu lar`, `Algo sobre o qual você mudou de ideia`, `O que faz de alguém um bom amigo` |
| `vocabulary/pt/B1/locations.js` | 2 | `Cairo`, `Deli` |
| `vocabulary/pt/B1/opinions.js` | 15 | `Ser filho único é melhor do que ter irmãos.`, `Dizer uma mentira piedosa é, por vezes, a coisa mais gentil a fazer.`, `As redes sociais fazem as pessoas sentirem-se pior consigo mesmas.` |
| `vocabulary/pt/B2/fluency.js` | 22 | `O futuro do mundo daqui a 50 anos`, `O impacto das alterações climáticas nas comunidades locais`, `Uma crença que você tem e que a maioria das pessoas ao seu redor não partilha` |
| `vocabulary/pt/B2/opinions.js` | 17 | `As redes sociais estão a destruir as nossas competências sociais?`, `O transporte público deveria ser gratuito?`, `A nostalgia é, na maior parte das vezes, apenas uma mentira que contamos a nós mesmos.` |
| `vocabulary/pt/C1/fluency.js` | 20 | `Se o lugar onde você cresceu fez de você quem você é`, `A lacuna entre quem você é e quem você apresenta ao mundo`, `Se as pessoas mudam fundamentalmente ou apenas se revelam lentamente` |
| `vocabulary/pt/C1/opinions.js` | 17 | `Engenharia genética: progresso ou perigo?`, `O rendimento básico universal é a única solução para a automação generalizada.`, `A felicidade é uma escolha — as circunstâncias são apenas desculpas.` |
| `vocabulary/pt/C2/adjectives.js` | 200 | `abrupto`, `abstruso`, `anacrónico` |
| `vocabulary/pt/C2/fluency.js` | 21 | `Complexidade da consciência humana`, `Se o eu é algo que descobrimos ou construímos`, `A ética do que escolhemos esquecer` |
| `vocabulary/pt/C2/opinions.js` | 17 | `O eu não é algo que descobrimos — é algo que inventamos continuamente.`, `A compaixão que exige que uma história seja contada de forma simples não é compaixão real — é sentimentalismo.`, `Toda a ideologia, levada à sua conclusão lógica, torna-se uma forma de violência.` |
| `vocabulary/pt/C2/verbs.js` | 108 | `reificar`, `sublimar`, `predicar` |
| `vocabulary/pt/C2/vocabulary.js` | 21 | `aporia`, `teleologia`, `ontologia` |

#### RU — 1817 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/ru/A2/debates.js` | 166 | `Высокая зарплата или короткий путь до работы: что важнее?`, `Частая смена работы или преданность одной компании: что лучше для карьеры?`, `Работа сверхурочно или уход вовремя каждый день: какая привычка лучше?` |
| `vocabulary/ru/A2/fluency.js` | 20 | `Отпуск, который вы помните`, `Ваш любимый ресторан или кафе`, `Как вы добираетесь до работы или учебы` |
| `vocabulary/ru/A2/locations.js` | 17 | `Санкт-Петербург`, `Сочи`, `Казань` |
| `vocabulary/ru/A2/opinions.js` | 15 | `Выходные слишком короткие.`, `Опаздывать — это грубо.`, `В маленьких городках люди добрее.` |
| `vocabulary/ru/A2/people.js` | 2 | `Лев Толстой`, `Виктор Цой` |
| `vocabulary/ru/A2/quotes.js` | 1 | `Жизнь — это то, что происходит с тобой, пока ты оживленно строишь другие планы.` |
| `vocabulary/ru/B1/adjectives.js` | 4 | `самозанятый`, `устойчивый`, `самозанятый` |
| `vocabulary/ru/B1/debates.js` | 80 | `Удаленная работа против работы в офисе: что лучше для продуктивности и благополучия?`, `Стабильность работы против карьерного роста: чему взрослые должны отдавать приоритет?`, `Открытие собственного бизнеса против работы на нанимателя: какой выбор лучше в 30 лет?` |
| `vocabulary/ru/B1/fluency.js` | 22 | `Человек, который меня вдохновил`, `Важность осведомленности о ментальном здоровье`, `Место, которое вы считаете своим домом` |
| `vocabulary/ru/B1/idioms.js` | 160 | `альфа и омега`, `аршин проглотил`, `бабушка надвое сказала` |
| `vocabulary/ru/B1/locations.js` | 12 | `Сибирь`, `Урал`, `Австралия` |
| `vocabulary/ru/B1/opinions.js` | 17 | `Можем ли мы прожить без интернета неделю?`, `Нужно ли каждому учить второй язык?`, `Быть единственным ребенком в семье лучше, чем иметь братьев и сестер.` |
| `vocabulary/ru/B1/people.js` | 1 | `Юрий Гагарин` |
| `vocabulary/ru/B1/quotes.js` | 2 | `Я мыслю, следовательно, я существую.`, `Красота спасет мир.` |
| `vocabulary/ru/B1/speaking.js` | 10 | `Как социальные сети изменили ваше ежедневное общение с друзьями?`, `Какие факторы наиболее важны для вас при выборе профессии?`, `Как жизнь в крупном городе влияет на психологическое благополучие человека?` |
| `vocabulary/ru/B1/verbs.js` | 4 | `заниматься садоводством`, `работать волонтёром`, `заниматься садоводством` |
| `vocabulary/ru/B1/vocabulary.js` | 42 | `пилот`, `разработчик ПО`, `сокращение` |
| `vocabulary/ru/B2/adjectives.js` | 12 | `гражданский`, `хронический`, `превентивный` |
| `vocabulary/ru/B2/debates.js` | 76 | `Четырехдневная рабочая неделя против пятидневной: какая модель больше выгодна работникам и работодателям?`, `Безусловный базовый доход против адресной социальной помощи: что является более эффективной сетью безопасности для работающих взрослых?`, `Гиг-экономика против постоянной занятости: какая модель лучше служит интересам работников в долгосрочной перспективе?` |
| `vocabulary/ru/B2/fluency.js` | 22 | `Будущее мира через 50 лет`, `Влияние изменения климата на местные сообщества`, `Убеждение, которое вы разделяете, а большинство окружающих — нет` |
| `vocabulary/ru/B2/idioms.js` | 160 | `авгиевы конюшни`, `ахиллесова пята`, `бабушка надвое сказала о результате` |
| `vocabulary/ru/B2/opinions.js` | 17 | `Разрушают ли социальные сети наши социальные навыки?`, `Должен ли общественный транспорт быть бесплатным?`, `Ностальгия — это в основном просто ложь, которую мы сами себе рассказываем.` |
| `vocabulary/ru/B2/people.js` | 2 | `Пётр I`, `Фёдор Достоевский` |
| `vocabulary/ru/B2/quotes.js` | 41 | `Цель нашей жизни — быть счастливыми.`, `Жизнь — это то, что происходит с тобой, пока ты оживленно строишь другие планы.`, `Не все те, кто странствуют, потеряны.` |
| `vocabulary/ru/B2/speaking.js` | 10 | `В какой степени алгоритмы социальных сетей изолируют пользователей в эхо-камерах?`, `Должны ли государства строго регулировать развитие искусственного интеллекта для защиты рабочих мест?`, `Насколько сильно социально-экономическое положение семьи влияет на долгосрочный успех в обучении?` |
| `vocabulary/ru/B2/verbs.js` | 2 | `утверждать, что`, `утверждать, что` |
| `vocabulary/ru/B2/vocabulary.js` | 33 | `психолог`, `подотчётность`, `стимул` |
| `vocabulary/ru/C1/debates.js` | 32 | `Плоские организационные иерархии против вертикальных структур управления: что лучше служит работающим в них взрослым?`, `Культ продуктивности против аргументов в пользу праздности: что лучше отражает реальные потребности человека в работе?`, `Лидерство как навык, которому можно научиться, против лидерства как врожденного качества: какая позиция более обоснована эмпирически?` |
| `vocabulary/ru/C1/fluency.js` | 22 | `Роль искусства в современном обществе`, `Искусственный интеллект: инструмент или угроза?`, `Сделало ли место, где вы выросли, вас тем, кто вы есть` |
| `vocabulary/ru/C1/idioms.js` | 159 | `альфа и омега бытия`, `бабушка надвое сказала прогноза`, `беречь как зеницу ока наследие` |
| `vocabulary/ru/C1/opinions.js` | 17 | `Генная инженерия: прогресс или опасность?`, `Безусловный базовый доход — единственное решение проблемы повсеместной автоматизации.`, `Счастье — это выбор, а обстоятельства — всего лишь оправдания.` |
| `vocabulary/ru/C1/people.js` | 4 | `Мария Шарапова`, `Анна Ахматова`, `Мария Шарапова` |
| `vocabulary/ru/C1/speaking.js` | 10 | `Как скрытые когнитивные искажения подрывают объективность принятия решений в корпоративном управлении?`, `В какой степени законодательство об интеллектуальной собственности способно адаптироваться к работам генеративного ИИ?`, `Способно ли архитектурное градостроительство преодолеть укоренившуюся социальную сегрегацию?` |
| `vocabulary/ru/C1/verbs.js` | 2 | `инфраструктура`, `инфраструктура` |
| `vocabulary/ru/C1/vocabulary.js` | 5 | `устойчивое развитие`, `дистанционная работа`, `здравоохранение` |
| `vocabulary/ru/C2/adjectives.js` | 228 | `резкий`, `маловразумительный`, `анахроничный` |
| `vocabulary/ru/C2/debates.js` | 67 | `Протестантская трудовая этика как цивилизационное достижение против нее же как первоисточника страданий взрослого человека: какое наследие доминирует сегодня?`, `Коммодификация страсти против освобождения через превращение работы в смысл: является ли совет «занимайся тем, что любишь» мудростью или ловушкой?`, `Карьера как идентичность против карьеры как средства: какие отношения с работой более последовательны для современного взрослого человека?` |
| `vocabulary/ru/C2/fluency.js` | 21 | `Сложность человеческого сознания`, `Является ли «я» чем-то, что мы открываем или конструируем`, `Этика того, что мы выбираем забыть` |
| `vocabulary/ru/C2/idioms.js` | 152 | `дамоклов меч`, `прокрустово ложе`, `пиррова победа` |
| `vocabulary/ru/C2/opinions.js` | 17 | `«Я» — это не то, что мы открываем, а то, что мы постоянно изобретаем.`, `Сострадание, требующее упрощения истории, — это не сострадание, а сентиментальность.`, `Любая идеология, доведенная до логического завершения, становится формой насилия.` |
| `vocabulary/ru/C2/speaking.js` | 10 | `Является ли философская парадигма технологического детерминизма неизбежностью или отказом от человеческой субъектности?`, `В какой степени коммерциализированная культурная ностальгия препятствует подлинному художественному новаторству?`, `Как суверенная денежно-кредитная политика справляется с системной дестабилизацией, вызванной децентрализованными криптовалютами?` |
| `vocabulary/ru/C2/verbs.js` | 102 | `реифицировать`, `сублимировать`, `предицировать` |
| `vocabulary/ru/C2/vocabulary.js` | 19 | `апория`, `телеология`, `реификация` |

#### TT — 626 Missing Entries
| File Path | Missing Entry Count | Sample Missing Terms |
| :--- | :---: | :--- |
| `vocabulary/tt/A2/fluency.js` | 20 | `Сез хәтерләгән яллар`, `Сезнең яраткан рестораныгыз яисә кафегыз`, `Сез эшкә яисә укырга ничек барасыз` |
| `vocabulary/tt/A2/opinions.js` | 15 | `Ял көннәре бик кыска.`, `Соңга калу — әдәпсезлек.`, `Кечкенә шәһәрләрдә кешеләр мәхәббәтле.` |
| `vocabulary/tt/B1/fluency.js` | 20 | `Үзеңне өйдәгечә хис иткән урын`, `Сез фикерегезне үзгәрткән нәрсә`, `Яхшы дус нинди булырга тиеш` |
| `vocabulary/tt/B1/locations.js` | 11 | `Австралия`, `Япония`, `Кытай` |
| `vocabulary/tt/B1/opinions.js` | 15 | `Бердәнбер бала булып үсү бертуганнарың булганга караганда яхшырак.`, `Кечкенә ялган әйтү кайвакыт иң игелекле эш булырга мөмкин.`, `Социаль челтәрләр кешеләрне үзләре турында начаррак уйларга мәҗбүр итә.` |
| `vocabulary/tt/B2/adjectives.js` | 28 | `бәйсез`, `тигезләнешле`, `сагышлы` |
| `vocabulary/tt/B2/debates.js` | 20 | `климат үзгәрүе`, `киберкуркынычсызлык`, `яшьләр һәм киләчәк` |
| `vocabulary/tt/B2/fluency.js` | 22 | ``, ``, `` |
| `vocabulary/tt/B2/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/tt/B2/people.js` | 14 | `тикшеренүче`, `журналист`, `активист` |
| `vocabulary/tt/B2/quotes.js` | 5 | `Телне саклау - халыкның киләчәген саклау ул.`, `Белем алу - тормышның төп максаты.`, `Бердәмлектә - көч.` |
| `vocabulary/tt/B2/verbs.js` | 22 | `ныгыту`, `анализлау`, `хезмәттәшлек итү` |
| `vocabulary/tt/B2/vocabulary.js` | 37 | `структура`, `хәбәр`, `өземтә` |
| `vocabulary/tt/C1/adjectives.js` | 20 | `абстракт`, `өзлексез`, `югары осталыклы` |
| `vocabulary/tt/C1/debates.js` | 15 | `социаль гаделлек мәсьәләсе`, `ясалма интеллект этикасы`, `эш урыннарының санлы трансформациясе` |
| `vocabulary/tt/C1/fluency.js` | 20 | ``, ``, `` |
| `vocabulary/tt/C1/opinions.js` | 17 | ``, ``, `` |
| `vocabulary/tt/C1/people.js` | 10 | `фән белгече`, `халыкара вәкил`, `югары тикшеренүче` |
| `vocabulary/tt/C1/quotes.js` | 5 | `Милли аң ул - халыкның рухи мирасы.`, `Фәнни ачышлар халык хезмәтендә булырга тиеш.`, `Мәдәни төрлелек - кешелекнең байлыгы.` |
| `vocabulary/tt/C1/verbs.js` | 19 | `чагыштыру`, `белдерү`, `вәкиллек итү` |
| `vocabulary/tt/C1/vocabulary.js` | 25 | `концепция`, `катнашучылык`, `вәкиллек` |
| `vocabulary/tt/C2/adjectives.js` | 118 | `фәнնәрара`, `герменевтик`, `тавтологик` |
| `vocabulary/tt/C2/verbs.js` | 110 | `реификацияләргә`, `сублимацияләргә`, `предицировать итәргә` |
| `vocabulary/tt/C2/vocabulary.js` | 21 | `апория`, `телеология`, `онтология` |


---

### (b) Entries Present in Both Repositories but Differing in Content

A total of **5,241 entries** exist in both repositories under the same language, level, and word key, but **their content and schema structure differ**.

#### Core Structural Differences
1. **Definition & Example Formats:**
   - **COSYlanguages:** Uses legacy nested array of objects: `definitions: [{ "text": "...", "examples": ["..."] }]`.
   - **COSYdata:** Modernized flat string array: `definitions: ["..."]` and `examples: ["..."]`.
2. **ID Taxonomy Standard:**
   - **COSYlanguages:** Legacy string IDs (e.g. `fr_elementary_describing_009`, `it_upper_intermediate_environment_007`).
   - **COSYdata:** Canonical namespace IDs (e.g. `fr:beau-a2:adjective`, `en:spicy-a1:adjective`).
3. **Taxonomy & Metadata Enrichment:**
   - **COSYdata:** Adds explicit `domain` (`"general"`), `theme` (e.g. `"descriptors"`), `sub_theme` (e.g. `"physical_appearance"`), and `updated` ISO timestamps (`"2025-05-18"`, `"2026-09-21"`).

#### Concrete Schema Comparison Example (`fr` - `beau`)

```json
// COSYlanguages (Legacy JS format in vocabulary/fr/A2/vocabulary.js)
{
  "id": "fr_elementary_describing_009",
  "word": "beau",
  "form": "adjective",
  "level": "elementary",
  "theme": "describing",
  "emoji": "✨",
  "definitions": [
    {
      "text": "Qui plaît à l'œil ou à l'esprit.",
      "examples": ["La vue depuis le sommet de la montagne était magnifique."]
    }
  ],
  "feminine": "belle",
  "plural": "beaux",
  "femininePlural": "belles",
  "comparative": "plus beau",
  "superlative": "le plus beau",
  "subtext": "très beau"
}

// COSYdata (Canonical JSON format in vocabulary/fr/a2/descriptors.json)
{
  "id": "fr:beau-a2:adjective",
  "word": "beau",
  "language": "fr",
  "form": "adjective",
  "level": "A2",
  "transcription": "/beau/",
  "feminine": "belle",
  "feminine_plural": "belles",
  "comparative": "plus beau",
  "superlative": "le plus beau",
  "emoji": "✨",
  "definitions": ["Qui plaît à l'œil ou à l'esprit."],
  "examples": ["Il utilise l'expression "beau" dans sa conversation."],
  "no_antonym": true,
  "domain": "general",
  "theme": "descriptors",
  "sub_theme": "physical_appearance",
  "updated": "2025-05-18"
}
```

#### Summary of Differing Entries by Language
- **EN:** 2,529 entries differ in definition schema, ID format, and theme metadata.
- **IT:** 668 entries differ in ID format, definition array nesting, and taxonomy.
- **FR:** 641 entries differ in definition schema and ID format.
- **RU:** 630 entries differ in definition schema, ID format, and examples.
- **EL:** 496 entries differ in definition schema and ID format.
- **HY, TT, KA, BA, PT, BR, ES, DE, CV:** 2 to 44 entries per language differ due to schema modernization in COSYdata.

---

### (c) Entries Identical in Both Repositories

- **Count:** **0 entries**
- **Explanation:** Exactly **0** entries are 100% byte-for-byte or object-structure identical between `COSYlanguages` and `COSYdata`. Every entry in `COSYdata` underwent schema modernization (standardized IDs, flat definition string arrays, domain/theme tags, and ISO timestamps).

---

## 4. Practice Engine & Vocabulary Resolver Findings

### Practice Engine Data Source (`practice/_engine` & `practice/types`)
- **Invocation Path:**
  1. `practice/types/vocabulary/vocabulary.js` (line 237) invokes `window.COSY.loadLanguageData(targetLang, level)`.
  2. `js/core/engine.js` implements `COSY.loadLanguageData(lang, levelId)`:
     ```js
     const COSYDATA_BASE = 'https://cosylanguages.github.io/COSYdata/';
     const indexRes = await fetch(`${COSYDATA_BASE}vocabulary/${lang}/index.json`);
     ```
- **Runtime Behavior:**
  - `js/core/engine.js` **fetches directly from live remote COSYdata endpoints** (`https://cosylanguages.github.io/COSYdata/vocabulary/${lang}/index.json` and theme JSONs).
  - If the remote fetch succeeds, `window.vocabularyData[lang]` is populated with canonical COSYdata entries.
  - If the remote fetch fails (e.g. offline mode), `js/core/engine.js` falls back to loading local `vocabulary/${lang}/${folderCode}/${file}` files.

### Resolver Pattern Audit (`shared/js/` & `js/data/`)
- **In COSYdata:** A canonical resolver exists at `https://cosylanguages.github.io/COSYdata/shared/vocab-resolver.js` exporting `resolveVocab` and `hydrateVocabElements`.
- **In COSYlanguages:**
  - No local copy of `vocab-resolver.js` exists under `shared/js/` or `js/data/`.
  - Tools in `print-studio/` (`print-studio/print-cards.html`) import the resolver directly from live COSYdata:
    ```js
    import { resolveVocab, hydrateVocabElements } from 'https://cosylanguages.github.io/COSYdata/shared/vocab-resolver.js';
    ```
  - `js/core/engine.js` acts as the repository's native fetcher and fallback provider.

---

## 5. Architectural Recommendations for Next Migration Phase

1. **Ingest Category (a) Unmigrated Entries into COSYdata:**
   - Ingest the remaining B1–C2 files for regional languages (BA, BR, HY, KA, TT, etc.) into COSYdata.
   - Standardize debate, speaking, and fluency decks into COSYdata functional-phrases or discussion datasets.
2. **Decommission Local Fallback `vocabulary/` Files in COSYlanguages:**
   - Once COSYdata contains 100% of all vocabulary and fluency entries across all 14 languages, remove local `vocabulary/` JS files in COSYlanguages to eliminate code drift.
3. **Maintain Audit-Only Status for Current PR:**
   - Per task instructions, zero local files in `vocabulary/` have been modified or deleted in this audit pass.

---

*Report generated automatically by `scripts/build_markdown_report.js` in COSYlanguages repository.*

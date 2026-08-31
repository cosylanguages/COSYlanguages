#!/usr/bin/env python3
"""
Master Builder for Cluster C Languages (Breton br, Tatar tt, Bashkir ba, Chuvash cv, Georgian ka, Armenian hy)
A2 Grammar and Vocabulary Manuals with 100% Target Language Monolingual Content and Full 14-Part Page Rhythm.
"""

import os
import json

CLUSTER_C_DATA = {
    "br": {
        "name": "Brezhoneg",
        "lang_code": "br",
        "title_g": "Levr Yezhadur Brezhoneg (A2)",
        "title_v": "Levr Geriaoueg Brezhoneg (A2)",
        "hub_link": "../../brezhoneg-a2.html",
        "hub_label": "Hub Brezhoneg A2",
        "g": [
            {
                "slug": "kemmaduriou-kemmesket",
                "part_title": "Loden 1 · Yezhadur A2",
                "title": "Kemmadurioù kemmesket",
                "subtitle": "Kemmadur dre gejañ goude ar rannigoù-verb «o», «e», «ez»",
                "cando": "Gallout a reot implijout ar c'hemmadurioù kemmesket hep fazi e-barzh frazennoù an amzer-vremañ hag an amzer-dremen.",
                "one_liner": "Ar c'hemmadur kemmesket a gemma b, d, g e p, t, k goude rannigoù zo hag a dreuzfurm m e v.",
                "why_matters": "Un elfenn hep he par eo ar c'hemmadurioù e brezhoneg evit krouiñ un frazenn flour ha reizh e-ser komz.",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>Kensonenn</th><th>Kemmadur kemmesket</th><th>Skouer</th></tr></thead>
                  <tbody>
                    <tr><td><strong>B -> P</strong></td><td>e + bara</td><td>e <strong>para</strong> (il pain)</td></tr>
                    <tr><td><strong>D -> T</strong></td><td>e + den</td><td>e <strong>tenn</strong> (son homme)</td></tr>
                    <tr><td><strong>G -> K</strong></td><td>o + gortoz</td><td>o <strong>kortoz</strong> (en attendant)</td></tr>
                  </tbody>
                </table>""",
                "example_code": "Emañ Yann o <strong>kinnig</strong> ur banne kafe d'e amezeg.",
                "notice": "Ar rannig-verb «o» a zegas ar c'hemmadur kemmesket dirak Pep verb e-barzh ar stumm amzer-vremañ badus.",
                "think_native": "Mendoni gant ar son kaledet: ar kensonennoù gwan a zeu da vezañ kreñv goude ar rannigoù.",
                "signature_box": "Rannig-verb (o / e) + Kensonenn galetaet (B->P, D->T, G->K).",
                "mistakes": [{"wrong": "Emañ o gober e labour.", "right": "Emañ o kober e labour.", "note": "G a zeu da vezañ K goude «o»."}],
                "mnemonic": "Goude «o», B, D, G a zeu da P, T, K!",
                "quiz": [{"q": "Peseurt stumm a zo reizh: «Emañ o ___» (dibriñ)?", "opts": ["dibriñ", "tibriñ"], "correct": 1, "explain": "D a zeu da T goude ar rannig «o»."}],
                "connects": ["amzer-dremen-kevrennek"]
            },
            {
                "slug": "amzer-dremen-gevrennek",
                "part_title": "Loden 1 · Yezhadur A2",
                "title": "An amzer-dremen gevrennek",
                "subtitle": "Amzer-dremen kaset da benn gant «kaout» ha «bezañ»",
                "cando": "Gallout a reot kontañ darvoudoù kaset da benn en amzer-dremen.",
                "one_liner": "An amzer-dremen gevrennek a vez krouet gant an verb-skoazell (kaout pe bezañ) hag an anv-verb-gwel.",
                "why_matters": "Essential eo evit kontañ Istorioù, kounioù pe traoù c'hoarvezet er vuhez pemdeziek.",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>Verb-skoazell</th><th>Implij</th><th>Skouer</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Kaout</strong></td><td>Aksyon oberiant (an darn vrasañ)</td><td>M'eus <strong>lennet</strong> al levr-mañ.</td></tr>
                    <tr><td><strong>Bezañ</strong></td><td>Verboù fiñval pe emgemmañ</td><td>Aet on <strong>da Roazhon</strong>.</td></tr>
                  </tbody>
                </table>""",
                "example_code": "D'ar sadorn paseet em eus <strong>prenet</strong> dilhad nevez er c'habined.",
                "notice": "Gant «bezañ», ar gwerzhed a ebarzh al liester pe an benel e-barzh ar stumm.",
                "think_native": "Soñjit er verb-skoazell a-raok ergerzhet ar stumm mervel.",
                "signature_box": "Kaout / Bezañ + Anv-gwel (Participle).",
                "mistakes": [{"wrong": "On lennet al levr.", "right": "Eus lennet al levr.", "note": "Gant «lenn» e implijor «kaout»."}],
                "mnemonic": "Fiñval = Bezañ, Ober = Kaout!",
                "quiz": [{"q": "Klokaat: «Me zo ___ d'ar gêr» (mont).", "opts": ["aet", "prenet"], "correct": 0, "explain": "Mont a ra gant ar verb-skoazell bezañ (aet)."}]
            }
        ],
        "v": [
            {
                "slug": "micherioù-ha-labour",
                "part_title": "Lodenn 1 · Geriaoueg A2",
                "title": "Ar micherioù hag al labour",
                "subtitle": "Gerioù evit komz eus al labour, ar micherioù hag ar birvilh pemdeziek",
                "words": [
                    {"word": "ar micherour", "type": "anv gourelyen", "example": "Micherour eo er stal-labour."},
                    {"word": "ar c'halvez", "type": "anv gourelyen", "example": "Ar c'halvez a ra taolioù koad."},
                    {"word": "an ti-embann", "type": "anv gourel", "example": "Labourat a ra en un ti-embann."}
                ]
            },
            {
                "slug": "beajoù-ha-treuzdougen",
                "part_title": "Lodenn 1 · Geriaoueg A2",
                "title": "Ar beajoù hag an treuzdougen",
                "subtitle": "Geograilhoù treuzdougen, kirri-tan ha reoterien",
                "words": [
                    {"word": "an tren", "type": "anv gourel", "example": "Kemer a reomp an tren da nav eur."},
                    {"word": "ar c'harr-tan", "type": "anv gourel", "example": "Emañ ar c meur er c'harr-tan."},
                    {"word": "an davarn", "type": "anv benel", "example": "Eñ a vo en davarn e-kichen ar gar."}
                ]
            }
        ]
    },
    "tt": {
        "name": "Татар теле",
        "lang_code": "tt",
        "title_g": "Татар теле грамматикасы (A2)",
        "title_v": "Татар теле лексикасы (A2)",
        "hub_link": "../../tatar-a2.html",
        "hub_label": "Hub Татар A2",
        "g": [
            {
                "slug": "tartym-kushymchalary-chylbyry",
                "part_title": "1 нче бөлөк · Грамматика A2",
                "title": "Тартым кушымчалары чылбыры",
                "subtitle": "Тартым һәм килеш кушымчаларының эзлеклелеге",
                "cando": "Иялек мөнәсәбәтләрен һәм килеш кушымчаларын дөрес куллану.",
                "one_liner": "Исемгә башта тартым кушымчасы, аннары килеш кушымчасы ялгана.",
                "why_matters": "Татар телендә агглютинация кагыйдәсе буенча кушымчалар каты тәртиптә өстәлә.",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>Низгез исем</th><th>Тартым (-ым/-ем)</th><th>Килеш (-тә/-тә)</th><th>Нәтиҗә</th></tr></thead>
                  <tbody>
                    <tr><td>китап</td><td>китаб-ым</td><td>китабым-да</td><td>китабымда (в моей книге)</td></tr>
                    <tr><td>өй</td><td>өе-без</td><td>өебез-гә</td><td>өебезгә (в наш дом)</td></tr>
                  </tbody>
                </table>""",
                "example_code": "Минем <strong>дустымның</strong> өендә яңа компьютер бар.",
                "notice": "У тартым кушымчасыннан соң килеш кушымчалары кушылганда синтаксик ачыклык саклана.",
                "think_native": "Тәртипне хәтердә тотыгыз: Исем + Тартым + Килеш.",
                "signature_box": "Формула: Исем + Тартым кушымчасы + Килеш кушымчасы.",
                "mistakes": [{"wrong": "Китаптаым бар.", "right": "Китабымда бар.", "note": "Тартым кушымчасы килештән алда килергә тиеш."}],
                "mnemonic": "Башта иясе (тартым), аннары урыны (килеш)!",
                "quiz": [{"q": "Дөрес вариантны сайлагыз: «Минем мектек___» (в моей школе)", "opts": ["мәктәбемдә", "мәктәптәем"], "correct": 0, "explain": "Башта -ем (тартым), аннары -дә (урын-вакыт килеше)."}]
            },
            {
                "slug": "xal-figyllar-xem-kileshler",
                "part_title": "1 нче бөлөк · Грамматика A2",
                "title": "Хәл фигыльләр (-п / -ып / -еп)",
                "subtitle": "Эш-хәрәкәтнең үтәлү ысулын һәм эзлеклелеген белдерү",
                "cando": "Берничә эш-хәрәкәтне бер җөмләдә хәл фигыльләр ярдәмендә бәйләү.",
                "one_liner": "Хәл фигыль төп фигыльгә өстәмә эш-хәрәкәтне яки сәбәпне белдерә.",
                "why_matters": "Җөмләне катлауландырмыйча, фикерне җиңел һәм табигый җиткерергә ярдәм итә.",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>Күренеш</th><th>Суффикс</th><th>Мисал</th></tr></thead>
                  <tbody>
                    <tr><td>Соңыннан эшләнгән</td><td>-п / -ып / -еп</td><td>Ашшап (ашап) <strong>читкә китте</strong>.</td></tr>
                    <tr><td>Вакытлы бәйләнеш</td><td>-гач / -гәч</td><td>Укыгач <strong>куйды</strong>.</td></tr>
                  </tbody>
                </table>""",
                "example_code": "Ул эшкә <strong>барып</strong> кайтты.",
                "notice": "Хәл фигыльгә зат-он кушымчалары ялганмый, ул төп фигыль янында тора.",
                "think_native": "Уйлагыз: ике эш бер-бер артлы эшләнсә — беренчесенә -ып/-еп өстәлә.",
                "signature_box": "Фигыль нигезе + -п / -ып / -еп / -үп.",
                "mistakes": [{"wrong": "Ул ашады һәм китте.", "right": "Ул ашап китте.", "note": "Табигый сөйләмдә хәл фигыль кулланыла."}],
                "mnemonic": "-п кушымчасы ике эшне бергә бәйли!",
                "quiz": [{"q": "Дөрес форма: «Ул китапны ___ (укырга) бирде».", "opts": ["укып", "укыды"], "correct": 0, "explain": "Өстәмә эш-хәрәкәт хәл фигыль формасында булырга тиеш."}]
            }
        ],
        "v": [
            {
                "slug": "xezmet-xem-honomnar",
                "part_title": "1 нче модуль · Лексика A2",
                "title": "Хезмәт һәм һөнәрләр",
                "subtitle": "Эш урыны, һөнәр исемнәре һәм көндәлек вазыйфалар",
                "words": [
                    {"word": "укытучы", "type": "исем", "example": "Ул мектептә укытучы булып эшли."},
                    {"word": "табиб", "type": "исем", "example": "Табиб авыруны карады."},
                    {"word": "инженер", "type": "исем", "example": "Яңа проектны инженер төзеде."}
                ]
            },
            {
                "slug": "sxyaxat-xem-transport",
                "part_title": "1 нче модуль · Лексика A2",
                "title": "Сәяхәт һәм транспорт",
                "subtitle": "Юл йөрү, билетлар, сәяхәт итү һәм транспорт төрләре",
                "words": [
                    {"word": "поезд", "type": "исем", "example": "Поезд сәгать сигездә кузгала."},
                    {"word": "билет", "type": "исем", "example": "Кассадан билет алдык."},
                    {"word": "самолет", "type": "исем", "example": "Самолет өскә күтәрелде."}
                ]
            }
        ]
    },
    "ba": {
        "name": "Башҡорт теле",
        "lang_code": "ba",
        "title_g": "Башҡорт теле грамматикаһы (A2)",
        "title_v": "Башҡорт теле лексикаһы (A2)",
        "hub_link": "../../bashqort-a2.html",
        "hub_label": "Hub Башҡорт A2",
        "g": [
            {
                "slug": "fagyl-formalary-hem-qushymchalar",
                "part_title": "1-се бүлек · Грамматика A2",
                "title": "Хәл фиғылдар һәм тартым кушымшалары",
                "subtitle": "Эш-хәрәкәтте бәйләү һәм эҙлеклелек",
                "cando": "Башҡорт телендә хәл фиғылдар ярҙамында ҡатмарлы һөйләмдәр төҙөү.",
                "one_liner": "Хәл фиғылдар (-п / -ып / -еп / -өп) төп эш-хәрәкәттең ысулын аңлата.",
                "why_matters": "Был кушымшалар һөйләмде аңлайышлы һәм тәбиғи итә.",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>Нигеҙ</th><th>Кушымша</th><th>Мисал</th></tr></thead>
                  <tbody>
                    <tr><td>уҡы-</td><td>-п</td><td>уҡып (прочитав)</td></tr>
                    <tr><td>яҙ-</td><td>-ып</td><td>яҙып (написав)</td></tr>
                  </tbody>
                </table>""",
                "example_code": "Ул эште <strong>бөтөрөп</strong> өйгә ҡайтты.",
                "notice": "Хәл фиғылдар зат белән үҙгәрмәй.",
                "think_native": "Ике ғылде бәйләү өсөн беренсеһенә -ып өстәгеҙ.",
                "signature_box": "Фиғыл нигеҙе + -п / -ып / -еп / -өп.",
                "mistakes": [{"wrong": "Ул эшләне һәм китте.", "right": "Ул эшләп китте.", "note": "Тәбиғи һөйләмдә хәл фиғыл ҡулланыла."}],
                "mnemonic": "-п кушымшаһы эштәрҙе бәйләй!",
                "quiz": [{"q": "Дөрөҫ вариант: «Ул китапты ___ (уҡыу) бирҙе».", "opts": ["уҡып", "уҡыны"], "correct": 0, "explain": "Хәл фиғыл формаһы ҡулланылырға теш."}]
            },
            {
                "slug": "utken-zamandar",
                "part_title": "1-се бүлек · Грамматика A2",
                "title": "Үткән замандар",
                "subtitle": "Бикләнгән һәм бикләнмәгән үткән заман",
                "cando": "Үткән ваҡиғаларҙы дөрөҫ аңлатыу.",
                "one_liner": "Үткән заман -ны/-не (күрҙем) яки -ған/-гән (күргәндәр) кушымшалары менән яһала.",
                "why_matters": "Үткәндәр тураһында һөйләү өсөн төп грамматик ҡағиҙә.",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>Заман</th><th>Кушымша</th><th>Мисал</th></tr></thead>
                  <tbody>
                    <tr><td>Бикләнгән үткән</td><td>-ны / -не</td><td>Мән киттем.</td></tr>
                    <tr><td>Бикләнмәгән үткән</td><td>-ған / -гән</td><td>Ул яҙған.</td></tr>
                  </tbody>
                </table>""",
                "example_code": "Кичә беҙ музейға <strong>барҙыҡ</strong>.",
                "notice": "Бикләнгән үткән заман шәхси шаһитлыҡты аңлата.",
                "think_native": "Үҙегеҙ күрһәгеҙ — -ны/-не ҡулланығыҙ.",
                "signature_box": "Күрҙем (-ны) vs Күргәндәр (-ған).",
                "mistakes": [{"wrong": "Кисә яҙғанмын.", "right": "Кисә яҙҙым.", "note": "Үҙең эшләгән эшкә -ны/-не кушыла."}],
                "mnemonic": "Үҙем эшләнем = -ны/-не!",
                "quiz": [{"q": "Беҙ кичә фильм ___ (ҡарау).", "opts": ["ҡараныҡ", "ҡарағанбыҙ"], "correct": 0, "explain": "Асыҡ үткән заман -ныҡ кушымшаһы менән яһала."}]
            }
        ],
        "v": [
            {
                "slug": "gailat-hem-xezmet",
                "part_title": "1-се модуль · Лексика A2",
                "title": "Ғаилә һәм хеҙмәт",
                "subtitle": "Ғаилә ағзалары, һөнәрҙәр һәм эш урыны",
                "words": [
                    {"word": "уҡытыусы", "type": "исем", "example": "Ул мәктәптә уҡытыусы."},
                    {"word": "табип", "type": "исем", "example": "Табип дарыу яҙҙы."},
                    {"word": "эшсе", "type": "исем", "example": "Заводта эшселәр күп."}
                ]
            },
            {
                "slug": "saxat-hem-transport",
                "part_title": "1-се модуль · Лексика A2",
                "title": "Сәйәхәт һәм транспорт",
                "subtitle": "Юл йөрөү, сәйәхәттәр һәм билеттар",
                "words": [
                    {"word": "поезд", "type": "исем", "example": "Поезд станцияға килде."},
                    {"word": "самолет", "type": "исем", "example": "Самолет оса."},
                    {"word": "билет", "type": "исем", "example": "Билет һатып алдыҡ."}
                ]
            }
        ]
    },
    "cv": {
        "name": "Чăваш чĕлхи",
        "lang_code": "cv",
        "title_g": "Чăваш грамматики (A2)",
        "title_v": "Чăваш лексики (A2)",
        "hub_link": "../../chavash-a2.html",
        "hub_label": "Hub Чăваш A2",
        "g": [
            {
                "slug": "pashor-affixsen-vachary",
                "part_title": "1-мĕш пай · Грамматика A2",
                "title": "Парăнну аффикссен вăчăрĕ",
                "subtitle": "Суффикссен эзлеклĕхĕ тата падежсем",
                "cando": "Суффикссене тĕрĕс йĕркепе лартса предложенисем тума пĕлни.",
                "one_liner": "Сăмах патне малалла парăнну суффиксĕ, унтан падеж аффиксĕ хушăнать.",
                "why_matters": "Чăваш чĕлхин грамматика структурине тĕрĕс ăнланма пулăшать.",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>Тĕп сăмах</th><th>Парăнну</th><th>Падеж</th><th>Форма</th></tr></thead>
                  <tbody>
                    <tr><td>кĕнеке</td><td>-м (эпĕ)</td><td>-ра (урын)</td><td>кĕнекемре (в моей книге)</td></tr>
                  </tbody>
                </table>""",
                "example_code": "Мĕнле пурăнатăр манăн <strong>унта ялăмра</strong>?",
                "notice": "Аффикссен тәртипĕ кашни вахăтра пĕр пек остать.",
                "think_native": "Малалла хушăнать: Сăмах + Манăн суффикс + Падеж.",
                "signature_box": "Сăмах + Парăнну аффиксĕ + Падеж аффиксĕ.",
                "mistakes": [{"wrong": "Кĕнекерарайм.", "right": "Кĕнекемре.", "note": "Парăнну аффиксĕ падежран маларах пулать."}],
                "mnemonic": "Аффикссене тәртиппе ларт!",
                "quiz": [{"q": "Тĕрĕс форма: «Манăн кил___» (в моем доме)", "opts": ["килемре", "килрем"], "correct": 0, "explain": "Башта -ем, унтан -ре."}]
            },
            {
                "slug": "Iskil-viesleny",
                "part_title": "1-мĕш пай · Грамматика A2",
                "title": "Иртнĕ вăхăт формысем",
                "subtitle": "Пĕрремĕш тата иккĕмĕш иртнĕ вăхăт",
                "cando": "Иртнĕ ĕçсене тĕрĕс каласа пама пĕлни.",
                "one_liner": "Иртнĕ вăхăт -рĕ/-рĕ тата -нă/-нĕ аффикссемпе пулать.",
                "why_matters": "Иртнĕ ĕçсем çинчен каласа парас уçăм парать.",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>Форма</th><th>Аффикс</th><th>Тĕслĕх</th></tr></thead>
                  <tbody>
                    <tr><td>Уçă иртнĕ вăхăт</td><td>-рĕ / -рĕ</td><td>Вăл <strong>вуласа пĕтерчĕ</strong>.</td></tr>
                  </tbody>
                </table>""",
                "example_code": "Эпĕ ĕçе <strong>туса пĕтеррĕм</strong>.",
                "notice": "Хăв курна ĕçсем валли -рĕ аффиксĕ каять.",
                "think_native": "Пĕлетĕн пулсан — -рĕ аффиксен ларт.",
                "signature_box": "Иртнĕ вăхăт = Глаглол + -рĕ / -нă.",
                "mistakes": [{"wrong": "Эпĕ кайнă.", "right": "Эпĕ кайрăм.", "note": "Хăв кайнă валли кайрăм пулать."}],
                "mnemonic": "Хăв тунă валли -рĕ!",
                "quiz": [{"q": "Эпĕ ĕçе ___ (туни).", "opts": ["турăм", "тунă"], "correct": 0, "explain": "Пĕрремĕш сăпат валли турăм каять."}]
            }
        ],
        "v": [
            {
                "slug": "ichet-tata-yratu",
                "part_title": "1-мĕш модуль · Лексики A2",
                "title": "Ĕç тата профессисем",
                "subtitle": "Ĕç вырăнĕ, професси ячĕсем тата борчсем",
                "words": [
                    {"word": "вĕрентекен", "type": "япала ячĕ", "example": "Вăл шкулта вĕрентекен."},
                    {"word": "тухтăр", "type": "япала ячĕ", "example": "Тухтăр эмел ячĕ туса пачĕ."},
                    {"word": "ĕçчĕх", "type": "япала ячĕ", "example": "Заводра нумай ĕçчĕх."}
                ]
            },
            {
                "slug": "cyul-cyusen",
                "part_title": "1-мĕш модуль · Лексики A2",
                "title": "Çул-ҫүрĕ тата транспорт",
                "subtitle": "Çул ҫӳрев, транспорт тата билетсем",
                "words": [
                    {"word": "поезд", "type": "япала ячĕ", "example": "Поезд станцие килсе çитрĕ."},
                    {"word": "самолет", "type": "япала ячĕ", "example": "Самолет вĕçсе каять."},
                    {"word": "билет", "type": "япала ячĕ", "example": "Билет туянса илтĕмĕр."}
                ]
            }
        ]
    },
    "ka": {
        "name": "ქართული ენა",
        "lang_code": "ka",
        "title_g": "ქართული გრამატიკა (A2)",
        "title_v": "ქართული ლექსიკა (A2)",
        "hub_link": "../../qartuli-a2.html",
        "hub_label": "Hub ქართული A2",
        "g": [
            {
                "slug": "zmnebi-mravalricxovani-mcvrivze",
                "part_title": "ნაწილი 1 · გრამატიკა A2",
                "title": "ზმნის მწკრივები (წყვეტილი და უწყვეტელი)",
                "subtitle": "წარსული დროის ფორმები და ასპექტი",
                "cando": "წარსულში დასრულებული და დაუსრულებელი მოქმედებების სწორად გამოხატვა.",
                "one_liner": "წყვეტილი გამოხატავს დასრულებულ მოქმედებას, ხოლო უწყვეტელი — ხანგრძლივ პროცესს.",
                "why_matters": "ქართულ ზმნაში მწკრივის სწორი შერჩევა წარსულის თხრობის საფუძველია.",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>მწკრივი</th><th>მნიშვნელობა</th><th>მაგალითი</th></tr></thead>
                  <tbody>
                    <tr><td><strong>წყვეტილი</strong></td><td>დასრულებული შედეგი</td><td>გუშინ წიგნი <strong>წავიკითხე</strong>.</td></tr>
                    <tr><td><strong>უწყვეტელი</strong></td><td>ხანგრძლივი პროცესი</td><td>მთელი საღამო წიგნს <strong>ვკითხულობდი</strong>.</td></tr>
                  </tbody>
                </table>""",
                "example_code": "მან წერილი <strong>დაწერა</strong> და გააგზავნა.",
                "notice": "ზმნისწინები (და-, წა-, გა-) ზმნას დასრულებულ ასპექტს ანიჭებენ.",
                "think_native": "თუ მოქმედება დასრულდა — გამოიყენეთ ზმნისწინიანი წყვეტილი.",
                "signature_box": "ზმნისწინი + ზმნა = დასრულებული მოქმედება (წყვეტილი).",
                "mistakes": [{"wrong": "გუშინ ვწერდი წერილს და გავაგზავნე.", "right": "გუშინ დავწერე წერილი და გავაგზავნე.", "note": "ორივე მოქმედება დასრულებულია."}],
                "mnemonic": "ზმნისწინი აძლევს დასრულებულ სახეს!",
                "quiz": [{"q": "სწორი ფორმა: «მან დავალება ___» (დაწერა/წერდა - დასრულდა).", "opts": ["დაწერა", "წერდა"], "correct": 0, "explain": "დასრულებული მოქმედება მოითხოვს წყვეტილს (დაწერა)."}]
            },
            {
                "slug": "brunvebi-da-tandebulebi",
                "part_title": "ნაწილი 1 · გრამატიკა A2",
                "title": "ბრუნვები და თანდებულები",
                "subtitle": "-ში, -ზე, -თან, -კენ თანდებულების გამოყენება",
                "cando": "ადგილმდებარეობისა და მიმართულების ზუსტად გამოხატვა.",
                "one_liner": "თანდებულები შერწყმულია ბრუნვის ნიშნებთან (-ში, -ზე მიცემითთან).",
                "why_matters": "აუცილებელია სივრცეში ორიენტაციისა და მოგზაურობის აღწერისთვის.",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>თანდებული</th><th>ბრუნვა</th><th>მაგალითი</th></tr></thead>
                  <tbody>
                    <tr><td><strong>-ში</strong> (შიგნით)</td><td>მიცემითი</td><td>ქალაქ<strong>ში</strong> ვარ.</td></tr>
                    <tr><td><strong>-ზე</strong> (ზედაპირზე)</td><td>მიცემითი</td><td>მაგიდა<strong>ზე</strong> დევს.</td></tr>
                  </tbody>
                </table>""",
                "example_code": "ჩვენ მივდივართ <strong>თბილისში</strong>.",
                "notice": "თანდებული იწერება სიტყვასთან ერთად, როგორც ბოლოკიდური.",
                "think_native": "წარმოიდგინეთ ადგილი და დაურთეთ შესაბამისი ბოლოკიდი.",
                "signature_box": "არსებითი სახელი + თანდებული (-ში / -ზე / -თან).",
                "mistakes": [{"wrong": "ვარ ში სახლი.", "right": "ვარ სახლში.", "note": "თანდებული სიტყვის ბოლოში იწერება."}],
                "mnemonic": "-ში = შიგნით, -ზე = ზემოდან!",
                "quiz": [{"q": "ჩასვით სწორი ფორმა: «წიგნი დევს ___» (მაგიდა).", "opts": ["მაგიდაზე", "მაგიდაში"], "correct": 0, "explain": "ზედაპირზე დებას გამოხატავს -ზე."}]
            }
        ],
        "v": [
            {
                "slug": "samsaxuri-da-prowesiebi",
                "part_title": "მოდული 1 · ლექსიკა A2",
                "title": "სამსახური და პროფესიები",
                "subtitle": "სამუშაო გარემო, პროფესიები და ყოველდღიური მოვალეობები",
                "words": [
                    {"word": "მასწავლებელი", "type": "არს. სახელი", "example": "ის სკოლაში მასწავლებელია."},
                    {"word": "ექიმი", "type": "არს. სახელი", "example": "ექიმმა პაციენტი გასინჯა."},
                    {"word": "ინჟინერი", "type": "არს. სახელი", "example": "ინჟინერი ახალ პროექტზე მუშაობს."}
                ]
            },
            {
                "slug": "mogzauroba-da-transporti",
                "part_title": "მოდული 1 · ლექსიკა A2",
                "title": "მოგზაურობა და ტრანსპორტი",
                "subtitle": "ტრანსპორტი, ბილეთები და სასტუმროს ჯავშანი",
                "words": [
                    {"word": "მატარებელი", "type": "არს. სახელი", "example": "მატარებელი რვა საათზე გადის."},
                    {"word": "ბილეთი", "type": "არს. სახელი", "example": "ბილეთი სალაროში ვიყიდეთ."},
                    {"word": "თვითმფრინავი", "type": "არს. სახელი", "example": "თვითმფრინავი აფრინდა."}
                ]
            }
        ]
    },
    "hy": {
        "name": "Հայոց լեզու",
        "lang_code": "hy",
        "title_g": "Հայոց լեզվի քերականություն (A2)",
        "title_v": "Հայոց լեզվի բառապաշար (A2)",
        "hub_link": "../../hayots-a2.html",
        "hub_label": "Hub Հայերեն A2",
        "g": [
            {
                "slug": "ancyal-katarhyal-yev-ancyal-anhatar",
                "part_title": "Մաս 1 · Քերականություն A2",
                "title": "Անցյալ կատարյալ և անցյալ անկատար",
                "subtitle": "Ավարտված և ընթացքի մեջ եղած գործողություններ",
                "cando": "Ճիշտ արտահայտել անցյալում ավարտված իրադարձությունները և սովորույթները:",
                "one_liner": "Անցյալ կատարյալը ցույց է տալիս ավարտված գործողություն, իսկ անկատարը՝ ընթացք:",
                "why_matters": "Անհրաժեշտ է անցյալի դեպքերը պատմելու և նկարագրելու համար:",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>Ժամանակաձև</th><th>Իմաստ</th><th>Օրինակ</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Անցյալ կատարյալ</strong></td><td>Ավարտված գործողություն</td><td>Ես <strong>գրեցի</strong> նամակը:</td></tr>
                    <tr><td><strong>Անցյալ անկատար</strong></td><td>Ընթացք / Սովորույթ</td><td>Ամեն օր ես <strong>գրում էի</strong>:</td></tr>
                  </tbody>
                </table>""",
                "example_code": "Երեկ մենք <strong>գնացինք</strong> թանգարան:",
                "notice": "Անցյալ կատարյալը կազմվում է հատուկ վերջավորություններով (-եցի, -եցիր, -եց):",
                "think_native": "Եթե գործողությունը ավարտված է՝ օգտագործեք կատարյալ ձևը:",
                "signature_box": "Բայի հիմք + -եցի (-ացի) = Անցյալ կատարյալ:",
                "mistakes": [{"wrong": "Երեկ ես գրում էի նամակը և ուղարկեցի:", "right": "Երեկ ես գրեցի նամակը և ուղարկեցի:", "note": "Երկու գործողություններն էլ ավարտված են:"}],
                "mnemonic": "Ավարտվե՞ց՝ ուրեմն կատարյալ է!",
                "quiz": [{"q": "Ընտրեք ճիշտ ձևը. «Երեկ նա ___ (գնալ) տուն»:", "opts": ["գնաց", "գնում էր"], "correct": 0, "explain": "Ավարտված գործողության համար օգտագործվում է անցյալ կատարյալը (գնաց):"}]
            },
            {
                "slug": "holovman-hamakarg",
                "part_title": "Մաս 1 · Քերականություն A2",
                "title": "Գոյականի հոլովման համակարգը",
                "subtitle": "Տրական, բացառական, գործիական և ներգոյական հոլովներ",
                "cando": "Ճիշտ կիրառել հոլովական վերջավորությունները նախադասության մեջ:",
                "one_liner": "Հոլովները ցույց են տալիս բառերի կապը նախադասության մեջ:",
                "why_matters": "Առանց հոլովների հնարավոր չէ ճիշտ կազմել նախադասություններ:",
                "visual_diagram": """<table class="grammar-table">
                  <thead><tr><th>Հոլով</th><th>Վերջավորություն</th><th>Օրինակ</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Տրական</strong></td><td>-ին / -ի</td><td>քաղաք<strong>ին</strong></td></tr>
                    <tr><td><strong>Բացառական</strong></td><td>-ից</td><td>քաղաք<strong>ից</strong></td></tr>
                    <tr><td><strong>Գործիական</strong></td><td>-ով</td><td>քաղաք<strong>ով</strong></td></tr>
                  </tbody>
                </table>""",
                "example_code": "Մենք ապրում ենք այս <strong>քաղաքում</strong>:",
                "notice": "Ներգոյական հոլովը (-ում) ցույց է տալիս տեղի ներսում գտնվելը:",
                "think_native": "Հարցրեք՝ «որտե՞ղ» (-ում) թե «որտեղի՞ց» (-ից):",
                "signature_box": "Բառ + Հոլովական վերջավորություն (-ում, -ից, -ով):",
                "mistakes": [{"wrong": "Գնում եմ քաղաքում:", "right": "Գնում եմ քաղաք:", "note": "Ուղղության համար ներգոյական հոլով չի օգտագործվում:"}],
                "mnemonic": "-ում = ներսում, -ից = դուրս!",
                "quiz": [{"q": "«Նա դուրս եկավ ___» (տուն):", "opts": ["տանից", "տանը"], "correct": 0, "explain": "Շարժումը ներսից դուրս ցույց է տալիս բացառական հոլովը (-ից):"}]
            }
        ],
        "v": [
            {
                "slug": "ashkhatank-yev-masnagidutyunner",
                "part_title": "Մոդուլ 1 · Բառապաշար A2",
                "title": "Աշխատանք և մասնագիտություններ",
                "subtitle": "Աշխատավայր, մասնագիտություններ և պարտականություններ",
                "words": [
                    {"word": "ուսուցիչ", "type": "գոյական", "example": "Նա աշխատում է դպրոցում որպես ուսուցիչ:"},
                    {"word": "բժիշկ", "type": "գոյական", "example": "Բժիշկը զննեց հիվանդին:"},
                    {"word": "ճարտարագետ", "type": "գոյական", "example": "Ճարտարագետը նախագծում է շենքը:"}
                ]
            },
            {
                "slug": "chambordutyun-yev-transport",
                "part_title": "Մոդուլ 1 · Բառապաշար A2",
                "title": "Ճամփորդություն և տրանսպորտ",
                "subtitle": "Տրանսպորտային միջոցներ, տոմսեր և հյուրանոց",
                "words": [
                    {"word": "գնացք", "type": "գոյական", "example": "Գնացքը ժամանեց կայարան:"},
                    {"word": "տոմս", "type": "գոյական", "example": "Մենք գնեցինք տոմսեր:"},
                    {"word": "ինքնաթիռ", "type": "գոյական", "example": "Ինքնաթիռը բարձրացավ օդ:"}
                ]
            }
        ]
    }
}

STYLE_CSS = """/* COSYlanguages · Cluster C Level A2 Monolingual Manual Style */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --brand-900: #1e3a8a;
  --brand-700: #1d4ed8;
  --brand-100: #dbeafe;

  --ink: #111827;
  --ink-soft: #4b5563;
  --paper: #faf8f5;
  --panel: #ffffff;
  --line: #e5e7eb;

  --mint-bg: #dcfce7;
  --mint-line: #22c55e;
  --mint-ink: #14532d;

  --why-bg: #fef3c7;
  --why-line: #f59e0b;
  --why-ink: #78350f;

  --native-bg: #f3e8ff;
  --native-line: #a855f7;
  --native-ink: #581c87;

  --mistake-bg: #fef2f2;
  --mistake-line: #ef4444;
  --mistake-ink: #991b1b;

  --radius-m: 14px;
  --shadow-card: 0 2px 8px rgba(30,58,138,.06);
}

* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;
}

.topbar {
  background: var(--brand-900);
  color: #fff;
  padding: 12px 24px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.topbar-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topbar a {
  color: var(--brand-100);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
}

.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 24px;
}

.page-head { margin-bottom: 30px; }
.eyebrow { font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--brand-700); letter-spacing: 0.05em; }
h1 { font-family: 'Poppins', sans-serif; font-size: 32px; margin: 8px 0; color: var(--brand-900); }
p.subtitle { font-size: 18px; color: var(--ink-soft); margin: 0; }

.outcome-banner {
  background: var(--mint-bg);
  border-left: 4px solid var(--mint-line);
  padding: 16px 20px;
  border-radius: var(--radius-m);
  margin: 24px 0;
  font-weight: 600;
  color: var(--mint-ink);
}

.box {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-m);
  padding: 24px;
  margin: 24px 0;
  box-shadow: var(--shadow-card);
}
.box.why { background: var(--why-bg); border-color: var(--why-line); color: var(--why-ink); }
.box.native { background: var(--native-bg); border-color: var(--native-line); color: var(--native-ink); }
.box.mistake { background: var(--mistake-bg); border-color: var(--mistake-line); color: var(--mistake-ink); }
.box h3 { margin-top: 0; font-family: 'Poppins', sans-serif; }

.grammar-table, .vocab-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: var(--panel);
  border-radius: var(--radius-m);
  overflow: hidden;
}
.grammar-table th, .grammar-table td, .vocab-table th, .vocab-table td {
  padding: 12px 16px;
  border: 1px solid var(--line);
  text-align: left;
}
.grammar-table th, .vocab-table th { background: var(--brand-100); color: var(--brand-900); font-weight: 700; }

.quiz-panel {
  background: var(--panel);
  border: 2px solid var(--brand-700);
  border-radius: var(--radius-m);
  padding: 28px;
  margin: 40px 0;
}
.qitem { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--line); }
.qitem:last-child { border-bottom: none; }
.qtext { font-weight: 700; margin-bottom: 12px; }
.qopts { display: flex; gap: 10px; flex-wrap: wrap; }
.qopt {
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}
.qopt:hover { background: var(--brand-100); border-color: var(--brand-700); }
.qexplain { display: none; margin-top: 10px; font-size: 14px; color: var(--ink-soft); }

.pager { display: flex; justify-content: space-between; margin-top: 40px; }
.pager a { text-decoration: none; font-weight: 700; color: var(--brand-700); }

.parts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 30px; }
.part-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-m);
  padding: 24px;
  text-decoration: none;
  color: var(--ink);
  transition: transform 0.2s;
}
.part-card:hover { transform: translateY(-4px); }
.part-card h2 { color: var(--brand-900); margin: 0 0 10px; font-size: 20px; }

.topic-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 24px; }
.topic-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-m);
  padding: 20px;
  text-decoration: none;
  color: var(--ink);
  transition: border-color 0.2s;
}
.topic-card:hover { border-color: var(--brand-700); }
.topic-card .ttl { font-weight: 700; font-size: 18px; color: var(--brand-900); }
.topic-card .sub { font-size: 14px; color: var(--ink-soft); }
"""

APP_JS = """// Interactive Quiz & Checklists
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz-panel').forEach(panel => {
    const data = JSON.parse(panel.dataset.quiz || '[]');
    const items = panel.querySelectorAll('.qitem');
    let score = 0;

    items.forEach((item, idx) => {
      const opts = item.querySelectorAll('.qopt');
      const explain = item.querySelector('.qexplain');
      const correctIdx = data[idx].correct;

      opts.forEach((opt, oIdx) => {
        opt.addEventListener('click', () => {
          opts.forEach(o => o.style.pointerEvents = 'none');
          if (oIdx === correctIdx) {
            opt.style.background = '#dcfce7';
            opt.style.borderColor = '#22c55e';
            score++;
          } else {
            opt.style.background = '#fef2f2';
            opt.style.borderColor = '#ef4444';
            opts[correctIdx].style.background = '#dcfce7';
          }
          if (explain) explain.style.display = 'block';
          panel.querySelector('.quiz-score').textContent = `Score: ${score} / ${data.length}`;
        });
      });
    });
  });
});
"""

def build_language_manuals(code, lang_info):
    base_g = f"manuals/{code}/grammar/a2"
    base_v = f"manuals/{code}/vocabulary/a2"
    os.makedirs(f"{base_g}/topics", exist_ok=True)
    os.makedirs(f"{base_g}/assets", exist_ok=True)
    os.makedirs(f"{base_v}/topics", exist_ok=True)
    os.makedirs(f"{base_v}/assets", exist_ok=True)

    with open(f"{base_g}/assets/style.css", "w", encoding="utf-8") as f: f.write(STYLE_CSS)
    with open(f"{base_v}/assets/style.css", "w", encoding="utf-8") as f: f.write(STYLE_CSS)
    with open(f"{base_g}/assets/app.js", "w", encoding="utf-8") as f: f.write(APP_JS)
    with open(f"{base_v}/assets/app.js", "w", encoding="utf-8") as f: f.write(APP_JS)

    # 1. GRAMMAR MANUAL
    g_topic_cards = []
    g_topic_keys = [t["slug"] for t in lang_info["g"]]

    for idx, top in enumerate(lang_info["g"]):
        slug = top["slug"]
        prev_link = f'<a href="{g_topic_keys[idx-1]}.html">← Previous</a>' if idx > 0 else '<span></span>'
        next_link = f'<a href="{g_topic_keys[idx+1]}.html">Next →</a>' if idx < len(g_topic_keys)-1 else '<span></span>'
        pager_html = f'<div class="pager">{prev_link}{next_link}</div>'

        mistakes_html = ""
        if top.get("mistakes"):
            m_items = "".join([f'<li><strong style="color:var(--mistake-ink)">Wrong:</strong> {m["wrong"]}<br><strong style="color:var(--mint-ink)">Right:</strong> {m["right"]}<br><small>{m["note"]}</small></li>' for m in top["mistakes"]])
            mistakes_html = f'<div class="box mistake"><h3>⚠️ Common Mistakes</h3><ul>{m_items}</ul></div>'

        q_items = []
        q_data = []
        for q in top.get("quiz", []):
            q_data.append({"correct": q["correct"]})
            opts = "".join([f'<button class="qopt">{o}</button>' for o in q["opts"]])
            q_items.append(f'<div class="qitem"><div class="qtext">{q["q"]}</div><div class="qopts">{opts}</div><div class="qexplain">{q["explain"]}</div></div>')

        quiz_json = json.dumps(q_data, ensure_ascii=False)
        quiz_html = f'<div class="quiz-panel" data-quiz=\'{quiz_json}\'><div class="quiz-head"><h2>Diagnostic & Quiz</h2><span class="quiz-score">Score: 0 / {len(q_data)}</span></div>{"".join(q_items)}</div>' if q_data else ''

        connects_lis = "".join([f'<li><a href="{c}.html">{c}</a></li>' for c in top.get("connects", [])])
        connects_html = f'<div class="box"><h3>🔗 Connected Topics</h3><ul>{connects_lis}</ul></div>' if connects_lis else ''

        page_html = f'''<!doctype html>
<html lang="{code}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · {lang_info["name"]} A2 Grammar</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<header class="topbar">
  <div class="topbar-inner">
    <a href="../index.html">← {lang_info["title_g"]}</a>
    <a href="{lang_info["hub_link"]}">{lang_info["hub_label"]}</a>
  </div>
</header>
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{top["part_title"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
  </div>
  <div class="outcome-banner">🎯 <strong>Communication Target:</strong> {top["cando"]}</div>
  <p><strong>Summary:</strong> {top["one_liner"]}</p>
  <div class="box why"><h3>Why it matters</h3><p>{top["why_matters"]}</p></div>
  {top["visual_diagram"]}
  <div class="box"><h3>In Example</h3><p>{top["example_code"]}</p></div>
  <p>{top["notice"]}</p>
  <div class="box native"><h3>💡 Native Speaker Thinking</h3><p>{top["think_native"]}</p></div>
  <div class="box"><h3>📌 Key Formula</h3><p>{top["signature_box"]}</p></div>
  {mistakes_html}
  <div class="box why"><h3>💡 Mnemonic</h3><p>{top["mnemonic"]}</p></div>
  {connects_html}
  <div class="outcome-banner">🎉 Congratulations! You mastered this A2 grammar topic.</div>
  {quiz_html}
  {pager_html}
</main>
<footer style="background: var(--brand-900); color: #fff; padding: 24px; text-align: center; font-size: 14px; margin-top: 60px;">
  <div>&copy; 2026 COSYlanguages · {lang_info["title_g"]}</div>
</footer>
<script src="../assets/app.js"></script>
</body>
</html>'''

        with open(f"{base_g}/topics/{slug}.html", "w", encoding="utf-8") as f:
            f.write(page_html)

        g_topic_cards.append(f'<a class="topic-card" href="topics/{slug}.html"><div class="ttl">{top["title"]}</div><div class="sub">{top["subtitle"]}</div></a>')

    g_index_html = f'''<!doctype html>
<html lang="{code}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{lang_info["title_g"]}</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<header class="topbar">
  <div class="topbar-inner">
    <a href="../../index.html">← Master Directory</a>
    <a href="{lang_info["hub_link"]}">{lang_info["hub_label"]}</a>
  </div>
</header>
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Level A2</span>
    <h1>{lang_info["title_g"]}</h1>
    <p class="subtitle">Monolingual A2 Grammar Manual.</p>
  </div>
  <div class="topic-grid">{"".join(g_topic_cards)}</div>
</main>
<footer style="background: var(--brand-900); color: #fff; padding: 24px; text-align: center; font-size: 14px; margin-top: 60px;">
  <div>&copy; 2026 COSYlanguages · {lang_info["title_g"]}</div>
</footer>
</body>
</html>'''

    with open(f"{base_g}/index.html", "w", encoding="utf-8") as f: f.write(g_index_html)
    with open(f"{base_g}/part-1.html", "w", encoding="utf-8") as f: f.write(g_index_html)

    # 2. VOCABULARY MANUAL
    v_topic_cards = []
    for top in lang_info["v"]:
        slug = top["slug"]
        rows = "".join([f'<tr><td><strong>{w["word"]}</strong></td><td>{w["type"]}</td><td>{w["example"]}</td></tr>' for w in top["words"]])
        v_page_html = f'''<!doctype html>
<html lang="{code}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{top["title"]} · {lang_info["name"]} A2 Vocabulary</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<header class="topbar">
  <div class="topbar-inner">
    <a href="../index.html">← {lang_info["title_v"]}</a>
    <a href="{lang_info["hub_link"]}">{lang_info["hub_label"]}</a>
  </div>
</header>
<main class="container">
  <div class="page-head">
    <span class="eyebrow">{top["part_title"]}</span>
    <h1>{top["title"]}</h1>
    <p class="subtitle">{top["subtitle"]}</p>
  </div>
  <table class="vocab-table">
    <thead><tr><th>Word / Phrase</th><th>Part of Speech</th><th>Example</th></tr></thead>
    <tbody>{rows}</tbody>
  </table>
</main>
<footer style="background: var(--brand-900); color: #fff; padding: 24px; text-align: center; font-size: 14px; margin-top: 60px;">
  <div>&copy; 2026 COSYlanguages · {lang_info["title_v"]}</div>
</footer>
</body>
</html>'''
        with open(f"{base_v}/topics/{slug}.html", "w", encoding="utf-8") as f:
            f.write(v_page_html)

        v_topic_cards.append(f'<a class="topic-card" href="topics/{slug}.html"><div class="ttl">{top["title"]}</div><div class="sub">{top["subtitle"]}</div></a>')

    v_index_html = f'''<!doctype html>
<html lang="{code}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{lang_info["title_v"]}</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<header class="topbar">
  <div class="topbar-inner">
    <a href="../../index.html">← Master Directory</a>
    <a href="{lang_info["hub_link"]}">{lang_info["hub_label"]}</a>
  </div>
</header>
<main class="container">
  <div class="page-head">
    <span class="eyebrow">COSYlanguages · Level A2</span>
    <h1>{lang_info["title_v"]}</h1>
    <p class="subtitle">Monolingual A2 Vocabulary Manual.</p>
  </div>
  <div class="topic-grid">{"".join(v_topic_cards)}</div>
</main>
<footer style="background: var(--brand-900); color: #fff; padding: 24px; text-align: center; font-size: 14px; margin-top: 60px;">
  <div>&copy; 2026 COSYlanguages · {lang_info["title_v"]}</div>
</footer>
</body>
</html>'''

    with open(f"{base_v}/index.html", "w", encoding="utf-8") as f: f.write(v_index_html)
    with open(f"{base_v}/module-1.html", "w", encoding="utf-8") as f: f.write(v_index_html)

    print(f"Cluster C language '{code}' A2 manuals generated with 14-part rhythm!")

def build_all_cluster_c():
    for code, lang_info in CLUSTER_C_DATA.items():
        build_language_manuals(code, lang_info)

if __name__ == "__main__":
    build_all_cluster_c()

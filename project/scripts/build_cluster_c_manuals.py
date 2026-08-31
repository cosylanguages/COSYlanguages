#!/usr/bin/env python3
"""
Generator script for Cluster C languages A2 Grammar & Vocabulary Manuals:
Tatar (tt), Bashkir (ba), Chuvash (cv), Georgian (ka), Armenian (hy).
"""
import os

from build_breton_a2_manual import create_manual

def build_cluster_c():
    # Tatar
    create_manual("tt", "Татар теле", "Татар теле грамматикасы һәм лексикасы", {
        "g": [
            ("tartym-kushymchalary-chylbyry", "Тартым кушымчалары чылбыры", "Possessive suffix chains and case markers."),
            ("xal-figyllar-xem-kileshler", "Хәл фигыльләр (Converbs)", "Converbs ending in -п / -ып / -еп and -гач / -гәч.")
        ],
        "v": [
            ("xezmet-xem-honomnar", "Хезмәт һәм һөнәрләр", "Professions and workplace vocabulary."),
            ("sxyaxat-xem-transport", "Səyəxət həm transport", "Travel and transportation.")
        ]
    })

    # Bashkir
    create_manual("ba", "Башҡорт теле", "Башҡорт теле грамматикаһы һәм лексикаһы", {
        "g": [
            ("fagyl-formalary-hem-qushymchalar", "Ғибәрәләр һәм хәл фиғылдар", "Converbs and possessive noun chains."),
            ("utken-zamandar", "Үткән замандар", "Past tenses in Bashkir.")
        ],
        "v": [
            ("gailat-hem-xezmet", "Ғаилә һәм хеҙмәт", "Family routines and work."),
            ("saxat-hem-transport", "Səyəxət həm transport", "Travel and transport.")
        ]
    })

    # Chuvash
    create_manual("cv", "Чăваш чĕлхи", "Чăваш грамматики тата лексики", {
        "g": [
            ("pashor-affixsen-vachary", "Парăнну аффикссен вăчăрĕ", "Possessive suffix chains and verbal participles."),
            ("Iskil-viesleny", "Иртнĕ вăхăт формысем", "Past tense forms in Chuvash.")
        ],
        "v": [
            ("ichet-tata-yratu", "Ĕç тата профессисем", "Work and professions."),
            ("cyul-cyusen", "Çул-ҫүрĕ тата транспорт", "Travel and transport.")
        ]
    })

    # Georgian
    create_manual("ka", "ქართული ენა", "ქართული გრამატიკა და ლექსიკა", {
        "g": [
            ("zmnebi-mravalricxovani-mcvrivze", "ზმნის მწკრივები (Screeves)", "A2 Verb screeve system beyond present tense (Aorist & Imperfect)."),
            ("brunvebi-da-tandebulebi", "ბრუნვები და თანდებულები", "Noun cases and postpositions in complex sentences.")
        ],
        "v": [
            ("samsaxuri-da-prowesiebi", "სამსახური და პროფესიები", "Work and professions."),
            ("mogzauroba-da-transporti", "მოგზაურობა და ტრანსპორტი", "Travel and transport.")
        ]
    })

    # Armenian
    create_manual("hy", "Հայոց լեզու", "Հայոց լեզվի քերականություն և բառապաշար", {
        "g": [
            ("ancyal-katarhyal-yev-ancyal-anhatar", "Անցյալ կատարյալ և անցյալ անկատար", "Aorist and imperfect tenses in Armenian."),
            ("holovman-hamakarg", "Հոլովման համակարգը A2", "Noun declension system in oblique cases.")
        ],
        "v": [
            ("ashkhatank-yev-masnagidutyunner", "Աշխատանք և մասնագիտություններ", "Work and professions."),
            ("chambordutyun-yev-transport", "Ճամփորդություն և տրանսպորտ", "Travel and transport.")
        ]
    })

if __name__ == "__main__":
    build_cluster_c()

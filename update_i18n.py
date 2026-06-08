import json
import os

translations = {
    "en": {
        "footer_h5_courses": "Courses",
        "footer_h5_explore": "Explore",
        "footer_h5_contact": "Contact",
        "footer_fb_p": "Your friendly corner to master new languages and connect with the world. 🌍",
        "footer_copy": "© 2026 COSYlanguages — All rights reserved",
        "nav_languages": "Languages 🌍",
        "nav_my_lessons": "My Lessons 🔐",
        "course_general": "General Course 📖",
        "course_spoken": "Spoken Course 🗣️",
        "course_exam": "Exam Preparation 📝",
        "course_travelling": "Travelling Course ✈️",
        "course_professional": "Professional Course 💼",
        "course_relocation": "Relocation Course 🏡",
        "course_general_desc": "The complete journey — all four skills growing together. Structured, progressive, built around your real adult life.",
        "course_spoken_desc": "No grammar tables. No worksheets. Just you, your teacher and a real conversation in 15 or 30 minute sessions.",
        "course_exam_desc": "Authentic tasks, exact exam conditions. Focus on the oral component where it matters most.",
        "about_h1": "The COSYlanguages Project",
        "nav_about": "About",
        "about_title": "About the Project",
        "coming_soon_title": "Coming Soon"
    },
    "el": {
        "footer_h5_courses": "Μαθήματα",
        "footer_h5_explore": "Εξερεύνηση",
        "footer_h5_contact": "Επικοινωνία",
        "footer_fb_p": "Η φιλική σας γωνιά για να μάθετε νέες γλώσσες και να συνδεθείτε με τον κόσμο. 🌍",
        "footer_copy": "© 2026 COSYlanguages — Με την επιφύλαξη παντός δικαιώματος",
        "nav_languages": "Γλώσσες 🌍",
        "nav_my_lessons": "Τα μαθήματά μου 🔐",
        "course_general": "Γενικό Μάθημα 📖",
        "course_spoken": "Μάθημα Προφορικών 🗣️",
        "course_exam": "Προετοιμασία Εξετάσεων 📝",
        "course_travelling": "Μάθημα για Ταξίδια ✈️",
        "course_professional": "Επαγγελματικό Μάθημα 💼",
        "course_relocation": "Μάθημα Μετεγκατάστασης 🏡",
        "course_general_desc": "Το πλήρες ταξίδι — και οι τέσσερις δεξιότητες αναπτύσσονται μαζί. Δομημένο, προοδευτικό, χτισμένο γύρω από την πραγματική σας ζωή.",
        "course_spoken_desc": "Χωρίς πίνακες γραμματικής. Χωρίς φύλλα εργασίας. Μόνο εσείς, ο δάσκαλός σας και μια πραγματική συζήτηση.",
        "course_exam_desc": "Αυθεντικές εργασίες, ακριβείς συνθήκες εξετάσεων. Εστίαση στο προφορικό μέρος όπου έχει μεγαλύτερη σημασία.",
        "about_h1": "Το Έργο COSYlanguages",
        "nav_about": "Σχετικά",
        "about_title": "Σχετικά με το Έργο",
        "coming_soon_title": "Σύντομα Διαθέσιμο"
    },
    "fr": {
        "footer_h5_courses": "Cours",
        "footer_h5_explore": "Explorer",
        "footer_h5_contact": "Contact",
        "footer_fb_p": "Votre coin convivial pour maîtriser de nouvelles langues et vous connecter au monde. 🌍",
        "footer_copy": "© 2026 COSYlanguages — Tous droits réservés",
        "nav_languages": "Langues 🌍",
        "nav_my_lessons": "Mes cours 🔐",
        "course_general": "Cours général 📖",
        "course_spoken": "Cours de conversation 🗣️",
        "course_exam": "Préparation aux examens 📝",
        "course_travelling": "Cours pour voyager ✈️",
        "course_professional": "Cours professionnel 💼",
        "course_relocation": "Cours de relocalisation 🏡",
        "course_general_desc": "Le voyage complet — les quatre compétences progressent ensemble. Structuré, progressif, adapté à votre vie d'adulte.",
        "course_spoken_desc": "Pas de tableaux de grammaire. Pas de fiches de travail. Juste vous, votre professeur et une vraie conversation.",
        "course_exam_desc": "Tâches authentiques, conditions d'examen exactes. Focus sur la composante orale là où c'est le plus important.",
        "about_h1": "Le projet COSYlanguages",
        "nav_about": "À propos",
        "about_title": "À propos du projet",
        "coming_soon_title": "Bientôt disponible"
    },
    "it": {
        "footer_h5_courses": "Corsi",
        "footer_h5_explore": "Esplora",
        "footer_h5_contact": "Contatti",
        "footer_fb_p": "Il tuo angolo accogliente per imparare nuove lingue e connetterti con il mondo. 🌍",
        "footer_copy": "© 2026 COSYlanguages — Tutti i diritti riservati",
        "nav_languages": "Lingue 🌍",
        "nav_my_lessons": "Le mie lezioni 🔐",
        "course_general": "Corso generale 📖",
        "course_spoken": "Corso di conversazione 🗣️",
        "course_exam": "Preparazione esami 📝",
        "course_travelling": "Corso per viaggiare ✈️",
        "course_professional": "Corso professionale 💼",
        "course_relocation": "Corso di ricollocamento 🏡",
        "course_general_desc": "Il viaggio completo — tutte e quattro le abilità crescono insieme. Strutturato, progressivo, costruito intorno alla tua vita reale.",
        "course_spoken_desc": "Niente tabelle grammaticali. Niente schede. Solo tu, il tuo insegnante e una vera conversazione.",
        "course_exam_desc": "Compiti autentici, condizioni d'esame esatte. Focus sulla componente orale dove conta di più.",
        "about_h1": "Il progetto COSYlanguages",
        "nav_about": "Informazioni",
        "about_title": "Informazioni sul progetto",
        "coming_soon_title": "Prossimamente"
    },
    "ru": {
        "footer_h5_courses": "Курсы",
        "footer_h5_explore": "Обзор",
        "footer_h5_contact": "Контакты",
        "footer_fb_p": "Ваш уютный уголок для изучения новых языков и общения с миром. 🌍",
        "footer_copy": "© 2026 COSYlanguages — Все права защищены",
        "nav_languages": "Языки 🌍",
        "nav_my_lessons": "Мои уроки 🔐",
        "course_general": "Общий курс 📖",
        "course_spoken": "Разговорный курс 🗣️",
        "course_exam": "Подготовка к экзаменам 📝",
        "course_travelling": "Курс для путешествий ✈️",
        "course_professional": "Профессиональный курс 💼",
        "course_relocation": "Курс для переезда 🏡",
        "course_general_desc": "Полный путь — развитие всех четырех навыков. Структурированный, прогрессивный курс, адаптированный под взрослую жизнь.",
        "course_spoken_desc": "Никаких таблиц и упражнений. Только вы, преподаватель и живое общение.",
        "course_exam_desc": "Реальные задания, условия экзамена. Упор на устную часть, где это важнее всего.",
        "about_h1": "Проект COSYlanguages",
        "nav_about": "О проекте",
        "about_title": "О проекте",
        "coming_soon_title": "Скоро в доступе"
    }
}

for lang, keys in translations.items():
    filepath = f"data/ui/{lang}.json"
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Update keys
        for key, value in keys.items():
            data[key] = value

        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Updated {filepath}")

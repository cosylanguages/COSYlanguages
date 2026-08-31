import os
import json

def build_a2_units(lang):
    # Localized titles
    titles = {
        "de": [
          "Vergangenheit & Reise", "Einkaufen & Kleidung", "Freizeit & Hobbys",
          "Gesundheit & Körper", "Wohnen & Umgebung", "Arbeit & Zukunft"
        ],
        "es": [
          "Pasado y Viajes", "Compras y Ropa", "Tiempo Libre y Aficiones",
          "Salud y Cuerpo", "Vivienda y Entorno", "Trabajo y Futuro"
        ],
        "pt": [
          "Passado e Viagens", "Compras e Vestuário", "Tempos Livres e Passatempos",
          "Saúde e Corpo", "Habitação e Envolvente", "Trabalho e Futuro"
        ],
        "hy": [
          "Անցյալ և Ճանապարհորդություն", "Գնումներ և Հագուստ", "Ազատ ժամանակ և Հոբբի",
          "Առողջություն և Մարմին", "Տուն և Շրջապատ", "Աշխատանք և Ապագա"
        ],
        "ka": [
          "წარსული და მოგზაურობა", "ყიდვები და ტანსაცმელი", "თავისუფალი დრო და ჰობი",
          "ჯანმრთელობა და სხეული", "სახლი და გარემო", "სამუშაო და მომავალი"
        ],
        "tt": [
          "Ütkän zamana häm Säyähät", "Satıvalular häm Kiyem", "Büş vaqıt häm Hobbilar",
          "Sälämätlek häm Bädän", "Yort häm Çırşaw", "Eş häm Keşelär"
        ],
        "ba": [
          "Ütkän zamana häm Sähät", "Satıvalıwzar häm Kiyem", "Büş vaqıt häm Hobbilar",
          "Sälämätlek häm Bädän", "Yort häm Qorşaw", "Eş häm Keşelär"
        ],
        "br": [
          "Tremened ha Beajoù", "Prenadennoù ha Dilhad", "Amzer frank ha Dudi",
          "Yec'hed ha Korf", "Tiez hag Endro", "Lec'h labour ha Dazont"
        ],
        "cv": [
          "Irtnĕ vătchă hani Śülśü", "Ilek-yarat hani Pechekh", "Irakh văkhăt hani Hobbi",
          "Sylăvlăkh hani Kĕske", "Surt hani Tatăr", "Ĕś hani Pukhar"
        ]
    }

    t_list = titles.get(lang, titles["de"])
    units = []

    for idx, u_title in enumerate(t_list):
        units.append({
            "unit": idx + 1,
            "title": u_title,
            "lessons": [
                {
                    "lesson": 1,
                    "type": "vocab",
                    "title": f"Lesson 1: {u_title}",
                    "duration_minutes": 60,
                    "grammar": ["A2 Structural Patterns"],
                    "vocabulary": ["Core A2 Vocabulary"],
                    "practice_types": ["mc", "fill"],
                    "speaking_percent": 40,
                    "teacher_notes": f"A2 level practice for {u_title}"
                },
                {
                    "lesson": 2,
                    "type": "grammar",
                    "title": f"Lesson 2: Grammar & Structure",
                    "duration_minutes": 60,
                    "grammar": ["Past & Future Forms"],
                    "vocabulary": ["Contextual Phrasal Sets"],
                    "practice_types": ["fill", "listening"],
                    "speaking_percent": 50,
                    "teacher_notes": f"Focus on past tense and prepositions."
                },
                {
                    "lesson": 3,
                    "type": "spoken",
                    "title": f"Lesson 3: Conversational Application",
                    "duration_minutes": 60,
                    "grammar": ["Conversational Connectors"],
                    "vocabulary": ["Idiomatic Phrases"],
                    "practice_types": ["mc", "speaking"],
                    "speaking_percent": 70,
                    "teacher_notes": f"Interactive communication practice."
                }
            ]
        })
    return units

def build_b1_units(lang):
    titles = {
        "de": [
          "Meinung & Diskussion", "Medien & Technologie", "Umwelt & Gesellschaft",
          "Kultur & Kunst", "Karriere & Berufswelt", "Gefühle & Beziehungen"
        ],
        "es": [
          "Opinión y Discusión", "Medios y Tecnología", "Medio Ambiente y Sociedad",
          "Cultura y Arte", "Carrera y Mundo Laboral", "Sentimientos y Relaciones"
        ],
        "pt": [
          "Opinião e Discussão", "Meios e Tecnologia", "Ambiente e Sociedade",
          "Cultura e Arte", "Carreira e Mundo do Trabalho", "Sentimentos e Relações"
        ],
        "hy": [
          "Կարծիք և Քննարկում", "Մեդիա և Տեխնոլոգիա", "Շրջակա միջավայր և Հասարակություն",
          "Մշակույթ և Արվեստ", "Կարիերա և Աշխատանքային աշխարհ", "Զգացմունքներ և Հարաբերություններ"
        ],
        "ka": [
          "აზრი და დისკუსია", "მედია და ტექნოლოგია", "გარემო და საზოგადოება",
          "კულტურა და ხელოვნება", "კარიერა და სამუშაო სამყარო", "გრძნობები და ურთიერთობები"
        ],
        "tt": [
          "Fiker häm Bähäs", "Mediya häm Texnologiya", "Tışqı çırşaw häm Cämğıyät",
          "Mädäniyät häm Sänğät", "Kariyera häm İş alamı", "Hislär häm Katnaşular"
        ],
        "ba": [
          "Fikir häm Bähäs", "Mediya häm Texnologiya", "Tışqı qorşaw häm Cämğıyät",
          "Mädäniyät häm Sänğät", "Kariyera häm İş alamı", "Hislär häm Qatnaşıwzar"
        ],
        "br": [
          "Ali ha Kaozeadenn", "Mediaoù ha Teknologiezh", "Endro ha Kevredigezh",
          "Sevenadur hag Arzoù", "Micher hag Bed al Labour", "Santimantoù ha Darempredoù"
        ],
        "cv": [
          "Pukhar hani Diskussi", "Mediya hani Tekhnologi", "Śülśü hani Sosium",
          "Kul'tura hani Iskusstvo", "Kariyera hani Ĕś", "Kămăl hani Śıkhănu"
        ]
    }

    t_list = titles.get(lang, titles["de"])
    units = []

    for idx, u_title in enumerate(t_list):
        units.append({
            "unit": idx + 1,
            "title": u_title,
            "lessons": [
                {
                    "lesson": 1,
                    "type": "vocab",
                    "title": f"Lesson 1: {u_title}",
                    "duration_minutes": 60,
                    "grammar": ["B1 Complex Structures"],
                    "vocabulary": ["Core B1 Lexicon"],
                    "practice_types": ["mc", "fill"],
                    "speaking_percent": 50,
                    "teacher_notes": f"B1 level deep dive for {u_title}"
                },
                {
                    "lesson": 2,
                    "type": "grammar",
                    "title": f"Lesson 2: Subjunctive & Relative Clauses",
                    "duration_minutes": 60,
                    "grammar": ["Subjunctive / Moods", "Relative Clauses"],
                    "vocabulary": ["Abstract Vocabulary"],
                    "practice_types": ["fill", "writing"],
                    "speaking_percent": 50,
                    "teacher_notes": f"Focus on clause linking and hypotheticals."
                },
                {
                    "lesson": 3,
                    "type": "spoken",
                    "title": f"Lesson 3: Advanced Discussion & Argumentation",
                    "duration_minutes": 60,
                    "grammar": ["Argumentation Connectors"],
                    "vocabulary": ["Debate Phrases"],
                    "practice_types": ["mc", "speaking"],
                    "speaking_percent": 80,
                    "teacher_notes": f"Polite disagreement and floor management."
                }
            ]
        })
    return units

langs = ["de", "es", "pt", "hy", "ka", "tt", "ba", "br", "cv"]

for l in langs:
    # A2
    a2_path = f"curriculum/{l}/general/A2.json"
    if not os.path.exists(a2_path):
        os.makedirs(os.path.dirname(a2_path), exist_ok=True)
        data = {
            "language": l,
            "course_type": "general",
            "level": "A2",
            "units": build_a2_units(l)
        }
        with open(a2_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Created {a2_path}")

    # B1
    b1_path = f"curriculum/{l}/general/B1.json"
    if not os.path.exists(b1_path):
        os.makedirs(os.path.dirname(b1_path), exist_ok=True)
        data = {
            "language": l,
            "course_type": "general",
            "level": "B1",
            "units": build_b1_units(l)
        }
        with open(b1_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Created {b1_path}")

# cv A1 as well if missing
cv_a1_path = "curriculum/cv/general/A1.json"
if not os.path.exists(cv_a1_path):
    os.makedirs(os.path.dirname(cv_a1_path), exist_ok=True)
    data = {
        "language": "cv",
        "course_type": "general",
        "level": "A1",
        "units": build_a2_units("cv")
    }
    with open(cv_a1_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Created {cv_a1_path}")

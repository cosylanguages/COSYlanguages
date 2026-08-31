import os, json

BASE_DIR = "vocabulary/es"

def write_js(filepath, lang, data):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    content = f"""// TODO: verify level classification
(function() {{
    const lang = "{lang}";
    const data = {json.dumps(data, ensure_ascii=False, indent=4)};
    window.vocabularyData = window.vocabularyData || {{}};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
}})();
"""
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

es_a1_categories = {
    "animals.js": [
        {"word": "perro", "level": "starter", "theme": "animals", "emoji": "🐕", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Animal doméstico leal y amigo del ser humano.", "examples": ["El perro corre en el parque."]}], "lang": "es", "transcription": "ˈpe.ro", "id": "es_starter_animals_001"},
        {"word": "gato", "level": "starter", "theme": "animals", "emoji": "🐈", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Pequeño animal doméstico con pelo suave.", "examples": ["El gato duerme en el sofá."]}], "lang": "es", "transcription": "ˈɡa.to", "id": "es_starter_animals_002"},
        {"word": "pájaro", "level": "starter", "theme": "animals", "emoji": "🐦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Animal con plumas que vuela en el aire.", "examples": ["El pájaro canta en el árbol."]}], "lang": "es", "transcription": "ˈpa.xa.ro", "id": "es_starter_animals_003"},
        {"word": "pez", "level": "starter", "theme": "animals", "emoji": "🐟", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Animal acuático que vive en el agua.", "examples": ["El pez nada en el río."]}], "lang": "es", "transcription": "peθ", "id": "es_starter_animals_004"},
        {"word": "vaca", "level": "starter", "theme": "animals", "emoji": "🐄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Animal grande de granja que da leche.", "examples": ["La vaca come hierba."]}], "lang": "es", "transcription": "ˈba.ka", "id": "es_starter_animals_005"},
        {"word": "caballo", "level": "starter", "theme": "animals", "emoji": "🐎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Animal fuerte y rápido que se puede montar.", "examples": ["El caballo corre velozmente."]}], "lang": "es", "transcription": "ka.ˈβa.ʝo", "id": "es_starter_animals_006"}
    ],
    "body.js": [
        {"word": "cabeza", "level": "starter", "theme": "body", "emoji": "🗣️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Parte superior del cuerpo humano.", "examples": ["Me duele la cabeza."]}], "lang": "es", "transcription": "ka.ˈβe.θa", "id": "es_starter_body_001"},
        {"word": "mano", "level": "starter", "theme": "body", "emoji": "✋", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Parte del cuerpo para coger cosas.", "examples": ["Lávate las manos antes de comer."]}], "lang": "es", "transcription": "ˈma.no", "id": "es_starter_body_002"},
        {"word": "pie", "level": "starter", "theme": "body", "emoji": "🦶", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Parte del cuerpo para caminar.", "examples": ["Me duelen los pies."]}], "lang": "es", "transcription": "pje", "id": "es_starter_body_003"},
        {"word": "ojo", "level": "starter", "theme": "body", "emoji": "👁️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Órgano de la visión.", "examples": ["Tiene los ojos azules."]}], "lang": "es", "transcription": "ˈo.xo", "id": "es_starter_body_004"},
        {"word": "oreja", "level": "starter", "theme": "body", "emoji": "👂", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Órgano de la audición.", "examples": ["Escuchamos con las orejas."]}], "lang": "es", "transcription": "o.ˈre.xa", "id": "es_starter_body_005"}
    ],
    "clothes.js": [
        {"word": "camisa", "level": "starter", "theme": "clothes", "emoji": "👔", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ropa con botones para la parte superior del cuerpo.", "examples": ["Llevo una camisa blanca."]}], "lang": "es", "transcription": "ka.ˈmi.sa", "id": "es_starter_clothes_001"},
        {"word": "pantalón", "level": "starter", "theme": "clothes", "emoji": "👖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Ropa que cubre las piernas.", "examples": ["Me compré un pantalón azul."]}], "lang": "es", "transcription": "pan.ta.ˈlon", "id": "es_starter_clothes_002"},
        {"word": "vestido", "level": "starter", "theme": "clothes", "emoji": "👗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Prenda de vestir femenina de una sola pieza.", "examples": ["Lleva un vestido rojo muy bonito."]}], "lang": "es", "transcription": "bes.ˈti.ðo", "id": "es_starter_clothes_003"},
        {"word": "zapato", "level": "starter", "theme": "clothes", "emoji": "👟", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Calzado para proteger los pies.", "examples": ["Mis zapatos nuevos son cómodos."]}], "lang": "es", "transcription": "θa.ˈpa.to", "id": "es_starter_clothes_004"}
    ],
    "colours.js": [
        {"word": "negro", "level": "starter", "theme": "colours", "emoji": "⬛", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "El color de la noche.", "examples": ["Tengo un gato negro."]}], "lang": "es", "transcription": "ˈne.ɡro", "id": "es_starter_colours_001"},
        {"word": "blanco", "level": "starter", "theme": "colours", "emoji": "⬜", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "El color de la nieve y de la leche.", "examples": ["La nieve es blanca."]}], "lang": "es", "transcription": "ˈblan.ko", "id": "es_starter_colours_002"},
        {"word": "rojo", "level": "starter", "theme": "colours", "emoji": "🟥", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "El color del fuego y de las fresas.", "examples": ["Me gusta la manzana roja."]}], "lang": "es", "transcription": "ˈro.xo", "id": "es_starter_colours_003"},
        {"word": "azul", "level": "starter", "theme": "colours", "emoji": "🟦", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "El color del cielo claro y del mar.", "examples": ["El cielo está azul hoy."]}], "lang": "es", "transcription": "a.ˈθul", "id": "es_starter_colours_004"},
        {"word": "verde", "level": "starter", "theme": "colours", "emoji": "🟩", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "El color de las plantas y de las hojas.", "examples": ["La hierba es verde."]}], "lang": "es", "transcription": "ˈber.ðe", "id": "es_starter_colours_005"}
    ],
    "family.js": [
        {"word": "padre", "level": "starter", "theme": "family", "emoji": "👨", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "El varón que tiene hijos.", "examples": ["Mi padre trabaja en una oficina."]}], "lang": "es", "transcription": "ˈpa.ðre", "id": "es_starter_family_001"},
        {"word": "madre", "level": "starter", "theme": "family", "emoji": "👩", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "La mujer que tiene hijos.", "examples": ["Mi madre prepara la comida."]}], "lang": "es", "transcription": "ˈma.ðre", "id": "es_starter_family_002"},
        {"word": "hermano", "level": "starter", "theme": "family", "emoji": "👦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Hijo de los mismos padres.", "examples": ["Tengo un hermano mayor."]}], "lang": "es", "transcription": "er.ˈma.no", "id": "es_starter_family_003"},
        {"word": "hermana", "level": "starter", "theme": "family", "emoji": "👧", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Hija de los mismos padres.", "examples": ["Mi hermana estudia en la escuela."]}], "lang": "es", "transcription": "er.ˈma.na", "id": "es_starter_family_004"}
    ],
    "food_drink.js": [
        {"word": "pan", "level": "starter", "theme": "food_drink", "emoji": "🍞", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Alimento básico hecho con harina y agua.", "examples": ["Comemos pan fresco todos los días."]}], "lang": "es", "transcription": "pan", "id": "es_starter_food_drink_001"},
        {"word": "leche", "level": "starter", "theme": "food_drink", "emoji": "🥛", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Bebida blanca que producen las vacas.", "examples": ["Bebo leche caliente por la mañana."]}], "lang": "es", "transcription": "ˈle.tʃe", "id": "es_starter_food_drink_002"},
        {"word": "agua", "level": "starter", "theme": "food_drink", "emoji": "💧", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Líquido transparente e indispensable para la vida.", "examples": ["Bebo mucha agua durante el día."]}], "lang": "es", "transcription": "ˈa.ɣwa", "id": "es_starter_food_drink_003"},
        {"word": "café", "level": "starter", "theme": "food_drink", "emoji": "☕", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Bebida caliente y estimulante.", "examples": ["Tomo un café con leche por la mañana."]}], "lang": "es", "transcription": "ka.ˈfe", "id": "es_starter_food_drink_004"}
    ],
    "furniture.js": [
        {"word": "mesa", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mueble para comer o trabajar.", "examples": ["La comida está en la mesa."]}], "lang": "es", "transcription": "ˈme.sa", "id": "es_starter_furniture_001"},
        {"word": "silla", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mueble para sentarse.", "examples": ["Siéntate en la silla, por favor."]}], "lang": "es", "transcription": "ˈsi.ʝa", "id": "es_starter_furniture_002"},
        {"word": "cama", "level": "starter", "theme": "furniture", "emoji": "🛏️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Mueble para dormir por la noche.", "examples": ["Me voy a la cama porque tengo sueño."]}], "lang": "es", "transcription": "ˈka.ma", "id": "es_starter_furniture_003"}
    ],
    "greetings.js": [
        {"word": "hola", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Palabra que se usa para saludar.", "examples": ["¡Hola! ¿Cómo estás?"]}], "lang": "es", "transcription": "ˈo.la", "id": "es_starter_greetings_001"},
        {"word": "adiós", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Palabra para despedirse.", "examples": ["Adiós, nos vemos mañana."]}], "lang": "es", "transcription": "a.ˈðjos", "id": "es_starter_greetings_002"},
        {"word": "gracias", "level": "starter", "theme": "greetings", "emoji": "🙏", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Palabra para agradecer algo.", "examples": ["Muchas gracias por tu ayuda."]}], "lang": "es", "transcription": "ˈɡra.θjas", "id": "es_starter_greetings_003"}
    ],
    "jobs.js": [
        {"word": "profesor", "level": "starter", "theme": "jobs", "emoji": "👨‍🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Persona que enseña en la escuela.", "examples": ["El profesor explica la lección."]}], "lang": "es", "transcription": "pro.fe.ˈsor", "id": "es_starter_jobs_001"},
        {"word": "médico", "level": "starter", "theme": "jobs", "emoji": "👨‍⚕️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Persona que cura a las personas enfermas.", "examples": ["El médico me atendió muy bien."]}], "lang": "es", "transcription": "ˈme.ði.ko", "id": "es_starter_jobs_002"}
    ],
    "nature.js": [
        {"word": "sol", "level": "starter", "theme": "nature", "emoji": "☀️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Estrella que da luz y calor a la Tierra.", "examples": ["Hoy brilla el sol en el cielo."]}], "lang": "es", "transcription": "sol", "id": "es_starter_nature_001"},
        {"word": "luna", "level": "starter", "theme": "nature", "emoji": "🌙", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Satelite natural que se ve por la noche.", "examples": ["La luna está llena esta noche."]}], "lang": "es", "transcription": "ˈlu.na", "id": "es_starter_nature_002"}
    ],
    "numbers.js": [
        {"word": "uno", "level": "starter", "theme": "numbers", "emoji": "1️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Primer número cardinal.", "examples": ["Uno, dos, tres."]}], "lang": "es", "transcription": "ˈu.no", "id": "es_starter_numbers_001"},
        {"word": "dos", "level": "starter", "theme": "numbers", "emoji": "2️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Número que sigue al uno.", "examples": ["Tengo dos gatos."]}], "lang": "es", "transcription": "dos", "id": "es_starter_numbers_002"}
    ],
    "places.js": [
        {"word": "casa", "level": "starter", "theme": "places", "emoji": "🏠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Lugar donde vive una persona o familia.", "examples": ["Vuelvo a casa después de trabajar."]}], "lang": "es", "transcription": "ˈka.sa", "id": "es_starter_places_001"},
        {"word": "ciudad", "level": "starter", "theme": "places", "emoji": "🏙️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Población grande con muchos edificios.", "examples": ["Madrid es una ciudad hermosa."]}], "lang": "es", "transcription": "θju.ˈðað", "id": "es_starter_places_002"}
    ],
    "school.js": [
        {"word": "libro", "level": "starter", "theme": "school", "emoji": "📖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Conjunto de páginas impresas para leer.", "examples": ["Leo un libro de español."]}], "lang": "es", "transcription": "ˈli.βro", "id": "es_starter_school_001"},
        {"word": "cuaderno", "level": "starter", "theme": "school", "emoji": "📓", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Libro de hojas en blanco para escribir.", "examples": ["Escribo mis notas en el cuaderno."]}], "lang": "es", "transcription": "kwa.ˈðer.no", "id": "es_starter_school_002"}
    ],
    "shopping.js": [
        {"word": "precio", "level": "starter", "theme": "shopping", "emoji": "🏷️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Cantidad de dinero que cuesta algo.", "examples": ["¿Cuál es el precio de este libro?"]}], "lang": "es", "transcription": "ˈpre.θjo", "id": "es_starter_shopping_001"},
        {"word": "dinero", "level": "starter", "theme": "shopping", "emoji": "💶", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Medio de pago para comprar cosas.", "examples": ["Pago las compras con dinero."]}], "lang": "es", "transcription": "di.ˈne.ro", "id": "es_starter_shopping_002"}
    ],
    "social.js": [
        {"word": "amigo", "level": "starter", "theme": "social", "emoji": "🧑‍🤝‍🧑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Persona cercana a la que se tiene afecto.", "examples": ["Mi amigo vive cerca de mi casa."]}], "lang": "es", "transcription": "a.ˈmi.ɣo", "id": "es_starter_social_001"},
        {"word": "fiesta", "level": "starter", "theme": "social", "emoji": "🎉", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Reunión alegre para celebrar algo.", "examples": ["Vamos a una fiesta de cumpleaños."]}], "lang": "es", "transcription": "ˈfjes.ta", "id": "es_starter_social_002"}
    ],
    "technology.js": [
        {"word": "ordenador", "level": "starter", "theme": "technology", "emoji": "💻", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Máquina electrónica para procesar datos.", "examples": ["Trabajo con mi ordenador."]}], "lang": "es", "transcription": "or.ðe.na.ˈðor", "id": "es_starter_technology_001"},
        {"word": "teléfono", "level": "starter", "theme": "technology", "emoji": "📱", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Dispositivo para hablar a distancia.", "examples": ["Llamo a mi madre por teléfono."]}], "lang": "es", "transcription": "te.ˈle.fo.no", "id": "es_starter_technology_002"}
    ],
    "time.js": [
        {"word": "día", "level": "starter", "theme": "time", "emoji": "📅", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Periodo de 24 horas.", "examples": ["Hoy es un buen día."]}], "lang": "es", "transcription": "ˈdi.a", "id": "es_starter_time_001"},
        {"word": "noche", "level": "starter", "theme": "time", "emoji": "🌃", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Tiempo entre el atardecer y el amanecer.", "examples": ["Buenas noches a todos."]}], "lang": "es", "transcription": "ˈno.tʃe", "id": "es_starter_time_002"}
    ],
    "travel.js": [
        {"word": "coche", "level": "starter", "theme": "travel", "emoji": "🚗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Vehículo de cuatro ruedas para viajar.", "examples": ["Viajamos en coche a la playa."]}], "lang": "es", "transcription": "ˈko.tʃe", "id": "es_starter_travel_001"},
        {"word": "tren", "level": "starter", "theme": "travel", "emoji": "🚆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Medio de transporte sobre raíles.", "examples": ["El tren llega a las diez."]}], "lang": "es", "transcription": "tren", "id": "es_starter_travel_002"}
    ]
}

for filename, entries in es_a1_categories.items():
    write_js(os.path.join(BASE_DIR, "A1", filename), "es", entries)

def update_index_json(dirpath):
    files = sorted([f for f in os.listdir(dirpath) if f.endswith('.js')])
    with open(os.path.join(dirpath, "index.json"), "w", encoding="utf-8") as f:
        json.dump(files, f, ensure_ascii=False, indent=2)

update_index_json(os.path.join(BASE_DIR, "A1"))

print("Successfully generated Spanish A1 vocabulary files!")

import os, json

BASE_DIR = "vocabulary/pt"

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

pt_a1_categories = {
    "animals.js": [
        {"word": "cão", "level": "starter", "theme": "animals", "emoji": "🐕", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Animal doméstico leal e amigo do ser humano.", "examples": ["O cão corre no jardim."]}], "lang": "pt", "transcription": "kɐ̃w̃", "id": "pt_starter_animals_001"},
        {"word": "gato", "level": "starter", "theme": "animals", "emoji": "🐈", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Pequeno animal doméstico com pelo suave.", "examples": ["O gato dorme no sofá."]}], "lang": "pt", "transcription": "ˈɡa.tu", "id": "pt_starter_animals_002"},
        {"word": "pássaro", "level": "starter", "theme": "animals", "emoji": "🐦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Animal com penas que voa no ar.", "examples": ["O pássaro canta na árvore."]}], "lang": "pt", "transcription": "ˈpa.sɐ.ru", "id": "pt_starter_animals_003"},
        {"word": "peixe", "level": "starter", "theme": "animals", "emoji": "🐟", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Animal aquático que vive na água.", "examples": ["O peixe nada no rio."]}], "lang": "pt", "transcription": "ˈpɐj.ʃɨ", "id": "pt_starter_animals_004"},
        {"word": "vaca", "level": "starter", "theme": "animals", "emoji": "🐄", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Animal grande da quinta que dá leite.", "examples": ["A vaca come erva."]}], "lang": "pt", "transcription": "ˈva.kɐ", "id": "pt_starter_animals_005"},
        {"word": "cavalo", "level": "starter", "theme": "animals", "emoji": "🐎", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Animal forte e rápido que se pode montar.", "examples": ["O cavalo corre velozmente."]}], "lang": "pt", "transcription": "kɐ.ˈva.lu", "id": "pt_starter_animals_006"}
    ],
    "body.js": [
        {"word": "cabeça", "level": "starter", "theme": "body", "emoji": "🗣️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Parte superior do corpo humano.", "examples": ["Dói-me a cabeça."]}], "lang": "pt", "transcription": "kɐ.ˈbe.sɐ", "id": "pt_starter_body_001"},
        {"word": "mão", "level": "starter", "theme": "body", "emoji": "✋", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Parte do corpo para agarrar coisas.", "examples": ["Lava as mãos antes de comer."]}], "lang": "pt", "transcription": "mɐ̃w̃", "id": "pt_starter_body_002"},
        {"word": "pé", "level": "starter", "theme": "body", "emoji": "🦶", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Parte do corpo para andar.", "examples": ["Dóiem-me os pés."]}], "lang": "pt", "transcription": "pɛ", "id": "pt_starter_body_003"},
        {"word": "olho", "level": "starter", "theme": "body", "emoji": "👁️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Órgão da visão.", "examples": ["Ela tem olhos azuis."]}], "lang": "pt", "transcription": "ˈo.ʎu", "id": "pt_starter_body_004"},
        {"word": "orelha", "level": "starter", "theme": "body", "emoji": "👂", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Órgão da audição.", "examples": ["Ouvimos com as orelhas."]}], "lang": "pt", "transcription": "o.ˈre.ʎɐ", "id": "pt_starter_body_005"}
    ],
    "clothes.js": [
        {"word": "camisa", "level": "starter", "theme": "clothes", "emoji": "👔", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Roupa com botões para a parte superior do corpo.", "examples": ["Visto uma camisa branca."]}], "lang": "pt", "transcription": "kɐ.ˈmi.zɐ", "id": "pt_starter_clothes_001"},
        {"word": "calças", "level": "starter", "theme": "clothes", "emoji": "👖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Roupa que cobre as pernas.", "examples": ["Comprei umas calças azuis."]}], "lang": "pt", "transcription": "ˈkal.sɐʃ", "id": "pt_starter_clothes_002"},
        {"word": "vestido", "level": "starter", "theme": "clothes", "emoji": "👗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Peça de vestuário feminina de uma só peça.", "examples": ["Ela veste um vestido vermelho muito bonito."]}], "lang": "pt", "transcription": "vɨʃ.ˈti.ðu", "id": "pt_starter_clothes_003"},
        {"word": "sapato", "level": "starter", "theme": "clothes", "emoji": "👟", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Calçado para proteger os pés.", "examples": ["Os meus sapatos novos são confortáveis."]}], "lang": "pt", "transcription": "sɐ.ˈpa.tu", "id": "pt_starter_clothes_004"}
    ],
    "colours.js": [
        {"word": "preto", "level": "starter", "theme": "colours", "emoji": "⬛", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "A cor da noite.", "examples": ["Tenho um fato preto."]}], "lang": "pt", "transcription": "ˈpre.tu", "id": "pt_starter_colours_001"},
        {"word": "branco", "level": "starter", "theme": "colours", "emoji": "⬜", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "A cor da neve e do leite.", "examples": ["A neve é branca."]}], "lang": "pt", "transcription": "ˈbrɐ̃.ku", "id": "pt_starter_colours_002"},
        {"word": "vermelho", "level": "starter", "theme": "colours", "emoji": "🟥", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "A cor do fogo e dos morangos.", "examples": ["Gosto da maçã vermelha."]}], "lang": "pt", "transcription": "vɨr.ˈme.ʎu", "id": "pt_starter_colours_003"},
        {"word": "azul", "level": "starter", "theme": "colours", "emoji": "🟦", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "A cor do céu limpo e do mar.", "examples": ["O céu está azul hoje."]}], "lang": "pt", "transcription": "ɐ.ˈzul", "id": "pt_starter_colours_004"},
        {"word": "verde", "level": "starter", "theme": "colours", "emoji": "🟩", "form": "adjective", "classification": "regular", "countability": "null", "definitions": [{"text": "A cor das plantas e das folhas.", "examples": ["A relva é verde."]}], "lang": "pt", "transcription": "ˈver.dɨ", "id": "pt_starter_colours_005"}
    ],
    "family.js": [
        {"word": "pai", "level": "starter", "theme": "family", "emoji": "👨", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "O homem que tem filhos.", "examples": ["O meu pai trabalha num escritório."]}], "lang": "pt", "transcription": "paj", "id": "pt_starter_family_001"},
        {"word": "mãe", "level": "starter", "theme": "family", "emoji": "👩", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "A mulher que tem filhos.", "examples": ["A minha mãe prepara a refeição."]}], "lang": "pt", "transcription": "mɐ̃j̃", "id": "pt_starter_family_002"},
        {"word": "irmão", "level": "starter", "theme": "family", "emoji": "👦", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Filho dos mesmos pais.", "examples": ["Tenho um irmão mais velho."]}], "lang": "pt", "transcription": "ir.ˈmɐ̃w̃", "id": "pt_starter_family_003"},
        {"word": "irmã", "level": "starter", "theme": "family", "emoji": "👧", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Filha dos mesmos pais.", "examples": ["A minha irmã estuda na escola."]}], "lang": "pt", "transcription": "ir.ˈmɐ̃", "id": "pt_starter_family_004"}
    ],
    "food_drink.js": [
        {"word": "pão", "level": "starter", "theme": "food_drink", "emoji": "🍞", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Alimento básico feito com farinha e água.", "examples": ["Comemos pão fresco todos os dias."]}], "lang": "pt", "transcription": "pɐ̃w̃", "id": "pt_starter_food_drink_001"},
        {"word": "leite", "level": "starter", "theme": "food_drink", "emoji": "🥛", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Bebida branca produzida pelas vacas.", "examples": ["Bebo leite quente de manhã."]}], "lang": "pt", "transcription": "ˈlɐj.tɨ", "id": "pt_starter_food_drink_002"},
        {"word": "água", "level": "starter", "theme": "food_drink", "emoji": "💧", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Líquido transparente indispensável para a vida.", "examples": ["Bebo muita água durante o dia."]}], "lang": "pt", "transcription": "ˈa.ɡwɐ", "id": "pt_starter_food_drink_003"},
        {"word": "café", "level": "starter", "theme": "food_drink", "emoji": "☕", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Bebida quente e estimulante.", "examples": ["Tomo um café de manhã."]}], "lang": "pt", "transcription": "kɐ.ˈfɛ", "id": "pt_starter_food_drink_004"}
    ],
    "furniture.js": [
        {"word": "mesa", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Móvel para comer ou trabalhar.", "examples": ["A refeição está na mesa."]}], "lang": "pt", "transcription": "ˈme.zɐ", "id": "pt_starter_furniture_001"},
        {"word": "cadeira", "level": "starter", "theme": "furniture", "emoji": "🪑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Móvel para sentar.", "examples": ["Senta-te na cadeira, por favor."]}], "lang": "pt", "transcription": "kɐ.ˈdɐj.rɐ", "id": "pt_starter_furniture_002"},
        {"word": "cama", "level": "starter", "theme": "furniture", "emoji": "🛏️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Móvel para dormir à noite.", "examples": ["Vou para a cama porque tenho sono."]}], "lang": "pt", "transcription": "ˈkɐ.mɐ", "id": "pt_starter_furniture_003"}
    ],
    "greetings.js": [
        {"word": "olá", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Palavra que se usa para saudar.", "examples": ["Olá! Como estás?"]}], "lang": "pt", "transcription": "o.ˈla", "id": "pt_starter_greetings_001"},
        {"word": "adeus", "level": "starter", "theme": "greetings", "emoji": "👋", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Palavra para despedir.", "examples": ["Adeus, até amanhã."]}], "lang": "pt", "transcription": "ɐ.ˈdewʃ", "id": "pt_starter_greetings_002"},
        {"word": "obrigado", "level": "starter", "theme": "greetings", "emoji": "🙏", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Palavra para agradecer algo.", "examples": ["Muito obrigado pela tua ajuda."]}], "lang": "pt", "transcription": "o.βri.ˈɡa.ðu", "id": "pt_starter_greetings_003"}
    ],
    "jobs.js": [
        {"word": "professor", "level": "starter", "theme": "jobs", "emoji": "👨‍🏫", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Pessoa que ensina na escola.", "examples": ["O professor explica a lição."]}], "lang": "pt", "transcription": "pro.fɛ.ˈsor", "id": "pt_starter_jobs_001"},
        {"word": "médico", "level": "starter", "theme": "jobs", "emoji": "👨‍⚕️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Pessoa que trata das pessoas doentes.", "examples": ["O médico atendeu-me muito bem."]}], "lang": "pt", "transcription": "ˈmɛ.ði.ku", "id": "pt_starter_jobs_002"}
    ],
    "nature.js": [
        {"word": "sol", "level": "starter", "theme": "nature", "emoji": "☀️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Estrela que dá luz e calor à Terra.", "examples": ["Hoje o sol brilha no céu."]}], "lang": "pt", "transcription": "sɔl", "id": "pt_starter_nature_001"},
        {"word": "lua", "level": "starter", "theme": "nature", "emoji": "🌙", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Satélite natural que se vê à noite.", "examples": ["A lua está cheia esta noite."]}], "lang": "pt", "transcription": "ˈlu.ɐ", "id": "pt_starter_nature_002"}
    ],
    "numbers.js": [
        {"word": "um", "level": "starter", "theme": "numbers", "emoji": "1️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Primeiro número cardinal.", "examples": ["Um, dois, três."]}], "lang": "pt", "transcription": "ũ", "id": "pt_starter_numbers_001"},
        {"word": "dois", "level": "starter", "theme": "numbers", "emoji": "2️⃣", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Número que segue o um.", "examples": ["Tenho dois gatos."]}], "lang": "pt", "transcription": "dojʃ", "id": "pt_starter_numbers_002"}
    ],
    "places.js": [
        {"word": "casa", "level": "starter", "theme": "places", "emoji": "🏠", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Lugar onde vive uma pessoa ou família.", "examples": ["Volto a casa depois de trabalhar."]}], "lang": "pt", "transcription": "ˈka.zɐ", "id": "pt_starter_places_001"},
        {"word": "cidade", "level": "starter", "theme": "places", "emoji": "🏙️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Povoação grande com muitos edifícios.", "examples": ["Lisboa é uma cidade bonita."]}], "lang": "pt", "transcription": "si.ˈda.ðɨ", "id": "pt_starter_places_002"}
    ],
    "school.js": [
        {"word": "livro", "level": "starter", "theme": "school", "emoji": "📖", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Conjunto de páginas impressas para ler.", "examples": ["Lio um livro de português."]}], "lang": "pt", "transcription": "ˈli.vru", "id": "pt_starter_school_001"},
        {"word": "caderno", "level": "starter", "theme": "school", "emoji": "📓", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Livro com folhas em branco para escrever.", "examples": ["Escrevo as minhas notas no caderno."]}], "lang": "pt", "transcription": "kɐ.ˈðɛr.nu", "id": "pt_starter_school_002"}
    ],
    "shopping.js": [
        {"word": "preço", "level": "starter", "theme": "shopping", "emoji": "🏷️", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Quantidade de dinheiro que custa algo.", "examples": ["Qual é o preço deste livro?"]}], "lang": "pt", "transcription": "ˈpre.su", "id": "pt_starter_shopping_001"},
        {"word": "dinheiro", "level": "starter", "theme": "shopping", "emoji": "💶", "form": "noun", "classification": "regular", "countability": "uncountable", "definitions": [{"text": "Meio de pagamento para comprar coisas.", "examples": ["Pago as compras com dinheiro."]}], "lang": "pt", "transcription": "di.ˈɲɐj.ru", "id": "pt_starter_shopping_002"}
    ],
    "social.js": [
        {"word": "amigo", "level": "starter", "theme": "social", "emoji": "🧑‍🤝‍🧑", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Pessoa próxima a quem se tem afeto.", "examples": ["O meu amigo vive perto da minha casa."]}], "lang": "pt", "transcription": "ɐ.ˈmi.ɣu", "id": "pt_starter_social_001"},
        {"word": "festa", "level": "starter", "theme": "social", "emoji": "🎉", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Reunião alegre para celebrar algo.", "examples": ["Vamos a uma festa de aniversário."]}], "lang": "pt", "transcription": "ˈfɛʃ.tɐ", "id": "pt_starter_social_002"}
    ],
    "technology.js": [
        {"word": "computador", "level": "starter", "theme": "technology", "emoji": "💻", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Máquina eletrónica para processar dados.", "examples": ["Trabalho com o meu computador."]}], "lang": "pt", "transcription": "kõ.pu.tɐ.ˈdor", "id": "pt_starter_technology_001"},
        {"word": "telemóvel", "level": "starter", "theme": "technology", "emoji": "📱", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Dispositivo para falar à distância.", "examples": ["Ligo à minha mãe pelo telemóvel."]}], "lang": "pt", "transcription": "tɛ.lɛ.ˈmɔ.vɛl", "id": "pt_starter_technology_002"}
    ],
    "time.js": [
        {"word": "dia", "level": "starter", "theme": "time", "emoji": "📅", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Período de 24 horas.", "examples": ["Hoje é um bom dia."]}], "lang": "pt", "transcription": "ˈdi.ɐ", "id": "pt_starter_time_001"},
        {"word": "noite", "level": "starter", "theme": "time", "emoji": "🌃", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Tempo entre o anoitecer e o amanhecer.", "examples": ["Boa noite a todos."]}], "lang": "pt", "transcription": "ˈnoj.tɨ", "id": "pt_starter_time_002"}
    ],
    "travel.js": [
        {"word": "carro", "level": "starter", "theme": "travel", "emoji": "🚗", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Veículo de quatro rodas para viajar.", "examples": ["Viajamos de carro para a praia."]}], "lang": "pt", "transcription": "ˈka.ru", "id": "pt_starter_travel_001"},
        {"word": "comboio", "level": "starter", "theme": "travel", "emoji": "🚆", "form": "noun", "classification": "regular", "countability": "countable", "definitions": [{"text": "Meio de transporte sobre carris.", "examples": ["O comboio chega às dez horas."]}], "lang": "pt", "transcription": "kõ.ˈbɔj.u", "id": "pt_starter_travel_002"}
    ]
}

for filename, entries in pt_a1_categories.items():
    write_js(os.path.join(BASE_DIR, "A1", filename), "pt", entries)

def update_index_json(dirpath):
    files = sorted([f for f in os.listdir(dirpath) if f.endswith('.js')])
    with open(os.path.join(dirpath, "index.json"), "w", encoding="utf-8") as f:
        json.dump(files, f, ensure_ascii=False, indent=2)

update_index_json(os.path.join(BASE_DIR, "A1"))

print("Successfully generated Portuguese A1 vocabulary files!")

const fs = require('fs');

const enRef = [
    { word: "doctor", theme: "job_titles_professions_A1", emoji: "🧑‍⚕️" },
    { word: "foot", theme: "body_parts_A1", emoji: "🦶" },
    { word: "teacher", theme: "job_titles_professions_A1", emoji: "🧑‍🏫" },
    { word: "pizza", theme: "basic_foods_A1", emoji: "🍕" },
    { word: "pasta", theme: "basic_foods_A1", emoji: "🍝" },
    { word: "apple", theme: "basic_foods_A1", emoji: "🍎" },
    { word: "bread", theme: "basic_foods_A1", emoji: "🍞" },
    { word: "egg", theme: "basic_foods_A1", emoji: "🥚" },
    { word: "milk", theme: "basic_foods_A1", emoji: "🥛" },
    { word: "banana", theme: "basic_foods_A1", emoji: "🍌" },
    { word: "coffee", theme: "drinks_A1", emoji: "☕" },
    { word: "tea", theme: "drinks_A1", emoji: "🍵" },
    { word: "water", theme: "drinks_A1", emoji: "🚰" },
    { word: "school", theme: "local_places_services_A1", emoji: "🏫" },
    { word: "t-shirt", theme: "items_of_clothing_A1", emoji: "👕" },
    { word: "pants", theme: "items_of_clothing_A1", emoji: "👖" },
    { word: "shoe", theme: "items_of_clothing_A1", emoji: "👞" },
    { word: "hat", theme: "items_of_clothing_A1", emoji: "👒" },
    { word: "chair", theme: "furniture_objects_A1", emoji: "🪑" },
    { word: "table", theme: "furniture_objects_A1", emoji: "🪑" },
    { word: "bed", theme: "furniture_objects_A1", emoji: "🛏️" },
    { word: "key", theme: "furniture_objects_A1", emoji: "🔑" },
    { word: "phone", theme: "basic_technology_devices_A1", emoji: "📱" },
    { word: "book", theme: "furniture_objects_A1", emoji: "📚" },
    { word: "bag", theme: "furniture_objects_A1", emoji: "👜" },
    { word: "pen", theme: "furniture_objects_A1", emoji: "🖊️" },
    { word: "cat", theme: "animals_A1", emoji: "🐈" },
    { word: "dog", theme: "animals_A1", emoji: "🐕" },
    { word: "hand", theme: "body_parts_A1", emoji: "✋" },
    { word: "leg", theme: "body_parts_A1", emoji: "🦵" },
    { word: "eye", theme: "body_parts_A1", emoji: "👁️" },
    { word: "nose", theme: "body_parts_A1", emoji: "👃" },
    { word: "mouth", theme: "body_parts_A1", emoji: "👄" },
    { word: "ear", theme: "body_parts_A1", emoji: "👂" },
    { word: "mother", theme: "immediate_family_A1", emoji: "👩" },
    { word: "father", theme: "immediate_family_A1", emoji: "👨" },
    { word: "work", theme: "job_titles_professions_A1", emoji: "💼" },
    { word: "home", theme: "rooms_of_a_home_A1", emoji: "🏠" },
    { word: "car", theme: "modes_of_transport_A1", emoji: "🚗" },
    { word: "bus", theme: "modes_of_transport_A1", emoji: "🚌" },
    { word: "train", theme: "modes_of_transport_A1", emoji: "🚆" },
    { word: "money", theme: "everyday_shopping_A1", emoji: "💰" },
    { word: "shop", theme: "local_places_services_A1", emoji: "🛒" },
    { word: "family", theme: "immediate_family_A1", emoji: "👪" },
    { word: "friend", theme: "immediate_family_A1", emoji: "👫" },
    { word: "day", theme: "times_day_A1", emoji: "☀️" },
    { word: "week", theme: "times_day_A1", emoji: "📅" },
    { word: "food", theme: "basic_foods_A1", emoji: "🍲" },
    { word: "breakfast", theme: "meals_of_the_day_A1", emoji: "🍳" },
    { word: "lunch", theme: "meals_of_the_day_A1", emoji: "🍱" },
    { word: "dinner", theme: "meals_of_the_day_A1", emoji: "🍽️" },
    { word: "morning", theme: "times_day_A1", emoji: "🌅" },
    { word: "evening", theme: "times_day_A1", emoji: "🌆" },
    { word: "night", theme: "times_day_A1", emoji: "🌙" },
    { word: "today", theme: "times_day_A1", emoji: "📅" },
    { word: "tomorrow", theme: "times_day_A1", emoji: "⏭️" },
    { word: "husband", theme: "immediate_family_A1", emoji: "👨" },
    { word: "wife", theme: "immediate_family_A1", emoji: "👩" },
    { word: "child", theme: "immediate_family_A1", emoji: "👶" },
    { word: "sun", theme: "weather_A1", emoji: "☀️" },
    { word: "rain", theme: "weather_A1", emoji: "🌧️" }
];

const pt = {
    words: ["médico", "pé", "professor", "pizza", "massa", "maçã", "pão", "ovo", "leite", "banana", "café", "chá", "água", "escola", "t-shirt", "calças", "sapato", "chapéu", "cadeira", "mesa", "cama", "chave", "telefone", "livro", "mala", "caneta", "gato", "cão", "mão", "perna", "olho", "nariz", "boca", "orelha", "mãe", "pai", "trabalho", "casa", "carro", "autocarro", "comboio", "dinheiro", "loja", "família", "amigo", "dia", "semana", "comida", "pequeno-almoço", "almoço", "jantar", "manhã", "tarde", "noite", "hoje", "amanhã", "marido", "mulher", "criança", "sol", "chuva"],
    defs: ["Pessoa que ajuda os doentes.", "Parte do corpo na base da perna.", "Pessoa que ajuda a aprender.", "Pão achatado com queijo e tomate.", "Alimento feito de farinha e ovos.", "Fruta redonda, vermelha ou verde.", "Alimento comum de farinha e água.", "Objeto oval posto por uma galinha.", "Líquido branco das vacas.", "Fruta amarela longa.", "Bebida castanha quente.", "Bebida quente de folhas.", "Líquido transparente que bebemos.", "Lugar onde as crianças aprendem.", "Camisa casual de manga curta.", "Roupa para as pernas.", "Algo que se usa nos pés.", "Algo que se usa na cabeça.", "Móvel para uma pessoa se sentar.", "Móvel com quatro pernas.", "Móvel onde se dorme.", "Objeto de metal para abrir portas.", "Dispositivo para falar com pessoas.", "Muitas páginas com palavras para ler.", "Recipiente para carregar coisas.", "Objeto para escrever com tinta.", "Animal pequeno com pelo.", "O melhor amigo do homem.", "Parte do braço com dedos.", "Parte do corpo para caminhar.", "Parte do corpo para ver.", "Parte do rosto para cheirar.", "Parte do rosto para comer.", "Parte do corpo para ouvir.", "Mulher que é mãe.", "Homem que é pai.", "Emprego; lugar para ganhar dinheiro.", "O lugar onde se vive.", "Veículo de quatro rodas.", "Veículo grande para muitas pessoas.", "Veículo que anda sobre carris.", "Moedas ou notas.", "Lugar para comprar coisas.", "Grupo de pessoas aparentadas.", "Pessoa de quem se gosta.", "Período de 24 horas.", "Período de sete dias.", "Coisas que as pessoas comem.", "Primeira refeição do dia.", "Refeição do meio do dia.", "Refeição principal da noite.", "Parte do dia antes do meio-dia.", "Parte do dia depois da tarde.", "Período de escuridão.", "Neste dia.", "No dia depois de hoje.", "Homem casado.", "Mulher casada.", "Pessoa jovem.", "Estrela que dá luz e calor.", "Água que cai das nuvens."],
    articles: ["o", "o", "o", "a", "a", "a", "o", "o", "o", "a", "o", "o", "a", "a", "a", "as", "o", "o", "a", "a", "a", "a", "o", "o", "a", "a", "o", "o", "a", "a", "o", "o", "a", "a", "a", "o", "o", "a", "o", "o", "o", "o", "a", "a", "o", "o", "a", "a", "o", "o", "o", "a", "a", "a", "hoje", "amanhã", "o", "a", "a", "o", "a"],
    genders: ["masculine", "masculine", "masculine", "feminine", "feminine", "feminine", "masculine", "masculine", "masculine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "feminine", "masculine", "masculine", "feminine", "masculine", "masculine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "feminine", "feminine", "masculine", "masculine", "masculine", "feminine", "feminine", "feminine", "adverb", "adverb", "masculine", "feminine", "feminine", "masculine", "feminine"]
};

function gen(lang, dir, transList) {
    const data = enRef.map((item, i) => {
        const obj = {
            word: transList.words[i],
            level: "starter",
            theme: item.theme,
            emoji: item.emoji,
            form: "noun",
            definitions: [{ text: transList.defs[i], examples: [] }]
        };
        if (transList.articles) obj.article = transList.articles[i];
        if (transList.genders) obj.gender = transList.genders[i];
        return obj;
    });
    const content = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "${lang}";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();`;
    fs.writeFileSync(`js/data/${dir}/${lang}/starter/vocabulary.js`, content);
}

gen('pt', 'romance', pt);

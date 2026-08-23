(function() {
    const data = {
      fluency: [
        'Seu destino de férias ideal 🌴',
        'Uma habilidade que você gostaria de ter 🎸',
        'A melhor refeição que você já comeu 🍜',
        'Um lugar que você quer visitar 🗺️',
        'Sua estação favorita e por quê 🍂',
        'Uma memória de infância 🧸',
        'A pessoa mais interessante que você conhece 🙋',
        'O que você faria com 1 milhão de euros? 💰',
        'Descreva seu fim de semana perfeito ☀️',
        'Um livro ou filme que mudou sua visão 📚'
      ],
      opinions: [
        { text: 'As redes sociais fazem mais mal do que bem.', level: 'intermediate' },
        { text: 'Todos deveriam aprender pelo menos dois idiomas.', level: 'intermediate' },
        { text: 'Trabalhar em casa é melhor do que no escritório.', level: 'intermediate' },
        { text: 'Dinheiro não compra felicidade.', level: 'intermediate' }
      ],
      battle: [
        ['Montanhas 🏔️', 'Praia 🏖️'],
        ['Café ☕', 'Chá 🍵'],
        ['Madrugador 🌅', 'Noturno 🦉'],
        ['Vida na cidade 🏙️', 'Vida no campo 🌾'],
        ['Ler 📚', 'Assistir filmes 🎬']
      ],
      critic: [],
      action: {
        starter: ['Gato', 'Cão', 'Casa', 'Carro', 'Livro', 'Água', 'Sol', 'Lua', 'Árvore', 'Telefone'],
        elementary: ['Cozinha', 'Jardim', 'Comboio', 'Médico', 'Professor', 'Música', 'Aniversário'],
        intermediate: ['Museu', 'Entrevista', 'Arquiteto', 'Jornalista', 'Parlamento', 'Orquestra'],
        upper_intermediate: ['Filantropia', 'Embaixador', 'Hipótese', 'Empreendedor', 'Arqueologia'],
        advanced: ['Paradigma', 'Yuxtaposição', 'Anacronismo', 'Verossimilhança'],
        proficiency: ['Ubiquidade', 'Efêmero', 'Perspicaz', 'Equanimidade']
      },
      identity: [
        { person: 'Um bombeiro', clue: 'Usa capacete e apaga fogos com água.', level: 'elementary' },
        { person: 'Um chef', clue: 'Trabalha numa cozinha e prepara pratos.', level: 'elementary' }
      ],
      wordlinker: [
        { words: ['Maçã', 'Laranja', 'Banana', 'Cenoura'], odd: 'Cenoura', link: 'Frutas', oddReason: 'Cenoura é um vegetal' }
      ],
      etymology: [],
      storychain: []
    };

    window.gameData = window.gameData || {};
    window.gameData['pt'] = data;
    window.gameData['br'] = data;
})();

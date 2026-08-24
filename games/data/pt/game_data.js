(function() {
    const data = {
      fluency: [
        { text: 'Sua rotina matinal ☕', level: 'starter' },
        { text: 'Uma memória de infância 🧸', level: 'starter' },
        { text: 'Sua estação favorita e por quê 🍂', level: 'starter' },
        { text: 'Uma habilidade que você gostaria de ter 🎸', level: 'elementary' },
        { text: 'A melhor refeição que você já comeu 🍜', level: 'elementary' },
        { text: 'Um lugar que você quer visitar 🗺️', level: 'elementary' },
        { text: 'Seu destino de férias ideal 🌴', level: 'intermediate' },
        { text: 'A pessoa mais interessante que você conhece 🙋', level: 'intermediate' },
        { text: 'Descreva seu fim de semana perfeito ☀️', level: 'intermediate' },
        { text: 'O que você faria com 1 milhão de euros? 💰', level: 'upper_intermediate' },
        { text: 'Um livro ou filme que mudou sua visão 📚', level: 'upper_intermediate' },
        { text: 'O que significa felicidade para você? 😊', level: 'advanced' }
      ],
      opinions: [
        { text: 'As redes sociais fazem mais mal do que bem.', level: 'intermediate' },
        { text: 'Todos deveriam aprender pelo menos dois idiomas.', level: 'intermediate' },
        { text: 'Trabalhar em casa é melhor do que no escritório.', level: 'intermediate' },
        { text: 'Dinheiro não compra felicidade.', level: 'intermediate' },
        { text: 'A renda básica universal é necessária para as economias do futuro.', level: 'upper_intermediate' },
        { text: 'A IA generativa nunca poderá substituir a verdadeira criatividade artística humana.', level: 'advanced' }
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
        advanced: ['Paradigma', 'Juxtaposição', 'Anacronismo', 'Verossimilhança'],
        proficiency: ['Ubiquidade', 'Efêmero', 'Perspicaz', 'Equanimidade']
      },
      identity: [
        { person: 'Um bombeiro', clue: 'Usa capacete e apaga fogos com água.', level: 'elementary' },
        { person: 'Um chef', clue: 'Trabalha numa cozinha e prepara pratos deliciosos.', level: 'elementary' },
        { person: 'Um astronauta', clue: 'Viaja no espaço além da Terra.', level: 'intermediate' },
        { person: 'Um bibliotecario', clue: 'Gere uma biblioteca e ajuda as pessoas a encontrar livros.', level: 'elementary' },
        { person: 'Um detetive', clue: 'Investiga mistérios e procura pistas.', level: 'intermediate' },
        { person: 'Um arquiteto', clue: 'Projeta casas e edifícios antes da sua construção.', level: 'upper_intermediate' },
        { person: 'Um diplomata', clue: 'Representa o seu país em relações internacionais oficiais.', level: 'advanced' }
      ],
      wordlinker: [
        { words: ['Maçã', 'Laranja', 'Banana', 'Cenoura'], odd: 'Cenoura', link: 'Frutas', oddReason: 'Cenoura é um vegetal' },
        { words: ['Lisboa', 'Roma', 'Tóquio', 'Amazonas'], odd: 'Amazonas', link: 'Capitais', oddReason: 'O Amazonas é um rio' },
        { words: ['Piano', 'Guitarra', 'Violino', 'Trompete'], odd: 'none', link: 'Instrumentos musicais', oddReason: 'Todos são instrumentos' }
      ],
      etymology: [],
      storychain: []
    };

    window.gameData = window.gameData || {};
    window.gameData['pt'] = data;
    window.gameData['br'] = data;
})();

(function() {
    const data = {
      fluency: [
        'Tu destino de vacaciones ideal 🌴',
        'Una habilidad que desearías tener 🎸',
        'La mejor comida que has probado 🍜',
        'Un lugar que quieres visitar 🗺️',
        'Tu estación favorita y por qué 🍂',
        'Un recuerdo de la infancia 🧸',
        'La persona más interesante que conoces 🙋',
        '¿Qué harías con 1 millón de euros? 💰',
        'Describe tu fin de semana perfecto ☀️',
        'Un libro o película que cambió tu perspectiva 📚',
        'Si pudieras vivir en cualquier lugar del mundo… 🌍',
        'Tu rutina de la mañana ☕',
        'Algo de lo que estás orgulloso 🏆',
        '¿Qué significa la felicidad para ti? 😊',
        'La última vez que intentaste algo nuevo 🎯'
      ],
      opinions: [
        { text: 'Las redes sociales hacen más daño que bien.', level: 'intermediate' },
        { text: 'Todos deberían aprender al menos dos idiomas.', level: 'intermediate' },
        { text: 'El trabajo desde casa es mejor que el trabajo en la oficina.', level: 'intermediate' },
        { text: 'El dinero no compra la felicidad.', level: 'intermediate' },
        { text: 'La tecnología nos hace menos sociables.', level: 'intermediate' },
        { text: 'Nunca es tarde para aprender algo nuevo.', level: 'intermediate' },
        { text: 'Viajar es la mejor forma de educación.', level: 'intermediate' },
        { text: 'Los animales no deberían estar en zoológicos.', level: 'intermediate' }
      ],
      battle: [
        ['Montañas 🏔️', 'Playa 🏖️'],
        ['Café ☕', 'Té 🍵'],
        ['Madrugador 🌅', 'Noctámbulo 🦉'],
        ['Vida en la ciudad 🏙️', 'Vida en el campo 🌾'],
        ['Lectura 📚', 'Ver películas 🎬'],
        ['Verano ☀️', 'Invierno ❄️'],
        ['Gatos 🐱', 'Perros 🐶'],
        ['Trabajo desde casa 🏠', 'Trabajo en oficina 🏢'],
        ['Dulce 🍰', 'Salado 🧀'],
        ['Viajar solo ✈️', 'Viajar con amigos 👥']
      ],
      critic: [],
      action: {
        starter: ['Gato', 'Perro', 'Casa', 'Coche', 'Libro', 'Agua', 'Sol', 'Luna', 'Árbol', 'Teléfono'],
        elementary: ['Cocina', 'Jardín', 'Tren', 'Médico', 'Profesor', 'Música', 'Cumpleaños', 'Natación'],
        intermediate: ['Museo', 'Entrevista', 'Arquitecto', 'Periodista', 'Parlamento', 'Orquesta', 'Maratón'],
        upper_intermediate: ['Filantropía', 'Embajador', 'Hipótesis', 'Emprendedor', 'Arqueología', 'Telescopio'],
        advanced: ['Paradigma', 'Yuxtaposición', 'Anacronismo', 'Verosimilitud', 'Magnánimo'],
        proficiency: ['Ubicuidad', 'Efímero', 'Pugnaz', 'Perspicaz', 'Sicofanta', 'Ecuanimidad']
      },
      identity: [
        { person: 'Un bombero', clue: 'Lleva casco y apaga incendios con agua.', level: 'elementary' },
        { person: 'Un chef', clue: 'Trabaja en una cocina y prepara platos.', level: 'elementary' },
        { person: 'Un astronauta', clue: 'Viaja más allá de nuestro planeta.', level: 'intermediate' },
        { person: 'Un bibliotecario', clue: 'Está rodeado de libros todo el día.', level: 'elementary' },
        { person: 'Un detective', clue: 'Resuelve misterios y busca pistas.', level: 'intermediate' }
      ],
      wordlinker: [
        { words: ['Manzana', 'Naranja', 'Plátano', 'Zanahoria'], odd: 'Zanahoria', link: 'Frutas', oddReason: 'La zanahoria es una verdura' },
        { words: ['Madrid', 'Roma', 'Tokio', 'Amazonas'], odd: 'Amazonas', link: 'Capitales', oddReason: 'El Amazonas es un río' },
        { words: ['Piano', 'Guitarra', 'Violín', 'Trompeta'], odd: 'none', link: 'Instrumentos musicales', oddReason: 'Todos son instrumentos' }
      ],
      etymology: [],
      storychain: []
    };

    window.gameData = window.gameData || {};
    window.gameData['es'] = data;
})();

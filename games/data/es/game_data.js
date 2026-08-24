(function() {
    const data = {
      fluency: [
        { text: 'Tu rutina de la mañana ☕', level: 'starter' },
        { text: 'Un recuerdo de la infancia 🧸', level: 'starter' },
        { text: 'Tu estación favorita y por qué 🍂', level: 'starter' },
        { text: 'Una habilidad que desearías tener 🎸', level: 'elementary' },
        { text: 'La mejor comida que has probado 🍜', level: 'elementary' },
        { text: 'Un lugar que quieres visitar 🗺️', level: 'elementary' },
        { text: 'Tu destino de vacaciones ideal 🌴', level: 'intermediate' },
        { text: 'La persona más interesante que conoces 🙋', level: 'intermediate' },
        { text: 'Describe tu fin de semana perfecto ☀️', level: 'intermediate' },
        { text: 'La última vez que intentaste algo nuevo 🎯', level: 'intermediate' },
        { text: '¿Qué harías con 1 millón de euros? 💰', level: 'upper_intermediate' },
        { text: 'Un libro o película que cambió tu perspectiva 📚', level: 'upper_intermediate' },
        { text: 'Si pudieras vivir en cualquier lugar del mundo… 🌍', level: 'upper_intermediate' },
        { text: 'Algo de lo que estás orgulloso 🏆', level: 'upper_intermediate' },
        { text: '¿Qué significa la felicidad para ti? 😊', level: 'advanced' }
      ],
      opinions: [
        { text: 'Las redes sociales hacen más daño que bien.', level: 'intermediate' },
        { text: 'Todos deberían aprender al menos dos idiomas.', level: 'intermediate' },
        { text: 'El trabajo desde casa es mejor que el trabajo en la oficina.', level: 'intermediate' },
        { text: 'El dinero no compra la felicidad.', level: 'intermediate' },
        { text: 'La tecnología nos hace menos sociables.', level: 'intermediate' },
        { text: 'Nunca es tarde para aprender algo nuevo.', level: 'intermediate' },
        { text: 'Viajar es la mejor forma de educación.', level: 'intermediate' },
        { text: 'Los animales no deberían estar en zoológicos.', level: 'intermediate' },
        { text: 'La renta básica universal es necesaria para las economías futuras.', level: 'upper_intermediate' },
        { text: 'La IA generativa nunca podrá reemplazar la creatividad artística humana.', level: 'advanced' }
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
        { person: 'Un chef', clue: 'Trabaja en una cocina y prepara deliciosos platos.', level: 'elementary' },
        { person: 'Un astronauta', clue: 'Viaja al espacio más allá de la Tierra.', level: 'intermediate' },
        { person: 'Un bibliotecario', clue: 'Gestiona una biblioteca y ayuda a la gente a encontrar libros.', level: 'elementary' },
        { person: 'Un detective', clue: 'Investiga misterios y busca pistas.', level: 'intermediate' },
        { person: 'Un arquitecto', clue: 'Diseña casas y edificios antes de su construcción.', level: 'upper_intermediate' },
        { person: 'Un diplomático', clue: 'Representa a su país en relaciones internacionales oficiales.', level: 'advanced' }
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

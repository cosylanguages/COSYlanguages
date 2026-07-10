(function() {
    const lang = "pt";
    const data = [
    {
        "t": "Sua família",
        "h": [
            "Quantas pessoas há na sua família?",
            "Você tem irmãos ou irmãs?",
            "Onde sua família mora?",
            "Com quem você mora?",
            "O que vocês fazem juntos em família?"
        ],
        "level": "starter",
        "theme": "people",
        "word": "Sua família",
        "lang": "pt",
        "sub_theme": "family",
        "form": "phrase",
        "definitions": [
            {
                "text": "Sua família",
                "examples": []
            }
        ],
        "id": "pt_starter_people_001"
    },
    {
        "t": "Sua casa",
        "h": [
            "Quantos quartos sua casa tem?",
            "Qual é o seu quarto favorito?",
            "Sua casa é grande ou pequena?",
            "O que você consegue ver da sua janela?",
            "Você gosta da sua casa?"
        ],
        "level": "starter",
        "theme": "furniture",
        "word": "Sua casa",
        "lang": "pt",
        "sub_theme": "rooms",
        "form": "phrase",
        "definitions": [
            {
                "text": "Sua casa",
                "examples": []
            }
        ],
        "id": "pt_starter_furniture_005"
    },
    {
        "t": "Sua comida favorita",
        "h": [
            "Qual é a sua refeição favorita?",
            "Você gosta de comida doce ou salgada?",
            "Você cozinha em casa?",
            "De que comida você não gosta?",
            "O que você come no café da manhã?"
        ],
        "level": "starter",
        "theme": "food_drink",
        "word": "Sua comida favorita",
        "lang": "pt",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Sua comida favorita",
                "examples": []
            }
        ],
        "id": "pt_starter_food_drink_009"
    },
    {
        "t": "Sua rotina matinal",
        "h": [
            "A que horas você acorda?",
            "Qual é a primeira coisa que você faz?",
            "Você toma café da manhã?",
            "Como você vai para o trabalho ou escola?",
            "Sua manhã é calma ou agitada?"
        ],
        "level": "starter",
        "theme": "work",
        "word": "Sua rotina matinal",
        "lang": "pt",
        "sub_theme": "workplace",
        "form": "phrase",
        "definitions": [
            {
                "text": "Sua rotina matinal",
                "examples": []
            }
        ],
        "id": "pt_starter_work_003"
    },
    {
        "t": "Seu animal de estimação ou um animal que você quer",
        "h": [
            "Você tem um animal de estimação?",
            "De qual animal você gosta?",
            "Qual é um bom nome para um animal de estimação?",
            "Você é uma pessoa de cachorros ou de gatos?",
            "É fácil ter um animal de estimação?"
        ],
        "level": "starter",
        "theme": "animals",
        "word": "Seu animal de estimação ou um animal que você quer",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Seu animal de estimação ou um animal que você quer",
                "examples": []
            }
        ],
        "id": "pt_starter_animals_001"
    },
    {
        "t": "Um esporte que você gosta",
        "h": [
            "De qual esporte você gosta?",
            "Você joga ou assiste?",
            "Quando você pratica esse esporte?",
            "É um esporte de equipe ou individual?",
            "O esporte é importante para você?"
        ],
        "level": "starter",
        "theme": "social",
        "word": "Um esporte que você gosta",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Um esporte que você gosta",
                "examples": []
            }
        ],
        "id": "pt_starter_social_010"
    },
    {
        "t": "O que você faz nos fins de semana",
        "h": [
            "O que você costuma fazer no sábado?",
            "Você sai ou fica em casa?",
            "Você vê amigos?",
            "O que você gosta de fazer para relaxar?",
            "Seu fim de semana é agitado ou tranquilo?"
        ],
        "level": "starter",
        "theme": "social",
        "word": "O que você faz nos fins de semana",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "O que você faz nos fins de semana",
                "examples": []
            }
        ],
        "id": "pt_starter_social_011"
    },
    {
        "t": "Sua estação favorita",
        "h": [
            "Qual é a sua estação favorita?",
            "Como está o tempo?",
            "O que as pessoas fazem nesta estação?",
            "O que você veste?",
            "Por que você gosta desta estação?"
        ],
        "level": "starter",
        "theme": "nature",
        "word": "Sua estação favorita",
        "lang": "pt",
        "sub_theme": "seasons",
        "form": "phrase",
        "definitions": [
            {
                "text": "Sua estação favorita",
                "examples": []
            }
        ],
        "id": "pt_starter_nature_005"
    },
    {
        "t": "Seu melhor amigo",
        "h": [
            "Qual é o nome do seu melhor amigo?",
            "Onde vocês se conheceram?",
            "O que vocês fazem juntos?",
            "Como eles são fisicamente?",
            "Por que eles são seu melhor amigo?"
        ],
        "level": "starter",
        "theme": "people",
        "word": "Seu melhor amigo",
        "lang": "pt",
        "sub_theme": "family",
        "form": "phrase",
        "definitions": [
            {
                "text": "Seu melhor amigo",
                "examples": []
            }
        ],
        "id": "pt_starter_people_002"
    },
    {
        "t": "Seu trabalho ou escola",
        "h": [
            "O que você faz — trabalha ou estuda?",
            "O que você gosta nisso?",
            "A que horas você começa?",
            "Com quem você trabalha ou estuda?",
            "É fácil ou difícil?"
        ],
        "level": "starter",
        "theme": "jobs",
        "word": "Seu trabalho ou escola",
        "lang": "pt",
        "sub_theme": "professions",
        "form": "phrase",
        "definitions": [
            {
                "text": "Seu trabalho ou escola",
                "examples": []
            }
        ],
        "id": "pt_starter_jobs_001"
    },
    {
        "t": "Coisas que você gosta e não gosta",
        "h": [
            "Qual é uma coisa que você realmente gosta?",
            "Qual é uma coisa que você não gosta?",
            "Você gosta de tempo frio?",
            "Você gosta de cozinhar?",
            "Você gosta de acordar cedo?"
        ],
        "level": "starter",
        "theme": "emotions",
        "word": "Coisas que você gosta e não gosta",
        "lang": "pt",
        "sub_theme": "positive",
        "form": "phrase",
        "definitions": [
            {
                "text": "Coisas que você gosta e não gosta",
                "examples": []
            }
        ],
        "id": "pt_starter_emotions_001"
    },
    {
        "t": "Sua cor favorita e por quê",
        "h": [
            "Qual é a sua cor favorita?",
            "Onde você vê essa cor?",
            "Você usa essa cor?",
            "Essa cor está na sua casa?",
            "Seus amigos também gostam dessa cor?"
        ],
        "level": "starter",
        "theme": "colours",
        "word": "Sua cor favorita e por quê",
        "lang": "pt",
        "sub_theme": "basic",
        "form": "phrase",
        "definitions": [
            {
                "text": "Sua cor favorita e por quê",
                "examples": []
            }
        ],
        "id": "pt_starter_colours_001"
    },
    {
        "t": "Números na sua vida",
        "h": [
            "Qual é a sua idade?",
            "Qual é o seu número da sorte?",
            "Quantas pessoas moram na sua casa?",
            "A que horas você acorda?",
            "Quantos idiomas você fala?"
        ],
        "level": "starter",
        "theme": "numbers",
        "word": "Números na sua vida",
        "lang": "pt",
        "sub_theme": "cardinal",
        "form": "phrase",
        "definitions": [
            {
                "text": "Números na sua vida",
                "examples": []
            }
        ],
        "id": "pt_starter_numbers_001"
    },
    {
        "t": "Sua bebida favorita",
        "h": [
            "O que você bebe de manhã?",
            "Você prefere chá ou café?",
            "Você bebe muita água?",
            "Qual é uma bebida especial no seu país?",
            "O que você bebe quando está feliz?"
        ],
        "level": "starter",
        "theme": "food_drink",
        "word": "Sua bebida favorita",
        "lang": "pt",
        "sub_theme": "drinks",
        "form": "phrase",
        "definitions": [
            {
                "text": "Sua bebida favorita",
                "examples": []
            }
        ],
        "id": "pt_starter_food_drink_010"
    },
    {
        "t": "Seu país",
        "h": [
            "Qual é o seu país?",
            "Qual é a capital?",
            "Como está o tempo?",
            "Que comida é famosa lá?",
            "O que você ama no seu país?"
        ],
        "level": "starter",
        "theme": "places",
        "word": "Seu país",
        "lang": "pt",
        "sub_theme": "geography",
        "form": "phrase",
        "definitions": [
            {
                "text": "Seu país",
                "examples": []
            }
        ],
        "id": "pt_starter_places_001"
    },
    {
        "t": "Coisas no seu quarto",
        "h": [
            "Que móveis há no seu quarto?",
            "De que cor é o seu quarto?",
            "É grande ou pequeno?",
            "O que há na sua mesa ou escrivaninha?",
            "Você gosta do seu quarto?"
        ],
        "level": "starter",
        "theme": "furniture",
        "word": "Coisas no seu quarto",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Coisas no seu quarto",
                "examples": []
            }
        ],
        "id": "pt_starter_furniture_006"
    },
    {
        "t": "Seu dia típico",
        "h": [
            "A que horas você começa o dia?",
            "O que você faz de manhã?",
            "O que você come no almoço?",
            "O que você faz à noite?",
            "A que horas você vai para a cama?"
        ],
        "level": "starter",
        "theme": "work",
        "word": "Seu dia típico",
        "lang": "pt",
        "sub_theme": "workplace",
        "form": "phrase",
        "definitions": [
            {
                "text": "Seu dia típico",
                "examples": []
            }
        ],
        "id": "pt_starter_work_004"
    },
    {
        "t": "Coisas que você pode ver da sua janela",
        "h": [
            "O que há fora da sua janela?",
            "Você consegue ver árvores ou prédios?",
            "O que você ouve?",
            "É uma vista tranquila ou movimentada?",
            "Você gosta desta vista?"
        ],
        "level": "starter",
        "theme": "furniture",
        "word": "Coisas que você pode ver da sua janela",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Coisas que você pode ver da sua janela",
                "examples": []
            }
        ],
        "id": "pt_starter_furniture_007"
    },
    {
        "t": "Música que você gosta",
        "h": [
            "Que música você ouve?",
            "Quem é seu cantor favorito?",
            "Quando você ouve música?",
            "Você sabe cantar ou tocar um instrumento?",
            "Qual música te faz feliz?"
        ],
        "level": "starter",
        "theme": "music",
        "word": "Música que você gosta",
        "lang": "pt",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Música que você gosta",
                "examples": []
            }
        ],
        "id": "pt_starter_music_001"
    },
    {
        "t": "Seu lugar favorito na sua cidade",
        "h": [
            "Qual é o seu lugar favorito?",
            "Onde fica?",
            "Por que você gosta?",
            "Você vai lá com frequência?",
            "Com quem você vai?"
        ],
        "level": "starter",
        "theme": "places",
        "word": "Seu lugar favorito na sua cidade",
        "lang": "pt",
        "sub_theme": "city",
        "form": "phrase",
        "definitions": [
            {
                "text": "Seu lugar favorito na sua cidade",
                "examples": []
            }
        ],
        "id": "pt_starter_places_002"
    }
];
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();

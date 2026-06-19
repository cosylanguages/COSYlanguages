// TODO: verify level classification
(function() {
const data = [
    {
        "word": "reificar",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🗿",
        "subtext": "reificar un concepto / reificar el mercado / reificación del trabajo",
        "form": "verb",
        "definitions": [
            {
                "text": "Considerar una idea abstracta como si fuera algo material o concreto.",
                "examples": [
                    "Los modelos económicos reifican las fuerzas del mercado, haciéndolas parecer naturales."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reifiqué",
        "v3": "reificado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "reificando",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_001"
    },
    {
        "word": "sublimar",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🎭",
        "subtext": "sublimar el deseo / sublimación del impulso / redirigir hacia",
        "form": "verb",
        "definitions": [
            {
                "text": "Canalizar impulsos o sentimientos hacia actividades socialmente aceptadas o creativas.",
                "examples": [
                    "Sublimó su frustración política en la escritura académica."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sublimé",
        "v3": "sublimado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "sublimando",
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_001"
    },
    {
        "word": "predicar",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🗣️",
        "subtext": "predicar de / predicar una afirmación / basarse en el supuesto",
        "form": "verb",
        "definitions": [
            {
                "text": "Afirmar algo del sujeto; o basar una afirmación en algo.",
                "examples": [
                    "Su argumento predica un nivel de confianza que ya no existe."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "prediqué",
        "v3": "predicado",
        "group": "ar",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "phonetics",
        "id": "es_proficiency_language_002"
    },
    {
        "word": "instanciar",
        "level": "proficiency",
        "theme": "technology",
        "emoji": "📋",
        "subtext": "instanciar un concepto / instanciar en la práctica",
        "form": "verb",
        "definitions": [
            {
                "text": "Representar o ilustrar algo abstracto mediante un ejemplo concreto.",
                "examples": [
                    "El estudio de caso instancia la teoría de la captura del regulador."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "instancié",
        "v3": "instanciado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "instanciando",
        "lang": "es",
        "sub_theme": "software",
        "id": "es_proficiency_technology_001"
    },
    {
        "word": "negar",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "subtext": "negar un argumento / negar un derecho / negación dialéctica",
        "form": "verb",
        "definitions": [
            {
                "text": "Invalidar o anular algo.",
                "examples": [
                    "La nueva cláusula niega efectivamente el derecho que parece otorgar."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "negué",
        "v3": "negado",
        "group": "ar",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_003"
    },
    {
        "word": "trascender",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🌌",
        "subtext": "trascender límites / trascender categorías / trascender lo personal",
        "form": "verb",
        "definitions": [
            {
                "text": "Ir más allá de los límites de algo.",
                "examples": [
                    "El gran arte trasciende el momento histórico de su creación."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "trascendí",
        "v3": "trascendido",
        "group": "er",
        "auxiliary": "haber",
        "v4": "trascendiendo",
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_002"
    },
    {
        "word": "mediar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "mediar entre / mediar un conflicto / mediado socialmente",
        "form": "verb",
        "definitions": [
            {
                "text": "Intervenir para reconciliar o conectar dos partes.",
                "examples": [
                    "El lenguaje media nuestra relación con el mundo exterior."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "medié",
        "v3": "mediado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "mediando",
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_001"
    },
    {
        "word": "elidir",
        "level": "proficiency",
        "theme": "language",
        "emoji": "✂️",
        "subtext": "elidir una distinción / elidir la diferencia / elidir deliberadamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Omitir o pasar por alto algo intencionalmente.",
                "examples": [
                    "El informe elide la diferencia entre pobreza y privación."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "elidí",
        "v3": "elidido",
        "group": "ir",
        "auxiliary": "haber",
        "v4": "elidiendo",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_004"
    },
    {
        "word": "ofuscar",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌫️",
        "subtext": "ofuscar la verdad / ofuscación deliberada / ofuscar con jerga",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer algo confuso o difícil de entender, a menudo deliberadamente.",
                "examples": [
                    "El lenguaje técnico parecía diseñado para ofuscar, no para aclarar."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ofusqué",
        "v3": "ofuscado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "ofuscando",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_005"
    },
    {
        "word": "fusionar",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌀",
        "subtext": "fusionar problemas / fusionar con / fusionar peligrosamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Combinar dos o más ideas en una sola, a menudo de forma errónea.",
                "examples": [
                    "El debate fusiona la migración irregular con la inmigración ilegal."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fusioné",
        "v3": "fusionado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "fusionando",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_006"
    },
    {
        "word": "invocar",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "subtext": "invocar un derecho / invocar un precedente / invocar un argumento",
        "form": "verb",
        "definitions": [
            {
                "text": "Citar o apelar a algo como autoridad para una acción.",
                "examples": [
                    "Invocó el derecho a la libertad de expresión en su defensa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invoqué",
        "v3": "invocado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "invocando",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_007"
    },
    {
        "word": "destacar",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🔦",
        "subtext": "destacar un problema / destacar una perspectiva / destacar deliberadamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer que algo sea el foco de atención.",
                "examples": [
                    "La película destaca deliberadamente la raza como su lente central."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "destaqué",
        "v3": "destacado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "destacando",
        "lang": "es",
        "sub_theme": "art",
        "id": "es_proficiency_art_culture_001"
    },
    {
        "word": "recuperar",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "♻️",
        "subtext": "recuperar un movimiento / ser recuperado por / recuperación cultural",
        "form": "verb",
        "definitions": [
            {
                "text": "Incorporar algo (como una estética rebelde) a la cultura dominante.",
                "examples": [
                    "La industria de la moda recuperó la estética rebelde del punk."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recuperé",
        "v3": "recuperado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "recuperando",
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_art_culture_002"
    },
    {
        "word": "desestabilizar",
        "level": "proficiency",
        "theme": "work",
        "emoji": "⚖️",
        "subtext": "desestabilizar un régimen / desestabilizar supuestos / desestabilizar deliberadamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer que algo se vuelva inestable o pierda su equilibrio.",
                "examples": [
                    "La evidencia desestabiliza la premisa central del informe."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "desestabilicé",
        "v3": "desestabilizado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "desestabilizando",
        "lang": "es",
        "sub_theme": "business_lang",
        "id": "es_proficiency_work_001"
    },
    {
        "word": "mercantilizar",
        "level": "proficiency",
        "theme": "work",
        "emoji": "💰",
        "subtext": "mercantilizar el trabajo / mercantilizar el cuidado / mercantilización de la atención",
        "form": "verb",
        "definitions": [
            {
                "text": "Tratar algo como un producto comercial que se puede comprar y vender.",
                "examples": [
                    "La industria del bienestar mercantiliza la salud mental y el autocuidado."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mercantilicé",
        "v3": "mercantilizado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "mercantilizando",
        "lang": "es",
        "sub_theme": "business_lang",
        "id": "es_proficiency_work_002"
    },
    {
        "word": "instrumentalizar",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🛠️",
        "subtext": "instrumentalizar personas / instrumentalizar una idea",
        "form": "verb",
        "definitions": [
            {
                "text": "Utilizar algo o a alguien simplemente como un medio para lograr un fin.",
                "examples": [
                    "Los críticos argumentaron que la política instrumentalizaba el bienestar de los trabajadores."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "instrumentalicé",
        "v3": "instrumentalizado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "instrumentalizando",
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_003"
    },
    {
        "word": "valorizar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💎",
        "subtext": "valorizar el trabajo / valorizar un concepto / ser valorizado por la cultura",
        "form": "verb",
        "definitions": [
            {
                "text": "Asignar un gran valor o importancia a algo.",
                "examples": [
                    "La cultura moderna valoriza la productividad por encima del descanso y la quietud."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "valoricé",
        "v3": "valorizado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "valorizando",
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_002"
    },
    {
        "word": "fetichizar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧿",
        "subtext": "fetichizar una idea / fetichismo de la mercancía / fetichizar el crecimiento",
        "form": "verb",
        "definitions": [
            {
                "text": "Tener un compromiso o interés excesivo e irracional por algo.",
                "examples": [
                    "La cultura de las startups fetichiza la disrupción como un fin en sí mismo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fetichicé",
        "v3": "fetichizado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "fetichizando",
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_003"
    },
    {
        "word": "alienar",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "👽",
        "subtext": "alienar a alguien / sentirse alienado / alienación del trabajo",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer que alguien se sienta aislado o separado de su entorno o de sí mismo.",
                "examples": [
                    "Las condiciones industriales alienan a los trabajadores de cualquier sentido de oficio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "aliené",
        "v3": "alienado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "alienando",
        "lang": "es",
        "sub_theme": "behavior",
        "id": "es_proficiency_psychology_004"
    },
    {
        "word": "demarcar",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚧",
        "subtext": "demarcar un límite / demarcar claramente / línea de demarcación",
        "form": "verb",
        "definitions": [
            {
                "text": "Establecer los límites de algo.",
                "examples": [
                    "La ley intenta demarcar la línea entre regulación y censura."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "demarqué",
        "v3": "demarcado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "demarcando",
        "lang": "es",
        "sub_theme": "behavior",
        "id": "es_proficiency_psychology_005"
    },
    {
        "word": "delimitar",
        "level": "proficiency",
        "theme": "school",
        "emoji": "📏",
        "subtext": "delimitar el alcance / delimitar un concepto / cuidadosamente delimitado",
        "form": "verb",
        "definitions": [
            {
                "text": "Determinar o fijar con precisión los límites de algo.",
                "examples": [
                    "El estudio delimita deliberadamente su alcance para evitar la sobregeneralización."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "delimité",
        "v3": "delimitado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "delimitando",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_001"
    },
    {
        "word": "militar",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🛡️",
        "subtext": "militar contra / militar fuertemente / militar a favor de",
        "form": "verb",
        "definitions": [
            {
                "text": "(De un hecho o circunstancia) tener peso o influencia en contra de algo.",
                "examples": [
                    "La complejidad del sistema milita contra una reforma efectiva."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "milité",
        "v3": "militado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "militando",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_008"
    },
    {
        "word": "viciar",
        "level": "proficiency",
        "theme": "work",
        "emoji": "☣️",
        "subtext": "viciar una afirmación / viciar un argumento / legalmente viciado",
        "form": "verb",
        "definitions": [
            {
                "text": "Invalidar o arruinar la eficacia de algo.",
                "examples": [
                    "El fallo metodológico vicia las conclusiones centrales del estudio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "vicié",
        "v3": "viciado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "viciando",
        "lang": "es",
        "sub_theme": "business_lang",
        "id": "es_proficiency_work_003"
    },
    {
        "word": "contradecir",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🗣️",
        "subtext": "difícil de contradecir / nadie puede contradecir / contradecir una afirmación",
        "form": "verb",
        "definitions": [
            {
                "text": "Negar o decir lo contrario de lo que alguien ha dicho.",
                "examples": [
                    "Es difícil contradecir la evidencia presentada por la investigación."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "contradije",
        "v3": "contradicho",
        "group": "ir",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_009"
    },
    {
        "word": "abrogar",
        "level": "proficiency",
        "theme": "work",
        "emoji": "📜",
        "subtext": "abrogar un acuerdo / abrogar un tratado / abrogación unilateral",
        "form": "verb",
        "definitions": [
            {
                "text": "Abolir o anular una ley o acuerdo formal.",
                "examples": [
                    "El gobierno buscó abrogar el tratado unilateralmente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "abrogué",
        "v3": "abrogado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "abrogando",
        "lang": "es",
        "sub_theme": "business_lang",
        "id": "es_proficiency_work_004"
    },
    {
        "word": "contravenir",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚫",
        "subtext": "contravenir una ley / contravenir reglamentos / contravenir un acuerdo",
        "form": "verb",
        "definitions": [
            {
                "text": "Obrar en contra de lo que establece una ley o norma.",
                "examples": [
                    "Se determinó que la decisión contravenía la ley de competencia de la UE."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "contravine",
        "v3": "contravenido",
        "group": "ir",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_010"
    },
    {
        "word": "subsumir",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "📂",
        "subtext": "subsumir bajo / ser subsumido por / subsumir en una categoría",
        "form": "verb",
        "definitions": [
            {
                "text": "Incluir algo como parte de un grupo o categoría más amplia.",
                "examples": [
                    "Su teoría subsume todos los relatos anteriores dentro de un marco único."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "subsumí",
        "v3": "subsumido",
        "group": "ir",
        "auxiliary": "haber",
        "v4": "subsumiendo",
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_006"
    },
    {
        "word": "deconstruir",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🧩",
        "subtext": "deconstruir un argumento / deconstruir un texto / deconstrucción derridiana",
        "form": "verb",
        "definitions": [
            {
                "text": "Analizar un texto o argumento para exponer sus contradicciones internas y supuestos.",
                "examples": [
                    "Deconstruyó la política para revelar su sesgo ideológico."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "deconstruí",
        "v3": "deconstruido",
        "group": "ir",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "literature",
        "id": "es_proficiency_art_culture_003"
    },
    {
        "word": "precluir",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "subtext": "precluir una opción / precluir el debate / precluir la posibilidad de",
        "form": "verb",
        "definitions": [
            {
                "text": "Impedir o excluir algo con antelación.",
                "examples": [
                    "El planteamiento de la pregunta precluye las respuestas más interesantes."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "precluí",
        "v3": "precluido",
        "group": "ir",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_011"
    },
    {
        "word": "dialectizar",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "☯️",
        "subtext": "dialectizar un binario / método dialéctico / tesis y antítesis",
        "form": "verb",
        "definitions": [
            {
                "text": "Tratar algo de forma dialéctica, considerando la interacción de fuerzas opuestas.",
                "examples": [
                    "Dialectiza la oposición entre libertad y seguridad."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dialecticé",
        "v3": "dialectizado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "dialectizando",
        "lang": "es",
        "sub_theme": "cognitive_processes",
        "id": "es_proficiency_psychology_007"
    },
    {
        "word": "hegemonizar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👑",
        "subtext": "hegemonizar el discurso / resistir la hegemonización",
        "form": "verb",
        "definitions": [
            {
                "text": "Ejercer una influencia dominante sobre un campo o discurso.",
                "examples": [
                    "Un marco teórico ha llegado a hegemonizar todo el campo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hegemonicé",
        "v3": "hegemonizado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "hegemonizando",
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_004"
    },
    {
        "word": "acentuar",
        "level": "proficiency",
        "theme": "school",
        "emoji": "🔊",
        "subtext": "acentuar una diferencia / acentuar lo positivo / ser acentuado por",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer que algo sea más notable o prominente.",
                "examples": [
                    "La crisis acentuó las desigualdades existentes en toda la fuerza laboral."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acentué",
        "v3": "acentuado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "acentuando",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_002"
    },
    {
        "word": "asentir",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤝",
        "subtext": "asentir a / asentir ante / aquiescencia reacia",
        "form": "verb",
        "definitions": [
            {
                "text": "Aceptar o estar de acuerdo con algo, a menudo de forma silenciosa o pasiva.",
                "examples": [
                    "Asintió a la decisión de la junta a pesar de sus fuertes reservas."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "asentí",
        "v3": "asentido",
        "group": "ir",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_012"
    },
    {
        "word": "aliviar",
        "level": "proficiency",
        "theme": "work",
        "emoji": "🩹",
        "subtext": "aliviar el sufrimiento / aliviar la pobreza / aliviar la presión",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer que un problema o síntoma sea menos grave.",
                "examples": [
                    "La nueva política hizo poco para aliviar la crisis de la vivienda."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "alivié",
        "v3": "aliviado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "aliviando",
        "lang": "es",
        "sub_theme": "business_lang",
        "id": "es_proficiency_work_005"
    },
    {
        "word": "eludir",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🏃",
        "subtext": "eludir las reglas / eludir un problema / eludir controles",
        "form": "verb",
        "definitions": [
            {
                "text": "Evitar hábilmente una dificultad u obstáculo.",
                "examples": [
                    "Encontró una forma legal de eludir el obstáculo burocrático."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "eludí",
        "v3": "eludido",
        "group": "ir",
        "auxiliary": "haber",
        "v4": "eludiendo",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_013"
    },
    {
        "word": "corroborar",
        "level": "proficiency",
        "theme": "school",
        "emoji": "✅",
        "subtext": "corroborar una afirmación / corroborar evidencia / ser corroborado por",
        "form": "verb",
        "definitions": [
            {
                "text": "Confirmar o apoyar una teoría o declaración con evidencia adicional.",
                "examples": [
                    "El testimonio del testigo corroboró plenamente la evidencia documental."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "corroboré",
        "v3": "corroborado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "corroborando",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_003"
    },
    {
        "word": "difundir",
        "level": "proficiency",
        "theme": "school",
        "emoji": "📢",
        "subtext": "difundir información / difundir hallazgos / ampliamente difundido",
        "form": "verb",
        "definitions": [
            {
                "text": "Esparcir información o conocimientos ampliamente.",
                "examples": [
                    "Los hallazgos se difundieron a través de redes de investigación internacionales."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "difundí",
        "v3": "difundido",
        "group": "ir",
        "auxiliary": "haber",
        "v4": "difundiendo",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_004"
    },
    {
        "word": "encapsular",
        "level": "proficiency",
        "theme": "school",
        "emoji": "💊",
        "subtext": "encapsular una idea / encapsular el problema / encapsular perfectamente",
        "form": "verb",
        "definitions": [
            {
                "text": "Expresar las características esenciales de algo de forma concisa.",
                "examples": [
                    "La frase encapsula perfectamente la paradoja del trabajo moderno."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "encapsulé",
        "v3": "encapsulado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "encapsulando",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_005"
    },
    {
        "word": "engendrar",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌱",
        "subtext": "engendrar confianza / engendrar conflicto / engendrar resentimiento",
        "form": "verb",
        "definitions": [
            {
                "text": "Causar o dar lugar a un sentimiento, situación o condición.",
                "examples": [
                    "La nueva política engendró un resentimiento considerable entre el personal."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "engendré",
        "v3": "engendrado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "engendrando",
        "lang": "es",
        "sub_theme": null,
        "id": "es_proficiency_social_005"
    },
    {
        "word": "exacerbar",
        "level": "proficiency",
        "theme": "school",
        "emoji": "🔥",
        "subtext": "exacerbar un problema / exacerbar tensiones / exacerbar la desigualdad",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer que un problema o situación negativa sea aún peor.",
                "examples": [
                    "La recesión económica exacerbó las desigualdades sociales existentes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exacerbé",
        "v3": "exacerbado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "exacerbando",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_006"
    },
    {
        "word": "ejemplificar",
        "level": "proficiency",
        "theme": "school",
        "emoji": "📖",
        "subtext": "ejemplificar algo / ejemplificar el problema / ejemplificar claramente",
        "form": "verb",
        "definitions": [
            {
                "text": "Ser un ejemplo típico de algo.",
                "examples": [
                    "Su carrera ejemplifica los desafíos que enfrentan las mujeres en roles de alta dirección."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ejemplifiqué",
        "v3": "ejemplificado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "ejemplificando",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_007"
    },
    {
        "word": "impedir",
        "level": "proficiency",
        "theme": "school",
        "emoji": "🚧",
        "subtext": "impedir el progreso / impedir el crecimiento / impedir que alguien haga",
        "form": "verb",
        "definitions": [
            {
                "text": "Dificultar o retrasar el progreso de algo.",
                "examples": [
                    "La regulación excesiva puede impedir la innovación en las nuevas industrias."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "impedí",
        "v3": "impedido",
        "group": "ir",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_008"
    },
    {
        "word": "mitigar",
        "level": "proficiency",
        "theme": "school",
        "emoji": "🛡️",
        "subtext": "mitigar el riesgo / mitigar el impacto / mitigar contra",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer algo menos grave, serio o doloroso.",
                "examples": [
                    "Una buena comunicación puede ayudar a mitigar el impacto del cambio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mitigué",
        "v3": "mitigado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "mitigando",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_009"
    },
    {
        "word": "obligar",
        "level": "proficiency",
        "theme": "work",
        "emoji": "⚖️",
        "subtext": "estar obligado a / obligar a alguien a / sentirse obligado",
        "form": "verb",
        "definitions": [
            {
                "text": "Compeler a alguien a hacer algo, legal o moralmente.",
                "examples": [
                    "La ley obliga a todos los empleadores a proporcionar un entorno de trabajo seguro."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "obligué",
        "v3": "obligado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "obligando",
        "lang": "es",
        "sub_theme": "business_lang",
        "id": "es_proficiency_work_006"
    },
    {
        "word": "impregnar",
        "level": "proficiency",
        "theme": "school",
        "emoji": "💧",
        "subtext": "impregnar la organización / estar impregnado de / omnipresente",
        "form": "verb",
        "definitions": [
            {
                "text": "Estar presente en todas las partes de algo.",
                "examples": [
                    "Una cultura de exceso de trabajo impregna el sector de los servicios financieros."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "impregné",
        "v3": "impregnado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "impregnando",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_010"
    },
    {
        "word": "excluir",
        "level": "proficiency",
        "theme": "school",
        "emoji": "🚫",
        "subtext": "excluir a alguien de / excluir la posibilidad / no excluir",
        "form": "verb",
        "definitions": [
            {
                "text": "Impedir que algo suceda o que alguien participe.",
                "examples": [
                    "Su falta de experiencia relevante lo excluyó de la lista de candidatos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "excluí",
        "v3": "excluido",
        "group": "ir",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_011"
    },
    {
        "word": "reconciliar",
        "level": "proficiency",
        "theme": "school",
        "emoji": "🤝",
        "subtext": "reconciliar ideas / difícil de reconciliar / reconciliar diferencias",
        "form": "verb",
        "definitions": [
            {
                "text": "Encontrar una forma de que dos ideas u situaciones opuestas existan juntas.",
                "examples": [
                    "Le resultó imposible reconciliar sus valores con la cultura de la empresa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reconcilié",
        "v3": "reconciliado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "reconciliando",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_012"
    },
    {
        "word": "sustituir",
        "level": "proficiency",
        "theme": "work",
        "emoji": "🔄",
        "subtext": "sustituir una ley / sustituir directrices anteriores / ser sustituido por",
        "form": "verb",
        "definitions": [
            {
                "text": "Tomar el lugar de algo que se usaba anteriormente.",
                "examples": [
                    "Las nuevas directrices sustituirán a todas las versiones anteriores."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sustituí",
        "v3": "sustituido",
        "group": "ir",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "business_lang",
        "id": "es_proficiency_work_007"
    },
    {
        "word": "sustentar",
        "level": "proficiency",
        "theme": "school",
        "emoji": "⚓",
        "subtext": "sustentar un argumento / sustentar el éxito / estar sustentado por",
        "form": "verb",
        "definitions": [
            {
                "text": "Servir como base o apoyo para algo.",
                "examples": [
                    "Una fuerte confianza sustenta toda asociación exitosa a largo plazo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "sustenté",
        "v3": "sustentado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "sustentando",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_013"
    },
    {
        "word": "reivindicar",
        "level": "proficiency",
        "theme": "school",
        "emoji": "🏆",
        "subtext": "reivindicar a alguien / reivindicar una decisión / sentirse reivindicado",
        "form": "verb",
        "definitions": [
            {
                "text": "Demostrar que alguien o algo es correcto o justificado.",
                "examples": [
                    "Los resultados reivindicaron su polémica decisión dos años después."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reivindiqué",
        "v3": "reivindicado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "reivindicando",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_014"
    },
    {
        "word": "depender de",
        "level": "proficiency",
        "theme": "school",
        "emoji": "⛓️",
        "subtext": "depender de una decisión / depender de un solo factor / todo depende de",
        "form": "verb",
        "definitions": [
            {
                "text": "Estar determinado por o condicionado a algo.",
                "examples": [
                    "Todo el éxito del proyecto depende de la aprobación del cliente."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "dependió de",
        "v3": "dependido",
        "group": "er",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_015"
    },
    {
        "word": "lidiar con",
        "level": "proficiency",
        "theme": "school",
        "emoji": "🤼",
        "subtext": "lidiar con un problema / lidiar con las implicaciones / lidiar con la complejidad",
        "form": "verb",
        "definitions": [
            {
                "text": "Esforzarse por tratar o entender un problema difícil.",
                "examples": [
                    "Los responsables políticos todavía están lidiando con las implicaciones de la IA."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lidié con",
        "v3": "lidiado",
        "group": "ar",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_016"
    },
    {
        "word": "pasar por alto",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🙈",
        "subtext": "pasar por alto un problema / pasar por alto los detalles / no pasar por alto",
        "form": "verb",
        "definitions": [
            {
                "text": "Tratar algo como si no fuera importante; ignorar.",
                "examples": [
                    "El informe pasa por alto los detalles financieros más polémicos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "pasé por alto",
        "v3": "pasado",
        "group": "ar",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_014"
    },
    {
        "word": "disimular",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🩹",
        "subtext": "disimular un problema / disimular grietas / disimular diferencias",
        "form": "verb",
        "definitions": [
            {
                "text": "Intentar ocultar o ignorar una situación difícil para que parezca mejor de lo que es.",
                "examples": [
                    "El acuerdo simplemente disimuló las profundas divisiones estructurales."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "disimulé",
        "v3": "disimulado",
        "group": "ar",
        "auxiliary": "haber",
        "v4": "disimulando",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_proficiency_language_015"
    },
    {
        "word": "cambio de paradigma",
        "level": "proficiency",
        "theme": "school",
        "emoji": "🔄",
        "subtext": "un cambio fundamental en el enfoque",
        "form": "verb",
        "definitions": [
            {
                "text": "Un cambio fundamental en el enfoque o en los supuestos subyacentes.",
                "examples": [
                    "La adopción de esta nueva tecnología representa un cambio de paradigma en la industria."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cambió de paradigma",
        "v3": "cambiado de paradigma",
        "group": "ar",
        "auxiliary": "haber",
        "lang": "es",
        "sub_theme": "subjects",
        "id": "es_proficiency_school_017"
    }
];
    const lang = "es";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();
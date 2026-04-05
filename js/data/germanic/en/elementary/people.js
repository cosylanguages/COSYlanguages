(function() {
    const data = [
    {
        "word": "Abraham Lincoln",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous American leader who was the 16th president of the USA during the Civil War.",
                "examples": [
                    "Lincoln is remembered for his leadership during the Civil War and the abolition of slavery."
                ]
            }
        ],
        "subtext": "famous person",
        "emoji": "🎩",
        "transcription": "ˈeɪbrəhæm ˈlɪŋkən"
    },
    {
        "word": "Amelia Earhart",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "The first female pilot to fly alone across the Atlantic Ocean.",
                "examples": [
                    "Amelia Earhart was a pioneer in aviation."
                ]
            }
        ],
        "subtext": "famous pilot",
        "emoji": "✈️",
        "transcription": "əˈmiːliə ˈɛərhɑːrt"
    },
    {
        "word": "Barack Obama",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous American politician who served as the 44th president of the United States.",
                "examples": [
                    "Obama served two terms as president and is known for his inspiring speeches."
                ]
            }
        ],
        "subtext": "famous person",
        "emoji": "🇺🇸",
        "transcription": "bəˈrɑːk oʊˈbɑːmə"
    },
    {
        "word": "Bill Gates",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous American businessman who co-founded Microsoft.",
                "examples": [
                    "Bill Gates is one of the richest people in the world."
                ]
            }
        ],
        "subtext": "famous businessman",
        "emoji": "💻",
        "transcription": "bɪl ɡeɪts"
    },
    {
        "word": "Charles Darwin",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous English scientist who developed the theory of evolution.",
                "examples": [
                    "Charles Darwin wrote 'On the Origin of Species'."
                ]
            }
        ],
        "subtext": "famous scientist",
        "emoji": "🧬",
        "transcription": "tʃɑːrlz ˈdɑːrwɪn"
    },
    {
        "word": "Christopher Columbus",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous Italian explorer who sailed to the Americas in 1492.",
                "examples": [
                    "Columbus is known for his voyages across the Atlantic."
                ]
            }
        ],
        "subtext": "famous explorer",
        "emoji": "⛵",
        "transcription": "ˈkrɪstəfər kəˈlʌmbəs"
    },
    {
        "word": "Frida Kahlo",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous Mexican artist known for her many self-portraits and works inspired by nature.",
                "examples": [
                    "Kahlo is celebrated for her unique paintings that express her personal experiences."
                ]
            }
        ],
        "subtext": "famous person",
        "emoji": "🎨",
        "transcription": "ˈfriːdə ˈkɑːloʊ"
    },
    {
        "word": "Galileo Galilei",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "An Italian scientist who made many important discoveries in astronomy.",
                "examples": [
                    "Galileo used a telescope to look at the stars."
                ]
            }
        ],
        "subtext": "famous scientist",
        "emoji": "🔭",
        "transcription": "ˌɡælɪˈleɪoʊ ˌɡælɪˈleɪi"
    },
    {
        "word": "Isaac Newton",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous English scientist who discovered the laws of gravity.",
                "examples": [
                    "Isaac Newton was a genius."
                ]
            }
        ],
        "subtext": "famous scientist",
        "emoji": "🍎",
        "transcription": "ˈaɪzək ˈnjuːtən"
    },
    {
        "word": "J.K. Rowling",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "The British author who wrote the Harry Potter books.",
                "examples": [
                    "J.K. Rowling's books have been translated into many languages."
                ]
            }
        ],
        "subtext": "famous author",
        "emoji": "🪄",
        "transcription": "ˌdʒeɪ ˈkeɪ ˈroʊlɪŋ"
    },
    {
        "word": "Jeff Bezos",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "The American businessman who founded Amazon.",
                "examples": [
                    "Jeff Bezos also founded a space company called Blue Origin."
                ]
            }
        ],
        "subtext": "famous businessman",
        "emoji": "📦",
        "transcription": "dʒɛf ˈbeɪzoʊs"
    },
    {
        "word": "Ludwig van Beethoven",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous German composer and pianist.",
                "examples": [
                    "Beethoven continued to compose music even after he became deaf."
                ]
            }
        ],
        "subtext": "famous composer",
        "emoji": "🎹",
        "transcription": "ˈlʊdvɪɡ væn ˈbeɪtˌhoʊvən"
    },
    {
        "word": "Mahatma Gandhi",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous Indian leader who used peaceful ways to help India become independent.",
                "examples": [
                    "Gandhi led the movement for Indian independence through non-violent protest."
                ]
            }
        ],
        "subtext": "famous person",
        "emoji": "🇮🇳",
        "transcription": "məˈhɑːtmə ˈɡɑːndi"
    },
    {
        "word": "Malala Yousafzai",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A young Pakistani activist for female education and the youngest Nobel Prize laureate.",
                "examples": [
                    "Malala Yousafzai is an inspiration for girls' education."
                ]
            }
        ],
        "subtext": "famous activist",
        "emoji": "🇵🇰",
        "transcription": "məˈlɑːlə ˌjuːsəfˈzaɪ"
    },
    {
        "word": "Marco Polo",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous Italian explorer who traveled to Asia in the 13th century.",
                "examples": [
                    "Marco Polo wrote a book about his travels."
                ]
            }
        ],
        "subtext": "famous explorer",
        "emoji": "🧭",
        "transcription": "ˈmɑːrkoʊ ˈpoʊloʊ"
    },
    {
        "word": "Marie Antoinette",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "The last Queen of France before the French Revolution.",
                "examples": [
                    "Marie Antoinette was known for her luxurious lifestyle."
                ]
            }
        ],
        "subtext": "famous queen",
        "emoji": "🍰",
        "transcription": "məˈriː ˌæntwəˈnɛt"
    },
    {
        "word": "Mark Zuckerberg",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "The American businessman who co-founded Facebook.",
                "examples": [
                    "Mark Zuckerberg started Facebook while he was at university."
                ]
            }
        ],
        "subtext": "famous businessman",
        "emoji": "📱",
        "transcription": "mɑːrk ˈzʌkərbɜːrɡ"
    },
    {
        "word": "Martin Luther King Jr.",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous American leader who fought for civil rights.",
                "examples": [
                    "Martin Luther King Jr. gave the 'I Have a Dream' speech."
                ]
            }
        ],
        "subtext": "famous leader",
        "emoji": "⚖️",
        "transcription": "ˈmɑːrtɪn ˈluːθər kɪŋ ˈdʒuːnjər"
    },
    {
        "word": "Mother Teresa",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous nun who helped poor people in India.",
                "examples": [
                    "Mother Teresa won the Nobel Peace Prize."
                ]
            }
        ],
        "subtext": "famous humanitarian",
        "emoji": "🕊️",
        "transcription": "ˈmʌðər təˈreɪsə"
    },
    {
        "word": "Neil Armstrong",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "The first person to walk on the moon.",
                "examples": [
                    "Neil Armstrong was an American astronaut."
                ]
            }
        ],
        "subtext": "famous astronaut",
        "emoji": "👨‍🚀",
        "transcription": "niːl ˈɑːrmstrɒŋ"
    },
    {
        "word": "Oprah Winfrey",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous American talk show host and businesswoman.",
                "examples": [
                    "Oprah is one of the most influential women in the world."
                ]
            }
        ],
        "subtext": "famous media personality",
        "emoji": "🎤",
        "transcription": "ˈoʊprə ˈwɪnfri"
    },
    {
        "word": "Pablo Picasso",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous Spanish artist who co-founded the Cubist movement.",
                "examples": [
                    "Picasso is one of the most influential artists of the 20th century."
                ]
            }
        ],
        "subtext": "famous artist",
        "emoji": "🎨",
        "transcription": "ˈpæbloʊ pɪˈkɑːsoʊ"
    },
    {
        "word": "Princess Diana",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A popular member of the British royal family known for her charity work.",
                "examples": [
                    "Princess Diana was known as the 'People's Princess'."
                ]
            }
        ],
        "subtext": "famous royal",
        "emoji": "👑",
        "transcription": "ˈprɪnsɛs daɪˈænə"
    },
    {
        "word": "Stephen Hawking",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous British scientist who studied the universe.",
                "examples": [
                    "Stephen Hawking wrote 'A Brief History of Time'."
                ]
            }
        ],
        "subtext": "famous scientist",
        "emoji": "🌌",
        "transcription": "ˈstiːvən ˈhɔːkɪŋ"
    },
    {
        "word": "Steve Jobs",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous American businessman and inventor who co-founded Apple Inc.",
                "examples": [
                    "Jobs changed the world of technology with the introduction of the iPhone and Mac."
                ]
            }
        ],
        "subtext": "famous person",
        "emoji": "🍎",
        "transcription": "stiːv dʒɒbz"
    },
    {
        "word": "Vincent van Gogh",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous Dutch artist known for his colorful paintings.",
                "examples": [
                    "Van Gogh painted 'The Starry Night'."
                ]
            }
        ],
        "subtext": "famous artist",
        "emoji": "🎨",
        "transcription": "ˈvɪnsənt væn ɡɒx"
    },
    {
        "word": "Walt Disney",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "An American businessman and movie producer who created Mickey Mouse.",
                "examples": [
                    "Walt Disney founded the Disney company."
                ]
            }
        ],
        "subtext": "famous creator",
        "emoji": "🐭",
        "transcription": "wɔːlt ˈdɪzni"
    },
    {
        "word": "Winston Churchill",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous British leader who was Prime Minister during World War II.",
                "examples": [
                    "Churchill was known for his inspiring speeches."
                ]
            }
        ],
        "subtext": "famous leader",
        "emoji": "🇬🇧",
        "transcription": "ˈwɪnstən ˈtʃɜːrtʃɪl"
    },
    {
        "word": "Wolfgang Amadeus Mozart",
        "level": "elementary",
        "theme": "personality_character_A2",
        "definitions": [
            {
                "text": "A famous Austrian composer of classical music.",
                "examples": [
                    "Mozart started composing when he was very young."
                ]
            }
        ],
        "subtext": "famous composer",
        "emoji": "🎼",
        "transcription": "ˈvʊl fɡæŋ ˌæməˈdeɪəs ˈmoʊtsɑːrt"
    }
];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
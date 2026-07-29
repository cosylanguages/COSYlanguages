import os
import re
from bs4 import BeautifulSoup

# Hand-crafted content and configurations for all 15 English "I Couldn't Help But Wonder" sessions
WONDER_CONFIG_EN = {
    "always-watched-in-a-crowd.html": {
        "warmup": """
<ul class="round-questions">
<li>When you walk into a crowded party, do you feel like the star of the show, or do you want to blend into the wallpaper?</li>
<li>Why do we care so much about what complete strangers think of us?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "👁️", "text": "Spotlight Effect"},
            {"emoji": "🎭", "text": "Social Performance"},
            {"emoji": "🤐", "text": "Fear of Judgment"},
            {"emoji": "👤", "text": "Anonymity Anxiety"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I feel like everyone is looking at me."',
                "raw": '"I am desperately hoping someone notices me."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'Ah, the spotlight effect. It wraps our insecurity in a golden cloak of self-importance. A very flattering defense indeed.'",
                    "raw": "✍️ Carrie's thought: 'Brutal, raw, and absolutely freezing. In a city of eight million, is there anything more terrifying than complete indifference?'"
                }
            }
        ]
    },
    "appreciating-amy-winehouse-after-death.html": {
        "warmup": """
<ul class="round-questions">
<li>Why do we wait for an artist to die before we sincerely appreciate their genius?</li>
<li>Is our collective grief over an artist's death a form of genuine empathy, or just a performance of remorse?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "📸", "text": "Media Exploitation"},
            {"emoji": "🍿", "text": "Voyeuristic Pleasure"},
            {"emoji": "🖤", "text": "Collective Guilt"},
            {"emoji": "🎨", "text": "Pure Artistic Devotion"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I was shocked and devastated by her sudden death."',
                "raw": '"I quietly consumed her public breakdown as entertainment."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'Grief is the most socially acceptable mask. It allows us to feel deep empathy without taking any responsibility.'",
                    "raw": "✍️ Carrie's thought: 'Ouch. The paparazzi didn't act alone; they had eight million accomplices holding the newspaper.'"
                }
            }
        ]
    },
    "are-traditions-hidden-monogamy.html": {
        "warmup": """
<ul class="round-questions">
<li>Do you follow traditions because they bring you genuine comfort, or because you fear the social isolation of standing alone?</li>
<li>Is the traditional life path the ultimate, bulletproof armor against having to design your own destiny?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "🏰", "text": "Comfort in Conformity"},
            {"emoji": "👥", "text": "Fear of Standing Out"},
            {"emoji": "🕯️", "text": "Ritual Security"},
            {"emoji": "⛓️", "text": "Stifling Expectations"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I respect family traditions."',
                "raw": '"I am too terrified of standing alone to break the mold."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'Tradition is the ultimate social anchor. It keeps us safe, clean, and perfectly aligned with the ancestors.'",
                    "raw": "✍️ Carrie's thought: 'Brutal truth. Sometimes, repeating old rituals is just a polite way of hiding from our own original desires.'"
                }
            }
        ]
    },
    "are-traditions-hidden-monogamy-upper-intermediate.html": {
        "warmup": """
<ul class="round-questions">
<li>Do you follow traditions because they bring you genuine comfort, or because you fear the social isolation of standing alone?</li>
<li>Is the traditional life path the ultimate, bulletproof armor against having to design your own destiny?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "🏰", "text": "Comfort in Conformity"},
            {"emoji": "👥", "text": "Fear of Standing Out"},
            {"emoji": "🕯️", "text": "Ritual Security"},
            {"emoji": "⛓️", "text": "Stifling Expectations"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I respect family traditions."',
                "raw": '"I am too terrified of standing alone to break the mold."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'Tradition is the ultimate social anchor. It keeps us safe, clean, and perfectly aligned with the ancestors.'",
                    "raw": "✍️ Carrie's thought: 'Brutal truth. Sometimes, repeating old rituals is just a polite way of hiding from our own original desires.'"
                }
            }
        ]
    },
    "collective-guilt-global-crisis.html": {
        "warmup": """
<ul class="round-questions">
<li>When you read about global climate disasters, do you feel a sincere, personal responsibility, or a numb, protective apathy?</li>
<li>Is sorting our recycling just a modern superstition we perform to appease our climate guilt?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "🌍", "text": "Sincere Helplessness"},
            {"emoji": "🏭", "text": "Corporate Deflection"},
            {"emoji": "🔋", "text": "Performative Recycling"},
            {"emoji": "🔥", "text": "Existential Dread"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I am doing my part to save the planet."',
                "raw": '"I am performing minor rituals to escape my overwhelming guilt."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'We sort our plastic like ancient priests offering sacrifices to the weather gods. It is a quiet plea for absolution.'",
                    "raw": "✍️ Carrie's thought: 'Brutal honesty. It's much easier to carry a canvas tote bag than it is to face the collapse of our economic systems.'"
                }
            }
        ]
    },
    "death-of-the-album.html": {
        "warmup": """
<ul class="round-questions">
<li>Why have we traded the romantic commitment of a 45-minute album for the fast-food convenience of an algorithmic playlist?</li>
<li>Does our short attention span make us incapable of enjoying a cohesive story, in music or in relationships?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "💿", "text": "Loss of Narrative"},
            {"emoji": "⏩", "text": "10-Second Attention"},
            {"emoji": "🤖", "text": "Algorithmic Diet"},
            {"emoji": "🎵", "text": "Background Noise"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I love discovering new artists on Spotify."',
                "raw": '"I skip tracks after ten seconds because my attention has been ruined."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'We say we are exploring, but really we are letting a machine feed us dopamine. It is a very polite form of surrender.'",
                    "raw": "✍️ Carrie's thought: 'Ouch. If we cannot sit through a four-minute song, how do we expect to survive a forty-year commitment?'"
                }
            }
        ]
    },
    "does-euthanasia-reduce-suicide-rates.html": {
        "warmup": """
<ul class="round-questions">
<li>Is complete control over our death the ultimate expression of human dignity, or a tragic surrender to isolation?</li>
<li>Why does modern society seek to clinically sanitize our final departure instead of embracing the raw, messy reality of dying?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "🕊️", "text": "Individual Sovereignty"},
            {"emoji": "🏥", "text": "Clinical Sanitization"},
            {"emoji": "🤐", "text": "Fear of Suffering"},
            {"emoji": "👥", "text": "Societal Abandonment"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I support the right to a dignified death."',
                "raw": '"I want a clean, painless exit to avoid the messy details of aging."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'Sovereignty over our own bodies is the ultimate freedom. It is a quiet, powerful declaration of independence.'",
                    "raw": "✍️ Carrie's thought: 'Brutal truth. Sometimes, our search for a clean death is just a desperate attempt to escape the messy, vulnerable realities of human decay.'"
                }
            }
        ]
    },
    "feeling-empty-after-series.html": {
        "warmup": """
<ul class="round-questions">
<li>Why do we experience genuine, deep grief over fictional characters, while brushing off real-life neighbors?</li>
<li>Is our obsession with binge-watching just a protective armor against sitting quietly with our own thoughts?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "📺", "text": "Fictional Attachments"},
            {"emoji": "🏃", "text": "Escaping Reality"},
            {"emoji": "🖤", "text": "Post-Binge Void"},
            {"emoji": "🤐", "text": "Unresolved Boundaries"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I am deeply attached to these characters."',
                "raw": '"I am using this show as a decoy to avoid my own empty calendar."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'Fictional characters are the safest lovers. They never leave us, they never argue, and they always have a perfect script.'",
                    "raw": "✍️ Carrie's thought: 'Brutal. When the screen goes black and we see our own reflection in the glass, the absolute silence of the room can be deafening.'"
                }
            }
        ]
    },
    "is-parenting-instinct-a-real-thing-or-scam.html": {
        "warmup": """
<ul class="round-questions">
<li>Is maternal instinct a biological miracle, or a brilliant commercial construct designed to sell parenting books?</li>
<li>Does competitive parenting under baby monitors and apps help our children, or just nourish our own social anxieties?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "🍼", "text": "Biological Pressure"},
            {"emoji": "📚", "text": "Commercialized Guilt"},
            {"emoji": "👶", "text": "Competitive Parenting"},
            {"emoji": "🔥", "text": "Maternal Burnout"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I want the absolute best for my child."',
                "raw": '"I am performing maternal perfection to escape societal judgment."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'Maternal devotion is a beautiful shield. It wraps our anxiety in a blanket of absolute love.'",
                    "raw": "✍️ Carrie's thought: 'Brutal honesty. It's much easier to buy organic purees than it is to admit that parenting is a highly terrifying, unstructured loop.'"
                }
            }
        ]
    },
    "whether-raindrops-select-where-to-fall.html": {
        "warmup": """
<ul class="round-questions">
<li>Do you believe our life paths are chosen by a higher design, or do we drift like raindrops falling on random pavements?</li>
<li>Is the belief in "fate" and "coincidence" just a clever pretext to avoid taking accountability for our actions?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "✨", "text": "Cosmic Fate"},
            {"emoji": "🌪️", "text": "Random Coincidence"},
            {"emoji": "🤐", "text": "Avoiding Accountability"},
            {"emoji": "🔓", "text": "Surrendering Control"}
        ],
        "honesty_pairs": [
            {
                "polite": '"Our meeting was written in the stars."',
                "raw": '"I am using the pretext of fate because I am too afraid to make a choice."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'Fate is the most romantic pillow. It whispers that the giant universe has designed a map just for your small heart.'",
                    "raw": "✍️ Carrie's thought: 'Ouch. Declaring destiny is a bulletproof way of avoiding the terrifying freedom of our own decisions.'"
                }
            }
        ]
    },
    "why-is-everyone-copying-me.html": {
        "warmup": """
<ul class="round-questions">
<li>When someone copies your fashion or style, do you feel wowed by their admiration, or deeply frustrated by the erasure of your identity?</li>
<li>Is social media just a massive trend replication machine that has made genuine authenticity virtually impossible?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "👥", "text": "Mirroring for Connection"},
            {"emoji": "📸", "text": "Digital Validation"},
            {"emoji": "🎨", "text": "Trend Mimicry"},
            {"emoji": "⛓️", "text": "Erasure of Identity"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I am flattered that they copied my outfit."',
                "raw": '"I feel that they have quietly stolen a small piece of my soul."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'We say it is flattery, a soft compliment. But in a city of eight million, is there anything more precious than our own unique spark?'",
                    "raw": "✍️ Carrie's thought: 'Brutal truth. Seeing someone replicate your style is like watching your own reflection walk away with a stranger.'"
                }
            }
        ]
    },
    "is-bad-weather-gods-anger.html": {
        "warmup": """
<ul class="round-questions">
<li>Are you someone who views a wild winter storm as a cozy invitation to stay indoors, or do you feel a sense of ancient foreboding?</li>
<li>When things go wrong in your personal life, do you secretly look for external "signs" or retrograde planets to justify your distress?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "⚡", "text": "Divine Wrath"},
            {"emoji": "🌧️", "text": "Atmospheric Pressure"},
            {"emoji": "🔭", "text": "Ancient Mythology"},
            {"emoji": "🤐", "text": "Human Tantrums"}
        ],
        "honesty_pairs": [
            {
                "polite": '"Running into an ex during a storm is a cosmic sign."',
                "raw": '"It\'s just geographical probability in a small neighborhood."',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'How comforting to think that the giant grey sky has put on a lightning show just for your relationship drama.'",
                    "raw": "✍️ Carrie's thought: 'Ouch. Cold, flat, and extremely sober. It cuts the drama, but doesn\'t it leave New York feeling a little too quiet?'"
                }
            }
        ]
    },
    "do-insects-hide-when-it-rains.html": {
        "warmup": """
<ul class="round-questions">
<li>When raindrops start falling, is it your natural instinct to immediately run for shelter, or do you enjoy the sudden, chaotic shift?</li>
<li>Do you find insects' highly organized, communal lives fascinating, or does their perfect conformity terrify you?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "👥", "text": "Group Chat Check"},
            {"emoji": "📴", "text": "Go Completely Offline"},
            {"emoji": "☕", "text": "Hide in Crowded Café"},
            {"emoji": "🦋", "text": "Solitary Leaf Shelter"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I need a crowded, warm hive (Communal comfort)"',
                "raw": '"I need a solitary, dry leaf (Isolated peace)"',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'A crowded hive, a busy coffee shop, a room full of warm bodies. It keeps the cold drops off, but are you actually connecting?'",
                    "raw": "✍️ Carrie's thought: 'A single dry leaf, a quiet apartment, a silenced phone. It is peaceful, safe, and dry. But is it a sanctuary, or just an isolated cage?'"
                }
            }
        ]
    },
    "ugly-produce-anti-waste.html": {
        "warmup": """
<ul class="round-questions">
<li>Would you ever buy a misshapen, bruised tomato simply because of its price, or do you demand visual perfection even in your food?</li>
<li>Do we filter our romantic partners using the same aesthetic criteria we use when selecting vegetables in a supermarket?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "🥕", "text": "Twisted Carrot (Flexible but weird)"},
            {"emoji": "🥔", "text": "Bumpy Potato (Messy but sweet)"},
            {"emoji": "👑", "text": "Curated Surface Safety"},
            {"emoji": "🌱", "text": "Asymmetrical Organic Truth"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I filter on visual perfection (Aesthetic safety)"',
                "raw": '"I embrace organic, messy realities (Organic truth)"',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'Ah, the supermarket shelf of life. Standardized, shiny, and completely predictable. Perfect for a picture-perfect display.'",
                    "raw": "✍️ Carrie's thought: 'Embracing the messy bumps, the weird curves, the organic truth. It is asymmetrical, unpredictable, and extremely real.'"
                }
            }
        ]
    },
    "why-do-we-try-to-relate-to-adhd.html": {
        "warmup": """
<ul class="round-questions">
<li>Do you find it virtually impossible to focus on a single task without checking your smartphone, or can you barely tolerate distractions?</li>
<li>When you read about psychological symptoms online, do you immediately relate to them, or do you maintain strict skepticism?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "📂", "text": "Over 10 Browser Tabs"},
            {"emoji": "📺", "text": "Scrolling While Watching TV"},
            {"emoji": "🚪", "text": "Forgot Why I Entered a Room"},
            {"emoji": "🛡️", "text": "Clinical Defenses"}
        ],
        "honesty_pairs": [
            {
                "polite": '"I have a biochemical attention deficit (Clinical perspective)"',
                "raw": '"My environment has been optimized to distract me (Systemic perspective)"',
                "comments": {
                    "polite": "✍️ Carrie's thought: 'A clinical label, a safe, biochemical defense. It provides a community, a name for the chaos, and a very soft armor.'",
                    "raw": "✍️ Carrie's thought: 'A structural matrix optimized to steal your attention and monetize your distraction. The problem isn\'t in your head, it\'s on your screen.'"
                }
            }
        ]
    }
}

# Hand-crafted configurations and translations in French for the 5 French sessions
WONDER_CONFIG_FR = {
    "death-of-the-album.html": {
        "warmup": """
<ul class="round-questions">
<li>Pourquoi avons-nous troqué l'engagement d'un album de 45 minutes pour la commodité d'une playlist algorithmique ?</li>
<li>Est-ce que notre capacité d'attention de dix secondes nous rend incapables d'apprécier une histoire cohérente ?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "💿", "text": "Perte de narration"},
            {"emoji": "⏩", "text": "Attention de 10 secondes"},
            {"emoji": "🤖", "text": "Régime algorithmique"},
            {"emoji": "🎵", "text": "Bruit de fond"}
        ],
        "honesty_pairs": [
            {
                "polite": '"J\'adore découvrir de nouveaux artistes sur Spotify."',
                "raw": '"Je zappe les morceaux après dix secondes car mon attention est ruinée."',
                "comments": {
                    "polite": "✍️ La pensée de Carrie : 'On dit qu\'on explore, mais en réalité on laisse une machine nous nourrir de dopamine. C\'est une reddition très polie.'",
                    "raw": "✍️ La pensée de Carrie : 'Aïe. Si on ne peut pas écouter une chanson de quatre minutes, comment espérer survivre à un engagement de quarante ans ?'"
                }
            }
        ]
    },
    "feeling-empty-after-series.html": {
        "warmup": """
<ul class="round-questions">
<li>Pourquoi ressentons-nous un deuil sincère pour des personnages fictifs, tout en ignorant nos voisins dans la vraie vie ?</li>
<li>Notre obsession pour le binge-watching est-elle un bouclier contre la solitude de nos propres pensées ?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "📺", "text": "Attachement fictif"},
            {"emoji": "🏃", "text": "Échapper à la réalité"},
            {"emoji": "🖤", "text": "Vide post-série"},
            {"emoji": "🤐", "text": "Limites non résolues"}
        ],
        "honesty_pairs": [
            {
                "polite": '"Je suis profondément attaché à ces personnages."',
                "raw": '"J\'utilise cette série comme un leurre pour éviter mon propre calendrier vide."',
                "comments": {
                    "polite": "✍️ La pensée de Carrie : 'Les personnages de fiction sont les amants les plus sûrs. Ils ne partent jamais, ne se disputent jamais, et ont toujours un scénario parfait.'",
                    "raw": "✍️ La pensée de Carrie : 'Brutal. Quand l\'écran devient noir et qu\'on voit notre propre reflet dans la vitre, le silence absolu de la pièce peut être assourdissant.'"
                }
            }
        ]
    },
    "is-parenting-instinct-a-real-thing-or-scam.html": {
        "warmup": """
<ul class="round-questions">
<li>L\'instinct maternel est-il un miracle biologique, ou une construction commerciale brillante pour vendre des livres de parentalité ?</li>
<li>Est-ce que la parentalité compétitive sous caméras et applis aide nos enfants, ou nourrit-elle simplement notre anxiété sociale ?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "🍼", "text": "Pression biologique"},
            {"emoji": "📚", "text": "Culpabilité commerciale"},
            {"emoji": "👶", "text": "Parentalité compétitive"},
            {"emoji": "🔥", "text": "Épuisement maternel"}
        ],
        "honesty_pairs": [
            {
                "polite": '"Je veux le meilleur absolu pour mon enfant."',
                "raw": '"Je joue la perfection maternelle pour échapper au jugement social."',
                "comments": {
                    "polite": "✍️ La pensée de Carrie : 'La dévotion maternelle est un magnifique bouclier. Elle enveloppe notre anxiété dans une couverture d\'amour absolu.'",
                    "raw": "✍️ La pensée de Carrie : 'Franchement honnête. C\'est tellement plus facile d\'acheter des purées bio que d\'admettre que la parentalité est une boucle terrifiante et sans structure.'"
                }
            }
        ]
    },
    "ugly-produce-anti-waste.html": {
        "warmup": """
<ul class="round-questions">
<li>Achèteriez-vous une tomate déformée et bosselée simplement pour son prix, ou exigez-vous une perfection visuelle ?</li>
<li>Filtrons-nous nos partenaires amoureux avec les mêmes critères esthétiques que nous utilisons pour choisir nos légumes au supermarché ?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "🥕", "text": "Carotte tordue"},
            {"emoji": "🥔", "text": "Pomme de terre bosselée"},
            {"emoji": "👑", "text": "Perfection de surface"},
            {"emoji": "🌱", "text": "Réalité organique asymétrique"}
        ],
        "honesty_pairs": [
            {
                "polite": '"Je filtre sur la perfection visuelle (Sécurité esthétique)"',
                "raw": '"J\'accepte les réalités organiques et désordonnées (Vérité organique)"',
                "comments": {
                    "polite": "✍️ La pensée de Carrie : 'Ah, le rayon supermarché de la vie. Standardisé, brillant, et parfaitement prévisible. Idéal pour l\'affichage, mais a-t-il du goût ?'",
                    "raw": "✍️ La pensée de Carrie : 'S\'ouvrir aux bosses, aux courbes bizarres, à la vérité brute. C\'est asymétrique, imprévisible, et extrêmement réel.'"
                }
            }
        ]
    },
    "why-do-we-try-to-relate-to-adhd.html": {
        "warmup": """
<ul class="round-questions">
<li>Trouvez-vous pratiquement impossible de vous concentrer sur une tâche sans regarder votre téléphone, ou tolérez-vous à peine les distractions ?</li>
<li>Quand vous lisez des symptômes psychologiques en ligne, vous y identifiez-vous immédiatement, ou restez-vous sceptique ?</li>
</ul>
""",
        "rank_items": [
            {"emoji": "📂", "text": "Plus de 10 onglets ouverts"},
            {"emoji": "📺", "text": "Scroller devant la télé"},
            {"emoji": "🚪", "text": "Oublier pourquoi je suis entré"},
            {"emoji": "🛡️", "text": "Défenses cliniques"}
        ],
        "honesty_pairs": [
            {
                "polite": '"J\'ai un déficit de l\'attention biochimique (Perspective clinique)"',
                "raw": '"Mon environnement a été optimisé pour me distraire (Perspective systémique)"',
                "comments": {
                    "polite": "✍️ La pensée de Carrie : 'Un label clinique, une défense biochimique sûre. Cela offre une communauté, un nom pour le chaos, et une armure très douce.'",
                    "raw": "✍️ La pensée de Carrie : 'Une matrice structurelle optimisée pour voler votre attention et monétiser votre distraction. Le problème n\'est pas dans votre tête, il est sur votre écran.'"
                }
            }
        ]
    }
}


def enrich_session_systemic(filepath, key, is_fr=False):
    data = WONDER_CONFIG_FR[key] if is_fr else WONDER_CONFIG_EN[key]
    print(f"Reading {filepath}...")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    soup = BeautifulSoup(content, "html.parser")

    # 1. Update Warm-up question
    warmup_block = soup.find(id="s-warm")
    if warmup_block:
        body = warmup_block.find(class_="round-body")
        if body:
            body.clear()
            body.append(BeautifulSoup(data["warmup"], "html.parser"))

    # 2. Extract LST Meta options from existing list-grid
    lst_block = soup.find(id="s-lst")
    opt1_text = "Un deuil sincère" if is_fr else "A Curated Life of Armor"
    opt2_text = "Un simple leurre" if is_fr else "An Open Life of Desire"
    opt1_emoji = "🛡️"
    opt2_emoji = "🔓"

    if lst_block:
        items = lst_block.find_all(class_="lst-item")
        if len(items) >= 2:
            opt1_div = items[0].find("div")
            opt2_div = items[1].find("div")
            opt1_span = items[0].find("span")
            opt2_span = items[1].find("span")

            if opt1_div:
                opt1_text = opt1_div.get_text().strip()
            if opt2_div:
                opt2_text = opt2_div.get_text().strip()
            if opt1_span:
                opt1_emoji = opt1_span.get_text().strip()
            if opt2_span:
                opt2_emoji = opt2_span.get_text().strip()

    # 3. Rebuild Activity 1 Priority Ranker
    ranker_html_list = []
    for rank in data["rank_items"]:
        ranker_html_list.append(f"""
<div class="rank-card" data-reason="{rank['text']}" onclick="toggleRankItem(this)" style="background: #fff; border: 1px solid var(--border); padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; position: relative; transition: all 0.2s; user-select: none;">
<span style="font-size: 1.5rem; display: block; margin-bottom: 4px;">{rank['emoji']}</span>
<span style="font-size: 0.85rem; font-weight: 500; color: var(--ink);">{rank['text']}</span>
<span class="rank-badge" style="position: absolute; top: -5px; right: -5px; background: #e2e8f0; color: #4a5568; font-size: 0.7rem; font-weight: bold; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">?</span>
</div>
""")
    ranker_cards_html = "\n".join(ranker_html_list)

    # 4. Rebuild Activity 2 Honesty Pairs
    pairs_html_list = []
    for i, pair in enumerate(data["honesty_pairs"]):
        pair_id = i + 1
        pairs_html_list.append(f"""
<div class="honesty-pair" style="background: white; border: 1px solid var(--border); border-radius: 12px; padding: 1rem;">
<div style="display: flex; gap: 10px; justify-content: stretch; align-items: stretch; flex-wrap: wrap;">
<button class="honesty-btn" onclick="revealHonestyComment(this, {pair_id}, 'polite')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">{pair['polite']}</button>
<button class="honesty-btn" onclick="revealHonestyComment(this, {pair_id}, 'raw')" style="flex: 1; min-width: 200px; padding: 10px; border: 1px solid #3F2B96; background: transparent; color: #3F2B96; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s;">{pair['raw']}</button>
</div>
<div class="comment-reveal-box" id="comment-{pair_id}" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; margin-top: 0; font-family: var(--font-serif); font-style: italic; color: #4c3185; font-size: 0.95rem; padding-left: 0.5rem; border-left: 2px dashed #9d81d9;"></div>
</div>
""")
    pairs_cards_html = "\n".join(pairs_html_list)

    # Localized Labels
    act1_title = "⚡ Activité 1 — Le Tier de Priorité" if is_fr else "⚡ Activity 1 — The Priority Tier"
    act1_desc = "Pourquoi adoptons-nous ces comportements ? Appuyez sur les choix ci-dessous pour assembler votre profil psychologique !" if is_fr else "Why do we perform these behaviors? Tap on the choices below to assemble your personal psychological priority profile!"
    reset_btn_label = "Réinitialiser le profil 🔄" if is_fr else "Reset Profile 🔄"
    act2_title = "⚖️ Activité 2 — Le Spectre de l'Honnêteté" if is_fr else "⚖️ Activity 2 — The Honesty Spectrum"
    act2_desc = "Dans la communication adulte, nous adoucissons souvent nos réalités. Appuyez sur l'une ou l'autre déclaration de chaque paire pour choisir celle qui est sincèrement la plus honnête, et découvrez le commentaire secret de Carrie !" if is_fr else "In adult communication, we often soften our realities. Tap on either statement in each pair to choose which one is genuinely more honest, and read Carrie's secret commentary!"
    act3_title = "🧭 Activité 3 — La Décision Finale" if is_fr else "🧭 Activity 3 — The Final Decision"
    act3_desc = "Quel chemin préféreriez-vous emprunter ? Pourquoi ?" if is_fr else "Which path would you rather walk? Why?"

    # 5. Inject custom Let's Speak Together layout
    lst_replacement_html = f"""
<!-- PRIORITY COPE SCALE -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">{act1_title}</h4>
<p style="font-size: 0.92rem; color: var(--ink-soft); margin-bottom: 1rem; line-height: 1.5;">
{act1_desc}
</p>
<div class="ranker-container" id="propitiation-ranker" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; margin-bottom: 1rem;">
{ranker_cards_html}
</div>
<button class="btn-primary" onclick="resetRanking()" style="background:#9d81d9; color:white; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.8rem; cursor:pointer; font-weight:700;">{reset_btn_label}</button>
</div>

<!-- COINCIDENCE DECODER -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">{act2_title}</h4>
<p style="font-size: 0.92rem; color: var(--ink-soft); margin-bottom: 1rem; line-height: 1.5;">
{act2_desc}
</p>
<div class="honesty-spectrums-grid" style="display: flex; flex-direction: column; gap: 15px;">
{pairs_cards_html}
</div>
</div>

<!-- CLOSING METAPHOR -->
<div class="activity-box" style="background: rgba(63, 43, 150, 0.03); border: 2px solid rgba(63, 43, 150, 0.15); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
<h4 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem; color: #1F104D;">{act3_title}</h4>
<div class="lst-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom: 1rem;">
<div class="lst-item" style="text-align:center; background: white; padding: 15px; border-radius: 12px; border: 1px solid var(--border);"><span style="font-size:2.5rem;">{opt1_emoji}</span><div style="font-weight:600; margin-top: 5px;">{opt1_text}</div></div>
<div class="lst-item" style="text-align:center; background: white; padding: 15px; border-radius: 12px; border: 1px solid var(--border);"><span style="font-size:2.5rem;">{opt2_emoji}</span><div style="font-weight:600; margin-top: 5px;">{opt2_text}</div></div>
</div>
<p style="margin-top:1rem; text-align:center; font-weight: 600; color: #3F2B96;">{act3_desc}</p>
</div>
"""

    if lst_block:
        body = lst_block.find(class_="round-body")
        if body:
            body.clear()
            body.append(BeautifulSoup(lst_replacement_html, "html.parser"))

    # 6. Update JavaScript code at the bottom of the page
    script_tag = soup.find("script", string=re.compile("quotes"))
    if script_tag:
        # Build honesty comments JS dictionary
        comments_js_dict = {}
        for i, pair in enumerate(data["honesty_pairs"]):
            comments_js_dict[i+1] = {
                "polite": pair["comments"]["polite"],
                "raw": pair["comments"]["raw"]
            }

        new_script = f"""
document.addEventListener('DOMContentLoaded', () => {{
  const quotes = [
    '"Is \\'I have no time\\' the single most polite way of saying \\'You simply do not make my heart beat fast enough\\'?"',
    '"We complain about packed schedules and relentless rush, but maybe we secretly crave the chaos to avoid sitting quietly with our own desires."',
    '"If we can magically find two hours to binge-watch a new TV series, do we really get to claim that we are too busy to call a friend?"'
  ];
  let index = 0;
  const quoteText = document.getElementById('diary-quote');
  const nextBtn = document.getElementById('diary-next-btn');

  if (nextBtn && quoteText) {{
    nextBtn.addEventListener('click', () => {{
      index = (index + 1) % quotes.length;
      quoteText.innerText = quotes[index];
    }});
  }}

  // Priority Ranker Logic
  let currentRank = 1;
  window.toggleRankItem = function(card) {{
    const badge = card.querySelector('.rank-badge');
    if (card.classList.contains('ranked')) {{
      return;
    }}
    card.classList.add('ranked');
    card.style.borderColor = '#3F2B96';
    card.style.background = '#EEEDFE';
    badge.innerText = currentRank;
    badge.style.background = '#3F2B96';
    badge.style.color = '#fff';
    currentRank++;
  }};

  window.resetRanking = function() {{
    currentRank = 1;
    const cards = document.querySelectorAll('.rank-card');
    cards.forEach(card => {{
      card.classList.remove('ranked');
      card.style.borderColor = 'var(--border)';
      card.style.background = '#fff';
      const badge = card.querySelector('.rank-badge');
      badge.innerText = '?';
      badge.style.background = '#e2e8f0';
      badge.style.color = '#4a5568';
    }});
  }};

  // Honesty Spectrum logic
  const honestyComments = {comments_js_dict};

  window.revealHonestyComment = function(btn, pairId, type) {{
    // Reset other button styles in the same pair
    const pairContainer = btn.closest('.honesty-pair');
    const buttons = pairContainer.querySelectorAll('.honesty-btn');
    buttons.forEach(b => {{
      b.style.background = 'transparent';
      b.style.color = '#3F2B96';
    }});

    // Highlight the clicked button
    btn.style.background = '#3F2B96';
    btn.style.color = 'white';

    const commentBox = pairContainer.querySelector('.comment-reveal-box');
    if (commentBox) {{
      commentBox.innerText = honestyComments[pairId][type];
      commentBox.style.marginTop = '1rem';
      commentBox.style.maxHeight = '200px';
    }}
  }};
}});
"""
        script_tag.string = new_script

    print(f"Writing {filepath}...")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("<!DOCTYPE html>\n" + str(soup).replace("<!DOCTYPE html>\n", "").replace("<!DOCTYPE html>", ""))


def main():
    # 1. Enrich all English files
    en_dir = "events/sessions/i-couldnt-help-but-wonder/"
    for filename in WONDER_CONFIG_EN.keys():
        filepath = os.path.join(en_dir, filename)
        if os.path.exists(filepath):
            enrich_session_systemic(filepath, filename, is_fr=False)

    # 2. Enrich all French files
    fr_dir = "events/fr/sessions/i-couldnt-help-but-wonder/"
    for filename in WONDER_CONFIG_FR.keys():
        filepath = os.path.join(fr_dir, filename)
        if os.path.exists(filepath):
            enrich_session_systemic(filepath, filename, is_fr=True)


if __name__ == "__main__":
    main()

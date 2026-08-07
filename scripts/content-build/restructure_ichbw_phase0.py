import os
import re
from bs4 import BeautifulSoup

REL_REFS_EN = {
    'death-of-the-album.html': [
        {
            'title': 'Bohemian Rhapsody',
            'club': '🎬 Cinema Club',
            'desc': 'Explore the dramatic tension between commercial singles and cohesive artistic albums.',
            'link': '../cinema-club/bohemian-rhapsody.html'
        },
        {
            'title': 'La Mort de l\'Album (FR)',
            'club': '🌌 I Couldn\'t Help But Wonder',
            'desc': 'Contrast your musical perspectives in French and explore vocabulary related to vinyl nostalgia.',
            'link': '../../fr/sessions/i-couldnt-help-but-wonder/death-of-the-album.html'
        },
        {
            'title': 'AI is the Opposite of Art',
            'club': '📚 The Greatest Quotes',
            'desc': 'Ponder if algorithmic streaming or generative AI is slowly draining the soul from musical creations.',
            'link': '../the-greatest-quotes/ai-opposite-of-art.html'
        }
    ],
    'whether-raindrops-select-where-to-fall.html': [
        {
            'title': 'About Time',
            'club': '🎬 Cinema Club',
            'desc': 'Reflect on how minor choices and accidents ripple across time, shaping our entire destiny.',
            'link': '../cinema-club/about-time.html'
        },
        {
            'title': 'Murphy\'s Law',
            'club': '🧠 Mind Matters',
            'desc': 'Discuss whether things are destined to go wrong, or if we construct our own fate.',
            'link': '../mind-matters/murphys-law.html'
        },
        {
            'title': 'Socrates & Wisdom of Uncertainty',
            'club': '📚 The Greatest Quotes',
            'desc': 'Embrace the beauty of not knowing and letting life guide your path.',
            'link': '../the-greatest-quotes/wisdom-of-socrates.html'
        }
    ],
    'do-insects-hide-when-it-rains.html': [
        {
            'title': 'A Quiet Place',
            'club': '🎬 Cinema Club',
            'desc': 'Examine the psychological toll of seeking silence and shelter in a hostile environment.',
            'link': '../cinema-club/a-quiet-place.html'
        },
        {
            'title': 'World Beekeeping Day',
            'club': '🎉 Let\'s Celebrate',
            'desc': 'Celebrate the delicate lives of insects and discuss our ecological obligation to protect them.',
            'link': '../lets-celebrate/urban-beekeeping-day-starter.html'
        },
        {
            'title': 'Anticipatory Grief',
            'club': '🧠 Mind Matters',
            'desc': 'Analyze the human urge to emotionally shelter ourselves before a storm actually hits.',
            'link': '../mind-matters/anticipatory-grief.html'
        }
    ],
    'is-bad-weather-gods-anger.html': [
        {
            'title': 'Hereditary',
            'club': '🎬 Cinema Club',
            'desc': 'Investigate how ancient beliefs, dark forces, and paranoia shape human interpretation of tragedy.',
            'link': '../cinema-club/hereditary.html'
        },
        {
            'title': 'Feynman: Knowledge and Passion',
            'club': '📚 The Greatest Quotes',
            'desc': 'Contrast ancient mythical views with the cold, beautiful clarity of scientific inquiry.',
            'link': '../the-greatest-quotes/feynman-knowledge-isnt-free-intermediate.html'
        },
        {
            'title': 'International Asteroid Day',
            'club': '🎉 Let\'s Celebrate',
            'desc': 'Reflect on our cosmic vulnerability and how we cope with unpredictable celestial threats.',
            'link': '../lets-celebrate/international-asteroid-day-intermediate.html'
        }
    ],
    'always-watched-in-a-crowd.html': [
        {
            'title': 'Black Mirror',
            'club': '🎬 Cinema Club',
            'desc': 'Examine how the constant gaze of cameras and rating systems fuels urban paranoia.',
            'link': '../cinema-club/black-mirror.html'
        },
        {
            'title': 'Impersonation & Masks',
            'club': '🧠 Mind Matters',
            'desc': 'Deconstruct the pressure of constantly performing a role when you feel observed.',
            'link': '../mind-matters/impersonation.html'
        },
        {
            'title': 'Sonder: Realizing Other Lives',
            'club': '📚 The Greatest Quotes',
            'desc': 'Dismantle your spotlight effect by realizing that every stranger has a life as complex as yours.',
            'link': '../the-greatest-quotes/sonder.html'
        }
    ],
    'why-is-everyone-copying-me.html': [
        {
            'title': 'Free Guy',
            'club': '🎬 Cinema Club',
            'desc': 'Discover the joy of breaking free from cloned, repetitive habits to establish a unique identity.',
            'link': '../cinema-club/free-guy-intermediate.html'
        },
        {
            'title': 'Law of Attraction',
            'club': '🧠 Mind Matters',
            'desc': 'Discuss if mimicry is a natural result of energetic alignment or a loss of self-worth.',
            'link': '../mind-matters/law-of-attraction.html'
        },
        {
            'title': 'Think for Yourself',
            'club': '📚 The Greatest Quotes',
            'desc': 'A deep dive into the courage required to stand completely independent from public consensus.',
            'link': '../the-greatest-quotes/think-for-yourself-quote.html'
        }
    ],
    'feeling-empty-after-series.html': [
        {
            'title': 'Fleabag',
            'club': '🎬 Cinema Club',
            'desc': 'Explore grief, loneliness, and the bittersweet coping mechanisms we use when a story concludes.',
            'link': '../cinema-club/fleabag.html'
        },
        {
            'title': 'Celebrity Life',
            'club': '⚖️ My Life With/Without',
            'desc': 'Reflect on why we invest so much of our emotional energy into parasocial idols and characters.',
            'link': '../my-life-with-without/celebrity-life.html'
        },
        {
            'title': 'Videogames & Solitude',
            'club': '⚖️ My Life With/Without',
            'desc': 'Discuss how virtual worlds act as temporary shelters from the cold indifference of reality.',
            'link': '../my-life-with-without/videogame-life.html'
        }
    ],
    'ugly-produce-anti-waste.html': [
        {
            'title': 'The Substance',
            'club': '🎬 Cinema Club',
            'desc': 'Investigate society\'s brutal obsession with aesthetic symmetry and the price we pay for perfection.',
            'link': '../cinema-club/the-substance.html'
        },
        {
            'title': 'Fast Fashion',
            'club': '⚖️ My Life With/Without',
            'desc': 'Deconstruct our throwaway culture and how rapid aesthetic trends feed collective vanity.',
            'link': '../my-life-with-without/fashion-life.html'
        },
        {
            'title': 'Voltaire: Read and Dance',
            'club': '📚 The Greatest Quotes',
            'desc': 'A philosophical reminder to accept the natural, imperfect flow of life without obsession.',
            'link': '../the-greatest-quotes/voltaire-read-dance-quote.html'
        }
    ],
    'does-euthanasia-reduce-suicide-rates.html': [
        {
            'title': 'About Time',
            'club': '🎬 Cinema Club',
            'desc': 'Ponder if knowing how and when your time ends adds a profound value to the moments we have left.',
            'link': '../cinema-club/about-time.html'
        },
        {
            'title': 'Assisted Dying (FR)',
            'club': '⚖️ Debatable & Relatable',
            'desc': 'Engage in a rigorous comparative debate on the ethical, legal, and human parameters of active euthanasia.',
            'link': '../../fr/sessions/debatable-relatable/l-aide-active-a-mourir.html'
        },
        {
            'title': 'Must Die First to Live',
            'club': '📚 The Greatest Quotes',
            'desc': 'Analyze the profound relationship between our mortality and our capacity for authentic joy.',
            'link': '../the-greatest-quotes/must-die-first.html'
        }
    ],
    'appreciating-amy-winehouse-after-death.html': [
        {
            'title': 'Bohemian Rhapsody',
            'club': '🎬 Cinema Club',
            'desc': 'Witness the tragic trajectory of fame, isolation, and how we only mourn artists after they are gone.',
            'link': '../cinema-club/bohemian-rhapsody.html'
        },
        {
            'title': 'Kate Bush Challenge',
            'club': '🎤 Karaoke Club',
            'desc': 'Connect with haunting, intense female vocal narratives that prioritize raw emotion over pop trends.',
            'link': '../karaoke-club/kate-bush-challenge.html'
        },
        {
            'title': 'Broken Children Grown Bodies',
            'club': '🧠 Mind Matters',
            'desc': 'Trace the child scars that dictate the self-destructive patterns of genius adults.',
            'link': '../mind-matters/broken-children-grown-bodies.html'
        }
    ],
    'why-do-we-try-to-relate-to-adhd.html': [
        {
            'title': 'Lucy',
            'club': '🎬 Cinema Club',
            'desc': 'Ponder what happens when we unleash 100% of our cognitive capacity in a world of endless stimuli.',
            'link': '../cinema-club/lucy.html'
        },
        {
            'title': 'Designed to Addict',
            'club': '📖 Long Reads',
            'desc': 'Learn how tech platforms programmatically manipulate our attention spans for financial gain.',
            'link': '../long-reads/designed-to-addict.html'
        },
        {
            'title': 'Typing vs Handwriting',
            'club': '⚖️ Debatable & Relatable',
            'desc': 'Debate if abandoning handwriting is slowly rewiring our sensory memory and patience.',
            'link': '../debatable-relatable/typing-vs-handwriting-intermediate.html'
        }
    ],
    'is-parenting-instinct-a-real-thing-or-scam.html': [
        {
            'title': 'Stepmom',
            'club': '🎬 Cinema Club',
            'desc': 'Deconstruct motherly roles and discover what truly creates a deep parental bond.',
            'link': '../cinema-club/stepmom-intermediate.html'
        },
        {
            'title': 'Dolto: Difficult Child',
            'club': '📚 The Greatest Quotes',
            'desc': 'Reflect on child psychology and why communication matters more than biological templates.',
            'link': '../the-greatest-quotes/dolto-difficult-child-quote.html'
        },
        {
            'title': 'Lunar New Year',
            'club': '🎉 Let\'s Celebrate',
            'desc': 'Discuss how family obligations and multi-generational pressure shape parent-child dynamics.',
            'link': '../lets-celebrate/lunar-new-year.html'
        }
    ],
    'are-traditions-hidden-monogamy.html': [
        {
            'title': 'Yentl',
            'club': '🎬 Cinema Club',
            'desc': 'Follow the story of a woman rebelling against rigid gender traditions to pursue authentic learning.',
            'link': '../cinema-club/yentl.html'
        },
        {
            'title': 'Diwali Festival',
            'club': '🎉 Let\'s Celebrate',
            'desc': 'Celebrate the luminous beauty of shared cultural rituals and how they unify communities.',
            'link': '../lets-celebrate/diwali-festival.html'
        },
        {
            'title': 'Fear of Love & Control',
            'club': '🧠 Mind Matters',
            'desc': 'Explore why we seek the comforting traps of commitment to avoid absolute freedom.',
            'link': '../mind-matters/fear-of-love-control.html'
        }
    ],
    'are-traditions-hidden-monogamy-upper-intermediate.html': [
        {
            'title': 'Yentl',
            'club': '🎬 Cinema Club',
            'desc': 'Follow the story of a woman rebelling against rigid gender traditions to pursue authentic learning.',
            'link': '../cinema-club/yentl.html'
        },
        {
            'title': 'Diwali Festival',
            'club': '🎉 Let\'s Celebrate',
            'desc': 'Celebrate the luminous beauty of shared cultural rituals and how they unify communities.',
            'link': '../lets-celebrate/diwali-festival.html'
        },
        {
            'title': 'Fear of Love & Control',
            'club': '🧠 Mind Matters',
            'desc': 'Explore why we seek the comforting traps of commitment to avoid absolute freedom.',
            'link': '../mind-matters/fear-of-love-control.html'
        }
    ],
    'collective-guilt-global-crisis.html': [
        {
            'title': 'Don\'t Look Up',
            'club': '🎬 Cinema Club',
            'desc': 'A satirical take on climate apathy, public noise, and the burden of knowing we are headed for a storm.',
            'link': '../cinema-club/dont-look-up.html'
        },
        {
            'title': 'National Simplicity Day',
            'club': '🎉 Let\'s Celebrate',
            'desc': 'Celebrate the romantic escape from industrial comfort to find peace in minimal consumption.',
            'link': '../lets-celebrate/national-simplicity-day.html'
        },
        {
            'title': '4-Day Work Week',
            'club': '⚖️ Debatable & Relatable',
            'desc': 'Debate if reducing labor hours is the key to both mental recovery and lower planetary impact.',
            'link': '../debatable-relatable/4-day-work-week.html'
        }
    ],
    'i-have-no-time-for-it.html': [
        {
            'title': 'About Time',
            'club': '🎬 Cinema Club',
            'desc': 'A beautiful cinematic meditation on time travel and how we often fail to live in our precious hours.',
            'link': '../cinema-club/about-time.html'
        },
        {
            'title': 'The 30-Day Breakup',
            'club': '📖 Long Reads',
            'desc': 'Reclaim hours of your day by breaking up with toxic, infinite scroll patterns.',
            'link': '../long-reads/the-30-day-breakup.html'
        },
        {
            'title': 'Socrates & Examined Choices',
            'club': '📚 The Greatest Quotes',
            'desc': 'A philosophical call to inspect whether we are genuinely too busy or just avoid quiet reflections.',
            'link': '../the-greatest-quotes/wisdom-of-socrates.html'
        }
    ],
    'does-inclusive-language-make-us-equal.html': [
        {
            'title': 'Queendom',
            'club': '🎬 Cinema Club',
            'desc': 'See how identity, pronouns, and speech operate as tools of survival and empowerment.',
            'link': '../cinema-club/queendom.html'
        },
        {
            'title': 'Expert Defends Language Mistakes',
            'club': '🧠 Mind Matters',
            'desc': 'Reflect on how strict linguistic gatekeeping affects student confidence and identity expression.',
            'link': '../mind-matters/expert-defend-language-mistakes.html'
        },
        {
            'title': 'Think for Yourself',
            'club': '📚 The Greatest Quotes',
            'desc': 'Ponder if changing terms alters reality, or if independent critical thinking is what truly matters.',
            'link': '../the-greatest-quotes/think-for-yourself-quote.html'
        }
    ],
    'why-do-i-spend-more-when-i-earn-more.html': [
        {
            'title': 'The Devil Wears Prada',
            'club': '🎬 Cinema Club',
            'desc': 'Examine how professional escalation, peer comparisons, and luxury spending slowly capture our lives.',
            'link': '../cinema-club/the-devil-wears-prada-intermediate.html'
        },
        {
            'title': 'Credit Card Life',
            'club': '⚖️ My Life With/Without',
            'desc': 'Debate the invisible traps of digital credit and how frictionless payments fuel mindless consumption.',
            'link': '../my-life-with-without/credit-card-life.html'
        },
        {
            'title': 'Feynman Knowledge vs Possessions',
            'club': '📚 The Greatest Quotes',
            'desc': 'Remind yourself why true wealth lies in deep intellectual curiosity rather than material trophies.',
            'link': '../the-greatest-quotes/feynman-knowledge-isnt-free-elementary.html'
        }
    ]
}

REL_REFS_FR = {
    'death-of-the-album.html': [
        {
            'title': 'Bohemian Rhapsody',
            'club': '🎬 Cinéma Club',
            'desc': 'Explorez la tension dramatique entre la rentabilité des singles commerciaux et la cohérence des albums d\'auteur.',
            'link': '../../../sessions/cinema-club/bohemian-rhapsody.html'
        },
        {
            'title': 'Death of the Album (EN)',
            'club': '🌌 I Couldn\'t Help But Wonder',
            'desc': 'Comparez vos perspectives musicales en anglais et approfondissez le vocabulaire lié à l\'industrie phonographique.',
            'link': '../../../sessions/i-couldnt-help-but-wonder/death-of-the-album.html'
        },
        {
            'title': 'L\'IA est le contraire de l\'art',
            'club': '📚 Grandes Citations',
            'desc': 'Demandez-vous si l\'écoute passive par algorithmes ou l\'IA générative ne vident pas l\'art musical de son âme.',
            'link': '../../../sessions/the-greatest-quotes/ai-opposite-of-art.html'
        }
    ],
    'does-inclusive-language-make-us-equal.html': [
        {
            'title': 'Queendom',
            'club': '🎬 Cinéma Club',
            'desc': 'Observez comment l\'identité, les pronoms et le discours agissent comme des outils d\'affirmation de soi.',
            'link': '../../../sessions/cinema-club/queendom.html'
        },
        {
            'title': 'Does Inclusive Language Make Us Equal? (EN)',
            'club': '🌌 I Couldn\'t Help But Wonder',
            'desc': 'Comparez vos arguments en anglais sur l\'inclusivité linguistique et l\'équité sociale.',
            'link': '../../../sessions/i-couldnt-help-but-wonder/does-inclusive-language-make-us-equal.html'
        },
        {
            'title': 'Réfléchir par soi-même',
            'club': '📚 Grandes Citations',
            'desc': 'Débattez de l\'impact réel des mots sur la pensée critique et l\'indépendance d\'esprit.',
            'link': '../../../sessions/the-greatest-quotes/think-for-yourself-quote.html'
        }
    ],
    'feeling-empty-after-series.html': [
        {
            'title': 'Fleabag',
            'club': '🎬 Cinéma Club',
            'desc': 'Explorez le deuil, la solitude urbaine et les attachements émotionnels intimes aux personnages.',
            'link': '../../../sessions/cinema-club/fleabag.html'
        },
        {
            'title': 'Feeling Empty After Series (EN)',
            'club': '🌌 I Couldn\'t Help But Wonder',
            'desc': 'Exprimez vos sentiments post-binge watching en anglais avec un vocabulaire introspectif.',
            'link': '../../../sessions/i-couldnt-help-but-wonder/feeling-empty-after-series.html'
        },
        {
            'title': 'La vie de célébrité',
            'club': '⚖️ Ma vie avec/sans',
            'desc': 'Analysez notre dépendance moderne aux vies imaginaires des idoles de la pop-culture.',
            'link': '../../../sessions/my-life-with-without/celebrity-life.html'
        }
    ],
    'is-parenting-instinct-a-real-thing-or-scam.html': [
        {
            'title': 'Stepmom',
            'club': '🎬 Cinéma Club',
            'desc': 'Déconstruisez le mythe de la mère parfaite et explorez ce qui forge un véritable lien affectif.',
            'link': '../../../sessions/cinema-club/stepmom-intermediate.html'
        },
        {
            'title': 'Is Parenting Instinct a Scam? (EN)',
            'club': '🌌 I Couldn\'t Help But Wonder',
            'desc': 'Débattez de la parentalité et des pressions biologiques avec un vocabulaire anglais calibré.',
            'link': '../../../sessions/i-couldnt-help-but-wonder/is-parenting-instinct-a-real-thing-or-scam.html'
        },
        {
            'title': 'Dolto : L\'enfant difficile',
            'club': '📚 Grandes Citations',
            'desc': 'Examinez la psychologie de l\'enfant et l\'importance de l\'écoute authentique face aux théories rigides.',
            'link': '../../the-greatest-quotes/dolto-difficult-child-quote.html'
        }
    ],
    'ugly-produce-anti-waste.html': [
        {
            'title': 'The Substance',
            'club': '🎬 Cinéma Club',
            'desc': 'Analysez la quête obsessionnelle de perfection esthétique imposée par la société moderne.',
            'link': '../../../sessions/cinema-club/the-substance.html'
        },
        {
            'title': 'Ugly Produce & Anti-Waste (EN)',
            'club': '🌌 I Couldn\'t Help But Wonder',
            'desc': 'Exprimez vos convictions sur l\'écologie et l\'obsession de la symétrie en langue anglaise.',
            'link': '../../../sessions/i-couldnt-help-but-wonder/ugly-produce-anti-waste.html'
        },
        {
            'title': 'Voltaire : Lire et danser',
            'club': '📚 Grandes Citations',
            'desc': 'Une invitation philosophique à accepter le cours naturel et imparfait de l\'existence.',
            'link': '../../the-greatest-quotes/voltaire-read-dance-quote.html'
        }
    ],
    'why-do-we-try-to-relate-to-adhd.html': [
        {
            'title': 'Lucy',
            'club': '🎬 Cinéma Club',
            'desc': 'Explorez les limites de l\'attention et des capacités cognitives à l\'ère de l\'hyper-connectivité.',
            'link': '../../../sessions/cinema-club/lucy.html'
        },
        {
            'title': 'Why Do We Try to Relate to ADHD? (EN)',
            'club': '🌌 I Couldn\'t Help But Wonder',
            'desc': 'Débattez de l\'attention moderne et de la surcharge cognitive en anglais.',
            'link': '../../../sessions/i-couldnt-help-but-wonder/why-do-we-try-to-relate-to-adhd.html'
        },
        {
            'title': 'Designed to Addict',
            'club': '📖 Long Reads',
            'desc': 'Comprenez comment l\'économie de l\'attention et les notifications détruisent consciemment notre patience.',
            'link': '../../../sessions/long-reads/designed-to-addict.html'
        }
    ]
}

def generate_related_refs_html(basename, is_french):
    mapping = REL_REFS_FR if is_french else REL_REFS_EN
    refs = mapping.get(basename, [])
    if not refs:
        return ""

    title = "🌌 Thèmes liés et pistes de réflexion" if is_french else "🌌 Related Themes & Speculative Paths"
    subtitle = "Si vous avez aimé réfléchir à ces questions, explorez ces autres sessions COSYlanguages connexes :" if is_french else "If you enjoyed thinking about these ideas, explore these highly connected COSYlanguages sessions to go deeper into the same intellectual territory:"

    cards_html = ""
    for r in refs:
        cards_html += f"""
    <div class="ref-card" style="background: var(--surface-color, #ffffff); border: 1px solid var(--border, #E2D9C8); padding: 1.25rem; border-radius: 12px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between; transition: all 0.2s ease-in-out;">
      <div>
        <span class="ref-club" style="display: inline-block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--indigo, #3F2B96); letter-spacing: 0.05em; margin-bottom: 0.5rem;">{r['club']}</span>
        <h4 class="ref-title" style="font-family: 'Playfair Display', serif; font-size: 1.1rem; margin: 0 0 0.5rem 0; color: var(--ink, #1F104D); font-weight: 700;">{r['title']}</h4>
        <p class="ref-desc" style="font-size: 0.85rem; color: var(--ink-soft, #7C6E52); line-height: 1.4; margin: 0 0 1rem 0;">{r['desc']}</p>
      </div>
      <a href="{r['link']}" class="btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 0.8rem; border-radius: 6px; text-decoration: none; text-align: center; font-weight: bold; border: 1px solid var(--border, #E2D9C8); color: var(--ink, #1F104D); display: block; transition: all 0.2s;">
        {"Explorer la session →" if is_french else "Explore Session →"}
      </a>
    </div>"""

    html = f"""
  <section id="related-references" style="margin-top: 3.5rem; border-top: 1px dashed var(--border, #E2D9C8); padding-top: 2rem;">
    <h3 style="font-family: 'Playfair Display', serif; font-size: 1.35rem; margin-top: 0; margin-bottom: 0.5rem; color: #3F2B96;">{title}</h3>
    <p style="font-size: 0.88rem; color: var(--muted, #7C6E52); margin-top: 0; margin-bottom: 1.5rem; line-height: 1.5;">{subtitle}</p>
    <div class="ref-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">{cards_html}
    </div>
  </section>
"""
    return html

def process_file(filepath):
    print(f"Processing: {filepath}")
    basename = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')

    is_french = "events/fr/" in filepath.replace('\\', '/') or (soup.html and soup.html.get('lang') == 'fr')

    content_container = soup.find('main', class_='content-container')
    if not content_container:
        print(f"⚠️ No content container found in {filepath}. Skipping.")
        return

    # Decompose any old related references or carrie diaries
    old_refs = content_container.find('section', id='related-references')
    if old_refs:
        old_refs.decompose()
    old_diary = content_container.find('div', class_='carrie-diary')
    if old_diary:
        old_diary.decompose()

    # Extract Breadcrumbs and Back link
    breadcrumbs = content_container.find('nav', class_='cosy-breadcrumbs')
    if breadcrumbs:
        breadcrumbs = breadcrumbs.extract()
    back_link = content_container.find('a', class_='back-link')
    if back_link:
        back_link = back_link.extract()

    # Find Sensitive warning
    warning = content_container.find('div', class_='sensitive-topic-warning')
    if warning:
        warning = warning.extract()
    else:
        # Create a new sensitive topic warning
        warning_soup = BeautifulSoup("""
<div class="sensitive-topic-warning" style="margin-bottom: 2rem; padding: 1.25rem; background: rgba(229, 62, 62, 0.05); border-left: 4px solid #E53E3E; border-radius: 12px; font-size: 0.92rem; line-height: 1.5; color: #9B2C2C; display: flex; align-items: flex-start; gap: 12px; box-shadow: var(--shadow-sm);">
  <span style="font-size: 1.4rem; line-height: 1;">🔞</span>
  <div>
    <strong style="color: #9B2C2C;">Sensitive Topic Note:</strong> This session focuses on <strong>sensitive or challenging personal and philosophical themes</strong>. Discussion is intended to be handled with extreme respect, empathy, and academic focus.
  </div>
</div>""" if not is_french else """
<div class="sensitive-topic-warning" style="margin-bottom: 2rem; padding: 1.25rem; background: rgba(229, 62, 62, 0.05); border-left: 4px solid #E53E3E; border-radius: 12px; font-size: 0.92rem; line-height: 1.5; color: #9B2C2C; display: flex; align-items: flex-start; gap: 12px; box-shadow: var(--shadow-sm);">
  <span style="font-size: 1.4rem; line-height: 1;">🔞</span>
  <div>
    <strong style="color: #9B2C2C;">Note sur les thèmes sensibles :</strong> Cette session aborde des <strong>thèmes personnels, sensibles ou philosophiques</strong>. Les discussions doivent être menées avec le plus grand respect, empathie et rigueur académique.
  </div>
</div>""", 'html.parser')
        warning = warning_soup.find('div', class_='sensitive-topic-warning')

    # Find Meta Grid Details
    meta_grid = content_container.find('div', class_='session-meta-grid')
    meta_lang = "English" if not is_french else "Anglais"
    meta_level = "B1 - C2"
    meta_theme = "Introspection"

    if meta_grid:
        items = meta_grid.find_all('div', class_='meta-item')
        for it in items:
            h4 = it.find('h4')
            p = it.find('p')
            if h4 and p:
                label = h4.get_text().strip().lower()
                val = p.get_text().strip()
                if 'lang' in label:
                    meta_lang = val
                elif 'level' in label or 'niveau' in label:
                    meta_level = val
                elif 'vibe' in label or 'ambiance' in label:
                    meta_theme = val
        meta_grid.decompose()

    # Find Editorial Box
    editorial_box = content_container.find('div', class_='wonder-column-box')
    if editorial_box:
        editorial_box = editorial_box.extract()

    # Find Audio Player Placeholder
    audio_placeholder = content_container.find('div', class_='wonder-audio-player-placeholder')
    if audio_placeholder:
        audio_placeholder = audio_placeholder.extract()
    else:
        audio_placeholder = soup.new_tag("div", attrs={"class": "wonder-audio-player-placeholder"})

    # Find Transcript collapsible details element
    transcript_details = content_container.find('details', class_='transcript-details')
    if transcript_details:
        transcript_details = transcript_details.extract()

    # Find Vocabulary Section
    vocab_section = content_container.find('section', id='vocabulary')
    if vocab_section:
        vocab_section = vocab_section.extract()

    # Find Discussion Section
    rounds_section = content_container.find('section', id='rounds') or content_container.find('section', id='structure')
    if rounds_section:
        rounds_section = rounds_section.extract()

    # Construct the beautiful cosy-perspective-panel
    perspective_soup = BeautifulSoup(f"""
<div class="cosy-perspective-panel" style="background: var(--cream-dark, #F5F1EA); border: 2px solid var(--border, #E2D9C8); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem;">
  <div class="panel-meta-row" style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 1.5rem; border-bottom: 1px dashed var(--border, #E2D9C8); padding-bottom: 1rem; font-size: 0.9rem; font-weight: bold; color: var(--muted, #7C6E52);">
    <span>🌍 {"LANGUAGE" if not is_french else "LANGUE"} : <span style="color: var(--ink, #1F104D); font-weight: 600;">{meta_lang}</span></span>
    <span>📊 {"LEVEL" if not is_french else "NIVEAU"} : <span style="color: var(--ink, #1F104D); font-weight: 600;">{meta_level}</span></span>
    <span>🎯 {"THEME" if not is_french else "THÈME"} : <span style="color: var(--ink, #1F104D); font-weight: 600;">{meta_theme}</span></span>
  </div>
  <div class="panel-perspective-mirror">
    <h4 style="font-family: 'Playfair Display', serif; font-size: 1.15rem; margin-top: 0; margin-bottom: 1rem; color: #3F2B96;">📰 {"PERSPECTIVE MIRROR" if not is_french else "MIROIR DE PERSPECTIVE"}</h4>
  </div>
</div>""", 'html.parser')
    panel = perspective_soup.find('div', class_='cosy-perspective-panel')
    mirror = panel.find('div', class_='panel-perspective-mirror')

    if editorial_box:
        # Extract the grids/items from editorial_box
        grid = editorial_box.find('div', class_='wonder-column-grid')
        if grid:
            mirror.append(grid)
        else:
            mirror.append(editorial_box)

    # Generate Switcher Placeholder
    switcher_placeholder = soup.new_tag("div", attrs={"class": "cosy-session-switcher-placeholder"})

    # Generate Related References section
    related_refs_html = generate_related_refs_html(basename, is_french)
    related_refs_soup = BeautifulSoup(related_refs_html, 'html.parser')

    # Re-populate Content Container in the exact 7-part sequence requested!
    content_container.clear()

    # Top Navigation Items
    if breadcrumbs:
        content_container.append(breadcrumbs)
    if back_link:
        content_container.append(back_link)

    # 1. Sensitive Warning
    content_container.append(warning)

    # 2. Language Switcher Placeholder
    content_container.append(switcher_placeholder)

    # 3. Perspective Panel
    content_container.append(panel)

    # 4. Audio Player & Transcript details
    content_container.append(audio_placeholder)
    if transcript_details:
        content_container.append(transcript_details)

    # 5. Vocabulary section
    if vocab_section:
        content_container.append(vocab_section)

    # 6. Discussion Rounds & Grammar
    if rounds_section:
        content_container.append(rounds_section)

    # 7. Related References cards
    if related_refs_soup:
        content_container.append(related_refs_soup)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print("-> Restructured successfully.")

def main():
    dirs = [
        "events/sessions/i-couldnt-help-but-wonder/",
        "events/fr/sessions/i-couldnt-help-but-wonder/"
    ]

    for d in dirs:
        if not os.path.exists(d):
            continue
        for filename in sorted(os.listdir(d)):
            if filename.endswith(".html") and not filename.startswith("template"):
                filepath = os.path.join(d, filename)
                process_file(filepath)

if __name__ == "__main__":
    main()

import os
import re

BASE_DIR = "apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/fr/zazie-challenge"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")
NOS_AMES_FILE = os.path.join(BASE_DIR, "nos-ames-sont.html")
COULEUR_FILE = os.path.join(BASE_DIR, "couleur.html")
SPEED_FILE = os.path.join(BASE_DIR, "speed.html")
JE_SUIS_UN_HOMME_FILE = os.path.join(BASE_DIR, "je-suis-un-homme.html")

def escape_js_quote(text):
    """Escapes single quotes for use inside single-quoted JS string literals within HTML onclick attributes."""
    return text.replace("'", "\\'")

# ==============================================================================
# CONTENT DEFINITIONS FOR EACH SONG
# ==============================================================================

# ------------------------------------------------------------------------------
# 1. NOS ÂMES SONT (Theme: La connexion spirituelle & La vulnérabilité des âmes)
# ------------------------------------------------------------------------------
NOS_AMES_THEME_TITLE = "❤️ Thème: La connexion spirituelle & La vulnérabilité des âmes"
NOS_AMES_THEME_BOX = """<div class="theme-box" style="background: var(--cream); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; border: 1px dashed var(--border);">
<h3 style="margin-top:0; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Thème: La connexion spirituelle &amp; La vulnérabilité des âmes</h3>
<p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--ink-soft);">Nous allons discuter de:</p>
<ul style="margin:0; padding-left:1.2rem; font-size:0.9rem; color:var(--ink-soft);">
<li>Âme &amp; Connexion spirituelle</li>
<li>Profondeur &amp; Mystère intérieur</li>
<li>Sensibilité &amp; Vulnérabilité</li>
<li>Réflexion personnelle</li>
</ul>
</div>"""

NOS_AMES_VOCAB_INNER = f"""<div class="vocab-grid-10">
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Concepts clés &amp; Émotions</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Âme</div>
<div class="vocab-def">Principe de vie, de pensée et de sensibilité chez l'être humain.</div>
<div class="vocab-example">Dans 'nos âmes sont', Zazie chante la vulnérabilité de nos âmes.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Corps / Matière</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Âme")}', definition:'{escape_js_quote("Principe de vie, de pensée et de sensibilité chez l'être humain.")}', example:'{escape_js_quote("Dans 'nos âmes sont', Zazie chante la vulnérabilité de nos âmes.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Connexion</div>
<div class="vocab-def">Lien spirituel ou émotionnel profond entre deux êtres.</div>
<div class="vocab-example">Une connexion sincère résiste à la distance et au temps.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Rupture / Éloignement</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Connexion")}', definition:'{escape_js_quote("Lien spirituel ou émotionnel profond entre deux êtres.")}', example:'{escape_js_quote("Une connexion sincère résiste à la distance et au temps.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Profondeur</div>
<div class="vocab-def">Caractère de ce qui est intense, grave ou spirituellement élevé.</div>
<div class="vocab-example">La profondeur des paroles de Zazie touche directement le cœur.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Superficialité</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Profondeur")}', definition:'{escape_js_quote("Caractère de ce qui est intense, grave ou spirituellement élevé.")}', example:'{escape_js_quote("La profondeur des paroles de Zazie touche directement le cœur.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Mystère</div>
<div class="vocab-def">Ce qui reste inexplicable, caché ou secret aux yeux du monde.</div>
<div class="vocab-example">L'origine de notre intuition demeure un mystère fascinant.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Évidence / Clarté</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Mystère")}', definition:'{escape_js_quote("Ce qui reste inexplicable, caché ou secret aux yeux du monde.")}', example:'{escape_js_quote("L'origine de notre intuition demeure un mystère fascinant.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Douleur</div>
<div class="vocab-def">Souffrance morale ou émotionnelle ressentie dans la solitude.</div>
<div class="vocab-example">Exprimer sa douleur permet d'entamer le processus de guérison.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Joie / Apaisement</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Douleur")}', definition:'{escape_js_quote("Souffrance morale ou émotionnelle ressentie dans la solitude.")}', example:'{escape_js_quote("Exprimer sa douleur permet d'entamer le processus de guérison.")}'}}, this)">+ Dictionary</button>
</div>
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">🗣️ Vie, Actions &amp; Connexion</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Élévation</div>
<div class="vocab-def">Mouvement de l'esprit vers une compréhension plus noble et spirituelle.</div>
<div class="vocab-example">L'art et la musique favorisent l'élévation de l'âme humaine.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Chute / Dégradation</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Élévation")}', definition:'{escape_js_quote("Mouvement de l'esprit vers une compréhension plus noble et spirituelle.")}', example:'{escape_js_quote("L'art et la musique favorisent l'élévation de l'âme humaine.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Sensibilité</div>
<div class="vocab-def">Capacité à ressentir vivement les émotions et la beauté.</div>
<div class="vocab-example">Sa grande sensibilité lui permet de comprendre les peines des autres.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Insensibilité / Indifférence</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Sensibilité")}', definition:'{escape_js_quote("Capacité à ressentir vivement les émotions et la beauté.")}', example:'{escape_js_quote("Sa grande sensibilité lui permet de comprendre les peines des autres.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Lien</div>
<div class="vocab-def">Attachement affectif ou spirituel invisible unissant plusieurs personnes.</div>
<div class="vocab-example">Ce lien fraternel s'est renforcé à travers les épreuves traversées.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Détachement / Séparation</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Lien")}', definition:'{escape_js_quote("Attachement affectif ou spirituel invisible unissant plusieurs personnes.")}', example:'{escape_js_quote("Ce lien fraternel s'est renforcé à travers les épreuves traversées.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Vérité</div>
<div class="vocab-def">Authenticité absolue des sentiments et de l'être intérieur.</div>
<div class="vocab-example">Rechercher la vérité intérieure exige du courage et de la sincérité.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Mensonge / Illusion</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Vérité")}', definition:'{escape_js_quote("Authenticité absolue des sentiments et de l'être intérieur.")}', example:'{escape_js_quote("Rechercher la vérité intérieure exige du courage et de la sincérité.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Invisible</div>
<div class="vocab-def">Ce qui ne se voit pas avec les yeux mais se ressent avec le cœur.</div>
<div class="vocab-example">L'essentiel est souvent invisible dans notre monde matérialiste.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Visible / Apparent</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Invisible")}', definition:'{escape_js_quote("Ce qui ne se voit pas avec les yeux mais se ressent avec le cœur.")}', example:'{escape_js_quote("L'essentiel est souvent invisible dans notre monde matérialiste.")}'}}, this)">+ Dictionary</button>
</div>
</div>"""

NOS_AMES_DISC_INNER = """<div class="round-1" style="margin-bottom: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
<div class="round-item"><div class="round-item-main">Dans 'nos âmes sont', Zazie explore ce que nos <strong>âmes</strong> conservent d'<strong>invisible</strong> aux yeux du monde. Pourquoi l'essentiel d'une personne se trouve-t-il dans son monde intérieur ?</div>
<div class="round-item-personal">★ Accordez-vous plus de valeur à l'apparence extérieure ou à la richesse de l'<strong>âme</strong> d'une personne ?</div>
</div>
<div class="round-item"><div class="round-item-main">Zazie aborde le <strong>mystère</strong> des affinités qui dépassent la logique. Pourquoi cherchons-nous toujours une explication rationnelle au <strong>lien</strong> amoureux ou amical ?</div>
<div class="round-item-personal">★ Avez-vous déjà ressenti un <strong>lien</strong> immédiat et inexplicable avec un inconnu ?</div>
</div>
<div class="round-item"><div class="round-item-main">La chanson décrit nos âmes comme des « enfants sages prisonnières » de nos cages mentales. En quoi la peur du jugement nous empêche-t-elle de révéler notre <strong>vérité</strong> ?</div>
<div class="round-item-personal">★ Dans quelle situation osez-vous exprimer votre <strong>vérité</strong> sans crainte du regard des autres ?</div>
</div>
<div class="round-item"><div class="round-item-main">Zazie chante que « nous les hommes cruels, nous leur coupons les ailes ». Comment la dureté de la société moderne émousse-t-elle notre <strong>sensibilité</strong> naturelle ?</div>
<div class="round-item-personal">★ Que faites-vous pour protéger votre <strong>sensibilité</strong> face aux urgences du quotidien ?</div>
</div>
<div class="round-item"><div class="round-item-main">Face à la souffrance et à l'isolement, la musique et l'introspection offrent une voie vers l'<strong>élévation</strong> morale. Quel rôle l'art joue-t-il pour apaiser la <strong>douleur</strong> ?</div>
<div class="round-item-personal">★ Quelle œuvre d'art ou mélodie vous aide à surmonter une <strong>douleur</strong> émotionnelle ?</div>
</div>
</div>
<div class="round-2" style="margin-top: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
<div class="round-item"><div class="round-item-main">La <strong>connexion</strong> spirituelle entre deux êtres humains est plus puissante et durable que toute attirance physique ou matérielle. Débattons-en.</div>
</div>
<div class="round-item"><div class="round-item-main">Notre société hyperconnectée favorise les échanges superficiels au détriment de la <strong>profondeur</strong> des relations réelles. Qu'en pensez-vous ?</div>
</div>
<div class="round-item"><div class="round-item-main">Il est nécessaire de préserver une part d'<strong>invisible</strong> et de <strong>mystère</strong> dans sa vie privée pour maintenir sa paix intérieure. Partagez votre avis.</div>
</div>
</div>"""


# ------------------------------------------------------------------------------
# 2. COULEUR (Theme: La justice sociale, La diversité & La paix)
# ------------------------------------------------------------------------------
COULEUR_THEME_TITLE = "❤️ Thème: La justice sociale, La diversité & La paix"
COULEUR_THEME_BOX = """<div class="theme-box" style="background: var(--cream); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; border: 1px dashed var(--border);">
<h3 style="margin-top:0; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Thème: La justice sociale, La diversité &amp; La paix</h3>
<p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--ink-soft);">Nous allons discuter de:</p>
<ul style="margin:0; padding-left:1.2rem; font-size:0.9rem; color:var(--ink-soft);">
<li>Couleur &amp; Diversité culturelle</li>
<li>Identité &amp; Préjugés sociaux</li>
<li>Harmonie, Tolérance &amp; Fraternité</li>
<li>Réflexion personnelle</li>
</ul>
</div>"""

COULEUR_VOCAB_INNER = f"""<div class="vocab-grid-10">
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Concepts clés &amp; Émotions</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Couleur</div>
<div class="vocab-def">Teinte de la peau ou nuance culturelle célébrant la richesse humaine.</div>
<div class="vocab-example">Dans 'Couleur', Zazie souhaite que toutes les couleurs brillent encore ensemble.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Uniformité / Monochromie</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Couleur")}', definition:'{escape_js_quote("Teinte de la peau ou nuance culturelle célébrant la richesse humaine.")}', example:'{escape_js_quote("Dans 'Couleur', Zazie souhaite que toutes les couleurs brillent encore ensemble.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Diversité</div>
<div class="vocab-def">Ensemble des différences culturelles et humaines enrichissant la communauté.</div>
<div class="vocab-example">La diversité culturelle est un trésor inestimable pour nos sociétés.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Homogénéité</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Diversité")}', definition:'{escape_js_quote("Ensemble des différences culturelles et humaines enrichissant la communauté.")}', example:'{escape_js_quote("La diversité culturelle est un trésor inestimable pour nos sociétés.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Identité</div>
<div class="vocab-def">Ensemble des caractéristiques propres à un individu ou un groupe.</div>
<div class="vocab-example">Chaque personne construit son identité à travers son histoire et ses valeurs.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Anonymat</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Identité")}', definition:'{escape_js_quote("Ensemble des caractéristiques propres à un individu ou un groupe.")}', example:'{escape_js_quote("Chaque personne construit son identité à travers son histoire et ses valeurs.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Préjugé</div>
<div class="vocab-def">Jugement préconçu sur une personne en raison de son origine ou de son apparence.</div>
<div class="vocab-example">Surmonter un préjugé demande de l'éducation et de l'ouverture d'esprit.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Objectivité / Tolérance</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Préjugé")}', definition:'{escape_js_quote("Jugement préconçu sur une personne en raison de son origine ou de son apparence.")}', example:'{escape_js_quote("Surmonter un préjugé demande de l'éducation et de l'ouverture d'esprit.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Harmonie</div>
<div class="vocab-def">Accord équilibré et pacifique entre des éléments divers.</div>
<div class="vocab-example">Vivre en harmonie exige le respect constant des différences d'autrui.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Discorde / Chaos</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Harmonie")}', definition:'{escape_js_quote("Accord équilibré et pacifique entre des éléments divers.")}', example:'{escape_js_quote("Vivre en harmonie exige le respect constant des différences d'autrui.")}'}}, this)">+ Dictionary</button>
</div>
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">🗣️ Vie, Actions &amp; Connexion</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Tolérance</div>
<div class="vocab-def">Attitude d'acceptation et de respect envers les convictions différentes.</div>
<div class="vocab-example">La tolérance est le pilier d'une démocratie apaisée.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Intolérance / Fanatisme</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Tolérance")}', definition:'{escape_js_quote("Attitude d'acceptation et de respect envers les convictions différentes.")}', example:'{escape_js_quote("La tolérance est le pilier d'une démocratie apaisée.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Fraternité</div>
<div class="vocab-def">Lien de solidarité et d'amitié qui unit tous les êtres humains.</div>
<div class="vocab-example">La fraternité universelle surpasse les divisions géographiques.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Hostilité / Rivalité</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Fraternité")}', definition:'{escape_js_quote("Lien de solidarité et d'amitié qui unit tous les êtres humains.")}', example:'{escape_js_quote("La fraternité universelle surpasse les divisions géographiques.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Mélange</div>
<div class="vocab-def">Union créative de différentes traditions et origines culturelles.</div>
<div class="vocab-example">La musique contemporaine est un formidable mélange de rythmes du monde.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Séparation / Segrégration</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Mélange")}', definition:'{escape_js_quote("Union créative de différentes traditions et origines culturelles.")}', example:'{escape_js_quote("La musique contemporaine est un formidable mélange de rythmes du monde.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Égalité</div>
<div class="vocab-def">Principe selon lequel tous les individus possèdent les mêmes droits.</div>
<div class="vocab-example">Lutter pour l'égalité des chances reste un combat quotidien.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Inégalité / Injustice</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Égalité")}', definition:'{escape_js_quote("Principe selon lequel tous les individus possèdent les mêmes droits.")}', example:'{escape_js_quote("Lutter pour l'égalité des chances reste un combat quotidien.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Unité</div>
<div class="vocab-def">Rassemblement solidaire au-delà des particularités individuelles.</div>
<div class="vocab-example">L'unité de la population fait la force de la nation face aux crises.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Division / Fragment</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Unité")}', definition:'{escape_js_quote("Rassemblement solidaire au-delà des particularités individuelles.")}', example:'{escape_js_quote("L'unité de la population fait la force de la nation face aux crises.")}'}}, this)">+ Dictionary</button>
</div>
</div>"""

COULEUR_DISC_INNER = """<div class="round-1" style="margin-bottom: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
<div class="round-item"><div class="round-item-main">Dans 'Couleur', Zazie scande : « Je suis noire, blanche, de l'ébène et dans mon cœur pour que toutes les <strong>couleurs</strong> brillent encore ». En quoi la musique permet-elle de célébrer la <strong>diversité</strong> humaine ?</div>
<div class="round-item-personal">★ Quelle chanson ou quel artiste incarne le mieux pour vous la célébration de la <strong>diversité</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main">Zazie évoque la violence née du rejet de l'autre et des <strong>préjugés</strong> raciaux. Comment l'éducation peut-elle démanteler un <strong>préjugé</strong> ancré dès le plus jeune âge ?</div>
<div class="round-item-personal">★ Avez-vous déjà dû remettre en question l'un de vos propres <strong>préjugés</strong> après une rencontre enrichissante ?</div>
</div>
<div class="round-item"><div class="round-item-main">En chantant « la musique adoucit les mœurs », Zazie affirme le pouvoir consolateur de l'art face aux divisions. Pourquoi l'art réunit-il les hommes autour d'une même <strong>harmonie</strong> ?</div>
<div class="round-item-personal">★ Dans quel lieu ou événement culturel ressentez-vous une véritable <strong>harmonie</strong> collective ?</div>
</div>
<div class="round-item"><div class="round-item-main">La chanson rend hommage à des figures comme George Floyd ou Breonna Taylor. Comment la mémoire collective entretient-elle la lutte pour l'<strong>égalité</strong> et la <strong>justice</strong> ?</div>
<div class="round-item-personal">★ Quel combat social pour l'<strong>égalité</strong> vous touche le plus particulièrement aujourd'hui ?</div>
</div>
<div class="round-item"><div class="round-item-main">Zazie rappelle que sous nos peaux et nos différences d'apparence, notre ADN est identique. Pourquoi est-il essentiel de cultiver la <strong>fraternité</strong> pour bâtir l'<strong>unité</strong> ?</div>
<div class="round-item-personal">★ Quel geste quotidien simple exprime selon vous la vraie <strong>fraternité</strong> envers ses voisins ?</div>
</div>
</div>
<div class="round-2" style="margin-top: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
<div class="round-item"><div class="round-item-main">La <strong>diversité</strong> des origines et des cultures au sein d'une société est une source constante de richesse et de renouvellement, et non de division. Débattons-en.</div>
</div>
<div class="round-item"><div class="round-item-main">La promotion active de la <strong>tolérance</strong> et du <strong>mélange</strong> culturel par la création artistique est plus efficace que les lois punitives pour faire reculer le racisme. Qu'en pensez-vous ?</div>
</div>
<div class="round-item"><div class="round-item-main">Chaque individu devrait être libre de définir sa propre <strong>identité</strong> sans être enfermé dans des catégories de <strong>couleur</strong> ou d'origine. Partagez votre avis.</div>
</div>
</div>"""


# ------------------------------------------------------------------------------
# 3. SPEED (Theme: L'éveil de l'énergie vitale & Le courage de réaimer)
# ------------------------------------------------------------------------------
SPEED_THEME_TITLE = "❤️ Thème: L'éveil de l'énergie vitale & Le courage de réaimer"
SPEED_THEME_BOX = """<div class="theme-box" style="background: var(--cream); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; border: 1px dashed var(--border);">
<h3 style="margin-top:0; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Thème: L'éveil de l'énergie vitale &amp; Le courage de réaimer</h3>
<p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--ink-soft);">Nous allons discuter de:</p>
<ul style="margin:0; padding-left:1.2rem; font-size:0.9rem; color:var(--ink-soft);">
<li>Battement du cœur &amp; Vitalité</li>
<li>Élan passionné &amp; Renaissance</li>
<li>Audace &amp; Dépassement de la crainte</li>
<li>Réflexion personnelle</li>
</ul>
</div>"""

SPEED_VOCAB_INNER = f"""<div class="vocab-grid-10">
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Concepts clés &amp; Émotions</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Battement</div>
<div class="vocab-def">Pulsation du cœur marquant le rythme de la vie et l'intensité émotionnelle.</div>
<div class="vocab-example">Dans 'Speed', Zazie ordonne à son cœur d'accélérer ses battements.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Arrêt / Silence</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Battement")}', definition:'{escape_js_quote("Pulsation du cœur marquant le rythme de la vie et l'intensité émotionnelle.")}', example:'{escape_js_quote("Dans 'Speed', Zazie ordonne à son cœur d'accélérer ses battements.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Élan</div>
<div class="vocab-def">Mouvement enthousiaste de l'esprit se projetant avec passion.</div>
<div class="vocab-example">Retrouver un élan de création redonne du sens aux jours sombres.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Inertie / Fratras</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Élan")}', definition:'{escape_js_quote("Mouvement enthousiaste de l'esprit se projetant avec passion.")}', example:'{escape_js_quote("Retrouver un élan de création redonne du sens aux jours sombres.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Vitalité</div>
<div class="vocab-def">Force d'énergie et de dynamisme qui anime une personne vivante.</div>
<div class="vocab-example">Sa vitalité contagieuse réveille l'enthousiasme du groupe.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Léthargie / Épuisement</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Vitalité")}', definition:'{escape_js_quote("Force d'énergie et de dynamisme qui anime une personne vivante.")}', example:'{escape_js_quote("Sa vitalité contagieuse réveille l'enthousiasme du groupe.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Renaissance</div>
<div class="vocab-def">Nouveau départ intérieur après une période de doute ou de peine.</div>
<div class="vocab-example">Chaque printemps symbolise la renaissance de la nature et de l'espoir.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Déclin / Extinction</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Renaissance")}', definition:'{escape_js_quote("Nouveau départ intérieur après une période de doute ou de peine.")}', example:'{escape_js_quote("Chaque printemps symbolise la renaissance de la nature et de l'espoir.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Crainte</div>
<div class="vocab-def">Appréhension ou peur de souffrir à nouveau en s'ouvrant aux autres.</div>
<div class="vocab-example">Surmonter la crainte de l'échec est la première étape du succès.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Confiance / Assurance</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Crainte")}', definition:'{escape_js_quote("Appréhension ou peur de souffrir à nouveau en s'ouvrant aux autres.")}', example:'{escape_js_quote("Surmonter la crainte de l'échec est la première étape du succès.")}'}}, this)">+ Dictionary</button>
</div>
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">🗣️ Vie, Actions &amp; Connexion</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Rythme</div>
<div class="vocab-def">Cadence accélérée ou régulière qui cadence nos actions et émotions.</div>
<div class="vocab-example">La musique impose son rythme trépidant à la piste de danse.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Stagnation</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Rythme")}', definition:'{escape_js_quote("Cadence accélérée ou régulière qui cadence nos actions et émotions.")}', example:'{escape_js_quote("La musique impose son rythme trépidant à la piste de danse.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Audace</div>
<div class="vocab-def">Courage d'agir avec bravoure malgré les risques de blessure amoureuse.</div>
<div class="vocab-example">L'audace de faire le premier pas transforme souvent une vie.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Timidité / Prudence</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Audace")}', definition:'{escape_js_quote("Courage d'agir avec bravoure malgré les risques de blessure amoureuse.")}', example:'{escape_js_quote("L'audace de faire le premier pas transforme souvent une vie.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Impulsion</div>
<div class="vocab-def">Force soudaine qui pousse à agir de manière instinctive et spontanée.</div>
<div class="vocab-example">Suivre une impulsion généreuse apporte des moments inoubliables.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Calcul / Hésitation</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Impulsion")}', definition:'{escape_js_quote("Force soudaine qui pousse à agir de manière instinctive et spontanée.")}', example:'{escape_js_quote("Suivre une impulsion généreuse apporte des moments inoubliables.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Mouvement</div>
<div class="vocab-def">Changement d'état ou action de quitter la passivité de la solitude.</div>
<div class="vocab-example">Se mettre en mouvement permet de chasser les idées noires.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Immobilité</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Mouvement")}', definition:'{escape_js_quote("Changement d'état ou action de quitter la passivité de la solitude.")}', example:'{escape_js_quote("Se mettre en mouvement permet de chasser les idées noires.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Espoir</div>
<div class="vocab-def">Confiance confiante dans la possibilité d'un avenir plus lumineux.</div>
<div class="vocab-example">Garder l'espoir permet d'affronter les moments de doute.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Désespoir / Résignation</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Espoir")}', definition:'{escape_js_quote("Confiance confiante dans la possibilité d'un avenir plus lumineux.")}', example:'{escape_js_quote("Garder l'espoir permet d'affronter les moments de doute.")}'}}, this)">+ Dictionary</button>
</div>
</div>"""

SPEED_DISC_INNER = """<div class="round-1" style="margin-bottom: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
<div class="round-item"><div class="round-item-main">Dans 'Speed', Zazie ordonne à son propre cœur d'accélérer ses <strong>battements</strong>. Pourquoi avons-nous parfois besoin de nous faire violence pour retrouver la <strong>vitalité</strong> ?</div>
<div class="round-item-personal">★ Quel signal vous indique qu'il est temps d'insuffler un nouvel <strong>élan</strong> dans votre quotidien ?</div>
</div>
<div class="round-item"><div class="round-item-main">Zazie chante « Réveille-toi, fais pas le mort, l'univers ne s'arrête pas parce qu'on n'a plus voulu de toi ». Comment surmonter la déception amoureuse pour entamer sa <strong>renaissance</strong> ?</div>
<div class="round-item-personal">★ Qu'est-ce qui vous aide le plus à sortir de votre « cage » après une période d'isolement ?</div>
</div>
<div class="round-item"><div class="round-item-main">La chanson nous pousse à braver la <strong>crainte</strong> du rejet pour réapprendre à aimer et vibrer. Pourquoi s'ouvrir aux autres demande-t-il autant d'<strong>audace</strong> ?</div>
<div class="round-item-personal">★ Vous considérez-vous plutôt prudent ou prêt à suivre une <strong>impulsion</strong> passionnée ?</div>
</div>
<div class="round-item"><div class="round-item-main">Zazie répète « Et tu speed encore, oui tu speed encore ». En quoi la musique dynamique réactive-t-elle le <strong>rythme</strong> de nos émotions et le <strong>mouvement</strong> de la vie ?</div>
<div class="round-item-personal">★ Quelle activité ou musique vous redonne immédiatement de l'énergie et de l'<strong>espoir</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main">Sortir de sa zone de confort exige de briser les habitudes de protection qu'on a construites. En quoi le vrai courage consiste-t-il à accepter la vulnérabilité ?</div>
<div class="round-item-personal">★ Quand avez-vous fait preuve d'<strong>audace</strong> pour la dernière fois dans votre vie personnelle ?</div>
</div>
</div>
<div class="round-2" style="margin-top: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
<div class="round-item"><div class="round-item-main">Retrouver la <strong>vitalité</strong> après une crise personnelle dépend uniquement de sa propre volonté d'action et non du soutien extérieur. Débattons-en.</div>
</div>
<div class="round-item"><div class="round-item-main">Écouter son <strong>impulsion</strong> et prendre des risques passionnés apporte plus de bonheur à long terme que de vivre dans la prudence et la <strong>crainte</strong>. Qu'en pensez-vous ?</div>
</div>
<div class="round-item"><div class="round-item-main">Il est indispensable d'accepter des périodes de repli et d'immobilité pour préparer une véritable <strong>renaissance</strong> émotionnelle. Partagez votre avis.</div>
</div>
</div>"""


# ------------------------------------------------------------------------------
# 4. JE SUIS UN HOMME (Theme: La surconsommation, La nature & L'illusion du progrès)
# ------------------------------------------------------------------------------
JE_SUIS_UN_HOMME_THEME_TITLE = "❤️ Thème: La surconsommation, La nature & L'illusion du progrès"
JE_SUIS_UN_HOMME_THEME_BOX = """<div class="theme-box" style="background: var(--cream); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem; border: 1px dashed var(--border);">
<h3 style="margin-top:0; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Thème: La surconsommation, La nature &amp; L'illusion du progrès</h3>
<p style="margin-bottom:0.5rem; font-size:0.9rem; color:var(--ink-soft);">Nous allons discuter de:</p>
<ul style="margin:0; padding-left:1.2rem; font-size:0.9rem; color:var(--ink-soft);">
<li>Consommation &amp; Domination humaine</li>
<li>Illusion du progrès &amp; Destruction</li>
<li>Vanité &amp; Conscience écologique</li>
<li>Réflexion personnelle</li>
</ul>
</div>"""

JE_SUIS_UN_HOMME_VOCAB_INNER = f"""<div class="vocab-grid-10">
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Concepts clés &amp; Émotions</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Consommation</div>
<div class="vocab-def">Action d'acheter et d'accumuler des biens matériels sans limites.</div>
<div class="vocab-example">Dans 'Je suis un homme', Zazie critique la surconsommation moderne.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Sobriété / Modération</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Consommation")}', definition:'{escape_js_quote("Action d'acheter et d'accumuler des biens matériels sans limites.")}', example:'{escape_js_quote("Dans 'Je suis un homme', Zazie critique la surconsommation moderne.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Illusion</div>
<div class="vocab-def">Fausse croyance selon laquelle le confort matériel apporte le bonheur.</div>
<div class="vocab-example">Se croire maître de la nature n'est qu'une dangereuse illusion.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Réalité / Vérité</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Illusion")}', definition:'{escape_js_quote("Fausse croyance selon laquelle le confort matériel apporte le bonheur.")}', example:'{escape_js_quote("Se croire maître de la nature n'est qu'une dangereuse illusion.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Domination</div>
<div class="vocab-def">Volonté de contrôler la planète et les ressources naturelles par la force.</div>
<div class="vocab-example">La volonté de domination de l'humain menace les écosystèmes.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Harmonie / Respect</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Domination")}', definition:'{escape_js_quote("Volonté de contrôler la planète et les ressources naturelles par la force.")}', example:'{escape_js_quote("La volonté de domination de l'humain menace les écosystèmes.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Destruction</div>
<div class="vocab-def">Action d'endommager les écosystèmes par l'industrialisation excessive.</div>
<div class="vocab-example">La destruction des forêts naturelles met en péril la biodiversité.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Préservation / Protection</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Destruction")}', definition:'{escape_js_quote("Action d'endommager les écosystèmes par l'industrialisation excessive.")}', example:'{escape_js_quote("La destruction des forêts naturelles met en péril la biodiversité.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Saturation</div>
<div class="vocab-def">État d'accumulation extrême de déchets et d'objets superflus.</div>
<div class="vocab-example">La saturation plastique des océans exige une réaction immédiate.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Équilibre / Pureté</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Saturation")}', definition:'{escape_js_quote("État d'accumulation extrême de déchets et d'objets superflus.")}', example:'{escape_js_quote("La saturation plastique des océans exige une réaction immédiate.")}'}}, this)">+ Dictionary</button>
</div>
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">🗣️ Vie, Actions &amp; Connexion</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Possession</div>
<div class="vocab-def">Attachement obsédant à la propriété matérielle et aux richesses.</div>
<div class="vocab-example">La quête permanente de possession épuise nos ressources.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Partage / Détachement</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Possession")}', definition:'{escape_js_quote("Attachement obsédant à la propriété matérielle et aux richesses.")}', example:'{escape_js_quote("La quête permanente de possession épuise nos ressources.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Engrenage</div>
<div class="vocab-def">Enchaînement inéluctable d'actions menant à une crise écologique.</div>
<div class="vocab-example">Stopper cet engrenage destructeur demande un changement de modèle.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Libération / Rupture</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Engrenage")}', definition:'{escape_js_quote("Enchaînement inéluctable d'actions menant à une crise écologique.")}', example:'{escape_js_quote("Stopper cet engrenage destructeur demande un changement de modèle.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Vanité</div>
<div class="vocab-def">Caractère futil et illusoire de l'orgueil humain face à la Terre.</div>
<div class="vocab-example">La vanité de nos constructions en béton apparaît lors des tempêtes.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Humilité / Sagesse</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Vanité")}', definition:'{escape_js_quote("Caractère futil et illusoire de l'orgueil humain face à la Terre.")}', example:'{escape_js_quote("La vanité de nos constructions en béton apparaît lors des tempêtes.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Conscience</div>
<div class="vocab-def">Prise de lucidité sur l'impact de nos actes sur la planète.</div>
<div class="vocab-example">Éveiller sa conscience écologique est indispensable pour l'avenir.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Inconscience / Déni</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Conscience")}', definition:'{escape_js_quote("Prise de lucidité sur l'impact de nos actes sur la planète.")}', example:'{escape_js_quote("Éveiller sa conscience écologique est indispensable pour l'avenir.")}'}}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">Prédateur</div>
<div class="vocab-def">Être vivant qui exploite les autres espèces sans souci de renouvellement.</div>
<div class="vocab-example">L'homme s'est comporté en prédateur suprême au détriment de la faune.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">Protecteur / Gardien</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({{word:'{escape_js_quote("Prédateur")}', definition:'{escape_js_quote("Être vivant qui exploite les autres espèces sans souci de renouvellement.")}', example:'{escape_js_quote("L'homme s'est comporté en prédateur suprême au détriment de la faune.")}'}}, this)">+ Dictionary</button>
</div>
</div>"""

JE_SUIS_UN_HOMME_DISC_INNER = """<div class="round-1" style="margin-bottom: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
<div class="round-item"><div class="round-item-main">Dans 'Je suis un homme', Zazie dresse le portrait de l'être humain comme un <strong>prédateur</strong> au sommet de la chaîne alimentaire. Pourquoi l'obsession de <strong>domination</strong> menace-t-elle notre propre survie ?</div>
<div class="round-item-personal">★ Quelles habitudes de <strong>consommation</strong> seriez-vous prêt à modifier pour réduire votre empreinte écologique ?</div>
</div>
<div class="round-item"><div class="round-item-main">Zazie souligne la <strong>vanité</strong> de nos créations en béton face à la force de la planète. Pourquoi gardons-nous l'<strong>illusion</strong> que le progrès technologique résoudra tous nos problèmes ?</div>
<div class="round-item-personal">★ Pensez-vous que l'accumulation de biens matériels apporte une vraie satisfaction ou une simple <strong>illusion</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main">La chanson dénonce un <strong>engrenage</strong> où l'humain « tourne en rond » en achetant toujours plus. Comment sortir de cette dynamique de <strong>destruction</strong> des ressources naturelles ?</div>
<div class="round-item-personal">★ Parvenez-vous à résister aux tentations de la publicité et de la surconsommation ?</div>
</div>
<div class="round-item"><div class="round-item-main">Zazie chante « Je suis le roi des cons » pour exprimer le décalage entre nos prétentions et l'état de la Terre. Quelle prise de <strong>conscience</strong> collective est nécessaire pour protéger la nature ?</div>
<div class="round-item-personal">★ Quel geste écoresponsable tentez-vous d'inciter auprès de votre entourage ?</div>
</div>
<div class="round-item"><div class="round-item-main">Face à la <strong>saturation</strong> des déchets et à la pollution globale, la recherche du profit à tout prix paraît absurde. Comment rééquilibrer la relation entre l'homme et la planète ?</div>
<div class="round-item-personal">★ Prégérez-vous investir dans des expériences mémorables ou dans la <strong>possession</strong> d'objets récents ?</div>
</div>
</div>
<div class="round-2" style="margin-top: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
<div class="round-item"><div class="round-item-main">La surconsommation et la recherche constante de confort matériel sont incompatibles avec la préservation de la nature. Débattons-en.</div>
</div>
<div class="round-item"><div class="round-item-main">L'être humain se comporte naturellement en <strong>prédateur</strong> et ne modifiera ses comportements qu'en cas de crise écologique majeure. Qu'en pensez-vous ?</div>
</div>
<div class="round-item"><div class="round-item-main">La véritable prise de <strong>conscience</strong> doit passer par la sobriété volontaire et le refus de la <strong>possession</strong> superflue. Partagez votre avis.</div>
</div>
</div>"""


# ==============================================================================
# HELPER FUNCTIONS TO REPLACE BLOCK CONTENTS
# ==============================================================================

def replace_block_body(content, block_id, new_inner_html):
    start_tag = f'id="{block_id}"'
    start_idx = content.find(start_tag)
    if start_idx == -1:
        print(f"Warning: Block ID '{block_id}' not found.")
        return content

    body_tag_pattern = r'<div class="round-body"[^>]*>'
    match = re.search(body_tag_pattern, content[start_idx:])
    if not match:
        print(f"Warning: round-body not found for block '{block_id}'.")
        return content

    body_start_rel = match.end()
    content_start_idx = start_idx + body_start_rel

    next_block_patterns = [
        r'<div class="round-block',
        r'<div class="mistake-block',
        r'<section',
        r'</main',
        r'</vim-choice-option-content>',
        r'<div class="sources-section'
    ]

    end_search_idx = len(content)
    for pat in next_block_patterns:
        m_next = re.search(pat, content[content_start_idx:])
        if m_next:
            pos = content_start_idx + m_next.start()
            if pos < end_search_idx:
                end_search_idx = pos

    body_end_idx = content.rfind('</div>', content_start_idx, end_search_idx)
    if body_end_idx == -1:
        print(f"Warning: Could not find closing </div> for round-body in block '{block_id}'.")
        return content

    updated = content[:content_start_idx] + '\n' + new_inner_html + '\n' + content[body_end_idx:]
    return updated


def replace_theme_box(tab_content, new_theme_box_html):
    """Replaces <div class="theme-box" ...> ... </div> inside a tab option."""
    box_start = tab_content.find('<div class="theme-box"')
    if box_start == -1:
        return tab_content
    box_end = tab_content.find('</div>\n</div>', box_start)
    if box_end == -1:
        box_end = tab_content.find('</div>', box_start + 20)
    # find the end of theme-box
    box_end = tab_content.find('</div>', box_start) + 6
    return tab_content[:box_start] + new_theme_box_html + tab_content[box_end:]


def main():
    print("--- UPDATING ZAZIE CHALLENGE CONTENT ---")

    # 1. READ INDEX.HTML
    with open(INDEX_FILE, 'r', encoding='utf-8') as f:
        index_html = f.read()

    # Replace theme-box & vocabulary/discussion in index_html
    parts = index_html.split('<vim-choice-option>')
    if len(parts) == 5:
        # Tab 1: nos âmes sont
        p1 = re.sub(r'<div class="theme-box"[\s\S]*?</div>', NOS_AMES_THEME_BOX, parts[1], count=1)

        # Tab 2: Couleur
        p2 = re.sub(r'<div class="theme-box"[\s\S]*?</div>', COULEUR_THEME_BOX, parts[2], count=1)

        # Tab 3: Speed
        p3 = re.sub(r'<div class="theme-box"[\s\S]*?</div>', SPEED_THEME_BOX, parts[3], count=1)

        # Tab 4: Je suis un homme
        p4 = re.sub(r'<div class="theme-box"[\s\S]*?</div>', JE_SUIS_UN_HOMME_THEME_BOX, parts[4], count=1)

        parts[1], parts[2], parts[3], parts[4] = p1, p2, p3, p4
        index_html = '<vim-choice-option>'.join(parts)

    # Now replace vocab & discussion blocks in index_html by exact ID:
    # nos-ames-sont
    index_html = replace_block_body(index_html, "vocabulary-nos-ames-sont", NOS_AMES_VOCAB_INNER)
    index_html = replace_block_body(index_html, "discussion-nos-ames-sont", NOS_AMES_DISC_INNER)

    # couleur
    index_html = replace_block_body(index_html, "vocabulary-couleur", COULEUR_VOCAB_INNER)
    index_html = replace_block_body(index_html, "discussion-couleur", COULEUR_DISC_INNER)

    # speed
    index_html = replace_block_body(index_html, "vocabulary-speed", SPEED_VOCAB_INNER)
    index_html = replace_block_body(index_html, "discussion-speed", SPEED_DISC_INNER)

    # je-suis-un-homme
    index_html = replace_block_body(index_html, "vocabulary-je-suis-un-homme", JE_SUIS_UN_HOMME_VOCAB_INNER)
    index_html = replace_block_body(index_html, "discussion-je-suis-un-homme", JE_SUIS_UN_HOMME_DISC_INNER)

    with open(INDEX_FILE, 'w', encoding='utf-8') as f:
        f.write(index_html)
    print("Successfully updated index.html!")

    # 2. UPDATE STANDALONE FILES
    standalone_map = [
        (NOS_AMES_FILE, NOS_AMES_THEME_BOX, NOS_AMES_VOCAB_INNER, NOS_AMES_DISC_INNER),
        (COULEUR_FILE, COULEUR_THEME_BOX, COULEUR_VOCAB_INNER, COULEUR_DISC_INNER),
        (SPEED_FILE, SPEED_THEME_BOX, SPEED_VOCAB_INNER, SPEED_DISC_INNER),
        (JE_SUIS_UN_HOMME_FILE, JE_SUIS_UN_HOMME_THEME_BOX, JE_SUIS_UN_HOMME_VOCAB_INNER, JE_SUIS_UN_HOMME_DISC_INNER)
    ]

    for filepath, theme_box, vocab_inner, disc_inner in standalone_map:
        with open(filepath, 'r', encoding='utf-8') as f:
            html = f.read()

        html = re.sub(r'<div class="theme-box"[\s\S]*?</div>', theme_box, html, count=1)
        html = replace_block_body(html, "vocabulary", vocab_inner)
        html = replace_block_body(html, "discussion", disc_inner)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Successfully updated standalone file {os.path.basename(filepath)}!")

if __name__ == '__main__':
    main()

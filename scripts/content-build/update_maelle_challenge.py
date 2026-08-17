import os

BASE_DIR = "apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/fr/maelle-challenge"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")
SONG1_FILE = os.path.join(BASE_DIR, "toutes-les-machines-ont-le-coeur.html")
SONG2_FILE = os.path.join(BASE_DIR, "je-taime-comme-je-taime.html")
SONG3_FILE = os.path.join(BASE_DIR, "flash.html")

# Discussion Round 1 & Round 2 for Song 1 ("Toutes les machines ont le cœur")
SONG1_DISC_INNER = """<div class="round-1" style="margin-bottom: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
<div class="round-item"><div class="round-item-main">Dans la chanson, Maëlle répète que « toutes les machines ont un cœur dedans ». En quoi cette personnification des écrans reflète-t-elle notre dépendance affective à <strong>La machine</strong> ?</div>
<div class="round-item-personal">★ À quelle fréquence ressentez-vous le besoin de poser votre téléphone pour vous éloigner de <strong>La machine</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main">Maëlle évoque des enfants qui ont des « doigts Messenger » et dessinent <strong>Le cœur</strong> sur leur écran. Pourquoi l'amour virtuel exprimé par des emojis semble-t-il parfois incomplet ?</div>
<div class="round-item-personal">★ Avez-vous déjà envoyé un symbole de <strong>Le cœur</strong> sur votre téléphone pour remplacer une vraie conversation en face-à-face ?</div>
</div>
<div class="round-item"><div class="round-item-main">Les paroles décrivent le bruit permanent des notifications et des écrans portables qui envahissent notre quotidien. Comment préserver la tranquillité de <strong>L'âme</strong> dans cet environnement numérique hyperactif ?</div>
<div class="round-item-personal">★ Quel endroit ou quelle activité calme vous permet de vous ressourcer et de nourrir <strong>L'âme</strong> loin des appareils ?</div>
</div>
<div class="round-item"><div class="round-item-main">Maëlle chante qu'on cherche à se protéger derrière nos écrans tout en voyant que « le monde est fragile ». Pourquoi l'exposition permanente sur Internet augmente-t-elle le risque de <strong>La blessure</strong> émotionnelle ?</div>
<div class="round-item-personal">★ Avez-vous déjà vécu une situation où une remarque en ligne a causé une véritable <strong>La blessure</strong> d'amour-propre ?</div>
</div>
<div class="round-item"><div class="round-item-main">En disant « le monde est portable, je suis tout juste capable de le voir en grand », la chanteuse navigue entre <strong>L'espoir ≠ Le désespoir</strong>. Comment garder une attitude positive face aux nouvelles négatives diffusées en continu ?</div>
<div class="round-item-personal">★ Qu'est-ce qui vous redonne instantanément de <strong>L'espoir ≠ Le désespoir</strong> quand la réalité numérique devient étouffante ?</div>
</div>
<div class="round-item"><div class="round-item-main">Dans le troisième couplet, une voix maternelle demande : « Sais-tu le temps que tu perds ? ». Pourquoi l'utilisation quotidienne des téléphones suscite-t-elle souvent du <strong>Le regret</strong> le soir venu ?</div>
<div class="round-item-personal">★ Avez-vous déjà ressenti du <strong>Le regret</strong> après avoir passé plusieurs heures inutiles à faire défiler des vidéos ?</div>
</div>
<div class="round-item"><div class="round-item-main">La chanteuse affirme avoir « mille idées au bout des doigts, des étincelles et des îles ». En quoi la création numérique peut-elle nourrir un véritable <strong>Le rêve</strong> d'avenir ?</div>
<div class="round-item-personal">★ Quel projet ou <strong>Le rêve</strong> personnel aimeriez-vous concrétiser en utilisant les technologies de manière créative ?</div>
</div>
<div class="round-item"><div class="round-item-main">Dans le pont, Maëlle répète « c'est moi le moteur, t'entends ? » pour reprendre le contrôle de sa vie. En quoi la prise de conscience de son autonomie aide-t-elle à <strong>Guérir</strong> de la dépendance aux notifications ?</div>
<div class="round-item-personal">★ Quelle habitude simple vous a aidé à <strong>Guérir</strong> votre besoin de vérifier constamment vos messages ?</div>
</div>
<div class="round-item"><div class="round-item-main">La chanson décrit une génération qui communique par des smileys en couleur plutôt que par des regards. Pourquoi est-il parfois difficile de <strong>Sentir</strong> l'empathie d'un ami à travers un simple texte ?</div>
<div class="round-item-personal">★ Préférez-vous téléphoner ou rencontrer une personne pour mieux <strong>Sentir</strong> ses émotions réelles ?</div>
</div>
<div class="round-item"><div class="round-item-main">Entre les likes, les leurres et la quête de visibilité en ligne, où se situe la frontière entre la vie privée et <strong>Le secret ≠ La transparence</strong> ?</div>
<div class="round-item-personal">★ Gardez-vous un jardin secret ou préférez-vous la totale <strong>Le secret ≠ La transparence</strong> sur ce que vous publiez sur Internet ?</div>
</div>
</div>
<div class="round-2" style="margin-top: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
<div class="round-item"><div class="round-item-main">Passer plusieurs heures par jour sur un smartphone détruit nos relations humaines réelles et nous empêche d'écouter notre <strong>Le cœur</strong>. Débattons-en.</div>
</div>
<div class="round-item"><div class="round-item-main">Les réseaux sociaux et les téléphones intelligents apportent plus de créativité et de liberté d'expression que du <strong>Le regret</strong> ou de l'isolement. Qu'en pensez-vous ?</div>
</div>
<div class="round-item"><div class="round-item-main">Pour préserver son équilibre mental et <strong>Guérir</strong> de l'anxiété numérique, chaque personne devrait s'imposer une journée de déconnexion totale par semaine. Partagez votre avis.</div>
</div>
</div>"""

# Discussion Round 1 & Round 2 for Song 2 ("je t'aime comme je t'aime")
SONG2_DISC_INNER = """<div class="round-1" style="margin-bottom: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
<div class="round-item"><div class="round-item-main">Maëlle chante « Je t'aime comme je t'aime, quel que soit le sang qui coule dans tes veines ». En quoi cet engagement familial dépasse-t-il les conflits ordinaires et <strong>L'amour ≠ La haine</strong> ?</div>
<div class="round-item-personal">★ Comment exprimez-vous <strong>L'amour ≠ La haine</strong> inconditionnel envers un frère, une sœur ou un ami très proche ?</div>
</div>
<div class="round-item"><div class="round-item-main">La chanson montre une sœur qui dit « je sais tes peurs, j'essuie tes larmes » avec une immense affection. En quoi <strong>La tendresse</strong> fraternelle apporte-t-elle un soutien irremplaçable lors des moments difficiles ?</div>
<div class="round-item-personal">★ Quel geste de <strong>La tendresse</strong> vous apporte le plus de réconfort lorsque vous êtes attristé ?</div>
</div>
<div class="round-item"><div class="round-item-main">Le premier couplet indique que « chacun de tes silences est comme une évidence qui colore ». Pourquoi la compréhension mutuelle s'épanouit-elle mieux dans <strong>Le silence ≠ Le bruit</strong> partagé que dans les longs discours ?</div>
<div class="round-item-personal">★ Êtes-vous à l'aise pour partager un moment de <strong>Le silence ≠ Le bruit</strong> complet avec un membre de votre famille ?</div>
</div>
<div class="round-item"><div class="round-item-main">Face aux épreuves de la vie, la voix de Maëlle agit comme un havre de paix où <strong>Le doute</strong> s'efface devant la certitude d'être soutenu. Comment surmonter l'incertitude grâce à ses proches ?</div>
<div class="round-item-personal">★ Vers qui vous tournez-vous en priorité lorsque <strong>Le doute</strong> s'installe dans vos choix personnels ?</div>
</div>
<div class="round-item"><div class="round-item-main">Les paroles affirment « C'est pour toujours toi et moi, c'est un miroir qui ne ment pas ». Pourquoi <strong>La fidélité</strong> fraternelle résiste-t-elle au temps et à la distance géographique ?</div>
<div class="round-item-personal">★ Quelle expérience a renforcé votre conviction quant à <strong>La fidélité</strong> irréprochable d'un proche ?</div>
</div>
<div class="round-item"><div class="round-item-main">Maëlle décrit des confidences intimes à l'abri du regard des autres, préférant <strong>Chuchoter</strong> ses inquiétudes que de les crier au monde. Pourquoi certaines vérités nécessitent-elles la douceur de la confidence ?</div>
<div class="round-item-personal">★ Avez-vous un souvenir d'enfance où l'on venait vous <strong>Chuchoter</strong> des mots d'encouragement ?</div>
</div>
<div class="round-item"><div class="round-item-main">Le deuxième couplet mentionne que « chacune de mes blessures, toi tu la prends ». Pourquoi le fait de <strong>Partager</strong> ses fardeaux avec son frère ou sa sœur rend-il les épreuves plus légères ?</div>
<div class="round-item-personal">★ Trouvez-vous naturel de <strong>Partager</strong> vos peines intimes avec votre entourage familial ?</div>
</div>
<div class="round-item"><div class="round-item-main">Construire une relation fraternelle solide exige de la compréhension et <strong>La patience</strong> face aux erreurs de l'autre. Comment pardonner les défauts de ceux qu'on aime ?</div>
<div class="round-item-personal">★ Dans quelle situation avez-vous dû faire preuve d'une grande <strong>La patience</strong> envers un proche ?</div>
</div>
<div class="round-item"><div class="round-item-main">Qu'il s'agisse d'un baiser sur la joue ou d'une embrassade réconfortante, ce geste scelle l'affection entre deux personnes. Quel rôle joue <strong>Le baiser</strong> amical ou familial dans les retrouvailles ?</div>
<div class="round-item-personal">★ Accordez-vous une valeur particulière au rituel du <strong>Le baiser</strong> de félicitation ou d'au revoir ?</div>
</div>
<div class="round-item"><div class="round-item-main">En déclarant « Tu es mon frère, tu es mon âme, tu es ma terre », la chanteuse célèbre un attachement indestructible. Comment définir la force de ce <strong>Le lien</strong> unique ?</div>
<div class="round-item-personal">★ Quel rituel ou souvenir commun entretient le plus sûrement <strong>Le lien</strong> privilégié qui vous unit à un membre de votre famille ?</div>
</div>
</div>
<div class="round-2" style="margin-top: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
<div class="round-item"><div class="round-item-main">L'amour familial et fraternel montré dans la chanson est plus résistant face aux épreuves de la vie que l'amour passionnel amoureux. Débattons-en.</div>
</div>
<div class="round-item"><div class="round-item-main">Pour maintenir un vrai <strong>Le lien</strong> de confiance avec ses proches, il faut savoir tout se dire sans jamais rien cacher. Qu'en pensez-vous ?</div>
</div>
<div class="round-item"><div class="round-item-main">La véritable <strong>La fidélité</strong> ne consiste pas à éviter les disputes, mais à continuer d'épauler l'autre quelle que soit la gravité de ses erreurs. Partagez votre avis.</div>
</div>
</div>"""

# Vocab Grid for Song 3 ("Flash")
SONG3_VOCAB_INNER = """<div class="vocab-grid-10">
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">❤️ Concepts clés &amp; Émotions</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">souvenirs</div>
<div class="vocab-def">Images et impressions du passé conservées dans la mémoire.</div>
<div class="vocab-example">Les précieux souvenirs d'enfance illuminent souvent les jours sombres.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">oubli</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'souvenirs', definition:'Images et impressions du passé conservées dans la mémoire.', example:'Les précieux souvenirs d\\'enfance illuminent souvent les jours sombres.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">sirènes</div>
<div class="vocab-def">Avertisseurs sonores de la ville ou voix troublantes du passé.</div>
<div class="vocab-example">Résister aux chants des sirènes de la facilité demande une grande discipline.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">silence</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'sirènes', definition:'Avertisseurs sonores de la ville ou voix troublantes du passé.', example:'Résister aux chants des sirènes de la facilité demande une grande discipline.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">vagues</div>
<div class="vocab-def">Ondulations de la mer ou mouvements d'émotion imprévisibles.</div>
<div class="vocab-example">Les vagues de nostalgie vont et viennent au gré des chansons d'autrefois.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">calme</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'vagues', definition:'Ondulations de la mer ou mouvements d\\'émotion imprévisibles.', example:'Les vagues de nostalgie vont et viennent au gré des chansons d\\'autrefois.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">désabonné</div>
<div class="vocab-def">Personne qui a rompu le contact ou interrompu un suivi.</div>
<div class="vocab-example">Se déclarer désabonné de la négativité ambiante permet de préserver sa paix.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">suivi</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'désabonné', definition:'Personne qui a rompu le contact ou interrompu un suivi.', example:'Se déclarer désabonné de la négativité ambiante permet de préserver sa paix.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">regrets</div>
<div class="vocab-def">Nostalgie ou chagrin causé par ce qui a disparu ou ce qui aurait pu être.</div>
<div class="vocab-example">Vivre sans regrets exige d'agir toujours en accord avec ses valeurs.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">satisfaction</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'regrets', definition:'Nostalgie ou chagrin causé par ce qui a disparu ou ce qui aurait pu être.', example:'Vivre sans regrets exige d\\'agir toujours en accord avec ses valeurs.'}, this)">+ Dictionary</button>
</div>
<h3 style="grid-column: 1 / -1; margin-top: 1rem; margin-bottom: 0.5rem; font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo);">🗣️ Vie, Actions &amp; Connexion</h3>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">flashs</div>
<div class="vocab-def">Souvenirs soudains et involontaires qui repassent à l'esprit.</div>
<div class="vocab-example">Ces flashs du passé surviennent souvent sans prévenir au détour d'une rue.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">oubli</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'flashs', definition:'Souvenirs soudains et involontaires qui repassent à l\\'esprit.', example:'Ces flashs du passé surviennent souvent sans prévenir au détour d\\'une rue.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">espace</div>
<div class="vocab-def">Place mentale ou liberté d'esprit disponible pour penser à autre chose.</div>
<div class="vocab-example">Retrouver de l'espace mental est essentiel après une rupture douloureuse.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">saturation</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'espace', definition:'Place mentale ou liberté d\\'esprit disponible pour penser à autre chose.', example:'Retrouver de l\\'espace mental est essentiel après une rupture douloureuse.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">blessures</div>
<div class="vocab-def">Peines de cœur et marques morales laissées par une séparation.</div>
<div class="vocab-example">Elle sourit doucement pour masquer ses blessures intérieures.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">guérison</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'blessures', definition:'Peines de cœur et marques morales laissées par une séparation.', example:'Elle sourit doucement pour masquer ses blessures intérieures.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">éclat</div>
<div class="vocab-def">Lumière vive ou intensité chaleureuse qui s'est éteinte avec le temps.</div>
<div class="vocab-example">Ce soleil sans éclat reflète la tristesse des jours de nostalgie.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">rayonnement</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'éclat', definition:'Lumière vive ou intensité chaleureuse qui s\\'est éteinte avec le temps.', example:'Ce soleil sans éclat reflète la tristesse des jours de nostalgie.'}, this)">+ Dictionary</button>
</div>
<div class="vocab-card"><div class="vocab-word" style="font-size: 1.1rem; font-weight: bold; color: var(--indigo); margin-bottom: 0.25rem;">masquer</div>
<div class="vocab-def">Cacher ses vraies émotions sous une apparence calme ou un sourire.</div>
<div class="vocab-example">Masquer sa peine demande parfois une grande énergie au quotidien.</div>
<div class="vocab-opposite" style="margin-top: 6px; font-size: 0.8rem; color: var(--muted); border-top: 1px dashed var(--border); padding-top: 4px;"><strong>Contraire :</strong> <span class="vocab-opp-word" style="font-weight: 600;">révéler</span></div>
<button class="btn-add-dict" onclick="COSY.addToDict({word:'masquer', definition:'Cacher ses vraies émotions sous une apparence calme ou un sourire.', example:'Masquer sa peine demande parfois une grande énergie au quotidien.'}, this)">+ Dictionary</button>
</div>
</div>"""

# Discussion Round 1 & Round 2 for Song 3 ("Flash")
SONG3_DISC_INNER = """<div class="round-1" style="margin-bottom: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🔵 Round 1 — Lyric Analysis &amp; Discussion</h3>
<div class="round-item"><div class="round-item-main">Dans la chanson, Maëlle répète que ses <strong>souvenirs</strong> sont toujours là au fond d'elle. Comment de simples détails du quotidien déclenchent-ils soudainement des images d'une personne disparue ?</div>
<div class="round-item-personal">★ Quel objet ou quelle chanson d'autrefois fait ressurgir instantanément des <strong>souvenirs</strong> précis chez vous ?</div>
</div>
<div class="round-item"><div class="round-item-main">La chanteuse entend « comme des <strong>sirènes</strong> qui se battent entre elles » au milieu du bruit de la ville. En quoi le tumulte urbain accentue-t-il le sentiment de solitude après une séparation ?</div>
<div class="round-item-personal">★ Quand la ville devient trop bruyante, recherchez-vous le calme pour échapper au bruit des <strong>sirènes</strong> ?</div>
</div>
<div class="round-item"><div class="round-item-main">Maëlle décrit « le bruit des <strong>vagues</strong> qui m'emporte et me revient ». Pourquoi la nostalgie amoureuse ressemble-t-elle au mouvement incessant de la mer ?</div>
<div class="round-item-personal">★ Avez-vous déjà éprouvé cette sensation où les émotions arrivent par <strong>vagues</strong> sans que vous puissiez les contrôler ?</div>
</div>
<div class="round-item"><div class="round-item-main">Les paroles constatent tristement « j'voulais juste lui parler, mais on s'est <strong>désabonné</strong> ». Comment la rupture sur les réseaux sociaux symbolise-t-elle la fin brutale d'une intimité ?</div>
<div class="round-item-personal">★ Pensez-vous que se déclarer <strong>désabonné</strong> de la vie d'un ex-partenaire est indispensable pour tourner la page ?</div>
</div>
<div class="round-item"><div class="round-item-main">Le texte évoque la nuit où l'on retrouve « ses secrets noyés au milieu des <strong>regrets</strong> ». Pourquoi les heures nocturnes favorisent-elles les ruminations sur le passé ?</div>
<div class="round-item-personal">★ Comment faites-vous pour chasser les <strong>regrets</strong> lorsque des pensées mélancoliques vous empêchent de dormir ?</div>
</div>
<div class="round-item"><div class="round-item-main">Le refrain scande « t'es toujours dans mes <strong>flashs</strong>, comme si j'n'avais plus d'espace ». Pourquoi est-il si difficile de stopper ces images involontaires d'une ancienne relation ?</div>
<div class="round-item-personal">★ Avez-vous déjà eu l'impression que votre esprit manquait d'espace à cause de <strong>flashs</strong> récurrents du passé ?</div>
</div>
<div class="round-item"><div class="round-item-main">En chantant qu'elle n'a « plus d'<strong>espace</strong> », Maëlle exprime la saturation mentale causée par le souvenir de l'autre. Comment réussir à libérer sa pensée pour réapprendre à vivre au présent ?</div>
<div class="round-item-personal">★ Que faites-vous pour retrouver de l'<strong>espace</strong> mental quand une préoccupation passée devient trop envahissante ?</div>
</div>
<div class="round-item"><div class="round-item-main">La chanteuse confie : « je souris pour <strong>masquer</strong> mes <strong>blessures</strong>, jamais surprise, souvent déçue ». Pourquoi montre-t-on parfois un visage serein alors qu'on souffre intérieurement ?</div>
<div class="round-item-personal">★ Est-il préférable selon vous d'exprimer ouvertement ses <strong>blessures</strong> ou de garder une attitude réservée devant ses collègues ?</div>
</div>
<div class="round-item"><div class="round-item-main">Maëlle contemple un « soleil sans <strong>éclat</strong> qui me parle tout bas ». En quoi la perte d'un amour transforme-t-elle la perception du monde extérieur en le rendant terne et froid ?</div>
<div class="round-item-personal">★ Avez-vous déjà remarqué que votre humeur mélancolique peut enlever tout <strong>éclat</strong> à une belle journée d'été ?</div>
</div>
<div class="round-item"><div class="round-item-main">Le texte illustre le comportement qui consiste à <strong>masquer</strong> sa peine derrière un sourire de façade. Quel effort cela demande-t-il au quotidien ?</div>
<div class="round-item-personal">★ Vous arrive-t-il de <strong>masquer</strong> votre fatigue ou votre tristesse pour protéger votre entourage de votre désarroi ?</div>
</div>
</div>
<div class="round-2" style="margin-top: 2rem;">
<h3 style="font-family:'Playfair Display', serif; font-size:1.1rem; color:var(--indigo); margin-bottom: 1rem;">🟢 Round 2 — Broad Themes &amp; Philosophy Debate</h3>
<div class="round-item"><div class="round-item-main">Les souvenirs involontaires et les <strong>flashs</strong> du passé prouvent que l'on ne peut jamais vraiment oublier une personne qu'on a profondément aimée. Débattons-en.</div>
</div>
<div class="round-item"><div class="round-item-main">Pour guérir d'un chagrin d'amour, il faut couper tous les ponts numériques et se déclarer totalement <strong>désabonné</strong> de la vie de l'autre. Qu'en pensez-vous ?</div>
</div>
<div class="round-item"><div class="round-item-main"><strong>Masquer</strong> ses sentiments nostalgiques sous un sourire est une marque de retenue élégante plutôt qu'un manque de sincérité. Partagez votre avis.</div>
</div>
</div>"""

def replace_block_content(file_path, block_id, new_inner_html):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find <div ... id="block_id">
    start_tag = f'id="{block_id}"'
    start_idx = content.find(start_tag)
    if start_idx == -1:
        print(f"Block {block_id} not found in {file_path}")
        return

    # Find the <div class="round-body" ...> inside this block
    body_tag = '<div class="round-body" style="display:block; padding-top: 1.5rem;">'
    body_idx = content.find(body_tag, start_idx)
    if body_idx == -1:
        print(f"round-body tag not found in {block_id} in {file_path}")
        return

    content_start_idx = body_idx + len(body_tag)

    # Find the closing </div> of round-body
    # round-body ends before the next stage/block or section end.
    # Specifically, look for the next <div class="round-block" or <div class="mistake-block" or <section or </main
    next_tags = ['<div class="round-block', '<div class="mistake-block', '<section', '</main', '<div class="sources-section']
    end_idx = len(content)
    for nt in next_tags:
        pos = content.find(nt, content_start_idx)
        if pos != -1 and pos < end_idx:
            end_idx = pos

    # The </div> closing round-body is just before end_idx (skip closing tags/newlines)
    # Let's locate the </div>\n</div> or similar before end_idx
    body_end_idx = content.rfind('</div>', content_start_idx, end_idx)
    body_end_idx = content.rfind('</div>', content_start_idx, body_end_idx)

    # Replace content between content_start_idx and body_end_idx
    new_content = content[:content_start_idx] + '\n' + new_inner_html + '\n' + content[body_end_idx:]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {block_id} in {file_path}")

# Update index.html
replace_block_content(INDEX_FILE, "discussion-toutes-les-machines-ont-le-coeur", SONG1_DISC_INNER)
replace_block_content(INDEX_FILE, "discussion-je-taime-comme-je-taime", SONG2_DISC_INNER)
replace_block_content(INDEX_FILE, "vocabulary-flash", SONG3_VOCAB_INNER)
replace_block_content(INDEX_FILE, "discussion-flash", SONG3_DISC_INNER)

# Update standalone files
replace_block_content(SONG1_FILE, "discussion", SONG1_DISC_INNER)
replace_block_content(SONG2_FILE, "discussion", SONG2_DISC_INNER)
replace_block_content(SONG3_FILE, "vocabulary", SONG3_VOCAB_INNER)
replace_block_content(SONG3_FILE, "discussion", SONG3_DISC_INNER)

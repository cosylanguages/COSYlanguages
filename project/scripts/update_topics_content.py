import os
import glob
import html

# Re-author B1, B2, C1, C2 topic data with rich authentic French content
b1_c2_detailed_data = {
    'b1': [
        {
            'slug': 'donner-et-justifier-son-opinion',
            'system_num': '1', 'title': 'Donner et justifier son opinion en détail', 'eyebrow': 'Actes de parole B1',
            'summary': 'Exprimer un point de vue nuancé et l\'étayer avec des exemples concrets et des connecteurs logiques.',
            'question': 'Comment défendre sa position dans une discussion amicale ou professionnelle ?',
            'why': 'Au niveau B1, savoir expliquer le "pourquoi" de son opinion est indispensable pour participer aux débats.',
            'outcome': 'Vous maîtrisez "À mon sens...", "Ce que je veux dire par là...", "Par exemple..." et l\'enchaînement logique.',
            'chips': [
                ('block-start', 'En ce qui me concerne... / À mon avis...'),
                ('block-continue', 'Je pense que... parce que...'),
                ('block-continue', 'Ce que je veux dire par là, c\'est que...'),
                ('block-continue', 'Par exemple, récemment...'),
                ('block-react', 'Je comprends tout à fait ton point de vue.'),
                ('block-close', 'C\'est pour ça que je soutiens cette idée.')
            ],
            'map': [
                '<b>Prise de position :</b> "À mon sens, le télétravail hybride est la meilleure solution."',
                '<b>Explication :</b> "Ce que je veux dire par là, c\'est que ça allie concentration à la maison et cohésion d\'équipe."',
                '<b>Exemple :</b> "Par exemple, dans mon entreprise, on vient deux jours par semaine."',
                '<b>Synthèse :</b> "C\'est pour ça que je trouve cet équilibre idéal."'
            ],
            'notice_title': 'Nuancer sa prise de parole',
            'notice_text': 'Plutôt que "C\'est comme ça !", privilégiez "D\'après mon expérience..." ou "Il me semble que...". Cela montre une ouverture d\'esprit.',
            'mindset_title': 'L\'art de la justification en français',
            'mindset_text': 'En France, une opinion sans exemple paraît théorique. Illustrez toujours votre propos avec une anecdote ou un fait.',
            'stiff': '"Mon opinion irréfutable est que cette mesure est adéquate."',
            'natural': '"Franchement, à mon avis, c\'est une excellente idée parce que ça simplifie tout."',
            'memory': 'Structure opinion : <i>Position ➔ "Ce que je veux dire..." ➔ Exemple ➔ Bilan !</i>',
            'dialogue': [
                ('A', 'Qu\'est-ce que tu penses des transports gratuits en ville ?'),
                ('B', 'À mon sens, c\'est une très bonne chose. Ça incite les gens à laisser leur voiture.'),
                ('A', 'Tu n\'as pas peur que ça coûte trop cher à la municipalité ?'),
                ('B', 'Si, mais d\'un autre côté, ça réduit la pollution. C\'est pour ça que je suis pour.')
            ],
            'connect_grammar_txt': 'Subjonctif vs Indicatif (Je pense que / Je ne pense pas que)', 'connect_vocab_txt': 'Opinion, Arguments & Connecteurs',
            'next_slug': 'exprimer-un-desaccord-poliment', 'next_title': 'Système 2 · Exprimer un désaccord poliment',
            'prev_slug': '', 'prev_title': '',
            'checklist': [
                'Exprimer son avis avec "À mon sens..." ou "D\'après moi..."',
                'Expliquer sa pensée avec "Ce que je veux dire par là, c\'est..."',
                'Illustrer son opinion avec un exemple concret'
            ],
            'celebration': 'Vous exprimez et défendez vos opinions avec clarté et conviction !',
            'quiz': [
                {
                    'q': 'Quelle formule permet de préciser le fond de sa pensée ?',
                    'opts': ['Ce que je veux dire par là, c\'est que...', 'Écoutez sans parler.', 'C\'est écrit comme ça.'], 'correct': 0,
                    'explain': '"Ce que je veux dire par là, c\'est..." introduit l\'explication approfondie.'
                },
                {
                    'q': 'Pourquoi est-il important de donner un exemple en français ?',
                    'opts': ['Pour gagner du temps.', 'Pour ancrer son opinion dans le réel.', 'Pour faire une leçon de grammaire.'], 'correct': 1,
                    'explain': 'L\'exemple concrétise l\'argument et convainc l\'interlocuteur.'
                }
            ]
        },
        {
            'slug': 'exprimer-un-desaccord-poliment',
            'system_num': '2', 'title': 'Exprimer un désaccord politiquement correct', 'eyebrow': 'Actes de parole B1',
            'summary': 'Contredire sans blesser, utiliser la concession et proposer un point de vue alternatif.',
            'question': 'Comment marquer votre désaccord de façon très diplomatique ?',
            'why': 'En milieu B1 professionnel ou amical, savoir désamorcer la confrontation tout en maintenant sa position est crucial.',
            'outcome': 'Vous maîtrisez "Je ne suis pas tout à fait d\'accord", "Permettez-moi de nuancer", "On pourrait aussi envisager...".',
            'chips': [
                ('block-start', 'Je comprends votre idée, mais...'),
                ('block-continue', 'Permettez-moi de nuancer ce point.'),
                ('block-continue', 'Je ne suis pas tout à fait de votre avis.'),
                ('block-ask', 'Est-ce qu\'on ne risque pas de... ?'),
                ('block-react', 'C\'est vrai, mais il y a un autre aspect à prendre en compte.'),
                ('block-close', 'L\'essentiel est de trouver un terrain d\'entente.')
            ],
            'map': [
                '<b>Ecoute active :</b> "Je comprends tout à fait ce que vous dites."',
                '<b>Nuance amicale :</b> "Cependant, permettez-moi de nuancer un peu."',
                '<b>Objection :</b> "Si on choisit cette option, on risque de dépasser le budget."',
                '<b>Ouverture :</b> "C\'est pourquoi je suggère qu\'on examine une autre piste."'
            ],
            'notice_title': 'L\'adoucissement du désaccord',
            'notice_text': 'N\'utilisez jamais "C\'est faux !". Dites "Je serais un peu plus réservé(e) sur ce point" ou "Je ne partage pas tout à fait cette analyse".',
            'mindset_title': 'Le respect de la parole de l\'autre',
            'mindset_text': 'Commencez toujours par valider une partie de la déclaration adverse ("C\'est un argument intéressant...") avant d\'apporter votre nuance.',
            'stiff': '"Votre raisonnement est erroné et je le rejette."',
            'natural': '"Je vois ce que vous voulez dire, mais je ne suis pas tout à fait d\'accord avec cette conclusion."',
            'memory': 'Formule désaccord : <i>Validation ("C\'est vrai...") ➔ Atténuation ("Mais...") ➔ Alternative !</i>',
            'dialogue': [
                ('A', 'Il faudrait annuler tous les déplacements professionnels et ne faire que de la visioconférence.'),
                ('B', 'Je comprends la logique budgétaire. Cependant, rien ne remplace le contact humain pour signer un contrat.'),
                ('A', 'C\'est vrai que le présentiel crée de la confiance.'),
                ('B', 'Exactement ! On pourrait réserver le présentiel uniquement aux réunions stratégiques.')
            ],
            'connect_grammar_txt': 'Les propositions concessives (Bien que, Même si, Cependant)', 'connect_vocab_txt': 'Débat, Diplomatie & Négociation',
            'next_slug': 'negocier-un-compromis', 'next_title': 'Système 3 · Négocier un compromis',
            'prev_slug': 'donner-et-justifier-son-opinion', 'prev_title': 'Système 1 · Donner et justifier son opinion',
            'checklist': [
                'Commencer par valider partiellement le point de vue de l\'autre',
                'Exprimer sa réserve avec "Permettez-moi de nuancer..."',
                'Proposer une perspective alternative poliment'
            ],
            'celebration': 'Vous gérez les désaccords avec une diplomatie remarquable !',
            'quiz': [
                {
                    'q': 'Quelle formule permet d\'apporter une réserve de manière très professionnelle ?',
                    'opts': ['Permettez-moi de nuancer ce point.', 'Vous n\'y connaissez rien.', 'C\'est absurde.'], 'correct': 0,
                    'explain': '"Permettez-moi de nuancer..." est une formule diplomatique d\'une grande élégance.'
                },
                {
                    'q': 'Quelle est la première étape pour exprimer un désaccord constructif ?',
                    'opts': ['Relever les erreurs.', 'Montrer qu\'on a compris la position adverse.', 'Hausser le ton.'], 'correct': 1,
                    'explain': 'Reconnaître l\'argument adverse installe un climat de respect mutuel.'
                }
            ]
        }
    ]
}

print('Detailed B1 data prepared.')

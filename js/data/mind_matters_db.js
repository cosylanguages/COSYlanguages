/**
 * js/data/mind_matters_db.js
 * Centralized topic-centric database for Mind Matters Speaking Club.
 * Decouples Psychological Topics and Lenses metadata from presentation templates.
 */

(function() {
    'use strict';

    window.COSY_MIND_MATTERS_DB = {
        "addicted-to-drama": {
            "title": "Are You Addicted to Drama?",
            "theme": "Everyday conflict attraction as an unconscious emotional baseline.",
            "lenses": ["Identity & Self-Perception", "Relational Dynamics", "Emotions & Affective States"],
            "languages": ["en"],
            "levels": ["B1"],
            "duration": "60 min"
        },
        "anticipatory-grief": {
            "title": "Anticipatory Grief — Mourning the Living",
            "theme": "Emotional shielding and the rehearsal of loss before separation.",
            "lenses": ["Emotions & Affective States", "Stress, Fear & Uncertainty", "Meaning & Existential Reflection"],
            "languages": ["en", "fr"],
            "levels": ["B2", "C1"],
            "duration": "60 min"
        },
        "aspiration-vs-inspiration": {
            "title": "Aspiration vs. Inspiration — The Fuel of the Mind",
            "theme": "Future-focused ambition vs. spontaneous creative drive and productivity anxiety.",
            "lenses": ["Motivation & Drive", "Stress, Fear & Uncertainty", "Identity & Self-Perception"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "benjamin-franklin-effect": {
            "title": "The Benjamin Franklin Effect",
            "theme": "How doing favors triggers cognitive dissonance resolution to build relationships.",
            "lenses": ["Relational Dynamics", "Cognitive Heuristics & Laws", "Social Psychology & Public Manipulation"],
            "languages": ["en"],
            "levels": ["B1"],
            "duration": "60 min"
        },
        "blue-eyes-brown-eyes-experiment": {
            "title": "Jane Elliott's 'Blue Eyes - Brown Eyes' Experiment",
            "theme": "A study of ingroup favoritism, learned prejudice, and social conformity.",
            "lenses": ["Social Psychology & Public Manipulation", "Relational Dynamics", "Identity & Self-Perception"],
            "languages": ["en"],
            "levels": ["C1"],
            "duration": "60 min"
        },
        "bluewashing": {
            "title": "Bluewashing",
            "theme": "Corporate humanitarian signaling as a PR shield.",
            "lenses": ["Social Psychology & Public Manipulation", "Technology & Subconscious Priming"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "bounded-rationality": {
            "title": "Bounded Rationality",
            "theme": "Cognitive limits, heuristics, and satisficing in daily decision-making.",
            "lenses": ["Cognitive Heuristics & Laws", "Identity & Self-Perception"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "brain-discipline-dopamine": {
            "title": "How to Trick Your Brain Into Liking Discipline",
            "theme": "Managing dopamine baselines and reward loops to enjoy routine discomfort.",
            "lenses": ["Habits, Loops & Neurobiology", "Motivation & Drive", "Identity & Self-Perception"],
            "languages": ["en"],
            "levels": ["C1"],
            "duration": "60 min"
        },
        "brainwashing": {
            "title": "Brainwashing",
            "theme": "Thought reform, coercive persuasion, and structural identity dismantling.",
            "lenses": ["Social Psychology & Public Manipulation", "Stress, Fear & Uncertainty"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "broken-children-grown-bodies": {
            "title": "Broken Children — Grown Adult Bodies",
            "theme": "Persistent childhood coping adaptations in adult behavioral patterns.",
            "lenses": ["Identity & Self-Perception", "Relational Dynamics", "Emotions & Affective States"],
            "languages": ["en", "fr"],
            "levels": ["B2", "C1"],
            "duration": "60 min"
        },
        "conversations-avoid-enjoy": {
            "title": "The Conversations People Avoid",
            "theme": "Vulnerability integration, active listening, and relational boundaries.",
            "lenses": ["Communication & Expression", "Relational Dynamics", "Emotions & Affective States"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "depersonalization": {
            "title": "Depersonalization — Dissociation as Shield",
            "theme": "Anxiety-induced dissociation and somatic mindfulness anchoring tools.",
            "lenses": ["Stress, Fear & Uncertainty", "Identity & Self-Perception", "Emotions & Affective States"],
            "languages": ["en", "fr"],
            "levels": ["B2", "C1"],
            "duration": "60 min"
        },
        "expert-defend-language-mistakes": {
            "title": "Why Experts Defend Language Mistakes",
            "theme": "Overcoming linguistic perfectionism, social anxiety, and speaking filters.",
            "lenses": ["Communication & Expression", "Stress, Fear & Uncertainty", "Identity & Self-Perception"],
            "languages": ["en", "ru"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "fear-of-love-control": {
            "title": "The Fear of Love — Attachment & Autonomy",
            "theme": "Avoidant attachment structures and the fear of losing personal autonomy.",
            "lenses": ["Relational Dynamics", "Stress, Fear & Uncertainty", "Identity & Self-Perception"],
            "languages": ["en", "fr"],
            "levels": ["B2", "C1"],
            "duration": "60 min"
        },
        "finding-the-right-person": {
            "title": "Finding the Right Person — Romantic Projection",
            "theme": "Romantic expectations, partner projection, and integrating human vulnerabilities.",
            "lenses": ["Relational Dynamics", "Identity & Self-Perception", "Emotions & Affective States"],
            "languages": ["en", "fr"],
            "levels": ["B2", "C1"],
            "duration": "60 min"
        },
        "gilberts-law": {
            "title": "Gilbert's Law — Autonomy in Problem Solving",
            "theme": "Deconstructing autonomy and responsibility in professional life.",
            "lenses": ["Cognitive Heuristics & Laws", "Motivation & Drive"],
            "languages": ["en", "fr"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "guilt-moving-abroad": {
            "title": "The Guilt of Moving Abroad",
            "theme": "Immigrant guilt, homesickness, and relational dissonance in new environments.",
            "lenses": ["Emotions & Affective States", "Stress, Fear & Uncertainty", "Identity & Self-Perception"],
            "languages": ["en"],
            "levels": ["B1", "C2"],
            "duration": "60 min"
        },
        "how-to-love-your-work": {
            "title": "How to Love Your Work",
            "theme": "Fostering intrinsic career motivation and autonomy over simple task alignment.",
            "lenses": ["Motivation & Drive", "Identity & Self-Perception"],
            "languages": ["en"],
            "levels": ["B1"],
            "duration": "60 min"
        },
        "impersonation": {
            "title": "Impersonation & Digital Identity",
            "theme": "Celebrity verification bias, online trust, and cyber-social security.",
            "lenses": ["Technology & Subconscious Priming", "Social Psychology & Public Manipulation"],
            "languages": ["en", "fr"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "kidlins-law": {
            "title": "Kidlin's Law — Clear Problem Formulation",
            "theme": "How specifying the exact problem acts as the first structural step to the solution.",
            "lenses": ["Cognitive Heuristics & Laws", "Identity & Self-Perception"],
            "languages": ["en", "fr"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "law-of-attraction": {
            "title": "Law of Attraction — Magic vs. Control",
            "theme": "Critiquing magical thinking, confirmation bias, and the psychological quest for safety.",
            "lenses": ["Cognitive Heuristics & Laws", "Stress, Fear & Uncertainty"],
            "languages": ["en", "fr"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "limerence": {
            "title": "Limerence — Dopamine & Obsession",
            "theme": "Intrusive romantic fantasy loops and compulsive projection behaviors.",
            "lenses": ["Relational Dynamics", "Emotions & Affective States", "Habits, Loops & Neurobiology"],
            "languages": ["en", "fr"],
            "levels": ["B2", "C1"],
            "duration": "60 min"
        },
        "maze-of-biases": {
            "title": "The Maze of Biases",
            "theme": "Analyzing confirmation bias, the availability heuristic, and subjective logic traps.",
            "lenses": ["Cognitive Heuristics & Laws", "Identity & Self-Perception"],
            "languages": ["en"],
            "levels": ["C1"],
            "duration": "60 min"
        },
        "mind-great-literature": {
            "title": "Mind and Great Literature",
            "theme": "How reading fiction serves as a deep empathetic simulator of the human subconscious.",
            "lenses": ["Identity & Self-Perception", "Meaning & Existential Reflection", "Communication & Expression"],
            "languages": ["en"],
            "levels": ["C1"],
            "duration": "60 min"
        },
        "moving-new-city-true-self": {
            "title": "Moving and the True Self",
            "theme": "Analyzing the spatial reset and starting fresh in a new environment.",
            "lenses": ["Identity & Self-Perception", "Meaning & Existential Reflection"],
            "languages": ["en"],
            "levels": ["B1", "C1"],
            "duration": "60 min"
        },
        "murphys-law": {
            "title": "Murphy's Law — Expectation Heuristics",
            "theme": "Cognitive defense and preparing the brain for unexpected outcomes.",
            "lenses": ["Cognitive Heuristics & Laws", "Stress, Fear & Uncertainty"],
            "languages": ["en", "fr"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "nazi-race-propaganda": {
            "title": "Nazi Race Propaganda — Would you survive?",
            "theme": "Deconstructing empathy erosion, systematic othering, and cognitive conformity.",
            "lenses": ["Social Psychology & Public Manipulation", "Meaning & Existential Reflection"],
            "languages": ["en"],
            "levels": ["C1"],
            "duration": "60 min"
        },
        "pinkwashing": {
            "title": "Pinkwashing",
            "theme": "Dismantling corporate rainbow capitalism and public performative alignment.",
            "lenses": ["Social Psychology & Public Manipulation", "Technology & Subconscious Priming"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "power-of-habits": {
            "title": "The Power of Habits",
            "theme": "Redesigning cue, routine, and reward loops for stable psychological health.",
            "lenses": ["Habits, Loops & Neurobiology", "Motivation & Drive"],
            "languages": ["en"],
            "levels": ["B1"],
            "duration": "60 min"
        },
        "psychology-of-action-bias": {
            "title": "The Psychology of Action Bias",
            "theme": "Analyzing the illusion of control and the stress of necessary inaction.",
            "lenses": ["Cognitive Heuristics & Laws", "Stress, Fear & Uncertainty"],
            "languages": ["en"],
            "levels": ["B1"],
            "duration": "60 min"
        },
        "psychology-of-smiles": {
            "title": "The Psychology of Smiles",
            "theme": "Discerning authentic emotional expressions from compliant social masks.",
            "lenses": ["Communication & Expression", "Social Psychology & Public Manipulation"],
            "languages": ["en"],
            "levels": ["B1"],
            "duration": "60 min"
        },
        "purple-washing": {
            "title": "Purple Washing",
            "theme": "Corporate tokenism and performative gender alignment PR campaigns.",
            "lenses": ["Social Psychology & Public Manipulation", "Technology & Subconscious Priming"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "redwashing": {
            "title": "Redwashing",
            "theme": "Socialist claims as performative marketing shields.",
            "lenses": ["Social Psychology & Public Manipulation", "Technology & Subconscious Priming"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "science-of-sleep": {
            "title": "The Science of Sleep",
            "theme": "Prioritizing biological recovery and emotional regulation as essential care.",
            "lenses": ["Habits, Loops & Neurobiology", "Stress, Fear & Uncertainty"],
            "languages": ["en"],
            "levels": ["B1"],
            "duration": "60 min"
        },
        "simmel-objective-freedom": {
            "title": "Georg Simmel: Objective Freedom",
            "theme": "Urban sociology and individual agency within modern objective culture.",
            "lenses": ["Identity & Self-Perception", "Meaning & Existential Reflection"],
            "languages": ["en"],
            "levels": ["C1"],
            "duration": "60 min"
        },
        "sportswashing": {
            "title": "Sportswashing",
            "theme": "Deconstructing reputational laundering via massive athletic events.",
            "lenses": ["Social Psychology & Public Manipulation", "Technology & Subconscious Priming"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "the-bye-now-effect": {
            "title": "The Bye-Now Effect",
            "theme": "Homophones, semantic priming, and consumer behavioral economics.",
            "lenses": ["Technology & Subconscious Priming", "Cognitive Heuristics & Laws"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "whitewashing": {
            "title": "Whitewashing",
            "theme": "Concealing negative reputational history via strategic PR updates.",
            "lenses": ["Social Psychology & Public Manipulation", "Technology & Subconscious Priming"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "why-do-they-say-ai-is-inevitable": {
            "title": "Is AI Inevitable?",
            "theme": "Technological determinism, automation anxiety, and status quo bias.",
            "lenses": ["Technology & Subconscious Priming", "Stress, Fear & Uncertainty"],
            "languages": ["en"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "wilsons-law": {
            "title": "Wilson's Law — Knowledge Asset",
            "theme": "Prioritizing skill and information accumulation over financial output.",
            "lenses": ["Cognitive Heuristics & Laws", "Motivation & Drive"],
            "languages": ["en", "fr"],
            "levels": ["B1", "B2"],
            "duration": "60 min"
        },
        "syn-vlyubilsya-v-druga": {
            "title": "Family Acceptance & Unconditional Love",
            "theme": "Parental support and overcoming public social biases and expectations.",
            "lenses": ["Relational Dynamics", "Stress, Fear & Uncertainty", "Emotions & Affective States"],
            "languages": ["ru"],
            "levels": ["C1"],
            "duration": "60 min"
        }
    };
})();

(function() {
    const lang = "en";
    const data = [
    {
        "id": "en_proficiency_idioms_001",
        "word": "A penny for your thoughts",
        "form": "idiom",
        "definitions": [
            {
                "text": "Asking someone what they are pondering deeply",
                "examples": [
                    "You look quiet today; a penny for your thoughts?"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "reflection"
    },
    {
        "id": "en_proficiency_idioms_002",
        "word": "Baker's dozen",
        "form": "idiom",
        "definitions": [
            {
                "text": "Thirteen items counted as twelve",
                "examples": [
                    "The friendly baker included a baker's dozen of rolls."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "quantity"
    },
    {
        "id": "en_proficiency_idioms_003",
        "word": "Cut off one's nose to spite one's face",
        "form": "idiom",
        "definitions": [
            {
                "text": "Harm oneself while attempting to punish another",
                "examples": [
                    "Refusing to work hurts your own income; don't cut off your nose to spite your face."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "folly"
    },
    {
        "id": "en_proficiency_idioms_004",
        "word": "Don't look a gift horse in the mouth",
        "form": "idiom",
        "definitions": [
            {
                "text": "Do not find fault with something received as a gift",
                "examples": [
                    "It is a free ticket, so don't look a gift horse in the mouth."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "gratitude"
    },
    {
        "id": "en_proficiency_idioms_005",
        "word": "Drag someone over the coals",
        "form": "idiom",
        "definitions": [
            {
                "text": "Reprimand or scold someone severely for a fault",
                "examples": [
                    "The committee dragged the manager over the coals for budget overruns."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "reprimand"
    },
    {
        "id": "en_proficiency_idioms_006",
        "word": "Fly by the seat of one's pants",
        "form": "idiom",
        "definitions": [
            {
                "text": "Act spontaneously using instinct rather than a structured plan",
                "examples": [
                    "Without a strategy, the team was flying by the seat of their pants."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "spontaneity"
    },
    {
        "id": "en_proficiency_idioms_007",
        "word": "Have an axe to grind",
        "form": "idiom",
        "definitions": [
            {
                "text": "Possess a private, selfish motive or grievance to advance",
                "examples": [
                    "The biased reviewer clearly had an axe to grind against the director."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "motive"
    },
    {
        "id": "en_proficiency_idioms_008",
        "word": "In the lap of the gods",
        "form": "idiom",
        "definitions": [
            {
                "text": "Beyond human control and left entirely to fate",
                "examples": [
                    "We performed our best; now the verdict is in the lap of the gods."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "fate"
    },
    {
        "id": "en_proficiency_idioms_009",
        "word": "Keep one's powder dry",
        "form": "idiom",
        "definitions": [
            {
                "text": "Remain prepared for future action while maintaining composure",
                "examples": [
                    "Diplomats advised keeping our powder dry during initial negotiations."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "readiness"
    },
    {
        "id": "en_proficiency_idioms_010",
        "word": "Meet one's Waterloo",
        "form": "idiom",
        "definitions": [
            {
                "text": "Suffer a final, decisive, and humiliating defeat",
                "examples": [
                    "The invincible champion finally met his Waterloo in the finals."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "defeat"
    },
    {
        "id": "en_proficiency_idioms_011",
        "word": "Nip something in the bud",
        "form": "idiom",
        "definitions": [
            {
                "text": "Suppress or stop a problem at its earliest stage",
                "examples": [
                    "Prompt intervention nipped the unrest in the bud."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "prevention"
    },
    {
        "id": "en_proficiency_idioms_012",
        "word": "Put the cart before the horse",
        "form": "idiom",
        "definitions": [
            {
                "text": "Reverse the logical or natural order of doing things",
                "examples": [
                    "Buying furniture before finding an apartment is putting the cart before the horse."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "order"
    },
    {
        "id": "en_proficiency_idioms_013",
        "word": "Rest on one's laurels",
        "form": "idiom",
        "definitions": [
            {
                "text": "Become complacent due to past achievements",
                "examples": [
                    "Successful firms cannot afford to rest on their laurels."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "complacency"
    },
    {
        "id": "en_proficiency_idioms_014",
        "word": "Run the gauntlet",
        "form": "idiom",
        "definitions": [
            {
                "text": "Endure a series of severe criticisms, trials, or dangers",
                "examples": [
                    "The candidate had to run the gauntlet of hostile reporters."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "trials"
    },
    {
        "id": "en_proficiency_idioms_015",
        "word": "Salt of the earth",
        "form": "idiom",
        "definitions": [
            {
                "text": "A person of noble, reliable, and humble character",
                "examples": [
                    "Our rural neighbors are truly the salt of the earth."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "character"
    },
    {
        "id": "en_proficiency_idioms_016",
        "word": "Tread on thin ice",
        "form": "idiom",
        "definitions": [
            {
                "text": "Act in a risky manner that invites severe consequences",
                "examples": [
                    "Falsifying expenses is treading on very thin ice."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "risk"
    },
    {
        "id": "en_proficiency_idioms_017",
        "word": "Vanish into thin air",
        "form": "idiom",
        "definitions": [
            {
                "text": "Disappear completely without leaving any trace",
                "examples": [
                    "The mysterious suspect vanished into thin air."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "disappearance"
    },
    {
        "id": "en_proficiency_idioms_018",
        "word": "With a vengeance",
        "form": "idiom",
        "definitions": [
            {
                "text": "With great force, intensity, or thoroughness",
                "examples": [
                    "The winter storm returned with a vengeance on Monday."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "intensity"
    },
    {
        "id": "en_proficiency_idioms_019",
        "word": "Yellow streak",
        "form": "idiom",
        "definitions": [
            {
                "text": "A trait of cowardice in someone's character",
                "examples": [
                    "Under pressure, his yellow streak became apparent."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "cowardice"
    },
    {
        "id": "en_proficiency_idioms_020",
        "word": "Acid test",
        "form": "idiom",
        "definitions": [
            {
                "text": "A decisive test that proves the true quality of something",
                "examples": [
                    "The market crisis was the acid test for the new strategy."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "testing"
    },
    {
        "id": "en_proficiency_idioms_021",
        "word": "Albatross around one's neck",
        "form": "idiom",
        "definitions": [
            {
                "text": "A heavy burden or guilt that hinders someone constantly",
                "examples": [
                    "That failed loan became an albatross around his neck."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "burden"
    },
    {
        "id": "en_proficiency_idioms_022",
        "word": "All roads lead to Rome",
        "form": "idiom",
        "definitions": [
            {
                "text": "Different methods yield the exact same final result",
                "examples": [
                    "No matter which algorithm you choose, all roads lead to Rome."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "universality"
    },
    {
        "id": "en_proficiency_idioms_023",
        "word": "Step up your game",
        "form": "idiom",
        "definitions": [
            {
                "text": "Improve your performance or effort",
                "examples": [
                    "You need to step up your game for the finals."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "improvement"
    },
    {
        "id": "en_proficiency_idioms_024",
        "word": "Apples and oranges",
        "form": "idiom",
        "definitions": [
            {
                "text": "Two items so different that comparison is meaningless",
                "examples": [
                    "Comparing jazz and classical music is comparing apples and oranges."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "comparison"
    },
    {
        "id": "en_proficiency_idioms_025",
        "word": "Armageddon scenario",
        "form": "idiom",
        "definitions": [
            {
                "text": "A catastrophic final conflict or disaster",
                "examples": [
                    "Strategists planned for an armageddon scenario in energy supply."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "disaster"
    },
    {
        "id": "en_proficiency_idioms_026",
        "word": "At loggerheads",
        "form": "idiom",
        "definitions": [
            {
                "text": "In violent dispute or total disagreement",
                "examples": [
                    "Management and the union remained at loggerheads."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "stalemate"
    },
    {
        "id": "en_proficiency_idioms_027",
        "word": "At one's wits' end",
        "form": "idiom",
        "definitions": [
            {
                "text": "At the end of one's mental resources or patience",
                "examples": [
                    "I am at my wits' end trying to fix this code bug."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "despair"
    },
    {
        "id": "en_proficiency_idioms_028",
        "word": "Back to the wall",
        "form": "idiom",
        "definitions": [
            {
                "text": "In a desperate situation with few options",
                "examples": [
                    "With revenues falling, the company had its back to the wall."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "desperation"
    },
    {
        "id": "en_proficiency_idioms_029",
        "word": "Batten down the hatches",
        "form": "idiom",
        "definitions": [
            {
                "text": "Prepare thoroughly for an impending crisis or storm",
                "examples": [
                    "Financial institutions battened down the hatches before the recession."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "preparation"
    },
    {
        "id": "en_proficiency_idioms_030",
        "word": "Beat swords into ploughshares",
        "form": "idiom",
        "definitions": [
            {
                "text": "Turn weapons or military resources into peaceful uses",
                "examples": [
                    "Post-war nations worked to beat swords into ploughshares."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "peace"
    },
    {
        "id": "en_proficiency_idioms_031",
        "word": "Bee in one's bonnet",
        "form": "idiom",
        "definitions": [
            {
                "text": "An obsession with an idea that one talks about constantly",
                "examples": [
                    "He has a bee in his bonnet about organic farming."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "obsession"
    },
    {
        "id": "en_proficiency_idioms_032",
        "word": "Beggars can't be choosers",
        "form": "idiom",
        "definitions": [
            {
                "text": "People in need must accept whatever help is offered",
                "examples": [
                    "The shelter was basic, but beggars can't be choosers."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "necessity"
    },
    {
        "id": "en_proficiency_idioms_033",
        "word": "Behind the 8-ball",
        "form": "idiom",
        "definitions": [
            {
                "text": "In a difficult or disadvantaged position",
                "examples": [
                    "Missing the deadline put our research team behind the 8-ball."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "disadvantage"
    },
    {
        "id": "en_proficiency_idioms_034",
        "word": "Bells and whistles",
        "form": "idiom",
        "definitions": [
            {
                "text": "Non-essential attractive features added to a product",
                "examples": [
                    "The software package comes with all the bells and whistles."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "features"
    },
    {
        "id": "en_proficiency_idioms_035",
        "word": "Between Scylla and Charybdis",
        "form": "idiom",
        "definitions": [
            {
                "text": "Caught between two equally hazardous choices",
                "examples": [
                    "The minister was caught between Scylla and Charybdis."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "dilemma"
    },
    {
        "id": "en_proficiency_idioms_036",
        "word": "Blood is thicker than water",
        "form": "idiom",
        "definitions": [
            {
                "text": "Family ties are stronger than other relationships",
                "examples": [
                    "In times of crisis, blood is thicker than water."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "kinship"
    },
    {
        "id": "en_proficiency_idioms_037",
        "word": "Bolt from the blue",
        "form": "idiom",
        "definitions": [
            {
                "text": "A sudden, complete surprise or shock",
                "examples": [
                    "His resignation came as a bolt from the blue."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "surprise"
    },
    {
        "id": "en_proficiency_idioms_038",
        "word": "Break the mold",
        "form": "idiom",
        "definitions": [
            {
                "text": "Do something completely original and unprecedented",
                "examples": [
                    "Her innovative design broke the mold for electric vehicles."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "innovation"
    },
    {
        "id": "en_proficiency_idioms_039",
        "word": "Bury one's head in the sand",
        "form": "idiom",
        "definitions": [
            {
                "text": "Ignore unpleasant realities deliberately",
                "examples": [
                    "You cannot bury your head in the sand regarding debt."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "denial"
    },
    {
        "id": "en_proficiency_idioms_040",
        "word": "Burning question",
        "form": "idiom",
        "definitions": [
            {
                "text": "An urgent or crucial issue requiring an answer",
                "examples": [
                    "Climate policy remains the burning question of our era."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "urgency"
    },
    {
        "id": "en_proficiency_idioms_041",
        "word": "By hook or by crook",
        "form": "idiom",
        "definitions": [
            {
                "text": "By any means necessary, honest or dishonest",
                "examples": [
                    "They determined to win the tender by hook or by crook."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "determination"
    },
    {
        "id": "en_proficiency_idioms_042",
        "word": "Call the tune",
        "form": "idiom",
        "definitions": [
            {
                "text": "Control a situation or dictate decisions",
                "examples": [
                    "As the main investor, she calls the tune."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "control"
    },
    {
        "id": "en_proficiency_idioms_043",
        "word": "Can't see the forest for the trees",
        "form": "idiom",
        "definitions": [
            {
                "text": "Focus on details and miss the overall situation",
                "examples": [
                    "Obsessing over single words causes you to miss the forest for the trees."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "perspective"
    },
    {
        "id": "en_proficiency_idioms_044",
        "word": "Cast aspersions on",
        "form": "idiom",
        "definitions": [
            {
                "text": "Make damaging or derogatory remarks about someone's reputation",
                "examples": [
                    "Don't cast aspersions on an honest colleague's character."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "slander"
    },
    {
        "id": "en_proficiency_idioms_045",
        "word": "Cat among the pigeons",
        "form": "idiom",
        "definitions": [
            {
                "text": "A cause of fierce disturbance or controversy",
                "examples": [
                    "The leak released a cat among the pigeons in parliament."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "disruption"
    },
    {
        "id": "en_proficiency_idioms_046",
        "word": "Caught between a rock and a hard place",
        "form": "idiom",
        "definitions": [
            {
                "text": "Facing two equally undesirable choices",
                "examples": [
                    "Managers were caught between a rock and a hard place."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "dilemma"
    },
    {
        "id": "en_proficiency_idioms_047",
        "word": "Cheek by jowl",
        "form": "idiom",
        "definitions": [
            {
                "text": "Close together in crowded proximity",
                "examples": [
                    "Urban residents lived cheek by jowl in the old quarter."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "proximity"
    },
    {
        "id": "en_proficiency_idioms_048",
        "word": "Chew the scenery",
        "form": "idiom",
        "definitions": [
            {
                "text": "Act melodramatically or overact dramatically",
                "examples": [
                    "The lead actor chewed the scenery during the climax."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "drama"
    },
    {
        "id": "en_proficiency_idioms_049",
        "word": "Clear the decks",
        "form": "idiom",
        "definitions": [
            {
                "text": "Prepare for action by clearing away clutter or minor tasks",
                "examples": [
                    "Let us clear the decks before starting the major project."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "preparation"
    },
    {
        "id": "en_proficiency_idioms_050",
        "word": "Cloak and dagger",
        "form": "idiom",
        "definitions": [
            {
                "text": "Involving secrecy, espionage, or mystery",
                "examples": [
                    "The negotiation was conducted in a cloak and dagger fashion."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "secrecy"
    },
    {
        "id": "en_proficiency_idioms_051",
        "word": "Close the stable door after the horse has bolted",
        "form": "idiom",
        "definitions": [
            {
                "text": "Take precautions after damage is already done",
                "examples": [
                    "Adding security after the breach is closing the stable door after the horse bolted."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "futility"
    },
    {
        "id": "en_proficiency_idioms_052",
        "word": "Cog in the machine",
        "form": "idiom",
        "definitions": [
            {
                "text": "A small, minor part of a large complex organization",
                "examples": [
                    "He felt like an anonymous cog in the machine."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "insignificance"
    },
    {
        "id": "en_proficiency_idioms_053",
        "word": "Come home to roost",
        "form": "idiom",
        "definitions": [
            {
                "text": "Past errors or misdeeds return to cause unpleasant consequences",
                "examples": [
                    "His neglect of maintenance finally came home to roost."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "retribution"
    },
    {
        "id": "en_proficiency_idioms_054",
        "word": "Crocodile tears",
        "form": "idiom",
        "definitions": [
            {
                "text": "Insincere or false expressions of grief",
                "examples": [
                    "The rival expressed crocodile tears after her competitor retired."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "hypocrisy"
    },
    {
        "id": "en_proficiency_idioms_055",
        "word": "Cross the Rubicon",
        "form": "idiom",
        "definitions": [
            {
                "text": "Take an irrevocable step that commits one to a course",
                "examples": [
                    "By declaring independence, the region crossed the Rubicon."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "commitment"
    },
    {
        "id": "en_proficiency_idioms_056",
        "word": "Cry havoc",
        "form": "idiom",
        "definitions": [
            {
                "text": "Raise an alarm or unleash chaos",
                "examples": [
                    "The sudden announcement cried havoc in the stock market."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "alarm"
    },
    {
        "id": "en_proficiency_idioms_057",
        "word": "Curry favor",
        "form": "idiom",
        "definitions": [
            {
                "text": "Seek to gain advantage through flattery or servility",
                "examples": [
                    "He tried to curry favor with senior directors."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "flattery"
    },
    {
        "id": "en_proficiency_idioms_058",
        "word": "Cut one's coat according to one's cloth",
        "form": "idiom",
        "definitions": [
            {
                "text": "Live within one's means or resources",
                "examples": [
                    "We must cut our coat according to our cloth during lean years."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "prudence"
    },
    {
        "id": "en_proficiency_idioms_059",
        "word": "Damocles' sword",
        "form": "idiom",
        "definitions": [
            {
                "text": "A constant threat of impending danger",
                "examples": [
                    "Impending layoff rumors hung like Damocles' sword."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "threat"
    },
    {
        "id": "en_proficiency_idioms_060",
        "word": "Davy Jones' locker",
        "form": "idiom",
        "definitions": [
            {
                "text": "The bottom of the sea as a grave",
                "examples": [
                    "The sunken vessel lay deep in Davy Jones' locker."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "ocean"
    },
    {
        "id": "en_proficiency_idioms_061",
        "word": "Devil in the detail",
        "form": "idiom",
        "definitions": [
            {
                "text": "Hidden difficulties reside in small specifics",
                "examples": [
                    "The agreement sounds great, but the devil is in the detail."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "complexity"
    },
    {
        "id": "en_proficiency_idioms_062",
        "word": "Dodged a bullet",
        "form": "idiom",
        "definitions": [
            {
                "text": "Narrowly avoided a catastrophic failure or injury",
                "examples": [
                    "We dodged a bullet by cancelling that risky investment."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "relief"
    },
    {
        "id": "en_proficiency_idioms_063",
        "word": "Don't put the cart before the horse",
        "form": "idiom",
        "definitions": [
            {
                "text": "Do not do things in the wrong sequence",
                "examples": [
                    "Plan the architecture first; don't put the cart before the horse."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "order"
    },
    {
        "id": "en_proficiency_idioms_064",
        "word": "Double jeopardy",
        "form": "idiom",
        "definitions": [
            {
                "text": "Prosecuting someone twice for the same offense",
                "examples": [
                    "Constitutional law protects citizens from double jeopardy."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "justice"
    },
    {
        "id": "en_proficiency_idioms_065",
        "word": "Drawing a longbow",
        "form": "idiom",
        "definitions": [
            {
                "text": "Exaggerating or telling improbable stories",
                "examples": [
                    "His tales of hunting lions were clearly drawing a longbow."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "exaggeration"
    },
    {
        "id": "en_proficiency_idioms_066",
        "word": "Dry run",
        "form": "idiom",
        "definitions": [
            {
                "text": "A full rehearsal or trial performance",
                "examples": [
                    "We conducted a dry run of the presentation before the client arrived."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "rehearsal"
    },
    {
        "id": "en_proficiency_idioms_067",
        "word": "Ears are burning",
        "form": "idiom",
        "definitions": [
            {
                "text": "Feeling that people are talking about oneself elsewhere",
                "examples": [
                    "My ears were burning during your department meeting!"
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "gossip"
    },
    {
        "id": "en_proficiency_idioms_068",
        "word": "Win-win situation",
        "form": "idiom",
        "definitions": [
            {
                "text": "A result that benefits all parties involved",
                "examples": [
                    "The agreement was a win-win situation for both teams."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "success"
    },
    {
        "id": "en_proficiency_idioms_069",
        "word": "Elbow room",
        "form": "idiom",
        "definitions": [
            {
                "text": "Adequate space or freedom to act",
                "examples": [
                    "The new office provides plenty of elbow room for expansion."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "space"
    },
    {
        "id": "en_proficiency_idioms_070",
        "word": "Emperor's new clothes",
        "form": "idiom",
        "definitions": [
            {
                "text": "A situation where people pretend to admire something worthless out of fear",
                "examples": [
                    "Exposing the fraud proved the project was the emperor's new clothes."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "delusion"
    },
    {
        "id": "en_proficiency_idioms_071",
        "word": "Face that launched a thousand ships",
        "form": "idiom",
        "definitions": [
            {
                "text": "An exceptionally beautiful person or fateful trigger",
                "examples": [
                    "Her legendary beauty was the face that launched a thousand ships."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "legend"
    },
    {
        "id": "en_proficiency_idioms_072",
        "word": "Fall on one's sword",
        "form": "idiom",
        "definitions": [
            {
                "text": "Accept ultimate responsibility and resign or surrender",
                "examples": [
                    "The CEO fell on his sword following the financial scandal."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "resignation"
    },
    {
        "id": "en_proficiency_idioms_073",
        "word": "Few and far between",
        "form": "idiom",
        "definitions": [
            {
                "text": "Rare, scarce, or occurring at long intervals",
                "examples": [
                    "Good affordable apartments in the center are few and far between."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "scarcity"
    },
    {
        "id": "en_proficiency_idioms_074",
        "word": "Fifth wheel",
        "form": "idiom",
        "definitions": [
            {
                "text": "An unnecessary, redundant, or unwelcome person",
                "examples": [
                    "He felt like a fifth wheel among the married couples."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "redundancy"
    },
    {
        "id": "en_proficiency_idioms_075",
        "word": "Fight fire with fire",
        "form": "idiom",
        "definitions": [
            {
                "text": "Respond to an attack using the same aggressive tactics",
                "examples": [
                    "In court, lawyers fought fire with fire."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "retaliation"
    },
    {
        "id": "en_proficiency_idioms_076",
        "word": "Fine line",
        "form": "idiom",
        "definitions": [
            {
                "text": "A subtle difference between two contrasting things",
                "examples": [
                    "There is a fine line between bravery and recklessness."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "subtlety"
    },
    {
        "id": "en_proficiency_idioms_077",
        "word": "Fish or cut bait",
        "form": "idiom",
        "definitions": [
            {
                "text": "Make a decisive choice or stop wasting time",
                "examples": [
                    "It is time to fish or cut bait on this merger proposal."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "decisiveness"
    },
    {
        "id": "en_proficiency_idioms_078",
        "word": "Flash in the pan",
        "form": "idiom",
        "definitions": [
            {
                "text": "A sudden brief success that is not repeated",
                "examples": [
                    "Critics dismissed the singer's hit as a flash in the pan."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "transience"
    },
    {
        "id": "en_proficiency_idioms_079",
        "word": "Flog a dead horse",
        "form": "idiom",
        "definitions": [
            {
                "text": "Waste effort on a matter that cannot be altered",
                "examples": [
                    "Trying to revive the rejected plan is flogging a dead horse."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "futility"
    },
    {
        "id": "en_proficiency_idioms_080",
        "word": "Fly in the face of",
        "form": "idiom",
        "definitions": [
            {
                "text": "Openly defy or contradict established facts or norms",
                "examples": [
                    "His theory flies in the face of accepted physics."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "defiance"
    },
    {
        "id": "en_proficiency_idioms_081",
        "word": "Fool's errand",
        "form": "idiom",
        "definitions": [
            {
                "text": "A useless attempt to achieve something impossible",
                "examples": [
                    "Searching for the lost document proved a fool's errand."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "futility"
    },
    {
        "id": "en_proficiency_idioms_082",
        "word": "Fool's paradise",
        "form": "idiom",
        "definitions": [
            {
                "text": "A state of illusory happiness based on false hopes",
                "examples": [
                    "Ignoring debt means living in a fool's paradise."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "delusion"
    },
    {
        "id": "en_proficiency_idioms_083",
        "word": "Forbidden fruit",
        "form": "idiom",
        "definitions": [
            {
                "text": "Something desirable because it is prohibited",
                "examples": [
                    "Secret information often tastes like forbidden fruit."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "temptation"
    },
    {
        "id": "en_proficiency_idioms_084",
        "word": "From the sublime to the ridiculous",
        "form": "idiom",
        "definitions": [
            {
                "text": "A sudden drop from noble quality to absurdity",
                "examples": [
                    "The movie moved from the sublime to the ridiculous in its final act."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "absurdity"
    },
    {
        "id": "en_proficiency_idioms_085",
        "word": "Game worth the candle",
        "form": "idiom",
        "definitions": [
            {
                "text": "An outcome justified by the effort required",
                "examples": [
                    "Working overtime was worth it; the game was worth the candle."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "value"
    },
    {
        "id": "en_proficiency_idioms_086",
        "word": "Get the sack",
        "form": "idiom",
        "definitions": [
            {
                "text": "Be dismissed from employment abruptly",
                "examples": [
                    "He got the sack for violating security policies."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "dismissal"
    },
    {
        "id": "en_proficiency_idioms_087",
        "word": "Zero in on",
        "form": "idiom",
        "definitions": [
            {
                "text": "Focus concentration directly on a target",
                "examples": [
                    "Researchers zeroed in on the primary cause."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "focus"
    },
    {
        "id": "en_proficiency_idioms_088",
        "word": "Grease the skids",
        "form": "idiom",
        "definitions": [
            {
                "text": "Facilitate a smooth process or outcome",
                "examples": [
                    "Diplomatic talks helped grease the skids for trade treaties."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "ease"
    },
    {
        "id": "en_proficiency_idioms_089",
        "word": "Green-eyed monster",
        "form": "idiom",
        "definitions": [
            {
                "text": "Jealousy personified",
                "examples": [
                    "Beware of the green-eyed monster in competitive workplace."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "jealousy"
    },
    {
        "id": "en_proficiency_idioms_090",
        "word": "Grist to the mill",
        "form": "idiom",
        "definitions": [
            {
                "text": "Useful material that can be turned to advantage",
                "examples": [
                    "Every customer feedback is grist to our improvement mill."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "utility"
    },
    {
        "id": "en_proficiency_idioms_091",
        "word": "Halcyon days",
        "form": "idiom",
        "definitions": [
            {
                "text": "A nostalgic period of peace, happiness, and prosperity",
                "examples": [
                    "He spoke fondly of his halcyon days in university."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "nostalgia"
    },
    {
        "id": "en_proficiency_idioms_092",
        "word": "Ham-fisted",
        "form": "idiom",
        "definitions": [
            {
                "text": "Clumsy or lacking delicate skill",
                "examples": [
                    "His ham-fisted handling of delicate negotiations ruined the deal."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "clumsiness"
    },
    {
        "id": "en_proficiency_idioms_093",
        "word": "Hand that rocks the cradle",
        "form": "idiom",
        "definitions": [
            {
                "text": "Maternal influence shaping the future",
                "examples": [
                    "The hand that rocks the cradle rules the world."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "influence"
    },
    {
        "id": "en_proficiency_idioms_094",
        "word": "Hard row to hoe",
        "form": "idiom",
        "definitions": [
            {
                "text": "A difficult task or struggle to complete",
                "examples": [
                    "Rebuilding the town after the flood was a hard row to hoe."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "hardship"
    },
    {
        "id": "en_proficiency_idioms_095",
        "word": "Have skin in the game",
        "form": "idiom",
        "definitions": [
            {
                "text": "Have a personal financial or emotional stake in an outcome",
                "examples": [
                    "Founders should have real skin in the game."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "stake"
    },
    {
        "id": "en_proficiency_idioms_096",
        "word": "Heads will roll",
        "form": "idiom",
        "definitions": [
            {
                "text": "Severe punishment or terminations will occur",
                "examples": [
                    "When the director sees these errors, heads will roll."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "retribution"
    },
    {
        "id": "en_proficiency_idioms_097",
        "word": "Hobson's choice",
        "form": "idiom",
        "definitions": [
            {
                "text": "A choice between taking what is offered or nothing at all",
                "examples": [
                    "It was Hobson's choice: accept the salary cut or leave."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "dilemma"
    },
    {
        "id": "en_proficiency_idioms_098",
        "word": "Hoist with one's own petard",
        "form": "idiom",
        "definitions": [
            {
                "text": "Victimized by one's own trap or plot",
                "examples": [
                    "The schemer was hoist with his own petard."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "retribution"
    },
    {
        "id": "en_proficiency_idioms_099",
        "word": "Hold water",
        "form": "idiom",
        "definitions": [
            {
                "text": "Remain logical, sound, or valid upon examination",
                "examples": [
                    "His flimsy alibi does not hold water."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "validity"
    },
    {
        "id": "en_proficiency_idioms_100",
        "word": "In the doghouse",
        "form": "idiom",
        "definitions": [
            {
                "text": "In disgrace or disfavor with someone",
                "examples": [
                    "He was in the doghouse for forgetting their anniversary."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "disfavor"
    },
    {
        "id": "en_proficiency_idioms_101",
        "word": "In the offing",
        "form": "idiom",
        "definitions": [
            {
                "text": "Likely to happen in the near future",
                "examples": [
                    "Major management restructuring is in the offing."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "expectation"
    },
    {
        "id": "en_proficiency_idioms_102",
        "word": "Ivory tower",
        "form": "idiom",
        "definitions": [
            {
                "text": "A state of privileged seclusion from harsh real-world facts",
                "examples": [
                    "Academics were accused of living in an ivory tower."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "seclusion"
    },
    {
        "id": "en_proficiency_idioms_103",
        "word": "Jack of all trades, master of none",
        "form": "idiom",
        "definitions": [
            {
                "text": "Competent in many skills but expert in none",
                "examples": [
                    "He is a jack of all trades, master of none."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "versatility"
    },
    {
        "id": "en_proficiency_idioms_104",
        "word": "Janus-faced",
        "form": "idiom",
        "definitions": [
            {
                "text": "Deceitful, hypocritical, or two-faced",
                "examples": [
                    "The politician was criticized for his Janus-faced statements."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "hypocrisy"
    },
    {
        "id": "en_proficiency_idioms_105",
        "word": "Keep body and soul together",
        "form": "idiom",
        "definitions": [
            {
                "text": "Earn just enough money to survive",
                "examples": [
                    "During the famine, families struggled to keep body and soul together."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "survival"
    },
    {
        "id": "en_proficiency_idioms_106",
        "word": "Kick against the pricks",
        "form": "idiom",
        "definitions": [
            {
                "text": "Hurt oneself by resisting authority or power futilely",
                "examples": [
                    "Rebelling against company rules is kicking against the pricks."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "rebellion"
    },
    {
        "id": "en_proficiency_idioms_107",
        "word": "Laugh all the way to the bank",
        "form": "idiom",
        "definitions": [
            {
                "text": "Make a large profit with minimal effort",
                "examples": [
                    "The inventor sold his patent and laughed all the way to the bank."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "profit"
    },
    {
        "id": "en_proficiency_idioms_108",
        "word": "Leading light",
        "form": "idiom",
        "definitions": [
            {
                "text": "A prominent or influential figure in an organization",
                "examples": [
                    "She was a leading light in renewable energy research."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "leadership"
    },
    {
        "id": "en_proficiency_idioms_109",
        "word": "Lick into shape",
        "form": "idiom",
        "definitions": [
            {
                "text": "Make someone or something efficient through training",
                "examples": [
                    "The coach licked the raw team into shape."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "training"
    },
    {
        "id": "en_proficiency_idioms_110",
        "word": "Light at the end of the tunnel",
        "form": "idiom",
        "definitions": [
            {
                "text": "Sign of hope after a long period of difficulty",
                "examples": [
                    "After months of work, we finally see light at the end of the tunnel."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "hope"
    },
    {
        "id": "en_proficiency_idioms_111",
        "word": "Lion's share",
        "form": "idiom",
        "definitions": [
            {
                "text": "The largest part or majority of something",
                "examples": [
                    "The primary investor took the lion's share of profits."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "share"
    },
    {
        "id": "en_proficiency_idioms_112",
        "word": "Living on borrowed time",
        "form": "idiom",
        "definitions": [
            {
                "text": "Surviving longer than expected after a crisis",
                "examples": [
                    "The old company is living on borrowed time."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "fragility"
    },
    {
        "id": "en_proficiency_idioms_113",
        "word": "Long in the tooth",
        "form": "idiom",
        "definitions": [
            {
                "text": "Old or aging",
                "examples": [
                    "That computer system is getting long in the tooth."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "age"
    },
    {
        "id": "en_proficiency_idioms_114",
        "word": "Look to one's laurels",
        "form": "idiom",
        "definitions": [
            {
                "text": "Be careful not to lose one's preeminent position",
                "examples": [
                    "The champion must look to her laurels against young rivals."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "vigilance"
    },
    {
        "id": "en_proficiency_idioms_115",
        "word": "Mad as a hatter",
        "form": "idiom",
        "definitions": [
            {
                "text": "Completely eccentric or insane",
                "examples": [
                    "His wild ideas made people think he was mad as a hatter."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "eccentricity"
    },
    {
        "id": "en_proficiency_idioms_116",
        "word": "Maiden voyage",
        "form": "idiom",
        "definitions": [
            {
                "text": "The first journey of a ship, aircraft, or project",
                "examples": [
                    "The ocean liner set sail on its maiden voyage."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "firsts"
    },
    {
        "id": "en_proficiency_idioms_117",
        "word": "Make a silk purse out of a sow's ear",
        "form": "idiom",
        "definitions": [
            {
                "text": "Create something fine out of poor materials",
                "examples": [
                    "You cannot make a silk purse out of a sow's ear."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "quality"
    },
    {
        "id": "en_proficiency_idioms_118",
        "word": "Man of straw",
        "form": "idiom",
        "definitions": [
            {
                "text": "A weak person or argument easily defeated",
                "examples": [
                    "The defense lawyer exposed the witness as a man of straw."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "weakness"
    },
    {
        "id": "en_proficiency_idioms_119",
        "word": "Mind one's P's and Q's",
        "form": "idiom",
        "definitions": [
            {
                "text": "Mind one's etiquette and behavior carefully",
                "examples": [
                    "Remember to mind your P's and Q's at the formal dinner."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "etiquette"
    },
    {
        "id": "en_proficiency_idioms_120",
        "word": "Midas touch",
        "form": "idiom",
        "definitions": [
            {
                "text": "An ability to make any venture financially successful",
                "examples": [
                    "Everything she invests in turns to gold; she has the Midas touch."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "success"
    },
    {
        "id": "en_proficiency_idioms_121",
        "word": "Mouth-watering",
        "form": "idiom",
        "definitions": [
            {
                "text": "Visually or aromatically appetizing",
                "examples": [
                    "The bakery window displayed mouth-watering pastries."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "appeal"
    },
    {
        "id": "en_proficiency_idioms_122",
        "word": "Clear as a bell",
        "form": "idiom",
        "definitions": [
            {
                "text": "Extremely easy to hear or comprehend without confusion",
                "examples": [
                    "Her voice resonated clear as a bell across the auditorium."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "clarity"
    },
    {
        "id": "en_proficiency_idioms_123",
        "word": "Sail under false colors",
        "form": "idiom",
        "definitions": [
            {
                "text": "Deceive others about one's true identity or intentions",
                "examples": [
                    "The spy was sailing under false colors."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "deception"
    },
    {
        "id": "en_proficiency_idioms_124",
        "word": "Second to none",
        "form": "idiom",
        "definitions": [
            {
                "text": "Superior to all others; best",
                "examples": [
                    "Her culinary skills are second to none."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "excellence"
    },
    {
        "id": "en_proficiency_idioms_125",
        "word": "Set the world on fire",
        "form": "idiom",
        "definitions": [
            {
                "text": "Achieve sensational, widespread success",
                "examples": [
                    "His debut novel set the literary world on fire."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "success"
    },
    {
        "id": "en_proficiency_idioms_126",
        "word": "Shot across the bows",
        "form": "idiom",
        "definitions": [
            {
                "text": "A warning sign or gesture of impending conflict",
                "examples": [
                    "The preliminary injunction was a shot across the bows."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "warning"
    },
    {
        "id": "en_proficiency_idioms_127",
        "word": "Sitting duck",
        "form": "idiom",
        "definitions": [
            {
                "text": "An easy or vulnerable target for attack",
                "examples": [
                    "Without armor, the vehicle was a sitting duck."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "vulnerability"
    },
    {
        "id": "en_proficiency_idioms_128",
        "word": "Square peg in a round hole",
        "form": "idiom",
        "definitions": [
            {
                "text": "A person ill-suited for a role or position",
                "examples": [
                    "He felt like a square peg in a round hole in finance."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "mismatch"
    },
    {
        "id": "en_proficiency_idioms_129",
        "word": "Sticky wicket",
        "form": "idiom",
        "definitions": [
            {
                "text": "A tricky or awkward problem to handle",
                "examples": [
                    "Navigating boundary disputes is a sticky wicket."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "difficulty"
    },
    {
        "id": "en_proficiency_idioms_130",
        "word": "Storm in a teacup",
        "form": "idiom",
        "definitions": [
            {
                "text": "Great excitement over a minor issue",
                "examples": [
                    "The disagreement was merely a storm in a teacup."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "triviality"
    },
    {
        "id": "en_proficiency_idioms_131",
        "word": "Cold day in hell",
        "form": "idiom",
        "definitions": [
            {
                "text": "An event or condition that will never occur",
                "examples": [
                    "It will be a cold day in hell before he admits his error."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "impossibility"
    },
    {
        "id": "en_proficiency_idioms_132",
        "word": "Cool, calm, and collected",
        "form": "idiom",
        "definitions": [
            {
                "text": "Completely relaxed, composed, and in control of emotions",
                "examples": [
                    "She remained cool, calm, and collected during the interview."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "composure"
    },
    {
        "id": "en_proficiency_idioms_133",
        "word": "To the manner born",
        "form": "idiom",
        "definitions": [
            {
                "text": "Naturally suited to a role or lifestyle",
                "examples": [
                    "She managed the luxury resort as if to the manner born."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "grace"
    },
    {
        "id": "en_proficiency_idioms_134",
        "word": "Turn the tables",
        "form": "idiom",
        "definitions": [
            {
                "text": "Reverse a disadvantageous situation against an opponent",
                "examples": [
                    "In the second half, the team turned the tables."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "reversal"
    },
    {
        "id": "en_proficiency_idioms_135",
        "word": "Under the radar",
        "form": "idiom",
        "definitions": [
            {
                "text": "Unnoticed or unobserved",
                "examples": [
                    "The small project operated under the radar."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "secrecy"
    },
    {
        "id": "en_proficiency_idioms_136",
        "word": "Up the ante",
        "form": "idiom",
        "definitions": [
            {
                "text": "Increase demands, risks, or financial stakes",
                "examples": [
                    "The buyer upped the ante by offering cash."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "stakes"
    },
    {
        "id": "en_proficiency_idioms_137",
        "word": "Dead in the water",
        "form": "idiom",
        "definitions": [
            {
                "text": "Unable to function, make progress, or succeed",
                "examples": [
                    "Without fresh funding, the project was dead in the water."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "failure"
    },
    {
        "id": "en_proficiency_idioms_138",
        "word": "Whistleblower",
        "form": "idiom",
        "definitions": [
            {
                "text": "A person informing on illegal activities",
                "examples": [
                    "The whistleblower reported fraud to auditors."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "integrity"
    },
    {
        "id": "en_proficiency_idioms_139",
        "word": "Worth one's weight in gold",
        "form": "idiom",
        "definitions": [
            {
                "text": "Extremely valuable or useful",
                "examples": [
                    "An experienced guide is worth their weight in gold."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "value"
    },
    {
        "id": "en_proficiency_idioms_140",
        "word": "Yellow journalism",
        "form": "idiom",
        "definitions": [
            {
                "text": "Sensationalized or biased news reporting",
                "examples": [
                    "Sensational headlines were criticized as yellow journalism."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "media"
    },
    {
        "id": "en_proficiency_idioms_141",
        "word": "Beware of Greeks bearing gifts",
        "form": "idiom",
        "definitions": [
            {
                "text": "Be suspicious of rivals offering unrequested favors",
                "examples": [
                    "His sudden generous offer made her remember to beware of Greeks bearing gifts."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "suspicion"
    },
    {
        "id": "en_proficiency_idioms_142",
        "word": "In the nick of time",
        "form": "idiom",
        "definitions": [
            {
                "text": "Just in time at the last possible moment before failure",
                "examples": [
                    "Paramedics arrived in the nick of time to assist the patient."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "timing"
    },
    {
        "id": "en_proficiency_idioms_143",
        "word": "Apple of one's eye",
        "form": "idiom",
        "definitions": [
            {
                "text": "A cherished and deeply loved person",
                "examples": [
                    "His youngest daughter was the apple of his eye."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "affection"
    },
    {
        "id": "en_proficiency_idioms_144",
        "word": "Keep a stiff upper lip",
        "form": "idiom",
        "definitions": [
            {
                "text": "Demonstrate stoic courage and refrain from showing emotion in adversity",
                "examples": [
                    "Soldiers were encouraged to keep a stiff upper lip."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "courage"
    },
    {
        "id": "en_proficiency_idioms_145",
        "word": "Behind the eight ball",
        "form": "idiom",
        "definitions": [
            {
                "text": "In a difficult or disadvantaged situation",
                "examples": [
                    "Falling behind schedule put us behind the eight ball."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "disadvantage"
    },
    {
        "id": "en_proficiency_idioms_146",
        "word": "Lesser of two evils",
        "form": "idiom",
        "definitions": [
            {
                "text": "The less harmful or undesirable of two bad choices",
                "examples": [
                    "Faced with two poor proposals, they chose the lesser of two evils."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "choice"
    },
    {
        "id": "en_proficiency_idioms_147",
        "word": "Ham-fisted approach",
        "form": "idiom",
        "definitions": [
            {
                "text": "A clumsy, awkward, or heavy-handed execution",
                "examples": [
                    "The manager's ham-fisted approach alienated the whole team."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "clumsiness"
    },
    {
        "id": "en_proficiency_idioms_148",
        "word": "Hobson choice",
        "form": "idiom",
        "definitions": [
            {
                "text": "A choice between taking what is offered or nothing at all",
                "examples": [
                    "It was Hobson choice: take the offered salary or resign."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "dilemma"
    },
    {
        "id": "en_proficiency_idioms_149",
        "word": "Hoist by one's own petard",
        "form": "idiom",
        "definitions": [
            {
                "text": "Victimized by one's own scheme or trap",
                "examples": [
                    "The blackmailer was hoist by his own petard."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "retribution"
    },
    {
        "id": "en_proficiency_idioms_150",
        "word": "Word of advice",
        "form": "idiom",
        "definitions": [
            {
                "text": "A brief piece of guidance or counsel given to someone",
                "examples": [
                    "Here is a word of advice: always check your contract terms carefully."
                ]
            }
        ],
        "subtext": "idiomatic expression",
        "lang": "en",
        "level": "proficiency",
        "theme": "idioms",
        "sub_theme": "advice"
    }
    ];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();

const GRAMMAR_CONFIG = {
    templates: {
        romance_conditional: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
        romance_future: ['ai', 'as', 'a', 'ons', 'ez', 'ont'],
        romance_future_it: ['ò', 'erai', 'erà', 'eremo', 'erete', 'eranno'],
        romance_conditional_it: ['erei', 'eresti', 'erebbe', 'eremmo', 'ereste', 'erebbero'],
        romance_future_es_ar: ['aré', 'arás', 'ará', 'aremos', 'aréis', 'arán'],
        romance_future_es_er: ['eré', 'erás', 'erá', 'eremos', 'eréis', 'erán'],
        romance_future_es_ir: ['iré', 'irás', 'irá', 'iremos', 'iréis', 'irán'],
        romance_conditional_ia: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
        slavic_past: {
            pattern: "[s]л",
            endings: { m: "", f: "а", n: "о", pl: "и" },
            mapping: [[0, 1], [0, 1], [0, 1, 2], [3], [3], [3]] // Indices for pronouns to gender forms
        }
    },
    fr: {
        articles: ['le', 'la', "l'", 'les'],
        pronouns: ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'],
        nouns: {
            genders: ['masculine', 'feminine'],
            classification: ['countability', 'proper_common'],
            number_system: {
                forms: ['singular', 'plural'],
                rule: 'plural_if_abs_geq_2'
            },
            cases: ['nominative'],
            article_config: {
                types: ['definite', 'indefinite', 'partitive'],
                position: 'preposed',
                elision: true,
                mandatory: true
            },
            article_map: {
                definite: { m: 'le', f: 'la', pl: 'les', elided: "l'" },
                indefinite: { m: 'un', f: 'une', pl: 'des' },
                partitive: { m: 'du', f: 'de la', pl: 'des', elided: "de l'" }
            },
            plural_rules: { default: 's', overrides: { 'al': 'aux', 'eau': 'eaux', 'eu': 'eux' } },
            possession_config: { type: 'preposition', marker: 'de' }
        },
        adjectives: {
            agreement: ['gender', 'number'],
            placement: {
                default: 'postposed',
                preposed_list: ['grand', 'petit', 'beau', 'joli', 'vieux', 'jeune', 'bon', 'mauvais', 'long', 'haut', 'gros', 'nouveau', 'autre', 'même']
            },
            comparison: {
                type: 'analytic',
                patterns: {
                    comparative: 'plus [adj]',
                    superlative: 'le plus [adj]',
                    superlative_f: 'la plus [adj]',
                    superlative_pl: 'les plus [adj]'
                }
            },
            derivation: {
                country_to_adj: { suffixes: ['ais', 'ois', 'ien', 'ain'], strip_vowel: true }
            },
            rules: {
                feminine: { default: 'e', overrides: { 'el': 'elle', 'er': 'ère', 'et': 'ette', 'f': 've', 'x': 'se', 'eux': 'euse', 'eau': 'elle' } },
                plural: { default: 's', overrides: { 'al': 'aux', 'eau': 'eaux', 's': 's', 'x': 'x' } },
                phonetic_variants: {
                    'vowel_or_h': { 'beau': 'bel', 'nouveau': 'nouvel', 'vieux': 'vieil', 'fou': 'fol', 'mou': 'mol' }
                }
            }
        },
        verbs: {
            groups: ['er', 'ir', 're'],
            auxiliaries: ['avoir', 'être'],
            agreement_rules: {
                auxiliary: 'être',
                mapping: ['m', 'm', ['m', 'f'], 'mpl', 'mpl', ['mpl', 'fpl']],
                rules: {
                    m: '', f: 'e', mpl: 's', fpl: 'es'
                }
            },
            negation_config: {
                pattern: "ne [v] pas",
                elisions: { "ne": "n'" }
            },
            reflexive_config: {
                type: 'prefix',
                pronouns: ['me', 'te', 'se', 'nous', 'vous', 'se'],
                elisions: { 'me': "m'", 'te': "t'", 'se': "s'" }
            },
            stem_rules: {
                reflexive_strip: /^s[e']\s*/,
                suffix_strip: { 'er': /er$/, 'ir': /ir$/, 're': /re$/ }
            },
            non_finite: {
                gerund: { endings: { 'er': 'ant', 'ir': 'issant', 're': 'ant' } },
                past_participle: { endings: { 'er': 'é', 'ir': 'i', 're': 'u' } }
            },
            regular_rules: {
                present_simple: {
                    'er': ['e', 'es', 'e', 'ons', 'ez', 'ent'],
                    'ir': ['is', 'is', 'it', 'issons', 'issez', 'issent'],
                    're': ['s', 's', '', 'ons', 'ez', 'ent']
                },
                imperfect: {
                    'er': 'template:romance_conditional',
                    'ir': ['issais', 'issais', 'issait', 'issions', 'issiez', 'issaient'],
                    're': 'template:romance_conditional'
                },
                future_simple: {
                    'er': ['erai', 'eras', 'era', 'erons', 'erez', 'eront'],
                    'ir': ['irai', 'iras', 'ira', 'irons', 'irez', 'iront'],
                    're': ['rai', 'ras', 'ra', 'rons', 'rez', 'ront']
                },
                past_simple: {
                    'er': ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'],
                    'ir': ['is', 'is', 'it', 'îmes', 'îtes', 'irent'],
                    're': ['is', 'is', 'it', 'îmes', 'îtes', 'irent']
                },
                conditional_present: {
                    'er': { template: 'romance_conditional', stem: 'v2' },
                    'ir': { template: 'romance_conditional', stem: 'v2' },
                    're': { template: 'romance_conditional', stem: 'v2' }
                },
                subjunctive_present: {
                    'er': ['e', 'es', 'e', 'ions', 'iez', 'ent'],
                    'ir': ['isse', 'isses', 'isse', 'issions', 'issiez', 'issent'],
                    're': ['e', 'es', 'e', 'ions', 'iez', 'ent']
                }
            },
            compound_tenses: {
                'passe_compose': { aux: 'present_simple', participle: 'v3' },
                'plus_que_parfait': { aux: 'imperfect', participle: 'v3' }
            }
        }
    },
    it: {
        articles: ['il', 'lo', 'la', "l'", 'i', 'gli', 'le'],
        pronouns: ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'],
        nouns: {
            genders: ['masculine', 'feminine'],
            classification: ['countability', 'proper_common'],
            number_system: {
                forms: ['singular', 'plural'],
                rule: 'plural_if_abs_gt_1'
            },
            article_config: {
                types: ['definite', 'indefinite'],
                position: 'preposed',
                phonetic_selection: true
            },
            article_map: {
                definite: {
                    m: { default: 'il', z_s_cons: 'lo', vowel: "l'" },
                    f: { default: 'la', vowel: "l'" },
                    mpl: { default: 'i', z_s_cons: 'gli', vowel: 'gli' },
                    fpl: { default: 'le' }
                },
                indefinite: {
                    m: { default: 'un', z_s_cons: 'uno' },
                    f: { default: 'una', vowel: "un'" }
                }
            },
            plural_rules: {
                m: { 'o': 'i', 'e': 'i' },
                f: { 'a': 'e', 'e': 'i' }
            },
            possession_config: { type: 'preposition', marker: 'di' }
        },
        adjectives: {
            agreement: ['gender', 'number'],
            placement: {
                default: 'postposed',
                preposed_list: ['buono', 'cattivo', 'grande', 'piccolo', 'bello', 'bravo', 'nuovo', 'vecchio', 'giovane']
            },
            comparison: {
                type: 'analytic',
                patterns: {
                    comparative: 'più [adj]',
                    superlative: 'il più [adj]',
                    superlative_f: 'la più [adj]',
                    superlative_mpl: 'i più [adj]',
                    superlative_fpl: 'le più [adj]'
                }
            },
            derivation: {
                country_to_adj: { suffixes: ['ano', 'ese', 'ino'], strip_vowel: true }
            },
            rules: {
                m: { 'o': 'i', 'e': 'i' },
                f: { 'a': 'e', 'e': 'i' },
                'o_to_a': true, // common pattern: o (m) -> a (f)
                phonetic_variants: {
                    'buono': { default: 'buon', z_s_cons: 'buono' },
                    'bello': { default: 'bel', z_s_cons: 'bello', vowel: 'bell\'' }
                }
            }
        },
        verbs: {
            groups: ['are', 'ere', 'ire', 'ire_isco'],
            auxiliaries: ['avere', 'essere'],
            agreement_rules: {
                auxiliary: 'essere',
                mapping: ['m', 'm', ['m', 'f'], 'mpl', 'mpl', ['mpl', 'fpl']],
                rules: {
                    m: 'o', f: 'a', mpl: 'i', fpl: 'e'
                }
            },
            negation_config: { pattern: "non [v]" },
            reflexive_config: {
                type: 'prefix',
                pronouns: ['mi', 'ti', 'si', 'ci', 'vi', 'si']
            },
            stem_rules: {
                reflexive_strip: /si$/,
                suffix_strip: { 'are': /are$/, 'ere': /ere$/, 'ire': /ire$/, 'ire_isco': /ire$/ },
                transformations: [
                    {
                        priority: 'before_strip',
                        tense: ['future_simple', 'conditional_present'],
                        group: 'are',
                        replace: [/are$/, 'er']
                    }
                ]
            },
            non_finite: {
                gerund: { endings: { 'are': 'ando', 'ere': 'endo', 'ire': 'endo', 'ire_isco': 'endo' } },
                past_participle: { endings: { 'are': 'ato', 'ere': 'uto', 'ire': 'ito', 'ire_isco': 'ito' } }
            },
            regular_rules: {
                present_simple: {
                    'are': ['o', 'i', 'a', 'iamo', 'ate', 'ano'],
                    'ere': ['o', 'i', 'e', 'iamo', 'ete', 'ono'],
                    'ire': ['o', 'i', 'e', 'iamo', 'ite', 'ono'],
                    'ire_isco': ['isco', 'isci', 'isce', 'iamo', 'ite', 'iscono']
                },
                imperfect: {
                    'are': ['avo', 'avi', 'ava', 'avamo', 'avate', 'avano'],
                    'ere': ['evo', 'evi', 'eva', 'evamo', 'evate', 'evano'],
                    'ire': ['ivo', 'ivi', 'iva', 'ivamo', 'ivate', 'ivano'],
                    'ire_isco': ['ivo', 'ivi', 'iva', 'ivamo', 'ivate', 'ivano']
                },
                future_simple: {
                    'are': 'template:romance_future_it',
                    'ere': 'template:romance_future_it',
                    'ire': 'template:romance_future_it',
                    'ire_isco': 'template:romance_future_it'
                },
                past_simple: {
                    'are': ['ai', 'asti', 'ò', 'ammo', 'aste', 'arono'],
                    'ere': ['ei', 'esti', 'é', 'emmo', 'este', 'erono'],
                    'ire': ['ii', 'isti', 'ì', 'immo', 'iste', 'irono'],
                    'ire_isco': ['ii', 'isti', 'ì', 'immo', 'iste', 'irono']
                },
                conditional_present: {
                    'are': 'template:romance_conditional_it',
                    'ere': 'template:romance_conditional_it',
                    'ire': 'template:romance_conditional_it',
                    'ire_isco': 'template:romance_conditional_it'
                },
                subjunctive_present: {
                    'are': ['i', 'i', 'i', 'iamo', 'iate', 'ino'],
                    'ere': ['a', 'a', 'a', 'iamo', 'iate', 'ano'],
                    'ire': ['a', 'a', 'a', 'iamo', 'iate', 'ano'],
                    'ire_isco': ['isca', 'isca', 'isca', 'iamo', 'iate', 'iscano']
                }
            },
            compound_tenses: {
                'passato_prossimo': { aux: 'present_simple', participle: 'v3' },
                'trapassato_prossimo': { aux: 'imperfect', participle: 'v3' }
            }
        }
    },
    es: {
        articles: ['el', 'la', 'los', 'las'],
        pronouns: ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos/ellas'],
        nouns: {
            genders: ['masculine', 'feminine'],
            numbers: ['singular', 'plural'],
            article_map: {
                definite: { m: 'el', f: 'la', mpl: 'los', fpl: 'las' },
                indefinite: { m: 'un', f: 'una', mpl: 'unos', fpl: 'unas' }
            },
            plural_rules: { default: 's', vowel_end: 's', cons_end: 'es' }
        },
        adjectives: {
            agreement: ['gender', 'number'],
            placement: {
                default: 'postposed',
                preposed_list: ['bueno', 'malo', 'grande', 'pequeño', 'nuevo', 'viejo']
            },
            comparison: {
                type: 'analytic',
                patterns: {
                    comparative: 'más [adj]',
                    superlative: 'el más [adj]',
                    superlative_f: 'la más [adj]',
                    superlative_mpl: 'los más [adj]',
                    superlative_fpl: 'las más [adj]'
                }
            },
            derivation: {
                country_to_adj: { suffixes: ['ano', 'és', 'ense', 'ino'], strip_vowel: true }
            },
            rules: {
                feminine: { m_end: 'o', f_end: 'a' },
                plural: { vowel_end: 's', cons_end: 'es' }
            }
        },
        verbs: {
            groups: ['ar', 'er', 'ir'],
            auxiliaries: ['haber', 'ser', 'estar'],
            negation_config: { pattern: "no [v]" },
            reflexive_config: {
                type: 'prefix',
                pronouns: ['me', 'te', 'se', 'nos', 'os', 'se']
            },
            stem_rules: {
                reflexive_strip: /se$/,
                suffix_strip: { 'ar': /ar$/, 'er': /er$/, 'ir': /ir$/ }
            },
            non_finite: {
                gerund: { endings: { 'ar': 'ando', 'er': 'iendo', 'ir': 'iendo' } },
                past_participle: { endings: { 'ar': 'ado', 'er': 'ido', 'ir': 'ido' } }
            },
            regular_rules: {
                present_simple: {
                    'ar': ['o', 'as', 'a', 'amos', 'áis', 'an'],
                    'er': ['o', 'es', 'e', 'emos', 'éis', 'en'],
                    'ir': ['o', 'es', 'e', 'imos', 'ís', 'en']
                },
                imperfect: {
                    'ar': ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'],
                    'er': 'template:romance_conditional_ia',
                    'ir': 'template:romance_conditional_ia'
                },
                future_simple: {
                    'ar': 'template:romance_future_es_ar',
                    'er': 'template:romance_future_es_er',
                    'ir': 'template:romance_future_es_ir'
                },
                past_simple: {
                    'ar': ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
                    'er': ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
                    'ir': ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron']
                },
                conditional_present: {
                    'ar': ['aría', 'arías', 'aría', 'aríamos', 'aríais', 'arían'],
                    'er': ['ería', 'erías', 'ería', 'eríamos', 'eríais', 'erían'],
                    'ir': ['iría', 'irías', 'iría', 'iríamos', 'iríais', 'irían']
                },
                subjunctive_present: {
                    'ar': ['e', 'es', 'e', 'emos', 'éis', 'en'],
                    'er': ['a', 'as', 'a', 'amos', 'áis', 'an'],
                    'ir': ['a', 'as', 'a', 'amos', 'áis', 'an']
                }
            },
            compound_tenses: {
                'pret_perfecto': { aux: 'present_simple', participle: 'v3' },
                'pluscuamperfecto': { aux: 'imperfect', participle: 'v3' }
            }
        }
    },
    pt: {
        articles: ['o', 'a', 'os', 'as'],
        pronouns: ['eu', 'tu', 'ele/ela', 'nós', 'vós', 'eles/elas'],
        nouns: {
            genders: ['masculine', 'feminine'],
            numbers: ['singular', 'plural'],
            article_map: {
                definite: { m: 'o', f: 'a', mpl: 'os', fpl: 'as' },
                indefinite: { m: 'um', f: 'uma', mpl: 'uns', fpl: 'umas' }
            },
            plural_rules: { default: 's', overrides: { 'al': 'ais', 'el': 'eis', 'il': 'is', 'ol': 'ois', 'ul': 'uis', 'm': 'ns' } }
        },
        adjectives: {
            agreement: ['gender', 'number'],
            placement: {
                default: 'postposed'
            },
            comparison: {
                type: 'analytic',
                patterns: {
                    comparative: 'mais [adj]',
                    superlative: 'o mais [adj]',
                    superlative_f: 'a mais [adj]',
                    superlative_mpl: 'os mais [adj]',
                    superlative_fpl: 'as mais [adj]'
                }
            },
            derivation: {
                country_to_adj: { suffixes: ['ano', 'ês', 'ense'], strip_vowel: true }
            },
            rules: {
                feminine: { m_end: 'o', f_end: 'a' },
                plural: { default: 's', overrides: { 'al': 'ais', 'el': 'eis', 'il': 'is', 'ol': 'ois', 'ul': 'uis', 'm': 'ns' } }
            }
        },
        verbs: {
            groups: ['ar', 'er', 'ir'],
            auxiliaries: ['ter', 'haver', 'ser', 'estar'],
            negation_config: { pattern: "não [v]" },
            reflexive_config: {
                type: 'prefix',
                pronouns: ['me', 'te', 'se', 'nos', 'vos', 'se']
            },
            stem_rules: {
                reflexive_strip: /se$/,
                suffix_strip: { 'ar': /ar$/, 'er': /er$/, 'ir': /ir$/ }
            },
            non_finite: {
                gerund: { endings: { 'ar': 'ando', 'er': 'endo', 'ir': 'indo' } },
                past_participle: { endings: { 'ar': 'ado', 'er': 'ido', 'ir': 'ido' } }
            },
            regular_rules: {
                present_simple: {
                    'ar': ['o', 'as', 'a', 'amos', 'ais', 'am'],
                    'er': ['o', 'es', 'e', 'emos', 'eis', 'em'],
                    'ir': ['o', 'es', 'e', 'imos', 'is', 'em']
                },
                imperfect: {
                    'ar': ['ava', 'avas', 'ava', 'ávamos', 'áveis', 'avam'],
                    'er': ['ia', 'ias', 'ia', 'íamos', 'íeis', 'iam'],
                    'ir': ['ia', 'ias', 'ia', 'íamos', 'íeis', 'iam']
                },
                future_simple: {
                    'ar': ['arei', 'arás', 'ará', 'aremos', 'areis', 'arão'],
                    'er': ['erei', 'erás', 'erá', 'eremos', 'ereis', 'erão'],
                    'ir': ['irei', 'irás', 'irá', 'iremos', 'ireis', 'irão']
                },
                past_simple: {
                    'ar': ['ei', 'aste', 'ou', 'amos', 'astes', 'aram'],
                    'er': ['i', 'este', 'eu', 'emos', 'estes', 'eram'],
                    'ir': ['i', 'iste', 'iu', 'imos', 'istes', 'iram']
                },
                conditional_present: {
                    'ar': ['aria', 'arias', 'aria', 'aríamos', 'aríeis', 'ariam'],
                    'er': ['eria', 'erias', 'eria', 'eríamos', 'eríeis', 'eriam'],
                    'ir': ['iria', 'irias', 'iria', 'iríamos', 'iríeis', 'iriam']
                },
                subjunctive_present: {
                    'ar': ['e', 'es', 'e', 'emos', 'eis', 'em'],
                    'er': ['a', 'as', 'a', 'amos', 'ais', 'am'],
                    'ir': ['a', 'as', 'a', 'amos', 'ais', 'am']
                }
            },
            compound_tenses: {
                'pret_perfeito_comp': { aux: 'present_simple', participle: 'v3' },
                'mais_que_perfeito': { aux: 'imperfect', participle: 'v3' }
            }
        }
    },
    de: {
        articles: ['der', 'die', 'das'],
        pronouns: ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'],
        nouns: {
            genders: ['masculine', 'feminine', 'neuter'],
            numbers: ['singular', 'plural'],
            cases: ['nominative', 'accusative', 'dative', 'genitive'],
            article_map: {
                definite: {
                    m: ['der', 'den', 'dem', 'des'],
                    f: ['die', 'die', 'der', 'der'],
                    n: ['das', 'das', 'dem', 'des'],
                    pl: ['die', 'die', 'den', 'der']
                },
                indefinite: {
                    m: ['ein', 'einen', 'einem', 'eines'],
                    f: ['eine', 'eine', 'einer', 'einer'],
                    n: ['ein', 'ein', 'einem', 'eines']
                }
            },
            plural_patterns: ['-e', '-er', '-n', '-en', '-s', 'umlaut', 'no_change']
        },
        adjectives: {
            agreement: ['gender', 'number', 'case', 'definiteness'],
            placement: {
                default: 'preposed',
                predicative_no_ending: true
            },
            comparison: {
                type: 'synthetic',
                comparative_suffix: 'er',
                superlative_suffix: 'st',
                superlative_prefix: 'am ',
                superlative_adverbial: 'sten'
            },
            derivation: {
                country_to_adj: { suffixes: ['isch', 'er'], strip_vowel: true }
            },
            declension: {
                strong: {
                    singular: {
                        m: ['er', 'en', 'em', 'es'],
                        f: ['e', 'e', 'er', 'er'],
                        n: ['es', 'es', 'em', 'es']
                    },
                    plural: ['e', 'e', 'en', 'er']
                },
                weak: {
                    singular: {
                        m: ['e', 'en', 'en', 'en'],
                        f: ['e', 'e', 'en', 'en'],
                        n: ['e', 'e', 'en', 'en']
                    },
                    plural: ['en', 'en', 'en', 'en']
                },
                mixed: {
                    singular: {
                        m: ['er', 'en', 'en', 'en'],
                        f: ['e', 'e', 'en', 'en'],
                        n: ['es', 'es', 'en', 'en']
                    },
                    plural: ['en', 'en', 'en', 'en']
                }
            }
        },
        verbs: {
            groups: ['en', 'eln', 'ern'],
            auxiliaries: ['haben', 'sein', 'werden'],
            negation_config: { pattern: "[v] nicht" },
            separable_config: {
                prefixes: ['ab', 'an', 'auf', 'aus', 'bei', 'ein', 'mit', 'nach', 'vor', 'zu'],
                position: { synthetic: 'end', compound: 'participle_prefix' }
            },
            stem_rules: {
                suffix_strip: { 'en': /en$/, 'eln': /eln$/, 'ern': /ern$/ },
                transformations: [
                    {
                        tense: ['present_simple'],
                        persons: [1, 2], // du, er/sie/es
                        replace: [/^([^aeiou]*)e([^aeiou]+)$/i, "$1i$2"],
                        tags: ['strong_ei']
                    },
                    {
                        tense: ['present_simple'],
                        persons: [1, 2],
                        replace: [/^([^aeiou]*)a([^aeiou]+)$/i, "$1ä$2"],
                        tags: ['strong_aä']
                    }
                ]
            },
            non_finite: {
                infinitive: { pattern: "[v]" },
                past_participle: { pattern: "ge[v]t", overrides: { strong: "ge[v]en" } }
            },
            regular_rules: {
                present_simple: {
                    'en': ['e', 'st', 't', 'en', 't', 'en'],
                    'eln': ['le', 'lst', 'lt', 'len', 'lt', 'len'],
                    'ern': ['re', 'rst', 'rt', 'ren', 'rt', 'ren']
                },
                past_simple: {
                    'en': ['te', 'test', 'te', 'ten', 'tet', 'ten'],
                    'eln': ['lte', 'ltest', 'lte', 'lten', 'ltet', 'lten'],
                    'ern': ['rte', 'rtest', 'rte', 'rten', 'rtet', 'rten']
                },
                subjunctive_2: {
                    'en': ['te', 'test', 'te', 'ten', 'tet', 'ten'],
                    'eln': ['lte', 'ltest', 'lte', 'lten', 'ltet', 'lten'],
                    'ern': ['rte', 'rtest', 'rte', 'rten', 'rtet', 'rten']
                }
            },
            compound_tenses: {
                'perfekt': { aux: 'present_simple', participle: 'v3' },
                'plusquamperfekt': { aux: 'past_simple', participle: 'v3' },
                'futur_1': { aux: 'present_simple', auxiliary: 'werden', participle: 'word' },
                'futur_2': { aux: 'futur_1', auxiliary: 'werden', participle: 'v3' }
            }
        }
    },
    ru: {
        articles: [],
        pronouns: ['я', 'ты', 'он/она/оно', 'мы', 'вы', 'они'],
        nouns: {
            genders: ['masculine', 'feminine', 'neuter'],
            classification: ['animacy', 'countability', 'proper_common'],
            number_system: {
                forms: ['singular', 'paucal', 'plural'],
                mapping: (n) => {
                    const l1 = n % 10, l2 = n % 100;
                    if (l2 >= 11 && l2 <= 14) return 'plural';
                    if (l1 === 1) return 'singular';
                    if (l1 >= 2 && l1 <= 4) return 'paucal';
                    return 'plural';
                }
            },
            cases: ['nominative', 'genitive', 'dative', 'accusative', 'instrumental', 'prepositional'],
            declension_groups: {
                '1st': {
                    singular: { n: 'а', g: 'ы', d: 'е', a: 'у', i: 'ой', p: 'е' },
                    plural: { n: 'ы', g: '', d: 'ам', a: 'ы', i: 'ами', p: 'ах' }
                },
                '2nd_m': {
                    singular: { n: '', g: 'а', d: 'у', a: '', i: 'ом', p: 'е' },
                    plural: { n: 'ы', g: 'ов', d: 'ам', a: 'ы', i: 'ами', p: 'ах' }
                },
                '2nd_n': {
                    singular: { n: 'о', g: 'а', d: 'у', a: 'о', i: 'ом', p: 'е' },
                    plural: { n: 'а', g: '', d: 'ам', a: 'а', i: 'ами', p: 'ах' }
                },
                '3rd': {
                    singular: { n: 'ь', g: 'и', d: 'и', a: 'ь', i: 'ью', p: 'и' },
                    plural: { n: 'и', g: 'ей', d: 'ям', a: 'и', i: 'ями', p: 'ях' }
                }
            },
            possession_config: { type: 'genitive_case' }
        },
        adjectives: {
            agreement: ['gender', 'number', 'case'],
            classification: ['long_form', 'short_form'],
            placement: {
                default: 'preposed'
            },
            derivation: {
                country_to_adj: { suffixes: ['ский', 'ин'], strip_vowel: true }
            },
            declension_groups: {
                'hard': {
                    singular: {
                        m: { n: 'ый', g: 'ого', d: 'ому', a: 'ый', i: 'ым', p: 'ом' },
                        f: { n: 'ая', g: 'ой', d: 'ой', a: 'ую', i: 'ой', p: 'ой' },
                        n: { n: 'ое', g: 'ого', d: 'ому', a: 'ое', i: 'ым', p: 'ом' }
                    },
                    plural: { n: 'ые', g: 'ых', d: 'ым', a: 'ые', i: 'ыми', p: 'ых' }
                },
                'soft': {
                    singular: {
                        m: { n: 'ий', g: 'его', d: 'ему', a: 'ий', i: 'им', p: 'ем' },
                        f: { n: 'яя', g: 'ей', d: 'ей', a: 'юю', i: 'ей', p: 'ей' },
                        n: { n: 'ее', g: 'его', d: 'ему', a: 'ее', i: 'им', p: 'ем' }
                    },
                    plural: { n: 'ие', g: 'их', d: 'им', a: 'ие', i: 'ими', p: 'их' }
                }
            },
            comparison: {
                type: 'both',
                analytic: 'более [adj]',
                synthetic_suffix: 'ее',
                superlative_prefix: 'самый '
            }
        },
        verbs: {
            groups: ['1st_conj', '2nd_conj'],
            auxiliaries: ['быть'],
            stem_rules: {
                reflexive_strip: /(ся|сь)$/,
                suffix_strip: { '1st_conj': /(ть|ти|чь)$/, '2nd_conj': /ить$/ },
                transformations: [
                    {
                        tense: ['present_simple'],
                        group: '2nd_conj',
                        replace: [/ить$/, '']
                    }
                ]
            },
            negation_config: { pattern: "не [v]" },
            reflexive_config: {
                type: 'suffix',
                pronouns: (w) => /[аеёиоуыэюя]$/i.test(w) ? "сь" : "ся"
            },
            non_finite: {
                past_participle: { endings: { '1st_conj': '[s]нный', '2nd_conj': '[s]енный' } }
            },
            regular_rules: {
                present_simple: {
                    '1st_conj': ['ю', 'ешь', 'ет', 'ем', 'ете', 'ют'],
                    '2nd_conj': ['ю', 'ишь', 'ит', 'им', 'ите', 'ят']
                },
                past_simple: {
                    '1st_conj': 'template:slavic_past',
                    '2nd_conj': 'template:slavic_past'
                },
                conditional: {
                    '1st_conj': { template: 'slavic_past', post: ' бы' },
                    '2nd_conj': { template: 'slavic_past', post: ' бы' }
                }
            },
            compound_tenses: {
                'future_simple': { aux: 'present_simple', auxiliary: 'быть', participle: 'word' }
            }
        }
    },
    en: {
        articles: ['the'],
        pronouns: ['I', 'you', 'he/she/it', 'we', 'they'],
        nouns: {
            genders: ['neutral'],
            classification: ['countability', 'proper_common'],
            number_system: {
                forms: ['singular', 'plural'],
                rule: 'plural_if_abs_gt_1'
            },
            article_config: {
                types: ['definite', 'indefinite'],
                position: 'preposed'
            },
            article_map: { definite: 'the', indefinite: { default: 'a', vowel: 'an' } },
            plural_rules: { default: 's', overrides: { 'y': 'ies', 'f': 'ves', 'fe': 'ves', 'o': 'oes', 's': 'ses', 'sh': 'shes', 'ch': 'ches', 'x': 'xes' } },
            possession_config: { type: 'clitic', marker: "'s" }
        },
        adjectives: {
            agreement: [],
            placement: {
                default: 'preposed',
                order: ['opinion', 'size', 'age', 'shape', 'colour', 'origin', 'material', 'purpose'],
                predicative_only: ['afloat', 'afraid', 'alive', 'alone', 'asleep']
            },
            comparison: {
                type: 'both',
                synthetic_threshold: 2, // syllables
                synthetic_suffix: 'er',
                superlative_suffix: 'est',
                analytic_comparative: 'more ',
                analytic_superlative: 'most '
            },
            derivation: {
                country_to_adj: { suffixes: ['an', 'ian', 'ese', 'ish'], strip_vowel: true }
            }
        },
        verbs: {
            groups: ['regular'],
            auxiliaries: ['have', 'be', 'do', 'will'],
            negation_config: {
                pattern: "[aux] not [v]",
                defaults: {
                    present_simple: (i) => (i === 2) ? 'does' : 'do',
                    past_simple: 'did'
                },
                exceptions: ['be', 'have', 'will', 'can', 'must']
            },
            stem_rules: {
                suffix_strip: {}
            },
            non_finite: {
                gerund: { pattern: "[v]ing" },
                past_participle: { pattern: "[v]ed" }
            },
            regular_rules: {
                present_simple: {
                    'regular': ['', '', 's', '', '']
                },
                past_simple: {
                    'regular': ['ed', 'ed', 'ed', 'ed', 'ed']
                }
            },
            compound_tenses: {
                'present_perfect': { aux: 'present_simple', participle: 'v3' },
                'past_perfect': { aux: 'past_simple', participle: 'v3' },
                'future_simple': { aux: 'present_simple', auxiliary: 'will', participle: 'word' },
                'present_continuous': { aux: 'present_simple', auxiliary: 'be', participle: 'v4' }
            }
        }
    },
    el: {
        articles: ['ο', 'η', 'το', 'οι', 'τα'],
        pronouns: ['εγώ', 'εσύ', 'αυτός/ή/ό', 'εμείς', 'εσείς', 'αυτοί/ές/ά'],
        nouns: {
            genders: ['masculine', 'feminine', 'neuter'],
            classification: ['countability', 'proper_common'],
            number_system: {
                forms: ['singular', 'plural'],
                rule: 'plural_if_abs_gt_1'
            },
            cases: ['nominative', 'genitive', 'accusative', 'vocative'],
            article_config: {
                types: ['definite'],
                position: 'preposed',
                declined: true
            },
            article_map: {
                definite: {
                    m: ['ο', 'του', 'τον', 'ο'],
                    f: ['η', 'της', 'τη(ν)', 'η'],
                    n: ['το', 'του', 'το', 'το'],
                    mpl: ['οι', 'των', 'τους', 'οι'],
                    fpl: ['οι', 'των', 'τις', 'οι'],
                    npl: ['τα', 'των', 'τα', 'τα']
                }
            },
            declension_groups: {
                'os_m': {
                    singular: { n: 'ος', g: 'ου', a: 'ο', v: 'ε' },
                    plural: { n: 'οι', g: 'ων', a: 'ους', v: 'οι' }
                },
                'a_f': {
                    singular: { n: 'α', g: 'ας', a: 'α', v: 'α' },
                    plural: { n: 'ες', g: 'ων', a: 'ες', v: 'ες' }
                }
            },
            possession_config: { type: 'genitive_case' }
        },
        adjectives: {
            agreement: ['gender', 'number', 'case'],
            placement: {
                default: 'preposed'
            },
            derivation: {
                country_to_adj: { suffixes: ['ικός', 'ός'], strip_vowel: true }
            },
            declension_groups: {
                'os_m': {
                    singular: { n: 'ος', g: 'ου', a: 'ο', v: 'ε' },
                    plural: { n: 'οι', g: 'ων', a: 'ους', v: 'οι' }
                },
                'a_f': {
                    singular: { n: 'α', g: 'ας', a: 'α', v: 'α' },
                    plural: { n: 'ες', g: 'ων', a: 'ες', v: 'ες' }
                },
                'o_n': {
                    singular: { n: 'ο', g: 'ου', a: 'ο', v: 'ο' },
                    plural: { n: 'α', g: 'ων', a: 'α', v: 'α' }
                }
            },
            comparison: {
                type: 'both',
                analytic: 'πιο [adj]',
                synthetic_suffix: 'ότερος'
            }
        },
        verbs: {
            groups: ['1st_conj', '2nd_conj_a', '2nd_conj_b'],
            auxiliaries: ['έχω', 'είμαι', 'θα'],
            negation_config: { pattern: "δεν [v]" },
            stem_rules: {
                suffix_strip: { '1st_conj': /ω$/, '2nd_conj_a': /άω$/, '2nd_conj_b': /ώ$/ }
            },
            non_finite: {
                gerund: { endings: { '1st_conj': 'οντας', '2nd_conj_a': 'ώντας', '2nd_conj_b': 'ώντας' } }
            },
            regular_rules: {
                present_simple: {
                    '1st_conj': ['ω', 'εις', 'ει', 'ουμε', 'ετε', 'ουν'],
                    '2nd_conj_a': ['άω', 'άς', 'άει', 'άμε', 'άτε', 'άνε'],
                    '2nd_conj_b': ['ώ', 'είς', 'εί', 'ούμε', 'είτε', 'ούν']
                },
                imperfect: {
                    '1st_conj': ['α', 'ες', 'ε', 'αμε', 'ατε', 'αν'],
                    '2nd_conj_a': ['αγα', 'αγες', 'αγε', 'αγαμε', 'αγατε', 'αγαν'],
                    '2nd_conj_b': ['ούσα', 'ούσες', 'ούσε', 'ούσαμε', 'ούσατε', 'ούσαν']
                },
                past_simple: {
                    '1st_conj': { stem: 'v2', endings: ['α', 'ες', 'ε', 'αμε', 'ατε', 'αν'] },
                    '2nd_conj_a': { stem: 'v2', endings: ['α', 'ες', 'ε', 'αμε', 'ατε', 'αν'] },
                    '2nd_conj_b': { stem: 'v2', endings: ['α', 'ες', 'ε', 'αμε', 'ατε', 'αν'] }
                }
            },
            compound_tenses: {
                'future_simple': { aux: 'present_simple', auxiliary: 'θα', participle: 'word' },
                'future_perfect': { aux: 'present_simple', auxiliary: 'θα έχω', participle: 'v3' }
            }
        }
    },
    hy: {
        articles: [],
        pronouns: ['ես', 'դու', 'նա', 'մենք', 'դուք', 'նրանք'],
        nouns: {
            vowels: 'աեէըիոօու',
            classification: ['countability', 'proper_common'],
            number_system: {
                forms: ['singular', 'plural'],
                rule: 'plural_if_abs_gt_1'
            },
            cases: ['nominative', 'genitive', 'dative', 'accusative', 'ablative', 'instrumental', 'locative'],
            article_config: {
                types: ['definite'],
                position: 'postposed',
                type: 'suffix'
            },
            article_map: {
                definite: { vowel: 'ն', consonant: 'ը' }
            },
            plural_rules: { monosyllabic: 'եր', polysyllabic: 'ներ' },
            possession_config: { type: 'suffix' }
        },
        adjectives: {
            agreement: [], // Adjectives do not agree in Armenian
            placement: { default: 'preposed' },
            comparison: {
                type: 'analytic',
                patterns: { comparative: 'ավելի [adj]', superlative: 'ամենա[adj]' }
            },
            derivation: {
                noun_to_adj: { suffixes: ['ային', 'ական', 'ավոր'] },
                country_to_adj: { suffixes: ['ական', 'ացի'] }
            }
        },
        verbs: {
            groups: ['el', 'al'],
            auxiliaries: ['եմ', 'ես', 'է', 'ենք', 'եք', 'են'],
            negation_config: { pattern: "չ[v]" },
            stem_rules: {
                suffix_strip: { 'el': /ել$/, 'al': /ալ$/ }
            },
            regular_rules: {
                present_simple: {
                    'el': ['ում եմ', 'ում ես', 'ում է', 'ում ենք', 'ում եք', 'ում են'],
                    'al': ['ում եմ', 'ում ես', 'ում է', 'ում ենք', 'ում եք', 'ում են']
                },
                imperfect: {
                    'el': ['ում էի', 'ում էիր', 'ում էր', 'ում էինք', 'ում էիք', 'ում էին'],
                    'al': ['ում էի', 'ում էիր', 'ում էր', 'ում էինք', 'ում էիք', 'ում էին']
                }
            }
        }
    },
    ka: {
        articles: [],
        pronouns: ['მე', 'შენ', 'ის', 'ჩვენ', 'თქვენ', 'ისინი'],
        nouns: {
            classification: ['countability', 'proper_common'],
            number_system: {
                forms: ['singular', 'plural'],
                rule: 'plural_if_abs_gt_1'
            },
            cases: ['nominative', 'ergative', 'dative', 'genitive', 'instrumental', 'adverbial', 'vocative'],
            plural_suffix: 'ებ',
            declension_groups: {
                'vowel_end': { n: '', e: 'მ', d: 'ს', g: 'ს', i: 'თ', a: 'დ', v: 'ვ' },
                'cons_end': { n: 'ი', e: 'მა', d: 'ს', g: 'ის', i: 'ით', a: 'ად', v: 'ო' }
            },
            possession_config: { type: 'genitive_case' }
        },
        adjectives: {
            agreement: ['case'],
            placement: { default: 'preposed' },
            declension_groups: {
                'os_vowel': { n: '', e: 'მა', d: 'ა', g: 'ა', i: 'ა', a: 'ა', v: 'ა' }, // Simplified
                'os_cons': { n: 'ი', e: 'მა', d: 'ა', g: 'ი', i: 'ი', a: 'ა', v: 'ო' }
            },
            comparison: {
                type: 'analytic',
                patterns: { comparative: 'უფრო [adj]', superlative: 'ყველაზე [adj]' }
            }
        },
        verbs: {
            groups: ['i_eb', 'a_eb', 'u_eb'],
            auxiliaries: [],
            negation_config: { pattern: "არ [v]" },
            stem_rules: {
                suffix_strip: /([ნა|ა])$/
            },
            regular_rules: {
                present_simple: {
                    'i_eb': ['ვ-ებ', '-ებ', '-ებს', 'ვ-ებთ', '-ებთ', '-ებენ'],
                    'a_eb': ['ვ-ებ', '-ებ', '-ებს', 'ვ-ებთ', '-ებთ', '-ებენ'],
                    'u_eb': ['ვ-ებ', '-ებ', '-ებს', 'ვ-ებთ', '-ებთ', '-ებენ']
                },
                imperfect: {
                    'i_eb': ['ვ-ებდი', '-ებდი', '-ებდა', 'ვ-ებდით', '-ებდით', '-ებდნენ'],
                    'a_eb': ['ვ-ებდი', '-ებდი', '-ებდა', 'ვ-ებდით', '-ებდით', '-ებდნენ'],
                    'u_eb': ['ვ-ებდი', '-ებდი', '-ებდა', 'ვ-ებდით', '-ებდით', '-ებდნენ']
                },
                future: {
                    'i_eb': ['ვ-ებ', '-ებ', '-ებს', 'ვ-ებთ', '-ებთ', '-ებენ'],
                    'a_eb': ['ვ-ებ', '-ებ', '-ებს', 'ვ-ებთ', '-ებთ', '-ებენ'],
                    'u_eb': ['ვ-ებ', '-ებ', '-ებს', 'ვ-ებთ', '-ებთ', '-ებენ']
                }
            }
        }
    },
    tt: {
        articles: [],
        pronouns: ['мин', 'син', 'ул', 'без', 'сез', 'алар'],
        nouns: {
            classification: ['countability', 'proper_common'],
            number_system: {
                forms: ['singular', 'plural'],
                rule: 'plural_if_abs_gt_1'
            },
            cases: ['nominative', 'genitive', 'dative', 'accusative', 'locative', 'ablative'],
            plural_rules: { front: 'ләр', back: 'лар' },
            possession_config: {
                type: 'suffix',
                singular: {
                    '1s': { front: 'ем', back: 'ым' },
                    '2s': { front: 'ең', back: 'ың' },
                    '3s': { front: 'е', back: 'ы', vowel: 'сы/се' }
                }
            }
        },
        adjectives: {
            agreement: [],
            placement: { default: 'preposed' },
            comparison: {
                type: 'analytic',
                patterns: { comparative: 'тырак [adj]', superlative: 'иң [adj]' }
            },
            derivation: {
                country_to_adj: { suffixes: ['лы', 'ле'], harmony: true }
            },
            intensification: { reduplication: true }
        },
        verbs: {
            groups: ['vowel', 'consonant'],
            auxiliaries: ['иде', 'икән'],
            negation_config: {
                type: 'infix',
                front: 'мә',
                back: 'ма',
                vowels: ['ә', 'ө', 'ү', 'и', 'е', 'э']
            },
            stem_rules: {
                suffix_strip: /([рга|ргә|ырга|ергә|у|ү])$/
            },
            regular_rules: {
                present_simple: {
                    'vowel': ['м', 'сың', '', 'быз', 'сыз', 'лар'],
                    'consonant': ['ам', 'асың', 'а', 'абыз', 'асыз', 'алар']
                },
                past_simple: {
                    'vowel': ['дым', 'дың', 'ды', 'дык', 'дыбыз', 'дыгыз', 'дылар'],
                    'consonant': ['дым', 'дың', 'ды', 'дык', 'дыбыз', 'дысыз', 'дылар']
                },
                future_indefinite: {
                    'vowel': ['рмын', 'рсың', 'р', 'рбыз', 'рсыз', 'рлар'],
                    'consonant': ['армын', 'арсың', 'ар', 'арбыз', 'арсыз', 'арлар']
                }
            }
        }
    },
    ba: {
        articles: [],
        pronouns: ['мин', 'син', 'ул', 'беҙ', 'һеҙ', 'алар'],
        nouns: {
            classification: ['countability', 'proper_common'],
            number_system: {
                forms: ['singular', 'plural'],
                rule: 'plural_if_abs_gt_1'
            },
            cases: ['nominative', 'genitive', 'dative', 'accusative', 'locative', 'ablative'],
            plural_rules: { front: 'ләр', back: 'лар' },
            possession_config: {
                type: 'suffix',
                singular: {
                    '1s': { front: 'ем', back: 'ым' },
                    '2s': { front: 'ең', back: 'ың' },
                    '3s': { front: 'е', back: 'ы', vowel: 'һы/һе' }
                }
            }
        },
        adjectives: {
            agreement: [],
            placement: { default: 'preposed' },
            comparison: {
                type: 'analytic',
                patterns: { comparative: 'инеүерек [adj]', superlative: 'иң [adj]' }
            },
            derivation: {
                country_to_adj: { suffixes: ['лы', 'ле'], harmony: true }
            }
        },
        verbs: {
            groups: ['vowel', 'consonant'],
            auxiliaries: ['ине', 'икән'],
            negation_config: {
                type: 'infix',
                front: 'мә',
                back: 'ма',
                vowels: ['ә', 'ө', 'ү', 'и', 'е', 'э']
            },
            stem_rules: {
                suffix_strip: /([рга|ргә|ырга|ергә|у|ү])$/
            },
            regular_rules: {
                present_simple: {
                    'vowel': ['м', 'һың', '', 'быҙ', 'һығыҙ', 'лар'],
                    'consonant': ['ам', 'аһың', 'а', 'абыҙ', 'аһығыҙ', 'алар']
                },
                past_simple: {
                    'vowel': ['дым', 'дың', 'ды', 'дыҡ', 'дығыҙ', 'дылар'],
                    'consonant': ['дым', 'дың', 'ды', 'дыҡ', 'дығыҙ', 'дылар']
                },
                future_indefinite: {
                    'vowel': ['рмын', 'рһың', 'р', 'рбыҙ', 'рһығыҙ', 'рлар'],
                    'consonant': ['армын', 'арһың', 'ар', 'арбыҙ', 'арһығыҙ', 'арлар']
                }
            }
        }
    },
    br: {
        articles: ['an', 'al', 'ar'],
        pronouns: ["me", "te", "eñ/hi", "ni", "c'hwi", "int"],
        nouns: {
            genders: ['masculine', 'feminine'],
            classification: ['countability', 'proper_common'],
            number_system: {
                forms: ['singular', 'dual', 'plural'],
                mapping: (n) => {
                    if (n === 1) return 'singular';
                    if (n === 2) return 'dual';
                    return 'plural';
                }
            },
            article_config: {
                types: ['definite', 'indefinite'],
                position: 'preposed'
            },
            article_map: { definite: ['an', 'al', 'ar'], indefinite: ['un', 'ul', 'ur'] },
            possession_config: { type: 'preposition', marker: 'eus' }
        },
        adjectives: {
            agreement: ['mutation'],
            placement: { default: 'postposed' },
            mutation_rules: {
                trigger: 'after_feminine_noun',
                type: 'soft' // k -> g, t -> d, p -> b...
            },
            comparison: {
                type: 'synthetic',
                comparative_suffix: 'oc\'h',
                superlative_suffix: 'añ'
            },
            derivation: {
                country_to_adj: { suffixes: ['ad', 'at'], strip_vowel: true }
            }
        },
        verbs: {
            groups: ['añ'],
            auxiliaries: ['ober', 'kaout'],
            negation_config: { pattern: "ne [v] ket" },
            stem_rules: {
                suffix_strip: { 'añ': /añ$/ }
            },
            regular_rules: {
                present_simple: {
                    'añ': ['an', 'ez', 'o', 'omp', 'it', 'ont']
                },
                imperfect: {
                    'añ': ['en', 'es', 'e', 'emp', 'ec\'h', 'ent']
                },
                future_simple: {
                    'añ': ['in', 'i', 'o', 'imp', 'ot', 'int']
                },
                conditional: {
                    'añ': ['fen', 'fes', 'fe', 'femp', 'fec\'h', 'fent']
                }
            }
        }
    }
};

if (typeof module !== 'undefined') {
    module.exports = GRAMMAR_CONFIG;
}

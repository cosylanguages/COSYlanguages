const GRAMMAR_CONFIG = {
    fr: {
        articles: ['le', 'la', "l'", 'les'],
        pronouns: ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'],
        verbs: {
            groups: ['er', 'ir', 're'],
            auxiliaries: ['avoir', 'être'],
            negation: "ne [v] pas",
            regular_rules: {
                present_simple: {
                    'er': ['e', 'es', 'e', 'ons', 'ez', 'ent'],
                    'ir': ['is', 'is', 'it', 'issons', 'issez', 'issent'],
                    're': ['s', 's', '', 'ons', 'ez', 'ent']
                },
                imperfect: {
                    'er': ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
                    'ir': ['issais', 'issais', 'issait', 'issions', 'issiez', 'issaient'],
                    're': ['ais', 'ais', 'ait', 'ions', 'iez', 'aient']
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
                    'er': ['erais', 'erais', 'erait', 'erions', 'eriez', 'eraient'],
                    'ir': ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'],
                    're': ['rais', 'rais', 'rait', 'rions', 'riez', 'raient']
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
        verbs: {
            groups: ['are', 'ere', 'ire', 'ire_isco'],
            auxiliaries: ['avere', 'essere'],
            negation: "non [v]",
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
                    'are': ['erò', 'erai', 'erà', 'eremo', 'erete', 'eranno'],
                    'ere': ['erò', 'erai', 'erà', 'eremo', 'erete', 'eranno'],
                    'ire': ['irò', 'irai', 'irà', 'iremo', 'irete', 'iranno'],
                    'ire_isco': ['irò', 'irai', 'irà', 'iremo', 'irete', 'iranno']
                },
                past_simple: {
                    'are': ['ai', 'asti', 'ò', 'ammo', 'aste', 'arono'],
                    'ere': ['ei', 'esti', 'é', 'emmo', 'este', 'erono'],
                    'ire': ['ii', 'isti', 'ì', 'immo', 'iste', 'irono'],
                    'ire_isco': ['ii', 'isti', 'ì', 'immo', 'iste', 'irono']
                },
                conditional_present: {
                    'are': ['erei', 'eresti', 'erebbe', 'eremmo', 'ereste', 'erebbero'],
                    'ere': ['erei', 'eresti', 'erebbe', 'eremmo', 'ereste', 'erebbero'],
                    'ire': ['irei', 'iresti', 'irebbe', 'iremmo', 'ireste', 'irebbero'],
                    'ire_isco': ['irei', 'iresti', 'irebbe', 'iremmo', 'ireste', 'irebbero']
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
        verbs: {
            groups: ['ar', 'er', 'ir'],
            auxiliaries: ['haber', 'ser', 'estar'],
            negation: "no [v]",
            regular_rules: {
                present_simple: {
                    'ar': ['o', 'as', 'a', 'amos', 'áis', 'an'],
                    'er': ['o', 'es', 'e', 'emos', 'éis', 'en'],
                    'ir': ['o', 'es', 'e', 'imos', 'ís', 'en']
                },
                imperfect: {
                    'ar': ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'],
                    'er': ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
                    'ir': ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían']
                },
                future_simple: {
                    'ar': ['aré', 'arás', 'ará', 'aremos', 'aréis', 'arán'],
                    'er': ['eré', 'erás', 'erá', 'eremos', 'eréis', 'erán'],
                    'ir': ['iré', 'irás', 'irá', 'iremos', 'iréis', 'irán']
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
        verbs: {
            groups: ['ar', 'er', 'ir'],
            auxiliaries: ['ter', 'haver', 'ser', 'estar'],
            negation: "não [v]",
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
                    'er': ['a', 'as', 'a', 'amos', 'ais', 'an'],
                    'ir': ['a', 'as', 'a', 'amos', 'ais', 'an']
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
        verbs: {
            groups: ['en', 'eln', 'ern'],
            auxiliaries: ['haben', 'sein', 'werden'],
            negation: "[v] nicht",
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
        verbs: {
            groups: ['1st_conj', '2nd_conj'],
            auxiliaries: ['быть'],
            negation: "не [v]",
            regular_rules: {
                present_simple: {
                    '1st_conj': ['ю', 'ешь', 'ет', 'ем', 'ете', 'ют'],
                    '2nd_conj': ['ю', 'ишь', 'ит', 'им', 'ите', 'ят']
                },
                past_simple: {
                    '1st_conj': ['л', 'л', 'л', 'ли', 'ли', 'ли'],
                    '2nd_conj': ['л', 'л', 'л', 'ли', 'ли', 'ли']
                },
                conditional: {
                    '1st_conj': ['л бы', 'л бы', 'л бы', 'ли бы', 'ли бы', 'ли бы'],
                    '2nd_conj': ['л бы', 'л бы', 'л бы', 'ли бы', 'ли бы', 'ли бы']
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
        verbs: {
            groups: ['regular'],
            auxiliaries: ['have', 'be', 'do', 'will'],
            negation: "do not [v]",
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
        verbs: {
            groups: ['1st_conj', '2nd_conj_a', '2nd_conj_b'],
            auxiliaries: ['έχω', 'είμαι', 'θα'],
            negation: "δεν [v]",
            regular_rules: {
                present_simple: {
                    '1st_conj': ['ω', 'εις', 'ει', 'ουμε', 'ετε', 'ουν'],
                    '2nd_conj_a': ['άω', 'άς', 'άει', 'άμε', 'άτε', 'άνε'],
                    '2nd_conj_b': ['ώ', 'είς', 'εί', 'ούμε', 'είτε', 'ούν']
                },
                imperfect: {
                    '1st_conj': ['α', 'ες', 'ε', 'αμε', 'ατε', 'αν'],
                    '2nd_conj_a': ['αγα', 'αγες', 'αγε', 'αγαме', 'αγατε', 'αγαν'],
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
        verbs: {
            groups: ['el', 'al'],
            auxiliaries: ['եմ', 'ես', 'է', 'ենք', 'եք', 'են'],
            negation: "չ[v]",
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
        verbs: {
            groups: ['i_eb', 'a_eb', 'u_eb'],
            auxiliaries: [],
            negation: "არ [v]",
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
        verbs: {
            groups: ['vowel', 'consonant'],
            auxiliaries: ['иде', 'икән'],
            negation: "[v]-ма/-мә",
            regular_rules: {
                present_simple: {
                    'vowel': ['м', 'сың', '', 'быз', 'сыз', 'лар'],
                    'consonant': ['ам', 'асың', 'а', 'абыз', 'асыз', 'алар']
                },
                past_simple: {
                    'vowel': ['дым', 'дың', 'ды', 'дык', 'дыгыз', 'дылар'],
                    'consonant': ['дым', 'дың', 'ды', 'дык', 'дыгыз', 'дылар']
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
        verbs: {
            groups: ['vowel', 'consonant'],
            auxiliaries: ['ине', 'икән'],
            negation: "[v]-ма/-мә",
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
        verbs: {
            groups: ['añ'],
            auxiliaries: ['ober', 'kaout'],
            negation: "ne [v] ket",
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

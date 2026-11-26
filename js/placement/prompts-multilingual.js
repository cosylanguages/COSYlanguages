/**
 * COSY Languages - Localised placement prompts (FR, IT, RU, EL)
 *
 * The English prompts in prompts-and-rubrics.js are not reusable across
 * languages: asking a French learner to explain "why you want to learn English"
 * is not a French writing task. These are the parallel tasks for the four other
 * supported languages, shaped after the exams each language is taught for
 * (DELF/DALF, CILS/CELI, ТРКИ, Ελληνομάθεια).
 *
 * Read through COSY_PLACEMENT_PROMPTS_RUBRICS.getWritingPrompts(lang) /
 * getSpeakingPrompts(lang), never directly.
 */

(function (root) {
  const PROMPTS = {
    writing: {
      fr: [
        {
          id: 'write_fr_a1', band: 'A1', targetBands: ['A0', 'A1'], language: 'fr', register: 'informal',
          title: 'Message de présentation',
          instruction: 'Rédigez un court message pour vous présenter à votre groupe de conversation.',
          prompt: 'Présentez-vous : donnez votre nom, votre ville, votre travail ou vos études, et expliquez pourquoi vous apprenez le français.',
          minWords: 20, maxWords: 50, timeLimitMinutes: 5,
          cefrDescriptor: 'Peut écrire des phrases simples et isolées sur soi-même et son lieu de vie.'
        },
        {
          id: 'write_fr_a2', band: 'A2', targetBands: ['A2'], language: 'fr', register: 'informal',
          title: 'Récit d’une expérience récente',
          instruction: 'Écrivez un courriel à un ami au sujet d’un voyage ou d’un événement récent.',
          prompt: 'Racontez un voyage ou un événement récent : où vous êtes allé, avec qui, ce que vous avez fait et si vous avez aimé.',
          minWords: 50, maxWords: 90, timeLimitMinutes: 10,
          cefrDescriptor: 'Peut écrire une série de phrases simples reliées par des connecteurs comme « et », « mais » et « parce que ».'
        },
        {
          id: 'write_fr_b1', band: 'B1', targetBands: ['B1'], language: 'fr', register: 'neutral',
          title: 'Opinion et conseil',
          instruction: 'Répondez à un fil de discussion sur un forum communautaire.',
          prompt: 'Un ami hésite à prendre une année sabbatique avant de commencer ses études. Expliquez les avantages et les inconvénients de ce choix, puis donnez votre recommandation personnelle.',
          minWords: 100, maxWords: 160, timeLimitMinutes: 15,
          cefrDescriptor: 'Peut écrire un texte simple et cohérent sur des sujets familiers en reliant des éléments brefs en une suite linéaire.'
        },
        {
          id: 'write_fr_b2', band: 'B2', targetBands: ['B2'], language: 'fr', register: 'formal',
          title: 'Lettre formelle / proposition',
          instruction: 'Rédigez une lettre adressée à votre mairie.',
          prompt: 'Proposez la création d’un parc ou d’une zone piétonne dans votre quartier. Présentez des arguments structurés sur les bénéfices sociaux, sanitaires et environnementaux, et répondez aux objections possibles des commerçants.',
          minWords: 180, maxWords: 240, timeLimitMinutes: 20,
          cefrDescriptor: 'Peut écrire un texte clair et détaillé sur des sujets variés et synthétiser des informations et des arguments.'
        },
        {
          id: 'write_fr_c1', band: 'C1', targetBands: ['C1'], language: 'fr', register: 'formal',
          title: 'Analyse professionnelle nuancée',
          instruction: 'Rédigez un court rapport analytique destiné à un public professionnel.',
          prompt: 'Analysez l’impact de l’intelligence artificielle et de l’automatisation sur le travail à distance. Discutez des gains de productivité ainsi que des risques pour la culture d’entreprise et le bien-être des salariés, puis proposez des mesures concrètes que la direction devrait adopter.',
          minWords: 250, maxWords: 320, timeLimitMinutes: 25,
          cefrDescriptor: 'Peut s’exprimer avec clarté et précision dans un texte bien structuré, en adaptant le registre au destinataire.'
        },
        {
          id: 'write_fr_c2', band: 'C2', targetBands: ['C2'], language: 'fr', register: 'formal',
          title: 'Synthèse critique et argumentation',
          instruction: 'Rédigez un essai critique ou une évaluation de politique publique.',
          prompt: 'Analysez la tension entre l’accélération technologique, la protection des données personnelles et l’autonomie individuelle dans les démocraties contemporaines. Évaluez la pertinence des cadres réglementaires existants, avec un style précis et un argumentaire nuancé.',
          minWords: 350, maxWords: 450, timeLimitMinutes: 30,
          cefrDescriptor: 'Peut écrire des textes complexes, fluides et bien structurés dans un style approprié et efficace.'
        }
      ],

      it: [
        {
          id: 'write_it_a1', band: 'A1', targetBands: ['A0', 'A1'], language: 'it', register: 'informal',
          title: 'Messaggio di presentazione',
          instruction: 'Scrivi un breve messaggio per presentarti al tuo gruppo di conversazione.',
          prompt: 'Presentati: indica il tuo nome, la tua città, il tuo lavoro o i tuoi studi e spiega perché studi l’italiano.',
          minWords: 20, maxWords: 50, timeLimitMinutes: 5,
          cefrDescriptor: 'Sa scrivere frasi semplici e isolate su di sé e sul luogo in cui vive.'
        },
        {
          id: 'write_it_a2', band: 'A2', targetBands: ['A2'], language: 'it', register: 'informal',
          title: 'Racconto di un’esperienza recente',
          instruction: 'Scrivi un’e-mail a un amico su un viaggio o un evento recente.',
          prompt: 'Racconta un viaggio o un evento recente: dove sei andato, con chi, che cosa hai fatto e se ti è piaciuto.',
          minWords: 50, maxWords: 90, timeLimitMinutes: 10,
          cefrDescriptor: 'Sa scrivere una serie di frasi semplici collegate da connettivi come « e », « ma » e « perché ».'
        },
        {
          id: 'write_it_b1', band: 'B1', targetBands: ['B1'], language: 'it', register: 'neutral',
          title: 'Opinione e consiglio',
          instruction: 'Rispondi a una discussione su un forum della comunità.',
          prompt: 'Un amico è incerto se prendersi un anno sabbatico prima di iniziare l’università. Spiega i vantaggi e gli svantaggi di questa scelta e fornisci il tuo consiglio personale.',
          minWords: 100, maxWords: 160, timeLimitMinutes: 15,
          cefrDescriptor: 'Sa scrivere un testo semplice e coerente su argomenti familiari collegando brevi elementi in una sequenza lineare.'
        },
        {
          id: 'write_it_b2', band: 'B2', targetBands: ['B2'], language: 'it', register: 'formal',
          title: 'Lettera formale / proposta',
          instruction: 'Scrivi una lettera al tuo comune.',
          prompt: 'Proponi la creazione di un parco o di un’area pedonale nel tuo quartiere. Presenta argomenti strutturati sui benefici sociali, sanitari e ambientali e rispondi alle possibili obiezioni dei commercianti.',
          minWords: 180, maxWords: 240, timeLimitMinutes: 20,
          cefrDescriptor: 'Sa scrivere testi chiari e dettagliati su argomenti diversi e sintetizzare informazioni e argomentazioni.'
        },
        {
          id: 'write_it_c1', band: 'C1', targetBands: ['C1'], language: 'it', register: 'formal',
          title: 'Analisi professionale articolata',
          instruction: 'Scrivi una breve relazione analitica destinata a un pubblico professionale.',
          prompt: 'Analizza l’impatto dell’intelligenza artificiale e dell’automazione sul lavoro a distanza. Discuti i guadagni di produttività e i rischi per la cultura aziendale e il benessere dei dipendenti, proponendo misure concrete che la direzione dovrebbe adottare.',
          minWords: 250, maxWords: 320, timeLimitMinutes: 25,
          cefrDescriptor: 'Sa esprimersi con chiarezza e precisione in un testo ben strutturato, adattando il registro al destinatario.'
        },
        {
          id: 'write_it_c2', band: 'C2', targetBands: ['C2'], language: 'it', register: 'formal',
          title: 'Sintesi critica e argomentazione',
          instruction: 'Scrivi un saggio critico o una valutazione di politiche pubbliche.',
          prompt: 'Analizza la tensione tra accelerazione tecnologica, tutela dei dati personali e autonomia individuale nelle democrazie contemporanee. Valuta l’adeguatezza dei quadri normativi esistenti con uno stile preciso e un’argomentazione sfumata.',
          minWords: 350, maxWords: 450, timeLimitMinutes: 30,
          cefrDescriptor: 'Sa scrivere testi complessi, scorrevoli e ben strutturati in uno stile appropriato ed efficace.'
        }
      ],

      ru: [
        {
          id: 'write_ru_a1', band: 'A1', targetBands: ['A0', 'A1'], language: 'ru', register: 'informal',
          title: 'Сообщение о себе',
          instruction: 'Напишите короткое сообщение, чтобы представиться своей разговорной группе.',
          prompt: 'Расскажите о себе: назовите имя, город, работу или учёбу и объясните, почему вы изучаете русский язык.',
          minWords: 20, maxWords: 50, timeLimitMinutes: 5,
          cefrDescriptor: 'Может писать простые отдельные фразы о себе и о месте, где живёт.'
        },
        {
          id: 'write_ru_a2', band: 'A2', targetBands: ['A2'], language: 'ru', register: 'informal',
          title: 'Рассказ о недавнем событии',
          instruction: 'Напишите письмо другу о недавней поездке или событии.',
          prompt: 'Расскажите о недавней поездке или событии: куда вы ездили, с кем, что делали и понравилось ли вам.',
          minWords: 50, maxWords: 90, timeLimitMinutes: 10,
          cefrDescriptor: 'Может писать ряд простых фраз, соединённых союзами «и», «но», «потому что».'
        },
        {
          id: 'write_ru_b1', band: 'B1', targetBands: ['B1'], language: 'ru', register: 'neutral',
          title: 'Мнение и совет',
          instruction: 'Ответьте в обсуждении на форуме сообщества.',
          prompt: 'Друг сомневается, брать ли академический отпуск перед началом учёбы. Объясните плюсы и минусы такого решения и дайте личную рекомендацию.',
          minWords: 100, maxWords: 160, timeLimitMinutes: 15,
          cefrDescriptor: 'Может писать простой связный текст на знакомые темы, соединяя короткие элементы в линейную последовательность.'
        },
        {
          id: 'write_ru_b2', band: 'B2', targetBands: ['B2'], language: 'ru', register: 'formal',
          title: 'Официальное письмо / предложение',
          instruction: 'Напишите официальное письмо в местную администрацию.',
          prompt: 'Предложите создать парк или пешеходную зону в вашем районе. Приведите аргументы о социальных, медицинских и экологических преимуществах и ответьте на возможные возражения предпринимателей.',
          minWords: 180, maxWords: 240, timeLimitMinutes: 20,
          cefrDescriptor: 'Может писать понятные подробные тексты на разные темы и обобщать информацию и аргументы.'
        },
        {
          id: 'write_ru_c1', band: 'C1', targetBands: ['C1'], language: 'ru', register: 'formal',
          title: 'Аналитический отчёт',
          instruction: 'Напишите краткий аналитический отчёт для профессиональной аудитории.',
          prompt: 'Проанализируйте влияние искусственного интеллекта и автоматизации на удалённую работу. Обсудите рост производительности, а также риски для корпоративной культуры и благополучия сотрудников, предложив конкретные меры для руководства.',
          minWords: 250, maxWords: 320, timeLimitMinutes: 25,
          cefrDescriptor: 'Может ясно и точно выражать мысли в хорошо структурированном тексте, подбирая регистр под адресата.'
        },
        {
          id: 'write_ru_c2', band: 'C2', targetBands: ['C2'], language: 'ru', register: 'formal',
          title: 'Критическое обобщение',
          instruction: 'Напишите критическое эссе или оценку государственной политики.',
          prompt: 'Проанализируйте противоречие между ускорением технологий, защитой персональных данных и автономией личности в современных демократиях. Оцените, насколько существующие нормативные рамки соответствуют задаче, используя точный стиль и взвешенную аргументацию.',
          minWords: 350, maxWords: 450, timeLimitMinutes: 30,
          cefrDescriptor: 'Может писать сложные, плавные и хорошо структурированные тексты в уместном и действенном стиле.'
        }
      ],

      el: [
        {
          id: 'write_el_a1', band: 'A1', targetBands: ['A0', 'A1'], language: 'el', register: 'informal',
          title: 'Μήνυμα συστάσεως',
          instruction: 'Γράψε ένα σύντομο μήνυμα για να συστηθείς στην ομάδα συνομιλίας σου.',
          prompt: 'Συστήσου: γράψε το όνομά σου, την πόλη σου, τη δουλειά ή τις σπουδές σου και εξήγησε γιατί μαθαίνεις ελληνικά.',
          minWords: 20, maxWords: 50, timeLimitMinutes: 5,
          cefrDescriptor: 'Μπορεί να γράψει απλές μεμονωμένες φράσεις για τον εαυτό του και τον τόπο όπου ζει.'
        },
        {
          id: 'write_el_a2', band: 'A2', targetBands: ['A2'], language: 'el', register: 'informal',
          title: 'Αφήγηση πρόσφατης εμπειρίας',
          instruction: 'Γράψε ένα email σε φίλο για ένα ταξίδι ή ένα πρόσφατο γεγονός.',
          prompt: 'Περιέγραψε ένα ταξίδι ή ένα πρόσφατο γεγονός: πού πήγες, με ποιον, τι έκανες και αν σου άρεσε.',
          minWords: 50, maxWords: 90, timeLimitMinutes: 10,
          cefrDescriptor: 'Μπορεί να γράψει μια σειρά απλών φράσεων με συνδέσμους όπως «και», «αλλά» και «επειδή».'
        },
        {
          id: 'write_el_b1', band: 'B1', targetBands: ['B1'], language: 'el', register: 'neutral',
          title: 'Άποψη και συμβουλή',
          instruction: 'Απάντησε σε μια συζήτηση σε φόρουμ της κοινότητας.',
          prompt: 'Ένας φίλος διστάζει να πάρει ένα έτος διακοπής πριν ξεκινήσει τις σπουδές του. Εξήγησε τα πλεονεκτήματα και τα μειονεκτήματα αυτής της επιλογής και δώσε τη δική σου σύσταση.',
          minWords: 100, maxWords: 160, timeLimitMinutes: 15,
          cefrDescriptor: 'Μπορεί να γράψει απλό συνεκτικό κείμενο για οικεία θέματα συνδέοντας σύντομα στοιχεία σε γραμμική σειρά.'
        },
        {
          id: 'write_el_b2', band: 'B2', targetBands: ['B2'], language: 'el', register: 'formal',
          title: 'Επίσημη επιστολή / πρόταση',
          instruction: 'Γράψε επίσημη επιστολή στον δήμο σου.',
          prompt: 'Πρότεινε τη δημιουργία πάρκου ή πεζόδρομου στη γειτονιά σου. Παρουσίασε τεκμηριωμένα επιχειρήματα για κοινωνικά, υγειονομικά και περιβαλλοντικά οφέλη και απάντησε σε πιθανές αντιρρήσεις των καταστημάτων.',
          minWords: 180, maxWords: 240, timeLimitMinutes: 20,
          cefrDescriptor: 'Μπορεί να γράψει σαφή και λεπτομερή κείμενα για ποικίλα θέματα και να συνθέτει πληροφορίες και επιχειρήματα.'
        },
        {
          id: 'write_el_c1', band: 'C1', targetBands: ['C1'], language: 'el', register: 'formal',
          title: 'Αναλυτική έκθεση',
          instruction: 'Γράψε σύντομη αναλυτική έκθεση για επαγγελματικό κοινό.',
          prompt: 'Ανάλυσε τον αντίκτυπο της τεχνητής νοημοσύνης και της αυτοματοποίησης στην εξ αποστάσεως εργασία. Συζήτησε τα οφέλη στην παραγωγικότητα και τους κινδύνους για την εταιρική κουλτούρα και την ευημερία των εργαζομένων, προτείνοντας συγκεκριμένα μέτρα για τη διοίκηση.',
          minWords: 250, maxWords: 320, timeLimitMinutes: 25,
          cefrDescriptor: 'Μπορεί να εκφράζεται με σαφήνεια και ακρίβεια σε καλά δομημένο κείμενο, προσαρμόζοντας το ύφος στον αποδέκτη.'
        },
        {
          id: 'write_el_c2', band: 'C2', targetBands: ['C2'], language: 'el', register: 'formal',
          title: 'Κριτική σύνθεση',
          instruction: 'Γράψε κριτικό δοκίμιο ή αξιολόγηση δημόσιας πολιτικής.',
          prompt: 'Ανάλυσε την ένταση ανάμεσα στην τεχνολογική επιτάχυνση, την προστασία των προσωπικών δεδομένων και την ατομική αυτονομία στις σύγχρονες δημοκρατίες. Αξιολόγησε την επάρκεια των υφιστάμενων ρυθμιστικών πλαισίων με ακριβές ύφος και εκλεπτυσμένη επιχειρηματολογία.',
          minWords: 350, maxWords: 450, timeLimitMinutes: 30,
          cefrDescriptor: 'Μπορεί να γράφει σύνθετα, ρέοντα και καλά δομημένα κείμενα με κατάλληλο και αποτελεσματικό ύφος.'
        }
      ]
    },

    speaking: {
      fr: [
        { id: 'speak_fr_01_intro', band: 'A1', stage: 'personal_intro', language: 'fr',
          title: 'Partie 1 : présentation personnelle', instruction: 'Enregistrez une courte présentation personnelle.',
          prompt: 'Indiquez votre nom, votre ville d’origine, les langues que vous parlez et votre objectif principal pour ce test.',
          prepSeconds: 15, recordSeconds: 45,
          cefrDescriptor: 'Peut produire des phrases simples et isolées sur des personnes et des lieux.' },
        { id: 'speak_fr_02_routine', band: 'A2', stage: 'short_responses', language: 'fr',
          title: 'Partie 2 : vie quotidienne', instruction: 'Répondez à la consigne avec précision.',
          prompt: 'Décrivez une journée ordinaire, du matin au soir. Quel est votre moment préféré de la journée et pourquoi ?',
          prepSeconds: 20, recordSeconds: 60,
          cefrDescriptor: 'Peut décrire avec des phrases simples sa routine, ses habitudes et ses goûts.' },
        { id: 'speak_fr_03_story', band: 'B1', stage: 'narration', language: 'fr',
          title: 'Partie 3 : description et récit', instruction: 'Racontez une expérience ou un événement.',
          prompt: 'Racontez une situation inattendue ou un petit problème rencontré récemment (en voyage, au travail ou à la maison). Comment avez-vous réagi et quel a été le résultat ?',
          prepSeconds: 30, recordSeconds: 90,
          cefrDescriptor: 'Peut raconter une expérience en reliant des éléments dans un récit simple et cohérent.' },
        { id: 'speak_fr_04_opinion', band: 'B2', stage: 'opinion_argument', language: 'fr',
          title: 'Partie 4 : exprimer et défendre une opinion', instruction: 'Présentez un argumentaire structuré.',
          prompt: 'Certains estiment que le télétravail augmente la productivité, d’autres que la présence au bureau est indispensable à l’innovation. Discutez des deux points de vue et donnez votre position argumentée.',
          prepSeconds: 45, recordSeconds: 120,
          cefrDescriptor: 'Peut développer un point de vue sur un sujet complexe en pesant les arguments pour et contre.' },
        { id: 'speak_fr_05_discussion', band: 'C1', stage: 'clarification_spontaneous', language: 'fr',
          title: 'Partie 5 : réponse spontanée et discussion', instruction: 'Répondez spontanément à une objection abstraite.',
          prompt: 'Imaginez que quelqu’un affirme que la technologie a affaibli les liens humains au lieu de les renforcer. Répondez à cet argument, clarifiez votre position et proposez une perspective nuancée.',
          prepSeconds: 30, recordSeconds: 120,
          cefrDescriptor: 'Peut répondre avec aisance à des arguments complexes et défendre une position nuancée.' }
      ],

      it: [
        { id: 'speak_it_01_intro', band: 'A1', stage: 'personal_intro', language: 'it',
          title: 'Parte 1: presentazione personale', instruction: 'Registra una breve presentazione personale.',
          prompt: 'Indica il tuo nome, la tua città di origine, le lingue che parli e il tuo obiettivo principale per questa valutazione.',
          prepSeconds: 15, recordSeconds: 45,
          cefrDescriptor: 'Sa produrre frasi semplici e isolate su persone e luoghi.' },
        { id: 'speak_it_02_routine', band: 'A2', stage: 'short_responses', language: 'it',
          title: 'Parte 2: vita quotidiana', instruction: 'Rispondi alla consegna con precisione.',
          prompt: 'Descrivi una giornata normale, dalla mattina alla sera. Qual è il tuo momento preferito della giornata e perché?',
          prepSeconds: 20, recordSeconds: 60,
          cefrDescriptor: 'Sa descrivere con frasi semplici la propria routine, le abitudini e i gusti.' },
        { id: 'speak_it_03_story', band: 'B1', stage: 'narration', language: 'it',
          title: 'Parte 3: descrizione e racconto', instruction: 'Racconta un’esperienza o un evento.',
          prompt: 'Racconta una situazione inattesa o un piccolo problema avvenuto di recente (in viaggio, al lavoro o a casa). Come hai reagito e com’è finita?',
          prepSeconds: 30, recordSeconds: 90,
          cefrDescriptor: 'Sa raccontare un’esperienza collegando gli elementi in un racconto semplice e coerente.' },
        { id: 'speak_it_04_opinion', band: 'B2', stage: 'opinion_argument', language: 'it',
          title: 'Parte 4: esprimere e difendere un’opinione', instruction: 'Presenta un’argomentazione strutturata.',
          prompt: 'Alcuni ritengono che il lavoro da remoto aumenti la produttività, altri che la presenza in ufficio sia indispensabile per l’innovazione. Discuti entrambi i punti di vista e argomenta la tua posizione.',
          prepSeconds: 45, recordSeconds: 120,
          cefrDescriptor: 'Sa sviluppare un punto di vista su un tema complesso valutando argomenti a favore e contro.' },
        { id: 'speak_it_05_discussion', band: 'C1', stage: 'clarification_spontaneous', language: 'it',
          title: 'Parte 5: risposta spontanea e discussione', instruction: 'Rispondi spontaneamente a un’obiezione astratta.',
          prompt: 'Immagina che qualcuno sostenga che la tecnologia ha indebolito i legami umani invece di rafforzarli. Rispondi a questo argomento, chiarisci la tua posizione e offri una prospettiva articolata.',
          prepSeconds: 30, recordSeconds: 120,
          cefrDescriptor: 'Sa rispondere con disinvoltura ad argomentazioni complesse e sostenere una posizione articolata.' }
      ],

      ru: [
        { id: 'speak_ru_01_intro', band: 'A1', stage: 'personal_intro', language: 'ru',
          title: 'Часть 1: рассказ о себе', instruction: 'Запишите короткий рассказ о себе.',
          prompt: 'Назовите своё имя, родной город, языки, на которых вы говорите, и главную цель этого теста.',
          prepSeconds: 15, recordSeconds: 45,
          cefrDescriptor: 'Может произносить простые отдельные фразы о людях и местах.' },
        { id: 'speak_ru_02_routine', band: 'A2', stage: 'short_responses', language: 'ru',
          title: 'Часть 2: повседневная жизнь', instruction: 'Ответьте на задание подробно.',
          prompt: 'Опишите обычный день от утра до вечера. Какая часть дня вам нравится больше всего и почему?',
          prepSeconds: 20, recordSeconds: 60,
          cefrDescriptor: 'Может простыми фразами описывать свой распорядок, привычки и предпочтения.' },
        { id: 'speak_ru_03_story', band: 'B1', stage: 'narration', language: 'ru',
          title: 'Часть 3: описание и рассказ', instruction: 'Расскажите о случае или событии.',
          prompt: 'Расскажите о неожиданной ситуации или небольшой проблеме, которая случилась недавно (в поездке, на работе или дома). Как вы поступили и чем всё закончилось?',
          prepSeconds: 30, recordSeconds: 90,
          cefrDescriptor: 'Может рассказать о пережитом, связывая элементы в простое и связное повествование.' },
        { id: 'speak_ru_04_opinion', band: 'B2', stage: 'opinion_argument', language: 'ru',
          title: 'Часть 4: мнение и аргументация', instruction: 'Представьте структурированную аргументацию.',
          prompt: 'Одни считают, что удалённая работа повышает производительность, другие — что присутствие в офисе необходимо для инноваций. Обсудите обе точки зрения и обоснуйте свою позицию.',
          prepSeconds: 45, recordSeconds: 120,
          cefrDescriptor: 'Может развивать точку зрения по сложной теме, взвешивая аргументы за и против.' },
        { id: 'speak_ru_05_discussion', band: 'C1', stage: 'clarification_spontaneous', language: 'ru',
          title: 'Часть 5: спонтанный ответ и дискуссия', instruction: 'Спонтанно ответьте на абстрактное возражение.',
          prompt: 'Представьте, что кто-то утверждает, будто технологии ослабили человеческие связи, а не укрепили их. Ответьте на этот аргумент, уточните свою позицию и предложите взвешенный взгляд.',
          prepSeconds: 30, recordSeconds: 120,
          cefrDescriptor: 'Может свободно отвечать на сложные аргументы и отстаивать взвешенную позицию.' }
      ],

      el: [
        { id: 'speak_el_01_intro', band: 'A1', stage: 'personal_intro', language: 'el',
          title: 'Μέρος 1: προσωπική παρουσίαση', instruction: 'Ηχογράφησε μια σύντομη προσωπική παρουσίαση.',
          prompt: 'Πες το όνομά σου, την πόλη καταγωγής σου, τις γλώσσες που μιλάς και τον κύριο στόχο σου για αυτή την αξιολόγηση.',
          prepSeconds: 15, recordSeconds: 45,
          cefrDescriptor: 'Μπορεί να παράγει απλές μεμονωμένες φράσεις για ανθρώπους και τόπους.' },
        { id: 'speak_el_02_routine', band: 'A2', stage: 'short_responses', language: 'el',
          title: 'Μέρος 2: καθημερινή ζωή', instruction: 'Απάντησε στην εκφώνηση με λεπτομέρειες.',
          prompt: 'Περιέγραψε μια συνηθισμένη μέρα, από το πρωί έως το βράδυ. Ποια στιγμή της ημέρας σου αρέσει περισσότερο και γιατί;',
          prepSeconds: 20, recordSeconds: 60,
          cefrDescriptor: 'Μπορεί να περιγράφει με απλές φράσεις τη ρουτίνα, τις συνήθειες και τις προτιμήσεις του.' },
        { id: 'speak_el_03_story', band: 'B1', stage: 'narration', language: 'el',
          title: 'Μέρος 3: περιγραφή και αφήγηση', instruction: 'Αφηγήσου μια εμπειρία ή ένα γεγονός.',
          prompt: 'Αφηγήσου μια απρόσμενη κατάσταση ή ένα μικρό πρόβλημα που συνάντησες πρόσφατα (σε ταξίδι, στη δουλειά ή στο σπίτι). Πώς αντέδρασες και πώς κατέληξε;',
          prepSeconds: 30, recordSeconds: 90,
          cefrDescriptor: 'Μπορεί να αφηγηθεί μια εμπειρία συνδέοντας στοιχεία σε απλή και συνεκτική ιστορία.' },
        { id: 'speak_el_04_opinion', band: 'B2', stage: 'opinion_argument', language: 'el',
          title: 'Μέρος 4: έκφραση και υπεράσπιση άποψης', instruction: 'Παρουσίασε δομημένη επιχειρηματολογία.',
          prompt: 'Κάποιοι πιστεύουν ότι η τηλεργασία αυξάνει την παραγωγικότητα, άλλοι ότι η παρουσία στο γραφείο είναι απαραίτητη για την καινοτομία. Συζήτησε και τις δύο απόψεις και τεκμηρίωσε τη θέση σου.',
          prepSeconds: 45, recordSeconds: 120,
          cefrDescriptor: 'Μπορεί να αναπτύσσει άποψη σε σύνθετο θέμα σταθμίζοντας επιχειρήματα υπέρ και κατά.' },
        { id: 'speak_el_05_discussion', band: 'C1', stage: 'clarification_spontaneous', language: 'el',
          title: 'Μέρος 5: αυθόρμητη απάντηση και συζήτηση', instruction: 'Απάντησε αυθόρμητα σε μια αφηρημένη αντίρρηση.',
          prompt: 'Φαντάσου ότι κάποιος ισχυρίζεται πως η τεχνολογία αποδυνάμωσε τις ανθρώπινες σχέσεις αντί να τις ενισχύσει. Απάντησε σε αυτό το επιχείρημα, αποσαφήνισε τη θέση σου και πρότεινε μια πιο σύνθετη οπτική.',
          prepSeconds: 30, recordSeconds: 120,
          cefrDescriptor: 'Μπορεί να απαντά με άνεση σε σύνθετα επιχειρήματα και να υποστηρίζει μια διαφοροποιημένη θέση.' }
      ]
    }
  };

  if (typeof window !== 'undefined') {
    window.COSY_PLACEMENT_PROMPTS_ML = PROMPTS;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROMPTS;
  }
}(typeof self !== 'undefined' ? self : this));

      const TENSES_EX = [
        // PP vs Past Simple
        {
          b: 'Your son',
          a: 'a great time — he joined every game!',
          c: 'has had',
          w: ['had', 'was having', 'have had'],
          grp: 'pp',
          tip: 'Present Perfect: risultato di oggi, ancora rilevante ora.',
        },
        {
          b: 'She',
          a: "so shy at last year's party, but now she's changed!",
          c: 'was',
          w: ['has been', 'is', 'were'],
          grp: 'pp',
          tip: "Past Simple: 'last year's party' = momento preciso nel passato.",
        },
        {
          b: 'Look — he',
          a: 'his face painted for the very first time!',
          c: 'has just had',
          w: ['just had', 'is having', 'had'],
          grp: 'pp',
          tip: "'just' + Present Perfect = azione appena successa, effetto visibile ora.",
        },
        {
          b: 'We',
          a: "out of balloons at last Saturday's party.",
          c: 'ran',
          w: ['have run', 'run', 'are running'],
          grp: 'pp',
          tip: "Past Simple: 'last Saturday' = momento preciso.",
        },
        {
          b: 'She',
          a: 'here before — she already knows all our games.',
          c: 'has been',
          w: ['was', 'came', 'went'],
          grp: 'pp',
          tip: 'Present Perfect: esperienza passata senza momento preciso.',
        },
        {
          b: 'I already',
          a: "the parents about the allergy — don't worry.",
          c: 'have told',
          w: ['told', 'tell', 'was telling'],
          grp: 'pp',
          tip: "'already' + Present Perfect = azione completata con effetto ora.",
        },
        {
          b: 'The party',
          a: 'at 4pm and the kids were amazing.',
          c: 'started',
          w: ['has started', 'start', 'is starting'],
          grp: 'pp',
          tip: 'Past Simple: momento specifico (at 4pm).',
        },
        {
          b: 'He',
          a: 'about coming to the party all week!',
          c: 'has been talking',
          w: ['was talking', 'talked', 'talks'],
          grp: 'pp',
          tip: 'Present Perfect Continuous: attività che dura fino a ora.',
        },
        {
          b: 'I',
          a: 'that game with a different group last month.',
          c: 'tried',
          w: ['have tried', 'try', 'am trying'],
          grp: 'pp',
          tip: "Past Simple: 'last month' = momento preciso.",
        },
        {
          b: 'He',
          a: 'over twice but keeps getting up — what a champ!',
          c: 'has fallen',
          w: ['fell', 'falls', 'is falling'],
          grp: 'pp',
          tip: 'Present Perfect: risultato visibile nel momento attuale.',
        },
        {
          b: 'We',
          a: 'this event every summer for five years now.',
          c: 'have been running',
          w: ['run', 'ran', 'are running'],
          grp: 'pp',
          tip: 'Present Perfect Continuous: attività che continua fino a oggi.',
        },
        {
          b: 'She',
          a: 'her badge during the last game — did you see it?',
          c: 'lost',
          w: ['has lost', 'loses', 'is losing'],
          grp: 'pp',
          tip: "Past Simple: 'during the last game' = momento preciso.",
        },
        {
          b: 'Good news — he',
          a: "his shyness! He's playing with everyone now.",
          c: 'has overcome',
          w: ['overcame', 'overcoming', 'overcomes'],
          grp: 'pp',
          tip: 'Present Perfect: risultato visibile nel momento attuale.',
        },
        {
          b: 'They',
          a: "each other before — they met at last month's event.",
          c: 'had never met',
          w: ['never met', 'have never met', "didn't meet"],
          grp: 'pp',
          tip: "Past Simple nel contesto: evento specifico 'last month'.",
        },
        {
          b: 'She',
          a: "so much already — I'm really impressed!",
          c: 'has improved',
          w: ['improved', 'improves', 'is improving'],
          grp: 'pp',
          tip: 'Present Perfect: miglioramento fino a questo momento.',
        },
        // Continuous vs Simple
        {
          b: 'Shh — he',
          a: "right now, let's not wake him up.",
          c: 'is sleeping',
          w: ['sleeps', 'sleep', 'was sleeping'],
          grp: 'cont',
          tip: 'Continuous: sta succedendo proprio adesso.',
        },
        {
          b: 'We always',
          a: 'into groups before the main activity.',
          c: 'split',
          w: ['are splitting', 'splitting', 'splits'],
          grp: 'cont',
          tip: "Simple: routine/abitudine ('always').",
        },
        {
          b: 'Look! She',
          a: 'the steps perfectly now!',
          c: 'is doing',
          w: ['does', 'do', 'did'],
          grp: 'cont',
          tip: 'Continuous: azione in corso in questo momento.',
        },
        {
          b: 'He usually',
          a: "to warm up quickly, but today it's taking longer.",
          c: 'manages',
          w: ['is managing', 'manage', 'managed'],
          grp: 'cont',
          tip: "Simple: abitudine ('usually').",
        },
        {
          b: 'The kids',
          a: 'so much fun right now — listen to them!',
          c: 'are having',
          w: ['have', 'had', 'has'],
          grp: 'cont',
          tip: "Continuous: in corso in questo momento ('right now').",
        },
        {
          b: 'She',
          a: 'the face painting station every weekend.',
          c: 'runs',
          w: ['is running', 'run', 'running'],
          grp: 'cont',
          tip: 'Simple: fatto regolare/abitudine.',
        },
        {
          b: 'What',
          a: "he doing? He's not supposed to climb there!",
          c: 'is',
          w: ['does', 'was', 'did'],
          grp: 'cont',
          tip: 'Continuous: azione in corso ora.',
        },
        {
          b: 'We',
          a: 'always make sure parents have our number.',
          c: 'make',
          w: ['are making', 'making', 'made'],
          grp: 'cont',
          tip: 'Simple: politica/procedura sempre vera.',
        },
        {
          b: 'He',
          a: 'to the music — he loves this song!',
          c: 'is dancing',
          w: ['dances', 'dance', 'danced'],
          grp: 'cont',
          tip: 'Continuous: azione visibile in questo momento.',
        },
        {
          b: 'They',
          a: 'louder and louder — we need to calm them down.',
          c: 'are getting',
          w: ['get', 'got', 'gets'],
          grp: 'cont',
          tip: "Continuous: cambiamento in corso ('getting louder').",
        },
        {
          b: 'Sorry — she',
          a: 'right now, can you give me a second?',
          c: 'is crying',
          w: ['cries', 'cry', 'cried'],
          grp: 'cont',
          tip: 'Continuous: sta succedendo in questo momento.',
        },
        {
          b: 'He',
          a: 'really well with all the kids at these events.',
          c: 'gets on',
          w: ['is getting on', 'got on', 'getting on'],
          grp: 'cont',
          tip: 'Simple: caratteristica stabile della persona.',
        },
        {
          b: 'They',
          a: "in two separate groups today — it's working well.",
          c: 'are working',
          w: ['work', 'worked', 'works'],
          grp: 'cont',
          tip: 'Continuous: scelta temporanea solo per oggi.',
        },
        {
          b: 'I',
          a: "the activity area before each event — it's my routine.",
          c: 'check',
          w: ['am checking', 'checking', 'am checked'],
          grp: 'cont',
          tip: 'Simple: routine abitudinaria.',
        },
        {
          b: 'She',
          a: "face painting for children's events as a job.",
          c: 'does',
          w: ['is doing', 'do', 'doing'],
          grp: 'cont',
          tip: 'Simple: mestiere/occupazione abituale.',
        },
        // Used to / Would / Past Simple
        {
          b: 'He',
          a: 'be really shy, but now he loves these events.',
          c: 'used to',
          w: ['would', 'was', 'use to'],
          grp: 'used',
          tip: "'used to': stato passato (be = stato), cambiato ora.",
        },
        {
          b: 'Every summer we',
          a: 'start with the outdoor games — it was our tradition.',
          c: 'would',
          w: ['used to', 'were', 'started'],
          grp: 'used',
          tip: "'would': azione ripetuta nel passato (tradizione nostalgia).",
        },
        {
          b: 'She',
          a: "to every party last year, but this year she's busy.",
          c: 'came',
          w: ['used to come', 'would come', 'comes'],
          grp: 'used',
          tip: "Past Simple: 'last year' = periodo definito, non più vera.",
        },
        {
          b: 'I',
          a: "hate doing face painting — now it's my favourite part!",
          c: 'used to',
          w: ['would', 'did', 'hated'],
          grp: 'used',
          tip: "'used to': stato mentale passato (hate = stato, non azione).",
        },
        {
          b: 'We',
          a: 'always finish with a big group game — the kids loved it.',
          c: 'would',
          w: ['used to', 'did', 'finished'],
          grp: 'used',
          tip: "'would': azione ripetuta nel passato (routine ricordata).",
        },
        {
          b: 'She',
          a: 'her first balloon animal last week — everyone cheered!',
          c: 'made',
          w: ['used to make', 'would make', 'makes'],
          grp: 'used',
          tip: "Past Simple: evento specifico ('last week'), una volta sola.",
        },
        {
          b: 'He',
          a: "be so small — look at him now, he's running the show!",
          c: 'used to',
          w: ['would', 'was being', 'is'],
          grp: 'used',
          tip: "'used to': descrivere come era prima (stato).",
        },
        {
          b: 'Every Friday we',
          a: 'set up the hall together — it was our ritual.',
          c: 'would',
          w: ['used to', 'had', 'set up'],
          grp: 'used',
          tip: "'would': azione ripetuta nel passato.",
        },
        {
          b: 'She',
          a: 'at 3pm but stayed until 6pm in the end.',
          c: 'arrived',
          w: ['used to arrive', 'would arrive', 'arrives'],
          grp: 'used',
          tip: 'Past Simple: evento specifico, una volta sola.',
        },
        {
          b: 'They',
          a: "know each other, but now they're best friends!",
          c: "didn't use to",
          w: ["wouldn't", "don't", "didn't"],
          grp: 'used',
          tip: "'used to' negativo: situazione passata ora completamente cambiata.",
        },
        {
          b: 'I',
          a: "forget everyone's names, but now I keep a list!",
          c: 'used to',
          w: ['would', 'forgot', 'use to'],
          grp: 'used',
          tip: "'used to': abitudine passata ora cambiata.",
        },
        {
          b: 'We',
          a: 'play hide and seek every session — the kids always asked.',
          c: 'would',
          w: ['used to', 'played', 'use to play'],
          grp: 'used',
          tip: "'would': azione ripetuta/tipica nel passato.",
        },
        {
          b: 'He',
          a: 'so upset when it was time to leave — he cried.',
          c: 'was',
          w: ['used to be', 'would be', 'got'],
          grp: 'used',
          tip: 'Past Simple: reazione specifica in quel momento.',
        },
        {
          b: 'We',
          a: 'the event at 2pm but had to move it last minute.',
          c: 'planned',
          w: ['used to plan', 'would plan', 'were planning'],
          grp: 'used',
          tip: "Past Simple: piano specifico (non un'abitudine).",
        },
        // Future
        {
          b: "Don't worry,",
          a: 'I ___ help you set up the balloons right now.',
          c: 'will',
          w: ['am going to', 'would', 'was going to'],
          grp: 'future',
          tip: "'will': decisione presa in questo momento spontaneamente.",
        },
        {
          b: 'We',
          a: "___ do face painting at 3 — it's already planned.",
          c: 'are going to',
          w: ['will', 'would', 'were going to'],
          grp: 'future',
          tip: "'going to': piano già deciso prima di parlare.",
        },
        {
          b: 'Look at those clouds —',
          a: "it ___ rain. Let's go inside!",
          c: 'is going to',
          w: ['will', 'would', 'is raining'],
          grp: 'future',
          tip: "'going to': evento futuro quasi certo, lo vedi arrivare.",
        },
        {
          b: 'At 2pm tomorrow',
          a: 'we ___ rest in the garden.',
          c: 'will be resting',
          w: ['rest', 'are going to rest', 'will rest'],
          grp: 'future',
          tip: 'Future Continuous: azione in corso a un momento preciso futuro.',
        },
        {
          b: 'By the time you pick her up,',
          a: "we ___ everything — don't worry!",
          c: 'will have finished',
          w: ['will finish', 'are finishing', 'have finished'],
          grp: 'future',
          tip: 'Future Perfect: completato ENTRO un momento futuro.',
        },
        {
          b: 'I promise',
          a: 'it ___ a great afternoon for the kids!',
          c: 'will be',
          w: ['is going to be', 'is being', 'was'],
          grp: 'future',
          tip: "'will': promessa fatta nel momento in cui si parla.",
        },
        {
          b: 'We',
          a: '___ start the games once everyone arrives.',
          c: 'are going to',
          w: ['will', 'would', 'shall'],
          grp: 'future',
          tip: "'going to': piano concordato in anticipo.",
        },
        // Conditional
        {
          b: 'If it rains,',
          a: 'we ___ play inside instead.',
          c: 'would',
          w: ['will', 'are going to', 'were'],
          grp: 'cond',
          tip: '2nd conditional: situazione ipotetica, non sicura.',
        },
        {
          b: 'If I had known about the allergy,',
          a: 'I ___ that food to him.',
          c: 'would not have given',
          w: ['will not give', 'did not give', 'was not giving'],
          grp: 'cond',
          tip: '3rd conditional: impossibile nel passato — non è successo.',
        },
        {
          b: 'If you asked me,',
          a: 'I ___ the outdoor games are better in summer.',
          c: 'would say',
          w: ['will say', 'said', 'am saying'],
          grp: 'cond',
          tip: '2nd conditional: opinione ipotetica educata.',
        },
        {
          b: 'If a child was hurt,',
          a: 'we ___ you immediately.',
          c: 'would call',
          w: ['will call', 'called', 'are calling'],
          grp: 'cond',
          tip: '2nd conditional: procedura in caso di emergenza.',
        },
        {
          b: 'If you had called earlier,',
          a: 'we ___ for her arrival.',
          c: 'would have prepared',
          w: ['would prepare', 'will have prepared', 'had prepared'],
          grp: 'cond',
          tip: '3rd conditional: passato impossibile, con rimpianto.',
        },
        {
          b: 'If I had more staff,',
          a: 'we ___ so many more activities.',
          c: 'would do',
          w: ['will do', 'did', 'are doing'],
          grp: 'cond',
          tip: '2nd conditional: situazione ipotetica presente.',
        },
      ]

      // ============================================================
      // TEMPI VERBALI — FR e ES
      // ============================================================
      const VERB_TENSES_FR = [
        {
          grp: 'past',
          icon: '✅',
          color: 'var(--accent2)',
          name: 'Passé Composé',
          form: 'avoir / être + participe passé',
          when: 'Action terminée dans le passé — équivaut au Past Simple ET au Present Perfect anglais',
          examples: [
            'Il a adoré la fête!',
            'Nous avons joué toute la matinée',
            'Elle est arrivée en retard',
          ],
          animator:
            'Faire le bilan aux parents: "Il a bien mangé, il a joué, il a dormi"',
          phonetic:
            '👂 "il a joué" → liaison: "eel-a-jway" — le A se lie toujours',
        },
        {
          grp: 'past',
          icon: '⏸️',
          color: 'var(--accent2)',
          name: 'Imparfait',
          form: 'radical (nous) + -ais/-ais/-ait/-ions/-iez/-aient',
          when: 'Action en cours dans le passé, habitude passée, description — comme le Past Continuous anglais',
          examples: [
            'Il pleurait quand tu es arrivé',
            'Avant, on jouait toujours dehors',
            'Elle était très timide',
          ],
          animator:
            '"Il dormait quand les parents sont arrivés" — expliquer ce qui se passait',
          phonetic: '👂 "jouait" → "zhway" — le T final est muet, toujours',
        },
        {
          grp: 'present',
          icon: '⏱️',
          color: 'var(--accent)',
          name: 'Présent',
          form: '-er: -e/-es/-e/-ons/-ez/-ent  |  être: suis/es/est/sommes/êtes/sont',
          when: 'Actions habituelles, états, vérités générales — le quotidien',
          examples: [
            'Je travaille avec des enfants',
            'Nous jouons ensemble',
            'Il aime les activités',
          ],
          animator:
            '"Je suis animateur, je travaille avec des enfants de 3 à 12 ans"',
          phonetic: '👂 "nous jouons" → liaison nasale — "noo-jwan"',
        },
        {
          grp: 'present',
          icon: '⚡',
          color: 'var(--accent)',
          name: 'Présent Continu (être en train de)',
          form: 'être en train de + infinitif',
          when: 'Action en cours EN CE MOMENT — équivalent du Present Continuous anglais',
          examples: [
            'Il est en train de manger',
            'Nous sommes en train de jouer',
            'Elle est en train de dormir',
          ],
          animator:
            '"Il est en train de faire du coloriage — dans 5 minutes il sera libre"',
          phonetic:
            '👂 "en train de" → "an-tran-duh" — tout fusionné dans le parlé rapide',
        },
        {
          grp: 'future',
          icon: '⏭️',
          color: 'var(--accent3)',
          name: 'Futur Proche (aller + inf.)',
          form: 'aller (conjugué) + infinitif',
          when: 'Action future planifiée ou imminente — très courant dans le parlé quotidien',
          examples: [
            'On va commencer dans 5 minutes!',
            'Il va adorer ce jeu',
            'Je vais vous appeler',
          ],
          animator: '"On va faire un jeu maintenant!" — annoncer aux enfants',
          phonetic: '👂 "on va jouer" → "on-va-jway" — fluide et rapide',
        },
        {
          grp: 'future',
          icon: '🎯',
          color: 'var(--accent3)',
          name: 'Futur Simple',
          form: 'infinitif + -ai/-as/-a/-ons/-ez/-ont',
          when: 'Promesses, prévisions, événements futurs certains ou formels',
          examples: [
            "Je vous appellerai s'il y a un problème",
            'Ce sera super!',
            'Nous jouerons dehors',
          ],
          animator:
            '"Je vous appellerai dès qu\'il est prêt" — rassurer les parents',
          phonetic:
            '👂 "appellerai" → accent sur la dernière syllabe — "ah-pel-uh-REH"',
        },
        {
          grp: 'conditional',
          icon: '❓',
          color: 'var(--success)',
          name: 'Conditionnel Présent',
          form: 'infinitif + -ais/-ais/-ait/-ions/-iez/-aient',
          when: 'Situations hypothétiques, demandes très polies, conseils',
          examples: [
            'Pourriez-vous signer ici?',
            'Je serais ravi de vous aider',
            'On pourrait essayer dehors?',
          ],
          animator:
            '"Pourriez-vous arriver à 14h?" — demande polie aux parents',
          phonetic: '👂 "je voudrais" → "zhuh-voo-dreh" — très courant et poli',
        },
      ]
      const TENSES_EX_FR = [
        {
          b: 'Il',
          a: 'quand tu es arrivé — il a fallu le consoler.',
          c: 'pleurait',
          w: ['a pleuré', 'pleure', 'pleurera'],
          grp: 'pp',
          tip: 'Imparfait: action en cours (arrière-plan) quand tu es arrivé (1er plan).',
        },
        {
          b: 'Elle',
          a: 'toute la journée — elle est épuisée maintenant!',
          c: 'a joué',
          w: ['jouait', 'joue', 'jouera'],
          grp: 'pp',
          tip: 'Passé Composé: action terminée avec résultat visible maintenant.',
        },
        {
          b: 'Quand je suis arrivé, les enfants',
          a: 'dans le jardin.',
          c: 'jouaient',
          w: ['ont joué', 'jouent', 'joueront'],
          grp: 'pp',
          tip: "Imparfait: action en cours au moment d'une autre action (passé composé).",
        },
        {
          b: 'Il',
          a: "super bien aujourd'hui — vraiment impressionnant!",
          c: 'a chanté',
          w: ['chantait', 'chante', 'chantait bien'],
          grp: 'pp',
          tip: "Passé Composé: événement spécifique d'aujourd'hui, terminé.",
        },
        {
          b: 'Avant, on',
          a: "toujours finir avec une grande danse — c'était notre tradition.",
          c: 'aimait',
          w: ['a aimé', 'aime', 'aimera'],
          grp: 'pp',
          tip: "Imparfait: habitude répétée dans le passé ('avant').",
        },
        {
          b: "D'habitude il",
          a: "avant le goûter, mais aujourd'hui c'est différent.",
          c: 'dort',
          w: ['a dormi', 'dormait', 'dormira'],
          grp: 'cont',
          tip: "Présent: routine habituelle ('d\'habitude').",
        },
        {
          b: 'Regarde — elle',
          a: 'les étapes à la perfection!',
          c: 'est en train de faire',
          w: ['fait', 'a fait', 'fera'],
          grp: 'cont',
          tip: 'Être en train de: action visible en cours en ce moment précis.',
        },
        {
          b: "Ne t'inquiète pas, je",
          a: "te rappeler dès qu'il est prêt.",
          c: 'vais',
          w: ['ai', 'suis', 'aurais'],
          grp: 'future',
          tip: "Futur proche (aller + inf.): plan décidé à l'avance.",
        },
        {
          b: "S'il pleut,",
          a: "jouer à l'intérieur.",
          c: 'on va',
          w: ['on joue', 'on jouait', 'on a joué'],
          grp: 'future',
          tip: 'Futur proche: plan prévu pour faire face à la situation.',
        },
        {
          b: '',
          a: "vous signer ici, s'il vous plaît?",
          c: 'Pourriez',
          w: ['Pouvez', 'Pourrez', 'Pouviez'],
          grp: 'cond',
          tip: "Conditionnel: demande très polie (plus poli que 'pouvez-vous').",
        },
        {
          b: "Si j'avais plus d'aide,",
          a: "plus d'activités.",
          c: 'on ferait',
          w: ['on fera', 'on fait', 'on faisait'],
          grp: 'cond',
          tip: 'Conditionnel: hypothèse présente — si + imparfait → conditionnel.',
        },
      ]

      const VERB_TENSES_ES = [
        {
          grp: 'past',
          icon: '✅',
          color: 'var(--accent2)',
          name: 'Pretérito Indefinido',
          form: '-ar: -é/-aste/-ó/-amos/-asteis/-aron',
          when: 'Acción completada en un momento específico del pasado — como el Past Simple inglés',
          examples: [
            'La fiesta empezó a las 3',
            'Lo pasó genial — jugó con todos',
            'Se cayó pero se levantó',
          ],
          animator:
            '"Hoy se lo pasó genial — jugó, comió y se divirtió mucho" — contarles a los padres',
          phonetic:
            '👂 "jugó" → acento fuerte en la Ó final — sin acento cambia el significado',
        },
        {
          grp: 'past',
          icon: '⏸️',
          color: 'var(--accent2)',
          name: 'Pretérito Imperfecto',
          form: '-ar: -aba/-abas/-aba/-ábamos/-abais/-aban',
          when: 'Acción en progreso en el pasado, hábitos pasados, descripciones — como el Past Continuous inglés',
          examples: [
            'Lloraba cuando llegaste',
            'Antes siempre jugábamos fuera',
            'Era muy tímido de pequeño',
          ],
          animator:
            '"Cuando llegaste, estaba durmiendo" — explicar qué pasaba cuando el padre llegó',
          phonetic: '👂 "estaba" → la B entre vocales casi no suena, muy suave',
        },
        {
          grp: 'present',
          icon: '⏱️',
          color: 'var(--accent)',
          name: 'Presente de Indicativo',
          form: '-ar: -o/-as/-a/-amos/-áis/-an  |  ser: soy/eres/es/somos/sois/son',
          when: 'Acciones habituales, estados, verdades generales — la rutina diaria',
          examples: [
            'Trabajo con niños',
            'Jugamos todos los días',
            'Ella es muy activa',
          ],
          animator:
            '"Soy animador, trabajo con niños de 3 a 12 años" — presentarse a los padres',
          phonetic:
            '👂 "trabajo" → la J gutural — "tra-BA-cho" — diferente al italiano',
        },
        {
          grp: 'present',
          icon: '⚡',
          color: 'var(--accent)',
          name: 'Estar + Gerundio',
          form: 'estar (conjugado) + -ando / -iendo',
          when: 'Acción en curso EN ESTE MOMENTO — equivalente del Present Continuous inglés',
          examples: [
            'Está comiendo ahora mismo',
            'Están jugando en el jardín',
            '¡Están bailando!',
          ],
          animator:
            '"Está en el rincón de pintura ahora — en 5 minutos estará libre"',
          phonetic:
            '👂 "están jugando" → "es-TAN-chu-GAN-do" — acento en la sílaba tónica',
        },
        {
          grp: 'future',
          icon: '⏭️',
          color: 'var(--accent3)',
          name: 'Ir a + Infinitivo',
          form: 'ir (conjugado) + a + infinitivo',
          when: 'Acción futura planificada o inminente — muy frecuente en el habla cotidiana',
          examples: [
            '¡Vamos a jugar ahora!',
            'Va a encantar este juego',
            'Te voy a llamar',
          ],
          animator:
            '"Ahora vamos a hacer una manualidad" — anunciar a los niños',
          phonetic:
            '👂 "vamos a" → "BAmos-a" — la V inicial casi como B en español',
        },
        {
          grp: 'future',
          icon: '🎯',
          color: 'var(--accent3)',
          name: 'Futuro Simple',
          form: 'infinitivo + -é/-ás/-á/-emos/-éis/-án',
          when: 'Promesas, predicciones, eventos futuros seguros o formales',
          examples: [
            'Te llamaré si hay algún problema',
            '¡Será divertidísimo!',
            'Jugaremos fuera',
          ],
          animator:
            '"Le llamaré enseguida si pasa algo" — tranquilizar a los padres',
          phonetic:
            '👂 "llamaré" → acento siempre en la última sílaba — "ya-ma-REH"',
        },
        {
          grp: 'conditional',
          icon: '❓',
          color: 'var(--success)',
          name: 'Condicional Simple',
          form: 'infinitivo + -ía/-ías/-ía/-íamos/-íais/-ían',
          when: 'Situaciones hipotéticas, peticiones educadas, consejos',
          examples: [
            '¿Podría venir a las 3?',
            'Sería mejor esperar',
            'Si tuviera más ayuda, haríamos más',
          ],
          animator:
            '"¿Podría firmar aquí, por favor?" — petición muy educada a los padres',
          phonetic: '👂 "podría" → acento en la Í — "po-DRI-a"',
        },
      ]
      const TENSES_EX_ES = [
        {
          b: 'Lloraba cuando',
          a: '— hay que consolarlo.',
          c: 'llegaste',
          w: ['llegabas', 'llegarás', 'llegas'],
          grp: 'pp',
          tip: 'Indefinido: acción puntual que interrumpió el imperfecto en curso.',
        },
        {
          b: 'Ella',
          a: 'genial en la fiesta de ayer.',
          c: 'se lo pasó',
          w: ['se lo pasaba', 'se lo pasa', 'se lo pasará'],
          grp: 'pp',
          tip: "Indefinido: evento específico completado ayer ('ayer' = momento preciso).",
        },
        {
          b: 'Cuando llegué, los niños',
          a: 'en el jardín.',
          c: 'jugaban',
          w: ['jugaron', 'juegan', 'jugarán'],
          grp: 'pp',
          tip: 'Imperfecto: acción en progreso cuando otra acción ocurrió.',
        },
        {
          b: 'Antes siempre',
          a: 'terminar con un juego grande — era nuestra tradición.',
          c: 'solíamos',
          w: ['solemos', 'solimos', 'soleríamos'],
          grp: 'pp',
          tip: 'Soler + inf. en imperfecto: hábito repetido en el pasado.',
        },
        {
          b: 'Normalmente',
          a: 'antes de la merienda, pero hoy no tiene sueño.',
          c: 'duerme',
          w: ['está durmiendo', 'dormía', 'dormirá'],
          grp: 'cont',
          tip: "Presente: rutina habitual ('normalmente').",
        },
        {
          b: '¡Mira!',
          a: 'los pasos a la perfección.',
          c: 'Está haciendo',
          w: ['Hace', 'Hizo', 'Hará'],
          grp: 'cont',
          tip: 'Estar + gerundio: acción visible en curso en este momento.',
        },
        {
          b: 'No te preocupes, te',
          a: 'llamar si pasa algo.',
          c: 'voy a',
          w: ['llamaré', 'llamo', 'llamaba'],
          grp: 'future',
          tip: 'Ir a + infinitivo: plan decidido de antemano.',
        },
        {
          b: 'Si llueve,',
          a: 'dentro.',
          c: 'jugaremos',
          w: ['jugamos', 'jugábamos', 'vamos a jugar'],
          grp: 'future',
          tip: 'Futuro Simple: predicción con condición real (si + presente → futuro).',
        },
        {
          b: 'Si tuviera más ayuda,',
          a: 'más actividades.',
          c: 'haríamos',
          w: ['haremos', 'hacemos', 'hicimos'],
          grp: 'cond',
          tip: 'Condicional: hipótesis presente — si + imperfecto → condicional.',
        },
        {
          b: '¿',
          a: 'venir a las 3, por favor?',
          c: 'Podría',
          w: ['Puede', 'Podrá', 'Pudo'],
          grp: 'cond',
          tip: "Condicional: petición muy educada — más suave que 'puede'.",
        },
      ]

      function getTenses() {
        if (currentLang === 'fr') return VERB_TENSES_FR
        if (currentLang === 'es') return VERB_TENSES_ES
        return VERB_TENSES
      }
      function getTensesEx() {
        if (currentLang === 'fr') return TENSES_EX_FR
        if (currentLang === 'es') return TENSES_EX_ES
        return TENSES_EX
      }

      // ============================================================
      // TEMPI VERBALI — dati per le schede di riferimento
      // ============================================================
      const VERB_TENSES = [
        // ── PAST ─────────────────────────────────────────────────
        {
          grp: 'past',
          icon: '⏮️',
          color: 'var(--accent2)',
          name: 'Past Simple',
          form: 'verb + -ed  /  forma irregolare',
          when: 'Azioni completate nel passato a un momento specifico (yesterday, at 3pm, last week…)',
          examples: [
            'We played games all afternoon',
            'She fell off the chair at 3pm',
            'He arrived late',
          ],
          animator:
            'Per raccontare ai genitori la giornata: "We played, ate lunch, took a nap"',
          phonetic: '👂 "went" → breve e netto — non allungare la vocale',
        },

        {
          grp: 'past',
          icon: '⏸️',
          color: 'var(--accent2)',
          name: 'Past Continuous',
          form: 'was / were + verb-ing',
          when: "Azione in corso in un momento preciso del passato — spesso interrotta da un'altra azione",
          examples: [
            'I was helping with shoes when she fell',
            'The kids were running when it started raining',
          ],
          animator: '"I was sorting the materials when the parent arrived"',
          phonetic: '👂 "was running" → "wuz runnin" — G finale sparisce',
        },

        {
          grp: 'past',
          icon: '✅',
          color: 'var(--accent2)',
          name: 'Present Perfect',
          form: 'have / has + participio passato',
          when: 'Azione passata con effetto visibile ADESSO — senza momento preciso',
          examples: [
            "She's finished her snack (risultato ora)",
            "We've run out of balloons!",
            "He's been here before",
          ],
          animator:
            'Quando arriva il genitore: "We have played, we have eaten, we have cleaned up"',
          phonetic:
            '👂 "he\'s fallen" → "eez fallen" — \'has\' quasi sparisce nel parlato veloce',
        },

        {
          grp: 'past',
          icon: '🔙',
          color: 'var(--accent2)',
          name: 'Past Perfect',
          form: 'had + participio passato',
          when: 'Azione finita PRIMA di un\'altra azione passata — il "trapassato" inglese',
          examples: [
            'When you arrived, we had already eaten',
            'She had left before the game ended',
          ],
          animator:
            '"By the time the parents came, we had cleaned up everything"',
          phonetic: '👂 "had already" → "had awreddy" — tutto fuso veloce',
        },

        {
          grp: 'past',
          icon: '🔄',
          color: 'var(--accent2)',
          name: 'Present Perfect Continuous',
          form: 'have / has + been + verb-ing',
          when: 'Azione iniziata nel passato e ancora in corso — si enfatizza la durata',
          examples: [
            'The kids have been playing since 9am',
            "I've been working here for 2 years",
          ],
          animator:
            '"They have been having fun all day!" — ottimo per aggiornamenti ai genitori',
          phonetic: '👂 "have been" → "uv bin" — tutto schiacciato',
        },

        // ── PRESENT ──────────────────────────────────────────────
        {
          grp: 'present',
          icon: '⏱️',
          color: 'var(--accent)',
          name: 'Present Simple',
          form: 'verb base  /  +s per 3ª persona',
          when: 'Abitudini, routine, fatti sempre veri — la realtà quotidiana',
          examples: [
            'We have lunch at noon every day',
            'She plays with the kids',
            'I work as an animator',
          ],
          animator:
            'Descrivere la routine ai genitori: "We play in the morning, eat at noon, rest at 2pm"',
          phonetic: '👂 "she plays" → la S finale è una Z: "playz"',
        },

        {
          grp: 'present',
          icon: '⚡',
          color: 'var(--accent)',
          name: 'Present Continuous',
          form: 'am / is / are + verb-ing',
          when: 'Azione in corso ADESSO o in questo periodo temporaneo',
          examples: [
            'The kids are lining up now!',
            "I'm helping with shoes",
            "She's eating her snack",
          ],
          animator:
            'Aggiornare in tempo reale: "We are building a tower right now"',
          phonetic:
            '👂 "they\'re running" → "theyr runnin" — G finale sparisce',
        },

        // ── FUTURE ───────────────────────────────────────────────
        {
          grp: 'future',
          icon: '⏭️',
          color: 'var(--accent3)',
          name: 'Future Simple (will)',
          form: 'will + verb base',
          when: 'Decisioni sul momento, promesse, previsioni spontanee',
          examples: [
            "I'll help you in a second!",
            'It will be fun, I promise!',
            "We'll play outside later",
          ],
          animator:
            'Promesse ai bambini: "We will have snacks soon", "It will be okay"',
          phonetic: '👂 "I\'ll" → "all" — brevissimo, mai "I will" nel parlato',
        },

        {
          grp: 'future',
          icon: '🎯',
          color: 'var(--accent3)',
          name: 'Going to (piani)',
          form: 'am / is / are + going to + verb',
          when: 'Piani già decisi o eventi che si vedono arrivare (evidenza visiva)',
          examples: [
            "We're going to do crafts now — already set up!",
            "It's going to rain, look at those clouds!",
            "She's going to pick him up at 5",
          ],
          animator:
            'Annunci ai bambini: "We are going to play a new game now!"',
          phonetic: '👂 "going to" → "gonna" nel parlato veloce — normalissimo',
        },

        {
          grp: 'future',
          icon: '⚙️',
          color: 'var(--accent3)',
          name: 'Future Continuous',
          form: 'will + be + verb-ing',
          when: 'Azione che sarà in corso a un momento specifico futuro',
          examples: [
            'At 3pm we will be playing games',
            'At noon they will be eating lunch',
          ],
          animator:
            'Dire ai genitori QUANDO succede qualcosa: "At 2pm we will be resting"',
          phonetic: '👂 "will be playing" → "wll bee playin"',
        },

        {
          grp: 'future',
          icon: '✔️',
          color: 'var(--accent3)',
          name: 'Future Perfect',
          form: 'will + have + participio passato',
          when: 'Azione che sarà completata ENTRO un momento futuro',
          examples: [
            'By 5pm we will have finished',
            'By the time you arrive, we will have eaten',
          ],
          animator:
            'Rassicurare i genitori: "By the time you pick her up, we will have done everything"',
          phonetic: '👂 "will have" → "wll uv" — rapidissimo',
        },

        // ── CONDITIONAL ──────────────────────────────────────────
        {
          grp: 'conditional',
          icon: '❓',
          color: 'var(--success)',
          name: '1st Conditional',
          form: 'If + present simple,  will + verb',
          when: 'Situazione reale e possibile: "Se X succede (forse), allora Y"',
          examples: [
            'If it rains, we will play inside',
            "If you're late, I'll call you",
            'If a child is sick, we will contact you',
          ],
          animator:
            '"If a child feels unwell, we will call you immediately" — con i genitori',
          phonetic: '👂 "I\'ll call" → "all call" — velocissimo',
        },

        {
          grp: 'conditional',
          icon: '🔮',
          color: 'var(--success)',
          name: '2nd Conditional',
          form: 'If + past simple,  would + verb',
          when: 'Situazione ipotetica, non vera ora: "Se X fosse vero (ma non lo è)…"',
          examples: [
            'If I had more staff, we would do more activities',
            "If it wasn't raining, we'd play outside",
          ],
          animator:
            'Conversazione ipotetica: "If I had an extra animator, it would be so much easier"',
          phonetic:
            '👂 "we\'d" → "wed" — velocissimo, mai "we would" nel parlato',
        },

        {
          grp: 'conditional',
          icon: '😔',
          color: 'var(--success)',
          name: '3rd Conditional',
          form: 'If + past perfect,  would + have + participio',
          when: 'Situazione impossibile nel passato — cosa SAREBBE potuto succedere (rimpianto)',
          examples: [
            "If I had known about the allergy, I wouldn't have given him that",
            'If you had called earlier, we would have prepared',
          ],
          animator:
            '"If I had known she was tired, I would have given her a break earlier"',
          phonetic: '👂 "would have" → "wudda" o "wuduv" nel parlato veloce',
        },
      ]


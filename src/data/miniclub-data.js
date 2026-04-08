      const MINICLUB_DIALOGUES = [
        // ===== PARENTS =====
        {
          audience: 'parents',
          scenario: 'orari',
          label: '🕐 Orari & Info',
          exchanges: [
            {
              it: 'Il miniclub è aperto dalle 9 alle 13',
              en: 'The miniclub is open from 9 AM to 1 PM',
              es: 'El miniclub está abierto de 9 AM a 1 PM',
              fr: 'Le miniclub est ouvert de 9 h à 13 h',
            },
            {
              it: 'Il pranzo è alle 12:30',
              en: 'Lunch is at 12:30 PM',
              es: 'La comida es a las 12:30',
              fr: 'Le déjeuner est à 12h30',
            },
            {
              it: 'Colazione e merenda sono incluse',
              en: 'Breakfast and snacks are included',
              es: 'El desayuno y los refrigerios están incluidos',
              fr: 'Le petit déjeuner et les collations sont inclus',
            },
            {
              it: 'Portateci un cambio di vestiti, è probabile che si bagnino',
              en: "Bring an extra set of clothes, they'll likely get wet",
              es: 'Traiga un cambio de ropa, probablemente se mojen',
              fr: 'Apportez un changement de vêtements, ils vont probablement se mouiller',
            },
          ],
        },
        {
          audience: 'parents',
          scenario: 'drop-pickup',
          label: '🚪 Drop-off & Pick-up',
          exchanges: [
            {
              it: 'Potete lasciarli qui, noi pensiamo al resto',
              en: "You can drop them off here, we'll take care of the rest",
              es: 'Puede dejarlos aquí, nosotros cuidamos el resto',
              fr: "Vous pouvez les laisser ici, on s'en occupe",
            },
            {
              it: 'Vi preghiamo di prendere in tempo – siamo molto rigorosi sugli orari',
              en: "Please pick them up on time – we're very strict about schedules",
              es: 'Por favor recojalos a tiempo – somos muy estrictos con los horarios',
              fr: "Veuillez les chercher à l'heure – nous sommes très stricts avec les horaires",
            },
            {
              it: 'Se farete tardi, contattateci per favore',
              en: "If you're running late, please let us know",
              es: 'Si se retrasan, avísennos por favor',
              fr: 'Si vous êtes en retard, merci de nous prévenir',
            },
            {
              it: 'Scrivete il numero del genitore che verrà a ritirare',
              en: 'Write down the phone number of the person picking them up',
              es: 'Escriba el número de teléfono de quién los recogerá',
              fr: 'Écrivez le numéro de la personne qui les cherchera',
            },
          ],
        },
        {
          audience: 'parents',
          scenario: 'necessities',
          label: '🛟 Cose da Portare',
          exchanges: [
            {
              it: 'Portate crema solare – faremo molti giochi in acqua',
              en: "Bring sunscreen – we'll do lots of water activities",
              es: 'Traiga protector solar – haremos muchas actividades en el agua',
              fr: "Apportez de la crème solaire – nous ferons beaucoup d'activités aquatiques",
            },
            {
              it: 'Serve un costume da bagno, iniziamo sempre in piscina',
              en: 'We need a swimsuit – we always start in the pool',
              es: 'Necesitan un traje de baño – siempre empezamos en la piscina',
              fr: "Ils ont besoin d'un maillot – on commence toujours à la piscine",
            },
            {
              it: 'Portatevi un asciugamano e ciabatte',
              en: 'Bring a towel and flip-flops',
              es: 'Traiga una toalla y sandalias',
              fr: 'Apportez une serviette et des tongs',
            },
            {
              it: 'Deve avere i capelli in modo da non coprire gli occhi',
              en: 'Hair should be out of their eyes',
              es: 'El cabello debe estar fuera de los ojos',
              fr: 'Les cheveux doivent être dégagés',
            },
          ],
        },
        {
          audience: 'parents',
          scenario: 'medical',
          label: '💊 Allergie e Problemi',
          exchanges: [
            {
              it: "Ha allergie? Ce l'ha detto?",
              en: 'Does he have any allergies? Has he mentioned them?',
              es: '¿Tiene alguna alergia? ¿La ha mencionado?',
              fr: 'A-t-il des allergies? Les a-t-il mentionnées?',
            },
            {
              it: 'Se ha qualche problema, me lo deve comunicare al momento del drop-off',
              en: 'If there are any issues, please tell me when you drop them off',
              es: 'Si hay problemas, cuénteme cuando los deje',
              fr: "S'il y a des problèmes, dites-le-moi quand vous les laissez",
            },
            {
              it: 'Non do medicinali senza autorizzazione scritta dei genitori',
              en: "I won't give any medicine without written permission from the parents",
              es: 'No doy medicinas sin autorización escrita de los padres',
              fr: 'Je ne donnerai aucun médicament sans autorisation écrite des parents',
            },
          ],
        },
        {
          audience: 'parents',
          scenario: 'updates',
          label: '📱 Aggiornamenti',
          exchanges: [
            {
              it: "Starà bene, lo teniamo d'occhio tutto il tempo",
              en: "Don't worry, we're watching him the whole time",
              es: 'No se preocupe, lo vigilamos todo el tiempo',
              fr: "N'inquiétez-vous pas, on le surveille tout le temps",
            },
            {
              it: 'Ha avuto un ottimo primo giorno – è stato fantastico!',
              en: 'He had a wonderful first day – he was amazing!',
              es: '¡Tuvo un primer día maravilloso – fue asombroso!',
              fr: "Il a eu un excellent premier jour – c'était incroyable!",
            },
            {
              it: "Va molto d'accordo con gli altri bambini",
              en: "She's getting along really well with the other kids",
              es: 'Se lleva muy bien con los otros niños',
              fr: "Elle s'entend très bien avec les autres enfants",
            },
            {
              it: "Ha impiegato un po' per ambientarsi, ma ora si diverte un sacco",
              en: "It took him a little while to warm up, but now he's having a blast",
              es: 'Le tomó un tiempo adaptarse, pero ahora se está divirtiendo',
              fr: "Il a fallu un moment pour qu'il s'adapte, mais maintenant il s'amuse beaucoup",
            },
          ],
        },

        // ===== KIDS =====
        {
          audience: 'kids',
          scenario: 'welcome',
          label: '👋 Benvenuto!',
          exchanges: [
            {
              it: 'Ciao! Come ti chiami?',
              en: "Hi! What's your name?",
              es: '¡Hola! ¿Cómo te llamas?',
              fr: "Salut! Comment t'appelles-tu?",
            },
            {
              it: 'Benvenuto al miniclub! Sei pronto a divertirti?',
              en: 'Welcome to the miniclub! Are you ready to have fun?',
              es: '¡Bienvenido al miniclub! ¿Estás listo para divertirte?',
              fr: "Bienvenue au miniclub! Es-tu prêt à t'amuser?",
            },
            {
              it: 'Sei il benvenuto qui – tutti giocano insieme',
              en: "You're welcome here – everyone plays together",
              es: 'Eres bienvenido aquí – todos juegan juntos',
              fr: 'Tu es le bienvenu ici – tout le monde joue ensemble',
            },
          ],
        },
        {
          audience: 'kids',
          scenario: 'activities',
          label: '🎮 Attività',
          exchanges: [
            {
              it: "Oggi iniziamo in piscina con i giochi d'acqua",
              en: "Today we'll start in the pool with water games",
              es: 'Hoy empezamos en la piscina con juegos de agua',
              fr: "Aujourd'hui on commence à la piscine avec des jeux d'eau",
            },
            {
              it: 'Poi faremo gare, laboratori creativi e musica',
              en: "Then we'll do races, crafts, and music",
              es: 'Luego haremos carreras, manualidades y música',
              fr: 'Puis on fera des courses, des bricolages et de la musique',
            },
            {
              it: 'Quello è il tabellone – qui vediamo cosa facciamo',
              en: "That's the board – here we see what we're doing",
              es: 'Ese es el tablero – aquí vemos qué hacemos',
              fr: "C'est le tableau – ici on voit ce qu'on fait",
            },
            {
              it: 'Puoi scegliere: acqua, sport o creatività',
              en: 'You can choose: water, sports, or arts',
              es: 'Puedes elegir: agua, deportes o artes',
              fr: 'Tu peux choisir: eau, sports ou arts',
            },
          ],
        },
        {
          audience: 'kids',
          scenario: 'rules',
          label: '📏 Regole Importanti',
          exchanges: [
            {
              it: 'Restare con il gruppo – non allontanarti da solo',
              en: "Stay with the group – don't wander off alone",
              es: 'Quédate con el grupo – no te alejes solo',
              fr: "Reste avec le groupe – ne t'éloigne pas seul",
            },
            {
              it: 'In acqua indossi sempre il salvagente',
              en: 'In the water, always wear your flotation device',
              es: 'En el agua, siempre usa tu flotador',
              fr: "À l'eau, porte toujours ton gilet de sauvetage",
            },
            {
              it: 'Ascoltiamo il fischietto – è il segnale di fermarsi',
              en: 'Listen for the whistle – it means stop',
              es: 'Escucha el silbato – significa parar',
              fr: "Écoute le sifflet – c'est le signal pour arrêter",
            },
            {
              it: 'Non correre sui bordi della piscina – è scivoloso!',
              en: "Don't run on the pool edge – it's slippery!",
              es: '¡No corras en el borde de la piscina – es resbaladizo!',
              fr: "Ne cours pas au bord de la piscine – c'est glissant!",
            },
          ],
        },
        {
          audience: 'kids',
          scenario: 'meals',
          label: '🍽️ Pranzo e Merenda',
          exchanges: [
            {
              it: "È l'ora della merenda – andiamo a mangiare qualcosa",
              en: "It's snack time – let's eat something",
              es: 'Es hora del refrigerio – comamos algo',
              fr: "C'est l'heure de la collation – on va manger",
            },
            {
              it: 'Il pranzo è alle 12:30 – abbiamo una bella sorpresa',
              en: 'Lunch is at 12:30 – we have a nice surprise',
              es: 'La comida es a las 12:30 – tenemos una sorpresa',
              fr: 'Le déjeuner est à 12h30 – on a une surprise',
            },
            {
              it: "Mangia tutto quello che vuoi – c'è una buona varietà",
              en: "Eat as much as you want – there's lots of choice",
              es: 'Come lo que quieras – hay buena variedad',
              fr: 'Mange autant que tu veux – il y a beaucoup de choix',
            },
            {
              it: 'Mi dica se non le piace qualcosa, abbiamo alternative',
              en: "Tell me if you don't like something, we have options",
              es: 'Dígame si no le gusta algo, tenemos opciones',
              fr: "Dis-moi si tu n'aimes pas quelque chose, on a d'autres options",
            },
          ],
        },
        {
          audience: 'kids',
          scenario: 'encouragement',
          label: '⭐ Incoraggiamento',
          exchanges: [
            {
              it: 'Stai andando benissimo – continua così!',
              en: "You're doing awesome – keep it up!",
              es: '¡Lo estás haciendo muy bien – sigue así!',
              fr: 'Tu te débrouilles super bien – continue!',
            },
            {
              it: "Non è facile, ma vedi? Ce l'hai fatta!",
              en: "It's not easy, but look? You did it!",
              es: 'No es fácil, pero ¿ves? ¡Lo hiciste!',
              fr: "Ce n'est pas facile, mais regarde? Tu l'as fait!",
            },
            {
              it: 'Sei coraggioso! Non avere paura di provare',
              en: "You're brave! Don't be afraid to try",
              es: '¡Eres valiente! No tengas miedo de intentar',
              fr: "Tu es courageux! N'aie pas peur d'essayer",
            },
            {
              it: 'Gli altri hanno visto – tutti gli piace come giochi',
              en: 'The others are watching – they all like how you play',
              es: 'Los otros te están mirando – les gusta cómo juegas',
              fr: 'Les autres te regardent – ils aiment comment tu joues',
            },
          ],
        },
        {
          audience: 'kids',
          scenario: 'management',
          label: '🎯 Durante le Attività',
          exchanges: [
            {
              it: 'Alziamo la mano se vogliamo parlare',
              en: 'Raise your hand if you want to speak',
              es: 'Levanta la mano si quieres hablar',
              fr: 'Lève la main si tu veux parler',
            },
            {
              it: 'Aspettiamo il nostro turno – è più divertente così',
              en: "We wait our turn – it's more fun that way",
              es: 'Esperamos nuestro turno – es más divertido así',
              fr: "On attend notre tour – c'est plus amusant comme ça",
            },
            {
              it: 'Aiutiamo i nostri amici se sono in difficoltà',
              en: "We help our friends if they're struggling",
              es: 'Ayudamos a nuestros amigos si tienen dificultades',
              fr: "On aide nos amis s'ils ont du mal",
            },
            {
              it: 'Se il tuo compagno sta bene, sarai felice anche tu',
              en: "If your friend is OK, you'll be happy too",
              es: 'Si tu amigo está bien, tú también serás feliz',
              fr: 'Si ton ami va bien, tu seras heureux aussi',
            },
          ],
        },
      ]

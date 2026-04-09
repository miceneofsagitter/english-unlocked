      const MINICLUB_DIALOGUES = [
        // ===== PARENTS =====
        {
          audience: 'parents',
          scenario: 'pranzo-check',
          label: '🍽️ Conferma Pranzo',
          exchanges: [
            {
              it: 'Buongiorno! Confermate il pranzo per oggi?',
              en: 'Good morning! Are you confirming lunch for today?',
              es: '¡Buenos días! ¿Confirmáis el almuerzo para hoy?',
              fr: 'Bonjour! Vous confirmez le déjeuner pour aujourd\'hui?',
              variants: {
                en: ['Just to check — is your child staying for lunch today?', 'Will your little one be joining us for lunch?'],
                es: ['¿Se queda su hijo a comer hoy?', '¿Confirman el almuerzo para el niño?'],
                fr: ['Votre enfant reste déjeuner aujourd\'hui?', 'On confirme le déjeuner pour aujourd\'hui?'],
              },
            },
            {
              it: 'Mi serve il numero della stanza, per favore',
              en: 'I need your room number, please',
              es: 'Necesito el número de habitación, por favor',
              fr: 'J\'ai besoin de votre numéro de chambre, s\'il vous plaît',
              variants: {
                en: ['Could you give me your room number?', 'What\'s your room number?'],
                es: ['¿Me puede dar el número de habitación?', '¿Cuál es su número de habitación?'],
                fr: ['Quel est votre numéro de chambre?', 'Vous pouvez me donner votre numéro de chambre?'],
              },
            },
            {
              it: 'Mi lasci anche il numero di telefono',
              en: 'Please leave me your phone number too',
              es: 'Déjeme también su número de teléfono',
              fr: 'Laissez-moi aussi votre numéro de téléphone',
              variants: {
                en: ['Can I get your phone number as well?', 'I\'ll also need a contact number for you'],
                es: ['¿Me da su número de contacto?', '¿Y su número de teléfono?'],
                fr: ['Je peux avoir votre numéro de téléphone aussi?', 'Et votre numéro de contact?'],
              },
            },
            {
              it: 'Il nome del bambino, per favore',
              en: 'Your child\'s name, please',
              es: 'El nombre del niño, por favor',
              fr: 'Le prénom de votre enfant, s\'il vous plaît',
              variants: {
                en: ['Can I have your child\'s name?', 'What\'s your little one\'s name?'],
                es: ['¿El nombre de su hijo?', '¿Cómo se llama el niño?'],
                fr: ['Quel est le prénom de votre enfant?', 'Comment s\'appelle votre enfant?'],
              },
            },
            {
              it: 'Firmi qui per il drop-off, grazie',
              en: 'Please sign here for drop-off, thank you',
              es: 'Firme aquí para la entrega, gracias',
              fr: 'Signez ici pour le dépôt, merci',
              variants: {
                en: ['Can you sign here when you drop them off?', 'I need your signature for drop-off'],
                es: ['¿Puede firmar aquí al dejarlo?', 'Necesito su firma para la entrega'],
                fr: ['Vous pouvez signer ici quand vous les déposez?', 'Il faut votre signature pour le dépôt'],
              },
            },
            {
              it: 'E firmi di nuovo quando viene a riprenderlo',
              en: 'And sign again when you come to pick them up',
              es: 'Y firme de nuevo cuando venga a recogerlo',
              fr: 'Et signez à nouveau quand vous venez le chercher',
              variants: {
                en: ['We\'ll need another signature at pick-up', 'Don\'t forget to sign when you pick them up'],
                es: ['Necesitamos otra firma al recogerlo', 'No olvide firmar al venir a buscarlo'],
                fr: ['On aura besoin d\'une signature au départ aussi', 'N\'oubliez pas de signer quand vous venez le chercher'],
              },
            },
          ],
        },
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
              variants: {
                en: ['Feel free to leave them with us — we\'ve got it covered', 'Leave them here, we\'ll handle everything'],
                es: ['Déjelos con nosotros, nos encargamos de todo', 'Puede dejarlos aquí sin problema'],
                fr: ['Laissez-les avec nous, on s\'occupe de tout', 'Vous pouvez les laisser ici, pas de souci'],
              },
            },
            {
              it: 'Vi preghiamo di prendere in tempo – siamo molto rigorosi sugli orari',
              en: "Please pick them up on time – we're very strict about schedules",
              es: 'Por favor recojalos a tiempo – somos muy estrictos con los horarios',
              fr: "Veuillez les chercher à l'heure – nous sommes très stricts avec les horaires",
              variants: {
                en: ['We do ask that you\'re on time for pick-up — it\'s important for us', 'Punctuality at pick-up really matters to us'],
                es: ['Le pedimos que sea puntual al recogerlo — es importante', 'La puntualidad en la recogida es muy importante para nosotros'],
                fr: ['Nous vous demandons d\'être à l\'heure pour récupérer votre enfant', 'La ponctualité au moment de la récupération est très importante'],
              },
            },
            {
              it: 'Se farete tardi, contattateci per favore',
              en: "If you're running late, please let us know",
              es: 'Si se retrasan, avísennos por favor',
              fr: 'Si vous êtes en retard, merci de nous prévenir',
              variants: {
                en: ['Just give us a heads up if you\'re going to be late', 'A quick message if you\'re delayed would be great'],
                es: ['Si se retrasan, dénos un aviso por favor', 'Avísennos si van a llegar tarde'],
                fr: ['Prévenez-nous si vous avez du retard', 'Un petit message si vous êtes en retard, s\'il vous plaît'],
              },
            },
            {
              it: 'Scrivete il numero del genitore che verrà a ritirare',
              en: 'Write down the phone number of the person picking them up',
              es: 'Escriba el número de teléfono de quién los recogerá',
              fr: 'Écrivez le numéro de la personne qui les cherchera',
            },
            {
              it: 'Potete portare o riprendere vostro figlio in qualsiasi momento della giornata',
              en: 'You can drop off or pick up your child at any time during the day',
              es: 'Pueden dejar o recoger a su hijo en cualquier momento del día',
              fr: 'Vous pouvez déposer ou récupérer votre enfant à tout moment de la journée',
              variants: {
                en: ['Feel free to bring or pick up your child whenever works for you', 'There\'s no set time — you\'re welcome to come and go as you please'],
                es: ['Son libres de traer o recoger a su hijo cuando quieran', 'No hay horario fijo — pueden venir cuando les venga bien'],
                fr: ['Vous êtes libres d\'amener ou récupérer votre enfant quand vous voulez', 'Il n\'y a pas d\'horaire fixe — venez quand ça vous arrange'],
              },
            },
          ],
        },
        {
          audience: 'parents',
          scenario: 'programma-giorno',
          label: '📅 Programma Giornata',
          exchanges: [
            {
              it: 'Oggi iniziamo in piscina, poi attività creative e pranzo insieme',
              en: "Today we start at the pool, then crafts and lunch together",
              es: 'Hoy empezamos en la piscina, luego actividades creativas y almuerzo juntos',
              fr: "Aujourd'hui on commence à la piscine, puis des activités créatives et le déjeuner ensemble",
            },
            {
              it: 'Il programma del giorno è esposto qui all\'ingresso',
              en: 'The daily schedule is posted here at the entrance',
              es: 'El programa del día está publicado aquí en la entrada',
              fr: "Le programme du jour est affiché ici à l'entrée",
            },
            {
              it: 'Piscina alle 9:30, attività alle 11, pranzo alle 12:30',
              en: 'Pool at 9:30, activities at 11, lunch at 12:30',
              es: 'Piscina a las 9:30, actividades a las 11, almuerzo a las 12:30',
              fr: 'Piscine à 9h30, activités à 11h, déjeuner à 12h30',
            },
            {
              it: 'Se avete domande sul programma, chiedetemi pure',
              en: 'If you have questions about the schedule, just ask me',
              es: 'Si tienen preguntas sobre el programa, no duden en preguntarme',
              fr: 'Si vous avez des questions sur le programme, demandez-moi',
            },
          ],
        },
        {
          audience: 'parents',
          scenario: 'programma-settimana',
          label: '🗓️ Programma Settimanale',
          exchanges: [
            {
              it: 'Ogni settimana ha un tema diverso – questa settimana è il mare',
              en: 'Every week has a different theme – this week it\'s the sea',
              es: 'Cada semana tiene un tema diferente – esta semana es el mar',
              fr: 'Chaque semaine a un thème différent – cette semaine c\'est la mer',
            },
            {
              it: 'Il programma settimanale è esposto all\'entrata del miniclub',
              en: 'The weekly schedule is posted at the miniclub entrance',
              es: 'El programa semanal está publicado en la entrada del miniclub',
              fr: 'Le programme hebdomadaire est affiché à l\'entrée du miniclub',
            },
            {
              it: 'Ogni giorno c\'è un\'attività diversa: acqua, sport, creatività, musica',
              en: 'Each day has a different activity: water, sports, crafts, music',
              es: 'Cada día hay una actividad diferente: agua, deportes, manualidades, música',
              fr: 'Chaque jour il y a une activité différente: eau, sport, bricolage, musique',
            },
            {
              it: 'Venerdì c\'è lo spettacolo finale – i bambini si esibiscono!',
              en: 'Friday is the final show – the kids perform!',
              es: 'El viernes es el espectáculo final – ¡los niños actúan!',
              fr: 'Vendredi c\'est le spectacle final – les enfants se produisent!',
            },
          ],
        },
        {
          audience: 'parents',
          scenario: 'pasti-pensione',
          label: '🍴 Pasti & Pensione',
          exchanges: [
            {
              it: 'Vostro figlio mangia con noi al miniclub?',
              en: 'Will your child have lunch with us at the miniclub?',
              es: '¿Su hijo almorzará con nosotros en el miniclub?',
              fr: 'Votre enfant déjeunera-t-il avec nous au miniclub?',
              variants: {
                en: ['Is your child joining us for lunch today?', 'Does your child eat with us at the miniclub?'],
                es: ['¿Se queda su hijo a comer con nosotros?', '¿Come el niño con el miniclub hoy?'],
                fr: ['Votre enfant mange avec nous aujourd\'hui?', 'Est-ce que votre enfant déjeune avec le miniclub?'],
              },
            },
            {
              it: 'Con la pensione completa il pranzo è già incluso',
              en: 'With full board, lunch is already included',
              es: 'Con pensión completa, el almuerzo ya está incluido',
              fr: 'Avec la pension complète, le déjeuner est déjà inclus',
              variants: {
                en: ['If you\'re on full board, lunch is covered — no extra charge', 'Full board guests have lunch included automatically'],
                es: ['Si tienen pensión completa, el almuerzo está cubierto', 'Con pensión completa no hay coste adicional para el almuerzo'],
                fr: ['Pour la pension complète, le déjeuner est compris — pas de supplément', 'Pension complète: le déjeuner est automatiquement inclus'],
              },
            },
            {
              it: 'Con la mezza pensione il pasto viene addebitato sulla stanza a fine vacanza',
              en: 'With half board, the meal will be charged to your room at the end of your stay',
              es: 'Con media pensión, la comida se cargará a su habitación al final de la estancia',
              fr: 'Avec demi-pension, le repas sera facturé sur votre chambre en fin de séjour',
              variants: {
                en: ['Half board means we\'ll add the lunch to your room bill at checkout', 'For half board guests, we charge lunch to your room at the end'],
                es: ['Para media pensión, el almuerzo se añade a su cuenta al final de la estancia', 'Media pensión: lo cargamos a su habitación al salir'],
                fr: ['En demi-pension, le repas s\'ajoute à votre note à la fin du séjour', 'Pour demi-pension, on facture le déjeuner sur votre chambre au départ'],
              },
            },
            {
              it: 'Se preferite prenderlo prima del pranzo, fate pure – siete liberi',
              en: 'If you prefer to pick them up before lunch, feel free – you\'re welcome to',
              es: 'Si prefieren recogerlo antes del almuerzo, no hay problema – son libres de hacerlo',
              fr: 'Si vous préférez le récupérer avant le déjeuner, pas de souci – vous êtes libres',
              variants: {
                en: ['You\'re more than welcome to pick them up before lunch if you\'d like', 'No problem at all if you want to take them before lunch'],
                es: ['Sin problema si quieren llevárselo antes de la comida', 'Por supuesto, pueden recogerlo cuando quieran'],
                fr: ['Bien sûr, vous pouvez les récupérer avant le déjeuner si vous préférez', 'Pas de problème si vous voulez les prendre avant le repas'],
              },
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
              variants: {
                en: ['Are there any allergies we should know about?', 'Does your child have any food allergies?'],
                es: ['¿Hay alguna alergia que debamos conocer?', '¿Tiene su hijo alergias alimentarias?'],
                fr: ['Y a-t-il des allergies dont on devrait être au courant?', 'Votre enfant a des allergies alimentaires?'],
              },
            },
            {
              it: 'Se ha qualche problema, me lo deve comunicare al momento del drop-off',
              en: 'If there are any issues, please tell me when you drop them off',
              es: 'Si hay problemas, cuénteme cuando los deje',
              fr: "S'il y a des problèmes, dites-le-moi quand vous les laissez",
              variants: {
                en: ['Let me know of anything important when you bring them in', 'If there\'s anything I should know, please tell me at drop-off'],
                es: ['Si hay algo que deba saber, díganmelo al dejarlos', 'Cuéntenme cualquier cosa importante cuando lo traigan'],
                fr: ['Si vous avez quelque chose à me signaler, faites-le à l\'arrivée', 'Dites-moi tout ce qui est important quand vous les amenez'],
              },
            },
            {
              it: 'Non do medicinali senza autorizzazione scritta dei genitori',
              en: "I won't give any medicine without written permission from the parents",
              es: 'No doy medicinas sin autorización escrita de los padres',
              fr: 'Je ne donnerai aucun médicament sans autorisation écrite des parents',
            },
            {
              it: 'Vostro figlio è vegetariano o vegano?',
              en: 'Is your child vegetarian or vegan?',
              es: '¿Su hijo es vegetariano o vegano?',
              fr: 'Votre enfant est-il végétarien ou végane?',
              variants: {
                en: ['Does your child follow any special diet?', 'Any dietary requirements we should know about?'],
                es: ['¿Sigue alguna dieta especial su hijo?', '¿Tiene alguna restricción alimentaria?'],
                fr: ['Votre enfant suit-il un régime particulier?', 'Il y a des restrictions alimentaires?'],
              },
            },
            {
              it: 'Ha intolleranze alimentari di cui dobbiamo essere a conoscenza?',
              en: 'Does he have any food intolerances we should know about?',
              es: '¿Tiene alguna intolerancia alimentaria que debamos conocer?',
              fr: 'A-t-il des intolérances alimentaires dont nous devons être au courant?',
            },
            {
              it: 'Abbiamo sempre un\'opzione vegetariana disponibile a pranzo',
              en: 'We always have a vegetarian option available at lunch',
              es: 'Siempre tenemos una opción vegetariana disponible en el almuerzo',
              fr: 'On a toujours une option végétarienne disponible au déjeuner',
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
              variants: {
                en: ['He\'s in good hands — we keep a close eye on everyone', 'No need to worry — we watch them all the time'],
                es: ['Está en buenas manos — los vigilamos constantemente', 'No se preocupen — los tenemos siempre a la vista'],
                fr: ['Il est entre de bonnes mains — on les surveille en permanence', 'Pas d\'inquiétude — on les a toujours à l\'œil'],
              },
            },
            {
              it: 'Ha avuto un ottimo primo giorno – è stato fantastico!',
              en: 'He had a wonderful first day – he was amazing!',
              es: '¡Tuvo un primer día maravilloso – fue asombroso!',
              fr: "Il a eu un excellent premier jour – c'était incroyable!",
              variants: {
                en: ['What a great first day — he really impressed us!', 'He did brilliantly today — you\'ll be so proud!'],
                es: ['¡Qué gran primer día! — nos impresionó mucho', '¡Lo hizo genial hoy! — estarán muy orgullosos'],
                fr: ['Quelle belle première journée — il nous a vraiment impressionnés!', 'Il a été formidable aujourd\'hui — vous serez fiers!'],
              },
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
              variants: {
                en: ["Hey! What do they call you?", "Hello there! Can you tell me your name?"],
                es: ["¡Hola! ¿Cuál es tu nombre?", "¡Hey! ¿Cómo te llaman?"],
                fr: ["Bonjour! Tu t'appelles comment?", "Coucou! C'est quoi ton prénom?"],
              },
            },
            {
              it: 'Benvenuto al miniclub! Sei pronto a divertirti?',
              en: 'Welcome to the miniclub! Are you ready to have fun?',
              es: '¡Bienvenido al miniclub! ¿Estás listo para divertirte?',
              fr: "Bienvenue au miniclub! Es-tu prêt à t'amuser?",
              variants: {
                en: ["Great to have you here! Ready for a fun day?", "Welcome! We're going to have an amazing time!"],
                es: ["¡Qué bueno tenerte aquí! ¿Listo para pasarlo genial?", "¡Bienvenido! ¡Vamos a pasarlo increíble!"],
                fr: ["Super de t'avoir ici! Prêt pour une super journée?", "Bienvenue! On va passer une journée géniale!"],
              },
            },
            {
              it: 'Sei il benvenuto qui – tutti giocano insieme',
              en: "You're welcome here – everyone plays together",
              es: 'Eres bienvenido aquí – todos juegan juntos',
              fr: 'Tu es le bienvenu ici – tout le monde joue ensemble',
              variants: {
                en: ["You belong here — we all play as a team!", "This is your place too — we play together here"],
                es: ["Aquí eres uno más — ¡jugamos todos juntos!", "Este es tu sitio también — aquí todos jugamos en equipo"],
                fr: ["Tu es chez toi ici — on joue tous ensemble!", "C'est ta place aussi — on fait tout en équipe ici"],
              },
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
              variants: {
                en: ["We're kicking things off in the pool today — water games!", "First stop: the pool! We've got awesome water games lined up"],
                es: ["Hoy arrancamos en la piscina con juegos acuáticos", "¡Primera parada: la piscina! Tenemos juegos de agua geniales"],
                fr: ["On commence par la piscine aujourd'hui — des jeux d'eau!", "Ce matin on attaque à la piscine avec des jeux aquatiques"],
              },
            },
            {
              it: 'Poi faremo gare, laboratori creativi e musica',
              en: "Then we'll do races, crafts, and music",
              es: 'Luego haremos carreras, manualidades y música',
              fr: 'Puis on fera des courses, des bricolages et de la musique',
              variants: {
                en: ["After that it's races, art stuff and music — a full day!", "We've also got races, creative workshops and music — loads of fun"],
                es: ["Después: carreras, arte y música — ¡un día completo!", "También hay carreras, manualidades y música — ¡de todo!"],
                fr: ["Ensuite des courses, du bricolage et de la musique — plein de trucs!", "On a aussi des courses, des activités créatives et de la musique"],
              },
            },
            {
              it: 'Quello è il tabellone – qui vediamo cosa facciamo',
              en: "That's the board – here we see what we're doing",
              es: 'Ese es el tablero – aquí vemos qué hacemos',
              fr: "C'est le tableau – ici on voit ce qu'on fait",
              variants: {
                en: ["See that board? That's our plan for today!", "Look at the board — it shows everything we're doing"],
                es: ["¿Ves ese tablón? ¡Ese es nuestro plan de hoy!", "Mira el tablero — muestra todo lo que vamos a hacer"],
                fr: ["Tu vois le tableau là-bas? C'est notre programme du jour!", "Regarde le tableau — ça montre tout ce qu'on va faire"],
              },
            },
            {
              it: 'Puoi scegliere: acqua, sport o creatività',
              en: 'You can choose: water, sports, or arts',
              es: 'Puedes elegir: agua, deportes o artes',
              fr: 'Tu peux choisir: eau, sports ou arts',
              variants: {
                en: ["It's up to you — water fun, sports, or arts and crafts!", "Your choice: splash in the water, play sports, or get creative!"],
                es: ["¡Tú eliges! — agua, deporte o manualidades", "Es tu elección: agua, deporte o ser creativo"],
                fr: ["C'est toi qui choisis — eau, sport ou activités créatives!", "À toi de choisir: se baigner, faire du sport ou être créatif!"],
              },
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
              variants: {
                en: ["Keep with everyone — no going off on your own, okay?", "We all stick together — don't go anywhere by yourself"],
                es: ["Quedamos todos juntos — no te vayas solo, ¿de acuerdo?", "Nos quedamos en grupo — nada de irse solo"],
                fr: ["On reste tous ensemble — pas question de partir seul, d'accord?", "On se tient en groupe — ne t'éloigne pas tout seul"],
              },
            },
            {
              it: 'In acqua indossi sempre il salvagente',
              en: 'In the water, always wear your flotation device',
              es: 'En el agua, siempre usa tu flotador',
              fr: "À l'eau, porte toujours ton gilet de sauvetage",
              variants: {
                en: ["Floaties on before you go in — every single time!", "Always put on your float before getting in the water"],
                es: ["¡Flotador puesto antes de entrar al agua — siempre!", "Ponte el flotador antes de meterte en el agua, siempre"],
                fr: ["Le gilet avant de rentrer dans l'eau — à chaque fois!", "Mets toujours ton gilet de sauvetage avant d'entrer dans l'eau"],
              },
            },
            {
              it: 'Ascoltiamo il fischietto – è il segnale di fermarsi',
              en: 'Listen for the whistle – it means stop',
              es: 'Escucha el silbato – significa parar',
              fr: "Écoute le sifflet – c'est le signal pour arrêter",
              variants: {
                en: ["When you hear the whistle — everyone stops, no matter what!", "The whistle means stop immediately — everyone, okay?"],
                es: ["Cuando suena el silbato — todo el mundo para, ¡sin excepción!", "El silbato significa parar enseguida — ¡todos, de acuerdo?"],
                fr: ["Quand tu entends le sifflet — tout le monde s'arrête, sans exception!", "Le sifflet = stop immédiat — tout le monde, d'accord?"],
              },
            },
            {
              it: 'Non correre sui bordi della piscina – è scivoloso!',
              en: "Don't run on the pool edge – it's slippery!",
              es: '¡No corras en el borde de la piscina – es resbaladizo!',
              fr: "Ne cours pas au bord de la piscine – c'est glissant!",
              variants: {
                en: ["Walk around the pool — if you run you'll slip and fall!", "No running by the pool — it's super slippery, trust me!"],
                es: ["Camina alrededor de la piscina — si corres te resbalarás", "No corras junto a la piscina — ¡es muy resbaladizo, de verdad!"],
                fr: ["Marche autour de la piscine — si tu cours tu vas glisser!", "Pas de course au bord — c'est vraiment très glissant, crois-moi!"],
              },
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
              variants: {
                en: ["Snack break! Who's hungry?", "Time to refuel — snack time everyone!"],
                es: ["¡Pausa merienda! ¿Quién tiene hambre?", "¡Hora de recargar — merienda para todos!"],
                fr: ["Pause goûter! Qui a faim?", "C'est l'heure de recharger les batteries — collation pour tout le monde!"],
              },
            },
            {
              it: 'Il pranzo è alle 12:30 – abbiamo una bella sorpresa',
              en: 'Lunch is at 12:30 – we have a nice surprise',
              es: 'La comida es a las 12:30 – tenemos una sorpresa',
              fr: 'Le déjeuner est à 12h30 – on a une surprise',
              variants: {
                en: ["We eat at 12:30 — and trust me, you're going to love what we have!", "Lunch at half past twelve — there's a little surprise waiting for you!"],
                es: ["Comemos a las 12:30 — ¡y créeme, te va a encantar lo que tenemos!", "Almuerzo a las 12 y media — ¡hay una pequeña sorpresa esperándote!"],
                fr: ["On mange à 12h30 — et crois-moi, tu vas adorer ce qu'on a!", "Déjeuner à 12h30 — il y a une petite surprise qui t'attend!"],
              },
            },
            {
              it: "Mangia tutto quello che vuoi – c'è una buona varietà",
              en: "Eat as much as you want – there's lots of choice",
              es: 'Come lo que quieras – hay buena variedad',
              fr: 'Mange autant que tu veux – il y a beaucoup de choix',
              variants: {
                en: ["Help yourself — there's loads of different things to eat!", "Take as much as you like — we've got plenty of options!"],
                es: ["Sírvete — ¡hay un montón de cosas diferentes para comer!", "Toma lo que quieras — ¡tenemos muchas opciones!"],
                fr: ["Sers-toi — il y a plein de choses différentes à manger!", "Prends autant que tu veux — on a plein d'options!"],
              },
            },
            {
              it: 'Mi dica se non le piace qualcosa, abbiamo alternative',
              en: "Tell me if you don't like something, we have options",
              es: 'Dígame si no le gusta algo, tenemos opciones',
              fr: "Dis-moi si tu n'aimes pas quelque chose, on a d'autres options",
              variants: {
                en: ["Not a fan of something? Just tell me — I'll find you something else", "If you don't like it, say so — we can always find something you'll enjoy"],
                es: ["¿No te gusta algo? Dímelo — te buscaré otra cosa", "Si no te gusta, dilo — siempre podemos encontrar algo que te guste"],
                fr: ["Tu n'aimes pas quelque chose? Dis-le moi — je te trouverai autre chose", "Si ça te plaît pas, dis-le — on peut toujours trouver quelque chose que tu aimes"],
              },
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
              variants: {
                en: ["That's brilliant — don't stop now!", "You're absolutely crushing it — well done!"],
                es: ["¡Eso es genial — no te detengas!", "¡Lo estás petando — muy bien!"],
                fr: ["C'est brillant — arrête pas!", "Tu assures vraiment — bravo!"],
              },
            },
            {
              it: "Non è facile, ma vedi? Ce l'hai fatta!",
              en: "It's not easy, but look? You did it!",
              es: 'No es fácil, pero ¿ves? ¡Lo hiciste!',
              fr: "Ce n'est pas facile, mais regarde? Tu l'as fait!",
              variants: {
                en: ["See? I knew you could do it!", "That was tough and you did it anyway — I'm so proud of you!"],
                es: ["¿Ves? ¡Sabía que podías hacerlo!", "Era difícil y lo hiciste igual — ¡estoy muy orgulloso de ti!"],
                fr: ["Tu vois? Je savais que tu pouvais le faire!", "C'était dur et tu l'as fait quand même — je suis super fier de toi!"],
              },
            },
            {
              it: 'Sei coraggioso! Non avere paura di provare',
              en: "You're brave! Don't be afraid to try",
              es: '¡Eres valiente! No tengas miedo de intentar',
              fr: "Tu es courageux! N'aie pas peur d'essayer",
              variants: {
                en: ["Go for it — being brave means trying even when it's scary!", "Give it a shot — you're braver than you think!"],
                es: ["¡Inténtalo — ser valiente es probar aunque dé miedo!", "¡Atrévete — eres más valiente de lo que crees!"],
                fr: ["Lance-toi — être courageux c'est essayer même quand on a peur!", "Vas-y — tu es plus courageux que tu ne le crois!"],
              },
            },
            {
              it: 'Gli altri hanno visto – tutti gli piace come giochi',
              en: 'The others are watching – they all like how you play',
              es: 'Los otros te están mirando – les gusta cómo juegas',
              fr: 'Les autres te regardent – ils aiment comment tu joues',
              variants: {
                en: ["Everyone's watching — and they think you're great!", "Look around — the whole group loves how you play!"],
                es: ["Todo el mundo te mira — ¡y piensan que eres genial!", "Mira a tu alrededor — ¡a todos les encanta cómo juegas!"],
                fr: ["Tout le monde te regarde — et ils pensent que tu es super!", "Regarde autour — tout le groupe adore comment tu joues!"],
              },
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
              variants: {
                en: ["Hand up if you've got something to say!", "If you want to talk, put your hand up first"],
                es: ["¡Mano arriba si tienes algo que decir!", "Si quieres hablar, levanta la mano primero"],
                fr: ["La main si tu as quelque chose à dire!", "Si tu veux parler, lève la main d'abord"],
              },
            },
            {
              it: 'Aspettiamo il nostro turno – è più divertente così',
              en: "We wait our turn – it's more fun that way",
              es: 'Esperamos nuestro turno – es más divertido así',
              fr: "On attend notre tour – c'est plus amusant comme ça",
              variants: {
                en: ["Patience — everyone gets a turn, I promise!", "Hang on — your turn is coming, and it'll be worth it!"],
                es: ["Paciencia — todos tienen su turno, ¡te lo prometo!", "Espera — tu turno llega, ¡y valdrá la pena!"],
                fr: ["Patience — tout le monde a son tour, je te le promets!", "Attends un peu — ton tour arrive, et ça vaut le coup!"],
              },
            },
            {
              it: 'Aiutiamo i nostri amici se sono in difficoltà',
              en: "We help our friends if they're struggling",
              es: 'Ayudamos a nuestros amigos si tienen dificultades',
              fr: "On aide nos amis s'ils ont du mal",
              variants: {
                en: ["If a friend needs help, we step in — that's what teams do!", "Look out for each other — if someone's stuck, give them a hand"],
                es: ["Si un amigo necesita ayuda, actuamos — ¡eso es lo que hacen los equipos!", "Cuídense mutuamente — si alguien está atascado, échenle una mano"],
                fr: ["Si un ami a besoin d'aide, on intervient — c'est ça une équipe!", "Regardez-vous les uns les autres — si quelqu'un est bloqué, aidez-le"],
              },
            },
            {
              it: 'Se il tuo compagno sta bene, sarai felice anche tu',
              en: "If your friend is OK, you'll be happy too",
              es: 'Si tu amigo está bien, tú también serás feliz',
              fr: 'Si ton ami va bien, tu seras heureux aussi',
              variants: {
                en: ["When everyone's happy, you're happy too — that's the magic of a team!", "A happy group means a happy you — look after each other!"],
                es: ["Cuando todos están felices, tú también lo estás — ¡esa es la magia del equipo!", "Un grupo feliz te hace feliz a ti también — ¡cuídense!"],
                fr: ["Quand tout le monde est heureux, toi aussi tu l'es — c'est la magie d'une équipe!", "Un groupe heureux te rend heureux aussi — prenez soin les uns des autres!"],
              },
            },
          ],
        },
      ]

      const MINICLUB_PRACTICE = [
        {
          who: 'parents',
          category: 'pranzo',
          parent_asks: {
            en: 'Is lunch included?',
            es: '¿Está incluido el almuerzo?',
            fr: 'Le déjeuner est inclus?',
            it: 'Il pranzo è incluso?',
          },
          you_reply: {
            en: 'With full board, lunch is already included. With half board, it\'s charged to your room at the end of your stay.',
            es: 'Con pensión completa ya está incluido. Con media pensión, se carga a su habitación al final de la estancia.',
            fr: 'Avec la pension complète, le déjeuner est déjà inclus. Avec demi-pension, ça sera facturé sur votre chambre en fin de séjour.',
          },
          variants: {
            en: ['If you\'re on full board, you\'re all set — lunch is covered! Half board guests get it added to the room bill.', 'Full board: lunch included. Half board: we add it to your room at checkout.'],
            es: ['Pensión completa: incluido. Media pensión: lo añadimos a su cuenta al final.', 'Si tienen pensión completa, el almuerzo está cubierto. Si no, se carga a la habitación.'],
            fr: ['Pension complète: inclus. Demi-pension: on l\'ajoute à votre note en fin de séjour.', 'Pour la pension complète c\'est compris, pour la demi-pension on facture à la chambre.'],
          },
        },
        {
          who: 'parents',
          category: 'pranzo',
          parent_asks: {
            en: 'How much does lunch cost?',
            es: '¿Cuánto cuesta el almuerzo?',
            fr: 'Combien coûte le déjeuner?',
            it: 'Quanto costa il pranzo?',
          },
          you_reply: {
            en: 'It depends on your board plan. Full board covers it, half board guests pay at the end — it\'s charged to your room.',
            es: 'Depende de su régimen. Pensión completa lo cubre, media pensión lo pagan al final — se carga a la habitación.',
            fr: 'Ça dépend de votre formule. Pension complète: inclus. Demi-pension: facturé à votre chambre en fin de séjour.',
          },
          variants: {
            en: ['Full board includes it — half board gets added to your room bill.', 'It\'s part of full board. For half board, it goes on your account at the end.'],
            es: ['Con pensión completa está incluido; con media pensión va a la cuenta de la habitación.'],
            fr: ['Pension complète c\'est gratuit, demi-pension ça s\'ajoute à la note de chambre.'],
          },
        },
        {
          who: 'parents',
          category: 'orari',
          parent_asks: {
            en: 'What time does the miniclub open?',
            es: '¿A qué hora abre el miniclub?',
            fr: 'Le miniclub ouvre à quelle heure?',
            it: 'A che ora apre il miniclub?',
          },
          you_reply: {
            en: 'The miniclub is open from 9 AM to 1 PM.',
            es: 'El miniclub está abierto de 9 a 13 horas.',
            fr: 'Le miniclub est ouvert de 9h à 13h.',
          },
          variants: {
            en: ['We\'re open from 9 in the morning until 1 in the afternoon.', 'Nine to one — that\'s our schedule!'],
            es: ['Abrimos a las 9 y cerramos a la 1 del mediodía.', 'Desde las 9 hasta la 1 — ¡ese es nuestro horario!'],
            fr: ['On ouvre à 9h et on ferme à 13h.', 'De 9h à 13h, c\'est notre horaire!'],
          },
        },
        {
          who: 'parents',
          category: 'orari',
          parent_asks: {
            en: 'What time is lunch?',
            es: '¿A qué hora es el almuerzo?',
            fr: 'Le déjeuner est à quelle heure?',
            it: 'A che ora è il pranzo?',
          },
          you_reply: {
            en: 'Lunch is at 12:30. Pool at 9:30 and activities at 11.',
            es: 'El almuerzo es a las 12:30. Piscina a las 9:30 y actividades a las 11.',
            fr: 'Le déjeuner est à 12h30. Piscine à 9h30 et activités à 11h.',
          },
          variants: {
            en: ['We eat at 12:30 — before that it\'s pool at 9:30 then activities at 11.', '12:30 for lunch. The day starts with the pool at 9:30.'],
            es: ['Comemos a las 12:30, después de piscina a las 9:30 y actividades a las 11.'],
            fr: ['On mange à 12h30. Avant ça: piscine à 9h30 et activités à 11h.'],
          },
        },
        {
          who: 'parents',
          category: 'drop-pickup',
          parent_asks: {
            en: 'Can we pick him up before lunch?',
            es: '¿Podemos recogerlo antes del almuerzo?',
            fr: 'On peut le récupérer avant le déjeuner?',
            it: 'Possiamo prenderlo prima di pranzo?',
          },
          you_reply: {
            en: 'Of course! You can drop off or pick up your child at any time during the day.',
            es: '¡Por supuesto! Pueden dejar o recoger a su hijo en cualquier momento del día.',
            fr: 'Bien sûr! Vous pouvez déposer ou récupérer votre enfant à tout moment de la journée.',
          },
          variants: {
            en: ['Absolutely — there\'s no fixed pick-up time, come whenever you like.', 'Yes, feel free! We\'re flexible — anytime works.'],
            es: ['Claro que sí — no hay horario fijo, vengan cuando quieran.', '¡Sin problema! Son libres de venir cuando les venga bien.'],
            fr: ['Bien sûr — il n\'y a pas d\'heure fixe, venez quand vous voulez.', 'Absolument! On est flexibles — à n\'importe quelle heure.'],
          },
        },
        {
          who: 'parents',
          category: 'drop-pickup',
          parent_asks: {
            en: 'We\'re going to be late for pick-up — is that okay?',
            es: 'Vamos a llegar tarde a recogerlo — ¿está bien?',
            fr: 'On va être en retard pour venir le chercher — c\'est ok?',
            it: 'Arriveremo in ritardo a prenderlo — va bene?',
          },
          you_reply: {
            en: 'Please let us know if you\'re running late — we\'re quite strict about pick-up time.',
            es: 'Por favor avísenos si se van a retrasar — somos bastante estrictos con el horario de recogida.',
            fr: 'Merci de nous prévenir si vous êtes en retard — nous sommes assez stricts sur les horaires de récupération.',
          },
          variants: {
            en: ['Just give us a heads up — punctuality at pick-up is really important for us.', 'A quick message would help — we do need everyone collected on time.'],
            es: ['Avísennos — la puntualidad en la recogida es muy importante para nosotros.', 'Un mensaje rápido ayuda — necesitamos que todos sean recogidos a tiempo.'],
            fr: ['Prévenez-nous — la ponctualité est vraiment importante pour nous.', 'Un petit message suffit — on a besoin que tout le monde soit récupéré à l\'heure.'],
          },
        },
        {
          who: 'parents',
          category: 'allergie',
          parent_asks: {
            en: 'My child has a nut allergy — is that a problem?',
            es: 'Mi hijo tiene alergia a los frutos secos — ¿es un problema?',
            fr: 'Mon enfant est allergique aux noix — c\'est un problème?',
            it: 'Mio figlio è allergico alle noci — è un problema?',
          },
          you_reply: {
            en: 'Thank you for telling me. I won\'t give any medicine or food without written permission from the parents — please write it down here.',
            es: 'Gracias por avisarme. No doy ningún alimento ni medicamento sin autorización escrita — por favor anótelo aquí.',
            fr: 'Merci de me le dire. Je ne donne rien sans autorisation écrite des parents — notez-le ici s\'il vous plaît.',
          },
          variants: {
            en: ['Good to know — can you write it down here? I need a note for any medical or dietary issues.', 'Thanks for the heads up. Please put it in writing so I have it on file.'],
            es: ['Bien saberlo — ¿puede anotarlo aquí? Necesito constancia escrita de cualquier problema.', 'Gracias por avisarme. Por favor escríbalo para tenerlo registrado.'],
            fr: ['Bien de me le signaler — pouvez-vous l\'écrire ici? J\'ai besoin d\'une note écrite.', 'Merci pour l\'info. Notez-le ici pour que j\'aie quelque chose d\'écrit.'],
          },
        },
        {
          who: 'parents',
          category: 'allergie',
          parent_asks: {
            en: 'Does my child have to eat everything?',
            es: '¿Mi hijo tiene que comer todo?',
            fr: 'Mon enfant doit tout manger?',
            it: 'Mio figlio deve mangiare tutto?',
          },
          you_reply: {
            en: 'No, don\'t worry — we always have a vegetarian option and plenty of choice. Tell me if they don\'t like something.',
            es: 'No, no se preocupen — siempre tenemos una opción vegetariana y mucha variedad. Díganme si no le gusta algo.',
            fr: 'Non, pas d\'inquiétude — on a toujours une option végétarienne et beaucoup de choix. Dites-moi s\'il n\'aime pas quelque chose.',
          },
          variants: {
            en: ['Not at all — there\'s always a vegetarian option and lots of variety. Let me know about any preferences.', 'No pressure — we have options for everyone. Just tell me if there\'s something they don\'t eat.'],
            es: ['Para nada — siempre hay opciones y variedad. Solo díganme si hay algo que no come.'],
            fr: ['Pas du tout — on a toujours le choix. Dites-moi juste s\'il y a quelque chose qu\'il ne mange pas.'],
          },
        },
        {
          who: 'parents',
          category: 'programma',
          parent_asks: {
            en: 'What are you doing today?',
            es: '¿Qué hacéis hoy?',
            fr: 'Vous faites quoi aujourd\'hui?',
            it: 'Cosa fate oggi?',
          },
          you_reply: {
            en: 'Today we start at the pool at 9:30, then crafts at 11, and lunch together at 12:30.',
            es: 'Hoy empezamos en la piscina a las 9:30, luego manualidades a las 11 y almuerzo juntos a las 12:30.',
            fr: 'Aujourd\'hui on commence à la piscine à 9h30, puis bricolage à 11h et déjeuner ensemble à 12h30.',
          },
          variants: {
            en: ['Pool at 9:30, activities from 11, then lunch at 12:30 — it\'s a full day!', 'We\'ve got pool, crafts and lunch today — the full schedule is on the board there.'],
            es: ['Piscina a las 9:30, actividades a las 11 y almuerzo a las 12:30 — ¡un día completo!', 'Tenemos piscina, manualidades y almuerzo — el programa completo está en el tablón.'],
            fr: ['Piscine à 9h30, activités à 11h et déjeuner à 12h30 — c\'est une journée bien remplie!', 'Piscine, bricolage et repas — le programme complet est affiché là-bas.'],
          },
        },
        {
          who: 'parents',
          category: 'programma',
          parent_asks: {
            en: 'What\'s the theme this week?',
            es: '¿Cuál es el tema de esta semana?',
            fr: 'C\'est quoi le thème de cette semaine?',
            it: 'Qual è il tema di questa settimana?',
          },
          you_reply: {
            en: 'Every week has a different theme — this week it\'s the sea! The weekly schedule is posted at the entrance.',
            es: 'Cada semana tiene un tema diferente — ¡esta semana es el mar! El programa semanal está en la entrada.',
            fr: 'Chaque semaine a un thème différent — cette semaine c\'est la mer! Le programme est affiché à l\'entrée.',
          },
          variants: {
            en: ['This week we\'re doing the sea theme — check the board at the entrance for the full schedule.', 'Sea week this week! You\'ll find the whole schedule posted at the door.'],
            es: ['Esta semana es el tema del mar — el programa completo está en el tablón de la entrada.', '¡Semana del mar! Pueden ver el programa completo en la entrada.'],
            fr: ['Cette semaine c\'est le thème de la mer — le programme est affiché à l\'entrée.', 'Semaine de la mer cette semaine! Le planning est sur le panneau à l\'entrée.'],
          },
        },

        // ===== KIDS =====
        {
          who: 'kids',
          category: 'emozioni',
          parent_asks: {
            en: 'I want my mum!',
            es: '¡Quiero a mi mamá!',
            fr: 'Je veux ma maman!',
            it: 'Voglio la mamma!',
          },
          you_reply: {
            en: "I know, I know. Mum will be back soon — let's do something fun together while we wait!",
            es: 'Lo sé, lo sé. Mamá volverá pronto — ¡hagamos algo divertido juntos mientras esperamos!',
            fr: 'Je sais, je sais. Maman revient bientôt — faisons quelque chose de fun ensemble en attendant!',
          },
          variants: {
            en: ["She'll be back before you know it — come on, let's play!", "Don't worry — mum's coming back soon. Want to do something together?"],
            es: ['Vuelve antes de que te des cuenta — ¡venga, vamos a jugar!', 'No te preocupes — mamá vuelve pronto. ¿Quieres hacer algo juntos?'],
            fr: ['Elle revient avant que tu t\'en rendes compte — allez, on joue!', 'Ne t\'inquiète pas — maman revient bientôt. Tu veux faire quelque chose ensemble?'],
          },
        },
        {
          who: 'kids',
          category: 'emozioni',
          parent_asks: {
            en: "I don't want to go in the water!",
            es: '¡No quiero meterme en el agua!',
            fr: 'Je veux pas aller dans l\'eau!',
            it: 'Non voglio andare in acqua!',
          },
          you_reply: {
            en: "That's totally fine! You can watch from here and jump in when you feel ready — no pressure at all.",
            es: '¡Está totalmente bien! Puedes mirar desde aquí y meterte cuando te sientas listo — sin ninguna presión.',
            fr: "C'est tout à fait normal! Tu peux regarder depuis ici et entrer quand tu te sens prêt — pas de pression du tout.",
          },
          variants: {
            en: ["No worries — you don't have to go in yet. Stay here with me!", "It's okay to take your time — you can watch first and decide later"],
            es: ['No hay problema — no tienes que entrar todavía. ¡Quédate aquí conmigo!', 'Está bien tomarte tu tiempo — puedes mirar primero y decidir después'],
            fr: ["Pas de souci — t'as pas besoin d'entrer pour l'instant. Reste avec moi!", "C'est normal de prendre son temps — regarde d'abord et décide après"],
          },
        },
        {
          who: 'kids',
          category: 'emozioni',
          parent_asks: {
            en: "I'm scared!",
            es: '¡Tengo miedo!',
            fr: "J'ai peur!",
            it: 'Ho paura!',
          },
          you_reply: {
            en: "It's okay to be scared — that means you're about to do something brave! I'm right here with you.",
            es: 'Es normal tener miedo — ¡eso significa que estás a punto de hacer algo valiente! Estoy justo aquí contigo.',
            fr: "C'est normal d'avoir peur — ça veut dire que tu es sur le point de faire quelque chose de courageux! Je suis là avec toi.",
          },
          variants: {
            en: ["Hey, it's all good — I'm right next to you. You can do this!", "Being scared is part of being brave. I've got you — let's try together"],
            es: ['Oye, está todo bien — estoy justo a tu lado. ¡Puedes hacerlo!', 'Tener miedo es parte de ser valiente. Yo te apoyo — probemos juntos'],
            fr: ['Hé, tout va bien — je suis juste à côté de toi. Tu peux le faire!', 'Avoir peur c\'est normal — ça fait partie du courage. Je suis là — on essaie ensemble'],
          },
        },
        {
          who: 'kids',
          category: 'attività',
          parent_asks: {
            en: "I don't want to do this activity!",
            es: '¡No quiero hacer esta actividad!',
            fr: 'Je veux pas faire cette activité!',
            it: 'Non voglio fare questa attività!',
          },
          you_reply: {
            en: "No worries — you can choose something else! We have water, sports and arts. Which one do you fancy?",
            es: '¡Sin problema — puedes elegir otra cosa! Tenemos agua, deportes y manualidades. ¿Cuál te apetece?',
            fr: "Pas de souci — tu peux choisir autre chose! On a de l'eau, du sport et des arts. Lequel te tente?",
          },
          variants: {
            en: ["That's fine — pick something you like! Water, sports or crafts?", "No problem at all — what would you rather do? I'll find something for you"],
            es: ['Está bien — ¡elige algo que te guste! ¿Agua, deporte o manualidades?', 'Ningún problema — ¿qué prefieres hacer? Te encuentro algo'],
            fr: ["C'est bon — choisis ce que tu préfères! Eau, sport ou bricolage?", "Aucun problème — qu'est-ce que tu préfères? Je te trouve quelque chose"],
          },
        },
        {
          who: 'kids',
          category: 'attività',
          parent_asks: {
            en: "What are we doing now?",
            es: '¿Qué hacemos ahora?',
            fr: 'On fait quoi maintenant?',
            it: 'Cosa facciamo adesso?',
          },
          you_reply: {
            en: "Now we're doing crafts — we're making something really cool, you'll love it!",
            es: 'Ahora hacemos manualidades — ¡hacemos algo realmente genial, te va a encantar!',
            fr: "Maintenant on fait du bricolage — on fabrique quelque chose de super cool, tu vas adorer!",
          },
          variants: {
            en: ["We're moving on to crafts — it's going to be awesome, trust me!", "Next up: arts and crafts! Come and see what we're making"],
            es: ['¡Pasamos a manualidades — va a ser genial, confía en mí!', 'Siguiente: ¡manualidades! Ven a ver lo que estamos haciendo'],
            fr: ["On passe au bricolage — ça va être top, fais-moi confiance!", "Ensuite: les activités créatives! Viens voir ce qu'on fabrique"],
          },
        },
        {
          who: 'kids',
          category: 'regole',
          parent_asks: {
            en: "He pushed me!",
            es: '¡Me ha empujado!',
            fr: 'Il m\'a poussé!',
            it: 'Mi ha spinto!',
          },
          you_reply: {
            en: "Okay, let's talk about it. We don't push here — everyone needs to feel safe. Let's sort this out together.",
            es: 'Bien, hablemos de eso. Aquí no empujamos — todos necesitan sentirse seguros. Vamos a resolver esto juntos.',
            fr: "D'accord, on en parle. On ne pousse pas ici — tout le monde doit se sentir en sécurité. On règle ça ensemble.",
          },
          variants: {
            en: ["I saw that — we need to talk. No pushing, ever. Let me help you two sort it out", "Come here, both of you. We don't do that here — let's fix this"],
            es: ['Lo vi — necesitamos hablar. Nada de empujar, nunca. Déjenme ayudarles a resolverlo', 'Vengan los dos. Eso no se hace aquí — vamos a arreglarlo'],
            fr: ["J'ai vu ça — on doit parler. On ne pousse pas, jamais. Je vais vous aider à régler ça", "Venez tous les deux. On ne fait pas ça ici — on va arranger ça"],
          },
        },
        {
          who: 'kids',
          category: 'regole',
          parent_asks: {
            en: "Can I go to the bathroom?",
            es: '¿Puedo ir al baño?',
            fr: 'Je peux aller aux toilettes?',
            it: 'Posso andare al bagno?',
          },
          you_reply: {
            en: "Of course! The bathroom is right over there — come straight back, okay?",
            es: '¡Por supuesto! El baño está justo allí — vuelve enseguida, ¿de acuerdo?',
            fr: "Bien sûr! Les toilettes sont juste là — reviens vite, d'accord?",
          },
          variants: {
            en: ["Sure — toilets are right there, just come back quickly!", "Go ahead — it's just around the corner. Back in a flash!"],
            es: ['Claro — los baños están justo ahí, ¡vuelve rápido!', 'Adelante — está a la vuelta de la esquina. ¡Vuelves enseguida!'],
            fr: ['Vas-y — les toilettes sont juste là, reviens vite!', 'Bien sûr — c\'est juste au coin. De retour dans deux minutes!'],
          },
        },
        {
          who: 'kids',
          category: 'pasti',
          parent_asks: {
            en: "I'm hungry!",
            es: '¡Tengo hambre!',
            fr: "J'ai faim!",
            it: 'Ho fame!',
          },
          you_reply: {
            en: "I hear you! Snack time is at 10:30 and lunch is at 12:30 — almost there! Hang on a little longer.",
            es: '¡Te escucho! La merienda es a las 10:30 y el almuerzo a las 12:30 — ¡casi! Aguanta un poco más.',
            fr: "Je t'entends! Le goûter c'est à 10h30 et le déjeuner à 12h30 — on y est presque! Encore un petit peu.",
          },
          variants: {
            en: ["I know, I know! Snack is coming at 10:30 — just a bit longer!", "Hold on — snack time is very soon at 10:30. You can do it!"],
            es: ['¡Lo sé, lo sé! La merienda llega a las 10:30 — ¡un poco más!', 'Espera — la merienda es muy pronto a las 10:30. ¡Puedes aguantar!'],
            fr: ["Je sais, je sais! Le goûter c'est à 10h30 — encore un peu!", "Attends — le goûter arrive bientôt à 10h30. Tu peux tenir!"],
          },
        },
        {
          who: 'kids',
          category: 'pasti',
          parent_asks: {
            en: "I don't like this food!",
            es: '¡No me gusta esta comida!',
            fr: 'J\'aime pas cette nourriture!',
            it: 'Non mi piace questo cibo!',
          },
          you_reply: {
            en: "No problem at all! Tell me what you don't like and I'll find you something else — we've got lots of options.",
            es: '¡No hay ningún problema! Dime qué no te gusta y te busco otra cosa — tenemos muchas opciones.',
            fr: "Aucun problème! Dis-moi ce que tu n'aimes pas et je te trouve autre chose — on a plein d'options.",
          },
          variants: {
            en: ["That's okay — just tell me and I'll sort you out with something you like!", "No worries — point to what you don't want and we'll find you something better"],
            es: ['Está bien — ¡dímelo y te doy algo que te guste!', 'Sin problema — señala lo que no quieres y te buscamos algo mejor'],
            fr: ["C'est pas grave — dis-moi et je te trouve quelque chose que tu aimes!", "Pas de souci — montre-moi ce que tu veux pas et on te trouve autre chose"],
          },
        },
      ]

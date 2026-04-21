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

        // ===== RESORT LE DUNE — PARENTS =====
        {
          audience: 'parents',
          scenario: 'iscrizione-club',
          label: '📋 Iscrizione al Club',
          exchanges: [
            {
              it: 'Quanti anni ha suo figlio?',
              en: 'How old is your child?',
              es: '¿Cuántos años tiene su hijo?',
              fr: 'Quel âge a votre enfant?',
              variants: {
                en: ["How old is your little one?", "Can I ask your child's age?"],
                es: ['¿Qué edad tiene su hijo/a?', '¿Me puede decir cuántos años tiene?'],
                fr: ["Quel est l'âge de votre enfant?", 'Il a quel âge, votre petit?'],
              },
            },
            {
              it: '3-4 anni → Baby Club · 5-8 → Mini Club · 9-13 → Junior Club · 14-17 → Teen Club',
              en: '3-4 years → Baby Club · 5-8 → Mini Club · 9-13 → Junior Club · 14-17 → Teen Club',
              es: '3-4 años → Baby Club · 5-8 → Mini Club · 9-13 → Junior Club · 14-17 → Teen Club',
              fr: '3-4 ans → Baby Club · 5-8 → Mini Club · 9-13 → Junior Club · 14-17 → Teen Club',
            },
            {
              it: 'Il club è aperto tutti i giorni dalle 9:30 alle 18:30, tranne il sabato',
              en: 'The club is open every day from 9:30 to 18:30, except Saturday',
              es: 'El club está abierto todos los días de 9:30 a 18:30, excepto el sábado',
              fr: 'Le club est ouvert tous les jours de 9h30 à 18h30, sauf le samedi',
              variants: {
                en: ['We run Monday to Friday plus Sunday — we take Saturday off', 'Open six days a week, 9:30 till 6:30 — not Saturday though'],
                es: ['Abrimos de lunes a viernes y domingo — el sábado descansamos', 'Abiertos seis días a la semana, de 9:30 a 18:30 — excepto el sábado'],
                fr: ['On ouvre du lundi au vendredi plus le dimanche — le samedi on est fermés', 'Ouvert six jours sur sept, de 9h30 à 18h30 — sauf le samedi'],
              },
            },
            {
              it: 'Per il Baby Club (3-4 anni) serve il certificato medico — ce l\'ha?',
              en: 'For the Baby Club (3-4 years) we need a medical certificate — do you have one?',
              es: 'Para el Baby Club (3-4 años) necesitamos un certificado médico — ¿lo tiene?',
              fr: 'Pour le Baby Club (3-4 ans) il nous faut un certificat médical — vous l\'avez?',
              variants: {
                en: ['The Baby Club requires a medical certificate from your doctor — did you bring it?', 'Just for 3 and 4 year olds: we need a medical certificate. Have you got one?'],
                es: ['El Baby Club requiere un certificado médico del pediatra — ¿lo trajo?', 'Solo para los de 3 y 4 años: necesitamos un certificado médico. ¿Lo tiene?'],
                fr: ['Le Baby Club demande un certificat médical — vous en avez un?', 'Uniquement pour les 3-4 ans: il nous faut un certificat médical. Vous l\'avez apporté?'],
              },
            },
          ],
        },
        {
          audience: 'parents',
          scenario: 'serata-babydance',
          label: '🌙 Serata e Baby Dance',
          exchanges: [
            {
              it: 'Vuole prenotare la supervisione serale? È dalle 19:30 alle 22:00',
              en: 'Would you like to book evening supervision? It runs from 19:30 to 22:00',
              es: '¿Quiere reservar la supervisión nocturna? Es de 19:30 a 22:00',
              fr: 'Vous voulez réserver la surveillance du soir? C\'est de 19h30 à 22h00',
              variants: {
                en: ['Are you interested in the evening programme? We go from 7:30 till 10pm', 'Want to sign up for the evening session? It\'s 19:30 to 22:00'],
                es: ['¿Le interesa el programa de tarde-noche? Va de 19:30 a 22:00', '¿Quiere apuntarse a la sesión nocturna? De 19:30 a 22:00'],
                fr: ['Vous êtes intéressés par le programme du soir? De 19h30 à 22h00', 'On peut vous inscrire pour le soir? C\'est de 19h30 à 22h'],
              },
            },
            {
              it: 'La cena al Peter Pan Restaurant è inclusa — prenoto il suo posto?',
              en: 'Dinner at the Peter Pan Restaurant is included — shall I book a spot for your child?',
              es: 'La cena en el Restaurante Peter Pan está incluida — ¿reservo el sitio?',
              fr: 'Le dîner au Restaurant Peter Pan est inclus — je réserve une place?',
              variants: {
                en: ['Dinner\'s included at the Peter Pan Restaurant — want me to reserve a seat?', 'There\'s dinner at Peter Pan Restaurant — should I put your child down for it?'],
                es: ['La cena está incluida en el Restaurante Peter Pan — ¿apunto a su hijo?', 'Hay cena en el Restaurante Peter Pan incluida — ¿lo anoto?'],
                fr: ['Le dîner est inclus au Restaurant Peter Pan — je l\'inscris?', 'Il y a un dîner au Restaurant Peter Pan inclus — je réserve?'],
              },
            },
            {
              it: 'Dopo cena c\'è la Baby Dance — spettacolo ispirato alle favole, adorano!',
              en: 'After dinner there\'s Baby Dance — a fairy tale show, they love it!',
              es: 'Después de cenar hay Baby Dance — un espectáculo de cuentos, ¡les encanta!',
              fr: 'Après le dîner il y a la Baby Dance — un spectacle inspiré des contes, ils adorent!',
              variants: {
                en: ['Then we do Baby Dance — it\'s a fairy tale show after dinner, really popular!', 'The evening ends with Baby Dance — fairy tale themed, the kids absolutely love it'],
                es: ['Luego tenemos la Baby Dance — show de cuentos después de cenar, ¡les encanta!', 'Al final de la noche hay Baby Dance — temática de cuentos, los niños la adoran'],
                fr: ['Ensuite c\'est la Baby Dance — spectacle contes de fées, très populaire!', 'La soirée se finit avec la Baby Dance — thème contes, les enfants adorent ça'],
              },
            },
          ],
        },
        {
          audience: 'parents',
          scenario: 'ristorante-peterpan',
          label: '🍽️ Peter Pan Restaurant',
          exchanges: [
            {
              it: 'Il pranzo è al Ristorante Peter Pan — dedicato ai bambini del club',
              en: 'Lunch is at the Peter Pan Restaurant — it\'s just for club kids',
              es: 'El almuerzo es en el Restaurante Peter Pan — solo para los niños del club',
              fr: 'Le déjeuner c\'est au Restaurant Peter Pan — réservé aux enfants du club',
              variants: {
                en: ['We eat at the Peter Pan Restaurant — it\'s our dedicated kids\' dining room', 'Your child will have lunch at Peter Pan Restaurant, our kids-only dining space'],
                es: ['Comemos en el Restaurante Peter Pan — es nuestro comedor dedicado para niños', 'Su hijo almorzará en el Restaurante Peter Pan, solo para niños del club'],
                fr: ['On mange au Restaurant Peter Pan — c\'est notre salle de repas pour les enfants', 'Votre enfant déjeunera au Restaurant Peter Pan, réservé aux enfants du club'],
              },
            },
            {
              it: 'I prodotti vengono dall\'orto del resort — tutto fresco e locale',
              en: 'The produce comes from the resort\'s garden — all fresh and local',
              es: 'Los productos vienen del huerto del resort — todo fresco y local',
              fr: 'Les produits viennent du jardin du resort — tout est frais et local',
              variants: {
                en: ['The food is grown right here in our own garden — fresh every day', 'Everything is locally sourced from our resort\'s garden — really fresh'],
                es: ['La comida se cultiva aquí mismo, en nuestro huerto — fresca cada día', 'Todo viene de nuestro huerto del resort — muy fresco'],
                fr: ['Les légumes viennent de notre propre potager ici — vraiment frais', 'Tout est cultivé dans notre jardin du resort — du frais chaque jour'],
              },
            },
            {
              it: 'Per prenotare il pranzo mi dica entro la mattina, grazie',
              en: 'To book lunch just let me know by morning, thanks',
              es: 'Para reservar el almuerzo dígame antes de la mañana, gracias',
              fr: 'Pour réserver le déjeuner dites-le moi le matin, merci',
              variants: {
                en: ['Just give me a heads up in the morning if your child is staying for lunch', 'Let us know before midday if you want to book lunch'],
                es: ['Avíseme por la mañana si su hijo se queda a comer', 'Díganos antes del mediodía si quiere reservar el almuerzo'],
                fr: ['Prévenez-moi le matin si votre enfant reste déjeuner', 'Dites-nous avant midi si vous voulez réserver le repas'],
              },
            },
          ],
        },
        {
          audience: 'parents',
          scenario: 'attivita-junior',
          label: '🏹 Attività Junior e Teen',
          exchanges: [
            {
              it: 'Junior (9-13 anni): tiro con l\'arco, calcio, beach volley, basket, tennis',
              en: 'Junior (9-13): archery, football, beach volleyball, basketball, tennis',
              es: 'Junior (9-13): tiro con arco, fútbol, vóley playa, baloncesto, tenis',
              fr: 'Junior (9-13): tir à l\'arc, football, beach volley, basket, tennis',
              variants: {
                en: ['For 9 to 13 year olds we run archery, football, beach volleyball, basketball and tennis', 'Junior Club sports: archery, football, beach volley, basketball and tennis'],
                es: ['Para los de 9 a 13 años: tiro con arco, fútbol, vóley playa, baloncesto y tenis', 'Deportes del Junior Club: tiro con arco, fútbol, vóley playa, baloncesto y tenis'],
                fr: ['Pour les 9-13 ans: tir à l\'arc, football, beach volley, basket et tennis', 'Sports du Junior Club: tir à l\'arc, football, beach volley, basket et tennis'],
              },
            },
            {
              it: 'Organizziamo mini tornei negli spazi verdi del resort',
              en: 'We run mini tournaments in the resort\'s outdoor green spaces',
              es: 'Organizamos minitorneos en las zonas verdes del resort',
              fr: 'On organise des mini-tournois dans les espaces verts du resort',
              variants: {
                en: ['We hold little tournaments outside — the kids get really competitive!', 'Mini tournaments happen outdoors — great fun and teamwork'],
                es: ['Hacemos pequeños torneos al aire libre — ¡se lo pasan genial!', 'Mini torneos al exterior — mucha diversión y trabajo en equipo'],
                fr: ['On fait des petits tournois dehors — ils adorent la compétition!', 'Des mini-tournois en plein air — beaucoup de fun et d\'esprit d\'équipe'],
              },
            },
            {
              it: 'Teen (14-17 anni): stesse attività + scuola vela opzionale (a pagamento)',
              en: 'Teen (14-17): same activities + optional sailing school (paid extra)',
              es: 'Teen (14-17): mismas actividades + escuela de vela opcional (de pago)',
              fr: 'Teen (14-17): mêmes activités + école de voile en option (payant)',
              variants: {
                en: ['Teens do all the same sports plus there\'s a sailing school — that one costs extra', 'For 14-17 there\'s also a sailing school on top of the usual sports — it\'s optional and paid'],
                es: ['Los teen hacen los mismos deportes más una escuela de vela — esa tiene coste adicional', 'Para 14-17 también hay escuela de vela además de los deportes normales — opcional y de pago'],
                fr: ['Les ados font les mêmes sports plus une école de voile — celle-là est payante', 'Pour les 14-17 il y a aussi une école de voile en plus des sports habituels — optionnelle et payante'],
              },
            },
          ],
        },
        {
          audience: 'parents',
          scenario: 'babysitting',
          label: '👶 Babysitting',
          exchanges: [
            {
              it: 'Suo figlio ha meno di 2 anni? C\'è un servizio dedicato a pagamento su prenotazione',
              en: 'Is your child under 2? There\'s a dedicated paid service — booking required',
              es: '¿Su hijo tiene menos de 2 años? Hay un servicio dedicado de pago — requiere reserva',
              fr: 'Votre enfant a moins de 2 ans? Il y a un service dédié payant — sur réservation',
              variants: {
                en: ['For children under 2 we have a dedicated care service — it\'s paid and needs advance booking', 'Under 2 years old? We have a special service for them — it\'s extra and must be booked ahead'],
                es: ['Para menores de 2 años tenemos un servicio especial — de pago y con reserva previa', '¿Menos de 2 años? Hay un servicio especial para ellos — tiene coste y hay que reservar'],
                fr: ['Pour les moins de 2 ans on a un service spécial — c\'est payant et sur réservation', 'Moins de 2 ans? On a un service dédié — payant et à réserver à l\'avance'],
              },
            },
            {
              it: 'Il babysitting individuale è disponibile dai 3 mesi — bisogna prenotare in anticipo',
              en: 'Individual babysitting is available from 3 months old — must be booked in advance',
              es: 'El cuidado individual está disponible desde los 3 meses — hay que reservar con antelación',
              fr: 'La garde individuelle est disponible dès 3 mois — à réserver à l\'avance',
              variants: {
                en: ['One-to-one babysitting starts from 3 months — just book ahead and we\'ll sort it', 'We offer individual babysitting from 3 months old — advance booking only'],
                es: ['Cuidado uno a uno desde los 3 meses — solo hay que reservar con antelación', 'Ofrecemos cuidado individual desde los 3 meses — solo con reserva previa'],
                fr: ['Garde individuelle dès 3 mois — il suffit de réserver à l\'avance', 'On propose une garde individuelle dès 3 mois — uniquement sur réservation'],
              },
            },
            {
              it: 'Per prenotare si rivolga alla reception — loro gestiscono il servizio',
              en: 'To book please go to reception — they handle that service',
              es: 'Para reservar diríjase a recepción — ellos gestionan ese servicio',
              fr: 'Pour réserver adressez-vous à la réception — c\'est eux qui gèrent ça',
              variants: {
                en: ['Reception takes care of the babysitting bookings — just pop over and ask', 'Head to reception to book — they\'ll sort everything out for you'],
                es: ['La recepción gestiona las reservas de cuidado — pase por allí y pregunte', 'Vaya a recepción para reservar — ellos se encargan de todo'],
                fr: ['La réception s\'occupe des réservations de baby-sitting — passez les voir', 'Allez à la réception pour réserver — ils s\'occupent de tout'],
              },
            },
          ],
        },

        // ===== RESORT LE DUNE — KIDS =====
        {
          audience: 'kids',
          scenario: 'villaggio-fantasia',
          label: '🏕️ Villaggio Fantasia',
          exchanges: [
            {
              it: 'Benvenuto al Villaggio Fantasia! Qui ci sono due mondi: il campo indiano e Fort Crok!',
              en: 'Welcome to Villaggio Fantasia! There are two worlds here: the Indian camp and Fort Crok!',
              es: '¡Bienvenido al Villaggio Fantasia! ¡Hay dos mundos aquí: el campamento indio y Fort Crok!',
              fr: 'Bienvenue au Villaggio Fantasia! Il y a deux mondes ici: le camp indien et Fort Crok!',
              variants: {
                en: ['This is Villaggio Fantasia — you choose: Indian camp or Fort Crok the cowboy fort?', 'Welcome! Two worlds await you — an Indian camp and a cowboy fort. Which do you pick?'],
                es: ['Aquí es el Villaggio Fantasia — ¿eliges: campamento indio o Fort Crok el fuerte vaquero?', '¡Bienvenido! Dos mundos te esperan — campamento indio y fuerte vaquero. ¿Cuál eliges?'],
                fr: ['Bienvenue! Deux mondes t\'attendent — un camp indien et un fort cowboy. Tu choisis lequel?', 'C\'est le Villaggio Fantasia — camp indien ou Fort Crok le fort cowboy?'],
              },
            },
            {
              it: 'Sei un coraggioso guerriero indiano o uno sceriffo cowboy?',
              en: 'Are you a brave Indian warrior or a cowboy sheriff?',
              es: '¿Eres un valiente guerrero indio o un sheriff vaquero?',
              fr: 'Tu es un courageux guerrier indien ou un shérif cowboy?',
              variants: {
                en: ['Warrior or sheriff — you decide! Both are awesome', 'Indian warrior or cowboy? Tell me and we\'ll get you kitted out!'],
                es: ['¿Guerrero o sheriff? ¡Tú decides! Los dos molan', '¿Indio o vaquero? ¡Dímelo y te equipamos!'],
                fr: ['Guerrier ou shérif — c\'est toi qui choisis! Les deux c\'est trop bien', 'Indien ou cowboy? Dis-moi et on t\'équipe!'],
              },
            },
            {
              it: 'Guarda! Abbiamo una piscina enorme solo per voi bambini — 10.000 mq!',
              en: 'Look! We have a huge pool just for you kids — 10,000 square metres!',
              es: '¡Mira! Tenemos una piscina enorme solo para vosotros, los niños — ¡10.000 m²!',
              fr: 'Regarde! On a une piscine immense rien que pour vous les enfants — 10 000 m²!',
              variants: {
                en: ['We\'ve got a massive kids\' pool — 10,000 square metres, just for us!', 'Our pool is 10,000 square metres — and it\'s all ours!'],
                es: ['¡Nuestra piscina tiene 10.000 metros cuadrados y es toda para nosotros!', '¡La piscina es enorme — 10.000 m² y solo para los niños!'],
                fr: ['Notre piscine fait 10 000 m² et elle est rien qu\'à nous!', 'La piscine fait 10 000 mètres carrés — et elle est rien que pour nous!'],
              },
            },
          ],
        },
        {
          audience: 'kids',
          scenario: 'duneland-castle',
          label: '🎡 Duneland Castle',
          exchanges: [
            {
              it: 'Oggi andiamo a Duneland Castle! Ci sono laboratori creativi e il soft play',
              en: 'Today we\'re going to Duneland Castle! There are creative labs and a soft play area',
              es: '¡Hoy vamos a Duneland Castle! Hay talleres creativos y zona de soft play',
              fr: 'Aujourd\'hui on va au Duneland Castle! Il y a des ateliers créatifs et un espace soft play',
              variants: {
                en: ['We\'re heading to Duneland Castle — creative workshops and a giant soft play!', 'Duneland Castle today! You can do crafts or bounce around in the soft play'],
                es: ['¡Vamos al Duneland Castle! Talleres de manualidades y zona blanda gigante', '¡Duneland Castle hoy! Puedes hacer manualidades o jugar en la zona blanda'],
                fr: ['On va au Duneland Castle! Des ateliers créatifs et un super espace soft play', 'Direction Duneland Castle! Ateliers créatifs ou zone de jeux rembourrée'],
              },
            },
            {
              it: 'Vedi quella nave pirata gonfiabile? Ci saliamo dopo!',
              en: 'See that inflatable pirate ship? We\'re climbing on it later!',
              es: '¿Ves ese barco pirata hinchable? ¡Subimos después!',
              fr: 'Tu vois ce bateau pirate gonflable? On monte dessus tout à l\'heure!',
              variants: {
                en: ['That inflatable pirate ship over there — we get to go on it! Ready to be a pirate?', 'See the pirate ship? We\'re going on it — are you a pirate or a captain?'],
                es: ['¡Ese barco pirata hinchable es para nosotros! ¿Listo para ser pirata?', '¿Ves el barco pirata? ¡Subimos — eres pirata o capitán?'],
                fr: ['Ce bateau pirate gonflable là-bas c\'est pour nous! T\'es prêt à être un pirate?', 'Le bateau pirate là — on y va! Tu es pirate ou capitaine?'],
              },
            },
            {
              it: 'Vuoi provare la parete di arrampicata? Ti metto l\'imbragatura e sei al sicuro',
              en: 'Want to try the climbing wall? I\'ll put your harness on and you\'re totally safe',
              es: '¿Quieres probar el muro de escalada? Te pongo el arnés y estás completamente seguro',
              fr: 'Tu veux essayer le mur d\'escalade? Je te mets le harnais et t\'es en sécurité totale',
              variants: {
                en: ['Fancy the climbing wall? I\'ll get you harnessed up — totally safe, I promise!', 'The climbing wall looks scary but it\'s really safe — want to give it a go? I\'ll be right here'],
                es: ['¿Te animas con el muro de escalada? Te pongo el arnés — es totalmente seguro, ¡te lo juro!', 'El muro parece difícil pero es muy seguro — ¿quieres intentarlo? Yo estoy aquí'],
                fr: ['Le mur d\'escalade ça fait peur mais c\'est super sécurisé — tu veux essayer? Je suis là', 'T\'oses le mur d\'escalade? Je t\'attache le harnais — t\'es en sécurité totale, promis!'],
              },
            },
          ],
        },
        {
          audience: 'kids',
          scenario: 'orto-aviary',
          label: '🌱 Orto e Animali',
          exchanges: [
            {
              it: 'Andiamo all\'Orto Il Peperone a coltivare piante mediterranee — sei il mio aiuto-giardiniere!',
              en: 'We\'re going to Orto Il Peperone to grow Mediterranean plants — you\'re my assistant gardener!',
              es: '¡Vamos al Orto Il Peperone a cultivar plantas mediterráneas — eres mi ayudante jardinero!',
              fr: 'On va à l\'Orto Il Peperone cultiver des plantes méditerranéennes — tu es mon assistant jardinier!',
              variants: {
                en: ['Time to visit our vegetable garden! You get to plant things and be a real gardener', 'We\'re going to the garden — Il Peperone — to grow some Mediterranean plants. Ready?'],
                es: ['¡Hora de visitar nuestro huerto! Puedes plantar cosas y ser un jardinero de verdad', 'Vamos al huerto Il Peperone a plantar plantas mediterráneas. ¿Preparado?'],
                fr: ['On va au jardin! Tu vas planter des choses et être un vrai jardinier', 'Direction le potager Il Peperone pour cultiver des plantes méditerranéennes. Prêt?'],
              },
            },
            {
              it: 'Ora andiamo al Puddaggiju — c\'è un aviario con pavoni, anatre e galline!',
              en: 'Now we\'re going to the Puddaggiju — there\'s an aviary with peacocks, ducks and hens!',
              es: '¡Ahora vamos al Puddaggiju — hay un aviario con pavos reales, patos y gallinas!',
              fr: 'Maintenant on va au Puddaggiju — il y a un volière avec des paons, des canards et des poules!',
              variants: {
                en: ['Next stop: the Puddaggiju aviary! Peacocks, ducks, chickens — the lot!', 'We\'re visiting the Puddaggiju now — it\'s an aviary with peacocks and loads of birds!'],
                es: ['Próxima parada: ¡el aviario Puddaggiju! Pavos reales, patos, gallinas — ¡de todo!', '¡Visitamos el Puddaggiju ahora — es un aviario con pavos reales y muchas aves!'],
                fr: ['Prochaine étape: la volière Puddaggiju! Paons, canards, poules — tout y est!', 'On visite le Puddaggiju maintenant — une volière avec des paons et plein d\'oiseaux!'],
              },
            },
            {
              it: 'Vuoi raccogliere le uova con me? Le galline le hanno deposte stamattina!',
              en: 'Want to collect the eggs with me? The hens laid them this morning!',
              es: '¿Quieres recoger los huevos conmigo? ¡Las gallinas los han puesto esta mañana!',
              fr: 'Tu veux ramasser les œufs avec moi? Les poules les ont pondus ce matin!',
              variants: {
                en: ['The hens laid fresh eggs this morning — want to come and collect them?', 'Fresh eggs this morning! Come with me to pick them up — careful now, they\'re fragile!'],
                es: ['¡Las gallinas han puesto huevos frescos esta mañana — quieres venir a recogerlos?', '¡Huevos frescos esta mañana! Ven conmigo a recogerlos — ¡con cuidado, son frágiles!'],
                fr: ['Les poules ont pondu des œufs frais ce matin — tu viens les ramasser?', 'Des œufs frais ce matin! Viens avec moi les chercher — doucement, ils sont fragiles!'],
              },
            },
          ],
        },
        {
          audience: 'kids',
          scenario: 'arco-sport',
          label: '🏹 Tiro con l\'arco e Sport',
          exchanges: [
            {
              it: 'Oggi facciamo tiro con l\'arco! Prima le regole di sicurezza — pronto ad ascoltare?',
              en: 'Today we\'re doing archery! First the safety rules — ready to listen?',
              es: '¡Hoy hacemos tiro con arco! Primero las reglas de seguridad — ¿listo para escuchar?',
              fr: 'Aujourd\'hui on fait du tir à l\'arc! D\'abord les règles de sécurité — prêt à écouter?',
              variants: {
                en: ['Archery time! But safety first — I need you to listen carefully for one minute', 'We\'re doing archery today — quick safety briefing first, then we shoot!'],
                es: ['¡Hora del tiro con arco! Pero primero la seguridad — necesito que escuches un momento', 'Hoy hacemos tiro con arco — primero un repaso rápido de seguridad, ¡luego disparamos!'],
                fr: ['C\'est l\'heure du tir à l\'arc! Mais d\'abord la sécurité — écoute-moi bien une minute', 'On fait du tir à l\'arc — petit briefing sécurité d\'abord, puis on tire!'],
              },
            },
            {
              it: 'Regola n°1: non puntare mai l\'arco verso una persona — mai, mai, mai!',
              en: 'Rule number 1: never point the bow at a person — never, ever!',
              es: 'Regla número 1: nunca apuntes el arco hacia una persona — ¡nunca, jamás!',
              fr: 'Règle numéro 1: ne jamais pointer l\'arc vers une personne — jamais, jamais, jamais!',
              variants: {
                en: ['Number one rule: the bow never points at people — only at the target. Deal?', 'Most important rule: bow stays pointed at the target, never at a person. Got it?'],
                es: ['Regla número uno: el arco nunca apunta a personas — solo al blanco. ¿Trato?', 'Regla más importante: el arco apunta al blanco, nunca a una persona. ¿Entendido?'],
                fr: ['Règle numéro un: l\'arc pointe vers la cible, jamais vers une personne. Marché?', 'La règle la plus importante: l\'arc vise la cible, jamais une personne. Compris?'],
              },
            },
            {
              it: 'Oggi pomeriggio torneo di beach volley — vuoi essere nella mia squadra?',
              en: 'This afternoon there\'s a beach volleyball tournament — want to be on my team?',
              es: 'Esta tarde hay torneo de vóley playa — ¿quieres estar en mi equipo?',
              fr: 'Cet après-midi il y a un tournoi de beach volley — tu veux être dans mon équipe?',
              variants: {
                en: ['Beach volley tournament this afternoon — I\'m picking my team, you in?', 'We\'ve got a beach volley competition later — fancy joining my team?'],
                es: ['Torneo de vóley playa esta tarde — elijo equipo, ¿te apuntas?', '¡Competición de vóley playa después — ¿quieres unirte a mi equipo?'],
                fr: ['Tournoi de beach volley cet après-midi — je choisis mon équipe, t\'es partant?', 'On a une compétition de beach volley plus tard — tu rejoins mon équipe?'],
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

        // ===== RESORT LE DUNE — PARENTS =====
        {
          who: 'parents',
          category: 'iscrizione',
          parent_asks: {
            en: 'Which club is my child in? She\'s 6.',
            es: '¿En qué club está mi hija? Tiene 6 años.',
            fr: 'Mon enfant est dans quel club? Elle a 6 ans.',
            it: 'In quale club è mia figlia? Ha 6 anni.',
          },
          you_reply: {
            en: 'Six years old means Mini Club — that\'s 5 to 8 year olds. She\'s in the right place!',
            es: 'Con 6 años va al Mini Club — es para los de 5 a 8 años. ¡Está en el sitio correcto!',
            fr: '6 ans c\'est le Mini Club — c\'est pour les 5 à 8 ans. Elle est au bon endroit!',
          },
          variants: {
            en: ['At 6 she\'s in the Mini Club — ages 5 to 8. Perfect fit!', 'Mini Club is for 5 to 8 year olds, so she\'s right here with us!'],
            es: ['Con 6 años está en el Mini Club — de 5 a 8 años. ¡Está perfecta aquí!', 'El Mini Club es para los de 5 a 8 años — ¡está en el lugar correcto!'],
            fr: ['À 6 ans elle est au Mini Club — de 5 à 8 ans. Elle est parfaitement à sa place!', 'Le Mini Club c\'est pour les 5-8 ans — elle est exactement là où il faut!'],
          },
        },
        {
          who: 'parents',
          category: 'iscrizione',
          parent_asks: {
            en: 'Do I need to bring anything to enrol my child?',
            es: '¿Necesito traer algo para inscribir a mi hijo?',
            fr: 'Je dois apporter quelque chose pour inscrire mon enfant?',
            it: 'Devo portare qualcosa per iscrivere mio figlio?',
          },
          you_reply: {
            en: 'For the Baby Club — 3 and 4 year olds — we need a medical certificate from your doctor. For all other clubs, nothing extra needed.',
            es: 'Para el Baby Club — niños de 3 y 4 años — necesitamos un certificado médico del pediatra. Para los demás clubes no hace falta nada más.',
            fr: 'Pour le Baby Club — les 3 et 4 ans — il nous faut un certificat médical. Pour les autres clubs, rien de spécial.',
          },
          variants: {
            en: ['Only the Baby Club (3-4 year olds) requires a medical certificate — other clubs, you\'re good to go!', 'If your child is 3 or 4, we need a medical certificate. Older kids? Just show up!'],
            es: ['Solo el Baby Club (3-4 años) pide certificado médico — para los demás clubes no hace falta nada.', 'Si tiene 3 o 4 años necesitamos certificado médico. ¿Mayor? ¡Solo aparecerse!'],
            fr: ['Uniquement le Baby Club (3-4 ans) demande un certificat médical — pour les autres clubs rien de spécial.', 'Si votre enfant a 3 ou 4 ans il nous faut un certificat. Pour les plus grands rien du tout!'],
          },
        },
        {
          who: 'parents',
          category: 'serata',
          parent_asks: {
            en: 'Is there something for the kids in the evening?',
            es: '¿Hay algo para los niños por la noche?',
            fr: 'Il y a quelque chose pour les enfants le soir?',
            it: 'C\'è qualcosa per i bambini la sera?',
          },
          you_reply: {
            en: 'Yes! Evening supervision from 19:30 to 22:00 — dinner at the Peter Pan Restaurant is included, and after dinner there\'s Baby Dance, a fairy tale show the kids love.',
            es: '¡Sí! Supervisión nocturna de 19:30 a 22:00 — la cena en el Restaurante Peter Pan está incluida, y después hay Baby Dance, un espectáculo de cuentos que les encanta.',
            fr: 'Oui! Surveillance du soir de 19h30 à 22h — le dîner au Restaurant Peter Pan est inclus, et après il y a la Baby Dance, un spectacle de contes que les enfants adorent.',
          },
          variants: {
            en: ['Evening programme: 7:30 to 10pm, dinner at Peter Pan Restaurant included, then Baby Dance — fairy tale show, very popular!', 'We do evenings too! 19:30 to 22:00 with dinner and Baby Dance after — needs booking though.'],
            es: ['Programa de tarde: 19:30 a 22:00, cena en Peter Pan incluida y Baby Dance después — ¡muy popular!', '¡También hacemos sesión nocturna! 19:30 a 22:00 con cena y Baby Dance — hay que reservar.'],
            fr: ['Programme du soir: 19h30 à 22h, dîner au Peter Pan inclus et Baby Dance après — très populaire!', 'On fait aussi le soir! 19h30 à 22h avec dîner et Baby Dance — sur réservation.'],
          },
        },
        {
          who: 'parents',
          category: 'serata',
          parent_asks: {
            en: 'Does the evening have to be booked in advance?',
            es: '¿Hay que reservar la sesión nocturna con antelación?',
            fr: 'Il faut réserver la soirée à l\'avance?',
            it: 'Bisogna prenotare la serata in anticipo?',
          },
          you_reply: {
            en: 'Yes, the evening supervision needs to be booked — just let me know and I\'ll sort it out for you.',
            es: 'Sí, la supervisión nocturna hay que reservarla — dígame y se lo gestiono.',
            fr: 'Oui, la surveillance du soir est sur réservation — dites-le moi et je m\'en occupe.',
          },
          variants: {
            en: ['It\'s reservation only — tell me now and I\'ll put your child down for tonight.', 'Yes, booking required — shall I add your child to the list right now?'],
            es: ['Solo con reserva — dígame ahora y apunto a su hijo para esta noche.', 'Sí, requiere reserva — ¿lo apunto ahora mismo?'],
            fr: ['Sur réservation uniquement — dites-le moi maintenant et j\'inscris votre enfant pour ce soir.', 'Oui, réservation obligatoire — je l\'inscris tout de suite?'],
          },
        },
        {
          who: 'parents',
          category: 'attivita-junior',
          parent_asks: {
            en: 'My son is 11 — what activities does he have?',
            es: 'Mi hijo tiene 11 años — ¿qué actividades tiene?',
            fr: 'Mon fils a 11 ans — quelles activités il a?',
            it: 'Mio figlio ha 11 anni — che attività ha?',
          },
          you_reply: {
            en: 'Junior Club at 11! He gets archery, football, beach volleyball, basketball and tennis — plus mini tournaments in the outdoor spaces.',
            es: '¡Junior Club con 11 años! Tiene tiro con arco, fútbol, vóley playa, baloncesto y tenis — más minitorneos al aire libre.',
            fr: 'Junior Club à 11 ans! Il a le tir à l\'arc, le football, le beach volley, le basket et le tennis — plus des mini-tournois en extérieur.',
          },
          variants: {
            en: ['At 11 he\'s in Junior Club — archery, football, beach volley, basketball, tennis and outdoor tournaments!', 'Junior Club for him — lots of sport: archery, football, beach volley, basketball, tennis. Real mini-athlete stuff!'],
            es: ['Con 11 años está en Junior Club — tiro con arco, fútbol, vóley playa, baloncesto, tenis y torneos. ¡Un auténtico deportista!', 'Junior Club para él — mucho deporte: arco, fútbol, vóley, baloncesto, tenis. ¡Lo mejor!'],
            fr: ['À 11 ans c\'est le Junior Club — tir à l\'arc, foot, beach volley, basket, tennis et tournois. Un vrai sportif!', 'Junior Club pour lui — plein de sports: tir à l\'arc, foot, beach volley, basket, tennis. Super programme!'],
          },
        },
        {
          who: 'parents',
          category: 'attivita-junior',
          parent_asks: {
            en: 'Is there a sailing school for teenagers?',
            es: '¿Hay escuela de vela para los adolescentes?',
            fr: 'Il y a une école de voile pour les ados?',
            it: 'C\'è una scuola di vela per i ragazzi?',
          },
          you_reply: {
            en: 'Yes, for 14 to 17 year olds there\'s an optional sailing school — it\'s a paid extra, you book it separately.',
            es: 'Sí, para los de 14 a 17 años hay una escuela de vela opcional — tiene coste adicional, se reserva aparte.',
            fr: 'Oui, pour les 14-17 ans il y a une école de voile en option — c\'est payant en plus, ça se réserve séparément.',
          },
          variants: {
            en: ['Teen Club has a sailing school as an optional extra — paid, needs separate booking.', 'For teens 14-17 there\'s sailing — it\'s optional and paid, ask at reception to book it.'],
            es: ['El Teen Club tiene escuela de vela como extra opcional — de pago, reserva aparte.', 'Para los teens de 14-17 hay vela — opcional y de pago, reservar en recepción.'],
            fr: ['Le Teen Club a une école de voile en option — payant, réservation séparée.', 'Pour les 14-17 ans il y a la voile — en option et payant, à réserver à la réception.'],
          },
        },
        {
          who: 'parents',
          category: 'babysitting',
          parent_asks: {
            en: 'My baby is only 18 months — can he join the club?',
            es: 'Mi bebé tiene solo 18 meses — ¿puede ir al club?',
            fr: 'Mon bébé a seulement 18 mois — il peut venir au club?',
            it: 'Il mio bambino ha solo 18 mesi — può venire al club?',
          },
          you_reply: {
            en: 'The clubs start from 3 years old. For children under 2 there\'s a dedicated care service — it\'s paid and needs to be booked. Please ask at reception.',
            es: 'Los clubes empiezan a partir de los 3 años. Para menores de 2 años hay un servicio dedicado — es de pago y requiere reserva. Por favor pregunte en recepción.',
            fr: 'Les clubs commencent à partir de 3 ans. Pour les moins de 2 ans il y a un service dédié — c\'est payant et sur réservation. Demandez à la réception.',
          },
          variants: {
            en: ['Under 2s have their own service — paid, needs booking. Reception will sort you out!', 'Clubs are from age 3. For under 2 there\'s a special paid service — just head to reception.'],
            es: ['Los menores de 2 tienen su propio servicio — de pago y con reserva. ¡Recepción se lo gestiona!', 'Los clubes son desde los 3 años. Para menos de 2 hay servicio especial de pago — en recepción.'],
            fr: ['Les moins de 2 ans ont leur propre service — payant et sur réservation. La réception s\'en occupe!', 'Les clubs c\'est à partir de 3 ans. Pour les moins de 2 ans un service spécial payant — à la réception.'],
          },
        },

        // ===== RESORT LE DUNE — KIDS =====
        {
          who: 'kids',
          category: 'luoghi',
          parent_asks: {
            en: 'What\'s Fort Crok?',
            es: '¿Qué es Fort Crok?',
            fr: 'C\'est quoi Fort Crok?',
            it: 'Cos\'è Fort Crok?',
          },
          you_reply: {
            en: 'Fort Crok is our cowboy fort! You can be a sheriff, defend the fort and go on adventures. It\'s in Villaggio Fantasia — want to go?',
            es: '¡Fort Crok es nuestro fuerte vaquero! Puedes ser sheriff, defender el fuerte y ir de aventuras. Está en el Villaggio Fantasia — ¿quieres ir?',
            fr: 'Fort Crok c\'est notre fort de cowboys! Tu peux être shérif, défendre le fort et partir à l\'aventure. C\'est dans le Villaggio Fantasia — on y va?',
          },
          variants: {
            en: ['It\'s the cowboy fort in Villaggio Fantasia — sheriff badges, adventures, the whole thing! Ready?', 'Our cowboy fort! Defend it, be a sheriff, have an adventure. In Villaggio Fantasia — shall we head there?'],
            es: ['¡Es el fuerte vaquero del Villaggio Fantasia — insignias de sheriff, aventuras, de todo! ¿Preparado?', '¡Nuestro fuerte vaquero! Defiéndelo, sé sheriff, vive una aventura. En el Villaggio Fantasia — ¿vamos?'],
            fr: ['C\'est le fort de cowboys du Villaggio Fantasia — badge de shérif, aventures, tout ça! Prêt?', 'Notre fort cowboy! Défends-le, sois shérif, pars à l\'aventure. Dans le Villaggio Fantasia — on y va?'],
          },
        },
        {
          who: 'kids',
          category: 'luoghi',
          parent_asks: {
            en: 'Can I go on the climbing wall?',
            es: '¿Puedo subir al muro de escalada?',
            fr: 'Je peux aller sur le mur d\'escalade?',
            it: 'Posso andare sulla parete di arrampicata?',
          },
          you_reply: {
            en: 'Yes! I\'ll put the harness on you first — it keeps you totally safe. Then you climb as high as you want!',
            es: '¡Sí! Primero te pongo el arnés — así estás completamente seguro. ¡Luego subes todo lo que quieras!',
            fr: 'Oui! Je te mets le harnais d\'abord — comme ça t\'es en sécurité totale. Ensuite tu montes aussi haut que tu veux!',
          },
          variants: {
            en: ['Of course — harness on first, then you\'re free to climb! It\'s safer than it looks.', 'Let\'s do it! I\'ll strap you in and you\'ll be amazed how easy it is once you\'re up there.'],
            es: ['¡Claro que sí — primero el arnés y luego a escalar! Es más fácil de lo que parece.', '¡Vamos! Te engancho el arnés y verás lo fácil que es una vez arriba.'],
            fr: ['Bien sûr — harnais d\'abord, ensuite tu grimpes! C\'est plus facile que ça en a l\'air.', 'On y va! Je t\'attache et tu vas voir comme c\'est facile une fois là-haut.'],
          },
        },
        {
          who: 'kids',
          category: 'luoghi',
          parent_asks: {
            en: 'Can I collect the eggs?',
            es: '¿Puedo recoger los huevos?',
            fr: 'Je peux ramasser les œufs?',
            it: 'Posso raccogliere le uova?',
          },
          you_reply: {
            en: 'Yes — come with me to the Puddaggiju! The hens laid fresh eggs this morning. Be very gentle, they break easily!',
            es: '¡Sí — ven conmigo al Puddaggiju! Las gallinas han puesto huevos frescos esta mañana. ¡Con mucho cuidado, se rompen fácil!',
            fr: 'Oui — viens avec moi au Puddaggiju! Les poules ont pondu des œufs frais ce matin. Très doucement, ils se cassent facilement!',
          },
          variants: {
            en: ['Absolutely! Fresh eggs this morning at the Puddaggiju — hold them gently, they\'re fragile!', 'Let\'s go to the Puddaggiju together — fresh eggs waiting for us! Careful now, nice and gentle.'],
            es: ['¡Claro! Huevos frescos esta mañana en el Puddaggiju — ¡sujétalos con cuidado, son frágiles!', '¡Vamos juntos al Puddaggiju — hay huevos frescos esperándonos! Con cuidado, suavecito.'],
            fr: ['Bien sûr! Des œufs frais ce matin au Puddaggiju — tiens-les doucement, ils sont fragiles!', 'On va ensemble au Puddaggiju — des œufs frais nous attendent! Attention, tout doucement.'],
          },
        },
        {
          who: 'kids',
          category: 'attività',
          parent_asks: {
            en: 'Is archery dangerous?',
            es: '¿El tiro con arco es peligroso?',
            fr: 'Le tir à l\'arc c\'est dangereux?',
            it: 'Il tiro con l\'arco è pericoloso?',
          },
          you_reply: {
            en: 'Not at all — as long as we follow the rules! Rule number one: never point the bow at a person, only at the target. Got it?',
            es: '¡Para nada — siempre que sigamos las reglas! Regla número uno: nunca apuntes el arco hacia una persona, solo al blanco. ¿Entendido?',
            fr: 'Pas du tout — tant qu\'on respecte les règles! Règle numéro un: on ne pointe jamais l\'arc vers une personne, seulement vers la cible. Compris?',
          },
          variants: {
            en: ['It\'s totally safe with the rules — and rule one is: bow at the target, never at people. Promise me?', 'Safe as can be! Just remember: bow points at the target only. Never at a person. Deal?'],
            es: ['Es totalmente seguro con las reglas — y la regla uno es: arco al blanco, nunca a las personas. ¿Me lo prometes?', '¡Muy seguro! Solo recuerda: el arco apunta al blanco solamente. Nunca a una persona. ¿Trato?'],
            fr: ['Totalement sûr avec les règles — et la règle un c\'est: arc vers la cible, jamais vers les gens. Tu me le promets?', 'Super sécurisé! Juste retiens: l\'arc pointe vers la cible uniquement. Jamais vers quelqu\'un. Marché?'],
          },
        },
        {
          who: 'kids',
          category: 'attività',
          parent_asks: {
            en: 'What\'s Baby Dance?',
            es: '¿Qué es la Baby Dance?',
            fr: 'C\'est quoi la Baby Dance?',
            it: 'Cos\'è la Baby Dance?',
          },
          you_reply: {
            en: 'Baby Dance is a show after dinner — fairy tale characters, music, dancing! It happens every evening from 19:30. You\'re going to love it!',
            es: '¡La Baby Dance es un espectáculo después de cenar — personajes de cuentos, música, baile! Pasa todas las noches a partir de las 19:30. ¡Te va a encantar!',
            fr: 'La Baby Dance c\'est un spectacle après le dîner — personnages de contes, musique, danse! Ça a lieu tous les soirs à partir de 19h30. Tu vas adorer!',
          },
          variants: {
            en: ['It\'s a fairy tale show after dinner — music, dancing, costumes! Every evening at 19:30.', 'Baby Dance is the best — fairy tale characters come alive after dinner! Every night at 7:30.'],
            es: ['¡Es un show de cuentos después de cenar — música, baile, disfraces! Todas las noches a las 19:30.', 'La Baby Dance es lo mejor — ¡los personajes de cuentos cobran vida después de cenar! Cada noche a las 19:30.'],
            fr: ['C\'est un show de contes après le dîner — musique, danse, costumes! Tous les soirs à 19h30.', 'La Baby Dance c\'est génial — des personnages de contes qui prennent vie après le dîner! Chaque soir à 19h30.'],
          },
        },
      ]

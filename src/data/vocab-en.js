// ============================================================
// VOCABOLARIO EN
// ============================================================
const EN_VOCAB = [
  {
    "language": "en",
    "type": "phrasal",
    "verb": "calm down",
    "emoji": "🧘",
    "simple": "relax / stop",
    "it": "calmarsi / calmare",
    "example_en": "Calm down, everything's okay!",
    "example_it": "Calmati, va tutto bene!",
    "tags": [
      "bambini",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "join in",
    "emoji": "🙌",
    "simple": "",
    "it": "partecipare, unirsi",
    "example_en": "Come on, join in! It's fun!",
    "example_it": "Dai, unisciti! È divertente!",
    "tags": [
      "base",
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "show off",
    "emoji": "🦚",
    "simple": "brag / perform",
    "it": "mettersi in mostra",
    "example_en": "He's just showing off in front of the others.",
    "example_it": "Si sta solo mettendo in mostra davanti agli altri.",
    "tags": [
      "bambini",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "mess up",
    "emoji": "😬",
    "simple": "make a mistake",
    "it": "fare un casino / sbagliare",
    "example_en": "Don't worry if you mess up — we'll try again!",
    "example_it": "Non preoccuparti se sbagli — riproviamo!",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "cheer up",
    "emoji": "😊",
    "simple": "smile / feel better",
    "it": "tirarsi su / animarsi",
    "example_en": "Cheer up! We're going to play your favourite game.",
    "example_it": "Tirati su! Facciamo il tuo gioco preferito.",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "give up",
    "emoji": "🏳️",
    "simple": "stop / quit",
    "it": "arrendersi, mollare",
    "example_en": "Don't give up! You're almost there.",
    "example_it": "Non mollare! Ci sei quasi.",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "keep on",
    "emoji": "💪",
    "simple": "continue / persist",
    "it": "continuare",
    "example_en": "Keep on trying, you'll get it!",
    "example_it": "Continua a provarci, ce la farai!",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look after",
    "emoji": "🛡️",
    "simple": "watch / supervise",
    "it": "prendersi cura di",
    "example_en": "Don't worry, I'll look after him.",
    "example_it": "Non preoccuparti, me ne prendo cura io.",
    "tags": [
      "bambini",
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "watch out",
    "emoji": "⚠️",
    "simple": "be careful / attention",
    "it": "fare attenzione",
    "example_en": "Watch out! The floor is wet.",
    "example_it": "Attenzione! Il pavimento è bagnato.",
    "tags": [
      "bambini",
      "sicurezza"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hand out",
    "emoji": "🤲",
    "simple": "distribute / give",
    "it": "distribuire",
    "example_en": "Can you help me hand out the stickers?",
    "example_it": "Mi aiuti a distribuire gli adesivi?",
    "tags": [
      "base",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "sort out",
    "emoji": "🔧",
    "simple": "fix / organize",
    "it": "sistemare / risolvere",
    "example_en": "I'll sort it out in a second.",
    "example_it": "Lo sistemo in un secondo.",
    "tags": [
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "come up with",
    "emoji": "💡",
    "simple": "invent / think of",
    "it": "inventare / trovare un'idea",
    "example_en": "She came up with a great game for the kids.",
    "example_it": "Ha inventato un bel gioco per i bambini.",
    "tags": [
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run out of",
    "emoji": "🪫",
    "simple": "finish / have no more",
    "it": "finire (scorte)",
    "example_en": "We've run out of balloons!",
    "example_it": "Abbiamo finito i palloncini!",
    "tags": [
      "attività",
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "show up",
    "emoji": "🚪",
    "simple": "arrive / appear",
    "it": "presentarsi, arrivare",
    "example_en": "He showed up a bit late but he had a great time.",
    "example_it": "È arrivato un po' tardi ma si è divertito.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "drop off",
    "emoji": "🚗",
    "simple": "leave / deliver",
    "it": "accompagnare / lasciare",
    "example_en": "You can drop her off at 3 and pick her up at 6.",
    "example_it": "Può lasciarla alle 3 e riprenderla alle 6.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "pick up",
    "emoji": "🫴",
    "simple": "collect / take",
    "it": "andare a prendere",
    "example_en": "What time are you picking him up?",
    "example_it": "A che ora viene a prenderlo?",
    "tags": [
      "base",
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "find out",
    "emoji": "🔍",
    "simple": "discover / learn",
    "it": "scoprire",
    "example_en": "I'll find out what happened and let you know.",
    "example_it": "Scopro cosa è successo e la avverto.",
    "tags": [
      "genitori",
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "let down",
    "emoji": "😞",
    "simple": "disappoint / fail",
    "it": "deludere",
    "example_en": "I promise we won't let you down.",
    "example_it": "Prometto che non la deluderemo.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look forward to",
    "emoji": "🤩",
    "simple": "anticipate / be excited",
    "it": "non vedere l'ora di",
    "example_en": "We're looking forward to seeing you at the party!",
    "example_it": "Non vediamo l'ora di vederla alla festa!",
    "tags": [
      "genitori",
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "reach out",
    "emoji": "📱",
    "simple": "contact / call",
    "it": "contattare",
    "example_en": "Feel free to reach out if you have any questions.",
    "example_it": "Non esiti a contattarmi per qualsiasi domanda.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "turn out",
    "emoji": "🎯",
    "simple": "result / end up being",
    "it": "rivelarsi / risultare",
    "example_en": "It turned out to be a really fun afternoon!",
    "example_it": "Si è rivelato un pomeriggio davvero divertente!",
    "tags": [
      "genitori",
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "end up",
    "emoji": "🛤️",
    "simple": "finally / eventually",
    "it": "finire per / ritrovarsi",
    "example_en": "He ended up having so much fun he didn't want to leave.",
    "example_it": "Alla fine si è divertito così tanto che non voleva andarsene.",
    "tags": [
      "genitori",
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get along with",
    "emoji": "🤝",
    "simple": "like / work well with",
    "it": "andare d'accordo con",
    "example_en": "She gets along really well with the other kids.",
    "example_it": "Va molto d'accordo con gli altri bambini.",
    "tags": [
      "genitori",
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "catch up",
    "emoji": "☕",
    "simple": "update / recap",
    "it": "aggiornarsi / recuperare",
    "example_en": "Let's catch up at the end of the session.",
    "example_it": "Ci aggiorniamo alla fine della sessione.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "set up",
    "emoji": "🏗️",
    "simple": "prepare / arrange",
    "it": "allestire / organizzare",
    "example_en": "We need to set up before the kids arrive.",
    "example_it": "Dobbiamo allestire prima che arrivino i bambini.",
    "tags": [
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "put off",
    "emoji": "⏰",
    "simple": "postpone / delay",
    "it": "rimandare",
    "example_en": "We had to put off the outdoor activity.",
    "example_it": "Abbiamo dovuto rimandare l'attività all'aperto.",
    "tags": [
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take on",
    "emoji": "💼",
    "simple": "accept / handle",
    "it": "assumersi / prendere",
    "example_en": "I took on the face painting this time.",
    "example_it": "Questa volta mi sono occupato del face painting.",
    "tags": [
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take over",
    "emoji": "👑",
    "simple": "replace / control",
    "it": "prendere il controllo",
    "example_en": "Can you take over while I sort out the food?",
    "example_it": "Puoi prendere il controllo mentre sistemo il cibo?",
    "tags": [
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "work out",
    "emoji": "✅",
    "simple": "solve / succeed",
    "it": "risolvere / funzionare",
    "example_en": "Don't worry, it'll all work out!",
    "example_it": "Non preoccuparti, si sistemerà tutto!",
    "tags": [
      "evento",
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "point out",
    "emoji": "👉",
    "simple": "highlight / mention",
    "it": "sottolineare / indicare",
    "example_en": "I just wanted to point out that he's allergic to nuts.",
    "example_it": "Volevo solo sottolineare che è allergico alle noci.",
    "tags": [
      "genitori",
      "sicurezza"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "check out",
    "emoji": "👀",
    "simple": "look at / see",
    "it": "dare un'occhiata",
    "example_en": "Check out what they made — it's amazing!",
    "example_it": "Dai un'occhiata a quello che hanno fatto — è incredibile!",
    "tags": [
      "attività",
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "think over",
    "emoji": "🤔",
    "simple": "consider / reflect",
    "it": "riflettere su",
    "example_en": "Think it over and let me know if you want to book.",
    "example_it": "Ci pensi e mi faccia sapere se vuole prenotare.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "break down",
    "emoji": "💥",
    "simple": "break / cry / fail",
    "it": "rompersi / scoppiare",
    "example_en": "The speaker broke down during the event.",
    "example_it": "Il microfono si è rotto durante l'evento.",
    "tags": [
      "evento",
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get over",
    "emoji": "🏔️",
    "simple": "recover / move on",
    "it": "superare",
    "example_en": "He got over his shyness after the first game.",
    "example_it": "Ha superato la timidezza dopo il primo gioco.",
    "tags": [
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "chill out",
    "emoji": "🧊",
    "simple": "relax / calm down",
    "it": "rilassarsi, calmarsi",
    "example_en": "Just chill out, everything will be fine!",
    "example_it": "Rilassati, andrà tutto bene!",
    "tags": [
      "bambini",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "break off",
    "emoji": "✂️",
    "simple": "stop / interrupt",
    "it": "interrompere, troncare",
    "example_en": "Let's break off the activity and take a short break.",
    "example_it": "Interrompiamo l'attività e facciamo una pausa.",
    "tags": [
      "attività",
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "figure out",
    "emoji": "🧩",
    "simple": "understand / solve",
    "it": "capire, trovare una soluzione",
    "example_en": "I need to figure out the best game for this group.",
    "example_it": "Devo capire qual è il gioco migliore per questo gruppo.",
    "tags": [
      "attività",
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run into",
    "emoji": "😲",
    "simple": "meet (by chance)",
    "it": "incontrare per caso",
    "example_en": "I ran into one of the kids' parents at the supermarket.",
    "example_it": "Ho incontrato per caso il genitore di uno dei bambini al supermercato.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "go down the drain",
    "emoji": "🚿",
    "simple": "be wasted / fail",
    "it": "andare sprecato",
    "example_en": "All my preparation went down the drain when the event got cancelled.",
    "example_it": "Tutta la mia preparazione è andata sprecata quando l'evento è stato cancellato.",
    "tags": [
      "evento",
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "put down",
    "emoji": "📍",
    "simple": "place / leave",
    "it": "mettere giù / posare",
    "example_en": "Put down the scissors, please!",
    "example_it": "Metti giù le forbici, per favore!",
    "tags": [
      "base",
      "bambini",
      "sicurezza"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "sit down",
    "emoji": "🪑",
    "simple": "be seated",
    "it": "sedersi",
    "example_en": "Sit down for lunch time.",
    "example_it": "Siediti per il pranzo.",
    "tags": [
      "base",
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "stand up",
    "emoji": "🧍",
    "simple": "get up / rise",
    "it": "alzarsi in piedi",
    "example_en": "Stand up for the game!",
    "example_it": "Alzati per il gioco!",
    "tags": [
      "base",
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "come along",
    "emoji": "👥",
    "simple": "follow / come with",
    "it": "seguire / venire con",
    "example_en": "Come along, everyone! We're going to play outside.",
    "example_it": "Venite tutti! Andiamo a giocare fuori.",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run around",
    "emoji": "🏃",
    "simple": "play / move freely",
    "it": "correre / muoversi liberamente",
    "example_en": "Go run around the garden!",
    "example_it": "Vai a correre in giardino!",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "go away",
    "emoji": "👋",
    "simple": "leave / disappear",
    "it": "andarsene / smettila",
    "example_en": "The wasp will go away if we're quiet.",
    "example_it": "La vespa se ne andrà se stiamo fermi.",
    "tags": [
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "carry on",
    "emoji": "➡️",
    "simple": "continue / keep going",
    "it": "continuare / andare avanti",
    "example_en": "Carry on with your drawing.",
    "example_it": "Continua con il tuo disegno.",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "clean up",
    "emoji": "🧹",
    "simple": "tidy / put away",
    "it": "riordinare / mettere a posto",
    "example_en": "Time to clean up! Put the toys away.",
    "example_it": "È ora di riordinare! Mettete a posto i giochi.",
    "tags": [
      "attività",
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "wrap up",
    "emoji": "🎁",
    "simple": "finish / conclude",
    "it": "concludere / finire",
    "example_en": "We need to wrap up the activity in 5 minutes.",
    "example_it": "Dobbiamo concludere l'attività in 5 minuti.",
    "tags": [
      "attività",
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "clear up",
    "emoji": "💧",
    "simple": "clean / remove",
    "it": "pulire / sgomberare",
    "example_en": "Clear up that spill before someone slips.",
    "example_it": "Pulisci quel liquido prima che qualcuno scivoli.",
    "tags": [
      "sicurezza",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take care of",
    "emoji": "🤝",
    "simple": "handle / manage",
    "it": "occuparsi di / gestire",
    "example_en": "I'll take care of that situation.",
    "example_it": "Me ne occupo io.",
    "tags": [
      "bambini",
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "deal with",
    "emoji": "⚖️",
    "simple": "handle / manage",
    "it": "gestire / affrontare",
    "example_en": "How do we deal with kids who won't listen?",
    "example_it": "Come gestiamo i bambini che non ascoltano?",
    "tags": [
      "problemi",
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "talk to",
    "emoji": "💬",
    "simple": "speak with / tell",
    "it": "parlare con",
    "example_en": "I need to talk to the parent about his allergies.",
    "example_it": "Devo parlare con il genitore delle sue allergie.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "listen to",
    "emoji": "👂",
    "simple": "hear / pay attention",
    "it": "ascoltare / prestare attenzione",
    "example_en": "Listen to what Marco is saying.",
    "example_it": "Ascolta quello che dice Marco.",
    "tags": [
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get on with",
    "emoji": "😊",
    "simple": "like / work well with",
    "it": "andare d'accordo / lavorare bene con",
    "example_en": "The kids are getting on really well with each other.",
    "example_it": "I bambini vanno molto d'accordo tra di loro.",
    "tags": [
      "bambini",
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "check on",
    "emoji": "👁️",
    "simple": "verify / see / monitor",
    "it": "controllare / andare a vedere",
    "example_en": "Let me check on the kids in the other room.",
    "example_it": "Vado a controllare i bambini nell'altra stanza.",
    "tags": [
      "bambini",
      "sicurezza"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "settle down",
    "emoji": "🤫",
    "simple": "be quiet / calm down",
    "it": "calmarsi / stare tranquillo",
    "example_en": "Settle down, everyone. Story time!",
    "example_it": "Calmatevi tutti. È l'ora della storia!",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "feel better",
    "emoji": "💊",
    "simple": "recover / improve",
    "it": "stare meglio / riprendersi",
    "example_en": "I hope you feel better soon!",
    "example_it": "Spero che tu stia meglio presto!",
    "tags": [
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "lighten up",
    "emoji": "😆",
    "simple": "relax / don't worry",
    "it": "prendersela meno / rilassarsi",
    "example_en": "Lighten up! It's just a game.",
    "example_it": "Prendila con leggerezza! È solo un gioco.",
    "tags": [
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "liven up",
    "emoji": "🎉",
    "simple": "energize / make fun",
    "it": "animare / rendere più vivace",
    "example_en": "Let's liven up this activity with some music!",
    "example_it": "Rendiamo questa attività più vivace con un po' di musica!",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "launch into",
    "emoji": "🚀",
    "simple": "",
    "it": "buttarsi a capofitto, lanciarsi",
    "example_en": "Alright everyone, let's launch into the next game!",
    "example_it": "Dai ragazzi, buttiamoci nel prossimo gioco!",
    "tags": [
      "attività",
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "rule out",
    "emoji": "❌",
    "simple": "",
    "it": "escludere, eliminare",
    "example_en": "I can't rule out moving the party indoors if it rains.",
    "example_it": "Non posso escludere di spostare la festa al chiuso se piove.",
    "tags": [
      "evento",
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "go off",
    "emoji": "📢",
    "simple": "",
    "it": "andare a male / smettere di funzionare",
    "example_en": "I hope the music system doesn't go off during the show.",
    "example_it": "Spero che il sistema audio non si inceppi durante lo spettacolo.",
    "tags": [
      "evento",
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "pig out",
    "emoji": "🐷",
    "simple": "eat a lot / stuff yourself",
    "it": "mangiare voracemente, abbuffarsi",
    "example_en": "The kids pigged out on pizza at the party.",
    "example_it": "I bambini si sono abbuffati di pizza alla festa.",
    "tags": [
      "cibo",
      "divertimento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "line up",
    "emoji": "📏",
    "simple": "organize / arrange in a line",
    "it": "organizzare, allineare",
    "example_en": "We need to line up before the game starts.",
    "example_it": "Dobbiamo organizzarci prima che inizi il gioco.",
    "tags": [
      "base",
      "attività",
      "organizzazione"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "waltz into",
    "emoji": "🚪",
    "simple": "enter casually / stroll in",
    "it": "entrare tranquillamente, camminare verso",
    "example_en": "He waltzed into the room without knocking.",
    "example_it": "È entrato tranquillamente senza bussare.",
    "tags": [
      "movimento",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take away",
    "emoji": "🛍️",
    "simple": "remove / take with you",
    "it": "portare via, asportare",
    "example_en": "The waiter will take away the plates.",
    "example_it": "Il cameriere porterà via i piatti.",
    "tags": [
      "ristorante",
      "quotidiano"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "horse around",
    "emoji": "🐴",
    "simple": "play foolishly / mess about",
    "it": "fare gli scherzi, giocare selvaggiamente",
    "example_en": "The kids were horsing around instead of doing homework.",
    "example_it": "I bambini stavano facendo i matti anziché fare i compiti.",
    "tags": [
      "bambini",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "cut down on",
    "emoji": "✂️",
    "simple": "reduce / cut back",
    "it": "ridurre, tagliare",
    "example_en": "I'm trying to cut down on sugar.",
    "example_it": "Sto cercando di ridurre lo zucchero.",
    "tags": [
      "abitudini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look for",
    "emoji": "🔍",
    "simple": "search / find",
    "it": "cercare",
    "example_en": "I'm looking for my keys.",
    "example_it": "Sto cercando le mie chiavi.",
    "tags": [
      "base",
      "quotidiano"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get by",
    "emoji": "💪",
    "simple": "manage / survive",
    "it": "cavarsela, tirare avanti",
    "example_en": "We don't earn much, but we get by.",
    "example_it": "Non guadagniamo molto, ma ce la caviamo.",
    "tags": [
      "quotidiano"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "try on",
    "emoji": "👗",
    "simple": "test / wear",
    "it": "provare (un vestito / un paio di scarpe)",
    "example_en": "She tried on the dress before buying it.",
    "example_it": "Ha provato il vestito prima di comprarlo.",
    "tags": [
      "quotidiano"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "come across",
    "emoji": "🎲",
    "simple": "find / stumble upon",
    "it": "imbattersi in, trovare per caso",
    "example_en": "I came across an interesting article online.",
    "example_it": "Mi sono imbattuto in un articolo interessante online.",
    "tags": [
      "quotidiano"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "make up",
    "emoji": "🤝",
    "simple": "forgive / reconcile",
    "it": "fare pace, riconciliarsi",
    "example_en": "They argued but made up the next day.",
    "example_it": "Hanno litigato ma il giorno dopo hanno fatto pace.",
    "tags": [
      "relazioni"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "talk over",
    "emoji": "💬",
    "simple": "discuss / talk through",
    "it": "discutere, parlare di qualcosa insieme",
    "example_en": "Let's talk it over tonight.",
    "example_it": "Parliamone stasera.",
    "tags": [
      "comunicazione"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "come up against",
    "emoji": "🧱",
    "simple": "face / run into",
    "it": "trovarsi di fronte a, dover affrontare",
    "example_en": "We came up against an unexpected problem.",
    "example_it": "Ci siamo trovati di fronte a un problema inaspettato.",
    "tags": [
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "break up",
    "emoji": "💔",
    "simple": "split / end a relationship",
    "it": "lasciarsi, separarsi",
    "example_en": "They decided to break up after two years.",
    "example_it": "Hanno deciso di lasciarsi dopo due anni.",
    "tags": [
      "relazioni"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "chicken out",
    "emoji": "🐔",
    "simple": "back out / get scared",
    "it": "tirarsi indietro per paura",
    "example_en": "He wanted to try bungee jumping but chickened out.",
    "example_it": "Voleva fare il bungee jumping ma si è tirato indietro.",
    "tags": [
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run away",
    "emoji": "🏃",
    "simple": "flee / escape",
    "it": "scappare, fuggire",
    "example_en": "The dog ran away when it heard the fireworks.",
    "example_it": "Il cane è scappato quando ha sentito i fuochi d'artificio.",
    "tags": [
      "movimento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run over",
    "emoji": "🚗",
    "simple": "hit with vehicle / crush",
    "it": "investire, travolgere",
    "example_en": "The car ran over my shoe!",
    "example_it": "La macchina mi ha schiacciato la scarpa!",
    "tags": [
      "quotidiano",
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run through",
    "emoji": "📋",
    "simple": "go over / review quickly",
    "it": "passare velocemente in rassegna",
    "example_en": "Let's run through the plan before we start.",
    "example_it": "Rivediamo il piano prima di iniziare.",
    "tags": [
      "attività",
      "lavoro"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "make out",
    "emoji": "🧩",
    "simple": "understand / distinguish",
    "it": "distinguere, capire, riuscire a vedere",
    "example_en": "I couldn't make out what he was saying.",
    "example_it": "Non riuscivo a capire cosa stesse dicendo.",
    "tags": [
      "comunicazione"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "make up for",
    "emoji": "⚖️",
    "simple": "compensate / make amends",
    "it": "compensare, rimediare a",
    "example_en": "I'll make up for being late by staying longer.",
    "example_it": "Compenserò il ritardo restando più a lungo.",
    "tags": [
      "relazioni",
      "quotidiano"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "bug out",
    "emoji": "😱",
    "simple": "freak out / escape fast",
    "it": "spaventarsi molto, scappare di colpo",
    "example_en": "He totally bugged out when he saw the spider.",
    "example_it": "Si è spaventato da morire quando ha visto il ragno.",
    "tags": [
      "emozioni",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "fill someone in",
    "emoji": "📢",
    "simple": "update / inform",
    "it": "aggiornare qualcuno, metterlo al corrente",
    "example_en": "Can you fill me in on what I missed?",
    "example_it": "Mi puoi aggiornare su quello che mi sono perso?",
    "tags": [
      "comunicazione"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take off",
    "emoji": "👕",
    "simple": "remove",
    "it": "togliere / sfilare",
    "example_en": "Take off your jacket.",
    "example_it": "Togliti la giacca.",
    "tags": [
      "base",
      "bambini",
      "azioni base"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take out",
    "emoji": "🎁",
    "simple": "remove / extract",
    "it": "tirare fuori / estrarre",
    "example_en": "Take out your snack.",
    "example_it": "Tira fuori il tuo spuntino.",
    "tags": [
      "base",
      "bambini",
      "azioni base"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "put in",
    "emoji": "📦",
    "simple": "insert / place",
    "it": "mettere dentro / inserire",
    "example_en": "Put it in the box.",
    "example_it": "Mettilo dentro la scatola.",
    "tags": [
      "base",
      "bambini",
      "azioni base"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "put on",
    "emoji": "👕",
    "simple": "wear / dress",
    "it": "mettere / indossare",
    "example_en": "Put on your jacket.",
    "example_it": "Metti la giacca.",
    "tags": [
      "base",
      "bambini",
      "azioni base"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "put away",
    "emoji": "🎒",
    "simple": "store / tidy",
    "it": "mettere a posto / riporre",
    "example_en": "Put away the books.",
    "example_it": "Metti a posto i libri.",
    "tags": [
      "base",
      "bambini",
      "attività",
      "pulizia"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "wake up",
    "emoji": "👁️",
    "simple": "awake",
    "it": "svegliarsi",
    "example_en": "Wake up! It's time for breakfast.",
    "example_it": "Svegliati! È ora di colazione.",
    "tags": [
      "base",
      "bambini",
      "routine"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get up",
    "emoji": "⬆️",
    "simple": "stand / rise",
    "it": "alzarsi (dal letto)",
    "example_en": "Get up and get dressed!",
    "example_it": "Alzati e vestiti!",
    "tags": [
      "base",
      "bambini",
      "routine"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "go out",
    "emoji": "🚪",
    "simple": "exit / leave",
    "it": "uscire (di casa)",
    "example_en": "We're going out to play.",
    "example_it": "Andiamo fuori a giocare.",
    "tags": [
      "base",
      "bambini",
      "attività",
      "outdoor"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "come back",
    "emoji": "↩️",
    "simple": "return",
    "it": "tornare / ritornare",
    "example_en": "Come back in 10 minutes.",
    "example_it": "Torna fra 10 minuti.",
    "tags": [
      "bambini",
      "tempo"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "turn on",
    "emoji": "💡",
    "simple": "switch on",
    "it": "accendere",
    "example_en": "Turn on the light, please.",
    "example_it": "Accendi la luce, per favore.",
    "tags": [
      "base",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "turn off",
    "emoji": "🌙",
    "simple": "switch off",
    "it": "spegnere",
    "example_en": "Turn off the music when we're done.",
    "example_it": "Spegni la musica quando abbiamo finito.",
    "tags": [
      "base",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "wait for",
    "emoji": "⏳",
    "simple": "stay / expect",
    "it": "aspettare / attendere",
    "example_en": "Wait for your turn, please.",
    "example_it": "Aspetta il tuo turno, per favore.",
    "tags": [
      "base",
      "bambini",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get in",
    "emoji": "🚗",
    "simple": "enter / climb in",
    "it": "salire (in auto/piscina)",
    "example_en": "Get in the car.",
    "example_it": "Sali in macchina.",
    "tags": [
      "base",
      "bambini",
      "movimento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get out",
    "emoji": "🚪",
    "simple": "exit / leave",
    "it": "scendere / uscire",
    "example_en": "Get out of the pool.",
    "example_it": "Esci dalla piscina.",
    "tags": [
      "base",
      "bambini",
      "sicurezza",
      "movimento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get on",
    "emoji": "🚌",
    "simple": "board / climb on",
    "it": "salire (su autobus, bici)",
    "example_en": "Get on the bus.",
    "example_it": "Sali sull'autobus.",
    "tags": [
      "bambini",
      "movimento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get off",
    "emoji": "⬇️",
    "simple": "descend / exit",
    "it": "scendere (da autobus, bici)",
    "example_en": "Get off the bike.",
    "example_it": "Scendi dalla bici.",
    "tags": [
      "bambini",
      "movimento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "eat up",
    "emoji": "🍽️",
    "simple": "finish eating",
    "it": "finire tutto il cibo",
    "example_en": "Eat up your vegetables!",
    "example_it": "Finisci le verdure!",
    "tags": [
      "bambini",
      "tavola",
      "nutrizione"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "drink up",
    "emoji": "💧",
    "simple": "finish drinking",
    "it": "bere tutto",
    "example_en": "Drink up your water.",
    "example_it": "Finisci l'acqua.",
    "tags": [
      "bambini",
      "tavola"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "dig in",
    "emoji": "🍴",
    "simple": "start eating",
    "it": "iniziare a mangiare con entusiasmo",
    "example_en": "Dig in, everyone!",
    "example_it": "Iniziamo a mangiare!",
    "tags": [
      "bambini",
      "tavola"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "clear away",
    "emoji": "🧼",
    "simple": "tidy / clean up",
    "it": "sparecchiare / togliere le cose",
    "example_en": "Let's clear away the dishes.",
    "example_it": "Togliamo i piatti.",
    "tags": [
      "bambini",
      "pulizia",
      "tavola"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "wipe down",
    "emoji": "🧹",
    "simple": "clean / wipe",
    "it": "passare lo straccio / pulire",
    "example_en": "Let's wipe down the table.",
    "example_it": "Puliamo il tavolo.",
    "tags": [
      "bambini",
      "pulizia"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hand in",
    "emoji": "📄",
    "simple": "submit / give",
    "it": "consegnare (lavoro)",
    "example_en": "Hand in your drawings, please.",
    "example_it": "Consegna i tuoi disegni, per favore.",
    "tags": [
      "base",
      "bambini",
      "attività",
      "scuola"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take turns",
    "emoji": "🔄",
    "simple": "alternate / rotate",
    "it": "fare a turno",
    "example_en": "Take turns on the swing.",
    "example_it": "Fate a turno sull'altalena.",
    "tags": [
      "bambini",
      "giochi",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "cut out",
    "emoji": "✂️",
    "simple": "cut / trim",
    "it": "ritagliare",
    "example_en": "Cut out the shape from the paper.",
    "example_it": "Ritaglia la forma dalla carta.",
    "tags": [
      "bambini",
      "attività",
      "laboratorio"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "color in",
    "emoji": "🖍️",
    "simple": "paint / colour",
    "it": "colorare (dentro i margini)",
    "example_en": "Color in the picture.",
    "example_it": "Colora il disegno.",
    "tags": [
      "bambini",
      "attività",
      "laboratorio"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "tidy up",
    "emoji": "🧸",
    "simple": "organize / clean",
    "it": "riordinare lo spazio",
    "example_en": "Let's tidy up the room.",
    "example_it": "Riordiniamo la stanza.",
    "tags": [
      "bambini",
      "pulizia",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "slow down",
    "emoji": "🐢",
    "simple": "reduce speed",
    "it": "rallentare",
    "example_en": "Slow down! You're running too fast.",
    "example_it": "Rallenta! Stai correndo troppo veloce.",
    "tags": [
      "bambini",
      "sicurezza"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hurry up",
    "emoji": "⚡",
    "simple": "rush / move fast",
    "it": "sbrigarsi / affrettarsi",
    "example_en": "Hurry up, it's almost lunch time!",
    "example_it": "Sbrigati, è quasi ora di pranzo!",
    "tags": [
      "bambini",
      "tempo"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "keep up",
    "emoji": "🚶‍♂️",
    "simple": "maintain pace",
    "it": "tenere il passo",
    "example_en": "Keep up with the group!",
    "example_it": "Tieni il passo con il gruppo!",
    "tags": [
      "bambini",
      "movimento",
      "gruppo"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look around",
    "emoji": "👀",
    "simple": "observe / explore",
    "it": "guardarsi intorno",
    "example_en": "Look around and find a partner.",
    "example_it": "Guardati intorno e trova un compagno.",
    "tags": [
      "bambini",
      "attività",
      "outdoor"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "go back",
    "emoji": "↩️",
    "simple": "return / retreat",
    "it": "tornare indietro",
    "example_en": "We forgot something, let's go back.",
    "example_it": "Abbiamo dimenticato qualcosa, torniamo indietro.",
    "tags": [
      "bambini",
      "movimento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "dig up",
    "emoji": "⛏️",
    "simple": "excavate / unearth",
    "it": "scavare per estrarre",
    "example_en": "Let's dig up the potatoes!",
    "example_it": "Scaviamo le patate!",
    "tags": [
      "outdoor",
      "orto",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "pull out",
    "emoji": "🌱",
    "simple": "extract / remove",
    "it": "strappare (erbacce)",
    "example_en": "Pull out the weeds.",
    "example_it": "Strappa le erbacce.",
    "tags": [
      "outdoor",
      "orto",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "plant out",
    "emoji": "🌿",
    "simple": "plant / transplant",
    "it": "trapiantare",
    "example_en": "Plant out the seedlings.",
    "example_it": "Trapianta le piantine.",
    "tags": [
      "outdoor",
      "orto",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "water down",
    "emoji": "💧",
    "simple": "dilute",
    "it": "diluire acqua/concime",
    "example_en": "Water down the soil after planting.",
    "example_it": "Innaffia la terra dopo il trapianto.",
    "tags": [
      "outdoor",
      "orto"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "grow up",
    "emoji": "🌱",
    "simple": "mature / develop",
    "it": "crescere (piante / bambini)",
    "example_en": "Watch the plants grow up!",
    "example_it": "Guarda le piante crescere!",
    "tags": [
      "outdoor",
      "orto",
      "crescita"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "cut back",
    "emoji": "✂️",
    "simple": "trim / prune",
    "it": "potare / accorciare rami",
    "example_en": "Cut back the branches.",
    "example_it": "Accorcia i rami.",
    "tags": [
      "outdoor",
      "orto"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "clear out",
    "emoji": "🧹",
    "simple": "empty / clean out",
    "it": "fare pulizia / svuotare",
    "example_en": "Let's clear out the dead leaves.",
    "example_it": "Togliamo le foglie secche.",
    "tags": [
      "outdoor",
      "orto",
      "pulizia"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "warm up",
    "emoji": "🔥",
    "simple": "exercise / prepare",
    "it": "riscaldarsi",
    "example_en": "Let's warm up before we swim.",
    "example_it": "Riscaldiamoci prima di nuotare.",
    "tags": [
      "piscina",
      "attività",
      "esercizio"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "dive in",
    "emoji": "🏊",
    "simple": "plunge / jump",
    "it": "tuffarsi",
    "example_en": "Ready to dive in?",
    "example_it": "Pronti a tuffarvi?",
    "tags": [
      "piscina",
      "movimento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "splash around",
    "emoji": "💦",
    "simple": "play in water",
    "it": "sguazzare / giocare in acqua",
    "example_en": "Come on, let's splash around!",
    "example_it": "Dai, sguazziamo!",
    "tags": [
      "piscina",
      "giochi",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "dry off",
    "emoji": "🧣",
    "simple": "get dry",
    "it": "asciugarsi bene",
    "example_en": "Dry off with your towel.",
    "example_it": "Asciugati bene con l'asciugamano.",
    "tags": [
      "piscina",
      "igiene"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "cool down",
    "emoji": "❄️",
    "simple": "calm / chill",
    "it": "rinfrescarsi / calmarsi",
    "example_en": "Let's cool down after the game.",
    "example_it": "Rinfreschiamoci dopo il gioco.",
    "tags": [
      "piscina",
      "attività",
      "riposo"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hold on",
    "emoji": "✊",
    "simple": "grip / wait",
    "it": "tenersi forte",
    "example_en": "Hold on to the rail!",
    "example_it": "Tieniti al corrimano!",
    "tags": [
      "piscina",
      "sicurezza"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "keep away",
    "emoji": "🚫",
    "simple": "maintain distance",
    "it": "stare lontano",
    "example_en": "Keep away from the deep end.",
    "example_it": "Stai lontano dalla parte profonda.",
    "tags": [
      "piscina",
      "sicurezza",
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "stay away",
    "emoji": "🚫",
    "simple": "avoid / keep clear",
    "it": "rimani lontano",
    "example_en": "Stay away from the edge.",
    "example_it": "Rimani lontano dal bordo.",
    "tags": [
      "piscina",
      "sicurezza",
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "share out",
    "emoji": "🤝",
    "simple": "distribute / divide",
    "it": "dividere e distribuire",
    "example_en": "Let's share out the toys.",
    "example_it": "Dividiamo i giocattoli.",
    "tags": [
      "bambini",
      "giochi",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "glue down",
    "emoji": "🧴",
    "simple": "stick / adhere",
    "it": "incollare sopra una superficie",
    "example_en": "Glue down the stickers.",
    "example_it": "Incolla gli adesivi.",
    "tags": [
      "bambini",
      "laboratorio"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "call back",
    "emoji": "📞",
    "simple": "return a call",
    "it": "richiamare al telefono",
    "example_en": "I'll call you back later.",
    "example_it": "Ti richiamo più tardi.",
    "tags": [
      "genitori",
      "comunicazione"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hang up",
    "emoji": "📞",
    "simple": "end a call",
    "it": "riattaccare il telefono",
    "example_en": "Don't hang up, I need to tell you something!",
    "example_it": "Non riattaccare, devo dirti qualcosa!",
    "tags": [
      "genitori",
      "comunicazione"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hang out",
    "emoji": "👯",
    "simple": "spend time / relax",
    "it": "passare il tempo insieme",
    "example_en": "We're hanging out in the park.",
    "example_it": "Stiamo al parco.",
    "tags": [
      "attività",
      "tempo libero"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "throw away",
    "emoji": "🗑️",
    "simple": "discard / trash",
    "it": "buttare via",
    "example_en": "Throw away the trash.",
    "example_it": "Butta la spazzatura.",
    "tags": [
      "pulizia",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "turn up",
    "emoji": "📢",
    "simple": "increase volume",
    "it": "alzare (volume/temperatura)",
    "example_en": "Can you turn up the music?",
    "example_it": "Puoi alzare la musica?",
    "tags": [
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "turn down",
    "emoji": "🔇",
    "simple": "decrease volume",
    "it": "abbassare (volume/temperatura)",
    "example_en": "Turn down the volume, please.",
    "example_it": "Abbassa il volume, per favore.",
    "tags": [
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look up",
    "emoji": "📚",
    "simple": "search / check",
    "it": "cercare informazioni",
    "example_en": "Look up the definition in the dictionary.",
    "example_it": "Cerca la definizione nel dizionario.",
    "tags": [
      "attività",
      "scuola"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "write down",
    "emoji": "✏️",
    "simple": "note / record",
    "it": "appuntarsi / scrivere su carta",
    "example_en": "Write down your name, please.",
    "example_it": "Scrivi il tuo nome, per favore.",
    "tags": [
      "attività",
      "scuola"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "fill out",
    "emoji": "📋",
    "simple": "complete",
    "it": "compilare (modulo)",
    "example_en": "Fill out the form.",
    "example_it": "Compila il modulo.",
    "tags": [
      "attività",
      "moduli"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "can't seem to",
    "emoji": "🤷",
    "simple": "unable / struggle",
    "it": "non riesco proprio / sembra che non riesca",
    "example_en": "I can't seem to focus on anything today.",
    "example_it": "Non riesco a concentrarmi su nulla oggi.",
    "tags": [
      "comunicazione",
      "base"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look into",
    "emoji": "🔍",
    "simple": "investigate / examine",
    "it": "indagare / esaminare",
    "example_en": "The police are looking into the case.",
    "example_it": "La polizia sta indagando sul caso.",
    "tags": [
      "lavoro",
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look out",
    "emoji": "⚠️",
    "simple": "be careful / watch out",
    "it": "fare attenzione",
    "example_en": "Look out! There's a car coming!",
    "example_it": "Attenzione! Sta arrivando una macchina!",
    "tags": [
      "sicurezza",
      "base"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look over",
    "emoji": "👀",
    "simple": "check / review",
    "it": "controllare / dare un'occhiata",
    "example_en": "I looked over the report before the meeting.",
    "example_it": "Ho controllato il rapporto prima della riunione.",
    "tags": [
      "lavoro",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look through",
    "emoji": "📸",
    "simple": "browse / examine",
    "it": "sfogliare / esaminare",
    "example_en": "I'm looking through old photos.",
    "example_it": "Sto sfogliando vecchie foto.",
    "tags": [
      "quotidiano",
      "tempo libero"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "In a pickle",
    "emoji": "🥒",
    "simple": "",
    "it": "Nei guai / In una situazione difficile",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini",
      "problemi"
    ],
    "context_note": "situazione complicata",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "To have your head in the clouds",
    "emoji": "☁️",
    "simple": "",
    "it": "Avere la testa tra le nuvole",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "essere distratto o perso nei propri pensieri",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "To cost an arm and a leg",
    "emoji": "💸",
    "simple": "",
    "it": "Costare un occhio della testa",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "qualcosa di molto caro",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "To get one's act together",
    "emoji": "🔋",
    "simple": "",
    "it": "Darsi una mossa / attivarsi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "iniziare a impegnarsi o reagire",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "To put one's foot in it",
    "emoji": "🦶",
    "simple": "",
    "it": "Fare una gaffe / sbagliare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "fare o dire qualcosa fuori luogo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "It slipped my mind",
    "emoji": "🧠",
    "simple": "",
    "it": "Mi è sfuggito di mente",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "dimenticare qualcosa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "I'm all ears",
    "emoji": "👂",
    "simple": "",
    "it": "Sono tutt'orecchi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "ascolto attento",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Play it by ear",
    "emoji": "🎵",
    "simple": "",
    "it": "Decidere sul momento / Vedere come va",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "improvvisare, essere flessibili",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Spill the beans",
    "emoji": "🫘",
    "simple": "",
    "it": "Rivelare un segreto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "dire qualcosa che non si doveva",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "On the same page",
    "emoji": "📖",
    "simple": "",
    "it": "Sulla stessa lunghezza d'onda",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "essere d'accordo, capirsi",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Go haywire",
    "emoji": "🌀",
    "simple": "",
    "it": "Andare in tilt / non funzionare più",
    "example_en": "",
    "example_it": "",
    "tags": [
      "problemi"
    ],
    "context_note": "quando qualcosa smette improvvisamente di funzionare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Without a hitch",
    "emoji": "✨",
    "simple": "",
    "it": "Senza intoppi / liscio come l'olio",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "evento o attività che va tutto perfettamente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "The jig is up",
    "emoji": "🥕",
    "simple": "",
    "it": "È tutto finito / non c'è più nulla da fare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "problemi"
    ],
    "context_note": "situazione senza via d'uscita, tutto è perduto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Take something for granted",
    "emoji": "🙈",
    "simple": "",
    "it": "Dare qualcosa per scontato",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "non apprezzare ciò che si ha, considerarlo ovvio",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Tackle an issue",
    "emoji": "⚔️",
    "simple": "",
    "it": "Affrontare un problema con determinazione",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "gestire o risolvere attivamente una difficoltà",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Take into account",
    "emoji": "🧮",
    "simple": "",
    "it": "Tenere conto di / considerare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "lavoro"
    ],
    "context_note": "includere un fattore nel ragionamento o nella decisione",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Put pressure on someone",
    "emoji": "😤",
    "simple": "",
    "it": "Mettere pressione a qualcuno",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "forzare o spingere qualcuno a fare qualcosa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Have a knack for",
    "emoji": "🎯",
    "simple": "",
    "it": "Avere talento/attitudine per",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "essere bravo/a naturalmente in qualcosa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "It looks like",
    "emoji": "👀",
    "simple": "",
    "it": "Sembra che / ha l'aria di",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "apparenza o impressione iniziale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "A sight for sore eyes",
    "emoji": "👁️",
    "simple": "",
    "it": "Un vero piacere per gli occhi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "qualcosa di bellissimo e gradevole",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Feel under the weather",
    "emoji": "🌧️",
    "simple": "",
    "it": "Non sentirsi bene / stare male",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "malessere, malattia lieve",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Hurl into the lion's den",
    "emoji": "🦁",
    "simple": "",
    "it": "Buttarsi nella tana del leone",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "affrontare una situazione pericolosa o difficile",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Put all your eggs in one basket",
    "emoji": "🧺",
    "simple": "",
    "it": "Mettere tutte le uova nello stesso paniere",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "rischiare tutto su una sola cosa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Sow your wild oats",
    "emoji": "🌾",
    "simple": "",
    "it": "Sfogare i propri istinti da giovane",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "vivere avventure giovanili senza freni",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Red carpet treatment",
    "emoji": "🎬",
    "simple": "",
    "it": "Trattamento rosso-carpeto / grande accoglienza",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "ricevere un'accoglienza importante e speciale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Red tape",
    "emoji": "📋",
    "simple": "",
    "it": "Burocrazia / procedure lente",
    "example_en": "",
    "example_it": "",
    "tags": [
      "lavoro"
    ],
    "context_note": "complessità burocratiche e iter amministrativi lunghi",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "In the red",
    "emoji": "💸",
    "simple": "",
    "it": "In rosso / con debiti",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "essere in perdita finanziaria",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "See red",
    "emoji": "😡",
    "simple": "",
    "it": "Andare su tutte le furie / arrabbiarsi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "arrabbiarsi moltissimo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Feel blue",
    "emoji": "💙",
    "simple": "",
    "it": "Sentirsi triste / melanconico",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "tristezza, malinconia",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Once in a blue moon",
    "emoji": "🌙",
    "simple": "",
    "it": "Una volta nella vita blu / raramente",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "evento che accade molto raramente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Blue blood",
    "emoji": "👑",
    "simple": "",
    "it": "Sangue blu / nobiltà",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "essere di famiglia nobile o aristocratica",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Out of the blue",
    "emoji": "☁️",
    "simple": "",
    "it": "Dal nulla / inaspettatamente",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "accadimento improvviso e sorprendente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "The last straw",
    "emoji": "🚫",
    "simple": "",
    "it": "L'ultima goccia che fa traboccare il vaso",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "situazione che fa arrabbiare dopo molto tempo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Miss the point",
    "emoji": "🎯",
    "simple": "",
    "it": "Non cogliere il punto / perdere il significato",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "non capire il senso di quello che viene detto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Filthy rich",
    "emoji": "🤑",
    "simple": "",
    "it": "Ricco sfondato",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "persona estremamente ricca, in modo quasi osceno",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Save money for a rainy day",
    "emoji": "☔",
    "simple": "",
    "it": "Fare un gruzzoletto / risparmiare per i momenti difficili",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "mettere soldi da parte per emergenze future",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Spend money like water",
    "emoji": "💸",
    "simple": "",
    "it": "Avere le mani bucate / sperperare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "spendere soldi in modo eccessivo e irresponsabile",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Hit the road",
    "emoji": "🚗",
    "simple": "",
    "it": "Mettersi in viaggio / andarsene",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "partire, iniziare un viaggio o andarsene",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Hit the sack",
    "emoji": "😴",
    "simple": "",
    "it": "Andare a letto / crollare dal sonno",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "andare a dormire, specialmente quando si è stanchi",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "In a nutshell",
    "emoji": "🥜",
    "simple": "",
    "it": "In poche parole / in sintesi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "riassumere qualcosa brevemente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Keep an eye on",
    "emoji": "👁️",
    "simple": "",
    "it": "Tenere d'occhio / sorvegliare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini",
      "sicurezza"
    ],
    "context_note": "monitorare o fare attenzione a qualcosa o qualcuno",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Let the cat out of the bag",
    "emoji": "🐱",
    "simple": "",
    "it": "Svelare un segreto / non saper tenere un segreto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "rivelare accidentalmente qualcosa che doveva restare segreto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Miss the boat",
    "emoji": "⛵",
    "simple": "",
    "it": "Perdere l'occasione / arrivare tardi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "lasciarsi sfuggire un'opportunità",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Beat around the bush",
    "emoji": "🌿",
    "simple": "",
    "it": "Girare intorno alla questione / menare il can per l'aia",
    "example_en": "",
    "example_it": "",
    "tags": [
      "comunicazione"
    ],
    "context_note": "evitare di arrivare al punto, parlare di tutto tranne che del problema",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Get a move on",
    "emoji": "⚡",
    "simple": "",
    "it": "Darsi una mossa / sbrigarsi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incoraggiamento ad agire con urgenza",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Break a leg",
    "emoji": "🦵",
    "simple": "",
    "it": "In bocca al lupo! / buona fortuna!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "augurio di buona fortuna, specie prima di uno spettacolo o esame",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Call it a day",
    "emoji": "🌅",
    "simple": "",
    "it": "Smettere per oggi / finirla qui",
    "example_en": "",
    "example_it": "",
    "tags": [
      "attività"
    ],
    "context_note": "decidere di fermarsi e riprendere un'altra volta",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Cross your fingers",
    "emoji": "🤞",
    "simple": "",
    "it": "Incrociare le dita / sperare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "sperare che le cose vadano bene",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Cut to the chase",
    "emoji": "🎬",
    "simple": "",
    "it": "Andare al sodo / venire al punto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "comunicazione"
    ],
    "context_note": "smetttere di girare intorno e dire subito la cosa importante",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Easy come, easy go",
    "emoji": "🌊",
    "simple": "",
    "it": "Facile a venire, facile ad andare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "ciò che si ottiene facilmente si perde altrettanto facilmente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Face the music",
    "emoji": "🎵",
    "simple": "",
    "it": "Affrontare le conseguenze / pagare le conseguenze",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "accettare la punizione o le conseguenze delle proprie azioni",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Get cold feet",
    "emoji": "🥶",
    "simple": "",
    "it": "Avere paura all'ultimo momento / tirarsi indietro",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "perdere coraggio prima di fare qualcosa di importante",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Green with envy",
    "emoji": "💚",
    "simple": "",
    "it": "Verde dall'invidia / morire d'invidia",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "essere molto geloso o invidioso di qualcuno",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "The grass is always greener",
    "emoji": "🌱",
    "simple": "",
    "it": "L'erba del vicino è sempre più verde",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "credere che la situazione degli altri sia sempre migliore della propria",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Every cloud has a silver lining",
    "emoji": "🌈",
    "simple": "",
    "it": "Non tutto il male vien per nuocere",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "ottimismo di fronte alle difficoltà",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "No hard feelings",
    "emoji": "🤝",
    "simple": "",
    "it": "Nessun rancore / senza rancori",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "dire che non si è arrabbiati nonostante quanto è successo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "In hot water",
    "emoji": "♨️",
    "simple": "",
    "it": "Nei guai / in una situazione difficile",
    "example_en": "",
    "example_it": "",
    "tags": [
      "problemi"
    ],
    "context_note": "essere in seri guai o in una situazione problematica",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "To be a handful",
    "emoji": "🌪️",
    "simple": "",
    "it": "essere una peste / difficile da gestire",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini",
      "genitori"
    ],
    "context_note": "bambino difficile",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Could you repeat, please?",
    "emoji": "🔁",
    "simple": "",
    "it": "Puoi ripetere, per favore?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere ripetizione (semplice)",
    "concept": "clarif_repeat"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Could you speak up, please?",
    "emoji": "📢",
    "simple": "",
    "it": "Puoi alzare la voce, per favore?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere di parlare più forte",
    "concept": "clarif_louder"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Say that again, please?",
    "emoji": "🔄",
    "simple": "",
    "it": "Puoi ripetere?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere ripetizione (diretto)",
    "concept": "clarif_short_repeat"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Could you paraphrase this?",
    "emoji": "📝",
    "simple": "",
    "it": "Puoi parafrasare?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere riformulazione",
    "concept": "clarif_rephrase"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Could you explain this differently?",
    "emoji": "🗣️",
    "simple": "",
    "it": "Puoi spiegarlo in modo diverso?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere spiegazione alternativa",
    "concept": "clarif_rephrase"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Can you say it in another way, please?",
    "emoji": "💬",
    "simple": "",
    "it": "Puoi dirlo in un altro modo?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere riformulazione (educato)",
    "concept": "clarif_rephrase"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Would you mind repeating that one last time?",
    "emoji": "🙏",
    "simple": "",
    "it": "Le dispiacerebbe ripetere un'ultima volta?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "chiedere ripetizione (formale/B2)",
    "concept": "clarif_repeat"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Could you clarify? I didn't quite catch that.",
    "emoji": "❓",
    "simple": "",
    "it": "Potrebbe chiarire? Non ho ben capito.",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "non aver capito bene",
    "concept": "clarif_didnt_understand"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Do I understand you correctly, that...?",
    "emoji": "✅",
    "simple": "",
    "it": "Ho capito bene che...?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "confermare comprensione",
    "concept": "clarif_confirm"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Sorry, I didn't catch that.",
    "emoji": "👂",
    "simple": "",
    "it": "Scusa, non ho capito.",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "non aver sentito/capito (comune)",
    "concept": "clarif_didnt_understand"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "What did you just say?",
    "emoji": "😕",
    "simple": "",
    "it": "Cosa hai appena detto?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere ripetizione (informale)",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Did I hear you right?",
    "emoji": "🎧",
    "simple": "",
    "it": "Ho sentito bene?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "confermare quello che si è sentito",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Because",
    "emoji": "🔗",
    "simple": "",
    "it": "perché",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "connettore di causa base",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Since",
    "emoji": "📅",
    "simple": "",
    "it": "poiché",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "causa con sfumatura temporale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "As",
    "emoji": "🔄",
    "simple": "",
    "it": "poiché / dato che",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "causa formale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Due to",
    "emoji": "⚠️",
    "simple": "",
    "it": "a causa di",
    "example_en": "",
    "example_it": "",
    "tags": [
      "lavoro"
    ],
    "context_note": "causa formale scritta",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "In view of",
    "emoji": "🧭",
    "simple": "",
    "it": "in considerazione di",
    "example_en": "",
    "example_it": "",
    "tags": [
      "lavoro"
    ],
    "context_note": "causa formale/B2",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Given that",
    "emoji": "💡",
    "simple": "",
    "it": "considerando che",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "causa logica",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Owing to",
    "emoji": "📋",
    "simple": "",
    "it": "a causa di / in seguito a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "lavoro"
    ],
    "context_note": "causa formale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Thanks to",
    "emoji": "🙏",
    "simple": "",
    "it": "grazie a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "causa positiva",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "For this reason",
    "emoji": "➡️",
    "simple": "",
    "it": "per questo motivo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "connettore conseguenza",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Considering that",
    "emoji": "🤔",
    "simple": "",
    "it": "considerando che",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "causa argomentativa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Basically",
    "emoji": "💬",
    "simple": "",
    "it": "in pratica",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "semplificare un concetto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Actually",
    "emoji": "💡",
    "simple": "",
    "it": "in realtà",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "correggere o precisare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "In fact",
    "emoji": "📌",
    "simple": "",
    "it": "infatti / in realtà",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "rafforzare un'affermazione",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "For instance",
    "emoji": "🎯",
    "simple": "",
    "it": "per esempio",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "introdurre un esempio",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Such as",
    "emoji": "📋",
    "simple": "",
    "it": "come / ad esempio",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "elencare esempi",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "In other words",
    "emoji": "🔄",
    "simple": "",
    "it": "in altre parole",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "riformulare un concetto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "That is (to say)",
    "emoji": "🗣️",
    "simple": "",
    "it": "cioè",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "equivalente di \"ovvero\"",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "To put it simply",
    "emoji": "✏️",
    "simple": "",
    "it": "per dirla semplicemente",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "semplificare un concetto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Moreover",
    "emoji": "➕",
    "simple": "",
    "it": "inoltre",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "aggiungere un punto più forte",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Furthermore",
    "emoji": "📢",
    "simple": "",
    "it": "inoltre / per di più",
    "example_en": "",
    "example_it": "",
    "tags": [
      "lavoro"
    ],
    "context_note": "rinforzo formale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "In addition",
    "emoji": "➕",
    "simple": "",
    "it": "in aggiunta",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "aggiunta neutra",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Additionally",
    "emoji": "📝",
    "simple": "",
    "it": "inoltre",
    "example_en": "",
    "example_it": "",
    "tags": [
      "lavoro"
    ],
    "context_note": "aggiunta formale scritta",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Also",
    "emoji": "✅",
    "simple": "",
    "it": "anche",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "aggiunta base",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "As well",
    "emoji": "🤝",
    "simple": "",
    "it": "anche / pure",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "aggiunta informale a fine frase",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Let alone",
    "emoji": "🚫",
    "simple": "",
    "it": "per non parlare di",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "escludere qualcosa di ancora più estremo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Besides",
    "emoji": "💭",
    "simple": "",
    "it": "inoltre / tra l'altro",
    "example_en": "",
    "example_it": "",
    "tags": [
      "base"
    ],
    "context_note": "aggiunta con sfumatura",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "What's more",
    "emoji": "🔝",
    "simple": "",
    "it": "per di più / oltretutto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "aggiunta con enfasi",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I don't understand",
    "emoji": "😕",
    "simple": "",
    "it": "Non capisco",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incomprensione diretta",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "That doesn't make sense",
    "emoji": "🤔",
    "simple": "",
    "it": "Non ha senso",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "confusione su qualcosa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I'm confused",
    "emoji": "😵",
    "simple": "",
    "it": "Sono confuso/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "stato di confusione",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I can't follow",
    "emoji": "👂",
    "simple": "",
    "it": "Non riesco a seguire",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "perdere il filo del discorso",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I get it",
    "emoji": "💡",
    "simple": "",
    "it": "Capito / ho capito",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "comprensione raggiunta",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I see",
    "emoji": "🔍",
    "simple": "",
    "it": "Vedo / capisco",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "comprensione progressiva",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "That makes sense",
    "emoji": "✅",
    "simple": "",
    "it": "Ha senso",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "conferma comprensione",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I understand it",
    "emoji": "✅",
    "simple": "",
    "it": "Lo capisco",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "comprensione esplicita",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Wait a minute",
    "emoji": "✋",
    "simple": "",
    "it": "Aspetta un attimo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "interrompere brevemente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Hold on",
    "emoji": "✋",
    "simple": "",
    "it": "Aspetta",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "pausa nella conversazione",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Just a second",
    "emoji": "⏱️",
    "simple": "",
    "it": "Un secondo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "pausa breve",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "No big deal",
    "emoji": "👌",
    "simple": "",
    "it": "Nessun problema / Non è niente di che",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "minimizzare qualcosa",
    "concept": "no_big_deal"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Kind of",
    "emoji": "🤷",
    "simple": "",
    "it": "Più o meno / In un certo senso",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta vaga o parziale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "No offense",
    "emoji": "🙏",
    "simple": "",
    "it": "Senza offesa",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "prima di dire qualcosa di scomodo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm out",
    "emoji": "🚪",
    "simple": "",
    "it": "Passo / Non ci sto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "ritirarsi da qualcosa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Just kidding",
    "emoji": "😜",
    "simple": "",
    "it": "Stavo scherzando",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "dopo una battuta",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "My bad",
    "emoji": "🙈",
    "simple": "",
    "it": "Colpa mia / Scusa, mi sono sbagliato",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "ammettere un errore in modo informale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "That's on me",
    "emoji": "🤚",
    "simple": "",
    "it": "È colpa mia / me ne assumo io",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "assumersi la responsabilità di qualcosa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "What the hell?",
    "emoji": "😳",
    "simple": "",
    "it": "Che diavolo? / Ma cosa...?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "sorpresa o reazione forte a qualcosa di inaspettato",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Don't push it",
    "emoji": "✋",
    "simple": "",
    "it": "Non esagerare / non stressare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "invito a non forzare o spingere oltre",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Who cares",
    "emoji": "🤷",
    "simple": "",
    "it": "A chi importa / chi se ne frega",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "disinteresse o liberarsi dal giudizio altrui",
    "concept": "who_cares"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Give me a break",
    "emoji": "😤",
    "simple": "",
    "it": "Ma dai! / Fammi il piacere",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incredulità o leggero fastidio",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "You wish",
    "emoji": "😏",
    "simple": "",
    "it": "Magari / Sì, come no",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta sarcastica a un'affermazione esagerata",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Get over yourself",
    "emoji": "🙄",
    "simple": "",
    "it": "Scendi dal piedistallo / non tirartela",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "dire a qualcuno di smettere di essere arrogante",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "The thing is",
    "emoji": "💭",
    "simple": "",
    "it": "Il fatto è che / la verità è che",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "introdurre una spiegazione, un problema o una riserva",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "The point is",
    "emoji": "🎯",
    "simple": "",
    "it": "Il punto è che / in sostanza",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "riassumere il punto principale di un discorso",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "And stuff (like that)",
    "emoji": "💫",
    "simple": "",
    "it": "E cose del genere / eccetera",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "aggiunta vaga a una lista di cose simili",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Or something",
    "emoji": "🤔",
    "simple": "",
    "it": "O qualcosa del genere",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "aggiungere un'alternativa vaga a fine frase",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I was like",
    "emoji": "💬",
    "simple": "",
    "it": "Ero tipo / ho fatto tipo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "usato nel parlato per riportare una reazione o pensiero",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Anyway",
    "emoji": "➡️",
    "simple": "",
    "it": "Comunque / in ogni caso",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "cambiare argomento o tornare al punto principale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Literally",
    "emoji": "📍",
    "simple": "",
    "it": "Letteralmente / davvero",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "usato per enfatizzare (spesso in modo colloquiale/esagerato)",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Not at all",
    "emoji": "🚫",
    "simple": "",
    "it": "Per niente / assolutamente no",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "negazione enfatica",
    "concept": "not_at_all"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Nah",
    "emoji": "😂",
    "simple": "",
    "it": "Macché! / Ma no!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "negazione informale e leggera",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm down",
    "emoji": "👍",
    "simple": "",
    "it": "Mi sto bene / va bene per me",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "accordo o disponibilità",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm good",
    "emoji": "✅",
    "simple": "",
    "it": "Va bene per me / sto bene",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta positiva, non ho bisogno di nulla",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Go for it",
    "emoji": "🚀",
    "simple": "",
    "it": "Vai! / Fatti! / Prova!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incoraggiamento a fare qualcosa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Fair enough",
    "emoji": "🤝",
    "simple": "",
    "it": "Va bene / è giusto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "accordo o accettazione ragionevole",
    "concept": "fair_enough"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "You bet",
    "emoji": "💯",
    "simple": "",
    "it": "Certamente! / Certo che sì!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "accordo entusiasta",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I meant it",
    "emoji": "💪",
    "simple": "",
    "it": "Lo dico davvero / ero serio",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "enfatizzare che si dice la verità",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "It depends",
    "emoji": "⚖️",
    "simple": "",
    "it": "Dipende / dipende dalle circostanze",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta che non è netta",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Come again?",
    "emoji": "🤨",
    "simple": "",
    "it": "Come? / Scusa, ripeti?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere di ripetere",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Come on",
    "emoji": "😤",
    "simple": "",
    "it": "Dai! / Vai!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incoraggiamento o incredulità",
    "concept": "come_on"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I have a crush on you",
    "emoji": "💘",
    "simple": "",
    "it": "Mi piaci (romanticamente)",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "attrazione romantica per qualcuno",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm catching feelings",
    "emoji": "🥹",
    "simple": "",
    "it": "Sto prendendo una cotta",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "iniziare a sviluppare sentimenti romantici per qualcuno",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm head over heels",
    "emoji": "🌹",
    "simple": "",
    "it": "Sono completamente innamorato/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "amore intenso e travolgente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm into you",
    "emoji": "😍",
    "simple": "",
    "it": "Mi piaci molto / sei il mio tipo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "attrazione romantica o interesse verso qualcuno",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Ghost someone",
    "emoji": "👻",
    "simple": "",
    "it": "Sparire senza spiegazioni",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "interrompere ogni contatto senza dare spiegazioni",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Have a fling",
    "emoji": "🔥",
    "simple": "",
    "it": "Avere una storia / avventura breve",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "relazione romantica breve e non seria",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Hook up",
    "emoji": "🎣",
    "simple": "",
    "it": "Avere un'avventura",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incontro romantico o sessuale occasionale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Shoot your shot",
    "emoji": "🏀",
    "simple": "",
    "it": "Provarci / tentare la fortuna",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "fare il primo passo romanticamente, rischiare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Slow fade",
    "emoji": "🌅",
    "simple": "",
    "it": "Allontanarsi gradualmente",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "sparire lentamente dalla vita di qualcuno senza dirlo direttamente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Fall out of love",
    "emoji": "💔",
    "simple": "",
    "it": "Smettere di amare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "perdere i sentimenti romantici per qualcuno nel tempo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Hit on someone",
    "emoji": "😘",
    "simple": "",
    "it": "Fare la corte a qualcuno / flirtare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "approccio romantico o flirty verso qualcuno",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm broke",
    "emoji": "🪙",
    "simple": "",
    "it": "Sono al verde / non ho soldi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "non avere soldi, essere senza un euro",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Keep in touch",
    "emoji": "📱",
    "simple": "",
    "it": "Rimaniamo in contatto / teniamoci aggiornati",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "invito a mantenere i contatti dopo un saluto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Knock it off",
    "emoji": "🛑",
    "simple": "",
    "it": "Smettila! / Piantala!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "dire a qualcuno di smettere di fare qualcosa di fastidioso",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Keep someone posted",
    "emoji": "📬",
    "simple": "",
    "it": "Tienmi aggiornato / aggiornare qualcuno",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "chiedere di ricevere aggiornamenti su qualcosa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Let it go",
    "emoji": "🕊️",
    "simple": "",
    "it": "Lascia andare / non pensarci più",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "smettere di pensare a qualcosa che fa stare male",
    "concept": "let_it_go"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Beats me",
    "emoji": "🤷",
    "simple": "",
    "it": "Non ne ho idea / boh / chi lo sa",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta informale per dire che non si sa qualcosa",
    "concept": "dunno"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Whatever you say",
    "emoji": "🙄",
    "simple": "",
    "it": "Come vuoi / quel che dici tu",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "accordo ironico o rassegnato",
    "concept": "whatever_you_say"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "That's right",
    "emoji": "✅",
    "simple": "",
    "it": "È così / esatto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "conferma di quanto detto da un altro",
    "concept": "thats_right"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Give it a shot",
    "emoji": "🎯",
    "simple": "",
    "it": "Provarci / fare un tentativo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "tentare qualcosa anche senza certezze",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Have a blast",
    "emoji": "🎉",
    "simple": "",
    "it": "Divertirsi un sacco / spassarsela",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "divertirsi moltissimo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Have second thoughts",
    "emoji": "🤔",
    "simple": "",
    "it": "Avere ripensamenti / non essere più sicuro",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "iniziare a dubitare di una decisione già presa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Get a grip",
    "emoji": "💪",
    "simple": "",
    "it": "Datti una calmata / riprenditi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "dire a qualcuno di controllarsi e smettere di farsi prendere dal panico",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Social butterfly",
    "emoji": "🦋",
    "simple": "",
    "it": "Anima della festa / persona molto socievole",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "chi è a proprio agio in qualsiasi contesto sociale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Eye candy",
    "emoji": "😍",
    "simple": "",
    "it": "Qualcosa/qualcuno di molto piacevole da guardare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "persona attraente o oggetto molto bello visivamente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "How's it going?",
    "emoji": "👋",
    "simple": "",
    "it": "Come va?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "saluto informale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "How've you been?",
    "emoji": "🤗",
    "simple": "",
    "it": "Come sei stato/a?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "saluto dopo un po'",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Hey, what's new?",
    "emoji": "🆕",
    "simple": "",
    "it": "Ehi, che c'è di nuovo?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "saluto curioso",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Sup?",
    "emoji": "😎",
    "simple": "",
    "it": "Che si dice?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "saluto super informale / slang",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "What's up?",
    "emoji": "🙌",
    "simple": "",
    "it": "Che succede?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "saluto informale americano",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Hey there",
    "emoji": "👋",
    "simple": "",
    "it": "Ehi / Ciao",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "saluto neutro informale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Long time no see",
    "emoji": "⏳",
    "simple": "",
    "it": "È da tanto che non ci vediamo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "incontro dopo lungo tempo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Nice to see you",
    "emoji": "😊",
    "simple": "",
    "it": "Piacere di vederti",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "incontro piacevole",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Good to see you",
    "emoji": "🥰",
    "simple": "",
    "it": "Felice di vederti",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "calore nel salutare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "What's the deal?",
    "emoji": "🤨",
    "simple": "",
    "it": "Che succede? / Che storia è questa?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "curiosità o sorpresa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Here we go again",
    "emoji": "🔁",
    "simple": "",
    "it": "Eccoci di nuovo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "rassegnazione ironica",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "That figures",
    "emoji": "🙄",
    "simple": "",
    "it": "Era prevedibile",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "sarcasmo bonario",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Suit yourself",
    "emoji": "🤷",
    "simple": "",
    "it": "Fai come vuoi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "indifferenza / lasciare libertà",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Don't even",
    "emoji": "🚫",
    "simple": "",
    "it": "Non iniziare nemmeno",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "bloccare una discussione",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "That's your call",
    "emoji": "👉",
    "simple": "",
    "it": "Decidi tu",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "rimandare la decisione all'altro",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I doubt it",
    "emoji": "😐",
    "simple": "",
    "it": "Ne dubito",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "scetticismo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Poor you",
    "emoji": "😢",
    "simple": "",
    "it": "Povero te / Poverina",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "compassione ironica o sincera",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Back off",
    "emoji": "😤",
    "simple": "",
    "it": "Lasciami stare / Levati",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "difendersi da qualcuno invadente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Snatched",
    "emoji": "💅",
    "simple": "",
    "it": "Perfetto / impeccabile",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "complimento su look/stile (slang Gen Z)",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Salty",
    "emoji": "😒",
    "simple": "",
    "it": "Offeso / risentito",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "essere suscettibile o risentito",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "NO CAP",
    "emoji": "🧢",
    "simple": "",
    "it": "Senza scherzi / davvero",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "enfatizzare la verità (slang)",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "High-key",
    "emoji": "🔊",
    "simple": "",
    "it": "Davvero / molto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "intensificare un'affermazione (slang)",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I gotta go",
    "emoji": "🏃",
    "simple": "",
    "it": "Devo andare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "congedo informale urgente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Catch you later",
    "emoji": "👋",
    "simple": "",
    "it": "A dopo / ci vediamo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "saluto informale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Talk to you later",
    "emoji": "📱",
    "simple": "",
    "it": "Ci sentiamo dopo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "congedo al telefono o chat",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'll get going",
    "emoji": "🚶",
    "simple": "",
    "it": "Mi avvio / vado",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "congedo gentile",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "See you around",
    "emoji": "🙌",
    "simple": "",
    "it": "Ci vediamo in giro",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "saluto vago",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm off",
    "emoji": "🚪",
    "simple": "",
    "it": "Vado / me ne vado",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "congedo diretto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Let's call it a day",
    "emoji": "🌅",
    "simple": "",
    "it": "Chiudiamola qui per oggi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "fine attività/lavoro",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'll head out",
    "emoji": "🏃",
    "simple": "",
    "it": "Me ne vado",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "congedo informale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Take care",
    "emoji": "🤗",
    "simple": "",
    "it": "Abbi cura di te",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "saluto affettuoso",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Time to head out",
    "emoji": "⏰",
    "simple": "",
    "it": "È ora di andare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "congedo con senso temporale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'll catch up with you later",
    "emoji": "☕",
    "simple": "",
    "it": "Ci aggiorniamo dopo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "genitori"
    ],
    "context_note": "rimandare a più tardi",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm ready",
    "emoji": "✅",
    "simple": "",
    "it": "Sono pronto/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "disponibilità",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm good to go",
    "emoji": "🚀",
    "simple": "",
    "it": "Sono pronto/a a partire",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "disponibilità entusiasta",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm prepared",
    "emoji": "🎒",
    "simple": "",
    "it": "Sono preparato/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "disponibilità formale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm geared up",
    "emoji": "⚙️",
    "simple": "",
    "it": "Sono attrezzato/a / pronto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "disponibilità con energia",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "It's fine",
    "emoji": "🆗",
    "simple": "",
    "it": "Va bene",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "minimizzare o rassicurare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "No worries",
    "emoji": "😌",
    "simple": "",
    "it": "Nessun problema",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "rassicurazione informale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "All good",
    "emoji": "✅",
    "simple": "",
    "it": "Tutto a posto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "tutto ok",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "It's alright",
    "emoji": "👌",
    "simple": "",
    "it": "Va tutto bene",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "rassicurazione",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Don't worry about it",
    "emoji": "🤗",
    "simple": "",
    "it": "Non preoccuparti",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "rassicurare qualcuno",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "It's nothing",
    "emoji": "🤏",
    "simple": "",
    "it": "Non è niente",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "minimizzare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "No way!",
    "emoji": "😱",
    "simple": "",
    "it": "Ma dai! / Impossibile!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "sorpresa o incredulità",
    "concept": "disbelief"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "Hold your horses!",
    "emoji": "🐴",
    "simple": "",
    "it": "Pazienza! / Piano!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "invito a calmarsi o rallentare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "Don't lose your head!",
    "emoji": "🧠",
    "simple": "",
    "it": "Non perdere la testa!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "invito a mantenere il controllo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I've had it up to here",
    "emoji": "✋",
    "simple": "",
    "it": "Ne ho fin sopra i capelli",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione totale, non se ne può più",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "It's not the end of the world",
    "emoji": "🌍",
    "simple": "",
    "it": "Non è la fine del mondo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "minimizzare una situazione negativa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm at my wits' end",
    "emoji": "😵",
    "simple": "",
    "it": "Non so più che fare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "disperazione per la frustrazione",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That's insane!",
    "emoji": "🤯",
    "simple": "",
    "it": "È assurdo! / È pazzesco!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "reazione forte",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That's mental!",
    "emoji": "🧠",
    "simple": "",
    "it": "È pazzesco! / È assurdo!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "reazione forte (UK slang)",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That's awesome!",
    "emoji": "🤩",
    "simple": "",
    "it": "È fantastico!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "entusiasmo",
    "concept": "joy_intense"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "Oh my God!",
    "emoji": "😮",
    "simple": "",
    "it": "Oddio!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "sorpresa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That's crazy!",
    "emoji": "🌀",
    "simple": "",
    "it": "È pazzesco!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "sorpresa o reazione",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "What a mess!",
    "emoji": "🤦",
    "simple": "",
    "it": "Che casino!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "situazione caotica",
    "concept": "chaos_mess"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That sucks!",
    "emoji": "😞",
    "simple": "",
    "it": "Che schifo! / Che peccato!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "disappunto",
    "concept": "disappointment"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "No kidding!",
    "emoji": "😲",
    "simple": "",
    "it": "Ma davvero?!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incredulità ironica",
    "concept": "ironic_surprise"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "Are you serious?!",
    "emoji": "😤",
    "simple": "",
    "it": "Ma sei serio?!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incredulità",
    "concept": "shocked_question"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "This is wild!",
    "emoji": "🦁",
    "simple": "",
    "it": "È assurdo! / È incredibile!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "stupore",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "You don't say!",
    "emoji": "🫢",
    "simple": "",
    "it": "Ma va?!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "sorpresa ironica",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That's sick!",
    "emoji": "🔥",
    "simple": "",
    "it": "È fortissimo! / È pazzesco!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "slang positivo",
    "concept": "slang_awesome"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "This is annoying",
    "emoji": "😒",
    "simple": "",
    "it": "È irritante",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "fastidio lieve",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm fed up",
    "emoji": "😩",
    "simple": "",
    "it": "Sono stufo/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "stanchezza/noia accumulata",
    "concept": "exhaustion_fed_up"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I've had enough",
    "emoji": "🛑",
    "simple": "",
    "it": "Ne ho abbastanza",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "limite raggiunto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "This is unbearable",
    "emoji": "😣",
    "simple": "",
    "it": "È insopportabile",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione forte",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm sick of this",
    "emoji": "🤢",
    "simple": "",
    "it": "Sono stufo/a di questa cosa",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione ripetuta",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "This is driving me crazy",
    "emoji": "🌪️",
    "simple": "",
    "it": "Mi sta facendo impazzire",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione massima",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I can't deal with this",
    "emoji": "😰",
    "simple": "",
    "it": "Non riesco a gestirlo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione intensa, situazione sopraffacente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm over it",
    "emoji": "🙌",
    "simple": "",
    "it": "Ne ho abbastanza / l'ho superata",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "stanchezza e voglia di andare avanti",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "This is ridiculous",
    "emoji": "🙃",
    "simple": "",
    "it": "È ridicolo!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "reazione di frustrazione o incredulità",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm at my limit",
    "emoji": "🌋",
    "simple": "",
    "it": "Sono al limite",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione al massimo, non se ne può più",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "It gets on my nerves",
    "emoji": "😬",
    "simple": "",
    "it": "Mi dà sui nervi / mi irrita",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "qualcosa di ripetutamente fastidioso",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I can't take it anymore",
    "emoji": "🤯",
    "simple": "",
    "it": "Non ce la faccio più",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "limite raggiunto, situazione insopportabile",
    "concept": "exhaustion_fed_up"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "It pissed me off",
    "emoji": "🤬",
    "simple": "",
    "it": "Mi ha fatto incazzare",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "qualcosa che ha fatto arrabbiare molto (informale)",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm on edge",
    "emoji": "⚡",
    "simple": "",
    "it": "Sono tesissimo/a / sulle spine",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "nervosismo, tensione, difficoltà a rilassarsi",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm tense",
    "emoji": "😬",
    "simple": "",
    "it": "Sono teso/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "tensione fisica e mentale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "My nerves are shot",
    "emoji": "💥",
    "simple": "",
    "it": "Ho i nervi a pezzi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "nervi logorati, tensione accumulata",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm freaking out",
    "emoji": "😱",
    "simple": "",
    "it": "Sto andando nel panico / impazzisco",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "panico o agitazione intensa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I can't calm down",
    "emoji": "🌪️",
    "simple": "",
    "it": "Non riesco a calmarmi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "agitazione che non si riesce a controllare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm losing it",
    "emoji": "🫠",
    "simple": "",
    "it": "Sto perdendo il controllo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "perdere lucidità o controllo emotivo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I feel crushed",
    "emoji": "💔",
    "simple": "",
    "it": "Mi sento a pezzi / distrutto/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "dolore emotivo intenso, devastazione",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I have a lump in my throat",
    "emoji": "🥺",
    "simple": "",
    "it": "Ho un nodo alla gola",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "emozione intensa che blocca la parola, vicino al pianto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm emotionally drained",
    "emoji": "🪫",
    "simple": "",
    "it": "Sono emotivamente sfinito/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "esaurimento emotivo dopo situazioni intense",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I feel like crying",
    "emoji": "😢",
    "simple": "",
    "it": "Mi viene da piangere",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "sensazione di voler piangere",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm on the verge of tears",
    "emoji": "😭",
    "simple": "",
    "it": "Sono sul punto di piangere",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "a un passo dal pianto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I want it",
    "emoji": "🙋",
    "simple": "",
    "it": "Lo voglio",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "desiderio diretto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I don't like it",
    "emoji": "👎",
    "simple": "",
    "it": "Non mi piace",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "disappunto / rifiuto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "In my opinion",
    "emoji": "💭",
    "simple": "",
    "it": "Secondo me",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "opinione formale",
    "concept": "opinion_formal"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "As far as I know",
    "emoji": "🔭",
    "simple": "",
    "it": "Per quanto ne so",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incertezza educata",
    "concept": "opinion_limited_knowledge"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "If you ask me",
    "emoji": "🙋",
    "simple": "",
    "it": "Se lo chiedi a me",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "opinione personale",
    "concept": "opinion_personal"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I guess...",
    "emoji": "🤔",
    "simple": "",
    "it": "Immagino... / Suppongo...",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incertezza",
    "concept": "opinion_tentative"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I feel like...",
    "emoji": "💫",
    "simple": "",
    "it": "Ho l'impressione che...",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "sensazione personale",
    "concept": "opinion_impression"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Personally speaking",
    "emoji": "👤",
    "simple": "",
    "it": "Personalmente",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "opinione personale",
    "concept": "opinion_personal"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "The way I see it...",
    "emoji": "👁️",
    "simple": "",
    "it": "Per come la vedo io...",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "punto di vista",
    "concept": "opinion_pov"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'd say...",
    "emoji": "💬",
    "simple": "",
    "it": "Direi che...",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "opinione cauta",
    "concept": "opinion_tentative"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm pretty sure...",
    "emoji": "🎯",
    "simple": "",
    "it": "Sono abbastanza sicuro che...",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "quasi certezza",
    "concept": "opinion_confident"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "To be honest...",
    "emoji": "💯",
    "simple": "",
    "it": "Ad essere onesto...",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "franchezza",
    "concept": "honesty_marker"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm into it",
    "emoji": "🔥",
    "simple": "",
    "it": "Mi piace un sacco / mi appassiona",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "interesse entusiasta",
    "concept": "pref_into_it"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I dig it",
    "emoji": "🎸",
    "simple": "",
    "it": "Mi piace un sacco",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "slang per esprimere entusiasmo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm a fan of it",
    "emoji": "⭐",
    "simple": "",
    "it": "Ne sono fan",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "preferenza dichiarata",
    "concept": "pref_fan_of"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm really into that",
    "emoji": "💫",
    "simple": "",
    "it": "Mi piace davvero / mi appassiona molto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "preferenza forte",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "It's my thing",
    "emoji": "🎯",
    "simple": "",
    "it": "Fa per me / è il mio campo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "affinità personale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm not sure",
    "emoji": "🤷",
    "simple": "",
    "it": "Non sono sicuro/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incertezza",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm not certain",
    "emoji": "😐",
    "simple": "",
    "it": "Non sono certo/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "incertezza formale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm not convinced",
    "emoji": "🧐",
    "simple": "",
    "it": "Non sono convinto/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "scetticismo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm on the fence",
    "emoji": "⚖️",
    "simple": "",
    "it": "Sono indeciso/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "indecisione",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Hard to say",
    "emoji": "🤔",
    "simple": "",
    "it": "Difficile a dirsi",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta vaga",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "All in all",
    "emoji": "📊",
    "simple": "",
    "it": "In generale / tutto sommato",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "conclusione o bilancio",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Beautiful",
    "emoji": "😍",
    "simple": "",
    "it": "Bello/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "bellezza",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Gorgeous",
    "emoji": "🌟",
    "simple": "",
    "it": "Splendido/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "bellezza intensa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Stunning",
    "emoji": "🤩",
    "simple": "",
    "it": "Mozzafiato",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "bellezza sorprendente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Lovely",
    "emoji": "💕",
    "simple": "",
    "it": "Adorabile",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "qualcosa di grazioso",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Pretty",
    "emoji": "🌸",
    "simple": "",
    "it": "Carino/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "bellezza delicata",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Attractive",
    "emoji": "💫",
    "simple": "",
    "it": "Attraente",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "attrazione estetica",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Amazing",
    "emoji": "🤯",
    "simple": "",
    "it": "Fantastico/a",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "entusiasmo forte",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Good",
    "emoji": "👍",
    "simple": "",
    "it": "Buono",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "valutazione positiva base",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Nice",
    "emoji": "😊",
    "simple": "",
    "it": "Piacevole",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "gradevolezza",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Awesome",
    "emoji": "🔥",
    "simple": "",
    "it": "Fantastico",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "entusiasmo colloquiale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Solid",
    "emoji": "💪",
    "simple": "",
    "it": "Valido",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "approvazione solida",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Decent",
    "emoji": "🆗",
    "simple": "",
    "it": "Decente",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "approvazione moderata",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Excellent",
    "emoji": "⭐",
    "simple": "",
    "it": "Eccellente",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "valutazione alta",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Impressive",
    "emoji": "👏",
    "simple": "",
    "it": "Impressionante",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "qualcosa che colpisce",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Bad",
    "emoji": "👎",
    "simple": "",
    "it": "Cattivo / brutto",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "valutazione negativa base",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Terrible",
    "emoji": "😱",
    "simple": "",
    "it": "Terribile",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "valutazione molto negativa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Awful",
    "emoji": "🤢",
    "simple": "",
    "it": "Pessimo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "disgusto o forte disappunto",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Horrible",
    "emoji": "😣",
    "simple": "",
    "it": "Orribile",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "orrore o forte fastidio",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Sucks",
    "emoji": "💩",
    "simple": "",
    "it": "Fa schifo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "slang informale negativo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Ridiculous",
    "emoji": "🙃",
    "simple": "",
    "it": "Ridicolo",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "assurdità",
    "concept": ""
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Pathetic",
    "emoji": "😤",
    "simple": "",
    "it": "Patetico",
    "example_en": "",
    "example_it": "",
    "tags": [
      "bambini"
    ],
    "context_note": "disprezzo",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "The water's lovely!",
    "emoji": "💧",
    "simple": "",
    "it": "L'acqua è meravigliosa!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "invitare qualcuno ad entrare in acqua",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Dive in!",
    "emoji": "🤿",
    "simple": "",
    "it": "Buttati!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "incoraggiare qualcuno a tuffarsi",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Last one in is a rotten egg!",
    "emoji": "🥚",
    "simple": "",
    "it": "L'ultimo che entra è un uovo marcio!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "grido scherzoso per spingere tutti in acqua",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Let's warm up first!",
    "emoji": "🤸",
    "simple": "",
    "it": "Prima facciamo riscaldamento!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "prima di nuotare, attività fisica",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Check the flag before you go in!",
    "emoji": "🚩",
    "simple": "",
    "it": "Controlla la bandiera prima di entrare!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare",
      "sicurezza"
    ],
    "context_note": "sicurezza in mare, colori della bandiera",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Wet your feet first!",
    "emoji": "🦶",
    "simple": "",
    "it": "Bagnati i piedi prima!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "abituarsi all'acqua gradualmente",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Stay in the shallow end!",
    "emoji": "📏",
    "simple": "",
    "it": "Resta nella parte bassa!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare",
      "sicurezza"
    ],
    "context_note": "sicurezza per chi non sa nuotare bene",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Buddy up — no one swims alone!",
    "emoji": "👫",
    "simple": "",
    "it": "A coppie — nessuno nuota da solo!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare",
      "sicurezza"
    ],
    "context_note": "regola di sicurezza fondamentale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Put your sunscreen on!",
    "emoji": "🧴",
    "simple": "",
    "it": "Metti la crema solare!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "prima di esporsi al sole",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Don't run by the pool!",
    "emoji": "⚠️",
    "simple": "",
    "it": "Non correre in piscina!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare",
      "sicurezza"
    ],
    "context_note": "regola di sicurezza standard",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "No swimming right after eating!",
    "emoji": "🍕",
    "simple": "",
    "it": "Non nuotate subito dopo aver mangiato!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "regola classica, anche se discussa",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Watch out for the waves!",
    "emoji": "🌊",
    "simple": "",
    "it": "Attenzione alle onde!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare",
      "sicurezza"
    ],
    "context_note": "avvertimento per i bambini in riva al mare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "The sea is really choppy today.",
    "emoji": "⛵",
    "simple": "",
    "it": "Il mare è molto mosso oggi.",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "avvisare sulle condizioni del mare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Let's do a head count!",
    "emoji": "🔢",
    "simple": "",
    "it": "Contiamoci tutti!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "verificare che ci siano tutti prima di entrare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Race you to the buoy!",
    "emoji": "🏁",
    "simple": "",
    "it": "Chi arriva primo al galleggiante!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "sfida amichevole tra nuotatori",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Can you float on your back?",
    "emoji": "🏊",
    "simple": "",
    "it": "Sai fare il morto a galla?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "gioco o sfida in acqua",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Splash fight!",
    "emoji": "💦",
    "simple": "",
    "it": "Battaglia d'acqua!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "gioco d'acqua classico",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Hold your breath!",
    "emoji": "🤐",
    "simple": "",
    "it": "Tieni il respiro!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "sfida apnea, gioco sott'acqua",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Cannonball!",
    "emoji": "💣",
    "simple": "",
    "it": "Bomba!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "grido prima di tuffarsi a bomba",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Towel off before you catch a cold!",
    "emoji": "🏖️",
    "simple": "",
    "it": "Asciugati o prendi il raffreddore!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "dopo il bagno, specialmente con i bambini",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "How was the water?",
    "emoji": "❓",
    "simple": "",
    "it": "Com'era l'acqua?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "chiedere dopo il bagno",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Time to reapply sunscreen!",
    "emoji": "🧴",
    "simple": "",
    "it": "Ora rimetti la crema solare!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "dopo il bagno la crema si lava via",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "You've caught a bit of sun!",
    "emoji": "🔴",
    "simple": "",
    "it": "Ti sei preso un po' di sole!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "notare che qualcuno si è scottato",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Let's rinse off in the shower!",
    "emoji": "🚿",
    "simple": "",
    "it": "Andiamo a sciacquarci alla doccia!",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "dopo il bagno in mare, togliere il sale",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Did you lose anything in the water?",
    "emoji": "🔍",
    "simple": "",
    "it": "Hai perso qualcosa in acqua?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "controllo oggetti dopo il bagno",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Anyone get stung by a jellyfish?",
    "emoji": "🪼",
    "simple": "",
    "it": "Qualcuno è stato punto da una medusa?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "domanda frequente al mare",
    "concept": ""
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Who's hungry after all that swimming?",
    "emoji": "🍉",
    "simple": "",
    "it": "Chi ha fame dopo tutta quella nuotata?",
    "example_en": "",
    "example_it": "",
    "tags": [
      "mare"
    ],
    "context_note": "dopo il bagno viene sempre fame",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "sign in / sign out",
    "emoji": "📝",
    "simple": "",
    "it": "firmare l'entrata / l'uscita",
    "example_en": "Please don't forget to sign your kids out before leaving.",
    "example_it": "Per favore, non dimenticate di firmare l'uscita dei bambini prima di andare.",
    "tags": [
      "genitori",
      "scuola",
      "sicurezza"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "snack time",
    "emoji": "🍎",
    "simple": "",
    "it": "ora della merenda",
    "example_en": "Wash your hands, it's snack time!",
    "example_it": "Lavatavi le mani, è l'ora della merenda!",
    "tags": [
      "bambini",
      "routine"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "to be a handful",
    "emoji": "🌪️",
    "simple": "",
    "it": "essere una peste / difficile da gestire",
    "example_en": "He can be a bit of a handful sometimes, but he is lovely.",
    "example_it": "A volte può essere una peste, ma è adorabile.",
    "tags": [
      "bambini",
      "comportamento",
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "fall for it",
    "emoji": "🤡",
    "simple": "",
    "it": "ci sei cascato",
    "example_en": "You fell for it!",
    "example_it": "Ci sei cascato!",
    "tags": [
      "reazione",
      "scherzo"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "you got me",
    "emoji": "🤝",
    "simple": "",
    "it": "mi hai fregato",
    "example_en": "Haha, you got me!",
    "example_it": "Ahah, mi hai fregato!",
    "tags": [
      "reazione",
      "scherzo"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "good one",
    "emoji": "👍",
    "simple": "",
    "it": "bella questa!",
    "example_en": "That was a good one!",
    "example_it": "Questa era bella!",
    "tags": [
      "reazione",
      "apprezzamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "that's not funny",
    "emoji": "😐",
    "simple": "",
    "it": "non è divertente",
    "example_en": "Stop it, that's not funny.",
    "example_it": "Smettila, non è divertente.",
    "tags": [
      "reazione",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "pulling your leg",
    "emoji": "😜",
    "simple": "",
    "it": "ti prendo in giro",
    "example_en": "Don't worry, I'm just pulling your leg!",
    "example_it": "Non preoccuparti, ti sto solo prendendo in giro!",
    "tags": [
      "scherzo",
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  }
];
